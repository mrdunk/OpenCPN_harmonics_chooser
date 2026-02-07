import { get_selected_countries } from "./summary";
import { CountryDetails } from "./parse_data";

const cardinal_translations = [
  ["NORTH", "N"],
  ["SOUTH", "S"],
  ["EAST", "E"],
  ["WEST", "W"]
];

function region_codes(country_details: CountryDetails, countries_flat: CountriesFlat) {
  const region_full_to_idx = new Map<string, string>();
  const region_idx_to_full = new Map<string, string>();
  const sub_region_full_to_idx = new Map<string, string>();
  const sub_region_idx_to_full = new Map<string, string>();
  const country_cca3_to_full = new Map<string, string>();
  const country_cca3_to_idx = new Map<string, string>();
  const country_idx_to_cca3 = new Map<string, string>();

  for(const [region_name, children] of country_details) {
    // Regions.
    const region_label = region_name.toUpperCase().substring(0, 2);
    region_full_to_idx.set(region_name, region_label);
    region_idx_to_full.set(region_label, region_name);

    for(const [sub_region_name, sub_children] of children) {
      // Sub Regions
      var sub_region_label = "";
      for(const [cardinal, label_section] of cardinal_translations) {
        if(sub_region_name.toUpperCase().includes(cardinal)) {
          sub_region_label += label_section;
        }
      }
      if(sub_region_label.length === 0) {
        // No cardinal elements to sub-region name so just use first 2 chars of name.
        sub_region_label = sub_region_name.toLowerCase().substring(0, 2);
      }
      sub_region_full_to_idx.set(
        sub_region_name, region_label + sub_region_label);
      sub_region_idx_to_full.set(
        region_label + sub_region_label, `${region_name}, ${sub_region_name}`);

      for(const [country_name, data] of sub_children) {
        // Countries
        const full_name = `${region_name}|${sub_region_name}|${country_name}`;
        if(! countries_flat.has(full_name)) {
          console.log(`Skipping: ${full_name}`);
          continue;
        }
        const country_data = data.country;
        const cca3 = country_data.cca3;
        const idx_name = `${region_label + sub_region_label}:${cca3}::`

        country_cca3_to_full.set(cca3, full_name);
        country_cca3_to_idx.set(cca3, idx_name);
        country_idx_to_cca3.set(full_name, cca3);
      }
    }
  }

  return [
    region_full_to_idx, region_idx_to_full,
    sub_region_full_to_idx, sub_region_idx_to_full,
    country_cca3_to_idx, country_cca3_to_idx, country_idx_to_cca3
  ];
}

function download_harmonic(
  country_details: CountryDetails, countries_flat: CountriesFlat) {
}

function download_harmonic_idx(
  country_details: CountryDetails, countries_flat: CountriesFlat) {
    console.log(region_codes(country_details, countries_flat));
}

export function download(country_details: CountryDetails) {
  // TODO: cache get_selected_countries data so we don't need to recalculate?
  const [regions_nested, countries_flat] = get_selected_countries();

  download_harmonic(country_details, countries_flat);
  download_harmonic_idx(country_details, countries_flat);
}
