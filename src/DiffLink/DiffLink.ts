import {checkDiffPage} from './modules/util/checkDiffPage';
import {checkRevisionPage} from './modules/util/checkRevisionPage';
import {processId} from './modules/processId';

mw.hook('wikipage.content').add(function diffLink($content): void {
	if ($content.attr('id') !== 'mw-content-text') {
		return;
	}

	const isDiffPage: boolean = checkDiffPage($content);
	const isRevisionPage: boolean = checkRevisionPage($content);
	if (!isDiffPage && !isRevisionPage) {
		return;
	}

	const {wgDiffNewId, wgDiffOldId, wgRevisionId} = mw.config.get();

	processId(isRevisionPage, {
		diffId: wgDiffNewId ?? null,
		oldId: wgDiffOldId ?? null,
		revisionId: wgRevisionId ?? null,
	});
});
