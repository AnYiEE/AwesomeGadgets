import {getMessage} from './i18n';

const addLog = (): void => {
	const {wgNamespaceNumber, wgPageName} = mw.config.get();

	if ([-1, 2, 3].includes(wgNamespaceNumber)) {
		return;
	}

	mw.util.addPortletLink(
		'p-tb',
		mw.util.getUrl('Special:Logs', {
			page: wgPageName,
		}),
		getMessage('Log'),
		't-log'
	);
};

export {addLog};
