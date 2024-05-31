import {addLink} from './addLink';
import {buildLink} from './buildLink';
import {compareWithRemoteDiffId} from './compareWithRemoteDiffId';

const processId = (
	isRevisionPage: boolean,
	{
		articleId,
		diffId,
		oldId,
		revisionId,
	}: {
		articleId: number;
		diffId: number | null;
		oldId: number | null;
		revisionId: number | null;
	}
): void => {
	if (diffId) {
		buildLink(oldId, diffId);
		if (oldId) {
			void compareWithRemoteDiffId(diffId);
		}
	} else if (revisionId && isRevisionPage) {
		addLink(`/p/${revisionId}`);
	} else if (articleId) {
		addLink(`/c/${articleId}`);
	}
};

export {processId};
