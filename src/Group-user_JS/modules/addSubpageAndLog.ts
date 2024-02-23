import {WG_NAMESPACE_NUMBER, WG_PAGE_NAME} from './constant';
import {getMessage} from './i18n';

const addLog = (): void => {
	if ([-1, 2, 3].includes(WG_NAMESPACE_NUMBER)) {
		return;
	}

	mw.util.addPortletLink(
		'p-tb',
		mw.util.getUrl('Special:Logs', {
			page: WG_PAGE_NAME,
		}),
		getMessage('Log'),
		't-log'
	);
};

/* 向侧边栏添加“子页面”菜单 */
const addSubpage = (): void => {
	if ([-1, 0, 14].includes(WG_NAMESPACE_NUMBER)) {
		return;
	}

	mw.util.addPortletLink(
		'p-tb',
		mw.util.getUrl(`Special:PrefixIndex/${WG_PAGE_NAME}`),
		getMessage('Subpages'),
		't-subpage'
	);
};

export {addLog, addSubpage};
