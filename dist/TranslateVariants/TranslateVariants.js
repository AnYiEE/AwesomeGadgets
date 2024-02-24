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
  const $submitAll = $(/* @__PURE__ */ import_ext_gadget.default.createElement("button", {
    className: ["mw-ui-button", "mw-ui-progressive", "cdx-button", "cdx-button--action-progressive"]
  }, window.wgULS("发布所有更改", "發佈所有變更")));
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
            className: ["TranslateVariants-publish-changes", "mw-ui-button", "cdx-button"],
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
            className: ["TranslateVariants-publish-changes", "mw-ui-button", "cdx-button"],
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvY29yZS50c3giLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge1RSQU5TTEFURV9WQVJJQU5UU19TVU1NQVJZfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5leHBvcnQgY29uc3QgdHJhbnNsYXRlVmFyaWFudHMgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IGxhbmdzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoW1xuXHRcdCd6aCcsXG5cdFx0J3poLWhhbnMnLFxuXHRcdCd6aC1jbicsXG5cdFx0J3poLW15Jyxcblx0XHQnemgtc2cnLFxuXHRcdCd6aC1oYW50Jyxcblx0XHQnemgtaGsnLFxuXHRcdCd6aC1tbycsXG5cdFx0J3poLXR3Jyxcblx0XSk7XG5cdGNvbnN0IGxhbmduYW1lOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuXHRcdHpoOiAn5Y6f5aeLJyxcblx0XHQnemgtaGFucyc6ICfnroDkvZMnLFxuXHRcdCd6aC1jbic6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHRcdCd6aC1teSc6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHRcdCd6aC1zZyc6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdCd6aC1oYW50JzogJ+e5gemrlCcsXG5cdFx0J3poLWhrJzogJ+S4reWci+mmmea4r+e5gemrlCcsXG5cdFx0J3poLW1vJzogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdFx0J3poLXR3JzogJ+S4reWci+iHuueBo+e5gemrlCcsXG5cdH07XG5cdGNvbnN0IHJlc3VsdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVHJhbnNsYXRlVmFyaWFudHMvMS4xJyk7XG5cdGxldCBiYXNlcGFnZXRleHQ6IHN0cmluZyA9ICcnO1xuXHRjb25zdCAkdGFibGU6IEpRdWVyeSA9ICgkKDxkaXYgaWQ9XCJUcmFuc2xhdGVWYXJpYW50c1wiIC8+KSBhcyBKUXVlcnkpLnByZXBlbmRUbygnI2JvZHlDb250ZW50Jyk7XG5cdGNvbnN0ICRzdWJtaXRBbGw6IEpRdWVyeSA9ICQoXG5cdFx0PGJ1dHRvbiBjbGFzc05hbWU9e1snbXctdWktYnV0dG9uJywgJ213LXVpLXByb2dyZXNzaXZlJywgJ2NkeC1idXR0b24nLCAnY2R4LWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlJ119PlxuXHRcdFx0e3dpbmRvdy53Z1VMUygn5Y+R5biD5omA5pyJ5pu05pS5JywgJ+eZvOS9iOaJgOacieiuiuabtCcpfVxuXHRcdDwvYnV0dG9uPlxuXHQpIGFzIEpRdWVyeTtcblx0JHN1Ym1pdEFsbC5vbignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHRcdGNvbnN0ICRidXR0b25zOiBKUXVlcnkgPSAkYm9keS5maW5kKCcuVHJhbnNsYXRlVmFyaWFudHMtcHVibGlzaC1jaGFuZ2VzJyk7XG5cdFx0aWYgKCRidXR0b25zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkod2luZG93LndnVUxTKCfmsqHmnInku7vkvZXlj6/ku6Xlj5HluIPnmoTmm7TmlLknLCAn5rKS5pyJ5Lu75L2V6K6K5pu05Y+v55m85L2IJyksIHtcblx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudHMnLFxuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghY29uZmlybShgJHt3aW5kb3cud2dVTFMoJ+abtOaUuScsICfnmbzkvYgnKX0keyRidXR0b25zLmxlbmd0aH0ke3dpbmRvdy53Z1VMUygn5Liq5pu05pS5JywgJ+WAi+iuiuabtCcpfe+8n2ApKSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeSh3aW5kb3cud2dVTFMoJ+W3suWPlua2iOabtOaUuScsICflt7Llj5bmtojnmbzkvYgnKSwge3RhZzogJ1RyYW5zbGF0ZVZhcmlhbnRzJywgdHlwZTogJ3dhcm4nfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdCRidXR0b25zLmVhY2goKF9pbmRleCwgZWxlbWVudCkgPT4ge1xuXHRcdFx0JChlbGVtZW50KS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdH0pO1xuXHR9KTtcblx0JHRhYmxlLmFwcGVuZChcblx0XHQkKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdHRleHRBbGlnbjogJ3JpZ2h0Jyxcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0KS5hcHBlbmQoJHN1Ym1pdEFsbClcblx0KTtcblx0JChcblx0XHQ8ZGl2XG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRjb2xvcjogJyNmMDAnLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7d2luZG93LndnVUxTKFxuXHRcdFx0XHQn5o+Q6YaS77yaVHJhbnNsYXRlVmFyaWFudHPlt6Xlhbfkvb/nlKhJVOWPik1lZGlhV2lraei9rOaNoue7hOi/m+ihjOiHquWKqOi9rOaNou+8jOivt+ehruiupOi9rOaNoue7k+aenOaYr+WQpuato+ehru+8gScsXG5cdFx0XHRcdCfmj5DphpLvvJpUcmFuc2xhdGVWYXJpYW50c+W3peWFt+S9v+eUqElU5Y+KTWVkaWFXaWtp6L2J5o+b57WE6YCy6KGM6Ieq5YuV6L2J5o+b77yM6KuL56K66KqN6L2J5o+b57WQ5p6c5piv5ZCm5q2j56K677yBJ1xuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KS5hcHBlbmRUbygkdGFibGUpO1xuXHRjb25zdCBkZWZhdWx0bGFuZ3M6IHN0cmluZyA9ICd6aCx6aC1oYW5zLHpoLWNuLHpoLW15LHpoLXNnLHpoLWhhbnQsemgtaGssemgtbW8semgtdHcnO1xuXHRsZXQgcnVubGFuZ3M6IHN0cmluZyB8IG51bGwgPSBwcm9tcHQoXG5cdFx0d2luZG93LndnVUxTKCfovazmjaLku6XkuIvor63oqIDvvIjku6XpgJflj7fpmpTlvIDvvInvvJonLCAn6L2J5o+b5Lul5LiL6Kqe6KiA77yI5Lul6YCX6Jmf6ZqU6ZaL77yJ77yaJyksXG5cdFx0ZGVmYXVsdGxhbmdzXG5cdCk7XG5cdGlmIChydW5sYW5ncyA9PT0gbnVsbCkge1xuXHRcdHJ1bmxhbmdzID0gZGVmYXVsdGxhbmdzO1xuXHR9XG5cdGNvbnN0IGxhbmdxdWV1ZTogc3RyaW5nW10gPSBydW5sYW5nc1xuXHRcdC5zcGxpdCgnLCcpXG5cdFx0Lm1hcCgobGFuZzogc3RyaW5nKTogc3RyaW5nID0+IGxhbmcudHJpbSgpKVxuXHRcdC5maWx0ZXIoKGxhbmc6IHN0cmluZyk6IGJvb2xlYW4gPT4gbGFuZ3MuaGFzKGxhbmcpKTtcblx0Y29uc3QgcHJvY2VzcyA9ICgpOiB2b2lkID0+IHtcblx0XHRpZiAobGFuZ3F1ZXVlLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBsYW5nOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBsYW5ncXVldWUuc2hpZnQoKTtcblx0XHRjb25zdCAkZGlmZlRhYmxlOiBKUXVlcnkgPSAoJCg8ZGl2IGlkPXtgVHJhbnNsYXRlVmFyaWFudHMtZGlmZi0ke2xhbmd9YH0gLz4pIGFzIEpRdWVyeSkuYXBwZW5kVG8oJHRhYmxlKTtcblx0XHQkKDxociAvPikuYXBwZW5kVG8oJHRhYmxlKTtcblx0XHRjb25zdCBiYXNlbmFtZTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLnJlcGxhY2UoL1xcL3poJC8sICcnKTtcblx0XHRjb25zdCB0YXJnZXRUaXRsZTogc3RyaW5nID0gbGFuZyA9PT0gJ3poJyA/IGJhc2VuYW1lIDogYCR7YmFzZW5hbWV9LyR7bGFuZ31gO1xuXHRcdGxldCBuZXd0ZXh0OiBzdHJpbmc7XG5cdFx0aWYgKCFsYW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZvaWQgYXBpXG5cdFx0XHQucGFyc2UoYHt7Tm90ZVRBfEcxPUlUfEcyPU1lZGlhV2lraX19PGRpdiBpZD1cIlRWY29udGVudFwiPiR7YmFzZXBhZ2V0ZXh0fTwvZGl2PmAsIHtcblx0XHRcdFx0dXNlbGFuZzogbGFuZyxcblx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKFxuXHRcdFx0XHQoZGF0YSkgPT4ge1xuXHRcdFx0XHRcdG5ld3RleHQgPSAkKCc8ZGl2PicpLmh0bWwoZGF0YSkuZmluZCgnI1RWY29udGVudCcpLnRleHQoKTtcblx0XHRcdFx0XHRjb25zdCBfcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRcdFx0dGl0bGVzOiBbdGFyZ2V0VGl0bGVdLFxuXHRcdFx0XHRcdFx0cnZkaWZmdG90ZXh0OiBuZXd0ZXh0LFxuXHRcdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmV0dXJuIGFwaS5wb3N0KF9wYXJhbXMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQoZXJyb3IpID0+IHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShg6Kej5p6QJHtsYW5nfSR7d2luZG93LndnVUxTKCfml7blj5HnlJ/plJnor6/vvJonLCAn5pmC55m855Sf6Yyv6Kqk77yaJyl9JHtlcnJvcn1gLCB7XG5cdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudCcsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcdC50aGVuKFxuXHRcdFx0XHQoZGF0YSkgPT4ge1xuXHRcdFx0XHRcdGlmIChkYXRhICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjb25zdCAkdG9vbDogSlF1ZXJ5ID0gJChcblx0XHRcdFx0XHRcdFx0YDxkaXY+PGEgaHJlZj1cIiR7bXcudXRpbC5nZXRVcmwodGFyZ2V0VGl0bGUpfVwiPiR7bGFuZ33vvIgke1xuXHRcdFx0XHRcdFx0XHRcdGxhbmduYW1lW2xhbmcgYXMgbmV2ZXJdXG5cdFx0XHRcdFx0XHRcdH3vvIk8L2E+77yIPGEgaHJlZj1cIiR7bXcudXRpbC5nZXRVcmwodGFyZ2V0VGl0bGUsIHtcblx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHRcdFx0fSl9XCI+JHt3aW5kb3cud2dVTFMoJ+e8licsICfnt6gnKX08L2E+77yJPC9kaXY+YFxuXHRcdFx0XHRcdFx0KS5hcHBlbmRUbygkZGlmZlRhYmxlKTtcblx0XHRcdFx0XHRcdGNvbnN0IFtwYWdlXSA9IGRhdGFbJ3F1ZXJ5J10ucGFnZXM7XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5taXNzaW5nKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0ICRzdWJtaXQ6IEpRdWVyeSA9ICQoXG5cdFx0XHRcdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1snVHJhbnNsYXRlVmFyaWFudHMtcHVibGlzaC1jaGFuZ2VzJywgJ213LXVpLWJ1dHRvbicsICdjZHgtYnV0dG9uJ119XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt3aW5kb3cud2dVTFMoJ+WPkeW4g+mhtemdoicsICfnmbzkvYjpoIHpnaInKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdCkgYXMgSFRNTEVsZW1lbnRcblx0XHRcdFx0XHRcdFx0KS5hcHBlbmRUbygkdG9vbCk7XG5cdFx0XHRcdFx0XHRcdCRzdWJtaXQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRcdFx0YXBpLmNyZWF0ZShcblx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldFRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdW1tYXJ5OiBUUkFOU0xBVEVfVkFSSUFOVFNfU1VNTUFSWS5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC9cXCQxL2csXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0bmV3dGV4dFxuXHRcdFx0XHRcdFx0XHRcdCkudGhlbihcblx0XHRcdFx0XHRcdFx0XHRcdCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkod2luZG93LndnVUxTKCflt7LnvJbovpEgJywgJ+W3sue3qOi8ryAnKSArIHRhcmdldFRpdGxlLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHQoZXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfnvJbovpEnLCAn57eo6LyvICcpICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldFRpdGxlICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygnIOWPkeeUn+mUmeivr++8micsICcg55m855Sf6Yyv6Kqk77yaJykgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3IsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0JCgnPHByZT4nKVxuXHRcdFx0XHRcdFx0XHRcdC5odG1sKG5ld3RleHQucmVwbGFjZSgvWyY8Pl0vZ2ltLCAoczogc3RyaW5nKTogc3RyaW5nID0+IGAmIyR7cy5jb2RlUG9pbnRBdCgwKX07YCkpXG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZFRvKCRkaWZmVGFibGUpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zdCBkaWZmOiBzdHJpbmcgPSBwYWdlLnJldmlzaW9uc1swXS5kaWZmLmJvZHk7XG5cdFx0XHRcdFx0XHRpZiAoZGlmZiA9PT0gJycpIHtcblx0XHRcdFx0XHRcdFx0JChcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHt3aW5kb3cud2dVTFMoJ+aXoOabtOaUuScsICfnhKHorormm7QnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCkuYXBwZW5kVG8oJHRvb2wpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgJHN1Ym1pdDogSlF1ZXJ5ID0gJChcblx0XHRcdFx0XHRcdFx0XHQoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17WydUcmFuc2xhdGVWYXJpYW50cy1wdWJsaXNoLWNoYW5nZXMnLCAnbXctdWktYnV0dG9uJywgJ2NkeC1idXR0b24nXX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3dpbmRvdy53Z1VMUygn5Y+R5biD5pu05pS5JywgJ+eZvOS9iOiuiuabtCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0KSBhcyBIVE1MRWxlbWVudFxuXHRcdFx0XHRcdFx0XHQpLmFwcGVuZFRvKCR0b29sKTtcblx0XHRcdFx0XHRcdFx0JHN1Ym1pdC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdFx0XHRhcGkuZWRpdChcblx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldFRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0KCk6IEFwaUVkaXRQYWdlUGFyYW1zID0+ICh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IG5ld3RleHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN1bW1hcnk6IFRSQU5TTEFURV9WQVJJQU5UU19TVU1NQVJZLnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0L1xcJDEvZyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9jcmVhdGU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHQpLnRoZW4oXG5cdFx0XHRcdFx0XHRcdFx0XHQoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KHdpbmRvdy53Z1VMUygn5bey57yW6L6RJywgJ+W3sue3qOi8ryAnKSArIHRhcmdldFRpdGxlLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHQoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfnvJbovpEnLCAn57eo6LyvICcpICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldFRpdGxlICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygnIOWPkeeUn+mUmeivr++8micsICcg55m855Sf6Yyv6Kqk77yaJykgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3IsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0JCgnPHRhYmxlPicpXG5cdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdkaWZmJylcblx0XHRcdFx0XHRcdFx0XHQuaHRtbChkaWZmKVxuXHRcdFx0XHRcdFx0XHRcdC5wcmVwZW5kKFxuXHRcdFx0XHRcdFx0XHRcdFx0PGNvbGdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Y29sIGNsYXNzTmFtZT1cImRpZmYtbWFya2VyXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGNvbCBjbGFzc05hbWU9XCJkaWZmLWNvbnRlbnRcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Y29sIGNsYXNzTmFtZT1cImRpZmYtbWFya2VyXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGNvbCBjbGFzc05hbWU9XCJkaWZmLWNvbnRlbnRcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9jb2xncm91cD5cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZFRvKCRkaWZmVGFibGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0KGVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPlicsICflj5blvpcnKSArXG5cdFx0XHRcdFx0XHRcdGxhbmcgK1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+W3ruW8guaXtuWPkeeUn+mUmeivr++8micsICflt67nlbDmmYLnmbznlJ/pjK/oqqTvvJonKSArXG5cdFx0XHRcdFx0XHRcdGVycm9yLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50Jyxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0XHQuYWx3YXlzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0cHJvY2VzcygpO1xuXHRcdFx0fSk7XG5cdH07XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHR0aXRsZXM6IFttdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyldLFxuXHRcdGN1cnRpbWVzdGFtcDogdHJ1ZSxcblx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnXSxcblx0fTtcblx0dm9pZCBhcGlcblx0XHQuZ2V0KHBhcmFtcylcblx0XHQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0aWYgKCFkYXRhWydxdWVyeSddIHx8ICFkYXRhWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCd1bmtub3duJyk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBbcGFnZV0gPSBkYXRhWydxdWVyeSddLnBhZ2VzO1xuXHRcdFx0aWYgKCFwYWdlIHx8IHBhZ2UuaW52YWxpZCkge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnaW52YWxpZHRpdGxlJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFnZS5taXNzaW5nKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdub2NyZWF0ZS1taXNzaW5nJyk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBbcmV2aXNpb25dID0gcGFnZS5yZXZpc2lvbnM7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjb250ZW50OiByZXZpc2lvbi5jb250ZW50LFxuXHRcdFx0fTtcblx0XHR9KVxuXHRcdC50aGVuKCh7Y29udGVudH0pOiB2b2lkID0+IHtcblx0XHRcdGxldCB0ZXh0OiBzdHJpbmcgPSBjb250ZW50O1xuXHRcdFx0cmVzdWx0Wyd6aCddID0gdGV4dDtcblx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1tcXHMjJicqOjw+W1xcXV97fH1dL2dpbSwgKHN0cmluZzogc3RyaW5nKSA9PiBgJiMke3N0cmluZy5jb2RlUG9pbnRBdCgwKX07YCk7XG5cdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKFxuXHRcdFx0XHQvKCYjOTE7JiM5MTspKCg/Oig/ISYjMTI0OykoPyEmIzkzOykuKSs/KSgmIzEyNDsoPzooPyEmIzkzOykuKSs/JiM5MzsmIzkzOykvZyxcblx0XHRcdFx0JyQxLXskMn0tJDMnXG5cdFx0XHQpO1xuXHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvLSYjMTIzOyguKz8pJiMxMjU7LS9nLCAoc3RyaW5nOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0c3RyaW5nID0gc3RyaW5nXG5cdFx0XHRcdFx0LnJlcGxhY2UoJy0mIzEyMzsnLCAnLXsnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCctJiMxMjM7JywgJy17Jylcblx0XHRcdFx0XHQucmVwbGFjZSgnJiMxMjU7LScsICd9LScpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjMTI0Oy9nLCAnfCcpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjMzI7L2csICcgJylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiM2MTsvZywgJz0nKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8mIzYyOy9nLCAnPicpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjNTg7L2csICc6Jyk7XG5cdFx0XHRcdHJldHVybiBzdHJpbmc7XG5cdFx0XHR9KTtcblx0XHRcdGJhc2VwYWdldGV4dCA9IHRleHQ7XG5cdFx0XHRwcm9jZXNzKCk7XG5cdFx0fSk7XG59O1xuIiwgImNvbnN0IFRSQU5TTEFURV9WQVJJQU5UU19TVU1NQVJZOiBzdHJpbmcgPVxuXHQn6Ieq5Yqo6L2s5o2i5Y+Y5L2T6IeqW1skMV1d77yIW1tNZWRpYVdpa2k6R2FkZ2V0LVRyYW5zbGF0ZVZhcmlhbnRzLmpzfFRyYW5zbGF0ZVZhcmlhbnRzXV3vvIknO1xuXG5leHBvcnQge1RSQU5TTEFURV9WQVJJQU5UU19TVU1NQVJZfTtcbiIsICJpbXBvcnQge3RyYW5zbGF0ZVZhcmlhbnRzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmlmICgvXk1lZGlhV2lraTpbXi9dKyhcXC96aCk/JC8udGVzdChtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykpKSB7XG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgbGluazogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCB3aW5kb3cud2dVTFMoJ+i9rOaNouWPmOS9kycsICfovYnmj5vororpq5QnKSk7XG5cdGlmIChsaW5rKSB7XG5cdFx0JChsaW5rKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLnJlbW92ZSgpO1xuXHRcdFx0dHJhbnNsYXRlVmFyaWFudHMoKTtcblx0XHR9KTtcblx0fVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQWtCQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNBbEIsSUFBTUMsNkJBQ0w7O0FEQ0QsSUFBQUMscUJBQXdCRixRQUFBLGlCQUFBO0FBRWpCLElBQU1HLG9CQUFvQkEsTUFBWTtBQUM1QyxRQUFNQyxRQUFxQixvQkFBSUMsSUFBSSxDQUNsQyxNQUNBLFdBQ0EsU0FDQSxTQUNBLFNBQ0EsV0FDQSxTQUNBLFNBQ0EsT0FBQSxDQUNBO0FBQ0QsUUFBTUMsV0FBbUM7SUFDeENDLElBQUk7SUFDSixXQUFXO0lBQ1gsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsV0FBVztJQUNYLFNBQVM7SUFDVCxTQUFTO0lB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QUM7SUFBQ3dDO0VBQU8sTUFBWTtBQUMxQixRQUFJckMsT0FBZXFDO0FBQ25CaEcsV0FBTyxJQUFJLElBQUkyRDtBQUNmQSxXQUFPQSxLQUFLVCxRQUFRLHlCQUEwQitDLFlBQUEsS0FBQXpFLE9BQXdCeUUsT0FBT2xCLFlBQVksQ0FBQyxHQUFDLEdBQUEsQ0FBRztBQUM5RnBCLFdBQU9BLEtBQUtULFFBQ1gsK0VBQ0EsWUFDRDtBQUNBUyxXQUFPQSxLQUFLVCxRQUFRLHdCQUF5QitDLFlBQW1CO0FBQy9EQSxlQUFTQSxPQUNQL0MsUUFBUSxXQUFXLElBQUksRUFDdkJBLFFBQVEsV0FBVyxJQUFJLEVBQ3ZCQSxRQUFRLFdBQVcsSUFBSSxFQUN2QkEsUUFBUSxXQUFXLEdBQUcsRUFDdEJBLFFBQVEsVUFBVSxHQUFHLEVBQ3JCQSxRQUFRLFVBQVUsR0FBRyxFQUNyQkEsUUFBUSxVQUFVLEdBQUcsRUFDckJBLFFBQVEsVUFBVSxHQUFHO0FBQ3ZCLGFBQU8rQztJQUNSLENBQUM7QUFDRDlGLG1CQUFld0Q7QUFDZmYsWUFBUTtFQUNULENBQUM7QUFDSDs7QUVuVUEsSUFBSSwyQkFBMkJzRCxLQUFLL0UsR0FBRzZCLE9BQU9DLElBQUksWUFBWSxDQUFDLEdBQUc7QUFDakUsUUFBTWtELFlBQW1DQyxTQUFTQyxjQUFjLGFBQWEsSUFBSSxlQUFlO0FBQ2hHLFFBQU1DLE9BQTZCbkYsR0FBR2lELEtBQUttQyxlQUFlSixXQUFXLEtBQUt2RixPQUFPQyxNQUFNLFFBQVEsTUFBTSxDQUFDO0FBQ3RHLE1BQUl5RixNQUFNO0FBQ1RqRyxNQUFFaUcsSUFBSSxFQUFFeEYsR0FBRyxTQUFTLFdBQVk7QUFDL0IsV0FBSzZELE9BQU87QUFDWmhGLHdCQUFrQjtJQUNuQixDQUFDO0VBQ0Y7QUFDRDsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgIlRSQU5TTEFURV9WQVJJQU5UU19TVU1NQVJZIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJ0cmFuc2xhdGVWYXJpYW50cyIsICJsYW5ncyIsICJTZXQiLCAibGFuZ25hbWUiLCAiemgiLCAicmVzdWx0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiYmFzZXBhZ2V0ZXh0IiwgIiR0YWJsZSIsICIkIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJwcmVwZW5kVG8iLCAiJHN1Ym1pdEFsbCIsICJjbGFzc05hbWUiLCAid2luZG93IiwgIndnVUxTIiwgIm9uIiwgIiRib2R5IiwgIiRidXR0b25zIiwgImZpbmQiLCAibGVuZ3RoIiwgIm13IiwgIm5vdGlmeSIsICJ0YWciLCAidHlwZSIsICJjb25maXJtIiwgImNvbmNhdCIsICJlYWNoIiwgIl9pbmRleCIsICJlbGVtZW50IiwgInRyaWdnZXIiLCAiYXBwZW5kIiwgInN0eWxlIiwgInRleHRBbGlnbiIsICJjb2xvciIsICJhcHBlbmRUbyIsICJkZWZhdWx0bGFuZ3MiLCAicnVubGFuZ3MiLCAicHJvbXB0IiwgImxhbmdxdWV1ZSIsICJzcGxpdCIsICJtYXAiLCAibGFuZyIsICJ0cmltIiwgImZpbHRlciIsICJoYXMiLCAicHJvY2VzcyIsICJzaGlmdCIsICIkZGlmZlRhYmxlIiwgImJhc2VuYW1lIiwgImNvbmZpZyIsICJnZXQiLCAicmVwbGFjZSIsICJ0YXJnZXRUaXRsZSIsICJuZXd0ZXh0IiwgInBhcnNlIiwgInVzZWxhbmciLCAicHJvcCIsICJ0aGVuIiwgImRhdGEiLCAiaHRtbCIsICJ0ZXh0IiwgIl9wYXJhbXMiLCAiYWN0aW9uIiwgInRpdGxlcyIsICJydmRpZmZ0b3RleHQiLCAiZm9ybWF0dmVyc2lvbiIsICJwb3N0IiwgImVycm9yIiwgIiR0b29sIiwgInV0aWwiLCAiZ2V0VXJsIiwgInBhZ2UiLCAicGFnZXMiLCAibWlzc2luZyIsICIkc3VibWl0IiwgImZsb2F0IiwgInJlbW92ZSIsICJjcmVhdGUiLCAic3VtbWFyeSIsICJzIiwgImNvZGVQb2ludEF0IiwgImRpZmYiLCAicmV2aXNpb25zIiwgImJvZHkiLCAiZWRpdCIsICJub2NyZWF0ZSIsICJhZGRDbGFzcyIsICJwcmVwZW5kIiwgImFsd2F5cyIsICJwYXJhbXMiLCAiZm9ybWF0IiwgImN1cnRpbWVzdGFtcCIsICJydnByb3AiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgImludmFsaWQiLCAicmV2aXNpb24iLCAiY29udGVudCIsICJzdHJpbmciLCAidGVzdCIsICJwb3J0bGV0SWQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJsaW5rIiwgImFkZFBvcnRsZXRMaW5rIl0KfQo=
