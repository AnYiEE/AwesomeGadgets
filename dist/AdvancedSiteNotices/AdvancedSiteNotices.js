/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-AdvancedSiteNotices.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/AdvancedSiteNotices}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
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

// dist/AdvancedSiteNotices/AdvancedSiteNotices.js
require_broadcastchannel_polyfill();
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
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
//! src/AdvancedSiteNotices/options.json
var ajaxPageTitle = "Template:AdvancedSiteNotices/ajax";
var mountPointSelector = "#siteNotice";
var storageKey = "ext.gadget.AdvancedSiteNotices_dismissASN";
var version = "4.0";
//! src/AdvancedSiteNotices/AdvancedSiteNotices.ts
var import_ext_gadget8 = require("ext.gadget.Util");
//! src/AdvancedSiteNotices/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("AdvancedSiteNotices/".concat(version));
//! src/AdvancedSiteNotices/modules/util/queryApi.ts
var {
  wgUserLanguage
} = mw.config.get();
var parameters = {
  action: "parse",
  format: "json",
  formatversion: "2",
  prop: "text",
  page: ajaxPageTitle,
  uselang: wgUserLanguage,
  variant: wgUserLanguage
};
var queryApi = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    try {
      return yield api.get(parameters);
    } catch (error) {
      console.error("[AdvancedSiteNotices] Ajax error:", error);
      return {};
    }
  });
  return function queryApi2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/AdvancedSiteNotices/modules/loadRemoteNotices.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
var loadRemoteNotices = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* () {
    const response = yield queryApi();
    const responseParse = response["parse"];
    if (!(responseParse !== null && responseParse !== void 0 && responseParse.text)) {
      return {};
    }
    const remoteNotice = (/* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
      innerHTML: responseParse.text
    })).querySelector("ul.sitents");
    if (!remoteNotice) {
      return {};
    }
    const $remoteNotices = $(remoteNotice);
    const $notices2 = $remoteNotices.find("li");
    const remoteNoticesVersion = $remoteNotices.data("asn-version").toString();
    return {
      $notices: $notices2,
      version: remoteNoticesVersion
    };
  });
  return function loadRemoteNotices2() {
    return _ref2.apply(this, arguments);
  };
}();
//! src/AdvancedSiteNotices/modules/constant.ts
var CLASS_NAME = "gadget-advanced_site_notices";
var CLASS_NAME_DISMISS = "".concat(CLASS_NAME, "__dismiss");
var CLASS_NAME_NOTICE = "".concat(CLASS_NAME, "__notice");
var CLASS_NAME_NOTICE_CONTENT = "".concat(CLASS_NAME_NOTICE, "__content");
var CLASS_NAME_TITLE = "".concat(CLASS_NAME, "__title");
//! src/AdvancedSiteNotices/modules/showNotice.tsx
var import_ext_gadget5 = __toESM(require("ext.gadget.React"), 1);
//! src/AdvancedSiteNotices/modules/util/generateArea.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.React"), 1);
//! src/AdvancedSiteNotices/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Dismiss: (0, import_ext_gadget3.localize)({
      en: "Turn off this notice",
      ja: "ASNをオフにする",
      "zh-hans": "关闭公告",
      "zh-hant": "關閉公告"
    }),
    DismissNotice: (0, import_ext_gadget3.localize)({
      en: "You have chosen to turn off Advanced Site Notices for the next 30 days. <br>If the site-wide announcement is not updated within the next 30 days, it will no longer be displayed; however, if the site-wide announcement is updated, it will be displayed again.",
      ja: "今後30日間、ASNをオフにすることを選択しました。<br>サイト全体の通知が今後30日以内に更新されない場合、表示されなくなります。ただし、サイト全体の通知が更新される場合は、再び表示されます。",
      "zh-hans": "您已选择在接下来30日内关闭“高级站点通告”。<br>若接下来30日内全站公告未有更新，则不再显示；但是，若全站公告内容更新，则将重新显示。",
      "zh-hant": "您已選擇在接下來30日內關閉「高級站點通告」。<br>若接下來30日內全站公告未有更新，則不再顯示；但是，若全站公告內容更新，則將重新顯示。"
    }),
    Title: (0, import_ext_gadget3.localize)({
      en: "Announcement",
      ja: "通知",
      zh: "公告"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/AdvancedSiteNotices/modules/util/generateArea.tsx
var generateArea = () => {
  const area = /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: [CLASS_NAME, "noprint"]
  }, /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: CLASS_NAME_TITLE
  }, getMessage("Title")), /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: CLASS_NAME_NOTICE
  }, /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: [CLASS_NAME_NOTICE_CONTENT, "center"]
  })), /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: CLASS_NAME_DISMISS
  }, /* @__PURE__ */ import_ext_gadget4.default.createElement("a", {
    role: "button",
    "aria-label": getMessage("Dismiss")
  })));
  return $(area);
};
//! src/AdvancedSiteNotices/modules/util/matchCriteria.ts
var {
  wgUserGroups,
  wgUserLanguage: wgUserLanguage2
} = mw.config.get();
var in_group = (group) => {
  return !!(wgUserGroups !== null && wgUserGroups !== void 0 && wgUserGroups.includes(group));
};
var only_for = (userLanguage) => {
  return userLanguage === wgUserLanguage2;
};
var matchCriteria = ($notice) => {
  var _$notice$data;
  const cache = $notice.data("asn-cache");
  if (cache !== void 0) {
    return cache;
  }
  const testCriteria = (criteria) => {
    try {
      return window.eval(criteria);
    } catch {
      return false;
    }
  };
  let result = false;
  const criteriaData = ((_$notice$data = $notice.data("asn-criteria")) !== null && _$notice$data !== void 0 ? _$notice$data : "").trim();
  if (criteriaData) {
    try {
      result = testCriteria(mw.Uri.decode(criteriaData));
    } catch {
      result = true;
    }
  } else if ($notice.attr("class")) {
    let criteria;
    if ($notice.hasClass("only_sysop")) {
      criteria || (criteria = in_group("sysop") || in_group("steward") || in_group("qiuwen"));
    }
    if ($notice.hasClass("only_logged")) {
      criteria || (criteria = in_group("user"));
    }
    if ($notice.hasClass("only_anon")) {
      criteria || (criteria = !in_group("user"));
    }
    if ($notice.hasClass("only_zh_cn")) {
      criteria || (criteria = only_for("zh-cn"));
    }
    if ($notice.hasClass("only_zh_sg")) {
      criteria || (criteria = only_for("zh-sg"));
    }
    if ($notice.hasClass("only_zh_my")) {
      criteria || (criteria = only_for("zh-my"));
    }
    if ($notice.hasClass("only_zh_hk")) {
      criteria || (criteria = only_for("zh-hk"));
    }
    if ($notice.hasClass("only_zh_mo")) {
      criteria || (criteria = only_for("zh-mo"));
    }
    if ($notice.hasClass("only_zh_tw")) {
      criteria || (criteria = only_for("zh-tw"));
    }
    if (criteria === void 0) {
      criteria = true;
    }
    result = criteria;
  } else {
    result = true;
  }
  $notice.data("asn-cache", result);
  return result;
};
//! src/AdvancedSiteNotices/modules/showNotice.tsx
var import_ext_gadget6 = require("ext.gadget.Tippy");
var import_ext_gadget7 = require("ext.gadget.Toastify");
var broadcastChannel = new BroadcastChannel(storageKey);
var currentVersion = "0";
var localVersion = mw.storage.get(storageKey);
var timer;
var $area = generateArea();
var $currentNotice = $area.find(".".concat(CLASS_NAME_NOTICE_CONTENT));
var $dismiss = $area.find(".".concat(CLASS_NAME_DISMISS)).find("a");
var closeNotices = () => {
  broadcastChannel.postMessage("close");
  broadcastChannel.close();
  clearTimeout(timer);
  $area.remove();
  mw.storage.set(storageKey, currentVersion, 60 * 60 * 24 * 30 * 1e3);
};
broadcastChannel.addEventListener("message", closeNotices);
$dismiss.on("click", () => {
  closeNotices();
  const toastifyInstance = (0, import_ext_gadget7.toastify)({
    node: /* @__PURE__ */ import_ext_gadget5.default.createElement("span", {
      innerHTML: getMessage("DismissNotice")
    }),
    close: true,
    duration: 10 * 1e3,
    gravity: "top",
    position: "right",
    onClick() {
      toastifyInstance.hideToast();
    }
  });
});
(0, import_ext_gadget6.tippy)($dismiss.get(0), {
  arrow: true,
  content: $dismiss.attr("aria-label"),
  placement: "bottom"
});
var $notices;
var noticeStyles = [];
var showNotices = ($mountPoint, index, remoteNotices) => {
  var _remoteNotices$versio;
  currentVersion = (_remoteNotices$versio = remoteNotices === null || remoteNotices === void 0 ? void 0 : remoteNotices.version) !== null && _remoteNotices$versio !== void 0 ? _remoteNotices$versio : currentVersion;
  if (currentVersion === localVersion) {
    return;
  }
  if (remoteNotices !== null && remoteNotices !== void 0 && remoteNotices.$notices) {
    ({
      $notices
    } = remoteNotices);
  }
  const noticesLength = $notices.length;
  const nextNoticeIndex = (index + 1) % noticesLength;
  let $notice = $();
  let i = 0;
  while (i++ < noticesLength) {
    $notice = $notices.eq(index);
    if (!matchCriteria($notice)) {
      showNotices($mountPoint, nextNoticeIndex);
      return;
    }
    index = index++ % noticesLength;
  }
  if (typeof $notice.data("asn-html") === "string") {
    $notice.data("asn-html-raw", mw.Uri.decode($notice.data("asn-html")));
    $notice.data("asn-html", null);
  }
  if (typeof $notice.data("asn-style") === "string") {
    $notice.data("asn-style-id", noticeStyles.length);
    const style = mw.loader.addStyleTag(mw.Uri.decode($notice.data("asn-style")));
    style.disabled = true;
    noticeStyles[noticeStyles.length] = style;
    $notice.data("asn-style", null);
  }
  const noticeHtml = $notice.data("asn-html-raw") || $notice.html();
  const noticeStyleId = $notice.data("asn-style-id");
  const currentNoticeHtml = $currentNotice.html();
  if (currentNoticeHtml && currentNoticeHtml !== noticeHtml) {
    $currentNotice.stop().fadeOut(() => {
      for (var _i = 0, _noticeStyles = noticeStyles; _i < _noticeStyles.length; _i++) {
        const style = _noticeStyles[_i];
        style.disabled = true;
      }
      const noticeStyle = noticeStyles[noticeStyleId];
      if (noticeStyle) {
        noticeStyle.disabled = false;
      }
      $currentNotice.html(noticeHtml);
      try {
        $currentNotice.fadeIn();
      } catch {
      }
    });
  } else if (!currentNoticeHtml) {
    $mountPoint.append($area);
    const noticeStyle = noticeStyles[noticeStyleId];
    if (noticeStyle) {
      noticeStyle.disabled = false;
    }
    $currentNotice.html(noticeHtml).fadeIn();
  }
  timer = setTimeout(() => {
    showNotices($mountPoint, nextNoticeIndex);
  }, 7 * 1e3);
};
//! src/AdvancedSiteNotices/AdvancedSiteNotices.ts
(function() {
  var _advancedSiteNotices = _asyncToGenerator(function* () {
    var _remoteNotices$$notic;
    const $body = yield (0, import_ext_gadget8.getBody)();
    const $mountPoint = $body.find(mountPointSelector);
    if (!$mountPoint.length) {
      return;
    }
    const remoteNotices = yield loadRemoteNotices();
    if (!((_remoteNotices$$notic = remoteNotices.$notices) !== null && _remoteNotices$$notic !== void 0 && _remoteNotices$$notic.length)) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * remoteNotices.$notices.length);
    showNotices($mountPoint, randomIndex, remoteNotices);
  });
  function advancedSiteNotices() {
    return _advancedSiteNotices.apply(this, arguments);
  }
  return advancedSiteNotices;
})()();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvb3B0aW9ucy5qc29uIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL0FkdmFuY2VkU2l0ZU5vdGljZXMudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9hcGkudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy91dGlsL3F1ZXJ5QXBpLnRzIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL21vZHVsZXMvbG9hZFJlbW90ZU5vdGljZXMudHN4IiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9zaG93Tm90aWNlLnRzeCIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVBcmVhLnRzeCIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy91dGlsL21hdGNoQ3JpdGVyaWEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgICB2YXIgY2hhbm5lbHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIEJyb2FkY2FzdENoYW5uZWwoY2hhbm5lbCkge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICBjaGFubmVsID0gU3RyaW5nKGNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBpZCA9ICckQnJvYWRjYXN0Q2hhbm5lbCQnICsgY2hhbm5lbCArICckJztcblxuICAgICAgICBjaGFubmVsc1tpZF0gPSBjaGFubmVsc1tpZF0gfHwgW107XG4gICAgICAgIGNoYW5uZWxzW2lkXS5wdXNoKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX25hbWUgPSBjaGFubmVsO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl9jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbWMgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDEuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDIuc3RhcnQoKTtcblxuICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnN0b3JhZ2VBcmVhICE9PSBnbG9iYWwubG9jYWxTdG9yYWdlKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5uZXdWYWx1ZSA9PSBudWxsIHx8IGUubmV3VmFsdWUgPT09ICcnKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5rZXkuc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCkgIT09IGlkKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZS5uZXdWYWx1ZSk7XG4gICAgICAgICAgICAkdGhpcy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEJyb2FkY2FzdENoYW5uZWwucHJvdG90eXBlID0ge1xuICAgICAgICAvLyBCcm9hZGNhc3RDaGFubmVsIEFQSVxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0TWVzc2FnZTogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIGUubmFtZSA9ICdJbnZhbGlkU3RhdGVFcnJvcic7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gb3RoZXIgY29udGV4dHMgdmlhIHN0b3JhZ2UgZXZlbnRzLi4uXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5faWQgKyBTdHJpbmcoRGF0ZS5ub3coKSkgKyAnJCcgKyBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIGN1cnJlbnQgY29udGV4dCB2aWEgcG9ydHNcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5mb3JFYWNoKGZ1bmN0aW9uKGJjKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJjID09PSAkdGhpcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGJjLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShKU09OLnBhcnNlKHZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0Mi5jbG9zZSgpO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjaGFubmVsc1t0aGlzLl9pZF0uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEV2ZW50VGFyZ2V0IEFQSVxuICAgICAgICBnZXQgb25tZXNzYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9ubWVzc2FnZSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEub25tZXNzYWdlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24oLypldmVudCovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuZGlzcGF0Y2hFdmVudC5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgPSBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCB8fCBCcm9hZGNhc3RDaGFubmVsO1xufSkoc2VsZik7XG4iLCAie1xuXHRcImFqYXhQYWdlVGl0bGVcIjogXCJUZW1wbGF0ZTpBZHZhbmNlZFNpdGVOb3RpY2VzL2FqYXhcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjc2l0ZU5vdGljZVwiLFxuXHRcInN0b3JhZ2VLZXlcIjogXCJleHQuZ2FkZ2V0LkFkdmFuY2VkU2l0ZU5vdGljZXNfZGlzbWlzc0FTTlwiLFxuXHRcInZlcnNpb25cIjogXCI0LjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHt0eXBlIFJlbW90ZU5vdGljZXN9IGZyb20gJy4vbW9kdWxlcy91dGlsL3F1ZXJ5QXBpJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7bG9hZFJlbW90ZU5vdGljZXN9IGZyb20gJy4vbW9kdWxlcy9sb2FkUmVtb3RlTm90aWNlcyc7XG5pbXBvcnQge3Nob3dOb3RpY2VzfSBmcm9tICcuL21vZHVsZXMvc2hvd05vdGljZSc7XG5cbihhc3luYyBmdW5jdGlvbiBhZHZhbmNlZFNpdGVOb3RpY2VzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSBhd2FpdCBnZXRCb2R5KCk7XG5cblx0Y29uc3QgJG1vdW50UG9pbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHRpZiAoISRtb3VudFBvaW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJlbW90ZU5vdGljZXM6IFJlbW90ZU5vdGljZXMgPSBhd2FpdCBsb2FkUmVtb3RlTm90aWNlcygpO1xuXHRpZiAoIXJlbW90ZU5vdGljZXMuJG5vdGljZXM/Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJhbmRvbUluZGV4OiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZW1vdGVOb3RpY2VzLiRub3RpY2VzLmxlbmd0aCk7XG5cdHNob3dOb3RpY2VzKCRtb3VudFBvaW50LCByYW5kb21JbmRleCwgcmVtb3RlTm90aWNlcyk7XG59KSgpO1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQWR2YW5jZWRTaXRlTm90aWNlcy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuXG5pbnRlcmZhY2UgUmVtb3RlTm90aWNlcyB7XG5cdCRub3RpY2VzPzogSlF1ZXJ5O1xuXHR2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG5jb25zdCB7d2dVc2VyTGFuZ3VhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBwYXJhbWV0ZXJzOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0YWN0aW9uOiAncGFyc2UnLFxuXHRmb3JtYXQ6ICdqc29uJyxcblx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRwcm9wOiAndGV4dCcsXG5cdHBhZ2U6IE9QVElPTlMuYWpheFBhZ2VUaXRsZSxcblx0dXNlbGFuZzogd2dVc2VyTGFuZ3VhZ2UsXG5cdHZhcmlhbnQ6IHdnVXNlckxhbmd1YWdlLFxufTtcblxuY29uc3QgcXVlcnlBcGkgPSBhc3luYyAoKTogUHJvbWlzZTxSZXR1cm5UeXBlPG13LkFwaVsnZ2V0J10+PiA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IGFwaS5nZXQocGFyYW1ldGVycyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0FkdmFuY2VkU2l0ZU5vdGljZXNdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHJldHVybiB7fTtcblx0fVxufTtcblxuZXhwb3J0IHt0eXBlIFJlbW90ZU5vdGljZXMsIHF1ZXJ5QXBpfTtcbiIsICJpbXBvcnQge3R5cGUgUmVtb3RlTm90aWNlcywgcXVlcnlBcGl9IGZyb20gJy4vdXRpbC9xdWVyeUFwaSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbnR5cGUgQXBpUmVzcG9uc2UgPSB7XG5cdHBhcnNlOiB7XG5cdFx0dGV4dD86IHN0cmluZztcblx0fTtcbn07XG5cbmNvbnN0IGxvYWRSZW1vdGVOb3RpY2VzID0gYXN5bmMgKCk6IFByb21pc2U8UmVtb3RlTm90aWNlcz4gPT4ge1xuXHRjb25zdCByZXNwb25zZTogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBxdWVyeUFwaT4+ID0gYXdhaXQgcXVlcnlBcGkoKTtcblx0Y29uc3QgcmVzcG9uc2VQYXJzZSA9IHJlc3BvbnNlWydwYXJzZSddIGFzIEFwaVJlc3BvbnNlWydwYXJzZSddO1xuXG5cdGlmICghcmVzcG9uc2VQYXJzZT8udGV4dCkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGNvbnN0IHJlbW90ZU5vdGljZSA9ICg8ZGl2IGlubmVySFRNTD17cmVzcG9uc2VQYXJzZS50ZXh0fSAvPikucXVlcnlTZWxlY3RvcigndWwuc2l0ZW50cycpO1xuXHRpZiAoIXJlbW90ZU5vdGljZSkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGNvbnN0ICRyZW1vdGVOb3RpY2VzOiBOb25OdWxsYWJsZTxSZW1vdGVOb3RpY2VzWyckbm90aWNlcyddPiA9ICQocmVtb3RlTm90aWNlKSBhcyBKUXVlcnk7XG5cblx0Y29uc3QgJG5vdGljZXM6IEpRdWVyeSA9ICRyZW1vdGVOb3RpY2VzLmZpbmQoJ2xpJyk7XG5cdGNvbnN0IHJlbW90ZU5vdGljZXNWZXJzaW9uOiBOb25OdWxsYWJsZTxSZW1vdGVOb3RpY2VzWyd2ZXJzaW9uJ10+ID0gKFxuXHRcdCRyZW1vdGVOb3RpY2VzLmRhdGEoJ2Fzbi12ZXJzaW9uJykgYXMgbnVtYmVyXG5cdCkudG9TdHJpbmcoKTtcblxuXHRyZXR1cm4ge1xuXHRcdCRub3RpY2VzLFxuXHRcdHZlcnNpb246IHJlbW90ZU5vdGljZXNWZXJzaW9uLFxuXHR9O1xufTtcblxuZXhwb3J0IHtsb2FkUmVtb3RlTm90aWNlc307XG4iLCAiY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1hZHZhbmNlZF9zaXRlX25vdGljZXMnO1xuY29uc3QgQ0xBU1NfTkFNRV9ESVNNSVNTOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfV9fZGlzbWlzc2A7XG5jb25zdCBDTEFTU19OQU1FX05PVElDRTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX1fX25vdGljZWA7XG5jb25zdCBDTEFTU19OQU1FX05PVElDRV9DT05URU5UOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX05PVElDRX1fX2NvbnRlbnRgO1xuY29uc3QgQ0xBU1NfTkFNRV9USVRMRTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX1fX3RpdGxlYDtcblxuZXhwb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0RJU01JU1MsIENMQVNTX05BTUVfTk9USUNFLCBDTEFTU19OQU1FX05PVElDRV9DT05URU5ULCBDTEFTU19OQU1FX1RJVExFfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0NMQVNTX05BTUVfRElTTUlTUywgQ0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge3R5cGUgUmVtb3RlTm90aWNlc30gZnJvbSAnLi91dGlsL3F1ZXJ5QXBpJztcbmltcG9ydCB7Z2VuZXJhdGVBcmVhfSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVBcmVhJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7bWF0Y2hDcml0ZXJpYX0gZnJvbSAnLi91dGlsL21hdGNoQ3JpdGVyaWEnO1xuaW1wb3J0IHt0aXBweX0gZnJvbSAnZXh0LmdhZGdldC5UaXBweSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgYnJvYWRjYXN0Q2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKE9QVElPTlMuc3RvcmFnZUtleSk7XG5cbmxldCBjdXJyZW50VmVyc2lvbjogc3RyaW5nID0gJzAnO1xuY29uc3QgbG9jYWxWZXJzaW9uID0gbXcuc3RvcmFnZS5nZXQoT1BUSU9OUy5zdG9yYWdlS2V5KSBhcyBzdHJpbmcgfCBudWxsO1xuXG5sZXQgdGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+O1xuXG5jb25zdCAkYXJlYTogSlF1ZXJ5ID0gZ2VuZXJhdGVBcmVhKCk7XG5jb25zdCAkY3VycmVudE5vdGljZTogSlF1ZXJ5ID0gJGFyZWEuZmluZChgLiR7Q0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVH1gKTtcbmNvbnN0ICRkaXNtaXNzOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJGFyZWEuZmluZChgLiR7Q0xBU1NfTkFNRV9ESVNNSVNTfWApLmZpbmQoJ2EnKTtcblxuY29uc3QgY2xvc2VOb3RpY2VzID0gKCk6IHZvaWQgPT4ge1xuXHRicm9hZGNhc3RDaGFubmVsLnBvc3RNZXNzYWdlKCdjbG9zZScpO1xuXHRicm9hZGNhc3RDaGFubmVsLmNsb3NlKCk7XG5cdGNsZWFyVGltZW91dCh0aW1lcik7XG5cdCRhcmVhLnJlbW92ZSgpO1xuXHRtdy5zdG9yYWdlLnNldChPUFRJT05TLnN0b3JhZ2VLZXksIGN1cnJlbnRWZXJzaW9uLCA2MCAqIDYwICogMjQgKiAzMCAqIDEwMDApO1xufTtcblxuYnJvYWRjYXN0Q2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgY2xvc2VOb3RpY2VzKTtcblxuJGRpc21pc3Mub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRjbG9zZU5vdGljZXMoKTtcblx0Y29uc3QgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KHtcblx0XHRub2RlOiA8c3BhbiBpbm5lckhUTUw9e2dldE1lc3NhZ2UoJ0Rpc21pc3NOb3RpY2UnKX0gLz4sXG5cdFx0Y2xvc2U6IHRydWUsXG5cdFx0ZHVyYXRpb246IDEwICogMTAwMCxcblx0XHRncmF2aXR5OiAndG9wJyxcblx0XHRwb3NpdGlvbjogJ3JpZ2h0Jyxcblx0XHRvbkNsaWNrKCk6IHZvaWQge1xuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHR9LFxuXHR9KTtcbn0pO1xudGlwcHkoJGRpc21pc3MuZ2V0KDApIGFzIEhUTUxBbmNob3JFbGVtZW50LCB7XG5cdGFycm93OiB0cnVlLFxuXHRjb250ZW50OiAkZGlzbWlzcy5hdHRyKCdhcmlhLWxhYmVsJykgYXMgc3RyaW5nLFxuXHRwbGFjZW1lbnQ6ICdib3R0b20nLFxufSk7XG5cbmxldCAkbm90aWNlczogSlF1ZXJ5O1xuY29uc3Qgbm90aWNlU3R5bGVzOiBIVE1MU3R5bGVFbGVtZW50W10gPSBbXTtcbmNvbnN0IHNob3dOb3RpY2VzID0gKCRtb3VudFBvaW50OiBKUXVlcnksIGluZGV4OiBudW1iZXIsIHJlbW90ZU5vdGljZXM/OiBSZW1vdGVOb3RpY2VzKTogdm9pZCA9PiB7XG5cdGN1cnJlbnRWZXJzaW9uID0gcmVtb3RlTm90aWNlcz8udmVyc2lvbiA/PyBjdXJyZW50VmVyc2lvbjtcblx0aWYgKGN1cnJlbnRWZXJzaW9uID09PSBsb2NhbFZlcnNpb24pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAocmVtb3RlTm90aWNlcz8uJG5vdGljZXMpIHtcblx0XHQoeyRub3RpY2VzfSA9IHJlbW90ZU5vdGljZXMpO1xuXHR9XG5cblx0Y29uc3Qgbm90aWNlc0xlbmd0aDogbnVtYmVyID0gJG5vdGljZXMubGVuZ3RoO1xuXHRjb25zdCBuZXh0Tm90aWNlSW5kZXg6IG51bWJlciA9IChpbmRleCArIDEpICUgbm90aWNlc0xlbmd0aDtcblx0bGV0ICRub3RpY2U6IEpRdWVyeSA9ICQoKTtcblxuXHRsZXQgaTogbnVtYmVyID0gMDtcblx0d2hpbGUgKGkrKyA8IG5vdGljZXNMZW5ndGgpIHtcblx0XHQkbm90aWNlID0gJG5vdGljZXMuZXEoaW5kZXgpO1xuXHRcdGlmICghbWF0Y2hDcml0ZXJpYSgkbm90aWNlKSkge1xuXHRcdFx0c2hvd05vdGljZXMoJG1vdW50UG9pbnQsIG5leHROb3RpY2VJbmRleCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluZGV4ID0gaW5kZXgrKyAlIG5vdGljZXNMZW5ndGg7XG5cdH1cblxuXHRpZiAodHlwZW9mICRub3RpY2UuZGF0YSgnYXNuLWh0bWwnKSA9PT0gJ3N0cmluZycpIHtcblx0XHQkbm90aWNlLmRhdGEoJ2Fzbi1odG1sLXJhdycsIG13LlVyaS5kZWNvZGUoJG5vdGljZS5kYXRhKCdhc24taHRtbCcpIGFzIHN0cmluZykpO1xuXHRcdCRub3RpY2UuZGF0YSgnYXNuLWh0bWwnLCBudWxsKTtcblx0fVxuXHRpZiAodHlwZW9mICRub3RpY2UuZGF0YSgnYXNuLXN0eWxlJykgPT09ICdzdHJpbmcnKSB7XG5cdFx0JG5vdGljZS5kYXRhKCdhc24tc3R5bGUtaWQnLCBub3RpY2VTdHlsZXMubGVuZ3RoKTtcblx0XHRjb25zdCBzdHlsZTogSFRNTFN0eWxlRWxlbWVudCA9IG13LmxvYWRlci5hZGRTdHlsZVRhZyhtdy5VcmkuZGVjb2RlKCRub3RpY2UuZGF0YSgnYXNuLXN0eWxlJykgYXMgc3RyaW5nKSk7XG5cdFx0c3R5bGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdG5vdGljZVN0eWxlc1tub3RpY2VTdHlsZXMubGVuZ3RoXSA9IHN0eWxlOyAvLyBSZXBsYWNlIGBub3RpY2VTdHlsZXMucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0JG5vdGljZS5kYXRhKCdhc24tc3R5bGUnLCBudWxsKTtcblx0fVxuXG5cdGNvbnN0IG5vdGljZUh0bWw6IHN0cmluZyA9ICgkbm90aWNlLmRhdGEoJ2Fzbi1odG1sLXJhdycpIGFzIHN0cmluZykgfHwgJG5vdGljZS5odG1sKCk7XG5cdGNvbnN0IG5vdGljZVN0eWxlSWQ6IG51bWJlciA9ICRub3RpY2UuZGF0YSgnYXNuLXN0eWxlLWlkJykgYXMgbnVtYmVyO1xuXHRjb25zdCBjdXJyZW50Tm90aWNlSHRtbDogc3RyaW5nID0gJGN1cnJlbnROb3RpY2UuaHRtbCgpO1xuXHRpZiAoY3VycmVudE5vdGljZUh0bWwgJiYgY3VycmVudE5vdGljZUh0bWwgIT09IG5vdGljZUh0bWwpIHtcblx0XHQkY3VycmVudE5vdGljZS5zdG9wKCkuZmFkZU91dCgoKTogdm9pZCA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IHN0eWxlIG9mIG5vdGljZVN0eWxlcykge1xuXHRcdFx0XHRzdHlsZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBub3RpY2VTdHlsZTogSFRNTFN0eWxlRWxlbWVudCB8IHVuZGVmaW5lZCA9IG5vdGljZVN0eWxlc1tub3RpY2VTdHlsZUlkXTtcblx0XHRcdGlmIChub3RpY2VTdHlsZSkge1xuXHRcdFx0XHRub3RpY2VTdHlsZS5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0JGN1cnJlbnROb3RpY2UuaHRtbChub3RpY2VIdG1sKTtcblx0XHRcdC8vIGFuaW1hdGlvbiB0cnkgL2NhdGNoZWQgdG8gYXZvaWQgVHlwZUVycm9yOiAoQW5pbWF0aW9uLnR3ZWVuZXJzW3Byb3BdfHxbXSkuY29uY2F0IGlzIG5vdCBhIGZ1bmN0aW9uIGVycm9yIGJlaW5nIHNlZW4gaW4gcHJvZHVjdGlvblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0JGN1cnJlbnROb3RpY2UuZmFkZUluKCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAoIWN1cnJlbnROb3RpY2VIdG1sKSB7XG5cdFx0JG1vdW50UG9pbnQuYXBwZW5kKCRhcmVhKTtcblx0XHRjb25zdCBub3RpY2VTdHlsZTogSFRNTFN0eWxlRWxlbWVudCB8IHVuZGVmaW5lZCA9IG5vdGljZVN0eWxlc1tub3RpY2VTdHlsZUlkXTtcblx0XHRpZiAobm90aWNlU3R5bGUpIHtcblx0XHRcdG5vdGljZVN0eWxlLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdCRjdXJyZW50Tm90aWNlLmh0bWwobm90aWNlSHRtbCkuZmFkZUluKCk7XG5cdH1cblxuXHR0aW1lciA9IHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuXHRcdHNob3dOb3RpY2VzKCRtb3VudFBvaW50LCBuZXh0Tm90aWNlSW5kZXgpO1xuXHR9LCA3ICogMTAwMCk7XG59O1xuXG5leHBvcnQge3Nob3dOb3RpY2VzfTtcbiIsICJpbXBvcnQge1xuXHRDTEFTU19OQU1FLFxuXHRDTEFTU19OQU1FX0RJU01JU1MsXG5cdENMQVNTX05BTUVfTk9USUNFLFxuXHRDTEFTU19OQU1FX05PVElDRV9DT05URU5ULFxuXHRDTEFTU19OQU1FX1RJVExFLFxufSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZW5lcmF0ZUFyZWEgPSAoKTogSlF1ZXJ5ID0+IHtcblx0Y29uc3QgYXJlYTogUmVhY3QuUmVhY3RFbGVtZW50ID0gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtbQ0xBU1NfTkFNRSwgJ25vcHJpbnQnXX0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9USVRMRX0+e2dldE1lc3NhZ2UoJ1RpdGxlJyl9PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9OT1RJQ0V9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17W0NMQVNTX05BTUVfTk9USUNFX0NPTlRFTlQsICdjZW50ZXInXX0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfRElTTUlTU30+XG5cdFx0XHRcdDxhIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPXtnZXRNZXNzYWdlKCdEaXNtaXNzJyl9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcblxuXHRyZXR1cm4gJChhcmVhKSBhcyBKUXVlcnk7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlQXJlYX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdERpc21pc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVHVybiBvZmYgdGhpcyBub3RpY2UnLFxuXHRcdFx0amE6ICdBU07jgpLjgqrjg5XjgavjgZnjgosnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWz6Zet5YWs5ZGKJyxcblx0XHRcdCd6aC1oYW50JzogJ+mXnOmWieWFrOWRiicsXG5cdFx0fSksXG5cdFx0RGlzbWlzc05vdGljZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgaGF2ZSBjaG9zZW4gdG8gdHVybiBvZmYgQWR2YW5jZWQgU2l0ZSBOb3RpY2VzIGZvciB0aGUgbmV4dCAzMCBkYXlzLiA8YnI+SWYgdGhlIHNpdGUtd2lkZSBhbm5vdW5jZW1lbnQgaXMgbm90IHVwZGF0ZWQgd2l0aGluIHRoZSBuZXh0IDMwIGRheXMsIGl0IHdpbGwgbm8gbG9uZ2VyIGJlIGRpc3BsYXllZDsgaG93ZXZlciwgaWYgdGhlIHNpdGUtd2lkZSBhbm5vdW5jZW1lbnQgaXMgdXBkYXRlZCwgaXQgd2lsbCBiZSBkaXNwbGF5ZWQgYWdhaW4uJyxcblx0XHRcdGphOiAn5LuK5b6MMzDml6XplpPjgIFBU07jgpLjgqrjg5XjgavjgZnjgovjgZPjgajjgpLpgbjmip7jgZfjgb7jgZfjgZ/jgII8YnI+44K144Kk44OI5YWo5L2T44Gu6YCa55+l44GM5LuK5b6MMzDml6Xku6XlhoXjgavmm7TmlrDjgZXjgozjgarjgYTloLTlkIjjgIHooajnpLrjgZXjgozjgarjgY/jgarjgorjgb7jgZnjgILjgZ/jgaDjgZfjgIHjgrXjgqTjg4jlhajkvZPjga7pgJrnn6XjgYzmm7TmlrDjgZXjgozjgovloLTlkIjjga/jgIHlho3jgbPooajnpLrjgZXjgozjgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5oKo5bey6YCJ5oup5Zyo5o6l5LiL5p2lMzDml6XlhoXlhbPpl63igJzpq5jnuqfnq5nngrnpgJrlkYrigJ3jgII8YnI+6Iul5o6l5LiL5p2lMzDml6XlhoXlhajnq5nlhazlkYrmnKrmnInmm7TmlrDvvIzliJnkuI3lho3mmL7npLrvvJvkvYbmmK/vvIzoi6Xlhajnq5nlhazlkYrlhoXlrrnmm7TmlrDvvIzliJnlsIbph43mlrDmmL7npLrjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5oKo5bey6YG45pOH5Zyo5o6l5LiL5L6GMzDml6Xlhafpl5zplonjgIzpq5jntJrnq5npu57pgJrlkYrjgI3jgII8YnI+6Iul5o6l5LiL5L6GMzDml6Xlhaflhajnq5nlhazlkYrmnKrmnInmm7TmlrDvvIzliYfkuI3lho3poa/npLrvvJvkvYbmmK/vvIzoi6Xlhajnq5nlhazlkYrlhaflrrnmm7TmlrDvvIzliYflsIfph43mlrDpoa/npLrjgIInLFxuXHRcdH0pLFxuXHRcdFRpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Fubm91bmNlbWVudCcsXG5cdFx0XHRqYTogJ+mAmuefpScsXG5cdFx0XHR6aDogJ+WFrOWRiicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IHt3Z1VzZXJHcm91cHMsIHdnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuY29uc3QgaW5fZ3JvdXAgPSAoZ3JvdXA6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gISF3Z1VzZXJHcm91cHM/LmluY2x1ZGVzKGdyb3VwKTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbmNvbnN0IG9ubHlfZm9yID0gKHVzZXJMYW5ndWFnZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiB1c2VyTGFuZ3VhZ2UgPT09IHdnVXNlckxhbmd1YWdlO1xufTtcblxuY29uc3QgbWF0Y2hDcml0ZXJpYSA9ICgkbm90aWNlOiBKUXVlcnkpOiBib29sZWFuID0+IHtcblx0Y29uc3QgY2FjaGUgPSAkbm90aWNlLmRhdGEoJ2Fzbi1jYWNoZScpIGFzIGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdGlmIChjYWNoZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlO1xuXHR9XG5cblx0Y29uc3QgdGVzdENyaXRlcmlhID0gKGNyaXRlcmlhOiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHQvLyBGSVhNRTogVGhpcyBzaG91bGRuJ3QgYmUgdXNpbmcgZXZhbCBvbiBkYXRhIGVudGVyZWQgaW4gd2lraXRleHQuXG5cdFx0Ly8gSWYgdGhhdCBkYXRhIGlzIG1hbGZvcm1lZCBpdCB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBlLmcuIGNyaXRlcmlhID0gXCIoZmFsc2UpKVwiXG5cdFx0dHJ5IHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1ldmFsXG5cdFx0XHRyZXR1cm4gd2luZG93LmV2YWwoY3JpdGVyaWEpIGFzIGJvb2xlYW47XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdGxldCByZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdCBjcml0ZXJpYURhdGE6IHN0cmluZyA9ICgoJG5vdGljZS5kYXRhKCdhc24tY3JpdGVyaWEnKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpID8/ICcnKS50cmltKCk7XG5cdGlmIChjcml0ZXJpYURhdGEpIHtcblx0XHR0cnkge1xuXHRcdFx0cmVzdWx0ID0gdGVzdENyaXRlcmlhKG13LlVyaS5kZWNvZGUoY3JpdGVyaWFEYXRhKSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXN1bHQgPSB0cnVlO1xuXHRcdH1cblx0fSBlbHNlIGlmICgkbm90aWNlLmF0dHIoJ2NsYXNzJykpIHtcblx0XHRsZXQgY3JpdGVyaWE6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV9zeXNvcCcpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gaW5fZ3JvdXAoJ3N5c29wJykgfHwgaW5fZ3JvdXAoJ3N0ZXdhcmQnKSB8fCBpbl9ncm91cCgncWl1d2VuJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X2xvZ2dlZCcpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gaW5fZ3JvdXAoJ3VzZXInKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfYW5vbicpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gIWluX2dyb3VwKCd1c2VyJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX2NuJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2ZvcignemgtY24nKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfc2cnKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC1zZycpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF9teScpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLW15Jyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX2hrJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2ZvcignemgtaGsnKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfbW8nKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC1tbycpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF90dycpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLXR3Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNyaXRlcmlhID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNyaXRlcmlhID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXN1bHQgPSBjcml0ZXJpYTtcblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSB0cnVlO1xuXHR9XG5cblx0JG5vdGljZS5kYXRhKCdhc24tY2FjaGUnLCByZXN1bHQpO1xuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQge21hdGNoQ3JpdGVyaWF9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsU0FBUyxRQUFRO0FBQ2QsVUFBSSxXQUFXLENBQUM7QUFFaEIsZUFBU0Esa0JBQWlCLFNBQVM7QUFDL0IsWUFBSSxRQUFRO0FBQ1osa0JBQVUsT0FBTyxPQUFPO0FBRXhCLFlBQUksS0FBSyx1QkFBdUIsVUFBVTtBQUUxQyxpQkFBUyxFQUFFLElBQUksU0FBUyxFQUFFLEtBQUssQ0FBQztBQUNoQyxpQkFBUyxFQUFFLEVBQUUsS0FBSyxJQUFJO0FBRXRCLGFBQUssUUFBUTtBQUNiLGFBQUssTUFBTTtBQUNYLGFBQUssVUFBVTtBQUNmLGFBQUssTUFBTSxJQUFJLGVBQWU7QUFDOUIsYUFBSyxJQUFJLE1BQU0sTUFBTTtBQUNyQixhQUFLLElBQUksTUFBTSxNQUFNO0FBRXJCLGVBQU8saUJBQWlCLFdBQVcsU0FBUyxHQUFHO0FB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QkFBQSxNQUFxQ2xHLGtCQUFrQjtBQUM3RCxRQUFJLEdBQUF5SCx3QkFBQ3ZCLGNBQWNqRixjQUFBLFFBQUF3RywwQkFBQSxVQUFkQSxzQkFBd0JwQixTQUFRO0FBQ3BDO0lBQ0Q7QUFFQSxVQUFNdUIsY0FBc0JDLEtBQUtDLE1BQU1ELEtBQUtFLE9BQU8sSUFBSTdCLGNBQWNqRixTQUFTb0YsTUFBTTtBQUNwRk4sZ0JBQVlDLGFBQWE0QixhQUFhMUIsYUFBYTtFQUNwRCxDQUFBO0FBQUEsV0FmZ0I4QixzQkFBQTtBQUFBLFdBQUFDLHFCQUFBckksTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxTQUFBbUk7QUFBQSxHQUFBLEVBZWI7IiwKICAibmFtZXMiOiBbIkJyb2FkY2FzdENoYW5uZWwiLCAiYWpheFBhZ2VUaXRsZSIsICJtb3VudFBvaW50U2VsZWN0b3IiLCAic3RvcmFnZUtleSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0OCIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgIndnVXNlckxhbmd1YWdlIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAicGFyYW1ldGVycyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJwYWdlIiwgInVzZWxhbmciLCAidmFyaWFudCIsICJxdWVyeUFwaSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImVycm9yIiwgImNvbnNvbGUiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgImxvYWRSZW1vdGVOb3RpY2VzIiwgIl9yZWYyIiwgInJlc3BvbnNlIiwgInJlc3BvbnNlUGFyc2UiLCAidGV4dCIsICJyZW1vdGVOb3RpY2UiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImlubmVySFRNTCIsICJxdWVyeVNlbGVjdG9yIiwgIiRyZW1vdGVOb3RpY2VzIiwgIiQiLCAiJG5vdGljZXMyIiwgImZpbmQiLCAicmVtb3RlTm90aWNlc1ZlcnNpb24iLCAiZGF0YSIsICJ0b1N0cmluZyIsICIkbm90aWNlcyIsICJDTEFTU19OQU1FIiwgIkNMQVNTX05BTUVfRElTTUlTUyIsICJDTEFTU19OQU1FX05PVElDRSIsICJDTEFTU19OQU1FX05PVElDRV9DT05URU5UIiwgIkNMQVNTX05BTUVfVElUTEUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkRpc21pc3MiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiRGlzbWlzc05vdGljZSIsICJUaXRsZSIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2VuZXJhdGVBcmVhIiwgImFyZWEiLCAiY2xhc3NOYW1lIiwgInJvbGUiLCAid2dVc2VyR3JvdXBzIiwgIndnVXNlckxhbmd1YWdlMiIsICJpbl9ncm91cCIsICJncm91cCIsICJpbmNsdWRlcyIsICJvbmx5X2ZvciIsICJ1c2VyTGFuZ3VhZ2UiLCAibWF0Y2hDcml0ZXJpYSIsICIkbm90aWNlIiwgIl8kbm90aWNlJGRhdGEiLCAiY2FjaGUiLCAidGVzdENyaXRlcmlhIiwgImNyaXRlcmlhIiwgIndpbmRvdyIsICJldmFsIiwgInJlc3VsdCIsICJjcml0ZXJpYURhdGEiLCAidHJpbSIsICJVcmkiLCAiZGVjb2RlIiwgImF0dHIiLCAiaGFzQ2xhc3MiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImltcG9ydF9leHRfZ2FkZ2V0NyIsICJicm9hZGNhc3RDaGFubmVsIiwgIkJyb2FkY2FzdENoYW5uZWwiLCAiY3VycmVudFZlcnNpb24iLCAibG9jYWxWZXJzaW9uIiwgInN0b3JhZ2UiLCAidGltZXIiLCAiJGFyZWEiLCAiJGN1cnJlbnROb3RpY2UiLCAiJGRpc21pc3MiLCAiY2xvc2VOb3RpY2VzIiwgInBvc3RNZXNzYWdlIiwgImNsb3NlIiwgImNsZWFyVGltZW91dCIsICJyZW1vdmUiLCAic2V0IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAib24iLCAidG9hc3RpZnlJbnN0YW5jZSIsICJ0b2FzdGlmeSIsICJub2RlIiwgImR1cmF0aW9uIiwgImdyYXZpdHkiLCAicG9zaXRpb24iLCAib25DbGljayIsICJoaWRlVG9hc3QiLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJwbGFjZW1lbnQiLCAibm90aWNlU3R5bGVzIiwgInNob3dOb3RpY2VzIiwgIiRtb3VudFBvaW50IiwgImluZGV4IiwgInJlbW90ZU5vdGljZXMiLCAiX3JlbW90ZU5vdGljZXMkdmVyc2lvIiwgIm5vdGljZXNMZW5ndGgiLCAibGVuZ3RoIiwgIm5leHROb3RpY2VJbmRleCIsICJpIiwgImVxIiwgInN0eWxlIiwgImxvYWRlciIsICJhZGRTdHlsZVRhZyIsICJkaXNhYmxlZCIsICJub3RpY2VIdG1sIiwgImh0bWwiLCAibm90aWNlU3R5bGVJZCIsICJjdXJyZW50Tm90aWNlSHRtbCIsICJzdG9wIiwgImZhZGVPdXQiLCAiX2kiLCAiX25vdGljZVN0eWxlcyIsICJub3RpY2VTdHlsZSIsICJmYWRlSW4iLCAiYXBwZW5kIiwgInNldFRpbWVvdXQiLCAiX3JlbW90ZU5vdGljZXMkJG5vdGljIiwgIiRib2R5IiwgImdldEJvZHkiLCAicmFuZG9tSW5kZXgiLCAiTWF0aCIsICJmbG9vciIsICJyYW5kb20iLCAiYWR2YW5jZWRTaXRlTm90aWNlcyIsICJfYWR2YW5jZWRTaXRlTm90aWNlcyJdCn0K
