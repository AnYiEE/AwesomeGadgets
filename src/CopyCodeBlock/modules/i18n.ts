import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Copy: localize({
			en: 'Copy to clipboard',
			ja: 'クリップボードにコピー',
			'zh-hans': '复制至剪贴板',
			'zh-hant': '拷貝至剪貼簿',
		}),
		Copied: localize({
			en: 'Copied',
			ja: 'コピーが成功しました',
			'zh-hans': '已复制',
			'zh-hant': '已拷貝',
		}),
		Failed: localize({
			en: 'Copy failed',
			ja: 'コピーに失敗しました',
			'zh-hans': '复制失败',
			'zh-hant': '拷貝失敗',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
