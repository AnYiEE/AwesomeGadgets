/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/Util}
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
  generateSvgDataUrl: () => generateSvgDataUrl,
  getBody: () => getBody,
  initMwApi: () => initMwApi,
  isValidKey: () => isValidKey,
  oouiConfirmWithStyle: () => oouiConfirmWithStyle,
  scrollTop: () => scrollTop
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
        "Api-User-Agent": userAgent ? "YsArxiv/1.1 (".concat(userAgent, ")") : "YsArxiv/1.1"
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

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1V0aWwvVXRpbC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlci50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZGVsYXkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9nZW5lcmF0ZVN2Z0RhdGFVcmwudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9nZXRCb2R5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvaW5pdE13QXBpLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvaXNWYWxpZEtleS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL29vdWlDb25maXJtV2l0aFN0eWxlLnRzeCIsICJzcmMvVXRpbC9tb2R1bGVzL3Njcm9sbFRvcC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IHthZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXJ9IGZyb20gJy4vbW9kdWxlcy9hZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXInO1xuZXhwb3J0IHtjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlfSBmcm9tICcuL21vZHVsZXMvY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSc7XG5leHBvcnQge2NoZWNrQTExeUNvbmZpcm1LZXl9IGZyb20gJy4vbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5JztcbmV4cG9ydCB7ZGVsYXl9IGZyb20gJy4vbW9kdWxlcy9kZWxheSc7XG5leHBvcnQge2dlbmVyYXRlU3ZnRGF0YVVybH0gZnJvbSAnLi9tb2R1bGVzL2dlbmVyYXRlU3ZnRGF0YVVybCc7XG5leHBvcnQge2dldEJvZHl9IGZyb20gJy4vbW9kdWxlcy9nZXRCb2R5JztcbmV4cG9ydCB7aW5pdE13QXBpfSBmcm9tICcuL21vZHVsZXMvaW5pdE13QXBpJztcbmV4cG9ydCB7aXNWYWxpZEtleX0gZnJvbSAnLi9tb2R1bGVzL2lzVmFsaWRLZXknO1xuZXhwb3J0IHtvb3VpQ29uZmlybVdpdGhTdHlsZX0gZnJvbSAnLi9tb2R1bGVzL29vdWlDb25maXJtV2l0aFN0eWxlJztcbmV4cG9ydCB7c2Nyb2xsVG9wfSBmcm9tICcuL21vZHVsZXMvc2Nyb2xsVG9wJztcbiIsICJ0eXBlIEFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciA9IDxcblx0VGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnQgfCBIVE1MRWxlbWVudCB8IEVsZW1lbnQgfCBNZWRpYVF1ZXJ5TGlzdCB8IFdpbmRvdyxcblx0VHlwZSBleHRlbmRzIFRhcmdldCBleHRlbmRzIERvY3VtZW50XG5cdFx0PyBrZXlvZiBEb2N1bWVudEV2ZW50TWFwXG5cdFx0OiBUYXJnZXQgZXh0ZW5kcyBIVE1MRWxlbWVudFxuXHRcdFx0PyBrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwXG5cdFx0XHQ6IFRhcmdldCBleHRlbmRzIE1lZGlhUXVlcnlMaXN0XG5cdFx0XHRcdD8ga2V5b2YgTWVkaWFRdWVyeUxpc3RFdmVudE1hcFxuXHRcdFx0XHQ6IFRhcmdldCBleHRlbmRzIFdpbmRvd1xuXHRcdFx0XHRcdD8ga2V5b2YgV2luZG93RXZlbnRNYXBcblx0XHRcdFx0XHQ6IGtleW9mIEdsb2JhbEV2ZW50SGFuZGxlcnNFdmVudE1hcCxcblx0TGlzdGVuZXIgZXh0ZW5kcyBUYXJnZXQgZXh0ZW5kcyBEb2N1bWVudFxuXHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIERvY3VtZW50RXZlbnRNYXBcblx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IERvY3VtZW50RXZlbnRNYXBbVHlwZV0pID0+IHVua25vd25cblx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0OiBUYXJnZXQgZXh0ZW5kcyBIVE1MRWxlbWVudFxuXHRcdFx0PyBUeXBlIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBIVE1MRWxlbWVudEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHQ6IFRhcmdldCBleHRlbmRzIEVsZW1lbnRcblx0XHRcdFx0PyBUeXBlIGV4dGVuZHMga2V5b2YgRWxlbWVudEV2ZW50TWFwXG5cdFx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogRWxlbWVudEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd25cblx0XHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBNZWRpYVF1ZXJ5TGlzdFxuXHRcdFx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIE1lZGlhUXVlcnlMaXN0RXZlbnRNYXBcblx0XHRcdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IE1lZGlhUXVlcnlMaXN0RXZlbnRNYXBbVHlwZV0pID0+IHVua25vd25cblx0XHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBXaW5kb3dcblx0XHRcdFx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIFdpbmRvd0V2ZW50TWFwXG5cdFx0XHRcdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IFdpbmRvd0V2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93bixcbj4oe1xuXHR0YXJnZXQsXG5cdHR5cGUsXG5cdGxpc3RlbmVyLFxuXHRvcHRpb25zLFxufToge1xuXHR0YXJnZXQ6IFRhcmdldDtcblx0dHlwZTogVHlwZTtcblx0bGlzdGVuZXI6IExpc3RlbmVyO1xuXHRvcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnM7XG59KSA9PiB7XG5cdHJlbW92ZTogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlcjogQWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyID0gKHt0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zID0ge319KSA9PiB7XG5cdHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyIGFzIEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsIG9wdGlvbnMpO1xuXHRyZXR1cm4ge1xuXHRcdHJlbW92ZTogKCk6IHZvaWQgPT4ge1xuXHRcdFx0dGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIgYXMgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCwgb3B0aW9ucyk7XG5cdFx0fSxcblx0fTtcbn07XG5cbmV4cG9ydCB7dHlwZSBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIsIGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn07XG4iLCAidHlwZSBDaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlID0gKGV2ZW50OiBNb3VzZUV2ZW50IHwgSlF1ZXJ5LlRyaWdnZXJlZEV2ZW50LCBvcGFjaXR5PzogbnVtYmVyKSA9PiB2b2lkO1xuXG5jb25zdCBjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlOiBDaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlID0gKGV2ZW50LCBvcGFjaXR5ID0gMC43KSA9PiB7XG5cdChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5zdHlsZS5vcGFjaXR5ID0gZXZlbnQudHlwZSA9PT0gJ21vdXNlZW50ZXInID8gJzEnIDogb3BhY2l0eS50b1N0cmluZygpO1xufTtcblxuZXhwb3J0IHt0eXBlIENoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUsIGNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9O1xuIiwgInR5cGUgQ2hlY2tBMTF5Q29uZmlybUtleSA9IChldmVudDogS2V5Ym9hcmRFdmVudCB8IE1vdXNlRXZlbnQgfCBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpID0+IGJvb2xlYW47XG5cbmNvbnN0IGNoZWNrQTExeUNvbmZpcm1LZXk6IENoZWNrQTExeUNvbmZpcm1LZXkgPSAoZXZlbnQpOiBib29sZWFuID0+IHtcblx0aWYgKFsnY2xpY2snLCAna2V5ZG93biddLmluY2x1ZGVzKGV2ZW50LnR5cGUpKSB7XG5cdFx0aWYgKGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJykge1xuXHRcdFx0cmV0dXJuIFsnRW50ZXInLCAnICddLmluY2x1ZGVzKChldmVudCBhcyBLZXlib2FyZEV2ZW50KS5rZXkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQge3R5cGUgQ2hlY2tBMTF5Q29uZmlybUtleSwgY2hlY2tBMTF5Q29uZmlybUtleX07XG4iLCAidHlwZSBEZWxheSA9IChtczogbnVtYmVyKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG5jb25zdCBkZWxheTogRGVsYXkgPSAobXMpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAoKSA9PiB2b2lkKTogdm9pZCA9PiB7XG5cdFx0c2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHt0eXBlIERlbGF5LCBkZWxheX07XG4iLCAidHlwZSBHZW5lcmF0ZVN2Z0RhdGFVcmwgPSAoc3ZnOiBzdHJpbmcpID0+IHN0cmluZztcblxuY29uc3QgZ2VuZXJhdGVTdmdEYXRhVXJsOiBHZW5lcmF0ZVN2Z0RhdGFVcmwgPSAoc3ZnKSA9PiB7XG5cdC8qIVxuXHQgKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG5cdCAqXG5cdCAqIEBmaWxlIHN2Zy10by1kYXRhLXVyaS5qcyB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2hleWFsbGFuL3N2Zy10by1kYXRhLXVyaS99XG5cdCAqXG5cdCAqIEBhdXRob3IgQWxsYW4gTW9yZW5vXG5cdCAqIEBsaWNlbnNlIE1JVCB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2hleWFsbGFuL3N2Zy10by1kYXRhLXVyaS9ibG9iL21hc3Rlci9MSUNFTlNFfVxuXHQgKi9cblx0c3ZnID0gc3ZnLnRyaW0oKTtcblx0Ly8gcmVtb3ZlIHhtbCwgZG9jdHlwZSwgZ2VuZXJhdG9yLi4uXG5cdHN2ZyA9IHN2Zy5zbGljZShzdmcuaW5kZXhPZignPHN2ZycpKTtcblx0Ly8gc29mdCB2YWxpZGF0ZVxuXHRpZiAoIXN2Zy5zdGFydHNXaXRoKCc8c3ZnJykgfHwgIXN2Zy5lbmRzV2l0aCgnc3ZnPicpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdC8vIGFkZCBuYW1lc3BhY2UgaWYgbmVjZXNzYXJ5XG5cdGlmICghc3ZnLmluY2x1ZGVzKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpKSB7XG5cdFx0c3ZnID0gc3ZnLnJlcGxhY2UoLzxzdmcvZywgXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcIik7XG5cdH1cblx0Ly8gcmVtb3ZlIGNvbW1lbnRzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC88IS0tLnsxLH0tLT4vZywgJycpO1xuXHQvLyByZW1vdmUgdW5uZWNlc3NhcnkgYXR0cmlidXRlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvdmVyc2lvbj1bXCInXSguezAsfT8pW1wiJ10oPz1bXFxzPl0pL2csICcnKTtcblx0Ly8gcmVwbGFjZSBuZXN0ZWQgcXVvdGVzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC9cIicoLnsxLH0pJ1wiL2csIFwiJyQxJ1wiKTtcblx0Ly8gcmVwbGFjZSBkb3VibGUgcXVvdGVzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC9cIi9nLCBcIidcIik7XG5cdC8vIHJlbW92ZSBlbXB0eSBzcGFjZXMgYmV0d2VlbiB0YWdzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC8+XFxzezEsfTwvZywgJz48Jyk7XG5cdC8vIHJlbW92ZSBkdXBsaWNhdGUgc3BhY2VzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC9cXHN7Mix9L2csICcgJyk7XG5cdC8vIHRyaW0gYWdhaW5cblx0c3ZnID0gc3ZnLnRyaW0oKTtcblx0Ly8gc29mdCB2YWxpZGF0ZSBhZ2FpblxuXHRpZiAoIXN2Zy5zdGFydHNXaXRoKCc8c3ZnJykgfHwgIXN2Zy5lbmRzV2l0aCgnc3ZnPicpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdC8vIHJlcGxhY2UgYW1wZXJzYW5kXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC8mL2csICcmYW1wOycpO1xuXHQvLyBlbmNvZGUgb25seSB1bnNhZmUgc3ltYm9sc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvWyUjPD4/W1xcXFxcXF1eYHt8fV0vZywgZW5jb2RlVVJJQ29tcG9uZW50KTtcblx0Ly8gYnVpbGQgZGF0YSB1cmlcblx0c3ZnID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke3N2Z31gO1xuXHQvLyBvaywgc2hpcCBpdCFcblx0cmV0dXJuIHN2Zztcbn07XG5cbmV4cG9ydCB7dHlwZSBHZW5lcmF0ZVN2Z0RhdGFVcmwsIGdlbmVyYXRlU3ZnRGF0YVVybH07XG4iLCAidHlwZSBHZXRCb2R5ID0gKCkgPT4gSlF1ZXJ5LlRoZW5hYmxlPEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+PjtcblxuY29uc3QgZ2V0Qm9keSA9ICgpID0+IHtcblx0cmV0dXJuICQucmVhZHkudGhlbigoKTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPT4ge1xuXHRcdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblxuXHRcdHJldHVybiAkYm9keTtcblx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgR2V0Qm9keSwgZ2V0Qm9keX07XG4iLCAidHlwZSBJbml0TXdBcGkgPSB0eXBlb2YgaW5pdE13QXBpO1xuXG4vKipcbiAqIEByZXF1aXJlcyBtZWRpYXdpa2kuYXBpXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VzZXJBZ2VudF1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbYXBpVXJpXVxuICogQHJldHVybiB7bXcuQXBpfG13LkZvcmVpZ25BcGl9XG4gKi9cbmZ1bmN0aW9uIGluaXRNd0FwaSh1c2VyQWdlbnQ/OiBzdHJpbmcpOiBtdy5BcGk7XG5mdW5jdGlvbiBpbml0TXdBcGkodXNlckFnZW50OiBzdHJpbmcsIGFwaVVyaTogc3RyaW5nKTogbXcuRm9yZWlnbkFwaTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLXN0eWxlXG5mdW5jdGlvbiBpbml0TXdBcGkodXNlckFnZW50Pzogc3RyaW5nLCBhcGlVcmk/OiBzdHJpbmcpOiBtdy5BcGkgfCBtdy5Gb3JlaWduQXBpIHtcblx0Y29uc3QgYXBpT3B0aW9ucyA9IHtcblx0XHRhamF4OiB7XG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IHVzZXJBZ2VudCA/IGBZc0FyeGl2LzEuMSAoJHt1c2VyQWdlbnR9KWAgOiAnWXNBcnhpdi8xLjEnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXG5cdGlmIChhcGlVcmkpIHtcblx0XHRyZXR1cm4gbmV3IG13LkZvcmVpZ25BcGkoYXBpVXJpLCBhcGlPcHRpb25zKTtcblx0fVxuXG5cdHJldHVybiBuZXcgbXcuQXBpKGFwaU9wdGlvbnMpO1xufVxuXG5leHBvcnQge3R5cGUgSW5pdE13QXBpLCBpbml0TXdBcGl9O1xuIiwgInR5cGUgSXNWYWxpZEtleSA9IHR5cGVvZiBpc1ZhbGlkS2V5O1xuXG5jb25zdCBpc1ZhbGlkS2V5ID0gKG9iamVjdDogb2JqZWN0LCBrZXk6IHN0cmluZyB8IG51bWJlciB8IHN5bWJvbCk6IGtleSBpcyBrZXlvZiB0eXBlb2Ygb2JqZWN0ID0+IHtcblx0cmV0dXJuIGtleSBpbiBvYmplY3Q7XG59O1xuXG5leHBvcnQge3R5cGUgSXNWYWxpZEtleSwgaXNWYWxpZEtleX07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG50eXBlIE9vdWlDb25maXJtV2l0aFN0eWxlID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gSlF1ZXJ5LlByb21pc2U8Ym9vbGVhbj47XG5cbi8qKlxuICogQHJlcXVpcmVzIG9vanMtdWktd2luZG93c1xuICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXVxuICogQHJldHVybiB7SlF1ZXJ5LlByb21pc2U8Ym9vbGVhbj59XG4gKi9cbmNvbnN0IG9vdWlDb25maXJtV2l0aFN0eWxlOiBPb3VpQ29uZmlybVdpdGhTdHlsZSA9IChtZXNzYWdlKSA9PlxuXHRPTy51aVxuXHRcdC5jb25maXJtKFxuXHRcdFx0JChcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm9vLXVpLXdpbmRvdy1mb290XCJcblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAnLjFyZW0gc29saWQgIzA2NDVhZCcsXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRmb250U2l6ZTogJzEuMnJlbScsXG5cdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6ICc1MDAnLFxuXHRcdFx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAnMS44Jyxcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogJy40ZW0gMCcsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHttZXNzYWdlfVxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpIGFzIEpRdWVyeVxuXHRcdClcblx0XHQudGhlbigoaXNDb25maXJtOiBib29sZWFuKTogYm9vbGVhbiA9PiBpc0NvbmZpcm0pO1xuXG5leHBvcnQge3R5cGUgT291aUNvbmZpcm1XaXRoU3R5bGUsIG9vdWlDb25maXJtV2l0aFN0eWxlfTtcbiIsICJ0eXBlIFNjcm9sbFRvcCA9IChcblx0dGFyZ2V0SGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG5cdGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbj86IEpRdWVyeS5FZmZlY3RzT3B0aW9uczxIVE1MRWxlbWVudD4gfCBudW1iZXIgfCAnZmFzdCcgfCAnc2xvdydcbikgPT4gdm9pZDtcblxuY29uc3Qgc2Nyb2xsVG9wOiBTY3JvbGxUb3AgPSAodGFyZ2V0SGVpZ2h0LCBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24gPSB7fSkgPT4ge1xuXHRjb25zdCBvcHRpb25zOiBKUXVlcnkuRWZmZWN0c09wdGlvbnM8SFRNTEVsZW1lbnQ+ID1cblx0XHR0eXBlb2YgZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uID09PSAnc3RyaW5nJ1xuXHRcdFx0PyB7XG5cdFx0XHRcdFx0ZHVyYXRpb246IGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbixcblx0XHRcdFx0XHRlYXNpbmc6ICdsaW5lYXInLFxuXHRcdFx0XHR9XG5cdFx0XHQ6IHtcblx0XHRcdFx0XHRkdXJhdGlvbjogJ3Nsb3cnLFxuXHRcdFx0XHRcdGVhc2luZzogJ2xpbmVhcicsXG5cdFx0XHRcdFx0Li4uZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uLFxuXHRcdFx0XHR9O1xuXHQkKGRvY3VtZW50KS5maW5kKCdodG1sLCBib2R5JykuYW5pbWF0ZShcblx0XHR7XG5cdFx0XHRzY3JvbGxUb3A6IHRhcmdldEhlaWdodCxcblx0XHR9LFxuXHRcdG9wdGlvbnNcblx0KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBTY3JvbGxUb3AsIHNjcm9sbFRvcH07XG4iXSwK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QUNDcEUsV0FBVzhEO0VBQ1osR0FDQXZELE9BQ0Q7QUFDRDsiLAogICJuYW1lcyI6IFsiVXRpbF9leHBvcnRzIiwgIl9fZXhwb3J0IiwgImFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciIsICJjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlIiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAiZGVsYXkiLCAiZ2VuZXJhdGVTdmdEYXRhVXJsIiwgImdldEJvZHkiLCAiaW5pdE13QXBpIiwgImlzVmFsaWRLZXkiLCAib291aUNvbmZpcm1XaXRoU3R5bGUiLCAic2Nyb2xsVG9wIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJ0YXJnZXQiLCAidHlwZSIsICJsaXN0ZW5lciIsICJvcHRpb25zIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAicmVtb3ZlIiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAib3BhY2l0eSIsICJjdXJyZW50VGFyZ2V0IiwgInN0eWxlIiwgInRvU3RyaW5nIiwgImluY2x1ZGVzIiwgImtleSIsICJtcyIsICJQcm9taXNlIiwgInJlc29sdmUiLCAic2V0VGltZW91dCIsICJzdmciLCAidHJpbSIsICJzbGljZSIsICJpbmRleE9mIiwgInN0YXJ0c1dpdGgiLCAiZW5kc1dpdGgiLCAicmVwbGFjZSIsICJlbmNvZGVVUklDb21wb25lbnQiLCAiY29uY2F0IiwgIiQiLCAicmVhZHkiLCAidGhlbiIsICIkYm9keSIsICJ1c2VyQWdlbnQiLCAiYXBpVXJpIiwgImFwaU9wdGlvbnMiLCAiYWpheCIsICJoZWFkZXJzIiwgIm13IiwgIkZvcmVpZ25BcGkiLCAiQXBpIiwgIm9iamVjdCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAibWVzc2FnZSIsICJPTyIsICJ1aSIsICJjb25maXJtIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiYm9yZGVyIiwgImRpc3BsYXkiLCAianVzdGlmeUNvbnRlbnQiLCAiZm9udFNpemUiLCAiZm9udFdlaWdodCIsICJsaW5lSGVpZ2h0IiwgInBhZGRpbmciLCAiaXNDb25maXJtIiwgInRhcmdldEhlaWdodCIsICJlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24iLCAiZHVyYXRpb24iLCAiZWFzaW5nIiwgImRvY3VtZW50IiwgImZpbmQiLCAiYW5pbWF0ZSJdCn0K
