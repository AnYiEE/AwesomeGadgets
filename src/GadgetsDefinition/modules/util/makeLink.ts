const makeLink = (href: string, text: string | null): string => {
	// This anchor element is used to generate links and is not attached to the document.
	const link: HTMLAnchorElement = document.createElement('a');

	link.href = href;
	link.textContent = text;

	return link.outerHTML;
};

const makeWikilink = (page: string, text: string): string => {
	return makeLink(mw.util.getUrl(page), text || page);
};

export {makeLink, makeWikilink};
