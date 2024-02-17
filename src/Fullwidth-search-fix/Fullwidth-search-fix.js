/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://zh.wikipedia.org/wiki/MediaWiki:Gadget-fullwidth-search-fix.js>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/FullwidthSearchFix>
 * @dependency ext.gadget.i18n, mediawiki.util
 */
/**
 * +--------------------------------------------------------+
 * |         === WARNING: GLOBAL GADGET FILE ===            |
 * +--------------------------------------------------------+
 * |      All changes should be made in the repository,     |
 * |              otherwise they will be lost.              |
 * +--------------------------------------------------------+
 * |      Changes to this page may affect many users.       |
 * |  Please discuss changes at talk page before editing.   |
 * +--------------------------------------------------------+
 */
/* <nowiki> */
$(function fullWidthSearchFix() {
  // don't be too aggresive. just fix some obvious typos
  var searchTerm = mw.util.getParamValue('search');
  if (searchTerm !== null && mw.util.getParamValue('fulltext') === null) {
    // namespace names
    var colonIndex = searchTerm.indexOf('：');
    if (colonIndex !== -1) {
      var namespace = searchTerm.slice(0, Math.max(0, colonIndex));
      var pageName = searchTerm.slice(Math.max(0, colonIndex + 1));
      if (mw.config.get('wgNamespaceIds')[namespace.toLowerCase()]) {
        // valid namespace
        var url = "".concat(mw.config.get('wgScript'), "?search=").concat(encodeURIComponent("".concat(namespace, ":").concat(pageName)));
        mw.notify("".concat(window.wgULS('重定向', '重新導向'), "\u81F3").concat(namespace, ":").concat(pageName), {
          tag: 'fullWidthSearchFix',
          type: 'success'
        });
        location.href = url;
      }
    }
  }
});
/* </nowiki> */
