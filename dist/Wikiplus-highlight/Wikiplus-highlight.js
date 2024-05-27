/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Wikiplus-highlight}
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

// dist/Wikiplus-highlight/Wikiplus-highlight.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length) return { done: true };
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
      if (!normalCompletion && it.return != null) it.return();
    } finally {
      if (didErr) throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
//! src/Wikiplus-highlight/modules/highlight.ts
var highlight_exports = {};
var import_ext_gadget2;
var init_highlight = __esm({
  "src/Wikiplus-highlight/modules/highlight.ts"() {
    "use strict";
    import_ext_gadget2 = require("ext.gadget.Util");
    /**
     * @name Wikiplus-highlight Wikiplus编辑器的CodeMirror语法高亮扩展
     * @author Bhsd <https://github.com/bhsd-harry>
     * @license GPL-3.0
     */
    ((_window) => {
      const {
        libs
      } = mw, {
        wphl
      } = libs;
      if (wphl !== null && wphl !== void 0 && wphl.version) {
        return;
      }
      const version = "3.0.7";
      libs["wphl"] = {
        version,
        cmVersion: "2.9",
        ...wphl
      };
      const CDN = "//testingcf.jsdelivr.net", MW_CDN = "npm/@bhsd/codemirror-mediawiki@".concat(libs["wphl"].cmVersion || "latest", "/dist/mw.min.js"), REPO_CDN = "npm/wikiplus-highlight";
      (_window = window).CodeMirror6 || (_window.CodeMirror6 = new Promise((resolve) => {
        const script = document.createElement("script");
        script.addEventListener("load", () => {
          resolve(CodeMirror6);
        });
        script.type = "module";
        script.src = "".concat(CDN, "/").concat(MW_CDN);
        document.head.append(script);
      }));
      const {
        wgPageName: page,
        wgNamespaceNumber: ns,
        wgPageContentModel: contentmodel
      } = mw.config.get();
      const CONTENTMODELS = {
        "sanitized-css": "css",
        wikitext: "mediawiki"
      }, EXTS = {
        css: "css",
        js: "javascript",
        json: "json"
      }, NAMESPACES = {
        828: "lua",
        274: "html"
      };
      const getObject = (key) => {
        return JSON.parse(String(localStorage.getItem(key)));
      };
      const getPageMode = /* @__PURE__ */ function() {
        var _ref = _asyncToGenerator(function* (value) {
          if (typeof _WikiplusPages === "object") {
            const pages = Object.values(_WikiplusPages).filter(({
              sectionCache
            }) => {
              return Object.values(sectionCache).includes(value);
            });
            if (pages.some(({
              title
            }) => {
              return !title.endsWith("/doc");
            })) {
              yield mw.loader.using("mediawiki.Title");
            }
            const modes = (0, import_ext_gadget2.uniqueArray)(
              // Replace `new Set()` to avoid polyfilling core-js
              pages.map(({
                title
              }) => {
                var _t$getExtension;
                if (title.endsWith("/doc")) {
                  return "template";
                }
                const t = new mw.Title(title), namespace = t.getNamespaceId();
                if (namespace % 2) {
                  return "mediawiki";
                }
                const mode = EXTS[((_t$getExtension = t.getExtension()) === null || _t$getExtension === void 0 ? void 0 : _t$getExtension.toLowerCase()) || ""] || NAMESPACES[namespace];
                if (mode) {
                  return mode === "javascript" && (namespace === 8 || namespace === 2300) ? "gadget" : mode;
                }
                return namespace === 10 || namespace === 2 ? "template" : "mediawiki";
              })
            );
            if (modes.length === 1) {
              const [mode] = modes;
              if (mode === "gadget") {
                return ["javascript", 8];
              }
              return mode === "template" ? ["mediawiki", 10] : [mode];
            } else if (modes.length === 2) {
              if (modes.includes("javascript") && modes.includes("gadget")) {
                return ["javascript"];
              } else if (modes.includes("mediawiki") && modes.includes("template")) {
                return ["mediawiki"];
              }
            }
          }
          if (ns !== 274 && contentmodel !== "Scribunto" || page.endsWith("/doc")) {
            return [CONTENTMODELS[contentmodel] || contentmodel, contentmodel === "javascript" ? ns : void 0];
          }
          yield mw.loader.using("oojs-ui-windows");
          if (yield OO.ui.confirm(mw.msg("cm-mw-contentmodel"), {
            actions: [{
              label: ns === 274 ? "Widget" : "Lua"
            }, {
              label: "Wikitext",
              action: "accept"
            }]
          })) {
            return ["mediawiki"];
          }
          return [ns === 274 ? "html" : "lua"];
        });
        return function getPageMode2(_x) {
          return _ref.apply(this, arguments);
        };
      }();
      const renderEditor = /* @__PURE__ */ function() {
        var _ref2 = _asyncToGenerator(function* ($target, setting) {
          const cm = yield (yield CodeMirror6).fromTextArea($target[0], ...setting ? ["json"] : yield getPageMode($target.val()));
          if (cm.view) {
            cm.view.dom.id = "Wikiplus-CodeMirror";
          }
          document.querySelector("#Wikiplus-Quickedit-Jump > a").href = "#Wikiplus-CodeMirror";
          if (!setting) {
            const settings = getObject("Wikiplus_Settings"), escToExitQuickEdit = settings && (settings["esc_to_exit_quickedit"] || settings["escToExitQuickEdit"]), submit = (
              /** 提交编辑 @return true */
              () => {
                document.querySelector("#Wikiplus-Quickedit-Submit").dispatchEvent(new MouseEvent("click"));
                return true;
              }
            ), submitMinor = (
              /** 提交小编辑 */
              () => {
                document.querySelector("#Wikiplus-Quickedit-MinorEdit").checked = true;
                return submit();
              }
            ), escapeEdit = (
              /** 按下Esc键退出编辑 */
              () => {
                document.querySelector("#Wikiplus-Quickedit-Back").dispatchEvent(new MouseEvent("click"));
                return true;
              }
            );
            cm.extraKeys([{
              key: "Mod-S",
              run: submit
            }, {
              key: "Shift-Mod-S",
              run: submitMinor
            }, ...escToExitQuickEdit === true || escToExitQuickEdit === "true" ? [{
              key: "Esc",
              run: escapeEdit
            }] : []]);
          }
          const oldKey = "Wikiplus-highlight-addons", oldPrefs = getObject(oldKey), mapping = {
            activeLine: "highlightActiveLine",
            trailingspace: "highlightTrailingWhitespace",
            matchBrackets: "bracketMatching",
            closeBrackets: "closeBrackets",
            matchTags: "tagMatching",
            fold: "codeFolding",
            wikiEditor: "wikiEditor",
            escape: "escape",
            contextmenu: "openLinks",
            lint: "lint"
          };
          localStorage.removeItem(oldKey);
          if (oldPrefs) {
            const obj = {};
            var _iterator = _createForOfIteratorHelper(oldPrefs), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                const k = _step.value;
                if (k in mapping) {
                  obj[mapping[k]] = true;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            cm.prefer(obj);
          }
        });
        return function renderEditor2(_x2, _x3) {
          return _ref2.apply(this, arguments);
        };
      }();
      const observer = new MutationObserver((records) => {
        const $editArea = $(records.flatMap(({
          addedNodes
        }) => {
          return [...addedNodes];
        })).find("#Wikiplus-Quickedit, #Wikiplus-Setting-Input");
        if ($editArea.length > 0) {
          void renderEditor($editArea, $editArea.attr("id") === "Wikiplus-Setting-Input");
        }
      });
      observer.observe(document.body, {
        childList: true
      });
      mw.loader.load("".concat(CDN, "/").concat(REPO_CDN, "@").concat(version, "/styles.min.css"), "text/css");
    })();
  }
});
//! src/Wikiplus-highlight/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("Wikiplus-highlight/2.0");
//! src/Wikiplus-highlight/modules/checkDependencies.ts
var checkDependencies = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* () {
    if (!mw.user.options.get("gadget-Wikiplus")) {
      void api.postWithEditToken({
        action: "options",
        change: "gadget-Wikiplus=1"
      });
      yield mw.loader.using("ext.gadget.Wikiplus");
    }
  });
  return function checkDependencies2() {
    return _ref3.apply(this, arguments);
  };
}();
//! src/Wikiplus-highlight/Wikiplus-highlight.ts
(function() {
  var _WikiplusHighlight = _asyncToGenerator(function* () {
    void checkDependencies();
    const {
      wgAction,
      wgIsArticle
    } = mw.config.get();
    if (wgAction !== "view" || !wgIsArticle) {
      return;
    }
    const {
      "visualeditor-enable": isVeEnable
    } = mw.user.options.get();
    if (isVeEnable) {
      yield mw.loader.using("ext.visualEditor.core");
    }
    if (!("ontouchstart" in document)) {
      yield Promise.resolve().then(() => (init_highlight(), highlight_exports));
    }
  });
  function WikiplusHighlight() {
    return _WikiplusHighlight.apply(this, arguments);
  }
  return WikiplusHighlight;
})()();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2lwbHVzLWhpZ2hsaWdodC9tb2R1bGVzL2hpZ2hsaWdodC50cyIsICJzcmMvV2lraXBsdXMtaGlnaGxpZ2h0L21vZHVsZXMvYXBpLnRzIiwgInNyYy9XaWtpcGx1cy1oaWdobGlnaHQvbW9kdWxlcy9jaGVja0RlcGVuZGVuY2llcy50cyIsICJzcmMvV2lraXBsdXMtaGlnaGxpZ2h0L1dpa2lwbHVzLWhpZ2hsaWdodC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBAbmFtZSBXaWtpcGx1cy1oaWdobGlnaHQgV2lraXBsdXPnvJbovpHlmajnmoRDb2RlTWlycm9y6K+t5rOV6auY5Lqu5omp5bGVXG4gKiBAYXV0aG9yIEJoc2QgPGh0dHBzOi8vZ2l0aHViLmNvbS9iaHNkLWhhcnJ5PlxuICogQGxpY2Vuc2UgR1BMLTMuMFxuICovXG5cbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbigoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHtsaWJzfSA9IG13LFxuXHRcdHt3cGhsfSA9IGxpYnM7XG5cdGlmICh3cGhsPy52ZXJzaW9uKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHZlcnNpb24gPSAnMy4wLjcnO1xuXHRsaWJzWyd3cGhsJ10gPSB7dmVyc2lvbiwgY21WZXJzaW9uOiAnMi45JywgLi4ud3BobH07IC8vIOW8gOWni+WKoOi9vVxuXG5cdC8vIOi3r+W+hFxuXHRjb25zdCBDRE4gPSAnLy90ZXN0aW5nY2YuanNkZWxpdnIubmV0Jyxcblx0XHRNV19DRE4gPSBgbnBtL0BiaHNkL2NvZGVtaXJyb3ItbWVkaWF3aWtpQCR7bGlic1snd3BobCddLmNtVmVyc2lvbiB8fCAnbGF0ZXN0J30vZGlzdC9tdy5taW4uanNgLFxuXHRcdFJFUE9fQ0ROID0gJ25wbS93aWtpcGx1cy1oaWdobGlnaHQnO1xuXG5cdHdpbmRvdy5Db2RlTWlycm9yNiB8fD0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcblx0XHRcdHJlc29sdmUoQ29kZU1pcnJvcjYpO1xuXHRcdH0pO1xuXHRcdHNjcmlwdC50eXBlID0gJ21vZHVsZSc7XG5cdFx0c2NyaXB0LnNyYyA9IGAke0NETn0vJHtNV19DRE59YDtcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZChzY3JpcHQpO1xuXHR9KTtcblxuXHRjb25zdCB7d2dQYWdlTmFtZTogcGFnZSwgd2dOYW1lc3BhY2VOdW1iZXI6IG5zLCB3Z1BhZ2VDb250ZW50TW9kZWw6IGNvbnRlbnRtb2RlbH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgQ09OVEVOVE1PREVMUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcblx0XHRcdCdzYW5pdGl6ZWQtY3NzJzogJ2NzcycsXG5cdFx0XHR3aWtpdGV4dDogJ21lZGlhd2lraScsXG5cdFx0fSxcblx0XHRFWFRTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuXHRcdFx0Y3NzOiAnY3NzJyxcblx0XHRcdGpzOiAnamF2YXNjcmlwdCcsXG5cdFx0XHRqc29uOiAnanNvbicsXG5cdFx0fSxcblx0XHROQU1FU1BBQ0VTOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuXHRcdFx0ODI4OiAnbHVhJyxcblx0XHRcdDI3NDogJ2h0bWwnLFxuXHRcdH07XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0Y29uc3QgZ2V0T2JqZWN0ID0gKGtleTogc3RyaW5nKTogYW55ID0+IHtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZShTdHJpbmcobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiDmo4Dmn6XpobXpnaLor63oqIDnsbvlnotcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIOmhtemdouWGheWuuVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlfVxuXHQgKi9cblx0Y29uc3QgZ2V0UGFnZU1vZGUgPSBhc3luYyAodmFsdWU6IHN0cmluZyk6IFByb21pc2U8W3N0cmluZywgKG51bWJlciB8IHVuZGVmaW5lZCk/XT4gPT4ge1xuXHRcdGlmICh0eXBlb2YgX1dpa2lwbHVzUGFnZXMgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRjb25zdCBwYWdlcyA9IE9iamVjdC52YWx1ZXMoX1dpa2lwbHVzUGFnZXMpLmZpbHRlcigoe3NlY3Rpb25DYWNoZX0pID0+IHtcblx0XHRcdFx0cmV0dXJuIE9iamVjdC52YWx1ZXMoc2VjdGlvbkNhY2hlKS5pbmNsdWRlcyh2YWx1ZSk7XG5cdFx0XHR9KTtcblx0XHRcdGlmIChcblx0XHRcdFx0cGFnZXMuc29tZSgoe3RpdGxlfSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAhdGl0bGUuZW5kc1dpdGgoJy9kb2MnKTtcblx0XHRcdFx0fSlcblx0XHRcdCkge1xuXHRcdFx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ21lZGlhd2lraS5UaXRsZScpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbW9kZXMgPSB1bmlxdWVBcnJheShcblx0XHRcdFx0Ly8gUmVwbGFjZSBgbmV3IFNldCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0XHRcdHBhZ2VzLm1hcCgoe3RpdGxlfSkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aXRsZS5lbmRzV2l0aCgnL2RvYycpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ3RlbXBsYXRlJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3QgdCA9IG5ldyBtdy5UaXRsZSh0aXRsZSksXG5cdFx0XHRcdFx0XHRuYW1lc3BhY2UgPSB0LmdldE5hbWVzcGFjZUlkKCk7XG5cdFx0XHRcdFx0aWYgKG5hbWVzcGFjZSAlIDIpIHtcblx0XHRcdFx0XHRcdHJldHVybiAnbWVkaWF3aWtpJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3QgbW9kZSA9IEVYVFNbdC5nZXRFeHRlbnNpb24oKT8udG9Mb3dlckNhc2UoKSB8fCAnJ10gfHwgTkFNRVNQQUNFU1tuYW1lc3BhY2VdO1xuXHRcdFx0XHRcdGlmIChtb2RlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbW9kZSA9PT0gJ2phdmFzY3JpcHQnICYmIChuYW1lc3BhY2UgPT09IDggfHwgbmFtZXNwYWNlID09PSAyMzAwKSA/ICdnYWRnZXQnIDogbW9kZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIG5hbWVzcGFjZSA9PT0gMTAgfHwgbmFtZXNwYWNlID09PSAyID8gJ3RlbXBsYXRlJyA6ICdtZWRpYXdpa2knO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHRcdGlmIChtb2Rlcy5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0Y29uc3QgW21vZGVdID0gbW9kZXM7XG5cdFx0XHRcdGlmIChtb2RlID09PSAnZ2FkZ2V0Jykge1xuXHRcdFx0XHRcdHJldHVybiBbJ2phdmFzY3JpcHQnLCA4XTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbW9kZSA9PT0gJ3RlbXBsYXRlJyA/IFsnbWVkaWF3aWtpJywgMTBdIDogW21vZGUhXTtcblx0XHRcdH0gZWxzZSBpZiAobW9kZXMubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRcdGlmIChtb2Rlcy5pbmNsdWRlcygnamF2YXNjcmlwdCcpICYmIG1vZGVzLmluY2x1ZGVzKCdnYWRnZXQnKSkge1xuXHRcdFx0XHRcdHJldHVybiBbJ2phdmFzY3JpcHQnXTtcblx0XHRcdFx0fSBlbHNlIGlmIChtb2Rlcy5pbmNsdWRlcygnbWVkaWF3aWtpJykgJiYgbW9kZXMuaW5jbHVkZXMoJ3RlbXBsYXRlJykpIHtcblx0XHRcdFx0XHRyZXR1cm4gWydtZWRpYXdpa2knXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoKG5zICE9PSAyNzQgJiYgY29udGVudG1vZGVsICE9PSAnU2NyaWJ1bnRvJykgfHwgcGFnZS5lbmRzV2l0aCgnL2RvYycpKSB7XG5cdFx0XHRyZXR1cm4gW0NPTlRFTlRNT0RFTFNbY29udGVudG1vZGVsXSB8fCBjb250ZW50bW9kZWwsIGNvbnRlbnRtb2RlbCA9PT0gJ2phdmFzY3JpcHQnID8gbnMgOiB1bmRlZmluZWRdO1xuXHRcdH1cblx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ29vanMtdWktd2luZG93cycpO1xuXHRcdGlmIChcblx0XHRcdGF3YWl0IE9PLnVpLmNvbmZpcm0obXcubXNnKCdjbS1tdy1jb250ZW50bW9kZWwnKSwge1xuXHRcdFx0XHRhY3Rpb25zOiBbe2xhYmVsOiBucyA9PT0gMjc0ID8gJ1dpZGdldCcgOiAnTHVhJ30sIHtsYWJlbDogJ1dpa2l0ZXh0JywgYWN0aW9uOiAnYWNjZXB0J31dLFxuXHRcdFx0fSlcblx0XHQpIHtcblx0XHRcdHJldHVybiBbJ21lZGlhd2lraSddO1xuXHRcdH1cblx0XHRyZXR1cm4gW25zID09PSAyNzQgPyAnaHRtbCcgOiAnbHVhJ107XG5cdH07XG5cblx0LyoqXG5cdCAqIOa4suafk+e8lui+keWZqFxuXHQgKlxuXHQgKiBAcGFyYW0ge0pRdWVyeTxIVE1MVGV4dEFyZWFFbGVtZW50Pn0gJHRhcmdldCDnm67moIfnvJbovpHmoYZcblx0ICogQHBhcmFtIHtib29sZWFufSBzZXR0aW5nIOaYr+WQpuaYr1dpa2lwbHVz6K6+572u77yI5L2/55SoanNvbuivreazle+8iVxuXHQgKi9cblx0Y29uc3QgcmVuZGVyRWRpdG9yID0gYXN5bmMgKCR0YXJnZXQ6IEpRdWVyeTxIVE1MVGV4dEFyZWFFbGVtZW50Piwgc2V0dGluZzogYm9vbGVhbik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGNvbnN0IGNtID0gYXdhaXQgKFxuXHRcdFx0YXdhaXQgQ29kZU1pcnJvcjZcblx0XHQpLmZyb21UZXh0QXJlYSgkdGFyZ2V0WzBdISwgLi4uKHNldHRpbmcgPyAoWydqc29uJ10gYXMgW3N0cmluZ10pIDogYXdhaXQgZ2V0UGFnZU1vZGUoJHRhcmdldC52YWwoKSEpKSk7XG5cdFx0aWYgKGNtLnZpZXcpIHtcblx0XHRcdGNtLnZpZXcuZG9tLmlkID0gJ1dpa2lwbHVzLUNvZGVNaXJyb3InO1xuXHRcdH1cblxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEFuY2hvckVsZW1lbnQ+KCcjV2lraXBsdXMtUXVpY2tlZGl0LUp1bXAgPiBhJykhLmhyZWYgPSAnI1dpa2lwbHVzLUNvZGVNaXJyb3InO1xuXG5cdFx0aWYgKCFzZXR0aW5nKSB7XG5cdFx0XHQvLyDmma7pgJpXaWtpcGx1c+e8lui+keWMulxuXHRcdFx0Y29uc3Qgc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgbnVsbCA9IGdldE9iamVjdCgnV2lraXBsdXNfU2V0dGluZ3MnKSxcblx0XHRcdFx0ZXNjVG9FeGl0UXVpY2tFZGl0ID0gc2V0dGluZ3MgJiYgKHNldHRpbmdzWydlc2NfdG9fZXhpdF9xdWlja2VkaXQnXSB8fCBzZXR0aW5nc1snZXNjVG9FeGl0UXVpY2tFZGl0J10pLFxuXHRcdFx0XHRzdWJtaXQgPSAvKiog5o+Q5Lqk57yW6L6RIEByZXR1cm4gdHJ1ZSAqLyAoKTogdHJ1ZSA9PiB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQnKSEuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudCgnY2xpY2snKSk7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN1Ym1pdE1pbm9yID0gLyoqIOaPkOS6pOWwj+e8lui+kSAqLyAoKTogdHJ1ZSA9PiB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignI1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKSEuY2hlY2tlZCA9IHRydWU7XG5cdFx0XHRcdFx0cmV0dXJuIHN1Ym1pdCgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlc2NhcGVFZGl0ID0gLyoqIOaMieS4i0VzY+mUrumAgOWHuue8lui+kSAqLyAoKTogdHJ1ZSA9PiB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1dpa2lwbHVzLVF1aWNrZWRpdC1CYWNrJykhLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoJ2NsaWNrJykpO1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9O1xuXHRcdFx0Y20uZXh0cmFLZXlzKFtcblx0XHRcdFx0e2tleTogJ01vZC1TJywgcnVuOiBzdWJtaXR9LFxuXHRcdFx0XHR7a2V5OiAnU2hpZnQtTW9kLVMnLCBydW46IHN1Ym1pdE1pbm9yfSxcblx0XHRcdFx0Li4uKGVzY1RvRXhpdFF1aWNrRWRpdCA9PT0gdHJ1ZSB8fCBlc2NUb0V4aXRRdWlja0VkaXQgPT09ICd0cnVlJ1xuXHRcdFx0XHRcdD8gW3trZXk6ICdFc2MnLCBydW46IGVzY2FwZUVkaXR9XVxuXHRcdFx0XHRcdDogW10pLFxuXHRcdFx0XSk7XG5cdFx0fVxuXG5cdFx0LyoqIEB0b2RvIOS7peS4i+i/h+a4oeS7o+eggea3u+WKoOS6jjIwMjQtMDItMDfvvIzlsIbkuo7kuIDmrrXml7bpl7TlkI7lvIPnlKggKi9cblx0XHRjb25zdCBvbGRLZXkgPSAnV2lraXBsdXMtaGlnaGxpZ2h0LWFkZG9ucycsXG5cdFx0XHRvbGRQcmVmczogc3RyaW5nW10gfCBudWxsID0gZ2V0T2JqZWN0KG9sZEtleSksXG5cdFx0XHRtYXBwaW5nOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuXHRcdFx0XHRhY3RpdmVMaW5lOiAnaGlnaGxpZ2h0QWN0aXZlTGluZScsXG5cdFx0XHRcdHRyYWlsaW5nc3BhY2U6ICdoaWdobGlnaHRUcmFpbGluZ1doaXRlc3BhY2UnLFxuXHRcdFx0XHRtYXRjaEJyYWNrZXRzOiAnYnJhY2tldE1hdGNoaW5nJyxcblx0XHRcdFx0Y2xvc2VCcmFja2V0czogJ2Nsb3NlQnJhY2tldHMnLFxuXHRcdFx0XHRtYXRjaFRhZ3M6ICd0YWdNYXRjaGluZycsXG5cdFx0XHRcdGZvbGQ6ICdjb2RlRm9sZGluZycsXG5cdFx0XHRcdHdpa2lFZGl0b3I6ICd3aWtpRWRpdG9yJyxcblx0XHRcdFx0ZXNjYXBlOiAnZXNjYXBlJyxcblx0XHRcdFx0Y29udGV4dG1lbnU6ICdvcGVuTGlua3MnLFxuXHRcdFx0XHRsaW50OiAnbGludCcsXG5cdFx0XHR9O1xuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG9sZEtleSk7XG5cdFx0aWYgKG9sZFByZWZzKSB7XG5cdFx0XHRjb25zdCBvYmo6IFJlY29yZDxzdHJpbmcsIHRydWU+ID0ge307XG5cdFx0XHRmb3IgKGNvbnN0IGsgb2Ygb2xkUHJlZnMpIHtcblx0XHRcdFx0aWYgKGsgaW4gbWFwcGluZykge1xuXHRcdFx0XHRcdG9ialttYXBwaW5nW2tdIV0gPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNtLnByZWZlcihvYmopO1xuXHRcdH1cblx0fTtcblxuXHQvLyDnm5Hop4YgV2lraXBsdXMg57yW6L6R5qGGXG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHJlY29yZHMpID0+IHtcblx0XHRjb25zdCAkZWRpdEFyZWEgPSAkKFxuXHRcdFx0cmVjb3Jkcy5mbGF0TWFwKCh7YWRkZWROb2Rlc30pID0+IHtcblx0XHRcdFx0cmV0dXJuIFsuLi5hZGRlZE5vZGVzXTtcblx0XHRcdH0pXG5cdFx0KS5maW5kPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCcjV2lraXBsdXMtUXVpY2tlZGl0LCAjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpO1xuXHRcdGlmICgkZWRpdEFyZWEubGVuZ3RoID4gMCkge1xuXHRcdFx0dm9pZCByZW5kZXJFZGl0b3IoJGVkaXRBcmVhLCAkZWRpdEFyZWEuYXR0cignaWQnKSA9PT0gJ1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKTtcblx0XHR9XG5cdH0pO1xuXHRvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtjaGlsZExpc3Q6IHRydWV9KTtcblxuXHRtdy5sb2FkZXIubG9hZChgJHtDRE59LyR7UkVQT19DRE59QCR7dmVyc2lvbn0vc3R5bGVzLm1pbi5jc3NgLCAndGV4dC9jc3MnKTtcbn0pKCk7XG5cbmV4cG9ydCB7fTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1dpa2lwbHVzLWhpZ2hsaWdodC8yLjAnKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGNoZWNrRGVwZW5kZW5jaWVzID0gYXN5bmMgKCkgPT4ge1xuXHRpZiAoIW13LnVzZXIub3B0aW9ucy5nZXQoJ2dhZGdldC1XaWtpcGx1cycpKSB7XG5cdFx0dm9pZCBhcGkucG9zdFdpdGhFZGl0VG9rZW4oe1xuXHRcdFx0YWN0aW9uOiAnb3B0aW9ucycsXG5cdFx0XHRjaGFuZ2U6ICdnYWRnZXQtV2lraXBsdXM9MScsXG5cdFx0fSBhcyBBcGlPcHRpb25zUGFyYW1zKTtcblxuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LmdhZGdldC5XaWtpcGx1cycpO1xuXHR9XG59O1xuXG5leHBvcnQge2NoZWNrRGVwZW5kZW5jaWVzfTtcbiIsICJpbXBvcnQgJy4vV2lraXBsdXMtaGlnaGxpZ2h0Lmxlc3MnO1xuaW1wb3J0IHtjaGVja0RlcGVuZGVuY2llc30gZnJvbSAnLi9tb2R1bGVzL2NoZWNrRGVwZW5kZW5jaWVzJztcblxuKGFzeW5jIGZ1bmN0aW9uIFdpa2lwbHVzSGlnaGxpZ2h0KCkge1xuXHR2b2lkIGNoZWNrRGVwZW5kZW5jaWVzKCk7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dJc0FydGljbGV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhd2dJc0FydGljbGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7J3Zpc3VhbGVkaXRvci1lbmFibGUnOiBpc1ZlRW5hYmxlfSA9IG13LnVzZXIub3B0aW9ucy5nZXQoKSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcblxuXHQvKiBzZWUgPGh0dHBzOi8vZ2l0aHViLmNvbS9XaWtpcGx1cy9XaWtpcGx1cy9pc3N1ZXMvNjU+ICovXG5cdGlmIChpc1ZlRW5hYmxlKSB7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQudmlzdWFsRWRpdG9yLmNvcmUnKTtcblx0fVxuXG5cdGlmICghKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50KSkge1xuXHRcdGF3YWl0IGltcG9ydCgnLi9tb2R1bGVzL2hpZ2hsaWdodCcpO1xuXHR9XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFNQUM7QUFOQSxJQUFBQyxpQkFBQUMsTUFBQTtFQUFBLGdEQUFBO0FBQUE7QUFNQUYseUJBQTBCRyxRQUFBLGlCQUFBO0lBTjFCOzs7OztBQVFBLEtBQUNDLGFBQVk7QUFDWixZQUFNO1FBQUNDO01BQUksSUFBSUMsSUFDZDtRQUFDQztNQUFJLElBQUlGO0FBQ1YsVUFBSUUsU0FBQSxRQUFBQSxTQUFBLFVBQUFBLEtBQU1DLFNBQVM7QUFDbEI7TUFDRDtBQUNBLFlBQU1BLFVBQVU7QUFDaEJILFdBQUssTUFBTSxJQUFJO1FBQUNHO1FBQVNDLFdBQVc7UUFBTyxHQUFHRjtNQUFJO0FBR2xELFlBQU1HLE1BQU0sNEJBQ1hDLFNBQUEsa0NBQUFDLE9BQTJDUCxLQUFLLE1BQU0sRUFBRUksYUFBYSxVQUFRLGlCQUFBLEdBQzdFSSxXQUFXO0FBRVosT0FBQVQsVUFBQVUsUUFBT0MsZ0JBQVBYLFFBQU9XLGNBQWdCLElBQUlDLFFBQVNDLGFBQVk7QUFDL0MsY0FBTUMsU0FBU0MsU0FB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RUFBQTs7OzZDQ0NMLGFBQW1DO0FBQ25DLFNBQUttRSxrQkFBa0I7QUFDdkIsVUFBTTtNQUFDTTtNQUFVQztJQUFXLElBQUl6SixHQUFHMEIsT0FBT0MsSUFBSTtBQUM5QyxRQUFJNkgsYUFBYSxVQUFVLENBQUNDLGFBQWE7QUFDeEM7SUFDRDtBQUVBLFVBQU07TUFBQyx1QkFBdUJDO0lBQVUsSUFBSTFKLEdBQUdvSixLQUFLQyxRQUFRMUgsSUFBSTtBQUdoRSxRQUFJK0gsWUFBWTtBQUNmLFlBQU0xSixHQUFHd0QsT0FBT0MsTUFBTSx1QkFBdUI7SUFDOUM7QUFFQSxRQUFJLEVBQUUsa0JBQWtCNUMsV0FBVztBQUNsQyxZQUFNSCxRQUFBQyxRQUFBLEVBQUFnSixLQUFBLE9BQUFoSyxlQUFBLEdBQUFGLGtCQUFBO0lBQ1A7RUFDRCxDQUFBO0FBQUEsV0FqQmdCbUssb0JBQUE7QUFBQSxXQUFBQyxtQkFBQS9FLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsU0FBQTZFO0FBQUEsR0FBQSxFQWlCYjsiLAogICJuYW1lcyI6IFsiaGlnaGxpZ2h0X2V4cG9ydHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImluaXRfaGlnaGxpZ2h0IiwgIl9fZXNtIiwgInJlcXVpcmUiLCAiX3dpbmRvdyIsICJsaWJzIiwgIm13IiwgIndwaGwiLCAidmVyc2lvbiIsICJjbVZlcnNpb24iLCAiQ0ROIiwgIk1XX0NETiIsICJjb25jYXQiLCAiUkVQT19DRE4iLCAid2luZG93IiwgIkNvZGVNaXJyb3I2IiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJzY3JpcHQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJhZGRFdmVudExpc3RlbmVyIiwgInR5cGUiLCAic3JjIiwgImhlYWQiLCAiYXBwZW5kIiwgIndnUGFnZU5hbWUiLCAicGFnZSIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJucyIsICJ3Z1BhZ2VDb250ZW50TW9kZWwiLCAiY29udGVudG1vZGVsIiwgImNvbmZpZyIsICJnZXQiLCAiQ09OVEVOVE1PREVMUyIsICJ3aWtpdGV4dCIsICJFWFRTIiwgImNzcyIsICJqcyIsICJqc29uIiwgIk5BTUVTUEFDRVMiLCAiZ2V0T2JqZWN0IiwgImtleSIsICJKU09OIiwgInBhcnNlIiwgIlN0cmluZyIsICJsb2NhbFN0b3JhZ2UiLCAiZ2V0SXRlbSIsICJnZXRQYWdlTW9kZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInZhbHVlIiwgIl9XaWtpcGx1c1BhZ2VzIiwgInBhZ2VzIiwgIk9iamVjdCIsICJ2YWx1ZXMiLCAiZmlsdGVyIiwgInNlY3Rpb25DYWNoZSIsICJpbmNsdWRlcyIsICJzb21lIiwgInRpdGxlIiwgImVuZHNXaXRoIiwgImxvYWRlciIsICJ1c2luZyIsICJtb2RlcyIsICJ1bmlxdWVBcnJheSIsICJtYXAiLCAiX3QkZ2V0RXh0ZW5zaW9uIiwgInQiLCAiVGl0bGUiLCAibmFtZXNwYWNlIiwgImdldE5hbWVzcGFjZUlkIiwgIm1vZGUiLCAiZ2V0RXh0ZW5zaW9uIiwgInRvTG93ZXJDYXNlIiwgImxlbmd0aCIsICJPTyIsICJ1aSIsICJjb25maXJtIiwgIm1zZyIsICJhY3Rpb25zIiwgImxhYmVsIiwgImFjdGlvbiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAicmVuZGVyRWRpdG9yIiwgIl9yZWYyIiwgIiR0YXJnZXQiLCAic2V0dGluZyIsICJjbSIsICJmcm9tVGV4dEFyZWEiLCAidmFsIiwgInZpZXciLCAiZG9tIiwgImlkIiwgInF1ZXJ5U2VsZWN0b3IiLCAiaHJlZiIsICJzZXR0aW5ncyIsICJlc2NUb0V4aXRRdWlja0VkaXQiLCAic3VibWl0IiwgImRpc3BhdGNoRXZlbnQiLCAiTW91c2VFdmVudCIsICJzdWJtaXRNaW5vciIsICJjaGVja2VkIiwgImVzY2FwZUVkaXQiLCAiZXh0cmFLZXlzIiwgInJ1biIsICJvbGRLZXkiLCAib2xkUHJlZnMiLCAibWFwcGluZyIsICJhY3RpdmVMaW5lIiwgInRyYWlsaW5nc3BhY2UiLCAibWF0Y2hCcmFja2V0cyIsICJjbG9zZUJyYWNrZXRzIiwgIm1hdGNoVGFncyIsICJmb2xkIiwgIndpa2lFZGl0b3IiLCAiZXNjYXBlIiwgImNvbnRleHRtZW51IiwgImxpbnQiLCAicmVtb3ZlSXRlbSIsICJvYmoiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImsiLCAiZXJyIiwgImUiLCAiZiIsICJwcmVmZXIiLCAiX3gyIiwgIl94MyIsICJvYnNlcnZlciIsICJNdXRhdGlvbk9ic2VydmVyIiwgInJlY29yZHMiLCAiJGVkaXRBcmVhIiwgIiQiLCAiZmxhdE1hcCIsICJhZGRlZE5vZGVzIiwgImZpbmQiLCAiYXR0ciIsICJvYnNlcnZlIiwgImJvZHkiLCAiY2hpbGRMaXN0IiwgImxvYWQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjaGVja0RlcGVuZGVuY2llcyIsICJfcmVmMyIsICJ1c2VyIiwgIm9wdGlvbnMiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiY2hhbmdlIiwgIndnQWN0aW9uIiwgIndnSXNBcnRpY2xlIiwgImlzVmVFbmFibGUiLCAidGhlbiIsICJXaWtpcGx1c0hpZ2hsaWdodCIsICJfV2lraXBsdXNIaWdobGlnaHQiXQp9Cg==
