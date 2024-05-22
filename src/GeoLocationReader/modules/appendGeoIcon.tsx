import {type CountryOrAreaNameList, type RegionNameList, getCountryOrAreaName, getRegionName} from './util/getName';
import type {StoreGeoInfo} from './types';
import {WG_RELEVANT_USER_NAME} from './constant';
import {api} from './api';
import {appendIcon} from './util/appendIcon';
import {getMessage} from './i18n';

const appendGeoIcon = async (): Promise<void> => {
	const storePageTitle: string = `User:${WG_RELEVANT_USER_NAME}/GeoIP.json`;

	try {
		const params: ApiQueryRevisionsParams = {
			action: 'query',
			titles: [storePageTitle],
			format: 'json',
			formatversion: '2',
			prop: ['revisions'],
			rvprop: ['content'],
			rvslots: 'main',
		};

		const data = await api.post(params);

		const {
			country,
			countryOrArea,
			region,
		}: StoreGeoInfo & {
			country?: string;
		} = JSON.parse(
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			data['query'].pages[0].revisions[0].slots.main.content
		);

		const location: StoreGeoInfo['countryOrArea'] = country ?? countryOrArea ?? '';
		const countryOrAreaName: string =
			getCountryOrAreaName(location as keyof CountryOrAreaNameList) ?? getMessage('Unknown');
		const regionName: string = location === 'CN' ? getRegionName(region as keyof RegionNameList) ?? '' : '';

		appendIcon({
			icon: 'globe',
			indicatorText: countryOrAreaName + regionName,
			spanClass: 'green',
		});
	} catch (error: unknown) {
		console.error('[GeoLocationReader] Ajax error in `appendGeoIcon` method:', error);
		appendIcon({
			icon: 'helpNotice',
			indicatorText: getMessage('Unknown'),
			spanClass: 'orange',
		});
	}
};

export {appendGeoIcon};
