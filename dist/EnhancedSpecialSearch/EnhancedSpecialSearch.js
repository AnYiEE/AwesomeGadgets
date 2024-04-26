/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/EnhancedSpecialSearch}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://youshou.wiki/wiki/H:GPL-3.0}
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

// dist/EnhancedSpecialSearch/EnhancedSpecialSearch.js
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
//! src/EnhancedSpecialSearch/EnhancedSpecialSearch.ts
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/EnhancedSpecialSearch/options.json
var siteDomain = "qiuwenbaike.cn";
var flexStyle = "display: flex; flex-wrap: wrap; align-items: center";
//! src/EnhancedSpecialSearch/components/SelectElement.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/EnhancedSpecialSearch/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Search engine": (0, import_ext_gadget.localize)({
      en: "Search engine",
      ja: "検索エンジン",
      zh: "搜索引擎"
    }),
    Baidu: (0, import_ext_gadget.localize)({
      en: "Baidu",
      ja: "Baidu",
      zh: "百度"
    }),
    Bing: (0, import_ext_gadget.localize)({
      en: "Bing",
      "zh-hans": "必应",
      "zh-hant": "必應"
    }),
    Google: (0, import_ext_gadget.localize)({
      en: "Google",
      ja: "Google",
      zh: "谷歌"
    }),
    YsArchives: (0, import_ext_gadget.localize)({
      en: "Youshou Archives",
      ja: "有兽档案馆",
      "zh-hans": "有兽档案馆",
      "zh-hant": "有獸檔案館"
    }),
    Sogou: (0, import_ext_gadget.localize)({
      en: "Sogou",
      ja: "Sogou",
      zh: "搜狗"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/EnhancedSpecialSearch/modules/getOptionData.ts
var getOptionData = () => {
  return [{
    site: getMessage("YsArchives"),
    origin: true
  }, {
    site: getMessage("Baidu"),
    url: "https://www.baidu.com/s?wd=site%3A".concat(siteDomain, "+$1")
  }, {
    site: getMessage("Bing"),
    url: "https://www.bing.com/search?q=site%3A".concat(siteDomain, "+$1")
  }, {
    site: getMessage("Google"),
    url: "https://www.google.com/search?q=site%3A".concat(siteDomain, "+$1")
  }, {
    site: getMessage("Sogou"),
    url: "https://www.sogou.com/web?query=site%3A".concat(siteDomain, "+$1")
  }, {
    site: "360",
    url: "https://www.so.com/s?q=site%3A".concat(siteDomain, "+$1")
  }];
};
//! src/EnhancedSpecialSearch/components/SelectElement.tsx
var LabelElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("label", {
  className: "oo-ui-labelElement-label",
  htmlFor: "enhancedSpecialSearch",
  innerText: getMessage("Search engine")
});
var SelectElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("select", {
  className: "oo-ui-dropdownWidget-handle",
  id: "enhancedSpecialSearch",
  name: "enhancedSpecialSearch",
  style: {
    width: "auto"
  },
  title: getMessage("Search engine")
}, getOptionData().map(({
  site,
  url,
  origin
}) => {
  const optionElement = new Option(site, url, origin);
  if (origin) {
    optionElement.dataset["origin"] = "1";
  }
  return optionElement;
}));
var WrapperElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  style: flexStyle
});
//! src/EnhancedSpecialSearch/modules/util/openPage.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
var openPage = (url) => {
  const element = /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  });
  element.click();
};
//! src/EnhancedSpecialSearch/modules/addListener.ts
var addListener = (targetElement, selectElement) => {
  targetElement.addEventListener("submit", (event) => {
    const inputElement = targetElement.querySelector('[type="search"]');
    if (!inputElement) {
      return;
    }
    const optionElement = selectElement.querySelector("option:checked");
    if (optionElement.dataset["origin"]) {
      return;
    }
    event.preventDefault();
    openPage(optionElement.value.replace("$1", encodeURIComponent(inputElement.value)));
  });
};
//! src/EnhancedSpecialSearch/modules/processElement.ts
var processElement = (searchElement, targetElement) => {
  targetElement.setAttribute("style", "".concat(flexStyle));
  const wrapperElement = WrapperElement();
  const labelElement = LabelElement();
  const selectElement = SelectElement();
  wrapperElement.append(labelElement, selectElement);
  targetElement.append(wrapperElement);
  addListener(searchElement, selectElement);
};
//! src/EnhancedSpecialSearch/EnhancedSpecialSearch.ts
void (0, import_ext_gadget4.getBody)().then(function enhancedSpecialSearch($body) {
  var _$body$find$get;
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName !== "Search") {
    return;
  }
  const searchElement = (_$body$find$get = $body.find("#search").get(0)) !== null && _$body$find$get !== void 0 ? _$body$find$get : $body.find("#powersearch").get(0);
  const targetElement = $body.find("#mw-search-top-table").get(0);
  if (!searchElement || !targetElement) {
    return;
  }
  processElement(searchElement, targetElement);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9FbmhhbmNlZFNwZWNpYWxTZWFyY2gudHMiLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9vcHRpb25zLmpzb24iLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9jb21wb25lbnRzL1NlbGVjdEVsZW1lbnQudHN4IiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy9nZXRPcHRpb25EYXRhLnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy91dGlsL29wZW5QYWdlLnRzeCIsICJzcmMvRW5oYW5jZWRTcGVjaWFsU2VhcmNoL21vZHVsZXMvYWRkTGlzdGVuZXIudHMiLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9tb2R1bGVzL3Byb2Nlc3NFbGVtZW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NFbGVtZW50fSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0VsZW1lbnQnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVuaGFuY2VkU3BlY2lhbFNlYXJjaCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lICE9PSAnU2VhcmNoJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHNlYXJjaEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkID0gJGJvZHkuZmluZCgnI3NlYXJjaCcpLmdldCgwKSA/PyAkYm9keS5maW5kKCcjcG93ZXJzZWFyY2gnKS5nZXQoMCk7XG5cdGNvbnN0IHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkID0gJGJvZHkuZmluZCgnI213LXNlYXJjaC10b3AtdGFibGUnKS5nZXQoMCk7XG5cdGlmICghc2VhcmNoRWxlbWVudCB8fCAhdGFyZ2V0RWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHByb2Nlc3NFbGVtZW50KHNlYXJjaEVsZW1lbnQsIHRhcmdldEVsZW1lbnQpO1xufSk7XG4iLCAie1xuXHRcInNpdGVEb21haW5cIjogXCJxaXV3ZW5iYWlrZS5jblwiLFxuXHRcImZsZXhTdHlsZVwiOiBcImRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsgYWxpZ24taXRlbXM6IGNlbnRlclwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtnZXRPcHRpb25EYXRhfSBmcm9tICcuLi9tb2R1bGVzL2dldE9wdGlvbkRhdGEnO1xuXG5jb25zdCBMYWJlbEVsZW1lbnQgPSAoKSA9PiAoXG5cdDxsYWJlbFxuXHRcdGNsYXNzTmFtZT1cIm9vLXVpLWxhYmVsRWxlbWVudC1sYWJlbFwiXG5cdFx0aHRtbEZvcj1cImVuaGFuY2VkU3BlY2lhbFNlYXJjaFwiXG5cdFx0aW5uZXJUZXh0PXtnZXRNZXNzYWdlKCdTZWFyY2ggZW5naW5lJyl9XG5cdC8+XG4pO1xuXG5jb25zdCBTZWxlY3RFbGVtZW50ID0gKCkgPT4gKFxuXHQ8c2VsZWN0XG5cdFx0Y2xhc3NOYW1lPVwib28tdWktZHJvcGRvd25XaWRnZXQtaGFuZGxlXCJcblx0XHRpZD1cImVuaGFuY2VkU3BlY2lhbFNlYXJjaFwiXG5cdFx0bmFtZT1cImVuaGFuY2VkU3BlY2lhbFNlYXJjaFwiXG5cdFx0c3R5bGU9e3tcblx0XHRcdHdpZHRoOiAnYXV0bycsXG5cdFx0fX1cblx0XHR0aXRsZT17Z2V0TWVzc2FnZSgnU2VhcmNoIGVuZ2luZScpfVxuXHQ+XG5cdFx0e2dldE9wdGlvbkRhdGEoKS5tYXA8SFRNTE9wdGlvbkVsZW1lbnQ+KCh7c2l0ZSwgdXJsLCBvcmlnaW59KSA9PiB7XG5cdFx0XHRjb25zdCBvcHRpb25FbGVtZW50OiBIVE1MT3B0aW9uRWxlbWVudCA9IG5ldyBPcHRpb24oc2l0ZSwgdXJsLCBvcmlnaW4pO1xuXG5cdFx0XHRpZiAob3JpZ2luKSB7XG5cdFx0XHRcdG9wdGlvbkVsZW1lbnQuZGF0YXNldFsnb3JpZ2luJ10gPSAnMSc7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvcHRpb25FbGVtZW50O1xuXHRcdH0pfVxuXHQ8L3NlbGVjdD5cbik7XG5cbmNvbnN0IFdyYXBwZXJFbGVtZW50ID0gKCkgPT4gPGRpdiBzdHlsZT17T1BUSU9OUy5mbGV4U3R5bGV9IC8+O1xuXG5leHBvcnQge0xhYmVsRWxlbWVudCwgU2VsZWN0RWxlbWVudCwgV3JhcHBlckVsZW1lbnR9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnU2VhcmNoIGVuZ2luZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VhcmNoIGVuZ2luZScsXG5cdFx0XHRqYTogJ+aknOe0ouOCqOODs+OCuOODsycsXG5cdFx0XHR6aDogJ+aQnOe0ouW8leaTjicsXG5cdFx0fSksXG5cdFx0QmFpZHU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQmFpZHUnLFxuXHRcdFx0amE6ICdCYWlkdScsXG5cdFx0XHR6aDogJ+eZvuW6picsXG5cdFx0fSksXG5cdFx0QmluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCaW5nJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W/heW6lCcsXG5cdFx0XHQnemgtaGFudCc6ICflv4Xmh4knLFxuXHRcdH0pLFxuXHRcdEdvb2dsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdHb29nbGUnLFxuXHRcdFx0amE6ICdHb29nbGUnLFxuXHRcdFx0emg6ICfosLfmrYwnLFxuXHRcdH0pLFxuXHRcdFlzQXJjaGl2ZXM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91c2hvdSBBcmNoaXZlcycsXG5cdFx0XHRqYTogJ+acieWFveaho+ahiOmmhicsXG5cdFx0XHQnemgtaGFucyc6ICfmnInlhb3moaPmoYjppoYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pyJ54245qqU5qGI6aSoJyxcblx0XHR9KSxcblx0XHRTb2dvdTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTb2dvdScsXG5cdFx0XHRqYTogJ1NvZ291Jyxcblx0XHRcdHpoOiAn5pCc54uXJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG50eXBlIE9wdGlvbkRhdGEgPSB7XG5cdHNpdGU6IHN0cmluZztcblx0dXJsPzogc3RyaW5nO1xuXHRvcmlnaW4/OiBib29sZWFuO1xufTtcblxuY29uc3QgZ2V0T3B0aW9uRGF0YSA9ICgpOiBPcHRpb25EYXRhW10gPT4ge1xuXHRyZXR1cm4gW1xuXHRcdHtcblx0XHRcdHNpdGU6IGdldE1lc3NhZ2UoJ1lzQXJjaGl2ZXMnKSxcblx0XHRcdG9yaWdpbjogdHJ1ZSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNpdGU6IGdldE1lc3NhZ2UoJ0JhaWR1JyksXG5cdFx0XHR1cmw6IGBodHRwczovL3d3dy5iYWlkdS5jb20vcz93ZD1zaXRlJTNBJHtPUFRJT05TLnNpdGVEb21haW59KyQxYCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNpdGU6IGdldE1lc3NhZ2UoJ0JpbmcnKSxcblx0XHRcdHVybDogYGh0dHBzOi8vd3d3LmJpbmcuY29tL3NlYXJjaD9xPXNpdGUlM0Eke09QVElPTlMuc2l0ZURvbWFpbn0rJDFgLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2l0ZTogZ2V0TWVzc2FnZSgnR29vZ2xlJyksXG5cdFx0XHR1cmw6IGBodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPXNpdGUlM0Eke09QVElPTlMuc2l0ZURvbWFpbn0rJDFgLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2l0ZTogZ2V0TWVzc2FnZSgnU29nb3UnKSxcblx0XHRcdHVybDogYGh0dHBzOi8vd3d3LnNvZ291LmNvbS93ZWI/cXVlcnk9c2l0ZSUzQSR7T1BUSU9OUy5zaXRlRG9tYWlufSskMWAsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaXRlOiAnMzYwJyxcblx0XHRcdHVybDogYGh0dHBzOi8vd3d3LnNvLmNvbS9zP3E9c2l0ZSUzQSR7T1BUSU9OUy5zaXRlRG9tYWlufSskMWAsXG5cdFx0fSxcblx0XTtcbn07XG5cbmV4cG9ydCB7dHlwZSBPcHRpb25EYXRhLCBnZXRPcHRpb25EYXRhfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbmNvbnN0IG9wZW5QYWdlID0gKHVybDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGNvbnN0IGVsZW1lbnQgPSAoPGEgaHJlZj17dXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgLz4pIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuXG5cdGVsZW1lbnQuY2xpY2soKTtcbn07XG5cbmV4cG9ydCB7b3BlblBhZ2V9O1xuIiwgImltcG9ydCB7b3BlblBhZ2V9IGZyb20gJy4vdXRpbC9vcGVuUGFnZSc7XG5cbmNvbnN0IGFkZExpc3RlbmVyID0gKHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzZWxlY3RFbGVtZW50OiBIVE1MU2VsZWN0RWxlbWVudCk6IHZvaWQgPT4ge1xuXHR0YXJnZXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudDogU3VibWl0RXZlbnQpOiB2b2lkID0+IHtcblx0XHRjb25zdCBpbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gdGFyZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInNlYXJjaFwiXScpO1xuXHRcdGlmICghaW5wdXRFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3B0aW9uRWxlbWVudDogSFRNTE9wdGlvbkVsZW1lbnQgPSBzZWxlY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ29wdGlvbjpjaGVja2VkJykgYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XG5cdFx0aWYgKG9wdGlvbkVsZW1lbnQuZGF0YXNldFsnb3JpZ2luJ10pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdG9wZW5QYWdlKG9wdGlvbkVsZW1lbnQudmFsdWUucmVwbGFjZSgnJDEnLCBlbmNvZGVVUklDb21wb25lbnQoaW5wdXRFbGVtZW50LnZhbHVlKSkpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7TGFiZWxFbGVtZW50LCBTZWxlY3RFbGVtZW50LCBXcmFwcGVyRWxlbWVudH0gZnJvbSAnLi4vY29tcG9uZW50cy9TZWxlY3RFbGVtZW50JztcbmltcG9ydCB7YWRkTGlzdGVuZXJ9IGZyb20gJy4vYWRkTGlzdGVuZXInO1xuXG5jb25zdCBwcm9jZXNzRWxlbWVudCA9IChzZWFyY2hFbGVtZW50OiBIVE1MRWxlbWVudCwgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblx0dGFyZ2V0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYCR7T1BUSU9OUy5mbGV4U3R5bGV9YCk7XG5cblx0Y29uc3Qgd3JhcHBlckVsZW1lbnQgPSBXcmFwcGVyRWxlbWVudCgpIGFzIEhUTUxEaXZFbGVtZW50O1xuXHRjb25zdCBsYWJlbEVsZW1lbnQgPSBMYWJlbEVsZW1lbnQoKTtcblx0Y29uc3Qgc2VsZWN0RWxlbWVudCA9IFNlbGVjdEVsZW1lbnQoKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcblxuXHR3cmFwcGVyRWxlbWVudC5hcHBlbmQobGFiZWxFbGVtZW50LCBzZWxlY3RFbGVtZW50KTtcblx0dGFyZ2V0RWxlbWVudC5hcHBlbmQod3JhcHBlckVsZW1lbnQpO1xuXG5cdGFkZExpc3RlbmVyKHNlYXJjaEVsZW1lbnQsIHNlbGVjdEVsZW1lbnQpO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzRWxlbWVudH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3JCLElBQUFDLGFBQWM7QUFDZCxJQUFBQyxZQUFhOztBQ0RkLElBQUFDLHFCQUFrQkMsUUFBQUosUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDRGxCLElBQUFLLG9CQUF1QkwsUUFBQSxpQkFBQTtBQUV2QixJQUFNTSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLGtCQUFBLEdBQWlCRCxrQkFBQUUsVUFBUztNQUN6QkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTCxDQUFDO0lBQ0RDLFFBQUEsR0FBT04sa0JBQUFFLFVBQVM7TUFDZkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElB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LFFBQVEsTUFBTUMsbUJBQW1CTCxhQUFhRyxLQUFLLENBQUMsQ0FBQztFQUNuRixDQUFDO0FBQ0Y7O0FDYkEsSUFBTUcsaUJBQWlCQSxDQUFDQyxlQUE0Qlgsa0JBQXFDO0FBQ3hGQSxnQkFBY1ksYUFBYSxTQUFBLEdBQUF0QyxPQUFvQnJCLFNBQVMsQ0FBRTtBQUUxRCxRQUFNNEQsaUJBQWlCdEIsZUFBZTtBQUN0QyxRQUFNdUIsZUFBZXZDLGFBQWE7QUFDbEMsUUFBTTBCLGdCQUFnQnBCLGNBQWM7QUFFcENnQyxpQkFBZUUsT0FBT0QsY0FBY2IsYUFBYTtBQUNqREQsZ0JBQWNlLE9BQU9GLGNBQWM7QUFFbkNkLGNBQVlZLGVBQWVWLGFBQWE7QUFDekM7O0FQWkEsTUFBQSxHQUFLbkQsbUJBQUFrRSxTQUFRLEVBQUVDLEtBQUssU0FBU0Msc0JBQXNCQyxPQUFzQztBQUFBLE1BQUFDO0FBQ3hGLFFBQU07SUFBQ0M7RUFBMEIsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUNuRCxNQUFJSCwrQkFBK0IsVUFBVTtBQUM1QztFQUNEO0FBRUEsUUFBTVYsaUJBQUFTLGtCQUF5Q0QsTUFBTU0sS0FBSyxTQUFTLEVBQUVELElBQUksQ0FBQyxPQUFBLFFBQUFKLG9CQUFBLFNBQUFBLGtCQUFLRCxNQUFNTSxLQUFLLGNBQWMsRUFBRUQsSUFBSSxDQUFDO0FBQy9HLFFBQU14QixnQkFBeUNtQixNQUFNTSxLQUFLLHNCQUFzQixFQUFFRCxJQUFJLENBQUM7QUFDdkYsTUFBSSxDQUFDYixpQkFBaUIsQ0FBQ1gsZUFBZTtBQUNyQztFQUNEO0FBRUFVLGlCQUFlQyxlQUFlWCxhQUFhO0FBQzVDLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0NCIsICJyZXF1aXJlIiwgInNpdGVEb21haW4iLCAiZmxleFN0eWxlIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJ6aCIsICJCYWlkdSIsICJCaW5nIiwgIkdvb2dsZSIsICJZc0FyY2hpdmVzIiwgIlNvZ291IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZXRPcHRpb25EYXRhIiwgInNpdGUiLCAib3JpZ2luIiwgInVybCIsICJjb25jYXQiLCAiTGFiZWxFbGVtZW50IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiaHRtbEZvciIsICJpbm5lclRleHQiLCAiU2VsZWN0RWxlbWVudCIsICJpZCIsICJuYW1lIiwgInN0eWxlIiwgIndpZHRoIiwgInRpdGxlIiwgIm1hcCIsICJvcHRpb25FbGVtZW50IiwgIk9wdGlvbiIsICJkYXRhc2V0IiwgIldyYXBwZXJFbGVtZW50IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJvcGVuUGFnZSIsICJlbGVtZW50IiwgImhyZWYiLCAidGFyZ2V0IiwgInJlbCIsICJjbGljayIsICJhZGRMaXN0ZW5lciIsICJ0YXJnZXRFbGVtZW50IiwgInNlbGVjdEVsZW1lbnQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJpbnB1dEVsZW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJwcmV2ZW50RGVmYXVsdCIsICJ2YWx1ZSIsICJyZXBsYWNlIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJwcm9jZXNzRWxlbWVudCIsICJzZWFyY2hFbGVtZW50IiwgInNldEF0dHJpYnV0ZSIsICJ3cmFwcGVyRWxlbWVudCIsICJsYWJlbEVsZW1lbnQiLCAiYXBwZW5kIiwgImdldEJvZHkiLCAidGhlbiIsICJlbmhhbmNlZFNwZWNpYWxTZWFyY2giLCAiJGJvZHkiLCAiXyRib2R5JGZpbmQkZ2V0IiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZmluZCJdCn0K
