import {buildLink} from './buildLink';
import {queryApi} from './util/queryApi';

const compareWithRemoteDiffId = async (diffId: number): Promise<void> => {
	const response: Awaited<ReturnType<typeof queryApi>> = await queryApi(diffId);
	const {wgDiffNewId, wgDiffOldId} = mw.config.get();
	if (diffId === wgDiffNewId && response['compare']?.fromrevid === wgDiffOldId) {
		buildLink(0, diffId);
	}
};

export {compareWithRemoteDiffId};
