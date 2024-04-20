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
//! src/Wikicache/modules/wpTextbox1Content.ts
var getWpTextbox1Content = ({
  $editForm
}) => {
  return $editForm.find("textarea[name=wpTextbox1]").textSelection("getContents");
};
var setWpTextbox1Content = ({
  $editForm,
  content
}) => {
  $editForm.find("textarea[name=wpTextbox1]").textSelection("setContents", content);
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
    const wpSummary = document.querySelector("input[name=wpSummary]");
    if (saveObject["input[name=wpSummary]"] && wpSummary) {
      wpSummary.value = saveObject["input[name=wpSummary]"];
    }
    if (saveObject["textarea[name=wpTextbox1]"] && !(getWpTextbox1Content({
      $editForm
    }) === saveObject["textarea[name=wpTextbox1]"])) {
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
          content: saveObject["textarea[name=wpTextbox1]"]
        });
      }
    }
  });
  return function getCache2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var setCache = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* ({
    $editForm
  }) {
    while (true) {
      var _document$querySelect2;
      yield (0, import_ext_gadget2.delay)(30 * 1e3);
      const newSaveObject = {
        date: /* @__PURE__ */ new Date(),
        "input[name=wpSummary]": "".concat((_document$querySelect2 = document.querySelector("input[name=wpSummary]")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.value),
        "textarea[name=wpTextbox1]": getWpTextbox1Content({
          $editForm
        })
      };
      try {
        mw.storage.setObject(getCacheKey(), newSaveObject, 60 * 60 * 24 * 30 * 1e3);
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
    }
  });
  return function setCache2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/Wikicache/Wikicache.ts
mw.hook("wikipage.editform").add(/* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* ($editForm) {
    yield getCache({
      $editForm
    });
    yield setCache({
      $editForm
    });
  });
  return function(_x3) {
    return _ref3.apply(this, arguments);
  };
}());

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2ljYWNoZS9vcHRpb25zLmpzb24iLCAic3JjL1dpa2ljYWNoZS9tb2R1bGVzL3dwVGV4dGJveDFDb250ZW50LnRzIiwgInNyYy9XaWtpY2FjaGUvbW9kdWxlcy9jYWNoZS50cyIsICJzcmMvV2lraWNhY2hlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvV2lraWNhY2hlL1dpa2ljYWNoZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1XaWtpY2FjaGVfX0luaXRpYWxpemVkXCIsXG5cdFwiY2FjaGVLZXlQcmVmaXhcIjogXCJ3aWtpY2FjaGUtYXV0b3NhdmUtXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiY29uc3QgZ2V0V3BUZXh0Ym94MUNvbnRlbnQgPSAoeyRlZGl0Rm9ybX06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD59KSA9PiB7XG5cdHJldHVybiAkZWRpdEZvcm0uZmluZCgndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpLnRleHRTZWxlY3Rpb24oJ2dldENvbnRlbnRzJyk7XG59O1xuXG5jb25zdCBzZXRXcFRleHRib3gxQ29udGVudCA9ICh7JGVkaXRGb3JtLCBjb250ZW50fTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50PjsgY29udGVudDogc3RyaW5nfSkgPT4ge1xuXHQkZWRpdEZvcm0uZmluZCgndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpLnRleHRTZWxlY3Rpb24oJ3NldENvbnRlbnRzJywgY29udGVudCk7XG59O1xuXG5leHBvcnQge2dldFdwVGV4dGJveDFDb250ZW50LCBzZXRXcFRleHRib3gxQ29udGVudH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRXcFRleHRib3gxQ29udGVudCwgc2V0V3BUZXh0Ym94MUNvbnRlbnR9IGZyb20gJy4vd3BUZXh0Ym94MUNvbnRlbnQnO1xuaW1wb3J0IHtBdXRvU2F2ZU9iamVjdH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2RlbGF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IGdldENhY2hlS2V5ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxldCBjYWNoZUtleTogc3RyaW5nID0gYCR7T1BUSU9OUy5jYWNoZUtleVByZWZpeH0ke3dnUGFnZU5hbWV9YDtcblx0Y29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9d3BTZWN0aW9uXScpPy52YWx1ZTtcblx0aWYgKHNlY3Rpb24pIHtcblx0XHRjYWNoZUtleSArPSBgIyR7c2VjdGlvbn1gO1xuXHR9XG5cblx0cmV0dXJuIGNhY2hlS2V5O1xufTtcblxuY29uc3QgZ2V0Q2FjaGUgPSBhc3luYyAoeyRlZGl0Rm9ybX06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD59KSA9PiB7XG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdGNvbnN0IHNhdmVPYmplY3Q6IFBhcnRpYWw8QXV0b1NhdmVPYmplY3Q+ID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoZ2V0Q2FjaGVLZXkoKSk7XG5cblx0aWYgKCFzYXZlT2JqZWN0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgd3BTdW1tYXJ5OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9d3BTdW1tYXJ5XScpO1xuXHRpZiAoc2F2ZU9iamVjdFsnaW5wdXRbbmFtZT13cFN1bW1hcnldJ10gJiYgd3BTdW1tYXJ5KSB7XG5cdFx0d3BTdW1tYXJ5LnZhbHVlID0gc2F2ZU9iamVjdFsnaW5wdXRbbmFtZT13cFN1bW1hcnldJ107XG5cdH1cblxuXHRpZiAoXG5cdFx0c2F2ZU9iamVjdFsndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXSddICYmXG5cdFx0IShnZXRXcFRleHRib3gxQ29udGVudCh7JGVkaXRGb3JtfSkgPT09IHNhdmVPYmplY3RbJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nXSlcblx0KSB7XG5cdFx0Y29uc3QgY29uZmlybSA9IGF3YWl0IE9PLnVpLmNvbmZpcm0oZ2V0TWVzc2FnZSgnUmVzdG9yZSBjaGFuZ2VzPycpLCB7XG5cdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdHtsYWJlbDogZ2V0TWVzc2FnZSgnUmVzdG9yZSB1bnNhdmVkIGNoYW5nZXMnKSwgYWN0aW9uOiAnYWNjZXB0JywgZmxhZ3M6IFsncHJvZ3Jlc3NpdmUnXX0sXG5cdFx0XHRcdHtsYWJlbDogZ2V0TWVzc2FnZSgnTm90IHRvIHJlc3RvcmUnKSwgYWN0aW9uOiAnY2FuY2VsJywgZmxhZ3M6IFsnZGVzdHJ1Y3RpdmUnXX0sXG5cdFx0XHRdLFxuXHRcdH0pO1xuXHRcdGlmIChjb25maXJtKSB7XG5cdFx0XHRzZXRXcFRleHRib3gxQ29udGVudCh7JGVkaXRGb3JtLCBjb250ZW50OiBzYXZlT2JqZWN0Wyd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJ119KTtcblx0XHR9XG5cdH1cbn07XG5cbmNvbnN0IHNldENhY2hlID0gYXN5bmMgKHskZWRpdEZvcm19OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+fSkgPT4ge1xuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGF3YWl0IGRlbGF5KDMwICogMTAwMCk7XG5cdFx0Y29uc3QgbmV3U2F2ZU9iamVjdDogQXV0b1NhdmVPYmplY3QgPSB7XG5cdFx0XHRkYXRlOiBuZXcgRGF0ZSgpLFxuXHRcdFx0J2lucHV0W25hbWU9d3BTdW1tYXJ5XSc6IGAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9d3BTdW1tYXJ5XScpPy52YWx1ZX1gLFxuXHRcdFx0J3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nOiBnZXRXcFRleHRib3gxQ29udGVudCh7JGVkaXRGb3JtfSksXG5cdFx0fTtcblx0XHR0cnkge1xuXHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoZ2V0Q2FjaGVLZXkoKSwgbmV3U2F2ZU9iamVjdCwgNjAgKiA2MCAqIDI0ICogMzAgKiAxMDAwKTtcblx0XHRcdHRvYXN0aWZ5KHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnQ2hhbmdlIHNhdmVkJyksXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogMTAgKiAxMDAwLFxuXHRcdFx0XHRncmF2aXR5OiAndG9wJyxcblx0XHRcdFx0cG9zaXRpb246ICdyaWdodCcsXG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2dldENhY2hlLCBzZXRDYWNoZX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdDaGFuZ2Ugc2F2ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQgY29udGVudCBzYXZlZCB0byBsb2NhbCBzdG9yYWdlIHN1Y2Nlc3NmdWxseScsXG5cdFx0XHQnemgtaGFucyc6ICfnvJbovpHlhoXlrrnlt7LmiJDlip/kv53lrZjoh7PmnKzlnLDlrZjlgqgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57eo6Lyv5YWn5a655bey5oiQ5Yqf5YSy5a2Y6Iez5pys5Zyw5YSy5a2YJyxcblx0XHR9KSxcblx0XHQnUmVzdG9yZSBjaGFuZ2VzPyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91ciB1bnNhdmVkIGNoYWdlcyBoYXZlIGJlZW4gc2F2ZWQgdG8geW91ciBsb2NhbCBzdG9yYWdlLiBSZXN0b3JlIGNoYW5nZXM/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFiOWJjeacquS/neWtmOeahOe8lui+keWGheWuueW3suWtmOWCqOS6juacrOWcsOWtmOWCqOOAguaYr+WQpuaBouWkjeWFiOWJjeacquS/neWtmOeahOe8lui+keWGheWuue+8nycsXG5cdFx0XHQnemgtaGFudCc6ICflhYjliY3mnKrkv53lrZjnmoTnt6jovK/lhaflrrnlt7LlhLLlrZjkuo7mnKzlnLDlhLLlrZjjgILmmK/lkKbmgaLlvqnlhYjliY3mnKrkv53lrZjnmoTnt6jovK/lhaflrrnvvJ8nLFxuXHRcdH0pLFxuXHRcdCdSZXN0b3JlIHVuc2F2ZWQgY2hhbmdlcyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVzdG9yZScsXG5cdFx0XHQnemgtaGFucyc6ICfmgaLlpI0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5oGi5b6pJyxcblx0XHR9KSxcblx0XHQnTm90IHRvIHJlc3RvcmUnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05vdCB0byByZXN0b3JlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4jeaBouWkjScsXG5cdFx0XHQnemgtaGFudCc6ICfkuI3mgaLlvqknLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRDYWNoZSwgc2V0Q2FjaGV9IGZyb20gJy4vbW9kdWxlcy9jYWNoZSc7XG5cbm13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKGFzeW5jICgkZWRpdEZvcm0pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0YXdhaXQgZ2V0Q2FjaGUoeyRlZGl0Rm9ybX0pO1xuXHRhd2FpdCBzZXRDYWNoZSh7JGVkaXRGb3JtfSk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxZQUFhO0FBQ2IsSUFBQUMsaUJBQWtCOztBQ0ZuQixJQUFNQyx1QkFBdUJBLENBQUM7RUFBQ0M7QUFBUyxNQUF3QztBQUMvRSxTQUFPQSxVQUFVQyxLQUFLLDJCQUEyQixFQUFFQyxjQUFjLGFBQWE7QUFDL0U7QUFFQSxJQUFNQyx1QkFBdUJBLENBQUM7RUFBQ0g7RUFBV0k7QUFBTyxNQUF5RDtBQUN6R0osWUFBVUMsS0FBSywyQkFBMkIsRUFBRUMsY0FBYyxlQUFlRSxPQUFPO0FBQ2pGOztBQ0hBLElBQUFDLHFCQUFvQkMsUUFBQSxpQkFBQTs7QUNIcEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04saUJBQUEsR0FBZ0JELGtCQUFBRSxVQUFTO01BQ3hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QscUJBQUEsR0FBb0JILGtCQUFBRSxVQUFTO01BQzVCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QsNEJBQUEsR0FBMkJILGtCQUFBRSxVQUFTO01BQ25DQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QsbUJBQUEsR0FBa0JILGtCQUFBRSxVQUFTO01BQzFCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtB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QUFBQSxTQUFBLFNBckJNZCxVQUFBZ0IsS0FBQTtBQUFBLFdBQUFmLE1BQUFILE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUVsRE4xQixHQUFHNEMsS0FBSyxtQkFBbUIsRUFBRUMsSUFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUFuQyxrQkFBSSxXQUFPN0IsV0FBNkI7QUFDcEUsVUFBTTJCLFNBQVM7TUFBQzNCO0lBQVMsQ0FBQztBQUMxQixVQUFNNkMsU0FBUztNQUFDN0M7SUFBUyxDQUFDO0VBQzNCLENBQUM7QUFBQSxTQUFBLFNBQUFpRSxLQUFBO0FBQUEsV0FBQUQsTUFBQXJCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQSxDQUFBOyIsCiAgIm5hbWVzIjogWyJjb25maWdLZXkiLCAiY2FjaGVLZXlQcmVmaXgiLCAiZ2V0V3BUZXh0Ym94MUNvbnRlbnQiLCAiJGVkaXRGb3JtIiwgImZpbmQiLCAidGV4dFNlbGVjdGlvbiIsICJzZXRXcFRleHRib3gxQ29udGVudCIsICJjb250ZW50IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldENhY2hlS2V5IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJ3Z1BhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2FjaGVLZXkiLCAiY29uY2F0IiwgInNlY3Rpb24iLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJ2YWx1ZSIsICJnZXRDYWNoZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInNldCIsICJzYXZlT2JqZWN0IiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgIndwU3VtbWFyeSIsICJjb25maXJtIiwgIk9PIiwgInVpIiwgImFjdGlvbnMiLCAibGFiZWwiLCAiYWN0aW9uIiwgImZsYWdzIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJzZXRDYWNoZSIsICJfcmVmMiIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QyIiwgImRlbGF5IiwgIm5ld1NhdmVPYmplY3QiLCAiZGF0ZSIsICJEYXRlIiwgInNldE9iamVjdCIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImNsb3NlIiwgImR1cmF0aW9uIiwgImdyYXZpdHkiLCAicG9zaXRpb24iLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeDIiLCAiaG9vayIsICJhZGQiLCAiX3JlZjMiLCAiX3gzIl0KfQo=
