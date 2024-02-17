'use strict';
/* <nowiki> */
/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <zh.wikipedia.org/wiki/MediaWiki:Gadget-refToolbar.js>
 */
/**
 * from <en.wikipedia.org/wiki/Wikipedia:RefToolbar/2.0>
 * RefToolbar
 *
 * Adds tools for citing references to the edit toolbar.
 * One of two possible versions will load (Reftoolbar 1.0 or Reftoolbar 1.0)
 * depending on the user preferences (the usebetatoolbar preference).
 *
 * @see: [[MediaWiki:Gadget-RefToolbar2.0.js]]
 * @see: [[MediaWiki:Gadget-RefToolbarConfig.js]]
 * @see: [[MediaWiki:Gadget-RefToolbarLegacy.js]]
 * @see: [[MediaWiki:Gadget-RefToolbarMessages.js]]
 * @see: [[MediaWiki:Gadget-RefToolbarMessages-en.js]]
 * @see: [[MediaWiki:Gadget-RefToolbarMessages-zh-hans.js]]
 * @see: [[MediaWiki:Gadget-RefToolbarMessages-zh-hant.js]]
 * @see: [[MediaWiki:Gadget-RefToolbarBase.js]]
 * @author: Mr.Z-man
 * @author: Kaldari
 */
(function ($, mw) {
    var initializeRefTools = function () {
        if (window.refToolbarInstalled || $('#wpTextbox1[readonly]').length > 0) {
            return;
        }
        if (mw.user.options.get('usebetatoolbar')) {
            // Enhanced editing toolbar is on. Going to load RefToolbar 2.0.
            $.getScript('/index.php?title=MediaWiki:Gadget-RefToolbarBase.js&action=raw&ctype=text/javascript&maxage=86400&smaxage=86400', function () {
                mw.loader.using(['ext.wikiEditor']).then(function () {
                    mw.loader.load('/index.php?title=MediaWiki:Gadget-RefToolbar2.0.js&action=raw&ctype=text/javascript&maxage=86400&smaxage=86400');
                });
            });
        }
        else if (mw.user.options.get('showtoolbar')) {
            // Enhanced editing toolbar is off. Loading RefToolbar 1.0. (legacy)
            mw.loader.load('/index.php?title=MediaWiki:Gadget-RefToolbarLegacy.js&action=raw&ctype=text/javascript&maxage=86400&smaxage=86400');
        }
        else {
            return;
        }
        window.refToolbarInstalled = true;
    };
    if (['edit', 'submit'].includes(mw.config.get('wgAction'))) {
        // Double check if user.options is loaded, to prevent errors when copy pasted accross installations
        $.when(mw.loader.using(['user.options']), $.ready).done(initializeRefTools);
    }
})(jQuery, mediaWiki);