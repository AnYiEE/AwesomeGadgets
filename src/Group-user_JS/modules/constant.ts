const WG_ACTION: MediaWikiConfigMapWgAction = mw.config.get('wgAction');
const WG_CANONICAL_SPECIAL_PAGE_NAME: string | false = mw.config.get('wgCanonicalSpecialPageName');
const WG_CATEGORIES: string[] = mw.config.get('wgCategories');
const WG_NAMESPACE_NUMBER: number = mw.config.get('wgNamespaceNumber');
const WG_PAGE_NAME: string = mw.config.get('wgPageName');

const IS_WG_EDIT_OR_SUBMIT_ACTION: boolean = ['edit', 'submit'].includes(WG_ACTION);

export {
	IS_WG_EDIT_OR_SUBMIT_ACTION,
	WG_ACTION,
	WG_CANONICAL_SPECIAL_PAGE_NAME,
	WG_CATEGORIES,
	WG_NAMESPACE_NUMBER,
	WG_PAGE_NAME,
};
