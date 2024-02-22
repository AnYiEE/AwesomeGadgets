/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/PurgePageCache}
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
//! src/PurgePageCache/modules/constant.ts
var WG_WIKI_ID = mw.config.get("wgWikiID");
//! src/PurgePageCache/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Failed: (0, import_ext_gadget.localize)({
      en: "Failed to purge cache. Please try again later",
      "zh-hans": "清除失败，请稍后重试",
      "zh-hant": "清除失敗，請稍后重試"
    }),
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
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/PurgePageCache/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var import_ext_gadget3 = require("ext.gadget.Toastify");
var purgePageCache = () => {
  const purgePageCacheMain = /* @__PURE__ */ function() {
    var _ref = _asyncToGenerator(function* (event, title) {
      event.preventDefault();
      const toastifyInstance = (0, import_ext_gadget3.toastify)({
        text: getMessage("Purging"),
        duration: -1
      }, "info");
      const api = (0, import_ext_gadget2.initMwApi)("PurgePageCache/1.1");
      try {
        const params = {
          action: "purge",
          format: "json",
          formatversion: "2",
          titles: title,
          forcelinkupdate: true
        };
        yield api.post(params);
        localStorage.removeItem("MediaWikiModuleStore:".concat(WG_WIKI_ID));
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
    return function purgePageCacheMain2(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  Array.prototype.forEach.call(document.querySelectorAll('a[href*="action=purge"]'), (element) => {
    var _mw$util$getParamValu;
    const title = (_mw$util$getParamValu = mw.util.getParamValue("title", element.href)) !== null && _mw$util$getParamValu !== void 0 ? _mw$util$getParamValu : mw.config.get("wgPageName");
    element.addEventListener("click", (event) => {
      void purgePageCacheMain(event, title);
    });
  });
};
//! src/PurgePageCache/PurgePageCache.ts
if (mw.config.get("wgAction") === "view" && mw.config.get("wgIsArticle") && mw.config.get("wgCurRevisionId") !== 0 && mw.config.get("wgRevisionId") !== 0 && mw.config.get("wgCurRevisionId") === mw.config.get("wgRevisionId")) {
  $(purgePageCache);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1B1cmdlUGFnZUNhY2hlL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1B1cmdlUGFnZUNhY2hlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvUHVyZ2VQYWdlQ2FjaGUvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9QdXJnZVBhZ2VDYWNoZS9QdXJnZVBhZ2VDYWNoZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfV0lLSV9JRCA9IG13LmNvbmZpZy5nZXQoJ3dnV2lraUlEJyk7XG5cbmV4cG9ydCB7V0dfV0lLSV9JRH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEZhaWxlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGYWlsZWQgdG8gcHVyZ2UgY2FjaGUuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5riF6Zmk5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJyxcblx0XHRcdCd6aC1oYW50JzogJ+a4hemZpOWkseaVl++8jOiri+eojeWQjumHjeippicsXG5cdFx0fSksXG5cdFx0UHVyZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUHVyZ2UgY2FjaGUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5riF6Zmk57yT5a2YJyxcblx0XHRcdCd6aC1oYW50JzogJ+a4hemZpOW/q+WPlicsXG5cdFx0fSksXG5cdFx0UHVyZ2VGcm9tU2VydmVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1B1cmdlIGNhY2hlIGZyb20gdGhlIHNlcnZlcicsXG5cdFx0XHQnemgtaGFucyc6ICfmm7TmlrDmnI3liqHlmajnvJPlrZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pu05paw5Ly65pyN5Zmo5b+r5Y+WJyxcblx0XHR9KSxcblx0XHRQdXJnaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1B1cmdpbmcgY2FjaGUuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5riF6Zmk4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOa4hemZpOKApuKApicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7V0dfV0lLSV9JRH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5leHBvcnQgY29uc3QgcHVyZ2VQYWdlQ2FjaGUgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHB1cmdlUGFnZUNhY2hlTWFpbiA9IGFzeW5jIChldmVudDogRXZlbnQsIHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnUHVyZ2luZycpLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2luZm8nXG5cdFx0KTtcblx0XHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnUHVyZ2VQYWdlQ2FjaGUvMS4xJyk7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUHVyZ2VQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3B1cmdlJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRcdFx0Zm9yY2VsaW5rdXBkYXRlOiB0cnVlLFxuXHRcdFx0fTtcblx0XHRcdGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgTWVkaWFXaWtpTW9kdWxlU3RvcmU6JHtXR19XSUtJX0lEfWApO1xuXHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tQdXJnZVBhZ2VDYWNoZV0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdGYWlsZWQnKSxcblx0XHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdlcnJvcidcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHQvKlxuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IHBvcnRsZXRFbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0cG9ydGxldElkLFxuXHRcdCcjJyxcblx0XHRnZXRNZXNzYWdlKCdQdXJnZScpLFxuXHRcdCdjYS1wdXJnZScsXG5cdFx0Z2V0TWVzc2FnZSgnUHVyZ2VGcm9tU2VydmVyJylcblx0KTtcblx0cG9ydGxldEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoJ2EnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHR2b2lkIHB1cmdlUGFnZUNhY2hlTWFpbihldmVudCwgbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpKTtcblx0fSk7XG4qKi9cblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWYqPVwiYWN0aW9uPXB1cmdlXCJdJyksXG5cdFx0KGVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50KTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCB0aXRsZTogc3RyaW5nID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd0aXRsZScsIGVsZW1lbnQuaHJlZikgPz8gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHR2b2lkIHB1cmdlUGFnZUNhY2hlTWFpbihldmVudCwgdGl0bGUpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHQpO1xufTtcbiIsICJpbXBvcnQge3B1cmdlUGFnZUNhY2hlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmlmIChcblx0bXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSA9PT0gJ3ZpZXcnICYmXG5cdG13LmNvbmZpZy5nZXQoJ3dnSXNBcnRpY2xlJykgJiZcblx0bXcuY29uZmlnLmdldCgnd2dDdXJSZXZpc2lvbklkJykgIT09IDAgJiZcblx0bXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJykgIT09IDAgJiZcblx0bXcuY29uZmlnLmdldCgnd2dDdXJSZXZpc2lvbklkJykgPT09IG13LmNvbmZpZy5nZXQoJ3dnUmV2aXNpb25JZCcpXG4pIHtcblx0JChwdXJnZVBhZ2VDYWNoZSk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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WyJXR19XSUtJX0lEIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiRmFpbGVkIiwgImxvY2FsaXplIiwgImVuIiwgIlB1cmdlIiwgIlB1cmdlRnJvbVNlcnZlciIsICJQdXJnaW5nIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInB1cmdlUGFnZUNhY2hlIiwgInB1cmdlUGFnZUNhY2hlTWFpbiIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImV2ZW50IiwgInRpdGxlIiwgInByZXZlbnREZWZhdWx0IiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGVzIiwgImZvcmNlbGlua3VwZGF0ZSIsICJwb3N0IiwgImxvY2FsU3RvcmFnZSIsICJyZW1vdmVJdGVtIiwgImNvbmNhdCIsICJsb2NhdGlvbiIsICJyZWxvYWQiLCAiZXJyb3IiLCAiY29uc29sZSIsICJoaWRlVG9hc3QiLCAiY2xvc2UiLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJBcnJheSIsICJwcm90b3R5cGUiLCAiZm9yRWFjaCIsICJjYWxsIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiZWxlbWVudCIsICJfbXckdXRpbCRnZXRQYXJhbVZhbHUiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgImhyZWYiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICIkIl0KfQo=
