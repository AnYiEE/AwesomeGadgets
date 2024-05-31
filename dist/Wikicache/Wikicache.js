/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Wikicache}
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

// dist/Wikicache/Wikicache.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
//! src/Wikicache/options.json
var configKey = "gadget-Wikicache__Initialized";
var cacheKeyPrefix = "wikicache-autosave-";
//! src/Wikicache/modules/cache.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Wikicache/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Change saved": (0, import_ext_gadget.localize)({
      en: "Edit content saved to local storage successfully",
      "zh-hans": "编辑内容已成功保存至本地存储",
      "zh-hant": "編輯內容已成功儲存至本地儲存"
    }),
    "Restore changes?": (0, import_ext_gadget.localize)({
      en: "Your unsaved chages have been saved to your local storage. Restore changes?",
      "zh-hans": "先前未保存的编辑内容已存储于本地存储。是否恢复先前未保存的编辑内容？",
      "zh-hant": "先前未保存的編輯內容已儲存于本地儲存。是否恢復先前未保存的編輯內容？"
    }),
    "Restore unsaved changes": (0, import_ext_gadget.localize)({
      en: "Restore",
      "zh-hans": "恢复",
      "zh-hant": "恢復"
    }),
    "Not to restore": (0, import_ext_gadget.localize)({
      en: "Not to restore",
      "zh-hans": "不恢复",
      "zh-hant": "不恢復"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Wikicache/modules/cache.ts
var getCacheKey = () => {
  var _document$querySelect;
  const {
    wgPageName
  } = mw.config.get();
  let cacheKey = "".concat(cacheKeyPrefix).concat(wgPageName);
  const section = (_document$querySelect = document.querySelector("input[name=wpSection]")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value;
  if (section) {
    cacheKey += "#".concat(section);
  }
  return cacheKey;
};
var newSaveObject = ({
  $editForm
}) => {
  const saveObject = {
    date: /* @__PURE__ */ new Date(),
    wpSummary: (0, import_ext_gadget2.getWpSummaryContent)({
      $editForm
    }),
    wpTextbox1: (0, import_ext_gadget2.getWpTextbox1Content)({
      $editForm
    })
  };
  return saveObject;
};
var setCache = ({
  $editForm
}) => {
  try {
    mw.storage.setObject(getCacheKey(), newSaveObject({
      $editForm
    }), 60 * 60 * 24 * 30 * 1e3);
    void mw.notify(getMessage("Change saved"), {
      tag: "wikicache"
    });
  } catch (error) {
    console.error(error);
  }
};
var getCache = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* ({
    $editForm
  }) {
    if (mw.config.get(configKey)) {
      return;
    }
    mw.config.set(configKey, true);
    const saveObject = mw.storage.getObject(getCacheKey());
    if (!saveObject) {
      return;
    }
    if (saveObject["wpSummary"]) {
      (0, import_ext_gadget2.setWpSummaryContent)({
        $editForm,
        content: saveObject["wpSummary"]
      });
    }
    if (!saveObject["wpTextbox1"]) {
      return;
    }
    if (![saveObject["wpTextbox1"], "".concat(saveObject["wpTextbox1"], "\n")].includes((0, import_ext_gadget2.getWpTextbox1Content)({
      $editForm
    }))) {
      const confirm = yield OO.ui.confirm(getMessage("Restore changes?"), {
        actions: [{
          label: getMessage("Restore unsaved changes"),
          action: "accept",
          flags: ["progressive"]
        }, {
          label: getMessage("Not to restore"),
          action: "cancel",
          flags: ["destructive"]
        }]
      });
      if (confirm) {
        (0, import_ext_gadget2.setWpTextbox1Content)({
          $editForm,
          content: saveObject["wpTextbox1"]
        });
      }
      mw.storage.remove("".concat(getCacheKey(), "##PreviewDiff"));
    }
  });
  return function getCache2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var autoSetCache = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* ({
    $editForm
  }) {
    while (true) {
      yield (0, import_ext_gadget2.delay)(60 * 1e3);
      setCache({
        $editForm
      });
    }
  });
  return function autoSetCache2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var setCacheBeforeSubmit = ({
  $editForm
}) => {
  const editForm = document.querySelector("#editform");
  editForm === null || editForm === void 0 || editForm.addEventListener("submit", (event) => {
    if ([document.querySelector("#wpPreview"), document.querySelector("#wpDiff")].includes(event.submitter)) {
      mw.storage.setObject("".concat(getCacheKey(), "##PreviewDiff"), "1", 60 * 60 * 24 * 1);
    }
    setCache({
      $editForm
    });
  });
};
//! src/Wikicache/Wikicache.ts
mw.hook("wikipage.editform").add(/* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* ($editForm) {
    setCacheBeforeSubmit({
      $editForm
    });
    yield getCache({
      $editForm
    });
    yield autoSetCache({
      $editForm
    });
  });
  return function(_x3) {
    return _ref3.apply(this, arguments);
  };
}());

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2ljYWNoZS9vcHRpb25zLmpzb24iLCAic3JjL1dpa2ljYWNoZS9tb2R1bGVzL2NhY2hlLnRzIiwgInNyYy9XaWtpY2FjaGUvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9XaWtpY2FjaGUvV2lraWNhY2hlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LVdpa2ljYWNoZV9fSW5pdGlhbGl6ZWRcIixcblx0XCJjYWNoZUtleVByZWZpeFwiOiBcIndpa2ljYWNoZS1hdXRvc2F2ZS1cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMy4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1xuXHRkZWxheSxcblx0Z2V0V3BTdW1tYXJ5Q29udGVudCxcblx0Z2V0V3BUZXh0Ym94MUNvbnRlbnQsXG5cdHNldFdwU3VtbWFyeUNvbnRlbnQsXG5cdHNldFdwVGV4dGJveDFDb250ZW50LFxufSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtBdXRvU2F2ZU9iamVjdH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGdldENhY2hlS2V5ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxldCBjYWNoZUtleTogc3RyaW5nID0gYCR7T1BUSU9OUy5jYWNoZUtleVByZWZpeH0ke3dnUGFnZU5hbWV9YDtcblx0Y29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9d3BTZWN0aW9uXScpPy52YWx1ZTtcblx0aWYgKHNlY3Rpb24pIHtcblx0XHRjYWNoZUtleSArPSBgIyR7c2VjdGlvbn1gO1xuXHR9XG5cblx0cmV0dXJuIGNhY2hlS2V5O1xufTtcblxuY29uc3QgbmV3U2F2ZU9iamVjdCA9ICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pOiBBdXRvU2F2ZU9iamVjdCA9PiB7XG5cdGNvbnN0IHNhdmVPYmplY3Q6IEF1dG9TYXZlT2JqZWN0ID0ge1xuXHRcdGRhdGU6IG5ldyBEYXRlKCksXG5cdFx0d3BTdW1tYXJ5OiBnZXRXcFN1bW1hcnlDb250ZW50KHskZWRpdEZvcm19KSxcblx0XHR3cFRleHRib3gxOiBnZXRXcFRleHRib3gxQ29udGVudCh7JGVkaXRGb3JtfSksXG5cdH07XG5cblx0cmV0dXJuIHNhdmVPYmplY3Q7XG59O1xuXG5jb25zdCBzZXRDYWNoZSA9ICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pID0+IHtcblx0dHJ5IHtcblx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChnZXRDYWNoZUtleSgpLCBuZXdTYXZlT2JqZWN0KHskZWRpdEZvcm19KSwgNjAgKiA2MCAqIDI0ICogMzAgKiAxMDAwKTtcblx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdDaGFuZ2Ugc2F2ZWQnKSwge1xuXHRcdFx0dGFnOiAnd2lraWNhY2hlJyxcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufTtcblxuY29uc3QgZ2V0Q2FjaGUgPSBhc3luYyAoeyRlZGl0Rm9ybX06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD59KSA9PiB7XG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdGNvbnN0IHNhdmVPYmplY3Q6IFBhcnRpYWw8QXV0b1NhdmVPYmplY3Q+ID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoZ2V0Q2FjaGVLZXkoKSk7XG5cblx0aWYgKCFzYXZlT2JqZWN0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHNhdmVPYmplY3RbJ3dwU3VtbWFyeSddKSB7XG5cdFx0c2V0V3BTdW1tYXJ5Q29udGVudCh7JGVkaXRGb3JtLCBjb250ZW50OiBzYXZlT2JqZWN0Wyd3cFN1bW1hcnknXX0pO1xuXHR9XG5cblx0aWYgKCFzYXZlT2JqZWN0Wyd3cFRleHRib3gxJ10pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIVtzYXZlT2JqZWN0Wyd3cFRleHRib3gxJ10sIGAke3NhdmVPYmplY3RbJ3dwVGV4dGJveDEnXX1cXG5gXS5pbmNsdWRlcyhnZXRXcFRleHRib3gxQ29udGVudCh7JGVkaXRGb3JtfSkpKSB7XG5cdFx0Y29uc3QgY29uZmlybSA9IGF3YWl0IE9PLnVpLmNvbmZpcm0oZ2V0TWVzc2FnZSgnUmVzdG9yZSBjaGFuZ2VzPycpLCB7XG5cdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdHtsYWJlbDogZ2V0TWVzc2FnZSgnUmVzdG9yZSB1bnNhdmVkIGNoYW5nZXMnKSwgYWN0aW9uOiAnYWNjZXB0JywgZmxhZ3M6IFsncHJvZ3Jlc3NpdmUnXX0sXG5cdFx0XHRcdHtsYWJlbDogZ2V0TWVzc2FnZSgnTm90IHRvIHJlc3RvcmUnKSwgYWN0aW9uOiAnY2FuY2VsJywgZmxhZ3M6IFsnZGVzdHJ1Y3RpdmUnXX0sXG5cdFx0XHRdLFxuXHRcdH0pO1xuXHRcdGlmIChjb25maXJtKSB7XG5cdFx0XHRzZXRXcFRleHRib3gxQ29udGVudCh7JGVkaXRGb3JtLCBjb250ZW50OiBzYXZlT2JqZWN0Wyd3cFRleHRib3gxJ119KTtcblx0XHR9XG5cdFx0bXcuc3RvcmFnZS5yZW1vdmUoYCR7Z2V0Q2FjaGVLZXkoKX0jI1ByZXZpZXdEaWZmYCk7XG5cdH1cbn07XG5cbmNvbnN0IGF1dG9TZXRDYWNoZSA9IGFzeW5jICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pID0+IHtcblx0d2hpbGUgKHRydWUpIHtcblx0XHRhd2FpdCBkZWxheSg2MCAqIDEwMDApO1xuXHRcdHNldENhY2hlKHskZWRpdEZvcm19KTtcblx0fVxufTtcblxuY29uc3Qgc2V0Q2FjaGVCZWZvcmVTdWJtaXQgPSAoeyRlZGl0Rm9ybX06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD59KSA9PiB7XG5cdGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRm9ybUVsZW1lbnQ+KCcjZWRpdGZvcm0nKTtcblx0ZWRpdEZvcm0/LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuXHRcdGlmIChbZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwUHJldmlldycpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BEaWZmJyldLmluY2x1ZGVzKGV2ZW50LnN1Ym1pdHRlcikpIHtcblx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KGAke2dldENhY2hlS2V5KCl9IyNQcmV2aWV3RGlmZmAsICcxJywgNjAgKiA2MCAqIDI0ICogMSk7XG5cdFx0fVxuXHRcdHNldENhY2hlKHskZWRpdEZvcm19KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2dldENhY2hlLCBhdXRvU2V0Q2FjaGUsIHNldENhY2hlQmVmb3JlU3VibWl0fTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J0NoYW5nZSBzYXZlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdCBjb250ZW50IHNhdmVkIHRvIGxvY2FsIHN0b3JhZ2Ugc3VjY2Vzc2Z1bGx5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e8lui+keWGheWuueW3suaIkOWKn+S/neWtmOiHs+acrOWcsOWtmOWCqCcsXG5cdFx0XHQnemgtaGFudCc6ICfnt6jovK/lhaflrrnlt7LmiJDlip/lhLLlrZjoh7PmnKzlnLDlhLLlrZgnLFxuXHRcdH0pLFxuXHRcdCdSZXN0b3JlIGNoYW5nZXM/JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3VyIHVuc2F2ZWQgY2hhZ2VzIGhhdmUgYmVlbiBzYXZlZCB0byB5b3VyIGxvY2FsIHN0b3JhZ2UuIFJlc3RvcmUgY2hhbmdlcz8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWI5YmN5pyq5L+d5a2Y55qE57yW6L6R5YaF5a655bey5a2Y5YKo5LqO5pys5Zyw5a2Y5YKo44CC5piv5ZCm5oGi5aSN5YWI5YmN5pyq5L+d5a2Y55qE57yW6L6R5YaF5a6577yfJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFiOWJjeacquS/neWtmOeahOe3qOi8r+WFp+WuueW3suWEsuWtmOS6juacrOWcsOWEsuWtmOOAguaYr+WQpuaBouW+qeWFiOWJjeacquS/neWtmOeahOe3qOi8r+WFp+Wuue+8nycsXG5cdFx0fSksXG5cdFx0J1Jlc3RvcmUgdW5zYXZlZCBjaGFuZ2VzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXN0b3JlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aBouWkjScsXG5cdFx0XHQnemgtaGFudCc6ICfmgaLlvqknLFxuXHRcdH0pLFxuXHRcdCdOb3QgdG8gcmVzdG9yZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTm90IHRvIHJlc3RvcmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiN5oGi5aSNJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4jeaBouW+qScsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2F1dG9TZXRDYWNoZSwgZ2V0Q2FjaGUsIHNldENhY2hlQmVmb3JlU3VibWl0fSBmcm9tICcuL21vZHVsZXMvY2FjaGUnO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZChhc3luYyAoJGVkaXRGb3JtKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHNldENhY2hlQmVmb3JlU3VibWl0KHskZWRpdEZvcm19KTsgLy8gQWRkIGhvb2sgdG8gI2VkaXRmb3JtXG5cdGF3YWl0IGdldENhY2hlKHskZWRpdEZvcm19KTtcblx0YXdhaXQgYXV0b1NldENhY2hlKHskZWRpdEZvcm19KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFlBQWE7QUFDYixJQUFBQyxpQkFBa0I7O0FDRG5CLElBQUFDLHFCQU1PQyxRQUFBLGlCQUFBOztBQ1BQLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLGlCQUFBLEdBQWdCRCxrQkFBQUUsVUFBUztNQUN4QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHFCQUFBLEdBQW9CSCxrQkFBQUUsVUFBUztNQUM1QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELDRCQUFBLEdBQTJCSCxrQkFBQUUsVUFBUztNQUNuQ0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELG1CQUFBLEdBQWtCSCxrQkFBQUUsVUFBUztNQUMxQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFDQSxJQUFNQyxlQUFlSCxnQkFBZ0I7QUFFckMsSUFBTUksYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QURuQkEsSUFBTUMsY0FBY0EsTUFBTTtBQUFBLE1BQUFDO0FBQ3pCLFFBQU07SUFBQ0M7RUFBVSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBQ25DLE1BQUlDLFdBQUEsR0FBQUMsT0FBOEJqQixjQUFjLEVBQUFpQixPQUFHTCxVQUFVO0FBQzdELFFBQU1NLFdBQUFQLHdCQUFVUSxTQUFTQyxjQUFnQyx1QkFBdUIsT0FBQSxRQUFBVCwwQkFBQSxTQUFBLFNBQWhFQSxzQkFBbUVVO0FBQ25GLE1BQUlILFNBQVM7QUFDWkYsZ0JBQUEsSUFBQUMsT0FBZ0JDLE9BQU87RUFDeEI7QUFFQSxTQUFPRjtBQUNSO0FBRUEsSUFBTU0sZ0JBQWdCQSxDQUFDO0VBQUNDO0FBQVMsTUFBd0Q7QUFDeEYsUUFBTUMsYUFBNkI7SUFDbENDLE1BQU0sb0JBQUlDLEtBQUs7SUFDZkMsWUFBQSxHQUFXMUIsbUJBQUEyQixxQkFBb0I7TUFBQ0w7SUFBUyxDQUFDO0lBQzFDTSxhQUFBLEdBQVk1QixtQkFBQTZCLHNCQUFxQjtNQUFDUDtJQUFTLENBQUM7RUFDN0M7QUFFQSxTQUFPQztBQUNSO0FBRUEsSUFBTU8sV0FBV0EsQ0FBQztFQUFDUjtBQUFTLE1BQXdDO0FBQ25FLE1BQUk7QUFDSFYsT0FBR21CLFFBQVFDLFVBQVV2QixZQUFZLEdBQUdZLGNBQWM7TUFBQ0M7SUFBUyxDQUFDLEdBQUcsS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFJO0FBQ3hGLFNBQUtWLEdBQUdxQixPQUFPMUIsV0FBVyxjQUFjLEdBQUc7TUFDMUMyQixLQUFLO0lBQ04sQ0FBQztFQUNGLFNBQVNDLE9BQU87QUFDZkMsWUFBUUQsTUFBTUEsS0FBSztFQUNwQjtBQUNEO0FBRUEsSUFBTUUsV0FBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFXLFdBQU87SUFBQ2pCO0VBQVMsR0FBd0M7QUFDekUsUUFBSVYsR0FBR0MsT0FBT0MsSUFBWWhCLFNBQVMsR0FBRztBQUNyQztJQUNEO0FBQ0FjLE9BQUdDLE9BQU8yQixJQUFZMUMsV0FBVyxJQUFJO0FBR3JDLFVBQU15QixhQUFzQ1gsR0FBR21CLFFBQVFVLFVBQVVoQyxZQUFZLENBQUM7QUFFOUUsUUFBSSxDQUFDYyxZQUFZO0FBQ2hCO0lBQ0Q7QUFFQSxRQUFJQSxXQUFXLFdBQVcsR0FBRztBQUM1QixPQUFBLEdBQUF2QixtQkFBQTBDLHFCQUFvQjtRQUFDcEI7UUFBV3FCLFNBQVNwQixXQUFXLFdBQVc7TUFBQyxDQUFDO0lBQ2xFO0FBRUEsUUFBSSxDQUFDQSxXQUFXLFlBQVksR0FBRztBQUM5QjtJQUNEO0FBRUEsUUFBSSxDQUFDLENBQUNBLFdBQVcsWUFBWSxHQUFBLEdBQUFQLE9BQU1PLFdBQVcsWUFBWSxHQUFDLElBQUEsQ0FBQSxFQUFNcUIsVUFBQSxHQUFTNUMsbUJBQUE2QixzQkFBcUI7TUFBQ1A7SUFBUyxDQUFDLENBQUMsR0FBRztBQUM3RyxZQUFNdUIsVUFBQSxNQUFnQkMsR0FBR0MsR0FBR0YsUUFBUXRDLFdBQVcsa0JBQWtCLEdBQUc7UUFDbkV5QyxTQUFTLENBQ1I7VUFBQ0MsT0FBTzFDLFdBQVcseUJBQXlCO1VBQUcyQyxRQUFRO1VBQVVDLE9BQU8sQ0FBQyxhQUFhO1FBQUMsR0FDdkY7VUFBQ0YsT0FBTzFDLFdBQVcsZ0JBQWdCO1VBQUcyQyxRQUFRO1VBQVVDLE9BQU8sQ0FBQyxhQUFhO1FBQUMsQ0FBQTtNQUVoRixDQUFDO0FBQ0QsVUFBSU4sU0FBUztBQUNaLFNBQUEsR0FBQTdDLG1CQUFBb0Qsc0JBQXFCO1VBQUM5QjtVQUFXcUIsU0FBU3BCLFdBQVcsWUFBWTtRQUFDLENBQUM7TUFDcEU7QUFDQVgsU0FBR21CLFFBQVFzQixPQUFBLEdBQUFyQyxPQUFVUCxZQUFZLEdBQUMsZUFBQSxDQUFlO0lBQ2xEO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FqQ000QixVQUFBaUIsSUFBQTtBQUFBLFdBQUFoQixLQUFBaUIsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBbUNOLElBQU1DLGVBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBbkIsa0JBQWUsV0FBTztJQUFDakI7RUFBUyxHQUF3QztBQUM3RSxXQUFPLE1BQU07QUFDWixhQUFBLEdBQU10QixtQkFBQTJELE9BQU0sS0FBSyxHQUFJO0FBQ3JCN0IsZUFBUztRQUFDUjtNQUFTLENBQUM7SUFDckI7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQUxNbUMsY0FBQUcsS0FBQTtBQUFBLFdBQUFGLE1BQUFILE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQU9OLElBQU1LLHVCQUF1QkEsQ0FBQztFQUFDdkM7QUFBUyxNQUF3QztBQUMvRSxRQUFNd0MsV0FBVzVDLFNBQVNDLGNBQStCLFdBQVc7QUFDcEUyQyxlQUFBLFFBQUFBLGFBQUEsVUFBQUEsU0FBVUMsaUJBQWlCLFVBQVdDLFdBQVU7QUFDL0MsUUFBSSxDQUFDOUMsU0FBU0MsY0FBYyxZQUFZLEdBQUdELFNBQVNDLGNBQWMsU0FBUyxDQUFDLEVBQUV5QixTQUFTb0IsTUFBTUMsU0FBUyxHQUFHO0FBQ3hHckQsU0FBR21CLFFBQVFDLFVBQUEsR0FBQWhCLE9BQWFQLFlBQVksR0FBQyxlQUFBLEdBQWlCLEtBQUssS0FBSyxLQUFLLEtBQUssQ0FBQztJQUM1RTtBQUNBcUIsYUFBUztNQUFDUjtJQUFTLENBQUM7RUFDckIsQ0FBQztBQUNGOztBRTNGQVYsR0FBR3NELEtBQUssbUJBQW1CLEVBQUVDLElBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBN0Isa0JBQUksV0FBT2pCLFdBQTZCO0FBQ3BFdUMseUJBQXFCO01BQUN2QztJQUFTLENBQUM7QUFDaEMsVUFBTWUsU0FBUztNQUFDZjtJQUFTLENBQUM7QUFDMUIsVUFBTW1DLGFBQWE7TUFBQ25DO0lBQVMsQ0FBQztFQUMvQixDQUFDO0FBQUEsU0FBQSxTQUFBK0MsS0FBQTtBQUFBLFdBQUFELE1BQUFiLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQSxDQUFBOyIsCiAgIm5hbWVzIjogWyJjb25maWdLZXkiLCAiY2FjaGVLZXlQcmVmaXgiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZXRDYWNoZUtleSIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImNhY2hlS2V5IiwgImNvbmNhdCIsICJzZWN0aW9uIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAidmFsdWUiLCAibmV3U2F2ZU9iamVjdCIsICIkZWRpdEZvcm0iLCAic2F2ZU9iamVjdCIsICJkYXRlIiwgIkRhdGUiLCAid3BTdW1tYXJ5IiwgImdldFdwU3VtbWFyeUNvbnRlbnQiLCAid3BUZXh0Ym94MSIsICJnZXRXcFRleHRib3gxQ29udGVudCIsICJzZXRDYWNoZSIsICJzdG9yYWdlIiwgInNldE9iamVjdCIsICJub3RpZnkiLCAidGFnIiwgImVycm9yIiwgImNvbnNvbGUiLCAiZ2V0Q2FjaGUiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJzZXQiLCAiZ2V0T2JqZWN0IiwgInNldFdwU3VtbWFyeUNvbnRlbnQiLCAiY29udGVudCIsICJpbmNsdWRlcyIsICJjb25maXJtIiwgIk9PIiwgInVpIiwgImFjdGlvbnMiLCAibGFiZWwiLCAiYWN0aW9uIiwgImZsYWdzIiwgInNldFdwVGV4dGJveDFDb250ZW50IiwgInJlbW92ZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiYXV0b1NldENhY2hlIiwgIl9yZWYyIiwgImRlbGF5IiwgIl94MiIsICJzZXRDYWNoZUJlZm9yZVN1Ym1pdCIsICJlZGl0Rm9ybSIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2ZW50IiwgInN1Ym1pdHRlciIsICJob29rIiwgImFkZCIsICJfcmVmMyIsICJfeDMiXQp9Cg==
