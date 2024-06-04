import {hideElement} from './hideElement';
import {showElement} from './showElement';

const toggleElement = ($collapsible: JQuery): void => {
	const collapsed: boolean = $collapsible.hasClass('collapsed');
	const duration: number = Number.parseInt($collapsible.data('collapse-duration') as string, 10) || 200;

	if (collapsed) {
		showElement($collapsible, duration);
		$collapsible.removeClass('collapsed');
	} else {
		hideElement($collapsible, duration);
		$collapsible.addClass('collapsed');
	}
};

export {toggleElement};
