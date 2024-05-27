import {getBody} from 'ext.gadget.Util';
import {processVisualEditor} from './modules/processVisualEditor';
import {setMessages} from './modules/i18n';

/**
 * @description 修正2017版源代码编辑器界面错误
 */
void getBody().then(function editForm($body: JQuery<HTMLBodyElement>): void {
	setMessages();

	mw.hook('ve.saveDialog.stateChanged').add((): void => {
		processVisualEditor({
			$body,
		});
	});
});
