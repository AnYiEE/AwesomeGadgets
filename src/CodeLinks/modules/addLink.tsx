import React from 'ext.gadget.React';

const addLink = (element: Element, targetTitle: string): void => {
	if (!(element instanceof Element)) {
		throw new TypeError('Expected Element interface');
	}

	const {firstChild} = element;
	if (!(firstChild instanceof Text)) {
		throw new TypeError('Expected Text interface');
	}

	element.append(<a href={mw.util.getUrl(targetTitle)}>{firstChild}</a>);
};

export {addLink};
