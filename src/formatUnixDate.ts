const formatUnixDate = ({
  timestamp,
  locale = "en-PH",
  options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
}: {
  timestamp: number;
  locale?: string;
  options?: Intl.DateTimeFormatOptions;
}) => {
  return new Date(timestamp * 1000).toLocaleDateString(locale, options);
};

export default formatUnixDate;
