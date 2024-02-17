/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://zh.wikipedia.org/wiki/MediaWiki:Gadget-NavFrame.js>
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/NavFrame>
 * @dependency ext.gadget.i18n
 */
/**
 * Dynamic Navigation Bars.
 *
 * Based on script from en.wikipedia.org, 2008-09-15.
 *
 * @base <https://www.mediawiki.org/wiki/MediaWiki:Gadget-NavFrame.js>
 * @maintainer Helder.wiki, 2012–2013
 * @maintainer Krinkle, 2013
 * @maintainer Fantasticfears, 2013-2014
 */
/**
 * +--------------------------------------------------------+
 * |         === WARNING: GLOBAL GADGET FILE ===            |
 * +--------------------------------------------------------+
 * |      All changes should be made in the repository,     |
 * |              otherwise they will be lost.              |
 * +--------------------------------------------------------+
 * |        Changes to this page affect many users.         |
 * |  Please discuss changes at Talk page before editing.   |
 * +--------------------------------------------------------+
 */
/* <nowiki> */
'use strict';

/**
 * 用法说明：
 *
 * 带有 collapsible 类的元素默认可折叠。
 * - 对于 navbox，折叠时会保留标题栏，并将折叠按钮添加在标题栏中。
 * - 对于 table，折叠时会保留 caption 或第一行，并将折叠按钮添加在 caption 末尾
 *   或者第一行最后一格末尾。
 * - 对于其他元素，
 *   - 如果其子元素有带有 collapsible-always-show 类，那么除了该子元素之外的各个
 *   子元素都会随折叠隐藏，且折叠按钮添加在该子元素末尾。
 *   - 如果没有子元素带有 collapsible-always-show 类，那么所有子元素都会被折叠，
 *   折叠按钮添加在整个 collapsible 元素的开头，且该按钮不会随折叠隐藏。
 *   - 如果子元素带有 collapsible-cascade 类，那么当折叠时，该元素自身不是隐藏，
 *   而是隐藏其所有的子元素，这些子元素同样可以受 collapsible-always-show 和
 *   collapsible-cascade 类的影响。
 *   - 注意必须是子元素，直接的文本节点不会随折叠隐藏，例如：
 *     <div class="collapsible">123<span>456</span></div>
 *   折叠时，“456”会随折叠隐藏，但“123”不会。
 * - 如果带有 collapsible-using-slide 类，那么折叠时，使用滑动动画而非淡入淡出的
 *   动画。建议当只有一个元素会被隐藏时，才加此类。
 *   - 带有 collapsible-using-slide 类的元素会自动带有 collapsible 类。
 * - 如果带有 collapsible-next 类，那么其折叠的不是其自身的子元素，而是折叠紧随
 *   其后的一个元素。
 *   - 这种情况下，折叠按钮默认附在该 collapsible-next 元素的末尾。
 *   - 带有 collapsible-next 类的元素会自动带有 collapsible 类。
 * - data-collapse-duration 属性可以设置折叠动画的时长，默认为 200 毫秒。
 * - 带有 collapsed 类的元素初始就是已折叠的。
 * - data-expandtext 和 data-collapsetext 可用于控制折叠按钮的显示文字。不支持
 *   繁简转换，但是其默认值是可以正常根据界面语言繁简转换的。
 */
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function collapsible() {
  mw.hook('wikipage.content').add(function collapsibleMain($content) {
    // 为元素添加“隐藏”和“显示”的按钮。
    var appendToggle = function appendToggle($collapsible, $toggle) {
      var $appendHere = $collapsible.find('.collapsible-toggle-append-here').not('.collapsible-toggle-appended');
      if ($collapsible.hasClass('collapsible-next')) {
        // 如果有 collapsible-next 类，那么被折叠的元素不在该元素内，此时直接将折叠按钮添加在末尾。
        $collapsible.append($toggle);
      } else if ($appendHere.length > 0) {
        // 带有 collapsible-toggle-append-here 类的元素，如果存在，则无论可折叠元素是什么，则强制将折叠按钮添加至该元素中。
        $appendHere.append($toggle);
        $appendHere.addClass('collapsible-toggle-appended');
        $appendHere.parentsUntil($collapsible).addClass('collapsible-always-show');
      } else if ($collapsible.hasClass('navbox')) {
        // navbox 元素的折叠按钮添加至 navbox-title 中，且该 navbox-title 会避免被折叠影响到。
        $collapsible.children('.navbox-title').first().addClass('collapsible-always-show').append($toggle);
      } else if ($collapsible.is('table')) {
        // 对于 table 对象，尝试添加到 caption 中，如果 caption 不存在，则添加到第一行的最后一列，并将第一行设为始终显示。
        var $caption = $collapsible.children('caption');
        if ($caption.length > 0) {
          // 有caption的情况
          $caption.first().append($toggle);
        } else {
          var $trows = $collapsible.children().children('tr');
          $trows.first().addClass('collapsible-always-show').children().last().append($toggle);
        }
      } else {
        // 尝试查找带有 collapsible-always-show 类的子元素，如果存在则将折叠按钮添加至其中。
        // 否则，添加至整个可折叠元素的最前面。
        var $toToggle = $collapsible.children('.collapsible-always-show');
        if ($toToggle.length > 0) {
          $toToggle.first().append($toggle);
        } else {
          $collapsible.prepend($toggle);
          $toggle.addClass('collapsible-always-show');
        }
      }
    };
    // 隐藏某个可折叠的元素。
    var hide = function hide($collapsible, time) {
      var useSlide = $collapsible.hasClass('collapsible-using-slide');
      if ($collapsible.hasClass('collapsible-next')) {
        var $element = $collapsible.next();
        if (useSlide) {
          $element.slideUp(time);
        } else {
          $element.fadeOut(time);
        }
      } else {
        ($collapsible.is('table') ? $collapsible.children().children('tr') : $collapsible.contents()).each(function (_index, element) {
          var $element = $(element);
          if ($element.hasClass('collapsible-cascade')) {
            hide($element, time);
          } else if (!$element.hasClass('collapsible-always-show')) {
            if (useSlide) {
              $element.slideUp(time);
            } else {
              $element.fadeOut(time);
            }
          }
        });
      }
    };
    // 显示某个可折叠的元素。
    var show = function show($collapsible, time) {
      var useSlide = $collapsible.hasClass('collapsible-using-slide');
      if ($collapsible.hasClass('collapsible-next')) {
        var $element = $collapsible.next();
        if (useSlide) {
          $element.slideDown(time);
        } else {
          $element.fadeIn(time);
        }
      } else {
        ($collapsible.is('table') ? $collapsible.children().children('tr') : $collapsible.contents()).each(function (_index, element) {
          var $element = $(element);
          if ($element.hasClass('collapsible-cascade')) {
            show($element, time);
          } else if (!$element.hasClass('collapsible-always-show')) {
            if (useSlide) {
              $element.slideDown(time);
            } else {
              $element.fadeIn(time);
            }
          }
        });
      }
    };
    var toggle = function toggle($collapsible) {
      var collapsed = $collapsible.hasClass('collapsed');
      var duration = Number.parseInt($collapsible.data('collapse-duration')) || 200;
      if (collapsed) {
        show($collapsible, duration);
        $collapsible.removeClass('collapsed');
      } else {
        hide($collapsible, duration);
        $collapsible.addClass('collapsed');
      }
    };
    $content.find('.parent-collapsible, .parent-collapsible-using-slide, .parent-collapsible-next').each(function (_index, element) {
      var $element = $(element);
      var $parent = $element.parent();
      var _iterator = _createForOfIteratorHelper(element.classList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var value = _step.value;
          if (value.slice(0, 18) === 'parent-collapsible') {
            // The following classes are used here:
            // * collapsible
            // * collapsible-using-slide
            // * collapsible-next
            $parent.addClass(value.replace(/^parent-/, ''));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    $content.find('.collapsible-using-slide, .collapsible-next').addClass('collapsible');
    var $collapsibles = $content.find('.collapsible');
    if (!$collapsibles.length) {
      return;
    }
    $collapsibles.each(function (_index, element) {
      var $collapsible = $(element);
      if ($collapsible.data('made-collapsible')) {
        return;
      }
      var i18nMessages = function i18nMessages() {
        var _i18n = i18n,
          localize = _i18n.localize;
        return {
          collapse: localize({
            ja: '折り畳み',
            'zh-hans': '折叠',
            'zh-hant': '折疊'
          }),
          expand: localize({
            ja: '展開',
            'zh-hans': '展开',
            'zh-hant': '展開'
          })
        };
      };
      var messages = i18nMessages();
      var message = function message(key) {
        return messages[key] || key;
      };
      var showText = $collapsible.data('expandtext') || message('expand');
      var hideText = $collapsible.data('collapsetext') || message('collapse');
      var $toggleLink = $('<a>').addClass('jsLink');
      var $toggle = $('<span>').addClass('collapsetoggle').append('[', $toggleLink, ']');
      // Set the text back to hide if it's not collapsed to begin with
      if ($collapsible.hasClass('collapsed')) {
        $toggleLink.text(showText);
      } else {
        $toggleLink.text(hideText);
      }
      appendToggle($collapsible, $toggle);
      // 初始化隐藏所有元素，该过程没有动画。
      if ($collapsible.hasClass('collapsed')) {
        hide($collapsible, 0);
      }
      $toggle.on('click', function () {
        toggle($collapsible);
        if ($collapsible.hasClass('collapsed')) {
          $toggleLink.text(showText);
        } else {
          $toggleLink.text(hideText);
        }
      });
      $collapsible.data('made-collapsible', true);
    });
  });
})();
/* </nowiki> */
