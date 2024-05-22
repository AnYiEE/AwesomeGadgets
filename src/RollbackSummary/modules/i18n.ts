import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Prompt: localize({
			en: 'Please enter a custom rollback summary (leave blank to use the system default summary)',
			'zh-hans': '请输入自定义回退摘要（留空则使用系统默认摘要）',
			'zh-hant': '請輸入自定義回退摘要（留空則使用系統預設摘要）',
		}),
		'Rollback edits by': localize({
			en: 'Revert edit(s) by [[Special:Contribs/$1|$1]] ([[User talk:$1|talk]]): ',
			'zh-hans': '回退[[Special:Contribs/$1|$1]]（[[User talk:$1|对话]]）的编辑：',
			'zh-hant': '回退[[Special:Contribs/$1|$1]]（[[User talk:$1|對話]]）的編輯：',
		}),
		'Rollback edits by a hidden user': localize({
			en: 'Revert edit(s) by a hidden user: ',
			'zh-hans': '回退已隐藏用户的编辑：',
			'zh-hant': '回退已隱藏用戶的編輯：',
			'zh-tw': '回退已隱藏使用者的編輯：',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
