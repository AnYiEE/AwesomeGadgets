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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0FjY2Vzc0tleUNoZWF0c2hlZXQvbW9kdWxlcy9hZGRMaXN0ZW5lci50cyIsICJzcmMvQWNjZXNzS2V5Q2hlYXRzaGVldC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVFbGVtZW50cy50c3giLCAic3JjL0FjY2Vzc0tleUNoZWF0c2hlZXQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9BY2Nlc3NLZXlDaGVhdHNoZWV0L21vZHVsZXMvdXRpbC9nZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eS50cyIsICJzcmMvQWNjZXNzS2V5Q2hlYXRzaGVldC9BY2Nlc3NLZXlDaGVhdHNoZWV0LnRzIiwgInNyYy9BY2Nlc3NLZXlDaGVhdHNoZWV0L21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImxldCBtZXNzYWdlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9IChcblx0JGVsZW1lbnQ6IEpRdWVyeSxcblx0d2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlcixcblx0bWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhXG4pOiB2b2lkID0+IHtcblx0JGVsZW1lbnQub24oJ2NsaWNrJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmIChtZXNzYWdlRGlhbG9nKSB7XG5cdFx0XHRpZiAobWVzc2FnZURpYWxvZy5pc09wZW5lZCgpKSB7XG5cdFx0XHRcdG1lc3NhZ2VEaWFsb2cuY2xvc2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1lc3NhZ2VEaWFsb2cub3BlbihtZXNzYWdlRGlhbG9nUHJvcGVydHkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHRcdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbbWVzc2FnZURpYWxvZ10pO1xuXHRcdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRMaXN0ZW5lcn07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVFbGVtZW50cyA9IChcblx0JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+XG4pOiB7XG5cdCR0YWJsZTogSlF1ZXJ5O1xuXHQkb3BlbmVyOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+O1xufSA9PiB7XG5cdGNvbnN0IHRhYmxlID0gKFxuXHRcdDx0YWJsZSBjbGFzc05hbWU9XCJ3aWtpdGFibGVcIiBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fT5cblx0XHRcdHtbLi4uJGJvZHkuZmluZCgnW2FjY2Vzc2tleV0nKV0ubWFwPFJlYWN0LlJlYWN0RWxlbWVudD4oKGVsZW1lbnQsIGluZGV4KSA9PiAoXG5cdFx0XHRcdDx0ciBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHQ8dGg+e2VsZW1lbnQuYWNjZXNzS2V5LnRvVXBwZXJDYXNlKCl9PC90aD5cblx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHR7KFxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8XG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQudGl0bGUgfHxcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC50ZXh0Q29udGVudCB8fFxuXHRcdFx0XHRcdFx0XHQoZWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSB8fFxuXHRcdFx0XHRcdFx0XHQkYm9keS5maW5kKGBsYWJlbFtmb3I9XCIke2VsZW1lbnQuaWR9XCJdYCkudGV4dCgpXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdC5yZXBsYWNlKC9cXHMqP1xcWy4rP10kLywgJycpXG5cdFx0XHRcdFx0XHRcdC50cmltKCl9XG5cdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PC90cj5cblx0XHRcdCkpfVxuXHRcdDwvdGFibGU+XG5cdCk7XG5cdGNvbnN0ICR0YWJsZSA9ICQodGFibGUpIGFzIEpRdWVyeTtcblxuXHRjb25zdCAkb3BlbmVyID0gJCg8YSBhY2Nlc3NLZXk9XCI/XCI+e2dldE1lc3NhZ2UoJ1RleHQnKX08L2E+KSBhcyBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+O1xuXG5cdHJldHVybiB7XG5cdFx0JHRhYmxlLFxuXHRcdCRvcGVuZXIsXG5cdH07XG59O1xuXG5leHBvcnQge2dlbmVyYXRlRWxlbWVudHN9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDbG9zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDbG9zZScsXG5cdFx0XHRqYTogJ+mWieOBmOOCiycsXG5cdFx0XHRydTogJ9CX0LDQutGA0YvRgtGMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFs+mXrScsXG5cdFx0XHQnemgtaGFudCc6ICfpl5zploknLFxuXHRcdH0pLFxuXHRcdFRleHQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3BlbiBhY2Nlc3Mga2V5cyBjaGVhdHNoZWV0Jyxcblx0XHRcdGphOiAn44Ki44Kv44K744K544Kt44O844Gu44OB44O844OI44K344O844OIJyxcblx0XHRcdHJ1OiAn0J7RgtC60YDRi9GC0Ywg0L/QvtC00YHQutCw0LfQutGDINGBINC60LvQsNCy0LjQsNGC0YPRgNC90YvQvNC4INGP0YDQu9GL0LrQsNC80LgnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pi+56S66ZSu55uY5b+r5o236ZSu5o+Q56S6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+mhr+ekuumNteebpOW/q+mAn+mNteaPkOekuicsXG5cdFx0fSksXG5cdFx0VGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWNjZXNzIGtleXMgY2hlYXRzaGVldCcsXG5cdFx0XHRqYTogJ+OCouOCr+OCu+OCueOCreODvOOBruODgeODvOODiOOCt+ODvOODiCcsXG5cdFx0XHRydTogJ9Cf0L7QtNGB0LrQsNC30LrQuCDQutC70LDQstC40LDRgtGD0YDQvdGL0YUg0Y/RgNC70YvQutC+0LInLFxuXHRcdFx0J3poLWhhbnMnOiAn6ZSu55uY5b+r5o236ZSu5o+Q56S6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+mNteebpOW/q+mAn+mNteaPkOekuicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5ID0gKCRlbGVtZW50OiBKUXVlcnkpOiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0+IHtcblx0Y29uc3QgbWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0ge1xuXHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdUaXRsZScpLFxuXHRcdG1lc3NhZ2U6ICRlbGVtZW50LFxuXHRcdGFjdGlvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnY2xvc2UnLFxuXHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdDbG9zZScpLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdHNpemU6ICdtZWRpdW0nLFxuXHR9O1xuXG5cdHJldHVybiBtZXNzYWdlRGlhbG9nUHJvcGVydHk7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5fTtcbiIsICJpbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvYWRkTGlzdGVuZXInO1xuaW1wb3J0IHtnZW5lcmF0ZUVsZW1lbnRzfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUVsZW1lbnRzJztcbmltcG9ydCB7Z2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHl9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5JztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7aW5pdFdpbmRvd01hbmFnZXJ9IGZyb20gJy4vbW9kdWxlcy9pbml0V2luZG93TWFuYWdlcic7XG5cbi8qKlxuICogQWRkcyBhbHQrc2hpZnQrPyBhcyBhbiBhY2Nlc3Mga2V5IHRvIHNob3cgYSBsaXN0IG9mIGFsbCBkZWZhdWx0IGFjY2VzcyBrZXlzXG4gKi9cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gYWNjZXNzS2V5Q2hlYXRzaGVldCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3QgeyR0YWJsZSwgJG9wZW5lcn0gPSBnZW5lcmF0ZUVsZW1lbnRzKCRib2R5KTtcblx0JG9wZW5lci5oaWRlKCkuYXBwZW5kVG8oJGJvZHkpO1xuXG5cdGNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBpbml0V2luZG93TWFuYWdlcigpO1xuXHR3aW5kb3dNYW5hZ2VyLiRlbGVtZW50LmFwcGVuZFRvKCRib2R5KTtcblxuXHRjb25zdCBtZXNzYWdlRGlhbG9nUHJvcGVydHk6IE9PLnVpLldpbmRvd01hbmFnZXIuV2luZG93T3BlbmluZ0RhdGEgPSBnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSgkdGFibGUpO1xuXG5cdGFkZExpc3RlbmVyKCRvcGVuZXIsIHdpbmRvd01hbmFnZXIsIG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSk7XG59KTtcbiIsICJjb25zdCBpbml0V2luZG93TWFuYWdlciA9ICgpOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0+IHtcblx0Y29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG5cblx0d2luZG93TWFuYWdlci4kZWxlbWVudC5jc3Moe1xuXHRcdCdtYXJnaW4tYm90dG9tJzogJzAnLFxuXHRcdHdpZHRoOiAnMzVlbScsXG5cdH0pO1xuXG5cdHJldHVybiB3aW5kb3dNYW5hZ2VyO1xufTtcblxuZXhwb3J0IHtpbml0V2luZG93TWFuYWdlcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQTtBQUVKLElBQU1DLGNBQWNBLENBQ25CQyxVQUNBQyxlQUNBQywwQkFDVTtBQUNWRixXQUFTRyxHQUFHLFNBQVVDLFdBQWdCO0FBQ3JDQSxVQUFNQyxlQUFlO0FBRXJCLFFBQUlQLGVBQWU7QUFDbEIsVUFBSUEsY0FBY1EsU0FBUyxHQUFHO0FBQzdCUixzQkFBY1MsTUFBTTtNQUNyQixPQUFPO0FBQ05ULHNCQUFjVSxLQUFLTixxQkFBcUI7TUFDekM7QUFDQTtJQUNEO0FBRUFKLG9CQUFnQixJQUFJVyxHQUFHQyxHQUFHQyxjQUFjO0FBQ3hDVixrQkFBY1csV0FBVyxDQUFDZCxhQUFhLENBQUM7QUFDeEMsU0FBS0csY0FBY1ksV0FBV2YsZUFBZUkscUJBQXFCO0VBQ25FLENBQUM7QUFDRjs7QUN2QkEsSUFBQVkscUJBQWtC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CiAgIm5hbWVzIjogWyJtZXNzYWdlRGlhbG9nIiwgImFkZExpc3RlbmVyIiwgIiRlbGVtZW50IiwgIndpbmRvd01hbmFnZXIiLCAibWVzc2FnZURpYWxvZ1Byb3BlcnR5IiwgIm9uIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImlzT3BlbmVkIiwgImNsb3NlIiwgIm9wZW4iLCAiT08iLCAidWkiLCAiTWVzc2FnZURpYWxvZyIsICJhZGRXaW5kb3dzIiwgIm9wZW5XaW5kb3ciLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ2xvc2UiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAicnUiLCAiVGV4dCIsICJUaXRsZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2VuZXJhdGVFbGVtZW50cyIsICIkYm9keSIsICJ0YWJsZSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInN0eWxlIiwgIndpZHRoIiwgImZpbmQiLCAibWFwIiwgImVsZW1lbnQiLCAiaW5kZXgiLCAiYWNjZXNzS2V5IiwgInRvVXBwZXJDYXNlIiwgImdldEF0dHJpYnV0ZSIsICJ0aXRsZSIsICJ0ZXh0Q29udGVudCIsICJ2YWx1ZSIsICJjb25jYXQiLCAiaWQiLCAidGV4dCIsICJyZXBsYWNlIiwgInRyaW0iLCAiJHRhYmxlIiwgIiQiLCAiJG9wZW5lciIsICJnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSIsICJtZXNzYWdlIiwgImFjdGlvbnMiLCAiYWN0aW9uIiwgImZsYWdzIiwgImxhYmVsIiwgInNpemUiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImluaXRXaW5kb3dNYW5hZ2VyIiwgIldpbmRvd01hbmFnZXIiLCAiY3NzIiwgImdldEJvZHkiLCAidGhlbiIsICJhY2Nlc3NLZXlDaGVhdHNoZWV0IiwgImhpZGUiLCAiYXBwZW5kVG8iXQp9Cg==
