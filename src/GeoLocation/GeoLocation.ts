import {SYSTEM_SCRIPT_LIST, WEBMASTER_LIST, WG_USER_EDIT_COUNT, WG_USER_GROUPS, WG_USER_NAME} from './modules/constant';
import {getGeoInfo} from 'ext.gadget.Geo';
import {storeLocation} from './modules/storeLocation';

(async function geoLocation(): Promise<void> {
	if (SYSTEM_SCRIPT_LIST.includes(WG_USER_NAME) || WEBMASTER_LIST.includes(WG_USER_NAME) || !WG_USER_NAME) {
		return;
	}

	if (WG_USER_GROUPS.includes('bot') || !WG_USER_EDIT_COUNT) {
		return;
	}

	const {countryOrArea, region} = await getGeoInfo();
	if (!countryOrArea) {
		return;
	}

	void storeLocation({
		countryOrArea,
		region,
	});
})();
