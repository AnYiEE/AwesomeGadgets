/**
 *  * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT}}'
 *
 * @base <https://github.com/the1812/Bilibili-Evolved/blob/master/src/core/horizontal-scroll.ts>
 * @source <https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/Scroller>
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
var scrollerContainers = document.getElementsByClassName("scroller-container");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Njcm9sbGVyL1Njcm9sbGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBTY3JvbGxlciA9IGZ1bmN0aW9uIChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuXHRjb25zdCB3aGVlbEhhbmRsZXIgPSBmdW5jdGlvbiAoZTogV2hlZWxFdmVudCkge1xuXHRcdGlmIChlLmRlbHRhWSAmJiAhZS5kZWx0YVgpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0XHRcdGVsZW1lbnQuc2Nyb2xsQnkoZS5kZWx0YVksIDApO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgd2hlZWxIYW5kbGVyKTtcblx0ZWxlbWVudC5zdHlsZS5zY3JvbGxTbmFwVHlwZSA9ICdub25lJztcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgd2hlZWxIYW5kbGVyKTtcblx0XHRlbGVtZW50LnN0eWxlLnNjcm9sbFNuYXBUeXBlID0gJyc7XG5cdH07XG59O1xuY29uc3Qgc2Nyb2xsZXJDb250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2Nyb2xsZXItY29udGFpbmVyJykgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRWxlbWVudD47XG5mb3IgKGNvbnN0IGVsZW1lbnQgb2Ygc2Nyb2xsZXJDb250YWluZXJzKSB7XG5cdFNjcm9sbGVyKGVsZW1lbnQpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsU0FBVUMsU0FBc0I7QUFDaEQsUUFBTUMsZUFBZSxTQUFVQyxHQUFlO0FBQzdDLFFBQUlBLEVBQUVDLFVBQVUsQ0FBQ0QsRUFBRUUsUUFBUTtBQUMxQkYsUUFBRUcsZUFBZTtBQUNqQkMsNEJBQXNCLE1BQU07QUFDM0JOLGdCQUFRTyxTQUFTTCxFQUFFQyxRQUFRLENBQUM7TUFDN0IsQ0FBQztJQUNGO0VBQ0Q7QUFDQUgsVUFBUVEsaUJBQWlCLFNBQVNQLFlBQVk7QUFDOUNELFVBQVFTLE1BQU1DLGlCQUFpQjtBQUMvQixTQUFPLFdBQVk7QUFDbEJWLFlBQVFXLG9CQUFvQixTQUFTVixZQUFZO0FBQ2pERCxZQUFRUyxNQUFNQyxpQkFBaUI7RUFDaEM7QUFDRDtBQUNBLElBQU1FLHFCQUFxQkMsU0FBU0MsdUJBQXVCLG9CQUFvQjtBQUFBLElBQUFDLFlBQUFDLDJCQUN6REosa0JBQUE7QUFEeUQsSUFDekRLO0FBQUEsSUFBQTtBQUF0QixPQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUEwQztBQUFBLFVBQS9CcEIsVUFBQWlCLE1BQUFJO0FBQ1Z0QixhQUFTQyxPQUFPO0VBQ2pCO0FBQUEsU0FBQXNCLEtBQUE7QUFBQVAsWUFBQWIsRUFBQW9CLEdBQUE7QUFBQSxVQUFBO0FBQUFQLFlBQUFRLEVBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsiU2Nyb2xsZXIiLCAiZWxlbWVudCIsICJ3aGVlbEhhbmRsZXIiLCAiZSIsICJkZWx0YVkiLCAiZGVsdGFYIiwgInByZXZlbnREZWZhdWx0IiwgInJlcXVlc3RBbmltYXRpb25GcmFtZSIsICJzY3JvbGxCeSIsICJhZGRFdmVudExpc3RlbmVyIiwgInN0eWxlIiwgInNjcm9sbFNuYXBUeXBlIiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAic2Nyb2xsZXJDb250YWluZXJzIiwgImRvY3VtZW50IiwgImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInZhbHVlIiwgImVyciIsICJmIl0KfQo=
