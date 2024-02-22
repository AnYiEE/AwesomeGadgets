import * as OPTIONS from './options.json';
import {WG_USER_NAME} from './modules/constant';
import {addListener} from './modules/addListener';
import {getBody} from 'ext.gadget.Util';

void getBody().then(function confirmLogout($body: JQuery<HTMLBodyElement>): void {
	if (!WG_USER_NAME) {
		return;
	}

	const $element: JQuery = $body.find(OPTIONS.logoutElementSelector);
	if (!$element.length) {
		return;
	}

	addListener($element);
});
