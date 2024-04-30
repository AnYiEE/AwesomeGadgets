import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Expand: localize({
			en: 'Expand',
			ja: '展開',
			'zh-hans': '展开',
			'zh-hant': '展開',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
