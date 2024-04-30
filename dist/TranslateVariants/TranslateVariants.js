/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Xiplus/js/TranslateVariants}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/TranslateVariants}
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

// dist/TranslateVariants/TranslateVariants.js
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
//! src/TranslateVariants/TranslateVariants.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/TranslateVariants/options.json
var translateVariantsSummary = "自动转换变体自[[$1]]（[[MediaWiki:Gadget-TranslateVariants.js|TranslateVariants]]）";
var contentID = "TranslateVariants-content";
var version = "2.0";
//! src/TranslateVariants/TranslateVariants.module.less
var noChanges = "TranslateVariants-module__noChanges_Yvm-lW";
var publishChanges = "TranslateVariants-module__publishChanges_Yvm-lW";
var submitAll = "TranslateVariants-module__submitAll_Yvm-lW";
var warning = "TranslateVariants-module__warning_Yvm-lW";
//! src/TranslateVariants/modules/translateVariants.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/TranslateVariants/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("TranslateVariants/".concat(version));
//! src/TranslateVariants/modules/translateVariants.tsx
var langs = /* @__PURE__ */ new Set(["zh", "zh-hans", "zh-cn", "zh-my", "zh-sg", "zh-hant", "zh-hk", "zh-mo", "zh-tw"]);
var nameOfLangs = {
  zh: "原始",
  "zh-hans": "简体",
  "zh-cn": "中国大陆简体",
  "zh-my": "马来西亚简体",
  "zh-sg": "新加坡简体",
  "zh-hant": "繁體",
  "zh-hk": "中國香港繁體",
  "zh-mo": "中國澳門繁體",
  "zh-tw": "中國臺灣繁體"
};
var translateVariants = (wgPageName) => {
  var _prompt;
  const summary = translateVariantsSummary.replace(/\$1/g, wgPageName);
  const $wrapper = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id: "TranslateVariants"
  })).prependTo("#bodyContent");
  const $submitAll = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("button", {
    className: ["cdx-button", "cdx-button--action-progressive", "cdx-button--weight-primary"]
  }, window.wgULS("发布所有更改", "發佈所有變更")));
  $submitAll.on("click", () => {
    const $buttons = $wrapper.find(".".concat(publishChanges));
    if (!$buttons.length) {
      void mw.notify(window.wgULS("没有任何可以发布的更改", "沒有任何變更可發佈"), {
        tag: "TranslateVariants",
        type: "error"
      });
      return;
    }
    if (!confirm(window.wgULS("发布$1个更改？", "發佈$1個變更？").replace("$1", "".concat($buttons.length)))) {
      void mw.notify(window.wgULS("已取消发布", "已取消發佈"), {
        tag: "TranslateVariants",
        type: "warn"
      });
      return;
    }
    var _iterator2 = _createForOfIteratorHelper($buttons), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const button = _step2.value;
        $(button).trigger("click");
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
  $wrapper.append($(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    className: submitAll
  })).append($submitAll), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    className: warning
  }, window.wgULS("提醒：TranslateVariants工具使用IT及MediaWiki转换组进行自动转换，请确认转换结果是否正确！", "提醒：TranslateVariants工具使用IT及MediaWiki轉換組進行自動轉換，請確認轉換結果是否正確！")));
  const defaultLangs = [...langs];
  let runLangs = (_prompt = prompt(window.wgULS("转换以下语言（以逗号隔开）：", "轉換以下語言（以逗號隔開）："), defaultLangs.join(","))) === null || _prompt === void 0 ? void 0 : _prompt.split(",");
  if (runLangs === null) {
    runLangs = defaultLangs;
  }
  const langQueue = runLangs.map((lang) => lang.trim()).filter((lang) => langs.has(lang));
  const process = (pageContent) => {
    if (!langQueue.length) {
      return;
    }
    const lang = langQueue.shift();
    const $diffTable = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
      id: "TranslateVariants-diff-".concat(lang)
    }));
    $wrapper.append($diffTable, /* @__PURE__ */ import_ext_gadget2.default.createElement("hr", null));
    const basePageName = wgPageName.replace(/\/zh$/, "");
    const targetTitle = lang === "zh" ? basePageName : "".concat(basePageName, "/").concat(lang);
    let newPageContent = "";
    void api.parse('{{NoteTA|G1=IT|G2=MediaWiki}}<div id="'.concat(contentID, '">').concat(pageContent, "</div>"), {
      uselang: lang
    }).then((content) => {
      newPageContent = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
        innerHTML: content
      })).find("#".concat(contentID)).text();
      const _params = {
        action: "query",
        format: "json",
        formatversion: "2",
        titles: targetTitle,
        prop: "revisions",
        rvdifftotext: newPageContent
      };
      return api.post(_params);
    }, (error) => {
      void mw.notify(window.wgULS("解析$1时发生错误：", "解析$1時發生錯誤：").replace("$1", lang) + error, {
        tag: "TranslateVariants",
        type: "error"
      });
      return null;
    }).then((data) => {
      if (data === null) {
        return;
      }
      const $tool = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
        href: mw.util.getUrl(targetTitle)
      }, lang, "（", nameOfLangs[lang], "）"), "（", /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
        href: mw.util.getUrl(targetTitle, {
          action: "edit"
        })
      }, window.wgULS("编", "編")), "）"));
      $diffTable.append($tool);
      const [page] = data["query"].pages;
      if (page.missing) {
        const $submit = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("button", {
          className: [publishChanges, "cdx-button"]
        }, window.wgULS("发布页面", "發佈頁面")));
        $submit.on("click", () => {
          $submit.remove();
          api.create(targetTitle, {
            summary
          }, newPageContent).then(() => {
            void mw.notify(window.wgULS("已编辑 ", "已編輯 ") + targetTitle, {
              tag: "TranslateVariants",
              type: "success"
            });
          }, (error) => {
            void mw.notify(window.wgULS("编辑", "編輯 ") + targetTitle + window.wgULS(" 发生错误：", " 發生錯誤：") + error, {
              tag: "TranslateVariants",
              type: "error"
            });
          });
        });
        $tool.append($submit);
        $diffTable.append(/* @__PURE__ */ import_ext_gadget2.default.createElement("pre", {
          innerHTML: newPageContent.replace(/[&<>]/gim, (string) => "&#".concat(string.codePointAt(0), ";"))
        }));
        return;
      }
      const diff = page.revisions[0].diff.body;
      if (diff === "") {
        $tool.append(/* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
          className: noChanges
        }, window.wgULS("无更改", "無變更")));
      } else {
        const $submit = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("button", {
          className: [publishChanges, "cdx-button"]
        }, window.wgULS("发布更改", "發佈變更")));
        $submit.on("click", () => {
          $submit.remove();
          api.edit(targetTitle, () => ({
            summary,
            text: newPageContent,
            nocreate: false
          })).then(() => {
            void mw.notify(window.wgULS("已编辑", "已編輯 ") + targetTitle, {
              tag: "TranslateVariants",
              type: "success"
            });
          }, (error) => {
            void mw.notify(window.wgULS("编辑$1发生错误：", "編輯$1發生錯誤：").replace("$1", targetTitle) + error, {
              tag: "TranslateVariants",
              type: "error"
            });
          });
        });
        $tool.append($submit);
        $diffTable.append($(/* @__PURE__ */ import_ext_gadget2.default.createElement("table", {
          className: "diff",
          innerHTML: diff
        })).prepend(/* @__PURE__ */ import_ext_gadget2.default.createElement("colgroup", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("col", {
          className: "diff-marker"
        }), /* @__PURE__ */ import_ext_gadget2.default.createElement("col", {
          className: "diff-content"
        }), /* @__PURE__ */ import_ext_gadget2.default.createElement("col", {
          className: "diff-marker"
        }), /* @__PURE__ */ import_ext_gadget2.default.createElement("col", {
          className: "diff-content"
        }))));
      }
    }, (error) => {
      void mw.notify(window.wgULS("获取$1差异时发生错误：", "取得$1差異時發生錯誤：").replace("$1", lang) + error, {
        tag: "TranslateVariants",
        type: "error"
      });
    }).always(() => {
      process(pageContent);
    });
  };
  const params = {
    action: "query",
    format: "json",
    formatversion: "2",
    prop: "revisions",
    titles: wgPageName,
    curtimestamp: true,
    rvprop: ["content", "timestamp"]
  };
  void api.get(params).then((data) => {
    var _data$query;
    if (!((_data$query = data["query"]) !== null && _data$query !== void 0 && _data$query.pages)) {
      return $.Deferred().reject("unknown");
    }
    const [page] = data["query"].pages;
    if (page.invalid) {
      return $.Deferred().reject("invalidtitle");
    }
    if (page.missing) {
      return $.Deferred().reject("nocreate-missing");
    }
    const [{
      content
    }] = page.revisions;
    return content;
  }).then((content) => {
    let pageContent = content;
    pageContent = pageContent.replace(/[\s#&'*:<>[\]_{|}]/gim, (string) => "&#".concat(string.codePointAt(0), ";"));
    pageContent = pageContent.replace(/(&#91;&#91;)((?:(?!&#124;)(?!&#93;).)+?)(&#124;(?:(?!&#93;).)+?&#93;&#93;)/g, "$1-{$2}-$3");
    pageContent = pageContent.replace(/-&#123;(.+?)&#125;-/g, (string) => string.replace("-&#123;", "-{").replace("-&#123;", "-{").replace("&#125;-", "}-").replace(/&#124;/g, "|").replace(/&#32;/g, " ").replace(/&#61;/g, "=").replace(/&#62;/g, ">").replace(/&#58;/g, ":"));
    return pageContent;
  }).then((pageContent) => {
    process(pageContent);
  });
};
//! src/TranslateVariants/TranslateVariants.ts
void (0, import_ext_gadget3.getBody)().then(($body) => {
  const {
    wgPageName
  } = mw.config.get();
  if (!/^MediaWiki:[^/]+(\/zh)?$/.test(wgPageName)) {
    return;
  }
  const portletId = $body.find("#p-cactions").length ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", window.wgULS("转换变体", "轉換變體"));
  element === null || element === void 0 || element.addEventListener("click", () => {
    element.remove();
    translateVariants(wgPageName);
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLnRzIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9vcHRpb25zLmpzb24iLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLm1vZHVsZS5sZXNzIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9tb2R1bGVzL3RyYW5zbGF0ZVZhcmlhbnRzLnRzeCIsICJzcmMvVHJhbnNsYXRlVmFyaWFudHMvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dHJhbnNsYXRlVmFyaWFudHN9IGZyb20gJy4vbW9kdWxlcy90cmFuc2xhdGVWYXJpYW50cyc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICghL15NZWRpYVdpa2k6W14vXSsoXFwvemgpPyQvLnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9ICRib2R5LmZpbmQoJyNwLWNhY3Rpb25zJykubGVuZ3RoID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIHdpbmRvdy53Z1VMUygn6L2s5o2i5Y+Y5L2TJywgJ+i9ieaPm+iuiumrlCcpKTtcblxuXHRlbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRlbGVtZW50LnJlbW92ZSgpO1xuXHRcdHRyYW5zbGF0ZVZhcmlhbnRzKHdnUGFnZU5hbWUpO1xuXHR9KTtcbn0pO1xuIiwgIntcblx0XCJ0cmFuc2xhdGVWYXJpYW50c1N1bW1hcnlcIjogXCLoh6rliqjovazmjaLlj5jkvZPoh6pbWyQxXV3vvIhbW01lZGlhV2lraTpHYWRnZXQtVHJhbnNsYXRlVmFyaWFudHMuanN8VHJhbnNsYXRlVmFyaWFudHNdXe+8iVwiLFxuXHRcImNvbnRlbnRJRFwiOiBcIlRyYW5zbGF0ZVZhcmlhbnRzLWNvbnRlbnRcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3Qgbm9DaGFuZ2VzID0gXCJUcmFuc2xhdGVWYXJpYW50cy1tb2R1bGVfX25vQ2hhbmdlc19Zdm0tbFdcIjtcbmV4cG9ydCBjb25zdCBwdWJsaXNoQ2hhbmdlcyA9IFwiVHJhbnNsYXRlVmFyaWFudHMtbW9kdWxlX19wdWJsaXNoQ2hhbmdlc19Zdm0tbFdcIjtcbmV4cG9ydCBjb25zdCBzdWJtaXRBbGwgPSBcIlRyYW5zbGF0ZVZhcmlhbnRzLW1vZHVsZV9fc3VibWl0QWxsX1l2bS1sV1wiO1xuZXhwb3J0IGNvbnN0IHdhcm5pbmcgPSBcIlRyYW5zbGF0ZVZhcmlhbnRzLW1vZHVsZV9fd2FybmluZ19Zdm0tbFdcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIm5vQ2hhbmdlc1wiOiBub0NoYW5nZXMsXG4gIFwicHVibGlzaENoYW5nZXNcIjogcHVibGlzaENoYW5nZXMsXG4gIFwic3VibWl0QWxsXCI6IHN1Ym1pdEFsbCxcbiAgXCJ3YXJuaW5nXCI6IHdhcm5pbmdcbn07XG4gICAgICAiLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtub0NoYW5nZXMsIHB1Ymxpc2hDaGFuZ2VzLCBzdWJtaXRBbGwsIHdhcm5pbmd9IGZyb20gJy4uL1RyYW5zbGF0ZVZhcmlhbnRzLm1vZHVsZS5sZXNzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbnR5cGUgTGFuZ3MgPSAnemgnIHwgJ3poLWhhbnMnIHwgJ3poLWNuJyB8ICd6aC1teScgfCAnemgtc2cnIHwgJ3poLWhhbnQnIHwgJ3poLWhrJyB8ICd6aC1tbycgfCAnemgtdHcnO1xuY29uc3QgbGFuZ3M6IFNldDxMYW5ncz4gPSBuZXcgU2V0KFsnemgnLCAnemgtaGFucycsICd6aC1jbicsICd6aC1teScsICd6aC1zZycsICd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10pO1xuY29uc3QgbmFtZU9mTGFuZ3MgPSB7XG5cdHpoOiAn5Y6f5aeLJyxcblx0J3poLWhhbnMnOiAn566A5L2TJyxcblx0J3poLWNuJzogJ+S4reWbveWkp+mZhueugOS9kycsXG5cdCd6aC1teSc6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHQnemgtc2cnOiAn5paw5Yqg5Z2h566A5L2TJyxcblx0J3poLWhhbnQnOiAn57mB6auUJyxcblx0J3poLWhrJzogJ+S4reWci+mmmea4r+e5gemrlCcsXG5cdCd6aC1tbyc6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHQnemgtdHcnOiAn5Lit5ZyL6Ie654Gj57mB6auUJyxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxMYW5ncywgc3RyaW5nPjtcblxuY29uc3QgdHJhbnNsYXRlVmFyaWFudHMgPSAod2dQYWdlTmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGNvbnN0IHN1bW1hcnk6IHN0cmluZyA9IE9QVElPTlMudHJhbnNsYXRlVmFyaWFudHNTdW1tYXJ5LnJlcGxhY2UoL1xcJDEvZywgd2dQYWdlTmFtZSk7XG5cblx0Y29uc3QgJHdyYXBwZXI6IEpRdWVyeSA9ICgkKDxkaXYgaWQ9XCJUcmFuc2xhdGVWYXJpYW50c1wiIC8+KSBhcyBKUXVlcnkpLnByZXBlbmRUbygnI2JvZHlDb250ZW50Jyk7XG5cblx0Y29uc3QgJHN1Ym1pdEFsbDogSlF1ZXJ5ID0gJChcblx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17WydjZHgtYnV0dG9uJywgJ2NkeC1idXR0b24tLWFjdGlvbi1wcm9ncmVzc2l2ZScsICdjZHgtYnV0dG9uLS13ZWlnaHQtcHJpbWFyeSddfT5cblx0XHRcdHt3aW5kb3cud2dVTFMoJ+WPkeW4g+aJgOacieabtOaUuScsICfnmbzkvYjmiYDmnInorormm7QnKX1cblx0XHQ8L2J1dHRvbj5cblx0KSBhcyBKUXVlcnk7XG5cdCRzdWJtaXRBbGwub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0ICRidXR0b25zOiBKUXVlcnkgPSAkd3JhcHBlci5maW5kKGAuJHtwdWJsaXNoQ2hhbmdlc31gKTtcblx0XHRpZiAoISRidXR0b25zLmxlbmd0aCkge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkod2luZG93LndnVUxTKCfmsqHmnInku7vkvZXlj6/ku6Xlj5HluIPnmoTmm7TmlLknLCAn5rKS5pyJ5Lu75L2V6K6K5pu05Y+v55m85L2IJyksIHtcblx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudHMnLFxuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFjb25maXJtKHdpbmRvdy53Z1VMUygn5Y+R5biDJDHkuKrmm7TmlLnvvJ8nLCAn55m85L2IJDHlgIvorormm7TvvJ8nKS5yZXBsYWNlKCckMScsIGAkeyRidXR0b25zLmxlbmd0aH1gKSkpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KHdpbmRvdy53Z1VMUygn5bey5Y+W5raI5Y+R5biDJywgJ+W3suWPlua2iOeZvOS9iCcpLCB7dGFnOiAnVHJhbnNsYXRlVmFyaWFudHMnLCB0eXBlOiAnd2Fybid9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGJ1dHRvbiBvZiAkYnV0dG9ucykge1xuXHRcdFx0JChidXR0b24pLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0fVxuXHR9KTtcblxuXHQkd3JhcHBlci5hcHBlbmQoXG5cdFx0JCg8ZGl2IGNsYXNzTmFtZT17c3VibWl0QWxsfSAvPikuYXBwZW5kKCRzdWJtaXRBbGwpLFxuXHRcdDxkaXYgY2xhc3NOYW1lPXt3YXJuaW5nfT5cblx0XHRcdHt3aW5kb3cud2dVTFMoXG5cdFx0XHRcdCfmj5DphpLvvJpUcmFuc2xhdGVWYXJpYW50c+W3peWFt+S9v+eUqElU5Y+KTWVkaWFXaWtp6L2s5o2i57uE6L+b6KGM6Ieq5Yqo6L2s5o2i77yM6K+356Gu6K6k6L2s5o2i57uT5p6c5piv5ZCm5q2j56Gu77yBJyxcblx0XHRcdFx0J+aPkOmGku+8mlRyYW5zbGF0ZVZhcmlhbnRz5bel5YW35L2/55SoSVTlj4pNZWRpYVdpa2novYnmj5vntYTpgLLooYzoh6rli5XovYnmj5vvvIzoq4vnorroqo3ovYnmj5vntZDmnpzmmK/lkKbmraPnorrvvIEnXG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xuXG5cdGNvbnN0IGRlZmF1bHRMYW5nczogTGFuZ3NbXSA9IFsuLi5sYW5nc107XG5cblx0bGV0IHJ1bkxhbmdzID0gcHJvbXB0KFxuXHRcdHdpbmRvdy53Z1VMUygn6L2s5o2i5Lul5LiL6K+t6KiA77yI5Lul6YCX5Y+36ZqU5byA77yJ77yaJywgJ+i9ieaPm+S7peS4i+iqnuiogO+8iOS7pemAl+iZn+malOmWi++8ie+8micpLFxuXHRcdGRlZmF1bHRMYW5ncy5qb2luKCcsJylcblx0KT8uc3BsaXQoJywnKSBhcyBMYW5nc1tdIHwgbnVsbDtcblx0aWYgKHJ1bkxhbmdzID09PSBudWxsKSB7XG5cdFx0cnVuTGFuZ3MgPSBkZWZhdWx0TGFuZ3M7XG5cdH1cblxuXHRjb25zdCBsYW5nUXVldWU6IExhbmdzW10gPSBydW5MYW5nc1xuXHRcdC5tYXAoKGxhbmc6IExhbmdzKTogTGFuZ3MgPT4gbGFuZy50cmltKCkgYXMgTGFuZ3MpXG5cdFx0LmZpbHRlcigobGFuZzogTGFuZ3MpOiBib29sZWFuID0+IGxhbmdzLmhhcyhsYW5nKSk7XG5cblx0Y29uc3QgcHJvY2VzcyA9IChwYWdlQ29udGVudDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0aWYgKCFsYW5nUXVldWUubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbGFuZyA9IGxhbmdRdWV1ZS5zaGlmdCgpIGFzIExhbmdzO1xuXG5cdFx0Y29uc3QgJGRpZmZUYWJsZTogSlF1ZXJ5ID0gJCg8ZGl2IGlkPXtgVHJhbnNsYXRlVmFyaWFudHMtZGlmZi0ke2xhbmd9YH0gLz4pIGFzIEpRdWVyeTtcblx0XHQkd3JhcHBlci5hcHBlbmQoJGRpZmZUYWJsZSwgPGhyIC8+KTtcblxuXHRcdGNvbnN0IGJhc2VQYWdlTmFtZTogc3RyaW5nID0gd2dQYWdlTmFtZS5yZXBsYWNlKC9cXC96aCQvLCAnJyk7XG5cdFx0Y29uc3QgdGFyZ2V0VGl0bGU6IHN0cmluZyA9IGxhbmcgPT09ICd6aCcgPyBiYXNlUGFnZU5hbWUgOiBgJHtiYXNlUGFnZU5hbWV9LyR7bGFuZ31gO1xuXG5cdFx0bGV0IG5ld1BhZ2VDb250ZW50OiBzdHJpbmcgPSAnJztcblx0XHR2b2lkIGFwaVxuXHRcdFx0LnBhcnNlKGB7e05vdGVUQXxHMT1JVHxHMj1NZWRpYVdpa2l9fTxkaXYgaWQ9XCIke09QVElPTlMuY29udGVudElEfVwiPiR7cGFnZUNvbnRlbnR9PC9kaXY+YCwge1xuXHRcdFx0XHR1c2VsYW5nOiBsYW5nLFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKFxuXHRcdFx0XHQoY29udGVudDogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0bmV3UGFnZUNvbnRlbnQgPSAkKDxkaXYgaW5uZXJIVE1MPXtjb250ZW50fSAvPilcblx0XHRcdFx0XHRcdC5maW5kKGAjJHtPUFRJT05TLmNvbnRlbnRJRH1gKVxuXHRcdFx0XHRcdFx0LnRleHQoKTtcblxuXHRcdFx0XHRcdGNvbnN0IF9wYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0XHR0aXRsZXM6IHRhcmdldFRpdGxlLFxuXHRcdFx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdFx0XHRydmRpZmZ0b3RleHQ6IG5ld1BhZ2VDb250ZW50LFxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRyZXR1cm4gYXBpLnBvc3QoX3BhcmFtcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdChlcnJvcik6IG51bGwgPT4ge1xuXHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfop6PmnpAkMeaXtuWPkeeUn+mUmeivr++8micsICfop6PmnpAkMeaZgueZvOeUn+mMr+iqpO+8micpLnJlcGxhY2UoJyQxJywgbGFuZykgKyBlcnJvcixcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudHMnLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdFx0LnRoZW4oXG5cdFx0XHRcdChkYXRhKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGRhdGEgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCAkdG9vbCA9ICQoXG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybCh0YXJnZXRUaXRsZSl9PlxuXHRcdFx0XHRcdFx0XHRcdHtsYW5nfe+8iHtuYW1lT2ZMYW5nc1tsYW5nXX3vvIlcblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHTvvIg8YSBocmVmPXttdy51dGlsLmdldFVybCh0YXJnZXRUaXRsZSwge2FjdGlvbjogJ2VkaXQnfSl9Pnt3aW5kb3cud2dVTFMoJ+e8licsICfnt6gnKX08L2E+77yJXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpIGFzIEpRdWVyeTtcblxuXHRcdFx0XHRcdCRkaWZmVGFibGUuYXBwZW5kKCR0b29sKTtcblxuXHRcdFx0XHRcdGNvbnN0IFtwYWdlXSA9IGRhdGFbJ3F1ZXJ5J10ucGFnZXM7XG5cdFx0XHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRcdFx0Y29uc3QgJHN1Ym1pdCA9ICQoXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtbcHVibGlzaENoYW5nZXMsICdjZHgtYnV0dG9uJ119PlxuXHRcdFx0XHRcdFx0XHRcdHt3aW5kb3cud2dVTFMoJ+WPkeW4g+mhtemdoicsICfnmbzkvYjpoIHpnaInKX1cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQpIGFzIEpRdWVyeTtcblx0XHRcdFx0XHRcdCRzdWJtaXQub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHQkc3VibWl0LnJlbW92ZSgpO1xuXG5cdFx0XHRcdFx0XHRcdGFwaS5jcmVhdGUoXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0VGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdG5ld1BhZ2VDb250ZW50XG5cdFx0XHRcdFx0XHRcdCkudGhlbihcblx0XHRcdFx0XHRcdFx0XHQoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeSh3aW5kb3cud2dVTFMoJ+W3sue8lui+kSAnLCAn5bey57eo6LyvICcpICsgdGFyZ2V0VGl0bGUsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudHMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdChlcnJvcik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn57yW6L6RJywgJ+e3qOi8ryAnKSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0VGl0bGUgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygnIOWPkeeUn+mUmeivr++8micsICcg55m855Sf6Yyv6Kqk77yaJykgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudHMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdCR0b29sLmFwcGVuZCgkc3VibWl0KTtcblx0XHRcdFx0XHRcdCRkaWZmVGFibGUuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQ8cHJlXG5cdFx0XHRcdFx0XHRcdFx0aW5uZXJIVE1MPXtuZXdQYWdlQ29udGVudC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHRcdFx0L1smPD5dL2dpbSxcblx0XHRcdFx0XHRcdFx0XHRcdChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiBgJiMke3N0cmluZy5jb2RlUG9pbnRBdCgwKX07YFxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgZGlmZjogc3RyaW5nID0gcGFnZS5yZXZpc2lvbnNbMF0uZGlmZi5ib2R5O1xuXHRcdFx0XHRcdGlmIChkaWZmID09PSAnJykge1xuXHRcdFx0XHRcdFx0JHRvb2wuYXBwZW5kKDxzcGFuIGNsYXNzTmFtZT17bm9DaGFuZ2VzfT57d2luZG93LndnVUxTKCfml6Dmm7TmlLknLCAn54Sh6K6K5pu0Jyl9PC9zcGFuPik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnN0ICRzdWJtaXQgPSAkKFxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17W3B1Ymxpc2hDaGFuZ2VzLCAnY2R4LWJ1dHRvbiddfT5cblx0XHRcdFx0XHRcdFx0XHR7d2luZG93LndnVUxTKCflj5HluIPmm7TmlLknLCAn55m85L2I6K6K5pu0Jyl9XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0KSBhcyBKUXVlcnk7XG5cdFx0XHRcdFx0XHQkc3VibWl0Lm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0JHN1Ym1pdC5yZW1vdmUoKTtcblxuXHRcdFx0XHRcdFx0XHRhcGkuZWRpdCh0YXJnZXRUaXRsZSwgKCkgPT4gKHtcblx0XHRcdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IG5ld1BhZ2VDb250ZW50LFxuXHRcdFx0XHRcdFx0XHRcdG5vY3JlYXRlOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0fSkpLnRoZW4oXG5cdFx0XHRcdFx0XHRcdFx0KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkod2luZG93LndnVUxTKCflt7LnvJbovpEnLCAn5bey57eo6LyvICcpICsgdGFyZ2V0VGl0bGUsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudHMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvd1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC53Z1VMUygn57yW6L6RJDHlj5HnlJ/plJnor6/vvJonLCAn57eo6LyvJDHnmbznlJ/pjK/oqqTvvJonKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKCckMScsIHRhcmdldFRpdGxlKSArIGVycm9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudHMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdCR0b29sLmFwcGVuZCgkc3VibWl0KTtcblx0XHRcdFx0XHRcdCRkaWZmVGFibGUuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKDx0YWJsZSBjbGFzc05hbWU9XCJkaWZmXCIgaW5uZXJIVE1MPXtkaWZmfSAvPikucHJlcGVuZChcblx0XHRcdFx0XHRcdFx0XHQ8Y29sZ3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Y29sIGNsYXNzTmFtZT1cImRpZmYtbWFya2VyXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxjb2wgY2xhc3NOYW1lPVwiZGlmZi1jb250ZW50XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxjb2wgY2xhc3NOYW1lPVwiZGlmZi1tYXJrZXJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGNvbCBjbGFzc05hbWU9XCJkaWZmLWNvbnRlbnRcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvY29sZ3JvdXA+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQoZXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+WJDHlt67lvILml7blj5HnlJ/plJnor6/vvJonLCAn5Y+W5b6XJDHlt67nlbDmmYLnmbznlJ/pjK/oqqTvvJonKS5yZXBsYWNlKCckMScsIGxhbmcpICsgZXJyb3IsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnRzJyxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0XHQuYWx3YXlzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0cHJvY2VzcyhwYWdlQ29udGVudCk7XG5cdFx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0dGl0bGVzOiB3Z1BhZ2VOYW1lLFxuXHRcdGN1cnRpbWVzdGFtcDogdHJ1ZSxcblx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnXSxcblx0fTtcblxuXHR2b2lkIGFwaVxuXHRcdC5nZXQocGFyYW1zKVxuXHRcdC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRpZiAoIWRhdGFbJ3F1ZXJ5J10/LnBhZ2VzKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCd1bmtub3duJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IFtwYWdlXSA9IGRhdGFbJ3F1ZXJ5J10ucGFnZXM7XG5cblx0XHRcdGlmIChwYWdlLmludmFsaWQpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ2ludmFsaWR0aXRsZScpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnbm9jcmVhdGUtbWlzc2luZycpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBbe2NvbnRlbnR9XSA9IHBhZ2UucmV2aXNpb25zO1xuXG5cdFx0XHRyZXR1cm4gY29udGVudCBhcyBzdHJpbmc7XG5cdFx0fSlcblx0XHQudGhlbigoY29udGVudDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdGxldCBwYWdlQ29udGVudDogc3RyaW5nID0gY29udGVudDtcblxuXHRcdFx0cGFnZUNvbnRlbnQgPSBwYWdlQ29udGVudC5yZXBsYWNlKFxuXHRcdFx0XHQvW1xccyMmJyo6PD5bXFxdX3t8fV0vZ2ltLFxuXHRcdFx0XHQoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4gYCYjJHtzdHJpbmcuY29kZVBvaW50QXQoMCl9O2Bcblx0XHRcdCk7XG5cdFx0XHRwYWdlQ29udGVudCA9IHBhZ2VDb250ZW50LnJlcGxhY2UoXG5cdFx0XHRcdC8oJiM5MTsmIzkxOykoKD86KD8hJiMxMjQ7KSg/ISYjOTM7KS4pKz8pKCYjMTI0Oyg/Oig/ISYjOTM7KS4pKz8mIzkzOyYjOTM7KS9nLFxuXHRcdFx0XHQnJDEteyQyfS0kMydcblx0XHRcdCk7XG5cdFx0XHRwYWdlQ29udGVudCA9IHBhZ2VDb250ZW50LnJlcGxhY2UoLy0mIzEyMzsoLis/KSYjMTI1Oy0vZywgKHN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+XG5cdFx0XHRcdHN0cmluZ1xuXHRcdFx0XHRcdC5yZXBsYWNlKCctJiMxMjM7JywgJy17Jylcblx0XHRcdFx0XHQucmVwbGFjZSgnLSYjMTIzOycsICcteycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoJyYjMTI1Oy0nLCAnfS0nKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8mIzEyNDsvZywgJ3wnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8mIzMyOy9nLCAnICcpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjNjE7L2csICc9Jylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiM2MjsvZywgJz4nKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8mIzU4Oy9nLCAnOicpXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gcGFnZUNvbnRlbnQ7XG5cdFx0fSlcblx0XHQudGhlbigocGFnZUNvbnRlbnQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0cHJvY2VzcyhwYWdlQ29udGVudCk7XG5cdFx0fSk7XG59O1xuXG5leHBvcnQge3RyYW5zbGF0ZVZhcmlhbnRzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFRyYW5zbGF0ZVZhcmlhbnRzLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3JCLElBQUFDLDJCQUE0QjtBQUM1QixJQUFBQyxZQUFhO0FBQ2IsSUFBQUMsVUFBVzs7QUNGTCxJQUFNQyxZQUFZO0FBQ2xCLElBQU1DLGlCQUFpQjtBQUN2QixJQUFNQyxZQUFZO0FBQ2xCLElBQU1DLFVBQVU7O0FDRnZCLElBQUFDLHFCQUFrQkMsUUFBQVQsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDRGxCLElBQUFVLG9CQUF3QlYsUUFBQSxpQkFBQTtBQUV4QixJQUFNVyxPQUFBLEdBQWNELGtCQUFBRSxX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QUFDO0FBRXpHeUYsY0FBQSxRQUFBQSxZQUFBLFVBQUFBLFFBQVNFLGlCQUFpQixTQUFTLE1BQVk7QUFDOUNGLFlBQVF4QixPQUFPO0FBQ2YvRSxzQkFBa0JDLFVBQVU7RUFDN0IsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZXF1aXJlIiwgInRyYW5zbGF0ZVZhcmlhbnRzU3VtbWFyeSIsICJjb250ZW50SUQiLCAidmVyc2lvbiIsICJub0NoYW5nZXMiLCAicHVibGlzaENoYW5nZXMiLCAic3VibWl0QWxsIiwgIndhcm5pbmciLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAibGFuZ3MiLCAiU2V0IiwgIm5hbWVPZkxhbmdzIiwgInpoIiwgInRyYW5zbGF0ZVZhcmlhbnRzIiwgIndnUGFnZU5hbWUiLCAiX3Byb21wdCIsICJzdW1tYXJ5IiwgInJlcGxhY2UiLCAiJHdyYXBwZXIiLCAiJCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaWQiLCAicHJlcGVuZFRvIiwgIiRzdWJtaXRBbGwiLCAiY2xhc3NOYW1lIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJvbiIsICIkYnV0dG9ucyIsICJmaW5kIiwgImxlbmd0aCIsICJtdyIsICJub3RpZnkiLCAidGFnIiwgInR5cGUiLCAiY29uZmlybSIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJidXR0b24iLCAidmFsdWUiLCAidHJpZ2dlciIsICJlcnIiLCAiZSIsICJmIiwgImFwcGVuZCIsICJkZWZhdWx0TGFuZ3MiLCAicnVuTGFuZ3MiLCAicHJvbXB0IiwgImpvaW4iLCAic3BsaXQiLCAibGFuZ1F1ZXVlIiwgIm1hcCIsICJsYW5nIiwgInRyaW0iLCAiZmlsdGVyIiwgImhhcyIsICJwcm9jZXNzIiwgInBhZ2VDb250ZW50IiwgInNoaWZ0IiwgIiRkaWZmVGFibGUiLCAiYmFzZVBhZ2VOYW1lIiwgInRhcmdldFRpdGxlIiwgIm5ld1BhZ2VDb250ZW50IiwgInBhcnNlIiwgInVzZWxhbmciLCAidGhlbiIsICJjb250ZW50IiwgImlubmVySFRNTCIsICJ0ZXh0IiwgIl9wYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInRpdGxlcyIsICJwcm9wIiwgInJ2ZGlmZnRvdGV4dCIsICJwb3N0IiwgImVycm9yIiwgImRhdGEiLCAiJHRvb2wiLCAiaHJlZiIsICJ1dGlsIiwgImdldFVybCIsICJwYWdlIiwgInBhZ2VzIiwgIm1pc3NpbmciLCAiJHN1Ym1pdCIsICJyZW1vdmUiLCAiY3JlYXRlIiwgInN0cmluZyIsICJjb2RlUG9pbnRBdCIsICJkaWZmIiwgInJldmlzaW9ucyIsICJib2R5IiwgImVkaXQiLCAibm9jcmVhdGUiLCAicHJlcGVuZCIsICJhbHdheXMiLCAicGFyYW1zIiwgImN1cnRpbWVzdGFtcCIsICJydnByb3AiLCAiZ2V0IiwgIl9kYXRhJHF1ZXJ5IiwgIkRlZmVycmVkIiwgInJlamVjdCIsICJpbnZhbGlkIiwgImdldEJvZHkiLCAiJGJvZHkiLCAiY29uZmlnIiwgInRlc3QiLCAicG9ydGxldElkIiwgImVsZW1lbnQiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciJdCn0K
