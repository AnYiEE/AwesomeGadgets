import type {TimeSpan} from './getLastActiveMarker';
import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		OverAYear: localize({
			en: 'Edited over a year ago',
			'zh-hans': '一年未有编辑',
			'zh-hant': '一年未有編輯',
		}),
		ThisWeek: localize({
			en: 'Edited this week',
			'zh-hans': '一周内有编辑',
			'zh-hant': '一周內有編輯',
		}),
		ThisMonth: localize({
			en: 'Edited this month',
			'zh-hans': '一月内有编辑',
			'zh-hant': '一月內有編輯',
		}),
		ThisSeason: localize({
			en: 'Edited in 3 months',
			'zh-hans': '三月内有编辑',
			'zh-hant': '三月內有編輯',
		}),
		ThisSemiyear: localize({
			en: 'Edited in half a year',
			'zh-hans': '半年内有编辑',
			'zh-hant': '半年內有編輯',
		}),
		ThisYear: localize({
			en: 'Edited this year',
			'zh-hans': '一年内有编辑',
			'zh-hant': '一年內有編輯',
		}),
	} satisfies Record<TimeSpan, string> & Record<string, string>;
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
