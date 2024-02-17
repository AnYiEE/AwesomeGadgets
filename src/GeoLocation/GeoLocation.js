/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/GeoLocation>
 * @dependency ext.gadget.Geo, ext.gadget.i18n, mediawiki.api, mediawiki.Title
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
(function () {
  var _geoLocation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var i18nMessages, messages, message, _yield$Geo, countryOrArea, region, countryOrAreaList, regionList, _countryOrAreaList, _regionList, getcountryOrAreaName, getRegionName, scriptPath, getLocation, storeLocation, wgRelevantUserName, relevantUserPageName, pageName;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          i18nMessages = function i18nMessages() {
            var _i18n = i18n,
              localize = _i18n.localize;
            return {
              ':': localize({
                en: ': ',
                ja: '：',
                zh: '：'
              }),
              Bot: localize({
                en: 'Bot',
                ja: 'ボット',
                'zh-hans': '机器人',
                'zh-hant': '機械人'
              }),
              Unknown: localize({
                en: 'Unknown',
                ja: '未知',
                zh: '未知'
              }),
              Webmaster: localize({
                en: 'Webmaster',
                ja: 'ウェブマスター',
                'zh-hans': '站长',
                'zh-hant': '站長'
              }),
              Location: localize({
                en: 'IP Location',
                ja: 'IP地域',
                'zh-hans': 'IP属地',
                'zh-hant': 'IP屬地'
              }),
              Update: localize({
                en: 'Update IP location information',
                ja: 'IP地域の情報を更新',
                'zh-hans': '更新IP属地信息',
                'zh-hant': '更新IP屬地資訊'
              })
            };
          };
          messages = i18nMessages();
          message = function message(key) {
            return messages[key] || key;
          };
          _context3.next = 5;
          return Geo();
        case 5:
          _yield$Geo = _context3.sent;
          countryOrArea = _yield$Geo.countryOrArea;
          region = _yield$Geo.region;
          countryOrAreaList = function countryOrAreaList() {
            return {
              AF: '阿富汗',
              AX: '奥兰',
              AL: '阿尔巴尼亚',
              DZ: '阿尔及利亚',
              AS: '美属萨摩亚',
              AD: '安道尔',
              AO: '安哥拉',
              AI: '安圭拉',
              AQ: '南极洲',
              AG: '安提瓜和巴布达',
              AR: '阿根廷',
              AM: '亚美尼亚',
              AW: '阿鲁巴',
              AU: '澳大利亚',
              AT: '奥地利',
              AZ: '阿塞拜疆',
              BS: '巴哈马',
              BH: '巴林',
              BD: '孟加拉国',
              BB: '巴巴多斯',
              BY: '白俄罗斯',
              BE: '比利时',
              BZ: '伯利兹',
              BJ: '贝宁',
              BM: '百慕大',
              BT: '不丹',
              BO: '玻利维亚',
              BQ: '荷兰加勒比区',
              BA: '波黑',
              BW: '博茨瓦纳',
              BV: '布韦岛',
              BR: '巴西',
              IO: '英属印度洋领地',
              BN: '文莱',
              BG: '保加利亚',
              BF: '布基纳法索',
              BI: '布隆迪',
              CV: '佛得角',
              KH: '柬埔寨',
              CM: '喀麦隆',
              CA: '加拿大',
              KY: '开曼群岛',
              CF: '中非',
              TD: '乍得',
              CL: '智利',
              CN: '中国',
              CX: '圣诞岛',
              CC: '科科斯（基林）群岛',
              CO: '哥伦比亚',
              KM: '科摩罗',
              CG: '刚果共和国',
              CD: '刚果民主共和国',
              CK: '库克群岛',
              CR: '哥斯达黎加',
              CI: '科特迪瓦',
              HR: '克罗地亚',
              CU: '古巴',
              CW: '库拉索',
              CY: '塞浦路斯',
              CZ: '捷克',
              DK: '丹麦',
              DJ: '吉布提',
              DM: '多米尼克',
              DO: '多米尼加',
              EC: '厄瓜多尔',
              EG: '埃及',
              SV: '萨尔瓦多',
              GQ: '赤道几内亚',
              ER: '厄立特里亚',
              EE: '爱沙尼亚',
              SZ: '斯威士兰',
              ET: '埃塞俄比亚',
              FK: '福克兰群岛',
              FO: '法罗群岛',
              FJ: '斐济',
              FI: '芬兰',
              FR: '法国',
              GF: '法属圭亚那',
              PF: '法属波利尼西亚',
              TF: '法属南部和南极领地',
              GA: '加蓬',
              GM: '冈比亚',
              GE: '格鲁吉亚',
              DE: '德国',
              GH: '加纳',
              GI: '直布罗陀',
              GR: '希腊',
              GL: '格陵兰',
              GD: '格林纳达',
              GP: '瓜德罗普',
              GU: '关岛',
              GT: '危地马拉',
              GG: '根西',
              GN: '几内亚',
              GW: '几内亚比绍',
              GY: '圭亚那',
              HT: '海地',
              HM: '赫德岛和麦克唐纳群岛',
              VA: '梵蒂冈',
              HN: '洪都拉斯',
              HK: '中国·香港',
              HU: '匈牙利',
              IS: '冰岛',
              IN: '印度',
              ID: '印尼',
              IR: '伊朗',
              IQ: '伊拉克',
              IE: '爱尔兰',
              IM: '马恩岛',
              IL: '以色列',
              IT: '意大利',
              JM: '牙买加',
              JP: '日本',
              JE: '泽西',
              JO: '约旦',
              KZ: '哈萨克斯坦',
              KE: '肯尼亚',
              KI: '基里巴斯',
              KP: '朝鲜',
              KR: '韩国',
              KW: '科威特',
              KG: '吉尔吉斯斯坦',
              LA: '老挝',
              LV: '拉脱维亚',
              LB: '黎巴嫩',
              LS: '莱索托',
              LR: '利比里亚',
              LY: '利比亚',
              LI: '列支敦士登',
              LT: '立陶宛',
              LU: '卢森堡',
              MO: '中国·澳门',
              MG: '马达加斯加',
              MW: '马拉维',
              MY: '马来西亚',
              MV: '马尔代夫',
              ML: '马里',
              MT: '马耳他',
              MH: '马绍尔群岛',
              MQ: '马提尼克',
              MR: '毛里塔尼亚',
              MU: '毛里求斯',
              YT: '马约特',
              MX: '墨西哥',
              FM: '密克罗尼西亚联邦',
              MD: '摩尔多瓦',
              MC: '摩纳哥',
              MN: '蒙古',
              ME: '黑山',
              MS: '蒙特塞拉特',
              MA: '摩洛哥',
              MZ: '莫桑比克',
              MM: '缅甸',
              NA: '纳米比亚',
              NR: '瑙鲁',
              NP: '尼泊尔',
              NL: '荷兰',
              NC: '新喀里多尼亚',
              NZ: '新西兰',
              NI: '尼加拉瓜',
              NE: '尼日尔',
              NG: '尼日利亚',
              NU: '纽埃',
              NF: '诺福克岛',
              MK: '北马其顿',
              MP: '北马里亚纳群岛',
              NO: '挪威',
              OM: '阿曼',
              PK: '巴基斯坦',
              PW: '帕劳',
              PS: '巴勒斯坦',
              PA: '巴拿马',
              PG: '巴布亚新几内亚',
              PY: '巴拉圭',
              PE: '秘鲁',
              PH: '菲律宾',
              PN: '皮特凯恩群岛',
              PL: '波兰',
              PT: '葡萄牙',
              PR: '波多黎各',
              QA: '卡塔尔',
              RE: '留尼汪',
              RO: '罗马尼亚',
              RU: '俄罗斯',
              RW: '卢旺达',
              BL: '圣巴泰勒米',
              SH: '圣赫勒拿、阿森松和特里斯坦-达库尼亚',
              KN: '圣基茨和尼维斯',
              LC: '圣卢西亚',
              MF: '法属圣马丁',
              PM: '圣皮埃尔和密克隆',
              VC: '圣文森特和格林纳丁斯',
              WS: '萨摩亚',
              SM: '圣马力诺',
              ST: '圣多美和普林西比',
              SA: '沙特阿拉伯',
              SN: '塞内加尔',
              RS: '塞尔维亚',
              SC: '塞舌尔',
              SL: '塞拉利昂',
              SG: '新加坡',
              SX: '荷属圣马丁',
              SK: '斯洛伐克',
              SI: '斯洛文尼亚',
              SB: '所罗门群岛',
              SO: '索马里',
              ZA: '南非',
              GS: '南乔治亚和南桑威奇群岛',
              SS: '南苏丹',
              ES: '西班牙',
              LK: '斯里兰卡',
              SD: '苏丹',
              SR: '苏里南',
              SJ: '斯瓦尔巴和扬马延',
              SE: '瑞典',
              CH: '瑞士',
              SY: '叙利亚',
              TW: '中国·台湾',
              TJ: '塔吉克斯坦',
              TZ: '坦桑尼亚',
              TH: '泰国',
              TL: '东帝汶',
              TG: '多哥',
              TK: '托克劳',
              TO: '汤加',
              TT: '特立尼达和多巴哥',
              TN: '突尼斯',
              TR: '土耳其',
              TM: '土库曼斯坦',
              TC: '特克斯和凯科斯群岛',
              TV: '图瓦卢',
              UG: '乌干达',
              UA: '乌克兰',
              AE: '阿联酋',
              GB: '英国',
              US: '美国',
              UM: '美国本土外小岛屿',
              UY: '乌拉圭',
              UZ: '乌兹别克斯坦',
              VU: '瓦努阿图',
              VE: '委内瑞拉',
              VN: '越南',
              VG: '英属维尔京群岛',
              VI: '美属维尔京群岛',
              WF: '瓦利斯和富图纳',
              EH: '西撒哈拉',
              YE: '也门',
              ZM: '赞比亚',
              ZW: '津巴布韦'
            };
          };
          regionList = function regionList() {
            return {
              AH: '·徽',
              BJ: '·京',
              CQ: '·渝',
              FJ: '·闽',
              GD: '·粤',
              GS: '·甘',
              GX: '·桂',
              GZ: '·贵',
              HA: '·豫',
              HB: '·鄂',
              HE: '·冀',
              HI: '·琼',
              HL: '·黑',
              HN: '·湘',
              JL: '·吉',
              JS: '·苏',
              JX: '·赣',
              LN: '·辽',
              NM: '·内蒙古',
              NX: '·宁',
              QH: '·青',
              SC: '·川',
              SD: '·鲁',
              SH: '·沪',
              SN: '·陕',
              SX: '·晋',
              TJ: '·津',
              XJ: '·新',
              XZ: '·藏',
              YN: '·云',
              ZJ: '·浙'
            };
          };
          _countryOrAreaList = countryOrAreaList();
          _regionList = regionList();
          getcountryOrAreaName = function getcountryOrAreaName(key) {
            return _countryOrAreaList[key] || key;
          };
          getRegionName = function getRegionName(key) {
            return _regionList[key] || key;
          };
          scriptPath = mw.config.get('wgScriptPath');
          getLocation = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var IPGeolocationDesc, appendIcon, getUserGeoIP, response, _response$query$users, groups;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    IPGeolocationDesc = message('Location');
                    appendIcon = function appendIcon(indicatorText, spanClass, icon) {
                      var $indicator = $('<div>').addClass("mw-indicator mw-indicator-geolocation mw-geolocation-".concat(spanClass)).attr('id', 'mw-indicator-geolocation').append($('<span>').addClass("mw-geolocation-filter-".concat(spanClass, " mw-geolocation-icon mw-geolocation-icon-").concat(icon !== null && icon !== void 0 ? icon : 'globe')).attr({
                        alt: indicatorText !== null && indicatorText !== void 0 ? indicatorText : IPGeolocationDesc,
                        title: indicatorText !== null && indicatorText !== void 0 ? indicatorText : IPGeolocationDesc
                      })).append($('<span>').addClass('mw-geolocation-text').text(indicatorText));
                      $(function () {
                        $indicator.appendTo($('.mw-indicators'));
                      });
                    };
                    getUserGeoIP = function getUserGeoIP() {
                      $.getJSON(mw.util.getUrl("User:".concat(mw.config.get('wgRelevantUserName'), "/GeoIP.json"), {
                        action: 'raw',
                        ctype: 'application/json'
                      })).done(function (response) {
                        var _getcountryOrAreaName, _getRegionName;
                        var countryOrAreaText = (_getcountryOrAreaName = getcountryOrAreaName(response.countryOrArea)) !== null && _getcountryOrAreaName !== void 0 ? _getcountryOrAreaName : '未知';
                        var regionText = response.countryOrArea === 'CN' ? (_getRegionName = getRegionName(response.region)) !== null && _getRegionName !== void 0 ? _getRegionName : '' : '';
                        var indicatorText = "".concat(IPGeolocationDesc).concat(message(':')).concat(countryOrAreaText).concat(regionText);
                        var spanClass = 'green';
                        appendIcon(indicatorText, spanClass, 'globe');
                      }).fail(function () {
                        var indicatorText = "".concat(IPGeolocationDesc).concat(message(':')).concat(message('Unknown'));
                        var spanClass = 'orange';
                        appendIcon(indicatorText, spanClass, 'helpNotice');
                      });
                    };
                    _context.prev = 3;
                    _context.next = 6;
                    return $.get("".concat(scriptPath, "/api.php"), {
                      action: 'query',
                      format: 'json',
                      formatversion: '2',
                      list: 'users',
                      ususers: mw.config.get('wgRelevantUserName'),
                      usprop: 'groups'
                    });
                  case 6:
                    response = _context.sent;
                    _response$query$users = _slicedToArray(response['query'].users, 1), groups = _response$query$users[0].groups;
                    if ((groups.indexOf('autoconfirmed') !== -1 || groups.indexOf('confirmed') !== -1) && !(groups.indexOf('bot') !== -1)) {
                      getUserGeoIP();
                    } else if (groups.indexOf('bot') !== -1) {
                      appendIcon(message('Bot'), 'blue', 'settings');
                    } else if (groups.indexOf('qiuwen') !== -1) {
                      appendIcon(message('Webmaster'), 'blue', 'userAvatar');
                    }
                    _context.next = 13;
                    break;
                  case 11:
                    _context.prev = 11;
                    _context.t0 = _context["catch"](3);
                  case 13:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[3, 11]]);
            }));
            return function getLocation() {
              return _ref.apply(this, arguments);
            };
          }();
          storeLocation = /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _mw$config$get;
              var wgUserGroups, response;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    wgUserGroups = (_mw$config$get = mw.config.get('wgUserGroups')) !== null && _mw$config$get !== void 0 ? _mw$config$get : [];
                    if (!(countryOrArea === '' || wgUserGroups.indexOf('bot') !== -1 || wgUserGroups.indexOf('qiuwen') !== -1 || !mw.config.get('wgUserName') || !(wgUserGroups.indexOf('autoconfirmed') !== -1 || wgUserGroups.indexOf('confirmed') !== -1))) {
                      _context2.next = 3;
                      break;
                    }
                    return _context2.abrupt("return");
                  case 3:
                    _context2.prev = 3;
                    _context2.next = 6;
                    return $.getJSON(mw.util.getUrl("User:".concat(mw.config.get('wgRelevantUserName'), "/GeoIP.json"), {
                      action: 'raw',
                      ctype: 'application/json'
                    }));
                  case 6:
                    response = _context2.sent;
                    if (!(response.countryOrArea === countryOrArea && (response.region === region || response.region !== '' && region === ''))) {
                      _context2.next = 9;
                      break;
                    }
                    return _context2.abrupt("return");
                  case 9:
                    _context2.next = 13;
                    break;
                  case 11:
                    _context2.prev = 11;
                    _context2.t0 = _context2["catch"](3);
                  case 13:
                    _context2.prev = 13;
                    _context2.next = 16;
                    return $.post("".concat(scriptPath, "/api.php"), {
                      action: 'edit',
                      format: 'json',
                      formatversion: '2',
                      contentformat: 'application/json',
                      contentmodel: 'json',
                      title: "User:".concat(mw.config.get('wgUserName'), "/GeoIP.json"),
                      text: "{\"countryOrArea\":\"".concat(countryOrArea, "\",\"region\":\"").concat(region, "\"}"),
                      summary: message('Update'),
                      tags: 'GeoLocation',
                      minor: 1,
                      recreate: 1,
                      watchlist: 'unwatch',
                      token: mw.user.tokens.get('csrfToken')
                    });
                  case 16:
                    _context2.next = 20;
                    break;
                  case 18:
                    _context2.prev = 18;
                    _context2.t1 = _context2["catch"](13);
                  case 20:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, null, [[3, 11], [13, 18]]);
            }));
            return function storeLocation() {
              return _ref2.apply(this, arguments);
            };
          }();
          _context3.next = 19;
          return storeLocation();
        case 19:
          wgRelevantUserName = mw.config.get('wgRelevantUserName');
          if (wgRelevantUserName && mw.config.get('wgNamespaceNumber') === 2 && mw.config.get('wgAction') === 'view') {
            relevantUserPageName = new mw.Title(wgRelevantUserName, 2).toText();
            pageName = new mw.Title(mw.config.get('wgPageName')).toText();
            if (relevantUserPageName === pageName) {
              getLocation();
            }
          }
        case 21:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  function geoLocation() {
    return _geoLocation.apply(this, arguments);
  }
  return geoLocation;
})()();
/* </nowiki> */
