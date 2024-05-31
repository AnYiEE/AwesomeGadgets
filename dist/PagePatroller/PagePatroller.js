/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:WhitePhosphorus/js/PagePatroller.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/PagePatroller}
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

// dist/PagePatroller/PagePatroller.js
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
//! src/PagePatroller/options.json
var mountPointSelector = "#footer-info,.page-info";
//! src/PagePatroller/modules/constant.ts
var WG_SKIN = mw.config.get("skin");
var ELEMENT_ID = "footer-info-patroller";
//! src/PagePatroller/modules/elementWrap.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/PagePatroller/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Loading...": (0, import_ext_gadget.localize)({
      en: "Loading...",
      "zh-hans": "正在加载此页面的巡查者……",
      "zh-hant": "正在加載此頁面的巡查者……"
    }),
    "This page has not been patrolled yet": (0, import_ext_gadget.localize)({
      en: "This page has not been patrolled yet.",
      "zh-hans": "此页面尚未被巡查。",
      "zh-hant": "此頁面尚未被巡查。"
    }),
    "This page was patrolled at by": (0, import_ext_gadget.localize)({
      en: "This page was patrolled at $1 by",
      "zh-hans": "此页面巡查于$1，巡查者是",
      "zh-hant": "此頁面巡查於$1，巡查者是"
    }),
    "This page has been patrolled, or has been marked as auto-patrolled": (0, import_ext_gadget.localize)({
      en: "This page has been patrolled, or has been marked as auto-patrolled.",
      "zh-hans": "此页面尚未被巡查，或已自动标为已巡查。",
      "zh-hant": "此頁面尚未被巡查，或已自動標爲已巡查。"
    }),
    "Error occurs when finding patroller": (0, import_ext_gadget.localize)({
      en: "Error occurs when finding patroller.",
      "zh-hans": "查找巡查者时出现错误。",
      "zh-hant": "查找巡查者時出現錯誤。"
    }),
    period: (0, import_ext_gadget.localize)({
      en: ".",
      zh: "。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/PagePatroller/modules/elementWrap.tsx
var elementWrap = () => {
  if (WG_SKIN === "citizen") {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
      className: "page-info__item",
      id: ELEMENT_ID
    });
  } else if (["vector", "vector-2022", "gongbi"].includes(WG_SKIN) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      id: ELEMENT_ID
    });
  }
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id: ELEMENT_ID
  });
};
var notBeenPatrolledYet = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  id: "page_patroller__not-patrolled"
}, getMessage("This page has not been patrolled yet"));
var loading = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  id: "page_patroller__loading"
}, getMessage("Loading..."));
var patrolled = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  id: "page_patroller__patrolled"
}, getMessage("This page has been patrolled, or has been marked as auto-patrolled"));
var patrolledBy = (timestampText, user) => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  id: "page_patroller__patrolled-by"
}, getMessage("This page was patrolled at by").replace("$1", timestampText), /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  href: mw.util.getUrl("User:".concat(user))
}, user), getMessage("period"));
var errorMessage = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  id: "page_patroller__error"
}, getMessage("Error occurs when finding patroller"));
//! src/PagePatroller/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/PagePatroller/modules/replaceChild.ts
var replaceChild = (element, newChild) => {
  while (element.hasChildNodes()) {
    var _element$firstChild;
    (_element$firstChild = element.firstChild) === null || _element$firstChild === void 0 || _element$firstChild.remove();
  }
  element.append(newChild);
};
//! src/PagePatroller/modules/core.ts
var pagePatroller = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    var _document$querySelect;
    const element = elementWrap();
    (_document$querySelect = document.querySelectorAll(mountPointSelector)[0]) === null || _document$querySelect === void 0 || _document$querySelect.prepend(element);
    if (document.querySelectorAll(".patrollink").length) {
      element.append(notBeenPatrolledYet());
      return;
    }
    element.append(loading());
    try {
      const api = (0, import_ext_gadget3.initMwApi)("PagePatroller/2.0");
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        prop: ["revisions"],
        titles: mw.config.get("wgPageName"),
        list: "logevents",
        letype: "patrol",
        letitle: mw.config.get("wgPageName"),
        rvprop: "timestamp",
        rvlimit: 1,
        rvdir: "newer"
      };
      const {
        query
      } = yield api.get(params);
      if (query !== null && query !== void 0 && query.logevents && query.logevents.length) {
        const [log] = query.logevents;
        const {
          action,
          user
        } = log;
        const {
          timestamp
        } = log;
        const date = new Date(timestamp);
        if (action === "patrol") {
          replaceChild(element, patrolledBy(date.toLocaleString(), user));
        } else {
          replaceChild(element, patrolled());
        }
      } else {
        replaceChild(element, patrolled());
      }
    } catch (error) {
      console.error("[PagePatroller]:", error);
      replaceChild(element, errorMessage());
    }
  });
  return function pagePatroller2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/PagePatroller/PagePatroller.ts
if (mw.config.get("wgNamespaceNumber") >= 0 && mw.config.get("wgPageName") !== "有兽档案馆:首页" && mw.config.get("wgArticleId") > 0) {
  void pagePatroller();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1BhZ2VQYXRyb2xsZXIvb3B0aW9ucy5qc29uIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9lbGVtZW50V3JhcC50c3giLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvY29yZS50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL3JlcGxhY2VDaGlsZC50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9QYWdlUGF0cm9sbGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMy4wXCJcbn1cbiIsICJjb25zdCBXR19TS0lOOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCdza2luJyk7XG5jb25zdCBFTEVNRU5UX0lEOiBzdHJpbmcgPSAnZm9vdGVyLWluZm8tcGF0cm9sbGVyJztcblxuZXhwb3J0IHtFTEVNRU5UX0lELCBXR19TS0lOfTtcbiIsICJpbXBvcnQge0VMRU1FTlRfSUQsIFdHX1NLSU59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBlbGVtZW50V3JhcCA9ICgpID0+IHtcblx0aWYgKFdHX1NLSU4gPT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9eydwYWdlLWluZm9fX2l0ZW0nfSBpZD17RUxFTUVOVF9JRH0gLz47XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoV0dfU0tJTikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgaWQ9e0VMRU1FTlRfSUR9IC8+O1xuXHR9XG5cdHJldHVybiA8ZGl2IGlkPXtFTEVNRU5UX0lEfSAvPjtcbn07XG5cbmNvbnN0IG5vdEJlZW5QYXRyb2xsZWRZZXQgPSAoKSA9PiAoXG5cdDxzcGFuIGlkPXsncGFnZV9wYXRyb2xsZXJfX25vdC1wYXRyb2xsZWQnfT57Z2V0TWVzc2FnZSgnVGhpcyBwYWdlIGhhcyBub3QgYmVlbiBwYXRyb2xsZWQgeWV0Jyl9PC9zcGFuPlxuKTtcblxuY29uc3QgbG9hZGluZyA9ICgpID0+IDxzcGFuIGlkPXsncGFnZV9wYXRyb2xsZXJfX2xvYWRpbmcnfT57Z2V0TWVzc2FnZSgnTG9hZGluZy4uLicpfTwvc3Bhbj47XG5cbmNvbnN0IHBhdHJvbGxlZCA9ICgpID0+IChcblx0PHNwYW4gaWQ9eydwYWdlX3BhdHJvbGxlcl9fcGF0cm9sbGVkJ30+XG5cdFx0e2dldE1lc3NhZ2UoJ1RoaXMgcGFnZSBoYXMgYmVlbiBwYXRyb2xsZWQsIG9yIGhhcyBiZWVuIG1hcmtlZCBhcyBhdXRvLXBhdHJvbGxlZCcpfVxuXHQ8L3NwYW4+XG4pO1xuXG5jb25zdCBwYXRyb2xsZWRCeSA9ICh0aW1lc3RhbXBUZXh0OiBzdHJpbmcsIHVzZXI6IHN0cmluZykgPT4gKFxuXHQ8c3BhbiBpZD17J3BhZ2VfcGF0cm9sbGVyX19wYXRyb2xsZWQtYnknfT5cblx0XHR7Z2V0TWVzc2FnZSgnVGhpcyBwYWdlIHdhcyBwYXRyb2xsZWQgYXQgYnknKS5yZXBsYWNlKCckMScsIHRpbWVzdGFtcFRleHQpfVxuXHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKGBVc2VyOiR7dXNlcn1gKX0+e3VzZXJ9PC9hPlxuXHRcdHtnZXRNZXNzYWdlKCdwZXJpb2QnKX1cblx0PC9zcGFuPlxuKTtcblxuY29uc3QgZXJyb3JNZXNzYWdlID0gKCkgPT4gKFxuXHQ8c3BhbiBpZD17J3BhZ2VfcGF0cm9sbGVyX19lcnJvcid9PntnZXRNZXNzYWdlKCdFcnJvciBvY2N1cnMgd2hlbiBmaW5kaW5nIHBhdHJvbGxlcicpfTwvc3Bhbj5cbik7XG5cbmV4cG9ydCB7ZWxlbWVudFdyYXAsIGVycm9yTWVzc2FnZSwgbG9hZGluZywgbm90QmVlblBhdHJvbGxlZFlldCwgcGF0cm9sbGVkLCBwYXRyb2xsZWRCeX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdMb2FkaW5nLi4uJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOWKoOi9veatpOmhtemdoueahOW3oeafpeiAheKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjliqDovInmraTpoIHpnaLnmoTlt6Hmn6XogIXigKbigKYnLFxuXHRcdH0pLFxuXHRcdCdUaGlzIHBhZ2UgaGFzIG5vdCBiZWVuIHBhdHJvbGxlZCB5ZXQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBoYXMgbm90IGJlZW4gcGF0cm9sbGVkIHlldC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5bCa5pyq6KKr5beh5p+l44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouWwmuacquiiq+W3oeafpeOAgicsXG5cdFx0fSksXG5cdFx0J1RoaXMgcGFnZSB3YXMgcGF0cm9sbGVkIGF0IGJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2Ugd2FzIHBhdHJvbGxlZCBhdCAkMSBieScsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlt6Hmn6Xkuo4kMe+8jOW3oeafpeiAheaYrycsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLlt6Hmn6XmlrwkMe+8jOW3oeafpeiAheaYrycsXG5cdFx0fSksXG5cdFx0J1RoaXMgcGFnZSBoYXMgYmVlbiBwYXRyb2xsZWQsIG9yIGhhcyBiZWVuIG1hcmtlZCBhcyBhdXRvLXBhdHJvbGxlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGhhcyBiZWVuIHBhdHJvbGxlZCwgb3IgaGFzIGJlZW4gbWFya2VkIGFzIGF1dG8tcGF0cm9sbGVkLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlsJrmnKrooqvlt6Hmn6XvvIzmiJblt7Loh6rliqjmoIfkuLrlt7Llt6Hmn6XjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5bCa5pyq6KKr5beh5p+l77yM5oiW5bey6Ieq5YuV5qiZ54iy5bey5beh5p+l44CCJyxcblx0XHR9KSxcblx0XHQnRXJyb3Igb2NjdXJzIHdoZW4gZmluZGluZyBwYXRyb2xsZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vycm9yIG9jY3VycyB3aGVuIGZpbmRpbmcgcGF0cm9sbGVyLicsXG5cdFx0XHQnemgtaGFucyc6ICfmn6Xmib7lt6Hmn6XogIXml7blh7rnjrDplJnor6/jgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5p+l5om+5beh5p+l6ICF5pmC5Ye654++6Yyv6Kqk44CCJyxcblx0XHR9KSxcblx0XHRwZXJpb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2VsZW1lbnRXcmFwLCBlcnJvck1lc3NhZ2UsIGxvYWRpbmcsIG5vdEJlZW5QYXRyb2xsZWRZZXQsIHBhdHJvbGxlZCwgcGF0cm9sbGVkQnl9IGZyb20gJy4vZWxlbWVudFdyYXAnO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3JlcGxhY2VDaGlsZH0gZnJvbSAnLi9yZXBsYWNlQ2hpbGQnO1xuXG5jb25zdCBwYWdlUGF0cm9sbGVyID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gZWxlbWVudFdyYXAoKTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcilbMF0/LnByZXBlbmQoZWxlbWVudCk7XG5cblx0Ly8gaWYgdGhlcmUgaXMgYSBwYXRyb2wgbGluaywgdGhlIHBhZ2UgbXVzdCBiZSBub3QgcGF0cm9sbGVkXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGF0cm9sbGluaycpLmxlbmd0aCkge1xuXHRcdGVsZW1lbnQuYXBwZW5kKG5vdEJlZW5QYXRyb2xsZWRZZXQoKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gTG9hZCBwYXRyb2xsZXIgaW5mb1xuXHQvLyBhZGQgYExvYWRpbmcuLi5gXG5cdGVsZW1lbnQuYXBwZW5kKGxvYWRpbmcoKSk7XG5cblx0dHJ5IHtcblx0XHRjb25zdCBhcGkgPSBpbml0TXdBcGkoJ1BhZ2VQYXRyb2xsZXIvMi4wJyk7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyAmIEFwaVF1ZXJ5TG9nRXZlbnRzUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRwcm9wOiBbJ3JldmlzaW9ucyddLFxuXHRcdFx0dGl0bGVzOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHRsaXN0OiAnbG9nZXZlbnRzJyxcblx0XHRcdGxldHlwZTogJ3BhdHJvbCcsXG5cdFx0XHRsZXRpdGxlOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHRydnByb3A6ICd0aW1lc3RhbXAnLFxuXHRcdFx0cnZsaW1pdDogMSxcblx0XHRcdHJ2ZGlyOiAnbmV3ZXInLFxuXHRcdH07XG5cdFx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRcdGlmIChxdWVyeT8ubG9nZXZlbnRzICYmIHF1ZXJ5LmxvZ2V2ZW50cy5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IFtsb2ddOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR1c2VyOiBzdHJpbmc7XG5cdFx0XHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0XHRcdFx0YWN0aW9uOiBzdHJpbmc7XG5cdFx0XHRcdH0sXG5cdFx0XHRdID0gcXVlcnkubG9nZXZlbnRzIGFzIFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHVzZXI6IHN0cmluZztcblx0XHRcdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHRcdFx0XHRhY3Rpb246IHN0cmluZztcblx0XHRcdFx0fSxcblx0XHRcdF07XG5cdFx0XHRjb25zdCB7YWN0aW9uLCB1c2VyfSA9IGxvZztcblx0XHRcdGNvbnN0IHt0aW1lc3RhbXB9ID0gbG9nO1xuXHRcdFx0Y29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XG5cblx0XHRcdGlmIChhY3Rpb24gPT09ICdwYXRyb2wnKSB7XG5cdFx0XHRcdHJlcGxhY2VDaGlsZChlbGVtZW50LCBwYXRyb2xsZWRCeShkYXRlLnRvTG9jYWxlU3RyaW5nKCksIHVzZXIpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlcGxhY2VDaGlsZChlbGVtZW50LCBwYXRyb2xsZWQoKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlcGxhY2VDaGlsZChlbGVtZW50LCBwYXRyb2xsZWQoKSk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdC8vIHJldHVybiBlcnJvcihzKVxuXHRcdGNvbnNvbGUuZXJyb3IoJ1tQYWdlUGF0cm9sbGVyXTonLCBlcnJvcik7XG5cdFx0cmVwbGFjZUNoaWxkKGVsZW1lbnQsIGVycm9yTWVzc2FnZSgpKTtcblx0fVxufTtcblxuZXhwb3J0IHtwYWdlUGF0cm9sbGVyfTtcbiIsICJjb25zdCByZXBsYWNlQ2hpbGQgPSAoZWxlbWVudDogRWxlbWVudCwgbmV3Q2hpbGQ6IEVsZW1lbnQpOiB2b2lkID0+IHtcblx0d2hpbGUgKGVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0ZWxlbWVudC5maXJzdENoaWxkPy5yZW1vdmUoKTtcblx0fVxuXHRlbGVtZW50LmFwcGVuZChuZXdDaGlsZCk7XG59O1xuXG5leHBvcnQge3JlcGxhY2VDaGlsZH07XG4iLCAiaW1wb3J0IHtwYWdlUGF0cm9sbGVyfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmlmIChcblx0bXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA+PSAwICYmXG5cdG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSAhPT0gJ+acieWFveaho+ahiOmmhjrpppbpobUnICYmXG5cdG13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJykgPiAwXG4pIHtcblx0dm9pZCBwYWdlUGF0cm9sbGVyKCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxxQkFBc0I7O0FDRHZCLElBQU1DLFVBQWtCQyxHQUFHQyxPQUFPQyxJQUFJLE1BQU07QUFDNUMsSUFBTUMsYUFBcUI7O0FDQTNCLElBQUFDLHFCQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDRGxCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFB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QyxtQkFBYUMsU0FBU0gsYUFBYSxDQUFDO0lBQ3JDO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0E5RE1VLGlCQUFBO0FBQUEsV0FBQUMsS0FBQTZCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUVITixJQUNDNUUsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUIsS0FBSyxLQUN0Q0YsR0FBR0MsT0FBT0MsSUFBSSxZQUFZLE1BQU0sY0FDaENGLEdBQUdDLE9BQU9DLElBQUksYUFBYSxJQUFJLEdBQzlCO0FBQ0QsT0FBSzJDLGNBQWM7QUFDcEI7IiwKICAibmFtZXMiOiBbIm1vdW50UG9pbnRTZWxlY3RvciIsICJXR19TS0lOIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiRUxFTUVOVF9JRCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJwZXJpb2QiLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImVsZW1lbnRXcmFwIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiaWQiLCAiaW5jbHVkZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJub3RCZWVuUGF0cm9sbGVkWWV0IiwgImxvYWRpbmciLCAicGF0cm9sbGVkIiwgInBhdHJvbGxlZEJ5IiwgInRpbWVzdGFtcFRleHQiLCAidXNlciIsICJyZXBsYWNlIiwgImhyZWYiLCAidXRpbCIsICJnZXRVcmwiLCAiY29uY2F0IiwgImVycm9yTWVzc2FnZSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVwbGFjZUNoaWxkIiwgImVsZW1lbnQiLCAibmV3Q2hpbGQiLCAiaGFzQ2hpbGROb2RlcyIsICJfZWxlbWVudCRmaXJzdENoaWxkIiwgImZpcnN0Q2hpbGQiLCAicmVtb3ZlIiwgImFwcGVuZCIsICJwYWdlUGF0cm9sbGVyIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAicHJlcGVuZCIsICJsZW5ndGgiLCAiYXBpIiwgImluaXRNd0FwaSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGVzIiwgImxpc3QiLCAibGV0eXBlIiwgImxldGl0bGUiLCAicnZwcm9wIiwgInJ2bGltaXQiLCAicnZkaXIiLCAicXVlcnkiLCAibG9nZXZlbnRzIiwgImxvZyIsICJ0aW1lc3RhbXAiLCAiZGF0ZSIsICJEYXRlIiwgInRvTG9jYWxlU3RyaW5nIiwgImVycm9yIiwgImNvbnNvbGUiLCAiYXBwbHkiLCAiYXJndW1lbnRzIl0KfQo=
