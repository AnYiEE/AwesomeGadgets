/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Group-transwiki_JS}
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

// dist/Group-importer_JS/Group-importer_JS.js
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
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
//! src/Group-importer_JS/options.json
var options_exports = {};
__export(options_exports, {
  configKey: () => configKey,
  default: () => options_default
});
var configKey = "gadget-Group-importer_JS__Initialized";
var options_default = {
  configKey
};
//! src/Group-importer_JS/modules/fixCheckbox.ts
var fixCheckbox = () => {
  const {
    wgCanonicalSpecialPageName,
    wgWikiID
  } = mw.config.get();
  if (wgCanonicalSpecialPageName !== "Import") {
    return;
  }
  const interwikiHistory = document.querySelector("input[name=interwikiHistory]");
  const interwikiTemplates = document.querySelector("input[name=interwikiTemplates]");
  if (interwikiHistory) {
    interwikiHistory.checked = false;
  }
  if (interwikiTemplates) {
    interwikiTemplates.checked = false;
  }
  if (wgWikiID === "wiki-ysy") {
    if (interwikiHistory) {
      interwikiHistory.disabled = true;
    }
    if (interwikiTemplates) {
      interwikiTemplates.disabled = true;
    }
  }
  const form = document.querySelector("#mw-import-interwiki-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      void _asyncToGenerator(function* () {
        if (!interwikiHistory || !interwikiHistory.checked) {
          return;
        }
        const confirmed = yield OO.ui.confirm("您是否要导入此页面的所有版本？");
        if (!confirmed) {
          interwikiHistory.checked = false;
        }
      })().then(/* @__PURE__ */ _asyncToGenerator(function* () {
        if (!interwikiTemplates || !interwikiTemplates.checked) {
          return;
        }
        const confirmed = yield OO.ui.confirm("您是否要导入此页面所包含的所有模板和其他页面？");
        if (!confirmed) {
          interwikiTemplates.checked = false;
        }
      })).then(() => {
        form.submit();
      });
    });
  }
};
//! src/Group-importer_JS/modules/fixSummary.ts
var fixSummary = () => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName === "Import") {
    const defaultSummary = "页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史";
    const defaultFileImportSummary = "".concat(defaultSummary, "；文件作者请参见此页面及来源页面记载");
    const userNamePrefixInput = document.querySelector("#mw-import-upload-form input[name=usernamePrefix]");
    if (userNamePrefixInput) {
      userNamePrefixInput.addEventListener("input", () => {
        const uploadLogCommentInput = document.querySelector("#mw-import-upload-form input[name=log-comment]");
        if (!uploadLogCommentInput) {
          return;
        }
        const importUploadPrefix = userNamePrefixInput === null || userNamePrefixInput === void 0 ? void 0 : userNamePrefixInput.value;
        uploadLogCommentInput.value = "导入自[[".concat(importUploadPrefix, ":|此网站]]的同名页面［").concat(importUploadPrefix === "commons" ? defaultFileImportSummary : defaultSummary, "］");
      });
    }
    const interwikiLogCommentInput = document.querySelector("#mw-import-interwiki-form input[name=log-comment]");
    const interwikiPrefixSelect = document.querySelector("#mw-import-interwiki-form select[name=interwiki]");
    if (interwikiLogCommentInput) {
      interwikiLogCommentInput.value = defaultSummary;
      if (interwikiPrefixSelect) {
        interwikiPrefixSelect.addEventListener("change", () => {
          switch (interwikiPrefixSelect.value) {
            case "commons":
              interwikiLogCommentInput.value = "［".concat(defaultFileImportSummary, "］");
              break;
            default:
              interwikiLogCommentInput.value = "［".concat(defaultSummary, "］");
              break;
          }
        });
      }
    }
    const assignKnownUsers = document.querySelectorAll("input[name=assignKnownUsers]");
    if (assignKnownUsers.length) {
      var _iterator = _createForOfIteratorHelper(assignKnownUsers), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const checkBox = _step.value;
          checkBox.checked = true;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }
};
//! src/Group-importer_JS/Group-importer_JS.ts
(function userJS() {
  const {
    configKey: configKey2
  } = options_exports;
  if (mw.config.get(configKey2)) {
    return;
  }
  mw.config.set(configKey2, true);
  fixCheckbox();
  fixSummary();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dyb3VwLWltcG9ydGVyX0pTL29wdGlvbnMuanNvbiIsICJzcmMvR3JvdXAtaW1wb3J0ZXJfSlMvbW9kdWxlcy9maXhDaGVja2JveC50cyIsICJzcmMvR3JvdXAtaW1wb3J0ZXJfSlMvbW9kdWxlcy9maXhTdW1tYXJ5LnRzIiwgInNyYy9Hcm91cC1pbXBvcnRlcl9KUy9Hcm91cC1pbXBvcnRlcl9KUy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1Hcm91cC1pbXBvcnRlcl9KU19fSW5pdGlhbGl6ZWRcIlxufVxuIiwgImNvbnN0IGZpeENoZWNrYm94ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnV2lraUlEfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdJbXBvcnQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaW50ZXJ3aWtpSGlzdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9aW50ZXJ3aWtpSGlzdG9yeV0nKTtcblx0Y29uc3QgaW50ZXJ3aWtpVGVtcGxhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1pbnRlcndpa2lUZW1wbGF0ZXNdJyk7XG5cblx0aWYgKGludGVyd2lraUhpc3RvcnkpIHtcblx0XHRpbnRlcndpa2lIaXN0b3J5LmNoZWNrZWQgPSBmYWxzZTtcblx0fVxuXG5cdGlmIChpbnRlcndpa2lUZW1wbGF0ZXMpIHtcblx0XHRpbnRlcndpa2lUZW1wbGF0ZXMuY2hlY2tlZCA9IGZhbHNlO1xuXHR9XG5cblx0aWYgKHdnV2lraUlEID09PSAnd2lraS15c3knKSB7XG5cdFx0aWYgKGludGVyd2lraUhpc3RvcnkpIHtcblx0XHRcdGludGVyd2lraUhpc3RvcnkuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChpbnRlcndpa2lUZW1wbGF0ZXMpIHtcblx0XHRcdGludGVyd2lraVRlbXBsYXRlcy5kaXNhYmxlZCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEZvcm1FbGVtZW50PignI213LWltcG9ydC1pbnRlcndpa2ktZm9ybScpO1xuXG5cdGlmIChmb3JtKSB7XG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQ6IFN1Ym1pdEV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRpZiAoIWludGVyd2lraUhpc3RvcnkgfHwgIWludGVyd2lraUhpc3RvcnkuY2hlY2tlZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBjb25maXJtZWQgPSBhd2FpdCBPTy51aS5jb25maXJtKCfmgqjmmK/lkKbopoHlr7zlhaXmraTpobXpnaLnmoTmiYDmnInniYjmnKzvvJ8nKTtcblx0XHRcdFx0aWYgKCFjb25maXJtZWQpIHtcblx0XHRcdFx0XHRpbnRlcndpa2lIaXN0b3J5LmNoZWNrZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSkoKVxuXHRcdFx0XHQudGhlbihhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKCFpbnRlcndpa2lUZW1wbGF0ZXMgfHwgIWludGVyd2lraVRlbXBsYXRlcy5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IGNvbmZpcm1lZCA9IGF3YWl0IE9PLnVpLmNvbmZpcm0oJ+aCqOaYr+WQpuimgeWvvOWFpeatpOmhtemdouaJgOWMheWQq+eahOaJgOacieaooeadv+WSjOWFtuS7lumhtemdou+8nycpO1xuXHRcdFx0XHRcdGlmICghY29uZmlybWVkKSB7XG5cdFx0XHRcdFx0XHRpbnRlcndpa2lUZW1wbGF0ZXMuY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdGZvcm0uc3VibWl0KCk7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge2ZpeENoZWNrYm94fTtcbiIsICJjb25zdCBmaXhTdW1tYXJ5ID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdJbXBvcnQnKSB7XG5cdFx0Y29uc3QgZGVmYXVsdFN1bW1hcnkgPSAn6aG16Z2i5paH5a2X5Y6f6K645Y+v77yaW1tjYy1ieS1zYTo0LjB8Q0MgQlktU0EgNC4wXV3vvJvkvZzogIXor7flj4Lop4HmnaXmupDpobXpnaLljoblj7InO1xuXHRcdGNvbnN0IGRlZmF1bHRGaWxlSW1wb3J0U3VtbWFyeSA9IGAke2RlZmF1bHRTdW1tYXJ5fe+8m+aWh+S7tuS9nOiAheivt+WPguingeatpOmhtemdouWPiuadpea6kOmhtemdouiusOi9vWA7XG5cblx0XHQvLyAjbXctaW1wb3J0LXVwbG9hZC1mb3JtXG5cdFx0Y29uc3QgdXNlck5hbWVQcmVmaXhJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXG5cdFx0XHQnI213LWltcG9ydC11cGxvYWQtZm9ybSBpbnB1dFtuYW1lPXVzZXJuYW1lUHJlZml4XSdcblx0XHQpO1xuXHRcdGlmICh1c2VyTmFtZVByZWZpeElucHV0KSB7XG5cdFx0XHR1c2VyTmFtZVByZWZpeElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCB1cGxvYWRMb2dDb21tZW50SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFxuXHRcdFx0XHRcdCcjbXctaW1wb3J0LXVwbG9hZC1mb3JtIGlucHV0W25hbWU9bG9nLWNvbW1lbnRdJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoIXVwbG9hZExvZ0NvbW1lbnRJbnB1dCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGltcG9ydFVwbG9hZFByZWZpeCA9IHVzZXJOYW1lUHJlZml4SW5wdXQ/LnZhbHVlO1xuXHRcdFx0XHR1cGxvYWRMb2dDb21tZW50SW5wdXQudmFsdWUgPSBg5a+85YWl6IeqW1ske2ltcG9ydFVwbG9hZFByZWZpeH06fOatpOe9keermV1d55qE5ZCM5ZCN6aG16Z2i77y7JHtpbXBvcnRVcGxvYWRQcmVmaXggPT09ICdjb21tb25zJyA/IGRlZmF1bHRGaWxlSW1wb3J0U3VtbWFyeSA6IGRlZmF1bHRTdW1tYXJ5fe+8vWA7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyAjbXctaW1wb3J0LWludGVyd2lraS1mb3JtXG5cdFx0Y29uc3QgaW50ZXJ3aWtpTG9nQ29tbWVudElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50Pihcblx0XHRcdCcjbXctaW1wb3J0LWludGVyd2lraS1mb3JtIGlucHV0W25hbWU9bG9nLWNvbW1lbnRdJ1xuXHRcdCk7XG5cdFx0Y29uc3QgaW50ZXJ3aWtpUHJlZml4U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oXG5cdFx0XHQnI213LWltcG9ydC1pbnRlcndpa2ktZm9ybSBzZWxlY3RbbmFtZT1pbnRlcndpa2ldJ1xuXHRcdCk7XG5cblx0XHRpZiAoaW50ZXJ3aWtpTG9nQ29tbWVudElucHV0KSB7XG5cdFx0XHRpbnRlcndpa2lMb2dDb21tZW50SW5wdXQudmFsdWUgPSBkZWZhdWx0U3VtbWFyeTtcblxuXHRcdFx0aWYgKGludGVyd2lraVByZWZpeFNlbGVjdCkge1xuXHRcdFx0XHRpbnRlcndpa2lQcmVmaXhTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRcdHN3aXRjaCAoaW50ZXJ3aWtpUHJlZml4U2VsZWN0LnZhbHVlKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdjb21tb25zJzpcblx0XHRcdFx0XHRcdFx0aW50ZXJ3aWtpTG9nQ29tbWVudElucHV0LnZhbHVlID0gYO+8uyR7ZGVmYXVsdEZpbGVJbXBvcnRTdW1tYXJ5fe+8vWA7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0aW50ZXJ3aWtpTG9nQ29tbWVudElucHV0LnZhbHVlID0gYO+8uyR7ZGVmYXVsdFN1bW1hcnl977y9YDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyAjYXNzaWduS25vd25Vc2Vyc1xuXHRcdGNvbnN0IGFzc2lnbktub3duVXNlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPWFzc2lnbktub3duVXNlcnNdJyk7XG5cdFx0aWYgKGFzc2lnbktub3duVXNlcnMubGVuZ3RoKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGNoZWNrQm94IG9mIGFzc2lnbktub3duVXNlcnMpIHtcblx0XHRcdFx0Y2hlY2tCb3guY2hlY2tlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2ZpeFN1bW1hcnl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtmaXhDaGVja2JveH0gZnJvbSAnLi9tb2R1bGVzL2ZpeENoZWNrYm94JztcbmltcG9ydCB7Zml4U3VtbWFyeX0gZnJvbSAnLi9tb2R1bGVzL2ZpeFN1bW1hcnknO1xuXG4oZnVuY3Rpb24gdXNlckpTKCk6IHZvaWQge1xuXHRjb25zdCB7Y29uZmlnS2V5fSA9IE9QVElPTlM7XG5cblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChjb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KGNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Lyog5Y+W5raI5aSN6YCJ5qGGICovXG5cdGZpeENoZWNrYm94KCk7XG5cdC8qIOS/ruaUuee8lui+keaRmOimgSAqL1xuXHRmaXhTdW1tYXJ5KCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQSxDQUFBO0FBQUFDLFNBQUFELGlCQUFBO0VBQUFFLFdBQUFBLE1BQUFBO0VBQUFDLFNBQUFBLE1BQUFDO0FBQUEsQ0FBQTtBQUNDLElBQUFGLFlBQWE7QUFEZCxJQUFBRSxrQkFBQTtFQUNDRjtBQUNEOztBQ0ZBLElBQU1HLGNBQWNBLE1BQU07QUFDekIsUUFBTTtJQUFDQztJQUE0QkM7RUFBUSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRTdELE1BQUlKLCtCQUErQixVQUFVO0FBQzVDO0VBQ0Q7QUFFQSxRQUFNSyxtQkFBbUJDLFNBQVNDLGNBQWdDLDhCQUE4QjtBQUNoRyxRQUFNQyxxQkFBcUJGLFNBQVNDLGNBQWdDLGdDQUFnQztBQUVwRyxNQUFJRixrQkFBa0I7QUFDckJBLHFCQUFpQkksVUFBVTtFQUM1QjtBQUVBLE1BQUlELG9CQUFvQjtBQUN2QkEsdUJBQW1CQyxVQUFVO0VBQzlCO0FBRUEsTUFBSVIsYUFBYSxZQUFZO0FBQzVCLFFBQUlJLGtCQUFrQjtBQUNyQkEsdUJBQWlCSyxXQUFXO0lBQzdCO0FBRUEsUUFBSUYsb0JBQW9CO0FBQ3ZCQSx5QkFBbUJFLFdBQVc7SUFDL0I7RUFDRDtBQUVBLFFBQU1DLE9BQU9MLFNBQVNDLGNBQStCLDJCQUEyQjtBQUVoRixNQUFJSSxNQUFNO0FBQ1RBLFNBQUtDLGlCQUFpQixVQUFXQyxXQUE2QjtBQUM3REEsWUFBTUMsZUFBZTtBQUNyQixXQUFBQyxrQkFBTSxhQUFZO0FBQ2pCLFlBQUksQ0FBQ1Ysb0JBQW9CLENBQUNBLGlCQUFpQkksU0FBUztBQUNuRDtRQUNEO0FBQ0EsY0FBTU8sWUFBQSxNQUFrQkMsR0FBR0MsR0FBR0MsUUFBUSxpQkFBaUI7QUFDdkQsWUFBSSxDQUFDSCxXQUFXO0FBQ2ZYLDJCQUFpQkksVUFBVTtRQUM1QjtNQUNELENBQUEsRUFBRyxFQUNEVyxLQUFBTCxrQ0FBSyxhQUFZO0FBQ2pCLFlBQUksQ0FBQ1Asc0JBQXNCLENBQUNBLG1CQUFtQkMsU0FBUztBQUN2RDtRQUNEO0FBQ0EsY0FBTU8sWUFBQSxNQUFrQkMsR0FBR0MsR0FBR0MsUUFBUSx5QkFBeUI7QUFDL0QsWUFBSSxDQUFDSCxXQUFXO0FBQ2ZSLDZCQUFtQkMsVUFBVTtRQUM5QjtNQUNELENBQUMsQ0FBQSxFQUNBVyxLQUFLLE1BQU07QUFDWFQsYUFBS1UsT0FBTztNQUNiLENBQUM7SUFDSCxDQUFDO0VBQ0Y7QUFDRDs7QUN4REEsSUFBTUMsYUFBYUEsTUFBWTtBQUM5QixRQUFNO0lBQUN0QjtFQUEwQixJQUFJRSxHQUFHQyxPQUFPQyxJQUFJO0FBQ25ELE1BQUlKLCtCQUErQixVQUFVO0FBQzVDLFVBQU11QixpQkFBaUI7QUFDdkIsVUFBTUMsMkJBQUEsR0FBQUMsT0FBOEJGLGdCQUFjLG9CQUFBO0FBR2xELFVBQU1HLHNCQUFzQnBCLFNBQVNDLGNBQ3BDLG1EQUNEO0FBQ0EsUUFBSW1CLHFCQUFxQjtBQUN4QkEsMEJBQW9CZCxpQkFBaUIsU0FBUyxNQUFNO0FBQ25ELGNBQU1lLHdCQUF3QnJCLFNBQVNDLGNBQ3RDLGdEQUNEO0FBQ0EsWUFBSSxDQUFDb0IsdUJBQXVCO0FBQzNCO1FBQ0Q7QUFFQSxjQUFNQyxxQkFBcUJGLHdCQUFBLFFBQUFBLHdCQUFBLFNBQUEsU0FBQUEsb0JBQXFCRztBQUNoREYsOEJBQXNCRSxRQUFBLFFBQUFKLE9BQWdCRyxvQkFBa0IsZUFBQSxFQUFBSCxPQUFnQkcsdUJBQXVCLFlBQVlKLDJCQUEyQkQsZ0JBQWMsR0FBQTtNQUNySixDQUFDO0lBQ0Y7QUFHQSxVQUFNTywyQkFBMkJ4QixTQUFTQyxjQUN6QyxtREFDRDtBQUNBLFVBQU13Qix3QkFBd0J6QixTQUFTQyxjQUN0QyxrREFDRDtBQUVBLFFBQUl1QiwwQkFBMEI7QUFDN0JBLCtCQUF5QkQsUUFBUU47QUFFakMsVUFBSVEsdUJBQXVCO0FBQzFCQSw4QkFBc0JuQixpQkFBaUIsVUFBVSxNQUFNO0FBQ3RELGtCQUFRbUIsc0JBQXNCRixPQUFBO1lBQzdCLEtBQUs7QUFDSkMsdUNBQXlCRCxRQUFBLElBQUFKLE9BQVlELDBCQUF3QixHQUFBO0FBQzdEO1lBQ0Q7QUFDQ00sdUNBQXlCRCxRQUFBLElBQUFKLE9BQVlGLGdCQUFjLEdBQUE7QUFDbkQ7VUFDRjtRQUNELENBQUM7TUFDRjtJQUNEO0FBR0EsVUFBTVMsbUJBQW1CMUIsU0FBUzJCLGlCQUFtQyw4QkFBOEI7QUFDbkcsUUFBSUQsaUJBQWlCRSxRQUFRO0FBQUEsVUFBQUMsWUFBQUMsMkJBQ0xKLGdCQUFBLEdBQUFLO0FBQUEsVUFBQTtBQUF2QixhQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUF5QztBQUFBLGdCQUE5QkMsV0FBQUosTUFBQVI7QUFDVlksbUJBQVNoQyxVQUFVO1FBQ3BCO01BQUEsU0FBQWlDLEtBQUE7QUFBQVAsa0JBQUFRLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUFQLGtCQUFBUyxFQUFBO01BQUE7SUFDRDtFQUNEO0FBQ0Q7O0NDckRDLFNBQVNDLFNBQWU7QUFDeEIsUUFBTTtJQUFDakQsV0FBQWtEO0VBQVMsSUFBSXBEO0FBR3BCLE1BQUlRLEdBQUdDLE9BQU9DLElBQUkwQyxVQUFTLEdBQUc7QUFDN0I7RUFDRDtBQUVBNUMsS0FBR0MsT0FBTzRDLElBQUlELFlBQVcsSUFBSTtBQUc3Qi9DLGNBQVk7QUFFWnVCLGFBQVc7QUFDWixHQUFHOyIsCiAgIm5hbWVzIjogWyJvcHRpb25zX2V4cG9ydHMiLCAiX19leHBvcnQiLCAiY29uZmlnS2V5IiwgImRlZmF1bHQiLCAib3B0aW9uc19kZWZhdWx0IiwgImZpeENoZWNrYm94IiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnV2lraUlEIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaW50ZXJ3aWtpSGlzdG9yeSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImludGVyd2lraVRlbXBsYXRlcyIsICJjaGVja2VkIiwgImRpc2FibGVkIiwgImZvcm0iLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJjb25maXJtZWQiLCAiT08iLCAidWkiLCAiY29uZmlybSIsICJ0aGVuIiwgInN1Ym1pdCIsICJmaXhTdW1tYXJ5IiwgImRlZmF1bHRTdW1tYXJ5IiwgImRlZmF1bHRGaWxlSW1wb3J0U3VtbWFyeSIsICJjb25jYXQiLCAidXNlck5hbWVQcmVmaXhJbnB1dCIsICJ1cGxvYWRMb2dDb21tZW50SW5wdXQiLCAiaW1wb3J0VXBsb2FkUHJlZml4IiwgInZhbHVlIiwgImludGVyd2lraUxvZ0NvbW1lbnRJbnB1dCIsICJpbnRlcndpa2lQcmVmaXhTZWxlY3QiLCAiYXNzaWduS25vd25Vc2VycyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImxlbmd0aCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiY2hlY2tCb3giLCAiZXJyIiwgImUiLCAiZiIsICJ1c2VySlMiLCAiY29uZmlnS2V5MiIsICJzZXQiXQp9Cg==
