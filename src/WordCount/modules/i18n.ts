import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		'character(s)': localize({
			en: ' character(s)',
			'zh-hans': '字符',
			'zh-hant': '字元',
		}),
		'(': localize({
			en: ' (',
			zh: '（',
		}),
		')': localize({
			en: ') ',
			zh: '）',
		}),
		CJK: localize({
			en: ' CJK',
			'zh-hans': '个CJK字符',
			'zh-hant': '个CJK字元',
		}),
		'byte(s) in UTF-8 encoding': localize({
			en: 'byte(s) in UTF-8 encoding',
			'zh-hans': '字节（UTF-8编码）',
			'zh-hant': '位元組（UTF-8編碼）',
		}),
	};
};
const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
