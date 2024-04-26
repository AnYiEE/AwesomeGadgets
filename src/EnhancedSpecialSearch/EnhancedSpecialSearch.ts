import {getBody} from 'ext.gadget.Util';
import {processElement} from './modules/processElement';

void getBody().then(function enhancedSpecialSearch($body: JQuery<HTMLBodyElement>): void {
	const {wgCanonicalSpecialPageName} = mw.config.get();
	if (wgCanonicalSpecialPageName !== 'Search') {
		return;
	}

	const searchElement: HTMLElement | undefined = $body.find('#search').get(0) ?? $body.find('#powersearch').get(0);
	const targetElement: HTMLElement | undefined = $body.find('#mw-search-top-table').get(0);
	if (!searchElement || !targetElement) {
		return;
	}

	processElement(searchElement, targetElement);
});
