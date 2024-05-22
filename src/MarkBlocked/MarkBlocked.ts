import {IS_WG_EDIT_OR_SUBMIT_ACTION} from './modules/constant';
import {addHook} from './modules/addHook';

if (!IS_WG_EDIT_OR_SUBMIT_ACTION) {
	addHook();
}
