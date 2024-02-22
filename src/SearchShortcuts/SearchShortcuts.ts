import {addKeyDownListener} from './modules/addKeyDownListener';
import {getSearchInput} from './modules/getSearchInput';

$(function searchShortcuts(): void {
	const $body: JQuery<HTMLBodyElement> = $('body');
	const $searchInput: JQuery<HTMLInputElement> = getSearchInput($body);

	addKeyDownListener($searchInput);
});
