import { ParseStations, country_attributes } from "./parse_data";

onmessage = (e) => {
  const stations = new ParseStations(e.data[0]);
  postMessage(stations);
};
