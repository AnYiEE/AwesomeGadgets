/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Geo}
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

// dist/Geo/Geo.js
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
//! src/Geo/Geo.ts
var Geo_exports = {};
__export(Geo_exports, {
  getGeoInfo: () => getGeoInfo
});
module.exports = __toCommonJS(Geo_exports);
//! src/Geo/options.json
var defaultGeoInfo = {
  countryOrArea: "",
  region: "",
  city: ""
};
//! src/Geo/modules/constant.ts
var STORAGE_KEY = "GeoIP";
//! src/Geo/Geo.ts
var getGeoInfo = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    const storeGeoInfo = mw.storage.getObject(STORAGE_KEY);
    if (storeGeoInfo) {
      return storeGeoInfo;
    }
    try {
      var _ref2, _response$country, _response$region, _response$city;
      const response = yield $.getJSON("https://geo.qiuwen.net.cn");
      const geoInfo = {
        countryOrArea: (_ref2 = (_response$country = response.country) !== null && _response$country !== void 0 ? _response$country : response.countryOrArea) !== null && _ref2 !== void 0 ? _ref2 : "",
        region: (_response$region = response.region) !== null && _response$region !== void 0 ? _response$region : "",
        city: (_response$city = response.city) !== null && _response$city !== void 0 ? _response$city : ""
      };
      mw.storage.setObject(STORAGE_KEY, geoInfo, 60 * 60 * 1e3);
      return geoInfo;
    } catch {
      return defaultGeoInfo;
    }
  });
  return function getGeoInfo2() {
    return _ref.apply(this, arguments);
  };
}();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlby9HZW8udHMiLCAic3JjL0dlby9vcHRpb25zLmpzb24iLCAic3JjL0dlby9tb2R1bGVzL2NvbnN0YW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB0eXBlIHtHZW9JbmZvfSBmcm9tICcuL21vZHVsZXMvdHlwZXMnO1xuaW1wb3J0IHtTVE9SQUdFX0tFWX0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcblxuY29uc3QgZ2V0R2VvSW5mbyA9IGFzeW5jICgpOiBQcm9taXNlPEdlb0luZm8+ID0+IHtcblx0Y29uc3Qgc3RvcmVHZW9JbmZvID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoU1RPUkFHRV9LRVkpIGFzIEdlb0luZm8gfCBudWxsO1xuXHRpZiAoc3RvcmVHZW9JbmZvKSB7XG5cdFx0cmV0dXJuIHN0b3JlR2VvSW5mbztcblx0fVxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgJC5nZXRKU09OKCdodHRwczovL2dlby5xaXV3ZW4ubmV0LmNuJykpIGFzIFBhcnRpYWw8R2VvSW5mbz4gJiB7XG5cdFx0XHRjb3VudHJ5Pzogc3RyaW5nO1xuXHRcdH07XG5cdFx0Y29uc3QgZ2VvSW5mbzogR2VvSW5mbyA9IHtcblx0XHRcdGNvdW50cnlPckFyZWE6IHJlc3BvbnNlLmNvdW50cnkgPz8gcmVzcG9uc2UuY291bnRyeU9yQXJlYSA/PyAnJyxcblx0XHRcdHJlZ2lvbjogcmVzcG9uc2UucmVnaW9uID8/ICcnLFxuXHRcdFx0Y2l0eTogcmVzcG9uc2UuY2l0eSA/PyAnJyxcblx0XHR9O1xuXG5cdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoU1RPUkFHRV9LRVksIGdlb0luZm8sIDYwICogNjAgKiAxMDAwKTtcblxuXHRcdHJldHVybiBnZW9JbmZvO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gT1BUSU9OUy5kZWZhdWx0R2VvSW5mbztcblx0fVxufTtcblxuZXhwb3J0IHtnZXRHZW9JbmZvfTtcbiIsICJ7XG5cdFwiZGVmYXVsdEdlb0luZm9cIjoge1xuXHRcdFwiY291bnRyeU9yQXJlYVwiOiBcIlwiLFxuXHRcdFwicmVnaW9uXCI6IFwiXCIsXG5cdFx0XCJjaXR5XCI6IFwiXCJcblx0fVxufVxuIiwgImNvbnN0IFNUT1JBR0VfS0VZOiBzdHJpbmcgPSAnR2VvSVAnO1xuXG5leHBvcnQge1NUT1JBR0VfS0VZfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxjQUFBLENBQUE7QUFBQUMsU0FBQUQsYUFBQTtFQUFBRSxZQUFBQSxNQUFBQTtBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQUwsV0FBQTs7QUNDQyxJQUFBTSxpQkFBa0I7RUFDakJDLGVBQWlCO0VBQ2pCQyxRQUFVO0VBQ1ZDLE1BQVE7QUFDVDs7QUNMRCxJQUFNQyxjQUFzQjs7QUZJNUIsSUFBTVIsYUFBQSwyQkFBQTtBQUFBLE1BQUFTLE9BQUFDLGtCQUFhLGFBQThCO0FBQ2hELFVBQU1DLGVBQWVDLEdBQUdDLFFBQVFDLFVBQVVOLFdBQVc7QUFDckQsUUFBSUcsY0FBYztBQUNqQixhQUFPQTtJQUNSO0FBRUEsUUFBSTtBQUFBLFVBQUFJLE9BQUFDLG1CQUFBQyxrQkFBQUM7QUFDSCxZQUFNQyxXQUFBLE1BQWtCQyxFQUFFQyxRQUFRLDJCQUEyQjtBQUc3RCxZQUFNQyxVQUFtQjtRQUN4QmpCLGdCQUFBVSxTQUFBQyxvQkFBZUcsU0FBU0ksYUFBQSxRQUFBUCxzQkFBQSxTQUFBQSxvQkFBV0csU0FBU2QsbUJBQUEsUUFBQVUsVUFBQSxTQUFBQSxRQUFpQjtRQUM3RFQsU0FBQVcsbUJBQVFFLFNBQVNiLFlBQUEsUUFBQVcscUJBQUEsU0FBQUEsbUJBQVU7UUFDM0JWLE9BQUFXLGlCQUFNQyxTQUFTWixVQUFBLFFBQUFXLG1CQUFBLFNBQUFBLGlCQUFRO01BQ3hCO0FBRUFOLFNBQUdDLFFBQVFXLFVBQVVoQixhQUFhYyxTQUFTLEtBQUssS0FBSyxHQUFJO0FBRXpELGFBQU9BO0lBQ1IsUUFBUTtBQUNQLGFBQWVsQjtJQUNoQjtFQUNELENBQUE7QUFBQSxTQUFBLFNBdEJNSixjQUFBO0FBQUEsV0FBQVMsS0FBQWdCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTsiLAogICJuYW1lcyI6IFsiR2VvX2V4cG9ydHMiLCAiX19leHBvcnQiLCAiZ2V0R2VvSW5mbyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAiZGVmYXVsdEdlb0luZm8iLCAiY291bnRyeU9yQXJlYSIsICJyZWdpb24iLCAiY2l0eSIsICJTVE9SQUdFX0tFWSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInN0b3JlR2VvSW5mbyIsICJtdyIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJfcmVmMiIsICJfcmVzcG9uc2UkY291bnRyeSIsICJfcmVzcG9uc2UkcmVnaW9uIiwgIl9yZXNwb25zZSRjaXR5IiwgInJlc3BvbnNlIiwgIiQiLCAiZ2V0SlNPTiIsICJnZW9JbmZvIiwgImNvdW50cnkiLCAic2V0T2JqZWN0IiwgImFwcGx5IiwgImFyZ3VtZW50cyJdCn0K
