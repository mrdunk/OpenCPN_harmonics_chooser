import $ from "jquery";
import {
  CountryDetails,
  CountriesFlat,
  RegionsNested,
  SubRegionsNested,
  CountriesNested,
  CountryNested,
} from "./types";

export const no_timezone = "Not available";

export function get_selected_countries(): [RegionsNested, CountriesFlat] {
  const children = $("div#regions").children("div").children("input");
  const countries_flat: CountriesFlat = new Set();
  const regions_nested: RegionsNested = new Map();
  for (const child of children) {
    const components = child.value.split("|");
    let region = null;
    let sub_region = null;
    let country = null;
    switch (components.length) {
      case 1:
        //[region,] = components;
        break;
      case 2:
        //[region, sub_region] = components;
        break;
      case 3:
        [region, sub_region, country] = components;

        let regions_stats = regions_nested.get(region);
        if (!regions_stats) {
          regions_stats = {
            sub_regions: new Map<string, CountriesNested>(),
            countries_selected: 0,
            countries_existing: 0,
          };
          regions_nested.set(region, regions_stats);
        }
        regions_stats.countries_selected += child.checked;
        regions_stats.countries_existing += 1;

        let subregions_stats = regions_stats.sub_regions.get(sub_region);
        if (!subregions_stats) {
          subregions_stats = {
            countries: new Set<CountryNested>(),
            countries_selected: 0,
            countries_existing: 0,
          };
          regions_stats.sub_regions.set(sub_region, subregions_stats);
        }
        subregions_stats.countries_selected += child.checked;
        subregions_stats.countries_existing += 1;
        subregions_stats.countries.add({
          country: country,
          selected: child.checked,
        });
        break;
      default:
        console.warn(`Error for region: ${child}`);
    }
    if (child.checked) {
      countries_flat.add(child.value);
    }
  }
  return [regions_nested, countries_flat];
}

function display_row(
  report: HTMLElement,
  region: string,
  sub_region: string,
  country: string,
  selected: number,
  total: number,
  timezones: [string] = [""],
) {
  const row = document.createElement("div");
  row.classList.add("row");
  row.classList.add("border");
  report.appendChild(row);

  const region_div = document.createElement("div");
  region_div.classList.add("col-1");
  region_div.textContent = region;
  row.appendChild(region_div);

  const sub_region_div = document.createElement("div");
  sub_region_div.classList.add("col-2");
  sub_region_div.textContent = sub_region;
  row.appendChild(sub_region_div);

  const country_div = document.createElement("div");
  country_div.classList.add("col-3");
  country_div.textContent = country;
  row.appendChild(country_div);

  const region_score = document.createElement("div");
  region_score.classList.add("col-3");
  if (total > 0) {
    region_score.textContent = `${selected} / ${total} countries selected.`;
  } else {
    region_score.textContent = "selected";
  }
  row.appendChild(region_score);

  const timezone_div = document.createElement("div");
  timezone_div.classList.add("col-1");
  if (total === 0) {
    timezone_div.textContent = timezones[0];
    if (timezones.length > 1) {
      timezone_div.textContent += ` Warning: ${timezones.length} timezones for this country.`;
    }
  }
  row.appendChild(timezone_div);
}

export function country_to_timezone(
  region: string,
  sub_region: string,
  country: string,
  country_details: CountryDetails,
): [string] {
  if (
    $("input#time-strategy-global").is(":checked") &&
    $("input#time-strategy-global").val() == "global"
  ) {
    // Single timezone for all stations.
    return [$("select#timezone").val()];
  }

  // Attempt to use local time for stations.
  const regions = country_details.get(region);
  if (!regions) {
    console.error(`Missing region in country_details: ${region}`);
    return [""];
  }

  const sub_regions = regions.get(sub_region);
  if (!sub_regions) {
    console.error(`Missing sub_region in country_details: ${sub_region}`);
    return [""];
  }

  const countries = sub_regions.get(country);
  if (!countries) {
    console.error(`Missing country in country_details: ${country}`);
    return [""];
  }

  if (!countries.timezone || countries.timezone.length === 0) {
    console.warn(`No timezone data for ${country}`);
    return [no_timezone];
  }

  const list: [string] = [""];
  for (const t of countries.timezone) {
    if (list[0] === "") {
      list.pop();
    }
    list.push(t.utcOffsetStr);
    return list;
  }

  console.warn(`Did not find timezone data for country: ${country}`);
  return [""];
}

function display(
  regions_nested: RegionsNested,
  country_details: CountryDetails,
) {
  const report = document.createElement("div");
  report.classList.add("container");

  for (const [region, stats] of regions_nested) {
    display_row(
      report,
      region,
      "",
      "",
      stats.countries_selected,
      stats.countries_existing,
    );
    if (stats.countries_selected === 0) {
      continue;
    }

    for (const [sub_region, sub_stats] of stats.sub_regions) {
      display_row(
        report,
        "",
        sub_region,
        "",
        sub_stats.countries_selected,
        sub_stats.countries_existing,
      );
      if (sub_stats.countries_selected === 0) {
        continue;
      }

      for (const country of sub_stats.countries) {
        if (country.selected) {
          const timezone = country_to_timezone(
            region,
            sub_region,
            country.country,
            country_details,
          );
          display_row(report, "", "", country.country, 0, 0, timezone);
        }
      }
    }
  }

  $("div#report").empty().append(report);
}

export function generate_summary(country_details: CountryDetails) {
  const [regions_nested, countries_flat] = get_selected_countries();
  display(regions_nested, country_details);
}
