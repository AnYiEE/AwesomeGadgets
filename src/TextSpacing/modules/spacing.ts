import {getNodeText, isInlineHTMLElement, isTextNode, isVisible, splitAtIndexes} from './util';
import {queueDomMutation} from './queue';

const REGEX_RANGE_CHINESE: string = String.raw`(?:[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])`;
const REGEX_RANGE_OTHER_LEFT: string = String.raw`[A-Za-z0-9@~%+=|±\)}#$¥€£₤]`;
const REGEX_RANGE_OTHER_RIGHT: string = String.raw`[A-Za-z0-9@~%+=|±\({#$¥€£₤]`;
const REGEX_STR_INTER_SCRIPT: string = `(?:(${REGEX_RANGE_CHINESE})(?=${REGEX_RANGE_OTHER_RIGHT})|(${REGEX_RANGE_OTHER_LEFT})(?=${REGEX_RANGE_CHINESE}))`;

const SPACE: string = '\u200A';

const WRAPPER_CLASS: string = 'gadget-text_spacing';

const SELECTOR_ALLOWED: string[] = [
	'a',
	'abbr',
	'article',
	'aside',
	'b',
	'bdi',
	'big',
	'blockquote',
	'button',
	'caption',
	'center',
	'cite',
	'data',
	'dd',
	'del',
	'details',
	'dfn',
	'div',
	'dt',
	'em',
	'figcaption',
	'footer',
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'header',
	'i',
	'ins',
	'label',
	'legend',
	'li',
	'main',
	'mark',
	'option',
	'p',
	'q',
	'ruby',
	's',
	'section',
	'small',
	'span',
	'strike',
	'strong',
	'sub',
	'summary',
	'sup',
	'td',
	'th',
	'time',
	'u',
];
const SELECTOR_BLOCKED: string[] = [
	'code',
	'kbd',
	'pre',
	'rp',
	'rt',
	'samp',
	'textarea',
	'var',
	// Elements with this class are excluded
	'.gadget-nospace',
	// Editable elements
	'[contenteditable="true"]',
	// ACE editor content
	'.ace_editor',
	// Visual Editor (and 2017 Wikitext Editor) content & diff
	'.ve-ui-surface',
	'.ve-init-mw-diffPage-diff',
	// Diff
	'.diff-context',
	'.diff-addedline',
	'.diff-deletedline',
	// Diff (inline mode)
	'.mw-diff-inline-added',
	'.mw-diff-inline-deleted',
	'.mw-diff-inline-moved',
	'.mw-diff-inline-changed',
	'.mw-diff-inline-context',
];

// FIXME: Use :is() in the future once it has better browser compatibility
const SELECTOR: string = SELECTOR_ALLOWED.map((allowed: string): string => {
	return `${allowed}:not(${SELECTOR_BLOCKED.flatMap((blocked: string): string | string[] => {
		// Not include itself if it is a tag selector
		return (blocked[0] as string).match(/[a-z]/i) ? `${blocked} *` : [blocked, `${blocked} *`];
	}).join(',')})`;
}).join(',');

const getLeafElements = (parent: HTMLElement): HTMLElement[] => {
	const candidates: NodeListOf<HTMLElement> = parent.querySelectorAll(SELECTOR);
	const result: HTMLElement[] = [];

	if (parent.matches(SELECTOR)) {
		result.push(parent);
	}

	for (const candidate of candidates) {
		for (const childNode of candidate.childNodes) {
			if (isTextNode(childNode)) {
				result.push(candidate);
				break;
			}
		}
	}

	return result;
};

const getNextVisibleSibling = (node: Node): HTMLElement | Text | null => {
	let currentNode: Node = node;

	// Use loops rather than recursion for better performance
	while (true) {
		const candidate: ChildNode | null = currentNode.nextSibling;

		if (!candidate) {
			const parent: HTMLElement | null = currentNode.parentElement;
			if (!parent) {
				// Parent is Document, so no visible sibling
				return null;
			}
			// Bubble up to its parent and get its sibling
			currentNode = parent;
			continue;
		}

		if (!(candidate instanceof HTMLElement || candidate instanceof Text)) {
			// Comments, SVGs, etc.: get its sibling as result
			currentNode = candidate;
			continue;
		}

		if (candidate instanceof HTMLElement) {
			if (!isVisible(candidate)) {
				// Invisible: recursively get this element's next sibling
				currentNode = candidate;
				continue;
			}

			if (!isInlineHTMLElement(candidate)) {
				// Next sibling is not inline (at next line), so no siblings
				return null;
			}
		}

		if (candidate instanceof Text && !candidate.data.trim()) {
			// Skip empty Text nodes (e.g. line breaks)
			currentNode = candidate;
			continue;
		}

		return candidate;
	}
};

const createSpacingWrapper = (str: string): [string, HTMLSpanElement] => {
	const span: HTMLSpanElement = document.createElement('span');
	// eslint-disable-next-line mediawiki/class-doc
	span.className = WRAPPER_CLASS;
	span.textContent = str.slice(-1);

	return [str.slice(0, -1), span];
};

const adjustSpacing = (element: HTMLElement): void => {
	// Freeze NodeList in advance
	const childNodes: ChildNode[] = [...element.childNodes];
	const textSpacingPosMap: Map<Text, number[]> = new Map<Text, number[]>();

	for (const child of childNodes) {
		if (!(child instanceof Text)) {
			continue;
		}

		const nextSibling: HTMLElement | Text | null = getNextVisibleSibling(child);

		let testString: string = getNodeText(child);
		if (nextSibling) {
			// Append first character to detect script intersection
			testString += getNodeText(nextSibling)[0] ?? '';
		}

		const indexes: number[] = [];
		// Global regexps are stateful so do initialization in each loop
		const regexTextNodeData: RegExp = new RegExp(REGEX_STR_INTER_SCRIPT, 'g');

		while (true) {
			const match: RegExpExecArray | null = regexTextNodeData.exec(testString);
			if (!match) {
				break;
			}
			indexes.push(match.index + 1); // +1 to match script boundary
		}

		if (!indexes.length) {
			// Optimization: skip further steps
			// Also prevent unnecessary mutation, which will be detected by MutationObserver,
			// resulting in infinite loops
			continue;
		}

		textSpacingPosMap.set(child, indexes);
	}

	// Schedule DOM mutation to prevent forced reflows
	queueDomMutation(element, (): void => {
		for (const [node, indexes] of textSpacingPosMap) {
			const text: string = node.data;
			const fragments: string[] = splitAtIndexes(text, indexes);

			const replacement: (string | HTMLSpanElement)[] = fragments
				.slice(0, -1)
				.flatMap((fragment: string): [string, HTMLSpanElement] => {
					return createSpacingWrapper(fragment);
				});
			replacement.push(fragments.at(-1) as string);

			// Optimization: prevent forced reflows
			requestAnimationFrame(() => {
				node.replaceWith(...replacement);
			});
		}
	});
};

const addSpaceToString = (str: string): string => {
	const regex: RegExp = new RegExp(REGEX_STR_INTER_SCRIPT, 'g');

	return str.replace(regex, `$1$2${SPACE}`);
};

export {getLeafElements, adjustSpacing, addSpaceToString, WRAPPER_CLASS};
