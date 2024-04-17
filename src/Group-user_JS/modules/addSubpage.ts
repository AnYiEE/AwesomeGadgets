import {getMessage} from './i18n';

/* 向侧边栏添加“子页面”菜单 */
const addSubpage = (): void => {
	const {wgNamespaceNumber, wgPageName} = mw.config.get();

	if ([-1, 0, 14].includes(wgNamespaceNumber)) {
		return;
	}

	mw.util.addPortletLink(
		'p-tb',
		mw.util.getUrl(`Special:PrefixIndex/${wgPageName}`),
		getMessage('Subpages'),
		't-subpage'
	);
};

export {addSubpage};
