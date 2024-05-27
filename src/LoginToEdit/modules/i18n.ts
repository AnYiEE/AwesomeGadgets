import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Cancel: localize({
			en: 'Cancel',
			ja: 'キャンセル',
			'zh-hans': '暂不登录账号',
			'zh-hant': '暫不登入賬號',
		}),
		Edit: localize({
			en: 'Edit',
			ja: '編集',
			'zh-hans': '编辑',
			'zh-hant': '編輯',
		}),
		Login: localize({
			en: 'Login',
			ja: 'ログイン',
			'zh-hans': '登录已有账号',
			'zh-hant': '登入已有賬號',
		}),
		Register: localize({
			en: 'Register',
			ja: 'アカウントを作成',
			'zh-hans': '注册新的账号',
			'zh-hant': '註冊新的賬號',
		}),
		DialogTitle: localize({
			en: 'Welcome to Youshou Archives!',
			ja: '「有兽档案馆」へようこそです！',
			'zh-hans': '欢迎来到有兽档案馆！',
			'zh-hant': '歡迎來到有獸檔案館！',
		}),
		DialogMessage: localize({
			en: 'You have not yet logged in. Register and log in to your account to contribute.',
			ja: 'あなたはまだ有獣アーカイブスにログインしていません。アカウントを作成し、ログインして有獣アーカイブスを改善することができます。',
			'zh-hans': '您尚未登录到有兽档案馆。您可以注册并登录账号，帮助完善有兽档案馆。',
			'zh-hant': '您尚未登錄到有獸檔案館。您可以注冊並登錄賬戶，幫助完善有獸檔案館。',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
