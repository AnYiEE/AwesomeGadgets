/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://zh.wikipedia.org/w/index.php?oldid=65190708>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/Wikicache>
 * @dependency ext.gadget.i18n, jquery.ui, mediawiki.storage, mediawiki.util
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
var _objectHasOwn = function (object, property) {
  if (typeof object === 'undefined' || object === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  return Object.prototype.hasOwnProperty.call(Object(object), property);
};
(function wikicache() {
  window.wikiCache = {
    version: '0.3.0',
    _msgs: {
      'no-reminder': '不再提醒',
      more: wgULS('更多信息', '更多資訊'),
      ok: wgULS('确定', '確認'),
      load: wgULS('载入', '載入'),
      ignore: wgULS('忽略', '忽略'),
      'bracket-left': '（',
      'bracket-right': '）',
      'not-support': wgULS('抱歉，您的浏览器无法支持WikiCache，若您打算使用WikiCache，请更新您的浏览器。', '抱歉，您的瀏覽器無法支援WikiCache，若您打算使用WikiCache，請升級您的瀏覽器。'),
      'not-support-title': wgULS('浏览器过旧', '瀏覽器過舊'),
      'not-support-more-link': 'H:IE',
      'notice-init': wgULS('自动保存已启用。', '自動存檔已啟用。'),
      'notice-more': wgULS('配置', '設定'),
      'notice-load': wgULS('载入上次存档', '載入上次存檔'),
      'notice-autosave-success': wgULS('自动保存成功。', '自動存檔成功。'),
      'notice-autosave-failed': wgULS('自动保存失败，可能是由于已超出浏览器所允许空间上限。', '自動存檔失敗，可能是由於已超過瀏覽器所許可空間上限。'),
      'notice-autosave-failed-clear': wgULS('清理', '清理'),
      'notice-load-available': wgULS('发现自动保存结果，是否载入？', '發現自動存檔，是否載入？'),
      'notice-load-available-confirm': wgULS('载入', '載入'),
      'notice-load-available-ignore': wgULS('忽略', '忽略'),
      'settings-title': wgULS('WikiCache配置', 'WikiCache設定'),
      'settings-autosave-interval': wgULS('自动保存间隔：', '自動保存間隔：'),
      'settings-autosave-interval-suffix': wgULS('秒', '秒'),
      'settings-autosave-interval-too-small': wgULS('错误：“自动保存间隔”所设间隔过小（<10秒），请重新设置', '錯誤：「自動保存間隔」所設間隔過小（<10秒），請重新設定'),
      'settings-autosave-interval-invalid': wgULS('错误：请在“自动保存间隔”输入框中输入数字', '錯誤：請在「自動保存間隔」輸入框輸入數字')
    },
    _settings: {
      'autosave-interval': 60
    },
    _style: '.wikicache-dialog{font-size:1em}.wikicache-notice{position:fixed;bottom:0;left:0;z-index:99;display:none;height:1.6em;border-right:1px solid #a7d7f9;border-bottom:1px solid #a7d7f9;white-space:nowrap;font-size:.8em;line-height:1.6em}.wikicache-notice .ui-dialog-titlebar-close{float:right;display:inline-block}.wikicache-dialog a,.wikicache-notice a{color:#0645ad}.wikicache-dialog a:visited,.wikicache-notice a:visited{color:#0b0080}.wikicache-error-message{padding-left:60px;min-height:48px;background:url("//tu.zhongwen.wiki/images/qiuwen/thumb/0/09/Cross_Mark_(Red).svg/48px-Cross_Mark_(Red).svg.png") no-repeat 0}',
    _autoSaveArea: {
      '#wpTextbox1': function wpTextbox1(el, val) {
        if (val) {
          el.val(val);
        } else {
          return el.val();
        }
      },
      '#wpSummary': function wpSummary(el, val) {
        if (val) {
          el.val(val);
        } else {
          return el.val();
        }
      }
    },
    init: function init() {
      var action = mw.config.get('wgAction');
      if (['edit', 'submit'].indexOf(action) !== -1) {
        window.wikiCache._initEdit();
      } else if (action === 'view') {
        window.wikiCache._initView();
      }
    },
    _initView: function _initView() {
      if (window.localStorage) {
        mw.util.addCSS(window.wikiCache._style);
        window.wikiCache._loadSettings();
      }
    },
    _initEdit: function _initEdit() {
      mw.util.addCSS(window.wikiCache._style);
      var errorDialog = window.wikiCache._errorDialog;
      var msgs = window.wikiCache._msgs;
      if (!window.localStorage) {
        errorDialog(0, msgs['not-support-title'], msgs['not-support'], mw.util.getUrl(msgs['not-support-more-link']));
        return;
      }
      $('#editform').on('wikiCacheSettingsUpdate', window.wikiCache._autoSave).on('submit', window.wikiCache._onSubmit);
      window.wikiCache._loadSettings();
      window.wikiCache._defaultNotice();
      if (window.location.hash.indexOf('wikicache=autoload') !== -1) {
        window.wikiCache._load();
      } else {
        window.wikiCache._initLoad();
      }
    },
    _loadSettings: function _loadSettings() {
      var settings = mw.storage.getObject('wikicache-settings');
      if (settings instanceof Object) {
        $.extend(window.wikiCache._settings, settings);
      }
      $('#editform').trigger('wikiCacheSettingsUpdate');
    },
    _saveSettings: function _saveSettings() {
      mw.storage.setObject('wikicache-settings', window.wikiCache._settings);
      $('#editform').trigger('wikiCacheSettingsUpdate');
    },
    _errorDialog: function _errorDialog(code, title, msg, more) {
      var noreminderid = "no-reminder-".concat(code);
      if (mw.storage.get(noreminderid)) {
        return;
      }
      var msgs = window.wikiCache._msgs;
      var buttons = {};
      buttons[msgs['ok']] = function () {
        $(this).dialog('close').remove();
      };
      $('<div>').addClass('wikicache-dialog wikicache-error').attr('title', title).append($('<div>').addClass('wikicache-error-message').html("".concat(msg, "&nbsp;").concat(msgs['bracket-left'])).append($('<a>').attr('href', more).html(msgs.more)).append(msgs['bracket-right'])).append($('<p>').append($('<input>').attr({
        id: noreminderid,
        type: 'checkbox',
        name: 'noreminder'
      })).append($('<label>').attr('for', noreminderid).html(msgs['no-reminder']))).appendTo($('body')).dialog({
        draggable: false,
        modal: true,
        width: 450,
        beforeClose: function beforeClose() {
          if ($("#".concat(noreminderid), this).attr('checked')) {
            mw.storage.set(noreminderid, '1');
          }
        },
        buttons: buttons
      });
    },
    _defaultNotice: function _defaultNotice() {
      var msgs = window.wikiCache._msgs;
      var more = {};
      more[msgs['notice-more']] = window.wikiCache._settingsDialog;
      more[msgs['notice-load']] = function () {
        window.wikiCache._load();
      };
      window.wikiCache._notice(msgs['notice-init'], more);
    },
    _notice: function _notice(msg, more) {
      var notice = $('#wikicache-notice');
      if (notice.length === 0) {
        notice = $('<div>').addClass('ui-widget-content wikicache-notice').attr('id', 'wikicache-notice');
      }
      notice.empty().off('mouseenter').off('mouseleave').append(msg).appendTo($('body')).fadeIn();
      if (more instanceof Object) {
        notice.on('mouseenter', function () {
          var msgs = window.wikiCache._msgs;
          var element = $('<span>').addClass('wikicache-more').appendTo(notice).append(msgs['bracket-left']);
          var first = true;
          element.appendTo(notice);
          for (var message in more) {
            if (_objectHasOwn(more, message)) {
              if (first) {
                first = false;
              } else {
                element.append('&nbsp;|&nbsp;');
              }
              element.append($('<a>').attr('href', '#').html(message).on('click', more[message]));
            }
          }
          element.append(msgs['bracket-right']);
        }).on('mouseleave', function () {
          $('.wikicache-more', this).remove();
        });
      }
    },
    _settingsDialog: function _settingsDialog() {
      var msgs = window.wikiCache._msgs;
      var settings = window.wikiCache._settings;
      var buttons = {};
      buttons[msgs['ok']] = function () {
        $(this).dialog('close');
      };
      var dialog = $('<div>').addClass('wikicache-dialog').attr('title', msgs['settings-title']).append($('<p>').append($('<label>').attr('for', 'autosave-interval').html(msgs['settings-autosave-interval'])).append($('<input>').attr({
        id: 'autosave-interval',
        type: 'text',
        size: 5
      }).val(settings['autosave-interval'])).append("&nbsp;".concat(msgs['settings-autosave-interval-suffix'])));
      dialog.appendTo($('body')).dialog({
        draggable: false,
        modal: true,
        width: 400,
        beforeClose: function beforeClose() {
          var interval = $('#autosave-interval', dialog).val();
          if (Number.isNaN(interval)) {
            mw.notify(msgs['settings-autosave-interval-invalid'], {
              tag: 'wikiCache',
              type: 'error'
            });
            return false;
          }
          interval = Number.parseInt(interval, 10);
          if (interval < 10) {
            mw.notify(msgs['settings-autosave-interval-too-small'], {
              tag: 'wikiCache',
              type: 'error'
            });
            return false;
          }
          settings['autosave-interval'] = interval;
          window.wikiCache._saveSettings();
        },
        buttons: buttons
      });
      return false;
    },
    _autoSaveId: null,
    _autoSave: function _autoSave() {
      clearTimeout(window.wikiCache._autoSaveId);
      window.wikiCache._autoSaveId = setTimeout(function () {
        window.wikiCache._save();
        window.wikiCache._autoSave();
      }, window.wikiCache._settings['autosave-interval'] * 1000);
    },
    _save: function _save() {
      var asarea = window.wikiCache._autoSaveArea;
      var autosave = {
        _path: window.location.pathname + window.location.search,
        _date: new Date()
      };
      for (var sele in asarea) {
        if (!_objectHasOwn(asarea, sele)) {
          continue;
        }
        autosave[sele] = asarea[sele]($(sele));
      }
      var thekey = "wikicache-autosave-".concat(mw.config.get('wgPageName'));
      var section = $('input[name="wpSection"]:first').val();
      if (section) {
        thekey += "_".concat(section);
      }
      mw.storage.setObject(thekey, autosave, 2592e3); // 30 days
      setTimeout(window.wikiCache._defaultNotice, 1000);
    },
    _initLoad: function _initLoad() {
      var msgs = window.wikiCache._msgs;
      var thekey = "wikicache-autosave-".concat(mw.config.get('wgPageName'));
      var section = $('input[name="wpSection"]:first').val();
      if (section) {
        thekey += "_".concat(section);
      }
      var autosave = mw.storage.getObject(thekey);
      if (autosave instanceof Object) {
        var more = {};
        more[msgs['notice-load-available-confirm']] = function () {
          window.wikiCache._load(autosave);
          return false;
        };
        more[msgs['notice-load-available-ignore']] = function () {
          window.wikiCache._defaultNotice();
          window.wikiCache._autoSave();
          return false;
        };
        window.wikiCache._notice(msgs['notice-load-available'], more);
        clearTimeout(window.wikiCache._autoSaveId);
      }
    },
    _load: function _load(autosave) {
      var _autosave;
      if (autosave instanceof Object) {
        _autosave = autosave;
      } else {
        var thekey = "wikicache-autosave-".concat(mw.config.get('wgPageName'));
        var section = $('input[name="wpSection"]:first').val();
        if (section) {
          thekey += "_".concat(section);
        }
        _autosave = mw.storage.getObject(thekey);
      }
      var asarea = window.wikiCache._autoSaveArea;
      for (var sele in asarea) {
        if (!_objectHasOwn(asarea, sele)) {
          continue;
        }
        asarea[sele]($(sele), _autosave[sele]);
      }
      window.wikiCache._defaultNotice();
      window.wikiCache._autoSave();
    },
    _onSubmit: function _onSubmit() {
      window.wikiCache._save();
      var thekey = "wikicache-autosave-".concat(mw.config.get('wgPageName'));
      var section = $('input[name="wpSection"]:first').val();
      if (section) {
        thekey += "_".concat(section);
      }
      mw.storage.remove(thekey);
    }
  };
  $(window.wikiCache.init);
})();
/* </nowiki> */
