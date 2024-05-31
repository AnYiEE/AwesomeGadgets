import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Patrol: localize({
			en: 'Patrol',
			'zh-hans': '巡查',
			'zh-hant': '巡查',
		}),
		'Patrol all pages': localize({
			en: 'Patrol all pages',
			'zh-hans': '巡查所有页面？',
			'zh-hant': '巡查全部頁面？',
		}),
		'Patrol all pages?': localize({
			en: 'Patrol all pages?',
			'zh-hans': '确定巡查所有页面？',
			'zh-hant': '確定巡查全部頁面？',
		}),
		Patrolled: localize({
			en: 'Patrolled',
			'zh-hans': '已巡查',
			'zh-hant': '已巡查',
		}),
		AJAX: localize({
			en: 'AJAX failure',
			'zh-hans': 'AJAX失败',
			'zh-hant': 'AJAX失敗',
		}),
		API: localize({
			en: 'API failure: ',
			'zh-hans': 'API失败：',
			'zh-hant': 'API失敗：',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
