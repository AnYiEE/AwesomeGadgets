/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://zh.wikipedia.org/wiki/MediaWiki:Gadget-edit0.js>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/Edit0>
 * @dependency ext.gadget.i18n, mediawiki.util
 */
/**
 * +--------------------------------------------------------+
 * |         === WARNING: GLOBAL GADGET FILE ===            |
 * +--------------------------------------------------------+
 * |      All changes should be made in the repository,     |
 * |              otherwise they will be lost.              |
 * +--------------------------------------------------------+
 * |        Changes to this page affect many users.         |
 * |  Please discuss changes at Talk page before editing.   |
 * +--------------------------------------------------------+
 */
/* <nowiki> */
'use strict';

$(function edit0() {
  if (!(['view', 'purge'].indexOf(mw.config.get('wgAction')) !== -1) || mw.config.get('wgNamespaceNumber') < 0) {
    return;
  }
  var _i18n = i18n,
    localize = _i18n.localize;
  var localTitle = localize({
    en: 'Edit lead section',
    ja: '最初の段落を編集',
    'zh-hans': '编辑首段',
    'zh-hant': '編輯首段'
  });
  var $ourContent = $('#content, #mw_content').first();
  var $span1 = $ourContent.find('span.mw-editsection:not(.plainlinks)').first();
  if (!$span1.length) {
    return;
  }
  var $span0 = $span1.clone();
  $('body:not(.skin-citizen) #content h1#firstHeading').append($span0);
  $('body.skin-citizen .mw-indicators').prepend($span0);
  $span0.find('a').each(function (_index, element) {
    var $a = $(element);
    var href = $a.attr('href') || '';
    $a.attr('title', localTitle);
    if (!/&(ve|)section=T/.test(href)) {
      // not transcluded
      $a.attr('href', href.replace(/&(ve|)section=\d+/, '&$1section=0&summary=/*%20top%20*/%20'));
    } else if (/&vesection=/.test(href)) {
      // transcluded, VE
      $a.attr('href', "".concat(mw.util.getUrl(mw.config.get('wgPageName')), "?veaction=edit&vesection=0&summary=/*%20top%20*/%20"));
    } else {
      // transcluded, not VE
      $a.attr('href', "".concat(mw.util.getUrl(mw.config.get('wgPageName')), "?action=edit&section=0&summary=/*%20top%20*/%20"));
    }
  });
});
/* </nowiki> */
