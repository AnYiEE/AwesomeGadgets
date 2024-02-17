/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=Wikiplus|license=CC-BY-SA-4.0}}'
 *
 * Wikiplus
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Wikiplus/module/core.js}
 * @author Eridanus Sora (妹空酱)
 */
/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|title=Wikiplus-highlight|license=GPL-3.0}}'
 *
 * Wikiplus-highlight
 *
 * @base {@link https://github.com/bhsd-harry/Wikiplus-highlight/blob/main/main.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Wikiplus/module/highlight.js}
 * @author Bhsd <https://github.com/bhsd-harry>, 机智的小鱼君 <https://github.com/Dragon-Fish>
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
(function () {

    "use strict";
    
    function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
    function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
    function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
    function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
    function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
    function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
    function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
    function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
    function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
    (function () {
      var __getOwnPropNames = Object.getOwnPropertyNames;
      var __esm = function __esm(fn, res) {
        return function __init() {
          return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
        };
      };
    
      // src/Wikiplus/modules/core.js
      var core_exports = {};
      var init_core = __esm({
        "src/Wikiplus/modules/core.js": function srcWikiplusModulesCoreJs() {
          "use strict";
    
          (function Wikiplus() {
            var t = {
              3099: function _(t2) {
                t2.exports = function (t3) {
                  if ("function" != typeof t3) throw TypeError(String(t3) + " is not a function");
                  return t3;
                };
              },
              6077: function _(t2, e2, n2) {
                var r = n2(111);
                t2.exports = function (t3) {
                  if (!r(t3) && null !== t3) throw TypeError("Can't set " + String(t3) + " as a prototype");
                  return t3;
                };
              },
              1223: function _(t2, e2, n2) {
                var r = n2(5112);
                var i = n2(30);
                var o = n2(3070);
                var a = r("unscopables");
                var c = Array.prototype;
                null == c[a] && o.f(c, a, {
                  configurable: true,
                  value: i(null)
                }), t2.exports = function (t3) {
                  c[a][t3] = true;
                };
              },
              1530: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(8710).charAt;
                t2.exports = function (t3, e3, n3) {
                  return e3 + (n3 ? r(t3, e3).length : 1);
                };
              },
              5787: function _(t2) {
                t2.exports = function (t3, e2, n2) {
                  if (!(t3 instanceof e2)) throw TypeError("Incorrect " + (n2 ? n2 + " " : "") + "invocation");
                  return t3;
                };
              },
              9670: function _(t2, e2, n2) {
                var r = n2(111);
                t2.exports = function (t3) {
                  if (!r(t3)) throw TypeError(String(t3) + " is not an object");
                  return t3;
                };
              },
              8533: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(2092).forEach;
                var i = n2(9341);
                var o = n2(9207);
                var a = i("forEach");
                var c = o("forEach");
                t2.exports = a && c ? [].forEach : function (t3) {
                  return r(this, t3, arguments.length > 1 ? arguments[1] : void 0);
                };
              },
              8457: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(9974);
                var i = n2(7908);
                var o = n2(3411);
                var a = n2(7659);
                var c = n2(7466);
                var u = n2(6135);
                var s = n2(1246);
                t2.exports = function (t3) {
                  var e3;
                  var n3;
                  var l;
                  var f;
                  var p;
                  var d;
                  var h = i(t3);
                  var v = "function" == typeof this ? this : Array;
                  var g = arguments.length;
                  var m = g > 1 ? arguments[1] : void 0;
                  var y = void 0 !== m;
                  var k = s(h);
                  var b = 0;
                  if (y && (m = r(m, g > 2 ? arguments[2] : void 0, 2)), null == k || v == Array && a(k)) for (n3 = new v(e3 = c(h.length)); e3 > b; b++) d = y ? m(h[b], b) : h[b], u(n3, b, d);else for (p = (f = k.call(h)).next, n3 = new v(); !(l = p.call(f)).done; b++) d = y ? o(f, m, [l.value, b], true) : l.value, u(n3, b, d);
                  return n3.length = b, n3;
                };
              },
              1318: function _(t2, e2, n2) {
                var r = n2(5656);
                var i = n2(7466);
                var o = n2(1400);
                var a = function a(t3) {
                  return function (e3, n3, a2) {
                    var c;
                    var u = r(e3);
                    var s = i(u.length);
                    var l = o(a2, s);
                    if (t3 && n3 != n3) {
                      for (; s > l;) if ((c = u[l++]) != c) return true;
                    } else for (; s > l; l++) if ((t3 || l in u) && u[l] === n3) return t3 || l || 0;
                    return !t3 && -1;
                  };
                };
                t2.exports = {
                  includes: a(true),
                  indexOf: a(false)
                };
              },
              2092: function _(t2, e2, n2) {
                var r = n2(9974);
                var i = n2(8361);
                var o = n2(7908);
                var a = n2(7466);
                var c = n2(5417);
                var u = [].push;
                var s = function s(t3) {
                  var e3 = 1 == t3,
                    n3 = 2 == t3,
                    s2 = 3 == t3,
                    l = 4 == t3,
                    f = 6 == t3,
                    p = 5 == t3 || f;
                  return function (d, h, v, g) {
                    for (var m, y, k = o(d), b = i(k), A = r(h, v, 3), w = a(b.length), x = 0, I = g || c, C = e3 ? I(d, w) : n3 ? I(d, 0) : void 0; w > x; x++) if ((p || x in b) && (y = A(m = b[x], x, k), t3)) {
                      if (e3) C[x] = y;else if (y) switch (t3) {
                        case 3:
                          return true;
                        case 5:
                          return m;
                        case 6:
                          return x;
                        case 2:
                          u.call(C, m);
                      } else if (l) return false;
                    }
                    return f ? -1 : s2 || l ? l : C;
                  };
                };
                t2.exports = {
                  forEach: s(0),
                  map: s(1),
                  filter: s(2),
                  some: s(3),
                  every: s(4),
                  find: s(5),
                  findIndex: s(6)
                };
              },
              1194: function _(t2, e2, n2) {
                var r = n2(7293);
                var i = n2(5112);
                var o = n2(7392);
                var a = i("species");
                t2.exports = function (t3) {
                  return o >= 51 || !r(function () {
                    var e3 = [];
                    return (e3.constructor = {})[a] = function () {
                      return {
                        foo: 1
                      };
                    }, 1 !== e3[t3](Boolean).foo;
                  });
                };
              },
              9341: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(7293);
                t2.exports = function (t3, e3) {
                  var n3 = [][t3];
                  return !!n3 && r(function () {
                    n3.call(null, e3 || function () {
                      throw 1;
                    }, 1);
                  });
                };
              },
              9207: function _(t2, e2, n2) {
                var r = n2(9781);
                var i = n2(7293);
                var o = n2(6656);
                var a = Object.defineProperty;
                var c = {};
                var u = function u(t3) {
                  throw t3;
                };
                t2.exports = function (t3, e3) {
                  if (o(c, t3)) return c[t3];
                  e3 || (e3 = {});
                  var n3 = [][t3];
                  var s = !!o(e3, "ACCESSORS") && e3.ACCESSORS;
                  var l = o(e3, 0) ? e3[0] : u;
                  var f = o(e3, 1) ? e3[1] : void 0;
                  return c[t3] = !!n3 && !i(function () {
                    if (s && !r) return true;
                    var t4 = {
                      length: -1
                    };
                    s ? a(t4, 1, {
                      enumerable: true,
                      get: u
                    }) : t4[1] = 1, n3.call(t4, l, f);
                  });
                };
              },
              5417: function _(t2, e2, n2) {
                var r = n2(111);
                var i = n2(3157);
                var o = n2(5112)("species");
                t2.exports = function (t3, e3) {
                  var n3;
                  return i(t3) && ("function" != typeof (n3 = t3.constructor) || n3 !== Array && !i(n3.prototype) ? r(n3) && null === (n3 = n3[o]) && (n3 = void 0) : n3 = void 0), new (void 0 === n3 ? Array : n3)(0 === e3 ? 0 : e3);
                };
              },
              3411: function _(t2, e2, n2) {
                var r = n2(9670);
                t2.exports = function (t3, e3, n3, i) {
                  try {
                    return i ? e3(r(n3)[0], n3[1]) : e3(n3);
                  } catch (e4) {
                    var o = t3["return"];
                    throw void 0 !== o && r(o.call(t3)), e4;
                  }
                };
              },
              7072: function _(t2, e2, n2) {
                var r = n2(5112)("iterator");
                var i = false;
                try {
                  var o = 0;
                  var a = {
                    next: function next() {
                      return {
                        done: !!o++
                      };
                    },
                    "return": function _return() {
                      i = true;
                    }
                  };
                  a[r] = function () {
                    return this;
                  }, Array.from(a, function () {
                    throw 2;
                  });
                } catch (t3) {}
                t2.exports = function (t3, e3) {
                  if (!e3 && !i) return false;
                  var n3 = false;
                  try {
                    var _o = {};
                    _o[r] = function () {
                      return {
                        next: function next() {
                          return {
                            done: n3 = true
                          };
                        }
                      };
                    }, t3(_o);
                  } catch (t4) {}
                  return n3;
                };
              },
              4326: function _(t2) {
                var e2 = {}.toString;
                t2.exports = function (t3) {
                  return e2.call(t3).slice(8, -1);
                };
              },
              648: function _(t2, e2, n2) {
                var r = n2(1694);
                var i = n2(4326);
                var o = n2(5112)("toStringTag");
                var a = "Arguments" == i(function () {
                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }
                  return args;
                }());
                t2.exports = r ? i : function (t3) {
                  var e3;
                  var n3;
                  var r2;
                  return void 0 === t3 ? "Undefined" : null === t3 ? "Null" : "string" == typeof (n3 = function (t4, e4) {
                    try {
                      return t4[e4];
                    } catch (t5) {}
                  }(e3 = Object(t3), o)) ? n3 : a ? i(e3) : "Object" == (r2 = i(e3)) && "function" == typeof e3.callee ? "Arguments" : r2;
                };
              },
              5631: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(3070).f;
                var i = n2(30);
                var o = n2(2248);
                var a = n2(9974);
                var c = n2(5787);
                var u = n2(408);
                var s = n2(654);
                var l = n2(6340);
                var f = n2(9781);
                var p = n2(2423).fastKey;
                var d = n2(9909);
                var h = d.set;
                var v = d.getterFor;
                t2.exports = {
                  getConstructor: function getConstructor(t3, e3, n3, s2) {
                    var l2 = t3(function (t4, r2) {
                      c(t4, l2, e3), h(t4, {
                        type: e3,
                        index: i(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                      }), f || (t4.size = 0), null != r2 && u(r2, t4[s2], t4, n3);
                    });
                    var d2 = v(e3);
                    var g = function g(t4, e4, n4) {
                      var r2;
                      var i2;
                      var o2 = d2(t4);
                      var a2 = m(t4, e4);
                      return a2 ? a2.value = n4 : (o2.last = a2 = {
                        index: i2 = p(e4, true),
                        key: e4,
                        value: n4,
                        previous: r2 = o2.last,
                        next: void 0,
                        removed: false
                      }, o2.first || (o2.first = a2), r2 && (r2.next = a2), f ? o2.size++ : t4.size++, "F" !== i2 && (o2.index[i2] = a2)), t4;
                    };
                    var m = function m(t4, e4) {
                      var n4;
                      var r2 = d2(t4);
                      var i2 = p(e4);
                      if ("F" !== i2) return r2.index[i2];
                      for (n4 = r2.first; n4; n4 = n4.next) if (n4.key == e4) return n4;
                    };
                    return o(l2.prototype, {
                      clear: function clear() {
                        for (var t4 = d2(this), e4 = t4.index, n4 = t4.first; n4;) n4.removed = true, n4.previous && (n4.previous = n4.previous.next = void 0), delete e4[n4.index], n4 = n4.next;
                        t4.first = t4.last = void 0, f ? t4.size = 0 : this.size = 0;
                      },
                      "delete": function _delete(t4) {
                        var e4 = this;
                        var n4 = d2(e4);
                        var r2 = m(e4, t4);
                        if (r2) {
                          var i2 = r2.next;
                          var o2 = r2.previous;
                          delete n4.index[r2.index], r2.removed = true, o2 && (o2.next = i2), i2 && (i2.previous = o2), n4.first == r2 && (n4.first = i2), n4.last == r2 && (n4.last = o2), f ? n4.size-- : e4.size--;
                        }
                        return !!r2;
                      },
                      forEach: function forEach(t4) {
                        for (var e4, n4 = d2(this), r2 = a(t4, arguments.length > 1 ? arguments[1] : void 0, 3); e4 = e4 ? e4.next : n4.first;) for (r2(e4.value, e4.key, this); e4 && e4.removed;) e4 = e4.previous;
                      },
                      has: function has(t4) {
                        return !!m(this, t4);
                      }
                    }), o(l2.prototype, n3 ? {
                      get: function get(t4) {
                        var e4 = m(this, t4);
                        return e4 && e4.value;
                      },
                      set: function set(t4, e4) {
                        return g(this, 0 === t4 ? 0 : t4, e4);
                      }
                    } : {
                      add: function add(t4) {
                        return g(this, t4 = 0 === t4 ? 0 : t4, t4);
                      }
                    }), f && r(l2.prototype, "size", {
                      get: function get() {
                        return d2(this).size;
                      }
                    }), l2;
                  },
                  setStrong: function setStrong(t3, e3, n3) {
                    var r2 = e3 + " Iterator";
                    var i2 = v(e3);
                    var o2 = v(r2);
                    s(t3, e3, function (t4, e4) {
                      h(this, {
                        type: r2,
                        target: t4,
                        state: i2(t4),
                        kind: e4,
                        last: void 0
                      });
                    }, function () {
                      for (var t4 = o2(this), e4 = t4.kind, n4 = t4.last; n4 && n4.removed;) n4 = n4.previous;
                      return t4.target && (t4.last = n4 = n4 ? n4.next : t4.state.first) ? "keys" == e4 ? {
                        value: n4.key,
                        done: false
                      } : "values" == e4 ? {
                        value: n4.value,
                        done: false
                      } : {
                        value: [n4.key, n4.value],
                        done: false
                      } : (t4.target = void 0, {
                        value: void 0,
                        done: true
                      });
                    }, n3 ? "entries" : "values", !n3, true), l(e3);
                  }
                };
              },
              7710: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(2109);
                var i = n2(7854);
                var o = n2(4705);
                var a = n2(1320);
                var c = n2(2423);
                var u = n2(408);
                var s = n2(5787);
                var l = n2(111);
                var f = n2(7293);
                var p = n2(7072);
                var d = n2(8003);
                var h = n2(9587);
                t2.exports = function (t3, e3, n3) {
                  var v = t3.indexOf("Map") !== -1;
                  var g = t3.indexOf("Weak") !== -1;
                  var m = v ? "set" : "add";
                  var y = i[t3];
                  var k = y && y.prototype;
                  var b = y;
                  var A = {};
                  var w = function w(t4) {
                    var e4 = k[t4];
                    a(k, t4, "add" == t4 ? function (t5) {
                      return e4.call(this, 0 === t5 ? 0 : t5), this;
                    } : "delete" == t4 ? function (t5) {
                      return !(g && !l(t5)) && e4.call(this, 0 === t5 ? 0 : t5);
                    } : "get" == t4 ? function (t5) {
                      return g && !l(t5) ? void 0 : e4.call(this, 0 === t5 ? 0 : t5);
                    } : "has" == t4 ? function (t5) {
                      return !(g && !l(t5)) && e4.call(this, 0 === t5 ? 0 : t5);
                    } : function (t5, n4) {
                      return e4.call(this, 0 === t5 ? 0 : t5, n4), this;
                    });
                  };
                  if (o(t3, "function" != typeof y || !(g || k.forEach && !f(function () {
                    new y().entries().next();
                  })))) b = n3.getConstructor(e3, t3, v, m), c.REQUIRED = true;else if (o(t3, true)) {
                    var x = new b();
                    var I = x[m](g ? {} : -0, 1) != x;
                    var C = f(function () {
                      x.has(1);
                    });
                    var B = p(function (t4) {
                      new y(t4);
                    });
                    var _ = !g && f(function () {
                      for (var t4 = new y(), e4 = 5; e4--;) t4[m](e4, e4);
                      return !t4.has(-0);
                    });
                    B || ((b = e3(function (e4, n4) {
                      s(e4, b, t3);
                      var r2 = h(new y(), e4, b);
                      return null != n4 && u(n4, r2[m], r2, v), r2;
                    })).prototype = k, k.constructor = b), (C || _) && (w("delete"), w("has"), v && w("get")), (_ || I) && w(m), g && k.clear && delete k.clear;
                  }
                  return A[t3] = b, r({
                    global: true,
                    forced: b != y
                  }, A), d(b, t3), g || n3.setStrong(b, t3, v), b;
                };
              },
              9920: function _(t2, e2, n2) {
                var r = n2(6656);
                var i = n2(3887);
                var o = n2(1236);
                var a = n2(3070);
                t2.exports = function (t3, e3) {
                  for (var n3 = i(e3), c = a.f, u = o.f, s = 0; s < n3.length; s++) {
                    var l = n3[s];
                    r(t3, l) || c(t3, l, u(e3, l));
                  }
                };
              },
              4964: function _(t2, e2, n2) {
                var r = n2(5112)("match");
                t2.exports = function (t3) {
                  var e3 = /./;
                  try {
                    "/./"[t3](e3);
                  } catch (n3) {
                    try {
                      return e3[r] = false, "/./"[t3](e3);
                    } catch (t4) {}
                  }
                  return false;
                };
              },
              8544: function _(t2, e2, n2) {
                var r = n2(7293);
                t2.exports = !r(function () {
                  function t3() {}
                  return t3.prototype.constructor = null, Object.getPrototypeOf(new t3()) !== t3.prototype;
                });
              },
              4994: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(3383).IteratorPrototype;
                var i = n2(30);
                var o = n2(9114);
                var a = n2(8003);
                var c = n2(7497);
                var u = function u() {
                  return this;
                };
                t2.exports = function (t3, e3, n3) {
                  var s = e3 + " Iterator";
                  return t3.prototype = i(r, {
                    next: o(1, n3)
                  }), a(t3, s, false, true), c[s] = u, t3;
                };
              },
              8880: function _(t2, e2, n2) {
                var r = n2(9781);
                var i = n2(3070);
                var o = n2(9114);
                t2.exports = r ? function (t3, e3, n3) {
                  return i.f(t3, e3, o(1, n3));
                } : function (t3, e3, n3) {
                  return t3[e3] = n3, t3;
                };
              },
              9114: function _(t2) {
                t2.exports = function (t3, e2) {
                  return {
                    enumerable: !(1 & t3),
                    configurable: !(2 & t3),
                    writable: !(4 & t3),
                    value: e2
                  };
                };
              },
              6135: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(7593);
                var i = n2(3070);
                var o = n2(9114);
                t2.exports = function (t3, e3, n3) {
                  var a = r(e3);
                  a in t3 ? i.f(t3, a, o(0, n3)) : t3[a] = n3;
                };
              },
              654: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(2109);
                var i = n2(4994);
                var o = n2(9518);
                var a = n2(7674);
                var c = n2(8003);
                var u = n2(8880);
                var s = n2(1320);
                var l = n2(5112);
                var f = n2(1913);
                var p = n2(7497);
                var d = n2(3383);
                var h = d.IteratorPrototype;
                var v = d.BUGGY_SAFARI_ITERATORS;
                var g = l("iterator");
                var m = "keys";
                var y = "values";
                var k = "entries";
                var b = function b() {
                  return this;
                };
                t2.exports = function (t3, e3, n3, l2, d2, A, w) {
                  i(n3, e3, l2);
                  var x;
                  var I;
                  var C;
                  var B = function B(t4) {
                    if (t4 === d2 && W) return W;
                    if (!v && t4 in O) return O[t4];
                    switch (t4) {
                      case m:
                      case y:
                      case k:
                        return function () {
                          return new n3(this, t4);
                        };
                    }
                    return function () {
                      return new n3(this);
                    };
                  };
                  var _ = e3 + " Iterator";
                  var S = false;
                  var O = t3.prototype;
                  var P = O[g] || O["@@iterator"] || d2 && O[d2];
                  var W = !v && P || B(d2);
                  var E = "Array" == e3 && O.entries || P;
                  if (E && (x = o(E.call(new t3())), h !== Object.prototype && x.next && (f || o(x) === h || (a ? a(x, h) : "function" != typeof x[g] && u(x, g, b)), c(x, _, true, true), f && (p[_] = b))), d2 == y && P && P.name !== y && (S = true, W = function W() {
                    return P.call(this);
                  }), f && !w || O[g] === W || u(O, g, W), p[e3] = W, d2) if (I = {
                    values: B(y),
                    keys: A ? W : B(m),
                    entries: B(k)
                  }, w) for (C in I) (v || S || !(C in O)) && s(O, C, I[C]);else r({
                    target: e3,
                    proto: true,
                    forced: v || S
                  }, I);
                  return I;
                };
              },
              7235: function _(t2, e2, n2) {
                var r = n2(857);
                var i = n2(6656);
                var o = n2(6061);
                var a = n2(3070).f;
                t2.exports = function (t3) {
                  var e3 = r.Symbol || (r.Symbol = {});
                  i(e3, t3) || a(e3, t3, {
                    value: o.f(t3)
                  });
                };
              },
              9781: function _(t2, e2, n2) {
                var r = n2(7293);
                t2.exports = !r(function () {
                  return 7 != Object.defineProperty({}, 1, {
                    get: function get() {
                      return 7;
                    }
                  })[1];
                });
              },
              317: function _(t2, e2, n2) {
                var r = n2(7854);
                var i = n2(111);
                var o = r.document;
                var a = i(o) && i(o.createElement);
                t2.exports = function (t3) {
                  return a ? o.createElement(t3) : {};
                };
              },
              8324: function _(t2) {
                t2.exports = {
                  CSSRuleList: 0,
                  CSSStyleDeclaration: 0,
                  CSSValueList: 0,
                  ClientRectList: 0,
                  DOMRectList: 0,
                  DOMStringList: 0,
                  DOMTokenList: 1,
                  DataTransferItemList: 0,
                  FileList: 0,
                  HTMLAllCollection: 0,
                  HTMLCollection: 0,
                  HTMLFormElement: 0,
                  HTMLSelectElement: 0,
                  MediaList: 0,
                  MimeTypeArray: 0,
                  NamedNodeMap: 0,
                  NodeList: 1,
                  PaintRequestList: 0,
                  Plugin: 0,
                  PluginArray: 0,
                  SVGLengthList: 0,
                  SVGNumberList: 0,
                  SVGPathSegList: 0,
                  SVGPointList: 0,
                  SVGStringList: 0,
                  SVGTransformList: 0,
                  SourceBufferList: 0,
                  StyleSheetList: 0,
                  TextTrackCueList: 0,
                  TextTrackList: 0,
                  TouchList: 0
                };
              },
              6833: function _(t2, e2, n2) {
                var r = n2(8113);
                t2.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
              },
              8113: function _(t2, e2, n2) {
                var r = n2(5005);
                t2.exports = r("navigator", "userAgent") || "";
              },
              7392: function _(t2, e2, n2) {
                var r;
                var i;
                var o = n2(7854);
                var a = n2(8113);
                var c = o.process;
                var u = c && c.versions;
                var s = u && u.v8;
                s ? i = (r = s.split("."))[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (i = r[1]), t2.exports = i && +i;
              },
              748: function _(t2) {
                t2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
              },
              2109: function _(t2, e2, n2) {
                var r = n2(7854);
                var i = n2(1236).f;
                var o = n2(8880);
                var a = n2(1320);
                var c = n2(3505);
                var u = n2(9920);
                var s = n2(4705);
                t2.exports = function (t3, e3) {
                  var n3;
                  var l;
                  var f;
                  var p;
                  var d;
                  var h = t3.target;
                  var v = t3.global;
                  var g = t3.stat;
                  if (n3 = v ? r : g ? r[h] || c(h, {}) : (r[h] || {}).prototype) for (l in e3) {
                    if (p = e3[l], f = t3.noTargetGet ? (d = i(n3, l)) && d.value : n3[l], !s(v ? l : h + (g ? "." : "#") + l, t3.forced) && void 0 !== f) {
                      if (_typeof(p) == _typeof(f)) continue;
                      u(p, f);
                    }
                    (t3.sham || f && f.sham) && o(p, "sham", true), a(n3, l, p, t3);
                  }
                };
              },
              7293: function _(t2) {
                t2.exports = function (t3) {
                  try {
                    return !!t3();
                  } catch (t4) {
                    return true;
                  }
                };
              },
              7007: function _(t2, e2, n2) {
                "use strict";
    
                n2(4916);
                var r = n2(1320);
                var i = n2(7293);
                var o = n2(5112);
                var a = n2(2261);
                var c = n2(8880);
                var u = o("species");
                var s = !i(function () {
                  var t3 = /./;
                  return t3.exec = function () {
                    var t4 = [];
                    return t4.groups = {
                      a: "7"
                    }, t4;
                  }, "7" !== "".replace(t3, "$<a>");
                });
                var l = "$0" === "a".replace(/./, "$0");
                var f = o("replace");
                var p = !!/./[f] && "" === /./[f]("a", "$0");
                var d = !i(function () {
                  var t3 = /(?:)/,
                    e3 = t3.exec;
                  t3.exec = function () {
                    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                      args[_key2] = arguments[_key2];
                    }
                    return e3.apply(this, args);
                  };
                  var n3 = "ab".split(t3);
                  return 2 !== n3.length || "a" !== n3[0] || "b" !== n3[1];
                });
                t2.exports = function (t3, e3, n3, f2) {
                  var h = o(t3);
                  var v = !i(function () {
                    var e4 = {};
                    return e4[h] = function () {
                      return 7;
                    }, 7 != ""[t3](e4);
                  });
                  var g = v && !i(function () {
                    var e4 = false,
                      n4 = /a/;
                    return "split" === t3 && ((n4 = {}).constructor = {}, n4.constructor[u] = function () {
                      return n4;
                    }, n4.flags = "", n4[h] = /./[h]), n4.exec = function () {
                      return e4 = true, null;
                    }, n4[h](""), !e4;
                  });
                  if (!v || !g || "replace" === t3 && (!s || !l || p) || "split" === t3 && !d) {
                    var m = /./[h];
                    var y = n3(h, ""[t3], function (t4, e4, n4, r2, i2) {
                      return e4.exec === a ? v && !i2 ? {
                        done: true,
                        value: m.call(e4, n4, r2)
                      } : {
                        done: true,
                        value: t4.call(n4, e4, r2)
                      } : {
                        done: false
                      };
                    }, {
                      REPLACE_KEEPS_$0: l,
                      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p
                    });
                    var k = y[0];
                    var b = y[1];
                    r(String.prototype, t3, k), r(RegExp.prototype, h, 2 == e3 ? function (t4, e4) {
                      return b.call(t4, this, e4);
                    } : function (t4) {
                      return b.call(t4, this);
                    });
                  }
                  f2 && c(RegExp.prototype[h], "sham", true);
                };
              },
              6677: function _(t2, e2, n2) {
                var r = n2(7293);
                t2.exports = !r(function () {
                  return Object.isExtensible(Object.preventExtensions({}));
                });
              },
              9974: function _(t2, e2, n2) {
                var r = n2(3099);
                t2.exports = function (t3, e3, n3) {
                  if (r(t3), void 0 === e3) return t3;
                  switch (n3) {
                    case 0:
                      return function () {
                        return t3.call(e3);
                      };
                    case 1:
                      return function (n4) {
                        return t3.call(e3, n4);
                      };
                    case 2:
                      return function (n4, r2) {
                        return t3.call(e3, n4, r2);
                      };
                    case 3:
                      return function (n4, r2, i) {
                        return t3.call(e3, n4, r2, i);
                      };
                  }
                  return function () {
                    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                      args[_key3] = arguments[_key3];
                    }
                    return t3.apply(e3, args);
                  };
                };
              },
              7065: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(3099);
                var i = n2(111);
                var o = [].slice;
                var a = {};
                var c = function c(t3, e3, n3) {
                  if (!(e3 in a)) {
                    for (var r2 = [], i2 = 0; i2 < e3; i2++) r2[i2] = "a[" + i2 + "]";
                    a[e3] = Function("C,a", "return new C(" + r2.join(",") + ")");
                  }
                  return a[e3](t3, n3);
                };
                t2.exports = Function.bind || function (t3) {
                  var e3 = r(this);
                  var n3 = o.call(arguments, 1);
                  var a2 = function a2() {
                    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                      args[_key4] = arguments[_key4];
                    }
                    var r2 = n3.concat(o.call(args));
                    return this instanceof a2 ? c(e3, r2.length, r2) : e3.apply(t3, r2);
                  };
                  return i(e3.prototype) && (a2.prototype = e3.prototype), a2;
                };
              },
              5005: function _(t2, e2, n2) {
                var r = n2(857);
                var i = n2(7854);
                var o = function o(t3) {
                  return "function" == typeof t3 ? t3 : void 0;
                };
                t2.exports = function (t3, e3) {
                  return arguments.length < 2 ? o(r[t3]) || o(i[t3]) : r[t3] && r[t3][e3] || i[t3] && i[t3][e3];
                };
              },
              1246: function _(t2, e2, n2) {
                var r = n2(648);
                var i = n2(7497);
                var o = n2(5112)("iterator");
                t2.exports = function (t3) {
                  if (null != t3) return t3[o] || t3["@@iterator"] || i[r(t3)];
                };
              },
              8554: function _(t2, e2, n2) {
                var r = n2(9670);
                var i = n2(1246);
                t2.exports = function (t3) {
                  var e3 = i(t3);
                  if ("function" != typeof e3) throw TypeError(String(t3) + " is not iterable");
                  return r(e3.call(t3));
                };
              },
              7854: function _(t2, e2, n2) {
                var r = function r(t3) {
                  return t3 && t3.Math == Math && t3;
                };
                t2.exports = r("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis) || r("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window) || r("object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self) || r("object" == _typeof(n2.g) && n2.g) || Function("return this")();
              },
              6656: function _(t2) {
                var e2 = {}.hasOwnProperty;
                t2.exports = function (t3, n2) {
                  return e2.call(t3, n2);
                };
              },
              3501: function _(t2) {
                t2.exports = {};
              },
              842: function _(t2, e2, n2) {
                var r = n2(7854);
                t2.exports = function (t3, e3) {
                  var n3 = r.console;
                  n3 && n3.error && (1 === arguments.length ? n3.error(t3) : n3.error(t3, e3));
                };
              },
              490: function _(t2, e2, n2) {
                var r = n2(5005);
                t2.exports = r("document", "documentElement");
              },
              4664: function _(t2, e2, n2) {
                var r = n2(9781);
                var i = n2(7293);
                var o = n2(317);
                t2.exports = !r && !i(function () {
                  return 7 != Object.defineProperty(o("div"), "a", {
                    get: function get() {
                      return 7;
                    }
                  }).a;
                });
              },
              8361: function _(t2, e2, n2) {
                var r = n2(7293);
                var i = n2(4326);
                var o = "".split;
                t2.exports = r(function () {
                  return !Object("z").propertyIsEnumerable(0);
                }) ? function (t3) {
                  return "String" == i(t3) ? o.call(t3, "") : Object(t3);
                } : Object;
              },
              9587: function _(t2, e2, n2) {
                var r = n2(111);
                var i = n2(7674);
                t2.exports = function (t3, e3, n3) {
                  var o;
                  var a;
                  return i && "function" == typeof (o = e3.constructor) && o !== n3 && r(a = o.prototype) && a !== n3.prototype && i(t3, a), t3;
                };
              },
              2788: function _(t2, e2, n2) {
                var r = n2(5465);
                var i = Function.toString;
                "function" != typeof r.inspectSource && (r.inspectSource = function (t3) {
                  return i.call(t3);
                }), t2.exports = r.inspectSource;
              },
              2423: function _(t2, e2, n2) {
                var r = n2(3501);
                var i = n2(111);
                var o = n2(6656);
                var a = n2(3070).f;
                var c = n2(9711);
                var u = n2(6677);
                var s = c("meta");
                var l = 0;
                var f = Object.isExtensible || function () {
                  return true;
                };
                var p = function p(t3) {
                  a(t3, s, {
                    value: {
                      objectID: "O" + ++l,
                      weakData: {}
                    }
                  });
                };
                var d = t2.exports = {
                  REQUIRED: false,
                  fastKey: function fastKey(t3, e3) {
                    if (!i(t3)) return "symbol" == _typeof(t3) ? t3 : ("string" == typeof t3 ? "S" : "P") + t3;
                    if (!o(t3, s)) {
                      if (!f(t3)) return "F";
                      if (!e3) return "E";
                      p(t3);
                    }
                    return t3[s].objectID;
                  },
                  getWeakData: function getWeakData(t3, e3) {
                    if (!o(t3, s)) {
                      if (!f(t3)) return true;
                      if (!e3) return false;
                      p(t3);
                    }
                    return t3[s].weakData;
                  },
                  onFreeze: function onFreeze(t3) {
                    return u && d.REQUIRED && f(t3) && !o(t3, s) && p(t3), t3;
                  }
                };
                r[s] = true;
              },
              9909: function _(t2, e2, n2) {
                var r;
                var i;
                var o;
                var a = n2(8536);
                var c = n2(7854);
                var u = n2(111);
                var s = n2(8880);
                var l = n2(6656);
                var f = n2(6200);
                var p = n2(3501);
                var d = c.WeakMap;
                if (a) {
                  var h = new d();
                  var v = h.get;
                  var g = h.has;
                  var m = h.set;
                  r = function r(t3, e3) {
                    return m.call(h, t3, e3), e3;
                  }, i = function i(t3) {
                    return v.call(h, t3) || {};
                  }, o = function o(t3) {
                    return g.call(h, t3);
                  };
                } else {
                  var y = f("state");
                  p[y] = true, r = function r(t3, e3) {
                    return s(t3, y, e3), e3;
                  }, i = function i(t3) {
                    return l(t3, y) ? t3[y] : {};
                  }, o = function o(t3) {
                    return l(t3, y);
                  };
                }
                t2.exports = {
                  set: r,
                  get: i,
                  has: o,
                  enforce: function enforce(t3) {
                    return o(t3) ? i(t3) : r(t3, {});
                  },
                  getterFor: function getterFor(t3) {
                    return function (e3) {
                      var n3;
                      if (!u(e3) || (n3 = i(e3)).type !== t3) throw TypeError("Incompatible receiver, " + t3 + " required");
                      return n3;
                    };
                  }
                };
              },
              7659: function _(t2, e2, n2) {
                var r = n2(5112);
                var i = n2(7497);
                var o = r("iterator");
                var a = Array.prototype;
                t2.exports = function (t3) {
                  return void 0 !== t3 && (i.Array === t3 || a[o] === t3);
                };
              },
              3157: function _(t2, e2, n2) {
                var r = n2(4326);
                t2.exports = Array.isArray || function (t3) {
                  return "Array" == r(t3);
                };
              },
              4705: function _(t2, e2, n2) {
                var r = n2(7293);
                var i = /#|\.prototype\./;
                var o = function o(t3, e3) {
                  var n3 = c[a(t3)];
                  return n3 == s || n3 != u && ("function" == typeof e3 ? r(e3) : !!e3);
                };
                var a = o.normalize = function (t3) {
                  return String(t3).replace(i, ".").toLowerCase();
                };
                var c = o.data = {};
                var u = o.NATIVE = "N";
                var s = o.POLYFILL = "P";
                t2.exports = o;
              },
              111: function _(t2) {
                t2.exports = function (t3) {
                  return "object" == _typeof(t3) ? null !== t3 : "function" == typeof t3;
                };
              },
              1913: function _(t2) {
                t2.exports = false;
              },
              7850: function _(t2, e2, n2) {
                var r = n2(111);
                var i = n2(4326);
                var o = n2(5112)("match");
                t2.exports = function (t3) {
                  var e3;
                  return r(t3) && (void 0 !== (e3 = t3[o]) ? !!e3 : "RegExp" == i(t3));
                };
              },
              408: function _(t2, e2, n2) {
                var r = n2(9670);
                var i = n2(7659);
                var o = n2(7466);
                var a = n2(9974);
                var c = n2(1246);
                var u = n2(3411);
                var s = function s(t3, e3) {
                  this.stopped = t3, this.result = e3;
                };
                (t2.exports = function (t3, e3, n3, l, f) {
                  var p;
                  var d;
                  var h;
                  var v;
                  var g;
                  var m;
                  var y;
                  var k = a(e3, n3, l ? 2 : 1);
                  if (f) p = t3;else {
                    if ("function" != typeof (d = c(t3))) throw TypeError("Target is not iterable");
                    if (i(d)) {
                      for (h = 0, v = o(t3.length); v > h; h++) if ((g = l ? k(r(y = t3[h])[0], y[1]) : k(t3[h])) && g instanceof s) return g;
                      return new s(false);
                    }
                    p = d.call(t3);
                  }
                  for (m = p.next; !(y = m.call(p)).done;) if ("object" == _typeof(g = u(p, k, y.value, l)) && g && g instanceof s) return g;
                  return new s(false);
                }).stop = function (t3) {
                  return new s(true, t3);
                };
              },
              3383: function _(t2, e2, n2) {
                "use strict";
    
                var r;
                var i;
                var o;
                var a = n2(9518);
                var c = n2(8880);
                var u = n2(6656);
                var s = n2(5112);
                var l = n2(1913);
                var f = s("iterator");
                var p = false;
                [].keys && ("next" in (o = [].keys()) ? (i = a(a(o))) !== Object.prototype && (r = i) : p = true), null == r && (r = {}), l || u(r, f) || c(r, f, function () {
                  return this;
                }), t2.exports = {
                  IteratorPrototype: r,
                  BUGGY_SAFARI_ITERATORS: p
                };
              },
              7497: function _(t2) {
                t2.exports = {};
              },
              5948: function _(t2, e2, n2) {
                var r;
                var i;
                var o;
                var a;
                var c;
                var u;
                var s;
                var l;
                var f = n2(7854);
                var p = n2(1236).f;
                var d = n2(4326);
                var h = n2(261).set;
                var v = n2(6833);
                var g = f.MutationObserver || f.WebKitMutationObserver;
                var m = f.process;
                var y = f.Promise;
                var k = "process" == d(m);
                var b = p(f, "queueMicrotask");
                var A = b && b.value;
                A || (r = function r() {
                  var t3;
                  var e3;
                  for (k && (t3 = m.domain) && t3.exit(); i;) {
                    e3 = i.fn, i = i.next;
                    try {
                      e3();
                    } catch (t4) {
                      throw i ? a() : o = void 0, t4;
                    }
                  }
                  o = void 0, t3 && t3.enter();
                }, k ? a = function a() {
                  m.nextTick(r);
                } : g && !v ? (c = true, u = document.createTextNode(""), new g(r).observe(u, {
                  characterData: true
                }), a = function a() {
                  u.data = c = !c;
                }) : y && y.resolve ? (s = y.resolve(void 0), l = s.then, a = function a() {
                  l.call(s, r);
                }) : a = function a() {
                  h.call(f, r);
                }), t2.exports = A || function (t3) {
                  var e3 = {
                    fn: t3,
                    next: void 0
                  };
                  o && (o.next = e3), i || (i = e3, a()), o = e3;
                };
              },
              3366: function _(t2, e2, n2) {
                var r = n2(7854);
                t2.exports = r.Promise;
              },
              133: function _(t2, e2, n2) {
                var r = n2(7293);
                t2.exports = !!Object.getOwnPropertySymbols && !r(function () {
                  return !String(Symbol());
                });
              },
              590: function _(t2, e2, n2) {
                var r = n2(7293);
                var i = n2(5112);
                var o = n2(1913);
                var a = i("iterator");
                t2.exports = !r(function () {
                  var t3 = new URL("b?a=1&b=2&c=3", "http://a");
                  var e3 = t3.searchParams;
                  var n3 = "";
                  return t3.pathname = "c%20d", e3.forEach(function (t4, r2) {
                    e3["delete"]("b"), n3 += r2 + t4;
                  }), o && !t3.toJSON || !e3.sort || "http://a/c%20d?a=1&c=3" !== t3.href || "3" !== e3.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e3[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n3 || "x" !== new URL("http://x", void 0).host;
                });
              },
              8536: function _(t2, e2, n2) {
                var r = n2(7854);
                var i = n2(2788);
                var o = r.WeakMap;
                t2.exports = "function" == typeof o && /native code/.test(i(o));
              },
              8523: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(3099);
                var i = function i(t3) {
                  var e3, n3;
                  this.promise = new t3(function (t4, r2) {
                    if (void 0 !== e3 || void 0 !== n3) throw TypeError("Bad Promise constructor");
                    e3 = t4, n3 = r2;
                  }), this.resolve = r(e3), this.reject = r(n3);
                };
                t2.exports.f = function (t3) {
                  return new i(t3);
                };
              },
              3929: function _(t2, e2, n2) {
                var r = n2(7850);
                t2.exports = function (t3) {
                  if (r(t3)) throw TypeError("The method doesn't accept regular expressions");
                  return t3;
                };
              },
              1574: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(9781);
                var i = n2(7293);
                var o = n2(1956);
                var a = n2(5181);
                var c = n2(5296);
                var u = n2(7908);
                var s = n2(8361);
                var l = Object.assign;
                var f = Object.defineProperty;
                t2.exports = !l || i(function () {
                  if (r && 1 !== l({
                    b: 1
                  }, l(f({}, "a", {
                    enumerable: true,
                    get: function get() {
                      f(this, "b", {
                        value: 3,
                        enumerable: false
                      });
                    }
                  }), {
                    b: 2
                  })).b) return true;
                  var t3 = {};
                  var e3 = {};
                  var n3 = Symbol();
                  var i2 = "abcdefghijklmnopqrst";
                  return t3[n3] = 7, i2.split("").forEach(function (t4) {
                    e3[t4] = t4;
                  }), 7 != l({}, t3)[n3] || o(l({}, e3)).join("") != i2;
                }) ? function (t3, e3) {
                  for (var n3 = u(t3), i2 = arguments.length, l2 = 1, f2 = a.f, p = c.f; i2 > l2;) for (var d, h = s(arguments[l2++]), v = f2 ? o(h).concat(f2(h)) : o(h), g = v.length, m = 0; g > m;) d = v[m++], r && !p.call(h, d) || (n3[d] = h[d]);
                  return n3;
                } : l;
              },
              30: function _(t2, e2, n2) {
                var r;
                var i = n2(9670);
                var o = n2(6048);
                var a = n2(748);
                var c = n2(3501);
                var u = n2(490);
                var s = n2(317);
                var l = n2(6200);
                var f = l("IE_PROTO");
                var p = function p() {};
                var d = function d(t3) {
                  return "<script>" + t3 + "<\/script>";
                };
                var _h = function h() {
                  try {
                    r = document.domain && new ActiveXObject("htmlfile");
                  } catch (t4) {}
                  var t3;
                  var e3;
                  _h = r ? function (t4) {
                    t4.write(d("")), t4.close();
                    var e4 = t4.parentWindow.Object;
                    return t4 = null, e4;
                  }(r) : ((e3 = s("iframe")).style.display = "none", u.appendChild(e3), e3.src = String("javascript:"), (t3 = e3.contentWindow.document).open(), t3.write(d("document.F=Object")), t3.close(), t3.F);
                  for (var n3 = a.length; n3--;) delete _h.prototype[a[n3]];
                  return _h();
                };
                c[f] = true, t2.exports = Object.create || function (t3, e3) {
                  var n3;
                  return null !== t3 ? (p.prototype = i(t3), n3 = new p(), p.prototype = null, n3[f] = t3) : n3 = _h(), void 0 === e3 ? n3 : o(n3, e3);
                };
              },
              6048: function _(t2, e2, n2) {
                var r = n2(9781);
                var i = n2(3070);
                var o = n2(9670);
                var a = n2(1956);
                t2.exports = r ? Object.defineProperties : function (t3, e3) {
                  o(t3);
                  for (var n3, r2 = a(e3), c = r2.length, u = 0; c > u;) i.f(t3, n3 = r2[u++], e3[n3]);
                  return t3;
                };
              },
              3070: function _(t2, e2, n2) {
                var r = n2(9781);
                var i = n2(4664);
                var o = n2(9670);
                var a = n2(7593);
                var c = Object.defineProperty;
                e2.f = r ? c : function (t3, e3, n3) {
                  if (o(t3), e3 = a(e3, true), o(n3), i) try {
                    return c(t3, e3, n3);
                  } catch (t4) {}
                  if ("get" in n3 || "set" in n3) throw TypeError("Accessors not supported");
                  return "value" in n3 && (t3[e3] = n3.value), t3;
                };
              },
              1236: function _(t2, e2, n2) {
                var r = n2(9781);
                var i = n2(5296);
                var o = n2(9114);
                var a = n2(5656);
                var c = n2(7593);
                var u = n2(6656);
                var s = n2(4664);
                var l = Object.getOwnPropertyDescriptor;
                e2.f = r ? l : function (t3, e3) {
                  if (t3 = a(t3), e3 = c(e3, true), s) try {
                    return l(t3, e3);
                  } catch (t4) {}
                  if (u(t3, e3)) return o(!i.f.call(t3, e3), t3[e3]);
                };
              },
              1156: function _(t2, e2, n2) {
                var r = n2(5656);
                var i = n2(8006).f;
                var o = {}.toString;
                var a = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
                t2.exports.f = function (t3) {
                  return a && "[object Window]" == o.call(t3) ? function (t4) {
                    try {
                      return i(t4);
                    } catch (t5) {
                      return a.slice();
                    }
                  }(t3) : i(r(t3));
                };
              },
              8006: function _(t2, e2, n2) {
                var r = n2(6324);
                var i = n2(748).concat("length", "prototype");
                e2.f = Object.getOwnPropertyNames || function (t3) {
                  return r(t3, i);
                };
              },
              5181: function _(t2, e2) {
                e2.f = Object.getOwnPropertySymbols;
              },
              9518: function _(t2, e2, n2) {
                var r = n2(6656);
                var i = n2(7908);
                var o = n2(6200);
                var a = n2(8544);
                var c = o("IE_PROTO");
                var u = Object.prototype;
                t2.exports = a ? Object.getPrototypeOf : function (t3) {
                  return t3 = i(t3), r(t3, c) ? t3[c] : "function" == typeof t3.constructor && t3 instanceof t3.constructor ? t3.constructor.prototype : t3 instanceof Object ? u : null;
                };
              },
              6324: function _(t2, e2, n2) {
                var r = n2(6656);
                var i = n2(5656);
                var o = n2(1318).indexOf;
                var a = n2(3501);
                t2.exports = function (t3, e3) {
                  var n3;
                  var c = i(t3);
                  var u = 0;
                  var s = [];
                  for (n3 in c) !r(a, n3) && r(c, n3) && s.push(n3);
                  for (; e3.length > u;) r(c, n3 = e3[u++]) && (~o(s, n3) || s.push(n3));
                  return s;
                };
              },
              1956: function _(t2, e2, n2) {
                var r = n2(6324);
                var i = n2(748);
                t2.exports = Object.keys || function (t3) {
                  return r(t3, i);
                };
              },
              5296: function _(t2, e2) {
                "use strict";
    
                var n2 = {}.propertyIsEnumerable;
                var r = Object.getOwnPropertyDescriptor;
                var i = r && !n2.call({
                  1: 2
                }, 1);
                e2.f = i ? function (t3) {
                  var e3 = r(this, t3);
                  return !!e3 && e3.enumerable;
                } : n2;
              },
              7674: function _(t2, e2, n2) {
                var r = n2(9670);
                var i = n2(6077);
                t2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
                  var t3;
                  var e3 = false;
                  var n3 = {};
                  try {
                    (t3 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n3, []), e3 = n3 instanceof Array;
                  } catch (t4) {}
                  return function (n4, o) {
                    return r(n4), i(o), e3 ? t3.call(n4, o) : n4.__proto__ = o, n4;
                  };
                }() : void 0);
              },
              4699: function _(t2, e2, n2) {
                var r = n2(9781);
                var i = n2(1956);
                var o = n2(5656);
                var a = n2(5296).f;
                var c = function c(t3) {
                  return function (e3) {
                    for (var n3, c2 = o(e3), u = i(c2), s = u.length, l = 0, f = []; s > l;) n3 = u[l++], r && !a.call(c2, n3) || f.push(t3 ? [n3, c2[n3]] : c2[n3]);
                    return f;
                  };
                };
                t2.exports = {
                  entries: c(true),
                  values: c(false)
                };
              },
              288: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(1694);
                var i = n2(648);
                t2.exports = r ? {}.toString : function () {
                  return "[object " + i(this) + "]";
                };
              },
              3887: function _(t2, e2, n2) {
                var r = n2(5005);
                var i = n2(8006);
                var o = n2(5181);
                var a = n2(9670);
                t2.exports = r("Reflect", "ownKeys") || function (t3) {
                  var e3 = i.f(a(t3));
                  var n3 = o.f;
                  return n3 ? e3.concat(n3(t3)) : e3;
                };
              },
              857: function _(t2, e2, n2) {
                var r = n2(7854);
                t2.exports = r;
              },
              2534: function _(t2) {
                t2.exports = function (t3) {
                  try {
                    return {
                      error: false,
                      value: t3()
                    };
                  } catch (t4) {
                    return {
                      error: true,
                      value: t4
                    };
                  }
                };
              },
              9478: function _(t2, e2, n2) {
                var r = n2(9670);
                var i = n2(111);
                var o = n2(8523);
                t2.exports = function (t3, e3) {
                  if (r(t3), i(e3) && e3.constructor === t3) return e3;
                  var n3 = o.f(t3);
                  return (0, n3.resolve)(e3), n3.promise;
                };
              },
              2248: function _(t2, e2, n2) {
                var r = n2(1320);
                t2.exports = function (t3, e3, n3) {
                  for (var i in e3) r(t3, i, e3[i], n3);
                  return t3;
                };
              },
              1320: function _(t2, e2, n2) {
                var r = n2(7854);
                var i = n2(8880);
                var o = n2(6656);
                var a = n2(3505);
                var c = n2(2788);
                var u = n2(9909);
                var s = u.get;
                var l = u.enforce;
                var f = String(String).split("String");
                (t2.exports = function (t3, e3, n3, c2) {
                  var u2 = !!c2 && !!c2.unsafe;
                  var s2 = !!c2 && !!c2.enumerable;
                  var p = !!c2 && !!c2.noTargetGet;
                  "function" == typeof n3 && ("string" != typeof e3 || o(n3, "name") || i(n3, "name", e3), l(n3).source = f.join("string" == typeof e3 ? e3 : "")), t3 !== r ? (u2 ? !p && t3[e3] && (s2 = true) : delete t3[e3], s2 ? t3[e3] = n3 : i(t3, e3, n3)) : s2 ? t3[e3] = n3 : a(e3, n3);
                })(Function.prototype, "toString", function () {
                  return "function" == typeof this && s(this).source || c(this);
                });
              },
              7651: function _(t2, e2, n2) {
                var r = n2(4326);
                var i = n2(2261);
                t2.exports = function (t3, e3) {
                  var n3 = t3.exec;
                  if ("function" == typeof n3) {
                    var o = n3.call(t3, e3);
                    if ("object" != _typeof(o)) throw TypeError("RegExp exec method returned something other than an Object or null");
                    return o;
                  }
                  if ("RegExp" !== r(t3)) throw TypeError("RegExp#exec called on incompatible receiver");
                  return i.call(t3, e3);
                };
              },
              2261: function _(t2, e2, n2) {
                "use strict";
    
                var r;
                var i;
                var o = n2(7066);
                var a = n2(2999);
                var c = RegExp.prototype.exec;
                var u = String.prototype.replace;
                var s = c;
                var l = (r = /a/, i = /b*/g, c.call(r, "a"), c.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex);
                var f = a.UNSUPPORTED_Y || a.BROKEN_CARET;
                var p = void 0 !== /()??/.exec("")[1];
                (l || p || f) && (s = function s(t3) {
                  var e3;
                  var n3;
                  var r2;
                  var i2;
                  var a2 = this;
                  var s2 = f && a2.sticky;
                  var d = o.call(a2);
                  var h = a2.source;
                  var v = 0;
                  var g = t3;
                  return s2 && (!((d = d.replace("y", "")).indexOf("g") !== -1) && (d += "g"), g = String(t3).slice(a2.lastIndex), a2.lastIndex > 0 && (!a2.multiline || a2.multiline && "\n" !== t3[a2.lastIndex - 1]) && (h = "(?: " + h + ")", g = " " + g, v++), n3 = new RegExp("^(?:" + h + ")", d)), p && (n3 = new RegExp("^" + h + "$(?!\\s)", d)), l && (e3 = a2.lastIndex), r2 = c.call(s2 ? n3 : a2, g), s2 ? r2 ? (r2.input = r2.input.slice(v), r2[0] = r2[0].slice(v), r2.index = a2.lastIndex, a2.lastIndex += r2[0].length) : a2.lastIndex = 0 : l && r2 && (a2.lastIndex = a2.global ? r2.index + r2[0].length : e3), p && r2 && r2.length > 1 && u.call(r2[0], n3, function () {
                    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                      args[_key5] = arguments[_key5];
                    }
                    for (i2 = 1; i2 < args.length - 2; i2++) void 0 === args[i2] && (r2[i2] = void 0);
                  }), r2;
                }), t2.exports = s;
              },
              7066: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(9670);
                t2.exports = function () {
                  var t3 = r(this);
                  var e3 = "";
                  return t3.global && (e3 += "g"), t3.ignoreCase && (e3 += "i"), t3.multiline && (e3 += "m"), t3.dotAll && (e3 += "s"), t3.unicode && (e3 += "u"), t3.sticky && (e3 += "y"), e3;
                };
              },
              2999: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(7293);
                function i(t3, e3) {
                  return RegExp(t3, e3);
                }
                e2.UNSUPPORTED_Y = r(function () {
                  var t3 = i("a", "y");
                  return t3.lastIndex = 2, null != t3.exec("abcd");
                }), e2.BROKEN_CARET = r(function () {
                  var t3 = i("^r", "gy");
                  return t3.lastIndex = 2, null != t3.exec("str");
                });
              },
              4488: function _(t2) {
                t2.exports = function (t3) {
                  if (null == t3) throw TypeError("Can't call method on " + t3);
                  return t3;
                };
              },
              3505: function _(t2, e2, n2) {
                var r = n2(7854);
                var i = n2(8880);
                t2.exports = function (t3, e3) {
                  try {
                    i(r, t3, e3);
                  } catch (n3) {
                    r[t3] = e3;
                  }
                  return e3;
                };
              },
              6340: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(5005);
                var i = n2(3070);
                var o = n2(5112);
                var a = n2(9781);
                var c = o("species");
                t2.exports = function (t3) {
                  var e3 = r(t3);
                  var n3 = i.f;
                  a && e3 && !e3[c] && n3(e3, c, {
                    configurable: true,
                    get: function get() {
                      return this;
                    }
                  });
                };
              },
              8003: function _(t2, e2, n2) {
                var r = n2(3070).f;
                var i = n2(6656);
                var o = n2(5112)("toStringTag");
                t2.exports = function (t3, e3, n3) {
                  t3 && !i(t3 = n3 ? t3 : t3.prototype, o) && r(t3, o, {
                    configurable: true,
                    value: e3
                  });
                };
              },
              6200: function _(t2, e2, n2) {
                var r = n2(2309);
                var i = n2(9711);
                var o = r("keys");
                t2.exports = function (t3) {
                  return o[t3] || (o[t3] = i(t3));
                };
              },
              5465: function _(t2, e2, n2) {
                var r = n2(7854);
                var i = n2(3505);
                var o = "__core-js_shared__";
                var a = r[o] || i(o, {});
                t2.exports = a;
              },
              2309: function _(t2, e2, n2) {
                var r = n2(1913);
                var i = n2(5465);
                (t2.exports = function (t3, e3) {
                  return i[t3] || (i[t3] = void 0 !== e3 ? e3 : {});
                })("versions", []).push({
                  version: "3.6.5",
                  mode: r ? "pure" : "global",
                  copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
                });
              },
              6707: function _(t2, e2, n2) {
                var r = n2(9670);
                var i = n2(3099);
                var o = n2(5112)("species");
                t2.exports = function (t3, e3) {
                  var n3;
                  var a = r(t3).constructor;
                  return void 0 === a || null == (n3 = r(a)[o]) ? e3 : i(n3);
                };
              },
              8710: function _(t2, e2, n2) {
                var r = n2(9958);
                var i = n2(4488);
                var o = function o(t3) {
                  return function (e3, n3) {
                    var o2;
                    var a;
                    var c = String(i(e3));
                    var u = r(n3);
                    var s = c.length;
                    return u < 0 || u >= s ? t3 ? "" : void 0 : (o2 = c.charCodeAt(u)) < 55296 || o2 > 56319 || u + 1 === s || (a = c.charCodeAt(u + 1)) < 56320 || a > 57343 ? t3 ? c.charAt(u) : o2 : t3 ? c.slice(u, u + 2) : a - 56320 + (o2 - 55296 << 10) + 65536;
                  };
                };
                t2.exports = {
                  codeAt: o(false),
                  charAt: o(true)
                };
              },
              3197: function _(t2) {
                "use strict";
    
                var e2 = 2147483647;
                var n2 = /[^\0-\u007E]/;
                var r = /[.\u3002\uFF0E\uFF61]/g;
                var i = "Overflow: input needs wider integers to process";
                var o = Math.floor;
                var a = String.fromCharCode;
                var c = function c(t3) {
                  return t3 + 22 + 75 * (t3 < 26);
                };
                var u = function u(t3, e3, n3) {
                  var r2 = 0;
                  for (t3 = n3 ? o(t3 / 700) : t3 >> 1, t3 += o(t3 / e3); t3 > 455; r2 += 36) t3 = o(t3 / 35);
                  return o(r2 + 36 * t3 / (t3 + 38));
                };
                var s = function s(t3) {
                  var n3 = [];
                  t3 = function (t4) {
                    for (var e3 = [], n4 = 0, r3 = t4.length; n4 < r3;) {
                      var i2 = t4.charCodeAt(n4++);
                      if (i2 >= 55296 && i2 <= 56319 && n4 < r3) {
                        var o2 = t4.charCodeAt(n4++);
                        56320 == (64512 & o2) ? e3.push(((1023 & i2) << 10) + (1023 & o2) + 65536) : (e3.push(i2), n4--);
                      } else e3.push(i2);
                    }
                    return e3;
                  }(t3);
                  var r2;
                  var s2;
                  var l = t3.length;
                  var f = 128;
                  var p = 0;
                  var d = 72;
                  for (r2 = 0; r2 < t3.length; r2++) (s2 = t3[r2]) < 128 && n3.push(a(s2));
                  var h = n3.length;
                  var v = h;
                  for (h && n3.push("-"); v < l;) {
                    var g = e2;
                    for (r2 = 0; r2 < t3.length; r2++) (s2 = t3[r2]) >= f && s2 < g && (g = s2);
                    var m = v + 1;
                    if (g - f > o((e2 - p) / m)) throw RangeError(i);
                    for (p += (g - f) * m, f = g, r2 = 0; r2 < t3.length; r2++) {
                      if ((s2 = t3[r2]) < f && ++p > e2) throw RangeError(i);
                      if (s2 == f) {
                        for (var y = p, k = 36;; k += 36) {
                          var b = k <= d ? 1 : k >= d + 26 ? 26 : k - d;
                          if (y < b) break;
                          var A = y - b,
                            w = 36 - b;
                          n3.push(a(c(b + A % w))), y = o(A / w);
                        }
                        n3.push(a(c(y))), d = u(p, m, v == h), p = 0, ++v;
                      }
                    }
                    ++p, ++f;
                  }
                  return n3.join("");
                };
                t2.exports = function (t3) {
                  var e3;
                  var i2;
                  var o2 = [];
                  var a2 = t3.toLowerCase().replace(r, ".").split(".");
                  for (e3 = 0; e3 < a2.length; e3++) i2 = a2[e3], o2.push(n2.test(i2) ? "xn--" + s(i2) : i2);
                  return o2.join(".");
                };
              },
              6091: function _(t2, e2, n2) {
                var r = n2(7293);
                var i = n2(1361);
                t2.exports = function (t3) {
                  return r(function () {
                    return !!i[t3]() || "​᠎" != "​᠎"[t3]() || i[t3].name !== t3;
                  });
                };
              },
              3111: function _(t2, e2, n2) {
                var r = n2(4488);
                var i = "[" + n2(1361) + "]";
                var o = RegExp("^" + i + i + "*");
                var a = RegExp(i + i + "*$");
                var c = function c(t3) {
                  return function (e3) {
                    var n3 = String(r(e3));
                    return 1 & t3 && (n3 = n3.replace(o, "")), 2 & t3 && (n3 = n3.replace(a, "")), n3;
                  };
                };
                t2.exports = {
                  start: c(1),
                  end: c(2),
                  trim: c(3)
                };
              },
              261: function _(t2, e2, n2) {
                var r;
                var i;
                var o;
                var a = n2(7854);
                var c = n2(7293);
                var u = n2(4326);
                var s = n2(9974);
                var l = n2(490);
                var f = n2(317);
                var p = n2(6833);
                var d = a.location;
                var h = a.setImmediate;
                var v = a.clearImmediate;
                var g = a.process;
                var m = a.MessageChannel;
                var y = a.Dispatch;
                var k = 0;
                var b = {};
                var A = "onreadystatechange";
                var w = function w(t3) {
                  if (b.hasOwnProperty(t3)) {
                    var e3 = b[t3];
                    delete b[t3], e3();
                  }
                };
                var x = function x(t3) {
                  return function () {
                    w(t3);
                  };
                };
                var I = function I(t3) {
                  w(t3.data);
                };
                var C = function C(t3) {
                  a.postMessage(t3 + "", d.protocol + "//" + d.host);
                };
                h && v || (h = function h(t3) {
                  for (var e3 = [], n3 = 1; arguments.length > n3;) e3.push(arguments[n3++]);
                  return b[++k] = function () {
                    ("function" == typeof t3 ? t3 : Function(t3)).apply(void 0, e3);
                  }, r(k), k;
                }, v = function v(t3) {
                  delete b[t3];
                }, "process" == u(g) ? r = function r(t3) {
                  g.nextTick(x(t3));
                } : y && y.now ? r = function r(t3) {
                  y.now(x(t3));
                } : m && !p ? (o = (i = new m()).port2, i.port1.onmessage = I, r = s(o.postMessage, o, 1)) : !a.addEventListener || "function" != typeof postMessage || a.importScripts || c(C) || "file:" === d.protocol ? r = A in f("script") ? function (t3) {
                  l.appendChild(f("script")).onreadystatechange = function () {
                    l.removeChild(this), w(t3);
                  };
                } : function (t3) {
                  setTimeout(x(t3), 0);
                } : (r = C, a.addEventListener("message", I, false))), t2.exports = {
                  set: h,
                  clear: v
                };
              },
              1400: function _(t2, e2, n2) {
                var r = n2(9958);
                var i = Math.max;
                var o = Math.min;
                t2.exports = function (t3, e3) {
                  var n3 = r(t3);
                  return n3 < 0 ? i(n3 + e3, 0) : o(n3, e3);
                };
              },
              5656: function _(t2, e2, n2) {
                var r = n2(8361);
                var i = n2(4488);
                t2.exports = function (t3) {
                  return r(i(t3));
                };
              },
              9958: function _(t2) {
                var e2 = Math.ceil;
                var n2 = Math.floor;
                t2.exports = function (t3) {
                  return isNaN(t3 = +t3) ? 0 : (t3 > 0 ? n2 : e2)(t3);
                };
              },
              7466: function _(t2, e2, n2) {
                var r = n2(9958);
                var i = Math.min;
                t2.exports = function (t3) {
                  return t3 > 0 ? i(r(t3), 9007199254740991) : 0;
                };
              },
              7908: function _(t2, e2, n2) {
                var r = n2(4488);
                t2.exports = function (t3) {
                  return Object(r(t3));
                };
              },
              7593: function _(t2, e2, n2) {
                var r = n2(111);
                t2.exports = function (t3, e3) {
                  if (!r(t3)) return t3;
                  var n3;
                  var i;
                  if (e3 && "function" == typeof (n3 = t3.toString) && !r(i = n3.call(t3))) return i;
                  if ("function" == typeof (n3 = t3.valueOf) && !r(i = n3.call(t3))) return i;
                  if (!e3 && "function" == typeof (n3 = t3.toString) && !r(i = n3.call(t3))) return i;
                  throw TypeError("Can't convert object to primitive value");
                };
              },
              1694: function _(t2, e2, n2) {
                var r = {};
                r[n2(5112)("toStringTag")] = "z", t2.exports = "[object z]" === String(r);
              },
              9711: function _(t2) {
                var e2 = 0;
                var n2 = Math.random();
                t2.exports = function (t3) {
                  return "Symbol(" + String(void 0 === t3 ? "" : t3) + ")_" + (++e2 + n2).toString(36);
                };
              },
              3307: function _(t2, e2, n2) {
                var r = n2(133);
                t2.exports = r && !Symbol.sham && "symbol" == _typeof(Symbol.iterator);
              },
              6061: function _(t2, e2, n2) {
                var r = n2(5112);
                e2.f = r;
              },
              5112: function _(t2, e2, n2) {
                var r = n2(7854);
                var i = n2(2309);
                var o = n2(6656);
                var a = n2(9711);
                var c = n2(133);
                var u = n2(3307);
                var s = i("wks");
                var l = r.Symbol;
                var f = u ? l : l && l.withoutSetter || a;
                t2.exports = function (t3) {
                  return o(s, t3) || (c && o(l, t3) ? s[t3] = l[t3] : s[t3] = f("Symbol." + t3)), s[t3];
                };
              },
              1361: function _(t2) {
                t2.exports = "\t\n\x0B\f\r  \u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
              },
              2222: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(2109);
                var i = n2(7293);
                var o = n2(3157);
                var a = n2(111);
                var c = n2(7908);
                var u = n2(7466);
                var s = n2(6135);
                var l = n2(5417);
                var f = n2(1194);
                var p = n2(5112);
                var d = n2(7392);
                var h = p("isConcatSpreadable");
                var v = 9007199254740991;
                var g = "Maximum allowed index exceeded";
                var m = d >= 51 || !i(function () {
                  var t3 = [];
                  return t3[h] = false, t3.concat()[0] !== t3;
                });
                var y = f("concat");
                var k = function k(t3) {
                  if (!a(t3)) return false;
                  var e3 = t3[h];
                  return void 0 !== e3 ? !!e3 : o(t3);
                };
                r({
                  target: "Array",
                  proto: true,
                  forced: !m || !y
                }, {
                  concat: function concat(t3) {
                    var e3;
                    var n3;
                    var r2;
                    var i2;
                    var o2;
                    var a2 = c(this);
                    var f2 = l(a2, 0);
                    var p2 = 0;
                    for (e3 = -1, r2 = arguments.length; e3 < r2; e3++) if (k(o2 = -1 === e3 ? a2 : arguments[e3])) {
                      if (p2 + (i2 = u(o2.length)) > v) throw TypeError(g);
                      for (n3 = 0; n3 < i2; n3++, p2++) n3 in o2 && s(f2, p2, o2[n3]);
                    } else {
                      if (p2 >= v) throw TypeError(g);
                      s(f2, p2++, o2);
                    }
                    return f2.length = p2, f2;
                  }
                });
              },
              7327: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(2109);
                var i = n2(2092).filter;
                var o = n2(1194);
                var a = n2(9207);
                var c = o("filter");
                var u = a("filter");
                r({
                  target: "Array",
                  proto: true,
                  forced: !c || !u
                }, {
                  filter: function filter(t3) {
                    return i(this, t3, arguments.length > 1 ? arguments[1] : void 0);
                  }
                });
              },
              9826: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(2109);
                var i = n2(2092).find;
                var o = n2(1223);
                var a = n2(9207);
                var c = "find";
                var u = true;
                var s = a(c);
                c in [] && Array(1).find(function () {
                  u = false;
                }), r({
                  target: "Array",
                  proto: true,
                  forced: u || !s
                }, {
                  find: function find(t3) {
                    return i(this, t3, arguments.length > 1 ? arguments[1] : void 0);
                  }
                }), o(c);
              },
              1038: function _(t2, e2, n2) {
                var r = n2(2109);
                var i = n2(8457);
                r({
                  target: "Array",
                  stat: true,
                  forced: !n2(7072)(function (t3) {
                    Array.from(t3);
                  })
                }, {
                  from: i
                });
              },
              6699: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(2109);
                var i = n2(1318).includes;
                var o = n2(1223);
                r({
                  target: "Array",
                  proto: true,
                  forced: !n2(9207)("indexOf", {
                    ACCESSORS: true,
                    1: 0
                  })
                }, {
                  includes: function includes(t3) {
                    return i(this, t3, arguments.length > 1 ? arguments[1] : void 0);
                  }
                }), o("includes");
              },
              2772: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(2109);
                var i = n2(1318).indexOf;
                var o = n2(9341);
                var a = n2(9207);
                var c = [].indexOf;
                var u = !!c && 1 / [1].indexOf(1, -0) < 0;
                var s = o("indexOf");
                var l = a("indexOf", {
                  ACCESSORS: true,
                  1: 0
                });
                r({
                  target: "Array",
                  proto: true,
                  forced: u || !s || !l
                }, {
                  indexOf: function indexOf(t3) {
                    return u ? c.apply(this, arguments) || 0 : i(this, t3, arguments.length > 1 ? arguments[1] : void 0);
                  }
                });
              },
              6992: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(5656);
                var i = n2(1223);
                var o = n2(7497);
                var a = n2(9909);
                var c = n2(654);
                var u = "Array Iterator";
                var s = a.set;
                var l = a.getterFor(u);
                t2.exports = c(Array, "Array", function (t3, e3) {
                  s(this, {
                    type: u,
                    target: r(t3),
                    index: 0,
                    kind: e3
                  });
                }, function () {
                  var t3 = l(this);
                  var e3 = t3.target;
                  var n3 = t3.kind;
                  var r2 = t3.index++;
                  return !e3 || r2 >= e3.length ? (t3.target = void 0, {
                    value: void 0,
                    done: true
                  }) : "keys" == n3 ? {
                    value: r2,
                    done: false
                  } : "values" == n3 ? {
                    value: e3[r2],
                    done: false
                  } : {
                    value: [r2, e3[r2]],
                    done: false
                  };
                }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries");
              },
              9600: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(2109);
                var i = n2(8361);
                var o = n2(5656);
                var a = n2(9341);
                var c = [].join;
                var u = i != Object;
                var s = a("join", ",");
                r({
                  target: "Array",
                  proto: true,
                  forced: u || !s
                }, {
                  join: function join(t3) {
                    return c.call(o(this), void 0 === t3 ? "," : t3);
                  }
                });
              },
              7042: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(2109);
                var i = n2(111);
                var o = n2(3157);
                var a = n2(1400);
                var c = n2(7466);
                var u = n2(5656);
                var s = n2(6135);
                var l = n2(5112);
                var f = n2(1194);
                var p = n2(9207);
                var d = f("slice");
                var h = p("slice", {
                  ACCESSORS: true,
                  0: 0,
                  1: 2
                });
                var v = l("species");
                var g = [].slice;
                var m = Math.max;
                r({
                  target: "Array",
                  proto: true,
                  forced: !d || !h
                }, {
                  slice: function slice(t3, e3) {
                    var n3;
                    var r2;
                    var l2;
                    var f2 = u(this);
                    var p2 = c(f2.length);
                    var d2 = a(t3, p2);
                    var h2 = a(void 0 === e3 ? p2 : e3, p2);
                    if (o(f2) && ("function" != typeof (n3 = f2.constructor) || n3 !== Array && !o(n3.prototype) ? i(n3) && null === (n3 = n3[v]) && (n3 = void 0) : n3 = void 0, n3 === Array || void 0 === n3)) return g.call(f2, d2, h2);
                    for (r2 = new (void 0 === n3 ? Array : n3)(m(h2 - d2, 0)), l2 = 0; d2 < h2; d2++, l2++) d2 in f2 && s(r2, l2, f2[d2]);
                    return r2.length = l2, r2;
                  }
                });
              },
              8309: function _(t2, e2, n2) {
                var r = n2(9781);
                var i = n2(3070).f;
                var o = Function.prototype;
                var a = o.toString;
                var c = /^\s*function ([^ (]*)/;
                var u = "name";
                r && !(u in o) && i(o, u, {
                  configurable: true,
                  get: function get() {
                    try {
                      return a.call(this).match(c)[1];
                    } catch (t3) {
                      return "";
                    }
                  }
                });
              },
              1532: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(7710);
                var i = n2(5631);
                t2.exports = r("Map", function (t3) {
                  return function () {
                    return t3(this, arguments.length ? arguments.length <= 0 ? undefined : arguments[0] : void 0);
                  };
                }, i);
              },
              3321: function _(t2, e2, n2) {
                var r = n2(2109);
                var i = n2(9781);
                r({
                  target: "Object",
                  stat: true,
                  forced: !i,
                  sham: !i
                }, {
                  defineProperties: n2(6048)
                });
              },
              9070: function _(t2, e2, n2) {
                var r = n2(2109);
                var i = n2(9781);
                r({
                  target: "Object",
                  stat: true,
                  forced: !i,
                  sham: !i
                }, {
                  defineProperty: n2(3070).f
                });
              },
              9720: function _(t2, e2, n2) {
                var r = n2(2109);
                var i = n2(4699).entries;
                r({
                  target: "Object",
                  stat: true
                }, {
                  entries: function entries(t3) {
                    return i(t3);
                  }
                });
              },
              5003: function _(t2, e2, n2) {
                var r = n2(2109);
                var i = n2(7293);
                var o = n2(5656);
                var a = n2(1236).f;
                var c = n2(9781);
                var u = i(function () {
                  a(1);
                });
                r({
                  target: "Object",
                  stat: true,
                  forced: !c || u,
                  sham: !c
                }, {
                  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t3, e3) {
                    return a(o(t3), e3);
                  }
                });
              },
              9337: function _(t2, e2, n2) {
                var r = n2(2109);
                var i = n2(9781);
                var o = n2(3887);
                var a = n2(5656);
                var c = n2(1236);
                var u = n2(6135);
                r({
                  target: "Object",
                  stat: true,
                  sham: !i
                }, {
                  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t3) {
                    for (var e3, n3, r2 = a(t3), i2 = c.f, s = o(r2), l = {}, f = 0; s.length > f;) void 0 !== (n3 = i2(r2, e3 = s[f++])) && u(l, e3, n3);
                    return l;
                  }
                });
              },
              489: function _(t2, e2, n2) {
                var r = n2(2109);
                var i = n2(7293);
                var o = n2(7908);
                var a = n2(9518);
                var c = n2(8544);
                r({
                  target: "Object",
                  stat: true,
                  forced: i(function () {
                    a(1);
                  }),
                  sham: !c
                }, {
                  getPrototypeOf: function getPrototypeOf(t3) {
                    return a(o(t3));
                  }
                });
              },
              7941: function _(t2, e2, n2) {
                var r = n2(2109);
                var i = n2(7908);
                var o = n2(1956);
                r({
                  target: "Object",
                  stat: true,
                  forced: n2(7293)(function () {
                    o(1);
                  })
                }, {
                  keys: function keys(t3) {
                    return o(i(t3));
                  }
                });
              },
              8304: function _(t2, e2, n2) {
                n2(2109)({
                  target: "Object",
                  stat: true
                }, {
                  setPrototypeOf: n2(7674)
                });
              },
              1539: function _(t2, e2, n2) {
                var r = n2(1694);
                var i = n2(1320);
                var o = n2(288);
                r || i(Object.prototype, "toString", o, {
                  unsafe: true
                });
              },
              8674: function _(t2, e2, n2) {
                "use strict";
    
                var r;
                var i;
                var o;
                var a;
                var c = n2(2109);
                var u = n2(1913);
                var s = n2(7854);
                var l = n2(5005);
                var f = n2(3366);
                var p = n2(1320);
                var d = n2(2248);
                var h = n2(8003);
                var v = n2(6340);
                var g = n2(111);
                var m = n2(3099);
                var y = n2(5787);
                var k = n2(4326);
                var b = n2(2788);
                var A = n2(408);
                var w = n2(7072);
                var x = n2(6707);
                var I = n2(261).set;
                var C = n2(5948);
                var B = n2(9478);
                var _ = n2(842);
                var S = n2(8523);
                var O = n2(2534);
                var P = n2(9909);
                var W = n2(4705);
                var E = n2(5112);
                var j = n2(7392);
                var R = E("species");
                var $2 = "Promise";
                var T = P.get;
                var L = P.set;
                var N = P.getterFor($2);
                var _M = f;
                var U = s.TypeError;
                var Q = s.document;
                var D = s.process;
                var q = l("fetch");
                var F = S.f;
                var z = F;
                var Y = "process" == k(D);
                var G = !!(Q && Q.createEvent && s.dispatchEvent);
                var H = "unhandledrejection";
                var J = W($2, function () {
                  if (!(b(_M) !== String(_M))) {
                    if (66 === j) return true;
                    if (!Y && "function" != typeof PromiseRejectionEvent) return true;
                  }
                  if (u && !_M.prototype["finally"]) return true;
                  if (j >= 51 && /native code/.test(_M)) return false;
                  var t3 = _M.resolve(1),
                    e3 = function e3(t4) {
                      t4(function () {}, function () {});
                    };
                  return (t3.constructor = {})[R] = e3, !(t3.then(function () {}) instanceof e3);
                });
                var X = J || !w(function (t3) {
                  _M.all(t3)["catch"](function () {});
                });
                var Z = function Z(t3) {
                  var e3;
                  return !(!g(t3) || "function" != typeof (e3 = t3.then)) && e3;
                };
                var V = function V(t3, e3, n3) {
                  if (!e3.notified) {
                    e3.notified = true;
                    var r2 = e3.reactions;
                    C(function () {
                      for (var i2 = e3.value, o2 = 1 == e3.state, a2 = 0; r2.length > a2;) {
                        var c2 = void 0;
                        var u2 = void 0;
                        var s2 = void 0;
                        var l2 = r2[a2++];
                        var f2 = o2 ? l2.ok : l2.fail;
                        var p2 = l2.resolve;
                        var d2 = l2.reject;
                        var h2 = l2.domain;
                        try {
                          f2 ? (o2 || (2 === e3.rejection && nt(t3, e3), e3.rejection = 1), true === f2 ? c2 = i2 : (h2 && h2.enter(), c2 = f2(i2), h2 && (h2.exit(), s2 = true)), c2 === l2.promise ? d2(U("Promise-chain cycle")) : (u2 = Z(c2)) ? u2.call(c2, p2, d2) : p2(c2)) : d2(i2);
                        } catch (t4) {
                          h2 && !s2 && h2.exit(), d2(t4);
                        }
                      }
                      e3.reactions = [], e3.notified = false, n3 && !e3.rejection && tt(t3, e3);
                    });
                  }
                };
                var K = function K(t3, e3, n3) {
                  var r2, i2;
                  G ? ((r2 = Q.createEvent("Event")).promise = e3, r2.reason = n3, r2.initEvent(t3, false, true), s.dispatchEvent(r2)) : r2 = {
                    promise: e3,
                    reason: n3
                  }, (i2 = s["on" + t3]) ? i2(r2) : t3 === H && _("Unhandled promise rejection", n3);
                };
                var tt = function tt(t3, e3) {
                  I.call(s, function () {
                    var n3;
                    var r2 = e3.value;
                    if (et(e3) && (n3 = O(function () {
                      Y ? D.emit("unhandledRejection", r2, t3) : K(H, t3, r2);
                    }), e3.rejection = Y || et(e3) ? 2 : 1, n3.error)) throw n3.value;
                  });
                };
                var et = function et(t3) {
                  return 1 !== t3.rejection && !t3.parent;
                };
                var nt = function nt(t3, e3) {
                  I.call(s, function () {
                    Y ? D.emit("rejectionHandled", t3) : K("rejectionhandled", t3, e3.value);
                  });
                };
                var rt = function rt(t3, e3, n3, r2) {
                  return function (i2) {
                    t3(e3, n3, i2, r2);
                  };
                };
                var it = function it(t3, e3, n3, r2) {
                  e3.done || (e3.done = true, r2 && (e3 = r2), e3.value = n3, e3.state = 2, V(t3, e3, true));
                };
                var ot = function ot(t3, e3, n3, r2) {
                  if (!e3.done) {
                    e3.done = true, r2 && (e3 = r2);
                    try {
                      if (t3 === n3) throw U("Promise can't be resolved itself");
                      var i2 = Z(n3);
                      i2 ? C(function () {
                        var r3 = {
                          done: false
                        };
                        try {
                          i2.call(n3, rt(ot, t3, r3, e3), rt(it, t3, r3, e3));
                        } catch (n4) {
                          it(t3, r3, n4, e3);
                        }
                      }) : (e3.value = n3, e3.state = 1, V(t3, e3, false));
                    } catch (n4) {
                      it(t3, {
                        done: false
                      }, n4, e3);
                    }
                  }
                };
                J && (_M = function M(t3) {
                  y(this, _M, $2), m(t3), r.call(this);
                  var e3 = T(this);
                  try {
                    t3(rt(ot, this, e3), rt(it, this, e3));
                  } catch (t4) {
                    it(this, e3, t4);
                  }
                }, (r = function r(t3) {
                  L(this, {
                    type: $2,
                    done: false,
                    notified: false,
                    parent: false,
                    reactions: [],
                    rejection: false,
                    state: 0,
                    value: void 0
                  });
                }).prototype = d(_M.prototype, {
                  then: function then(t3, e3) {
                    var n3 = N(this);
                    var r2 = F(x(this, _M));
                    return r2.ok = "function" != typeof t3 || t3, r2.fail = "function" == typeof e3 && e3, r2.domain = Y ? D.domain : void 0, n3.parent = true, n3.reactions.push(r2), 0 != n3.state && V(this, n3, false), r2.promise;
                  },
                  "catch": function _catch(t3) {
                    return this.then(void 0, t3);
                  }
                }), i = function i() {
                  var t3 = new r();
                  var e3 = T(t3);
                  this.promise = t3, this.resolve = rt(ot, t3, e3), this.reject = rt(it, t3, e3);
                }, S.f = F = function F(t3) {
                  return t3 === _M || t3 === o ? new i(t3) : z(t3);
                }, u || "function" != typeof f || (a = f.prototype.then, p(f.prototype, "then", function (t3, e3) {
                  var n3 = this;
                  return new _M(function (t4, e4) {
                    a.call(n3, t4, e4);
                  }).then(t3, e3);
                }, {
                  unsafe: true
                }), "function" == typeof q && c({
                  global: true,
                  enumerable: true,
                  forced: true
                }, {
                  fetch: function fetch(t3) {
                    return B(_M, q.apply(s, arguments));
                  }
                }))), c({
                  global: true,
                  wrap: true,
                  forced: J
                }, {
                  Promise: _M
                }), h(_M, $2, false, true), v($2), o = l($2), c({
                  target: $2,
                  stat: true,
                  forced: J
                }, {
                  reject: function reject(t3) {
                    var e3 = F(this);
                    return e3.reject.call(void 0, t3), e3.promise;
                  }
                }), c({
                  target: $2,
                  stat: true,
                  forced: u || J
                }, {
                  resolve: function resolve(t3) {
                    return B(u && this === o ? _M : this, t3);
                  }
                }), c({
                  target: $2,
                  stat: true,
                  forced: X
                }, {
                  all: function all(t3) {
                    var e3 = this;
                    var n3 = F(e3);
                    var r2 = n3.resolve;
                    var i2 = n3.reject;
                    var o2 = O(function () {
                      var n4 = m(e3.resolve);
                      var o3 = [];
                      var a2 = 0;
                      var c2 = 1;
                      A(t3, function (t4) {
                        var u2 = a2++;
                        var s2 = false;
                        o3.push(void 0), c2++, n4.call(e3, t4).then(function (t5) {
                          s2 || (s2 = true, o3[u2] = t5, --c2 || r2(o3));
                        }, i2);
                      }), --c2 || r2(o3);
                    });
                    return o2.error && i2(o2.value), n3.promise;
                  },
                  race: function race(t3) {
                    var e3 = this;
                    var n3 = F(e3);
                    var r2 = n3.reject;
                    var i2 = O(function () {
                      var i3 = m(e3.resolve);
                      A(t3, function (t4) {
                        i3.call(e3, t4).then(n3.resolve, r2);
                      });
                    });
                    return i2.error && r2(i2.value), n3.promise;
                  }
                });
              },
              2419: function _(t2, e2, n2) {
                var r = n2(2109);
                var i = n2(5005);
                var o = n2(3099);
                var a = n2(9670);
                var c = n2(111);
                var u = n2(30);
                var s = n2(7065);
                var l = n2(7293);
                var f = i("Reflect", "construct");
                var p = l(function () {
                  function t3() {}
                  return !(f(function () {}, [], t3) instanceof t3);
                });
                var d = !l(function () {
                  f(function () {});
                });
                var h = p || d;
                r({
                  target: "Reflect",
                  stat: true,
                  forced: h,
                  sham: h
                }, {
                  construct: function construct(t3, e3) {
                    o(t3), a(e3);
                    var n3 = arguments.length < 3 ? t3 : o(arguments[2]);
                    if (d && !p) return f(t3, e3, n3);
                    if (t3 == n3) {
                      switch (e3.length) {
                        case 0:
                          return new t3();
                        case 1:
                          return new t3(e3[0]);
                        case 2:
                          return new t3(e3[0], e3[1]);
                        case 3:
                          return new t3(e3[0], e3[1], e3[2]);
                        case 4:
                          return new t3(e3[0], e3[1], e3[2], e3[3]);
                      }
                      var r2 = [null];
                      return r2.push.apply(r2, _toConsumableArray(e3)), new (s.apply(t3, r2))();
                    }
                    var i2 = n3.prototype;
                    var l2 = u(c(i2) ? i2 : Object.prototype);
                    var h2 = Function.apply.call(t3, l2, e3);
                    return c(h2) ? h2 : l2;
                  }
                });
              },
              4603: function _(t2, e2, n2) {
                var r = n2(9781);
                var i = n2(7854);
                var o = n2(4705);
                var a = n2(9587);
                var c = n2(3070).f;
                var u = n2(8006).f;
                var s = n2(7850);
                var l = n2(7066);
                var f = n2(2999);
                var p = n2(1320);
                var d = n2(7293);
                var h = n2(9909).set;
                var v = n2(6340);
                var g = n2(5112)("match");
                var m = i.RegExp;
                var y = m.prototype;
                var k = /a/g;
                var b = /a/g;
                var A = new m(k) !== k;
                var w = f.UNSUPPORTED_Y;
                if (r && o("RegExp", !A || w || d(function () {
                  return b[g] = false, m(k) != k || m(b) == b || "/a/i" != m(k, "i");
                }))) {
                  for (var x = function x(t3, e3) {
                      var n3;
                      var r2 = this instanceof x;
                      var i2 = s(t3);
                      var o2 = void 0 === e3;
                      if (!r2 && i2 && t3.constructor === x && o2) return t3;
                      A ? i2 && !o2 && (t3 = t3.source) : t3 instanceof x && (o2 && (e3 = l.call(t3)), t3 = t3.source), w && (n3 = !!e3 && e3.indexOf("y") !== -1) && (e3 = e3.replace(/y/g, ""));
                      var c2 = a(A ? new m(t3, e3) : m(t3, e3), r2 ? this : y, x);
                      return w && n3 && h(c2, {
                        sticky: n3
                      }), c2;
                    }, I = function I(t3) {
                      (t3 in x) || c(x, t3, {
                        configurable: true,
                        get: function get() {
                          return m[t3];
                        },
                        set: function set(e3) {
                          m[t3] = e3;
                        }
                      });
                    }, C = u(m), B = 0; C.length > B;) I(C[B++]);
                  y.constructor = x, x.prototype = y, p(i, "RegExp", x);
                }
                v("RegExp");
              },
              4916: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(2109);
                var i = n2(2261);
                r({
                  target: "RegExp",
                  proto: true,
                  forced: /./.exec !== i
                }, {
                  exec: i
                });
              },
              9714: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(1320);
                var i = n2(9670);
                var o = n2(7293);
                var a = n2(7066);
                var c = "toString";
                var u = RegExp.prototype;
                var s = u.toString;
                var l = o(function () {
                  return "/a/b" != s.call({
                    source: "a",
                    flags: "b"
                  });
                });
                var f = s.name != c;
                (l || f) && r(RegExp.prototype, c, function () {
                  var t3 = i(this);
                  var e3 = String(t3.source);
                  var n3 = t3.flags;
                  return "/" + e3 + "/" + String(void 0 === n3 && t3 instanceof RegExp && !("flags" in u) ? a.call(t3) : n3);
                }, {
                  unsafe: true
                });
              },
              2023: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(2109);
                var i = n2(3929);
                var o = n2(4488);
                r({
                  target: "String",
                  proto: true,
                  forced: !n2(4964)("includes")
                }, {
                  includes: function includes(t3) {
                    return !!~String(o(this)).indexOf(i(t3), arguments.length > 1 ? arguments[1] : void 0);
                  }
                });
              },
              8783: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(8710).charAt;
                var i = n2(9909);
                var o = n2(654);
                var a = "String Iterator";
                var c = i.set;
                var u = i.getterFor(a);
                o(String, "String", function (t3) {
                  c(this, {
                    type: a,
                    string: String(t3),
                    index: 0
                  });
                }, function () {
                  var t3;
                  var e3 = u(this);
                  var n3 = e3.string;
                  var i2 = e3.index;
                  return i2 >= n3.length ? {
                    value: void 0,
                    done: true
                  } : (t3 = r(n3, i2), e3.index += t3.length, {
                    value: t3,
                    done: false
                  });
                });
              },
              4723: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(7007);
                var i = n2(9670);
                var o = n2(7466);
                var a = n2(4488);
                var c = n2(1530);
                var u = n2(7651);
                r("match", 1, function (t3, e3, n3) {
                  return [function (e4) {
                    var n4 = a(this);
                    var r2 = null == e4 ? void 0 : e4[t3];
                    return void 0 !== r2 ? r2.call(e4, n4) : new RegExp(e4)[t3](String(n4));
                  }, function (t4) {
                    var r2 = n3(e3, t4, this);
                    if (r2.done) return r2.value;
                    var a2 = i(t4);
                    var s = String(this);
                    if (!a2.global) return u(a2, s);
                    var l = a2.unicode;
                    a2.lastIndex = 0;
                    for (var f, p = [], d = 0; null !== (f = u(a2, s));) {
                      var h = String(f[0]);
                      p[d] = h, "" === h && (a2.lastIndex = c(s, o(a2.lastIndex), l)), d++;
                    }
                    return 0 === d ? null : p;
                  }];
                });
              },
              5306: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(7007);
                var i = n2(9670);
                var o = n2(7908);
                var a = n2(7466);
                var c = n2(9958);
                var u = n2(4488);
                var s = n2(1530);
                var l = n2(7651);
                var f = Math.max;
                var p = Math.min;
                var d = Math.floor;
                var h = /\$([$&'`]|\d\d?|<[^>]*>)/g;
                var v = /\$([$&'`]|\d\d?)/g;
                r("replace", 2, function (t3, e3, n3, r2) {
                  var g = r2.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
                  var m = r2.REPLACE_KEEPS_$0;
                  var y = g ? "$" : "$0";
                  return [function (n4, r3) {
                    var i2 = u(this);
                    var o2 = null == n4 ? void 0 : n4[t3];
                    return void 0 !== o2 ? o2.call(n4, i2, r3) : e3.call(String(i2), n4, r3);
                  }, function (t4, r3) {
                    if (!g && m || "string" == typeof r3 && !(r3.indexOf(y) !== -1)) {
                      var o2 = n3(e3, t4, this, r3);
                      if (o2.done) return o2.value;
                    }
                    var u2 = i(t4);
                    var d2 = String(this);
                    var h2 = "function" == typeof r3;
                    h2 || (r3 = String(r3));
                    var v2 = u2.global;
                    if (v2) {
                      var b = u2.unicode;
                      u2.lastIndex = 0;
                    }
                    for (var A = [];;) {
                      var w = l(u2, d2);
                      if (null === w) break;
                      if (A.push(w), !v2) break;
                      "" === String(w[0]) && (u2.lastIndex = s(d2, a(u2.lastIndex), b));
                    }
                    for (var x, I = "", C = 0, B = 0; B < A.length; B++) {
                      w = A[B];
                      for (var _ = String(w[0]), S = f(p(c(w.index), d2.length), 0), O = [], P = 1; P < w.length; P++) O.push(void 0 === (x = w[P]) ? x : String(x));
                      var W = w.groups;
                      if (h2) {
                        var E = [_].concat(O, S, d2);
                        void 0 !== W && E.push(W);
                        var j = String(r3.apply(void 0, E));
                      } else j = k(_, d2, S, O, W, r3);
                      S >= C && (I += d2.slice(C, S) + j, C = S + _.length);
                    }
                    return I + d2.slice(C);
                  }];
                  function k(t4, n4, r3, i2, a2, c2) {
                    var u2 = r3 + t4.length;
                    var s2 = i2.length;
                    var l2 = v;
                    return void 0 !== a2 && (a2 = o(a2), l2 = h), e3.call(c2, l2, function (e4, o2) {
                      var c3;
                      switch (o2.charAt(0)) {
                        case "$":
                          return "$";
                        case "&":
                          return t4;
                        case "`":
                          return n4.slice(0, r3);
                        case "'":
                          return n4.slice(u2);
                        case "<":
                          c3 = a2[o2.slice(1, -1)];
                          break;
                        default:
                          var l3 = +o2;
                          if (0 === l3) return e4;
                          if (l3 > s2) {
                            var f2 = d(l3 / 10);
                            return 0 === f2 ? e4 : f2 <= s2 ? void 0 === i2[f2 - 1] ? o2.charAt(1) : i2[f2 - 1] + o2.charAt(1) : e4;
                          }
                          c3 = i2[l3 - 1];
                      }
                      return void 0 === c3 ? "" : c3;
                    });
                  }
                });
              },
              3210: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(2109);
                var i = n2(3111).trim;
                r({
                  target: "String",
                  proto: true,
                  forced: n2(6091)("trim")
                }, {
                  trim: function trim() {
                    return i(this);
                  }
                });
              },
              1817: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(2109);
                var i = n2(9781);
                var o = n2(7854);
                var a = n2(6656);
                var c = n2(111);
                var u = n2(3070).f;
                var s = n2(9920);
                var l = o.Symbol;
                if (i && "function" == typeof l && (!("description" in l.prototype) || void 0 !== l().description)) {
                  var f = {};
                  var p = function p() {
                    var t3 = arguments.length < 1 || void 0 === (arguments.length <= 0 ? undefined : arguments[0]) ? void 0 : String(arguments.length <= 0 ? undefined : arguments[0]),
                      e3 = this instanceof p ? new l(t3) : void 0 === t3 ? l() : l(t3);
                    return "" === t3 && (f[e3] = true), e3;
                  };
                  s(p, l);
                  var d = p.prototype = l.prototype;
                  d.constructor = p;
                  var h = d.toString;
                  var v = "Symbol(test)" == String(l("test"));
                  var g = /^Symbol\((.*)\)[^)]+$/;
                  u(d, "description", {
                    configurable: true,
                    get: function get() {
                      var t3 = c(this) ? this.valueOf() : this;
                      var e3 = h.call(t3);
                      if (a(f, t3)) return "";
                      var n3 = v ? e3.slice(7, -1) : e3.replace(g, "$1");
                      return "" === n3 ? void 0 : n3;
                    }
                  }), r({
                    global: true,
                    forced: true
                  }, {
                    Symbol: p
                  });
                }
              },
              2165: function _(t2, e2, n2) {
                n2(7235)("iterator");
              },
              2526: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(2109);
                var i = n2(7854);
                var o = n2(5005);
                var a = n2(1913);
                var c = n2(9781);
                var u = n2(133);
                var s = n2(3307);
                var l = n2(7293);
                var f = n2(6656);
                var p = n2(3157);
                var d = n2(111);
                var h = n2(9670);
                var v = n2(7908);
                var g = n2(5656);
                var m = n2(7593);
                var y = n2(9114);
                var k = n2(30);
                var b = n2(1956);
                var A = n2(8006);
                var w = n2(1156);
                var x = n2(5181);
                var I = n2(1236);
                var C = n2(3070);
                var B = n2(5296);
                var _ = n2(8880);
                var S = n2(1320);
                var O = n2(2309);
                var P = n2(6200);
                var W = n2(3501);
                var E = n2(9711);
                var j = n2(5112);
                var R = n2(6061);
                var $2 = n2(7235);
                var T = n2(8003);
                var L = n2(9909);
                var N = n2(2092).forEach;
                var M = P("hidden");
                var U = "Symbol";
                var Q = j("toPrimitive");
                var D = L.set;
                var q = L.getterFor(U);
                var F = Object.prototype;
                var _z = i.Symbol;
                var Y = o("JSON", "stringify");
                var G = I.f;
                var H = C.f;
                var J = w.f;
                var X = B.f;
                var Z = O("symbols");
                var V = O("op-symbols");
                var K = O("string-to-symbol-registry");
                var tt = O("symbol-to-string-registry");
                var et = O("wks");
                var nt = i.QObject;
                var rt = !nt || !nt.prototype || !nt.prototype.findChild;
                var it = c && l(function () {
                  return 7 != k(H({}, "a", {
                    get: function get() {
                      return H(this, "a", {
                        value: 7
                      }).a;
                    }
                  })).a;
                }) ? function (t3, e3, n3) {
                  var r2 = G(F, e3);
                  r2 && delete F[e3], H(t3, e3, n3), r2 && t3 !== F && H(F, e3, r2);
                } : H;
                var ot = function ot(t3, e3) {
                  var n3 = Z[t3] = k(_z.prototype);
                  return D(n3, {
                    type: U,
                    tag: t3,
                    description: e3
                  }), c || (n3.description = e3), n3;
                };
                var at = s ? function (t3) {
                  return "symbol" == _typeof(t3);
                } : function (t3) {
                  return Object(t3) instanceof _z;
                };
                var ct = function ct(t3, e3, n3) {
                  t3 === F && ct(V, e3, n3), h(t3);
                  var r2 = m(e3, true);
                  return h(n3), f(Z, r2) ? (n3.enumerable ? (f(t3, M) && t3[M][r2] && (t3[M][r2] = false), n3 = k(n3, {
                    enumerable: y(0, false)
                  })) : (f(t3, M) || H(t3, M, y(1, {})), t3[M][r2] = true), it(t3, r2, n3)) : H(t3, r2, n3);
                };
                var ut = function ut(t3, e3) {
                  h(t3);
                  var n3 = g(e3),
                    r2 = b(n3).concat(pt(n3));
                  return N(r2, function (e4) {
                    c && !st.call(n3, e4) || ct(t3, e4, n3[e4]);
                  }), t3;
                };
                var st = function st(t3) {
                  var e3 = m(t3, true),
                    n3 = X.call(this, e3);
                  return !(this === F && f(Z, e3) && !f(V, e3)) && (!(n3 || !f(this, e3) || !f(Z, e3) || f(this, M) && this[M][e3]) || n3);
                };
                var lt = function lt(t3, e3) {
                  var n3 = g(t3),
                    r2 = m(e3, true);
                  if (n3 !== F || !f(Z, r2) || f(V, r2)) {
                    var i2 = G(n3, r2);
                    return !i2 || !f(Z, r2) || f(n3, M) && n3[M][r2] || (i2.enumerable = true), i2;
                  }
                };
                var ft = function ft(t3) {
                  var e3 = J(g(t3)),
                    n3 = [];
                  return N(e3, function (t4) {
                    f(Z, t4) || f(W, t4) || n3.push(t4);
                  }), n3;
                };
                var pt = function pt(t3) {
                  var e3 = t3 === F,
                    n3 = J(e3 ? V : g(t3)),
                    r2 = [];
                  return N(n3, function (t4) {
                    !f(Z, t4) || e3 && !f(F, t4) || r2.push(Z[t4]);
                  }), r2;
                };
                (u || (_z = function z() {
                  if (this instanceof _z) throw TypeError("Symbol is not a constructor");
                  var t3 = arguments.length && void 0 !== (arguments.length <= 0 ? undefined : arguments[0]) ? String(arguments.length <= 0 ? undefined : arguments[0]) : void 0;
                  var e3 = E(t3);
                  var n3 = function n3(t4) {
                    this === F && n3.call(V, t4), f(this, M) && f(this[M], e3) && (this[M][e3] = false), it(this, e3, y(1, t4));
                  };
                  return c && rt && it(F, e3, {
                    configurable: true,
                    set: n3
                  }), ot(e3, t3);
                }, S(_z.prototype, "toString", function () {
                  return q(this).tag;
                }), S(_z, "withoutSetter", function (t3) {
                  return ot(E(t3), t3);
                }), B.f = st, C.f = ct, I.f = lt, A.f = w.f = ft, x.f = pt, R.f = function (t3) {
                  return ot(j(t3), t3);
                }, c && (H(_z.prototype, "description", {
                  configurable: true,
                  get: function get() {
                    return q(this).description;
                  }
                }), a || S(F, "propertyIsEnumerable", st, {
                  unsafe: true
                }))), r({
                  global: true,
                  wrap: true,
                  forced: !u,
                  sham: !u
                }, {
                  Symbol: _z
                }), N(b(et), function (t3) {
                  $2(t3);
                }), r({
                  target: U,
                  stat: true,
                  forced: !u
                }, {
                  "for": function _for(t3) {
                    var e3 = String(t3);
                    if (f(K, e3)) return K[e3];
                    var n3 = _z(e3);
                    return K[e3] = n3, tt[n3] = e3, n3;
                  },
                  keyFor: function keyFor(t3) {
                    if (!at(t3)) throw TypeError(t3 + " is not a symbol");
                    if (f(tt, t3)) return tt[t3];
                  },
                  useSetter: function useSetter() {
                    rt = true;
                  },
                  useSimple: function useSimple() {
                    rt = false;
                  }
                }), r({
                  target: "Object",
                  stat: true,
                  forced: !u,
                  sham: !c
                }, {
                  create: function create(t3, e3) {
                    return void 0 === e3 ? k(t3) : ut(k(t3), e3);
                  },
                  defineProperty: ct,
                  defineProperties: ut,
                  getOwnPropertyDescriptor: lt
                }), r({
                  target: "Object",
                  stat: true,
                  forced: !u
                }, {
                  getOwnPropertyNames: ft,
                  getOwnPropertySymbols: pt
                }), r({
                  target: "Object",
                  stat: true,
                  forced: l(function () {
                    x.f(1);
                  })
                }, {
                  getOwnPropertySymbols: function getOwnPropertySymbols(t3) {
                    return x.f(v(t3));
                  }
                }), Y) && r({
                  target: "JSON",
                  stat: true,
                  forced: !u || l(function () {
                    var t3 = _z();
                    return "[null]" != Y([t3]) || "{}" != Y({
                      a: t3
                    }) || "{}" != Y(Object(t3));
                  })
                }, {
                  stringify: function stringify(t3, e3, n3) {
                    for (var r2, i2 = [t3], o2 = 1; arguments.length > o2;) i2.push(arguments[o2++]);
                    if (r2 = e3, (d(e3) || void 0 !== t3) && !at(t3)) return p(e3) || (e3 = function e3(t4, e4) {
                      if ("function" == typeof r2 && (e4 = r2.call(this, t4, e4)), !at(e4)) return e4;
                    }), i2[1] = e3, Y.apply(void 0, i2);
                  }
                });
                _z.prototype[Q] || _(_z.prototype, Q, _z.prototype.valueOf), T(_z, U), W[M] = true;
              },
              4747: function _(t2, e2, n2) {
                var r = n2(7854);
                var i = n2(8324);
                var o = n2(8533);
                var a = n2(8880);
                for (var c in i) {
                  var u = r[c];
                  var s = u && u.prototype;
                  if (s && s.forEach !== o) try {
                    a(s, "forEach", o);
                  } catch (t3) {
                    s.forEach = o;
                  }
                }
              },
              3948: function _(t2, e2, n2) {
                var r = n2(7854);
                var i = n2(8324);
                var o = n2(6992);
                var a = n2(8880);
                var c = n2(5112);
                var u = c("iterator");
                var s = c("toStringTag");
                var l = o.values;
                for (var f in i) {
                  var p = r[f];
                  var d = p && p.prototype;
                  if (d) {
                    if (d[u] !== l) try {
                      a(d, u, l);
                    } catch (t3) {
                      d[u] = l;
                    }
                    if (d[s] || a(d, s, f), i[f]) {
                      for (var h in o) if (d[h] !== o[h]) try {
                        a(d, h, o[h]);
                      } catch (t3) {
                        d[h] = o[h];
                      }
                    }
                  }
                }
              },
              1637: function _(t2, e2, n2) {
                "use strict";
    
                n2(6992);
                var r = n2(2109);
                var i = n2(5005);
                var o = n2(590);
                var a = n2(1320);
                var c = n2(2248);
                var u = n2(8003);
                var s = n2(4994);
                var l = n2(9909);
                var f = n2(5787);
                var p = n2(6656);
                var d = n2(9974);
                var h = n2(648);
                var v = n2(9670);
                var g = n2(111);
                var m = n2(30);
                var y = n2(9114);
                var k = n2(8554);
                var b = n2(1246);
                var A = n2(5112);
                var w = i("fetch");
                var x = i("Headers");
                var I = A("iterator");
                var C = "URLSearchParams";
                var B = "URLSearchParamsIterator";
                var _ = l.set;
                var S = l.getterFor(C);
                var O = l.getterFor(B);
                var P = /\+/g;
                var W = Array(4);
                var E = function E(t3) {
                  return W[t3 - 1] || (W[t3 - 1] = RegExp("((?:%[\\da-f]{2}){" + t3 + "})", "gi"));
                };
                var j = function j(t3) {
                  try {
                    return decodeURIComponent(t3);
                  } catch (e3) {
                    return t3;
                  }
                };
                var R = function R(t3) {
                  var e3 = t3.replace(P, " "),
                    n3 = 4;
                  try {
                    return decodeURIComponent(e3);
                  } catch (t4) {
                    for (; n3;) e3 = e3.replace(E(n3--), j);
                    return e3;
                  }
                };
                var $2 = /[!'()~]|%20/g;
                var T = {
                  "!": "%21",
                  "'": "%27",
                  "(": "%28",
                  ")": "%29",
                  "~": "%7E",
                  "%20": "+"
                };
                var L = function L(t3) {
                  return T[t3];
                };
                var N = function N(t3) {
                  return encodeURIComponent(t3).replace($2, L);
                };
                var M = function M(t3, e3) {
                  if (e3) for (var n3, r2, i2 = e3.split("&"), o2 = 0; o2 < i2.length;) (n3 = i2[o2++]).length && (r2 = n3.split("="), t3.push({
                    key: R(r2.shift()),
                    value: R(r2.join("="))
                  }));
                };
                var U = function U(t3) {
                  this.entries.length = 0, M(this.entries, t3);
                };
                var Q = function Q(t3, e3) {
                  if (t3 < e3) throw TypeError("Not enough arguments");
                };
                var D = s(function (t3, e3) {
                  _(this, {
                    type: B,
                    iterator: k(S(t3).entries),
                    kind: e3
                  });
                }, "Iterator", function () {
                  var t3 = O(this),
                    e3 = t3.kind,
                    n3 = t3.iterator.next(),
                    r2 = n3.value;
                  return n3.done || (n3.value = "keys" === e3 ? r2.key : "values" === e3 ? r2.value : [r2.key, r2.value]), n3;
                });
                var q = function q() {
                  f(this, q, C);
                  var t3;
                  var e3;
                  var n3;
                  var r2;
                  var i2;
                  var o2;
                  var a2;
                  var c2;
                  var u2;
                  var s2 = arguments.length > 0 ? arguments.length <= 0 ? undefined : arguments[0] : void 0;
                  var l2 = this;
                  var d2 = [];
                  if (_(l2, {
                    type: C,
                    entries: d2,
                    updateURL: function updateURL() {},
                    updateSearchParams: U
                  }), void 0 !== s2) if (g(s2)) {
                    if ("function" == typeof (t3 = b(s2))) for (n3 = (e3 = t3.call(s2)).next; !(r2 = n3.call(e3)).done;) {
                      if ((a2 = (o2 = (i2 = k(v(r2.value))).next).call(i2)).done || (c2 = o2.call(i2)).done || !o2.call(i2).done) throw TypeError("Expected sequence with length 2");
                      d2.push({
                        key: a2.value + "",
                        value: c2.value + ""
                      });
                    } else for (u2 in s2) p(s2, u2) && d2.push({
                      key: u2,
                      value: s2[u2] + ""
                    });
                  } else M(d2, "string" == typeof s2 ? "?" === s2.charAt(0) ? s2.slice(1) : s2 : s2 + "");
                };
                var F = q.prototype;
                c(F, {
                  append: function append(t3, e3) {
                    Q(arguments.length, 2);
                    var n3 = S(this);
                    n3.entries.push({
                      key: t3 + "",
                      value: e3 + ""
                    }), n3.updateURL();
                  },
                  "delete": function _delete(t3) {
                    Q(arguments.length, 1);
                    for (var e3 = S(this), n3 = e3.entries, r2 = t3 + "", i2 = 0; i2 < n3.length;) n3[i2].key === r2 ? n3.splice(i2, 1) : i2++;
                    e3.updateURL();
                  },
                  get: function get(t3) {
                    Q(arguments.length, 1);
                    for (var e3 = S(this).entries, n3 = t3 + "", r2 = 0; r2 < e3.length; r2++) if (e3[r2].key === n3) return e3[r2].value;
                    return null;
                  },
                  getAll: function getAll(t3) {
                    Q(arguments.length, 1);
                    for (var e3 = S(this).entries, n3 = t3 + "", r2 = [], i2 = 0; i2 < e3.length; i2++) e3[i2].key === n3 && r2.push(e3[i2].value);
                    return r2;
                  },
                  has: function has(t3) {
                    Q(arguments.length, 1);
                    for (var e3 = S(this).entries, n3 = t3 + "", r2 = 0; r2 < e3.length;) if (e3[r2++].key === n3) return true;
                    return false;
                  },
                  set: function set(t3, e3) {
                    Q(arguments.length, 1);
                    for (var n3, r2 = S(this), i2 = r2.entries, o2 = false, a2 = t3 + "", c2 = e3 + "", u2 = 0; u2 < i2.length; u2++) (n3 = i2[u2]).key === a2 && (o2 ? i2.splice(u2--, 1) : (o2 = true, n3.value = c2));
                    o2 || i2.push({
                      key: a2,
                      value: c2
                    }), r2.updateURL();
                  },
                  sort: function sort() {
                    var t3;
                    var e3;
                    var n3;
                    var r2 = S(this);
                    var i2 = r2.entries;
                    var o2 = i2.slice();
                    for (i2.length = 0, n3 = 0; n3 < o2.length; n3++) {
                      for (t3 = o2[n3], e3 = 0; e3 < n3; e3++) if (i2[e3].key > t3.key) {
                        i2.splice(e3, 0, t3);
                        break;
                      }
                      e3 === n3 && i2.push(t3);
                    }
                    r2.updateURL();
                  },
                  forEach: function forEach(t3) {
                    for (var e3, n3 = S(this).entries, r2 = d(t3, arguments.length > 1 ? arguments[1] : void 0, 3), i2 = 0; i2 < n3.length;) r2((e3 = n3[i2++]).value, e3.key, this);
                  },
                  keys: function keys() {
                    return new D(this, "keys");
                  },
                  values: function values() {
                    return new D(this, "values");
                  },
                  entries: function entries() {
                    return new D(this, "entries");
                  }
                }, {
                  enumerable: true
                }), a(F, I, F.entries), a(F, "toString", function () {
                  for (var t3, e3 = S(this).entries, n3 = [], r2 = 0; r2 < e3.length;) t3 = e3[r2++], n3.push(N(t3.key) + "=" + N(t3.value));
                  return n3.join("&");
                }, {
                  enumerable: true
                }), u(q, C), r({
                  global: true,
                  forced: !o
                }, {
                  URLSearchParams: q
                }), o || "function" != typeof w || "function" != typeof x || r({
                  global: true,
                  enumerable: true,
                  forced: true
                }, {
                  fetch: function fetch(t3) {
                    var e3;
                    var n3;
                    var r2;
                    var i2 = [t3];
                    return arguments.length > 1 && (g(e3 = arguments[1]) && (n3 = e3.body, h(n3) === C && ((r2 = e3.headers ? new x(e3.headers) : new x()).has("content-type") || r2.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), e3 = m(e3, {
                      body: y(0, String(n3)),
                      headers: y(0, r2)
                    }))), i2.push(e3)), w.apply(this, i2);
                  }
                }), t2.exports = {
                  URLSearchParams: q,
                  getState: S
                };
              },
              285: function _(t2, e2, n2) {
                "use strict";
    
                n2(8783);
                var r;
                var i = n2(2109);
                var o = n2(9781);
                var a = n2(590);
                var c = n2(7854);
                var u = n2(6048);
                var s = n2(1320);
                var l = n2(5787);
                var f = n2(6656);
                var p = n2(1574);
                var d = n2(8457);
                var h = n2(8710).codeAt;
                var v = n2(3197);
                var g = n2(8003);
                var m = n2(1637);
                var y = n2(9909);
                var k = c.URL;
                var b = m.URLSearchParams;
                var A = m.getState;
                var w = y.set;
                var x = y.getterFor("URL");
                var I = Math.floor;
                var C = Math.pow;
                var B = "Invalid scheme";
                var _ = "Invalid host";
                var S = "Invalid port";
                var O = /[A-Za-z]/;
                var P = /[\d+-.A-Za-z]/;
                var W = /\d/;
                var E = /^(0x|0X)/;
                var j = /^[0-7]+$/;
                var R = /^\d+$/;
                var $2 = /^[\dA-Fa-f]+$/;
                var T = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/;
                var L = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/;
                var N = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
                var M = /[\u0009\u000A\u000D]/g;
                var U = function U(t3, e3) {
                  var n3, r2, i2;
                  if ("[" == e3.charAt(0)) {
                    if ("]" != e3.charAt(e3.length - 1)) return _;
                    if (!(n3 = D(e3.slice(1, -1)))) return _;
                    t3.host = n3;
                  } else if (X(t3)) {
                    if (e3 = v(e3), T.test(e3)) return _;
                    if (null === (n3 = Q(e3))) return _;
                    t3.host = n3;
                  } else {
                    if (L.test(e3)) return _;
                    for (n3 = "", r2 = d(e3), i2 = 0; i2 < r2.length; i2++) n3 += H(r2[i2], F);
                    t3.host = n3;
                  }
                };
                var Q = function Q(t3) {
                  var e3;
                  var n3;
                  var r2;
                  var i2;
                  var o2;
                  var a2;
                  var c2;
                  var u2 = t3.split(".");
                  if (u2.length && "" == u2[u2.length - 1] && u2.pop(), (e3 = u2.length) > 4) return t3;
                  for (n3 = [], r2 = 0; r2 < e3; r2++) {
                    if ("" == (i2 = u2[r2])) return t3;
                    if (o2 = 10, i2.length > 1 && "0" == i2.charAt(0) && (o2 = E.test(i2) ? 16 : 8, i2 = i2.slice(8 == o2 ? 1 : 2)), "" === i2) a2 = 0;else {
                      if (!(10 == o2 ? R : 8 == o2 ? j : $2).test(i2)) return t3;
                      a2 = parseInt(i2, o2);
                    }
                    n3.push(a2);
                  }
                  for (r2 = 0; r2 < e3; r2++) if (a2 = n3[r2], r2 == e3 - 1) {
                    if (a2 >= C(256, 5 - e3)) return null;
                  } else if (a2 > 255) return null;
                  for (c2 = n3.pop(), r2 = 0; r2 < n3.length; r2++) c2 += n3[r2] * C(256, 3 - r2);
                  return c2;
                };
                var D = function D(t3) {
                  var e3;
                  var n3;
                  var r2;
                  var i2;
                  var o2;
                  var a2;
                  var c2;
                  var u2 = [0, 0, 0, 0, 0, 0, 0, 0];
                  var s2 = 0;
                  var l2 = null;
                  var f2 = 0;
                  var p2 = function p2() {
                    return t3.charAt(f2);
                  };
                  if (":" == p2()) {
                    if (":" != t3.charAt(1)) return;
                    f2 += 2, l2 = ++s2;
                  }
                  for (; p2();) {
                    if (8 == s2) return;
                    if (":" != p2()) {
                      for (e3 = n3 = 0; n3 < 4 && $2.test(p2());) e3 = 16 * e3 + parseInt(p2(), 16), f2++, n3++;
                      if ("." == p2()) {
                        if (0 == n3) return;
                        if (f2 -= n3, s2 > 6) return;
                        for (r2 = 0; p2();) {
                          if (i2 = null, r2 > 0) {
                            if (!("." == p2() && r2 < 4)) return;
                            f2++;
                          }
                          if (!W.test(p2())) return;
                          for (; W.test(p2());) {
                            if (o2 = parseInt(p2(), 10), null === i2) i2 = o2;else {
                              if (0 == i2) return;
                              i2 = 10 * i2 + o2;
                            }
                            if (i2 > 255) return;
                            f2++;
                          }
                          u2[s2] = 256 * u2[s2] + i2, 2 != ++r2 && 4 != r2 || s2++;
                        }
                        if (4 != r2) return;
                        break;
                      }
                      if (":" == p2()) {
                        if (f2++, !p2()) return;
                      } else if (p2()) return;
                      u2[s2++] = e3;
                    } else {
                      if (null !== l2) return;
                      f2++, l2 = ++s2;
                    }
                  }
                  if (null !== l2) for (a2 = s2 - l2, s2 = 7; 0 != s2 && a2 > 0;) c2 = u2[s2], u2[s2--] = u2[l2 + a2 - 1], u2[l2 + --a2] = c2;else if (8 != s2) return;
                  return u2;
                };
                var q = function q(t3) {
                  var e3, n3, r2, i2;
                  if ("number" == typeof t3) {
                    for (e3 = [], n3 = 0; n3 < 4; n3++) e3.unshift(t3 % 256), t3 = I(t3 / 256);
                    return e3.join(".");
                  }
                  if ("object" == _typeof(t3)) {
                    for (e3 = "", r2 = function (t4) {
                      for (var e4 = null, n4 = 1, r3 = null, i3 = 0, o2 = 0; o2 < 8; o2++) 0 !== t4[o2] ? (i3 > n4 && (e4 = r3, n4 = i3), r3 = null, i3 = 0) : (null === r3 && (r3 = o2), ++i3);
                      return i3 > n4 && (e4 = r3, n4 = i3), e4;
                    }(t3), n3 = 0; n3 < 8; n3++) i2 && 0 === t3[n3] || (i2 && (i2 = false), r2 === n3 ? (e3 += n3 ? ":" : "::", i2 = true) : (e3 += t3[n3].toString(16), n3 < 7 && (e3 += ":")));
                    return "[" + e3 + "]";
                  }
                  return t3;
                };
                var F = {};
                var z = p({}, F, {
                  " ": 1,
                  '"': 1,
                  "<": 1,
                  ">": 1,
                  "`": 1
                });
                var Y = p({}, z, {
                  "#": 1,
                  "?": 1,
                  "{": 1,
                  "}": 1
                });
                var G = p({}, Y, {
                  "/": 1,
                  ":": 1,
                  ";": 1,
                  "=": 1,
                  "@": 1,
                  "[": 1,
                  "\\": 1,
                  "]": 1,
                  "^": 1,
                  "|": 1
                });
                var H = function H(t3, e3) {
                  var n3 = h(t3, 0);
                  return n3 > 32 && n3 < 127 && !f(e3, t3) ? t3 : encodeURIComponent(t3);
                };
                var J = {
                  ftp: 21,
                  file: null,
                  http: 80,
                  https: 443,
                  ws: 80,
                  wss: 443
                };
                var X = function X(t3) {
                  return f(J, t3.scheme);
                };
                var Z = function Z(t3) {
                  return "" != t3.username || "" != t3.password;
                };
                var V = function V(t3) {
                  return !t3.host || t3.cannotBeABaseURL || "file" == t3.scheme;
                };
                var K = function K(t3, e3) {
                  var n3;
                  return 2 == t3.length && O.test(t3.charAt(0)) && (":" == (n3 = t3.charAt(1)) || !e3 && "|" == n3);
                };
                var tt = function tt(t3) {
                  var e3;
                  return t3.length > 1 && K(t3.slice(0, 2)) && (2 == t3.length || "/" === (e3 = t3.charAt(2)) || "\\" === e3 || "?" === e3 || "#" === e3);
                };
                var et = function et(t3) {
                  var e3 = t3.path,
                    n3 = e3.length;
                  !n3 || "file" == t3.scheme && 1 == n3 && K(e3[0], true) || e3.pop();
                };
                var nt = function nt(t3) {
                  return "." === t3 || "%2e" === t3.toLowerCase();
                };
                var rt = {};
                var it = {};
                var ot = {};
                var at = {};
                var ct = {};
                var ut = {};
                var st = {};
                var lt = {};
                var ft = {};
                var pt = {};
                var dt = {};
                var ht = {};
                var vt = {};
                var gt = {};
                var mt = {};
                var yt = {};
                var kt = {};
                var bt = {};
                var At = {};
                var wt = {};
                var xt = {};
                var It = function It(t3, e3, n3, i2) {
                  var o2,
                    a2,
                    c2,
                    u2,
                    s2,
                    l2 = n3 || rt,
                    p2 = 0,
                    h2 = "",
                    v2 = false,
                    g2 = false,
                    m2 = false;
                  for (n3 || (t3.scheme = "", t3.username = "", t3.password = "", t3.host = null, t3.port = null, t3.path = [], t3.query = null, t3.fragment = null, t3.cannotBeABaseURL = false, e3 = e3.replace(N, "")), e3 = e3.replace(M, ""), o2 = d(e3); p2 <= o2.length;) {
                    switch (a2 = o2[p2], l2) {
                      case rt:
                        if (!a2 || !O.test(a2)) {
                          if (n3) return B;
                          l2 = ot;
                          continue;
                        }
                        h2 += a2.toLowerCase(), l2 = it;
                        break;
                      case it:
                        if (a2 && (P.test(a2) || "+" == a2 || "-" == a2 || "." == a2)) h2 += a2.toLowerCase();else {
                          if (":" != a2) {
                            if (n3) return B;
                            h2 = "", l2 = ot, p2 = 0;
                            continue;
                          }
                          if (n3 && (X(t3) != f(J, h2) || "file" == h2 && (Z(t3) || null !== t3.port) || "file" == t3.scheme && !t3.host)) return;
                          if (t3.scheme = h2, n3) return void (X(t3) && J[t3.scheme] == t3.port && (t3.port = null));
                          h2 = "", "file" == t3.scheme ? l2 = gt : X(t3) && i2 && i2.scheme == t3.scheme ? l2 = at : X(t3) ? l2 = lt : "/" == o2[p2 + 1] ? (l2 = ct, p2++) : (t3.cannotBeABaseURL = true, t3.path.push(""), l2 = At);
                        }
                        break;
                      case ot:
                        if (!i2 || i2.cannotBeABaseURL && "#" != a2) return B;
                        if (i2.cannotBeABaseURL && "#" == a2) {
                          t3.scheme = i2.scheme, t3.path = i2.path.slice(), t3.query = i2.query, t3.fragment = "", t3.cannotBeABaseURL = true, l2 = xt;
                          break;
                        }
                        l2 = "file" == i2.scheme ? gt : ut;
                        continue;
                      case at:
                        if ("/" != a2 || "/" != o2[p2 + 1]) {
                          l2 = ut;
                          continue;
                        }
                        l2 = ft, p2++;
                        break;
                      case ct:
                        if ("/" == a2) {
                          l2 = pt;
                          break;
                        }
                        l2 = bt;
                        continue;
                      case ut:
                        if (t3.scheme = i2.scheme, a2 == r) t3.username = i2.username, t3.password = i2.password, t3.host = i2.host, t3.port = i2.port, t3.path = i2.path.slice(), t3.query = i2.query;else if ("/" == a2 || "\\" == a2 && X(t3)) l2 = st;else if ("?" == a2) t3.username = i2.username, t3.password = i2.password, t3.host = i2.host, t3.port = i2.port, t3.path = i2.path.slice(), t3.query = "", l2 = wt;else {
                          if ("#" != a2) {
                            t3.username = i2.username, t3.password = i2.password, t3.host = i2.host, t3.port = i2.port, t3.path = i2.path.slice(), t3.path.pop(), l2 = bt;
                            continue;
                          }
                          t3.username = i2.username, t3.password = i2.password, t3.host = i2.host, t3.port = i2.port, t3.path = i2.path.slice(), t3.query = i2.query, t3.fragment = "", l2 = xt;
                        }
                        break;
                      case st:
                        if (!X(t3) || "/" != a2 && "\\" != a2) {
                          if ("/" != a2) {
                            t3.username = i2.username, t3.password = i2.password, t3.host = i2.host, t3.port = i2.port, l2 = bt;
                            continue;
                          }
                          l2 = pt;
                        } else l2 = ft;
                        break;
                      case lt:
                        if (l2 = ft, "/" != a2 || "/" != h2.charAt(p2 + 1)) continue;
                        p2++;
                        break;
                      case ft:
                        if ("/" != a2 && "\\" != a2) {
                          l2 = pt;
                          continue;
                        }
                        break;
                      case pt:
                        if ("@" == a2) {
                          v2 && (h2 = "%40" + h2), v2 = true, c2 = d(h2);
                          var _iterator = _createForOfIteratorHelper(c2),
                            _step;
                          try {
                            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                              var k2 = _step.value;
                              if (":" != k2 || m2) {
                                var b2 = H(k2, G);
                                m2 ? t3.password += b2 : t3.username += b2;
                              } else m2 = true;
                            }
                          } catch (err) {
                            _iterator.e(err);
                          } finally {
                            _iterator.f();
                          }
                          h2 = "";
                        } else if (a2 == r || "/" == a2 || "?" == a2 || "#" == a2 || "\\" == a2 && X(t3)) {
                          if (v2 && "" == h2) return "Invalid authority";
                          p2 -= d(h2).length + 1, h2 = "", l2 = dt;
                        } else h2 += a2;
                        break;
                      case dt:
                      case ht:
                        if (n3 && "file" == t3.scheme) {
                          l2 = yt;
                          continue;
                        }
                        if (":" != a2 || g2) {
                          if (a2 == r || "/" == a2 || "?" == a2 || "#" == a2 || "\\" == a2 && X(t3)) {
                            if (X(t3) && "" == h2) return _;
                            if (n3 && "" == h2 && (Z(t3) || null !== t3.port)) return;
                            if (u2 = U(t3, h2)) return u2;
                            if (h2 = "", l2 = kt, n3) return;
                            continue;
                          }
                          "[" == a2 ? g2 = true : "]" == a2 && (g2 = false), h2 += a2;
                        } else {
                          if ("" == h2) return _;
                          if (u2 = U(t3, h2)) return u2;
                          if (h2 = "", l2 = vt, n3 == ht) return;
                        }
                        break;
                      case vt:
                        if (!W.test(a2)) {
                          if (a2 == r || "/" == a2 || "?" == a2 || "#" == a2 || "\\" == a2 && X(t3) || n3) {
                            if ("" != h2) {
                              var A2 = parseInt(h2, 10);
                              if (A2 > 65535) return S;
                              t3.port = X(t3) && A2 === J[t3.scheme] ? null : A2, h2 = "";
                            }
                            if (n3) return;
                            l2 = kt;
                            continue;
                          }
                          return S;
                        }
                        h2 += a2;
                        break;
                      case gt:
                        if (t3.scheme = "file", "/" == a2 || "\\" == a2) l2 = mt;else {
                          if (!i2 || "file" != i2.scheme) {
                            l2 = bt;
                            continue;
                          }
                          if (a2 == r) t3.host = i2.host, t3.path = i2.path.slice(), t3.query = i2.query;else if ("?" == a2) t3.host = i2.host, t3.path = i2.path.slice(), t3.query = "", l2 = wt;else {
                            if ("#" != a2) {
                              tt(o2.slice(p2).join("")) || (t3.host = i2.host, t3.path = i2.path.slice(), et(t3)), l2 = bt;
                              continue;
                            }
                            t3.host = i2.host, t3.path = i2.path.slice(), t3.query = i2.query, t3.fragment = "", l2 = xt;
                          }
                        }
                        break;
                      case mt:
                        if ("/" == a2 || "\\" == a2) {
                          l2 = yt;
                          break;
                        }
                        i2 && "file" == i2.scheme && !tt(o2.slice(p2).join("")) && (K(i2.path[0], true) ? t3.path.push(i2.path[0]) : t3.host = i2.host), l2 = bt;
                        continue;
                      case yt:
                        if (a2 == r || "/" == a2 || "\\" == a2 || "?" == a2 || "#" == a2) {
                          if (!n3 && K(h2)) l2 = bt;else if ("" == h2) {
                            if (t3.host = "", n3) return;
                            l2 = kt;
                          } else {
                            if (u2 = U(t3, h2)) return u2;
                            if ("localhost" == t3.host && (t3.host = ""), n3) return;
                            h2 = "", l2 = kt;
                          }
                          continue;
                        }
                        h2 += a2;
                        break;
                      case kt:
                        if (X(t3)) {
                          if (l2 = bt, "/" != a2 && "\\" != a2) continue;
                        } else if (n3 || "?" != a2) {
                          if (n3 || "#" != a2) {
                            if (a2 != r && (l2 = bt, "/" != a2)) continue;
                          } else t3.fragment = "", l2 = xt;
                        } else t3.query = "", l2 = wt;
                        break;
                      case bt:
                        if (a2 == r || "/" == a2 || "\\" == a2 && X(t3) || !n3 && ("?" == a2 || "#" == a2)) {
                          if (".." === (s2 = (s2 = h2).toLowerCase()) || "%2e." === s2 || ".%2e" === s2 || "%2e%2e" === s2 ? (et(t3), "/" == a2 || "\\" == a2 && X(t3) || t3.path.push("")) : nt(h2) ? "/" == a2 || "\\" == a2 && X(t3) || t3.path.push("") : ("file" == t3.scheme && !t3.path.length && K(h2) && (t3.host && (t3.host = ""), h2 = h2.charAt(0) + ":"), t3.path.push(h2)), h2 = "", "file" == t3.scheme && (a2 == r || "?" == a2 || "#" == a2)) for (; t3.path.length > 1 && "" === t3.path[0];) t3.path.shift();
                          "?" == a2 ? (t3.query = "", l2 = wt) : "#" == a2 && (t3.fragment = "", l2 = xt);
                        } else h2 += H(a2, Y);
                        break;
                      case At:
                        "?" == a2 ? (t3.query = "", l2 = wt) : "#" == a2 ? (t3.fragment = "", l2 = xt) : a2 != r && (t3.path[0] += H(a2, F));
                        break;
                      case wt:
                        n3 || "#" != a2 ? a2 != r && ("'" == a2 && X(t3) ? t3.query += "%27" : t3.query += "#" == a2 ? "%23" : H(a2, F)) : (t3.fragment = "", l2 = xt);
                        break;
                      case xt:
                        a2 != r && (t3.fragment += H(a2, z));
                    }
                    p2++;
                  }
                };
                var Ct = function Ct(t3) {
                  var e3;
                  var n3;
                  var r2 = l(this, Ct, "URL");
                  var i2 = arguments.length > 1 ? arguments[1] : void 0;
                  var a2 = String(t3);
                  var c2 = w(r2, {
                    type: "URL"
                  });
                  if (void 0 !== i2) {
                    if (i2 instanceof Ct) e3 = x(i2);else if (n3 = It(e3 = {}, String(i2))) throw TypeError(n3);
                  }
                  if (n3 = It(c2, a2, null, e3)) throw TypeError(n3);
                  var u2 = c2.searchParams = new b(),
                    s2 = A(u2);
                  s2.updateSearchParams(c2.query), s2.updateURL = function () {
                    c2.query = String(u2) || null;
                  }, o || (r2.href = _t.call(r2), r2.origin = St.call(r2), r2.protocol = Ot.call(r2), r2.username = Pt.call(r2), r2.password = Wt.call(r2), r2.host = Et.call(r2), r2.hostname = jt.call(r2), r2.port = Rt.call(r2), r2.pathname = $t.call(r2), r2.search = Tt.call(r2), r2.searchParams = Lt.call(r2), r2.hash = Nt.call(r2));
                };
                var Bt = Ct.prototype;
                var _t = function _t() {
                  var t3 = x(this);
                  var e3 = t3.scheme;
                  var n3 = t3.username;
                  var r2 = t3.password;
                  var i2 = t3.host;
                  var o2 = t3.port;
                  var a2 = t3.path;
                  var c2 = t3.query;
                  var u2 = t3.fragment;
                  var s2 = e3 + ":";
                  return null !== i2 ? (s2 += "//", Z(t3) && (s2 += n3 + (r2 ? ":" + r2 : "") + "@"), s2 += q(i2), null !== o2 && (s2 += ":" + o2)) : "file" == e3 && (s2 += "//"), s2 += t3.cannotBeABaseURL ? a2[0] : a2.length ? "/" + a2.join("/") : "", null !== c2 && (s2 += "?" + c2), null !== u2 && (s2 += "#" + u2), s2;
                };
                var St = function St() {
                  var t3 = x(this),
                    e3 = t3.scheme,
                    n3 = t3.port;
                  if ("blob" == e3) try {
                    return new URL(e3.path[0]).origin;
                  } catch (t4) {
                    return "null";
                  }
                  return "file" != e3 && X(t3) ? e3 + "://" + q(t3.host) + (null !== n3 ? ":" + n3 : "") : "null";
                };
                var Ot = function Ot() {
                  return x(this).scheme + ":";
                };
                var Pt = function Pt() {
                  return x(this).username;
                };
                var Wt = function Wt() {
                  return x(this).password;
                };
                var Et = function Et() {
                  var t3 = x(this),
                    e3 = t3.host,
                    n3 = t3.port;
                  return null === e3 ? "" : null === n3 ? q(e3) : q(e3) + ":" + n3;
                };
                var jt = function jt() {
                  var t3 = x(this).host;
                  return null === t3 ? "" : q(t3);
                };
                var Rt = function Rt() {
                  var t3 = x(this).port;
                  return null === t3 ? "" : String(t3);
                };
                var $t = function $t() {
                  var t3 = x(this),
                    e3 = t3.path;
                  return t3.cannotBeABaseURL ? e3[0] : e3.length ? "/" + e3.join("/") : "";
                };
                var Tt = function Tt() {
                  var t3 = x(this).query;
                  return t3 ? "?" + t3 : "";
                };
                var Lt = function Lt() {
                  return x(this).searchParams;
                };
                var Nt = function Nt() {
                  var t3 = x(this).fragment;
                  return t3 ? "#" + t3 : "";
                };
                var Mt = function Mt(t3, e3) {
                  return {
                    get: t3,
                    set: e3,
                    configurable: true,
                    enumerable: true
                  };
                };
                if (o && u(Bt, {
                  href: Mt(_t, function (t3) {
                    var e3 = x(this);
                    var n3 = String(t3);
                    var r2 = It(e3, n3);
                    if (r2) throw TypeError(r2);
                    A(e3.searchParams).updateSearchParams(e3.query);
                  }),
                  origin: Mt(St),
                  protocol: Mt(Ot, function (t3) {
                    var e3 = x(this);
                    It(e3, String(t3) + ":", rt);
                  }),
                  username: Mt(Pt, function (t3) {
                    var e3 = x(this);
                    var n3 = d(String(t3));
                    if (!V(e3)) {
                      e3.username = "";
                      for (var r2 = 0; r2 < n3.length; r2++) e3.username += H(n3[r2], G);
                    }
                  }),
                  password: Mt(Wt, function (t3) {
                    var e3 = x(this);
                    var n3 = d(String(t3));
                    if (!V(e3)) {
                      e3.password = "";
                      for (var r2 = 0; r2 < n3.length; r2++) e3.password += H(n3[r2], G);
                    }
                  }),
                  host: Mt(Et, function (t3) {
                    var e3 = x(this);
                    e3.cannotBeABaseURL || It(e3, String(t3), dt);
                  }),
                  hostname: Mt(jt, function (t3) {
                    var e3 = x(this);
                    e3.cannotBeABaseURL || It(e3, String(t3), ht);
                  }),
                  port: Mt(Rt, function (t3) {
                    var e3 = x(this);
                    V(e3) || ("" == (t3 = String(t3)) ? e3.port = null : It(e3, t3, vt));
                  }),
                  pathname: Mt($t, function (t3) {
                    var e3 = x(this);
                    e3.cannotBeABaseURL || (e3.path = [], It(e3, t3 + "", kt));
                  }),
                  search: Mt(Tt, function (t3) {
                    var e3 = x(this);
                    "" == (t3 = String(t3)) ? e3.query = null : ("?" == t3.charAt(0) && (t3 = t3.slice(1)), e3.query = "", It(e3, t3, wt)), A(e3.searchParams).updateSearchParams(e3.query);
                  }),
                  searchParams: Mt(Lt),
                  hash: Mt(Nt, function (t3) {
                    var e3 = x(this);
                    "" != (t3 = String(t3)) ? ("#" == t3.charAt(0) && (t3 = t3.slice(1)), e3.fragment = "", It(e3, t3, xt)) : e3.fragment = null;
                  })
                }), s(Bt, "toJSON", function () {
                  return _t.call(this);
                }, {
                  enumerable: true
                }), s(Bt, "toString", function () {
                  return _t.call(this);
                }, {
                  enumerable: true
                }), k) {
                  var Ut = k.createObjectURL;
                  var Qt = k.revokeObjectURL;
                  Ut && s(Ct, "createObjectURL", function (t3) {
                    return Ut.apply(k, arguments);
                  }), Qt && s(Ct, "revokeObjectURL", function (t3) {
                    return Qt.apply(k, arguments);
                  });
                }
                g(Ct, "URL"), i({
                  global: true,
                  forced: !a,
                  sham: !o
                }, {
                  URL: Ct
                });
              },
              9183: function _(t2, e2, n2) {
                "use strict";
    
                var r = n2(7537);
                var i = n2.n(r);
                var o = n2(3645);
                var a = n2.n(o)()(i());
                a.push([t2.id, ".clear{clear:both}#Wikiplus-Quickedit-Summary-Input{width:50%}#Wikiplus-Quickedit-Preview-Submit, #Wikiplus-Quickedit-Submit{margin-top:5px;padding:revert}.Wikiplus-Btn{position:relative;float:left;margin:3px 5px;padding:3px 1em;width:auto;background-color:#fff;box-shadow:0 1px 2px #aaa;text-align:center;cursor:pointer}.Wikiplus-Btn a{position:relative;display:block;margin:0;color:#000;text-decoration:none}.Wikiplus-InterBox{position:absolute;top:20%;z-index:200;padding:20px 10px;width:600px;min-height:100px;border:1px rgba(161, 154, 220, 0.41) solid;background-color:#edf9f7;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.Wikiplus-InterBox-Header{position:relative;top:0;top:-8px;margin:0;width:100%;border-bottom:1px #6cf solid;text-align:left;font-size:15px;line-height:30px;cursor:move}.Wikiplus-InterBox-Input{margin:20px;width:60%}.Wikiplus-InterBox-Btn{position:relative;float:right;margin:auto 3px;padding:6px 12px;border:1px solid #dedede;background-color:#fff;vertical-align:middle;text-align:center;cursor:pointer}.Wikiplus-InterBox-Btn:hover{background-color:#e8e8e8}.Wikiplus-InterBox-Close{position:absolute;top:0;right:0;margin:3px 7px;font-size:20px;cursor:pointer}.Wikiplus-InterBox label{font-size:13px}.Wikiplus-InterBox table.diff{table-layout:auto !important}.Wikiplus-InterBox table.diff .diff-addedline,.Wikiplus-InterBox table.diff .diff-deletedline,.Wikiplus-InterBox table.diff .diff-lineno{width:50%}.Wikiplus-InterBox table.diff .diff-marker{text-align:left}#Wikiplus-Quickedit-Preview-Output{clear:both;margin:5px 0}#Wikiplus-Quickedit{word-break:break-all;width:100%;min-height:500px}.Wikiplus-Banner{margin:0;padding:10px 5px;min-height:50px;background:rgba(193, 222, 214, 0.51);text-align:center;font-size:30px;font-family:微软雅黑}.MoeNotification-notice{position:relative;display:none;overflow:hidden;margin:3px 5px;padding:0 5px;width:auto;box-shadow:0 3px 3px #aaa;font-size:14px !important}.MoeNotification-notice span{position:relative;margin:3px auto 3px 3px;color:#fff;text-align:left;font-size:14px !important;font-family:Arial, Tahoma, Microsoft YaHei, \\5fae\\8f6f\\96c5\\9ed1, Hiragino Sans GB, Microsoft JhengHei, 微軟正黑體, sans-serif;line-height:1.5 !important}.MoeNotification-notice-success{border-left:5px #8dda93 solid;border-bottom-left-radius:3px;border-top-left-radius:3px;background-color:#008a00}.MoeNotification-notice-warning{border-left:5px #ffdf00 solid;border-bottom-left-radius:3px;border-top-left-radius:3px;background-color:#f4bd00}.MoeNotification-notice-warning span{color:#000}.MoeNotification-notice-error{border-left:5px #e71717 solid;border-bottom-left-radius:3px;border-top-left-radius:3px;background-color:#b00e06}#MoeNotification{position:fixed;bottom:30px;left:0;z-index:713;min-width:20%}.mw-editsection-divider{display:inline !important}.skin-vector #Wikiplus-Quickedit-Summary-Input{margin-top:5px}", "", {
                  version: 3,
                  sources: ["webpack://./src/wikiplus.css"],
                  names: [],
                  mappings: "AAAA;IACI,WAAW;AACf;AACA;IACI,UAAU;AACd;AACA;;IAEI,eAAe;IACf,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,sBAAsB;IACtB,0BAA0B;IAC1B,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,cAAc;IACd,SAAS;IACT,WAAW;IACX,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,SAAS;IACT,WAAW;IACX,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,YAAY;AAChB;AACA;IACI,YAAY;IACZ,UAAU;AACd;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,yBAAyB;IACzB,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,eAAe;IACf,eAAe;IACf,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,6BAA6B;AACjC;AACA;;;IAGI,UAAU;AACd;AACA;IACI,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,aAAa;AACjB;AACA;IACI,qBAAqB;IACrB,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,SAAS;IACT,iBAAiB;IACjB,gBAAgB;IAChB,qCAAqC;IACrC,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,gBAAgB;IAChB,eAAe;IACf,cAAc;IACd,WAAW;IACX,0BAA0B;IAC1B,0BAA0B;AAC9B;AACA;IACI,kBAAkB;IAClB,wBAAwB;IACxB,WAAW;IACX,gBAAgB;IAChB,0BAA0B;IAC1B;6CACyC;IACzC,2BAA2B;AAC/B;AACA;IACI,8BAA8B;IAC9B,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;AAC7B;AACA;IACI,8BAA8B;IAC9B,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;AAC7B;AACA;IACI,WAAW;AACf;AACA;IACI,8BAA8B;IAC9B,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,YAAY;IACZ,OAAO;IACP,YAAY;IACZ,cAAc;AAClB;AACA;IACI,0BAA0B;AAC9B;AACA;;;;IAII,WAAW;AACf;AACA;IACI,UAAU;AACd;AACA;;IAEI,eAAe;AACnB;AACA;IACI,wBAAwB;IACxB,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,UAAU;AACd;AACA;IACI;uHACmH;AACvH;AACA;IACI;yIACqI;AACzI;AACA;IACI,wBAAwB;IACxB,mBAAmB;AACvB;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,eAAe;AACnB;AACA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,gBAAgB;IAChB,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,gCAAgC;IAChC,gDAAgD;IAChD,cAAc;IACd,kBAAkB;IAClB,wCAAwC;IACxC,yBAAyB;IACzB,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,qCAAqC;IACrC,+CAA+C;IAC/C,2CAA2C;AAC/C;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,iBAAiB;IACjB,kBAAkB;IAClB,2BAA2B;AAC/B",
                  sourcesContent: [".clear{clear:both}#Wikiplus-Quickedit-Summary-Input{width:50%}#Wikiplus-Quickedit-Preview-Submit, #Wikiplus-Quickedit-Submit{margin-top:5px;padding:revert}.Wikiplus-Btn{position:relative;float:left;margin:3px 5px;padding:3px 1em;width:auto;background-color:#fff;box-shadow:0 1px 2px #aaa;text-align:center;cursor:pointer}.Wikiplus-Btn a{position:relative;display:block;margin:0;color:#000;text-decoration:none}.Wikiplus-InterBox{position:absolute;top:20%;z-index:200;padding:20px 10px;width:600px;min-height:100px;border:1px rgba(161, 154, 220, 0.41) solid;background-color:#edf9f7;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.Wikiplus-InterBox-Header{position:relative;top:0;top:-8px;margin:0;width:100%;border-bottom:1px #6cf solid;text-align:left;font-size:15px;line-height:30px;cursor:move}.Wikiplus-InterBox-Input{margin:20px;width:60%}.Wikiplus-InterBox-Btn{position:relative;float:right;margin:auto 3px;padding:6px 12px;border:1px solid #dedede;background-color:#fff;vertical-align:middle;text-align:center;cursor:pointer}.Wikiplus-InterBox-Btn:hover{background-color:#e8e8e8}.Wikiplus-InterBox-Close{position:absolute;top:0;right:0;margin:3px 7px;font-size:20px;cursor:pointer}.Wikiplus-InterBox label{font-size:13px}.Wikiplus-InterBox table.diff{table-layout:auto !important}.Wikiplus-InterBox table.diff .diff-addedline,.Wikiplus-InterBox table.diff .diff-deletedline,.Wikiplus-InterBox table.diff .diff-lineno{width:50%}.Wikiplus-InterBox table.diff .diff-marker{text-align:left}#Wikiplus-Quickedit-Preview-Output{clear:both;margin:5px 0}#Wikiplus-Quickedit{word-break:break-all;width:100%;min-height:500px}.Wikiplus-Banner{margin:0;padding:10px 5px;min-height:50px;background:rgba(193, 222, 214, 0.51);text-align:center;font-size:30px;font-family:微软雅黑}.MoeNotification-notice{position:relative;display:none;overflow:hidden;margin:3px 5px;padding:0 5px;width:auto;box-shadow:0 3px 3px #aaa;font-size:14px !important}.MoeNotification-notice span{position:relative;margin:3px auto 3px 3px;color:#fff;text-align:left;font-size:14px !important;font-family:Arial, Tahoma, Microsoft YaHei, \\5fae\\8f6f\\96c5\\9ed1, Hiragino Sans GB, Microsoft JhengHei, 微軟正黑體, sans-serif;line-height:1.5 !important}.MoeNotification-notice-success{border-left:5px #8dda93 solid;border-bottom-left-radius:3px;border-top-left-radius:3px;background-color:#008a00}.MoeNotification-notice-warning{border-left:5px #ffdf00 solid;border-bottom-left-radius:3px;border-top-left-radius:3px;background-color:#f4bd00}.MoeNotification-notice-warning span{color:#000}.MoeNotification-notice-error{border-left:5px #e71717 solid;border-bottom-left-radius:3px;border-top-left-radius:3px;background-color:#b00e06}#MoeNotification{position:fixed;bottom:30px;left:0;z-index:713;min-width:20%}.mw-editsection-divider{display:inline !important}.skin-vector #Wikiplus-Quickedit-Summary-Input{margin-top:5px}"],
                  sourceRoot: ""
                }]), e2.Z = a;
              },
              3645: function _(t2) {
                "use strict";
    
                t2.exports = function (t3) {
                  var e2 = [];
                  return e2.toString = function () {
                    return this.map(function (e3) {
                      var n2 = "";
                      var r = void 0 !== e3[5];
                      return e3[4] && (n2 += "@supports (".concat(e3[4], ") {")), e3[2] && (n2 += "@media ".concat(e3[2], " {")), r && (n2 += "@layer".concat(e3[5].length > 0 ? " ".concat(e3[5]) : "", " {")), n2 += t3(e3), r && (n2 += "}"), e3[2] && (n2 += "}"), e3[4] && (n2 += "}"), n2;
                    }).join("");
                  }, e2.i = function (t4, n2, r, i, o) {
                    "string" == typeof t4 && (t4 = [[null, t4, void 0]]);
                    var a = {};
                    if (r) for (var c = 0; c < this.length; c++) {
                      var u = this[c][0];
                      null != u && (a[u] = true);
                    }
                    for (var s = 0; s < t4.length; s++) {
                      var l = [].concat(t4[s]);
                      r && a[l[0]] || (void 0 !== o && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")), l[5] = o), n2 && (l[2] ? (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}"), l[2] = n2) : l[2] = n2), i && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"), l[4] = i) : l[4] = "".concat(i)), e2.push(l));
                    }
                  }, e2;
                };
              },
              7537: function _(t2) {
                "use strict";
    
                t2.exports = function (t3) {
                  var e2 = t3[1];
                  var n2 = t3[3];
                  if (!n2) return e2;
                  if ("function" == typeof btoa) {
                    var r = btoa(unescape(encodeURIComponent(JSON.stringify(n2))));
                    var i = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r);
                    var o = "/*# ".concat(i, " */");
                    var a = n2.sources.map(function (t4) {
                      return "/*# sourceURL=".concat(n2.sourceRoot || "").concat(t4, " */");
                    });
                    return [e2].concat(a).concat([o]).join("\n");
                  }
                  return [e2].join("\n");
                };
              },
              5666: function _(t2) {
                var e2 = function (t3) {
                  "use strict";
    
                  var e3;
                  var n2 = Object.prototype;
                  var r = n2.hasOwnProperty;
                  var i = "function" == typeof Symbol ? Symbol : {};
                  var o = i.iterator || "@@iterator";
                  var a = i.asyncIterator || "@@asyncIterator";
                  var c = i.toStringTag || "@@toStringTag";
                  function u(t4, e4, n3) {
                    return Object.defineProperty(t4, e4, {
                      value: n3,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }), t4[e4];
                  }
                  try {
                    u({}, "");
                  } catch (t4) {
                    u = function u(t5, e4, n3) {
                      return t5[e4] = n3;
                    };
                  }
                  function s(t4, e4, n3, r2) {
                    var i2 = e4 && e4.prototype instanceof g ? e4 : g;
                    var o2 = Object.create(i2.prototype);
                    var a2 = new S(r2 || []);
                    return o2._invoke = function (t5, e5, n4) {
                      var r3 = f;
                      return function (i3, o3) {
                        if (r3 === d) throw new Error("Generator is already running");
                        if (r3 === h) {
                          if ("throw" === i3) throw o3;
                          return P();
                        }
                        for (n4.method = i3, n4.arg = o3;;) {
                          var a3 = n4.delegate;
                          if (a3) {
                            var c2 = C(a3, n4);
                            if (c2) {
                              if (c2 === v) continue;
                              return c2;
                            }
                          }
                          if ("next" === n4.method) n4.sent = n4._sent = n4.arg;else if ("throw" === n4.method) {
                            if (r3 === f) throw r3 = h, n4.arg;
                            n4.dispatchException(n4.arg);
                          } else "return" === n4.method && n4.abrupt("return", n4.arg);
                          r3 = d;
                          var u2 = l(t5, e5, n4);
                          if ("normal" === u2.type) {
                            if (r3 = n4.done ? h : p, u2.arg === v) continue;
                            return {
                              value: u2.arg,
                              done: n4.done
                            };
                          }
                          "throw" === u2.type && (r3 = h, n4.method = "throw", n4.arg = u2.arg);
                        }
                      };
                    }(t4, n3, a2), o2;
                  }
                  function l(t4, e4, n3) {
                    try {
                      return {
                        type: "normal",
                        arg: t4.call(e4, n3)
                      };
                    } catch (t5) {
                      return {
                        type: "throw",
                        arg: t5
                      };
                    }
                  }
                  t3.wrap = s;
                  var f = "suspendedStart";
                  var p = "suspendedYield";
                  var d = "executing";
                  var h = "completed";
                  var v = {};
                  function g() {}
                  function m() {}
                  function y() {}
                  var k = {};
                  u(k, o, function () {
                    return this;
                  });
                  var b = Object.getPrototypeOf;
                  var A = b && b(b(O([])));
                  A && A !== n2 && r.call(A, o) && (k = A);
                  var w = y.prototype = g.prototype = Object.create(k);
                  function x(t4) {
                    ["next", "throw", "return"].forEach(function (e4) {
                      u(t4, e4, function (t5) {
                        return this._invoke(e4, t5);
                      });
                    });
                  }
                  function I(t4, e4) {
                    function n3(i3, o2, a2, c2) {
                      var u2 = l(t4[i3], t4, o2);
                      if ("throw" !== u2.type) {
                        var s2 = u2.arg;
                        var f2 = s2.value;
                        return f2 && "object" == _typeof(f2) && r.call(f2, "__await") ? e4.resolve(f2.__await).then(function (t5) {
                          n3("next", t5, a2, c2);
                        }, function (t5) {
                          n3("throw", t5, a2, c2);
                        }) : e4.resolve(f2).then(function (t5) {
                          s2.value = t5, a2(s2);
                        }, function (t5) {
                          return n3("throw", t5, a2, c2);
                        });
                      }
                      c2(u2.arg);
                    }
                    var i2;
                    this._invoke = function (t5, r2) {
                      function o2() {
                        return new e4(function (e5, i3) {
                          n3(t5, r2, e5, i3);
                        });
                      }
                      return i2 = i2 ? i2.then(o2, o2) : o2();
                    };
                  }
                  function C(t4, n3) {
                    var r2 = t4.iterator[n3.method];
                    if (r2 === e3) {
                      if (n3.delegate = null, "throw" === n3.method) {
                        if (t4.iterator["return"] && (n3.method = "return", n3.arg = e3, C(t4, n3), "throw" === n3.method)) return v;
                        n3.method = "throw", n3.arg = new TypeError("The iterator does not provide a 'throw' method");
                      }
                      return v;
                    }
                    var i2 = l(r2, t4.iterator, n3.arg);
                    if ("throw" === i2.type) return n3.method = "throw", n3.arg = i2.arg, n3.delegate = null, v;
                    var o2 = i2.arg;
                    return o2 ? o2.done ? (n3[t4.resultName] = o2.value, n3.next = t4.nextLoc, "return" !== n3.method && (n3.method = "next", n3.arg = e3), n3.delegate = null, v) : o2 : (n3.method = "throw", n3.arg = new TypeError("iterator result is not an object"), n3.delegate = null, v);
                  }
                  function B(t4) {
                    var e4 = {
                      tryLoc: t4[0]
                    };
                    1 in t4 && (e4.catchLoc = t4[1]), 2 in t4 && (e4.finallyLoc = t4[2], e4.afterLoc = t4[3]), this.tryEntries.push(e4);
                  }
                  function _(t4) {
                    var e4 = t4.completion || {};
                    e4.type = "normal", delete e4.arg, t4.completion = e4;
                  }
                  function S(t4) {
                    this.tryEntries = [{
                      tryLoc: "root"
                    }], t4.forEach(B, this), this.reset(true);
                  }
                  function O(t4) {
                    if (t4) {
                      var n3 = t4[o];
                      if (n3) return n3.call(t4);
                      if ("function" == typeof t4.next) return t4;
                      if (!isNaN(t4.length)) {
                        var i2 = -1;
                        var a2 = function n4() {
                          for (; ++i2 < t4.length;) if (r.call(t4, i2)) return n4.value = t4[i2], n4.done = false, n4;
                          return n4.value = e3, n4.done = true, n4;
                        };
                        return a2.next = a2;
                      }
                    }
                    return {
                      next: P
                    };
                  }
                  function P() {
                    return {
                      value: e3,
                      done: true
                    };
                  }
                  return m.prototype = y, u(w, "constructor", y), u(y, "constructor", m), m.displayName = u(y, c, "GeneratorFunction"), t3.isGeneratorFunction = function (t4) {
                    var e4 = "function" == typeof t4 && t4.constructor;
                    return !!e4 && (e4 === m || "GeneratorFunction" === (e4.displayName || e4.name));
                  }, t3.mark = function (t4) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t4, y) : (t4.__proto__ = y, u(t4, c, "GeneratorFunction")), t4.prototype = Object.create(w), t4;
                  }, t3.awrap = function (t4) {
                    return {
                      __await: t4
                    };
                  }, x(I.prototype), u(I.prototype, a, function () {
                    return this;
                  }), t3.AsyncIterator = I, t3.async = function (e4, n3, r2, i2, o2) {
                    void 0 === o2 && (o2 = Promise);
                    var a2 = new I(s(e4, n3, r2, i2), o2);
                    return t3.isGeneratorFunction(n3) ? a2 : a2.next().then(function (t4) {
                      return t4.done ? t4.value : a2.next();
                    });
                  }, x(w), u(w, c, "Generator"), u(w, o, function () {
                    return this;
                  }), u(w, "toString", function () {
                    return "[object Generator]";
                  }), t3.keys = function (t4) {
                    var e4 = [];
                    for (var n3 in t4) e4.push(n3);
                    return e4.reverse(), function n3() {
                      for (; e4.length;) {
                        var r2 = e4.pop();
                        if (r2 in t4) return n3.value = r2, n3.done = false, n3;
                      }
                      return n3.done = true, n3;
                    };
                  }, t3.values = O, S.prototype = {
                    constructor: S,
                    reset: function reset(t4) {
                      if (this.prev = 0, this.next = 0, this.sent = this._sent = e3, this.done = false, this.delegate = null, this.method = "next", this.arg = e3, this.tryEntries.forEach(_), !t4) for (var n3 in this) "t" === n3.charAt(0) && r.call(this, n3) && !isNaN(+n3.slice(1)) && (this[n3] = e3);
                    },
                    stop: function stop() {
                      this.done = true;
                      var t4 = this.tryEntries[0].completion;
                      if ("throw" === t4.type) throw t4.arg;
                      return this.rval;
                    },
                    dispatchException: function dispatchException(t4) {
                      if (this.done) throw t4;
                      var n3 = this;
                      function i2(r2, i3) {
                        return c2.type = "throw", c2.arg = t4, n3.next = r2, i3 && (n3.method = "next", n3.arg = e3), !!i3;
                      }
                      for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
                        var a2 = this.tryEntries[o2];
                        var c2 = a2.completion;
                        if ("root" === a2.tryLoc) return i2("end");
                        if (a2.tryLoc <= this.prev) {
                          var u2 = r.call(a2, "catchLoc");
                          var s2 = r.call(a2, "finallyLoc");
                          if (u2 && s2) {
                            if (this.prev < a2.catchLoc) return i2(a2.catchLoc, true);
                            if (this.prev < a2.finallyLoc) return i2(a2.finallyLoc);
                          } else if (u2) {
                            if (this.prev < a2.catchLoc) return i2(a2.catchLoc, true);
                          } else {
                            if (!s2) throw new Error("try statement without catch or finally");
                            if (this.prev < a2.finallyLoc) return i2(a2.finallyLoc);
                          }
                        }
                      }
                    },
                    abrupt: function abrupt(t4, e4) {
                      for (var n3 = this.tryEntries.length - 1; n3 >= 0; --n3) {
                        var i2 = this.tryEntries[n3];
                        if (i2.tryLoc <= this.prev && r.call(i2, "finallyLoc") && this.prev < i2.finallyLoc) {
                          var o2 = i2;
                          break;
                        }
                      }
                      o2 && ("break" === t4 || "continue" === t4) && o2.tryLoc <= e4 && e4 <= o2.finallyLoc && (o2 = null);
                      var a2 = o2 ? o2.completion : {};
                      return a2.type = t4, a2.arg = e4, o2 ? (this.method = "next", this.next = o2.finallyLoc, v) : this.complete(a2);
                    },
                    complete: function complete(t4, e4) {
                      if ("throw" === t4.type) throw t4.arg;
                      return "break" === t4.type || "continue" === t4.type ? this.next = t4.arg : "return" === t4.type ? (this.rval = this.arg = t4.arg, this.method = "return", this.next = "end") : "normal" === t4.type && e4 && (this.next = e4), v;
                    },
                    finish: function finish(t4) {
                      for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                        var n3 = this.tryEntries[e4];
                        if (n3.finallyLoc === t4) return this.complete(n3.completion, n3.afterLoc), _(n3), v;
                      }
                    },
                    "catch": function _catch(t4) {
                      for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                        var n3 = this.tryEntries[e4];
                        if (n3.tryLoc === t4) {
                          var r2 = n3.completion;
                          if ("throw" === r2.type) {
                            var i2 = r2.arg;
                            _(n3);
                          }
                          return i2;
                        }
                      }
                      throw new Error("illegal catch attempt");
                    },
                    delegateYield: function delegateYield(t4, n3, r2) {
                      return this.delegate = {
                        iterator: O(t4),
                        resultName: n3,
                        nextLoc: r2
                      }, "next" === this.method && (this.arg = e3), v;
                    }
                  }, t3;
                }(t2.exports);
                try {
                  regeneratorRuntime = e2;
                } catch (t3) {
                  "object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) ? globalThis.regeneratorRuntime = e2 : Function("r", "regeneratorRuntime = r")(e2);
                }
              },
              3379: function _(t2) {
                "use strict";
    
                var e2 = [];
                function n2(t3) {
                  for (var n3 = -1, r2 = 0; r2 < e2.length; r2++) if (e2[r2].identifier === t3) {
                    n3 = r2;
                    break;
                  }
                  return n3;
                }
                function r(t3, r2) {
                  for (var o = {}, a = [], c = 0; c < t3.length; c++) {
                    var u = t3[c];
                    var s = r2.base ? u[0] + r2.base : u[0];
                    var l = o[s] || 0;
                    var f = "".concat(s, " ").concat(l);
                    o[s] = l + 1;
                    var p = n2(f);
                    var d = {
                      css: u[1],
                      media: u[2],
                      sourceMap: u[3],
                      supports: u[4],
                      layer: u[5]
                    };
                    if (-1 !== p) e2[p].references++, e2[p].updater(d);else {
                      var h = i(d, r2);
                      r2.byIndex = c, e2.splice(c, 0, {
                        identifier: f,
                        updater: h,
                        references: 1
                      });
                    }
                    a.push(f);
                  }
                  return a;
                }
                function i(t3, e3) {
                  var n3 = e3.domAPI(e3);
                  n3.update(t3);
                  return function (e4) {
                    if (e4) {
                      if (e4.css === t3.css && e4.media === t3.media && e4.sourceMap === t3.sourceMap && e4.supports === t3.supports && e4.layer === t3.layer) return;
                      n3.update(t3 = e4);
                    } else n3.remove();
                  };
                }
                t2.exports = function (t3, i2) {
                  var o = r(t3 = t3 || [], i2 = i2 || {});
                  return function () {
                    var t4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    for (var a = 0; a < o.length; a++) {
                      var c = n2(o[a]);
                      e2[c].references--;
                    }
                    for (var u = r(t4, i2), s = 0; s < o.length; s++) {
                      var l = n2(o[s]);
                      0 === e2[l].references && (e2[l].updater(), e2.splice(l, 1));
                    }
                    o = u;
                  };
                };
              },
              569: function _(t2) {
                "use strict";
    
                var e2 = {};
                t2.exports = function (t3, n2) {
                  var r = function (t4) {
                    if (void 0 === e2[t4]) {
                      var n3 = document.querySelector(t4);
                      if (window.HTMLIFrameElement && n3 instanceof window.HTMLIFrameElement) try {
                        n3 = n3.contentDocument.head;
                      } catch (t5) {
                        n3 = null;
                      }
                      e2[t4] = n3;
                    }
                    return e2[t4];
                  }(t3);
                  if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                  r.appendChild(n2);
                };
              },
              9216: function _(t2) {
                "use strict";
    
                t2.exports = function (t3) {
                  var e2 = document.createElement("style");
                  return t3.setAttributes(e2, t3.attributes), t3.insert(e2, t3.options), e2;
                };
              },
              3565: function _(t2, e2, n2) {
                "use strict";
    
                t2.exports = function (t3) {
                  var e3 = n2.nc;
                  e3 && t3.setAttribute("nonce", e3);
                };
              },
              7795: function _(t2) {
                "use strict";
    
                t2.exports = function (t3) {
                  var e2 = t3.insertStyleElement(t3);
                  return {
                    update: function update(n2) {
                      !function (t4, e3, n3) {
                        var r = "";
                        n3.supports && (r += "@supports (".concat(n3.supports, ") {")), n3.media && (r += "@media ".concat(n3.media, " {"));
                        var i = void 0 !== n3.layer;
                        i && (r += "@layer".concat(n3.layer.length > 0 ? " ".concat(n3.layer) : "", " {")), r += n3.css, i && (r += "}"), n3.media && (r += "}"), n3.supports && (r += "}");
                        var o = n3.sourceMap;
                        o && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), e3.styleTagTransform(r, t4, e3.options);
                      }(e2, t3, n2);
                    },
                    remove: function remove() {
                      !function (t4) {
                        if (null === t4.parentNode) return false;
                        t4.parentNode.removeChild(t4);
                      }(e2);
                    }
                  };
                };
              },
              4589: function _(t2) {
                "use strict";
    
                t2.exports = function (t3, e2) {
                  if (e2.styleSheet) e2.styleSheet.cssText = t3;else {
                    for (; e2.firstChild;) e2.removeChild(e2.firstChild);
                    e2.appendChild(document.createTextNode(t3));
                  }
                };
              }
            };
            var e = {};
            function n(r) {
              var i = e[r];
              if (void 0 !== i) return i.exports;
              var o = e[r] = {
                id: r,
                exports: {}
              };
              return t[r](o, o.exports, n), o.exports;
            }
            n.n = function (t2) {
              var e2 = t2 && t2.__esModule ? function () {
                return t2["default"];
              } : function () {
                return t2;
              };
              return n.d(e2, {
                a: e2
              }), e2;
            }, n.d = function (t2, e2) {
              for (var r in e2) n.o(e2, r) && !n.o(t2, r) && Object.defineProperty(t2, r, {
                enumerable: true,
                get: e2[r]
              });
            }, n.g = function () {
              if ("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis))) return globalThis;
              try {
                return this || new Function("return this")();
              } catch (t2) {
                if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window))) return window;
              }
            }(), n.o = function (t2, e2) {
              return Object.prototype.hasOwnProperty.call(t2, e2);
            }, function () {
              "use strict";
    
              n(6699), n(2023), n(2222), n(9600), n(4916), n(5306), n(1539), n(8674), n(9070), n(7941), n(2526), n(7327), n(5003), n(4747), n(9337), n(3321), n(5666), n(6992), n(8783), n(3948), n(285), n(1637), n(9720), n(1817), n(2165), n(7042), n(8309), n(1038);
              function t2(t3, e3) {
                var _iterator2 = _createForOfIteratorHelper(e3),
                  _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var r2 = _step2.value;
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
              var e2 = function () {
                function e3() {
                  var t3, n3, r3;
                  !function (t4, e4) {
                    if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
                  }(this, e3), r3 = "4.0.11", (n3 = "version") in (t3 = this) ? Object.defineProperty(t3, n3, {
                    value: r3,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : t3[n3] = r3;
                }
                var n2, r2, i2;
                return n2 = e3, (r2 = [{
                  key: "isArticle",
                  get: function get() {
                    return window.mw.config.get("wgIsArticle");
                  }
                }, {
                  key: "currentPageName",
                  get: function get() {
                    return window.mw.config.get("wgPageName").replace(/ /g, "_");
                  }
                }, {
                  key: "articleId",
                  get: function get() {
                    return window.mw.config.get("wgArticleId");
                  }
                }, {
                  key: "revisionId",
                  get: function get() {
                    return window.mw.config.get("wgRevisionId");
                  }
                }, {
                  key: "latestRevisionId",
                  get: function get() {
                    return window.mw.config.get("wgCurRevisionId");
                  }
                }, {
                  key: "articlePath",
                  get: function get() {
                    return window.mw.config.get("wgArticlePath");
                  }
                }, {
                  key: "scriptPath",
                  get: function get() {
                    return window.mw.config.get("wgScriptPath");
                  }
                }, {
                  key: "action",
                  get: function get() {
                    return window.mw.config.get("wgAction");
                  }
                }, {
                  key: "skin",
                  get: function get() {
                    return window.mw.config.get("skin");
                  }
                }, {
                  key: "userGroups",
                  get: function get() {
                    return window.mw.config.get("wgUserGroups");
                  }
                }, {
                  key: "wikiId",
                  get: function get() {
                    return window.mw.config.get("wgWikiID");
                  }
                }]) && t2(n2.prototype, r2), i2 && t2(n2, i2), Object.defineProperty(n2, "prototype", {
                  writable: false
                }), e3;
              }();
              var r = new e2();
              function i(t3, e3) {
                return function (t4) {
                  if (Array.isArray(t4)) return t4;
                }(t3) || function (t4, e4) {
                  var n2 = null == t4 ? null : "undefined" != typeof Symbol && t4[Symbol.iterator] || t4["@@iterator"];
                  if (null == n2) return;
                  var r2;
                  var i2;
                  var o2 = [];
                  var a2 = true;
                  var c2 = false;
                  try {
                    for (n2 = n2.call(t4); !(a2 = (r2 = n2.next()).done) && (o2.push(r2.value), !e4 || o2.length !== e4); a2 = true);
                  } catch (t5) {
                    c2 = true, i2 = t5;
                  } finally {
                    try {
                      a2 || null == n2["return"] || n2["return"]();
                    } finally {
                      if (c2) throw i2;
                    }
                  }
                  return o2;
                }(t3, e3) || function (t4, e4) {
                  if (!t4) return;
                  if ("string" == typeof t4) return o(t4, e4);
                  var n2 = Object.prototype.toString.call(t4).slice(8, -1);
                  "Object" === n2 && t4.constructor && (n2 = t4.constructor.name);
                  if ("Map" === n2 || "Set" === n2) return Array.from(t4);
                  if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return o(t4, e4);
                }(t3, e3) || function () {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
              }
              function o(t3, e3) {
                (null == e3 || e3 > t3.length) && (e3 = t3.length);
                for (var n2 = 0, r2 = new Array(e3); n2 < e3; n2++) r2[n2] = t3[n2];
                return r2;
              }
              function a(t3, e3, n2, r2, i2, o2, a2) {
                try {
                  var c2 = t3[o2](a2);
                  var u2 = c2.value;
                } catch (t4) {
                  return void n2(t4);
                }
                c2.done ? e3(u2) : Promise.resolve(u2).then(r2, i2);
              }
              function c(t3) {
                return function () {
                  var e3 = this;
                  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                    args[_key6] = arguments[_key6];
                  }
                  var n2 = args;
                  return new Promise(function (r2, i2) {
                    var o2 = t3.apply(e3, n2);
                    function c2(t4) {
                      a(o2, r2, i2, c2, u2, "next", t4);
                    }
                    function u2(t4) {
                      a(o2, r2, i2, c2, u2, "throw", t4);
                    }
                    c2(void 0);
                  });
                };
              }
              function u(t3, e3) {
                var _iterator3 = _createForOfIteratorHelper(e3),
                  _step3;
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var r2 = _step3.value;
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
              var s;
              var l;
              var f;
              var p = function () {
                function t3() {
                  !function (t4, e4) {
                    if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
                  }(this, t3);
                }
                var e3, n2, o2, a2, s2;
                return e3 = t3, n2 = null, o2 = [{
                  key: "get",
                  value: (s2 = c(_regeneratorRuntime().mark(function e4(n3) {
                    var i2, o3;
                    return _regeneratorRuntime().wrap(function (e5) {
                      for (;;) switch (e5.prev = e5.next) {
                        case 0:
                          return i2 = new URL(t3.base), Object.keys(n3).forEach(function (t4) {
                            i2.searchParams.append(t4, n3[t4]);
                          }), e5.next = 4, fetch(i2, {
                            credentials: "same-origin",
                            headers: {
                              "Api-User-Agent": "Wikiplus/".concat(r.version, " (").concat(r.wikiId, ")")
                            }
                          });
                        case 4:
                          return o3 = e5.sent, e5.next = 7, o3.json();
                        case 7:
                          return e5.abrupt("return", e5.sent);
                        case 8:
                        case "end":
                          return e5.stop();
                      }
                    }, e4);
                  })), function (t4) {
                    return s2.apply(this, arguments);
                  })
                }, {
                  key: "post",
                  value: (a2 = c(_regeneratorRuntime().mark(function e4(n3) {
                    var o3, a3, c2;
                    return _regeneratorRuntime().wrap(function (e5) {
                      for (;;) switch (e5.prev = e5.next) {
                        case 0:
                          return o3 = new URL(t3.base), a3 = new FormData(), Object.entries(n3).forEach(function (t4) {
                            var e6 = i(t4, 2),
                              n4 = e6[0],
                              r2 = e6[1];
                            a3.append(n4, r2);
                          }), e5.next = 5, fetch(o3, {
                            method: "POST",
                            body: a3,
                            credentials: "same-origin",
                            headers: {
                              "Api-User-Agent": "Wikiplus/".concat(r.version, " (").concat(r.wikiId, ")")
                            }
                          });
                        case 5:
                          return c2 = e5.sent, e5.next = 8, c2.json();
                        case 8:
                          return e5.abrupt("return", e5.sent);
                        case 9:
                        case "end":
                          return e5.stop();
                      }
                    }, e4);
                  })), function (t4) {
                    return a2.apply(this, arguments);
                  })
                }], n2 && u(e3.prototype, n2), o2 && u(e3, o2), Object.defineProperty(e3, "prototype", {
                  writable: false
                }), t3;
              }();
              s = p, l = "base", f = "".concat(location.protocol, "//").concat(location.host).concat(r.scriptPath, "/api.php"), l in s ? Object.defineProperty(s, l, {
                value: f,
                enumerable: true,
                configurable: true,
                writable: true
              }) : s[l] = f;
              var d = p;
              var h = (n(8304), n(489), n(4603), n(9714), n(2772), n(2419), n(1532), JSON.parse('{"__language":"zh-cn","__author":["Eridanus Sora"],"__version":"212","unknown_error_name":"未知的错误名","api_unaccessiable":"无可用的API","api_unwriteable":"无可用的写入API","fail_to_get_timestamp":"无法获得页面编辑起始时间戳","fail_to_get_edittoken":"无法获得页面编辑权标","fail_to_get_pageinfo":"无法获得页面信息","not_autoconfirmed_user":"非自动确认用户","hit_abusefilter":"被防滥用过滤器拦截","unknown_edit_error":"未知编辑错误","unknown_edit_error_message":"未知编辑错误($1)","notitle":"无法编辑空标题页面","notext":"缺少页面内容","notoken":"空编辑权标","invalidsection":"段落编号非法","protectedtitle":"该标题被保护，无法创建","cantcreate":"无新建页面权限","cantcreate_anon":"匿名用户无新建页面权限","articleexists":"无法创建已经存在的页面","noimageredirect_anon":"匿名用户无新建文件重定向权限","noimageredirect":"无新建文件重定向权限","spamdetected":"文本含有敏感内容，被SPAM过滤器拦截","filtered":"编辑被过滤器拦截","contenttoobig":"文本超过最大长度限制","noedit_anon":"匿名用户无编辑页面权限","noedit":"无编辑页面权限","pagedeleted":"编辑时，此页面被删除","emptypage":"无法新建空内容页面","emptynewsection":"无法新建空内容段落","editconflict":"编辑冲突，请手工检查页面当前内容与提交内容差异并修正后，刷新页面提交","revwrongpage":"编辑的修订版本与编辑的页面不匹配","undofailure":"由于存在冲突的中间版本，无法撤销编辑","missingtitle":"无法创建或编辑空标题页面","mustbeposted":"必须使用POST方式提交编辑","readapidenied":"无读取API使用权限","writeapidenied":"无通过API编辑页面权限","noapiwrite":"本Wiki未开启可用的写入API","badtoken":"非法的编辑权标","missingparam":"缺少必要参数，页面名和页面ID不能均为空","invalidparammix":"参数重复，页面名和页面ID不能同时给定","invalidtitle":"非法的标题","nosuchpageid":"不存在的页面ID","pagecannotexist":"该名称空间不允许新建一般页面","nosuchrevid":"不存在的修订版本","badmd5":"非法的MD5值","hookaborted":"编辑被扩展Hook拦截","parseerror":"无法解析页面文本","summaryrequired":"编辑摘要不能为空","blocked":"已被封禁","ratelimited":"达到操作速率上限，请稍后重试","unknownerror":"未知错误","nosuchsection":"无法编辑不存在的段落","sectionsnotsupported":"该页面不支持段落编辑","editnotsupported":"该页面不支持通过API编辑","appendnotsupported":"该页面无法在前后插入文本","redirect_appendonly":"在遵循重定向的情况下，只能进行前后插入或创建新段落","badformat":"文本格式错误","customcssprotected":"无法编辑用户CSS页","customjsprotected":"无法编辑用户JS页","cascadeprotected":"该页面被级联保护","network_edit_error":"由于网络原因编辑失败","redirect_to_summary":"重定向页面至[[$1]] // Wikiplus","redirect_from_summary":"将[[$1]]重定向至[[$2]] // Wikiplus","need_init":"页面类未加载完成","fail_to_get_wikitext":"无法获得页面文本","quickedit_topbtn":"快速编辑","quickedit_sectionbtn":"快速编辑","fail_to_init_quickedit":"无法加载快速编辑","back":"返回","goto_editbox":"到编辑框","summary_placehold":"请输入编辑摘要","submit":"提交","publish_page":"发布页面","publish_change":"发布更改","preview":"预览","cancel":"取消","mark_minoredit":"标记为小编辑","onclose_confirm":"[Wikiplus] 您确认要关闭/刷新页面吗？这会导致您的编辑数据丢失","fail_to_get_wikitext_when_edit":"无法获得页面文本以编辑","cant_parse_wikitext":"无法解析维基文本","loading_preview":"正在读取预览","submitting_edit":"正在提交编辑","edit_success":"编辑成功 用时$1ms","empty_page_confirm":"您向编辑函数传入了空内容参数 这将清空页面\\r\\n由于该行为危险 请将config参数的empty键值设定为true来确认","cross_page_edit":"编辑目标位于其他页面 正在获取基础信息","cross_page_edit_submit":"基础信息获取成功 正在提交编辑","cross_page_edit_error":"无法获得基础信息>.<","install_tip":"您是否允许Wikiplus采集非敏感数据用于改进Wikiplus及为当前Wiki：$1提供改进建议？","accept":"接受","decline":"拒绝","install_finish":"Wikiplus安装完毕","loading":"正在载入","cant_add_funcbtn":"无法增加功能按钮","wikiplus_settings":"Wikiplus设置","wikiplus_settings_desc":"请在下方按规范修改Wikiplus设置","wikiplus_settings_placeholder":"当前设置为空 请在此处按规范修改Wikiplus设置","wikiplus_settings_grammar_error":"设置存在语法错误 请检查后重试","wikiplus_settings_saved":"设置已保存","redirect_from":"将页面重定向至此","redirect_desc":"请输入要重定向至此的页面名","empty_input":"输入不能为空","redirect_saved":"重定向完成","uninited":"Wikiplus未加载完毕 请刷新重试","cant_parse_i18ncache":"无法解析多语言定义文件缓存","cant_load_language":"无法获取多语言定义文件","history_edit_warning":" // 正试图编辑历史版本 这将会应用到本页面的最新版本 请慎重提交","create_page_tip":"<!-- 正在创建新页面 请删去此行注释后继续 -->","continue":"仍然继续","default_summary_suffix":"// Edit via Wikiplus"}'));
              var v = JSON.parse("{\"__language\":\"en-us\",\"__author\":[\"Eridanus Sora\",\"AnnAngela\",\"YinYan\"],\"__version\":\"212\",\"unknown_error_name\":\"Unknown error\",\"api_unaccessiable\":\"API of this wiki is not available\",\"api_unwriteable\":\"Write API of this wiki is not available\",\"fail_to_get_timestamp\":\"Failed to get the timestamp of this page.\",\"fail_to_get_edittoken\":\"Failed to get the EditToken of this page.\",\"fail_to_get_pageinfo\":\"Failed to load infomation of this page\",\"not_autoconfirmed_user\":\"You are not an autoconfiremd user\",\"hit_abusefilter\":\"Your edit hit the abusefilter(s)\",\"unknown_edit_error\":\"Unknown edit error\",\"unknown_edit_error_message\":\"Unknown edit error($1)\",\"notitle\":\"The title parameter must be set\",\"notext\":\"The text parameter must be set\",\"notoken\":\"The token parameter must be set\",\"invalidsection\":\"The section parameter must be set to an integer or 'new'\",\"protectedtitle\":\"This title has been protected from creation\",\"cantcreate\":\"You don't have permission to create new pages\",\"cantcreate_anon\":\"Anonymous users can't create new pages\",\"articleexists\":\"The article you tried to create has already existed\",\"noimageredirect_anon\":\"Anonymous users can't create image redirects\",\"noimageredirect\":\"You don't have the permission to create image redirects\",\"spamdetected\":\"Your edit was rejected because it contained a spam fragment\",\"filtered\":\"The filter callback function rejected your edit\",\"contenttoobig\":\"The content you submitted exceeds the article size limit\",\"noedit_anon\":\"Anonymous users can't edit pages\",\"noedit\":\"You don't have the permission to edit pages\",\"pagedeleted\":\"The page was deleted during your edit\",\"emptypage\":\"Creating new, empty pages is not allowed\",\"emptynewsection\":\"Creating empty new sections is not possible.\",\"editconflict\":\"Edit Conflict! Don't panic. Please check the difference between your content below and the existing revision, then refresh the page to make another submit\",\"revwrongpage\":\"The revision you are editing now is not one a valid reversions of this page\",\"undofailure\":\"Undo failed due to conflicts.\",\"missingtitle\":\"Missing title in your edit/creation\",\"mustbeposted\":\"The edit must be submited by POST method\",\"readapidenied\":\"Read API Denied\",\"writeapidenied\":\"Write API Denied\",\"noapiwrite\":\"No available write API in this wiki\",\"badtoken\":\"Invalid EditToken\",\"missingparam\":\"One of the parameters title, pageid is required\",\"invalidparammix\":\"The parameters title, pageid can not be used together\",\"invalidtitle\":\"Invalid page title\",\"nosuchpageid\":\"Inexistent page ID\",\"pagecannotexist\":\"No access to create a new page in this namespace\",\"nosuchrevid\":\"Inexisting reversion ID\",\"badmd5\":\"Invalid MD5\",\"hookaborted\":\"Your edit was rejected by the hook(s)\",\"parseerror\":\"Failed to parse the wikitext of this page\",\"summaryrequired\":\"No summary in your edit\",\"blocked\":\"You have been already BLOCKED\",\"ratelimited\":\"You've exceeded your rate limit. Please have a tea and try again later\",\"unknownerror\":\"Unknown error\",\"nosuchsection\":\"There is no such section\",\"sectionsnotsupported\":\"Can't edit in this section\",\"editnotsupported\":\"Can't edit in this section by writing section\",\"appendnotsupported\":\"Can't append/prepend wikitext to this page\",\"redirect_appendonly\":\"Only append/prepend can be made to this page because of the rules of the redirect page\",\"badformat\":\"The requested serialization format can not be applied to the page's content model\",\"customcssprotected\":\"You're not allowed to edit custom CSS pages\",\"customjsprotected\":\"You're not allowed to edit custom JavaScript pages\",\"cascadeprotected\":\"This page is under a cascading protection\",\"network_edit_error\":\"Failed to edit this page because of network errors\",\"redirect_to_summary\":\"Redirect to [[$1]] // Wikiplus\",\"redirect_from_summary\":\"Redirect [[$1]] to [[$2]] // Wikiplus\",\"need_init\":\"Wikiplus haven't been loaded completely. It's a rare occasion so you can try to refresh and try again.\",\"fail_to_get_wikitext\":\"Failed to load the wikitext of this page\",\"quickedit_topbtn\":\"QuickEdit\",\"quickedit_sectionbtn\":\"QuickEdit\",\"fail_to_init_quickedit\":\"Failed to initialize Wikiplus\",\"back\":\"Back\",\"goto_editbox\":\"Jump to editbox\",\"summary_placehold\":\"Edit summary\",\"submit\":\"Submit\",\"publish_page\":\"Publish Page\",\"publish_change\":\"Publish Changes\",\"preview\":\"Preview\",\"cancel\":\"Cancel\",\"mark_minoredit\":\"Mark this edit as a minor edit\",\"onclose_confirm\":\"[Wikiplus] Do you really want to close this page when you are still editing it, as you will lose all your unsaved work?\",\"fail_to_get_wikitext_when_edit\":\"Failed to load wikitext for your edit\",\"cant_parse_wikitext\":\"Failed to parse the wikitext\",\"loading_preview\":\"Loading the preview\",\"submitting_edit\":\"Submitting your edit\",\"edit_success\":\"Your edit is submitted within $1ms\",\"empty_page_confirm\":\"The wikitext in your edit is empty, which will empty this page.\\r\\nPlease set the value of key \\\"empty\\\" true to allow this kind of edits. (This is a tip for developers)\",\"cross_page_edit\":\"The content you are editing belongs to another page, please wait...\",\"cross_page_edit_submit\":\"Submitting your edit...\",\"cross_page_edit_error\":\"Failed to load the infomation\",\"install_tip\":\"Do you allow Wikiplus to collect insensitive data to help us develop Wikiplus and provide feedback to current site: $1 ?\",\"accept\":\"Yes\",\"decline\":\"No\",\"install_finish\":\"Wikiplus is installed, enjoy it\",\"loading\":\"Loading\",\"cant_add_funcbtn\":\"Failed to add buttons for Wikiplus\",\"wikiplus_settings\":\"Wikiplus Setting\",\"wikiplus_settings_desc\":\"Please modify your setting according to the standards below\",\"wikiplus_settings_placeholder\":\"Your setting is empty, please modify your setting according to the documentation.\",\"wikiplus_settings_grammar_error\":\"Syntax error in your setting\",\"wikiplus_settings_saved\":\"Your settings have been saved\",\"redirect_from\":\"Redirect from\",\"redirect_desc\":\"Which page do you want to redirect here?\",\"empty_input\":\"Empty input\",\"redirect_saved\":\"Redirection is finished\",\"uninited\":\"Wikiplus is not completely initialized, please refeash this page\",\"cant_parse_i18ncache\":\"Failed to parse the cache of i18n file\",\"cant_load_language\":\"Failed to load i18n file\",\"history_edit_warning\":\" // You are trying to edit a history revision of this page. This will apply to the latest revision. Please be careful.\",\"create_page_tip\":\"<!-- You are now creating a new page. Please delete this line and be careful. -->\",\"continue\":\"Continue anyway\",\"default_summary_suffix\":\"// Edit via Wikiplus\"}");
              function g(t3, e3, n2, r2, i2, o2, a2) {
                try {
                  var c2 = t3[o2](a2);
                  var u2 = c2.value;
                } catch (t4) {
                  return void n2(t4);
                }
                c2.done ? e3(u2) : Promise.resolve(u2).then(r2, i2);
              }
              function m(t3, e3) {
                var _iterator4 = _createForOfIteratorHelper(e3),
                  _step4;
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var r2 = _step4.value;
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }
              function y(t3, e3, n2) {
                return e3 in t3 ? Object.defineProperty(t3, e3, {
                  value: n2,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : t3[e3] = n2, t3;
              }
              var k = function () {
                function t3() {
                  var e4;
                  !function (t4, e5) {
                    if (!(t4 instanceof e5)) throw new TypeError("Cannot call a class as a function");
                  }(this, t3), y(this, "language", void 0), y(this, "i18nData", {}), y(this, "sessionUpdateLog", []);
                  try {
                    e4 = JSON.parse(localStorage.Wikiplus_Settings).language || window.navigator.language.toLowerCase();
                  } catch (t4) {
                    e4 = window.navigator.language.toLowerCase();
                  }
                  this.language = e4, this.i18nData["zh-cn"] = h, this.i18nData["en-us"] = v;
                  try {
                    for (var n3 = JSON.parse(localStorage.getItem("Wikiplus_i18nCache")), r3 = 0, i3 = Object.keys(n3); r3 < i3.length; r3++) {
                      var o3 = i3[r3];
                      "zh-cn" !== o3 && "en-us" !== o3 && (this.i18nData[o3] = n3[o3]);
                    }
                  } catch (t4) {
                    localStorage.setItem("Wikiplus_i18nCache", "{}");
                  }
                }
                var e3, n2, r2, i2, o2;
                return e3 = t3, n2 = [{
                  key: "translate",
                  value: function value(t4) {
                    var e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    var n3 = "";
                    return this.language in this.i18nData ? t4 in this.i18nData[this.language] ? n3 = this.i18nData[this.language][t4] : (this.loadLanguage(this.language), n3 = t4 in this.i18nData["en-us"] ? this.i18nData["en-us"][t4] : t4) : this.loadLanguage(this.language), e4.length > 0 && e4.forEach(function (t5, e5) {
                      n3 = n3.replace("$".concat(e5 + 1), t5);
                    }), n3;
                  }
                }, {
                  key: "loadLanguage",
                  value: (i2 = _regeneratorRuntime().mark(function t4(e4) {
                    var n3, r3;
                    return _regeneratorRuntime().wrap(function (t5) {
                      for (;;) switch (t5.prev = t5.next) {
                        case 0:
                          if (!(this.sessionUpdateLog.indexOf(e4) !== -1)) {
                            t5.next = 2;
                            break;
                          }
                          return t5.abrupt("return");
                        case 2:
                          return t5.prev = 2, t5.next = 5, fetch("https://wikiplus-app.com/languages/get.php?lang=".concat(e4));
                        case 5:
                          return t5.next = 7, t5.sent.json();
                        case 7:
                          n3 = t5.sent, r3 = localStorage.getItem("Wikiplus_LanguageVersion") || "000", this.sessionUpdateLog.push(e4), n3.__version === r3 && e4 in this.i18nData || (console.info("Update ".concat(e4, " support to version ").concat(n3.__version)), this.i18nData[e4] = n3, localStorage.setItem("Wikiplus_i18nCache", JSON.stringify(this.i18nData))), t5.next = 15;
                          break;
                        case 13:
                          t5.prev = 13, t5.t0 = t5["catch"](2);
                        case 15:
                        case "end":
                          return t5.stop();
                      }
                    }, t4, this, [[2, 13]]);
                  }), o2 = function o2() {
                    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                      args[_key7] = arguments[_key7];
                    }
                    var t4 = this,
                      e4 = args;
                    return new Promise(function (n3, r3) {
                      var o3 = i2.apply(t4, e4);
                      function a2(t5) {
                        g(o3, n3, r3, a2, c2, "next", t5);
                      }
                      function c2(t5) {
                        g(o3, n3, r3, a2, c2, "throw", t5);
                      }
                      a2(void 0);
                    });
                  }, function (t4) {
                    return o2.apply(this, arguments);
                  })
                }], n2 && m(e3.prototype, n2), r2 && m(e3, r2), Object.defineProperty(e3, "prototype", {
                  writable: false
                }), t3;
              }();
              var b = new k();
              function A(t3) {
                return A = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t4) {
                  return _typeof(t4);
                } : function (t4) {
                  return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : _typeof(t4);
                }, A(t3);
              }
              function w(t3, e3) {
                var _iterator5 = _createForOfIteratorHelper(e3),
                  _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var r2 = _step5.value;
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              }
              function x(t3, e3, n2) {
                return e3 && w(t3.prototype, e3), n2 && w(t3, n2), Object.defineProperty(t3, "prototype", {
                  writable: false
                }), t3;
              }
              function I(t3, e3) {
                if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
              }
              function C(t3, e3) {
                if (e3 && ("object" === A(e3) || "function" == typeof e3)) return e3;
                if (void 0 !== e3) throw new TypeError("Derived constructors may only return object or undefined");
                return function (t4) {
                  if (void 0 === t4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return t4;
                }(t3);
              }
              function B(t3) {
                var e3 = "function" == typeof Map ? /* @__PURE__ */new Map() : void 0;
                return B = function B(t4) {
                  if (null === t4 || (n2 = t4, !(Function.toString.call(n2).indexOf("[native code]") !== -1))) return t4;
                  var n2;
                  if ("function" != typeof t4) throw new TypeError("Super expression must either be null or a function");
                  if (void 0 !== e3) {
                    if (e3.has(t4)) return e3.get(t4);
                    e3.set(t4, r2);
                  }
                  function r2() {
                    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
                      args[_key8] = arguments[_key8];
                    }
                    return _(t4, args, P(this).constructor);
                  }
                  return r2.prototype = Object.create(t4.prototype, {
                    constructor: {
                      value: r2,
                      enumerable: false,
                      writable: true,
                      configurable: true
                    }
                  }), O(r2, t4);
                }, B(t3);
              }
              function _(t3, e3, n2) {
                return _ = S() ? Reflect.construct : function (t4, e4, n3) {
                  var r2 = [null];
                  r2.push.apply(r2, _toConsumableArray(e4));
                  var i2 = new (Function.bind.apply(t4, r2))();
                  return n3 && O(i2, n3.prototype), i2;
                }, _.apply(void 0, arguments);
              }
              function S() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return false;
                if (Reflect.construct.sham) return false;
                if ("function" == typeof Proxy) return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), true;
                } catch (t3) {
                  return false;
                }
              }
              function O(t3, e3) {
                return O = Object.setPrototypeOf || function (t4, e4) {
                  return t4.__proto__ = e4, t4;
                }, O(t3, e3);
              }
              function P(t3) {
                return P = Object.setPrototypeOf ? Object.getPrototypeOf : function (t4) {
                  return t4.__proto__ || Object.getPrototypeOf(t4);
                }, P(t3);
              }
              var W = function (t3) {
                !function (t4, e4) {
                  if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function");
                  t4.prototype = Object.create(e4 && e4.prototype, {
                    constructor: {
                      value: t4,
                      writable: true,
                      configurable: true
                    }
                  }), Object.defineProperty(t4, "prototype", {
                    writable: false
                  }), e4 && O(t4, e4);
                }(i2, t3);
                var e3;
                var n2;
                var r2 = (e3 = i2, n2 = S(), function () {
                  var t4;
                  var r3 = P(e3);
                  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
                    args[_key9] = arguments[_key9];
                  }
                  if (n2) {
                    var i3 = P(this).constructor;
                    t4 = Reflect.construct(r3, args, i3);
                  } else t4 = r3.apply(this, args);
                  return C(this, t4);
                });
                function i2(t4, e4) {
                  var n3;
                  return I(this, i2), (n3 = r2.call(this, t4)).code = e4, n3;
                }
                return x(i2);
              }(B(Error));
              var E = function () {
                function t3() {
                  I(this, t3);
                }
                return x(t3, null, [{
                  key: "debug",
                  value: function value() {
                    var t4 = arguments.length > 0 && void 0 !== (arguments.length <= 0 ? undefined : arguments[0]) ? arguments.length <= 0 ? undefined : arguments[0] : "";
                    console.debug("[Wikiplus-DEBUG] ".concat(t4));
                  }
                }, {
                  key: "info",
                  value: function value() {
                    var t4 = arguments.length > 0 && void 0 !== (arguments.length <= 0 ? undefined : arguments[0]) ? arguments.length <= 0 ? undefined : arguments[0] : "";
                    console.info("[Wikiplus-INFO] ".concat(t4));
                  }
                }, {
                  key: "error",
                  value: function value(t4) {
                    var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    var n2 = b.translate(t4);
                    throw e3.length > 0 && e3.forEach(function (t5, e4) {
                      n2 = n2.replace(new RegExp("\\".concat(e4 + 1), "ig"), t5);
                    }), console.error("[Wikiplus-ERROR] ".concat(n2)), new W("".concat(n2), t4);
                  }
                }]), t3;
              }();
              var j = E;
              function R(t3, e3) {
                var n2 = Object.keys(t3);
                if (Object.getOwnPropertySymbols) {
                  var r2 = Object.getOwnPropertySymbols(t3);
                  e3 && (r2 = r2.filter(function (e4) {
                    return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
                  })), n2.push.apply(n2, _toConsumableArray(r2));
                }
                return n2;
              }
              function T(t3) {
                var _arguments = arguments;
                var _loop = function _loop() {
                  var n2 = null != _arguments[e3] ? _arguments[e3] : {};
                  e3 % 2 ? R(Object(n2), true).forEach(function (e4) {
                    U(t3, e4, n2[e4]);
                  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(n2)) : R(Object(n2)).forEach(function (e4) {
                    Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(n2, e4));
                  });
                };
                for (var e3 = 1; e3 < arguments.length; e3++) {
                  _loop();
                }
                return t3;
              }
              function L(t3, e3, n2, r2, i2, o2, a2) {
                try {
                  var c2 = t3[o2](a2);
                  var u2 = c2.value;
                } catch (t4) {
                  return void n2(t4);
                }
                c2.done ? e3(u2) : Promise.resolve(u2).then(r2, i2);
              }
              function N(t3) {
                return function () {
                  var e3 = this;
                  for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
                    args[_key10] = arguments[_key10];
                  }
                  var n2 = args;
                  return new Promise(function (r2, i2) {
                    var o2 = t3.apply(e3, n2);
                    function a2(t4) {
                      L(o2, r2, i2, a2, c2, "next", t4);
                    }
                    function c2(t4) {
                      L(o2, r2, i2, a2, c2, "throw", t4);
                    }
                    a2(void 0);
                  });
                };
              }
              function M(t3, e3) {
                var _iterator6 = _createForOfIteratorHelper(e3),
                  _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var r2 = _step6.value;
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
              }
              function U(t3, e3, n2) {
                return e3 in t3 ? Object.defineProperty(t3, e3, {
                  value: n2,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : t3[e3] = n2, t3;
              }
              var Q = function () {
                function t3() {
                  !function (t4, e4) {
                    if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
                  }(this, t3), U(this, "pageInfoCache", {});
                }
                var e3, n2, i2, o2, a2, c2, u2, s2, l2;
                return e3 = t3, n2 = [{
                  key: "getEditToken",
                  value: (l2 = N(_regeneratorRuntime().mark(function t4() {
                    var e4;
                    return _regeneratorRuntime().wrap(function (t5) {
                      for (;;) switch (t5.prev = t5.next) {
                        case 0:
                          return t5.next = 2, d.get({
                            action: "query",
                            meta: "tokens",
                            format: "json"
                          });
                        case 2:
                          if (!((e4 = t5.sent).query && e4.query.tokens && e4.query.tokens.csrftoken && "+\\" !== e4.query.tokens.csrftoken)) {
                            t5.next = 7;
                            break;
                          }
                          return t5.abrupt("return", e4.query.tokens.csrftoken);
                        case 7:
                          return t5.abrupt("return", j.error("fail_to_get_edittoken"));
                        case 8:
                        case "end":
                          return t5.stop();
                      }
                    }, t4);
                  })), function () {
                    for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
                      args[_key11] = arguments[_key11];
                    }
                    return l2.apply(this, args);
                  })
                }, {
                  key: "getPageInfo",
                  value: (s2 = N(_regeneratorRuntime().mark(function t4(e4) {
                    var n3, r2, i3, o3, a3;
                    return _regeneratorRuntime().wrap(function (t5) {
                      for (;;) switch (t5.prev = t5.next) {
                        case 0:
                          if (n3 = e4.title, r2 = e4.revisionId, t5.prev = 1, i3 = {
                            action: "query",
                            prop: "revisions|info",
                            rvprop: "timestamp|ids",
                            format: "json"
                          }, !r2) {
                            t5.next = 7;
                            break;
                          }
                          i3.revids = r2, t5.next = 11;
                          break;
                        case 7:
                          if (!n3) {
                            t5.next = 11;
                            break;
                          }
                          if (!this.pageInfoCache[n3]) {
                            t5.next = 10;
                            break;
                          }
                          return t5.abrupt("return", {
                            timestamp: this.pageInfoCache[n3].timestamp,
                            revisionId: this.pageInfoCache[n3].revid
                          });
                        case 10:
                          i3.titles = n3;
                        case 11:
                          return t5.next = 13, d.get(i3);
                        case 13:
                          if (!(o3 = t5.sent).query || !o3.query.pages) {
                            t5.next = 20;
                            break;
                          }
                          if ("-1" !== Object.keys(o3.query.pages)[0]) {
                            t5.next = 17;
                            break;
                          }
                          return t5.abrupt("return", {});
                        case 17:
                          return a3 = o3.query.pages[Object.keys(o3.query.pages)[0]].revisions[0], n3 && (this.pageInfoCache[n3] = a3), t5.abrupt("return", {
                            timestamp: a3.timestamp,
                            revisionId: a3.revid
                          });
                        case 20:
                          t5.next = 25;
                          break;
                        case 22:
                          t5.prev = 22, t5.t0 = t5["catch"](1), j.error("fail_to_get_edittoken");
                        case 25:
                        case "end":
                          return t5.stop();
                      }
                    }, t4, this, [[1, 22]]);
                  })), function (t4) {
                    return s2.apply(this, arguments);
                  })
                }, {
                  key: "getWikiText",
                  value: (u2 = N(_regeneratorRuntime().mark(function t4(e4) {
                    var n3, i3, o3;
                    return _regeneratorRuntime().wrap(function (t5) {
                      for (;;) switch (t5.prev = t5.next) {
                        case 0:
                          return n3 = e4.section, i3 = e4.revisionId, t5.prev = 1, t5.next = 4, fetch("".concat(location.protocol, "//").concat(location.host).concat(r.scriptPath, "/index.php?oldid=").concat(i3, "&section=").concat(n3, "&action=raw"));
                        case 4:
                          return t5.next = 6, t5.sent.text();
                        case 6:
                          return o3 = t5.sent, t5.abrupt("return", o3);
                        case 10:
                          t5.prev = 10, t5.t0 = t5["catch"](1), j.error("fail_to_get_wikitext");
                        case 13:
                        case "end":
                          return t5.stop();
                      }
                    }, t4, null, [[1, 10]]);
                  })), function (t4) {
                    return u2.apply(this, arguments);
                  })
                }, {
                  key: "parseWikiText",
                  value: (c2 = N(_regeneratorRuntime().mark(function t4(e4) {
                    var n3;
                    var r2;
                    var i3 = arguments;
                    return _regeneratorRuntime().wrap(function (t5) {
                      for (;;) switch (t5.prev = t5.next) {
                        case 0:
                          return n3 = i3.length > 1 && void 0 !== i3[1] ? i3[1] : "", i3.length > 2 && void 0 !== i3[2] && i3[2], t5.prev = 2, t5.next = 5, d.post({
                            format: "json",
                            action: "parse",
                            text: e4,
                            title: n3,
                            pst: "true"
                          });
                        case 5:
                          if (!(r2 = t5.sent).parse || !r2.parse.text) {
                            t5.next = 8;
                            break;
                          }
                          return t5.abrupt("return", r2.parse.text["*"]);
                        case 8:
                          t5.next = 13;
                          break;
                        case 10:
                          t5.prev = 10, t5.t0 = t5["catch"](2), j.error("cant_parse_wikitext");
                        case 13:
                        case "end":
                          return t5.stop();
                      }
                    }, t4, null, [[2, 10]]);
                  })), function (t4) {
                    return c2.apply(this, arguments);
                  })
                }, {
                  key: "edit",
                  value: (a2 = N(_regeneratorRuntime().mark(function t4() {
                    var e4;
                    var n3;
                    var r2;
                    var i3;
                    var o3;
                    var a3;
                    var c3;
                    var u3;
                    var s3;
                    var l3;
                    var f2 = arguments;
                    return _regeneratorRuntime().wrap(function (t5) {
                      for (;;) switch (t5.prev = t5.next) {
                        case 0:
                          return e4 = f2.length > 0 && void 0 !== f2[0] ? f2[0] : {}, n3 = e4.title, r2 = e4.content, i3 = e4.editToken, o3 = e4.timestamp, a3 = e4.config, c3 = void 0 === a3 ? {} : a3, u3 = e4.additionalConfig, s3 = void 0 === u3 ? {} : u3, t5.prev = 1, t5.next = 4, d.post(T(T(T({
                            action: "edit",
                            format: "json",
                            text: r2,
                            title: n3,
                            token: i3
                          }, o3 ? {
                            basetimestamp: o3
                          } : {}), c3), s3));
                        case 4:
                          l3 = t5.sent, t5.next = 10;
                          break;
                        case 7:
                          t5.prev = 7, t5.t0 = t5["catch"](1), j.error("network_edit_error");
                        case 10:
                          if (!l3.edit) {
                            t5.next = 22;
                            break;
                          }
                          if ("Success" !== l3.edit.result) {
                            t5.next = 15;
                            break;
                          }
                          return t5.abrupt("return", true);
                        case 15:
                          if (!l3.edit.code) {
                            t5.next = 19;
                            break;
                          }
                          throw new Error("\n                        ".concat(b.translate("hit_abusefilter"), ":").concat(l3.edit.info.replace("/Hit AbuseFilter: /ig", ""), '\n                        <br>\n                        <div style="font-size: smaller;">').concat(l3.edit.warning, "</div>\n                    "));
                        case 19:
                          j.error("unknown_edit_error");
                        case 20:
                          t5.next = 23;
                          break;
                        case 22:
                          l3.error && l3.error.code ? j.error(l3.error.code) : l3.code ? j.error(l3.code) : j.error("unknown_edit_error");
                        case 23:
                        case "end":
                          return t5.stop();
                      }
                    }, t4, null, [[1, 7]]);
                  })), function () {
                    for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
                      args[_key12] = arguments[_key12];
                    }
                    return a2.apply(this, args);
                  })
                }, {
                  key: "getLatestRevisionIdForPage",
                  value: (o2 = N(_regeneratorRuntime().mark(function t4(e4) {
                    var n3, r2;
                    return _regeneratorRuntime().wrap(function (t5) {
                      for (;;) switch (t5.prev = t5.next) {
                        case 0:
                          return t5.next = 2, this.getPageInfo({
                            title: e4
                          });
                        case 2:
                          return n3 = t5.sent, r2 = n3.revisionId, t5.abrupt("return", r2);
                        case 5:
                        case "end":
                          return t5.stop();
                      }
                    }, t4, this);
                  })), function (t4) {
                    return o2.apply(this, arguments);
                  })
                }], n2 && M(e3.prototype, n2), i2 && M(e3, i2), Object.defineProperty(e3, "prototype", {
                  writable: false
                }), t3;
              }();
              var D = new Q();
              function q(t3, e3) {
                var n2 = Object.keys(t3);
                if (Object.getOwnPropertySymbols) {
                  var r2 = Object.getOwnPropertySymbols(t3);
                  e3 && (r2 = r2.filter(function (e4) {
                    return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
                  })), n2.push.apply(n2, _toConsumableArray(r2));
                }
                return n2;
              }
              function F(t3) {
                var _arguments2 = arguments;
                var _loop2 = function _loop2() {
                  var n2 = null != _arguments2[e3] ? _arguments2[e3] : {};
                  e3 % 2 ? q(Object(n2), true).forEach(function (e4) {
                    H(t3, e4, n2[e4]);
                  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(n2)) : q(Object(n2)).forEach(function (e4) {
                    Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(n2, e4));
                  });
                };
                for (var e3 = 1; e3 < arguments.length; e3++) {
                  _loop2();
                }
                return t3;
              }
              function z(t3, e3, n2, r2, i2, o2, a2) {
                try {
                  var c2 = t3[o2](a2);
                  var u2 = c2.value;
                } catch (t4) {
                  return void n2(t4);
                }
                c2.done ? e3(u2) : Promise.resolve(u2).then(r2, i2);
              }
              function Y(t3) {
                return function () {
                  var e3 = this;
                  for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
                    args[_key13] = arguments[_key13];
                  }
                  var n2 = args;
                  return new Promise(function (r2, i2) {
                    var o2 = t3.apply(e3, n2);
                    function a2(t4) {
                      z(o2, r2, i2, a2, c2, "next", t4);
                    }
                    function c2(t4) {
                      z(o2, r2, i2, a2, c2, "throw", t4);
                    }
                    a2(void 0);
                  });
                };
              }
              function G(t3, e3) {
                var _iterator7 = _createForOfIteratorHelper(e3),
                  _step7;
                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var r2 = _step7.value;
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
              }
              function H(t3, e3, n2) {
                return e3 in t3 ? Object.defineProperty(t3, e3, {
                  value: n2,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : t3[e3] = n2, t3;
              }
              var J = function () {
                function t3(e4) {
                  var n3 = e4.title,
                    r3 = e4.revisionId;
                  !function (t4, e5) {
                    if (!(t4 instanceof e5)) throw new TypeError("Cannot call a class as a function");
                  }(this, t3), H(this, "timestamp", void 0), H(this, "editToken", void 0), H(this, "title", void 0), H(this, "revisionId", void 0), H(this, "inited", false), H(this, "isNewPage", false), H(this, "sectionCache", {}), this.title = n3, this.revisionId = r3, this.isNewPage = !r3;
                }
                var e3, n2, r2, i2, o2, a2, c2, u2, s2;
                return e3 = t3, n2 = [{
                  key: "init",
                  value: (s2 = Y(_regeneratorRuntime().mark(function t4() {
                    var e4;
                    var n3;
                    var r3;
                    var i3;
                    var o3 = arguments;
                    return _regeneratorRuntime().wrap(function (t5) {
                      for (;;) switch (t5.prev = t5.next) {
                        case 0:
                          return e4 = o3.length > 0 && void 0 !== o3[0] ? o3[0] : {}, n3 = e4.editToken, r3 = void 0 === n3 ? "" : n3, i3 = [this.getTimestamp()], r3 || i3.push(this.getEditToken()), t5.next = 5, Promise.all(i3);
                        case 5:
                          this.inited = true, j.info("Page initialization for ".concat(this.title, "#").concat(this.revisionId, " finished."));
                        case 7:
                        case "end":
                          return t5.stop();
                      }
                    }, t4, this);
                  })), function () {
                    for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
                      args[_key14] = arguments[_key14];
                    }
                    return s2.apply(this, args);
                  })
                }, {
                  key: "getEditToken",
                  value: (u2 = Y(_regeneratorRuntime().mark(function t4() {
                    return _regeneratorRuntime().wrap(function (t5) {
                      for (;;) switch (t5.prev = t5.next) {
                        case 0:
                          return t5.next = 2, mw.loader.using("mediawiki.user");
                        case 2:
                          if (!mw.user.tokens.get("csrfToken") || "+\\" === mw.user.tokens.get("csrfToken")) {
                            t5.next = 5;
                            break;
                          }
                          return this.editToken = mw.user.tokens.get("csrfToken"), t5.abrupt("return");
                        case 5:
                          return t5.next = 7, D.getEditToken();
                        case 7:
                          this.editToken = t5.sent;
                        case 8:
                        case "end":
                          return t5.stop();
                      }
                    }, t4, this);
                  })), function () {
                    for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
                      args[_key15] = arguments[_key15];
                    }
                    return u2.apply(this, args);
                  })
                }, {
                  key: "getTimestamp",
                  value: (c2 = Y(_regeneratorRuntime().mark(function t4() {
                    var e4, n3, r3;
                    return _regeneratorRuntime().wrap(function (t5) {
                      for (;;) switch (t5.prev = t5.next) {
                        case 0:
                          return t5.next = 2, D.getPageInfo({
                            revisionId: this.revisionId,
                            title: this.title
                          });
                        case 2:
                          e4 = t5.sent, n3 = e4.timestamp, r3 = e4.revisionId, this.timestamp = n3, r3 && (this.revisionId = r3, this.isNewPage = false);
                        case 7:
                        case "end":
                          return t5.stop();
                      }
                    }, t4, this);
                  })), function () {
                    for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
                      args[_key16] = arguments[_key16];
                    }
                    return c2.apply(this, args);
                  })
                }, {
                  key: "getWikiText",
                  value: (a2 = Y(_regeneratorRuntime().mark(function t4() {
                    var e4;
                    var n3;
                    var r3;
                    var i3;
                    var o3;
                    var a3 = arguments;
                    return _regeneratorRuntime().wrap(function (t5) {
                      for (;;) switch (t5.prev = t5.next) {
                        case 0:
                          if (e4 = a3.length > 0 && void 0 !== a3[0] ? a3[0] : {}, n3 = e4.section, i3 = -1 === (r3 = void 0 === n3 ? "" : n3) ? "" : r3, !this.sectionCache[i3]) {
                            t5.next = 4;
                            break;
                          }
                          return t5.abrupt("return", this.sectionCache[i3]);
                        case 4:
                          return t5.next = 6, D.getWikiText({
                            section: i3,
                            revisionId: this.revisionId
                          });
                        case 6:
                          return o3 = t5.sent, j.info("Wikitext of ".concat(this.title, "#").concat(r3, " fetched.")), this.sectionCache[i3] = o3, t5.abrupt("return", o3);
                        case 10:
                        case "end":
                          return t5.stop();
                      }
                    }, t4, this);
                  })), function () {
                    for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
                      args[_key17] = arguments[_key17];
                    }
                    return a2.apply(this, args);
                  })
                }, {
                  key: "parseWikiText",
                  value: (o2 = Y(_regeneratorRuntime().mark(function t4(e4) {
                    return _regeneratorRuntime().wrap(function (t5) {
                      for (;;) switch (t5.prev = t5.next) {
                        case 0:
                          return t5.abrupt("return", D.parseWikiText(e4, this.title));
                        case 1:
                        case "end":
                          return t5.stop();
                      }
                    }, t4, this);
                  })), function (t4) {
                    return o2.apply(this, arguments);
                  })
                }, {
                  key: "edit",
                  value: (i2 = Y(_regeneratorRuntime().mark(function t4(e4) {
                    return _regeneratorRuntime().wrap(function (t5) {
                      for (;;) switch (t5.prev = t5.next) {
                        case 0:
                          if (this.editToken) {
                            t5.next = 3;
                            break;
                          }
                          return j.error("fail_to_get_edittoken"), t5.abrupt("return");
                        case 3:
                          if (this.timestamp || this.isNewPage) {
                            t5.next = 6;
                            break;
                          }
                          return j.error("fail_to_get_timestamp"), t5.abrupt("return");
                        case 6:
                          return t5.abrupt("return", D.edit(F(F(F({
                            title: this.title,
                            editToken: this.editToken
                          }, this.timestamp ? {
                            timestamp: this.timestamp
                          } : {}), e4), {}, {
                            additionalConfig: F({}, this.isNewPage ? {
                              createonly: this.isNewPage
                            } : {})
                          })));
                        case 7:
                        case "end":
                          return t5.stop();
                      }
                    }, t4, this);
                  })), function (t4) {
                    return i2.apply(this, arguments);
                  })
                }], n2 && G(e3.prototype, n2), r2 && G(e3, r2), Object.defineProperty(e3, "prototype", {
                  writable: false
                }), t3;
              }();
              var X = J;
              n(9826), n(4723), n(3210);
              function Z(t3, e3) {
                var _iterator8 = _createForOfIteratorHelper(e3),
                  _step8;
                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    var r2 = _step8.value;
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }
              }
              var V = function () {
                function t3() {
                  !function (t4, e4) {
                    if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
                  }(this, t3), this.init();
                }
                var e3, n2, r2;
                return e3 = t3, n2 = [{
                  key: "init",
                  value: function value() {
                    $("body").append('<div id="MoeNotification"></div>');
                  }
                }, {
                  key: "display",
                  value: function value() {
                    var t4 = arguments.length > 0 && void 0 !== (arguments.length <= 0 ? undefined : arguments[0]) ? arguments.length <= 0 ? undefined : arguments[0] : "喵~",
                      e4 = arguments.length > 1 && void 0 !== (arguments.length <= 1 ? undefined : arguments[1]) ? arguments.length <= 1 ? undefined : arguments[1] : "success",
                      n3 = arguments.length > 2 && void 0 !== (arguments.length <= 2 ? undefined : arguments[2]) ? arguments.length <= 2 ? undefined : arguments[2] : function () {};
                    $("#MoeNotification").append($("<div>").addClass("MoeNotification-notice").addClass("MoeNotification-notice-" + e4).append("<span>" + t4 + "</span>")), $("#MoeNotification").find(".MoeNotification-notice").last().fadeIn(300), this.bind(), this.clear(), n3($("#MoeNotification").find(".MoeNotification-notice").last());
                  }
                }, {
                  key: "bind",
                  value: function value() {
                    var t4 = this;
                    $(".MoeNotification-notice").on("mouseover", function () {
                      t4.slideLeft($(this));
                    });
                  }
                }, {
                  key: "success",
                  value: function value(t4, e4) {
                    this.display(t4, "success", e4);
                  }
                }, {
                  key: "warning",
                  value: function value(t4, e4) {
                    this.display(t4, "warning", e4);
                  }
                }, {
                  key: "error",
                  value: function value(t4, e4) {
                    this.display(t4, "error", e4);
                  }
                }, {
                  key: "clear",
                  value: function value() {
                    $(".MoeNotification-notice").length >= 10 && ($("#MoeNotification").children().first().fadeOut(150, function () {
                      $(this).remove();
                    }), setTimeout(this.clear, 300));
                  }
                }, {
                  key: "empty",
                  value: function value(t4) {
                    $(".MoeNotification-notice").each(function (e4) {
                      if ("function" == typeof t4) {
                        var n3 = $(this);
                        setTimeout(function () {
                          t4(n3);
                        }, 200 * e4);
                      } else $(this).delay(200 * e4).fadeOut("fast", function () {
                        $(this).remove();
                      });
                    });
                  }
                }, {
                  key: "slideLeft",
                  value: function value(t4, e4) {
                    t4.css("position", "relative"), t4.animate({
                      left: "-200%"
                    }, e4 || 150, function () {
                      $(this).fadeOut("fast", function () {
                        $(this).remove();
                      });
                    });
                  }
                }], n2 && Z(e3.prototype, n2), r2 && Z(e3, r2), Object.defineProperty(e3, "prototype", {
                  writable: false
                }), t3;
              }();
              var K = new V();
              var tt = function tt(t3) {
                return new Promise(function (e3) {
                  return setTimeout(e3, t3);
                });
              };
              function et(t3) {
                for (var e3, n2 = /(([^?&=]+)(?:=([^?&=]*))*)/g, r2 = {}; e3 = n2.exec(t3);) try {
                  r2[e3[2]] = decodeURIComponent(e3[3]);
                } catch (t4) {
                  r2[e3[2]] = e3[3];
                }
                return r2;
              }
              function nt(t3, e3, n2, r2, i2, o2, a2) {
                try {
                  var c2 = t3[o2](a2);
                  var u2 = c2.value;
                } catch (t4) {
                  return void n2(t4);
                }
                c2.done ? e3(u2) : Promise.resolve(u2).then(r2, i2);
              }
              function rt(t3) {
                return function () {
                  var e3 = this;
                  for (var _len18 = arguments.length, args = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
                    args[_key18] = arguments[_key18];
                  }
                  var n2 = args;
                  return new Promise(function (r2, i2) {
                    var o2 = t3.apply(e3, n2);
                    function a2(t4) {
                      nt(o2, r2, i2, a2, c2, "next", t4);
                    }
                    function c2(t4) {
                      nt(o2, r2, i2, a2, c2, "throw", t4);
                    }
                    a2(void 0);
                  });
                };
              }
              function it(t3, e3) {
                var _iterator9 = _createForOfIteratorHelper(e3),
                  _step9;
                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var r2 = _step9.value;
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }
              }
              function ot(t3, e3, n2) {
                return e3 in t3 ? Object.defineProperty(t3, e3, {
                  value: n2,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : t3[e3] = n2, t3;
              }
              var at = function () {
                function t3() {
                  !function (t4, e4) {
                    if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
                  }(this, t3), ot(this, "quickEditPanelVisible", false), ot(this, "scrollTop", 0);
                }
                var e3, n2, i2;
                return e3 = t3, n2 = [{
                  key: "createDialogBox",
                  value: function value() {
                    var t4 = arguments.length > 0 && void 0 !== (arguments.length <= 0 ? undefined : arguments[0]) ? arguments.length <= 0 ? undefined : arguments[0] : "Wikiplus",
                      e4 = arguments.length > 1 && void 0 !== (arguments.length <= 1 ? undefined : arguments[1]) ? arguments.length <= 1 ? undefined : arguments[1] : "",
                      n3 = arguments.length > 2 && void 0 !== (arguments.length <= 2 ? undefined : arguments[2]) ? arguments.length <= 2 ? undefined : arguments[2] : 600,
                      r2 = arguments.length > 3 && void 0 !== (arguments.length <= 3 ? undefined : arguments[3]) ? arguments.length <= 3 ? undefined : arguments[3] : function () {};
                    $(".Wikiplus-InterBox").length > 0 && $(".Wikiplus-InterBox").each(function () {
                      $(this).remove();
                    });
                    var i3 = window.innerWidth,
                      o2 = window.innerHeight,
                      a2 = Math.min(i3, n3),
                      c2 = $("<div>").addClass("Wikiplus-InterBox").css({
                        "margin-left": i3 / 2 - a2 / 2,
                        top: $(document).scrollTop() + 0.2 * o2,
                        display: "none"
                      }).append($("<div>").addClass("Wikiplus-InterBox-Header").html(t4)).append($("<div>").addClass("Wikiplus-InterBox-Content").append(e4)).append($("<span>").text("×").addClass("Wikiplus-InterBox-Close"));
                    $("body").append(c2), $(".Wikiplus-InterBox").width(a2), $(".Wikiplus-InterBox-Close").on("click", function () {
                      $(this).parent().fadeOut("fast", function () {
                        window.onclose = window.onbeforeunload = void 0, $(this).remove();
                      });
                    });
                    var u2 = function t5(e5) {
                      e5.mousedown(function (n4) {
                        var r3 = n4.clientX,
                          i4 = n4.clientY,
                          o3 = e5.parent().offset().left,
                          a3 = e5.parent().offset().top;
                        $(document).on("mousemove", function (t6) {
                          e5.parent().css({
                            "margin-left": o3 + t6.clientX - r3,
                            top: a3 + t6.clientY - i4
                          });
                        }), $(document).on("mouseup", function () {
                          e5.unbind("mousedown"), $(document).off("mousemove"), $(document).off("mouseup"), t5(e5);
                        });
                      });
                    };
                    return u2($(".Wikiplus-InterBox-Header")), $(".Wikiplus-InterBox").fadeIn(500), r2(), c2;
                  }
                }, {
                  key: "addFunctionButton",
                  value: function value(t4, e4) {
                    var n3;
                    switch (r.skin) {
                      case "minerva":
                        n3 = $("<li>").attr("id", e4).addClass("toggle-list-item").append($("<a>").addClass("mw-ui-icon mw-ui-icon-before toggle-list-item__anchor").append($("<span>").attr("href", "javascript:void(0);").addClass("toggle-list-item__label").text(t4)));
                        break;
                      case "moeskin":
                        n3 = $("<li>").addClass("Wikiplus-More-Function-Button").attr("id", e4).append($("<a>").attr("href", "javascript:void(0);").text(t4));
                        break;
                      default:
                        n3 = $("<li>").addClass("mw-list-item").addClass("vector-tab-noicon").attr("id", e4).append($("<a>").attr("href", "javascript:void(0);").text(t4));
                    }
                    return "minerva" === r.skin && $("#p-tb").length > 0 ? ($("#p-tb").append(n3), $("#".concat(e4))) : "moeskin" === r.skin ? ($(".more-actions-list").first().append(n3), $("#".concat(e4))) : $("#p-cactions").length > 0 ? ($("#p-cactions ul").append(n3), $("#".concat(e4))) : void j.info(b.translate("cant_add_funcbtn"));
                  }
                }, {
                  key: "insertSimpleRedirectButton",
                  value: function value() {
                    var t4 = arguments.length > 0 && void 0 !== (arguments.length <= 0 ? undefined : arguments[0]) ? arguments.length <= 0 ? undefined : arguments[0] : function () {},
                      e4 = this.addFunctionButton(b.translate("redirect_from"), "Wikiplus-SR-Intro");
                    e4 && e4.on("click", t4);
                  }
                }, {
                  key: "insertSettingsPanelButton",
                  value: function value() {
                    var t4 = arguments.length > 0 && void 0 !== (arguments.length <= 0 ? undefined : arguments[0]) ? arguments.length <= 0 ? undefined : arguments[0] : function () {},
                      e4 = this.addFunctionButton(b.translate("wikiplus_settings"), "Wikiplus-Settings-Intro");
                    e4 && e4.on("click", t4);
                  }
                }, {
                  key: "insertTopQuickEditEntry",
                  value: function value(t4) {
                    var e4 = $("<li>").attr("id", "Wikiplus-Edit-TopBtn").attr("class", "mw-list-item"),
                      n3 = $("<a>").attr("href", "javascript:void(0)").text("".concat(b.translate("quickedit_topbtn")));
                    switch (e4.append(n3), r.skin) {
                      case "minerva":
                        e4.css({
                          "align-items": "center",
                          display: "flex"
                        }), e4.find("span").addClass("page-actions-menu__list-item"), e4.find("a").addClass("mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 mw-ui-icon-with-label-desktop").css("vertical-align", "middle");
                        break;
                      case "vector-2022":
                        e4.addClass("vector-tab-noicon");
                        break;
                      case "vector":
                        e4.append($("<span>").append(n3));
                    }
                    $(e4).on("click", function () {
                      t4({
                        sectionNumber: -1,
                        targetPageName: r.currentPageName
                      });
                    }), $("#ca-edit").length > 0 && 0 === $("#Wikiplus-Edit-TopBtn").length && ("minerva" === r.skin ? $("#ca-edit").parent().after(e4) : $("#ca-edit").after(e4));
                  }
                }, {
                  key: "insertSectionQuickEditEntries",
                  value: function value() {
                    var t4 = arguments.length > 0 && void 0 !== (arguments.length <= 0 ? undefined : arguments[0]) ? arguments.length <= 0 ? undefined : arguments[0] : function () {},
                      e4 = "minerva" === r.skin ? $("<span>").append($("<a>").addClass("Wikiplus-Edit-SectionBtn mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 edit-page mw-ui-icon-flush-right").css("margin-left", "0.75em").attr("href", "javascript:void(0)").attr("title", b.translate("quickedit_sectionbtn"))) : $("<span>").append($("<span>").addClass("mw-editsection-divider").text(" | ")).append($("<a>").addClass("Wikiplus-Edit-SectionBtn").attr("href", "javascript:void(0)").text(b.translate("quickedit_sectionbtn")));
                    $(".mw-editsection").each(function (n3) {
                      try {
                        var i3 = $(this).find("a[href*='action=edit']").first().attr("href"),
                          o2 = i3.match(/&[ve]*section\=([^&]+)/)[1].replace(/T-/gi, ""),
                          a2 = decodeURIComponent(i3.match(/title=(.+?)&/)[1]),
                          c2 = $(this).prev().clone();
                        c2.find(".mw-headline-number").remove();
                        var u2 = c2.text().trim(),
                          s2 = e4.clone();
                        s2.find(".Wikiplus-Edit-SectionBtn").on("click", function () {
                          t4({
                            sectionNumber: o2,
                            sectionName: u2,
                            targetPageName: a2
                          });
                        }), "minerva" === r.skin ? $(this).append(s2) : $(this).find(".mw-editsection-bracket").last().before(s2);
                      } catch (t5) {
                        j.error("fail_to_init_quickedit");
                      }
                    });
                  }
                }, {
                  key: "insertLinkEditEntries",
                  value: function value() {
                    var t4 = arguments.length > 0 && void 0 !== (arguments.length <= 0 ? undefined : arguments[0]) ? arguments.length <= 0 ? undefined : arguments[0] : function () {};
                    $("#mw-content-text a.external").each(function (e4) {
                      var n3 = et($(this).attr("href"));
                      "edit" === n3.action && void 0 !== n3.title && "new" !== n3.section && $(this).after($("<a>").attr({
                        href: "javascript:void(0)",
                        "class": "Wikiplus-Edit-EveryWhereBtn"
                      }).text("(".concat(b.translate("quickedit_sectionbtn"), ")")).on("click", function () {
                        var e5;
                        t4({
                          targetPageName: n3.title,
                          sectionNumber: null !== (e5 = n3.section) && void 0 !== e5 ? e5 : -1
                        });
                      }));
                    });
                  }
                }, {
                  key: "showQuickEditPanel",
                  value: function value(t4) {
                    var e4 = t4.title,
                      n3 = void 0 === e4 ? "" : e4,
                      r2 = t4.content,
                      i3 = void 0 === r2 ? "" : r2,
                      o2 = t4.summary,
                      a2 = void 0 === o2 ? "" : o2,
                      c2 = t4.onBack,
                      u2 = void 0 === c2 ? function () {} : c2,
                      s2 = t4.onParse,
                      l2 = void 0 === s2 ? function () {} : s2,
                      f2 = t4.onEdit,
                      p2 = void 0 === f2 ? function () {} : f2,
                      d2 = t4.escExit,
                      h2 = void 0 !== d2 && d2,
                      v2 = this;
                    this.scrollTop = $(document).scrollTop(), this.quickEditPanelVisible && this.hideQuickEditPanel(), this.quickEditPanelVisible = true, window.onclose = window.onbeforeunload = function () {
                      return "".concat(b.translate("onclose_confirm"));
                    };
                    var g2 = $(".noarticletext").length > 0,
                      m2 = $("<span>").attr("id", "Wikiplus-Quickedit-Back").addClass("Wikiplus-Btn").text("".concat(b.translate("back"))),
                      y2 = $("<span>").attr("id", "Wikiplus-Quickedit-Jump").addClass("Wikiplus-Btn").append($("<a>").attr("href", "#Wikiplus-Quickedit").text("".concat(b.translate("goto_editbox")))),
                      k2 = $("<textarea>").attr("id", "Wikiplus-Quickedit"),
                      A2 = $("<div>").attr("id", "Wikiplus-Quickedit-Preview-Output"),
                      w2 = $("<input>").attr("id", "Wikiplus-Quickedit-Summary-Input").attr("placeholder", "".concat(b.translate("summary_placehold"))),
                      x2 = $("<button>").attr("id", "Wikiplus-Quickedit-Submit").text("".concat(b.translate(g2 ? "publish_page" : "publish_change"), "(Ctrl+S)")),
                      I2 = $("<button>").attr("id", "Wikiplus-Quickedit-Preview-Submit").text("".concat(b.translate("preview"))),
                      C2 = $("<div>").append($("<input>").attr({
                        type: "checkbox",
                        id: "Wikiplus-Quickedit-MinorEdit"
                      })).append($("<label>").attr("for", "Wikiplus-Quickedit-MinorEdit").text("".concat(b.translate("mark_minoredit"), "(Ctrl+Shift+S)"))).css({
                        margin: "5px 5px 5px -3px",
                        display: "inline"
                      }),
                      B2 = $("<div>").append(m2, y2, A2, k2, w2, $("<br>"), C2, x2, I2);
                    this.createDialogBox(n3, B2, 1e3, function () {
                      $("#Wikiplus-Quickedit").val(i3), $("#Wikiplus-Quickedit-Summary-Input").val(a2);
                    }), $("#Wikiplus-Quickedit-Back").on("click", u2), $("#Wikiplus-Quickedit-Preview-Submit").on("click", rt(_regeneratorRuntime().mark(function t5() {
                      var e5, n4, r3;
                      return _regeneratorRuntime().wrap(function (t6) {
                        for (;;) switch (t6.prev = t6.next) {
                          case 0:
                            return e5 = $("<div>").addClass("Wikiplus-Banner").text("".concat(b.translate("loading_preview"))), n4 = $("#Wikiplus-Quickedit").val(), $(this).attr("disabled", "disabled"), $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, function () {
                              $("#Wikiplus-Quickedit-Preview-Output").html("").append(e5), $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
                            }), $("html, body").animate({
                              scrollTop: v2.scrollTop
                            }, 200), t6.next = 7, l2(n4);
                          case 7:
                            r3 = t6.sent, $("#Wikiplus-Quickedit-Preview-Output").fadeOut("100", function () {
                              $("#Wikiplus-Quickedit-Preview-Output").html('<hr><div class="mw-body-content">' + r3 + "</div><hr>"), $("#Wikiplus-Quickedit-Preview-Output").fadeIn("100"), $("#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false);
                            });
                          case 9:
                          case "end":
                            return t6.stop();
                        }
                      }, t5, this);
                    }))), $("#Wikiplus-Quickedit-Submit").on("click", rt(_regeneratorRuntime().mark(function t5() {
                      var e5, n4, r3, i4;
                      return _regeneratorRuntime().wrap(function (t6) {
                        for (;;) switch (t6.prev = t6.next) {
                          case 0:
                            return e5 = /* @__PURE__ */new Date().valueOf(), n4 = $("<div>").addClass("Wikiplus-Banner").text("".concat(b.translate("submitting_edit"))), r3 = {
                              summary: $("#Wikiplus-Quickedit-Summary-Input").val(),
                              content: $("#Wikiplus-Quickedit").val(),
                              isMinorEdit: $("#Wikiplus-Quickedit-MinorEdit").is(":checked")
                            }, $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").attr("disabled", "disabled"), $("html, body").animate({
                              scrollTop: v2.scrollTop
                            }, 200), $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, function () {
                              $("#Wikiplus-Quickedit-Preview-Output").html("").append(n4), $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
                            }), t6.prev = 6, t6.next = 9, p2(r3);
                          case 9:
                            i4 = /* @__PURE__ */new Date().valueOf() - e5, $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").css("background", "rgba(6, 239, 92, 0.44)"), $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").text("".concat(b.translate("edit_success", [i4.toString()]))), window.onclose = window.onbeforeunload = void 0, setTimeout(function () {
                              location.reload();
                            }, 500), t6.next = 21;
                            break;
                          case 16:
                            t6.prev = 16, t6.t0 = t6["catch"](6), console.log(t6.t0), $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)"), $(".Wikiplus-Banner").html(t6.t0.message);
                          case 21:
                            return t6.prev = 21, $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false), t6.finish(21);
                          case 24:
                          case "end":
                            return t6.stop();
                        }
                      }, t5, null, [[6, 16, 21, 24]]);
                    }))), $("#Wikiplus-Quickedit,#Wikiplus-Quickedit-Summary-Input,#Wikiplus-Quickedit-MinorEdit").on("keydown", function (t5) {
                      t5.ctrlKey && 83 === t5.which && (t5.shiftKey && $("#Wikiplus-Quickedit-MinorEdit").trigger("click"), $("#Wikiplus-Quickedit-Submit").trigger("click"), t5.preventDefault(), t5.stopPropagation());
                    }), h2 && $(document).on("keydown", function (t5) {
                      27 === t5.which && $("#Wikiplus-Quickedit-Back").click();
                    });
                  }
                }, {
                  key: "hideQuickEditPanel",
                  value: function value() {
                    this.quickEditPanelVisible = false, $(".Wikiplus-InterBox").fadeOut("fast", function () {
                      window.onclose = window.onbeforeunload = void 0, $(this).remove();
                    });
                  }
                }, {
                  key: "showSimpleRedirectPanel",
                  value: function value() {
                    var t4 = this,
                      e4 = arguments.length > 0 && void 0 !== (arguments.length <= 0 ? undefined : arguments[0]) ? arguments.length <= 0 ? undefined : arguments[0] : {},
                      n3 = e4.onEdit,
                      r2 = void 0 === n3 ? function () {} : n3,
                      i3 = e4.onSuccess,
                      o2 = void 0 === i3 ? function () {} : i3,
                      a2 = $("<input>").addClass("Wikiplus-InterBox-Input"),
                      c2 = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Apply").text(b.translate("submit")),
                      u2 = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Cancel").text(b.translate("cancel")),
                      s2 = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Continue").text(b.translate("continue")),
                      l2 = $("<div>").append(a2).append($("<hr>")).append(c2).append(u2),
                      f2 = this.createDialogBox(b.translate("redirect_desc"), l2, 600);
                    c2.on("click", rt(_regeneratorRuntime().mark(function e5() {
                      var n4;
                      return _regeneratorRuntime().wrap(function (e6) {
                        for (;;) switch (e6.prev = e6.next) {
                          case 0:
                            return n4 = $(".Wikiplus-InterBox-Input").val(), $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(b.translate("submitting_edit"), "</div>")), e6.prev = 2, e6.next = 5, r2({
                              title: n4,
                              forceOverwrite: false
                            });
                          case 5:
                            $(".Wikiplus-Banner").text(b.translate("redirect_saved")), t4.hideSimpleRedirectPanel(f2), o2({
                              title: n4
                            }), e6.next = 15;
                            break;
                          case 10:
                            e6.prev = 10, e6.t0 = e6["catch"](2), $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)"), $(".Wikiplus-Banner").text(e6.t0.message), "articleexists" === e6.t0.code && ($(".Wikiplus-InterBox-Content").append($("<hr>")).append(s2).append(u2), u2.on("click", function () {
                              t4.hideSimpleRedirectPanel(f2);
                            }), s2.on("click", rt(_regeneratorRuntime().mark(function e7() {
                              return _regeneratorRuntime().wrap(function (e8) {
                                for (;;) switch (e8.prev = e8.next) {
                                  case 0:
                                    return $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(b.translate("submitting_edit"), "</div>")), e8.prev = 1, e8.next = 4, r2({
                                      title: n4,
                                      forceOverwrite: true
                                    });
                                  case 4:
                                    $(".Wikiplus-Banner").text(b.translate("redirect_saved")), t4.hideSimpleRedirectPanel(f2), o2({
                                      title: n4
                                    }), e8.next = 13;
                                    break;
                                  case 9:
                                    e8.prev = 9, e8.t0 = e8["catch"](1), $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)"), $(".Wikiplus-Banner").text(e8.t0.message);
                                  case 13:
                                  case "end":
                                    return e8.stop();
                                }
                              }, e7, null, [[1, 9]]);
                            }))));
                          case 15:
                          case "end":
                            return e6.stop();
                        }
                      }, e5, null, [[2, 10]]);
                    }))), u2.on("click", function () {
                      t4.hideSimpleRedirectPanel(f2);
                    });
                  }
                }, {
                  key: "hideSimpleRedirectPanel",
                  value: function value() {
                    var t4 = arguments.length > 0 && void 0 !== (arguments.length <= 0 ? undefined : arguments[0]) ? arguments.length <= 0 ? undefined : arguments[0] : $("body");
                    t4.find(".Wikiplus-InterBox-Close").trigger("click");
                  }
                }, {
                  key: "showSettingsPanel",
                  value: function value() {
                    var t4 = this,
                      e4 = arguments.length > 0 && void 0 !== (arguments.length <= 0 ? undefined : arguments[0]) ? arguments.length <= 0 ? undefined : arguments[0] : {},
                      n3 = e4.onSubmit,
                      r2 = void 0 === n3 ? function () {} : n3,
                      i3 = $("<textarea>").attr("id", "Wikiplus-Setting-Input").attr("rows", "10"),
                      o2 = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Apply").text(b.translate("submit")),
                      a2 = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Cancel").text(b.translate("cancel")),
                      c2 = $("<div>").append(i3).append($("<hr>")).append(o2).append(a2),
                      u2 = this.createDialogBox(b.translate("wikiplus_settings_desc"), c2, 600, function () {
                        if (localStorage.Wikiplus_Settings) {
                          $("#Wikiplus-Setting-Input").val(localStorage.Wikiplus_Settings);
                          try {
                            var t5 = JSON.parse(localStorage.Wikiplus_Settings);
                            $("#Wikiplus-Setting-Input").val(JSON.stringify(t5, null, 2));
                          } catch (t6) {}
                        } else $("#Wikiplus-Setting-Input").attr("placeholder", b.translate("wikiplus_settings_placeholder"));
                      });
                    o2.on("click", rt(_regeneratorRuntime().mark(function e5() {
                      var n4, i4;
                      return _regeneratorRuntime().wrap(function (e6) {
                        for (;;) switch (e6.prev = e6.next) {
                          case 0:
                            return n4 = $("<div>").addClass("Wikiplus-Banner").text(b.translate("wikiplus_settings_saved")), i4 = $("#Wikiplus-Setting-Input").val(), e6.prev = 2, r2({
                              settings: i4
                            }), $(".Wikiplus-InterBox-Content").html("").append(n4), e6.next = 7, tt(1500);
                          case 7:
                            t4.hideSettingsPanel(u2), e6.next = 13;
                            break;
                          case 10:
                            e6.prev = 10, e6.t0 = e6["catch"](2), K.error(b.translate("wikiplus_settings_grammar_error"));
                          case 13:
                          case "end":
                            return e6.stop();
                        }
                      }, e5, null, [[2, 10]]);
                    }))), a2.on("click", function () {
                      t4.hideSettingsPanel(u2);
                    });
                  }
                }, {
                  key: "hideSettingsPanel",
                  value: function value() {
                    var t4 = arguments.length > 0 && void 0 !== (arguments.length <= 0 ? undefined : arguments[0]) ? arguments.length <= 0 ? undefined : arguments[0] : $("body");
                    t4.find(".Wikiplus-InterBox-Close").trigger("click");
                  }
                }, {
                  key: "bindPreloadEvents",
                  value: function value(t4) {
                    $("#toc").children("ul").find("a").each(function (e4) {
                      $(this).on("mouseover", function () {
                        $(this).off("mouseover"), t4({
                          sectionNumber: e4 + 1
                        });
                      });
                    });
                  }
                }], n2 && it(e3.prototype, n2), i2 && it(e3, i2), Object.defineProperty(e3, "prototype", {
                  writable: false
                }), t3;
              }();
              var ct = new at();
              function ut(t3, e3) {
                var _iterator10 = _createForOfIteratorHelper(e3),
                  _step10;
                try {
                  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                    var r2 = _step10.value;
                    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
                  }
                } catch (err) {
                  _iterator10.e(err);
                } finally {
                  _iterator10.f();
                }
              }
              var st = function () {
                function t3() {
                  !function (t4, e4) {
                    if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
                  }(this, t3);
                }
                var e3, n2, r2;
                return e3 = t3, n2 = [{
                  key: "getSetting",
                  value: function value(t4) {
                    var e4;
                    var n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    var r3 = n3;
                    try {
                      e4 = JSON.parse(localStorage.Wikiplus_Settings);
                    } catch (t5) {
                      return;
                    }
                    try {
                      var i2 = new Function("return " + e4[t4]);
                      if ("function" != typeof i2) return e4[t4];
                      try {
                        return true === i2()(r3) ? void 0 : i2()(r3) || e4[t4];
                      } catch (n4) {
                        return e4[t4];
                      }
                    } catch (r4) {
                      try {
                        for (var o2 = e4[t4], a2 = 0, c2 = Object.keys(n3); a2 < c2.length; a2++) {
                          var u2 = c2[a2];
                          o2 = o2.replace("${".concat(u2, "}"), n3[u2]);
                        }
                        return o2;
                      } catch (t5) {
                        return;
                      }
                    }
                  }
                }], n2 && ut(e3.prototype, n2), r2 && ut(e3, r2), Object.defineProperty(e3, "prototype", {
                  writable: false
                }), t3;
              }();
              var lt = new st();
              var ft = n(3379);
              var pt = n.n(ft);
              var dt = n(7795);
              var ht = n.n(dt);
              var vt = n(569);
              var gt = n.n(vt);
              var mt = n(3565);
              var yt = n.n(mt);
              var kt = n(9216);
              var bt = n.n(kt);
              var At = n(4589);
              var wt = n.n(At);
              var xt = n(9183);
              var It = {};
              It.styleTagTransform = wt(), It.setAttributes = yt(), It.insert = gt().bind(null, "head"), It.domAPI = ht(), It.insertStyleElement = bt();
              pt()(xt.Z, It), xt.Z && xt.Z.locals && xt.Z.locals;
              function Ct(t3, e3) {
                var n2 = Object.keys(t3);
                if (Object.getOwnPropertySymbols) {
                  var r2 = Object.getOwnPropertySymbols(t3);
                  e3 && (r2 = r2.filter(function (e4) {
                    return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
                  })), n2.push.apply(n2, _toConsumableArray(r2));
                }
                return n2;
              }
              function Bt(t3) {
                var _arguments3 = arguments;
                var _loop3 = function _loop3() {
                  var n2 = null != _arguments3[e3] ? _arguments3[e3] : {};
                  e3 % 2 ? Ct(Object(n2), true).forEach(function (e4) {
                    _t(t3, e4, n2[e4]);
                  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(n2)) : Ct(Object(n2)).forEach(function (e4) {
                    Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(n2, e4));
                  });
                };
                for (var e3 = 1; e3 < arguments.length; e3++) {
                  _loop3();
                }
                return t3;
              }
              function _t(t3, e3, n2) {
                return e3 in t3 ? Object.defineProperty(t3, e3, {
                  value: n2,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : t3[e3] = n2, t3;
              }
              function St(t3, e3, n2, r2, i2, o2, a2) {
                try {
                  var c2 = t3[o2](a2);
                  var u2 = c2.value;
                } catch (t4) {
                  return void n2(t4);
                }
                c2.done ? e3(u2) : Promise.resolve(u2).then(r2, i2);
              }
              function Ot(t3) {
                return function () {
                  var e3 = this;
                  for (var _len19 = arguments.length, args = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
                    args[_key19] = arguments[_key19];
                  }
                  var n2 = args;
                  return new Promise(function (r2, i2) {
                    var o2 = t3.apply(e3, n2);
                    function a2(t4) {
                      St(o2, r2, i2, a2, c2, "next", t4);
                    }
                    function c2(t4) {
                      St(o2, r2, i2, a2, c2, "throw", t4);
                    }
                    a2(void 0);
                  });
                };
              }
              $(Ot(_regeneratorRuntime().mark(function t3() {
                var e3;
                var n2;
                var i2;
                var o2;
                var a2;
                var c2;
                var u2;
                var s2;
                var l2;
                var f2;
                return _regeneratorRuntime().wrap(function (t4) {
                  for (;;) switch (t4.prev = t4.next) {
                    case 0:
                      if (e3 = {}, n2 = $(".noarticletext").length > 0 && 0 === r.articleId, i2 = function () {
                        var t5 = Ot(_regeneratorRuntime().mark(function t6(n3) {
                          var r2;
                          var i3;
                          var o3;
                          return _regeneratorRuntime().wrap(function (t7) {
                            for (;;) switch (t7.prev = t7.next) {
                              case 0:
                                if (r2 = n3.revisionId, i3 = n3.title, !e3[r2]) {
                                  t7.next = 3;
                                  break;
                                }
                                return t7.abrupt("return", e3[r2]);
                              case 3:
                                return o3 = new X({
                                  revisionId: r2,
                                  title: i3
                                }), t7.next = 6, o3.init();
                              case 6:
                                return e3[r2] = o3, t7.abrupt("return", e3[r2]);
                              case 8:
                              case "end":
                                return t7.stop();
                            }
                          }, t6);
                        }));
                        return function (e4) {
                          return t5.apply(this, arguments);
                        };
                      }(), j.info("Wikiplus now loading. Version: ".concat(r.version)), window.mw) {
                        t4.next = 7;
                        break;
                      }
                      return console.log("Mediawiki JavaScript not loaded or not a Mediawiki website."), t4.abrupt("return");
                    case 7:
                      if (r.userGroups.indexOf("autoconfirmed") !== -1) {
                        t4.next = 11;
                        break;
                      }
                      return K.error(b.translate("not_autoconfirmed_user")), j.info(b.translate("not_autoconfirmed_user")), t4.abrupt("return");
                    case 11:
                      if (r.isArticle && "view" === r.action) {
                        t4.next = 14;
                        break;
                      }
                      return j.info("Not an editable page. Stop initialization."), t4.abrupt("return");
                    case 14:
                      return window._WikiplusPages = e3, o2 = r.currentPageName, a2 = r.revisionId, t4.next = 19, i2({
                        revisionId: a2,
                        title: o2
                      });
                    case 19:
                      c2 = t4.sent, u2 = function () {
                        var t5 = Ot(_regeneratorRuntime().mark(function t6() {
                          var e4;
                          var a3;
                          var c3;
                          var u3;
                          var s3;
                          var l3;
                          var f3;
                          var p2;
                          var d2;
                          var h2;
                          var v2;
                          var g2;
                          var m2;
                          var y2;
                          var k2;
                          var A2 = arguments;
                          return _regeneratorRuntime().wrap(function (t7) {
                            for (;;) switch (t7.prev = t7.next) {
                              case 0:
                                if (e4 = A2.length > 0 && void 0 !== A2[0] ? A2[0] : {}, a3 = e4.sectionNumber, c3 = e4.sectionName, (u3 = e4.targetPageName) === o2 || r.latestRevisionId === r.revisionId) {
                                  t7.next = 4;
                                  break;
                                }
                                return j.error("cross_page_history_revision_edit_warning"), t7.abrupt("return");
                              case 4:
                                if (u3 !== o2) {
                                  t7.next = 8;
                                  break;
                                }
                                t7.t0 = r.revisionId, t7.next = 11;
                                break;
                              case 8:
                                return t7.next = 10, D.getLatestRevisionIdForPage(u3);
                              case 10:
                                t7.t0 = t7.sent;
                              case 11:
                                return s3 = t7.t0, t7.next = 14, i2({
                                  revisionId: s3,
                                  title: u3
                                });
                              case 14:
                                return l3 = t7.sent, f3 = lt.getSetting("defaultSummary", {
                                  sectionName: c3,
                                  sectionNumber: a3,
                                  sectionTargetName: u3
                                }), p2 = f3 || (c3 ? "/* ".concat(c3, " */ ").concat(b.translate("default_summary_suffix")) : b.translate("default_summary_suffix")), d2 = setTimeout(function () {
                                  K.success(b.translate("loading"));
                                }, 200), t7.next = 20, l3.getWikiText({
                                  section: a3
                                });
                              case 20:
                                h2 = t7.sent, v2 = u3 === o2 && r.latestRevisionId !== r.revisionId, g2 = true === lt.getSetting("esc_to_exit_quickedit") || "true" === lt.getSetting("esc_to_exit_quickedit") || true === lt.getSetting("escToExitQuickEdit") || "true" === lt.getSetting("escToExitQuickEdit"), m2 = lt.getSetting("custom_edit_tags"), y2 = location.host.indexOf("zh.wikipedia.org") !== -1 || location.host.indexOf("zh.m.wikipedia.org") !== -1 ? ["wikiplus"] : [], k2 = null != m2 && m2.length ? m2 : y2, clearTimeout(d2), K.empty(), v2 && K.warning(b.translate("history_edit_warning")), ct.showQuickEditPanel({
                                  title: "".concat(b.translate("quickedit_topbtn")).concat(v2 ? b.translate("history_edit_warning") : ""),
                                  content: n2 ? b.translate("create_page_tip") : h2,
                                  summary: p2,
                                  onBack: ct.hideQuickEditPanel,
                                  onParse: function onParse(t8) {
                                    return l3.parseWikiText(t8);
                                  },
                                  onEdit: function () {
                                    var t8 = Ot(_regeneratorRuntime().mark(function t9(e5) {
                                      var n3;
                                      var r2;
                                      var i3;
                                      var o3;
                                      return _regeneratorRuntime().wrap(function (t10) {
                                        for (;;) switch (t10.prev = t10.next) {
                                          case 0:
                                            return n3 = e5.content, r2 = e5.summary, i3 = e5.isMinorEdit, o3 = {
                                              content: n3,
                                              config: Bt(Bt({
                                                summary: r2
                                              }, -1 !== a3 ? {
                                                section: a3
                                              } : {}), k2.length ? {
                                                tags: k2.join("|")
                                              } : {})
                                            }, i3 ? o3.config.minor = "true" : o3.config.notminor = "true", t10.next = 5, l3.edit(o3);
                                          case 5:
                                          case "end":
                                            return t10.stop();
                                        }
                                      }, t9);
                                    }));
                                    return function (e5) {
                                      return t8.apply(this, arguments);
                                    };
                                  }(),
                                  escExit: g2
                                });
                              case 30:
                              case "end":
                                return t7.stop();
                            }
                          }, t6);
                        }));
                        return function () {
                          for (var _len20 = arguments.length, args = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
                            args[_key20] = arguments[_key20];
                          }
                          return t5.apply(this, args);
                        };
                      }(), s2 = function () {
                        var t5 = Ot(_regeneratorRuntime().mark(function t6() {
                          return _regeneratorRuntime().wrap(function (t7) {
                            for (;;) switch (t7.prev = t7.next) {
                              case 0:
                                ct.showSimpleRedirectPanel({
                                  onEdit: function () {
                                    var t8 = Ot(_regeneratorRuntime().mark(function t9(e4) {
                                      var n3;
                                      var o3;
                                      var a3;
                                      var c3;
                                      var u3;
                                      var s3;
                                      return _regeneratorRuntime().wrap(function (t10) {
                                        for (;;) switch (t10.prev = t10.next) {
                                          case 0:
                                            return n3 = e4.title, o3 = e4.forceOverwrite, a3 = void 0 !== o3 && o3, t10.next = 3, i2({
                                              title: n3
                                            });
                                          case 3:
                                            return c3 = t10.sent, u3 = r.currentPageName, s3 = {
                                              content: "#REDIRECT [[".concat(u3, "]]"),
                                              config: {
                                                summary: b.translate("redirect_from_summary", [n3, u3])
                                              }
                                            }, a3 || (s3.config.createonly = "true"), t10.next = 9, c3.edit(s3);
                                          case 9:
                                          case "end":
                                            return t10.stop();
                                        }
                                      }, t9);
                                    }));
                                    return function (e4) {
                                      return t8.apply(this, arguments);
                                    };
                                  }(),
                                  onSuccess: function onSuccess(t8) {
                                    var e4 = t8.title;
                                    location.href = r.articlePath.replace(/\$1/gi, e4);
                                  }
                                });
                              case 1:
                              case "end":
                                return t7.stop();
                            }
                          }, t6);
                        }));
                        return function () {
                          for (var _len21 = arguments.length, args = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
                            args[_key21] = arguments[_key21];
                          }
                          return t5.apply(this, args);
                        };
                      }(), l2 = function () {
                        var t5 = Ot(_regeneratorRuntime().mark(function t6() {
                          return _regeneratorRuntime().wrap(function (t7) {
                            for (;;) switch (t7.prev = t7.next) {
                              case 0:
                                ct.showSettingsPanel({
                                  onSubmit: function onSubmit(t8) {
                                    var e4 = t8.settings;
                                    JSON.parse(e4), localStorage.setItem("Wikiplus_Settings", e4);
                                  }
                                });
                              case 1:
                              case "end":
                                return t7.stop();
                            }
                          }, t6);
                        }));
                        return function () {
                          for (var _len22 = arguments.length, args = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
                            args[_key22] = arguments[_key22];
                          }
                          return t5.apply(this, args);
                        };
                      }(), f2 = function () {
                        var t5 = Ot(_regeneratorRuntime().mark(function t6(e4) {
                          var n3;
                          return _regeneratorRuntime().wrap(function (t7) {
                            for (;;) switch (t7.prev = t7.next) {
                              case 0:
                                return n3 = e4.sectionNumber, t7.next = 3, c2.getWikiText({
                                  section: n3
                                });
                              case 3:
                              case "end":
                                return t7.stop();
                            }
                          }, t6);
                        }));
                        return function (e4) {
                          return t5.apply(this, arguments);
                        };
                      }(), ct.insertTopQuickEditEntry(u2), ct.insertSectionQuickEditEntries(u2), ct.insertLinkEditEntries(u2), ct.insertSimpleRedirectButton(s2), ct.insertSettingsPanelButton(l2), ct.bindPreloadEvents(f2);
                    case 30:
                    case "end":
                      return t4.stop();
                  }
                }, t3);
              })));
            }();
          })();
        }
      });
    
      // src/Wikiplus/modules/highlight.js
      var highlight_exports = {};
      var init_highlight = __esm({
        "src/Wikiplus/modules/highlight.js": function srcWikiplusModulesHighlightJs() {
          "use strict";
    
          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            "use strict";
    
            var i, c, s, m, a, e, t, p, g, z, D, o, _mw$config$values, N, u, U, H, F, Q, n, h, V, r, B, k, f, R, d, w, b, x, y, q, l, K, J, G, v, X, j, C, S, M, Y, Z, W, ee, ie, O, te, ae, oe, ne, E, _, se, re, de, le, ce, me, T, A, pe, ge, I, ue, P, we, L;
            return _regeneratorRuntime().wrap(function _callee7$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  if (!(mw.libs.wphl && mw.libs.wphl.version)) {
                    _context8.next = 2;
                    break;
                  }
                  return _context8.abrupt("return");
                case 2:
                  mw.libs.wphl = mw.libs.wphl || {};
                  i = "2.59.6";
                  c = "object" == _typeof(mw.storage) && "function" == typeof mw.storage.getObject ? mw.storage : {
                    getObject: function getObject(e2) {
                      var i2 = localStorage.getItem(e2);
                      if (false === i2) return false;
                      try {
                        return JSON.parse(i2);
                      } catch (e3) {
                        return null;
                      }
                    },
                    setObject: function setObject(e2, i2) {
                      try {
                        return localStorage.setItem(e2, JSON.stringify(i2));
                      } catch (e3) {
                        return false;
                      }
                    }
                  };
                  s = (Object.fromEntries = Object.fromEntries || function (e2) {
                    var i2;
                    var t2;
                    var a2 = {};
                    var _iterator11 = _createForOfIteratorHelper(e2),
                      _step11;
                    try {
                      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                        var _step11$value = _slicedToArray(_step11.value, 2);
                        i2 = _step11$value[0];
                        t2 = _step11$value[1];
                        a2[i2] = t2;
                      }
                    } catch (err) {
                      _iterator11.e(err);
                    } finally {
                      _iterator11.f();
                    }
                    return a2;
                  }, function () {
                    var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : i;
                    return e2.split(".").map(Number);
                  });
                  m = function m(e2) {
                    var _mw;
                    for (var _len23 = arguments.length, i2 = new Array(_len23 > 1 ? _len23 - 1 : 0), _key23 = 1; _key23 < _len23; _key23++) {
                      i2[_key23 - 1] = arguments[_key23];
                    }
                    return (_mw = mw).msg.apply(_mw, ["wphl-" + e2].concat(i2));
                  };
                  a = function a() {
                    return $($.parseHTML(m.apply(void 0, arguments)));
                  };
                  e = function e() {
                    for (var _len24 = arguments.length, i2 = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
                      i2[_key24] = arguments[_key24];
                    }
                    return function () {
                      var e2 = $("<p>", {
                        html: m.apply(void 0, i2)
                      });
                      return mw.notify(e2, {
                        type: "success",
                        autoHideSeconds: "long",
                        tag: "wikiplus-highlight"
                      }), e2;
                    };
                  };
                  t = s().slice(0, 2).join(".");
                  p = "//fastly.jsdelivr.net";
                  g = "npm/codemirror@5.65.3";
                  z = "gh/bhsd-harry/codemirror-mediawiki@1.1.11";
                  D = "npm/wikiparser-node@0.11.0-b";
                  o = "gh/bhsd-harry/Wikiplus-highlight@" + t;
                  _mw$config$values = mw["config"]["values"], N = _mw$config$values.wgPageName, u = _mw$config$values.wgNamespaceNumber, U = _mw$config$values.wgPageContentModel, H = _mw$config$values.wgServerName, F = _mw$config$values.wgScriptPath, Q = _mw$config$values.wgUserLanguage, n = _mw$config$values.skin;
                  h = null !== mw.loader.getState("ext.CodeMirror");
                  V = mw.loader.getState("ext.CodeMirror.data") ? "ext.CodeMirror.data" : "ext.CodeMirror";
                  r = c.getObject("InPageEditMwConfig") || {};
                  B = "" + H + F;
                  k = r[B] || {};
                  f = !(k.time > Date.now() - 2592e6);
                  R = {
                    css: "css",
                    "sanitized-css": "css",
                    javascript: "javascript",
                    json: "javascript",
                    wikitext: "mediawiki"
                  };
                  d = h ? {
                    lib: "ext.CodeMirror.lib",
                    css: "ext.CodeMirror.lib.mode.css",
                    javascript: "ext.CodeMirror.lib.mode.javascript",
                    lua: g + "/mode/lua/lua.min.js",
                    mediawiki: f ? V : [],
                    htmlmixed: "ext.CodeMirror.lib.mode.htmlmixed",
                    xml: []
                  } : {
                    lib: g + "/lib/codemirror.min.js",
                    css: g + "/mode/css/css.min.js",
                    javascript: g + "/mode/javascript/javascript.min.js",
                    lua: g + "/mode/lua/lua.min.js",
                    mediawiki: [],
                    htmlmixed: g + "/mode/htmlmixed/htmlmixed.min.js",
                    xml: g + "/mode/xml/xml.min.js"
                  };
                  w = {
                    searchcursor: g + "/addon/search/searchcursor.min.js",
                    search: o + "/search.min.js",
                    markSelection: g + "/addon/selection/mark-selection.min.js",
                    activeLine: g + "/addon/selection/active-line.min.js",
                    trailingspace: g + "/addon/edit/trailingspace.min.js",
                    matchBrackets: g + "/addon/edit/matchbrackets.min.js",
                    closeBrackets: g + "/addon/edit/closebrackets.min.js",
                    matchTags: o + "/matchtags.min.js",
                    fold: o + "/fold.min.js",
                    wikiEditor: "ext.wikiEditor",
                    contextmenu: "mediawiki.Title",
                    lint: g + "/addon/lint/lint.min.js",
                    annotateScrollbar: g + "/addon/scroll/annotatescrollbar.min.js",
                    parser: D + "/extensions/base.min.js",
                    lintWikitext: o + "/lint.min.js"
                  };
                  b = [{
                    option: "styleSelectedText",
                    addon: "search",
                    download: "markSelection",
                    only: true,
                    complex: function complex() {
                      return !x.has("wikiEditor");
                    }
                  }, {
                    option: "styleActiveLine",
                    addon: "activeLine"
                  }, {
                    option: "showTrailingSpace",
                    addon: "trailingspace"
                  }, {
                    option: "matchBrackets",
                    complex: function complex(e2, i2) {
                      return "mediawiki" !== e2 && !i2 || {
                        bracketRegex: /[\[\]\{\}]/
                      };
                    }
                  }, {
                    option: "autoCloseBrackets",
                    addon: "closeBrackets",
                    complex: function complex(e2, i2) {
                      return "mediawiki" !== e2 && !i2 || '()[]{}""';
                    }
                  }, {
                    option: "matchTags",
                    addon: ["matchTags", "fold"],
                    modes: /* @__PURE__ */new Set(["mediawiki", "widget"])
                  }, {
                    option: "fold",
                    modes: /* @__PURE__ */new Set(["mediawiki", "widget"])
                  }];
                  x = new Set(c.getObject("Wikiplus-highlight-addons") || ["search"]);
                  y = c.getObject("Wikiplus-highlight-indent") || 4;
                  q = {
                    '"': "quot",
                    "'": "apos",
                    "<": "lt",
                    ">": "gt",
                    "&": "amp",
                    " ": "nbsp"
                  };
                  l = function l(i2) {
                    return function (e2) {
                      e2.replaceSelections(e2.getSelections().map(function (e3) {
                        return e3.split("\n").map(i2).join("\n");
                      }), "around");
                    };
                  };
                  K = l(function (e2) {
                    return _toConsumableArray(e2).map(function (e3) {
                      var i2;
                      return e3 in q ? "&".concat(q[e3], ";") : (i2 = e3.codePointAt()) < 256 ? "&#".concat(i2, ";") : "&#x".concat(i2.toString(16), ";");
                    }).join("");
                  });
                  J = l(function (e2) {
                    if (e2.indexOf("%") !== -1) try {
                      return decodeURIComponent(e2);
                    } catch (e3) {}
                    return encodeURIComponent(e2);
                  });
                  G = l(function (i2) {
                    try {
                      return decodeURIComponent(i2.replace(/\.([0-9a-f]{2})/gi, "%$1"));
                    } catch (e2) {
                      return i2;
                    }
                  });
                  v = function v(_ref2) {
                    var e2 = _ref2.keyMap;
                    return e2["default"] === e2.pcDefault;
                  };
                  X = function X(e2) {
                    var i2 = v(e2) ? "Ctrl" : "Cmd";
                    return _defineProperty(_defineProperty(_defineProperty({}, i2 + "-/", K), i2 + "-\\", J), "Shift-".concat(i2, "-\\"), G);
                  };
                  j = function j(g2, e2) {
                    if (("mediawiki" === e2 || "widget" === e2) && x.has("contextmenu")) {
                      var t2 = $(g2.getWrapperElement()).addClass("CodeMirror-contextmenu"),
                        _functionSynonyms = _slicedToArray((mw.config.get("extCodeMirrorConfig") || {
                          functionSynonyms: [{
                            invoke: "invoke",
                            调用: "invoke",
                            widget: "widget",
                            小工具: "widget"
                          }]
                        })["functionSynonyms"], 1),
                        a2 = _functionSynonyms[0];
                      var i2 = function i2(i3) {
                        return new Set(Object.keys(a2).filter(function (e3) {
                          return a2[e3] === i3;
                        }).map(function (e3) {
                          return e3.startsWith("#") ? e3 : "#" + e3;
                        }));
                      };
                      var u2 = i2("invoke"),
                        w2 = i2("widget");
                      t2.contextmenu(function (_ref4) {
                        var e3 = _ref4.pageX,
                          i3 = _ref4.pageY;
                        var t3 = g2.coordsChar({
                            left: e3,
                            top: i3
                          }),
                          a3 = t3.line,
                          o2 = t3.ch,
                          n2 = g2.getTokenTypeAt(t3);
                        if (/\bmw\x2D(?:template\x2Dname|parserfunction)\b/.test(n2)) {
                          var s2 = g2.getLineTokens(a3);
                          for (var e4 = s2.length - 1; 0 < e4; e4--) {
                            var _s2$e = s2[e4],
                              r2 = _s2$e.type,
                              d2 = _s2$e.end,
                              l2 = _s2$e.string;
                            s2[e4 - 1].type === r2 && (s2[e4 - 1].end = d2, s2[e4 - 1].string += l2, s2.splice(e4, 1));
                          }
                          var c2 = s2.findIndex(function (_ref5) {
                              var e4 = _ref5.start,
                                i4 = _ref5.end;
                              return e4 < o2 && i4 >= o2;
                            }),
                            m2 = s2[c2].string.replace(/\u200E/g, "").replace(/_/g, " ").trim();
                          if (/\bmw\x2Dtemplate\x2Dname\b/.test(n2)) return 0 !== (p2 = new mw.Title(m2)).namespace || m2.startsWith(":") ? open(p2.getUrl(), "_blank") : open(mw.util.getUrl("Template:" + m2), "_blank"), false;
                          if (!(c2 < 2) && /\bmw\x2Dparserfunction\x2Ddelimiter\b/.test(s2[c2 - 1].type) && /\bmw\x2Dparserfunction\x2Dname\b/.test(s2[c2 - 2].type)) {
                            var p2 = s2[c2 - 2].string.trim().toLowerCase();
                            if (u2.has(p2)) open(mw.util.getUrl("Module:" + m2), "_blank");else {
                              if (!w2.has(p2)) return;
                              open(mw.util.getUrl("Widget:" + m2, {
                                action: "edit"
                              }), "_blank");
                            }
                            return false;
                          }
                        }
                      });
                    }
                  };
                  C = c.getObject("Wikiplus-highlight-i18n") || {};
                  C["wphl-version"] ? function (e2, i2) {
                    var _s = s(e2),
                      _s2 = _slicedToArray(_s, 2),
                      t2 = _s2[0],
                      a2 = _s2[1];
                    var _s3 = s(i2),
                      _s4 = _slicedToArray(_s3, 2),
                      o2 = _s4[0],
                      n2 = _s4[1];
                    return t2 < o2 || t2 === o2 && a2 < n2;
                  }(C["wphl-version"], i) && (S = e("welcome-upgrade", i, 0)) : S = e("welcome");
                  M = {
                    zh: "zh-hans",
                    "zh-hans": "zh-hans",
                    "zh-cn": "zh-hans",
                    "zh-my": "zh-hans",
                    "zh-sg": "zh-hans",
                    "zh-hant": "zh-hant",
                    "zh-tw": "zh-hant",
                    "zh-hk": "zh-hant",
                    "zh-mo": "zh-hant",
                    ka: "ka"
                  }[Q] || "en";
                  Y = "".concat(p, "/").concat(o, "/i18n/").concat(M, ".json");
                  Z = C["wphl-version"] === t;
                  e = /*#__PURE__*/function () {
                    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            _context.t0 = Z && C["wphl-lang"] === M;
                            if (_context.t0) {
                              _context.next = 9;
                              break;
                            }
                            _context.t1 = Object;
                            _context.t2 = C;
                            _context.next = 6;
                            return $.ajax(Y, {
                              dataType: "json",
                              cache: true
                            });
                          case 6:
                            _context.t3 = _context.sent;
                            _context.t1.assign.call(_context.t1, _context.t2, _context.t3);
                            c.setObject("Wikiplus-highlight-i18n", C);
                          case 9:
                            mw.messages.set(C);
                          case 10:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee);
                    }));
                    return function e() {
                      return _ref6.apply(this, arguments);
                    };
                  }(), t = Promise.all([mw.loader.using("mediawiki.util"), e()]);
                  W = function W(e2) {
                    return 0 < e2.length ? mw.loader.using(e2) : Promise.resolve();
                  };
                  ee = function ee(e2) {
                    return 0 < e2.length ? $.ajax(p + "/" + (1 < e2.length ? "combine/" : "") + e2.join(), {
                      dataType: "script",
                      cache: true
                    }) : Promise.resolve();
                  };
                  ie = /*#__PURE__*/function () {
                    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e2, i2) {
                      var t2, a2;
                      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while (1) switch (_context2.prev = _context2.next) {
                          case 0:
                            t2 = e2.filter(function (e3) {
                              return !(e3.indexOf("/") !== -1);
                            }), a2 = e2.filter(function (e3) {
                              return e3.indexOf("/") !== -1;
                            });
                            if (!(true === i2)) {
                              _context2.next = 7;
                              break;
                            }
                            _context2.next = 4;
                            return W(t2);
                          case 4:
                            _context2.t0 = ee(a2);
                            _context2.next = 15;
                            break;
                          case 7:
                            if (!(false === i2)) {
                              _context2.next = 13;
                              break;
                            }
                            _context2.next = 10;
                            return ee(a2);
                          case 10:
                            _context2.t1 = W(t2);
                            _context2.next = 14;
                            break;
                          case 13:
                            _context2.t1 = Promise.all([W(t2), ee(a2)]);
                          case 14:
                            _context2.t0 = _context2.t1;
                          case 15:
                            return _context2.abrupt("return", _context2.t0);
                          case 16:
                          case "end":
                            return _context2.stop();
                        }
                      }, _callee2);
                    }));
                    return function ie(_x, _x2) {
                      return _ref7.apply(this, arguments);
                    };
                  }();
                  te = function te(e2) {
                    var i2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    var t2;
                    var a2;
                    var o2;
                    var n2;
                    var s2 = [];
                    for (var _i = 0, _b = b; _i < _b.length; _i++) {
                      var _b$_i = _b[_i];
                      t2 = _b$_i.option;
                      var _b$_i$addon = _b$_i.addon;
                      a2 = _b$_i$addon === void 0 ? t2 : _b$_i$addon;
                      var _b$_i$download = _b$_i.download;
                      o2 = _b$_i$download === void 0 ? Array.isArray(a2) ? t2 : a2 : _b$_i$download;
                      n2 = _b$_i.only;
                      n2 && i2 || t2 in e2.optionHandlers || !ae(a2, x) || s2.push(w[o2]);
                    }
                    return s2;
                  };
                  ae = function ae(e2, i2) {
                    return Array.isArray(e2) ? e2.some(function (e3) {
                      return i2.has(e3);
                    }) : i2.has(e2);
                  };
                  oe = function oe(e2) {
                    var _i3;
                    var i2 = [];
                    var t2;
                    var a2 = "function" == typeof window.CodeMirror;
                    var o2 = a2 ? window.CodeMirror : {
                      modes: {},
                      prototype: {},
                      commands: {},
                      optionHandlers: {},
                      helpers: {}
                    };
                    if (a2 || (i2.push(d.lib), h) || mw.loader.load("".concat(p, "/").concat(g, "/lib/codemirror.min.css"), "text/css"), "mediawiki" !== (e2 = "mediawiki" === e2 && k.config && k.config.tags.html ? "html" : e2) && "widget" !== e2 || o2.modes.mediawiki || (mw.loader.load("".concat(p, "/").concat(z, "/mediawiki.min.css"), "text/css"), i2.push(z + "/mediawiki.min.js")), "widget" === e2 || "html" === e2) for (var _i2 = 0, _arr = ["css", "javascript", "mediawiki", "htmlmixed", "xml"]; _i2 < _arr.length; _i2++) {
                      var n2 = _arr[_i2];
                      o2.modes[n2] || (i2 = i2.concat(d[n2]));
                    } else i2 = i2.concat(d[e2]);
                    return o2.prototype.getSearchCursor || !x.has("search") || x.has("wikiEditor") || i2.push(w.searchcursor), !o2.prototype.annotateScrollbar && "mediawiki" === e2 && x.has("lint") && i2.push(w.annotateScrollbar), o2.commands.find || !x.has("search") || x.has("wikiEditor") || i2.push(w.search), !window.wikiparse && "mediawiki" === e2 && x.has("lint") && i2.push(w.parser), !o2.optionHandlers.lint && "mediawiki" === e2 && x.has("lint") && (mw.loader.load("".concat(p, "/").concat(g, "/addon/lint/lint.min.css"), "text/css"), i2.push(w.lint)), o2.helpers.lint && o2.helpers.lint.mediawiki || "mediawiki" !== e2 || !x.has("lint") || i2.push(w.lintWikitext), x.has("wikiEditor") && ((t2 = mw.loader.getState("ext.wikiEditor")) ? "ready" !== t2 && i2.push(w.wikiEditor) : x["delete"]("wikiEditor")), "ready" !== mw.loader.getState("mediawiki.Title") && x.has("contextmenu") && i2.push(w.contextmenu), (_i3 = i2).push.apply(_i3, _toConsumableArray(te(o2))), ie(i2, a2 ? void 0 : h);
                  };
                  ne = function ne(e2) {
                    r[B] = {
                      config: e2,
                      time: Date.now()
                    }, c.setObject("InPageEditMwConfig", r);
                  };
                  E = function E(e2) {
                    return e2.flatMap(function (_ref8) {
                      var e3 = _ref8.aliases,
                        i2 = _ref8.name;
                      return e3.map(function (e4) {
                        return {
                          alias: e4,
                          name: i2
                        };
                      });
                    });
                  };
                  _ = function _(e2) {
                    return Object.fromEntries(e2.map(function (_ref9) {
                      var e3 = _ref9.alias,
                        i2 = _ref9.name;
                      return [e3.replace(/:$/, ""), i2];
                    }));
                  };
                  se = function se(e2) {
                    for (var _i4 = 0, _arr2 = ["indicator", "poem", "ref", "tabs", "tab", "poll"]; _i4 < _arr2.length; _i4++) {
                      var i2 = _arr2[_i4];
                      e2.tags[i2] && (e2.tagModes[i2] = "text/mediawiki");
                    }
                  };
                  re = /*#__PURE__*/function () {
                    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e2, i2) {
                      var e3, t2, _yield$mw$Api$get$que, a2, o2, n2, s2, r2, m2, d2, l2, _e3$functionSynonyms, c2, _iterator12, _step12, _step12$value, p2, g2, u2, w2;
                      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                        while (1) switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!("mediawiki" === e2 || "widget" === e2)) {
                              _context3.next = 21;
                              break;
                            }
                            _context3.t0 = h && f;
                            if (!_context3.t0) {
                              _context3.next = 5;
                              break;
                            }
                            _context3.next = 5;
                            return i2;
                          case 5:
                            e3 = mw.config.get("extCodeMirrorConfig");
                            e3 || f || !Z || (e3 = k.config, se(e3), mw.config.set("extCodeMirrorConfig", e3));
                            t2 = e3 && Object.values(e3.functionSynonyms[0]).indexOf(true) !== -1;
                            if (!(!(e3 && e3.redirect && e3.img && e3.variants) || t2)) {
                              _context3.next = 20;
                              break;
                            }
                            _context3.next = 11;
                            return new mw.Api().get({
                              meta: "siteinfo",
                              siprop: "general|magicwords" + (e3 && !t2 ? "" : "|extensiontags|functionhooks|variables"),
                              formatversion: 2
                            });
                          case 11:
                            _yield$mw$Api$get$que = _context3.sent["query"];
                            a2 = _yield$mw$Api$get$que.general.variants;
                            o2 = _yield$mw$Api$get$que.magicwords;
                            n2 = _yield$mw$Api$get$que.extensiontags;
                            s2 = _yield$mw$Api$get$que.functionhooks;
                            r2 = _yield$mw$Api$get$que.variables;
                            m2 = /* @__PURE__ */new Set(["msg", "raw", "msgnw", "subst", "safesubst"]);
                            if (e3 && !t2) {
                              _e3$functionSynonyms = _slicedToArray(e3["functionSynonyms"], 1), c2 = _e3$functionSynonyms[0];
                              if (!c2.subst) {
                                _iterator12 = _createForOfIteratorHelper(E(o2.filter(function (_ref11) {
                                  var e4 = _ref11.name;
                                  return m2.has(e4);
                                })));
                                try {
                                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                                    _step12$value = _step12.value;
                                    d2 = _step12$value.alias;
                                    l2 = _step12$value.name;
                                    c2[d2.replace(/:$/, "")] = l2;
                                  }
                                } catch (err) {
                                  _iterator12.e(err);
                                } finally {
                                  _iterator12.f();
                                }
                              }
                            } else {
                              e3 = {
                                tagModes: {
                                  pre: "mw-tag-pre",
                                  nowiki: "mw-tag-nowiki",
                                  ref: "text/mediawiki"
                                },
                                tags: Object.fromEntries(n2.map(function (e4) {
                                  return [e4.slice(1, -1), true];
                                })),
                                urlProtocols: mw.config.get("wgUrlProtocols")
                              };
                              p2 = /* @__PURE__ */new Set([].concat(_toConsumableArray(s2), _toConsumableArray(r2), _toConsumableArray(m2))), g2 = o2.filter(function (_ref12) {
                                var e4 = _ref12.name,
                                  i3 = _ref12.aliases;
                                return i3.some(function (e5) {
                                  return /^__(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+__$/.test(e5);
                                }) || p2.has(e4);
                              }), u2 = E(g2.filter(function (e4) {
                                return e4["case-sensitive"];
                              })), w2 = E(g2.filter(function (e4) {
                                return !e4["case-sensitive"];
                              })).map(function (_ref13) {
                                var e4 = _ref13.alias,
                                  i3 = _ref13.name;
                                return {
                                  alias: e4.toLowerCase(),
                                  name: i3
                                };
                              });
                              e3.doubleUnderscore = [_(w2.filter(function (_ref14) {
                                var e4 = _ref14.alias;
                                return /^__(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+__$/.test(e4);
                              })), _(u2.filter(function (_ref15) {
                                var e4 = _ref15.alias;
                                return /^__(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+__$/.test(e4);
                              }))], e3.functionSynonyms = [_(w2.filter(function (_ref16) {
                                var e4 = _ref16.alias;
                                return !/^__(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+__|^#$/.test(e4);
                              })), _(u2.filter(function (_ref17) {
                                var e4 = _ref17.alias;
                                return !/^__(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+__|^#$/.test(e4);
                              }))];
                            }
                            e3.redirect = o2.find(function (_ref18) {
                              var e4 = _ref18.name;
                              return "redirect" === e4;
                            }).aliases, e3.img = _(E(o2.filter(function (_ref19) {
                              var e4 = _ref19.name;
                              return e4.startsWith("img_");
                            }))), e3.variants = a2 ? a2.map(function (_ref20) {
                              var e4 = _ref20.code;
                              return e4;
                            }) : [], se(e3), mw.config.set("extCodeMirrorConfig", e3), ne(e3);
                          case 20:
                            return _context3.abrupt("return", e3);
                          case 21:
                          case "end":
                            return _context3.stop();
                        }
                      }, _callee3);
                    }));
                    return function re(_x3, _x4) {
                      return _ref10.apply(this, arguments);
                    };
                  }();
                  de = {
                    getContents: function getContents() {
                      return O.getValue();
                    },
                    setContents: function setContents(e2) {
                      return O.setValue(e2), this;
                    },
                    getSelection: function getSelection() {
                      return O.getSelection();
                    },
                    setSelection: function setSelection(e2) {
                      return O.setSelection(O.posFromIndex(e2.start), "end" in e2 ? O.posFromIndex(e2.end) : void 0), O.focus(), this;
                    },
                    replaceSelection: function replaceSelection(e2) {
                      return O.replaceSelection(e2), this;
                    },
                    getCaretPosition: function getCaretPosition(e2) {
                      var i2 = O.indexFromPos(O.getCursor("from")),
                        t2 = O.indexFromPos(O.getCursor("to"));
                      return e2.startAndEnd ? [i2, t2] : i2;
                    },
                    scrollToCaretPosition: function scrollToCaretPosition() {
                      return O.scrollIntoView(), this;
                    }
                  };
                  le = /*#__PURE__*/function () {
                    var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e2, i2) {
                      var n2, t2, _yield$Promise$all, _yield$Promise$all2, a2, o2, s2, r2, d2, l2;
                      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                        while (1) switch (_context4.prev = _context4.next) {
                          case 0:
                            if (!i2) {
                              _context4.next = 4;
                              break;
                            }
                            _context4.t0 = "javascript";
                            _context4.next = 27;
                            break;
                          case 4:
                            if (!N.endsWith("/doc")) {
                              _context4.next = 8;
                              break;
                            }
                            _context4.t1 = "mediawiki";
                            _context4.next = 24;
                            break;
                          case 8:
                            if (!(274 !== u && 828 !== u)) {
                              _context4.next = 12;
                              break;
                            }
                            _context4.t2 = R[U];
                            _context4.next = 23;
                            break;
                          case 12:
                            o2 = 274 === u ? "Widget" : "Lua";
                            _context4.next = 15;
                            return mw.loader.using(["oojs-ui-windows", "oojs-ui.styles.icons-content"]);
                          case 15:
                            _context4.next = 17;
                            return OO.ui.confirm(m("contentmodel"), {
                              actions: [{
                                label: o2
                              }, {
                                label: "Wikitext",
                                action: "accept"
                              }]
                            });
                          case 17:
                            if (!_context4.sent) {
                              _context4.next = 21;
                              break;
                            }
                            _context4.t3 = "mediawiki";
                            _context4.next = 22;
                            break;
                          case 21:
                            _context4.t3 = o2.toLowerCase();
                          case 22:
                            _context4.t2 = _context4.t3;
                          case 23:
                            _context4.t1 = _context4.t2;
                          case 24:
                            _context4.next = 26;
                            return _context4.t1;
                          case 26:
                            _context4.t0 = _context4.sent;
                          case 27:
                            n2 = _context4.t0;
                            t2 = oe(n2);
                            _context4.next = 31;
                            return Promise.all([re(n2, t2), t2]);
                          case 31:
                            _yield$Promise$all = _context4.sent;
                            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 1);
                            a2 = _yield$Promise$all2[0];
                            if (!i2 && x.has("wikiEditor")) try {
                              "function" == typeof mw.addWikiEditor ? mw.addWikiEditor(e2) : (d2 = $["wikiEditor"].modules.dialogs.config, e2.wikiEditor("addModule", _objectSpread(_objectSpread({}, $.wikiEditor.modules.toolbar.config.getDefaultConfig()), d2.getDefaultConfig())), d2.replaceIcons(e2));
                            } catch (e3) {
                              x["delete"]("wikiEditor"), mw.notify("WikiEditor工具栏加载失败。", {
                                type: "error"
                              }), console.error(e3);
                            }
                            if (!("mediawiki" === n2 && a2.tags.html)) {
                              _context4.next = 41;
                              break;
                            }
                            a2.tagModes.html = "htmlmixed";
                            _context4.next = 39;
                            return oe("html");
                          case 39:
                            _context4.next = 42;
                            break;
                          case 41:
                            "widget" !== n2 || CodeMirror.mimeModes.widget || CodeMirror.defineMIME("widget", {
                              name: "htmlmixed",
                              tags: {
                                noinclude: [[null, null, "mediawiki"]]
                              }
                            });
                          case 42:
                            o2 = e2.height();
                            O && O.toTextArea();
                            s2 = i2 || "json" === U;
                            (O = CodeMirror.fromTextArea(e2[0], $.extend({
                              inputStyle: "contenteditable",
                              lineNumbers: !/Android\b/.test(navigator.userAgent),
                              lineWrapping: true,
                              mode: n2,
                              mwConfig: a2,
                              json: s2
                            }, Object.fromEntries(b.map(function (_ref22) {
                              var e3 = _ref22.option,
                                _ref22$addon = _ref22.addon,
                                i3 = _ref22$addon === void 0 ? e3 : _ref22$addon,
                                t3 = _ref22.modes,
                                _ref22$complex = _ref22.complex,
                                a3 = _ref22$complex === void 0 ? function (e4) {
                                  return !t3 || t3.has(e4);
                                } : _ref22$complex;
                              var o3 = Array.isArray(i3) ? i3[0] : i3;
                              return [e3, x.has(o3) && a3(n2, s2)];
                            })), "mediawiki" === n2 ? {
                              extraKeys: x.has("escape") && X(CodeMirror)
                            } : {
                              indentUnit: x.has("indentWithSpace") ? y : 4,
                              indentWithTabs: !x.has("indentWithSpace")
                            }))).setSize(null, o2), O.getWrapperElement().id = "Wikiplus-CodeMirror", $.fn.textSelection && e2.textSelection("register", de);
                            d2 = v(CodeMirror) ? "Ctrl" : "Cmd";
                            if (x.has("wikiEditor")) {
                              l2 = e2.data("wikiEditorContext");
                              O.addKeyMap(_defineProperty({}, d2 + "-F", function () {
                                $.wikiEditor.modules.dialogs.api.openDialog(l2, "search-and-replace");
                              }));
                            }
                            j(O, n2), $("#Wikiplus-Quickedit-Jump").children("a").attr("href", "#Wikiplus-CodeMirror"), i2 || (r2 = (r2 = c.getObject("Wikiplus_Settings")) && r2.esc_to_exit_quickedit || r2.escToExitQuickEdit, O.addKeyMap($.extend(_defineProperty(_defineProperty({}, d2 + "-S", function () {
                              $("#Wikiplus-Quickedit-Submit").triggerHandler("click");
                            }), "Shift-".concat(d2, "-S"), function ShiftS() {
                              $("#Wikiplus-Quickedit-MinorEdit").click(), $("#Wikiplus-Quickedit-Submit").triggerHandler("click");
                            }), true === r2 || "true" === r2 ? {
                              Esc: function Esc() {
                                $("#Wikiplus-Quickedit-Back").triggerHandler("click");
                              }
                            } : {}))), O.refresh(), mw.hook("wiki-codemirror").fire(O);
                          case 49:
                          case "end":
                            return _context4.stop();
                        }
                      }, _callee4);
                    }));
                    return function le(_x5, _x6) {
                      return _ref21.apply(this, arguments);
                    };
                  }();
                  ce = document["body"];
                  me = (new MutationObserver(function (e2) {
                    var i2 = $(e2.flatMap(function (_ref23) {
                      var e3 = _ref23.addedNodes;
                      return _toConsumableArray(e3);
                    })).find("#Wikiplus-Quickedit, #Wikiplus-Setting-Input");
                    0 < i2.length && le(i2, "Wikiplus-Setting-Input" === i2.attr("id"));
                  }).observe(ce, {
                    childList: true
                  }), $(ce).on("keydown.wphl", ".ui-dialog", function (e2) {
                    var i2;
                    "Escape" === e2.key && (i2 = $(this).children(".ui-dialog-content").data("context")) && i2.$textarea && "Wikiplus-Quickedit" === i2.$textarea.attr("id") && e2.stopPropagation();
                  }), function (e2) {
                    return "Wikiplus-Quickedit" === e2.id || "Wikiplus-Setting-Input" === e2.id;
                  });
                  $.valHooks.textarea = {
                    get: function get(e2) {
                      return me(e2) && O ? O.getValue() : e2.value;
                    },
                    set: function set(e2, i2) {
                      me(e2) && O ? O.setValue(i2) : e2.value = i2;
                    }
                  };
                  _context8.next = 60;
                  return t;
                case 60:
                  we = function we() {
                    var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _toConsumableArray(x);
                    P.toggle(e2.indexOf("indentWithSpace") !== -1);
                  };
                  t = $(mw.util.addPortletLink({
                    minerva: "page-actions-overflow",
                    moeskin: "ca-more-actions"
                  }[n] || "p-cactions", "#", m("portlet"), "wphl-settings")).click( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                    var e2, _iterator13, _step13, i2;
                    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                        case 0:
                          if (!T) {
                            _context5.next = 4;
                            break;
                          }
                          A.setValue(_toConsumableArray(x)), I.setValue(y);
                          _context5.next = 15;
                          break;
                        case 4:
                          _context5.next = 6;
                          return mw.loader.using(["oojs-ui-windows", "oojs-ui.styles.icons-content"]);
                        case 6:
                          T = new OO.ui.MessageDialog({
                            id: "Wikiplus-highlight-dialog"
                          });
                          e2 = ((e2 = new OO.ui.WindowManager()).$element.appendTo(ce), e2.addWindows([T]), A = new OO.ui.CheckboxMultiselectInputWidget({
                            options: [].concat(_toConsumableArray(b.map(function (_ref25) {
                              var e3 = _ref25.option,
                                _ref25$addon = _ref25.addon,
                                i2 = _ref25$addon === void 0 ? e3 : _ref25$addon;
                              var t2 = Array.isArray(i2) ? i2[0] : i2;
                              return {
                                data: t2,
                                label: a("addon-" + t2.toLowerCase())
                              };
                            })), _toConsumableArray(["wikiEditor", "escape", "contextmenu", "lint", "indentWithSpace", "otherEditors"].map(function (e3) {
                              return {
                                data: e3,
                                label: a("addon-" + e3.toLowerCase())
                              };
                            }))),
                            value: _toConsumableArray(x)
                          }).on("change", we))["checkboxMultiselectWidget"];
                          pe = e2.findItemFromData("search");
                          ge = e2.findItemFromData("wikiEditor");
                          I = new OO.ui.NumberInputWidget({
                            min: 0,
                            value: y
                          });
                          ue = new OO.ui.FieldLayout(A, {
                            label: m("addon-label"),
                            notices: [m("addon-notice")],
                            align: "top"
                          });
                          P = new OO.ui.FieldLayout(I, {
                            label: m("addon-indent")
                          });
                          we();
                          Object.assign(mw.libs.wphl, {
                            widget: A,
                            indentWidget: I
                          });
                        case 15:
                          e2 = "object" == _typeof(window.Wikiplus) || "object" == _typeof(window._WikiplusPages);
                          pe.setDisabled(!e2);
                          ge.setDisabled(!e2 || !mw.loader.getState("ext.wikiEditor"));
                          _context5.next = 20;
                          return T.open({
                            title: m("addon-title"),
                            message: ue.$element.add(P.$element).add($("<p>", {
                              html: m("feedback")
                            })),
                            actions: [{
                              action: "reject",
                              label: mw.msg("ooui-dialog-message-reject")
                            }, {
                              action: "accept",
                              label: mw.msg("ooui-dialog-message-accept"),
                              flags: "progressive"
                            }],
                            size: "en" === M || "minerva" === n ? "medium" : "small"
                          }).closing;
                        case 20:
                          e2 = _context5.sent;
                          if (ue.$element.detach(), P.$element.detach(), "object" == _typeof(e2) && "accept" === e2.action) {
                            e2 = A.getValue();
                            x.clear();
                            _iterator13 = _createForOfIteratorHelper(e2);
                            try {
                              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                                i2 = _step13.value;
                                x.add(i2);
                              }
                            } catch (err) {
                              _iterator13.e(err);
                            } finally {
                              _iterator13.f();
                            }
                            y = Number(I.getValue()), c.setObject("Wikiplus-highlight-addons", e2), c.setObject("Wikiplus-highlight-indent", y);
                          }
                        case 22:
                        case "end":
                          return _context5.stop();
                      }
                    }, _callee5);
                  })));
                  "minerva" === n && t.find(".mw-ui-icon").addClass("mw-ui-icon-minerva-settings"), "function" == typeof S && S().find("#wphl-settings-notify").click(function (e2) {
                    e2.preventDefault(), $("#wphl-settings").triggerHandler("click");
                  });
                  L = /*#__PURE__*/function () {
                    var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e2) {
                      var i2, t2, a2, _CodeMirror, o2, n2, s2, _iterator14, _step14, _loop4;
                      return _regeneratorRuntime().wrap(function _callee6$(_context7) {
                        while (1) switch (_context7.prev = _context7.next) {
                          case 0:
                            if (!x.has("otherEditors")) {
                              _context7.next = 28;
                              break;
                            }
                            i2 = "text/mediawiki" === (i2 = e2.getOption("mode")) ? "mediawiki" : i2;
                            t2 = te(CodeMirror, true);
                            a2 = e2.getOption("json");
                            _CodeMirror = CodeMirror, o2 = _CodeMirror.prototype, n2 = _CodeMirror.optionHandlers, s2 = _CodeMirror.helpers.lint;
                            !o2.annotateScrollbar && "mediawiki" === i2 && x.has("lint") && t2.push(w.annotateScrollbar);
                            !window.wikiparse && "mediawiki" === i2 && x.has("lint") && t2.push(w.parser);
                            !n2.lint && "mediawiki" === i2 && x.has("lint") && (mw.loader.load("".concat(p, "/").concat(g, "/addon/lint/lint.min.css"), "text/css"), t2.push(w.lint));
                            s2 && s2.mediawiki || "mediawiki" !== i2 || !x.has("lint") || t2.push(w.lintWikitext);
                            _context7.next = 11;
                            return ie(t2);
                          case 11:
                            _iterator14 = _createForOfIteratorHelper(b.filter(function (_ref27) {
                              var e3 = _ref27.only;
                              return !e3;
                            }));
                            _context7.prev = 12;
                            _loop4 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop4() {
                              var _step14$value, d2, _step14$value$addon, l2, c2, _step14$value$complex, m2, r2;
                              return _regeneratorRuntime().wrap(function _loop4$(_context6) {
                                while (1) switch (_context6.prev = _context6.next) {
                                  case 0:
                                    _step14$value = _step14.value, d2 = _step14$value.option, _step14$value$addon = _step14$value.addon, l2 = _step14$value$addon === void 0 ? d2 : _step14$value$addon, c2 = _step14$value.modes, _step14$value$complex = _step14$value.complex, m2 = _step14$value$complex === void 0 ? function (e3) {
                                      return !c2 || c2.has(e3);
                                    } : _step14$value$complex;
                                    r2 = Array.isArray(l2) ? l2[0] : l2;
                                    void 0 === e2.getOption(d2) && x.has(r2) && e2.setOption(d2, m2(i2, a2));
                                  case 3:
                                  case "end":
                                    return _context6.stop();
                                }
                              }, _loop4);
                            });
                            _iterator14.s();
                          case 15:
                            if ((_step14 = _iterator14.n()).done) {
                              _context7.next = 19;
                              break;
                            }
                            return _context7.delegateYield(_loop4(), "t0", 17);
                          case 17:
                            _context7.next = 15;
                            break;
                          case 19:
                            _context7.next = 24;
                            break;
                          case 21:
                            _context7.prev = 21;
                            _context7.t1 = _context7["catch"](12);
                            _iterator14.e(_context7.t1);
                          case 24:
                            _context7.prev = 24;
                            _iterator14.f();
                            return _context7.finish(24);
                          case 27:
                            "mediawiki" === i2 && x.has("escape") ? e2.addKeyMap(X(CodeMirror), true) : "mediawiki" !== i2 && x.has("indentWithSpace") && (e2.setOption("indentUnit", y), e2.setOption("indentWithTabs", false)), j(e2, i2);
                          case 28:
                          case "end":
                            return _context7.stop();
                        }
                      }, _callee6, null, [[12, 21, 24, 27]]);
                    }));
                    return function L(_x7) {
                      return _ref26.apply(this, arguments);
                    };
                  }();
                  mw.hook("InPageEdit.quickEdit.codemirror").add(function (_ref28) {
                    var e2 = _ref28.cm;
                    return L(e2);
                  }), mw.hook("inspector").add(function (e2) {
                    return L(e2);
                  }), mw.hook("wiki-codemirror").add(function (e2) {
                    e2.getTextArea && me(e2.getTextArea()) || L(e2);
                  }), mw.loader.load(p + "/".concat(o, "/styles.min.css"), "text/css"), Object.assign(mw.libs.wphl, {
                    version: i,
                    options: b,
                    addons: x,
                    i18n: C,
                    i18nLang: M,
                    storage: c,
                    $portlet: t,
                    CDN: p,
                    PARSER_CDN: D,
                    USING_LOCAL: h,
                    MODE_LIST: d,
                    ADDON_LIST: w,
                    msg: m,
                    htmlMsg: a,
                    escapeHTML: K,
                    handleContextMenu: j,
                    setI18N: e,
                    getAddonScript: te,
                    updateCachedConfig: ne,
                    getMwConfig: re,
                    renderEditor: le,
                    handleOtherEditors: L,
                    isPc: v
                  });
                case 65:
                case "end":
                  return _context8.stop();
              }
            }, _callee7);
          }))();
        }
      });
    
      // src/Wikiplus/Wikiplus.js
      (function () {
        if (!(mw.config.get("wgAction") === "view" && mw.config.get("wgIsArticle"))) {
          return;
        }
        Promise.resolve().then(function () {
          return init_core();
        });
        if (!("ontouchstart" in document) && mw.user.options.get("gadget-Wikiplus-highlight")) {
          Promise.resolve().then(function () {
            return init_highlight();
          });
        }
      })();
    })();
    /*! Wikiplus - 4.0.11 | Eridanus Sora (妹空酱) | CC-BY-SA-4.0 <qwbk.cc/H:CC-BY-SA-4.0> */
    /*! Wikiplus-highlight | Bhsd, 机智的小鱼君 | GPL-3.0 <qwbk.cc/H:GPL-3.0> */
    
    })();
    /* </nowiki> */