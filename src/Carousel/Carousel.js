"use strict";

/* <nowiki> */
/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|2=MIT}}'
 *
 * @source <sorgalla.com/jcarousel/>
 * @author Jan Sorgalla
 */
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function ($) {
  var jCarousel = $.jCarousel = {};
  jCarousel.version = "0.3.9";
  var rRelativeTarget = /^([+-]=)?(.+)$/;
  jCarousel.parseTarget = function (target) {
    var relative = false;
    var parts = _typeof(target) !== "object" ? rRelativeTarget.exec(target) : null;
    if (parts) {
      target = Number.parseInt(parts[2], 10) || 0;
      if (parts[1]) {
        relative = true;
        if (parts[1] === "-=") {
          target *= -1;
        }
      }
    } else if (_typeof(target) !== "object") {
      target = Number.parseInt(target, 10) || 0;
    }
    return {
      target: target,
      relative: relative
    };
  };
  jCarousel.detectCarousel = function (element) {
    var carousel;
    while (element.length > 0) {
      carousel = element.filter("[data-jcarousel]");
      if (carousel.length > 0) {
        return carousel;
      }
      carousel = element.find("[data-jcarousel]");
      if (carousel.length > 0) {
        return carousel;
      }
      element = element.parent();
    }
    return null;
  };
  jCarousel.base = function (pluginName) {
    return {
      version: jCarousel.version,
      _options: {},
      _element: null,
      _carousel: null,
      _init: function _init() {},
      _create: function _create() {},
      _destroy: function _destroy() {},
      _reload: function _reload() {},
      create: function create() {
        this._element.attr("data-".concat(pluginName.toLowerCase()), true).data(pluginName, this);
        if (this._trigger("create") === false) {
          return this;
        }
        this._create();
        this._trigger("createend");
        return this;
      },
      destroy: function destroy() {
        if (this._trigger("destroy") === false) {
          return this;
        }
        this._destroy();
        this._trigger("destroyend");
        this._element.removeData(pluginName).removeAttr("data-".concat(pluginName.toLowerCase()));
        return this;
      },
      reload: function reload(options) {
        if (this._trigger("reload") === false) {
          return this;
        }
        if (options) {
          this.options(options);
        }
        this._reload();
        this._trigger("reloadend");
        return this;
      },
      element: function element() {
        return this._element;
      },
      options: function options(key, value) {
        if (arguments.length === 0) {
          return $.extend({}, this._options);
        }
        if (typeof key === "string") {
          if (typeof value === "undefined") {
            return typeof this._options[key] === "undefined" ? null : this._options[key];
          }
          this._options[key] = value;
        } else {
          this._options = $.extend({}, this._options, key);
        }
        return this;
      },
      carousel: function carousel() {
        if (!this._carousel) {
          this._carousel = jCarousel.detectCarousel(this.options("carousel") || this._element);
          if (!this._carousel) {
            throw new Error("Could not detect carousel for plugin \"".concat(pluginName, "\""));
          }
        }
        return this._carousel;
      },
      _trigger: function _trigger(type, element, data) {
        var event,
          defaultPrevented = false;
        data = [this].concat(data || []);
        (element || this._element).each(function () {
          event = $.Event("".concat(pluginName, ":").concat(type).toLowerCase());
          $(this).trigger(event, data);
          if (event.isDefaultPrevented()) {
            defaultPrevented = true;
          }
        });
        return !defaultPrevented;
      }
    };
  };
  jCarousel.plugin = function (pluginName, pluginPrototype) {
    var Plugin = $[pluginName] = function (element, options) {
      this._element = $(element);
      this.options(options);
      this._init();
      this.create();
    };
    Plugin.fn = Plugin.prototype = $.extend({}, jCarousel.base(pluginName), pluginPrototype);
    $.fn[pluginName] = function (options) {
      var args = Array.prototype.slice.call(arguments, 1);
      var returnValue = this;
      if (typeof options === "string") {
        this.each(function () {
          var instance = $(this).data(pluginName);
          if (!instance) {
            throw new Error("Cannot call methods on ".concat(pluginName, " prior to initialization; ") + "attempted to call method \"".concat(options, "\""));
          }
          if (!_typeof(instance[options]) === "function" || options.charAt(0) === "_") {
            throw new Error("No such method \"".concat(options, "\" for ").concat(pluginName, " instance"));
          }
          var methodValue = instance[options].apply(instance, args);
          if (methodValue !== instance && typeof methodValue !== "undefined") {
            returnValue = methodValue;
            return false;
          }
        });
      } else {
        this.each(function () {
          var instance = $(this).data(pluginName);
          if (instance instanceof Plugin) {
            instance.reload(options);
          } else {
            new Plugin(this, options);
          }
        });
      }
      return returnValue;
    };
    return Plugin;
  };
})(jQuery);
(function ($, window) {
  var $window = $(window);
  var toFloat = function toFloat(val) {
    return Number.parseFloat(val) || 0;
  };
  $.jCarousel.plugin("jcarousel", {
    animating: false,
    tail: 0,
    inTail: false,
    resizeState: null,
    resizeTimer: null,
    lt: null,
    vertical: false,
    rtl: false,
    circular: false,
    underflow: false,
    relative: false,
    _options: {
      list: function list() {
        return this.element().children().eq(0);
      },
      items: function items() {
        return this.list().children();
      },
      animation: 400,
      transitions: false,
      wrap: null,
      vertical: null,
      rtl: null,
      center: false
    },
    // Protected, don't access directly
    _list: null,
    _items: null,
    _target: $(),
    _first: $(),
    _last: $(),
    _visible: $(),
    _fullyvisible: $(),
    _init: function _init() {
      var self = this;
      self.resizeState = "".concat($window.width(), "x").concat($window.height());
      this.onWindowResize = function () {
        if (self.resizeTimer) {
          clearTimeout(self.resizeTimer);
        }
        self.resizeTimer = setTimeout(function () {
          var currentResizeState = "".concat($window.width(), "x").concat($window.height());
          // Check if the window size actually changed.
          // iOS might trigger resize events on page scroll.
          if (currentResizeState === self.resizeState) {
            return;
          }
          self.resizeState = currentResizeState;
          self.reload();
        }, 100);
      };
      return this;
    },
    _create: function _create() {
      this._reload();
      $window.on("resize.jcarousel", this.onWindowResize);
    },
    _destroy: function _destroy() {
      $window.off("resize.jcarousel", this.onWindowResize);
    },
    _reload: function _reload() {
      this.vertical = this.options("vertical");
      if (this.vertical === null) {
        this.vertical = toFloat(this.list().height()) > toFloat(this.list().width());
      }
      this.rtl = this.options("rtl");
      if (this.rtl === null) {
        this.rtl = function (element) {
          if ("".concat(element.attr("dir")).toLowerCase() === "rtl") {
            return true;
          }
          var found = false;
          element.parents("[dir]").each(function () {
            if (/rtl/i.test($(this).attr("dir"))) {
              found = true;
              return false;
            }
          });
          return found;
        }(this._element);
      }
      this.lt = this.vertical ? "top" : "left";
      // Ensure before closest() call
      this.relative = this.list().css("position") === "relative";
      // Force list and items reload
      this._list = null;
      this._items = null;
      var item = this.index(this._target) >= 0 ? this._target : this.closest();
      // _prepare() needs this here
      this.circular = this.options("wrap") === "circular";
      this.underflow = false;
      var props = {
        left: 0,
        top: 0
      };
      if (item.length > 0) {
        this._prepare(item);
        this.list().find("[data-jcarousel-clone]").remove();
        // Force items reload
        this._items = null;
        this.underflow = this._fullyvisible.length >= this.items().length;
        this.circular && (this.circular = !this.underflow);
        props[this.lt] = "".concat(this._position(item), "px");
      }
      this.move(props);
      return this;
    },
    list: function list() {
      if (this._list === null) {
        var option = this.options("list");
        this._list = typeof option === "function" ? option.call(this) : this._element.find(option);
      }
      return this._list;
    },
    items: function items() {
      if (this._items === null) {
        var option = this.options("items");
        this._items = (typeof option === "function" ? option.call(this) : this.list().find(option)).not("[data-jcarousel-clone]");
      }
      return this._items;
    },
    index: function index(item) {
      return this.items().index(item);
    },
    closest: function closest() {
      var self = this;
      var pos = this.list().position()[this.lt],
        closest = $(),
        // Ensure we're returning a jQuery instance
        stop = false;
      var lrb = this.vertical ? "bottom" : this.rtl && !this.relative ? "left" : "right";
      var width;
      if (this.rtl && this.relative && !this.vertical) {
        pos += toFloat(this.list().width()) - this.clipping();
      }
      this.items().each(function () {
        closest = $(this);
        if (stop) {
          return false;
        }
        var dim = self.dimension(closest);
        pos += dim;
        if (pos >= 0) {
          width = dim - toFloat(closest.css("margin-".concat(lrb)));
          if (Math.abs(pos) - dim + width / 2 <= 0) {
            stop = true;
          } else {
            return false;
          }
        }
      });
      return closest;
    },
    target: function target() {
      return this._target;
    },
    first: function first() {
      return this._first;
    },
    last: function last() {
      return this._last;
    },
    visible: function visible() {
      return this._visible;
    },
    fullyvisible: function fullyvisible() {
      return this._fullyvisible;
    },
    hasNext: function hasNext() {
      if (this._trigger("hasnext") === false) {
        return true;
      }
      var wrap = this.options("wrap"),
        end = this.items().length - 1,
        check = this.options("center") ? this._target : this._last;
      return !!(end >= 0 && !this.underflow && (wrap && wrap !== "first" || this.index(check) < end || this.tail && !this.inTail));
    },
    hasPrev: function hasPrev() {
      if (this._trigger("hasprev") === false) {
        return true;
      }
      var wrap = this.options("wrap");
      return !!(this.items().length > 0 && !this.underflow && (wrap && wrap !== "last" || this.index(this._first) > 0 || this.tail && this.inTail));
    },
    clipping: function clipping() {
      return toFloat(this._element["inner".concat(this.vertical ? "Height" : "Width")]());
    },
    dimension: function dimension(element) {
      return toFloat(element["outer".concat(this.vertical ? "Height" : "Width")](true));
    },
    scroll: function scroll(target, animate, callback) {
      if (this.animating) {
        return this;
      }
      if (this._trigger("scroll", null, [target, animate]) === false) {
        return this;
      }
      if (typeof animate === "function") {
        callback = animate;
        animate = true;
      }
      var parsed = $.jCarousel.parseTarget(target);
      if (parsed.relative) {
        var end = this.items().length - 1,
          scroll = Math.abs(parsed.target),
          wrap = this.options("wrap");
        var current, first, index, start, curr, isVisible, props, i;
        if (parsed.target > 0) {
          var last = this.index(this._last);
          if (last >= end && this.tail) {
            if (!this.inTail) {
              this._scrollTail(animate, callback);
            } else {
              if (wrap === "both" || wrap === "last") {
                this._scroll(0, animate, callback);
              } else {
                if (typeof callback === "function") {
                  callback.call(this, false);
                }
              }
            }
          } else {
            current = this.index(this._target);
            if (this.underflow && current === end && (wrap === "circular" || wrap === "both" || wrap === "last") || !this.underflow && last === end && (wrap === "both" || wrap === "last")) {
              this._scroll(0, animate, callback);
            } else {
              index = current + scroll;
              if (this.circular && index > end) {
                i = end;
                curr = this.items().get(-1);
                while (i++ < index) {
                  curr = this.items().eq(0);
                  isVisible = this._visible.index(curr) >= 0;
                  if (isVisible) {
                    curr.after(curr.clone(true).attr("data-jcarousel-clone", true));
                  }
                  this.list().append(curr);
                  if (!isVisible) {
                    props = {};
                    props[this.lt] = this.dimension(curr);
                    this.moveBy(props);
                  }
                  // Force items reload
                  this._items = null;
                }
                this._scroll(curr, animate, callback);
              } else {
                this._scroll(Math.min(index, end), animate, callback);
              }
            }
          }
        } else {
          if (this.inTail) {
            this._scroll(Math.max(this.index(this._first) - scroll + 1, 0), animate, callback);
          } else {
            first = this.index(this._first);
            current = this.index(this._target);
            start = this.underflow ? current : first;
            index = start - scroll;
            if (start <= 0 && (this.underflow && wrap === "circular" || wrap === "both" || wrap === "first")) {
              this._scroll(end, animate, callback);
            } else {
              if (this.circular && index < 0) {
                i = index;
                curr = this.items().get(0);
                while (i++ < 0) {
                  curr = this.items().eq(-1);
                  isVisible = this._visible.index(curr) >= 0;
                  if (isVisible) {
                    curr.after(curr.clone(true).attr("data-jcarousel-clone", true));
                  }
                  this.list().prepend(curr);
                  // Force items reload
                  this._items = null;
                  var dim = this.dimension(curr);
                  props = {};
                  props[this.lt] = -dim;
                  this.moveBy(props);
                }
                this._scroll(curr, animate, callback);
              } else {
                this._scroll(Math.max(index, 0), animate, callback);
              }
            }
          }
        }
      } else {
        this._scroll(parsed.target, animate, callback);
      }
      this._trigger("scrollend");
      return this;
    },
    moveBy: function moveBy(properties, opts) {
      var position = this.list().position();
      var multiplier = 1,
        correction = 0;
      if (this.rtl && !this.vertical) {
        multiplier = -1;
        if (this.relative) {
          correction = toFloat(this.list().width()) - this.clipping();
        }
      }
      if (properties.left) {
        properties.left = "".concat(toFloat(position.left) + correction + toFloat(properties.left) * multiplier, "px");
      }
      if (properties.top) {
        properties.top = "".concat(toFloat(position.top) + correction + toFloat(properties.top) * multiplier, "px");
      }
      return this.move(properties, opts);
    },
    move: function move(properties, opts) {
      opts || (opts = {});
      var option = this.options("transitions"),
        transitions = !!option,
        transforms = !!option.transforms,
        transforms3d = !!option.transforms3d,
        duration = opts.duration || 0,
        list = this.list();
      if (!transitions && duration > 0) {
        list.animate(properties, opts);
        return;
      }
      var complete = opts.complete || function () {},
        css = {};
      if (transitions) {
        var backup = {
            transitionDuration: list.css("transitionDuration"),
            transitionTimingFunction: list.css("transitionTimingFunction"),
            transitionProperty: list.css("transitionProperty")
          },
          oldComplete = complete;
        complete = function complete() {
          $(this).css(backup);
          oldComplete.call(this);
        };
        css = {
          transitionDuration: "".concat(duration > 0 ? duration / 1000 : 0, "s"),
          transitionTimingFunction: option.easing || opts.easing,
          transitionProperty: duration > 0 ? function () {
            if (transforms || transforms3d) {
              // We have to use 'all' because jQuery doesn't prefix
              // css values, like transition-property: transform;
              return "all";
            }
            return properties.left ? "left" : "top";
          }() : "none",
          transform: "none"
        };
      }
      if (transforms3d) {
        css.transform = "translate3d(".concat(properties.left || 0, ",").concat(properties.top || 0, ",0)");
      } else if (transforms) {
        css.transform = "translate(".concat(properties.left || 0, ",").concat(properties.top || 0, ")");
      } else {
        $.extend(css, properties);
      }
      if (transitions && duration > 0) {
        list.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", complete);
      }
      list.css(css);
      if (duration <= 0) {
        list.each(function () {
          complete.call(this);
        });
      }
    },
    _scroll: function _scroll(item, animate, callback) {
      if (this.animating) {
        if (typeof callback === "function") {
          callback.call(this, false);
        }
        return this;
      }
      if (_typeof(item) !== "object") {
        item = this.items().eq(item);
      } else if (typeof item.jquery === "undefined") {
        item = $(item);
      }
      if (item.length === 0) {
        if (typeof callback === "function") {
          callback.call(this, false);
        }
        return this;
      }
      this.inTail = false;
      this._prepare(item);
      var pos = this._position(item),
        currPos = toFloat(this.list().position()[this.lt]);
      if (pos === currPos) {
        if (typeof callback === "function") {
          callback.call(this, false);
        }
        return this;
      }
      var properties = {};
      properties[this.lt] = "".concat(pos, "px");
      this._animate(properties, animate, callback);
      return this;
    },
    _scrollTail: function _scrollTail(animate, callback) {
      if (this.animating || !this.tail) {
        if (typeof callback === "function") {
          callback.call(this, false);
        }
        return this;
      }
      var pos = this.list().position()[this.lt];
      if (this.rtl && this.relative && !this.vertical) {
        pos += toFloat(this.list().width()) - this.clipping();
      }
      if (this.rtl && !this.vertical) {
        pos += this.tail;
      } else {
        pos -= this.tail;
      }
      this.inTail = true;
      var properties = {};
      properties[this.lt] = "".concat(pos, "px");
      this._update({
        target: this._target.next(),
        fullyvisible: this._fullyvisible.slice(1).add(this._visible.last())
      });
      this._animate(properties, animate, callback);
      return this;
    },
    _animate: function _animate(properties, animate, callback) {
      callback || (callback = function callback() {});
      if (this._trigger("animate") === false) {
        callback.call(this, false);
        return this;
      }
      this.animating = true;
      var animation = this.options("animation"),
        complete = function () {
          this.animating = false;
          var c = this.list().find("[data-jcarousel-clone]");
          if (c.length > 0) {
            c.remove();
            this._reload();
          }
          this._trigger("animateend");
          callback.call(this, true);
        }.bind(this);
      var opts = _typeof(animation) === "object" ? $.extend({}, animation) : {
          duration: animation
        },
        oldComplete = opts.complete || function () {};
      if (animate === false) {
        opts.duration = 0;
      } else if (typeof $.fx.speeds[opts.duration] !== "undefined") {
        opts.duration = $.fx.speeds[opts.duration];
      }
      opts.complete = function () {
        complete();
        oldComplete.call(this);
      };
      this.move(properties, opts);
      return this;
    },
    _prepare: function _prepare(item) {
      var index = this.index(item);
      var idx = index,
        wh = this.dimension(item),
        clip = this.clipping();
      var lrb = this.vertical ? "bottom" : this.rtl ? "left" : "right",
        center = this.options("center"),
        update = {
          target: item,
          first: item,
          last: item,
          visible: item,
          fullyvisible: wh <= clip ? item : $()
        };
      var curr, isVisible, margin, dim;
      if (center) {
        wh /= 2;
        clip /= 2;
      }
      if (wh < clip) {
        for (;;) {
          curr = this.items().eq(++idx);
          if (curr.length === 0) {
            if (!this.circular) {
              break;
            }
            curr = this.items().eq(0);
            if (item.get(0) === curr.get(0)) {
              break;
            }
            isVisible = this._visible.index(curr) >= 0;
            if (isVisible) {
              curr.after(curr.clone(true).attr("data-jcarousel-clone", true));
            }
            this.list().append(curr);
            if (!isVisible) {
              var props = {};
              props[this.lt] = this.dimension(curr);
              this.moveBy(props);
            }
            // Force items reload
            this._items = null;
          }
          dim = this.dimension(curr);
          if (dim === 0) {
            break;
          }
          wh += dim;
          update.last = curr;
          update.visible = update.visible.add(curr);
          // Remove right/bottom margin from total width
          margin = toFloat(curr.css("margin-".concat(lrb)));
          if (wh - margin <= clip) {
            update.fullyvisible = update.fullyvisible.add(curr);
          }
          if (wh >= clip) {
            break;
          }
        }
      }
      if (!this.circular && !center && wh < clip) {
        idx = index;
        for (;;) {
          if (--idx < 0) {
            break;
          }
          curr = this.items().eq(idx);
          if (curr.length === 0) {
            break;
          }
          dim = this.dimension(curr);
          if (dim === 0) {
            break;
          }
          wh += dim;
          update.first = curr;
          update.visible = update.visible.add(curr);
          // Remove right/bottom margin from total width
          margin = toFloat(curr.css("margin-".concat(lrb)));
          if (wh - margin <= clip) {
            update.fullyvisible = update.fullyvisible.add(curr);
          }
          if (wh >= clip) {
            break;
          }
        }
      }
      this._update(update);
      this.tail = 0;
      if (!center && this.options("wrap") !== "circular" && this.options("wrap") !== "custom" && this.index(update.last) === this.items().length - 1) {
        // Remove right/bottom margin from total width
        wh -= toFloat(update.last.css("margin-".concat(lrb)));
        if (wh > clip) {
          this.tail = wh - clip;
        }
      }
      return this;
    },
    _position: function _position(item) {
      var first = this._first;
      var pos = toFloat(first.position()[this.lt]);
      var center = this.options("center"),
        centerOffset = center ? this.clipping() / 2 - this.dimension(first) / 2 : 0;
      if (this.rtl && !this.vertical) {
        if (this.relative) {
          pos -= toFloat(this.list().width()) - this.dimension(first);
        } else {
          pos -= this.clipping() - this.dimension(first);
        }
        pos += centerOffset;
      } else {
        pos -= centerOffset;
      }
      if (!center && (this.index(item) > this.index(first) || this.inTail) && this.tail) {
        pos = this.rtl && !this.vertical ? pos - this.tail : pos + this.tail;
        this.inTail = true;
      } else {
        this.inTail = false;
      }
      return -pos;
    },
    _update: function _update(update) {
      var self = this,
        current = {
          target: this._target,
          first: this._first,
          last: this._last,
          visible: this._visible,
          fullyvisible: this._fullyvisible
        },
        back = this.index(update.first || current.first) < this.index(current.first);
      var doUpdate = function doUpdate(key) {
        var elIn = [],
          elOut = [];
        update[key].each(function () {
          if (current[key].index(this) < 0) {
            elIn.push(this);
          }
        });
        current[key].each(function () {
          if (update[key].index(this) < 0) {
            elOut.push(this);
          }
        });
        if (back) {
          elIn = elIn.reverse();
        } else {
          elOut = elOut.reverse();
        }
        self._trigger("".concat(key, "in"), $(elIn));
        self._trigger("".concat(key, "out"), $(elOut));
        self["_".concat(key)] = update[key];
      };
      for (var key in update) {
        doUpdate(key);
      }
      return this;
    }
  });
})(jQuery, window);
(function ($) {
  $.jcarousel.fn.scrollIntoView = function (target, animate, callback) {
    var parsed = $.jCarousel.parseTarget(target),
      first = this.index(this._fullyvisible.first()),
      last = this.index(this._fullyvisible.last());
    var index;
    if (parsed.relative) {
      index = parsed.target < 0 ? Math.max(0, first + parsed.target) : last + parsed.target;
    } else {
      index = _typeof(parsed.target) !== "object" ? parsed.target : this.index(parsed.target);
    }
    if (index < first) {
      return this.scroll(index, animate, callback);
    }
    if (index >= first && index <= last) {
      if (typeof callback === "function") {
        callback.call(this, false);
      }
      return this;
    }
    var items = this.items(),
      clip = this.clipping(),
      lrb = this.vertical ? "bottom" : this.rtl ? "left" : "right";
    var wh = 0,
      curr;
    for (;;) {
      curr = items.eq(index);
      if (curr.length === 0) {
        break;
      }
      wh += this.dimension(curr);
      if (wh >= clip) {
        var margin = Number.parseFloat(curr.css("margin-".concat(lrb))) || 0;
        if (wh - margin !== clip) {
          index++;
        }
        break;
      }
      if (index <= 0) {
        break;
      }
      index--;
    }
    return this.scroll(index, animate, callback);
  };
})(jQuery);
(function ($) {
  $.jCarousel.plugin("jcarouselControl", {
    _options: {
      target: "+=1",
      event: "click",
      method: "scroll"
    },
    _active: null,
    _init: function _init() {
      this.onDestroy = function () {
        this._destroy();
        this.carousel().one("jcarousel:createend", this._create.bind(this));
      }.bind(this);
      this.onReload = this._reload.bind(this);
      this.onEvent = function (e) {
        e.preventDefault();
        var method = this.options("method");
        if (typeof method === "function") {
          method.call(this);
        } else {
          this.carousel().jcarousel(this.options("method"), this.options("target"));
        }
      }.bind(this);
    },
    _create: function _create() {
      this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend jcarousel:scrollend", this.onReload);
      this._element.on("".concat(this.options("event"), ".jcarouselcontrol"), this.onEvent);
      this._reload();
    },
    _destroy: function _destroy() {
      this._element.off(".jcarouselcontrol", this.onEvent);
      this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend jcarousel:scrollend", this.onReload);
    },
    _reload: function _reload() {
      var parsed = $.jCarousel.parseTarget(this.options("target")),
        carousel = this.carousel();
      var active;
      if (parsed.relative) {
        active = carousel.jcarousel(parsed.target > 0 ? "hasNext" : "hasPrev");
      } else {
        var target = _typeof(parsed.target) !== "object" ? carousel.jcarousel("items").eq(parsed.target) : parsed.target;
        active = carousel.jcarousel("target").index(target) >= 0;
      }
      if (this._active !== active) {
        this._trigger(active ? "active" : "inactive");
        this._active = active;
      }
      return this;
    }
  });
})(jQuery);
(function ($) {
  $.jCarousel.plugin("jcarouselPagination", {
    _options: {
      perPage: null,
      item: function item(page) {
        return "<a href=\"#".concat(page, "\">").concat(page, "</a>");
      },
      event: "click",
      method: "scroll"
    },
    _carouselItems: null,
    _pages: {},
    _items: {},
    _currentPage: null,
    _init: function _init() {
      this.onDestroy = function () {
        this._destroy();
        this.carousel().one("jcarousel:createend", this._create.bind(this));
      }.bind(this);
      this.onReload = this._reload.bind(this);
      this.onScroll = this._update.bind(this);
    },
    _create: function _create() {
      this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend", this.onReload).on("jcarousel:scrollend", this.onScroll);
      this._reload();
    },
    _destroy: function _destroy() {
      this._clear();
      this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend", this.onReload).off("jcarousel:scrollend", this.onScroll);
      this._carouselItems = null;
    },
    _reload: function _reload() {
      var perPage = this.options("perPage");
      this._pages = {};
      this._items = {};
      // Calculate pages
      if (typeof perPage === "function") {
        perPage = perPage.call(this);
      }
      if (perPage === null) {
        this._pages = this._calculatePages();
      } else {
        var pp = Number.parseInt(perPage, 10) || 0,
          items = this._getCarouselItems();
        var page = 1,
          i = 0,
          curr;
        for (;;) {
          curr = items.eq(i++);
          if (curr.length === 0) {
            break;
          }
          if (!this._pages[page]) {
            this._pages[page] = curr;
          } else {
            this._pages[page] = this._pages[page].add(curr);
          }
          if (i % pp === 0) {
            page++;
          }
        }
      }
      this._clear();
      var self = this,
        carousel = this.carousel().data("jcarousel"),
        element = this._element,
        item = this.options("item"),
        numCarouselItems = this._getCarouselItems().length;
      $.each(this._pages, function (page, carouselItems) {
        var currItem = self._items[page] = $(item.call(self, page, carouselItems));
        currItem.on("".concat(self.options("event"), ".jcarouselpagination"), function () {
          var target = carouselItems.eq(0);
          // If circular wrapping enabled, ensure correct scrolling direction
          if (carousel.circular) {
            var currentIndex = carousel.index(carousel.target()),
              newIndex = carousel.index(target);
            if (Number.parseFloat(page) > Number.parseFloat(self._currentPage)) {
              if (newIndex < currentIndex) {
                target = "+=".concat(numCarouselItems - currentIndex + newIndex);
              }
            } else {
              if (newIndex > currentIndex) {
                target = "-=".concat(currentIndex + (numCarouselItems - newIndex));
              }
            }
          }
          carousel[this.options("method")](target);
        }.bind(self));
        element.append(currItem);
      });
      this._update();
    },
    _update: function _update() {
      var target = this.carousel().jcarousel("target");
      var currentPage;
      $.each(this._pages, function (page, carouselItems) {
        carouselItems.each(function () {
          if (target.is(this)) {
            currentPage = page;
            return false;
          }
        });
        if (currentPage) {
          return false;
        }
      });
      if (this._currentPage !== currentPage) {
        this._trigger("inactive", this._items[this._currentPage]);
        this._trigger("active", this._items[currentPage]);
      }
      this._currentPage = currentPage;
    },
    items: function items() {
      return this._items;
    },
    reloadCarouselItems: function reloadCarouselItems() {
      this._carouselItems = null;
      return this;
    },
    _clear: function _clear() {
      this._element.empty();
      this._currentPage = null;
    },
    _calculatePages: function _calculatePages() {
      var carousel = this.carousel().data("jcarousel"),
        items = this._getCarouselItems(),
        clip = carousel.clipping();
      var wh = 0,
        idx = 0,
        page = 1;
      var pages = {};
      var curr, dim;
      for (;;) {
        curr = items.eq(idx++);
        if (curr.length === 0) {
          break;
        }
        dim = carousel.dimension(curr);
        if (wh + dim > clip) {
          page++;
          wh = 0;
        }
        wh += dim;
        if (!pages[page]) {
          pages[page] = curr;
        } else {
          pages[page] = pages[page].add(curr);
        }
      }
      return pages;
    },
    _getCarouselItems: function _getCarouselItems() {
      if (!this._carouselItems) {
        this._carouselItems = this.carousel().jcarousel("items");
      }
      return this._carouselItems;
    }
  });
})(jQuery);
(function ($, document) {
  var hiddenProp, visibilityChangeEvent;
  var visibilityChangeEventNames = {
    hidden: "visibilitychange",
    mozHidden: "mozvisibilitychange",
    msHidden: "msvisibilitychange",
    webkitHidden: "webkitvisibilitychange"
  };
  $.each(visibilityChangeEventNames, function (key, val) {
    if (typeof document[key] !== "undefined") {
      hiddenProp = key;
      visibilityChangeEvent = val;
      return false;
    }
  });
  $.jCarousel.plugin("jcarouselAutoscroll", {
    _options: {
      target: "+=1",
      interval: 3000,
      autostart: true,
      method: "scroll"
    },
    _timer: null,
    _started: false,
    _init: function _init() {
      this.onDestroy = function () {
        this._destroy();
        this.carousel().one("jcarousel:createend", this._create.bind(this));
      }.bind(this);
      this.onAnimateEnd = this._start.bind(this);
      this.onVisibilityChange = function () {
        if (document[hiddenProp]) {
          this._stop();
        } else {
          this._start();
        }
      }.bind(this);
    },
    _create: function _create() {
      this.carousel().one("jcarousel:destroy", this.onDestroy);
      $(document).on(visibilityChangeEvent, this.onVisibilityChange);
      if (this.options("autostart")) {
        this.start();
      }
    },
    _destroy: function _destroy() {
      this._stop();
      this.carousel().off("jcarousel:destroy", this.onDestroy);
      $(document).off(visibilityChangeEvent, this.onVisibilityChange);
    },
    _start: function _start() {
      var _this = this;
      this._stop();
      if (!this._started) {
        return;
      }
      this.carousel().one("jcarousel:animateend", this.onAnimateEnd);
      this._timer = setTimeout(function () {
        _this.carousel().jcarousel(_this.options("method"), _this.options("target"));
      }, this.options("interval"));
      return this;
    },
    _stop: function _stop() {
      if (this._timer) {
        this._timer = clearTimeout(this._timer);
      }
      this.carousel().off("jcarousel:animateend", this.onAnimateEnd);
      return this;
    },
    start: function start() {
      this._started = true;
      this._start();
      return this;
    },
    stop: function stop() {
      this._started = false;
      this._stop();
      return this;
    }
  });
})(jQuery, document);

/* </nowiki> */