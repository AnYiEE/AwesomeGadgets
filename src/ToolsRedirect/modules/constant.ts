const WG_NAMESPACE_IDS = mw.config.get('wgNamespaceIds');
const WG_NAMESPACE_NUMBER: number = mw.config.get('wgNamespaceNumber');
const WG_PAGE_NAME: string = mw.config.get('wgPageName');
const WG_USER_LANGUAGE: string = mw.config.get('wgUserLanguage');

const IS_CATEGORY = WG_NAMESPACE_NUMBER === 14;

const SUFFIX_APPEND = 0;
const SUFFIX_REPLACE = 1;
const SUFFIX_SETDEFAULT = 2;

const EDIT_TAG = 'ToolsRedirect';

const VARIANTS = ['zh-hans', 'zh-hant', 'zh-cn', 'zh-hk', 'zh-mo', 'zh-sg', 'zh-my', 'zh-tw'];

export {
	EDIT_TAG,
	IS_CATEGORY,
	SUFFIX_APPEND,
	SUFFIX_REPLACE,
	SUFFIX_SETDEFAULT,
	VARIANTS,
	WG_NAMESPACE_IDS,
	WG_NAMESPACE_NUMBER,
	WG_PAGE_NAME,
	WG_USER_LANGUAGE,
};
