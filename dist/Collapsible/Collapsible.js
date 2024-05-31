/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://rs.miraheze.org/wiki/MediaWiki:Gadget-collapsible.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src//Collapsible}
 * @author SolidBlock
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

// dist/Collapsible/Collapsible.js
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
//! src/Collapsible/modules/util/generateTargetElements.ts
var generateTargetElements = ($content) => {
  var _iterator2 = _createForOfIteratorHelper($content.find(".parent-collapsible, .parent-collapsible-using-slide, .parent-collapsible-next")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const element = _step2.value;
      const $parent = $(element).parent();
      var _iterator3 = _createForOfIteratorHelper(element.classList), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const className = _step3.value;
          if (className.slice(0, 18) === "parent-collapsible") {
            $parent.addClass(className.replace(/^parent-/, ""));
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  $content.find(".collapsible-using-slide, .collapsible-next").addClass("collapsible");
  const $collapsibles = $content.find(".collapsible");
  return $collapsibles;
};
//! src/Collapsible/modules/addListener.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/Collapsible/modules/util/hideElement.ts
var hideElement = ($collapsible, time) => {
  const useSlide = $collapsible.hasClass("collapsible-using-slide");
  if ($collapsible.hasClass("collapsible-next")) {
    const $element = $collapsible.next();
    if (useSlide) {
      $element.slideUp(time);
    } else {
      $element.fadeOut(time);
    }
  } else {
    const $elements = $collapsible.is("table") ? $collapsible.children().children("tr") : $collapsible.contents();
    var _iterator4 = _createForOfIteratorHelper($elements), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const element = _step4.value;
        const $element = $(element);
        if ($element.hasClass("collapsible-cascade")) {
          hideElement($element, time);
        } else if (!$element.hasClass("collapsible-always-show")) {
          if (useSlide) {
            $element.slideUp(time);
          } else {
            $element.fadeOut(time);
          }
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
};
//! src/Collapsible/modules/util/showElement.ts
var showElement = ($collapsible, time) => {
  const useSlide = $collapsible.hasClass("collapsible-using-slide");
  if ($collapsible.hasClass("collapsible-next")) {
    const $element = $collapsible.next();
    if (useSlide) {
      $element.slideDown(time);
    } else {
      $element.fadeIn(time);
    }
  } else {
    const $elements = $collapsible.is("table") ? $collapsible.children().children("tr") : $collapsible.contents();
    var _iterator5 = _createForOfIteratorHelper($elements), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        const element = _step5.value;
        const $element = $(element);
        if ($element.hasClass("collapsible-cascade")) {
          showElement($element, time);
        } else if (!$element.hasClass("collapsible-always-show")) {
          if (useSlide) {
            $element.slideDown(time);
          } else {
            $element.fadeIn(time);
          }
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }
};
//! src/Collapsible/modules/util/toggleElement.ts
var toggleElement = ($collapsible) => {
  const collapsed = $collapsible.hasClass("collapsed");
  const duration = Number.parseInt($collapsible.data("collapse-duration"), 10) || 200;
  if (collapsed) {
    showElement($collapsible, duration);
    $collapsible.removeClass("collapsed");
  } else {
    hideElement($collapsible, duration);
    $collapsible.addClass("collapsed");
  }
};
//! src/Collapsible/modules/addListener.ts
var addListener = ($collapsible, $togglerLink, hideText, showText) => {
  const eventListener = (event) => {
    if (!(0, import_ext_gadget.checkA11yConfirmKey)(event)) {
      return;
    }
    event.preventDefault();
    toggleElement($collapsible);
    if ($collapsible.hasClass("collapsed")) {
      $togglerLink.text(showText);
    } else {
      $togglerLink.text(hideText);
    }
  };
  $togglerLink.on("click", eventListener);
  $togglerLink.on("keydown", eventListener);
};
//! src/Collapsible/modules/addToggler.ts
var addToggler = ($collapsible, $toggler) => {
  const $appendHere = $collapsible.find(".collapsible-toggle-append-here").not(".collapsible-toggle-appended");
  if ($collapsible.hasClass("collapsible-next")) {
    $collapsible.append($toggler);
  } else if ($appendHere.length) {
    $appendHere.append($toggler);
    $appendHere.addClass("collapsible-toggle-appended");
    $appendHere.parentsUntil($collapsible).addClass("collapsible-always-show");
  } else if ($collapsible.hasClass("navbox")) {
    $collapsible.children(".navbox-title").first().addClass("collapsible-always-show").append($toggler);
  } else if ($collapsible.is("table")) {
    const $caption = $collapsible.children("caption");
    if ($caption.length) {
      $caption.first().append($toggler);
    } else {
      const $trows = $collapsible.children().children("tr");
      $trows.first().addClass("collapsible-always-show").children().last().append($toggler);
    }
  } else {
    const $toToggle = $collapsible.children(".collapsible-always-show");
    if ($toToggle.length) {
      $toToggle.first().append($toggler);
    } else {
      $collapsible.prepend($toggler);
      $toggler.addClass("collapsible-always-show");
    }
  }
};
//! src/Collapsible/modules/constant.ts
var CLASS_NAME = "gadget-collapsible";
var CLASS_NAME_TOGGLER = "".concat(CLASS_NAME, "-toggler");
//! src/Collapsible/modules/util/generateTogglerElement.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
var generateTogglerElement = ($collapsible, hideText, showText) => {
  const $toggler = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
    className: [CLASS_NAME_TOGGLER, "noprint"]
  }, "[", /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
    role: "button",
    tabIndex: 0
  }, $collapsible.hasClass("collapsed") ? showText : hideText), "]"));
  return $toggler;
};
//! src/Collapsible/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Collapse: (0, import_ext_gadget3.localize)({
      en: "collapse",
      ja: "折り畳み",
      "zh-hans": "折叠",
      "zh-hant": "折疊"
    }),
    Expand: (0, import_ext_gadget3.localize)({
      en: "expand",
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
//! src/Collapsible/modules/makeCollapsible.ts
var makeCollapsible = ($collapsibles) => {
  var _iterator6 = _createForOfIteratorHelper($collapsibles), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      const element = _step6.value;
      const $collapsible = $(element);
      if ($collapsible.data("made-collapsible")) {
        continue;
      }
      const hideText = $collapsible.data("collapsetext") || getMessage("Collapse");
      const showText = $collapsible.data("expandtext") || getMessage("Expand");
      const $toggler = generateTogglerElement($collapsible, hideText, showText);
      const $togglerLink = $toggler.find("a");
      addToggler($collapsible, $toggler);
      if ($collapsible.hasClass("collapsed")) {
        hideElement($collapsible, 0);
      }
      addListener($collapsible, $togglerLink, hideText, showText);
      $collapsible.data("made-collapsible", true);
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
};
//! src/Collapsible/modules/addHook.ts
var addHook = () => {
  mw.hook("wikipage.content").add(($content) => {
    const $collapsibles = generateTargetElements($content);
    if (!$collapsibles.length) {
      return;
    }
    makeCollapsible($collapsibles);
  });
};
//! src/Collapsible/Collapsible.ts
/*!
 * 为元素添加“隐藏”和“显示”的按钮。
 *
 * 用法说明：
 *
 * 带有 collapsible 类的元素默认可折叠。
 * - 对于 navbox，折叠时会保留标题栏，并将折叠按钮添加在标题栏中。
 * - 对于 table，折叠时会保留 caption 或第一行，并将折叠按钮添加在 caption 末尾
 *   或者第一行最后一格末尾。
 * - 对于其他元素，
 *   - 若其子元素有带有 collapsible-always-show 类，那么除了该子元素之外的各个
 *   子元素都会随折叠隐藏，且折叠按钮添加在该子元素末尾。
 *   - 若没有子元素带有 collapsible-always-show 类，那么所有子元素都会被折叠，
 *   折叠按钮添加在整个 collapsible 元素的开头，且该按钮不会随折叠隐藏。
 *   - 若子元素带有 collapsible-cascade 类，那么当折叠时，该元素自身不是隐藏，
 *   而是隐藏其所有的子元素，这些子元素同样可以受 collapsible-always-show 和
 *   collapsible-cascade 类的影响。
 *   - 注意必须是子元素，直接的文本节点不会随折叠隐藏，例如：
 *     <div class="collapsible">123<span>456</span></div>
 *   折叠时，“456”会随折叠隐藏，但“123”不会。
 * - 若带有 collapsible-using-slide 类，那么折叠时，使用滑动动画而非淡入淡出的
 *   动画。建议当只有一个元素会被隐藏时，才加此类。
 *   - 带有 collapsible-using-slide 类的元素会自动带有 collapsible 类。
 * - 若带有 collapsible-next 类，那么其折叠的不是其自身的子元素，而是折叠紧随
 *   其后的一个元素。
 *   - 这种情况下，折叠按钮默认附在该 collapsible-next 元素的末尾。
 *   - 带有 collapsible-next 类的元素会自动带有 collapsible 类。
 * - data-collapse-duration 属性可以设置折叠动画的时长，默认为 200 毫秒。
 * - 带有 collapsed 类的元素初始就是已折叠的。
 * - data-expandtext 和 data-collapsetext 可用于控制折叠按钮的显示文字。不支持
 *   繁简转换，但是其默认值是可以正常根据界面语言繁简转换的。
 */
addHook();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVRhcmdldEVsZW1lbnRzLnRzIiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL3V0aWwvaGlkZUVsZW1lbnQudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvdXRpbC9zaG93RWxlbWVudC50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy91dGlsL3RvZ2dsZUVsZW1lbnQudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvYWRkVG9nZ2xlci50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy91dGlsL2dlbmVyYXRlVG9nZ2xlckVsZW1lbnQudHN4IiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvbWFrZUNvbGxhcHNpYmxlLnRzIiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL2FkZEhvb2sudHMiLCAic3JjL0NvbGxhcHNpYmxlL0NvbGxhcHNpYmxlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBnZW5lcmF0ZVRhcmdldEVsZW1lbnRzID0gKCRjb250ZW50OiBKUXVlcnkpOiBKUXVlcnkgPT4ge1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZChcblx0XHQnLnBhcmVudC1jb2xsYXBzaWJsZSwgLnBhcmVudC1jb2xsYXBzaWJsZS11c2luZy1zbGlkZSwgLnBhcmVudC1jb2xsYXBzaWJsZS1uZXh0J1xuXHQpKSB7XG5cdFx0Y29uc3QgJHBhcmVudDogSlF1ZXJ5ID0gJChlbGVtZW50KS5wYXJlbnQoKTtcblx0XHRmb3IgKGNvbnN0IGNsYXNzTmFtZSBvZiBlbGVtZW50LmNsYXNzTGlzdCkge1xuXHRcdFx0aWYgKGNsYXNzTmFtZS5zbGljZSgwLCAxOCkgPT09ICdwYXJlbnQtY29sbGFwc2libGUnKSB7XG5cdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHQvLyAqIGNvbGxhcHNpYmxlXG5cdFx0XHRcdC8vICogY29sbGFwc2libGUtdXNpbmctc2xpZGVcblx0XHRcdFx0Ly8gKiBjb2xsYXBzaWJsZS1uZXh0XG5cdFx0XHRcdCRwYXJlbnQuYWRkQ2xhc3MoY2xhc3NOYW1lLnJlcGxhY2UoL15wYXJlbnQtLywgJycpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQkY29udGVudC5maW5kKCcuY29sbGFwc2libGUtdXNpbmctc2xpZGUsIC5jb2xsYXBzaWJsZS1uZXh0JykuYWRkQ2xhc3MoJ2NvbGxhcHNpYmxlJyk7XG5cblx0Y29uc3QgJGNvbGxhcHNpYmxlczogSlF1ZXJ5ID0gJGNvbnRlbnQuZmluZCgnLmNvbGxhcHNpYmxlJyk7XG5cblx0cmV0dXJuICRjb2xsYXBzaWJsZXM7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVGFyZ2V0RWxlbWVudHN9O1xuIiwgImltcG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dG9nZ2xlRWxlbWVudH0gZnJvbSAnLi91dGlsL3RvZ2dsZUVsZW1lbnQnO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9ICgkY29sbGFwc2libGU6IEpRdWVyeSwgJHRvZ2dsZXJMaW5rOiBKUXVlcnksIGhpZGVUZXh0OiBzdHJpbmcsIHNob3dUZXh0OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3QgZXZlbnRMaXN0ZW5lciA9IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KTogdm9pZCA9PiB7XG5cdFx0aWYgKCFjaGVja0ExMXlDb25maXJtS2V5KGV2ZW50KSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR0b2dnbGVFbGVtZW50KCRjb2xsYXBzaWJsZSk7XG5cblx0XHRpZiAoJGNvbGxhcHNpYmxlLmhhc0NsYXNzKCdjb2xsYXBzZWQnKSkge1xuXHRcdFx0JHRvZ2dsZXJMaW5rLnRleHQoc2hvd1RleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdG9nZ2xlckxpbmsudGV4dChoaWRlVGV4dCk7XG5cdFx0fVxuXHR9O1xuXG5cdCR0b2dnbGVyTGluay5vbignY2xpY2snLCBldmVudExpc3RlbmVyKTtcblx0JHRvZ2dsZXJMaW5rLm9uKCdrZXlkb3duJywgZXZlbnRMaXN0ZW5lcik7XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiIsICIvLyDpmpDol4/mn5DkuKrlj6/mipjlj6DnmoTlhYPntKDjgIJcbmNvbnN0IGhpZGVFbGVtZW50ID0gKCRjb2xsYXBzaWJsZTogSlF1ZXJ5LCB0aW1lOiBudW1iZXIpOiB2b2lkID0+IHtcblx0Y29uc3QgdXNlU2xpZGU6IGJvb2xlYW4gPSAkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLXVzaW5nLXNsaWRlJyk7XG5cdGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLW5leHQnKSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkY29sbGFwc2libGUubmV4dCgpO1xuXG5cdFx0aWYgKHVzZVNsaWRlKSB7XG5cdFx0XHQkZWxlbWVudC5zbGlkZVVwKHRpbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZWxlbWVudC5mYWRlT3V0KHRpbWUpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zdCAkZWxlbWVudHM6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZS5pcygndGFibGUnKVxuXHRcdFx0PyAkY29sbGFwc2libGUuY2hpbGRyZW4oKS5jaGlsZHJlbigndHInKVxuXHRcdFx0OiAoJGNvbGxhcHNpYmxlLmNvbnRlbnRzKCkgYXMgSlF1ZXJ5KTtcblxuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkZWxlbWVudHMpIHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0aWYgKCRlbGVtZW50Lmhhc0NsYXNzKCdjb2xsYXBzaWJsZS1jYXNjYWRlJykpIHtcblx0XHRcdFx0aGlkZUVsZW1lbnQoJGVsZW1lbnQsIHRpbWUpO1xuXHRcdFx0fSBlbHNlIGlmICghJGVsZW1lbnQuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLWFsd2F5cy1zaG93JykpIHtcblx0XHRcdFx0aWYgKHVzZVNsaWRlKSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuc2xpZGVVcCh0aW1lKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWxlbWVudC5mYWRlT3V0KHRpbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2hpZGVFbGVtZW50fTtcbiIsICIvLyDmmL7npLrmn5DkuKrlj6/mipjlj6DnmoTlhYPntKDjgIJcbmNvbnN0IHNob3dFbGVtZW50ID0gKCRjb2xsYXBzaWJsZTogSlF1ZXJ5LCB0aW1lOiBudW1iZXIpOiB2b2lkID0+IHtcblx0Y29uc3QgdXNlU2xpZGU6IGJvb2xlYW4gPSAkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLXVzaW5nLXNsaWRlJyk7XG5cdGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLW5leHQnKSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkY29sbGFwc2libGUubmV4dCgpO1xuXG5cdFx0aWYgKHVzZVNsaWRlKSB7XG5cdFx0XHQkZWxlbWVudC5zbGlkZURvd24odGltZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRlbGVtZW50LmZhZGVJbih0aW1lKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgJGVsZW1lbnRzOiBKUXVlcnkgPSAkY29sbGFwc2libGUuaXMoJ3RhYmxlJylcblx0XHRcdD8gJGNvbGxhcHNpYmxlLmNoaWxkcmVuKCkuY2hpbGRyZW4oJ3RyJylcblx0XHRcdDogKCRjb2xsYXBzaWJsZS5jb250ZW50cygpIGFzIEpRdWVyeSk7XG5cblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGVsZW1lbnRzKSB7XG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRcdGlmICgkZWxlbWVudC5oYXNDbGFzcygnY29sbGFwc2libGUtY2FzY2FkZScpKSB7XG5cdFx0XHRcdHNob3dFbGVtZW50KCRlbGVtZW50LCB0aW1lKTtcblx0XHRcdH0gZWxzZSBpZiAoISRlbGVtZW50Lmhhc0NsYXNzKCdjb2xsYXBzaWJsZS1hbHdheXMtc2hvdycpKSB7XG5cdFx0XHRcdGlmICh1c2VTbGlkZSkge1xuXHRcdFx0XHRcdCRlbGVtZW50LnNsaWRlRG93bih0aW1lKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWxlbWVudC5mYWRlSW4odGltZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7c2hvd0VsZW1lbnR9O1xuIiwgImltcG9ydCB7aGlkZUVsZW1lbnR9IGZyb20gJy4vaGlkZUVsZW1lbnQnO1xuaW1wb3J0IHtzaG93RWxlbWVudH0gZnJvbSAnLi9zaG93RWxlbWVudCc7XG5cbmNvbnN0IHRvZ2dsZUVsZW1lbnQgPSAoJGNvbGxhcHNpYmxlOiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3QgY29sbGFwc2VkOiBib29sZWFuID0gJGNvbGxhcHNpYmxlLmhhc0NsYXNzKCdjb2xsYXBzZWQnKTtcblx0Y29uc3QgZHVyYXRpb246IG51bWJlciA9IE51bWJlci5wYXJzZUludCgkY29sbGFwc2libGUuZGF0YSgnY29sbGFwc2UtZHVyYXRpb24nKSBhcyBzdHJpbmcsIDEwKSB8fCAyMDA7XG5cblx0aWYgKGNvbGxhcHNlZCkge1xuXHRcdHNob3dFbGVtZW50KCRjb2xsYXBzaWJsZSwgZHVyYXRpb24pO1xuXHRcdCRjb2xsYXBzaWJsZS5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XG5cdH0gZWxzZSB7XG5cdFx0aGlkZUVsZW1lbnQoJGNvbGxhcHNpYmxlLCBkdXJhdGlvbik7XG5cdFx0JGNvbGxhcHNpYmxlLmFkZENsYXNzKCdjb2xsYXBzZWQnKTtcblx0fVxufTtcblxuZXhwb3J0IHt0b2dnbGVFbGVtZW50fTtcbiIsICJjb25zdCBhZGRUb2dnbGVyID0gKCRjb2xsYXBzaWJsZTogSlF1ZXJ5LCAkdG9nZ2xlcjogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdGNvbnN0ICRhcHBlbmRIZXJlOiBKUXVlcnkgPSAkY29sbGFwc2libGVcblx0XHQuZmluZCgnLmNvbGxhcHNpYmxlLXRvZ2dsZS1hcHBlbmQtaGVyZScpXG5cdFx0Lm5vdCgnLmNvbGxhcHNpYmxlLXRvZ2dsZS1hcHBlbmRlZCcpO1xuXG5cdGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLW5leHQnKSkge1xuXHRcdC8vIOiLpeaciSBjb2xsYXBzaWJsZS1uZXh0IOexu++8jOmCo+S5iOiiq+aKmOWPoOeahOWFg+e0oOS4jeWcqOivpeWFg+e0oOWGhe+8jOatpOaXtuebtOaOpeWwhuaKmOWPoOaMiemSrua3u+WKoOWcqOacq+WwvuOAglxuXHRcdCRjb2xsYXBzaWJsZS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHR9IGVsc2UgaWYgKCRhcHBlbmRIZXJlLmxlbmd0aCkge1xuXHRcdC8vIOW4puaciSBjb2xsYXBzaWJsZS10b2dnbGUtYXBwZW5kLWhlcmUg57G755qE5YWD57Sg77yM6Iul5a2Y5Zyo77yM5YiZ5peg6K665Y+v5oqY5Y+g5YWD57Sg5piv5LuA5LmI77yM5YiZ5by65Yi25bCG5oqY5Y+g5oyJ6ZKu5re75Yqg6Iez6K+l5YWD57Sg5Lit44CCXG5cdFx0JGFwcGVuZEhlcmUuYXBwZW5kKCR0b2dnbGVyKTtcblx0XHQkYXBwZW5kSGVyZS5hZGRDbGFzcygnY29sbGFwc2libGUtdG9nZ2xlLWFwcGVuZGVkJyk7XG5cdFx0JGFwcGVuZEhlcmUucGFyZW50c1VudGlsKCRjb2xsYXBzaWJsZSkuYWRkQ2xhc3MoJ2NvbGxhcHNpYmxlLWFsd2F5cy1zaG93Jyk7XG5cdH0gZWxzZSBpZiAoJGNvbGxhcHNpYmxlLmhhc0NsYXNzKCduYXZib3gnKSkge1xuXHRcdC8vIG5hdmJveCDlhYPntKDnmoTmipjlj6DmjInpkq7mt7vliqDoh7MgbmF2Ym94LXRpdGxlIOS4re+8jOS4lOivpSBuYXZib3gtdGl0bGUg5Lya6YG/5YWN6KKr5oqY5Y+g5b2x5ZON5Yiw44CCXG5cdFx0JGNvbGxhcHNpYmxlLmNoaWxkcmVuKCcubmF2Ym94LXRpdGxlJykuZmlyc3QoKS5hZGRDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHR9IGVsc2UgaWYgKCRjb2xsYXBzaWJsZS5pcygndGFibGUnKSkge1xuXHRcdC8vIOWvueS6jiB0YWJsZSDlr7nosaHvvIzlsJ3or5Xmt7vliqDliLAgY2FwdGlvbiDkuK3vvIzoi6UgY2FwdGlvbiDkuI3lrZjlnKjvvIzliJnmt7vliqDliLDnrKzkuIDooYznmoTmnIDlkI7kuIDliJfvvIzlubblsIbnrKzkuIDooYzorr7kuLrlp4vnu4jmmL7npLrjgIJcblx0XHRjb25zdCAkY2FwdGlvbjogSlF1ZXJ5ID0gJGNvbGxhcHNpYmxlLmNoaWxkcmVuKCdjYXB0aW9uJyk7XG5cdFx0aWYgKCRjYXB0aW9uLmxlbmd0aCkge1xuXHRcdFx0Ly8g5pyJY2FwdGlvbueahOaDheWGtVxuXHRcdFx0JGNhcHRpb24uZmlyc3QoKS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCAkdHJvd3M6IEpRdWVyeTxIVE1MVGFibGVSb3dFbGVtZW50PiA9ICRjb2xsYXBzaWJsZS5jaGlsZHJlbigpLmNoaWxkcmVuKCd0cicpO1xuXHRcdFx0JHRyb3dzLmZpcnN0KCkuYWRkQ2xhc3MoJ2NvbGxhcHNpYmxlLWFsd2F5cy1zaG93JykuY2hpbGRyZW4oKS5sYXN0KCkuYXBwZW5kKCR0b2dnbGVyKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8g5bCd6K+V5p+l5om+5bim5pyJIGNvbGxhcHNpYmxlLWFsd2F5cy1zaG93IOexu+eahOWtkOWFg+e0oO+8jOiLpeWtmOWcqOWImeWwhuaKmOWPoOaMiemSrua3u+WKoOiHs+WFtuS4reOAglxuXHRcdC8vIOWQpuWIme+8jOa3u+WKoOiHs+aVtOS4quWPr+aKmOWPoOWFg+e0oOeahOacgOWJjemdouOAglxuXHRcdGNvbnN0ICR0b1RvZ2dsZTogSlF1ZXJ5ID0gJGNvbGxhcHNpYmxlLmNoaWxkcmVuKCcuY29sbGFwc2libGUtYWx3YXlzLXNob3cnKTtcblx0XHRpZiAoJHRvVG9nZ2xlLmxlbmd0aCkge1xuXHRcdFx0JHRvVG9nZ2xlLmZpcnN0KCkuYXBwZW5kKCR0b2dnbGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGNvbGxhcHNpYmxlLnByZXBlbmQoJHRvZ2dsZXIpO1xuXHRcdFx0JHRvZ2dsZXIuYWRkQ2xhc3MoJ2NvbGxhcHNpYmxlLWFsd2F5cy1zaG93Jyk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2FkZFRvZ2dsZXJ9O1xuIiwgImNvbnN0IENMQVNTX05BTUU6IHN0cmluZyA9ICdnYWRnZXQtY29sbGFwc2libGUnO1xuY29uc3QgQ0xBU1NfTkFNRV9UT0dHTEVSOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS10b2dnbGVyYDtcblxuZXhwb3J0IHtDTEFTU19OQU1FX1RPR0dMRVJ9O1xuIiwgImltcG9ydCB7Q0xBU1NfTkFNRV9UT0dHTEVSfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbmNvbnN0IGdlbmVyYXRlVG9nZ2xlckVsZW1lbnQgPSAoJGNvbGxhcHNpYmxlOiBKUXVlcnksIGhpZGVUZXh0OiBzdHJpbmcsIHNob3dUZXh0OiBzdHJpbmcpOiBKUXVlcnkgPT4ge1xuXHRjb25zdCAkdG9nZ2xlciA9ICQoXG5cdFx0PHNwYW4gY2xhc3NOYW1lPXtbQ0xBU1NfTkFNRV9UT0dHTEVSLCAnbm9wcmludCddfT5cblx0XHRcdHsnWyd9XG5cdFx0XHQ8YSByb2xlPVwiYnV0dG9uXCIgdGFiSW5kZXg9ezB9PlxuXHRcdFx0XHR7JGNvbGxhcHNpYmxlLmhhc0NsYXNzKCdjb2xsYXBzZWQnKSA/IHNob3dUZXh0IDogaGlkZVRleHR9XG5cdFx0XHQ8L2E+XG5cdFx0XHR7J10nfVxuXHRcdDwvc3Bhbj5cblx0KSBhcyBKUXVlcnk7XG5cblx0cmV0dXJuICR0b2dnbGVyO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVRvZ2dsZXJFbGVtZW50fTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q29sbGFwc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnY29sbGFwc2UnLFxuXHRcdFx0amE6ICfmipjjgornlbPjgb8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oqY5Y+gJyxcblx0XHRcdCd6aC1oYW50JzogJ+aKmOeWiicsXG5cdFx0fSksXG5cdFx0RXhwYW5kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2V4cGFuZCcsXG5cdFx0XHRqYTogJ+WxlemWiycsXG5cdFx0XHQnemgtaGFucyc6ICflsZXlvIAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bGV6ZaLJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHthZGRMaXN0ZW5lcn0gZnJvbSAnLi9hZGRMaXN0ZW5lcic7XG5pbXBvcnQge2FkZFRvZ2dsZXJ9IGZyb20gJy4vYWRkVG9nZ2xlcic7XG5pbXBvcnQge2dlbmVyYXRlVG9nZ2xlckVsZW1lbnR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVRvZ2dsZXJFbGVtZW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aGlkZUVsZW1lbnR9IGZyb20gJy4vdXRpbC9oaWRlRWxlbWVudCc7XG5cbmNvbnN0IG1ha2VDb2xsYXBzaWJsZSA9ICgkY29sbGFwc2libGVzOiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb2xsYXBzaWJsZXMpIHtcblx0XHRjb25zdCAkY29sbGFwc2libGU6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0aWYgKCRjb2xsYXBzaWJsZS5kYXRhKCdtYWRlLWNvbGxhcHNpYmxlJykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGhpZGVUZXh0OiBzdHJpbmcgPSAoJGNvbGxhcHNpYmxlLmRhdGEoJ2NvbGxhcHNldGV4dCcpIGFzIHN0cmluZykgfHwgZ2V0TWVzc2FnZSgnQ29sbGFwc2UnKTtcblx0XHRjb25zdCBzaG93VGV4dDogc3RyaW5nID0gKCRjb2xsYXBzaWJsZS5kYXRhKCdleHBhbmR0ZXh0JykgYXMgc3RyaW5nKSB8fCBnZXRNZXNzYWdlKCdFeHBhbmQnKTtcblxuXHRcdGNvbnN0ICR0b2dnbGVyOiBKUXVlcnkgPSBnZW5lcmF0ZVRvZ2dsZXJFbGVtZW50KCRjb2xsYXBzaWJsZSwgaGlkZVRleHQsIHNob3dUZXh0KTtcblx0XHRjb25zdCAkdG9nZ2xlckxpbms6IEpRdWVyeSA9ICR0b2dnbGVyLmZpbmQoJ2EnKTtcblxuXHRcdGFkZFRvZ2dsZXIoJGNvbGxhcHNpYmxlLCAkdG9nZ2xlcik7XG5cblx0XHQvLyDliJ3lp4vljJbpmpDol4/miYDmnInlhYPntKDvvIzor6Xov4fnqIvmsqHmnInliqjnlLvjgIJcblx0XHRpZiAoJGNvbGxhcHNpYmxlLmhhc0NsYXNzKCdjb2xsYXBzZWQnKSkge1xuXHRcdFx0aGlkZUVsZW1lbnQoJGNvbGxhcHNpYmxlLCAwKTtcblx0XHR9XG5cblx0XHRhZGRMaXN0ZW5lcigkY29sbGFwc2libGUsICR0b2dnbGVyTGluaywgaGlkZVRleHQsIHNob3dUZXh0KTtcblxuXHRcdCRjb2xsYXBzaWJsZS5kYXRhKCdtYWRlLWNvbGxhcHNpYmxlJywgdHJ1ZSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7bWFrZUNvbGxhcHNpYmxlfTtcbiIsICJpbXBvcnQge2dlbmVyYXRlVGFyZ2V0RWxlbWVudHN9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVRhcmdldEVsZW1lbnRzJztcbmltcG9ydCB7bWFrZUNvbGxhcHNpYmxlfSBmcm9tICcuL21ha2VDb2xsYXBzaWJsZSc7XG5cbmNvbnN0IGFkZEhvb2sgPSAoKTogdm9pZCA9PiB7XG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoKCRjb250ZW50KTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJGNvbGxhcHNpYmxlczogSlF1ZXJ5ID0gZ2VuZXJhdGVUYXJnZXRFbGVtZW50cygkY29udGVudCk7XG5cdFx0aWYgKCEkY29sbGFwc2libGVzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG1ha2VDb2xsYXBzaWJsZSgkY29sbGFwc2libGVzKTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZEhvb2t9O1xuIiwgIi8qIVxuICog5Li65YWD57Sg5re75Yqg4oCc6ZqQ6JeP4oCd5ZKM4oCc5pi+56S64oCd55qE5oyJ6ZKu44CCXG4gKlxuICog55So5rOV6K+05piO77yaXG4gKlxuICog5bim5pyJIGNvbGxhcHNpYmxlIOexu+eahOWFg+e0oOm7mOiupOWPr+aKmOWPoOOAglxuICogLSDlr7nkuo4gbmF2Ym9477yM5oqY5Y+g5pe25Lya5L+d55WZ5qCH6aKY5qCP77yM5bm25bCG5oqY5Y+g5oyJ6ZKu5re75Yqg5Zyo5qCH6aKY5qCP5Lit44CCXG4gKiAtIOWvueS6jiB0YWJsZe+8jOaKmOWPoOaXtuS8muS/neeVmSBjYXB0aW9uIOaIluesrOS4gOihjO+8jOW5tuWwhuaKmOWPoOaMiemSrua3u+WKoOWcqCBjYXB0aW9uIOacq+WwvlxuICogICDmiJbogIXnrKzkuIDooYzmnIDlkI7kuIDmoLzmnKvlsL7jgIJcbiAqIC0g5a+55LqO5YW25LuW5YWD57Sg77yMXG4gKiAgIC0g6Iul5YW25a2Q5YWD57Sg5pyJ5bim5pyJIGNvbGxhcHNpYmxlLWFsd2F5cy1zaG93IOexu++8jOmCo+S5iOmZpOS6huivpeWtkOWFg+e0oOS5i+WklueahOWQhOS4qlxuICogICDlrZDlhYPntKDpg73kvJrpmo/mipjlj6DpmpDol4/vvIzkuJTmipjlj6DmjInpkq7mt7vliqDlnKjor6XlrZDlhYPntKDmnKvlsL7jgIJcbiAqICAgLSDoi6XmsqHmnInlrZDlhYPntKDluKbmnIkgY29sbGFwc2libGUtYWx3YXlzLXNob3cg57G777yM6YKj5LmI5omA5pyJ5a2Q5YWD57Sg6YO95Lya6KKr5oqY5Y+g77yMXG4gKiAgIOaKmOWPoOaMiemSrua3u+WKoOWcqOaVtOS4qiBjb2xsYXBzaWJsZSDlhYPntKDnmoTlvIDlpLTvvIzkuJTor6XmjInpkq7kuI3kvJrpmo/mipjlj6DpmpDol4/jgIJcbiAqICAgLSDoi6XlrZDlhYPntKDluKbmnIkgY29sbGFwc2libGUtY2FzY2FkZSDnsbvvvIzpgqPkuYjlvZPmipjlj6Dml7bvvIzor6XlhYPntKDoh6rouqvkuI3mmK/pmpDol4/vvIxcbiAqICAg6ICM5piv6ZqQ6JeP5YW25omA5pyJ55qE5a2Q5YWD57Sg77yM6L+Z5Lqb5a2Q5YWD57Sg5ZCM5qC35Y+v5Lul5Y+XIGNvbGxhcHNpYmxlLWFsd2F5cy1zaG93IOWSjFxuICogICBjb2xsYXBzaWJsZS1jYXNjYWRlIOexu+eahOW9seWTjeOAglxuICogICAtIOazqOaEj+W/hemhu+aYr+WtkOWFg+e0oO+8jOebtOaOpeeahOaWh+acrOiKgueCueS4jeS8mumaj+aKmOWPoOmakOiXj++8jOS+i+Wmgu+8mlxuICogICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzaWJsZVwiPjEyMzxzcGFuPjQ1Njwvc3Bhbj48L2Rpdj5cbiAqICAg5oqY5Y+g5pe277yM4oCcNDU24oCd5Lya6ZqP5oqY5Y+g6ZqQ6JeP77yM5L2G4oCcMTIz4oCd5LiN5Lya44CCXG4gKiAtIOiLpeW4puaciSBjb2xsYXBzaWJsZS11c2luZy1zbGlkZSDnsbvvvIzpgqPkuYjmipjlj6Dml7bvvIzkvb/nlKjmu5HliqjliqjnlLvogIzpnZ7mt6HlhaXmt6Hlh7rnmoRcbiAqICAg5Yqo55S744CC5bu66K6u5b2T5Y+q5pyJ5LiA5Liq5YWD57Sg5Lya6KKr6ZqQ6JeP5pe277yM5omN5Yqg5q2k57G744CCXG4gKiAgIC0g5bim5pyJIGNvbGxhcHNpYmxlLXVzaW5nLXNsaWRlIOexu+eahOWFg+e0oOS8muiHquWKqOW4puaciSBjb2xsYXBzaWJsZSDnsbvjgIJcbiAqIC0g6Iul5bim5pyJIGNvbGxhcHNpYmxlLW5leHQg57G777yM6YKj5LmI5YW25oqY5Y+g55qE5LiN5piv5YW26Ieq6Lqr55qE5a2Q5YWD57Sg77yM6ICM5piv5oqY5Y+g57Sn6ZqPXG4gKiAgIOWFtuWQjueahOS4gOS4quWFg+e0oOOAglxuICogICAtIOi/meenjeaDheWGteS4i++8jOaKmOWPoOaMiemSrum7mOiupOmZhOWcqOivpSBjb2xsYXBzaWJsZS1uZXh0IOWFg+e0oOeahOacq+WwvuOAglxuICogICAtIOW4puaciSBjb2xsYXBzaWJsZS1uZXh0IOexu+eahOWFg+e0oOS8muiHquWKqOW4puaciSBjb2xsYXBzaWJsZSDnsbvjgIJcbiAqIC0gZGF0YS1jb2xsYXBzZS1kdXJhdGlvbiDlsZ7mgKflj6/ku6Xorr7nva7mipjlj6DliqjnlLvnmoTml7bplb/vvIzpu5jorqTkuLogMjAwIOavq+enkuOAglxuICogLSDluKbmnIkgY29sbGFwc2VkIOexu+eahOWFg+e0oOWIneWni+WwseaYr+W3suaKmOWPoOeahOOAglxuICogLSBkYXRhLWV4cGFuZHRleHQg5ZKMIGRhdGEtY29sbGFwc2V0ZXh0IOWPr+eUqOS6juaOp+WItuaKmOWPoOaMiemSrueahOaYvuekuuaWh+Wtl+OAguS4jeaUr+aMgVxuICogICDnuYHnroDovazmjaLvvIzkvYbmmK/lhbbpu5jorqTlgLzmmK/lj6/ku6XmraPluLjmoLnmja7nlYzpnaLor63oqIDnuYHnroDovazmjaLnmoTjgIJcbiAqL1xuaW1wb3J0IHthZGRIb29rfSBmcm9tICcuL21vZHVsZXMvYWRkSG9vayc7XG5cbmFkZEhvb2soKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEseUJBQTBCQyxjQUE2QjtBQUFBLE1BQUFDLGFBQUFDLDJCQUN0Q0YsU0FBU0csS0FDOUIsZ0ZBQ0QsQ0FBQSxHQUFBQztBQUFBLE1BQUE7QUFGQSxTQUFBSCxXQUFBSSxFQUFBLEdBQUEsRUFBQUQsU0FBQUgsV0FBQUssRUFBQSxHQUFBQyxRQUVHO0FBQUEsWUFGUUMsVUFBQUosT0FBQUs7QUFHVixZQUFNQyxVQUFrQkMsRUFBRUgsT0FBTyxFQUFFSSxPQUFPO0FBQUEsVUFBQUMsYUFBQVgsMkJBQ2xCTSxRQUFRTSxTQUFBLEdBQUFDO0FBQUEsVUFBQTtBQUFoQyxhQUFBRixXQUFBUixFQUFBLEdBQUEsRUFBQVUsU0FBQUYsV0FBQVAsRUFBQSxHQUFBQyxRQUEyQztBQUFBLGdCQUFoQ1MsWUFBQUQsT0FBQU47QUFDVixjQUFJTyxVQUFVQyxNQUFNLEdBQUcsRUFBRSxNQUFNLHNCQUFzQjtBQUtwRFAsb0JBQVFRLFNBQVNGLFVBQVVHLFFBQVEsWUFBWSxFQUFFLENBQUM7VUFDbkQ7UUFDRDtNQUFBLFNBQUFDLEtBQUE7QUFBQVAsbUJBQUFRLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUFQLG1CQUFBUyxFQUFBO01BQUE7SUFDRDtFQUFBLFNBQUFGLEtBQUE7QUFBQW5CLGVBQUFvQixFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBbkIsZUFBQXFCLEVBQUE7RUFBQTtBQUVBdEIsV0FBU0csS0FBSyw2Q0FBNkMsRUFBRWUsU0FB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QkEsSUFBTTZFLFVBQVVBLE1BQVk7QUFDM0JDLEtBQUdDLEtBQUssa0JBQWtCLEVBQUVDLElBQUt0RyxjQUFtQjtBQUNuRCxVQUFNdUIsZ0JBQXdCeEIsdUJBQXVCQyxRQUFRO0FBQzdELFFBQUksQ0FBQ3VCLGNBQWM2QyxRQUFRO0FBQzFCO0lBQ0Q7QUFFQTRCLG9CQUFnQnpFLGFBQWE7RUFDOUIsQ0FBQztBQUNGOztBQ1pBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQTRFLFFBQVE7IiwKICAibmFtZXMiOiBbImdlbmVyYXRlVGFyZ2V0RWxlbWVudHMiLCAiJGNvbnRlbnQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJmaW5kIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgIiRwYXJlbnQiLCAiJCIsICJwYXJlbnQiLCAiX2l0ZXJhdG9yMyIsICJjbGFzc0xpc3QiLCAiX3N0ZXAzIiwgImNsYXNzTmFtZSIsICJzbGljZSIsICJhZGRDbGFzcyIsICJyZXBsYWNlIiwgImVyciIsICJlIiwgImYiLCAiJGNvbGxhcHNpYmxlcyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImhpZGVFbGVtZW50IiwgIiRjb2xsYXBzaWJsZSIsICJ0aW1lIiwgInVzZVNsaWRlIiwgImhhc0NsYXNzIiwgIiRlbGVtZW50IiwgIm5leHQiLCAic2xpZGVVcCIsICJmYWRlT3V0IiwgIiRlbGVtZW50cyIsICJpcyIsICJjaGlsZHJlbiIsICJjb250ZW50cyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJzaG93RWxlbWVudCIsICJzbGlkZURvd24iLCAiZmFkZUluIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgInRvZ2dsZUVsZW1lbnQiLCAiY29sbGFwc2VkIiwgImR1cmF0aW9uIiwgIk51bWJlciIsICJwYXJzZUludCIsICJkYXRhIiwgInJlbW92ZUNsYXNzIiwgImFkZExpc3RlbmVyIiwgIiR0b2dnbGVyTGluayIsICJoaWRlVGV4dCIsICJzaG93VGV4dCIsICJldmVudExpc3RlbmVyIiwgImV2ZW50IiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAicHJldmVudERlZmF1bHQiLCAidGV4dCIsICJvbiIsICJhZGRUb2dnbGVyIiwgIiR0b2dnbGVyIiwgIiRhcHBlbmRIZXJlIiwgIm5vdCIsICJhcHBlbmQiLCAibGVuZ3RoIiwgInBhcmVudHNVbnRpbCIsICJmaXJzdCIsICIkY2FwdGlvbiIsICIkdHJvd3MiLCAibGFzdCIsICIkdG9Ub2dnbGUiLCAicHJlcGVuZCIsICJDTEFTU19OQU1FIiwgIkNMQVNTX05BTUVfVE9HR0xFUiIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAiZ2VuZXJhdGVUb2dnbGVyRWxlbWVudCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAicm9sZSIsICJ0YWJJbmRleCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNvbGxhcHNlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkV4cGFuZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAibWFrZUNvbGxhcHNpYmxlIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgImFkZEhvb2siLCAibXciLCAiaG9vayIsICJhZGQiXQp9Cg==
