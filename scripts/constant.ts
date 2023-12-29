import type {DefaultDefinition, DefaultSectionMap} from './modules/types';

/**
 * `MediaWiki:Gadgets-definition`页面最上方的文本
 *
 * The content above the `MediaWiki:Gadgets-definition` page
 */
const BANNER: string = `<div class="mw-message-box mw-message-box-notice">
<big>本页面内容由脚本自动生成，维护于Git仓库内。对本页面内容的变更，应通知技术团队，以免在代码部署时被误覆盖。</big>
* 若需要查看本地小工具使用情况，请前往[[Special:GadgetUsage|“小工具使用统计”界面]]。
* 若需要设置您所需启用或关闭的小工具，请前往[[Special:参数设置#mw-prefsection-gadgets|参数设置]]。
</div>`;

/**
 * 小工具样式和脚本文件上方的文本，需为 CSS 和 JavaScript 所兼容的注释
 *
 * The content above each gadget (CSS and JavaScript files), should be compatible comments for CSS and JavaScript
 */
const HEADER: string = `/**
 * +------------------------------------------------------------+
 * |            === WARNING: GLOBAL GADGET FILE ===             |
 * +------------------------------------------------------------+
 * |       All changes should be made in the repository,        |
 * |                otherwise they will be lost.                |
 * +------------------------------------------------------------+
 * |        Changes to this page may affect many users.         |
 * | Please discuss changes by opening an issue before editing. |
 * +------------------------------------------------------------+
 */`;

const DEFAULT_DEFINITION: DefaultDefinition = {
	enable: true,
	description: '', // 回落值为小工具名称 / Fallback value: the name of the current gadget
	section: '', // 回落值为 appear / Fallback value: appear
	actions: [],
	contentModels: [],
	default: false,
	dependencies: [],
	hidden: false,
	namespaces: false,
	package: false,
	peers: [],
	rights: [],
	skins: [],
	supportsUrlLoad: false,
	// requiresES6: boolean -> 无需指定，以下方`GLOBAL_REQUIRES_ES6`为准 / No need to specify, the following is based on `GLOBAL_REQUIRES_ES6`
	// targets: 'desktop' | 'mobile' -> 已弃用，转用 skins 参数 / Deprecated, switch to the "skins" parameter
	// type: 'general' | 'styles' -> 自动识别，无需指定 / Automatically recognized, no need to specify <https://github.com/wikimedia/mediawiki-extensions-Gadgets/blob/master/includes/Gadget.php#L514>
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

/**
 * 部署时使用的`User-Agent`标头
 *
 * The `User-Agent` header used when deploying
 */
const DEPLOY_USER_AGENT: string = 'AnYiEE/AwesomeGadgets (https://github.com/AnYiEE/AwesomeGadgets; i@anyi.in)';

/**
 * 是否自动转换`MediaWiki:Gadget-${gadgetName}`和`MediaWiki:Gadget-section-${DEFAULT_DEFINITION.section}`页面的语言变体
 *
 * 需要目标 MediaWiki 网站存在 NoteTA 模板和 IT 以及 MediaWiki 公共转换组
 *
 * Whether to automatically convert the language variants of the `MediaWiki:Gadget-${gadgetName}` and `MediaWiki:Gadget-section-${DEFAULT_DEFINITION.section}` pages
 *
 * The target MediaWiki site needs to have the NoteTA template and the IT and MediaWiki public conversion group
 */
const CONVERT_VARIANT: boolean = false;

/**
 * 启用此选项会为全部小工具设置`requiresES6`标识，禁用 Gadget 扩展的语法检查功能以允许使用 ES6 及以上版本语法（即使经过编译）
 *
 * 需要 Gadget 扩展所对应的分支版本大于 1.40.0-wmf.7，或自行从主线合并相关代码
 * @see {@link https://git.qiuwen.net.cn/Fork/mediawiki-extensions-Gadgets/commit/bbf7ba5} example commit
 *
 * 如需自定义`.browserslistrc`，应启用此选项
 *
 * 注意：Gadget 扩展默认不支持小工具同时存在`default`和`requiresES6`标识，如需为存在`default`标识的小工具绕过服务端语法检查，应自行修改 Gadget 扩展，否则**不应**将此选项设置为 true
 * @see {@link https://git.qiuwen.net.cn/Fork/mediawiki-extensions-Gadgets/commit/21e2b34} example commit
 *
 * Allow the use of ES6+ syntax in all gadgets
 *
 * Requires Gadget extension branch version greater than or equal to 1.40.0-wmf.7, or merge the relevant code from the mainline by yourself
 *
 * Enabling this option will set the `requiresES6` flag for all gadgets, which means that server-side syntax validation is skipped to allow the use of ES6+ syntax (even after compilation)
 *
 * If you want to customize `.browserslistrc`, enable this option
 *
 * Note: By default, Gadget extensions do not support gadgets that have both the `default` and `requiresES6` flags. If you need to bypass server-side syntax validation for gadgets with the `default` flag, you should modify the Gadget extension yourself. Otherwise, **DO NOT** set this option to true
 *
 */
const GLOBAL_REQUIRES_ES6: boolean = false;

/**
 * 部署时请求目标 MediaWiki 网站 API 的最大并发数，上限为 256
 *
 * The maximum concurrency number of requests to the API during deployment, the upper limit is 256
 */
const MAX_CONCURRENCY: number = 16;

export {
	BANNER,
	HEADER,
	DEFAULT_DEFINITION,
	DEFINITION_SECTION_MAP,
	DEPLOY_USER_AGENT,
	CONVERT_VARIANT,
	GLOBAL_REQUIRES_ES6,
	MAX_CONCURRENCY,
};
