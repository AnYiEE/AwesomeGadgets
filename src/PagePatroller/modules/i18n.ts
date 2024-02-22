import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		'Loading...': localize({
			en: 'Loading...',
			'zh-hans': '正在加载此页面的巡查者……',
			'zh-hant': '正在加載此頁面的巡查者……',
		}),
		'This page has not been patrolled yet': localize({
			en: 'This page has not been patrolled yet.',
			'zh-hans': '此页面尚未被巡查。',
			'zh-hant': '此頁面尚未被巡查。',
		}),
		'This page was patrolled at by': localize({
			en: 'This page was patrolled at $1 by',
			'zh-hans': '此页面巡查于$1，巡查者是',
			'zh-hant': '此頁面巡查於$1，巡查者是',
		}),
		'This page has been patrolled, or has been marked as auto-patrolled': localize({
			en: 'This page has been patrolled, or has been marked as auto-patrolled.',
			'zh-hans': '此页面尚未被巡查，或已自动标为已巡查。',
			'zh-hant': '此頁面尚未被巡查，或已自動標爲已巡查。',
		}),
		'Error occurs when finding patroller': localize({
			en: 'Error occurs when finding patroller.',
			'zh-hans': '查找巡查者时出现错误。',
			'zh-hant': '查找巡查者時出現錯誤。',
		}),
		period: localize({
			en: '.',
			zh: '。',
		}),
	};
};
const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
