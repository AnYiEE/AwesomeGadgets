import {whoIsActive, whoIsActiveUserPage} from './modules/core';

(function whoIsActiveLoad() {
	if (mw.config.get('wgNamespaceNumber') < 0) {
		return;
	}

	mw.hook('wikipage.content').add(whoIsActive);
	void whoIsActiveUserPage();
})();
