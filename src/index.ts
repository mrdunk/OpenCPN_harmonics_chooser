import {
  timezone_callbacks,
  display_countries,
  clear_countries,
} from "./config";
import { ParseStations, country_attributes } from "./parse_data";
import { generate_summary } from "./summary";
import { download } from "./download";
import { DataUpload } from "./file_upload";

const sw_version = "v0.1.0";

/* Base class for the App's various pages. */
abstract class PageBase {
  abstract name: string; // Human readable name of the page.
  abstract index: number; // Order of the page in the top level breadcrumb menu.
  abstract hash: string; // URL hash and class attribute of the pages main HTML div.
  abstract button_visible: boolean;
  static all_pages: PageBase[] = [];
  abstract turn_on: string[];
  abstract turn_off: string[];

  // The following are data containers populated by some pages and consumed by others.
  static country_details: CountryDetails;
  static stations: TidalStations;
  static data_upload: DataUpload;

  /* Will disable all pages except the one matching the URLs hash value. */
  static hashchange() {
    for (const page of PageBase.all_pages) {
      if (window.location.hash === `#${page.hash}`) {
        page.enable_page();
      }
    }
  }

  /* To be called immediately after instantiating this class. */
  setup() {
    PageBase.all_pages.push(this);

    this.populate_menu();

    return this;
  }

  /* Add this page's entry to the breadcrumb menu. */
  private populate_menu() {
    console.log("populate_menu", this.name, this.index, this.hash);

    const element_menu = $("div.menu ul");
    let menu_button = element_menu.find(`li#menu-button-${this.index}`);
    if (menu_button.length) {
      // Button already exists.
      return this;
    }

    menu_button = $(`<li>${this.name}</li>`).attr(
      "id",
      `menu-button-${this.index}`,
    );
    menu_button.addClass("breadcrumb-item");
    if (!this.button_visible) {
      menu_button.addClass("d-none");
    }

    let previous_child = null;
    for (const child of element_menu.children()) {
      const child_index = Number(child.id.split("-")[2]);
      if (child_index >= this.index) {
        break;
      }
      previous_child = child;
    }
    if (previous_child === null) {
      // No other button exists yet.
      element_menu.append(menu_button[0]);
    } else {
      // Insert button after next lowest index.
      previous_child.after(menu_button[0]);
    }
    return this;
  }

  /* Make this page's breadcrumb button the active one. */
  private enable_button() {
    // Disable other buttons.
    for (const page of PageBase.all_pages) {
      page.disable_button();
    }

    // Set this page's button as the active one.
    const button = $(`li#menu-button-${this.index}`);
    button.html(`${this.name}`);
    button.removeClass("active");
    button.addClass("hidden");
    button.addClass("breadcrumb-item");
    return this;
  }

  private disable_button() {
    const button = $(`li#menu-button-${this.index}`);
    button.html(`<a href="#${this.hash}">${this.name}</a>`);
    button.removeClass("hidden");
    button.addClass("active");
    button.addClass("breadcrumb-item");
    return this;
  }

  // Display this page's main HTML div.
  // This method can be extended to add further functionally for the inherited pages.
  private enable_page() {
    this.enable_button();
    $("div[id^='page-']").addClass("d-none");
    $(`div#${this.hash}`).removeClass("d-none");
    return this;
  }

  public show_button(state: boolean) {
    this.button_visible = state;
    if (state) {
      $(`li#menu-button-${this.index}`).removeClass("d-none");
    } else {
      $(`li#menu-button-${this.index}`).addClass("d-none");
    }
    return this;
  }

  // Some pages should hide links to other pages, further in the process.
  private enable_links(state: boolean) {
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
}

class PageImport extends PageBase {
  name: string = "Import";
  index: number = 1;
  hash: string = "page-import";
  button_visible: boolean = true;
  turn_on: string[] = ["page-config"];
  turn_off: string[] = ["page-config", "page-summary", "page-download"];

  public enable_page() {
    super.enable_page();
    if (PageBase.data_upload) {
      // Already configured the file upload.
      // Everything else happens via callback.
      return;
    }
    PageBase.data_upload = new DataUpload(this.enable_links.bind(this));
  }
}

class PageConfig extends PageBase {
  name: string = "Configuration";
  index: number = 2;
  hash: string = "page-config";
  button_visible: boolean = false;
  turn_on: string[] = ["page-summary"];

  data_version: number = -1;

  public enable_page() {
    super.enable_page();

    if (this.data_version === PageBase.data_upload.version) {
      // No change in data since last time we visited page.
      return;
    }
    this.data_version = PageBase.data_upload.version;

    timezone_callbacks();
    clear_countries();

    const worker = new Worker(new URL("worker.js", import.meta.url), {
      type: "module",
    });
    worker.postMessage([PageBase.data_upload.imported_harmonics]);
    worker.onmessage = this.worker_callback.bind(this);
  }

  private worker_callback(event) {
    PageBase.stations = event.data;
    PageBase.country_details = country_attributes(PageBase.stations.stations);
    display_countries(PageBase.country_details);
    this.enable_links(true);
  }
}

class PageSummary extends PageBase {
  name: string = "Summary";
  index: number = 3;
  hash: string = "page-summary";
  button_visible: boolean = false;
  turn_on: string[] = ["page-download"];

  public enable_page() {
    super.enable_page();
    generate_summary(PageBase.country_details);
    this.enable_links(true);
  }
}

class PageDownload extends PageBase {
  name: string = "Download";
  index: number = 4;
  hash: string = "page-download";
  button_visible: boolean = false;

  public enable_page() {
    super.enable_page();
    download(PageBase.country_details, PageBase.stations.stations);
  }
}

function run_app() {
  $("[title='sw_version']").text(sw_version);

  const t0 = new PageInfo().setup();
  const t1 = new PageImport().setup();
  const t2 = new PageConfig().setup();
  const t3 = new PageSummary().setup();
  const t4 = new PageDownload().setup();

  $(window).on("hashchange", PageBase.hashchange);

  if (window.location.hash != "#page-info") {
    window.location.hash = "#page-info";
  } else {
    PageBase.hashchange();
  }
}

document.addEventListener("DOMContentLoaded", run_app);
