const WG_ACTION: MediaWikiConfigMapWgAction = mw.config.get('wgAction');
const IS_WG_HISTORY_ACTION: boolean = WG_ACTION === 'history';
const IS_LOG: boolean = mw.config.get('wgCanonicalSpecialPageName') === 'Log';
const RRD_PAGE: string = 'LIB_talk:版本删除提报';

export {IS_LOG, IS_WG_HISTORY_ACTION, RRD_PAGE};
