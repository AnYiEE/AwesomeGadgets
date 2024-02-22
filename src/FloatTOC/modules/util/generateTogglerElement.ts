import {getMessage} from '../i18n';

const generateTogglerElement = (isCollapse: boolean): JQuery => {
	let $toggler: JQuery = $('<span>').addClass('oo-ui-indicatorElement-indicator oo-ui-icon-downTriangle');
	$toggler = isCollapse
		? $toggler.attr('title', getMessage('Expand'))
		: $toggler.attr('title', getMessage('Collapse')).addClass('collapse');

	return $toggler;
};

export {generateTogglerElement};
