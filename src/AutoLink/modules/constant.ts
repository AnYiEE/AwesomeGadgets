const WG_ACTION: MediaWikiConfigMapWgAction = mw.config.get('wgAction');
const WG_CANONICAL_NAMESPACE: string = mw.config.get('wgCanonicalNamespace');
const WG_CANONICAL_SPECIAL_PAGE_NAME: string = mw.config.get('wgCanonicalSpecialPageName').toString();

const IS_DIFF_ACTION: boolean = !!mw.util.getParamValue('diff');
// Special crono pages where this script is enabled
const IS_TARGET_SPECIAL_PAGE: boolean = [
	'Contributions',
	'Log',
	'Newpages',
	'Recentchanges',
	'Recentchangeslinked',
	'Watchlist',
].includes(WG_CANONICAL_SPECIAL_PAGE_NAME);
const IS_IN_TARGET_SPECIAL_PAGE: boolean = WG_CANONICAL_NAMESPACE === 'Special' && IS_TARGET_SPECIAL_PAGE;
const IS_WG_EDIT_OR_SUBMIT_ACTION: boolean = ['edit', 'submit'].includes(WG_ACTION);
const IS_WG_HISTORY_ACTION: boolean = WG_ACTION === 'history';

const REGEX_INTERNAL_URL: RegExp = /([^=])([\s"'])((?:\/?w\/index\.php\?|\/?wiki\/)[\w!#%&()+./:=?@\\~-]+)\2/g;
// External links (no wikicode)
const REGEX_IMPORT_SCRIPT: RegExp =
	/([Ii]mport[Ss]cript(?:<span class="br0">)?\((?:<\/span><span class="st0">)?)('|")([^\n<>[\]{|}]+?)(\2(?:<\/span><span class="br0">)?\)(?:<\/span>)?)/g;
// ImportScript
const REGEX_TL: RegExp = /([^{]{{2}\s*[Tt]l\|)([^\n:<>[\]{|}]+)/g;
// For {{tl}}
const REGEX_URL: RegExp =
	/((?:[^"[]|[^=]")(?:<span class="diffchange">)?)((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+?)(?=(?:<\/span>)?[\s"')\]|}])/g;

export {
	IS_DIFF_ACTION,
	IS_IN_TARGET_SPECIAL_PAGE,
	IS_TARGET_SPECIAL_PAGE,
	IS_WG_EDIT_OR_SUBMIT_ACTION,
	IS_WG_HISTORY_ACTION,
	REGEX_INTERNAL_URL,
	REGEX_IMPORT_SCRIPT,
	REGEX_TL,
	REGEX_URL,
};
