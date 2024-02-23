import * as OPTIONS from '../options.json';
import {api} from './api';
import {getLastActiveMarker} from './getLastActiveMarker';

const whoIsActive = ($body: JQuery<HTMLBodyElement>): void => {
	const filteredLinks: {
		username: string;
		$element: JQuery<HTMLAnchorElement>;
	}[] = [];

	const {wgAction, wgFormattedNamespaces, wgNamespaceNumber, wgPageName, wgRelevantUserName} = mw.config.get();

	const {2: localizedUserNamespace} = wgFormattedNamespaces;
	for (const element of mw.util.$content.find<HTMLAnchorElement>(
		`a[title^="User:"]:not(.mw-changeslist-date):not([href*="undo"]), a[title^="${localizedUserNamespace}:"]:not(.mw-changeslist-date):not([href*="undo"])`
	)) {
		const $element: JQuery<HTMLAnchorElement> = $(element);

		const userRegex: RegExp = new RegExp(`((User)|(${localizedUserNamespace})):(.*?)(?=&|$)`);
		const usernameMatchArray: RegExpMatchArray | null = decodeURI($element.attr('href') ?? '').match(userRegex);
		if (!usernameMatchArray) {
			continue;
		}

		const [username] = usernameMatchArray;
		const index: number = username.indexOf('/');
		if (index === -1) {
			filteredLinks[filteredLinks.length] = {
				username,
				$element,
			};
		}
	}

	if (!filteredLinks.length) {
		return;
	}

	const baseParams: ApiQueryUserContribsParams = {
		action: 'query',
		list: 'usercontribs',
		uclimit: 1,
	};
	type Usercontribs = {
		usercontribs: Array<{
			timestamp: string;
		}>;
	};

	for (const {username, $element} of filteredLinks) {
		const params: ApiQueryUserContribsParams = {
			...baseParams,
			ucuser: username,
		};

		void api.get(params).then((result): void => {
			const {usercontribs} = result['query'] as Usercontribs;
			if (!usercontribs.length) {
				return;
			}

			const {timestamp} = usercontribs[0]!;
			$(getLastActiveMarker(timestamp, true)).insertAfter($element);
		});
	}

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

		void api.get(params).then((result): void => {
			const {usercontribs} = result['query'] as Usercontribs;
			if (!usercontribs.length) {
				return;
			}

			const {timestamp} = usercontribs[0]!;
			for (const element of $body.find(OPTIONS.mountPointSelector)) {
				element.prepend(getLastActiveMarker(timestamp, false));
			}
		});
	}
};

export {whoIsActive};
