import {
	URL_DIFF,
	URL_HIGHLIGHT,
	URL_HILIGHT,
	//URL_NO_PERM,
	URL_USE,
	URL_WITH_CSS,
	URL_WITH_JS,
	URL_WITH_MODULE,
	WG_ACTION,
	//WG_CANONICAL_SPECIAL_PAGE_NAME,
	WG_NAMESPACE_NUMBER,
	WG_PAGE_NAME,
	WG_SCRIPT,
	WG_USER_NAME,
} from './constant';
import React from 'ext.gadget.React';
import {getMessage} from './i18n';

const loadWithURL = (): void => {
	/**
	 * &withCSS= and &withJS= URL parameters
	 * Allow to try custom scripts from MediaWiki space
	 * without editing personal .css or .js files
	 */
	if (URL_WITH_CSS || URL_WITH_JS || URL_WITH_MODULE) {
		if (URL_WITH_CSS && /^MediaWiki:[^#%&<=>]*\.css$/.test(URL_WITH_CSS)) {
			mw.loader.load(
				mw.util.getUrl(URL_WITH_CSS, {
					action: 'raw',
					ctype: 'text/css',
					maxage: '3600',
					smaxage: '3600',
				}),
				'text/css'
			);
		}
		if (URL_WITH_JS && /^MediaWiki:[^#%&<=>]*\.js$/.test(URL_WITH_JS)) {
			// @ts-expect-error TS6133
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			void mw.loader.using('').then((require): void => {
				mw.loader.load(
					mw.util.getUrl(URL_WITH_JS, {
						action: 'raw',
						ctype: 'text/javascript',
						maxage: '3600',
						smaxage: '3600',
					})
				);
			});
		}
		if (URL_WITH_MODULE && /^ext\.[^,|]+$/.test(URL_WITH_MODULE)) {
			// @ts-expect-error TS6133
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			void mw.loader.using(URL_WITH_MODULE).then((require): void => {
				mw.loader.load(URL_WITH_MODULE as string);
			});
		}
	}
	/**
	 * Load CSS and JS files temporarily through URL.
	 * &use=File1.css|File2.css|File3.js
	 */
	if (URL_USE) {
		const wgUserName: string = mw.util.escapeRegExp(WG_USER_NAME ?? '');
		const REGEX_FILE: RegExp = new RegExp(
			`^(?:MediaWiki:${wgUserName ? `|User:${wgUserName}/` : ''})[^&<>=%#]*\\.(js|css)$`
		);
		const REGEX_EXT: RegExp = /^ext\.[^,]+$/;
		const path: string = `${WG_SCRIPT}?action=raw&ctype=text/`;
		for (const useFile of URL_USE.split('|')) {
			const name: string = useFile.toString().trim();
			const what: string[] = REGEX_FILE.exec(name) ?? ['', ''];
			switch (what[1]) {
				case 'js':
					// @ts-expect-error TS6133
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					void mw.loader.using('').then((require): void => {
						mw.loader.load(`${path}javascript&title=${encodeURIComponent(name)}`);
					});
					break;
				case 'css':
					mw.loader.load(`${path}css&title=${encodeURIComponent(name)}`);
					break;
				default:
					if (REGEX_EXT.test(name)) {
						// @ts-expect-error TS6133
						// eslint-disable-next-line @typescript-eslint/no-unused-vars
						void mw.loader.using(name).then((require): void => {
							mw.loader.load(name);
						});
					}
			}
		}
	}
};

/*
const noPermWarning = (): void => {
	// Load warning(s) when user has no access to page
	if (!URL_NO_PERM) {
		return;
	}
	switch (URL_NO_PERM) {
		case '0':
			void mw.notify(
				window.wgULS(
					'因技术原因，您没有权限访问相关页面。若有疑问，请与求闻百科运营者联系。',
					'因技術原因，您沒有權限訪問相關頁面。若有疑問，請與求聞百科運營者聯系。'
				),
				{tag: 'noPerm', type: 'error'}
			);
			break;
		case '1':
			void mw.notify(
				window.wgULS(
					'您没有权限访问相关页面。若您是资深编者，请与求闻百科技术团队联系，以获取权限。',
					'您沒有權限訪問相關頁面。若您是資深編者，請與求聞百科技術團隊聯系，以獲取權限。'
				),
				{tag: 'noPerm', type: 'error'}
			);
			break;
		case '2':
			void mw.notify(
				window.wgULS(
					'您的网络环境存在风险，请登录后继续使用。若您没有求闻百科账号，请注册后登录。',
					'您的網路環境存在風險，請登入後繼續使用。若您沒有求聞百科賬號，請注冊後登錄。'
				),
				{tag: 'noPerm', type: 'warn'}
			);
			break;
		case '3':
			void mw.notify(
				window.wgULS(
					'相关功能仅向注册用户开放，请登录后继续使用。若您没有求闻百科账号，请注册后登录。',
					'相關功能僅向注冊用戶開放，請登入後繼續使用。若您沒有求聞百科賬號，請注冊後登錄。'
				),
				{tag: 'noPerm', type: 'warn'}
			);
			break;
		default:
			void mw.notify(
				window.wgULS(
					'您没有权限访问相关页面。若有疑问，请与求闻百科运营者联系。',
					'您沒有權限訪問相關頁面。若有疑問，請與求聞百科運營者聯系。'
				),
				{tag: 'noPerm', type: 'error'}
			);
	}
	const newUrl: string = location.href.replace(/[?&]noperm=[0-9]+/, '');
	history.pushState({}, document.title, newUrl);
};
*/

const highLightRev = ($body: JQuery<HTMLBodyElement>): void => {
	/**
	 * Add highlight to revisions when using `&hilight=revid` or `&highlight=revid`
	 */
	const highlight: string | null = URL_HIGHLIGHT ?? URL_HILIGHT;
	if (!highlight || WG_ACTION !== 'history') {
		return;
	}
	for (const version of highlight.split(',')) {
		$body.find(`input[name=oldid][value=${version}]`).parent().addClass('not-patrolled');
	}
};

const addTargetBlank = ($body: JQuery<HTMLBodyElement>): void => {
	/**
	 * Add target="blank" to external links
	 */
	$body.find<HTMLAnchorElement>('a.external, a[rel="mw:ExtLink"]').filter((_index, element): boolean => {
		const linkHref: string | undefined = $(element).attr('href');
		if (linkHref) {
			const hrefSplit: string[] = linkHref.split('/');
			if (hrefSplit.length < 3 || hrefSplit[2] === location.host) {
				return false;
			}
		}
		if (element.href.includes(`${location.protocol}//${location.hostname}`)) {
			element.target = '_blank';
			if (!element.rel.includes('noopener')) {
				element.rel += ' noopener';
			}
			if (!element.rel.includes('noreferrer')) {
				element.rel += ' noreferrer';
			}
		}
		return true;
	});
};

const removeTitleFromPermalink = ($body: JQuery<HTMLBodyElement>): void => {
	/**
	 * Remove title=* from permalink
	 */
	const $permaLink: JQuery = $body.find('#t-permalink');
	if ($permaLink.length) {
		const $permaLinkFirstChild: JQuery<HTMLAnchorElement> = $permaLink.find<HTMLAnchorElement>(':first-child');
		const href: string | undefined = $permaLinkFirstChild.attr('href')?.replace(/title=[^&]*&/, '');
		if (!href) {
			return;
		}
		$permaLinkFirstChild.attr('href', href);
	}
};

const openSearchInNewTab = ($body: JQuery<HTMLBodyElement>): void => {
	/**
	 * Open search results in a new tab or window
	 * when holding down the Ctrl key (by Timeshifter)
	 */
	$body
		.find('#search,#searchbox,#searchform,.search-types,#search-types')
		.on('keydown keyup mousedown', (event: JQuery.TriggeredEvent<HTMLElement>): void => {
			const {ctrlKey, metaKey, target} = event;
			$(target).attr('target', ctrlKey ?? metaKey ? '_blank' : '');
		});
};

const titleCleanUp = ($body: JQuery<HTMLBodyElement>): void => {
	/**
	 * Cleanup title for all pages
	 */
	if (URL_DIFF || WG_ACTION !== 'view' || ![6, 118].includes(WG_NAMESPACE_NUMBER)) {
		return;
	}
	const fullPageName: string = new mw.Title(WG_PAGE_NAME).getPrefixedText();
	const $firstHeading: JQuery = $body.find('.firstHeading');
	const documentTitle: string = document.title;
	const pageTitle: string = $firstHeading.text();
	const replaceTitle = (title: string): string => title.replace(pageTitle, fullPageName);
	document.title = replaceTitle(documentTitle);
	$firstHeading.text(replaceTitle(pageTitle));
};

const unihanPopup = ($body: JQuery<HTMLBodyElement>): void => {
	/**
	 * Display title=(.*) of <span class="inline-unihan"> after them.
	 * (beta test)
	 */
	// Do not display on Special Pages
	if (WG_NAMESPACE_NUMBER < 0) {
		return;
	}
	$body.find('attr, .inline-unihan').each((_index: number, element: HTMLElement): void => {
		const $element: JQuery = $(element);
		const title: string | undefined = $element.attr('title');
		if (!title) {
			return;
		}
		void mw.loader.using('oojs-ui-core').then((): void => {
			const popup: OO.ui.PopupWidget = new OO.ui.PopupWidget({
				$content: $(<p>{title}</p>) as JQuery,
				label: getMessage('Note'),
				anchor: true,
				head: true,
				padded: true,
			});
			$element.append(popup.$element).on('click', (): void => {
				popup.toggle();
			});
		});
	});
};

const fixLocationHash = (): void => {
	/* 修正折叠后定位变化 */
	if (location.hash) {
		location.href = location.hash;
	}
};

const toggleLink = ($body: JQuery<HTMLBodyElement>): void => {
	/* 调整折叠按钮的颜色 */
	const $toggler: JQuery = $body.find('.mw-collapsible-toggle, .gadget-collapsible-toggler');
	if ($toggler.length && $toggler.parent()[0]?.style.color) {
		$toggler.find('a').css('color', 'inherit');
	}
};

export {
	loadWithURL,
	highLightRev,
	addTargetBlank,
	removeTitleFromPermalink,
	openSearchInNewTab,
	titleCleanUp,
	unihanPopup,
	fixLocationHash,
	toggleLink,
};
