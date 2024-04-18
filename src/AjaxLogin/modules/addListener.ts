import {filterAlteredClicks} from 'ext.gadget.FilterAlteredClicks';

const addListener = (
	$element: JQuery,
	eventListener: (event: JQuery.ClickEvent | JQuery.KeyDownEvent) => void
): void => {
	$element.on('click', filterAlteredClicks(eventListener));
	$element.on('keydown', eventListener);
};

export {addListener};
