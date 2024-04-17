import * as OPTIONS from '../options.json';
import {SYSTEM_SCRIPT_LIST} from './constant';
import {api} from './api';
import {getLastActiveMarker} from './getLastActiveMarker';

const baseParams: ApiQueryUserContribsParams = {
	action: 'query',
	format: 'json',
	list: 'usercontribs',
	uclimit: 1,
};
type Usercontribs = {
	usercontribs: Array<{
		timestamp: string;
	}>;
};

const whoIsActive = async ($content: JQuery<HTMLElement>): Promise<void> => {
	const usernames: string[] = [];
	const $elements: JQuery<HTMLAnchorElement>[] = [];

	const {wgFormattedNamespaces} = mw.config.get();

	const {2: localizedUserNamespace} = wgFormattedNamespaces;
	for (const element of $content.find<HTMLAnchorElement>(
		[
			'a[title^="User:"]:not(.mw-changeslist-date):not([href*="undo"])',
			`a[title^="${localizedUserNamespace}:"]:not(.mw-changeslist-date):not([href*="undo"])`,
		].join(',')
	)) {
		const $element: JQuery<HTMLAnchorElement> = $(element);

		const userRegex: RegExp = new RegExp(`((User)|(${localizedUserNamespace})):(.*?)(?=&|$)`);
		const usernameMatchArray: RegExpMatchArray | null = decodeURI($element.attr('href') ?? '').match(userRegex);
		if (!usernameMatchArray) {
			continue;
		}

		let [username] = usernameMatchArray;
		username = username.replace(new RegExp(`^((User)|(${localizedUserNamespace})):`, 'i'), '');
		const index: number = username.indexOf('/');
		if (index === -1) {
			$element.data('username', username);
			usernames[usernames.length] = username;
			$elements[$elements.length] = $element;
		}
	}

	if (!usernames.length || !$elements.length) {
		return;
	}

	for (const username of new Set(usernames)) {
		if (SYSTEM_SCRIPT_LIST.includes(username)) {
			continue;
		}

		const params: ApiQueryUserContribsParams = {
			...baseParams,
			ucuser: username,
		};

		const result = await api.get(params);

		const {usercontribs} = result['query'] as Usercontribs;
		if (!usercontribs.length) {
			return;
		}

		const {timestamp} = usercontribs[0]!;

		for (const $element of $elements) {
			if ($element.data('username') === username) {
				$(getLastActiveMarker(timestamp, true)).insertAfter($element);
			}
		}
	}
};

const whoIsActiveUserPage = async (): Promise<void> => {
	const {wgAction, wgNamespaceNumber, wgPageName, wgRelevantUserName} = mw.config.get();

	if (wgRelevantUserName && wgNamespaceNumber === 2 && wgAction === 'view') {
		const relevantUserPageName: string = new mw.Title(wgRelevantUserName, 2).toText();
		const pageName: string = new mw.Title(wgPageName).toText();
		if (relevantUserPageName !== pageName) {
			return;
		}

		const params: ApiQueryUserContribsParams = {
			...baseParams,
			ucuser: wgRelevantUserName,
		};

		const result = await api.get(params);

		const {usercontribs} = result['query'] as Usercontribs;
		if (!usercontribs.length) {
			return;
		}

		const {timestamp} = usercontribs[0]!;
		for (const element of document.querySelectorAll<HTMLElement>(OPTIONS.mountPointSelector)) {
			element.prepend(getLastActiveMarker(timestamp, false));
		}
	}
};

export {whoIsActive, whoIsActiveUserPage};
