const SYSTEM_SCRIPT_LIST: string[] = [
	'滥用过滤器',
	'New user message',
	'Example',
	'External contributors',
	'Maintenance script',
	'MediaWiki default',
	'MediaWiki message delivery',
	'New user page',
];
const WEBMASTER_LIST: string[] = ['QiuWen', 'QiuWen for Accounts', 'QiuwenSocialMedia']; //暂时保留，待日后定义
const WG_SKIN = mw.config.get('skin');
const WG_RELEVANT_USER_NAME: string = mw.config.get('wgRelevantUserName') ?? '';

export {SYSTEM_SCRIPT_LIST, WEBMASTER_LIST, WG_SKIN, WG_RELEVANT_USER_NAME};
