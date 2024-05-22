import * as OPTIONS from './options.json';
import type {GeoInfo} from './modules/types';
import {STORAGE_KEY} from './modules/constant';

const getGeoInfo = async (): Promise<GeoInfo> => {
	const storeGeoInfo = mw.storage.getObject(STORAGE_KEY) as GeoInfo | null;
	if (storeGeoInfo) {
		return storeGeoInfo;
	}

	try {
		const response = (await $.getJSON('https://geo.qiuwen.net.cn')) as Partial<GeoInfo> & {
			country?: string;
		};
		const geoInfo: GeoInfo = {
			countryOrArea: response.country ?? response.countryOrArea ?? '',
			region: response.region ?? '',
			city: response.city ?? '',
		};

		mw.storage.setObject(STORAGE_KEY, geoInfo, 60 * 60 * 1000);

		return geoInfo;
	} catch {
		return OPTIONS.defaultGeoInfo;
	}
};

export {getGeoInfo};
