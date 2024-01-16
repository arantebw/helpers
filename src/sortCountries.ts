type Country = {
  country: string;
  countryCode: string;
};

const sortCountries = (countries: Country[]) => {
  return countries?.sort((a, b) => a?.country?.localeCompare(b?.country));
};

export default sortCountries;
