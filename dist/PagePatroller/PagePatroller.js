/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:WhitePhosphorus/js/PagePatroller.js}
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/PagePatroller}
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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
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
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1BhZ2VQYXRyb2xsZXIvb3B0aW9ucy5qc29uIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9lbGVtZW50V3JhcC50c3giLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvY29yZS50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL3JlcGxhY2VDaGlsZC50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9QYWdlUGF0cm9sbGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMy4wXCJcbn1cbiIsICJjb25zdCBXR19TS0lOOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCdza2luJyk7XG5jb25zdCBFTEVNRU5UX0lEOiBzdHJpbmcgPSAnZm9vdGVyLWluZm8tcGF0cm9sbGVyJztcblxuZXhwb3J0IHtFTEVNRU5UX0lELCBXR19TS0lOfTtcbiIsICJpbXBvcnQge0VMRU1FTlRfSUQsIFdHX1NLSU59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBlbGVtZW50V3JhcCA9ICgpID0+IHtcblx0aWYgKFdHX1NLSU4gPT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9eydwYWdlLWluZm9fX2l0ZW0nfSBpZD17RUxFTUVOVF9JRH0gLz47XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoV0dfU0tJTikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgaWQ9e0VMRU1FTlRfSUR9IC8+O1xuXHR9XG5cdHJldHVybiA8ZGl2IGlkPXtFTEVNRU5UX0lEfSAvPjtcbn07XG5cbmNvbnN0IG5vdEJlZW5QYXRyb2xsZWRZZXQgPSAoKSA9PiAoXG5cdDxzcGFuIGlkPXsncGFnZV9wYXRyb2xsZXJfX25vdC1wYXRyb2xsZWQnfT57Z2V0TWVzc2FnZSgnVGhpcyBwYWdlIGhhcyBub3QgYmVlbiBwYXRyb2xsZWQgeWV0Jyl9PC9zcGFuPlxuKTtcblxuY29uc3QgbG9hZGluZyA9ICgpID0+IDxzcGFuIGlkPXsncGFnZV9wYXRyb2xsZXJfX2xvYWRpbmcnfT57Z2V0TWVzc2FnZSgnTG9hZGluZy4uLicpfTwvc3Bhbj47XG5cbmNvbnN0IHBhdHJvbGxlZCA9ICgpID0+IChcblx0PHNwYW4gaWQ9eydwYWdlX3BhdHJvbGxlcl9fcGF0cm9sbGVkJ30+XG5cdFx0e2dldE1lc3NhZ2UoJ1RoaXMgcGFnZSBoYXMgYmVlbiBwYXRyb2xsZWQsIG9yIGhhcyBiZWVuIG1hcmtlZCBhcyBhdXRvLXBhdHJvbGxlZCcpfVxuXHQ8L3NwYW4+XG4pO1xuXG5jb25zdCBwYXRyb2xsZWRCeSA9ICh0aW1lc3RhbXBUZXh0OiBzdHJpbmcsIHVzZXI6IHN0cmluZykgPT4gKFxuXHQ8c3BhbiBpZD17J3BhZ2VfcGF0cm9sbGVyX19wYXRyb2xsZWQtYnknfT5cblx0XHR7Z2V0TWVzc2FnZSgnVGhpcyBwYWdlIHdhcyBwYXRyb2xsZWQgYXQgYnknKS5yZXBsYWNlKCckMScsIHRpbWVzdGFtcFRleHQpfVxuXHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKGBVc2VyOiR7dXNlcn1gKX0+e3VzZXJ9PC9hPlxuXHRcdHtnZXRNZXNzYWdlKCdwZXJpb2QnKX1cblx0PC9zcGFuPlxuKTtcblxuY29uc3QgZXJyb3JNZXNzYWdlID0gKCkgPT4gKFxuXHQ8c3BhbiBpZD17J3BhZ2VfcGF0cm9sbGVyX19lcnJvcid9PntnZXRNZXNzYWdlKCdFcnJvciBvY2N1cnMgd2hlbiBmaW5kaW5nIHBhdHJvbGxlcicpfTwvc3Bhbj5cbik7XG5cbmV4cG9ydCB7ZWxlbWVudFdyYXAsIGVycm9yTWVzc2FnZSwgbG9hZGluZywgbm90QmVlblBhdHJvbGxlZFlldCwgcGF0cm9sbGVkLCBwYXRyb2xsZWRCeX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdMb2FkaW5nLi4uJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOWKoOi9veatpOmhtemdoueahOW3oeafpeiAheKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjliqDovInmraTpoIHpnaLnmoTlt6Hmn6XogIXigKbigKYnLFxuXHRcdH0pLFxuXHRcdCdUaGlzIHBhZ2UgaGFzIG5vdCBiZWVuIHBhdHJvbGxlZCB5ZXQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBoYXMgbm90IGJlZW4gcGF0cm9sbGVkIHlldC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5bCa5pyq6KKr5beh5p+l44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouWwmuacquiiq+W3oeafpeOAgicsXG5cdFx0fSksXG5cdFx0J1RoaXMgcGFnZSB3YXMgcGF0cm9sbGVkIGF0IGJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2Ugd2FzIHBhdHJvbGxlZCBhdCAkMSBieScsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlt6Hmn6Xkuo4kMe+8jOW3oeafpeiAheaYrycsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLlt6Hmn6XmlrwkMe+8jOW3oeafpeiAheaYrycsXG5cdFx0fSksXG5cdFx0J1RoaXMgcGFnZSBoYXMgYmVlbiBwYXRyb2xsZWQsIG9yIGhhcyBiZWVuIG1hcmtlZCBhcyBhdXRvLXBhdHJvbGxlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGhhcyBiZWVuIHBhdHJvbGxlZCwgb3IgaGFzIGJlZW4gbWFya2VkIGFzIGF1dG8tcGF0cm9sbGVkLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlsJrmnKrooqvlt6Hmn6XvvIzmiJblt7Loh6rliqjmoIfkuLrlt7Llt6Hmn6XjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5bCa5pyq6KKr5beh5p+l77yM5oiW5bey6Ieq5YuV5qiZ54iy5bey5beh5p+l44CCJyxcblx0XHR9KSxcblx0XHQnRXJyb3Igb2NjdXJzIHdoZW4gZmluZGluZyBwYXRyb2xsZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vycm9yIG9jY3VycyB3aGVuIGZpbmRpbmcgcGF0cm9sbGVyLicsXG5cdFx0XHQnemgtaGFucyc6ICfmn6Xmib7lt6Hmn6XogIXml7blh7rnjrDplJnor6/jgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5p+l5om+5beh5p+l6ICF5pmC5Ye654++6Yyv6Kqk44CCJyxcblx0XHR9KSxcblx0XHRwZXJpb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2VsZW1lbnRXcmFwLCBlcnJvck1lc3NhZ2UsIGxvYWRpbmcsIG5vdEJlZW5QYXRyb2xsZWRZZXQsIHBhdHJvbGxlZCwgcGF0cm9sbGVkQnl9IGZyb20gJy4vZWxlbWVudFdyYXAnO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3JlcGxhY2VDaGlsZH0gZnJvbSAnLi9yZXBsYWNlQ2hpbGQnO1xuXG5jb25zdCBwYWdlUGF0cm9sbGVyID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gZWxlbWVudFdyYXAoKTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcilbMF0/LnByZXBlbmQoZWxlbWVudCk7XG5cblx0Ly8gaWYgdGhlcmUgaXMgYSBwYXRyb2wgbGluaywgdGhlIHBhZ2UgbXVzdCBiZSBub3QgcGF0cm9sbGVkXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGF0cm9sbGluaycpLmxlbmd0aCkge1xuXHRcdGVsZW1lbnQuYXBwZW5kKG5vdEJlZW5QYXRyb2xsZWRZZXQoKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gTG9hZCBwYXRyb2xsZXIgaW5mb1xuXHQvLyBhZGQgYExvYWRpbmcuLi5gXG5cdGVsZW1lbnQuYXBwZW5kKGxvYWRpbmcoKSk7XG5cblx0dHJ5IHtcblx0XHRjb25zdCBhcGkgPSBpbml0TXdBcGkoJ1BhZ2VQYXRyb2xsZXIvMi4wJyk7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyAmIEFwaVF1ZXJ5TG9nRXZlbnRzUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRwcm9wOiBbJ3JldmlzaW9ucyddLFxuXHRcdFx0dGl0bGVzOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHRsaXN0OiAnbG9nZXZlbnRzJyxcblx0XHRcdGxldHlwZTogJ3BhdHJvbCcsXG5cdFx0XHRsZXRpdGxlOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHRydnByb3A6ICd0aW1lc3RhbXAnLFxuXHRcdFx0cnZsaW1pdDogMSxcblx0XHRcdHJ2ZGlyOiAnbmV3ZXInLFxuXHRcdH07XG5cdFx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRcdGlmIChxdWVyeT8ubG9nZXZlbnRzICYmIHF1ZXJ5LmxvZ2V2ZW50cy5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IFtsb2ddOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR1c2VyOiBzdHJpbmc7XG5cdFx0XHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0XHRcdFx0YWN0aW9uOiBzdHJpbmc7XG5cdFx0XHRcdH0sXG5cdFx0XHRdID0gcXVlcnkubG9nZXZlbnRzIGFzIFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHVzZXI6IHN0cmluZztcblx0XHRcdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHRcdFx0XHRhY3Rpb246IHN0cmluZztcblx0XHRcdFx0fSxcblx0XHRcdF07XG5cdFx0XHRjb25zdCB7YWN0aW9uLCB1c2VyfSA9IGxvZztcblx0XHRcdGNvbnN0IHt0aW1lc3RhbXB9ID0gbG9nO1xuXHRcdFx0Y29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XG5cblx0XHRcdGlmIChhY3Rpb24gPT09ICdwYXRyb2wnKSB7XG5cdFx0XHRcdHJlcGxhY2VDaGlsZChlbGVtZW50LCBwYXRyb2xsZWRCeShkYXRlLnRvTG9jYWxlU3RyaW5nKCksIHVzZXIpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlcGxhY2VDaGlsZChlbGVtZW50LCBwYXRyb2xsZWQoKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlcGxhY2VDaGlsZChlbGVtZW50LCBwYXRyb2xsZWQoKSk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdC8vIHJldHVybiBlcnJvcihzKVxuXHRcdGNvbnNvbGUuZXJyb3IoJ1tQYWdlUGF0cm9sbGVyXTonLCBlcnJvcik7XG5cdFx0cmVwbGFjZUNoaWxkKGVsZW1lbnQsIGVycm9yTWVzc2FnZSgpKTtcblx0fVxufTtcblxuZXhwb3J0IHtwYWdlUGF0cm9sbGVyfTtcbiIsICJjb25zdCByZXBsYWNlQ2hpbGQgPSAoZWxlbWVudDogRWxlbWVudCwgbmV3Q2hpbGQ6IEVsZW1lbnQpOiB2b2lkID0+IHtcblx0d2hpbGUgKGVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0ZWxlbWVudC5maXJzdENoaWxkPy5yZW1vdmUoKTtcblx0fVxuXHRlbGVtZW50LmFwcGVuZChuZXdDaGlsZCk7XG59O1xuXG5leHBvcnQge3JlcGxhY2VDaGlsZH07XG4iLCAiaW1wb3J0IHtwYWdlUGF0cm9sbGVyfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmlmIChcblx0bXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA+PSAwICYmXG5cdG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSAhPT0gJ+acieWFveaho+ahiOmmhjrpppbpobUnICYmXG5cdG13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJykgPiAwXG4pIHtcblx0dm9pZCBwYWdlUGF0cm9sbGVyKCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLHFCQUFzQjs7QUNEdkIsSUFBTUMsVUFBa0JDLEdBQUdDLE9BQU9DLElBQUksTUFBTTtBQUM1QyxJQUFNQyxhQUFxQjs7QUNBM0IsSUFBQUMscUJBQWtCQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNEbEIsSUFBQUMsb0JBQXVCRCxRQUFB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QUFNLG9CQUFvQkEsS0FBSztBQUN2Q3BDLG1CQUFhQyxTQUFTSCxhQUFhLENBQUM7SUFDckM7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQTlETVUsaUJBQUE7QUFBQSxXQUFBQyxLQUFBNkIsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBRUhOLElBQ0M1RSxHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQixLQUFLLEtBQ3RDRixHQUFHQyxPQUFPQyxJQUFJLFlBQVksTUFBTSxjQUNoQ0YsR0FBR0MsT0FBT0MsSUFBSSxhQUFhLElBQUksR0FDOUI7QUFDRCxPQUFLMkMsY0FBYztBQUNwQjsiLAogICJuYW1lcyI6IFsibW91bnRQb2ludFNlbGVjdG9yIiwgIldHX1NLSU4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJFTEVNRU5UX0lEIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgInBlcmlvZCIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZWxlbWVudFdyYXAiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJpZCIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIm5vdEJlZW5QYXRyb2xsZWRZZXQiLCAibG9hZGluZyIsICJwYXRyb2xsZWQiLCAicGF0cm9sbGVkQnkiLCAidGltZXN0YW1wVGV4dCIsICJ1c2VyIiwgInJlcGxhY2UiLCAiaHJlZiIsICJ1dGlsIiwgImdldFVybCIsICJjb25jYXQiLCAiZXJyb3JNZXNzYWdlIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZXBsYWNlQ2hpbGQiLCAiZWxlbWVudCIsICJuZXdDaGlsZCIsICJoYXNDaGlsZE5vZGVzIiwgIl9lbGVtZW50JGZpcnN0Q2hpbGQiLCAiZmlyc3RDaGlsZCIsICJyZW1vdmUiLCAiYXBwZW5kIiwgInBhZ2VQYXRyb2xsZXIiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAicXVlcnlTZWxlY3RvckFsbCIsICJwcmVwZW5kIiwgImxlbmd0aCIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0aXRsZXMiLCAibGlzdCIsICJsZXR5cGUiLCAibGV0aXRsZSIsICJydnByb3AiLCAicnZsaW1pdCIsICJydmRpciIsICJxdWVyeSIsICJsb2dldmVudHMiLCAibG9nIiwgInRpbWVzdGFtcCIsICJkYXRlIiwgIkRhdGUiLCAidG9Mb2NhbGVTdHJpbmciLCAiZXJyb3IiLCAiY29uc29sZSIsICJhcHBseSIsICJhcmd1bWVudHMiXQp9Cg==
