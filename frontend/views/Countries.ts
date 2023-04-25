import countries from "./countries.json";

export const useCountries = () => {
  return countries;
};

export type Country = (typeof countries)[number];
