import Papa from 'papaparse';
import world_countries from 'world-countries';

export function pull_data(url: string, callback) {
  fetch(url, {
    method: 'get',
    headers: {
      'content-type': 'text/csv;charset=UTF-8',
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.text();
    })
    .then((csv) => {
      //console.log("ok: " + csv);
      callback(csv);
    })
    //.catch((error) => {
    //  console.log(`Could not fetch raw data: ${error}`);
    //})
  ;
}

function parse_data(csv: string){
  const harmonics_data = Papa.parse(csv, {header: true, skipEmptyLines: true});
  console.log(harmonics_data.data);
  console.log(harmonics_data.errors);
  console.log(harmonics_data.meta);
  return harmonics_data;
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


    subregion.set(common_name, country_data);
    console.log(`adding: ${common_name}  to: ${region_label}, ${subregion_label}`);
  }

  return regions;
}

function list_countries(parsed){
  var countries_found = new Set();
  var error_count = 0
  for (const entry of parsed.data) {
    if (! "country" in entry) {
      error_count += 1;
      continue;
    }

    const country = entry.country
    countries_found.add(country);
  }
  console.log(countries_found);

  return countries_found;
}

function click_checkbox(event) {
  var checkbox = event.target;
  if (event.target.type !== "checkbox") {
    for (const child of event.target.parentNode.children) {
      if (child.type === "checkbox") {
        checkbox = child;
        break;
      }
    }
    checkbox.checked = ! checkbox.checked;
  }

  console.log(checkbox.type, checkbox.checked); 

  const form_div = document.querySelector("div#regions");
  const all_checkboxes = form_div.querySelectorAll("input");
  const address = checkbox.value;
  var children = [];
  for(const candidate of all_checkboxes) {
    if (candidate.value.startsWith(address) && candidate.value !== address) {
      children.push(candidate);
    }
  }

  for (const child of children) {
    child.checked = checkbox.checked;
  }
}

globalThis.index = 0;
function form_element(name: string, indent: int, address: string) {
  const row = document.createElement("div");
  row.id = `row-${index}`;
  row.classList.add("row");
  row.classList.add("border");

  // Handle row highlighting.
  if(globalThis.index % 2) {
    row.classList.add("bg-light");
  }
  row.addEventListener("mouseenter", (event) => {
    row.classList.remove("bg-light");
    row.classList.add("bg-secondary");
  });
  row.addEventListener("mouseleave", (event) => {
    row.classList.remove("bg-secondary");
    const row_id = Number(row.id.split("-")[1])
    if (row_id % 2){
      row.classList.add("bg-light");
    }
  });

  if(indent > 0) {
    const spacer = document.createElement("div");
    spacer.classList.add(`col-${indent}`);
    row.appendChild(spacer);
  }

  const label = document.createElement("div");
  label.textContent = name;
  label.classList.add(`col-${11 - indent}`);
  label.classList.add('display-5');
  row.appendChild(label);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  //checkbox.id = ...
  checkbox.value = address;
  checkbox.classList.add("col-1");
  checkbox.classList.add("form-control");
  checkbox.classList.add("form-control-sm");
  row.appendChild(checkbox);

  row.addEventListener("click", click_checkbox);

  globalThis.index += 1;
  return row;
}

function display_countries(countries_found){
  const form_div = document.querySelector("div#regions");
  if (!form_div) {
    console.error("Could not find DIV."); 
    return;
  }
  form_div.classList.add("form-group");
  form_div.classList.add("container");

  const countries_details = country_code_lookup(countries_found);
  //var address = ""; 
  const countries_keys = Array.from(countries_details.keys()).sort();
  for (const region_label of countries_keys) {
    console.log(`${region_label}`);
    const region_address = region_label;
    form_div.appendChild(form_element(region_label, 0, region_address));

    const region_map = countries_details.get(region_label);
    
    const region_keys = Array.from(region_map.keys()).sort();
    for (const subregion_label of region_keys) {
      console.log(`    ${subregion_label}`);
      const subregion_address = `${region_address}|${subregion_label}`;
      form_div.appendChild(form_element(subregion_label, 1, subregion_address));

      const subregion_map = region_map.get(subregion_label);

      const subregion_keys = Array.from(subregion_map.keys()).sort();
      for (const name of subregion_keys) {
        console.log(`        ${name}`);
        const address = `${region_address}|${subregion_label}|${name}`;
        form_div.appendChild(form_element(name, 2, address));
      }
    }
  }
}



export function consume_raw_data(csv: string) {
  const parsed = parse_data(csv);
  const countries = list_countries(parsed);
  display_countries(countries);
}
