/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wiktionary.org/wiki/MediaWiki:Gadget-CodeLinks.js}
 * @base {@link https://zh.wiktionary.org/wiki/MediaWiki:Gadget-CodeLinks.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/CodeLinks}
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

// dist/CodeLinks/CodeLinks.js
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
//! src/CodeLinks/modules/addLink.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
var addLink = (element, targetTitle) => {
  if (!(element instanceof Element)) {
    throw new TypeError("Expected Element interface");
  }
  const {
    firstChild
  } = element;
  if (!(firstChild instanceof Text)) {
    throw new TypeError("Expected Text interface");
  }
  element.append(/* @__PURE__ */ import_ext_gadget.default.createElement("a", {
    href: mw.util.getUrl(targetTitle)
  }, firstChild));
};
//! src/CodeLinks/CodeLinks.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/CodeLinks/modules/constant.ts
/**
 * @preserve
 * @author John Gruber
 * @copyright 2002–2023 The Daring Fireball Company LLC.
 * @see {@link https://daringfireball.net/2010/07/improved_regex_for_matching_urls}
 */
var REGEX_URL = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()[\]{};:'".,<>?«»“”‘’]))/i;
//! src/CodeLinks/modules/processComment.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
var processComment = (element) => {
  var _index, _ref;
  const {
    firstChild
  } = element;
  if (!(firstChild instanceof Text)) {
    throw new TypeError("Expected Text interface");
  }
  const {
    textContent
  } = firstChild;
  if (!textContent) {
    return;
  }
  const templateMatch = /(\{\{(?:#invoke:)?)([^|{}[\]\n#]+)(?=\||}})/i.exec(textContent);
  const wikilinkMatch = /\[\[([^|{}[\]\n]+)?(?:\|.*?)?]]/.exec(textContent);
  const urlMatch = REGEX_URL.exec(textContent);
  if (!(templateMatch || wikilinkMatch || urlMatch)) {
    return;
  }
  const link = /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
    className: "code-link"
  });
  let linkText = "";
  let start = (_index = (_ref = wikilinkMatch || templateMatch || urlMatch) === null || _ref === void 0 ? void 0 : _ref.index) !== null && _index !== void 0 ? _index : 0;
  if (urlMatch) {
    const [url] = urlMatch;
    linkText = url;
    link.href = url;
  } else {
    let fullPageName = "";
    if (wikilinkMatch) {
      [linkText] = wikilinkMatch;
      fullPageName = wikilinkMatch[1];
    } else if (templateMatch) {
      const prefix = templateMatch[1];
      const pageName = templateMatch[2];
      fullPageName = "".concat(prefix === "{{#invoke:" ? "Module:" : "Template:").concat(pageName);
      linkText = pageName;
      link.title = fullPageName;
      start += prefix.length;
    }
    link.href = mw.util.getUrl(fullPageName);
  }
  link.append(document.createTextNode(linkText));
  firstChild.before(link);
  const afterLink = textContent.slice(Math.max(0, start + linkText.length));
  firstChild.textContent = afterLink;
  const beforeLink = textContent.slice(0, Math.max(0, start));
  element.insertBefore(document.createTextNode(beforeLink), link);
};
//! src/CodeLinks/CodeLinks.ts
void (0, import_ext_gadget3.getBody)().then(function codeLinks($body) {
  var _iterator2 = _createForOfIteratorHelper($body.find(".mw-highlight")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const codeBlock = _step2.value;
      for (var _i2 = 0, _arr2 = ["c", "c1", "cm"]; _i2 < _arr2.length; _i2++) {
        const commentClass = _arr2[_i2];
        var _iterator5 = _createForOfIteratorHelper(codeBlock.querySelectorAll(".".concat(commentClass))), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            const comment = _step5.value;
            processComment(comment);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  const classes = {
    identifier: "n",
    functionName: "nb",
    singleQuoteString: "s1",
    doubleQuoteString: "s2"
  };
  const moduleNameElementArray = [];
  var _iterator3 = _createForOfIteratorHelper($body.find(".".concat(classes.functionName))), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var _functionNameElement$, _nextElement$firstChi, _nextElement$firstChi3, _nextElementFirstValu;
      const functionNameElement = _step3.value;
      const text = (_functionNameElement$ = functionNameElement.firstChild) === null || _functionNameElement$ === void 0 ? void 0 : _functionNameElement$.nodeValue;
      if (text !== "require") {
        continue;
      }
      let nextElement = functionNameElement.nextElementSibling;
      if (!nextElement) {
        continue;
      }
      let nextElementFirstValue = (_nextElement$firstChi = nextElement.firstChild) === null || _nextElement$firstChi === void 0 ? void 0 : _nextElement$firstChi.nodeValue;
      const hasParenthesis = nextElementFirstValue === "(";
      if (hasParenthesis) {
        var _nextElement$firstChi2;
        nextElement = nextElement.nextElementSibling;
        if (!nextElement) {
          continue;
        }
        nextElementFirstValue = (_nextElement$firstChi2 = nextElement.firstChild) === null || _nextElement$firstChi2 === void 0 ? void 0 : _nextElement$firstChi2.nodeValue;
      }
      const {
        classList
      } = nextElement;
      if (!(classList.contains(classes.singleQuoteString) || classList.contains(classes.doubleQuoteString))) {
        continue;
      }
      const element = nextElement;
      const elementValue = nextElementFirstValue;
      if (!elementValue) {
        continue;
      }
      nextElement = nextElement.nextElementSibling;
      if (!nextElement) {
        continue;
      }
      nextElementFirstValue = (_nextElement$firstChi3 = nextElement.firstChild) === null || _nextElement$firstChi3 === void 0 ? void 0 : _nextElement$firstChi3.nodeValue;
      if (hasParenthesis && ((_nextElementFirstValu = nextElementFirstValue) === null || _nextElementFirstValu === void 0 ? void 0 : _nextElementFirstValu[0]) !== ")") {
        continue;
      }
      moduleNameElementArray[moduleNameElementArray.length] = element;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  const dataModuleNameElementArray = [];
  var _iterator4 = _createForOfIteratorHelper($body.find(".".concat(classes.singleQuoteString, ",.").concat(classes.doubleQuoteString))), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var _element$firstChild2, _prevElement$firstChi, _prevElement$firstChi3, _prevElement$firstChi4;
      const element = _step4.value;
      if (moduleNameElementArray.includes(element)) {
        continue;
      }
      const elementFirstValue = (_element$firstChild2 = element.firstChild) === null || _element$firstChild2 === void 0 ? void 0 : _element$firstChild2.nodeValue;
      if (!elementFirstValue || !/^["'](?:module|模[组組块]):/i.test(elementFirstValue)) {
        continue;
      }
      let prevElement = element.previousElementSibling;
      if (!prevElement) {
        continue;
      }
      let prevElementFirstValue = (_prevElement$firstChi = prevElement.firstChild) === null || _prevElement$firstChi === void 0 ? void 0 : _prevElement$firstChi.nodeValue;
      if (prevElementFirstValue === "(") {
        var _nextElement$firstChi4, _prevElement$firstChi2;
        const nextElement = element.nextElementSibling;
        if (!nextElement) {
          continue;
        }
        const nextElementFirstValue = (_nextElement$firstChi4 = nextElement.firstChild) === null || _nextElement$firstChi4 === void 0 ? void 0 : _nextElement$firstChi4.nodeValue;
        if ((nextElementFirstValue === null || nextElementFirstValue === void 0 ? void 0 : nextElementFirstValue[0]) !== ")") {
          continue;
        }
        prevElement = prevElement.previousElementSibling;
        if (!prevElement) {
          continue;
        }
        prevElementFirstValue = (_prevElement$firstChi2 = prevElement.firstChild) === null || _prevElement$firstChi2 === void 0 ? void 0 : _prevElement$firstChi2.nodeValue;
      }
      if (prevElementFirstValue !== "loadData") {
        continue;
      }
      prevElement = prevElement.previousElementSibling;
      if (!prevElement) {
        continue;
      }
      prevElementFirstValue = (_prevElement$firstChi3 = prevElement.firstChild) === null || _prevElement$firstChi3 === void 0 ? void 0 : _prevElement$firstChi3.nodeValue;
      if (prevElementFirstValue !== ".") {
        continue;
      }
      prevElement = prevElement.previousElementSibling;
      if (!prevElement) {
        continue;
      }
      prevElementFirstValue = (_prevElement$firstChi4 = prevElement.firstChild) === null || _prevElement$firstChi4 === void 0 ? void 0 : _prevElement$firstChi4.nodeValue;
      if (prevElementFirstValue !== "mw") {
        continue;
      }
      dataModuleNameElementArray[dataModuleNameElementArray.length] = element;
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  for (var _i = 0, _arr = [...moduleNameElementArray, ...dataModuleNameElementArray]; _i < _arr.length; _i++) {
    var _element$firstChild;
    const element = _arr[_i];
    const elementFirstValue = (_element$firstChild = element.firstChild) === null || _element$firstChild === void 0 ? void 0 : _element$firstChild.nodeValue;
    if (!elementFirstValue) {
      continue;
    }
    const moduleName = elementFirstValue.slice(1, -1);
    const targetTitle = /^(?:module|模[组組块])?:/i.test(moduleName) ? moduleName : "Help:Lua#".concat(moduleName);
    addLink(element, targetTitle);
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvZGVMaW5rcy9tb2R1bGVzL2FkZExpbmsudHN4IiwgInNyYy9Db2RlTGlua3MvQ29kZUxpbmtzLnRzIiwgInNyYy9Db2RlTGlua3MvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvQ29kZUxpbmtzL21vZHVsZXMvcHJvY2Vzc0NvbW1lbnQudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbmNvbnN0IGFkZExpbmsgPSAoZWxlbWVudDogRWxlbWVudCwgdGFyZ2V0VGl0bGU6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBFbGVtZW50IGludGVyZmFjZScpO1xuXHR9XG5cblx0Y29uc3Qge2ZpcnN0Q2hpbGR9ID0gZWxlbWVudDtcblx0aWYgKCEoZmlyc3RDaGlsZCBpbnN0YW5jZW9mIFRleHQpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgVGV4dCBpbnRlcmZhY2UnKTtcblx0fVxuXG5cdGVsZW1lbnQuYXBwZW5kKDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKHRhcmdldFRpdGxlKX0+e2ZpcnN0Q2hpbGR9PC9hPik7XG59O1xuXG5leHBvcnQge2FkZExpbmt9O1xuIiwgImltcG9ydCB7YWRkTGlua30gZnJvbSAnLi9tb2R1bGVzL2FkZExpbmsnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzQ29tbWVudH0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NDb21tZW50Jztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBjb2RlTGlua3MoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGZvciAoY29uc3QgY29kZUJsb2NrIG9mICRib2R5LmZpbmQoJy5tdy1oaWdobGlnaHQnKSkge1xuXHRcdGZvciAoY29uc3QgY29tbWVudENsYXNzIG9mIFsnYycsICdjMScsICdjbSddKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGNvbW1lbnQgb2YgY29kZUJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NvbW1lbnRDbGFzc31gKSkge1xuXHRcdFx0XHRwcm9jZXNzQ29tbWVudChjb21tZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBMaW5rIG1vZHVsZSBuYW1lcyBhZnRlciBgcmVxdWlyZWAgYW5kIGBtdy5sb2FkRGF0YWAsIGFuZCB0cmFja2luZyB0ZW1wbGF0ZVxuXHQvLyBuYW1lcyBhZnRlciBgcmVxdWlyZShcIk1vZHVsZTpkZWJ1Z1wiKS50cmFja2AuXG5cdGNvbnN0IGNsYXNzZXMgPSB7XG5cdFx0aWRlbnRpZmllcjogJ24nLFxuXHRcdGZ1bmN0aW9uTmFtZTogJ25iJyxcblx0XHRzaW5nbGVRdW90ZVN0cmluZzogJ3MxJyxcblx0XHRkb3VibGVRdW90ZVN0cmluZzogJ3MyJyxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcblxuXHRjb25zdCBtb2R1bGVOYW1lRWxlbWVudEFycmF5OiBFbGVtZW50W10gPSBbXTtcblx0Zm9yIChjb25zdCBmdW5jdGlvbk5hbWVFbGVtZW50IG9mICRib2R5LmZpbmQoYC4ke2NsYXNzZXMuZnVuY3Rpb25OYW1lfWApKSB7XG5cdFx0Y29uc3QgdGV4dDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IGZ1bmN0aW9uTmFtZUVsZW1lbnQuZmlyc3RDaGlsZD8ubm9kZVZhbHVlO1xuXHRcdGlmICh0ZXh0ICE9PSAncmVxdWlyZScpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBuZXh0RWxlbWVudDogRWxlbWVudCB8IG51bGwgPSBmdW5jdGlvbk5hbWVFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcblx0XHRpZiAoIW5leHRFbGVtZW50KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgbmV4dEVsZW1lbnRGaXJzdFZhbHVlOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkID0gbmV4dEVsZW1lbnQuZmlyc3RDaGlsZD8ubm9kZVZhbHVlO1xuXHRcdGNvbnN0IGhhc1BhcmVudGhlc2lzOiBib29sZWFuID0gbmV4dEVsZW1lbnRGaXJzdFZhbHVlID09PSAnKCc7XG5cdFx0aWYgKGhhc1BhcmVudGhlc2lzKSB7XG5cdFx0XHRuZXh0RWxlbWVudCA9IG5leHRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcblx0XHRcdGlmICghbmV4dEVsZW1lbnQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRuZXh0RWxlbWVudEZpcnN0VmFsdWUgPSBuZXh0RWxlbWVudC5maXJzdENoaWxkPy5ub2RlVmFsdWU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qge2NsYXNzTGlzdH0gPSBuZXh0RWxlbWVudDtcblx0XHRpZiAoIShjbGFzc0xpc3QuY29udGFpbnMoY2xhc3Nlcy5zaW5nbGVRdW90ZVN0cmluZykgfHwgY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzZXMuZG91YmxlUXVvdGVTdHJpbmcpKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWxlbWVudDogRWxlbWVudCA9IG5leHRFbGVtZW50O1xuXHRcdGNvbnN0IGVsZW1lbnRWYWx1ZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IG5leHRFbGVtZW50Rmlyc3RWYWx1ZTtcblx0XHRpZiAoIWVsZW1lbnRWYWx1ZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bmV4dEVsZW1lbnQgPSBuZXh0RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0aWYgKCFuZXh0RWxlbWVudCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bmV4dEVsZW1lbnRGaXJzdFZhbHVlID0gbmV4dEVsZW1lbnQuZmlyc3RDaGlsZD8ubm9kZVZhbHVlO1xuXHRcdGlmIChoYXNQYXJlbnRoZXNpcyAmJiBuZXh0RWxlbWVudEZpcnN0VmFsdWU/LlswXSAhPT0gJyknKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRtb2R1bGVOYW1lRWxlbWVudEFycmF5W21vZHVsZU5hbWVFbGVtZW50QXJyYXkubGVuZ3RoXSA9IGVsZW1lbnQ7XG5cdH1cblxuXHRjb25zdCBkYXRhTW9kdWxlTmFtZUVsZW1lbnRBcnJheTogRWxlbWVudFtdID0gW107XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKGAuJHtjbGFzc2VzLnNpbmdsZVF1b3RlU3RyaW5nfSwuJHtjbGFzc2VzLmRvdWJsZVF1b3RlU3RyaW5nfWApKSB7XG5cdFx0aWYgKG1vZHVsZU5hbWVFbGVtZW50QXJyYXkuaW5jbHVkZXMoZWxlbWVudCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVsZW1lbnRGaXJzdFZhbHVlOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkID0gZWxlbWVudC5maXJzdENoaWxkPy5ub2RlVmFsdWU7XG5cdFx0aWYgKCFlbGVtZW50Rmlyc3RWYWx1ZSB8fCAhL15bXCInXSg/Om1vZHVsZXzmqKFb57uE57WE5Z2XXSk6L2kudGVzdChlbGVtZW50Rmlyc3RWYWx1ZSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBwcmV2RWxlbWVudDogRWxlbWVudCB8IG51bGwgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cdFx0aWYgKCFwcmV2RWxlbWVudCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IHByZXZFbGVtZW50Rmlyc3RWYWx1ZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IHByZXZFbGVtZW50LmZpcnN0Q2hpbGQ/Lm5vZGVWYWx1ZTtcblx0XHRpZiAocHJldkVsZW1lbnRGaXJzdFZhbHVlID09PSAnKCcpIHtcblx0XHRcdGNvbnN0IG5leHRFbGVtZW50OiBFbGVtZW50IHwgbnVsbCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRcdFx0aWYgKCFuZXh0RWxlbWVudCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG5leHRFbGVtZW50Rmlyc3RWYWx1ZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IG5leHRFbGVtZW50LmZpcnN0Q2hpbGQ/Lm5vZGVWYWx1ZTtcblx0XHRcdGlmIChuZXh0RWxlbWVudEZpcnN0VmFsdWU/LlswXSAhPT0gJyknKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cHJldkVsZW1lbnQgPSBwcmV2RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXHRcdFx0aWYgKCFwcmV2RWxlbWVudCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHByZXZFbGVtZW50Rmlyc3RWYWx1ZSA9IHByZXZFbGVtZW50LmZpcnN0Q2hpbGQ/Lm5vZGVWYWx1ZTtcblx0XHR9XG5cdFx0aWYgKHByZXZFbGVtZW50Rmlyc3RWYWx1ZSAhPT0gJ2xvYWREYXRhJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJldkVsZW1lbnQgPSBwcmV2RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXHRcdGlmICghcHJldkVsZW1lbnQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHByZXZFbGVtZW50Rmlyc3RWYWx1ZSA9IHByZXZFbGVtZW50LmZpcnN0Q2hpbGQ/Lm5vZGVWYWx1ZTtcblx0XHRpZiAocHJldkVsZW1lbnRGaXJzdFZhbHVlICE9PSAnLicpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHByZXZFbGVtZW50ID0gcHJldkVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcblx0XHRpZiAoIXByZXZFbGVtZW50KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwcmV2RWxlbWVudEZpcnN0VmFsdWUgPSBwcmV2RWxlbWVudC5maXJzdENoaWxkPy5ub2RlVmFsdWU7XG5cdFx0aWYgKHByZXZFbGVtZW50Rmlyc3RWYWx1ZSAhPT0gJ213Jykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0ZGF0YU1vZHVsZU5hbWVFbGVtZW50QXJyYXlbZGF0YU1vZHVsZU5hbWVFbGVtZW50QXJyYXkubGVuZ3RoXSA9IGVsZW1lbnQ7XG5cdH1cblxuXHQvLyBMaW5rIG1vZHVsZSBuYW1lcyB0byBtb2R1bGUgcGFnZXMsXG5cdC8vIG9yIHRvIHRoZSBzZWN0aW9uIGluIHRoZSBTY3JpYnVudG8gbWFudWFsLlxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgWy4uLm1vZHVsZU5hbWVFbGVtZW50QXJyYXksIC4uLmRhdGFNb2R1bGVOYW1lRWxlbWVudEFycmF5XSkge1xuXHRcdGNvbnN0IGVsZW1lbnRGaXJzdFZhbHVlOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkID0gZWxlbWVudC5maXJzdENoaWxkPy5ub2RlVmFsdWU7XG5cdFx0aWYgKCFlbGVtZW50Rmlyc3RWYWx1ZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbW9kdWxlTmFtZTogc3RyaW5nID0gZWxlbWVudEZpcnN0VmFsdWUuc2xpY2UoMSwgLTEpO1xuXHRcdGNvbnN0IHRhcmdldFRpdGxlOiBzdHJpbmcgPSAvXig/Om1vZHVsZXzmqKFb57uE57WE5Z2XXSk/Oi9pLnRlc3QobW9kdWxlTmFtZSlcblx0XHRcdD8gbW9kdWxlTmFtZVxuXHRcdFx0OiBgSGVscDpMdWEjJHttb2R1bGVOYW1lfWA7XG5cdFx0YWRkTGluayhlbGVtZW50LCB0YXJnZXRUaXRsZSk7XG5cdH1cbn0pO1xuIiwgIi8qKlxuICogQHByZXNlcnZlXG4gKiBAYXV0aG9yIEpvaG4gR3J1YmVyXG4gKiBAY29weXJpZ2h0IDIwMDLigJMyMDIzIFRoZSBEYXJpbmcgRmlyZWJhbGwgQ29tcGFueSBMTEMuXG4gKiBAc2VlIHtAbGluayBodHRwczovL2RhcmluZ2ZpcmViYWxsLm5ldC8yMDEwLzA3L2ltcHJvdmVkX3JlZ2V4X2Zvcl9tYXRjaGluZ191cmxzfVxuICovXG5jb25zdCBSRUdFWF9VUkw6IFJlZ0V4cCA9XG5cdC9cXGIoKD86aHR0cHM/OlxcL1xcL3x3d3dcXGR7MCwzfVsuXXxbYS16MC05Li1dK1suXVthLXpdezIsNH1cXC8pKD86W15cXHMoKTw+XSt8XFwoKFteXFxzKCk8Pl0rfChcXChbXlxccygpPD5dK1xcKSkpKlxcKSkrKD86XFwoKFteXFxzKCk8Pl0rfChcXChbXlxccygpPD5dK1xcKSkpKlxcKXxbXlxcc2AhKClbXFxde307OidcIi4sPD4/wqvCu+KAnOKAneKAmOKAmV0pKS9pO1xuXG5leHBvcnQge1JFR0VYX1VSTH07XG4iLCAiaW1wb3J0IHtSRUdFWF9VUkx9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG5jb25zdCBwcm9jZXNzQ29tbWVudCA9IChlbGVtZW50OiBFbGVtZW50KTogdm9pZCA9PiB7XG5cdGNvbnN0IHtmaXJzdENoaWxkfSA9IGVsZW1lbnQ7XG5cdGlmICghKGZpcnN0Q2hpbGQgaW5zdGFuY2VvZiBUZXh0KSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFRleHQgaW50ZXJmYWNlJyk7XG5cdH1cblxuXHRjb25zdCB7dGV4dENvbnRlbnR9ID0gZmlyc3RDaGlsZDtcblx0aWYgKCF0ZXh0Q29udGVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRlbXBsYXRlTWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSAvKFxce1xceyg/OiNpbnZva2U6KT8pKFtefHt9W1xcXVxcbiNdKykoPz1cXHx8fX0pL2kuZXhlYyh0ZXh0Q29udGVudCk7XG5cdGNvbnN0IHdpa2lsaW5rTWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSAvXFxbXFxbKFtefHt9W1xcXVxcbl0rKT8oPzpcXHwuKj8pP11dLy5leGVjKHRleHRDb250ZW50KTtcblx0Y29uc3QgdXJsTWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSBSRUdFWF9VUkwuZXhlYyh0ZXh0Q29udGVudCk7XG5cdGlmICghKHRlbXBsYXRlTWF0Y2ggfHwgd2lraWxpbmtNYXRjaCB8fCB1cmxNYXRjaCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsaW5rID0gKDxhIGNsYXNzTmFtZT1cImNvZGUtbGlua1wiIC8+KSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblxuXHRsZXQgbGlua1RleHQ6IHN0cmluZyA9ICcnO1xuXHRsZXQgc3RhcnQ6IG51bWJlciA9ICh3aWtpbGlua01hdGNoIHx8IHRlbXBsYXRlTWF0Y2ggfHwgdXJsTWF0Y2gpPy5pbmRleCA/PyAwO1xuXHRpZiAodXJsTWF0Y2gpIHtcblx0XHRjb25zdCBbdXJsXSA9IHVybE1hdGNoO1xuXHRcdGxpbmtUZXh0ID0gdXJsO1xuXHRcdGxpbmsuaHJlZiA9IHVybDtcblx0fSBlbHNlIHtcblx0XHRsZXQgZnVsbFBhZ2VOYW1lOiBzdHJpbmcgPSAnJztcblx0XHRpZiAod2lraWxpbmtNYXRjaCkge1xuXHRcdFx0W2xpbmtUZXh0XSA9IHdpa2lsaW5rTWF0Y2g7XG5cdFx0XHRmdWxsUGFnZU5hbWUgPSB3aWtpbGlua01hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2UgaWYgKHRlbXBsYXRlTWF0Y2gpIHtcblx0XHRcdGNvbnN0IHByZWZpeDogc3RyaW5nID0gdGVtcGxhdGVNYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0XHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gdGVtcGxhdGVNYXRjaFsyXSBhcyBzdHJpbmc7XG5cdFx0XHRmdWxsUGFnZU5hbWUgPSBgJHtwcmVmaXggPT09ICd7eyNpbnZva2U6JyA/ICdNb2R1bGU6JyA6ICdUZW1wbGF0ZTonfSR7cGFnZU5hbWV9YDtcblx0XHRcdGxpbmtUZXh0ID0gcGFnZU5hbWU7XG5cdFx0XHRsaW5rLnRpdGxlID0gZnVsbFBhZ2VOYW1lO1xuXHRcdFx0c3RhcnQgKz0gcHJlZml4Lmxlbmd0aDtcblx0XHR9XG5cdFx0bGluay5ocmVmID0gbXcudXRpbC5nZXRVcmwoZnVsbFBhZ2VOYW1lKTtcblx0fVxuXG5cdGxpbmsuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxpbmtUZXh0KSk7XG5cdGZpcnN0Q2hpbGQuYmVmb3JlKGxpbmspO1xuXG5cdGNvbnN0IGFmdGVyTGluazogc3RyaW5nID0gdGV4dENvbnRlbnQuc2xpY2UoTWF0aC5tYXgoMCwgc3RhcnQgKyBsaW5rVGV4dC5sZW5ndGgpKTtcblx0Zmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGFmdGVyTGluaztcblxuXHRjb25zdCBiZWZvcmVMaW5rOiBzdHJpbmcgPSB0ZXh0Q29udGVudC5zbGljZSgwLCBNYXRoLm1heCgwLCBzdGFydCkpO1xuXHRlbGVtZW50Lmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShiZWZvcmVMaW5rKSwgbGluayk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NDb21tZW50fTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBO0FBRWxCLElBQU1DLFVBQVVBLENBQUNDLFNBQWtCQyxnQkFBOEI7QUFDaEUsTUFBSSxFQUFFRCxtQkFBbUJFLFVBQVU7QUFDbEMsVUFBTSxJQUFJQyxVQUFVLDRCQUE0QjtFQUNqRDtBQUVBLFFBQU07SUFBQ0M7RUFBVSxJQUFJSjtBQUNyQixNQUFJLEVBQUVJLHNCQUFzQkMsT0FBTztBQUNsQyxVQUFNLElBQUlGLFVBQVUseUJBQXlCO0VBQzlDO0FBRUFILFVBQVFNLE9BQU9WLGtDQUFBVyxRQUFBQyxjQUFDLEtB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LFVBQUksQ0FBQ0QsYUFBYTtBQUNqQjtNQUNEO0FBRUFFLCtCQUFBTix5QkFBd0JJLFlBQVlqRyxnQkFBQSxRQUFBNkYsMkJBQUEsU0FBQSxTQUFaQSx1QkFBd0JmO0FBQ2hELFVBQUlxQiwwQkFBMEIsTUFBTTtBQUNuQztNQUNEO0FBRUFaLGlDQUEyQkEsMkJBQTJCeEQsTUFBTSxJQUFJbkM7SUFDakU7RUFBQSxTQUFBaUUsS0FBQTtBQUFBMkIsZUFBQTFCLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUEyQixlQUFBekIsRUFBQTtFQUFBO0FBSUEsV0FBQXVDLEtBQUEsR0FBQUMsT0FBc0IsQ0FBQyxHQUFHbEMsd0JBQXdCLEdBQUdrQiwwQkFBMEIsR0FBQWUsS0FBQUMsS0FBQXhFLFFBQUF1RSxNQUFHO0FBQUEsUUFBQUU7QUFBbEYsVUFBVzVHLFVBQUEyRyxLQUFBRCxFQUFBO0FBQ1YsVUFBTVAscUJBQUFTLHNCQUErQzVHLFFBQVFJLGdCQUFBLFFBQUF3Ryx3QkFBQSxTQUFBLFNBQVJBLG9CQUFvQjFCO0FBQ3pFLFFBQUksQ0FBQ2lCLG1CQUFtQjtBQUN2QjtJQUNEO0FBRUEsVUFBTVUsYUFBcUJWLGtCQUFrQjNELE1BQU0sR0FBRyxFQUFFO0FBQ3hELFVBQU12QyxjQUFzQix3QkFBd0JtRyxLQUFLUyxVQUFVLElBQ2hFQSxhQUFBLFlBQUE1RSxPQUNZNEUsVUFBVTtBQUN6QjlHLFlBQVFDLFNBQVNDLFdBQVc7RUFDN0I7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiYWRkTGluayIsICJlbGVtZW50IiwgInRhcmdldFRpdGxlIiwgIkVsZW1lbnQiLCAiVHlwZUVycm9yIiwgImZpcnN0Q2hpbGQiLCAiVGV4dCIsICJhcHBlbmQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImhyZWYiLCAibXciLCAidXRpbCIsICJnZXRVcmwiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIlJFR0VYX1VSTCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicHJvY2Vzc0NvbW1lbnQiLCAiX2luZGV4IiwgIl9yZWYiLCAidGV4dENvbnRlbnQiLCAidGVtcGxhdGVNYXRjaCIsICJleGVjIiwgIndpa2lsaW5rTWF0Y2giLCAidXJsTWF0Y2giLCAibGluayIsICJjbGFzc05hbWUiLCAibGlua1RleHQiLCAic3RhcnQiLCAiaW5kZXgiLCAidXJsIiwgImZ1bGxQYWdlTmFtZSIsICJwcmVmaXgiLCAicGFnZU5hbWUiLCAiY29uY2F0IiwgInRpdGxlIiwgImxlbmd0aCIsICJkb2N1bWVudCIsICJjcmVhdGVUZXh0Tm9kZSIsICJiZWZvcmUiLCAiYWZ0ZXJMaW5rIiwgInNsaWNlIiwgIk1hdGgiLCAibWF4IiwgImJlZm9yZUxpbmsiLCAiaW5zZXJ0QmVmb3JlIiwgImdldEJvZHkiLCAidGhlbiIsICJjb2RlTGlua3MiLCAiJGJvZHkiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJmaW5kIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJjb2RlQmxvY2siLCAidmFsdWUiLCAiX2kyIiwgIl9hcnIyIiwgImNvbW1lbnRDbGFzcyIsICJfaXRlcmF0b3I1IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiX3N0ZXA1IiwgImNvbW1lbnQiLCAiZXJyIiwgImUiLCAiZiIsICJjbGFzc2VzIiwgImlkZW50aWZpZXIiLCAiZnVuY3Rpb25OYW1lIiwgInNpbmdsZVF1b3RlU3RyaW5nIiwgImRvdWJsZVF1b3RlU3RyaW5nIiwgIm1vZHVsZU5hbWVFbGVtZW50QXJyYXkiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiX2Z1bmN0aW9uTmFtZUVsZW1lbnQkIiwgIl9uZXh0RWxlbWVudCRmaXJzdENoaSIsICJfbmV4dEVsZW1lbnQkZmlyc3RDaGkzIiwgIl9uZXh0RWxlbWVudEZpcnN0VmFsdSIsICJmdW5jdGlvbk5hbWVFbGVtZW50IiwgInRleHQiLCAibm9kZVZhbHVlIiwgIm5leHRFbGVtZW50IiwgIm5leHRFbGVtZW50U2libGluZyIsICJuZXh0RWxlbWVudEZpcnN0VmFsdWUiLCAiaGFzUGFyZW50aGVzaXMiLCAiX25leHRFbGVtZW50JGZpcnN0Q2hpMiIsICJjbGFzc0xpc3QiLCAiY29udGFpbnMiLCAiZWxlbWVudFZhbHVlIiwgImRhdGFNb2R1bGVOYW1lRWxlbWVudEFycmF5IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgIl9lbGVtZW50JGZpcnN0Q2hpbGQyIiwgIl9wcmV2RWxlbWVudCRmaXJzdENoaSIsICJfcHJldkVsZW1lbnQkZmlyc3RDaGkzIiwgIl9wcmV2RWxlbWVudCRmaXJzdENoaTQiLCAiaW5jbHVkZXMiLCAiZWxlbWVudEZpcnN0VmFsdWUiLCAidGVzdCIsICJwcmV2RWxlbWVudCIsICJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwgInByZXZFbGVtZW50Rmlyc3RWYWx1ZSIsICJfbmV4dEVsZW1lbnQkZmlyc3RDaGk0IiwgIl9wcmV2RWxlbWVudCRmaXJzdENoaTIiLCAiX2kiLCAiX2FyciIsICJfZWxlbWVudCRmaXJzdENoaWxkIiwgIm1vZHVsZU5hbWUiXQp9Cg==
