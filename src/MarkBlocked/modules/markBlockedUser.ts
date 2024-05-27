import {
	CLASS_NAME_LOADING,
	CLASS_NAME_USERLINK_INDEF,
	CLASS_NAME_USERLINK_PARTIAL,
	CLASS_NAME_USERLINK_TEMP,
} from './constant';
import {inHours, parseTS} from './util/parseTime';
import {api} from './api';
import {generateUserLinks} from './util/generateUserLinks';
import {getMessage} from './i18n';

const markBlockedUser = ($content: JQuery): void => {
	// Find all "user" links and save them in userLinks : { 'users': [<link1>, <link2>, ...], 'user2': [<link3>, <link3>, ...], ... }
	const userLinks: Record<string, JQuery[]> = generateUserLinks($content);

	// Convert users into array
	const users: string[] = Object.keys(userLinks);
	if (!users.length) {
		return;
	}

	// The following classes are used here:
	// * see constant.ts
	// * for more information
	$content.addClass(CLASS_NAME_LOADING);

	// API request
	type Response = {
		query: {
			blocks?: Array<{
				by: string;
				expiry: string;
				reason: string;
				restrictions: string | string[];
				timestamp: string;
				user: string;
			}>;
		};
	};
	let apiRequestCount: number = 0;

	// Callback: receive data and mark links
	const markLinks = (response: Response): void => {
		if (!response['query']?.blocks) {
			return;
		}

		for (const block of response['query'].blocks) {
			const isPartialBlcok: boolean = typeof block.restrictions === 'string' && block.restrictions !== ''; // Partial block

			let className: string = CLASS_NAME_USERLINK_PARTIAL;
			let blockTime: string = '';
			if (block.expiry.startsWith('in')) {
				if (!isPartialBlcok) {
					className = CLASS_NAME_USERLINK_INDEF;
				}
				blockTime = getMessage('infinity');
			} else {
				if (!isPartialBlcok) {
					className = CLASS_NAME_USERLINK_TEMP;
				}
				blockTime = inHours(parseTS(block.expiry) - parseTS(block.timestamp));
			}

			let tip: string = getMessage('Blocked')
				.replace('$1', blockTime)
				.replace('$2', block.by)
				.replace('$3', block.reason)
				.replace('$4', inHours(Date.now() - parseTS(block.timestamp)));
			tip = isPartialBlcok ? tip.replace('$5', getMessage('partial')) : tip.replace('$5', '');

			const $links: JQuery[] | undefined = userLinks[block.user];
			if (!$links) {
				continue;
			}

			for (const $link of $links) {
				// The following classes are used here:
				// * see constant.ts for more information
				// * gadget-mark_blocked-userlink--indef
				// * gadget-mark_blocked-userlink--temp
				// * gadget-mark_blocked-userlink--partial
				$link.addClass(className).attr('title', $link.attr('title') + tip);
			}
		}

		if (--apiRequestCount === 0) {
			// The following classes are used here:
			// * see constant.ts
			// * for more information
			$content.removeClass(CLASS_NAME_LOADING);
		}
	};

	while (users.length > 0) {
		apiRequestCount++;
		const params: ApiQueryBlocksParams = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			list: 'blocks',
			bklimit: 100,
			bkprop: ['by', 'expiry', 'reason', 'restrictions', 'timestamp', 'user'],
			bkusers: users.splice(0, 50).join('|'),
		};
		api.post(params)
			.then((response): void => {
				markLinks(response as Response);
			})
			.catch((error: never): void => {
				console.error('[MarkBlocked] Ajax error:', error);
			});
	}
};

export {markBlockedUser};
