import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Hide: localize({
			en: 'Hide',
			ja: '非表示',
			'zh-hans': '隐藏',
			'zh-hant': '隱藏',
		}),
		Show: localize({
			en: 'Show',
			ja: '表示',
			'zh-hans': '显示',
			'zh-hant': '顯示',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
