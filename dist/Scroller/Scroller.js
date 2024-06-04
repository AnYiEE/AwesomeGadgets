/**
 *  * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT}}'
 *
 * @base <https://github.com/the1812/Bilibili-Evolved/blob/master/src/core/horizontal-scroll.ts>
 * @source <https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Scroller>
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

// dist/Scroller/Scroller.js
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
//! src/Scroller/Scroller.ts
var Scroller = function(element) {
  const wheelHandler = function(e) {
    if (e.deltaY && !e.deltaX) {
      e.preventDefault();
      requestAnimationFrame(() => {
        element.scrollBy(e.deltaY, 0);
      });
    }
  };
  element.addEventListener("wheel", wheelHandler);
  element.style.scrollSnapType = "none";
  return function() {
    element.removeEventListener("wheel", wheelHandler);
    element.style.scrollSnapType = "";
  };
};
var scrollerContainers = document.querySelectorAll(".scroller-container");
var _iterator = _createForOfIteratorHelper(scrollerContainers);
var _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done; ) {
    const element = _step.value;
    Scroller(element);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Njcm9sbGVyL1Njcm9sbGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJy4vU2Nyb2xsZXIubGVzcyc7XG5jb25zdCBTY3JvbGxlciA9IGZ1bmN0aW9uIChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuXHRjb25zdCB3aGVlbEhhbmRsZXIgPSBmdW5jdGlvbiAoZTogV2hlZWxFdmVudCkge1xuXHRcdGlmIChlLmRlbHRhWSAmJiAhZS5kZWx0YVgpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0XHRcdGVsZW1lbnQuc2Nyb2xsQnkoZS5kZWx0YVksIDApO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgd2hlZWxIYW5kbGVyKTtcblx0ZWxlbWVudC5zdHlsZS5zY3JvbGxTbmFwVHlwZSA9ICdub25lJztcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgd2hlZWxIYW5kbGVyKTtcblx0XHRlbGVtZW50LnN0eWxlLnNjcm9sbFNuYXBUeXBlID0gJyc7XG5cdH07XG59O1xuY29uc3Qgc2Nyb2xsZXJDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjcm9sbGVyLWNvbnRhaW5lcicpIGFzIHVua25vd24gYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRWxlbWVudD47XG5mb3IgKGNvbnN0IGVsZW1lbnQgb2Ygc2Nyb2xsZXJDb250YWluZXJzKSB7XG5cdFNjcm9sbGVyKGVsZW1lbnQpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsV0FBVyxTQUFVQyxTQUFzQjtBQUNoRCxRQUFNQyxlQUFlLFNBQVVDLEdBQWU7QUFDN0MsUUFBSUEsRUFBRUMsVUFBVSxDQUFDRCxFQUFFRSxRQUFRO0FBQzFCRixRQUFFRyxlQUFlO0FBQ2pCQyw0QkFBc0IsTUFBTTtBQUMzQk4sZ0JBQVFPLFNBQVNMLEVBQUVDLFFBQVEsQ0FBQztNQUM3QixDQUFDO0lBQ0Y7RUFDRDtBQUNBSCxVQUFRUSxpQkFBaUIsU0FBU1AsWUFBWTtBQUM5Q0QsVUFBUVMsTUFBTUMsaUJBQWlCO0FBQy9CLFNBQU8sV0FBWTtBQUNsQlYsWUFBUVcsb0JBQW9CLFNBQVNWLFlBQVk7QUFDakRELFlBQVFTLE1BQU1DLGlCQUFpQjtFQUNoQztBQUNEO0FBQ0EsSUFBTUUscUJBQXFCQyxTQUFTQyxpQkFBaUIscUJBQXFCO0FBQUEsSUFBQUMsWUFBQUMsMkJBQ3BESixrQkFBQTtBQURvRCxJQUNwREs7QUFBQSxJQUFBO0FBQXRCLE9BQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQTBDO0FBQUEsVUFBL0JwQixVQUFBaUIsTUFBQUk7QUFDVnRCLGFBQVNDLE9BQU87RUFDakI7QUFBQSxTQUFBc0IsS0FBQTtBQUFBUCxZQUFBYixFQUFBb0IsR0FBQTtBQUFBLFVBQUE7QUFBQVAsWUFBQVEsRUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJTY3JvbGxlciIsICJlbGVtZW50IiwgIndoZWVsSGFuZGxlciIsICJlIiwgImRlbHRhWSIsICJkZWx0YVgiLCAicHJldmVudERlZmF1bHQiLCAicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwgInNjcm9sbEJ5IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAic3R5bGUiLCAic2Nyb2xsU25hcFR5cGUiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJzY3JvbGxlckNvbnRhaW5lcnMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAiZXJyIiwgImYiXQp9Cg==
