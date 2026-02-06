import Papa from 'papaparse';
import world_countries from 'world-countries';
import countries_and_timezones from "countries-and-timezones";

// Turn csv data into a JS list of harmonic constituents.
function parse_data(csv: string){
  const harmonics_data = Papa.parse(csv, {header: true, skipEmptyLines: true});
  
  //console.log(harmonics_data.data);
  //console.log(harmonics_data.meta);
  if(harmonics_data.errors.length > 0) {
    console.warn(`Errors parsing the main data file: ${harmonics_data.errors}`);
  }

  return harmonics_data;
}

function make_constituent(data_line) {
  return {
    con: data_line.con,
    amp: data_line.amp,
    pha: data_line.pha,
    amp_std: data_line.amp_std,
    pha_std: data_line.pha_std
  };
}

function update_station(data_line, existing_station) {
  const station_properties = new Set([
    "lat", "lon", 
    "missing_obs", "no_of_obs", "years_of_obs", "start_date",
    "end_date", "gesla_source", "tide_gauge_name", "type", "country",
    "record_quality", "datum_information"
  ]);
  for (const property of station_properties) {
    if (existing_station.has(property) &&
        data_line[property] !== existing_station.get(property)) {
      console.warn(`
      Station: "${data_line[tide_gauge_name]}" has differning property: "${property}".
      Existing: ${existing_station.get(property)}
      New: ${data_line[property]}
      `);
      return 1;
    }
    existing_station.set(property, data_line[property]);
  }
  return 0;
}

// Outputs recursive Map() objects of consolidated station information.
// Top level Map() uses 3 letter codes for countries, indexing a collection
// of stations for that country.
// Next level is indexed by the data set's tide_gauge_name property.
function consolidte_stations(parsed){
  var by_country = new Map();
  var error_count = 0
  for (const data_line of parsed.data) {
    if (! "country" in data_line) {
      error_count += 1;
      console.error(`Missing "country" property for ${data_line}`);
      continue;
    }

    const country = by_country.getOrInsert(data_line.country, new Map());
    const station = country.getOrInsert(data_line.tide_gauge_name, new Map());
    const constituents = station.getOrInsert("constituents", new Map());

    if (constituents.has(data_line.con)) {
      console.error(
        `Duplicate constituent "${data_line.con}" for ${data_line.tide_gauge_name}`);
      error_count += 1;
      continue;
    }
    constituents.set(data_line.con, make_constituent(data_line));
    error_count += update_station(data_line, station);
  }

  return by_country;
}

function country_code_lookup(codes: Set){
  const regions = new Map();

  for (const country_data of world_countries) {
    const country_code = country_data.cca3;
    if(! country_code in codes) {
      continue;
    }
  
    const region_label = country_data.region;
    const subregion_label = country_data.subregion;
    const common_name = country_data.name.common;

    if (! regions.has(region_label)) {
      regions.set(region_label, new Map());
    }
    const region = regions.get(region_label);


    if (! region.has(subregion_label)) {
      region.set(subregion_label, new Map());
    }
    const subregion = region.get(subregion_label);

    const timezone = countries_and_timezones.getTimezonesForCountry(country_data.cca2);

    subregion.set(common_name, {country: country_data, timezone: timezone});
  }

  return regions;
}

export function consume_raw_station_data(csv: string) {
  const parsed = parse_data(csv);
  const stations = consolidte_stations(parsed);

  return stations;
}

export function format_countries(stations) {
  const countries = new Set(stations.keys());
  const countries_details = country_code_lookup(countries);
  console.log(countries_details);
  return countries_details;
}

