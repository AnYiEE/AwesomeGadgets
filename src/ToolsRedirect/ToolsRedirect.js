'use strict';

/* <nowiki> */
/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect.js>
 * @dependency jquery.ui
 */
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
(function ($, mw) {
  var origPageName = mw.config.get('wgPageName');
  var scriptPath = mw.config.get('wgScriptPath');
  var nsNumber = mw.config.get('wgNamespaceNumber');
  var isCategory = nsNumber === 14;
  var _findRedirectCallbacks = [];
  var _pageWithRedirectTextSuffix = {};
  var _redirectExcludes = {};
  var SUFFIX_APPEND = 0;
  var SUFFIX_REPLACE = 1;
  var SUFFIX_SETDEFAULT = 2;
  var _nsCanonPrefix = "".concat(origPageName.split(':')[0], ":");
  var _nsPrefixPattern = $.map(mw.config.get('wgNamespaceIds'), function (nsid, text) {
    return nsid === nsNumber ? text : null;
  }).join('|');
  _nsPrefixPattern = new RegExp("^(".concat(_nsPrefixPattern, "):"), 'i');
  if (nsNumber === 0) {
    // articles
    _nsCanonPrefix = '';
    _nsPrefixPattern = /^/;
  }
  var fixNamespace = function fixNamespace(title) {
    if (nsNumber === 0) {
      // do nothing if it's articles
      return title;
    } else if (_nsPrefixPattern.test(title)) {
      // canonize the namespace
      return title.replace(_nsPrefixPattern, _nsCanonPrefix);
    }
    // don't have a namespace
    return _nsCanonPrefix + title;
  };
  /**
   * Add new custom callback for finding new potential redirect titles.
   * @param {function} callback( pagename, $content, titles ) -> title list
   */
  mw.toolsRedirect = {
    SUFFIX_APPEND: SUFFIX_APPEND,
    SUFFIX_REPLACE: SUFFIX_REPLACE,
    SUFFIX_SETDEFAULT: SUFFIX_SETDEFAULT,
    findRedirectCallback: function findRedirectCallback(callback) {
      if (arguments.length === 1) {
        _findRedirectCallbacks.push(callback);
      } else {
        $.merge(_findRedirectCallbacks, arguments);
      }
      return this;
    },
    findRedirectBySelector: function findRedirectBySelector(selector) {
      /* A shortcut to add CSS selectors as rule to find new potential redirect titles. */
      _findRedirectCallbacks.push(function () {
        return $(selector).map(function () {
          var title = $(this).text();
          return title || null;
        });
      });
      return this;
    },
    setRedirectTextSuffix: function setRedirectTextSuffix(title, suffix, flag) {
      var flag_set = false;
      var flag_append = false;
      flag || (flag = SUFFIX_APPEND); // default append
      flag_set = flag === SUFFIX_REPLACE;
      title = fixNamespace(title);
      if (title in _pageWithRedirectTextSuffix) {
        flag_append = flag === SUFFIX_APPEND;
      } else {
        // if not exist, every flag can set
        flag_set = true;
      }
      if (flag_set) {
        _pageWithRedirectTextSuffix[title] = suffix;
      } else if (flag_append) {
        _pageWithRedirectTextSuffix[title] = _pageWithRedirectTextSuffix[title] + suffix;
      }
    }
  };
  var _TR = {
    msg: null,
    tabselem: null,
    tagselem: null,
    variants: ['zh-hans', 'zh-hant', 'zh-cn', 'zh-hk', 'zh-mo', 'zh-sg', 'zh-tw'],
    init: function init() {
      if (!this.msg) {
        return;
      } // not setup correctly
      var self = this;
      var btn = $("<li id=\"ca-redirect\" class=\"mw-list-item collapsible\" style=\"cursor:pointer\"><a title=\"".concat(this.msg.btndesc, "\">").concat(this.msg.btntitle, "</a></li>"));
      btn.on('click', function (evt) {
        evt.preventDefault();
        self.dialog();
      });
      $('li#ca-history').after(btn);
    },
    dialog: function dialog() {
      var dlg = $('<div>').attr({
        'class': 'dialog-redirect',
        title: this.msg.dlgtitle
      }).dialog({
        bgiframe: true,
        resizable: false,
        modal: true,
        width: Math.round($(window).width() * 0.8),
        position: 'center'
      });
      dlg.css('max-height', "".concat(Math.round($(window).height() * 0.8), "px"));
      this.tabselem = $('<div>').attr('class', 'tab-redirect').appendTo(dlg);
      this.tagselem = $('<ul>').appendTo(this.tabselem);
      this.addTabs();
      this.tabselem.tabs();
    },
    addTabs: function addTabs() {
      for (var kname in this.tabs) {
        if (Object.prototype.hasOwnProperty.call(this.tabs, kname)) {
          if (this.tabs[kname] === null) {
            this.tabs[kname] = this["_initTab".concat(kname[0].charAt(0).toUpperCase()).concat(kname.slice(1))]();
          }
          var tab = this.tabs[kname];
          this.tagselem.append(tab.tag);
          this.tabselem.append(tab.cont);
        }
      }
      // default tab, autoload when dialog initiate
      this.loadView();
    },
    createTab: function createTab(tabname, tabtitle, onClick) {
      var self = this;
      var tag = $("<li><a href=\"#tab-".concat(tabname, "\">").concat(tabtitle, "</a></li>"));
      var cont = $("<div id=\"tab-".concat(tabname, "\"/>"));
      $('a', tag).on('click', function () {
        onClick.call(self);
      });
      return {
        tag: tag,
        cont: cont,
        loaded: false
      };
    },
    _initTabView: function _initTabView() {
      return this.createTab('view', this.msg.tabviewtitle, this.loadView);
    },
    _initTabCreate: function _initTabCreate() {
      return this.createTab('create', this.msg.tabcreatetitle, this.loadCreate);
    },
    tabs: {
      view: null,
      create: null
    },
    fix: function fix(pagenames) {
      var self = this;
      $('p.desc', this.tabs.view.cont).text(this.msg.fixloading);
      $('p[class!=desc]', this.tabs.view.cont).remove();
      this.loading(this.tabs.view.cont);
      this.bulkEdit(pagenames, this.msg.fixtext.replace('$1', origPageName), this.msg.fixsummary).done(function () {
        // delay load before the asynchronous tasks on server finished
        setTimeout(function () {
          self.loaded(self.tabs.view.cont);
          self.loadView(true);
        }, 3000);
      });
    },
    create: function create(pagenames) {
      var self = this;
      $('p.desc', this.tabs.create.cont).text(this.msg.createloading);
      $('p[class!=desc]', this.tabs.create.cont).remove();
      this.loading(this.tabs.create.cont);
      this.bulkEdit(pagenames, this.msg.createtext.replace('$1', origPageName), this.msg.createsummary.replace('$1', origPageName)).done(function () {
        // delay load before the asynchronous tasks on server finished
        setTimeout(function () {
          self.loaded(self.tabs.create.cont);
          self.tabs.view.loaded = false;
          self.loadCreate(true);
        }, 500);
      });
    },
    addRedirectTextSuffix: function addRedirectTextSuffix(title, text) {
      if (title in _pageWithRedirectTextSuffix) {
        text = text + _pageWithRedirectTextSuffix[title];
      }
      return text;
    },
    bulkEdit: function bulkEdit(titles, text, summary) {
      var self = this;
      titles = titles.filter(function (v, i, arr) {
        return arr.indexOf(v) === i;
      });
      titles = titles.join('|');
      return $.ajax(this.buildQuery({
        action: 'query',
        prop: 'info',
        titles: titles,
        meta: 'tokens'
      })).then(function (data) {
        var deferreds = [];
        $.each(data.query.pages, function (_idx, page) {
          deferreds.push($.ajax(self.buildQuery({
            action: 'edit',
            title: page.title,
            token: data.query.tokens.csrftoken,
            text: self.addRedirectTextSuffix(page.title, text),
            summary: summary,
            tags: 'ToolsRedirect'
          })));
        });
        return $.when.apply($, deferreds);
      });
    },
    loadTabCont: function loadTabCont(tabname, callback, reload) {
      var self = this;
      var tab = this.tabs[tabname];
      if (reload) {
        tab.loaded = false;
      }
      if (!tab.loaded) {
        tab.cont.html('');
        var $desc = $("<p class=\"desc\"><span class=\"desc-text\">".concat(this.msg.rediloading, "</span></p>")).appendTo(tab.cont);
        var $text = $desc.find('> .desc-text');
        callback.apply(this).done(function () {
          $text.text(self.msg["tab".concat(tabname, "desc")]);
        }).fail(function () {
          $text.text(self.msg["tab".concat(tabname, "notfound")]);
        }).always(function () {
          self.addMethods($desc, [{
            href: '#refresh',
            title: self.msg.refresh,
            click: function click(evt) {
              evt.preventDefault();
              self.loadTabCont(tabname, callback, true);
            }
          }]);
        });
        tab.loaded = true;
      }
    },
    loading: function loading(container) {
      if (container.prop('tagName').toLowerCase() === 'span') {
        container.addClass('mw-ajax-loader');
      } else if ($('span.mw-ajax-loader', container).length === 0) {
        $('<span>').attr('class', 'mw-ajax-loader').appendTo(container);
      }
    },
    loaded: function loaded(container) {
      if (container.prop('tagName').toLowerCase() === 'span') {
        container.removeClass('mw-ajax-loader');
      } else {
        $('span.mw-ajax-loader', container).remove();
      }
    },
    selectAll: function selectAll(cont) {
      $('input[type=checkbox]:not(:disabled)', cont).prop('checked', true);
    },
    selectInverse: function selectInverse(cont) {
      $('input[type=checkbox]:not(:disabled)', cont).each(function () {
        var e = $(this);
        e.prop('checked', !e.prop('checked'));
      });
    },
    selectAction: function selectAction(cont, cb) {
      var pagenames = [];
      $('input[type=checkbox]:checked', cont).each(function () {
        pagenames.push($(this).data('page-title'));
      });
      if (pagenames.length > 0) {
        cb.call(this, pagenames);
      }
    },
    clickAction: function clickAction(cont, cb) {
      var pagename = $('input[type="checkbox"]', cont).data('page-title');
      cb.call(this, [pagename]);
    },
    buildLink: function buildLink(attr) {
      var a = $("<a href=\"".concat(attr.href, "\" title=\"").concat(attr.title, "\" target=\"blank\">").concat(attr.title, "</a>"));
      if (attr.click) {
        a.on('click', attr.click);
      }
      if (attr.classname) {
        a.addClass(attr.classname);
      }
      return $('<span>').attr('class', 'tools-redirect_link').append(a);
    },
    addMethods: function addMethods($parent, methods) {
      var self = this;
      var $container = $parent.find('> .tools-redirect_methods');
      var methodExist = function methodExist(method) {
        return $container.find("a[href=".concat(JSON.stringify(method.href), "]")).length > 0;
      };
      if ($container.length === 0) {
        $container = $('<span>').attr('class', 'tools-redirect_methods').appendTo($parent);
      }
      $.each(methods, function (_idx, method) {
        if (!methodExist(method)) {
          self.buildLink(method).appendTo($container);
        }
      });
    },
    buildSelection: function buildSelection(main, metd, mt, dsab) {
      var cont = $('<span>');
      var sele = $('<input>').attr('type', 'checkbox').appendTo(cont);
      this.buildLink(main).appendTo(cont);
      this.addMethods(cont, metd);
      sele.data('page-title', mt);
      if (dsab) {
        sele.attr('disabled', true);
      }
      return cont;
    },
    loadView: function loadView(reload) {
      var $container = this.tabs.view.cont;
      this.loadTabCont('view', function () {
        return this.loadRedirect(origPageName, $container, 0);
      }, reload);
    },
    loadCreate: function loadCreate(reload) {
      this.loadTabCont('create', function () {
        return this.findRedirect(origPageName);
      }, reload);
    },
    loadRedirect: function loadRedirect(pagename, container, deep, loaded) {
      this.loading(container);
      var self = this;
      var deferObj = $.Deferred();
      var top = deep ? $('<dl>').appendTo(container) : container;
      if (!loaded) {
        loaded = {};
        loaded[pagename] = true;
      }
      var onClickFix = function onClickFix(evt) {
        var entry = $(this).parents('dd, p').first();
        evt.preventDefault();
        self.clickAction(entry, self.fix);
      };
      $.ajax(this.buildQuery({
        action: 'query',
        prop: 'redirects',
        titles: pagename,
        rdlimit: 'max'
      })).done(function (data) {
        self.loaded(container);
        var has_redirect = false;
        var desc = $('p.desc', self.tabs.view.cont);
        var maximumRedirectDepth = mw.config.get('toolsRedirectMaximumRedirectDepth', 10);
        $.each(data.query.pages, function (_idx, page) {
          if (!('redirects' in page)) {
            return;
          }
          var redirects = page.redirects;
          $.each(redirects, function (__, rdpage) {
            var rdtitle = rdpage.title;
            var ultitle = rdtitle.replace(/ /g, '_');
            var baseuri = "".concat(scriptPath, "/index.php?title=").concat(encodeURIComponent(ultitle));
            var entry = (deep ? $('<dd>') : $('<p>')).appendTo(top);
            var methods = [{
              href: "".concat(baseuri, "&action=edit"),
              title: self.msg.rediedit
            }];
            var isCycleRedirect = (rdtitle in loaded);
            loaded[rdtitle] = true;
            if (!isCycleRedirect && deep) {
              methods.push({
                href: '#fix-redirect',
                title: self.msg.tabviewfix,
                click: onClickFix
              });
            }
            var $container = self.buildSelection({
              href: "".concat(baseuri, "&redirect=no"),
              title: rdtitle
            }, methods, ultitle, !deep).appendTo(entry);
            if (isCycleRedirect) {
              $container.append("<span class=\"error\">".concat(self.msg.errcycleredirect, "</span>"));
            } else if (deep < maximumRedirectDepth) {
              deferObj.done(function () {
                return self.loadRedirect(rdtitle, entry, deep + 1, loaded);
              });
            }
            has_redirect = true;
          });
        });
        if (has_redirect && deep === 1) {
          self.addMethods(desc, [{
            href: '#select-all',
            title: self.msg.selectall,
            click: function click(evt) {
              evt.preventDefault();
              self.selectAll(self.tabs.view.cont);
            }
          }, {
            href: '#select-inverse',
            title: self.msg.selectinverse,
            click: function click(evt) {
              evt.preventDefault();
              self.selectInverse(self.tabs.view.cont);
            }
          }, {
            href: '#fix-selected',
            title: self.msg.tabviewfix,
            click: function click(evt) {
              evt.preventDefault();
              self.selectAction(self.tabs.view.cont, self.fix);
            }
          }]);
        }
        if (has_redirect) {
          deferObj.resolveWith(self);
        } else {
          deferObj.rejectWith(self);
        }
      });
      return deferObj.promise();
    },
    findVariants: function findVariants(pagename, titles) {
      var self = this;
      var suffixReg = /^.+?((（|[ _]\().+?([)）]))$/;
      var retTitles = [];
      var deferreds = [];
      var simpAndTrad = {
        'zh-hans': true,
        'zh-hant': true
      };
      var variants = this.variants;
      $.each(variants, function (_, variant) {
        var xhr = $.ajax(self.buildQuery({
          action: 'parse',
          page: pagename,
          prop: 'displaytitle',
          variant: variant
        })).then(function (data) {
          var title = fixNamespace(data.parse.displaytitle);
          if (variant in simpAndTrad) {
            mw.toolsRedirect.setRedirectTextSuffix(title, '\n{{简繁重定向}}', SUFFIX_APPEND);
          }
          return title;
        });
        if (isCategory) {
          xhr = xhr.then( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(origTitle) {
              var data_1, tmpTitle;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return $.ajax(self.buildQuery({
                      action: 'parse',
                      text: pagename,
                      prop: 'text',
                      variant: variant
                    }));
                  case 2:
                    data_1 = _context.sent;
                    tmpTitle = $(data_1.parse.text['*']).text().replace(/(^\s*|\s*$)/g, ''); // should not create redirect categories
                    // if the conversion is already in global table,
                    // or it will mess up a lot
                    _redirectExcludes[tmpTitle] = true;
                    return _context.abrupt("return", origTitle);
                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
        }
        deferreds.push(xhr);
      });
      return $.when.apply($, deferreds).then(function () {
        var suffixes = [];
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        $.each(args, function () {
          var suffix;
          var title = this;

          // find title suffix,
          // for example " (济南市)" to "市中区 (济南市)"
          suffix = suffixReg.exec(title);
          if (suffix && suffix.length === 2) {
            suffix = suffix[1];
          } else {
            suffix = '';
          }
          retTitles.push(title);
          suffixes.push(suffix);
        });

        // append suffixes
        var suffixesDedup = $.uniqueSort(suffixes);
        $.each(suffixesDedup, function (_, suffix) {
          $.merge(retTitles, titles.map(function (title) {
            title = fixNamespace(title);
            return suffixReg.test(title) ? title : title + suffix;
          }));
        });
        return self.findNotExists($.uniqueSort(retTitles));
      });
    },
    findNotExists: function findNotExists(titles) {
      var self = this;
      var deferreds = [];
      var excludes = new Set(['用字模式']);
      var alltitles = [];
      titles = titles.join('|');
      ['zh-hans', 'zh-hant'].forEach(function (_idx, variant) {
        deferreds.push($.ajax(self.buildQuery({
          action: 'parse',
          text: titles,
          prop: 'text',
          variant: variant
        })));
      });
      return $.when.apply($, deferreds).then(function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        $.each(args, function () {
          alltitles = alltitles.concat($(this[0].parse.text['*']).text().replace(/(^\s*|\s*$)/g, '').split('|'));
        });
        alltitles = alltitles.filter(function (v, i, arr) {
          return arr.indexOf(v) === i;
        });
        alltitles = alltitles.join('|');
        return $.ajax(self.buildQuery({
          action: 'query',
          prop: 'info',
          titles: alltitles
        })).then(function (data) {
          titles = [];
          $.each(data.query.pages, function (pageid, page) {
            var title = page.title;
            if (pageid < 0 && !excludes.has(title)) {
              if (title in _redirectExcludes) {
                // exclude special titles
                return;
              }
              titles.push(title);
              if (isCategory) {
                var target = origPageName.replace(/^Category:/, '');
                mw.toolsRedirect.setRedirectTextSuffix(title, '\n{{分类重定向|$1}}'.replace('$1', target));
              }

              // only set default suffix
              mw.toolsRedirect.setRedirectTextSuffix(title, '\n{{别名重定向}}', SUFFIX_SETDEFAULT);
            }
          });
          return titles;
        });
      });
    },
    findRedirect: function findRedirect(pagename) {
      var self = this;
      var frcDeferreds = [];
      var container = this.tabs.create.cont;
      var $content = $('#mw-content-text > div.mw-parser-output');
      var deferObj = $.Deferred();
      var titles = [];
      this.loading(container);
      $.each(_findRedirectCallbacks, function (_, callback) {
        var ret = callback(pagename, $content, titles);
        if (typeof ret === 'string') {
          titles.push(ret);
        } else if ('done' in ret) {
          // is Deferred
          frcDeferreds.push(ret);
        } else {
          $.merge(titles, ret);
        }
      });

      // remove all empty titles
      titles = titles.map(function (title) {
        return title || null;
      });
      var onClickCreate = function onClickCreate(evt) {
        var entry = $(this).parents('p:first');
        evt.preventDefault();
        self.clickAction(entry, self.create);
      };

      // handles the deferred callbacks
      $.when.apply($, frcDeferreds).then(function () {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        $.each(args, function (_, ret) {
          if (typeof ret === 'string') {
            titles.push(ret);
          } else {
            $.merge(titles, ret);
          }
        });
        return self.findVariants(pagename, titles);
      }).done(function (titles) {
        // build HTML
        self.loaded(container);
        $.each(titles, function (_, title) {
          var ultitle = title.replace(' ', '_');
          var baseuri = "".concat(scriptPath, "/index.php?title=").concat(encodeURIComponent(ultitle));
          var entry = $('<p>').appendTo(container);
          self.buildSelection({
            href: "".concat(baseuri, "&action=edit&redlink=1"),
            title: title,
            classname: 'new'
          }, [{
            href: '#create-redirect',
            title: self.msg.tabcreatetitle,
            click: onClickCreate
          }], ultitle, false).appendTo(entry);
        });
        var desc = $('p.desc', container);
        if (titles.length > 0) {
          self.addMethods(desc, [{
            href: '#select-all',
            title: self.msg.selectall,
            click: function click(evt) {
              evt.preventDefault();
              self.selectAll(container);
            }
          }, {
            href: '#select-inverse',
            title: self.msg.selectinverse,
            click: function click(evt) {
              evt.preventDefault();
              self.selectInverse(container);
            }
          }, {
            href: '#create-selected',
            title: self.msg.tabcreatetitle,
            click: function click(evt) {
              evt.preventDefault();
              self.selectAction(container, self.create);
            }
          }]);
          deferObj.resolveWith(self, [titles]);
        } else {
          deferObj.rejectWith(self, [titles]);
        }
      });
      return deferObj.promise();
    },
    buildQuery: function buildQuery(data) {
      var query = {
        url: "".concat(scriptPath, "/api.php"),
        dataType: 'json',
        type: 'POST'
      };
      query.data = data;
      query.data.format = 'json';
      return query;
    }
  };
  $.when(mw.loader.getScript("/index.php?title=MediaWiki:Gadget-ToolsRedirect-msg-".concat(wgULS('zh-hans', 'zh-hant'), ".js&action=raw&ctype=text/javascript&maxage=86400&smaxage=86400")), $.ready).done(function () {
    _TR.msg = window.tools_redirect_msg;
    _TR.init();
  });
})(jQuery, mediaWiki);

/* </nowiki> */