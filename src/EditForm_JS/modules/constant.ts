const WG_ACTION: MediaWikiConfigMapWgAction = mw.config.get('wgAction');
const WG_WIKI_ID = mw.config.get('wgWikiID');
const WG_NAMESPACE_NUMBER: number = mw.config.get('wgNamespaceNumber');
const WG_PAGE_NAME: string = mw.config.get('wgPageName');
const WG_USER_GROUPS: string[] = mw.config.get('wgUserGroups') ?? [];

const IS_WG_EDIT_OR_SUBMIT_ACTION: boolean = ['edit', 'submit'].includes(WG_ACTION);

export {WG_PAGE_NAME, WG_NAMESPACE_NUMBER, WG_USER_GROUPS, WG_WIKI_ID, IS_WG_EDIT_OR_SUBMIT_ACTION};
