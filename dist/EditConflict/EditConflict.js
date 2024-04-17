/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/EditConflict}
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

// dist/EditConflict/EditConflict.js
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
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
//! src/EditConflict/modules/core.ts
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/EditConflict/modules/noticeMessage.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/EditConflict/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Notice: (0, import_ext_gadget.localize)({
      en: "This page has been changed by someone else after you started editing. Copy your changes, refresh and start over to avoid edit conflicts.",
      ja: "このページは他の人によって変更されています。編集衝突を避けるため、編集内容をコピーしてページを再読み込みし、編集を続けてください。",
      "zh-hans": "此页面已被他人更改。请复制您的编辑，然后刷新页面，重新开始编辑，以避免编辑冲突。",
      "zh-hant": "本頁已被他人更改。請將您的編輯複製，並重新載入頁面，然後繼續編輯，來避免編輯衝突。"
    }),
    Refresh: (0, import_ext_gadget.localize)({
      en: "Refresh",
      ja: "再読み込み",
      "zh-hans": "刷新页面",
      "zh-hant": "重新載入"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/EditConflict/modules/noticeMessage.tsx
var locationReload = () => {
  location.reload();
  return false;
};
var NoticeMessage = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, getMessage("Notice"), /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  onClick: locationReload
}, getMessage("Refresh")));
//! src/EditConflict/options.json
var version = "2.0";
//! src/EditConflict/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("EditConflict/".concat(version));
//! src/EditConflict/modules/util/queryPageInfo.ts
var parameters = {
  action: "query",
  format: "json",
  formatversion: "2",
  prop: "revisions",
  rvprop: "ids"
};
var queryPageInfo = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (title) {
    try {
      return yield api.post({
        ...parameters,
        titles: title
      });
    } catch (error) {
      console.error("[EditConflict] Ajax error:", error);
      return {};
    }
  });
  return function queryPageInfo2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/EditConflict/modules/getCurrentRevisionId.ts
var getCurrentRevisionId = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (title) {
    const pageInfo = yield queryPageInfo(title);
    const {
      query
    } = pageInfo;
    if (!query) {
      return 0;
    }
    const [page] = query.pages;
    if (!page || page.missing) {
      return 0;
    }
    return page.revisions[0].revid;
  });
  return function getCurrentRevisionId2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/EditConflict/modules/core.ts
var import_ext_gadget5 = require("ext.gadget.Toastify");
var editConflict = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* () {
    let isContinue = true;
    void (0, import_ext_gadget4.getBody)().then(($body) => {
      $body.find('input[name="wpSave"]').on("click", () => {
        isContinue = false;
      });
    });
    const checkEditConflict = /* @__PURE__ */ function() {
      var _ref4 = _asyncToGenerator(function* () {
        const {
          wgCurRevisionId: wgCurRevisionId2,
          wgPageName
        } = mw.config.get();
        const pageRevisionId = yield getCurrentRevisionId(wgPageName);
        if (!pageRevisionId) {
          isContinue = false;
        } else if (pageRevisionId > wgCurRevisionId2) {
          isContinue = false;
          (0, import_ext_gadget5.toastify)({
            node: NoticeMessage(),
            close: true,
            duration: -1
          }, "info");
        }
      });
      return function checkEditConflict2() {
        return _ref4.apply(this, arguments);
      };
    }();
    while (true) {
      if (!isContinue) {
        break;
      }
      yield checkEditConflict();
      if (!isContinue) {
        break;
      }
      yield (0, import_ext_gadget4.delay)(3 * 1e3);
    }
  });
  return function editConflict2() {
    return _ref3.apply(this, arguments);
  };
}();
//! src/EditConflict/EditConflict.ts
var {
  wgAction,
  wgCurRevisionId
} = mw.config.get();
if (["edit", "submit"].includes(wgAction) && wgCurRevisionId) {
  void editConflict();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL2NvcmUudHMiLCAic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL25vdGljZU1lc3NhZ2UudHN4IiwgInNyYy9FZGl0Q29uZmxpY3QvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Q29uZmxpY3Qvb3B0aW9ucy5qc29uIiwgInNyYy9FZGl0Q29uZmxpY3QvbW9kdWxlcy9hcGkudHMiLCAic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL3V0aWwvcXVlcnlQYWdlSW5mby50cyIsICJzcmMvRWRpdENvbmZsaWN0L21vZHVsZXMvZ2V0Q3VycmVudFJldmlzaW9uSWQudHMiLCAic3JjL0VkaXRDb25mbGljdC9FZGl0Q29uZmxpY3QudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGVsYXksIGdldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge05vdGljZU1lc3NhZ2V9IGZyb20gJy4vbm90aWNlTWVzc2FnZSc7XG5pbXBvcnQge2dldEN1cnJlbnRSZXZpc2lvbklkfSBmcm9tICcuL2dldEN1cnJlbnRSZXZpc2lvbklkJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBlZGl0Q29uZmxpY3QgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGxldCBpc0NvbnRpbnVlOiBib29sZWFuID0gdHJ1ZTtcblxuXHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPVwid3BTYXZlXCJdJykub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0aXNDb250aW51ZSA9IGZhbHNlO1xuXHRcdH0pO1xuXHR9KTtcblxuXHRjb25zdCBjaGVja0VkaXRDb25mbGljdCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zdCB7d2dDdXJSZXZpc2lvbklkLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0XHRjb25zdCBwYWdlUmV2aXNpb25JZDogbnVtYmVyID0gYXdhaXQgZ2V0Q3VycmVudFJldmlzaW9uSWQod2dQYWdlTmFtZSk7XG5cdFx0aWYgKCFwYWdlUmV2aXNpb25JZCkge1xuXHRcdFx0aXNDb250aW51ZSA9IGZhbHNlO1xuXHRcdH0gZWxzZSBpZiAocGFnZVJldmlzaW9uSWQgPiB3Z0N1clJldmlzaW9uSWQpIHtcblx0XHRcdGlzQ29udGludWUgPSBmYWxzZTtcblx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bm9kZTogTm90aWNlTWVzc2FnZSgpLFxuXHRcdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2luZm8nXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdC8vIElmICFpc0NvbnRpbnVlIHRyaWdnZXJlZCAoYnkgb25DbGljaykgdGhlbiBicmVha1xuXHRcdGlmICghaXNDb250aW51ZSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0YXdhaXQgY2hlY2tFZGl0Q29uZmxpY3QoKTtcblxuXHRcdC8vIElmICFpc0NvbnRpbnVlIHRyaWdnZXJlZCAoYnkgY2hlY2tFZGl0Q29uZmxpY3QpIHRoZW4gYnJlYWtcblx0XHRpZiAoIWlzQ29udGludWUpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGF3YWl0IGRlbGF5KDMgKiAxMDAwKTtcblx0fVxufTtcblxuZXhwb3J0IHtlZGl0Q29uZmxpY3R9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgbG9jYXRpb25SZWxvYWQgPSAoKSA9PiB7XG5cdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBOb3RpY2VNZXNzYWdlID0gKCkgPT4gKFxuXHQ8c3Bhbj5cblx0XHR7Z2V0TWVzc2FnZSgnTm90aWNlJyl9XG5cdFx0PGEgb25DbGljaz17bG9jYXRpb25SZWxvYWR9PntnZXRNZXNzYWdlKCdSZWZyZXNoJyl9PC9hPlxuXHQ8L3NwYW4+XG4pO1xuXG5leHBvcnQge05vdGljZU1lc3NhZ2V9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHROb3RpY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGhhcyBiZWVuIGNoYW5nZWQgYnkgc29tZW9uZSBlbHNlIGFmdGVyIHlvdSBzdGFydGVkIGVkaXRpbmcuIENvcHkgeW91ciBjaGFuZ2VzLCByZWZyZXNoIGFuZCBzdGFydCBvdmVyIHRvIGF2b2lkIGVkaXQgY29uZmxpY3RzLicsXG5cdFx0XHRqYTogJ+OBk+OBruODmuODvOOCuOOBr+S7luOBruS6uuOBq+OCiOOBo+OBpuWkieabtOOBleOCjOOBpuOBhOOBvuOBmeOAgue3qOmbhuihneeqgeOCkumBv+OBkeOCi+OBn+OCgeOAgee3qOmbhuWGheWuueOCkuOCs+ODlOODvOOBl+OBpuODmuODvOOCuOOCkuWGjeiqreOBv+i+vOOBv+OBl+OAgee3qOmbhuOCkue2muOBkeOBpuOBj+OBoOOBleOBhOOAgicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlt7Looqvku5bkurrmm7TmlLnjgILor7flpI3liLbmgqjnmoTnvJbovpHvvIznhLblkI7liLfmlrDpobXpnaLvvIzph43mlrDlvIDlp4vnvJbovpHvvIzku6Xpgb/lhY3nvJbovpHlhrLnqoHjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5pys6aCB5bey6KKr5LuW5Lq65pu05pS544CC6KuL5bCH5oKo55qE57eo6Lyv6KSH6KO977yM5Lim6YeN5paw6LyJ5YWl6aCB6Z2i77yM54S25b6M57m857qM57eo6Lyv77yM5L6G6YG/5YWN57eo6Lyv6KGd56qB44CCJyxcblx0XHR9KSxcblx0XHRSZWZyZXNoOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlZnJlc2gnLFxuXHRcdFx0amE6ICflho3oqq3jgb/ovrzjgb8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yi35paw6aG16Z2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+mHjeaWsOi8ieWFpScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEVkaXRDb25mbGljdC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuXG5pbnRlcmZhY2UgUGFnZUluZm8ge1xuXHRxdWVyeT86IHtcblx0XHRwYWdlczogQXJyYXk8e1xuXHRcdFx0bWlzc2luZz86IGJvb2xlYW47XG5cdFx0XHRyZXZpc2lvbnM6IEFycmF5PHtcblx0XHRcdFx0cmV2aWQ6IG51bWJlcjtcblx0XHRcdH0+O1xuXHRcdH0+O1xuXHR9O1xufVxuXG5jb25zdCBwYXJhbWV0ZXJzOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0YWN0aW9uOiAncXVlcnknLFxuXHRmb3JtYXQ6ICdqc29uJyxcblx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRwcm9wOiAncmV2aXNpb25zJyxcblx0cnZwcm9wOiAnaWRzJyxcbn07XG5cbmNvbnN0IHF1ZXJ5UGFnZUluZm8gPSBhc3luYyAodGl0bGU6IHN0cmluZyk6IFByb21pc2U8UGFnZUluZm8+ID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gKGF3YWl0IGFwaS5wb3N0KHtcblx0XHRcdC4uLnBhcmFtZXRlcnMsXG5cdFx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdH0gYXMgdHlwZW9mIHBhcmFtZXRlcnMpKSBhcyBQYWdlSW5mbztcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbRWRpdENvbmZsaWN0XSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRyZXR1cm4ge307XG5cdH1cbn07XG5cbmV4cG9ydCB7cXVlcnlQYWdlSW5mb307XG4iLCAiaW1wb3J0IHtxdWVyeVBhZ2VJbmZvfSBmcm9tICcuL3V0aWwvcXVlcnlQYWdlSW5mbyc7XG5cbmNvbnN0IGdldEN1cnJlbnRSZXZpc2lvbklkID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4gPT4ge1xuXHRjb25zdCBwYWdlSW5mbzogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBxdWVyeVBhZ2VJbmZvPj4gPSBhd2FpdCBxdWVyeVBhZ2VJbmZvKHRpdGxlKTtcblxuXHRjb25zdCB7cXVlcnl9ID0gcGFnZUluZm87XG5cdGlmICghcXVlcnkpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGNvbnN0IFtwYWdlXSA9IHF1ZXJ5LnBhZ2VzO1xuXHRpZiAoIXBhZ2UgfHwgcGFnZS5taXNzaW5nKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRyZXR1cm4gcGFnZS5yZXZpc2lvbnNbMF0hLnJldmlkO1xufTtcblxuZXhwb3J0IHtnZXRDdXJyZW50UmV2aXNpb25JZH07XG4iLCAiaW1wb3J0IHtlZGl0Q29uZmxpY3R9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuY29uc3Qge3dnQWN0aW9uLCB3Z0N1clJldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5pZiAoWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKHdnQWN0aW9uKSAmJiB3Z0N1clJldmlzaW9uSWQpIHtcblx0dm9pZCBlZGl0Q29uZmxpY3QoKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQTZCQyxRQUFBLGlCQUFBOztBQ0E3QixJQUFBQyxxQkFBa0JDLFFBQUFGLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0FsQixJQUFBRyxvQkFBdUJILFFBQUEsaUJBQUE7QUFFdkIsSUFBTUksa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFVBQUEsR0FBU04sa0JBQUFHLFVBQVM7TUFDakJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRSxlQUFlTixnQkFBZ0I7QUFFckMsSUFBTU8sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QURwQkEsSUFBTUMsaUJBQWlCQSxNQUFNO0FBQzVCQyxXQUFTQyxPQUFPO0FBQ2hCLFNBQU87QUFDUjtBQUVBLElBQU1DLGdCQUFnQkEsTUFDckJmLG1DQUFBZ0IsUUFBQUMsY0FBQyxRQUFBLE1BQ0NQLFdBQVcsUUFBUSxHQUNwQlYsbUNBQUFnQixRQUFBQyxj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QU9DLElBQUk7QUFFbEQsSUFBSSxDQUFDLFFBQVEsUUFBUSxFQUFFUSxTQUFTRCxRQUFRLEtBQUtaLGlCQUFpQjtBQUM3RCxPQUFLVixhQUFhO0FBQ25COyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDQiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiTm90aWNlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIlJlZnJlc2giLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImxvY2F0aW9uUmVsb2FkIiwgImxvY2F0aW9uIiwgInJlbG9hZCIsICJOb3RpY2VNZXNzYWdlIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJvbkNsaWNrIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgInBhcmFtZXRlcnMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicnZwcm9wIiwgInF1ZXJ5UGFnZUluZm8iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0aXRsZSIsICJwb3N0IiwgInRpdGxlcyIsICJlcnJvciIsICJjb25zb2xlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRDdXJyZW50UmV2aXNpb25JZCIsICJfcmVmMiIsICJwYWdlSW5mbyIsICJxdWVyeSIsICJwYWdlIiwgInBhZ2VzIiwgIm1pc3NpbmciLCAicmV2aXNpb25zIiwgInJldmlkIiwgIl94MiIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiZWRpdENvbmZsaWN0IiwgIl9yZWYzIiwgImlzQ29udGludWUiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgIiRib2R5IiwgImZpbmQiLCAib24iLCAiY2hlY2tFZGl0Q29uZmxpY3QiLCAiX3JlZjQiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnQ3VyUmV2aXNpb25JZDIiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInBhZ2VSZXZpc2lvbklkIiwgInRvYXN0aWZ5IiwgIm5vZGUiLCAiY2xvc2UiLCAiZHVyYXRpb24iLCAiZGVsYXkiLCAid2dBY3Rpb24iLCAiaW5jbHVkZXMiXQp9Cg==
