import * as OPTIONS from './options.json';
import {getBody} from 'ext.gadget.Util';
import {processVisualEditor} from './modules/processVisualEditor';
import {processWikiEditor} from './modules/processWikiEditor';

void getBody().then(function defaultSummaries($body: JQuery<HTMLBodyElement>): void {
	mw.hook('wikipage.editform').add(($editForm): void => {
		processWikiEditor($editForm);
	});

	mw.hook('ve.saveDialog.stateChanged').add((): void => {
		processVisualEditor($body);

		// Switching between VE and NWE, requires to be reinitialized
		mw.hook('ve.activationComplete').add(() => {
			if (mw.config.get(OPTIONS.configKey)) {
				mw.config.set(OPTIONS.configKey, false);
			}
		});
	});
});
