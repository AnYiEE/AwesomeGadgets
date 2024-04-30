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
//! src/Wikicache/options.json
var configKey = "gadget-Wikicache__Initialized";
var cacheKeyPrefix = "wikicache-autosave-";
//! src/Wikicache/modules/content.ts
var getWpTextbox1Content = ({
  $editForm
}) => {
  return $editForm.find("#wpTextbox1").textSelection("getContents");
};
var getWpSummaryContent = ({
  $editForm
}) => {
  var _$editForm$find$val, _$editForm$find;
  return (_$editForm$find$val = (_$editForm$find = $editForm.find("#wpSummary")) === null || _$editForm$find === void 0 ? void 0 : _$editForm$find.val()) !== null && _$editForm$find$val !== void 0 ? _$editForm$find$val : "";
};
var setWpTextbox1Content = ({
  $editForm,
  content
}) => {
  $editForm.find("#wpTextbox1").textSelection("setContents", content);
};
var setWpSummaryContent = ({
  $editForm,
  content
}) => {
  $editForm.find("#wpSummary").val(content);
};
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
var import_ext_gadget3 = require("ext.gadget.Toastify");
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
    wpSummary: getWpSummaryContent({
      $editForm
    }),
    wpTextbox1: getWpTextbox1Content({
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
    (0, import_ext_gadget3.toastify)({
      text: getMessage("Change saved"),
      close: true,
      duration: 10 * 1e3,
      gravity: "top",
      position: "right"
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
      setWpSummaryContent({
        $editForm,
        content: saveObject["wpSummary"]
      });
    }
    if (saveObject["wpTextbox1"] && !(getWpTextbox1Content({
      $editForm
    }) === saveObject["wpTextbox1"])) {
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
        setWpTextbox1Content({
          $editForm,
          content: saveObject["wpTextbox1"]
        });
      }
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
      yield (0, import_ext_gadget2.delay)(30 * 1e3);
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
  $editForm.on("submit", () => {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2ljYWNoZS9vcHRpb25zLmpzb24iLCAic3JjL1dpa2ljYWNoZS9tb2R1bGVzL2NvbnRlbnQudHMiLCAic3JjL1dpa2ljYWNoZS9tb2R1bGVzL2NhY2hlLnRzIiwgInNyYy9XaWtpY2FjaGUvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9XaWtpY2FjaGUvV2lraWNhY2hlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LVdpa2ljYWNoZV9fSW5pdGlhbGl6ZWRcIixcblx0XCJjYWNoZUtleVByZWZpeFwiOiBcIndpa2ljYWNoZS1hdXRvc2F2ZS1cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMy4wXCJcbn1cbiIsICJjb25zdCBnZXRXcFRleHRib3gxQ29udGVudCA9ICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pID0+IHtcblx0cmV0dXJuICRlZGl0Rm9ybS5maW5kPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCcjd3BUZXh0Ym94MScpLnRleHRTZWxlY3Rpb24oJ2dldENvbnRlbnRzJyk7XG59O1xuXG5jb25zdCBnZXRXcFN1bW1hcnlDb250ZW50ID0gKHskZWRpdEZvcm19OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+fSk6IHN0cmluZyA9PiB7XG5cdHJldHVybiAkZWRpdEZvcm0uZmluZDxIVE1MSW5wdXRFbGVtZW50PignI3dwU3VtbWFyeScpPy52YWwoKSA/PyAnJztcbn07XG5cbmNvbnN0IHNldFdwVGV4dGJveDFDb250ZW50ID0gKHskZWRpdEZvcm0sIGNvbnRlbnR9OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+OyBjb250ZW50OiBzdHJpbmd9KSA9PiB7XG5cdCRlZGl0Rm9ybS5maW5kPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCcjd3BUZXh0Ym94MScpLnRleHRTZWxlY3Rpb24oJ3NldENvbnRlbnRzJywgY29udGVudCk7XG59O1xuXG5jb25zdCBzZXRXcFN1bW1hcnlDb250ZW50ID0gKHskZWRpdEZvcm0sIGNvbnRlbnR9OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+OyBjb250ZW50OiBzdHJpbmd9KSA9PiB7XG5cdCRlZGl0Rm9ybS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCcjd3BTdW1tYXJ5JykudmFsKGNvbnRlbnQpO1xufTtcblxuZXhwb3J0IHtnZXRXcFN1bW1hcnlDb250ZW50LCBnZXRXcFRleHRib3gxQ29udGVudCwgc2V0V3BTdW1tYXJ5Q29udGVudCwgc2V0V3BUZXh0Ym94MUNvbnRlbnR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0V3BTdW1tYXJ5Q29udGVudCwgZ2V0V3BUZXh0Ym94MUNvbnRlbnQsIHNldFdwU3VtbWFyeUNvbnRlbnQsIHNldFdwVGV4dGJveDFDb250ZW50fSBmcm9tICcuL2NvbnRlbnQnO1xuaW1wb3J0IHtBdXRvU2F2ZU9iamVjdH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2RlbGF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IGdldENhY2hlS2V5ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxldCBjYWNoZUtleTogc3RyaW5nID0gYCR7T1BUSU9OUy5jYWNoZUtleVByZWZpeH0ke3dnUGFnZU5hbWV9YDtcblx0Y29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9d3BTZWN0aW9uXScpPy52YWx1ZTtcblx0aWYgKHNlY3Rpb24pIHtcblx0XHRjYWNoZUtleSArPSBgIyR7c2VjdGlvbn1gO1xuXHR9XG5cblx0cmV0dXJuIGNhY2hlS2V5O1xufTtcblxuY29uc3QgbmV3U2F2ZU9iamVjdCA9ICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pOiBBdXRvU2F2ZU9iamVjdCA9PiB7XG5cdGNvbnN0IHNhdmVPYmplY3Q6IEF1dG9TYXZlT2JqZWN0ID0ge1xuXHRcdGRhdGU6IG5ldyBEYXRlKCksXG5cdFx0d3BTdW1tYXJ5OiBnZXRXcFN1bW1hcnlDb250ZW50KHskZWRpdEZvcm19KSxcblx0XHR3cFRleHRib3gxOiBnZXRXcFRleHRib3gxQ29udGVudCh7JGVkaXRGb3JtfSksXG5cdH07XG5cblx0cmV0dXJuIHNhdmVPYmplY3Q7XG59O1xuXG5jb25zdCBzZXRDYWNoZSA9ICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pID0+IHtcblx0dHJ5IHtcblx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChnZXRDYWNoZUtleSgpLCBuZXdTYXZlT2JqZWN0KHskZWRpdEZvcm19KSwgNjAgKiA2MCAqIDI0ICogMzAgKiAxMDAwKTtcblx0XHR0b2FzdGlmeSh7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdDaGFuZ2Ugc2F2ZWQnKSxcblx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0ZHVyYXRpb246IDEwICogMTAwMCxcblx0XHRcdGdyYXZpdHk6ICd0b3AnLFxuXHRcdFx0cG9zaXRpb246ICdyaWdodCcsXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdH1cbn07XG5cbmNvbnN0IGdldENhY2hlID0gYXN5bmMgKHskZWRpdEZvcm19OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+fSkgPT4ge1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuXHRjb25zdCBzYXZlT2JqZWN0OiBQYXJ0aWFsPEF1dG9TYXZlT2JqZWN0PiA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KGdldENhY2hlS2V5KCkpO1xuXG5cdGlmICghc2F2ZU9iamVjdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChzYXZlT2JqZWN0Wyd3cFN1bW1hcnknXSkge1xuXHRcdHNldFdwU3VtbWFyeUNvbnRlbnQoeyRlZGl0Rm9ybSwgY29udGVudDogc2F2ZU9iamVjdFsnd3BTdW1tYXJ5J119KTtcblx0fVxuXG5cdGlmIChzYXZlT2JqZWN0Wyd3cFRleHRib3gxJ10gJiYgIShnZXRXcFRleHRib3gxQ29udGVudCh7JGVkaXRGb3JtfSkgPT09IHNhdmVPYmplY3RbJ3dwVGV4dGJveDEnXSkpIHtcblx0XHRjb25zdCBjb25maXJtID0gYXdhaXQgT08udWkuY29uZmlybShnZXRNZXNzYWdlKCdSZXN0b3JlIGNoYW5nZXM/JyksIHtcblx0XHRcdGFjdGlvbnM6IFtcblx0XHRcdFx0e2xhYmVsOiBnZXRNZXNzYWdlKCdSZXN0b3JlIHVuc2F2ZWQgY2hhbmdlcycpLCBhY3Rpb246ICdhY2NlcHQnLCBmbGFnczogWydwcm9ncmVzc2l2ZSddfSxcblx0XHRcdFx0e2xhYmVsOiBnZXRNZXNzYWdlKCdOb3QgdG8gcmVzdG9yZScpLCBhY3Rpb246ICdjYW5jZWwnLCBmbGFnczogWydkZXN0cnVjdGl2ZSddfSxcblx0XHRcdF0sXG5cdFx0fSk7XG5cdFx0aWYgKGNvbmZpcm0pIHtcblx0XHRcdHNldFdwVGV4dGJveDFDb250ZW50KHskZWRpdEZvcm0sIGNvbnRlbnQ6IHNhdmVPYmplY3RbJ3dwVGV4dGJveDEnXX0pO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgYXV0b1NldENhY2hlID0gYXN5bmMgKHskZWRpdEZvcm19OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+fSkgPT4ge1xuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGF3YWl0IGRlbGF5KDMwICogMTAwMCk7XG5cdFx0c2V0Q2FjaGUoeyRlZGl0Rm9ybX0pO1xuXHR9XG59O1xuXG5jb25zdCBzZXRDYWNoZUJlZm9yZVN1Ym1pdCA9ICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pID0+IHtcblx0JGVkaXRGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG5cdFx0c2V0Q2FjaGUoeyRlZGl0Rm9ybX0pO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7Z2V0Q2FjaGUsIGF1dG9TZXRDYWNoZSwgc2V0Q2FjaGVCZWZvcmVTdWJtaXR9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnQ2hhbmdlIHNhdmVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0IGNvbnRlbnQgc2F2ZWQgdG8gbG9jYWwgc3RvcmFnZSBzdWNjZXNzZnVsbHknLFxuXHRcdFx0J3poLWhhbnMnOiAn57yW6L6R5YaF5a655bey5oiQ5Yqf5L+d5a2Y6Iez5pys5Zyw5a2Y5YKoJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3qOi8r+WFp+WuueW3suaIkOWKn+WEsuWtmOiHs+acrOWcsOWEsuWtmCcsXG5cdFx0fSksXG5cdFx0J1Jlc3RvcmUgY2hhbmdlcz8nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdXIgdW5zYXZlZCBjaGFnZXMgaGF2ZSBiZWVuIHNhdmVkIHRvIHlvdXIgbG9jYWwgc3RvcmFnZS4gUmVzdG9yZSBjaGFuZ2VzPycsXG5cdFx0XHQnemgtaGFucyc6ICflhYjliY3mnKrkv53lrZjnmoTnvJbovpHlhoXlrrnlt7LlrZjlgqjkuo7mnKzlnLDlrZjlgqjjgILmmK/lkKbmgaLlpI3lhYjliY3mnKrkv53lrZjnmoTnvJbovpHlhoXlrrnvvJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5YWI5YmN5pyq5L+d5a2Y55qE57eo6Lyv5YWn5a655bey5YSy5a2Y5LqO5pys5Zyw5YSy5a2Y44CC5piv5ZCm5oGi5b6p5YWI5YmN5pyq5L+d5a2Y55qE57eo6Lyv5YWn5a6577yfJyxcblx0XHR9KSxcblx0XHQnUmVzdG9yZSB1bnNhdmVkIGNoYW5nZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Jlc3RvcmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5oGi5aSNJyxcblx0XHRcdCd6aC1oYW50JzogJ+aBouW+qScsXG5cdFx0fSksXG5cdFx0J05vdCB0byByZXN0b3JlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOb3QgdG8gcmVzdG9yZScsXG5cdFx0XHQnemgtaGFucyc6ICfkuI3mgaLlpI0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiN5oGi5b6pJyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7YXV0b1NldENhY2hlLCBnZXRDYWNoZSwgc2V0Q2FjaGVCZWZvcmVTdWJtaXR9IGZyb20gJy4vbW9kdWxlcy9jYWNoZSc7XG5cbm13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKGFzeW5jICgkZWRpdEZvcm0pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0c2V0Q2FjaGVCZWZvcmVTdWJtaXQoeyRlZGl0Rm9ybX0pOyAvLyBBZGQgaG9vayB0byAjZWRpdGZvcm1cblx0YXdhaXQgZ2V0Q2FjaGUoeyRlZGl0Rm9ybX0pO1xuXHRhd2FpdCBhdXRvU2V0Q2FjaGUoeyRlZGl0Rm9ybX0pO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsWUFBYTtBQUNiLElBQUFDLGlCQUFrQjs7QUNGbkIsSUFBTUMsdUJBQXVCQSxDQUFDO0VBQUNDO0FBQVMsTUFBd0M7QUFDL0UsU0FBT0EsVUFBVUMsS0FBMEIsYUFBYSxFQUFFQyxjQUFjLGFBQWE7QUFDdEY7QUFFQSxJQUFNQyxzQkFBc0JBLENBQUM7RUFBQ0g7QUFBUyxNQUFnRDtBQUFBLE1BQUFJLHFCQUFBQztBQUN0RixVQUFBRCx1QkFBQUMsa0JBQU9MLFVBQVVDLEtBQXVCLFlBQVksT0FBQSxRQUFBSSxvQkFBQSxTQUFBLFNBQTdDQSxnQkFBZ0RDLElBQUksT0FBQSxRQUFBRix3QkFBQSxTQUFBQSxzQkFBSztBQUNqRTtBQUVBLElBQU1HLHVCQUF1QkEsQ0FBQztFQUFDUDtFQUFXUTtBQUFPLE1BQXlEO0FBQ3pHUixZQUFVQyxLQUEwQixhQUFhLEVBQUVDLGNBQWMsZUFBZU0sT0FBTztBQUN4RjtBQUVBLElBQU1DLHNCQUFzQkEsQ0FBQztFQUFDVDtFQUFXUTtBQUFPLE1BQXlEO0FBQ3hHUixZQUFVQyxLQUF1QixZQUFZLEVBQUVLLElBQUlFLE9BQU87QUFDM0Q7O0FDWEEsSUFBQUUscUJBQW9CQyxRQUFBLGlCQUFBOztBQ0hwQixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixpQkFBQSxHQUFnQkQsa0JBQUFFLFVBQVM7TUFDeEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxxQkFBQSxHQUFvQkgsa0JBQUFFLFVBQVM7TUFDNUJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCw0QkFBQSxHQUEyQkgsa0JBQUFFLFVBQVM7TUFDbkNDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxtQkFBQSxHQUFrQkgsa0JBQUFFLFVBQVM7TUFDMUJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBQ0EsSUFBTUMsZUFBZUgsZ0JBQWdCO0FBRXJDLElBQU1JLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEekJBLElBQUFDLHFCQUF1QlIsUUFBQSxxQkFBQTtBQUV2QixJQUFNUyxjQUFjQSxNQUFNO0FBQUEsTUFBQUM7QUFDekIsUUFBTTtJQUFDQztFQUFVLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFDbkMsTUFBSUMsV0FBQSxHQUFBQyxPQUE4QjdCLGNBQWMsRUFBQTZCLE9BQUdMLFVBQVU7QUFDN0QsUUFBTU0sV0FBQVAsd0JBQVVRLFNBQVNDLGNBQWdDLHVCQUF1QixPQUFBLFFBQUFULDBCQUFBLFNBQUEsU0FBaEVBLHNCQUFtRVU7QUFDbkYsTUFBSUgsU0FBUztBQUNaRixnQkFBQSxJQUFBQyxPQUFnQkMsT0FBTztFQUN4QjtBQUVBLFNBQU9GO0FBQ1I7QUFFQSxJQUFNTSxnQkFBZ0JBLENBQUM7RUFBQ2hDO0FBQVMsTUFBd0Q7QUFDeEYsUUFBTWlDLGFBQTZCO0lBQ2xDQyxNQUFNLG9CQUFJQyxLQUFLO0lBQ2ZDLFdBQVdqQyxvQkFBb0I7TUFBQ0g7SUFBUyxDQUFDO0lBQzFDcUMsWUFBWXRDLHFCQUFxQjtNQUFDQztJQUFTLENBQUM7RUFDN0M7QUFFQSxTQUFPaUM7QUFDUjtBQUVBLElBQU1LLFdBQVdBLENBQUM7RUFBQ3RDO0FBQVMsTUFBd0M7QUFDbkUsTUFBSTtBQUNIdUIsT0FBR2dCLFFBQVFDLFVBQVVwQixZQUFZLEdBQUdZLGNBQWM7TUFBQ2hDO0lBQVMsQ0FBQyxHQUFHLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBSTtBQUN4RixLQUFBLEdBQUFtQixtQkFBQXNCLFVBQVM7TUFDUkMsTUFBTXpCLFdBQVcsY0FBYztNQUMvQjBCLE9BQU87TUFDUEMsVUFBVSxLQUFLO01BQ2ZDLFNBQVM7TUFDVEMsVUFBVTtJQUNYLENBQUM7RUFDRixTQUFTQyxPQUFPO0FBQ2ZDLFlBQVFELE1BQU1BLEtBQUs7RUFDcEI7QUFDRDtBQUVBLElBQU1FLFdBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBVyxXQUFPO0lBQUNuRDtFQUFTLEdBQXdDO0FBQ3pFLFFBQUl1QixHQUFHQyxPQUFPQyxJQUFZNUIsU0FBUyxHQUFHO0FBQ3JDO0lBQ0Q7QUFDQTBCLE9BQUdDLE9BQU80QixJQUFZdkQsV0FBVyxJQUFJO0FBR3JDLFVBQU1vQyxhQUFzQ1YsR0FBR2dCLFFBQVFjLFVBQVVqQyxZQUFZLENBQUM7QUFFOUUsUUFBSSxDQUFDYSxZQUFZO0FBQ2hCO0lBQ0Q7QUFFQSxRQUFJQSxXQUFXLFdBQVcsR0FBRztBQUM1QnhCLDBCQUFvQjtRQUFDVDtRQUFXUSxTQUFTeUIsV0FBVyxXQUFXO01BQUMsQ0FBQztJQUNsRTtBQUVBLFFBQUlBLFdBQVcsWUFBWSxLQUFLLEVBQUVsQyxxQkFBcUI7TUFBQ0M7SUFBUyxDQUFDLE1BQU1pQyxXQUFXLFlBQVksSUFBSTtBQUNsRyxZQUFNcUIsVUFBQSxNQUFnQkMsR0FBR0MsR0FBR0YsUUFBUXJDLFdBQVcsa0JBQWtCLEdBQUc7UUFDbkV3QyxTQUFTLENBQ1I7VUFBQ0MsT0FBT3pDLFdBQVcseUJBQXlCO1VBQUcwQyxRQUFRO1VBQVVDLE9BQU8sQ0FBQyxhQUFhO1FBQUMsR0FDdkY7VUFBQ0YsT0FBT3pDLFdBQVcsZ0JBQWdCO1VBQUcwQyxRQUFRO1VBQVVDLE9BQU8sQ0FBQyxhQUFhO1FBQUMsQ0FBQTtNQUVoRixDQUFDO0FBQ0QsVUFBSU4sU0FBUztBQUNaL0MsNkJBQXFCO1VBQUNQO1VBQVdRLFNBQVN5QixXQUFXLFlBQVk7UUFBQyxDQUFDO01BQ3BFO0lBQ0Q7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQTVCTWdCLFVBQUFZLElBQUE7QUFBQSxXQUFBWCxLQUFBWSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUE4Qk4sSUFBTUMsZUFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUFkLGtCQUFlLFdBQU87SUFBQ25EO0VBQVMsR0FBd0M7QUFDN0UsV0FBTyxNQUFNO0FBQ1osYUFBQSxHQUFNVSxtQkFBQXdELE9BQU0sS0FBSyxHQUFJO0FBQ3JCNUIsZUFBUztRQUFDdEM7TUFBUyxDQUFDO0lBQ3JCO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FMTWdFLGNBQUFHLEtBQUE7QUFBQSxXQUFBRixNQUFBSCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUFPTixJQUFNSyx1QkFBdUJBLENBQUM7RUFBQ3BFO0FBQVMsTUFBd0M7QUFDL0VBLFlBQVVxRSxHQUFHLFVBQVUsTUFBTTtBQUM1Qi9CLGFBQVM7TUFBQ3RDO0lBQVMsQ0FBQztFQUNyQixDQUFDO0FBQ0Y7O0FFbEZBdUIsR0FBRytDLEtBQUssbUJBQW1CLEVBQUVDLElBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBckIsa0JBQUksV0FBT25ELFdBQTZCO0FBQ3BFb0UseUJBQXFCO01BQUNwRTtJQUFTLENBQUM7QUFDaEMsVUFBTWlELFNBQVM7TUFBQ2pEO0lBQVMsQ0FBQztBQUMxQixVQUFNZ0UsYUFBYTtNQUFDaEU7SUFBUyxDQUFDO0VBQy9CLENBQUM7QUFBQSxTQUFBLFNBQUF5RSxLQUFBO0FBQUEsV0FBQUQsTUFBQVYsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBLENBQUE7IiwKICAibmFtZXMiOiBbImNvbmZpZ0tleSIsICJjYWNoZUtleVByZWZpeCIsICJnZXRXcFRleHRib3gxQ29udGVudCIsICIkZWRpdEZvcm0iLCAiZmluZCIsICJ0ZXh0U2VsZWN0aW9uIiwgImdldFdwU3VtbWFyeUNvbnRlbnQiLCAiXyRlZGl0Rm9ybSRmaW5kJHZhbCIsICJfJGVkaXRGb3JtJGZpbmQiLCAidmFsIiwgInNldFdwVGV4dGJveDFDb250ZW50IiwgImNvbnRlbnQiLCAic2V0V3BTdW1tYXJ5Q29udGVudCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRDYWNoZUtleSIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImNhY2hlS2V5IiwgImNvbmNhdCIsICJzZWN0aW9uIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAidmFsdWUiLCAibmV3U2F2ZU9iamVjdCIsICJzYXZlT2JqZWN0IiwgImRhdGUiLCAiRGF0ZSIsICJ3cFN1bW1hcnkiLCAid3BUZXh0Ym94MSIsICJzZXRDYWNoZSIsICJzdG9yYWdlIiwgInNldE9iamVjdCIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImNsb3NlIiwgImR1cmF0aW9uIiwgImdyYXZpdHkiLCAicG9zaXRpb24iLCAiZXJyb3IiLCAiY29uc29sZSIsICJnZXRDYWNoZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInNldCIsICJnZXRPYmplY3QiLCAiY29uZmlybSIsICJPTyIsICJ1aSIsICJhY3Rpb25zIiwgImxhYmVsIiwgImFjdGlvbiIsICJmbGFncyIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiYXV0b1NldENhY2hlIiwgIl9yZWYyIiwgImRlbGF5IiwgIl94MiIsICJzZXRDYWNoZUJlZm9yZVN1Ym1pdCIsICJvbiIsICJob29rIiwgImFkZCIsICJfcmVmMyIsICJfeDMiXQp9Cg==
