import { pull_data, consume_raw_data } from "./data_source";

// Data originally from: https://www.seanoe.org/data/00980/109129/data/122848.csv
const sitation = `
Hart-Davis Michael, Dettmering Denise, Seitz Florian (2025). TICON-4: TIdal CONstants based on GESLA-4 sea-level records. SEANOE. https://doi.org/10.17882/109129

Piccioni Gaia, Dettmering Denise, Bosch Wolfgang, Seitz Florian (2019). TICON: TIdal CONstants based on GESLA sea-level records from globally located tide gauges. Geoscience Data Journal. 6 (2). 97-104. https://doi.org/10.1002/gdj3.72, https://archimer.ifremer.fr/doc/00838/94993/
`;
const raw_data_url = "./data/122848.csv";

pull_data(raw_data_url, consume_raw_data);

console.log("hello world! 4.");
