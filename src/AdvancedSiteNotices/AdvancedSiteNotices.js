/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://zh.wikipedia.org/wiki/MediaWiki:Gadget-AdvancedSiteNotices.css>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/AdvancedSiteNotices>
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
$( /*#__PURE__*/function () {
  var _advancedSiteNotices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var $siteNotice, i18nMessages, messages, message, STORAGE_KEY, asnVersion, asnVersionLast, $asnList, asnTimer, asnStyles, $asnArea, $asnDismiss, $asnDismissableNotices, $asnName, $currentNotice, testCriteria, matchCriteria, loadNotices, _response$parse, api, response, $notices;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          $siteNotice = $('#siteNotice');
          if (!(['edit', 'submit'].indexOf(mw.config.get('wgAction')) !== -1 || !$siteNotice.length)) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return");
        case 3:
          i18nMessages = function i18nMessages() {
            var _i18n = i18n,
              localize = _i18n.localize;
            return {
              announcement: localize({
                ja: '通知',
                zh: '公告'
              }),
              dismiss: localize({
                en: 'turn off this notice',
                ja: 'ASNをオフにする',
                'zh-hans': '关闭公告',
                'zh-hant': '關閉公告'
              }),
              dismissNotice: localize({
                en: 'You have chosen to turn off Advanced Site Notices for the next 30 days. <br>If the site-wide announcement is not updated within the next 30 days, it will no longer be displayed; however, if the site-wide announcement is updated, it will be displayed again.',
                ja: '今後30日間、ASNをオフにすることを選択しました。<br>サイト全体の通知が今後30日以内に更新されない場合、表示されなくなります。ただし、サイト全体の通知が更新される場合は、再び表示されます。',
                'zh-hans': '您已选择在接下来30日内关闭“高级站点通告”。<br>若接下来30日内全站公告未有更新，则不再显示；但是，若全站公告内容更新，则将重新显示。',
                'zh-hant': '您已選擇在接下來30日內關閉「高級站點通告」。<br>若接下來30日內全站公告未有更新，則不再顯示；但是，若全站公告內容更新，則將重新顯示。'
              })
            };
          };
          messages = i18nMessages();
          message = function message(key) {
            return messages[key] || key;
          };
          STORAGE_KEY = 'dismissASN';
          asnVersion = '0';
          asnVersionLast = mw.storage.get(STORAGE_KEY);
          asnStyles = [];
          $asnArea = $('<div>').attr('id', 'asn-area');
          $asnDismiss = $('<div>').attr('id', 'asn-dismiss').append($('<a>').attr({
            href: '#',
            role: 'button',
            title: message('dismiss'),
            'aria-label': message('dismiss')
          }).text('×'));
          $asnDismissableNotices = $('<div>').addClass('noprint').attr('id', 'asn-dismissable-notice');
          $asnName = $('<div>').attr('id', 'asn-name').text(message('announcement'));
          $currentNotice = $('<div>').attr('id', 'advancedSiteNotices').addClass('center');
          $asnArea.append($asnName, $asnDismissableNotices.append($currentNotice), $asnDismiss);
          $asnDismiss.on('click', function (event) {
            event.preventDefault();
            clearTimeout(asnTimer);
            $asnArea.remove();
            mw.storage.set(STORAGE_KEY, asnVersion, 2592e3); // 30 days
            mw.notify($('<span>').html(message('dismissNotice')));
          });
          testCriteria = function testCriteria(criteria) {
            // @ts-ignore
            var in_group = function in_group(group) {
              var _wgUserGroups$include;
              var wgUserGroups = mw.config.get('wgUserGroups');
              return (_wgUserGroups$include = wgUserGroups === null || wgUserGroups === void 0 ? void 0 : wgUserGroups.indexOf(group) !== -1) !== null && _wgUserGroups$include !== void 0 ? _wgUserGroups$include : false;
            };
            // @ts-ignore
            var only_for = function only_for(userLanguage) {
              return userLanguage === mw.config.get('wgUserLanguage');
            };
            // FIXME: This shouldn't be using eval on data entered in wikitext.
            // If that data is malformed it will throw an exception e.g. criteria = "(false))"
            try {
              // eslint-disable-next-line security/detect-eval-with-expression, no-eval
              return eval(criteria);
            } catch (_unused) {
              return false;
            }
          };
          matchCriteria = function matchCriteria($asnItem) {
            var cache = $asnItem.data('asn-cache');
            if (cache !== undefined) {
              return cache;
            }
            var criteria = $asnItem.attr('data-asn-criteria');
            if (criteria === undefined) {
              criteria = $asnItem.attr('class') ? 'false' : 'true';
              if ($asnItem.hasClass('only_sysop')) {
                criteria += '||in_group("sysop")';
              }
              if ($asnItem.hasClass('only_logged')) {
                criteria += '||in_group("user")';
              }
              if ($asnItem.hasClass('only_anon')) {
                criteria += '||!in_group("user")';
              }
              if ($asnItem.hasClass('only_zh_cn')) {
                criteria += '||only_for("zh-cn")';
              }
              if ($asnItem.hasClass('only_zh_sg')) {
                criteria += '||only_for("zh-sg")';
              }
              if ($asnItem.hasClass('only_zh_my')) {
                criteria += '||only_for("zh-my")';
              }
              if ($asnItem.hasClass('only_zh_hk')) {
                criteria += '||only_for("zh-hk")';
              }
              if ($asnItem.hasClass('only_zh_mo')) {
                criteria += '||only_for("zh-mo")';
              }
              if ($asnItem.hasClass('only_zh_tw')) {
                criteria += '||only_for("zh-tw")';
              }
            } else {
              criteria = decodeURIComponent(criteria.replace(/\+/g, '%20'));
              criteria = criteria.trim() || 'true';
            }
            var result = testCriteria(criteria);
            $asnItem.data('asn-cache', result);
            return result;
          };
          loadNotices = function loadNotices(index) {
            if (asnVersion === asnVersionLast || !$asnArea.length) {
              return;
            }
            var asnListLength = $asnList.length;
            var nextAsnIndex = (index + 1) % asnListLength;
            var $asnItem = $();
            var i = 0;
            while (i++ < asnListLength) {
              $asnItem = $asnList.eq(index);
              if ($asnItem.length) {
                if (!matchCriteria($asnItem)) {
                  loadNotices(nextAsnIndex);
                  return;
                }
                index = index++ % asnListLength;
              }
            }
            if (typeof $asnItem.data('asn-html') === 'string') {
              $asnItem.data('asn-html-raw', decodeURIComponent($asnItem.data('asn-html').replace(/\+/g, '%20')));
              $asnItem.data('asn-html', '');
            }
            if (typeof $asnItem.data('asn-style') === 'string') {
              var style = mw.util.addCSS(decodeURIComponent($asnItem.data('asn-style').replace(/\+/g, '%20')));
              $asnItem.data('asn-style', '');
              $asnItem.data('asn-style-id', asnStyles.length);
              style.disabled = true;
              asnStyles.push(style);
            }
            var asnItemHtml = $asnItem.data('asn-html-raw') || $asnItem.html();
            var styleId = $asnItem.data('asn-style-id');
            var currentNoticeHtml = $currentNotice.html();
            if (currentNoticeHtml && currentNoticeHtml !== asnItemHtml) {
              $currentNotice.stop().fadeOut(function () {
                for (var _i = 0, _asnStyles = asnStyles; _i < _asnStyles.length; _i++) {
                  var _style = _asnStyles[_i];
                  _style.disabled = true;
                }
                var asnStyle = asnStyles[styleId];
                if (asnStyle) {
                  asnStyle.disabled = false;
                }
                $currentNotice.html(asnItemHtml);
                // animation try /catched to avoid TypeError: (Animation.tweeners[prop]||[]).concat is not a function error being seen in production
                try {
                  $currentNotice.fadeIn();
                } catch (_unused2) {}
              });
            } else if (!currentNoticeHtml) {
              $asnArea.appendTo($siteNotice);
              var asnStyle = asnStyles[styleId];
              if (asnStyle) {
                asnStyle.disabled = false;
              }
              $currentNotice.html(asnItemHtml).fadeIn();
            }
            asnTimer = setTimeout(function () {
              loadNotices(nextAsnIndex);
            }, 7e3);
          };
          _context.prev = 20;
          api = new mw.Api({
            ajax: {
              headers: {
                'Api-User-Agent': "Qiuwen/1.1 (AdvancedSiteNotices/1.1; ".concat(mw.config.get('wgWikiID'), ")")
              }
            }
          });
          _context.next = 24;
          return api.get({
            action: 'parse',
            formatversion: '2',
            prop: 'text',
            page: 'Template:AdvancedSiteNotices/ajax',
            uselang: mw.config.get('wgUserLanguage'),
            variant: mw.config.get('wgUserLanguage')
          });
        case 24:
          response = _context.sent;
          if ((_response$parse = response['parse']) !== null && _response$parse !== void 0 && _response$parse.text) {
            _context.next = 27;
            break;
          }
          return _context.abrupt("return");
        case 27:
          $notices = $('<div>').html(response['parse'].text).find('ul.sitents');
          asnVersion = $notices.data('asn-version').toString();
          $asnList = $('li', $notices);
          loadNotices(Math.floor(Math.random() * $asnList.length));
          _context.next = 35;
          break;
        case 33:
          _context.prev = 33;
          _context.t0 = _context["catch"](20);
        case 35:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[20, 33]]);
  }));
  function advancedSiteNotices() {
    return _advancedSiteNotices.apply(this, arguments);
  }
  return advancedSiteNotices;
}());
/* </nowiki> */