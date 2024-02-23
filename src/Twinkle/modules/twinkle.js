// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/*! Twinkle.js - twinkle.js */
(function twinkle($) {
	const $body = $('body');
	// Wrap with anonymous function
	// Check if account is experienced enough to use Twinkle
	if (!Morebits.userIsInGroup('autoconfirmed') && !Morebits.userIsInGroup('confirmed')) {
		console.warn('[Twinkle]非确认用户或自动确认用户，Twinkle不会运行。');
		return;
	}
	const Twinkle = {};
	window.Twinkle ||= Twinkle; // allow global access
	/**
	 * Twinkle-specific data shared by multiple modules
	 * Likely customized per installation
	 */
	// Custom change tag(s) to be applied to all Twinkle actions, create at Special:Tags
	Twinkle.changeTags = 'Twinkle';
	// Available for actions that don't (yet) support tags
	Twinkle.summaryAd = '（[[H:TW|Twinkle]]）';
	// Various hatnote templates, used when tagging (csd/xfd/tag/prod/protect) to ensure order
	Twinkle.hatnoteRegex =
		'(?:Short[ _]description)|(?:Rellink|Hatnote|HAT)|(?:Main|[细細][节節]|Main[ _]articles|主[条條]目|Hurricane[ _]main|[条條]目|主|[頁页]面|主[頁页]面|主[頁页]|主[題题]目|Main[ _]article|AP)|(?:Wrongtitle|Correct[ _]title)|(?:主条目消歧义|主條目消歧義|消歧义链接|消歧義鏈接|消歧義連結|消连|消連|消歧义连结|DisambLink|Noteref|Dablink)|(?:Distinguish|不是|Not|提示|混淆|分別|分别|區別|区别|本条目的主题不是|本條目的主題不是|本条目主题不是|本條目主題不是|条目主题不是|條目主題不是|主题不是|主題不是|Confused|区分|區分|Confusion|Confuse|RedirectNOT|Misspelling)|(?:Distinguish2|SelfDistinguish|Not2|不是2)|(?:For)|(?:Details|Further|See|另见|另見|More|相關條目|相关条目|Detail|见|見|更多资料|更多資料|Further[ _]information|更多资讯|更多資訊|More[ _]information|更多信息)|(?:Selfref)|(?:About|Otheruses4|关于|關於)|(?:Other[ _]uses|Otheruse|条目消歧义|條目消歧義|他用|Otheruses)|(?:Other[ _]uses list|Otheruselist|主條目消歧義列表|主条目消歧义列表|Otheruseslist|Aboutlist|About[ _]list|Otheruses[ _]list)|(?:Redirect|重定向至此|Redirects[ _]here|Redirect[ _]to)|(?:Redirect2|主條目消歧義2|主条目消歧义2|Redir|重定向至此2)|(?:Redirect3)|(?:Redirect4)|(?:Redirect-distinguish)|(?:Redirect-synonym)|(?:Redirect-multi)|(?:See[ _]Wiktionary|Seewikt)|(?:Seealso|参看|參看|See[ _]also|参见|參見|Also)|(?:See[ _]also2|Seealso2|不轉換參見|不转换参见)|(?:Other[ _]places)|(?:Contrast|對比|对比)';
	Twinkle.initCallbacks = [];
	/**
	 * Adds a callback to execute when Twinkle has loaded.
	 *
	 * @param {Function} func
	 * @param {string} [name] - name of module used to check if is disabled.
	 * If name is not given, module is loaded unconditionally.
	 */
	Twinkle.addInitCallback = (func, name) => {
		Twinkle.initCallbacks.push({
			func,
			name,
		});
	};
	Twinkle.defaultConfig = {};
	/**
	 * This holds the default set of preferences used by Twinkle.
	 * It is important that all new preferences added here, especially admin-only ones, are also added to
	 * |Twinkle.config.sections| in twinkleconfig.js, so they are configurable via the Twinkle preferences panel.
	 * For help on the actual preferences, see the comments in twinkleconfig.js.
	 *
	 * Formerly Twinkle.defaultConfig.twinkle
	 */
	Twinkle.defaultConfig = {
		// General
		userTalkPageMode: 'tab',
		dialogLargeFont: false,
		disabledModules: Morebits.userIsSysop ? [] : ['block'],
		// default to disable block for non-sysop, if enable manually, they can only use it to tag userpage
		disabledSysopModules: [],
		// ARV
		spiWatchReport: 'yes',
		// Block
		defaultToBlock64: false,
		defaultToPartialBlocks: false,
		blankTalkpageOnIndefBlock: false,
		watchBlockNotices: 'yes',
		customBlockReasonList: [],
		// Fluff (revert and rollback)
		openTalkPage: [],
		openTalkPageOnAutoRevert: false,
		rollbackInPlace: false,
		markRevertedPagesAsMinor: ['vand'],
		watchRevertedPages: ['norm', 'vand', 'torev'],
		watchRevertedExpiry: 'yes',
		offerReasonOnNormalRevert: true,
		confirmOnFluff: false,
		showRollbackLinks: ['diff', 'others'],
		customRevertSummary: [],
		// DI (twinkleimage)
		notifyUserOnDeli: true,
		deliWatchPage: 'default',
		deliWatchUser: 'default',
		// Protect
		watchRequestedPages: 'yes',
		watchPPTaggedPages: 'default',
		watchProtectedPages: 'default',
		// CSD
		speedySelectionStyle: 'buttonClick',
		watchSpeedyPages: ['g1', 'g3', 'g4', 'g7', 'g8'],
		watchSpeedyExpiry: 'yes',
		markSpeedyPagesAsPatrolled: false,
		watchSpeedyUser: '1 month',
		// these next two should probably be identical by default
		notifyUserOnSpeedyDeletionNomination: [
			'db',
			'g1',
			'g2',
			'g3',
			'g4',
			'g5',
			'g6',
			'g7',
			'g8',
			'g9',
			'a1',
			'a2',
			'a3',
			'r1',
			'r2',
			'f1',
			'f2',
			'f3',
			'f4',
			'f5',
			'o1',
			'o2',
			'o3',
		],
		warnUserOnSpeedyDelete: [
			'db',
			'g1',
			'g2',
			'g3',
			'g4',
			'g5',
			'g6',
			'g7',
			'g8',
			'g9',
			'a1',
			'a2',
			'a3',
			'r1',
			'r2',
			'f1',
			'f2',
			'f3',
			'f4',
			'f5',
			'o1',
			'o2',
			'o3',
		],
		promptForSpeedyDeletionSummary: [],
		openUserTalkPageOnSpeedyDelete: [],
		deleteTalkPageOnDelete: true,
		deleteRedirectsOnDelete: true,
		deleteSysopDefaultToDelete: false,
		speedyWindowHeight: 500,
		speedyWindowWidth: 800,
		logSpeedyNominations: true,
		speedyLogPageName: 'CSD日志',
		noLogOnSpeedyNomination: ['o1'],
		enlargeG7Input: false,
		// Unlink
		unlinkNamespaces: ['0', '6', '10', '302'],
		// Warn
		defaultWarningGroup: '1',
		combinedSingletMenus: false,
		watchWarnings: 'yes',
		oldSelect: false,
		customWarningList: [],
		autoMenuAfterRollback: false,
		// XfD
		logXfdNominations: true,
		xfdLogPageName: 'XfD日志',
		noLogOnXfdNomination: [],
		xfdWatchDiscussion: 'default',
		xfdWatchPage: 'default',
		xfdWatchUser: 'default',
		markXfdPagesAsPatrolled: true,
		FwdCsdToXfd: Morebits.userIsSysop,
		afdDefaultCategory: 'delete',
		afdFameDefaultReason: '没有足够的可靠来源证明此条目符合[[LIB:收录标准|收录标准]]',
		afdSubstubDefaultReason: '过期小小作品',
		XfdClose: Morebits.userIsSysop ? 'all' : 'hide',
		// Copyvio
		copyvioWatchPage: 'yes',
		copyvioWatchUser: 'yes',
		markCopyvioPagesAsPatrolled: true,
		// Hidden preferences
		autolevelStaleDays: 3,
		revertMaxRevisions: 50,
		// intentionally limited
		batchMax: 5000,
		batchChunks: 50,
		configPage: 'Help:Twinkle/参数设置',
		projectNamespaceName: mw.config.get('wgFormattedNamespaces')[4],
		sandboxPage: 'LIB:沙盒',
		// Deprecated options, as a fallback for add-on scripts/modules
		summaryAd: '（[[H:TW|Twinkle]]）',
		deletionSummaryAd: '（[[H:TW|Twinkle]]）',
		protectionSummaryAd: '（[[H:TW|Twinkle]]）',
		blockSummaryAd: '（[[H:TW|Twinkle]]）',
		// Tag
		groupByDefault: true,
		watchTaggedPages: 'yes',
		watchMergeDiscussions: 'yes',
		markTaggedPagesAsMinor: false,
		markTaggedPagesAsPatrolled: true,
		tagArticleSortOrder: 'cat',
		customTagList: [],
		customFileTagList: [],
		customRedirectTagList: [],
		// Stub
		watchStubbedPages: false,
		markStubbedPagesAsMinor: false,
		markStubbedPagesAsPatrolled: true,
		stubArticleSortOrder: 'cat',
		customStubList: [],
		// Talkback
		markTalkbackAsMinor: true,
		insertTalkbackSignature: true,
		// always sign talkback templates
		talkbackHeading: window.wgULS('回复通告', '回覆通告'),
		mailHeading: window.wgULS('您有新邮件！', '您有新郵件！'),
	};
	// now some skin dependent config.
	switch (mw.config.get('skin')) {
		case 'vector':
		case 'vector-2022':
			Twinkle.defaultConfig.portletArea = 'right-navigation';
			Twinkle.defaultConfig.portletId = 'p-twinkle';
			Twinkle.defaultConfig.portletName = 'TW';
			Twinkle.defaultConfig.portletType = 'menu';
			Twinkle.defaultConfig.portletNext = 'p-search';
			break;
		case 'gongbi':
			Twinkle.defaultConfig.portletArea =
				$body.find('#page-tools .sidebar-inner').length > 0
					? '#page-tools .sidebar-inner'
					: '#page-more .sidebar-inner';
			Twinkle.defaultConfig.portletId = 'p-twinkle';
			Twinkle.defaultConfig.portletName = 'Twinkle';
			Twinkle.defaultConfig.portletType = null;
			Twinkle.defaultConfig.portletNext =
				$body.find('#page-tools .sidebar-inner').length > 0 ? 'page-more' : null;
			break;
		case 'citizen':
			Twinkle.defaultConfig.portletArea = '#page-actions-more__card';
			Twinkle.defaultConfig.portletId = 'p-twinkle';
			Twinkle.defaultConfig.portletName = 'Twinkle';
			Twinkle.defaultConfig.portletType = 'nav';
			Twinkle.defaultConfig.portletNext = 'p-tb';
			break;
		default:
			Twinkle.defaultConfig.portletArea = null;
			Twinkle.defaultConfig.portletId = 'p-cactions';
			Twinkle.defaultConfig.portletName = null;
			Twinkle.defaultConfig.portletType = null;
			Twinkle.defaultConfig.portletNext = null;
	}
	Twinkle.getPref = (name) => {
		if (typeof Twinkle.prefs === 'object' && Twinkle.prefs[name] !== undefined) {
			return Twinkle.prefs[name];
		}
		// Old preferences format, used before twinkleoptions.js was a thing
		if (typeof window.TwinkleConfig === 'object' && window.TwinkleConfig[name] !== undefined) {
			return window.TwinkleConfig[name];
		}
		return Twinkle.defaultConfig[name];
	};
	/**
	 * **************** Twinkle.addPortlet() ****************
	 *
	 * Adds a portlet menu to one of the navigation areas on the page.
	 * This is necessarily quite a hack since skins, navigation areas, and
	 * portlet menu types all work slightly different.
	 *
	 * Available navigation areas depend on the skin used.
	 * Vector:
	 * - For each option, the outer nav class contains "vector-menu", the inner div class is "vector-menu-content", and the ul is "vector-menu-content-list"
	 * - "mw-panel", outer nav class contains "vector-menu-portal". Existing portlets/elements: "p-logo", "p-navigation", "p-interaction", "p-tb", "p-coll-print_export"
	 * - "left-navigation", outer nav class contains "vector-menu-tabs" or "vector-menu-dropdown". Existing portlets: "p-namespaces", "p-variants" (menu)
	 * - "right-navigation", outer nav class contains "vector-menu-tabs" or "vector-menu-dropdown". Existing portlets: "p-views", "p-cactions" (menu), "p-search"
	 * - Special layout of p-personal portlet (part of "head") through specialized styles.
	 *
	 * @param {string} navigation -- id of the target navigation area (skin dependant, on vector either of "left-navigation", "right-navigation", or "mw-panel")
	 * @param {string} id -- id of the portlet menu to create, preferably start with "p-".
	 * @param {string} text -- name of the portlet menu to create. Visibility depends on the class used.
	 * @param {string} type -- type of portlet. Currently only used for the vector non-sidebar portlets, pass "menu" to make this portlet a drop down menu.
	 * @param {Node} nextnodeid -- the id of the node before which the new item should be added, should be another item in the same list, or undefined to place it at the end.
	 *
	 * @return {Node} -- the DOM node of the new item (a DIV element) or null
	 */
	Twinkle.addPortlet = (navigation, id, text, type, nextnodeid) => {
		// sanity checks, and get required DOM nodes
		const root = document.querySelector(/^(?:#|\.)/.test(navigation) ? navigation : `#${navigation}`);
		if (!root) {
			return null;
		}
		const item = document.querySelector(`#${id}`);
		if (item) {
			if (item.parentNode && item.parentNode === root) {
				return item;
			}
			return null;
		}
		let nextnode;
		if (nextnodeid) {
			nextnode = document.querySelector(`#${nextnodeid}`);
		}
		// verify/normalize input
		const skin = mw.config.get('skin');
		if (
			(skin !== 'vector' && skin !== 'vector-2022') ||
			(navigation !== 'left-navigation' && navigation !== 'right-navigation')
		) {
			type = null; // menu supported only in vector's #left-navigation & #right-navigation
		}
		let outerNavClass;
		let innerDivClass;
		switch (skin) {
			case 'vector':
			case 'vector-2022':
				// XXX: portal doesn't work
				if (navigation !== 'portal' && navigation !== 'left-navigation' && navigation !== 'right-navigation') {
					navigation = 'mw-panel';
				}
				outerNavClass = 'mw-portlet vector-menu';
				if (navigation === 'mw-panel') {
					outerNavClass += ' vector-menu-portal';
				} else if (type === 'menu') {
					outerNavClass += ' vector-menu-dropdown vector-dropdown vector-menu-dropdown-noicon';
				} else {
					outerNavClass += ' vector-menu-tabs';
				}
				innerDivClass = 'vector-menu-content vector-dropdown-content';
				break;
			case 'gongbi':
				outerNavClass = 'mw-portlet';
				innerDivClass = 'mw-portlet-body';
				break;
			case 'citizen':
				outerNavClass = 'mw-portlet';
				innerDivClass = 'mw-portlet-twinkle';
				break;
			default:
				navigation = 'column-one';
				outerNavClass = 'portlet';
				break;
		}
		// Build the DOM elements.
		let outerNav;
		let heading;
		if (skin === 'vector-2022') {
			outerNav = document.createElement('div');
			heading = document.createElement('label');
		} else {
			outerNav = document.createElement('nav');
			heading = document.createElement('h3');
		}
		outerNav.setAttribute('aria-labelledby', `${id}-label`);
		// The following classes are used here (outerNavClass):
		// * mw-portlet vector-menu vector-menu-*
		// * mw-portlet
		// * column-one
		// Vector getting vector-menu-empty FIXME TODO
		outerNav.className = `${outerNavClass} emptyPortlet`;
		outerNav.id = id;
		if (nextnode && nextnode.parentNode === root) {
			root.insertBefore(outerNav, nextnode);
		} else {
			root.appendChild(outerNav);
		}
		heading.id = `${id}-label`;
		const ul = document.createElement('ul');
		if (skin === 'vector' || skin === 'vector-2022') {
			heading.setAttribute('for', `${id}-dropdown-checkbox`);
			ul.className = 'vector-menu-content-list';
			heading.className = 'vector-menu-heading vector-dropdown-label';
			// add invisible checkbox to keep menu open when clicked
			// similar to the p-cactions ("More") menu
			if (outerNavClass.includes('vector-menu-dropdown')) {
				const chkbox = document.createElement('input');
				chkbox.id = `${id}-dropdown-checkbox`;
				chkbox.className = 'vector-menu-checkbox vector-dropdown-checkbox';
				chkbox.setAttribute('type', 'checkbox');
				chkbox.setAttribute('aria-labelledby', `${id}-label`);
				outerNav.appendChild(chkbox);
				// Vector gets its title in a span; all others except
				// gongbi have no title, and it has no span
				const span = document.createElement('span');
				span.appendChild(document.createTextNode(text));
				heading.appendChild(span);
				const a = document.createElement('a');
				a.href = '#';
				$(a).on('click', (e) => {
					e.preventDefault();
				});
				heading.appendChild(a);
			}
		} else {
			// Basically just Gongbi
			heading.appendChild(document.createTextNode(text));
		}
		outerNav.appendChild(heading);
		if (innerDivClass) {
			const innerDiv = document.createElement('div');
			// The following classes are used here (innerDivClass):
			// * vector-menu-content
			// * mw-portlet-body
			// * mw-portlet-twinkle
			// * portlet
			innerDiv.className = innerDivClass;
			innerDiv.appendChild(ul);
			outerNav.appendChild(innerDiv);
		} else {
			outerNav.appendChild(ul);
		}
		return outerNav;
	};
	/**
	 * **************** Twinkle.addPortletLink() ****************
	 * Builds a portlet menu if it doesn't exist yet, and add the portlet link.
	 *
	 * @param {string|Function} task -- Either a URL for the portlet link or a function to execute.
	 * @param {string} text
	 * @param {string} id
	 * @param {string} tooltip
	 * @return {Object} link
	 */
	Twinkle.addPortletLink = (task, text, id, tooltip) => {
		if (Twinkle.getPref('portletArea') !== null) {
			Twinkle.addPortlet(
				Twinkle.getPref('portletArea'),
				Twinkle.getPref('portletId'),
				Twinkle.getPref('portletName'),
				Twinkle.getPref('portletType'),
				Twinkle.getPref('portletNext')
			);
		}
		const link = mw.util.addPortletLink(
			Twinkle.getPref('portletId'),
			typeof task === 'string' ? task : '#',
			text,
			id,
			tooltip
		);
		$body.find('.client-js .skin-vector #p-cactions').css('margin-right', 'initial');
		if (typeof task === 'function') {
			$(link)
				.find('a')
				.on('click', (ev) => {
					task();
					ev.preventDefault();
				});
		}
		if ($.collapsibleTabs) {
			$.collapsibleTabs.handleResize();
		}
		return link;
	};
	/**
	 * **************** General initialization code ****************
	 */
	const scripturl = mw.util.getUrl(`User:${mw.config.get('wgUserName')}/twinkleoptions.js`, {
		action: 'raw',
		ctype: 'text/javascript',
		happy: 'yes',
	});
	// Retrieve the user's Twinkle preferences (window.Twinkle.prefs)
	Twinkle.prefs ||= {};
	mw.loader
		.getScript(scripturl)
		.fail(() => {
			mw.notify(window.wgULS('未能加载您的Twinkle参数设置', '未能載入您的Twinkle偏好設定'), {
				type: 'error',
				tag: 'twinkle',
			});
		})
		.always(() => {
			$(Twinkle.load);
		});
	// Developers: you can import custom Twinkle modules here
	// For example, mw.loader.load(scriptpathbefore + "User:UncleDouggie/morebits-test.js" + scriptpathafter);
	Twinkle.load = () => {
		// Don't activate on special pages other than those listed here, so
		// that others load faster, especially the watchlist.
		let activeSpecialPageList = ['Block', 'Contributions', 'AbuseLog', 'Recentchanges', 'Recentchangeslinked']; // wgRelevantUserName defined for non-sysops on Special:Block
		if (Morebits.userIsSysop) {
			activeSpecialPageList = [
				...activeSpecialPageList,
				'DeletedContributions',
				'Prefixindex',
				'BrokenRedirects',
			];
		}
		if (
			mw.config.get('wgNamespaceNumber') === -1 &&
			!activeSpecialPageList.includes(mw.config.get('wgCanonicalSpecialPageName'))
		) {
			return;
		}
		// Prevent clickjacking
		if (window.top !== window.self) {
			return;
		}
		// Set custom Api-User-Agent header, for server-side logging purposes
		Twinkle.userAgent = 'Twinkle/1.1';
		Morebits.wiki.api.setApiUserAgent(Twinkle.userAgent);
		Twinkle.disabledModules = [...Twinkle.getPref('disabledModules'), ...Twinkle.getPref('disabledSysopModules')];
		// Redefine addInitCallback so that any modules being loaded now on are directly
		// initialised rather than added to initCallbacks array
		Twinkle.addInitCallback = (func, name) => {
			if (!name || !Twinkle.disabledModules.includes(name)) {
				func();
			}
		};
		// Initialise modules that were saved in initCallbacks array
		for (const module of Twinkle.initCallbacks) {
			Twinkle.addInitCallback(module.func, module.name);
		}
		// Increases text size in Twinkle dialogs, if so configured
		if (Twinkle.getPref('dialogLargeFont')) {
			mw.util.addCSS(
				'.morebits-dialog-content,.morebits-dialog-footerlinks{font-size:100%!important}.morebits-dialog input,.morebits-dialog select,.morebits-dialog-content button{font-size:inherit !important}'
			);
		}
		// Hide the lingering space if the TW menu is empty
		const isVector = ['vector', 'vector-2022'].includes(mw.config.get('skin'));
		if (isVector && Twinkle.getPref('portletType') === 'menu' && $body.find('#p-twinkle').length === 0) {
			$body.find('#p-cactions').css('margin-right', 'initial');
		}
	};
	/**
	 * Twinkle-specific utility functions shared by multiple modules
	 *
	 * @param {*} first
	 * @param {*} second
	 */
	// Used in batch, unlink, and deprod to sort pages by namespace, as
	// json formatversion=2 sorts by pageid instead (#1251)
	Twinkle.sortByNamespace = (first, second) => {
		return first.ns - second.ns || (first.title > second.title ? 1 : -1);
	};
	// Used in unlink listings to link the page title
	Twinkle.generateBatchPageLinks = (checkbox) => {
		const $checkbox = $(checkbox);
		const link = Morebits.htmlNode('a', $checkbox.val());
		link.setAttribute('class', 'tw-batchpage-link');
		link.setAttribute('href', mw.util.getUrl($checkbox.val()));
		link.setAttribute('target', '_blank');
		link.setAttribute('rel', 'noopener noreferrer');
		$checkbox.next().prepend([link, ' ']);
	};
})(jQuery);
