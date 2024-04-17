/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/ConfirmLogout}
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

// dist/ConfirmLogout/ConfirmLogout.js
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
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
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
//! src/ConfirmLogout/options.json
var logoutElementSelector = '#ca-cb-logout>a,#topbar>a[href*="UserLogout"],#pt-logout>a';
var logoutElementSelectorOfVector2022StickyHeader = "#pt-logout-sticky-header>a";
var version = "3.0";
//! src/ConfirmLogout/modules/constant.ts
var WG_SKIN = mw.config.get("skin");
var WG_USER_NAME = mw.config.get("wgUserName");
//! src/ConfirmLogout/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Network error": (0, import_ext_gadget.localize)({
      en: "Network error",
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    Confirm: (0, import_ext_gadget.localize)({
      en: "Confirm logout?",
      ja: "ログアウトしますか？",
      "zh-hans": "您确定要退出吗？",
      "zh-hant": "您確定要登出嗎？"
    }),
    Succeed: (0, import_ext_gadget.localize)({
      en: "Logout succeed. Refreshing...",
      ja: "ログアウトに成功しました。再読み込みします...",
      "zh-hans": "退出成功，即将刷新页面……",
      "zh-hant": "登出成功，即將重新載入……"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/ConfirmLogout/modules/addListener.ts
var import_ext_gadget6 = require("ext.gadget.Util");
//! src/ConfirmLogout/modules/util/refreshEventListener.ts
var import_ext_gadget2 = require("ext.gadget.FilterAlteredClicks");
var refreshEventListener = ($element, clickListener2) => {
  const hoverListener = () => {
    $element.off("click");
    $element.on("click", (0, import_ext_gadget2.filterAlteredClicks)((event) => {
      clickListener2(event);
    }));
  };
  const hoverListenerWithDebounce = mw.util.debounce(hoverListener, 200, true);
  $element.on("mouseover touchstart", hoverListenerWithDebounce);
};
//! src/ConfirmLogout/modules/addListener.ts
var import_ext_gadget7 = require("ext.gadget.Toastify");
//! src/ConfirmLogout/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("ConfirmLogout/".concat(version));
//! src/ConfirmLogout/modules/util/logout.ts
var import_ext_gadget4 = require("ext.gadget.Toastify");
var logout = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (toastifyInstance) {
    yield api.postWithEditToken({
      action: "logout"
    });
    toastifyInstance.hideToast();
    (0, import_ext_gadget4.toastify)({
      text: getMessage("Succeed")
    }, "success");
    location.reload();
  });
  return function logout2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/ConfirmLogout/modules/util/showError.ts
var import_ext_gadget5 = require("ext.gadget.Toastify");
var showError = (error, toastifyInstance) => {
  console.error("[ConfirmLogout] Ajax error:", error);
  toastifyInstance.hideToast();
  (0, import_ext_gadget5.toastify)({
    text: getMessage("Network error")
  }, "error");
};
//! src/ConfirmLogout/modules/tryLogout.ts
var tryLogout = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (toastifyInstance) {
    try {
      yield logout(toastifyInstance);
    } catch (error) {
      showError(error, toastifyInstance);
    }
  });
  return function tryLogout2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/ConfirmLogout/modules/addListener.ts
var clickListener = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (event) {
    event.preventDefault();
    const isConfirm = yield (0, import_ext_gadget6.oouiConfirmWithStyle)(getMessage("Confirm"));
    if (!isConfirm) {
      return;
    }
    const toastifyInstance = (0, import_ext_gadget7.toastify)({
      text: mw.msg("logging-out-notify"),
      duration: -1
    }, "info");
    void tryLogout(toastifyInstance);
  });
  return function clickListener2(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var addListener = ($element) => {
  var _$body$get;
  refreshEventListener($element, (event) => {
    void clickListener(event);
  });
  if (WG_SKIN !== "vector-2022") {
    return;
  }
  const $body = $element.parents("body");
  const observerCallback = (_mutations, observer) => {
    if (!$body.hasClass("vector-sticky-header-visible")) {
      return;
    }
    const SELECTOR = logoutElementSelectorOfVector2022StickyHeader;
    const element = document.querySelector(SELECTOR);
    if (!element) {
      return;
    }
    const elementClone = element.cloneNode(true);
    element.replaceWith(elementClone);
    refreshEventListener($body.find(SELECTOR), (event) => {
      void clickListener(event);
    });
    observer.disconnect();
  };
  const mutationObserver = new MutationObserver(observerCallback);
  mutationObserver.observe((_$body$get = $body.get(0)) !== null && _$body$get !== void 0 ? _$body$get : document.documentElement, {
    attributes: true,
    attributeFilter: ["class"]
  });
};
//! src/ConfirmLogout/ConfirmLogout.ts
var import_ext_gadget8 = require("ext.gadget.Util");
void (0, import_ext_gadget8.getBody)().then(function confirmLogout($body) {
  if (!WG_USER_NAME) {
    return;
  }
  const $element = $body.find(logoutElementSelector);
  if (!$element.length) {
    return;
  }
  addListener($element);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvbmZpcm1Mb2dvdXQvb3B0aW9ucy5qc29uIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvYWRkTGlzdGVuZXIudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvbW9kdWxlcy91dGlsL3JlZnJlc2hFdmVudExpc3RlbmVyLnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvYXBpLnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvdXRpbC9sb2dvdXQudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvbW9kdWxlcy91dGlsL3Nob3dFcnJvci50cyIsICJzcmMvQ29uZmlybUxvZ291dC9tb2R1bGVzL3RyeUxvZ291dC50cyIsICJzcmMvQ29uZmlybUxvZ291dC9Db25maXJtTG9nb3V0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibG9nb3V0RWxlbWVudFNlbGVjdG9yXCI6IFwiI2NhLWNiLWxvZ291dD5hLCN0b3BiYXI+YVtocmVmKj1cXFwiVXNlckxvZ291dFxcXCJdLCNwdC1sb2dvdXQ+YVwiLFxuXHRcImxvZ291dEVsZW1lbnRTZWxlY3Rvck9mVmVjdG9yMjAyMlN0aWNreUhlYWRlclwiOiBcIiNwdC1sb2dvdXQtc3RpY2t5LWhlYWRlcj5hXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiY29uc3QgV0dfU0tJTjogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnc2tpbicpO1xuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpO1xuXG5leHBvcnQge1dHX1NLSU4sIFdHX1VTRVJfTkFNRX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXR3b3JrIGVycm9yJyxcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uCcsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLgnLFxuXHRcdH0pLFxuXHRcdENvbmZpcm06IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybSBsb2dvdXQ/Jyxcblx0XHRcdGphOiAn44Ot44Kw44Ki44Km44OI44GX44G+44GZ44GL77yfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOehruWumuimgemAgOWHuuWQl++8nycsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjnorrlrpropoHnmbvlh7rll47vvJ8nLFxuXHRcdH0pLFxuXHRcdFN1Y2NlZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9nb3V0IHN1Y2NlZWQuIFJlZnJlc2hpbmcuLi4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqLjgqbjg4jjgavmiJDlip/jgZfjgb7jgZfjgZ/jgILlho3oqq3jgb/ovrzjgb/jgZfjgb7jgZkuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6YCA5Ye65oiQ5Yqf77yM5Y2z5bCG5Yi35paw6aG16Z2i4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WHuuaIkOWKn++8jOWNs+Wwh+mHjeaWsOi8ieWFpeKApuKApicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7V0dfU0tJTn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge29vdWlDb25maXJtV2l0aFN0eWxlfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtyZWZyZXNoRXZlbnRMaXN0ZW5lcn0gZnJvbSAnLi91dGlsL3JlZnJlc2hFdmVudExpc3RlbmVyJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuaW1wb3J0IHt0cnlMb2dvdXR9IGZyb20gJy4vdHJ5TG9nb3V0JztcblxuY29uc3QgY2xpY2tMaXN0ZW5lciA9IGFzeW5jIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRjb25zdCBpc0NvbmZpcm06IGJvb2xlYW4gPSBhd2FpdCBvb3VpQ29uZmlybVdpdGhTdHlsZShnZXRNZXNzYWdlKCdDb25maXJtJykpO1xuXHRpZiAoIWlzQ29uZmlybSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBtdy5tc2coJ2xvZ2dpbmctb3V0LW5vdGlmeScpLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cdHZvaWQgdHJ5TG9nb3V0KHRvYXN0aWZ5SW5zdGFuY2UpO1xufTtcblxuY29uc3QgYWRkTGlzdGVuZXIgPSAoJGVsZW1lbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRyZWZyZXNoRXZlbnRMaXN0ZW5lcigkZWxlbWVudCwgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgY2xpY2tMaXN0ZW5lcihldmVudCk7XG5cdH0pO1xuXG5cdGlmIChXR19TS0lOICE9PSAndmVjdG9yLTIwMjInKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJGVsZW1lbnQucGFyZW50cygnYm9keScpO1xuXG5cdGNvbnN0IG9ic2VydmVyQ2FsbGJhY2sgPSAoX211dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSwgb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIpOiB2b2lkID0+IHtcblx0XHRpZiAoISRib2R5Lmhhc0NsYXNzKCd2ZWN0b3Itc3RpY2t5LWhlYWRlci12aXNpYmxlJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBTRUxFQ1RPUjogc3RyaW5nID0gT1BUSU9OUy5sb2dvdXRFbGVtZW50U2VsZWN0b3JPZlZlY3RvcjIwMjJTdGlja3lIZWFkZXI7XG5cdFx0Y29uc3QgZWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUik7XG5cdFx0aWYgKCFlbGVtZW50KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWxlbWVudENsb25lOiBOb2RlID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0ZWxlbWVudC5yZXBsYWNlV2l0aChlbGVtZW50Q2xvbmUpO1xuXG5cdFx0cmVmcmVzaEV2ZW50TGlzdGVuZXIoJGJvZHkuZmluZChTRUxFQ1RPUiksIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgY2xpY2tMaXN0ZW5lcihldmVudCk7XG5cdFx0fSk7XG5cdFx0b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHR9O1xuXHRjb25zdCBtdXRhdGlvbk9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjayk7XG5cdG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSgkYm9keS5nZXQoMCkgPz8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7XG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsnY2xhc3MnXSxcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiIsICJpbXBvcnQge2ZpbHRlckFsdGVyZWRDbGlja3N9IGZyb20gJ2V4dC5nYWRnZXQuRmlsdGVyQWx0ZXJlZENsaWNrcyc7XG5cbmNvbnN0IHJlZnJlc2hFdmVudExpc3RlbmVyID0gKCRlbGVtZW50OiBKUXVlcnksIGNsaWNrTGlzdGVuZXI6IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpID0+IHZvaWQpOiB2b2lkID0+IHtcblx0Y29uc3QgaG92ZXJMaXN0ZW5lciA9ICgpOiB2b2lkID0+IHtcblx0XHQkZWxlbWVudC5vZmYoJ2NsaWNrJyk7XG5cdFx0JGVsZW1lbnQub24oXG5cdFx0XHQnY2xpY2snLFxuXHRcdFx0ZmlsdGVyQWx0ZXJlZENsaWNrcygoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGNsaWNrTGlzdGVuZXIoZXZlbnQpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9O1xuXHRjb25zdCBob3Zlckxpc3RlbmVyV2l0aERlYm91bmNlOiB0eXBlb2YgaG92ZXJMaXN0ZW5lciA9IG13LnV0aWwuZGVib3VuY2UoaG92ZXJMaXN0ZW5lciwgMjAwLCB0cnVlKTtcblxuXHQkZWxlbWVudC5vbignbW91c2VvdmVyIHRvdWNoc3RhcnQnLCBob3Zlckxpc3RlbmVyV2l0aERlYm91bmNlKTtcbn07XG5cbmV4cG9ydCB7cmVmcmVzaEV2ZW50TGlzdGVuZXJ9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQ29uZmlybUxvZ291dC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBsb2dvdXQgPSBhc3luYyAodG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4oe1xuXHRcdGFjdGlvbjogJ2xvZ291dCcsXG5cdH0pO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1N1Y2NlZWQnKSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xuXG5cdGxvY2F0aW9uLnJlbG9hZCgpO1xufTtcblxuZXhwb3J0IHtsb2dvdXR9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3Qgc2hvd0Vycm9yID0gKGVycm9yOiB1bmtub3duLCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlKTogdm9pZCA9PiB7XG5cdGNvbnNvbGUuZXJyb3IoJ1tDb25maXJtTG9nb3V0XSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdH0sXG5cdFx0J2Vycm9yJ1xuXHQpO1xufTtcblxuZXhwb3J0IHtzaG93RXJyb3J9O1xuIiwgImltcG9ydCB7bG9nb3V0fSBmcm9tICcuL3V0aWwvbG9nb3V0JztcbmltcG9ydCB7c2hvd0Vycm9yfSBmcm9tICcuL3V0aWwvc2hvd0Vycm9yJztcblxuY29uc3QgdHJ5TG9nb3V0ID0gYXN5bmMgKHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBsb2dvdXQodG9hc3RpZnlJbnN0YW5jZSk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0c2hvd0Vycm9yKGVycm9yLCB0b2FzdGlmeUluc3RhbmNlKTtcblx0fVxufTtcblxuZXhwb3J0IHt0cnlMb2dvdXR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtXR19VU0VSX05BTUV9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvYWRkTGlzdGVuZXInO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGNvbmZpcm1Mb2dvdXQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGlmICghV0dfVVNFUl9OQU1FKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoT1BUSU9OUy5sb2dvdXRFbGVtZW50U2VsZWN0b3IpO1xuXHRpZiAoISRlbGVtZW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGFkZExpc3RlbmVyKCRlbGVtZW50KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSx3QkFBeUI7QUFDekIsSUFBQUMsZ0RBQWlEO0FBQ2pELElBQUFDLFVBQVc7O0FDSFosSUFBTUMsVUFBa0JDLEdBQUdDLE9BQU9DLElBQUks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SUFDbEVDLFlBQVk7SUFDWkMsaUJBQWlCLENBQUMsT0FBTztFQUMxQixDQUFDO0FBQ0Y7O0FNMURBLElBQUFDLHFCQUFzQmpGLFFBQUEsaUJBQUE7QUFFdEIsTUFBQSxHQUFLaUYsbUJBQUFDLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxjQUFjeEIsT0FBc0M7QUFDaEYsTUFBSSxDQUFDOUQsY0FBYztBQUNsQjtFQUNEO0FBRUEsUUFBTWUsV0FBbUIrQyxNQUFNYSxLQUFhbEYscUJBQXFCO0FBQ2pFLE1BQUksQ0FBQ3NCLFNBQVN3RSxRQUFRO0FBQ3JCO0VBQ0Q7QUFFQTNCLGNBQVk3QyxRQUFRO0FBQ3JCLENBQUM7IiwKICAibmFtZXMiOiBbImxvZ291dEVsZW1lbnRTZWxlY3RvciIsICJsb2dvdXRFbGVtZW50U2VsZWN0b3JPZlZlY3RvcjIwMjJTdGlja3lIZWFkZXIiLCAidmVyc2lvbiIsICJXR19TS0lOIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfVVNFUl9OQU1FIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkNvbmZpcm0iLCAiU3VjY2VlZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZWZyZXNoRXZlbnRMaXN0ZW5lciIsICIkZWxlbWVudCIsICJjbGlja0xpc3RlbmVyMiIsICJob3Zlckxpc3RlbmVyIiwgIm9mZiIsICJvbiIsICJmaWx0ZXJBbHRlcmVkQ2xpY2tzIiwgImV2ZW50IiwgImhvdmVyTGlzdGVuZXJXaXRoRGVib3VuY2UiLCAidXRpbCIsICJkZWJvdW5jZSIsICJpbXBvcnRfZXh0X2dhZGdldDciLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJsb2dvdXQiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0b2FzdGlmeUluc3RhbmNlIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgImFjdGlvbiIsICJoaWRlVG9hc3QiLCAidG9hc3RpZnkiLCAidGV4dCIsICJsb2NhdGlvbiIsICJyZWxvYWQiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJzaG93RXJyb3IiLCAiZXJyb3IiLCAiY29uc29sZSIsICJ0cnlMb2dvdXQiLCAiX3JlZjIiLCAiX3gyIiwgImNsaWNrTGlzdGVuZXIiLCAiX3JlZjMiLCAicHJldmVudERlZmF1bHQiLCAiaXNDb25maXJtIiwgIm9vdWlDb25maXJtV2l0aFN0eWxlIiwgIm1zZyIsICJkdXJhdGlvbiIsICJfeDMiLCAiYWRkTGlzdGVuZXIiLCAiXyRib2R5JGdldCIsICIkYm9keSIsICJwYXJlbnRzIiwgIm9ic2VydmVyQ2FsbGJhY2siLCAiX211dGF0aW9ucyIsICJvYnNlcnZlciIsICJoYXNDbGFzcyIsICJTRUxFQ1RPUiIsICJlbGVtZW50IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZWxlbWVudENsb25lIiwgImNsb25lTm9kZSIsICJyZXBsYWNlV2l0aCIsICJmaW5kIiwgImRpc2Nvbm5lY3QiLCAibXV0YXRpb25PYnNlcnZlciIsICJNdXRhdGlvbk9ic2VydmVyIiwgIm9ic2VydmUiLCAiZG9jdW1lbnRFbGVtZW50IiwgImF0dHJpYnV0ZXMiLCAiYXR0cmlidXRlRmlsdGVyIiwgImltcG9ydF9leHRfZ2FkZ2V0OCIsICJnZXRCb2R5IiwgInRoZW4iLCAiY29uZmlybUxvZ291dCIsICJsZW5ndGgiXQp9Cg==
