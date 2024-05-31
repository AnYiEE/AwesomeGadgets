/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT|attribution=2018 apvarun}}'
 *
 * @base {@link https://github.com/apvarun/toastify-js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Toastify}
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

// dist/Toastify/Toastify.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length) return { done: true };
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
      if (!normalCompletion && it.return != null) it.return();
    } finally {
      if (didErr) throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
var require_toastify = __commonJS({
  "node_modules/.pnpm/toastify-js@1.12.0/node_modules/toastify-js/src/toastify.js"(exports2, module2) {
    /*!
     * Toastify js 1.12.0
     * https://github.com/apvarun/toastify-js
     * @license MIT licensed
     *
     * Copyright (C) 2018 Varun A P
     */
    (function(root, factory) {
      if (typeof module2 === "object" && module2.exports) {
        module2.exports = factory();
      } else {
        root.Toastify = factory();
      }
    })(exports2, function(global) {
      var Toastify2 = function(options) {
        return new Toastify2.lib.init(options);
      }, version = "1.12.0";
      Toastify2.defaults = {
        oldestFirst: true,
        text: "Toastify is awesome!",
        node: void 0,
        duration: 3e3,
        selector: void 0,
        callback: function() {
        },
        destination: void 0,
        newWindow: false,
        close: false,
        gravity: "toastify-top",
        positionLeft: false,
        position: "",
        backgroundColor: "",
        avatar: "",
        className: "",
        stopOnFocus: true,
        onClick: function() {
        },
        offset: {
          x: 0,
          y: 0
        },
        escapeMarkup: true,
        ariaLive: "polite",
        style: {
          background: ""
        }
      };
      Toastify2.lib = Toastify2.prototype = {
        toastify: version,
        constructor: Toastify2,
        // Initializing the object with required parameters
        init: function(options) {
          if (!options) {
            options = {};
          }
          this.options = {};
          this.toastElement = null;
          this.options.text = options.text || Toastify2.defaults.text;
          this.options.node = options.node || Toastify2.defaults.node;
          this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify2.defaults.duration;
          this.options.selector = options.selector || Toastify2.defaults.selector;
          this.options.callback = options.callback || Toastify2.defaults.callback;
          this.options.destination = options.destination || Toastify2.defaults.destination;
          this.options.newWindow = options.newWindow || Toastify2.defaults.newWindow;
          this.options.close = options.close || Toastify2.defaults.close;
          this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify2.defaults.gravity;
          this.options.positionLeft = options.positionLeft || Toastify2.defaults.positionLeft;
          this.options.position = options.position || Toastify2.defaults.position;
          this.options.backgroundColor = options.backgroundColor || Toastify2.defaults.backgroundColor;
          this.options.avatar = options.avatar || Toastify2.defaults.avatar;
          this.options.className = options.className || Toastify2.defaults.className;
          this.options.stopOnFocus = options.stopOnFocus === void 0 ? Toastify2.defaults.stopOnFocus : options.stopOnFocus;
          this.options.onClick = options.onClick || Toastify2.defaults.onClick;
          this.options.offset = options.offset || Toastify2.defaults.offset;
          this.options.escapeMarkup = options.escapeMarkup !== void 0 ? options.escapeMarkup : Toastify2.defaults.escapeMarkup;
          this.options.ariaLive = options.ariaLive || Toastify2.defaults.ariaLive;
          this.options.style = options.style || Toastify2.defaults.style;
          if (options.backgroundColor) {
            this.options.style.background = options.backgroundColor;
          }
          return this;
        },
        // Building the DOM element
        buildToast: function() {
          if (!this.options) {
            throw "Toastify is not initialized";
          }
          var divElement = document.createElement("div");
          divElement.className = "toastify on " + this.options.className;
          if (!!this.options.position) {
            divElement.className += " toastify-" + this.options.position;
          } else {
            if (this.options.positionLeft === true) {
              divElement.className += " toastify-left";
              console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.");
            } else {
              divElement.className += " toastify-right";
            }
          }
          divElement.className += " " + this.options.gravity;
          if (this.options.backgroundColor) {
            console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
          }
          for (var property in this.options.style) {
            divElement.style[property] = this.options.style[property];
          }
          if (this.options.ariaLive) {
            divElement.setAttribute("aria-live", this.options.ariaLive);
          }
          if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
            divElement.appendChild(this.options.node);
          } else {
            if (this.options.escapeMarkup) {
              divElement.innerText = this.options.text;
            } else {
              divElement.innerHTML = this.options.text;
            }
            if (this.options.avatar !== "") {
              var avatarElement = document.createElement("img");
              avatarElement.src = this.options.avatar;
              avatarElement.className = "toastify-avatar";
              if (this.options.position == "left" || this.options.positionLeft === true) {
                divElement.appendChild(avatarElement);
              } else {
                divElement.insertAdjacentElement("afterbegin", avatarElement);
              }
            }
          }
          if (this.options.close === true) {
            var closeElement = document.createElement("button");
            closeElement.type = "button";
            closeElement.setAttribute("aria-label", "Close");
            closeElement.className = "toast-close";
            closeElement.innerHTML = "&#10006;";
            closeElement.addEventListener("click", function(event) {
              event.stopPropagation();
              this.removeElement(this.toastElement);
              window.clearTimeout(this.toastElement.timeOutValue);
            }.bind(this));
            var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
            if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) {
              divElement.insertAdjacentElement("afterbegin", closeElement);
            } else {
              divElement.appendChild(closeElement);
            }
          }
          if (this.options.stopOnFocus && this.options.duration > 0) {
            var self = this;
            divElement.addEventListener("mouseover", function(event) {
              window.clearTimeout(divElement.timeOutValue);
            });
            divElement.addEventListener("mouseleave", function() {
              divElement.timeOutValue = window.setTimeout(function() {
                self.removeElement(divElement);
              }, self.options.duration);
            });
          }
          if (typeof this.options.destination !== "undefined") {
            divElement.addEventListener("click", function(event) {
              event.stopPropagation();
              if (this.options.newWindow === true) {
                window.open(this.options.destination, "_blank");
              } else {
                window.location = this.options.destination;
              }
            }.bind(this));
          }
          if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") {
            divElement.addEventListener("click", function(event) {
              event.stopPropagation();
              this.options.onClick();
            }.bind(this));
          }
          if (typeof this.options.offset === "object") {
            var x = getAxisOffsetAValue("x", this.options);
            var y = getAxisOffsetAValue("y", this.options);
            var xOffset = this.options.position == "left" ? x : "-" + x;
            var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;
            divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";
          }
          return divElement;
        },
        // Displaying the toast
        showToast: function() {
          this.toastElement = this.buildToast();
          var rootElement;
          if (typeof this.options.selector === "string") {
            rootElement = document.getElementById(this.options.selector);
          } else if (this.options.selector instanceof HTMLElement || typeof ShadowRoot !== "undefined" && this.options.selector instanceof ShadowRoot) {
            rootElement = this.options.selector;
          } else {
            rootElement = document.body;
          }
          if (!rootElement) {
            throw "Root element is not defined";
          }
          var elementToInsert = Toastify2.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
          rootElement.insertBefore(this.toastElement, elementToInsert);
          Toastify2.reposition();
          if (this.options.duration > 0) {
            this.toastElement.timeOutValue = window.setTimeout(function() {
              this.removeElement(this.toastElement);
            }.bind(this), this.options.duration);
          }
          return this;
        },
        hideToast: function() {
          if (this.toastElement.timeOutValue) {
            clearTimeout(this.toastElement.timeOutValue);
          }
          this.removeElement(this.toastElement);
        },
        // Removing the element from the DOM
        removeElement: function(toastElement) {
          toastElement.className = toastElement.className.replace(" on", "");
          window.setTimeout(function() {
            if (this.options.node && this.options.node.parentNode) {
              this.options.node.parentNode.removeChild(this.options.node);
            }
            if (toastElement.parentNode) {
              toastElement.parentNode.removeChild(toastElement);
            }
            this.options.callback.call(toastElement);
            Toastify2.reposition();
          }.bind(this), 400);
        }
      };
      Toastify2.reposition = function() {
        var topLeftOffsetSize = {
          top: 15,
          bottom: 15
        };
        var topRightOffsetSize = {
          top: 15,
          bottom: 15
        };
        var offsetSize = {
          top: 15,
          bottom: 15
        };
        var allToasts = document.getElementsByClassName("toastify");
        var classUsed;
        for (var i = 0; i < allToasts.length; i++) {
          if (containsClass(allToasts[i], "toastify-top") === true) {
            classUsed = "toastify-top";
          } else {
            classUsed = "toastify-bottom";
          }
          var height = allToasts[i].offsetHeight;
          classUsed = classUsed.substr(9, classUsed.length - 1);
          var offset = 15;
          var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
          if (width <= 360) {
            allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";
            offsetSize[classUsed] += height + offset;
          } else {
            if (containsClass(allToasts[i], "toastify-left") === true) {
              allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";
              topLeftOffsetSize[classUsed] += height + offset;
            } else {
              allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";
              topRightOffsetSize[classUsed] += height + offset;
            }
          }
        }
        return this;
      };
      function getAxisOffsetAValue(axis, options) {
        if (options.offset[axis]) {
          if (isNaN(options.offset[axis])) {
            return options.offset[axis];
          } else {
            return options.offset[axis] + "px";
          }
        }
        return "0px";
      }
      function containsClass(elem, yourClass) {
        if (!elem || typeof yourClass !== "string") {
          return false;
        } else if (elem.className && elem.className.trim().split(/\s+/gi).indexOf(yourClass) > -1) {
          return true;
        } else {
          return false;
        }
      }
      Toastify2.lib.init.prototype = Toastify2.lib;
      return Toastify2;
    });
  }
});
//! src/Toastify/Toastify.ts
var Toastify_exports = {};
__export(Toastify_exports, {
  toastify: () => toastify
});
module.exports = __toCommonJS(Toastify_exports);
var import_toastify_js = __toESM(require_toastify());
var toastify = (options, type) => {
  var _options;
  (_options = options) !== null && _options !== void 0 ? _options : options = {};
  let className = "gadget-toastify";
  if (type) {
    switch (type) {
      case "error":
        className += " ".concat(className, "--error");
        break;
      case "success":
        className += " ".concat(className, "--success");
        break;
      case "warning":
        className += " ".concat(className, "--warning");
        break;
      default:
        className += " ".concat(className, "--info");
    }
  }
  options.className = className;
  if (!options.gravity) {
    options.gravity = "bottom";
  }
  if (!options.position) {
    options.position = "center";
  }
  const instance = (0, import_toastify_js.default)(options);
  instance.showToast();
  return {
    hideToast: instance.hideToast.bind(instance)
  };
};

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3RvYXN0aWZ5LWpzQDEuMTIuMC9ub2RlX21vZHVsZXMvdG9hc3RpZnktanMvc3JjL3RvYXN0aWZ5LmpzIiwgInNyYy9Ub2FzdGlmeS9Ub2FzdGlmeS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyohXG4gKiBUb2FzdGlmeSBqcyAxLjEyLjBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hcHZhcnVuL3RvYXN0aWZ5LWpzXG4gKiBAbGljZW5zZSBNSVQgbGljZW5zZWRcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggVmFydW4gQSBQXG4gKi9cbihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5Ub2FzdGlmeSA9IGZhY3RvcnkoKTtcbiAgfVxufSkodGhpcywgZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIC8vIE9iamVjdCBpbml0aWFsaXphdGlvblxuICB2YXIgVG9hc3RpZnkgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAvLyBSZXR1cm5pbmcgYSBuZXcgaW5pdCBvYmplY3RcbiAgICAgIHJldHVybiBuZXcgVG9hc3RpZnkubGliLmluaXQob3B0aW9ucyk7XG4gICAgfSxcbiAgICAvLyBMaWJyYXJ5IHZlcnNpb25cbiAgICB2ZXJzaW9uID0gXCIxLjEyLjBcIjtcblxuICAvLyBTZXQgdGhlIGRlZmF1bHQgZ2xvYmFsIG9wdGlvbnNcbiAgVG9hc3RpZnkuZGVmYXVsdHMgPSB7XG4gICAgb2xkZXN0Rmlyc3Q6IHRydWUsXG4gICAgdGV4dDogXCJUb2FzdGlmeSBpcyBhd2Vzb21lIVwiLFxuICAgIG5vZGU6IHVuZGVmaW5lZCxcbiAgICBkdXJhdGlvbjogMzAwMCxcbiAgICBzZWxlY3RvcjogdW5kZWZpbmVkLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICBkZXN0aW5hdGlvbjogdW5kZWZpbmVkLFxuICAgIG5ld1dpbmRvdzogZmFsc2UsXG4gICAgY2xvc2U6IGZhbHNlLFxuICAgIGdyYXZpdHk6IFwidG9hc3RpZnktdG9wXCIsXG4gICAgcG9zaXRpb25MZWZ0OiBmYWxzZSxcbiAgICBwb3NpdGlvbjogJycsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnJyxcbiAgICBhdmF0YXI6IFwiXCIsXG4gICAgY2xhc3NOYW1lOiBcIlwiLFxuICAgIHN0b3BPbkZvY3VzOiB0cnVlLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuICAgIG9mZnNldDoge3g6IDAsIHk6IDB9LFxuICAgIGVzY2FwZU1hcmt1cDogdHJ1ZSxcbiAgICBhcmlhTGl2ZTogJ3BvbGl0ZScsXG4gICAgc3R5bGU6IHtiYWNrZ3JvdW5kOiAnJ31cbiAgfTtcblxuICAvLyBEZWZpbmluZyB0aGUgcHJvdG90eXBlIG9mIHRoZSBvYmplY3RcbiAgVG9hc3RpZnkubGliID0gVG9hc3RpZnkucHJvdG90eXBlID0ge1xuICAgIHRvYXN0aWZ5OiB2ZXJzaW9uLFxuXG4gICAgY29uc3RydWN0b3I6IFRvYXN0aWZ5LFxuXG4gICAgLy8gSW5pdGlhbGl6aW5nIHRoZSBvYmplY3Qgd2l0aCByZXF1aXJlZCBwYXJhbWV0ZXJzXG4gICAgaW5pdDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgLy8gVmVyaWZ5aW5nIGFuZCB2YWxpZGF0aW5nIHRoZSBpbnB1dCBvYmplY3RcbiAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0aW5nIHRoZSBvcHRpb25zIG9iamVjdFxuICAgICAgdGhpcy5vcHRpb25zID0ge307XG5cbiAgICAgIHRoaXMudG9hc3RFbGVtZW50ID0gbnVsbDtcblxuICAgICAgLy8gVmFsaWRhdGluZyB0aGUgb3B0aW9uc1xuICAgICAgdGhpcy5vcHRpb25zLnRleHQgPSBvcHRpb25zLnRleHQgfHwgVG9hc3RpZnkuZGVmYXVsdHMudGV4dDsgLy8gRGlzcGxheSBtZXNzYWdlXG4gICAgICB0aGlzLm9wdGlvbnMubm9kZSA9IG9wdGlvbnMubm9kZSB8fCBUb2FzdGlmeS5kZWZhdWx0cy5ub2RlOyAgLy8gRGlzcGxheSBjb250ZW50IGFzIG5vZGVcbiAgICAgIHRoaXMub3B0aW9ucy5kdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24gPT09IDAgPyAwIDogb3B0aW9ucy5kdXJhdGlvbiB8fCBUb2FzdGlmeS5kZWZhdWx0cy5kdXJhdGlvbjsgLy8gRGlzcGxheSBkdXJhdGlvblxuICAgICAgdGhpcy5vcHRpb25zLnNlbGVjdG9yID0gb3B0aW9ucy5zZWxlY3RvciB8fCBUb2FzdGlmeS5kZWZhdWx0cy5zZWxlY3RvcjsgLy8gUGFyZW50IHNlbGVjdG9yXG4gICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmNhbGxiYWNrOyAvLyBDYWxsYmFjayBhZnRlciBkaXNwbGF5XG4gICAgICB0aGlzLm9wdGlvbnMuZGVzdGluYXRpb24gPSBvcHRpb25zLmRlc3RpbmF0aW9uIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmRlc3RpbmF0aW9uOyAvLyBPbi1jbGljayBkZXN0aW5hdGlvblxuICAgICAgdGhpcy5vcHRpb25zLm5ld1dpbmRvdyA9IG9wdGlvbnMubmV3V2luZG93IHx8IFRvYXN0aWZ5LmRlZmF1bHRzLm5ld1dpbmRvdzsgLy8gT3BlbiBkZXN0aW5hdGlvbiBpbiBuZXcgd2luZG93XG4gICAgICB0aGlzLm9wdGlvbnMuY2xvc2UgPSBvcHRpb25zLmNsb3NlIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmNsb3NlOyAvLyBTaG93IHRvYXN0IGNsb3NlIGljb25cbiAgICAgIHRoaXMub3B0aW9ucy5ncmF2aXR5ID0gb3B0aW9ucy5ncmF2aXR5ID09PSBcImJvdHRvbVwiID8gXCJ0b2FzdGlmeS1ib3R0b21cIiA6IFRvYXN0aWZ5LmRlZmF1bHRzLmdyYXZpdHk7IC8vIHRvYXN0IHBvc2l0aW9uIC0gdG9wIG9yIGJvdHRvbVxuICAgICAgdGhpcy5vcHRpb25zLnBvc2l0aW9uTGVmdCA9IG9wdGlvbnMucG9zaXRpb25MZWZ0IHx8IFRvYXN0aWZ5LmRlZmF1bHRzLnBvc2l0aW9uTGVmdDsgLy8gdG9hc3QgcG9zaXRpb24gLSBsZWZ0IG9yIHJpZ2h0XG4gICAgICB0aGlzLm9wdGlvbnMucG9zaXRpb24gPSBvcHRpb25zLnBvc2l0aW9uIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLnBvc2l0aW9uOyAvLyB0b2FzdCBwb3NpdGlvbiAtIGxlZnQgb3IgcmlnaHRcbiAgICAgIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvciB8fCBUb2FzdGlmeS5kZWZhdWx0cy5iYWNrZ3JvdW5kQ29sb3I7IC8vIHRvYXN0IGJhY2tncm91bmQgY29sb3JcbiAgICAgIHRoaXMub3B0aW9ucy5hdmF0YXIgPSBvcHRpb25zLmF2YXRhciB8fCBUb2FzdGlmeS5kZWZhdWx0cy5hdmF0YXI7IC8vIGltZyBlbGVtZW50IHNyYyAtIHVybCBvciBhIHBhdGhcbiAgICAgIHRoaXMub3B0aW9ucy5jbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzTmFtZSB8fCBUb2FzdGlmeS5kZWZhdWx0cy5jbGFzc05hbWU7IC8vIGFkZGl0aW9uYWwgY2xhc3MgbmFtZXMgZm9yIHRoZSB0b2FzdFxuICAgICAgdGhpcy5vcHRpb25zLnN0b3BPbkZvY3VzID0gb3B0aW9ucy5zdG9wT25Gb2N1cyA9PT0gdW5kZWZpbmVkID8gVG9hc3RpZnkuZGVmYXVsdHMuc3RvcE9uRm9jdXMgOiBvcHRpb25zLnN0b3BPbkZvY3VzOyAvLyBzdG9wIHRpbWVvdXQgb24gZm9jdXNcbiAgICAgIHRoaXMub3B0aW9ucy5vbkNsaWNrID0gb3B0aW9ucy5vbkNsaWNrIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLm9uQ2xpY2s7IC8vIENhbGxiYWNrIGFmdGVyIGNsaWNrXG4gICAgICB0aGlzLm9wdGlvbnMub2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQgfHwgVG9hc3RpZnkuZGVmYXVsdHMub2Zmc2V0OyAvLyB0b2FzdCBvZmZzZXRcbiAgICAgIHRoaXMub3B0aW9ucy5lc2NhcGVNYXJrdXAgPSBvcHRpb25zLmVzY2FwZU1hcmt1cCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5lc2NhcGVNYXJrdXAgOiBUb2FzdGlmeS5kZWZhdWx0cy5lc2NhcGVNYXJrdXA7XG4gICAgICB0aGlzLm9wdGlvbnMuYXJpYUxpdmUgPSBvcHRpb25zLmFyaWFMaXZlIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmFyaWFMaXZlO1xuICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0gb3B0aW9ucy5zdHlsZSB8fCBUb2FzdGlmeS5kZWZhdWx0cy5zdHlsZTtcbiAgICAgIGlmKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZS5iYWNrZ3JvdW5kID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybmluZyB0aGUgY3VycmVudCBvYmplY3QgZm9yIGNoYWluaW5nIGZ1bmN0aW9uc1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIEJ1aWxkaW5nIHRoZSBET00gZWxlbWVudFxuICAgIGJ1aWxkVG9hc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gVmFsaWRhdGluZyBpZiB0aGUgb3B0aW9ucyBhcmUgZGVmaW5lZFxuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgdGhyb3cgXCJUb2FzdGlmeSBpcyBub3QgaW5pdGlhbGl6ZWRcIjtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRpbmcgdGhlIERPTSBvYmplY3RcbiAgICAgIHZhciBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lID0gXCJ0b2FzdGlmeSBvbiBcIiArIHRoaXMub3B0aW9ucy5jbGFzc05hbWU7XG5cbiAgICAgIC8vIFBvc2l0aW9uaW5nIHRvYXN0IHRvIGxlZnQgb3IgcmlnaHQgb3IgY2VudGVyXG4gICAgICBpZiAoISF0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgICAgZGl2RWxlbWVudC5jbGFzc05hbWUgKz0gXCIgdG9hc3RpZnktXCIgKyB0aGlzLm9wdGlvbnMucG9zaXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUbyBiZSBkZXByZWNpYXRlZCBpbiBmdXJ0aGVyIHZlcnNpb25zXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb25MZWZ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgZGl2RWxlbWVudC5jbGFzc05hbWUgKz0gXCIgdG9hc3RpZnktbGVmdFwiO1xuICAgICAgICAgIGNvbnNvbGUud2FybignUHJvcGVydHkgYHBvc2l0aW9uTGVmdGAgd2lsbCBiZSBkZXByZWNpYXRlZCBpbiBmdXJ0aGVyIHZlcnNpb25zLiBQbGVhc2UgdXNlIGBwb3NpdGlvbmAgaW5zdGVhZC4nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIERlZmF1bHQgcG9zaXRpb25cbiAgICAgICAgICBkaXZFbGVtZW50LmNsYXNzTmFtZSArPSBcIiB0b2FzdGlmeS1yaWdodFwiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFzc2lnbmluZyBncmF2aXR5IG9mIGVsZW1lbnRcbiAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIFwiICsgdGhpcy5vcHRpb25zLmdyYXZpdHk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgYmVpbmcgZGVwcmVjYXRlZCBpbiBmYXZvciBvZiB1c2luZyB0aGUgc3R5bGUgSFRNTCBET00gcHJvcGVydHlcbiAgICAgICAgY29uc29sZS53YXJuKCdERVBSRUNBVElPTiBOT1RJQ0U6IFwiYmFja2dyb3VuZENvbG9yXCIgaXMgYmVpbmcgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSB0aGUgXCJzdHlsZS5iYWNrZ3JvdW5kXCIgcHJvcGVydHkuJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBvdXIgc3R5bGUgb2JqZWN0IGFuZCBhcHBseSBzdHlsZXMgdG8gZGl2RWxlbWVudFxuICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gdGhpcy5vcHRpb25zLnN0eWxlKSB7XG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gdGhpcy5vcHRpb25zLnN0eWxlW3Byb3BlcnR5XTtcbiAgICAgIH1cblxuICAgICAgLy8gQW5ub3VuY2UgdGhlIHRvYXN0IHRvIHNjcmVlbiByZWFkZXJzXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFyaWFMaXZlKSB7XG4gICAgICAgIGRpdkVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCB0aGlzLm9wdGlvbnMuYXJpYUxpdmUpXG4gICAgICB9XG5cbiAgICAgIC8vIEFkZGluZyB0aGUgdG9hc3QgbWVzc2FnZS9ub2RlXG4gICAgICBpZiAodGhpcy5vcHRpb25zLm5vZGUgJiYgdGhpcy5vcHRpb25zLm5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSB2YWxpZCBub2RlLCB3ZSBpbnNlcnQgaXRcbiAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLm9wdGlvbnMubm9kZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXNjYXBlTWFya3VwKSB7XG4gICAgICAgICAgZGl2RWxlbWVudC5pbm5lclRleHQgPSB0aGlzLm9wdGlvbnMudGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXZFbGVtZW50LmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy50ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdmF0YXIgIT09IFwiXCIpIHtcbiAgICAgICAgICB2YXIgYXZhdGFyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgYXZhdGFyRWxlbWVudC5zcmMgPSB0aGlzLm9wdGlvbnMuYXZhdGFyO1xuXG4gICAgICAgICAgYXZhdGFyRWxlbWVudC5jbGFzc05hbWUgPSBcInRvYXN0aWZ5LWF2YXRhclwiO1xuXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PSBcImxlZnRcIiB8fCB0aGlzLm9wdGlvbnMucG9zaXRpb25MZWZ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBBZGRpbmcgY2xvc2UgaWNvbiBvbiB0aGUgbGVmdCBvZiBjb250ZW50XG4gICAgICAgICAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGF2YXRhckVsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBZGRpbmcgY2xvc2UgaWNvbiBvbiB0aGUgcmlnaHQgb2YgY29udGVudFxuICAgICAgICAgICAgZGl2RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGF2YXRhckVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBZGRpbmcgYSBjbG9zZSBpY29uIHRvIHRoZSB0b2FzdFxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5jbG9zZSA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBDcmVhdGUgYSBzcGFuIGZvciBjbG9zZSBlbGVtZW50XG4gICAgICAgIHZhciBjbG9zZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjbG9zZUVsZW1lbnQudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgIGNsb3NlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiQ2xvc2VcIik7XG4gICAgICAgIGNsb3NlRWxlbWVudC5jbGFzc05hbWUgPSBcInRvYXN0LWNsb3NlXCI7XG4gICAgICAgIGNsb3NlRWxlbWVudC5pbm5lckhUTUwgPSBcIiYjMTAwMDY7XCI7XG5cbiAgICAgICAgLy8gVHJpZ2dlcmluZyB0aGUgcmVtb3ZhbCBvZiB0b2FzdCBmcm9tIERPTSBvbiBjbG9zZSBjbGlja1xuICAgICAgICBjbG9zZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFbGVtZW50KHRoaXMudG9hc3RFbGVtZW50KTtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50b2FzdEVsZW1lbnQudGltZU91dFZhbHVlKTtcbiAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcblxuICAgICAgICAvL0NhbGN1bGF0aW5nIHNjcmVlbiB3aWR0aFxuICAgICAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA+IDAgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHNjcmVlbi53aWR0aDtcblxuICAgICAgICAvLyBBZGRpbmcgdGhlIGNsb3NlIGljb24gdG8gdGhlIHRvYXN0IGVsZW1lbnRcbiAgICAgICAgLy8gRGlzcGxheSBvbiB0aGUgcmlnaHQgaWYgc2NyZWVuIHdpZHRoIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byAzNjBweFxuICAgICAgICBpZiAoKHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PSBcImxlZnRcIiB8fCB0aGlzLm9wdGlvbnMucG9zaXRpb25MZWZ0ID09PSB0cnVlKSAmJiB3aWR0aCA+IDM2MCkge1xuICAgICAgICAgIC8vIEFkZGluZyBjbG9zZSBpY29uIG9uIHRoZSBsZWZ0IG9mIGNvbnRlbnRcbiAgICAgICAgICBkaXZFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgY2xvc2VFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBZGRpbmcgY2xvc2UgaWNvbiBvbiB0aGUgcmlnaHQgb2YgY29udGVudFxuICAgICAgICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvc2VFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDbGVhciB0aW1lb3V0IHdoaWxlIHRvYXN0IGlzIGZvY3VzZWRcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RvcE9uRm9jdXMgJiYgdGhpcy5vcHRpb25zLmR1cmF0aW9uID4gMCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vIHN0b3AgY291bnRkb3duXG4gICAgICAgIGRpdkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcIm1vdXNlb3ZlclwiLFxuICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGRpdkVsZW1lbnQudGltZU91dFZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLy8gYWRkIGJhY2sgdGhlIHRpbWVvdXRcbiAgICAgICAgZGl2RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwibW91c2VsZWF2ZVwiLFxuICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZGl2RWxlbWVudC50aW1lT3V0VmFsdWUgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSB0b2FzdCBmcm9tIERPTVxuICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlRWxlbWVudChkaXZFbGVtZW50KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLmR1cmF0aW9uXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIC8vIEFkZGluZyBhbiBvbi1jbGljayBkZXN0aW5hdGlvbiBwYXRoXG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBkaXZFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubmV3V2luZG93ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbiwgXCJfYmxhbmtcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLm9wdGlvbnMuZGVzdGluYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uQ2xpY2sgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGRpdkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uQ2xpY2soKTtcbiAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkaW5nIG9mZnNldFxuICAgICAgaWYodHlwZW9mIHRoaXMub3B0aW9ucy5vZmZzZXQgPT09IFwib2JqZWN0XCIpIHtcblxuICAgICAgICB2YXIgeCA9IGdldEF4aXNPZmZzZXRBVmFsdWUoXCJ4XCIsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHZhciB5ID0gZ2V0QXhpc09mZnNldEFWYWx1ZShcInlcIiwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICB2YXIgeE9mZnNldCA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PSBcImxlZnRcIiA/IHggOiBcIi1cIiArIHg7XG4gICAgICAgIHZhciB5T2Zmc2V0ID0gdGhpcy5vcHRpb25zLmdyYXZpdHkgPT0gXCJ0b2FzdGlmeS10b3BcIiA/IHkgOiBcIi1cIiArIHk7XG5cbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIiArIHhPZmZzZXQgKyBcIixcIiArIHlPZmZzZXQgKyBcIilcIjtcblxuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm5pbmcgdGhlIGdlbmVyYXRlZCBlbGVtZW50XG4gICAgICByZXR1cm4gZGl2RWxlbWVudDtcbiAgICB9LFxuXG4gICAgLy8gRGlzcGxheWluZyB0aGUgdG9hc3RcbiAgICBzaG93VG9hc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gQ3JlYXRpbmcgdGhlIERPTSBvYmplY3QgZm9yIHRoZSB0b2FzdFxuICAgICAgdGhpcy50b2FzdEVsZW1lbnQgPSB0aGlzLmJ1aWxkVG9hc3QoKTtcblxuICAgICAgLy8gR2V0dGluZyB0aGUgcm9vdCBlbGVtZW50IHRvIHdpdGggdGhlIHRvYXN0IG5lZWRzIHRvIGJlIGFkZGVkXG4gICAgICB2YXIgcm9vdEVsZW1lbnQ7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5zZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy5zZWxlY3Rvcik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8ICh0eXBlb2YgU2hhZG93Um9vdCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5vcHRpb25zLnNlbGVjdG9yIGluc3RhbmNlb2YgU2hhZG93Um9vdCkpIHtcbiAgICAgICAgcm9vdEVsZW1lbnQgPSB0aGlzLm9wdGlvbnMuc2VsZWN0b3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb290RWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG4gICAgICB9XG5cbiAgICAgIC8vIFZhbGlkYXRpbmcgaWYgcm9vdCBlbGVtZW50IGlzIHByZXNlbnQgaW4gRE9NXG4gICAgICBpZiAoIXJvb3RFbGVtZW50KSB7XG4gICAgICAgIHRocm93IFwiUm9vdCBlbGVtZW50IGlzIG5vdCBkZWZpbmVkXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZGluZyB0aGUgRE9NIGVsZW1lbnRcbiAgICAgIHZhciBlbGVtZW50VG9JbnNlcnQgPSBUb2FzdGlmeS5kZWZhdWx0cy5vbGRlc3RGaXJzdCA/IHJvb3RFbGVtZW50LmZpcnN0Q2hpbGQgOiByb290RWxlbWVudC5sYXN0Q2hpbGQ7XG4gICAgICByb290RWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy50b2FzdEVsZW1lbnQsIGVsZW1lbnRUb0luc2VydCk7XG5cbiAgICAgIC8vIFJlcG9zaXRpb25pbmcgdGhlIHRvYXN0cyBpbiBjYXNlIG11bHRpcGxlIHRvYXN0cyBhcmUgcHJlc2VudFxuICAgICAgVG9hc3RpZnkucmVwb3NpdGlvbigpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmR1cmF0aW9uID4gMCkge1xuICAgICAgICB0aGlzLnRvYXN0RWxlbWVudC50aW1lT3V0VmFsdWUgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgdG9hc3QgZnJvbSBET01cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRWxlbWVudCh0aGlzLnRvYXN0RWxlbWVudCk7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHRoaXMub3B0aW9ucy5kdXJhdGlvblxuICAgICAgICApOyAvLyBCaW5kaW5nIGB0aGlzYCBmb3IgZnVuY3Rpb24gaW52b2NhdGlvblxuICAgICAgfVxuXG4gICAgICAvLyBTdXBwb3J0aW5nIGZ1bmN0aW9uIGNoYWluaW5nXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgaGlkZVRvYXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnRvYXN0RWxlbWVudC50aW1lT3V0VmFsdWUpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG9hc3RFbGVtZW50LnRpbWVPdXRWYWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbW92ZUVsZW1lbnQodGhpcy50b2FzdEVsZW1lbnQpO1xuICAgIH0sXG5cbiAgICAvLyBSZW1vdmluZyB0aGUgZWxlbWVudCBmcm9tIHRoZSBET01cbiAgICByZW1vdmVFbGVtZW50OiBmdW5jdGlvbih0b2FzdEVsZW1lbnQpIHtcbiAgICAgIC8vIEhpZGluZyB0aGUgZWxlbWVudFxuICAgICAgLy8gdG9hc3RFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJvblwiKTtcbiAgICAgIHRvYXN0RWxlbWVudC5jbGFzc05hbWUgPSB0b2FzdEVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UoXCIgb25cIiwgXCJcIik7XG5cbiAgICAgIC8vIFJlbW92aW5nIHRoZSBlbGVtZW50IGZyb20gRE9NIGFmdGVyIHRyYW5zaXRpb24gZW5kXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gcmVtb3ZlIG9wdGlvbnMgbm9kZSBpZiBhbnlcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5vZGUgJiYgdGhpcy5vcHRpb25zLm5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm9wdGlvbnMubm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSBlbGVtZW50IGZyb20gdGhlIERPTSwgb25seSB3aGVuIHRoZSBwYXJlbnQgbm9kZSB3YXMgbm90IHJlbW92ZWQgYmVmb3JlLlxuICAgICAgICAgIGlmICh0b2FzdEVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdG9hc3RFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG9hc3RFbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDYWxsaW5nIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAgICAgIHRoaXMub3B0aW9ucy5jYWxsYmFjay5jYWxsKHRvYXN0RWxlbWVudCk7XG5cbiAgICAgICAgICAvLyBSZXBvc2l0aW9uaW5nIHRoZSB0b2FzdHMgYWdhaW5cbiAgICAgICAgICBUb2FzdGlmeS5yZXBvc2l0aW9uKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgNDAwXG4gICAgICApOyAvLyBCaW5kaW5nIGB0aGlzYCBmb3IgZnVuY3Rpb24gaW52b2NhdGlvblxuICAgIH0sXG4gIH07XG5cbiAgLy8gUG9zaXRpb25pbmcgdGhlIHRvYXN0cyBvbiB0aGUgRE9NXG4gIFRvYXN0aWZ5LnJlcG9zaXRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgIC8vIFRvcCBtYXJnaW5zIHdpdGggZ3Jhdml0eVxuICAgIHZhciB0b3BMZWZ0T2Zmc2V0U2l6ZSA9IHtcbiAgICAgIHRvcDogMTUsXG4gICAgICBib3R0b206IDE1LFxuICAgIH07XG4gICAgdmFyIHRvcFJpZ2h0T2Zmc2V0U2l6ZSA9IHtcbiAgICAgIHRvcDogMTUsXG4gICAgICBib3R0b206IDE1LFxuICAgIH07XG4gICAgdmFyIG9mZnNldFNpemUgPSB7XG4gICAgICB0b3A6IDE1LFxuICAgICAgYm90dG9tOiAxNSxcbiAgICB9O1xuXG4gICAgLy8gR2V0IGFsbCB0b2FzdCBtZXNzYWdlcyBvbiB0aGUgRE9NXG4gICAgdmFyIGFsbFRvYXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2FzdGlmeVwiKTtcblxuICAgIHZhciBjbGFzc1VzZWQ7XG5cbiAgICAvLyBNb2RpZnlpbmcgdGhlIHBvc2l0aW9uIG9mIGVhY2ggdG9hc3QgZWxlbWVudFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsVG9hc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBHZXR0aW5nIHRoZSBhcHBsaWVkIGdyYXZpdHlcbiAgICAgIGlmIChjb250YWluc0NsYXNzKGFsbFRvYXN0c1tpXSwgXCJ0b2FzdGlmeS10b3BcIikgPT09IHRydWUpIHtcbiAgICAgICAgY2xhc3NVc2VkID0gXCJ0b2FzdGlmeS10b3BcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzVXNlZCA9IFwidG9hc3RpZnktYm90dG9tXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBoZWlnaHQgPSBhbGxUb2FzdHNbaV0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgY2xhc3NVc2VkID0gY2xhc3NVc2VkLnN1YnN0cig5LCBjbGFzc1VzZWQubGVuZ3RoLTEpXG4gICAgICAvLyBTcGFjaW5nIGJldHdlZW4gdG9hc3RzXG4gICAgICB2YXIgb2Zmc2V0ID0gMTU7XG5cbiAgICAgIHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoID4gMCA/IHdpbmRvdy5pbm5lcldpZHRoIDogc2NyZWVuLndpZHRoO1xuXG4gICAgICAvLyBTaG93IHRvYXN0IGluIGNlbnRlciBpZiBzY3JlZW4gd2l0aCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMzYwcHhcbiAgICAgIGlmICh3aWR0aCA8PSAzNjApIHtcbiAgICAgICAgLy8gU2V0dGluZyB0aGUgcG9zaXRpb25cbiAgICAgICAgYWxsVG9hc3RzW2ldLnN0eWxlW2NsYXNzVXNlZF0gPSBvZmZzZXRTaXplW2NsYXNzVXNlZF0gKyBcInB4XCI7XG5cbiAgICAgICAgb2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICs9IGhlaWdodCArIG9mZnNldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb250YWluc0NsYXNzKGFsbFRvYXN0c1tpXSwgXCJ0b2FzdGlmeS1sZWZ0XCIpID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyB0aGUgcG9zaXRpb25cbiAgICAgICAgICBhbGxUb2FzdHNbaV0uc3R5bGVbY2xhc3NVc2VkXSA9IHRvcExlZnRPZmZzZXRTaXplW2NsYXNzVXNlZF0gKyBcInB4XCI7XG5cbiAgICAgICAgICB0b3BMZWZ0T2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICs9IGhlaWdodCArIG9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIHRoZSBwb3NpdGlvblxuICAgICAgICAgIGFsbFRvYXN0c1tpXS5zdHlsZVtjbGFzc1VzZWRdID0gdG9wUmlnaHRPZmZzZXRTaXplW2NsYXNzVXNlZF0gKyBcInB4XCI7XG5cbiAgICAgICAgICB0b3BSaWdodE9mZnNldFNpemVbY2xhc3NVc2VkXSArPSBoZWlnaHQgKyBvZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0aW5nIGZ1bmN0aW9uIGNoYWluaW5nXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCBvZmZzZXQuXG4gIGZ1bmN0aW9uIGdldEF4aXNPZmZzZXRBVmFsdWUoYXhpcywgb3B0aW9ucykge1xuXG4gICAgaWYob3B0aW9ucy5vZmZzZXRbYXhpc10pIHtcbiAgICAgIGlmKGlzTmFOKG9wdGlvbnMub2Zmc2V0W2F4aXNdKSkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5vZmZzZXRbYXhpc107XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMub2Zmc2V0W2F4aXNdICsgJ3B4JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJzBweCc7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRhaW5zQ2xhc3MoZWxlbSwgeW91ckNsYXNzKSB7XG4gICAgaWYgKCFlbGVtIHx8IHR5cGVvZiB5b3VyQ2xhc3MgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZWxlbS5jbGFzc05hbWUgJiZcbiAgICAgIGVsZW0uY2xhc3NOYW1lXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KC9cXHMrL2dpKVxuICAgICAgICAuaW5kZXhPZih5b3VyQ2xhc3MpID4gLTFcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0dGluZyB1cCB0aGUgcHJvdG90eXBlIGZvciB0aGUgaW5pdCBvYmplY3RcbiAgVG9hc3RpZnkubGliLmluaXQucHJvdG90eXBlID0gVG9hc3RpZnkubGliO1xuXG4gIC8vIFJldHVybmluZyB0aGUgVG9hc3RpZnkgZnVuY3Rpb24gdG8gYmUgYXNzaWduZWQgdG8gdGhlIHdpbmRvdyBvYmplY3QvbW9kdWxlXG4gIHJldHVybiBUb2FzdGlmeTtcbn0pO1xuIiwgImltcG9ydCAndG9hc3RpZnktanMvc3JjL3RvYXN0aWZ5LmNzcyc7XG5pbXBvcnQgJy4vY3VzdG9tLmxlc3MnO1xuaW1wb3J0IFRvYXN0aWZ5IGZyb20gJ3RvYXN0aWZ5LWpzJztcbmltcG9ydCB0eXBlIHtUb2FzdGlmeVdpdGhIaWRlVG9hc3R9IGZyb20gJy4vbW9kdWxlcy90eXBlcyc7XG5cbmNvbnN0IHRvYXN0aWZ5OiBUb2FzdGlmeVdpdGhIaWRlVG9hc3QgPSAob3B0aW9ucywgdHlwZSkgPT4ge1xuXHRvcHRpb25zID8/PSB7fTtcblxuXHRsZXQgY2xhc3NOYW1lOiBzdHJpbmcgPSAnZ2FkZ2V0LXRvYXN0aWZ5Jztcblx0aWYgKHR5cGUpIHtcblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdGNhc2UgJ2Vycm9yJzpcblx0XHRcdFx0Y2xhc3NOYW1lICs9IGAgJHtjbGFzc05hbWV9LS1lcnJvcmA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnc3VjY2Vzcyc6XG5cdFx0XHRcdGNsYXNzTmFtZSArPSBgICR7Y2xhc3NOYW1lfS0tc3VjY2Vzc2A7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnd2FybmluZyc6XG5cdFx0XHRcdGNsYXNzTmFtZSArPSBgICR7Y2xhc3NOYW1lfS0td2FybmluZ2A7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Y2xhc3NOYW1lICs9IGAgJHtjbGFzc05hbWV9LS1pbmZvYDtcblx0XHR9XG5cdH1cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhd2lraS9jbGFzcy1kb2Ncblx0b3B0aW9ucy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG5cblx0aWYgKCFvcHRpb25zLmdyYXZpdHkpIHtcblx0XHRvcHRpb25zLmdyYXZpdHkgPSAnYm90dG9tJztcblx0fVxuXHRpZiAoIW9wdGlvbnMucG9zaXRpb24pIHtcblx0XHRvcHRpb25zLnBvc2l0aW9uID0gJ2NlbnRlcic7XG5cdH1cblxuXHRjb25zdCBpbnN0YW5jZSA9IFRvYXN0aWZ5KG9wdGlvbnMpO1xuXHRpbnN0YW5jZS5zaG93VG9hc3QoKTtcblxuXHRyZXR1cm4ge1xuXHRcdGhpZGVUb2FzdDogaW5zdGFuY2UuaGlkZVRvYXN0LmJpbmQoaW5zdGFuY2UpLFxuXHR9O1xufTtcblxuZXhwb3J0IHt0b2FzdGlmeX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQkFBQUMsV0FBQTtFQUFBLGlGQUFBQyxVQUFBQyxT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QSxNQUFBQTtBQUFBLENBQUE7QUFBQWdGLE9BQUFySCxVQUFBc0gsYUFBQUgsZ0JBQUE7QUFFQSxJQUFBSSxxQkFBcUJDLFFBQUExSCxpQkFBQSxDQUFBO0FBR3JCLElBQU11QyxXQUFrQ0EsQ0FBQzlCLFNBQVNtRCxTQUFTO0FBQUEsTUFBQStEO0FBQzFELEdBQUFBLFdBQUFsSCxhQUFBLFFBQUFrSCxhQUFBLFNBQUFBLFdBQUFsSCxVQUFZLENBQUM7QUFFYixNQUFJbUIsWUFBb0I7QUFDeEIsTUFBSWdDLE1BQU07QUFDVCxZQUFRQSxNQUFBO01BQ1AsS0FBSztBQUNKaEMscUJBQUEsSUFBQWdHLE9BQWlCaEcsV0FBUyxTQUFBO0FBQzFCO01BQ0QsS0FBSztBQUNKQSxxQkFBQSxJQUFBZ0csT0FBaUJoRyxXQUFTLFdBQUE7QUFDMUI7TUFDRCxLQUFLO0FBQ0pBLHFCQUFBLElBQUFnRyxPQUFpQmhHLFdBQVMsV0FBQTtBQUMxQjtNQUNEO0FBQ0NBLHFCQUFBLElBQUFnRyxPQUFpQmhHLFdBQVMsUUFBQTtJQUM1QjtFQUNEO0FBRUFuQixVQUFRbUIsWUFBWUE7QUFFcEIsTUFBSSxDQUFDbkIsUUFBUWMsU0FBUztBQUNyQmQsWUFBUWMsVUFBVTtFQUNuQjtBQUNBLE1BQUksQ0FBQ2QsUUFBUWdCLFVBQVU7QUFDdEJoQixZQUFRZ0IsV0FBVztFQUNwQjtBQUVBLFFBQU1vRyxZQUFBLEdBQVdKLG1CQUFBSyxTQUFTckgsT0FBTztBQUNqQ29ILFdBQVM3QyxVQUFVO0FBRW5CLFNBQU87SUFDTlcsV0FBV2tDLFNBQVNsQyxVQUFVdkIsS0FBS3lELFFBQVE7RUFDNUM7QUFDRDsiLAogICJuYW1lcyI6IFsicmVxdWlyZV90b2FzdGlmeSIsICJfX2NvbW1vbkpTIiwgImV4cG9ydHMiLCAibW9kdWxlMiIsICJyb290IiwgImZhY3RvcnkiLCAiVG9hc3RpZnkiLCAiZ2xvYmFsIiwgIlRvYXN0aWZ5MiIsICJvcHRpb25zIiwgImxpYiIsICJpbml0IiwgInZlcnNpb24iLCAiZGVmYXVsdHMiLCAib2xkZXN0Rmlyc3QiLCAidGV4dCIsICJub2RlIiwgImR1cmF0aW9uIiwgInNlbGVjdG9yIiwgImNhbGxiYWNrIiwgImRlc3RpbmF0aW9uIiwgIm5ld1dpbmRvdyIsICJjbG9zZSIsICJncmF2aXR5IiwgInBvc2l0aW9uTGVmdCIsICJwb3NpdGlvbiIsICJiYWNrZ3JvdW5kQ29sb3IiLCAiYXZhdGFyIiwgImNsYXNzTmFtZSIsICJzdG9wT25Gb2N1cyIsICJvbkNsaWNrIiwgIm9mZnNldCIsICJ4IiwgInkiLCAiZXNjYXBlTWFya3VwIiwgImFyaWFMaXZlIiwgInN0eWxlIiwgImJhY2tncm91bmQiLCAicHJvdG90eXBlIiwgInRvYXN0aWZ5IiwgImNvbnN0cnVjdG9yIiwgInRvYXN0RWxlbWVudCIsICJidWlsZFRvYXN0IiwgImRpdkVsZW1lbnQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJjb25zb2xlIiwgIndhcm4iLCAicHJvcGVydHkiLCAic2V0QXR0cmlidXRlIiwgIm5vZGVUeXBlIiwgIk5vZGUiLCAiRUxFTUVOVF9OT0RFIiwgImFwcGVuZENoaWxkIiwgImlubmVyVGV4dCIsICJpbm5lckhUTUwiLCAiYXZhdGFyRWxlbWVudCIsICJzcmMiLCAiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwgImNsb3NlRWxlbWVudCIsICJ0eXBlIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAic3RvcFByb3BhZ2F0aW9uIiwgInJlbW92ZUVsZW1lbnQiLCAid2luZG93IiwgImNsZWFyVGltZW91dCIsICJ0aW1lT3V0VmFsdWUiLCAiYmluZCIsICJ3aWR0aCIsICJpbm5lcldpZHRoIiwgInNjcmVlbiIsICJzZWxmIiwgInNldFRpbWVvdXQiLCAib3BlbiIsICJsb2NhdGlvbiIsICJnZXRBeGlzT2Zmc2V0QVZhbHVlIiwgInhPZmZzZXQiLCAieU9mZnNldCIsICJ0cmFuc2Zvcm0iLCAic2hvd1RvYXN0IiwgInJvb3RFbGVtZW50IiwgImdldEVsZW1lbnRCeUlkIiwgIkhUTUxFbGVtZW50IiwgIlNoYWRvd1Jvb3QiLCAiYm9keSIsICJlbGVtZW50VG9JbnNlcnQiLCAiZmlyc3RDaGlsZCIsICJsYXN0Q2hpbGQiLCAiaW5zZXJ0QmVmb3JlIiwgInJlcG9zaXRpb24iLCAiaGlkZVRvYXN0IiwgInJlcGxhY2UiLCAicGFyZW50Tm9kZSIsICJyZW1vdmVDaGlsZCIsICJjYWxsIiwgInRvcExlZnRPZmZzZXRTaXplIiwgInRvcCIsICJib3R0b20iLCAidG9wUmlnaHRPZmZzZXRTaXplIiwgIm9mZnNldFNpemUiLCAiYWxsVG9hc3RzIiwgImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCAiY2xhc3NVc2VkIiwgImkiLCAibGVuZ3RoIiwgImNvbnRhaW5zQ2xhc3MiLCAiaGVpZ2h0IiwgIm9mZnNldEhlaWdodCIsICJzdWJzdHIiLCAiYXhpcyIsICJpc05hTiIsICJlbGVtIiwgInlvdXJDbGFzcyIsICJ0cmltIiwgInNwbGl0IiwgImluZGV4T2YiLCAiVG9hc3RpZnlfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJtb2R1bGUiLCAiX190b0NvbW1vbkpTIiwgImltcG9ydF90b2FzdGlmeV9qcyIsICJfX3RvRVNNIiwgIl9vcHRpb25zIiwgImNvbmNhdCIsICJpbnN0YW5jZSIsICJkZWZhdWx0Il0KfQo=
