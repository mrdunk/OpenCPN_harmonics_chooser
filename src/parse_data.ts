import Papa from "papaparse";
import world_countries from "world-countries";
import countries_and_timezones from "countries-and-timezones";
import {
  CountryDetails,
  TidalStations,
  CountriesTidalStation,
  TidalStation,
  TidalStationConstituents,
  TidalStationConstituent,
  ParsedStationLine,
} from "./types";

export class ParseStations {
  private csv: string = "";
  private harmonics_data: ParsedStationLine[];
  private raw_data: Map<string, string[]>;
  stations: TidalStations;
  length: number;

  constructor(raw_data: Map<string, string[]>) {
    this.raw_data = raw_data;
    this.length = 0;
    this.harmonics_data = [];
    this.stations = new Map();

    this.raw_data.forEach((element) => {
      const csv = element[1];
      if (csv) {
        this.parse_data(csv);
      }
    });

    console.log(`Found: ${this.harmonics_data.length} entries in parsed data`);

    const length = this.consolidate_stations();

    console.log(`Consolidated to: ${this.length} individual stations;`);
  }

  // Turn csv data into a JS list of harmonic constituents.
  private parse_data(csv: string) {
    const parsed = Papa.parse(csv, {
      header: true,
      skipEmptyLines: true,
    });

    if (parsed.errors.length > 0) {
      console.warn(`Errors parsing the main data file: ${parsed.errors}`);
    }

    const harmonics_data = parsed.data as ParsedStationLine[];
    this.harmonics_data = this.harmonics_data.concat(harmonics_data);
  }

  // Outputs recursive Map() objects of consolidated station information.
  // Top level Map() uses 3 letter codes for countries, indexing a collection
  // of stations for that country.
  // Next level is indexed by the data set's tide_gauge_name property.
  private consolidate_stations() {
    let error_count = 0;
    for (const data_line of this.harmonics_data) {
      if (!("country" in data_line)) {
        error_count += 1;
        console.error(`Missing "country" property for ${data_line}`);
        continue;
      }

      let country = this.stations.get(data_line.country);
      if (!country) {
        country = new Map();
        this.stations.set(data_line.country, country);
      }

      if (!country.has(data_line.tide_gauge_name)) {
        this.length += 1;
      }
      let station = country.get(data_line.tide_gauge_name);
      if (!station) {
        station = new Map<string, string | TidalStationConstituents>();
        country.set(data_line.tide_gauge_name, station);
      }

      let constituents = station.get("constituents") as
        | undefined
        | TidalStationConstituents;
      if (!constituents) {
        constituents = new Map<string, TidalStationConstituent>();
        station.set("constituents", constituents);
      }

      if (constituents.has(data_line.con)) {
        console.error(
          `Duplicate constituent "${data_line.con}" for ${data_line.tide_gauge_name}`,
        );
        error_count += 1;
        continue;
      }
      constituents.set(data_line.con, this.make_constituent(data_line));
      error_count += this.update_station(data_line, station);
    }
  }

  private make_constituent(
    data_line: ParsedStationLine,
  ): TidalStationConstituent {
    return {
      con: data_line.con,
      amp: data_line.amp,
      pha: data_line.pha,
      amp_std: data_line.amp_std,
      pha_std: data_line.pha_std,
    };
  }

  private update_station(
    data_line: ParsedStationLine,
    existing_station: TidalStation,
  ) {
    const station_properties = [
      "lat",
      "lon",
      "missing_obs",
      "no_of_obs",
      "years_of_obs",
      "start_date",
      "end_date",
      "gesla_source",
      "tide_gauge_name",
      "type",
      "country",
      "record_quality",
      "datum_information",
    ];
    for (const property of station_properties) {
      if (
        existing_station.has(property) &&
        data_line[property] !== existing_station.get(property)
      ) {
        console.warn(`
      Station: "${data_line.tide_gauge_name}" has differning property: "${property}".
      Existing: ${existing_station.get(property)}
      New: ${data_line[property]}
      `);
        return 1;
      }
      existing_station.set(property, data_line[property]);
    }
    return 0;
  }
}

/* Return an object of non tidal country information
 * for all countries we have tidal data for.
 */
export function country_attributes(stations: TidalStations): CountryDetails {
  const countries_with_stations = new Set<string>(stations.keys());
  const regions: CountryDetails = new Map();

  for (const country_data of world_countries) {
    const country_code = country_data.cca3;
    if (!countries_with_stations.has(country_code)) {
      // Not a country includes in our tidal data set.
      continue;
    }

    const region_label = country_data.region;
    const subregion_label = country_data.subregion;
    const common_name = country_data.name.common;

    let region = regions.get(region_label);
    if (!region) {
      region = new Map();
      regions.set(region_label, region);
    }

    if (!region.has(subregion_label)) {
      region.set(subregion_label, new Map());
    }
    const subregion = region.get(subregion_label);

    const timezone = countries_and_timezones.getTimezonesForCountry(
      country_data.cca2,
    );

    if (subregion) {
      subregion.set(common_name, { country: country_data, timezone: timezone });
    } else {
      console.error(`Missing subregion: ${subregion_label}`);
    }
  }

  return regions;
}
