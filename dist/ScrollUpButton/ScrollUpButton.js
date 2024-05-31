/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/ScrollUpButton}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://youshou.wiki/wiki/H:GPL-3.0}
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Njcm9sbFVwQnV0dG9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1Njcm9sbFVwQnV0dG9uL2NvbXBvbmVudHMvc2Nyb2xsQnV0dG9uLnRzeCIsICJzcmMvU2Nyb2xsVXBCdXR0b24vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9TY3JvbGxVcEJ1dHRvbi9tb2R1bGVzL2luc2VydEVsZW1lbnRBbmRMaXN0ZW5lci50cyIsICJzcmMvU2Nyb2xsVXBCdXR0b24vU2Nyb2xsVXBCdXR0b24udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IENMQVNTX05BTUU6IHN0cmluZyA9ICdnYWRnZXQtc2Nyb2xsX3VwX2J1dHRvbic7XG5jb25zdCBDTEFTU19OQU1FX0RPV046IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWRvd25gO1xuY29uc3QgQ0xBU1NfTkFNRV9VUDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tdXBgO1xuXG5leHBvcnQge0NMQVNTX05BTUUsIENMQVNTX05BTUVfRE9XTiwgQ0xBU1NfTkFNRV9VUH07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0RPV04sIENMQVNTX05BTUVfVVB9IGZyb20gJy4uL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtzY3JvbGxUb3B9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdGFkZGl0aW9uYWxDbGFzc05hbWU6IHN0cmluZztcblx0YWx0OiBzdHJpbmc7XG5cdGFyaWFMYWJlbDogc3RyaW5nO1xuXHRvbkNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBJTUFHRV9VUkk6IHN0cmluZyA9XG5cdFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxJyBoZWlnaHQ9JzEnJTNFJTNDL3N2ZyUzRVwiO1xuXG5jb25zdCBUT19CT1RUT006IHN0cmluZyA9IGdldE1lc3NhZ2UoJ1RvQm90dG9tJyk7XG5cbmNvbnN0IFRPX1RPUDogc3RyaW5nID0gZ2V0TWVzc2FnZSgnVG9Ub3AnKTtcblxuY29uc3Qgc2Nyb2xsQnV0dG9uID0gKHByb3BzOiBQcm9wcykgPT4ge1xuXHRjb25zdCB7YWRkaXRpb25hbENsYXNzTmFtZSwgYWx0LCBhcmlhTGFiZWwsIG9uQ2xpY2t9ID0gcHJvcHM7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0Y2xhc3NOYW1lPXtbQ0xBU1NfTkFNRSwgYWRkaXRpb25hbENsYXNzTmFtZV19XG5cdFx0XHRzcmM9e0lNQUdFX1VSSX1cblx0XHRcdHdpZHRoPVwiMzJcIlxuXHRcdFx0aGVpZ2h0PVwiMzJcIlxuXHRcdFx0ZHJhZ2dhYmxlPXtmYWxzZX1cblx0XHRcdGFsdD17YWx0fVxuXHRcdFx0YXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuXHRcdFx0b25DbGljaz17b25DbGlja31cblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3Qgc2Nyb2xsRG93bkJ1dHRvbiA9IHNjcm9sbEJ1dHRvbih7XG5cdGFkZGl0aW9uYWxDbGFzc05hbWU6IENMQVNTX05BTUVfRE9XTixcblx0YWx0OiBUT19CT1RUT00sXG5cdGFyaWFMYWJlbDogVE9fQk9UVE9NLFxuXHRvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG5cdFx0c2Nyb2xsVG9wKCgkKGRvY3VtZW50KS5oZWlnaHQoKSA/PyAwKSAtICgkKHdpbmRvdykuaGVpZ2h0KCkgPz8gMCkpO1xuXHR9LFxufSk7XG5cbmNvbnN0IHNjcm9sbFVwQnV0dG9uID0gc2Nyb2xsQnV0dG9uKHtcblx0YWRkaXRpb25hbENsYXNzTmFtZTogQ0xBU1NfTkFNRV9VUCxcblx0YWx0OiBUT19UT1AsXG5cdGFyaWFMYWJlbDogVE9fVE9QLFxuXHRvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG5cdFx0c2Nyb2xsVG9wKDApO1xuXHR9LFxufSk7XG5cbmV4cG9ydCB7c2Nyb2xsRG93bkJ1dHRvbiwgc2Nyb2xsVXBCdXR0b259O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRUb0JvdHRvbTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTY3JvbGwgdG8gdGhlIGJvdHRvbScsXG5cdFx0XHQnemgtaGFucyc6ICfmu5rliqjoh7PpobXlupUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5ru+5YuV6Iez6aCB5bqVJyxcblx0XHR9KSxcblx0XHRUb1RvcDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdHbyBiYWNrIHRvIHRoZSB0b3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rua5Yqo6Iez6aG16aG2Jyxcblx0XHRcdCd6aC1oYW50JzogJ+a7vuWLleiHs+mggemggicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7c2Nyb2xsRG93bkJ1dHRvbiwgc2Nyb2xsVXBCdXR0b259IGZyb20gJy4uL2NvbXBvbmVudHMvc2Nyb2xsQnV0dG9uJztcbmltcG9ydCB7Y2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCBpbnNlcnRFbGVtZW50YW5kTGlzdGVuZXIgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRjb25zdCBvbk1vdXNlRW50ZXJNb3VzZUxlYXZlID0gKGV2ZW50OiBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQpOiB2b2lkID0+IHtcblx0XHRjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlKGV2ZW50KTtcblx0fTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW3Njcm9sbERvd25CdXR0b24sIHNjcm9sbFVwQnV0dG9uXSkge1xuXHRcdGNvbnN0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcblx0XHQkZWxlbWVudC5vbignbW91c2VlbnRlciBtb3VzZWxlYXZlJywgb25Nb3VzZUVudGVyTW91c2VMZWF2ZSk7XG5cdFx0JGJvZHkuYXBwZW5kKCRlbGVtZW50KTtcblxuXHRcdHRpcHB5KCRlbGVtZW50LmdldCgwKSBhcyBIVE1MSW1hZ2VFbGVtZW50LCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGNvbnRlbnQ6ICRlbGVtZW50LmF0dHIoJ2FsdCcpIGFzIHN0cmluZyxcblx0XHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3Qgc2Nyb2xsTGlzdGVuZXIgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJHNjcm9sbERvd25CdXR0b24gPSAkKHNjcm9sbERvd25CdXR0b24pO1xuXHRcdGNvbnN0ICRzY3JvbGxVcEJ1dHRvbiA9ICQoc2Nyb2xsVXBCdXR0b24pO1xuXHRcdGxldCBkb3duQnV0dG9uQnV0dG9tLCB1cEJ1dHRvbkJ1dHRvbTtcblx0XHRpZiAoXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvdmVpdCcpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FkZ2V0LWNhdF9hX2xvdC1jb250YWluZXInKSB8fFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmRjb3VudCcpXG5cdFx0KSB7XG5cdFx0XHRkb3duQnV0dG9uQnV0dG9tID0gJzg1cHgnO1xuXHRcdFx0dXBCdXR0b25CdXR0b20gPSAnMTI3cHgnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb3duQnV0dG9uQnV0dG9tID0gJzQ1cHgnO1xuXHRcdFx0dXBCdXR0b25CdXR0b20gPSAnODVweCc7XG5cdFx0fVxuXHRcdCRzY3JvbGxEb3duQnV0dG9uLmNzcygnYm90dG9tJywgZG93bkJ1dHRvbkJ1dHRvbSk7XG5cdFx0JHNjcm9sbFVwQnV0dG9uLmNzcygnYm90dG9tJywgdXBCdXR0b25CdXR0b20pO1xuXHR9O1xuXHRjb25zdCBzY3JvbGxMaXN0ZW5lcldpdGhUaHJvdHRsZTogdHlwZW9mIHNjcm9sbExpc3RlbmVyID0gbXcudXRpbC50aHJvdHRsZShzY3JvbGxMaXN0ZW5lciwgMjAwKTtcblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwgc2VsZWN0aW9uY2hhbmdlJywgc2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGUpO1xufTtcblxuZXhwb3J0IHtpbnNlcnRFbGVtZW50YW5kTGlzdGVuZXJ9O1xuIiwgImltcG9ydCB7aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvaW5zZXJ0RWxlbWVudEFuZExpc3RlbmVyJztcblxuJChpbnNlcnRFbGVtZW50YW5kTGlzdGVuZXIpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGFBQXFCO0FBQzNCLElBQU1DLGtCQUFBLEdBQUFDLE9BQTZCRixZQUFVLE9BQUE7QUFDN0MsSUFBTUcsZ0JBQUEsR0FBQUQsT0FBMkJGLFlBQVUsS0FBQTs7QUNEM0MsSUFBQUkscUJBQWtCQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNEbEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05D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QztBQUNBLFFBQU1HLDZCQUFvREMsR0FBR0MsS0FBS0MsU0FBU1YsZ0JBQWdCLEdBQUc7QUFDOUZ4QixJQUFFRSxNQUFNLEVBQUVjLEdBQUcsMEJBQTBCZSwwQkFBMEI7QUFDbEU7O0FDeENBL0IsRUFBRU0sd0JBQXdCOyIsCiAgIm5hbWVzIjogWyJDTEFTU19OQU1FIiwgIkNMQVNTX05BTUVfRE9XTiIsICJjb25jYXQiLCAiQ0xBU1NfTkFNRV9VUCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJUb0JvdHRvbSIsICJsb2NhbGl6ZSIsICJlbiIsICJUb1RvcCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIklNQUdFX1VSSSIsICJUT19CT1RUT00iLCAiVE9fVE9QIiwgInNjcm9sbEJ1dHRvbiIsICJwcm9wcyIsICJhZGRpdGlvbmFsQ2xhc3NOYW1lIiwgImFsdCIsICJhcmlhTGFiZWwiLCAib25DbGljayIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInNyYyIsICJ3aWR0aCIsICJoZWlnaHQiLCAiZHJhZ2dhYmxlIiwgInNjcm9sbERvd25CdXR0b24iLCAiXyQkaGVpZ2h0IiwgIl8kJGhlaWdodDIiLCAic2Nyb2xsVG9wIiwgIiQiLCAiZG9jdW1lbnQiLCAid2luZG93IiwgInNjcm9sbFVwQnV0dG9uIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiaW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyIiwgIiRib2R5IiwgIm9uTW91c2VFbnRlck1vdXNlTGVhdmUiLCAiZXZlbnQiLCAiY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSIsICJfaSIsICJfYXJyIiwgImxlbmd0aCIsICJlbGVtZW50IiwgIiRlbGVtZW50IiwgIm9uIiwgImFwcGVuZCIsICJ0aXBweSIsICJnZXQiLCAiYXJyb3ciLCAiY29udGVudCIsICJhdHRyIiwgInBsYWNlbWVudCIsICJzY3JvbGxMaXN0ZW5lciIsICIkc2Nyb2xsRG93bkJ1dHRvbiIsICIkc2Nyb2xsVXBCdXR0b24iLCAiZG93bkJ1dHRvbkJ1dHRvbSIsICJ1cEJ1dHRvbkJ1dHRvbSIsICJxdWVyeVNlbGVjdG9yIiwgImNzcyIsICJzY3JvbGxMaXN0ZW5lcldpdGhUaHJvdHRsZSIsICJtdyIsICJ1dGlsIiwgInRocm90dGxlIl0KfQo=
