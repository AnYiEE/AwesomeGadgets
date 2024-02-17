/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/QuickPatrol>
 * @base <https://meta.wikimedia.org/wiki/User:Xiplus/js/quick-patrol.js>
 * @dependency mediawiki.api, mediawiki.util, ext.gadget.i18n
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
(function () {
  var i18nMessages = function i18nMessages() {
    var _i18n = i18n,
      localize = _i18n.localize;
    return {
      Patrol: localize({
        'zh-hans': '巡查',
        'zh-hant': '巡查'
      }),
      'Patrol all pages': localize({
        'zh-hans': '巡查所有页面？',
        'zh-hant': '巡查全部頁面？'
      }),
      'Patrol all pages?': localize({
        'zh-hans': '确定巡查所有页面？',
        'zh-hant': '確定巡查全部頁面？'
      }),
      Patrolled: localize({
        'zh-hans': '已巡查',
        'zh-hant': '已巡查'
      }),
      'Failed to purge cache. Please try again later': localize({
        'zh-hans': '清除失败，请稍后重试',
        'zh-hant': '清除失敗，請稍后重試'
      }),
      'API failure': localize({
        'zh-hans': 'API失败',
        'zh-hant': 'API失敗'
      }),
      'AJAX failure': localize({
        'zh-hans': 'AJAX失败',
        'zh-hant': 'AJAX失敗'
      })
    };
  };
  var messages = i18nMessages();
  var message = function message(key) {
    return messages[key] || key;
  };
  var patrol = function patrol() {
    var btnid = this.getAttribute('data-btnid');
    var revid = this.getAttribute('data-revid');
    $.ajax({
      type: 'POST',
      url: "".concat(mw.config.get('wgScriptPath'), "/api.php"),
      data: {
        action: 'patrol',
        format: 'json',
        revid: revid,
        token: mw.user.tokens.get('patrolToken')
      },
      success: function success(data) {
        if (data.error !== undefined) {
          mw.notify("".concat(message('API failure'), "\uFF1A").concat(data.error.info), {
            type: 'error',
            tag: 'QuickPatrol'
          });
          document.getElementById("patrol_".concat(btnid)).style.color = '#F00';
        } else {
          document.getElementById("patrol_".concat(btnid)).innerHTML = message('Patrolled');
          document.getElementById("patrol_".concat(btnid)).style['pointer-events'] = 'none';
          document.getElementById("patrol_".concat(btnid)).style.color = '#888';
        }
      },
      error: function error() {
        mw.notify(message('AJAX failure'), {
          type: 'error',
          tag: 'QuickPatrol'
        });
        document.getElementById("patrol_".concat(btnid)).style.color = '#F00';
      }
    });
  };
  var partolall = function partolall() {
    if (!confirm(message('Patrol all pages?'))) {
      return;
    }
    for (var i = 0; i < document.getElementsByClassName('not-patrolled').length; i++) {
      if (document.getElementById("patrol_".concat(i)).style['pointer-events'] !== 'none') {
        document.getElementById("patrol_".concat(i)).click();
      }
    }
  };
  if (mw.config.get('wgCanonicalSpecialPageName') === 'Newpages') {
    for (var i = 0; i < document.getElementsByClassName('not-patrolled').length; i++) {
      var patrolbtn = $("<a>").attr({
        id: "patrol_".concat(i),
        'data-btnid': i,
        'data-revid': document.getElementsByClassName('not-patrolled')[i].children[0].href.match(/oldid=(\d+)/)[1]
      }).text(message('Patrol'));
      patrolbtn.on('click', patrol);
      patrolbtn.appendTo(document.getElementsByClassName('not-patrolled')[i]);
    }
    for (var _i = 0;; _i++) {
      if (document.getElementById('mw-content-text').children[_i] === undefined) {
        break;
      } else if (document.getElementById('mw-content-text').children[_i].tagName === 'UL') {
        var _patrolbtn = $('<li>').append($('<a>').attr('id', 'patrol_all').text(message('Patrol all pages')));
        _patrolbtn.on('click', partolall);
        _patrolbtn.appendTo(document.getElementById('mw-content-text').children[_i]);
      }
    }
  }
})();
/* </nowiki> */
