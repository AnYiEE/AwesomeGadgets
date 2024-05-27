import * as OPTIONS from '../options.json';
import {elementWrap, errorMessage, loading, notBeenPatrolledYet, patrolled, patrolledBy} from './elementWrap';
import {initMwApi} from 'ext.gadget.Util';
import {replaceChild} from './replaceChild';

const pagePatroller = async (): Promise<void> => {
	const element = elementWrap();
	document.querySelectorAll(OPTIONS.mountPointSelector)[0]?.prepend(element);

	// if there is a patrol link, the page must be not patrolled
	if (document.querySelectorAll('.patrollink').length) {
		element.append(notBeenPatrolledYet());
		return;
	}

	// Load patroller info
	// add `Loading...`
	element.append(loading());

	try {
		const api = initMwApi('PagePatroller/2.0');
		const params: ApiQueryRevisionsParams & ApiQueryLogEventsParams = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			prop: ['revisions'],
			titles: mw.config.get('wgPageName'),
			list: 'logevents',
			letype: 'patrol',
			letitle: mw.config.get('wgPageName'),
			rvprop: 'timestamp',
			rvlimit: 1,
			rvdir: 'newer',
		};
		const {query} = await api.get(params);

		if (query?.logevents && query.logevents.length) {
			const [log]: [
				{
					user: string;
					timestamp: string;
					action: string;
				},
			] = query.logevents as [
				{
					user: string;
					timestamp: string;
					action: string;
				},
			];
			const {action, user} = log;
			const {timestamp} = log;
			const date: Date = new Date(timestamp);

			if (action === 'patrol') {
				replaceChild(element, patrolledBy(date.toLocaleString(), user));
			} else {
				replaceChild(element, patrolled());
			}
		} else {
			replaceChild(element, patrolled());
		}
	} catch (error: unknown) {
		// return error(s)
		console.error('[PagePatroller]:', error);
		replaceChild(element, errorMessage());
	}
};

export {pagePatroller};
