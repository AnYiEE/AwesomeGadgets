import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		ToBottom: localize({
			en: 'Scroll to the bottom',
			'zh-hans': '滚动至页底',
			'zh-hant': '滾動至頁底',
		}),
		ToTop: localize({
			en: 'Go back to the top',
			'zh-hans': '滚动至页顶',
			'zh-hant': '滾動至頁頂',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
