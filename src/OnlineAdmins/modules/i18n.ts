import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		' ($1 online):': localize({
			en: ' ($1 online):',
			ja: '（$1人オンライン中）：',
			'zh-hans': '（$1个在线）：',
			'zh-hant': '（$1個在線）：',
		}),
		Admins: localize({
			en: 'Admins',
			ja: '管理者',
			'zh-hans': '管理员',
			'zh-hant': '管理員',
		}),
		Patrollers: localize({
			en: 'Patrollers',
			ja: '巡回者',
			'zh-hans': '巡查员',
			'zh-hant': '巡查員',
		}),
		Bureaucrats: localize({
			en: 'Bureaucrats',
			ja: 'スチュワード',
			'zh-hans': '档案理事员',
			'zh-hant': '檔案理事員',
		}),
		'Network error': localize({
			en: 'Network error',
			ja: 'ネットワークエラー',
			'zh-hans': '网络异常',
			'zh-hant': '網路異常',
		}),
		NoOnline: localize({
			en: 'Currently there are no high privilege users online',
			ja: '現在、高権限利用者はオンラインにいません',
			'zh-hans': '目前没有站务人员在线',
			'zh-hant': '目前沒有站務人員在線',
		}),
		Online: localize({
			en: 'Online admins',
			ja: 'オンラインの高権限利用者',
			'zh-hans': '在线站务人员',
			'zh-hant': '線上站務人員',
		}),
		OnlineWithin30Minutes: localize({
			en: 'High privilege users online within 30 minutes:',
			ja: '30分以内にオンラインで高権限利用者：',
			'zh-hans': '下面是最近30分钟内在线的站务人员：',
			'zh-hant': '下面是最近30分鐘內的線上站務人員：',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
