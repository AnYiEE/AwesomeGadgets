/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT}}'
 *
 * @base {@link https://github.com/fregante/filter-altered-clicks}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/FilterAlteredClicks}
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

// dist/FilterAlteredClicks/FilterAlteredClicks.js
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/FilterAlteredClicks/FilterAlteredClicks.ts
var FilterAlteredClicks_exports = {};
__export(FilterAlteredClicks_exports, {
  filterAlteredClicks: () => filterAlteredClicks
});
module.exports = __toCommonJS(FilterAlteredClicks_exports);
function filterAlteredClicks(callback, onlyPhysical) {
  return function(event) {
    event = event.originalEvent || event;
    if (event instanceof MouseEvent && event.which > 1 || event.shiftKey || event.altKey || event.metaKey || event.ctrlKey || !onlyPhysical && event.defaultPrevented) {
      return;
    }
    return callback.call(this, event);
  };
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0ZpbHRlckFsdGVyZWRDbGlja3MvRmlsdGVyQWx0ZXJlZENsaWNrcy50cyIsICJub2RlX21vZHVsZXMvLnBucG0vZmlsdGVyLWFsdGVyZWQtY2xpY2tzQDIuMC4xL25vZGVfbW9kdWxlcy9maWx0ZXItYWx0ZXJlZC1jbGlja3MvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCB7ZGVmYXVsdCBhcyBmaWx0ZXJBbHRlcmVkQ2xpY2tzfSBmcm9tICdmaWx0ZXItYWx0ZXJlZC1jbGlja3MnO1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbHRlckFsdGVyZWRDbGlja3MoY2FsbGJhY2ssIG9ubHlQaHlzaWNhbCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQgPSBldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50OyAvLyBKUXVlcnkgc3VwcG9ydFxuXHRcdGlmIChcblx0XHRcdChldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgJiYgZXZlbnQud2hpY2ggPiAxKVxuXHRcdFx0fHwgZXZlbnQuc2hpZnRLZXlcblx0XHRcdHx8IGV2ZW50LmFsdEtleVxuXHRcdFx0fHwgZXZlbnQubWV0YUtleVxuXHRcdFx0fHwgZXZlbnQuY3RybEtleVxuXHRcdFx0fHwgKCFvbmx5UGh5c2ljYWwgJiYgZXZlbnQuZGVmYXVsdFByZXZlbnRlZClcblx0XHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzLCBldmVudCk7XG5cdH07XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDhCQUFBLENBQUE7QUFBQUMsU0FBQUQsNkJBQUE7RUFBQUUscUJBQUFBLE1BQUFBO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBTCwyQkFBQTtBQ0FlLFNBQVJFLG9CQUFxQ0ksVUFBVUMsY0FBYztBQUNuRSxTQUFPLFNBQVVDLE9BQU87QUFDdkJBLFlBQVFBLE1BQU1DLGlCQUFpQkQ7QUFDL0IsUUFDRUEsaUJBQWlCRSxjQUFjRixNQUFNRyxRQUFRLEtBQzNDSCxNQUFNSSxZQUNOSixNQUFNSyxVQUNOTCxNQUFNTSxXQUNOTixNQUFNTyxXQUNMLENBQUNSLGdCQUFnQkMsTUFBTVEsa0JBQzFCO0FBQ0Q7SUFDRDtBQUVBLFdBQU9WLFNBQVNXLEtBQUssTUFBTVQsS0FBSztFQUNqQztBQUNEOyIsCiAgIm5hbWVzIjogWyJGaWx0ZXJBbHRlcmVkQ2xpY2tzX2V4cG9ydHMiLCAiX19leHBvcnQiLCAiZmlsdGVyQWx0ZXJlZENsaWNrcyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAiY2FsbGJhY2siLCAib25seVBoeXNpY2FsIiwgImV2ZW50IiwgIm9yaWdpbmFsRXZlbnQiLCAiTW91c2VFdmVudCIsICJ3aGljaCIsICJzaGlmdEtleSIsICJhbHRLZXkiLCAibWV0YUtleSIsICJjdHJsS2V5IiwgImRlZmF1bHRQcmV2ZW50ZWQiLCAiY2FsbCJdCn0K
