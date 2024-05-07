import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Dismiss: localize({
			en: 'Turn off this notice',
			ja: 'ASNをオフにする',
			'zh-hans': '关闭公告',
			'zh-hant': '關閉公告',
		}),
		DismissNotice: localize({
			en: 'You have chosen to turn off Advanced Site Notices for the next 30 days. <br>If the site-wide announcement is not updated within the next 30 days, it will no longer be displayed; however, if the site-wide announcement is updated, it will be displayed again.',
			ja: '今後30日間、ASNをオフにすることを選択しました。<br>サイト全体の通知が今後30日以内に更新されない場合、表示されなくなります。ただし、サイト全体の通知が更新される場合は、再び表示されます。',
			'zh-hans':
				'您已选择在接下来30日内关闭“高级站点通告”。<br>若接下来30日内全站公告未有更新，则不再显示；但是，若全站公告内容更新，则将重新显示。',
			'zh-hant':
				'您已選擇在接下來30日內關閉「高級站點通告」。<br>若接下來30日內全站公告未有更新，則不再顯示；但是，若全站公告內容更新，則將重新顯示。',
		}),
		Title: localize({
			en: 'Announcement',
			ja: '通知',
			zh: '公告',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
