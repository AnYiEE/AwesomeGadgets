/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/User:Guarapiranga/accessKeysCheatSheet.js}
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src//AccessKeyCheatsheet}
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

// dist/AccessKeyCheatsheet/AccessKeyCheatsheet.js
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
  }, [...$body.find("[accesskey]")].reduce((accumulator, element) => [...accumulator, /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("tr", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("th", null, element.accessKey.toUpperCase()), /* @__PURE__ */ import_ext_gadget2.default.createElement("td", null, (element.getAttribute("aria-label") || element.title || element.textContent || element.value || $body.find('label[for="'.concat(element.id, '"]')).text()).replace(/\s*?\[.+?]$/, "").trim())))], []));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0FjY2Vzc0tleUNoZWF0c2hlZXQvbW9kdWxlcy9hZGRMaXN0ZW5lci50cyIsICJzcmMvQWNjZXNzS2V5Q2hlYXRzaGVldC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVFbGVtZW50cy50c3giLCAic3JjL0FjY2Vzc0tleUNoZWF0c2hlZXQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9BY2Nlc3NLZXlDaGVhdHNoZWV0L21vZHVsZXMvdXRpbC9nZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eS50cyIsICJzcmMvQWNjZXNzS2V5Q2hlYXRzaGVldC9BY2Nlc3NLZXlDaGVhdHNoZWV0LnRzIiwgInNyYy9BY2Nlc3NLZXlDaGVhdHNoZWV0L21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImxldCBtZXNzYWdlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9IChcblx0JGVsZW1lbnQ6IEpRdWVyeSxcblx0d2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlcixcblx0bWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhXG4pOiB2b2lkID0+IHtcblx0JGVsZW1lbnQub24oJ2NsaWNrJywgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAobWVzc2FnZURpYWxvZykge1xuXHRcdFx0aWYgKG1lc3NhZ2VEaWFsb2cuaXNPcGVuZWQoKSkge1xuXHRcdFx0XHRtZXNzYWdlRGlhbG9nLmNsb3NlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZXNzYWdlRGlhbG9nLm9wZW4obWVzc2FnZURpYWxvZ1Byb3BlcnR5KTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRtZXNzYWdlRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0XHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW21lc3NhZ2VEaWFsb2ddKTtcblx0XHR2b2lkIHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhtZXNzYWdlRGlhbG9nLCBtZXNzYWdlRGlhbG9nUHJvcGVydHkpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdlbmVyYXRlRWxlbWVudHMgPSAoXG5cdCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PlxuKToge1xuXHQkdGFibGU6IEpRdWVyeTtcblx0JG9wZW5lcjogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50Pjtcbn0gPT4ge1xuXHRjb25zdCB0YWJsZSA9IChcblx0XHQ8dGFibGVcblx0XHRcdGNsYXNzTmFtZT1cIndpa2l0YWJsZVwiXG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7Wy4uLiRib2R5LmZpbmQoJ1thY2Nlc3NrZXldJyldLnJlZHVjZShcblx0XHRcdFx0KGFjY3VtdWxhdG9yLCBlbGVtZW50KSA9PiBbXG5cdFx0XHRcdFx0Li4uYWNjdW11bGF0b3IsXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRoPntlbGVtZW50LmFjY2Vzc0tleS50b1VwcGVyQ2FzZSgpfTwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHR7KFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC50aXRsZSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC50ZXh0Q29udGVudCB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0KGVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgfHxcblx0XHRcdFx0XHRcdFx0XHRcdCRib2R5LmZpbmQoYGxhYmVsW2Zvcj1cIiR7ZWxlbWVudC5pZH1cIl1gKS50ZXh0KClcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgvXFxzKj9cXFsuKz9dJC8sICcnKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnRyaW0oKX1cblx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC8+LFxuXHRcdFx0XHRdLFxuXHRcdFx0XHRbXSBhcyBSZWFjdC5SZWFjdEVsZW1lbnRbXVxuXHRcdFx0KX1cblx0XHQ8L3RhYmxlPlxuXHQpO1xuXHRjb25zdCAkdGFibGUgPSAkKHRhYmxlKSBhcyBKUXVlcnk7XG5cblx0Y29uc3QgJG9wZW5lciA9ICQoPGEgYWNjZXNzS2V5PVwiP1wiPntnZXRNZXNzYWdlKCdUZXh0Jyl9PC9hPikgYXMgSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PjtcblxuXHRyZXR1cm4ge1xuXHRcdCR0YWJsZSxcblx0XHQkb3BlbmVyLFxuXHR9O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUVsZW1lbnRzfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q2xvc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2xvc2UnLFxuXHRcdFx0amE6ICfplonjgZjjgosnLFxuXHRcdFx0cnU6ICfQl9Cw0LrRgNGL0YLRjCcsXG5cdFx0XHQnemgtaGFucyc6ICflhbPpl60nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Zec6ZaJJyxcblx0XHR9KSxcblx0XHRUZXh0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ09wZW4gYWNjZXNzIGtleXMgY2hlYXRzaGVldCcsXG5cdFx0XHRqYTogJ+OCouOCr+OCu+OCueOCreODvOOBruODgeODvOODiOOCt+ODvOODiCcsXG5cdFx0XHRydTogJ9Ce0YLQutGA0YvRgtGMINC/0L7QtNGB0LrQsNC30LrRgyDRgSDQutC70LDQstC40LDRgtGD0YDQvdGL0LzQuCDRj9GA0LvRi9C60LDQvNC4Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aYvuekuumUruebmOW/q+aNt+mUruaPkOekuicsXG5cdFx0XHQnemgtaGFudCc6ICfpoa/npLrpjbXnm6Tlv6vpgJ/pjbXmj5DnpLonLFxuXHRcdH0pLFxuXHRcdFRpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FjY2VzcyBrZXlzIGNoZWF0c2hlZXQnLFxuXHRcdFx0amE6ICfjgqLjgq/jgrvjgrnjgq3jg7zjga7jg4Hjg7zjg4jjgrfjg7zjg4gnLFxuXHRcdFx0cnU6ICfQn9C+0LTRgdC60LDQt9C60Lgg0LrQu9Cw0LLQuNCw0YLRg9GA0L3Ri9GFINGP0YDQu9GL0LrQvtCyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mUruebmOW/q+aNt+mUruaPkOekuicsXG5cdFx0XHQnemgtaGFudCc6ICfpjbXnm6Tlv6vpgJ/pjbXmj5DnpLonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSA9ICgkZWxlbWVudDogSlF1ZXJ5KTogT08udWkuV2luZG93TWFuYWdlci5XaW5kb3dPcGVuaW5nRGF0YSA9PiB7XG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eTogT08udWkuV2luZG93TWFuYWdlci5XaW5kb3dPcGVuaW5nRGF0YSA9IHtcblx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnVGl0bGUnKSxcblx0XHRtZXNzYWdlOiAkZWxlbWVudCxcblx0XHRhY3Rpb25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2Nsb3NlJyxcblx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQ2xvc2UnKSxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRzaXplOiAnbWVkaXVtJyxcblx0fTtcblxuXHRyZXR1cm4gbWVzc2FnZURpYWxvZ1Byb3BlcnR5O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eX07XG4iLCAiaW1wb3J0IHthZGRMaXN0ZW5lcn0gZnJvbSAnLi9tb2R1bGVzL2FkZExpc3RlbmVyJztcbmltcG9ydCB7Z2VuZXJhdGVFbGVtZW50c30gZnJvbSAnLi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVFbGVtZW50cyc7XG5pbXBvcnQge2dlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5fSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2luaXRXaW5kb3dNYW5hZ2VyfSBmcm9tICcuL21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXInO1xuXG4vKipcbiAqIEFkZHMgYWx0K3NoaWZ0Kz8gYXMgYW4gYWNjZXNzIGtleSB0byBzaG93IGEgbGlzdCBvZiBhbGwgZGVmYXVsdCBhY2Nlc3Mga2V5c1xuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGFjY2Vzc0tleUNoZWF0c2hlZXQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGNvbnN0IHskdGFibGUsICRvcGVuZXJ9ID0gZ2VuZXJhdGVFbGVtZW50cygkYm9keSk7XG5cdCRvcGVuZXIuaGlkZSgpLmFwcGVuZFRvKCRib2R5KTtcblxuXHRjb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gaW5pdFdpbmRvd01hbmFnZXIoKTtcblx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cblx0Y29uc3QgbWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0gZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHkoJHRhYmxlKTtcblxuXHRhZGRMaXN0ZW5lcigkb3BlbmVyLCB3aW5kb3dNYW5hZ2VyLCBtZXNzYWdlRGlhbG9nUHJvcGVydHkpO1xufSk7XG4iLCAiY29uc3QgaW5pdFdpbmRvd01hbmFnZXIgPSAoKTogT08udWkuV2luZG93TWFuYWdlciA9PiB7XG5cdGNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xuXG5cdHdpbmRvd01hbmFnZXIuJGVsZW1lbnQuY3NzKHtcblx0XHQnbWFyZ2luLWJvdHRvbSc6ICcwJyxcblx0XHR3aWR0aDogJzM1ZW0nLFxuXHR9KTtcblxuXHRyZXR1cm4gd2luZG93TWFuYWdlcjtcbn07XG5cbmV4cG9ydCB7aW5pdFdpbmRvd01hbmFnZXJ9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUE7QUFFSixJQUFNQyxjQUFjQSxDQUNuQkMsVUFDQUMsZUFDQUMsMEJBQ1U7QUFDVkYsV0FBU0csR0FBRyxTQUFVQyxXQUFtQztBQUN4REEsVUFBTUMsZUFBZTtBQUVyQixRQUFJUCxlQUFlO0FBQ2xCLFVBQUlBLGNBQWNRLFNBQVMsR0FBRztBQUM3QlIsc0JBQWNTLE1BQU07TUFDckIsT0FBTztBQUNOVCxzQkFBY1UsS0FBS04scUJBQXFCO01BQ3pDO0FBQ0E7SUFDRDtBQUVBSixvQkFBZ0IsSUFBSVcsR0FBR0MsR0FBR0MsY0FBYztBQUN4Q1Ysa0JBQWNXLFdBQVcsQ0FBQ2QsYUFBYSxDQUFDO0FBQ3hDLFNBQUtHLGNBQWNZLFdBQVdmLGVBQWVJLHFCQUFxQjtFQUNuRSxDQUFDO0FBQ0Y7O0FDdkJBLElBQUFZLHFCQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDQWxCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxRQUFBLEdBQU9GLGtCQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLE9BQUEsR0FBTVAsa0JBQUFHLFVBQVM7TUFDZEMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsUUFBQSxHQUFPUixrQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRyxlQUFlUixnQkFBZ0I7QUFFckMsSUFBTVMsYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUQ3QkEsSUFBTUMsbUJBQ0xDLFdBSUk7QUFDSixRQUFNQyxRQUNMakIsbUNBQUFrQixRQUFBQyxjQUFDLFNBQUE7SUFDQUMsV0FBVTtJQUNWQyxPQUFPO01BQ05DLE9BQU87SUFDUjtFQUFBLEdBRUMsQ0FBQyxHQUFHTixNQUFNTyxLQUFLLGFBQWEsQ0FBQyxFQUFFQyxPQUMvQixDQUFDQyxhQUFhQyxZQUFZLENBQ3pCLEdBQUdELGFBQ0h6QixtQ0FBQWtCLFFBQUFDLGNBQUFuQixtQkFBQWtCLFFBQUFTLFVBQUEsTUFDQzNCLG1DQUFBa0IsUUFBQUMsY0FBQyxNQUFBLE1BQ0FuQixtQ0FBQWtCLFFBQUFDLGNBQUMsTUFBQSxNQUFJTyxRQUFRRSxVQUFVQyxZQUFZLENBQUUsR0FDckM3QixtQ0FBQWtCLFFBQUFDLGNBQUMsTUFBQSxPQUVDTyxRQUFRSSxhQUFhLFlBQVksS0FDakNKLFFBQVFLLFNBQ1JMLFFBQVFNLGVBQ1BOLFFBQTZCTyxTQUM5QmpCLE1BQU1PLEtBQUEsY0FBQVcsT0FBbUJSLFFBQVFTLElBQUUsSUFBQSxDQUFJLEVBQUVDLEtBQUssR0FFN0NDLFFBQVEsZUFBZSxFQUFFLEVBQ3pCQyxLQUFLLENBQ1IsQ0FDRCxDQUNELENBQUEsR0FFRCxDQUFBLENBQ0QsQ0FDRDtBQUVELFFBQU1DLFNBQVNDLEVBQUV2QixLQUFLO0FBRXRCLFFBQU13QixVQUFVRCxFQUFFeEMsbUNBQUFrQixRQUFBQyxjQUFDLEtBQUE7SUFBRVMsV0FBVTtFQUFBLEdBQUtmLFdBQVcsTUFBTSxDQUFFLENBQUk7QUFFM0QsU0FBTztJQUNOMEI7SUFDQUU7RUFDRDtBQUNEOztBRTlDQSxJQUFNQyxnQ0FBaUN4RCxjQUE0RDtBQUNsRyxRQUFNRSx3QkFBK0Q7SUFDcEUyQyxPQUFPbEIsV0FBVyxPQUFPO0lBQ3pCOEIsU0FBU3pEO0lBQ1QwRCxTQUFTLENBQ1I7TUFDQ0MsUUFBUTtNQUNSQyxPQUFPLENBQUMsUUFBUSxPQUFPO01BQ3ZCQyxPQUFPbEMsV0FBVyxPQUFPO0lBQzFCLENBQUE7SUFFRG1DLE1BQU07RUFDUDtBQUVBLFNBQU81RDtBQUNSOztBQ2RBLElBQUE2RCxxQkFBc0IvQyxRQUFBLGlCQUFBOztBQ0h0QixJQUFNZ0Qsb0JBQW9CQSxNQUEyQjtBQUNwRCxRQUFNL0QsZ0JBQXFDLElBQUlRLEdBQUdDLEdBQUd1RCxjQUFjO0FBRW5FaEUsZ0JBQWNELFNBQVNrRSxJQUFJO0lBQzFCLGlCQUFpQjtJQUNqQjlCLE9BQU87RUFDUixDQUFDO0FBRUQsU0FBT25DO0FBQ1I7O0FEQUEsTUFBQSxHQUFLOEQsbUJBQUFJLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxvQkFBb0J2QyxPQUFzQztBQUN0RixRQUFNO0lBQUN1QjtJQUFRRTtFQUFPLElBQUkxQixpQkFBaUJDLEtBQUs7QUFDaER5QixVQUFRZSxLQUFLLEVBQUVDLFNBQVN6QyxLQUFLO0FBRTdCLFFBQU03QixnQkFBcUMrRCxrQkFBa0I7QUFDN0QvRCxnQkFBY0QsU0FBU3VFLFNBQVN6QyxLQUFLO0FBRXJDLFFBQU01Qix3QkFBK0RzRCw4QkFBOEJILE1BQU07QUFFekd0RCxjQUFZd0QsU0FBU3RELGVBQWVDLHFCQUFxQjtBQUMxRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJtZXNzYWdlRGlhbG9nIiwgImFkZExpc3RlbmVyIiwgIiRlbGVtZW50IiwgIndpbmRvd01hbmFnZXIiLCAibWVzc2FnZURpYWxvZ1Byb3BlcnR5IiwgIm9uIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImlzT3BlbmVkIiwgImNsb3NlIiwgIm9wZW4iLCAiT08iLCAidWkiLCAiTWVzc2FnZURpYWxvZyIsICJhZGRXaW5kb3dzIiwgIm9wZW5XaW5kb3ciLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ2xvc2UiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAicnUiLCAiVGV4dCIsICJUaXRsZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2VuZXJhdGVFbGVtZW50cyIsICIkYm9keSIsICJ0YWJsZSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInN0eWxlIiwgIndpZHRoIiwgImZpbmQiLCAicmVkdWNlIiwgImFjY3VtdWxhdG9yIiwgImVsZW1lbnQiLCAiRnJhZ21lbnQiLCAiYWNjZXNzS2V5IiwgInRvVXBwZXJDYXNlIiwgImdldEF0dHJpYnV0ZSIsICJ0aXRsZSIsICJ0ZXh0Q29udGVudCIsICJ2YWx1ZSIsICJjb25jYXQiLCAiaWQiLCAidGV4dCIsICJyZXBsYWNlIiwgInRyaW0iLCAiJHRhYmxlIiwgIiQiLCAiJG9wZW5lciIsICJnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSIsICJtZXNzYWdlIiwgImFjdGlvbnMiLCAiYWN0aW9uIiwgImZsYWdzIiwgImxhYmVsIiwgInNpemUiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImluaXRXaW5kb3dNYW5hZ2VyIiwgIldpbmRvd01hbmFnZXIiLCAiY3NzIiwgImdldEJvZHkiLCAidGhlbiIsICJhY2Nlc3NLZXlDaGVhdHNoZWV0IiwgImhpZGUiLCAiYXBwZW5kVG8iXQp9Cg==
