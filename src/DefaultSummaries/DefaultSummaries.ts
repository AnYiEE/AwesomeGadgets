import {getBody} from 'ext.gadget.Util';
import {processVisualEditor} from './modules/processVisualEditor';
import {processWikiEditor} from './modules/processWikiEditor';

void getBody().then(function defaultSummaries($body: JQuery<HTMLBodyElement>): void {
	mw.hook('wikipage.editform').add((): void => {
		processWikiEditor($body);
	});

	mw.hook('ve.saveDialog.stateChanged').add((): void => {
		processVisualEditor();
	});
});
