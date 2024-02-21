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
var CLASS_NAME = "gadget-cookie_warning";
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
    TOSNotice: (0, import_ext_gadget.localize)({
      en: 'By using this site, it means that you have carefully read, fully understood and agreed to comply with our <a rel="noopener" target="_blank" href="/wiki/LIB:TOS?consentRead=1" title="Terms of Use"><em>Terms of Use</em></a>, <a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="Personal Information Protection Policy"><em>Personal Information Protection Policy</em></a>, and other <a rel="noopener" target="_blank" href="/wiki/LIB:LAW?consentRead=1" title="Legal policies">legal policies</a>.',
      ja: 'このサイトを利用することで、<a rel="noopener" target="_blank" href="/wiki/LIB:TOS?consentRead=1" title="利用規約">利用規約</a>、<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="個人情報保護条例">個人情報保護条例</a>、その他の<a rel="noopener" target="_blank" href="/wiki/LIB:LAW?consentRead=1" title="法的ポリシー">法的ポリシー</a>について十分に理解し、遵守することに同意したものとみなされます。',
      "zh-hans": '访问本网站，或以任何方式使用本网站，均代表您已仔细阅读、充分了解并同意遵守本网站的<a rel="noopener" target="_blank" href="/wiki/LIB:TOS?consentRead=1" title="用户协议">用户协议</a>、<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="个人信息保护条例">个人信息保护条例</a>及其他<a rel="noopener" target="_blank" href="/wiki/LIB:LAW?consentRead=1" title="法律条例">法律条例</a>的规定。',
      "zh-hant": '存取本網站，或以任何方式使用本網站，均代表您已仔細閱讀、充分了解並同意遵守本網站的<a rel="noopener" target="_blank" href="/wiki/LIB:TOS?consentRead=1" title="用戶協議">用戶協議</a>、<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="個人信息保護条例">個人信息保護条例</a>及其他<a rel="noopener" target="_blank" href="/wiki/LIB:LAW?consentRead=1" title="法律条例">法律条例</a>的規定。'
    }),
    CookieNotice: (0, import_ext_gadget.localize)({
      en: 'To provide better experience, we utilize cookies and other technologies to provide services. You can refer to our <a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="Personal Information Protection Policy"><em>Personal Information Protection Policy</em></a> to learn how we handle your personal information.',
      ja: 'より良いサービスを提供するために、クッキーやその他の技術を利用しています。個人情報の取り扱い方法については、<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="個人情報保護条例">個人情報保護条例</a>をご参照ください。',
      "zh-hans": '为了提供最佳体验，我们利用Cookie及其他技术提供服务；您可以查阅我们的<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="个人信息保护条例">个人信息保护条例</a>，了解我们如何处理您的个人信息。',
      "zh-hant": '為了提供最佳體驗，我们利用Cookie及其他技術提供服務；您可以查閱我們的<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="個人信息保護条例">個人信息保護条例</a>，了解我們如何處理您的個人信息'
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
//! src/CookieWarning/CookieWarning.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.React"));
var import_ext_gadget5 = require("ext.gadget.Util");
void (0, import_ext_gadget5.getBody)().then(function cookieWarning($body) {
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
  const rootElement = /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: [CLASS_NAME, "noprint"]
  }, /* @__PURE__ */ import_ext_gadget4.default.createElement(ConsentNotice_default, null), /* @__PURE__ */ import_ext_gadget4.default.createElement(AgreeButton_default, {
    onClick: closeWarning
  }));
  $body.append(rootElement);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Nvb2tpZVdhcm5pbmcvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvQ29va2llV2FybmluZy9jb21wb25lbnRzL0FncmVlQnV0dG9uLnRzeCIsICJzcmMvQ29va2llV2FybmluZy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Nvb2tpZVdhcm5pbmcvY29tcG9uZW50cy9Db25zZW50Tm90aWNlLnRzeCIsICJzcmMvQ29va2llV2FybmluZy9Db29raWVXYXJuaW5nLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiKGZ1bmN0aW9uKGdsb2JhbCkge1xuICAgIHZhciBjaGFubmVscyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gQnJvYWRjYXN0Q2hhbm5lbChjaGFubmVsKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgIGNoYW5uZWwgPSBTdHJpbmcoY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIGlkID0gJyRCcm9hZGNhc3RDaGFubmVsJCcgKyBjaGFubmVsICsgJyQnO1xuXG4gICAgICAgIGNoYW5uZWxzW2lkXSA9IGNoYW5uZWxzW2lkXSB8fCBbXTtcbiAgICAgICAgY2hhbm5lbHNbaWRdLnB1c2godGhpcyk7XG5cbiAgICAgICAgdGhpcy5fbmFtZSA9IGNoYW5uZWw7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIHRoaXMuX2Nsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9tYyA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICB0aGlzLl9tYy5wb3J0MS5zdGFydCgpO1xuICAgICAgICB0aGlzLl9tYy5wb3J0Mi5zdGFydCgpO1xuXG4gICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKGUuc3RvcmFnZUFyZWEgIT09IGdsb2JhbC5sb2NhbFN0b3JhZ2UpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChlLm5ld1ZhbHVlID09IG51bGwgfHwgZS5uZXdWYWx1ZSA9PT0gJycpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChlLmtleS5zdWJzdHJpbmcoMCwgaWQubGVuZ3RoKSAhPT0gaWQpIHJldHVybjtcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShlLm5ld1ZhbHVlKTtcbiAgICAgICAgICAgICR0aGlzLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgQnJvYWRjYXN0Q2hhbm5lbC5wcm90b3R5cGUgPSB7XG4gICAgICAgIC8vIEJyb2FkY2FzdENoYW5uZWwgQVBJXG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHBvc3RNZXNzYWdlOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgZS5uYW1lID0gJ0ludmFsaWRTdGF0ZUVycm9yJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XG5cbiAgICAgICAgICAgIC8vIEJyb2FkY2FzdCB0byBvdGhlciBjb250ZXh0cyB2aWEgc3RvcmFnZSBldmVudHMuLi5cbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLl9pZCArIFN0cmluZyhEYXRlLm5vdygpKSArICckJyArIFN0cmluZyhNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gY3VycmVudCBjb250ZXh0IHZpYSBwb3J0c1xuICAgICAgICAgICAgY2hhbm5lbHNbdGhpcy5faWRdLmZvckVhY2goZnVuY3Rpb24oYmMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmMgPT09ICR0aGlzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgYmMuX21jLnBvcnQyLnBvc3RNZXNzYWdlKEpTT04ucGFyc2UodmFsdWUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VkKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLl9jbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQyLmNsb3NlKCk7XG5cbiAgICAgICAgICAgIHZhciBpbmRleCA9IGNoYW5uZWxzW3RoaXMuX2lkXS5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgY2hhbm5lbHNbdGhpcy5faWRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gRXZlbnRUYXJnZXQgQVBJXG4gICAgICAgIGdldCBvbm1lc3NhZ2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEub25tZXNzYWdlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb25tZXNzYWdlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0MS5vbm1lc3NhZ2UgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oLyp0eXBlLCBsaXN0ZW5lciAsIHVzZUNhcHR1cmUqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLmFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICBkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbigvKmV2ZW50Ki8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5kaXNwYXRjaEV2ZW50LmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCA9IGdsb2JhbC5Ccm9hZGNhc3RDaGFubmVsIHx8IEJyb2FkY2FzdENoYW5uZWw7XG59KShzZWxmKTtcbiIsICJjb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LWNvb2tpZV93YXJuaW5nJztcblxuY29uc3QgU1RPUkFHRV9LRVk6IHN0cmluZyA9ICdleHQuZ2FkZ2V0LkNvb2tpZVdhcm5pbmdfY29va2llQ29uc2VudCc7XG5cbmNvbnN0IExBU1RfU1RPUkFHRV9WQUxVRTogc3RyaW5nIHwgbnVsbCA9IG13LnN0b3JhZ2UuZ2V0KFNUT1JBR0VfS0VZKSBhcyBzdHJpbmcgfCBudWxsO1xuXG5jb25zdCBVUkxfQ09OU0VOVF9SRUFEOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdjb25zZW50UmVhZCcpO1xuXG5jb25zdCBXR19VU0VSX05BTUU6IHN0cmluZyB8IG51bGwgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyk7XG5cbmV4cG9ydCB7Q0xBU1NfTkFNRSwgTEFTVF9TVE9SQUdFX1ZBTFVFLCBTVE9SQUdFX0tFWSwgVVJMX0NPTlNFTlRfUkVBRCwgV0dfVVNFUl9OQU1FfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdG9uQ2xpY2soKTogdm9pZDtcbn1cblxuY29uc3QgQWdyZWVCdXR0b24gPSAoe29uQ2xpY2t9OiBQcm9wcykgPT4gKFxuXHQ8c3BhblxuXHRcdGNsYXNzTmFtZT17Wydtdy11aS1idXR0b24nLCAnbXctdWktcHJvZ3Jlc3NpdmUnLCAnY2R4LWJ1dHRvbicsICdjZHgtYnV0dG9uLS1hY3Rpb24tcHJvZ3Jlc3NpdmUnXX1cblx0XHRyb2xlPVwiYnV0dG9uXCJcblx0XHRvbkNsaWNrPXtvbkNsaWNrfVxuXHQ+XG5cdFx0e2dldE1lc3NhZ2UoJ0FncmVlJyl9XG5cdDwvc3Bhbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFncmVlQnV0dG9uO1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBZ3JlZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJIGFncmVlJyxcblx0XHRcdGphOiAn44GZ44G544Gm6Kix5Y+v44GZ44KLJyxcblx0XHRcdHpoOiAn5ZCM5oSPJyxcblx0XHR9KSxcblx0XHRUT1NOb3RpY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQnkgdXNpbmcgdGhpcyBzaXRlLCBpdCBtZWFucyB0aGF0IHlvdSBoYXZlIGNhcmVmdWxseSByZWFkLCBmdWxseSB1bmRlcnN0b29kIGFuZCBhZ3JlZWQgdG8gY29tcGx5IHdpdGggb3VyIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpUT1M/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwiVGVybXMgb2YgVXNlXCI+PGVtPlRlcm1zIG9mIFVzZTwvZW0+PC9hPiwgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFA/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwiUGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3lcIj48ZW0+UGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3k8L2VtPjwvYT4sIGFuZCBvdGhlciA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6TEFXP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIkxlZ2FsIHBvbGljaWVzXCI+bGVnYWwgcG9saWNpZXM8L2E+LicsXG5cdFx0XHRqYTogJ+OBk+OBruOCteOCpOODiOOCkuWIqeeUqOOBmeOCi+OBk+OBqOOBp+OAgTxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpUT1M/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5Yip55So6KaP57SEXCI+5Yip55So6KaP57SEPC9hPuOAgTxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIuWAi+S6uuaDheWgseS/neitt+adoeS+i1wiPuWAi+S6uuaDheWgseS/neitt+adoeS+izwvYT7jgIHjgZ3jga7ku5bjga48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6TEFXP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIuazleeahOODneODquOCt+ODvFwiPuazleeahOODneODquOCt+ODvDwvYT7jgavjgaTjgYTjgabljYHliIbjgavnkIbop6PjgZfjgIHpgbXlrojjgZnjgovjgZPjgajjgavlkIzmhI/jgZfjgZ/jgoLjga7jgajjgb/jgarjgZXjgozjgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn6K6/6Zeu5pys572R56uZ77yM5oiW5Lul5Lu75L2V5pa55byP5L2/55So5pys572R56uZ77yM5Z2H5Luj6KGo5oKo5bey5LuU57uG6ZiF6K+744CB5YWF5YiG5LqG6Kej5bm25ZCM5oSP6YG15a6I5pys572R56uZ55qEPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlRPUz9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLnlKjmiLfljY/orq5cIj7nlKjmiLfljY/orq48L2E+44CBPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFA/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5Liq5Lq65L+h5oGv5L+d5oqk5p2h5L6LXCI+5Liq5Lq65L+h5oGv5L+d5oqk5p2h5L6LPC9hPuWPiuWFtuS7ljxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpMQVc/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5rOV5b6L5p2h5L6LXCI+5rOV5b6L5p2h5L6LPC9hPueahOinhOWumuOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCflrZjlj5bmnKzntrLnq5nvvIzmiJbku6Xku7vkvZXmlrnlvI/kvb/nlKjmnKzntrLnq5nvvIzlnYfku6Pooajmgqjlt7Lku5TntLDplrHoroDjgIHlhYXliIbkuobop6PkuKblkIzmhI/pgbXlrojmnKzntrLnq5nnmoQ8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6VE9TP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIueUqOaItuWNlOitsFwiPueUqOaItuWNlOitsDwvYT7jgIE8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUD9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLlgIvkurrkv6Hmga/kv53orbfmnaHkvotcIj7lgIvkurrkv6Hmga/kv53orbfmnaHkvos8L2E+5Y+K5YW25LuWPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOkxBVz9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLms5XlvovmnaHkvotcIj7ms5XlvovmnaHkvos8L2E+55qE6KaP5a6a44CCJyxcblx0XHR9KSxcblx0XHRDb29raWVOb3RpY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVG8gcHJvdmlkZSBiZXR0ZXIgZXhwZXJpZW5jZSwgd2UgdXRpbGl6ZSBjb29raWVzIGFuZCBvdGhlciB0ZWNobm9sb2dpZXMgdG8gcHJvdmlkZSBzZXJ2aWNlcy4gWW91IGNhbiByZWZlciB0byBvdXIgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFA/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwiUGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3lcIj48ZW0+UGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3k8L2VtPjwvYT4gdG8gbGVhcm4gaG93IHdlIGhhbmRsZSB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uLicsXG5cdFx0XHRqYTogJ+OCiOOCiuiJr+OBhOOCteODvOODk+OCueOCkuaPkOS+m+OBmeOCi+OBn+OCgeOBq+OAgeOCr+ODg+OCreODvOOChOOBneOBruS7luOBruaKgOihk+OCkuWIqeeUqOOBl+OBpuOBhOOBvuOBmeOAguWAi+S6uuaDheWgseOBruWPluOCiuaJseOBhOaWueazleOBq+OBpOOBhOOBpuOBr+OAgTxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIuWAi+S6uuaDheWgseS/neitt+adoeS+i1wiPuWAi+S6uuaDheWgseS/neitt+adoeS+izwvYT7jgpLjgZTlj4LnhafjgY/jgaDjgZXjgYTjgIInLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5Li65LqG5o+Q5L6b5pyA5L2z5L2T6aqM77yM5oiR5Lus5Yip55SoQ29va2ll5Y+K5YW25LuW5oqA5pyv5o+Q5L6b5pyN5Yqh77yb5oKo5Y+v5Lul5p+l6ZiF5oiR5Lus55qEPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFA/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5Liq5Lq65L+h5oGv5L+d5oqk5p2h5L6LXCI+5Liq5Lq65L+h5oGv5L+d5oqk5p2h5L6LPC9hPu+8jOS6huino+aIkeS7rOWmguS9leWkhOeQhuaCqOeahOS4quS6uuS/oeaBr+OAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfngrrkuobmj5DkvpvmnIDkvbPpq5TpqZfvvIzmiJHku6zliKnnlKhDb29raWXlj4rlhbbku5bmioDooZPmj5DkvpvmnI3li5nvvJvmgqjlj6/ku6Xmn6XplrHmiJHlgJHnmoQ8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUD9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLlgIvkurrkv6Hmga/kv53orbfmnaHkvotcIj7lgIvkurrkv6Hmga/kv53orbfmnaHkvos8L2E+77yM5LqG6Kej5oiR5YCR5aaC5L2V6JmV55CG5oKo55qE5YCL5Lq65L+h5oGvJyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vbW9kdWxlcy9pMThuJztcblxuY29uc3QgQ29uc2VudE5vdGljZSA9ICgpID0+IChcblx0PD5cblx0XHQ8cCBpbm5lckhUTUw9e2dldE1lc3NhZ2UoJ1RPU05vdGljZScpfSAvPlxuXHRcdDxwIGlubmVySFRNTD17Z2V0TWVzc2FnZSgnQ29va2llTm90aWNlJyl9IC8+XG5cdDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uc2VudE5vdGljZTtcbiIsICJpbXBvcnQge0NMQVNTX05BTUUsIExBU1RfU1RPUkFHRV9WQUxVRSwgU1RPUkFHRV9LRVksIFVSTF9DT05TRU5UX1JFQUQsIFdHX1VTRVJfTkFNRX0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCBBZ3JlZUJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvQWdyZWVCdXR0b24nO1xuaW1wb3J0IENvbnNlbnROb3RpY2UgZnJvbSAnLi9jb21wb25lbnRzL0NvbnNlbnROb3RpY2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGNvb2tpZVdhcm5pbmcoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGlmIChXR19VU0VSX05BTUUgfHwgTEFTVF9TVE9SQUdFX1ZBTFVFID09PSAnMScgfHwgVVJMX0NPTlNFTlRfUkVBRCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNsb3NlV2FybmluZyA9ICgpOiB2b2lkID0+IHtcblx0XHRicm9hZGNhc3RDaGFubmVsLnBvc3RNZXNzYWdlKCdjbG9zZScpO1xuXHRcdGJyb2FkY2FzdENoYW5uZWwuY2xvc2UoKTtcblx0XHRyb290RWxlbWVudC5yZW1vdmUoKTtcblx0XHRtdy5zdG9yYWdlLnNldChTVE9SQUdFX0tFWSwgJzEnLCA2MCAqIDYwICogMTAwMCAqIDI0ICogMzApO1xuXHR9O1xuXG5cdGNvbnN0IGJyb2FkY2FzdENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChTVE9SQUdFX0tFWSk7XG5cdGJyb2FkY2FzdENoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGNsb3NlV2FybmluZyk7XG5cblx0Y29uc3Qgcm9vdEVsZW1lbnQgPSAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e1tDTEFTU19OQU1FLCAnbm9wcmludCddfT5cblx0XHRcdDxDb25zZW50Tm90aWNlIC8+XG5cdFx0XHQ8QWdyZWVCdXR0b24gb25DbGljaz17Y2xvc2VXYXJuaW5nfSAvPlxuXHRcdDwvZGl2PlxuXHQpO1xuXG5cdCRib2R5LmFwcGVuZChyb290RWxlbWVudCk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsU0FBUyxRQUFRO0FBQ2QsVUFBSSxXQUFXLENBQUM7QUFFaEIsZUFBU0Esa0JBQWlCLFNBQVM7QUFDL0IsWUFBSSxRQUFRO0FBQ1osa0JBQVUsT0FBTyxPQUFPO0FBRXhCLFlBQUksS0FBSyx1QkFBdUIsVUFBVTtBQUUxQyxpQkFBUyxFQUFFLElBQUksU0FBUyxFQUFFLEtBQUssQ0FBQztBQUNoQyxpQkFBUyxFQUFFLEVBQUUsS0FBSyxJQUFJO0FBRXRCLGFBQUssUUFBUTtBQUNiLGFBQUssTUFBTTtBQUNYLGFBQUssVUFBVTtBQUNmLGFBQUssTUFBTSxJQUFJLGVBQWU7QUFDOUIsYUFBSyxJQUFJLE1BQU0sTUFBTTtBQUNyQixhQUFLLElBQUksTUFBTSxNQUFNO0FBRXJCLGVBQU8saUJBQWlCLFdBQVcsU0FBUyxHQUFHO0FBQzNDLGNBQUksRUFB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TUFBSWxDLGdCQUFnQlAsdUJBQXVCLE9BQU9JLGtCQUFrQjtBQUNuRTtFQUNEO0FBRUEsUUFBTXNDLGVBQWVBLE1BQVk7QUFDaENDLHFCQUFpQkMsWUFBWSxPQUFPO0FBQ3BDRCxxQkFBaUJFLE1BQU07QUFDdkJDLGdCQUFZQyxPQUFPO0FBQ25COUMsT0FBR0MsUUFBUThDLElBQUlqRCxhQUFhLEtBQUssS0FBSyxLQUFLLE1BQU8sS0FBSyxFQUFFO0VBQzFEO0FBRUEsUUFBTTRDLG1CQUFxQyxJQUFJTSxpQkFBaUJsRCxXQUFXO0FBQzNFNEMsbUJBQWlCTyxpQkFBaUIsV0FBV1IsWUFBWTtBQUV6RCxRQUFNSSxjQUNMVixtQ0FBQVYsUUFBQUMsY0FBQyxPQUFBO0lBQUlDLFdBQVcsQ0FBQzlCLFlBQVksU0FBUztFQUFBLEdBQ3JDc0MsbUNBQUFWLFFBQUFDLGNBQUNRLHVCQUFBLElBQWMsR0FDZkMsbUNBQUFWLFFBQUFDLGNBQUNHLHFCQUFBO0lBQVlMLFNBQVNpQjtFQUFBLENBQWMsQ0FDckM7QUFHREQsUUFBTVUsT0FBT0wsV0FBVztBQUN6QixDQUFDOyIsCiAgIm5hbWVzIjogWyJCcm9hZGNhc3RDaGFubmVsIiwgIkNMQVNTX05BTUUiLCAiU1RPUkFHRV9LRVkiLCAiTEFTVF9TVE9SQUdFX1ZBTFVFIiwgIm13IiwgInN0b3JhZ2UiLCAiZ2V0IiwgIlVSTF9DT05TRU5UX1JFQUQiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIldHX1VTRVJfTkFNRSIsICJjb25maWciLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQWdyZWUiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiemgiLCAiVE9TTm90aWNlIiwgIkNvb2tpZU5vdGljZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiQWdyZWVCdXR0b24iLCAib25DbGljayIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInJvbGUiLCAiQWdyZWVCdXR0b25fZGVmYXVsdCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiQ29uc2VudE5vdGljZSIsICJGcmFnbWVudCIsICJpbm5lckhUTUwiLCAiQ29uc2VudE5vdGljZV9kZWZhdWx0IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImNvb2tpZVdhcm5pbmciLCAiJGJvZHkiLCAiY2xvc2VXYXJuaW5nIiwgImJyb2FkY2FzdENoYW5uZWwiLCAicG9zdE1lc3NhZ2UiLCAiY2xvc2UiLCAicm9vdEVsZW1lbnQiLCAicmVtb3ZlIiwgInNldCIsICJCcm9hZGNhc3RDaGFubmVsIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiYXBwZW5kIl0KfQo=
