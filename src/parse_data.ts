import Papa from "papaparse";
import world_countries from "world-countries";
import * as countries_and_timezones from "countries-and-timezones";
import {
  CountryDetails,
  TidalStations,
  CountriesTidalStation,
  TidalStation,
  TidalStationConstituents,
  TidalStationConstituent,
  ParsedStationLine,
  ParsedStationLineKey,
  StationMetadata,
  StationMetadataAndWarn,
} from "./types";

export function parse_station_metadata(
  csvs: Map<string, object>,
): StationMetadataAndWarn {
  const metadata = new Map();
  const warnings: string[] = [];

  for (const [key, csv] of csvs) {
    let entries_count = 0;
    let new_entries_count = 0;

    const [filename, data_type, file_type, data] = csv as [
      string,
      string,
      string,
      string,
    ];
    if (data_type != "metadata") {
      // File is one of the harmonics constants files.
      continue;
    }
    const parsed: Papa.ParseResult<any> = Papa.parse(data, {
      header: true,
      skipEmptyLines: true,
    });

    if (parsed.errors.length > 0) {
      console.warn(`Errors parsing the metadata file: ${parsed.errors}`);
      warnings.push(
        `Metadata file: ${filename} has incorrect format.<br/>This may result in poor station names.`,
      );
      continue;
    }

    const required_keys = ["SITE NAME", "FILE NAME"];
    const missing_keys = [];
    for (const required_key of required_keys) {
      if (
        parsed.meta.fields === undefined ||
        !parsed.meta.fields.includes(required_key)
      ) {
        missing_keys.push(required_key);
      }
    }
    if (missing_keys.length > 0) {
      console.warn(
        `Did not find keys: ${missing_keys} in metadata file: ${filename}`,
      );
      console.warn(`Expected at least these fields: ${required_keys}`);
      console.warn(`Found these fields: ${parsed.meta.fields}`);
      warnings.push(
        `Metadata file: ${filename} has incorrect format.<br/>This may result in poor station names.`,
      );
      continue;
    }

    for (const entry of parsed.data) {
      const tide_gauge_name = entry["FILE NAME"];

      if (metadata.has(tide_gauge_name)) {
        const old_filename = metadata
          .get(tide_gauge_name)
          .get("metadata_filename");
        console.warn(
          `Replacing ${tide_gauge_name}. Originally from ${old_filename}. Replaced by ${filename}`,
        );
      } else {
        new_entries_count += 1;
      }
      entries_count += 1;

      const map = new Map();
      metadata.set(tide_gauge_name, map);

      for (const [key, value] of Object.entries(entry)) {
        map.set(key, value);
      }

      map.set("metadata_filename", filename);

      const site_name = entry["SITE NAME"];
      const human_name = site_name
        .replace(/([A-Z,0-9]+)/g, " $1")
        .replace(/_/g, "")
        .trim();
      map.set("human_name", human_name);
    }

    if (new_entries_count === entries_count) {
      console.info(
        `Found ${new_entries_count} new metadata entries in ${filename}`,
      );
    } else {
      console.info(
        `Found ${new_entries_count} new metadata entries out of ${entries_count} metadata entries total in ${filename}`,
      );
    }

    if (entries_count === 0) {
      console.warn(`No metadata entries found in ${filename}`);
      warnings.push(`No metadata entries found in ${filename}`);
    } else if (new_entries_count === 0) {
      console.warn(
        `All metadata entries found in ${filename} were already present in another file.`,
      );
      warnings.push(
        `All metadata entries found in ${filename} were already present in another file.`,
      );
    }
  }
  return [metadata, warnings];
}

export class ParseStations {
  private csv: string = "";
  private harmonics_data: ParsedStationLine[];
  private raw_data: Map<string, string[]>;
  stations: TidalStations;
  warnings: string[] = [];
  length: number;

  constructor(raw_data: Map<string, string[]>) {
    this.raw_data = raw_data;
    this.length = 0;
    this.harmonics_data = [];
    this.stations = new Map();

    this.raw_data.forEach((element) => {
      const [filename, data_type, file_type, csv] = element;
      if (data_type === "harmonic") {
        if (csv.length > 0) {
          this.parse_data(filename, csv);
        }
      }
    });

    console.info(
      `Found: ${this.harmonics_data.length} Harmonic Constituents in all files.`,
    );

    this.consolidate_stations();

    console.info(`Consolidated to: ${this.length} individual stations;`);
    if (this.length === 0) {
      this.warnings.push(
        'No Tidal Stations found. Return to the "Import" page.',
      );
    }
  }

  // Turn csv data into a JS list of harmonic constituents.
  private parse_data(filename: string, csv: string) {
    const parsed = Papa.parse(csv, {
      header: true,
      skipEmptyLines: true,
    });

    if (parsed.errors.length > 0) {
      console.warn(
        `Errors parsing file: ${filename}, errors: ${parsed.errors}`,
      );
    }

    const required_keys = [
      "lat",
      "lon",
      "con",
      "amp",
      "pha",
      "tide_gauge_name",
      "country",
    ];
    const missing_keys = [];
    for (const required_key of required_keys) {
      if (
        parsed.meta.fields === undefined ||
        !parsed.meta.fields.includes(required_key)
      ) {
        missing_keys.push(required_key);
      }
    }
    if (missing_keys.length > 0) {
      console.warn(
        `Did not find keys: ${missing_keys} in metadata file: ${filename}`,
      );
      console.warn(`Expected at least these fields: ${required_keys}`);
      console.warn(`Found these fields: ${parsed.meta.fields}`);
      this.warnings.push(
        `Tidal Harmonics Constituent file: ${filename} has incorrect format.<br/>No stations in this file. Return to "Import" page.`,
      );
      return;
    }

    const harmonics_data = parsed.data as ParsedStationLine[];
    this.harmonics_data = this.harmonics_data.concat(harmonics_data);

    if (harmonics_data.length === 0) {
      console.warn(`No metadata entries found in ${filename}`);
      this.warnings.push(`No metadata entries found in ${filename}`);
    }

    console.info(
      `Found ${harmonics_data.length} Harmonics Contituents in file: ${filename}`,
    );
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
    if (error_count > 0) {
      this.warnings.push(
        `${error_count} errors while formatting tidal stations. Look at browser's Web Developer's console for deatils on which station(s).`,
      );
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
        existing_station.has(property as ParsedStationLineKey) &&
        data_line[property as ParsedStationLineKey] !==
          existing_station.get(property)
      ) {
        const message = `Station: "${data_line.tide_gauge_name}" property: "${property}" is being updated.
      Existing: ${existing_station.get(property)}
      New: ${data_line[property as ParsedStationLineKey]}`;
        console.warn(message);
        return 1;
      }
      existing_station.set(
        property,
        data_line[property as ParsedStationLineKey],
      );
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
