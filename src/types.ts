/*
 * Non tide specific information about the countries we have tidal information for.
 * Can be calculated on startup before any user configuration but we do need a
 * list of countries to populate.
 * Contains recursive Map() objects.
 * Map() keys are the English language version of region, sub_region and countries.
 * The country's data contains the world_countries npm entry
 * and an additional list of timezones for that country.
 * Returned by the country_code_lookup(countries) method.
 */
export type CountryDetails = Map<
  string,
  Map<string, Map<string, { country: { cca3: string }; timezone: any }>>
>;

/*
 * Non tide specific information about the countries we have tidal information for.
 * Can be calculated on startup before any user configuration.
 * A simple Set() of country names in 3 letter strings according to the cca3 format.
 */
export type CountriesFlat = Set<string>;

/*
 * Tide specific information per country.
 * Top level Map keys are the country names in 3 letter strings according to the
 * cca3 format.
 * Nested Map keys are the names of the tidal observation stations.
 * Nested Maps contents contain the detail about the tidal observation stations.
 * Can be calculated on startup before any user configuration.
 * Returned by the consolidte_stations() method.
 */
export type TidalStations = Map<string, CountriesTidalStation>;

type CountriesTidalStation = Map<string, string | Map<string, string>>;

/*
 * A summary of which countries have been selected.
 * Compiled when #page-summary is visited.
 * Contains recursive Map() objects with child elements and a count of the child
 * countries that have been selected.
 * The data only contains countries that were selected on #page-config.
 * Map() keys are the English language version.
 * Returned by the get_selected_countries() method.
 */
export type RegionsNested = Map<string, SubRegionsNested>;

export type SubRegionsNested = {
  sub_regions: Map<string, CountriesNested>;
  countries_selected: number;
  countries_existing: number;
};

export type CountriesNested = {
  countries: Set<CountryNested>;
  countries_selected: number;
  countries_existing: number;
};

export type CountryNested = {
  country: string;
  selected: boolean;
};
