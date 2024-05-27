import {CLASS_NAME, CLASS_NAME_COPY_BUTTON} from './constant';
import {addCopyListener} from './addCopyListener';
import {getMessage} from './i18n';
import {tippy} from 'ext.gadget.Tippy';

const addButton = ($pres: JQuery<HTMLPreElement>): void => {
	// The following classes are used here:
	// * see constant.ts
	// * for more information
	const copyButton: OO.ui.ButtonWidget = new OO.ui.ButtonWidget({
		classes: [CLASS_NAME_COPY_BUTTON],
		framed: false,
		icon: 'copy',
	});
	const $copyButton: JQuery = copyButton.$element;

	$copyButton.attr('aria-label', getMessage('Copy'));

	// The following classes are used here:
	// * see constant.ts
	// * for more information
	$pres.addClass(CLASS_NAME).append($copyButton);

	tippy($copyButton.get(0) as HTMLSpanElement, {
		arrow: true,
		content: $copyButton.attr('aria-label') as string,
		placement: 'bottom',
	});

	addCopyListener($pres);
};

export {addButton};
