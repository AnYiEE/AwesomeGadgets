import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	const {wgULS} = window;
	return {
		Note: localize({
			en: 'Note: ',
			'zh-hans': '注释：',
			'zh-hant': '注釋：',
		}),
		NoPermError0: wgULS(
			'因技术原因，您没有权限访问相关页面。若有疑问，请与求闻百科运营者联系。',
			'因技術原因，您沒有權限訪問相關頁面。若有疑問，請與求聞百科運營者聯系。'
		),
		NoPermError1: wgULS(
			'您没有权限访问相关页面。若您是资深编者，请与求闻百科技术团队联系，以获取权限。',
			'您沒有權限訪問相關頁面。若您是資深編者，請與求聞百科技術團隊聯系，以獲取權限。'
		),
		NoPermError2: wgULS(
			'您的网络环境存在风险，请登录后继续使用。若您没有求闻百科账号，请注册后登录。',
			'您的網路環境存在風險，請登入後繼續使用。若您沒有求聞百科賬號，請注冊後登錄。'
		),
		NoPermError3: wgULS(
			'相关功能仅向注册用户开放，请登录后继续使用。若您没有求闻百科账号，请注册后登录。',
			'相關功能僅向注冊用戶開放，請登入後繼續使用。若您沒有求聞百科賬號，請注冊後登錄。'
		),
		NoPermError4: wgULS(
			'您没有权限访问相关页面。若有疑问，请与求闻百科运营者联系。',
			'您沒有權限訪問相關頁面。若有疑問，請與求聞百科運營者聯系。'
		),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
