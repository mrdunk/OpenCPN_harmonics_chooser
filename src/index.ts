import { display_countries } from "./config";
import { consume_raw_station_data, format_countries } from "./parse_data";
import { generate_summary } from "./summary";
import { download } from "./download";

const version = "v0.1.0";

function time_config() {
  $("input#time-strategy-local").click(function (event) {
    console.log("local:", event);
    console.log($("select#timezone"));
    $("select#timezone").attr("disabled", "disabled");
  });
  $("input#time-strategy-global").click(function (event) {
    console.log("global:", event);
    $("select#timezone").removeAttr("disabled");
  });
  $("input#time-strategy-global").prop("checked", true);
  $("select#timezone").removeAttr("disabled");
}

const APP = {
  raw_data_url: "./data/122848.csv",

  async setup() {
    window.location.hash = "";
    $(window).on("hashchange", APP.change_page);

    $("[title='version']").text(version);

    APP.stations = await consume_raw_station_data(APP.raw_data_url);
    APP.progress_log(`Pulled raw data from ${APP.raw_data_url} ...`);

    APP.country_details = format_countries(APP.stations);
    APP.progress_log("Formated Regeion and Country data ...");

    time_config();

    display_countries(APP.country_details);
    APP.progress_log("Generated settings page ...");

    window.location.hash = "#page-info";
  },

  progress_log(message) {
    console.info(message);
    $(`<p>${message}</p>`).appendTo("div#page-loading");
  },

  change_page(event) {
    console.log(`Navigated to: ${window.location.hash}`);
    if (window.location.hash === "#page-info") {
      document.querySelector("div#page-loading").classList.add("d-none");
      document.querySelector("div#page-info").classList.remove("d-none");
      document.querySelector("div#page-config").classList.add("d-none");
      document.querySelector("div#page-summary").classList.add("d-none");
      document.querySelector("div#page-download").classList.add("d-none");
    } else if (window.location.hash === "#page-config") {
      document.querySelector("div#page-loading").classList.add("d-none");
      document.querySelector("div#page-info").classList.add("d-none");
      document.querySelector("div#page-config").classList.remove("d-none");
      document.querySelector("div#page-summary").classList.add("d-none");
      document.querySelector("div#page-download").classList.add("d-none");

      document
        .querySelector("li#page-info-summary-crumb")
        .classList.remove("d-none");

      APP.test(APP.stations, APP.country_details);
    } else if (window.location.hash === "#page-summary") {
      document.querySelector("div#page-loading").classList.add("d-none");
      document.querySelector("div#page-info").classList.add("d-none");
      document.querySelector("div#page-config").classList.add("d-none");
      document.querySelector("div#page-summary").classList.remove("d-none");
      document.querySelector("div#page-download").classList.add("d-none");

      document
        .querySelector("li#page-info-download-crumb")
        .classList.remove("d-none");
      document
        .querySelector("li#page-info-download-crumb-2")
        .classList.remove("d-none");

      generate_summary(APP.country_details);
    } else if (window.location.hash === "#page-download") {
      document.querySelector("div#page-loading").classList.add("d-none");
      document.querySelector("div#page-info").classList.add("d-none");
      document.querySelector("div#page-config").classList.add("d-none");
      document.querySelector("div#page-summary").classList.add("d-none");
      document.querySelector("div#page-download").classList.remove("d-none");

      download(APP.country_details, APP.stations);
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
