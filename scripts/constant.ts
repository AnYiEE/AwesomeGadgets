import type {DefaultDefinition, DefaultSectionMap} from './scripts';

const HEADER = '/* <nowiki> */';

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

const FOOTER = '/* </nowiki> */';

/**
 * `MediaWiki:Gadgets-definition`页面最上方的文本
 *
 * The content at the top of the `MediaWiki:Gadgets-definition` page
 */
const BANNER = `<div class="mw-message-box mw-message-box-notice">
<big>本页面内容由脚本自动生成，维护于Git仓库内。对本页面内容的变更，应通知技术团队，以免在代码部署时被误覆盖。</big>
* 若需要查看本地小工具使用情况，请前往[[Special:GadgetUsage|“小工具使用统计”界面]]。
* 若需要设置您所需启用或关闭的小工具，请前往[[Special:参数设置#mw-prefsection-gadgets|参数设置]]。
</div>`;

const DEFAULT_DEFINITION: DefaultDefinition = {
	enable: true,
	description: '', // 回落值为小工具名称 / Fallback value: the name of the current gadget
	section: '', // 回落值为appear / Fallback value: appear
	actions: [],
	contentModels: [],
	default: false,
	dependencies: [],
	hidden: false,
	namespaces: false,
	package: false,
	peers: [],
	requiresES6: false,
	rights: [],
	skins: [],
	supportsUrlLoad: false,
	// targets: 'desktop' | 'mobile' -> 已弃用，转用 skins 参数 / Deprecated, switch to the "skins" parameter
	// type: 'general' | 'styles' -> 自动识别，无需指定 / Automatically recognized, no need to specify
};

/**
 * 指定`MediaWiki:Gadget-section-${DEFAULT_DEFINITION.section}`页面的文本（即小工具章节名）
 *
 * 可自行添加，回落值为`DEFAULT_DEFINITION.section`的值
 *
 * The content of the `MediaWiki:Gadget-section-${DEFAULT_DEFINITION.section}` page (the name of the current gadget section)
 *
 * Can be added by oneself, the fallback value is the value of `DEFAULT_DEFINITION.section`
 */
const DEFINITION_SECTION_MAP: DefaultSectionMap = {
	appear: '显示类小工具',
	browser: '浏览类小工具',
	compatibility: '基础类小工具',
	edit: '编辑类小工具',
	sysop: '管理类小工具',
};

const DEPLOY_USER_AGENT = 'AnYiEE/AwesomeGadgets (https://github.com/AnYiEE/AwesomeGadgets; i@anyi.in)';

/**
 * 是否自动转换`MediaWiki:Gadget-${gadgetName}`和`MediaWiki:Gadget-section-${DEFAULT_DEFINITION.section}`页面的语言变体
 *
 * 需要目标 MediaWiki 网站存在 NoteTA 模板和 IT 以及 MediaWiki 公共转换组
 *
 * Whether to automatically convert the language variants of the `MediaWiki:Gadget-${gadgetName}` and `MediaWiki:Gadget-section-${DEFAULT_DEFINITION.section}` pages
 *
 * The target MediaWiki site needs to have the NoteTA template and the IT and MediaWiki public conversion group
 */
const IS_CONVERT_VARIANT = false;

/**
 * 部署时请求目标 MediaWiki 网站 API 的最大并发数，上限为 256
 *
 * The maximum concurrency number of requests to the API during deployment, the upper limit is 256
 */
const MAX_CONCURRENCY = 16;

export {
	HEADER,
	WARNING,
	FOOTER,
	BANNER,
	DEFAULT_DEFINITION,
	DEFINITION_SECTION_MAP,
	DEPLOY_USER_AGENT,
	IS_CONVERT_VARIANT,
	MAX_CONCURRENCY,
};
