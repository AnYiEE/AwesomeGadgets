import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Update: localize({
			en: 'Update IP location information',
			ja: 'IP地域の情報を更新',
			'zh-hans': '更新IP属地信息',
			'zh-hant': '更新IP屬地資訊',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
