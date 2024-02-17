/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
 *
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/FloatTOC>
 * @author 安忆 <i@anyi.in>
 * @dependency ext.gadget.i18n, mediawiki.notification, mediawiki.storage, mediawiki.util, oojs-ui.styles.icons-editing-citation, oojs-ui.styles.icons-interactions, oojs-ui.styles.icons-movement
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
$(function floatTOC() {
  var _toc$querySelector, _toc$querySelector2;
  var skin = mw.config.get('skin');
  if (mw.config.get('wgAction') !== 'view' || !(['citizen', 'vector'].indexOf(skin) !== -1) || !('IntersectionObserver' in window)) {
    return;
  }
  var originToc = document.querySelector('#toc');
  if (!originToc) {
    return;
  }
  var i18nMessages = function i18nMessages() {
    var _i18n = i18n,
      localize = _i18n.localize;
    return {
      Close: localize({
        ja: '閉じる',
        'zh-hans': '关闭',
        'zh-hant': '關閉'
      }),
      Contents: localize({
        ja: '目次',
        zh: '目录'
      }),
      Collapse: localize({
        ja: '折り畳み',
        'zh-hans': '折叠',
        'zh-hant': '摺叠'
      }),
      Expand: localize({
        ja: '展開',
        'zh-hans': '展开',
        'zh-hant': '展開'
      })
    };
  };
  var messages = i18nMessages();
  var message = function message(key) {
    return messages[key] || key;
  };
  var ID = 'floatTOC';
  var config = mw.storage.getObject(ID);
  if (!config) {
    config = {
      floatTOC: window.outerHeight < window.outerWidth ? 'open' : 'close',
      originTOC: 'open'
    };
  }
  var style = mw.util.addCSS('.mw-notification-area{right:unset;width:auto;max-width:20em}.mw-notification{-webkit-transform:translateX(-999px);-moz-transform:translateX(-999px);transform:translateX(-999px)}.mw-notification-visible{-webkit-transform:translateX(0);-moz-transform:translateX(0);transform:translateX(0)}');
  style.disabled = true;
  var toc = originToc.cloneNode(true);
  (_toc$querySelector = toc.querySelector('input')) === null || _toc$querySelector === void 0 ? void 0 : _toc$querySelector.remove();
  (_toc$querySelector2 = toc.querySelector('.toctogglespan')) === null || _toc$querySelector2 === void 0 ? void 0 : _toc$querySelector2.remove();
  var $toc = $(toc);
  var $floatToc = $toc.clone().removeAttr('id').prepend($('<span>').addClass('oo-ui-indicatorElement-indicator oo-ui-icon-close').attr({
    id: 'close',
    title: message('Close'),
    role: 'button',
    tabindex: '0'
  }));
  var $floatTocOpener = $('<div>').attr({
    'class': 'noprint',
    id: 'floatToc-opener',
    title: message('Contents'),
    role: 'button',
    tabindex: '0'
  }).append($('<span>').addClass('oo-ui-indicatorElement-indicator oo-ui-icon-reference'), $('<span>').text(message('Contents'))).hide().appendTo(document.body);
  var isShow;
  var preNotification;
  var disableStyleTimer;
  var checkPressedKey = function checkPressedKey(event) {
    if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') {
      return true;
    }
    return false;
  };
  var disableStyle = function disableStyle() {
    if (disableStyleTimer) {
      clearTimeout(disableStyleTimer);
    }
    disableStyleTimer = setTimeout(function () {
      if (!isShow) {
        style.disabled = true;
      }
    }, 5000);
  };
  var storeState = function storeState(target, state) {
    config[target] = state;
    mw.storage.setObject(ID, config);
  };
  var collapseOriginToc = function collapseOriginToc() {
    if (skin !== 'citizen') {
      return;
    }
    var isCollapse = config.originTOC === 'close';
    var $originTocTitle = $('#toc .toctitle');
    var $originTocItem = $('#toc ul');
    var $tocToggle = $('<span>').addClass('oo-ui-indicatorElement-indicator oo-ui-icon-downTriangle');
    var getToggleElement = function getToggleElement() {
      var $element = $tocToggle.clone();
      $element = isCollapse ? $element.attr('title', message('Expand')) : $element.attr('title', message('Collapse')).addClass('collapse');
      return $element;
    };
    var collapseToggle = function collapseToggle() {
      var $element = $originTocTitle.find('.oo-ui-indicatorElement-indicator');
      $element.toggleClass('collapse');
      if (isCollapse) {
        $element.attr('title', message('Expand'));
      } else {
        $element.attr('title', message('Collapse'));
      }
    };
    $originTocTitle.append(getToggleElement());
    $originTocTitle.on('click', function () {
      isCollapse = !isCollapse;
      isCollapse ? storeState('originTOC', 'close') : storeState('originTOC', 'open');
      collapseToggle();
      $originTocItem.fadeToggle();
    });
    if (isCollapse) {
      $originTocItem.fadeOut();
    }
  };
  var smoothScroll = function smoothScroll(event) {
    if (skin === 'citizen') {
      return;
    }
    var target = event.target;
    var $target = $(target).parent();
    var href = $target.attr('href');
    if (!href) {
      return;
    }
    var anchorOffset = $(href).offset();
    if (!anchorOffset) {
      return;
    }
    event.preventDefault();
    $('html, body').animate({
      scrollTop: "".concat(anchorOffset.top, "px")
    }, {
      duration: 660,
      easing: 'swing'
    });
  };
  var closeNotification = function closeNotification(notification) {
    notification.close();
    $floatTocOpener.fadeIn();
    storeState('floatTOC', 'close');
    disableStyle();
  };
  var tocToggle = function tocToggle() {
    var _preNotification2;
    var _isShow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var _preNotification = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    (_preNotification2 = _preNotification) === null || _preNotification2 === void 0 ? void 0 : _preNotification2.close();
    isShow = !!_isShow;
    switch (_isShow) {
      case true:
        if (config.floatTOC === 'close') {
          $floatTocOpener.fadeIn();
          return;
        }
        break;
      case 'open':
        $floatTocOpener.fadeOut();
        storeState('floatTOC', 'open');
        break;
      default:
        $floatTocOpener.fadeOut();
        disableStyle();
        return;
    }
    style.disabled = false;
    if (_preNotification) {
      _preNotification.start();
    } else {
      _preNotification = mw.notification.notify($floatToc, {
        classes: 'noprint',
        id: ID,
        autoHide: false
      });
      var notificationHandler = function notificationHandler(event) {
        if (checkPressedKey(event)) {
          return;
        }
        event.stopPropagation();
        var target = event.target;
        if (target.id === 'close') {
          closeNotification(_preNotification);
        } else {
          smoothScroll(event);
        }
      };
      _preNotification.$notification.on('click', notificationHandler);
      _preNotification.$notification.on('keydown', notificationHandler);
    }
    return _preNotification;
  };
  // eslint-disable-next-line compat/compat
  var observer = new IntersectionObserver(function (entries) {
    var _entries = _slicedToArray(entries, 1),
      entry = _entries[0];
    if (!entry) {
      return;
    }
    var intersectionRatio = entry.intersectionRatio;
    preNotification = tocToggle(intersectionRatio === 0, preNotification);
  });
  observer.observe(originToc);
  collapseOriginToc();
  var openerHandler = function openerHandler(event) {
    if (checkPressedKey(event)) {
      return;
    }
    preNotification = tocToggle('open');
  };
  $floatTocOpener.on('click', openerHandler);
  $floatTocOpener.on('keydown', openerHandler);
});
/* </nowiki> */