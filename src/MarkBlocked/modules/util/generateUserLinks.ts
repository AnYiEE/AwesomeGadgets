import * as OPTIONS from '../../options.json';
import {CLASS_NAME_USERLINK, WG_ARTICLE_PATH, WG_SCRIPT} from '../constant';
import {generateUserNamespaceTitles} from './generateUserNamespaceTitles';

// Get all aliases for user: & user_talk:
const userNamespaceTitles: string[] = generateUserNamespaceTitles();
// RegExp for all titles that are  User:| User_talk: | Special:Contributions/ (for userscripts)
const userTitleRegex: RegExp = new RegExp(
	`^(${userNamespaceTitles.join('|')}|${OPTIONS.contributionsPageAlias}\\/)+([^\\/#]+)$`,
	'i'
);

// RegExp for links
// articleRegex also matches external links in order to support the noping template
const articleRegex: RegExp = new RegExp(`${WG_ARTICLE_PATH.replace('$1', '')}([^#]+)`);
const scriptRegex: RegExp = new RegExp(`^${WG_SCRIPT}\\?title=([^#&]+)`);

const generateUserLinks = ($content: JQuery): Record<string, JQuery[]> => {
	// Find all "user" links and save them in userLinks : { 'users': [<link1>, <link2>, ...], 'user2': [<link3>, <link3>, ...], ... }
	const userLinks: Record<string, JQuery[]> = {};

	for (const element of $content.find('a')) {
		const $element: JQuery<HTMLAnchorElement> = $(element);
		if (
			$element.hasClass('mw-changeslist-date') ||
			$element.parent('span').hasClass('mw-history-undo') ||
			$element.parent('span').hasClass('mw-rollback-link')
		) {
			continue;
		}

		const href: string | undefined = $element.attr('href');
		if (!href) {
			continue;
		}
		if (mw.util.isIPv6Address(href.replace(/^(?:https?:\/\/)/i, ''))) {
			continue;
		}
		try {
			if (new mw.Uri(href).host !== location.host) {
				continue;
			}
		} catch {
			try {
				if (new mw.Uri(location.href + href).host !== location.host) {
					continue;
				}
			} catch {
				continue;
			}
		}

		let pageTitle: string | undefined;
		if (articleRegex.test(href)) {
			const match: RegExpExecArray = articleRegex.exec(href) as RegExpExecArray;
			pageTitle = match[1] as string;
		} else if (scriptRegex.test(href)) {
			const match: RegExpExecArray = scriptRegex.exec(href) as RegExpExecArray;
			pageTitle = match[1] as string;
		} else {
			continue;
		}

		pageTitle = decodeURIComponent(pageTitle).replace(/_/g, ' ');

		const userExecArray: RegExpExecArray | null = userTitleRegex.exec(pageTitle);
		if (!userExecArray || typeof userExecArray[2] !== 'string') {
			continue;
		}

		let user: string = userExecArray[2].slice(0, 1).toUpperCase() + userExecArray[2].slice(1);
		if (mw.util.isIPv6Address(user)) {
			user = user.toUpperCase();
		}

		// The following classes are used here:
		// * see constant.ts
		// * for more information
		$element.addClass(CLASS_NAME_USERLINK);

		userLinks[user] ??= [];

		(userLinks[user] as (typeof userLinks)[keyof typeof userLinks])[
			(userLinks[user] as (typeof userLinks)[keyof typeof userLinks]).length
		] = $element; // Replace `[].push()` to avoid polyfilling core-js
	}

	return userLinks;
};

export {generateUserLinks};
