import { pull_data, display_countries } from "./data_source";
import { consume_raw_station_data, format_countries } from "./parse_data";
import { generate_summary } from "./summary";


function time_config() {
  $("input#time-strategy-local").click(function(event){
    console.log("local:", event);
    console.log($("select#timezone"));
    $("select#timezone").attr('disabled','disabled');
  });
  $("input#time-strategy-global").click(function(event){
    console.log("global:", event);  
    $("select#timezone").removeAttr('disabled');
  });
  $("input#time-strategy-global").prop("checked", true);
  $("select#timezone").removeAttr('disabled');
}


const APP = {
  raw_data_url: "./data/122848.csv",

  async setup() {
    window.location.hash = "";
    $(window).on('hashchange', APP.change_page);

    APP.csv = await pull_data(APP.raw_data_url);
    APP.progress_log(`Raw data pulled from ${APP.raw_data_url} ...`);

    APP.stations = consume_raw_station_data(APP.csv);
    APP.progress_log("Parsed raw data ...");

    APP.countries_details = format_countries(APP.stations);
    APP.progress_log("Formated Regeion and Country data ...");

    time_config();

    display_countries(APP.countries_details);
    APP.progress_log("Generated settings page ...");
  
    window.location.hash = "#page-info";
  },

  progress_log(message) {
    console.info(message);
    $(`<p>${message}</p>`).appendTo("div#page-loading");
  },

  change_page(event) {
    console.log(`Navigated to: ${window.location.hash}`);
    if(window.location.hash === "#page-info") {
      document.querySelector("div#page-loading").classList.add("d-none");
      document.querySelector("div#page-info").classList.remove("d-none");
      document.querySelector("div#page-config").classList.add("d-none");
      document.querySelector("div#page-summary").classList.add("d-none");
      document.querySelector("div#page-download").classList.add("d-none");
    } else if(window.location.hash === "#page-config") {
      document.querySelector("div#page-loading").classList.add("d-none");
      document.querySelector("div#page-info").classList.add("d-none");
      document.querySelector("div#page-config").classList.remove("d-none");
      document.querySelector("div#page-summary").classList.add("d-none");
      document.querySelector("div#page-download").classList.add("d-none");

      document.querySelector("li#page-info-summary-crumb").classList.remove("d-none");
    } else if(window.location.hash === "#page-summary") {
      document.querySelector("div#page-loading").classList.add("d-none");
      document.querySelector("div#page-info").classList.add("d-none");
      document.querySelector("div#page-config").classList.add("d-none");
      document.querySelector("div#page-summary").classList.remove("d-none");
      document.querySelector("div#page-download").classList.add("d-none");

      generate_summary(APP.countries_details);
    } else if(window.location.hash === "#page-download") {
      document.querySelector("div#page-loading").classList.add("d-none");
      document.querySelector("div#page-info").classList.add("d-none");
      document.querySelector("div#page-config").classList.add("d-none");
      document.querySelector("div#page-summary").classList.add("d-none");
      document.querySelector("div#page-download").classList.remove("d-none");

      document.querySelector("li#page-info-download-crumb").classList.remove("d-none");
      document.querySelector("li#page-info-download-crumb-2").classList.remove("d-none");
    }
  }

}

document.addEventListener('DOMContentLoaded', APP.setup);
