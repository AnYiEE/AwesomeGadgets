import {patrolAllPages, patrolSinglePage} from './modules/patrolPages';
import {getBody} from 'ext.gadget.Util';

void getBody().then(function quickPatrol($body: JQuery<HTMLBodyElement>): void {
	if (mw.config.get('wgCanonicalSpecialPageName') !== 'Newpages') {
		return;
	}

	/* Patrol single page */
	for (const [index, element] of Object.entries($body.find('.not-patrolled'))) {
		const $element: JQuery = $(element);

		const $time: JQuery = $element.find('a');
		if (!$time.length) {
			continue;
		}

		const timeHref: string | undefined = $time.attr('href');
		if (!timeHref) {
			continue;
		}

		const revIds: RegExpMatchArray | null = timeHref?.match(/oldid=([0-9]+)/);
		if (!revIds || !revIds[1]) {
			continue;
		}

		element.append(patrolSinglePage(index, revIds[1]));
	}

	/* Patrol all pages */
	$body.find('#mw-content-text ul').append(patrolAllPages($body));
});
