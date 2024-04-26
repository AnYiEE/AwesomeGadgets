import './Edittools-refToolbar.less';
import {getBody} from 'ext.gadget.Util';
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
	const {wgAction, wgPageContentModel} = mw.config.get();

	// Only execute when editing/previewing wikitext pages
	if (!['edit', 'submit'].includes(wgAction) || wgPageContentModel !== 'wikitext') {
		return;
	}

	if (!mw.user.options.get('usebetatoolbar')) {
		return;
	}

	if (document.querySelector('textarea[name=wpTextbox1][readonly]')) {
		return;
	}

	// Load local messages.
	refToolbarMesages();
	// Load main functions
	refToolbarBase();
	void getBody().then(refToolbar2);
})();
