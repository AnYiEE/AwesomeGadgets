'use strict';
/* <nowiki> */
/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-opt-bolds.js>
 * @dependency ext.gadget.ToolsRedirect
 */
(function (mw) {
    mw.loader.using(['ext.gadget.ToolsRedirect'], function () {
        mw.toolsRedirect.findRedirectBySelector('div#mw-content-text p > b');
    });
})(mediaWiki);