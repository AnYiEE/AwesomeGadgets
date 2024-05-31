/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/AjaxLogin}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://youshou.wiki/wiki/H:GPLV3}
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

// dist/AjaxLogin/AjaxLogin.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
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
//! src/AjaxLogin/options.json
var loginElementSelector = 'a:has(.ajaxlogin-mount-point),#pt-login>a,.vector-user-menu-login>a,#user-tools>a[href*="Special"],.mainpage-top-menu>li:nth-child(2) a';
var version = "4.0";
//! src/AjaxLogin/AjaxLogin.ts
var import_ext_gadget13 = require("ext.gadget.Util");
//! src/AjaxLogin/modules/addListener.ts
var import_ext_gadget = require("ext.gadget.FilterAlteredClicks");
var addListener = ($element, eventListener) => {
  $element.on("click", (0, import_ext_gadget.filterAlteredClicks)(eventListener));
  $element.on("keydown", eventListener);
};
//! src/AjaxLogin/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("AjaxLogin/".concat(version));
//! src/AjaxLogin/modules/core.tsx
var import_ext_gadget11 = __toESM(require("ext.gadget.React"), 1);
//! src/AjaxLogin/modules/util/checkValid.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.React"), 1);
//! src/AjaxLogin/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "6-digit number": (0, import_ext_gadget3.localize)({
      en: "6-digit number",
      ja: "6桁の数字",
      "zh-hans": "6位数字",
      "zh-hant": "6位數字"
    }),
    Cancel: (0, import_ext_gadget3.localize)({
      en: "Cancel",
      ja: "キャンセル",
      zh: "取消"
    }),
    "Enter password": (0, import_ext_gadget3.localize)({
      en: "Enter password",
      ja: "パスワード",
      "zh-hans": "请输入密码",
      "zh-hant": "請輸入密碼"
    }),
    "Enter 2FA verification code": (0, import_ext_gadget3.localize)({
      en: "2FA verification code",
      ja: "2FA認証コード",
      "zh-hans": "请输入2FA验证码",
      "zh-hant": "請輸入2FA驗證碼"
    }),
    "Forgot password?": (0, import_ext_gadget3.localize)({
      en: "Forgot password?",
      ja: "パスワードをお忘れですか？",
      "zh-hans": "忘记密码？",
      "zh-hant": "忘記密碼？"
    }),
    "Getting login token": (0, import_ext_gadget3.localize)({
      en: "Getting login token",
      ja: "ログイントークンを取得しています",
      "zh-hans": "正在获取登录令牌",
      "zh-hant": "正在獲取登入權杖"
    }),
    "help for I agree with the relevant terms": (0, import_ext_gadget3.localize)({
      en: 'When you login, it means that you have carefully read, fully understood and agreed to comply with the <a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="Terms of Service">Terms of Service</a>, <a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="Personal Information Protection Policy">Personal Information Protection Policy</a> and <a rel="noopener" target="_blank" href="/wiki/LIB:DAGZC" title="YsArchives Association">YsArchives Association</a>.',
      ja: 'ログインをすると、あなたは本サイトの『<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="利用規約">利用規約</a>』『<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="個人情報保護条例">個人情報保護条例</a>』『<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>』を十分に理解し、同意したことになります。',
      "zh-hans": '登录时，即代表您已仔细阅读、充分了解并同意遵守本网站的《<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="用户协议">用户协议</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="个人信息保护条例">个人信息保护条例</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>》。',
      "zh-hant": '登錄時，即代表您已仔細閱讀、充分了解並同意遵守本網站的《<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="用戶協議">用戶協議</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="個人信息保護条例">個人信息保護条例</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>》。'
    }),
    "I agree": (0, import_ext_gadget3.localize)({
      en: "I agree",
      ja: "同意する",
      zh: "我同意"
    }),
    "I agree with the relevant terms": (0, import_ext_gadget3.localize)({
      en: "I agree with the relevant terms",
      ja: "関連する規約を読み、同意",
      "zh-hans": "我已阅读并同意相关条款",
      "zh-hant": "我已閲讀並同意相關條款"
    }),
    "Invalid 2FA verification code": (0, import_ext_gadget3.localize)({
      en: "Invalid 2FA verification code",
      ja: "2FA認証コードが間違っています",
      "zh-hans": "2FA验证码错误",
      "zh-hant": "2FA驗證碼錯誤"
    }),
    "Invalid useruame or password": (0, import_ext_gadget3.localize)({
      en: "Invalid useruame or password",
      ja: "利用者名またはパスワードが間違っています",
      "zh-cn": "用户名或密码错误",
      "zh-hk": "用戶名稱或密碼錯誤",
      "zh-tw": "使用者名稱或密碼錯誤"
    }),
    "Keep me logged in": (0, import_ext_gadget3.localize)({
      en: "Keep me logged in",
      ja: "ログイン状態を保持",
      "zh-hans": "记住我的登录状态",
      "zh-hant": "記住我的登入狀態"
    }),
    "Logging in": (0, import_ext_gadget3.localize)({
      en: "Logging in",
      ja: "ログインしています",
      "zh-hans": "正在登录",
      "zh-hant": "正在登入"
    }),
    Login: (0, import_ext_gadget3.localize)({
      en: "Login",
      ja: "ログイン",
      "zh-hans": "登录",
      "zh-hant": "登入"
    }),
    "Login cancelled": (0, import_ext_gadget3.localize)({
      en: "Login cancelled",
      ja: "ログインキャンセル",
      "zh-hans": "登录取消",
      "zh-hant": "登入取消"
    }),
    "Login succeed": (0, import_ext_gadget3.localize)({
      en: "Login succeed",
      ja: "ログインに成功しました",
      "zh-hans": "登录成功",
      "zh-hant": "登入成功"
    }),
    "Login token getted": (0, import_ext_gadget3.localize)({
      en: "Login token getted",
      ja: "ログイントークンの取得に成功しました",
      "zh-hans": "获取登录令牌成功",
      "zh-hant": "獲取登入權杖成功"
    }),
    "New password": (0, import_ext_gadget3.localize)({
      en: "New password",
      ja: "新しいパスワード",
      "zh-hans": "新密码",
      "zh-hant": "新密碼"
    }),
    "New password is required": (0, import_ext_gadget3.localize)({
      en: "New password is required",
      ja: "新しいパスワードを設定してください",
      "zh-hans": "需要设置新密码",
      "zh-hant": "需要設置新密碼"
    }),
    Password: (0, import_ext_gadget3.localize)({
      en: "Password",
      ja: "パスワード",
      "zh-hans": "密码",
      "zh-hant": "密碼"
    }),
    "Reset password": (0, import_ext_gadget3.localize)({
      en: "Reset password",
      ja: "パスワードをリセット",
      "zh-hans": "重置密码",
      "zh-hant": "重新設定密碼"
    }),
    Username: (0, import_ext_gadget3.localize)({
      en: "Username",
      ja: "利用者名",
      "zh-cn": "用户名",
      "zh-hk": "用戶名稱",
      "zh-tw": "使用者名稱"
    }),
    AgreedOrNot: (0, import_ext_gadget3.localize)({
      en: "Please read the relevant terms. If you agree, check the checkbox to confirm",
      ja: "関連する規約をお読みいただき、同意される場合は、チェックボックスにチェックを入れて確認してください",
      "zh-hans": "请阅读相关条款。若同意，勾选复选框以确认",
      "zh-hant": "請閲讀相關條款。若同意，勾選複選框以確認"
    }),
    DoubleCheckAgreedOrNot: (0, import_ext_gadget3.localize)({
      en: 'You have carefully read, fully understood and agreed to comply with our <a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="Terms of Service">Terms of Service</a>, <a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="Personal Information Protection Policy">Personal Information Protection Policy</a> and <a rel="noopener" target="_blank" href="/wiki/LIB:DAGZC" title="YsArchives Association">YsArchives Association</a>.',
      ja: 'あなたは本サイトの『<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="利用規約">利用規約</a>』『<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="個人情報保護条例">個人情報保護条例</a>』『<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>』を十分に理解し、同意したことになります。',
      "zh-hans": '您已仔细阅读、充分了解并同意遵守本网站的《<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="用户协议">用户协议</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="个人信息保护条例">个人信息保护条例</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>》。',
      "zh-hant": '您已仔細閱讀、充分了解並同意遵守本網站的《<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="用戶協議">用戶協議</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="個人信息保護条例">個人信息保護条例</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>》。'
    }),
    Empty2FA: (0, import_ext_gadget3.localize)({
      en: "The 2FA verification code cannot be empty",
      ja: "2FA認証コードが入力されていません",
      "zh-hans": "2FA验证码不能为空",
      "zh-hant": "2FA驗證碼不能爲空"
    }),
    EmptyPassword: (0, import_ext_gadget3.localize)({
      en: "The password cannot be empty",
      ja: "パスワードが入力されていません",
      "zh-hans": "密码不能为空",
      "zh-hant": "密碼不能爲空"
    }),
    EmptyUsernameOrPassword: (0, import_ext_gadget3.localize)({
      en: "The username or password cannot be empty",
      ja: "利用者名またはパスワードが入力されていません",
      "zh-cn": "用户名或密码不能为空",
      "zh-hk": "用戶名稱或密碼不能爲空",
      "zh-tw": "使用者名稱或密碼不能爲空"
    }),
    "Network error": (0, import_ext_gadget3.localize)({
      en: "Network error. Redirecting...",
      ja: "ネットワークエラー、リダイレクト中...",
      "zh-hans": "网络异常。重定向中……",
      "zh-hant": "網路異常。重新導向中……"
    }),
    SelectedOrNot: (0, import_ext_gadget3.localize)({
      en: "If selected, the login status will be kept for 6 months. If not selected, it will be kept for 1 month.",
      ja: "チェックを入れるとログイン状態が6ヶ月間保持され、入れない場合は1ヶ月間保持されます。",
      "zh-hans": "勾选则保持登录状态6个月，不勾选则保持1个月。",
      "zh-hant": "勾選则保持登入狀態6個月，不勾選則保持1個月。"
    }),
    TooFrequent: (0, import_ext_gadget3.localize)({
      en: "The user login is too frequent, please try again in five minutes",
      ja: "利用者が頻繁すぎるため、5分後に再試行してください",
      "zh-cn": "用户登录过于频繁，请五分钟后再试",
      "zh-hk": "用戶登入過於頻繁，請五分鐘後再試",
      "zh-tw": "使用者登入过于频繁，请五分钟后再试"
    }),
    "Unexpected API response": (0, import_ext_gadget3.localize)({
      en: "Unexpected API response: $1. Redirecting...",
      ja: "予期せぬAPIの応答：$1、リダイレクト中...",
      "zh-hans": "意外的API响应：$1。重定向中……",
      "zh-hant": "意外的API響應：$1。重新導向中……"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/AjaxLogin/modules/initWindowManager.ts
var initWindowManager = () => {
  return new OO.ui.WindowManager();
};
var windowManager = initWindowManager();
//! src/AjaxLogin/modules/util/oouiConfirm.ts
var oouiConfirm = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (options) {
    const messageDialog = new OO.ui.MessageDialog();
    windowManager.addWindows([messageDialog]);
    const instance = windowManager.openWindow(messageDialog, options);
    const data = yield instance.closed;
    const _data = data;
    return !!((_data === null || _data === void 0 ? void 0 : _data.action) === "accept");
  });
  return function oouiConfirm2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/AjaxLogin/modules/util/checkValid.tsx
var import_ext_gadget5 = require("ext.gadget.Toastify");
var checkValid = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* ([agreeTosCheckbox, nameInput, pwdInput], toastifyInstance) {
    let isAgreeTos = agreeTosCheckbox.isSelected();
    const isFill = ![nameInput.getValue().trim(), pwdInput.getValue().trim()].includes("");
    toastifyInstance.hideToast();
    yield windowManager.clearWindows();
    if (!isAgreeTos) {
      isAgreeTos = yield oouiConfirm({
        message: $(/* @__PURE__ */ import_ext_gadget4.default.createElement("span", {
          innerHTML: getMessage("DoubleCheckAgreedOrNot")
        })),
        actions: [{
          label: $(/* @__PURE__ */ import_ext_gadget4.default.createElement("b", null, getMessage("Cancel"))),
          action: "cancel",
          flags: ["safe", "close"]
        }, {
          label: $(/* @__PURE__ */ import_ext_gadget4.default.createElement("b", null, getMessage("I agree"))),
          action: "accept",
          flags: ["primary", "progressive"]
        }]
      });
      if (!isAgreeTos) {
        toastifyInstance = (0, import_ext_gadget5.toastify)({
          text: getMessage("AgreedOrNot"),
          duration: -1
        }, "info");
      }
    } else if (!isFill) {
      toastifyInstance = (0, import_ext_gadget5.toastify)({
        text: getMessage("EmptyUsernameOrPassword"),
        duration: -1
      }, "info");
    }
    const isValid = isAgreeTos && isFill;
    return {
      isAgreeTos,
      isValid,
      toastifyInstance
    };
  });
  return function checkValid2(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/AjaxLogin/modules/util/generateElements.tsx
var import_ext_gadget6 = __toESM(require("ext.gadget.React"), 1);
var generateElements = (isAgreeTos) => {
  const messageDialog = new OO.ui.MessageDialog();
  const nameInput = new OO.ui.TextInputWidget({
    icon: "userAvatar",
    placeholder: getMessage("Username"),
    validate: "non-empty"
  });
  const pwdInput = new OO.ui.TextInputWidget({
    icon: "key",
    placeholder: getMessage("Password"),
    type: "password",
    validate: "non-empty"
  });
  const agreeTosCheckbox = new OO.ui.CheckboxInputWidget({
    selected: isAgreeTos
  });
  const agreeTosLayout = new OO.ui.FieldLayout(agreeTosCheckbox, {
    align: "inline",
    label: getMessage("I agree with the relevant terms")
  });
  const keepLoginCheckbox = new OO.ui.CheckboxInputWidget();
  const keepLoginLayout = new OO.ui.FieldLayout(keepLoginCheckbox, {
    align: "inline",
    help: getMessage("SelectedOrNot"),
    label: getMessage("Keep me logged in")
  });
  const label = /* @__PURE__ */ import_ext_gadget6.default.createElement("label", {
    className: ["oo-ui-labelWidget", "oo-ui-labelElement-label"],
    style: {
      fontSize: "90%",
      textAlign: "justify"
    }
  });
  const $label = $(label);
  const $agreeTos = $label.clone().append(agreeTosLayout.$element);
  const $forgotPassword = $label.clone().css("float", "right").append(/* @__PURE__ */ import_ext_gadget6.default.createElement("a", {
    href: mw.util.getUrl("Special:PasswordReset"),
    title: getMessage("Reset password")
  }, getMessage("Forgot password?")));
  const $inputBox = $label.clone().css({
    display: "block",
    "font-size": "inherit",
    padding: "6px 0"
  }).append(nameInput.$element.css("margin-bottom", "6px"), pwdInput.$element);
  const $tosLabel = $label.clone().html(getMessage("help for I agree with the relevant terms"));
  const $rememberMe = $label.clone().append(keepLoginLayout.$element.css("margin-top", "6px"));
  return {
    $agreeTos,
    $forgotPassword,
    $inputBox,
    $rememberMe,
    $tosLabel,
    agreeTosCheckbox,
    keepLoginCheckbox,
    messageDialog,
    nameInput,
    pwdInput
  };
};
//! src/AjaxLogin/modules/util/oouiPrompt.tsx
var import_ext_gadget7 = __toESM(require("ext.gadget.React"), 1);
//! src/AjaxLogin/modules/util/removeWindowResizeHandler.ts
var removeWindowResizeHandler = () => {
  $(window).off({
    "orientationchange resize": windowManager.onWindowResizeHandler
  });
};
//! src/AjaxLogin/modules/util/oouiPrompt.tsx
var oouiPrompt = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (retypePassword) {
    const codeDialog = new OO.ui.MessageDialog();
    const codeInput = new OO.ui.TextInputWidget({
      icon: "key",
      placeholder: retypePassword ? getMessage("New password") : getMessage("6-digit number"),
      validate: "integer"
    });
    const codeLayout = new OO.ui.FieldLayout(codeInput, {
      align: "top",
      label: $(/* @__PURE__ */ import_ext_gadget7.default.createElement("b", {
        className: ["oo-ui-messageDialog-title", "oo-ui-window-head"]
      }, retypePassword ? getMessage("Enter password") : getMessage("Enter 2FA verification code")))
    });
    windowManager.addWindows([codeDialog]);
    const instance = windowManager.openWindow(codeDialog, {
      message: codeLayout.$element
    });
    removeWindowResizeHandler();
    void instance.opened.then(() => {
      codeInput.on("enter", () => {
        windowManager.getCurrentWindow().close({
          action: "accept"
        });
      });
      codeInput.focus();
    });
    const data = yield instance.closed;
    const _data = data;
    return (_data === null || _data === void 0 ? void 0 : _data.action) === "accept" ? codeInput.getValue() : null;
  });
  return function oouiPrompt2(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/AjaxLogin/modules/util/queryLoginToken.ts
var import_ext_gadget8 = require("ext.gadget.Toastify");
var queryLoginToken = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (toastifyInstance) {
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget8.toastify)({
      text: getMessage("Getting login token")
    });
    const loginToken = yield api.getToken("login");
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget8.toastify)({
      text: getMessage("Login token getted"),
      duration: -1
    });
    return {
      loginToken,
      toastifyInstance
    };
  });
  return function queryLoginToken2(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
//! src/AjaxLogin/modules/util/redirectOriginLoginPage.ts
var import_ext_gadget9 = require("ext.gadget.Util");
var redirectOriginLoginPage = /* @__PURE__ */ function() {
  var _ref5 = _asyncToGenerator(function* () {
    yield windowManager.clearWindows();
    yield (0, import_ext_gadget9.delay)(3 * 1e3);
    location.href = mw.util.getUrl("Special:Userlogin");
  });
  return function redirectOriginLoginPage2() {
    return _ref5.apply(this, arguments);
  };
}();
//! src/AjaxLogin/modules/util/showError.ts
var import_ext_gadget10 = require("ext.gadget.Toastify");
var showError = (error, toastifyInstance) => {
  console.error("[AjaxLogin] Ajax error:", error);
  toastifyInstance.hideToast();
  (0, import_ext_gadget10.toastify)({
    text: getMessage("Network error"),
    close: true,
    duration: -1
  }, "error");
};
//! src/AjaxLogin/modules/core.tsx
var import_ext_gadget12 = require("ext.gadget.Toastify");
var ajaxLogin = (toastifyInstance, isAgreeTos = false) => {
  const {
    $agreeTos,
    $forgotPassword,
    $inputBox,
    $rememberMe,
    $tosLabel,
    agreeTosCheckbox,
    keepLoginCheckbox,
    messageDialog,
    nameInput,
    pwdInput
  } = generateElements(isAgreeTos);
  let loginToken = "";
  const login = /* @__PURE__ */ function() {
    var _ref6 = _asyncToGenerator(function* ({
      loginContinue = false,
      retypePassword = false
    } = {}) {
      try {
        var _response$clientlogin, _response$clientlogin2;
        if (!loginContinue) {
          ({
            loginToken,
            toastifyInstance
          } = yield queryLoginToken(toastifyInstance));
        }
        const params = {
          action: "clientlogin",
          format: "json",
          formatversion: "2",
          logintoken: loginToken,
          loginreturnurl: location.href,
          username: nameInput.getValue(),
          password: pwdInput.getValue()
        };
        if (keepLoginCheckbox.isSelected()) {
          params.rememberMe = true;
        }
        if (loginContinue || retypePassword) {
          yield windowManager.clearWindows();
          delete params.loginreturnurl;
          delete params.username;
          delete params.password;
          params.logincontinue = true;
          const value = yield oouiPrompt(retypePassword);
          toastifyInstance.hideToast();
          if (value === null) {
            (0, import_ext_gadget12.toastify)({
              text: getMessage("Login cancelled")
            }, "info");
            void windowManager.clearWindows();
            return;
          } else if (value === "") {
            if (retypePassword) {
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("EmptyPassword"),
                duration: -1
              }, "warning");
              void login({
                retypePassword: true
              });
            } else {
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("Empty2FA"),
                duration: -1
              }, "warning");
              void login({
                loginContinue: true
              });
            }
            return;
          }
          if (retypePassword) {
            params.password = value;
            params.retype = value;
          } else {
            params.OATHToken = value;
          }
        }
        toastifyInstance.hideToast();
        toastifyInstance = (0, import_ext_gadget12.toastify)({
          text: getMessage("Logging in")
        }, "info");
        const response = yield api.post(params);
        toastifyInstance.hideToast();
        if (((_response$clientlogin = response["clientlogin"]) === null || _response$clientlogin === void 0 ? void 0 : _response$clientlogin.status) === "PASS") {
          (0, import_ext_gadget12.toastify)({
            text: getMessage("Login succeed")
          }, "success");
          location.reload();
        } else if ((_response$clientlogin2 = response["clientlogin"]) !== null && _response$clientlogin2 !== void 0 && _response$clientlogin2.messagecode) {
          const {
            messagecode
          } = response["clientlogin"];
          switch (messagecode) {
            case "login-throttled":
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("TooFrequent"),
                duration: -1
              }, "error");
              break;
            case "oathauth-auth-ui":
              void login({
                loginContinue: true
              });
              break;
            case "oathauth-login-failed":
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("Invalid 2FA verification code"),
                duration: -1
              }, "warning");
              void login({
                loginContinue: true
              });
              break;
            case "resetpass-temp-emailed":
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("New password is required"),
                duration: -1
              }, "warning");
              void login({
                retypePassword: true
              });
              break;
            case "wrongpassword":
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("Invalid useruame or password"),
                duration: -1
              }, "warning");
              yield windowManager.clearWindows();
              ajaxLogin(toastifyInstance);
              break;
            default:
              (0, import_ext_gadget12.toastify)({
                text: getMessage("Unexpected API response").replace("$1", messagecode),
                close: true,
                duration: -1
              }, "error");
              void redirectOriginLoginPage();
          }
        }
      } catch (error) {
        showError(error, toastifyInstance);
        void redirectOriginLoginPage();
      }
    });
    return function login2() {
      return _ref6.apply(this, arguments);
    };
  }();
  const check = /* @__PURE__ */ function() {
    var _ref7 = _asyncToGenerator(function* () {
      const {
        isValid,
        isAgreeTos: lastIsAgreeTos,
        toastifyInstance: lastToastifyInstance
      } = yield checkValid([agreeTosCheckbox, nameInput, pwdInput], toastifyInstance);
      toastifyInstance = lastToastifyInstance;
      if (isValid) {
        void login();
      } else {
        ajaxLogin(toastifyInstance, lastIsAgreeTos);
      }
    });
    return function check2() {
      return _ref7.apply(this, arguments);
    };
  }();
  pwdInput.on("enter", () => {
    void check();
  });
  messageDialog.getActionProcess = (action) => new OO.ui.Process(() => {
    if (action === "login") {
      void check();
    } else {
      toastifyInstance.hideToast();
      void windowManager.clearWindows();
    }
  });
  windowManager.addWindows([messageDialog]);
  void windowManager.openWindow(messageDialog, {
    actions: [{
      action: "login",
      flags: ["primary", "progressive"],
      label: $(/* @__PURE__ */ import_ext_gadget11.default.createElement("b", null, getMessage("Login")))
    }, {
      action: "cancel",
      flags: ["safe", "close"],
      label: $(/* @__PURE__ */ import_ext_gadget11.default.createElement("b", null, getMessage("Cancel")))
    }],
    message: $(/* @__PURE__ */ import_ext_gadget11.default.createElement("div", {
      className: "oo-ui-window-foot"
    }, [$inputBox, $forgotPassword, $rememberMe, $agreeTos, $tosLabel])),
    title: $(/* @__PURE__ */ import_ext_gadget11.default.createElement("b", {
      className: "oo-ui-window-head"
    }, getMessage("Login"))),
    size: "small"
  });
  removeWindowResizeHandler();
};
//! src/AjaxLogin/AjaxLogin.ts
void (0, import_ext_gadget13.getBody)().then(function initAutoLogin($body) {
  const {
    wgUserName
  } = mw.config.get();
  if (wgUserName) {
    return;
  }
  const $loginElement = $body.find(loginElementSelector);
  if (!$loginElement.length) {
    return;
  }
  windowManager.$element.appendTo($body);
  const fakeToastifyInstance = {
    hideToast: () => {
    }
  };
  const eventListener = (event) => {
    if (!(0, import_ext_gadget13.checkA11yConfirmKey)(event)) {
      return;
    }
    event.preventDefault();
    ajaxLogin(fakeToastifyInstance);
  };
  addListener($loginElement, eventListener);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0FqYXhMb2dpbi9vcHRpb25zLmpzb24iLCAic3JjL0FqYXhMb2dpbi9BamF4TG9naW4udHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9hcGkudHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL2NoZWNrVmFsaWQudHN4IiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9pbml0V2luZG93TWFuYWdlci50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9vb3VpQ29uZmlybS50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUVsZW1lbnRzLnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9vb3VpUHJvbXB0LnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL3F1ZXJ5TG9naW5Ub2tlbi50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZWRpcmVjdE9yaWdpbkxvZ2luUGFnZS50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9zaG93RXJyb3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJsb2dpbkVsZW1lbnRTZWxlY3RvclwiOiBcImE6aGFzKC5hamF4bG9naW4tbW91bnQtcG9pbnQpLCNwdC1sb2dpbj5hLC52ZWN0b3ItdXNlci1tZW51LWxvZ2luPmEsI3VzZXItdG9vbHM+YVtocmVmKj1cXFwiU3BlY2lhbFxcXCJdLC5tYWlucGFnZS10b3AtbWVudT5saTpudGgtY2hpbGQoMikgYVwiLFxuXHRcInZlcnNpb25cIjogXCI0LjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtjaGVja0ExMXlDb25maXJtS2V5LCBnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHthZGRMaXN0ZW5lcn0gZnJvbSAnLi9tb2R1bGVzL2FkZExpc3RlbmVyJztcbmltcG9ydCB7YWpheExvZ2lufSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4vbW9kdWxlcy9pbml0V2luZG93TWFuYWdlcic7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gaW5pdEF1dG9Mb2dpbigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z1VzZXJOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGxvZ2luRWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICRib2R5LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KE9QVElPTlMubG9naW5FbGVtZW50U2VsZWN0b3IpO1xuXHRpZiAoISRsb2dpbkVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cblx0Y29uc3QgZmFrZVRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblxuXHRjb25zdCBldmVudExpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRpZiAoIWNoZWNrQTExeUNvbmZpcm1LZXkoZXZlbnQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRhamF4TG9naW4oZmFrZVRvYXN0aWZ5SW5zdGFuY2UpO1xuXHR9O1xuXHRhZGRMaXN0ZW5lcigkbG9naW5FbGVtZW50LCBldmVudExpc3RlbmVyKTtcbn0pO1xuIiwgImltcG9ydCB7ZmlsdGVyQWx0ZXJlZENsaWNrc30gZnJvbSAnZXh0LmdhZGdldC5GaWx0ZXJBbHRlcmVkQ2xpY2tzJztcblxuY29uc3QgYWRkTGlzdGVuZXIgPSAoXG5cdCRlbGVtZW50OiBKUXVlcnksXG5cdGV2ZW50TGlzdGVuZXI6IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KSA9PiB2b2lkXG4pOiB2b2lkID0+IHtcblx0JGVsZW1lbnQub24oJ2NsaWNrJywgZmlsdGVyQWx0ZXJlZENsaWNrcyhldmVudExpc3RlbmVyKSk7XG5cdCRlbGVtZW50Lm9uKCdrZXlkb3duJywgZXZlbnRMaXN0ZW5lcik7XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudHlwZSBDbGllbnRMb2dpblBhcmFtcyA9IEFwaUNsaWVudExvZ2luUGFyYW1zICYge1xuXHR1c2VybmFtZT86IHN0cmluZztcblx0cGFzc3dvcmQ/OiBzdHJpbmc7XG5cdHJlbWVtYmVyTWU/OiBib29sZWFuO1xuXHRyZXR5cGU/OiBzdHJpbmc7XG5cdE9BVEhUb2tlbj86IHN0cmluZztcbn07XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBBamF4TG9naW4vJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7dHlwZSBDbGllbnRMb2dpblBhcmFtcywgYXBpfTtcbiIsICJpbXBvcnQge3R5cGUgQ2xpZW50TG9naW5QYXJhbXMsIGFwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtjaGVja1ZhbGlkfSBmcm9tICcuL3V0aWwvY2hlY2tWYWxpZCc7XG5pbXBvcnQge2dlbmVyYXRlRWxlbWVudHN9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUVsZW1lbnRzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7b291aVByb21wdH0gZnJvbSAnLi91dGlsL29vdWlQcm9tcHQnO1xuaW1wb3J0IHtxdWVyeUxvZ2luVG9rZW59IGZyb20gJy4vdXRpbC9xdWVyeUxvZ2luVG9rZW4nO1xuaW1wb3J0IHtyZWRpcmVjdE9yaWdpbkxvZ2luUGFnZX0gZnJvbSAnLi91dGlsL3JlZGlyZWN0T3JpZ2luTG9naW5QYWdlJztcbmltcG9ydCB7cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcn0gZnJvbSAnLi91dGlsL3JlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXInO1xuaW1wb3J0IHtzaG93RXJyb3J9IGZyb20gJy4vdXRpbC9zaG93RXJyb3InO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBhamF4TG9naW4gPSAodG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSwgaXNBZ3JlZVRvczogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCA9PiB7XG5cdGNvbnN0IHtcblx0XHQkYWdyZWVUb3MsXG5cdFx0JGZvcmdvdFBhc3N3b3JkLFxuXHRcdCRpbnB1dEJveCxcblx0XHQkcmVtZW1iZXJNZSxcblx0XHQkdG9zTGFiZWwsXG5cdFx0YWdyZWVUb3NDaGVja2JveCxcblx0XHRrZWVwTG9naW5DaGVja2JveCxcblx0XHRtZXNzYWdlRGlhbG9nLFxuXHRcdG5hbWVJbnB1dCxcblx0XHRwd2RJbnB1dCxcblx0fSA9IGdlbmVyYXRlRWxlbWVudHMoaXNBZ3JlZVRvcyk7XG5cblx0bGV0IGxvZ2luVG9rZW46IHN0cmluZyA9ICcnO1xuXHRjb25zdCBsb2dpbiA9IGFzeW5jICh7bG9naW5Db250aW51ZSA9IGZhbHNlLCByZXR5cGVQYXNzd29yZCA9IGZhbHNlfSA9IHt9KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghbG9naW5Db250aW51ZSkge1xuXHRcdFx0XHQoe2xvZ2luVG9rZW4sIHRvYXN0aWZ5SW5zdGFuY2V9ID0gYXdhaXQgcXVlcnlMb2dpblRva2VuKHRvYXN0aWZ5SW5zdGFuY2UpKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGFyYW1zOiBDbGllbnRMb2dpblBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnY2xpZW50bG9naW4nLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRsb2dpbnRva2VuOiBsb2dpblRva2VuLFxuXHRcdFx0XHRsb2dpbnJldHVybnVybDogbG9jYXRpb24uaHJlZixcblx0XHRcdFx0dXNlcm5hbWU6IG5hbWVJbnB1dC5nZXRWYWx1ZSgpLFxuXHRcdFx0XHRwYXNzd29yZDogcHdkSW5wdXQuZ2V0VmFsdWUoKSxcblx0XHRcdH07XG5cdFx0XHRpZiAoa2VlcExvZ2luQ2hlY2tib3guaXNTZWxlY3RlZCgpKSB7XG5cdFx0XHRcdHBhcmFtcy5yZW1lbWJlck1lID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChsb2dpbkNvbnRpbnVlIHx8IHJldHlwZVBhc3N3b3JkKSB7XG5cdFx0XHRcdGF3YWl0IHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdFx0XHRcdGRlbGV0ZSBwYXJhbXMubG9naW5yZXR1cm51cmw7XG5cdFx0XHRcdGRlbGV0ZSBwYXJhbXMudXNlcm5hbWU7XG5cdFx0XHRcdGRlbGV0ZSBwYXJhbXMucGFzc3dvcmQ7XG5cdFx0XHRcdHBhcmFtcy5sb2dpbmNvbnRpbnVlID0gdHJ1ZTtcblxuXHRcdFx0XHRjb25zdCB2YWx1ZTogc3RyaW5nIHwgbnVsbCA9IGF3YWl0IG9vdWlQcm9tcHQocmV0eXBlUGFzc3dvcmQpO1xuXG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2luIGNhbmNlbGxlZCcpLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCdpbmZvJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09PSAnJykge1xuXHRcdFx0XHRcdGlmIChyZXR5cGVQYXNzd29yZCkge1xuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRW1wdHlQYXNzd29yZCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdHJldHlwZVBhc3N3b3JkOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0VtcHR5MkZBJyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2FybmluZydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR2b2lkIGxvZ2luKHtcblx0XHRcdFx0XHRcdFx0bG9naW5Db250aW51ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXR5cGVQYXNzd29yZCkge1xuXHRcdFx0XHRcdHBhcmFtcy5wYXNzd29yZCA9IHZhbHVlO1xuXHRcdFx0XHRcdHBhcmFtcy5yZXR5cGUgPSB2YWx1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwYXJhbXMuT0FUSFRva2VuID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2dpbmcgaW4nKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2luZm8nXG5cdFx0XHQpO1xuXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IChhd2FpdCBhcGkucG9zdChwYXJhbXMpKSBhcyB7XG5cdFx0XHRcdGNsaWVudGxvZ2luOiB7XG5cdFx0XHRcdFx0c3RhdHVzPzogc3RyaW5nO1xuXHRcdFx0XHRcdG1lc3NhZ2Vjb2RlPzogc3RyaW5nO1xuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblxuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblxuXHRcdFx0aWYgKHJlc3BvbnNlWydjbGllbnRsb2dpbiddPy5zdGF0dXMgPT09ICdQQVNTJykge1xuXHRcdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdMb2dpbiBzdWNjZWVkJyksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQnc3VjY2Vzcydcblx0XHRcdFx0KTtcblx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHR9IGVsc2UgaWYgKHJlc3BvbnNlWydjbGllbnRsb2dpbiddPy5tZXNzYWdlY29kZSkge1xuXHRcdFx0XHRjb25zdCB7bWVzc2FnZWNvZGV9ID0gcmVzcG9uc2VbJ2NsaWVudGxvZ2luJ107XG5cdFx0XHRcdHN3aXRjaCAobWVzc2FnZWNvZGUpIHtcblx0XHRcdFx0XHRjYXNlICdsb2dpbi10aHJvdHRsZWQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnVG9vRnJlcXVlbnQnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCdlcnJvcidcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdvYXRoYXV0aC1hdXRoLXVpJzpcblx0XHRcdFx0XHRcdHZvaWQgbG9naW4oe1xuXHRcdFx0XHRcdFx0XHRsb2dpbkNvbnRpbnVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdvYXRoYXV0aC1sb2dpbi1mYWlsZWQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnSW52YWxpZCAyRkEgdmVyaWZpY2F0aW9uIGNvZGUnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCd3YXJuaW5nJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHZvaWQgbG9naW4oe1xuXHRcdFx0XHRcdFx0XHRsb2dpbkNvbnRpbnVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdyZXNldHBhc3MtdGVtcC1lbWFpbGVkJzpcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldyBwYXNzd29yZCBpcyByZXF1aXJlZCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdHJldHlwZVBhc3N3b3JkOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICd3cm9uZ3Bhc3N3b3JkJzpcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0ludmFsaWQgdXNlcnVhbWUgb3IgcGFzc3dvcmQnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCd3YXJuaW5nJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGF3YWl0IHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdFx0XHRcdFx0XHRhamF4TG9naW4odG9hc3RpZnlJbnN0YW5jZSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdVbmV4cGVjdGVkIEFQSSByZXNwb25zZScpLnJlcGxhY2UoJyQxJywgbWVzc2FnZWNvZGUpLFxuXHRcdFx0XHRcdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J2Vycm9yJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHZvaWQgcmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRzaG93RXJyb3IoZXJyb3IsIHRvYXN0aWZ5SW5zdGFuY2UpO1xuXHRcdFx0dm9pZCByZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSgpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBjaGVjayA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRpc1ZhbGlkLFxuXHRcdFx0aXNBZ3JlZVRvczogbGFzdElzQWdyZWVUb3MsXG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlOiBsYXN0VG9hc3RpZnlJbnN0YW5jZSxcblx0XHR9ID0gYXdhaXQgY2hlY2tWYWxpZChbYWdyZWVUb3NDaGVja2JveCwgbmFtZUlucHV0LCBwd2RJbnB1dF0sIHRvYXN0aWZ5SW5zdGFuY2UpO1xuXG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IGxhc3RUb2FzdGlmeUluc3RhbmNlO1xuXG5cdFx0aWYgKGlzVmFsaWQpIHtcblx0XHRcdHZvaWQgbG9naW4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YWpheExvZ2luKHRvYXN0aWZ5SW5zdGFuY2UsIGxhc3RJc0FncmVlVG9zKTtcblx0XHR9XG5cdH07XG5cblx0cHdkSW5wdXQub24oJ2VudGVyJywgKCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgY2hlY2soKTtcblx0fSk7XG5cdG1lc3NhZ2VEaWFsb2cuZ2V0QWN0aW9uUHJvY2VzcyA9IChhY3Rpb24pOiBPTy51aS5Qcm9jZXNzID0+XG5cdFx0bmV3IE9PLnVpLlByb2Nlc3MoKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ2xvZ2luJykge1xuXHRcdFx0XHR2b2lkIGNoZWNrKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHR2b2lkIHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFttZXNzYWdlRGlhbG9nXSk7XG5cdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIHtcblx0XHRhY3Rpb25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2xvZ2luJyxcblx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHRsYWJlbDogJCg8Yj57Z2V0TWVzc2FnZSgnTG9naW4nKX08L2I+KSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2NhbmNlbCcsXG5cdFx0XHRcdGZsYWdzOiBbJ3NhZmUnLCAnY2xvc2UnXSxcblx0XHRcdFx0bGFiZWw6ICQoPGI+e2dldE1lc3NhZ2UoJ0NhbmNlbCcpfTwvYj4pLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdG1lc3NhZ2U6ICQoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9vLXVpLXdpbmRvdy1mb290XCI+e1skaW5wdXRCb3gsICRmb3Jnb3RQYXNzd29yZCwgJHJlbWVtYmVyTWUsICRhZ3JlZVRvcywgJHRvc0xhYmVsXX08L2Rpdj5cblx0XHQpLFxuXHRcdHRpdGxlOiAkKDxiIGNsYXNzTmFtZT1cIm9vLXVpLXdpbmRvdy1oZWFkXCI+e2dldE1lc3NhZ2UoJ0xvZ2luJyl9PC9iPiksXG5cdFx0c2l6ZTogJ3NtYWxsJyxcblx0fSk7XG5cdHJlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXIoKTtcbn07XG5cbmV4cG9ydCB7YWpheExvZ2lufTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtvb3VpQ29uZmlybX0gZnJvbSAnLi9vb3VpQ29uZmlybSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBjaGVja1ZhbGlkID0gYXN5bmMgKFxuXHRbYWdyZWVUb3NDaGVja2JveCwgbmFtZUlucHV0LCBwd2RJbnB1dF06IFtPTy51aS5DaGVja2JveElucHV0V2lkZ2V0LCBPTy51aS5UZXh0SW5wdXRXaWRnZXQsIE9PLnVpLlRleHRJbnB1dFdpZGdldF0sXG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2Vcbik6IFByb21pc2U8e1xuXHRpc0FncmVlVG9zOiBib29sZWFuO1xuXHRpc1ZhbGlkOiBib29sZWFuO1xuXHR0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlO1xufT4gPT4ge1xuXHRsZXQgaXNBZ3JlZVRvczogYm9vbGVhbiA9IGFncmVlVG9zQ2hlY2tib3guaXNTZWxlY3RlZCgpO1xuXHRjb25zdCBpc0ZpbGw6IGJvb2xlYW4gPSAhW25hbWVJbnB1dC5nZXRWYWx1ZSgpLnRyaW0oKSwgcHdkSW5wdXQuZ2V0VmFsdWUoKS50cmltKCldLmluY2x1ZGVzKCcnKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRhd2FpdCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXG5cdGlmICghaXNBZ3JlZVRvcykge1xuXHRcdGlzQWdyZWVUb3MgPSBhd2FpdCBvb3VpQ29uZmlybSh7XG5cdFx0XHRtZXNzYWdlOiAkKDxzcGFuIGlubmVySFRNTD17Z2V0TWVzc2FnZSgnRG91YmxlQ2hlY2tBZ3JlZWRPck5vdCcpfSAvPikgYXMgSlF1ZXJ5LFxuXHRcdFx0YWN0aW9uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGFiZWw6ICQoPGI+e2dldE1lc3NhZ2UoJ0NhbmNlbCcpfTwvYj4pLFxuXHRcdFx0XHRcdGFjdGlvbjogJ2NhbmNlbCcsXG5cdFx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGFiZWw6ICQoPGI+e2dldE1lc3NhZ2UoJ0kgYWdyZWUnKX08L2I+KSxcblx0XHRcdFx0XHRhY3Rpb246ICdhY2NlcHQnLFxuXHRcdFx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSk7XG5cblx0XHRpZiAoIWlzQWdyZWVUb3MpIHtcblx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0FncmVlZE9yTm90JyksXG5cdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaW5mbydcblx0XHRcdCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKCFpc0ZpbGwpIHtcblx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0VtcHR5VXNlcm5hbWVPclBhc3N3b3JkJyksXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnaW5mbydcblx0XHQpO1xuXHR9XG5cblx0Y29uc3QgaXNWYWxpZDogYm9vbGVhbiA9IGlzQWdyZWVUb3MgJiYgaXNGaWxsO1xuXG5cdHJldHVybiB7XG5cdFx0aXNBZ3JlZVRvcyxcblx0XHRpc1ZhbGlkLFxuXHRcdHRvYXN0aWZ5SW5zdGFuY2UsXG5cdH07XG59O1xuXG5leHBvcnQge2NoZWNrVmFsaWR9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnNi1kaWdpdCBudW1iZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzYtZGlnaXQgbnVtYmVyJyxcblx0XHRcdGphOiAnNuahgeOBruaVsOWtlycsXG5cdFx0XHQnemgtaGFucyc6ICc25L2N5pWw5a2XJyxcblx0XHRcdCd6aC1oYW50JzogJzbkvY3mlbjlrZcnLFxuXHRcdH0pLFxuXHRcdENhbmNlbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDYW5jZWwnLFxuXHRcdFx0amE6ICfjgq3jg6Pjg7Pjgrvjg6snLFxuXHRcdFx0emg6ICflj5bmtognLFxuXHRcdH0pLFxuXHRcdCdFbnRlciBwYXNzd29yZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRW50ZXIgcGFzc3dvcmQnLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+36L6T5YWl5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+i8uOWFpeWvhueivCcsXG5cdFx0fSksXG5cdFx0J0VudGVyIDJGQSB2ZXJpZmljYXRpb24gY29kZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnMkZBIHZlcmlmaWNhdGlvbiBjb2RlJyxcblx0XHRcdGphOiAnMkZB6KqN6Ki844Kz44O844OJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+i+k+WFpTJGQemqjOivgeeggScsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vovLjlhaUyRkHpqZforYnnorwnLFxuXHRcdH0pLFxuXHRcdCdGb3Jnb3QgcGFzc3dvcmQ/JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGb3Jnb3QgcGFzc3dvcmQ/Jyxcblx0XHRcdGphOiAn44OR44K544Ov44O844OJ44KS44GK5b+Y44KM44Gn44GZ44GL77yfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W/mOiusOWvhuegge+8nycsXG5cdFx0XHQnemgtaGFudCc6ICflv5joqJjlr4bnorzvvJ8nLFxuXHRcdH0pLFxuXHRcdCdHZXR0aW5nIGxvZ2luIHRva2VuJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdHZXR0aW5nIGxvZ2luIHRva2VuJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44OI44O844Kv44Oz44KS5Y+W5b6X44GX44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOiOt+WPlueZu+W9leS7pOeJjCcsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjnjbLlj5bnmbvlhaXmrIrmnZYnLFxuXHRcdH0pLFxuXHRcdCdoZWxwIGZvciBJIGFncmVlIHdpdGggdGhlIHJlbGV2YW50IHRlcm1zJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXaGVuIHlvdSBsb2dpbiwgaXQgbWVhbnMgdGhhdCB5b3UgaGF2ZSBjYXJlZnVsbHkgcmVhZCwgZnVsbHkgdW5kZXJzdG9vZCBhbmQgYWdyZWVkIHRvIGNvbXBseSB3aXRoIHRoZSA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6VE9TXCIgdGl0bGU9XCJUZXJtcyBvZiBTZXJ2aWNlXCI+VGVybXMgb2YgU2VydmljZTwvYT4sIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQXCIgdGl0bGU9XCJQZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeVwiPlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5PC9hPiBhbmQgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOkRBR1pDXCIgdGl0bGU9XCJZc0FyY2hpdmVzIEFzc29jaWF0aW9uXCI+WXNBcmNoaXZlcyBBc3NvY2lhdGlvbjwvYT4uJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44KS44GZ44KL44Go44CB44GC44Gq44Gf44Gv5pys44K144Kk44OI44Gu44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlRPU1wiIHRpdGxlPVwi5Yip55So6KaP57SEXCI+5Yip55So6KaP57SEPC9hPuOAj+OAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQXCIgdGl0bGU9XCLlgIvkurrmg4XloLHkv53orbfmnaHkvotcIj7lgIvkurrmg4XloLHkv53orbfmnaHkvos8L2E+44CP44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOkdQXCIgdGl0bGU9XCLmoaPmoYjppobnq6DnqItcIj7moaPmoYjppobnq6DnqIs8L2E+44CP44KS5Y2B5YiG44Gr55CG6Kej44GX44CB5ZCM5oSP44GX44Gf44GT44Go44Gr44Gq44KK44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+eZu+W9leaXtu+8jOWNs+S7o+ihqOaCqOW3suS7lOe7humYheivu+OAgeWFheWIhuS6huino+W5tuWQjOaEj+mBteWuiOacrOe9keermeeahOOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpUT1NcIiB0aXRsZT1cIueUqOaIt+WNj+iurlwiPueUqOaIt+WNj+iurjwvYT7jgIvjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUFwiIHRpdGxlPVwi5Liq5Lq65L+h5oGv5L+d5oqk5p2h5L6LXCI+5Liq5Lq65L+h5oGv5L+d5oqk5p2h5L6LPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpHUFwiIHRpdGxlPVwi5qGj5qGI6aaG56ug56iLXCI+5qGj5qGI6aaG56ug56iLPC9hPuOAi+OAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfnmbvpjITmmYLvvIzljbPku6Pooajmgqjlt7Lku5TntLDplrHoroDjgIHlhYXliIbkuobop6PkuKblkIzmhI/pgbXlrojmnKzntrLnq5nnmoTjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6VE9TXCIgdGl0bGU9XCLnlKjmiLbljZTorbBcIj7nlKjmiLbljZTorbA8L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFBcIiB0aXRsZT1cIuWAi+S6uuS/oeaBr+S/neitt+adoeS+i1wiPuWAi+S6uuS/oeaBr+S/neitt+adoeS+izwvYT7jgIvjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6R1BcIiB0aXRsZT1cIuaho+ahiOmmhueroOeoi1wiPuaho+ahiOmmhueroOeoizwvYT7jgIvjgIInLFxuXHRcdH0pLFxuXHRcdCdJIGFncmVlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJIGFncmVlJyxcblx0XHRcdGphOiAn5ZCM5oSP44GZ44KLJyxcblx0XHRcdHpoOiAn5oiR5ZCM5oSPJyxcblx0XHR9KSxcblx0XHQnSSBhZ3JlZSB3aXRoIHRoZSByZWxldmFudCB0ZXJtcyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSSBhZ3JlZSB3aXRoIHRoZSByZWxldmFudCB0ZXJtcycsXG5cdFx0XHRqYTogJ+mWoumAo+OBmeOCi+imj+e0hOOCkuiqreOBv+OAgeWQjOaEjycsXG5cdFx0XHQnemgtaGFucyc6ICfmiJHlt7LpmIXor7vlubblkIzmhI/nm7jlhbPmnaHmrL4nLFxuXHRcdFx0J3poLWhhbnQnOiAn5oiR5bey6Zay6K6A5Lim5ZCM5oSP55u46Zec5qKd5qy+Jyxcblx0XHR9KSxcblx0XHQnSW52YWxpZCAyRkEgdmVyaWZpY2F0aW9uIGNvZGUnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ludmFsaWQgMkZBIHZlcmlmaWNhdGlvbiBjb2RlJyxcblx0XHRcdGphOiAnMkZB6KqN6Ki844Kz44O844OJ44GM6ZaT6YGV44Gj44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1oYW5zJzogJzJGQemqjOivgeeggemUmeivrycsXG5cdFx0XHQnemgtaGFudCc6ICcyRkHpqZforYnnorzpjK/oqqQnLFxuXHRcdH0pLFxuXHRcdCdJbnZhbGlkIHVzZXJ1YW1lIG9yIHBhc3N3b3JkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbnZhbGlkIHVzZXJ1YW1lIG9yIHBhc3N3b3JkJyxcblx0XHRcdGphOiAn5Yip55So6ICF5ZCN44G+44Gf44Gv44OR44K544Ov44O844OJ44GM6ZaT6YGV44Gj44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1jbic6ICfnlKjmiLflkI3miJblr4bnoIHplJnor68nLFxuXHRcdFx0J3poLWhrJzogJ+eUqOaItuWQjeeoseaIluWvhueivOmMr+iqpCcsXG5cdFx0XHQnemgtdHcnOiAn5L2/55So6ICF5ZCN56ix5oiW5a+G56K86Yyv6KqkJyxcblx0XHR9KSxcblx0XHQnS2VlcCBtZSBsb2dnZWQgaW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0tlZXAgbWUgbG9nZ2VkIGluJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz54q25oWL44KS5L+d5oyBJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iusOS9j+aIkeeahOeZu+W9leeKtuaAgScsXG5cdFx0XHQnemgtaGFudCc6ICfoqJjkvY/miJHnmoTnmbvlhaXni4DmhYsnLFxuXHRcdH0pLFxuXHRcdCdMb2dnaW5nIGluJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dnaW5nIGluJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44GX44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOeZu+W9lScsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjnmbvlhaUnLFxuXHRcdH0pLFxuXHRcdExvZ2luOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ2luJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44OzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eZu+W9lScsXG5cdFx0XHQnemgtaGFudCc6ICfnmbvlhaUnLFxuXHRcdH0pLFxuXHRcdCdMb2dpbiBjYW5jZWxsZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ2luIGNhbmNlbGxlZCcsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHQnemgtaGFucyc6ICfnmbvlvZXlj5bmtognLFxuXHRcdFx0J3poLWhhbnQnOiAn55m75YWl5Y+W5raIJyxcblx0XHR9KSxcblx0XHQnTG9naW4gc3VjY2VlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4gc3VjY2VlZCcsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+OBq+aIkOWKn+OBl+OBvuOBl+OBnycsXG5cdFx0XHQnemgtaGFucyc6ICfnmbvlvZXmiJDlip8nLFxuXHRcdFx0J3poLWhhbnQnOiAn55m75YWl5oiQ5YqfJyxcblx0XHR9KSxcblx0XHQnTG9naW4gdG9rZW4gZ2V0dGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dpbiB0b2tlbiBnZXR0ZWQnLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7Pjg4jjg7zjgq/jg7Pjga7lj5blvpfjgavmiJDlip/jgZfjgb7jgZfjgZ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn6I635Y+W55m75b2V5Luk54mM5oiQ5YqfJyxcblx0XHRcdCd6aC1oYW50JzogJ+eNsuWPlueZu+WFpeasiuadluaIkOWKnycsXG5cdFx0fSksXG5cdFx0J05ldyBwYXNzd29yZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV3IHBhc3N3b3JkJyxcblx0XHRcdGphOiAn5paw44GX44GE44OR44K544Ov44O844OJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aWsOWvhueggScsXG5cdFx0XHQnemgtaGFudCc6ICfmlrDlr4bnorwnLFxuXHRcdH0pLFxuXHRcdCdOZXcgcGFzc3dvcmQgaXMgcmVxdWlyZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldyBwYXNzd29yZCBpcyByZXF1aXJlZCcsXG5cdFx0XHRqYTogJ+aWsOOBl+OBhOODkeOCueODr+ODvOODieOCkuioreWumuOBl+OBpuOBj+OBoOOBleOBhCcsXG5cdFx0XHQnemgtaGFucyc6ICfpnIDopoHorr7nva7mlrDlr4bnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6ZyA6KaB6Kit572u5paw5a+G56K8Jyxcblx0XHR9KSxcblx0XHRQYXNzd29yZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXNzd29yZCcsXG5cdFx0XHRqYTogJ+ODkeOCueODr+ODvOODiScsXG5cdFx0XHQnemgtaGFucyc6ICflr4bnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+G56K8Jyxcblx0XHR9KSxcblx0XHQnUmVzZXQgcGFzc3dvcmQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Jlc2V0IHBhc3N3b3JkJyxcblx0XHRcdGphOiAn44OR44K544Ov44O844OJ44KS44Oq44K744OD44OIJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mHjee9ruWvhueggScsXG5cdFx0XHQnemgtaGFudCc6ICfph43mlrDoqK3lrprlr4bnorwnLFxuXHRcdH0pLFxuXHRcdFVzZXJuYW1lOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1VzZXJuYW1lJyxcblx0XHRcdGphOiAn5Yip55So6ICF5ZCNJyxcblx0XHRcdCd6aC1jbic6ICfnlKjmiLflkI0nLFxuXHRcdFx0J3poLWhrJzogJ+eUqOaItuWQjeeosScsXG5cdFx0XHQnemgtdHcnOiAn5L2/55So6ICF5ZCN56ixJyxcblx0XHR9KSxcblx0XHRBZ3JlZWRPck5vdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQbGVhc2UgcmVhZCB0aGUgcmVsZXZhbnQgdGVybXMuIElmIHlvdSBhZ3JlZSwgY2hlY2sgdGhlIGNoZWNrYm94IHRvIGNvbmZpcm0nLFxuXHRcdFx0amE6ICfplqLpgKPjgZnjgovopo/ntITjgpLjgYroqq3jgb/jgYTjgZ/jgaDjgY3jgIHlkIzmhI/jgZXjgozjgovloLTlkIjjga/jgIHjg4Hjgqfjg4Pjgq/jg5zjg4Pjgq/jgrnjgavjg4Hjgqfjg4Pjgq/jgpLlhaXjgozjgabnorroqo3jgZfjgabjgY/jgaDjgZXjgYQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+36ZiF6K+755u45YWz5p2h5qy+44CC6Iul5ZCM5oSP77yM5Yu+6YCJ5aSN6YCJ5qGG5Lul56Gu6K6kJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+mWsuiugOebuOmXnOaineasvuOAguiLpeWQjOaEj++8jOWLvumBuOikh+mBuOahhuS7peeiuuiqjScsXG5cdFx0fSksXG5cdFx0RG91YmxlQ2hlY2tBZ3JlZWRPck5vdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgaGF2ZSBjYXJlZnVsbHkgcmVhZCwgZnVsbHkgdW5kZXJzdG9vZCBhbmQgYWdyZWVkIHRvIGNvbXBseSB3aXRoIG91ciA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6VE9TXCIgdGl0bGU9XCJUZXJtcyBvZiBTZXJ2aWNlXCI+VGVybXMgb2YgU2VydmljZTwvYT4sIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQXCIgdGl0bGU9XCJQZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeVwiPlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5PC9hPiBhbmQgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOkRBR1pDXCIgdGl0bGU9XCJZc0FyY2hpdmVzIEFzc29jaWF0aW9uXCI+WXNBcmNoaXZlcyBBc3NvY2lhdGlvbjwvYT4uJyxcblx0XHRcdGphOiAn44GC44Gq44Gf44Gv5pys44K144Kk44OI44Gu44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlRPU1wiIHRpdGxlPVwi5Yip55So6KaP57SEXCI+5Yip55So6KaP57SEPC9hPuOAj+OAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQXCIgdGl0bGU9XCLlgIvkurrmg4XloLHkv53orbfmnaHkvotcIj7lgIvkurrmg4XloLHkv53orbfmnaHkvos8L2E+44CP44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOkdQXCIgdGl0bGU9XCLmoaPmoYjppobnq6DnqItcIj7moaPmoYjppobnq6DnqIs8L2E+44CP44KS5Y2B5YiG44Gr55CG6Kej44GX44CB5ZCM5oSP44GX44Gf44GT44Go44Gr44Gq44KK44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+aCqOW3suS7lOe7humYheivu+OAgeWFheWIhuS6huino+W5tuWQjOaEj+mBteWuiOacrOe9keermeeahOOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpUT1NcIiB0aXRsZT1cIueUqOaIt+WNj+iurlwiPueUqOaIt+WNj+iurjwvYT7jgIvjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUFwiIHRpdGxlPVwi5Liq5Lq65L+h5oGv5L+d5oqk5p2h5L6LXCI+5Liq5Lq65L+h5oGv5L+d5oqk5p2h5L6LPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpHUFwiIHRpdGxlPVwi5qGj5qGI6aaG56ug56iLXCI+5qGj5qGI6aaG56ug56iLPC9hPuOAi+OAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmgqjlt7Lku5TntLDplrHoroDjgIHlhYXliIbkuobop6PkuKblkIzmhI/pgbXlrojmnKzntrLnq5nnmoTjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6VE9TXCIgdGl0bGU9XCLnlKjmiLbljZTorbBcIj7nlKjmiLbljZTorbA8L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFBcIiB0aXRsZT1cIuWAi+S6uuS/oeaBr+S/neitt+adoeS+i1wiPuWAi+S6uuS/oeaBr+S/neitt+adoeS+izwvYT7jgIvjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6R1BcIiB0aXRsZT1cIuaho+ahiOmmhueroOeoi1wiPuaho+ahiOmmhueroOeoizwvYT7jgIvjgIInLFxuXHRcdH0pLFxuXHRcdEVtcHR5MkZBOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZSAyRkEgdmVyaWZpY2F0aW9uIGNvZGUgY2Fubm90IGJlIGVtcHR5Jyxcblx0XHRcdGphOiAnMkZB6KqN6Ki844Kz44O844OJ44GM5YWl5Yqb44GV44KM44Gm44GE44G+44Gb44KTJyxcblx0XHRcdCd6aC1oYW5zJzogJzJGQemqjOivgeeggeS4jeiDveS4uuepuicsXG5cdFx0XHQnemgtaGFudCc6ICcyRkHpqZforYnnorzkuI3og73niLLnqbonLFxuXHRcdH0pLFxuXHRcdEVtcHR5UGFzc3dvcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIHBhc3N3b3JkIGNhbm5vdCBiZSBlbXB0eScsXG5cdFx0XHRqYTogJ+ODkeOCueODr+ODvOODieOBjOWFpeWKm+OBleOCjOOBpuOBhOOBvuOBm+OCkycsXG5cdFx0XHQnemgtaGFucyc6ICflr4bnoIHkuI3og73kuLrnqbonLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+G56K85LiN6IO954iy56m6Jyxcblx0XHR9KSxcblx0XHRFbXB0eVVzZXJuYW1lT3JQYXNzd29yZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgdXNlcm5hbWUgb3IgcGFzc3dvcmQgY2Fubm90IGJlIGVtcHR5Jyxcblx0XHRcdGphOiAn5Yip55So6ICF5ZCN44G+44Gf44Gv44OR44K544Ov44O844OJ44GM5YWl5Yqb44GV44KM44Gm44GE44G+44Gb44KTJyxcblx0XHRcdCd6aC1jbic6ICfnlKjmiLflkI3miJblr4bnoIHkuI3og73kuLrnqbonLFxuXHRcdFx0J3poLWhrJzogJ+eUqOaItuWQjeeoseaIluWvhueivOS4jeiDveeIsuepuicsXG5cdFx0XHQnemgtdHcnOiAn5L2/55So6ICF5ZCN56ix5oiW5a+G56K85LiN6IO954iy56m6Jyxcblx0XHR9KSxcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvci4gUmVkaXJlY3RpbmcuLi4nLFxuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7zjgIHjg6rjg4DjgqTjg6zjgq/jg4jkuK0uLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi444CC6YeN5a6a5ZCR5Lit4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uOOAgumHjeaWsOWwjuWQkeS4reKApuKApicsXG5cdFx0fSksXG5cdFx0U2VsZWN0ZWRPck5vdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJZiBzZWxlY3RlZCwgdGhlIGxvZ2luIHN0YXR1cyB3aWxsIGJlIGtlcHQgZm9yIDYgbW9udGhzLiBJZiBub3Qgc2VsZWN0ZWQsIGl0IHdpbGwgYmUga2VwdCBmb3IgMSBtb250aC4nLFxuXHRcdFx0amE6ICfjg4Hjgqfjg4Pjgq/jgpLlhaXjgozjgovjgajjg63jgrDjgqTjg7PnirbmhYvjgYw244O25pyI6ZaT5L+d5oyB44GV44KM44CB5YWl44KM44Gq44GE5aC05ZCI44GvMeODtuaciOmWk+S/neaMgeOBleOCjOOBvuOBmeOAgicsXG5cdFx0XHQnemgtaGFucyc6ICfli77pgInliJnkv53mjIHnmbvlvZXnirbmgIE25Liq5pyI77yM5LiN5Yu+6YCJ5YiZ5L+d5oyBMeS4quaciOOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfli77pgbjliJnkv53mjIHnmbvlhaXni4DmhYs25YCL5pyI77yM5LiN5Yu+6YG45YmH5L+d5oyBMeWAi+aciOOAgicsXG5cdFx0fSksXG5cdFx0VG9vRnJlcXVlbnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIHVzZXIgbG9naW4gaXMgdG9vIGZyZXF1ZW50LCBwbGVhc2UgdHJ5IGFnYWluIGluIGZpdmUgbWludXRlcycsXG5cdFx0XHRqYTogJ+WIqeeUqOiAheOBjOmgu+e5geOBmeOBjuOCi+OBn+OCgeOAgTXliIblvozjgavlho3oqabooYzjgZfjgabjgY/jgaDjgZXjgYQnLFxuXHRcdFx0J3poLWNuJzogJ+eUqOaIt+eZu+W9lei/h+S6jumikee5ge+8jOivt+S6lOWIhumSn+WQjuWGjeivlScsXG5cdFx0XHQnemgtaGsnOiAn55So5oi255m75YWl6YGO5pa86aC757mB77yM6KuL5LqU5YiG6ZCY5b6M5YaN6KmmJyxcblx0XHRcdCd6aC10dyc6ICfkvb/nlKjogIXnmbvlhaXov4fkuo7popHnuYHvvIzor7fkupTliIbpkp/lkI7lho3or5UnLFxuXHRcdH0pLFxuXHRcdCdVbmV4cGVjdGVkIEFQSSByZXNwb25zZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVW5leHBlY3RlZCBBUEkgcmVzcG9uc2U6ICQxLiBSZWRpcmVjdGluZy4uLicsXG5cdFx0XHRqYTogJ+S6iOacn+OBm+OBrEFQSeOBruW/nOetlO+8miQx44CB44Oq44OA44Kk44Os44Kv44OI5LitLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aEj+WklueahEFQSeWTjeW6lO+8miQx44CC6YeN5a6a5ZCR5Lit4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+aEj+WklueahEFQSemfv+aHie+8miQx44CC6YeN5paw5bCO5ZCR5Lit4oCm4oCmJyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IGluaXRXaW5kb3dNYW5hZ2VyID0gKCk6IE9PLnVpLldpbmRvd01hbmFnZXIgPT4ge1xuXHRyZXR1cm4gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcbn07XG5cbmNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBpbml0V2luZG93TWFuYWdlcigpO1xuXG5leHBvcnQge3dpbmRvd01hbmFnZXJ9O1xuIiwgImltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBvb3VpQ29uZmlybSA9IGFzeW5jIChvcHRpb25zOiBPTy51aS5NZXNzYWdlRGlhbG9nLlNldHVwRGF0YU1hcCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuXHRjb25zdCBtZXNzYWdlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFttZXNzYWdlRGlhbG9nXSk7XG5cblx0Y29uc3QgaW5zdGFuY2U6IE9PLnVpLldpbmRvd0luc3RhbmNlID0gd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIG9wdGlvbnMpO1xuXG5cdGNvbnN0IGRhdGE6IHZvaWQgPSBhd2FpdCBpbnN0YW5jZS5jbG9zZWQ7XG5cdGNvbnN0IF9kYXRhID0gZGF0YSBhcyB7YWN0aW9uOiBzdHJpbmd9IHwgdm9pZDtcblxuXHRyZXR1cm4gISEoX2RhdGE/LmFjdGlvbiA9PT0gJ2FjY2VwdCcpO1xufTtcblxuZXhwb3J0IHtvb3VpQ29uZmlybX07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVFbGVtZW50cyA9IChpc0FncmVlVG9zOiBib29sZWFuKSA9PiB7XG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXG5cdGNvbnN0IG5hbWVJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0aWNvbjogJ3VzZXJBdmF0YXInLFxuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdVc2VybmFtZScpLFxuXHRcdHZhbGlkYXRlOiAnbm9uLWVtcHR5Jyxcblx0fSk7XG5cblx0Y29uc3QgcHdkSW5wdXQ6IE9PLnVpLlRleHRJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdGljb246ICdrZXknLFxuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdQYXNzd29yZCcpLFxuXHRcdHR5cGU6ICdwYXNzd29yZCcsXG5cdFx0dmFsaWRhdGU6ICdub24tZW1wdHknLFxuXHR9KTtcblxuXHRjb25zdCBhZ3JlZVRvc0NoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBpc0FncmVlVG9zLFxuXHR9KTtcblx0Y29uc3QgYWdyZWVUb3NMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGFncmVlVG9zQ2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0kgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnKSxcblx0fSk7XG5cblx0Y29uc3Qga2VlcExvZ2luQ2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCgpO1xuXHRjb25zdCBrZWVwTG9naW5MYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGtlZXBMb2dpbkNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGhlbHA6IGdldE1lc3NhZ2UoJ1NlbGVjdGVkT3JOb3QnKSxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnS2VlcCBtZSBsb2dnZWQgaW4nKSxcblx0fSk7XG5cblx0Y29uc3QgbGFiZWwgPSAoXG5cdFx0PGxhYmVsXG5cdFx0XHRjbGFzc05hbWU9e1snb28tdWktbGFiZWxXaWRnZXQnLCAnb28tdWktbGFiZWxFbGVtZW50LWxhYmVsJ119XG5cdFx0XHRzdHlsZT17e2ZvbnRTaXplOiAnOTAlJywgdGV4dEFsaWduOiAnanVzdGlmeSd9fVxuXHRcdC8+XG5cdCk7XG5cdGNvbnN0ICRsYWJlbCA9ICQobGFiZWwpIGFzIEpRdWVyeTtcblxuXHRjb25zdCAkYWdyZWVUb3M6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmFwcGVuZChhZ3JlZVRvc0xheW91dC4kZWxlbWVudCk7XG5cdGNvbnN0ICRmb3Jnb3RQYXNzd29yZDogSlF1ZXJ5ID0gJGxhYmVsXG5cdFx0LmNsb25lKClcblx0XHQuY3NzKCdmbG9hdCcsICdyaWdodCcpXG5cdFx0LmFwcGVuZChcblx0XHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOlBhc3N3b3JkUmVzZXQnKX0gdGl0bGU9e2dldE1lc3NhZ2UoJ1Jlc2V0IHBhc3N3b3JkJyl9PlxuXHRcdFx0XHR7Z2V0TWVzc2FnZSgnRm9yZ290IHBhc3N3b3JkPycpfVxuXHRcdFx0PC9hPlxuXHRcdCk7XG5cdGNvbnN0ICRpbnB1dEJveDogSlF1ZXJ5ID0gJGxhYmVsXG5cdFx0LmNsb25lKClcblx0XHQuY3NzKHtcblx0XHRcdGRpc3BsYXk6ICdibG9jaycsXG5cdFx0XHQnZm9udC1zaXplJzogJ2luaGVyaXQnLFxuXHRcdFx0cGFkZGluZzogJzZweCAwJyxcblx0XHR9KVxuXHRcdC5hcHBlbmQobmFtZUlucHV0LiRlbGVtZW50LmNzcygnbWFyZ2luLWJvdHRvbScsICc2cHgnKSwgcHdkSW5wdXQuJGVsZW1lbnQpO1xuXHRjb25zdCAkdG9zTGFiZWw6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmh0bWwoZ2V0TWVzc2FnZSgnaGVscCBmb3IgSSBhZ3JlZSB3aXRoIHRoZSByZWxldmFudCB0ZXJtcycpKTtcblx0Y29uc3QgJHJlbWVtYmVyTWU6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmFwcGVuZChrZWVwTG9naW5MYXlvdXQuJGVsZW1lbnQuY3NzKCdtYXJnaW4tdG9wJywgJzZweCcpKTtcblxuXHRyZXR1cm4ge1xuXHRcdCRhZ3JlZVRvcyxcblx0XHQkZm9yZ290UGFzc3dvcmQsXG5cdFx0JGlucHV0Qm94LFxuXHRcdCRyZW1lbWJlck1lLFxuXHRcdCR0b3NMYWJlbCxcblx0XHRhZ3JlZVRvc0NoZWNrYm94LFxuXHRcdGtlZXBMb2dpbkNoZWNrYm94LFxuXHRcdG1lc3NhZ2VEaWFsb2csXG5cdFx0bmFtZUlucHV0LFxuXHRcdHB3ZElucHV0LFxuXHR9O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUVsZW1lbnRzfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyfSBmcm9tICcuL3JlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXInO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IG9vdWlQcm9tcHQgPSBhc3luYyAocmV0eXBlUGFzc3dvcmQ6IGJvb2xlYW4pOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcblx0Y29uc3QgY29kZURpYWxvZzogT08udWkuTWVzc2FnZURpYWxvZyA9IG5ldyBPTy51aS5NZXNzYWdlRGlhbG9nKCk7XG5cdGNvbnN0IGNvZGVJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0aWNvbjogJ2tleScsXG5cdFx0cGxhY2Vob2xkZXI6IHJldHlwZVBhc3N3b3JkID8gZ2V0TWVzc2FnZSgnTmV3IHBhc3N3b3JkJykgOiBnZXRNZXNzYWdlKCc2LWRpZ2l0IG51bWJlcicpLFxuXHRcdHZhbGlkYXRlOiAnaW50ZWdlcicsXG5cdH0pO1xuXG5cdGNvbnN0IGNvZGVMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLlRleHRJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY29kZUlucHV0LCB7XG5cdFx0YWxpZ246ICd0b3AnLFxuXHRcdGxhYmVsOiAkKFxuXHRcdFx0PGIgY2xhc3NOYW1lPXtbJ29vLXVpLW1lc3NhZ2VEaWFsb2ctdGl0bGUnLCAnb28tdWktd2luZG93LWhlYWQnXX0+XG5cdFx0XHRcdHtyZXR5cGVQYXNzd29yZCA/IGdldE1lc3NhZ2UoJ0VudGVyIHBhc3N3b3JkJykgOiBnZXRNZXNzYWdlKCdFbnRlciAyRkEgdmVyaWZpY2F0aW9uIGNvZGUnKX1cblx0XHRcdDwvYj5cblx0XHQpLFxuXHR9KTtcblxuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW2NvZGVEaWFsb2ddKTtcblxuXHRjb25zdCBpbnN0YW5jZTogT08udWkuV2luZG93SW5zdGFuY2UgPSB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3coY29kZURpYWxvZywge1xuXHRcdG1lc3NhZ2U6IGNvZGVMYXlvdXQuJGVsZW1lbnQsXG5cdH0pO1xuXG5cdHJlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXIoKTtcblxuXHR2b2lkIGluc3RhbmNlLm9wZW5lZC50aGVuKCgpOiB2b2lkID0+IHtcblx0XHRjb2RlSW5wdXQub24oJ2VudGVyJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0KHdpbmRvd01hbmFnZXIuZ2V0Q3VycmVudFdpbmRvdygpIGFzIE9PLnVpLldpbmRvdykuY2xvc2Uoe1xuXHRcdFx0XHRhY3Rpb246ICdhY2NlcHQnLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0Y29kZUlucHV0LmZvY3VzKCk7XG5cdH0pO1xuXG5cdGNvbnN0IGRhdGE6IHZvaWQgPSBhd2FpdCBpbnN0YW5jZS5jbG9zZWQ7XG5cdGNvbnN0IF9kYXRhID0gZGF0YSBhcyB7YWN0aW9uOiBzdHJpbmd9IHwgdm9pZDtcblxuXHRyZXR1cm4gX2RhdGE/LmFjdGlvbiA9PT0gJ2FjY2VwdCcgPyBjb2RlSW5wdXQuZ2V0VmFsdWUoKSA6IG51bGw7XG59O1xuXG5leHBvcnQge29vdWlQcm9tcHR9O1xuIiwgImltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCByZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xuXHQkKHdpbmRvdykub2ZmKHtcblx0XHQnb3JpZW50YXRpb25jaGFuZ2UgcmVzaXplJzogKHdpbmRvd01hbmFnZXIgYXMgdW5rbm93biBhcyB7b25XaW5kb3dSZXNpemVIYW5kbGVyOiAoKSA9PiB2b2lkfSlcblx0XHRcdC5vbldpbmRvd1Jlc2l6ZUhhbmRsZXIsXG5cdH0pO1xufTtcblxuZXhwb3J0IHtyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgcXVlcnlMb2dpblRva2VuID0gYXN5bmMgKFxuXHR0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlXG4pOiBQcm9taXNlPHtcblx0bG9naW5Ub2tlbjogc3RyaW5nO1xuXHR0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlO1xufT4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoe1xuXHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0dldHRpbmcgbG9naW4gdG9rZW4nKSxcblx0fSk7XG5cblx0Y29uc3QgbG9naW5Ub2tlbjogc3RyaW5nID0gYXdhaXQgYXBpLmdldFRva2VuKCdsb2dpbicpO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeSh7XG5cdFx0dGV4dDogZ2V0TWVzc2FnZSgnTG9naW4gdG9rZW4gZ2V0dGVkJyksXG5cdFx0ZHVyYXRpb246IC0xLFxuXHR9KTtcblxuXHRyZXR1cm4ge1xuXHRcdGxvZ2luVG9rZW4sXG5cdFx0dG9hc3RpZnlJbnN0YW5jZSxcblx0fTtcbn07XG5cbmV4cG9ydCB7cXVlcnlMb2dpblRva2VufTtcbiIsICJpbXBvcnQge2RlbGF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IHJlZGlyZWN0T3JpZ2luTG9naW5QYWdlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRhd2FpdCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXHRhd2FpdCBkZWxheSgzICogMTAwMCk7XG5cdGxvY2F0aW9uLmhyZWYgPSBtdy51dGlsLmdldFVybCgnU3BlY2lhbDpVc2VybG9naW4nKTtcbn07XG5cbmV4cG9ydCB7cmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3Qgc2hvd0Vycm9yID0gKGVycm9yOiB1bmtub3duLCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlKTogdm9pZCA9PiB7XG5cdGNvbnNvbGUuZXJyb3IoJ1tBamF4TG9naW5dIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksXG5cdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdlcnJvcidcblx0KTtcbn07XG5cbmV4cG9ydCB7c2hvd0Vycm9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLHVCQUF3QjtBQUN4QixJQUFBQyxVQUFXOztBQ0RaLElBQUFDLHNCQUEyQ0MsUUFBQSxpQkFBQTs7QUNEM0MsSUFBQUMsb0JBQWtDRCxRQUFBLGdDQUFBO0FBRWxDLElBQU1FLGNBQWNBLENBQ25CQyxVQUNBQyxrQkFDVTtBQUNWRCxXQUFTRSxHQUFHLFVBQUEsR0FBU0osa0JBQUFLLHFCQUFvQkYsYUFBYSxDQUFDO0FBQ3ZERCxXQUFTRSxHQUFHLFdBQVdELGFBQWE7QUFDckM7O0FDUEEsSUFBQUcscUJBQXdCUCxRQUFBLGlCQUFBO0FBVXhCLElBQU1RLE9BQUEsR0FBY0QsbUJBQUFFLFdBQUEsYUFBQUMsT0FBK0JaLE9BQU8sQ0FBRTs7QUNWNUQsSUFBQWEsc0JBQWtCQyxRQUFBWixRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNEbEIsSUFBQWEscUJBQWtCRCxRQUFBWixRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNBbEIsSUFBQWMscUJBQXVCZCxRQUFBLGlCQUFBO0FBRXZCLElBQU1lLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sbUJBQUEsR0FBa0JELG1CQUFBRSxVQUFTO01BQzFCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsU0FBQSxHQUFRTCxtQkFBQUUsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pFLElBQUk7SUFDTCxDQUFD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O0lBQzlDOUgsV0FBV0EsTUFBTTtJQUFDO0VBQ25CO0FBRUEsUUFBTWhFLGdCQUFpQitMLFdBQXlEO0FBQy9FLFFBQUksRUFBQSxHQUFDcE0sb0JBQUFxTSxxQkFBb0JELEtBQUssR0FBRztBQUNoQztJQUNEO0FBRUFBLFVBQU1FLGVBQWU7QUFDckI1QyxjQUFVeUMsb0JBQW9CO0VBQy9CO0FBQ0FoTSxjQUFZNEwsZUFBZTFMLGFBQWE7QUFDekMsQ0FBQzsiLAogICJuYW1lcyI6IFsibG9naW5FbGVtZW50U2VsZWN0b3IiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDEzIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYWRkTGlzdGVuZXIiLCAiJGVsZW1lbnQiLCAiZXZlbnRMaXN0ZW5lciIsICJvbiIsICJmaWx0ZXJBbHRlcmVkQ2xpY2tzIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDExIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQ2FuY2VsIiwgInpoIiwgIkxvZ2luIiwgIlBhc3N3b3JkIiwgIlVzZXJuYW1lIiwgIkFncmVlZE9yTm90IiwgIkRvdWJsZUNoZWNrQWdyZWVkT3JOb3QiLCAiRW1wdHkyRkEiLCAiRW1wdHlQYXNzd29yZCIsICJFbXB0eVVzZXJuYW1lT3JQYXNzd29yZCIsICJTZWxlY3RlZE9yTm90IiwgIlRvb0ZyZXF1ZW50IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbml0V2luZG93TWFuYWdlciIsICJPTyIsICJ1aSIsICJXaW5kb3dNYW5hZ2VyIiwgIndpbmRvd01hbmFnZXIiLCAib291aUNvbmZpcm0iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJvcHRpb25zIiwgIm1lc3NhZ2VEaWFsb2ciLCAiTWVzc2FnZURpYWxvZyIsICJhZGRXaW5kb3dzIiwgImluc3RhbmNlIiwgIm9wZW5XaW5kb3ciLCAiZGF0YSIsICJjbG9zZWQiLCAiX2RhdGEiLCAiYWN0aW9uIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiY2hlY2tWYWxpZCIsICJfcmVmMiIsICJhZ3JlZVRvc0NoZWNrYm94IiwgIm5hbWVJbnB1dCIsICJwd2RJbnB1dCIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImlzQWdyZWVUb3MiLCAiaXNTZWxlY3RlZCIsICJpc0ZpbGwiLCAiZ2V0VmFsdWUiLCAidHJpbSIsICJpbmNsdWRlcyIsICJoaWRlVG9hc3QiLCAiY2xlYXJXaW5kb3dzIiwgIm1lc3NhZ2UiLCAiJCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaW5uZXJIVE1MIiwgImFjdGlvbnMiLCAibGFiZWwiLCAiZmxhZ3MiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJpc1ZhbGlkIiwgIl94MiIsICJfeDMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImdlbmVyYXRlRWxlbWVudHMiLCAiVGV4dElucHV0V2lkZ2V0IiwgImljb24iLCAicGxhY2Vob2xkZXIiLCAidmFsaWRhdGUiLCAidHlwZSIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgImFncmVlVG9zTGF5b3V0IiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImtlZXBMb2dpbkNoZWNrYm94IiwgImtlZXBMb2dpbkxheW91dCIsICJoZWxwIiwgImNsYXNzTmFtZSIsICJzdHlsZSIsICJmb250U2l6ZSIsICJ0ZXh0QWxpZ24iLCAiJGxhYmVsIiwgIiRhZ3JlZVRvcyIsICJjbG9uZSIsICJhcHBlbmQiLCAiJGZvcmdvdFBhc3N3b3JkIiwgImNzcyIsICJocmVmIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgInRpdGxlIiwgIiRpbnB1dEJveCIsICJkaXNwbGF5IiwgInBhZGRpbmciLCAiJHRvc0xhYmVsIiwgImh0bWwiLCAiJHJlbWVtYmVyTWUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ3IiwgInJlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXIiLCAid2luZG93IiwgIm9mZiIsICJvbldpbmRvd1Jlc2l6ZUhhbmRsZXIiLCAib291aVByb21wdCIsICJfcmVmMyIsICJyZXR5cGVQYXNzd29yZCIsICJjb2RlRGlhbG9nIiwgImNvZGVJbnB1dCIsICJjb2RlTGF5b3V0IiwgIm9wZW5lZCIsICJ0aGVuIiwgImdldEN1cnJlbnRXaW5kb3ciLCAiY2xvc2UiLCAiZm9jdXMiLCAiX3g0IiwgImltcG9ydF9leHRfZ2FkZ2V0OCIsICJxdWVyeUxvZ2luVG9rZW4iLCAiX3JlZjQiLCAibG9naW5Ub2tlbiIsICJnZXRUb2tlbiIsICJfeDUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ5IiwgInJlZGlyZWN0T3JpZ2luTG9naW5QYWdlIiwgIl9yZWY1IiwgImRlbGF5IiwgImxvY2F0aW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MTAiLCAic2hvd0Vycm9yIiwgImVycm9yIiwgImNvbnNvbGUiLCAiaW1wb3J0X2V4dF9nYWRnZXQxMiIsICJhamF4TG9naW4iLCAibG9naW4iLCAiX3JlZjYiLCAibG9naW5Db250aW51ZSIsICJfcmVzcG9uc2UkY2xpZW50bG9naW4iLCAiX3Jlc3BvbnNlJGNsaWVudGxvZ2luMiIsICJwYXJhbXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibG9naW50b2tlbiIsICJsb2dpbnJldHVybnVybCIsICJ1c2VybmFtZSIsICJwYXNzd29yZCIsICJyZW1lbWJlck1lIiwgImxvZ2luY29udGludWUiLCAidmFsdWUiLCAicmV0eXBlIiwgIk9BVEhUb2tlbiIsICJyZXNwb25zZSIsICJwb3N0IiwgInN0YXR1cyIsICJyZWxvYWQiLCAibWVzc2FnZWNvZGUiLCAicmVwbGFjZSIsICJjaGVjayIsICJfcmVmNyIsICJsYXN0SXNBZ3JlZVRvcyIsICJsYXN0VG9hc3RpZnlJbnN0YW5jZSIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgIlByb2Nlc3MiLCAic2l6ZSIsICJnZXRCb2R5IiwgImluaXRBdXRvTG9naW4iLCAiJGJvZHkiLCAid2dVc2VyTmFtZSIsICJjb25maWciLCAiZ2V0IiwgIiRsb2dpbkVsZW1lbnQiLCAiZmluZCIsICJsZW5ndGgiLCAiYXBwZW5kVG8iLCAiZmFrZVRvYXN0aWZ5SW5zdGFuY2UiLCAiZXZlbnQiLCAiY2hlY2tBMTF5Q29uZmlybUtleSIsICJwcmV2ZW50RGVmYXVsdCJdCn0K
