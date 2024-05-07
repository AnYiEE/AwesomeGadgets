import * as OPTIONS from '../../options.json';
import {generateLanguageCodeSplitArray} from './generateLanguageCodeSplitArray';
import {isValidKey} from 'ext.gadget.Util';

const generateDefaultFallbackList = (): string[] => {
	const documentLanguageSplitArray: string[] = generateLanguageCodeSplitArray(document.documentElement.lang);
	const navigatorLanguageSplitArray: string[] = generateLanguageCodeSplitArray(navigator.language);

	let languageCode: string = OPTIONS.defaultLanguageCode;
	for (const languageCodeSplitArray of [documentLanguageSplitArray, navigatorLanguageSplitArray]) {
		switch (languageCodeSplitArray.length) {
			case 2:
				languageCode = `${languageCodeSplitArray[0]}-${languageCodeSplitArray[1]}`;
				break;
			case 3:
				languageCode = `${languageCodeSplitArray[0]}-${languageCodeSplitArray[2]}`;
				break;
			default:
				languageCode = languageCodeSplitArray[0] as string;
				break;
		}
		if (isValidKey(OPTIONS.fallbackTable, languageCode)) {
			break;
		}
	}

	return [...new Set([languageCode, OPTIONS.defaultLanguageCode])];
};

export {generateDefaultFallbackList};
