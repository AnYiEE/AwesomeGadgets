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
var siteDomain = "youshou.wiki";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9FbmhhbmNlZFNwZWNpYWxTZWFyY2gudHMiLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9vcHRpb25zLmpzb24iLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9jb21wb25lbnRzL1NlbGVjdEVsZW1lbnQudHN4IiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy9nZXRPcHRpb25EYXRhLnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy91dGlsL29wZW5QYWdlLnRzeCIsICJzcmMvRW5oYW5jZWRTcGVjaWFsU2VhcmNoL21vZHVsZXMvYWRkTGlzdGVuZXIudHMiLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9tb2R1bGVzL3Byb2Nlc3NFbGVtZW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NFbGVtZW50fSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0VsZW1lbnQnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVuaGFuY2VkU3BlY2lhbFNlYXJjaCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lICE9PSAnU2VhcmNoJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHNlYXJjaEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkID0gJGJvZHkuZmluZCgnI3NlYXJjaCcpLmdldCgwKSA/PyAkYm9keS5maW5kKCcjcG93ZXJzZWFyY2gnKS5nZXQoMCk7XG5cdGNvbnN0IHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkID0gJGJvZHkuZmluZCgnI213LXNlYXJjaC10b3AtdGFibGUnKS5nZXQoMCk7XG5cdGlmICghc2VhcmNoRWxlbWVudCB8fCAhdGFyZ2V0RWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHByb2Nlc3NFbGVtZW50KHNlYXJjaEVsZW1lbnQsIHRhcmdldEVsZW1lbnQpO1xufSk7XG4iLCAie1xuXHRcInNpdGVEb21haW5cIjogXCJ5b3VzaG91Lndpa2lcIixcblx0XCJmbGV4U3R5bGVcIjogXCJkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGFsaWduLWl0ZW1zOiBjZW50ZXJcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7Z2V0T3B0aW9uRGF0YX0gZnJvbSAnLi4vbW9kdWxlcy9nZXRPcHRpb25EYXRhJztcblxuY29uc3QgTGFiZWxFbGVtZW50ID0gKCkgPT4gKFxuXHQ8bGFiZWxcblx0XHRjbGFzc05hbWU9XCJvby11aS1sYWJlbEVsZW1lbnQtbGFiZWxcIlxuXHRcdGh0bWxGb3I9XCJlbmhhbmNlZFNwZWNpYWxTZWFyY2hcIlxuXHRcdGlubmVyVGV4dD17Z2V0TWVzc2FnZSgnU2VhcmNoIGVuZ2luZScpfVxuXHQvPlxuKTtcblxuY29uc3QgU2VsZWN0RWxlbWVudCA9ICgpID0+IChcblx0PHNlbGVjdFxuXHRcdGNsYXNzTmFtZT1cIm9vLXVpLWRyb3Bkb3duV2lkZ2V0LWhhbmRsZVwiXG5cdFx0aWQ9XCJlbmhhbmNlZFNwZWNpYWxTZWFyY2hcIlxuXHRcdG5hbWU9XCJlbmhhbmNlZFNwZWNpYWxTZWFyY2hcIlxuXHRcdHN0eWxlPXt7XG5cdFx0XHR3aWR0aDogJ2F1dG8nLFxuXHRcdH19XG5cdFx0dGl0bGU9e2dldE1lc3NhZ2UoJ1NlYXJjaCBlbmdpbmUnKX1cblx0PlxuXHRcdHtnZXRPcHRpb25EYXRhKCkubWFwPEhUTUxPcHRpb25FbGVtZW50Pigoe3NpdGUsIHVybCwgb3JpZ2lufSkgPT4ge1xuXHRcdFx0Y29uc3Qgb3B0aW9uRWxlbWVudDogSFRNTE9wdGlvbkVsZW1lbnQgPSBuZXcgT3B0aW9uKHNpdGUsIHVybCwgb3JpZ2luKTtcblxuXHRcdFx0aWYgKG9yaWdpbikge1xuXHRcdFx0XHRvcHRpb25FbGVtZW50LmRhdGFzZXRbJ29yaWdpbiddID0gJzEnO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3B0aW9uRWxlbWVudDtcblx0XHR9KX1cblx0PC9zZWxlY3Q+XG4pO1xuXG5jb25zdCBXcmFwcGVyRWxlbWVudCA9ICgpID0+IDxkaXYgc3R5bGU9e09QVElPTlMuZmxleFN0eWxlfSAvPjtcblxuZXhwb3J0IHtMYWJlbEVsZW1lbnQsIFNlbGVjdEVsZW1lbnQsIFdyYXBwZXJFbGVtZW50fTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J1NlYXJjaCBlbmdpbmUnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NlYXJjaCBlbmdpbmUnLFxuXHRcdFx0amE6ICfmpJzntKLjgqjjg7Pjgrjjg7MnLFxuXHRcdFx0emg6ICfmkJzntKLlvJXmk44nLFxuXHRcdH0pLFxuXHRcdEJhaWR1OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0JhaWR1Jyxcblx0XHRcdGphOiAnQmFpZHUnLFxuXHRcdFx0emg6ICfnmb7luqYnLFxuXHRcdH0pLFxuXHRcdEJpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQmluZycsXG5cdFx0XHQnemgtaGFucyc6ICflv4XlupQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5b+F5oeJJyxcblx0XHR9KSxcblx0XHRHb29nbGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnR29vZ2xlJyxcblx0XHRcdGphOiAnR29vZ2xlJyxcblx0XHRcdHpoOiAn6LC35q2MJyxcblx0XHR9KSxcblx0XHRZc0FyY2hpdmVzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdXNob3UgQXJjaGl2ZXMnLFxuXHRcdFx0amE6ICfmnInlhb3moaPmoYjppoYnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pyJ5YW95qGj5qGI6aaGJyxcblx0XHRcdCd6aC1oYW50JzogJ+acieeNuOaqlOahiOmkqCcsXG5cdFx0fSksXG5cdFx0U29nb3U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU29nb3UnLFxuXHRcdFx0amE6ICdTb2dvdScsXG5cdFx0XHR6aDogJ+aQnOeLlycsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxudHlwZSBPcHRpb25EYXRhID0ge1xuXHRzaXRlOiBzdHJpbmc7XG5cdHVybD86IHN0cmluZztcblx0b3JpZ2luPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IGdldE9wdGlvbkRhdGEgPSAoKTogT3B0aW9uRGF0YVtdID0+IHtcblx0cmV0dXJuIFtcblx0XHR7XG5cdFx0XHRzaXRlOiBnZXRNZXNzYWdlKCdZc0FyY2hpdmVzJyksXG5cdFx0XHRvcmlnaW46IHRydWUsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaXRlOiBnZXRNZXNzYWdlKCdCYWlkdScpLFxuXHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cuYmFpZHUuY29tL3M/d2Q9c2l0ZSUzQSR7T1BUSU9OUy5zaXRlRG9tYWlufSskMWAsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaXRlOiBnZXRNZXNzYWdlKCdCaW5nJyksXG5cdFx0XHR1cmw6IGBodHRwczovL3d3dy5iaW5nLmNvbS9zZWFyY2g/cT1zaXRlJTNBJHtPUFRJT05TLnNpdGVEb21haW59KyQxYCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNpdGU6IGdldE1lc3NhZ2UoJ0dvb2dsZScpLFxuXHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1zaXRlJTNBJHtPUFRJT05TLnNpdGVEb21haW59KyQxYCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNpdGU6IGdldE1lc3NhZ2UoJ1NvZ291JyksXG5cdFx0XHR1cmw6IGBodHRwczovL3d3dy5zb2dvdS5jb20vd2ViP3F1ZXJ5PXNpdGUlM0Eke09QVElPTlMuc2l0ZURvbWFpbn0rJDFgLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2l0ZTogJzM2MCcsXG5cdFx0XHR1cmw6IGBodHRwczovL3d3dy5zby5jb20vcz9xPXNpdGUlM0Eke09QVElPTlMuc2l0ZURvbWFpbn0rJDFgLFxuXHRcdH0sXG5cdF07XG59O1xuXG5leHBvcnQge3R5cGUgT3B0aW9uRGF0YSwgZ2V0T3B0aW9uRGF0YX07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG5jb25zdCBvcGVuUGFnZSA9ICh1cmw6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gKDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIC8+KSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblxuXHRlbGVtZW50LmNsaWNrKCk7XG59O1xuXG5leHBvcnQge29wZW5QYWdlfTtcbiIsICJpbXBvcnQge29wZW5QYWdlfSBmcm9tICcuL3V0aWwvb3BlblBhZ2UnO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9ICh0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCwgc2VsZWN0RWxlbWVudDogSFRNTFNlbGVjdEVsZW1lbnQpOiB2b2lkID0+IHtcblx0dGFyZ2V0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQ6IFN1Ym1pdEV2ZW50KTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgaW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IHRhcmdldEVsZW1lbnQucXVlcnlTZWxlY3RvcignW3R5cGU9XCJzZWFyY2hcIl0nKTtcblx0XHRpZiAoIWlucHV0RWxlbWVudCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wdGlvbkVsZW1lbnQ6IEhUTUxPcHRpb25FbGVtZW50ID0gc2VsZWN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdvcHRpb246Y2hlY2tlZCcpIGFzIEhUTUxPcHRpb25FbGVtZW50O1xuXHRcdGlmIChvcHRpb25FbGVtZW50LmRhdGFzZXRbJ29yaWdpbiddKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRvcGVuUGFnZShvcHRpb25FbGVtZW50LnZhbHVlLnJlcGxhY2UoJyQxJywgZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0RWxlbWVudC52YWx1ZSkpKTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0xhYmVsRWxlbWVudCwgU2VsZWN0RWxlbWVudCwgV3JhcHBlckVsZW1lbnR9IGZyb20gJy4uL2NvbXBvbmVudHMvU2VsZWN0RWxlbWVudCc7XG5pbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL2FkZExpc3RlbmVyJztcblxuY29uc3QgcHJvY2Vzc0VsZW1lbnQgPSAoc2VhcmNoRWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG5cdHRhcmdldEVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIGAke09QVElPTlMuZmxleFN0eWxlfWApO1xuXG5cdGNvbnN0IHdyYXBwZXJFbGVtZW50ID0gV3JhcHBlckVsZW1lbnQoKSBhcyBIVE1MRGl2RWxlbWVudDtcblx0Y29uc3QgbGFiZWxFbGVtZW50ID0gTGFiZWxFbGVtZW50KCk7XG5cdGNvbnN0IHNlbGVjdEVsZW1lbnQgPSBTZWxlY3RFbGVtZW50KCkgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG5cblx0d3JhcHBlckVsZW1lbnQuYXBwZW5kKGxhYmVsRWxlbWVudCwgc2VsZWN0RWxlbWVudCk7XG5cdHRhcmdldEVsZW1lbnQuYXBwZW5kKHdyYXBwZXJFbGVtZW50KTtcblxuXHRhZGRMaXN0ZW5lcihzZWFyY2hFbGVtZW50LCBzZWxlY3RFbGVtZW50KTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0VsZW1lbnR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0NyQixJQUFBQyxhQUFjO0FBQ2QsSUFBQUMsWUFBYTs7QUNEZCxJQUFBQyxxQkFBa0JDLFFBQUFKLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0RsQixJQUFBSyxvQkFBdUJMLFFBQUEsaUJBQUE7QUFFdkIsSUFBTU0sa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixrQkFBQSxHQUFpQkQsa0JBQUFFLFVBQVM7TUFDekJDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0wsQ0FBQztJQUNEQyxRQUFBLEdBQU9OLGtCQUFBRSxVQUFTO01BQ2ZDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJ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QUFRLE1BQU1DLG1CQUFtQkwsYUFBYUcsS0FBSyxDQUFDLENBQUM7RUFDbkYsQ0FBQztBQUNGOztBQ2JBLElBQU1HLGlCQUFpQkEsQ0FBQ0MsZUFBNEJYLGtCQUFxQztBQUN4RkEsZ0JBQWNZLGFBQWEsU0FBQSxHQUFBdEMsT0FBb0JyQixTQUFTLENBQUU7QUFFMUQsUUFBTTRELGlCQUFpQnRCLGVBQWU7QUFDdEMsUUFBTXVCLGVBQWV2QyxhQUFhO0FBQ2xDLFFBQU0wQixnQkFBZ0JwQixjQUFjO0FBRXBDZ0MsaUJBQWVFLE9BQU9ELGNBQWNiLGFBQWE7QUFDakRELGdCQUFjZSxPQUFPRixjQUFjO0FBRW5DZCxjQUFZWSxlQUFlVixhQUFhO0FBQ3pDOztBUFpBLE1BQUEsR0FBS25ELG1CQUFBa0UsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLHNCQUFzQkMsT0FBc0M7QUFBQSxNQUFBQztBQUN4RixRQUFNO0lBQUNDO0VBQTBCLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFDbkQsTUFBSUgsK0JBQStCLFVBQVU7QUFDNUM7RUFDRDtBQUVBLFFBQU1WLGlCQUFBUyxrQkFBeUNELE1BQU1NLEtBQUssU0FBUyxFQUFFRCxJQUFJLENBQUMsT0FBQSxRQUFBSixvQkFBQSxTQUFBQSxrQkFBS0QsTUFBTU0sS0FBSyxjQUFjLEVBQUVELElBQUksQ0FBQztBQUMvRyxRQUFNeEIsZ0JBQXlDbUIsTUFBTU0sS0FBSyxzQkFBc0IsRUFBRUQsSUFBSSxDQUFDO0FBQ3ZGLE1BQUksQ0FBQ2IsaUJBQWlCLENBQUNYLGVBQWU7QUFDckM7RUFDRDtBQUVBVSxpQkFBZUMsZUFBZVgsYUFBYTtBQUM1QyxDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDQiLCAicmVxdWlyZSIsICJzaXRlRG9tYWluIiwgImZsZXhTdHlsZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiemgiLCAiQmFpZHUiLCAiQmluZyIsICJHb29nbGUiLCAiWXNBcmNoaXZlcyIsICJTb2dvdSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0T3B0aW9uRGF0YSIsICJzaXRlIiwgIm9yaWdpbiIsICJ1cmwiLCAiY29uY2F0IiwgIkxhYmVsRWxlbWVudCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImh0bWxGb3IiLCAiaW5uZXJUZXh0IiwgIlNlbGVjdEVsZW1lbnQiLCAiaWQiLCAibmFtZSIsICJzdHlsZSIsICJ3aWR0aCIsICJ0aXRsZSIsICJtYXAiLCAib3B0aW9uRWxlbWVudCIsICJPcHRpb24iLCAiZGF0YXNldCIsICJXcmFwcGVyRWxlbWVudCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAib3BlblBhZ2UiLCAiZWxlbWVudCIsICJocmVmIiwgInRhcmdldCIsICJyZWwiLCAiY2xpY2siLCAiYWRkTGlzdGVuZXIiLCAidGFyZ2V0RWxlbWVudCIsICJzZWxlY3RFbGVtZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAiaW5wdXRFbGVtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAicHJldmVudERlZmF1bHQiLCAidmFsdWUiLCAicmVwbGFjZSIsICJlbmNvZGVVUklDb21wb25lbnQiLCAicHJvY2Vzc0VsZW1lbnQiLCAic2VhcmNoRWxlbWVudCIsICJzZXRBdHRyaWJ1dGUiLCAid3JhcHBlckVsZW1lbnQiLCAibGFiZWxFbGVtZW50IiwgImFwcGVuZCIsICJnZXRCb2R5IiwgInRoZW4iLCAiZW5oYW5jZWRTcGVjaWFsU2VhcmNoIiwgIiRib2R5IiwgIl8kYm9keSRmaW5kJGdldCIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImZpbmQiXQp9Cg==
