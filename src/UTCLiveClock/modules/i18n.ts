import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Success: localize({
			en: 'Cache cleared!',
			'zh-hans': '缓存清除成功',
			'zh-hant': '快取清除成功',
		}),
		Failed: localize({
			en: 'Failed to clear cache.',
			'zh-hans': '缓存清除失败',
			'zh-hant': '快取清除失败',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
