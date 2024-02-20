import {addListener} from './modules/addListener';
import {generateElements} from './modules/util/generateElements';
import {generateMessageDialogProperty} from './modules/util/generateMessageDialogProperty';
import {getBody} from 'ext.gadget.Util';
import {initWindowManager} from './modules/initWindowManager';

/**
 * Adds alt+shift+? as an access key to show a list of all default access keys
 */
void getBody().then(function accessKeyCheatsheet($body: JQuery<HTMLBodyElement>): void {
	const {$table, $opener} = generateElements($body);
	$opener.hide().appendTo($body);

	const windowManager: OO.ui.WindowManager = initWindowManager();
	windowManager.$element.appendTo($body);

	const messageDialogProperty: OO.ui.WindowManager.WindowOpeningData = generateMessageDialogProperty($table);

	addListener($opener, windowManager, messageDialogProperty);
});
