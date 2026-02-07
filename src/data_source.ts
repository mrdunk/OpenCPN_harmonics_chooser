export function pull_data(url: string, consume_raw_data_callback) {
  return fetch(url, {
    method: "get",
    headers: {
      "content-type": "text/csv;charset=UTF-8",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.text();
  });
  //.then((csv) => {
  //  //console.log("ok: " + csv);
  //  consume_raw_data_callback(csv);
  //})
  //.catch((error) => {
  //  console.log(`Could not fetch raw data: ${error}`);
  //})
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
    checkbox.checked = !checkbox.checked;
  }

  const form_div = document.querySelector("div#regions");
  const all_checkboxes = form_div.querySelectorAll("input");
  const address = checkbox.value;
  var children = [];
  for (const candidate of all_checkboxes) {
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
  if (globalThis.index % 2) {
    row.classList.add("bg-light");
  }
  row.addEventListener("mouseenter", (event) => {
    row.classList.remove("bg-light");
    row.classList.add("bg-secondary");
  });
  row.addEventListener("mouseleave", (event) => {
    row.classList.remove("bg-secondary");
    const row_id = Number(row.id.split("-")[1]);
    if (row_id % 2) {
      row.classList.add("bg-light");
    }
  });

  if (indent > 0) {
    const spacer = document.createElement("div");
    spacer.classList.add(`col-${indent}`);
    row.appendChild(spacer);
  }

  const label = document.createElement("div");
  label.textContent = name;
  label.classList.add(`col-${11 - indent}`);
  label.classList.add("display-5");
  row.appendChild(label);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
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

export function display_countries(country_details) {
  const form_div = document.querySelector("div#regions");
  if (!form_div) {
    console.error("Could not find DIV.");
    return;
  }
  form_div.classList.add("form-group");
  form_div.classList.add("container");

  form_div.innerHTML = "";

  const countries_keys = Array.from(country_details.keys()).sort();
  for (const region_label of countries_keys) {
    //console.log(`${region_label}`);
    const region_address = region_label;
    form_div.appendChild(form_element(region_label, 0, region_address));

    const region_map = country_details.get(region_label);

    const region_keys = Array.from(region_map.keys()).sort();
    for (const subregion_label of region_keys) {
      //console.log(`    ${subregion_label}`);
      const subregion_address = `${region_address}|${subregion_label}`;
      form_div.appendChild(form_element(subregion_label, 1, subregion_address));

      const subregion_map = region_map.get(subregion_label);

      const subregion_keys = Array.from(subregion_map.keys()).sort();
      for (const name of subregion_keys) {
        //console.log(`        ${name}`);
        const address = `${region_address}|${subregion_label}|${name}`;
        form_div.appendChild(form_element(name, 2, address));
      }
    }
  }
}
