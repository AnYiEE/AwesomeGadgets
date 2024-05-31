import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		':': localize({
			en: ': ',
			ja: '：',
			zh: '：',
		}),
		Unknown: localize({
			en: 'Unknown Location',
			ja: '未知IP地域',
			'zh-hans': '未知IP属地',
			'zh-hant': '未知IP屬地',
		}),
		Location: localize({
			en: 'IP Location',
			ja: 'IP地域',
			'zh-hans': 'IP属地',
			'zh-hant': 'IP屬地',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
