import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		'Loading preview': localize({
			en: 'Loading preview……',
			'zh-hans': '预览加载中……',
			'zh-hant': '預覽載入中……',
		}),
		'Failed to load preview': localize({
			'zh-hans': '预览加载失败',
			'zh-hant': '預覽載入失败',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
