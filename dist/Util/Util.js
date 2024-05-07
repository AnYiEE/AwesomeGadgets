/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Util}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://youshou.wiki/wiki/H:GPLV3}
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

// dist/Util/Util.js
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/Util/Util.ts
var Util_exports = {};
__export(Util_exports, {
  addEventListenerWithRemover: () => addEventListenerWithRemover,
  changeOpacityWhenMouseEnterOrLeave: () => changeOpacityWhenMouseEnterOrLeave,
  checkA11yConfirmKey: () => checkA11yConfirmKey,
  delay: () => delay,
  generateArray: () => generateArray,
  generateSvgDataUrl: () => generateSvgDataUrl,
  getBody: () => getBody,
  initMwApi: () => initMwApi,
  isValidKey: () => isValidKey,
  oouiConfirmWithStyle: () => oouiConfirmWithStyle,
  scrollTop: () => scrollTop,
  userHasRight: () => userHasRight,
  userIsInGroup: () => userIsInGroup
});
module.exports = __toCommonJS(Util_exports);
//! src/Util/modules/addEventListenerWithRemover.ts
var addEventListenerWithRemover = ({
  target,
  type,
  listener,
  options = {}
}) => {
  target.addEventListener(type, listener, options);
  return {
    remove: () => {
      target.removeEventListener(type, listener, options);
    }
  };
};
//! src/Util/modules/changeOpacityWhenMouseEnterOrLeave.ts
var changeOpacityWhenMouseEnterOrLeave = (event, opacity = 0.7) => {
  event.currentTarget.style.opacity = event.type === "mouseenter" ? "1" : opacity.toString();
};
//! src/Util/modules/checkA11yConfirmKey.ts
var checkA11yConfirmKey = (event) => {
  if (["click", "keydown"].includes(event.type)) {
    if (event.type === "keydown") {
      return ["Enter", " "].includes(event.key);
    }
    return true;
  }
  return false;
};
//! src/Util/modules/delay.ts
var delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
//! src/Util/modules/generateArray.ts
function generateArray(...args) {
  return args.flatMap((arg) => {
    if (Array.isArray(arg)) {
      return arg;
    }
    if (arg instanceof NodeList) {
      return [...arg];
    }
    return [arg];
  });
}
//! src/Util/modules/generateSvgDataUrl.ts
var generateSvgDataUrl = (svg) => {
  /*!
   * SPDX-License-Identifier: MIT
   *
   * @file svg-to-data-uri.js {@link https://github.com/heyallan/svg-to-data-uri/}
   *
   * @author Allan Moreno
   * @license MIT {@link https://github.com/heyallan/svg-to-data-uri/blob/master/LICENSE}
   */
  svg = svg.trim();
  svg = svg.slice(svg.indexOf("<svg"));
  if (!svg.startsWith("<svg") || !svg.endsWith("svg>")) {
    return "";
  }
  if (!svg.includes("http://www.w3.org/2000/svg")) {
    svg = svg.replace(/<svg/g, "<svg xmlns='http://www.w3.org/2000/svg'");
  }
  svg = svg.replace(/<!--.{1,}-->/g, "");
  svg = svg.replace(/version=["'](.{0,}?)["'](?=[\s>])/g, "");
  svg = svg.replace(/"'(.{1,})'"/g, "'$1'");
  svg = svg.replace(/"/g, "'");
  svg = svg.replace(/>\s{1,}</g, "><");
  svg = svg.replace(/\s{2,}/g, " ");
  svg = svg.trim();
  if (!svg.startsWith("<svg") || !svg.endsWith("svg>")) {
    return "";
  }
  svg = svg.replace(/&/g, "&amp;");
  svg = svg.replace(/[%#<>?[\\\]^`{|}]/g, encodeURIComponent);
  svg = "data:image/svg+xml,".concat(svg);
  return svg;
};
//! src/Util/modules/getBody.ts
var getBody = () => {
  return $.ready.then(() => {
    const $body = $("body");
    return $body;
  });
};
//! src/Util/modules/initMwApi.ts
function initMwApi(userAgent, apiUri) {
  const apiOptions = {
    ajax: {
      headers: {
        "Api-User-Agent": userAgent ? "YsArchives/1.1 (".concat(userAgent, ")") : "YsArchives/1.1"
      }
    }
  };
  if (apiUri) {
    return new mw.ForeignApi(apiUri, apiOptions);
  }
  return new mw.Api(apiOptions);
}
//! src/Util/modules/isValidKey.ts
var isValidKey = (object, key) => {
  return key in object;
};
//! src/Util/modules/oouiConfirmWithStyle.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
var oouiConfirmWithStyle = (message) => OO.ui.confirm($(/* @__PURE__ */ import_ext_gadget.default.createElement("div", {
  className: "oo-ui-window-foot",
  style: {
    border: ".1rem solid #0645ad",
    display: "flex",
    justifyContent: "space-evenly"
  }
}, /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
  style: {
    fontSize: "1.2rem",
    fontWeight: "500",
    lineHeight: "1.8",
    padding: ".4em 0"
  }
}, message)))).then((isConfirm) => isConfirm);
//! src/Util/modules/scrollTop.ts
var scrollTop = (targetHeight, effectsOptionsOrDuration = {}) => {
  const options = typeof effectsOptionsOrDuration === "number" || typeof effectsOptionsOrDuration === "string" ? {
    duration: effectsOptionsOrDuration,
    easing: "linear"
  } : {
    duration: "slow",
    easing: "linear",
    ...effectsOptionsOrDuration
  };
  $(document).find("html, body").animate({
    scrollTop: targetHeight
  }, options);
};
//! src/Util/modules/userIsInGroup.ts
var userIsInGroup = (group) => {
  const {
    wgUserGroups,
    wgGlobalGroups
  } = mw.config.get();
  return (wgUserGroups === null || wgUserGroups === void 0 ? void 0 : wgUserGroups.includes(group)) || (wgGlobalGroups === null || wgGlobalGroups === void 0 ? void 0 : wgGlobalGroups.includes(group));
};
//! src/Util/modules/userHasRight.ts
var userHasRight = (right) => {
  const {
    wgUserRights
  } = mw.config.get();
  return wgUserRights === null || wgUserRights === void 0 ? void 0 : wgUserRights.includes(right);
};

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1V0aWwvVXRpbC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlci50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZGVsYXkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9nZW5lcmF0ZUFycmF5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZ2VuZXJhdGVTdmdEYXRhVXJsLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZ2V0Qm9keS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2luaXRNd0FwaS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2lzVmFsaWRLZXkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9vb3VpQ29uZmlybVdpdGhTdHlsZS50c3giLCAic3JjL1V0aWwvbW9kdWxlcy9zY3JvbGxUb3AudHMiLCAic3JjL1V0aWwvbW9kdWxlcy91c2VySXNJbkdyb3VwLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvdXNlckhhc1JpZ2h0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnLi9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcic7XG5leHBvcnQge2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9IGZyb20gJy4vbW9kdWxlcy9jaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlJztcbmV4cG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleX0gZnJvbSAnLi9tb2R1bGVzL2NoZWNrQTExeUNvbmZpcm1LZXknO1xuZXhwb3J0IHtkZWxheX0gZnJvbSAnLi9tb2R1bGVzL2RlbGF5JztcbmV4cG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnLi9tb2R1bGVzL2dlbmVyYXRlQXJyYXknO1xuZXhwb3J0IHtnZW5lcmF0ZVN2Z0RhdGFVcmx9IGZyb20gJy4vbW9kdWxlcy9nZW5lcmF0ZVN2Z0RhdGFVcmwnO1xuZXhwb3J0IHtnZXRCb2R5fSBmcm9tICcuL21vZHVsZXMvZ2V0Qm9keSc7XG5leHBvcnQge2luaXRNd0FwaX0gZnJvbSAnLi9tb2R1bGVzL2luaXRNd0FwaSc7XG5leHBvcnQge2lzVmFsaWRLZXl9IGZyb20gJy4vbW9kdWxlcy9pc1ZhbGlkS2V5JztcbmV4cG9ydCB7b291aUNvbmZpcm1XaXRoU3R5bGV9IGZyb20gJy4vbW9kdWxlcy9vb3VpQ29uZmlybVdpdGhTdHlsZSc7XG5leHBvcnQge3Njcm9sbFRvcH0gZnJvbSAnLi9tb2R1bGVzL3Njcm9sbFRvcCc7XG5leHBvcnQge3VzZXJJc0luR3JvdXB9IGZyb20gJy4vbW9kdWxlcy91c2VySXNJbkdyb3VwJztcbmV4cG9ydCB7dXNlckhhc1JpZ2h0fSBmcm9tICcuL21vZHVsZXMvdXNlckhhc1JpZ2h0JztcbiIsICJ0eXBlIEFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciA9IDxcblx0VGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnQgfCBIVE1MRWxlbWVudCB8IEVsZW1lbnQgfCBNZWRpYVF1ZXJ5TGlzdCB8IFdpbmRvdyxcblx0VHlwZSBleHRlbmRzIFRhcmdldCBleHRlbmRzIERvY3VtZW50XG5cdFx0PyBrZXlvZiBEb2N1bWVudEV2ZW50TWFwXG5cdFx0OiBUYXJnZXQgZXh0ZW5kcyBIVE1MRWxlbWVudFxuXHRcdFx0PyBrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwXG5cdFx0XHQ6IFRhcmdldCBleHRlbmRzIE1lZGlhUXVlcnlMaXN0XG5cdFx0XHRcdD8ga2V5b2YgTWVkaWFRdWVyeUxpc3RFdmVudE1hcFxuXHRcdFx0XHQ6IFRhcmdldCBleHRlbmRzIFdpbmRvd1xuXHRcdFx0XHRcdD8ga2V5b2YgV2luZG93RXZlbnRNYXBcblx0XHRcdFx0XHQ6IGtleW9mIEdsb2JhbEV2ZW50SGFuZGxlcnNFdmVudE1hcCxcblx0TGlzdGVuZXIgZXh0ZW5kcyBUYXJnZXQgZXh0ZW5kcyBEb2N1bWVudFxuXHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIERvY3VtZW50RXZlbnRNYXBcblx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IERvY3VtZW50RXZlbnRNYXBbVHlwZV0pID0+IHVua25vd25cblx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0OiBUYXJnZXQgZXh0ZW5kcyBIVE1MRWxlbWVudFxuXHRcdFx0PyBUeXBlIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBIVE1MRWxlbWVudEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHQ6IFRhcmdldCBleHRlbmRzIEVsZW1lbnRcblx0XHRcdFx0PyBUeXBlIGV4dGVuZHMga2V5b2YgRWxlbWVudEV2ZW50TWFwXG5cdFx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogRWxlbWVudEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd25cblx0XHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBNZWRpYVF1ZXJ5TGlzdFxuXHRcdFx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIE1lZGlhUXVlcnlMaXN0RXZlbnRNYXBcblx0XHRcdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IE1lZGlhUXVlcnlMaXN0RXZlbnRNYXBbVHlwZV0pID0+IHVua25vd25cblx0XHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBXaW5kb3dcblx0XHRcdFx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIFdpbmRvd0V2ZW50TWFwXG5cdFx0XHRcdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IFdpbmRvd0V2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93bixcbj4oe1xuXHR0YXJnZXQsXG5cdHR5cGUsXG5cdGxpc3RlbmVyLFxuXHRvcHRpb25zLFxufToge1xuXHR0YXJnZXQ6IFRhcmdldDtcblx0dHlwZTogVHlwZTtcblx0bGlzdGVuZXI6IExpc3RlbmVyO1xuXHRvcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnM7XG59KSA9PiB7XG5cdHJlbW92ZTogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlcjogQWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyID0gKHt0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zID0ge319KSA9PiB7XG5cdHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyIGFzIEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsIG9wdGlvbnMpO1xuXHRyZXR1cm4ge1xuXHRcdHJlbW92ZTogKCk6IHZvaWQgPT4ge1xuXHRcdFx0dGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIgYXMgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCwgb3B0aW9ucyk7XG5cdFx0fSxcblx0fTtcbn07XG5cbmV4cG9ydCB7dHlwZSBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIsIGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn07XG4iLCAidHlwZSBDaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlID0gKGV2ZW50OiBNb3VzZUV2ZW50IHwgSlF1ZXJ5LlRyaWdnZXJlZEV2ZW50LCBvcGFjaXR5PzogbnVtYmVyKSA9PiB2b2lkO1xuXG5jb25zdCBjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlOiBDaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlID0gKGV2ZW50LCBvcGFjaXR5ID0gMC43KSA9PiB7XG5cdChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5zdHlsZS5vcGFjaXR5ID0gZXZlbnQudHlwZSA9PT0gJ21vdXNlZW50ZXInID8gJzEnIDogb3BhY2l0eS50b1N0cmluZygpO1xufTtcblxuZXhwb3J0IHt0eXBlIENoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUsIGNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9O1xuIiwgInR5cGUgQ2hlY2tBMTF5Q29uZmlybUtleSA9IChldmVudDogS2V5Ym9hcmRFdmVudCB8IE1vdXNlRXZlbnQgfCBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpID0+IGJvb2xlYW47XG5cbmNvbnN0IGNoZWNrQTExeUNvbmZpcm1LZXk6IENoZWNrQTExeUNvbmZpcm1LZXkgPSAoZXZlbnQpOiBib29sZWFuID0+IHtcblx0aWYgKFsnY2xpY2snLCAna2V5ZG93biddLmluY2x1ZGVzKGV2ZW50LnR5cGUpKSB7XG5cdFx0aWYgKGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJykge1xuXHRcdFx0cmV0dXJuIFsnRW50ZXInLCAnICddLmluY2x1ZGVzKChldmVudCBhcyBLZXlib2FyZEV2ZW50KS5rZXkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQge3R5cGUgQ2hlY2tBMTF5Q29uZmlybUtleSwgY2hlY2tBMTF5Q29uZmlybUtleX07XG4iLCAidHlwZSBEZWxheSA9IChtczogbnVtYmVyKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG5jb25zdCBkZWxheTogRGVsYXkgPSAobXMpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAoKSA9PiB2b2lkKTogdm9pZCA9PiB7XG5cdFx0c2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHt0eXBlIERlbGF5LCBkZWxheX07XG4iLCAidHlwZSBHZW5lcmF0ZUFycmF5ID0gdHlwZW9mIGdlbmVyYXRlQXJyYXk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQXJyYXk8VCBleHRlbmRzIFtdPiguLi5hcmdzOiAoVCB8IFRbXSlbXSk6IFRbXTtcbmZ1bmN0aW9uIGdlbmVyYXRlQXJyYXk8VCBleHRlbmRzIE5vZGVMaXN0PiguLi5hcmdzOiAoVCB8IFRbXSlbXSk6IE5vZGVbXTtcbmZ1bmN0aW9uIGdlbmVyYXRlQXJyYXk8VCA9IHVua25vd24+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogVFtdO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmZ1bmN0aW9uIGdlbmVyYXRlQXJyYXk8VD4oLi4uYXJnczogKFQgfCBUW10pW10pOiBUW10ge1xuXHRyZXR1cm4gYXJncy5mbGF0TWFwKChhcmcpID0+IHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRyZXR1cm4gYXJnO1xuXHRcdH1cblxuXHRcdGlmIChhcmcgaW5zdGFuY2VvZiBOb2RlTGlzdCkge1xuXHRcdFx0cmV0dXJuIFsuLi5hcmddIGFzIFQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFthcmddO1xuXHR9KTtcbn1cblxuZXhwb3J0IHt0eXBlIEdlbmVyYXRlQXJyYXksIGdlbmVyYXRlQXJyYXl9O1xuIiwgInR5cGUgR2VuZXJhdGVTdmdEYXRhVXJsID0gKHN2Zzogc3RyaW5nKSA9PiBzdHJpbmc7XG5cbmNvbnN0IGdlbmVyYXRlU3ZnRGF0YVVybDogR2VuZXJhdGVTdmdEYXRhVXJsID0gKHN2ZykgPT4ge1xuXHQvKiFcblx0ICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuXHQgKlxuXHQgKiBAZmlsZSBzdmctdG8tZGF0YS11cmkuanMge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9oZXlhbGxhbi9zdmctdG8tZGF0YS11cmkvfVxuXHQgKlxuXHQgKiBAYXV0aG9yIEFsbGFuIE1vcmVub1xuXHQgKiBAbGljZW5zZSBNSVQge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9oZXlhbGxhbi9zdmctdG8tZGF0YS11cmkvYmxvYi9tYXN0ZXIvTElDRU5TRX1cblx0ICovXG5cdHN2ZyA9IHN2Zy50cmltKCk7XG5cdC8vIHJlbW92ZSB4bWwsIGRvY3R5cGUsIGdlbmVyYXRvci4uLlxuXHRzdmcgPSBzdmcuc2xpY2Uoc3ZnLmluZGV4T2YoJzxzdmcnKSk7XG5cdC8vIHNvZnQgdmFsaWRhdGVcblx0aWYgKCFzdmcuc3RhcnRzV2l0aCgnPHN2ZycpIHx8ICFzdmcuZW5kc1dpdGgoJ3N2Zz4nKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHQvLyBhZGQgbmFtZXNwYWNlIGlmIG5lY2Vzc2FyeVxuXHRpZiAoIXN2Zy5pbmNsdWRlcygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKSkge1xuXHRcdHN2ZyA9IHN2Zy5yZXBsYWNlKC88c3ZnL2csIFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXCIpO1xuXHR9XG5cdC8vIHJlbW92ZSBjb21tZW50c1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvPCEtLS57MSx9LS0+L2csICcnKTtcblx0Ly8gcmVtb3ZlIHVubmVjZXNzYXJ5IGF0dHJpYnV0ZXNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL3ZlcnNpb249W1wiJ10oLnswLH0/KVtcIiddKD89W1xccz5dKS9nLCAnJyk7XG5cdC8vIHJlcGxhY2UgbmVzdGVkIHF1b3Rlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvXCInKC57MSx9KSdcIi9nLCBcIickMSdcIik7XG5cdC8vIHJlcGxhY2UgZG91YmxlIHF1b3Rlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvXCIvZywgXCInXCIpO1xuXHQvLyByZW1vdmUgZW1wdHkgc3BhY2VzIGJldHdlZW4gdGFnc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvPlxcc3sxLH08L2csICc+PCcpO1xuXHQvLyByZW1vdmUgZHVwbGljYXRlIHNwYWNlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpO1xuXHQvLyB0cmltIGFnYWluXG5cdHN2ZyA9IHN2Zy50cmltKCk7XG5cdC8vIHNvZnQgdmFsaWRhdGUgYWdhaW5cblx0aWYgKCFzdmcuc3RhcnRzV2l0aCgnPHN2ZycpIHx8ICFzdmcuZW5kc1dpdGgoJ3N2Zz4nKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHQvLyByZXBsYWNlIGFtcGVyc2FuZFxuXHRzdmcgPSBzdmcucmVwbGFjZSgvJi9nLCAnJmFtcDsnKTtcblx0Ly8gZW5jb2RlIG9ubHkgdW5zYWZlIHN5bWJvbHNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL1slIzw+P1tcXFxcXFxdXmB7fH1dL2csIGVuY29kZVVSSUNvbXBvbmVudCk7XG5cdC8vIGJ1aWxkIGRhdGEgdXJpXG5cdHN2ZyA9IGBkYXRhOmltYWdlL3N2Zyt4bWwsJHtzdmd9YDtcblx0Ly8gb2ssIHNoaXAgaXQhXG5cdHJldHVybiBzdmc7XG59O1xuXG5leHBvcnQge3R5cGUgR2VuZXJhdGVTdmdEYXRhVXJsLCBnZW5lcmF0ZVN2Z0RhdGFVcmx9O1xuIiwgInR5cGUgR2V0Qm9keSA9ICgpID0+IEpRdWVyeS5UaGVuYWJsZTxKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pj47XG5cbmNvbnN0IGdldEJvZHkgPSAoKSA9PiB7XG5cdHJldHVybiAkLnJlYWR5LnRoZW4oKCk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0+IHtcblx0XHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cblx0XHRyZXR1cm4gJGJvZHk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHt0eXBlIEdldEJvZHksIGdldEJvZHl9O1xuIiwgInR5cGUgSW5pdE13QXBpID0gdHlwZW9mIGluaXRNd0FwaTtcblxuLyoqXG4gKiBAcmVxdWlyZXMgbWVkaWF3aWtpLmFwaVxuICogQHBhcmFtIHtzdHJpbmd9IFt1c2VyQWdlbnRdXG4gKiBAcGFyYW0ge3N0cmluZ30gW2FwaVVyaV1cbiAqIEByZXR1cm4ge213LkFwaXxtdy5Gb3JlaWduQXBpfVxuICovXG5mdW5jdGlvbiBpbml0TXdBcGkodXNlckFnZW50Pzogc3RyaW5nKTogbXcuQXBpO1xuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudDogc3RyaW5nLCBhcGlVcmk6IHN0cmluZyk6IG13LkZvcmVpZ25BcGk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1zdHlsZVxuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudD86IHN0cmluZywgYXBpVXJpPzogc3RyaW5nKTogbXcuQXBpIHwgbXcuRm9yZWlnbkFwaSB7XG5cdGNvbnN0IGFwaU9wdGlvbnMgPSB7XG5cdFx0YWpheDoge1xuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQXBpLVVzZXItQWdlbnQnOiB1c2VyQWdlbnQgPyBgWXNBcmNoaXZlcy8xLjEgKCR7dXNlckFnZW50fSlgIDogJ1lzQXJjaGl2ZXMvMS4xJyxcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblxuXHRpZiAoYXBpVXJpKSB7XG5cdFx0cmV0dXJuIG5ldyBtdy5Gb3JlaWduQXBpKGFwaVVyaSwgYXBpT3B0aW9ucyk7XG5cdH1cblxuXHRyZXR1cm4gbmV3IG13LkFwaShhcGlPcHRpb25zKTtcbn1cblxuZXhwb3J0IHt0eXBlIEluaXRNd0FwaSwgaW5pdE13QXBpfTtcbiIsICJ0eXBlIElzVmFsaWRLZXkgPSB0eXBlb2YgaXNWYWxpZEtleTtcblxuY29uc3QgaXNWYWxpZEtleSA9IChvYmplY3Q6IG9iamVjdCwga2V5OiBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wpOiBrZXkgaXMga2V5b2YgdHlwZW9mIG9iamVjdCA9PiB7XG5cdHJldHVybiBrZXkgaW4gb2JqZWN0O1xufTtcblxuZXhwb3J0IHt0eXBlIElzVmFsaWRLZXksIGlzVmFsaWRLZXl9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxudHlwZSBPb3VpQ29uZmlybVdpdGhTdHlsZSA9IChtZXNzYWdlOiBzdHJpbmcpID0+IEpRdWVyeS5Qcm9taXNlPGJvb2xlYW4+O1xuXG4vKipcbiAqIEByZXF1aXJlcyBvb2pzLXVpLXdpbmRvd3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZV1cbiAqIEByZXR1cm4ge0pRdWVyeS5Qcm9taXNlPGJvb2xlYW4+fVxuICovXG5jb25zdCBvb3VpQ29uZmlybVdpdGhTdHlsZTogT291aUNvbmZpcm1XaXRoU3R5bGUgPSAobWVzc2FnZSkgPT5cblx0T08udWlcblx0XHQuY29uZmlybShcblx0XHRcdCQoXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJvby11aS13aW5kb3ctZm9vdFwiXG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdGJvcmRlcjogJy4xcmVtIHNvbGlkICMwNjQ1YWQnLFxuXHRcdFx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0Zm9udFNpemU6ICcxLjJyZW0nLFxuXHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiAnNTAwJyxcblx0XHRcdFx0XHRcdFx0bGluZUhlaWdodDogJzEuOCcsXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcuNGVtIDAnLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7bWVzc2FnZX1cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSBhcyBKUXVlcnlcblx0XHQpXG5cdFx0LnRoZW4oKGlzQ29uZmlybTogYm9vbGVhbik6IGJvb2xlYW4gPT4gaXNDb25maXJtKTtcblxuZXhwb3J0IHt0eXBlIE9vdWlDb25maXJtV2l0aFN0eWxlLCBvb3VpQ29uZmlybVdpdGhTdHlsZX07XG4iLCAidHlwZSBTY3JvbGxUb3AgPSAoXG5cdHRhcmdldEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuXHRlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24/OiBKUXVlcnkuRWZmZWN0c09wdGlvbnM8SFRNTEVsZW1lbnQ+IHwgbnVtYmVyIHwgJ2Zhc3QnIHwgJ3Nsb3cnXG4pID0+IHZvaWQ7XG5cbmNvbnN0IHNjcm9sbFRvcDogU2Nyb2xsVG9wID0gKHRhcmdldEhlaWdodCwgZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uID0ge30pID0+IHtcblx0Y29uc3Qgb3B0aW9uczogSlF1ZXJ5LkVmZmVjdHNPcHRpb25zPEhUTUxFbGVtZW50PiA9XG5cdFx0dHlwZW9mIGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiA9PT0gJ3N0cmluZydcblx0XHRcdD8ge1xuXHRcdFx0XHRcdGR1cmF0aW9uOiBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24sXG5cdFx0XHRcdFx0ZWFzaW5nOiAnbGluZWFyJyxcblx0XHRcdFx0fVxuXHRcdFx0OiB7XG5cdFx0XHRcdFx0ZHVyYXRpb246ICdzbG93Jyxcblx0XHRcdFx0XHRlYXNpbmc6ICdsaW5lYXInLFxuXHRcdFx0XHRcdC4uLmVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbixcblx0XHRcdFx0fTtcblx0JChkb2N1bWVudCkuZmluZCgnaHRtbCwgYm9keScpLmFuaW1hdGUoXG5cdFx0e1xuXHRcdFx0c2Nyb2xsVG9wOiB0YXJnZXRIZWlnaHQsXG5cdFx0fSxcblx0XHRvcHRpb25zXG5cdCk7XG59O1xuXG5leHBvcnQge3R5cGUgU2Nyb2xsVG9wLCBzY3JvbGxUb3B9O1xuIiwgInR5cGUgVXNlcklzSW5Hcm91cCA9IHR5cGVvZiB1c2VySXNJbkdyb3VwO1xuXG5jb25zdCB1c2VySXNJbkdyb3VwID0gKGdyb3VwOiBzdHJpbmcpID0+IHtcblx0Y29uc3Qge3dnVXNlckdyb3Vwcywgd2dHbG9iYWxHcm91cHN9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRyZXR1cm4gd2dVc2VyR3JvdXBzPy5pbmNsdWRlcyhncm91cCkgfHwgKHdnR2xvYmFsR3JvdXBzIGFzIHN0cmluZ1tdKT8uaW5jbHVkZXMoZ3JvdXApO1xufTtcblxuZXhwb3J0IHt0eXBlIFVzZXJJc0luR3JvdXAsIHVzZXJJc0luR3JvdXB9O1xuIiwgInR5cGUgVXNlckhhc1JpZ2h0ID0gdHlwZW9mIHVzZXJIYXNSaWdodDtcblxuY29uc3QgdXNlckhhc1JpZ2h0ID0gKHJpZ2h0OiBzdHJpbmcpID0+IHtcblx0Y29uc3Qge3dnVXNlclJpZ2h0c30gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiAod2dVc2VyUmlnaHRzIGFzIHN0cmluZ1tdKT8uaW5jbHVkZXMocmlnaHQpO1xufTtcblxuZXhwb3J0IHt0eXBlIFVzZXJIYXNSaWdodCwgdXNlckhhc1JpZ2h0fTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxlQUFBLENBQUE7QUFBQUMsU0FBQUQsY0FBQTtFQUFBRSw2QkFBQUEsTUFBQUE7RUFBQUMsb0NBQUFBLE1BQUFBO0VBQUFDLHFCQUFBQSxNQUFBQTtFQUFBQyxPQUFBQSxNQUFBQTtFQUFBQyxlQUFBQSxNQUFBQTtFQUFBQyxvQkFBQUEsTUFBQUE7RUFBQUMsU0FBQUEsTUFBQUE7RUFBQUMsV0FBQUEsTUFBQUE7RUFBQUMsWUFBQUEsTUFBQUE7RUFBQUMsc0JBQUFBLE1BQUFBO0VBQUFDLFdBQUFBLE1BQUFB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QUFBQSxpQkFBQSxTQUFBLFNBQUFBLGFBQWM1RCxTQUFTMkQsS0FBSyxPQUFNRSxtQkFBQSxRQUFBQSxtQkFBQSxTQUFBLFNBQUFBLGVBQTZCN0QsU0FBUzJELEtBQUs7QUFDckY7O0FDSEEsSUFBTTVFLGVBQWdCaUYsV0FBa0I7QUFDdkMsUUFBTTtJQUFDQztFQUFZLElBQUluQyxHQUFHZ0MsT0FBT0MsSUFBSTtBQUNyQyxTQUFRRSxpQkFBQSxRQUFBQSxpQkFBQSxTQUFBLFNBQUFBLGFBQTJCakUsU0FBU2dFLEtBQUs7QUFDbEQ7IiwKICAibmFtZXMiOiBbIlV0aWxfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIiLCAiY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSIsICJjaGVja0ExMXlDb25maXJtS2V5IiwgImRlbGF5IiwgImdlbmVyYXRlQXJyYXkiLCAiZ2VuZXJhdGVTdmdEYXRhVXJsIiwgImdldEJvZHkiLCAiaW5pdE13QXBpIiwgImlzVmFsaWRLZXkiLCAib291aUNvbmZpcm1XaXRoU3R5bGUiLCAic2Nyb2xsVG9wIiwgInVzZXJIYXNSaWdodCIsICJ1c2VySXNJbkdyb3VwIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJ0YXJnZXQiLCAidHlwZSIsICJsaXN0ZW5lciIsICJvcHRpb25zIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAicmVtb3ZlIiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAib3BhY2l0eSIsICJjdXJyZW50VGFyZ2V0IiwgInN0eWxlIiwgInRvU3RyaW5nIiwgImluY2x1ZGVzIiwgImtleSIsICJtcyIsICJQcm9taXNlIiwgInJlc29sdmUiLCAic2V0VGltZW91dCIsICJhcmdzIiwgImZsYXRNYXAiLCAiYXJnIiwgIkFycmF5IiwgImlzQXJyYXkiLCAiTm9kZUxpc3QiLCAic3ZnIiwgInRyaW0iLCAic2xpY2UiLCAiaW5kZXhPZiIsICJzdGFydHNXaXRoIiwgImVuZHNXaXRoIiwgInJlcGxhY2UiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImNvbmNhdCIsICIkIiwgInJlYWR5IiwgInRoZW4iLCAiJGJvZHkiLCAidXNlckFnZW50IiwgImFwaVVyaSIsICJhcGlPcHRpb25zIiwgImFqYXgiLCAiaGVhZGVycyIsICJtdyIsICJGb3JlaWduQXBpIiwgIkFwaSIsICJvYmplY3QiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgIm1lc3NhZ2UiLCAiT08iLCAidWkiLCAiY29uZmlybSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImJvcmRlciIsICJkaXNwbGF5IiwgImp1c3RpZnlDb250ZW50IiwgImZvbnRTaXplIiwgImZvbnRXZWlnaHQiLCAibGluZUhlaWdodCIsICJwYWRkaW5nIiwgImlzQ29uZmlybSIsICJ0YXJnZXRIZWlnaHQiLCAiZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uIiwgImR1cmF0aW9uIiwgImVhc2luZyIsICJkb2N1bWVudCIsICJmaW5kIiwgImFuaW1hdGUiLCAiZ3JvdXAiLCAid2dVc2VyR3JvdXBzIiwgIndnR2xvYmFsR3JvdXBzIiwgImNvbmZpZyIsICJnZXQiLCAicmlnaHQiLCAid2dVc2VyUmlnaHRzIl0KfQo=
