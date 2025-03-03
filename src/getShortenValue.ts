interface getShortenValueParams {
  value: number;
  locales: string | string[];
  precision: number;
}

const getShortenValue = ({
  value,
  locales,
  precision,
}: getShortenValueParams) => {
  return new Intl.NumberFormat(locales, {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: precision,
  }).format(value);
};

export default getShortenValue;
