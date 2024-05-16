import {updateLinks} from './modules/updateLinks';

mw.hook('wikipage.content').add(function rollbackSummary($content): void {
	updateLinks($content);
});
