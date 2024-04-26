/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Edittools-vector.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edittools-customizeToolbar}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
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

// dist/Edittools-customizeToolbar/Edittools-customizeToolbar.js
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
//! src/Edittools-customizeToolbar/Edittools-customizeToolbar.ts
var Edittools_customizeToolbar_exports = {};
__export(Edittools_customizeToolbar_exports, {
  customizeToolbar: () => customizeToolbar
});
module.exports = __toCommonJS(Edittools_customizeToolbar_exports);
var import_ext_gadget = require("ext.gadget.Util");
var customizeToolbar = (customizer) => {
  if (!mw.user.options.get("usebetatoolbar")) {
    return;
  }
  void (0, import_ext_gadget.getBody)().then(($body) => {
    customizer.call($body.find("textarea[name=wpTextbox1]"));
  });
};
window.customizeToolbar = customizeToolbar;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXR0b29scy1jdXN0b21pemVUb29sYmFyL0VkaXR0b29scy1jdXN0b21pemVUb29sYmFyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgdHlwZSB7Q3VzdG9taXplVG9vbGJhcn0gZnJvbSAnLi9tb2R1bGVzL3R5cGVzJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgY3VzdG9taXplVG9vbGJhcjogQ3VzdG9taXplVG9vbGJhciA9IChjdXN0b21pemVyKSA9PiB7XG5cdGlmICghbXcudXNlci5vcHRpb25zLmdldCgndXNlYmV0YXRvb2xiYXInKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdGN1c3RvbWl6ZXIuY2FsbCgkYm9keS5maW5kKCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykpO1xuXHR9KTtcbn07XG5cbndpbmRvdy5jdXN0b21pemVUb29sYmFyID0gY3VzdG9taXplVG9vbGJhcjtcblxuZXhwb3J0IHtjdXN0b21pemVUb29sYmFyfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFDQUFBLENBQUE7QUFBQUMsU0FBQUQsb0NBQUE7RUFBQUUsa0JBQUFBLE1BQUFBO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBTCxrQ0FBQTtBQUNBLElBQUFNLG9CQUFzQkMsUUFBQSxpQkFBQTtBQUV0QixJQUFNTCxtQkFBc0NNLGdCQUFlO0FBQzFELE1BQUksQ0FBQ0MsR0FBR0MsS0FBS0MsUUFBUUMsSUFBSSxnQkFBZ0IsR0FBRztBQUMzQztFQUNEO0FBRUEsUUFBQSxHQUFLTixrQkFBQU8sU0FBUSxFQUFFQyxLQUFNQyxXQUF5QztBQUM3RFAsZUFBV1EsS0FBS0QsTUFBTUUsS0FBSywyQkFBMkIsQ0FBQztFQUN4RCxDQUFDO0FBQ0Y7QUFFQUMsT0FBT2hCLG1CQUFtQkE7IiwKICAibmFtZXMiOiBbIkVkaXR0b29sc19jdXN0b21pemVUb29sYmFyX2V4cG9ydHMiLCAiX19leHBvcnQiLCAiY3VzdG9taXplVG9vbGJhciIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJjdXN0b21pemVyIiwgIm13IiwgInVzZXIiLCAib3B0aW9ucyIsICJnZXQiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgIiRib2R5IiwgImNhbGwiLCAiZmluZCIsICJ3aW5kb3ciXQp9Cg==
