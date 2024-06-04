import * as OPTIONS from '../../options.json';
import {luaAddText} from './luaAddText';

// 读取wikitext字符串，并忽略注释尾部
const luaGetString = (inputString: string): string => {
	const testStringExecArray: RegExpExecArray | null = /[^\n]*\*\//.exec(inputString);

	let testString: string = inputString;
	if (testStringExecArray) {
		[testString] = testStringExecArray;
		testString = testString.slice(0, Math.max(0, testString.length - 2));
	}

	const trimCheck: string = testString.trim();
	const firstChar: string = trimCheck.charAt(0);
	if (firstChar === trimCheck.at(-1) && (firstChar === "'" || firstChar === '"')) {
		return trimCheck.slice(1, 1 + trimCheck.length - 2);
	}

	return testString.trim();
};

// 捕获CSS文本中符合`<{OPTIONS.wikiTextKey}>  { content："XXX" }`模式的字符串
const luaGetContentText = (inputString: string): string => {
	let wikitext: string = '';

	try {
		inputString.replace(
			new RegExp(`${OPTIONS.wikiTextKey}\\s*\\{[^c\\}]*content\\s*:\\s*[^\n]*`, 'g'),
			(substring: string): string => {
				const tempText: string = (/content\s*:\s*[^\n]*/.exec(substring) || ['content:'])[0]
					.replace(/^[\s;}]+|[\s;}]+$/g, '')
					.replace(/\s*content\s*:\s*/, '');

				if (wikitext) {
					wikitext += '\n';
				}

				wikitext += luaGetString(tempText);

				return substring;
			}
		);
	} catch {
		return '';
	}

	return wikitext.trim();
};

// 捕获字符串化的对象中符合`<{OPTIONS.wikiTextKey}>＝XXX`或`<{OPTIONS.wikiTextKey}>：XXX`模式的字符串 (注释以全角字符代替，避免被捕获)
const luaGetObjText = (inputString: string): string => {
	let wikitext: string = '';

	try {
		inputString.replace(
			new RegExp(`${OPTIONS.wikiTextKey}\\s*[\\=:]\\s*[^\n]*`, 'g'),
			(substring: string): string => {
				const tempText: string = substring
					.replace(/^[\s;}]+|[\s;}]+$/g, '')
					.replace(new RegExp(`${OPTIONS.wikiTextKey}\\s*[\\=:]\\s*`), '');

				if (wikitext) {
					wikitext += '\n';
				}

				wikitext += luaGetString(tempText);

				return substring;
			}
		);
	} catch {
		return '';
	}

	return wikitext.trim();
};

// 分析CSS中符合条件的wikitext
const luaGetCSSwikitext = (inputString: string): string => {
	let wikitext: string = '';

	const cssText: string =
		(inputString || document.querySelector<HTMLTextAreaElement>('textarea[name=wpTextbox1]')?.value) ?? '';
	if (!cssText.trim()) {
		return '';
	}

	// 匹配 <{OPTIONS.wikiTextKey}> { content："XXX" } 模式
	wikitext = luaAddText(wikitext, luaGetContentText(cssText), true);
	// 匹配 /* <{OPTIONS.wikiTextKey}>：XXX */ 模式
	wikitext = luaAddText(wikitext, luaGetObjText(cssText), true);

	return wikitext.trim();
};

// 分析JSON中符合条件的wikitext
const luaGetJSONwikitext = (inputString: string): string => {
	let wikitext: string = '';

	const JSONText: string =
		(inputString || document.querySelector<HTMLTextAreaElement>('textarea[name=wpTextbox1]')?.value) ?? '';
	if (!JSONText.trim()) {
		return '';
	}

	try {
		const jsonData = JSON.parse(JSONText) as object;
		for (const [key, value] of Object.entries(jsonData)) {
			if (new RegExp(OPTIONS.wikiTextKey).test(key) && typeof value === 'string') {
				wikitext = luaAddText(wikitext, value);
			}

			// 若键值是对象
			if (typeof value !== 'string') {
				for (const [k, v] of Object.entries(value as object)) {
					if (new RegExp(OPTIONS.wikiTextKey).test(k) && typeof v === 'string') {
						wikitext = luaAddText(wikitext, v);
					}
				}
			}
		}
	} catch {
		return '';
	}

	return wikitext.trim();
};

// 分析JavaScript中符合条件的wikitext
const luaGetJSwikitext = (inputString: string): string => {
	let wikitext: string = '';

	const jsText: string =
		(inputString || document.querySelector<HTMLTextAreaElement>('textarea[name=wpTextbox1]')?.value) ?? '';
	if (!jsText.trim()) {
		return '';
	}

	wikitext = luaAddText(wikitext, luaGetObjText(jsText), true);

	return wikitext.trim();
};

export {luaGetCSSwikitext, luaGetJSONwikitext, luaGetJSwikitext};
