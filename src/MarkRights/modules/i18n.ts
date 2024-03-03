import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		responsibleoperator: localize({
			en: 'Webmaster',
			'zh-hans': '责任运营',
			'zh-hant': '責任運營',
		}),
		steward: localize({
			en: 'Steward',
			'zh-hans': '档案理事员',
			'zh-hant': '檔案理事員',
		}),
		checkuser: localize({
			en: 'CheckUser',
			'zh-hans': '用户查核',
			'zh-hant': '用戶查核',
		}),
		suppress: localize({
			en: 'Oversighter',
			'zh-hans': '监督员',
			'zh-hant': '監督員',
		}),
		sysop: localize({
			en: 'SysOp',
			'zh-hans': '管理员',
			'zh-hant': '管理員',
		}),
		'interface-admin': localize({
			en: 'Interface Administrator',
			'zh-hans': '界面管理员',
			'zh-hant': '介面管理員',
		}),
		templateeditor: localize({
			en: 'Template Editor',
			'zh-hans': '模板编辑员',
			'zh-hant': '模板編輯員',
		}),
		importer: localize({
			en: 'Importer',
			'zh-hans': '导入者',
			'zh-hant': '匯入者',
		}),
		patroller: localize({
			en: 'Patroller',
			'zh-hans': '巡查员',
			'zh-hant': '巡查員',
		}),
		autopatrolled: localize({
			en: 'Exempted from page patrol',
			'zh-hans': '优质编辑者',
			'zh-hant': '優質編輯者',
		}),
		eventsponsor: localize({
			en: 'Event Sponsor',
			'zh-hans': '活动组织者',
			'zh-hant': '活動組織者',
		}),
		'massmessage-sender': localize({
			en: 'MassMessage sender',
			'zh-hans': '大量消息发送者',
			'zh-hant': '大量訊息傳送者',
		}),
		confirmed: localize({
			en: 'Confirmed user',
			'zh-hans': '确认用户',
			'zh-hant': '確認用戶',
		}),
		autoconfirmed: localize({
			en: 'Auto-confirmed user',
			'zh-hans': '自动确认用户',
			'zh-hant': '自動確認用戶',
		}),
		bot: localize({
			en: 'Bot',
			'zh-hans': '机器人',
			'zh-hant': '機械人',
		}),
		flood: localize({
			en: 'Flooder',
			'zh-hans': '机器用户',
			'zh-hant': '機械用戶',
		}),
		'rnrsverify-exempt': localize({
			en: 'Exempted from real-name verification',
			'zh-hans': '实名制验证豁免',
			'zh-hant': '實名制驗證豁免',
		}),
		'ipblock-exempt': localize({
			en: 'Exempted from IP blocks',
			'zh-hans': 'IP封禁豁免',
			'zh-hant': 'IP封鎖豁免',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
