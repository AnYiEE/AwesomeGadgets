import {generateArray} from 'ext.gadget.Util';

// 检查selector对应的DOM对象是否存在
const checkElementExist = (selectors: string | string[]): boolean => {
	const selectorArray: string[] = generateArray(selectors);

	for (const selector of selectorArray) {
		if (document.querySelector(selector)) {
			return true;
		}
	}

	return false;
};

export {checkElementExist};
