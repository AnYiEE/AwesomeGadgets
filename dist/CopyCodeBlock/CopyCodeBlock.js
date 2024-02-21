/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/User:Nardog/CopyCodeBlock.js}
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/CopyCodeBlock}
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

// dist/CopyCodeBlock/CopyCodeBlock.js
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
//! src/CopyCodeBlock/modules/constant.ts
var CLASS_NAME = "gadget-copy_code_block";
var CLASS_NAME_COPY_BUTTON = "".concat(CLASS_NAME, "__copy-button");
//! src/CopyCodeBlock/modules/addCopyListener.ts
var import_ext_gadget2 = require("ext.gadget.Clipboard");
//! src/CopyCodeBlock/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Copy: (0, import_ext_gadget.localize)({
      en: "Copy to clipboard",
      ja: "クリップボードにコピー",
      "zh-hans": "复制至剪贴板",
      "zh-hant": "拷貝至剪貼簿"
    }),
    Copied: (0, import_ext_gadget.localize)({
      en: "Copied",
      ja: "コピーが成功しました",
      "zh-hans": "已复制",
      "zh-hant": "已拷貝"
    }),
    Failed: (0, import_ext_gadget.localize)({
      en: "Copy failed",
      ja: "コピーに失敗しました",
      "zh-hans": "复制失败",
      "zh-hant": "拷貝失敗"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/CopyCodeBlock/modules/addCopyListener.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
var addCopyListener = ($pres) => {
  var _iterator = _createForOfIteratorHelper($pres), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const pre = _step.value;
      const clipboard = new import_ext_gadget2.Clipboard(pre.querySelector(".".concat(CLASS_NAME_COPY_BUTTON)), {
        text: () => {
          var _pre$textContent;
          return (_pre$textContent = pre.textContent) !== null && _pre$textContent !== void 0 ? _pre$textContent : "";
        }
      });
      clipboard.on("success", () => {
        (0, import_ext_gadget3.toastify)({
          text: getMessage("Copied")
        }, "success");
      });
      clipboard.on("error", () => {
        (0, import_ext_gadget3.toastify)({
          text: getMessage("Failed")
        }, "error");
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
//! src/CopyCodeBlock/modules/addButton.ts
var import_ext_gadget4 = require("ext.gadget.Tippy");
var addButton = ($pres) => {
  const copyButton = new OO.ui.ButtonWidget({
    classes: [CLASS_NAME_COPY_BUTTON],
    framed: false,
    icon: "copy"
  });
  const $copyButton = copyButton.$element;
  $copyButton.attr("aria-label", getMessage("Copy"));
  $pres.addClass(CLASS_NAME).append($copyButton);
  (0, import_ext_gadget4.tippy)($copyButton.get(0), {
    arrow: true,
    content: $copyButton.attr("aria-label"),
    placement: "bottom"
  });
  addCopyListener($pres);
};
//! src/CopyCodeBlock/CopyCodeBlock.ts
mw.hook("wikipage.content").add(($content) => {
  const $pres = $content.find("pre");
  if (!$pres.length) {
    return;
  }
  addButton($pres);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvQ29weUNvZGVCbG9jay9tb2R1bGVzL2FkZENvcHlMaXN0ZW5lci50cyIsICJzcmMvQ29weUNvZGVCbG9jay9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9hZGRCdXR0b24udHMiLCAic3JjL0NvcHlDb2RlQmxvY2svQ29weUNvZGVCbG9jay50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1jb3B5X2NvZGVfYmxvY2snO1xuY29uc3QgQ0xBU1NfTkFNRV9DT1BZX0JVVFRPTjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX1fX2NvcHktYnV0dG9uYDtcblxuZXhwb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0NPUFlfQlVUVE9OfTtcbiIsICJpbXBvcnQge0NMQVNTX05BTUVfQ09QWV9CVVRUT059IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtDbGlwYm9hcmR9IGZyb20gJ2V4dC5nYWRnZXQuQ2xpcGJvYXJkJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBhZGRDb3B5TGlzdGVuZXIgPSAoJHByZXM6IEpRdWVyeTxIVE1MUHJlRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Zm9yIChjb25zdCBwcmUgb2YgJHByZXMpIHtcblx0XHRjb25zdCBjbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkKHByZS5xdWVyeVNlbGVjdG9yKGAuJHtDTEFTU19OQU1FX0NPUFlfQlVUVE9OfWApIGFzIEhUTUxTcGFuRWxlbWVudCwge1xuXHRcdFx0dGV4dDogKCk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdHJldHVybiBwcmUudGV4dENvbnRlbnQgPz8gJyc7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdGNsaXBib2FyZC5vbignc3VjY2VzcycsICgpOiB2b2lkID0+IHtcblx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnQ29waWVkJyksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdzdWNjZXNzJ1xuXHRcdFx0KTtcblx0XHR9KTtcblx0XHRjbGlwYm9hcmQub24oJ2Vycm9yJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdGYWlsZWQnKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2Vycm9yJ1xuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHthZGRDb3B5TGlzdGVuZXJ9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDb3B5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHkgdG8gY2xpcGJvYXJkJyxcblx0XHRcdGphOiAn44Kv44Oq44OD44OX44Oc44O844OJ44Gr44Kz44OU44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItuiHs+WJqui0tOadvycsXG5cdFx0XHQnemgtaGFudCc6ICfmi7fosp3oh7PliarosrznsL8nLFxuXHRcdH0pLFxuXHRcdENvcGllZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3BpZWQnLFxuXHRcdFx0amE6ICfjgrPjg5Tjg7zjgYzmiJDlip/jgZfjgb7jgZfjgZ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5aSN5Yi2Jyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suaLt+iynScsXG5cdFx0fSksXG5cdFx0RmFpbGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHkgZmFpbGVkJyxcblx0XHRcdGphOiAn44Kz44OU44O844Gr5aSx5pWX44GX44G+44GX44GfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItuWksei0pScsXG5cdFx0XHQnemgtaGFudCc6ICfmi7fosp3lpLHmlZcnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge0NMQVNTX05BTUUsIENMQVNTX05BTUVfQ09QWV9CVVRUT059IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHthZGRDb3B5TGlzdGVuZXJ9IGZyb20gJy4vYWRkQ29weUxpc3RlbmVyJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCBhZGRCdXR0b24gPSAoJHByZXM6IEpRdWVyeTxIVE1MUHJlRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0Y29uc3QgY29weUJ1dHRvbjogT08udWkuQnV0dG9uV2lkZ2V0ID0gbmV3IE9PLnVpLkJ1dHRvbldpZGdldCh7XG5cdFx0Y2xhc3NlczogW0NMQVNTX05BTUVfQ09QWV9CVVRUT05dLFxuXHRcdGZyYW1lZDogZmFsc2UsXG5cdFx0aWNvbjogJ2NvcHknLFxuXHR9KTtcblx0Y29uc3QgJGNvcHlCdXR0b246IEpRdWVyeSA9IGNvcHlCdXR0b24uJGVsZW1lbnQ7XG5cblx0JGNvcHlCdXR0b24uYXR0cignYXJpYS1sYWJlbCcsIGdldE1lc3NhZ2UoJ0NvcHknKSk7XG5cblx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0JHByZXMuYWRkQ2xhc3MoQ0xBU1NfTkFNRSkuYXBwZW5kKCRjb3B5QnV0dG9uKTtcblxuXHR0aXBweSgkY29weUJ1dHRvbi5nZXQoMCkgYXMgSFRNTFNwYW5FbGVtZW50LCB7XG5cdFx0YXJyb3c6IHRydWUsXG5cdFx0Y29udGVudDogJGNvcHlCdXR0b24uYXR0cignYXJpYS1sYWJlbCcpIGFzIHN0cmluZyxcblx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHR9KTtcblxuXHRhZGRDb3B5TGlzdGVuZXIoJHByZXMpO1xufTtcblxuZXhwb3J0IHthZGRCdXR0b259O1xuIiwgImltcG9ydCB7YWRkQnV0dG9ufSBmcm9tICcuL21vZHVsZXMvYWRkQnV0dG9uJztcblxubXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZCgoJGNvbnRlbnQpOiB2b2lkID0+IHtcblx0Y29uc3QgJHByZXM6IEpRdWVyeTxIVE1MUHJlRWxlbWVudD4gPSAkY29udGVudC5maW5kKCdwcmUnKTtcblx0aWYgKCEkcHJlcy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhZGRCdXR0b24oJHByZXMpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGFBQXFCO0FBQzNCLElBQU1DLHlCQUFBLEdBQUFDLE9BQW9DRixZQUFVLGVBQUE7O0FDQXBELElBQUFHLHFCQUF3QkMsUUFBQSxzQkFBQTs7QUNEeEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLE9BQUEsR0FBTUYsa0JBQUFHLFVBQVM7TUFDZEMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFNBQUEsR0FBUU4sa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxTQUFBLEdBQVFQLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUcsZUFBZVAsZ0JBQWdCO0FBRXJDLElBQU1RLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEMUJBLElBQUFDLHFCQUF1QlosUUFBQSxxQkFBQTtBQUV2QixJQUFNYSxrQkFBbUJDLFdBQXdDO0FBQUEsTUFBQUMsWUFBQUMsMkJBQzlDRixLQUFBLEdBQUFHO0FBQUEsTUFBQTtBQUFsQixTQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUF5QjtBQUFBLFlBQWRDLE1BQUFKLE1BQUFLO0FBQ1YsWUFBTUMsWUFBWSxJQUFJeEIsbUJBQUF5QixVQUFVSCxJQUFJSSxjQUFBLElBQUEzQixPQUFrQkQsc0JBQXNCLENBQUUsR0FBc0I7UUFDbkc2QixNQUFNQSxNQUFjO0FBQUEsY0FBQUM7QUFDbkIsa0JBQUFBLG1CQUFPTixJQUFJTyxpQkFBQSxRQUFBRCxxQkFBQSxTQUFBQSxtQkFBZTtRQUMzQjtNQUNELENBQUM7QUFDREosZ0JBQVVNLEdBQUcsV0FBVyxNQUFZO0FBQ25DLFNBQUEsR0FBQWpCLG1CQUFBa0IsVUFDQztVQUNDSixNQUFNaEIsV0FBVyxRQUFRO1FBQzFCLEdBQ0EsU0FDRDtNQUNELENBQUM7QUFDRGEsZ0JBQVVNLEdBQUcsU0FBUyxNQUFZO0FBQ2pDLFNBQUEsR0FBQWpCLG1CQUFBa0IsVUFDQztVQUNDSixNQUFNaEIsV0FBVyxRQUFRO1FBQzFCLEdBQ0EsT0FDRDtNQUNELENBQUM7SUFDRjtFQUFBLFNBQUFxQixLQUFBO0FBQUFoQixjQUFBaUIsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQWhCLGNBQUFrQixFQUFBO0VBQUE7QUFDRDs7QUUxQkEsSUFBQUMscUJBQW9CbEMsUUFBQSxrQkFBQTtBQUVwQixJQUFNbUMsWUFBYXJCLFdBQXdDO0FBSTFELFFBQU1zQixhQUFpQyxJQUFJQyxHQUFHQyxHQUFHQyxhQUFhO0lBQzdEQyxTQUFTLENBQUMzQyxzQkFBc0I7SUFDaEM0QyxRQUFRO0lBQ1JDLE1BQU07RUFDUCxDQUFDO0FBQ0QsUUFBTUMsY0FBc0JQLFdBQVdRO0FBRXZDRCxjQUFZRSxLQUFLLGNBQWNuQyxXQUFXLE1BQU0sQ0FBQztBQUtqREksUUFBTWdDLFNBQVNsRCxVQUFVLEVBQUVtRCxPQUFPSixXQUFXO0FBRTdDLEdBQUEsR0FBQVQsbUJBQUFjLE9BQU1MLFlBQVlNLElBQUksQ0FBQyxHQUFzQjtJQUM1Q0MsT0FBTztJQUNQQyxTQUFTUixZQUFZRSxLQUFLLFlBQVk7SUFDdENPLFdBQVc7RUFDWixDQUFDO0FBRUR2QyxrQkFBZ0JDLEtBQUs7QUFDdEI7O0FDNUJBdUMsR0FBR0MsS0FBSyxrQkFBa0IsRUFBRUMsSUFBS0MsY0FBbUI7QUFDbkQsUUFBTTFDLFFBQWdDMEMsU0FBU0MsS0FBSyxLQUFLO0FBQ3pELE1BQUksQ0FBQzNDLE1BQU00QyxRQUFRO0FBQ2xCO0VBQ0Q7QUFFQXZCLFlBQVVyQixLQUFLO0FBQ2hCLENBQUM7IiwKICAibmFtZXMiOiBbIkNMQVNTX05BTUUiLCAiQ0xBU1NfTkFNRV9DT1BZX0JVVFRPTiIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNvcHkiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQ29waWVkIiwgIkZhaWxlZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFkZENvcHlMaXN0ZW5lciIsICIkcHJlcyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAicHJlIiwgInZhbHVlIiwgImNsaXBib2FyZCIsICJDbGlwYm9hcmQiLCAicXVlcnlTZWxlY3RvciIsICJ0ZXh0IiwgIl9wcmUkdGV4dENvbnRlbnQiLCAidGV4dENvbnRlbnQiLCAib24iLCAidG9hc3RpZnkiLCAiZXJyIiwgImUiLCAiZiIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYWRkQnV0dG9uIiwgImNvcHlCdXR0b24iLCAiT08iLCAidWkiLCAiQnV0dG9uV2lkZ2V0IiwgImNsYXNzZXMiLCAiZnJhbWVkIiwgImljb24iLCAiJGNvcHlCdXR0b24iLCAiJGVsZW1lbnQiLCAiYXR0ciIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAidGlwcHkiLCAiZ2V0IiwgImFycm93IiwgImNvbnRlbnQiLCAicGxhY2VtZW50IiwgIm13IiwgImhvb2siLCAiYWRkIiwgIiRjb250ZW50IiwgImZpbmQiLCAibGVuZ3RoIl0KfQo=
