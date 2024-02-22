const WG_ACTION: MediaWikiConfigMapWgAction = mw.config.get('wgAction');
const WG_NAMESPACE_NUMBER: number = mw.config.get('wgNamespaceNumber');

const IS_WG_EDIT_OR_SUBMIT_ACTION: boolean = ['edit', 'submit'].includes(WG_ACTION);

export {WG_NAMESPACE_NUMBER, IS_WG_EDIT_OR_SUBMIT_ACTION};
