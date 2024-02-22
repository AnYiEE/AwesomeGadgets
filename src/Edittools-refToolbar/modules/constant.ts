const WG_ACTION: MediaWikiConfigMapWgAction = mw.config.get('wgAction');
const WG_PAGE_CONTENT_MODEL: string = mw.config.get('wgPageContentModel');
const WG_USER_LANGUAGE: string = mw.config.get('wgUserLanguage');

const IS_WG_EDIT_OR_SUBMIT_ACTION: boolean = ['edit', 'submit'].includes(WG_ACTION);

export {WG_PAGE_CONTENT_MODEL, WG_USER_LANGUAGE, IS_WG_EDIT_OR_SUBMIT_ACTION};
