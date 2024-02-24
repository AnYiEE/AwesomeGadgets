import {adjustTime} from './util/adjustTime';
import {api} from './api';

const checkLastActive = async ($element: JQuery): Promise<void> => {
	const userName: string = $element.find('.mw-userlink>bdi').text();

	const logEventsParams: ApiQueryLogEventsParams = {
		action: 'query',
		formatversion: '2',
		list: 'logevents',
		lelimit: 1,
		leprop: 'timestamp',
		leuser: userName,
	};
	const userContribsParams: ApiQueryUserContribsParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: 'usercontribs',
		ucdir: 'older',
		uclimit: 1,
		ucprop: 'timestamp',
		ucuser: userName,
	};

	let maxDate: Date | undefined;

	try {
		const userContribs = await api.get(userContribsParams);
		if (userContribs['query'].usercontribs[0]) {
			maxDate = new Date(userContribs['query'].usercontribs[0].timestamp as number);
		}

		const logEvents = await api.get(logEventsParams);
		if (logEvents['query'].logevents[0]) {
			const date: Date = new Date(logEvents['query'].logevents[0].timestamp as number);
			if (!maxDate || date > maxDate) {
				maxDate = date;
			}
		}

		const lastActiveMessage: string = maxDate
			? `（${window.wgULS('最后操作于', '最後動作於')}${adjustTime(maxDate)}）`
			: `（${window.wgULS('从未有操作', '從未有動作')}）`;
		$element.append(lastActiveMessage);
	} catch (error: unknown) {
		console.error('[ListUsersLastActive] Ajax error:', error);
	}
};

export {checkLastActive};
