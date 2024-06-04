const padWithZeroes = (number: number): string => {
	// Pad a number with zeroes. The number must be an integer where
	// 0 <= number < 100.
	return number < 10 ? `0${number.toString()}` : number.toString();
};

export {padWithZeroes};
