/**
 *  * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT}}'
 *
 * @source <https://github.com/the1812/Bilibili-Evolved/blob/master/src/core/horizontal-scroll.ts>
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
//! src/Scroller/Scroller.ts
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Njcm9sbGVyL1Njcm9sbGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBTY3JvbGxlciA9IGZ1bmN0aW9uIChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuXHRjb25zdCB3aGVlbEhhbmRsZXIgPSBmdW5jdGlvbiAoZTogV2hlZWxFdmVudCkge1xuXHRcdGlmIChlLmRlbHRhWSAmJiAhZS5kZWx0YVgpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0XHRcdGVsZW1lbnQuc2Nyb2xsQnkoZS5kZWx0YVksIDApO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgd2hlZWxIYW5kbGVyKTtcblx0ZWxlbWVudC5zdHlsZS5zY3JvbGxTbmFwVHlwZSA9ICdub25lJztcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgd2hlZWxIYW5kbGVyKTtcblx0XHRlbGVtZW50LnN0eWxlLnNjcm9sbFNuYXBUeXBlID0gJyc7XG5cdH07XG59O1xuY29uc3Qgc2Nyb2xsZXJDb250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2Nyb2xsZXItY29udGFpbmVyJykgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRWxlbWVudD47XG5mb3IgKGNvbnN0IGVsZW1lbnQgb2Ygc2Nyb2xsZXJDb250YWluZXJzKSB7XG5cdFNjcm9sbGVyKGVsZW1lbnQpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsV0FBVyxTQUFVQyxTQUFzQjtBQUNoRCxRQUFNQyxlQUFlLFNBQVVDLEdBQWU7QUFDN0MsUUFBSUEsRUFBRUMsVUFBVSxDQUFDRCxFQUFFRSxRQUFRO0FBQzFCRixRQUFFRyxlQUFlO0FBQ2pCQyw0QkFBc0IsTUFBTTtBQUMzQk4sZ0JBQVFPLFNBQVNMLEVBQUVDLFFBQVEsQ0FBQztNQUM3QixDQUFDO0lBQ0Y7RUFDRDtBQUNBSCxVQUFRUSxpQkFBaUIsU0FBU1AsWUFBWTtBQUM5Q0QsVUFBUVMsTUFBTUMsaUJBQWlCO0FBQy9CLFNBQU8sV0FBWTtBQUNsQlYsWUFBUVcsb0JBQW9CLFNBQVNWLFlBQVk7QUFDakRELFlBQVFTLE1BQU1DLGlCQUFpQjtFQUNoQztBQUNEO0FBQ0EsSUFBTUUscUJBQXFCQyxTQUFTQyx1QkFBdUIsb0JBQW9CO0FBQUEsSUFBQUMsWUFBQUMsMkJBQ3pESixrQkFBQTtBQUR5RCxJQUN6REs7QUFBQSxJQUFBO0FBQXRCLE9BQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQTBDO0FBQUEsVUFBL0JwQixVQUFBaUIsTUFBQUk7QUFDVnRCLGFBQVNDLE9BQU87RUFDakI7QUFBQSxTQUFBc0IsS0FBQTtBQUFBUCxZQUFBYixFQUFBb0IsR0FBQTtBQUFBLFVBQUE7QUFBQVAsWUFBQVEsRUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJTY3JvbGxlciIsICJlbGVtZW50IiwgIndoZWVsSGFuZGxlciIsICJlIiwgImRlbHRhWSIsICJkZWx0YVgiLCAicHJldmVudERlZmF1bHQiLCAicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwgInNjcm9sbEJ5IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAic3R5bGUiLCAic2Nyb2xsU25hcFR5cGUiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJzY3JvbGxlckNvbnRhaW5lcnMiLCAiZG9jdW1lbnQiLCAiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAiZXJyIiwgImYiXQp9Cg==
