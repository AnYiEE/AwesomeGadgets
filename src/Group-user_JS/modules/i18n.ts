import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Edit: localize({
			en: 'Edit',
			ja: '編集',
			'zh-hans': '编辑',
			'zh-hant': '編輯',
		}),
		Log: localize({
			en: 'Log',
			ja: 'ログ',
			'zh-hans': '日志',
			'zh-hant': '日誌',
		}),
		Subpages: localize({
			en: 'Subpage',
			ja: '子ページ',
			'zh-hans': '子页面',
			'zh-hant': '子頁面',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
