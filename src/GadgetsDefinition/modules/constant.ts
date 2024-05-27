const IS_DEFINITION_PAGE: boolean =
	mw.config.get('wgCanonicalNamespace') === 'MediaWiki' && mw.config.get('wgTitle') === 'Gadgets-definition';

const REXEX_GADGET_NAME: RegExp = /^(\s*)([\w_-]+)\s*/;

export {IS_DEFINITION_PAGE, REXEX_GADGET_NAME};
