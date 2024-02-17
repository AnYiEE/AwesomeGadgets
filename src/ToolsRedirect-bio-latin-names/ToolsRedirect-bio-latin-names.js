'use strict';
/* <nowiki> */
/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <zh.wikipedia.org/wiki/Special:Permalink/61193369>
 * @dependency ext.gadget.ToolsRedirect
 */
mw.loader.using(['ext.gadget.ToolsRedirect'], function () {
    var prefixReg = /[学學]名\s*：?\s*$/;
    var colonReg = /^\s*[:：]?\s*$/;
    var tr = mw.toolsRedirect;
    tr.findRedirectCallback(function (_pagename, $content) {
        var retTitles = [];
        $content.find('> p > [lang="la"], > p > i').each(function () {
            var title;
            var prevNode = this.previousSibling;
            if (prevNode && colonReg.test(prevNode.textContent)) {
                prevNode = prevNode.previousSibling;
            }
            if (prevNode && prefixReg.test(prevNode.textContent)) {
                // trim() is not supported by IE<9
                title = jQuery(this)
                    .text()
                    .replace(/^\s+|\s+$/g, '');
                retTitles.push(title);
                tr.setRedirectTextSuffix(title, '\n{{学名重定向}}');
            }
        });
        return jQuery.uniqueSort(retTitles);
    });
});