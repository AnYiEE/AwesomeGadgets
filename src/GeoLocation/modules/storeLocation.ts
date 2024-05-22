import * as OPTIONS from '../options.json';
import type {StoreGeoInfo} from './types';
import {WG_USER_NAME} from './constant';
import {api} from './api';
import {getMessage} from './i18n';

const storeLocation = async ({countryOrArea, region}: StoreGeoInfo): Promise<void> => {
	const storePageTitle: string = `User:${WG_USER_NAME}/GeoIP.json`;

	try {
		const queryParams: ApiQueryRevisionsParams = {
			action: 'query',
			titles: [storePageTitle],
			format: 'json',
			formatversion: '2',
			prop: ['revisions'],
			rvprop: ['content'],
			rvslots: 'main',
		};

		const data = await api.post(queryParams);

		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		const response = JSON.parse(data['query'].pages[0].revisions[0].slots.main.content) as Partial<StoreGeoInfo>;

		if (response.countryOrArea === countryOrArea && (response.region === region || (response.region && !region))) {
			return;
		}
	} catch {}

	const geoInfo: StoreGeoInfo = {
		countryOrArea,
		region,
	};
	const params: ApiEditPageParams = {
		action: 'edit',
		format: 'json',
		formatversion: '2',
		contentformat: 'application/json',
		contentmodel: 'json',
		title: storePageTitle,
		text: JSON.stringify(geoInfo),
		summary: getMessage('Update'),
		minor: true,
		recreate: true,
		watchlist: 'unwatch',
		tags: OPTIONS.apiTag,
	};

	try {
		await api.postWithEditToken(params);
	} catch (error: unknown) {
		console.error('[GeoLocation] Ajax error:', error);
	}
};

export {storeLocation};
