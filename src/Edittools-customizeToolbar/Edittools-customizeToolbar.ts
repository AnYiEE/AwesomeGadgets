import type {CustomizeToolbar} from './modules/types';
import {getBody} from 'ext.gadget.Util';

const customizeToolbar: CustomizeToolbar = (customizer) => {
	if (!mw.user.options.get('usebetatoolbar')) {
		return;
	}

	void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
		customizer.call($body.find('input[name=wpTextbox1]'));
	});
};

window.customizeToolbar = customizeToolbar;
