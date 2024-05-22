import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		'Redirecting to': localize({
			en: 'Redirecting to $1',
			ja: '「$1」にリダイレクト中',
			'zh-hans': '正在重定向至“$1”',
			'zh-hant': '正在重新導向至“$1”',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
