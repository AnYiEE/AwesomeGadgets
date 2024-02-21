import * as OPTIONS from './options.json';
import {checkA11yConfirmKey, getBody} from 'ext.gadget.Util';
import {WG_USER_NAME} from './modules/constant';
import {addListener} from './modules/addListener';
import {ajaxLogin} from './modules/core';
import {windowManager} from './modules/initWindowManager';

void getBody().then(function initAutoLogin($body: JQuery<HTMLBodyElement>): void {
	if (WG_USER_NAME) {
		return;
	}

	const $loginElement: JQuery<HTMLAnchorElement> = $body.find<HTMLAnchorElement>(OPTIONS.loginElementSelector);
	if (!$loginElement.length) {
		return;
	}

	windowManager.$element.appendTo($body);

	const fakeToastifyInstance: ToastifyInstance = {
		hideToast: () => {},
	};

	const eventListener = (event: JQuery.ClickEvent | JQuery.KeyDownEvent): void => {
		if (!checkA11yConfirmKey(event)) {
			return;
		}

		event.preventDefault();
		ajaxLogin(fakeToastifyInstance);
	};
	addListener($loginElement, eventListener);
});
