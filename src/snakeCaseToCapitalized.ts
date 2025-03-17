const snakeCaseToCapitalized = (str: string) => {
  if (typeof str !== "string" || str.length === 0) {
    return ""; // Return an empty string for invalid input
  }

  // Split the kebab-cased string into an array of words
  const words = str.split("_");

  // Capitalize each word in the array
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the array of capitalized words with a space
  const capitalizedString = capitalizedWords.join(" ");

  return capitalizedString;
};

export default snakeCaseToCapitalized;
