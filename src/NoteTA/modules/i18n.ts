import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		ApiRetryFailError: localize({
			en: 'Api calls failed $1 time(s) in a row. Errors: ',
			'zh-hans': 'Api 调用连续失败 $1 次，$1 次调用的错误分别为：',
			'zh-hant': 'Api 調用連續失敗 $1 次，$1 次調用的錯誤分別為：',
		}),
		Loading: localize({
			en: 'Loading...',
			'zh-hans': '正在加载……',
			'zh-hant': '正在載入……',
		}),
		Title: localize({
			en: 'NoteTA',
			'zh-hans': '字词转换',
			'zh-hant': '字詞轉換',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
