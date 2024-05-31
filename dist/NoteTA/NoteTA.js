/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-noteTA.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/NoteTA}
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

// dist/NoteTA/NoteTA.js
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
//! src/NoteTA/modules/util/ApiRetryFailError.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/NoteTA/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    ApiRetryFailError: (0, import_ext_gadget.localize)({
      en: "Api calls failed $1 time(s) in a row. Errors: ",
      "zh-hans": "Api 调用连续失败 $1 次，$1 次调用的错误分别为：",
      "zh-hant": "Api 調用連續失敗 $1 次，$1 次調用的錯誤分別為："
    }),
    Loading: (0, import_ext_gadget.localize)({
      en: "Loading...",
      "zh-hans": "正在加载……",
      "zh-hant": "正在載入……"
    }),
    Title: (0, import_ext_gadget.localize)({
      en: "NoteTA",
      "zh-hans": "字词转换",
      "zh-hant": "字詞轉換"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/NoteTA/modules/util/ApiRetryFailError.tsx
var ApiRetryFailError = class extends Error {
  errors;
  constructor(errors) {
    super("Api calls failed ".concat(errors.length, " time(s) in a row."));
    this.name = "ApiRetryFailError";
    this.errors = errors;
  }
  toJQuery() {
    const errorCount = this.errors.length;
    const element = /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
      className: "error"
    }, /* @__PURE__ */ import_ext_gadget2.default.createElement("p", null, getMessage("ApiRetryFailError").replace(/\$1/g, errorCount.toString())), /* @__PURE__ */ import_ext_gadget2.default.createElement("ol", null, this.errors.reduce((errors, error, index) => [...errors, /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      key: index
    }, error.split("\n").reduce((accumulator, line, number) => [...accumulator, /* @__PURE__ */ import_ext_gadget2.default.createElement("p", {
      key: number
    }, line)], []))], [])));
    const $element = $(element);
    return $element;
  }
};
//! src/NoteTA/options.json
var version = "1.0";
//! src/NoteTA/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("NoteTA/".concat(version));
//! src/NoteTA/modules/parseWikitext.ts
var parseWithRetry = (args, count = 3, previousErrors = []) => {
  if (!count) {
    return $.Deferred().reject(new ApiRetryFailError(previousErrors));
  }
  const deferred = $.Deferred();
  void api.parse(...args).then((response) => {
    void deferred.resolve(response);
  }).catch((error) => {
    console.error(error);
    if (error && typeof error === "object" && "stack" in error) {
      previousErrors[previousErrors.length] = error.stack;
    } else {
      previousErrors[previousErrors.length] = String(error);
    }
    parseWithRetry(args, --count, previousErrors).then((newResponse) => {
      void deferred.resolve(newResponse);
    }).catch((newError) => {
      void deferred.reject(newError);
    });
  });
  return deferred;
};
var parseWikitext = (...args) => {
  return parseWithRetry(args);
};
//! src/NoteTA/modules/constant.ts
var PORTLET_CLASS = "x-noteTA-viewer";
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_SKIN = mw.config.get("skin");
var WG_USER_VARIANT = mw.config.get("wgUserVariant");
//! src/NoteTA/modules/viewer.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.React"), 1);
//! src/NoteTA/modules/util/assert.ts
function assert(value, valueName) {
  if (!value) {
    throw new Error("Assert Fail, ".concat(valueName, " == false."));
  }
}
//! src/NoteTA/modules/initViewMap.ts
var viewerMap = /* @__PURE__ */ new Map();
//! src/NoteTA/modules/initWindowManager.ts
var initWindowManager = () => {
  return new OO.ui.WindowManager();
};
var windowManager = initWindowManager();
//! src/NoteTA/modules/viewer.tsx
var getViewer = ($body, hash) => {
  if (viewerMap.has(hash)) {
    const storedViewer = viewerMap.get(hash);
    assert(storedViewer, "viewer");
    return storedViewer;
  }
  const $targetElement = $body.find("#noteTA-".concat(hash));
  if (!$targetElement.length) {
    throw new Error(`Can't get Element "#noteTA-`.concat(hash, '".'));
  }
  class NoteTAViewer extends OO.ui.ProcessDialog {
    dataIsLoaded;
    executePromise;
    mutationObserver;
    $realContent;
    $body;
    static lastError;
    static noteTAParseText;
    constructor() {
      super({
        size: "larger"
      });
      this.dataIsLoaded = false;
      this.$realContent = $(/* @__PURE__ */ import_ext_gadget4.default.createElement("div", null));
      this.mutationObserver = new MutationObserver(this.updateSize.bind(this));
      this.mutationObserver.observe(this.$realContent.get(0), {
        childList: true,
        subtree: true
      });
    }
    initialize() {
      super.initialize();
      const panelLayout = new OO.ui.PanelLayout({
        expanded: false,
        padded: true
      });
      this.$realContent.appendTo(panelLayout.$element);
      panelLayout.$element.appendTo(this.$body);
      return this;
    }
    getSetupProcess(data) {
      return super.getSetupProcess(data).next(() => {
        void this.doExecuteWrap();
        void this.executeAction("main");
      });
    }
    getActionProcess(action) {
      const isMainAction = action === "main";
      return super.getActionProcess(action).next(() => {
        if (isMainAction) {
          return this.doExecuteWrap();
        }
      }).next(() => {
        if (isMainAction && NoteTAViewer.lastError) {
          return NoteTAViewer.lastError;
        }
        return super.getActionProcess(action).execute();
      });
    }
    destroy() {
      this.mutationObserver.disconnect();
    }
    static getNoteTAParseText() {
      if (NoteTAViewer.noteTAParseText) {
        return $.Deferred().resolve(NoteTAViewer.noteTAParseText);
      }
      const $noteTAtitle = $targetElement.find(".noteTA-title");
      const actualTitle = WG_PAGE_NAME.replace(/_/g, " ");
      let wikitext = "";
      const titleDeferred = $.Deferred();
      if ($noteTAtitle.length) {
        const titleConv = $noteTAtitle.attr("data-noteta-code");
        assert(titleConv, "titleConv");
        let titleDesc = $noteTAtitle.attr("data-noteta-desc");
        if (titleDesc) {
          titleDesc = "（".concat(titleDesc, "）");
        } else {
          titleDesc = "";
        }
        wikitext += '<span style="float:right">{{edit|'.concat(actualTitle, "|section=0}}</span>\n");
        wikitext += "; 本文使用[[Help:字词转换处理|标题手工转换]]\n";
        wikitext += "* 转换标题为：-{D|".concat(titleConv, "}-").concat(titleDesc, "\n");
        wikitext += "* 实际标题为：-{R|".concat(actualTitle, "}-；当前显示为：-{|").concat(titleConv, "}-\n");
        void titleDeferred.resolve();
      } else {
        parseWikitext("{{noteTA/multititle|".concat(actualTitle, "}}"), {
          title: actualTitle,
          variant: "zh"
        }).then((resultHtml) => {
          const $multiTitle = $($.parseHTML(resultHtml)).find(".noteTA-multititle");
          if ($multiTitle.length) {
            wikitext += "; 本文[[Help:字词转换处理|标题可能经过转换]]\n* 转换标题为：";
            const textVariant = {};
            const variantText = {};
            var _iterator2 = _createForOfIteratorHelper($multiTitle.children()), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                const element = _step2.value;
                const $element = $(element);
                const variant = $element.attr("data-noteta-multititle-variant");
                assert(variant, "variant");
                const text = $element.text().trim();
                variantText[variant] = text;
                const textVariantArray = textVariant[text];
                if (textVariantArray) {
                  textVariantArray[textVariantArray.length] = variant;
                } else {
                  textVariant[text] = [variant];
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            const titleConverted = variantText[WG_USER_VARIANT];
            const multiTitle = [];
            for (const key in variantText) {
              if (!Object.hasOwn(variantText, key)) {
                continue;
              }
              const text = variantText[key];
              if (text === null || text === void 0) {
                continue;
              }
              const variants = textVariant[text];
              if (!variants) {
                continue;
              }
              var _iterator3 = _createForOfIteratorHelper(variants), _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  const variant = _step3.value;
                  variantText[variant] = null;
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              const variantsName = variants.map((variant) => "-{R|{{MediaWiki:Variantname-".concat(variant, "}}}-")).join("、");
              multiTitle[multiTitle.length] = "".concat(variantsName, "：-{R|").concat(text, "}-");
            }
            const subItemSeparator = "\n** ";
            wikitext += "".concat(subItemSeparator).concat(multiTitle.join(subItemSeparator));
            wikitext += "\n* 实际标题为：-{R|".concat(actualTitle, "}-；当前显示为：-{R|").concat(titleConverted, "}-\n");
          }
          void titleDeferred.resolve();
        }).catch((error) => {
          void titleDeferred.reject(error);
        });
      }
      const deferred = $.Deferred();
      titleDeferred.then(() => {
        const $noteTAgroups = $targetElement.find(".noteTA-group > *[data-noteta-group]");
        var _iterator4 = _createForOfIteratorHelper($noteTAgroups), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            const element = _step4.value;
            const $element = $(element);
            switch ($element.attr("data-noteta-group-source")) {
              case "template":
                wikitext += "{{CGroup/".concat($element.attr("data-noteta-group"), "}}\n");
                break;
              case "module":
                wikitext += "{{#invoke:CGroupViewer|dialog|".concat($element.attr("data-noteta-group"), "}}\n");
                break;
              case "none":
                wikitext += "; 本文使用的公共转换组“".concat($element.attr("data-noteta-group"), "”尚未创建\n");
                wikitext += "* {{edit|Module:CGroup/".concat($element.attr("data-noteta-group"), "|创建公共转换组“").concat($element.attr("data-noteta-group"), "”}}\n");
                break;
              default:
                wikitext += "; 未知公共转换组“".concat($element.attr("data-noteta-group"), "”来源“").concat($element.attr("data-noteta-group-source"), "”\n");
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        const $noteTAlocal = $targetElement.find(".noteTA-local");
        if ($noteTAlocal.length) {
          wikitext += '<span style="float:right">{{edit|'.concat(actualTitle, "|section=0}}</span>\n");
          wikitext += "; 本文使用[[Help:字词转换处理|全文手工转换]]\n";
          const $noteTAlocals = $noteTAlocal.children("*[data-noteta-code]");
          var _iterator5 = _createForOfIteratorHelper($noteTAlocals), _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
              const element = _step5.value;
              const $element = $(element);
              let localDesc = $element.attr("data-noteta-desc");
              if (localDesc) {
                localDesc = "（".concat(localDesc, "）");
              } else {
                localDesc = "";
              }
              const localConv = $element.attr("data-noteta-code");
              wikitext += "* -{D|".concat(localConv, "}-").concat(localDesc, "当前显示为：-{").concat(localConv, "}-\n");
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
        wikitext += "{{noteTA/footer}}\n";
        NoteTAViewer.noteTAParseText = wikitext;
        void deferred.resolve(wikitext);
      }).catch((error) => {
        void deferred.reject(error);
      });
      return deferred;
    }
    doExecute() {
      if (this.dataIsLoaded) {
        return $.Deferred().resolve();
      }
      this.$realContent.empty().append(/* @__PURE__ */ import_ext_gadget4.default.createElement("p", null, getMessage("Loading")));
      return NoteTAViewer.getNoteTAParseText().then((wikitext) => parseWikitext(wikitext, {
        title: "Template:CGroup/-",
        variant: WG_USER_VARIANT
      })).then((parsedHtml) => {
        this.$realContent.empty().html(parsedHtml).addClass("".concat(PORTLET_CLASS, "-output"));
        this.$realContent.find(".mw-collapsible").makeCollapsible();
        this.updateSize();
        this.dataIsLoaded = true;
      }).catch((error) => {
        if (error instanceof ApiRetryFailError) {
          throw new OO.ui.Error(error.toJQuery(), {
            recoverable: true
          });
        } else {
          throw new OO.ui.Error(String(error), {
            recoverable: false
          });
        }
      });
    }
    doExecuteWrap() {
      if (this.executePromise === void 0) {
        this.executePromise = this.doExecute();
        delete NoteTAViewer.lastError;
        const executeDeferred = $.Deferred();
        void this.executePromise.then((response) => {
          void executeDeferred.resolve(response);
        }).catch((error) => {
          if (error instanceof OO.ui.Error) {
            NoteTAViewer.lastError = error;
          } else {
            void executeDeferred.reject(error);
          }
        }).always(() => {
          delete this.executePromise;
        });
        return executeDeferred;
      }
      const deferred = $.Deferred();
      void this.executePromise.then((response) => {
        void deferred.resolve(response);
      }).catch((error) => {
        if (error instanceof OO.ui.Error) {
          NoteTAViewer.lastError = error;
        } else {
          void deferred.reject(error);
        }
      }).always(() => {
        delete this.executePromise;
      });
      return deferred;
    }
  }
  NoteTAViewer.static = {
    ...OO.ui.ProcessDialog.static
  };
  NoteTAViewer.static.name = "NoteTAViewer-".concat(hash);
  NoteTAViewer.static.title = getMessage("Title");
  NoteTAViewer.static.actions = [{
    label: mw.msg("ooui-dialog-process-dismiss"),
    flags: "safe"
  }];
  const viewer = new NoteTAViewer();
  windowManager.addWindows([viewer]);
  viewerMap.set(hash, viewer);
  return viewer;
};
var resetAllViewer = () => {
  var _iterator6 = _createForOfIteratorHelper(viewerMap.values()), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      const viewer = _step6.value;
      viewer.destroy();
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  viewerMap.clear();
  void windowManager.clearWindows();
};
//! src/NoteTA/modules/initGlobalMethods.ts
var portletId;
var initGlobalMethods = ($body) => {
  const globalMethods = {
    init() {
    },
    deInit() {
    }
  };
  if (WG_SKIN === "vector") {
    portletId = "p-noteTA";
    let $noteTATab;
    globalMethods.init = () => {
      if ($noteTATab || !portletId) {
        return;
      }
      const noteTATab = mw.util.addPortlet(portletId);
      if (!noteTATab) {
        return;
      }
      $noteTATab = $(noteTATab);
      $noteTATab.removeClass("mw-portlet-".concat(portletId)).addClass(["mw-portlet-".concat(portletId.replace("p-", "")), "vector-menu-tabs", "vector-menu-tabs-legacy"]);
      $body.find("#p-variants").after($noteTATab);
    };
    globalMethods.deInit = () => {
      if (!$noteTATab) {
        return;
      }
      $noteTATab.find("ul").empty();
      if (portletId) {
        mw.util.hidePortlet(portletId);
      }
    };
  } else if (WG_SKIN === "vector-2022") {
    portletId = "p-associated-pages";
    globalMethods.deInit = () => {
      $body.find(PORTLET_CLASS).remove();
    };
  }
  return globalMethods;
};
//! src/NoteTA/NoteTA.ts
var import_ext_gadget6 = require("ext.gadget.Util");
//! src/NoteTA/modules/util/generatePortletLink.tsx
var import_ext_gadget5 = __toESM(require("ext.gadget.React"), 1);
var generatePortletLink = (hash) => {
  if (!portletId) {
    return;
  }
  const portletLink = mw.util.addPortletLink(portletId, "#", "汉/漢", "ca-noteTA-".concat(hash));
  if (!portletLink) {
    return;
  }
  const style = {
    height: "85%",
    padding: "1px 3px"
  };
  const $portletLink = $(portletLink).addClass(PORTLET_CLASS);
  $portletLink.find("a").empty().append(/* @__PURE__ */ import_ext_gadget5.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget5.default.createElement("span", {
    style: {
      ...style,
      background: "#d3e3f4",
      color: "#000"
    }
  }, "汉"), /* @__PURE__ */ import_ext_gadget5.default.createElement("span", {
    style: {
      ...style,
      background: "#e9e9e9",
      color: "#434343"
    }
  }, "漢")));
  return $portletLink;
};
//! src/NoteTA/NoteTA.ts
var isInit = false;
mw.hook("wikipage.content").add(($content) => {
  const $body = $content.parents("body");
  if (!isInit) {
    isInit = true;
    windowManager.$element.appendTo($body);
  }
  resetAllViewer();
  const globalMethods = initGlobalMethods($body);
  globalMethods.deInit();
  globalMethods.init();
  var _iterator7 = _createForOfIteratorHelper($body.find(".mw-indicator[id^=mw-indicator-noteTA-]")), _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      const element = _step7.value;
      const hash = element.id.replace(/^mw-indicator-noteTA-/, "");
      let $element = $(element);
      if (portletId) {
        $element.hide();
        const $portletLink = generatePortletLink(hash);
        if (!$portletLink) {
          continue;
        }
        $element = $portletLink;
      }
      const openerListener = (event) => {
        if (!(0, import_ext_gadget6.checkA11yConfirmKey)(event)) {
          return;
        }
        event.preventDefault();
        getViewer($body, hash).open();
      };
      $element.on("click", openerListener);
      $element.on("keydown", openerListener);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3IudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Ob3RlVEEvb3B0aW9ucy5qc29uIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9hcGkudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3BhcnNlV2lraXRleHQudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy92aWV3ZXIudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy91dGlsL2Fzc2VydC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvaW5pdFZpZXdNYXAudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pbml0R2xvYmFsTWV0aG9kcy50cyIsICJzcmMvTm90ZVRBL05vdGVUQS50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVBvcnRsZXRMaW5rLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY2xhc3MgQXBpUmV0cnlGYWlsRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdHByaXZhdGUgZXJyb3JzOiBzdHJpbmdbXTtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoZXJyb3JzOiBzdHJpbmdbXSkge1xuXHRcdHN1cGVyKGBBcGkgY2FsbHMgZmFpbGVkICR7ZXJyb3JzLmxlbmd0aH0gdGltZShzKSBpbiBhIHJvdy5gKTtcblx0XHR0aGlzLm5hbWUgPSAnQXBpUmV0cnlGYWlsRXJyb3InO1xuXHRcdHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuXHR9XG5cblx0cHVibGljIHRvSlF1ZXJ5KCk6IEpRdWVyeSB7XG5cdFx0Y29uc3QgZXJyb3JDb3VudDogbnVtYmVyID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xuXG5cdFx0Y29uc3QgZWxlbWVudCA9IChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5cblx0XHRcdFx0PHA+e2dldE1lc3NhZ2UoJ0FwaVJldHJ5RmFpbEVycm9yJykucmVwbGFjZSgvXFwkMS9nLCBlcnJvckNvdW50LnRvU3RyaW5nKCkpfTwvcD5cblx0XHRcdFx0PG9sPlxuXHRcdFx0XHRcdHt0aGlzLmVycm9ycy5yZWR1Y2UoXG5cdFx0XHRcdFx0XHQoZXJyb3JzLCBlcnJvciwgaW5kZXgpID0+IFtcblx0XHRcdFx0XHRcdFx0Li4uZXJyb3JzLFxuXHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdFx0e2Vycm9yXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3BsaXQoJ1xcbicpXG5cdFx0XHRcdFx0XHRcdFx0XHQucmVkdWNlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoYWNjdW11bGF0b3IsIGxpbmUsIG51bWJlcikgPT4gWy4uLmFjY3VtdWxhdG9yLCA8cCBrZXk9e251bWJlcn0+e2xpbmV9PC9wPl0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtdIGFzIFJlYWN0LlJlYWN0RWxlbWVudFtdXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQ8L2xpPixcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRbXSBhcyBSZWFjdC5SZWFjdEVsZW1lbnRbXVxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvb2w+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHRcdGNvbnN0ICRlbGVtZW50ID0gJChlbGVtZW50KSBhcyBKUXVlcnk7XG5cblx0XHRyZXR1cm4gJGVsZW1lbnQ7XG5cdH1cbn1cblxuZXhwb3J0IHtBcGlSZXRyeUZhaWxFcnJvcn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFwaVJldHJ5RmFpbEVycm9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FwaSBjYWxscyBmYWlsZWQgJDEgdGltZShzKSBpbiBhIHJvdy4gRXJyb3JzOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAnQXBpIOiwg+eUqOi/nue7reWksei0pSAkMSDmrKHvvIwkMSDmrKHosIPnlKjnmoTplJnor6/liIbliKvkuLrvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAnQXBpIOiqv+eUqOmAo+e6jOWkseaVlyAkMSDmrKHvvIwkMSDmrKHoqr/nlKjnmoTpjK/oqqTliIbliKXngrrvvJonLFxuXHRcdH0pLFxuXHRcdExvYWRpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9hZGluZy4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjliqDovb3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo6LyJ5YWl4oCm4oCmJyxcblx0XHR9KSxcblx0XHRUaXRsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOb3RlVEEnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2X6K+N6L2s5o2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wtl+ipnui9ieaPmycsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMS4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYE5vdGVUQS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7QXBpUmV0cnlGYWlsRXJyb3J9IGZyb20gJy4vdXRpbC9BcGlSZXRyeUZhaWxFcnJvcic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG50eXBlIEFwaVBhcnNlID0gbXcuQXBpWydwYXJzZSddO1xudHlwZSBBcGlQYXJzZVBhcmFtZXRlcnMgPSBQYXJhbWV0ZXJzPEFwaVBhcnNlPjtcbnR5cGUgQXBpUGFyc2VSZXNwb25zZSA9IEF3YWl0ZWQ8UmV0dXJuVHlwZTxBcGlQYXJzZT4+O1xudHlwZSBBcGlSZXNwb25zZSA9IEFwaVBhcnNlUmVzcG9uc2UgfCBBcGlSZXRyeUZhaWxFcnJvcjtcblxuY29uc3QgcGFyc2VXaXRoUmV0cnkgPSAoXG5cdGFyZ3M6IEFwaVBhcnNlUGFyYW1ldGVycyxcblx0Y291bnQ6IG51bWJlciA9IDMsXG5cdHByZXZpb3VzRXJyb3JzOiBzdHJpbmdbXSA9IFtdXG4pOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+ID0+IHtcblx0aWYgKCFjb3VudCkge1xuXHRcdHJldHVybiAkLkRlZmVycmVkPEFwaVJldHJ5RmFpbEVycm9yPigpLnJlamVjdChuZXcgQXBpUmV0cnlGYWlsRXJyb3IocHJldmlvdXNFcnJvcnMpKTtcblx0fVxuXG5cdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblxuXHR2b2lkIGFwaVxuXHRcdC5wYXJzZSguLi5hcmdzKVxuXHRcdC50aGVuKChyZXNwb25zZTogQXBpUGFyc2VSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyb3I/OiBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cblx0XHRcdGlmIChlcnJvciAmJiB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmICdzdGFjaycgaW4gZXJyb3IpIHtcblx0XHRcdFx0cHJldmlvdXNFcnJvcnNbcHJldmlvdXNFcnJvcnMubGVuZ3RoXSA9IGVycm9yLnN0YWNrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHJldmlvdXNFcnJvcnNbcHJldmlvdXNFcnJvcnMubGVuZ3RoXSA9IFN0cmluZyhlcnJvcik7XG5cdFx0XHR9XG5cblx0XHRcdHBhcnNlV2l0aFJldHJ5KGFyZ3MsIC0tY291bnQsIHByZXZpb3VzRXJyb3JzKVxuXHRcdFx0XHQudGhlbigobmV3UmVzcG9uc2U6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlKG5ld1Jlc3BvbnNlKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChuZXdFcnJvcj86IEVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3QobmV3RXJyb3IpO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblxuXHRyZXR1cm4gZGVmZXJyZWQ7XG59O1xuXG5jb25zdCBwYXJzZVdpa2l0ZXh0ID0gKC4uLmFyZ3M6IEFwaVBhcnNlUGFyYW1ldGVycyk6IEpRdWVyeS5EZWZlcnJlZDxBcGlSZXNwb25zZT4gPT4ge1xuXHRyZXR1cm4gcGFyc2VXaXRoUmV0cnkoYXJncyk7XG59O1xuXG5leHBvcnQge3R5cGUgQXBpUGFyc2VSZXNwb25zZSwgdHlwZSBBcGlSZXNwb25zZSwgcGFyc2VXaWtpdGV4dH07XG4iLCAiY29uc3QgUE9SVExFVF9DTEFTUzogc3RyaW5nID0gJ3gtbm90ZVRBLXZpZXdlcic7XG5cbmNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuY29uc3QgV0dfU0tJTjogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnc2tpbicpO1xuY29uc3QgV0dfVVNFUl9WQVJJQU5UOiBzdHJpbmcgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dVc2VyVmFyaWFudCcpO1xuXG5leHBvcnQge1BPUlRMRVRfQ0xBU1MsIFdHX1BBR0VfTkFNRSwgV0dfU0tJTiwgV0dfVVNFUl9WQVJJQU5UfTtcbiIsICJpbXBvcnQge3R5cGUgQXBpUGFyc2VSZXNwb25zZSwgdHlwZSBBcGlSZXNwb25zZSwgcGFyc2VXaWtpdGV4dH0gZnJvbSAnLi9wYXJzZVdpa2l0ZXh0JztcbmltcG9ydCB7UE9SVExFVF9DTEFTUywgV0dfUEFHRV9OQU1FLCBXR19VU0VSX1ZBUklBTlR9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtBcGlSZXRyeUZhaWxFcnJvcn0gZnJvbSAnLi91dGlsL0FwaVJldHJ5RmFpbEVycm9yJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICcuL3V0aWwvYXNzZXJ0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dmlld2VyTWFwfSBmcm9tICcuL2luaXRWaWV3TWFwJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IGdldFZpZXdlciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4sIGhhc2g6IHN0cmluZyk6IHR5cGVvZiB2aWV3ZXIgPT4ge1xuXHRpZiAodmlld2VyTWFwLmhhcyhoYXNoKSkge1xuXHRcdGNvbnN0IHN0b3JlZFZpZXdlciA9IHZpZXdlck1hcC5nZXQoaGFzaCk7XG5cdFx0YXNzZXJ0KHN0b3JlZFZpZXdlciwgJ3ZpZXdlcicpO1xuXG5cdFx0cmV0dXJuIHN0b3JlZFZpZXdlcjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXRFbGVtZW50OiBKUXVlcnkgPSAkYm9keS5maW5kKGAjbm90ZVRBLSR7aGFzaH1gKTtcblx0aWYgKCEkdGFyZ2V0RWxlbWVudC5sZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYENhbid0IGdldCBFbGVtZW50IFwiI25vdGVUQS0ke2hhc2h9XCIuYCk7XG5cdH1cblxuXHRjbGFzcyBOb3RlVEFWaWV3ZXIgZXh0ZW5kcyBPTy51aS5Qcm9jZXNzRGlhbG9nIHtcblx0XHRwcml2YXRlIGRhdGFJc0xvYWRlZDogYm9vbGVhbjtcblx0XHRwcml2YXRlIGV4ZWN1dGVQcm9taXNlPzogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5kb0V4ZWN1dGU+O1xuXHRcdHByaXZhdGUgbXV0YXRpb25PYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcblx0XHRwcml2YXRlICRyZWFsQ29udGVudDogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgJGJvZHk6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblx0XHRwcml2YXRlIHN0YXRpYyBsYXN0RXJyb3I/OiBPTy51aS5FcnJvcjtcblx0XHRwcml2YXRlIHN0YXRpYyBub3RlVEFQYXJzZVRleHQ6IHN0cmluZztcblxuXHRcdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRcdHN1cGVyKHtcblx0XHRcdFx0c2l6ZTogJ2xhcmdlcicsXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5kYXRhSXNMb2FkZWQgPSBmYWxzZTtcblx0XHRcdHRoaXMuJHJlYWxDb250ZW50ID0gJCg8ZGl2IC8+KSBhcyBKUXVlcnk7XG5cblx0XHRcdHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMudXBkYXRlU2l6ZS5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuJHJlYWxDb250ZW50LmdldCgwKSBhcyBIVE1MRWxlbWVudCwge1xuXHRcdFx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0XHRcdHN1YnRyZWU6IHRydWUsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwdWJsaWMgb3ZlcnJpZGUgaW5pdGlhbGl6ZSgpOiB0aGlzIHtcblx0XHRcdHN1cGVyLmluaXRpYWxpemUoKTtcblxuXHRcdFx0Y29uc3QgcGFuZWxMYXlvdXQ6IE9PLnVpLlBhbmVsTGF5b3V0ID0gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kcmVhbENvbnRlbnQuYXBwZW5kVG8ocGFuZWxMYXlvdXQuJGVsZW1lbnQpO1xuXHRcdFx0cGFuZWxMYXlvdXQuJGVsZW1lbnQuYXBwZW5kVG8odGhpcy4kYm9keSBhcyBKUXVlcnkpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRwdWJsaWMgb3ZlcnJpZGUgZ2V0U2V0dXBQcm9jZXNzKGRhdGE6IE9PLnVpLkRpYWxvZy5TZXR1cERhdGFNYXApOiBPTy51aS5Qcm9jZXNzIHtcblx0XHRcdHJldHVybiBzdXBlci5nZXRTZXR1cFByb2Nlc3MoZGF0YSkubmV4dCgoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHZvaWQgdGhpcy5kb0V4ZWN1dGVXcmFwKCk7XG5cdFx0XHRcdHZvaWQgdGhpcy5leGVjdXRlQWN0aW9uKCdtYWluJyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwdWJsaWMgb3ZlcnJpZGUgZ2V0QWN0aW9uUHJvY2VzcyhhY3Rpb24/OiBzdHJpbmcpOiBPTy51aS5Qcm9jZXNzIHtcblx0XHRcdGNvbnN0IGlzTWFpbkFjdGlvbjogYm9vbGVhbiA9IGFjdGlvbiA9PT0gJ21haW4nO1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRzdXBlclxuXHRcdFx0XHRcdC5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbilcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNzAzMFxuXHRcdFx0XHRcdC5uZXh0KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChpc01haW5BY3Rpb24pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuZG9FeGVjdXRlV3JhcCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Lm5leHQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGlzTWFpbkFjdGlvbiAmJiBOb3RlVEFWaWV3ZXIubGFzdEVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBOb3RlVEFWaWV3ZXIubGFzdEVycm9yO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIHN1cGVyLmdldEFjdGlvblByb2Nlc3MoYWN0aW9uKS5leGVjdXRlKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGdldE5vdGVUQVBhcnNlVGV4dCgpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+IHtcblx0XHRcdGlmIChOb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0KSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkPHN0cmluZz4oKS5yZXNvbHZlKE5vdGVUQVZpZXdlci5ub3RlVEFQYXJzZVRleHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCAkbm90ZVRBdGl0bGU6IEpRdWVyeSA9ICR0YXJnZXRFbGVtZW50LmZpbmQoJy5ub3RlVEEtdGl0bGUnKTtcblx0XHRcdGNvbnN0IGFjdHVhbFRpdGxlOiBzdHJpbmcgPSBXR19QQUdFX05BTUUucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdFx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblxuXHRcdFx0Y29uc3QgdGl0bGVEZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0XHRcdGlmICgkbm90ZVRBdGl0bGUubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnN0IHRpdGxlQ29udjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJG5vdGVUQXRpdGxlLmF0dHIoJ2RhdGEtbm90ZXRhLWNvZGUnKTtcblx0XHRcdFx0YXNzZXJ0KHRpdGxlQ29udiwgJ3RpdGxlQ29udicpO1xuXG5cdFx0XHRcdGxldCB0aXRsZURlc2M6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRub3RlVEF0aXRsZS5hdHRyKCdkYXRhLW5vdGV0YS1kZXNjJyk7XG5cdFx0XHRcdGlmICh0aXRsZURlc2MpIHtcblx0XHRcdFx0XHR0aXRsZURlc2MgPSBg77yIJHt0aXRsZURlc2N977yJYDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aXRsZURlc2MgPSAnJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGA8c3BhbiBzdHlsZT1cImZsb2F0OnJpZ2h0XCI+e3tlZGl0fCR7YWN0dWFsVGl0bGV9fHNlY3Rpb249MH19PC9zcGFuPlxcbmA7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9ICc7IOacrOaWh+S9v+eUqFtbSGVscDrlrZfor43ovazmjaLlpITnkIZ85qCH6aKY5omL5bel6L2s5o2iXV1cXG4nO1xuXHRcdFx0XHR3aWtpdGV4dCArPSBgKiDovazmjaLmoIfpopjkuLrvvJote0R8JHt0aXRsZUNvbnZ9fS0ke3RpdGxlRGVzY31cXG5gO1xuXHRcdFx0XHR3aWtpdGV4dCArPSBgKiDlrp7pmYXmoIfpopjkuLrvvJote1J8JHthY3R1YWxUaXRsZX19Le+8m+W9k+WJjeaYvuekuuS4uu+8mi17fCR7dGl0bGVDb252fX0tXFxuYDtcblxuXHRcdFx0XHR2b2lkIHRpdGxlRGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFyc2VXaWtpdGV4dChge3tub3RlVEEvbXVsdGl0aXRsZXwke2FjdHVhbFRpdGxlfX19YCwge1xuXHRcdFx0XHRcdHRpdGxlOiBhY3R1YWxUaXRsZSxcblx0XHRcdFx0XHR2YXJpYW50OiAnemgnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50aGVuKChyZXN1bHRIdG1sOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgJG11bHRpVGl0bGU6IEpRdWVyeSA9ICQoJC5wYXJzZUhUTUwocmVzdWx0SHRtbCBhcyBBcGlQYXJzZVJlc3BvbnNlKSkuZmluZChcblx0XHRcdFx0XHRcdFx0Jy5ub3RlVEEtbXVsdGl0aXRsZSdcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRpZiAoJG11bHRpVGl0bGUubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICc7IOacrOaWh1tbSGVscDrlrZfor43ovazmjaLlpITnkIZ85qCH6aKY5Y+v6IO957uP6L+H6L2s5o2iXV1cXG4qIOi9rOaNouagh+mimOS4uu+8mic7XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgdGV4dFZhcmlhbnQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuXHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50VGV4dDogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVsbD4gPSB7fTtcblxuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJG11bHRpVGl0bGUuY2hpbGRyZW4oKSkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLW11bHRpdGl0bGUtdmFyaWFudCcpO1xuXHRcdFx0XHRcdFx0XHRcdGFzc2VydCh2YXJpYW50LCAndmFyaWFudCcpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGV4dDogc3RyaW5nID0gJGVsZW1lbnQudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50VGV4dFt2YXJpYW50XSA9IHRleHQ7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0VmFyaWFudEFycmF5OiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9IHRleHRWYXJpYW50W3RleHRdO1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0ZXh0VmFyaWFudEFycmF5KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0VmFyaWFudEFycmF5W3RleHRWYXJpYW50QXJyYXkubGVuZ3RoXSA9IHZhcmlhbnQ7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHRWYXJpYW50W3RleHRdID0gW3ZhcmlhbnRdO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRpdGxlQ29udmVydGVkOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkID0gdmFyaWFudFRleHRbV0dfVVNFUl9WQVJJQU5UIGFzIHN0cmluZ107XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgbXVsdGlUaXRsZTogc3RyaW5nW10gPSBbXTtcblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gdmFyaWFudFRleHQpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24odmFyaWFudFRleHQsIGtleSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRleHQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgPSB2YXJpYW50VGV4dFtrZXldO1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0ZXh0ID09PSBudWxsIHx8IHRleHQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudHM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0gdGV4dFZhcmlhbnRbdGV4dF07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCF2YXJpYW50cykge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIHZhcmlhbnRzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50VGV4dFt2YXJpYW50XSA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudHNOYW1lOiBzdHJpbmcgPSB2YXJpYW50c1xuXHRcdFx0XHRcdFx0XHRcdFx0Lm1hcCgodmFyaWFudDogc3RyaW5nKTogc3RyaW5nID0+IGAte1J8e3tNZWRpYVdpa2k6VmFyaWFudG5hbWUtJHt2YXJpYW50fX19fS1gKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmpvaW4oJ+OAgScpO1xuXHRcdFx0XHRcdFx0XHRcdG11bHRpVGl0bGVbbXVsdGlUaXRsZS5sZW5ndGhdID0gYCR7dmFyaWFudHNOYW1lfe+8mi17Unwke3RleHR9fS1gO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ViSXRlbVNlcGFyYXRvcjogc3RyaW5nID0gJ1xcbioqICc7XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGAke3N1Ykl0ZW1TZXBhcmF0b3J9JHttdWx0aVRpdGxlLmpvaW4oc3ViSXRlbVNlcGFyYXRvcil9YDtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYFxcbiog5a6e6ZmF5qCH6aKY5Li677yaLXtSfCR7YWN0dWFsVGl0bGV9fS3vvJvlvZPliY3mmL7npLrkuLrvvJote1J8JHt0aXRsZUNvbnZlcnRlZH19LVxcbmA7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZvaWQgdGl0bGVEZWZlcnJlZC5yZXNvbHZlKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yOiBBcGlSZXRyeUZhaWxFcnJvcik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dm9pZCB0aXRsZURlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblxuXHRcdFx0dGl0bGVEZWZlcnJlZFxuXHRcdFx0XHQudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgJG5vdGVUQWdyb3VwczogSlF1ZXJ5ID0gJHRhcmdldEVsZW1lbnQuZmluZCgnLm5vdGVUQS1ncm91cCA+ICpbZGF0YS1ub3RldGEtZ3JvdXBdJyk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRub3RlVEFncm91cHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0c3dpdGNoICgkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cC1zb3VyY2UnKSkge1xuXHRcdFx0XHRcdFx0XHRjYXNlICd0ZW1wbGF0ZSc6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYHt7Q0dyb3VwLyR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ21vZHVsZSc6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYHt7I2ludm9rZTpDR3JvdXBWaWV3ZXJ8ZGlhbG9nfCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ25vbmUnOlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGA7IOacrOaWh+S9v+eUqOeahOWFrOWFsei9rOaNoue7hOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX3igJ3lsJrmnKrliJvlu7pcXG5gO1xuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIHt7ZWRpdHxNb2R1bGU6Q0dyb3VwLyR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX185Yib5bu65YWs5YWx6L2s5o2i57uE4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfeKAnX19XFxuYDtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgOyDmnKrnn6XlhazlhbHovazmjaLnu4TigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl94oCd5p2l5rqQ4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cC1zb3VyY2UnKX3igJ1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0ICRub3RlVEFsb2NhbDogSlF1ZXJ5ID0gJHRhcmdldEVsZW1lbnQuZmluZCgnLm5vdGVUQS1sb2NhbCcpO1xuXHRcdFx0XHRcdGlmICgkbm90ZVRBbG9jYWwubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgPHNwYW4gc3R5bGU9XCJmbG9hdDpyaWdodFwiPnt7ZWRpdHwke2FjdHVhbFRpdGxlfXxzZWN0aW9uPTB9fTwvc3Bhbj5cXG5gO1xuXHRcdFx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paH5L2/55SoW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzlhajmlofmiYvlt6XovazmjaJdXVxcbic7XG5cblx0XHRcdFx0XHRcdGNvbnN0ICRub3RlVEFsb2NhbHMgPSAkbm90ZVRBbG9jYWwuY2hpbGRyZW4oJypbZGF0YS1ub3RldGEtY29kZV0nKTtcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbm90ZVRBbG9jYWxzKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0XHRcdGxldCBsb2NhbERlc2M6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWRlc2MnKTtcblx0XHRcdFx0XHRcdFx0aWYgKGxvY2FsRGVzYykge1xuXHRcdFx0XHRcdFx0XHRcdGxvY2FsRGVzYyA9IGDvvIgke2xvY2FsRGVzY33vvIlgO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGxvY2FsRGVzYyA9ICcnO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgbG9jYWxDb252OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1jb2RlJyk7XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIC17RHwke2xvY2FsQ29udn19LSR7bG9jYWxEZXNjfeW9k+WJjeaYvuekuuS4uu+8mi17JHtsb2NhbENvbnZ9fS1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICd7e25vdGVUQS9mb290ZXJ9fVxcbic7XG5cblx0XHRcdFx0XHROb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0ID0gd2lraXRleHQ7XG5cblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmUod2lraXRleHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycm9yOiBBcGlSZXRyeUZhaWxFcnJvcik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBkZWZlcnJlZDtcblx0XHR9XG5cblx0XHRwcml2YXRlIGRvRXhlY3V0ZSgpIHtcblx0XHRcdGlmICh0aGlzLmRhdGFJc0xvYWRlZCkge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKS5yZXNvbHZlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmVtcHR5KCkuYXBwZW5kKDxwPntnZXRNZXNzYWdlKCdMb2FkaW5nJyl9PC9wPik7XG5cblx0XHRcdHJldHVybiBOb3RlVEFWaWV3ZXIuZ2V0Tm90ZVRBUGFyc2VUZXh0KClcblx0XHRcdFx0LnRoZW4oKHdpa2l0ZXh0OiBBcGlSZXNwb25zZSkgPT5cblx0XHRcdFx0XHRwYXJzZVdpa2l0ZXh0KHdpa2l0ZXh0IGFzIEFwaVBhcnNlUmVzcG9uc2UsIHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnVGVtcGxhdGU6Q0dyb3VwLy0nLFxuXHRcdFx0XHRcdFx0dmFyaWFudDogV0dfVVNFUl9WQVJJQU5UIGFzIHN0cmluZyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC50aGVuKChwYXJzZWRIdG1sOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdHRoaXMuJHJlYWxDb250ZW50XG5cdFx0XHRcdFx0XHQuZW1wdHkoKVxuXHRcdFx0XHRcdFx0Lmh0bWwocGFyc2VkSHRtbCBhcyBBcGlQYXJzZVJlc3BvbnNlKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKGAke1BPUlRMRVRfQ0xBU1N9LW91dHB1dGApO1xuXG5cdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0dGhpcy4kcmVhbENvbnRlbnQuZmluZCgnLm13LWNvbGxhcHNpYmxlJykgYXMgSlF1ZXJ5ICYge21ha2VDb2xsYXBzaWJsZTogKCkgPT4gSlF1ZXJ5fVxuXHRcdFx0XHRcdCkubWFrZUNvbGxhcHNpYmxlKCk7XG5cblx0XHRcdFx0XHR0aGlzLnVwZGF0ZVNpemUoKTtcblx0XHRcdFx0XHR0aGlzLmRhdGFJc0xvYWRlZCA9IHRydWU7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEFwaVJldHJ5RmFpbEVycm9yIHwgRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBBcGlSZXRyeUZhaWxFcnJvcikge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE9PLnVpLkVycm9yKGVycm9yLnRvSlF1ZXJ5KCksIHtcblx0XHRcdFx0XHRcdFx0cmVjb3ZlcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE9PLnVpLkVycm9yKFN0cmluZyhlcnJvciksIHtcblx0XHRcdFx0XHRcdFx0cmVjb3ZlcmFibGU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGRvRXhlY3V0ZVdyYXAoKSB7XG5cdFx0XHRpZiAodGhpcy5leGVjdXRlUHJvbWlzZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZXhlY3V0ZVByb21pc2UgPSB0aGlzLmRvRXhlY3V0ZSgpO1xuXHRcdFx0XHRkZWxldGUgTm90ZVRBVmlld2VyLmxhc3RFcnJvcjtcblxuXHRcdFx0XHRjb25zdCBleGVjdXRlRGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXHRcdFx0XHR2b2lkICh0aGlzLmV4ZWN1dGVQcm9taXNlIGFzIEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPilcblx0XHRcdFx0XHQudGhlbigocmVzcG9uc2U6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHR2b2lkIGV4ZWN1dGVEZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEVycm9yIHwgT08udWkuRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIE9PLnVpLkVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdE5vdGVUQVZpZXdlci5sYXN0RXJyb3IgPSBlcnJvcjtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZvaWQgZXhlY3V0ZURlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuYWx3YXlzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmV4ZWN1dGVQcm9taXNlO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiBleGVjdXRlRGVmZXJyZWQ7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblx0XHRcdHZvaWQgKHRoaXMuZXhlY3V0ZVByb21pc2UgYXMgSlF1ZXJ5LlByb21pc2U8QXBpUmVzcG9uc2U+KVxuXHRcdFx0XHQudGhlbigocmVzcG9uc2U6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChlcnJvcjogRXJyb3IgfCBPTy51aS5FcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIE9PLnVpLkVycm9yKSB7XG5cdFx0XHRcdFx0XHROb3RlVEFWaWV3ZXIubGFzdEVycm9yID0gZXJyb3I7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5hbHdheXMoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmV4ZWN1dGVQcm9taXNlO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGRlZmVycmVkO1xuXHRcdH1cblx0fVxuXG5cdE5vdGVUQVZpZXdlci5zdGF0aWMgPSB7XG5cdFx0Li4uT08udWkuUHJvY2Vzc0RpYWxvZy5zdGF0aWMsXG5cdH07XG5cdE5vdGVUQVZpZXdlci5zdGF0aWMubmFtZSA9IGBOb3RlVEFWaWV3ZXItJHtoYXNofWA7XG5cdE5vdGVUQVZpZXdlci5zdGF0aWMudGl0bGUgPSBnZXRNZXNzYWdlKCdUaXRsZScpO1xuXHROb3RlVEFWaWV3ZXIuc3RhdGljLmFjdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0bGFiZWw6IG13Lm1zZygnb291aS1kaWFsb2ctcHJvY2Vzcy1kaXNtaXNzJyksXG5cdFx0XHRmbGFnczogJ3NhZmUnLFxuXHRcdH0sXG5cdF07XG5cblx0Y29uc3Qgdmlld2VyOiBOb3RlVEFWaWV3ZXIgPSBuZXcgTm90ZVRBVmlld2VyKCk7XG5cdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbdmlld2VyXSk7XG5cdHZpZXdlck1hcC5zZXQoaGFzaCwgdmlld2VyKTtcblxuXHRyZXR1cm4gdmlld2VyO1xufTtcblxuY29uc3QgcmVzZXRBbGxWaWV3ZXIgPSAoKTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3Qgdmlld2VyIG9mIHZpZXdlck1hcC52YWx1ZXMoKSkge1xuXHRcdHZpZXdlci5kZXN0cm95KCk7XG5cdH1cblx0dmlld2VyTWFwLmNsZWFyKCk7XG5cdHZvaWQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcbn07XG5cbmV4cG9ydCB7Z2V0Vmlld2VyLCByZXNldEFsbFZpZXdlcn07XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmZ1bmN0aW9uIGFzc2VydDxUPih2YWx1ZTogVCB8IHVuZGVmaW5lZCwgdmFsdWVOYW1lOiBzdHJpbmcpOiBhc3NlcnRzIHZhbHVlIHtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgQXNzZXJ0IEZhaWwsICR7dmFsdWVOYW1lfSA9PSBmYWxzZS5gKTtcblx0fVxufVxuXG5leHBvcnQge2Fzc2VydH07XG4iLCAiaW1wb3J0IHt0eXBlIGdldFZpZXdlcn0gZnJvbSAnLi92aWV3ZXInO1xuXG5jb25zdCB2aWV3ZXJNYXAgPSBuZXcgTWFwPHN0cmluZywgUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Vmlld2VyPj4oKTtcblxuZXhwb3J0IHt2aWV3ZXJNYXB9O1xuIiwgImNvbnN0IGluaXRXaW5kb3dNYW5hZ2VyID0gKCk6IE9PLnVpLldpbmRvd01hbmFnZXIgPT4ge1xuXHRyZXR1cm4gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcbn07XG5cbmNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBpbml0V2luZG93TWFuYWdlcigpO1xuXG5leHBvcnQge3dpbmRvd01hbmFnZXJ9O1xuIiwgImltcG9ydCB7UE9SVExFVF9DTEFTUywgV0dfU0tJTn0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmxldCBwb3J0bGV0SWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuY29uc3QgaW5pdEdsb2JhbE1ldGhvZHMgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdHlwZW9mIGdsb2JhbE1ldGhvZHMgPT4ge1xuXHRjb25zdCBnbG9iYWxNZXRob2RzOiB7XG5cdFx0aW5pdCgpOiB2b2lkO1xuXHRcdGRlSW5pdCgpOiB2b2lkO1xuXHR9ID0ge1xuXHRcdGluaXQoKSB7XG5cdFx0XHQvKiBmYWtlICovXG5cdFx0fSxcblx0XHRkZUluaXQoKSB7XG5cdFx0XHQvKiBmYWtlICovXG5cdFx0fSxcblx0fTtcblxuXHRpZiAoV0dfU0tJTiA9PT0gJ3ZlY3RvcicpIHtcblx0XHRwb3J0bGV0SWQgPSAncC1ub3RlVEEnO1xuXG5cdFx0bGV0ICRub3RlVEFUYWI6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblx0XHRnbG9iYWxNZXRob2RzLmluaXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoJG5vdGVUQVRhYiB8fCAhcG9ydGxldElkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG5vdGVUQVRhYjogSFRNTEVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0KHBvcnRsZXRJZCk7XG5cdFx0XHRpZiAoIW5vdGVUQVRhYikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQkbm90ZVRBVGFiID0gJChub3RlVEFUYWIpO1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhd2lraS9jbGFzcy1kb2Ncblx0XHRcdCRub3RlVEFUYWJcblx0XHRcdFx0LnJlbW92ZUNsYXNzKGBtdy1wb3J0bGV0LSR7cG9ydGxldElkfWApXG5cdFx0XHRcdC5hZGRDbGFzcyhbYG13LXBvcnRsZXQtJHtwb3J0bGV0SWQucmVwbGFjZSgncC0nLCAnJyl9YCwgJ3ZlY3Rvci1tZW51LXRhYnMnLCAndmVjdG9yLW1lbnUtdGFicy1sZWdhY3knXSk7XG5cdFx0XHQkYm9keS5maW5kKCcjcC12YXJpYW50cycpLmFmdGVyKCRub3RlVEFUYWIpO1xuXHRcdH07XG5cdFx0Z2xvYmFsTWV0aG9kcy5kZUluaXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoISRub3RlVEFUYWIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0JG5vdGVUQVRhYi5maW5kKCd1bCcpLmVtcHR5KCk7XG5cdFx0XHRpZiAocG9ydGxldElkKSB7XG5cdFx0XHRcdG13LnV0aWwuaGlkZVBvcnRsZXQocG9ydGxldElkKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9IGVsc2UgaWYgKFdHX1NLSU4gPT09ICd2ZWN0b3ItMjAyMicpIHtcblx0XHRwb3J0bGV0SWQgPSAncC1hc3NvY2lhdGVkLXBhZ2VzJztcblxuXHRcdGdsb2JhbE1ldGhvZHMuZGVJbml0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0JGJvZHkuZmluZChQT1JUTEVUX0NMQVNTKS5yZW1vdmUoKTtcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdsb2JhbE1ldGhvZHM7XG59O1xuXG5leHBvcnQge3BvcnRsZXRJZCwgaW5pdEdsb2JhbE1ldGhvZHN9O1xuIiwgImltcG9ydCB7Z2V0Vmlld2VyLCByZXNldEFsbFZpZXdlcn0gZnJvbSAnLi9tb2R1bGVzL3ZpZXdlcic7XG5pbXBvcnQge2luaXRHbG9iYWxNZXRob2RzLCBwb3J0bGV0SWR9IGZyb20gJy4vbW9kdWxlcy9pbml0R2xvYmFsTWV0aG9kcyc7XG5pbXBvcnQge2NoZWNrQTExeUNvbmZpcm1LZXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dlbmVyYXRlUG9ydGxldExpbmt9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dlbmVyYXRlUG9ydGxldExpbmsnO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuL21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXInO1xuXG5sZXQgaXNJbml0OiBib29sZWFuID0gZmFsc2U7XG5cbm13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoKCRjb250ZW50KTogdm9pZCA9PiB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICRjb250ZW50LnBhcmVudHMoJ2JvZHknKTtcblxuXHRpZiAoIWlzSW5pdCkge1xuXHRcdGlzSW5pdCA9IHRydWU7XG5cdFx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cdH1cblxuXHRyZXNldEFsbFZpZXdlcigpO1xuXG5cdGNvbnN0IGdsb2JhbE1ldGhvZHMgPSBpbml0R2xvYmFsTWV0aG9kcygkYm9keSk7XG5cdGdsb2JhbE1ldGhvZHMuZGVJbml0KCk7XG5cdGdsb2JhbE1ldGhvZHMuaW5pdCgpO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKCcubXctaW5kaWNhdG9yW2lkXj1tdy1pbmRpY2F0b3Itbm90ZVRBLV0nKSkge1xuXHRcdGNvbnN0IGhhc2g6IHN0cmluZyA9IGVsZW1lbnQuaWQucmVwbGFjZSgvXm13LWluZGljYXRvci1ub3RlVEEtLywgJycpO1xuXG5cdFx0bGV0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGlmIChwb3J0bGV0SWQpIHtcblx0XHRcdCRlbGVtZW50LmhpZGUoKTtcblxuXHRcdFx0Y29uc3QgJHBvcnRsZXRMaW5rOiBKUXVlcnkgfCB1bmRlZmluZWQgPSBnZW5lcmF0ZVBvcnRsZXRMaW5rKGhhc2gpO1xuXHRcdFx0aWYgKCEkcG9ydGxldExpbmspIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdCRlbGVtZW50ID0gJHBvcnRsZXRMaW5rO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wZW5lckxpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGlmICghY2hlY2tBMTF5Q29uZmlybUtleShldmVudCkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Z2V0Vmlld2VyKCRib2R5LCBoYXNoKS5vcGVuKCk7XG5cdFx0fTtcblx0XHQkZWxlbWVudC5vbignY2xpY2snLCBvcGVuZXJMaXN0ZW5lcik7XG5cdFx0JGVsZW1lbnQub24oJ2tleWRvd24nLCBvcGVuZXJMaXN0ZW5lcik7XG5cdH1cbn0pO1xuIiwgImltcG9ydCB7UE9SVExFVF9DTEFTU30gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtwb3J0bGV0SWR9IGZyb20gJy4uL2luaXRHbG9iYWxNZXRob2RzJztcblxuY29uc3QgZ2VuZXJhdGVQb3J0bGV0TGluayA9IChoYXNoOiBzdHJpbmcpOiBKUXVlcnkgfCB1bmRlZmluZWQgPT4ge1xuXHRpZiAoIXBvcnRsZXRJZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBvcnRsZXRMaW5rOiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICfmsYkv5ryiJywgYGNhLW5vdGVUQS0ke2hhc2h9YCk7XG5cdGlmICghcG9ydGxldExpbmspIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzdHlsZSA9IHtcblx0XHRoZWlnaHQ6ICc4NSUnLFxuXHRcdHBhZGRpbmc6ICcxcHggM3B4Jyxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVhY3QuQ1NTUHJvcGVydGllcztcblxuXHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRjb25zdCAkcG9ydGxldExpbms6IEpRdWVyeSA9ICQocG9ydGxldExpbmspLmFkZENsYXNzKFBPUlRMRVRfQ0xBU1MpO1xuXHQkcG9ydGxldExpbmtcblx0XHQuZmluZCgnYScpXG5cdFx0LmVtcHR5KClcblx0XHQuYXBwZW5kKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Li4uc3R5bGUsXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2QzZTNmNCcsXG5cdFx0XHRcdFx0XHRjb2xvcjogJyMwMDAnLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7J+axiSd9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Li4uc3R5bGUsXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2U5ZTllOScsXG5cdFx0XHRcdFx0XHRjb2xvcjogJyM0MzQzNDMnLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7J+a8oid9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cblx0cmV0dXJuICRwb3J0bGV0TGluaztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVQb3J0bGV0TGlua307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQWtCQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNBbEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLG9CQUFBLEdB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O0FBRUEsWUFBTVksaUJBQWtCQyxXQUF5RDtBQUNoRixZQUFJLEVBQUEsR0FBQ3JCLG1CQUFBc0IscUJBQW9CRCxLQUFLLEdBQUc7QUFDaEM7UUFDRDtBQUVBQSxjQUFNRSxlQUFlO0FBQ3JCbkosa0JBQVVDLE9BQU9DLElBQUksRUFBRWtKLEtBQUs7TUFDN0I7QUFDQTlMLGVBQVMrTCxHQUFHLFNBQVNMLGNBQWM7QUFDbkMxTCxlQUFTK0wsR0FBRyxXQUFXTCxjQUFjO0lBQ3RDO0VBQUEsU0FBQWhGLEtBQUE7QUFBQTRFLGVBQUEzRSxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBNEUsZUFBQTFFLEVBQUE7RUFBQTtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFwaVJldHJ5RmFpbEVycm9yIiwgImxvY2FsaXplIiwgImVuIiwgIkxvYWRpbmciLCAiVGl0bGUiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkVycm9yIiwgImVycm9ycyIsICJjb25zdHJ1Y3RvciIsICJjb25jYXQiLCAibGVuZ3RoIiwgIm5hbWUiLCAidG9KUXVlcnkiLCAiZXJyb3JDb3VudCIsICJlbGVtZW50IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAicmVwbGFjZSIsICJ0b1N0cmluZyIsICJyZWR1Y2UiLCAiZXJyb3IiLCAiaW5kZXgiLCAic3BsaXQiLCAiYWNjdW11bGF0b3IiLCAibGluZSIsICJudW1iZXIiLCAiJGVsZW1lbnQiLCAiJCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBhcnNlV2l0aFJldHJ5IiwgImFyZ3MiLCAiY291bnQiLCAicHJldmlvdXNFcnJvcnMiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgImRlZmVycmVkIiwgInBhcnNlIiwgInRoZW4iLCAicmVzcG9uc2UiLCAicmVzb2x2ZSIsICJjYXRjaCIsICJjb25zb2xlIiwgInN0YWNrIiwgIlN0cmluZyIsICJuZXdSZXNwb25zZSIsICJuZXdFcnJvciIsICJwYXJzZVdpa2l0ZXh0IiwgIlBPUlRMRVRfQ0xBU1MiLCAiV0dfUEFHRV9OQU1FIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfU0tJTiIsICJXR19VU0VSX1ZBUklBTlQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFzc2VydCIsICJ2YWx1ZSIsICJ2YWx1ZU5hbWUiLCAidmlld2VyTWFwIiwgIk1hcCIsICJpbml0V2luZG93TWFuYWdlciIsICJPTyIsICJ1aSIsICJXaW5kb3dNYW5hZ2VyIiwgIndpbmRvd01hbmFnZXIiLCAiZ2V0Vmlld2VyIiwgIiRib2R5IiwgImhhc2giLCAiaGFzIiwgInN0b3JlZFZpZXdlciIsICIkdGFyZ2V0RWxlbWVudCIsICJmaW5kIiwgIk5vdGVUQVZpZXdlciIsICJQcm9jZXNzRGlhbG9nIiwgImRhdGFJc0xvYWRlZCIsICJleGVjdXRlUHJvbWlzZSIsICJtdXRhdGlvbk9ic2VydmVyIiwgIiRyZWFsQ29udGVudCIsICJsYXN0RXJyb3IiLCAibm90ZVRBUGFyc2VUZXh0IiwgInNpemUiLCAiTXV0YXRpb25PYnNlcnZlciIsICJ1cGRhdGVTaXplIiwgImJpbmQiLCAib2JzZXJ2ZSIsICJjaGlsZExpc3QiLCAic3VidHJlZSIsICJpbml0aWFsaXplIiwgInBhbmVsTGF5b3V0IiwgIlBhbmVsTGF5b3V0IiwgImV4cGFuZGVkIiwgInBhZGRlZCIsICJhcHBlbmRUbyIsICJnZXRTZXR1cFByb2Nlc3MiLCAiZGF0YSIsICJuZXh0IiwgImRvRXhlY3V0ZVdyYXAiLCAiZXhlY3V0ZUFjdGlvbiIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgImFjdGlvbiIsICJpc01haW5BY3Rpb24iLCAiZXhlY3V0ZSIsICJkZXN0cm95IiwgImRpc2Nvbm5lY3QiLCAiZ2V0Tm90ZVRBUGFyc2VUZXh0IiwgIiRub3RlVEF0aXRsZSIsICJhY3R1YWxUaXRsZSIsICJ3aWtpdGV4dCIsICJ0aXRsZURlZmVycmVkIiwgInRpdGxlQ29udiIsICJhdHRyIiwgInRpdGxlRGVzYyIsICJ0aXRsZSIsICJ2YXJpYW50IiwgInJlc3VsdEh0bWwiLCAiJG11bHRpVGl0bGUiLCAicGFyc2VIVE1MIiwgInRleHRWYXJpYW50IiwgInZhcmlhbnRUZXh0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiY2hpbGRyZW4iLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInRleHQiLCAidHJpbSIsICJ0ZXh0VmFyaWFudEFycmF5IiwgImVyciIsICJlIiwgImYiLCAidGl0bGVDb252ZXJ0ZWQiLCAibXVsdGlUaXRsZSIsICJPYmplY3QiLCAiaGFzT3duIiwgInZhcmlhbnRzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInZhcmlhbnRzTmFtZSIsICJtYXAiLCAiam9pbiIsICJzdWJJdGVtU2VwYXJhdG9yIiwgIiRub3RlVEFncm91cHMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiJG5vdGVUQWxvY2FsIiwgIiRub3RlVEFsb2NhbHMiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAibG9jYWxEZXNjIiwgImxvY2FsQ29udiIsICJkb0V4ZWN1dGUiLCAiZW1wdHkiLCAiYXBwZW5kIiwgInBhcnNlZEh0bWwiLCAiaHRtbCIsICJhZGRDbGFzcyIsICJtYWtlQ29sbGFwc2libGUiLCAicmVjb3ZlcmFibGUiLCAiZXhlY3V0ZURlZmVycmVkIiwgImFsd2F5cyIsICJzdGF0aWMiLCAiYWN0aW9ucyIsICJsYWJlbCIsICJtc2ciLCAiZmxhZ3MiLCAidmlld2VyIiwgImFkZFdpbmRvd3MiLCAic2V0IiwgInJlc2V0QWxsVmlld2VyIiwgIl9pdGVyYXRvcjYiLCAidmFsdWVzIiwgIl9zdGVwNiIsICJjbGVhciIsICJjbGVhcldpbmRvd3MiLCAicG9ydGxldElkIiwgImluaXRHbG9iYWxNZXRob2RzIiwgImdsb2JhbE1ldGhvZHMiLCAiaW5pdCIsICJkZUluaXQiLCAiJG5vdGVUQVRhYiIsICJub3RlVEFUYWIiLCAidXRpbCIsICJhZGRQb3J0bGV0IiwgInJlbW92ZUNsYXNzIiwgImFmdGVyIiwgImhpZGVQb3J0bGV0IiwgInJlbW92ZSIsICJpbXBvcnRfZXh0X2dhZGdldDYiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImdlbmVyYXRlUG9ydGxldExpbmsiLCAicG9ydGxldExpbmsiLCAiYWRkUG9ydGxldExpbmsiLCAic3R5bGUiLCAiaGVpZ2h0IiwgInBhZGRpbmciLCAiJHBvcnRsZXRMaW5rIiwgImJhY2tncm91bmQiLCAiY29sb3IiLCAiaXNJbml0IiwgImhvb2siLCAiYWRkIiwgIiRjb250ZW50IiwgInBhcmVudHMiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiaWQiLCAiaGlkZSIsICJvcGVuZXJMaXN0ZW5lciIsICJldmVudCIsICJjaGVja0ExMXlDb25maXJtS2V5IiwgInByZXZlbnREZWZhdWx0IiwgIm9wZW4iLCAib24iXQp9Cg==
