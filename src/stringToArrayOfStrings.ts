const stringToArrayOfStrings = (input: string, delimeter: string) => {
    return input.split(delimeter).map(item => item.trim());
};

export default stringToArrayOfStrings;
