import './Edittools-refToolbar.less';
import {IS_WG_EDIT_OR_SUBMIT_ACTION, WG_PAGE_CONTENT_MODEL} from './modules/constant';
import {refToolbar2} from './modules/RefToolbar2.0';
import {refToolbarBase} from './modules/RefToolbarBase';
import {refToolbarMesages} from './modules/messages';

/**
 * RefToolbar
 *
 * Adds tools for citing references to the edit toolbar.
 * One of two possible versions will load (Reftoolbar 1.0 or Reftoolbar 1.0)
 * depending on the user preferences (the usebetatoolbar preference).
 *
 * @author Mr.Z-man, Kaldari
 */
((): void => {
	// Guard against double inclusions
	if (mw.config.get('wgRefToolbarInstalled')) {
		return;
	}
	// Set guard
	mw.config.set('wgRefToolbarInstalled', true);

	// Only execute when editing/previewing wikitext pages
	if (!IS_WG_EDIT_OR_SUBMIT_ACTION || WG_PAGE_CONTENT_MODEL !== 'wikitext') {
		return;
	}

	if (!mw.user.options.get('usebetatoolbar')) {
		return;
	}

	if (document.querySelector('input[name=wpTextbox1][readonly]')) {
		return;
	}

	// Load local messages.
	refToolbarMesages();
	// Load main functions
	refToolbarBase();
	void refToolbar2();
})();
