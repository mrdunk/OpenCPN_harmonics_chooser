import {
  get_selected_countries,
  no_timezone,
  country_to_timezone,
} from "./summary";
import { CountryDetails, CountriesFlat } from "./types";
import { constituent_names, harmonics_header } from "./harmonics_header";

function upload_file(filename: string, content: string) {
  console.log(filename);

  const link = document.createElement("a");
  const file = new Blob([content], { type: "text/plain" });
  link.href = URL.createObjectURL(file);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

const cardinal_translations = [
  ["NORTH", "N"],
  ["SOUTH", "S"],
  ["EAST", "E"],
  ["WEST", "W"],
];

function translate_regions(
  country_details: CountryDetails,
  countries_flat: CountriesFlat,
) {
  const region_full_to_idx = new Map<string, string>();
  const region_idx_to_full = new Map<string, string>();
  const sub_region_full_to_idx = new Map<string, string>();
  const sub_region_idx_to_full = new Map<string, string>();
  const country_cca3_to_full = new Map<string, string>();
  const country_cca3_to_idx = new Map<string, string>();
  const country_idx_to_cca3 = new Map<string, string>();

  for (const [region_name, children] of country_details) {
    // Regions.
    const region_label = region_name.toUpperCase().substring(0, 2);
    region_full_to_idx.set(region_name, region_label);
    region_idx_to_full.set(region_label, region_name);

    for (const [sub_region_name, sub_children] of children) {
      // Sub Regions
      let sub_region_label = "";
      for (const [cardinal, label_section] of cardinal_translations) {
        if (sub_region_name.toUpperCase().includes(cardinal)) {
          sub_region_label += label_section;
        }
      }
      if (sub_region_label.length === 0) {
        // No cardinal elements to sub-region name so just use first 2 chars of name.
        sub_region_label = sub_region_name.toLowerCase().substring(0, 2);
      }
      sub_region_full_to_idx.set(
        sub_region_name,
        region_label + sub_region_label,
      );
      sub_region_idx_to_full.set(
        region_label + sub_region_label,
        `${region_name}, ${sub_region_name}`,
      );

      for (const [country_name, data] of sub_children) {
        // Countries
        const full_name = `${region_name}|${sub_region_name}|${country_name}`;
        if (!countries_flat.has(full_name)) {
          continue;
        }
        const country_data = data.country;
        const cca3 = country_data.cca3;
        const idx_name = `${region_label + sub_region_label}:${cca3}::`;

        country_cca3_to_full.set(cca3, country_name);
        country_cca3_to_idx.set(cca3, idx_name);
        country_idx_to_cca3.set(full_name, cca3);
      }
    }
  }

  return {
    region_full_to_idx: region_full_to_idx,
    region_idx_to_full: region_idx_to_full,
    sub_region_full_to_idx: sub_region_full_to_idx,
    sub_region_idx_to_full: sub_region_idx_to_full,
    country_cca3_to_full: country_cca3_to_full,
    country_cca3_to_idx: country_cca3_to_idx,
    country_idx_to_cca3: country_idx_to_cca3,
  };
}

function download_harmonic(
  country_details: CountryDetails,
  selected_countries: CountriesFlat,
  stations: TidalStations,
  translate,
) {
  console.log(constituent_names.length);

  let lines: [string] = [];
  lines.push(harmonics_header);

  for (const [region_name, children] of country_details) {
    // Regions.
    for (const [sub_region_name, sub_children] of children) {
      // Sub Regions
      for (const [country_name, data] of sub_children) {
        // Countries
        const country_index = `${region_name}|${sub_region_name}|${country_name}`;
        if (!selected_countries.has(country_index)) {
          continue;
        }

        const country_comment = `\n# ${region_name}  |  ${sub_region_name} | ${country_name}`;

        const country_data = data.country;
        const cca3 = country_data.cca3;
        const idx_label = translate.country_cca3_to_idx.get(cca3);

        const timezone = format_timezone(
          region_name,
          sub_region_name,
          country_name,
          country_details,
        );
        const region_names = [region_name, sub_region_name, country_name];
        const new_lines = get_station_harmonic(
          cca3,
          region_names,
          idx_label,
          timezone,
          stations,
        );
        lines = lines.concat(new_lines);
      }
    }
  }

  upload_file("HARMONICS", lines.join("\n"));
}

function calculate_datum(
  station_name: string,
  constituents: Map<string, object>,
) {
  //for(const [name, values] of constituents){
  //}
  const K1 = constituents.get("K1");
  const O1 = constituents.get("O1");
  const M2 = constituents.get("M2");
  const S2 = constituents.get("S2");

  if (!K1) {
    console.warn(`No K1 constituent for ${station_name}`);
    return null;
  }
  if (!O1) {
    console.warn(`No O1 constituent for ${station_name}`);
    return null;
  }
  if (!M2) {
    console.warn(`No M2 constituent for ${station_name}`);
    return null;
  }
  if (!S2) {
    console.warn(`No S2 constituent for ${station_name}`);
    return null;
  }

  const C1 =
    (Number(O1.amp) + Number(K1.amp)) / (Number(M2.amp) + Number(S2.amp));
  //console.log(`Courtier criterion: ${station_name}  ${C1}`);

  const N2 = constituents.get("N2");
  const K2 = constituents.get("K2");

  const Z0 =
    (Number(M2.amp) + Number(S2.amp) + Number(N2.amp) + Number(K2.amp)) / 100;
  console.log(`Lowest tide: \t${station_name}  ${Z0}`);

  return Z0;
}

function get_station_harmonic(
  country: string,
  region_names: [string],
  idx_label: string,
  timezone: string,
  stations: TidalStations,
): [string] {
  //console.log(country, idx_label, timezone);
  //console.log(stations.get(country));

  const country_stations = stations.get(country);
  const lines = [];
  lines.push("#");
  lines.push(`# ${idx_label}    ${region_names[2]} ${region_names[1]}`);
  lines.push("#");
  lines.push("#");

  for (const [station_name, station] of country_stations) {
    lines.push(`# lon: ${station.get("lon")}   lat: ${station.get("lat")}`);
    lines.push(`# datum_information: ${station.get("datum_information")}`);
    lines.push(`${station_name}, ${region_names[2]}, ${region_names[1]}`);
    lines.push(`${timezone} :test/timezone`);

    const constituents = station.get("constituents");

    const datum = calculate_datum(station_name, constituents);
    lines.push(`${datum} meters`);

    for (const constituent_name of constituent_names) {
      const constituent = constituents.get(constituent_name);
      if (constituent) {
        const amp = constituent.amp / 100;
        const pha = constituent.pha;
        lines.push(`${constituent_name}  ${amp}  ${pha}`);
      } else {
        lines.push(`${constituent_name}  0  0`);
      }
    }
    lines.push("#");
  }

  return lines;
}

function format_timezone(
  region_name: string,
  sub_region_name: string,
  country_name: string,
  country_details,
) {
  let timezone = country_to_timezone(
    region_name,
    sub_region_name,
    country_name,
    country_details,
  )[0];
  if (timezone === no_timezone) {
    timezone = "0:00";
  }
  // Remove any "+0" part of the timezone string.
  // 0:00 is ok.
  // 3:00 is ok.
  // -3:00 is ok
  // +03:00 is not.
  // -03:00 is not.
  if (timezone.charAt(0) === "+") {
    timezone = timezone.substring(1);
  }
  if (timezone.charAt(0) === "0" && timezone.charAt(1) !== ":") {
    timezone = timezone.substring(1);
  }
  if (
    timezone.charAt(0) === "-" &&
    timezone.charAt(1) === "0" &&
    timezone.charAt(2) !== ":"
  ) {
    timezone = "-" + timezone.substring(2);
  }
  return timezone;
}

function get_station_idxs(
  country: string,
  idx_label: string,
  country_name: string,
  sub_region_name: string,
  stations: TidalStations,
  timezone: string,
): [string] {
  const lines: [string] = [];
  for (const [stations_name, station] of stations.get(country)) {
    const lat = station.get("lat");
    const lon = station.get("lon");
    let line = `T${idx_label} ${lon} ${lat} ${timezone} ${stations_name}, ${country_name}, ${sub_region_name}`;
    lines.push(line);
  }

  return lines;
}

function download_harmonic_idx(
  country_details: CountryDetails,
  selected_countries: CountriesFlat,
  stations: TidalStations,
  translate,
) {
  let lines: [string] = [];
  const header = `# Note: This file is automatically generated by "OpenCPN harmonic file generator"
# https://github.com/mrdunk/OpenCPN_harmonics_chooser
# using the TICON-4 dataset. https://www.seanoe.org/data/00980/109129/

# Basic line formats:
# Reference stations: T|C Reg:Co:St Lon Lat TimeZone Name
# Info lines:         I Reg:Co:St 0 0 0:0 (blank) Information
# Subordinate sta'ns: t|c Reg:Co:St Lon Lat TimeZone Name
# Subordinate extra:  &Hmin Hmpy Hoff Lmin Lmpy Loff StaID RefFileNum RefName

`;
  let header_abbreviations =
    "# Region and Country abbreviations used later in the Station entries.\n";
  header_abbreviations += "";
  header_abbreviations += "XREF  # Needed for correct funtionality.";

  let help_stations =
    '# The format of the tidal measuring stations is: "ID Lon Lat TimeZone Name".\n';
  help_stations +=
    '# The station ID starts with "T", followed by the Region:Country:State:\n';
  help_stations +=
    '# The "State" part is not used by the harmonic file generator due to it\'s focus';
  help_stations +=
    " on non US regions. It may be useful for differnt input data sets however.";
  const footer = "*END*  # Needed for correct funtionality.";

  lines.push(header);
  lines.push(header_abbreviations);

  for (const [idx, full_name] of [
    ...translate.sub_region_idx_to_full.entries(),
  ].sort()) {
    lines.push(`REGION ${idx} ${full_name}`);
  }

  lines.push("");

  for (const [idx, full] of [
    ...translate.country_cca3_to_full.entries(),
  ].sort()) {
    lines.push(`COUNTRY ${idx} ${full}`);
  }

  lines.push(footer);
  lines.push("");
  lines.push(help_stations);

  for (const [region_name, children] of country_details) {
    // Regions.
    for (const [sub_region_name, sub_children] of children) {
      // Sub Regions
      for (const [country_name, data] of sub_children) {
        // Countries
        const country_index = `${region_name}|${sub_region_name}|${country_name}`;
        if (!selected_countries.has(country_index)) {
          continue;
        }

        const country_comment = `\n# ${region_name}  |  ${sub_region_name} | ${country_name}`;

        const country_data = data.country;
        const cca3 = country_data.cca3;
        const idx_label = translate.country_cca3_to_idx.get(cca3);

        const timezone = format_timezone(
          region_name,
          sub_region_name,
          country_name,
          country_details,
        );

        const new_lines = get_station_idxs(
          cca3,
          idx_label,
          country_name,
          sub_region_name,
          stations,
          timezone,
        );
        lines = lines.concat(new_lines);
      }
    }
  }

  upload_file("HARMONICS.idx", lines.join("\n"));
}

export function download(
  country_details: CountryDetails,
  stations: TidalStations,
) {
  // Need to re-calculate since the selected countries might have changed.
  const [selected_regions_nested, selected_countries] =
    get_selected_countries();

  const translate = translate_regions(country_details, selected_countries);

  download_harmonic(country_details, selected_countries, stations, translate);
  download_harmonic_idx(
    country_details,
    selected_countries,
    stations,
    translate,
  );
}
