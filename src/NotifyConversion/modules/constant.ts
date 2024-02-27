const GADGET_NAME: string = 'ext.gadget.NotifyConversion';

const SYSTEM_SCRIPT_LIST: string[] = [
	'滥用过滤器',
	'有兽档案馆编者',
	'有兽档案馆社区',
	'Example',
	'External contributors',
	'Maintenance script',
	'MediaWiki default',
	'MediaWiki message delivery',
	'New user page',
];

const WEBMASTER_LIST: string[] = ['QiuWen', 'QiuWen for Accounts', 'QiuwenSocialMedia'];

const WG_USER_NAME: string = mw.config.get('wgUserName') || '';
const WG_USER_GROUPS: string[] = mw.config.get('wgUserGroups') || [];
const WG_USER_VARIANT: string | null = mw.config.get('wgUserVariant');

const GOOD_VARIANTS: string[] = ['zh-cn', 'zh-my', 'zh-sg', 'zh-hk', 'zh-mo', 'zh-tw'];

export {GADGET_NAME, SYSTEM_SCRIPT_LIST, WEBMASTER_LIST, WG_USER_NAME, WG_USER_GROUPS, WG_USER_VARIANT, GOOD_VARIANTS};
