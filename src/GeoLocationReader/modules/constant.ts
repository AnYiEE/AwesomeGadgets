import * as OPTIONS from '../options.json';

const CLASS_NAME: string = 'gadget-geo_location_reader';
const CLASS_NAME_ICON: string = `${CLASS_NAME}__icon`;
const CLASS_NAME_TEXT: string = `${CLASS_NAME}__text`;

const IS_USER_PAGE: boolean = mw.config.get('wgNamespaceNumber') === OPTIONS.userNameSpaceNumber;
const IS_WG_ACTION_VIEW: boolean = mw.config.get('wgAction') === 'view';

const WG_PAGE_NAME: string = mw.config.get('wgPageName');
const WG_RELEVANT_USER_NAME: string = mw.config.get('wgRelevantUserName') ?? '';
const WG_SKIN: string = mw.config.get('skin');
const WG_USER_LANGUAGE: string = mw.config.get('wgUserLanguage');

export {SYSTEM_SCRIPT_LIST, WEBMASTER_LIST} from '~/GeoLocation/modules/constant';
export {
	CLASS_NAME,
	CLASS_NAME_ICON,
	CLASS_NAME_TEXT,
	IS_USER_PAGE,
	IS_WG_ACTION_VIEW,
	WG_PAGE_NAME,
	WG_RELEVANT_USER_NAME,
	WG_SKIN,
	WG_USER_LANGUAGE,
};
