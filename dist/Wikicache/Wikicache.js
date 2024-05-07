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
      duration: 3 * 1e3,
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2ljYWNoZS9vcHRpb25zLmpzb24iLCAic3JjL1dpa2ljYWNoZS9tb2R1bGVzL2NvbnRlbnQudHMiLCAic3JjL1dpa2ljYWNoZS9tb2R1bGVzL2NhY2hlLnRzIiwgInNyYy9XaWtpY2FjaGUvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9XaWtpY2FjaGUvV2lraWNhY2hlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LVdpa2ljYWNoZV9fSW5pdGlhbGl6ZWRcIixcblx0XCJjYWNoZUtleVByZWZpeFwiOiBcIndpa2ljYWNoZS1hdXRvc2F2ZS1cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMy4wXCJcbn1cbiIsICJjb25zdCBnZXRXcFRleHRib3gxQ29udGVudCA9ICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pID0+IHtcblx0cmV0dXJuICRlZGl0Rm9ybS5maW5kPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCcjd3BUZXh0Ym94MScpLnRleHRTZWxlY3Rpb24oJ2dldENvbnRlbnRzJyk7XG59O1xuXG5jb25zdCBnZXRXcFN1bW1hcnlDb250ZW50ID0gKHskZWRpdEZvcm19OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+fSk6IHN0cmluZyA9PiB7XG5cdHJldHVybiAkZWRpdEZvcm0uZmluZDxIVE1MSW5wdXRFbGVtZW50PignI3dwU3VtbWFyeScpPy52YWwoKSA/PyAnJztcbn07XG5cbmNvbnN0IHNldFdwVGV4dGJveDFDb250ZW50ID0gKHskZWRpdEZvcm0sIGNvbnRlbnR9OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+OyBjb250ZW50OiBzdHJpbmd9KSA9PiB7XG5cdCRlZGl0Rm9ybS5maW5kPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCcjd3BUZXh0Ym94MScpLnRleHRTZWxlY3Rpb24oJ3NldENvbnRlbnRzJywgY29udGVudCk7XG59O1xuXG5jb25zdCBzZXRXcFN1bW1hcnlDb250ZW50ID0gKHskZWRpdEZvcm0sIGNvbnRlbnR9OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+OyBjb250ZW50OiBzdHJpbmd9KSA9PiB7XG5cdCRlZGl0Rm9ybS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCcjd3BTdW1tYXJ5JykudmFsKGNvbnRlbnQpO1xufTtcblxuZXhwb3J0IHtnZXRXcFN1bW1hcnlDb250ZW50LCBnZXRXcFRleHRib3gxQ29udGVudCwgc2V0V3BTdW1tYXJ5Q29udGVudCwgc2V0V3BUZXh0Ym94MUNvbnRlbnR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0V3BTdW1tYXJ5Q29udGVudCwgZ2V0V3BUZXh0Ym94MUNvbnRlbnQsIHNldFdwU3VtbWFyeUNvbnRlbnQsIHNldFdwVGV4dGJveDFDb250ZW50fSBmcm9tICcuL2NvbnRlbnQnO1xuaW1wb3J0IHtBdXRvU2F2ZU9iamVjdH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2RlbGF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IGdldENhY2hlS2V5ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxldCBjYWNoZUtleTogc3RyaW5nID0gYCR7T1BUSU9OUy5jYWNoZUtleVByZWZpeH0ke3dnUGFnZU5hbWV9YDtcblx0Y29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9d3BTZWN0aW9uXScpPy52YWx1ZTtcblx0aWYgKHNlY3Rpb24pIHtcblx0XHRjYWNoZUtleSArPSBgIyR7c2VjdGlvbn1gO1xuXHR9XG5cblx0cmV0dXJuIGNhY2hlS2V5O1xufTtcblxuY29uc3QgbmV3U2F2ZU9iamVjdCA9ICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pOiBBdXRvU2F2ZU9iamVjdCA9PiB7XG5cdGNvbnN0IHNhdmVPYmplY3Q6IEF1dG9TYXZlT2JqZWN0ID0ge1xuXHRcdGRhdGU6IG5ldyBEYXRlKCksXG5cdFx0d3BTdW1tYXJ5OiBnZXRXcFN1bW1hcnlDb250ZW50KHskZWRpdEZvcm19KSxcblx0XHR3cFRleHRib3gxOiBnZXRXcFRleHRib3gxQ29udGVudCh7JGVkaXRGb3JtfSksXG5cdH07XG5cblx0cmV0dXJuIHNhdmVPYmplY3Q7XG59O1xuXG5jb25zdCBzZXRDYWNoZSA9ICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pID0+IHtcblx0dHJ5IHtcblx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChnZXRDYWNoZUtleSgpLCBuZXdTYXZlT2JqZWN0KHskZWRpdEZvcm19KSwgNjAgKiA2MCAqIDI0ICogMzAgKiAxMDAwKTtcblx0XHR0b2FzdGlmeSh7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdDaGFuZ2Ugc2F2ZWQnKSxcblx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0ZHVyYXRpb246IDMgKiAxMDAwLFxuXHRcdFx0Z3Jhdml0eTogJ3RvcCcsXG5cdFx0XHRwb3NpdGlvbjogJ3JpZ2h0Jyxcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufTtcblxuY29uc3QgZ2V0Q2FjaGUgPSBhc3luYyAoeyRlZGl0Rm9ybX06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD59KSA9PiB7XG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdGNvbnN0IHNhdmVPYmplY3Q6IFBhcnRpYWw8QXV0b1NhdmVPYmplY3Q+ID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoZ2V0Q2FjaGVLZXkoKSk7XG5cblx0aWYgKCFzYXZlT2JqZWN0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHNhdmVPYmplY3RbJ3dwU3VtbWFyeSddKSB7XG5cdFx0c2V0V3BTdW1tYXJ5Q29udGVudCh7JGVkaXRGb3JtLCBjb250ZW50OiBzYXZlT2JqZWN0Wyd3cFN1bW1hcnknXX0pO1xuXHR9XG5cblx0aWYgKHNhdmVPYmplY3RbJ3dwVGV4dGJveDEnXSAmJiAhKGdldFdwVGV4dGJveDFDb250ZW50KHskZWRpdEZvcm19KSA9PT0gc2F2ZU9iamVjdFsnd3BUZXh0Ym94MSddKSkge1xuXHRcdGNvbnN0IGNvbmZpcm0gPSBhd2FpdCBPTy51aS5jb25maXJtKGdldE1lc3NhZ2UoJ1Jlc3RvcmUgY2hhbmdlcz8nKSwge1xuXHRcdFx0YWN0aW9uczogW1xuXHRcdFx0XHR7bGFiZWw6IGdldE1lc3NhZ2UoJ1Jlc3RvcmUgdW5zYXZlZCBjaGFuZ2VzJyksIGFjdGlvbjogJ2FjY2VwdCcsIGZsYWdzOiBbJ3Byb2dyZXNzaXZlJ119LFxuXHRcdFx0XHR7bGFiZWw6IGdldE1lc3NhZ2UoJ05vdCB0byByZXN0b3JlJyksIGFjdGlvbjogJ2NhbmNlbCcsIGZsYWdzOiBbJ2Rlc3RydWN0aXZlJ119LFxuXHRcdFx0XSxcblx0XHR9KTtcblx0XHRpZiAoY29uZmlybSkge1xuXHRcdFx0c2V0V3BUZXh0Ym94MUNvbnRlbnQoeyRlZGl0Rm9ybSwgY29udGVudDogc2F2ZU9iamVjdFsnd3BUZXh0Ym94MSddfSk7XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBhdXRvU2V0Q2FjaGUgPSBhc3luYyAoeyRlZGl0Rm9ybX06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD59KSA9PiB7XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0YXdhaXQgZGVsYXkoNjAgKiAxMDAwKTtcblx0XHRzZXRDYWNoZSh7JGVkaXRGb3JtfSk7XG5cdH1cbn07XG5cbmNvbnN0IHNldENhY2hlQmVmb3JlU3VibWl0ID0gKHskZWRpdEZvcm19OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+fSkgPT4ge1xuXHQkZWRpdEZvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcblx0XHRzZXRDYWNoZSh7JGVkaXRGb3JtfSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHtnZXRDYWNoZSwgYXV0b1NldENhY2hlLCBzZXRDYWNoZUJlZm9yZVN1Ym1pdH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdDaGFuZ2Ugc2F2ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQgY29udGVudCBzYXZlZCB0byBsb2NhbCBzdG9yYWdlIHN1Y2Nlc3NmdWxseScsXG5cdFx0XHQnemgtaGFucyc6ICfnvJbovpHlhoXlrrnlt7LmiJDlip/kv53lrZjoh7PmnKzlnLDlrZjlgqgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57eo6Lyv5YWn5a655bey5oiQ5Yqf5YSy5a2Y6Iez5pys5Zyw5YSy5a2YJyxcblx0XHR9KSxcblx0XHQnUmVzdG9yZSBjaGFuZ2VzPyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91ciB1bnNhdmVkIGNoYWdlcyBoYXZlIGJlZW4gc2F2ZWQgdG8geW91ciBsb2NhbCBzdG9yYWdlLiBSZXN0b3JlIGNoYW5nZXM/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFiOWJjeacquS/neWtmOeahOe8lui+keWGheWuueW3suWtmOWCqOS6juacrOWcsOWtmOWCqOOAguaYr+WQpuaBouWkjeWFiOWJjeacquS/neWtmOeahOe8lui+keWGheWuue+8nycsXG5cdFx0XHQnemgtaGFudCc6ICflhYjliY3mnKrkv53lrZjnmoTnt6jovK/lhaflrrnlt7LlhLLlrZjkuo7mnKzlnLDlhLLlrZjjgILmmK/lkKbmgaLlvqnlhYjliY3mnKrkv53lrZjnmoTnt6jovK/lhaflrrnvvJ8nLFxuXHRcdH0pLFxuXHRcdCdSZXN0b3JlIHVuc2F2ZWQgY2hhbmdlcyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVzdG9yZScsXG5cdFx0XHQnemgtaGFucyc6ICfmgaLlpI0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5oGi5b6pJyxcblx0XHR9KSxcblx0XHQnTm90IHRvIHJlc3RvcmUnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05vdCB0byByZXN0b3JlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4jeaBouWkjScsXG5cdFx0XHQnemgtaGFudCc6ICfkuI3mgaLlvqknLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHthdXRvU2V0Q2FjaGUsIGdldENhY2hlLCBzZXRDYWNoZUJlZm9yZVN1Ym1pdH0gZnJvbSAnLi9tb2R1bGVzL2NhY2hlJztcblxubXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoYXN5bmMgKCRlZGl0Rm9ybSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRzZXRDYWNoZUJlZm9yZVN1Ym1pdCh7JGVkaXRGb3JtfSk7IC8vIEFkZCBob29rIHRvICNlZGl0Zm9ybVxuXHRhd2FpdCBnZXRDYWNoZSh7JGVkaXRGb3JtfSk7XG5cdGF3YWl0IGF1dG9TZXRDYWNoZSh7JGVkaXRGb3JtfSk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QU07QUFDWixhQUFBLEdBQU1VLG1CQUFBd0QsT0FBTSxLQUFLLEdBQUk7QUFDckI1QixlQUFTO1FBQUN0QztNQUFTLENBQUM7SUFDckI7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQUxNZ0UsY0FBQUcsS0FBQTtBQUFBLFdBQUFGLE1BQUFILE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQU9OLElBQU1LLHVCQUF1QkEsQ0FBQztFQUFDcEU7QUFBUyxNQUF3QztBQUMvRUEsWUFBVXFFLEdBQUcsVUFBVSxNQUFNO0FBQzVCL0IsYUFBUztNQUFDdEM7SUFBUyxDQUFDO0VBQ3JCLENBQUM7QUFDRjs7QUVsRkF1QixHQUFHK0MsS0FBSyxtQkFBbUIsRUFBRUMsSUFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUFyQixrQkFBSSxXQUFPbkQsV0FBNkI7QUFDcEVvRSx5QkFBcUI7TUFBQ3BFO0lBQVMsQ0FBQztBQUNoQyxVQUFNaUQsU0FBUztNQUFDakQ7SUFBUyxDQUFDO0FBQzFCLFVBQU1nRSxhQUFhO01BQUNoRTtJQUFTLENBQUM7RUFDL0IsQ0FBQztBQUFBLFNBQUEsU0FBQXlFLEtBQUE7QUFBQSxXQUFBRCxNQUFBVixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUEsQ0FBQTsiLAogICJuYW1lcyI6IFsiY29uZmlnS2V5IiwgImNhY2hlS2V5UHJlZml4IiwgImdldFdwVGV4dGJveDFDb250ZW50IiwgIiRlZGl0Rm9ybSIsICJmaW5kIiwgInRleHRTZWxlY3Rpb24iLCAiZ2V0V3BTdW1tYXJ5Q29udGVudCIsICJfJGVkaXRGb3JtJGZpbmQkdmFsIiwgIl8kZWRpdEZvcm0kZmluZCIsICJ2YWwiLCAic2V0V3BUZXh0Ym94MUNvbnRlbnQiLCAiY29udGVudCIsICJzZXRXcFN1bW1hcnlDb250ZW50IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldENhY2hlS2V5IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJ3Z1BhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2FjaGVLZXkiLCAiY29uY2F0IiwgInNlY3Rpb24iLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJ2YWx1ZSIsICJuZXdTYXZlT2JqZWN0IiwgInNhdmVPYmplY3QiLCAiZGF0ZSIsICJEYXRlIiwgIndwU3VtbWFyeSIsICJ3cFRleHRib3gxIiwgInNldENhY2hlIiwgInN0b3JhZ2UiLCAic2V0T2JqZWN0IiwgInRvYXN0aWZ5IiwgInRleHQiLCAiY2xvc2UiLCAiZHVyYXRpb24iLCAiZ3Jhdml0eSIsICJwb3NpdGlvbiIsICJlcnJvciIsICJjb25zb2xlIiwgImdldENhY2hlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAic2V0IiwgImdldE9iamVjdCIsICJjb25maXJtIiwgIk9PIiwgInVpIiwgImFjdGlvbnMiLCAibGFiZWwiLCAiYWN0aW9uIiwgImZsYWdzIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJhdXRvU2V0Q2FjaGUiLCAiX3JlZjIiLCAiZGVsYXkiLCAiX3gyIiwgInNldENhY2hlQmVmb3JlU3VibWl0IiwgIm9uIiwgImhvb2siLCAiYWRkIiwgIl9yZWYzIiwgIl94MyJdCn0K
