/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/PurgePageCache}
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

// dist/PurgePageCache/PurgePageCache.js
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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length) return { done: true };
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
      if (!normalCompletion && it.return != null) it.return();
    } finally {
      if (didErr) throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/PurgePageCache/PurgePageCache.ts
var PurgePageCache_exports = {};
__export(PurgePageCache_exports, {
  purge: () => purge
});
module.exports = __toCommonJS(PurgePageCache_exports);
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/PurgePageCache/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Purge: (0, import_ext_gadget.localize)({
      en: "Purge cache",
      "zh-hans": "清除缓存",
      "zh-hant": "清除快取"
    }),
    PurgeFromServer: (0, import_ext_gadget.localize)({
      en: "Purge cache from the server",
      "zh-hans": "更新服务器缓存",
      "zh-hant": "更新伺服器快取"
    }),
    Purging: (0, import_ext_gadget.localize)({
      en: "Purging cache...",
      "zh-hans": "正在清除……",
      "zh-hant": "正在清除……"
    }),
    Success: (0, import_ext_gadget.localize)({
      en: "Cache cleared!",
      "zh-hans": "缓存清除成功",
      "zh-hant": "快取清除成功"
    }),
    Failed: (0, import_ext_gadget.localize)({
      en: "Failed to purge cache. Please try again later",
      "zh-hans": "清除失败，请稍后重试",
      "zh-hant": "清除失敗，請稍后重試"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/PurgePageCache/options.json
var version = "2.0";
//! src/PurgePageCache/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("PurgePageCache/".concat(version));
//! src/PurgePageCache/modules/purge.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
var purge = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (title) {
    const toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: getMessage("Purging"),
      duration: -1
    }, "info");
    const {
      wgWikiID
    } = mw.config.get();
    try {
      const params = {
        action: "purge",
        format: "json",
        formatversion: "2",
        titles: title,
        forcelinkupdate: true
      };
      yield api.post(params);
      localStorage.removeItem("MediaWikiModuleStore:".concat(wgWikiID));
      toastifyInstance.hideToast();
      (0, import_ext_gadget3.toastify)({
        text: getMessage("Success"),
        close: true,
        duration: -1
      }, "success");
      location.reload();
    } catch (error) {
      console.error("[PurgePageCache] Ajax error:", error);
      toastifyInstance.hideToast();
      (0, import_ext_gadget3.toastify)({
        text: getMessage("Failed"),
        close: true,
        duration: -1
      }, "error");
    }
  });
  return function purge2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/PurgePageCache/PurgePageCache.ts
void (0, import_ext_gadget4.getBody)().then(function purgePageCache($body) {
  const {
    wgAction,
    wgPageName,
    wgNamespaceNumber
  } = mw.config.get();
  if (wgAction !== "view" || wgNamespaceNumber < 0) {
    return;
  }
  const portletElement = mw.util.addPortletLink("#", getMessage("Purge"), "ca-purge", getMessage("PurgeFromServer"));
  if (!portletElement) {
    return;
  }
  portletElement.querySelector("a").addEventListener("click", (event) => {
    event.preventDefault();
    void purge(wgPageName);
  });
  var _iterator2 = _createForOfIteratorHelper($body.find('a[href*="action=purge"]')), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const element = _step2.value;
      const title = mw.util.getParamValue("title", element.href) || wgPageName;
      element.addEventListener("click", (event) => {
        event.preventDefault();
        void purge(title);
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1B1cmdlUGFnZUNhY2hlL1B1cmdlUGFnZUNhY2hlLnRzIiwgInNyYy9QdXJnZVBhZ2VDYWNoZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1B1cmdlUGFnZUNhY2hlL29wdGlvbnMuanNvbiIsICJzcmMvUHVyZ2VQYWdlQ2FjaGUvbW9kdWxlcy9hcGkudHMiLCAic3JjL1B1cmdlUGFnZUNhY2hlL21vZHVsZXMvcHVyZ2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtwdXJnZX0gZnJvbSAnLi9tb2R1bGVzL3B1cmdlJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBwdXJnZVBhZ2VDYWNoZSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z1BhZ2VOYW1lLCB3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldEVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHQnIycsXG5cdFx0Z2V0TWVzc2FnZSgnUHVyZ2UnKSxcblx0XHQnY2EtcHVyZ2UnLFxuXHRcdGdldE1lc3NhZ2UoJ1B1cmdlRnJvbVNlcnZlcicpXG5cdCk7XG5cdGlmICghcG9ydGxldEVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQocG9ydGxldEVsZW1lbnQucXVlcnlTZWxlY3RvcignYScpIGFzIEhUTUxBbmNob3JFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dm9pZCBwdXJnZSh3Z1BhZ2VOYW1lKTtcblx0fSk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KCdhW2hyZWYqPVwiYWN0aW9uPXB1cmdlXCJdJykpIHtcblx0XHRjb25zdCB0aXRsZTogc3RyaW5nID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd0aXRsZScsIGVsZW1lbnQuaHJlZikgfHwgd2dQYWdlTmFtZTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dm9pZCBwdXJnZSh0aXRsZSk7XG5cdFx0fSk7XG5cdH1cbn0pO1xuXG5leHBvcnQge3B1cmdlfSBmcm9tICcuL21vZHVsZXMvcHVyZ2UnO1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRQdXJnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQdXJnZSBjYWNoZScsXG5cdFx0XHQnemgtaGFucyc6ICfmuIXpmaTnvJPlrZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5riF6Zmk5b+r5Y+WJyxcblx0XHR9KSxcblx0XHRQdXJnZUZyb21TZXJ2ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUHVyZ2UgY2FjaGUgZnJvbSB0aGUgc2VydmVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+abtOaWsOacjeWKoeWZqOe8k+WtmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmm7TmlrDkvLrmnI3lmajlv6vlj5YnLFxuXHRcdH0pLFxuXHRcdFB1cmdpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUHVyZ2luZyBjYWNoZS4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjmuIXpmaTigKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo5riF6Zmk4oCm4oCmJyxcblx0XHR9KSxcblx0XHRTdWNjZXNzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NhY2hlIGNsZWFyZWQhJyxcblx0XHRcdCd6aC1oYW5zJzogJ+e8k+WtmOa4hemZpOaIkOWKnycsXG5cdFx0XHQnemgtaGFudCc6ICflv6vlj5bmuIXpmaTmiJDlip8nLFxuXHRcdH0pLFxuXHRcdEZhaWxlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGYWlsZWQgdG8gcHVyZ2UgY2FjaGUuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5riF6Zmk5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJyxcblx0XHRcdCd6aC1oYW50JzogJ+a4hemZpOWkseaVl++8jOiri+eojeWQjumHjeippicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFB1cmdlUGFnZUNhY2hlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG50eXBlIFB1cmdlID0gKHRpdGxlOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG5cbmNvbnN0IHB1cmdlOiBQdXJnZSA9IGFzeW5jICh0aXRsZSkgPT4ge1xuXHRjb25zdCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnUHVyZ2luZycpLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cdGNvbnN0IHt3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0dHJ5IHtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVB1cmdlUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncHVyZ2UnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdFx0Zm9yY2VsaW5rdXBkYXRlOiB0cnVlLFxuXHRcdH07XG5cblx0XHRhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBNZWRpYVdpa2lNb2R1bGVTdG9yZToke3dnV2lraUlEfWApO1xuXG5cdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHR0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnU3VjY2VzcycpLFxuXHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdzdWNjZXNzJ1xuXHRcdCk7XG5cblx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbUHVyZ2VQYWdlQ2FjaGVdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXG5cdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHR0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRmFpbGVkJyksXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2Vycm9yJ1xuXHRcdCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7dHlwZSBQdXJnZSwgcHVyZ2V9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEseUJBQUEsQ0FBQTtBQUFBQyxTQUFBRCx3QkFBQTtFQUFBRSxPQUFBQSxNQUFBQTtBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQUwsc0JBQUE7QUFBQSxJQUFBTSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQXRCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxRQUFBLEdBQU9GLGtCQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsa0JBQUEsR0FBaUJMLGtCQUFBRyxVQUFTO01BQ3pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFVBQUEsR0FBU04sa0JBQUFHLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREcsVUFBQSxHQUFTUCxrQkFBQUcsVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESSxTQUFBLEdBQVFSLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01B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cmdlUGFnZUNhY2hlX2V4cG9ydHMiLCAiX19leHBvcnQiLCAicHVyZ2UiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJQdXJnZSIsICJsb2NhbGl6ZSIsICJlbiIsICJQdXJnZUZyb21TZXJ2ZXIiLCAiUHVyZ2luZyIsICJTdWNjZXNzIiwgIkZhaWxlZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGUiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgIndnV2lraUlEIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0aXRsZXMiLCAiZm9yY2VsaW5rdXBkYXRlIiwgInBvc3QiLCAibG9jYWxTdG9yYWdlIiwgInJlbW92ZUl0ZW0iLCAiaGlkZVRvYXN0IiwgImNsb3NlIiwgImxvY2F0aW9uIiwgInJlbG9hZCIsICJlcnJvciIsICJjb25zb2xlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRCb2R5IiwgInRoZW4iLCAicHVyZ2VQYWdlQ2FjaGUiLCAiJGJvZHkiLCAid2dBY3Rpb24iLCAid2dQYWdlTmFtZSIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJwb3J0bGV0RWxlbWVudCIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgInF1ZXJ5U2VsZWN0b3IiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImZpbmQiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiZ2V0UGFyYW1WYWx1ZSIsICJocmVmIiwgImVyciIsICJlIiwgImYiXQp9Cg==
