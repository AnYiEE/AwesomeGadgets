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
var _templateObject;
var _templateObject2;
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
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
    return s.replace(/\s/g, "-").replace(/'/g, String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["'"], ["\\'"])))).replace(/"/g, String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(['"'], ['\\"']))));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgInNyYy9FZGl0dG9vbHMtcmVmVG9vbGJhci9FZGl0dG9vbHMtcmVmVG9vbGJhci50cyIsICJzcmMvRWRpdHRvb2xzLXJlZlRvb2xiYXIvbW9kdWxlcy91dGlsL2FwaS50cyIsICJzcmMvRWRpdHRvb2xzLXJlZlRvb2xiYXIvbW9kdWxlcy91dGlsL2dldE1lc3NhZ2UudHMiLCAic3JjL0VkaXR0b29scy1yZWZUb29sYmFyL21vZHVsZXMvUmVmVG9vbGJhckNvbmZpZy5qcyIsICJzcmMvRWRpdHRvb2xzLXJlZlRvb2xiYXIvbW9kdWxlcy9SZWZUb29sYmFyMi4wLmpzIiwgInNyYy9FZGl0dG9vbHMtcmVmVG9vbGJhci9tb2R1bGVzL1JlZlRvb2xiYXJCYXNlLmpzIiwgInNyYy9FZGl0dG9vbHMtcmVmVG9vbGJhci9tb2R1bGVzL21lc3NhZ2VzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzcuMScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI0IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzcuMS9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4wLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFua3MgdG8gSUU4IGZvciBpdHMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVjggfiBDaHJvbWUgMzYtXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMzM0XG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ3Byb3RvdHlwZScsIHtcbiAgICB2YWx1ZTogNDIsXG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pLnByb3RvdHlwZSAhPT0gNDI7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IFR5cGUoYXJndW1lbnQpIGlzIE9iamVjdGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc09iamVjdChhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJFN0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXREZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIEVYSVNUUyA9IGhhc093bihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKTtcbi8vIGFkZGl0aW9uYWwgcHJvdGVjdGlvbiBmcm9tIG1pbmlmaWVkIC8gbWFuZ2xlZCAvIGRyb3BwZWQgZnVuY3Rpb24gbmFtZXNcbnZhciBQUk9QRVIgPSBFWElTVFMgJiYgKGZ1bmN0aW9uIHNvbWV0aGluZygpIHsgLyogZW1wdHkgKi8gfSkubmFtZSA9PT0gJ3NvbWV0aGluZyc7XG52YXIgQ09ORklHVVJBQkxFID0gRVhJU1RTICYmICghREVTQ1JJUFRPUlMgfHwgKERFU0NSSVBUT1JTICYmIGdldERlc2NyaXB0b3IoRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJykuY29uZmlndXJhYmxlKSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFWElTVFM6IEVYSVNUUyxcbiAgUFJPUEVSOiBQUk9QRVIsXG4gIENPTkZJR1VSQUJMRTogQ09ORklHVVJBQkxFXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc3RvcmUuZ2V0ID0gc3RvcmUuZ2V0O1xuICBzdG9yZS5oYXMgPSBzdG9yZS5oYXM7XG4gIHN0b3JlLnNldCA9IHN0b3JlLnNldDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoc3RvcmUuaGFzKGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgc3RvcmUuc2V0KGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0KGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmhhcyhpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChoYXNPd24oaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkNPTkZJR1VSQUJMRTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG52YXIgQ09ORklHVVJBQkxFX0xFTkdUSCA9IERFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdsZW5ndGgnLCB7IHZhbHVlOiA4IH0pLmxlbmd0aCAhPT0gODtcbn0pO1xuXG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbnZhciBtYWtlQnVpbHRJbiA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBuYW1lLCBvcHRpb25zKSB7XG4gIGlmIChzdHJpbmdTbGljZSgkU3RyaW5nKG5hbWUpLCAwLCA3KSA9PT0gJ1N5bWJvbCgnKSB7XG4gICAgbmFtZSA9ICdbJyArIHJlcGxhY2UoJFN0cmluZyhuYW1lKSwgL15TeW1ib2xcXCgoW14pXSopXFwpLiokLywgJyQxJykgKyAnXSc7XG4gIH1cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZXR0ZXIpIG5hbWUgPSAnZ2V0ICcgKyBuYW1lO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNldHRlcikgbmFtZSA9ICdzZXQgJyArIG5hbWU7XG4gIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICduYW1lJywgeyB2YWx1ZTogbmFtZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIGVsc2UgdmFsdWUubmFtZSA9IG5hbWU7XG4gIH1cbiAgaWYgKENPTkZJR1VSQUJMRV9MRU5HVEggJiYgb3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2FyaXR5JykgJiYgdmFsdWUubGVuZ3RoICE9PSBvcHRpb25zLmFyaXR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkodmFsdWUsICdsZW5ndGgnLCB7IHZhbHVlOiBvcHRpb25zLmFyaXR5IH0pO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdjb25zdHJ1Y3RvcicpICYmIG9wdGlvbnMuY29uc3RydWN0b3IpIHtcbiAgICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICdwcm90b3R5cGUnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTtcbiAgICAvLyBpbiBWOCB+IENocm9tZSA1MywgcHJvdG90eXBlcyBvZiBzb21lIG1ldGhvZHMsIGxpa2UgYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgLCBhcmUgbm9uLXdyaXRhYmxlXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5wcm90b3R5cGUpIHZhbHVlLnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gIGlmICghaGFzT3duKHN0YXRlLCAnc291cmNlJykpIHtcbiAgICBzdGF0ZS5zb3VyY2UgPSBqb2luKFRFTVBMQVRFLCB0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZSAtLSByZXF1aXJlZFxuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbWFrZUJ1aWx0SW4oZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHRoaXMpICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59LCAndG9TdHJpbmcnKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucy5lbnVtZXJhYmxlO1xuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuICBpZiAoaXNDYWxsYWJsZSh2YWx1ZSkpIG1ha2VCdWlsdEluKHZhbHVlLCBuYW1lLCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVHbG9iYWxQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFvcHRpb25zLnVuc2FmZSkgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGVsc2UgaWYgKE9ba2V5XSkgc2ltcGxlID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6ICFvcHRpb25zLm5vbkNvbmZpZ3VyYWJsZSxcbiAgICAgIHdyaXRhYmxlOiAhb3B0aW9ucy5ub25Xcml0YWJsZVxuICAgIH0pO1xuICB9IHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBNYXRoLnRydW5jYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC50cnVuY1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtdHJ1bmMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uIHRydW5jKHgpIHtcbiAgdmFyIG4gPSAreDtcbiAgcmV0dXJuIChuID4gMCA/IGZsb29yIDogY2VpbCkobik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0cnVuYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXRoLXRydW5jJyk7XG5cbi8vIGBUb0ludGVnZXJPckluZmluaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2Vyb3JpbmZpbml0eVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIG51bWJlciA9ICthcmd1bWVudDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiB0cnVuYyhudW1iZXIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbGVuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCk7XG4gIHJldHVybiBsZW4gPiAwID8gbWluKGxlbiwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGV4Y2VwdGlvbnMpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpICYmICEoZXhjZXB0aW9ucyAmJiBoYXNPd24oZXhjZXB0aW9ucywga2V5KSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogaXNDYWxsYWJsZShkZXRlY3Rpb24pID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAgICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMuZG9udENhbGxHZXRTZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4gIG9wdGlvbnMubmFtZSAgICAgICAgICAgLSB0aGUgLm5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBrZXlcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gJiYgZ2xvYmFsW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09PSAnQXJyYXknO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIFNhZmFyaSA8IDEzIGRvZXMgbm90IHRocm93IGFuIGVycm9yIGluIHRoaXMgY2FzZVxudmFyIFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA9IERFU0NSSVBUT1JTICYmICFmdW5jdGlvbiAoKSB7XG4gIC8vIG1ha2VzIG5vIHNlbnNlIHdpdGhvdXQgcHJvcGVyIHN0cmljdCBtb2RlIHN1cHBvcnRcbiAgaWYgKHRoaXMgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkubGVuZ3RoID0gMTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPyBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIGlmIChpc0FycmF5KE8pICYmICFnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgJ2xlbmd0aCcpLndyaXRhYmxlKSB7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBzZXQgcmVhZCBvbmx5IC5sZW5ndGgnKTtcbiAgfSByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59IDogZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgc2V0QXJyYXlMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aCcpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIElOQ09SUkVDVF9UT19MRU5HVEggPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbXS5wdXNoLmNhbGwoeyBsZW5ndGg6IDB4MTAwMDAwMDAwIH0sIDEpICE9PSA0Mjk0OTY3Mjk3O1xufSk7XG5cbi8vIFY4IDw9IDEyMSBhbmQgU2FmYXJpIDw9IDE1LjQ7IEZGIDwgMjMgdGhyb3dzIEludGVybmFsRXJyb3Jcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTEyNjgxXG52YXIgcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLnB1c2goKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn07XG5cbnZhciBGT1JDRUQgPSBJTkNPUlJFQ1RfVE9fTEVOR1RIIHx8ICFwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGgoKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5wdXNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnB1c2hcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKGl0ZW0pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgYXJnQ291bnQgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihsZW4gKyBhcmdDb3VudCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdDb3VudDsgaSsrKSB7XG4gICAgICBPW2xlbl0gPSBhcmd1bWVudHNbaV07XG4gICAgICBsZW4rKztcbiAgICB9XG4gICAgc2V0QXJyYXlMZW5ndGgoTywgbGVuKTtcbiAgICByZXR1cm4gbGVuO1xuICB9XG59KTtcbiIsICJpbXBvcnQgJy4vRWRpdHRvb2xzLXJlZlRvb2xiYXIubGVzcyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3JlZlRvb2xiYXIyfSBmcm9tICcuL21vZHVsZXMvUmVmVG9vbGJhcjIuMCc7XG5pbXBvcnQge3JlZlRvb2xiYXJCYXNlfSBmcm9tICcuL21vZHVsZXMvUmVmVG9vbGJhckJhc2UnO1xuaW1wb3J0IHtyZWZUb29sYmFyTWVzYWdlc30gZnJvbSAnLi9tb2R1bGVzL21lc3NhZ2VzJztcblxuLyoqXG4gKiBSZWZUb29sYmFyXG4gKlxuICogQWRkcyB0b29scyBmb3IgY2l0aW5nIHJlZmVyZW5jZXMgdG8gdGhlIGVkaXQgdG9vbGJhci5cbiAqIE9uZSBvZiB0d28gcG9zc2libGUgdmVyc2lvbnMgd2lsbCBsb2FkIChSZWZ0b29sYmFyIDEuMCBvciBSZWZ0b29sYmFyIDEuMClcbiAqIGRlcGVuZGluZyBvbiB0aGUgdXNlciBwcmVmZXJlbmNlcyAodGhlIHVzZWJldGF0b29sYmFyIHByZWZlcmVuY2UpLlxuICpcbiAqIEBhdXRob3IgTXIuWi1tYW4sIEthbGRhcmlcbiAqL1xuKCgpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z1BhZ2VDb250ZW50TW9kZWx9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdC8vIE9ubHkgZXhlY3V0ZSB3aGVuIGVkaXRpbmcvcHJldmlld2luZyB3aWtpdGV4dCBwYWdlc1xuXHRpZiAoIVsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyh3Z0FjdGlvbikgfHwgd2dQYWdlQ29udGVudE1vZGVsICE9PSAnd2lraXRleHQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCFtdy51c2VyLm9wdGlvbnMuZ2V0KCd1c2ViZXRhdG9vbGJhcicpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV1bcmVhZG9ubHldJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBMb2FkIGxvY2FsIG1lc3NhZ2VzLlxuXHRyZWZUb29sYmFyTWVzYWdlcygpO1xuXHQvLyBMb2FkIG1haW4gZnVuY3Rpb25zXG5cdHJlZlRvb2xiYXJCYXNlKCk7XG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4ocmVmVG9vbGJhcjIpO1xufSkoKTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1JlZlRvb2xiYXIvMi4wJyk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJjb25zdCBnZXRNZXNzYWdlID0gKGtleTogc3RyaW5nLCAuLi5hcmdzOiBzdHJpbmdbXSk6IHN0cmluZyA9PiB7XG5cdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRyZXR1cm4gYXJncy5sZW5ndGggPyBtdy5tZXNzYWdlKGtleSwgLi4uYXJncykucGFyc2UoKSA6IG13Lm1lc3NhZ2Uoa2V5KS5wbGFpbigpO1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICIvKiBnbG9iYWwgQ2l0ZVRCICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UsIG5vLW5ldywgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50ICovXG4vLyBAdHMtbm9jaGVja1xuLyoqXG4gKiBTaXRld2lkZSBvcHRpb25zIGZvciB0aGUgdGhlIENpdGUgdG9vbGJhciBidXR0b246XG4gKiBBbGwgb3B0aW9ucyBzaG91bGQgYmUgc3BlY2lmaWVkXG4gKlxuICogXCJkYXRlIGZvcm1hdFwiIHNldHMgdGhlIGRhdGUgZm9ybWF0IHVzZWQgZm9yIHRoZSBmdW5jdGlvbiB0byBpbnNlcnQgdGhlIGN1cnJlbnQgZGF0ZVxuICogQ3VycmVudCBhdmFpbGFibGUgb3B0aW9uczpcbiAqIGRhdGUgLSB0aGUgZGF5IG9mIHRoZSBtb250aFxuICogemRhdGUgLSBkYXkgb2YgdGhlIG1vbnRoLCB6ZXJvIHBhZGRlZCB0byAyIGRpZ2l0c1xuICogbW9udGhuYW1lIC0gVGhlIG1vbnRoIG5hbWVcbiAqIG1vbnRoIC0gVGhlIG51bWJlcmljIG1vbnRoICgxLTEyKVxuICogem1vbnRoIC0gbnVtZXJpYyBtb250aCwgemVybyBwYWRkZWQgdG8gMiBkaWdpdHNcbiAqIHllYXIgLSBUaGUgZnVsbCB5ZWFyICg0IGRpZ2l0cylcbiAqXG4gKiBcImF1dG9kYXRlIGZpZWxkc1wiIGlzIGEgbGlzdCBvZiB0ZW1wbGF0ZSBmaWVsZHMgdGhhdCBzaG91bGQgaGF2ZSBhIGJ1dHRvbiB0byBpbnNlcnQgdGhlIGN1cnJlbnQgZGF0ZVxuICpcbiAqIFwibW9udGhzXCIgaXMgYSBsaXN0IG9mIGxvY2FsaXplZCBtb250aCBuYW1lc1xuICpcbiAqIFwibW9kYWxcIiAtIGlmIHRydWUsIHRoZSBkaWFsb2dzIHdpbGwgYmUgbW9kYWwgd2luZG93cywgYmxvY2tpbmcgYWNjZXNzIHRvIHRoZSByZXN0IG9mIHRoZSB3aW5kb3cuXG4gKiBBbGwgZGlhbG9ncyBpbiB0aGUgdG9vbGJhciBhcmUgbW9kYWwgYnkgZGVmYXVsdFxuICpcbiAqIFwiYXV0b3BhcnNlXCIgLSBpZiB0cnVlLCBwcmV2aWV3aW5nIGEgcmVmIHdpbGwgYXV0b21hdGljYWxseSB0cmlnZ2VyIGEgcHJldmlldyBvZiB0aGUgcGFyc2VkIHdpa2l0ZXh0LlxuICogSXQgaXMgbm90IHJlY29tbWVuZGVkIHRvIHNldCB0aGlzIHRvIHRydWUgYXMgYSBnbG9iYWwgc2V0dGluZyBhcyBpdCBtYXkgc2xvdyB0aGUgc2NyaXB0IGRvd24gZm9yXG4gKiBwZW9wbGUgd2l0aCBzbG93IGNvbm5lY3Rpb25zLlxuICpcbiAqIFwiZXhwYW5kdGVtcGxhdGVzXCIgLSBpZiB0cnVlLCB0ZW1wbGF0ZXMgYW5kIHBhcnNlciBmdW5jdGlvbnMgd2lsbCBiZSBleHBhbmRlZCB3aGVuIGdldHRpbmcgcGFnZSB0ZXh0XG4gKiAodGVtcGxhdGVzIGluc2lkZSBvZiByZWYgdGFncyB3aWxsIG5vdCBiZSBleHBhbmRlZCkuIFRoaXMgd2lsbCBhbGxvdyByZWZlcmVuY2VzIGluc2lkZSBvZiB0ZW1wbGF0ZXMgb3JcbiAqIHJlZmVyZW5jZXMgdXNpbmcge3sjdGFnOnJlZn19IHRvIGJlIGxpc3RlZCBpbiB0aGUgbmFtZWQgcmVmcyBkaWFsb2cgYW5kIHNlYXJjaGVkIGJ5IGVycm9yIGNoZWNrcy5cbiAqIFRoaXMgbWF5IHNsb3cgbG9hZGluZyB0aGUgbmFtZWQgcmVmcyBhbmQgZXJyb3IgY2hlY2sgZGlhbG9ncy5cbiAqL1xuY29uc3QgcmVmVG9vbGJhckNvbmZpZyA9ICgpID0+IHtcblx0Y29uc3Qge0NpdGVUZW1wbGF0ZX0gPSB3aW5kb3c7XG5cblx0Q2l0ZVRCLk9wdGlvbnMgPSB7XG5cdFx0J2RhdGUgZm9ybWF0JzogJzx5ZWFyPi08em1vbnRoPi08emRhdGU+Jyxcblx0XHQnYXV0b2RhdGUgZmllbGRzJzogWydhY2Nlc3NkYXRlJ10sXG5cdFx0bW9udGhzOiBbJzHmnIgnLCAnMuaciCcsICcz5pyIJywgJzTmnIgnLCAnNeaciCcsICc25pyIJywgJzfmnIgnLCAnOOaciCcsICc55pyIJywgJzEw5pyIJywgJzEx5pyIJywgJzEy5pyIJ10sXG5cdFx0bW9kYWw6IHRydWUsXG5cdFx0YXV0b3BhcnNlOiB0cnVlLFxuXHRcdGV4cGFuZHRlbXBsYXRlczogZmFsc2UsXG5cdH07XG5cblx0Ly8gQ2l0ZSB0ZW1wbGF0ZSBkZWZpbml0aW9uc1xuXHRuZXcgQ2l0ZVRlbXBsYXRlKFxuXHRcdCdjaXRlIHdlYicsXG5cdFx0J3dlYicsXG5cdFx0W1xuXHRcdFx0Ly8gQmFzaWMgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9yPE4+Jyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yX2FsdCcsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3RpdGxlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAndGl0bGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd1cmwnLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAndXJsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnd2Vic2l0ZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2pvdXJuYWwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwdWJsaXNoZXInLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwdWJsaXNoZXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhY2Nlc3NkYXRlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncmVmJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcmVmLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdC8vIEV4cGFuZGVkIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcmxpbms8Tj4nLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1hdXRob3JsaW5rLXRvb2x0aXAnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3JsaW5rJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFzdDxOPicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhc3QtaW5jcicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2ZpcnN0PE4+Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZmlyc3QtaW5jcicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcicsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xvY2F0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZScsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBhZ2UtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BhZ2VzJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAncGFnZXMnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1wYWdlcy10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYW5ndWFnZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2Zvcm1hdCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2RvaScsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICdkb2knLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdkb2knLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkYXRlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3F1b3RlJyxcblx0XHRcdH0sXG5cdFx0XVxuXHQpO1xuXHRuZXcgQ2l0ZVRlbXBsYXRlKFxuXHRcdCdjaXRlIG5ld3MnLFxuXHRcdCduZXdzJyxcblx0XHRbXG5cdFx0XHQvLyBCYXNpYyBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3I8Tj4nLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3JfYWx0Jyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndGl0bGUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICd0aXRsZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3VybCcsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICd1cmwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhY2Nlc3NkYXRlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnd29yaycsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXdvcmstdG9vbHRpcCcsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2pvdXJuYWwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhZ2VuY3knLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpc3N1ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3B1Ymxpc2hlcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3B1Ymxpc2hlcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2RhdGUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdkYXRlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncmVmJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcmVmLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdC8vIEV4cGFuZGVkIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcmxpbms8Tj4nLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1hdXRob3JsaW5rLXRvb2x0aXAnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3JsaW5rJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFzdDxOPicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhc3QtaW5jcicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2ZpcnN0PE4+Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZmlyc3QtaW5jcicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcicsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xvY2F0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZScsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBhZ2UtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BhZ2VzJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAncGFnZXMnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1wYWdlcy10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYW5ndWFnZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2Zvcm1hdCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2RvaScsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICdkb2knLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdkb2knLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdxdW90ZScsXG5cdFx0XHR9LFxuXHRcdF1cblx0KTtcblx0bmV3IENpdGVUZW1wbGF0ZShcblx0XHQnY2l0ZSBib29rJyxcblx0XHQnYm9vaycsXG5cdFx0W1xuXHRcdFx0Ly8gQmFzaWMgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9yPE4+Jyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yX2FsdCcsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2NvYXV0aG9ycycsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2NvYXV0aG9ycycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3RpdGxlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAndGl0bGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkYXRlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAneWVhcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3B1Ymxpc2hlcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3B1Ymxpc2hlcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xvY2F0aW9uJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbG9jYXRpb24nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpc2JuJyxcblx0XHRcdFx0LyogXCJhdXRvZmlsbGlkXCI6XCJpc2JuXCIsICovIGF1dG9maWxscHJvcDogJ2lzYm4nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwYWdlJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcGFnZS10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZXMnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwYWdlcycsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBhZ2VzLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0aW9uJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZWRpdGlvbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3VybCcsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICd1cmwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhY2Nlc3NkYXRlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncmVmJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcmVmLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdC8vIEV4cGFuZGVkIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhc3Q8Tj4nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYXN0LWluY3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3InLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmaXJzdDxOPicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2ZpcnN0LWluY3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3JsaW5rPE4+Jyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtYXV0aG9ybGluay10b29sdGlwJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9ybGluaycsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRvcjxOPi1sYXN0Jyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnZWRpdG9yJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdG9yPE4+LWZpcnN0Jyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnZWRpdG9yJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdG9yPE4+LWxpbmsnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdlZGl0b3JsaW5rJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYW5ndWFnZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2Zvcm1hdCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2NoYXB0ZXInLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdjaGFwdGVyJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncXVvdGUnLFxuXHRcdFx0fSxcblx0XHRdXG5cdCk7XG5cdG5ldyBDaXRlVGVtcGxhdGUoXG5cdFx0J2NpdGUgam91cm5hbCcsXG5cdFx0J2pvdXJuYWwnLFxuXHRcdFtcblx0XHRcdC8vIEJhc2ljIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcjxOPicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcl9hbHQnLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdjb2F1dGhvcnMnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdjb2F1dGhvcnMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd0aXRsZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3RpdGxlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnam91cm5hbCcsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2pvdXJuYWwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkYXRlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3ZvbHVtZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3ZvbHVtZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2lzc3VlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnaXNzdWUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwYWdlJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcGFnZS10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZXMnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwYWdlcycsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBhZ2VzLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkb2knLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAnZG9pJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZG9pJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncG1pZCcsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICdwbWlkJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndXJsJyxcblx0XHRcdFx0YXV0b2ZpbGxpZDogJ3VybCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2FjY2Vzc2RhdGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdyZWYnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1yZWYtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W1xuXHRcdFx0Ly8gRXhwYW5kZWQgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9ybGluazxOPicsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWF1dGhvcmxpbmstdG9vbHRpcCcsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcmxpbmsnLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYXN0PE4+Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFzdC1pbmNyJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZmlyc3Q8Tj4nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdmaXJzdC1pbmNyJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdG9yPE4+LWxhc3QnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdlZGl0b3InLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0b3I8Tj4tZmlyc3QnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdlZGl0b3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0b3I8Tj4tbGluaycsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2VkaXRvcmxpbmsnLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdzZXJpZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdCcsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWF0LXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd0cmFucy10aXRsZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3B1Ymxpc2hlcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3B1Ymxpc2hlcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xvY2F0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYW5ndWFnZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2Zvcm1hdCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2lzc24nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdpc3NuJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncG1jJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnb2NsYycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2JpYmNvZGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpZCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3F1b3RlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncG9zdHNjcmlwdCcsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBvc3RzY3JpcHQtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdF1cblx0KTtcblx0bmV3IENpdGVUZW1wbGF0ZShcblx0XHQnY2l0ZSBjb25mZXJlbmNlJyxcblx0XHQnY29uZmVyZW5jZScsXG5cdFx0W1xuXHRcdFx0Ly8gQmFzaWMgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9yJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnYXV0aG9yMScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2NvYXV0aG9ycycsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2NvYXV0aG9ycycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3RpdGxlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAndGl0bGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdjb25mZXJlbmNlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnY29uZmVyZW5jZXVybCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2Jvb2t0aXRsZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2pvdXJuYWwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkYXRlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3llYXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdtb250aCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3ZvbHVtZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3ZvbHVtZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3B1Ymxpc2hlcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3B1Ymxpc2hlcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xvY2F0aW9uJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbG9jYXRpb24nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpc2JuJyAvKiAsIFwiYXV0b2ZpbGxpZFwiOlwiaXNiblwiICovLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwYWdlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2RvaScsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICdkb2knLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdkb2knLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwbWlkJyxcblx0XHRcdFx0YXV0b2ZpbGxpZDogJ3BtaWQnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd1cmwnLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAndXJsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYWNjZXNzZGF0ZScsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWFjY2Vzc2RhdGUtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W1xuXHRcdFx0Ly8gRXhwYW5kZWQgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFzdCcsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhc3QxJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZmlyc3QnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdmaXJzdDEnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3JsaW5rJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtYXV0aG9ybGluay10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdG9yJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnb3RoZXJzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdGlvbicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2VkaXRpb24nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYW5ndWFnZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhbmd1YWdlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZm9ybWF0Jyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnaXNzbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ29jbGMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpZCcsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWlkLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdxdW90ZScsXG5cdFx0XHR9LFxuXHRcdF1cblx0KTtcblx0bmV3IENpdGVUZW1wbGF0ZShcblx0XHQnY2l0ZSBlbmN5Y2xvcGVkaWEnLFxuXHRcdCdlbmN5Y2xvcGVkaWEnLFxuXHRcdFtcblx0XHRcdC8vIEJhc2ljIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2F1dGhvcjEnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd0aXRsZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VuY3ljbG9wZWRpYScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3RpdGxlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndm9sdW1lJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAneWVhcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3llYXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwdWJsaXNoZXInLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwdWJsaXNoZXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsb2NhdGlvbicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xvY2F0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnaXNibicgLyogLCBcImF1dG9maWxsaWRcIjpcImlzYm5cIiAqLyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd1cmwnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdC8vIEV4cGFuZGVkIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhc3QnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYXN0MScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2ZpcnN0Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZmlyc3QxJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9ybGluaycsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWF1dGhvcmxpbmstdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2NvYXV0aG9ycycsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2NvYXV0aG9ycycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ290aGVycycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRpb24nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdlZGl0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnb2NsYycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2lkJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtaWQtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2FjY2Vzc2RhdGUnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1hY2Nlc3NkYXRlLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYW5ndWFnZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhbmd1YWdlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZm9ybWF0Jyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ21vbnRoJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncXVvdGUnLFxuXHRcdFx0fSxcblx0XHRdXG5cdCk7XG5cblx0Ly8gZXhlY3V0ZSBtYWluIGZ1bmN0aW9uXG5cdENpdGVUQi5pbml0KCk7XG59O1xuXG5leHBvcnQge3JlZlRvb2xiYXJDb25maWd9O1xuIiwgIi8qIGdsb2JhbCBDaXRlVEIgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudCAqL1xuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7YXBpfSBmcm9tICcuL3V0aWwvYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi91dGlsL2dldE1lc3NhZ2UnO1xuaW1wb3J0IHtyZWZUb29sYmFyQ29uZmlnfSBmcm9tICcuL1JlZlRvb2xiYXJDb25maWcnO1xuXG4vLyBUT0RPOiBtYWtlIGF1dG9kYXRlIGFuIG9wdGlvbiBpbiB0aGUgQ2l0ZVRlbXBsYXRlIG9iamVjdCwgbm90IGEgcHJlZmVyZW5jZVxuY29uc3QgcmVmVG9vbGJhcjIgPSAoJGJvZHkpID0+IHtcblx0Ly8gRGVmYXVsdCBvcHRpb25zLCB0aGVzZSBtYWlubHkgZXhpc3Qgc28gdGhlIHNjcmlwdCB3b24ndCBicmVhayBpZiBhIG5ldyBvcHRpb24gaXMgYWRkZWRcblx0Q2l0ZVRCLkRlZmF1bHRPcHRpb25zID0ge1xuXHRcdCdkYXRlIGZvcm1hdCc6ICc8eWVhcj4tPHptb250aD4tPHpkYXRlPicsXG5cdFx0J2F1dG9kYXRlIGZpZWxkcyc6IFtdLFxuXHRcdG1vbnRoczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuXHRcdG1vZGFsOiB0cnVlLFxuXHRcdGF1dG9wYXJzZTogZmFsc2UsXG5cdFx0ZXhwYW5kdGVtcGxhdGVzOiBmYWxzZSxcblx0fTtcblxuXHQvLyBHZXQgYW4gb3B0aW9uIC0gdXNlciBzZXR0aW5ncyBvdmVycmlkZSBnbG9iYWwgd2hpY2ggb3ZlcnJpZGUgZGVmYXVsdHNcblx0Q2l0ZVRCLmdldE9wdGlvbiA9IChvcHQpID0+IHtcblx0XHRpZiAoQ2l0ZVRCLlVzZXJPcHRpb25zW29wdF0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIENpdGVUQi5Vc2VyT3B0aW9uc1tvcHRdO1xuXHRcdH0gZWxzZSBpZiAoQ2l0ZVRCLk9wdGlvbnNbb3B0XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gQ2l0ZVRCLk9wdGlvbnNbb3B0XTtcblx0XHR9XG5cdFx0cmV0dXJuIENpdGVUQi5EZWZhdWx0T3B0aW9uc1tvcHRdO1xuXHR9O1xuXG5cdENpdGVUQi5pbml0ID0gKCkgPT4ge1xuXHRcdC8qIE1haW4gc3R1ZmYsIGJ1aWxkIHRoZSBhY3R1YWwgdG9vbGJhciBzdHJ1Y3R1cmVcblx0XHQgKiAxLiBnZXQgdGhlIHRlbXBsYXRlIGxpc3QsIG1ha2UgdGhlIGRyb3Bkb3duIGxpc3QgYW5kIHNldCB1cCB0aGUgdGVtcGxhdGUgZGlhbG9nIGJveGVzXG5cdFx0ICogMi4gYWN0dWFsbHkgYnVpbGQgdGhlIHRvb2xiYXI6XG5cdFx0ICogLSBBIHNlY3Rpb24gZm9yIGNpdGVzXG5cdFx0ICogLS0gZHJvcGRvd24gZm9yIHRoZSB0ZW1wbGF0ZXMgKHByZXZpb3VzbHkgZGVmaW5lZClcblx0XHQgKiAtLSBidXR0b24gZm9yIG5hbWVkIHJlZnMgd2l0aCBhIGRpYWxvZyBib3hcblx0XHQgKiAzLiBhZGQgdGhlIHdob2xlIHRoaW5nIHRvIHRoZSBtYWluIHRvb2xiYXJcblx0XHQgKi9cblxuXHRcdCQoZG9jdW1lbnQpLmZpbmQoJ2hlYWQnKS50cmlnZ2VyKCdyZWZ0b29sYmFyYmFzZScpO1xuXHRcdGNvbnN0ICR0YXJnZXQgPSAkYm9keS5maW5kKCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJyk7XG5cdFx0Y29uc3QgdGVtbGlzdCA9IHt9O1xuXHRcdGZvciAoY29uc3QgdCBpbiBDaXRlVEIuVGVtcGxhdGVzKSB7XG5cdFx0XHRpZiAoT2JqZWN0Lmhhc093bihDaXRlVEIuVGVtcGxhdGVzLCB0KSkge1xuXHRcdFx0XHRjb25zdCB0ZW0gPSBDaXRlVEIuVGVtcGxhdGVzW3RdO1xuXHRcdFx0XHRjb25zdCBzZm9ybSA9IENpdGVUQi5lc2NTdHIodGVtLnNob3J0Zm9ybSk7XG5cdFx0XHRcdGNvbnN0IGFjdGlvbm9iaiA9IHtcblx0XHRcdFx0XHR0eXBlOiAnZGlhbG9nJyxcblx0XHRcdFx0XHRtb2R1bGU6IGBjaXRlLWRpYWxvZy0ke3Nmb3JtfWAsXG5cdFx0XHRcdH07XG5cdFx0XHRcdGNvbnN0IGRpYWxvZ29iaiA9IHt9O1xuXHRcdFx0XHRkaWFsb2dvYmpbYGNpdGUtZGlhbG9nLSR7c2Zvcm19YF0gPSB7XG5cdFx0XHRcdFx0cmVzaXplbWU6IGZhbHNlLFxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtZWRpYXdpa2kvbXNnLWRvY1xuXHRcdFx0XHRcdHRpdGxlOiBtdy5tZXNzYWdlKGBjaXRlLWRpYWxvZy0ke3Nmb3JtfWApLnBhcnNlKCksXG5cdFx0XHRcdFx0aWQ6IGBjaXRldG9vbGJhci0ke3Nmb3JtfWAsXG5cdFx0XHRcdFx0aW5pdDogKCkgPT4ge30sXG5cdFx0XHRcdFx0aHRtbDogdGVtLmdldEluaXRpYWwoKSxcblx0XHRcdFx0XHRkaWFsb2c6IHtcblx0XHRcdFx0XHRcdHdpZHRoOiBNYXRoLnJvdW5kKCQod2luZG93KS53aWR0aCgpID8/IDAgKiAwLjgpLFxuXHRcdFx0XHRcdFx0b3BlbigpIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5odG1sKENpdGVUQi5nZXRPcGVuVGVtcGxhdGUoKS5nZXRGb3JtKCkpO1xuXHRcdFx0XHRcdFx0XHQvKiogQHBhcmFtIHtqUXVlcnkuRXZlbnR9IGUgKi9cblx0XHRcdFx0XHRcdFx0JGJvZHkuZmluZCgnLmNpdGUtcHJldi1wYXJzZScpLm9uKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdENpdGVUQi5wcmV2UGFyc2VDbGljaygpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRidXR0b25zOiB7XG5cdFx0XHRcdFx0XHRcdCdjaXRlLWZvcm0tc3VibWl0JygpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCByZWYgPSBDaXRlVEIuZ2V0UmVmKGZhbHNlLCB0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHRcdFx0XHRcdFx0XHQkLndpa2lFZGl0b3IubW9kdWxlcy50b29sYmFyLmZuLmRvQWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kYXRhKCdjb250ZXh0JyksXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwb3N0OiByZWYsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCdjaXRlLWZvcm0tc2hvd2hpZGUnOiBDaXRlVEIuc2hvd0hpZGVFeHRyYSxcblx0XHRcdFx0XHRcdFx0J2NpdGUtcmVmcHJldmlldycoKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgcmVmID0gQ2l0ZVRCLmdldFJlZihmYWxzZSwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRlbXBsYXRlID0gQ2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpdiA9ICQoYCNjaXRldG9vbGJhci0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX1gKTtcblx0XHRcdFx0XHRcdFx0XHRkaXYuZmluZCgnLmNpdGUtcHJldmlldy1sYWJlbCcpLnNob3coKTtcblx0XHRcdFx0XHRcdFx0XHRkaXYuZmluZCgnLmNpdGUtcmVmLXByZXZpZXcnKS50ZXh0KHJlZikuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChDaXRlVEIuZ2V0T3B0aW9uKCdhdXRvcGFyc2UnKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Q2l0ZVRCLnByZXZQYXJzZUNsaWNrKCk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGRpdi5maW5kKCcuY2l0ZS1wcmV2LXBhcnNlJykuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGl2LmZpbmQoJy5jaXRlLXByZXYtcGFyc2VkLWxhYmVsJykuaGlkZSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGl2LmZpbmQoJy5jaXRlLXByZXZpZXctcGFyc2VkJykuaHRtbCgnJyk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2lraWVkaXRvci10b29sYmFyLXRvb2wtbGluay1jYW5jZWwnKCkge1xuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnY2l0ZS1mb3JtLXJlc2V0JygpIHtcblx0XHRcdFx0XHRcdFx0XHRDaXRlVEIucmVzZXRGb3JtKCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH07XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0JHRhcmdldC53aWtpRWRpdG9yKCdhZGREaWFsb2cnLCBkaWFsb2dvYmopO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBUeXBlRXJyb3I6IHJhbmdlIGlzIG51bGwgKi9cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBpZiAoIUNpdGVUQi5nZXRPcHRpb24oJ21vZGFsJykpIHtcblx0XHRcdFx0Ly8gXHQkYm9keS5maW5kKGAjY2l0ZXRvb2xiYXItJHtzZm9ybX1gKS5kaWFsb2coJ29wdGlvbicsICdtb2RhbCcsIGZhbHNlKTtcblx0XHRcdFx0Ly8gfVxuXHRcdFx0XHR0ZW1saXN0W3Nmb3JtXSA9IHtcblx0XHRcdFx0XHRsYWJlbDogdGVtLnRlbXBsYXRlbmFtZSxcblx0XHRcdFx0XHRhY3Rpb246IGFjdGlvbm9iaixcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCByZWZzZWN0aW9uID0ge1xuXHRcdFx0c2VjdGlvbnM6IHtcblx0XHRcdFx0Y2l0ZXM6IHtcblx0XHRcdFx0XHR0eXBlOiAndG9vbGJhcicsXG5cdFx0XHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ2NpdGUtc2VjdGlvbi1sYWJlbCcpLFxuXHRcdFx0XHRcdGdyb3Vwczoge1xuXHRcdFx0XHRcdFx0dGVtcGxhdGU6IHtcblx0XHRcdFx0XHRcdFx0dG9vbHM6IHtcblx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ3NlbGVjdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnY2l0ZS10ZW1wbGF0ZS1saXN0JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0OiB0ZW1saXN0LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0bmFtZWRyZWZzOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdjaXRlLW5hbWVkLXJlZnMtbGFiZWwnKSxcblx0XHRcdFx0XHRcdFx0dG9vbHM6IHtcblx0XHRcdFx0XHRcdFx0XHRucmVmczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2RpYWxvZycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogJ2NpdGUtdG9vbGJhci1uYW1lZHJlZnMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdodHRwczovL3lvdXNob3Uud2lraS9pbWFnZXMvdGh1bWIvYi9iZS9OdXZvbGFfY2xpcGJvYXJkX2xpbmVkLnN2Zy8yMnB4LU51dm9sYV9jbGlwYm9hcmRfbGluZWQuc3ZnLnBuZycsXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWN0aW9uOiAnY2l0ZXMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0Z3JvdXA6ICduYW1lZHJlZnMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ2NpdGUtbmFtZWQtcmVmcy1idXR0b24nKSxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9O1xuXG5cdFx0Y29uc3QgZGVmYXVsdGRpYWxvZ3MgPSB7XG5cdFx0XHQnY2l0ZS10b29sYmFyLW5hbWVkcmVmcyc6IHtcblx0XHRcdFx0dGl0bGU6IG13Lm1lc3NhZ2UoJ2NpdGUtbmFtZWQtcmVmcy10aXRsZScpLnBhcnNlKCksXG5cdFx0XHRcdHJlc2l6ZW1lOiBmYWxzZSxcblx0XHRcdFx0aWQ6ICdjaXRldG9vbGJhci1uYW1lZHJlZnMnLFxuXHRcdFx0XHRodG1sOiBgPGRpdiBpZD1cImNpdGUtbmFtZWRyZWYtbG9hZGluZ1wiPiA8aW1nIHNyYz1cImh0dHBzOi8veW91c2hvdS53aWtpL2ltYWdlcy9iL2IxL0xvYWRpbmdfaWNvbi5naWZcIiAvPiAmbmJzcDske2dldE1lc3NhZ2UoXG5cdFx0XHRcdFx0J2NpdGUtbG9hZGluZydcblx0XHRcdFx0KX08L2Rpdj5gLFxuXHRcdFx0XHRpbml0OiAoKSA9PiB7fSxcblx0XHRcdFx0ZGlhbG9nOiB7XG5cdFx0XHRcdFx0d2lkdGg6IE1hdGgucm91bmQoJCh3aW5kb3cpLndpZHRoKCkgPz8gMCAqIDAuOCksXG5cdFx0XHRcdFx0b3BlbigpIHtcblx0XHRcdFx0XHRcdENpdGVUQi5sb2FkUmVmcygpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YnV0dG9uczoge1xuXHRcdFx0XHRcdFx0J2NpdGUtZm9ybS1zdWJtaXQnKCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCByZWZuYW1lID0gJGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtc2VsZWN0JykudmFsKCk7XG5cdFx0XHRcdFx0XHRcdGlmIChyZWZuYW1lID09PSAnJykge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHRcdFx0XHRcdFx0JC53aWtpRWRpdG9yLm1vZHVsZXMudG9vbGJhci5mbi5kb0FjdGlvbihcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRhdGEoJ2NvbnRleHQnKSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwb3N0OiBDaXRlVEIuZ2V0TmFtZWRSZWYocmVmbmFtZSwgdHJ1ZSksXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCd3aWtpZWRpdG9yLXRvb2xiYXItdG9vbC1saW5rLWNhbmNlbCcoKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9O1xuXG5cdFx0dHJ5IHtcblx0XHRcdCR0YXJnZXQud2lraUVkaXRvcignYWRkRGlhbG9nJywgZGVmYXVsdGRpYWxvZ3MpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0Ly8gZXJyb3Igb2NjdXJyZWQgc2V0dGluZyB1cCB3aWtpZWRpdG9yLlxuXHRcdH1cblx0XHQkYm9keS5maW5kKCcjY2l0ZXRvb2xiYXItbmFtZWRyZWZzJykub2ZmKCdkaWFsb2dvcGVuJyk7XG5cdFx0aWYgKCFDaXRlVEIuZ2V0T3B0aW9uKCdtb2RhbCcpKSB7XG5cdFx0XHQvLyAkYm9keS5maW5kKCcjY2l0ZXRvb2xiYXItbmFtZWRyZWZzJykuZGlhbG9nKCdvcHRpb24nLCAnbW9kYWwnLCBmYWxzZSk7XG5cdFx0XHRtdy51dGlsLmFkZENTUygnLnVpLXdpZGdldC1vdmVybGF5e2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50fScpO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0JHRhcmdldC53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCByZWZzZWN0aW9uKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdC8vIGVycm9yIG9jY3VycmVkIHNldHRpbmcgdXAgd2lraWVkaXRvci5cblx0XHR9XG5cdH07XG5cblx0Ly8gU2V0dXAgdGhlIG1haW4gb2JqZWN0XG5cdENpdGVUQi5tYWluUmVmTGlzdCA9IFtdO1xuXHRDaXRlVEIucmVmc0xvYWRlZCA9IGZhbHNlO1xuXG5cdC8vIFJFRiBGVU5DVElPTlNcblx0Ly8gQWN0dWFsbHkgYXNzZW1ibGUgYSByZWYgZnJvbSB1c2VyIGlucHV0XG5cdENpdGVUQi5nZXRSZWYgPSAoaW5uZXJvbmx5LCBmb3JpbnNlcnQpID0+IHtcblx0XHRsZXQgaSwgaiwgZywgZ3JvdXA7XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBDaXRlVEIuZ2V0T3BlblRlbXBsYXRlKCk7XG5cdFx0Y29uc3Qge3RlbXBsYXRlbmFtZX0gPSB0ZW1wbGF0ZTtcblx0XHRsZXQgcmVzID0gJyc7XG5cdFx0Y29uc3QgcmVmb2JqID0ge1xuXHRcdFx0c2hvcnR0YWc6IGZhbHNlLFxuXHRcdH07XG5cdFx0aWYgKCFpbm5lcm9ubHkpIHtcblx0XHRcdGdyb3VwID0gJChgI2NpdGUtJHtDaXRlVEIuZXNjU3RyKHRlbXBsYXRlLnNob3J0Zm9ybSl9LWdyb3VwYCkudmFsKCk7XG5cdFx0XHRsZXQgcmVmbmFtZSA9ICQoYCNjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfS1uYW1lYCkudmFsKCk7XG5cdFx0XHRyZXMgKz0gJzxyZWYnO1xuXHRcdFx0aWYgKHJlZm5hbWUpIHtcblx0XHRcdFx0cmVmbmFtZSA9IFN0cmluZyhyZWZuYW1lKS50cmltKCk7XG5cdFx0XHRcdHJlcyArPSBgIG5hbWU9JHtDaXRlVEIuZ2V0UXVvdGVkU3RyaW5nKHJlZm5hbWUpfWA7XG5cdFx0XHRcdHJlZm9iai5yZWZuYW1lID0gcmVmbmFtZTtcblx0XHRcdH1cblx0XHRcdGlmIChncm91cCkge1xuXHRcdFx0XHRncm91cCA9IFN0cmluZyhncm91cCkudHJpbSgpO1xuXHRcdFx0XHRyZXMgKz0gYCBncm91cD0ke0NpdGVUQi5nZXRRdW90ZWRTdHJpbmcoZ3JvdXApfWA7XG5cdFx0XHRcdHJlZm9iai5yZWZncm91cCA9IGdyb3VwO1xuXHRcdFx0fVxuXHRcdFx0cmVzICs9ICc+Jztcblx0XHR9XG5cdFx0bGV0IGNvbnRlbnQgPSBge3ske3RlbXBsYXRlbmFtZX1gO1xuXHRcdGZvciAoZyBpbiB0ZW1wbGF0ZS5pbmNyZW1lbnRhYmxlcykge1xuXHRcdFx0aWYgKE9iamVjdC5oYXNPd24odGVtcGxhdGUuaW5jcmVtZW50YWJsZXMsIGcpKSB7XG5cdFx0XHRcdGdyb3VwID0gdGVtcGxhdGUuaW5jcmVtZW50YWJsZXNbZ107XG5cdFx0XHRcdGZvciAoaSA9IDE7IGkgPD0gZ3JvdXAudmFsOyBpKyspIHtcblx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgZ3JvdXAuZmllbGRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBmaWVsZG5hbWUgPSBncm91cC5maWVsZHNbal0uZmllbGQ7XG5cdFx0XHRcdFx0XHRjb25zdCBmaWVsZGlkID0gZmllbGRuYW1lLnJlcGxhY2UoJzxOPicsIGkudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0XHRjb25zdCBmaWVsZCA9ICQoYCNjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfS0ke2ZpZWxkaWR9YCkudmFsKCk7XG5cdFx0XHRcdFx0XHRpZiAoZmllbGQpIHtcblx0XHRcdFx0XHRcdFx0Y29udGVudCArPSBgIHwke2ZpZWxkaWR9PWA7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgKz0gU3RyaW5nKGZpZWxkKS50cmltKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCB0ZW1wbGF0ZS5iYXNpYy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRlbXBsYXRlLmJhc2ljW2ldLmluY3JlbWVudF9ncm91cCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGZpZWxkbmFtZSA9IHRlbXBsYXRlLmJhc2ljW2ldLmZpZWxkO1xuXHRcdFx0Y29uc3QgZmllbGQgPSAkKGAjY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX0tJHtmaWVsZG5hbWV9YCkudmFsKCk7XG5cdFx0XHRpZiAoZmllbGQpIHtcblx0XHRcdFx0Y29udGVudCArPSBgIHwke2ZpZWxkbmFtZX09YDtcblx0XHRcdFx0Y29udGVudCArPSBTdHJpbmcoZmllbGQpLnRyaW0oKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCRib2R5LmZpbmQoJyNjaXRlLWZvcm0tc3RhdHVzJykudmFsKCkgIT09ICdjbG9zZWQnKSB7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGVtcGxhdGUuZXh0cmEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHRlbXBsYXRlLmV4dHJhW2ldLmluY3JlbWVudF9ncm91cCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGZpZWxkbmFtZSA9IHRlbXBsYXRlLmV4dHJhW2ldLmZpZWxkO1xuXHRcdFx0XHRjb25zdCBmaWVsZCA9ICQoYCNjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfS0ke2ZpZWxkbmFtZX1gKS52YWwoKTtcblx0XHRcdFx0aWYgKGZpZWxkKSB7XG5cdFx0XHRcdFx0Y29udGVudCArPSBgIHwke2ZpZWxkbmFtZX09YDtcblx0XHRcdFx0XHRjb250ZW50ICs9IFN0cmluZyhmaWVsZCkudHJpbSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnRlbnQgKz0gJ319Jztcblx0XHRyZXMgKz0gY29udGVudDtcblx0XHRyZWZvYmouY29udGVudCA9IGNvbnRlbnQ7XG5cdFx0aWYgKCFpbm5lcm9ubHkpIHtcblx0XHRcdHJlcyArPSAnPC9yZWY+Jztcblx0XHR9XG5cdFx0aWYgKGZvcmluc2VydCkge1xuXHRcdFx0Q2l0ZVRCLm1haW5SZWZMaXN0LnB1c2gocmVmb2JqKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcztcblx0fTtcblxuXHQvLyBNYWtlIGEgcmVmZXJlbmNlIHRvIGEgbmFtZWQgcmVmXG5cdENpdGVUQi5nZXROYW1lZFJlZiA9IChyZWZuYW1lLCBmb3JpbnNlcnQpID0+IHtcblx0XHRpZiAoZm9yaW5zZXJ0KSB7XG5cdFx0XHRDaXRlVEIubWFpblJlZkxpc3QucHVzaCh7XG5cdFx0XHRcdHNob3J0dGFnOiB0cnVlLFxuXHRcdFx0XHRyZWZuYW1lLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiBgPHJlZiBuYW1lPSR7Q2l0ZVRCLmdldFF1b3RlZFN0cmluZyhyZWZuYW1lKX0gLz5gO1xuXHR9O1xuXG5cdC8vIEZ1bmN0aW9uIHRvIGxvYWQgdGhlIHJlZiBsaXN0XG5cdENpdGVUQi5sb2FkUmVmcyA9ICgpID0+IHtcblx0XHRpZiAoQ2l0ZVRCLnJlZnNMb2FkZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Q2l0ZVRCLmdldFBhZ2VUZXh0KENpdGVUQi5sb2FkUmVmc0ludGVybmFsKTtcblx0fTtcblxuXHQvLyBGdW5jdGlvbiB0aGF0IGFjdHVhbGx5IGxvYWRzIHRoZSBsaXN0IGZyb20gdGhlIHBhZ2UgdGV4dFxuXHRDaXRlVEIubG9hZFJlZnNJbnRlcm5hbCA9ICh0ZXh0KSA9PiB7XG5cdFx0Ly8gV2hhdCB0aGlzIGRvZXM6ICAgICAgICAgICAgIGV4dHJhY3QgZmlyc3QgbmFtZS9ncm91cCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYWN0IHNlY29uZCBuYW1lL2dyb3VwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvcnR0YWcgICBpbm5lciBjb250ZW50XG5cdFx0Y29uc3QgcmVmc3JlZ2V4ID1cblx0XHRcdC88ICpyZWYoPzogKyhuYW1lfGdyb3VwKSAqPSAqKD86XCIoW15cIl0qPylcInwnKFteJ10qPyknfChbXiAnXCIvPl0qPykpICopPyAqKD86ICsobmFtZXxncm91cCkgKj0gKig/OlwiKFteXCJdKj8pXCJ8JyhbXiddKj8pJ3woW14gJ1wiLz5dKj8pKSAqKT8gKig/OlxcLyAqPnw+KCg/Oi58XFxuKSo/KTwgKlxcLyAqcmVmICo+KS9naW07XG5cdFx0Ly8gVGhpcyBzaG91bGQgd29yayByZWdhcmRsZXNzIG9mIHRoZSBxdW90aW5nIHVzZWQgZm9yIG5hbWVzL2dyb3VwcyBhbmQgZm9yIGxpbmVicmVha3MgaW4gdGhlIGlubmVyIGNvbnRlbnRcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0Y29uc3QgcmVmID0gcmVmc3JlZ2V4LmV4ZWModGV4dCk7XG5cdFx0XHRpZiAocmVmID09PSBudWxsKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVmb2JqID0ge307XG5cdFx0XHRpZiAocmVmWzldKSB7XG5cdFx0XHRcdC8vIENvbnRlbnQgKyBzaG9ydCB0YWcgY2hlY2tcblx0XHRcdFx0Ly8gbXcubm90aWZ5KGBcIiR7cmVmWzldfVwiYCwge3RhZzogJ1JlZlRvb2xiYXIyLjAnLCB0eXBlOiAnd2Fybid9KTtcblx0XHRcdFx0WywgLCAsICwgLCAsICwgLCAsIHJlZm9iai5jb250ZW50XSA9IHJlZjtcblx0XHRcdFx0cmVmb2JqLnNob3J0dGFnID0gZmFsc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZWZvYmouc2hvcnR0YWcgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHJlZlsxXSAhPT0gJycpIHtcblx0XHRcdFx0Ly8gRmlyc3QgbmFtZS9ncm91cFxuXHRcdFx0XHRpZiAocmVmWzJdKSB7XG5cdFx0XHRcdFx0WywgLCByZWZvYmpbYHJlZiR7cmVmWzFdfWBdXSA9IHJlZjtcblx0XHRcdFx0fSBlbHNlIGlmIChyZWZbM10pIHtcblx0XHRcdFx0XHRbLCAsICwgcmVmb2JqW2ByZWYke3JlZlsxXX1gXV0gPSByZWY7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0WywgLCAsICwgcmVmb2JqW2ByZWYke3JlZlsxXX1gXV0gPSByZWY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChyZWZbNV0gIT09ICcnKSB7XG5cdFx0XHRcdC8vIFNlY29uZCBuYW1lL2dyb3VwXG5cdFx0XHRcdGlmIChyZWZbNl0pIHtcblx0XHRcdFx0XHRbLCAsICwgLCAsICwgcmVmb2JqW2ByZWYke3JlZls1XX1gXV0gPSByZWY7XG5cdFx0XHRcdH0gZWxzZSBpZiAocmVmWzddKSB7XG5cdFx0XHRcdFx0WywgLCAsICwgLCAsICwgcmVmb2JqW2ByZWYke3JlZls1XX1gXV0gPSByZWY7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0WywgLCAsICwgLCAsICwgLCByZWZvYmpbYHJlZiR7cmVmWzVdfWBdXSA9IHJlZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Q2l0ZVRCLm1haW5SZWZMaXN0LnB1c2gocmVmb2JqKTtcblx0XHR9XG5cdFx0Q2l0ZVRCLnJlZnNMb2FkZWQgPSB0cnVlO1xuXHRcdENpdGVUQi5zZXR1cE5hbWVkUmVmcygpO1xuXHR9O1xuXG5cdC8vIEFKQVggRlVOQ1RJT05TXG5cdC8vIFBhcnNlIHNvbWUgd2lraXRleHQgYW5kIGhhbmQgaXQgb2ZmIHRvIGEgY2FsbGJhY2sgZnVuY3Rpb25cblx0Q2l0ZVRCLnBhcnNlID0gKHRleHQsIGNhbGxiYWNrKSA9PiB7XG5cdFx0Y29uc3QgcG9zdGRhdGEgPSB7XG5cdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHR0aXRsZTogbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLFxuXHRcdFx0dGV4dCxcblx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdH07XG5cdFx0YXBpLnBvc3QocG9zdGRhdGEpLnRoZW4oKHtwYXJzZX0pID0+IHtcblx0XHRcdGNvbnN0IGh0bWwgPSBwYXJzZS50ZXh0O1xuXHRcdFx0Y2FsbGJhY2soaHRtbCk7XG5cdFx0fSk7XG5cdH07XG5cblx0Ly8gVXNlIHRoZSBBUEkgdG8gZXhwYW5kIHRlbXBsYXRlcyBvbiBzb21lIHRleHRcblx0Q2l0ZVRCLmV4cGFuZHRlbXBsYXRlcyA9ICh0ZXh0LCBjYWxsYmFjaykgPT4ge1xuXHRcdGNvbnN0IHBvc3RkYXRhID0ge1xuXHRcdFx0YWN0aW9uOiAnZXhwYW5kdGVtcGxhdGVzJyxcblx0XHRcdHRpdGxlOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHR0ZXh0LFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0fTtcblx0XHRhcGkucG9zdChwb3N0ZGF0YSkudGhlbigoe2V4cGFuZHRlbXBsYXRlc30pID0+IHtcblx0XHRcdGNvbnN0IHJlc3RleHQgPSBleHBhbmR0ZW1wbGF0ZXMud2lraXRleHQ7XG5cdFx0XHRjYWxsYmFjayhyZXN0ZXh0KTtcblx0XHR9KTtcblx0fTtcblxuXHQvLyBGdW5jdGlvbiB0byBnZXQgdGhlIHBhZ2UgdGV4dFxuXHRDaXRlVEIuZ2V0UGFnZVRleHQgPSAoY2FsbGJhY2spID0+IHtcblx0XHRjb25zdCBzZWN0aW9uID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cFNlY3Rpb25dJykudmFsKCk7XG5cdFx0aWYgKHNlY3Rpb24gPT09ICcnKSB7XG5cdFx0XHRpZiAoQ2l0ZVRCLmdldE9wdGlvbignZXhwYW5kdGVtcGxhdGVzJykpIHtcblx0XHRcdFx0Q2l0ZVRCLmV4cGFuZHRlbXBsYXRlcyhcblx0XHRcdFx0XHQkYm9keS5maW5kKCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykud2lraUVkaXRvcignZ2V0Q29udGVudHMnKS50ZXh0KCksXG5cdFx0XHRcdFx0Y2FsbGJhY2tcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNhbGxiYWNrKCRib2R5LmZpbmQoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKS53aWtpRWRpdG9yKCdnZXRDb250ZW50cycpLnRleHQoKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHt3Z0FydGljbGVJZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdFx0XHRjb25zdCBwb3N0ZGF0YSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0XHRcdHBhZ2VpZHM6IHdnQXJ0aWNsZUlkLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0fTtcblx0XHRcdGlmIChDaXRlVEIuZ2V0T3B0aW9uKCdleHBhbmR0ZW1wbGF0ZXMnKSkge1xuXHRcdFx0XHRwb3N0ZGF0YS5ydmV4cGFuZHRlbXBsYXRlcyA9ICcxJztcblx0XHRcdH1cblx0XHRcdGFwaS5nZXQocG9zdGRhdGEpLnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRcdFx0Y29uc3QgcGFnZXRleHQgPSBxdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uY29udGVudDtcblx0XHRcdFx0Y2FsbGJhY2socGFnZXRleHQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIFNhZmUgdmVyc2lvbiBvZiBkZWNvZGVVUklDb21wb25lbnQoKSB0aGF0IGRvZXNuJ3QgdGhyb3cgZXhjZXB0aW9ucy5cblx0Ly8gSWYgdGhlIG5hdGl2ZSBkZWNvZGVVUklDb21wb25lbnQoKSB0aHJldyBhbiBleGNlcHRpb24sIHRoZSBvcmlnaW5hbCBzdHJpbmcgd2lsbCBiZSByZXR1cm5lZC5cblx0Q2l0ZVRCLnNhZmVEZWNvZGVVUklDb21wb25lbnQgPSAocykgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRzID0gZGVjb2RlVVJJQ29tcG9uZW50KHMpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0LyogZW1wdHkgKi9cblx0XHR9XG5cdFx0cmV0dXJuIHM7XG5cdH07XG5cblx0Ly8gQXV0b2ZpbGwgYSB0ZW1wbGF0ZSBmcm9tIGFuIElEIChJU0JOLCBET0ksIFBNSUQsIFVSTClcblx0Q2l0ZVRCLmluaXRBdXRvZmlsbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBlbGVtaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJykgPz8gJyc7XG5cdFx0Y29uc3QgcmVzID0gL15jaXRlLWF1dG8tKC4qPyktKC4qKS0oLiopJC8uZXhlYyhlbGVtaWQpO1xuXHRcdGlmICghcmVzKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IFssIHRlbSwgZmllbGQsIGF1dG90eXBlXSA9IHJlcztcblx0XHRsZXQgaWQgPSAkKGAjY2l0ZS0ke3RlbX0tJHtmaWVsZH1gKS52YWwoKTtcblx0XHRpZiAoIWlkKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGxldCB1cmwgPSAnaHR0cHM6Ly9jaXRvaWQucWl1d2VuLm5ldC5jbi9sb29rdXAucGhwPyc7XG5cdFx0Ly8gQ2l0b2lkIGV4cGVjdHMgbWluaW1hbGx5IGVuY29kZWQgaW5wdXQsIHNvIGRvIHNvbWUgc3BlY3VsYXRpdmUgZGVjb2RpbmcgaGVyZSB0byBhdm9pZFxuXHRcdC8vIDQwNCBmZXRjaGVzLiBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvVDE0NjUzOVxuXHRcdGlkID0gQ2l0ZVRCLnNhZmVEZWNvZGVVUklDb21wb25lbnQoaWQpO1xuXHRcdHVybCArPSBgJHthdXRvdHlwZX09JHtlbmNvZGVVUklDb21wb25lbnQoaWQpfWA7XG5cdFx0dXJsICs9IGAmdGVtcGxhdGU9JHtlbmNvZGVVUklDb21wb25lbnQodGVtKX1gO1xuXHRcdGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRzLnNldEF0dHJpYnV0ZSgnc3JjJywgdXJsKTtcblx0XHRzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZChzKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblx0Ly8gQ2FsbGJhY2sgZm9yIGF1dG9maWxsXG5cdC8vIFRPRE86IEF1dG9maWxsIHRoZSBVUkwsIGF0IGxlYXN0IGZvciBET0lcblx0Q2l0ZVRCLmF1dG9GaWxsID0gKGRhdGEsIHRlbXBsYXRlLCB0eXBlKSA9PiB7XG5cdFx0Y29uc3QgY2wgPSBgY2l0ZS0ke3RlbXBsYXRlfS1gO1xuXHRcdGxldCBpLCBqO1xuXHRcdGxldCBjb2F1dGhvcnM7XG5cdFx0JChgLiR7Y2x9dGl0bGVgKS52YWwoZGF0YS50aXRsZSk7XG5cdFx0Ly8gRmlsbCBpbiBhdXRob3JzXG5cdFx0aWYgKGRhdGEuYXV0aG9ycyAmJiBkYXRhLmF1dGhvcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0aWYgKCQoYC4ke2NsfWxhc3QtaW5jci0xYCkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRjb25zdCBjbGFzc2VzID0gJChgLiR7Y2x9bGFzdC1pbmNyLTFgKS5lcSgwKS5hdHRyKCdjbGFzcycpPy5zcGxpdCgvXFxzKy8pO1xuXHRcdFx0XHRpZiAoIWNsYXNzZXMpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IGdyb3VwID0gZmFsc2U7XG5cdFx0XHRcdGNvbnN0IHBhdHQgPSAvY2l0ZS1bXi1dKj8taW5jci0oLiopLztcblx0XHRcdFx0Zm9yIChjb25zdCBjbGFzc18gb2YgY2xhc3Nlcykge1xuXHRcdFx0XHRcdGlmIChwYXR0LmV4ZWMoY2xhc3NfKSkge1xuXHRcdFx0XHRcdFx0WywgZ3JvdXBdID0gcGF0dC5leGVjKGNsYXNzXyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0JChgLiR7Y2x9bGFzdC1pbmNyLTFgKS52YWwoZGF0YS5hdXRob3JzWzBdWzBdKTtcblx0XHRcdFx0JChgLiR7Y2x9Zmlyc3QtaW5jci0xYCkudmFsKGRhdGEuYXV0aG9yc1swXVsxXSk7XG5cdFx0XHRcdGNvbnN0IGVsZW1pZCA9IGAjY2l0ZS1pbmNyLSR7dGVtcGxhdGV9LSR7Z3JvdXB9YDtcblx0XHRcdFx0Zm9yIChpID0gMjsgaSA8IGRhdGEuYXV0aG9ycy5sZW5ndGggKyAxOyBpKyspIHtcblx0XHRcdFx0XHQkKGVsZW1pZCkudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0XHQkKGAuJHtjbH1sYXN0LWluY3ItJHtpLnRvU3RyaW5nKCl9YCkudmFsKGRhdGEuYXV0aG9yc1tpIC0gMV1bMF0pO1xuXHRcdFx0XHRcdCQoYC4ke2NsfWZpcnN0LWluY3ItJHtpLnRvU3RyaW5nKCl9YCkudmFsKGRhdGEuYXV0aG9yc1tpIC0gMV1bMV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCQoYC4ke2NsfWF1dGhvci1pbmNyLTFgKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNvbnN0IGNsYXNzZXMgPSAkKGAuJHtjbH1hdXRob3ItaW5jci0xYCkuZXEoMCkuYXR0cignY2xhc3MnKT8uc3BsaXQoL1xccysvKTtcblx0XHRcdFx0aWYgKCFjbGFzc2VzKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBncm91cCA9IGZhbHNlO1xuXHRcdFx0XHRjb25zdCBwYXR0ID0gL2NpdGUtW14tXSo/LWluY3ItKC4qKS87XG5cdFx0XHRcdGZvciAoY29uc3QgY2xhc3NfIG9mIGNsYXNzZXMpIHtcblx0XHRcdFx0XHRpZiAocGF0dC5leGVjKGNsYXNzXykpIHtcblx0XHRcdFx0XHRcdFssIGdyb3VwXSA9IHBhdHQuZXhlYyhjbGFzc18pO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdCQoYC4ke2NsfWF1dGhvci1pbmNyLTFgKS52YWwoZGF0YS5hdXRob3JzWzBdLmpvaW4oJywgJykpO1xuXHRcdFx0XHRjb25zdCBlbGVtaWQgPSBgI2NpdGUtaW5jci0ke3RlbXBsYXRlfS0ke2dyb3VwfWA7XG5cdFx0XHRcdGZvciAoaSA9IDI7IGkgPCBkYXRhLmF1dGhvcnMubGVuZ3RoICsgMTsgaSsrKSB7XG5cdFx0XHRcdFx0JChlbGVtaWQpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdFx0JChgLiR7Y2x9YXV0aG9yLWluY3ItJHtpLnRvU3RyaW5nKCl9YCkudmFsKGRhdGEuYXV0aG9yc1tpIC0gMV0uam9pbignLCAnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoJChgLiR7Y2x9bGFzdDFgKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGRhdGEuYXV0aG9ycyAmJiBpIDwgZGF0YS5hdXRob3JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKCQoYC4ke2NsfWxhc3Qke2kgKyAxfWApLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0JChgLiR7Y2x9bGFzdCR7aSArIDF9YCkudmFsKGRhdGEuYXV0aG9yc1tpXVswXSk7XG5cdFx0XHRcdFx0XHQkKGAuJHtjbH1maXJzdCR7aSArIDF9YCkudmFsKGRhdGEuYXV0aG9yc1tpXVsxXSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvYXV0aG9ycyA9IFtdO1xuXHRcdFx0XHRcdFx0Zm9yIChqID0gaTsgaiA8IGRhdGEuYXV0aG9ycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRjb2F1dGhvcnMucHVzaChkYXRhLmF1dGhvcnNbal0uam9pbignLCAnKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQkKGAuJHtjbH1jb2F1dGhvcnNgKS52YWwoY29hdXRob3JzLmpvaW4oJzsgJykpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCQoYC4ke2NsfWF1dGhvcjFgKS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0Y29uc3QgYXV0aG9ycyA9IFtdO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBkYXRhLmF1dGhvcnMgJiYgaSA8IGRhdGEuYXV0aG9ycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGF1dGhvcnMucHVzaChkYXRhLmF1dGhvcnNbaV0uam9pbignLCAnKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JChgLiR7Y2x9YXV0aG9yc2ApLnZhbChhdXRob3JzLmpvaW4oJzsgJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChpID0gMDsgZGF0YS5hdXRob3JzICYmIGkgPCBkYXRhLmF1dGhvcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoJChgLiR7Y2x9YXV0aG9yJHtpICsgMX1gKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdCQoYC4ke2NsfWF1dGhvciR7aSArIDF9YCkudmFsKGRhdGEuYXV0aG9yc1tpXS5qb2luKCcsICcpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29hdXRob3JzID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKGogPSBpOyBqIDwgZGF0YS5hdXRob3JzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGNvYXV0aG9ycy5wdXNoKGRhdGEuYXV0aG9yc1tqXS5qb2luKCcsICcpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCQoYC4ke2NsfWNvYXV0aG9yc2ApLnZhbChjb2F1dGhvcnMuam9pbignOyAnKSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBGb3JtYXQgcGFydGlhbCBkYXRlcyBvZiB0aGUgZm9ybWF0IFlZWVktTU0sIFlZWVktTU0tWFgsIG9yIFlZWVktTU0tREQgY29ycmVjdGx5XG5cdFx0aWYgKGRhdGEuZGF0ZSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgRFQgPSBuZXcgRGF0ZShkYXRhLmRhdGUpO1xuXHRcdFx0XHRpZiAoL15cXGR7NH0tXFxkezJ9KC1YWCk/JC9pLnRlc3QoZGF0YS5kYXRlKSkge1xuXHRcdFx0XHRcdGRhdGEuZGF0ZSA9IGRhdGEuZGF0ZS5yZXBsYWNlKCctWFgnLCAnJyk7XG5cdFx0XHRcdFx0JChgLiR7Y2x9ZGF0ZWApLnZhbChDaXRlVEIuZm9ybWF0RGF0ZShEVCwgZmFsc2UsIHRydWUpKTtcblx0XHRcdFx0fSBlbHNlIGlmICgvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9Py9pLnRlc3QoZGF0YS5kYXRlKSkge1xuXHRcdFx0XHRcdCQoYC4ke2NsfWRhdGVgKS52YWwoQ2l0ZVRCLmZvcm1hdERhdGUoRFQsIHRydWUsIHRydWUpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkKGAuJHtjbH1kYXRlYCkudmFsKGRhdGEuZGF0ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKGAuJHtjbH1kYXRlYCkudmFsKGRhdGEuZGF0ZSk7XG5cdFx0fVxuXG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlICdwbWlkJzpcblx0XHRcdGNhc2UgJ2RvaSc6XG5cdFx0XHRcdCQoYC4ke2NsfWpvdXJuYWxgKS52YWwoZGF0YS5qb3VybmFsKTtcblx0XHRcdFx0JChgLiR7Y2x9dm9sdW1lYCkudmFsKGRhdGEudm9sdW1lKTtcblx0XHRcdFx0JChgLiR7Y2x9aXNzdWVgKS52YWwoZGF0YS5pc3N1ZSk7XG5cdFx0XHRcdCQoYC4ke2NsfXBhZ2VzYCkudmFsKGRhdGEucGFnZXMpO1xuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ3BtaWQnICYmIGRhdGEuZG9pKSB7XG5cdFx0XHRcdFx0JChgLiR7Y2x9ZG9pYCkudmFsKGRhdGEuZG9pKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdpc2JuJzpcblx0XHRcdFx0JChgLiR7Y2x9cHVibGlzaGVyYCkudmFsKGRhdGEucHVibGlzaGVyKTtcblx0XHRcdFx0JChgLiR7Y2x9bG9jYXRpb25gKS52YWwoZGF0YS5sb2NhdGlvbik7XG5cdFx0XHRcdCQoYC4ke2NsfWVkaXRpb25gKS52YWwoZGF0YS5lZGl0aW9uKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAndXJsJzpcblx0XHRcdFx0JChgLiR7Y2x9am91cm5hbGApLnZhbChkYXRhLmpvdXJuYWwpO1xuXHRcdFx0XHQkKGAuJHtjbH12b2x1bWVgKS52YWwoZGF0YS52b2x1bWUpO1xuXHRcdFx0XHQkKGAuJHtjbH1pc3N1ZWApLnZhbChkYXRhLmlzc3VlKTtcblx0XHRcdFx0JChgLiR7Y2x9cGFnZXNgKS52YWwoZGF0YS5wYWdlcyk7XG5cdFx0XHRcdCQoYC4ke2NsfXB1Ymxpc2hlcmApLnZhbChkYXRhLnB1Ymxpc2hlcik7XG5cdFx0XHRcdCQoYC4ke2NsfWVkaXRpb25gKS52YWwoZGF0YS5lZGl0aW9uKTtcblx0XHRcdFx0JChgLiR7Y2x9aXNibmApLnZhbChkYXRhLmlzYm4pO1xuXHRcdFx0XHQkKGAuJHtjbH1pc3NuYCkudmFsKGRhdGEuaXNzbik7XG5cdFx0XHRcdCQoYC4ke2NsfWRvaWApLnZhbChkYXRhLmRvaSk7XG5cdFx0XHRcdC8vIFwiZW4tVVNcIiBpc24ndCBhIHZhbGlkIHZhbHVlIGZvciB0aGUgbGFuZ3VhZ2UgcGFyYW1ldGVyXG5cdFx0XHRcdGlmIChkYXRhLmxhbmd1YWdlICYmIGRhdGEubGFuZ3VhZ2UgIT09ICdlbi1VUycgJiYgZGF0YS5sYW5ndWFnZSAhPT0gJ2VuLUdCJykge1xuXHRcdFx0XHRcdCQoYC4ke2NsfWxhbmd1YWdlYCkudmFsKGRhdGEubGFuZ3VhZ2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCQoYC4ke2NsfWNoYXB0ZXJgKS52YWwoZGF0YS5jaGFwdGVyKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Ly8gTm8gZGVmYXVsdFxuXHRcdH1cblx0fTtcblxuXHQvLyBGT1JNIERJQUxPRyBGVU5DVElPTlNcblx0Ly8gQWRkIG5ldyBpbmNyZW1lbnRhYmxlIGZpZWxkc1xuXHRDaXRlVEIuaW5jcmVtZW50RmllbGRzID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gQ2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSgpO1xuXHRcdGNvbnN0IFtjdXJyZW50cm93XSA9ICQodGhpcykucGFyZW50cygndHInKTtcblx0XHQkKHRoaXMpLnByZXYoKS5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcblx0XHQkKHRoaXMpLmRldGFjaCgpO1xuXHRcdGNvbnN0IGVsZW1pZCA9ICQodGhpcykuYXR0cignaWQnKSA/PyAnJztcblx0XHRjb25zdCByZXMgPSAvXmNpdGUtaW5jci0oLio/KS0oLiopJC8uZXhlYyhlbGVtaWQpO1xuXHRcdGlmICghcmVzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IFssICwgZ3JvdXBdID0gcmVzO1xuXHRcdGNvbnN0IGluY3JlbWVudHMgPSB0ZW1wbGF0ZS5pbmNyZW1lbnRhYmxlc1tncm91cF07XG5cdFx0Y29uc3Qge2ZpZWxkc30gPSBpbmNyZW1lbnRzO1xuXHRcdHRlbXBsYXRlLmluY3JlbWVudGFibGVzW2dyb3VwXS52YWwgKz0gMTtcblx0XHRjb25zdCB0cnMgPSB0ZW1wbGF0ZS5tYWtlRm9ybUlubmVyKGZpZWxkcywgZmFsc2UpO1xuXHRcdHRycy5yZXZlcnNlKCk7XG5cdFx0Zm9yIChjb25zdCB0ciBvZiB0cnMpIHtcblx0XHRcdCQoY3VycmVudHJvdykuYWZ0ZXIodHIpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBmaWxsIHRoZSBhY2Nlc3NkYXRlIHBhcmFtIHdpdGggdGhlIGN1cnJlbnQgZGF0ZVxuXHRDaXRlVEIuZmlsbEFjY2Vzc2RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgZWxlbWlkID0gJCh0aGlzKS5hdHRyKCdpZCcpID8/ICcnO1xuXHRcdGNvbnN0IHJlcyA9IC9eY2l0ZS1kYXRlLSguKj8pLSguKikkLy5leGVjKGVsZW1pZCk7XG5cdFx0Y29uc3QgWywgaWRdID0gcmVzO1xuXHRcdGlmICghcmVzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IFssICwgZmllbGRdID0gcmVzO1xuXHRcdGNvbnN0IERUID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBkYXRlc3RyID0gQ2l0ZVRCLmZvcm1hdERhdGUoRFQpO1xuXHRcdCQoYCNjaXRlLSR7aWR9LSR7ZmllbGR9YCkudmFsKGRhdGVzdHIpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXHRDaXRlVEIuZm9ybWF0RGF0ZSA9IChEVCwgdXNlZGF5LCB1c2Vtb250aCkgPT4ge1xuXHRcdGlmICh1c2VkYXkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dXNlZGF5ID0gdHJ1ZTtcblx0XHR9XG5cdFx0aWYgKHVzZW1vbnRoID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHVzZW1vbnRoID0gdHJ1ZTtcblx0XHR9XG5cdFx0bGV0IGRhdGVzdHIgPSBDaXRlVEIuZ2V0T3B0aW9uKCdkYXRlIGZvcm1hdCcpO1xuXHRcdGxldCB6bW9udGggPSAnJztcblx0XHRsZXQgbW9udGggPSBEVC5nZXRVVENNb250aCgpICsgMTtcblx0XHRpZiAobW9udGggPCAxMCkge1xuXHRcdFx0em1vbnRoID0gYDAke21vbnRoLnRvU3RyaW5nKCl9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0em1vbnRoID0gbW9udGgudG9TdHJpbmcoKTtcblx0XHR9XG5cdFx0bW9udGggPSBtb250aC50b1N0cmluZygpO1xuXHRcdGxldCB6ZGF0ZSA9ICcnO1xuXHRcdGxldCBkYXRlID0gRFQuZ2V0VVRDRGF0ZSgpO1xuXHRcdGlmIChkYXRlIDwgMTApIHtcblx0XHRcdHpkYXRlID0gYDAke2RhdGUudG9TdHJpbmcoKX1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR6ZGF0ZSA9IGRhdGUudG9TdHJpbmcoKTtcblx0XHR9XG5cdFx0ZGF0ZSA9IGRhdGUudG9TdHJpbmcoKTtcblx0XHRpZiAodXNlZGF5KSB7XG5cdFx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8ZGF0ZT4nLCBkYXRlKTtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzx6ZGF0ZT4nLCB6ZGF0ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzxkYXRlPicsICcnKTtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzx6ZGF0ZT4nLCAnJyk7XG5cdFx0fVxuXHRcdGlmICh1c2Vtb250aCkge1xuXHRcdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPG1vbnRoPicsIG1vbnRoKTtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzx6bW9udGg+Jywgem1vbnRoKTtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzxtb250aG5hbWU+JywgQ2l0ZVRCLmdldE9wdGlvbignbW9udGhzJylbRFQuZ2V0VVRDTW9udGgoKV0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8bW9udGg+JywgJycpO1xuXHRcdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPHptb250aD4nLCAnJyk7XG5cdFx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8bW9udGhuYW1lPicsICcnKTtcblx0XHR9XG5cdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPHllYXI+JywgRFQuZ2V0VVRDRnVsbFllYXIoKS50b1N0cmluZygpKTtcblx0XHRyZXR1cm4gZGF0ZXN0ci5yZXBsYWNlKC9eWyAvXFwtLC5dKiguKj8pWyAvXFwtLC5dKiQvZywgJyQxJyk7IC8vIENsZWFudXAgYW55IGRhbmdsaW5nIHNwYWNlcyBvciBjb25uZWN0b3JzIHRoYXQgbWlnaHQgcmVzdWx0IGZyb20gb21pdHRpbmcgZGF0ZS9tb250aFxuXHR9O1xuXG5cdC8vIEZ1bmN0aW9uIGNhbGxlZCBhZnRlciB0aGUgcmVmIGxpc3QgaXMgbG9hZGVkLCB0byBhY3R1YWxseSBzZXQgdGhlIGNvbnRlbnRzIG9mIHRoZSBuYW1lZCByZWYgZGlhbG9nXG5cdC8vIFVudGlsIHRoZSBsaXN0IGlzIGxvYWRlZCwgaXRzIGp1c3QgYSBcIkxvYWRpbmdcIiBwbGFjZWhvbGRlclxuXHRDaXRlVEIuc2V0dXBOYW1lZFJlZnMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgbmFtZXMgPSBbXTtcblx0XHRsZXQgaTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgQ2l0ZVRCLm1haW5SZWZMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoIUNpdGVUQi5tYWluUmVmTGlzdFtpXS5zaG9ydHRhZyAmJiBDaXRlVEIubWFpblJlZkxpc3RbaV0ucmVmbmFtZSkge1xuXHRcdFx0XHRuYW1lcy5wdXNoKENpdGVUQi5tYWluUmVmTGlzdFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IHN0dWZmID0gJCgnPGRpdj4nKTtcblx0XHQkYm9keS5maW5kKCcjY2l0ZXRvb2xiYXItbmFtZWRyZWZzJykuaHRtbChzdHVmZik7XG5cdFx0aWYgKG5hbWVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0c3R1ZmYuaHRtbChnZXRNZXNzYWdlKCdjaXRlLW5vLW5hbWVkcmVmcycpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R1ZmYuaHRtbChnZXRNZXNzYWdlKCdjaXRlLW5hbWVkcmVmcy1pbnRybycpKTtcblx0XHRcdGNvbnN0IHNlbGVjdCA9ICQoJzxzZWxlY3Q+JykuYXR0cignaWQnLCAnY2l0ZS1uYW1lZHJlZi1zZWxlY3QnKTtcblx0XHRcdHNlbGVjdC5hcHBlbmQoJCgnPG9wdGlvbj4nKS5hdHRyKCd2YWx1ZScsICcnKS50ZXh0KGdldE1lc3NhZ2UoJ2NpdGUtbmFtZWQtcmVmcy1kcm9wZG93bicpKSk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0c2VsZWN0LmFwcGVuZCgkKCc8b3B0aW9uPicpLnRleHQobmFtZXNbaV0ucmVmbmFtZSkpO1xuXHRcdFx0fVxuXHRcdFx0c3R1ZmYuYWZ0ZXIoc2VsZWN0KTtcblx0XHRcdHNlbGVjdC5iZWZvcmUoJzxicj4nKTtcblx0XHRcdGNvbnN0IHByZXZsYWJlbCA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmF0dHIoJ2lkJywgJ2NpdGUtbnJlZi1wcmV2aWV3LWxhYmVsJylcblx0XHRcdFx0LmNzcygnZGlzcGxheScsICdub25lJylcblx0XHRcdFx0Lmh0bWwoZ2V0TWVzc2FnZSgnY2l0ZS1yYXctcHJldmlldycpKTtcblx0XHRcdHNlbGVjdC5hZnRlcihwcmV2bGFiZWwpO1xuXHRcdFx0cHJldmxhYmVsLmJlZm9yZSgnPGJyPjxicj4nKTtcblx0XHRcdHByZXZsYWJlbC5hZnRlcignPGRpdiBpZD1cImNpdGUtbmFtZWRyZWYtcHJldmlld1wiIHN0eWxlPVwicGFkZGluZzowLjVlbTsgZm9udC1zaXplOjExMCVcIiAvPicpO1xuXHRcdFx0Y29uc3QgcGFyc2VsYWJlbCA9ICQoJzxzcGFuPicpXG5cdFx0XHRcdC5hdHRyKCdpZCcsICdjaXRlLXBhcnNlZC1sYWJlbCcpXG5cdFx0XHRcdC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG5cdFx0XHRcdC5odG1sKGdldE1lc3NhZ2UoJ2NpdGUtcGFyc2VkLWxhYmVsJykpO1xuXHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtcHJldmlldycpLmFmdGVyKHBhcnNlbGFiZWwpO1xuXHRcdFx0cGFyc2VsYWJlbC5hZnRlcignPGRpdiBpZD1cImNpdGUtbmFtZWRyZWYtcGFyc2VkXCIgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTowLjVlbTsgZm9udC1zaXplOjExMCVcIiAvPicpO1xuXHRcdFx0Y29uc3QgbGluayA9ICQoJzxhPicpXG5cdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRocmVmOiAnIycsXG5cdFx0XHRcdFx0aWQ6ICdjaXRlLW5yZWYtcGFyc2UnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRtYXJnaW46ICcwIDFlbSAwIDFlbScsXG5cdFx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLFxuXHRcdFx0XHRcdGNvbG9yOiAnIzAwMDA4YicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0bGluay5odG1sKGdldE1lc3NhZ2UoJ2NpdGUtZm9ybS1wYXJzZScpKTtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXBhcnNlZCcpLmFmdGVyKGxpbmspO1xuXG5cdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1zZWxlY3QnKS5vbignY2hhbmdlJywgQ2l0ZVRCLm5hbWVkUmVmU2VsZWN0Q2xpY2spO1xuXHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbnJlZi1wYXJzZScpLm9uKCdjbGljaycsIENpdGVUQi5ucmVmUGFyc2VDbGljayk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIENhbGxiYWNrIGZ1bmN0aW9uIGZvciBwYXJzZWQgcHJldmlld1xuXHRDaXRlVEIuZmlsbE5yZWZQcmV2aWV3ID0gKHBhcnNlZCkgPT4ge1xuXHRcdCRib2R5LmZpbmQoJyNjaXRlLXBhcnNlZC1sYWJlbCcpLnNob3coKTtcblx0XHQkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1wYXJzZWQnKS5odG1sKHBhcnNlZCk7XG5cdH07XG5cblx0Ly8gQ2xpY2sgaGFuZGxlciBmb3IgdGhlIG5hbWVkLXJlZiBwYXJzZWQgcHJldmlld1xuXHRDaXRlVEIubnJlZlBhcnNlQ2xpY2sgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY2hvaWNlID0gJGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtc2VsZWN0JykudmFsKCk7XG5cdFx0aWYgKGNob2ljZSA9PT0gJycpIHtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLXBhcnNlZC1sYWJlbCcpLmhpZGUoKTtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXBhcnNlZCcpLnRleHQoJycpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQkYm9keS5maW5kKCcjY2l0ZS1ucmVmLXBhcnNlJykuaGlkZSgpO1xuXHRcdGZvciAoY29uc3QgcmVmIG9mIENpdGVUQi5tYWluUmVmTGlzdCkge1xuXHRcdFx0aWYgKCFyZWYuc2hvcnR0YWcgJiYgcmVmLnJlZm5hbWUgPT09IGNob2ljZSkge1xuXHRcdFx0XHRDaXRlVEIucGFyc2UocmVmLmNvbnRlbnQsIENpdGVUQi5maWxsTnJlZlByZXZpZXcpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8vIENsaWNrIGhhbmRsZXIgZm9yIHRoZSBuYW1lZC1yZWYgZHJvcGRvd25cblx0Q2l0ZVRCLmxhc3RuYW1lZHJlZmNob2ljZSA9ICcnO1xuXHRDaXRlVEIubmFtZWRSZWZTZWxlY3RDbGljayA9ICgpID0+IHtcblx0XHRjb25zdCBjaG9pY2UgPSAkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1zZWxlY3QnKS52YWwoKTtcblx0XHRpZiAoQ2l0ZVRCLmxhc3RuYW1lZHJlZmNob2ljZSA9PT0gY2hvaWNlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdENpdGVUQi5sYXN0bmFtZWRyZWZjaG9pY2UgPSBjaG9pY2U7XG5cdFx0JGJvZHkuZmluZCgnI2NpdGUtcGFyc2VkLWxhYmVsJykuaGlkZSgpO1xuXHRcdCRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXBhcnNlZCcpLnRleHQoJycpO1xuXHRcdGlmIChjaG9pY2UgPT09ICcnKSB7XG5cdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1ucmVmLXByZXZpZXctbGFiZWwnKS5oaWRlKCk7XG5cdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1wcmV2aWV3JykudGV4dCgnJyk7XG5cdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1ucmVmLXBhcnNlJykuaGlkZSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IHJlZiBvZiBDaXRlVEIubWFpblJlZkxpc3QpIHtcblx0XHRcdGlmICghcmVmLnNob3J0dGFnICYmIHJlZi5yZWZuYW1lID09PSBjaG9pY2UpIHtcblx0XHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbnJlZi1wcmV2aWV3LWxhYmVsJykuc2hvdygpO1xuXHRcdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1wcmV2aWV3JykudGV4dChyZWYuY29udGVudCk7XG5cdFx0XHRcdGlmIChDaXRlVEIuZ2V0T3B0aW9uKCdhdXRvcGFyc2UnKSkge1xuXHRcdFx0XHRcdENpdGVUQi5ucmVmUGFyc2VDbGljaygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5yZWYtcGFyc2UnKS5zaG93KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Ly8gY2FsbGJhY2sgZnVuY3Rpb24gZm9yIHBhcnNlZCBwcmV2aWV3XG5cdENpdGVUQi5maWxsVGVtcGxhdGVQcmV2aWV3ID0gKHRleHQpID0+IHtcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IENpdGVUQi5nZXRPcGVuVGVtcGxhdGUoKTtcblx0XHRjb25zdCBkaXYgPSAkKGAjY2l0ZXRvb2xiYXItJHtDaXRlVEIuZXNjU3RyKHRlbXBsYXRlLnNob3J0Zm9ybSl9YCk7XG5cdFx0ZGl2LmZpbmQoJy5jaXRlLXByZXYtcGFyc2VkLWxhYmVsJykuc2hvdygpO1xuXHRcdGRpdi5maW5kKCcuY2l0ZS1wcmV2aWV3LXBhcnNlZCcpLmh0bWwodGV4dCk7XG5cdH07XG5cblx0Ly8gQ2xpY2sgaGFuZGxlciBmb3IgdGVtcGxhdGUgcGFyc2VkIHByZXZpZXdcblx0Q2l0ZVRCLnByZXZQYXJzZUNsaWNrID0gKCkgPT4ge1xuXHRcdGNvbnN0IHJlZiA9IENpdGVUQi5nZXRSZWYodHJ1ZSwgZmFsc2UpO1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gQ2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSgpO1xuXHRcdGNvbnN0IGRpdiA9ICQoYCNjaXRldG9vbGJhci0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX1gKTtcblx0XHRkaXYuZmluZCgnLmNpdGUtcHJldi1wYXJzZScpLmhpZGUoKTtcblx0XHRDaXRlVEIucGFyc2UocmVmLCBDaXRlVEIuZmlsbFRlbXBsYXRlUHJldmlldyk7XG5cdH07XG5cblx0Ly8gU2hvdy9oaWRlIHRoZSBleHRyYSBmaWVsZHMgaW4gdGhlIGRpYWxvZyBib3hcblx0Q2l0ZVRCLnNob3dIaWRlRXh0cmEgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBDaXRlVEIuZ2V0T3BlblRlbXBsYXRlKCk7XG5cdFx0Y29uc3QgZGl2ID0gJChgI2NpdGV0b29sYmFyLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfWApO1xuXHRcdGNvbnN0IHNldHRpbmcgPSBkaXYuZmluZCgnLmNpdGUtZm9ybS1zdGF0dXMnKS52YWwoKTtcblx0XHRpZiAoc2V0dGluZyA9PT0gJ2Nsb3NlZCcpIHtcblx0XHRcdGRpdi5maW5kKCcuY2l0ZS1mb3JtLXN0YXR1cycpLnZhbCgnb3BlbicpO1xuXHRcdFx0ZGl2LmZpbmQoJy5jaXRlLWV4dHJhLWZpZWxkcycpLnNob3coMSwgKCkgPT4ge1xuXHRcdFx0XHQvLyBqUXVlcnkgYWRkcyBgZGlzcGxheTogYmxvY2tgLCB3aGljaCBzY3Jld3MgdGhpbmdzIHVwXG5cdFx0XHRcdGRpdi5maW5kKCcuY2l0ZS1leHRyYS1maWVsZHMnKS5jc3Moe1xuXHRcdFx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRcdFx0J2JhY2tncm91bmQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkaXYuZmluZCgnLmNpdGUtZm9ybS1zdGF0dXMnKS52YWwoJ2Nsb3NlZCcpO1xuXHRcdFx0ZGl2LmZpbmQoJy5jaXRlLWV4dHJhLWZpZWxkcycpLmhpZGUoKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gUmVzZXRzIGZvcm0gZmllbGRzIGFuZCBwcmV2aWV3c1xuXHQvLyBSZXNldHMgZm9ybSBmaWVsZHMgYW5kIHByZXZpZXdzXG5cdENpdGVUQi5yZXNldEZvcm0gPSAoKSA9PiB7XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBDaXRlVEIuZ2V0T3BlblRlbXBsYXRlKCk7XG5cdFx0Y29uc3QgZGl2ID0gJChgI2NpdGV0b29sYmFyLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfWApO1xuXHRcdGRpdi5odG1sKHRlbXBsYXRlLmdldEZvcm0oKSk7XG5cdH07XG5cblx0Ly8gU1RSSU5HIFVUSUxJVFkgRlVOQ1RJT05TXG5cdC8vIFJldHVybnMgYSBzdHJpbmcgcXVvdGVkIGFzIG5lY2Vzc2FyeSBmb3IgbmFtZS9ncm91cCBhdHRyaWJ1dGVzXG5cdENpdGVUQi5nZXRRdW90ZWRTdHJpbmcgPSAocykgPT4ge1xuXHRcdGNvbnN0IHNxID0gLycvLnRlc3Qocyk7IC8vIHNpbmdsZSBxdW90ZXNcblx0XHRjb25zdCBkcSA9IC9cIi8udGVzdChzKTsgLy8gZG91YmxlIHF1b3Rlc1xuXHRcdGlmICghc3EgJiYgIWRxKSB7XG5cdFx0XHQvLyBBbHdheXMgcXVvdGVzIGZvciBub24tbGF0aW4gYWxwaGFiZXRcblx0XHRcdHJldHVybiBgXCIke3N9XCJgO1xuXHRcdH0gZWxzZSBpZiAoIWRxKSB7XG5cdFx0XHQvLyBDYW4gdXNlIGRvdWJsZSBxdW90ZXNcblx0XHRcdHJldHVybiBgXCIke3N9XCJgO1xuXHRcdH0gZWxzZSBpZiAoIXNxKSB7XG5cdFx0XHQvLyBDYW4gdXNlIHNpbmdsZSBxdW90ZXNcblx0XHRcdHJldHVybiBgJyR7c30nYDtcblx0XHR9XG5cdFx0Ly8gSGFzIGRvdWJsZSBhbmQgc2luZ2xlIHF1b3Rlc1xuXHRcdHMgPSBzLnJlcGxhY2UoL1wiL2csIFwiJ1wiKTtcblx0XHRyZXR1cm4gYFwiJHtzfVwiYDtcblx0fTtcblxuXHQvLyBGaXggdXAgc3RyaW5ncyBmb3Igb3V0cHV0IC0gY2FwaXRhbGl6ZSBmaXJzdCBjaGFyLCByZXBsYWNlIHVuZGVyc2NvcmVzIHdpdGggc3BhY2VzXG5cdENpdGVUQi5maXhTdHIgPSAocykgPT4ge1xuXHRcdHMgPSBzLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xuXHRcdHMgPSBzLnJlcGxhY2UoJ18nLCAnICcpO1xuXHRcdHJldHVybiBzO1xuXHR9O1xuXG5cdC8vIEVzY2FwZSBzcGFjZXMgYW5kIHF1b3RlcyBmb3IgdXNlIGluIEhUTUwgY2xhc3Nlcy9pZHNcblx0Q2l0ZVRCLmVzY1N0ciA9IChzKSA9PiB7XG5cdFx0cmV0dXJuIHNcblx0XHRcdC5yZXBsYWNlKC9cXHMvZywgJy0nKVxuXHRcdFx0LnJlcGxhY2UoLycvZywgU3RyaW5nLnJhd2BcXCdgKVxuXHRcdFx0LnJlcGxhY2UoL1wiL2csIFN0cmluZy5yYXdgXFxcImApO1xuXHR9O1xuXG5cdC8vIE1JU0MgRlVOQ1RJT05TXG5cdC8vIERldGVybWluZSB3aGljaCB0ZW1wbGF0ZSBmb3JtIGlzIG9wZW4sIGFuZCBnZXQgdGhlIHRlbXBsYXRlIG9iamVjdCBmb3IgaXRcblx0Q2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSA9ICgpID0+IHtcblx0XHRjb25zdCBkaWFsb2dzID0gJGJvZHkuZmluZCgnLnVpLWRpYWxvZy1jb250ZW50LnVpLXdpZGdldC1jb250ZW50OnZpc2libGUnKTtcblx0XHRjb25zdCB0ZW1wbGF0ZW5hbWUgPSAkKGRpYWxvZ3NbMF0pLmZpbmQoJy5jaXRlLXRlbXBsYXRlJykudmFsKCk7XG5cdFx0cmV0dXJuIENpdGVUQi5UZW1wbGF0ZXNbdGVtcGxhdGVuYW1lXTtcblx0fTtcblxuXHQvLyBEaXNwbGF5IHRoZSByZXBvcnQgZm9yIHRoZSBlcnJvciBjaGVja3Ncblx0Q2l0ZVRCLmRpc3BsYXlFcnJvcnMgPSAoZXJyb3JzKSA9PiB7XG5cdFx0JGJvZHkuZmluZCgnI2NpdGUtZXJyLXJlcG9ydCcpLnJlbW92ZSgpO1xuXHRcdGNvbnN0IHRhYmxlID0gJCgnPHRhYmxlPicpLmF0dHIoJ2lkJywgJ2NpdGUtZXJyLXJlcG9ydCcpLmNzcyh7XG5cdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICNBOUE5QTknLFxuXHRcdFx0J2JhY2tncm91bmQtY29sb3InOiAnI0ZGRUZENScsXG5cdFx0XHRwYWRkaW5nOiAnMC4yNWVtJyxcblx0XHRcdCdtYXJnaW4tdG9wJzogJzAuNWVtJyxcblx0XHR9KTtcblx0XHQkYm9keS5maW5kKCcjZWRpdHBhZ2UtY29weXdhcm4nKS5iZWZvcmUodGFibGUpO1xuXHRcdGxldCB0cjtcblx0XHRjb25zdCB0cjEgPSAkKCc8dHI+JykuY3NzKCd3aWR0aCcsICcxMDAlJyk7XG5cdFx0Y29uc3QgdGgxID0gJCgnPHRoPicpLmNzcygnd2lkdGgnLCAnNjAlJykuY3NzKCdmb250LXNpemUnLCAnMTEwJScpLmh0bWwoZ2V0TWVzc2FnZSgnY2l0ZS1lcnItcmVwb3J0LWhlYWRpbmcnKSk7XG5cdFx0Y29uc3QgdGgyID0gJCgnPHRoPicpLmNzcygnd2lkdGgnLCAnNDAlJykuY3NzKCd0ZXh0LWFsaWduJywgJ3JpZ2h0OycpO1xuXHRcdGNvbnN0IGltID0gJCgnPGltZz4nKS5hdHRyKCdzcmMnLCAnaHR0cHM6Ly95b3VzaG91Lndpa2kvaW1hZ2VzL3RodW1iLzUvNTUvR3RrLXN0b3Auc3ZnLzIwcHgtR3RrLXN0b3Auc3ZnLnBuZycpO1xuXHRcdGltLmF0dHIoJ2FsdCcsIGdldE1lc3NhZ2UoJ2NpdGUtZXJyLXJlcG9ydC1jbG9zZScpKS5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ2NpdGUtZXJyLXJlcG9ydC1jbG9zZScpKTtcblx0XHRjb25zdCBhZCA9ICQoJzxhPicpLmF0dHIoe1xuXHRcdFx0aWQ6ICdjaXRlLWVyci1jaGVjay1jbG9zZScsXG5cdFx0XHRocmVmOiAnIycsXG5cdFx0fSk7XG5cdFx0YWQuYXBwZW5kKGltKTtcblx0XHR0aDIuYXBwZW5kKGFkKTtcblx0XHR0cjEuYXBwZW5kKHRoMSkuYXBwZW5kKHRoMik7XG5cdFx0dGFibGUuYXBwZW5kKHRyMSk7XG5cdFx0JGJvZHkuZmluZCgnI2NpdGUtZXJyLWNoZWNrLWNsb3NlJykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtZXJyLXJlcG9ydCcpLnJlbW92ZSgpO1xuXHRcdH0pO1xuXHRcdGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR0ciA9ICQoJzx0cj4nKS5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcblx0XHRcdGNvbnN0IHRkID0gJCgnPHRkPicpXG5cdFx0XHRcdC5jc3MoJ3RleHQtYWxpZ24nLCAnY2VudGVyJylcblx0XHRcdFx0LmNzcygnbWFyZ2luJywgJzEuNXB4Jylcblx0XHRcdFx0Lmh0bWwoZ2V0TWVzc2FnZSgnY2l0ZS1lcnItcmVwb3J0LWVtcHR5JykpO1xuXHRcdFx0dHIuYXBwZW5kKHRkKTtcblx0XHRcdHRhYmxlLmFwcGVuZCh0cik7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBlcnJvciBpbiBlcnJvcnMpIHtcblx0XHRcdGlmIChPYmplY3QuaGFzT3duKGVycm9ycywgZXJyb3IpKSB7XG5cdFx0XHRcdGNvbnN0IGVyciA9IGVycm9yc1tlcnJvcl07XG5cdFx0XHRcdHRyID0gJCgnPHRyPicpLmNzcygnd2lkdGgnLCAnMTAwJScpO1xuXHRcdFx0XHRjb25zdCB0ZDEgPSAkKCc8dGQ+Jylcblx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCAjMDAwJyxcblx0XHRcdFx0XHRcdG1hcmdpbjogJzEuNXB4Jyxcblx0XHRcdFx0XHRcdHdpZHRoOiAnNjAlJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5odG1sKGVyci5lcnIpO1xuXHRcdFx0XHRjb25zdCB0ZDIgPSAkKCc8dGQ+Jylcblx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCAjMDAwJyxcblx0XHRcdFx0XHRcdG1hcmdpbjogJzEuNXB4Jyxcblx0XHRcdFx0XHRcdHdpZHRoOiAnNDAlJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5odG1sKGdldE1lc3NhZ2UoZXJyLm1zZykpO1xuXHRcdFx0XHR0ci5hcHBlbmQodGQxKS5hcHBlbmQodGQyKTtcblx0XHRcdFx0dGFibGUuYXBwZW5kKHRyKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Ly8gTG9hZCBjb25maWd1cmF0aW9uIGZvciBzaXRlXG5cdHJlZlRvb2xiYXJDb25maWcoKTtcblxuXHQvLyBFbmQgb2YgY29kZSBsb2FkZWQgb25seSBvbiBlZGl0XG59O1xuXG5leHBvcnQge3JlZlRvb2xiYXIyfTtcbiIsICIvKiBnbG9iYWwgQ2l0ZVRCICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnQgKi9cbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vdXRpbC9nZXRNZXNzYWdlJztcblxuY29uc3QgcmVmVG9vbGJhckJhc2UgPSAoKSA9PiB7XG5cdHdpbmRvdy5DaXRlVEIgfHw9IHtcblx0XHRUZW1wbGF0ZXM6IHt9LCAvLyBBbGwgdGVtcGxhdGVzXG5cdFx0T3B0aW9uczoge30sIC8vIEdsb2JhbCBvcHRpb25zXG5cdFx0VXNlck9wdGlvbnM6IHt9LCAvLyBVc2VyIG9wdGlvbnNcblx0XHREZWZhdWx0T3B0aW9uczoge30sIC8vIFNjcmlwdCBkZWZhdWx0c1xuXHR9O1xuXG5cdC8vIENsYXNzIGZvciBjaXRlIHRlbXBsYXRlc1xuXHR3aW5kb3cuQ2l0ZVRlbXBsYXRlID0gY2xhc3MgQ2l0ZVRlbXBsYXRlIHtcblx0XHRjb25zdHJ1Y3Rvcih0ZW1wbGF0ZW5hbWUsIHNob3J0Zm9ybSwgYmFzaWNmaWVsZHMsIGV4cGFuZGVkZmllbGRzKSB7XG5cdFx0XHQvLyBQcm9wZXJ0aWVzXG5cdFx0XHR0aGlzLnRlbXBsYXRlbmFtZSA9IHRlbXBsYXRlbmFtZTsgLy8gVGhlIHRlbXBsYXRlIG5hbWUgLSBcImNpdGUgd2ViXCIsIFwiY2l0ZSBib29rXCIsIGV0Yy5cblx0XHRcdHRoaXMuc2hvcnRmb3JtID0gc2hvcnRmb3JtOyAvLyBBIHNob3J0IGZvcm0sIHVzZWQgZm9yIHRoZSBkcm9wZG93biBib3hcblx0XHRcdHRoaXMuYmFzaWMgPSBiYXNpY2ZpZWxkczsgLy8gQmFzaWMgZmllbGRzIC0gYXV0aG9yLCB0aXRsZSwgcHVibGlzaGVyLi4uXG5cblx0XHRcdC8vIExlc3MgY29tbW9uIC0gcXVvdGUsIGFyY2hpdmV1cmwgLSBzaG91bGQgYmUgZXZlcnl0aGluZyB0aGUgdGVtcGxhdGUgc3VwcG9ydHMgbWludXMgdGhlIGJhc2ljIG9uZXNcblx0XHRcdHRoaXMuZXh0cmEgPSBleHBhbmRlZGZpZWxkcztcblx0XHRcdHRoaXMuaW5jcmVtZW50YWJsZXMgPSB7fTtcblxuXHRcdFx0Ly8gQWRkIGl0IHRvIHRoZSBsaXN0XG5cdFx0XHRDaXRlVEIuVGVtcGxhdGVzW3RoaXMudGVtcGxhdGVuYW1lXSA9IHRoaXM7XG5cdFx0fVxuXHRcdG1ha2VGb3JtSW5uZXIoZmllbGRzLCBpbmNyc2V0dXApIHtcblx0XHRcdGNvbnN0IHRycyA9IFtdO1xuXHRcdFx0Y29uc3QgYXV0b2ZpbGxzID0gW107XG5cdFx0XHRsZXQgdHI7XG5cdFx0XHRmb3IgKGNvbnN0IFtpLCBmaWVsZG9ial0gb2YgZmllbGRzLmVudHJpZXMoKSkge1xuXHRcdFx0XHRsZXQge2ZpZWxkfSA9IGZpZWxkb2JqO1xuXHRcdFx0XHRsZXQgbGFiZWxmaWVsZCA9IGZpZWxkb2JqLmZpZWxkO1xuXHRcdFx0XHRsZXQgYWQgPSBmYWxzZTtcblx0XHRcdFx0bGV0IGltO1xuXHRcdFx0XHRpZiAoaW5jcnNldHVwICYmIGZpZWxkb2JqLmluY3JlbWVudF9ncm91cCkge1xuXHRcdFx0XHRcdGZpZWxkID0gZmllbGRvYmouZmllbGQucmVwbGFjZSgnPE4+JywgJzEnKTtcblx0XHRcdFx0XHRsYWJlbGZpZWxkID0gZmllbGRvYmouZmllbGQucmVwbGFjZSgnPE4+JywgJycpO1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdHRoaXMuaW5jcmVtZW50YWJsZXNbZmllbGRvYmouaW5jcmVtZW50X2dyb3VwXSAmJlxuXHRcdFx0XHRcdFx0IXRoaXMuaW5jcmVtZW50YWJsZXNbZmllbGRvYmouaW5jcmVtZW50X2dyb3VwXS5zZXR1cFxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0Ly8gVGhlIG9iamVjdCBoYXMgYmVlbiBjcmVhdGVkLCBidXQgbm90IGZ1bGx5IGluaXRpYWxpemVkXG5cdFx0XHRcdFx0XHR0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0uZmllbGRzLnB1c2goZmllbGRvYmopO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIXRoaXMuaW5jcmVtZW50YWJsZXNbZmllbGRvYmouaW5jcmVtZW50X2dyb3VwXSkge1xuXHRcdFx0XHRcdFx0Ly8gT2JqZWN0IG5vdCB5ZXQgY3JlYXRlZFxuXHRcdFx0XHRcdFx0dGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdID0ge1xuXHRcdFx0XHRcdFx0XHRmaWVsZHM6IFtmaWVsZG9ial0sXG5cdFx0XHRcdFx0XHRcdHZhbDogMSxcblx0XHRcdFx0XHRcdFx0c2V0dXA6IGZhbHNlLFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdFx0dGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdICYmXG5cdFx0XHRcdFx0XHR0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0uc2V0dXBcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdC8vIEZ1bGx5IGluaXRpYWxpemVkIGZyb20gYSBwcmV2aW91cyBpbnZvY2F0aW9uIG9mIHRoaXMgZnVuY3Rpb24sIGp1c3QgcmVzZXR0aW5nIHRoZSBudW1iZXJcblx0XHRcdFx0XHRcdHRoaXMuaW5jcmVtZW50YWJsZXNbZmllbGRvYmouaW5jcmVtZW50X2dyb3VwXS52YWwgPSAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXApIHtcblx0XHRcdFx0XHQvLyBBZGRpbmcgYSBuZXcgcm93XG5cdFx0XHRcdFx0Y29uc3QgaW5jcnZhbCA9IHRoaXMuaW5jcmVtZW50YWJsZXNbZmllbGRvYmouaW5jcmVtZW50X2dyb3VwXS52YWw7XG5cdFx0XHRcdFx0ZmllbGQgPSBmaWVsZG9iai5maWVsZC5yZXBsYWNlKCc8Tj4nLCBpbmNydmFsLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdGxhYmVsZmllbGQgPSBmaWVsZG9iai5maWVsZC5yZXBsYWNlKCc8Tj4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgYXV0b2RhdGVGaWVsZHMgPSBDaXRlVEIuZ2V0T3B0aW9uKCdhdXRvZGF0ZSBmaWVsZHMnKTtcblx0XHRcdFx0aWYgKGF1dG9kYXRlRmllbGRzLmluY2x1ZGVzKGZpZWxkKSkge1xuXHRcdFx0XHRcdGltID0gJCgnPGltZz4nKS5hdHRyKFxuXHRcdFx0XHRcdFx0J3NyYycsXG5cdFx0XHRcdFx0XHQnaHR0cHM6Ly95b3VzaG91Lndpa2kvaW1hZ2VzL3RodW1iLzcvN2IvTnV2b2xhX2FwcHNfZGF0ZS5zdmcvMjBweC1OdXZvbGFfYXBwc19kYXRlLnN2Zy5wbmcnXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpbS5hdHRyKCdhbHQnLCBnZXRNZXNzYWdlKCdjaXRlLWluc2VydC1kYXRlJykpLmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnY2l0ZS1pbnNlcnQtZGF0ZScpKTtcblx0XHRcdFx0XHRhZCA9ICQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnIycpO1xuXHRcdFx0XHRcdGFkLmFwcGVuZChpbSk7XG5cdFx0XHRcdFx0YWQuYXR0cignaWQnLCBgY2l0ZS1kYXRlLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LSR7ZmllbGR9YCk7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub24oXG5cdFx0XHRcdFx0XHQnY2xpY2snLFxuXHRcdFx0XHRcdFx0YCNjaXRlLWRhdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tJHtmaWVsZH1gLFxuXHRcdFx0XHRcdFx0Q2l0ZVRCLmZpbGxBY2Nlc3NkYXRlXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZmllbGRvYmouYXV0b2ZpbGxpZCkge1xuXHRcdFx0XHRcdGNvbnN0IGF1dG90eXBlID0gZmllbGRvYmouYXV0b2ZpbGxpZDtcblx0XHRcdFx0XHRpbSA9ICQoJzxpbWc+JykuYXR0cihcblx0XHRcdFx0XHRcdCdzcmMnLFxuXHRcdFx0XHRcdFx0J2h0dHBzOi8veW91c2hvdS53aWtpL2ltYWdlcy90aHVtYi8xLzE3L1N5c3RlbS1zZWFyY2guc3ZnLzIwcHgtU3lzdGVtLXNlYXJjaC5zdmcucG5nJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aW0uYXR0cignYWx0JywgZ2V0TWVzc2FnZSgnY2l0ZS1hdXRvZmlsbC1hbHQnKSkuYXR0cigndGl0bGUnLCBnZXRNZXNzYWdlKCdjaXRlLWF1dG9maWxsLWFsdCcpKTtcblx0XHRcdFx0XHRhZCA9ICQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnIycpO1xuXHRcdFx0XHRcdGFkLmFwcGVuZChpbSk7XG5cdFx0XHRcdFx0YWQuYXR0cignaWQnLCBgY2l0ZS1hdXRvLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LSR7ZmllbGR9LSR7YXV0b3R5cGV9YCk7XG5cdFx0XHRcdFx0YXV0b2ZpbGxzLnB1c2goYCNjaXRlLWF1dG8tJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tJHtmaWVsZH0tJHthdXRvdHlwZX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZmllbGRvYmouaW5jcmVtZW50X2J1dHRvbikge1xuXHRcdFx0XHRcdGNvbnN0IGluY3J0eXBlID0gZmllbGRvYmouaW5jcmVtZW50X2dyb3VwO1xuXHRcdFx0XHRcdGltID0gJCgnPGltZz4nKS5hdHRyKFxuXHRcdFx0XHRcdFx0J3NyYycsXG5cdFx0XHRcdFx0XHQnaHR0cHM6Ly95b3VzaG91Lndpa2kvaW1hZ2VzL3RodW1iL2IvYjkvTnV2b2xhX2FjdGlvbl9lZGl0X2FkZC5zdmcvMjBweC1OdXZvbGFfYWN0aW9uX2VkaXRfYWRkLnN2Zy5wbmcnXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpbS5hdHRyKCdhbHQnLCBnZXRNZXNzYWdlKCdjaXRlLWluY3JlbWVudC1hbHQnKSkuYXR0cigndGl0bGUnLCBnZXRNZXNzYWdlKCdjaXRlLWluY3JlbWVudC1hbHQnKSk7XG5cdFx0XHRcdFx0YWQgPSAkKCc8YT4nKS5hdHRyKCdocmVmJywgJyMnKTtcblx0XHRcdFx0XHRhZC5hcHBlbmQoaW0pO1xuXHRcdFx0XHRcdGFkLmF0dHIoJ2lkJywgYGNpdGUtaW5jci0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS0ke2luY3J0eXBlfWApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IGRpc3BsYXkgPSBnZXRNZXNzYWdlKGBjaXRlLSR7bGFiZWxmaWVsZH0tbGFiZWxgKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBkaXNwbGF5ICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGRpc3BsYXkgPSBmaWVsZG9iai5sYWJlbCA/IENpdGVUQi5maXhTdHIoZmllbGRvYmoubGFiZWwpIDogQ2l0ZVRCLmZpeFN0cihsYWJlbGZpZWxkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB0b29sdGlwID0gZmllbGRvYmoudG9vbHRpcFxuXHRcdFx0XHRcdD8gJCgnPGFiYnI+JykuYXR0cigndGl0bGUnLCBnZXRNZXNzYWdlKGZpZWxkb2JqLnRvb2x0aXApKS5odG1sKCQoJzxzdXA+JykudGV4dCgnPycpKVxuXHRcdFx0XHRcdDogZmFsc2U7XG5cdFx0XHRcdGxldCBpbnB1dCA9ICcnO1xuXHRcdFx0XHRpbnB1dCA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdFx0XHR0YWJpbmRleDogJzEnLFxuXHRcdFx0XHRcdHN0eWxlOiBhZCA/ICd3aWR0aDogODUlJyA6ICd3aWR0aDogMTAwJScsXG5cdFx0XHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aW5wdXQuYXR0cignaWQnLCBgY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS0ke2ZpZWxkfWApO1xuXHRcdFx0XHRpZiAoZmllbGRvYmouYXV0b2ZpbGxwcm9wKSB7XG5cdFx0XHRcdFx0bGV0IGNsYXNzbmFtZSA9IGBjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LSR7ZmllbGRvYmouYXV0b2ZpbGxwcm9wfWA7XG5cdFx0XHRcdFx0aWYgKGZpZWxkb2JqLmluY3JlbWVudF9ncm91cCkge1xuXHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhd2lraS9jbGFzcy1kb2Ncblx0XHRcdFx0XHRcdGlucHV0LmFkZENsYXNzKGBjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LWluY3ItJHtmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXB9YCk7XG5cdFx0XHRcdFx0XHRjbGFzc25hbWUgKz0gYC0ke3RoaXMuaW5jcmVtZW50YWJsZXNbZmllbGRvYmouaW5jcmVtZW50X2dyb3VwXS52YWwudG9TdHJpbmcoKX1gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWF3aWtpL2NsYXNzLWRvY1xuXHRcdFx0XHRcdGlucHV0LmFkZENsYXNzKGNsYXNzbmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgbGFiZWwgPSAkKCc8bGFiZWw+Jyk7XG5cdFx0XHRcdGxhYmVsLmF0dHIoJ2ZvcicsIGBjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LSR7ZmllbGR9YCkudGV4dChkaXNwbGF5KTtcblx0XHRcdFx0aWYgKHRvb2x0aXApIHtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmQodG9vbHRpcCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHN0eWxlID0gJ3RleHQtYWxpZ246IHJpZ2h0OyB3aWR0aDogMjAlOyc7XG5cdFx0XHRcdGlmIChpICUgMiA9PT0gMSkge1xuXHRcdFx0XHRcdHN0eWxlICs9ICcgcGFkZGluZy1sZWZ0OiAxZW07Jztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0ciA9ICQoJzx0cj4nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB0ZDEgPSAkKCc8dGQ+JykuYWRkQ2xhc3MoJ2NpdGUtZm9ybS10ZCcpLmF0dHIoe1xuXHRcdFx0XHRcdHN0eWxlLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGQxLmFwcGVuZChsYWJlbCk7XG5cdFx0XHRcdHRyLmFwcGVuZCh0ZDEpO1xuXHRcdFx0XHRjb25zdCB0ZDIgPSAkKCc8dGQ+JykuYWRkQ2xhc3MoJ2NpdGUtZm9ybS10ZCcpLmNzcygnd2lkdGgnLCAnMzAlJyk7XG5cdFx0XHRcdHRkMi5hcHBlbmQoaW5wdXQpO1xuXHRcdFx0XHRpZiAoYWQpIHtcblx0XHRcdFx0XHR0ZDIuYXBwZW5kKGFkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0ci5hcHBlbmQodGQyKTtcblx0XHRcdFx0aWYgKGkgJSAyID09PSAwKSB7XG5cdFx0XHRcdFx0dHJzLnB1c2godHIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRsZXQgbmVlZHNldHVwID0gZmFsc2U7XG5cdFx0XHRmb3IgKGNvbnN0IGcgaW4gdGhpcy5pbmNyZW1lbnRhYmxlcykge1xuXHRcdFx0XHRpZiAoIXRoaXMuaW5jcmVtZW50YWJsZXNbZ10uc2V0dXApIHtcblx0XHRcdFx0XHRuZWVkc2V0dXAgPSB0cnVlO1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGAjY2l0ZS1pbmNyLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LSR7Z31gLCBDaXRlVEIuaW5jcmVtZW50RmllbGRzKTtcblx0XHRcdFx0XHR0aGlzLmluY3JlbWVudGFibGVzW2ddLnNldHVwID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKG5lZWRzZXR1cCB8fCBPYmplY3Qua2V5cyh0aGlzLmluY3JlbWVudGFibGVzKS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0Zm9yIChjb25zdCBhdXRvZmlsbCBvZiBhdXRvZmlsbHMpIHtcblx0XHRcdFx0XHQkKGRvY3VtZW50KS5vbignY2xpY2snLCBhdXRvZmlsbCwgQ2l0ZVRCLmluaXRBdXRvZmlsbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnM7XG5cdFx0fVxuXHRcdC8vIGdpdmVzIGEgbGl0dGxlIGJpdCBvZiBIVE1MIHNvIHRoZSBvcGVuIGZvcm0gY2FuIGJlIGlkZW50aWZpZWRcblx0XHRnZXRJbml0aWFsKCkge1xuXHRcdFx0Y29uc3QgaGlkZGVuID0gJCgnPGlucHV0PicpLmFkZENsYXNzKCdjaXRlLXRlbXBsYXRlJykuYXR0cih7XG5cdFx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0XHR2YWx1ZTogdGhpcy50ZW1wbGF0ZW5hbWUsXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBoaWRkZW47XG5cdFx0fVxuXHRcdC8vIG1ha2VzIHRoZSBmb3JtIHVzZWQgaW4gdGhlIGRpYWxvZyBib3hlc1xuXHRcdGdldEZvcm0oKSB7XG5cdFx0XHRjb25zdCBtYWluID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnY2l0ZS1mb3JtLWNvbnRhaW5lcicpO1xuXHRcdFx0Y29uc3QgZm9ybTEgPSAkKCc8dGFibGU+JykuYWRkQ2xhc3MoJ2NpdGUtYmFzaWMtZmllbGRzJykuY3NzKHtcblx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdFx0J2JhY2tncm91bmQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0fSk7XG5cdFx0XHRsZXQgdHJzID0gdGhpcy5tYWtlRm9ybUlubmVyKHRoaXMuYmFzaWMsIHRydWUpO1xuXHRcdFx0Zm9yIChjb25zdCB0ciBvZiB0cnMpIHtcblx0XHRcdFx0Zm9ybTEuYXBwZW5kKHRyKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGZvcm0yID0gJCgnPHRhYmxlPicpLmFkZENsYXNzKCdjaXRlLWV4dHJhLWZpZWxkcycpLmNzcyh7XG5cdFx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLFxuXHRcdFx0fSk7XG5cdFx0XHR0cnMgPSB0aGlzLm1ha2VGb3JtSW5uZXIodGhpcy5leHRyYSwgdHJ1ZSk7XG5cdFx0XHRmb3IgKGNvbnN0IHRyIG9mIHRycykge1xuXHRcdFx0XHRmb3JtMi5hcHBlbmQodHIpO1xuXHRcdFx0fVxuXHRcdFx0bWFpbi5hcHBlbmQoZm9ybTEpLmFwcGVuZChmb3JtMik7XG5cdFx0XHRjb25zdCBmb3JtMyA9ICQoJzx0YWJsZT4nKS5hZGRDbGFzcygnY2l0ZS1vdGhlci1maWVsZHMnKS5jc3Moe1xuXHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRcdCdwYWRkaW5nLXRvcCc6ICcxZW0nLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCAkdHIgPSAkKCc8dHI+Jyk7XG5cdFx0XHRjb25zdCAkdGQxID0gJCgnPHRkPicpLmFkZENsYXNzKCdjaXRlLWZvcm0tdGQnKS5jc3Moe1xuXHRcdFx0XHQndGV4dC1hbGlnbic6ICdyaWdodCcsXG5cdFx0XHRcdHdpZHRoOiAnMjAlJyxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgJGxhYmVsMSA9ICQoJzxsYWJlbD4nKTtcblx0XHRcdCRsYWJlbDEuYXR0cignZm9yJywgYGNpdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tbmFtZWApLnRleHQoZ2V0TWVzc2FnZSgnY2l0ZS1uYW1lLWxhYmVsJykpO1xuXHRcdFx0JHRkMS5hcHBlbmQoJGxhYmVsMSk7XG5cdFx0XHRjb25zdCB0ZDIgPSAkKCc8dGQ+JykuYWRkQ2xhc3MoJ2NpdGUtZm9ybS10ZCcpLmNzcygnd2lkdGgnLCAnMzAlJyk7XG5cdFx0XHRjb25zdCBpbnB1dDEgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRcdHRhYmluZGV4OiAnMScsXG5cdFx0XHRcdHN0eWxlOiAnd2lkdGg6IDEwMCUnLFxuXHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHR9KTtcblx0XHRcdGlucHV0MS5hdHRyKCdpZCcsIGBjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LW5hbWVgKTtcblx0XHRcdHRkMi5hcHBlbmQoaW5wdXQxKTtcblx0XHRcdGNvbnN0IHRkMyA9ICQoJzx0ZD4nKS5hZGRDbGFzcygnY2l0ZS1mb3JtLXRkJykuY3NzKHtcblx0XHRcdFx0J3RleHQtYWxpZ24nOiAncmlnaHQnLFxuXHRcdFx0XHQncGFkZGluZy1sZWZ0JzogJzFlbScsXG5cdFx0XHRcdHdpZHRoOiAnMjAlJyxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgbGFiZWwyID0gJCgnPGxhYmVsPicpO1xuXHRcdFx0bGFiZWwyLmF0dHIoJ2ZvcicsIGBjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LWdyb3VwYCkudGV4dChnZXRNZXNzYWdlKCdjaXRlLWdyb3VwLWxhYmVsJykpO1xuXHRcdFx0dGQzLmFwcGVuZChsYWJlbDIpO1xuXHRcdFx0Y29uc3QgdGQ0ID0gJCgnPHRkPicpLmFkZENsYXNzKCdjaXRlLWZvcm0tdGQnKS5jc3MoJ3dpZHRoJywgJzMwJScpO1xuXHRcdFx0Y29uc3QgaW5wdXQyID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0XHR0YWJpbmRleDogJzEnLFxuXHRcdFx0XHRzdHlsZTogJ3dpZHRoOiAxMDAlJyxcblx0XHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0fSk7XG5cdFx0XHRpbnB1dDIuYXR0cignaWQnLCBgY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS1ncm91cGApO1xuXHRcdFx0dGQ0LmFwcGVuZChpbnB1dDIpO1xuXHRcdFx0JHRyLmFwcGVuZCgkdGQxKS5hcHBlbmQodGQyKS5hcHBlbmQodGQzKS5hcHBlbmQodGQ0KTtcblx0XHRcdGZvcm0zLmFwcGVuZCgkdHIpO1xuXHRcdFx0bWFpbi5hcHBlbmQoZm9ybTMpO1xuXHRcdFx0Y29uc3QgZXh0cmFzID0gJCgnPGRpdj4nKTtcblx0XHRcdGV4dHJhcy5hcHBlbmQoXG5cdFx0XHRcdCQoJzxpbnB1dD4nKS5hZGRDbGFzcygnY2l0ZS1mb3JtLXN0YXR1cycpLmF0dHIoe1xuXHRcdFx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0XHRcdHZhbHVlOiAnY2xvc2VkJyxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBoaWRkZW4gPSAkKCc8aW5wdXQ+JykuYWRkQ2xhc3MoJ2NpdGUtdGVtcGxhdGUnKS5hdHRyKCd0eXBlJywgJ2hpZGRlbicpO1xuXHRcdFx0aGlkZGVuLnZhbCh0aGlzLnRlbXBsYXRlbmFtZSk7XG5cdFx0XHRleHRyYXMuYXBwZW5kKGhpZGRlbik7XG5cdFx0XHRjb25zdCBzcGFuMSA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCdjaXRlLXByZXZpZXctbGFiZWwnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0c3BhbjEudGV4dChnZXRNZXNzYWdlKCdjaXRlLXJhdy1wcmV2aWV3JykpO1xuXHRcdFx0ZXh0cmFzLmFwcGVuZChzcGFuMSkuYXBwZW5kKFxuXHRcdFx0XHQkKCc8ZGl2PicpLmFkZENsYXNzKCdjaXRlLXJlZi1wcmV2aWV3JykuY3NzKHtcblx0XHRcdFx0XHRwYWRkaW5nOiAnMC41ZW0nLFxuXHRcdFx0XHRcdCdmb250LXNpemUnOiAnMTEwJScsXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3Qgc3BhbjIgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnY2l0ZS1wcmV2LXBhcnNlZC1sYWJlbCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHRzcGFuMi50ZXh0KGdldE1lc3NhZ2UoJ2NpdGUtcGFyc2VkLWxhYmVsJykpO1xuXHRcdFx0ZXh0cmFzLmFwcGVuZChzcGFuMikuYXBwZW5kKFxuXHRcdFx0XHQkKCc8ZGl2PicpLmFkZENsYXNzKCdjaXRlLXByZXZpZXctcGFyc2VkJykuY3NzKHtcblx0XHRcdFx0XHQncGFkZGluZy1ib3R0b20nOiAnMC41ZW0nLFxuXHRcdFx0XHRcdCdmb250LXNpemUnOiAnMTEwJScsXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgbGluayA9ICQoJzxhPicpLmFkZENsYXNzKCdjaXRlLXByZXYtcGFyc2UnKS5hdHRyKCdocmVmJywgJyMnKS5jc3Moe1xuXHRcdFx0XHRtYXJnaW46ICcwIDFlbScsXG5cdFx0XHRcdGRpc3BsYXk6ICdub25lJyxcblx0XHRcdFx0Y29sb3I6ICcjMDAwMDhiJyxcblx0XHRcdH0pO1xuXHRcdFx0bGluay50ZXh0KGdldE1lc3NhZ2UoJ2NpdGUtZm9ybS1wYXJzZScpKTtcblx0XHRcdGV4dHJhcy5hcHBlbmQobGluayk7XG5cdFx0XHRtYWluLmFwcGVuZChleHRyYXMpO1xuXHRcdFx0cmV0dXJuIG1haW47XG5cdFx0fVxuXHR9O1xuXG5cdCQoZG9jdW1lbnQpLmZpbmQoJ2hlYWQnKS50cmlnZ2VyKCdyZWZ0b29sYmFyYmFzZScpO1xufTtcblxuZXhwb3J0IHtyZWZUb29sYmFyQmFzZX07XG4iLCAiY29uc3QgcmVmVG9vbGJhck1lc2FnZXMgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnVXNlckxhbmd1YWdlID09PSAnZW4nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIEFsbCB1c2VyLWZhY2luZyBtZXNzYWdlc1xuXHQvLyBUT0RPOiBEb2N1bWVudCB1c2FnZVxuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHRcdCdjaXRlLXNlY3Rpb24tbGFiZWwnOiAn5byV55SoJyxcblx0XHRcdCdjaXRlLXRlbXBsYXRlLWxpc3QnOiAn5qih5p2/Jyxcblx0XHRcdCdjaXRlLW5hbWVkLXJlZnMtbGFiZWwnOiAn5ZCM5ZCN5paH5427Jyxcblx0XHRcdCdjaXRlLW5hbWVkLXJlZnMtdGl0bGUnOiAn5o+S5YWl5ZCM5ZCN5paH5427Jyxcblx0XHRcdCdjaXRlLW5hbWVkLXJlZnMtYnV0dG9uJzogJ+W3suWRveWQjeWPg+iAg+aWh+eNuycsXG5cdFx0XHQnY2l0ZS1uYW1lZC1yZWZzLWRyb3Bkb3duJzogJ+WQjOWQjeaWh+eNuycsXG5cdFx0XHQvLyBVc2VkIG9uIHRoZSB0b3Agb2YgdGhlIG5hbWVkIHJlZnMgbGlzdCBkcm9wc293blxuXHRcdFx0J2NpdGUtZGlhbG9nLWJhc2UnOiAn5byV55SoJyxcblx0XHRcdCdjaXRlLWZvcm0tc3VibWl0JzogJ+aPkuWFpScsXG5cdFx0XHQnY2l0ZS1mb3JtLXNob3doaWRlJzogJ+mhr+ekui/pmrHol4/poY3lpJbljYDln58nLFxuXHRcdFx0J2NpdGUtbm8tbmFtZWRyZWZzJzogJ+WcqOacrOmggeaJvuS4jeWIsOS7u+S9leWQjOWQjeaWh+eNuycsXG5cdFx0XHQnY2l0ZS1uYW1lZHJlZnMtaW50cm8nOiAn5b6e5YiX5Ye655qE5Y+D6ICD5paH542755uu6YyE5Lit6YG45pOH5LiA5YCL5ZCN5a2X44CC6bue5pOK44CM5o+S5YWl44CN5o+S5YWl5LiA5YCL5Y+D6ICD5paH54275Yiw5paH5pys5Lit44CCJyxcblx0XHRcdCdjaXRlLXJhdy1wcmV2aWV3JzogJ+WOn+Wni+eivO+8micsXG5cdFx0XHQnY2l0ZS1wYXJzZWQtbGFiZWwnOiAn6Kej5p6Q5b6M55qE5Y6f5aeL56K877yaJyxcblx0XHRcdCdjaXRlLWZvcm0tcGFyc2UnOiAn6aGv56S66Kej5p6Q5b6M55qE6aCQ6Ka9Jyxcblx0XHRcdCdjaXRlLXJlZnByZXZpZXcnOiAn6aCQ6Ka9Jyxcblx0XHRcdCdjaXRlLW5hbWUtbGFiZWwnOiAncmVm5ZCNJyxcblx0XHRcdCdjaXRlLWdyb3VwLWxhYmVsJzogJ3JlZue1hCcsXG5cdFx0XHQnY2l0ZS1mb3JtLXJlc2V0JzogJ+mHjeioreihqOWWricsXG5cdFx0XHQnY2l0ZS1sb2FkaW5nJzogJ+i8ieWFpeaVuOaTmicsXG5cdFx0XHQvLyBTaG93biB3aGlsZSBwYWdldGV4dCBpcyBiZWluZyBkb3dubG9hZGVkIGZyb20gdGhlIEFQSVxuXHRcdFx0J2NpdGUtaW5zZXJ0LWRhdGUnOiAn5o+S5YWl55W25YmN5pel5pyfJyxcblx0XHRcdC8vIEFsdC90aXRsZSB0ZXh0IGZvciBcImluc2VydCBkYXRlXCIgaWNvblxuXHRcdFx0J2NpdGUtZXJyLXJlcG9ydC1oZWFkaW5nJzogJ+W8leeUqOmMr+iqpOWgseWRiicsXG5cdFx0XHQvLyBIZWFkaW5nIGZvciBlcnJvciByZXBvcnQgdGFibGVcblx0XHRcdCdjaXRlLWVyci1yZXBvcnQtY2xvc2UnOiAn6Zec6ZaJJyxcblx0XHRcdC8vIEFsdC90aXRsZSB0ZXh0IGZvciBcImNsb3NlXCIgaWNvbiBvbiBlcnJvciByZXBvcnRcblx0XHRcdCdjaXRlLWVyci1yZXBvcnQtZW1wdHknOiAn5pyq5om+5Yiw6Yyv6KqkJyxcblx0XHRcdC8vIE1lc3NhZ2UgZGlzcGxheWVkIGluIHRoZSBlcnJvciByZXBvcnQgbGlzdCBpZiB0aGVyZSBhcmUgbm8gZXJyb3JzXG5cdFx0XHQnY2l0ZS1hdXRvZmlsbC1hbHQnOiAn6Ieq5YuV5aGr5YWFJyxcblx0XHRcdC8vIEFsdCB0ZXh0IGZvciBhdXRvZmlsbCBidXR0b24gaW1hZ2Vcblx0XHRcdCdjaXRlLXJlZi10b29sdGlwJzogJ+mMqOm7nueahOaomeitmOespu+8iOS9v+ipsuW8leeUqOWPr+S7peaIkOeCuuWFp+mDqOmAo+e1kOeahOebruaome+8iScsXG5cdFx0XHQnY2l0ZS1wb3N0c2NyaXB0LXRvb2x0aXAnOiAn5aaC5p6c6Kit5a6a6YCZ5LiA5Y+D5pW477yM5YmH6KaG6JOL5L2/55So5Y+l6bue57WC5q2i5byV5paH55qE6buY6KqN6KGM54iyJyxcblx0XHRcdCdjaXRlLWRpYWxvZy13ZWInOiAn57ay6aCB5byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1uZXdzJzogJ+aWsOiBnuW8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctYm9vayc6ICfmm7jnsY3lvJXnlKgnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLWpvdXJuYWwnOiAn5pyf5YiK5byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1jb25mZXJlbmNlJzogJ+acg+itsOW8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctZW5jeWNsb3BlZGlhJzogJ+eZvuenkeWFqOabuOW8leeUqCcsXG5cdFx0XHQnY2l0ZS1hdXRob3ItbGFiZWwnOiAn5L2c6ICFJyxcblx0XHRcdCdjaXRlLXRpdGxlLWxhYmVsJzogJ+aomemhjCcsXG5cdFx0XHQnY2l0ZS11cmwtbGFiZWwnOiAn57ay5Z2AJyxcblx0XHRcdCdjaXRlLXdlYnNpdGUtbGFiZWwnOiAn57ay56uZ5ZCN56ixJyxcblx0XHRcdCdjaXRlLXdvcmstbGFiZWwnOiAn5aCx57SZ5oiW6Zuc6KqMJyxcblx0XHRcdCdjaXRlLWFnZW5jeS1sYWJlbCc6ICfpgJroqIrnpL4nLFxuXHRcdFx0J2NpdGUtcHVibGlzaGVyLWxhYmVsJzogJ+WHuueJiOiAhScsXG5cdFx0XHQnY2l0ZS1hY2Nlc3NkYXRlLWxhYmVsJzogJ+WtmOWPluaXpeacnycsXG5cdFx0XHQnY2l0ZS1sYXN0LWxhYmVsJzogJ+WnkycsXG5cdFx0XHQnY2l0ZS1maXJzdC1sYWJlbCc6ICflkI0nLFxuXHRcdFx0J2NpdGUtYXV0aG9ybGluay1sYWJlbCc6ICfkvZzogIXmop3nm64nLFxuXHRcdFx0J2NpdGUtY29hdXRob3JzLWxhYmVsJzogJ+WFtuS7luS9nOiAhScsXG5cdFx0XHQnY2l0ZS1sb2NhdGlvbi1sYWJlbCc6ICflh7rniYjlnLAnLFxuXHRcdFx0J2NpdGUtcGFnZS1sYWJlbCc6ICfmiYDlnKjpoIEnLFxuXHRcdFx0J2NpdGUtcGFnZXMtbGFiZWwnOiAn6aCB56+E5ZyNJyxcblx0XHRcdCdjaXRlLWF0LWxhYmVsJzogJ+abuOWFp+mDqOWIhicsXG5cdFx0XHQnY2l0ZS1sYW5ndWFnZS1sYWJlbCc6ICfoqp7oqIAnLFxuXHRcdFx0J2NpdGUtZm9ybWF0LWxhYmVsJzogJ+aWh+S7tuagvOW8jycsXG5cdFx0XHQnY2l0ZS1kb2ktbGFiZWwnOiAnRE9JJyxcblx0XHRcdCdjaXRlLWRhdGUtbGFiZWwnOiAn5pel5pyfJyxcblx0XHRcdCdjaXRlLW1vbnRoLWxhYmVsJzogJ+aciOS7vScsXG5cdFx0XHQnY2l0ZS15ZWFyLWxhYmVsJzogJ+W5tOS7vScsXG5cdFx0XHQnY2l0ZS1xdW90ZS1sYWJlbCc6ICfmkZjpjIQnLFxuXHRcdFx0J2NpdGUtbmV3c3BhcGVyLWxhYmVsJzogJ+aWsOiBnuWqkumrlCcsXG5cdFx0XHQnY2l0ZS1hdXRob3IyLWxhYmVsJzogJ+esrDLkvZzogIUnLFxuXHRcdFx0J2NpdGUtYXV0aG9yMy1sYWJlbCc6ICfnrKwz5L2c6ICFJyxcblx0XHRcdCdjaXRlLWF1dGhvcjQtbGFiZWwnOiAn56ysNOS9nOiAhScsXG5cdFx0XHQnY2l0ZS1hdXRob3I1LWxhYmVsJzogJ+esrDXkvZzogIUnLFxuXHRcdFx0J2NpdGUtYWdlbmN5JzogJ+mAmuioiuekvicsXG5cdFx0XHQnY2l0ZS1pc3NuLWxhYmVsJzogJ0lTU04nLFxuXHRcdFx0J2NpdGUtb2NsYy1sYWJlbCc6ICdPQ0xDJyxcblx0XHRcdCdjaXRlLWJpYmNvZGUtbGFiZWwnOiAnQmliY29kZScsXG5cdFx0XHQnY2l0ZS1pc2JuLWxhYmVsJzogJ0lTQk4nLFxuXHRcdFx0J2NpdGUtb3RoZXJzLWxhYmVsJzogJ+itr+iAhScsXG5cdFx0XHQnY2l0ZS1lZGl0aW9uLWxhYmVsJzogJ+eJiOacrCcsXG5cdFx0XHQnY2l0ZS10cmFucy10aXRsZS1sYWJlbCc6ICfnv7vora/lvozmqJnpoYwnLFxuXHRcdFx0J2NpdGUtcmVmLWxhYmVsJzogJ+mMqOm7nuaomeitmOespicsXG5cdFx0XHQnY2l0ZS1wb3N0c2NyaXB0LWxhYmVsJzogJ+e7k+WwvuespicsXG5cdFx0XHQnY2l0ZS1zZXJpZXMtbGFiZWwnOiAn57O75YiXJyxcblx0XHRcdCdjaXRlLXZvbHVtZS1sYWJlbCc6ICfljbcnLFxuXHRcdFx0J2NpdGUtdW5pZmllZC1sYWJlbCc6ICfntbHkuIDmm7jomZ8nLFxuXHRcdFx0J2NpdGUtY2hhcHRlci1sYWJlbCc6ICfnq6Dnr4AnLFxuXHRcdFx0J2NpdGUtam91cm5hbC1sYWJlbCc6ICfpm5zoqowv5pyf5YiKJyxcblx0XHRcdCdjaXRlLWlzc3VlLWxhYmVsJzogJ+acnycsXG5cdFx0XHQnY2l0ZS1wbWlkLWxhYmVsJzogJ1BNSUQnLFxuXHRcdFx0J2NpdGUtZWRpdG9yLWxhYmVsJzogJ+e3qOi8rycsXG5cdFx0XHQnY2l0ZS1lZGl0b3IxLWZpcnN0LWxhYmVsJzogJ+e3qOi8r+WQjScsXG5cdFx0XHQnY2l0ZS1lZGl0b3IxLWxhc3QtbGFiZWwnOiAn57eo6Lyv5aeTJyxcblx0XHRcdCdjaXRlLWVkaXRvcjEtbGluay1sYWJlbCc6ICfnt6jovK/mop3nm64nLFxuXHRcdFx0J2NpdGUtZWRpdG9yLWZpcnN0LWxhYmVsJzogJ+e3qOi8r+WQjScsXG5cdFx0XHQnY2l0ZS1lZGl0b3ItbGFzdC1sYWJlbCc6ICfnt6jovK/lp5MnLFxuXHRcdFx0J2NpdGUtZWRpdG9yLWxpbmstbGFiZWwnOiAn57eo6Lyv5qKd55uuJyxcblx0XHRcdCdjaXRlLXBtYy1sYWJlbCc6ICdQTUMnLFxuXHRcdFx0J2NpdGUtaWQtbGFiZWwnOiAnSUQnLFxuXHRcdFx0J2NpdGUtbGF5c3VtbWFyeS1sYWJlbCc6ICfnsKHmmI7mkZjopoEnLFxuXHRcdFx0J2NpdGUtbGF5c291cmNlLWxhYmVsJzogJ+ewoeaYjuaRmOimgeS+hua6kCcsXG5cdFx0XHQnY2l0ZS1sYXlkYXRlLWxhYmVsJzogJ+ewoeaYjuaRmOimgeaXpeacnycsXG5cdFx0XHQnY2l0ZS1jb25mZXJlbmNlLWxhYmVsJzogJ+acg+itsOWQjeeosScsXG5cdFx0XHQnY2l0ZS1jb25mZXJlbmNldXJsLWxhYmVsJzogJ+acg+itsOe2suWdgCcsXG5cdFx0XHQnY2l0ZS1ib29rdGl0bGUtbGFiZWwnOiAn6KuW5paH6ZuGJyxcblx0XHRcdCdjaXRlLWVuY3ljbG9wZWRpYS1sYWJlbCc6ICfnmb7np5Hlhajmm7jlkI0nLFxuXHRcdFx0J2NpdGUtYXV0aG9ybGluay10b29sdGlwJzogJ+iLpeipsuS9nOiAheacieaineebru+8jOWhq+Wvq+aineebruWQjeeosScsXG5cdFx0XHQnY2l0ZS1hdC10b29sdGlwJzogJ+WFp+WuueWcqOS+hua6kOS4reeahOS9jee9ru+8iOeVtuaMiemggeeivOW8leeUqOS4jemBqeeVtuaZgu+8iScsXG5cdFx0XHQnY2l0ZS1hY2Nlc3NkYXRlLXRvb2x0aXAnOiAn6Kiq5ZWP6YCZ5YCL5byV55So5L6G5rqQ5pmC55qE5pel5pyfJyxcblx0XHRcdCdjaXRlLWlkLXRvb2x0aXAnOiAn5YW25LuW55qE5paH56ug57eo6JmfJyxcblx0XHRcdCdjaXRlLXNhbWVjb250ZW50LWRlc2MnOiAn5qqi5p+l5ZCr5pyJ55u45ZCM5YWn5a6555qE5aSa5YCL5Y+D6ICD5paH5427Jyxcblx0XHRcdCdjaXRlLXNhbWVjb250ZW50LWVycm9yJzogJ+WkmuWAi+WPg+iAg+aWh+eNu+WMheWQq+acieebuOWQjOWFp+WuuScsXG5cdFx0XHQnY2l0ZS1yZXBlYXRlZC1kZXNjJzogJ+S9v+eUqOebuOWQjOWQjeWtl+eahOWkmuWAi+WPg+iAg+aWh+eNuycsXG5cdFx0XHQnY2l0ZS1yZXBlYXRlZC1lcnJvcic6ICflpJrlgIvlj4PogIPmlofnjbvkvb/nlKjkuobnm7jlkIzlkI3lrZcnLFxuXHRcdFx0J2NpdGUtdW5kZWZpbmVkLWRlc2MnOiAn5pyq5a6a576p55qE5Y+D6ICD5paH5427Jyxcblx0XHRcdCdjaXRlLXVuZGVmaW5lZC1lcnJvcic6ICfkuIDlgIvlt7Llkb3lkI3nmoTlj4PogIPmlofnjbvlt7LntpPkvb/nlKjkvYbmmK/mspLmnInlrprnvqknLFxuXHRcdFx0J2NpdGUtd29yay10b29sdGlwJzogJ+WIiueZu+ipsuS9nOWTgeeahOWHuueJiOeJqeeahOWQjeeoseOAguiri+S4jeimgeS9v+eUqOaWnOmrlCcsXG5cdFx0XHQnY2l0ZS1uZXdzcGFwZXItdG9vbHRpcCc6ICfliIrnmbvoqbLmlrDogZ7nmoTlh7rniYjnianlkI3nqLEnLFxuXHRcdFx0J2NpdGUtc2VyaWVzLXRvb2x0aXAnOiAn55W25pu457GN5piv5LiA57O75YiX5Ye654mI5ZOB5Lit55qE5YW25Lit5LiA6YOo5Lu95pmC5L2/55SoJyxcblx0XHRcdCdjaXRlLXVuaWZpZWQtdG9vbHRpcCc6ICcxOTgw5bm05Luj5LmL5YmN5Lit5ZyL5omA5L2/55So55qE5pu457GN57eo6JmfJyxcblx0XHRcdCdjaXRlLWxheXN1bW1hcnktdG9vbHRpcCc6ICfoqbLmlofnjbvnm7jpl5znmoTmlrDogZ7loLHpgZPnmoRVUkwnLFxuXHRcdFx0J2NpdGUtbGF5c291cmNlLXRvb2x0aXAnOiAn6Kmy5paH542755u46Zec55qE5paw6IGe5aCx6YGT55qE5Ye66JmVJyxcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J2NpdGUtc2VjdGlvbi1sYWJlbCc6ICflvJXnlKgnLFxuXHRcdFx0J2NpdGUtdGVtcGxhdGUtbGlzdCc6ICfmqKHmnb8nLFxuXHRcdFx0J2NpdGUtbmFtZWQtcmVmcy1sYWJlbCc6ICflkIzlkI3mlofnjK4nLFxuXHRcdFx0J2NpdGUtbmFtZWQtcmVmcy10aXRsZSc6ICfmj5LlhaXlkIzlkI3mlofnjK4nLFxuXHRcdFx0J2NpdGUtbmFtZWQtcmVmcy1idXR0b24nOiAn5bey5ZG95ZCN5Y+C6ICD5paH54yuJyxcblx0XHRcdCdjaXRlLW5hbWVkLXJlZnMtZHJvcGRvd24nOiAn5ZCM5ZCN5paH54yuJyxcblx0XHRcdC8vIFVzZWQgb24gdGhlIHRvcCBvZiB0aGUgbmFtZWQgcmVmcyBsaXN0IGRyb3Bzb3duXG5cdFx0XHQnY2l0ZS1kaWFsb2ctYmFzZSc6ICflvJXnlKgnLFxuXHRcdFx0J2NpdGUtZm9ybS1zdWJtaXQnOiAn5o+S5YWlJyxcblx0XHRcdCdjaXRlLWZvcm0tc2hvd2hpZGUnOiAn5pi+56S6L+makOiXj+mineWkluWMuuWfnycsXG5cdFx0XHQnY2l0ZS1uby1uYW1lZHJlZnMnOiAn5Zyo5pys6aG15om+5LiN5Yiw5Lu75L2V5ZCM5ZCN5paH54yuJyxcblx0XHRcdCdjaXRlLW5hbWVkcmVmcy1pbnRybyc6ICfku47liJflh7rnmoTlj4LogIPmlofnjK7nm67lvZXkuK3pgInmi6nkuIDkuKrlkI3lrZfjgILngrnlh7vigJzmj5LlhaXigJ3mj5LlhaXkuIDkuKrlj4LogIPmlofnjK7liLDmlofmnKzkuK3jgIInLFxuXHRcdFx0J2NpdGUtcmF3LXByZXZpZXcnOiAn5rqQ5Luj56CB77yaJyxcblx0XHRcdCdjaXRlLXBhcnNlZC1sYWJlbCc6ICfop6PmnpDlkI7nmoTmupDku6PnoIHvvJonLFxuXHRcdFx0J2NpdGUtZm9ybS1wYXJzZSc6ICfmmL7npLrop6PmnpDlkI7nmoTpooTop4gnLFxuXHRcdFx0J2NpdGUtcmVmcHJldmlldyc6ICfpooTop4gnLFxuXHRcdFx0J2NpdGUtbmFtZS1sYWJlbCc6ICdyZWblkI0nLFxuXHRcdFx0J2NpdGUtZ3JvdXAtbGFiZWwnOiAncmVm57uEJyxcblx0XHRcdCdjaXRlLWZvcm0tcmVzZXQnOiAn6YeN6K6+6KGo5Y2VJyxcblx0XHRcdCdjaXRlLWxvYWRpbmcnOiAn6L295YWl5pWw5o2uJyxcblx0XHRcdC8vIFNob3duIHdoaWxlIHBhZ2V0ZXh0IGlzIGJlaW5nIGRvd25sb2FkZWQgZnJvbSB0aGUgQVBJXG5cdFx0XHQnY2l0ZS1pbnNlcnQtZGF0ZSc6ICfmj5LlhaXlvZPliY3ml6XmnJ8nLFxuXHRcdFx0Ly8gQWx0L3RpdGxlIHRleHQgZm9yIFwiaW5zZXJ0IGRhdGVcIiBpY29uXG5cdFx0XHQnY2l0ZS1lcnItcmVwb3J0LWhlYWRpbmcnOiAn5byV55So6ZSZ6K+v5oql5ZGKJyxcblx0XHRcdC8vIEhlYWRpbmcgZm9yIGVycm9yIHJlcG9ydCB0YWJsZVxuXHRcdFx0J2NpdGUtZXJyLXJlcG9ydC1jbG9zZSc6ICflhbPpl60nLFxuXHRcdFx0Ly8gQWx0L3RpdGxlIHRleHQgZm9yIFwiY2xvc2VcIiBpY29uIG9uIGVycm9yIHJlcG9ydFxuXHRcdFx0J2NpdGUtZXJyLXJlcG9ydC1lbXB0eSc6ICfmnKrmib7liLDplJnor68nLFxuXHRcdFx0Ly8gTWVzc2FnZSBkaXNwbGF5ZWQgaW4gdGhlIGVycm9yIHJlcG9ydCBsaXN0IGlmIHRoZXJlIGFyZSBubyBlcnJvcnNcblx0XHRcdCdjaXRlLWF1dG9maWxsLWFsdCc6ICfoh6rliqjloavlhYUnLFxuXHRcdFx0Ly8gQWx0IHRleHQgZm9yIGF1dG9maWxsIGJ1dHRvbiBpbWFnZVxuXHRcdFx0J2NpdGUtcmVmLXRvb2x0aXAnOiAn6ZSa54K555qE5qCH6K+G56ym77yI5L2/6K+l5byV55So5Y+v5Lul5oiQ5Li65YaF6YOo6ZO+5o6l55qE55uu5qCH77yJJyxcblx0XHRcdCdjaXRlLXBvc3RzY3JpcHQtdG9vbHRpcCc6ICflpoLmnpzorr7lrprov5nkuIDlj4LmlbDvvIzliJnopobnm5bkvb/nlKjlj6Xngrnnu4jmraLlvJXmlofnmoTpu5jorqTooYzkuLonLFxuXHRcdFx0J2NpdGUtZGlhbG9nLXdlYic6ICfnvZHpobXlvJXnlKgnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLW5ld3MnOiAn5paw6Ze75byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1ib29rJzogJ+S5puexjeW8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctam91cm5hbCc6ICfmnJ/liIrlvJXnlKgnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLWNvbmZlcmVuY2UnOiAn5Lya6K6u5byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1lbmN5Y2xvcGVkaWEnOiAn55m+56eR5YWo5Lmm5byV55SoJyxcblx0XHRcdCdjaXRlLWF1dGhvci1sYWJlbCc6ICfkvZzogIUnLFxuXHRcdFx0J2NpdGUtdGl0bGUtbGFiZWwnOiAn5qCH6aKYJyxcblx0XHRcdCdjaXRlLXVybC1sYWJlbCc6ICfnvZHlnYAnLFxuXHRcdFx0J2NpdGUtd2Vic2l0ZS1sYWJlbCc6ICfnvZHnq5nlkI3np7AnLFxuXHRcdFx0J2NpdGUtd29yay1sYWJlbCc6ICfmiqXnurjmiJbmnYLlv5cnLFxuXHRcdFx0J2NpdGUtYWdlbmN5LWxhYmVsJzogJ+mAmuiur+ekvicsXG5cdFx0XHQnY2l0ZS1wdWJsaXNoZXItbGFiZWwnOiAn5Ye654mI6ICFJyxcblx0XHRcdCdjaXRlLWFjY2Vzc2RhdGUtbGFiZWwnOiAn6K6/6Zeu5pel5pyfJyxcblx0XHRcdCdjaXRlLWxhc3QtbGFiZWwnOiAn5aeTJyxcblx0XHRcdCdjaXRlLWZpcnN0LWxhYmVsJzogJ+WQjScsXG5cdFx0XHQnY2l0ZS1hdXRob3JsaW5rLWxhYmVsJzogJ+S9nOiAheadoeebricsXG5cdFx0XHQnY2l0ZS1jb2F1dGhvcnMtbGFiZWwnOiAn5YW25LuW5L2c6ICFJyxcblx0XHRcdCdjaXRlLWxvY2F0aW9uLWxhYmVsJzogJ+WHuueJiOWcsCcsXG5cdFx0XHQnY2l0ZS1wYWdlLWxhYmVsJzogJ+aJgOWcqOmhtScsXG5cdFx0XHQnY2l0ZS1wYWdlcy1sYWJlbCc6ICfpobXojIPlm7QnLFxuXHRcdFx0J2NpdGUtYXQtbGFiZWwnOiAn5Lmm5YaF6YOo5YiGJyxcblx0XHRcdCdjaXRlLWxhbmd1YWdlLWxhYmVsJzogJ+ivreiogCcsXG5cdFx0XHQnY2l0ZS1mb3JtYXQtbGFiZWwnOiAn5paH5qGj5qC85byPJyxcblx0XHRcdCdjaXRlLWRvaS1sYWJlbCc6ICdET0knLFxuXHRcdFx0J2NpdGUtZGF0ZS1sYWJlbCc6ICfml6XmnJ8nLFxuXHRcdFx0J2NpdGUtbW9udGgtbGFiZWwnOiAn5pyI5Lu9Jyxcblx0XHRcdCdjaXRlLXllYXItbGFiZWwnOiAn5bm05Lu9Jyxcblx0XHRcdCdjaXRlLXF1b3RlLWxhYmVsJzogJ+aRmOW9lScsXG5cdFx0XHQnY2l0ZS1uZXdzcGFwZXItbGFiZWwnOiAn5paw6Ze75aqS5L2TJyxcblx0XHRcdCdjaXRlLWF1dGhvcjItbGFiZWwnOiAn56ysMuS9nOiAhScsXG5cdFx0XHQnY2l0ZS1hdXRob3IzLWxhYmVsJzogJ+esrDPkvZzogIUnLFxuXHRcdFx0J2NpdGUtYXV0aG9yNC1sYWJlbCc6ICfnrKw05L2c6ICFJyxcblx0XHRcdCdjaXRlLWF1dGhvcjUtbGFiZWwnOiAn56ysNeS9nOiAhScsXG5cdFx0XHQnY2l0ZS1hZ2VuY3knOiAn6YCa6K6v56S+Jyxcblx0XHRcdCdjaXRlLWlzc24tbGFiZWwnOiAnSVNTTicsXG5cdFx0XHQnY2l0ZS1vY2xjLWxhYmVsJzogJ09DTEMnLFxuXHRcdFx0J2NpdGUtYmliY29kZS1sYWJlbCc6ICdCaWJjb2RlJyxcblx0XHRcdCdjaXRlLWlzYm4tbGFiZWwnOiAnSVNCTicsXG5cdFx0XHQnY2l0ZS1vdGhlcnMtbGFiZWwnOiAn6K+R6ICFJyxcblx0XHRcdCdjaXRlLWVkaXRpb24tbGFiZWwnOiAn54mI5pysJyxcblx0XHRcdCdjaXRlLXRyYW5zLXRpdGxlLWxhYmVsJzogJ+e/u+ivkeWQjuagh+mimCcsXG5cdFx0XHQnY2l0ZS1yZWYtbGFiZWwnOiAn6ZSa54K55qCH6K+G56ymJyxcblx0XHRcdCdjaXRlLXBvc3RzY3JpcHQtbGFiZWwnOiAn57uT5bC+56ymJyxcblx0XHRcdCdjaXRlLXNlcmllcy1sYWJlbCc6ICfns7vliJcnLFxuXHRcdFx0J2NpdGUtdm9sdW1lLWxhYmVsJzogJ+WNtycsXG5cdFx0XHQnY2l0ZS11bmlmaWVkLWxhYmVsJzogJ+e7n+S4gOS5puWPtycsXG5cdFx0XHQnY2l0ZS1jaGFwdGVyLWxhYmVsJzogJ+eroOiKgicsXG5cdFx0XHQnY2l0ZS1qb3VybmFsLWxhYmVsJzogJ+adguW/ly/mnJ/liIonLFxuXHRcdFx0J2NpdGUtaXNzdWUtbGFiZWwnOiAn5pyfJyxcblx0XHRcdCdjaXRlLXBtaWQtbGFiZWwnOiAnUE1JRCcsXG5cdFx0XHQnY2l0ZS1lZGl0b3ItbGFiZWwnOiAn57yW6L6RJyxcblx0XHRcdCdjaXRlLWVkaXRvcjEtZmlyc3QtbGFiZWwnOiAn57yW6L6R5ZCNJyxcblx0XHRcdCdjaXRlLWVkaXRvcjEtbGFzdC1sYWJlbCc6ICfnvJbovpHlp5MnLFxuXHRcdFx0J2NpdGUtZWRpdG9yMS1saW5rLWxhYmVsJzogJ+e8lui+keadoeebricsXG5cdFx0XHQnY2l0ZS1lZGl0b3ItZmlyc3QtbGFiZWwnOiAn57yW6L6R5ZCNJyxcblx0XHRcdCdjaXRlLWVkaXRvci1sYXN0LWxhYmVsJzogJ+e8lui+keWnkycsXG5cdFx0XHQnY2l0ZS1lZGl0b3ItbGluay1sYWJlbCc6ICfnvJbovpHmnaHnm64nLFxuXHRcdFx0J2NpdGUtcG1jLWxhYmVsJzogJ1BNQycsXG5cdFx0XHQnY2l0ZS1pZC1sYWJlbCc6ICdJRCcsXG5cdFx0XHQnY2l0ZS1sYXlzdW1tYXJ5LWxhYmVsJzogJ+eugOaYjuaRmOimgScsXG5cdFx0XHQnY2l0ZS1sYXlzb3VyY2UtbGFiZWwnOiAn566A5piO5pGY6KaB5p2l5rqQJyxcblx0XHRcdCdjaXRlLWxheWRhdGUtbGFiZWwnOiAn566A5piO5pGY6KaB5pel5pyfJyxcblx0XHRcdCdjaXRlLWNvbmZlcmVuY2UtbGFiZWwnOiAn5Lya6K6u5ZCN56ewJyxcblx0XHRcdCdjaXRlLWNvbmZlcmVuY2V1cmwtbGFiZWwnOiAn5Lya6K6u572R5Z2AJyxcblx0XHRcdCdjaXRlLWJvb2t0aXRsZS1sYWJlbCc6ICforrrmlofpm4YnLFxuXHRcdFx0J2NpdGUtZW5jeWNsb3BlZGlhLWxhYmVsJzogJ+eZvuenkeWFqOS5puWQjScsXG5cdFx0XHQnY2l0ZS1hdXRob3JsaW5rLXRvb2x0aXAnOiAn6Iul6K+l5L2c6ICF5pyJ5p2h55uu77yM5aGr5YaZ5p2h55uu5ZCN56ewJyxcblx0XHRcdCdjaXRlLWF0LXRvb2x0aXAnOiAn5YaF5a655Zyo5p2l5rqQ5Lit55qE5L2N572u77yI5b2T5oyJ6aG156CB5byV55So5LiN6YCC5b2T5pe277yJJyxcblx0XHRcdCdjaXRlLWFjY2Vzc2RhdGUtdG9vbHRpcCc6ICforr/pl67ov5nkuKrlvJXnlKjmnaXmupDml7bnmoTml6XmnJ8nLFxuXHRcdFx0J2NpdGUtaWQtdG9vbHRpcCc6ICflhbbku5bnmoTmlofnq6DnvJblj7cnLFxuXHRcdFx0J2NpdGUtc2FtZWNvbnRlbnQtZGVzYyc6ICfmo4Dmn6XlkKvmnInnm7jlkIzlhoXlrrnnmoTlpJrkuKrlj4LogIPmlofnjK4nLFxuXHRcdFx0J2NpdGUtc2FtZWNvbnRlbnQtZXJyb3InOiAn5aSa5Liq5Y+C6ICD5paH54yu5YyF5ZCr5pyJ55u45ZCM5YaF5a65Jyxcblx0XHRcdCdjaXRlLXJlcGVhdGVkLWRlc2MnOiAn5L2/55So55u45ZCM5ZCN5a2X55qE5aSa5Liq5Y+C6ICD5paH54yuJyxcblx0XHRcdCdjaXRlLXJlcGVhdGVkLWVycm9yJzogJ+WkmuS4quWPguiAg+aWh+eMruS9v+eUqOS6huebuOWQjOWQjeWtlycsXG5cdFx0XHQnY2l0ZS11bmRlZmluZWQtZGVzYyc6ICfmnKrlrprkuYnnmoTlj4LogIPmlofnjK4nLFxuXHRcdFx0J2NpdGUtdW5kZWZpbmVkLWVycm9yJzogJ+S4gOS4quW3suWRveWQjeeahOWPguiAg+aWh+eMruW3sue7j+S9v+eUqOS9huaYr+ayoeacieWumuS5iScsXG5cdFx0XHQnY2l0ZS13b3JrLXRvb2x0aXAnOiAn5YiK55m76K+l5L2c5ZOB55qE5Ye654mI54mp55qE5ZCN56ew44CC6K+35LiN6KaB5L2/55So5pac5L2TJyxcblx0XHRcdCdjaXRlLW5ld3NwYXBlci10b29sdGlwJzogJ+WIiueZu+ipsuaWsOiBnueahOWHuueJiOeJqeWQjeensCcsXG5cdFx0XHQnY2l0ZS1zZXJpZXMtdG9vbHRpcCc6ICflvZPkuabnsY3mmK/kuIDns7vliJflh7rniYjlk4HkuK3nmoTlhbbkuK3kuIDpg6jku73ml7bkvb/nlKgnLFxuXHRcdFx0J2NpdGUtdW5pZmllZC10b29sdGlwJzogJzE5ODDlubTku6PkuYvliY3kuK3lm73miYDkvb/nlKjnmoTkuabnsY3nvJblj7cnLFxuXHRcdFx0J2NpdGUtbGF5c3VtbWFyeS10b29sdGlwJzogJ+ivpeaWh+eMruebuOWFs+eahOaWsOmXu+aKpemBk+eahFVSTCcsXG5cdFx0XHQnY2l0ZS1sYXlzb3VyY2UtdG9vbHRpcCc6ICfor6XmlofnjK7nm7jlhbPnmoTmlrDpl7vmiqXpgZPnmoTlh7rlpIQnLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge3JlZlRvb2xiYXJNZXNhZ2VzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLHdGQUFBQSxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ25DO0FBR0EsSUFBQUEsUUFBTztBQUFBLElBRUwsTUFBTSxPQUFPLGNBQWMsWUFBWSxVQUFVLEtBQ2pELE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTTtBQUFBLElBRXpDLE1BQU0sT0FBTyxRQUFRLFlBQVksSUFBSSxLQUNyQyxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sS0FDekMsTUFBTSxPQUFPLFdBQVEsWUFBWSxPQUFJO0FBQUEsSUFFcEMsMkJBQVk7QUFBRSxhQUFPO0FBQUEsSUFBTSxFQUFHLEtBQUssU0FBUyxhQUFh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QVVDO0VBQWtCLElBQUl6VSxHQUFHc0ksT0FBT0MsSUFBSTtBQUdyRCxNQUFJLENBQUMsQ0FBQyxRQUFRLFFBQVEsRUFBRTZKLFNBQVNvQyxRQUFRLEtBQUtDLHVCQUF1QixZQUFZO0FBQ2hGO0VBQ0Q7QUFFQSxNQUFJLENBQUN6VSxHQUFHMFUsS0FBS2xRLFFBQVErRCxJQUFJLGdCQUFnQixHQUFHO0FBQzNDO0VBQ0Q7QUFFQSxNQUFJM0csU0FBUytTLGNBQWMscUNBQXFDLEdBQUc7QUFDbEU7RUFDRDtBQUdBUCxvQkFBa0I7QUFFbEIvQyxpQkFBZTtBQUNmLFFBQUEsR0FBSzlSLG1CQUFBcVYsU0FBUSxFQUFFak0sS0FBS3ZILFdBQVc7QUFDaEMsR0FBRzsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlN5bWJvbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZG9jdW1lbnQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiVHlwZUVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIiQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhcmdzIiwgImxlbmd0aCIsICJtdyIsICJtZXNzYWdlIiwgInBhcnNlIiwgInBsYWluIiwgInJlZlRvb2xiYXJDb25maWciLCAiQ2l0ZVRlbXBsYXRlIiwgIndpbmRvdyIsICJDaXRlVEIiLCAiT3B0aW9ucyIsICJtb250aHMiLCAibW9kYWwiLCAiYXV0b3BhcnNlIiwgImV4cGFuZHRlbXBsYXRlcyIsICJmaWVsZCIsICJpbmNyZW1lbnRfZ3JvdXAiLCAiaW5jcmVtZW50X2J1dHRvbiIsICJhdXRvZmlsbHByb3AiLCAiYXV0b2ZpbGxpZCIsICJ0b29sdGlwIiwgImluaXQiLCAicmVmVG9vbGJhcjIiLCAiJGJvZHkiLCAiRGVmYXVsdE9wdGlvbnMiLCAiZ2V0T3B0aW9uIiwgIm9wdCIsICJVc2VyT3B0aW9ucyIsICJfJCR3aWR0aDIiLCAiJCIsICJkb2N1bWVudCIsICJmaW5kIiwgInRyaWdnZXIiLCAiJHRhcmdldCIsICJ0ZW1saXN0IiwgInQiLCAiVGVtcGxhdGVzIiwgIk9iamVjdCIsICJoYXNPd24iLCAiXyQkd2lkdGgiLCAidGVtIiwgInNmb3JtIiwgImVzY1N0ciIsICJzaG9ydGZvcm0iLCAiYWN0aW9ub2JqIiwgInR5cGUiLCAibW9kdWxlIiwgImNvbmNhdCIsICJkaWFsb2dvYmoiLCAicmVzaXplbWUiLCAidGl0bGUiLCAiaWQiLCAiaHRtbCIsICJnZXRJbml0aWFsIiwgImRpYWxvZyIsICJ3aWR0aCIsICJNYXRoIiwgInJvdW5kIiwgIm9wZW4iLCAiZ2V0T3BlblRlbXBsYXRlIiwgImdldEZvcm0iLCAib24iLCAiZSIsICJwcmV2ZW50RGVmYXVsdCIsICJwcmV2UGFyc2VDbGljayIsICJidXR0b25zIiwgInJlZiIsICJnZXRSZWYiLCAid2lraUVkaXRvciIsICJtb2R1bGVzIiwgInRvb2xiYXIiLCAiZm4iLCAiZG9BY3Rpb24iLCAiZGF0YSIsICJvcHRpb25zIiwgInBvc3QiLCAic2hvd0hpZGVFeHRyYSIsICJ0ZW1wbGF0ZSIsICJkaXYiLCAic2hvdyIsICJ0ZXh0IiwgImhpZGUiLCAicmVzZXRGb3JtIiwgImxhYmVsIiwgInRlbXBsYXRlbmFtZSIsICJhY3Rpb24iLCAicmVmc2VjdGlvbiIsICJzZWN0aW9ucyIsICJjaXRlcyIsICJncm91cHMiLCAidG9vbHMiLCAibGlzdCIsICJuYW1lZHJlZnMiLCAibnJlZnMiLCAiaWNvbiIsICJzZWN0aW9uIiwgImdyb3VwIiwgImRlZmF1bHRkaWFsb2dzIiwgImxvYWRSZWZzIiwgInJlZm5hbWUiLCAidmFsIiwgImdldE5hbWVkUmVmIiwgIm9mZiIsICJ1dGlsIiwgImFkZENTUyIsICJtYWluUmVmTGlzdCIsICJyZWZzTG9hZGVkIiwgImlubmVyb25seSIsICJmb3JpbnNlcnQiLCAiaSIsICJqIiwgImciLCAicmVzIiwgInJlZm9iaiIsICJzaG9ydHRhZyIsICJTdHJpbmciLCAidHJpbSIsICJnZXRRdW90ZWRTdHJpbmciLCAicmVmZ3JvdXAiLCAiY29udGVudCIsICJpbmNyZW1lbnRhYmxlcyIsICJmaWVsZHMiLCAiZmllbGRuYW1lIiwgImZpZWxkaWQiLCAicmVwbGFjZSIsICJ0b1N0cmluZyIsICJiYXNpYyIsICJleHRyYSIsICJwdXNoIiwgImdldFBhZ2VUZXh0IiwgImxvYWRSZWZzSW50ZXJuYWwiLCAicmVmc3JlZ2V4IiwgImV4ZWMiLCAic2V0dXBOYW1lZFJlZnMiLCAiY2FsbGJhY2siLCAicG9zdGRhdGEiLCAiY29uZmlnIiwgImdldCIsICJwcm9wIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInRoZW4iLCAicmVzdGV4dCIsICJ3aWtpdGV4dCIsICJ3Z0FydGljbGVJZCIsICJydnByb3AiLCAicGFnZWlkcyIsICJydmV4cGFuZHRlbXBsYXRlcyIsICJxdWVyeSIsICJwYWdldGV4dCIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2FmZURlY29kZVVSSUNvbXBvbmVudCIsICJzIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJpbml0QXV0b2ZpbGwiLCAiXyQkYXR0ciIsICJlbGVtaWQiLCAiYXR0ciIsICJhdXRvdHlwZSIsICJ1cmwiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAic2V0QXR0cmlidXRlIiwgImhlYWQiLCAiYXBwZW5kIiwgImF1dG9GaWxsIiwgImNsIiwgImNvYXV0aG9ycyIsICJhdXRob3JzIiwgIl8kJGVxJGF0dHIiLCAiY2xhc3NlcyIsICJlcSIsICJzcGxpdCIsICJwYXR0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJuIiwgImRvbmUiLCAiY2xhc3NfIiwgInZhbHVlIiwgImVyciIsICJmIiwgIl8kJGVxJGF0dHIyIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImpvaW4iLCAiZGF0ZSIsICJEVCIsICJEYXRlIiwgInRlc3QiLCAiZm9ybWF0RGF0ZSIsICJqb3VybmFsIiwgInZvbHVtZSIsICJpc3N1ZSIsICJkb2kiLCAicHVibGlzaGVyIiwgImxvY2F0aW9uIiwgImVkaXRpb24iLCAiaXNibiIsICJpc3NuIiwgImxhbmd1YWdlIiwgImNoYXB0ZXIiLCAiaW5jcmVtZW50RmllbGRzIiwgIl8kJGF0dHIyIiwgImN1cnJlbnRyb3ciLCAicGFyZW50cyIsICJwcmV2IiwgImNzcyIsICJkZXRhY2giLCAiaW5jcmVtZW50cyIsICJ0cnMiLCAibWFrZUZvcm1Jbm5lciIsICJyZXZlcnNlIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInRyIiwgImFmdGVyIiwgImZpbGxBY2Nlc3NkYXRlIiwgIl8kJGF0dHIzIiwgImRhdGVzdHIiLCAidXNlZGF5IiwgInVzZW1vbnRoIiwgInptb250aCIsICJtb250aCIsICJnZXRVVENNb250aCIsICJ6ZGF0ZSIsICJnZXRVVENEYXRlIiwgImdldFVUQ0Z1bGxZZWFyIiwgIm5hbWVzIiwgInN0dWZmIiwgInNlbGVjdCIsICJiZWZvcmUiLCAicHJldmxhYmVsIiwgInBhcnNlbGFiZWwiLCAibGluayIsICJocmVmIiwgIm1hcmdpbiIsICJkaXNwbGF5IiwgImNvbG9yIiwgIm5hbWVkUmVmU2VsZWN0Q2xpY2siLCAibnJlZlBhcnNlQ2xpY2siLCAiZmlsbE5yZWZQcmV2aWV3IiwgInBhcnNlZCIsICJjaG9pY2UiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAibGFzdG5hbWVkcmVmY2hvaWNlIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImZpbGxUZW1wbGF0ZVByZXZpZXciLCAic2V0dGluZyIsICJzcSIsICJkcSIsICJmaXhTdHIiLCAic2xpY2UiLCAidG9VcHBlckNhc2UiLCAicmF3IiwgIl90ZW1wbGF0ZU9iamVjdCIsICJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwgIl90ZW1wbGF0ZU9iamVjdDIiLCAiZGlhbG9ncyIsICJkaXNwbGF5RXJyb3JzIiwgImVycm9ycyIsICJyZW1vdmUiLCAidGFibGUiLCAiYm9yZGVyIiwgInBhZGRpbmciLCAidHIxIiwgInRoMSIsICJ0aDIiLCAiaW0iLCAiYWQiLCAidGQiLCAiZXJyb3IiLCAidGQxIiwgInRkMiIsICJtc2ciLCAicmVmVG9vbGJhckJhc2UiLCAiX3dpbmRvdyIsICJjb25zdHJ1Y3RvciIsICJiYXNpY2ZpZWxkcyIsICJleHBhbmRlZGZpZWxkcyIsICJpbmNyc2V0dXAiLCAiYXV0b2ZpbGxzIiwgIl9pdGVyYXRvcjYiLCAiZW50cmllcyIsICJfc3RlcDYiLCAiZmllbGRvYmoiLCAibGFiZWxmaWVsZCIsICJzZXR1cCIsICJpbmNydmFsIiwgImF1dG9kYXRlRmllbGRzIiwgImluY2x1ZGVzIiwgImluY3J0eXBlIiwgImlucHV0IiwgInRhYmluZGV4IiwgInN0eWxlIiwgImNsYXNzbmFtZSIsICJhZGRDbGFzcyIsICJuZWVkc2V0dXAiLCAia2V5cyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJhdXRvZmlsbCIsICJoaWRkZW4iLCAibWFpbiIsICJmb3JtMSIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJmb3JtMiIsICJfaXRlcmF0b3I5IiwgIl9zdGVwOSIsICJmb3JtMyIsICIkdHIiLCAiJHRkMSIsICIkbGFiZWwxIiwgImlucHV0MSIsICJ0ZDMiLCAibGFiZWwyIiwgInRkNCIsICJpbnB1dDIiLCAiZXh0cmFzIiwgInNwYW4xIiwgInNwYW4yIiwgInJlZlRvb2xiYXJNZXNhZ2VzIiwgIndnVXNlckxhbmd1YWdlIiwgIm1lc3NhZ2VzIiwgInNldCIsICJ3Z0FjdGlvbiIsICJ3Z1BhZ2VDb250ZW50TW9kZWwiLCAidXNlciIsICJxdWVyeVNlbGVjdG9yIiwgImdldEJvZHkiXQp9Cg==
