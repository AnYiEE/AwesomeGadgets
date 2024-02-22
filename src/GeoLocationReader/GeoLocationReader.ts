import * as OPTIONS from './options.json';
import {
	IS_USER_PAGE,
	IS_WG_ACTION_VIEW,
	SYSTEM_SCRIPT_LIST,
	WEBMASTER_LIST,
	WG_PAGE_NAME,
	WG_RELEVANT_USER_NAME,
} from './modules/constant';
import {addElement} from './modules/addElement';

(function geoLocationReader(): void {
	if (
		SYSTEM_SCRIPT_LIST.includes(WG_RELEVANT_USER_NAME) ||
		WEBMASTER_LIST.includes(WG_RELEVANT_USER_NAME) ||
		!WG_RELEVANT_USER_NAME ||
		!IS_USER_PAGE ||
		!IS_WG_ACTION_VIEW
	) {
		return;
	}

	const pageName: string = new mw.Title(WG_PAGE_NAME).toText();
	const relevantUserPageName: string = new mw.Title(WG_RELEVANT_USER_NAME, OPTIONS.userNameSpaceNumber).toText();
	if (pageName !== relevantUserPageName) {
		return;
	}

	void addElement();
})();
