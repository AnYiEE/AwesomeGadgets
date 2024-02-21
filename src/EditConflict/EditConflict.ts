import {IS_WG_EDIT_OR_SUBMIT_ACTION, WG_CUR_REVISION_ID} from './modules/constant';
import {editConflict} from './modules/core';

if (IS_WG_EDIT_OR_SUBMIT_ACTION && WG_CUR_REVISION_ID) {
	void editConflict();
}
