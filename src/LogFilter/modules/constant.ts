const REGEX_TARGET_PAGE: RegExp =
	/^(?:activeusers|checkuser|contributions|ipblocklist|linksearch|log|search|(?:uncategoriz|unus|want)ed(?:categori|templat)es|wantedfiles|(?:short|long|ancient|uncategorized|unwatched|wanted|protected|deadend|lonely|new)pages|fewestrevisions|withoutinterwiki|(?:double|broken)redirects|protectedtitles|crossnamespacelinks|recentchanges|categories|disambiguations|listredirects|globalusers|globalblocklist|listusers|watchlist|most(?:linked|revisions|categories)|nuke|whatlinkshere)$/i;

const URL_LIFILTER: string | null = mw.util.getParamValue('lifilter');
const URL_LIFILTER_CASE: string | null = mw.util.getParamValue('lifiltercase');
const URL_LIFILTER_EXPR: string | null = mw.util.getParamValue('lifilterexpr');
const URL_LIFILTER_HILIGHT: string | null = mw.util.getParamValue('lifilterhilight');
const URL_LIFILTER_INV: string | null = mw.util.getParamValue('lifilterinv');

const WG_ACTION: MediaWikiConfigMapWgAction = mw.config.get('wgAction');
const WG_CANONICAL_SPECIAL_PAGE_NAME: string = mw.config.get('wgCanonicalSpecialPageName') || '';

export {
	REGEX_TARGET_PAGE,
	URL_LIFILTER,
	URL_LIFILTER_CASE,
	URL_LIFILTER_EXPR,
	URL_LIFILTER_HILIGHT,
	URL_LIFILTER_INV,
	WG_ACTION,
	WG_CANONICAL_SPECIAL_PAGE_NAME,
};
