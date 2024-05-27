import {generateTargetElements} from './util/generateTargetElements';
import {makeCollapsible} from './makeCollapsible';

const addHook = (): void => {
	mw.hook('wikipage.content').add(($content): void => {
		const $collapsibles: JQuery = generateTargetElements($content);
		if (!$collapsibles.length) {
			return;
		}

		makeCollapsible($collapsibles);
	});
};

export {addHook};
