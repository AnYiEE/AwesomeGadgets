import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Notice: localize({
			en: 'This page has been changed by someone else after you started editing. Copy your changes, refresh and start over to avoid edit conflicts.',
			ja: 'このページは他の人によって変更されています。編集衝突を避けるため、編集内容をコピーしてページを再読み込みし、編集を続けてください。',
			'zh-hans': '此页面已被他人更改。请复制您的编辑，然后刷新页面，重新开始编辑，以避免编辑冲突。',
			'zh-hant': '本頁已被他人更改。請將您的編輯複製，並重新載入頁面，然後繼續編輯，來避免編輯衝突。',
		}),
		Refresh: localize({
			en: 'Refresh',
			ja: '再読み込み',
			'zh-hans': '刷新页面',
			'zh-hant': '重新載入',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
