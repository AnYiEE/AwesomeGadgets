/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Xiplus/js/TranslateVariants}
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/TranslateVariants}
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
//! src/TranslateVariants/modules/core.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
//! src/TranslateVariants/modules/constant.ts
var TRANSLATE_VARIANTS_SUMMARY = "自动转换变体自[[$1]]（[[MediaWiki:Gadget-TranslateVariants.js|TranslateVariants]]）";
//! src/TranslateVariants/modules/core.tsx
var import_ext_gadget2 = require("ext.gadget.Util");
var translateVariants = () => {
  const langs = /* @__PURE__ */ new Set(["zh", "zh-hans", "zh-cn", "zh-my", "zh-sg", "zh-hant", "zh-hk", "zh-mo", "zh-tw"]);
  const langname = {
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
  const result = {};
  const api = (0, import_ext_gadget2.initMwApi)("TranslateVariants/1.1");
  let basepagetext = "";
  const $table = $(/* @__PURE__ */ import_ext_gadget.default.createElement("div", {
    id: "TranslateVariants"
  })).prependTo("#bodyContent");
  const $submitAll = $(/* @__PURE__ */ import_ext_gadget.default.createElement("button", null, window.wgULS("发布所有更改", "發佈所有變更")));
  $submitAll.on("click", () => {
    const $body = $("body");
    const $buttons = $body.find(".TranslateVariants-publish-changes");
    if ($buttons.length === 0) {
      void mw.notify(window.wgULS("没有任何可以发布的更改", "沒有任何變更可發佈"), {
        tag: "TranslateVariants",
        type: "error"
      });
      return;
    }
    if (!confirm("".concat(window.wgULS("更改", "發佈")).concat($buttons.length).concat(window.wgULS("个更改", "個變更"), "？"))) {
      void mw.notify(window.wgULS("已取消更改", "已取消發佈"), {
        tag: "TranslateVariants",
        type: "warn"
      });
      return;
    }
    $buttons.each((_index, element) => {
      $(element).trigger("click");
    });
  });
  $table.append($(/* @__PURE__ */ import_ext_gadget.default.createElement("div", {
    style: {
      textAlign: "right"
    }
  })).append($submitAll));
  $(/* @__PURE__ */ import_ext_gadget.default.createElement("div", {
    style: {
      color: "#f00"
    }
  }, window.wgULS("提醒：TranslateVariants工具使用IT及MediaWiki转换组进行自动转换，请确认转换结果是否正确！", "提醒：TranslateVariants工具使用IT及MediaWiki轉換組進行自動轉換，請確認轉換結果是否正確！"))).appendTo($table);
  const defaultlangs = "zh,zh-hans,zh-cn,zh-my,zh-sg,zh-hant,zh-hk,zh-mo,zh-tw";
  let runlangs = prompt(window.wgULS("转换以下语言（以逗号隔开）：", "轉換以下語言（以逗號隔開）："), defaultlangs);
  if (runlangs === null) {
    runlangs = defaultlangs;
  }
  const langqueue = runlangs.split(",").map((lang) => lang.trim()).filter((lang) => langs.has(lang));
  const process = () => {
    if (langqueue.length === 0) {
      return;
    }
    const lang = langqueue.shift();
    const $diffTable = $(/* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      id: "TranslateVariants-diff-".concat(lang)
    })).appendTo($table);
    $(/* @__PURE__ */ import_ext_gadget.default.createElement("hr", null)).appendTo($table);
    const basename = mw.config.get("wgPageName").replace(/\/zh$/, "");
    const targetTitle = lang === "zh" ? basename : "".concat(basename, "/").concat(lang);
    let newtext;
    if (!lang) {
      return;
    }
    void api.parse('{{NoteTA|G1=IT|G2=MediaWiki}}<div id="TVcontent">'.concat(basepagetext, "</div>"), {
      uselang: lang,
      prop: "text"
    }).then((data) => {
      newtext = $("<div>").html(data).find("#TVcontent").text();
      const _params = {
        action: "query",
        prop: "revisions",
        titles: [targetTitle],
        rvdifftotext: newtext,
        formatversion: "2"
      };
      return api.post(_params);
    }, (error) => {
      void mw.notify("解析".concat(lang).concat(window.wgULS("时发生错误：", "時發生錯誤：")).concat(error), {
        type: "error",
        tag: "TranslateVariant"
      });
      return null;
    }).then((data) => {
      if (data !== null) {
        const $tool = $('<div><a href="'.concat(mw.util.getUrl(targetTitle), '">').concat(lang, "（").concat(langname[lang], '）</a>（<a href="').concat(mw.util.getUrl(targetTitle, {
          action: "edit"
        }), '">').concat(window.wgULS("编", "編"), "</a>）</div>")).appendTo($diffTable);
        const [page] = data["query"].pages;
        if (page.missing) {
          const $submit = $(/* @__PURE__ */ import_ext_gadget.default.createElement("button", {
            className: ["TranslateVariants-publish-changes"],
            style: {
              float: "right"
            }
          }, window.wgULS("发布页面", "發佈頁面"))).appendTo($tool);
          $submit.on("click", function() {
            this.remove();
            api.create(targetTitle, {
              summary: TRANSLATE_VARIANTS_SUMMARY.replace(/\$1/g, mw.config.get("wgPageName"))
            }, newtext).then(() => {
              void mw.notify(window.wgULS("已编辑 ", "已編輯 ") + targetTitle, {
                type: "success",
                tag: "TranslateVariant"
              });
            }, (error) => {
              void mw.notify(window.wgULS("编辑", "編輯 ") + targetTitle + window.wgULS(" 发生错误：", " 發生錯誤：") + error, {
                type: "error",
                tag: "TranslateVariant"
              });
            });
          });
          $("<pre>").html(newtext.replace(/[&<>]/gim, (s) => "&#".concat(s.codePointAt(0), ";"))).appendTo($diffTable);
          return;
        }
        const diff = page.revisions[0].diff.body;
        if (diff === "") {
          $(/* @__PURE__ */ import_ext_gadget.default.createElement("span", {
            style: {
              float: "right"
            }
          }, window.wgULS("无更改", "無變更"))).appendTo($tool);
        } else {
          const $submit = $(/* @__PURE__ */ import_ext_gadget.default.createElement("button", {
            className: "TranslateVariants-publish-changes",
            style: {
              float: "right"
            }
          }, window.wgULS("发布更改", "發佈變更"))).appendTo($tool);
          $submit.on("click", function() {
            this.remove();
            api.edit(targetTitle, () => ({
              text: newtext,
              summary: TRANSLATE_VARIANTS_SUMMARY.replace(/\$1/g, mw.config.get("wgPageName")),
              nocreate: false
            })).then(() => {
              void mw.notify(window.wgULS("已编辑", "已編輯 ") + targetTitle, {
                type: "success",
                tag: "TranslateVariant"
              });
            }, (error) => {
              void mw.notify(window.wgULS("编辑", "編輯 ") + targetTitle + window.wgULS(" 发生错误：", " 發生錯誤：") + error, {
                type: "error",
                tag: "TranslateVariant"
              });
            });
          });
          $("<table>").addClass("diff").html(diff).prepend(/* @__PURE__ */ import_ext_gadget.default.createElement("colgroup", null, /* @__PURE__ */ import_ext_gadget.default.createElement("col", {
            className: "diff-marker"
          }), /* @__PURE__ */ import_ext_gadget.default.createElement("col", {
            className: "diff-content"
          }), /* @__PURE__ */ import_ext_gadget.default.createElement("col", {
            className: "diff-marker"
          }), /* @__PURE__ */ import_ext_gadget.default.createElement("col", {
            className: "diff-content"
          }))).appendTo($diffTable);
        }
      }
    }, (error) => {
      void mw.notify(window.wgULS("获取", "取得") + lang + window.wgULS("差异时发生错误：", "差異時發生錯誤：") + error, {
        type: "error",
        tag: "TranslateVariant"
      });
    }).always(() => {
      process();
    });
  };
  const params = {
    action: "query",
    format: "json",
    formatversion: "2",
    prop: "revisions",
    titles: [mw.config.get("wgPageName")],
    curtimestamp: true,
    rvprop: ["content", "timestamp"]
  };
  void api.get(params).then((data) => {
    if (!data["query"] || !data["query"].pages) {
      return $.Deferred().reject("unknown");
    }
    const [page] = data["query"].pages;
    if (!page || page.invalid) {
      return $.Deferred().reject("invalidtitle");
    }
    if (page.missing) {
      return $.Deferred().reject("nocreate-missing");
    }
    const [revision] = page.revisions;
    return {
      content: revision.content
    };
  }).then(({
    content
  }) => {
    let text = content;
    result["zh"] = text;
    text = text.replace(/[\s#&'*:<>[\]_{|}]/gim, (string) => "&#".concat(string.codePointAt(0), ";"));
    text = text.replace(/(&#91;&#91;)((?:(?!&#124;)(?!&#93;).)+?)(&#124;(?:(?!&#93;).)+?&#93;&#93;)/g, "$1-{$2}-$3");
    text = text.replace(/-&#123;(.+?)&#125;-/g, (string) => {
      string = string.replace("-&#123;", "-{").replace("-&#123;", "-{").replace("&#125;-", "}-").replace(/&#124;/g, "|").replace(/&#32;/g, " ").replace(/&#61;/g, "=").replace(/&#62;/g, ">").replace(/&#58;/g, ":");
      return string;
    });
    basepagetext = text;
    process();
  });
};
//! src/TranslateVariants/TranslateVariants.ts
if (/^MediaWiki:[^/]+(\/zh)?$/.test(mw.config.get("wgPageName"))) {
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const link = mw.util.addPortletLink(portletId, "#", window.wgULS("转换变体", "轉換變體"));
  if (link) {
    $(link).on("click", function() {
      this.remove();
      translateVariants();
    });
  }
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvY29yZS50c3giLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge1RSQU5TTEFURV9WQVJJQU5UU19TVU1NQVJZfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5leHBvcnQgY29uc3QgdHJhbnNsYXRlVmFyaWFudHMgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IGxhbmdzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoW1xuXHRcdCd6aCcsXG5cdFx0J3poLWhhbnMnLFxuXHRcdCd6aC1jbicsXG5cdFx0J3poLW15Jyxcblx0XHQnemgtc2cnLFxuXHRcdCd6aC1oYW50Jyxcblx0XHQnemgtaGsnLFxuXHRcdCd6aC1tbycsXG5cdFx0J3poLXR3Jyxcblx0XSk7XG5cdGNvbnN0IGxhbmduYW1lOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuXHRcdHpoOiAn5Y6f5aeLJyxcblx0XHQnemgtaGFucyc6ICfnroDkvZMnLFxuXHRcdCd6aC1jbic6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHRcdCd6aC1teSc6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHRcdCd6aC1zZyc6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdCd6aC1oYW50JzogJ+e5gemrlCcsXG5cdFx0J3poLWhrJzogJ+S4reWci+mmmea4r+e5gemrlCcsXG5cdFx0J3poLW1vJzogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdFx0J3poLXR3JzogJ+S4reWci+iHuueBo+e5gemrlCcsXG5cdH07XG5cdGNvbnN0IHJlc3VsdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVHJhbnNsYXRlVmFyaWFudHMvMS4xJyk7XG5cdGxldCBiYXNlcGFnZXRleHQ6IHN0cmluZyA9ICcnO1xuXHRjb25zdCAkdGFibGU6IEpRdWVyeSA9ICgkKDxkaXYgaWQ9XCJUcmFuc2xhdGVWYXJpYW50c1wiIC8+KSBhcyBKUXVlcnkpLnByZXBlbmRUbygnI2JvZHlDb250ZW50Jyk7XG5cdGNvbnN0ICRzdWJtaXRBbGw6IEpRdWVyeSA9ICQoPGJ1dHRvbj57d2luZG93LndnVUxTKCflj5HluIPmiYDmnInmm7TmlLknLCAn55m85L2I5omA5pyJ6K6K5pu0Jyl9PC9idXR0b24+KSBhcyBKUXVlcnk7XG5cdCRzdWJtaXRBbGwub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0XHRjb25zdCAkYnV0dG9uczogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLlRyYW5zbGF0ZVZhcmlhbnRzLXB1Ymxpc2gtY2hhbmdlcycpO1xuXHRcdGlmICgkYnV0dG9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KHdpbmRvdy53Z1VMUygn5rKh5pyJ5Lu75L2V5Y+v5Lul5Y+R5biD55qE5pu05pS5JywgJ+aykuacieS7u+S9leiuiuabtOWPr+eZvOS9iCcpLCB7XG5cdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnRzJyxcblx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIWNvbmZpcm0oYCR7d2luZG93LndnVUxTKCfmm7TmlLknLCAn55m85L2IJyl9JHskYnV0dG9ucy5sZW5ndGh9JHt3aW5kb3cud2dVTFMoJ+S4quabtOaUuScsICflgIvorormm7QnKX3vvJ9gKSkge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkod2luZG93LndnVUxTKCflt7Llj5bmtojmm7TmlLknLCAn5bey5Y+W5raI55m85L2IJyksIHt0YWc6ICdUcmFuc2xhdGVWYXJpYW50cycsIHR5cGU6ICd3YXJuJ30pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQkYnV0dG9ucy5lYWNoKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRcdCQoZWxlbWVudCkudHJpZ2dlcignY2xpY2snKTtcblx0XHR9KTtcblx0fSk7XG5cdCR0YWJsZS5hcHBlbmQoXG5cdFx0JChcblx0XHRcdDxkaXZcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHR0ZXh0QWxpZ246ICdyaWdodCcsXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdCkuYXBwZW5kKCRzdWJtaXRBbGwpXG5cdCk7XG5cdCQoXG5cdFx0PGRpdlxuXHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0Y29sb3I6ICcjZjAwJyxcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0e3dpbmRvdy53Z1VMUyhcblx0XHRcdFx0J+aPkOmGku+8mlRyYW5zbGF0ZVZhcmlhbnRz5bel5YW35L2/55SoSVTlj4pNZWRpYVdpa2novazmjaLnu4Tov5vooYzoh6rliqjovazmjaLvvIzor7fnoa7orqTovazmjaLnu5PmnpzmmK/lkKbmraPnoa7vvIEnLFxuXHRcdFx0XHQn5o+Q6YaS77yaVHJhbnNsYXRlVmFyaWFudHPlt6Xlhbfkvb/nlKhJVOWPik1lZGlhV2lraei9ieaPm+e1hOmAsuihjOiHquWLlei9ieaPm++8jOiri+eiuuiqjei9ieaPm+e1kOaenOaYr+WQpuato+eiuu+8gSdcblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdCkuYXBwZW5kVG8oJHRhYmxlKTtcblx0Y29uc3QgZGVmYXVsdGxhbmdzOiBzdHJpbmcgPSAnemgsemgtaGFucyx6aC1jbix6aC1teSx6aC1zZyx6aC1oYW50LHpoLWhrLHpoLW1vLHpoLXR3Jztcblx0bGV0IHJ1bmxhbmdzOiBzdHJpbmcgfCBudWxsID0gcHJvbXB0KFxuXHRcdHdpbmRvdy53Z1VMUygn6L2s5o2i5Lul5LiL6K+t6KiA77yI5Lul6YCX5Y+36ZqU5byA77yJ77yaJywgJ+i9ieaPm+S7peS4i+iqnuiogO+8iOS7pemAl+iZn+malOmWi++8ie+8micpLFxuXHRcdGRlZmF1bHRsYW5nc1xuXHQpO1xuXHRpZiAocnVubGFuZ3MgPT09IG51bGwpIHtcblx0XHRydW5sYW5ncyA9IGRlZmF1bHRsYW5ncztcblx0fVxuXHRjb25zdCBsYW5ncXVldWU6IHN0cmluZ1tdID0gcnVubGFuZ3Ncblx0XHQuc3BsaXQoJywnKVxuXHRcdC5tYXAoKGxhbmc6IHN0cmluZyk6IHN0cmluZyA9PiBsYW5nLnRyaW0oKSlcblx0XHQuZmlsdGVyKChsYW5nOiBzdHJpbmcpOiBib29sZWFuID0+IGxhbmdzLmhhcyhsYW5nKSk7XG5cdGNvbnN0IHByb2Nlc3MgPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKGxhbmdxdWV1ZS5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbGFuZzogc3RyaW5nIHwgdW5kZWZpbmVkID0gbGFuZ3F1ZXVlLnNoaWZ0KCk7XG5cdFx0Y29uc3QgJGRpZmZUYWJsZTogSlF1ZXJ5ID0gKCQoPGRpdiBpZD17YFRyYW5zbGF0ZVZhcmlhbnRzLWRpZmYtJHtsYW5nfWB9IC8+KSBhcyBKUXVlcnkpLmFwcGVuZFRvKCR0YWJsZSk7XG5cdFx0JCg8aHIgLz4pLmFwcGVuZFRvKCR0YWJsZSk7XG5cdFx0Y29uc3QgYmFzZW5hbWU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC9cXC96aCQvLCAnJyk7XG5cdFx0Y29uc3QgdGFyZ2V0VGl0bGU6IHN0cmluZyA9IGxhbmcgPT09ICd6aCcgPyBiYXNlbmFtZSA6IGAke2Jhc2VuYW1lfS8ke2xhbmd9YDtcblx0XHRsZXQgbmV3dGV4dDogc3RyaW5nO1xuXHRcdGlmICghbGFuZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2b2lkIGFwaVxuXHRcdFx0LnBhcnNlKGB7e05vdGVUQXxHMT1JVHxHMj1NZWRpYVdpa2l9fTxkaXYgaWQ9XCJUVmNvbnRlbnRcIj4ke2Jhc2VwYWdldGV4dH08L2Rpdj5gLCB7XG5cdFx0XHRcdHVzZWxhbmc6IGxhbmcsXG5cdFx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbihcblx0XHRcdFx0KGRhdGEpID0+IHtcblx0XHRcdFx0XHRuZXd0ZXh0ID0gJCgnPGRpdj4nKS5odG1sKGRhdGEpLmZpbmQoJyNUVmNvbnRlbnQnKS50ZXh0KCk7XG5cdFx0XHRcdFx0Y29uc3QgX3BhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0XHRcdHRpdGxlczogW3RhcmdldFRpdGxlXSxcblx0XHRcdFx0XHRcdHJ2ZGlmZnRvdGV4dDogbmV3dGV4dCxcblx0XHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJldHVybiBhcGkucG9zdChfcGFyYW1zKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0KGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoYOino+aekCR7bGFuZ30ke3dpbmRvdy53Z1VMUygn5pe25Y+R55Sf6ZSZ6K+v77yaJywgJ+aZgueZvOeUn+mMr+iqpO+8micpfSR7ZXJyb3J9YCwge1xuXHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0XHQudGhlbihcblx0XHRcdFx0KGRhdGEpID0+IHtcblx0XHRcdFx0XHRpZiAoZGF0YSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgJHRvb2w6IEpRdWVyeSA9ICQoXG5cdFx0XHRcdFx0XHRcdGA8ZGl2PjxhIGhyZWY9XCIke213LnV0aWwuZ2V0VXJsKHRhcmdldFRpdGxlKX1cIj4ke2xhbmd977yIJHtcblx0XHRcdFx0XHRcdFx0XHRsYW5nbmFtZVtsYW5nIGFzIG5ldmVyXVxuXHRcdFx0XHRcdFx0XHR977yJPC9hPu+8iDxhIGhyZWY9XCIke213LnV0aWwuZ2V0VXJsKHRhcmdldFRpdGxlLCB7XG5cdFx0XHRcdFx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdFx0XHRcdH0pfVwiPiR7d2luZG93LndnVUxTKCfnvJYnLCAn57eoJyl9PC9hPu+8iTwvZGl2PmBcblx0XHRcdFx0XHRcdCkuYXBwZW5kVG8oJGRpZmZUYWJsZSk7XG5cdFx0XHRcdFx0XHRjb25zdCBbcGFnZV0gPSBkYXRhWydxdWVyeSddLnBhZ2VzO1xuXHRcdFx0XHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCAkc3VibWl0OiBKUXVlcnkgPSAkKFxuXHRcdFx0XHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtbJ1RyYW5zbGF0ZVZhcmlhbnRzLXB1Ymxpc2gtY2hhbmdlcyddfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7d2luZG93LndnVUxTKCflj5HluIPpobXpnaInLCAn55m85L2I6aCB6Z2iJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQpIGFzIEhUTUxFbGVtZW50XG5cdFx0XHRcdFx0XHRcdCkuYXBwZW5kVG8oJHRvb2wpO1xuXHRcdFx0XHRcdFx0XHQkc3VibWl0Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGFwaS5jcmVhdGUoXG5cdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXRUaXRsZSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VtbWFyeTogVFJBTlNMQVRFX1ZBUklBTlRTX1NVTU1BUlkucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvXFwkMS9nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdG5ld3RleHRcblx0XHRcdFx0XHRcdFx0XHQpLnRoZW4oXG5cdFx0XHRcdFx0XHRcdFx0XHQoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KHdpbmRvdy53Z1VMUygn5bey57yW6L6RICcsICflt7Lnt6jovK8gJykgKyB0YXJnZXRUaXRsZSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0KGVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn57yW6L6RJywgJ+e3qOi8ryAnKSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXRUaXRsZSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJyDlj5HnlJ/plJnor6/vvJonLCAnIOeZvOeUn+mMr+iqpO+8micpICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdCQoJzxwcmU+Jylcblx0XHRcdFx0XHRcdFx0XHQuaHRtbChuZXd0ZXh0LnJlcGxhY2UoL1smPD5dL2dpbSwgKHM6IHN0cmluZyk6IHN0cmluZyA9PiBgJiMke3MuY29kZVBvaW50QXQoMCl9O2ApKVxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmRUbygkZGlmZlRhYmxlKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uc3QgZGlmZjogc3RyaW5nID0gcGFnZS5yZXZpc2lvbnNbMF0uZGlmZi5ib2R5O1xuXHRcdFx0XHRcdFx0aWYgKGRpZmYgPT09ICcnKSB7XG5cdFx0XHRcdFx0XHRcdCQoXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7d2luZG93LndnVUxTKCfml6Dmm7TmlLknLCAn54Sh6K6K5pu0Jyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQpLmFwcGVuZFRvKCR0b29sKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0ICRzdWJtaXQ6IEpRdWVyeSA9ICQoXG5cdFx0XHRcdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJUcmFuc2xhdGVWYXJpYW50cy1wdWJsaXNoLWNoYW5nZXNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7d2luZG93LndnVUxTKCflj5HluIPmm7TmlLknLCAn55m85L2I6K6K5pu0Jyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQpIGFzIEhUTUxFbGVtZW50XG5cdFx0XHRcdFx0XHRcdCkuYXBwZW5kVG8oJHRvb2wpO1xuXHRcdFx0XHRcdFx0XHQkc3VibWl0Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGFwaS5lZGl0KFxuXHRcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0VGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHQoKTogQXBpRWRpdFBhZ2VQYXJhbXMgPT4gKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dDogbmV3dGV4dCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VtbWFyeTogVFJBTlNMQVRFX1ZBUklBTlRTX1NVTU1BUlkucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvXFwkMS9nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRub2NyZWF0ZTogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdCkudGhlbihcblx0XHRcdFx0XHRcdFx0XHRcdCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkod2luZG93LndnVUxTKCflt7LnvJbovpEnLCAn5bey57eo6LyvICcpICsgdGFyZ2V0VGl0bGUsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+e8lui+kScsICfnt6jovK8gJykgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0VGl0bGUgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCcg5Y+R55Sf6ZSZ6K+v77yaJywgJyDnmbznlJ/pjK/oqqTvvJonKSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHQkKCc8dGFibGU+Jylcblx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2RpZmYnKVxuXHRcdFx0XHRcdFx0XHRcdC5odG1sKGRpZmYpXG5cdFx0XHRcdFx0XHRcdFx0LnByZXBlbmQoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Y29sZ3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxjb2wgY2xhc3NOYW1lPVwiZGlmZi1tYXJrZXJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Y29sIGNsYXNzTmFtZT1cImRpZmYtY29udGVudFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxjb2wgY2xhc3NOYW1lPVwiZGlmZi1tYXJrZXJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Y29sIGNsYXNzTmFtZT1cImRpZmYtY29udGVudFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2NvbGdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kVG8oJGRpZmZUYWJsZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQoZXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+WJywgJ+WPluW+lycpICtcblx0XHRcdFx0XHRcdFx0bGFuZyArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5beu5byC5pe25Y+R55Sf6ZSZ6K+v77yaJywgJ+W3rueVsOaZgueZvOeUn+mMr+iqpO+8micpICtcblx0XHRcdFx0XHRcdFx0ZXJyb3IsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcdC5hbHdheXMoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRwcm9jZXNzKCk7XG5cdFx0XHR9KTtcblx0fTtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHRpdGxlczogW213LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKV0sXG5cdFx0Y3VydGltZXN0YW1wOiB0cnVlLFxuXHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCddLFxuXHR9O1xuXHR2b2lkIGFwaVxuXHRcdC5nZXQocGFyYW1zKVxuXHRcdC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRpZiAoIWRhdGFbJ3F1ZXJ5J10gfHwgIWRhdGFbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ3Vua25vd24nKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IFtwYWdlXSA9IGRhdGFbJ3F1ZXJ5J10ucGFnZXM7XG5cdFx0XHRpZiAoIXBhZ2UgfHwgcGFnZS5pbnZhbGlkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdpbnZhbGlkdGl0bGUnKTtcblx0XHRcdH1cblx0XHRcdGlmIChwYWdlLm1pc3NpbmcpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ25vY3JlYXRlLW1pc3NpbmcnKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IFtyZXZpc2lvbl0gPSBwYWdlLnJldmlzaW9ucztcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNvbnRlbnQ6IHJldmlzaW9uLmNvbnRlbnQsXG5cdFx0XHR9O1xuXHRcdH0pXG5cdFx0LnRoZW4oKHtjb250ZW50fSk6IHZvaWQgPT4ge1xuXHRcdFx0bGV0IHRleHQ6IHN0cmluZyA9IGNvbnRlbnQ7XG5cdFx0XHRyZXN1bHRbJ3poJ10gPSB0ZXh0O1xuXHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvW1xccyMmJyo6PD5bXFxdX3t8fV0vZ2ltLCAoc3RyaW5nOiBzdHJpbmcpID0+IGAmIyR7c3RyaW5nLmNvZGVQb2ludEF0KDApfTtgKTtcblx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoXG5cdFx0XHRcdC8oJiM5MTsmIzkxOykoKD86KD8hJiMxMjQ7KSg/ISYjOTM7KS4pKz8pKCYjMTI0Oyg/Oig/ISYjOTM7KS4pKz8mIzkzOyYjOTM7KS9nLFxuXHRcdFx0XHQnJDEteyQyfS0kMydcblx0XHRcdCk7XG5cdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8tJiMxMjM7KC4rPykmIzEyNTstL2csIChzdHJpbmc6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRzdHJpbmcgPSBzdHJpbmdcblx0XHRcdFx0XHQucmVwbGFjZSgnLSYjMTIzOycsICcteycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoJy0mIzEyMzsnLCAnLXsnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCcmIzEyNTstJywgJ30tJylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiMxMjQ7L2csICd8Jylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiMzMjsvZywgJyAnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8mIzYxOy9nLCAnPScpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjNjI7L2csICc+Jylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiM1ODsvZywgJzonKTtcblx0XHRcdFx0cmV0dXJuIHN0cmluZztcblx0XHRcdH0pO1xuXHRcdFx0YmFzZXBhZ2V0ZXh0ID0gdGV4dDtcblx0XHRcdHByb2Nlc3MoKTtcblx0XHR9KTtcbn07XG4iLCAiY29uc3QgVFJBTlNMQVRFX1ZBUklBTlRTX1NVTU1BUlk6IHN0cmluZyA9XG5cdCfoh6rliqjovazmjaLlj5jkvZPoh6pbWyQxXV3vvIhbW01lZGlhV2lraTpHYWRnZXQtVHJhbnNsYXRlVmFyaWFudHMuanN8VHJhbnNsYXRlVmFyaWFudHNdXe+8iSc7XG5cbmV4cG9ydCB7VFJBTlNMQVRFX1ZBUklBTlRTX1NVTU1BUll9O1xuIiwgImltcG9ydCB7dHJhbnNsYXRlVmFyaWFudHN9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuaWYgKC9eTWVkaWFXaWtpOlteL10rKFxcL3poKT8kLy50ZXN0KG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSkpIHtcblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBsaW5rOiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIHdpbmRvdy53Z1VMUygn6L2s5o2i5Y+Y5L2TJywgJ+i9ieaPm+iuiumrlCcpKTtcblx0aWYgKGxpbmspIHtcblx0XHQkKGxpbmspLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMucmVtb3ZlKCk7XG5cdFx0XHR0cmFuc2xhdGVWYXJpYW50cygpO1xuXHRcdH0pO1xuXHR9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0FsQixJQUFNQyw2QkFDTDs7QURDRCxJQUFBQyxxQkFBd0JGLFFBQUEsaUJBQUE7QUFFakIsSUFBTUcsb0JBQW9CQSxNQUFZO0FBQzVDLFFBQU1DLFFBQXFCLG9CQUFJQyxJQUFJLENBQ2xDLE1BQ0EsV0FDQSxTQUNBLFNBQ0EsU0FDQSxXQUNBLFNBQ0EsU0FDQSxPQUFBLENBQ0E7QUFDRCxRQUFNQyxXQUFtQztJQUN4Q0MsSUFBSTtJQUNKLFdBQVc7SUFDWCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxXQUFXO0lBQ1gsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0VBQ1Y7QUFDQSxRQUFNQyxTQUFpQyxDQUFDO0FBQ3hDLFFBQU1DLE9BQUEsR0FBY1AsbUJBQUFRLFdBQVUsdUJBQXVCO0FBQ3JELE1BQUlDLGVBQXVCO0FBQzNCLFFBQU1DLFNBQWtCQyxFQUFFZixrQ0FBQWdCLFFBQUFDLGNBQUMsT0FBQTtJQUFJQyxJQUFHO0VBQUEsQ0FBb0IsQ0FBRSxFQUFhQyxVQUFVLGNB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QVEsV0FBVyxJQUFJLEVBQ3ZCQSxRQUFRLFdBQVcsSUFBSSxFQUN2QkEsUUFBUSxXQUFXLEdBQUcsRUFDdEJBLFFBQVEsVUFBVSxHQUFHLEVBQ3JCQSxRQUFRLFVBQVUsR0FBRyxFQUNyQkEsUUFBUSxVQUFVLEdBQUcsRUFDckJBLFFBQVEsVUFBVSxHQUFHO0FBQ3ZCLGFBQU9nRDtJQUNSLENBQUM7QUFDRDlGLG1CQUFldUQ7QUFDZmYsWUFBUTtFQUNULENBQUM7QUFDSDs7QUUvVEEsSUFBSSwyQkFBMkJ1RCxLQUFLaEYsR0FBRzZCLE9BQU9DLElBQUksWUFBWSxDQUFDLEdBQUc7QUFDakUsUUFBTW1ELFlBQW1DQyxTQUFTQyxjQUFjLGFBQWEsSUFBSSxlQUFlO0FBQ2hHLFFBQU1DLE9BQTZCcEYsR0FBR2lELEtBQUtvQyxlQUFlSixXQUFXLEtBQUt4RixPQUFPQyxNQUFNLFFBQVEsTUFBTSxDQUFDO0FBQ3RHLE1BQUkwRixNQUFNO0FBQ1RqRyxNQUFFaUcsSUFBSSxFQUFFekYsR0FBRyxTQUFTLFdBQVk7QUFDL0IsV0FBSzhELE9BQU87QUFDWmhGLHdCQUFrQjtJQUNuQixDQUFDO0VBQ0Y7QUFDRDsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgIlRSQU5TTEFURV9WQVJJQU5UU19TVU1NQVJZIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJ0cmFuc2xhdGVWYXJpYW50cyIsICJsYW5ncyIsICJTZXQiLCAibGFuZ25hbWUiLCAiemgiLCAicmVzdWx0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiYmFzZXBhZ2V0ZXh0IiwgIiR0YWJsZSIsICIkIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJwcmVwZW5kVG8iLCAiJHN1Ym1pdEFsbCIsICJ3aW5kb3ciLCAid2dVTFMiLCAib24iLCAiJGJvZHkiLCAiJGJ1dHRvbnMiLCAiZmluZCIsICJsZW5ndGgiLCAibXciLCAibm90aWZ5IiwgInRhZyIsICJ0eXBlIiwgImNvbmZpcm0iLCAiY29uY2F0IiwgImVhY2giLCAiX2luZGV4IiwgImVsZW1lbnQiLCAidHJpZ2dlciIsICJhcHBlbmQiLCAic3R5bGUiLCAidGV4dEFsaWduIiwgImNvbG9yIiwgImFwcGVuZFRvIiwgImRlZmF1bHRsYW5ncyIsICJydW5sYW5ncyIsICJwcm9tcHQiLCAibGFuZ3F1ZXVlIiwgInNwbGl0IiwgIm1hcCIsICJsYW5nIiwgInRyaW0iLCAiZmlsdGVyIiwgImhhcyIsICJwcm9jZXNzIiwgInNoaWZ0IiwgIiRkaWZmVGFibGUiLCAiYmFzZW5hbWUiLCAiY29uZmlnIiwgImdldCIsICJyZXBsYWNlIiwgInRhcmdldFRpdGxlIiwgIm5ld3RleHQiLCAicGFyc2UiLCAidXNlbGFuZyIsICJwcm9wIiwgInRoZW4iLCAiZGF0YSIsICJodG1sIiwgInRleHQiLCAiX3BhcmFtcyIsICJhY3Rpb24iLCAidGl0bGVzIiwgInJ2ZGlmZnRvdGV4dCIsICJmb3JtYXR2ZXJzaW9uIiwgInBvc3QiLCAiZXJyb3IiLCAiJHRvb2wiLCAidXRpbCIsICJnZXRVcmwiLCAicGFnZSIsICJwYWdlcyIsICJtaXNzaW5nIiwgIiRzdWJtaXQiLCAiY2xhc3NOYW1lIiwgImZsb2F0IiwgInJlbW92ZSIsICJjcmVhdGUiLCAic3VtbWFyeSIsICJzIiwgImNvZGVQb2ludEF0IiwgImRpZmYiLCAicmV2aXNpb25zIiwgImJvZHkiLCAiZWRpdCIsICJub2NyZWF0ZSIsICJhZGRDbGFzcyIsICJwcmVwZW5kIiwgImFsd2F5cyIsICJwYXJhbXMiLCAiZm9ybWF0IiwgImN1cnRpbWVzdGFtcCIsICJydnByb3AiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgImludmFsaWQiLCAicmV2aXNpb24iLCAiY29udGVudCIsICJzdHJpbmciLCAidGVzdCIsICJwb3J0bGV0SWQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJsaW5rIiwgImFkZFBvcnRsZXRMaW5rIl0KfQo=
