import {buildLink} from './buildLink';
import {queryApi} from './util/queryApi';

const compareWithRemoteDiffId = async (diffId: number): Promise<void> => {
	const response: Awaited<ReturnType<typeof queryApi>> = await queryApi(diffId);
	if (diffId === mw.config.get('wgDiffNewId') && response['compare']?.fromrevid === mw.config.get('wgDiffOldId')) {
		buildLink(0, diffId);
	}
};

export {compareWithRemoteDiffId};
