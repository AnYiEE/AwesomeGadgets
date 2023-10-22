/** @type {string} */
const HEADER = `/* <nowiki> */`;

/** @type {string} */
const FOOTER = '/* </nowiki> */';

/** @type {string} */
const WARNING = `/**
 * +--------------------------------------------------------+
 * |         === WARNING: GLOBAL GADGET FILE ===            |
 * +--------------------------------------------------------+
 * |      All changes should be made in the repository,     |
 * |              otherwise they will be lost.              |
 * +--------------------------------------------------------+
 * |      Changes to this page may affect many users.       |
 * |  Please discuss changes at talk page before editing.   |
 * +--------------------------------------------------------+
 */`;

/** @type {string} */
const BANNER = `<div class="mw-message-box mw-message-box-notice">
<big>本页面内容由脚本自动生成，维护于Git仓库内。对本页面内容的变更，应通知技术团队，以免在代码部署时被误覆盖。</big>
* 若需要该页面的描述说明，请前往[[Special:小工具|“小工具”界面]]。
* 若需要查看本地小工具使用情况，请前往[[Special:GadgetUsage|“小工具使用统计”界面]]。
* 若需要设置您所需启用或关闭的小工具，请前往[[Special:参数设置#mw-prefsection-gadgets|参数设置]]。
</div>`;

/** @type {{enable: boolean; category: '' | 'appear' | 'browser' | 'compatibility' | 'edit' | 'sysop'; description: string; actions: string[]; contentModels: string[]; default: boolean; dependencies: string[]; hidden: boolean; namespaces: false | number[]; package: boolean; peers: string[]; rights: string[]; skins: string[]; supportsUrlLoad: boolean}} */
const DEFAULT_DEFINITION = {
	enable: true,
	category: '', // 回落值为appear
	description: '', // 回落值为小工具名称
	actions: [],
	contentModels: [],
	'default': false,
	dependencies: [],
	hidden: false,
	namespaces: false,
	'package': false,
	peers: [],
	rights: [],
	skins: [],
	supportsUrlLoad: false,
	// targets: 'desktop' | 'mobile' -> 已弃用，转用skins参数
	// type: 'general' | 'styles' -> 自动识别，无需指定
};

/** @type {string} */
const DEPLOY_USER_AGENT = '';

export {HEADER, WARNING, FOOTER, BANNER, DEFAULT_DEFINITION, DEPLOY_USER_AGENT};
