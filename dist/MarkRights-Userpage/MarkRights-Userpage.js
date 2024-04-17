/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-whoisactive.css}
 * @base {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/GeoLocationReader}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
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

// dist/MarkRights-Userpage/MarkRights-Userpage.js
var _mw$config$get;
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
//! src/MarkRights-Userpage/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "New user message", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
var WG_SKIN = mw.config.get("skin");
var WG_RELEVANT_USER_NAME = (_mw$config$get = mw.config.get("wgRelevantUserName")) !== null && _mw$config$get !== void 0 ? _mw$config$get : "";
//! src/MarkRights-Userpage/options.json
var mountPointSelector = "#footer-info,.page-info";
//! src/MarkRights-Userpage/modules/appendIcon.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
var elementWrap = (spanClass, innerElement) => {
  const className = ["gadget-markrights_userpage", "gadget-markrights_userpage__".concat(spanClass)];
  if (WG_SKIN === "citizen") {
    return /* @__PURE__ */ import_ext_gadget.default.createElement("section", {
      className
    }, innerElement);
  } else if (["vector", "vector-2022", "gongbi"].includes(WG_SKIN) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget.default.createElement("li", {
      className
    }, innerElement);
  }
  return /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
    className
  }, innerElement);
};
var appendIcon = (indicatorText, spanClass) => {
  var _document$querySelect;
  if (spanClass === "unknown" || !indicatorText) {
    return;
  }
  const indicator = /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null, /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
    className: ["gadget-markrights_userpage__icon", "gadget-markrights_userpage__icon__".concat(spanClass)],
    title: indicatorText
  }), /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
    className: "gadget-markrights_userpage__text"
  }, indicatorText));
  const tag = elementWrap(spanClass, indicator);
  (_document$querySelect = document.querySelectorAll(mountPointSelector)[0]) === null || _document$querySelect === void 0 || _document$querySelect.prepend(tag);
};
//! src/MarkRights-Userpage/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Webmaster: (0, import_ext_gadget2.localize)({
      en: "Webmaster",
      "zh-hans": "责任运营",
      "zh-hant": "責任運營"
    }),
    Steward: (0, import_ext_gadget2.localize)({
      en: "Steward",
      "zh-hans": "档案理事员",
      "zh-hant": "檔案理事員"
    }),
    CheckUser: (0, import_ext_gadget2.localize)({
      en: "CheckUser",
      "zh-hans": "用户查核",
      "zh-hant": "用戶查核"
    }),
    Suppress: (0, import_ext_gadget2.localize)({
      en: "Oversighter",
      "zh-hans": "监督员",
      "zh-hant": "監督員"
    }),
    SysOp: (0, import_ext_gadget2.localize)({
      en: "SysOp",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    }),
    InterfaceAdmin: (0, import_ext_gadget2.localize)({
      en: "Interface Administrator",
      "zh-hans": "界面管理员",
      "zh-hant": "介面管理員"
    }),
    TemplateEditor: (0, import_ext_gadget2.localize)({
      en: "Template Editor",
      "zh-hans": "模板编辑员",
      "zh-hant": "模板編輯員"
    }),
    Importer: (0, import_ext_gadget2.localize)({
      en: "Importer",
      "zh-hans": "导入者",
      "zh-hant": "匯入者"
    }),
    Patroller: (0, import_ext_gadget2.localize)({
      en: "Patroller",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    AutoPatrolled: (0, import_ext_gadget2.localize)({
      en: "Exempted from page patrol",
      "zh-hans": "优质编辑者",
      "zh-hant": "優質編輯者"
    }),
    EventSponsor: (0, import_ext_gadget2.localize)({
      en: "Event Sponsor",
      "zh-hans": "活动组织者",
      "zh-hant": "活動組織者"
    }),
    MassMessageSender: (0, import_ext_gadget2.localize)({
      en: "MassMessage sender",
      "zh-hans": "大量消息发送者",
      "zh-hant": "大量訊息傳送者"
    }),
    Confirmed: (0, import_ext_gadget2.localize)({
      en: "Confirmed user",
      "zh-hans": "确认用户",
      "zh-hant": "確認用戶"
    }),
    AutoConfirmed: (0, import_ext_gadget2.localize)({
      en: "Auto-confirmed user",
      "zh-hans": "自动确认用户",
      "zh-hant": "自動確認用戶"
    }),
    RNRSVerifyExempt: (0, import_ext_gadget2.localize)({
      en: "Exempted from real-name verification",
      "zh-hans": "实名制验证豁免",
      "zh-hant": "實名制驗證豁免"
    }),
    Bot: (0, import_ext_gadget2.localize)({
      en: "Bot",
      "zh-hans": "机器人",
      "zh-hant": "機械人"
    }),
    Flood: (0, import_ext_gadget2.localize)({
      en: "Flooder",
      "zh-hans": "机器用户",
      "zh-hant": "機械用戶"
    }),
    IPBlockExempt: (0, import_ext_gadget2.localize)({
      en: "Exempted from IP blocks",
      "zh-hans": "IP封禁豁免",
      "zh-hant": "IP封鎖豁免"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/MarkRights-Userpage/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var getPermissions = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    if (!WG_RELEVANT_USER_NAME) {
      return;
    }
    const api = (0, import_ext_gadget3.initMwApi)("MarkRights-Userpage/1.0");
    try {
      const listUsersParams = {
        action: "query",
        format: "json",
        formatversion: "2",
        list: "users",
        ususers: WG_RELEVANT_USER_NAME,
        usprop: "groups"
      };
      const {
        query
      } = yield api.get(listUsersParams);
      const [{
        groups
      }] = query.users;
      if (WEBMASTER_LIST.includes(WG_RELEVANT_USER_NAME) || groups.includes("responsibleoperator")) {
        appendIcon(getMessage("Webmaster"), "responsibleoperator");
      }
      if (groups.includes("steward")) {
        appendIcon(getMessage("Steward"), "steward");
      }
      if (groups.includes("checkuser")) {
        appendIcon(getMessage("CheckUser"), "checkuser");
      }
      if (groups.includes("suppress")) {
        appendIcon(getMessage("Suppress"), "suppress");
      }
      if (groups.includes("sysop")) {
        appendIcon(getMessage("SysOp"), "sysop");
      }
      if (groups.includes("interface-admin")) {
        appendIcon(getMessage("InterfaceAdmin"), "interface-admin");
      }
      if (groups.includes("templateeditor")) {
        appendIcon(getMessage("TemplateEditor"), "templateeditor");
      }
      if (groups.includes("importer")) {
        appendIcon(getMessage("Importer"), "importer");
      }
      if (groups.includes("patroller")) {
        appendIcon(getMessage("Patroller"), "patroller");
      }
      if (groups.includes("autopatrolled")) {
        appendIcon(getMessage("AutoPatrolled"), "autopatrolled");
      }
      if (groups.includes("massmessage-sender")) {
        appendIcon(getMessage("MassMessageSender"), "massmessage-sender");
      }
      if (groups.includes("autoconfirmed")) {
        appendIcon(getMessage("AutoConfirmed"), "autoconfirmed");
      } else if (groups.includes("confirmed")) {
        appendIcon(getMessage("Confirmed"), "confirmed");
      }
      if (groups.includes("rnrsverify-exempt")) {
        appendIcon(getMessage("RNRSVerifyExempt"), "rnrsverify-exempt");
      }
      if (groups.includes("bot") && !SYSTEM_SCRIPT_LIST.includes(WG_RELEVANT_USER_NAME)) {
        appendIcon(getMessage("Bot"), "bot");
      }
      if (groups.includes("flood")) {
        appendIcon(getMessage("Flood"), "flood");
      }
      if (groups.includes("ipblock-exempt")) {
        appendIcon(getMessage("IPBlockExempt"), "ipblock-exempt");
      }
    } catch {
    }
  });
  return function getPermissions2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/MarkRights-Userpage/MarkRights-Userpage.ts
if (WG_RELEVANT_USER_NAME && mw.config.get("wgNamespaceNumber") === 2 && mw.config.get("wgAction") === "view") {
  const relevantUserPageName = new mw.Title(WG_RELEVANT_USER_NAME, 2).toText();
  const pageName = new mw.Title(mw.config.get("wgPageName")).toText();
  if (relevantUserPageName === pageName) {
    void getPermissions();
  }
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9vcHRpb25zLmpzb24iLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9hcHBlbmRJY29uLnRzeCIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL01hcmtSaWdodHMtVXNlcnBhZ2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFNZU1RFTV9TQ1JJUFRfTElTVDogc3RyaW5nW10gPSBbXG5cdCfmu6XnlKjov4fmu6TlmagnLFxuXHQnTmV3IHVzZXIgbWVzc2FnZScsXG5cdCdFeGFtcGxlJyxcblx0J0V4dGVybmFsIGNvbnRyaWJ1dG9ycycsXG5cdCdNYWludGVuYW5jZSBzY3JpcHQnLFxuXHQnTWVkaWFXaWtpIGRlZmF1bHQnLFxuXHQnTWVkaWFXaWtpIG1lc3NhZ2UgZGVsaXZlcnknLFxuXHQnTmV3IHVzZXIgcGFnZScsXG5dO1xuY29uc3QgV0VCTUFTVEVSX0xJU1Q6IHN0cmluZ1tdID0gWydRaXVXZW4nLCAnUWl1V2VuIGZvciBBY2NvdW50cycsICdRaXV3ZW5Tb2NpYWxNZWRpYSddOyAvL+aaguaXtuS/neeVme+8jOW+heaXpeWQjuWumuS5iVxuY29uc3QgV0dfU0tJTiA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKTtcbmNvbnN0IFdHX1JFTEVWQU5UX1VTRVJfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dSZWxldmFudFVzZXJOYW1lJykgPz8gJyc7XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVCwgV0dfU0tJTiwgV0dfUkVMRVZBTlRfVVNFUl9OQU1FfTtcbiIsICJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuaW1wb3J0IHtXR19TS0lOfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgZWxlbWVudFdyYXAgPSAoc3BhbkNsYXNzOiBVc2VyUmlnaHRzLCBpbm5lckVsZW1lbnQ6IFJlYWN0RWxlbWVudCkgPT4ge1xuXHRjb25zdCBjbGFzc05hbWUgPSBbJ2dhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlJywgYGdhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX18ke3NwYW5DbGFzc31gXTtcblxuXHRpZiAoV0dfU0tJTiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57aW5uZXJFbGVtZW50fTwvc2VjdGlvbj47XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoV0dfU0tJTikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9Pntpbm5lckVsZW1lbnR9PC9saT47XG5cdH1cblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9Pntpbm5lckVsZW1lbnR9PC9kaXY+O1xufTtcblxuY29uc3QgYXBwZW5kSWNvbiA9IChpbmRpY2F0b3JUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQsIHNwYW5DbGFzczogVXNlclJpZ2h0cyB8ICd1bmtub3duJyk6IHZvaWQgPT4ge1xuXHRpZiAoc3BhbkNsYXNzID09PSAndW5rbm93bicgfHwgIWluZGljYXRvclRleHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgaW5kaWNhdG9yID0gKFxuXHRcdDw+XG5cdFx0XHQ8c3BhblxuXHRcdFx0XHRjbGFzc05hbWU9e1snZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfX2ljb24nLCBgZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfX2ljb25fXyR7c3BhbkNsYXNzfWBdfVxuXHRcdFx0XHR0aXRsZT17aW5kaWNhdG9yVGV4dH1cblx0XHRcdC8+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZV9fdGV4dFwiPntpbmRpY2F0b3JUZXh0fTwvc3Bhbj5cblx0XHQ8Lz5cblx0KTtcblx0Y29uc3QgdGFnID0gZWxlbWVudFdyYXAoc3BhbkNsYXNzLCBpbmRpY2F0b3IpO1xuXHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcilbMF0gYXMgSFRNTEVsZW1lbnQpPy5wcmVwZW5kKHRhZyk7XG59O1xuXG5leHBvcnQge2FwcGVuZEljb259O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRXZWJtYXN0ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2VibWFzdGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+i0o+S7u+i/kOiQpScsXG5cdFx0XHQnemgtaGFudCc6ICfosqzku7vpgYvnh58nLFxuXHRcdH0pLFxuXHRcdFN0ZXdhcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3Rld2FyZCcsXG5cdFx0XHQnemgtaGFucyc6ICfmoaPmoYjnkIbkuovlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qqU5qGI55CG5LqL5ZOhJyxcblx0XHR9KSxcblx0XHRDaGVja1VzZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2hlY2tVc2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eUqOaIt+afpeaguCcsXG5cdFx0XHQnemgtaGFudCc6ICfnlKjmiLbmn6XmoLgnLFxuXHRcdH0pLFxuXHRcdFN1cHByZXNzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ092ZXJzaWdodGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ebkeedo+WRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnm6PnnaPlk6EnLFxuXHRcdH0pLFxuXHRcdFN5c09wOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N5c09wJyxcblx0XHRcdCd6aC1oYW5zJzogJ+euoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdEludGVyZmFjZUFkbWluOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ludGVyZmFjZSBBZG1pbmlzdHJhdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eVjOmdoueuoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfku4vpnaLnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdFRlbXBsYXRlRWRpdG9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RlbXBsYXRlIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qih5p2/57eo6Lyv5ZOhJyxcblx0XHR9KSxcblx0XHRJbXBvcnRlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbXBvcnRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflr7zlhaXogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yyv5YWl6ICFJyxcblx0XHR9KSxcblx0XHRQYXRyb2xsZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6Xlk6EnLFxuXHRcdH0pLFxuXHRcdEF1dG9QYXRyb2xsZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSBwYWdlIHBhdHJvbCcsXG5cdFx0XHQnemgtaGFucyc6ICfkvJjotKjnvJbovpHogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YSq6LOq57eo6Lyv6ICFJyxcblx0XHR9KSxcblx0XHRFdmVudFNwb25zb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXZlbnQgU3BvbnNvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5rS75YuV57WE57mU6ICFJyxcblx0XHR9KSxcblx0XHRNYXNzTWVzc2FnZVNlbmRlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYXNzTWVzc2FnZSBzZW5kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wkp+mHj+ioiuaBr+WCs+mAgeiAhScsXG5cdFx0fSksXG5cdFx0Q29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdEF1dG9Db25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXV0by1jb25maXJtZWQgdXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfoh6rliqjnoa7orqTnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Ieq5YuV56K66KqN55So5oi2Jyxcblx0XHR9KSxcblx0XHRSTlJTVmVyaWZ5RXhlbXB0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gcmVhbC1uYW1lIHZlcmlmaWNhdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrp7lkI3liLbpqozor4HosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+m5ZCN5Yi26amX6K2J6LGB5YWNJyxcblx0XHR9KSxcblx0XHRCb3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQm90Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOS6uicsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDkuronLFxuXHRcdH0pLFxuXHRcdEZsb29kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Zsb29kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOeUqOaIticsXG5cdFx0fSksXG5cdFx0SVBCbG9ja0V4ZW1wdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIElQIGJsb2NrcycsXG5cdFx0XHQnemgtaGFucyc6ICdJUOWwgeemgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICdJUOWwgemOluixgeWFjScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVCwgV0dfUkVMRVZBTlRfVVNFUl9OQU1FfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5pbXBvcnQge2FwcGVuZEljb259IGZyb20gJy4vYXBwZW5kSWNvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuZXhwb3J0IGNvbnN0IGdldFBlcm1pc3Npb25zID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRpZiAoIVdHX1JFTEVWQU5UX1VTRVJfTkFNRSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnTWFya1JpZ2h0cy1Vc2VycGFnZS8xLjAnKTtcblx0dHJ5IHtcblx0XHRjb25zdCBsaXN0VXNlcnNQYXJhbXM6IEFwaVF1ZXJ5VXNlcnNQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdGxpc3Q6ICd1c2VycycsXG5cdFx0XHR1c3VzZXJzOiBXR19SRUxFVkFOVF9VU0VSX05BTUUsXG5cdFx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdH07XG5cdFx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQobGlzdFVzZXJzUGFyYW1zKTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdFx0Y29uc3QgW3tncm91cHN9XTogW3tncm91cHM6IFVzZXJSaWdodHNbXX1dID0gcXVlcnkudXNlcnM7XG5cdFx0aWYgKFdFQk1BU1RFUl9MSVNULmluY2x1ZGVzKFdHX1JFTEVWQU5UX1VTRVJfTkFNRSkgfHwgZ3JvdXBzLmluY2x1ZGVzKCdyZXNwb25zaWJsZW9wZXJhdG9yJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnV2VibWFzdGVyJyksICdyZXNwb25zaWJsZW9wZXJhdG9yJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3N0ZXdhcmQnKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdTdGV3YXJkJyksICdzdGV3YXJkJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2NoZWNrdXNlcicpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ0NoZWNrVXNlcicpLCAnY2hlY2t1c2VyJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3N1cHByZXNzJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnU3VwcHJlc3MnKSwgJ3N1cHByZXNzJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3N5c29wJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnU3lzT3AnKSwgJ3N5c29wJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2ludGVyZmFjZS1hZG1pbicpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ0ludGVyZmFjZUFkbWluJyksICdpbnRlcmZhY2UtYWRtaW4nKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygndGVtcGxhdGVlZGl0b3InKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdUZW1wbGF0ZUVkaXRvcicpLCAndGVtcGxhdGVlZGl0b3InKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnaW1wb3J0ZXInKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdJbXBvcnRlcicpLCAnaW1wb3J0ZXInKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygncGF0cm9sbGVyJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnUGF0cm9sbGVyJyksICdwYXRyb2xsZXInKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnYXV0b3BhdHJvbGxlZCcpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ0F1dG9QYXRyb2xsZWQnKSwgJ2F1dG9wYXRyb2xsZWQnKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnbWFzc21lc3NhZ2Utc2VuZGVyJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnTWFzc01lc3NhZ2VTZW5kZXInKSwgJ21hc3NtZXNzYWdlLXNlbmRlcicpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdhdXRvY29uZmlybWVkJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnQXV0b0NvbmZpcm1lZCcpLCAnYXV0b2NvbmZpcm1lZCcpO1xuXHRcdH0gZWxzZSBpZiAoZ3JvdXBzLmluY2x1ZGVzKCdjb25maXJtZWQnKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdDb25maXJtZWQnKSwgJ2NvbmZpcm1lZCcpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdybnJzdmVyaWZ5LWV4ZW1wdCcpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ1JOUlNWZXJpZnlFeGVtcHQnKSwgJ3JucnN2ZXJpZnktZXhlbXB0Jyk7XG5cdFx0fVxuXHRcdGlmIChcblx0XHRcdGdyb3Vwcy5pbmNsdWRlcygnYm90JykgJiZcblx0XHRcdCFTWVNURU1fU0NSSVBUX0xJU1QuaW5jbHVkZXMoV0dfUkVMRVZBTlRfVVNFUl9OQU1FKSAvLyBBbHJlYWR5IHNob3duIGluIEdlb0xvY2F0aW9uVmlld2VyXG5cdFx0KSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ0JvdCcpLCAnYm90Jyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2Zsb29kJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnRmxvb2QnKSwgJ2Zsb29kJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2lwYmxvY2stZXhlbXB0JykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnSVBCbG9ja0V4ZW1wdCcpLCAnaXBibG9jay1leGVtcHQnKTtcblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG4iLCAiaW1wb3J0IHtXR19SRUxFVkFOVF9VU0VSX05BTUV9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25zfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmlmIChXR19SRUxFVkFOVF9VU0VSX05BTUUgJiYgbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA9PT0gMiAmJiBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpID09PSAndmlldycpIHtcblx0Y29uc3QgcmVsZXZhbnRVc2VyUGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZShXR19SRUxFVkFOVF9VU0VSX05BTUUsIDIpLnRvVGV4dCgpO1xuXHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSkudG9UZXh0KCk7XG5cdGlmIChyZWxldmFudFVzZXJQYWdlTmFtZSA9PT0gcGFnZU5hbWUpIHtcblx0XHR2b2lkIGdldFBlcm1pc3Npb25zKCk7XG5cdH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLHFCQUErQixDQUNwQyxTQUNBLG9CQUNBLFdBQ0EseUJBQ0Esc0JBQ0EscUJBQ0EsOEJBQ0EsZUFBQTtBQUVELElBQU1DLGlCQUEyQixDQUFDLFVBQVUsdUJBQXVCLG1CQUFtQjtBQUN0RixJQUFNQyxVQUFVQyxHQUFHQyxPQUFPQyxJQUFJLE1BQU07QUFDcEMsSUFBTUMseUJBQUFDLGlCQUFnQ0osR0FBR0MsT0FBT0MsSUFBSSxvQkFBb0IsT0FBQSxRQUFBRSxtQkFBQSxTQUFBQSxpQkFBSzs7QUNYNUUsSUFBQUMscUJBQXNCOztBQ0F2QixJQUFBQyxvQkFBa0NDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBO0FBSWxDLElBQU1DLGNBQWNBLENBQUNDLFdBQXVCQyxpQkFBK0I7QUFDMUUsUUFBTUMsWUFBWSxDQUFDLDhCQUFBLCtCQUFBQyxP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SWdCLE9BQU9uRCxTQUFTLG1CQUFtQixHQUFHO0FBQ3pDRyxtQkFBV2dDLFdBQVcsa0JBQWtCLEdBQUcsbUJBQW1CO01BQy9EO0FBQ0EsVUFDQ2dCLE9BQU9uRCxTQUFTLEtBQUssS0FDckIsQ0FBQ25CLG1CQUFtQm1CLFNBQVNiLHFCQUFxQixHQUNqRDtBQUNEZ0IsbUJBQVdnQyxXQUFXLEtBQUssR0FBRyxLQUFLO01BQ3BDO0FBQ0EsVUFBSWdCLE9BQU9uRCxTQUFTLE9BQU8sR0FBRztBQUM3QkcsbUJBQVdnQyxXQUFXLE9BQU8sR0FBRyxPQUFPO01BQ3hDO0FBQ0EsVUFBSWdCLE9BQU9uRCxTQUFTLGdCQUFnQixHQUFHO0FBQ3RDRyxtQkFBV2dDLFdBQVcsZUFBZSxHQUFHLGdCQUFnQjtNQUN6RDtJQUNELFFBQVE7SUFBQztFQUNWLENBQUE7QUFBQSxTQUFBLFNBdkVhRyxrQkFBQTtBQUFBLFdBQUFDLEtBQUFjLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUNIYixJQUFJbkUseUJBQXlCSCxHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQixNQUFNLEtBQUtGLEdBQUdDLE9BQU9DLElBQUksVUFBVSxNQUFNLFFBQVE7QUFDOUcsUUFBTXFFLHVCQUErQixJQUFJdkUsR0FBR3dFLE1BQU1yRSx1QkFBdUIsQ0FBQyxFQUFFc0UsT0FBTztBQUNuRixRQUFNQyxXQUFtQixJQUFJMUUsR0FBR3dFLE1BQU14RSxHQUFHQyxPQUFPQyxJQUFJLFlBQVksQ0FBQyxFQUFFdUUsT0FBTztBQUMxRSxNQUFJRix5QkFBeUJHLFVBQVU7QUFDdEMsU0FBS3BCLGVBQWU7RUFDckI7QUFDRDsiLAogICJuYW1lcyI6IFsiU1lTVEVNX1NDUklQVF9MSVNUIiwgIldFQk1BU1RFUl9MSVNUIiwgIldHX1NLSU4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19SRUxFVkFOVF9VU0VSX05BTUUiLCAiX213JGNvbmZpZyRnZXQiLCAibW91bnRQb2ludFNlbGVjdG9yIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJlbGVtZW50V3JhcCIsICJzcGFuQ2xhc3MiLCAiaW5uZXJFbGVtZW50IiwgImNsYXNzTmFtZSIsICJjb25jYXQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiYXBwZW5kSWNvbiIsICJpbmRpY2F0b3JUZXh0IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJpbmRpY2F0b3IiLCAiRnJhZ21lbnQiLCAidGl0bGUiLCAidGFnIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAicHJlcGVuZCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIldlYm1hc3RlciIsICJsb2NhbGl6ZSIsICJlbiIsICJTdGV3YXJkIiwgIkNoZWNrVXNlciIsICJTdXBwcmVzcyIsICJTeXNPcCIsICJJbnRlcmZhY2VBZG1pbiIsICJUZW1wbGF0ZUVkaXRvciIsICJJbXBvcnRlciIsICJQYXRyb2xsZXIiLCAiQXV0b1BhdHJvbGxlZCIsICJFdmVudFNwb25zb3IiLCAiTWFzc01lc3NhZ2VTZW5kZXIiLCAiQ29uZmlybWVkIiwgIkF1dG9Db25maXJtZWQiLCAiUk5SU1ZlcmlmeUV4ZW1wdCIsICJCb3QiLCAiRmxvb2QiLCAiSVBCbG9ja0V4ZW1wdCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldFBlcm1pc3Npb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiYXBpIiwgImluaXRNd0FwaSIsICJsaXN0VXNlcnNQYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAidXN1c2VycyIsICJ1c3Byb3AiLCAicXVlcnkiLCAiZ3JvdXBzIiwgInVzZXJzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJyZWxldmFudFVzZXJQYWdlTmFtZSIsICJUaXRsZSIsICJ0b1RleHQiLCAicGFnZU5hbWUiXQp9Cg==
