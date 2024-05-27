import {SEARCH_INPUT_ELEMENT_SELECTOR} from './constant';

const getSearchInput = ($body: JQuery<HTMLBodyElement>): JQuery<HTMLInputElement> => {
	const $searchInput: JQuery<HTMLInputElement> = $body.find<HTMLInputElement>(SEARCH_INPUT_ELEMENT_SELECTOR);

	return $searchInput;
};

export {getSearchInput};
