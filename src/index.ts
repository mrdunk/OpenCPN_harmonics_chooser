import { display_countries } from "./config";
import { ParseStations, country_attributes } from "./parse_data";
import { generate_summary } from "./summary";
import { download } from "./download";
import { DataUpload } from "./file_upload";

const sw_version = "v0.1.0";

function time_config() {
  $("input#time-strategy-local").click(function (event) {
    console.log($("select#timezone"));
    $("select#timezone").attr("disabled", "disabled");
  });
  $("input#time-strategy-global").click(function (event) {
    $("select#timezone").removeAttr("disabled");
  });
  $("input#time-strategy-global").prop("checked", true);
  $("select#timezone").removeAttr("disabled");
}

const APP = {
  raw_data_url: "./data/122848.csv",
  data_version: -1,

  async setup() {
    window.location.hash = "";
    $(window).on("hashchange", APP.change_page);

    $("[title='sw_version']").text(sw_version);

    time_config();

    APP.data_upload = new DataUpload(APP.enable_links_config);

    window.location.hash = "#page-info";
  },

  enable_links_config(state: bool = true) {
    console.log(state, $("li.page-config-crumb"));
    if (state) {
      $("li.page-config-crumb").removeClass("d-none");
    } else {
      $("li.page-config-crumb").addClass("d-none");
      $("li.page-summary-crumb").addClass("d-none");
      $("li.page-download-crumb").addClass("d-none");
    }
  },

  enable_links_summary(state: bool = true) {
    console.log(state, $("li.page-summary-crumb"));
    if (state) {
      $("li.page-config-crumb").removeClass("d-none");
      $("li.page-summary-crumb").removeClass("d-none");
    } else {
      $("li.page-summary-crumb").addClass("d-none");
      $("li.page-download-crumb").addClass("d-none");
    }
  },

  enable_links_download(state: bool = true) {
    console.log(state, $("li.page-summary-crumb"));
    if (state) {
      $("li.page-config-crumb").removeClass("d-none");
      $("li.page-summary-crumb").removeClass("d-none");
      $("li.page-download-crumb").removeClass("d-none");
    } else {
      $("li.page-download-crumb").addClass("d-none");
    }
  },

  change_page(event) {
    console.log(`Navigated to: ${window.location.hash}`);
    if (window.location.hash === "#page-info") {
      document.querySelector("div#page-loading").classList.add("d-none");
      document.querySelector("div#page-info").classList.remove("d-none");
      document.querySelector("div#page-import").classList.add("d-none");
      document.querySelector("div#page-config").classList.add("d-none");
      document.querySelector("div#page-summary").classList.add("d-none");
      document.querySelector("div#page-download").classList.add("d-none");
    } else if (window.location.hash === "#page-import") {
      document.querySelector("div#page-loading").classList.add("d-none");
      document.querySelector("div#page-info").classList.add("d-none");
      document.querySelector("div#page-import").classList.remove("d-none");
      document.querySelector("div#page-config").classList.add("d-none");
      document.querySelector("div#page-summary").classList.add("d-none");
      document.querySelector("div#page-download").classList.add("d-none");
    } else if (window.location.hash === "#page-config") {
      document.querySelector("div#page-loading").classList.add("d-none");
      document.querySelector("div#page-info").classList.add("d-none");
      document.querySelector("div#page-import").classList.add("d-none");
      document.querySelector("div#page-config").classList.remove("d-none");
      document.querySelector("div#page-summary").classList.add("d-none");
      document.querySelector("div#page-download").classList.add("d-none");

      console.log(APP.data_version, APP.data_upload.version);
      if (APP.data_version !== APP.data_upload.version) {
        APP.data_version = APP.data_upload.version;
        //APP.stations.process();
        APP.stations = new ParseStations(APP.data_upload.imported_harmonics);
        APP.country_details = country_attributes(APP.stations.stations);
        display_countries(APP.country_details);
        APP.enable_links_summary();
      }
    } else if (window.location.hash === "#page-summary") {
      document.querySelector("div#page-loading").classList.add("d-none");
      document.querySelector("div#page-info").classList.add("d-none");
      document.querySelector("div#page-import").classList.add("d-none");
      document.querySelector("div#page-config").classList.add("d-none");
      document.querySelector("div#page-summary").classList.remove("d-none");
      document.querySelector("div#page-download").classList.add("d-none");

      generate_summary(APP.country_details);
      APP.enable_links_download();
    } else if (window.location.hash === "#page-download") {
      document.querySelector("div#page-loading").classList.add("d-none");
      document.querySelector("div#page-info").classList.add("d-none");
      document.querySelector("div#page-import").classList.add("d-none");
      document.querySelector("div#page-config").classList.add("d-none");
      document.querySelector("div#page-summary").classList.add("d-none");
      document.querySelector("div#page-download").classList.remove("d-none");

      download(APP.country_details, APP.stations.stations);
    }
  },

  test(stations, country_details) {
    const country_details_cca3s = new Set();
    for (const [region_name, region] of country_details) {
      for (const [sub_region_name, sub_region] of region) {
        for (const [country_name, country] of sub_region) {
          //console.log(region_name, sub_region_name, country_name);
          //console.log(country.country.cca3);
          country_details_cca3s.add(country.country.cca3);
        }
      }
    }

    const stations_cca3s = new Set(stations.keys());

    console.log(country_details_cca3s);
    console.log(stations_cca3s);
    console.log(stations_cca3s.symmetricDifference(country_details_cca3s));
  },
};

document.addEventListener("DOMContentLoaded", APP.setup);
