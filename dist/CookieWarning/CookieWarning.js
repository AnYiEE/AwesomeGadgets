/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/CookieWarning}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/.pnpm/broadcastchannel-polyfill@1.0.1/node_modules/broadcastchannel-polyfill/index.js
var require_broadcastchannel_polyfill = __commonJS({
  "node_modules/.pnpm/broadcastchannel-polyfill@1.0.1/node_modules/broadcastchannel-polyfill/index.js"() {
    (function(global) {
      var channels = [];
      function BroadcastChannel2(channel) {
        var $this = this;
        channel = String(channel);
        var id = "$BroadcastChannel$" + channel + "$";
        channels[id] = channels[id] || [];
        channels[id].push(this);
        this._name = channel;
        this._id = id;
        this._closed = false;
        this._mc = new MessageChannel();
        this._mc.port1.start();
        this._mc.port2.start();
        global.addEventListener("storage", function(e) {
          if (e.storageArea !== global.localStorage)
            return;
          if (e.newValue == null || e.newValue === "")
            return;
          if (e.key.substring(0, id.length) !== id)
            return;
          var data = JSON.parse(e.newValue);
          $this._mc.port2.postMessage(data);
        });
      }
      BroadcastChannel2.prototype = {
        // BroadcastChannel API
        get name() {
          return this._name;
        },
        postMessage: function(message) {
          var $this = this;
          if (this._closed) {
            var e = new Error();
            e.name = "InvalidStateError";
            throw e;
          }
          var value = JSON.stringify(message);
          var key = this._id + String(Date.now()) + "$" + String(Math.random());
          global.localStorage.setItem(key, value);
          setTimeout(function() {
            global.localStorage.removeItem(key);
          }, 500);
          channels[this._id].forEach(function(bc) {
            if (bc === $this)
              return;
            bc._mc.port2.postMessage(JSON.parse(value));
          });
        },
        close: function() {
          if (this._closed)
            return;
          this._closed = true;
          this._mc.port1.close();
          this._mc.port2.close();
          var index = channels[this._id].indexOf(this);
          channels[this._id].splice(index, 1);
        },
        // EventTarget API
        get onmessage() {
          return this._mc.port1.onmessage;
        },
        set onmessage(value) {
          this._mc.port1.onmessage = value;
        },
        addEventListener: function() {
          return this._mc.port1.addEventListener.apply(this._mc.port1, arguments);
        },
        removeEventListener: function() {
          return this._mc.port1.removeEventListener.apply(this._mc.port1, arguments);
        },
        dispatchEvent: function() {
          return this._mc.port1.dispatchEvent.apply(this._mc.port1, arguments);
        }
      };
      global.BroadcastChannel = global.BroadcastChannel || BroadcastChannel2;
    })(self);
  }
});

// dist/CookieWarning/CookieWarning.js
require_broadcastchannel_polyfill();
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
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
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames2(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
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
//! src/CookieWarning/modules/constant.ts
var STORAGE_KEY = "ext.gadget.CookieWarning_cookieConsent";
var LAST_STORAGE_VALUE = mw.storage.get(STORAGE_KEY);
var URL_CONSENT_READ = mw.util.getParamValue("consentRead");
var WG_USER_NAME = mw.config.get("wgUserName");
//! src/CookieWarning/components/AgreeButton.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/CookieWarning/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Agree: (0, import_ext_gadget.localize)({
      en: "I agree",
      ja: "すべて許可する",
      zh: "同意"
    }),
    CookieNotice: (0, import_ext_gadget.localize)({
      en: 'To provide better experience, we utilize cookies and other technologies to provide services. You can refer to our <a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="Personal Information Protection Policy"><em>Personal Information Protection Policy</em></a> to learn how we handle your personal information.',
      ja: 'より良いサービスを提供するために、クッキーやその他の技術を利用しています。個人情報の取り扱い方法については、<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="個人情報保護條例">個人情報保護條例</a>をご参照ください。',
      "zh-hans": '为了提供最佳体验，我们利用Cookie及其他技术提供服务；您可以查阅我们的<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="个人信息保护条例">个人信息保护条例</a>，了解我们如何处理您的个人信息。',
      "zh-hant": '為了提供最佳體驗，我们利用Cookie及其他技術提供服務；您可以查閱我們的<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="個人信息保護條例">個人信息保護條例</a>，了解我們如何處理您的個人信息'
    }),
    TOSNotice: (0, import_ext_gadget.localize)({
      en: 'By using this site, you agree to our <a rel="noopener" target="_blank" href="/wiki/LIB:TOS?consentRead=1" title="Terms of Use"><em>Terms of Use</em></a>, <a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="Personal Information Protection Policy"><em>Personal Information Protection Policy</em></a>, and other <a rel="noopener" target="_blank" href="/wiki/LIB:LAW?consentRead=1" title="Legal policies">legal policies</a>.',
      ja: 'このサイトを利用することで、<a rel="noopener" target="_blank" href="/wiki/LIB:TOS?consentRead=1" title="利用規約">利用規約</a>、<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="個人情報保護條例">個人情報保護條例</a>、その他の<a rel="noopener" target="_blank" href="/wiki/LIB:LAW?consentRead=1" title="法的ポリシー">法的ポリシー</a>について十分に理解し、遵守することに同意したものとみなされます。',
      "zh-hans": '访问本网站，或以任何方式使用本网站，均代表您已仔细阅读、充分了解并同意遵守本网站的<a rel="noopener" target="_blank" href="/wiki/LIB:TOS?consentRead=1" title="用户协议">用户协议</a>、<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="个人信息保护条例">个人信息保护条例</a>及其他各项<a rel="noopener" target="_blank" href="/wiki/LIB:LAW?consentRead=1" title="法律条例">法律条例</a>的规定。',
      "zh-hant": '存取本網站，或以任何方式使用本網站，均代表您已仔細閱讀、充分了解並同意遵守本網站的<a rel="noopener" target="_blank" href="/wiki/LIB:TOS?consentRead=1" title="用戶協議">用戶協議</a>、<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="個人信息保護條例">個人信息保護條例</a>及其他各項<a rel="noopener" target="_blank" href="/wiki/LIB:LAW?consentRead=1" title="法律條例">法律條例</a>的規定。'
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/CookieWarning/components/AgreeButton.tsx
var AgreeButton = ({
  onClick
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  className: ["mw-ui-button", "mw-ui-progressive", "cdx-button", "cdx-button--action-progressive"],
  role: "button",
  onClick
}, getMessage("Agree"));
var AgreeButton_default = AgreeButton;
//! src/CookieWarning/components/ConsentNotice.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
var ConsentNotice = () => /* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("p", {
  innerHTML: getMessage("TOSNotice")
}), /* @__PURE__ */ import_ext_gadget3.default.createElement("p", {
  innerHTML: getMessage("CookieNotice")
}));
var ConsentNotice_default = ConsentNotice;
//! src/CookieWarning/components/RootElement.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.React"), 1);
//! src/CookieWarning/components/CookieWarning.module.less
var warning = "CookieWarning-module__warning_ukvfyG__450";
//! src/CookieWarning/components/RootElement.tsx
var RootElement = (agreeButtonOnClick) => /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
  className: [warning, "noprint"]
}, /* @__PURE__ */ import_ext_gadget4.default.createElement(ConsentNotice_default, null), /* @__PURE__ */ import_ext_gadget4.default.createElement(AgreeButton_default, {
  onClick: agreeButtonOnClick
}));
//! src/CookieWarning/CookieWarning.ts
(function cookieWarning() {
  if (WG_USER_NAME || LAST_STORAGE_VALUE === "1" || URL_CONSENT_READ) {
    return;
  }
  const closeWarning = () => {
    broadcastChannel.postMessage("close");
    broadcastChannel.close();
    rootElement.remove();
    mw.storage.set(STORAGE_KEY, "1", 60 * 60 * 1e3 * 24 * 30);
  };
  const broadcastChannel = new BroadcastChannel(STORAGE_KEY);
  broadcastChannel.addEventListener("message", closeWarning);
  const rootElement = RootElement(closeWarning);
  document.body.append(rootElement);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Nvb2tpZVdhcm5pbmcvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvQ29va2llV2FybmluZy9jb21wb25lbnRzL0FncmVlQnV0dG9uLnRzeCIsICJzcmMvQ29va2llV2FybmluZy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Nvb2tpZVdhcm5pbmcvY29tcG9uZW50cy9Db25zZW50Tm90aWNlLnRzeCIsICJzcmMvQ29va2llV2FybmluZy9jb21wb25lbnRzL1Jvb3RFbGVtZW50LnRzeCIsICJzcmMvQ29va2llV2FybmluZy9jb21wb25lbnRzL0Nvb2tpZVdhcm5pbmcubW9kdWxlLmxlc3MiLCAic3JjL0Nvb2tpZVdhcm5pbmcvQ29va2llV2FybmluZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiKGZ1bmN0aW9uKGdsb2JhbCkge1xuICAgIHZhciBjaGFubmVscyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gQnJvYWRjYXN0Q2hhbm5lbChjaGFubmVsKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgIGNoYW5uZWwgPSBTdHJpbmcoY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIGlkID0gJyRCcm9hZGNhc3RDaGFubmVsJCcgKyBjaGFubmVsICsgJyQnO1xuXG4gICAgICAgIGNoYW5uZWxzW2lkXSA9IGNoYW5uZWxzW2lkXSB8fCBbXTtcbiAgICAgICAgY2hhbm5lbHNbaWRdLnB1c2godGhpcyk7XG5cbiAgICAgICAgdGhpcy5fbmFtZSA9IGNoYW5uZWw7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIHRoaXMuX2Nsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9tYyA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICB0aGlzLl9tYy5wb3J0MS5zdGFydCgpO1xuICAgICAgICB0aGlzLl9tYy5wb3J0Mi5zdGFydCgpO1xuXG4gICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKGUuc3RvcmFnZUFyZWEgIT09IGdsb2JhbC5sb2NhbFN0b3JhZ2UpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChlLm5ld1ZhbHVlID09IG51bGwgfHwgZS5uZXdWYWx1ZSA9PT0gJycpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChlLmtleS5zdWJzdHJpbmcoMCwgaWQubGVuZ3RoKSAhPT0gaWQpIHJldHVybjtcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShlLm5ld1ZhbHVlKTtcbiAgICAgICAgICAgICR0aGlzLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgQnJvYWRjYXN0Q2hhbm5lbC5wcm90b3R5cGUgPSB7XG4gICAgICAgIC8vIEJyb2FkY2FzdENoYW5uZWwgQVBJXG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHBvc3RNZXNzYWdlOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgZS5uYW1lID0gJ0ludmFsaWRTdGF0ZUVycm9yJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XG5cbiAgICAgICAgICAgIC8vIEJyb2FkY2FzdCB0byBvdGhlciBjb250ZXh0cyB2aWEgc3RvcmFnZSBldmVudHMuLi5cbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLl9pZCArIFN0cmluZyhEYXRlLm5vdygpKSArICckJyArIFN0cmluZyhNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gY3VycmVudCBjb250ZXh0IHZpYSBwb3J0c1xuICAgICAgICAgICAgY2hhbm5lbHNbdGhpcy5faWRdLmZvckVhY2goZnVuY3Rpb24oYmMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmMgPT09ICR0aGlzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgYmMuX21jLnBvcnQyLnBvc3RNZXNzYWdlKEpTT04ucGFyc2UodmFsdWUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VkKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLl9jbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQyLmNsb3NlKCk7XG5cbiAgICAgICAgICAgIHZhciBpbmRleCA9IGNoYW5uZWxzW3RoaXMuX2lkXS5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgY2hhbm5lbHNbdGhpcy5faWRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gRXZlbnRUYXJnZXQgQVBJXG4gICAgICAgIGdldCBvbm1lc3NhZ2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEub25tZXNzYWdlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb25tZXNzYWdlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0MS5vbm1lc3NhZ2UgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oLyp0eXBlLCBsaXN0ZW5lciAsIHVzZUNhcHR1cmUqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLmFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICBkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbigvKmV2ZW50Ki8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5kaXNwYXRjaEV2ZW50LmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCA9IGdsb2JhbC5Ccm9hZGNhc3RDaGFubmVsIHx8IEJyb2FkY2FzdENoYW5uZWw7XG59KShzZWxmKTtcbiIsICJjb25zdCBTVE9SQUdFX0tFWTogc3RyaW5nID0gJ2V4dC5nYWRnZXQuQ29va2llV2FybmluZ19jb29raWVDb25zZW50JztcblxuY29uc3QgTEFTVF9TVE9SQUdFX1ZBTFVFOiBzdHJpbmcgfCBudWxsID0gbXcuc3RvcmFnZS5nZXQoU1RPUkFHRV9LRVkpIGFzIHN0cmluZyB8IG51bGw7XG5cbmNvbnN0IFVSTF9DT05TRU5UX1JFQUQ6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2NvbnNlbnRSZWFkJyk7XG5cbmNvbnN0IFdHX1VTRVJfTkFNRTogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKTtcblxuZXhwb3J0IHtMQVNUX1NUT1JBR0VfVkFMVUUsIFNUT1JBR0VfS0VZLCBVUkxfQ09OU0VOVF9SRUFELCBXR19VU0VSX05BTUV9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vbW9kdWxlcy9pMThuJztcblxuaW50ZXJmYWNlIFByb3BzIHtcblx0b25DbGljaygpOiB2b2lkO1xufVxuXG5jb25zdCBBZ3JlZUJ1dHRvbiA9ICh7b25DbGlja306IFByb3BzKSA9PiAoXG5cdDxzcGFuXG5cdFx0Y2xhc3NOYW1lPXtbJ213LXVpLWJ1dHRvbicsICdtdy11aS1wcm9ncmVzc2l2ZScsICdjZHgtYnV0dG9uJywgJ2NkeC1idXR0b24tLWFjdGlvbi1wcm9ncmVzc2l2ZSddfVxuXHRcdHJvbGU9XCJidXR0b25cIlxuXHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdD5cblx0XHR7Z2V0TWVzc2FnZSgnQWdyZWUnKX1cblx0PC9zcGFuPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQWdyZWVCdXR0b247XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFncmVlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0kgYWdyZWUnLFxuXHRcdFx0amE6ICfjgZnjgbnjgaboqLHlj6/jgZnjgosnLFxuXHRcdFx0emg6ICflkIzmhI8nLFxuXHRcdH0pLFxuXHRcdENvb2tpZU5vdGljZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUbyBwcm92aWRlIGJldHRlciBleHBlcmllbmNlLCB3ZSB1dGlsaXplIGNvb2tpZXMgYW5kIG90aGVyIHRlY2hub2xvZ2llcyB0byBwcm92aWRlIHNlcnZpY2VzLiBZb3UgY2FuIHJlZmVyIHRvIG91ciA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUD9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCJQZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeVwiPjxlbT5QZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeTwvZW0+PC9hPiB0byBsZWFybiBob3cgd2UgaGFuZGxlIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24uJyxcblx0XHRcdGphOiAn44KI44KK6Imv44GE44K144O844OT44K544KS5o+Q5L6b44GZ44KL44Gf44KB44Gr44CB44Kv44OD44Kt44O844KE44Gd44Gu5LuW44Gu5oqA6KGT44KS5Yip55So44GX44Gm44GE44G+44GZ44CC5YCL5Lq65oOF5aCx44Gu5Y+W44KK5omx44GE5pa55rOV44Gr44Gk44GE44Gm44Gv44CBPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFA/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5YCL5Lq65oOF5aCx5L+d6K235qKd5L6LXCI+5YCL5Lq65oOF5aCx5L+d6K235qKd5L6LPC9hPuOCkuOBlOWPgueFp+OBj+OBoOOBleOBhOOAgicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfkuLrkuobmj5DkvpvmnIDkvbPkvZPpqozvvIzmiJHku6zliKnnlKhDb29raWXlj4rlhbbku5bmioDmnK/mj5DkvpvmnI3liqHvvJvmgqjlj6/ku6Xmn6XpmIXmiJHku6znmoQ8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUD9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLkuKrkurrkv6Hmga/kv53miqTmnaHkvotcIj7kuKrkurrkv6Hmga/kv53miqTmnaHkvos8L2E+77yM5LqG6Kej5oiR5Lus5aaC5L2V5aSE55CG5oKo55qE5Liq5Lq65L+h5oGv44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+eCuuS6huaPkOS+m+acgOS9s+mrlOmpl++8jOaIkeS7rOWIqeeUqENvb2tpZeWPiuWFtuS7luaKgOihk+aPkOS+m+acjeWLme+8m+aCqOWPr+S7peafpemWseaIkeWAkeeahDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIuWAi+S6uuS/oeaBr+S/neitt+aineS+i1wiPuWAi+S6uuS/oeaBr+S/neitt+aineS+izwvYT7vvIzkuobop6PmiJHlgJHlpoLkvZXomZXnkIbmgqjnmoTlgIvkurrkv6Hmga8nLFxuXHRcdH0pLFxuXHRcdFRPU05vdGljZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCeSB1c2luZyB0aGlzIHNpdGUsIHlvdSBhZ3JlZSB0byBvdXIgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlRPUz9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCJUZXJtcyBvZiBVc2VcIj48ZW0+VGVybXMgb2YgVXNlPC9lbT48L2E+LCA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUD9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCJQZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeVwiPjxlbT5QZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeTwvZW0+PC9hPiwgYW5kIG90aGVyIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpMQVc/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwiTGVnYWwgcG9saWNpZXNcIj5sZWdhbCBwb2xpY2llczwvYT4uJyxcblx0XHRcdGphOiAn44GT44Gu44K144Kk44OI44KS5Yip55So44GZ44KL44GT44Go44Gn44CBPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlRPUz9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLliKnnlKjopo/ntIRcIj7liKnnlKjopo/ntIQ8L2E+44CBPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFA/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5YCL5Lq65oOF5aCx5L+d6K235qKd5L6LXCI+5YCL5Lq65oOF5aCx5L+d6K235qKd5L6LPC9hPuOAgeOBneOBruS7luOBrjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpMQVc/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5rOV55qE44Od44Oq44K344O8XCI+5rOV55qE44Od44Oq44K344O8PC9hPuOBq+OBpOOBhOOBpuWNgeWIhuOBq+eQhuino+OBl+OAgemBteWuiOOBmeOCi+OBk+OBqOOBq+WQjOaEj+OBl+OBn+OCguOBruOBqOOBv+OBquOBleOCjOOBvuOBmeOAgicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCforr/pl67mnKznvZHnq5nvvIzmiJbku6Xku7vkvZXmlrnlvI/kvb/nlKjmnKznvZHnq5nvvIzlnYfku6Pooajmgqjlt7Lku5Tnu4bpmIXor7vjgIHlhYXliIbkuobop6PlubblkIzmhI/pgbXlrojmnKznvZHnq5nnmoQ8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6VE9TP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIueUqOaIt+WNj+iurlwiPueUqOaIt+WNj+iurjwvYT7jgIE8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUD9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLkuKrkurrkv6Hmga/kv53miqTmnaHkvotcIj7kuKrkurrkv6Hmga/kv53miqTmnaHkvos8L2E+5Y+K5YW25LuW5ZCE6aG5PGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOkxBVz9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLms5XlvovmnaHkvotcIj7ms5XlvovmnaHkvos8L2E+55qE6KeE5a6a44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+WtmOWPluacrOe2suerme+8jOaIluS7peS7u+S9leaWueW8j+S9v+eUqOacrOe2suerme+8jOWdh+S7o+ihqOaCqOW3suS7lOe0sOmWseiugOOAgeWFheWIhuS6huino+S4puWQjOaEj+mBteWuiOacrOe2suermeeahDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpUT1M/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi55So5oi25Y2U6K2wXCI+55So5oi25Y2U6K2wPC9hPuOAgTxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIuWAi+S6uuS/oeaBr+S/neitt+aineS+i1wiPuWAi+S6uuS/oeaBr+S/neitt+aineS+izwvYT7lj4rlhbbku5blkITpoIU8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6TEFXP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIuazleW+i+aineS+i1wiPuazleW+i+aineS+izwvYT7nmoTopo/lrprjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBDb25zZW50Tm90aWNlID0gKCkgPT4gKFxuXHQ8PlxuXHRcdDxwIGlubmVySFRNTD17Z2V0TWVzc2FnZSgnVE9TTm90aWNlJyl9IC8+XG5cdFx0PHAgaW5uZXJIVE1MPXtnZXRNZXNzYWdlKCdDb29raWVOb3RpY2UnKX0gLz5cblx0PC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb25zZW50Tm90aWNlO1xuIiwgImltcG9ydCBBZ3JlZUJ1dHRvbiBmcm9tICcuL0FncmVlQnV0dG9uJztcbmltcG9ydCBDb25zZW50Tm90aWNlIGZyb20gJy4vQ29uc2VudE5vdGljZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge3dhcm5pbmd9IGZyb20gJy4vQ29va2llV2FybmluZy5tb2R1bGUubGVzcyc7XG5cbmNvbnN0IFJvb3RFbGVtZW50ID0gKGFncmVlQnV0dG9uT25DbGljazogKCkgPT4gdm9pZCkgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT17W3dhcm5pbmcsICdub3ByaW50J119PlxuXHRcdDxDb25zZW50Tm90aWNlIC8+XG5cdFx0PEFncmVlQnV0dG9uIG9uQ2xpY2s9e2FncmVlQnV0dG9uT25DbGlja30gLz5cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQge1Jvb3RFbGVtZW50fTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0Nvb2tpZVdhcm5pbmcvY29tcG9uZW50cy9Db29raWVXYXJuaW5nLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3Qgd2FybmluZyA9IFwiQ29va2llV2FybmluZy1tb2R1bGVfX3dhcm5pbmdfdWt2ZnlHX180NTBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIndhcm5pbmdcIjogd2FybmluZ1xufTtcbiAgICAgICIsICJpbXBvcnQge0xBU1RfU1RPUkFHRV9WQUxVRSwgU1RPUkFHRV9LRVksIFVSTF9DT05TRU5UX1JFQUQsIFdHX1VTRVJfTkFNRX0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7Um9vdEVsZW1lbnR9IGZyb20gJy4vY29tcG9uZW50cy9Sb290RWxlbWVudCc7XG5cbihmdW5jdGlvbiBjb29raWVXYXJuaW5nKCk6IHZvaWQge1xuXHRpZiAoV0dfVVNFUl9OQU1FIHx8IExBU1RfU1RPUkFHRV9WQUxVRSA9PT0gJzEnIHx8IFVSTF9DT05TRU5UX1JFQUQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjbG9zZVdhcm5pbmcgPSAoKTogdm9pZCA9PiB7XG5cdFx0YnJvYWRjYXN0Q2hhbm5lbC5wb3N0TWVzc2FnZSgnY2xvc2UnKTtcblx0XHRicm9hZGNhc3RDaGFubmVsLmNsb3NlKCk7XG5cdFx0cm9vdEVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0bXcuc3RvcmFnZS5zZXQoU1RPUkFHRV9LRVksICcxJywgNjAgKiA2MCAqIDEwMDAgKiAyNCAqIDMwKTtcblx0fTtcblxuXHRjb25zdCBicm9hZGNhc3RDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoU1RPUkFHRV9LRVkpO1xuXHRicm9hZGNhc3RDaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBjbG9zZVdhcm5pbmcpO1xuXG5cdGNvbnN0IHJvb3RFbGVtZW50ID0gUm9vdEVsZW1lbnQoY2xvc2VXYXJuaW5nKTtcblxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChyb290RWxlbWVudCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsS0FBQyxTQUFTLFFBQVE7QUFDZCxVQUFJLFdBQVcsQ0FBQztBQUVoQixlQUFTQSxrQkFBaUIs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QU8sVUFBQSxNQUNDRixtQ0FBQUwsUUFBQUMsY0FBQyxLQUFBO0VBQUVPLFdBQVdaLFdBQVcsV0FBVztBQUFBLENBQUcsR0FDdkNTLG1DQUFBTCxRQUFBQyxjQUFDLEtBQUE7RUFBRU8sV0FBV1osV0FBVyxjQUFjO0FBQUEsQ0FBRyxDQUMzQztBQUdELElBQU9hLHdCQUFRSDs7QUNSZixJQUFBSSxxQkFBa0IxQixRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNEWCxJQUFNMEIsVUFBVTs7QURJdkIsSUFBTUMsY0FBZUMsd0JBQ3BCSCxtQ0FBQVYsUUFBQUMsY0FBQyxPQUFBO0VBQUlDLFdBQVcsQ0FBQ1MsU0FBUyxTQUFTO0FBQUEsR0FDbENELG1DQUFBVixRQUFBQyxjQUFDUSx1QkFBQSxJQUFjLEdBQ2ZDLG1DQUFBVixRQUFBQyxjQUFDRyxxQkFBQTtFQUFZTCxTQUFTYztBQUFBLENBQW9CLENBQzNDOztDRU5BLFNBQVNDLGdCQUFzQjtBQUMvQixNQUFJakMsZ0JBQWdCUCx1QkFBdUIsT0FBT0ksa0JBQWtCO0FBQ25FO0VBQ0Q7QUFFQSxRQUFNcUMsZUFBZUEsTUFBWTtBQUNoQ0MscUJBQWlCQyxZQUFZLE9BQU87QUFDcENELHFCQUFpQkUsTUFBTTtBQUN2QkMsZ0JBQVlDLE9BQU87QUFDbkI3QyxPQUFHQyxRQUFRNkMsSUFBSWhELGFBQWEsS0FBSyxLQUFLLEtBQUssTUFBTyxLQUFLLEVBQUU7RUFDMUQ7QUFFQSxRQUFNMkMsbUJBQXFDLElBQUlNLGlCQUFpQmpELFdBQVc7QUFDM0UyQyxtQkFBaUJPLGlCQUFpQixXQUFXUixZQUFZO0FBRXpELFFBQU1JLGNBQWNQLFlBQVlHLFlBQVk7QUFFNUNTLFdBQVNDLEtBQUtDLE9BQU9QLFdBQVc7QUFDakMsR0FBRzsiLAogICJuYW1lcyI6IFsiQnJvYWRjYXN0Q2hhbm5lbCIsICJTVE9SQUdFX0tFWSIsICJMQVNUX1NUT1JBR0VfVkFMVUUiLCAibXciLCAic3RvcmFnZSIsICJnZXQiLCAiVVJMX0NPTlNFTlRfUkVBRCIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiV0dfVVNFUl9OQU1FIiwgImNvbmZpZyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJBZ3JlZSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJ6aCIsICJDb29raWVOb3RpY2UiLCAiVE9TTm90aWNlIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJBZ3JlZUJ1dHRvbiIsICJvbkNsaWNrIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAicm9sZSIsICJBZ3JlZUJ1dHRvbl9kZWZhdWx0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJDb25zZW50Tm90aWNlIiwgIkZyYWdtZW50IiwgImlubmVySFRNTCIsICJDb25zZW50Tm90aWNlX2RlZmF1bHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgIndhcm5pbmciLCAiUm9vdEVsZW1lbnQiLCAiYWdyZWVCdXR0b25PbkNsaWNrIiwgImNvb2tpZVdhcm5pbmciLCAiY2xvc2VXYXJuaW5nIiwgImJyb2FkY2FzdENoYW5uZWwiLCAicG9zdE1lc3NhZ2UiLCAiY2xvc2UiLCAicm9vdEVsZW1lbnQiLCAicmVtb3ZlIiwgInNldCIsICJCcm9hZGNhc3RDaGFubmVsIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZG9jdW1lbnQiLCAiYm9keSIsICJhcHBlbmQiXQp9Cg==
