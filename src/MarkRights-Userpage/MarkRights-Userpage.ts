import {WG_RELEVANT_USER_NAME} from './modules/constant';
import {getPermissions} from './modules/core';

if (WG_RELEVANT_USER_NAME && mw.config.get('wgNamespaceNumber') === 2 && mw.config.get('wgAction') === 'view') {
	const relevantUserPageName: string = new mw.Title(WG_RELEVANT_USER_NAME, 2).toText();
	const pageName: string = new mw.Title(mw.config.get('wgPageName')).toText();
	if (relevantUserPageName === pageName) {
		void getPermissions();
	}
}
