import {checkDiffPage} from './modules/util/checkDiffPage';
import {checkRevisionPage} from './modules/util/checkRevisionPage';
import {processId} from './modules/processId';

mw.hook('wikipage.content').add(($content): void => {
	if ($content.attr('id') !== 'mw-content-text') {
		return;
	}

	const isDiffPage: boolean = checkDiffPage($content);
	const isRevisionPage: boolean = checkRevisionPage($content);
	if (!isDiffPage && !isRevisionPage) {
		return;
	}

	processId(isRevisionPage, {
		diffId: mw.config.get('wgDiffNewId'),
		oldId: mw.config.get('wgDiffOldId'),
		revisionId: mw.config.get('wgRevisionId'),
	});
});
