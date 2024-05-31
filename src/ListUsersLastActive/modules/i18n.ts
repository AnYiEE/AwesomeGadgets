import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		'(': localize({
			en: ' (',
			zh: '（',
		}),
		')': localize({
			en: ') ',
			zh: '）',
		}),
		'Last active on': localize({
			en: 'Last active on $1',
			'zh-hans': '最后操作于$1',
			'zh-hant': '最後動作於$1',
		}),
		'Never active': localize({
			en: 'Never active',
			'zh-hans': '从未有操作',
			'zh-hant': '從未有動作',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
