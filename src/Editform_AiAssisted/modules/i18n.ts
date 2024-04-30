import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		AiAssisted: localize({
			en: 'This edited content was assisted by artificial intelligence',
			ja: 'この編集内容は人工知能による支援を受けています',
			'zh-hans': '此编辑由人工智能（AI）辅助',
			'zh-hant': '此編輯由人工智能（AI）輔助',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
