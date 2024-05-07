/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-SpecialWikitext.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/SpecialWikitext}
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

// dist/SpecialWikitext/SpecialWikitext.js
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
//! src/SpecialWikitext/SpecialWikitext.ts
var import_ext_gadget6 = require("ext.gadget.Util");
//! src/SpecialWikitext/components/SpecialWikitext.module.less
var previewLoadingContent = "SpecialWikitext-module__preview-loading__content_0PrDlG";
var previewLoadingInner = "SpecialWikitext-module__preview-loading__inner_0PrDlG";
//! src/SpecialWikitext/components/generateElements.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/SpecialWikitext/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Failed: (0, import_ext_gadget.localize)({
      en: "Failed to load preview.",
      "zh-hans": "预览加载失败",
      "zh-hant": "預覽載入失败"
    }),
    Loading: (0, import_ext_gadget.localize)({
      en: "Loading preview...",
      "zh-hans": "预览加载中……",
      "zh-hant": "預覽載入中……"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/SpecialWikitext/components/generateElements.tsx
var Failed = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
  src: "https://youshou.wiki/images/thumb/d/d6/Old_Alert_Mark_%28Orange%29.svg/48px-Old_Alert_Mark_%28Orange%29.svg.png",
  decoding: "async",
  width: "32",
  height: "32"
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, " ", getMessage("Failed")));
var Loading = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  id: "specialwikitext-preview-loading"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: ["quotebox", previewLoadingInner],
  id: "specialwikitext-preview-loading__inner"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: previewLoadingContent,
  id: "specialwikitext-preview-loading__content"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
  src: "https://youshou.wiki/images/b/b1/Loading_icon.gif",
  decoding: "async",
  width: "32",
  height: "32"
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, " ", getMessage("Loading")))));
//! src/SpecialWikitext/modules/util/checkElementExist.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var checkElementExist = (selectors) => {
  const selectorArray = (0, import_ext_gadget3.generateArray)(selectors);
  var _iterator2 = _createForOfIteratorHelper(selectorArray), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const selector = _step2.value;
      if (document.querySelector(selector)) {
        return true;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return false;
};
//! src/SpecialWikitext/modules/util/addParsedWikitext.ts
var addParsedWikitext = (parsedWikitext) => {
  const $body = $("body");
  const $parsedWikitext = $().html(parsedWikitext);
  if (checkElementExist("#specialwikitext-preview-loading")) {
    const $element = $body.find("#specialwikitext-preview-loading");
    $element.html(parsedWikitext);
    mw.hook("wikipage.content").fire($element);
  } else if (checkElementExist(".diff-currentversion-title")) {
    $body.find(".diff-currentversion-title").append($parsedWikitext);
  } else if (checkElementExist(".previewnote")) {
    $body.find(".previewnote").append($parsedWikitext);
  } else if (checkElementExist(".mw-undelete-revision")) {
    $body.find(".mw-undelete-revision").append($parsedWikitext);
  } else if (checkElementExist("#mw-content-text")) {
    $body.find("#mw-content-text").append($parsedWikitext);
  }
  mw.hook("wikipage.content").fire($parsedWikitext);
};
//! src/SpecialWikitext/modules/notice.ts
var noticeFailElement = Failed();
var noticeLoadingElement = Loading();
var replaceDOM = (selector, element) => {
  $(selector).html(element !== null && element !== void 0 ? element : "");
};
var addLoadingNotice = () => {
  addParsedWikitext(noticeLoadingElement);
};
var loadingFailNotice = () => {
  replaceDOM("#specialwikitext-preview-loading__content", noticeFailElement);
};
var removeLoadingNotice = () => {
  replaceDOM("#specialwikitext-preview-loading");
};
//! src/SpecialWikitext/options.json
var wikiTextKey = "_addText";
var version = "2.0";
//! src/SpecialWikitext/modules/lua/luaAddText.ts
var luaAddText = (inputString, newString, isEscape = false) => {
  if (newString) {
    if (inputString) {
      inputString += "\n";
    }
    if (isEscape) {
      const [escapeString] = JSON.parse("[".concat(JSON.stringify(
        // Lua不支持\u、\x转义字符
        newString.replace(/\\([ux])/gi, "$1")
      ).replace(/\\\\/g, "\\"), "]"));
      newString = escapeString;
    }
    inputString += newString;
  }
  return inputString;
};
//! src/SpecialWikitext/modules/lua/luaGetText.ts
var luaGetString = (inputString) => {
  const testStringExecArray = /[^\n]*\*\//.exec(inputString);
  let testString = inputString;
  if (testStringExecArray) {
    [testString] = testStringExecArray;
    testString = testString.slice(0, Math.max(0, testString.length - 2));
  }
  const trimCheck = testString.trim();
  const firstChar = trimCheck.charAt(0);
  if (firstChar === trimCheck.at(-1) && (firstChar === "'" || firstChar === '"')) {
    return trimCheck.slice(1, 1 + trimCheck.length - 2);
  }
  return testString.trim();
};
var luaGetContentText = (inputString) => {
  let wikitext = "";
  try {
    inputString.replace(new RegExp("".concat(wikiTextKey, "\\s*\\{[^c\\}]*content\\s*:\\s*[^\n]*"), "g"), (substring) => {
      const tempText = (/content\s*:\s*[^\n]*/.exec(substring) || ["content:"])[0].replace(/^[\s;}]+|[\s;}]+$/g, "").replace(/\s*content\s*:\s*/, "");
      if (wikitext) {
        wikitext += "\n";
      }
      wikitext += luaGetString(tempText);
      return substring;
    });
  } catch {
    return "";
  }
  return wikitext.trim();
};
var luaGetObjText = (inputString) => {
  let wikitext = "";
  try {
    inputString.replace(new RegExp("".concat(wikiTextKey, "\\s*[\\=:]\\s*[^\n]*"), "g"), (substring) => {
      const tempText = substring.replace(/^[\s;}]+|[\s;}]+$/g, "").replace(new RegExp("".concat(wikiTextKey, "\\s*[\\=:]\\s*")), "");
      if (wikitext) {
        wikitext += "\n";
      }
      wikitext += luaGetString(tempText);
      return substring;
    });
  } catch {
    return "";
  }
  return wikitext.trim();
};
var luaGetCSSwikitext = (inputString) => {
  var _ref, _document$querySelect;
  let wikitext = "";
  const cssText = (_ref = inputString || ((_document$querySelect = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value)) !== null && _ref !== void 0 ? _ref : "";
  if (!cssText.trim()) {
    return "";
  }
  wikitext = luaAddText(wikitext, luaGetContentText(cssText), true);
  wikitext = luaAddText(wikitext, luaGetObjText(cssText), true);
  return wikitext.trim();
};
var luaGetJSONwikitext = (inputString) => {
  var _ref2, _document$querySelect2;
  let wikitext = "";
  const JSONText = (_ref2 = inputString || ((_document$querySelect2 = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.value)) !== null && _ref2 !== void 0 ? _ref2 : "";
  if (!JSONText.trim()) {
    return "";
  }
  try {
    const jsonData = JSON.parse(JSONText);
    for (var _i = 0, _Object$entries = Object.entries(jsonData); _i < _Object$entries.length; _i++) {
      const [key, value] = _Object$entries[_i];
      if (new RegExp(wikiTextKey).test(key) && typeof value === "string") {
        wikitext = luaAddText(wikitext, value);
      }
      if (typeof value !== "string") {
        for (var _i2 = 0, _Object$entries2 = Object.entries(value); _i2 < _Object$entries2.length; _i2++) {
          const [k, v] = _Object$entries2[_i2];
          if (new RegExp(wikiTextKey).test(k) && typeof v === "string") {
            wikitext = luaAddText(wikitext, v);
          }
        }
      }
    }
  } catch {
    return "";
  }
  return wikitext.trim();
};
var luaGetJSwikitext = (inputString) => {
  var _ref3, _document$querySelect3;
  let wikitext = "";
  const jsText = (_ref3 = inputString || ((_document$querySelect3 = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.value)) !== null && _ref3 !== void 0 ? _ref3 : "";
  if (!jsText.trim()) {
    return "";
  }
  wikitext = luaAddText(wikitext, luaGetObjText(jsText), true);
  return wikitext.trim();
};
//! src/SpecialWikitext/modules/api.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var api = (0, import_ext_gadget4.initMwApi)("SpecialWikitext/".concat(version));
//! src/SpecialWikitext/modules/util/getLanguage.ts
var {
  wgUserLanguage,
  wgUserVariant
} = mw.config.get();
var getLanguage = () => {
  const lang = wgUserLanguage;
  if (lang.includes("zh")) {
    return wgUserVariant;
  }
  return lang;
};
//! src/SpecialWikitext/modules/mw/mwAddText.ts
var {
  skin
} = mw.config.get();
var mwAddWikiText = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (wikitext, pageName, isPreview) {
    if (wikitext.trim()) {
      const params = {
        action: "parse",
        format: "json",
        formatversion: "2",
        // 避免内容重复
        title: pageName,
        contentmodel: "wikitext",
        text: wikitext,
        prop: "text",
        uselang: getLanguage(),
        useskin: skin
      };
      if (isPreview) {
        params.disableeditsection = true;
        params.preview = true;
      }
      try {
        var _data$parse;
        const data = yield api.post(params);
        if (!(data !== null && data !== void 0 && (_data$parse = data["parse"]) !== null && _data$parse !== void 0 && _data$parse.text)) {
          return;
        }
        const parsedWikitext = data["parse"].text.trim();
        if (parsedWikitext) {
          addParsedWikitext(parsedWikitext);
        } else {
          removeLoadingNotice();
        }
      } catch {
        loadingFailNotice();
      }
    } else {
      removeLoadingNotice();
    }
  });
  return function mwAddWikiText2(_x, _x2, _x3) {
    return _ref4.apply(this, arguments);
  };
}();
var mwAddLuaText = /* @__PURE__ */ function() {
  var _ref5 = _asyncToGenerator(function* (wikitext, pageName, isPreview, callBack) {
    const tempModuleName = "AddText/Temp/Module/Data.lua";
    const moduleCall = {
      wikitext: "#invoke:",
      // 分开来，避免被分到[[:Category:有脚本错误的页面]]
      pageName: "Module:"
    };
    if (wikitext.trim()) {
      try {
        var _data$parse2;
        const params = {
          action: "parse",
          format: "json",
          formatversion: "2",
          title: pageName,
          contentmodel: "wikitext",
          templatesandboxtitle: moduleCall.pageName + tempModuleName,
          // 创建临时Lua Module
          templatesandboxtext: "return {\n	main = function()\n		xpcall(\n			function()\n				".concat(wikitext, '\n			end,\n			function()\n			end\n		)\n		local moduleWikitext = package.loaded["Module:Module wikitext"]\n		if moduleWikitext then\n			local wikitext = moduleWikitext.main()\n			if mw.text.trim(wikitext) ~= "" then\n				return mw.getCurrentFrame():preprocess(moduleWikitext.main())\n			end\n		end\n		return ""\n	end\n}'),
          templatesandboxcontentmodel: "Scribunto",
          templatesandboxcontentformat: "text/plain",
          text: "{{".concat(moduleCall.wikitext).concat(tempModuleName, "|main}}"),
          prop: "text",
          uselang: getLanguage(),
          useskin: skin
        };
        if (isPreview) {
          params.preview = true;
          params.disableeditsection = true;
        }
        const data = yield api.post(params);
        if (!(data !== null && data !== void 0 && (_data$parse2 = data["parse"]) !== null && _data$parse2 !== void 0 && _data$parse2.text)) {
          return;
        }
        const parsedWikitext = data["parse"].text.trim();
        if (!parsedWikitext) {
          removeLoadingNotice();
        } else if ($(parsedWikitext).find(".scribunto-error").text().search(tempModuleName)) {
          removeLoadingNotice();
        } else if (typeof callBack === "function") {
          callBack(parsedWikitext);
        } else {
          addParsedWikitext(parsedWikitext);
        }
      } catch {
        loadingFailNotice();
      }
    } else {
      removeLoadingNotice();
    }
  });
  return function mwAddLuaText2(_x4, _x5, _x6, _x7) {
    return _ref5.apply(this, arguments);
  };
}();
//! src/SpecialWikitext/modules/lua/luaCheck.ts
var {
  wgPageContentModel
} = mw.config.get();
var luaCheck = (inputString = "", contentModel = wgPageContentModel) => {
  switch (contentModel.toLowerCase()) {
    case "json":
      return luaGetJSONwikitext(inputString);
    case "js":
    case "javascript":
    case "text":
      return luaGetJSwikitext(inputString);
    case "css":
    case "sanitized-css":
      return luaGetCSSwikitext(inputString);
    default:
      return "";
  }
};
//! src/SpecialWikitext/modules/mw/mwApply.ts
var {
  skin: skin2,
  wgRevisionId
} = mw.config.get();
var mwApplyNotice = /* @__PURE__ */ function() {
  var _ref6 = _asyncToGenerator(function* (currentPageName, pageSubName) {
    try {
      var _data$parse3;
      const params = {
        action: "parse",
        format: "json",
        formatversion: "2",
        // get the original wikitext content of a page
        title: currentPageName + pageSubName,
        text: "{{#invoke:Special wikitext/Template|getNotices|".concat(currentPageName, "|").concat(pageSubName, "}}"),
        prop: "text",
        uselang: getLanguage(),
        useskin: skin2
      };
      const data = yield api.post(params);
      if (!(data !== null && data !== void 0 && (_data$parse3 = data["parse"]) !== null && _data$parse3 !== void 0 && _data$parse3.text)) {
        return;
      }
      const html = data["parse"].text;
      if ($(html).text().trim()) {
        addParsedWikitext(html);
      }
    } catch {
    }
  });
  return function mwApplyNotice2(_x8, _x9) {
    return _ref6.apply(this, arguments);
  };
}();
var mwApplyRevision = /* @__PURE__ */ function() {
  var _ref7 = _asyncToGenerator(function* (currentPageName) {
    try {
      var _data$parse4;
      const params = {
        action: "parse",
        format: "json",
        formatversion: "2",
        // get the original wikitext content of a page
        oldid: wgRevisionId,
        prop: "wikitext"
      };
      const data = yield api.get(params);
      if (!(data !== null && data !== void 0 && (_data$parse4 = data["parse"]) !== null && _data$parse4 !== void 0 && _data$parse4.wikitext)) {
        return;
      }
      let pageContent = luaCheck(data["parse"].wikitext.trim());
      pageContent = (checkElementExist("#mw-clearyourcache") ? "{{#invoke:Special wikitext/Template|int|clearyourcache}}" : "") + pageContent;
      if (pageContent.trim()) {
        void mwAddWikiText(pageContent, currentPageName, true);
      } else {
        removeLoadingNotice();
      }
    } catch {
      removeLoadingNotice();
    }
  });
  return function mwApplyRevision2(_x10) {
    return _ref7.apply(this, arguments);
  };
}();
//! src/SpecialWikitext/modules/util/checkMwConfig.ts
var import_ext_gadget5 = require("ext.gadget.Util");
var allMwConfig = mw.config.get();
var checkMwConfig = (configKey, expectConfig) => {
  let mwConfig = allMwConfig[configKey];
  if (!mwConfig) {
    return false;
  }
  mwConfig = String(mwConfig).toLowerCase().trim();
  if (!mwConfig) {
    return false;
  }
  return (0, import_ext_gadget5.generateArray)(expectConfig).includes(mwConfig);
};
//! src/SpecialWikitext/modules/util/checkNeedPreview.ts
var checkNeedPreview = () => {
  return document.body.innerHTML.search(wikiTextKey) > -1;
};
//! src/SpecialWikitext/modules/mw/mwAddPreview.ts
var {
  wgCanonicalNamespace,
  wgCanonicalSpecialPageName,
  wgPageName
} = mw.config.get();
var mwAddPreview = ($body) => {
  if (checkMwConfig("wgPageContentModel", ["javascript", "js", "json", "text", "css", "sanitized-css"])) {
    if (checkElementExist(".previewnote")) {
      var _mw$util$getUrl$match, _mw$util$getUrl$match2;
      const pathPath = decodeURI(mw.util.getUrl(wgPageName)).replace(new RegExp("^\\/?".concat((_mw$util$getUrl$match = (_mw$util$getUrl$match2 = mw.util.getUrl("").match(/[a-z]+/)) === null || _mw$util$getUrl$match2 === void 0 ? void 0 : _mw$util$getUrl$match2[0]) !== null && _mw$util$getUrl$match !== void 0 ? _mw$util$getUrl$match : "", "\\/")), "");
      if (pathPath !== wgPageName) {
        return;
      }
      const wikitext = luaCheck();
      if (wikitext) {
        addLoadingNotice();
        void mwAddWikiText(wikitext, wgPageName, true);
      }
    } else if (!checkElementExist(".mw-_addText-content") && checkMwConfig("wgAction", "view")) {
      if (!checkNeedPreview()) {
        return;
      }
      $body.find("#mw-clearyourcache").html("");
      if (!checkElementExist("textarea[name=wpTextbox1]")) {
        addLoadingNotice();
        void mwApplyRevision(wgPageName);
      }
    } else if (checkElementExist("#mw-revision-info") && checkMwConfig("wgAction", "view")) {
      if (!checkElementExist("textarea[name=wpTextbox1]")) {
        $body.find("#mw-clearyourcache").html(noticeLoadingElement);
        void mwApplyRevision(wgPageName);
      }
    } else {
      removeLoadingNotice();
    }
  } else if (checkMwConfig("wgPageContentModel", ["scribunto", "lua"])) {
    if (!checkNeedPreview()) {
      return;
    }
    if (checkElementExist("textarea[name=wpTextbox1]") && checkElementExist("table.diff") && !checkElementExist(".previewnote") && !checkMwConfig("wgAction", "view")) {
      var _$body$find$val;
      $(noticeLoadingElement).insertAfter("#wikiDiff");
      void mwAddLuaText((_$body$find$val = $body.find("textarea[name=wpTextbox1]").val()) !== null && _$body$find$val !== void 0 ? _$body$find$val : "", wgPageName, true);
    }
  } else if (checkElementExist(".mw-undelete-revision")) {
    if (!checkNeedPreview()) {
      return;
    }
    if (checkElementExist([".mw-highlight", "pre", ".mw-json"])) {
      var _$body$find$val2;
      const textareaContent = (_$body$find$val2 = $body.find("textarea").val()) !== null && _$body$find$val2 !== void 0 ? _$body$find$val2 : "";
      let wikitext = luaGetJSONwikitext(textareaContent);
      if (!wikitext) {
        wikitext = luaGetCSSwikitext(textareaContent);
      }
      if (wikitext) {
        addLoadingNotice();
        void mwAddWikiText(wikitext, mw.config.get("wgRelevantPageName"), true);
      } else if (/module[ _]wikitext.*_addtext/i.test($body.find(".mw-parser-output").text())) {
      }
    }
  } else if (!checkElementExist(".mw-editnotice") && checkMwConfig("wgCanonicalNamespace", "special")) {
    const pageSubName = wgPageName.replace(/special:[^/]+/i, "");
    if (wgCanonicalSpecialPageName) {
      const fullPageName = "".concat(wgCanonicalNamespace, ":").concat(wgCanonicalSpecialPageName);
      void mwApplyNotice(fullPageName, pageSubName);
    }
  } else {
    removeLoadingNotice();
  }
};
//! src/SpecialWikitext/modules/wikitextPreviewTestcase.ts
var {
  wgPageName: wgPageName2
} = mw.config.get();
var wikitextPreviewTestcase = /* @__PURE__ */ function() {
  var _ref8 = _asyncToGenerator(function* (isPreview) {
    if (!checkNeedPreview()) {
      return;
    }
    const testcaseList = document.querySelectorAll(".special-wikitext-preview-testcase");
    if (!testcaseList.length) {
      return;
    }
    const testcaseDataList = [];
    let i = 0;
    for (i = 0; i < testcaseList.length; ++i) {
      var _exec, _codeId$toLowerCase, _codeElement$textCont, _codeElement$textCont2;
      const element = testcaseList[i];
      if (!element) {
        continue;
      }
      const codeElement = element.querySelector(".mw-highlight");
      if (!codeElement) {
        continue;
      }
      const {
        className
      } = codeElement;
      if (!className) {
        continue;
      }
      const [, codeId] = (_exec = /mw-highlight-lang-(\S+)/.exec(className)) !== null && _exec !== void 0 ? _exec : [];
      const {
        length
      } = testcaseDataList;
      element.setAttribute("preview-id", length.toString());
      testcaseDataList[length] = {
        element,
        lang: (_codeId$toLowerCase = codeId === null || codeId === void 0 ? void 0 : codeId.toLowerCase()) !== null && _codeId$toLowerCase !== void 0 ? _codeId$toLowerCase : "",
        code: (_codeElement$textCont = (_codeElement$textCont2 = codeElement.textContent) === null || _codeElement$textCont2 === void 0 ? void 0 : _codeElement$textCont2.trim()) !== null && _codeElement$textCont !== void 0 ? _codeElement$textCont : ""
      };
    }
    let packageWikitext = "";
    for (var _i3 = 0, _Object$values = Object.values(testcaseDataList); _i3 < _Object$values.length; _i3++) {
      const testcaseItem = _Object$values[_i3];
      const {
        code,
        element,
        lang
      } = testcaseItem;
      if (!code) {
        continue;
      }
      const $element = $(element);
      if (["javascript", "js", "css", "json", "text"].includes(testcaseItem.lang)) {
        const wikitext = luaCheck(code, lang);
        if (wikitext) {
          $element.prepend(noticeLoadingElement);
          packageWikitext += '<div class="special-wikitext-preview-testcase-'.concat(i, '">\n').concat(wikitext, "\n</div>");
        }
      } else if (["lua", "scribunto"].includes(lang)) {
        void mwAddLuaText(code, wgPageName2, isPreview, /* @__PURE__ */ (() => {
          return (wikitext) => {
            $element.prepend(wikitext);
          };
        })());
      }
    }
    if (packageWikitext) {
      packageWikitext = '<div class="special-wikitext-preview-testcase-undefined">'.concat(packageWikitext, "</div>");
      try {
        var _data$parse5;
        const params = {
          action: "parse",
          format: "json",
          formatversion: "2",
          text: packageWikitext,
          contentmodel: "wikitext",
          prop: "text"
        };
        if (isPreview) {
          params.disableeditsection = true;
          params.preview = true;
        }
        const data = yield api.post(params);
        if (!(data !== null && data !== void 0 && (_data$parse5 = data["parse"]) !== null && _data$parse5 !== void 0 && _data$parse5.text)) {
          return;
        }
        const parsedWikitext = data["parse"].text.trim();
        if (parsedWikitext) {
          const $parsedElement = $(parsedWikitext);
          for (var _i4 = 0, _Object$entries3 = Object.entries(testcaseDataList); _i4 < _Object$entries3.length; _i4++) {
            const [key, testcaseItem] = _Object$entries3[_i4];
            const {
              element,
              lang
            } = testcaseItem;
            if (!["javascript", "js", "text", "css", "json"].includes(lang)) {
              continue;
            }
            const $element = $parsedElement.find(".special-wikitext-preview-testcase-undefined > .special-wikitext-preview-testcase-".concat(key));
            if (!$element.length) {
              continue;
            }
            const $addTarget = $(element).find("#specialwikitext-preview-loading");
            $addTarget.html($element.html());
            mw.hook("wikipage.content").fire($addTarget);
          }
        }
      } catch {
      }
    }
  });
  return function wikitextPreviewTestcase2(_x11) {
    return _ref8.apply(this, arguments);
  };
}();
//! src/SpecialWikitext/SpecialWikitext.ts
void (0, import_ext_gadget6.getBody)().then(function specialWikitext($body) {
  mwAddPreview($body);
  void wikitextPreviewTestcase(true);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NwZWNpYWxXaWtpdGV4dC9TcGVjaWFsV2lraXRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9jb21wb25lbnRzL1NwZWNpYWxXaWtpdGV4dC5tb2R1bGUubGVzcyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L2NvbXBvbmVudHMvZ2VuZXJhdGVFbGVtZW50cy50c3giLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvY2hlY2tFbGVtZW50RXhpc3QudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvYWRkUGFyc2VkV2lraXRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL25vdGljZS50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L29wdGlvbnMuanNvbiIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbHVhL2x1YUFkZFRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL2x1YS9sdWFHZXRUZXh0LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvZ2V0TGFuZ3VhZ2UudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL213L213QWRkVGV4dC50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbHVhL2x1YUNoZWNrLnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9tdy9td0FwcGx5LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy91dGlsL2NoZWNrTXdDb25maWcudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvY2hlY2tOZWVkUHJldmlldy50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbXcvbXdBZGRQcmV2aWV3LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy93aWtpdGV4dFByZXZpZXdUZXN0Y2FzZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHttd0FkZFByZXZpZXd9IGZyb20gJy4vbW9kdWxlcy9tdy9td0FkZFByZXZpZXcnO1xuaW1wb3J0IHt3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZX0gZnJvbSAnLi9tb2R1bGVzL3dpa2l0ZXh0UHJldmlld1Rlc3RjYXNlJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBzcGVjaWFsV2lraXRleHQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdC8vIOaJp+ihjOmihOiniFxuXHRtd0FkZFByZXZpZXcoJGJvZHkpO1xuXHQvLyDmo4Dmn6XmtYvor5XmoLfkvotcblx0dm9pZCB3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSh0cnVlKTtcbn0pO1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvU3BlY2lhbFdpa2l0ZXh0L2NvbXBvbmVudHMvU3BlY2lhbFdpa2l0ZXh0Lm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgcHJldmlld0xvYWRpbmdDb250ZW50ID0gXCJTcGVjaWFsV2lraXRleHQtbW9kdWxlX19wcmV2aWV3LWxvYWRpbmdfX2NvbnRlbnRfMFByRGxHXCI7XG5leHBvcnQgY29uc3QgcHJldmlld0xvYWRpbmdJbm5lciA9IFwiU3BlY2lhbFdpa2l0ZXh0LW1vZHVsZV9fcHJldmlldy1sb2FkaW5nX19pbm5lcl8wUHJEbEdcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInByZXZpZXdMb2FkaW5nQ29udGVudFwiOiBwcmV2aWV3TG9hZGluZ0NvbnRlbnQsXG4gIFwicHJldmlld0xvYWRpbmdJbm5lclwiOiBwcmV2aWV3TG9hZGluZ0lubmVyXG59O1xuICAgICAgIiwgImltcG9ydCB7cHJldmlld0xvYWRpbmdDb250ZW50LCBwcmV2aWV3TG9hZGluZ0lubmVyfSBmcm9tICcuL1NwZWNpYWxXaWtpdGV4dC5tb2R1bGUubGVzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5cbmNvbnN0IEZhaWxlZCA9ICgpID0+IChcblx0PD5cblx0XHQ8aW1nXG5cdFx0XHRzcmM9e1xuXHRcdFx0XHQnaHR0cHM6Ly95b3VzaG91Lndpa2kvaW1hZ2VzL3RodW1iL2QvZDYvT2xkX0FsZXJ0X01hcmtfJTI4T3JhbmdlJTI5LnN2Zy80OHB4LU9sZF9BbGVydF9NYXJrXyUyOE9yYW5nZSUyOS5zdmcucG5nJ1xuXHRcdFx0fVxuXHRcdFx0ZGVjb2Rpbmc9XCJhc3luY1wiXG5cdFx0XHR3aWR0aD1cIjMyXCJcblx0XHRcdGhlaWdodD1cIjMyXCJcblx0XHQvPlxuXHRcdDxzcGFuPiZuYnNwO3tnZXRNZXNzYWdlKCdGYWlsZWQnKX08L3NwYW4+XG5cdDwvPlxuKTtcblxuY29uc3QgTG9hZGluZyA9ICgpID0+IChcblx0PGRpdiBpZD17J3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmcnfT5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17WydxdW90ZWJveCcsIHByZXZpZXdMb2FkaW5nSW5uZXJdfSBpZD17J3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmdfX2lubmVyJ30+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cHJldmlld0xvYWRpbmdDb250ZW50fSBpZD17J3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmdfX2NvbnRlbnQnfT5cblx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdHNyYz17J2h0dHBzOi8veW91c2hvdS53aWtpL2ltYWdlcy9iL2IxL0xvYWRpbmdfaWNvbi5naWYnfVxuXHRcdFx0XHRcdGRlY29kaW5nPVwiYXN5bmNcIlxuXHRcdFx0XHRcdHdpZHRoPVwiMzJcIlxuXHRcdFx0XHRcdGhlaWdodD1cIjMyXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PHNwYW4+Jm5ic3A7e2dldE1lc3NhZ2UoJ0xvYWRpbmcnKX08L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQge0ZhaWxlZCwgTG9hZGluZ307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEZhaWxlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGYWlsZWQgdG8gbG9hZCBwcmV2aWV3LicsXG5cdFx0XHQnemgtaGFucyc6ICfpooTop4jliqDovb3lpLHotKUnLFxuXHRcdFx0J3poLWhhbnQnOiAn6aCQ6Ka96LyJ5YWl5aSx6LSlJyxcblx0XHR9KSxcblx0XHRMb2FkaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcgcHJldmlldy4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfpooTop4jliqDovb3kuK3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn6aCQ6Ka96LyJ5YWl5Lit4oCm4oCmJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4vLyDmo4Dmn6VzZWxlY3RvcuWvueW6lOeahERPTeWvueixoeaYr+WQpuWtmOWcqFxuY29uc3QgY2hlY2tFbGVtZW50RXhpc3QgPSAoc2VsZWN0b3JzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IGJvb2xlYW4gPT4ge1xuXHRjb25zdCBzZWxlY3RvckFycmF5OiBzdHJpbmdbXSA9IGdlbmVyYXRlQXJyYXkoc2VsZWN0b3JzKTtcblxuXHRmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIHNlbGVjdG9yQXJyYXkpIHtcblx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tFbGVtZW50RXhpc3R9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Y2hlY2tFbGVtZW50RXhpc3R9IGZyb20gJy4vY2hlY2tFbGVtZW50RXhpc3QnO1xuXG4vLyDlsIbop6PmnpDlkI7nmoR3aWtpdGV4dOWKoOWFpemhtemdouS4rVxuY29uc3QgYWRkUGFyc2VkV2lraXRleHQgPSAocGFyc2VkV2lraXRleHQ6IHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudCk6IHZvaWQgPT4ge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cdGNvbnN0ICRwYXJzZWRXaWtpdGV4dDogSlF1ZXJ5ID0gJCgpLmh0bWwocGFyc2VkV2lraXRleHQpO1xuXG5cdGlmIChjaGVja0VsZW1lbnRFeGlzdCgnI3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmcnKSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkYm9keS5maW5kKCcjc3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZycpO1xuXHRcdCRlbGVtZW50Lmh0bWwocGFyc2VkV2lraXRleHQpO1xuXHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5maXJlKCRlbGVtZW50KTtcblx0fSBlbHNlIGlmIChjaGVja0VsZW1lbnRFeGlzdCgnLmRpZmYtY3VycmVudHZlcnNpb24tdGl0bGUnKSkge1xuXHRcdCRib2R5LmZpbmQoJy5kaWZmLWN1cnJlbnR2ZXJzaW9uLXRpdGxlJykuYXBwZW5kKCRwYXJzZWRXaWtpdGV4dCk7XG5cdH0gZWxzZSBpZiAoY2hlY2tFbGVtZW50RXhpc3QoJy5wcmV2aWV3bm90ZScpKSB7XG5cdFx0JGJvZHkuZmluZCgnLnByZXZpZXdub3RlJykuYXBwZW5kKCRwYXJzZWRXaWtpdGV4dCk7XG5cdH0gZWxzZSBpZiAoY2hlY2tFbGVtZW50RXhpc3QoJy5tdy11bmRlbGV0ZS1yZXZpc2lvbicpKSB7XG5cdFx0JGJvZHkuZmluZCgnLm13LXVuZGVsZXRlLXJldmlzaW9uJykuYXBwZW5kKCRwYXJzZWRXaWtpdGV4dCk7XG5cdH0gZWxzZSBpZiAoY2hlY2tFbGVtZW50RXhpc3QoJyNtdy1jb250ZW50LXRleHQnKSkge1xuXHRcdCRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQnKS5hcHBlbmQoJHBhcnNlZFdpa2l0ZXh0KTtcblx0fVxuXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5maXJlKCRwYXJzZWRXaWtpdGV4dCk7XG59O1xuXG5leHBvcnQge2FkZFBhcnNlZFdpa2l0ZXh0fTtcbiIsICJpbXBvcnQge0ZhaWxlZCwgTG9hZGluZ30gZnJvbSAnLi4vY29tcG9uZW50cy9nZW5lcmF0ZUVsZW1lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7YWRkUGFyc2VkV2lraXRleHR9IGZyb20gJy4vdXRpbC9hZGRQYXJzZWRXaWtpdGV4dCc7XG5cbi8vIFtbRmlsZTpHbm9tZS1kaWFsb2ctd2FybmluZzIuc3ZnfDMycHhdXVxuLy8gLXt6aC1oYW5zOumihOiniOWKoOi9veWksei0pTt6aC1oYW50OumgkOimvei8ieWFpeWksei0pTt9LVxuY29uc3Qgbm90aWNlRmFpbEVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudCA9IEZhaWxlZCgpO1xuXG4vLyB7e1F1b3RlIGJveCB8cXVvdGUgID0gLXt6aC1oYW5zOumihOiniOWKoOi9veS4rTt6aC1oYW50OumgkOimvei8ieWFpeS4rTt9LeKApuKApiB8d2lkdGggID0gNTAlIHxhbGlnbiAgPSBjZW50ZXJ9fVxuY29uc3Qgbm90aWNlTG9hZGluZ0VsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudCA9IExvYWRpbmcoKTtcblxuLy8g5pS55YqoRE9N5YaF5a65XG5jb25zdCByZXBsYWNlRE9NID0gKHNlbGVjdG9yOiBzdHJpbmcsIGVsZW1lbnQ/OiBSZWFjdC5SZWFjdEVsZW1lbnQpOiB2b2lkID0+IHtcblx0JChzZWxlY3RvcikuaHRtbChlbGVtZW50ID8/ICcnKTtcbn07XG5cbi8vIOWKoOWFpeKAnFvovb3lhaXkuK1d4oCd55qE5o+Q56S6XG5jb25zdCBhZGRMb2FkaW5nTm90aWNlID0gKCk6IHZvaWQgPT4ge1xuXHRhZGRQYXJzZWRXaWtpdGV4dChub3RpY2VMb2FkaW5nRWxlbWVudCk7XG59O1xuXG4vLyDovb3lhaXplJnor6/nmoTmj5DnpLpcbmNvbnN0IGxvYWRpbmdGYWlsTm90aWNlID0gKCk6IHZvaWQgPT4ge1xuXHRyZXBsYWNlRE9NKCcjc3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZ19fY29udGVudCcsIG5vdGljZUZhaWxFbGVtZW50KTtcbn07XG5cbi8vIOenu+mZpOKAnFvovb3lhaXkuK1d4oCd55qE5o+Q56S6XG5jb25zdCByZW1vdmVMb2FkaW5nTm90aWNlID0gKCk6IHZvaWQgPT4ge1xuXHRyZXBsYWNlRE9NKCcjc3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZycpO1xufTtcblxuZXhwb3J0IHtub3RpY2VMb2FkaW5nRWxlbWVudCwgYWRkTG9hZGluZ05vdGljZSwgbG9hZGluZ0ZhaWxOb3RpY2UsIHJlbW92ZUxvYWRpbmdOb3RpY2V9O1xuIiwgIntcblx0XCJ3aWtpVGV4dEtleVwiOiBcIl9hZGRUZXh0XCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiLy8g5ZCI5bm25aSa5Liqd2lraXRleHTlrZfnrKbkuLJcbmNvbnN0IGx1YUFkZFRleHQgPSAoaW5wdXRTdHJpbmc6IHN0cmluZywgbmV3U3RyaW5nOiBzdHJpbmcsIGlzRXNjYXBlOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcgPT4ge1xuXHRpZiAobmV3U3RyaW5nKSB7XG5cdFx0aWYgKGlucHV0U3RyaW5nKSB7XG5cdFx0XHRpbnB1dFN0cmluZyArPSAnXFxuJztcblx0XHR9XG5cblx0XHRpZiAoaXNFc2NhcGUpIHtcblx0XHRcdGNvbnN0IFtlc2NhcGVTdHJpbmddID0gSlNPTi5wYXJzZShcblx0XHRcdFx0YFske0pTT04uc3RyaW5naWZ5KFxuXHRcdFx0XHRcdC8vIEx1YeS4jeaUr+aMgVxcdeOAgVxceOi9rOS5ieWtl+esplxuXHRcdFx0XHRcdG5ld1N0cmluZy5yZXBsYWNlKC9cXFxcKFt1eF0pL2dpLCAnJDEnKVxuXHRcdFx0XHQpLnJlcGxhY2UoL1xcXFxcXFxcL2csICdcXFxcJyl9XWBcblx0XHRcdCkgYXMgW3N0cmluZ107XG5cdFx0XHRuZXdTdHJpbmcgPSBlc2NhcGVTdHJpbmc7XG5cdFx0fVxuXG5cdFx0aW5wdXRTdHJpbmcgKz0gbmV3U3RyaW5nO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0U3RyaW5nO1xufTtcblxuZXhwb3J0IHtsdWFBZGRUZXh0fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2x1YUFkZFRleHR9IGZyb20gJy4vbHVhQWRkVGV4dCc7XG5cbi8vIOivu+WPlndpa2l0ZXh05a2X56ym5Liy77yM5bm25b+955Wl5rOo6YeK5bC+6YOoXG5jb25zdCBsdWFHZXRTdHJpbmcgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IHRlc3RTdHJpbmdFeGVjQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSAvW15cXG5dKlxcKlxcLy8uZXhlYyhpbnB1dFN0cmluZyk7XG5cblx0bGV0IHRlc3RTdHJpbmc6IHN0cmluZyA9IGlucHV0U3RyaW5nO1xuXHRpZiAodGVzdFN0cmluZ0V4ZWNBcnJheSkge1xuXHRcdFt0ZXN0U3RyaW5nXSA9IHRlc3RTdHJpbmdFeGVjQXJyYXk7XG5cdFx0dGVzdFN0cmluZyA9IHRlc3RTdHJpbmcuc2xpY2UoMCwgTWF0aC5tYXgoMCwgdGVzdFN0cmluZy5sZW5ndGggLSAyKSk7XG5cdH1cblxuXHRjb25zdCB0cmltQ2hlY2s6IHN0cmluZyA9IHRlc3RTdHJpbmcudHJpbSgpO1xuXHRjb25zdCBmaXJzdENoYXI6IHN0cmluZyA9IHRyaW1DaGVjay5jaGFyQXQoMCk7XG5cdGlmIChmaXJzdENoYXIgPT09IHRyaW1DaGVjay5hdCgtMSkgJiYgKGZpcnN0Q2hhciA9PT0gXCInXCIgfHwgZmlyc3RDaGFyID09PSAnXCInKSkge1xuXHRcdHJldHVybiB0cmltQ2hlY2suc2xpY2UoMSwgMSArIHRyaW1DaGVjay5sZW5ndGggLSAyKTtcblx0fVxuXG5cdHJldHVybiB0ZXN0U3RyaW5nLnRyaW0oKTtcbn07XG5cbi8vIOaNleiOt0NTU+aWh+acrOS4reespuWQiGA8e09QVElPTlMud2lraVRleHRLZXl9PiAgeyBjb250ZW5077yaXCJYWFhcIiB9YOaooeW8j+eahOWtl+espuS4slxuY29uc3QgbHVhR2V0Q29udGVudFRleHQgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0dHJ5IHtcblx0XHRpbnB1dFN0cmluZy5yZXBsYWNlKFxuXHRcdFx0bmV3IFJlZ0V4cChgJHtPUFRJT05TLndpa2lUZXh0S2V5fVxcXFxzKlxcXFx7W15jXFxcXH1dKmNvbnRlbnRcXFxccyo6XFxcXHMqW15cXG5dKmAsICdnJyksXG5cdFx0XHQoc3Vic3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHRjb25zdCB0ZW1wVGV4dDogc3RyaW5nID0gKC9jb250ZW50XFxzKjpcXHMqW15cXG5dKi8uZXhlYyhzdWJzdHJpbmcpIHx8IFsnY29udGVudDonXSlbMF1cblx0XHRcdFx0XHQucmVwbGFjZSgvXltcXHM7fV0rfFtcXHM7fV0rJC9nLCAnJylcblx0XHRcdFx0XHQucmVwbGFjZSgvXFxzKmNvbnRlbnRcXHMqOlxccyovLCAnJyk7XG5cblx0XHRcdFx0aWYgKHdpa2l0ZXh0KSB7XG5cdFx0XHRcdFx0d2lraXRleHQgKz0gJ1xcbic7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3aWtpdGV4dCArPSBsdWFHZXRTdHJpbmcodGVtcFRleHQpO1xuXG5cdFx0XHRcdHJldHVybiBzdWJzdHJpbmc7XG5cdFx0XHR9XG5cdFx0KTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cmV0dXJuIHdpa2l0ZXh0LnRyaW0oKTtcbn07XG5cbi8vIOaNleiOt+Wtl+espuS4suWMlueahOWvueixoeS4reespuWQiGA8e09QVElPTlMud2lraVRleHRLZXl9Pu+8nVhYWGDmiJZgPHtPUFRJT05TLndpa2lUZXh0S2V5fT7vvJpYWFhg5qih5byP55qE5a2X56ym5LiyICjms6jph4rku6Xlhajop5LlrZfnrKbku6Pmm7/vvIzpgb/lhY3ooqvmjZXojrcpXG5jb25zdCBsdWFHZXRPYmpUZXh0ID0gKGlucHV0U3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdHRyeSB7XG5cdFx0aW5wdXRTdHJpbmcucmVwbGFjZShcblx0XHRcdG5ldyBSZWdFeHAoYCR7T1BUSU9OUy53aWtpVGV4dEtleX1cXFxccypbXFxcXD06XVxcXFxzKlteXFxuXSpgLCAnZycpLFxuXHRcdFx0KHN1YnN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdFx0Y29uc3QgdGVtcFRleHQ6IHN0cmluZyA9IHN1YnN0cmluZ1xuXHRcdFx0XHRcdC5yZXBsYWNlKC9eW1xcczt9XSt8W1xcczt9XSskL2csICcnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKG5ldyBSZWdFeHAoYCR7T1BUSU9OUy53aWtpVGV4dEtleX1cXFxccypbXFxcXD06XVxcXFxzKmApLCAnJyk7XG5cblx0XHRcdFx0aWYgKHdpa2l0ZXh0KSB7XG5cdFx0XHRcdFx0d2lraXRleHQgKz0gJ1xcbic7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3aWtpdGV4dCArPSBsdWFHZXRTdHJpbmcodGVtcFRleHQpO1xuXG5cdFx0XHRcdHJldHVybiBzdWJzdHJpbmc7XG5cdFx0XHR9XG5cdFx0KTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cmV0dXJuIHdpa2l0ZXh0LnRyaW0oKTtcbn07XG5cbi8vIOWIhuaekENTU+S4reespuWQiOadoeS7tueahHdpa2l0ZXh0XG5jb25zdCBsdWFHZXRDU1N3aWtpdGV4dCA9IChpbnB1dFN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblxuXHRjb25zdCBjc3NUZXh0OiBzdHJpbmcgPVxuXHRcdChpbnB1dFN0cmluZyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJyk/LnZhbHVlKSA/PyAnJztcblx0aWYgKCFjc3NUZXh0LnRyaW0oKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdC8vIOWMuemFjSA8e09QVElPTlMud2lraVRleHRLZXl9PiB7IGNvbnRlbnTvvJpcIlhYWFwiIH0g5qih5byPXG5cdHdpa2l0ZXh0ID0gbHVhQWRkVGV4dCh3aWtpdGV4dCwgbHVhR2V0Q29udGVudFRleHQoY3NzVGV4dCksIHRydWUpO1xuXHQvLyDljLnphY0gLyogPHtPUFRJT05TLndpa2lUZXh0S2V5fT7vvJpYWFggKi8g5qih5byPXG5cdHdpa2l0ZXh0ID0gbHVhQWRkVGV4dCh3aWtpdGV4dCwgbHVhR2V0T2JqVGV4dChjc3NUZXh0KSwgdHJ1ZSk7XG5cblx0cmV0dXJuIHdpa2l0ZXh0LnRyaW0oKTtcbn07XG5cbi8vIOWIhuaekEpTT07kuK3nrKblkIjmnaHku7bnmoR3aWtpdGV4dFxuY29uc3QgbHVhR2V0SlNPTndpa2l0ZXh0ID0gKGlucHV0U3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdGNvbnN0IEpTT05UZXh0OiBzdHJpbmcgPVxuXHRcdChpbnB1dFN0cmluZyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJyk/LnZhbHVlKSA/PyAnJztcblx0aWYgKCFKU09OVGV4dC50cmltKCkpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHR0cnkge1xuXHRcdGNvbnN0IGpzb25EYXRhID0gSlNPTi5wYXJzZShKU09OVGV4dCkgYXMgb2JqZWN0O1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGpzb25EYXRhKSkge1xuXHRcdFx0aWYgKG5ldyBSZWdFeHAoT1BUSU9OUy53aWtpVGV4dEtleSkudGVzdChrZXkpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCB2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIOiLpemUruWAvOaYr+WvueixoVxuXHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXModmFsdWUgYXMgb2JqZWN0KSkge1xuXHRcdFx0XHRcdGlmIChuZXcgUmVnRXhwKE9QVElPTlMud2lraVRleHRLZXkpLnRlc3QoaykgJiYgdHlwZW9mIHYgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIHYpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cmV0dXJuIHdpa2l0ZXh0LnRyaW0oKTtcbn07XG5cbi8vIOWIhuaekEphdmFTY3JpcHTkuK3nrKblkIjmnaHku7bnmoR3aWtpdGV4dFxuY29uc3QgbHVhR2V0SlN3aWtpdGV4dCA9IChpbnB1dFN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblxuXHRjb25zdCBqc1RleHQ6IHN0cmluZyA9XG5cdFx0KGlucHV0U3RyaW5nIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFRleHRBcmVhRWxlbWVudD4oJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKT8udmFsdWUpID8/ICcnO1xuXHRpZiAoIWpzVGV4dC50cmltKCkpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIGx1YUdldE9ialRleHQoanNUZXh0KSwgdHJ1ZSk7XG5cblx0cmV0dXJuIHdpa2l0ZXh0LnRyaW0oKTtcbn07XG5cbmV4cG9ydCB7bHVhR2V0Q1NTd2lraXRleHQsIGx1YUdldEpTT053aWtpdGV4dCwgbHVhR2V0SlN3aWtpdGV4dH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBTcGVjaWFsV2lraXRleHQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJjb25zdCB7d2dVc2VyTGFuZ3VhZ2UsIHdnVXNlclZhcmlhbnR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBnZXRMYW5ndWFnZSA9ICgpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBsYW5nOiBzdHJpbmcgPSB3Z1VzZXJMYW5ndWFnZTtcblxuXHRpZiAobGFuZy5pbmNsdWRlcygnemgnKSkge1xuXHRcdHJldHVybiB3Z1VzZXJWYXJpYW50IGFzIHN0cmluZztcblx0fVxuXG5cdHJldHVybiBsYW5nO1xufTtcblxuZXhwb3J0IHtnZXRMYW5ndWFnZX07XG4iLCAiaW1wb3J0IHtsb2FkaW5nRmFpbE5vdGljZSwgcmVtb3ZlTG9hZGluZ05vdGljZX0gZnJvbSAnLi4vbm90aWNlJztcbmltcG9ydCB7YWRkUGFyc2VkV2lraXRleHR9IGZyb20gJy4uL3V0aWwvYWRkUGFyc2VkV2lraXRleHQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tICcuLi91dGlsL2dldExhbmd1YWdlJztcblxuY29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG4vLyDliqDlhaXpooTop4jlhoXlrrlcbmNvbnN0IG13QWRkV2lraVRleHQgPSBhc3luYyAod2lraXRleHQ6IHN0cmluZywgcGFnZU5hbWU6IHN0cmluZywgaXNQcmV2aWV3OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGlmICh3aWtpdGV4dC50cmltKCkpIHtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHQvLyDpgb/lhY3lhoXlrrnph43lpI1cblx0XHRcdHRpdGxlOiBwYWdlTmFtZSxcblx0XHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0dXNlbGFuZzogZ2V0TGFuZ3VhZ2UoKSxcblx0XHRcdHVzZXNraW46IHNraW4sXG5cdFx0fTtcblx0XHRpZiAoaXNQcmV2aWV3KSB7XG5cdFx0XHRwYXJhbXMuZGlzYWJsZWVkaXRzZWN0aW9uID0gdHJ1ZTtcblx0XHRcdHBhcmFtcy5wcmV2aWV3ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cdFx0XHRpZiAoIWRhdGE/LlsncGFyc2UnXT8udGV4dCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBhcnNlZFdpa2l0ZXh0OiBzdHJpbmcgPSAoZGF0YVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZykudHJpbSgpO1xuXG5cdFx0XHRpZiAocGFyc2VkV2lraXRleHQpIHtcblx0XHRcdFx0YWRkUGFyc2VkV2lraXRleHQocGFyc2VkV2lraXRleHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0bG9hZGluZ0ZhaWxOb3RpY2UoKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHR9XG59O1xuXG4vLyDliqDlhaXpooTop4jnmoRMdWHlhoXlrrlcbmNvbnN0IG13QWRkTHVhVGV4dCA9IGFzeW5jIChcblx0d2lraXRleHQ6IHN0cmluZyxcblx0cGFnZU5hbWU6IHN0cmluZyxcblx0aXNQcmV2aWV3OiBib29sZWFuLFxuXHRjYWxsQmFjaz86IChhcmc6IHN0cmluZykgPT4gSlF1ZXJ5IHwgSFRNTEVsZW1lbnQgfCB2b2lkXG4pID0+IHtcblx0Y29uc3QgdGVtcE1vZHVsZU5hbWU6IHN0cmluZyA9ICdBZGRUZXh0L1RlbXAvTW9kdWxlL0RhdGEubHVhJztcblx0Y29uc3QgbW9kdWxlQ2FsbDoge1xuXHRcdHdpa2l0ZXh0OiBzdHJpbmc7XG5cdFx0cGFnZU5hbWU6IHN0cmluZztcblx0fSA9IHtcblx0XHR3aWtpdGV4dDogJyNpbnZva2U6Jyxcblx0XHQvLyDliIblvIDmnaXvvIzpgb/lhY3ooqvliIbliLBbWzpDYXRlZ29yeTrmnInohJrmnKzplJnor6/nmoTpobXpnaJdXVxuXHRcdHBhZ2VOYW1lOiAnTW9kdWxlOicsXG5cdH07XG5cblx0aWYgKHdpa2l0ZXh0LnRyaW0oKSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlOiBwYWdlTmFtZSxcblx0XHRcdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3h0aXRsZTogbW9kdWxlQ2FsbC5wYWdlTmFtZSArIHRlbXBNb2R1bGVOYW1lLFxuXHRcdFx0XHQvLyDliJvlu7rkuLTml7ZMdWEgTW9kdWxlXG5cdFx0XHRcdHRlbXBsYXRlc2FuZGJveHRleHQ6IGByZXR1cm4ge1xuXHRtYWluID0gZnVuY3Rpb24oKVxuXHRcdHhwY2FsbChcblx0XHRcdGZ1bmN0aW9uKClcblx0XHRcdFx0JHt3aWtpdGV4dH1cblx0XHRcdGVuZCxcblx0XHRcdGZ1bmN0aW9uKClcblx0XHRcdGVuZFxuXHRcdClcblx0XHRsb2NhbCBtb2R1bGVXaWtpdGV4dCA9IHBhY2thZ2UubG9hZGVkW1wiTW9kdWxlOk1vZHVsZSB3aWtpdGV4dFwiXVxuXHRcdGlmIG1vZHVsZVdpa2l0ZXh0IHRoZW5cblx0XHRcdGxvY2FsIHdpa2l0ZXh0ID0gbW9kdWxlV2lraXRleHQubWFpbigpXG5cdFx0XHRpZiBtdy50ZXh0LnRyaW0od2lraXRleHQpIH49IFwiXCIgdGhlblxuXHRcdFx0XHRyZXR1cm4gbXcuZ2V0Q3VycmVudEZyYW1lKCk6cHJlcHJvY2Vzcyhtb2R1bGVXaWtpdGV4dC5tYWluKCkpXG5cdFx0XHRlbmRcblx0XHRlbmRcblx0XHRyZXR1cm4gXCJcIlxuXHRlbmRcbn1gLFxuXHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3hjb250ZW50bW9kZWw6ICdTY3JpYnVudG8nLFxuXHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3hjb250ZW50Zm9ybWF0OiAndGV4dC9wbGFpbicsXG5cdFx0XHRcdHRleHQ6IGB7eyR7bW9kdWxlQ2FsbC53aWtpdGV4dH0ke3RlbXBNb2R1bGVOYW1lfXxtYWlufX1gLFxuXHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHRcdHVzZWxhbmc6IGdldExhbmd1YWdlKCksXG5cdFx0XHRcdHVzZXNraW46IHNraW4sXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGlzUHJldmlldykge1xuXHRcdFx0XHRwYXJhbXMucHJldmlldyA9IHRydWU7XG5cdFx0XHRcdHBhcmFtcy5kaXNhYmxlZWRpdHNlY3Rpb24gPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblx0XHRcdGlmICghZGF0YT8uWydwYXJzZSddPy50ZXh0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGFyc2VkV2lraXRleHQ6IHN0cmluZyA9IChkYXRhWydwYXJzZSddLnRleHQgYXMgc3RyaW5nKS50cmltKCk7XG5cblx0XHRcdGlmICghcGFyc2VkV2lraXRleHQpIHtcblx0XHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0XHQvLyDoi6XlnKjov5nkuKrkuLTml7bmqKHlnZfkuK3lh7rplJnliJnlj5bmtohcblx0XHRcdH0gZWxzZSBpZiAoJChwYXJzZWRXaWtpdGV4dCkuZmluZCgnLnNjcmlidW50by1lcnJvcicpLnRleHQoKS5zZWFyY2godGVtcE1vZHVsZU5hbWUpKSB7XG5cdFx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGNhbGxCYWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNhbGxCYWNrKHBhcnNlZFdpa2l0ZXh0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFkZFBhcnNlZFdpa2l0ZXh0KHBhcnNlZFdpa2l0ZXh0KTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdGxvYWRpbmdGYWlsTm90aWNlKCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0fVxufTtcblxuZXhwb3J0IHttd0FkZEx1YVRleHQsIG13QWRkV2lraVRleHR9O1xuIiwgImltcG9ydCB7bHVhR2V0Q1NTd2lraXRleHQsIGx1YUdldEpTT053aWtpdGV4dCwgbHVhR2V0SlN3aWtpdGV4dH0gZnJvbSAnLi9sdWFHZXRUZXh0JztcblxuY29uc3Qge3dnUGFnZUNvbnRlbnRNb2RlbH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOWIpOaWreaYr+WQpuS4ukx1YVxuY29uc3QgbHVhQ2hlY2sgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyA9ICcnLCBjb250ZW50TW9kZWw6IHN0cmluZyA9IHdnUGFnZUNvbnRlbnRNb2RlbCk6IHN0cmluZyA9PiB7XG5cdC8vIOagueaNrumhtemdouWGheWuueaooeWei+mAieeUqOmAguW9k+eahOino+aekOaooeW8j1xuXHRzd2l0Y2ggKGNvbnRlbnRNb2RlbC50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0Y2FzZSAnanNvbic6XG5cdFx0XHRyZXR1cm4gbHVhR2V0SlNPTndpa2l0ZXh0KGlucHV0U3RyaW5nKTtcblx0XHRjYXNlICdqcyc6XG5cdFx0Y2FzZSAnamF2YXNjcmlwdCc6XG5cdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRyZXR1cm4gbHVhR2V0SlN3aWtpdGV4dChpbnB1dFN0cmluZyk7XG5cdFx0Y2FzZSAnY3NzJzpcblx0XHRjYXNlICdzYW5pdGl6ZWQtY3NzJzpcblx0XHRcdHJldHVybiBsdWFHZXRDU1N3aWtpdGV4dChpbnB1dFN0cmluZyk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAnJztcblx0fVxufTtcblxuZXhwb3J0IHtsdWFDaGVja307XG4iLCAiaW1wb3J0IHthZGRQYXJzZWRXaWtpdGV4dH0gZnJvbSAnLi4vdXRpbC9hZGRQYXJzZWRXaWtpdGV4dCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Y2hlY2tFbGVtZW50RXhpc3R9IGZyb20gJy4uL3V0aWwvY2hlY2tFbGVtZW50RXhpc3QnO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSAnLi4vdXRpbC9nZXRMYW5ndWFnZSc7XG5pbXBvcnQge2x1YUNoZWNrfSBmcm9tICcuLi9sdWEvbHVhQ2hlY2snO1xuaW1wb3J0IHttd0FkZFdpa2lUZXh0fSBmcm9tICcuL213QWRkVGV4dCc7XG5pbXBvcnQge3JlbW92ZUxvYWRpbmdOb3RpY2V9IGZyb20gJy4uL25vdGljZSc7XG5cbmNvbnN0IHtza2luLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG4vLyDliqDlhaXnvJbovpHmj5DnpLrvvIjoi6XlrZjlnKjvvIlcbmNvbnN0IG13QXBwbHlOb3RpY2UgPSBhc3luYyAoY3VycmVudFBhZ2VOYW1lOiBzdHJpbmcsIHBhZ2VTdWJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHQvLyBnZXQgdGhlIG9yaWdpbmFsIHdpa2l0ZXh0IGNvbnRlbnQgb2YgYSBwYWdlXG5cdFx0XHR0aXRsZTogY3VycmVudFBhZ2VOYW1lICsgcGFnZVN1Yk5hbWUsXG5cdFx0XHR0ZXh0OiBge3sjaW52b2tlOlNwZWNpYWwgd2lraXRleHQvVGVtcGxhdGV8Z2V0Tm90aWNlc3wke2N1cnJlbnRQYWdlTmFtZX18JHtwYWdlU3ViTmFtZX19fWAsXG5cdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHR1c2VsYW5nOiBnZXRMYW5ndWFnZSgpLFxuXHRcdFx0dXNlc2tpbjogc2tpbixcblx0XHR9O1xuXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cdFx0aWYgKCFkYXRhPy5bJ3BhcnNlJ10/LnRleHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBodG1sID0gZGF0YVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZztcblx0XHRpZiAoJChodG1sKS50ZXh0KCkudHJpbSgpKSB7XG5cdFx0XHRhZGRQYXJzZWRXaWtpdGV4dChodG1sKTtcblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG5cbi8vIOS7jumhtemdouW9k+WJjeWOhuWPsueJiOacrOWPluWHuiA8e09QVElPTlMud2lraVRleHRLZXl9PlxuY29uc3QgbXdBcHBseVJldmlzaW9uID0gYXN5bmMgKGN1cnJlbnRQYWdlTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0Ly8gZ2V0IHRoZSBvcmlnaW5hbCB3aWtpdGV4dCBjb250ZW50IG9mIGEgcGFnZVxuXHRcdFx0b2xkaWQ6IHdnUmV2aXNpb25JZCxcblx0XHRcdHByb3A6ICd3aWtpdGV4dCcsXG5cdFx0fTtcblxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0aWYgKCFkYXRhPy5bJ3BhcnNlJ10/Lndpa2l0ZXh0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IHBhZ2VDb250ZW50OiBzdHJpbmcgPSBsdWFDaGVjaygoZGF0YVsncGFyc2UnXS53aWtpdGV4dCBhcyBzdHJpbmcpLnRyaW0oKSk7XG5cdFx0cGFnZUNvbnRlbnQgPVxuXHRcdFx0KGNoZWNrRWxlbWVudEV4aXN0KCcjbXctY2xlYXJ5b3VyY2FjaGUnKVxuXHRcdFx0XHQ/ICd7eyNpbnZva2U6U3BlY2lhbCB3aWtpdGV4dC9UZW1wbGF0ZXxpbnR8Y2xlYXJ5b3VyY2FjaGV9fSdcblx0XHRcdFx0OiAnJykgKyBwYWdlQ29udGVudDtcblxuXHRcdGlmIChwYWdlQ29udGVudC50cmltKCkpIHtcblx0XHRcdHZvaWQgbXdBZGRXaWtpVGV4dChwYWdlQ29udGVudCwgY3VycmVudFBhZ2VOYW1lLCB0cnVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHR9XG59O1xuXG5leHBvcnQge213QXBwbHlOb3RpY2UsIG13QXBwbHlSZXZpc2lvbn07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhbGxNd0NvbmZpZzogTWVkaWFXaWtpQ29uZmlnTWFwID0gbXcuY29uZmlnLmdldCgpO1xuXG4vLyDmo4Dmn6VNZWRpYVdpa2nnmoTorr7nva5cbmNvbnN0IGNoZWNrTXdDb25maWcgPSAoY29uZmlnS2V5OiBzdHJpbmcsIGV4cGVjdENvbmZpZzogc3RyaW5nIHwgc3RyaW5nW10pOiBib29sZWFuID0+IHtcblx0bGV0IG13Q29uZmlnOiB1bmtub3duID0gYWxsTXdDb25maWdbY29uZmlnS2V5XTtcblx0aWYgKCFtd0NvbmZpZykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdG13Q29uZmlnID0gU3RyaW5nKG13Q29uZmlnKS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcblx0aWYgKCFtd0NvbmZpZykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiBnZW5lcmF0ZUFycmF5KGV4cGVjdENvbmZpZykuaW5jbHVkZXMobXdDb25maWcgYXMgc3RyaW5nKTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tNd0NvbmZpZ307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuXG4vLyDmo4Dmn6XmmK/lkKbmnInpooTop4jnmoTlv4XopoHmgKdcbmNvbnN0IGNoZWNrTmVlZFByZXZpZXcgPSAoKTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiBkb2N1bWVudC5ib2R5LmlubmVySFRNTC5zZWFyY2goT1BUSU9OUy53aWtpVGV4dEtleSkgPiAtMTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tOZWVkUHJldmlld307XG4iLCAiaW1wb3J0IHthZGRMb2FkaW5nTm90aWNlLCBub3RpY2VMb2FkaW5nRWxlbWVudCwgcmVtb3ZlTG9hZGluZ05vdGljZX0gZnJvbSAnLi4vbm90aWNlJztcbmltcG9ydCB7bHVhR2V0Q1NTd2lraXRleHQsIGx1YUdldEpTT053aWtpdGV4dH0gZnJvbSAnLi4vbHVhL2x1YUdldFRleHQnO1xuaW1wb3J0IHttd0FkZEx1YVRleHQsIG13QWRkV2lraVRleHR9IGZyb20gJy4vbXdBZGRUZXh0JztcbmltcG9ydCB7bXdBcHBseU5vdGljZSwgbXdBcHBseVJldmlzaW9ufSBmcm9tICcuL213QXBwbHknO1xuaW1wb3J0IHtjaGVja0VsZW1lbnRFeGlzdH0gZnJvbSAnLi4vdXRpbC9jaGVja0VsZW1lbnRFeGlzdCc7XG5pbXBvcnQge2NoZWNrTXdDb25maWd9IGZyb20gJy4uL3V0aWwvY2hlY2tNd0NvbmZpZyc7XG5pbXBvcnQge2NoZWNrTmVlZFByZXZpZXd9IGZyb20gJy4uL3V0aWwvY2hlY2tOZWVkUHJldmlldyc7XG5pbXBvcnQge2x1YUNoZWNrfSBmcm9tICcuLi9sdWEvbHVhQ2hlY2snO1xuXG5jb25zdCB7d2dDYW5vbmljYWxOYW1lc3BhY2UsIHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8g57uZ6aG16Z2i5re75Yqg6aKE6KeIXG5jb25zdCBtd0FkZFByZXZpZXcgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8vIOmihOiniOaooeW8j+WPqumAgueUqOS6juS7peS4i+mhtemdouWGheWuueaooeWei1xuXHRpZiAoY2hlY2tNd0NvbmZpZygnd2dQYWdlQ29udGVudE1vZGVsJywgWydqYXZhc2NyaXB0JywgJ2pzJywgJ2pzb24nLCAndGV4dCcsICdjc3MnLCAnc2FuaXRpemVkLWNzcyddKSkge1xuXHRcdC8vIOaooeW8jzHvvJrpobXpnaLpooTop4hcblx0XHRpZiAoY2hlY2tFbGVtZW50RXhpc3QoJy5wcmV2aWV3bm90ZScpKSB7XG5cdFx0XHQvLyDmo4Dmn6XmmK/lkKbkuLrpooTop4jmqKHlvI9cblx0XHRcdC8vIOmihOiniOacieWPr+iDveaYr+WcqOmihOiniOWFtuS7luadoeebrlxuXHRcdFx0Y29uc3QgcGF0aFBhdGg6IHN0cmluZyA9IGRlY29kZVVSSShtdy51dGlsLmdldFVybCh3Z1BhZ2VOYW1lKSkucmVwbGFjZShcblx0XHRcdFx0bmV3IFJlZ0V4cChgXlxcXFwvPyR7bXcudXRpbC5nZXRVcmwoJycpLm1hdGNoKC9bYS16XSsvKT8uWzBdID8/ICcnfVxcXFwvYCksXG5cdFx0XHRcdCcnXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyDoi6XpooTop4jnmoTpobXpnaLlubbpnZ7mnKzouqvvvIzliJnkuI3mmL7npLrpooTop4hcblx0XHRcdGlmIChwYXRoUGF0aCAhPT0gd2dQYWdlTmFtZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHdpa2l0ZXh0OiBzdHJpbmcgPSBsdWFDaGVjaygpO1xuXHRcdFx0aWYgKHdpa2l0ZXh0KSB7XG5cdFx0XHRcdC8vIOiLpeino+aekOe7k+aenOmdnuepuuaJjeaUvue9rumihOiniFxuXHRcdFx0XHRhZGRMb2FkaW5nTm90aWNlKCk7IC8vIOaUvue9ruaPkOekuu+8jOaPkOekuuS9v+eUqOiAheetieW+hUFKQVhcblx0XHRcdFx0dm9pZCBtd0FkZFdpa2lUZXh0KHdpa2l0ZXh0LCB3Z1BhZ2VOYW1lLCB0cnVlKTsgLy8g6Iul5Y+W5b6XIF9hZGRUZXh0IOWImeaYvuekuumihOiniFxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoIWNoZWNrRWxlbWVudEV4aXN0KCcubXctX2FkZFRleHQtY29udGVudCcpICYmIGNoZWNrTXdDb25maWcoJ3dnQWN0aW9uJywgJ3ZpZXcnKSkge1xuXHRcdFx0Ly8g5qih5byPMu+8muS4jeaUr+aMgeaYvuekuueahOeJueauiumhtemdolxuXHRcdFx0Ly8g57uP5p+l77yM5LiN5q2i5piv5qih5p2/5qC35byP77yM5omA5pyJ5pyq5bWM5YWlJyNtdy1jbGVhcnlvdXJjYWNoZSfnmoTpobXpnaLnmobml6Dms5XmraPluLjmmL7npLpcblx0XHRcdGlmICghY2hlY2tOZWVkUHJldmlldygpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8g5rKh5pyJ6aKE6KeI5b+F6KaB5pe277yM55u05o6l5YGc5q2i56iL5bqP77yM5LiN57un57ut5Yik5pat77yM5Lul5o+Q6auY5pWI546HXG5cdFx0XHR9XG5cblx0XHRcdC8vIOiLpeW3suaciSNtdy1jbGVhcnlvdXJjYWNoZeWImeWFiOa4heaOie+8jOWQpuWImeS8muWHuueOsOS4pOS4qk1lZGlhV2lraTpDbGVhcnlvdXJjYWNoZVxuXHRcdFx0JGJvZHkuZmluZCgnI213LWNsZWFyeW91cmNhY2hlJykuaHRtbCgnJyk7XG5cblx0XHRcdGlmICghY2hlY2tFbGVtZW50RXhpc3QoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKSkge1xuXHRcdFx0XHQvLyDpnZ7nvJbovpHmqKHlvI/miY3miafooYwgKOmihOiniOS9v+eUqOS4iuaWueeahGlm5Yy65Z2XKVxuXHRcdFx0XHRhZGRMb2FkaW5nTm90aWNlKCk7IC8vIOaUvue9ruaPkOekuu+8jOaPkOekuuS9v+eUqOiAheetieW+hUFKQVhcblx0XHRcdFx0dm9pZCBtd0FwcGx5UmV2aXNpb24od2dQYWdlTmFtZSk7IC8vIOS4uuS6huiuqeWOhuWPsueJiOacrOato+W4uOaYvuekuu+8jOS9v+eUqHdnUmV2aXNpb25JZOWPluW+l+WGheWuuVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoY2hlY2tFbGVtZW50RXhpc3QoJyNtdy1yZXZpc2lvbi1pbmZvJykgJiYgY2hlY2tNd0NvbmZpZygnd2dBY3Rpb24nLCAndmlldycpKSB7XG5cdFx0XHQvLyDmqKHlvI8z77ya6aG16Z2i5Y6G5Y+y54mI5pys5qOA6KeG77ya5aaC6ZyA5aSN5p+l55qE6aG555uu5Li66aG16Z2i5Y6G5Y+y54mI5pys77yM5pys5bel5YW35o+Q5L6b6aG16Z2i5Y6G5Y+y54mI5pys5YaF5a655pi+56S65pSv5oyBXG5cdFx0XHQvLyDmnInltYzlhaUnI213LWNsZWFyeW91cmNhY2hlJ+eahOmhtemdoueahOWOhuWPsueJiOacrOS8muWPquiDveaYvuekuuacgOaWsOeJiOeahCBfYWRkVGV4dCDlm6DmraTmiafooYzkv67mraNcblx0XHRcdGlmICghY2hlY2tFbGVtZW50RXhpc3QoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKSkge1xuXHRcdFx0XHQvLyDpnZ7nvJbovpHmqKHlvI/miY3miafooYwgKOmihOiniOS9v+eUqOS4iuaWueeahGlm5Yy65Z2XKVxuXHRcdFx0XHQkYm9keS5maW5kKCcjbXctY2xlYXJ5b3VyY2FjaGUnKS5odG1sKG5vdGljZUxvYWRpbmdFbGVtZW50KTsgLy8g5beu5byC5qih5byP77yI5ZCr5qOA6ZiF5L+u6K6i54mI5pys5Yig6Zmk77yJ55qE5o+S5YWl54K55LiN5ZCMXG5cdFx0XHRcdHZvaWQgbXdBcHBseVJldmlzaW9uKHdnUGFnZU5hbWUpOyAvLyDkuLrkuoborqnnibnlrprniYjmnKzmraPluLjmmL7npLrvvIzkvb/nlKh3Z1JldmlzaW9uSWTlj5blvpflhoXlrrlcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChjaGVja013Q29uZmlnKCd3Z1BhZ2VDb250ZW50TW9kZWwnLCBbJ3NjcmlidW50bycsICdsdWEnXSkpIHtcblx0XHQvLyDmqKHlnZfpooTop4jlip/og71cblx0XHRpZiAoIWNoZWNrTmVlZFByZXZpZXcoKSkge1xuXHRcdFx0cmV0dXJuOyAvLyDmsqHmnInpooTop4jlv4XopoHml7bvvIznm7TmjqXlgZzmraLnqIvluo/vvIzkuI3nu6fnu63liKTmlq3vvIzku6Xmj5Dpq5jmlYjnjodcblx0XHR9XG5cblx0XHRpZiAoXG5cdFx0XHRjaGVja0VsZW1lbnRFeGlzdCgndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpICYmXG5cdFx0XHRjaGVja0VsZW1lbnRFeGlzdCgndGFibGUuZGlmZicpICYmXG5cdFx0XHQhY2hlY2tFbGVtZW50RXhpc3QoJy5wcmV2aWV3bm90ZScpICYmXG5cdFx0XHQhY2hlY2tNd0NvbmZpZygnd2dBY3Rpb24nLCAndmlldycpXG5cdFx0KSB7XG5cdFx0XHQkKG5vdGljZUxvYWRpbmdFbGVtZW50KS5pbnNlcnRBZnRlcignI3dpa2lEaWZmJyk7XG5cdFx0XHR2b2lkIG13QWRkTHVhVGV4dChcblx0XHRcdFx0KCRib2R5LmZpbmQoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKS52YWwoKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpID8/ICcnLFxuXHRcdFx0XHR3Z1BhZ2VOYW1lLFxuXHRcdFx0XHR0cnVlXG5cdFx0XHQpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChjaGVja0VsZW1lbnRFeGlzdCgnLm13LXVuZGVsZXRlLXJldmlzaW9uJykpIHtcblx0XHQvLyDmqKHlvI8077ya5bey5Yig6aG16Z2i6aKE6KeIXG5cdFx0Ly8g5bey5Yig5YaF5a656aG16Z2i5piv54m55q6K6aG16Z2i77yM5peg5rOV55So5bi46KeE5pa55byP5Yik5pat6aG16Z2i5YaF5a655qih5Z6LXG5cdFx0aWYgKCFjaGVja05lZWRQcmV2aWV3KCkpIHtcblx0XHRcdHJldHVybjsgLy8g5rKh5pyJ6aKE6KeI5b+F6KaB5pe277yM55u05o6l5YGc5q2i56iL5bqP77yM5LiN57un57ut5Yik5pat77yM5Lul5o+Q6auY5pWI546HXG5cdFx0fVxuXG5cdFx0aWYgKGNoZWNrRWxlbWVudEV4aXN0KFsnLm13LWhpZ2hsaWdodCcsICdwcmUnLCAnLm13LWpzb24nXSkpIHtcblx0XHRcdC8vIOehruiupOato+WcqOmihOiniOW3suWIoOWGheWuuVxuXHRcdFx0Y29uc3QgdGV4dGFyZWFDb250ZW50OiBzdHJpbmcgPSAkYm9keS5maW5kKCd0ZXh0YXJlYScpLnZhbCgpID8/ICcnOyAvLyDlsJ3or5Xlj5blvpflt7LliKDlhoXlrrnmupDku6PnoIFcblxuXHRcdFx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSBsdWFHZXRKU09Od2lraXRleHQodGV4dGFyZWFDb250ZW50KTtcblx0XHRcdGlmICghd2lraXRleHQpIHtcblx0XHRcdFx0d2lraXRleHQgPSBsdWFHZXRDU1N3aWtpdGV4dCh0ZXh0YXJlYUNvbnRlbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAod2lraXRleHQpIHtcblx0XHRcdFx0Ly8g6Iul5Y+W5b6XIF9hZGRUZXh0IOWImeaYvuekuumihOiniFxuXHRcdFx0XHRhZGRMb2FkaW5nTm90aWNlKCk7XG5cdFx0XHRcdHZvaWQgbXdBZGRXaWtpVGV4dCh3aWtpdGV4dCwgbXcuY29uZmlnLmdldCgnd2dSZWxldmFudFBhZ2VOYW1lJyksIHRydWUpO1xuXHRcdFx0fSBlbHNlIGlmICgvbW9kdWxlWyBfXXdpa2l0ZXh0LipfYWRkdGV4dC9pLnRlc3QoJGJvZHkuZmluZCgnLm13LXBhcnNlci1vdXRwdXQnKS50ZXh0KCkpKSB7XG5cdFx0XHRcdC8vIOWwneivlUx1Yeino+aekFxuXHRcdFx0XHQvLyDmnKzlip/og73nm67liY3mtYvor5XmraPluLjov5DkvZxcblx0XHRcdFx0Ly8g6Iul5ZOq5aSp6aKE6KeI5Y+I5aSx5pWI77yM6K+35Y+W5raI5rOo6YeK5LiL5pa56YKj6KGMXG5cdFx0XHRcdC8vIG13QWRkTHVhVGV4dCh0ZXh0YXJlYUNvbnRlbnQsIG13LmNvbmZpZy5nZXQoXCJ3Z1JlbGV2YW50UGFnZU5hbWVcIiksIHRydWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIGlmICghY2hlY2tFbGVtZW50RXhpc3QoJy5tdy1lZGl0bm90aWNlJykgJiYgY2hlY2tNd0NvbmZpZygnd2dDYW5vbmljYWxOYW1lc3BhY2UnLCAnc3BlY2lhbCcpKSB7XG5cdFx0Ly8g6Iul54m55q6K6aG16Z2i57y65LmP57yW6L6R5o+Q56S677yM5YiZ6KGl5LiK57yW6L6R5o+Q56S6ICjoi6XlrZjlnKgpXG5cdFx0Y29uc3QgcGFnZVN1Yk5hbWU6IHN0cmluZyA9IHdnUGFnZU5hbWUucmVwbGFjZSgvc3BlY2lhbDpbXi9dKy9pLCAnJyk7XG5cdFx0aWYgKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lKSB7XG5cdFx0XHRjb25zdCBmdWxsUGFnZU5hbWU6IHN0cmluZyA9IGAke3dnQ2Fub25pY2FsTmFtZXNwYWNlfToke3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfWA7XG5cdFx0XHR2b2lkIG13QXBwbHlOb3RpY2UoZnVsbFBhZ2VOYW1lLCBwYWdlU3ViTmFtZSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTsgLy8g6YO95LiN5piv55qE5oOF5Ya15YiZ5LiN5pi+56S66aKE6KeIXG5cdH1cbn07XG5cbmV4cG9ydCB7bXdBZGRQcmV2aWV3fTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtjaGVja05lZWRQcmV2aWV3fSBmcm9tICcuL3V0aWwvY2hlY2tOZWVkUHJldmlldyc7XG5pbXBvcnQge2x1YUNoZWNrfSBmcm9tICcuL2x1YS9sdWFDaGVjayc7XG5pbXBvcnQge213QWRkTHVhVGV4dH0gZnJvbSAnLi9tdy9td0FkZFRleHQnO1xuaW1wb3J0IHtub3RpY2VMb2FkaW5nRWxlbWVudH0gZnJvbSAnLi9ub3RpY2UnO1xuXG5jb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOacrOiEmuacrOeahFRlc3RjYXNlXG5jb25zdCB3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSA9IGFzeW5jIChpc1ByZXZpZXc6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Ly8g5rKh5pyJ5Y+v6aKE6KeI5YWD57Sg77yM6YCA5Ye644CCXG5cdGlmICghY2hlY2tOZWVkUHJldmlldygpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdGVzdGNhc2VMaXN0OiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFxuXHRcdCcuc3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlJ1xuXHQpO1xuXHQvLyDoi6XpobXpnaLkuK3msqHmnIlUZXN0Y2FzZe+8jOmAgOWHuuOAglxuXHRpZiAoIXRlc3RjYXNlTGlzdC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyDmlLbpm4bkvY3kuo7pobXpnaLkuK3nmoRUZXN0Y2FzZemihOiniOWFg+e0oFxuXHRjb25zdCB0ZXN0Y2FzZURhdGFMaXN0OiB7XG5cdFx0ZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cdFx0bGFuZzogc3RyaW5nO1xuXHRcdGNvZGU6IHN0cmluZztcblx0fVtdID0gW107XG5cblx0bGV0IGk6IG51bWJlciA9IDA7XG5cdGZvciAoaSA9IDA7IGkgPCB0ZXN0Y2FzZUxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCA9IHRlc3RjYXNlTGlzdFtpXTtcblx0XHRpZiAoIWVsZW1lbnQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvZGVFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcubXctaGlnaGxpZ2h0Jyk7XG5cdFx0aWYgKCFjb2RlRWxlbWVudCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qge2NsYXNzTmFtZX0gPSBjb2RlRWxlbWVudDtcblx0XHRpZiAoIWNsYXNzTmFtZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgWywgY29kZUlkXSA9IC9tdy1oaWdobGlnaHQtbGFuZy0oXFxTKykvLmV4ZWMoY2xhc3NOYW1lKSA/PyBbXTtcblx0XHRjb25zdCB7bGVuZ3RofSA9IHRlc3RjYXNlRGF0YUxpc3Q7XG5cblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgncHJldmlldy1pZCcsIGxlbmd0aC50b1N0cmluZygpKTtcblx0XHR0ZXN0Y2FzZURhdGFMaXN0W2xlbmd0aF0gPSB7XG5cdFx0XHRlbGVtZW50LFxuXHRcdFx0bGFuZzogY29kZUlkPy50b0xvd2VyQ2FzZSgpID8/ICcnLFxuXHRcdFx0Y29kZTogY29kZUVsZW1lbnQudGV4dENvbnRlbnQ/LnRyaW0oKSA/PyAnJyxcblx0XHR9OyAvLyBSZXBsYWNlIGB0ZXN0Y2FzZURhdGFMaXN0LnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHR9XG5cblx0Ly8g5pW055CG6aG16Z2i5Lit55qEVGVzdGNhc2XpooTop4jlhYPntKDvvIzlubbmlL7nva7igJxb6L295YWl5LitXeKAnea2iOaBr1xuXHRsZXQgcGFja2FnZVdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblx0Zm9yIChjb25zdCB0ZXN0Y2FzZUl0ZW0gb2YgT2JqZWN0LnZhbHVlcyh0ZXN0Y2FzZURhdGFMaXN0KSkge1xuXHRcdGNvbnN0IHtjb2RlLCBlbGVtZW50LCBsYW5nfSA9IHRlc3RjYXNlSXRlbTtcblxuXHRcdGlmICghY29kZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cblx0XHRpZiAoWydqYXZhc2NyaXB0JywgJ2pzJywgJ2NzcycsICdqc29uJywgJ3RleHQnXS5pbmNsdWRlcyh0ZXN0Y2FzZUl0ZW0ubGFuZykpIHtcblx0XHRcdGNvbnN0IHdpa2l0ZXh0OiBzdHJpbmcgPSBsdWFDaGVjayhjb2RlLCBsYW5nKTtcblx0XHRcdGlmICh3aWtpdGV4dCkge1xuXHRcdFx0XHQvLyDoi6Xop6PmnpDnu5PmnpzpnZ7nqbrmiY3mlL7nva7pooTop4hcblx0XHRcdFx0JGVsZW1lbnQucHJlcGVuZChub3RpY2VMb2FkaW5nRWxlbWVudCk7XG5cdFx0XHRcdHBhY2thZ2VXaWtpdGV4dCArPSBgPGRpdiBjbGFzcz1cInNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZS0ke2l9XCI+XFxuJHt3aWtpdGV4dH1cXG48L2Rpdj5gO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoWydsdWEnLCAnc2NyaWJ1bnRvJ10uaW5jbHVkZXMobGFuZykpIHtcblx0XHRcdHZvaWQgbXdBZGRMdWFUZXh0KFxuXHRcdFx0XHRjb2RlLFxuXHRcdFx0XHR3Z1BhZ2VOYW1lLFxuXHRcdFx0XHRpc1ByZXZpZXcsXG5cdFx0XHRcdCgoKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuICh3aWtpdGV4dDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHQkZWxlbWVudC5wcmVwZW5kKHdpa2l0ZXh0KTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9KSgpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdC8vIOWwhuaVtOeQhuWujOeahFRlc3RjYXNl6aKE6KeI5YWD57Sg57uf5LiA5Y+R6YCBQVBJ6K+35rGC77yM5bm25bCG6L+U5Zue57uT5p6c5YiG5Y+R5Yiw5ZCEVGVzdGNhc2Vcblx0aWYgKHBhY2thZ2VXaWtpdGV4dCkge1xuXHRcdHBhY2thZ2VXaWtpdGV4dCA9IGA8ZGl2IGNsYXNzPVwic3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlLXVuZGVmaW5lZFwiPiR7cGFja2FnZVdpa2l0ZXh0fTwvZGl2PmA7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGV4dDogcGFja2FnZVdpa2l0ZXh0LFxuXHRcdFx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdH07XG5cdFx0XHRpZiAoaXNQcmV2aWV3KSB7XG5cdFx0XHRcdHBhcmFtcy5kaXNhYmxlZWRpdHNlY3Rpb24gPSB0cnVlO1xuXHRcdFx0XHRwYXJhbXMucHJldmlldyA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXHRcdFx0aWYgKCFkYXRhPy5bJ3BhcnNlJ10/LnRleHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXJzZWRXaWtpdGV4dDogc3RyaW5nID0gKGRhdGFbJ3BhcnNlJ10udGV4dCBhcyBzdHJpbmcpLnRyaW0oKTtcblx0XHRcdGlmIChwYXJzZWRXaWtpdGV4dCkge1xuXHRcdFx0XHRjb25zdCAkcGFyc2VkRWxlbWVudDogSlF1ZXJ5ID0gJChwYXJzZWRXaWtpdGV4dCk7XG5cdFx0XHRcdGZvciAoY29uc3QgW2tleSwgdGVzdGNhc2VJdGVtXSBvZiBPYmplY3QuZW50cmllcyh0ZXN0Y2FzZURhdGFMaXN0KSkge1xuXHRcdFx0XHRcdGNvbnN0IHtlbGVtZW50LCBsYW5nfSA9IHRlc3RjYXNlSXRlbTtcblxuXHRcdFx0XHRcdGlmICghWydqYXZhc2NyaXB0JywgJ2pzJywgJ3RleHQnLCAnY3NzJywgJ2pzb24nXS5pbmNsdWRlcyhsYW5nKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD4gPSAkcGFyc2VkRWxlbWVudC5maW5kKFxuXHRcdFx0XHRcdFx0YC5zcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UtdW5kZWZpbmVkID4gLnNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZS0ke2tleX1gXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpZiAoISRlbGVtZW50Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgJGFkZFRhcmdldDogSlF1ZXJ5ID0gJChlbGVtZW50KS5maW5kKCcjc3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZycpO1xuXHRcdFx0XHRcdCRhZGRUYXJnZXQuaHRtbCgkZWxlbWVudC5odG1sKCkpO1xuXHRcdFx0XHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5maXJlKCRhZGRUYXJnZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG59O1xuXG5leHBvcnQge3dpa2l0ZXh0UHJldmlld1Rlc3RjYXNlfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0NmLElBQU1DLHdCQUF3QjtBQUM5QixJQUFNQyxzQkFBc0I7O0FDRG5DLElBQUFDLHFCQUFrQkMsUUFBQUosUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDRGxCLElBQUFLLG9CQUF1QkwsUUFBQSxpQkFBQTtBQUV2QixJQUFNTSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxTQUFBLEdBQVFGLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFVBQUEsR0FBU0wsa0JBQUFHLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUUsZUFBZUwsZ0JBQWdCO0FBRXJDLElBQU1NLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEakJBLElBQU1OLFNBQVNBLE1BQ2RKLG1DQUFBVyxRQUFBQyxjQUFBWixtQkFBQVcsUUFBQUUsVUFBQSxNQUNDYixtQ0FBQVcsUUFBQUMsY0FBQyxPQUFBO0VB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QUFBLHFGQUFBcUIsT0FDaUN4RCxHQUFHLENBQ3pGO0FBQ0EsZ0JBQUksQ0FBQ2tDLFNBQVNnQyxRQUFRO0FBQ3JCO1lBQ0Q7QUFFQSxrQkFBTThKLGFBQXFCak0sRUFBRVksT0FBTyxFQUFFUixLQUFLLGtDQUFrQztBQUM3RTZMLHVCQUFXL0wsS0FBS0MsU0FBU0QsS0FBSyxDQUFDO0FBQy9CRyxlQUFHQyxLQUFLLGtCQUFrQixFQUFFQyxLQUFLMEwsVUFBVTtVQUM1QztRQUNEO01BQ0QsUUFBUTtNQUFDO0lBQ1Y7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQS9ITTFCLHlCQUFBMkIsTUFBQTtBQUFBLFdBQUExQixNQUFBakUsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBbEJMTixNQUFBLEdBQUtySixtQkFBQWdQLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxnQkFBZ0J0TSxPQUFzQztBQUVsRnlKLGVBQWF6SixLQUFLO0FBRWxCLE9BQUt3Syx3QkFBd0IsSUFBSTtBQUNsQyxDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDYiLCAicmVxdWlyZSIsICJwcmV2aWV3TG9hZGluZ0NvbnRlbnQiLCAicHJldmlld0xvYWRpbmdJbm5lciIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiRmFpbGVkIiwgImxvY2FsaXplIiwgImVuIiwgIkxvYWRpbmciLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJzcmMiLCAiZGVjb2RpbmciLCAid2lkdGgiLCAiaGVpZ2h0IiwgImlkIiwgImNsYXNzTmFtZSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiY2hlY2tFbGVtZW50RXhpc3QiLCAic2VsZWN0b3JzIiwgInNlbGVjdG9yQXJyYXkiLCAiZ2VuZXJhdGVBcnJheSIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJzZWxlY3RvciIsICJ2YWx1ZSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImVyciIsICJlIiwgImYiLCAiYWRkUGFyc2VkV2lraXRleHQiLCAicGFyc2VkV2lraXRleHQiLCAiJGJvZHkiLCAiJCIsICIkcGFyc2VkV2lraXRleHQiLCAiaHRtbCIsICIkZWxlbWVudCIsICJmaW5kIiwgIm13IiwgImhvb2siLCAiZmlyZSIsICJhcHBlbmQiLCAibm90aWNlRmFpbEVsZW1lbnQiLCAibm90aWNlTG9hZGluZ0VsZW1lbnQiLCAicmVwbGFjZURPTSIsICJlbGVtZW50IiwgImFkZExvYWRpbmdOb3RpY2UiLCAibG9hZGluZ0ZhaWxOb3RpY2UiLCAicmVtb3ZlTG9hZGluZ05vdGljZSIsICJ3aWtpVGV4dEtleSIsICJ2ZXJzaW9uIiwgImx1YUFkZFRleHQiLCAiaW5wdXRTdHJpbmciLCAibmV3U3RyaW5nIiwgImlzRXNjYXBlIiwgImVzY2FwZVN0cmluZyIsICJKU09OIiwgInBhcnNlIiwgImNvbmNhdCIsICJzdHJpbmdpZnkiLCAicmVwbGFjZSIsICJsdWFHZXRTdHJpbmciLCAidGVzdFN0cmluZ0V4ZWNBcnJheSIsICJleGVjIiwgInRlc3RTdHJpbmciLCAic2xpY2UiLCAiTWF0aCIsICJtYXgiLCAibGVuZ3RoIiwgInRyaW1DaGVjayIsICJ0cmltIiwgImZpcnN0Q2hhciIsICJjaGFyQXQiLCAiYXQiLCAibHVhR2V0Q29udGVudFRleHQiLCAid2lraXRleHQiLCAiUmVnRXhwIiwgInN1YnN0cmluZyIsICJ0ZW1wVGV4dCIsICJsdWFHZXRPYmpUZXh0IiwgImx1YUdldENTU3dpa2l0ZXh0IiwgIl9yZWYiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgImNzc1RleHQiLCAibHVhR2V0SlNPTndpa2l0ZXh0IiwgIl9yZWYyIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDIiLCAiSlNPTlRleHQiLCAianNvbkRhdGEiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgInRlc3QiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllczIiLCAiayIsICJ2IiwgImx1YUdldEpTd2lraXRleHQiLCAiX3JlZjMiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MyIsICJqc1RleHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFwaSIsICJpbml0TXdBcGkiLCAid2dVc2VyTGFuZ3VhZ2UiLCAid2dVc2VyVmFyaWFudCIsICJjb25maWciLCAiZ2V0IiwgImdldExhbmd1YWdlIiwgImxhbmciLCAiaW5jbHVkZXMiLCAic2tpbiIsICJtd0FkZFdpa2lUZXh0IiwgIl9yZWY0IiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhZ2VOYW1lIiwgImlzUHJldmlldyIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInRpdGxlIiwgImNvbnRlbnRtb2RlbCIsICJ0ZXh0IiwgInByb3AiLCAidXNlbGFuZyIsICJ1c2Vza2luIiwgImRpc2FibGVlZGl0c2VjdGlvbiIsICJwcmV2aWV3IiwgIl9kYXRhJHBhcnNlIiwgImRhdGEiLCAicG9zdCIsICJfeCIsICJfeDIiLCAiX3gzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJtd0FkZEx1YVRleHQiLCAiX3JlZjUiLCAiY2FsbEJhY2siLCAidGVtcE1vZHVsZU5hbWUiLCAibW9kdWxlQ2FsbCIsICJfZGF0YSRwYXJzZTIiLCAidGVtcGxhdGVzYW5kYm94dGl0bGUiLCAidGVtcGxhdGVzYW5kYm94dGV4dCIsICJ0ZW1wbGF0ZXNhbmRib3hjb250ZW50bW9kZWwiLCAidGVtcGxhdGVzYW5kYm94Y29udGVudGZvcm1hdCIsICJzZWFyY2giLCAiX3g0IiwgIl94NSIsICJfeDYiLCAiX3g3IiwgIndnUGFnZUNvbnRlbnRNb2RlbCIsICJsdWFDaGVjayIsICJjb250ZW50TW9kZWwiLCAidG9Mb3dlckNhc2UiLCAic2tpbjIiLCAid2dSZXZpc2lvbklkIiwgIm13QXBwbHlOb3RpY2UiLCAiX3JlZjYiLCAiY3VycmVudFBhZ2VOYW1lIiwgInBhZ2VTdWJOYW1lIiwgIl9kYXRhJHBhcnNlMyIsICJfeDgiLCAiX3g5IiwgIm13QXBwbHlSZXZpc2lvbiIsICJfcmVmNyIsICJfZGF0YSRwYXJzZTQiLCAib2xkaWQiLCAicGFnZUNvbnRlbnQiLCAiX3gxMCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiYWxsTXdDb25maWciLCAiY2hlY2tNd0NvbmZpZyIsICJjb25maWdLZXkiLCAiZXhwZWN0Q29uZmlnIiwgIm13Q29uZmlnIiwgIlN0cmluZyIsICJjaGVja05lZWRQcmV2aWV3IiwgImJvZHkiLCAiaW5uZXJIVE1MIiwgIndnQ2Fub25pY2FsTmFtZXNwYWNlIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnUGFnZU5hbWUiLCAibXdBZGRQcmV2aWV3IiwgIl9tdyR1dGlsJGdldFVybCRtYXRjaCIsICJfbXckdXRpbCRnZXRVcmwkbWF0Y2gyIiwgInBhdGhQYXRoIiwgImRlY29kZVVSSSIsICJ1dGlsIiwgImdldFVybCIsICJtYXRjaCIsICJfJGJvZHkkZmluZCR2YWwiLCAiaW5zZXJ0QWZ0ZXIiLCAidmFsIiwgIl8kYm9keSRmaW5kJHZhbDIiLCAidGV4dGFyZWFDb250ZW50IiwgImZ1bGxQYWdlTmFtZSIsICJ3Z1BhZ2VOYW1lMiIsICJ3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSIsICJfcmVmOCIsICJ0ZXN0Y2FzZUxpc3QiLCAicXVlcnlTZWxlY3RvckFsbCIsICJ0ZXN0Y2FzZURhdGFMaXN0IiwgImkiLCAiX2V4ZWMiLCAiX2NvZGVJZCR0b0xvd2VyQ2FzZSIsICJfY29kZUVsZW1lbnQkdGV4dENvbnQiLCAiX2NvZGVFbGVtZW50JHRleHRDb250MiIsICJjb2RlRWxlbWVudCIsICJjb2RlSWQiLCAic2V0QXR0cmlidXRlIiwgInRvU3RyaW5nIiwgImNvZGUiLCAidGV4dENvbnRlbnQiLCAicGFja2FnZVdpa2l0ZXh0IiwgIl9pMyIsICJfT2JqZWN0JHZhbHVlcyIsICJ2YWx1ZXMiLCAidGVzdGNhc2VJdGVtIiwgInByZXBlbmQiLCAiX2RhdGEkcGFyc2U1IiwgIiRwYXJzZWRFbGVtZW50IiwgIl9pNCIsICJfT2JqZWN0JGVudHJpZXMzIiwgIiRhZGRUYXJnZXQiLCAiX3gxMSIsICJnZXRCb2R5IiwgInRoZW4iLCAic3BlY2lhbFdpa2l0ZXh0Il0KfQo=
