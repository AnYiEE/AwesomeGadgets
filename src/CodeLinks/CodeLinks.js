/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://en.wiktionary.org/wiki/MediaWiki:Gadget-CodeLinks.js>
 * @base <https://zh.wiktionary.org/wiki/MediaWiki:Gadget-CodeLinks.js>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/CodeLinks>
 * @dependency mediawiki.util, site
 */
/**
 * +--------------------------------------------------------+
 * |         === WARNING: GLOBAL GADGET FILE ===            |
 * +--------------------------------------------------------+
 * |      All changes should be made in the repository,     |
 * |              otherwise they will be lost.              |
 * +--------------------------------------------------------+
 * |      Changes to this page may affect many users.       |
 * |  Please discuss changes at talk page before editing.   |
 * +--------------------------------------------------------+
 */
/* <nowiki> */
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
$(function codeLinks() {
  // by John Gruber, from https://daringfireball.net/2010/07/improved_regex_for_matching_urls
  var URLRegExp = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()[\]{};:'".,<>?«»“”‘’]))/i;
  var processComment = function processComment(node) {
    var textNode = node.firstChild; // always a text node.
    if (!textNode) {
      return;
    }
    var textContent = textNode.textContent;
    if (!textContent) {
      return;
    }
    var wikilinkMatch = /\[\[([^|{}[\]\n]+)?(?:\|.*?)?]]/.exec(textContent);
    var templateMatch = /(\{\{(?:#invoke:)?)([^|{}[\]\n#]+)(?=\||}})/i.exec(textContent);
    var URLMatch = URLRegExp.exec(textContent);
    while (wikilinkMatch || templateMatch || URLMatch) {
      var _index, _ref;
      var link = document.createElement('a');
      var start = (_index = (_ref = wikilinkMatch || templateMatch || URLMatch) === null || _ref === void 0 ? void 0 : _ref.index) !== null && _index !== void 0 ? _index : 0;
      var linkText = '';
      link.classList.add('code-link');
      if (URLMatch) {
        var URL = URLMatch[0];
        link.href = URL;
        linkText = URL;
      } else {
        var fullPageName = '';
        if (wikilinkMatch) {
          linkText = wikilinkMatch[0];
          fullPageName = wikilinkMatch[1];
        } else if (templateMatch) {
          var prefix = templateMatch[1];
          var pageName = templateMatch[2];
          linkText = pageName;
          fullPageName = (prefix === '{{#invoke:' ? 'Module:' : 'Template:') + pageName;
          link.title = fullPageName;
          start += prefix.length;
        }
        link.href = mw.util.getUrl(fullPageName);
      }
      var beforeLink = textContent.slice(0, Math.max(0, start));
      var afterLink = textContent.slice(Math.max(0, start + linkText.length));
      textNode.textContent = afterLink;
      link.appendChild(document.createTextNode(linkText));
      node.insertBefore(link, textNode);
      node.insertBefore(document.createTextNode(beforeLink), link);
      // ensure all matches are null at beginning of loop body; is this necessary?
      wikilinkMatch = templateMatch = URLMatch = null;
    }
  };
  var _iterator = _createForOfIteratorHelper(document.querySelectorAll('.mw-highlight')),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var codeBlock = _step.value;
      for (var _i3 = 0, _arr3 = ['c', 'c1', 'cm']; _i3 < _arr3.length; _i3++) {
        var commentClass = _arr3[_i3];
        var _iterator3 = _createForOfIteratorHelper(codeBlock.querySelectorAll(".".concat(commentClass))),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var element = _step3.value;
            processComment(element);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }
    // Link module names after `require` and `mw.loadData`, and tracking template
    // names after `require("Module:debug").track`.
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var classes = {
    identifier: 'n',
    functionName: 'nb',
    singleQuoteString: 's1',
    doubleQuoteString: 's2'
  };
  var moduleNames = [];
  var _iterator2 = _createForOfIteratorHelper(document.querySelectorAll(".".concat(classes.functionName))),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _functionName$firstCh, _nextText2;
      var functionName = _step2.value;
      var text = (_functionName$firstCh = functionName.firstChild) === null || _functionName$firstCh === void 0 ? void 0 : _functionName$firstCh.nodeValue;
      if (text !== 'require') {
        return;
      }
      var _next = functionName.nextElementSibling;
      if (!_next) {
        return;
      }
      var _nextText = _next.firstChild && _next.firstChild.nodeValue;
      var hasParenthesis = _nextText === '(';
      if (hasParenthesis) {
        _next = _next.nextElementSibling;
        if (!_next) {
          return;
        }
        _nextText = _next.firstChild && _next.firstChild.nodeValue;
      }
      var classList = _next.classList;
      if (!(classList.contains(classes.singleQuoteString) || classList.contains(classes.doubleQuoteString))) {
        return;
      }
      var _string = _next;
      var _stringValue2 = _nextText;
      if (!_stringValue2) {
        return;
      }
      _next = _next.nextElementSibling;
      if (!_next) {
        return;
      }
      _nextText = _next.firstChild && _next.firstChild.nodeValue;
      if (hasParenthesis && ((_nextText2 = _nextText) === null || _nextText2 === void 0 ? void 0 : _nextText2[0]) !== ')') {
        return;
      }
      moduleNames.push(_string);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var dataModuleNames = [];
  for (var _i = 0, _arr = [].concat(_toConsumableArray(document.querySelectorAll(".".concat(classes.singleQuoteString))), _toConsumableArray(document.querySelectorAll(".".concat(classes.doubleQuoteString)))); _i < _arr.length; _i++) {
    var _string$firstChild;
    var string = _arr[_i];
    if (moduleNames.indexOf(string) !== -1) {
      return;
    }
    var stringValue = (_string$firstChild = string.firstChild) === null || _string$firstChild === void 0 ? void 0 : _string$firstChild.nodeValue;
    if (!stringValue || !/^["'](?:module|模[组組块]):/i.test(stringValue)) {
      return;
    }
    var prev = string.previousElementSibling;
    if (!prev) {
      return;
    }
    var prevText = prev.firstChild && prev.firstChild.nodeValue;
    if (prevText === '(') {
      var next = string.nextElementSibling;
      if (!next) {
        return;
      }
      var nextText = next.firstChild && next.firstChild.nodeValue;
      if ((nextText === null || nextText === void 0 ? void 0 : nextText[0]) !== ')') {
        return;
      }
      prev = prev.previousElementSibling;
      if (!prev) {
        return;
      }
      prevText = prev.firstChild && prev.firstChild.nodeValue;
    }
    if (prevText !== 'loadData') {
      return;
    }
    prev = prev.previousElementSibling;
    if (!prev) {
      return;
    }
    prevText = prev.firstChild && prev.firstChild.nodeValue;
    if (prevText !== '.') {
      return;
    }
    prev = prev.previousElementSibling;
    if (!prev) {
      return;
    }
    prevText = prev.firstChild && prev.firstChild.nodeValue;
    if (prevText !== 'mw') {
      return;
    }
    dataModuleNames.push(string);
  }
  if (moduleNames.length || dataModuleNames.length) {
    var addLink = function addLink(element, page) {
      if (!(element instanceof Element)) {
        throw new TypeError('Expected Element object');
      }
      var link = document.createElement('a');
      link.href = mw.util.getUrl(page);
      // put text node from element inside link
      var firstChild = element.firstChild;
      if (!(firstChild instanceof Text)) {
        throw new TypeError('Expected Text object');
      }
      link.appendChild(firstChild);
      element.appendChild(link); // put link inside syntax-highlighted string
    };
    // Link module names to module pages,
    // or to the section in the Scribunto manual.
    for (var _i2 = 0, _arr2 = [].concat(moduleNames, dataModuleNames); _i2 < _arr2.length; _i2++) {
      var _module$firstChild;
      var module = _arr2[_i2];
      var _stringValue = (_module$firstChild = module.firstChild) === null || _module$firstChild === void 0 ? void 0 : _module$firstChild.nodeValue;
      if (!_stringValue) {
        return;
      }
      var moduleName = _stringValue.substring(1, _stringValue.length - 1);
      var linkPage = /^(module|模[组組块])?:/i.test(moduleName) ? moduleName : "Help:Lua#".concat(moduleName);
      addLink(module, linkPage);
    }
  }
});
/* </nowiki> */
