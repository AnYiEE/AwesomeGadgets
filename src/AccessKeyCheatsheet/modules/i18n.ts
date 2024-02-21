import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Close: localize({
			en: 'Close',
			ja: '閉じる',
			ru: 'Закрыть',
			'zh-hans': '关闭',
			'zh-hant': '關閉',
		}),
		Text: localize({
			en: 'Open access keys cheatsheet',
			ja: 'アクセスキーのチートシート',
			ru: 'Открыть подсказку с клавиатурными ярлыками',
			'zh-hans': '显示键盘快捷键提示',
			'zh-hant': '顯示鍵盤快速鍵提示',
		}),
		Title: localize({
			en: 'Access keys cheatsheet',
			ja: 'アクセスキーのチートシート',
			ru: 'Подсказки клавиатурных ярлыков',
			'zh-hans': '键盘快捷键提示',
			'zh-hant': '鍵盤快速鍵提示',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
