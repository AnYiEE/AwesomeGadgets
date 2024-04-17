/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/CookieWarning}
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
var warning = "CookieWarning-module__warning_ukvfyG";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Nvb2tpZVdhcm5pbmcvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvQ29va2llV2FybmluZy9jb21wb25lbnRzL0FncmVlQnV0dG9uLnRzeCIsICJzcmMvQ29va2llV2FybmluZy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Nvb2tpZVdhcm5pbmcvY29tcG9uZW50cy9Db25zZW50Tm90aWNlLnRzeCIsICJzcmMvQ29va2llV2FybmluZy9jb21wb25lbnRzL1Jvb3RFbGVtZW50LnRzeCIsICJzcmMvQ29va2llV2FybmluZy9jb21wb25lbnRzL0Nvb2tpZVdhcm5pbmcubW9kdWxlLmxlc3MiLCAic3JjL0Nvb2tpZVdhcm5pbmcvQ29va2llV2FybmluZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiKGZ1bmN0aW9uKGdsb2JhbCkge1xuICAgIHZhciBjaGFubmVscyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gQnJvYWRjYXN0Q2hhbm5lbChjaGFubmVsKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgIGNoYW5uZWwgPSBTdHJpbmcoY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIGlkID0gJyRCcm9hZGNhc3RDaGFubmVsJCcgKyBjaGFubmVsICsgJyQnO1xuXG4gICAgICAgIGNoYW5uZWxzW2lkXSA9IGNoYW5uZWxzW2lkXSB8fCBbXTtcbiAgICAgICAgY2hhbm5lbHNbaWRdLnB1c2godGhpcyk7XG5cbiAgICAgICAgdGhpcy5fbmFtZSA9IGNoYW5uZWw7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIHRoaXMuX2Nsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9tYyA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICB0aGlzLl9tYy5wb3J0MS5zdGFydCgpO1xuICAgICAgICB0aGlzLl9tYy5wb3J0Mi5zdGFydCgpO1xuXG4gICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKGUuc3RvcmFnZUFyZWEgIT09IGdsb2JhbC5sb2NhbFN0b3JhZ2UpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChlLm5ld1ZhbHVlID09IG51bGwgfHwgZS5uZXdWYWx1ZSA9PT0gJycpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChlLmtleS5zdWJzdHJpbmcoMCwgaWQubGVuZ3RoKSAhPT0gaWQpIHJldHVybjtcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShlLm5ld1ZhbHVlKTtcbiAgICAgICAgICAgICR0aGlzLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgQnJvYWRjYXN0Q2hhbm5lbC5wcm90b3R5cGUgPSB7XG4gICAgICAgIC8vIEJyb2FkY2FzdENoYW5uZWwgQVBJXG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHBvc3RNZXNzYWdlOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgZS5uYW1lID0gJ0ludmFsaWRTdGF0ZUVycm9yJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XG5cbiAgICAgICAgICAgIC8vIEJyb2FkY2FzdCB0byBvdGhlciBjb250ZXh0cyB2aWEgc3RvcmFnZSBldmVudHMuLi5cbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLl9pZCArIFN0cmluZyhEYXRlLm5vdygpKSArICckJyArIFN0cmluZyhNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gY3VycmVudCBjb250ZXh0IHZpYSBwb3J0c1xuICAgICAgICAgICAgY2hhbm5lbHNbdGhpcy5faWRdLmZvckVhY2goZnVuY3Rpb24oYmMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmMgPT09ICR0aGlzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgYmMuX21jLnBvcnQyLnBvc3RNZXNzYWdlKEpTT04ucGFyc2UodmFsdWUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VkKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLl9jbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQyLmNsb3NlKCk7XG5cbiAgICAgICAgICAgIHZhciBpbmRleCA9IGNoYW5uZWxzW3RoaXMuX2lkXS5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgY2hhbm5lbHNbdGhpcy5faWRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gRXZlbnRUYXJnZXQgQVBJXG4gICAgICAgIGdldCBvbm1lc3NhZ2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEub25tZXNzYWdlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb25tZXNzYWdlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0MS5vbm1lc3NhZ2UgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oLyp0eXBlLCBsaXN0ZW5lciAsIHVzZUNhcHR1cmUqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLmFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICBkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbigvKmV2ZW50Ki8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5kaXNwYXRjaEV2ZW50LmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCA9IGdsb2JhbC5Ccm9hZGNhc3RDaGFubmVsIHx8IEJyb2FkY2FzdENoYW5uZWw7XG59KShzZWxmKTtcbiIsICJjb25zdCBTVE9SQUdFX0tFWTogc3RyaW5nID0gJ2V4dC5nYWRnZXQuQ29va2llV2FybmluZ19jb29raWVDb25zZW50JztcblxuY29uc3QgTEFTVF9TVE9SQUdFX1ZBTFVFOiBzdHJpbmcgfCBudWxsID0gbXcuc3RvcmFnZS5nZXQoU1RPUkFHRV9LRVkpIGFzIHN0cmluZyB8IG51bGw7XG5cbmNvbnN0IFVSTF9DT05TRU5UX1JFQUQ6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2NvbnNlbnRSZWFkJyk7XG5cbmNvbnN0IFdHX1VTRVJfTkFNRTogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKTtcblxuZXhwb3J0IHtMQVNUX1NUT1JBR0VfVkFMVUUsIFNUT1JBR0VfS0VZLCBVUkxfQ09OU0VOVF9SRUFELCBXR19VU0VSX05BTUV9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vbW9kdWxlcy9pMThuJztcblxuaW50ZXJmYWNlIFByb3BzIHtcblx0b25DbGljaygpOiB2b2lkO1xufVxuXG5jb25zdCBBZ3JlZUJ1dHRvbiA9ICh7b25DbGlja306IFByb3BzKSA9PiAoXG5cdDxzcGFuXG5cdFx0Y2xhc3NOYW1lPXtbJ213LXVpLWJ1dHRvbicsICdtdy11aS1wcm9ncmVzc2l2ZScsICdjZHgtYnV0dG9uJywgJ2NkeC1idXR0b24tLWFjdGlvbi1wcm9ncmVzc2l2ZSddfVxuXHRcdHJvbGU9XCJidXR0b25cIlxuXHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdD5cblx0XHR7Z2V0TWVzc2FnZSgnQWdyZWUnKX1cblx0PC9zcGFuPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQWdyZWVCdXR0b247XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFncmVlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0kgYWdyZWUnLFxuXHRcdFx0amE6ICfjgZnjgbnjgaboqLHlj6/jgZnjgosnLFxuXHRcdFx0emg6ICflkIzmhI8nLFxuXHRcdH0pLFxuXHRcdENvb2tpZU5vdGljZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUbyBwcm92aWRlIGJldHRlciBleHBlcmllbmNlLCB3ZSB1dGlsaXplIGNvb2tpZXMgYW5kIG90aGVyIHRlY2hub2xvZ2llcyB0byBwcm92aWRlIHNlcnZpY2VzLiBZb3UgY2FuIHJlZmVyIHRvIG91ciA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUD9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCJQZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeVwiPjxlbT5QZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeTwvZW0+PC9hPiB0byBsZWFybiBob3cgd2UgaGFuZGxlIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24uJyxcblx0XHRcdGphOiAn44KI44KK6Imv44GE44K144O844OT44K544KS5o+Q5L6b44GZ44KL44Gf44KB44Gr44CB44Kv44OD44Kt44O844KE44Gd44Gu5LuW44Gu5oqA6KGT44KS5Yip55So44GX44Gm44GE44G+44GZ44CC5YCL5Lq65oOF5aCx44Gu5Y+W44KK5omx44GE5pa55rOV44Gr44Gk44GE44Gm44Gv44CBPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFA/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5YCL5Lq65oOF5aCx5L+d6K235qKd5L6LXCI+5YCL5Lq65oOF5aCx5L+d6K235qKd5L6LPC9hPuOCkuOBlOWPgueFp+OBj+OBoOOBleOBhOOAgicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfkuLrkuobmj5DkvpvmnIDkvbPkvZPpqozvvIzmiJHku6zliKnnlKhDb29raWXlj4rlhbbku5bmioDmnK/mj5DkvpvmnI3liqHvvJvmgqjlj6/ku6Xmn6XpmIXmiJHku6znmoQ8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUD9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLkuKrkurrkv6Hmga/kv53miqTmnaHkvotcIj7kuKrkurrkv6Hmga/kv53miqTmnaHkvos8L2E+77yM5LqG6Kej5oiR5Lus5aaC5L2V5aSE55CG5oKo55qE5Liq5Lq65L+h5oGv44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+eCuuS6huaPkOS+m+acgOS9s+mrlOmpl++8jOaIkeS7rOWIqeeUqENvb2tpZeWPiuWFtuS7luaKgOihk+aPkOS+m+acjeWLme+8m+aCqOWPr+S7peafpemWseaIkeWAkeeahDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIuWAi+S6uuS/oeaBr+S/neitt+aineS+i1wiPuWAi+S6uuS/oeaBr+S/neitt+aineS+izwvYT7vvIzkuobop6PmiJHlgJHlpoLkvZXomZXnkIbmgqjnmoTlgIvkurrkv6Hmga8nLFxuXHRcdH0pLFxuXHRcdFRPU05vdGljZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCeSB1c2luZyB0aGlzIHNpdGUsIHlvdSBhZ3JlZSB0byBvdXIgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlRPUz9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCJUZXJtcyBvZiBVc2VcIj48ZW0+VGVybXMgb2YgVXNlPC9lbT48L2E+LCA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUD9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCJQZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeVwiPjxlbT5QZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeTwvZW0+PC9hPiwgYW5kIG90aGVyIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpMQVc/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwiTGVnYWwgcG9saWNpZXNcIj5sZWdhbCBwb2xpY2llczwvYT4uJyxcblx0XHRcdGphOiAn44GT44Gu44K144Kk44OI44KS5Yip55So44GZ44KL44GT44Go44Gn44CBPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlRPUz9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLliKnnlKjopo/ntIRcIj7liKnnlKjopo/ntIQ8L2E+44CBPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFA/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5YCL5Lq65oOF5aCx5L+d6K235qKd5L6LXCI+5YCL5Lq65oOF5aCx5L+d6K235qKd5L6LPC9hPuOAgeOBneOBruS7luOBrjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpMQVc/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5rOV55qE44Od44Oq44K344O8XCI+5rOV55qE44Od44Oq44K344O8PC9hPuOBq+OBpOOBhOOBpuWNgeWIhuOBq+eQhuino+OBl+OAgemBteWuiOOBmeOCi+OBk+OBqOOBq+WQjOaEj+OBl+OBn+OCguOBruOBqOOBv+OBquOBleOCjOOBvuOBmeOAgicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCforr/pl67mnKznvZHnq5nvvIzmiJbku6Xku7vkvZXmlrnlvI/kvb/nlKjmnKznvZHnq5nvvIzlnYfku6Pooajmgqjlt7Lku5Tnu4bpmIXor7vjgIHlhYXliIbkuobop6PlubblkIzmhI/pgbXlrojmnKznvZHnq5nnmoQ8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6VE9TP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIueUqOaIt+WNj+iurlwiPueUqOaIt+WNj+iurjwvYT7jgIE8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUD9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLkuKrkurrkv6Hmga/kv53miqTmnaHkvotcIj7kuKrkurrkv6Hmga/kv53miqTmnaHkvos8L2E+5Y+K5YW25LuW5ZCE6aG5PGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOkxBVz9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLms5XlvovmnaHkvotcIj7ms5XlvovmnaHkvos8L2E+55qE6KeE5a6a44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+WtmOWPluacrOe2suerme+8jOaIluS7peS7u+S9leaWueW8j+S9v+eUqOacrOe2suerme+8jOWdh+S7o+ihqOaCqOW3suS7lOe0sOmWseiugOOAgeWFheWIhuS6huino+S4puWQjOaEj+mBteWuiOacrOe2suermeeahDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpUT1M/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi55So5oi25Y2U6K2wXCI+55So5oi25Y2U6K2wPC9hPuOAgTxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIuWAi+S6uuS/oeaBr+S/neitt+aineS+i1wiPuWAi+S6uuS/oeaBr+S/neitt+aineS+izwvYT7lj4rlhbbku5blkITpoIU8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6TEFXP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIuazleW+i+aineS+i1wiPuazleW+i+aineS+izwvYT7nmoTopo/lrprjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBDb25zZW50Tm90aWNlID0gKCkgPT4gKFxuXHQ8PlxuXHRcdDxwIGlubmVySFRNTD17Z2V0TWVzc2FnZSgnVE9TTm90aWNlJyl9IC8+XG5cdFx0PHAgaW5uZXJIVE1MPXtnZXRNZXNzYWdlKCdDb29raWVOb3RpY2UnKX0gLz5cblx0PC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb25zZW50Tm90aWNlO1xuIiwgImltcG9ydCBBZ3JlZUJ1dHRvbiBmcm9tICcuL0FncmVlQnV0dG9uJztcbmltcG9ydCBDb25zZW50Tm90aWNlIGZyb20gJy4vQ29uc2VudE5vdGljZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge3dhcm5pbmd9IGZyb20gJy4vQ29va2llV2FybmluZy5tb2R1bGUubGVzcyc7XG5cbmNvbnN0IFJvb3RFbGVtZW50ID0gKGFncmVlQnV0dG9uT25DbGljazogKCkgPT4gdm9pZCkgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT17W3dhcm5pbmcsICdub3ByaW50J119PlxuXHRcdDxDb25zZW50Tm90aWNlIC8+XG5cdFx0PEFncmVlQnV0dG9uIG9uQ2xpY2s9e2FncmVlQnV0dG9uT25DbGlja30gLz5cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQge1Jvb3RFbGVtZW50fTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0Nvb2tpZVdhcm5pbmcvY29tcG9uZW50cy9Db29raWVXYXJuaW5nLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3Qgd2FybmluZyA9IFwiQ29va2llV2FybmluZy1tb2R1bGVfX3dhcm5pbmdfdWt2ZnlHXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJ3YXJuaW5nXCI6IHdhcm5pbmdcbn07XG4gICAgICAiLCAiaW1wb3J0IHtMQVNUX1NUT1JBR0VfVkFMVUUsIFNUT1JBR0VfS0VZLCBVUkxfQ09OU0VOVF9SRUFELCBXR19VU0VSX05BTUV9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge1Jvb3RFbGVtZW50fSBmcm9tICcuL2NvbXBvbmVudHMvUm9vdEVsZW1lbnQnO1xuXG4oZnVuY3Rpb24gY29va2llV2FybmluZygpOiB2b2lkIHtcblx0aWYgKFdHX1VTRVJfTkFNRSB8fCBMQVNUX1NUT1JBR0VfVkFMVUUgPT09ICcxJyB8fCBVUkxfQ09OU0VOVF9SRUFEKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY2xvc2VXYXJuaW5nID0gKCk6IHZvaWQgPT4ge1xuXHRcdGJyb2FkY2FzdENoYW5uZWwucG9zdE1lc3NhZ2UoJ2Nsb3NlJyk7XG5cdFx0YnJvYWRjYXN0Q2hhbm5lbC5jbG9zZSgpO1xuXHRcdHJvb3RFbGVtZW50LnJlbW92ZSgpO1xuXHRcdG13LnN0b3JhZ2Uuc2V0KFNUT1JBR0VfS0VZLCAnMScsIDYwICogNjAgKiAxMDAwICogMjQgKiAzMCk7XG5cdH07XG5cblx0Y29uc3QgYnJvYWRjYXN0Q2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKFNUT1JBR0VfS0VZKTtcblx0YnJvYWRjYXN0Q2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgY2xvc2VXYXJuaW5nKTtcblxuXHRjb25zdCByb290RWxlbWVudCA9IFJvb3RFbGVtZW50KGNsb3NlV2FybmluZyk7XG5cblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQocm9vdEVsZW1lbnQpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsU0FBUyxRQUFRO0FBQ2QsVUFBSSxXQUFXLENBQUM7QUFFaEIsZUFBU0Esa0JBQWlCLFNBQVM7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QUEsTUFDQ0YsbUNBQUFMLFFBQUFDLGNBQUMsS0FBQTtFQUFFTyxXQUFXWixXQUFXLFdBQVc7QUFBQSxDQUFHLEdBQ3ZDUyxtQ0FBQUwsUUFBQUMsY0FBQyxLQUFBO0VBQUVPLFdBQVdaLFdBQVcsY0FBYztBQUFBLENBQUcsQ0FDM0M7QUFHRCxJQUFPYSx3QkFBUUg7O0FDUmYsSUFBQUkscUJBQWtCMUIsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDRFgsSUFBTTBCLFVBQVU7O0FESXZCLElBQU1DLGNBQWVDLHdCQUNwQkgsbUNBQUFWLFFBQUFDLGNBQUMsT0FBQTtFQUFJQyxXQUFXLENBQUNTLFNBQVMsU0FBUztBQUFBLEdBQ2xDRCxtQ0FBQVYsUUFBQUMsY0FBQ1EsdUJBQUEsSUFBYyxHQUNmQyxtQ0FBQVYsUUFBQUMsY0FBQ0cscUJBQUE7RUFBWUwsU0FBU2M7QUFBQSxDQUFvQixDQUMzQzs7Q0VOQSxTQUFTQyxnQkFBc0I7QUFDL0IsTUFBSWpDLGdCQUFnQlAsdUJBQXVCLE9BQU9JLGtCQUFrQjtBQUNuRTtFQUNEO0FBRUEsUUFBTXFDLGVBQWVBLE1BQVk7QUFDaENDLHFCQUFpQkMsWUFBWSxPQUFPO0FBQ3BDRCxxQkFBaUJFLE1BQU07QUFDdkJDLGdCQUFZQyxPQUFPO0FBQ25CN0MsT0FBR0MsUUFBUTZDLElBQUloRCxhQUFhLEtBQUssS0FBSyxLQUFLLE1BQU8sS0FBSyxFQUFFO0VBQzFEO0FBRUEsUUFBTTJDLG1CQUFxQyxJQUFJTSxpQkFBaUJqRCxXQUFXO0FBQzNFMkMsbUJBQWlCTyxpQkFBaUIsV0FBV1IsWUFBWTtBQUV6RCxRQUFNSSxjQUFjUCxZQUFZRyxZQUFZO0FBRTVDUyxXQUFTQyxLQUFLQyxPQUFPUCxXQUFXO0FBQ2pDLEdBQUc7IiwKICAibmFtZXMiOiBbIkJyb2FkY2FzdENoYW5uZWwiLCAiU1RPUkFHRV9LRVkiLCAiTEFTVF9TVE9SQUdFX1ZBTFVFIiwgIm13IiwgInN0b3JhZ2UiLCAiZ2V0IiwgIlVSTF9DT05TRU5UX1JFQUQiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIldHX1VTRVJfTkFNRSIsICJjb25maWciLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQWdyZWUiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiemgiLCAiQ29va2llTm90aWNlIiwgIlRPU05vdGljZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiQWdyZWVCdXR0b24iLCAib25DbGljayIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInJvbGUiLCAiQWdyZWVCdXR0b25fZGVmYXVsdCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiQ29uc2VudE5vdGljZSIsICJGcmFnbWVudCIsICJpbm5lckhUTUwiLCAiQ29uc2VudE5vdGljZV9kZWZhdWx0IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJ3YXJuaW5nIiwgIlJvb3RFbGVtZW50IiwgImFncmVlQnV0dG9uT25DbGljayIsICJjb29raWVXYXJuaW5nIiwgImNsb3NlV2FybmluZyIsICJicm9hZGNhc3RDaGFubmVsIiwgInBvc3RNZXNzYWdlIiwgImNsb3NlIiwgInJvb3RFbGVtZW50IiwgInJlbW92ZSIsICJzZXQiLCAiQnJvYWRjYXN0Q2hhbm5lbCIsICJhZGRFdmVudExpc3RlbmVyIiwgImRvY3VtZW50IiwgImJvZHkiLCAiYXBwZW5kIl0KfQo=
