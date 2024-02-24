import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		infinity: localize({
			en: 'infinity',
			'zh-hans': '无限期',
			'zh-hant': '無限期',
		}),
		Blocked: localize({
			en: '; $5blocked ($1) by $2: $3 ($4 ago)',
			'zh-hans': '；由$2$5封禁$1：$3（$4前）',
			'zh-hant': '；由$2$5封鎖$1：$3（$4前）',
		}),
		partial: localize({
			en: 'partial ',
			zh: '部分',
		}),
		d: localize({
			en: 'day',
			zh: '天',
		}),
		s: localize({
			en: 'second',
			zh: '秒',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
