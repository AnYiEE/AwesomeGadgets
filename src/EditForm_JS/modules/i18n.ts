import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		AiAssisted: localize({
			en: 'This edited content was assisted by artificial intelligence',
			ja: 'この編集内容は人工知能による支援を受けています',
			'zh-hans': '此编辑由人工智能（AI）辅助',
			'zh-hant': '此編輯由人工智能（AI）輔助',
		}),
		Preview: localize({
			en: 'Please preview the edited text',
			ja: 'プレビューしてください',
			'zh-hans': '请先预览',
			'zh-hant': '請先預覽',
		}),
		RevisionPreloaded: localize({
			en: 'Content of revision $1 preloaded.',
			'zh-hans': '已加载版本$1的内容。',
			'zh-hant': '已載入版本$1的內容。',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
