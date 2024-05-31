/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/User:Guarapiranga/accessKeysCheatSheet.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/AccessKeyCheatsheet}
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

// dist/AccessKeyCheatsheet/AccessKeyCheatsheet.js
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
//! src/AccessKeyCheatsheet/modules/addListener.ts
var messageDialog;
var addListener = ($element, windowManager, messageDialogProperty) => {
  $element.on("click", (event) => {
    event.preventDefault();
    if (messageDialog) {
      if (messageDialog.isOpened()) {
        messageDialog.close();
      } else {
        messageDialog.open(messageDialogProperty);
      }
      return;
    }
    messageDialog = new OO.ui.MessageDialog();
    windowManager.addWindows([messageDialog]);
    void windowManager.openWindow(messageDialog, messageDialogProperty);
  });
};
//! src/AccessKeyCheatsheet/modules/util/generateElements.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/AccessKeyCheatsheet/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Close: (0, import_ext_gadget.localize)({
      en: "Close",
      ja: "閉じる",
      ru: "Закрыть",
      "zh-hans": "关闭",
      "zh-hant": "關閉"
    }),
    Text: (0, import_ext_gadget.localize)({
      en: "Open access keys cheatsheet",
      ja: "アクセスキーのチートシート",
      ru: "Открыть подсказку с клавиатурными ярлыками",
      "zh-hans": "显示键盘快捷键提示",
      "zh-hant": "顯示鍵盤快速鍵提示"
    }),
    Title: (0, import_ext_gadget.localize)({
      en: "Access keys cheatsheet",
      ja: "アクセスキーのチートシート",
      ru: "Подсказки клавиатурных ярлыков",
      "zh-hans": "键盘快捷键提示",
      "zh-hant": "鍵盤快速鍵提示"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/AccessKeyCheatsheet/modules/util/generateElements.tsx
var generateElements = ($body) => {
  const table = /* @__PURE__ */ import_ext_gadget2.default.createElement("table", {
    className: "wikitable",
    style: {
      width: "100%"
    }
  }, [...$body.find("[accesskey]")].map((element, index) => /* @__PURE__ */ import_ext_gadget2.default.createElement("tr", {
    key: index
  }, /* @__PURE__ */ import_ext_gadget2.default.createElement("th", null, element.accessKey.toUpperCase()), /* @__PURE__ */ import_ext_gadget2.default.createElement("td", null, (element.getAttribute("aria-label") || element.title || element.textContent || element.value || $body.find('label[for="'.concat(element.id, '"]')).text()).replace(/\s*?\[.+?]$/, "").trim()))));
  const $table = $(table);
  const $opener = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
    accessKey: "?"
  }, getMessage("Text")));
  return {
    $table,
    $opener
  };
};
//! src/AccessKeyCheatsheet/modules/util/generateMessageDialogProperty.ts
var generateMessageDialogProperty = ($element) => {
  const messageDialogProperty = {
    title: getMessage("Title"),
    message: $element,
    actions: [{
      action: "close",
      flags: ["safe", "close"],
      label: getMessage("Close")
    }],
    size: "medium"
  };
  return messageDialogProperty;
};
//! src/AccessKeyCheatsheet/AccessKeyCheatsheet.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/AccessKeyCheatsheet/modules/initWindowManager.ts
var initWindowManager = () => {
  const windowManager = new OO.ui.WindowManager();
  windowManager.$element.css({
    "margin-bottom": "0",
    width: "35em"
  });
  return windowManager;
};
//! src/AccessKeyCheatsheet/AccessKeyCheatsheet.ts
void (0, import_ext_gadget3.getBody)().then(function accessKeyCheatsheet($body) {
  const {
    $table,
    $opener
  } = generateElements($body);
  $opener.hide().appendTo($body);
  const windowManager = initWindowManager();
  windowManager.$element.appendTo($body);
  const messageDialogProperty = generateMessageDialogProperty($table);
  addListener($opener, windowManager, messageDialogProperty);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0FjY2Vzc0tleUNoZWF0c2hlZXQvbW9kdWxlcy9hZGRMaXN0ZW5lci50cyIsICJzcmMvQWNjZXNzS2V5Q2hlYXRzaGVldC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVFbGVtZW50cy50c3giLCAic3JjL0FjY2Vzc0tleUNoZWF0c2hlZXQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9BY2Nlc3NLZXlDaGVhdHNoZWV0L21vZHVsZXMvdXRpbC9nZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eS50cyIsICJzcmMvQWNjZXNzS2V5Q2hlYXRzaGVldC9BY2Nlc3NLZXlDaGVhdHNoZWV0LnRzIiwgInNyYy9BY2Nlc3NLZXlDaGVhdHNoZWV0L21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImxldCBtZXNzYWdlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9IChcblx0JGVsZW1lbnQ6IEpRdWVyeSxcblx0d2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlcixcblx0bWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhXG4pOiB2b2lkID0+IHtcblx0JGVsZW1lbnQub24oJ2NsaWNrJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmIChtZXNzYWdlRGlhbG9nKSB7XG5cdFx0XHRpZiAobWVzc2FnZURpYWxvZy5pc09wZW5lZCgpKSB7XG5cdFx0XHRcdG1lc3NhZ2VEaWFsb2cuY2xvc2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1lc3NhZ2VEaWFsb2cub3BlbihtZXNzYWdlRGlhbG9nUHJvcGVydHkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHRcdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbbWVzc2FnZURpYWxvZ10pO1xuXHRcdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRMaXN0ZW5lcn07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVFbGVtZW50cyA9IChcblx0JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+XG4pOiB7XG5cdCR0YWJsZTogSlF1ZXJ5O1xuXHQkb3BlbmVyOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+O1xufSA9PiB7XG5cdGNvbnN0IHRhYmxlID0gKFxuXHRcdDx0YWJsZSBjbGFzc05hbWU9XCJ3aWtpdGFibGVcIiBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fT5cblx0XHRcdHtbLi4uJGJvZHkuZmluZCgnW2FjY2Vzc2tleV0nKV0ubWFwPFJlYWN0LlJlYWN0RWxlbWVudD4oKGVsZW1lbnQsIGluZGV4KSA9PiAoXG5cdFx0XHRcdDx0ciBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHQ8dGg+e2VsZW1lbnQuYWNjZXNzS2V5LnRvVXBwZXJDYXNlKCl9PC90aD5cblx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHR7KFxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8XG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQudGl0bGUgfHxcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC50ZXh0Q29udGVudCB8fFxuXHRcdFx0XHRcdFx0XHQoZWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSB8fFxuXHRcdFx0XHRcdFx0XHQkYm9keS5maW5kKGBsYWJlbFtmb3I9XCIke2VsZW1lbnQuaWR9XCJdYCkudGV4dCgpXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdC5yZXBsYWNlKC9cXHMqP1xcWy4rP10kLywgJycpXG5cdFx0XHRcdFx0XHRcdC50cmltKCl9XG5cdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PC90cj5cblx0XHRcdCkpfVxuXHRcdDwvdGFibGU+XG5cdCk7XG5cdGNvbnN0ICR0YWJsZSA9ICQodGFibGUpIGFzIEpRdWVyeTtcblxuXHRjb25zdCAkb3BlbmVyID0gJCg8YSBhY2Nlc3NLZXk9XCI/XCI+e2dldE1lc3NhZ2UoJ1RleHQnKX08L2E+KSBhcyBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+O1xuXG5cdHJldHVybiB7XG5cdFx0JHRhYmxlLFxuXHRcdCRvcGVuZXIsXG5cdH07XG59O1xuXG5leHBvcnQge2dlbmVyYXRlRWxlbWVudHN9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDbG9zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDbG9zZScsXG5cdFx0XHRqYTogJ+mWieOBmOOCiycsXG5cdFx0XHRydTogJ9CX0LDQutGA0YvRgtGMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFs+mXrScsXG5cdFx0XHQnemgtaGFudCc6ICfpl5zploknLFxuXHRcdH0pLFxuXHRcdFRleHQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3BlbiBhY2Nlc3Mga2V5cyBjaGVhdHNoZWV0Jyxcblx0XHRcdGphOiAn44Ki44Kv44K744K544Kt44O844Gu44OB44O844OI44K344O844OIJyxcblx0XHRcdHJ1OiAn0J7RgtC60YDRi9GC0Ywg0L/QvtC00YHQutCw0LfQutGDINGBINC60LvQsNCy0LjQsNGC0YPRgNC90YvQvNC4INGP0YDQu9GL0LrQsNC80LgnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pi+56S66ZSu55uY5b+r5o236ZSu5o+Q56S6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+mhr+ekuumNteebpOW/q+mAn+mNteaPkOekuicsXG5cdFx0fSksXG5cdFx0VGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWNjZXNzIGtleXMgY2hlYXRzaGVldCcsXG5cdFx0XHRqYTogJ+OCouOCr+OCu+OCueOCreODvOOBruODgeODvOODiOOCt+ODvOODiCcsXG5cdFx0XHRydTogJ9Cf0L7QtNGB0LrQsNC30LrQuCDQutC70LDQstC40LDRgtGD0YDQvdGL0YUg0Y/RgNC70YvQutC+0LInLFxuXHRcdFx0J3poLWhhbnMnOiAn6ZSu55uY5b+r5o236ZSu5o+Q56S6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+mNteebpOW/q+mAn+mNteaPkOekuicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5ID0gKCRlbGVtZW50OiBKUXVlcnkpOiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0+IHtcblx0Y29uc3QgbWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0ge1xuXHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdUaXRsZScpLFxuXHRcdG1lc3NhZ2U6ICRlbGVtZW50LFxuXHRcdGFjdGlvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnY2xvc2UnLFxuXHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdDbG9zZScpLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdHNpemU6ICdtZWRpdW0nLFxuXHR9O1xuXG5cdHJldHVybiBtZXNzYWdlRGlhbG9nUHJvcGVydHk7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5fTtcbiIsICJpbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvYWRkTGlzdGVuZXInO1xuaW1wb3J0IHtnZW5lcmF0ZUVsZW1lbnRzfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUVsZW1lbnRzJztcbmltcG9ydCB7Z2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHl9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5JztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7aW5pdFdpbmRvd01hbmFnZXJ9IGZyb20gJy4vbW9kdWxlcy9pbml0V2luZG93TWFuYWdlcic7XG5cbi8qKlxuICogQWRkcyBhbHQrc2hpZnQrPyBhcyBhbiBhY2Nlc3Mga2V5IHRvIHNob3cgYSBsaXN0IG9mIGFsbCBkZWZhdWx0IGFjY2VzcyBrZXlzXG4gKi9cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gYWNjZXNzS2V5Q2hlYXRzaGVldCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3QgeyR0YWJsZSwgJG9wZW5lcn0gPSBnZW5lcmF0ZUVsZW1lbnRzKCRib2R5KTtcblx0JG9wZW5lci5oaWRlKCkuYXBwZW5kVG8oJGJvZHkpO1xuXG5cdGNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBpbml0V2luZG93TWFuYWdlcigpO1xuXHR3aW5kb3dNYW5hZ2VyLiRlbGVtZW50LmFwcGVuZFRvKCRib2R5KTtcblxuXHRjb25zdCBtZXNzYWdlRGlhbG9nUHJvcGVydHk6IE9PLnVpLldpbmRvd01hbmFnZXIuV2luZG93T3BlbmluZ0RhdGEgPSBnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSgkdGFibGUpO1xuXG5cdGFkZExpc3RlbmVyKCRvcGVuZXIsIHdpbmRvd01hbmFnZXIsIG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSk7XG59KTtcbiIsICJjb25zdCBpbml0V2luZG93TWFuYWdlciA9ICgpOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0+IHtcblx0Y29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG5cblx0d2luZG93TWFuYWdlci4kZWxlbWVudC5jc3Moe1xuXHRcdCdtYXJnaW4tYm90dG9tJzogJzAnLFxuXHRcdHdpZHRoOiAnMzVlbScsXG5cdH0pO1xuXG5cdHJldHVybiB3aW5kb3dNYW5hZ2VyO1xufTtcblxuZXhwb3J0IHtpbml0V2luZG93TWFuYWdlcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUE7QUFFSixJQUFNQyxjQUFjQSxDQUNuQkMsVUFDQUMsZUFDQUMsMEJBQ1U7QUFDVkYsV0FBU0csR0FBRyxTQUFVQyxXQUFnQjtBQUNyQ0EsVUFBTUMsZUFBZTtBQUVyQixRQUFJUCxlQUFlO0FBQ2xCLFVBQUlBLGNBQWNRLFNBQVMsR0FBRztBQUM3QlIsc0JBQWNTLE1BQU07TUFDckIsT0FBTztBQUNOVCxzQkFBY1UsS0FBS04scUJBQXFCO01BQ3pDO0FBQ0E7SUFDRDtBQUVBSixvQkFBZ0IsSUFBSVcsR0FBR0MsR0FBR0MsY0FBYztBQUN4Q1Ysa0JBQWNXLFdBQVcsQ0FBQ2QsYUFBYSxDQUFDO0FBQ3hDLFNBQUtHLGNBQWNZLFdBQVdmLGVBQWVJLHFCQUFxQjtFQUNuRSxDQUFDO0FBQ0Y7O0FDdkJBLElBQUFZLHFCQUFrQkMsUUFB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YW1lcyI6IFsibWVzc2FnZURpYWxvZyIsICJhZGRMaXN0ZW5lciIsICIkZWxlbWVudCIsICJ3aW5kb3dNYW5hZ2VyIiwgIm1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSIsICJvbiIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJpc09wZW5lZCIsICJjbG9zZSIsICJvcGVuIiwgIk9PIiwgInVpIiwgIk1lc3NhZ2VEaWFsb2ciLCAiYWRkV2luZG93cyIsICJvcGVuV2luZG93IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNsb3NlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgInJ1IiwgIlRleHQiLCAiVGl0bGUiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdlbmVyYXRlRWxlbWVudHMiLCAiJGJvZHkiLCAidGFibGUiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJzdHlsZSIsICJ3aWR0aCIsICJmaW5kIiwgIm1hcCIsICJlbGVtZW50IiwgImluZGV4IiwgImFjY2Vzc0tleSIsICJ0b1VwcGVyQ2FzZSIsICJnZXRBdHRyaWJ1dGUiLCAidGl0bGUiLCAidGV4dENvbnRlbnQiLCAidmFsdWUiLCAiY29uY2F0IiwgImlkIiwgInRleHQiLCAicmVwbGFjZSIsICJ0cmltIiwgIiR0YWJsZSIsICIkIiwgIiRvcGVuZXIiLCAiZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHkiLCAibWVzc2FnZSIsICJhY3Rpb25zIiwgImFjdGlvbiIsICJmbGFncyIsICJsYWJlbCIsICJzaXplIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJpbml0V2luZG93TWFuYWdlciIsICJXaW5kb3dNYW5hZ2VyIiwgImNzcyIsICJnZXRCb2R5IiwgInRoZW4iLCAiYWNjZXNzS2V5Q2hlYXRzaGVldCIsICJoaWRlIiwgImFwcGVuZFRvIl0KfQo=
