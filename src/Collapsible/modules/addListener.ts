import {checkA11yConfirmKey} from 'ext.gadget.Util';
import {toggleElement} from './util/toggleElement';

const addListener = ($collapsible: JQuery, $togglerLink: JQuery, hideText: string, showText: string): void => {
	const eventListener = (event: JQuery.ClickEvent | JQuery.KeyDownEvent): void => {
		if (!checkA11yConfirmKey(event)) {
			return;
		}

		event.preventDefault();

		toggleElement($collapsible);

		if ($collapsible.hasClass('collapsed')) {
			$togglerLink.text(showText);
		} else {
			$togglerLink.text(hideText);
		}
	};

	$togglerLink.on('click', eventListener);
	$togglerLink.on('keydown', eventListener);
};

export {addListener};
