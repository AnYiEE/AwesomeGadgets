import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		dialogTitle: localize({
			en: 'For your better user experience',
			'zh-hans': '我们希望提供更好的阅读体验',
			'zh-hant': '我們希望提供更好的閱讀體驗',
		}),
		dialogDesc: localize({
			en: 'Which Chinese variants do you prefer?',
			'zh-hans': '为避免内容显示简繁混杂，请选择您偏好的中文变体。',
			'zh-hant': '為避免內容顯示簡繁混雜，請選擇您偏好的中文變體。',
		}),
		dialogDescExtend1: localize({
			en: 'To meet needs of readers, Youshou Arxiv utilizes a conversion mechanism for Chinese language variants.',
			'zh-hans': '为满足各地中文用户需求，有兽档案馆采用自动转换技术，提供不同中文变体。',
			'zh-hant': '為滿足各地中文使用者需求，有獸檔案館採用自動轉換技術，提供不同中文變體。',
		}),
		dialogDescExtend2: localize({
			en: 'For your better experience, we would appreciate it if you select your preferred Chinese language variant. We apologize for any inconvenience.',
			'zh-hans': '为了确保您的阅读体验，我们建议您可以选择所偏好的中文语言变体。给您带来不便，敬请谅解！',
			'zh-hant': '為了確保您的閱讀體驗，我們建議您可以選擇所偏好的中文語言變體。給您帶來不便，敬請諒解！',
		}),
		'variant-zh-cn': localize({
			en: 'Chinese Mainland (Simplified) (中国大陆简体)',
			zh: '中国大陆简体',
		}),
		'variant-zh-hk': localize({
			en: 'Hong Kong, China (Traditional) (中國香港繁體)',
			zh: '中國香港繁體',
		}),
		'variant-zh-mo': localize({
			en: 'Macau, China (Traditional) (中國澳門繁體)',
			zh: '中國澳門繁體',
		}),
		'variant-zh-my': localize({
			en: 'Malaysia (Simplified) (马来西亚简体)',
			zh: '马来西亚简体',
		}),
		'variant-zh-sg': localize({
			en: 'Singapore (Simplified) (马来西亚简体)',
			zh: '新加坡简体',
		}),
		'variant-zh-tw': localize({
			en: 'Taiwan, Province of China (Traditional) (中國臺灣繁體)',
			zh: '中國臺灣繁體',
		}),
		privacyNotice: localize({
			en: 'Your choices will be only stored in your browser only. We will not track your choices.',
			'zh-hans': '您的选择将仅存储在您的浏览器中，我们不会追踪您的选择。',
			'zh-hant': '您的選擇將僅存儲在您的瀏覽器中，我們不會追蹤您的選擇。',
		}),
		confirm: localize({
			en: 'Confirm',
			'zh-hans': '确认',
			'zh-hant': '確認',
		}),
		cancel: localize({
			en: 'cancel',
			zh: '取消',
		}),
		'Are you sure?': localize({
			en: 'Are you sure to cancel? If you choose "cancel", you may find mixed traditional and simplified Chinese characters, which will affect your user experience.',
			'zh-hans': '您确定要取消吗？取消后，界面可能出现繁简混杂现象，影响用户体验。',
			'zh-hant': '您確定要取消嗎？取消後，介面可能出現繁簡混雜現象，影響使用者體驗。',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
