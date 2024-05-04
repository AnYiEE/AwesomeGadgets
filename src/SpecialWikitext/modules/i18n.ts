import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Failed: localize({
			en: 'Failed to load preview.',
			'zh-hans': '预览加载失败',
			'zh-hant': '預覽載入失败',
		}),
		Loading: localize({
			en: 'Loading preview...',
			'zh-hans': '预览加载中……',
			'zh-hant': '預覽載入中……',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
