import { CountryDetails} from "./types";

function click_checkbox(event: Event) {
  let checkbox = event.target as HTMLInputElement;
  if (checkbox && checkbox.type !== "checkbox" && checkbox.parentNode) {
    for (const child of checkbox.parentNode.children as HTMLCollection) {
      if (child.type === "checkbox") {
        checkbox = child as HTMLInputElement;
        break;
      }
    }
    checkbox.checked = !checkbox.checked;
  }

  const form_div = document.querySelector("div#regions");
  if (!form_div) {
    return;
  }
  const all_checkboxes = form_div.querySelectorAll("input");
  const address = checkbox.value;
  let children = [];
  for (const candidate of all_checkboxes) {
    if (candidate.value.startsWith(address) && candidate.value !== address) {
      children.push(candidate);
    }
  }

  for (const child of children) {
    child.checked = checkbox.checked;
  }
}

function form_element(name: string, indent: number, address: string) {
  const row = document.createElement("div");
  row.classList.add("row");
  row.classList.add("border");

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
  label.classList.add("display-8");
  row.appendChild(label);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  //checkbox.id = ...
  checkbox.value = address;
  checkbox.classList.add("col-1");
  checkbox.classList.add("form-check");
  row.appendChild(checkbox);

  row.addEventListener("click", click_checkbox);

  return row;
}

export function clear_countries() {
  const form_div = $("div#regions");
  if (!form_div) {
    console.error("Could not find DIV.");
    return;
  }
  form_div.empty();
  let placeholder = "";
  placeholder += "<p><b>Loading countries....</b></p>";
  placeholder += "<p class='card-text placeholder-glow'>";
  placeholder += "<span class='placeholder col-10'>test</span>";
  placeholder += "<span class='placeholder col-10'>test</span>";
  placeholder += "<span class='placeholder col-10'>test</span>";
  placeholder += "<span class='placeholder col-10'>test</span>";
  placeholder += "<span class='placeholder col-10'>test</span>";
  placeholder += "<span class='placeholder col-10'>test</span>";
  placeholder += "</p>";
  placeholder += "<p></p>";
  form_div.html(placeholder);
}

export function display_countries(country_details: CountryDetails) {
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
    if(!region_map) {
      continue;
    }

    const region_keys = Array.from(region_map.keys()).sort();
    for (const subregion_label of region_keys) {
      //console.log(`    ${subregion_label}`);
      const subregion_address = `${region_address}|${subregion_label}`;
      form_div.appendChild(form_element(subregion_label, 1, subregion_address));

      const subregion_map = region_map.get(subregion_label);
      if(! subregion_map) {
        continue;
      }

      const subregion_keys = Array.from(subregion_map.keys()).sort();
      for (const name of subregion_keys) {
        //console.log(`        ${name}`);
        const address = `${region_address}|${subregion_label}|${name}`;
        form_div.appendChild(form_element(name, 2, address));
      }
    }
  }
  const children = $("div#regions").children("div.row");
  for (var i = 0; i < children.length; i++) {
    if (i % 2) {
      children[i].classList.add("bg-light");
    }
  }
}

export function timezone_callbacks() {
  $("input#time-strategy-local").click(function (event) {
    $("select#timezone").attr("disabled", "disabled");
  });
  $("input#time-strategy-global").click(function (event) {
    $("select#timezone").removeAttr("disabled");
  });
  $("input#time-strategy-global").prop("checked", true);
  $("select#timezone").removeAttr("disabled");
}
