const formatToCurrency = (
  value: number,
  locales: string | string[],
  currency = "EUR",
) => {
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency,
  }).format(value);
};

export default formatToCurrency;
