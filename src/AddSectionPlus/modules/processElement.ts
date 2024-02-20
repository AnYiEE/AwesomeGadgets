import {WG_SKIN} from './constant';

const processElement = ($element: JQuery): void => {
	const title: string = $element.attr('aria-label') || $element.attr('title') || $element.text().trim();
	switch (WG_SKIN) {
		case 'gongbi':
			$element
				.attr({
					title,
				})
				.html('&#8203');
			break;
		default:
			$element
				.attr({
					title,
				})
				.text('[+]');
	}
};

export {processElement};
