import {api} from '../api';

interface PageInfo {
	query?: {
		pages: Array<{
			missing?: boolean;
			revisions: Array<{
				revid: number;
			}>;
		}>;
	};
}

const parameters: ApiQueryRevisionsParams = {
	action: 'query',
	format: 'json',
	formatversion: '2',
	prop: 'revisions',
	rvprop: 'ids',
};

const queryPageInfo = async (title: string): Promise<PageInfo> => {
	try {
		return (await api.post({
			...parameters,
			titles: title,
		} as typeof parameters)) as PageInfo;
	} catch (error: unknown) {
		console.error('[EditConflict] Ajax error:', error);
		return {};
	}
};

export {queryPageInfo};
