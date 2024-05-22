import {WG_USER_NAME} from './modules/constant';
import {getBody} from 'ext.gadget.Util';
import {initDialog} from './modules/initDialog';

void getBody().then(function loginToEdit($body: JQuery<HTMLBodyElement>): void {
	if (WG_USER_NAME) {
		return;
	}

	initDialog($body);
});
