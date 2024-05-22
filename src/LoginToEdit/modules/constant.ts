const WG_ACTION: MediaWikiConfigMapWgAction = mw.config.get('wgAction');
const WG_PAGE_NAME: string = mw.config.get('wgPageName');
const WG_SKIN: string = mw.config.get('skin');
const WG_USER_NAME: string | null = mw.config.get('wgUserName');

const IS_WG_EDIT_OR_SUBMIT_ACTION: boolean = ['edit', 'submit'].includes(WG_ACTION);

export {WG_PAGE_NAME, WG_SKIN, WG_USER_NAME, IS_WG_EDIT_OR_SUBMIT_ACTION};
