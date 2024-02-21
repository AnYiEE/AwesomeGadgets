import {REGEX_URL} from './constant';
import React from 'ext.gadget.React';

const processComment = (element: Element): void => {
	const {firstChild} = element;
	if (!(firstChild instanceof Text)) {
		throw new TypeError('Expected Text interface');
	}

	const {textContent} = firstChild;
	if (!textContent) {
		return;
	}

	const templateMatch: RegExpExecArray | null = /(\{\{(?:#invoke:)?)([^|{}[\]\n#]+)(?=\||}})/i.exec(textContent);
	const wikilinkMatch: RegExpExecArray | null = /\[\[([^|{}[\]\n]+)?(?:\|.*?)?]]/.exec(textContent);
	const urlMatch: RegExpExecArray | null = REGEX_URL.exec(textContent);
	if (!(templateMatch || wikilinkMatch || urlMatch)) {
		return;
	}

	const link = (<a className="code-link" />) as HTMLAnchorElement;

	let linkText: string = '';
	let start: number = (wikilinkMatch || templateMatch || urlMatch)?.index ?? 0;
	if (urlMatch) {
		const [url] = urlMatch;
		linkText = url;
		link.href = url;
	} else {
		let fullPageName: string = '';
		if (wikilinkMatch) {
			[linkText] = wikilinkMatch;
			fullPageName = wikilinkMatch[1] as string;
		} else if (templateMatch) {
			const prefix: string = templateMatch[1] as string;
			const pageName: string = templateMatch[2] as string;
			fullPageName = `${prefix === '{{#invoke:' ? 'Module:' : 'Template:'}${pageName}`;
			linkText = pageName;
			link.title = fullPageName;
			start += prefix.length;
		}
		link.href = mw.util.getUrl(fullPageName);
	}

	link.append(document.createTextNode(linkText));
	firstChild.before(link);

	const afterLink: string = textContent.slice(Math.max(0, start + linkText.length));
	firstChild.textContent = afterLink;

	const beforeLink: string = textContent.slice(0, Math.max(0, start));
	element.insertBefore(document.createTextNode(beforeLink), link);
};

export {processComment};
