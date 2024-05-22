/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title1=RefToolbar.js|license1=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-refToolbar.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Edittools-refToolbar/modules/RefToolbar.ts}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title2=RefToolbarBase.js|license2=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-refToolbarBase.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Edittools-refToolbar/modules/RefToolbarBase.js}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title3=RefToolbar.js (RefToolbar 2.0)|license3=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:RefToolbar.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Edittools-refToolbar/modules/RefToolbar2.0.js}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title3=RefToolBar messages|license3=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:RefToolbarMessages-zh-hans.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:RefToolbarMessages-zh-hant.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Edittools-refToolbar/modules/RefToolbarMessages.js}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title3=RefToolBar Config|license3=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:RefToolbarConfig.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Edittools-refToolbar/modules/RefToolbarConfig.js}
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/global.js"(exports, module2) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module2.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/fails.js"(exports, module2) {
    "use strict";
    module2.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/descriptors.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-call.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
    "use strict";
    module2.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var call = FunctionPrototype.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module2.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/classof-raw.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/indexed-object.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var classof = require_classof_raw();
    var $Object = Object;
    var split = uncurryThis("".split);
    module2.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) === "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-indexed-object.js"(exports, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-callable.js"(exports, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/get-built-in.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module2.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/engine-user-agent.js"(exports, module2) {
    "use strict";
    module2.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/engine-v8-version.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var userAgent = require_engine_user_agent();
    var process = global2.process;
    var Deno = global2.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
      }
    }
    module2.exports = version;
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
    "use strict";
    var V8_VERSION = require_engine_v8_version();
    var fails = require_fails();
    var global2 = require_global();
    var $String = global2.String;
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-symbol.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var isPrototypeOf = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module2.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/try-to-string.js"(exports, module2) {
    "use strict";
    var $String = String;
    module2.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/a-callable.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument)) return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/get-method.js"(exports, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/define-global-property.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(global2, key, { value, configurable: true, writable: true });
      } catch (error) {
        global2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared-store.js"(exports, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.37.1",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared.js"(exports, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-object.js"(exports, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/has-own-property.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/uid.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString = uncurryThis(1 .toString);
    module2.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var Symbol2 = global2.Symbol;
    var WellKnownSymbolsStore = shared("wks");
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module2.exports = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-primitive.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var isObject = require_is_object();
    var isSymbol = require_is_symbol();
    var getMethod = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol = require_well_known_symbol();
    var $TypeError = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module2.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input)) return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0) pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-property-key.js"(exports, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/document-create-element.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var isObject = require_is_object();
    var document2 = global2.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    var createElement = require_document_create_element();
    module2.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var call = require_function_call();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var hasOwn = require_has_own_property();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
      } catch (error) {
      }
      if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    module2.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype !== 42;
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/an-object.js"(exports, module2) {
    "use strict";
    var isObject = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument)) return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-define-property.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject = require_an_object();
    var toPropertyKey = require_to_property_key();
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
      } catch (error) {
      }
      if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
      if ("value" in Attributes) O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-name.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var hasOwn = require_has_own_property();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn(FunctionPrototype, "name");
    var PROPER = EXISTS && function something() {
    }.name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module2.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/inspect-source.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var isCallable = require_is_callable();
    var store = require_shared_store();
    var functionToString = uncurryThis(Function.toString);
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function(it) {
        return functionToString(it);
      };
    }
    module2.exports = store.inspectSource;
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var WeakMap = global2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared-key.js"(exports, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/internal-state.js"(exports, module2) {
    "use strict";
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var global2 = require_global();
    var isObject = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = global2.TypeError;
    var WeakMap = global2.WeakMap;
    var set;
    var get;
    var has;
    var enforce = function(it) {
      return has(it) ? get(it) : set(it, {});
    };
    var getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw new TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap());
      store.get = store.get;
      store.has = store.has;
      store.set = store.set;
      set = function(it, metadata) {
        if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
      };
      get = function(it) {
        return store.get(it) || {};
      };
      has = function(it) {
        return store.has(it);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
      };
      has = function(it) {
        return hasOwn(it, STATE);
      };
    }
    var store;
    var STATE;
    module2.exports = {
      set,
      get,
      has,
      enforce,
      getterFor
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/make-built-in.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var isCallable = require_is_callable();
    var hasOwn = require_has_own_property();
    var DESCRIPTORS = require_descriptors();
    var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
    var inspectSource = require_inspect_source();
    var InternalStateModule = require_internal_state();
    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState = InternalStateModule.get;
    var $String = String;
    var defineProperty = Object.defineProperty;
    var stringSlice = uncurryThis("".slice);
    var replace = uncurryThis("".replace);
    var join = uncurryThis([].join);
    var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
      return defineProperty(function() {
      }, "length", { value: 8 }).length !== 8;
    });
    var TEMPLATE = String(String).split("String");
    var makeBuiltIn = module2.exports = function(value, name, options) {
      if (stringSlice($String(name), 0, 7) === "Symbol(") {
        name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
      }
      if (options && options.getter) name = "get " + name;
      if (options && options.setter) name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", { value: name, configurable: true });
        else value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", { value: options.arity });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS) defineProperty(value, "prototype", { writable: false });
        } else if (value.prototype) value.prototype = void 0;
      } catch (error) {
      }
      var state = enforceInternalState(value);
      if (!hasOwn(state, "source")) {
        state.source = join(TEMPLATE, typeof name == "string" ? name : "");
      }
      return value;
    };
    Function.prototype.toString = makeBuiltIn(function toString() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    }, "toString");
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/define-built-in.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module2.exports = function(O, key, value, options) {
      if (!options) options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value)) makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe) delete O[key];
          else if (O[key]) simple = true;
        } catch (error) {
        }
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
          value,
          enumerable: false,
          configurable: !options.nonConfigurable,
          writable: !options.nonWritable
        });
      }
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/math-trunc.js"(exports, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-absolute-index.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var max = Math.max;
    var min = Math.min;
    module2.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-length.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/length-of-array-like.js"(exports, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/array-includes.js"(exports, module2) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el) while (length > index) {
          value = O[index++];
          if (value !== value) return true;
        }
        else for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
      };
    };
    module2.exports = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-keys-internal.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var hasOwn = require_has_own_property();
    var toIndexedObject = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push = uncurryThis([].push);
    module2.exports = function(object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i) if (hasOwn(O, key = names[i++])) {
        ~indexOf(result, key) || push(result, key);
      }
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/enum-bug-keys.js"(exports, module2) {
    "use strict";
    module2.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/own-keys.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject = require_an_object();
    var concat = uncurryThis([].concat);
    module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module2) {
    "use strict";
    var hasOwn = require_has_own_property();
    var ownKeys = require_own_keys();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    module2.exports = function(target, source, exceptions) {
      var keys = ownKeys(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-forced.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    var isCallable = require_is_callable();
    var replacement = /#|\.prototype\./;
    var isForced = function(feature, detection) {
      var value = data[normalize(feature)];
      return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
    };
    var normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    module2.exports = isForced;
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/export.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIn = require_define_built_in();
    var defineGlobalProperty = require_define_global_property();
    var copyConstructorProperties = require_copy_constructor_properties();
    var isForced = require_is_forced();
    module2.exports = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = global2;
      } else if (STATIC) {
        target = global2[TARGET] || defineGlobalProperty(TARGET, {});
      } else {
        target = global2[TARGET] && global2[TARGET].prototype;
      }
      if (target) for (key in source) {
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
          descriptor = getOwnPropertyDescriptor(target, key);
          targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        if (!FORCED && targetProperty !== void 0) {
          if (typeof sourceProperty == typeof targetProperty) continue;
          copyConstructorProperties(sourceProperty, targetProperty);
        }
        if (options.sham || targetProperty && targetProperty.sham) {
          createNonEnumerableProperty(sourceProperty, "sham", true);
        }
        defineBuiltIn(target, key, sourceProperty, options);
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-array.js"(exports, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/array-set-length.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var isArray = require_is_array();
    var $TypeError = TypeError;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function() {
      if (this !== void 0) return true;
      try {
        Object.defineProperty([], "length", { writable: false }).length = 1;
      } catch (error) {
        return error instanceof TypeError;
      }
    }();
    module2.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
      if (isArray(O) && !getOwnPropertyDescriptor(O, "length").writable) {
        throw new $TypeError("Cannot set read only .length");
      }
      return O.length = length;
    } : function(O, length) {
      return O.length = length;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module2) {
    "use strict";
    var $TypeError = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module2.exports = function(it) {
      if (it > MAX_SAFE_INTEGER) throw $TypeError("Maximum allowed index exceeded");
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.array.push.js
var require_es_array_push = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.array.push.js"() {
    "use strict";
    var $2 = require_export();
    var toObject = require_to_object();
    var lengthOfArrayLike = require_length_of_array_like();
    var setArrayLength = require_array_set_length();
    var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
    var fails = require_fails();
    var INCORRECT_TO_LENGTH = fails(function() {
      return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
    });
    var properErrorOnNonWritableLength = function() {
      try {
        Object.defineProperty([], "length", { writable: false }).push();
      } catch (error) {
        return error instanceof TypeError;
      }
    };
    var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
    $2({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      push: function push(item) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var argCount = arguments.length;
        doesNotExceedSafeInteger(len + argCount);
        for (var i = 0; i < argCount; i++) {
          O[len] = arguments[i];
          len++;
        }
        setArrayLength(O, len);
        return len;
      }
    });
  }
});

// dist/Edittools-refToolbar/Edittools-refToolbar.js
require_es_array_push();
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
//! src/Edittools-refToolbar/Edittools-refToolbar.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Edittools-refToolbar/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("RefToolbar/2.0");
//! src/Edittools-refToolbar/modules/util/getMessage.ts
var getMessage = (key, ...args) => {
  return args.length ? mw.message(key, ...args).parse() : mw.message(key).plain();
};
//! src/Edittools-refToolbar/modules/RefToolbarConfig.js
var refToolbarConfig = () => {
  const {
    CiteTemplate
  } = window;
  CiteTB.Options = {
    "date format": "<year>-<zmonth>-<zdate>",
    "autodate fields": ["accessdate"],
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    modal: true,
    autoparse: true,
    expandtemplates: false
  };
  new CiteTemplate("cite web", "web", [
    // Basic fields
    {
      field: "author<N>",
      increment_group: "author_alt",
      increment_button: true
    },
    {
      field: "title",
      autofillprop: "title"
    },
    {
      field: "url",
      autofillid: "url"
    },
    {
      field: "website",
      autofillprop: "journal"
    },
    {
      field: "publisher",
      autofillprop: "publisher"
    },
    {
      field: "accessdate"
    },
    {
      field: "ref",
      tooltip: "cite-ref-tooltip"
    }
  ], [
    // Expanded fields
    {
      field: "authorlink<N>",
      tooltip: "cite-authorlink-tooltip",
      increment_group: "authorlink",
      increment_button: true
    },
    {
      field: "last<N>",
      autofillprop: "last-incr",
      increment_group: "author"
    },
    {
      field: "first<N>",
      autofillprop: "first-incr",
      increment_group: "author",
      increment_button: true
    },
    {
      field: "location"
    },
    {
      field: "page",
      tooltip: "cite-page-tooltip"
    },
    {
      field: "pages",
      autofillprop: "pages",
      tooltip: "cite-pages-tooltip"
    },
    {
      field: "language",
      autofillprop: "language"
    },
    {
      field: "format"
    },
    {
      field: "doi",
      autofillid: "doi",
      autofillprop: "doi"
    },
    {
      field: "date",
      autofillprop: "date"
    },
    {
      field: "quote"
    }
  ]);
  new CiteTemplate("cite news", "news", [
    // Basic fields
    {
      field: "author<N>",
      increment_group: "author_alt",
      increment_button: true
    },
    {
      field: "title",
      autofillprop: "title"
    },
    {
      field: "url",
      autofillid: "url"
    },
    {
      field: "accessdate"
    },
    {
      field: "work",
      tooltip: "cite-work-tooltip",
      autofillprop: "journal"
    },
    {
      field: "agency"
    },
    {
      field: "issue"
    },
    {
      field: "publisher",
      autofillprop: "publisher"
    },
    {
      field: "date",
      autofillprop: "date"
    },
    {
      field: "ref",
      tooltip: "cite-ref-tooltip"
    }
  ], [
    // Expanded fields
    {
      field: "authorlink<N>",
      tooltip: "cite-authorlink-tooltip",
      increment_group: "authorlink",
      increment_button: true
    },
    {
      field: "last<N>",
      autofillprop: "last-incr",
      increment_group: "author"
    },
    {
      field: "first<N>",
      autofillprop: "first-incr",
      increment_group: "author",
      increment_button: true
    },
    {
      field: "location"
    },
    {
      field: "page",
      tooltip: "cite-page-tooltip"
    },
    {
      field: "pages",
      autofillprop: "pages",
      tooltip: "cite-pages-tooltip"
    },
    {
      field: "language",
      autofillprop: "language"
    },
    {
      field: "format"
    },
    {
      field: "doi",
      autofillid: "doi",
      autofillprop: "doi"
    },
    {
      field: "quote"
    }
  ]);
  new CiteTemplate("cite book", "book", [
    // Basic fields
    {
      field: "author<N>",
      increment_group: "author_alt",
      increment_button: true
    },
    {
      field: "coauthors",
      autofillprop: "coauthors"
    },
    {
      field: "editor"
    },
    {
      field: "title",
      autofillprop: "title"
    },
    {
      field: "date",
      autofillprop: "year"
    },
    {
      field: "publisher",
      autofillprop: "publisher"
    },
    {
      field: "location",
      autofillprop: "location"
    },
    {
      field: "isbn",
      /* "autofillid":"isbn", */
      autofillprop: "isbn"
    },
    {
      field: "page",
      tooltip: "cite-page-tooltip"
    },
    {
      field: "pages",
      autofillprop: "pages",
      tooltip: "cite-pages-tooltip"
    },
    {
      field: "edition",
      autofillprop: "edition"
    },
    {
      field: "url",
      autofillid: "url"
    },
    {
      field: "accessdate"
    },
    {
      field: "ref",
      tooltip: "cite-ref-tooltip"
    }
  ], [
    // Expanded fields
    {
      field: "last<N>",
      autofillprop: "last-incr",
      increment_group: "author"
    },
    {
      field: "first<N>",
      autofillprop: "first-incr",
      increment_group: "author",
      increment_button: true
    },
    {
      field: "authorlink<N>",
      tooltip: "cite-authorlink-tooltip",
      increment_group: "authorlink",
      increment_button: true
    },
    {
      field: "editor<N>-last",
      increment_group: "editor"
    },
    {
      field: "editor<N>-first",
      increment_group: "editor",
      increment_button: true
    },
    {
      field: "editor<N>-link",
      increment_group: "editorlink",
      increment_button: true
    },
    {
      field: "language",
      autofillprop: "language"
    },
    {
      field: "format"
    },
    {
      field: "chapter",
      autofillprop: "chapter"
    },
    {
      field: "quote"
    }
  ]);
  new CiteTemplate("cite journal", "journal", [
    // Basic fields
    {
      field: "author<N>",
      increment_group: "author_alt",
      increment_button: true
    },
    {
      field: "coauthors",
      autofillprop: "coauthors"
    },
    {
      field: "title",
      autofillprop: "title"
    },
    {
      field: "journal",
      autofillprop: "journal"
    },
    {
      field: "date",
      autofillprop: "date"
    },
    {
      field: "volume",
      autofillprop: "volume"
    },
    {
      field: "issue",
      autofillprop: "issue"
    },
    {
      field: "page",
      tooltip: "cite-page-tooltip"
    },
    {
      field: "pages",
      autofillprop: "pages",
      tooltip: "cite-pages-tooltip"
    },
    {
      field: "doi",
      autofillid: "doi",
      autofillprop: "doi"
    },
    {
      field: "pmid",
      autofillid: "pmid"
    },
    {
      field: "url",
      autofillid: "url"
    },
    {
      field: "accessdate"
    },
    {
      field: "ref",
      tooltip: "cite-ref-tooltip"
    }
  ], [
    // Expanded fields
    {
      field: "authorlink<N>",
      tooltip: "cite-authorlink-tooltip",
      increment_group: "authorlink",
      increment_button: true
    },
    {
      field: "last<N>",
      autofillprop: "last-incr",
      increment_group: "author"
    },
    {
      field: "first<N>",
      autofillprop: "first-incr",
      increment_group: "author",
      increment_button: true
    },
    {
      field: "editor<N>-last",
      increment_group: "editor"
    },
    {
      field: "editor<N>-first",
      increment_group: "editor",
      increment_button: true
    },
    {
      field: "editor<N>-link",
      increment_group: "editorlink",
      increment_button: true
    },
    {
      field: "series"
    },
    {
      field: "at",
      tooltip: "cite-at-tooltip"
    },
    {
      field: "trans-title"
    },
    {
      field: "publisher",
      autofillprop: "publisher"
    },
    {
      field: "location"
    },
    {
      field: "language",
      autofillprop: "language"
    },
    {
      field: "format"
    },
    {
      field: "issn",
      autofillprop: "issn"
    },
    {
      field: "pmc"
    },
    {
      field: "oclc"
    },
    {
      field: "bibcode"
    },
    {
      field: "id"
    },
    {
      field: "quote"
    },
    {
      field: "postscript",
      tooltip: "cite-postscript-tooltip"
    }
  ]);
  new CiteTemplate("cite conference", "conference", [
    // Basic fields
    {
      field: "author",
      autofillprop: "author1"
    },
    {
      field: "coauthors",
      autofillprop: "coauthors"
    },
    {
      field: "title",
      autofillprop: "title"
    },
    {
      field: "conference"
    },
    {
      field: "conferenceurl"
    },
    {
      field: "booktitle",
      autofillprop: "journal"
    },
    {
      field: "date",
      autofillprop: "date"
    },
    {
      field: "year"
    },
    {
      field: "month"
    },
    {
      field: "volume",
      autofillprop: "volume"
    },
    {
      field: "publisher",
      autofillprop: "publisher"
    },
    {
      field: "location",
      autofillprop: "location"
    },
    {
      field: "isbn"
    },
    {
      field: "pages"
    },
    {
      field: "doi",
      autofillid: "doi",
      autofillprop: "doi"
    },
    {
      field: "pmid",
      autofillid: "pmid"
    },
    {
      field: "url",
      autofillid: "url"
    },
    {
      field: "accessdate",
      tooltip: "cite-accessdate-tooltip"
    }
  ], [
    // Expanded fields
    {
      field: "last",
      autofillprop: "last1"
    },
    {
      field: "first",
      autofillprop: "first1"
    },
    {
      field: "authorlink",
      tooltip: "cite-authorlink-tooltip"
    },
    {
      field: "editor"
    },
    {
      field: "others"
    },
    {
      field: "edition",
      autofillprop: "edition"
    },
    {
      field: "language",
      autofillprop: "language"
    },
    {
      field: "format"
    },
    {
      field: "issn"
    },
    {
      field: "oclc"
    },
    {
      field: "id",
      tooltip: "cite-id-tooltip"
    },
    {
      field: "quote"
    }
  ]);
  new CiteTemplate("cite encyclopedia", "encyclopedia", [
    // Basic fields
    {
      field: "author",
      autofillprop: "author1"
    },
    {
      field: "title"
    },
    {
      field: "editor"
    },
    {
      field: "encyclopedia",
      autofillprop: "title"
    },
    {
      field: "volume"
    },
    {
      field: "year",
      autofillprop: "year"
    },
    {
      field: "publisher",
      autofillprop: "publisher"
    },
    {
      field: "location",
      autofillprop: "location"
    },
    {
      field: "isbn"
    },
    {
      field: "pages"
    },
    {
      field: "url"
    }
  ], [
    // Expanded fields
    {
      field: "last",
      autofillprop: "last1"
    },
    {
      field: "first",
      autofillprop: "first1"
    },
    {
      field: "authorlink",
      tooltip: "cite-authorlink-tooltip"
    },
    {
      field: "coauthors",
      autofillprop: "coauthors"
    },
    {
      field: "others"
    },
    {
      field: "edition",
      autofillprop: "edition"
    },
    {
      field: "oclc"
    },
    {
      field: "id",
      tooltip: "cite-id-tooltip"
    },
    {
      field: "accessdate",
      tooltip: "cite-accessdate-tooltip"
    },
    {
      field: "language",
      autofillprop: "language"
    },
    {
      field: "format"
    },
    {
      field: "date"
    },
    {
      field: "month"
    },
    {
      field: "quote"
    }
  ]);
  CiteTB.init();
};
//! src/Edittools-refToolbar/modules/RefToolbar2.0.js
var refToolbar2 = ($body) => {
  CiteTB.DefaultOptions = {
    "date format": "<year>-<zmonth>-<zdate>",
    "autodate fields": [],
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    modal: true,
    autoparse: false,
    expandtemplates: false
  };
  CiteTB.getOption = (opt) => {
    if (CiteTB.UserOptions[opt] !== void 0) {
      return CiteTB.UserOptions[opt];
    } else if (CiteTB.Options[opt] !== void 0) {
      return CiteTB.Options[opt];
    }
    return CiteTB.DefaultOptions[opt];
  };
  CiteTB.init = () => {
    var _$$width2;
    $(document).find("head").trigger("reftoolbarbase");
    const $target = $body.find("textarea[name=wpTextbox1]");
    const temlist = {};
    for (const t in CiteTB.Templates) {
      if (Object.hasOwn(CiteTB.Templates, t)) {
        var _$$width;
        const tem = CiteTB.Templates[t];
        const sform = CiteTB.escStr(tem.shortform);
        const actionobj = {
          type: "dialog",
          module: "cite-dialog-".concat(sform)
        };
        const dialogobj = {};
        dialogobj["cite-dialog-".concat(sform)] = {
          resizeme: false,
          // eslint-disable-next-line mediawiki/msg-doc
          title: mw.message("cite-dialog-".concat(sform)).parse(),
          id: "citetoolbar-".concat(sform),
          init: () => {
          },
          html: tem.getInitial(),
          dialog: {
            width: Math.round((_$$width = $(window).width()) !== null && _$$width !== void 0 ? _$$width : 0 * 0.8),
            open() {
              $(this).html(CiteTB.getOpenTemplate().getForm());
              $body.find(".cite-prev-parse").on("click", (e) => {
                e.preventDefault();
                CiteTB.prevParseClick();
              });
            },
            buttons: {
              "cite-form-submit"() {
                const ref = CiteTB.getRef(false, true);
                $(this).dialog("close");
                $.wikiEditor.modules.toolbar.fn.doAction($(this).data("context"), {
                  type: "encapsulate",
                  options: {
                    post: ref
                  }
                }, $(this));
              },
              "cite-form-showhide": CiteTB.showHideExtra,
              "cite-refpreview"() {
                const ref = CiteTB.getRef(false, false);
                const template = CiteTB.getOpenTemplate();
                const div = $("#citetoolbar-".concat(CiteTB.escStr(template.shortform)));
                div.find(".cite-preview-label").show();
                div.find(".cite-ref-preview").text(ref).show();
                if (CiteTB.getOption("autoparse")) {
                  CiteTB.prevParseClick();
                } else {
                  div.find(".cite-prev-parse").show();
                  div.find(".cite-prev-parsed-label").hide();
                  div.find(".cite-preview-parsed").html("");
                }
              },
              "wikieditor-toolbar-tool-link-cancel"() {
                $(this).dialog("close");
              },
              "cite-form-reset"() {
                CiteTB.resetForm();
              }
            }
          }
        };
        try {
          $target.wikiEditor("addDialog", dialogobj);
        } catch {
        }
        temlist[sform] = {
          label: tem.templatename,
          action: actionobj
        };
      }
    }
    const refsection = {
      sections: {
        cites: {
          type: "toolbar",
          label: getMessage("cite-section-label"),
          groups: {
            template: {
              tools: {
                template: {
                  type: "select",
                  label: getMessage("cite-template-list"),
                  list: temlist
                }
              }
            },
            namedrefs: {
              label: getMessage("cite-named-refs-label"),
              tools: {
                nrefs: {
                  type: "button",
                  action: {
                    type: "dialog",
                    module: "cite-toolbar-namedrefs"
                  },
                  icon: "https://youshou.wiki/images/thumb/b/be/Nuvola_clipboard_lined.svg/22px-Nuvola_clipboard_lined.svg.png",
                  section: "cites",
                  group: "namedrefs",
                  label: getMessage("cite-named-refs-button")
                }
              }
            }
          }
        }
      }
    };
    const defaultdialogs = {
      "cite-toolbar-namedrefs": {
        title: mw.message("cite-named-refs-title").parse(),
        resizeme: false,
        id: "citetoolbar-namedrefs",
        html: '<div id="cite-namedref-loading"> <img src="https://youshou.wiki/images/b/b1/Loading_icon.gif" /> &nbsp;'.concat(getMessage("cite-loading"), "</div>"),
        init: () => {
        },
        dialog: {
          width: Math.round((_$$width2 = $(window).width()) !== null && _$$width2 !== void 0 ? _$$width2 : 0 * 0.8),
          open() {
            CiteTB.loadRefs();
          },
          buttons: {
            "cite-form-submit"() {
              const refname = $body.find("#cite-namedref-select").val();
              if (refname === "") {
                return;
              }
              $(this).dialog("close");
              $.wikiEditor.modules.toolbar.fn.doAction($(this).data("context"), {
                type: "encapsulate",
                options: {
                  post: CiteTB.getNamedRef(refname, true)
                }
              }, $(this));
            },
            "wikieditor-toolbar-tool-link-cancel"() {
              $(this).dialog("close");
            }
          }
        }
      }
    };
    try {
      $target.wikiEditor("addDialog", defaultdialogs);
    } catch {
    }
    $body.find("#citetoolbar-namedrefs").off("dialogopen");
    if (!CiteTB.getOption("modal")) {
      mw.util.addCSS(".ui-widget-overlay{display:none !important}");
    }
    try {
      $target.wikiEditor("addToToolbar", refsection);
    } catch {
    }
  };
  CiteTB.mainRefList = [];
  CiteTB.refsLoaded = false;
  CiteTB.getRef = (inneronly, forinsert) => {
    let i, j, g, group;
    const template = CiteTB.getOpenTemplate();
    const {
      templatename
    } = template;
    let res = "";
    const refobj = {
      shorttag: false
    };
    if (!inneronly) {
      group = $("#cite-".concat(CiteTB.escStr(template.shortform), "-group")).val();
      let refname = $("#cite-".concat(CiteTB.escStr(template.shortform), "-name")).val();
      res += "<ref";
      if (refname) {
        refname = String(refname).trim();
        res += " name=".concat(CiteTB.getQuotedString(refname));
        refobj.refname = refname;
      }
      if (group) {
        group = String(group).trim();
        res += " group=".concat(CiteTB.getQuotedString(group));
        refobj.refgroup = group;
      }
      res += ">";
    }
    let content = "{{".concat(templatename);
    for (g in template.incrementables) {
      if (Object.hasOwn(template.incrementables, g)) {
        group = template.incrementables[g];
        for (i = 1; i <= group.val; i++) {
          for (j = 0; j < group.fields.length; j++) {
            const fieldname = group.fields[j].field;
            const fieldid = fieldname.replace("<N>", i.toString());
            const field = $("#cite-".concat(CiteTB.escStr(template.shortform), "-").concat(fieldid)).val();
            if (field) {
              content += " |".concat(fieldid, "=");
              content += String(field).trim();
            }
          }
        }
      }
    }
    for (i = 0; i < template.basic.length; i++) {
      if (template.basic[i].increment_group) {
        continue;
      }
      const fieldname = template.basic[i].field;
      const field = $("#cite-".concat(CiteTB.escStr(template.shortform), "-").concat(fieldname)).val();
      if (field) {
        content += " |".concat(fieldname, "=");
        content += String(field).trim();
      }
    }
    if ($body.find("#cite-form-status").val() !== "closed") {
      for (i = 0; i < template.extra.length; i++) {
        if (template.extra[i].increment_group) {
          continue;
        }
        const fieldname = template.extra[i].field;
        const field = $("#cite-".concat(CiteTB.escStr(template.shortform), "-").concat(fieldname)).val();
        if (field) {
          content += " |".concat(fieldname, "=");
          content += String(field).trim();
        }
      }
    }
    content += "}}";
    res += content;
    refobj.content = content;
    if (!inneronly) {
      res += "</ref>";
    }
    if (forinsert) {
      CiteTB.mainRefList.push(refobj);
    }
    return res;
  };
  CiteTB.getNamedRef = (refname, forinsert) => {
    if (forinsert) {
      CiteTB.mainRefList.push({
        shorttag: true,
        refname
      });
    }
    return "<ref name=".concat(CiteTB.getQuotedString(refname), " />");
  };
  CiteTB.loadRefs = () => {
    if (CiteTB.refsLoaded) {
      return;
    }
    CiteTB.getPageText(CiteTB.loadRefsInternal);
  };
  CiteTB.loadRefsInternal = (text) => {
    const refsregex = /< *ref(?: +(name|group) *= *(?:"([^"]*?)"|'([^']*?)'|([^ '"/>]*?)) *)? *(?: +(name|group) *= *(?:"([^"]*?)"|'([^']*?)'|([^ '"/>]*?)) *)? *(?:\/ *>|>((?:.|\n)*?)< *\/ *ref *>)/gim;
    while (true) {
      const ref = refsregex.exec(text);
      if (ref === null) {
        break;
      }
      const refobj = {};
      if (ref[9]) {
        [, , , , , , , , , refobj.content] = ref;
        refobj.shorttag = false;
      } else {
        refobj.shorttag = true;
      }
      if (ref[1] !== "") {
        if (ref[2]) {
          [, , refobj["ref".concat(ref[1])]] = ref;
        } else if (ref[3]) {
          [, , , refobj["ref".concat(ref[1])]] = ref;
        } else {
          [, , , , refobj["ref".concat(ref[1])]] = ref;
        }
      }
      if (ref[5] !== "") {
        if (ref[6]) {
          [, , , , , , refobj["ref".concat(ref[5])]] = ref;
        } else if (ref[7]) {
          [, , , , , , , refobj["ref".concat(ref[5])]] = ref;
        } else {
          [, , , , , , , , refobj["ref".concat(ref[5])]] = ref;
        }
      }
      CiteTB.mainRefList.push(refobj);
    }
    CiteTB.refsLoaded = true;
    CiteTB.setupNamedRefs();
  };
  CiteTB.parse = (text, callback) => {
    const postdata = {
      action: "parse",
      title: mw.config.get("wgPageName"),
      text,
      prop: "text",
      format: "json",
      formatversion: "2"
    };
    api.post(postdata).then(({
      parse
    }) => {
      const html = parse.text;
      callback(html);
    });
  };
  CiteTB.expandtemplates = (text, callback) => {
    const postdata = {
      action: "expandtemplates",
      title: mw.config.get("wgPageName"),
      text,
      format: "json",
      formatversion: "2"
    };
    api.post(postdata).then(({
      expandtemplates
    }) => {
      const restext = expandtemplates.wikitext;
      callback(restext);
    });
  };
  CiteTB.getPageText = (callback) => {
    const section = $body.find("input[name=wpSection]").val();
    if (section === "") {
      if (CiteTB.getOption("expandtemplates")) {
        CiteTB.expandtemplates($body.find("textarea[name=wpTextbox1]").wikiEditor("getContents").text(), callback);
      } else {
        callback($body.find("textarea[name=wpTextbox1]").wikiEditor("getContents").text());
      }
    } else {
      const {
        wgArticleId
      } = mw.config.get();
      const postdata = {
        action: "query",
        prop: "revisions",
        rvprop: "content",
        pageids: wgArticleId,
        format: "json",
        formatversion: "2"
      };
      if (CiteTB.getOption("expandtemplates")) {
        postdata.rvexpandtemplates = "1";
      }
      api.get(postdata).then(({
        query
      }) => {
        const pagetext = query.pages[0].revisions[0].content;
        callback(pagetext);
      });
    }
  };
  CiteTB.safeDecodeURIComponent = (s) => {
    try {
      s = decodeURIComponent(s);
    } catch {
    }
    return s;
  };
  CiteTB.initAutofill = function() {
    var _$$attr;
    const elemid = (_$$attr = $(this).attr("id")) !== null && _$$attr !== void 0 ? _$$attr : "";
    const res = /^cite-auto-(.*?)-(.*)-(.*)$/.exec(elemid);
    if (!res) {
      return false;
    }
    const [, tem, field, autotype] = res;
    let id = $("#cite-".concat(tem, "-").concat(field)).val();
    if (!id) {
      return false;
    }
    let url = "https://citoid.qiuwen.net.cn/lookup.php?";
    id = CiteTB.safeDecodeURIComponent(id);
    url += "".concat(autotype, "=").concat(encodeURIComponent(id));
    url += "&template=".concat(encodeURIComponent(tem));
    const s = document.createElement("script");
    s.setAttribute("src", url);
    s.setAttribute("type", "text/javascript");
    document.head.append(s);
    return false;
  };
  CiteTB.autoFill = (data, template, type) => {
    const cl = "cite-".concat(template, "-");
    let i, j;
    let coauthors;
    $(".".concat(cl, "title")).val(data.title);
    if (data.authors && data.authors.length > 0) {
      if ($(".".concat(cl, "last-incr-1")).length > 0) {
        var _$$eq$attr;
        const classes = (_$$eq$attr = $(".".concat(cl, "last-incr-1")).eq(0).attr("class")) === null || _$$eq$attr === void 0 ? void 0 : _$$eq$attr.split(/\s+/);
        if (!classes) {
          return;
        }
        let group = false;
        const patt = /cite-[^-]*?-incr-(.*)/;
        var _iterator = _createForOfIteratorHelper(classes), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            const class_ = _step.value;
            if (patt.exec(class_)) {
              [, group] = patt.exec(class_);
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        $(".".concat(cl, "last-incr-1")).val(data.authors[0][0]);
        $(".".concat(cl, "first-incr-1")).val(data.authors[0][1]);
        const elemid = "#cite-incr-".concat(template, "-").concat(group);
        for (i = 2; i < data.authors.length + 1; i++) {
          $(elemid).trigger("click");
          $(".".concat(cl, "last-incr-").concat(i.toString())).val(data.authors[i - 1][0]);
          $(".".concat(cl, "first-incr-").concat(i.toString())).val(data.authors[i - 1][1]);
        }
      } else if ($(".".concat(cl, "author-incr-1")).length > 0) {
        var _$$eq$attr2;
        const classes = (_$$eq$attr2 = $(".".concat(cl, "author-incr-1")).eq(0).attr("class")) === null || _$$eq$attr2 === void 0 ? void 0 : _$$eq$attr2.split(/\s+/);
        if (!classes) {
          return;
        }
        let group = false;
        const patt = /cite-[^-]*?-incr-(.*)/;
        var _iterator2 = _createForOfIteratorHelper(classes), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            const class_ = _step2.value;
            if (patt.exec(class_)) {
              [, group] = patt.exec(class_);
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        $(".".concat(cl, "author-incr-1")).val(data.authors[0].join(", "));
        const elemid = "#cite-incr-".concat(template, "-").concat(group);
        for (i = 2; i < data.authors.length + 1; i++) {
          $(elemid).trigger("click");
          $(".".concat(cl, "author-incr-").concat(i.toString())).val(data.authors[i - 1].join(", "));
        }
      } else if ($(".".concat(cl, "last1")).length > 0) {
        for (i = 0; data.authors && i < data.authors.length; i++) {
          if ($(".".concat(cl, "last").concat(i + 1)).length) {
            $(".".concat(cl, "last").concat(i + 1)).val(data.authors[i][0]);
            $(".".concat(cl, "first").concat(i + 1)).val(data.authors[i][1]);
          } else {
            coauthors = [];
            for (j = i; j < data.authors.length; j++) {
              coauthors.push(data.authors[j].join(", "));
            }
            $(".".concat(cl, "coauthors")).val(coauthors.join("; "));
            break;
          }
        }
      } else if ($(".".concat(cl, "author1")).length === 0) {
        const authors = [];
        for (i = 0; data.authors && i < data.authors.length; i++) {
          authors.push(data.authors[i].join(", "));
        }
        $(".".concat(cl, "authors")).val(authors.join("; "));
      } else {
        for (i = 0; data.authors && i < data.authors.length; i++) {
          if ($(".".concat(cl, "author").concat(i + 1)).length) {
            $(".".concat(cl, "author").concat(i + 1)).val(data.authors[i].join(", "));
          } else {
            coauthors = [];
            for (j = i; j < data.authors.length; j++) {
              coauthors.push(data.authors[j].join(", "));
            }
            $(".".concat(cl, "coauthors")).val(coauthors.join("; "));
            break;
          }
        }
      }
    }
    if (data.date) {
      try {
        const DT = new Date(data.date);
        if (/^\d{4}-\d{2}(-XX)?$/i.test(data.date)) {
          data.date = data.date.replace("-XX", "");
          $(".".concat(cl, "date")).val(CiteTB.formatDate(DT, false, true));
        } else if (/^\d{4}-\d{2}-\d{2}?/i.test(data.date)) {
          $(".".concat(cl, "date")).val(CiteTB.formatDate(DT, true, true));
        } else {
          $(".".concat(cl, "date")).val(data.date);
        }
      } catch {
      }
    } else {
      $(".".concat(cl, "date")).val(data.date);
    }
    switch (type) {
      case "pmid":
      case "doi":
        $(".".concat(cl, "journal")).val(data.journal);
        $(".".concat(cl, "volume")).val(data.volume);
        $(".".concat(cl, "issue")).val(data.issue);
        $(".".concat(cl, "pages")).val(data.pages);
        if (type === "pmid" && data.doi) {
          $(".".concat(cl, "doi")).val(data.doi);
        }
        break;
      case "isbn":
        $(".".concat(cl, "publisher")).val(data.publisher);
        $(".".concat(cl, "location")).val(data.location);
        $(".".concat(cl, "edition")).val(data.edition);
        break;
      case "url":
        $(".".concat(cl, "journal")).val(data.journal);
        $(".".concat(cl, "volume")).val(data.volume);
        $(".".concat(cl, "issue")).val(data.issue);
        $(".".concat(cl, "pages")).val(data.pages);
        $(".".concat(cl, "publisher")).val(data.publisher);
        $(".".concat(cl, "edition")).val(data.edition);
        $(".".concat(cl, "isbn")).val(data.isbn);
        $(".".concat(cl, "issn")).val(data.issn);
        $(".".concat(cl, "doi")).val(data.doi);
        if (data.language && data.language !== "en-US" && data.language !== "en-GB") {
          $(".".concat(cl, "language")).val(data.language);
        }
        $(".".concat(cl, "chapter")).val(data.chapter);
        break;
    }
  };
  CiteTB.incrementFields = function() {
    var _$$attr2;
    const template = CiteTB.getOpenTemplate();
    const [currentrow] = $(this).parents("tr");
    $(this).prev().css("width", "100%");
    $(this).detach();
    const elemid = (_$$attr2 = $(this).attr("id")) !== null && _$$attr2 !== void 0 ? _$$attr2 : "";
    const res = /^cite-incr-(.*?)-(.*)$/.exec(elemid);
    if (!res) {
      return;
    }
    const [, , group] = res;
    const increments = template.incrementables[group];
    const {
      fields
    } = increments;
    template.incrementables[group].val += 1;
    const trs = template.makeFormInner(fields, false);
    trs.reverse();
    var _iterator3 = _createForOfIteratorHelper(trs), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const tr = _step3.value;
        $(currentrow).after(tr);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  };
  CiteTB.fillAccessdate = function() {
    var _$$attr3;
    const elemid = (_$$attr3 = $(this).attr("id")) !== null && _$$attr3 !== void 0 ? _$$attr3 : "";
    const res = /^cite-date-(.*?)-(.*)$/.exec(elemid);
    const [, id] = res;
    if (!res) {
      return;
    }
    const [, , field] = res;
    const DT = /* @__PURE__ */ new Date();
    const datestr = CiteTB.formatDate(DT);
    $("#cite-".concat(id, "-").concat(field)).val(datestr);
    return false;
  };
  CiteTB.formatDate = (DT, useday, usemonth) => {
    if (useday === void 0) {
      useday = true;
    }
    if (usemonth === void 0) {
      usemonth = true;
    }
    let datestr = CiteTB.getOption("date format");
    let zmonth = "";
    let month = DT.getUTCMonth() + 1;
    if (month < 10) {
      zmonth = "0".concat(month.toString());
    } else {
      zmonth = month.toString();
    }
    month = month.toString();
    let zdate = "";
    let date = DT.getUTCDate();
    if (date < 10) {
      zdate = "0".concat(date.toString());
    } else {
      zdate = date.toString();
    }
    date = date.toString();
    if (useday) {
      datestr = datestr.replace("<date>", date);
      datestr = datestr.replace("<zdate>", zdate);
    } else {
      datestr = datestr.replace("<date>", "");
      datestr = datestr.replace("<zdate>", "");
    }
    if (usemonth) {
      datestr = datestr.replace("<month>", month);
      datestr = datestr.replace("<zmonth>", zmonth);
      datestr = datestr.replace("<monthname>", CiteTB.getOption("months")[DT.getUTCMonth()]);
    } else {
      datestr = datestr.replace("<month>", "");
      datestr = datestr.replace("<zmonth>", "");
      datestr = datestr.replace("<monthname>", "");
    }
    datestr = datestr.replace("<year>", DT.getUTCFullYear().toString());
    return datestr.replace(/^[ /\-,.]*(.*?)[ /\-,.]*$/g, "$1");
  };
  CiteTB.setupNamedRefs = () => {
    const names = [];
    let i;
    for (i = 0; i < CiteTB.mainRefList.length; i++) {
      if (!CiteTB.mainRefList[i].shorttag && CiteTB.mainRefList[i].refname) {
        names.push(CiteTB.mainRefList[i]);
      }
    }
    const stuff = $("<div>");
    $body.find("#citetoolbar-namedrefs").html(stuff);
    if (names.length === 0) {
      stuff.html(getMessage("cite-no-namedrefs"));
    } else {
      stuff.html(getMessage("cite-namedrefs-intro"));
      const select = $("<select>").attr("id", "cite-namedref-select");
      select.append($("<option>").attr("value", "").text(getMessage("cite-named-refs-dropdown")));
      for (i = 0; i < names.length; i++) {
        select.append($("<option>").text(names[i].refname));
      }
      stuff.after(select);
      select.before("<br>");
      const prevlabel = $("<div>").attr("id", "cite-nref-preview-label").css("display", "none").html(getMessage("cite-raw-preview"));
      select.after(prevlabel);
      prevlabel.before("<br><br>");
      prevlabel.after('<div id="cite-namedref-preview" style="padding:0.5em; font-size:110%" />');
      const parselabel = $("<span>").attr("id", "cite-parsed-label").css("display", "none").html(getMessage("cite-parsed-label"));
      $body.find("#cite-namedref-preview").after(parselabel);
      parselabel.after('<div id="cite-namedref-parsed" style="padding-bottom:0.5em; font-size:110%" />');
      const link = $("<a>").attr({
        href: "#",
        id: "cite-nref-parse"
      }).css({
        margin: "0 1em 0 1em",
        display: "none",
        color: "#00008b"
      });
      link.html(getMessage("cite-form-parse"));
      $body.find("#cite-namedref-parsed").after(link);
      $body.find("#cite-namedref-select").on("change", CiteTB.namedRefSelectClick);
      $body.find("#cite-nref-parse").on("click", CiteTB.nrefParseClick);
    }
  };
  CiteTB.fillNrefPreview = (parsed) => {
    $body.find("#cite-parsed-label").show();
    $body.find("#cite-namedref-parsed").html(parsed);
  };
  CiteTB.nrefParseClick = () => {
    const choice = $body.find("#cite-namedref-select").val();
    if (choice === "") {
      $body.find("#cite-parsed-label").hide();
      $body.find("#cite-namedref-parsed").text("");
      return false;
    }
    $body.find("#cite-nref-parse").hide();
    var _iterator4 = _createForOfIteratorHelper(CiteTB.mainRefList), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const ref = _step4.value;
        if (!ref.shorttag && ref.refname === choice) {
          CiteTB.parse(ref.content, CiteTB.fillNrefPreview);
          return false;
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  };
  CiteTB.lastnamedrefchoice = "";
  CiteTB.namedRefSelectClick = () => {
    const choice = $body.find("#cite-namedref-select").val();
    if (CiteTB.lastnamedrefchoice === choice) {
      return;
    }
    CiteTB.lastnamedrefchoice = choice;
    $body.find("#cite-parsed-label").hide();
    $body.find("#cite-namedref-parsed").text("");
    if (choice === "") {
      $body.find("#cite-nref-preview-label").hide();
      $body.find("#cite-namedref-preview").text("");
      $body.find("#cite-nref-parse").hide();
      return;
    }
    var _iterator5 = _createForOfIteratorHelper(CiteTB.mainRefList), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        const ref = _step5.value;
        if (!ref.shorttag && ref.refname === choice) {
          $body.find("#cite-nref-preview-label").show();
          $body.find("#cite-namedref-preview").text(ref.content);
          if (CiteTB.getOption("autoparse")) {
            CiteTB.nrefParseClick();
          } else {
            $body.find("#cite-nref-parse").show();
          }
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  };
  CiteTB.fillTemplatePreview = (text) => {
    const template = CiteTB.getOpenTemplate();
    const div = $("#citetoolbar-".concat(CiteTB.escStr(template.shortform)));
    div.find(".cite-prev-parsed-label").show();
    div.find(".cite-preview-parsed").html(text);
  };
  CiteTB.prevParseClick = () => {
    const ref = CiteTB.getRef(true, false);
    const template = CiteTB.getOpenTemplate();
    const div = $("#citetoolbar-".concat(CiteTB.escStr(template.shortform)));
    div.find(".cite-prev-parse").hide();
    CiteTB.parse(ref, CiteTB.fillTemplatePreview);
  };
  CiteTB.showHideExtra = () => {
    const template = CiteTB.getOpenTemplate();
    const div = $("#citetoolbar-".concat(CiteTB.escStr(template.shortform)));
    const setting = div.find(".cite-form-status").val();
    if (setting === "closed") {
      div.find(".cite-form-status").val("open");
      div.find(".cite-extra-fields").show(1, () => {
        div.find(".cite-extra-fields").css({
          width: "100%",
          "background-color": "transparent"
        });
      });
    } else {
      div.find(".cite-form-status").val("closed");
      div.find(".cite-extra-fields").hide();
    }
  };
  CiteTB.resetForm = () => {
    const template = CiteTB.getOpenTemplate();
    const div = $("#citetoolbar-".concat(CiteTB.escStr(template.shortform)));
    div.html(template.getForm());
  };
  CiteTB.getQuotedString = (s) => {
    const sq = /'/.test(s);
    const dq = /"/.test(s);
    if (!sq && !dq) {
      return '"'.concat(s, '"');
    } else if (!dq) {
      return '"'.concat(s, '"');
    } else if (!sq) {
      return "'".concat(s, "'");
    }
    s = s.replace(/"/g, "'");
    return '"'.concat(s, '"');
  };
  CiteTB.fixStr = (s) => {
    s = s.slice(0, 1).toUpperCase() + s.slice(1);
    s = s.replace("_", " ");
    return s;
  };
  CiteTB.escStr = (s) => {
    return s.replace(/\s/g, "-").replace(/'/g, "\\'").replace(/"/g, '\\"');
  };
  CiteTB.getOpenTemplate = () => {
    const dialogs = $body.find(".ui-dialog-content.ui-widget-content:visible");
    const templatename = $(dialogs[0]).find(".cite-template").val();
    return CiteTB.Templates[templatename];
  };
  CiteTB.displayErrors = (errors) => {
    $body.find("#cite-err-report").remove();
    const table = $("<table>").attr("id", "cite-err-report").css({
      width: "100%",
      border: "1px solid #A9A9A9",
      "background-color": "#FFEFD5",
      padding: "0.25em",
      "margin-top": "0.5em"
    });
    $body.find("#editpage-copywarn").before(table);
    let tr;
    const tr1 = $("<tr>").css("width", "100%");
    const th1 = $("<th>").css("width", "60%").css("font-size", "110%").html(getMessage("cite-err-report-heading"));
    const th2 = $("<th>").css("width", "40%").css("text-align", "right;");
    const im = $("<img>").attr("src", "https://youshou.wiki/images/thumb/5/55/Gtk-stop.svg/20px-Gtk-stop.svg.png");
    im.attr("alt", getMessage("cite-err-report-close")).attr("title", getMessage("cite-err-report-close"));
    const ad = $("<a>").attr({
      id: "cite-err-check-close",
      href: "#"
    });
    ad.append(im);
    th2.append(ad);
    tr1.append(th1).append(th2);
    table.append(tr1);
    $body.find("#cite-err-check-close").on("click", () => {
      $body.find("#cite-err-report").remove();
    });
    if (errors.length === 0) {
      tr = $("<tr>").css("width", "100%");
      const td = $("<td>").css("text-align", "center").css("margin", "1.5px").html(getMessage("cite-err-report-empty"));
      tr.append(td);
      table.append(tr);
      return;
    }
    for (const error in errors) {
      if (Object.hasOwn(errors, error)) {
        const err = errors[error];
        tr = $("<tr>").css("width", "100%");
        const td1 = $("<td>").css({
          border: "1px solid #000",
          margin: "1.5px",
          width: "60%"
        }).html(err.err);
        const td2 = $("<td>").css({
          border: "1px solid #000",
          margin: "1.5px",
          width: "40%"
        }).html(getMessage(err.msg));
        tr.append(td1).append(td2);
        table.append(tr);
      }
    }
  };
  refToolbarConfig();
};
//! src/Edittools-refToolbar/modules/RefToolbarBase.js
var refToolbarBase = () => {
  var _window;
  (_window = window).CiteTB || (_window.CiteTB = {
    Templates: {},
    // All templates
    Options: {},
    // Global options
    UserOptions: {},
    // User options
    DefaultOptions: {}
    // Script defaults
  });
  window.CiteTemplate = class CiteTemplate {
    constructor(templatename, shortform, basicfields, expandedfields) {
      this.templatename = templatename;
      this.shortform = shortform;
      this.basic = basicfields;
      this.extra = expandedfields;
      this.incrementables = {};
      CiteTB.Templates[this.templatename] = this;
    }
    makeFormInner(fields, incrsetup) {
      const trs = [];
      const autofills = [];
      let tr;
      var _iterator6 = _createForOfIteratorHelper(fields.entries()), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          const [i, fieldobj] = _step6.value;
          let {
            field
          } = fieldobj;
          let labelfield = fieldobj.field;
          let ad = false;
          let im;
          if (incrsetup && fieldobj.increment_group) {
            field = fieldobj.field.replace("<N>", "1");
            labelfield = fieldobj.field.replace("<N>", "");
            if (this.incrementables[fieldobj.increment_group] && !this.incrementables[fieldobj.increment_group].setup) {
              this.incrementables[fieldobj.increment_group].fields.push(fieldobj);
            } else if (!this.incrementables[fieldobj.increment_group]) {
              this.incrementables[fieldobj.increment_group] = {
                fields: [fieldobj],
                val: 1,
                setup: false
              };
            } else if (this.incrementables[fieldobj.increment_group] && this.incrementables[fieldobj.increment_group].setup) {
              this.incrementables[fieldobj.increment_group].val = 1;
            }
          } else if (fieldobj.increment_group) {
            const incrval = this.incrementables[fieldobj.increment_group].val;
            field = fieldobj.field.replace("<N>", incrval.toString());
            labelfield = fieldobj.field.replace("<N>", "");
          }
          const autodateFields = CiteTB.getOption("autodate fields");
          if (autodateFields.includes(field)) {
            im = $("<img>").attr("src", "https://youshou.wiki/images/thumb/7/7b/Nuvola_apps_date.svg/20px-Nuvola_apps_date.svg.png");
            im.attr("alt", getMessage("cite-insert-date")).attr("title", getMessage("cite-insert-date"));
            ad = $("<a>").attr("href", "#");
            ad.append(im);
            ad.attr("id", "cite-date-".concat(CiteTB.escStr(this.shortform), "-").concat(field));
            $(document).on("click", "#cite-date-".concat(CiteTB.escStr(this.shortform), "-").concat(field), CiteTB.fillAccessdate);
          }
          if (fieldobj.autofillid) {
            const autotype = fieldobj.autofillid;
            im = $("<img>").attr("src", "https://youshou.wiki/images/thumb/1/17/System-search.svg/20px-System-search.svg.png");
            im.attr("alt", getMessage("cite-autofill-alt")).attr("title", getMessage("cite-autofill-alt"));
            ad = $("<a>").attr("href", "#");
            ad.append(im);
            ad.attr("id", "cite-auto-".concat(CiteTB.escStr(this.shortform), "-").concat(field, "-").concat(autotype));
            autofills.push("#cite-auto-".concat(CiteTB.escStr(this.shortform), "-").concat(field, "-").concat(autotype));
          }
          if (fieldobj.increment_button) {
            const incrtype = fieldobj.increment_group;
            im = $("<img>").attr("src", "https://youshou.wiki/images/thumb/b/b9/Nuvola_action_edit_add.svg/20px-Nuvola_action_edit_add.svg.png");
            im.attr("alt", getMessage("cite-increment-alt")).attr("title", getMessage("cite-increment-alt"));
            ad = $("<a>").attr("href", "#");
            ad.append(im);
            ad.attr("id", "cite-incr-".concat(CiteTB.escStr(this.shortform), "-").concat(incrtype));
          }
          let display = getMessage("cite-".concat(labelfield, "-label"));
          if (typeof display !== "string") {
            display = fieldobj.label ? CiteTB.fixStr(fieldobj.label) : CiteTB.fixStr(labelfield);
          }
          const tooltip = fieldobj.tooltip ? $("<abbr>").attr("title", getMessage(fieldobj.tooltip)).html($("<sup>").text("?")) : false;
          let input = "";
          input = $("<input>").attr({
            tabindex: "1",
            style: ad ? "width: 85%" : "width: 100%",
            type: "text"
          });
          input.attr("id", "cite-".concat(CiteTB.escStr(this.shortform), "-").concat(field));
          if (fieldobj.autofillprop) {
            let classname = "cite-".concat(CiteTB.escStr(this.shortform), "-").concat(fieldobj.autofillprop);
            if (fieldobj.increment_group) {
              input.addClass("cite-".concat(CiteTB.escStr(this.shortform), "-incr-").concat(fieldobj.increment_group));
              classname += "-".concat(this.incrementables[fieldobj.increment_group].val.toString());
            }
            input.addClass(classname);
          }
          const label = $("<label>");
          label.attr("for", "cite-".concat(CiteTB.escStr(this.shortform), "-").concat(field)).text(display);
          if (tooltip) {
            label.append(tooltip);
          }
          let style = "text-align: right; width: 20%;";
          if (i % 2 === 1) {
            style += " padding-left: 1em;";
          } else {
            tr = $("<tr>");
          }
          const td1 = $("<td>").addClass("cite-form-td").attr({
            style
          });
          td1.append(label);
          tr.append(td1);
          const td2 = $("<td>").addClass("cite-form-td").css("width", "30%");
          td2.append(input);
          if (ad) {
            td2.append(ad);
          }
          tr.append(td2);
          if (i % 2 === 0) {
            trs.push(tr);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      let needsetup = false;
      for (const g in this.incrementables) {
        if (!this.incrementables[g].setup) {
          needsetup = true;
          $(document).on("click", "#cite-incr-".concat(CiteTB.escStr(this.shortform), "-").concat(g), CiteTB.incrementFields);
          this.incrementables[g].setup = true;
        }
      }
      if (needsetup || Object.keys(this.incrementables).length === 0) {
        var _iterator7 = _createForOfIteratorHelper(autofills), _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            const autofill = _step7.value;
            $(document).on("click", autofill, CiteTB.initAutofill);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
      return trs;
    }
    // gives a little bit of HTML so the open form can be identified
    getInitial() {
      const hidden = $("<input>").addClass("cite-template").attr({
        type: "hidden",
        value: this.templatename
      });
      return hidden;
    }
    // makes the form used in the dialog boxes
    getForm() {
      const main = $("<div>").addClass("cite-form-container");
      const form1 = $("<table>").addClass("cite-basic-fields").css({
        width: "100%",
        "background-color": "transparent"
      });
      let trs = this.makeFormInner(this.basic, true);
      var _iterator8 = _createForOfIteratorHelper(trs), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          const tr = _step8.value;
          form1.append(tr);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      const form2 = $("<table>").addClass("cite-extra-fields").css({
        width: "100%",
        "background-color": "transparent",
        display: "none"
      });
      trs = this.makeFormInner(this.extra, true);
      var _iterator9 = _createForOfIteratorHelper(trs), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          const tr = _step9.value;
          form2.append(tr);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      main.append(form1).append(form2);
      const form3 = $("<table>").addClass("cite-other-fields").css({
        width: "100%",
        "background-color": "transparent",
        "padding-top": "1em"
      });
      const $tr = $("<tr>");
      const $td1 = $("<td>").addClass("cite-form-td").css({
        "text-align": "right",
        width: "20%"
      });
      const $label1 = $("<label>");
      $label1.attr("for", "cite-".concat(CiteTB.escStr(this.shortform), "-name")).text(getMessage("cite-name-label"));
      $td1.append($label1);
      const td2 = $("<td>").addClass("cite-form-td").css("width", "30%");
      const input1 = $("<input>").attr({
        tabindex: "1",
        style: "width: 100%",
        type: "text"
      });
      input1.attr("id", "cite-".concat(CiteTB.escStr(this.shortform), "-name"));
      td2.append(input1);
      const td3 = $("<td>").addClass("cite-form-td").css({
        "text-align": "right",
        "padding-left": "1em",
        width: "20%"
      });
      const label2 = $("<label>");
      label2.attr("for", "cite-".concat(CiteTB.escStr(this.shortform), "-group")).text(getMessage("cite-group-label"));
      td3.append(label2);
      const td4 = $("<td>").addClass("cite-form-td").css("width", "30%");
      const input2 = $("<input>").attr({
        tabindex: "1",
        style: "width: 100%",
        type: "text"
      });
      input2.attr("id", "cite-".concat(CiteTB.escStr(this.shortform), "-group"));
      td4.append(input2);
      $tr.append($td1).append(td2).append(td3).append(td4);
      form3.append($tr);
      main.append(form3);
      const extras = $("<div>");
      extras.append($("<input>").addClass("cite-form-status").attr({
        type: "hidden",
        value: "closed"
      }));
      const hidden = $("<input>").addClass("cite-template").attr("type", "hidden");
      hidden.val(this.templatename);
      extras.append(hidden);
      const span1 = $("<span>").addClass("cite-preview-label").css("display", "none");
      span1.text(getMessage("cite-raw-preview"));
      extras.append(span1).append($("<div>").addClass("cite-ref-preview").css({
        padding: "0.5em",
        "font-size": "110%"
      }));
      const span2 = $("<span>").addClass("cite-prev-parsed-label").css("display", "none");
      span2.text(getMessage("cite-parsed-label"));
      extras.append(span2).append($("<div>").addClass("cite-preview-parsed").css({
        "padding-bottom": "0.5em",
        "font-size": "110%"
      }));
      const link = $("<a>").addClass("cite-prev-parse").attr("href", "#").css({
        margin: "0 1em",
        display: "none",
        color: "#00008b"
      });
      link.text(getMessage("cite-form-parse"));
      extras.append(link);
      main.append(extras);
      return main;
    }
  };
  $(document).find("head").trigger("reftoolbarbase");
};
//! src/Edittools-refToolbar/modules/messages.ts
var refToolbarMesages = () => {
  const {
    wgUserLanguage
  } = mw.config.get();
  if (wgUserLanguage === "en") {
    return;
  }
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(wgUserLanguage)) {
    mw.messages.set({
      "cite-section-label": "引用",
      "cite-template-list": "模板",
      "cite-named-refs-label": "同名文獻",
      "cite-named-refs-title": "插入同名文獻",
      "cite-named-refs-button": "已命名參考文獻",
      "cite-named-refs-dropdown": "同名文獻",
      // Used on the top of the named refs list dropsown
      "cite-dialog-base": "引用",
      "cite-form-submit": "插入",
      "cite-form-showhide": "顯示/隱藏額外區域",
      "cite-no-namedrefs": "在本頁找不到任何同名文獻",
      "cite-namedrefs-intro": "從列出的參考文獻目錄中選擇一個名字。點擊「插入」插入一個參考文獻到文本中。",
      "cite-raw-preview": "原始碼：",
      "cite-parsed-label": "解析後的原始碼：",
      "cite-form-parse": "顯示解析後的預覽",
      "cite-refpreview": "預覽",
      "cite-name-label": "ref名",
      "cite-group-label": "ref組",
      "cite-form-reset": "重設表單",
      "cite-loading": "載入數據",
      // Shown while pagetext is being downloaded from the API
      "cite-insert-date": "插入當前日期",
      // Alt/title text for "insert date" icon
      "cite-err-report-heading": "引用錯誤報告",
      // Heading for error report table
      "cite-err-report-close": "關閉",
      // Alt/title text for "close" icon on error report
      "cite-err-report-empty": "未找到錯誤",
      // Message displayed in the error report list if there are no errors
      "cite-autofill-alt": "自動填充",
      // Alt text for autofill button image
      "cite-ref-tooltip": "錨點的標識符（使該引用可以成為內部連結的目標）",
      "cite-postscript-tooltip": "如果設定這一參數，則覆蓋使用句點終止引文的默認行爲",
      "cite-dialog-web": "網頁引用",
      "cite-dialog-news": "新聞引用",
      "cite-dialog-book": "書籍引用",
      "cite-dialog-journal": "期刊引用",
      "cite-dialog-conference": "會議引用",
      "cite-dialog-encyclopedia": "百科全書引用",
      "cite-author-label": "作者",
      "cite-title-label": "標題",
      "cite-url-label": "網址",
      "cite-website-label": "網站名稱",
      "cite-work-label": "報紙或雜誌",
      "cite-agency-label": "通訊社",
      "cite-publisher-label": "出版者",
      "cite-accessdate-label": "存取日期",
      "cite-last-label": "姓",
      "cite-first-label": "名",
      "cite-authorlink-label": "作者條目",
      "cite-coauthors-label": "其他作者",
      "cite-location-label": "出版地",
      "cite-page-label": "所在頁",
      "cite-pages-label": "頁範圍",
      "cite-at-label": "書內部分",
      "cite-language-label": "語言",
      "cite-format-label": "文件格式",
      "cite-doi-label": "DOI",
      "cite-date-label": "日期",
      "cite-month-label": "月份",
      "cite-year-label": "年份",
      "cite-quote-label": "摘錄",
      "cite-newspaper-label": "新聞媒體",
      "cite-author2-label": "第2作者",
      "cite-author3-label": "第3作者",
      "cite-author4-label": "第4作者",
      "cite-author5-label": "第5作者",
      "cite-agency": "通訊社",
      "cite-issn-label": "ISSN",
      "cite-oclc-label": "OCLC",
      "cite-bibcode-label": "Bibcode",
      "cite-isbn-label": "ISBN",
      "cite-others-label": "譯者",
      "cite-edition-label": "版本",
      "cite-trans-title-label": "翻譯後標題",
      "cite-ref-label": "錨點標識符",
      "cite-postscript-label": "结尾符",
      "cite-series-label": "系列",
      "cite-volume-label": "卷",
      "cite-unified-label": "統一書號",
      "cite-chapter-label": "章節",
      "cite-journal-label": "雜誌/期刊",
      "cite-issue-label": "期",
      "cite-pmid-label": "PMID",
      "cite-editor-label": "編輯",
      "cite-editor1-first-label": "編輯名",
      "cite-editor1-last-label": "編輯姓",
      "cite-editor1-link-label": "編輯條目",
      "cite-editor-first-label": "編輯名",
      "cite-editor-last-label": "編輯姓",
      "cite-editor-link-label": "編輯條目",
      "cite-pmc-label": "PMC",
      "cite-id-label": "ID",
      "cite-laysummary-label": "簡明摘要",
      "cite-laysource-label": "簡明摘要來源",
      "cite-laydate-label": "簡明摘要日期",
      "cite-conference-label": "會議名稱",
      "cite-conferenceurl-label": "會議網址",
      "cite-booktitle-label": "論文集",
      "cite-encyclopedia-label": "百科全書名",
      "cite-authorlink-tooltip": "若該作者有條目，填寫條目名稱",
      "cite-at-tooltip": "內容在來源中的位置（當按頁碼引用不適當時）",
      "cite-accessdate-tooltip": "訪問這個引用來源時的日期",
      "cite-id-tooltip": "其他的文章編號",
      "cite-samecontent-desc": "檢查含有相同內容的多個參考文獻",
      "cite-samecontent-error": "多個參考文獻包含有相同內容",
      "cite-repeated-desc": "使用相同名字的多個參考文獻",
      "cite-repeated-error": "多個參考文獻使用了相同名字",
      "cite-undefined-desc": "未定義的參考文獻",
      "cite-undefined-error": "一個已命名的參考文獻已經使用但是沒有定義",
      "cite-work-tooltip": "刊登該作品的出版物的名稱。請不要使用斜體",
      "cite-newspaper-tooltip": "刊登該新聞的出版物名稱",
      "cite-series-tooltip": "當書籍是一系列出版品中的其中一部份時使用",
      "cite-unified-tooltip": "1980年代之前中國所使用的書籍編號",
      "cite-laysummary-tooltip": "該文獻相關的新聞報道的URL",
      "cite-laysource-tooltip": "該文獻相關的新聞報道的出處"
    });
  } else {
    mw.messages.set({
      "cite-section-label": "引用",
      "cite-template-list": "模板",
      "cite-named-refs-label": "同名文献",
      "cite-named-refs-title": "插入同名文献",
      "cite-named-refs-button": "已命名参考文献",
      "cite-named-refs-dropdown": "同名文献",
      // Used on the top of the named refs list dropsown
      "cite-dialog-base": "引用",
      "cite-form-submit": "插入",
      "cite-form-showhide": "显示/隐藏额外区域",
      "cite-no-namedrefs": "在本页找不到任何同名文献",
      "cite-namedrefs-intro": "从列出的参考文献目录中选择一个名字。点击“插入”插入一个参考文献到文本中。",
      "cite-raw-preview": "源代码：",
      "cite-parsed-label": "解析后的源代码：",
      "cite-form-parse": "显示解析后的预览",
      "cite-refpreview": "预览",
      "cite-name-label": "ref名",
      "cite-group-label": "ref组",
      "cite-form-reset": "重设表单",
      "cite-loading": "载入数据",
      // Shown while pagetext is being downloaded from the API
      "cite-insert-date": "插入当前日期",
      // Alt/title text for "insert date" icon
      "cite-err-report-heading": "引用错误报告",
      // Heading for error report table
      "cite-err-report-close": "关闭",
      // Alt/title text for "close" icon on error report
      "cite-err-report-empty": "未找到错误",
      // Message displayed in the error report list if there are no errors
      "cite-autofill-alt": "自动填充",
      // Alt text for autofill button image
      "cite-ref-tooltip": "锚点的标识符（使该引用可以成为内部链接的目标）",
      "cite-postscript-tooltip": "如果设定这一参数，则覆盖使用句点终止引文的默认行为",
      "cite-dialog-web": "网页引用",
      "cite-dialog-news": "新闻引用",
      "cite-dialog-book": "书籍引用",
      "cite-dialog-journal": "期刊引用",
      "cite-dialog-conference": "会议引用",
      "cite-dialog-encyclopedia": "百科全书引用",
      "cite-author-label": "作者",
      "cite-title-label": "标题",
      "cite-url-label": "网址",
      "cite-website-label": "网站名称",
      "cite-work-label": "报纸或杂志",
      "cite-agency-label": "通讯社",
      "cite-publisher-label": "出版者",
      "cite-accessdate-label": "访问日期",
      "cite-last-label": "姓",
      "cite-first-label": "名",
      "cite-authorlink-label": "作者条目",
      "cite-coauthors-label": "其他作者",
      "cite-location-label": "出版地",
      "cite-page-label": "所在页",
      "cite-pages-label": "页范围",
      "cite-at-label": "书内部分",
      "cite-language-label": "语言",
      "cite-format-label": "文档格式",
      "cite-doi-label": "DOI",
      "cite-date-label": "日期",
      "cite-month-label": "月份",
      "cite-year-label": "年份",
      "cite-quote-label": "摘录",
      "cite-newspaper-label": "新闻媒体",
      "cite-author2-label": "第2作者",
      "cite-author3-label": "第3作者",
      "cite-author4-label": "第4作者",
      "cite-author5-label": "第5作者",
      "cite-agency": "通讯社",
      "cite-issn-label": "ISSN",
      "cite-oclc-label": "OCLC",
      "cite-bibcode-label": "Bibcode",
      "cite-isbn-label": "ISBN",
      "cite-others-label": "译者",
      "cite-edition-label": "版本",
      "cite-trans-title-label": "翻译后标题",
      "cite-ref-label": "锚点标识符",
      "cite-postscript-label": "结尾符",
      "cite-series-label": "系列",
      "cite-volume-label": "卷",
      "cite-unified-label": "统一书号",
      "cite-chapter-label": "章节",
      "cite-journal-label": "杂志/期刊",
      "cite-issue-label": "期",
      "cite-pmid-label": "PMID",
      "cite-editor-label": "编辑",
      "cite-editor1-first-label": "编辑名",
      "cite-editor1-last-label": "编辑姓",
      "cite-editor1-link-label": "编辑条目",
      "cite-editor-first-label": "编辑名",
      "cite-editor-last-label": "编辑姓",
      "cite-editor-link-label": "编辑条目",
      "cite-pmc-label": "PMC",
      "cite-id-label": "ID",
      "cite-laysummary-label": "简明摘要",
      "cite-laysource-label": "简明摘要来源",
      "cite-laydate-label": "简明摘要日期",
      "cite-conference-label": "会议名称",
      "cite-conferenceurl-label": "会议网址",
      "cite-booktitle-label": "论文集",
      "cite-encyclopedia-label": "百科全书名",
      "cite-authorlink-tooltip": "若该作者有条目，填写条目名称",
      "cite-at-tooltip": "内容在来源中的位置（当按页码引用不适当时）",
      "cite-accessdate-tooltip": "访问这个引用来源时的日期",
      "cite-id-tooltip": "其他的文章编号",
      "cite-samecontent-desc": "检查含有相同内容的多个参考文献",
      "cite-samecontent-error": "多个参考文献包含有相同内容",
      "cite-repeated-desc": "使用相同名字的多个参考文献",
      "cite-repeated-error": "多个参考文献使用了相同名字",
      "cite-undefined-desc": "未定义的参考文献",
      "cite-undefined-error": "一个已命名的参考文献已经使用但是没有定义",
      "cite-work-tooltip": "刊登该作品的出版物的名称。请不要使用斜体",
      "cite-newspaper-tooltip": "刊登該新聞的出版物名称",
      "cite-series-tooltip": "当书籍是一系列出版品中的其中一部份时使用",
      "cite-unified-tooltip": "1980年代之前中国所使用的书籍编号",
      "cite-laysummary-tooltip": "该文献相关的新闻报道的URL",
      "cite-laysource-tooltip": "该文献相关的新闻报道的出处"
    });
  }
};
//! src/Edittools-refToolbar/Edittools-refToolbar.ts
(() => {
  const {
    wgAction,
    wgPageContentModel
  } = mw.config.get();
  if (!["edit", "submit"].includes(wgAction) || wgPageContentModel !== "wikitext") {
    return;
  }
  if (!mw.user.options.get("usebetatoolbar")) {
    return;
  }
  if (document.querySelector("textarea[name=wpTextbox1][readonly]")) {
    return;
  }
  refToolbarMesages();
  refToolbarBase();
  void (0, import_ext_gadget2.getBody)().then(refToolbar2);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgInNyYy9FZGl0dG9vbHMtcmVmVG9vbGJhci9FZGl0dG9vbHMtcmVmVG9vbGJhci50cyIsICJzcmMvRWRpdHRvb2xzLXJlZlRvb2xiYXIvbW9kdWxlcy91dGlsL2FwaS50cyIsICJzcmMvRWRpdHRvb2xzLXJlZlRvb2xiYXIvbW9kdWxlcy91dGlsL2dldE1lc3NhZ2UudHMiLCAic3JjL0VkaXR0b29scy1yZWZUb29sYmFyL21vZHVsZXMvUmVmVG9vbGJhckNvbmZpZy5qcyIsICJzcmMvRWRpdHRvb2xzLXJlZlRvb2xiYXIvbW9kdWxlcy9SZWZUb29sYmFyMi4wLmpzIiwgInNyYy9FZGl0dG9vbHMtcmVmVG9vbGJhci9tb2R1bGVzL1JlZlRvb2xiYXJCYXNlLmpzIiwgInNyYy9FZGl0dG9vbHMtcmVmVG9vbGJhci9tb2R1bGVzL21lc3NhZ2VzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzcuMScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI0IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzcuMS9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4wLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFua3MgdG8gSUU4IGZvciBpdHMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVjggfiBDaHJvbWUgMzYtXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMzM0XG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ3Byb3RvdHlwZScsIHtcbiAgICB2YWx1ZTogNDIsXG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pLnByb3RvdHlwZSAhPT0gNDI7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IFR5cGUoYXJndW1lbnQpIGlzIE9iamVjdGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc09iamVjdChhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJFN0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXREZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIEVYSVNUUyA9IGhhc093bihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKTtcbi8vIGFkZGl0aW9uYWwgcHJvdGVjdGlvbiBmcm9tIG1pbmlmaWVkIC8gbWFuZ2xlZCAvIGRyb3BwZWQgZnVuY3Rpb24gbmFtZXNcbnZhciBQUk9QRVIgPSBFWElTVFMgJiYgKGZ1bmN0aW9uIHNvbWV0aGluZygpIHsgLyogZW1wdHkgKi8gfSkubmFtZSA9PT0gJ3NvbWV0aGluZyc7XG52YXIgQ09ORklHVVJBQkxFID0gRVhJU1RTICYmICghREVTQ1JJUFRPUlMgfHwgKERFU0NSSVBUT1JTICYmIGdldERlc2NyaXB0b3IoRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJykuY29uZmlndXJhYmxlKSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFWElTVFM6IEVYSVNUUyxcbiAgUFJPUEVSOiBQUk9QRVIsXG4gIENPTkZJR1VSQUJMRTogQ09ORklHVVJBQkxFXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc3RvcmUuZ2V0ID0gc3RvcmUuZ2V0O1xuICBzdG9yZS5oYXMgPSBzdG9yZS5oYXM7XG4gIHN0b3JlLnNldCA9IHN0b3JlLnNldDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoc3RvcmUuaGFzKGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgc3RvcmUuc2V0KGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0KGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmhhcyhpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChoYXNPd24oaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkNPTkZJR1VSQUJMRTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG52YXIgQ09ORklHVVJBQkxFX0xFTkdUSCA9IERFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdsZW5ndGgnLCB7IHZhbHVlOiA4IH0pLmxlbmd0aCAhPT0gODtcbn0pO1xuXG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbnZhciBtYWtlQnVpbHRJbiA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBuYW1lLCBvcHRpb25zKSB7XG4gIGlmIChzdHJpbmdTbGljZSgkU3RyaW5nKG5hbWUpLCAwLCA3KSA9PT0gJ1N5bWJvbCgnKSB7XG4gICAgbmFtZSA9ICdbJyArIHJlcGxhY2UoJFN0cmluZyhuYW1lKSwgL15TeW1ib2xcXCgoW14pXSopXFwpLiokLywgJyQxJykgKyAnXSc7XG4gIH1cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZXR0ZXIpIG5hbWUgPSAnZ2V0ICcgKyBuYW1lO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNldHRlcikgbmFtZSA9ICdzZXQgJyArIG5hbWU7XG4gIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICduYW1lJywgeyB2YWx1ZTogbmFtZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIGVsc2UgdmFsdWUubmFtZSA9IG5hbWU7XG4gIH1cbiAgaWYgKENPTkZJR1VSQUJMRV9MRU5HVEggJiYgb3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2FyaXR5JykgJiYgdmFsdWUubGVuZ3RoICE9PSBvcHRpb25zLmFyaXR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkodmFsdWUsICdsZW5ndGgnLCB7IHZhbHVlOiBvcHRpb25zLmFyaXR5IH0pO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdjb25zdHJ1Y3RvcicpICYmIG9wdGlvbnMuY29uc3RydWN0b3IpIHtcbiAgICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICdwcm90b3R5cGUnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTtcbiAgICAvLyBpbiBWOCB+IENocm9tZSA1MywgcHJvdG90eXBlcyBvZiBzb21lIG1ldGhvZHMsIGxpa2UgYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgLCBhcmUgbm9uLXdyaXRhYmxlXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5wcm90b3R5cGUpIHZhbHVlLnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gIGlmICghaGFzT3duKHN0YXRlLCAnc291cmNlJykpIHtcbiAgICBzdGF0ZS5zb3VyY2UgPSBqb2luKFRFTVBMQVRFLCB0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZSAtLSByZXF1aXJlZFxuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbWFrZUJ1aWx0SW4oZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHRoaXMpICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59LCAndG9TdHJpbmcnKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucy5lbnVtZXJhYmxlO1xuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuICBpZiAoaXNDYWxsYWJsZSh2YWx1ZSkpIG1ha2VCdWlsdEluKHZhbHVlLCBuYW1lLCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVHbG9iYWxQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFvcHRpb25zLnVuc2FmZSkgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGVsc2UgaWYgKE9ba2V5XSkgc2ltcGxlID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6ICFvcHRpb25zLm5vbkNvbmZpZ3VyYWJsZSxcbiAgICAgIHdyaXRhYmxlOiAhb3B0aW9ucy5ub25Xcml0YWJsZVxuICAgIH0pO1xuICB9IHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBNYXRoLnRydW5jYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC50cnVuY1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtdHJ1bmMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uIHRydW5jKHgpIHtcbiAgdmFyIG4gPSAreDtcbiAgcmV0dXJuIChuID4gMCA/IGZsb29yIDogY2VpbCkobik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0cnVuYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXRoLXRydW5jJyk7XG5cbi8vIGBUb0ludGVnZXJPckluZmluaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2Vyb3JpbmZpbml0eVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIG51bWJlciA9ICthcmd1bWVudDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiB0cnVuYyhudW1iZXIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbGVuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCk7XG4gIHJldHVybiBsZW4gPiAwID8gbWluKGxlbiwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGV4Y2VwdGlvbnMpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpICYmICEoZXhjZXB0aW9ucyAmJiBoYXNPd24oZXhjZXB0aW9ucywga2V5KSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogaXNDYWxsYWJsZShkZXRlY3Rpb24pID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAgICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMuZG9udENhbGxHZXRTZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4gIG9wdGlvbnMubmFtZSAgICAgICAgICAgLSB0aGUgLm5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBrZXlcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gJiYgZ2xvYmFsW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09PSAnQXJyYXknO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIFNhZmFyaSA8IDEzIGRvZXMgbm90IHRocm93IGFuIGVycm9yIGluIHRoaXMgY2FzZVxudmFyIFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA9IERFU0NSSVBUT1JTICYmICFmdW5jdGlvbiAoKSB7XG4gIC8vIG1ha2VzIG5vIHNlbnNlIHdpdGhvdXQgcHJvcGVyIHN0cmljdCBtb2RlIHN1cHBvcnRcbiAgaWYgKHRoaXMgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkubGVuZ3RoID0gMTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPyBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIGlmIChpc0FycmF5KE8pICYmICFnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgJ2xlbmd0aCcpLndyaXRhYmxlKSB7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBzZXQgcmVhZCBvbmx5IC5sZW5ndGgnKTtcbiAgfSByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59IDogZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgc2V0QXJyYXlMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aCcpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIElOQ09SUkVDVF9UT19MRU5HVEggPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbXS5wdXNoLmNhbGwoeyBsZW5ndGg6IDB4MTAwMDAwMDAwIH0sIDEpICE9PSA0Mjk0OTY3Mjk3O1xufSk7XG5cbi8vIFY4IDw9IDEyMSBhbmQgU2FmYXJpIDw9IDE1LjQ7IEZGIDwgMjMgdGhyb3dzIEludGVybmFsRXJyb3Jcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTEyNjgxXG52YXIgcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLnB1c2goKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn07XG5cbnZhciBGT1JDRUQgPSBJTkNPUlJFQ1RfVE9fTEVOR1RIIHx8ICFwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGgoKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5wdXNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnB1c2hcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKGl0ZW0pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgYXJnQ291bnQgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihsZW4gKyBhcmdDb3VudCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdDb3VudDsgaSsrKSB7XG4gICAgICBPW2xlbl0gPSBhcmd1bWVudHNbaV07XG4gICAgICBsZW4rKztcbiAgICB9XG4gICAgc2V0QXJyYXlMZW5ndGgoTywgbGVuKTtcbiAgICByZXR1cm4gbGVuO1xuICB9XG59KTtcbiIsICJpbXBvcnQgJy4vRWRpdHRvb2xzLXJlZlRvb2xiYXIubGVzcyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3JlZlRvb2xiYXIyfSBmcm9tICcuL21vZHVsZXMvUmVmVG9vbGJhcjIuMCc7XG5pbXBvcnQge3JlZlRvb2xiYXJCYXNlfSBmcm9tICcuL21vZHVsZXMvUmVmVG9vbGJhckJhc2UnO1xuaW1wb3J0IHtyZWZUb29sYmFyTWVzYWdlc30gZnJvbSAnLi9tb2R1bGVzL21lc3NhZ2VzJztcblxuLyoqXG4gKiBSZWZUb29sYmFyXG4gKlxuICogQWRkcyB0b29scyBmb3IgY2l0aW5nIHJlZmVyZW5jZXMgdG8gdGhlIGVkaXQgdG9vbGJhci5cbiAqIE9uZSBvZiB0d28gcG9zc2libGUgdmVyc2lvbnMgd2lsbCBsb2FkIChSZWZ0b29sYmFyIDEuMCBvciBSZWZ0b29sYmFyIDEuMClcbiAqIGRlcGVuZGluZyBvbiB0aGUgdXNlciBwcmVmZXJlbmNlcyAodGhlIHVzZWJldGF0b29sYmFyIHByZWZlcmVuY2UpLlxuICpcbiAqIEBhdXRob3IgTXIuWi1tYW4sIEthbGRhcmlcbiAqL1xuKCgpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z1BhZ2VDb250ZW50TW9kZWx9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdC8vIE9ubHkgZXhlY3V0ZSB3aGVuIGVkaXRpbmcvcHJldmlld2luZyB3aWtpdGV4dCBwYWdlc1xuXHRpZiAoIVsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyh3Z0FjdGlvbikgfHwgd2dQYWdlQ29udGVudE1vZGVsICE9PSAnd2lraXRleHQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCFtdy51c2VyLm9wdGlvbnMuZ2V0KCd1c2ViZXRhdG9vbGJhcicpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV1bcmVhZG9ubHldJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBMb2FkIGxvY2FsIG1lc3NhZ2VzLlxuXHRyZWZUb29sYmFyTWVzYWdlcygpO1xuXHQvLyBMb2FkIG1haW4gZnVuY3Rpb25zXG5cdHJlZlRvb2xiYXJCYXNlKCk7XG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4ocmVmVG9vbGJhcjIpO1xufSkoKTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1JlZlRvb2xiYXIvMi4wJyk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJjb25zdCBnZXRNZXNzYWdlID0gKGtleTogc3RyaW5nLCAuLi5hcmdzOiBzdHJpbmdbXSk6IHN0cmluZyA9PiB7XG5cdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRyZXR1cm4gYXJncy5sZW5ndGggPyBtdy5tZXNzYWdlKGtleSwgLi4uYXJncykucGFyc2UoKSA6IG13Lm1lc3NhZ2Uoa2V5KS5wbGFpbigpO1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICIvKiBnbG9iYWwgQ2l0ZVRCICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UsIG5vLW5ldywgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50ICovXG4vLyBAdHMtbm9jaGVja1xuLyoqXG4gKiBTaXRld2lkZSBvcHRpb25zIGZvciB0aGUgdGhlIENpdGUgdG9vbGJhciBidXR0b246XG4gKiBBbGwgb3B0aW9ucyBzaG91bGQgYmUgc3BlY2lmaWVkXG4gKlxuICogXCJkYXRlIGZvcm1hdFwiIHNldHMgdGhlIGRhdGUgZm9ybWF0IHVzZWQgZm9yIHRoZSBmdW5jdGlvbiB0byBpbnNlcnQgdGhlIGN1cnJlbnQgZGF0ZVxuICogQ3VycmVudCBhdmFpbGFibGUgb3B0aW9uczpcbiAqIGRhdGUgLSB0aGUgZGF5IG9mIHRoZSBtb250aFxuICogemRhdGUgLSBkYXkgb2YgdGhlIG1vbnRoLCB6ZXJvIHBhZGRlZCB0byAyIGRpZ2l0c1xuICogbW9udGhuYW1lIC0gVGhlIG1vbnRoIG5hbWVcbiAqIG1vbnRoIC0gVGhlIG51bWJlcmljIG1vbnRoICgxLTEyKVxuICogem1vbnRoIC0gbnVtZXJpYyBtb250aCwgemVybyBwYWRkZWQgdG8gMiBkaWdpdHNcbiAqIHllYXIgLSBUaGUgZnVsbCB5ZWFyICg0IGRpZ2l0cylcbiAqXG4gKiBcImF1dG9kYXRlIGZpZWxkc1wiIGlzIGEgbGlzdCBvZiB0ZW1wbGF0ZSBmaWVsZHMgdGhhdCBzaG91bGQgaGF2ZSBhIGJ1dHRvbiB0byBpbnNlcnQgdGhlIGN1cnJlbnQgZGF0ZVxuICpcbiAqIFwibW9udGhzXCIgaXMgYSBsaXN0IG9mIGxvY2FsaXplZCBtb250aCBuYW1lc1xuICpcbiAqIFwibW9kYWxcIiAtIGlmIHRydWUsIHRoZSBkaWFsb2dzIHdpbGwgYmUgbW9kYWwgd2luZG93cywgYmxvY2tpbmcgYWNjZXNzIHRvIHRoZSByZXN0IG9mIHRoZSB3aW5kb3cuXG4gKiBBbGwgZGlhbG9ncyBpbiB0aGUgdG9vbGJhciBhcmUgbW9kYWwgYnkgZGVmYXVsdFxuICpcbiAqIFwiYXV0b3BhcnNlXCIgLSBpZiB0cnVlLCBwcmV2aWV3aW5nIGEgcmVmIHdpbGwgYXV0b21hdGljYWxseSB0cmlnZ2VyIGEgcHJldmlldyBvZiB0aGUgcGFyc2VkIHdpa2l0ZXh0LlxuICogSXQgaXMgbm90IHJlY29tbWVuZGVkIHRvIHNldCB0aGlzIHRvIHRydWUgYXMgYSBnbG9iYWwgc2V0dGluZyBhcyBpdCBtYXkgc2xvdyB0aGUgc2NyaXB0IGRvd24gZm9yXG4gKiBwZW9wbGUgd2l0aCBzbG93IGNvbm5lY3Rpb25zLlxuICpcbiAqIFwiZXhwYW5kdGVtcGxhdGVzXCIgLSBpZiB0cnVlLCB0ZW1wbGF0ZXMgYW5kIHBhcnNlciBmdW5jdGlvbnMgd2lsbCBiZSBleHBhbmRlZCB3aGVuIGdldHRpbmcgcGFnZSB0ZXh0XG4gKiAodGVtcGxhdGVzIGluc2lkZSBvZiByZWYgdGFncyB3aWxsIG5vdCBiZSBleHBhbmRlZCkuIFRoaXMgd2lsbCBhbGxvdyByZWZlcmVuY2VzIGluc2lkZSBvZiB0ZW1wbGF0ZXMgb3JcbiAqIHJlZmVyZW5jZXMgdXNpbmcge3sjdGFnOnJlZn19IHRvIGJlIGxpc3RlZCBpbiB0aGUgbmFtZWQgcmVmcyBkaWFsb2cgYW5kIHNlYXJjaGVkIGJ5IGVycm9yIGNoZWNrcy5cbiAqIFRoaXMgbWF5IHNsb3cgbG9hZGluZyB0aGUgbmFtZWQgcmVmcyBhbmQgZXJyb3IgY2hlY2sgZGlhbG9ncy5cbiAqL1xuY29uc3QgcmVmVG9vbGJhckNvbmZpZyA9ICgpID0+IHtcblx0Y29uc3Qge0NpdGVUZW1wbGF0ZX0gPSB3aW5kb3c7XG5cblx0Q2l0ZVRCLk9wdGlvbnMgPSB7XG5cdFx0J2RhdGUgZm9ybWF0JzogJzx5ZWFyPi08em1vbnRoPi08emRhdGU+Jyxcblx0XHQnYXV0b2RhdGUgZmllbGRzJzogWydhY2Nlc3NkYXRlJ10sXG5cdFx0bW9udGhzOiBbJzHmnIgnLCAnMuaciCcsICcz5pyIJywgJzTmnIgnLCAnNeaciCcsICc25pyIJywgJzfmnIgnLCAnOOaciCcsICc55pyIJywgJzEw5pyIJywgJzEx5pyIJywgJzEy5pyIJ10sXG5cdFx0bW9kYWw6IHRydWUsXG5cdFx0YXV0b3BhcnNlOiB0cnVlLFxuXHRcdGV4cGFuZHRlbXBsYXRlczogZmFsc2UsXG5cdH07XG5cblx0Ly8gQ2l0ZSB0ZW1wbGF0ZSBkZWZpbml0aW9uc1xuXHRuZXcgQ2l0ZVRlbXBsYXRlKFxuXHRcdCdjaXRlIHdlYicsXG5cdFx0J3dlYicsXG5cdFx0W1xuXHRcdFx0Ly8gQmFzaWMgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9yPE4+Jyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yX2FsdCcsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3RpdGxlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAndGl0bGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd1cmwnLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAndXJsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnd2Vic2l0ZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2pvdXJuYWwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwdWJsaXNoZXInLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwdWJsaXNoZXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhY2Nlc3NkYXRlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncmVmJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcmVmLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdC8vIEV4cGFuZGVkIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcmxpbms8Tj4nLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1hdXRob3JsaW5rLXRvb2x0aXAnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3JsaW5rJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFzdDxOPicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhc3QtaW5jcicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2ZpcnN0PE4+Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZmlyc3QtaW5jcicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcicsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xvY2F0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZScsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBhZ2UtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BhZ2VzJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAncGFnZXMnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1wYWdlcy10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYW5ndWFnZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2Zvcm1hdCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2RvaScsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICdkb2knLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdkb2knLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkYXRlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3F1b3RlJyxcblx0XHRcdH0sXG5cdFx0XVxuXHQpO1xuXHRuZXcgQ2l0ZVRlbXBsYXRlKFxuXHRcdCdjaXRlIG5ld3MnLFxuXHRcdCduZXdzJyxcblx0XHRbXG5cdFx0XHQvLyBCYXNpYyBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3I8Tj4nLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3JfYWx0Jyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndGl0bGUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICd0aXRsZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3VybCcsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICd1cmwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhY2Nlc3NkYXRlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnd29yaycsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXdvcmstdG9vbHRpcCcsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2pvdXJuYWwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhZ2VuY3knLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpc3N1ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3B1Ymxpc2hlcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3B1Ymxpc2hlcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2RhdGUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdkYXRlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncmVmJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcmVmLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdC8vIEV4cGFuZGVkIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcmxpbms8Tj4nLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1hdXRob3JsaW5rLXRvb2x0aXAnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3JsaW5rJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFzdDxOPicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhc3QtaW5jcicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2ZpcnN0PE4+Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZmlyc3QtaW5jcicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcicsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xvY2F0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZScsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBhZ2UtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BhZ2VzJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAncGFnZXMnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1wYWdlcy10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYW5ndWFnZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2Zvcm1hdCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2RvaScsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICdkb2knLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdkb2knLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdxdW90ZScsXG5cdFx0XHR9LFxuXHRcdF1cblx0KTtcblx0bmV3IENpdGVUZW1wbGF0ZShcblx0XHQnY2l0ZSBib29rJyxcblx0XHQnYm9vaycsXG5cdFx0W1xuXHRcdFx0Ly8gQmFzaWMgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9yPE4+Jyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yX2FsdCcsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2NvYXV0aG9ycycsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2NvYXV0aG9ycycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3RpdGxlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAndGl0bGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkYXRlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAneWVhcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3B1Ymxpc2hlcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3B1Ymxpc2hlcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xvY2F0aW9uJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbG9jYXRpb24nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpc2JuJyxcblx0XHRcdFx0LyogXCJhdXRvZmlsbGlkXCI6XCJpc2JuXCIsICovIGF1dG9maWxscHJvcDogJ2lzYm4nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwYWdlJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcGFnZS10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZXMnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwYWdlcycsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBhZ2VzLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0aW9uJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZWRpdGlvbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3VybCcsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICd1cmwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhY2Nlc3NkYXRlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncmVmJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcmVmLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdC8vIEV4cGFuZGVkIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhc3Q8Tj4nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYXN0LWluY3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3InLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmaXJzdDxOPicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2ZpcnN0LWluY3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3JsaW5rPE4+Jyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtYXV0aG9ybGluay10b29sdGlwJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9ybGluaycsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRvcjxOPi1sYXN0Jyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnZWRpdG9yJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdG9yPE4+LWZpcnN0Jyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnZWRpdG9yJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdG9yPE4+LWxpbmsnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdlZGl0b3JsaW5rJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYW5ndWFnZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2Zvcm1hdCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2NoYXB0ZXInLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdjaGFwdGVyJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncXVvdGUnLFxuXHRcdFx0fSxcblx0XHRdXG5cdCk7XG5cdG5ldyBDaXRlVGVtcGxhdGUoXG5cdFx0J2NpdGUgam91cm5hbCcsXG5cdFx0J2pvdXJuYWwnLFxuXHRcdFtcblx0XHRcdC8vIEJhc2ljIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcjxOPicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcl9hbHQnLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdjb2F1dGhvcnMnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdjb2F1dGhvcnMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd0aXRsZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3RpdGxlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnam91cm5hbCcsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2pvdXJuYWwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkYXRlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3ZvbHVtZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3ZvbHVtZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2lzc3VlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnaXNzdWUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwYWdlJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcGFnZS10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZXMnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwYWdlcycsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBhZ2VzLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkb2knLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAnZG9pJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZG9pJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncG1pZCcsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICdwbWlkJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndXJsJyxcblx0XHRcdFx0YXV0b2ZpbGxpZDogJ3VybCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2FjY2Vzc2RhdGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdyZWYnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1yZWYtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W1xuXHRcdFx0Ly8gRXhwYW5kZWQgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9ybGluazxOPicsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWF1dGhvcmxpbmstdG9vbHRpcCcsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcmxpbmsnLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYXN0PE4+Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFzdC1pbmNyJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZmlyc3Q8Tj4nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdmaXJzdC1pbmNyJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdG9yPE4+LWxhc3QnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdlZGl0b3InLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0b3I8Tj4tZmlyc3QnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdlZGl0b3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0b3I8Tj4tbGluaycsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2VkaXRvcmxpbmsnLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdzZXJpZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdCcsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWF0LXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd0cmFucy10aXRsZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3B1Ymxpc2hlcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3B1Ymxpc2hlcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xvY2F0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYW5ndWFnZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2Zvcm1hdCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2lzc24nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdpc3NuJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncG1jJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnb2NsYycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2JpYmNvZGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpZCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3F1b3RlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncG9zdHNjcmlwdCcsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBvc3RzY3JpcHQtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdF1cblx0KTtcblx0bmV3IENpdGVUZW1wbGF0ZShcblx0XHQnY2l0ZSBjb25mZXJlbmNlJyxcblx0XHQnY29uZmVyZW5jZScsXG5cdFx0W1xuXHRcdFx0Ly8gQmFzaWMgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9yJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnYXV0aG9yMScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2NvYXV0aG9ycycsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2NvYXV0aG9ycycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3RpdGxlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAndGl0bGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdjb25mZXJlbmNlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnY29uZmVyZW5jZXVybCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2Jvb2t0aXRsZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2pvdXJuYWwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkYXRlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3llYXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdtb250aCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3ZvbHVtZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3ZvbHVtZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3B1Ymxpc2hlcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3B1Ymxpc2hlcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xvY2F0aW9uJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbG9jYXRpb24nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpc2JuJyAvKiAsIFwiYXV0b2ZpbGxpZFwiOlwiaXNiblwiICovLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwYWdlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2RvaScsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICdkb2knLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdkb2knLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwbWlkJyxcblx0XHRcdFx0YXV0b2ZpbGxpZDogJ3BtaWQnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd1cmwnLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAndXJsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYWNjZXNzZGF0ZScsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWFjY2Vzc2RhdGUtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W1xuXHRcdFx0Ly8gRXhwYW5kZWQgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFzdCcsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhc3QxJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZmlyc3QnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdmaXJzdDEnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3JsaW5rJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtYXV0aG9ybGluay10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdG9yJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnb3RoZXJzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdGlvbicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2VkaXRpb24nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYW5ndWFnZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhbmd1YWdlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZm9ybWF0Jyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnaXNzbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ29jbGMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpZCcsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWlkLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdxdW90ZScsXG5cdFx0XHR9LFxuXHRcdF1cblx0KTtcblx0bmV3IENpdGVUZW1wbGF0ZShcblx0XHQnY2l0ZSBlbmN5Y2xvcGVkaWEnLFxuXHRcdCdlbmN5Y2xvcGVkaWEnLFxuXHRcdFtcblx0XHRcdC8vIEJhc2ljIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2F1dGhvcjEnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd0aXRsZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VuY3ljbG9wZWRpYScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3RpdGxlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndm9sdW1lJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAneWVhcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3llYXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwdWJsaXNoZXInLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwdWJsaXNoZXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsb2NhdGlvbicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xvY2F0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnaXNibicgLyogLCBcImF1dG9maWxsaWRcIjpcImlzYm5cIiAqLyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd1cmwnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdC8vIEV4cGFuZGVkIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhc3QnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYXN0MScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2ZpcnN0Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZmlyc3QxJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9ybGluaycsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWF1dGhvcmxpbmstdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2NvYXV0aG9ycycsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2NvYXV0aG9ycycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ290aGVycycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRpb24nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdlZGl0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnb2NsYycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2lkJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtaWQtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2FjY2Vzc2RhdGUnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1hY2Nlc3NkYXRlLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYW5ndWFnZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhbmd1YWdlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZm9ybWF0Jyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ21vbnRoJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncXVvdGUnLFxuXHRcdFx0fSxcblx0XHRdXG5cdCk7XG5cblx0Ly8gZXhlY3V0ZSBtYWluIGZ1bmN0aW9uXG5cdENpdGVUQi5pbml0KCk7XG59O1xuXG5leHBvcnQge3JlZlRvb2xiYXJDb25maWd9O1xuIiwgIi8qIGdsb2JhbCBDaXRlVEIgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudCAqL1xuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7YXBpfSBmcm9tICcuL3V0aWwvYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi91dGlsL2dldE1lc3NhZ2UnO1xuaW1wb3J0IHtyZWZUb29sYmFyQ29uZmlnfSBmcm9tICcuL1JlZlRvb2xiYXJDb25maWcnO1xuXG4vLyBUT0RPOiBtYWtlIGF1dG9kYXRlIGFuIG9wdGlvbiBpbiB0aGUgQ2l0ZVRlbXBsYXRlIG9iamVjdCwgbm90IGEgcHJlZmVyZW5jZVxuY29uc3QgcmVmVG9vbGJhcjIgPSAoJGJvZHkpID0+IHtcblx0Ly8gRGVmYXVsdCBvcHRpb25zLCB0aGVzZSBtYWlubHkgZXhpc3Qgc28gdGhlIHNjcmlwdCB3b24ndCBicmVhayBpZiBhIG5ldyBvcHRpb24gaXMgYWRkZWRcblx0Q2l0ZVRCLkRlZmF1bHRPcHRpb25zID0ge1xuXHRcdCdkYXRlIGZvcm1hdCc6ICc8eWVhcj4tPHptb250aD4tPHpkYXRlPicsXG5cdFx0J2F1dG9kYXRlIGZpZWxkcyc6IFtdLFxuXHRcdG1vbnRoczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuXHRcdG1vZGFsOiB0cnVlLFxuXHRcdGF1dG9wYXJzZTogZmFsc2UsXG5cdFx0ZXhwYW5kdGVtcGxhdGVzOiBmYWxzZSxcblx0fTtcblxuXHQvLyBHZXQgYW4gb3B0aW9uIC0gdXNlciBzZXR0aW5ncyBvdmVycmlkZSBnbG9iYWwgd2hpY2ggb3ZlcnJpZGUgZGVmYXVsdHNcblx0Q2l0ZVRCLmdldE9wdGlvbiA9IChvcHQpID0+IHtcblx0XHRpZiAoQ2l0ZVRCLlVzZXJPcHRpb25zW29wdF0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIENpdGVUQi5Vc2VyT3B0aW9uc1tvcHRdO1xuXHRcdH0gZWxzZSBpZiAoQ2l0ZVRCLk9wdGlvbnNbb3B0XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gQ2l0ZVRCLk9wdGlvbnNbb3B0XTtcblx0XHR9XG5cdFx0cmV0dXJuIENpdGVUQi5EZWZhdWx0T3B0aW9uc1tvcHRdO1xuXHR9O1xuXG5cdENpdGVUQi5pbml0ID0gKCkgPT4ge1xuXHRcdC8qIE1haW4gc3R1ZmYsIGJ1aWxkIHRoZSBhY3R1YWwgdG9vbGJhciBzdHJ1Y3R1cmVcblx0XHQgKiAxLiBnZXQgdGhlIHRlbXBsYXRlIGxpc3QsIG1ha2UgdGhlIGRyb3Bkb3duIGxpc3QgYW5kIHNldCB1cCB0aGUgdGVtcGxhdGUgZGlhbG9nIGJveGVzXG5cdFx0ICogMi4gYWN0dWFsbHkgYnVpbGQgdGhlIHRvb2xiYXI6XG5cdFx0ICogLSBBIHNlY3Rpb24gZm9yIGNpdGVzXG5cdFx0ICogLS0gZHJvcGRvd24gZm9yIHRoZSB0ZW1wbGF0ZXMgKHByZXZpb3VzbHkgZGVmaW5lZClcblx0XHQgKiAtLSBidXR0b24gZm9yIG5hbWVkIHJlZnMgd2l0aCBhIGRpYWxvZyBib3hcblx0XHQgKiAzLiBhZGQgdGhlIHdob2xlIHRoaW5nIHRvIHRoZSBtYWluIHRvb2xiYXJcblx0XHQgKi9cblxuXHRcdCQoZG9jdW1lbnQpLmZpbmQoJ2hlYWQnKS50cmlnZ2VyKCdyZWZ0b29sYmFyYmFzZScpO1xuXHRcdGNvbnN0ICR0YXJnZXQgPSAkYm9keS5maW5kKCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJyk7XG5cdFx0Y29uc3QgdGVtbGlzdCA9IHt9O1xuXHRcdGZvciAoY29uc3QgdCBpbiBDaXRlVEIuVGVtcGxhdGVzKSB7XG5cdFx0XHRpZiAoT2JqZWN0Lmhhc093bihDaXRlVEIuVGVtcGxhdGVzLCB0KSkge1xuXHRcdFx0XHRjb25zdCB0ZW0gPSBDaXRlVEIuVGVtcGxhdGVzW3RdO1xuXHRcdFx0XHRjb25zdCBzZm9ybSA9IENpdGVUQi5lc2NTdHIodGVtLnNob3J0Zm9ybSk7XG5cdFx0XHRcdGNvbnN0IGFjdGlvbm9iaiA9IHtcblx0XHRcdFx0XHR0eXBlOiAnZGlhbG9nJyxcblx0XHRcdFx0XHRtb2R1bGU6IGBjaXRlLWRpYWxvZy0ke3Nmb3JtfWAsXG5cdFx0XHRcdH07XG5cdFx0XHRcdGNvbnN0IGRpYWxvZ29iaiA9IHt9O1xuXHRcdFx0XHRkaWFsb2dvYmpbYGNpdGUtZGlhbG9nLSR7c2Zvcm19YF0gPSB7XG5cdFx0XHRcdFx0cmVzaXplbWU6IGZhbHNlLFxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtZWRpYXdpa2kvbXNnLWRvY1xuXHRcdFx0XHRcdHRpdGxlOiBtdy5tZXNzYWdlKGBjaXRlLWRpYWxvZy0ke3Nmb3JtfWApLnBhcnNlKCksXG5cdFx0XHRcdFx0aWQ6IGBjaXRldG9vbGJhci0ke3Nmb3JtfWAsXG5cdFx0XHRcdFx0aW5pdDogKCkgPT4ge30sXG5cdFx0XHRcdFx0aHRtbDogdGVtLmdldEluaXRpYWwoKSxcblx0XHRcdFx0XHRkaWFsb2c6IHtcblx0XHRcdFx0XHRcdHdpZHRoOiBNYXRoLnJvdW5kKCQod2luZG93KS53aWR0aCgpID8/IDAgKiAwLjgpLFxuXHRcdFx0XHRcdFx0b3BlbigpIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5odG1sKENpdGVUQi5nZXRPcGVuVGVtcGxhdGUoKS5nZXRGb3JtKCkpO1xuXHRcdFx0XHRcdFx0XHQvKiogQHBhcmFtIHtqUXVlcnkuRXZlbnR9IGUgKi9cblx0XHRcdFx0XHRcdFx0JGJvZHkuZmluZCgnLmNpdGUtcHJldi1wYXJzZScpLm9uKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdENpdGVUQi5wcmV2UGFyc2VDbGljaygpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRidXR0b25zOiB7XG5cdFx0XHRcdFx0XHRcdCdjaXRlLWZvcm0tc3VibWl0JygpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCByZWYgPSBDaXRlVEIuZ2V0UmVmKGZhbHNlLCB0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHRcdFx0XHRcdFx0XHQkLndpa2lFZGl0b3IubW9kdWxlcy50b29sYmFyLmZuLmRvQWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kYXRhKCdjb250ZXh0JyksXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwb3N0OiByZWYsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCdjaXRlLWZvcm0tc2hvd2hpZGUnOiBDaXRlVEIuc2hvd0hpZGVFeHRyYSxcblx0XHRcdFx0XHRcdFx0J2NpdGUtcmVmcHJldmlldycoKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgcmVmID0gQ2l0ZVRCLmdldFJlZihmYWxzZSwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRlbXBsYXRlID0gQ2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpdiA9ICQoYCNjaXRldG9vbGJhci0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX1gKTtcblx0XHRcdFx0XHRcdFx0XHRkaXYuZmluZCgnLmNpdGUtcHJldmlldy1sYWJlbCcpLnNob3coKTtcblx0XHRcdFx0XHRcdFx0XHRkaXYuZmluZCgnLmNpdGUtcmVmLXByZXZpZXcnKS50ZXh0KHJlZikuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChDaXRlVEIuZ2V0T3B0aW9uKCdhdXRvcGFyc2UnKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Q2l0ZVRCLnByZXZQYXJzZUNsaWNrKCk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGRpdi5maW5kKCcuY2l0ZS1wcmV2LXBhcnNlJykuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGl2LmZpbmQoJy5jaXRlLXByZXYtcGFyc2VkLWxhYmVsJykuaGlkZSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGl2LmZpbmQoJy5jaXRlLXByZXZpZXctcGFyc2VkJykuaHRtbCgnJyk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2lraWVkaXRvci10b29sYmFyLXRvb2wtbGluay1jYW5jZWwnKCkge1xuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnY2l0ZS1mb3JtLXJlc2V0JygpIHtcblx0XHRcdFx0XHRcdFx0XHRDaXRlVEIucmVzZXRGb3JtKCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH07XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0JHRhcmdldC53aWtpRWRpdG9yKCdhZGREaWFsb2cnLCBkaWFsb2dvYmopO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBUeXBlRXJyb3I6IHJhbmdlIGlzIG51bGwgKi9cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBpZiAoIUNpdGVUQi5nZXRPcHRpb24oJ21vZGFsJykpIHtcblx0XHRcdFx0Ly8gXHQkYm9keS5maW5kKGAjY2l0ZXRvb2xiYXItJHtzZm9ybX1gKS5kaWFsb2coJ29wdGlvbicsICdtb2RhbCcsIGZhbHNlKTtcblx0XHRcdFx0Ly8gfVxuXHRcdFx0XHR0ZW1saXN0W3Nmb3JtXSA9IHtcblx0XHRcdFx0XHRsYWJlbDogdGVtLnRlbXBsYXRlbmFtZSxcblx0XHRcdFx0XHRhY3Rpb246IGFjdGlvbm9iaixcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCByZWZzZWN0aW9uID0ge1xuXHRcdFx0c2VjdGlvbnM6IHtcblx0XHRcdFx0Y2l0ZXM6IHtcblx0XHRcdFx0XHR0eXBlOiAndG9vbGJhcicsXG5cdFx0XHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ2NpdGUtc2VjdGlvbi1sYWJlbCcpLFxuXHRcdFx0XHRcdGdyb3Vwczoge1xuXHRcdFx0XHRcdFx0dGVtcGxhdGU6IHtcblx0XHRcdFx0XHRcdFx0dG9vbHM6IHtcblx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ3NlbGVjdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnY2l0ZS10ZW1wbGF0ZS1saXN0JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0OiB0ZW1saXN0LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0bmFtZWRyZWZzOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdjaXRlLW5hbWVkLXJlZnMtbGFiZWwnKSxcblx0XHRcdFx0XHRcdFx0dG9vbHM6IHtcblx0XHRcdFx0XHRcdFx0XHRucmVmczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2RpYWxvZycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogJ2NpdGUtdG9vbGJhci1uYW1lZHJlZnMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdodHRwczovL3lvdXNob3Uud2lraS9pbWFnZXMvdGh1bWIvYi9iZS9OdXZvbGFfY2xpcGJvYXJkX2xpbmVkLnN2Zy8yMnB4LU51dm9sYV9jbGlwYm9hcmRfbGluZWQuc3ZnLnBuZycsXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWN0aW9uOiAnY2l0ZXMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0Z3JvdXA6ICduYW1lZHJlZnMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ2NpdGUtbmFtZWQtcmVmcy1idXR0b24nKSxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9O1xuXG5cdFx0Y29uc3QgZGVmYXVsdGRpYWxvZ3MgPSB7XG5cdFx0XHQnY2l0ZS10b29sYmFyLW5hbWVkcmVmcyc6IHtcblx0XHRcdFx0dGl0bGU6IG13Lm1lc3NhZ2UoJ2NpdGUtbmFtZWQtcmVmcy10aXRsZScpLnBhcnNlKCksXG5cdFx0XHRcdHJlc2l6ZW1lOiBmYWxzZSxcblx0XHRcdFx0aWQ6ICdjaXRldG9vbGJhci1uYW1lZHJlZnMnLFxuXHRcdFx0XHRodG1sOiBgPGRpdiBpZD1cImNpdGUtbmFtZWRyZWYtbG9hZGluZ1wiPiA8aW1nIHNyYz1cImh0dHBzOi8veW91c2hvdS53aWtpL2ltYWdlcy9iL2IxL0xvYWRpbmdfaWNvbi5naWZcIiAvPiAmbmJzcDske2dldE1lc3NhZ2UoXG5cdFx0XHRcdFx0J2NpdGUtbG9hZGluZydcblx0XHRcdFx0KX08L2Rpdj5gLFxuXHRcdFx0XHRpbml0OiAoKSA9PiB7fSxcblx0XHRcdFx0ZGlhbG9nOiB7XG5cdFx0XHRcdFx0d2lkdGg6IE1hdGgucm91bmQoJCh3aW5kb3cpLndpZHRoKCkgPz8gMCAqIDAuOCksXG5cdFx0XHRcdFx0b3BlbigpIHtcblx0XHRcdFx0XHRcdENpdGVUQi5sb2FkUmVmcygpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YnV0dG9uczoge1xuXHRcdFx0XHRcdFx0J2NpdGUtZm9ybS1zdWJtaXQnKCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCByZWZuYW1lID0gJGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtc2VsZWN0JykudmFsKCk7XG5cdFx0XHRcdFx0XHRcdGlmIChyZWZuYW1lID09PSAnJykge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHRcdFx0XHRcdFx0JC53aWtpRWRpdG9yLm1vZHVsZXMudG9vbGJhci5mbi5kb0FjdGlvbihcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRhdGEoJ2NvbnRleHQnKSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwb3N0OiBDaXRlVEIuZ2V0TmFtZWRSZWYocmVmbmFtZSwgdHJ1ZSksXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCd3aWtpZWRpdG9yLXRvb2xiYXItdG9vbC1saW5rLWNhbmNlbCcoKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9O1xuXG5cdFx0dHJ5IHtcblx0XHRcdCR0YXJnZXQud2lraUVkaXRvcignYWRkRGlhbG9nJywgZGVmYXVsdGRpYWxvZ3MpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0Ly8gZXJyb3Igb2NjdXJyZWQgc2V0dGluZyB1cCB3aWtpZWRpdG9yLlxuXHRcdH1cblx0XHQkYm9keS5maW5kKCcjY2l0ZXRvb2xiYXItbmFtZWRyZWZzJykub2ZmKCdkaWFsb2dvcGVuJyk7XG5cdFx0aWYgKCFDaXRlVEIuZ2V0T3B0aW9uKCdtb2RhbCcpKSB7XG5cdFx0XHQvLyAkYm9keS5maW5kKCcjY2l0ZXRvb2xiYXItbmFtZWRyZWZzJykuZGlhbG9nKCdvcHRpb24nLCAnbW9kYWwnLCBmYWxzZSk7XG5cdFx0XHRtdy51dGlsLmFkZENTUygnLnVpLXdpZGdldC1vdmVybGF5e2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50fScpO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0JHRhcmdldC53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCByZWZzZWN0aW9uKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdC8vIGVycm9yIG9jY3VycmVkIHNldHRpbmcgdXAgd2lraWVkaXRvci5cblx0XHR9XG5cdH07XG5cblx0Ly8gU2V0dXAgdGhlIG1haW4gb2JqZWN0XG5cdENpdGVUQi5tYWluUmVmTGlzdCA9IFtdO1xuXHRDaXRlVEIucmVmc0xvYWRlZCA9IGZhbHNlO1xuXG5cdC8vIFJFRiBGVU5DVElPTlNcblx0Ly8gQWN0dWFsbHkgYXNzZW1ibGUgYSByZWYgZnJvbSB1c2VyIGlucHV0XG5cdENpdGVUQi5nZXRSZWYgPSAoaW5uZXJvbmx5LCBmb3JpbnNlcnQpID0+IHtcblx0XHRsZXQgaSwgaiwgZywgZ3JvdXA7XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBDaXRlVEIuZ2V0T3BlblRlbXBsYXRlKCk7XG5cdFx0Y29uc3Qge3RlbXBsYXRlbmFtZX0gPSB0ZW1wbGF0ZTtcblx0XHRsZXQgcmVzID0gJyc7XG5cdFx0Y29uc3QgcmVmb2JqID0ge1xuXHRcdFx0c2hvcnR0YWc6IGZhbHNlLFxuXHRcdH07XG5cdFx0aWYgKCFpbm5lcm9ubHkpIHtcblx0XHRcdGdyb3VwID0gJChgI2NpdGUtJHtDaXRlVEIuZXNjU3RyKHRlbXBsYXRlLnNob3J0Zm9ybSl9LWdyb3VwYCkudmFsKCk7XG5cdFx0XHRsZXQgcmVmbmFtZSA9ICQoYCNjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfS1uYW1lYCkudmFsKCk7XG5cdFx0XHRyZXMgKz0gJzxyZWYnO1xuXHRcdFx0aWYgKHJlZm5hbWUpIHtcblx0XHRcdFx0cmVmbmFtZSA9IFN0cmluZyhyZWZuYW1lKS50cmltKCk7XG5cdFx0XHRcdHJlcyArPSBgIG5hbWU9JHtDaXRlVEIuZ2V0UXVvdGVkU3RyaW5nKHJlZm5hbWUpfWA7XG5cdFx0XHRcdHJlZm9iai5yZWZuYW1lID0gcmVmbmFtZTtcblx0XHRcdH1cblx0XHRcdGlmIChncm91cCkge1xuXHRcdFx0XHRncm91cCA9IFN0cmluZyhncm91cCkudHJpbSgpO1xuXHRcdFx0XHRyZXMgKz0gYCBncm91cD0ke0NpdGVUQi5nZXRRdW90ZWRTdHJpbmcoZ3JvdXApfWA7XG5cdFx0XHRcdHJlZm9iai5yZWZncm91cCA9IGdyb3VwO1xuXHRcdFx0fVxuXHRcdFx0cmVzICs9ICc+Jztcblx0XHR9XG5cdFx0bGV0IGNvbnRlbnQgPSBge3ske3RlbXBsYXRlbmFtZX1gO1xuXHRcdGZvciAoZyBpbiB0ZW1wbGF0ZS5pbmNyZW1lbnRhYmxlcykge1xuXHRcdFx0aWYgKE9iamVjdC5oYXNPd24odGVtcGxhdGUuaW5jcmVtZW50YWJsZXMsIGcpKSB7XG5cdFx0XHRcdGdyb3VwID0gdGVtcGxhdGUuaW5jcmVtZW50YWJsZXNbZ107XG5cdFx0XHRcdGZvciAoaSA9IDE7IGkgPD0gZ3JvdXAudmFsOyBpKyspIHtcblx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgZ3JvdXAuZmllbGRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBmaWVsZG5hbWUgPSBncm91cC5maWVsZHNbal0uZmllbGQ7XG5cdFx0XHRcdFx0XHRjb25zdCBmaWVsZGlkID0gZmllbGRuYW1lLnJlcGxhY2UoJzxOPicsIGkudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0XHRjb25zdCBmaWVsZCA9ICQoYCNjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfS0ke2ZpZWxkaWR9YCkudmFsKCk7XG5cdFx0XHRcdFx0XHRpZiAoZmllbGQpIHtcblx0XHRcdFx0XHRcdFx0Y29udGVudCArPSBgIHwke2ZpZWxkaWR9PWA7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgKz0gU3RyaW5nKGZpZWxkKS50cmltKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCB0ZW1wbGF0ZS5iYXNpYy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRlbXBsYXRlLmJhc2ljW2ldLmluY3JlbWVudF9ncm91cCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGZpZWxkbmFtZSA9IHRlbXBsYXRlLmJhc2ljW2ldLmZpZWxkO1xuXHRcdFx0Y29uc3QgZmllbGQgPSAkKGAjY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX0tJHtmaWVsZG5hbWV9YCkudmFsKCk7XG5cdFx0XHRpZiAoZmllbGQpIHtcblx0XHRcdFx0Y29udGVudCArPSBgIHwke2ZpZWxkbmFtZX09YDtcblx0XHRcdFx0Y29udGVudCArPSBTdHJpbmcoZmllbGQpLnRyaW0oKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCRib2R5LmZpbmQoJyNjaXRlLWZvcm0tc3RhdHVzJykudmFsKCkgIT09ICdjbG9zZWQnKSB7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGVtcGxhdGUuZXh0cmEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHRlbXBsYXRlLmV4dHJhW2ldLmluY3JlbWVudF9ncm91cCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGZpZWxkbmFtZSA9IHRlbXBsYXRlLmV4dHJhW2ldLmZpZWxkO1xuXHRcdFx0XHRjb25zdCBmaWVsZCA9ICQoYCNjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfS0ke2ZpZWxkbmFtZX1gKS52YWwoKTtcblx0XHRcdFx0aWYgKGZpZWxkKSB7XG5cdFx0XHRcdFx0Y29udGVudCArPSBgIHwke2ZpZWxkbmFtZX09YDtcblx0XHRcdFx0XHRjb250ZW50ICs9IFN0cmluZyhmaWVsZCkudHJpbSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnRlbnQgKz0gJ319Jztcblx0XHRyZXMgKz0gY29udGVudDtcblx0XHRyZWZvYmouY29udGVudCA9IGNvbnRlbnQ7XG5cdFx0aWYgKCFpbm5lcm9ubHkpIHtcblx0XHRcdHJlcyArPSAnPC9yZWY+Jztcblx0XHR9XG5cdFx0aWYgKGZvcmluc2VydCkge1xuXHRcdFx0Q2l0ZVRCLm1haW5SZWZMaXN0LnB1c2gocmVmb2JqKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcztcblx0fTtcblxuXHQvLyBNYWtlIGEgcmVmZXJlbmNlIHRvIGEgbmFtZWQgcmVmXG5cdENpdGVUQi5nZXROYW1lZFJlZiA9IChyZWZuYW1lLCBmb3JpbnNlcnQpID0+IHtcblx0XHRpZiAoZm9yaW5zZXJ0KSB7XG5cdFx0XHRDaXRlVEIubWFpblJlZkxpc3QucHVzaCh7XG5cdFx0XHRcdHNob3J0dGFnOiB0cnVlLFxuXHRcdFx0XHRyZWZuYW1lLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiBgPHJlZiBuYW1lPSR7Q2l0ZVRCLmdldFF1b3RlZFN0cmluZyhyZWZuYW1lKX0gLz5gO1xuXHR9O1xuXG5cdC8vIEZ1bmN0aW9uIHRvIGxvYWQgdGhlIHJlZiBsaXN0XG5cdENpdGVUQi5sb2FkUmVmcyA9ICgpID0+IHtcblx0XHRpZiAoQ2l0ZVRCLnJlZnNMb2FkZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Q2l0ZVRCLmdldFBhZ2VUZXh0KENpdGVUQi5sb2FkUmVmc0ludGVybmFsKTtcblx0fTtcblxuXHQvLyBGdW5jdGlvbiB0aGF0IGFjdHVhbGx5IGxvYWRzIHRoZSBsaXN0IGZyb20gdGhlIHBhZ2UgdGV4dFxuXHRDaXRlVEIubG9hZFJlZnNJbnRlcm5hbCA9ICh0ZXh0KSA9PiB7XG5cdFx0Ly8gV2hhdCB0aGlzIGRvZXM6ICAgICAgICAgICAgIGV4dHJhY3QgZmlyc3QgbmFtZS9ncm91cCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYWN0IHNlY29uZCBuYW1lL2dyb3VwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvcnR0YWcgICBpbm5lciBjb250ZW50XG5cdFx0Y29uc3QgcmVmc3JlZ2V4ID1cblx0XHRcdC88ICpyZWYoPzogKyhuYW1lfGdyb3VwKSAqPSAqKD86XCIoW15cIl0qPylcInwnKFteJ10qPyknfChbXiAnXCIvPl0qPykpICopPyAqKD86ICsobmFtZXxncm91cCkgKj0gKig/OlwiKFteXCJdKj8pXCJ8JyhbXiddKj8pJ3woW14gJ1wiLz5dKj8pKSAqKT8gKig/OlxcLyAqPnw+KCg/Oi58XFxuKSo/KTwgKlxcLyAqcmVmICo+KS9naW07XG5cdFx0Ly8gVGhpcyBzaG91bGQgd29yayByZWdhcmRsZXNzIG9mIHRoZSBxdW90aW5nIHVzZWQgZm9yIG5hbWVzL2dyb3VwcyBhbmQgZm9yIGxpbmVicmVha3MgaW4gdGhlIGlubmVyIGNvbnRlbnRcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0Y29uc3QgcmVmID0gcmVmc3JlZ2V4LmV4ZWModGV4dCk7XG5cdFx0XHRpZiAocmVmID09PSBudWxsKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVmb2JqID0ge307XG5cdFx0XHRpZiAocmVmWzldKSB7XG5cdFx0XHRcdC8vIENvbnRlbnQgKyBzaG9ydCB0YWcgY2hlY2tcblx0XHRcdFx0Ly8gbXcubm90aWZ5KGBcIiR7cmVmWzldfVwiYCwge3RhZzogJ1JlZlRvb2xiYXIyLjAnLCB0eXBlOiAnd2Fybid9KTtcblx0XHRcdFx0WywgLCAsICwgLCAsICwgLCAsIHJlZm9iai5jb250ZW50XSA9IHJlZjtcblx0XHRcdFx0cmVmb2JqLnNob3J0dGFnID0gZmFsc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZWZvYmouc2hvcnR0YWcgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHJlZlsxXSAhPT0gJycpIHtcblx0XHRcdFx0Ly8gRmlyc3QgbmFtZS9ncm91cFxuXHRcdFx0XHRpZiAocmVmWzJdKSB7XG5cdFx0XHRcdFx0WywgLCByZWZvYmpbYHJlZiR7cmVmWzFdfWBdXSA9IHJlZjtcblx0XHRcdFx0fSBlbHNlIGlmIChyZWZbM10pIHtcblx0XHRcdFx0XHRbLCAsICwgcmVmb2JqW2ByZWYke3JlZlsxXX1gXV0gPSByZWY7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0WywgLCAsICwgcmVmb2JqW2ByZWYke3JlZlsxXX1gXV0gPSByZWY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChyZWZbNV0gIT09ICcnKSB7XG5cdFx0XHRcdC8vIFNlY29uZCBuYW1lL2dyb3VwXG5cdFx0XHRcdGlmIChyZWZbNl0pIHtcblx0XHRcdFx0XHRbLCAsICwgLCAsICwgcmVmb2JqW2ByZWYke3JlZls1XX1gXV0gPSByZWY7XG5cdFx0XHRcdH0gZWxzZSBpZiAocmVmWzddKSB7XG5cdFx0XHRcdFx0WywgLCAsICwgLCAsICwgcmVmb2JqW2ByZWYke3JlZls1XX1gXV0gPSByZWY7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0WywgLCAsICwgLCAsICwgLCByZWZvYmpbYHJlZiR7cmVmWzVdfWBdXSA9IHJlZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Q2l0ZVRCLm1haW5SZWZMaXN0LnB1c2gocmVmb2JqKTtcblx0XHR9XG5cdFx0Q2l0ZVRCLnJlZnNMb2FkZWQgPSB0cnVlO1xuXHRcdENpdGVUQi5zZXR1cE5hbWVkUmVmcygpO1xuXHR9O1xuXG5cdC8vIEFKQVggRlVOQ1RJT05TXG5cdC8vIFBhcnNlIHNvbWUgd2lraXRleHQgYW5kIGhhbmQgaXQgb2ZmIHRvIGEgY2FsbGJhY2sgZnVuY3Rpb25cblx0Q2l0ZVRCLnBhcnNlID0gKHRleHQsIGNhbGxiYWNrKSA9PiB7XG5cdFx0Y29uc3QgcG9zdGRhdGEgPSB7XG5cdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHR0aXRsZTogbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLFxuXHRcdFx0dGV4dCxcblx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdH07XG5cdFx0YXBpLnBvc3QocG9zdGRhdGEpLnRoZW4oKHtwYXJzZX0pID0+IHtcblx0XHRcdGNvbnN0IGh0bWwgPSBwYXJzZS50ZXh0O1xuXHRcdFx0Y2FsbGJhY2soaHRtbCk7XG5cdFx0fSk7XG5cdH07XG5cblx0Ly8gVXNlIHRoZSBBUEkgdG8gZXhwYW5kIHRlbXBsYXRlcyBvbiBzb21lIHRleHRcblx0Q2l0ZVRCLmV4cGFuZHRlbXBsYXRlcyA9ICh0ZXh0LCBjYWxsYmFjaykgPT4ge1xuXHRcdGNvbnN0IHBvc3RkYXRhID0ge1xuXHRcdFx0YWN0aW9uOiAnZXhwYW5kdGVtcGxhdGVzJyxcblx0XHRcdHRpdGxlOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHR0ZXh0LFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0fTtcblx0XHRhcGkucG9zdChwb3N0ZGF0YSkudGhlbigoe2V4cGFuZHRlbXBsYXRlc30pID0+IHtcblx0XHRcdGNvbnN0IHJlc3RleHQgPSBleHBhbmR0ZW1wbGF0ZXMud2lraXRleHQ7XG5cdFx0XHRjYWxsYmFjayhyZXN0ZXh0KTtcblx0XHR9KTtcblx0fTtcblxuXHQvLyBGdW5jdGlvbiB0byBnZXQgdGhlIHBhZ2UgdGV4dFxuXHRDaXRlVEIuZ2V0UGFnZVRleHQgPSAoY2FsbGJhY2spID0+IHtcblx0XHRjb25zdCBzZWN0aW9uID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cFNlY3Rpb25dJykudmFsKCk7XG5cdFx0aWYgKHNlY3Rpb24gPT09ICcnKSB7XG5cdFx0XHRpZiAoQ2l0ZVRCLmdldE9wdGlvbignZXhwYW5kdGVtcGxhdGVzJykpIHtcblx0XHRcdFx0Q2l0ZVRCLmV4cGFuZHRlbXBsYXRlcyhcblx0XHRcdFx0XHQkYm9keS5maW5kKCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykud2lraUVkaXRvcignZ2V0Q29udGVudHMnKS50ZXh0KCksXG5cdFx0XHRcdFx0Y2FsbGJhY2tcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNhbGxiYWNrKCRib2R5LmZpbmQoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKS53aWtpRWRpdG9yKCdnZXRDb250ZW50cycpLnRleHQoKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHt3Z0FydGljbGVJZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdFx0XHRjb25zdCBwb3N0ZGF0YSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0XHRcdHBhZ2VpZHM6IHdnQXJ0aWNsZUlkLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0fTtcblx0XHRcdGlmIChDaXRlVEIuZ2V0T3B0aW9uKCdleHBhbmR0ZW1wbGF0ZXMnKSkge1xuXHRcdFx0XHRwb3N0ZGF0YS5ydmV4cGFuZHRlbXBsYXRlcyA9ICcxJztcblx0XHRcdH1cblx0XHRcdGFwaS5nZXQocG9zdGRhdGEpLnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRcdFx0Y29uc3QgcGFnZXRleHQgPSBxdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uY29udGVudDtcblx0XHRcdFx0Y2FsbGJhY2socGFnZXRleHQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIFNhZmUgdmVyc2lvbiBvZiBkZWNvZGVVUklDb21wb25lbnQoKSB0aGF0IGRvZXNuJ3QgdGhyb3cgZXhjZXB0aW9ucy5cblx0Ly8gSWYgdGhlIG5hdGl2ZSBkZWNvZGVVUklDb21wb25lbnQoKSB0aHJldyBhbiBleGNlcHRpb24sIHRoZSBvcmlnaW5hbCBzdHJpbmcgd2lsbCBiZSByZXR1cm5lZC5cblx0Q2l0ZVRCLnNhZmVEZWNvZGVVUklDb21wb25lbnQgPSAocykgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRzID0gZGVjb2RlVVJJQ29tcG9uZW50KHMpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0LyogZW1wdHkgKi9cblx0XHR9XG5cdFx0cmV0dXJuIHM7XG5cdH07XG5cblx0Ly8gQXV0b2ZpbGwgYSB0ZW1wbGF0ZSBmcm9tIGFuIElEIChJU0JOLCBET0ksIFBNSUQsIFVSTClcblx0Q2l0ZVRCLmluaXRBdXRvZmlsbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBlbGVtaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJykgPz8gJyc7XG5cdFx0Y29uc3QgcmVzID0gL15jaXRlLWF1dG8tKC4qPyktKC4qKS0oLiopJC8uZXhlYyhlbGVtaWQpO1xuXHRcdGlmICghcmVzKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IFssIHRlbSwgZmllbGQsIGF1dG90eXBlXSA9IHJlcztcblx0XHRsZXQgaWQgPSAkKGAjY2l0ZS0ke3RlbX0tJHtmaWVsZH1gKS52YWwoKTtcblx0XHRpZiAoIWlkKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGxldCB1cmwgPSAnaHR0cHM6Ly9jaXRvaWQucWl1d2VuLm5ldC5jbi9sb29rdXAucGhwPyc7XG5cdFx0Ly8gQ2l0b2lkIGV4cGVjdHMgbWluaW1hbGx5IGVuY29kZWQgaW5wdXQsIHNvIGRvIHNvbWUgc3BlY3VsYXRpdmUgZGVjb2RpbmcgaGVyZSB0byBhdm9pZFxuXHRcdC8vIDQwNCBmZXRjaGVzLiBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvVDE0NjUzOVxuXHRcdGlkID0gQ2l0ZVRCLnNhZmVEZWNvZGVVUklDb21wb25lbnQoaWQpO1xuXHRcdHVybCArPSBgJHthdXRvdHlwZX09JHtlbmNvZGVVUklDb21wb25lbnQoaWQpfWA7XG5cdFx0dXJsICs9IGAmdGVtcGxhdGU9JHtlbmNvZGVVUklDb21wb25lbnQodGVtKX1gO1xuXHRcdGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRzLnNldEF0dHJpYnV0ZSgnc3JjJywgdXJsKTtcblx0XHRzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZChzKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblx0Ly8gQ2FsbGJhY2sgZm9yIGF1dG9maWxsXG5cdC8vIFRPRE86IEF1dG9maWxsIHRoZSBVUkwsIGF0IGxlYXN0IGZvciBET0lcblx0Q2l0ZVRCLmF1dG9GaWxsID0gKGRhdGEsIHRlbXBsYXRlLCB0eXBlKSA9PiB7XG5cdFx0Y29uc3QgY2wgPSBgY2l0ZS0ke3RlbXBsYXRlfS1gO1xuXHRcdGxldCBpLCBqO1xuXHRcdGxldCBjb2F1dGhvcnM7XG5cdFx0JChgLiR7Y2x9dGl0bGVgKS52YWwoZGF0YS50aXRsZSk7XG5cdFx0Ly8gRmlsbCBpbiBhdXRob3JzXG5cdFx0aWYgKGRhdGEuYXV0aG9ycyAmJiBkYXRhLmF1dGhvcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0aWYgKCQoYC4ke2NsfWxhc3QtaW5jci0xYCkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRjb25zdCBjbGFzc2VzID0gJChgLiR7Y2x9bGFzdC1pbmNyLTFgKS5lcSgwKS5hdHRyKCdjbGFzcycpPy5zcGxpdCgvXFxzKy8pO1xuXHRcdFx0XHRpZiAoIWNsYXNzZXMpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IGdyb3VwID0gZmFsc2U7XG5cdFx0XHRcdGNvbnN0IHBhdHQgPSAvY2l0ZS1bXi1dKj8taW5jci0oLiopLztcblx0XHRcdFx0Zm9yIChjb25zdCBjbGFzc18gb2YgY2xhc3Nlcykge1xuXHRcdFx0XHRcdGlmIChwYXR0LmV4ZWMoY2xhc3NfKSkge1xuXHRcdFx0XHRcdFx0WywgZ3JvdXBdID0gcGF0dC5leGVjKGNsYXNzXyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0JChgLiR7Y2x9bGFzdC1pbmNyLTFgKS52YWwoZGF0YS5hdXRob3JzWzBdWzBdKTtcblx0XHRcdFx0JChgLiR7Y2x9Zmlyc3QtaW5jci0xYCkudmFsKGRhdGEuYXV0aG9yc1swXVsxXSk7XG5cdFx0XHRcdGNvbnN0IGVsZW1pZCA9IGAjY2l0ZS1pbmNyLSR7dGVtcGxhdGV9LSR7Z3JvdXB9YDtcblx0XHRcdFx0Zm9yIChpID0gMjsgaSA8IGRhdGEuYXV0aG9ycy5sZW5ndGggKyAxOyBpKyspIHtcblx0XHRcdFx0XHQkKGVsZW1pZCkudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0XHQkKGAuJHtjbH1sYXN0LWluY3ItJHtpLnRvU3RyaW5nKCl9YCkudmFsKGRhdGEuYXV0aG9yc1tpIC0gMV1bMF0pO1xuXHRcdFx0XHRcdCQoYC4ke2NsfWZpcnN0LWluY3ItJHtpLnRvU3RyaW5nKCl9YCkudmFsKGRhdGEuYXV0aG9yc1tpIC0gMV1bMV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCQoYC4ke2NsfWF1dGhvci1pbmNyLTFgKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNvbnN0IGNsYXNzZXMgPSAkKGAuJHtjbH1hdXRob3ItaW5jci0xYCkuZXEoMCkuYXR0cignY2xhc3MnKT8uc3BsaXQoL1xccysvKTtcblx0XHRcdFx0aWYgKCFjbGFzc2VzKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBncm91cCA9IGZhbHNlO1xuXHRcdFx0XHRjb25zdCBwYXR0ID0gL2NpdGUtW14tXSo/LWluY3ItKC4qKS87XG5cdFx0XHRcdGZvciAoY29uc3QgY2xhc3NfIG9mIGNsYXNzZXMpIHtcblx0XHRcdFx0XHRpZiAocGF0dC5leGVjKGNsYXNzXykpIHtcblx0XHRcdFx0XHRcdFssIGdyb3VwXSA9IHBhdHQuZXhlYyhjbGFzc18pO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdCQoYC4ke2NsfWF1dGhvci1pbmNyLTFgKS52YWwoZGF0YS5hdXRob3JzWzBdLmpvaW4oJywgJykpO1xuXHRcdFx0XHRjb25zdCBlbGVtaWQgPSBgI2NpdGUtaW5jci0ke3RlbXBsYXRlfS0ke2dyb3VwfWA7XG5cdFx0XHRcdGZvciAoaSA9IDI7IGkgPCBkYXRhLmF1dGhvcnMubGVuZ3RoICsgMTsgaSsrKSB7XG5cdFx0XHRcdFx0JChlbGVtaWQpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdFx0JChgLiR7Y2x9YXV0aG9yLWluY3ItJHtpLnRvU3RyaW5nKCl9YCkudmFsKGRhdGEuYXV0aG9yc1tpIC0gMV0uam9pbignLCAnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoJChgLiR7Y2x9bGFzdDFgKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGRhdGEuYXV0aG9ycyAmJiBpIDwgZGF0YS5hdXRob3JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKCQoYC4ke2NsfWxhc3Qke2kgKyAxfWApLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0JChgLiR7Y2x9bGFzdCR7aSArIDF9YCkudmFsKGRhdGEuYXV0aG9yc1tpXVswXSk7XG5cdFx0XHRcdFx0XHQkKGAuJHtjbH1maXJzdCR7aSArIDF9YCkudmFsKGRhdGEuYXV0aG9yc1tpXVsxXSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvYXV0aG9ycyA9IFtdO1xuXHRcdFx0XHRcdFx0Zm9yIChqID0gaTsgaiA8IGRhdGEuYXV0aG9ycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRjb2F1dGhvcnMucHVzaChkYXRhLmF1dGhvcnNbal0uam9pbignLCAnKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQkKGAuJHtjbH1jb2F1dGhvcnNgKS52YWwoY29hdXRob3JzLmpvaW4oJzsgJykpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCQoYC4ke2NsfWF1dGhvcjFgKS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0Y29uc3QgYXV0aG9ycyA9IFtdO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBkYXRhLmF1dGhvcnMgJiYgaSA8IGRhdGEuYXV0aG9ycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGF1dGhvcnMucHVzaChkYXRhLmF1dGhvcnNbaV0uam9pbignLCAnKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JChgLiR7Y2x9YXV0aG9yc2ApLnZhbChhdXRob3JzLmpvaW4oJzsgJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChpID0gMDsgZGF0YS5hdXRob3JzICYmIGkgPCBkYXRhLmF1dGhvcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoJChgLiR7Y2x9YXV0aG9yJHtpICsgMX1gKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdCQoYC4ke2NsfWF1dGhvciR7aSArIDF9YCkudmFsKGRhdGEuYXV0aG9yc1tpXS5qb2luKCcsICcpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29hdXRob3JzID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKGogPSBpOyBqIDwgZGF0YS5hdXRob3JzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGNvYXV0aG9ycy5wdXNoKGRhdGEuYXV0aG9yc1tqXS5qb2luKCcsICcpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCQoYC4ke2NsfWNvYXV0aG9yc2ApLnZhbChjb2F1dGhvcnMuam9pbignOyAnKSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBGb3JtYXQgcGFydGlhbCBkYXRlcyBvZiB0aGUgZm9ybWF0IFlZWVktTU0sIFlZWVktTU0tWFgsIG9yIFlZWVktTU0tREQgY29ycmVjdGx5XG5cdFx0aWYgKGRhdGEuZGF0ZSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgRFQgPSBuZXcgRGF0ZShkYXRhLmRhdGUpO1xuXHRcdFx0XHRpZiAoL15cXGR7NH0tXFxkezJ9KC1YWCk/JC9pLnRlc3QoZGF0YS5kYXRlKSkge1xuXHRcdFx0XHRcdGRhdGEuZGF0ZSA9IGRhdGEuZGF0ZS5yZXBsYWNlKCctWFgnLCAnJyk7XG5cdFx0XHRcdFx0JChgLiR7Y2x9ZGF0ZWApLnZhbChDaXRlVEIuZm9ybWF0RGF0ZShEVCwgZmFsc2UsIHRydWUpKTtcblx0XHRcdFx0fSBlbHNlIGlmICgvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9Py9pLnRlc3QoZGF0YS5kYXRlKSkge1xuXHRcdFx0XHRcdCQoYC4ke2NsfWRhdGVgKS52YWwoQ2l0ZVRCLmZvcm1hdERhdGUoRFQsIHRydWUsIHRydWUpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkKGAuJHtjbH1kYXRlYCkudmFsKGRhdGEuZGF0ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKGAuJHtjbH1kYXRlYCkudmFsKGRhdGEuZGF0ZSk7XG5cdFx0fVxuXG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlICdwbWlkJzpcblx0XHRcdGNhc2UgJ2RvaSc6XG5cdFx0XHRcdCQoYC4ke2NsfWpvdXJuYWxgKS52YWwoZGF0YS5qb3VybmFsKTtcblx0XHRcdFx0JChgLiR7Y2x9dm9sdW1lYCkudmFsKGRhdGEudm9sdW1lKTtcblx0XHRcdFx0JChgLiR7Y2x9aXNzdWVgKS52YWwoZGF0YS5pc3N1ZSk7XG5cdFx0XHRcdCQoYC4ke2NsfXBhZ2VzYCkudmFsKGRhdGEucGFnZXMpO1xuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ3BtaWQnICYmIGRhdGEuZG9pKSB7XG5cdFx0XHRcdFx0JChgLiR7Y2x9ZG9pYCkudmFsKGRhdGEuZG9pKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdpc2JuJzpcblx0XHRcdFx0JChgLiR7Y2x9cHVibGlzaGVyYCkudmFsKGRhdGEucHVibGlzaGVyKTtcblx0XHRcdFx0JChgLiR7Y2x9bG9jYXRpb25gKS52YWwoZGF0YS5sb2NhdGlvbik7XG5cdFx0XHRcdCQoYC4ke2NsfWVkaXRpb25gKS52YWwoZGF0YS5lZGl0aW9uKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAndXJsJzpcblx0XHRcdFx0JChgLiR7Y2x9am91cm5hbGApLnZhbChkYXRhLmpvdXJuYWwpO1xuXHRcdFx0XHQkKGAuJHtjbH12b2x1bWVgKS52YWwoZGF0YS52b2x1bWUpO1xuXHRcdFx0XHQkKGAuJHtjbH1pc3N1ZWApLnZhbChkYXRhLmlzc3VlKTtcblx0XHRcdFx0JChgLiR7Y2x9cGFnZXNgKS52YWwoZGF0YS5wYWdlcyk7XG5cdFx0XHRcdCQoYC4ke2NsfXB1Ymxpc2hlcmApLnZhbChkYXRhLnB1Ymxpc2hlcik7XG5cdFx0XHRcdCQoYC4ke2NsfWVkaXRpb25gKS52YWwoZGF0YS5lZGl0aW9uKTtcblx0XHRcdFx0JChgLiR7Y2x9aXNibmApLnZhbChkYXRhLmlzYm4pO1xuXHRcdFx0XHQkKGAuJHtjbH1pc3NuYCkudmFsKGRhdGEuaXNzbik7XG5cdFx0XHRcdCQoYC4ke2NsfWRvaWApLnZhbChkYXRhLmRvaSk7XG5cdFx0XHRcdC8vIFwiZW4tVVNcIiBpc24ndCBhIHZhbGlkIHZhbHVlIGZvciB0aGUgbGFuZ3VhZ2UgcGFyYW1ldGVyXG5cdFx0XHRcdGlmIChkYXRhLmxhbmd1YWdlICYmIGRhdGEubGFuZ3VhZ2UgIT09ICdlbi1VUycgJiYgZGF0YS5sYW5ndWFnZSAhPT0gJ2VuLUdCJykge1xuXHRcdFx0XHRcdCQoYC4ke2NsfWxhbmd1YWdlYCkudmFsKGRhdGEubGFuZ3VhZ2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCQoYC4ke2NsfWNoYXB0ZXJgKS52YWwoZGF0YS5jaGFwdGVyKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Ly8gTm8gZGVmYXVsdFxuXHRcdH1cblx0fTtcblxuXHQvLyBGT1JNIERJQUxPRyBGVU5DVElPTlNcblx0Ly8gQWRkIG5ldyBpbmNyZW1lbnRhYmxlIGZpZWxkc1xuXHRDaXRlVEIuaW5jcmVtZW50RmllbGRzID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gQ2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSgpO1xuXHRcdGNvbnN0IFtjdXJyZW50cm93XSA9ICQodGhpcykucGFyZW50cygndHInKTtcblx0XHQkKHRoaXMpLnByZXYoKS5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcblx0XHQkKHRoaXMpLmRldGFjaCgpO1xuXHRcdGNvbnN0IGVsZW1pZCA9ICQodGhpcykuYXR0cignaWQnKSA/PyAnJztcblx0XHRjb25zdCByZXMgPSAvXmNpdGUtaW5jci0oLio/KS0oLiopJC8uZXhlYyhlbGVtaWQpO1xuXHRcdGlmICghcmVzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IFssICwgZ3JvdXBdID0gcmVzO1xuXHRcdGNvbnN0IGluY3JlbWVudHMgPSB0ZW1wbGF0ZS5pbmNyZW1lbnRhYmxlc1tncm91cF07XG5cdFx0Y29uc3Qge2ZpZWxkc30gPSBpbmNyZW1lbnRzO1xuXHRcdHRlbXBsYXRlLmluY3JlbWVudGFibGVzW2dyb3VwXS52YWwgKz0gMTtcblx0XHRjb25zdCB0cnMgPSB0ZW1wbGF0ZS5tYWtlRm9ybUlubmVyKGZpZWxkcywgZmFsc2UpO1xuXHRcdHRycy5yZXZlcnNlKCk7XG5cdFx0Zm9yIChjb25zdCB0ciBvZiB0cnMpIHtcblx0XHRcdCQoY3VycmVudHJvdykuYWZ0ZXIodHIpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBmaWxsIHRoZSBhY2Nlc3NkYXRlIHBhcmFtIHdpdGggdGhlIGN1cnJlbnQgZGF0ZVxuXHRDaXRlVEIuZmlsbEFjY2Vzc2RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgZWxlbWlkID0gJCh0aGlzKS5hdHRyKCdpZCcpID8/ICcnO1xuXHRcdGNvbnN0IHJlcyA9IC9eY2l0ZS1kYXRlLSguKj8pLSguKikkLy5leGVjKGVsZW1pZCk7XG5cdFx0Y29uc3QgWywgaWRdID0gcmVzO1xuXHRcdGlmICghcmVzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IFssICwgZmllbGRdID0gcmVzO1xuXHRcdGNvbnN0IERUID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBkYXRlc3RyID0gQ2l0ZVRCLmZvcm1hdERhdGUoRFQpO1xuXHRcdCQoYCNjaXRlLSR7aWR9LSR7ZmllbGR9YCkudmFsKGRhdGVzdHIpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXHRDaXRlVEIuZm9ybWF0RGF0ZSA9IChEVCwgdXNlZGF5LCB1c2Vtb250aCkgPT4ge1xuXHRcdGlmICh1c2VkYXkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dXNlZGF5ID0gdHJ1ZTtcblx0XHR9XG5cdFx0aWYgKHVzZW1vbnRoID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHVzZW1vbnRoID0gdHJ1ZTtcblx0XHR9XG5cdFx0bGV0IGRhdGVzdHIgPSBDaXRlVEIuZ2V0T3B0aW9uKCdkYXRlIGZvcm1hdCcpO1xuXHRcdGxldCB6bW9udGggPSAnJztcblx0XHRsZXQgbW9udGggPSBEVC5nZXRVVENNb250aCgpICsgMTtcblx0XHRpZiAobW9udGggPCAxMCkge1xuXHRcdFx0em1vbnRoID0gYDAke21vbnRoLnRvU3RyaW5nKCl9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0em1vbnRoID0gbW9udGgudG9TdHJpbmcoKTtcblx0XHR9XG5cdFx0bW9udGggPSBtb250aC50b1N0cmluZygpO1xuXHRcdGxldCB6ZGF0ZSA9ICcnO1xuXHRcdGxldCBkYXRlID0gRFQuZ2V0VVRDRGF0ZSgpO1xuXHRcdGlmIChkYXRlIDwgMTApIHtcblx0XHRcdHpkYXRlID0gYDAke2RhdGUudG9TdHJpbmcoKX1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR6ZGF0ZSA9IGRhdGUudG9TdHJpbmcoKTtcblx0XHR9XG5cdFx0ZGF0ZSA9IGRhdGUudG9TdHJpbmcoKTtcblx0XHRpZiAodXNlZGF5KSB7XG5cdFx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8ZGF0ZT4nLCBkYXRlKTtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzx6ZGF0ZT4nLCB6ZGF0ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzxkYXRlPicsICcnKTtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzx6ZGF0ZT4nLCAnJyk7XG5cdFx0fVxuXHRcdGlmICh1c2Vtb250aCkge1xuXHRcdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPG1vbnRoPicsIG1vbnRoKTtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzx6bW9udGg+Jywgem1vbnRoKTtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzxtb250aG5hbWU+JywgQ2l0ZVRCLmdldE9wdGlvbignbW9udGhzJylbRFQuZ2V0VVRDTW9udGgoKV0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8bW9udGg+JywgJycpO1xuXHRcdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPHptb250aD4nLCAnJyk7XG5cdFx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8bW9udGhuYW1lPicsICcnKTtcblx0XHR9XG5cdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPHllYXI+JywgRFQuZ2V0VVRDRnVsbFllYXIoKS50b1N0cmluZygpKTtcblx0XHRyZXR1cm4gZGF0ZXN0ci5yZXBsYWNlKC9eWyAvXFwtLC5dKiguKj8pWyAvXFwtLC5dKiQvZywgJyQxJyk7IC8vIENsZWFudXAgYW55IGRhbmdsaW5nIHNwYWNlcyBvciBjb25uZWN0b3JzIHRoYXQgbWlnaHQgcmVzdWx0IGZyb20gb21pdHRpbmcgZGF0ZS9tb250aFxuXHR9O1xuXG5cdC8vIEZ1bmN0aW9uIGNhbGxlZCBhZnRlciB0aGUgcmVmIGxpc3QgaXMgbG9hZGVkLCB0byBhY3R1YWxseSBzZXQgdGhlIGNvbnRlbnRzIG9mIHRoZSBuYW1lZCByZWYgZGlhbG9nXG5cdC8vIFVudGlsIHRoZSBsaXN0IGlzIGxvYWRlZCwgaXRzIGp1c3QgYSBcIkxvYWRpbmdcIiBwbGFjZWhvbGRlclxuXHRDaXRlVEIuc2V0dXBOYW1lZFJlZnMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgbmFtZXMgPSBbXTtcblx0XHRsZXQgaTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgQ2l0ZVRCLm1haW5SZWZMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoIUNpdGVUQi5tYWluUmVmTGlzdFtpXS5zaG9ydHRhZyAmJiBDaXRlVEIubWFpblJlZkxpc3RbaV0ucmVmbmFtZSkge1xuXHRcdFx0XHRuYW1lcy5wdXNoKENpdGVUQi5tYWluUmVmTGlzdFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IHN0dWZmID0gJCgnPGRpdj4nKTtcblx0XHQkYm9keS5maW5kKCcjY2l0ZXRvb2xiYXItbmFtZWRyZWZzJykuaHRtbChzdHVmZik7XG5cdFx0aWYgKG5hbWVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0c3R1ZmYuaHRtbChnZXRNZXNzYWdlKCdjaXRlLW5vLW5hbWVkcmVmcycpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R1ZmYuaHRtbChnZXRNZXNzYWdlKCdjaXRlLW5hbWVkcmVmcy1pbnRybycpKTtcblx0XHRcdGNvbnN0IHNlbGVjdCA9ICQoJzxzZWxlY3Q+JykuYXR0cignaWQnLCAnY2l0ZS1uYW1lZHJlZi1zZWxlY3QnKTtcblx0XHRcdHNlbGVjdC5hcHBlbmQoJCgnPG9wdGlvbj4nKS5hdHRyKCd2YWx1ZScsICcnKS50ZXh0KGdldE1lc3NhZ2UoJ2NpdGUtbmFtZWQtcmVmcy1kcm9wZG93bicpKSk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0c2VsZWN0LmFwcGVuZCgkKCc8b3B0aW9uPicpLnRleHQobmFtZXNbaV0ucmVmbmFtZSkpO1xuXHRcdFx0fVxuXHRcdFx0c3R1ZmYuYWZ0ZXIoc2VsZWN0KTtcblx0XHRcdHNlbGVjdC5iZWZvcmUoJzxicj4nKTtcblx0XHRcdGNvbnN0IHByZXZsYWJlbCA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmF0dHIoJ2lkJywgJ2NpdGUtbnJlZi1wcmV2aWV3LWxhYmVsJylcblx0XHRcdFx0LmNzcygnZGlzcGxheScsICdub25lJylcblx0XHRcdFx0Lmh0bWwoZ2V0TWVzc2FnZSgnY2l0ZS1yYXctcHJldmlldycpKTtcblx0XHRcdHNlbGVjdC5hZnRlcihwcmV2bGFiZWwpO1xuXHRcdFx0cHJldmxhYmVsLmJlZm9yZSgnPGJyPjxicj4nKTtcblx0XHRcdHByZXZsYWJlbC5hZnRlcignPGRpdiBpZD1cImNpdGUtbmFtZWRyZWYtcHJldmlld1wiIHN0eWxlPVwicGFkZGluZzowLjVlbTsgZm9udC1zaXplOjExMCVcIiAvPicpO1xuXHRcdFx0Y29uc3QgcGFyc2VsYWJlbCA9ICQoJzxzcGFuPicpXG5cdFx0XHRcdC5hdHRyKCdpZCcsICdjaXRlLXBhcnNlZC1sYWJlbCcpXG5cdFx0XHRcdC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG5cdFx0XHRcdC5odG1sKGdldE1lc3NhZ2UoJ2NpdGUtcGFyc2VkLWxhYmVsJykpO1xuXHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtcHJldmlldycpLmFmdGVyKHBhcnNlbGFiZWwpO1xuXHRcdFx0cGFyc2VsYWJlbC5hZnRlcignPGRpdiBpZD1cImNpdGUtbmFtZWRyZWYtcGFyc2VkXCIgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTowLjVlbTsgZm9udC1zaXplOjExMCVcIiAvPicpO1xuXHRcdFx0Y29uc3QgbGluayA9ICQoJzxhPicpXG5cdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRocmVmOiAnIycsXG5cdFx0XHRcdFx0aWQ6ICdjaXRlLW5yZWYtcGFyc2UnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRtYXJnaW46ICcwIDFlbSAwIDFlbScsXG5cdFx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLFxuXHRcdFx0XHRcdGNvbG9yOiAnIzAwMDA4YicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0bGluay5odG1sKGdldE1lc3NhZ2UoJ2NpdGUtZm9ybS1wYXJzZScpKTtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXBhcnNlZCcpLmFmdGVyKGxpbmspO1xuXG5cdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1zZWxlY3QnKS5vbignY2hhbmdlJywgQ2l0ZVRCLm5hbWVkUmVmU2VsZWN0Q2xpY2spO1xuXHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbnJlZi1wYXJzZScpLm9uKCdjbGljaycsIENpdGVUQi5ucmVmUGFyc2VDbGljayk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIENhbGxiYWNrIGZ1bmN0aW9uIGZvciBwYXJzZWQgcHJldmlld1xuXHRDaXRlVEIuZmlsbE5yZWZQcmV2aWV3ID0gKHBhcnNlZCkgPT4ge1xuXHRcdCRib2R5LmZpbmQoJyNjaXRlLXBhcnNlZC1sYWJlbCcpLnNob3coKTtcblx0XHQkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1wYXJzZWQnKS5odG1sKHBhcnNlZCk7XG5cdH07XG5cblx0Ly8gQ2xpY2sgaGFuZGxlciBmb3IgdGhlIG5hbWVkLXJlZiBwYXJzZWQgcHJldmlld1xuXHRDaXRlVEIubnJlZlBhcnNlQ2xpY2sgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY2hvaWNlID0gJGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtc2VsZWN0JykudmFsKCk7XG5cdFx0aWYgKGNob2ljZSA9PT0gJycpIHtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLXBhcnNlZC1sYWJlbCcpLmhpZGUoKTtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXBhcnNlZCcpLnRleHQoJycpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQkYm9keS5maW5kKCcjY2l0ZS1ucmVmLXBhcnNlJykuaGlkZSgpO1xuXHRcdGZvciAoY29uc3QgcmVmIG9mIENpdGVUQi5tYWluUmVmTGlzdCkge1xuXHRcdFx0aWYgKCFyZWYuc2hvcnR0YWcgJiYgcmVmLnJlZm5hbWUgPT09IGNob2ljZSkge1xuXHRcdFx0XHRDaXRlVEIucGFyc2UocmVmLmNvbnRlbnQsIENpdGVUQi5maWxsTnJlZlByZXZpZXcpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8vIENsaWNrIGhhbmRsZXIgZm9yIHRoZSBuYW1lZC1yZWYgZHJvcGRvd25cblx0Q2l0ZVRCLmxhc3RuYW1lZHJlZmNob2ljZSA9ICcnO1xuXHRDaXRlVEIubmFtZWRSZWZTZWxlY3RDbGljayA9ICgpID0+IHtcblx0XHRjb25zdCBjaG9pY2UgPSAkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1zZWxlY3QnKS52YWwoKTtcblx0XHRpZiAoQ2l0ZVRCLmxhc3RuYW1lZHJlZmNob2ljZSA9PT0gY2hvaWNlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdENpdGVUQi5sYXN0bmFtZWRyZWZjaG9pY2UgPSBjaG9pY2U7XG5cdFx0JGJvZHkuZmluZCgnI2NpdGUtcGFyc2VkLWxhYmVsJykuaGlkZSgpO1xuXHRcdCRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXBhcnNlZCcpLnRleHQoJycpO1xuXHRcdGlmIChjaG9pY2UgPT09ICcnKSB7XG5cdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1ucmVmLXByZXZpZXctbGFiZWwnKS5oaWRlKCk7XG5cdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1wcmV2aWV3JykudGV4dCgnJyk7XG5cdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1ucmVmLXBhcnNlJykuaGlkZSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IHJlZiBvZiBDaXRlVEIubWFpblJlZkxpc3QpIHtcblx0XHRcdGlmICghcmVmLnNob3J0dGFnICYmIHJlZi5yZWZuYW1lID09PSBjaG9pY2UpIHtcblx0XHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbnJlZi1wcmV2aWV3LWxhYmVsJykuc2hvdygpO1xuXHRcdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1wcmV2aWV3JykudGV4dChyZWYuY29udGVudCk7XG5cdFx0XHRcdGlmIChDaXRlVEIuZ2V0T3B0aW9uKCdhdXRvcGFyc2UnKSkge1xuXHRcdFx0XHRcdENpdGVUQi5ucmVmUGFyc2VDbGljaygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5yZWYtcGFyc2UnKS5zaG93KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Ly8gY2FsbGJhY2sgZnVuY3Rpb24gZm9yIHBhcnNlZCBwcmV2aWV3XG5cdENpdGVUQi5maWxsVGVtcGxhdGVQcmV2aWV3ID0gKHRleHQpID0+IHtcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IENpdGVUQi5nZXRPcGVuVGVtcGxhdGUoKTtcblx0XHRjb25zdCBkaXYgPSAkKGAjY2l0ZXRvb2xiYXItJHtDaXRlVEIuZXNjU3RyKHRlbXBsYXRlLnNob3J0Zm9ybSl9YCk7XG5cdFx0ZGl2LmZpbmQoJy5jaXRlLXByZXYtcGFyc2VkLWxhYmVsJykuc2hvdygpO1xuXHRcdGRpdi5maW5kKCcuY2l0ZS1wcmV2aWV3LXBhcnNlZCcpLmh0bWwodGV4dCk7XG5cdH07XG5cblx0Ly8gQ2xpY2sgaGFuZGxlciBmb3IgdGVtcGxhdGUgcGFyc2VkIHByZXZpZXdcblx0Q2l0ZVRCLnByZXZQYXJzZUNsaWNrID0gKCkgPT4ge1xuXHRcdGNvbnN0IHJlZiA9IENpdGVUQi5nZXRSZWYodHJ1ZSwgZmFsc2UpO1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gQ2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSgpO1xuXHRcdGNvbnN0IGRpdiA9ICQoYCNjaXRldG9vbGJhci0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX1gKTtcblx0XHRkaXYuZmluZCgnLmNpdGUtcHJldi1wYXJzZScpLmhpZGUoKTtcblx0XHRDaXRlVEIucGFyc2UocmVmLCBDaXRlVEIuZmlsbFRlbXBsYXRlUHJldmlldyk7XG5cdH07XG5cblx0Ly8gU2hvdy9oaWRlIHRoZSBleHRyYSBmaWVsZHMgaW4gdGhlIGRpYWxvZyBib3hcblx0Q2l0ZVRCLnNob3dIaWRlRXh0cmEgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBDaXRlVEIuZ2V0T3BlblRlbXBsYXRlKCk7XG5cdFx0Y29uc3QgZGl2ID0gJChgI2NpdGV0b29sYmFyLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfWApO1xuXHRcdGNvbnN0IHNldHRpbmcgPSBkaXYuZmluZCgnLmNpdGUtZm9ybS1zdGF0dXMnKS52YWwoKTtcblx0XHRpZiAoc2V0dGluZyA9PT0gJ2Nsb3NlZCcpIHtcblx0XHRcdGRpdi5maW5kKCcuY2l0ZS1mb3JtLXN0YXR1cycpLnZhbCgnb3BlbicpO1xuXHRcdFx0ZGl2LmZpbmQoJy5jaXRlLWV4dHJhLWZpZWxkcycpLnNob3coMSwgKCkgPT4ge1xuXHRcdFx0XHQvLyBqUXVlcnkgYWRkcyBgZGlzcGxheTogYmxvY2tgLCB3aGljaCBzY3Jld3MgdGhpbmdzIHVwXG5cdFx0XHRcdGRpdi5maW5kKCcuY2l0ZS1leHRyYS1maWVsZHMnKS5jc3Moe1xuXHRcdFx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRcdFx0J2JhY2tncm91bmQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkaXYuZmluZCgnLmNpdGUtZm9ybS1zdGF0dXMnKS52YWwoJ2Nsb3NlZCcpO1xuXHRcdFx0ZGl2LmZpbmQoJy5jaXRlLWV4dHJhLWZpZWxkcycpLmhpZGUoKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gUmVzZXRzIGZvcm0gZmllbGRzIGFuZCBwcmV2aWV3c1xuXHQvLyBSZXNldHMgZm9ybSBmaWVsZHMgYW5kIHByZXZpZXdzXG5cdENpdGVUQi5yZXNldEZvcm0gPSAoKSA9PiB7XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBDaXRlVEIuZ2V0T3BlblRlbXBsYXRlKCk7XG5cdFx0Y29uc3QgZGl2ID0gJChgI2NpdGV0b29sYmFyLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfWApO1xuXHRcdGRpdi5odG1sKHRlbXBsYXRlLmdldEZvcm0oKSk7XG5cdH07XG5cblx0Ly8gU1RSSU5HIFVUSUxJVFkgRlVOQ1RJT05TXG5cdC8vIFJldHVybnMgYSBzdHJpbmcgcXVvdGVkIGFzIG5lY2Vzc2FyeSBmb3IgbmFtZS9ncm91cCBhdHRyaWJ1dGVzXG5cdENpdGVUQi5nZXRRdW90ZWRTdHJpbmcgPSAocykgPT4ge1xuXHRcdGNvbnN0IHNxID0gLycvLnRlc3Qocyk7IC8vIHNpbmdsZSBxdW90ZXNcblx0XHRjb25zdCBkcSA9IC9cIi8udGVzdChzKTsgLy8gZG91YmxlIHF1b3Rlc1xuXHRcdGlmICghc3EgJiYgIWRxKSB7XG5cdFx0XHQvLyBBbHdheXMgcXVvdGVzIGZvciBub24tbGF0aW4gYWxwaGFiZXRcblx0XHRcdHJldHVybiBgXCIke3N9XCJgO1xuXHRcdH0gZWxzZSBpZiAoIWRxKSB7XG5cdFx0XHQvLyBDYW4gdXNlIGRvdWJsZSBxdW90ZXNcblx0XHRcdHJldHVybiBgXCIke3N9XCJgO1xuXHRcdH0gZWxzZSBpZiAoIXNxKSB7XG5cdFx0XHQvLyBDYW4gdXNlIHNpbmdsZSBxdW90ZXNcblx0XHRcdHJldHVybiBgJyR7c30nYDtcblx0XHR9XG5cdFx0Ly8gSGFzIGRvdWJsZSBhbmQgc2luZ2xlIHF1b3Rlc1xuXHRcdHMgPSBzLnJlcGxhY2UoL1wiL2csIFwiJ1wiKTtcblx0XHRyZXR1cm4gYFwiJHtzfVwiYDtcblx0fTtcblxuXHQvLyBGaXggdXAgc3RyaW5ncyBmb3Igb3V0cHV0IC0gY2FwaXRhbGl6ZSBmaXJzdCBjaGFyLCByZXBsYWNlIHVuZGVyc2NvcmVzIHdpdGggc3BhY2VzXG5cdENpdGVUQi5maXhTdHIgPSAocykgPT4ge1xuXHRcdHMgPSBzLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xuXHRcdHMgPSBzLnJlcGxhY2UoJ18nLCAnICcpO1xuXHRcdHJldHVybiBzO1xuXHR9O1xuXG5cdC8vIEVzY2FwZSBzcGFjZXMgYW5kIHF1b3RlcyBmb3IgdXNlIGluIEhUTUwgY2xhc3Nlcy9pZHNcblx0Q2l0ZVRCLmVzY1N0ciA9IChzKSA9PiB7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvXFxzL2csICctJykucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKTtcblx0fTtcblxuXHQvLyBNSVNDIEZVTkNUSU9OU1xuXHQvLyBEZXRlcm1pbmUgd2hpY2ggdGVtcGxhdGUgZm9ybSBpcyBvcGVuLCBhbmQgZ2V0IHRoZSB0ZW1wbGF0ZSBvYmplY3QgZm9yIGl0XG5cdENpdGVUQi5nZXRPcGVuVGVtcGxhdGUgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZGlhbG9ncyA9ICRib2R5LmZpbmQoJy51aS1kaWFsb2ctY29udGVudC51aS13aWRnZXQtY29udGVudDp2aXNpYmxlJyk7XG5cdFx0Y29uc3QgdGVtcGxhdGVuYW1lID0gJChkaWFsb2dzWzBdKS5maW5kKCcuY2l0ZS10ZW1wbGF0ZScpLnZhbCgpO1xuXHRcdHJldHVybiBDaXRlVEIuVGVtcGxhdGVzW3RlbXBsYXRlbmFtZV07XG5cdH07XG5cblx0Ly8gRGlzcGxheSB0aGUgcmVwb3J0IGZvciB0aGUgZXJyb3IgY2hlY2tzXG5cdENpdGVUQi5kaXNwbGF5RXJyb3JzID0gKGVycm9ycykgPT4ge1xuXHRcdCRib2R5LmZpbmQoJyNjaXRlLWVyci1yZXBvcnQnKS5yZW1vdmUoKTtcblx0XHRjb25zdCB0YWJsZSA9ICQoJzx0YWJsZT4nKS5hdHRyKCdpZCcsICdjaXRlLWVyci1yZXBvcnQnKS5jc3Moe1xuXHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCAjQTlBOUE5Jyxcblx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogJyNGRkVGRDUnLFxuXHRcdFx0cGFkZGluZzogJzAuMjVlbScsXG5cdFx0XHQnbWFyZ2luLXRvcCc6ICcwLjVlbScsXG5cdFx0fSk7XG5cdFx0JGJvZHkuZmluZCgnI2VkaXRwYWdlLWNvcHl3YXJuJykuYmVmb3JlKHRhYmxlKTtcblx0XHRsZXQgdHI7XG5cdFx0Y29uc3QgdHIxID0gJCgnPHRyPicpLmNzcygnd2lkdGgnLCAnMTAwJScpO1xuXHRcdGNvbnN0IHRoMSA9ICQoJzx0aD4nKS5jc3MoJ3dpZHRoJywgJzYwJScpLmNzcygnZm9udC1zaXplJywgJzExMCUnKS5odG1sKGdldE1lc3NhZ2UoJ2NpdGUtZXJyLXJlcG9ydC1oZWFkaW5nJykpO1xuXHRcdGNvbnN0IHRoMiA9ICQoJzx0aD4nKS5jc3MoJ3dpZHRoJywgJzQwJScpLmNzcygndGV4dC1hbGlnbicsICdyaWdodDsnKTtcblx0XHRjb25zdCBpbSA9ICQoJzxpbWc+JykuYXR0cignc3JjJywgJ2h0dHBzOi8veW91c2hvdS53aWtpL2ltYWdlcy90aHVtYi81LzU1L0d0ay1zdG9wLnN2Zy8yMHB4LUd0ay1zdG9wLnN2Zy5wbmcnKTtcblx0XHRpbS5hdHRyKCdhbHQnLCBnZXRNZXNzYWdlKCdjaXRlLWVyci1yZXBvcnQtY2xvc2UnKSkuYXR0cigndGl0bGUnLCBnZXRNZXNzYWdlKCdjaXRlLWVyci1yZXBvcnQtY2xvc2UnKSk7XG5cdFx0Y29uc3QgYWQgPSAkKCc8YT4nKS5hdHRyKHtcblx0XHRcdGlkOiAnY2l0ZS1lcnItY2hlY2stY2xvc2UnLFxuXHRcdFx0aHJlZjogJyMnLFxuXHRcdH0pO1xuXHRcdGFkLmFwcGVuZChpbSk7XG5cdFx0dGgyLmFwcGVuZChhZCk7XG5cdFx0dHIxLmFwcGVuZCh0aDEpLmFwcGVuZCh0aDIpO1xuXHRcdHRhYmxlLmFwcGVuZCh0cjEpO1xuXHRcdCRib2R5LmZpbmQoJyNjaXRlLWVyci1jaGVjay1jbG9zZScpLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLWVyci1yZXBvcnQnKS5yZW1vdmUoKTtcblx0XHR9KTtcblx0XHRpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dHIgPSAkKCc8dHI+JykuY3NzKCd3aWR0aCcsICcxMDAlJyk7XG5cdFx0XHRjb25zdCB0ZCA9ICQoJzx0ZD4nKVxuXHRcdFx0XHQuY3NzKCd0ZXh0LWFsaWduJywgJ2NlbnRlcicpXG5cdFx0XHRcdC5jc3MoJ21hcmdpbicsICcxLjVweCcpXG5cdFx0XHRcdC5odG1sKGdldE1lc3NhZ2UoJ2NpdGUtZXJyLXJlcG9ydC1lbXB0eScpKTtcblx0XHRcdHRyLmFwcGVuZCh0ZCk7XG5cdFx0XHR0YWJsZS5hcHBlbmQodHIpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgZXJyb3IgaW4gZXJyb3JzKSB7XG5cdFx0XHRpZiAoT2JqZWN0Lmhhc093bihlcnJvcnMsIGVycm9yKSkge1xuXHRcdFx0XHRjb25zdCBlcnIgPSBlcnJvcnNbZXJyb3JdO1xuXHRcdFx0XHR0ciA9ICQoJzx0cj4nKS5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcblx0XHRcdFx0Y29uc3QgdGQxID0gJCgnPHRkPicpXG5cdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgIzAwMCcsXG5cdFx0XHRcdFx0XHRtYXJnaW46ICcxLjVweCcsXG5cdFx0XHRcdFx0XHR3aWR0aDogJzYwJScsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuaHRtbChlcnIuZXJyKTtcblx0XHRcdFx0Y29uc3QgdGQyID0gJCgnPHRkPicpXG5cdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgIzAwMCcsXG5cdFx0XHRcdFx0XHRtYXJnaW46ICcxLjVweCcsXG5cdFx0XHRcdFx0XHR3aWR0aDogJzQwJScsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuaHRtbChnZXRNZXNzYWdlKGVyci5tc2cpKTtcblx0XHRcdFx0dHIuYXBwZW5kKHRkMSkuYXBwZW5kKHRkMik7XG5cdFx0XHRcdHRhYmxlLmFwcGVuZCh0cik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8vIExvYWQgY29uZmlndXJhdGlvbiBmb3Igc2l0ZVxuXHRyZWZUb29sYmFyQ29uZmlnKCk7XG5cblx0Ly8gRW5kIG9mIGNvZGUgbG9hZGVkIG9ubHkgb24gZWRpdFxufTtcblxuZXhwb3J0IHtyZWZUb29sYmFyMn07XG4iLCAiLyogZ2xvYmFsIENpdGVUQiAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50ICovXG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL3V0aWwvZ2V0TWVzc2FnZSc7XG5cbmNvbnN0IHJlZlRvb2xiYXJCYXNlID0gKCkgPT4ge1xuXHR3aW5kb3cuQ2l0ZVRCIHx8PSB7XG5cdFx0VGVtcGxhdGVzOiB7fSwgLy8gQWxsIHRlbXBsYXRlc1xuXHRcdE9wdGlvbnM6IHt9LCAvLyBHbG9iYWwgb3B0aW9uc1xuXHRcdFVzZXJPcHRpb25zOiB7fSwgLy8gVXNlciBvcHRpb25zXG5cdFx0RGVmYXVsdE9wdGlvbnM6IHt9LCAvLyBTY3JpcHQgZGVmYXVsdHNcblx0fTtcblxuXHQvLyBDbGFzcyBmb3IgY2l0ZSB0ZW1wbGF0ZXNcblx0d2luZG93LkNpdGVUZW1wbGF0ZSA9IGNsYXNzIENpdGVUZW1wbGF0ZSB7XG5cdFx0Y29uc3RydWN0b3IodGVtcGxhdGVuYW1lLCBzaG9ydGZvcm0sIGJhc2ljZmllbGRzLCBleHBhbmRlZGZpZWxkcykge1xuXHRcdFx0Ly8gUHJvcGVydGllc1xuXHRcdFx0dGhpcy50ZW1wbGF0ZW5hbWUgPSB0ZW1wbGF0ZW5hbWU7IC8vIFRoZSB0ZW1wbGF0ZSBuYW1lIC0gXCJjaXRlIHdlYlwiLCBcImNpdGUgYm9va1wiLCBldGMuXG5cdFx0XHR0aGlzLnNob3J0Zm9ybSA9IHNob3J0Zm9ybTsgLy8gQSBzaG9ydCBmb3JtLCB1c2VkIGZvciB0aGUgZHJvcGRvd24gYm94XG5cdFx0XHR0aGlzLmJhc2ljID0gYmFzaWNmaWVsZHM7IC8vIEJhc2ljIGZpZWxkcyAtIGF1dGhvciwgdGl0bGUsIHB1Ymxpc2hlci4uLlxuXG5cdFx0XHQvLyBMZXNzIGNvbW1vbiAtIHF1b3RlLCBhcmNoaXZldXJsIC0gc2hvdWxkIGJlIGV2ZXJ5dGhpbmcgdGhlIHRlbXBsYXRlIHN1cHBvcnRzIG1pbnVzIHRoZSBiYXNpYyBvbmVzXG5cdFx0XHR0aGlzLmV4dHJhID0gZXhwYW5kZWRmaWVsZHM7XG5cdFx0XHR0aGlzLmluY3JlbWVudGFibGVzID0ge307XG5cblx0XHRcdC8vIEFkZCBpdCB0byB0aGUgbGlzdFxuXHRcdFx0Q2l0ZVRCLlRlbXBsYXRlc1t0aGlzLnRlbXBsYXRlbmFtZV0gPSB0aGlzO1xuXHRcdH1cblx0XHRtYWtlRm9ybUlubmVyKGZpZWxkcywgaW5jcnNldHVwKSB7XG5cdFx0XHRjb25zdCB0cnMgPSBbXTtcblx0XHRcdGNvbnN0IGF1dG9maWxscyA9IFtdO1xuXHRcdFx0bGV0IHRyO1xuXHRcdFx0Zm9yIChjb25zdCBbaSwgZmllbGRvYmpdIG9mIGZpZWxkcy5lbnRyaWVzKCkpIHtcblx0XHRcdFx0bGV0IHtmaWVsZH0gPSBmaWVsZG9iajtcblx0XHRcdFx0bGV0IGxhYmVsZmllbGQgPSBmaWVsZG9iai5maWVsZDtcblx0XHRcdFx0bGV0IGFkID0gZmFsc2U7XG5cdFx0XHRcdGxldCBpbTtcblx0XHRcdFx0aWYgKGluY3JzZXR1cCAmJiBmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXApIHtcblx0XHRcdFx0XHRmaWVsZCA9IGZpZWxkb2JqLmZpZWxkLnJlcGxhY2UoJzxOPicsICcxJyk7XG5cdFx0XHRcdFx0bGFiZWxmaWVsZCA9IGZpZWxkb2JqLmZpZWxkLnJlcGxhY2UoJzxOPicsICcnKTtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHR0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0gJiZcblx0XHRcdFx0XHRcdCF0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0uc2V0dXBcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdC8vIFRoZSBvYmplY3QgaGFzIGJlZW4gY3JlYXRlZCwgYnV0IG5vdCBmdWxseSBpbml0aWFsaXplZFxuXHRcdFx0XHRcdFx0dGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdLmZpZWxkcy5wdXNoKGZpZWxkb2JqKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKCF0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0pIHtcblx0XHRcdFx0XHRcdC8vIE9iamVjdCBub3QgeWV0IGNyZWF0ZWRcblx0XHRcdFx0XHRcdHRoaXMuaW5jcmVtZW50YWJsZXNbZmllbGRvYmouaW5jcmVtZW50X2dyb3VwXSA9IHtcblx0XHRcdFx0XHRcdFx0ZmllbGRzOiBbZmllbGRvYmpdLFxuXHRcdFx0XHRcdFx0XHR2YWw6IDEsXG5cdFx0XHRcdFx0XHRcdHNldHVwOiBmYWxzZSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRcdHRoaXMuaW5jcmVtZW50YWJsZXNbZmllbGRvYmouaW5jcmVtZW50X2dyb3VwXSAmJlxuXHRcdFx0XHRcdFx0dGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdLnNldHVwXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHQvLyBGdWxseSBpbml0aWFsaXplZCBmcm9tIGEgcHJldmlvdXMgaW52b2NhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uLCBqdXN0IHJlc2V0dGluZyB0aGUgbnVtYmVyXG5cdFx0XHRcdFx0XHR0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0udmFsID0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoZmllbGRvYmouaW5jcmVtZW50X2dyb3VwKSB7XG5cdFx0XHRcdFx0Ly8gQWRkaW5nIGEgbmV3IHJvd1xuXHRcdFx0XHRcdGNvbnN0IGluY3J2YWwgPSB0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0udmFsO1xuXHRcdFx0XHRcdGZpZWxkID0gZmllbGRvYmouZmllbGQucmVwbGFjZSgnPE4+JywgaW5jcnZhbC50b1N0cmluZygpKTtcblx0XHRcdFx0XHRsYWJlbGZpZWxkID0gZmllbGRvYmouZmllbGQucmVwbGFjZSgnPE4+JywgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGF1dG9kYXRlRmllbGRzID0gQ2l0ZVRCLmdldE9wdGlvbignYXV0b2RhdGUgZmllbGRzJyk7XG5cdFx0XHRcdGlmIChhdXRvZGF0ZUZpZWxkcy5pbmNsdWRlcyhmaWVsZCkpIHtcblx0XHRcdFx0XHRpbSA9ICQoJzxpbWc+JykuYXR0cihcblx0XHRcdFx0XHRcdCdzcmMnLFxuXHRcdFx0XHRcdFx0J2h0dHBzOi8veW91c2hvdS53aWtpL2ltYWdlcy90aHVtYi83LzdiL051dm9sYV9hcHBzX2RhdGUuc3ZnLzIwcHgtTnV2b2xhX2FwcHNfZGF0ZS5zdmcucG5nJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aW0uYXR0cignYWx0JywgZ2V0TWVzc2FnZSgnY2l0ZS1pbnNlcnQtZGF0ZScpKS5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ2NpdGUtaW5zZXJ0LWRhdGUnKSk7XG5cdFx0XHRcdFx0YWQgPSAkKCc8YT4nKS5hdHRyKCdocmVmJywgJyMnKTtcblx0XHRcdFx0XHRhZC5hcHBlbmQoaW0pO1xuXHRcdFx0XHRcdGFkLmF0dHIoJ2lkJywgYGNpdGUtZGF0ZS0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS0ke2ZpZWxkfWApO1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9uKFxuXHRcdFx0XHRcdFx0J2NsaWNrJyxcblx0XHRcdFx0XHRcdGAjY2l0ZS1kYXRlLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LSR7ZmllbGR9YCxcblx0XHRcdFx0XHRcdENpdGVUQi5maWxsQWNjZXNzZGF0ZVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGZpZWxkb2JqLmF1dG9maWxsaWQpIHtcblx0XHRcdFx0XHRjb25zdCBhdXRvdHlwZSA9IGZpZWxkb2JqLmF1dG9maWxsaWQ7XG5cdFx0XHRcdFx0aW0gPSAkKCc8aW1nPicpLmF0dHIoXG5cdFx0XHRcdFx0XHQnc3JjJyxcblx0XHRcdFx0XHRcdCdodHRwczovL3lvdXNob3Uud2lraS9pbWFnZXMvdGh1bWIvMS8xNy9TeXN0ZW0tc2VhcmNoLnN2Zy8yMHB4LVN5c3RlbS1zZWFyY2guc3ZnLnBuZydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGltLmF0dHIoJ2FsdCcsIGdldE1lc3NhZ2UoJ2NpdGUtYXV0b2ZpbGwtYWx0JykpLmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnY2l0ZS1hdXRvZmlsbC1hbHQnKSk7XG5cdFx0XHRcdFx0YWQgPSAkKCc8YT4nKS5hdHRyKCdocmVmJywgJyMnKTtcblx0XHRcdFx0XHRhZC5hcHBlbmQoaW0pO1xuXHRcdFx0XHRcdGFkLmF0dHIoJ2lkJywgYGNpdGUtYXV0by0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS0ke2ZpZWxkfS0ke2F1dG90eXBlfWApO1xuXHRcdFx0XHRcdGF1dG9maWxscy5wdXNoKGAjY2l0ZS1hdXRvLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LSR7ZmllbGR9LSR7YXV0b3R5cGV9YCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGZpZWxkb2JqLmluY3JlbWVudF9idXR0b24pIHtcblx0XHRcdFx0XHRjb25zdCBpbmNydHlwZSA9IGZpZWxkb2JqLmluY3JlbWVudF9ncm91cDtcblx0XHRcdFx0XHRpbSA9ICQoJzxpbWc+JykuYXR0cihcblx0XHRcdFx0XHRcdCdzcmMnLFxuXHRcdFx0XHRcdFx0J2h0dHBzOi8veW91c2hvdS53aWtpL2ltYWdlcy90aHVtYi9iL2I5L051dm9sYV9hY3Rpb25fZWRpdF9hZGQuc3ZnLzIwcHgtTnV2b2xhX2FjdGlvbl9lZGl0X2FkZC5zdmcucG5nJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aW0uYXR0cignYWx0JywgZ2V0TWVzc2FnZSgnY2l0ZS1pbmNyZW1lbnQtYWx0JykpLmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnY2l0ZS1pbmNyZW1lbnQtYWx0JykpO1xuXHRcdFx0XHRcdGFkID0gJCgnPGE+JykuYXR0cignaHJlZicsICcjJyk7XG5cdFx0XHRcdFx0YWQuYXBwZW5kKGltKTtcblx0XHRcdFx0XHRhZC5hdHRyKCdpZCcsIGBjaXRlLWluY3ItJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tJHtpbmNydHlwZX1gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBkaXNwbGF5ID0gZ2V0TWVzc2FnZShgY2l0ZS0ke2xhYmVsZmllbGR9LWxhYmVsYCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgZGlzcGxheSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRkaXNwbGF5ID0gZmllbGRvYmoubGFiZWwgPyBDaXRlVEIuZml4U3RyKGZpZWxkb2JqLmxhYmVsKSA6IENpdGVUQi5maXhTdHIobGFiZWxmaWVsZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdG9vbHRpcCA9IGZpZWxkb2JqLnRvb2x0aXBcblx0XHRcdFx0XHQ/ICQoJzxhYmJyPicpLmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZShmaWVsZG9iai50b29sdGlwKSkuaHRtbCgkKCc8c3VwPicpLnRleHQoJz8nKSlcblx0XHRcdFx0XHQ6IGZhbHNlO1xuXHRcdFx0XHRsZXQgaW5wdXQgPSAnJztcblx0XHRcdFx0aW5wdXQgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRcdFx0dGFiaW5kZXg6ICcxJyxcblx0XHRcdFx0XHRzdHlsZTogYWQgPyAnd2lkdGg6IDg1JScgOiAnd2lkdGg6IDEwMCUnLFxuXHRcdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlucHV0LmF0dHIoJ2lkJywgYGNpdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tJHtmaWVsZH1gKTtcblx0XHRcdFx0aWYgKGZpZWxkb2JqLmF1dG9maWxscHJvcCkge1xuXHRcdFx0XHRcdGxldCBjbGFzc25hbWUgPSBgY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS0ke2ZpZWxkb2JqLmF1dG9maWxscHJvcH1gO1xuXHRcdFx0XHRcdGlmIChmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXApIHtcblx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtZWRpYXdpa2kvY2xhc3MtZG9jXG5cdFx0XHRcdFx0XHRpbnB1dC5hZGRDbGFzcyhgY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS1pbmNyLSR7ZmllbGRvYmouaW5jcmVtZW50X2dyb3VwfWApO1xuXHRcdFx0XHRcdFx0Y2xhc3NuYW1lICs9IGAtJHt0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0udmFsLnRvU3RyaW5nKCl9YDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhd2lraS9jbGFzcy1kb2Ncblx0XHRcdFx0XHRpbnB1dC5hZGRDbGFzcyhjbGFzc25hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGxhYmVsID0gJCgnPGxhYmVsPicpO1xuXHRcdFx0XHRsYWJlbC5hdHRyKCdmb3InLCBgY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS0ke2ZpZWxkfWApLnRleHQoZGlzcGxheSk7XG5cdFx0XHRcdGlmICh0b29sdGlwKSB7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kKHRvb2x0aXApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBzdHlsZSA9ICd0ZXh0LWFsaWduOiByaWdodDsgd2lkdGg6IDIwJTsnO1xuXHRcdFx0XHRpZiAoaSAlIDIgPT09IDEpIHtcblx0XHRcdFx0XHRzdHlsZSArPSAnIHBhZGRpbmctbGVmdDogMWVtOyc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dHIgPSAkKCc8dHI+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdGQxID0gJCgnPHRkPicpLmFkZENsYXNzKCdjaXRlLWZvcm0tdGQnKS5hdHRyKHtcblx0XHRcdFx0XHRzdHlsZSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRkMS5hcHBlbmQobGFiZWwpO1xuXHRcdFx0XHR0ci5hcHBlbmQodGQxKTtcblx0XHRcdFx0Y29uc3QgdGQyID0gJCgnPHRkPicpLmFkZENsYXNzKCdjaXRlLWZvcm0tdGQnKS5jc3MoJ3dpZHRoJywgJzMwJScpO1xuXHRcdFx0XHR0ZDIuYXBwZW5kKGlucHV0KTtcblx0XHRcdFx0aWYgKGFkKSB7XG5cdFx0XHRcdFx0dGQyLmFwcGVuZChhZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dHIuYXBwZW5kKHRkMik7XG5cdFx0XHRcdGlmIChpICUgMiA9PT0gMCkge1xuXHRcdFx0XHRcdHRycy5wdXNoKHRyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bGV0IG5lZWRzZXR1cCA9IGZhbHNlO1xuXHRcdFx0Zm9yIChjb25zdCBnIGluIHRoaXMuaW5jcmVtZW50YWJsZXMpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmluY3JlbWVudGFibGVzW2ddLnNldHVwKSB7XG5cdFx0XHRcdFx0bmVlZHNldHVwID0gdHJ1ZTtcblx0XHRcdFx0XHQkKGRvY3VtZW50KS5vbignY2xpY2snLCBgI2NpdGUtaW5jci0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS0ke2d9YCwgQ2l0ZVRCLmluY3JlbWVudEZpZWxkcyk7XG5cdFx0XHRcdFx0dGhpcy5pbmNyZW1lbnRhYmxlc1tnXS5zZXR1cCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChuZWVkc2V0dXAgfHwgT2JqZWN0LmtleXModGhpcy5pbmNyZW1lbnRhYmxlcykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgYXV0b2ZpbGwgb2YgYXV0b2ZpbGxzKSB7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgYXV0b2ZpbGwsIENpdGVUQi5pbml0QXV0b2ZpbGwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJzO1xuXHRcdH1cblx0XHQvLyBnaXZlcyBhIGxpdHRsZSBiaXQgb2YgSFRNTCBzbyB0aGUgb3BlbiBmb3JtIGNhbiBiZSBpZGVudGlmaWVkXG5cdFx0Z2V0SW5pdGlhbCgpIHtcblx0XHRcdGNvbnN0IGhpZGRlbiA9ICQoJzxpbnB1dD4nKS5hZGRDbGFzcygnY2l0ZS10ZW1wbGF0ZScpLmF0dHIoe1xuXHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0dmFsdWU6IHRoaXMudGVtcGxhdGVuYW1lLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gaGlkZGVuO1xuXHRcdH1cblx0XHQvLyBtYWtlcyB0aGUgZm9ybSB1c2VkIGluIHRoZSBkaWFsb2cgYm94ZXNcblx0XHRnZXRGb3JtKCkge1xuXHRcdFx0Y29uc3QgbWFpbiA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2NpdGUtZm9ybS1jb250YWluZXInKTtcblx0XHRcdGNvbnN0IGZvcm0xID0gJCgnPHRhYmxlPicpLmFkZENsYXNzKCdjaXRlLWJhc2ljLWZpZWxkcycpLmNzcyh7XG5cdFx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdH0pO1xuXHRcdFx0bGV0IHRycyA9IHRoaXMubWFrZUZvcm1Jbm5lcih0aGlzLmJhc2ljLCB0cnVlKTtcblx0XHRcdGZvciAoY29uc3QgdHIgb2YgdHJzKSB7XG5cdFx0XHRcdGZvcm0xLmFwcGVuZCh0cik7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBmb3JtMiA9ICQoJzx0YWJsZT4nKS5hZGRDbGFzcygnY2l0ZS1leHRyYS1maWVsZHMnKS5jc3Moe1xuXHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRcdGRpc3BsYXk6ICdub25lJyxcblx0XHRcdH0pO1xuXHRcdFx0dHJzID0gdGhpcy5tYWtlRm9ybUlubmVyKHRoaXMuZXh0cmEsIHRydWUpO1xuXHRcdFx0Zm9yIChjb25zdCB0ciBvZiB0cnMpIHtcblx0XHRcdFx0Zm9ybTIuYXBwZW5kKHRyKTtcblx0XHRcdH1cblx0XHRcdG1haW4uYXBwZW5kKGZvcm0xKS5hcHBlbmQoZm9ybTIpO1xuXHRcdFx0Y29uc3QgZm9ybTMgPSAkKCc8dGFibGU+JykuYWRkQ2xhc3MoJ2NpdGUtb3RoZXItZmllbGRzJykuY3NzKHtcblx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdFx0J2JhY2tncm91bmQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0XHQncGFkZGluZy10b3AnOiAnMWVtJyxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgJHRyID0gJCgnPHRyPicpO1xuXHRcdFx0Y29uc3QgJHRkMSA9ICQoJzx0ZD4nKS5hZGRDbGFzcygnY2l0ZS1mb3JtLXRkJykuY3NzKHtcblx0XHRcdFx0J3RleHQtYWxpZ24nOiAncmlnaHQnLFxuXHRcdFx0XHR3aWR0aDogJzIwJScsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0ICRsYWJlbDEgPSAkKCc8bGFiZWw+Jyk7XG5cdFx0XHQkbGFiZWwxLmF0dHIoJ2ZvcicsIGBjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LW5hbWVgKS50ZXh0KGdldE1lc3NhZ2UoJ2NpdGUtbmFtZS1sYWJlbCcpKTtcblx0XHRcdCR0ZDEuYXBwZW5kKCRsYWJlbDEpO1xuXHRcdFx0Y29uc3QgdGQyID0gJCgnPHRkPicpLmFkZENsYXNzKCdjaXRlLWZvcm0tdGQnKS5jc3MoJ3dpZHRoJywgJzMwJScpO1xuXHRcdFx0Y29uc3QgaW5wdXQxID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0XHR0YWJpbmRleDogJzEnLFxuXHRcdFx0XHRzdHlsZTogJ3dpZHRoOiAxMDAlJyxcblx0XHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0fSk7XG5cdFx0XHRpbnB1dDEuYXR0cignaWQnLCBgY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS1uYW1lYCk7XG5cdFx0XHR0ZDIuYXBwZW5kKGlucHV0MSk7XG5cdFx0XHRjb25zdCB0ZDMgPSAkKCc8dGQ+JykuYWRkQ2xhc3MoJ2NpdGUtZm9ybS10ZCcpLmNzcyh7XG5cdFx0XHRcdCd0ZXh0LWFsaWduJzogJ3JpZ2h0Jyxcblx0XHRcdFx0J3BhZGRpbmctbGVmdCc6ICcxZW0nLFxuXHRcdFx0XHR3aWR0aDogJzIwJScsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGxhYmVsMiA9ICQoJzxsYWJlbD4nKTtcblx0XHRcdGxhYmVsMi5hdHRyKCdmb3InLCBgY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS1ncm91cGApLnRleHQoZ2V0TWVzc2FnZSgnY2l0ZS1ncm91cC1sYWJlbCcpKTtcblx0XHRcdHRkMy5hcHBlbmQobGFiZWwyKTtcblx0XHRcdGNvbnN0IHRkNCA9ICQoJzx0ZD4nKS5hZGRDbGFzcygnY2l0ZS1mb3JtLXRkJykuY3NzKCd3aWR0aCcsICczMCUnKTtcblx0XHRcdGNvbnN0IGlucHV0MiA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdFx0dGFiaW5kZXg6ICcxJyxcblx0XHRcdFx0c3R5bGU6ICd3aWR0aDogMTAwJScsXG5cdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdH0pO1xuXHRcdFx0aW5wdXQyLmF0dHIoJ2lkJywgYGNpdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tZ3JvdXBgKTtcblx0XHRcdHRkNC5hcHBlbmQoaW5wdXQyKTtcblx0XHRcdCR0ci5hcHBlbmQoJHRkMSkuYXBwZW5kKHRkMikuYXBwZW5kKHRkMykuYXBwZW5kKHRkNCk7XG5cdFx0XHRmb3JtMy5hcHBlbmQoJHRyKTtcblx0XHRcdG1haW4uYXBwZW5kKGZvcm0zKTtcblx0XHRcdGNvbnN0IGV4dHJhcyA9ICQoJzxkaXY+Jyk7XG5cdFx0XHRleHRyYXMuYXBwZW5kKFxuXHRcdFx0XHQkKCc8aW5wdXQ+JykuYWRkQ2xhc3MoJ2NpdGUtZm9ybS1zdGF0dXMnKS5hdHRyKHtcblx0XHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0XHR2YWx1ZTogJ2Nsb3NlZCcsXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgaGlkZGVuID0gJCgnPGlucHV0PicpLmFkZENsYXNzKCdjaXRlLXRlbXBsYXRlJykuYXR0cigndHlwZScsICdoaWRkZW4nKTtcblx0XHRcdGhpZGRlbi52YWwodGhpcy50ZW1wbGF0ZW5hbWUpO1xuXHRcdFx0ZXh0cmFzLmFwcGVuZChoaWRkZW4pO1xuXHRcdFx0Y29uc3Qgc3BhbjEgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnY2l0ZS1wcmV2aWV3LWxhYmVsJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHRcdHNwYW4xLnRleHQoZ2V0TWVzc2FnZSgnY2l0ZS1yYXctcHJldmlldycpKTtcblx0XHRcdGV4dHJhcy5hcHBlbmQoc3BhbjEpLmFwcGVuZChcblx0XHRcdFx0JCgnPGRpdj4nKS5hZGRDbGFzcygnY2l0ZS1yZWYtcHJldmlldycpLmNzcyh7XG5cdFx0XHRcdFx0cGFkZGluZzogJzAuNWVtJyxcblx0XHRcdFx0XHQnZm9udC1zaXplJzogJzExMCUnLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IHNwYW4yID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2NpdGUtcHJldi1wYXJzZWQtbGFiZWwnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0c3BhbjIudGV4dChnZXRNZXNzYWdlKCdjaXRlLXBhcnNlZC1sYWJlbCcpKTtcblx0XHRcdGV4dHJhcy5hcHBlbmQoc3BhbjIpLmFwcGVuZChcblx0XHRcdFx0JCgnPGRpdj4nKS5hZGRDbGFzcygnY2l0ZS1wcmV2aWV3LXBhcnNlZCcpLmNzcyh7XG5cdFx0XHRcdFx0J3BhZGRpbmctYm90dG9tJzogJzAuNWVtJyxcblx0XHRcdFx0XHQnZm9udC1zaXplJzogJzExMCUnLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGxpbmsgPSAkKCc8YT4nKS5hZGRDbGFzcygnY2l0ZS1wcmV2LXBhcnNlJykuYXR0cignaHJlZicsICcjJykuY3NzKHtcblx0XHRcdFx0bWFyZ2luOiAnMCAxZW0nLFxuXHRcdFx0XHRkaXNwbGF5OiAnbm9uZScsXG5cdFx0XHRcdGNvbG9yOiAnIzAwMDA4YicsXG5cdFx0XHR9KTtcblx0XHRcdGxpbmsudGV4dChnZXRNZXNzYWdlKCdjaXRlLWZvcm0tcGFyc2UnKSk7XG5cdFx0XHRleHRyYXMuYXBwZW5kKGxpbmspO1xuXHRcdFx0bWFpbi5hcHBlbmQoZXh0cmFzKTtcblx0XHRcdHJldHVybiBtYWluO1xuXHRcdH1cblx0fTtcblxuXHQkKGRvY3VtZW50KS5maW5kKCdoZWFkJykudHJpZ2dlcigncmVmdG9vbGJhcmJhc2UnKTtcbn07XG5cbmV4cG9ydCB7cmVmVG9vbGJhckJhc2V9O1xuIiwgImNvbnN0IHJlZlRvb2xiYXJNZXNhZ2VzID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dVc2VyTGFuZ3VhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z1VzZXJMYW5ndWFnZSA9PT0gJ2VuJykge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBBbGwgdXNlci1mYWNpbmcgbWVzc2FnZXNcblx0Ly8gVE9ETzogRG9jdW1lbnQgdXNhZ2Vcblx0aWYgKFsnemgtaGFudCcsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddLmluY2x1ZGVzKHdnVXNlckxhbmd1YWdlKSkge1xuXHRcdG13Lm1lc3NhZ2VzLnNldCh7XG5cdFx0XHQnY2l0ZS1zZWN0aW9uLWxhYmVsJzogJ+W8leeUqCcsXG5cdFx0XHQnY2l0ZS10ZW1wbGF0ZS1saXN0JzogJ+aooeadvycsXG5cdFx0XHQnY2l0ZS1uYW1lZC1yZWZzLWxhYmVsJzogJ+WQjOWQjeaWh+eNuycsXG5cdFx0XHQnY2l0ZS1uYW1lZC1yZWZzLXRpdGxlJzogJ+aPkuWFpeWQjOWQjeaWh+eNuycsXG5cdFx0XHQnY2l0ZS1uYW1lZC1yZWZzLWJ1dHRvbic6ICflt7Llkb3lkI3lj4PogIPmlofnjbsnLFxuXHRcdFx0J2NpdGUtbmFtZWQtcmVmcy1kcm9wZG93bic6ICflkIzlkI3mlofnjbsnLFxuXHRcdFx0Ly8gVXNlZCBvbiB0aGUgdG9wIG9mIHRoZSBuYW1lZCByZWZzIGxpc3QgZHJvcHNvd25cblx0XHRcdCdjaXRlLWRpYWxvZy1iYXNlJzogJ+W8leeUqCcsXG5cdFx0XHQnY2l0ZS1mb3JtLXN1Ym1pdCc6ICfmj5LlhaUnLFxuXHRcdFx0J2NpdGUtZm9ybS1zaG93aGlkZSc6ICfpoa/npLov6Zqx6JeP6aGN5aSW5Y2A5Z+fJyxcblx0XHRcdCdjaXRlLW5vLW5hbWVkcmVmcyc6ICflnKjmnKzpoIHmib7kuI3liLDku7vkvZXlkIzlkI3mlofnjbsnLFxuXHRcdFx0J2NpdGUtbmFtZWRyZWZzLWludHJvJzogJ+W+nuWIl+WHuueahOWPg+iAg+aWh+eNu+ebrumMhOS4remBuOaTh+S4gOWAi+WQjeWtl+OAgum7nuaTiuOAjOaPkuWFpeOAjeaPkuWFpeS4gOWAi+WPg+iAg+aWh+eNu+WIsOaWh+acrOS4reOAgicsXG5cdFx0XHQnY2l0ZS1yYXctcHJldmlldyc6ICfljp/lp4vnorzvvJonLFxuXHRcdFx0J2NpdGUtcGFyc2VkLWxhYmVsJzogJ+ino+aekOW+jOeahOWOn+Wni+eivO+8micsXG5cdFx0XHQnY2l0ZS1mb3JtLXBhcnNlJzogJ+mhr+ekuuino+aekOW+jOeahOmgkOimvScsXG5cdFx0XHQnY2l0ZS1yZWZwcmV2aWV3JzogJ+mgkOimvScsXG5cdFx0XHQnY2l0ZS1uYW1lLWxhYmVsJzogJ3JlZuWQjScsXG5cdFx0XHQnY2l0ZS1ncm91cC1sYWJlbCc6ICdyZWbntYQnLFxuXHRcdFx0J2NpdGUtZm9ybS1yZXNldCc6ICfph43oqK3ooajllq4nLFxuXHRcdFx0J2NpdGUtbG9hZGluZyc6ICfovInlhaXmlbjmk5onLFxuXHRcdFx0Ly8gU2hvd24gd2hpbGUgcGFnZXRleHQgaXMgYmVpbmcgZG93bmxvYWRlZCBmcm9tIHRoZSBBUElcblx0XHRcdCdjaXRlLWluc2VydC1kYXRlJzogJ+aPkuWFpeeVtuWJjeaXpeacnycsXG5cdFx0XHQvLyBBbHQvdGl0bGUgdGV4dCBmb3IgXCJpbnNlcnQgZGF0ZVwiIGljb25cblx0XHRcdCdjaXRlLWVyci1yZXBvcnQtaGVhZGluZyc6ICflvJXnlKjpjK/oqqTloLHlkYonLFxuXHRcdFx0Ly8gSGVhZGluZyBmb3IgZXJyb3IgcmVwb3J0IHRhYmxlXG5cdFx0XHQnY2l0ZS1lcnItcmVwb3J0LWNsb3NlJzogJ+mXnOmWiScsXG5cdFx0XHQvLyBBbHQvdGl0bGUgdGV4dCBmb3IgXCJjbG9zZVwiIGljb24gb24gZXJyb3IgcmVwb3J0XG5cdFx0XHQnY2l0ZS1lcnItcmVwb3J0LWVtcHR5JzogJ+acquaJvuWIsOmMr+iqpCcsXG5cdFx0XHQvLyBNZXNzYWdlIGRpc3BsYXllZCBpbiB0aGUgZXJyb3IgcmVwb3J0IGxpc3QgaWYgdGhlcmUgYXJlIG5vIGVycm9yc1xuXHRcdFx0J2NpdGUtYXV0b2ZpbGwtYWx0JzogJ+iHquWLleWhq+WFhScsXG5cdFx0XHQvLyBBbHQgdGV4dCBmb3IgYXV0b2ZpbGwgYnV0dG9uIGltYWdlXG5cdFx0XHQnY2l0ZS1yZWYtdG9vbHRpcCc6ICfpjKjpu57nmoTmqJnorZjnrKbvvIjkvb/oqbLlvJXnlKjlj6/ku6XmiJDngrrlhafpg6jpgKPntZDnmoTnm67mqJnvvIknLFxuXHRcdFx0J2NpdGUtcG9zdHNjcmlwdC10b29sdGlwJzogJ+WmguaenOioreWumumAmeS4gOWPg+aVuO+8jOWJh+imhuiTi+S9v+eUqOWPpem7nue1guatouW8leaWh+eahOm7mOiqjeihjOeIsicsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctd2ViJzogJ+e2sumggeW8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctbmV3cyc6ICfmlrDogZ7lvJXnlKgnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLWJvb2snOiAn5pu457GN5byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1qb3VybmFsJzogJ+acn+WIiuW8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctY29uZmVyZW5jZSc6ICfmnIPorbDlvJXnlKgnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLWVuY3ljbG9wZWRpYSc6ICfnmb7np5Hlhajmm7jlvJXnlKgnLFxuXHRcdFx0J2NpdGUtYXV0aG9yLWxhYmVsJzogJ+S9nOiAhScsXG5cdFx0XHQnY2l0ZS10aXRsZS1sYWJlbCc6ICfmqJnpoYwnLFxuXHRcdFx0J2NpdGUtdXJsLWxhYmVsJzogJ+e2suWdgCcsXG5cdFx0XHQnY2l0ZS13ZWJzaXRlLWxhYmVsJzogJ+e2suermeWQjeeosScsXG5cdFx0XHQnY2l0ZS13b3JrLWxhYmVsJzogJ+Wgsee0meaIlumbnOiqjCcsXG5cdFx0XHQnY2l0ZS1hZ2VuY3ktbGFiZWwnOiAn6YCa6KiK56S+Jyxcblx0XHRcdCdjaXRlLXB1Ymxpc2hlci1sYWJlbCc6ICflh7rniYjogIUnLFxuXHRcdFx0J2NpdGUtYWNjZXNzZGF0ZS1sYWJlbCc6ICflrZjlj5bml6XmnJ8nLFxuXHRcdFx0J2NpdGUtbGFzdC1sYWJlbCc6ICflp5MnLFxuXHRcdFx0J2NpdGUtZmlyc3QtbGFiZWwnOiAn5ZCNJyxcblx0XHRcdCdjaXRlLWF1dGhvcmxpbmstbGFiZWwnOiAn5L2c6ICF5qKd55uuJyxcblx0XHRcdCdjaXRlLWNvYXV0aG9ycy1sYWJlbCc6ICflhbbku5bkvZzogIUnLFxuXHRcdFx0J2NpdGUtbG9jYXRpb24tbGFiZWwnOiAn5Ye654mI5ZywJyxcblx0XHRcdCdjaXRlLXBhZ2UtbGFiZWwnOiAn5omA5Zyo6aCBJyxcblx0XHRcdCdjaXRlLXBhZ2VzLWxhYmVsJzogJ+mggeevhOWcjScsXG5cdFx0XHQnY2l0ZS1hdC1sYWJlbCc6ICfmm7jlhafpg6jliIYnLFxuXHRcdFx0J2NpdGUtbGFuZ3VhZ2UtbGFiZWwnOiAn6Kqe6KiAJyxcblx0XHRcdCdjaXRlLWZvcm1hdC1sYWJlbCc6ICfmlofku7bmoLzlvI8nLFxuXHRcdFx0J2NpdGUtZG9pLWxhYmVsJzogJ0RPSScsXG5cdFx0XHQnY2l0ZS1kYXRlLWxhYmVsJzogJ+aXpeacnycsXG5cdFx0XHQnY2l0ZS1tb250aC1sYWJlbCc6ICfmnIjku70nLFxuXHRcdFx0J2NpdGUteWVhci1sYWJlbCc6ICflubTku70nLFxuXHRcdFx0J2NpdGUtcXVvdGUtbGFiZWwnOiAn5pGY6YyEJyxcblx0XHRcdCdjaXRlLW5ld3NwYXBlci1sYWJlbCc6ICfmlrDogZ7lqpLpq5QnLFxuXHRcdFx0J2NpdGUtYXV0aG9yMi1sYWJlbCc6ICfnrKwy5L2c6ICFJyxcblx0XHRcdCdjaXRlLWF1dGhvcjMtbGFiZWwnOiAn56ysM+S9nOiAhScsXG5cdFx0XHQnY2l0ZS1hdXRob3I0LWxhYmVsJzogJ+esrDTkvZzogIUnLFxuXHRcdFx0J2NpdGUtYXV0aG9yNS1sYWJlbCc6ICfnrKw15L2c6ICFJyxcblx0XHRcdCdjaXRlLWFnZW5jeSc6ICfpgJroqIrnpL4nLFxuXHRcdFx0J2NpdGUtaXNzbi1sYWJlbCc6ICdJU1NOJyxcblx0XHRcdCdjaXRlLW9jbGMtbGFiZWwnOiAnT0NMQycsXG5cdFx0XHQnY2l0ZS1iaWJjb2RlLWxhYmVsJzogJ0JpYmNvZGUnLFxuXHRcdFx0J2NpdGUtaXNibi1sYWJlbCc6ICdJU0JOJyxcblx0XHRcdCdjaXRlLW90aGVycy1sYWJlbCc6ICfora/ogIUnLFxuXHRcdFx0J2NpdGUtZWRpdGlvbi1sYWJlbCc6ICfniYjmnKwnLFxuXHRcdFx0J2NpdGUtdHJhbnMtdGl0bGUtbGFiZWwnOiAn57+76K2v5b6M5qiZ6aGMJyxcblx0XHRcdCdjaXRlLXJlZi1sYWJlbCc6ICfpjKjpu57mqJnorZjnrKYnLFxuXHRcdFx0J2NpdGUtcG9zdHNjcmlwdC1sYWJlbCc6ICfnu5PlsL7nrKYnLFxuXHRcdFx0J2NpdGUtc2VyaWVzLWxhYmVsJzogJ+ezu+WIlycsXG5cdFx0XHQnY2l0ZS12b2x1bWUtbGFiZWwnOiAn5Y23Jyxcblx0XHRcdCdjaXRlLXVuaWZpZWQtbGFiZWwnOiAn57Wx5LiA5pu46JmfJyxcblx0XHRcdCdjaXRlLWNoYXB0ZXItbGFiZWwnOiAn56ug56+AJyxcblx0XHRcdCdjaXRlLWpvdXJuYWwtbGFiZWwnOiAn6Zuc6KqML+acn+WIiicsXG5cdFx0XHQnY2l0ZS1pc3N1ZS1sYWJlbCc6ICfmnJ8nLFxuXHRcdFx0J2NpdGUtcG1pZC1sYWJlbCc6ICdQTUlEJyxcblx0XHRcdCdjaXRlLWVkaXRvci1sYWJlbCc6ICfnt6jovK8nLFxuXHRcdFx0J2NpdGUtZWRpdG9yMS1maXJzdC1sYWJlbCc6ICfnt6jovK/lkI0nLFxuXHRcdFx0J2NpdGUtZWRpdG9yMS1sYXN0LWxhYmVsJzogJ+e3qOi8r+WnkycsXG5cdFx0XHQnY2l0ZS1lZGl0b3IxLWxpbmstbGFiZWwnOiAn57eo6Lyv5qKd55uuJyxcblx0XHRcdCdjaXRlLWVkaXRvci1maXJzdC1sYWJlbCc6ICfnt6jovK/lkI0nLFxuXHRcdFx0J2NpdGUtZWRpdG9yLWxhc3QtbGFiZWwnOiAn57eo6Lyv5aeTJyxcblx0XHRcdCdjaXRlLWVkaXRvci1saW5rLWxhYmVsJzogJ+e3qOi8r+aineebricsXG5cdFx0XHQnY2l0ZS1wbWMtbGFiZWwnOiAnUE1DJyxcblx0XHRcdCdjaXRlLWlkLWxhYmVsJzogJ0lEJyxcblx0XHRcdCdjaXRlLWxheXN1bW1hcnktbGFiZWwnOiAn57Ch5piO5pGY6KaBJyxcblx0XHRcdCdjaXRlLWxheXNvdXJjZS1sYWJlbCc6ICfnsKHmmI7mkZjopoHkvobmupAnLFxuXHRcdFx0J2NpdGUtbGF5ZGF0ZS1sYWJlbCc6ICfnsKHmmI7mkZjopoHml6XmnJ8nLFxuXHRcdFx0J2NpdGUtY29uZmVyZW5jZS1sYWJlbCc6ICfmnIPorbDlkI3nqLEnLFxuXHRcdFx0J2NpdGUtY29uZmVyZW5jZXVybC1sYWJlbCc6ICfmnIPorbDntrLlnYAnLFxuXHRcdFx0J2NpdGUtYm9va3RpdGxlLWxhYmVsJzogJ+irluaWh+mbhicsXG5cdFx0XHQnY2l0ZS1lbmN5Y2xvcGVkaWEtbGFiZWwnOiAn55m+56eR5YWo5pu45ZCNJyxcblx0XHRcdCdjaXRlLWF1dGhvcmxpbmstdG9vbHRpcCc6ICfoi6XoqbLkvZzogIXmnInmop3nm67vvIzloavlr6vmop3nm67lkI3nqLEnLFxuXHRcdFx0J2NpdGUtYXQtdG9vbHRpcCc6ICflhaflrrnlnKjkvobmupDkuK3nmoTkvY3nva7vvIjnlbbmjInpoIHnorzlvJXnlKjkuI3pgannlbbmmYLvvIknLFxuXHRcdFx0J2NpdGUtYWNjZXNzZGF0ZS10b29sdGlwJzogJ+ioquWVj+mAmeWAi+W8leeUqOS+hua6kOaZgueahOaXpeacnycsXG5cdFx0XHQnY2l0ZS1pZC10b29sdGlwJzogJ+WFtuS7lueahOaWh+eroOe3qOiZnycsXG5cdFx0XHQnY2l0ZS1zYW1lY29udGVudC1kZXNjJzogJ+aqouafpeWQq+acieebuOWQjOWFp+WuueeahOWkmuWAi+WPg+iAg+aWh+eNuycsXG5cdFx0XHQnY2l0ZS1zYW1lY29udGVudC1lcnJvcic6ICflpJrlgIvlj4PogIPmlofnjbvljIXlkKvmnInnm7jlkIzlhaflrrknLFxuXHRcdFx0J2NpdGUtcmVwZWF0ZWQtZGVzYyc6ICfkvb/nlKjnm7jlkIzlkI3lrZfnmoTlpJrlgIvlj4PogIPmlofnjbsnLFxuXHRcdFx0J2NpdGUtcmVwZWF0ZWQtZXJyb3InOiAn5aSa5YCL5Y+D6ICD5paH54275L2/55So5LqG55u45ZCM5ZCN5a2XJyxcblx0XHRcdCdjaXRlLXVuZGVmaW5lZC1kZXNjJzogJ+acquWumue+qeeahOWPg+iAg+aWh+eNuycsXG5cdFx0XHQnY2l0ZS11bmRlZmluZWQtZXJyb3InOiAn5LiA5YCL5bey5ZG95ZCN55qE5Y+D6ICD5paH54275bey57aT5L2/55So5L2G5piv5rKS5pyJ5a6a576pJyxcblx0XHRcdCdjaXRlLXdvcmstdG9vbHRpcCc6ICfliIrnmbvoqbLkvZzlk4HnmoTlh7rniYjniannmoTlkI3nqLHjgILoq4vkuI3opoHkvb/nlKjmlpzpq5QnLFxuXHRcdFx0J2NpdGUtbmV3c3BhcGVyLXRvb2x0aXAnOiAn5YiK55m76Kmy5paw6IGe55qE5Ye654mI54mp5ZCN56ixJyxcblx0XHRcdCdjaXRlLXNlcmllcy10b29sdGlwJzogJ+eVtuabuOexjeaYr+S4gOezu+WIl+WHuueJiOWTgeS4reeahOWFtuS4reS4gOmDqOS7veaZguS9v+eUqCcsXG5cdFx0XHQnY2l0ZS11bmlmaWVkLXRvb2x0aXAnOiAnMTk4MOW5tOS7o+S5i+WJjeS4reWci+aJgOS9v+eUqOeahOabuOexjee3qOiZnycsXG5cdFx0XHQnY2l0ZS1sYXlzdW1tYXJ5LXRvb2x0aXAnOiAn6Kmy5paH542755u46Zec55qE5paw6IGe5aCx6YGT55qEVVJMJyxcblx0XHRcdCdjaXRlLWxheXNvdXJjZS10b29sdGlwJzogJ+ipsuaWh+eNu+ebuOmXnOeahOaWsOiBnuWgsemBk+eahOWHuuiZlScsXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHRcdCdjaXRlLXNlY3Rpb24tbGFiZWwnOiAn5byV55SoJyxcblx0XHRcdCdjaXRlLXRlbXBsYXRlLWxpc3QnOiAn5qih5p2/Jyxcblx0XHRcdCdjaXRlLW5hbWVkLXJlZnMtbGFiZWwnOiAn5ZCM5ZCN5paH54yuJyxcblx0XHRcdCdjaXRlLW5hbWVkLXJlZnMtdGl0bGUnOiAn5o+S5YWl5ZCM5ZCN5paH54yuJyxcblx0XHRcdCdjaXRlLW5hbWVkLXJlZnMtYnV0dG9uJzogJ+W3suWRveWQjeWPguiAg+aWh+eMricsXG5cdFx0XHQnY2l0ZS1uYW1lZC1yZWZzLWRyb3Bkb3duJzogJ+WQjOWQjeaWh+eMricsXG5cdFx0XHQvLyBVc2VkIG9uIHRoZSB0b3Agb2YgdGhlIG5hbWVkIHJlZnMgbGlzdCBkcm9wc293blxuXHRcdFx0J2NpdGUtZGlhbG9nLWJhc2UnOiAn5byV55SoJyxcblx0XHRcdCdjaXRlLWZvcm0tc3VibWl0JzogJ+aPkuWFpScsXG5cdFx0XHQnY2l0ZS1mb3JtLXNob3doaWRlJzogJ+aYvuekui/pmpDol4/pop3lpJbljLrln58nLFxuXHRcdFx0J2NpdGUtbm8tbmFtZWRyZWZzJzogJ+WcqOacrOmhteaJvuS4jeWIsOS7u+S9leWQjOWQjeaWh+eMricsXG5cdFx0XHQnY2l0ZS1uYW1lZHJlZnMtaW50cm8nOiAn5LuO5YiX5Ye655qE5Y+C6ICD5paH54yu55uu5b2V5Lit6YCJ5oup5LiA5Liq5ZCN5a2X44CC54K55Ye74oCc5o+S5YWl4oCd5o+S5YWl5LiA5Liq5Y+C6ICD5paH54yu5Yiw5paH5pys5Lit44CCJyxcblx0XHRcdCdjaXRlLXJhdy1wcmV2aWV3JzogJ+a6kOS7o+egge+8micsXG5cdFx0XHQnY2l0ZS1wYXJzZWQtbGFiZWwnOiAn6Kej5p6Q5ZCO55qE5rqQ5Luj56CB77yaJyxcblx0XHRcdCdjaXRlLWZvcm0tcGFyc2UnOiAn5pi+56S66Kej5p6Q5ZCO55qE6aKE6KeIJyxcblx0XHRcdCdjaXRlLXJlZnByZXZpZXcnOiAn6aKE6KeIJyxcblx0XHRcdCdjaXRlLW5hbWUtbGFiZWwnOiAncmVm5ZCNJyxcblx0XHRcdCdjaXRlLWdyb3VwLWxhYmVsJzogJ3JlZue7hCcsXG5cdFx0XHQnY2l0ZS1mb3JtLXJlc2V0JzogJ+mHjeiuvuihqOWNlScsXG5cdFx0XHQnY2l0ZS1sb2FkaW5nJzogJ+i9veWFpeaVsOaNricsXG5cdFx0XHQvLyBTaG93biB3aGlsZSBwYWdldGV4dCBpcyBiZWluZyBkb3dubG9hZGVkIGZyb20gdGhlIEFQSVxuXHRcdFx0J2NpdGUtaW5zZXJ0LWRhdGUnOiAn5o+S5YWl5b2T5YmN5pel5pyfJyxcblx0XHRcdC8vIEFsdC90aXRsZSB0ZXh0IGZvciBcImluc2VydCBkYXRlXCIgaWNvblxuXHRcdFx0J2NpdGUtZXJyLXJlcG9ydC1oZWFkaW5nJzogJ+W8leeUqOmUmeivr+aKpeWRiicsXG5cdFx0XHQvLyBIZWFkaW5nIGZvciBlcnJvciByZXBvcnQgdGFibGVcblx0XHRcdCdjaXRlLWVyci1yZXBvcnQtY2xvc2UnOiAn5YWz6ZetJyxcblx0XHRcdC8vIEFsdC90aXRsZSB0ZXh0IGZvciBcImNsb3NlXCIgaWNvbiBvbiBlcnJvciByZXBvcnRcblx0XHRcdCdjaXRlLWVyci1yZXBvcnQtZW1wdHknOiAn5pyq5om+5Yiw6ZSZ6K+vJyxcblx0XHRcdC8vIE1lc3NhZ2UgZGlzcGxheWVkIGluIHRoZSBlcnJvciByZXBvcnQgbGlzdCBpZiB0aGVyZSBhcmUgbm8gZXJyb3JzXG5cdFx0XHQnY2l0ZS1hdXRvZmlsbC1hbHQnOiAn6Ieq5Yqo5aGr5YWFJyxcblx0XHRcdC8vIEFsdCB0ZXh0IGZvciBhdXRvZmlsbCBidXR0b24gaW1hZ2Vcblx0XHRcdCdjaXRlLXJlZi10b29sdGlwJzogJ+mUmueCueeahOagh+ivhuespu+8iOS9v+ivpeW8leeUqOWPr+S7peaIkOS4uuWGhemDqOmTvuaOpeeahOebruagh++8iScsXG5cdFx0XHQnY2l0ZS1wb3N0c2NyaXB0LXRvb2x0aXAnOiAn5aaC5p6c6K6+5a6a6L+Z5LiA5Y+C5pWw77yM5YiZ6KaG55uW5L2/55So5Y+l54K557uI5q2i5byV5paH55qE6buY6K6k6KGM5Li6Jyxcblx0XHRcdCdjaXRlLWRpYWxvZy13ZWInOiAn572R6aG15byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1uZXdzJzogJ+aWsOmXu+W8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctYm9vayc6ICfkuabnsY3lvJXnlKgnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLWpvdXJuYWwnOiAn5pyf5YiK5byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1jb25mZXJlbmNlJzogJ+S8muiuruW8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctZW5jeWNsb3BlZGlhJzogJ+eZvuenkeWFqOS5puW8leeUqCcsXG5cdFx0XHQnY2l0ZS1hdXRob3ItbGFiZWwnOiAn5L2c6ICFJyxcblx0XHRcdCdjaXRlLXRpdGxlLWxhYmVsJzogJ+agh+mimCcsXG5cdFx0XHQnY2l0ZS11cmwtbGFiZWwnOiAn572R5Z2AJyxcblx0XHRcdCdjaXRlLXdlYnNpdGUtbGFiZWwnOiAn572R56uZ5ZCN56ewJyxcblx0XHRcdCdjaXRlLXdvcmstbGFiZWwnOiAn5oql57q45oiW5p2C5b+XJyxcblx0XHRcdCdjaXRlLWFnZW5jeS1sYWJlbCc6ICfpgJrorq/npL4nLFxuXHRcdFx0J2NpdGUtcHVibGlzaGVyLWxhYmVsJzogJ+WHuueJiOiAhScsXG5cdFx0XHQnY2l0ZS1hY2Nlc3NkYXRlLWxhYmVsJzogJ+iuv+mXruaXpeacnycsXG5cdFx0XHQnY2l0ZS1sYXN0LWxhYmVsJzogJ+WnkycsXG5cdFx0XHQnY2l0ZS1maXJzdC1sYWJlbCc6ICflkI0nLFxuXHRcdFx0J2NpdGUtYXV0aG9ybGluay1sYWJlbCc6ICfkvZzogIXmnaHnm64nLFxuXHRcdFx0J2NpdGUtY29hdXRob3JzLWxhYmVsJzogJ+WFtuS7luS9nOiAhScsXG5cdFx0XHQnY2l0ZS1sb2NhdGlvbi1sYWJlbCc6ICflh7rniYjlnLAnLFxuXHRcdFx0J2NpdGUtcGFnZS1sYWJlbCc6ICfmiYDlnKjpobUnLFxuXHRcdFx0J2NpdGUtcGFnZXMtbGFiZWwnOiAn6aG16IyD5Zu0Jyxcblx0XHRcdCdjaXRlLWF0LWxhYmVsJzogJ+S5puWGhemDqOWIhicsXG5cdFx0XHQnY2l0ZS1sYW5ndWFnZS1sYWJlbCc6ICfor63oqIAnLFxuXHRcdFx0J2NpdGUtZm9ybWF0LWxhYmVsJzogJ+aWh+aho+agvOW8jycsXG5cdFx0XHQnY2l0ZS1kb2ktbGFiZWwnOiAnRE9JJyxcblx0XHRcdCdjaXRlLWRhdGUtbGFiZWwnOiAn5pel5pyfJyxcblx0XHRcdCdjaXRlLW1vbnRoLWxhYmVsJzogJ+aciOS7vScsXG5cdFx0XHQnY2l0ZS15ZWFyLWxhYmVsJzogJ+W5tOS7vScsXG5cdFx0XHQnY2l0ZS1xdW90ZS1sYWJlbCc6ICfmkZjlvZUnLFxuXHRcdFx0J2NpdGUtbmV3c3BhcGVyLWxhYmVsJzogJ+aWsOmXu+WqkuS9kycsXG5cdFx0XHQnY2l0ZS1hdXRob3IyLWxhYmVsJzogJ+esrDLkvZzogIUnLFxuXHRcdFx0J2NpdGUtYXV0aG9yMy1sYWJlbCc6ICfnrKwz5L2c6ICFJyxcblx0XHRcdCdjaXRlLWF1dGhvcjQtbGFiZWwnOiAn56ysNOS9nOiAhScsXG5cdFx0XHQnY2l0ZS1hdXRob3I1LWxhYmVsJzogJ+esrDXkvZzogIUnLFxuXHRcdFx0J2NpdGUtYWdlbmN5JzogJ+mAmuiur+ekvicsXG5cdFx0XHQnY2l0ZS1pc3NuLWxhYmVsJzogJ0lTU04nLFxuXHRcdFx0J2NpdGUtb2NsYy1sYWJlbCc6ICdPQ0xDJyxcblx0XHRcdCdjaXRlLWJpYmNvZGUtbGFiZWwnOiAnQmliY29kZScsXG5cdFx0XHQnY2l0ZS1pc2JuLWxhYmVsJzogJ0lTQk4nLFxuXHRcdFx0J2NpdGUtb3RoZXJzLWxhYmVsJzogJ+ivkeiAhScsXG5cdFx0XHQnY2l0ZS1lZGl0aW9uLWxhYmVsJzogJ+eJiOacrCcsXG5cdFx0XHQnY2l0ZS10cmFucy10aXRsZS1sYWJlbCc6ICfnv7vor5HlkI7moIfpopgnLFxuXHRcdFx0J2NpdGUtcmVmLWxhYmVsJzogJ+mUmueCueagh+ivhuespicsXG5cdFx0XHQnY2l0ZS1wb3N0c2NyaXB0LWxhYmVsJzogJ+e7k+WwvuespicsXG5cdFx0XHQnY2l0ZS1zZXJpZXMtbGFiZWwnOiAn57O75YiXJyxcblx0XHRcdCdjaXRlLXZvbHVtZS1sYWJlbCc6ICfljbcnLFxuXHRcdFx0J2NpdGUtdW5pZmllZC1sYWJlbCc6ICfnu5/kuIDkuablj7cnLFxuXHRcdFx0J2NpdGUtY2hhcHRlci1sYWJlbCc6ICfnq6DoioInLFxuXHRcdFx0J2NpdGUtam91cm5hbC1sYWJlbCc6ICfmnYLlv5cv5pyf5YiKJyxcblx0XHRcdCdjaXRlLWlzc3VlLWxhYmVsJzogJ+acnycsXG5cdFx0XHQnY2l0ZS1wbWlkLWxhYmVsJzogJ1BNSUQnLFxuXHRcdFx0J2NpdGUtZWRpdG9yLWxhYmVsJzogJ+e8lui+kScsXG5cdFx0XHQnY2l0ZS1lZGl0b3IxLWZpcnN0LWxhYmVsJzogJ+e8lui+keWQjScsXG5cdFx0XHQnY2l0ZS1lZGl0b3IxLWxhc3QtbGFiZWwnOiAn57yW6L6R5aeTJyxcblx0XHRcdCdjaXRlLWVkaXRvcjEtbGluay1sYWJlbCc6ICfnvJbovpHmnaHnm64nLFxuXHRcdFx0J2NpdGUtZWRpdG9yLWZpcnN0LWxhYmVsJzogJ+e8lui+keWQjScsXG5cdFx0XHQnY2l0ZS1lZGl0b3ItbGFzdC1sYWJlbCc6ICfnvJbovpHlp5MnLFxuXHRcdFx0J2NpdGUtZWRpdG9yLWxpbmstbGFiZWwnOiAn57yW6L6R5p2h55uuJyxcblx0XHRcdCdjaXRlLXBtYy1sYWJlbCc6ICdQTUMnLFxuXHRcdFx0J2NpdGUtaWQtbGFiZWwnOiAnSUQnLFxuXHRcdFx0J2NpdGUtbGF5c3VtbWFyeS1sYWJlbCc6ICfnroDmmI7mkZjopoEnLFxuXHRcdFx0J2NpdGUtbGF5c291cmNlLWxhYmVsJzogJ+eugOaYjuaRmOimgeadpea6kCcsXG5cdFx0XHQnY2l0ZS1sYXlkYXRlLWxhYmVsJzogJ+eugOaYjuaRmOimgeaXpeacnycsXG5cdFx0XHQnY2l0ZS1jb25mZXJlbmNlLWxhYmVsJzogJ+S8muiuruWQjeensCcsXG5cdFx0XHQnY2l0ZS1jb25mZXJlbmNldXJsLWxhYmVsJzogJ+S8muiurue9keWdgCcsXG5cdFx0XHQnY2l0ZS1ib29rdGl0bGUtbGFiZWwnOiAn6K665paH6ZuGJyxcblx0XHRcdCdjaXRlLWVuY3ljbG9wZWRpYS1sYWJlbCc6ICfnmb7np5HlhajkuablkI0nLFxuXHRcdFx0J2NpdGUtYXV0aG9ybGluay10b29sdGlwJzogJ+iLpeivpeS9nOiAheacieadoeebru+8jOWhq+WGmeadoeebruWQjeensCcsXG5cdFx0XHQnY2l0ZS1hdC10b29sdGlwJzogJ+WGheWuueWcqOadpea6kOS4reeahOS9jee9ru+8iOW9k+aMiemhteeggeW8leeUqOS4jemAguW9k+aXtu+8iScsXG5cdFx0XHQnY2l0ZS1hY2Nlc3NkYXRlLXRvb2x0aXAnOiAn6K6/6Zeu6L+Z5Liq5byV55So5p2l5rqQ5pe255qE5pel5pyfJyxcblx0XHRcdCdjaXRlLWlkLXRvb2x0aXAnOiAn5YW25LuW55qE5paH56ug57yW5Y+3Jyxcblx0XHRcdCdjaXRlLXNhbWVjb250ZW50LWRlc2MnOiAn5qOA5p+l5ZCr5pyJ55u45ZCM5YaF5a6555qE5aSa5Liq5Y+C6ICD5paH54yuJyxcblx0XHRcdCdjaXRlLXNhbWVjb250ZW50LWVycm9yJzogJ+WkmuS4quWPguiAg+aWh+eMruWMheWQq+acieebuOWQjOWGheWuuScsXG5cdFx0XHQnY2l0ZS1yZXBlYXRlZC1kZXNjJzogJ+S9v+eUqOebuOWQjOWQjeWtl+eahOWkmuS4quWPguiAg+aWh+eMricsXG5cdFx0XHQnY2l0ZS1yZXBlYXRlZC1lcnJvcic6ICflpJrkuKrlj4LogIPmlofnjK7kvb/nlKjkuobnm7jlkIzlkI3lrZcnLFxuXHRcdFx0J2NpdGUtdW5kZWZpbmVkLWRlc2MnOiAn5pyq5a6a5LmJ55qE5Y+C6ICD5paH54yuJyxcblx0XHRcdCdjaXRlLXVuZGVmaW5lZC1lcnJvcic6ICfkuIDkuKrlt7Llkb3lkI3nmoTlj4LogIPmlofnjK7lt7Lnu4/kvb/nlKjkvYbmmK/msqHmnInlrprkuYknLFxuXHRcdFx0J2NpdGUtd29yay10b29sdGlwJzogJ+WIiueZu+ivpeS9nOWTgeeahOWHuueJiOeJqeeahOWQjeensOOAguivt+S4jeimgeS9v+eUqOaWnOS9kycsXG5cdFx0XHQnY2l0ZS1uZXdzcGFwZXItdG9vbHRpcCc6ICfliIrnmbvoqbLmlrDogZ7nmoTlh7rniYjnianlkI3np7AnLFxuXHRcdFx0J2NpdGUtc2VyaWVzLXRvb2x0aXAnOiAn5b2T5Lmm57GN5piv5LiA57O75YiX5Ye654mI5ZOB5Lit55qE5YW25Lit5LiA6YOo5Lu95pe25L2/55SoJyxcblx0XHRcdCdjaXRlLXVuaWZpZWQtdG9vbHRpcCc6ICcxOTgw5bm05Luj5LmL5YmN5Lit5Zu95omA5L2/55So55qE5Lmm57GN57yW5Y+3Jyxcblx0XHRcdCdjaXRlLWxheXN1bW1hcnktdG9vbHRpcCc6ICfor6XmlofnjK7nm7jlhbPnmoTmlrDpl7vmiqXpgZPnmoRVUkwnLFxuXHRcdFx0J2NpdGUtbGF5c291cmNlLXRvb2x0aXAnOiAn6K+l5paH54yu55u45YWz55qE5paw6Ze75oql6YGT55qE5Ye65aSEJyxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHtyZWZUb29sYmFyTWVzYWdlc307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSx3RkFBQUEsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRLFNBQVUsSUFBSTtBQUN4QixhQUFPLE1BQU0sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUNuQztBQUdBLElBQUFBLFFBQU87QUFBQSxJQUVMLE1BQU0sT0FBTyxjQUFjLFlBQVksVUFBVSxLQUNqRCxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU07QUFBQSxJQUV6QyxNQUFNLE9BQU8sUUFBUSxZQUFZLElBQUksS0FDckMsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNLEtBQ3pDLE1BQU0sT0FBTyxXQUFRLFlBQVksT0FBSTtBQUFBLElBRXBDLDJCQUFZO0FBQUUsYUFBTztBQUFBLElBQU0sRUFBRyxLQUFLLFNBQVMsYUFBYSxFQUFFO0FBQUE7QUFBQTs7O0FDZjlEO0FBQUEsdUZBQUFDLFNB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O0FBRUEsTUFBSTNHLFNBQVMyUyxjQUFjLHFDQUFxQyxHQUFHO0FBQ2xFO0VBQ0Q7QUFHQVAsb0JBQWtCO0FBRWxCL0MsaUJBQWU7QUFDZixRQUFBLEdBQUsxUixtQkFBQWlWLFNBQVEsRUFBRTdMLEtBQUt2SCxXQUFXO0FBQ2hDLEdBQUc7IiwKICAibmFtZXMiOiBbIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJTeW1ib2wiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImRvY3VtZW50IiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlR5cGVFcnJvciIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICIkIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYXJncyIsICJsZW5ndGgiLCAibXciLCAibWVzc2FnZSIsICJwYXJzZSIsICJwbGFpbiIsICJyZWZUb29sYmFyQ29uZmlnIiwgIkNpdGVUZW1wbGF0ZSIsICJ3aW5kb3ciLCAiQ2l0ZVRCIiwgIk9wdGlvbnMiLCAibW9udGhzIiwgIm1vZGFsIiwgImF1dG9wYXJzZSIsICJleHBhbmR0ZW1wbGF0ZXMiLCAiZmllbGQiLCAiaW5jcmVtZW50X2dyb3VwIiwgImluY3JlbWVudF9idXR0b24iLCAiYXV0b2ZpbGxwcm9wIiwgImF1dG9maWxsaWQiLCAidG9vbHRpcCIsICJpbml0IiwgInJlZlRvb2xiYXIyIiwgIiRib2R5IiwgIkRlZmF1bHRPcHRpb25zIiwgImdldE9wdGlvbiIsICJvcHQiLCAiVXNlck9wdGlvbnMiLCAiXyQkd2lkdGgyIiwgIiQiLCAiZG9jdW1lbnQiLCAiZmluZCIsICJ0cmlnZ2VyIiwgIiR0YXJnZXQiLCAidGVtbGlzdCIsICJ0IiwgIlRlbXBsYXRlcyIsICJPYmplY3QiLCAiaGFzT3duIiwgIl8kJHdpZHRoIiwgInRlbSIsICJzZm9ybSIsICJlc2NTdHIiLCAic2hvcnRmb3JtIiwgImFjdGlvbm9iaiIsICJ0eXBlIiwgIm1vZHVsZSIsICJjb25jYXQiLCAiZGlhbG9nb2JqIiwgInJlc2l6ZW1lIiwgInRpdGxlIiwgImlkIiwgImh0bWwiLCAiZ2V0SW5pdGlhbCIsICJkaWFsb2ciLCAid2lkdGgiLCAiTWF0aCIsICJyb3VuZCIsICJvcGVuIiwgImdldE9wZW5UZW1wbGF0ZSIsICJnZXRGb3JtIiwgIm9uIiwgImUiLCAicHJldmVudERlZmF1bHQiLCAicHJldlBhcnNlQ2xpY2siLCAiYnV0dG9ucyIsICJyZWYiLCAiZ2V0UmVmIiwgIndpa2lFZGl0b3IiLCAibW9kdWxlcyIsICJ0b29sYmFyIiwgImZuIiwgImRvQWN0aW9uIiwgImRhdGEiLCAib3B0aW9ucyIsICJwb3N0IiwgInNob3dIaWRlRXh0cmEiLCAidGVtcGxhdGUiLCAiZGl2IiwgInNob3ciLCAidGV4dCIsICJoaWRlIiwgInJlc2V0Rm9ybSIsICJsYWJlbCIsICJ0ZW1wbGF0ZW5hbWUiLCAiYWN0aW9uIiwgInJlZnNlY3Rpb24iLCAic2VjdGlvbnMiLCAiY2l0ZXMiLCAiZ3JvdXBzIiwgInRvb2xzIiwgImxpc3QiLCAibmFtZWRyZWZzIiwgIm5yZWZzIiwgImljb24iLCAic2VjdGlvbiIsICJncm91cCIsICJkZWZhdWx0ZGlhbG9ncyIsICJsb2FkUmVmcyIsICJyZWZuYW1lIiwgInZhbCIsICJnZXROYW1lZFJlZiIsICJvZmYiLCAidXRpbCIsICJhZGRDU1MiLCAibWFpblJlZkxpc3QiLCAicmVmc0xvYWRlZCIsICJpbm5lcm9ubHkiLCAiZm9yaW5zZXJ0IiwgImkiLCAiaiIsICJnIiwgInJlcyIsICJyZWZvYmoiLCAic2hvcnR0YWciLCAiU3RyaW5nIiwgInRyaW0iLCAiZ2V0UXVvdGVkU3RyaW5nIiwgInJlZmdyb3VwIiwgImNvbnRlbnQiLCAiaW5jcmVtZW50YWJsZXMiLCAiZmllbGRzIiwgImZpZWxkbmFtZSIsICJmaWVsZGlkIiwgInJlcGxhY2UiLCAidG9TdHJpbmciLCAiYmFzaWMiLCAiZXh0cmEiLCAicHVzaCIsICJnZXRQYWdlVGV4dCIsICJsb2FkUmVmc0ludGVybmFsIiwgInJlZnNyZWdleCIsICJleGVjIiwgInNldHVwTmFtZWRSZWZzIiwgImNhbGxiYWNrIiwgInBvc3RkYXRhIiwgImNvbmZpZyIsICJnZXQiLCAicHJvcCIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0aGVuIiwgInJlc3RleHQiLCAid2lraXRleHQiLCAid2dBcnRpY2xlSWQiLCAicnZwcm9wIiwgInBhZ2VpZHMiLCAicnZleHBhbmR0ZW1wbGF0ZXMiLCAicXVlcnkiLCAicGFnZXRleHQiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgInNhZmVEZWNvZGVVUklDb21wb25lbnQiLCAicyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAiaW5pdEF1dG9maWxsIiwgIl8kJGF0dHIiLCAiZWxlbWlkIiwgImF0dHIiLCAiYXV0b3R5cGUiLCAidXJsIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJjcmVhdGVFbGVtZW50IiwgInNldEF0dHJpYnV0ZSIsICJoZWFkIiwgImFwcGVuZCIsICJhdXRvRmlsbCIsICJjbCIsICJjb2F1dGhvcnMiLCAiYXV0aG9ycyIsICJfJCRlcSRhdHRyIiwgImNsYXNzZXMiLCAiZXEiLCAic3BsaXQiLCAicGF0dCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAibiIsICJkb25lIiwgImNsYXNzXyIsICJ2YWx1ZSIsICJlcnIiLCAiZiIsICJfJCRlcSRhdHRyMiIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJqb2luIiwgImRhdGUiLCAiRFQiLCAiRGF0ZSIsICJ0ZXN0IiwgImZvcm1hdERhdGUiLCAiam91cm5hbCIsICJ2b2x1bWUiLCAiaXNzdWUiLCAiZG9pIiwgInB1Ymxpc2hlciIsICJsb2NhdGlvbiIsICJlZGl0aW9uIiwgImlzYm4iLCAiaXNzbiIsICJsYW5ndWFnZSIsICJjaGFwdGVyIiwgImluY3JlbWVudEZpZWxkcyIsICJfJCRhdHRyMiIsICJjdXJyZW50cm93IiwgInBhcmVudHMiLCAicHJldiIsICJjc3MiLCAiZGV0YWNoIiwgImluY3JlbWVudHMiLCAidHJzIiwgIm1ha2VGb3JtSW5uZXIiLCAicmV2ZXJzZSIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJ0ciIsICJhZnRlciIsICJmaWxsQWNjZXNzZGF0ZSIsICJfJCRhdHRyMyIsICJkYXRlc3RyIiwgInVzZWRheSIsICJ1c2Vtb250aCIsICJ6bW9udGgiLCAibW9udGgiLCAiZ2V0VVRDTW9udGgiLCAiemRhdGUiLCAiZ2V0VVRDRGF0ZSIsICJnZXRVVENGdWxsWWVhciIsICJuYW1lcyIsICJzdHVmZiIsICJzZWxlY3QiLCAiYmVmb3JlIiwgInByZXZsYWJlbCIsICJwYXJzZWxhYmVsIiwgImxpbmsiLCAiaHJlZiIsICJtYXJnaW4iLCAiZGlzcGxheSIsICJjb2xvciIsICJuYW1lZFJlZlNlbGVjdENsaWNrIiwgIm5yZWZQYXJzZUNsaWNrIiwgImZpbGxOcmVmUHJldmlldyIsICJwYXJzZWQiLCAiY2hvaWNlIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImxhc3RuYW1lZHJlZmNob2ljZSIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJmaWxsVGVtcGxhdGVQcmV2aWV3IiwgInNldHRpbmciLCAic3EiLCAiZHEiLCAiZml4U3RyIiwgInNsaWNlIiwgInRvVXBwZXJDYXNlIiwgImRpYWxvZ3MiLCAiZGlzcGxheUVycm9ycyIsICJlcnJvcnMiLCAicmVtb3ZlIiwgInRhYmxlIiwgImJvcmRlciIsICJwYWRkaW5nIiwgInRyMSIsICJ0aDEiLCAidGgyIiwgImltIiwgImFkIiwgInRkIiwgImVycm9yIiwgInRkMSIsICJ0ZDIiLCAibXNnIiwgInJlZlRvb2xiYXJCYXNlIiwgIl93aW5kb3ciLCAiY29uc3RydWN0b3IiLCAiYmFzaWNmaWVsZHMiLCAiZXhwYW5kZWRmaWVsZHMiLCAiaW5jcnNldHVwIiwgImF1dG9maWxscyIsICJfaXRlcmF0b3I2IiwgImVudHJpZXMiLCAiX3N0ZXA2IiwgImZpZWxkb2JqIiwgImxhYmVsZmllbGQiLCAic2V0dXAiLCAiaW5jcnZhbCIsICJhdXRvZGF0ZUZpZWxkcyIsICJpbmNsdWRlcyIsICJpbmNydHlwZSIsICJpbnB1dCIsICJ0YWJpbmRleCIsICJzdHlsZSIsICJjbGFzc25hbWUiLCAiYWRkQ2xhc3MiLCAibmVlZHNldHVwIiwgImtleXMiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiYXV0b2ZpbGwiLCAiaGlkZGVuIiwgIm1haW4iLCAiZm9ybTEiLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAiZm9ybTIiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAiZm9ybTMiLCAiJHRyIiwgIiR0ZDEiLCAiJGxhYmVsMSIsICJpbnB1dDEiLCAidGQzIiwgImxhYmVsMiIsICJ0ZDQiLCAiaW5wdXQyIiwgImV4dHJhcyIsICJzcGFuMSIsICJzcGFuMiIsICJyZWZUb29sYmFyTWVzYWdlcyIsICJ3Z1VzZXJMYW5ndWFnZSIsICJtZXNzYWdlcyIsICJzZXQiLCAid2dBY3Rpb24iLCAid2dQYWdlQ29udGVudE1vZGVsIiwgInVzZXIiLCAicXVlcnlTZWxlY3RvciIsICJnZXRCb2R5Il0KfQo=
