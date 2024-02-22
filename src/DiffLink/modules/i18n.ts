import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		'Network error': localize({
			ja: 'ネットワークエラー',
			'zh-hans': '网络异常',
			'zh-hant': '網路異常',
		}),
		CopyDiff: localize({
			en: 'Copy the link to the diff version (wiki syntax)',
			ja: '現在の版間の差分リンクをコピーします（ウィキ記法）',
			'zh-hans': '复制链接到当前差异版本的wiki语法',
			'zh-hant': '複製連結到當前差異版本的wiki語法',
		}),
		CopyPermanent: localize({
			en: 'Copy the permanent link to the current version (wiki syntax)',
			ja: 'このページのこの版への固定リンクをコピーします（ウィキ記法）',
			'zh-hans': '复制链接到当前修订版本的wiki语法',
			'zh-hant': '複製連結到當前修訂版本的wiki語法',
		}),
		Diff: localize({
			en: 'Diff link',
			ja: '現在の版間の差分リンク',
			'zh-hans': '当前差异链接',
			'zh-hant': '當前差異連結',
		}),
		DiffVersion: localize({
			en: 'diff version',
			ja: '版間の差分',
			'zh-hans': '差异版本',
			'zh-hant': '差異版本',
		}),
		Permanent: localize({
			en: 'Permanent link',
			ja: 'この版への固定リンク',
			'zh-hans': '当前修订链接',
			'zh-hant': '當前修訂連結',
		}),
		PermanentVersion: localize({
			en: 'permanent version',
			ja: '版への固定リンク',
			'zh-hans': '固定版本链接',
			'zh-hant': '固定版本連結',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
