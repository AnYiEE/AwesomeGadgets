import {addLink} from './modules/addLink';
import {getBody} from 'ext.gadget.Util';
import {processComment} from './modules/processComment';

void getBody().then(function codeLinks($body: JQuery<HTMLBodyElement>): void {
	for (const codeBlock of $body.find('.mw-highlight')) {
		for (const commentClass of ['c', 'c1', 'cm']) {
			for (const comment of codeBlock.querySelectorAll(`.${commentClass}`)) {
				processComment(comment);
			}
		}
	}

	// Link module names after `require` and `mw.loadData`, and tracking template
	// names after `require("Module:debug").track`.
	const classes = {
		identifier: 'n',
		functionName: 'nb',
		singleQuoteString: 's1',
		doubleQuoteString: 's2',
	} as const satisfies Record<string, string>;

	const moduleNameElementArray: Element[] = [];
	for (const functionNameElement of $body.find(`.${classes.functionName}`)) {
		const text: string | null | undefined = functionNameElement.firstChild?.nodeValue;
		if (text !== 'require') {
			continue;
		}

		let nextElement: Element | null = functionNameElement.nextElementSibling;
		if (!nextElement) {
			continue;
		}

		let nextElementFirstValue: string | null | undefined = nextElement.firstChild?.nodeValue;
		const hasParenthesis: boolean = nextElementFirstValue === '(';
		if (hasParenthesis) {
			nextElement = nextElement.nextElementSibling;
			if (!nextElement) {
				continue;
			}
			nextElementFirstValue = nextElement.firstChild?.nodeValue;
		}

		const {classList} = nextElement;
		if (!(classList.contains(classes.singleQuoteString) || classList.contains(classes.doubleQuoteString))) {
			continue;
		}

		const element: Element = nextElement;
		const elementValue: string | null | undefined = nextElementFirstValue;
		if (!elementValue) {
			continue;
		}

		nextElement = nextElement.nextElementSibling;
		if (!nextElement) {
			continue;
		}

		nextElementFirstValue = nextElement.firstChild?.nodeValue;
		if (hasParenthesis && nextElementFirstValue?.[0] !== ')') {
			continue;
		}

		moduleNameElementArray[moduleNameElementArray.length] = element;
	}

	const dataModuleNameElementArray: Element[] = [];
	for (const element of $body.find(`.${classes.singleQuoteString},.${classes.doubleQuoteString}`)) {
		if (moduleNameElementArray.includes(element)) {
			continue;
		}

		const elementFirstValue: string | null | undefined = element.firstChild?.nodeValue;
		if (!elementFirstValue || !/^["'](?:module|模[组組块]):/i.test(elementFirstValue)) {
			continue;
		}

		let prevElement: Element | null = element.previousElementSibling;
		if (!prevElement) {
			continue;
		}

		let prevElementFirstValue: string | null | undefined = prevElement.firstChild?.nodeValue;
		if (prevElementFirstValue === '(') {
			const nextElement: Element | null = element.nextElementSibling;
			if (!nextElement) {
				continue;
			}
			const nextElementFirstValue: string | null | undefined = nextElement.firstChild?.nodeValue;
			if (nextElementFirstValue?.[0] !== ')') {
				continue;
			}
			prevElement = prevElement.previousElementSibling;
			if (!prevElement) {
				continue;
			}
			prevElementFirstValue = prevElement.firstChild?.nodeValue;
		}
		if (prevElementFirstValue !== 'loadData') {
			continue;
		}

		prevElement = prevElement.previousElementSibling;
		if (!prevElement) {
			continue;
		}

		prevElementFirstValue = prevElement.firstChild?.nodeValue;
		if (prevElementFirstValue !== '.') {
			continue;
		}

		prevElement = prevElement.previousElementSibling;
		if (!prevElement) {
			continue;
		}

		prevElementFirstValue = prevElement.firstChild?.nodeValue;
		if (prevElementFirstValue !== 'mw') {
			continue;
		}

		dataModuleNameElementArray[dataModuleNameElementArray.length] = element;
	}

	// Link module names to module pages,
	// or to the section in the Scribunto manual.
	for (const element of [...moduleNameElementArray, ...dataModuleNameElementArray]) {
		const elementFirstValue: string | null | undefined = element.firstChild?.nodeValue;
		if (!elementFirstValue) {
			continue;
		}

		const moduleName: string = elementFirstValue.slice(1, -1);
		const targetTitle: string = /^(?:module|模[组組块])?:/i.test(moduleName)
			? moduleName
			: `Help:Lua#${moduleName}`;
		addLink(element, targetTitle);
	}
});
