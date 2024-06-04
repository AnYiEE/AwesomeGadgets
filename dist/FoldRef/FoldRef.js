/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:燃灯/foldRef.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/FoldRef}
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

// dist/FoldRef/FoldRef.js
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
//! src/FoldRef/modules/constant.ts
var CLASS_NAME = "gadget-foldref";
var CLASS_NAME_EXPAND_BUTTON = "".concat(CLASS_NAME, "__expand-button");
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
//! src/FoldRef/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Expand: (0, import_ext_gadget.localize)({
      en: "Expand",
      ja: "展開",
      "zh-hans": "展开",
      "zh-hant": "展開"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/FoldRef/modules/util/processElement.ts
var processElement = ($element) => {
  const $refFolder = $("<div>").addClass(CLASS_NAME);
  $refFolder.insertBefore($element);
  $element.appendTo($refFolder);
  const $expandButton = $("<div>").addClass(CLASS_NAME_EXPAND_BUTTON).text(getMessage("Expand"));
  $refFolder.after($expandButton);
};
//! src/FoldRef/modules/core.ts
var foldRef = ($body) => {
  const $foldRef = $body.find(".mw-references-wrap,.refbegin");
  var _iterator = _createForOfIteratorHelper($foldRef), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      const $element = $(element);
      if ($element.parent("div").parent("div").hasClass(CLASS_NAME) || $element.parent("div").hasClass(CLASS_NAME)) {
        continue;
      }
      const height = $element.height();
      if (!height || height <= window.innerHeight * 0.9) {
        continue;
      }
      processElement($element);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  $body.find(".".concat(CLASS_NAME_EXPAND_BUTTON)).on("click", (event) => {
    const $element = $(event.currentTarget);
    $element.prev(".".concat(CLASS_NAME)).removeClass(CLASS_NAME);
    $element.remove();
  });
};
//! src/FoldRef/FoldRef.ts
var import_ext_gadget2 = require("ext.gadget.Util");
if (WG_NAMESPACE_NUMBER === 0) {
  void (0, import_ext_gadget2.getBody)().then(foldRef);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0ZvbGRSZWYvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvRm9sZFJlZi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0ZvbGRSZWYvbW9kdWxlcy91dGlsL3Byb2Nlc3NFbGVtZW50LnRzIiwgInNyYy9Gb2xkUmVmL21vZHVsZXMvY29yZS50cyIsICJzcmMvRm9sZFJlZi9Gb2xkUmVmLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LWZvbGRyZWYnO1xuY29uc3QgQ0xBU1NfTkFNRV9FWFBBTkRfQlVUVE9OOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfV9fZXhwYW5kLWJ1dHRvbmA7XG5cbmNvbnN0IFdHX05BTUVTUEFDRV9OVU1CRVI6IG51bWJlciA9IG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJyk7XG5cbmV4cG9ydCB7Q0xBU1NfTkFNRSwgQ0xBU1NfTkFNRV9FWFBBTkRfQlVUVE9OLCBXR19OQU1FU1BBQ0VfTlVNQkVSfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0RXhwYW5kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4cGFuZCcsXG5cdFx0XHRqYTogJ+WxlemWiycsXG5cdFx0XHQnemgtaGFucyc6ICflsZXlvIAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bGV6ZaLJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0VYUEFORF9CVVRUT059IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbi8vIGNyZWF0ZSBhIGRpdiwgcGxhY2Uge3tSZWZsaXN0fX1zIGluc2lkZVxuY29uc3QgcHJvY2Vzc0VsZW1lbnQgPSAoJGVsZW1lbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRjb25zdCAkcmVmRm9sZGVyOiBKUXVlcnkgPSAkKCc8ZGl2PicpLmFkZENsYXNzKENMQVNTX05BTUUpO1xuXG5cdCRyZWZGb2xkZXIuaW5zZXJ0QmVmb3JlKCRlbGVtZW50KTtcblx0JGVsZW1lbnQuYXBwZW5kVG8oJHJlZkZvbGRlcik7XG5cblx0Ly8gYWRkIGFuIGV4cGFuZCBidXR0b24gYXQgdGhlIGJvdHRvbVxuXHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRjb25zdCAkZXhwYW5kQnV0dG9uOiBKUXVlcnkgPSAkKCc8ZGl2PicpLmFkZENsYXNzKENMQVNTX05BTUVfRVhQQU5EX0JVVFRPTikudGV4dChnZXRNZXNzYWdlKCdFeHBhbmQnKSk7XG5cdCRyZWZGb2xkZXIuYWZ0ZXIoJGV4cGFuZEJ1dHRvbik7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NFbGVtZW50fTtcbiIsICJpbXBvcnQge0NMQVNTX05BTUUsIENMQVNTX05BTUVfRVhQQU5EX0JVVFRPTn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge3Byb2Nlc3NFbGVtZW50fSBmcm9tICcuL3V0aWwvcHJvY2Vzc0VsZW1lbnQnO1xuXG5jb25zdCBmb2xkUmVmID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvLyBmb3IgYXJ0aWNsZXMgdXNpbmcgPHJlZmVyZW5jZXMgLz4sIHt7UmVmbGlzdH19cyBvciBzaW1pbGFyIHRlbXBsYXRlc1xuXHRjb25zdCAkZm9sZFJlZjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLm13LXJlZmVyZW5jZXMtd3JhcCwucmVmYmVnaW4nKTtcblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRmb2xkUmVmKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXHRcdGlmICgkZWxlbWVudC5wYXJlbnQoJ2RpdicpLnBhcmVudCgnZGl2JykuaGFzQ2xhc3MoQ0xBU1NfTkFNRSkgfHwgJGVsZW1lbnQucGFyZW50KCdkaXYnKS5oYXNDbGFzcyhDTEFTU19OQU1FKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaGVpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5oZWlnaHQoKTtcblx0XHRpZiAoIWhlaWdodCB8fCBoZWlnaHQgPD0gd2luZG93LmlubmVySGVpZ2h0ICogMC45KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBpZiBncmVhdGVyIHRoYW4gOTAlIG9mIHRoZSB2aWV3cG9ydCBoZWlnaHQsIGZvbGQgdGhlIHJlZmVyZW5jZXMgbGlzdFxuXHRcdHByb2Nlc3NFbGVtZW50KCRlbGVtZW50KTtcblx0fVxuXG5cdC8vIGF0dGFjaCBldmVudCBsaXN0ZW5lciB0byB0aGUgZXhwYW5kIGJ1dHRvbnNcblx0JGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9FWFBBTkRfQlVUVE9OfWApLm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQ8SFRNTEVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpIGFzIEpRdWVyeTtcblxuXHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdCRlbGVtZW50LnByZXYoYC4ke0NMQVNTX05BTUV9YCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRSk7XG5cdFx0JGVsZW1lbnQucmVtb3ZlKCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHtmb2xkUmVmfTtcbiIsICJpbXBvcnQge1dHX05BTUVTUEFDRV9OVU1CRVJ9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2ZvbGRSZWZ9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuaWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgPT09IDApIHtcblx0dm9pZCBnZXRCb2R5KCkudGhlbihmb2xkUmVmKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxhQUFxQjtBQUMzQixJQUFNQywyQkFBQSxHQUFBQyxPQUFzQ0YsWUFBVSxpQkFBQTtBQUV0RCxJQUFNRyxzQkFBOEJDLEdBQUdDLE9BQU9DLElBQUksbUJBQW1COztBQ0hyRSxJQUFBQyxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRSCxrQkFBQUksVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ2JBLElBQU1DLGlCQUFrQkMsY0FBMkI7QUFJbEQsUUFBTUMsYUFBcUJDLEVBQUUsT0FBTyxFQUFFQyxTQUFTckIsVUFBVTtBQUV6RG1CLGFBQVdHLGFBQWFKLFFBQVE7QUFDaENBLFdBQVNLLFNBQVNKLFVBQVU7QUFNNUIsUUFBTUssZ0JBQXdCSixFQUFFLE9BQU8sRUFBRUMsU0FBU3BCLHdCQUF3QixFQUFFd0IsS0FBS1YsV0FBVyxRQUFRLENBQUM7QUFDckdJLGFBQVdPLE1BQU1GLGFBQWE7QUFDL0I7O0FDaEJBLElBQU1HLFVBQVdDLFdBQXlDO0FBRXpELFFBQU1DLFdBQW1CRCxNQUFNRSxLQUFLLCtCQUErQjtBQUFBLE1BQUFDLFlBQUFDLDJCQUM3Q0gsUUFBQSxHQUFBSTtBQUFBLE1BQUE7QUFBdEIsU0FBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQUMsUUFBZ0M7QUFBQSxZQUFyQkMsVUFBQUosTUFBQUs7QUFDVixZQUFNcEIsV0FBV0UsRUFBRWlCLE9BQU87QUFDMUIsVUFBSW5CLFNBQVNxQixPQUFPLEtBQUssRUFBRUEsT0FBTyxLQUFLLEVBQUVDLFNBQVN4QyxVQUFVLEtBQUtrQixTQUFTcUIsT0FBTyxLQUFLLEVBQUVDLFNBQVN4QyxVQUFVLEdBQUc7QUFDN0c7TUFDRDtBQUVBLFlBQU15QyxTQUE2QnZCLFNBQVN1QixPQUFPO0FBQ25ELFVBQUksQ0FBQ0EsVUFBVUEsVUFBVUMsT0FBT0MsY0FBYyxLQUFLO0FBQ2xEO01BQ0Q7QUFHQTFCLHFCQUFlQyxRQUFRO0lBQ3hCO0VBQUEsU0FBQTBCLEtBQUE7QUFBQWIsY0FBQWMsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQWIsY0FBQWUsRUFBQTtFQUFBO0FBR0FsQixRQUFNRSxLQUFBLElBQUE1QixPQUFTRCx3QkFBd0IsQ0FBRSxFQUFFOEMsR0FBRyxTQUFVQyxXQUFnRDtBQUN2RyxVQUFNOUIsV0FBV0UsRUFBRTRCLE1BQU1DLGFBQWE7QUFLdEMvQixhQUFTZ0MsS0FBQSxJQUFBaEQsT0FBU0YsVUFBVSxDQUFFLEVBQUVtRCxZQUFZbkQsVUFBVTtBQUN0RGtCLGFBQVNrQyxPQUFPO0VBQ2pCLENBQUM7QUFDRjs7QUM3QkEsSUFBQUMscUJBQXNCN0MsUUFBQSxpQkFBQTtBQUV0QixJQUFJTCx3QkFBd0IsR0FBRztBQUM5QixRQUFBLEdBQUtrRCxtQkFBQUMsU0FBUSxFQUFFQyxLQUFLNUIsT0FBTztBQUM1QjsiLAogICJuYW1lcyI6IFsiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0VYUEFORF9CVVRUT04iLCAiY29uY2F0IiwgIldHX05BTUVTUEFDRV9OVU1CRVIiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJFeHBhbmQiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInByb2Nlc3NFbGVtZW50IiwgIiRlbGVtZW50IiwgIiRyZWZGb2xkZXIiLCAiJCIsICJhZGRDbGFzcyIsICJpbnNlcnRCZWZvcmUiLCAiYXBwZW5kVG8iLCAiJGV4cGFuZEJ1dHRvbiIsICJ0ZXh0IiwgImFmdGVyIiwgImZvbGRSZWYiLCAiJGJvZHkiLCAiJGZvbGRSZWYiLCAiZmluZCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJwYXJlbnQiLCAiaGFzQ2xhc3MiLCAiaGVpZ2h0IiwgIndpbmRvdyIsICJpbm5lckhlaWdodCIsICJlcnIiLCAiZSIsICJmIiwgIm9uIiwgImV2ZW50IiwgImN1cnJlbnRUYXJnZXQiLCAicHJldiIsICJyZW1vdmVDbGFzcyIsICJyZW1vdmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEJvZHkiLCAidGhlbiJdCn0K
