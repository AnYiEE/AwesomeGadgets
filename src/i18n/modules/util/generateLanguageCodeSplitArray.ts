const generateLanguageCodeSplitArray = (originLanguageCode: string): string[] => {
	const languageCodeSplitArray: string[] = originLanguageCode.split('-').map((value: string): string => {
		return value.toLowerCase();
	});

	return languageCodeSplitArray;
};

export {generateLanguageCodeSplitArray};
