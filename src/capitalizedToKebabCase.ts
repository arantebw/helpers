const capitalizedToKebabCase = (str: string) => {
  if (typeof str !== "string" || str.length === 0) {
    return ""; // Return an empty string for invalid input
  }

  // Convert the entire string to lowercase and replace spaces with hyphens
  const kebabCasedString = str
    .toLowerCase() // Convert the string to lowercase
    .replace(/\s+/g, "-"); // Replace spaces with hyphens

  return kebabCasedString;
}

export default capitalizedToKebabCase;
