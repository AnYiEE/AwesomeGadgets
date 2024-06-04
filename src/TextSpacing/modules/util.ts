const isInlineHTMLElement = (node: Node): node is HTMLElement => {
	return node instanceof HTMLElement && window.getComputedStyle(node).display.includes('inline');
};

const isTextNode = (node: Node): node is Text => {
	return node.nodeType === Node.TEXT_NODE;
};

const isVisible = (element: Element): boolean => {
	const style: CSSStyleDeclaration = window.getComputedStyle(element);

	return (
		style.display !== 'none' &&
		!['hidden', 'collapse'].includes(style.visibility) &&
		Number.parseFloat(style.opacity) > 0
	);
};

const getNodeText = (node: HTMLElement | Text): string => {
	// eslint-disable-next-line unicorn/prefer-dom-node-text-content
	return node instanceof HTMLElement ? node.innerText : node.data;
};

/**
 * Split a string before an array of indexes.
 *
 * For example,
 * ```
 * splitAtIndexes('123456789', [3, 5, 7]);
 * ```
 * results in
 * ```
 * ['123', '45', '67', '89']
 * ```
 *
 * Note that empty string are included:
 * ```
 * splitAtIndexes('123456789', [0, 9]);
 * ```
 * results in
 * ```
 * ['', '123456789', '']
 * ```
 *
 * Indexes that are negative or greater than the length of the string are ignored.
 *
 * @param {string} str string to split
 * @param {number[]} indexes indexes
 * @return {string[]} splitted string fragments
 */
const splitAtIndexes = (str: string, indexes: number[]): string[] => {
	const result: string[] = [];

	const normalizedIndexes: number[] = [
		// Remove duplications and sort in ascending order
		...new Set(
			indexes
				.sort((a: number, b: number): number => {
					return a - b;
				})
				.filter((i: number): boolean => {
					return i >= 0 && i <= str.length;
				})
		),
		str.length,
	];

	for (let i: number = 0; i < normalizedIndexes.length; i++) {
		const slice: string = str.slice(normalizedIndexes[i - 1], normalizedIndexes[i]);
		result.push(slice);
	}

	return result;
};

export {isInlineHTMLElement, isTextNode, isVisible, getNodeText, splitAtIndexes};
