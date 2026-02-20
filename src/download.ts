import {
  get_selected_countries,
  no_timezone,
  country_to_timezone,
} from "./summary";
import {
  CountryDetails,
  CountriesFlat,
  TidalStations,
  TidalStationConstituents,
  TidalStationConstituent,
  TranslateRegion,
  StationMetadata,
} from "./types";
import { constituent_names, harmonics_header } from "./harmonics_header";

function pull_file(filename: string, content: string) {
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
  station_metadata: StationMetadata,
  translate: TranslateRegion,
) {
  console.log(constituent_names.length);

  let lines: string[] = [];
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
        const region_names: [string, string, string] = [
          region_name,
          sub_region_name,
          country_name,
        ];
        const new_lines = get_station_harmonic(
          cca3,
          region_names,
          idx_label,
          timezone,
          stations,
          station_metadata,
        );
        lines = lines.concat(new_lines);
      }
    }
  }

  pull_file("HARMONICS", lines.join("\n"));
}

function courtier_criterion(
  constituents: Map<string, TidalStationConstituent>,
  station_name: string,
): null | number {
  // See
  // https://ihr.iho.int/articles/estimation-of-nautical-chart-datum-by-the-statistical-method-in-micro-and-meso-tidal-regime-an-alternative-to-the-balay-harmonic-method/
  // for information on how Lowest Astronomical Tides are calculated.
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

  return Number(C1.toFixed(3));
}

function diurnal_inequality(
  constituents: Map<string, TidalStationConstituent>,
  station_name: string,
): number | null {
  // See
  // https://ihr.iho.int/articles/estimation-of-nautical-chart-datum-by-the-statistical-method-in-micro-and-meso-tidal-regime-an-alternative-to-the-balay-harmonic-method/
  // for information on how Lowest Astronomical Tides are calculated.
  const K1_ob = constituents.get("K1");
  const O1_ob = constituents.get("O1");
  const M2_ob = constituents.get("M2");

  if (!K1_ob) {
    console.warn(`No K1 constituent for ${station_name}`);
    return null;
  }
  if (!O1_ob) {
    console.warn(`No O1 constituent for ${station_name}`);
    return null;
  }
  if (!M2_ob) {
    console.warn(`No M2 constituent for ${station_name}`);
    return null;
  }

  const K1 = Number(K1_ob.pha);
  const O1 = Number(O1_ob.pha);
  const M2 = Number(M2_ob.pha);

  return Number((M2 - (O1 + K1)).toFixed(0)) % 360;
}

function balay(
  station_name: string,
  constituents: Map<string, TidalStationConstituent>,
) {
  // See
  // https://ihr.iho.int/articles/estimation-of-nautical-chart-datum-by-the-statistical-method-in-micro-and-meso-tidal-regime-an-alternative-to-the-balay-harmonic-method/
  // for information on how Lowest Astronomical Tides are calculated.
  const M2_ob = constituents.get("M2");
  const S2_ob = constituents.get("S2");
  const N2_ob = constituents.get("N2");
  const K2_ob = constituents.get("K2");
  const K1_ob = constituents.get("K1");
  const O1_ob = constituents.get("O1");
  const P1_ob = constituents.get("P1");

  if (!M2_ob) {
    console.warn(`No M2 constituent for ${station_name}`);
    return null;
  }

  if (!S2_ob) {
    console.warn(`No S2 constituent for ${station_name}`);
    return null;
  }

  if (!N2_ob) {
    console.warn(`No N2 constituent for ${station_name}`);
    return null;
  }

  if (!K2_ob) {
    console.warn(`No K2 constituent for ${station_name}`);
    return null;
  }

  if (!K1_ob) {
    console.warn(`No K1 constituent for ${station_name}`);
    return null;
  }
  if (!O1_ob) {
    console.warn(`No O1 constituent for ${station_name}`);
    return null;
  }
  if (!P1_ob) {
    console.warn(`No P1 constituent for ${station_name}`);
    return null;
  }

  const M2 = Number(M2_ob.amp);
  const S2 = Number(S2_ob.amp);
  const N2 = Number(N2_ob.amp);
  const K2 = Number(K2_ob.amp);
  const K1 = Number(K1_ob.amp);
  const O1 = Number(O1_ob.amp);
  const P1 = Number(P1_ob.amp);

  const C1 = courtier_criterion(constituents, station_name);
  if (C1 === null) {
    return 0;
  }

  let Z0;

  if (C1 <= 0) {
    console.warn(`Invalid C1 value: ${C1} for ${station_name} `);
    Z0 = 0;
  } else if (C1 > 0 && C1 <= 0.25) {
    Z0 = (M2 + S2 + N2 + K2) / 100;
  } else if (C1 > 0.25 && C1 <= 1.5) {
    //console.log((M2 + S2 + N2 + K2).toFixed(3));
    //console.log((M2 + S2 + N2).toFixed(3));
    //console.log((M2 + S2 + K1 + O1 + N2).toFixed(3));
    //console.log((M2 + S2 + K1 + O1 + P1).toFixed(3));
    const _2K = diurnal_inequality(constituents, station_name);
    if (_2K === null) {
      return 0;
    }
    if (_2K === 0) {
      console.info(`_2K == 0 for ${station_name}`);
      Z0 = (M2 + S2 + N2) / 100;
    } else if (_2K === 180) {
      console.info(`_2K == 180 for ${station_name}`);
      Z0 = (M2 + S2 + K1 + O1 + N2) / 100;
    } else {
      console.log(_2K);
      Z0 = (M2 + S2 + K1 + O1 + P1) / 100;
    }
  } else if (C1 > 1.5 && C1 <= 3) {
    Z0 = (M2 + S2 + K1 + O1) / 100;
  } else {
    Z0 = (M2 + S2 + K1 + O1 + P1) / 100;
  }

  console.log(
    `Lowest Astronomical Tide for: ${station_name.padEnd(40)} = ${Z0}m  ${C1}`,
  );
  return Number(Z0.toFixed(3));
}

function get_station_harmonic(
  country: string,
  region_names: [string, string, string],
  idx_label: string | undefined,
  timezone: string,
  stations: TidalStations,
  station_metadata: StationMetadata,
): string[] {
  const country_stations = stations.get(country);
  if (!country_stations) {
    return [];
  }
  const lines: string[] = [];
  lines.push("#");
  lines.push(`# ${idx_label}    ${region_names[2]} ${region_names[1]}`);
  lines.push("#");
  lines.push("#");

  for (let [station_name, station] of country_stations) {
    station_name = translate_station_name(station_name, station_metadata);
    lines.push(`# lon: ${station.get("lon")}   lat: ${station.get("lat")}`);
    lines.push(`# datum_information: ${station.get("datum_information")}`);
    lines.push(`# start_date: ${station.get("start_date")}`);
    lines.push(`# end_date: ${station.get("end_date")}`);
    lines.push(`# missing_obs: ${station.get("missing_obs")}%`);
    lines.push(`${station_name}, ${region_names[2]}`);
    lines.push(`${timezone} :test/timezone`);

    const constituents = station.get(
      "constituents",
    ) as TidalStationConstituents;

    const datum = balay(station_name, constituents);
    lines.push(`${datum} meters`);

    for (const constituent_name of constituent_names) {
      const constituent = constituents.get(constituent_name);
      if (constituent) {
        const amp = Number(constituent.amp) / 100;
        const pha = Number(constituent.pha);
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
  country_details: CountryDetails,
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
  idx_label: string | undefined,
  country_name: string,
  sub_region_name: string,
  stations: TidalStations,
  station_metadata: StationMetadata,
  timezone: string,
): string[] {
  const lines: string[] = [];
  const stations_in_country = stations.get(country);
  if (!stations_in_country) {
    return [];
  }

  for (let [station_name, station] of stations_in_country) {
    station_name = translate_station_name(station_name, station_metadata);
    const lat = station.get("lat");
    const lon = station.get("lon");
    let line = `T${idx_label} ${lon} ${lat} ${timezone} ${station_name}, ${country_name}`;
    lines.push(line);
  }

  return lines;
}

function download_harmonic_idx(
  country_details: CountryDetails,
  selected_countries: CountriesFlat,
  stations: TidalStations,
  station_metadata: StationMetadata,
  translate: TranslateRegion,
) {
  let lines: string[] = [];
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
  header_abbreviations += "XREF  # Needed for correct functionality.";

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
          station_metadata,
          timezone,
        );
        lines = lines.concat(new_lines);
      }
    }
  }

  pull_file("HARMONICS.idx", lines.join("\n"));
}

function translate_station_name(
  name: string,
  station_metadata: StationMetadata,
): string {
  const station = station_metadata.get(name);
  if (!station) {
    return name;
  }
  const new_name = station.get("human_name");
  if (!new_name) {
    return name;
  }
  return new_name;
}

export function download(
  country_details: CountryDetails,
  stations: TidalStations,
  station_metadata: StationMetadata,
) {
  // Need to re-calculate since the selected countries might have changed.
  const [selected_regions_nested, selected_countries] =
    get_selected_countries();

  const translate = translate_regions(country_details, selected_countries);

  download_harmonic(
    country_details,
    selected_countries,
    stations,
    station_metadata,
    translate,
  );
  download_harmonic_idx(
    country_details,
    selected_countries,
    stations,
    station_metadata,
    translate,
  );
}
