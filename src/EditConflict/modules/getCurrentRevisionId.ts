import {queryPageInfo} from './util/queryPageInfo';

const getCurrentRevisionId = async (title: string): Promise<number> => {
	const pageInfo: Awaited<ReturnType<typeof queryPageInfo>> = await queryPageInfo(title);

	const {query} = pageInfo;
	if (!query) {
		return 0;
	}

	const [page] = query.pages;
	if (!page || page.missing) {
		return 0;
	}

	return page.revisions[0]!.revid;
};

export {getCurrentRevisionId};
