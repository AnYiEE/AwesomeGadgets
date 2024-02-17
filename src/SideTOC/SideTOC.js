/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/SiteTOC>
 * @dependency ext.gadget.i18n, mediawiki.storage, mediawiki.util
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
// 仅保留平滑滚动部分；核心部分已移动至主题内部.
'use strict';
$(function () {
  window.setTimeout(function () {
    $('#toc a, #site-toc a').each(function () {
      $(this).on('click', function () {
        $('html, body').animate({
          scrollTop: "".concat($($(this).attr('href')).offset().top - 60, "px")
        }, {
          duration: 660,
          easing: 'swing'
        });
        return false;
      });
    });
  }, 0);
});

/* </nowiki> */
