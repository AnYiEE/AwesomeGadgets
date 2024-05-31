/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Common.js}
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-exlinks.js}
 * @base {@link https://meta.wikimedia.org/wiki/MediaWiki:Gadget-ShortLink.js}
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-workinprogress.js}
 * @base {@link https://www.mediawiki.org/wiki/Snippets/Load_JS_and_CSS_by_URL}
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-search-new-tab.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/SiteCommon_JS}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */
/**
 * +------------------------------------------------------------+
 * |            === WARNING: GLOBAL GADGET FILE ===             |
 * +------------------------------------------------------------+
 * |       All changes should be made in the repository,        |
 * |                otherwise they will be lost.                |
 * +------------------------------------------------------------+
 * |        Changes to this page may affect many users.         |
 * | Please discuss changes by opening an issue before editing. |
 * +------------------------------------------------------------+
 */
/* <nowiki> */

(() => {

"use strict";

// dist/SiteCommon_JS/SiteCommon_JS.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/SiteCommon_JS/modules/constant.ts
var URL_DIFF = mw.util.getParamValue("diff");
var URL_HIGHLIGHT = mw.util.getParamValue("highlight");
var URL_HILIGHT = mw.util.getParamValue("hilight");
var URL_USE = mw.util.getParamValue("use");
var URL_WITH_CSS = mw.util.getParamValue("withCSS");
var URL_WITH_JS = mw.util.getParamValue("withJS");
var URL_WITH_MODULE = mw.util.getParamValue("withModule");
var WG_ACTION = mw.config.get("wgAction");
var WG_CANONICAL_SPECIAL_PAGE_NAME = mw.config.get("wgCanonicalSpecialPageName");
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_SCRIPT = mw.config.get("wgScript");
var WG_SKIN = mw.config.get("skin");
var WG_USER_NAME = mw.config.get("wgUserName");
//! src/SiteCommon_JS/modules/core.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/SiteCommon_JS/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  const {
    wgULS
  } = window;
  return {
    Note: (0, import_ext_gadget.localize)({
      en: "Note: ",
      "zh-hans": "注释：",
      "zh-hant": "注釋："
    }),
    NoPermError0: wgULS("因技术原因，您没有权限访问相关页面。若有疑问，请与求闻百科运营者联系。", "因技術原因，您沒有權限訪問相關頁面。若有疑問，請與求聞百科運營者聯系。"),
    NoPermError1: wgULS("您没有权限访问相关页面。若您是资深编者，请与求闻百科技术团队联系，以获取权限。", "您沒有權限訪問相關頁面。若您是資深編者，請與求聞百科技術團隊聯系，以獲取權限。"),
    NoPermError2: wgULS("您的网络环境存在风险，请登录后继续使用。若您没有求闻百科账号，请注册后登录。", "您的網路環境存在風險，請登入後繼續使用。若您沒有求聞百科賬號，請注冊後登錄。"),
    NoPermError3: wgULS("相关功能仅向注册用户开放，请登录后继续使用。若您没有求闻百科账号，请注册后登录。", "相關功能僅向注冊用戶開放，請登入後繼續使用。若您沒有求聞百科賬號，請注冊後登錄。"),
    NoPermError4: wgULS("您没有权限访问相关页面。若有疑问，请与求闻百科运营者联系。", "您沒有權限訪問相關頁面。若有疑問，請與求聞百科運營者聯系。")
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/SiteCommon_JS/modules/core.tsx
var loadWithURL = () => {
  if (URL_WITH_CSS || URL_WITH_JS || URL_WITH_MODULE) {
    if (URL_WITH_CSS && /^MediaWiki:[^#%&<=>]*\.css$/.test(URL_WITH_CSS)) {
      mw.loader.load(mw.util.getUrl(URL_WITH_CSS, {
        action: "raw",
        ctype: "text/css",
        maxage: "3600",
        smaxage: "3600"
      }), "text/css");
    }
    if (URL_WITH_JS && /^MediaWiki:[^#%&<=>]*\.js$/.test(URL_WITH_JS)) {
      void mw.loader.using("").then((require2) => {
        mw.loader.load(mw.util.getUrl(URL_WITH_JS, {
          action: "raw",
          ctype: "text/javascript",
          maxage: "3600",
          smaxage: "3600"
        }));
      });
    }
    if (URL_WITH_MODULE && /^ext\.[^,|]+$/.test(URL_WITH_MODULE)) {
      void mw.loader.using(URL_WITH_MODULE).then((require2) => {
        mw.loader.load(URL_WITH_MODULE);
      });
    }
  }
  if (URL_USE) {
    const wgUserName = mw.util.escapeRegExp(WG_USER_NAME !== null && WG_USER_NAME !== void 0 ? WG_USER_NAME : "");
    const REGEX_FILE = new RegExp("^(?:MediaWiki:".concat(wgUserName ? "|User:".concat(wgUserName, "/") : "", ")[^&<>=%#]*\\.(js|css)$"));
    const REGEX_EXT = /^ext\.[^,]+$/;
    const path = "".concat(WG_SCRIPT, "?action=raw&ctype=text/");
    var _iterator2 = _createForOfIteratorHelper(URL_USE.split("|")), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _REGEX_FILE$exec;
        const useFile = _step2.value;
        const name = useFile.toString().trim();
        const what = (_REGEX_FILE$exec = REGEX_FILE.exec(name)) !== null && _REGEX_FILE$exec !== void 0 ? _REGEX_FILE$exec : ["", ""];
        switch (what[1]) {
          case "js":
            void mw.loader.using("").then((require2) => {
              mw.loader.load("".concat(path, "javascript&title=").concat(encodeURIComponent(name)));
            });
            break;
          case "css":
            mw.loader.load("".concat(path, "css&title=").concat(encodeURIComponent(name)));
            break;
          default:
            if (REGEX_EXT.test(name)) {
              void mw.loader.using(name).then((require2) => {
                mw.loader.load(name);
              });
            }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
};
var highLightRev = ($body) => {
  const highlight = URL_HIGHLIGHT !== null && URL_HIGHLIGHT !== void 0 ? URL_HIGHLIGHT : URL_HILIGHT;
  if (!highlight || WG_ACTION !== "history") {
    return;
  }
  var _iterator3 = _createForOfIteratorHelper(highlight.split(",")), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      const version = _step3.value;
      $body.find("input[name=oldid][value=".concat(version, "]")).parent().addClass("not-patrolled");
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
};
var addTargetBlank = ($body) => {
  $body.find('a.external, a[rel="mw:ExtLink"]').filter((_index, element) => {
    const linkHref = $(element).attr("href");
    if (linkHref) {
      const hrefSplit = linkHref.split("/");
      if (hrefSplit.length < 3 || hrefSplit[2] === location.host) {
        return false;
      }
    }
    if (element.href.includes("".concat(location.protocol, "//").concat(location.hostname))) {
      element.target = "_blank";
      if (!element.rel.includes("noopener")) {
        element.rel += " noopener";
      }
      if (!element.rel.includes("noreferrer")) {
        element.rel += " noreferrer";
      }
    }
    return true;
  });
};
var removeTitleFromPermalink = ($body) => {
  const $permaLink = $body.find("#t-permalink");
  if ($permaLink.length) {
    var _$permaLinkFirstChild;
    const $permaLinkFirstChild = $permaLink.find(":first-child");
    const href = (_$permaLinkFirstChild = $permaLinkFirstChild.attr("href")) === null || _$permaLinkFirstChild === void 0 ? void 0 : _$permaLinkFirstChild.replace(/title=[^&]*&/, "");
    if (!href) {
      return;
    }
    $permaLinkFirstChild.attr("href", href);
  }
};
var openSearchInNewTab = ($body) => {
  $body.find("#search,#searchbox,#searchform,.search-types,#search-types").on("keydown keyup mousedown", (event) => {
    const {
      ctrlKey,
      metaKey,
      target
    } = event;
    $(target).attr("target", (ctrlKey !== null && ctrlKey !== void 0 ? ctrlKey : metaKey) ? "_blank" : "");
  });
};
var titleCleanUp = ($body) => {
  if (URL_DIFF || WG_ACTION !== "view" || ![6, 118].includes(WG_NAMESPACE_NUMBER)) {
    return;
  }
  const fullPageName = new mw.Title(WG_PAGE_NAME).getPrefixedText();
  const $firstHeading = $body.find(".firstHeading");
  const documentTitle = document.title;
  const pageTitle = $firstHeading.text();
  const replaceTitle = (title) => title.replace(pageTitle, fullPageName);
  document.title = replaceTitle(documentTitle);
  $firstHeading.text(replaceTitle(pageTitle));
};
var unihanPopup = ($body) => {
  if (WG_NAMESPACE_NUMBER < 0) {
    return;
  }
  $body.find("attr, .inline-unihan").each((_index, element) => {
    const $element = $(element);
    const title = $element.attr("title");
    if (!title) {
      return;
    }
    void mw.loader.using("oojs-ui-core").then(() => {
      const popup = new OO.ui.PopupWidget({
        $content: $(/* @__PURE__ */ import_ext_gadget2.default.createElement("p", null, title)),
        label: getMessage("Note"),
        anchor: true,
        head: true,
        padded: true
      });
      $element.append(popup.$element).on("click", () => {
        popup.toggle();
      });
    });
  });
};
var fixLocationHash = () => {
  if (location.hash) {
    location.href = location.hash;
  }
};
var toggleLink = ($body) => {
  var _$toggler$parent$;
  const $toggler = $body.find(".mw-collapsible-toggle, .gadget-collapsible-toggler");
  if ($toggler.length && (_$toggler$parent$ = $toggler.parent()[0]) !== null && _$toggler$parent$ !== void 0 && _$toggler$parent$.style.color) {
    $toggler.find("a").css("color", "inherit");
  }
};
//! src/SiteCommon_JS/modules/tippy.ts
var import_ext_gadget3 = require("ext.gadget.Tippy");
var getContent = (reference) => {
  var _reference$getAttribu;
  const label = reference.getAttribute("aria-label");
  const title = (_reference$getAttribu = reference.getAttribute("alt")) !== null && _reference$getAttribu !== void 0 ? _reference$getAttribu : reference.getAttribute("title");
  return (label === title ? label : title || label) || reference.textContent;
};
var onCreateCallback = (instance) => {
  const {
    reference
  } = instance;
  reference.setAttribute("aria-label", getContent(reference));
  reference.removeAttribute("title");
};
var onShowCallback = (instance) => {
  onCreateCallback(instance);
  instance.setContent(getContent(instance.reference));
};
var tippyForCitizenHeader = ($body) => {
  if (WG_SKIN !== "citizen") {
    return;
  }
  var _iterator4 = _createForOfIteratorHelper($body.find(".citizen-header label[title],.citizen-header .mw-echo-notifications-badge,.citizen-header__logo a,.page-actions>nav>ul>li a,.page-actions__button")), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      const element = _step4.value;
      const $element = $(element);
      let title = $element.attr("title");
      if (!title) {
        continue;
      }
      title = title.replace(/\s*?\[.+?]$/, "");
      $element.attr({
        "aria-label": title,
        title: ""
      });
      (0, import_ext_gadget3.tippy)($element.get(0), {
        arrow: true,
        content: title,
        placement: "bottom",
        onCreate: onCreateCallback,
        onHidden: onCreateCallback,
        onShow: onShowCallback
      });
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
};
var tippyForExtension = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    yield mw.loader.using("ext.CollapsibleSidebar.js");
    (0, import_ext_gadget3.tippy)("#sidebarButton", {
      arrow: true,
      content: getContent,
      placement: "left",
      onCreate: onCreateCallback,
      onHidden: onCreateCallback,
      onShow: onShowCallback
    });
    if (WG_SKIN === "vector") {
      yield mw.loader.using("ext.CollapsibleSidebar.vector");
      (0, import_ext_gadget3.tippy)("#sidebarCollapse", {
        arrow: true,
        content: getContent,
        placement: "right",
        onCreate: onCreateCallback,
        onHidden: onCreateCallback,
        onShow: onShowCallback
      });
    }
    yield mw.loader.using("ext.DarkMode");
    (0, import_ext_gadget3.tippy)("#darkmode-button", {
      arrow: true,
      content: getContent,
      placement: "left",
      onCreate: onCreateCallback,
      onHidden: onCreateCallback,
      onShow: onShowCallback
    });
  });
  return function tippyForExtension2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/SiteCommon_JS/modules/deprecatedFunctions.ts
var deprecatedFunctions = () => {
  /*!
   * maintenance: Some user scripts may be using the following deprecated functions.
   * These functions are no longer supported and should be updated.
   */
  mw.log.deprecate(window, "importScript", (title) => {
    return mw.loader.addScriptTag(mw.util.getUrl(title, {
      action: "raw",
      ctype: "text/javascript",
      maxage: "3600",
      smaxage: "3600"
    }));
  }, "Use mw.loader.addScriptTag() instead");
  mw.log.deprecate(window, "importStylesheet", (title) => {
    return mw.loader.addLinkTag(mw.util.getUrl(title, {
      action: "raw",
      ctype: "text/css",
      maxage: "3600",
      smaxage: "3600"
    }), "text/css");
  }, "Use mw.loader.addLinkTag() instead");
  mw.log.deprecate(window, "importScriptURI", (modules) => {
    return mw.loader.addScriptTag(mw.util.wikiUrlencode(modules));
  }, "Use mw.loader.addScriptTag() or mw.loader.getScript() instead");
  mw.log.deprecate(window, "importStylesheetURI", (modules) => {
    return mw.loader.addLinkTag(mw.util.wikiUrlencode(modules), "text/css");
  }, "Use mw.loader.addLinkTag() instead");
  mw.log.deprecate(
    window,
    // @ts-expect-error TS2345
    "importScriptCallback",
    (title, ready) => {
      void mw.loader.getScript(mw.util.getUrl(title, {
        action: "raw",
        ctype: "text/javascript",
        maxage: "3600",
        smaxage: "3600"
      })).then(ready);
    },
    "Use mw.loader.getScript() instead"
  );
  mw.log.deprecate(
    window,
    // @ts-expect-error TS2345
    "importScriptURICallback",
    (url, ready) => {
      void mw.loader.getScript(url).then(ready);
    },
    "Use mw.loader.getScript() instead"
  );
};
//! src/SiteCommon_JS/SiteCommon_JS.ts
(function siteCommon() {
  if (mw.config.get("wgSiteCommonInstalled")) {
    return;
  }
  mw.config.set("wgSiteCommonInstalled", true);
  loadWithURL();
  fixLocationHash();
  $(() => {
    const $body = $("body");
    highLightRev($body);
    addTargetBlank($body);
    removeTitleFromPermalink($body);
    openSearchInNewTab($body);
    titleCleanUp($body);
    unihanPopup($body);
    toggleLink($body);
    tippyForCitizenHeader($body);
  });
  deprecatedFunctions();
  void tippyForExtension();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9TaXRlQ29tbW9uX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL3RpcHB5LnRzIiwgInNyYy9TaXRlQ29tbW9uX0pTL21vZHVsZXMvZGVwcmVjYXRlZEZ1bmN0aW9ucy50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9TaXRlQ29tbW9uX0pTLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBVUkxfRElGRjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnZGlmZicpO1xuY29uc3QgVVJMX0hJR0hMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlnaGxpZ2h0Jyk7XG5jb25zdCBVUkxfSElMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlsaWdodCcpO1xuLy9jb25zdCBVUkxfTk9fUEVSTTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbm9wZXJtJyk7XG5jb25zdCBVUkxfVVNFOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd1c2UnKTtcbmNvbnN0IFVSTF9XSVRIX0NTUzogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnd2l0aENTUycpO1xuY29uc3QgVVJMX1dJVEhfSlM6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3dpdGhKUycpO1xuY29uc3QgVVJMX1dJVEhfTU9EVUxFOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoTW9kdWxlJyk7XG5cbmNvbnN0IFdHX0FDVElPTjogTWVkaWFXaWtpQ29uZmlnTWFwV2dBY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuY29uc3QgV0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FOiBzdHJpbmcgfCBmYWxzZSA9IG13LmNvbmZpZy5nZXQoJ3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lJyk7XG5jb25zdCBXR19OQU1FU1BBQ0VfTlVNQkVSOiBudW1iZXIgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpO1xuY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5jb25zdCBXR19TQ1JJUFQ6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0Jyk7XG5jb25zdCBXR19TS0lOOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCdza2luJyk7XG5jb25zdCBXR19VU0VSX05BTUU6IHN0cmluZyB8IG51bGwgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyk7XG5cbmV4cG9ydCB7XG5cdFVSTF9ESUZGLFxuXHRVUkxfSElHSExJR0hULFxuXHRVUkxfSElMSUdIVCxcblx0Ly9VUkxfTk9fUEVSTSxcblx0VVJMX1VTRSxcblx0VVJMX1dJVEhfQ1NTLFxuXHRVUkxfV0lUSF9KUyxcblx0VVJMX1dJVEhfTU9EVUxFLFxuXHRXR19BQ1RJT04sXG5cdFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSxcblx0V0dfTkFNRVNQQUNFX05VTUJFUixcblx0V0dfUEFHRV9OQU1FLFxuXHRXR19TQ1JJUFQsXG5cdFdHX1NLSU4sXG5cdFdHX1VTRVJfTkFNRSxcbn07XG4iLCAiaW1wb3J0IHtcblx0VVJMX0RJRkYsXG5cdFVSTF9ISUdITElHSFQsXG5cdFVSTF9ISUxJR0hULFxuXHQvL1VSTF9OT19QRVJNLFxuXHRVUkxfVVNFLFxuXHRVUkxfV0lUSF9DU1MsXG5cdFVSTF9XSVRIX0pTLFxuXHRVUkxfV0lUSF9NT0RVTEUsXG5cdFdHX0FDVElPTixcblx0Ly9XR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUsXG5cdFdHX05BTUVTUEFDRV9OVU1CRVIsXG5cdFdHX1BBR0VfTkFNRSxcblx0V0dfU0NSSVBULFxuXHRXR19VU0VSX05BTUUsXG59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBsb2FkV2l0aFVSTCA9ICgpOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqICZ3aXRoQ1NTPSBhbmQgJndpdGhKUz0gVVJMIHBhcmFtZXRlcnNcblx0ICogQWxsb3cgdG8gdHJ5IGN1c3RvbSBzY3JpcHRzIGZyb20gTWVkaWFXaWtpIHNwYWNlXG5cdCAqIHdpdGhvdXQgZWRpdGluZyBwZXJzb25hbCAuY3NzIG9yIC5qcyBmaWxlc1xuXHQgKi9cblx0aWYgKFVSTF9XSVRIX0NTUyB8fCBVUkxfV0lUSF9KUyB8fCBVUkxfV0lUSF9NT0RVTEUpIHtcblx0XHRpZiAoVVJMX1dJVEhfQ1NTICYmIC9eTWVkaWFXaWtpOlteIyUmPD0+XSpcXC5jc3MkLy50ZXN0KFVSTF9XSVRIX0NTUykpIHtcblx0XHRcdG13LmxvYWRlci5sb2FkKFxuXHRcdFx0XHRtdy51dGlsLmdldFVybChVUkxfV0lUSF9DU1MsIHtcblx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdGN0eXBlOiAndGV4dC9jc3MnLFxuXHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0fSksXG5cdFx0XHRcdCd0ZXh0L2Nzcydcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmIChVUkxfV0lUSF9KUyAmJiAvXk1lZGlhV2lraTpbXiMlJjw9Pl0qXFwuanMkLy50ZXN0KFVSTF9XSVRIX0pTKSkge1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0XHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKCcnKS50aGVuKChyZXF1aXJlKTogdm9pZCA9PiB7XG5cdFx0XHRcdG13LmxvYWRlci5sb2FkKFxuXHRcdFx0XHRcdG13LnV0aWwuZ2V0VXJsKFVSTF9XSVRIX0pTLCB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2phdmFzY3JpcHQnLFxuXHRcdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAoVVJMX1dJVEhfTU9EVUxFICYmIC9eZXh0XFwuW14sfF0rJC8udGVzdChVUkxfV0lUSF9NT0RVTEUpKSB7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNjEzM1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuXHRcdFx0dm9pZCBtdy5sb2FkZXIudXNpbmcoVVJMX1dJVEhfTU9EVUxFKS50aGVuKChyZXF1aXJlKTogdm9pZCA9PiB7XG5cdFx0XHRcdG13LmxvYWRlci5sb2FkKFVSTF9XSVRIX01PRFVMRSBhcyBzdHJpbmcpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBMb2FkIENTUyBhbmQgSlMgZmlsZXMgdGVtcG9yYXJpbHkgdGhyb3VnaCBVUkwuXG5cdCAqICZ1c2U9RmlsZTEuY3NzfEZpbGUyLmNzc3xGaWxlMy5qc1xuXHQgKi9cblx0aWYgKFVSTF9VU0UpIHtcblx0XHRjb25zdCB3Z1VzZXJOYW1lOiBzdHJpbmcgPSBtdy51dGlsLmVzY2FwZVJlZ0V4cChXR19VU0VSX05BTUUgPz8gJycpO1xuXHRcdGNvbnN0IFJFR0VYX0ZJTEU6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgXig/Ok1lZGlhV2lraToke3dnVXNlck5hbWUgPyBgfFVzZXI6JHt3Z1VzZXJOYW1lfS9gIDogJyd9KVteJjw+PSUjXSpcXFxcLihqc3xjc3MpJGBcblx0XHQpO1xuXHRcdGNvbnN0IFJFR0VYX0VYVDogUmVnRXhwID0gL15leHRcXC5bXixdKyQvO1xuXHRcdGNvbnN0IHBhdGg6IHN0cmluZyA9IGAke1dHX1NDUklQVH0/YWN0aW9uPXJhdyZjdHlwZT10ZXh0L2A7XG5cdFx0Zm9yIChjb25zdCB1c2VGaWxlIG9mIFVSTF9VU0Uuc3BsaXQoJ3wnKSkge1xuXHRcdFx0Y29uc3QgbmFtZTogc3RyaW5nID0gdXNlRmlsZS50b1N0cmluZygpLnRyaW0oKTtcblx0XHRcdGNvbnN0IHdoYXQ6IHN0cmluZ1tdID0gUkVHRVhfRklMRS5leGVjKG5hbWUpID8/IFsnJywgJyddO1xuXHRcdFx0c3dpdGNoICh3aGF0WzFdKSB7XG5cdFx0XHRcdGNhc2UgJ2pzJzpcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNjEzM1xuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0XHRcdFx0XHR2b2lkIG13LmxvYWRlci51c2luZygnJykudGhlbigocmVxdWlyZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0bXcubG9hZGVyLmxvYWQoYCR7cGF0aH1qYXZhc2NyaXB0JnRpdGxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfWApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjc3MnOlxuXHRcdFx0XHRcdG13LmxvYWRlci5sb2FkKGAke3BhdGh9Y3NzJnRpdGxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfWApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGlmIChSRUdFWF9FWFQudGVzdChuYW1lKSkge1xuXHRcdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0XHRcdFx0XHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKG5hbWUpLnRoZW4oKHJlcXVpcmUpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0bXcubG9hZGVyLmxvYWQobmFtZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vKlxuY29uc3Qgbm9QZXJtV2FybmluZyA9ICgpOiB2b2lkID0+IHtcblx0Ly8gTG9hZCB3YXJuaW5nKHMpIHdoZW4gdXNlciBoYXMgbm8gYWNjZXNzIHRvIHBhZ2Vcblx0aWYgKCFVUkxfTk9fUEVSTSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRzd2l0Y2ggKFVSTF9OT19QRVJNKSB7XG5cdFx0Y2FzZSAnMCc6XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdCflm6DmioDmnK/ljp/lm6DvvIzmgqjmsqHmnInmnYPpmZDorr/pl67nm7jlhbPpobXpnaLjgILoi6XmnInnlpHpl67vvIzor7fkuI7msYLpl7vnmb7np5Hov5DokKXogIXogZTns7vjgIInLFxuXHRcdFx0XHRcdCflm6DmioDooZPljp/lm6DvvIzmgqjmspLmnInmrIrpmZDoqKrllY/nm7jpl5zpoIHpnaLjgILoi6XmnInnlpHllY/vvIzoq4voiIfmsYLogZ7nmb7np5HpgYvnh5/ogIXoga/ns7vjgIInXG5cdFx0XHRcdCksXG5cdFx0XHRcdHt0YWc6ICdub1Blcm0nLCB0eXBlOiAnZXJyb3InfVxuXHRcdFx0KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJzEnOlxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHQn5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5oKo5piv6LWE5rex57yW6ICF77yM6K+35LiO5rGC6Ze755m+56eR5oqA5pyv5Zui6Zif6IGU57O777yM5Lul6I635Y+W5p2D6ZmQ44CCJyxcblx0XHRcdFx0XHQn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5oKo5piv6LOH5rex57eo6ICF77yM6KuL6IiH5rGC6IGe55m+56eR5oqA6KGT5ZyY6ZqK6IGv57O777yM5Lul542y5Y+W5qyK6ZmQ44CCJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR7dGFnOiAnbm9QZXJtJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICcyJzpcblx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0J+aCqOeahOe9kee7nOeOr+Wig+WtmOWcqOmjjumZqe+8jOivt+eZu+W9leWQjue7p+e7reS9v+eUqOOAguiLpeaCqOayoeacieaxgumXu+eZvuenkei0puWPt++8jOivt+azqOWGjOWQjueZu+W9leOAgicsXG5cdFx0XHRcdFx0J+aCqOeahOe2sui3r+eSsOWig+WtmOWcqOmiqOmaqu+8jOiri+eZu+WFpeW+jOe5vOe6jOS9v+eUqOOAguiLpeaCqOaykuacieaxguiBnueZvuenkeizrOiZn++8jOiri+azqOWGiuW+jOeZu+mMhOOAgidcblx0XHRcdFx0KSxcblx0XHRcdFx0e3RhZzogJ25vUGVybScsIHR5cGU6ICd3YXJuJ31cblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICczJzpcblx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0J+ebuOWFs+WKn+iDveS7heWQkeazqOWGjOeUqOaIt+W8gOaUvu+8jOivt+eZu+W9leWQjue7p+e7reS9v+eUqOOAguiLpeaCqOayoeacieaxgumXu+eZvuenkei0puWPt++8jOivt+azqOWGjOWQjueZu+W9leOAgicsXG5cdFx0XHRcdFx0J+ebuOmXnOWKn+iDveWDheWQkeazqOWGiueUqOaItumWi+aUvu+8jOiri+eZu+WFpeW+jOe5vOe6jOS9v+eUqOOAguiLpeaCqOaykuacieaxguiBnueZvuenkeizrOiZn++8jOiri+azqOWGiuW+jOeZu+mMhOOAgidcblx0XHRcdFx0KSxcblx0XHRcdFx0e3RhZzogJ25vUGVybScsIHR5cGU6ICd3YXJuJ31cblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHQn5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5pyJ55aR6Zeu77yM6K+35LiO5rGC6Ze755m+56eR6L+Q6JCl6ICF6IGU57O744CCJyxcblx0XHRcdFx0XHQn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5pyJ55aR5ZWP77yM6KuL6IiH5rGC6IGe55m+56eR6YGL54ef6ICF6IGv57O744CCJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR7dGFnOiAnbm9QZXJtJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdCk7XG5cdH1cblx0Y29uc3QgbmV3VXJsOiBzdHJpbmcgPSBsb2NhdGlvbi5ocmVmLnJlcGxhY2UoL1s/Jl1ub3Blcm09WzAtOV0rLywgJycpO1xuXHRoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIG5ld1VybCk7XG59O1xuKi9cblxuY29uc3QgaGlnaExpZ2h0UmV2ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogQWRkIGhpZ2hsaWdodCB0byByZXZpc2lvbnMgd2hlbiB1c2luZyBgJmhpbGlnaHQ9cmV2aWRgIG9yIGAmaGlnaGxpZ2h0PXJldmlkYFxuXHQgKi9cblx0Y29uc3QgaGlnaGxpZ2h0OiBzdHJpbmcgfCBudWxsID0gVVJMX0hJR0hMSUdIVCA/PyBVUkxfSElMSUdIVDtcblx0aWYgKCFoaWdobGlnaHQgfHwgV0dfQUNUSU9OICE9PSAnaGlzdG9yeScpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Zm9yIChjb25zdCB2ZXJzaW9uIG9mIGhpZ2hsaWdodC5zcGxpdCgnLCcpKSB7XG5cdFx0JGJvZHkuZmluZChgaW5wdXRbbmFtZT1vbGRpZF1bdmFsdWU9JHt2ZXJzaW9ufV1gKS5wYXJlbnQoKS5hZGRDbGFzcygnbm90LXBhdHJvbGxlZCcpO1xuXHR9XG59O1xuXG5jb25zdCBhZGRUYXJnZXRCbGFuayA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIEFkZCB0YXJnZXQ9XCJibGFua1wiIHRvIGV4dGVybmFsIGxpbmtzXG5cdCAqL1xuXHQkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PignYS5leHRlcm5hbCwgYVtyZWw9XCJtdzpFeHRMaW5rXCJdJykuZmlsdGVyKChfaW5kZXgsIGVsZW1lbnQpOiBib29sZWFuID0+IHtcblx0XHRjb25zdCBsaW5rSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJChlbGVtZW50KS5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKGxpbmtIcmVmKSB7XG5cdFx0XHRjb25zdCBocmVmU3BsaXQ6IHN0cmluZ1tdID0gbGlua0hyZWYuc3BsaXQoJy8nKTtcblx0XHRcdGlmIChocmVmU3BsaXQubGVuZ3RoIDwgMyB8fCBocmVmU3BsaXRbMl0gPT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoZWxlbWVudC5ocmVmLmluY2x1ZGVzKGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0bmFtZX1gKSkge1xuXHRcdFx0ZWxlbWVudC50YXJnZXQgPSAnX2JsYW5rJztcblx0XHRcdGlmICghZWxlbWVudC5yZWwuaW5jbHVkZXMoJ25vb3BlbmVyJykpIHtcblx0XHRcdFx0ZWxlbWVudC5yZWwgKz0gJyBub29wZW5lcic7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWVsZW1lbnQucmVsLmluY2x1ZGVzKCdub3JlZmVycmVyJykpIHtcblx0XHRcdFx0ZWxlbWVudC5yZWwgKz0gJyBub3JlZmVycmVyJztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pO1xufTtcblxuY29uc3QgcmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogUmVtb3ZlIHRpdGxlPSogZnJvbSBwZXJtYWxpbmtcblx0ICovXG5cdGNvbnN0ICRwZXJtYUxpbms6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyN0LXBlcm1hbGluaycpO1xuXHRpZiAoJHBlcm1hTGluay5sZW5ndGgpIHtcblx0XHRjb25zdCAkcGVybWFMaW5rRmlyc3RDaGlsZDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICRwZXJtYUxpbmsuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oJzpmaXJzdC1jaGlsZCcpO1xuXHRcdGNvbnN0IGhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRwZXJtYUxpbmtGaXJzdENoaWxkLmF0dHIoJ2hyZWYnKT8ucmVwbGFjZSgvdGl0bGU9W14mXSomLywgJycpO1xuXHRcdGlmICghaHJlZikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQkcGVybWFMaW5rRmlyc3RDaGlsZC5hdHRyKCdocmVmJywgaHJlZik7XG5cdH1cbn07XG5cbmNvbnN0IG9wZW5TZWFyY2hJbk5ld1RhYiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIE9wZW4gc2VhcmNoIHJlc3VsdHMgaW4gYSBuZXcgdGFiIG9yIHdpbmRvd1xuXHQgKiB3aGVuIGhvbGRpbmcgZG93biB0aGUgQ3RybCBrZXkgKGJ5IFRpbWVzaGlmdGVyKVxuXHQgKi9cblx0JGJvZHlcblx0XHQuZmluZCgnI3NlYXJjaCwjc2VhcmNoYm94LCNzZWFyY2hmb3JtLC5zZWFyY2gtdHlwZXMsI3NlYXJjaC10eXBlcycpXG5cdFx0Lm9uKCdrZXlkb3duIGtleXVwIG1vdXNlZG93bicsIChldmVudDogSlF1ZXJ5LlRyaWdnZXJlZEV2ZW50PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3Qge2N0cmxLZXksIG1ldGFLZXksIHRhcmdldH0gPSBldmVudDtcblx0XHRcdCQodGFyZ2V0KS5hdHRyKCd0YXJnZXQnLCBjdHJsS2V5ID8/IG1ldGFLZXkgPyAnX2JsYW5rJyA6ICcnKTtcblx0XHR9KTtcbn07XG5cbmNvbnN0IHRpdGxlQ2xlYW5VcCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIENsZWFudXAgdGl0bGUgZm9yIGFsbCBwYWdlc1xuXHQgKi9cblx0aWYgKFVSTF9ESUZGIHx8IFdHX0FDVElPTiAhPT0gJ3ZpZXcnIHx8ICFbNiwgMTE4XS5pbmNsdWRlcyhXR19OQU1FU1BBQ0VfTlVNQkVSKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBmdWxsUGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZShXR19QQUdFX05BTUUpLmdldFByZWZpeGVkVGV4dCgpO1xuXHRjb25zdCAkZmlyc3RIZWFkaW5nOiBKUXVlcnkgPSAkYm9keS5maW5kKCcuZmlyc3RIZWFkaW5nJyk7XG5cdGNvbnN0IGRvY3VtZW50VGl0bGU6IHN0cmluZyA9IGRvY3VtZW50LnRpdGxlO1xuXHRjb25zdCBwYWdlVGl0bGU6IHN0cmluZyA9ICRmaXJzdEhlYWRpbmcudGV4dCgpO1xuXHRjb25zdCByZXBsYWNlVGl0bGUgPSAodGl0bGU6IHN0cmluZyk6IHN0cmluZyA9PiB0aXRsZS5yZXBsYWNlKHBhZ2VUaXRsZSwgZnVsbFBhZ2VOYW1lKTtcblx0ZG9jdW1lbnQudGl0bGUgPSByZXBsYWNlVGl0bGUoZG9jdW1lbnRUaXRsZSk7XG5cdCRmaXJzdEhlYWRpbmcudGV4dChyZXBsYWNlVGl0bGUocGFnZVRpdGxlKSk7XG59O1xuXG5jb25zdCB1bmloYW5Qb3B1cCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIERpc3BsYXkgdGl0bGU9KC4qKSBvZiA8c3BhbiBjbGFzcz1cImlubGluZS11bmloYW5cIj4gYWZ0ZXIgdGhlbS5cblx0ICogKGJldGEgdGVzdClcblx0ICovXG5cdC8vIERvIG5vdCBkaXNwbGF5IG9uIFNwZWNpYWwgUGFnZXNcblx0aWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdCRib2R5LmZpbmQoJ2F0dHIsIC5pbmxpbmUtdW5paGFuJykuZWFjaCgoX2luZGV4OiBudW1iZXIsIGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0Y29uc3QgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ3RpdGxlJyk7XG5cdFx0aWYgKCF0aXRsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2b2lkIG13LmxvYWRlci51c2luZygnb29qcy11aS1jb3JlJykudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCBwb3B1cDogT08udWkuUG9wdXBXaWRnZXQgPSBuZXcgT08udWkuUG9wdXBXaWRnZXQoe1xuXHRcdFx0XHQkY29udGVudDogJCg8cD57dGl0bGV9PC9wPikgYXMgSlF1ZXJ5LFxuXHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnTm90ZScpLFxuXHRcdFx0XHRhbmNob3I6IHRydWUsXG5cdFx0XHRcdGhlYWQ6IHRydWUsXG5cdFx0XHRcdHBhZGRlZDogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdFx0JGVsZW1lbnQuYXBwZW5kKHBvcHVwLiRlbGVtZW50KS5vbignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHBvcHVwLnRvZ2dsZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuY29uc3QgZml4TG9jYXRpb25IYXNoID0gKCk6IHZvaWQgPT4ge1xuXHQvKiDkv67mraPmipjlj6DlkI7lrprkvY3lj5jljJYgKi9cblx0aWYgKGxvY2F0aW9uLmhhc2gpIHtcblx0XHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaGFzaDtcblx0fVxufTtcblxuY29uc3QgdG9nZ2xlTGluayA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Lyog6LCD5pW05oqY5Y+g5oyJ6ZKu55qE6aKc6ImyICovXG5cdGNvbnN0ICR0b2dnbGVyOiBKUXVlcnkgPSAkYm9keS5maW5kKCcubXctY29sbGFwc2libGUtdG9nZ2xlLCAuZ2FkZ2V0LWNvbGxhcHNpYmxlLXRvZ2dsZXInKTtcblx0aWYgKCR0b2dnbGVyLmxlbmd0aCAmJiAkdG9nZ2xlci5wYXJlbnQoKVswXT8uc3R5bGUuY29sb3IpIHtcblx0XHQkdG9nZ2xlci5maW5kKCdhJykuY3NzKCdjb2xvcicsICdpbmhlcml0Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7XG5cdGxvYWRXaXRoVVJMLFxuXHRoaWdoTGlnaHRSZXYsXG5cdGFkZFRhcmdldEJsYW5rLFxuXHRyZW1vdmVUaXRsZUZyb21QZXJtYWxpbmssXG5cdG9wZW5TZWFyY2hJbk5ld1RhYixcblx0dGl0bGVDbGVhblVwLFxuXHR1bmloYW5Qb3B1cCxcblx0Zml4TG9jYXRpb25IYXNoLFxuXHR0b2dnbGVMaW5rLFxufTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z1VMU30gPSB3aW5kb3c7XG5cdHJldHVybiB7XG5cdFx0Tm90ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOb3RlOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rOo6YeK77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+azqOmHi++8micsXG5cdFx0fSksXG5cdFx0Tm9QZXJtRXJyb3IwOiB3Z1VMUyhcblx0XHRcdCflm6DmioDmnK/ljp/lm6DvvIzmgqjmsqHmnInmnYPpmZDorr/pl67nm7jlhbPpobXpnaLjgILoi6XmnInnlpHpl67vvIzor7fkuI7msYLpl7vnmb7np5Hov5DokKXogIXogZTns7vjgIInLFxuXHRcdFx0J+WboOaKgOihk+WOn+WboO+8jOaCqOaykuacieasiumZkOioquWVj+ebuOmXnOmggemdouOAguiLpeacieeWkeWVj++8jOiri+iIh+axguiBnueZvuenkemBi+eHn+iAheiBr+ezu+OAgidcblx0XHQpLFxuXHRcdE5vUGVybUVycm9yMTogd2dVTFMoXG5cdFx0XHQn5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5oKo5piv6LWE5rex57yW6ICF77yM6K+35LiO5rGC6Ze755m+56eR5oqA5pyv5Zui6Zif6IGU57O777yM5Lul6I635Y+W5p2D6ZmQ44CCJyxcblx0XHRcdCfmgqjmspLmnInmrIrpmZDoqKrllY/nm7jpl5zpoIHpnaLjgILoi6XmgqjmmK/os4fmt7Hnt6jogIXvvIzoq4voiIfmsYLogZ7nmb7np5HmioDooZPlnJjpmoroga/ns7vvvIzku6XnjbLlj5bmrIrpmZDjgIInXG5cdFx0KSxcblx0XHROb1Blcm1FcnJvcjI6IHdnVUxTKFxuXHRcdFx0J+aCqOeahOe9kee7nOeOr+Wig+WtmOWcqOmjjumZqe+8jOivt+eZu+W9leWQjue7p+e7reS9v+eUqOOAguiLpeaCqOayoeacieaxgumXu+eZvuenkei0puWPt++8jOivt+azqOWGjOWQjueZu+W9leOAgicsXG5cdFx0XHQn5oKo55qE57ay6Lev55Kw5aKD5a2Y5Zyo6aKo6Zqq77yM6KuL55m75YWl5b6M57m857qM5L2/55So44CC6Iul5oKo5rKS5pyJ5rGC6IGe55m+56eR6LOs6Jmf77yM6KuL5rOo5YaK5b6M55m76YyE44CCJ1xuXHRcdCksXG5cdFx0Tm9QZXJtRXJyb3IzOiB3Z1VMUyhcblx0XHRcdCfnm7jlhbPlip/og73ku4XlkJHms6jlhoznlKjmiLflvIDmlL7vvIzor7fnmbvlvZXlkI7nu6fnu63kvb/nlKjjgILoi6XmgqjmsqHmnInmsYLpl7vnmb7np5HotKblj7fvvIzor7fms6jlhozlkI7nmbvlvZXjgIInLFxuXHRcdFx0J+ebuOmXnOWKn+iDveWDheWQkeazqOWGiueUqOaItumWi+aUvu+8jOiri+eZu+WFpeW+jOe5vOe6jOS9v+eUqOOAguiLpeaCqOaykuacieaxguiBnueZvuenkeizrOiZn++8jOiri+azqOWGiuW+jOeZu+mMhOOAgidcblx0XHQpLFxuXHRcdE5vUGVybUVycm9yNDogd2dVTFMoXG5cdFx0XHQn5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5pyJ55aR6Zeu77yM6K+35LiO5rGC6Ze755m+56eR6L+Q6JCl6ICF6IGU57O744CCJyxcblx0XHRcdCfmgqjmspLmnInmrIrpmZDoqKrllY/nm7jpl5zpoIHpnaLjgILoi6XmnInnlpHllY/vvIzoq4voiIfmsYLogZ7nmb7np5HpgYvnh5/ogIXoga/ns7vjgIInXG5cdFx0KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtXR19TS0lOfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCBnZXRDb250ZW50ID0gKHJlZmVyZW5jZTogRWxlbWVudCk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IGxhYmVsOiBzdHJpbmcgfCBudWxsID0gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuXHRjb25zdCB0aXRsZTogc3RyaW5nIHwgbnVsbCA9IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ2FsdCcpID8/IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG5cblx0cmV0dXJuIChsYWJlbCA9PT0gdGl0bGUgPyBsYWJlbCA6IHRpdGxlIHx8IGxhYmVsKSB8fCAocmVmZXJlbmNlLnRleHRDb250ZW50IGFzIHN0cmluZyk7XG59O1xuXG5jb25zdCBvbkNyZWF0ZUNhbGxiYWNrID0gKGluc3RhbmNlOiBSZXR1cm5UeXBlPHR5cGVvZiB0aXBweT5bMF0pOiB2b2lkID0+IHtcblx0Y29uc3Qge3JlZmVyZW5jZX0gPSBpbnN0YW5jZTtcblx0cmVmZXJlbmNlLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGdldENvbnRlbnQocmVmZXJlbmNlKSk7XG5cdHJlZmVyZW5jZS5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XG59O1xuXG5jb25zdCBvblNob3dDYWxsYmFjayA9IChpbnN0YW5jZTogUmV0dXJuVHlwZTx0eXBlb2YgdGlwcHk+WzBdKTogdm9pZCA9PiB7XG5cdG9uQ3JlYXRlQ2FsbGJhY2soaW5zdGFuY2UpO1xuXHRpbnN0YW5jZS5zZXRDb250ZW50KGdldENvbnRlbnQoaW5zdGFuY2UucmVmZXJlbmNlKSk7XG59O1xuXG5jb25zdCB0aXBweUZvckNpdGl6ZW5IZWFkZXIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGlmIChXR19TS0lOICE9PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZChcblx0XHQnLmNpdGl6ZW4taGVhZGVyIGxhYmVsW3RpdGxlXSwuY2l0aXplbi1oZWFkZXIgLm13LWVjaG8tbm90aWZpY2F0aW9ucy1iYWRnZSwuY2l0aXplbi1oZWFkZXJfX2xvZ28gYSwucGFnZS1hY3Rpb25zPm5hdj51bD5saSBhLC5wYWdlLWFjdGlvbnNfX2J1dHRvbidcblx0KSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGxldCB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cigndGl0bGUnKTtcblx0XHRpZiAoIXRpdGxlKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR0aXRsZSA9IHRpdGxlLnJlcGxhY2UoL1xccyo/XFxbLis/XSQvLCAnJyk7XG5cblx0XHQkZWxlbWVudC5hdHRyKHtcblx0XHRcdCdhcmlhLWxhYmVsJzogdGl0bGUsXG5cdFx0XHR0aXRsZTogJycsXG5cdFx0fSk7XG5cdFx0dGlwcHkoJGVsZW1lbnQuZ2V0KDApIGFzIEhUTUxFbGVtZW50LCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGNvbnRlbnQ6IHRpdGxlLFxuXHRcdFx0cGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5jb25zdCB0aXBweUZvckV4dGVuc2lvbiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuQ29sbGFwc2libGVTaWRlYmFyLmpzJyk7XG5cdHRpcHB5KCcjc2lkZWJhckJ1dHRvbicsIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiBnZXRDb250ZW50LFxuXHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uSGlkZGVuOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdH0pO1xuXG5cdGlmIChXR19TS0lOID09PSAndmVjdG9yJykge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LkNvbGxhcHNpYmxlU2lkZWJhci52ZWN0b3InKTtcblx0XHR0aXBweSgnI3NpZGViYXJDb2xsYXBzZScsIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogZ2V0Q29udGVudCxcblx0XHRcdHBsYWNlbWVudDogJ3JpZ2h0Jyxcblx0XHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHRcdH0pO1xuXHR9XG5cblx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuRGFya01vZGUnKTtcblx0dGlwcHkoJyNkYXJrbW9kZS1idXR0b24nLCB7XG5cdFx0YXJyb3c6IHRydWUsXG5cdFx0Y29udGVudDogZ2V0Q29udGVudCxcblx0XHRwbGFjZW1lbnQ6ICdsZWZ0Jyxcblx0XHRvbkNyZWF0ZTogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7dGlwcHlGb3JDaXRpemVuSGVhZGVyLCB0aXBweUZvckV4dGVuc2lvbn07XG4iLCAiY29uc3QgZGVwcmVjYXRlZEZ1bmN0aW9ucyA9ICgpOiB2b2lkID0+IHtcblx0LyohXG5cdCAqIG1haW50ZW5hbmNlOiBTb21lIHVzZXIgc2NyaXB0cyBtYXkgYmUgdXNpbmcgdGhlIGZvbGxvd2luZyBkZXByZWNhdGVkIGZ1bmN0aW9ucy5cblx0ICogVGhlc2UgZnVuY3Rpb25zIGFyZSBubyBsb25nZXIgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgdXBkYXRlZC5cblx0ICovXG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTY3JpcHQnLFxuXHRcdCh0aXRsZTogc3RyaW5nKTogSFRNTFNjcmlwdEVsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG13LmxvYWRlci5hZGRTY3JpcHRUYWcoXG5cdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvamF2YXNjcmlwdCcsXG5cdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmFkZFNjcmlwdFRhZygpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTdHlsZXNoZWV0Jyxcblx0XHQodGl0bGU6IHN0cmluZyk6IEhUTUxMaW5rRWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZExpbmtUYWcoXG5cdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvY3NzJyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQndGV4dC9jc3MnXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkTGlua1RhZygpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTY3JpcHRVUkknLFxuXHRcdChtb2R1bGVzOiBzdHJpbmcpOiBIVE1MU2NyaXB0RWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZFNjcmlwdFRhZyhtdy51dGlsLndpa2lVcmxlbmNvZGUobW9kdWxlcykpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkU2NyaXB0VGFnKCkgb3IgbXcubG9hZGVyLmdldFNjcmlwdCgpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTdHlsZXNoZWV0VVJJJyxcblx0XHQobW9kdWxlczogc3RyaW5nKTogSFRNTExpbmtFbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBtdy5sb2FkZXIuYWRkTGlua1RhZyhtdy51dGlsLndpa2lVcmxlbmNvZGUobW9kdWxlcyksICd0ZXh0L2NzcycpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkTGlua1RhZygpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzQ1XG5cdFx0J2ltcG9ydFNjcmlwdENhbGxiYWNrJyxcblx0XHQodGl0bGU6IHN0cmluZywgcmVhZHk6IG5ldmVyKTogdm9pZCA9PiB7XG5cdFx0XHR2b2lkIG13LmxvYWRlclxuXHRcdFx0XHQuZ2V0U2NyaXB0KFxuXHRcdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2phdmFzY3JpcHQnLFxuXHRcdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0XHQudGhlbihyZWFkeSk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5nZXRTY3JpcHQoKSBpbnN0ZWFkJ1xuXHQpO1xuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjM0NVxuXHRcdCdpbXBvcnRTY3JpcHRVUklDYWxsYmFjaycsXG5cdFx0KHVybDogc3RyaW5nLCByZWFkeTogbmV2ZXIpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgbXcubG9hZGVyLmdldFNjcmlwdCh1cmwpLnRoZW4ocmVhZHkpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuZ2V0U2NyaXB0KCkgaW5zdGVhZCdcblx0KTtcblx0LyoqXG5cdCAqIG1haW50ZW5hbmNlOiBTb21lIHVzZXIgc2NyaXB0cyBtYXkgYmUgdXNpbmcgdGhlIGZvbGxvd2luZyBkZXByZWNhdGVkIGZ1bmN0aW9ucy5cblx0ICogVGhlc2UgZnVuY3Rpb25zIGFyZSBrZXB0IGZvciBjb21wYWJpbGl0eS5cblx0ICovXG5cdC8vIG13LmxvZy5kZXByZWNhdGUod2luZG93LCAnSlNDb25maWcnLCB7fSwgJ1VzZSB7fSBpbnN0ZWFkJyk7XG5cdC8qKlxuXHQgKiB3Z1UqUyBmdW5jdGlvbnMgaGF2ZSBiZWVuIHNwbGl0IHRvIGEgc2VwZXJhdGUgZ2FkZ2V0IChleHQuZ2FkZ2V0LmkxOG4pLlxuXHQgKi9cbn07XG5cbmV4cG9ydCB7ZGVwcmVjYXRlZEZ1bmN0aW9uc307XG4iLCAiaW1wb3J0IHtcblx0YWRkVGFyZ2V0QmxhbmssXG5cdGZpeExvY2F0aW9uSGFzaCxcblx0Ly9oaWRlTmV3VXNlcnNMb2csXG5cdGhpZ2hMaWdodFJldixcblx0bG9hZFdpdGhVUkwsXG5cdC8vbm9QZXJtV2FybmluZyxcblx0b3BlblNlYXJjaEluTmV3VGFiLFxuXHRyZW1vdmVUaXRsZUZyb21QZXJtYWxpbmssXG5cdHRpdGxlQ2xlYW5VcCxcblx0dG9nZ2xlTGluayxcblx0dW5paGFuUG9wdXAsXG59IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7dGlwcHlGb3JDaXRpemVuSGVhZGVyLCB0aXBweUZvckV4dGVuc2lvbn0gZnJvbSAnLi9tb2R1bGVzL3RpcHB5JztcbmltcG9ydCB7ZGVwcmVjYXRlZEZ1bmN0aW9uc30gZnJvbSAnLi9tb2R1bGVzL2RlcHJlY2F0ZWRGdW5jdGlvbnMnO1xuXG4oZnVuY3Rpb24gc2l0ZUNvbW1vbigpOiB2b2lkIHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dTaXRlQ29tbW9uSW5zdGFsbGVkJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoJ3dnU2l0ZUNvbW1vbkluc3RhbGxlZCcsIHRydWUpO1xuXG5cdC8vIENvcmUgbW9kdWxlc1xuXHRsb2FkV2l0aFVSTCgpO1xuXHQvL25vUGVybVdhcm5pbmcoKTtcblx0Zml4TG9jYXRpb25IYXNoKCk7XG5cblx0JCgoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXG5cdFx0Ly8gQ29yZSBtb2R1bGVzIChuZWVkICQucmVhZHkpXG5cdFx0aGlnaExpZ2h0UmV2KCRib2R5KTtcblx0XHRhZGRUYXJnZXRCbGFuaygkYm9keSk7XG5cdFx0cmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rKCRib2R5KTtcblx0XHRvcGVuU2VhcmNoSW5OZXdUYWIoJGJvZHkpO1xuXHRcdHRpdGxlQ2xlYW5VcCgkYm9keSk7XG5cdFx0dW5paGFuUG9wdXAoJGJvZHkpO1xuXHRcdC8vaGlkZU5ld1VzZXJzTG9nKCRib2R5KTtcblx0XHR0b2dnbGVMaW5rKCRib2R5KTtcblxuXHRcdC8vIFRpcHB5LXJlbGF0ZWQgY29kZXMgKG5lZWQgJC5yZWFkeSlcblx0XHR0aXBweUZvckNpdGl6ZW5IZWFkZXIoJGJvZHkpO1xuXHR9KTtcblxuXHQvLyBEZXByZWNhdGVkIGZ1bmN0aW9uc1xuXHRkZXByZWNhdGVkRnVuY3Rpb25zKCk7XG5cblx0Ly8gVGlwcHktcmVsYXRlZCBjb2Rlc1xuXHR2b2lkIHRpcHB5Rm9yRXh0ZW5zaW9uKCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxXQUEwQkMsR0FBR0MsS0FBS0MsY0FBYyxNQUFNO0FBQzVELElBQU1DLGdCQUErQkgsR0FBR0MsS0FBS0MsY0FBYyxXQUFXO0FBQ3RFLElBQU1FLGNBQTZCSixHQUFHQyxLQUFLQyxjQUFjLFNBQVM7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QUl0TCxHQUFHVSxPQUFPQyxJQUFJLHVCQUF1QixHQUFHO0FBQzNDO0VBQ0Q7QUFFQVgsS0FBR1UsT0FBTzZLLElBQUkseUJBQXlCLElBQUk7QUFHM0NuSixjQUFZO0FBRVpxRyxrQkFBZ0I7QUFFaEJqRCxJQUFFLE1BQVk7QUFDYixVQUFNYixRQUFpQ2EsRUFBRSxNQUFNO0FBRy9DZCxpQkFBYUMsS0FBSztBQUNsQlEsbUJBQWVSLEtBQUs7QUFDcEJ5Qiw2QkFBeUJ6QixLQUFLO0FBQzlCOEIsdUJBQW1COUIsS0FBSztBQUN4Qm1DLGlCQUFhbkMsS0FBSztBQUNsQjhDLGdCQUFZOUMsS0FBSztBQUVqQmdFLGVBQVdoRSxLQUFLO0FBR2hCa0YsMEJBQXNCbEYsS0FBSztFQUM1QixDQUFDO0FBR0RpRyxzQkFBb0I7QUFHcEIsT0FBS0wsa0JBQWtCO0FBQ3hCLEdBQUc7IiwKICAibmFtZXMiOiBbIlVSTF9ESUZGIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJVUkxfSElHSExJR0hUIiwgIlVSTF9ISUxJR0hUIiwgIlVSTF9VU0UiLCAiVVJMX1dJVEhfQ1NTIiwgIlVSTF9XSVRIX0pTIiwgIlVSTF9XSVRIX01PRFVMRSIsICJXR19BQ1RJT04iLCAiY29uZmlnIiwgImdldCIsICJXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUiLCAiV0dfTkFNRVNQQUNFX05VTUJFUiIsICJXR19QQUdFX05BTUUiLCAiV0dfU0NSSVBUIiwgIldHX1NLSU4iLCAiV0dfVVNFUl9OQU1FIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIndnVUxTIiwgIndpbmRvdyIsICJOb3RlIiwgImxvY2FsaXplIiwgImVuIiwgIk5vUGVybUVycm9yMCIsICJOb1Blcm1FcnJvcjEiLCAiTm9QZXJtRXJyb3IyIiwgIk5vUGVybUVycm9yMyIsICJOb1Blcm1FcnJvcjQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImxvYWRXaXRoVVJMIiwgInRlc3QiLCAibG9hZGVyIiwgImxvYWQiLCAiZ2V0VXJsIiwgImFjdGlvbiIsICJjdHlwZSIsICJtYXhhZ2UiLCAic21heGFnZSIsICJ1c2luZyIsICJ0aGVuIiwgInJlcXVpcmUyIiwgIndnVXNlck5hbWUiLCAiZXNjYXBlUmVnRXhwIiwgIlJFR0VYX0ZJTEUiLCAiUmVnRXhwIiwgImNvbmNhdCIsICJSRUdFWF9FWFQiLCAicGF0aCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgInNwbGl0IiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJfUkVHRVhfRklMRSRleGVjIiwgInVzZUZpbGUiLCAidmFsdWUiLCAibmFtZSIsICJ0b1N0cmluZyIsICJ0cmltIiwgIndoYXQiLCAiZXhlYyIsICJlbmNvZGVVUklDb21wb25lbnQiLCAiZXJyIiwgImUiLCAiZiIsICJoaWdoTGlnaHRSZXYiLCAiJGJvZHkiLCAiaGlnaGxpZ2h0IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInZlcnNpb24iLCAiZmluZCIsICJwYXJlbnQiLCAiYWRkQ2xhc3MiLCAiYWRkVGFyZ2V0QmxhbmsiLCAiZmlsdGVyIiwgIl9pbmRleCIsICJlbGVtZW50IiwgImxpbmtIcmVmIiwgIiQiLCAiYXR0ciIsICJocmVmU3BsaXQiLCAibGVuZ3RoIiwgImxvY2F0aW9uIiwgImhvc3QiLCAiaHJlZiIsICJpbmNsdWRlcyIsICJwcm90b2NvbCIsICJob3N0bmFtZSIsICJ0YXJnZXQiLCAicmVsIiwgInJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayIsICIkcGVybWFMaW5rIiwgIl8kcGVybWFMaW5rRmlyc3RDaGlsZCIsICIkcGVybWFMaW5rRmlyc3RDaGlsZCIsICJyZXBsYWNlIiwgIm9wZW5TZWFyY2hJbk5ld1RhYiIsICJvbiIsICJldmVudCIsICJjdHJsS2V5IiwgIm1ldGFLZXkiLCAidGl0bGVDbGVhblVwIiwgImZ1bGxQYWdlTmFtZSIsICJUaXRsZSIsICJnZXRQcmVmaXhlZFRleHQiLCAiJGZpcnN0SGVhZGluZyIsICJkb2N1bWVudFRpdGxlIiwgImRvY3VtZW50IiwgInRpdGxlIiwgInBhZ2VUaXRsZSIsICJ0ZXh0IiwgInJlcGxhY2VUaXRsZSIsICJ1bmloYW5Qb3B1cCIsICJlYWNoIiwgIiRlbGVtZW50IiwgInBvcHVwIiwgIk9PIiwgInVpIiwgIlBvcHVwV2lkZ2V0IiwgIiRjb250ZW50IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJsYWJlbCIsICJhbmNob3IiLCAiaGVhZCIsICJwYWRkZWQiLCAiYXBwZW5kIiwgInRvZ2dsZSIsICJmaXhMb2NhdGlvbkhhc2giLCAiaGFzaCIsICJ0b2dnbGVMaW5rIiwgIl8kdG9nZ2xlciRwYXJlbnQkIiwgIiR0b2dnbGVyIiwgInN0eWxlIiwgImNvbG9yIiwgImNzcyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0Q29udGVudCIsICJyZWZlcmVuY2UiLCAiX3JlZmVyZW5jZSRnZXRBdHRyaWJ1IiwgImdldEF0dHJpYnV0ZSIsICJ0ZXh0Q29udGVudCIsICJvbkNyZWF0ZUNhbGxiYWNrIiwgImluc3RhbmNlIiwgInNldEF0dHJpYnV0ZSIsICJyZW1vdmVBdHRyaWJ1dGUiLCAib25TaG93Q2FsbGJhY2siLCAic2V0Q29udGVudCIsICJ0aXBweUZvckNpdGl6ZW5IZWFkZXIiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJwbGFjZW1lbnQiLCAib25DcmVhdGUiLCAib25IaWRkZW4iLCAib25TaG93IiwgInRpcHB5Rm9yRXh0ZW5zaW9uIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImRlcHJlY2F0ZWRGdW5jdGlvbnMiLCAibG9nIiwgImRlcHJlY2F0ZSIsICJhZGRTY3JpcHRUYWciLCAiYWRkTGlua1RhZyIsICJtb2R1bGVzIiwgIndpa2lVcmxlbmNvZGUiLCAicmVhZHkiLCAiZ2V0U2NyaXB0IiwgInVybCIsICJzaXRlQ29tbW9uIiwgInNldCJdCn0K
