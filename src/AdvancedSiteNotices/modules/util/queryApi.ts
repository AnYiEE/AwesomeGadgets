import * as OPTIONS from '../../options.json';
import {WG_USER_LANGUAGE} from '../constant';
import {api} from '../api';

interface RemoteNotices {
	$notices?: JQuery;
	version?: string;
}

const parameters: ApiParseParams = {
	action: 'parse',
	format: 'json',
	formatversion: '2',
	prop: 'text',
	page: OPTIONS.ajaxPageTitle,
	uselang: WG_USER_LANGUAGE,
	variant: WG_USER_LANGUAGE,
};

const queryApi = async (): Promise<ReturnType<mw.Api['get']>> => {
	try {
		return await api.get(parameters);
	} catch (error: unknown) {
		console.error('[AdvancedSiteNotices] Ajax error:', error);
		return {};
	}
};

export {type RemoteNotices, queryApi};
