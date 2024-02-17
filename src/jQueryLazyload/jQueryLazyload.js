/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT}}'
 *
 * @source <https://zh.moegirl.org.cn/MediaWiki:Gadget-jQueryLazyload.js>
 * @author AnnAngela <https://github.com/AnnAngela>, ColGem <https://youshou.wiki/wiki/User:ColGem>
 */
/**
 * +--------------------------------------------------------+
 * |         === WARNING: GLOBAL GADGET FILE ===            |
 * +--------------------------------------------------------+
 * |      All changes should be made in the repository,     |
 * |              otherwise they will be lost.              |
 * +--------------------------------------------------------+
 * |      Changes to this page may affect many users.       |
 * |  Please discuss changes at talk page before editing.   |
 * +--------------------------------------------------------+
 */
/* <nowiki> */
"use strict";
var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
(function () {
  var defaults = {
    src: "data-src",
    srcset: "data-srcset",
    selector: ".lazyload",
    root: null,
    rootMargin: "0px",
    threshold: 0
  };
  var extend = function extend(_deep) {
    var e_1, _a;
    var _args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      _args[_i - 1] = arguments[_i];
    }
    var extended = {};
    var deep = typeof _deep === "boolean" ? _deep : false;
    var args = __spreadArray(__spreadArray([], __read(typeof _deep !== "boolean" ? [_deep] : []), false), __read(_args), false);
    var merge = function merge(obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.bind(obj)(prop)) {
          if (deep && Object.prototype.toString.bind(obj[prop])() === "[object Object]") {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };
    try {
      for (var args_1 = __values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
        var obj = args_1_1.value;
        merge(obj);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (args_1_1 && !args_1_1.done && (_a = args_1["return"])) _a.call(args_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    return extended;
  };
  var LazyLoad = function () {
    function LazyLoad(images, options) {
      this.settings = extend(defaults, options || {});
      this.images = images || document.querySelectorAll(this.settings.selector);
      this.observer = null;
      this.init();
    }
    LazyLoad.prototype.init = function () {
      if (!window.IntersectionObserver) {
        this.loadImages();
        return;
      }
      var self = this;
      var observerConfig = {
        root: this.settings.root,
        rootMargin: this.settings.rootMargin,
        threshold: [this.settings.threshold]
      };
      this.observer = new IntersectionObserver(function (entries) {
        Array.prototype.forEach.bind(entries)(function (entry) {
          if (entry.isIntersecting) {
            self.observer.unobserve(entry.target);
            var src = entry.target.getAttribute(self.settings.src);
            var srcset = entry.target.getAttribute(self.settings.srcset);
            if ("img" === entry.target.tagName.toLowerCase()) {
              if (src) {
                entry.target.src = src;
              }
              if (srcset) {
                entry.target.srcset = srcset;
              }
            } else {
              entry.target.style.backgroundImage = "url(".concat(src, ")");
            }
          }
        });
      }, observerConfig);
      Array.prototype.forEach.bind(this.images)(function (image) {
        self.observer.observe(image);
      });
    };
    LazyLoad.prototype.loadAndDestroy = function () {
      if (!this.settings) {
        return;
      }
      this.loadImages();
      this.destroy();
    };
    LazyLoad.prototype.loadImages = function () {
      if (!this.settings) {
        return;
      }
      var self = this;
      Array.prototype.forEach.bind(this.images)(function (image) {
        var src = image.getAttribute(self.settings.src);
        var srcset = image.getAttribute(self.settings.srcset);
        if ("img" === image.tagName.toLowerCase()) {
          if (src) {
            image.src = src;
          }
          if (srcset) {
            image.srcset = srcset;
          }
        } else {
          image.style.backgroundImage = "url('".concat(src, "')");
        }
      });
    };
    LazyLoad.prototype.destroy = function () {
      if (!this.settings) {
        return;
      }
      this.observer.disconnect();
      this.settings = null;
    };
    return LazyLoad;
  }();
  window.lazyload = function (images, options) {
    return new LazyLoad(images, options);
  };
  if (window.jQuery) {
    jQuery.fn.lazyload = function (_options) {
      var options = _options || {};
      options.attribute || (options.attribute = "data-src");
      new LazyLoad(this.toArray(), options);
      return this;
    };
  }
})();
/* </nowiki> */