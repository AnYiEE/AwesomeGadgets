const SYSTEM_SCRIPT_LIST: string[] = [
	'滥用过滤器',
	'Example',
	'External contributors',
	'Maintenance script',
	'MediaWiki default',
	'MediaWiki message delivery',
	'New user page',
];
const WEBMASTER_LIST: string[] = ['QiuWen', 'QiuWen for Accounts', 'QiuwenSocialMedia'];

const WG_USER_GROUPS: string[] = mw.config.get('wgUserGroups') ?? [];
const WG_USER_NAME: string = mw.config.get('wgUserName') ?? '';
const WG_USER_EDIT_COUNT: number = mw.config.get('wgUserEditCount') ?? 0;

export {SYSTEM_SCRIPT_LIST, WEBMASTER_LIST, WG_USER_EDIT_COUNT, WG_USER_GROUPS, WG_USER_NAME};
