/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
 *
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/AjaxLogin>
 * @author 安忆 <i@anyi.in>
 * @dependency ext.gadget.Ding, ext.gadget.i18n, mediawiki.api, oojs-ui-core, oojs-ui-windows, oojs-ui.styles.icons-interactions, oojs-ui.styles.icons-user
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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
(function ajaxLogin() {
  var ding = function ding(value) {
    var autoHide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';
    autoHide ? DingExposedInterface(value, type) : DingExposedInterface(value, type, 'long');
  };
  var windowManager;
  var ajaxLoginMain = function ajaxLoginMain() {
    var i18nMessages = function i18nMessages() {
      var _i18n = i18n,
        localize = _i18n.localize;
      return {
        '6-digit number': localize({
          ja: '6桁の数字',
          'zh-hans': '6位数字',
          'zh-hant': '6位數字'
        }),
        Cancel: localize({
          ja: 'キャンセル',
          zh: '取消'
        }),
        'Enter password': localize({
          ja: 'パスワード',
          'zh-hans': '请输入密码',
          'zh-hant': '請輸入密碼'
        }),
        'Enter 2FA verification code': localize({
          en: '2FA verification code',
          ja: '2FA認証コード',
          'zh-hans': '请输入2FA验证码',
          'zh-hant': '請輸入2FA驗證碼'
        }),
        'Forgot password?': localize({
          ja: 'パスワードをお忘れですか？',
          'zh-hans': '忘记密码？',
          'zh-hant': '忘記密碼？'
        }),
        'Getting login token': localize({
          ja: 'ログイントークンを取得しています',
          'zh-hans': '正在获取登录令牌',
          'zh-hant': '正在獲取登入權杖'
        }),
        'help for I agree with the relevant terms': localize({
          en: 'When you login, it means that you have carefully read, fully understood and agreed to comply with the <a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="Terms of Service">Terms of Service</a>, <a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="Personal Information Protection Policy">Personal Information Protection Policy</a> and <a rel="noopener" target="_blank" href="/wiki/LIB:DAGZC" title="General Principles">General Principles</a>.',
          ja: 'ログインをすると、あなたは本サイトの『<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="利用規約">利用規約</a>』『<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="個人情報保護条例">個人情報保護条例</a>』『<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>』を十分に理解し、同意したことになります。',
          'zh-hans': '登录时，即代表您已仔细阅读、充分了解并同意遵守本网站的《<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="用户协议">用户协议</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="个人信息保护条例">个人信息保护条例</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>》。',
          'zh-hant': '登錄時，即代表您已仔細閱讀、充分了解並同意遵守本網站的《<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="用戶協議">用戶協議</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="個人信息保護条例">個人信息保護条例</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>》。'
        }),
        'I agree with the relevant terms': localize({
          ja: '関連する規約を読み、同意',
          'zh-hans': '我已阅读并同意相关条款',
          'zh-hant': '我已閲讀並同意相關條款'
        }),
        'If selected, the login status will be kept for 6 months. If not selected, it will be kept for 1 month.': localize({
          ja: 'チェックを入れるとログイン状態が6ヶ月間保持され、入れない場合は1ヶ月間保持されます。',
          'zh-hans': '勾选则保持登录状态6个月，不勾选则保持1个月。',
          'zh-hant': '勾選则保持登入狀態6個月，不勾選則保持1個月。'
        }),
        'Keep me logged in': localize({
          ja: 'ログイン状態を保持',
          'zh-hans': '记住我的登录状态',
          'zh-hant': '記住我的登入狀態'
        }),
        'Logging in': localize({
          ja: 'ログインしています',
          'zh-hans': '正在登录',
          'zh-hant': '正在登入'
        }),
        Login: localize({
          ja: 'ログイン',
          'zh-hans': '登录',
          'zh-hant': '登入'
        }),
        'Login cancelled': localize({
          ja: 'ログインキャンセル',
          'zh-hans': '登录取消',
          'zh-hant': '登入取消'
        }),
        'Login succeed': localize({
          ja: 'ログインに成功しました',
          'zh-hans': '登录成功',
          'zh-hant': '登入成功'
        }),
        'Login token getted': localize({
          ja: 'ログイントークンの取得に成功しました',
          'zh-hans': '获取登录令牌成功',
          'zh-hant': '獲取登入權杖成功'
        }),
        'Network error': localize({
          ja: 'ネットワークエラー',
          'zh-hans': '网络异常',
          'zh-hant': '網路異常'
        }),
        'New password': localize({
          ja: '新しいパスワード',
          'zh-hans': '新密码',
          'zh-hant': '新密碼'
        }),
        'New password is required': localize({
          ja: '新しいパスワードを設定してください',
          'zh-hans': '需要设置新密码',
          'zh-hant': '需要設置新密碼'
        }),
        Password: localize({
          ja: 'パスワード',
          'zh-hans': '密码',
          'zh-hant': '密碼'
        }),
        'Please read the relevant terms. If you agree, check the checkbox to confirm': localize({
          ja: '関連する規約をお読みいただき、同意される場合は、チェックボックスにチェックを入れて確認してください',
          'zh-hans': '请阅读相关条款。若同意，勾选复选框以确认',
          'zh-hant': '請閲讀相關條款。若同意，勾選複選框以確認'
        }),
        'Reset password': localize({
          ja: 'パスワードをリセット',
          'zh-hans': '重置密码',
          'zh-hant': '重新設定密碼'
        }),
        'The 2FA verification code cannot be empty': localize({
          ja: '2FA認証コードが入力されていません',
          'zh-hans': '2FA验证码不能为空',
          'zh-hant': '2FA驗證碼不能爲空'
        }),
        'The password cannot be empty': localize({
          ja: 'パスワードが入力されていません',
          'zh-hans': '密码不能为空',
          'zh-hant': '密碼不能爲空'
        }),
        'The username or password cannot be empty': localize({
          ja: '利用者名またはパスワードが入力されていません',
          'zh-cn': '用户名或密码不能为空',
          'zh-hk': '用戶名稱或密碼不能爲空',
          'zh-tw': '使用者名稱或密碼不能爲空'
        }),
        'The user login is too frequent, please try again in five minutes': localize({
          ja: '利用者が頻繁すぎるため、5分後に再試行してください',
          'zh-cn': '用户登录过于频繁，请五分钟后再试',
          'zh-hk': '用戶登入過於頻繁，請五分鐘後再試',
          'zh-tw': '使用者登入过于频繁，请五分钟后再试'
        }),
        'Unknown API error': localize({
          ja: '未定義のAPIエラー',
          'zh-hans': '未定义的API错误',
          'zh-hant': '未定義的API錯誤'
        }),
        Username: localize({
          ja: '利用者名',
          'zh-cn': '用户名',
          'zh-hk': '用戶名稱',
          'zh-tw': '使用者名稱'
        }),
        'Invalid 2FA verification code': localize({
          ja: '2FA認証コードが間違っています',
          'zh-hans': '2FA验证码错误',
          'zh-hant': '2FA驗證碼錯誤'
        }),
        'Invalid useruame or password': localize({
          ja: '利用者名またはパスワードが間違っています',
          'zh-cn': '用户名或密码错误',
          'zh-hk': '用戶名稱或密碼錯誤',
          'zh-tw': '使用者名稱或密碼錯誤'
        })
      };
    };
    var messages = i18nMessages();
    var message = function message(key) {
      return messages[key] || key;
    };
    var messageDialog = new OO.ui.MessageDialog();
    var nameInput = new OO.ui.TextInputWidget({
      icon: 'userAvatar',
      placeholder: message('Username'),
      validate: 'non-empty'
    });
    var pwdInput = new OO.ui.TextInputWidget({
      icon: 'key',
      placeholder: message('Password'),
      type: 'password',
      validate: 'non-empty'
    });
    var agreeTosCheckbox = new OO.ui.CheckboxInputWidget();
    var agreeTosLayout = new OO.ui.FieldLayout(agreeTosCheckbox, {
      align: 'inline',
      label: message('I agree with the relevant terms')
    });
    var keepLoginCheckbox = new OO.ui.CheckboxInputWidget();
    var keepLoginLayout = new OO.ui.FieldLayout(keepLoginCheckbox, {
      align: 'inline',
      help: message('If selected, the login status will be kept for 6 months. If not selected, it will be kept for 1 month.'),
      label: message('Keep me logged in')
    });
    var $label = $('<label>').addClass('oo-ui-labelWidget oo-ui-labelElement-label').css({
      'font-size': '90%',
      'text-align': 'justify'
    });
    var $agreeTos = $label.clone().append(agreeTosLayout.$element);
    var $forgotPassword = $label.clone().css('float', 'right').append($('<a>').attr({
      href: '/wiki/Special:PasswordReset',
      title: message('Reset password')
    }).text(message('Forgot password?')));
    var $inputBox = $label.clone().css({
      display: 'block',
      'font-size': 'inherit',
      padding: '6px 0'
    }).append(nameInput.$element.css('margin-bottom', '6px'), pwdInput.$element);
    var $tosLabel = $label.clone().html(message('help for I agree with the relevant terms'));
    var $rememberMe = $label.clone().append(keepLoginLayout.$element.css('margin-top', '6px'));
    var removeWindowResizeHandler = function removeWindowResizeHandler() {
      $(window).off({
        'orientationchange resize': windowManager.onWindowResizeHandler
      });
    };
    var loginToken = '';
    var doLogin = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _ref2,
          _ref2$loginContinue,
          loginContinue,
          _ref2$retypePassword,
          retypePassword,
          api,
          _response$clientlogin,
          _response$clientlogin2,
          params,
          prompt,
          value,
          response,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _ref2 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, _ref2$loginContinue = _ref2.loginContinue, loginContinue = _ref2$loginContinue === void 0 ? false : _ref2$loginContinue, _ref2$retypePassword = _ref2.retypePassword, retypePassword = _ref2$retypePassword === void 0 ? false : _ref2$retypePassword;
              api = new mw.Api({
                ajax: {
                  headers: {
                    'Api-User-Agent': "Qiuwen/1.1 (AjaxLogin/1.1; ".concat(mw.config.get('wgWikiID'), ")")
                  }
                }
              });
              _context2.prev = 2;
              if (loginContinue) {
                _context2.next = 9;
                break;
              }
              ding(message('Getting login token'));
              _context2.next = 7;
              return api.getToken('login');
            case 7:
              loginToken = _context2.sent;
              ding(message('Login token getted'), true);
            case 9:
              params = {
                action: 'clientlogin',
                format: 'json',
                formatversion: '2',
                logintoken: loginToken,
                loginreturnurl: location.href,
                username: nameInput.getValue(),
                password: pwdInput.getValue()
              };
              if (keepLoginCheckbox.isSelected()) {
                params.rememberMe = '1';
              }
              if (!(loginContinue || retypePassword)) {
                _context2.next = 32;
                break;
              }
              _context2.next = 14;
              return windowManager.clearWindows();
            case 14:
              delete params.loginreturnurl;
              delete params.username;
              delete params.password;
              params.logincontinue = true;
              prompt = /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  var codeDialog, codeInput, codeLayout, instance, data, _data;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        codeDialog = new OO.ui.MessageDialog();
                        codeInput = new OO.ui.TextInputWidget({
                          icon: 'key',
                          placeholder: retypePassword ? message('New password') : message('6-digit number'),
                          validate: 'integer'
                        });
                        codeLayout = new OO.ui.FieldLayout(codeInput, {
                          align: 'top',
                          label: $('<b>').addClass('oo-ui-messageDialog-title oo-ui-window-head').text(retypePassword ? message('Enter password') : message('Enter 2FA verification code'))
                        });
                        windowManager.addWindows([codeDialog]);
                        instance = windowManager.openWindow(codeDialog, {
                          message: codeLayout.$element
                        });
                        removeWindowResizeHandler();
                        instance.opened.then(function () {
                          codeInput.on('enter', function () {
                            windowManager.getCurrentWindow().close({
                              action: 'accept'
                            });
                          });
                          codeInput.focus();
                        });
                        _context.next = 9;
                        return instance.closed;
                      case 9:
                        data = _context.sent;
                        _data = data;
                        return _context.abrupt("return", (_data === null || _data === void 0 ? void 0 : _data.action) === 'accept' ? codeInput.getValue() : null);
                      case 12:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function prompt() {
                  return _ref3.apply(this, arguments);
                };
              }();
              _context2.next = 21;
              return prompt();
            case 21:
              value = _context2.sent;
              if (!(value === null)) {
                _context2.next = 28;
                break;
              }
              ding(message('Login cancelled'), true);
              windowManager.clearWindows();
              return _context2.abrupt("return");
            case 28:
              if (!(value === '')) {
                _context2.next = 31;
                break;
              }
              if (retypePassword) {
                ding(message('The password cannot be empty'), true);
                doLogin({
                  retypePassword: true
                });
              } else {
                ding(message('The 2FA verification code cannot be empty'), true);
                doLogin({
                  loginContinue: true
                });
              }
              return _context2.abrupt("return");
            case 31:
              if (retypePassword) {
                params.password = value;
                params.retype = value;
              } else {
                params.OATHToken = value;
              }
            case 32:
              ding(message('Logging in'));
              _context2.next = 35;
              return api.post(params);
            case 35:
              response = _context2.sent;
              if (!(((_response$clientlogin = response['clientlogin']) === null || _response$clientlogin === void 0 ? void 0 : _response$clientlogin.status) === 'PASS')) {
                _context2.next = 41;
                break;
              }
              ding(message('Login succeed'), false, 'success');
              location.reload();
              _context2.next = 61;
              break;
            case 41:
              if (!((_response$clientlogin2 = response['clientlogin']) !== null && _response$clientlogin2 !== void 0 && _response$clientlogin2.messagecode)) {
                _context2.next = 61;
                break;
              }
              _context2.t0 = response['clientlogin'].messagecode;
              _context2.next = _context2.t0 === 'login-throttled' ? 45 : _context2.t0 === 'oathauth-auth-ui' ? 47 : _context2.t0 === 'oathauth-login-failed' ? 49 : _context2.t0 === 'resetpass-temp-emailed' ? 52 : _context2.t0 === 'wrongpassword' ? 55 : 60;
              break;
            case 45:
              ding(message('The user login is too frequent, please try again in five minutes'));
              return _context2.abrupt("break", 61);
            case 47:
              doLogin({
                loginContinue: true
              });
              return _context2.abrupt("break", 61);
            case 49:
              ding(message('Invalid 2FA verification code'), true, 'warning');
              doLogin({
                loginContinue: true
              });
              return _context2.abrupt("break", 61);
            case 52:
              ding(message('New password is required'), true);
              doLogin({
                retypePassword: true
              });
              return _context2.abrupt("break", 61);
            case 55:
              ding(message('Invalid useruame or password'), true, 'warning');
              _context2.next = 58;
              return windowManager.clearWindows();
            case 58:
              ajaxLoginMain();
              return _context2.abrupt("break", 61);
            case 60:
              ding(message('Unknown API error'), false, 'warning');
            case 61:
              _context2.next = 66;
              break;
            case 63:
              _context2.prev = 63;
              _context2.t1 = _context2["catch"](2);
              ding(message('Network error'), false, 'warning');
            case 66:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 63]]);
      }));
      return function doLogin() {
        return _ref.apply(this, arguments);
      };
    }();
    var checkValid = function checkValid() {
      var agreedTos = agreeTosCheckbox.isSelected();
      var filled = !([nameInput.getValue(), pwdInput.getValue()].indexOf('') !== -1);
      if (!agreedTos) {
        ding(message('Please read the relevant terms. If you agree, check the checkbox to confirm'), true);
      } else if (!filled) {
        ding(message('The username or password cannot be empty'), true);
      }
      var isValid = agreedTos && filled;
      return isValid;
    };
    pwdInput.on('enter', function () {
      if (checkValid()) {
        doLogin();
      }
    });
    messageDialog.getActionProcess = function (action) {
      return new OO.ui.Process(function () {
        if (action === 'login') {
          if (checkValid()) {
            doLogin();
          }
        } else {
          windowManager.clearWindows();
        }
      });
    };
    if (!windowManager) {
      windowManager = new OO.ui.WindowManager();
      windowManager.$element.appendTo(document.body);
    }
    windowManager.addWindows([messageDialog]);
    windowManager.openWindow(messageDialog, {
      actions: [{
        action: 'login',
        flags: ['primary', 'progressive'],
        label: $('<b>').text(message('Login'))
      }, {
        action: 'cancel',
        flags: ['safe', 'close'],
        label: $('<b>').text(message('Cancel'))
      }],
      message: $('<div>').addClass('oo-ui-window-foot').append($inputBox, $forgotPassword, $rememberMe, $agreeTos, $tosLabel),
      title: $('<b>').addClass('oo-ui-window-head').text(message('Login')),
      size: 'small'
    });
    removeWindowResizeHandler();
  };
  $(function () {
    var $element = $('#pt-login,.vector-user-menu-login,#user-tools>a[href*="Special"]');
    if (mw.config.get('wgUserName') || !$element.length) {
      return;
    }
    var checkPressedKey = function checkPressedKey(event) {
      if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') {
        return true;
      }
      return false;
    };
    var eventHandler = function eventHandler(event) {
      if (checkPressedKey(event)) {
        return;
      }
      event.preventDefault();
      ajaxLoginMain();
    };
    $element.on('click', eventHandler);
    $element.on('keydown', eventHandler);
  });
})();
/* </nowiki> */
