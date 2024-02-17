/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://zh.wikipedia.org/wiki/MediaWiki:Common.js>
 * @base <https://en.wikipedia.org/wiki/MediaWiki:Gadget-exlinks.js>
 * @base <https://meta.wikimedia.org/wiki/MediaWiki:Gadget-ShortLink.js>
 * @base <https://www.mediawiki.org/wiki/MediaWiki:Gadget-workinprogress.js>
 * @base <https://www.mediawiki.org/wiki/Snippets/Load_JS_and_CSS_by_URL>
 * @base <https://en.wikipedia.org/wiki/MediaWiki:Gadget-search-new-tab.js>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/SiteCommonJS>
 * @dependency ext.gadget.i18n, mediawiki.Title, mediawiki.util, oojs-ui-core
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
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
$(function siteCommonJS() {
  var _$toggle$parent$;
  if (window.SiteCommonJSInstalled) {
    return;
  }
  window.SiteCommonJSInstalled = true;
  /**
   * &withCSS= and &withJS= URL parameters
   * Allow to try custom scripts from MediaWiki space
   * without editing personal .css or .js files
   */
  if (mw.util.getParamValue('withCSS') || mw.util.getParamValue('withJS') || mw.util.getParamValue('withModule')) {
    var extraCSS = mw.util.getParamValue('withCSS');
    var extraJS = mw.util.getParamValue('withJS');
    var extraModule = mw.util.getParamValue('withModule');
    if (extraCSS && /^MediaWiki:[^#%&<=>]*\.css$/.test(extraCSS)) {
      mw.loader.load(mw.util.getUrl(extraCSS, {
        action: 'raw',
        ctype: 'text/css',
        maxage: '3600',
        smaxage: '3600'
      }), 'text/css');
    }
    if (extraJS && /^MediaWiki:[^#%&<=>]*\.js$/.test(extraJS)) {
      mw.loader.load(mw.util.getUrl(extraJS, {
        action: 'raw',
        ctype: 'text/javascript',
        maxage: '3600',
        smaxage: '3600'
      }));
    }
    if (extraModule && /^ext\.[^,|]+$/.test(extraModule)) {
      mw.loader.load(extraModule);
    }
  }
  /**
   * Load CSS and JS files temporarily through URL.
   * &use=File1.css|File2.css|File3.js
   */
  var useFiles = mw.util.getParamValue('use');
  if (useFiles) {
    var _mw$config$get;
    var wgUserName = mw.util.escapeRegExp((_mw$config$get = mw.config.get('wgUserName')) !== null && _mw$config$get !== void 0 ? _mw$config$get : '');
    var FileRegex = new RegExp("^(?:MediaWiki:".concat(wgUserName ? "|User:".concat(wgUserName, "/") : '', ")[^&<>=%#]*\\.(js|css)$"));
    var ExtRegex = /^ext\.[^,]+$/;
    var path = "".concat(mw.config.get('wgScript'), "?action=raw&ctype=text/");
    var _iterator = _createForOfIteratorHelper(useFiles.split('|').entries()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          useFile = _step$value[0],
          _index = _step$value[1];
        var name = useFile.toString().trim();
        var what = FileRegex.exec(name) || ['', ''];
        switch (what[1]) {
          case 'js':
            mw.loader.load("".concat(path, "javascript&title=").concat(encodeURIComponent(name)));
            break;
          case 'css':
            mw.loader.load("".concat(path, "css&title=").concat(encodeURIComponent(name)));
            break;
          default:
            if (ExtRegex.test(name)) {
              mw.loader.load(name);
            }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  /**
   * Add highlight to revisions when using `&hilight=revid` or `&highlight=revid`
   */
  var hilight = mw.util.getParamValue('hilight');
  var highlight = mw.util.getParamValue('highlight');
  if (mw.config.get('wgAction') === 'history') {
    if (hilight) {
      hilight.split(',').forEach(function (_index, version) {
        $("input[name=oldid][value=".concat(version, "]")).parent().addClass('not-patrolled');
      });
    }
    if (highlight) {
      highlight.split(',').forEach(function (_index, version) {
        $("input[name=oldid][value=".concat(version, "]")).parent().addClass('not-patrolled');
      });
    }
  }
  /**
   * Add target="blank" to external links
   */
  $('a.external, a[rel="mw:ExtLink"]').filter(function (_index, element) {
    var self = element;
    var linkHref = $(element).attr('href');
    if (linkHref !== undefined) {
      var hrefSplit = linkHref.split('/');
      if (hrefSplit.length < 3 || hrefSplit[2] === location.host) {
        return false;
      }
    }
    if (self.href.indexOf("".concat(location.protocol, "//").concat(location.hostname)) !== -1) {
      self.target = '_blank';
      if (!(self.rel.indexOf('noopener') !== -1)) {
        self.rel += ' noopener';
      }
      if (!(self.rel.indexOf('noreferrer') !== -1)) {
        self.rel += ' noreferrer';
      }
    }
    return true;
  });
  /**
   * Remove title=* from permalink
   */
  var permaLink = document.querySelector('#t-permalink');
  if (permaLink) {
    var permaLinkFirstChild = permaLink.firstChild;
    permaLinkFirstChild.href = permaLinkFirstChild.href.replace(/title=[^&]*&/, '');
  }
  /**
   * Open search results in a new tab or window
   * when holding down the Ctrl key (by Timeshifter)
   */
  $('#searchform, #searchbox, #search, .search-types, #search-types').on('keyup keydown mousedown', function (_ref) {
    var ctrlKey = _ref.ctrlKey,
      metaKey = _ref.metaKey;
    $(this).attr('target', ctrlKey || metaKey ? '_blank' : '');
  });
  /**
   * Cleanup title for all pages
   */
  var titleCleanUp = function titleCleanUp() {
    var oldTitleTag = $('title').text();
    var oldPageTitle = $('.firstHeading').text();
    var newPageTitle = new mw.Title(mw.config.get('wgPageName')).toText();
    $('title').text(oldTitleTag.replace(oldPageTitle, newPageTitle));
    $('.firstHeading').text(oldPageTitle.replace(oldPageTitle, newPageTitle));
  };
  if (mw.config.get('wgAction') === 'view' && [2, 3, 6, 118].indexOf(mw.config.get('wgNamespaceNumber')) !== -1 && !(location.href.indexOf('diff=') !== -1)) {
    titleCleanUp();
  }
  /**
   * Display title=(.*) of <span class="inline-unihan"> after them.
   * (beta test)
   */
  // Do not display on Special Pages
  if (mw.config.get('wgNamespaceNumber') >= 0) {
    $('attr, .inline-unihan').each(function (_index, element) {
      var elementTitle = element.title;
      if (!elementTitle) {
        return;
      }
      var popup = new OO.ui.PopupWidget({
        $content: $("<p>").text(elementTitle),
        padded: true,
        anchor: true,
        head: true,
        label: window.wgULS('注释：', '注釋：')
      });
      $(element).append(popup.$element);
      $(element).on('click', function () {
        popup.toggle();
      });
    });
  }
  /* 修正折叠后定位变化 */
  if (location.hash) {
    location.href = location.hash;
  }
  /* 临时：禁止用户查看用户创建日志 */
  if (mw.config.get('wgCanonicalSpecialPageName') === 'Log') {
    $('input[name="wpfilters[]"][value=newusers]').attr('checked', 0);
    $('input[name="wpfilters[]"][value=newusers]').parent().parent().parent().parent().remove();
  }
  /* 调整折叠按钮的颜色 */
  var $toggle = $('.mw-collapsible-toggle');
  if ($toggle.length > 0 && (_$toggle$parent$ = $toggle.parent()[0]) !== null && _$toggle$parent$ !== void 0 && _$toggle$parent$.style.color) {
    $toggle.find('a').css('color', 'inherit');
  }
  /* 隐藏首页红色链接 */
  if (mw.config.get('wgIsMainPage') && mw.config.get('wgAction') === 'view') {
    /* Remove red links */
    $('#mw-content-text a.new').contents().unwrap();
  }
});

/** 添加按钮提示
  var getI18nMessages = function getI18nMessages() {
    var _i18n = i18n,
      localize = _i18n.localize;
    return {
      EnableDisableDarkMode: localize({
        en: "Enable/disable dark mode",
        "zh-hans": "开启/关闭暗色模式",
        "zh-hant": "開啓/關閉暗色模式"
      }),
      CollapseExpandSidebar: localize({
        en: "Collapse/expand sidebar",
        "zh-hans": "展开/隐藏侧边栏",
        "zh-hant": "展開/隱藏側邊欄"
      })
    };
  };
  var i18nMessages = getI18nMessages();
  var getMessage = function getMessage(key) {
    return i18nMessages[key] || key;
  };

  var loadTippy = function loadTippy() {
    mw.loader.using(["ext.DarkMode"]).done(function () {
      tippy(document.getElementById("darkmode-button"), {
        arrow: true,
        content: getMessage("EnableDisableDarkMode"),
        placement: "left"
      });
    });
    mw.loader.using(["ext.CollapsibleSidebar.js"]).done(function () {
      tippy(document.getElementById("sidebarButton"), {
        arrow: true,
        content: getMessage("CollapseExpandSidebar"),
        placement: "left"
      });
    });
    if (mw.config.get("skin") === "vector") {
      mw.loader.using(["ext.CollapsibleSidebar.vector"]).done(function () {
        tippy(document.getElementById("sidebarCollapse"), {
          arrow: true,
          content: getMessage("CollapseExpandSidebar"),
          placement: "right"
        });
      });
    }
  };
无tippy导入计划，暂时搁置 */
 
$(function deprecatedFunctions() {
  /**
   * maintenance: Some user scripts may be using the following deprecated functions.
   * These functions are no longer supported and should be updated to use mw.loader.getScript.
   *
   * @deprecated: User mw.loader.load() or mw.loader.getScript() instead.
   */
  mw.log.deprecate(window, 'importScript', function (title) {
    mw.loader.load(mw.util.getUrl(title, {
      action: 'raw',
      ctype: 'text/javascript',
      maxage: '3600',
      smaxage: '3600'
    }));
  }, 'Use mw.loader.load() or mw.loader.getScript() instead');
  mw.log.deprecate(window, 'importStylesheet', function (title) {
    mw.loader.load(mw.util.getUrl(title, {
      action: 'raw',
      ctype: 'text/css',
      maxage: '3600',
      smaxage: '3600'
    }), 'text/css');
  }, 'Use mw.loader.load() instead');
  mw.log.deprecate(window, 'importScriptURI', function (modules) {
    mw.loader.load(mw.util.wikiUrlencode(modules));
  }, 'Use mw.loader.load() or mw.loader.getScript() instead');
  mw.log.deprecate(window, 'importStylesheetURI', function (modules) {
    mw.loader.load(mw.util.wikiUrlencode(modules), 'text/css');
  }, 'Use mw.loader.load() instead');
  mw.log.deprecate(window, 'importScriptCallback', function (title, ready) {
    mw.loader.getScript(mw.util.getUrl(title, {
      action: 'raw',
      ctype: 'text/javascript',
      maxage: '3600',
      smaxage: '3600'
    })).then(ready);
  }, 'Use mw.loader.load() or mw.loader.getScript() instead');
  mw.log.deprecate(window, 'importScriptURICallback', function (url, ready) {
    mw.loader.getScript(url).then(ready);
  }, 'Use mw.loader.getScript() instead');
  /**
   * maintenance: Some user scripts may be using the following deprecated functions.
   * These functions are kept for compability.
   */
  // mw.log.deprecate(window, 'JSConfig', {}, 'Use {} instead');
  /**
   * wgU*S functions have been split to a seperate gadget (ext.gadget.i18n).
   */
});
/* </nowiki> */


