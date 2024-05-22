const URL_DIFF: string | null = mw.util.getParamValue('diff');
const URL_HIGHLIGHT: string | null = mw.util.getParamValue('highlight');
const URL_HILIGHT: string | null = mw.util.getParamValue('hilight');
//const URL_NO_PERM: string | null = mw.util.getParamValue('noperm');
const URL_USE: string | null = mw.util.getParamValue('use');
const URL_WITH_CSS: string | null = mw.util.getParamValue('withCSS');
const URL_WITH_JS: string | null = mw.util.getParamValue('withJS');
const URL_WITH_MODULE: string | null = mw.util.getParamValue('withModule');

const WG_ACTION: MediaWikiConfigMapWgAction = mw.config.get('wgAction');
const WG_CANONICAL_SPECIAL_PAGE_NAME: string | false = mw.config.get('wgCanonicalSpecialPageName');
const WG_NAMESPACE_NUMBER: number = mw.config.get('wgNamespaceNumber');
const WG_PAGE_NAME: string = mw.config.get('wgPageName');
const WG_SCRIPT: string = mw.config.get('wgScript');
const WG_SKIN: string = mw.config.get('skin');
const WG_USER_NAME: string | null = mw.config.get('wgUserName');

export {
	URL_DIFF,
	URL_HIGHLIGHT,
	URL_HILIGHT,
	//URL_NO_PERM,
	URL_USE,
	URL_WITH_CSS,
	URL_WITH_JS,
	URL_WITH_MODULE,
	WG_ACTION,
	WG_CANONICAL_SPECIAL_PAGE_NAME,
	WG_NAMESPACE_NUMBER,
	WG_PAGE_NAME,
	WG_SCRIPT,
	WG_SKIN,
	WG_USER_NAME,
};
