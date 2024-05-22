/**
 * Log filter script
 *
 * Created by Splarka
 * Amended by Mike.lifeguard & Lupo
 * Partially rewritten by DieBuche
 *
 * <li> element Filter Script, version [0.2]
 * Should currently work on all known skins (with a #contentSub or #topbar)
 *
 * mw.util.getUrl( mw.config.get( 'wgPageName' ) ) + '?' +
 * 'withJS=MediaWiki:Gadget-LogFilter.js&lifilter=1&lifilterexpr=TEST&lifiltercase&lifilterhilight&lifilterinv'
 */
import {REGEX_TARGET_PAGE, URL_LIFILTER, WG_ACTION, WG_CANONICAL_SPECIAL_PAGE_NAME} from './modules/constant';
import {LogFilter} from './modules/core';
import {getBody} from 'ext.gadget.Util';

(function logFilter(): void {
	// When to enable all this
	if (WG_ACTION !== 'history' && !URL_LIFILTER && !REGEX_TARGET_PAGE.test(WG_CANONICAL_SPECIAL_PAGE_NAME)) {
		return;
	}

	// Guard against double inclusions
	if (mw.config.get('wgLogFilterInstalled')) {
		return;
	}
	// Set guard
	mw.config.set('wgLogFilterInstalled', true);

	void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
		// Load
		new LogFilter($body).addPortletLink();
	});
})();
