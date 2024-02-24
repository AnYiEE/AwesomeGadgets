type UserRights =
	// 全站管理型权限
	| 'responsibleoperator'
	| 'bureaucrat'
	| 'checkuser'
	| 'suppress'
	| 'sysop'
	| 'interface-admin'
	| 'templateeditor'
	| 'importer'
	// 页面管理型权限
	| 'patroller'
	| 'autopatrolled'
	// 大量操作型权限
	| 'eventsponsor'
	| 'massmessage-sender'
	// 确认权限
	| 'confirmed'
	| 'autoconfirmed'
	// 机器权限
	| 'bot'
	| 'flood'
	// 豁免
	| 'ipblock-exempt'
	| 'rnrsverify-exempt';

export {UserRights};
