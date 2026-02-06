
function get_selected_countries() {
  const children = $("div#regions").children("div").children("input");
  const countries_flat = new Set();
  const regions_nested = new Map();
  for (const child of children) {
    const components = child.value.split("|");
    var region = null;
    var sub_region = null;
    var country = null;
    switch(components.length) {
      case 1:
        //[region,] = components;
        break;
      case 2:
        //[region, sub_region] = components;
        break;
      case 3:
        [region, sub_region, country] = components;
        const regions_stats =
          regions_nested.getOrInsert(region, {sub_regions: new Map(), countries_selected: 0, countries_existing: 0});
        regions_stats.countries_selected += child.checked;
        regions_stats.countries_existing += 1;

        const subregions_stats =
          regions_stats.sub_regions.getOrInsert(sub_region, {countries: new Set(), countries_selected: 0, countries_existing: 0});
        subregions_stats.countries_selected += child.checked;
        subregions_stats.countries_existing += 1;
        subregions_stats.countries.add({country: country, selected: child.checked});
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
  report,
  region: string,
  sub_region: string,
  country: string,
  selected: number,
  total: number
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
  if(total > 0) {
    region_score.textContent = `${selected} / ${total} countries selected.`;
  } else {
    region_score.textContent = "selected";
  }
  row.appendChild(region_score);

  const timezone_div = document.createElement("div");
  timezone_div.classList.add("col-1");
  if( total === 0) {
    timezone_div.textContent = "timezone";
  }
  row.appendChild(timezone_div);
}

function country_to_timezone(country) {
}

function display(regions_nested) {
  const report = document.createElement("div");
  report.classList.add("container");

  for(const [region, stats] of regions_nested) {
    display_row(report, region, "", "",
      stats.countries_selected, stats.countries_existing);
    if (stats.countries_selected === 0) {
      continue;
    }

    for(const [sub_region, sub_stats] of stats.sub_regions) {
      display_row(report, "", sub_region, "",
        sub_stats.countries_selected, sub_stats.countries_existing);
      if (sub_stats.countries_selected === 0) {
        continue;
      }
   
      for(const country of sub_stats.countries) {
        if (country.selected) {
          display_row(report, "", "", country.country, 0, 0);
        }
      }
    }
  }

  $("div#report").empty().append(report);
}

export function generate_summary(countries_details) {
  const [regions_nested, countries_flat] = get_selected_countries();
  display(regions_nested);
}
