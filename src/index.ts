import * as bootstrap from "bootstrap";
import {
  timezone_callbacks,
  display_countries,
  clear_countries,
} from "./config";
import {
  ParseStations,
  country_attributes,
  parse_station_metadata,
} from "./parse_data";
import { generate_summary } from "./summary";
import { download } from "./download";
import { UploadBase, UploadDefault, UploadFile } from "./file_upload";
import { CountryDetails, StationMetadata, TidalStations } from "./types";

const sw_version = "v0.1.1";

/* Base class for the App's various pages. */
abstract class PageBase {
  abstract name: string; // Human readable name of the page.
  abstract index: number; // Order of the page in the top level breadcrumb menu.
  abstract hash: string; // URL hash and class attribute of the pages main HTML div.
  abstract button_visible: boolean;
  static all_pages: PageBase[] = [];
  static warnings: string[] = [];
  abstract turn_on: string[];
  abstract turn_off: string[];

  // The following are data containers populated by some pages and consumed by others.
  static country_details: CountryDetails;
  static stations: ParseStations;
  static station_metadata: StationMetadata;
  //static data_upload: UploadFile;
  static data_upload: UploadBase;
  static metadata_upload: UploadFile;

  /* Will disable all pages except the one matching the URLs hash value. */
  static hashchange() {
    console.log(`Hash change: ${window.location.hash}`);
    for (const page of PageBase.all_pages) {
      if (window.location.hash === `#${page.hash}`) {
        page.enable_page();
      }
    }
    if (PageBase.display_warnings) {
      PageBase.display_warnings();
    }
  }

  /* To be called immediately after instantiating this class. */
  public setup() {
    PageBase.all_pages.push(this);

    this.populate_menu();

    return this;
  }

  /* Add this page's entry to the breadcrumb menu. */
  private populate_menu() {
    const element_menu = $("div.menu");
    let menu_element = element_menu.find(`div#menu-element-${this.index}`);

    if (menu_element.length) {
      // Button already exists.
      return this;
    }

    menu_element = $(`<div id="menu-element-${this.index}"></div>`);
    const menu_button = $(
      `<input type="radio" class="btn-check" name="main-menu" id="menu-button-${this.index}" autocomplete="off"></input>`,
    );
    const menu_label = $(
      `<label class="btn btn-outline-primary" for="menu-button-${this.index}">${this.name}</label>`,
    );
    menu_element.append(menu_button);
    menu_element.append(menu_label);

    menu_button.on("change", (event) => {
      window.location.hash = `#${this.hash}`;
    });

    let previous_child = null;
    for (const child of element_menu.children("div")) {
      const child_index = Number(child.id.split("-")[2]);
      if (child_index >= this.index) {
        break;
      }
      previous_child = child;
    }
    if (previous_child === null) {
      // No other button exists yet.
      element_menu.append(menu_element[0]);
    } else {
      // Insert button after next lowest index.
      previous_child.after(menu_element[0]);
    }

    this.show_button(this.button_visible);
    return this;
  }

  /* Make this page's breadcrumb button the active one. */
  private enable_button() {
    const button = $(`input#menu-button-${this.index}`);
    button.prop("checked", true);
    return this;
  }

  // Display this page's main HTML div.
  // This method can be extended to add further functionally for the inherited pages.
  protected enable_page() {
    this.enable_button();
    $("div[id^='page-']").addClass("d-none");
    $(`div#${this.hash}`).removeClass("d-none");

    return this;
  }

  protected static display_warnings() {
    if (PageBase.warnings.length === 0) {
      return;
    }

    const modal_html = document.getElementById("warningModal");
    if (!modal_html) {
      return;
    }

    let modal = bootstrap.Modal.getOrCreateInstance("#warningModal");
    console.log(modal);
    if (!modal) {
      const options = {};
      modal = new bootstrap.Modal(modal_html, options);
    }
    const modal_body = modal_html.querySelector(".modal-body");
    if (!modal_body) {
      return;
    }

    let modal_message = "<ul>";
    while (PageBase.warnings.length > 0) {
      const warning = PageBase.warnings.pop();
      modal_message += `<li>${warning}</li>`;
    }
    modal_message += "</ul>";

    modal_body.innerHTML += modal_message;
    modal.show();

    modal_html.addEventListener("hidden.bs.modal", (event) => {
      modal_body.innerHTML = "";
    });

    PageBase.warnings = [];
  }

  public show_button(state: boolean) {
    this.button_visible = state;
    if (state) {
      $(`div#menu-element-${this.index}`).removeClass("d-none");
    } else {
      $(`div#menu-element-${this.index}`).addClass("d-none");
    }
    return this;
  }

  // Some pages should hide links to other pages, further in the process.
  protected enable_links(state: boolean) {
    for (const page of PageBase.all_pages) {
      if (state) {
        if (this.turn_on.includes(page.hash)) {
          page.show_button(true);
        }
      } else {
        if (this.turn_off.includes(page.hash)) {
          page.show_button(false);
        }
      }
    }
  }
}

class PageInfo extends PageBase {
  name: string = "Info";
  index: number = 0;
  hash: string = "page-info";
  button_visible: boolean = true;
  turn_on: string[] = [];
  turn_off: string[] = [];
}

class PageImport extends PageBase {
  name: string = "Import";
  index: number = 1;
  hash: string = "page-import";
  button_visible: boolean = true;
  turn_on: string[] = ["page-config"];
  turn_off: string[] = ["page-config", "page-summary", "page-download"];
  first_visit: boolean = true;

  public enable_page() {
    super.enable_page();

    if (this.first_visit) {
      this.enable_default_upload();
      this.enable_manual_upload();
    }

    this.enable_links(true);
    this.first_visit = false;
    return this;
  }

  private enable_default_upload() {
    console.log("enable_default_upload");
    this.enable_links(true);
    if (this.first_visit) {
      PageBase.data_upload = new UploadDefault();
    }
  }

  private enable_manual_upload() {
    console.log("enable_manual_upload");
    this.enable_links(false);

    PageBase.data_upload = new UploadFile(
      "harmonic",
      this.enable_links.bind(this),
    );

    PageBase.data_upload = new UploadFile(
      "metadata",
      this.enable_links.bind(this),
    );
  }
}

class PageConfig extends PageBase {
  name: string = "Configuration";
  index: number = 2;
  hash: string = "page-config";
  button_visible: boolean = false;
  turn_on: string[] = ["page-summary"];
  turn_off: string[] = [];

  data_version: number = -1;

  public enable_page() {
    super.enable_page();

    const [metadata, warnings] = parse_station_metadata(
      PageBase.data_upload.get_imported_data(),
    );
    PageBase.station_metadata = metadata;
    PageBase.warnings.push(...warnings);

    if (this.data_version === PageBase.data_upload.get_version()) {
      // No change in station data since last time we visited page.
      return this;
    }
    this.data_version = PageBase.data_upload.get_version();

    timezone_callbacks();
    clear_countries();

    if (true) {
      const worker = new Worker(new URL("worker.js", import.meta.url), {
        type: "module",
      });
      worker.postMessage([PageBase.data_upload.get_imported_data()]);
      worker.onmessage = this.worker_callback.bind(this);
    }

    return this;
  }

  private worker_callback(event: MessageEvent) {
    PageBase.stations = event.data;
    PageBase.warnings.push(...PageBase.stations.warnings);
    PageBase.country_details = country_attributes(PageBase.stations.stations);
    display_countries(PageBase.country_details);
    this.enable_links(true);
    PageBase.display_warnings();
  }
}

class PageSummary extends PageBase {
  name: string = "Summary";
  index: number = 3;
  hash: string = "page-summary";
  button_visible: boolean = false;
  turn_on: string[] = ["page-download"];
  turn_off: string[] = [];

  public enable_page() {
    super.enable_page();
    super.show_button(true);
    if (PageBase.country_details) {
      generate_summary(PageBase.country_details);
      this.enable_links(true);
    } else {
      // Data from setup stage has not arrived yet. Try again in 1 second.
      console.log("Retry page draw in 1 second.");
      setTimeout(this.enable_page.bind(this), 1000);
    }

    return this;
  }
}

class PageDownload extends PageBase {
  name: string = "Download";
  index: number = 4;
  hash: string = "page-download";
  button_visible: boolean = false;
  turn_on: string[] = [];
  turn_off: string[] = [];
  first_visit: boolean = true;

  public enable_page() {
    super.enable_page();
    if (this.first_visit) {
      const download_button = $("a#download-now").click(() => {
        download(
          PageBase.country_details,
          PageBase.stations.stations,
          PageBase.station_metadata,
        );
      });
    }

    this.first_visit = false;
    return this;
  }
}

function run_app() {
  $("[title='sw_version']").text(sw_version);

  const t0 = new PageInfo().setup();
  const t1 = new PageImport().setup();
  const t2 = new PageConfig().setup();
  const t3 = new PageSummary().setup();
  const t4 = new PageDownload().setup();

  $(window).on("hashchange", PageBase.hashchange.bind(t0));

  if (window.location.hash != "#page-info") {
    window.location.hash = "#page-info";
  } else {
    PageBase.hashchange();
  }
}

document.addEventListener("DOMContentLoaded", run_app);
