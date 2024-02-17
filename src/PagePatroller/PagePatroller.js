/**
 * SPDX-License-Identifier: CC BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://zh.wikipedia.org/wiki/User:WhitePhosphorus/js/PagePatroller.js>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/PagePatroller>
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
$(function pagePatroller() {
  if (mw.config.get('wgNamespaceNumber') < 0 || mw.config.get('wgPageName') === '有兽档案馆:首页' || $('.noarticletext').length > 0) {
    return;
  }
  var weekdays = ['日', '一', '二', '三', '四', '五', '六'];
  var loading = window.wgULS('正在加载此页面的巡查者……', '正在加載此頁面的巡查者……');
  var $patroller;
  if (mw.config.get('skin') === 'citizen') {
    $patroller = $('<section>').attr('id', 'footer-info-patroller').addClass('page-info__item').text(loading);
  } else if (document.querySelector('#footer-info')) {
    $patroller = $('<li>').attr('id', 'footer-info-patroller').text(loading);
  } else {
    $patroller = $('<div>').attr('id', 'footer-info-patroller').text(loading);
  }
  $('#footer-info, .page-info').prepend($patroller);
  // 针对有巡查权限的用户优化。
  // 若页面上能看到巡查按钮，那一定没被巡查过。
  if ($('.patrollink').length) {
    $patroller.text(window.wgULS('此页面尚未被巡查。', '此頁面尚未被巡查。'));
    return;
  }
  $.ajax({
    url: mw.util.wikiScript('api'),
    data: {
      action: 'query',
      format: 'json',
      formatversion: '2',
      prop: 'revisions',
      titles: mw.config.get('wgPageName'),
      list: 'logevents',
      letype: 'patrol',
      letitle: mw.config.get('wgPageName'),
      rvprop: 'timestamp',
      rvlimit: 1,
      rvdir: 'newer'
    }
  }).done(function (_ref) {
    var query = _ref.query;
    var user;
    var ts;
    var cts = '';
    var action;
    var html = '';
    if (query && query.logevents && query.logevents.length) {
      var log = query.logevents[0];
      user = log.user;
      ts = log.timestamp;
      action = log.action;
      var date = new Date(ts);
      if (query.pages) {
        for (var id in query.pages) {
          var page = query.pages[id];
          if (page && page.revisions && page.revisions.length) {
            cts = page.revisions[0].timestamp;
            break;
          }
        }
      }
      if (cts && new Date(cts) > date) {
        html = '';
      } else {
        ts = "".concat(date.getUTCFullYear(), "\u5E74").concat(date.getUTCMonth() + 1, "\u6708").concat(date.getUTCDate(), "\u65E5 (\u661F\u671F").concat(weekdays[date.getUTCDay()], ") ").concat("0".concat(date.getUTCHours()).slice(-2), ":").concat("0".concat(date.getUTCMinutes()).slice(-2), " (UTC)");
        var p = mw.config.get('wgArticlePath');
        user = "<a href=\"".concat(p.replace('$1', "User:".concat(user)), "\">").concat(user, "</a>");
        if (action === 'patrol') {
          html = "".concat(window.wgULS('此页面于', '此頁面於') + ts, "\u7531").concat(user, "\u5DE1\u67E5\u3002");
        }
      }
    }
    if (html !== '') {
      $patroller.html(html);
    } else {
      $patroller.text(window.wgULS('此页面尚未被巡查，或已自动标为已巡查。', '此頁面尚未被巡查，或已自動標爲已巡查。'));
    }
  }).fail(function (_jqXHR, _textStatus, errorThrown) {
    console.error("[PagePatroller]: ".concat(errorThrown));
    $patroller.text(window.wgULS('查找巡查者时出现错误。', '查找巡查者時出現錯誤。'));
  });
});
/* </nowiki> */
