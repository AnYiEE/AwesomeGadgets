import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Baidu: localize({
			en: 'Baidu',
			ja: 'Baidu',
			zh: '百度',
		}),
		Bing: localize({
			en: 'Bing',
			'zh-hans': '必应',
			'zh-hant': '必應',
		}),
		Google: localize({
			en: 'Google',
			ja: 'Google',
			zh: '谷歌',
		}),
		YsArchives: localize({
			en: 'Youshou Archives',
			ja: '有兽档案馆',
			'zh-hans': '有兽档案馆',
			'zh-hant': '有獸檔案館',
		}),
		Sogou: localize({
			en: 'Sogou',
			ja: 'Sogou',
			zh: '搜狗',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
