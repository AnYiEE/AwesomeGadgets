/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/FloatTOC}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://youshou.wiki/wiki/H:GPL-3.0}
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/.pnpm/@mrhenry+core-web@1.2.2/node_modules/@mrhenry/core-web/modules/IntersectionObserver.js
var require_IntersectionObserver = __commonJS({
  "node_modules/.pnpm/@mrhenry+core-web@1.2.2/node_modules/@mrhenry/core-web/modules/IntersectionObserver.js"() {
    (function(undefined) {
      if (!("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)) {
        (function(window2, document2) {
          "use strict";
          var supportedNatively = "IntersectionObserver" in window2 && "IntersectionObserverEntry" in window2 && "intersectionRatio" in window2.IntersectionObserverEntry.prototype;
          if (supportedNatively) {
            return;
          }
          var registry = [];
          function IntersectionObserverEntry(entry) {
            this.time = entry.time;
            this.target = entry.target;
            this.rootBounds = entry.rootBounds;
            this.boundingClientRect = entry.boundingClientRect;
            this.intersectionRect = entry.intersectionRect || getEmptyRect();
            try {
              this.isIntersecting = !!entry.intersectionRect;
            } catch (err) {
            }
            var targetRect = this.boundingClientRect;
            var targetArea = targetRect.width * targetRect.height;
            var intersectionRect = this.intersectionRect;
            var intersectionArea = intersectionRect.width * intersectionRect.height;
            if (targetArea) {
              this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
            } else {
              this.intersectionRatio = this.isIntersecting ? 1 : 0;
            }
          }
          IntersectionObserverEntry.prototype.intersectionRatio = 0;
          function IntersectionObserver2(callback, opt_options) {
            var options = opt_options || {};
            if (typeof callback != "function") {
              throw new Error("callback must be a function");
            }
            if (options.root && options.root.nodeType != 1) {
              throw new Error("root must be an Element");
            }
            this._checkForIntersections = throttle(
              this._checkForIntersections.bind(this),
              this.THROTTLE_TIMEOUT
            );
            this._callback = callback;
            this._observationTargets = [];
            this._queuedEntries = [];
            this._rootMarginValues = this._parseRootMargin(options.rootMargin);
            this.thresholds = this._initThresholds(options.threshold);
            this.root = options.root || null;
            this.rootMargin = this._rootMarginValues.map(function(margin) {
              return margin.value + margin.unit;
            }).join(" ");
          }
          IntersectionObserver2.prototype.THROTTLE_TIMEOUT = 100;
          IntersectionObserver2.prototype.POLL_INTERVAL = null;
          IntersectionObserver2.prototype.USE_MUTATION_OBSERVER = true;
          IntersectionObserver2.prototype.observe = function(target) {
            var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
              return item.element == target;
            });
            if (isTargetAlreadyObserved) {
              return;
            }
            if (!(target && target.nodeType == 1)) {
              throw new Error("target must be an Element");
            }
            this._registerInstance();
            this._observationTargets.push({ element: target, entry: null });
            this._monitorIntersections();
            this._checkForIntersections();
          };
          IntersectionObserver2.prototype.unobserve = function(target) {
            this._observationTargets = this._observationTargets.filter(function(item) {
              return item.element != target;
            });
            if (!this._observationTargets.length) {
              this._unmonitorIntersections();
              this._unregisterInstance();
            }
          };
          IntersectionObserver2.prototype.disconnect = function() {
            this._observationTargets = [];
            this._unmonitorIntersections();
            this._unregisterInstance();
          };
          IntersectionObserver2.prototype.takeRecords = function() {
            var records = this._queuedEntries.slice();
            this._queuedEntries = [];
            return records;
          };
          IntersectionObserver2.prototype._initThresholds = function(opt_threshold) {
            var threshold = opt_threshold || [0];
            if (!Array.isArray(threshold))
              threshold = [threshold];
            return threshold.sort().filter(function(t, i, a) {
              if (typeof t != "number" || isNaN(t) || t < 0 || t > 1) {
                throw new Error("threshold must be a number between 0 and 1 inclusively");
              }
              return t !== a[i - 1];
            });
          };
          IntersectionObserver2.prototype._parseRootMargin = function(opt_rootMargin) {
            var marginString = opt_rootMargin || "0px";
            var margins = marginString.split(/\s+/).map(function(margin) {
              var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
              if (!parts) {
                throw new Error("rootMargin must be specified in pixels or percent");
              }
              return { value: parseFloat(parts[1]), unit: parts[2] };
            });
            margins[1] = margins[1] || margins[0];
            margins[2] = margins[2] || margins[0];
            margins[3] = margins[3] || margins[1];
            return margins;
          };
          IntersectionObserver2.prototype._monitorIntersections = function() {
            if (!this._monitoringIntersections) {
              this._monitoringIntersections = true;
              if (this.POLL_INTERVAL) {
                this._monitoringInterval = setInterval(
                  this._checkForIntersections,
                  this.POLL_INTERVAL
                );
              } else {
                addEvent(window2, "resize", this._checkForIntersections, true);
                addEvent(document2, "scroll", this._checkForIntersections, true);
                if (this.USE_MUTATION_OBSERVER && "MutationObserver" in window2) {
                  this._domObserver = new MutationObserver(this._checkForIntersections);
                  this._domObserver.observe(document2, {
                    attributes: true,
                    childList: true,
                    characterData: true,
                    subtree: true
                  });
                }
              }
            }
          };
          IntersectionObserver2.prototype._unmonitorIntersections = function() {
            if (this._monitoringIntersections) {
              this._monitoringIntersections = false;
              clearInterval(this._monitoringInterval);
              this._monitoringInterval = null;
              removeEvent(window2, "resize", this._checkForIntersections, true);
              removeEvent(document2, "scroll", this._checkForIntersections, true);
              if (this._domObserver) {
                this._domObserver.disconnect();
                this._domObserver = null;
              }
            }
          };
          IntersectionObserver2.prototype._checkForIntersections = function() {
            var rootIsInDom = this._rootIsInDom();
            var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
            this._observationTargets.forEach(function(item) {
              var target = item.element;
              var targetRect = getBoundingClientRect(target);
              var rootContainsTarget = this._rootContainsTarget(target);
              var oldEntry = item.entry;
              var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, rootRect);
              var newEntry = item.entry = new IntersectionObserverEntry({
                time: now(),
                target,
                boundingClientRect: targetRect,
                rootBounds: rootRect,
                intersectionRect
              });
              if (!oldEntry) {
                this._queuedEntries.push(newEntry);
              } else if (rootIsInDom && rootContainsTarget) {
                if (this._hasCrossedThreshold(oldEntry, newEntry)) {
                  this._queuedEntries.push(newEntry);
                }
              } else {
                if (oldEntry && oldEntry.isIntersecting) {
                  this._queuedEntries.push(newEntry);
                }
              }
            }, this);
            if (this._queuedEntries.length) {
              this._callback(this.takeRecords(), this);
            }
          };
          IntersectionObserver2.prototype._computeTargetAndRootIntersection = function(target, rootRect) {
            if (window2.getComputedStyle(target).display == "none")
              return;
            var targetRect = getBoundingClientRect(target);
            var intersectionRect = targetRect;
            var parent = getParentNode(target);
            var atRoot = false;
            while (!atRoot) {
              var parentRect = null;
              var parentComputedStyle = parent.nodeType == 1 ? window2.getComputedStyle(parent) : {};
              if (parentComputedStyle.display == "none")
                return;
              if (parent == this.root || parent == document2) {
                atRoot = true;
                parentRect = rootRect;
              } else {
                if (parent != document2.body && parent != document2.documentElement && parentComputedStyle.overflow != "visible") {
                  parentRect = getBoundingClientRect(parent);
                }
              }
              if (parentRect) {
                intersectionRect = computeRectIntersection(parentRect, intersectionRect);
                if (!intersectionRect)
                  break;
              }
              parent = getParentNode(parent);
            }
            return intersectionRect;
          };
          IntersectionObserver2.prototype._getRootRect = function() {
            var rootRect;
            if (this.root) {
              rootRect = getBoundingClientRect(this.root);
            } else {
              var html = document2.documentElement;
              var body = document2.body;
              rootRect = {
                x: 0,
                y: 0,
                top: 0,
                left: 0,
                right: html.clientWidth || body.clientWidth,
                width: html.clientWidth || body.clientWidth,
                bottom: html.clientHeight || body.clientHeight,
                height: html.clientHeight || body.clientHeight
              };
            }
            return this._expandRectByRootMargin(rootRect);
          };
          IntersectionObserver2.prototype._expandRectByRootMargin = function(rect) {
            var margins = this._rootMarginValues.map(function(margin, i) {
              return margin.unit == "px" ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
            });
            var newRect = {
              top: rect.top - margins[0],
              right: rect.right + margins[1],
              bottom: rect.bottom + margins[2],
              left: rect.left - margins[3]
            };
            newRect.width = newRect.right - newRect.left;
            newRect.height = newRect.bottom - newRect.top;
            newRect.x = newRect.left;
            newRect.y = newRect.top;
            return newRect;
          };
          IntersectionObserver2.prototype._hasCrossedThreshold = function(oldEntry, newEntry) {
            var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
            var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;
            if (oldRatio === newRatio)
              return;
            for (var i = 0; i < this.thresholds.length; i++) {
              var threshold = this.thresholds[i];
              if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
                return true;
              }
            }
          };
          IntersectionObserver2.prototype._rootIsInDom = function() {
            return !this.root || containsDeep(document2, this.root);
          };
          IntersectionObserver2.prototype._rootContainsTarget = function(target) {
            return containsDeep(this.root || document2, target);
          };
          IntersectionObserver2.prototype._registerInstance = function() {
            if (registry.indexOf(this) < 0) {
              registry.push(this);
            }
          };
          IntersectionObserver2.prototype._unregisterInstance = function() {
            var index = registry.indexOf(this);
            if (index != -1)
              registry.splice(index, 1);
          };
          function now() {
            return window2.performance && performance.now && performance.now();
          }
          function throttle(fn, timeout) {
            var timer = null;
            return function() {
              if (!timer) {
                timer = setTimeout(function() {
                  fn();
                  timer = null;
                }, timeout);
              }
            };
          }
          function addEvent(node, event, fn, opt_useCapture) {
            if (typeof node.addEventListener == "function") {
              node.addEventListener(event, fn, opt_useCapture || false);
            } else if (typeof node.attachEvent == "function") {
              node.attachEvent("on" + event, fn);
            }
          }
          function removeEvent(node, event, fn, opt_useCapture) {
            if (typeof node.removeEventListener == "function") {
              node.removeEventListener(event, fn, opt_useCapture || false);
            } else if (typeof node.detatchEvent == "function") {
              node.detatchEvent("on" + event, fn);
            }
          }
          function computeRectIntersection(rect1, rect2) {
            var top = Math.max(rect1.top, rect2.top);
            var bottom = Math.min(rect1.bottom, rect2.bottom);
            var left = Math.max(rect1.left, rect2.left);
            var right = Math.min(rect1.right, rect2.right);
            var width = right - left;
            var height = bottom - top;
            return width >= 0 && height >= 0 && {
              x: left,
              y: top,
              top,
              bottom,
              left,
              right,
              width,
              height
            };
          }
          function getBoundingClientRect(el) {
            var rect;
            try {
              rect = el.getBoundingClientRect();
            } catch (err) {
            }
            if (!rect)
              return getEmptyRect();
            if (!(rect.width && rect.height && rect.x && rect.y)) {
              rect = {
                x: rect.left,
                y: rect.top,
                top: rect.top,
                right: rect.right,
                bottom: rect.bottom,
                left: rect.left,
                width: rect.right - rect.left,
                height: rect.bottom - rect.top
              };
            }
            return rect;
          }
          function getEmptyRect() {
            return {
              x: 0,
              y: 0,
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: 0,
              height: 0
            };
          }
          function containsDeep(parent, child) {
            var node = child;
            while (node) {
              if (node == parent)
                return true;
              node = getParentNode(node);
            }
            return false;
          }
          function getParentNode(node) {
            var parent = node.parentNode;
            if (parent && parent.nodeType == 11 && parent.host) {
              return parent.host;
            }
            if (parent && parent.assignedSlot) {
              return parent.assignedSlot.parentNode;
            }
            return parent;
          }
          window2.IntersectionObserver = IntersectionObserver2;
          window2.IntersectionObserverEntry = IntersectionObserverEntry;
        })(window, document);
      }
    }).call("object" === typeof window && window || "object" === typeof self && self || "object" === typeof global && global || {});
  }
});

// dist/FloatTOC/FloatTOC.js
require_IntersectionObserver();
//! src/FloatTOC/modules/constant.ts
var ID = "floatTOC";
var WG_SKIN = mw.config.get("skin");
//! src/FloatTOC/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var import_ext_gadget3 = require("ext.gadget.FilterAlteredClicks");
//! src/FloatTOC/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Close: (0, import_ext_gadget.localize)({
      en: "Close",
      ja: "閉じる",
      "zh-hans": "关闭",
      "zh-hant": "關閉"
    }),
    Contents: (0, import_ext_gadget.localize)({
      en: "Contents",
      ja: "目次",
      zh: "目录"
    }),
    Collapse: (0, import_ext_gadget.localize)({
      en: "Collapse",
      ja: "折り畳み",
      "zh-hans": "折叠",
      "zh-hant": "摺叠"
    }),
    Expand: (0, import_ext_gadget.localize)({
      en: "Expand",
      ja: "展開",
      "zh-hans": "展开",
      "zh-hant": "展開"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/FloatTOC/modules/util/generateElements.ts
var generateElements = (originToc) => {
  var _toc$querySelector, _toc$querySelector2;
  const toc = originToc.cloneNode(true);
  (_toc$querySelector = toc.querySelector("input")) === null || _toc$querySelector === void 0 || _toc$querySelector.remove();
  (_toc$querySelector2 = toc.querySelector(".toctogglespan")) === null || _toc$querySelector2 === void 0 || _toc$querySelector2.remove();
  const $toc = $(toc);
  const $floatToc = $toc.clone().removeAttr("id").prepend($("<span>").addClass("oo-ui-indicatorElement-indicator oo-ui-icon-close").attr({
    id: "close",
    title: getMessage("Close"),
    role: "button",
    tabindex: "0"
  }));
  const $floatTocOpener = $("<div>").addClass("noprint").attr({
    id: "floatToc-opener",
    title: getMessage("Contents"),
    role: "button",
    tabindex: "0"
  }).append($("<span>").addClass("oo-ui-indicatorElement-indicator oo-ui-icon-reference"), $("<span>").text(getMessage("Contents")));
  return {
    $floatToc,
    $floatTocOpener
  };
};
//! src/FloatTOC/modules/util/generateTogglerElement.ts
var generateTogglerElement = (isCollapse) => {
  let $toggler = $("<span>").addClass("oo-ui-indicatorElement-indicator oo-ui-icon-downTriangle");
  $toggler = isCollapse ? $toggler.attr("title", getMessage("Expand")) : $toggler.attr("title", getMessage("Collapse")).addClass("collapse");
  return $toggler;
};
//! src/FloatTOC/modules/getConfig.ts
var getConfig = (id) => {
  let config = mw.storage.getObject(id);
  if (!config) {
    config = {
      floatTOC: window.outerHeight < window.outerWidth ? "open" : "close",
      originTOC: "open"
    };
  }
  return config;
};
//! src/FloatTOC/modules/setMwNotifyStyle.ts
var setMwNotifyStyle = () => {
  const style = mw.loader.addStyleTag(".mw-notification-area{right:unset;width:auto;max-width:20em}.mw-notification{-webkit-transform:translateX(-999px);-moz-transform:translateX(-999px);transform:translateX(-999px)}.mw-notification-visible{-webkit-transform:translateX(0);-moz-transform:translateX(0);transform:translateX(0)}");
  style.disabled = true;
  return style;
};
//! src/FloatTOC/modules/core.ts
var floatTOC = ($originToc) => {
  const originToc = $originToc.get(0);
  const $body = $originToc.parents("body");
  const {
    $floatToc,
    $floatTocOpener
  } = generateElements(originToc);
  $floatTocOpener.hide().appendTo($body);
  const config = getConfig(ID);
  const mwNotifyStyle = setMwNotifyStyle();
  let isShow = false;
  const storeState = (target, state) => {
    config[target] = state;
    mw.storage.setObject(ID, config);
  };
  let disableMwNotifyStyleTimer;
  const disableMwNotifyStyle = () => {
    if (disableMwNotifyStyleTimer) {
      clearTimeout(disableMwNotifyStyleTimer);
    }
    disableMwNotifyStyleTimer = setTimeout(() => {
      if (!isShow) {
        mwNotifyStyle.disabled = true;
      }
    }, 5 * 1e3);
  };
  let notification;
  const closeNotification = (currentNotification) => {
    currentNotification.close();
    $floatTocOpener.fadeIn();
    storeState("floatTOC", "close");
    disableMwNotifyStyle();
  };
  const smoothScroll = (event) => {
    if (WG_SKIN === "citizen") {
      return;
    }
    const target = event.target;
    const $target = $(target).parent();
    const href = $target.attr("href");
    if (!href) {
      return;
    }
    const anchorOffset = $(href).offset();
    if (!anchorOffset) {
      return;
    }
    event.preventDefault();
    (0, import_ext_gadget2.scrollTop)("".concat(anchorOffset.top, "px"));
  };
  const toggleToc = (currentIsShow = true, preNotification = void 0) => {
    var _preNotification;
    (_preNotification = preNotification) === null || _preNotification === void 0 || _preNotification.close();
    isShow = !!currentIsShow;
    switch (currentIsShow) {
      case true:
        if (config.floatTOC === "close") {
          $floatTocOpener.fadeIn();
          return;
        }
        break;
      case "open":
        $floatTocOpener.fadeOut();
        storeState("floatTOC", "open");
        break;
      default:
        $floatTocOpener.fadeOut();
        disableMwNotifyStyle();
        return;
    }
    mwNotifyStyle.disabled = false;
    if (preNotification) {
      preNotification.start();
    } else {
      preNotification = mw.notification.notify($floatToc, {
        classes: "noprint",
        id: ID,
        autoHide: false
      });
      const notificationListener = (event) => {
        event.stopPropagation();
        if (!(0, import_ext_gadget2.checkA11yConfirmKey)(event)) {
          return;
        }
        const target = event.target;
        if (target.id === "close") {
          closeNotification(preNotification);
        } else {
          smoothScroll(event);
        }
      };
      preNotification.$notification.on("click", (0, import_ext_gadget3.filterAlteredClicks)((event) => {
        void notificationListener(event);
      }));
      preNotification.$notification.on("keydown", notificationListener);
    }
    return preNotification;
  };
  const observerCallback = (entries) => {
    const [entry] = entries;
    if (!entry) {
      return;
    }
    const {
      intersectionRatio
    } = entry;
    notification = toggleToc(intersectionRatio === 0, notification);
  };
  const intersectionObserver = new IntersectionObserver(observerCallback);
  intersectionObserver.observe(originToc);
  const openerListener = (event) => {
    event.preventDefault();
    if (!(0, import_ext_gadget2.checkA11yConfirmKey)(event)) {
      return;
    }
    notification = toggleToc("open");
  };
  $floatTocOpener.on("click", openerListener);
  $floatTocOpener.on("keydown", openerListener);
  const collapseOriginToc = () => {
    if (WG_SKIN !== "citizen") {
      return;
    }
    const isCollapse = config.originTOC === "close";
    const $originTocTitle = $body.find("#toc .toctitle");
    const $originTocItem = $body.find("#toc ul");
    const $toggler = generateTogglerElement(isCollapse);
    $originTocTitle.append($toggler);
    const collapseToggle = () => {
      const $element = $originTocTitle.find(".oo-ui-indicatorElement-indicator");
      $element.toggleClass("collapse");
      if (isCollapse) {
        $element.attr("title", getMessage("Expand"));
      } else {
        $element.attr("title", getMessage("Collapse"));
      }
    };
    $originTocTitle.on("click", () => {
      isCollapse ? storeState("originTOC", "open") : storeState("originTOC", "close");
      collapseToggle();
      $originTocItem.fadeToggle();
    });
    if (isCollapse) {
      $originTocItem.fadeOut();
    }
  };
  collapseOriginToc();
};
//! src/FloatTOC/FloatTOC.ts
var import_ext_gadget4 = require("ext.gadget.Util");
void (0, import_ext_gadget4.getBody)().then(($body) => {
  const $originToc = $body.find("#toc");
  if (!$originToc.length) {
    return;
  }
  floatTOC($originToc);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL0BtcmhlbnJ5K2NvcmUtd2ViQDEuMi4yL25vZGVfbW9kdWxlcy9AbXJoZW5yeS9jb3JlLXdlYi9tb2R1bGVzL0ludGVyc2VjdGlvbk9ic2VydmVyLmpzIiwgInNyYy9GbG9hdFRPQy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9GbG9hdFRPQy9tb2R1bGVzL2NvcmUudHMiLCAic3JjL0Zsb2F0VE9DL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRmxvYXRUT0MvbW9kdWxlcy91dGlsL2dlbmVyYXRlRWxlbWVudHMudHMiLCAic3JjL0Zsb2F0VE9DL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVRvZ2dsZXJFbGVtZW50LnRzIiwgInNyYy9GbG9hdFRPQy9tb2R1bGVzL2dldENvbmZpZy50cyIsICJzcmMvRmxvYXRUT0MvbW9kdWxlcy9zZXRNd05vdGlmeVN0eWxlLnRzIiwgInNyYy9GbG9hdFRPQy9GbG9hdFRPQy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiKGZ1bmN0aW9uKHVuZGVmaW5lZCkge1xuaWYgKCEoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiaW4gd2luZG93JiZcIkludGVyc2VjdGlvbk9ic2VydmVyRW50cnlcImluIHdpbmRvdyYmXCJpbnRlcnNlY3Rpb25SYXRpb1wiaW4gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlXG4pKSB7XG4vLyBJbnRlcnNlY3Rpb25PYnNlcnZlclxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBXM0MgU09GVFdBUkUgQU5EIERPQ1VNRU5UIE5PVElDRSBBTkQgTElDRU5TRS5cbiAqXG4gKiAgaHR0cHM6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50XG4gKlxuICovXG5cbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50KSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdXBwb3J0ZWROYXRpdmVseSA9ICdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93ICYmXG4nSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeScgaW4gd2luZG93ICYmXG4naW50ZXJzZWN0aW9uUmF0aW8nIGluIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5LnByb3RvdHlwZTtcblxuaWYgKHN1cHBvcnRlZE5hdGl2ZWx5KSB7XG5cdHJldHVybjtcbn1cbi8qKlxuICogQW4gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgcmVnaXN0cnkuIFRoaXMgcmVnaXN0cnkgZXhpc3RzIHRvIGhvbGQgYSBzdHJvbmdcbiAqIHJlZmVyZW5jZSB0byBJbnRlcnNlY3Rpb25PYnNlcnZlciBpbnN0YW5jZXMgY3VycmVudGx5IG9ic2VydmluZyBhIHRhcmdldFxuICogZWxlbWVudC4gV2l0aG91dCB0aGlzIHJlZ2lzdHJ5LCBpbnN0YW5jZXMgd2l0aG91dCBhbm90aGVyIHJlZmVyZW5jZSBtYXkgYmVcbiAqIGdhcmJhZ2UgY29sbGVjdGVkLlxuICovXG52YXIgcmVnaXN0cnkgPSBbXTtcblxuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5IGNvbnN0cnVjdG9yLlxuICogaHR0cHM6Ly93M2MuZ2l0aHViLmlvL0ludGVyc2VjdGlvbk9ic2VydmVyLyNpbnRlcnNlY3Rpb24tb2JzZXJ2ZXItZW50cnlcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbnRyeSBBIGRpY3Rpb25hcnkgb2YgaW5zdGFuY2UgcHJvcGVydGllcy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KGVudHJ5KSB7XG5cdHRoaXMudGltZSA9IGVudHJ5LnRpbWU7XG5cdHRoaXMudGFyZ2V0ID0gZW50cnkudGFyZ2V0O1xuXHR0aGlzLnJvb3RCb3VuZHMgPSBlbnRyeS5yb290Qm91bmRzO1xuXHR0aGlzLmJvdW5kaW5nQ2xpZW50UmVjdCA9IGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdDtcblx0dGhpcy5pbnRlcnNlY3Rpb25SZWN0ID0gZW50cnkuaW50ZXJzZWN0aW9uUmVjdCB8fCBnZXRFbXB0eVJlY3QoKTtcblx0dHJ5IHtcblx0XHR0aGlzLmlzSW50ZXJzZWN0aW5nID0gISFlbnRyeS5pbnRlcnNlY3Rpb25SZWN0O1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBUaGlzIG1lYW5zIHdlIGFyZSB1c2luZyB0aGUgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSBwb2x5ZmlsbCB3aGljaCBoYXMgb25seSBkZWZpbmVkIGEgZ2V0dGVyXG5cdH1cblxuXHQvLyBDYWxjdWxhdGVzIHRoZSBpbnRlcnNlY3Rpb24gcmF0aW8uXG5cdHZhciB0YXJnZXRSZWN0ID0gdGhpcy5ib3VuZGluZ0NsaWVudFJlY3Q7XG5cdHZhciB0YXJnZXRBcmVhID0gdGFyZ2V0UmVjdC53aWR0aCAqIHRhcmdldFJlY3QuaGVpZ2h0O1xuXHR2YXIgaW50ZXJzZWN0aW9uUmVjdCA9IHRoaXMuaW50ZXJzZWN0aW9uUmVjdDtcblx0dmFyIGludGVyc2VjdGlvbkFyZWEgPSBpbnRlcnNlY3Rpb25SZWN0LndpZHRoICogaW50ZXJzZWN0aW9uUmVjdC5oZWlnaHQ7XG5cblx0Ly8gU2V0cyBpbnRlcnNlY3Rpb24gcmF0aW8uXG5cdGlmICh0YXJnZXRBcmVhKSB7XG5cdFx0Ly8gUm91bmQgdGhlIGludGVyc2VjdGlvbiByYXRpbyB0byBhdm9pZCBmbG9hdGluZyBwb2ludCBtYXRoIGlzc3Vlczpcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vdzNjL0ludGVyc2VjdGlvbk9ic2VydmVyL2lzc3Vlcy8zMjRcblx0XHR0aGlzLmludGVyc2VjdGlvblJhdGlvID0gTnVtYmVyKChpbnRlcnNlY3Rpb25BcmVhIC8gdGFyZ2V0QXJlYSkudG9GaXhlZCg0KSk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgYXJlYSBpcyB6ZXJvIGFuZCBpcyBpbnRlcnNlY3RpbmcsIHNldHMgdG8gMSwgb3RoZXJ3aXNlIHRvIDBcblx0XHR0aGlzLmludGVyc2VjdGlvblJhdGlvID0gdGhpcy5pc0ludGVyc2VjdGluZyA/IDEgOiAwO1xuXHR9XG59XG5cbkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlLmludGVyc2VjdGlvblJhdGlvID0gMDtcblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgY29uc3RydWN0b3IuXG4gKiBodHRwczovL3czYy5naXRodWIuaW8vSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvI2ludGVyc2VjdGlvbi1vYnNlcnZlci1pbnRlcmZhY2VcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIGludGVyc2VjdGlvblxuICogICAgIGNoYW5nZXMgaGF2ZSBxdWV1ZWQuIFRoZSBmdW5jdGlvbiBpcyBub3QgaW52b2tlZCBpZiB0aGUgcXVldWUgaGFzXG4gKiAgICAgYmVlbiBlbXB0aWVkIGJ5IGNhbGxpbmcgdGhlIGB0YWtlUmVjb3Jkc2AgbWV0aG9kLlxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRfb3B0aW9ucyBPcHRpb25hbCBjb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2ssIG9wdF9vcHRpb25zKSB7XG5cblx0dmFyIG9wdGlvbnMgPSBvcHRfb3B0aW9ucyB8fCB7fTtcblxuXHRpZiAodHlwZW9mIGNhbGxiYWNrICE9ICdmdW5jdGlvbicpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMucm9vdCAmJiBvcHRpb25zLnJvb3Qubm9kZVR5cGUgIT0gMSkge1xuXHRcdHRocm93IG5ldyBFcnJvcigncm9vdCBtdXN0IGJlIGFuIEVsZW1lbnQnKTtcblx0fVxuXG5cdC8vIEJpbmRzIGFuZCB0aHJvdHRsZXMgYHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9uc2AuXG5cdHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucyA9IHRocm90dGxlKFxuXHRcdFx0dGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLmJpbmQodGhpcyksIHRoaXMuVEhST1RUTEVfVElNRU9VVCk7XG5cblx0Ly8gUHJpdmF0ZSBwcm9wZXJ0aWVzLlxuXHR0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xuXHR0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMgPSBbXTtcblx0dGhpcy5fcXVldWVkRW50cmllcyA9IFtdO1xuXHR0aGlzLl9yb290TWFyZ2luVmFsdWVzID0gdGhpcy5fcGFyc2VSb290TWFyZ2luKG9wdGlvbnMucm9vdE1hcmdpbik7XG5cblx0Ly8gUHVibGljIHByb3BlcnRpZXMuXG5cdHRoaXMudGhyZXNob2xkcyA9IHRoaXMuX2luaXRUaHJlc2hvbGRzKG9wdGlvbnMudGhyZXNob2xkKTtcblx0dGhpcy5yb290ID0gb3B0aW9ucy5yb290IHx8IG51bGw7XG5cdHRoaXMucm9vdE1hcmdpbiA9IHRoaXMuX3Jvb3RNYXJnaW5WYWx1ZXMubWFwKGZ1bmN0aW9uKG1hcmdpbikge1xuXHRcdHJldHVybiBtYXJnaW4udmFsdWUgKyBtYXJnaW4udW5pdDtcblx0fSkuam9pbignICcpO1xufVxuXG5cbi8qKlxuICogVGhlIG1pbmltdW0gaW50ZXJ2YWwgd2l0aGluIHdoaWNoIHRoZSBkb2N1bWVudCB3aWxsIGJlIGNoZWNrZWQgZm9yXG4gKiBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLlRIUk9UVExFX1RJTUVPVVQgPSAxMDA7XG5cblxuLyoqXG4gKiBUaGUgZnJlcXVlbmN5IGluIHdoaWNoIHRoZSBwb2x5ZmlsbCBwb2xscyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKiB0aGlzIGNhbiBiZSB1cGRhdGVkIG9uIGEgcGVyIGluc3RhbmNlIGJhc2lzIGFuZCBtdXN0IGJlIHNldCBwcmlvciB0b1xuICogY2FsbGluZyBgb2JzZXJ2ZWAgb24gdGhlIGZpcnN0IHRhcmdldC5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLlBPTExfSU5URVJWQUwgPSBudWxsO1xuXG4vKipcbiAqIFVzZSBhIG11dGF0aW9uIG9ic2VydmVyIG9uIHRoZSByb290IGVsZW1lbnRcbiAqIHRvIGRldGVjdCBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLlVTRV9NVVRBVElPTl9PQlNFUlZFUiA9IHRydWU7XG5cblxuLyoqXG4gKiBTdGFydHMgb2JzZXJ2aW5nIGEgdGFyZ2V0IGVsZW1lbnQgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzIGJhc2VkIG9uXG4gKiB0aGUgdGhyZXNob2xkcyB2YWx1ZXMuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgRE9NIGVsZW1lbnQgdG8gb2JzZXJ2ZS5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbih0YXJnZXQpIHtcblx0dmFyIGlzVGFyZ2V0QWxyZWFkeU9ic2VydmVkID0gdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLnNvbWUoZnVuY3Rpb24oaXRlbSkge1xuXHRcdHJldHVybiBpdGVtLmVsZW1lbnQgPT0gdGFyZ2V0O1xuXHR9KTtcblxuXHRpZiAoaXNUYXJnZXRBbHJlYWR5T2JzZXJ2ZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoISh0YXJnZXQgJiYgdGFyZ2V0Lm5vZGVUeXBlID09IDEpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCd0YXJnZXQgbXVzdCBiZSBhbiBFbGVtZW50Jyk7XG5cdH1cblxuXHR0aGlzLl9yZWdpc3Rlckluc3RhbmNlKCk7XG5cdHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5wdXNoKHtlbGVtZW50OiB0YXJnZXQsIGVudHJ5OiBudWxsfSk7XG5cdHRoaXMuX21vbml0b3JJbnRlcnNlY3Rpb25zKCk7XG5cdHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucygpO1xufTtcblxuXG4vKipcbiAqIFN0b3BzIG9ic2VydmluZyBhIHRhcmdldCBlbGVtZW50IGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSBET00gZWxlbWVudCB0byBvYnNlcnZlLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUudW5vYnNlcnZlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG5cdHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cyA9XG5cdFx0XHR0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcblxuXHRcdHJldHVybiBpdGVtLmVsZW1lbnQgIT0gdGFyZ2V0O1xuXHR9KTtcblx0aWYgKCF0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMubGVuZ3RoKSB7XG5cdFx0dGhpcy5fdW5tb25pdG9ySW50ZXJzZWN0aW9ucygpO1xuXHRcdHRoaXMuX3VucmVnaXN0ZXJJbnN0YW5jZSgpO1xuXHR9XG59O1xuXG5cbi8qKlxuICogU3RvcHMgb2JzZXJ2aW5nIGFsbCB0YXJnZXQgZWxlbWVudHMgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMgPSBbXTtcblx0dGhpcy5fdW5tb25pdG9ySW50ZXJzZWN0aW9ucygpO1xuXHR0aGlzLl91bnJlZ2lzdGVySW5zdGFuY2UoKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIGFueSBxdWV1ZSBlbnRyaWVzIHRoYXQgaGF2ZSBub3QgeWV0IGJlZW4gcmVwb3J0ZWQgdG8gdGhlXG4gKiBjYWxsYmFjayBhbmQgY2xlYXJzIHRoZSBxdWV1ZS4gVGhpcyBjYW4gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZVxuICogY2FsbGJhY2sgdG8gb2J0YWluIHRoZSBhYnNvbHV0ZSBtb3N0IHVwLXRvLWRhdGUgaW50ZXJzZWN0aW9uIGluZm9ybWF0aW9uLlxuICogQHJldHVybiB7QXJyYXl9IFRoZSBjdXJyZW50bHkgcXVldWVkIGVudHJpZXMuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS50YWtlUmVjb3JkcyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgcmVjb3JkcyA9IHRoaXMuX3F1ZXVlZEVudHJpZXMuc2xpY2UoKTtcblx0dGhpcy5fcXVldWVkRW50cmllcyA9IFtdO1xuXHRyZXR1cm4gcmVjb3Jkcztcbn07XG5cblxuLyoqXG4gKiBBY2NlcHRzIHRoZSB0aHJlc2hvbGQgdmFsdWUgZnJvbSB0aGUgdXNlciBjb25maWd1cmF0aW9uIG9iamVjdCBhbmRcbiAqIHJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdW5pcXVlIHRocmVzaG9sZCB2YWx1ZXMuIElmIGEgdmFsdWUgaXMgbm90XG4gKiBiZXR3ZWVuIDAgYW5kIDEgYW5kIGVycm9yIGlzIHRocm93bi5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fG51bWJlcj19IG9wdF90aHJlc2hvbGQgQW4gb3B0aW9uYWwgdGhyZXNob2xkIHZhbHVlIG9yXG4gKiAgICAgYSBsaXN0IG9mIHRocmVzaG9sZCB2YWx1ZXMsIGRlZmF1bHRpbmcgdG8gWzBdLlxuICogQHJldHVybiB7QXJyYXl9IEEgc29ydGVkIGxpc3Qgb2YgdW5pcXVlIGFuZCB2YWxpZCB0aHJlc2hvbGQgdmFsdWVzLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2luaXRUaHJlc2hvbGRzID0gZnVuY3Rpb24ob3B0X3RocmVzaG9sZCkge1xuXHR2YXIgdGhyZXNob2xkID0gb3B0X3RocmVzaG9sZCB8fCBbMF07XG5cdGlmICghQXJyYXkuaXNBcnJheSh0aHJlc2hvbGQpKSB0aHJlc2hvbGQgPSBbdGhyZXNob2xkXTtcblxuXHRyZXR1cm4gdGhyZXNob2xkLnNvcnQoKS5maWx0ZXIoZnVuY3Rpb24odCwgaSwgYSkge1xuXHRcdGlmICh0eXBlb2YgdCAhPSAnbnVtYmVyJyB8fCBpc05hTih0KSB8fCB0IDwgMCB8fCB0ID4gMSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCd0aHJlc2hvbGQgbXVzdCBiZSBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEgaW5jbHVzaXZlbHknKTtcblx0XHR9XG5cdFx0cmV0dXJuIHQgIT09IGFbaSAtIDFdO1xuXHR9KTtcbn07XG5cblxuLyoqXG4gKiBBY2NlcHRzIHRoZSByb290TWFyZ2luIHZhbHVlIGZyb20gdGhlIHVzZXIgY29uZmlndXJhdGlvbiBvYmplY3RcbiAqIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBmb3VyIG1hcmdpbiB2YWx1ZXMgYXMgYW4gb2JqZWN0IGNvbnRhaW5pbmdcbiAqIHRoZSB2YWx1ZSBhbmQgdW5pdCBwcm9wZXJ0aWVzLiBJZiBhbnkgb2YgdGhlIHZhbHVlcyBhcmUgbm90IHByb3Blcmx5XG4gKiBmb3JtYXR0ZWQgb3IgdXNlIGEgdW5pdCBvdGhlciB0aGFuIHB4IG9yICUsIGFuZCBlcnJvciBpcyB0aHJvd24uXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmc9fSBvcHRfcm9vdE1hcmdpbiBBbiBvcHRpb25hbCByb290TWFyZ2luIHZhbHVlLFxuICogICAgIGRlZmF1bHRpbmcgdG8gJzBweCcuXG4gKiBAcmV0dXJuIHtBcnJheTxPYmplY3Q+fSBBbiBhcnJheSBvZiBtYXJnaW4gb2JqZWN0cyB3aXRoIHRoZSBrZXlzXG4gKiAgICAgdmFsdWUgYW5kIHVuaXQuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fcGFyc2VSb290TWFyZ2luID0gZnVuY3Rpb24ob3B0X3Jvb3RNYXJnaW4pIHtcblx0dmFyIG1hcmdpblN0cmluZyA9IG9wdF9yb290TWFyZ2luIHx8ICcwcHgnO1xuXHR2YXIgbWFyZ2lucyA9IG1hcmdpblN0cmluZy5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihtYXJnaW4pIHtcblx0XHR2YXIgcGFydHMgPSAvXigtP1xcZCpcXC4/XFxkKykocHh8JSkkLy5leGVjKG1hcmdpbik7XG5cdFx0aWYgKCFwYXJ0cykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdyb290TWFyZ2luIG11c3QgYmUgc3BlY2lmaWVkIGluIHBpeGVscyBvciBwZXJjZW50Jyk7XG5cdFx0fVxuXHRcdHJldHVybiB7dmFsdWU6IHBhcnNlRmxvYXQocGFydHNbMV0pLCB1bml0OiBwYXJ0c1syXX07XG5cdH0pO1xuXG5cdC8vIEhhbmRsZXMgc2hvcnRoYW5kLlxuXHRtYXJnaW5zWzFdID0gbWFyZ2luc1sxXSB8fCBtYXJnaW5zWzBdO1xuXHRtYXJnaW5zWzJdID0gbWFyZ2luc1syXSB8fCBtYXJnaW5zWzBdO1xuXHRtYXJnaW5zWzNdID0gbWFyZ2luc1szXSB8fCBtYXJnaW5zWzFdO1xuXG5cdHJldHVybiBtYXJnaW5zO1xufTtcblxuXG4vKipcbiAqIFN0YXJ0cyBwb2xsaW5nIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcyBpZiB0aGUgcG9sbGluZyBpcyBub3QgYWxyZWFkeVxuICogaGFwcGVuaW5nLCBhbmQgaWYgdGhlIHBhZ2UncyB2aXNpYmlsaXR5IHN0YXRlIGlzIHZpc2libGUuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX21vbml0b3JJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oKSB7XG5cdGlmICghdGhpcy5fbW9uaXRvcmluZ0ludGVyc2VjdGlvbnMpIHtcblx0XHR0aGlzLl9tb25pdG9yaW5nSW50ZXJzZWN0aW9ucyA9IHRydWU7XG5cblx0XHQvLyBJZiBhIHBvbGwgaW50ZXJ2YWwgaXMgc2V0LCB1c2UgcG9sbGluZyBpbnN0ZWFkIG9mIGxpc3RlbmluZyB0b1xuXHRcdC8vIHJlc2l6ZSBhbmQgc2Nyb2xsIGV2ZW50cyBvciBET00gbXV0YXRpb25zLlxuXHRcdGlmICh0aGlzLlBPTExfSU5URVJWQUwpIHtcblx0XHRcdHRoaXMuX21vbml0b3JpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKFxuXHRcdFx0XHRcdHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucywgdGhpcy5QT0xMX0lOVEVSVkFMKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRhZGRFdmVudCh3aW5kb3csICdyZXNpemUnLCB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMsIHRydWUpO1xuXHRcdFx0YWRkRXZlbnQoZG9jdW1lbnQsICdzY3JvbGwnLCB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMsIHRydWUpO1xuXG5cdFx0XHRpZiAodGhpcy5VU0VfTVVUQVRJT05fT0JTRVJWRVIgJiYgJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xuXHRcdFx0XHR0aGlzLl9kb21PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucyk7XG5cdFx0XHRcdHRoaXMuX2RvbU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIHtcblx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRcdFx0XHRjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuXHRcdFx0XHRcdHN1YnRyZWU6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5cbi8qKlxuICogU3RvcHMgcG9sbGluZyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3VubW9uaXRvckludGVyc2VjdGlvbnMgPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMuX21vbml0b3JpbmdJbnRlcnNlY3Rpb25zKSB7XG5cdFx0dGhpcy5fbW9uaXRvcmluZ0ludGVyc2VjdGlvbnMgPSBmYWxzZTtcblxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5fbW9uaXRvcmluZ0ludGVydmFsKTtcblx0XHR0aGlzLl9tb25pdG9yaW5nSW50ZXJ2YWwgPSBudWxsO1xuXG5cdFx0cmVtb3ZlRXZlbnQod2luZG93LCAncmVzaXplJywgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLCB0cnVlKTtcblx0XHRyZW1vdmVFdmVudChkb2N1bWVudCwgJ3Njcm9sbCcsIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucywgdHJ1ZSk7XG5cblx0XHRpZiAodGhpcy5fZG9tT2JzZXJ2ZXIpIHtcblx0XHRcdHRoaXMuX2RvbU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHRcdHRoaXMuX2RvbU9ic2VydmVyID0gbnVsbDtcblx0XHR9XG5cdH1cbn07XG5cblxuLyoqXG4gKiBTY2FucyBlYWNoIG9ic2VydmF0aW9uIHRhcmdldCBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMgYW5kIGFkZHMgdGhlbVxuICogdG8gdGhlIGludGVybmFsIGVudHJpZXMgcXVldWUuIElmIG5ldyBlbnRyaWVzIGFyZSBmb3VuZCwgaXRcbiAqIHNjaGVkdWxlcyB0aGUgY2FsbGJhY2sgdG8gYmUgaW52b2tlZC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oKSB7XG5cdHZhciByb290SXNJbkRvbSA9IHRoaXMuX3Jvb3RJc0luRG9tKCk7XG5cdHZhciByb290UmVjdCA9IHJvb3RJc0luRG9tID8gdGhpcy5fZ2V0Um9vdFJlY3QoKSA6IGdldEVtcHR5UmVjdCgpO1xuXG5cdHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHR2YXIgdGFyZ2V0ID0gaXRlbS5lbGVtZW50O1xuXHRcdHZhciB0YXJnZXRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHRhcmdldCk7XG5cdFx0dmFyIHJvb3RDb250YWluc1RhcmdldCA9IHRoaXMuX3Jvb3RDb250YWluc1RhcmdldCh0YXJnZXQpO1xuXHRcdHZhciBvbGRFbnRyeSA9IGl0ZW0uZW50cnk7XG5cdFx0dmFyIGludGVyc2VjdGlvblJlY3QgPSByb290SXNJbkRvbSAmJiByb290Q29udGFpbnNUYXJnZXQgJiZcblx0XHRcdFx0dGhpcy5fY29tcHV0ZVRhcmdldEFuZFJvb3RJbnRlcnNlY3Rpb24odGFyZ2V0LCByb290UmVjdCk7XG5cblx0XHR2YXIgbmV3RW50cnkgPSBpdGVtLmVudHJ5ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkoe1xuXHRcdFx0dGltZTogbm93KCksXG5cdFx0XHR0YXJnZXQ6IHRhcmdldCxcblx0XHRcdGJvdW5kaW5nQ2xpZW50UmVjdDogdGFyZ2V0UmVjdCxcblx0XHRcdHJvb3RCb3VuZHM6IHJvb3RSZWN0LFxuXHRcdFx0aW50ZXJzZWN0aW9uUmVjdDogaW50ZXJzZWN0aW9uUmVjdFxuXHRcdH0pO1xuXG5cdFx0aWYgKCFvbGRFbnRyeSkge1xuXHRcdFx0dGhpcy5fcXVldWVkRW50cmllcy5wdXNoKG5ld0VudHJ5KTtcblx0XHR9IGVsc2UgaWYgKHJvb3RJc0luRG9tICYmIHJvb3RDb250YWluc1RhcmdldCkge1xuXHRcdFx0Ly8gSWYgdGhlIG5ldyBlbnRyeSBpbnRlcnNlY3Rpb24gcmF0aW8gaGFzIGNyb3NzZWQgYW55IG9mIHRoZVxuXHRcdFx0Ly8gdGhyZXNob2xkcywgYWRkIGEgbmV3IGVudHJ5LlxuXHRcdFx0aWYgKHRoaXMuX2hhc0Nyb3NzZWRUaHJlc2hvbGQob2xkRW50cnksIG5ld0VudHJ5KSkge1xuXHRcdFx0XHR0aGlzLl9xdWV1ZWRFbnRyaWVzLnB1c2gobmV3RW50cnkpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBJZiB0aGUgcm9vdCBpcyBub3QgaW4gdGhlIERPTSBvciB0YXJnZXQgaXMgbm90IGNvbnRhaW5lZCB3aXRoaW5cblx0XHRcdC8vIHJvb3QgYnV0IHRoZSBwcmV2aW91cyBlbnRyeSBmb3IgdGhpcyB0YXJnZXQgaGFkIGFuIGludGVyc2VjdGlvbixcblx0XHRcdC8vIGFkZCBhIG5ldyByZWNvcmQgaW5kaWNhdGluZyByZW1vdmFsLlxuXHRcdFx0aWYgKG9sZEVudHJ5ICYmIG9sZEVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG5cdFx0XHRcdHRoaXMuX3F1ZXVlZEVudHJpZXMucHVzaChuZXdFbnRyeSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB0aGlzKTtcblxuXHRpZiAodGhpcy5fcXVldWVkRW50cmllcy5sZW5ndGgpIHtcblx0XHR0aGlzLl9jYWxsYmFjayh0aGlzLnRha2VSZWNvcmRzKCksIHRoaXMpO1xuXHR9XG59O1xuXG5cbi8qKlxuICogQWNjZXB0cyBhIHRhcmdldCBhbmQgcm9vdCByZWN0IGNvbXB1dGVzIHRoZSBpbnRlcnNlY3Rpb24gYmV0d2VlbiB0aGVuXG4gKiBmb2xsb3dpbmcgdGhlIGFsZ29yaXRobSBpbiB0aGUgc3BlYy5cbiAqIFRPRE8ocGhpbGlwd2FsdG9uKTogYXQgdGhpcyB0aW1lIGNsaXAtcGF0aCBpcyBub3QgY29uc2lkZXJlZC5cbiAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9JbnRlcnNlY3Rpb25PYnNlcnZlci8jY2FsY3VsYXRlLWludGVyc2VjdGlvbi1yZWN0LWFsZ29cbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSB0YXJnZXQgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSByb290UmVjdCBUaGUgYm91bmRpbmcgcmVjdCBvZiB0aGUgcm9vdCBhZnRlciBiZWluZ1xuICogICAgIGV4cGFuZGVkIGJ5IHRoZSByb290TWFyZ2luIHZhbHVlLlxuICogQHJldHVybiB7P09iamVjdH0gVGhlIGZpbmFsIGludGVyc2VjdGlvbiByZWN0IG9iamVjdCBvciB1bmRlZmluZWQgaWYgbm9cbiAqICAgICBpbnRlcnNlY3Rpb24gaXMgZm91bmQuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2NvbXB1dGVUYXJnZXRBbmRSb290SW50ZXJzZWN0aW9uID1cblx0XHRmdW5jdGlvbih0YXJnZXQsIHJvb3RSZWN0KSB7XG5cblx0Ly8gSWYgdGhlIGVsZW1lbnQgaXNuJ3QgZGlzcGxheWVkLCBhbiBpbnRlcnNlY3Rpb24gY2FuJ3QgaGFwcGVuLlxuXHRpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5ID09ICdub25lJykgcmV0dXJuO1xuXG5cdHZhciB0YXJnZXRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHRhcmdldCk7XG5cdHZhciBpbnRlcnNlY3Rpb25SZWN0ID0gdGFyZ2V0UmVjdDtcblx0dmFyIHBhcmVudCA9IGdldFBhcmVudE5vZGUodGFyZ2V0KTtcblx0dmFyIGF0Um9vdCA9IGZhbHNlO1xuXG5cdHdoaWxlICghYXRSb290KSB7XG5cdFx0dmFyIHBhcmVudFJlY3QgPSBudWxsO1xuXHRcdHZhciBwYXJlbnRDb21wdXRlZFN0eWxlID0gcGFyZW50Lm5vZGVUeXBlID09IDEgP1xuXHRcdFx0XHR3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpIDoge307XG5cblx0XHQvLyBJZiB0aGUgcGFyZW50IGlzbid0IGRpc3BsYXllZCwgYW4gaW50ZXJzZWN0aW9uIGNhbid0IGhhcHBlbi5cblx0XHRpZiAocGFyZW50Q29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09ICdub25lJykgcmV0dXJuO1xuXG5cdFx0aWYgKHBhcmVudCA9PSB0aGlzLnJvb3QgfHwgcGFyZW50ID09IGRvY3VtZW50KSB7XG5cdFx0XHRhdFJvb3QgPSB0cnVlO1xuXHRcdFx0cGFyZW50UmVjdCA9IHJvb3RSZWN0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBJZiB0aGUgZWxlbWVudCBoYXMgYSBub24tdmlzaWJsZSBvdmVyZmxvdywgYW5kIGl0J3Mgbm90IHRoZSA8Ym9keT5cblx0XHRcdC8vIG9yIDxodG1sPiBlbGVtZW50LCB1cGRhdGUgdGhlIGludGVyc2VjdGlvbiByZWN0LlxuXHRcdFx0Ly8gTm90ZTogPGJvZHk+IGFuZCA8aHRtbD4gY2Fubm90IGJlIGNsaXBwZWQgdG8gYSByZWN0IHRoYXQncyBub3QgYWxzb1xuXHRcdFx0Ly8gdGhlIGRvY3VtZW50IHJlY3QsIHNvIG5vIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBpbnRlcnNlY3Rpb24uXG5cdFx0XHRpZiAocGFyZW50ICE9IGRvY3VtZW50LmJvZHkgJiZcblx0XHRcdFx0XHRwYXJlbnQgIT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmXG5cdFx0XHRcdFx0cGFyZW50Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyAhPSAndmlzaWJsZScpIHtcblx0XHRcdFx0cGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChwYXJlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElmIGVpdGhlciBvZiB0aGUgYWJvdmUgY29uZGl0aW9uYWxzIHNldCBhIG5ldyBwYXJlbnRSZWN0LFxuXHRcdC8vIGNhbGN1bGF0ZSBuZXcgaW50ZXJzZWN0aW9uIGRhdGEuXG5cdFx0aWYgKHBhcmVudFJlY3QpIHtcblx0XHRcdGludGVyc2VjdGlvblJlY3QgPSBjb21wdXRlUmVjdEludGVyc2VjdGlvbihwYXJlbnRSZWN0LCBpbnRlcnNlY3Rpb25SZWN0KTtcblxuXHRcdFx0aWYgKCFpbnRlcnNlY3Rpb25SZWN0KSBicmVhaztcblx0XHR9XG5cdFx0cGFyZW50ID0gZ2V0UGFyZW50Tm9kZShwYXJlbnQpO1xuXHR9XG5cdHJldHVybiBpbnRlcnNlY3Rpb25SZWN0O1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIHJvb3QgcmVjdCBhZnRlciBiZWluZyBleHBhbmRlZCBieSB0aGUgcm9vdE1hcmdpbiB2YWx1ZS5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGV4cGFuZGVkIHJvb3QgcmVjdC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fZ2V0Um9vdFJlY3QgPSBmdW5jdGlvbigpIHtcblx0dmFyIHJvb3RSZWN0O1xuXHRpZiAodGhpcy5yb290KSB7XG5cdFx0cm9vdFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QodGhpcy5yb290KTtcblx0fSBlbHNlIHtcblx0XHQvLyBVc2UgPGh0bWw+Lzxib2R5PiBpbnN0ZWFkIG9mIHdpbmRvdyBzaW5jZSBzY3JvbGwgYmFycyBhZmZlY3Qgc2l6ZS5cblx0XHR2YXIgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0XHR2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cdFx0cm9vdFJlY3QgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHRcdHRvcDogMCxcblx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRyaWdodDogaHRtbC5jbGllbnRXaWR0aCB8fCBib2R5LmNsaWVudFdpZHRoLFxuXHRcdFx0d2lkdGg6IGh0bWwuY2xpZW50V2lkdGggfHwgYm9keS5jbGllbnRXaWR0aCxcblx0XHRcdGJvdHRvbTogaHRtbC5jbGllbnRIZWlnaHQgfHwgYm9keS5jbGllbnRIZWlnaHQsXG5cdFx0XHRoZWlnaHQ6IGh0bWwuY2xpZW50SGVpZ2h0IHx8IGJvZHkuY2xpZW50SGVpZ2h0XG5cdFx0fTtcblx0fVxuXHRyZXR1cm4gdGhpcy5fZXhwYW5kUmVjdEJ5Um9vdE1hcmdpbihyb290UmVjdCk7XG59O1xuXG5cbi8qKlxuICogQWNjZXB0cyBhIHJlY3QgYW5kIGV4cGFuZHMgaXQgYnkgdGhlIHJvb3RNYXJnaW4gdmFsdWUuXG4gKiBAcGFyYW0ge09iamVjdH0gcmVjdCBUaGUgcmVjdCBvYmplY3QgdG8gZXhwYW5kLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZXhwYW5kZWQgcmVjdC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fZXhwYW5kUmVjdEJ5Um9vdE1hcmdpbiA9IGZ1bmN0aW9uKHJlY3QpIHtcblx0dmFyIG1hcmdpbnMgPSB0aGlzLl9yb290TWFyZ2luVmFsdWVzLm1hcChmdW5jdGlvbihtYXJnaW4sIGkpIHtcblx0XHRyZXR1cm4gbWFyZ2luLnVuaXQgPT0gJ3B4JyA/IG1hcmdpbi52YWx1ZSA6XG5cdFx0XHRcdG1hcmdpbi52YWx1ZSAqIChpICUgMiA/IHJlY3Qud2lkdGggOiByZWN0LmhlaWdodCkgLyAxMDA7XG5cdH0pO1xuXHR2YXIgbmV3UmVjdCA9IHtcblx0XHR0b3A6IHJlY3QudG9wIC0gbWFyZ2luc1swXSxcblx0XHRyaWdodDogcmVjdC5yaWdodCArIG1hcmdpbnNbMV0sXG5cdFx0Ym90dG9tOiByZWN0LmJvdHRvbSArIG1hcmdpbnNbMl0sXG5cdFx0bGVmdDogcmVjdC5sZWZ0IC0gbWFyZ2luc1szXVxuXHR9O1xuXHRuZXdSZWN0LndpZHRoID0gbmV3UmVjdC5yaWdodCAtIG5ld1JlY3QubGVmdDtcblx0bmV3UmVjdC5oZWlnaHQgPSBuZXdSZWN0LmJvdHRvbSAtIG5ld1JlY3QudG9wO1xuXHRuZXdSZWN0LnggPSBuZXdSZWN0LmxlZnQ7XG5cdG5ld1JlY3QueSA9IG5ld1JlY3QudG9wO1xuXG5cdHJldHVybiBuZXdSZWN0O1xufTtcblxuXG4vKipcbiAqIEFjY2VwdHMgYW4gb2xkIGFuZCBuZXcgZW50cnkgYW5kIHJldHVybnMgdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgb2YgdGhlXG4gKiB0aHJlc2hvbGQgdmFsdWVzIGhhcyBiZWVuIGNyb3NzZWQuXG4gKiBAcGFyYW0gez9JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5fSBvbGRFbnRyeSBUaGUgcHJldmlvdXMgZW50cnkgZm9yIGFcbiAqICAgIHBhcnRpY3VsYXIgdGFyZ2V0IGVsZW1lbnQgb3IgbnVsbCBpZiBubyBwcmV2aW91cyBlbnRyeSBleGlzdHMuXG4gKiBAcGFyYW0ge0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnl9IG5ld0VudHJ5IFRoZSBjdXJyZW50IGVudHJ5IGZvciBhXG4gKiAgICBwYXJ0aWN1bGFyIHRhcmdldCBlbGVtZW50LlxuICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGEgYW55IHRocmVzaG9sZCBoYXMgYmVlbiBjcm9zc2VkLlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9oYXNDcm9zc2VkVGhyZXNob2xkID1cblx0XHRmdW5jdGlvbihvbGRFbnRyeSwgbmV3RW50cnkpIHtcblxuXHQvLyBUbyBtYWtlIGNvbXBhcmluZyBlYXNpZXIsIGFuIGVudHJ5IHRoYXQgaGFzIGEgcmF0aW8gb2YgMFxuXHQvLyBidXQgZG9lcyBub3QgYWN0dWFsbHkgaW50ZXJzZWN0IGlzIGdpdmVuIGEgdmFsdWUgb2YgLTFcblx0dmFyIG9sZFJhdGlvID0gb2xkRW50cnkgJiYgb2xkRW50cnkuaXNJbnRlcnNlY3RpbmcgP1xuXHRcdFx0b2xkRW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gfHwgMCA6IC0xO1xuXHR2YXIgbmV3UmF0aW8gPSBuZXdFbnRyeS5pc0ludGVyc2VjdGluZyA/XG5cdFx0XHRuZXdFbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyB8fCAwIDogLTE7XG5cblx0Ly8gSWdub3JlIHVuY2hhbmdlZCByYXRpb3Ncblx0aWYgKG9sZFJhdGlvID09PSBuZXdSYXRpbykgcmV0dXJuO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50aHJlc2hvbGRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRocmVzaG9sZCA9IHRoaXMudGhyZXNob2xkc1tpXTtcblxuXHRcdC8vIFJldHVybiB0cnVlIGlmIGFuIGVudHJ5IG1hdGNoZXMgYSB0aHJlc2hvbGQgb3IgaWYgdGhlIG5ldyByYXRpb1xuXHRcdC8vIGFuZCB0aGUgb2xkIHJhdGlvIGFyZSBvbiB0aGUgb3Bwb3NpdGUgc2lkZXMgb2YgYSB0aHJlc2hvbGQuXG5cdFx0aWYgKHRocmVzaG9sZCA9PSBvbGRSYXRpbyB8fCB0aHJlc2hvbGQgPT0gbmV3UmF0aW8gfHxcblx0XHRcdFx0dGhyZXNob2xkIDwgb2xkUmF0aW8gIT09IHRocmVzaG9sZCA8IG5ld1JhdGlvKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSByb290IGVsZW1lbnQgaXMgYW4gZWxlbWVudCBhbmQgaXMgaW4gdGhlIERPTS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHJvb3QgZWxlbWVudCBpcyBhbiBlbGVtZW50IGFuZCBpcyBpbiB0aGUgRE9NLlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9yb290SXNJbkRvbSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gIXRoaXMucm9vdCB8fCBjb250YWluc0RlZXAoZG9jdW1lbnQsIHRoaXMucm9vdCk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiByb290LlxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIHRhcmdldCBlbGVtZW50IHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiByb290LlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9yb290Q29udGFpbnNUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQpIHtcblx0cmV0dXJuIGNvbnRhaW5zRGVlcCh0aGlzLnJvb3QgfHwgZG9jdW1lbnQsIHRhcmdldCk7XG59O1xuXG5cbi8qKlxuICogQWRkcyB0aGUgaW5zdGFuY2UgdG8gdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlciByZWdpc3RyeSBpZiBpdCBpc24ndFxuICogYWxyZWFkeSBwcmVzZW50LlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9yZWdpc3Rlckluc3RhbmNlID0gZnVuY3Rpb24oKSB7XG5cdGlmIChyZWdpc3RyeS5pbmRleE9mKHRoaXMpIDwgMCkge1xuXHRcdHJlZ2lzdHJ5LnB1c2godGhpcyk7XG5cdH1cbn07XG5cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBpbnN0YW5jZSBmcm9tIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgcmVnaXN0cnkuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3VucmVnaXN0ZXJJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgaW5kZXggPSByZWdpc3RyeS5pbmRleE9mKHRoaXMpO1xuXHRpZiAoaW5kZXggIT0gLTEpIHJlZ2lzdHJ5LnNwbGljZShpbmRleCwgMSk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSBwZXJmb3JtYW5jZS5ub3coKSBtZXRob2Qgb3IgbnVsbCBpbiBicm93c2Vyc1xuICogdGhhdCBkb24ndCBzdXBwb3J0IHRoZSBBUEkuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBlbGFwc2VkIHRpbWUgc2luY2UgdGhlIHBhZ2Ugd2FzIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gbm93KCkge1xuXHRyZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlICYmIHBlcmZvcm1hbmNlLm5vdyAmJiBwZXJmb3JtYW5jZS5ub3coKTtcbn1cblxuXG4vKipcbiAqIFRocm90dGxlcyBhIGZ1bmN0aW9uIGFuZCBkZWxheXMgaXRzIGV4ZWN1dGlvbiwgc28gaXQncyBvbmx5IGNhbGxlZCBhdCBtb3N0XG4gKiBvbmNlIHdpdGhpbiBhIGdpdmVuIHRpbWUgcGVyaW9kLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVvdXQgVGhlIGFtb3VudCBvZiB0aW1lIHRoYXQgbXVzdCBwYXNzIGJlZm9yZSB0aGVcbiAqICAgICBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIGFnYWluLlxuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZuLCB0aW1lb3V0KSB7XG5cdHZhciB0aW1lciA9IG51bGw7XG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCF0aW1lcikge1xuXHRcdFx0dGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRmbigpO1xuXHRcdFx0XHR0aW1lciA9IG51bGw7XG5cdFx0XHR9LCB0aW1lb3V0KTtcblx0XHR9XG5cdH07XG59XG5cblxuLyoqXG4gKiBBZGRzIGFuIGV2ZW50IGhhbmRsZXIgdG8gYSBET00gbm9kZSBlbnN1cmluZyBjcm9zcy1icm93c2VyIGNvbXBhdGliaWxpdHkuXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIERPTSBub2RlIHRvIGFkZCB0aGUgZXZlbnQgaGFuZGxlciB0by5cbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBldmVudCBoYW5kbGVyIHRvIGFkZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0X3VzZUNhcHR1cmUgT3B0aW9uYWxseSBhZGRzIHRoZSBldmVuIHRvIHRoZSBjYXB0dXJlXG4gKiAgICAgcGhhc2UuIE5vdGU6IHRoaXMgb25seSB3b3JrcyBpbiBtb2Rlcm4gYnJvd3NlcnMuXG4gKi9cbmZ1bmN0aW9uIGFkZEV2ZW50KG5vZGUsIGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUpIHtcblx0aWYgKHR5cGVvZiBub2RlLmFkZEV2ZW50TGlzdGVuZXIgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZm4sIG9wdF91c2VDYXB0dXJlIHx8IGZhbHNlKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2Ygbm9kZS5hdHRhY2hFdmVudCA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0bm9kZS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZuKTtcblx0fVxufVxuXG5cbi8qKlxuICogUmVtb3ZlcyBhIHByZXZpb3VzbHkgYWRkZWQgZXZlbnQgaGFuZGxlciBmcm9tIGEgRE9NIG5vZGUuXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIERPTSBub2RlIHRvIHJlbW92ZSB0aGUgZXZlbnQgaGFuZGxlciBmcm9tLlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGV2ZW50IGhhbmRsZXIgdG8gcmVtb3ZlLlxuICogQHBhcmFtIHtib29sZWFufSBvcHRfdXNlQ2FwdHVyZSBJZiB0aGUgZXZlbnQgaGFuZGxlciB3YXMgYWRkZWQgd2l0aCB0aGlzXG4gKiAgICAgZmxhZyBzZXQgdG8gdHJ1ZSwgaXQgc2hvdWxkIGJlIHNldCB0byB0cnVlIGhlcmUgaW4gb3JkZXIgdG8gcmVtb3ZlIGl0LlxuICovXG5mdW5jdGlvbiByZW1vdmVFdmVudChub2RlLCBldmVudCwgZm4sIG9wdF91c2VDYXB0dXJlKSB7XG5cdGlmICh0eXBlb2Ygbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyID09ICdmdW5jdGlvbicpIHtcblx0XHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSB8fCBmYWxzZSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIG5vZGUuZGV0YXRjaEV2ZW50ID09ICdmdW5jdGlvbicpIHtcblx0XHRub2RlLmRldGF0Y2hFdmVudCgnb24nICsgZXZlbnQsIGZuKTtcblx0fVxufVxuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW50ZXJzZWN0aW9uIGJldHdlZW4gdHdvIHJlY3Qgb2JqZWN0cy5cbiAqIEBwYXJhbSB7T2JqZWN0fSByZWN0MSBUaGUgZmlyc3QgcmVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSByZWN0MiBUaGUgc2Vjb25kIHJlY3QuXG4gKiBAcmV0dXJuIHs/T2JqZWN0fSBUaGUgaW50ZXJzZWN0aW9uIHJlY3Qgb3IgdW5kZWZpbmVkIGlmIG5vIGludGVyc2VjdGlvblxuICogICAgIGlzIGZvdW5kLlxuICovXG5mdW5jdGlvbiBjb21wdXRlUmVjdEludGVyc2VjdGlvbihyZWN0MSwgcmVjdDIpIHtcblx0dmFyIHRvcCA9IE1hdGgubWF4KHJlY3QxLnRvcCwgcmVjdDIudG9wKTtcblx0dmFyIGJvdHRvbSA9IE1hdGgubWluKHJlY3QxLmJvdHRvbSwgcmVjdDIuYm90dG9tKTtcblx0dmFyIGxlZnQgPSBNYXRoLm1heChyZWN0MS5sZWZ0LCByZWN0Mi5sZWZ0KTtcblx0dmFyIHJpZ2h0ID0gTWF0aC5taW4ocmVjdDEucmlnaHQsIHJlY3QyLnJpZ2h0KTtcblx0dmFyIHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuXHR2YXIgaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuXG5cdHJldHVybiAod2lkdGggPj0gMCAmJiBoZWlnaHQgPj0gMCkgJiYge1xuXHRcdHg6IGxlZnQsXG5cdFx0eTogdG9wLFxuXHRcdHRvcDogdG9wLFxuXHRcdGJvdHRvbTogYm90dG9tLFxuXHRcdGxlZnQ6IGxlZnQsXG5cdFx0cmlnaHQ6IHJpZ2h0LFxuXHRcdHdpZHRoOiB3aWR0aCxcblx0XHRoZWlnaHQ6IGhlaWdodFxuXHR9O1xufVxuXG5cbi8qKlxuICogU2hpbXMgdGhlIG5hdGl2ZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBvbGRlciBJRS5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWwgVGhlIGVsZW1lbnQgd2hvc2UgYm91bmRpbmcgcmVjdCB0byBnZXQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSAocG9zc2libHkgc2hpbW1lZCkgcmVjdCBvZiB0aGUgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsKSB7XG5cdHZhciByZWN0O1xuXG5cdHRyeSB7XG5cdFx0cmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBJZ25vcmUgV2luZG93cyA3IElFMTEgXCJVbnNwZWNpZmllZCBlcnJvclwiXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3czYy9JbnRlcnNlY3Rpb25PYnNlcnZlci9wdWxsLzIwNVxuXHR9XG5cblx0aWYgKCFyZWN0KSByZXR1cm4gZ2V0RW1wdHlSZWN0KCk7XG5cblx0Ly8gT2xkZXIgSUVcblx0aWYgKCEocmVjdC53aWR0aCAmJiByZWN0LmhlaWdodCAmJiByZWN0LnggJiYgcmVjdC55KSkge1xuXHRcdHJlY3QgPSB7XG5cdFx0XHR4OiByZWN0LmxlZnQsXG5cdFx0XHR5OiByZWN0LnRvcCxcblx0XHRcdHRvcDogcmVjdC50b3AsXG5cdFx0XHRyaWdodDogcmVjdC5yaWdodCxcblx0XHRcdGJvdHRvbTogcmVjdC5ib3R0b20sXG5cdFx0XHRsZWZ0OiByZWN0LmxlZnQsXG5cdFx0XHR3aWR0aDogcmVjdC5yaWdodCAtIHJlY3QubGVmdCxcblx0XHRcdGhlaWdodDogcmVjdC5ib3R0b20gLSByZWN0LnRvcFxuXHRcdH07XG5cdH1cblx0cmV0dXJuIHJlY3Q7XG59XG5cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGVtcHR5IHJlY3Qgb2JqZWN0LiBBbiBlbXB0eSByZWN0IGlzIHJldHVybmVkIHdoZW4gYW4gZWxlbWVudFxuICogaXMgbm90IGluIHRoZSBET00uXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBlbXB0eSByZWN0LlxuICovXG5mdW5jdGlvbiBnZXRFbXB0eVJlY3QoKSB7XG5cdHJldHVybiB7XG5cdFx0eDogMCxcblx0XHR5OiAwLFxuXHRcdHRvcDogMCxcblx0XHRib3R0b206IDAsXG5cdFx0bGVmdDogMCxcblx0XHRyaWdodDogMCxcblx0XHR3aWR0aDogMCxcblx0XHRoZWlnaHQ6IDBcblx0fTtcbn1cblxuLyoqXG4gKiBDaGVja3MgdG8gc2VlIGlmIGEgcGFyZW50IGVsZW1lbnQgY29udGFpbnMgYSBjaGlsZCBlbGVtZW50IChpbmNsdWRpbmcgaW5zaWRlXG4gKiBzaGFkb3cgRE9NKS5cbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IFRoZSBwYXJlbnQgZWxlbWVudC5cbiAqIEBwYXJhbSB7Tm9kZX0gY2hpbGQgVGhlIGNoaWxkIGVsZW1lbnQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYXJlbnQgbm9kZSBjb250YWlucyB0aGUgY2hpbGQgbm9kZS5cbiAqL1xuZnVuY3Rpb24gY29udGFpbnNEZWVwKHBhcmVudCwgY2hpbGQpIHtcblx0dmFyIG5vZGUgPSBjaGlsZDtcblx0d2hpbGUgKG5vZGUpIHtcblx0XHRpZiAobm9kZSA9PSBwYXJlbnQpIHJldHVybiB0cnVlO1xuXG5cdFx0bm9kZSA9IGdldFBhcmVudE5vZGUobm9kZSk7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5cbi8qKlxuICogR2V0cyB0aGUgcGFyZW50IG5vZGUgb2YgYW4gZWxlbWVudCBvciBpdHMgaG9zdCBlbGVtZW50IGlmIHRoZSBwYXJlbnQgbm9kZVxuICogaXMgYSBzaGFkb3cgcm9vdC5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgbm9kZSB3aG9zZSBwYXJlbnQgdG8gZ2V0LlxuICogQHJldHVybiB7Tm9kZXxudWxsfSBUaGUgcGFyZW50IG5vZGUgb3IgbnVsbCBpZiBubyBwYXJlbnQgZXhpc3RzLlxuICovXG5mdW5jdGlvbiBnZXRQYXJlbnROb2RlKG5vZGUpIHtcblx0dmFyIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcblxuXHRpZiAocGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSA9PSAxMSAmJiBwYXJlbnQuaG9zdCkge1xuXHRcdC8vIElmIHRoZSBwYXJlbnQgaXMgYSBzaGFkb3cgcm9vdCwgcmV0dXJuIHRoZSBob3N0IGVsZW1lbnQuXG5cdFx0cmV0dXJuIHBhcmVudC5ob3N0O1xuXHR9XG5cblx0aWYgKHBhcmVudCAmJiBwYXJlbnQuYXNzaWduZWRTbG90KSB7XG5cdFx0Ly8gSWYgdGhlIHBhcmVudCBpcyBkaXN0cmlidXRlZCBpbiBhIDxzbG90PiwgcmV0dXJuIHRoZSBwYXJlbnQgb2YgYSBzbG90LlxuXHRcdHJldHVybiBwYXJlbnQuYXNzaWduZWRTbG90LnBhcmVudE5vZGU7XG5cdH1cblxuXHRyZXR1cm4gcGFyZW50O1xufVxuXG5cbi8vIEV4cG9zZXMgdGhlIGNvbnN0cnVjdG9ycyBnbG9iYWxseS5cbndpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA9IEludGVyc2VjdGlvbk9ic2VydmVyO1xud2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkgPSBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5O1xuXG59KHdpbmRvdywgZG9jdW1lbnQpKTtcbn19KS5jYWxsKCdvYmplY3QnID09PSB0eXBlb2Ygd2luZG93ICYmIHdpbmRvdyB8fCAnb2JqZWN0JyA9PT0gdHlwZW9mIHNlbGYgJiYgc2VsZiB8fCAnb2JqZWN0JyA9PT0gdHlwZW9mIGdsb2JhbCAmJiBnbG9iYWwgfHwge30pO1xuIiwgImNvbnN0IElEOiBzdHJpbmcgPSAnZmxvYXRUT0MnO1xuXG5jb25zdCBXR19TS0lOOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCdza2luJyk7XG5cbmV4cG9ydCB7SUQsIFdHX1NLSU59O1xuIiwgImltcG9ydCB0eXBlIHtDb25maWcsIFN0YXRlfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7SUQsIFdHX1NLSU59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtjaGVja0ExMXlDb25maXJtS2V5LCBzY3JvbGxUb3B9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2ZpbHRlckFsdGVyZWRDbGlja3N9IGZyb20gJ2V4dC5nYWRnZXQuRmlsdGVyQWx0ZXJlZENsaWNrcyc7XG5pbXBvcnQge2dlbmVyYXRlRWxlbWVudHN9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUVsZW1lbnRzJztcbmltcG9ydCB7Z2VuZXJhdGVUb2dnbGVyRWxlbWVudH0gZnJvbSAnLi91dGlsL2dlbmVyYXRlVG9nZ2xlckVsZW1lbnQnO1xuaW1wb3J0IHtnZXRDb25maWd9IGZyb20gJy4vZ2V0Q29uZmlnJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7c2V0TXdOb3RpZnlTdHlsZX0gZnJvbSAnLi9zZXRNd05vdGlmeVN0eWxlJztcblxuY29uc3QgZmxvYXRUT0MgPSAoJG9yaWdpblRvYzogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdGNvbnN0IG9yaWdpblRvYzogSFRNTEVsZW1lbnQgPSAkb3JpZ2luVG9jLmdldCgwKSBhcyBIVE1MRWxlbWVudDtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJG9yaWdpblRvYy5wYXJlbnRzKCdib2R5Jyk7XG5cblx0Y29uc3QgeyRmbG9hdFRvYywgJGZsb2F0VG9jT3BlbmVyfSA9IGdlbmVyYXRlRWxlbWVudHMob3JpZ2luVG9jKTtcblx0JGZsb2F0VG9jT3BlbmVyLmhpZGUoKS5hcHBlbmRUbygkYm9keSk7XG5cblx0Y29uc3QgY29uZmlnOiBDb25maWcgPSBnZXRDb25maWcoSUQpO1xuXHRjb25zdCBtd05vdGlmeVN0eWxlOiBIVE1MU3R5bGVFbGVtZW50ID0gc2V0TXdOb3RpZnlTdHlsZSgpO1xuXG5cdGxldCBpc1Nob3c6IGJvb2xlYW4gPSBmYWxzZTtcblx0Y29uc3Qgc3RvcmVTdGF0ZSA9ICh0YXJnZXQ6IGtleW9mIENvbmZpZywgc3RhdGU6IFN0YXRlKTogdm9pZCA9PiB7XG5cdFx0Y29uZmlnW3RhcmdldF0gPSBzdGF0ZTtcblx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChJRCwgY29uZmlnKTtcblx0fTtcblxuXHRsZXQgZGlzYWJsZU13Tm90aWZ5U3R5bGVUaW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD47XG5cdGNvbnN0IGRpc2FibGVNd05vdGlmeVN0eWxlID0gKCk6IHZvaWQgPT4ge1xuXHRcdGlmIChkaXNhYmxlTXdOb3RpZnlTdHlsZVRpbWVyKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoZGlzYWJsZU13Tm90aWZ5U3R5bGVUaW1lcik7XG5cdFx0fVxuXHRcdGRpc2FibGVNd05vdGlmeVN0eWxlVGltZXIgPSBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcblx0XHRcdGlmICghaXNTaG93KSB7XG5cdFx0XHRcdG13Tm90aWZ5U3R5bGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0sIDUgKiAxMDAwKTtcblx0fTtcblxuXHRsZXQgbm90aWZpY2F0aW9uOiBSZXR1cm5UeXBlPHR5cGVvZiBtdy5ub3RpZmljYXRpb24ubm90aWZ5PiB8IHVuZGVmaW5lZDtcblx0Y29uc3QgY2xvc2VOb3RpZmljYXRpb24gPSAoY3VycmVudE5vdGlmaWNhdGlvbjogTm9uTnVsbGFibGU8dHlwZW9mIG5vdGlmaWNhdGlvbj4pOiB2b2lkID0+IHtcblx0XHRjdXJyZW50Tm90aWZpY2F0aW9uLmNsb3NlKCk7XG5cdFx0JGZsb2F0VG9jT3BlbmVyLmZhZGVJbigpO1xuXHRcdHN0b3JlU3RhdGUoJ2Zsb2F0VE9DJywgJ2Nsb3NlJyk7XG5cdFx0ZGlzYWJsZU13Tm90aWZ5U3R5bGUoKTtcblx0fTtcblxuXHRjb25zdCBzbW9vdGhTY3JvbGwgPSAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50IHwgSlF1ZXJ5LktleURvd25FdmVudCk6IHZvaWQgPT4ge1xuXHRcdGlmIChXR19TS0lOID09PSAnY2l0aXplbicpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gJCh0YXJnZXQpLnBhcmVudCgpO1xuXHRcdGNvbnN0IGhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICR0YXJnZXQuYXR0cignaHJlZicpO1xuXHRcdGlmICghaHJlZikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGFuY2hvck9mZnNldDogSlF1ZXJ5LkNvb3JkaW5hdGVzIHwgdW5kZWZpbmVkID0gJChocmVmKS5vZmZzZXQoKTtcblx0XHRpZiAoIWFuY2hvck9mZnNldCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0c2Nyb2xsVG9wKGAke2FuY2hvck9mZnNldC50b3B9cHhgKTtcblx0fTtcblxuXHRjb25zdCB0b2dnbGVUb2MgPSAoXG5cdFx0Y3VycmVudElzU2hvdzogYm9vbGVhbiB8ICdvcGVuJyA9IHRydWUsXG5cdFx0cHJlTm90aWZpY2F0aW9uOiB0eXBlb2Ygbm90aWZpY2F0aW9uID0gdW5kZWZpbmVkXG5cdCk6IHR5cGVvZiBub3RpZmljYXRpb24gPT4ge1xuXHRcdHByZU5vdGlmaWNhdGlvbj8uY2xvc2UoKTtcblx0XHRpc1Nob3cgPSAhIWN1cnJlbnRJc1Nob3c7XG5cblx0XHRzd2l0Y2ggKGN1cnJlbnRJc1Nob3cpIHtcblx0XHRcdGNhc2UgdHJ1ZTpcblx0XHRcdFx0aWYgKGNvbmZpZy5mbG9hdFRPQyA9PT0gJ2Nsb3NlJykge1xuXHRcdFx0XHRcdCRmbG9hdFRvY09wZW5lci5mYWRlSW4oKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdvcGVuJzpcblx0XHRcdFx0JGZsb2F0VG9jT3BlbmVyLmZhZGVPdXQoKTtcblx0XHRcdFx0c3RvcmVTdGF0ZSgnZmxvYXRUT0MnLCAnb3BlbicpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdCRmbG9hdFRvY09wZW5lci5mYWRlT3V0KCk7XG5cdFx0XHRcdGRpc2FibGVNd05vdGlmeVN0eWxlKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRtd05vdGlmeVN0eWxlLmRpc2FibGVkID0gZmFsc2U7XG5cblx0XHRpZiAocHJlTm90aWZpY2F0aW9uKSB7XG5cdFx0XHRwcmVOb3RpZmljYXRpb24uc3RhcnQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cHJlTm90aWZpY2F0aW9uID0gbXcubm90aWZpY2F0aW9uLm5vdGlmeSgkZmxvYXRUb2MsIHtcblx0XHRcdFx0Y2xhc3NlczogJ25vcHJpbnQnLFxuXHRcdFx0XHRpZDogSUQsXG5cdFx0XHRcdGF1dG9IaWRlOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3Qgbm90aWZpY2F0aW9uTGlzdGVuZXIgPSAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50IHwgSlF1ZXJ5LktleURvd25FdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0aWYgKCFjaGVja0ExMXlDb25maXJtS2V5KGV2ZW50KSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHRcdGlmICh0YXJnZXQuaWQgPT09ICdjbG9zZScpIHtcblx0XHRcdFx0XHRjbG9zZU5vdGlmaWNhdGlvbihwcmVOb3RpZmljYXRpb24gYXMgTm9uTnVsbGFibGU8dHlwZW9mIHByZU5vdGlmaWNhdGlvbj4pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNtb290aFNjcm9sbChldmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRwcmVOb3RpZmljYXRpb24uJG5vdGlmaWNhdGlvbi5vbihcblx0XHRcdFx0J2NsaWNrJyxcblx0XHRcdFx0ZmlsdGVyQWx0ZXJlZENsaWNrcygoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBub3RpZmljYXRpb25MaXN0ZW5lcihldmVudCk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdFx0cHJlTm90aWZpY2F0aW9uLiRub3RpZmljYXRpb24ub24oJ2tleWRvd24nLCBub3RpZmljYXRpb25MaXN0ZW5lcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByZU5vdGlmaWNhdGlvbjtcblx0fTtcblxuXHRjb25zdCBvYnNlcnZlckNhbGxiYWNrID0gKGVudHJpZXM6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlbXSk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IFtlbnRyeV0gPSBlbnRyaWVzO1xuXHRcdGlmICghZW50cnkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3Qge2ludGVyc2VjdGlvblJhdGlvfSA9IGVudHJ5O1xuXHRcdG5vdGlmaWNhdGlvbiA9IHRvZ2dsZVRvYyhpbnRlcnNlY3Rpb25SYXRpbyA9PT0gMCwgbm90aWZpY2F0aW9uKTtcblx0fTtcblx0Y29uc3QgaW50ZXJzZWN0aW9uT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spO1xuXHRpbnRlcnNlY3Rpb25PYnNlcnZlci5vYnNlcnZlKG9yaWdpblRvYyk7XG5cblx0Y29uc3Qgb3BlbmVyTGlzdGVuZXIgPSAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50IHwgSlF1ZXJ5LktleURvd25FdmVudCk6IHZvaWQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYgKCFjaGVja0ExMXlDb25maXJtS2V5KGV2ZW50KSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRub3RpZmljYXRpb24gPSB0b2dnbGVUb2MoJ29wZW4nKTtcblx0fTtcblx0JGZsb2F0VG9jT3BlbmVyLm9uKCdjbGljaycsIG9wZW5lckxpc3RlbmVyKTtcblx0JGZsb2F0VG9jT3BlbmVyLm9uKCdrZXlkb3duJywgb3BlbmVyTGlzdGVuZXIpO1xuXG5cdGNvbnN0IGNvbGxhcHNlT3JpZ2luVG9jID0gKCk6IHZvaWQgPT4ge1xuXHRcdGlmIChXR19TS0lOICE9PSAnY2l0aXplbicpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBpc0NvbGxhcHNlOiBib29sZWFuID0gY29uZmlnLm9yaWdpblRPQyA9PT0gJ2Nsb3NlJztcblxuXHRcdGNvbnN0ICRvcmlnaW5Ub2NUaXRsZTogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI3RvYyAudG9jdGl0bGUnKTtcblx0XHRjb25zdCAkb3JpZ2luVG9jSXRlbTogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI3RvYyB1bCcpO1xuXG5cdFx0Y29uc3QgJHRvZ2dsZXI6IEpRdWVyeSA9IGdlbmVyYXRlVG9nZ2xlckVsZW1lbnQoaXNDb2xsYXBzZSk7XG5cdFx0JG9yaWdpblRvY1RpdGxlLmFwcGVuZCgkdG9nZ2xlcik7XG5cblx0XHRjb25zdCBjb2xsYXBzZVRvZ2dsZSA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkb3JpZ2luVG9jVGl0bGUuZmluZCgnLm9vLXVpLWluZGljYXRvckVsZW1lbnQtaW5kaWNhdG9yJyk7XG5cdFx0XHQkZWxlbWVudC50b2dnbGVDbGFzcygnY29sbGFwc2UnKTtcblx0XHRcdGlmIChpc0NvbGxhcHNlKSB7XG5cdFx0XHRcdCRlbGVtZW50LmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnRXhwYW5kJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JGVsZW1lbnQuYXR0cigndGl0bGUnLCBnZXRNZXNzYWdlKCdDb2xsYXBzZScpKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdCRvcmlnaW5Ub2NUaXRsZS5vbignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0XHRpc0NvbGxhcHNlID8gc3RvcmVTdGF0ZSgnb3JpZ2luVE9DJywgJ29wZW4nKSA6IHN0b3JlU3RhdGUoJ29yaWdpblRPQycsICdjbG9zZScpO1xuXHRcdFx0Y29sbGFwc2VUb2dnbGUoKTtcblx0XHRcdCRvcmlnaW5Ub2NJdGVtLmZhZGVUb2dnbGUoKTtcblx0XHR9KTtcblxuXHRcdGlmIChpc0NvbGxhcHNlKSB7XG5cdFx0XHQkb3JpZ2luVG9jSXRlbS5mYWRlT3V0KCk7XG5cdFx0fVxuXHR9O1xuXHRjb2xsYXBzZU9yaWdpblRvYygpO1xufTtcblxuZXhwb3J0IHtmbG9hdFRPQ307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdENsb3NlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Nsb3NlJyxcblx0XHRcdGphOiAn6ZaJ44GY44KLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFs+mXrScsXG5cdFx0XHQnemgtaGFudCc6ICfpl5zploknLFxuXHRcdH0pLFxuXHRcdENvbnRlbnRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbnRlbnRzJyxcblx0XHRcdGphOiAn55uu5qyhJyxcblx0XHRcdHpoOiAn55uu5b2VJyxcblx0XHR9KSxcblx0XHRDb2xsYXBzZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb2xsYXBzZScsXG5cdFx0XHRqYTogJ+aKmOOCiueVs+OBvycsXG5cdFx0XHQnemgtaGFucyc6ICfmipjlj6AnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pG65Y+gJyxcblx0XHR9KSxcblx0XHRFeHBhbmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhwYW5kJyxcblx0XHRcdGphOiAn5bGV6ZaLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WxleW8gCcsXG5cdFx0XHQnemgtaGFudCc6ICflsZXplosnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZW5lcmF0ZUVsZW1lbnRzID0gKG9yaWdpblRvYzogSFRNTEVsZW1lbnQpID0+IHtcblx0Y29uc3QgdG9jOiBIVE1MRWxlbWVudCA9IG9yaWdpblRvYy5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XG5cdHRvYy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpPy5yZW1vdmUoKTtcblx0dG9jLnF1ZXJ5U2VsZWN0b3IoJy50b2N0b2dnbGVzcGFuJyk/LnJlbW92ZSgpO1xuXHRjb25zdCAkdG9jOiBKUXVlcnkgPSAkKHRvYyk7XG5cblx0Y29uc3QgJGZsb2F0VG9jOiBKUXVlcnkgPSAkdG9jXG5cdFx0LmNsb25lKClcblx0XHQucmVtb3ZlQXR0cignaWQnKVxuXHRcdC5wcmVwZW5kKFxuXHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdvby11aS1pbmRpY2F0b3JFbGVtZW50LWluZGljYXRvciBvby11aS1pY29uLWNsb3NlJylcblx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdGlkOiAnY2xvc2UnLFxuXHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdDbG9zZScpLFxuXHRcdFx0XHRcdHJvbGU6ICdidXR0b24nLFxuXHRcdFx0XHRcdHRhYmluZGV4OiAnMCcsXG5cdFx0XHRcdH0pXG5cdFx0KTtcblxuXHRjb25zdCAkZmxvYXRUb2NPcGVuZXI6IEpRdWVyeSA9ICQoJzxkaXY+Jylcblx0XHQuYWRkQ2xhc3MoJ25vcHJpbnQnKVxuXHRcdC5hdHRyKHtcblx0XHRcdGlkOiAnZmxvYXRUb2Mtb3BlbmVyJyxcblx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdDb250ZW50cycpLFxuXHRcdFx0cm9sZTogJ2J1dHRvbicsXG5cdFx0XHR0YWJpbmRleDogJzAnLFxuXHRcdH0pXG5cdFx0LmFwcGVuZChcblx0XHRcdCQoJzxzcGFuPicpLmFkZENsYXNzKCdvby11aS1pbmRpY2F0b3JFbGVtZW50LWluZGljYXRvciBvby11aS1pY29uLXJlZmVyZW5jZScpLFxuXHRcdFx0JCgnPHNwYW4+JykudGV4dChnZXRNZXNzYWdlKCdDb250ZW50cycpKVxuXHRcdCk7XG5cblx0cmV0dXJuIHtcblx0XHQkZmxvYXRUb2MsXG5cdFx0JGZsb2F0VG9jT3BlbmVyLFxuXHR9O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUVsZW1lbnRzfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZW5lcmF0ZVRvZ2dsZXJFbGVtZW50ID0gKGlzQ29sbGFwc2U6IGJvb2xlYW4pOiBKUXVlcnkgPT4ge1xuXHRsZXQgJHRvZ2dsZXI6IEpRdWVyeSA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCdvby11aS1pbmRpY2F0b3JFbGVtZW50LWluZGljYXRvciBvby11aS1pY29uLWRvd25UcmlhbmdsZScpO1xuXHQkdG9nZ2xlciA9IGlzQ29sbGFwc2Vcblx0XHQ/ICR0b2dnbGVyLmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnRXhwYW5kJykpXG5cdFx0OiAkdG9nZ2xlci5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ0NvbGxhcHNlJykpLmFkZENsYXNzKCdjb2xsYXBzZScpO1xuXG5cdHJldHVybiAkdG9nZ2xlcjtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVUb2dnbGVyRWxlbWVudH07XG4iLCAiaW1wb3J0IHR5cGUge0NvbmZpZ30gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IGdldENvbmZpZyA9IChpZDogc3RyaW5nKTogQ29uZmlnID0+IHtcblx0bGV0IGNvbmZpZyA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KGlkKSBhcyBSZXR1cm5UeXBlPHR5cGVvZiBnZXRDb25maWc+O1xuXHRpZiAoIWNvbmZpZykge1xuXHRcdGNvbmZpZyA9IHtcblx0XHRcdGZsb2F0VE9DOiB3aW5kb3cub3V0ZXJIZWlnaHQgPCB3aW5kb3cub3V0ZXJXaWR0aCA/ICdvcGVuJyA6ICdjbG9zZScsXG5cdFx0XHRvcmlnaW5UT0M6ICdvcGVuJyxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGNvbmZpZztcbn07XG5cbmV4cG9ydCB7Z2V0Q29uZmlnfTtcbiIsICJjb25zdCBzZXRNd05vdGlmeVN0eWxlID0gKCk6IEhUTUxTdHlsZUVsZW1lbnQgPT4ge1xuXHRjb25zdCBzdHlsZTogSFRNTFN0eWxlRWxlbWVudCA9IG13LmxvYWRlci5hZGRTdHlsZVRhZyhcblx0XHQnLm13LW5vdGlmaWNhdGlvbi1hcmVhe3JpZ2h0OnVuc2V0O3dpZHRoOmF1dG87bWF4LXdpZHRoOjIwZW19Lm13LW5vdGlmaWNhdGlvbnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC05OTlweCk7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWCgtOTk5cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC05OTlweCl9Lm13LW5vdGlmaWNhdGlvbi12aXNpYmxley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKX0nXG5cdCk7XG5cblx0c3R5bGUuZGlzYWJsZWQgPSB0cnVlO1xuXG5cdHJldHVybiBzdHlsZTtcbn07XG5cbmV4cG9ydCB7c2V0TXdOb3RpZnlTdHlsZX07XG4iLCAiaW1wb3J0ICcuL0Zsb2F0VE9DLmxlc3MnO1xuaW1wb3J0IHtmbG9hdFRPQ30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgJG9yaWdpblRvYzogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI3RvYycpO1xuXHRpZiAoISRvcmlnaW5Ub2MubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZmxvYXRUT0MoJG9yaWdpblRvYyk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxLQUFDLFNBQVMsV0FBVztBQUNyQixVQUFJLEVBQUUsMEJBQXlCLFVBQVEsK0JBQThCLFVBQVEsdUJBQXNCLE9BQU8sMEJBQTBCLFlBQ2pJO0FBV0gsU0FBQyxTQUFTQSxTQUFRQyxXQUFVO0FBQzVCO0FBRUEsY0FBSSxvQkFBb0IsMEJBQTBCRCxXQUNsRCwrQkFBK0JBLFdBQy9CLHVC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QUFlO0FBQ2ZELHFCQUFlSSxXQUFXO0lBQzNCLENBQUM7QUFFRCxRQUFJNUUsWUFBWTtBQUNmd0UscUJBQWV0QixRQUFRO0lBQ3hCO0VBQ0Q7QUFDQW1CLG9CQUFrQjtBQUNuQjs7QU1qTEEsSUFBQVEscUJBQXNCcEgsUUFBQSxpQkFBQTtBQUV0QixNQUFBLEdBQUtvSCxtQkFBQUMsU0FBUSxFQUFFQyxLQUFNL0QsV0FBeUM7QUFDN0QsUUFBTUQsYUFBcUJDLE1BQU11RCxLQUFLLE1BQU07QUFDNUMsTUFBSSxDQUFDeEQsV0FBV2lFLFFBQVE7QUFDdkI7RUFDRDtBQUVBM0UsV0FBU1UsVUFBVTtBQUNwQixDQUFDOyIsCiAgIm5hbWVzIjogWyJ3aW5kb3ciLCAiZG9jdW1lbnQiLCAiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCAiSUQiLCAiV0dfU0tJTiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ2xvc2UiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQ29udGVudHMiLCAiemgiLCAiQ29sbGFwc2UiLCAiRXhwYW5kIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZW5lcmF0ZUVsZW1lbnRzIiwgIm9yaWdpblRvYyIsICJfdG9jJHF1ZXJ5U2VsZWN0b3IiLCAiX3RvYyRxdWVyeVNlbGVjdG9yMiIsICJ0b2MiLCAiY2xvbmVOb2RlIiwgInF1ZXJ5U2VsZWN0b3IiLCAicmVtb3ZlIiwgIiR0b2MiLCAiJCIsICIkZmxvYXRUb2MiLCAiY2xvbmUiLCAicmVtb3ZlQXR0ciIsICJwcmVwZW5kIiwgImFkZENsYXNzIiwgImF0dHIiLCAiaWQiLCAidGl0bGUiLCAicm9sZSIsICJ0YWJpbmRleCIsICIkZmxvYXRUb2NPcGVuZXIiLCAiYXBwZW5kIiwgInRleHQiLCAiZ2VuZXJhdGVUb2dnbGVyRWxlbWVudCIsICJpc0NvbGxhcHNlIiwgIiR0b2dnbGVyIiwgImdldENvbmZpZyIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJmbG9hdFRPQyIsICJ3aW5kb3ciLCAib3V0ZXJIZWlnaHQiLCAib3V0ZXJXaWR0aCIsICJvcmlnaW5UT0MiLCAic2V0TXdOb3RpZnlTdHlsZSIsICJzdHlsZSIsICJsb2FkZXIiLCAiYWRkU3R5bGVUYWciLCAiZGlzYWJsZWQiLCAiJG9yaWdpblRvYyIsICIkYm9keSIsICJwYXJlbnRzIiwgImhpZGUiLCAiYXBwZW5kVG8iLCAibXdOb3RpZnlTdHlsZSIsICJpc1Nob3ciLCAic3RvcmVTdGF0ZSIsICJ0YXJnZXQiLCAic3RhdGUiLCAic2V0T2JqZWN0IiwgImRpc2FibGVNd05vdGlmeVN0eWxlVGltZXIiLCAiZGlzYWJsZU13Tm90aWZ5U3R5bGUiLCAiY2xlYXJUaW1lb3V0IiwgInNldFRpbWVvdXQiLCAibm90aWZpY2F0aW9uIiwgImNsb3NlTm90aWZpY2F0aW9uIiwgImN1cnJlbnROb3RpZmljYXRpb24iLCAiY2xvc2UiLCAiZmFkZUluIiwgInNtb290aFNjcm9sbCIsICJldmVudCIsICIkdGFyZ2V0IiwgInBhcmVudCIsICJocmVmIiwgImFuY2hvck9mZnNldCIsICJvZmZzZXQiLCAicHJldmVudERlZmF1bHQiLCAic2Nyb2xsVG9wIiwgImNvbmNhdCIsICJ0b3AiLCAidG9nZ2xlVG9jIiwgImN1cnJlbnRJc1Nob3ciLCAicHJlTm90aWZpY2F0aW9uIiwgIl9wcmVOb3RpZmljYXRpb24iLCAiZmFkZU91dCIsICJzdGFydCIsICJub3RpZnkiLCAiY2xhc3NlcyIsICJhdXRvSGlkZSIsICJub3RpZmljYXRpb25MaXN0ZW5lciIsICJzdG9wUHJvcGFnYXRpb24iLCAiY2hlY2tBMTF5Q29uZmlybUtleSIsICIkbm90aWZpY2F0aW9uIiwgIm9uIiwgImZpbHRlckFsdGVyZWRDbGlja3MiLCAib2JzZXJ2ZXJDYWxsYmFjayIsICJlbnRyaWVzIiwgImVudHJ5IiwgImludGVyc2VjdGlvblJhdGlvIiwgImludGVyc2VjdGlvbk9ic2VydmVyIiwgIkludGVyc2VjdGlvbk9ic2VydmVyIiwgIm9ic2VydmUiLCAib3BlbmVyTGlzdGVuZXIiLCAiY29sbGFwc2VPcmlnaW5Ub2MiLCAiJG9yaWdpblRvY1RpdGxlIiwgImZpbmQiLCAiJG9yaWdpblRvY0l0ZW0iLCAiY29sbGFwc2VUb2dnbGUiLCAiJGVsZW1lbnQiLCAidG9nZ2xlQ2xhc3MiLCAiZmFkZVRvZ2dsZSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImxlbmd0aCJdCn0K
