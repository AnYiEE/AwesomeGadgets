import {WG_RELEVANT_USER_NAME} from './constant';
import {api} from './api';
import {appendGeoIcon} from './appendGeoIcon';

const addElement = async (): Promise<void> => {
	const queryUserGroupsParams: ApiQueryUsersParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: 'users',
		ususers: WG_RELEVANT_USER_NAME,
		usprop: 'groups',
	};

	try {
		const {
			query: {
				users: [{groups}],
			},
		}: {
			query: {
				users: [
					{
						groups: string[];
					},
				];
			};
		} = (await api.get(queryUserGroupsParams)) as never;

		if (groups.includes('bot') || groups.includes('qiuwen')) {
			//求闻站长预留，故意不改
			/* empty */
			// Already shown in MarkRights-Userpage
		} else {
			void appendGeoIcon();
		}
	} catch (error: unknown) {
		console.error('[GeoLocationReader] Ajax error in `addElement` method:', error);
	}
};

export {addElement};
