/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/EnhancedSpecialSearch}
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
//! src/EnhancedSpecialSearch/modules/constant.ts
var WG_CANONICAL_SPECIAL_PAGE_NAME = mw.config.get("wgCanonicalSpecialPageName");
//! src/EnhancedSpecialSearch/EnhancedSpecialSearch.ts
var import_ext_gadget5 = require("ext.gadget.Util");
//! src/EnhancedSpecialSearch/modules/processElement.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.React"), 1);
//! src/EnhancedSpecialSearch/components/SelectElement.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/EnhancedSpecialSearch/options.json
var siteDomain = "youshou.wiki";
//! src/EnhancedSpecialSearch/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
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
    url: "https://www.baidu.com/s?wd=site%3A".concat(siteDomain, "%20$1")
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
var SelectElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("select", {
  title: "Enhanced Special Search",
  className: "oo-ui-dropdownWidget-handle",
  id: "enhancedSpecialSearch",
  style: {
    width: "auto"
  }
}, getOptionData().reduce((accumulator, {
  site,
  url,
  origin
}) => {
  const optionElement = new Option(site, url, origin);
  if (origin) {
    optionElement.dataset["origin"] = "1";
  }
  accumulator[accumulator.length] = optionElement;
  return accumulator;
}, []));
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
//! src/EnhancedSpecialSearch/modules/processElement.tsx
var processElement = (searchElement, targetElement) => {
  targetElement.setAttribute("style", "display:flex;flex-wrap:wrap;align-items:center");
  const selectElement = /* @__PURE__ */ import_ext_gadget4.default.createElement(SelectElement, null);
  targetElement.append(selectElement);
  addListener(searchElement, selectElement);
};
//! src/EnhancedSpecialSearch/EnhancedSpecialSearch.ts
void (0, import_ext_gadget5.getBody)().then(function enhancedSpecialSearch($body) {
  var _$body$find$get;
  if (WG_CANONICAL_SPECIAL_PAGE_NAME !== "Search") {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvRW5oYW5jZWRTcGVjaWFsU2VhcmNoLnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy9wcm9jZXNzRWxlbWVudC50c3giLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9jb21wb25lbnRzL1NlbGVjdEVsZW1lbnQudHN4IiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvb3B0aW9ucy5qc29uIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy9nZXRPcHRpb25EYXRhLnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy91dGlsL29wZW5QYWdlLnRzeCIsICJzcmMvRW5oYW5jZWRTcGVjaWFsU2VhcmNoL21vZHVsZXMvYWRkTGlzdGVuZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRTogc3RyaW5nIHwgZmFsc2UgPSBtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZScpO1xuXG5leHBvcnQge1dHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRX07XG4iLCAiaW1wb3J0IHtXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUV9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NFbGVtZW50fSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0VsZW1lbnQnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVuaGFuY2VkU3BlY2lhbFNlYXJjaCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0aWYgKFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSAhPT0gJ1NlYXJjaCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzZWFyY2hFbGVtZW50OiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCA9ICRib2R5LmZpbmQoJyNzZWFyY2gnKS5nZXQoMCkgPz8gJGJvZHkuZmluZCgnI3Bvd2Vyc2VhcmNoJykuZ2V0KDApO1xuXHRjb25zdCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCA9ICRib2R5LmZpbmQoJyNtdy1zZWFyY2gtdG9wLXRhYmxlJykuZ2V0KDApO1xuXHRpZiAoIXNlYXJjaEVsZW1lbnQgfHwgIXRhcmdldEVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRwcm9jZXNzRWxlbWVudChzZWFyY2hFbGVtZW50LCB0YXJnZXRFbGVtZW50KTtcbn0pO1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7U2VsZWN0RWxlbWVudH0gZnJvbSAnLi4vY29tcG9uZW50cy9TZWxlY3RFbGVtZW50JztcbmltcG9ydCB7YWRkTGlzdGVuZXJ9IGZyb20gJy4vYWRkTGlzdGVuZXInO1xuXG5jb25zdCBwcm9jZXNzRWxlbWVudCA9IChzZWFyY2hFbGVtZW50OiBIVE1MRWxlbWVudCwgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblx0dGFyZ2V0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDthbGlnbi1pdGVtczpjZW50ZXInKTtcblxuXHRjb25zdCBzZWxlY3RFbGVtZW50ID0gKDxTZWxlY3RFbGVtZW50IC8+KSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcblxuXHR0YXJnZXRFbGVtZW50LmFwcGVuZChzZWxlY3RFbGVtZW50KTtcblxuXHRhZGRMaXN0ZW5lcihzZWFyY2hFbGVtZW50LCBzZWxlY3RFbGVtZW50KTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0VsZW1lbnR9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0T3B0aW9uRGF0YX0gZnJvbSAnLi4vbW9kdWxlcy9nZXRPcHRpb25EYXRhJztcblxuY29uc3QgU2VsZWN0RWxlbWVudCA9ICgpID0+IChcblx0PHNlbGVjdFxuXHRcdHRpdGxlPVwiRW5oYW5jZWQgU3BlY2lhbCBTZWFyY2hcIlxuXHRcdGNsYXNzTmFtZT1cIm9vLXVpLWRyb3Bkb3duV2lkZ2V0LWhhbmRsZVwiXG5cdFx0aWQ9XCJlbmhhbmNlZFNwZWNpYWxTZWFyY2hcIlxuXHRcdHN0eWxlPXt7XG5cdFx0XHR3aWR0aDogJ2F1dG8nLFxuXHRcdH19XG5cdD5cblx0XHR7Z2V0T3B0aW9uRGF0YSgpLnJlZHVjZSgoYWNjdW11bGF0b3IsIHtzaXRlLCB1cmwsIG9yaWdpbn0pID0+IHtcblx0XHRcdGNvbnN0IG9wdGlvbkVsZW1lbnQ6IEhUTUxPcHRpb25FbGVtZW50ID0gbmV3IE9wdGlvbihzaXRlLCB1cmwsIG9yaWdpbik7XG5cblx0XHRcdGlmIChvcmlnaW4pIHtcblx0XHRcdFx0b3B0aW9uRWxlbWVudC5kYXRhc2V0WydvcmlnaW4nXSA9ICcxJztcblx0XHRcdH1cblxuXHRcdFx0YWNjdW11bGF0b3JbYWNjdW11bGF0b3IubGVuZ3RoXSA9IG9wdGlvbkVsZW1lbnQ7XG5cblx0XHRcdHJldHVybiBhY2N1bXVsYXRvcjtcblx0XHR9LCBbXSBhcyBIVE1MT3B0aW9uRWxlbWVudFtdKX1cblx0PC9zZWxlY3Q+XG4pO1xuXG5leHBvcnQge1NlbGVjdEVsZW1lbnR9O1xuIiwgIntcblx0XCJzaXRlRG9tYWluXCI6IFwieW91c2hvdS53aWtpXCJcbn1cbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QmFpZHU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQmFpZHUnLFxuXHRcdFx0amE6ICdCYWlkdScsXG5cdFx0XHR6aDogJ+eZvuW6picsXG5cdFx0fSksXG5cdFx0QmluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCaW5nJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W/heW6lCcsXG5cdFx0XHQnemgtaGFudCc6ICflv4Xmh4knLFxuXHRcdH0pLFxuXHRcdEdvb2dsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdHb29nbGUnLFxuXHRcdFx0amE6ICdHb29nbGUnLFxuXHRcdFx0emg6ICfosLfmrYwnLFxuXHRcdH0pLFxuXHRcdFlzQXJjaGl2ZXM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91c2hvdSBBcmNoaXZlcycsXG5cdFx0XHRqYTogJ+acieWFveaho+ahiOmmhicsXG5cdFx0XHQnemgtaGFucyc6ICfmnInlhb3moaPmoYjppoYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pyJ54245qqU5qGI6aSoJyxcblx0XHR9KSxcblx0XHRTb2dvdTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTb2dvdScsXG5cdFx0XHRqYTogJ1NvZ291Jyxcblx0XHRcdHpoOiAn5pCc54uXJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG50eXBlIE9wdGlvbkRhdGEgPSB7XG5cdHNpdGU6IHN0cmluZztcblx0dXJsPzogc3RyaW5nO1xuXHRvcmlnaW4/OiBib29sZWFuO1xufTtcblxuY29uc3QgZ2V0T3B0aW9uRGF0YSA9ICgpOiBPcHRpb25EYXRhW10gPT4ge1xuXHRyZXR1cm4gW1xuXHRcdHtcblx0XHRcdHNpdGU6IGdldE1lc3NhZ2UoJ1lzQXJjaGl2ZXMnKSxcblx0XHRcdG9yaWdpbjogdHJ1ZSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNpdGU6IGdldE1lc3NhZ2UoJ0JhaWR1JyksXG5cdFx0XHR1cmw6IGBodHRwczovL3d3dy5iYWlkdS5jb20vcz93ZD1zaXRlJTNBJHtPUFRJT05TLnNpdGVEb21haW59JTIwJDFgLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2l0ZTogZ2V0TWVzc2FnZSgnQmluZycpLFxuXHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cuYmluZy5jb20vc2VhcmNoP3E9c2l0ZSUzQSR7T1BUSU9OUy5zaXRlRG9tYWlufSskMWAsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaXRlOiBnZXRNZXNzYWdlKCdHb29nbGUnKSxcblx0XHRcdHVybDogYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9c2l0ZSUzQSR7T1BUSU9OUy5zaXRlRG9tYWlufSskMWAsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaXRlOiBnZXRNZXNzYWdlKCdTb2dvdScpLFxuXHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cuc29nb3UuY29tL3dlYj9xdWVyeT1zaXRlJTNBJHtPUFRJT05TLnNpdGVEb21haW59KyQxYCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNpdGU6ICczNjAnLFxuXHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cuc28uY29tL3M/cT1zaXRlJTNBJHtPUFRJT05TLnNpdGVEb21haW59KyQxYCxcblx0XHR9LFxuXHRdO1xufTtcblxuZXhwb3J0IHt0eXBlIE9wdGlvbkRhdGEsIGdldE9wdGlvbkRhdGF9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxuY29uc3Qgb3BlblBhZ2UgPSAodXJsOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3QgZWxlbWVudCA9ICg8YSBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiAvPikgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG5cblx0ZWxlbWVudC5jbGljaygpO1xufTtcblxuZXhwb3J0IHtvcGVuUGFnZX07XG4iLCAiaW1wb3J0IHtvcGVuUGFnZX0gZnJvbSAnLi91dGlsL29wZW5QYWdlJztcblxuY29uc3QgYWRkTGlzdGVuZXIgPSAodGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsIHNlbGVjdEVsZW1lbnQ6IEhUTUxTZWxlY3RFbGVtZW50KTogdm9pZCA9PiB7XG5cdHRhcmdldEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50OiBTdWJtaXRFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSB0YXJnZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwic2VhcmNoXCJdJyk7XG5cdFx0aWYgKCFpbnB1dEVsZW1lbnQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBvcHRpb25FbGVtZW50OiBIVE1MT3B0aW9uRWxlbWVudCA9IHNlbGVjdEVsZW1lbnQucXVlcnlTZWxlY3Rvcignb3B0aW9uOmNoZWNrZWQnKSBhcyBIVE1MT3B0aW9uRWxlbWVudDtcblx0XHRpZiAob3B0aW9uRWxlbWVudC5kYXRhc2V0WydvcmlnaW4nXSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0b3BlblBhZ2Uob3B0aW9uRWxlbWVudC52YWx1ZS5yZXBsYWNlKCckMScsIGVuY29kZVVSSUNvbXBvbmVudChpbnB1dEVsZW1lbnQudmFsdWUpKSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRMaXN0ZW5lcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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SUFMX1BBR0VfTkFNRSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJzaXRlRG9tYWluIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJCYWlkdSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJ6aCIsICJCaW5nIiwgIkdvb2dsZSIsICJZc0FyY2hpdmVzIiwgIlNvZ291IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZXRPcHRpb25EYXRhIiwgInNpdGUiLCAib3JpZ2luIiwgInVybCIsICJjb25jYXQiLCAiU2VsZWN0RWxlbWVudCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAidGl0bGUiLCAiY2xhc3NOYW1lIiwgImlkIiwgInN0eWxlIiwgIndpZHRoIiwgInJlZHVjZSIsICJhY2N1bXVsYXRvciIsICJvcHRpb25FbGVtZW50IiwgIk9wdGlvbiIsICJkYXRhc2V0IiwgImxlbmd0aCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAib3BlblBhZ2UiLCAiZWxlbWVudCIsICJocmVmIiwgInRhcmdldCIsICJyZWwiLCAiY2xpY2siLCAiYWRkTGlzdGVuZXIiLCAidGFyZ2V0RWxlbWVudCIsICJzZWxlY3RFbGVtZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAiaW5wdXRFbGVtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAicHJldmVudERlZmF1bHQiLCAidmFsdWUiLCAicmVwbGFjZSIsICJlbmNvZGVVUklDb21wb25lbnQiLCAicHJvY2Vzc0VsZW1lbnQiLCAic2VhcmNoRWxlbWVudCIsICJzZXRBdHRyaWJ1dGUiLCAiYXBwZW5kIiwgImdldEJvZHkiLCAidGhlbiIsICJlbmhhbmNlZFNwZWNpYWxTZWFyY2giLCAiJGJvZHkiLCAiXyRib2R5JGZpbmQkZ2V0IiwgImZpbmQiXQp9Cg==
