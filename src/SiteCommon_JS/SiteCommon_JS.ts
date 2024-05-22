import {
	addTargetBlank,
	fixLocationHash,
	//hideNewUsersLog,
	highLightRev,
	loadWithURL,
	//noPermWarning,
	openSearchInNewTab,
	removeTitleFromPermalink,
	titleCleanUp,
	toggleLink,
	unihanPopup,
} from './modules/core';
import {tippyForCitizenHeader, tippyForExtension} from './modules/tippy';
import {deprecatedFunctions} from './modules/deprecatedFunctions';

(function siteCommon(): void {
	// Guard against double inclusions
	if (mw.config.get('wgSiteCommonInstalled')) {
		return;
	}
	// Set guard
	mw.config.set('wgSiteCommonInstalled', true);

	// Core modules
	loadWithURL();
	//noPermWarning();
	fixLocationHash();

	$((): void => {
		const $body: JQuery<HTMLBodyElement> = $('body');

		// Core modules (need $.ready)
		highLightRev($body);
		addTargetBlank($body);
		removeTitleFromPermalink($body);
		openSearchInNewTab($body);
		titleCleanUp($body);
		unihanPopup($body);
		//hideNewUsersLog($body);
		toggleLink($body);

		// Tippy-related codes (need $.ready)
		tippyForCitizenHeader($body);
	});

	// Deprecated functions
	deprecatedFunctions();

	// Tippy-related codes
	void tippyForExtension();
})();
