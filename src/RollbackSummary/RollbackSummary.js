/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://zh.wikipedia.org/wiki/MediaWiki:Gadget-rollback-summary.js>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/RollbackSummary>
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
$(function rollbackSummary() {
  mw.messages.set({
    'rollback-summary-custom': window.wgULS('回退[[Special:Contributions/$1|$1]]（[[User talk:$1|对话]]）的编辑：', '回退[[Special:Contributions/$1|$1]]（[[User talk:$1|對話]]）的編輯：'),
    'rollback-summary-nouser': window.wgULS(undefined, undefined, '回退已隐藏用户的编辑：', '回退已隱藏使用者的編輯：', '回退已隱藏用戶的編輯：')
  });
  var updateLinks = function updateLinks() {
    $('.mw-rollback-link a').off('click');
    $('.mw-rollback-link a').on('click', function (event) {
      event.preventDefault();
      var href = this.href;
      var summary = prompt(window.wgULS('请输入自定义回退摘要（留空则使用系统默认摘要）', '請輸入自定義回退摘要（留空則使用系統預設摘要）'));
      if (summary === null) {
        return;
      } else if (summary === '') {
        location.assign(href);
      } else {
        var username = mw.util.getParamValue('from', href);
        username ? summary = mw.message('rollback-summary-custom', username).plain() + summary : summary = mw.message('rollback-summary-nouser').plain() + summary;
        href += "&summary=".concat(encodeURIComponent(summary));
        location.assign(href);
      }
    }).css('color', '#099');
  };
  mw.hook('wikipage.content').add(function () {
    updateLinks();
  });
});
/* </nowiki> */
