/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/ScrollUpButton}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
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

// dist/ScrollUpButton/ScrollUpButton.js
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
//! src/ScrollUpButton/modules/constant.ts
var CLASS_NAME = "gadget-scroll_up_button";
var CLASS_NAME_DOWN = "".concat(CLASS_NAME, "-down");
var CLASS_NAME_UP = "".concat(CLASS_NAME, "-up");
//! src/ScrollUpButton/components/scrollButton.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/ScrollUpButton/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    ToBottom: (0, import_ext_gadget.localize)({
      en: "Scroll to the bottom",
      "zh-hans": "滚动至页底",
      "zh-hant": "滾動至頁底"
    }),
    ToTop: (0, import_ext_gadget.localize)({
      en: "Go back to the top",
      "zh-hans": "滚动至页顶",
      "zh-hant": "滾動至頁頂"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/ScrollUpButton/components/scrollButton.tsx
var import_ext_gadget3 = require("ext.gadget.Util");
var IMAGE_URI = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E";
var TO_BOTTOM = getMessage("ToBottom");
var TO_TOP = getMessage("ToTop");
var scrollButton = (props) => {
  const {
    additionalClassName,
    alt,
    ariaLabel,
    onClick
  } = props;
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
    className: [CLASS_NAME, additionalClassName],
    src: IMAGE_URI,
    width: "32",
    height: "32",
    draggable: false,
    alt,
    "aria-label": ariaLabel,
    onClick
  });
};
var scrollDownButton = scrollButton({
  additionalClassName: CLASS_NAME_DOWN,
  alt: TO_BOTTOM,
  ariaLabel: TO_BOTTOM,
  onClick: () => {
    var _$$height, _$$height2;
    (0, import_ext_gadget3.scrollTop)(((_$$height = $(document).height()) !== null && _$$height !== void 0 ? _$$height : 0) - ((_$$height2 = $(window).height()) !== null && _$$height2 !== void 0 ? _$$height2 : 0));
  }
});
var scrollUpButton = scrollButton({
  additionalClassName: CLASS_NAME_UP,
  alt: TO_TOP,
  ariaLabel: TO_TOP,
  onClick: () => {
    (0, import_ext_gadget3.scrollTop)(0);
  }
});
//! src/ScrollUpButton/modules/insertElementAndListener.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var import_ext_gadget5 = require("ext.gadget.Tippy");
var insertElementandListener = () => {
  const $body = $("body");
  const onMouseEnterMouseLeave = (event) => {
    (0, import_ext_gadget4.changeOpacityWhenMouseEnterOrLeave)(event);
  };
  for (var _i = 0, _arr = [scrollDownButton, scrollUpButton]; _i < _arr.length; _i++) {
    const element = _arr[_i];
    const $element = $(element);
    $element.on("mouseenter mouseleave", onMouseEnterMouseLeave);
    $body.append($element);
    (0, import_ext_gadget5.tippy)($element.get(0), {
      arrow: true,
      content: $element.attr("alt"),
      placement: "left"
    });
  }
  const scrollListener = () => {
    const $scrollDownButton = $(scrollDownButton);
    const $scrollUpButton = $(scrollUpButton);
    let downButtonButtom, upButtonButtom;
    if (document.querySelector("#proveit") || document.querySelector(".gadget-cat_a_lot-container") || document.querySelector(".wordcount")) {
      downButtonButtom = "85px";
      upButtonButtom = "127px";
    } else {
      downButtonButtom = "45px";
      upButtonButtom = "85px";
    }
    $scrollDownButton.css("bottom", downButtonButtom);
    $scrollUpButton.css("bottom", upButtonButtom);
  };
  const scrollListenerWithThrottle = mw.util.throttle(scrollListener, 200);
  $(window).on("scroll selectionchange", scrollListenerWithThrottle);
};
//! src/ScrollUpButton/ScrollUpButton.ts
$(insertElementandListener);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Njcm9sbFVwQnV0dG9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1Njcm9sbFVwQnV0dG9uL2NvbXBvbmVudHMvc2Nyb2xsQnV0dG9uLnRzeCIsICJzcmMvU2Nyb2xsVXBCdXR0b24vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9TY3JvbGxVcEJ1dHRvbi9tb2R1bGVzL2luc2VydEVsZW1lbnRBbmRMaXN0ZW5lci50cyIsICJzcmMvU2Nyb2xsVXBCdXR0b24vU2Nyb2xsVXBCdXR0b24udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IENMQVNTX05BTUU6IHN0cmluZyA9ICdnYWRnZXQtc2Nyb2xsX3VwX2J1dHRvbic7XG5jb25zdCBDTEFTU19OQU1FX0RPV046IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWRvd25gO1xuY29uc3QgQ0xBU1NfTkFNRV9VUDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tdXBgO1xuXG5leHBvcnQge0NMQVNTX05BTUUsIENMQVNTX05BTUVfRE9XTiwgQ0xBU1NfTkFNRV9VUH07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0RPV04sIENMQVNTX05BTUVfVVB9IGZyb20gJy4uL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtzY3JvbGxUb3B9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdGFkZGl0aW9uYWxDbGFzc05hbWU6IHN0cmluZztcblx0YWx0OiBzdHJpbmc7XG5cdGFyaWFMYWJlbDogc3RyaW5nO1xuXHRvbkNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBJTUFHRV9VUkk6IHN0cmluZyA9XG5cdFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxJyBoZWlnaHQ9JzEnJTNFJTNDL3N2ZyUzRVwiO1xuXG5jb25zdCBUT19CT1RUT006IHN0cmluZyA9IGdldE1lc3NhZ2UoJ1RvQm90dG9tJyk7XG5cbmNvbnN0IFRPX1RPUDogc3RyaW5nID0gZ2V0TWVzc2FnZSgnVG9Ub3AnKTtcblxuY29uc3Qgc2Nyb2xsQnV0dG9uID0gKHByb3BzOiBQcm9wcykgPT4ge1xuXHRjb25zdCB7YWRkaXRpb25hbENsYXNzTmFtZSwgYWx0LCBhcmlhTGFiZWwsIG9uQ2xpY2t9ID0gcHJvcHM7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0Y2xhc3NOYW1lPXtbQ0xBU1NfTkFNRSwgYWRkaXRpb25hbENsYXNzTmFtZV19XG5cdFx0XHRzcmM9e0lNQUdFX1VSSX1cblx0XHRcdHdpZHRoPVwiMzJcIlxuXHRcdFx0aGVpZ2h0PVwiMzJcIlxuXHRcdFx0ZHJhZ2dhYmxlPXtmYWxzZX1cblx0XHRcdGFsdD17YWx0fVxuXHRcdFx0YXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuXHRcdFx0b25DbGljaz17b25DbGlja31cblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3Qgc2Nyb2xsRG93bkJ1dHRvbiA9IHNjcm9sbEJ1dHRvbih7XG5cdGFkZGl0aW9uYWxDbGFzc05hbWU6IENMQVNTX05BTUVfRE9XTixcblx0YWx0OiBUT19CT1RUT00sXG5cdGFyaWFMYWJlbDogVE9fQk9UVE9NLFxuXHRvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG5cdFx0c2Nyb2xsVG9wKCgkKGRvY3VtZW50KS5oZWlnaHQoKSA/PyAwKSAtICgkKHdpbmRvdykuaGVpZ2h0KCkgPz8gMCkpO1xuXHR9LFxufSk7XG5cbmNvbnN0IHNjcm9sbFVwQnV0dG9uID0gc2Nyb2xsQnV0dG9uKHtcblx0YWRkaXRpb25hbENsYXNzTmFtZTogQ0xBU1NfTkFNRV9VUCxcblx0YWx0OiBUT19UT1AsXG5cdGFyaWFMYWJlbDogVE9fVE9QLFxuXHRvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG5cdFx0c2Nyb2xsVG9wKDApO1xuXHR9LFxufSk7XG5cbmV4cG9ydCB7c2Nyb2xsRG93bkJ1dHRvbiwgc2Nyb2xsVXBCdXR0b259O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRUb0JvdHRvbTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTY3JvbGwgdG8gdGhlIGJvdHRvbScsXG5cdFx0XHQnemgtaGFucyc6ICfmu5rliqjoh7PpobXlupUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5ru+5YuV6Iez6aCB5bqVJyxcblx0XHR9KSxcblx0XHRUb1RvcDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdHbyBiYWNrIHRvIHRoZSB0b3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rua5Yqo6Iez6aG16aG2Jyxcblx0XHRcdCd6aC1oYW50JzogJ+a7vuWLleiHs+mggemggicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7c2Nyb2xsRG93bkJ1dHRvbiwgc2Nyb2xsVXBCdXR0b259IGZyb20gJy4uL2NvbXBvbmVudHMvc2Nyb2xsQnV0dG9uJztcbmltcG9ydCB7Y2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCBpbnNlcnRFbGVtZW50YW5kTGlzdGVuZXIgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRjb25zdCBvbk1vdXNlRW50ZXJNb3VzZUxlYXZlID0gKGV2ZW50OiBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQpOiB2b2lkID0+IHtcblx0XHRjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlKGV2ZW50KTtcblx0fTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW3Njcm9sbERvd25CdXR0b24sIHNjcm9sbFVwQnV0dG9uXSkge1xuXHRcdGNvbnN0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcblx0XHQkZWxlbWVudC5vbignbW91c2VlbnRlciBtb3VzZWxlYXZlJywgb25Nb3VzZUVudGVyTW91c2VMZWF2ZSk7XG5cdFx0JGJvZHkuYXBwZW5kKCRlbGVtZW50KTtcblxuXHRcdHRpcHB5KCRlbGVtZW50LmdldCgwKSBhcyBIVE1MSW1hZ2VFbGVtZW50LCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGNvbnRlbnQ6ICRlbGVtZW50LmF0dHIoJ2FsdCcpIGFzIHN0cmluZyxcblx0XHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3Qgc2Nyb2xsTGlzdGVuZXIgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJHNjcm9sbERvd25CdXR0b24gPSAkKHNjcm9sbERvd25CdXR0b24pO1xuXHRcdGNvbnN0ICRzY3JvbGxVcEJ1dHRvbiA9ICQoc2Nyb2xsVXBCdXR0b24pO1xuXHRcdGxldCBkb3duQnV0dG9uQnV0dG9tLCB1cEJ1dHRvbkJ1dHRvbTtcblx0XHRpZiAoXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvdmVpdCcpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FkZ2V0LWNhdF9hX2xvdC1jb250YWluZXInKSB8fFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmRjb3VudCcpXG5cdFx0KSB7XG5cdFx0XHRkb3duQnV0dG9uQnV0dG9tID0gJzg1cHgnO1xuXHRcdFx0dXBCdXR0b25CdXR0b20gPSAnMTI3cHgnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb3duQnV0dG9uQnV0dG9tID0gJzQ1cHgnO1xuXHRcdFx0dXBCdXR0b25CdXR0b20gPSAnODVweCc7XG5cdFx0fVxuXHRcdCRzY3JvbGxEb3duQnV0dG9uLmNzcygnYm90dG9tJywgZG93bkJ1dHRvbkJ1dHRvbSk7XG5cdFx0JHNjcm9sbFVwQnV0dG9uLmNzcygnYm90dG9tJywgdXBCdXR0b25CdXR0b20pO1xuXHR9O1xuXHRjb25zdCBzY3JvbGxMaXN0ZW5lcldpdGhUaHJvdHRsZTogdHlwZW9mIHNjcm9sbExpc3RlbmVyID0gbXcudXRpbC50aHJvdHRsZShzY3JvbGxMaXN0ZW5lciwgMjAwKTtcblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwgc2VsZWN0aW9uY2hhbmdlJywgc2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGUpO1xufTtcblxuZXhwb3J0IHtpbnNlcnRFbGVtZW50YW5kTGlzdGVuZXJ9O1xuIiwgImltcG9ydCB7aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvaW5zZXJ0RWxlbWVudEFuZExpc3RlbmVyJztcblxuJChpbnNlcnRFbGVtZW50YW5kTGlzdGVuZXIpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBcUI7QUFDM0IsSUFBTUMsa0JBQUEsR0FBQUMsT0FBNkJGLFlBQVUsT0FBQTtBQUM3QyxJQUFNRyxnQkFBQSxHQUFBRCxPQUEyQkYsWUFBVSxLQUFBOztBQ0QzQyxJQUFBSSxxQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0RsQixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFN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SSxVQUFVRixjQUFjO0VBQzdDO0FBQ0EsUUFBTUcsNkJBQW9EQyxHQUFHQyxLQUFLQyxTQUFTVixnQkFBZ0IsR0FBRztBQUM5RnhCLElBQUVFLE1BQU0sRUFBRWMsR0FBRywwQkFBMEJlLDBCQUEwQjtBQUNsRTs7QUN4Q0EvQixFQUFFTSx3QkFBd0I7IiwKICAibmFtZXMiOiBbIkNMQVNTX05BTUUiLCAiQ0xBU1NfTkFNRV9ET1dOIiwgImNvbmNhdCIsICJDTEFTU19OQU1FX1VQIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlRvQm90dG9tIiwgImxvY2FsaXplIiwgImVuIiwgIlRvVG9wIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiSU1BR0VfVVJJIiwgIlRPX0JPVFRPTSIsICJUT19UT1AiLCAic2Nyb2xsQnV0dG9uIiwgInByb3BzIiwgImFkZGl0aW9uYWxDbGFzc05hbWUiLCAiYWx0IiwgImFyaWFMYWJlbCIsICJvbkNsaWNrIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAic3JjIiwgIndpZHRoIiwgImhlaWdodCIsICJkcmFnZ2FibGUiLCAic2Nyb2xsRG93bkJ1dHRvbiIsICJfJCRoZWlnaHQiLCAiXyQkaGVpZ2h0MiIsICJzY3JvbGxUb3AiLCAiJCIsICJkb2N1bWVudCIsICJ3aW5kb3ciLCAic2Nyb2xsVXBCdXR0b24iLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJpbnNlcnRFbGVtZW50YW5kTGlzdGVuZXIiLCAiJGJvZHkiLCAib25Nb3VzZUVudGVyTW91c2VMZWF2ZSIsICJldmVudCIsICJjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlIiwgIl9pIiwgIl9hcnIiLCAibGVuZ3RoIiwgImVsZW1lbnQiLCAiJGVsZW1lbnQiLCAib24iLCAiYXBwZW5kIiwgInRpcHB5IiwgImdldCIsICJhcnJvdyIsICJjb250ZW50IiwgImF0dHIiLCAicGxhY2VtZW50IiwgInNjcm9sbExpc3RlbmVyIiwgIiRzY3JvbGxEb3duQnV0dG9uIiwgIiRzY3JvbGxVcEJ1dHRvbiIsICJkb3duQnV0dG9uQnV0dG9tIiwgInVwQnV0dG9uQnV0dG9tIiwgInF1ZXJ5U2VsZWN0b3IiLCAiY3NzIiwgInNjcm9sbExpc3RlbmVyV2l0aFRocm90dGxlIiwgIm13IiwgInV0aWwiLCAidGhyb3R0bGUiXQp9Cg==
