import {CLASS_NAME, CLASS_NAME_EXPAND_BUTTON} from './constant';
import {processElement} from './util/processElement';

const foldRef = ($body: JQuery<HTMLBodyElement>): void => {
	// for articles using <references />, {{Reflist}}s or similar templates
	const $foldRef: JQuery = $body.find('.mw-references-wrap,.refbegin');
	for (const element of $foldRef) {
		const $element = $(element);
		if ($element.parent('div').parent('div').hasClass(CLASS_NAME) || $element.parent('div').hasClass(CLASS_NAME)) {
			continue;
		}

		const height: number | undefined = $element.height();
		if (!height || height <= window.innerHeight * 0.9) {
			continue;
		}

		// if greater than 90% of the viewport height, fold the references list
		processElement($element);
	}

	// attach event listener to the expand buttons
	$body.find(`.${CLASS_NAME_EXPAND_BUTTON}`).on('click', (event: JQuery.ClickEvent<HTMLElement>): void => {
		const $element = $(event.currentTarget) as JQuery;

		// The following classes are used here:
		// * see constant.ts
		// * for more information
		$element.prev(`.${CLASS_NAME}`).removeClass(CLASS_NAME);
		$element.remove();
	});
};

export {foldRef};
