const URL_FULLTEXT: string | null = mw.util.getParamValue('fulltext');
const URL_SEARCH: string | null = mw.util.getParamValue('search');

const WG_NAMESPACE_IDS: Record<string, number> = mw.config.get('wgNamespaceIds');
const WG_SCRIPT: string = mw.config.get('wgScript');

export {URL_FULLTEXT, URL_SEARCH, WG_NAMESPACE_IDS, WG_SCRIPT};
