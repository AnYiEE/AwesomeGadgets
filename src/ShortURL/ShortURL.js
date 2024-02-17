/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
 *
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/ShortURL>
 * @author 安忆 <i@anyi.in>; WaitSpring <me@waitspring.com>
 * @dependency ext.gadget.i18n, mediawiki.api, mediawiki.util, mediawiki.widgets, oojs-ui-windows
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
(function shortURL(_ref2) {
  if (mw.config.get('wgNamespaceNumber') === -1 || $('.noarticletext').length || mw.config.get('wgAction') !== 'view') {
    return;
  }
  var isInit = false;
  var doIns = function doIns(link) {
    var text = window.wgULS('短链接', '短網址');
    var title = window.wgULS('已复制本页短链接：', '已復製本頁短網址：');
    var tooltip = window.wgULS('显示该页短链接', '顯示該頁短網址');
    var isCitizen = mw.config.get('skin') === 'citizen';
    var element = document.querySelector('#t-shortlink');
    if (!element) {
      element = mw.util.addPortletLink(isCitizen ? 'p-tb' : 'p-cactions', '#', text, 't-shortlink', tooltip);
    }
    if (element) {
      var _element$firstElement;
      ((_element$firstElement = element.firstElementChild) !== null && _element$firstElement !== void 0 ? _element$firstElement : element).onclick = function (event) {
        event.preventDefault();
        var $element = $('<div>');
        for (var _i = 0, _arr = ['ysymh.cc', 'youshou.wiki']; _i < _arr.length; _i++) {
          var domain = _arr[_i];
          $element.append(new mw.widgets.CopyTextLayout({
            align: 'top',
            copyText: "https://".concat(domain).concat(link)
          }).$element);
        }
        /android|iphone|mobile/i.test(navigator.userAgent) ? OO.ui.alert($element, {
          title: title
        }) : OO.ui.alert($element, {
          title: title,
          size: 'medium'
        });
      };
      if (isCitizen && !isInit) {
        isInit = true;
        $(element).find('a').prepend('<span class="citizen-ui-icon mw-ui-icon-wikimedia-shortlink"></span>');
      }
    }
    var headerElement = document.querySelector('#mw-indicator-shortURL');
    if (!headerElement) {
      var $headerElement = $('<div>').addClass('mw-indicator').attr('id', 'mw-indicator-shortURL').append($('<a>').attr({
        href: '#',
        title: text
      }).append($('<span>').addClass('shortlink-icon').text(text)));
      $headerElement.prependTo('.mw-indicators');
      headerElement = $headerElement.get(0);
    }
    headerElement.onclick = function (event) {
      var _navigator$clipboard;
      event.preventDefault();
      var shorturl = "https://ysymh.cc".concat(link);
      // eslint-disable-next-line compat/compat
      (_navigator$clipboard = navigator.clipboard) === null || _navigator$clipboard === void 0 || _navigator$clipboard.writeText(shorturl);
      mw.notify($('<span>').text(title).append($('<br>'), $('<a>').attr('href', '#').text(shorturl).on('click', function (_event) {
        _event.preventDefault();
        _event.stopPropagation();
      })), {
        tag: 'shortURL',
        type: 'info'
      });
    };
  };
  var init = function init(_x) {
    return (_ref2 = _ref2 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var articleId, diffId, oldId, revisionId, buildLink, _response$compare, api, params, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            articleId = _ref.articleId, diffId = _ref.diffId, oldId = _ref.oldId, revisionId = _ref.revisionId;
            if (!diffId) {
              _context.next = 18;
              break;
            }
            buildLink = function buildLink(_oldId) {
              var link = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/d';
              if (_oldId) {
                link += "/".concat(_oldId);
              }
              link += "/".concat(diffId);
              doIns(link);
            };
            buildLink(oldId);
            if (!oldId) {
              _context.next = 16;
              break;
            }
            _context.prev = 5;
            api = new mw.Api({
              ajax: {
                headers: {
                  'Api-User-Agent': "Qiuwen/1.1 (ShortURL/1.1; ".concat(mw.config.get('wgWikiID'), ")")
                }
              }
            });
            params = {
              action: 'compare',
              formatversion: '2',
              prop: 'ids',
              fromrev: diffId,
              torelative: 'prev'
            };
            _context.next = 10;
            return api.get(params);
          case 10:
            response = _context.sent;
            if (diffId === mw.config.get('wgDiffNewId') && ((_response$compare = response['compare']) === null || _response$compare === void 0 ? void 0 : _response$compare.fromrevid) === mw.config.get('wgDiffOldId')) {
              buildLink(false);
            }
            _context.next = 16;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](5);
          case 16:
            _context.next = 19;
            break;
          case 18:
            if (revisionId && ($('#contentSub').find('#mw-revision-nav').length || $('main#content>.pre-content #mw-revision-nav').length)) {
              doIns("/p/".concat(revisionId));
            } else if (articleId) {
              doIns("/c/".concat(articleId));
            }
          case 19:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 14]]);
    }))).apply(this, arguments);
  };
  mw.hook('wikipage.content').add(function ($content) {
    if ($content.attr('id') !== 'mw-content-text') {
      return;
    }
    init({
      articleId: mw.config.get('wgArticleId'),
      diffId: mw.config.get('wgDiffNewId'),
      oldId: mw.config.get('wgDiffOldId'),
      revisionId: mw.config.get('wgRevisionId')
    });
  });
  $(function () {
    /**
     * @description link Icon from OOjs UI
     * @base <https://github.com/wikimedia/oojs-ui/blob/e17952e413cfc00c15cfd861d47463c29062afe7/src/themes/wikimediaui/images/icons/link.svg>
     * @license MIT <https://github.com/wikimedia/oojs-ui/blob/master/LICENSE-MIT>
     */
    var linkIcon = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M4.83 15h2.91a4.88 4.88 0 01-1.55-2H5a3 3 0 110-6h3a3 3 0 012.82 4h2.1a4.82 4.82 0 00.08-.83v-.34A4.83 4.83 0 008.17 5H4.83A4.83 4.83 0 000 9.83v.34A4.83 4.83 0 004.83 15z'/%3E%3Cpath d='M15.17 5h-2.91a4.88 4.88 0 011.55 2H15a3 3 0 110 6h-3a3 3 0 01-2.82-4h-2.1a4.82 4.82 0 00-.08.83v.34A4.83 4.83 0 0011.83 15h3.34A4.83 4.83 0 0020 10.17v-.34A4.83 4.83 0 0015.17 5z'/%3E%3C/svg%3E";
    mw.util.addCSS(".shortlink-icon{display:inline-block;width:1.25rem;height:1.25rem;margin:0 .5rem;vertical-align:middle;font-size:0;text-indent:-9999px;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.skin-gongbi .shortlink-icon{vertical-align:sub}.shortlink-icon:before,.mw-ui-icon-wikimedia-shortlink:before{background-image:url(\"".concat(linkIcon, "\");background-image:linear-gradient(transparent,transparent),url(\"").concat(linkIcon, "\");display:block;width:100%;height:100%;background-position:center;background-repeat:no-repeat;background-size:contain;content:\"\";opacity:.6}.citizen-body-header--sticky .shortlink-icon, .ve-init-mw-desktopArticleTarget-originalContent .shortlink-icon{display:none}"));
  });
})();
/* </nowiki> */
