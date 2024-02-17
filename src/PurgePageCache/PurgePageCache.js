/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/PurgePageCache>
 * @dependency ext.gadget.Ding, ext.gadget.i18n, mediawiki.api, mediawiki.util
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
$(function purgePageCache() {
  var _element$querySelecto;
  if (mw.config.get('wgAction') !== 'view' || !mw.config.get('wgIsArticle') || mw.config.get('wgCurRevisionId') === 0 || mw.config.get('wgRevisionId') === 0 || mw.config.get('wgCurRevisionId') !== mw.config.get('wgRevisionId')) {
    return;
  }
  var i18nMessages = function i18nMessages() {
    var _i18n = i18n,
      localize = _i18n.localize;
    return {
      Failed: localize({
        en: 'Failed to purge cache. Please try again later',
        'zh-hans': '清除失败，请稍后重试',
        'zh-hant': '清除失敗，請稍后重試'
      }),
      Purge: localize({
        en: 'Purge cache',
        'zh-hans': '清除缓存',
        'zh-hant': '清除快取'
      }),
      PurgeFromServer: localize({
        en: 'Purge cache from the server',
        'zh-hans': '更新服务器缓存',
        'zh-hant': '更新伺服器快取'
      }),
      Purging: localize({
        en: 'Purging cache...',
        'zh-hans': '正在清除……',
        'zh-hant': '正在清除……'
      })
    };
  };
  var messages = i18nMessages();
  var message = function message(key) {
    return messages[key] || key;
  };
  var ding = function ding(value) {
    var autoHide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';
    autoHide ? DingExposedInterface(value, type) : DingExposedInterface(value, type, 'long');
  };
  var purgePageCacheMain = function purgePageCacheMain(event, title) {
    event.preventDefault();
    ding(message('Purging'), false);
    var api = new mw.Api({
      ajax: {
        headers: {
          'Api-User-Agent': "YsArxiv/1.1 (PurgePageCache/1.1; ".concat(mw.config.get('wgWikiID'), ")")
        }
      }
    });
    var params = {
      action: 'purge',
      format: 'json',
      formatversion: '2',
      titles: title,
      forcelinkupdate: true
    };
    api.post(params).then(function () {
      localStorage.removeItem("MediaWikiModuleStore:".concat(mw.config.get('wgWikiID')));
      location.reload();
    }).catch(function (error) {
      console.error("[PurgePageCache] Ajax error:", error);
      ding(message('Failed'), false, 'warning');
    });
  };
  Array.prototype.forEach.call(document.querySelectorAll('a[href*="action=purge"]'), function (_element) {
    var _params$get;
    var params = new URL(_element.href).searchParams;
    var title = (_params$get = params.get('title')) !== null && _params$get !== void 0 ? _params$get : mw.config.get('wgPageName');
    _element.addEventListener('click', function (event) {
      purgePageCacheMain(event, title);
    });
  });
});
/* </nowiki> */
