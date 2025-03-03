export const formatToCurrency = (
  value: number,
  locales: string | string[] = "lb-LU",
  currency = "EUR",
  precision = 2,
  symbolPosition: "before" | "after" = "before",
) => {
  const formatted = new Intl.NumberFormat(locales, {
    style: "currency",
    currency,
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  }).format(value);

  if (symbolPosition === "after") {
    return formatted.replace(/(\D+)([\d\s.,]+)/, "$2 $1");
  }

  return formatted;
};

export default formatToCurrency;
