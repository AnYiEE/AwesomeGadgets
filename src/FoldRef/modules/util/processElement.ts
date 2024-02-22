import {CLASS_NAME, CLASS_NAME_EXPAND_BUTTON} from '../constant';
import {getMessage} from '../i18n';

// create a div, place {{Reflist}}s inside
const processElement = ($element: JQuery): void => {
	// The following classes are used here:
	// * see constant.ts
	// * for more information
	const $refFolder: JQuery = $('<div>').addClass(CLASS_NAME);

	$refFolder.insertBefore($element);
	$element.appendTo($refFolder);

	// add an expand button at the bottom
	// The following classes are used here:
	// * see constant.ts
	// * for more information
	const $expandButton: JQuery = $('<div>').addClass(CLASS_NAME_EXPAND_BUTTON).text(getMessage('Expand'));
	$refFolder.after($expandButton);
};

export {processElement};
