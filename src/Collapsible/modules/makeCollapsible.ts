import {addListener} from './addListener';
import {addToggler} from './addToggler';
import {generateTogglerElement} from './util/generateTogglerElement';
import {getMessage} from './i18n';
import {hideElement} from './util/hideElement';

const makeCollapsible = ($collapsibles: JQuery): void => {
	for (const element of $collapsibles) {
		const $collapsible: JQuery = $(element);
		if ($collapsible.data('made-collapsible')) {
			continue;
		}

		const hideText: string = ($collapsible.data('collapsetext') as string) || getMessage('Collapse');
		const showText: string = ($collapsible.data('expandtext') as string) || getMessage('Expand');

		const $toggler: JQuery = generateTogglerElement($collapsible, hideText, showText);
		const $togglerLink: JQuery = $toggler.find('a');

		addToggler($collapsible, $toggler);

		// 初始化隐藏所有元素，该过程没有动画。
		if ($collapsible.hasClass('collapsed')) {
			hideElement($collapsible, 0);
		}

		addListener($collapsible, $togglerLink, hideText, showText);

		$collapsible.data('made-collapsible', true);
	}
};

export {makeCollapsible};
