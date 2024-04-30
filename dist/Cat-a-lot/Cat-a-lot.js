/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title1=Cat-a-lot.js|license=CC-BY-SA-4.0}}'
 *
 * Cat-a-lot
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Cat-a-lot.js}
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Cat-a-lot.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Cat-a-lot/modules/core.ts}
 * @author Magnus Manske, Ilmari Karonen, DieBuche, 安忆 <i@anyi.in>
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title2=Cat-a-lot Messages|license2=CC-BY-SA-4.0}}'
 *
 * Cat-a-lot messages
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Cat-a-lot.js/zh-hans}
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Cat-a-lot.js/zh-hant}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Cat-a-lot/modules/messages.ts}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: GPL-2.0-or-later
 * _addText: '{{Gadget Header|title3=jQuery checkboxShiftClick|license3=GPL-2.0-or-later}}'
 *
 * jQuery checkboxShiftClick
 *
 * @description This will enable checkboxes to be checked or unchecked in a row by clicking one, holding shift and clicking another one
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Cat-a-lot.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Cat-a-lot/modules/extendJQueryPrototype.ts}
 * @author Krinkle <krinklemail@gmail.com>
 * @license GPL-2.0-or-later {@link https://youshou.wiki/wiki/H:GPLV2}
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/global.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/fails.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/descriptors.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/function-call.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/classof-raw.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/indexed-object.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it))
        throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/to-indexed-object.js"(exports, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/is-callable.js"(exports, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/get-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/engine-user-agent.js"(exports, module2) {
    "use strict";
    module2.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/engine-v8-version.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var userAgent = require_engine_user_agent();
    var process = global2.process;
    var Deno = global2.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version2;
    if (v8) {
      match = v8.split(".");
      version2 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version2 && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match)
          version2 = +match[1];
      }
    }
    module2.exports = version2;
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/is-symbol.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/try-to-string.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/a-callable.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument))
        return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/get-method.js"(exports, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)))
        return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/define-global-property.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/shared-store.js"(exports, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.37.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/shared.js"(exports, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/to-object.js"(exports, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/has-own-property.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/uid.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/to-primitive.js"(exports, module2) {
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
      if (!isObject(input) || isSymbol(input))
        return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0)
          pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result))
          return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0)
        pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/to-property-key.js"(exports, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/document-create-element.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
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
      if (IE8_DOM_DEFINE)
        try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
      if (hasOwn(O, P))
        return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/an-object.js"(exports, module2) {
    "use strict";
    var isObject = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument))
        return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/object-define-property.js"(exports) {
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
      if (IE8_DOM_DEFINE)
        try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw new $TypeError("Accessors not supported");
      if ("value" in Attributes)
        O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/function-name.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/inspect-source.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var WeakMap = global2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/shared-key.js"(exports, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/internal-state.js"(exports, module2) {
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
        if (store.has(it))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
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
        if (hasOwn(it, STATE))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/make-built-in.js"(exports, module2) {
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
      if (options && options.getter)
        name = "get " + name;
      if (options && options.setter)
        name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS)
          defineProperty(value, "name", { value: name, configurable: true });
        else
          value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", { value: options.arity });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS)
            defineProperty(value, "prototype", { writable: false });
        } else if (value.prototype)
          value.prototype = void 0;
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/define-built-in.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module2.exports = function(O, key, value, options) {
      if (!options)
        options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value))
        makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple)
          O[key] = value;
        else
          defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe)
            delete O[key];
          else if (O[key])
            simple = true;
        } catch (error) {
        }
        if (simple)
          O[key] = value;
        else
          definePropertyModule.f(O, key, {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/math-trunc.js"(exports, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/to-absolute-index.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/to-length.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/length-of-array-like.js"(exports, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/array-includes.js"(exports, module2) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0)
          return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el)
          while (length > index) {
            value = O[index++];
            if (value !== value)
              return true;
          }
        else
          for (; length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el)
              return IS_INCLUDES || index || 0;
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/object-keys-internal.js"(exports, module2) {
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
      for (key in O)
        !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i)
        if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key);
        }
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/enum-bug-keys.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/own-keys.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/is-forced.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/export.js"(exports, module2) {
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
      if (target)
        for (key in source) {
          sourceProperty = source[key];
          if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
          } else
            targetProperty = target[key];
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          if (!FORCED && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty)
              continue;
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-helpers.js
var require_set_helpers = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-helpers.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var SetPrototype = Set.prototype;
    module2.exports = {
      // eslint-disable-next-line es/no-set -- safe
      Set,
      add: uncurryThis(SetPrototype.add),
      has: uncurryThis(SetPrototype.has),
      remove: uncurryThis(SetPrototype["delete"]),
      proto: SetPrototype
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/a-set.js
var require_a_set = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/a-set.js"(exports, module2) {
    "use strict";
    var has = require_set_helpers().has;
    module2.exports = function(it) {
      has(it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/iterate-simple.js
var require_iterate_simple = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/iterate-simple.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    module2.exports = function(record, fn, ITERATOR_INSTEAD_OF_RECORD) {
      var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
      var next = record.next;
      var step, result;
      while (!(step = call(next, iterator)).done) {
        result = fn(step.value);
        if (result !== void 0)
          return result;
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-iterate.js
var require_set_iterate = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-iterate.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var iterateSimple = require_iterate_simple();
    var SetHelpers = require_set_helpers();
    var Set2 = SetHelpers.Set;
    var SetPrototype = SetHelpers.proto;
    var forEach = uncurryThis(SetPrototype.forEach);
    var keys = uncurryThis(SetPrototype.keys);
    var next = keys(new Set2()).next;
    module2.exports = function(set, fn, interruptible) {
      return interruptible ? iterateSimple({ iterator: keys(set), next }, fn) : forEach(set, fn);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-clone.js
var require_set_clone = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-clone.js"(exports, module2) {
    "use strict";
    var SetHelpers = require_set_helpers();
    var iterate = require_set_iterate();
    var Set2 = SetHelpers.Set;
    var add = SetHelpers.add;
    module2.exports = function(set) {
      var result = new Set2();
      iterate(set, function(it) {
        add(result, it);
      });
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/function-uncurry-this-accessor.js
var require_function_uncurry_this_accessor = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/function-uncurry-this-accessor.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var aCallable = require_a_callable();
    module2.exports = function(object, key, method) {
      try {
        return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
      } catch (error) {
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-size.js
var require_set_size = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-size.js"(exports, module2) {
    "use strict";
    var uncurryThisAccessor = require_function_uncurry_this_accessor();
    var SetHelpers = require_set_helpers();
    module2.exports = uncurryThisAccessor(SetHelpers.proto, "size", "get") || function(set) {
      return set.size;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/get-iterator-direct.js
var require_get_iterator_direct = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/get-iterator-direct.js"(exports, module2) {
    "use strict";
    module2.exports = function(obj) {
      return {
        iterator: obj,
        next: obj.next,
        done: false
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/get-set-record.js
var require_get_set_record = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/get-set-record.js"(exports, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var call = require_function_call();
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var getIteratorDirect = require_get_iterator_direct();
    var INVALID_SIZE = "Invalid size";
    var $RangeError = RangeError;
    var $TypeError = TypeError;
    var max = Math.max;
    var SetRecord = function(set, intSize) {
      this.set = set;
      this.size = max(intSize, 0);
      this.has = aCallable(set.has);
      this.keys = aCallable(set.keys);
    };
    SetRecord.prototype = {
      getIterator: function() {
        return getIteratorDirect(anObject(call(this.keys, this.set)));
      },
      includes: function(it) {
        return call(this.has, this.set, it);
      }
    };
    module2.exports = function(obj) {
      anObject(obj);
      var numSize = +obj.size;
      if (numSize !== numSize)
        throw new $TypeError(INVALID_SIZE);
      var intSize = toIntegerOrInfinity(numSize);
      if (intSize < 0)
        throw new $RangeError(INVALID_SIZE);
      return new SetRecord(obj, intSize);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-difference.js
var require_set_difference = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-difference.js"(exports, module2) {
    "use strict";
    var aSet = require_a_set();
    var SetHelpers = require_set_helpers();
    var clone = require_set_clone();
    var size = require_set_size();
    var getSetRecord = require_get_set_record();
    var iterateSet = require_set_iterate();
    var iterateSimple = require_iterate_simple();
    var has = SetHelpers.has;
    var remove = SetHelpers.remove;
    module2.exports = function difference(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      var result = clone(O);
      if (size(O) <= otherRec.size)
        iterateSet(O, function(e) {
          if (otherRec.includes(e))
            remove(result, e);
        });
      else
        iterateSimple(otherRec.getIterator(), function(e) {
          if (has(O, e))
            remove(result, e);
        });
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-method-accept-set-like.js
var require_set_method_accept_set_like = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-method-accept-set-like.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var createSetLike = function(size) {
      return {
        size,
        has: function() {
          return false;
        },
        keys: function() {
          return {
            next: function() {
              return { done: true };
            }
          };
        }
      };
    };
    module2.exports = function(name) {
      var Set2 = getBuiltIn("Set");
      try {
        new Set2()[name](createSetLike(0));
        try {
          new Set2()[name](createSetLike(-1));
          return false;
        } catch (error2) {
          return true;
        }
      } catch (error) {
        return false;
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/es.set.difference.v2.js
var require_es_set_difference_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/es.set.difference.v2.js"() {
    "use strict";
    var $2 = require_export();
    var difference = require_set_difference();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $2({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("difference") }, {
      difference
    });
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/esnext.set.difference.v2.js
var require_esnext_set_difference_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/esnext.set.difference.v2.js"() {
    "use strict";
    require_es_set_difference_v2();
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-intersection.js
var require_set_intersection = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-intersection.js"(exports, module2) {
    "use strict";
    var aSet = require_a_set();
    var SetHelpers = require_set_helpers();
    var size = require_set_size();
    var getSetRecord = require_get_set_record();
    var iterateSet = require_set_iterate();
    var iterateSimple = require_iterate_simple();
    var Set2 = SetHelpers.Set;
    var add = SetHelpers.add;
    var has = SetHelpers.has;
    module2.exports = function intersection(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      var result = new Set2();
      if (size(O) > otherRec.size) {
        iterateSimple(otherRec.getIterator(), function(e) {
          if (has(O, e))
            add(result, e);
        });
      } else {
        iterateSet(O, function(e) {
          if (otherRec.includes(e))
            add(result, e);
        });
      }
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/es.set.intersection.v2.js
var require_es_set_intersection_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/es.set.intersection.v2.js"() {
    "use strict";
    var $2 = require_export();
    var fails = require_fails();
    var intersection = require_set_intersection();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    var INCORRECT = !setMethodAcceptSetLike("intersection") || fails(function() {
      return String(Array.from((/* @__PURE__ */ new Set([1, 2, 3])).intersection(/* @__PURE__ */ new Set([3, 2])))) !== "3,2";
    });
    $2({ target: "Set", proto: true, real: true, forced: INCORRECT }, {
      intersection
    });
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/esnext.set.intersection.v2.js
var require_esnext_set_intersection_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/esnext.set.intersection.v2.js"() {
    "use strict";
    require_es_set_intersection_v2();
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/iterator-close.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var anObject = require_an_object();
    var getMethod = require_get_method();
    module2.exports = function(iterator, kind, value) {
      var innerResult, innerError;
      anObject(iterator);
      try {
        innerResult = getMethod(iterator, "return");
        if (!innerResult) {
          if (kind === "throw")
            throw value;
          return value;
        }
        innerResult = call(innerResult, iterator);
      } catch (error) {
        innerError = true;
        innerResult = error;
      }
      if (kind === "throw")
        throw value;
      if (innerError)
        throw innerResult;
      anObject(innerResult);
      return value;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-is-disjoint-from.js
var require_set_is_disjoint_from = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-is-disjoint-from.js"(exports, module2) {
    "use strict";
    var aSet = require_a_set();
    var has = require_set_helpers().has;
    var size = require_set_size();
    var getSetRecord = require_get_set_record();
    var iterateSet = require_set_iterate();
    var iterateSimple = require_iterate_simple();
    var iteratorClose = require_iterator_close();
    module2.exports = function isDisjointFrom(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      if (size(O) <= otherRec.size)
        return iterateSet(O, function(e) {
          if (otherRec.includes(e))
            return false;
        }, true) !== false;
      var iterator = otherRec.getIterator();
      return iterateSimple(iterator, function(e) {
        if (has(O, e))
          return iteratorClose(iterator, "normal", false);
      }) !== false;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/es.set.is-disjoint-from.v2.js
var require_es_set_is_disjoint_from_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/es.set.is-disjoint-from.v2.js"() {
    "use strict";
    var $2 = require_export();
    var isDisjointFrom = require_set_is_disjoint_from();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $2({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("isDisjointFrom") }, {
      isDisjointFrom
    });
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/esnext.set.is-disjoint-from.v2.js
var require_esnext_set_is_disjoint_from_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/esnext.set.is-disjoint-from.v2.js"() {
    "use strict";
    require_es_set_is_disjoint_from_v2();
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-is-subset-of.js
var require_set_is_subset_of = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-is-subset-of.js"(exports, module2) {
    "use strict";
    var aSet = require_a_set();
    var size = require_set_size();
    var iterate = require_set_iterate();
    var getSetRecord = require_get_set_record();
    module2.exports = function isSubsetOf(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      if (size(O) > otherRec.size)
        return false;
      return iterate(O, function(e) {
        if (!otherRec.includes(e))
          return false;
      }, true) !== false;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/es.set.is-subset-of.v2.js
var require_es_set_is_subset_of_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/es.set.is-subset-of.v2.js"() {
    "use strict";
    var $2 = require_export();
    var isSubsetOf = require_set_is_subset_of();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $2({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("isSubsetOf") }, {
      isSubsetOf
    });
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/esnext.set.is-subset-of.v2.js
var require_esnext_set_is_subset_of_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/esnext.set.is-subset-of.v2.js"() {
    "use strict";
    require_es_set_is_subset_of_v2();
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-is-superset-of.js
var require_set_is_superset_of = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-is-superset-of.js"(exports, module2) {
    "use strict";
    var aSet = require_a_set();
    var has = require_set_helpers().has;
    var size = require_set_size();
    var getSetRecord = require_get_set_record();
    var iterateSimple = require_iterate_simple();
    var iteratorClose = require_iterator_close();
    module2.exports = function isSupersetOf(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      if (size(O) < otherRec.size)
        return false;
      var iterator = otherRec.getIterator();
      return iterateSimple(iterator, function(e) {
        if (!has(O, e))
          return iteratorClose(iterator, "normal", false);
      }) !== false;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/es.set.is-superset-of.v2.js
var require_es_set_is_superset_of_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/es.set.is-superset-of.v2.js"() {
    "use strict";
    var $2 = require_export();
    var isSupersetOf = require_set_is_superset_of();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $2({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("isSupersetOf") }, {
      isSupersetOf
    });
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/esnext.set.is-superset-of.v2.js
var require_esnext_set_is_superset_of_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/esnext.set.is-superset-of.v2.js"() {
    "use strict";
    require_es_set_is_superset_of_v2();
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-symmetric-difference.js
var require_set_symmetric_difference = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-symmetric-difference.js"(exports, module2) {
    "use strict";
    var aSet = require_a_set();
    var SetHelpers = require_set_helpers();
    var clone = require_set_clone();
    var getSetRecord = require_get_set_record();
    var iterateSimple = require_iterate_simple();
    var add = SetHelpers.add;
    var has = SetHelpers.has;
    var remove = SetHelpers.remove;
    module2.exports = function symmetricDifference(other) {
      var O = aSet(this);
      var keysIter = getSetRecord(other).getIterator();
      var result = clone(O);
      iterateSimple(keysIter, function(e) {
        if (has(O, e))
          remove(result, e);
        else
          add(result, e);
      });
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/es.set.symmetric-difference.v2.js
var require_es_set_symmetric_difference_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/es.set.symmetric-difference.v2.js"() {
    "use strict";
    var $2 = require_export();
    var symmetricDifference = require_set_symmetric_difference();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $2({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("symmetricDifference") }, {
      symmetricDifference
    });
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/esnext.set.symmetric-difference.v2.js
var require_esnext_set_symmetric_difference_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/esnext.set.symmetric-difference.v2.js"() {
    "use strict";
    require_es_set_symmetric_difference_v2();
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-union.js
var require_set_union = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/set-union.js"(exports, module2) {
    "use strict";
    var aSet = require_a_set();
    var add = require_set_helpers().add;
    var clone = require_set_clone();
    var getSetRecord = require_get_set_record();
    var iterateSimple = require_iterate_simple();
    module2.exports = function union(other) {
      var O = aSet(this);
      var keysIter = getSetRecord(other).getIterator();
      var result = clone(O);
      iterateSimple(keysIter, function(it) {
        add(result, it);
      });
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/es.set.union.v2.js
var require_es_set_union_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/es.set.union.v2.js"() {
    "use strict";
    var $2 = require_export();
    var union = require_set_union();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $2({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("union") }, {
      union
    });
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/esnext.set.union.v2.js
var require_esnext_set_union_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/esnext.set.union.v2.js"() {
    "use strict";
    require_es_set_union_v2();
  }
});

// dist/Cat-a-lot/Cat-a-lot.js
require_esnext_set_difference_v2();
require_esnext_set_intersection_v2();
require_esnext_set_is_disjoint_from_v2();
require_esnext_set_is_subset_of_v2();
require_esnext_set_is_superset_of_v2();
require_esnext_set_symmetric_difference_v2();
require_esnext_set_union_v2();
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
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
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames2(from)), _step;
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
//! src/Cat-a-lot/options.json
var apiTag = "Cat-a-lot";
var targetNamespace = 14;
var version = "6.0";
//! src/Cat-a-lot/modules/constant.ts
var CLASS_NAME = "gadget-cat_a_lot";
var CLASS_NAME_CONTAINER = "".concat(CLASS_NAME, "-container");
var CLASS_NAME_CONTAINER_DATA = "".concat(CLASS_NAME_CONTAINER, "__data");
var CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST = "".concat(CLASS_NAME_CONTAINER_DATA, "__category-list");
var CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION = "".concat(CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST, "__action");
var CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_NO_FOUND = "".concat(CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST, "--no-found");
var CLASS_NAME_CONTAINER_DATA_MARK_COUNTER = "".concat(CLASS_NAME_CONTAINER_DATA, "__mark-counter");
var CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT = "".concat(CLASS_NAME_CONTAINER_DATA, "__search-input-container__input");
var CLASS_NAME_CONTAINER_DATA_SELECTIONS = "".concat(CLASS_NAME_CONTAINER_DATA, "__selections");
var CLASS_NAME_CONTAINER_DATA_SELECTIONS_ALL = "".concat(CLASS_NAME_CONTAINER_DATA_SELECTIONS, "__all");
var CLASS_NAME_CONTAINER_DATA_SELECTIONS_NONE = "".concat(CLASS_NAME_CONTAINER_DATA_SELECTIONS, "__none");
var CLASS_NAME_CONTAINER_HEAD = "".concat(CLASS_NAME_CONTAINER, "__head");
var CLASS_NAME_CONTAINER_HEAD_LINK = "".concat(CLASS_NAME_CONTAINER_HEAD, "__link");
var CLASS_NAME_CONTAINER_HEAD_LINK_ENABLED = "".concat(CLASS_NAME_CONTAINER_HEAD_LINK, "--enabled");
var CLASS_NAME_CURRENT_COUNTER = "".concat(CLASS_NAME, "-current_counter");
var CLASS_NAME_FEEDBACK = "".concat(CLASS_NAME, "-feedback");
var CLASS_NAME_FEEDBACK_DONE = "".concat(CLASS_NAME_FEEDBACK, "--done");
var CLASS_NAME_LABEL = "".concat(CLASS_NAME, "-label");
var CLASS_NAME_LABEL_DONE = "".concat(CLASS_NAME_LABEL, "--done");
var CLASS_NAME_LABEL_LAST_SELECTED = "".concat(CLASS_NAME_LABEL, "--last-selected");
var CLASS_NAME_LABEL_SELECTED = "".concat(CLASS_NAME_LABEL, "--selected");
var DEFAULT_SETTING = {
  docleanup: {
    default: false,
    label_i18n: "docleanuppref"
  },
  editpages: {
    default: true,
    label_i18n: "editpagespref"
  },
  minor: {
    default: false,
    label_i18n: "minorpref"
  },
  subcatcount: {
    default: 50,
    label_i18n: "subcatcountpref"
  },
  watchlist: {
    default: "preferences",
    label_i18n: "watchlistpref",
    select_i18n: {
      watch_nochange: "nochange",
      watch_pref: "preferences",
      watch_unwatch: "unwatch",
      watch_watch: "watch"
    }
  }
};
var VARIANTS = ["zh-hans", "zh-hant", "zh-cn", "zh-my", "zh-sg", "zh-hk", "zh-mo", "zh-tw"];
var WG_CANONICAL_SPECIAL_PAGE_NAME = mw.config.get("wgCanonicalSpecialPageName").toString();
var WG_FORMATTED_NAMESPACES = mw.config.get("wgFormattedNamespaces");
var WG_NAMESPACE_IDS = mw.config.get("wgNamespaceIds");
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var WG_SCRIPT = mw.config.get("wgScript");
var WG_TITLE = mw.config.get("wgTitle");
var WG_USER_LANGUAGE = mw.config.get("wgUserLanguage");
//! src/Cat-a-lot/modules/messages.ts
var DEFAULT_MESSAGES = {
  // as in 17 files selected
  "cat-a-lot-files-selected": "{{PLURAL:$1|One file|$1 files}} selected.",
  // Actions
  "cat-a-lot-copy": "Copy",
  "cat-a-lot-move": "Move",
  "cat-a-lot-add": "Add",
  "cat-a-lot-remove-from-cat": "Remove from this category",
  "cat-a-lot-enter-name": "Enter category name",
  "cat-a-lot-select": "Select",
  "cat-a-lot-all": "all",
  "cat-a-lot-none": "none",
  "cat-a-lot-none-selected": "No files selected!",
  // Preferences
  "cat-a-lot-watchlistpref": "Watchlist preference concerning files edited with Cat-A-Lot",
  "cat-a-lot-watch_pref": "According to your general preferences",
  "cat-a-lot-watch_nochange": "Do not change watchstatus",
  "cat-a-lot-watch_watch": "Watch pages edited with Cat-A-Lot",
  "cat-a-lot-watch_unwatch": "Remove pages while editing with Cat-A-Lot from your watchlist",
  "cat-a-lot-minorpref": "Mark edits as minor (if you generally mark your edits as minor, this won't change anything)",
  "cat-a-lot-editpagespref": "Allow categorising pages (including categories) that are not files",
  "cat-a-lot-docleanuppref": "Remove {{Check categories}} and other minor cleanup",
  "cat-a-lot-subcatcountpref": "Sub-categories to show at most",
  // Progress
  "cat-a-lot-loading": "Loading...",
  "cat-a-lot-editing": "Editing page",
  "cat-a-lot-of": "of ",
  "cat-a-lot-skipped-already": "The following {{PLURAL:$1|page was|$1 pages were}} skipped, because the page was already in the category:",
  "cat-a-lot-skipped-not-found": "The following {{PLURAL:$1|page was|$1 pages were}} skipped, because the old category could not be found:",
  "cat-a-lot-skipped-server": "The following {{PLURAL:$1|page|$1 pages}} couldn't be changed, since there were problems connecting to the server:",
  "cat-a-lot-all-done": "All pages are processed.",
  "cat-a-lot-done": "Done!",
  "cat-a-lot-added-cat": "Added category $1",
  "cat-a-lot-copied-cat": "Copied to category $1",
  "cat-a-lot-moved-cat": "Moved to category $1",
  "cat-a-lot-removed-cat": "Removed from category $1",
  "cat-a-lot-return-to-page": "Return to page",
  "cat-a-lot-cat-not-found": "Category not found.",
  // Summaries:
  "cat-a-lot-summary-add": "[[Help:Cat-a-lot|Cat-a-lot]]: Adding [[Category:$1]]",
  "cat-a-lot-summary-copy": "[[Help:Cat-a-lot|Cat-a-lot]]: Copying from [[Category:$1]] to [[Category:$2]]",
  "cat-a-lot-summary-move": "[[Help:Cat-a-lot|Cat-a-lot]]: Moving from [[Category:$1]] to [[Category:$2]]",
  "cat-a-lot-summary-remove": "[[Help:Cat-a-lot|Cat-a-lot]]: Removing from [[Category:$1]]"
};
var setMessages = () => {
  /*! Cat-a-lot messages | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
  if (WG_USER_LANGUAGE === "en") {
    return;
  }
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(WG_USER_LANGUAGE)) {
    mw.messages.set({
      // as in 17 files selected
      "cat-a-lot-files-selected": "$1個文件已選擇",
      // Actions
      "cat-a-lot-copy": "複製",
      "cat-a-lot-move": "移動",
      "cat-a-lot-add": "增加",
      "cat-a-lot-remove-from-cat": "從此分類移除",
      "cat-a-lot-enter-name": "輸入分類名稱",
      "cat-a-lot-select": "選擇",
      "cat-a-lot-all": "全部",
      "cat-a-lot-none": "無",
      "cat-a-lot-none-selected": "沒有選擇文件！",
      // Preferences
      "cat-a-lot-watchlistpref": "使用Cat-A-Lot編輯文件時的監視列表選項",
      "cat-a-lot-watch_pref": "與系統參數設置相同",
      "cat-a-lot-watch_nochange": "不要更改監視狀態",
      "cat-a-lot-watch_watch": "監視使用Cat-A-Lot編輯的頁面",
      "cat-a-lot-watch_unwatch": "將使用Cat-A-Lot編輯的頁面從監視列表移除",
      "cat-a-lot-minorpref": "將編輯標記爲小修改（若您在系統參數設置中已設置將所有編輯標記爲小修改，此選項不會對現有行爲進行改動）",
      "cat-a-lot-editpagespref": "允許對不是文件的頁面和子分類進行分類操作",
      "cat-a-lot-docleanuppref": "移除{{Check categories}}並進行其他細節清理",
      "cat-a-lot-subcatcountpref": "最多顯示的子分類數量",
      // Progress
      "cat-a-lot-loading": "正在加載……",
      "cat-a-lot-editing": "正在編輯頁面",
      "cat-a-lot-of": "，共有",
      "cat-a-lot-skipped-already": "以下頁面已跳過，因爲頁面已經在分類中：",
      "cat-a-lot-skipped-not-found": "以下頁面已跳過，因爲找不到現有分類：",
      "cat-a-lot-skipped-server": "以下頁面無法編輯，因爲連接服務器出錯：",
      "cat-a-lot-all-done": "全部頁面已處理。",
      "cat-a-lot-done": "已完成！",
      "cat-a-lot-added-cat": "已加入分類",
      "cat-a-lot-copied-cat": "已複製到分類",
      "cat-a-lot-moved-cat": "已移動到分類",
      "cat-a-lot-removed-cat": "已從分類移除",
      "cat-a-lot-return-to-page": "返回到頁面",
      "cat-a-lot-cat-not-found": "找不到分類。",
      // Summaries
      "cat-a-lot-summary-add": "[[Help:Cat-a-lot|Cat-a-lot]]：加入分類[[Category:$1]]",
      "cat-a-lot-summary-copy": "[[Help:Cat-a-lot|Cat-a-lot]]：分類間複製：從[[Category:$1]]到[[Category:$2]]",
      "cat-a-lot-summary-move": "[[Help:Cat-a-lot|Cat-a-lot]]：分類間移動：從[[Category:$1]]到[[Category:$2]]",
      "cat-a-lot-summary-remove": "[[Help:Cat-a-lot|Cat-a-lot]]：從分類移除：[[Category:$1]]"
    });
  } else {
    mw.messages.set({
      // as in 17 files selected
      "cat-a-lot-files-selected": "已选择$1个页面或文件",
      // Actions
      "cat-a-lot-copy": "复制",
      "cat-a-lot-move": "移动",
      "cat-a-lot-add": "增加",
      "cat-a-lot-remove-from-cat": "从此分类移除",
      "cat-a-lot-enter-name": "输入分类名称",
      "cat-a-lot-select": "选择",
      "cat-a-lot-all": "全部",
      "cat-a-lot-none": "无",
      "cat-a-lot-none-selected": "没有选择任何页面或文件！",
      // Preferences
      "cat-a-lot-watchlistpref": "使用Cat-a-lot编辑文件时的监视列表选项",
      "cat-a-lot-watch_pref": "与系统参数设置相同",
      "cat-a-lot-watch_nochange": "不要更改监视状态",
      "cat-a-lot-watch_watch": "监视使用Cat-a-lot编辑的页面",
      "cat-a-lot-watch_unwatch": "将使用Cat-a-lot编辑的页面从监视列表移除",
      "cat-a-lot-minorpref": "将编辑标记为小修改（若您在系统参数设置中已设置将所有编辑标记为小修改，此选项不会对现有行为进行改动）",
      "cat-a-lot-editpagespref": "允许对不是文件的页面和子分类进行分类操作",
      "cat-a-lot-docleanuppref": "移除{{Check categories}}并进行其他细节清理",
      "cat-a-lot-subcatcountpref": "最多显示的子分类数量",
      // Progress
      "cat-a-lot-loading": "正在加载……",
      "cat-a-lot-editing": "正在编辑页面",
      "cat-a-lot-of": "，共有",
      "cat-a-lot-skipped-already": "以下页面已跳过，因为页面已经在分类中：",
      "cat-a-lot-skipped-not-found": "以下页面已跳过，因为找不到现有分类：",
      "cat-a-lot-skipped-server": "以下页面无法编辑，因为连接服务器出错：",
      "cat-a-lot-all-done": "全部页面已处理。",
      "cat-a-lot-done": "已完成！",
      "cat-a-lot-added-cat": "已加入分类",
      "cat-a-lot-copied-cat": "已复制到分类",
      "cat-a-lot-moved-cat": "已移动到分类",
      "cat-a-lot-removed-cat": "已从分类移除",
      "cat-a-lot-return-to-page": "返回到页面",
      "cat-a-lot-cat-not-found": "找不到分类。",
      // Summaries
      "cat-a-lot-summary-add": "[[Help:Cat-a-lot|Cat-a-lot]]：加入分类[[Category:$1]]",
      "cat-a-lot-summary-copy": "[[Help:Cat-a-lot|Cat-a-lot]]：分类间复制：从[[Category:$1]]到[[Category:$2]]",
      "cat-a-lot-summary-move": "[[Help:Cat-a-lot|Cat-a-lot]]：分类间移动：从[[Category:$1]]到[[Category:$2]]",
      "cat-a-lot-summary-remove": "[[Help:Cat-a-lot|Cat-a-lot]]：从分类移除：[[Category:$1]]"
    });
  }
};
//! src/Cat-a-lot/modules/core.tsx
var import_ext_gadget = require("ext.gadget.Util");
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
var catALot = () => {
  /*! Cat-a-lot | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
  class CAL {
    static isSearchMode = false;
    static MESSAGES = DEFAULT_MESSAGES;
    static DEFAULT_SETTING = DEFAULT_SETTING;
    static VERSION = version;
    static API_TAG = apiTag;
    static TARGET_NAMESPACE = targetNamespace;
    static CURRENT_CATEGROY = WG_TITLE;
    static WG_FORMATTED_NAMESPACES = WG_FORMATTED_NAMESPACES;
    static WG_NAMESPACE_IDS = WG_NAMESPACE_IDS;
    static isAutoCompleteInit = false;
    static api = (0, import_ext_gadget.initMwApi)("Cat-a-lot/".concat(CAL.VERSION));
    static alreadyThere = [];
    static connectionError = [];
    static notFound = [];
    static counterCurrent = 0;
    static counterNeeded = 0;
    static counterCat = 0;
    static currentCategory = "";
    static dialogHeight = 450;
    static editToken = "";
    static localCatName = WG_FORMATTED_NAMESPACES[CAL.TARGET_NAMESPACE];
    static parentCats = [];
    static subCats = [];
    static settings = {};
    static variantCache = {};
    static $counter = $();
    static $progressDialog = $();
    static $labels = $();
    static $selectedLabels = $();
    $body;
    $container;
    $dataContainer;
    $markCounter;
    $resultList;
    $searchInput;
    $head;
    $link;
    constructor($body) {
      var _mw$util$getParamValu;
      if (!mw.msg("cat-a-lot-loading")) {
        mw.messages.set(CAL.MESSAGES);
      }
      this.$body = $body;
      CAL.initSettings();
      const container = /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
        className: [CLASS_NAME, CLASS_NAME_CONTAINER, "noprint"]
      }, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
        className: CLASS_NAME_CONTAINER_DATA
      }, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
        className: CLASS_NAME_CONTAINER_DATA_MARK_COUNTER
      }), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
        className: CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST
      }), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("input", {
        className: CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT,
        placeholder: CAL.msg("enter-name"),
        type: "text",
        value: CAL.isSearchMode ? (_mw$util$getParamValu = mw.util.getParamValue("search")) !== null && _mw$util$getParamValu !== void 0 ? _mw$util$getParamValu : "" : "",
        onKeyDown: (event) => {
          const $element = $(event.currentTarget);
          if (event.key === "Enter") {
            var _$element$val$trim, _$element$val;
            const cat = (_$element$val$trim = (_$element$val = $element.val()) === null || _$element$val === void 0 ? void 0 : _$element$val.trim()) !== null && _$element$val$trim !== void 0 ? _$element$val$trim : "";
            if (cat) {
              this.updateCats(cat);
            }
          }
        }
      })), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
        className: CLASS_NAME_CONTAINER_DATA_SELECTIONS
      }, [CAL.msg("select"), " "], /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
        className: CLASS_NAME_CONTAINER_DATA_SELECTIONS_ALL,
        onClick: () => {
          this.toggleAll(true);
        }
      }, CAL.msg("all")), " • ", /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
        className: CLASS_NAME_CONTAINER_DATA_SELECTIONS_NONE,
        onClick: () => {
          this.toggleAll(false);
        }
      }, CAL.msg("none")))), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
        className: CLASS_NAME_CONTAINER_HEAD
      }, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
        className: CLASS_NAME_CONTAINER_HEAD_LINK
      }, "Cat-a-lot")));
      this.$container = $(container);
      this.$container.appendTo(this.$body);
      this.$dataContainer = this.$container.find(".".concat(CLASS_NAME_CONTAINER_DATA));
      this.$markCounter = this.$dataContainer.find(".".concat(CLASS_NAME_CONTAINER_DATA_MARK_COUNTER));
      this.$resultList = this.$dataContainer.find(".".concat(CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST));
      this.$searchInput = this.$dataContainer.find(".".concat(CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT));
      this.$head = this.$container.find(".".concat(CLASS_NAME_CONTAINER_HEAD));
      this.$link = this.$head.find(".".concat(CLASS_NAME_CONTAINER_HEAD_LINK));
    }
    buildElements() {
      const regexCat = new RegExp("^\\s*".concat(CAL.localizedRegex(CAL.TARGET_NAMESPACE, "Category"), ":"), "");
      this.$searchInput.on("input keyup", (event) => {
        const currentTarget = event.currentTarget;
        const oldVal = currentTarget.value;
        const newVal = oldVal.replace(regexCat, "");
        if (newVal !== oldVal) {
          currentTarget.value = newVal;
        }
      });
      const initAutocomplete = () => {
        if (CAL.isAutoCompleteInit) {
          return;
        }
        CAL.isAutoCompleteInit = true;
        this.$searchInput.autocomplete({
          source: (request, response) => {
            this.doAPICall({
              action: "opensearch",
              namespace: CAL.TARGET_NAMESPACE,
              redirects: "resolve",
              search: request.term
            }, (result) => {
              if (result[1]) {
                response($(result[1]).map((_index, item) => item.replace(regexCat, "")));
              }
            });
          },
          position: {
            my: "right bottom",
            at: "right top",
            of: this.$searchInput
          },
          appendTo: ".".concat(CLASS_NAME_CONTAINER)
        });
      };
      this.$link.on("click", (event) => {
        $(event.currentTarget).toggleClass(CLASS_NAME_CONTAINER_HEAD_LINK_ENABLED);
        initAutocomplete();
        this.run();
      });
    }
    static initSettings() {
      var _window$CatALotPrefs;
      let catALotPrefs = (_window$CatALotPrefs = window.CatALotPrefs) !== null && _window$CatALotPrefs !== void 0 ? _window$CatALotPrefs : {};
      const typeOfCatALotPrefs = typeof catALotPrefs;
      if (typeOfCatALotPrefs === "object" && !Array.isArray(catALotPrefs) || typeOfCatALotPrefs !== "object") {
        catALotPrefs = {};
      }
      for (var _i = 0, _Object$keys = Object.keys(CAL.DEFAULT_SETTING); _i < _Object$keys.length; _i++) {
        var _catALotPrefs$setting;
        const settingKey = _Object$keys[_i];
        const setting = CAL.DEFAULT_SETTING[settingKey];
        CAL.settings[settingKey] = (_catALotPrefs$setting = catALotPrefs[settingKey]) !== null && _catALotPrefs$setting !== void 0 ? _catALotPrefs$setting : setting.default;
        if (!setting.select_i18n) {
          continue;
        }
        setting.select = {};
        for (var _i2 = 0, _Object$keys2 = Object.keys(setting.select_i18n); _i2 < _Object$keys2.length; _i2++) {
          const messageKey = _Object$keys2[_i2];
          const message = setting.select_i18n[messageKey];
          setting.select[CAL.msg(messageKey)] = message;
        }
      }
    }
    static msg(key, ...args) {
      const fullKey = "cat-a-lot-".concat(key);
      return args.length ? mw.message(fullKey, ...args).parse() : mw.message(fullKey).plain();
    }
    static localizedRegex(namespaceNumber, fallback) {
      var _CAL$WG_FORMATTED_NAM;
      const wikiTextBlank = "[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+";
      const wikiTextBlankRE = new RegExp(wikiTextBlank, "g");
      const createRegexStr = (name) => {
        if (!(name !== null && name !== void 0 && name.length)) {
          return "";
        }
        let regexName = "";
        for (let i = 0; i < name.length; i++) {
          const initial = name.slice(i, i + 1);
          const ll = initial.toLowerCase();
          const ul = initial.toUpperCase();
          regexName += ll === ul ? initial : "[".concat(ll).concat(ul, "]");
        }
        return regexName.replace(/([$()*+.?\\^])/g, "\\$1").replace(wikiTextBlankRE, wikiTextBlank);
      };
      fallback = fallback.toLowerCase();
      const canonical = (_CAL$WG_FORMATTED_NAM = CAL.WG_FORMATTED_NAMESPACES[namespaceNumber]) === null || _CAL$WG_FORMATTED_NAM === void 0 ? void 0 : _CAL$WG_FORMATTED_NAM.toLowerCase();
      let regexString = createRegexStr(canonical);
      if (fallback && canonical !== fallback) {
        regexString += "|".concat(createRegexStr(fallback));
      }
      for (var _i3 = 0, _Object$keys3 = Object.keys(CAL.WG_NAMESPACE_IDS); _i3 < _Object$keys3.length; _i3++) {
        const catName = _Object$keys3[_i3];
        if (catName.toLowerCase() !== canonical && catName.toLowerCase() !== fallback && CAL.WG_NAMESPACE_IDS[catName] === namespaceNumber) {
          regexString += "|".concat(createRegexStr(catName));
        }
      }
      return "(?:".concat(regexString, ")");
    }
    updateSelectionCounter() {
      CAL.$selectedLabels = CAL.$labels.filter(".".concat(CLASS_NAME_LABEL_SELECTED));
      this.$markCounter.show().html(CAL.msg("files-selected", CAL.$selectedLabels.length.toString()));
    }
    toggleAll(select) {
      CAL.$labels.toggleClass(CLASS_NAME_LABEL_SELECTED, select);
      this.updateSelectionCounter();
    }
    static findAllVariants(category) {
      return _asyncToGenerator(function* () {
        if (CAL.variantCache[category] !== void 0) {
          return CAL.variantCache[category];
        }
        const results = [];
        const params = {
          action: "parse",
          format: "json",
          formatversion: "2",
          text: category,
          title: "temp"
        };
        for (var _i4 = 0, _VARIANTS = VARIANTS; _i4 < _VARIANTS.length; _i4++) {
          const variant = _VARIANTS[_i4];
          const {
            parse
          } = yield CAL.api.post({
            ...params,
            variant
          });
          const {
            text
          } = parse;
          results[results.length] = $(text).eq(0).text().trim();
        }
        CAL.variantCache[category] = [...new Set(results)];
        return results;
      })();
    }
    static regexBuilder(category) {
      return _asyncToGenerator(function* () {
        const catName = CAL.localizedRegex(CAL.TARGET_NAMESPACE, "Category");
        category = category.replace(/^[\s_]+/, "").replace(/[\s_]+$/, "");
        const variants = yield CAL.findAllVariants(category);
        const variantRegExps = [];
        var _iterator2 = _createForOfIteratorHelper(variants), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            let variant = _step2.value;
            variant = mw.util.escapeRegExp(variant);
            variant = variant.replace(/[\s_]+/g, "[\\s_]+");
            const first = variant.slice(0, 1);
            if (first.toUpperCase() !== first.toLowerCase()) {
              variant = "[".concat(first.toUpperCase()).concat(first.toLowerCase(), "]").concat(variant.slice(1));
            }
            variantRegExps[variantRegExps.length] = variant;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return new RegExp("\\[\\[[\\s_]*".concat(catName, "[\\s_]*:[\\s_]*(?:").concat(variantRegExps.join("|"), ")[\\s_]*(\\|[^\\]]*(?:\\][^\\]]+)*)?\\]\\]"), "g");
      })();
    }
    doAPICall(params, callback) {
      params["format"] = "json";
      params["formatversion"] = "2";
      let i = 0;
      const doCall = () => {
        const handleError = (error) => {
          mw.log.error("[Cat-a-lot] Ajax error:", error);
          if (i < 4) {
            setTimeout(doCall, 300);
            i++;
          } else if (params["title"]) {
            CAL.connectionError[CAL.connectionError.length] = params["title"];
            this.updateCounter();
          }
        };
        CAL.api.post(params).then(callback).catch(handleError);
      };
      doCall();
    }
    static markAsDone($markedLabel, targetCategory, mode) {
      $markedLabel.addClass(CLASS_NAME_LABEL_DONE);
      switch (mode) {
        case "add":
          $markedLabel.append(/* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), CAL.msg("added-cat", targetCategory)));
          break;
        case "copy":
          $markedLabel.append(/* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), CAL.msg("copied-cat", targetCategory)));
          break;
        case "move":
          $markedLabel.append(/* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), CAL.msg("moved-cat", targetCategory)));
          break;
        case "remove":
          $markedLabel.append(/* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), CAL.msg("removed-cat", targetCategory)));
          break;
      }
    }
    static doCleanup(text) {
      return CAL.settings.docleanup ? text.replace(/{{\s*[Cc]heck categories\s*(\|?.*?)}}/, "") : text;
    }
    // Remove {{Uncategorized}} (also with comment). No need to replace it with anything
    static removeUncat(text) {
      return text.replace(/\{\{\s*[Uu]ncategorized\s*(\|?.*?)\}\}/, "");
    }
    displayResult() {
      this.$body.css({
        cursor: "",
        overflow: ""
      });
      this.$body.find(".".concat(CLASS_NAME_FEEDBACK)).addClass(CLASS_NAME_FEEDBACK_DONE);
      const $parent = CAL.$counter.parent();
      $parent.html(/* @__PURE__ */ import_ext_gadget2.default.createElement("h3", null, CAL.msg("done")));
      $parent.append(/* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, CAL.msg("all-done"), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null)));
      $parent.append(/* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
        onClick: () => {
          CAL.$progressDialog.remove();
          this.toggleAll(false);
        }
      }, CAL.msg("return-to-page")));
      if (CAL.alreadyThere.length) {
        $parent.append(/* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("h5", null, CAL.msg("skipped-already", CAL.alreadyThere.length.toString())), CAL.alreadyThere.reduce((pre, cur, index) => index < CAL.alreadyThere.length - 1 ? [...pre, cur, /* @__PURE__ */ import_ext_gadget2.default.createElement("br", {
          key: index
        })] : [...pre, cur], [])));
      }
      if (CAL.notFound.length) {
        $parent.append(/* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("h5", null, CAL.msg("skipped-not-found", CAL.notFound.length.toString())), CAL.notFound.reduce((pre, cur, index) => index < CAL.notFound.length - 1 ? [...pre, cur, /* @__PURE__ */ import_ext_gadget2.default.createElement("br", {
          key: index
        })] : [...pre, cur], [])));
      }
      if (CAL.connectionError.length) {
        $parent.append(/* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("h5", null, CAL.msg("skipped-server", CAL.connectionError.length.toString())), CAL.connectionError.reduce((pre, cur, index) => index < CAL.connectionError.length - 1 ? [...pre, cur, /* @__PURE__ */ import_ext_gadget2.default.createElement("br", {
          key: index
        })] : [...pre, cur], [])));
      }
    }
    updateCounter() {
      CAL.counterCurrent++;
      if (CAL.counterCurrent > CAL.counterNeeded) {
        this.displayResult();
      } else {
        CAL.$counter.text(CAL.counterCurrent);
      }
    }
    editCategories(result, markedLabel, targetCategory, mode) {
      var _this = this;
      return _asyncToGenerator(function* () {
        const [markedLabelTitle, $markedLabel] = markedLabel;
        if (!(result !== null && result !== void 0 && result["query"])) {
          CAL.connectionError[CAL.connectionError.length] = markedLabelTitle;
          _this.updateCounter();
          return;
        }
        let originText = "";
        let starttimestamp = 0;
        let timestamp = 0;
        CAL.editToken = result["query"].tokens.csrftoken;
        const {
          pages
        } = result["query"];
        const [page] = pages;
        originText = page.revisions[0].content;
        ({
          starttimestamp
        } = page);
        [{
          timestamp
        }] = page.revisions;
        const sourcecat = CAL.CURRENT_CATEGROY;
        const targeRegExp = yield CAL.regexBuilder(targetCategory);
        if (mode !== "remove" && targeRegExp.test(originText) && mode !== "move") {
          CAL.alreadyThere[CAL.alreadyThere.length] = markedLabelTitle;
          _this.updateCounter();
          return;
        }
        let text = originText;
        let summary;
        const sourceCatRegExp = yield CAL.regexBuilder(sourcecat);
        switch (mode) {
          case "add":
            text += "\n[[".concat(CAL.localCatName, ":").concat(targetCategory, "]]\n");
            summary = CAL.msg("summary-add").replace("$1", targetCategory);
            break;
          case "copy":
            text = text.replace(sourceCatRegExp, "[[".concat(CAL.localCatName, ":").concat(sourcecat, "$1]]\n[[").concat(CAL.localCatName, ":").concat(targetCategory, "$1]]"));
            summary = CAL.msg("summary-copy").replace("$1", sourcecat).replace("$2", targetCategory);
            if (originText === text) {
              text += "\n[[".concat(CAL.localCatName, ":").concat(targetCategory, "]]");
            }
            break;
          case "move":
            text = text.replace(sourceCatRegExp, "[[".concat(CAL.localCatName, ":").concat(targetCategory, "$1]]"));
            summary = CAL.msg("summary-move").replace("$1", sourcecat).replace("$2", targetCategory);
            break;
          case "remove":
            text = text.replace(sourceCatRegExp, "");
            summary = CAL.msg("summary-remove").replace("$1", sourcecat);
            break;
        }
        if (text === originText) {
          CAL.notFound[CAL.notFound.length] = markedLabelTitle;
          _this.updateCounter();
          return;
        }
        if (mode !== "remove") {
          text = CAL.doCleanup(CAL.removeUncat(text));
        }
        _this.doAPICall({
          action: "edit",
          token: CAL.editToken,
          tags: CAL.API_TAG,
          title: markedLabelTitle,
          assert: "user",
          bot: true,
          basetimestamp: timestamp,
          watchlist: CAL.settings.watchlist,
          text,
          summary,
          starttimestamp
        }, () => {
          _this.updateCounter();
        });
        CAL.markAsDone($markedLabel, targetCategory, mode);
      })();
    }
    getContent(markedLabel, targetCategory, mode) {
      this.doAPICall({
        action: "query",
        meta: "tokens",
        titles: markedLabel[0],
        prop: "revisions",
        rvprop: "content|timestamp"
      }, (result) => {
        void this.editCategories(result, markedLabel, targetCategory, mode);
      });
    }
    static getTitleFromLink(href) {
      try {
        var _decodeURIComponent$m, _decodeURIComponent$m2;
        return ((_decodeURIComponent$m = (_decodeURIComponent$m2 = decodeURIComponent(href !== null && href !== void 0 ? href : "").match(/wiki\/(.+?)(?:#.+)?$/)) === null || _decodeURIComponent$m2 === void 0 ? void 0 : _decodeURIComponent$m2[1]) !== null && _decodeURIComponent$m !== void 0 ? _decodeURIComponent$m : "").replace(/_/g, " ");
      } catch {
        return "";
      }
    }
    getMarkedLabels() {
      const markedLabels = [];
      CAL.$selectedLabels = CAL.$labels.filter(".".concat(CLASS_NAME_LABEL_SELECTED));
      CAL.$selectedLabels.each((_index, label) => {
        const $label = $(label);
        const $labelLink = $label.find("a[title]");
        const title = $labelLink.attr("title") || CAL.getTitleFromLink($labelLink.attr("href")) || CAL.getTitleFromLink($label.find("a").attr("href"));
        markedLabels[markedLabels.length] = [title, $label];
      });
      return markedLabels;
    }
    showProgress() {
      this.$body.css({
        cursor: "wait",
        overflow: "hidden"
      });
      CAL.$progressDialog = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", null, CAL.msg("editing"), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
        className: CLASS_NAME_CURRENT_COUNTER
      }, CAL.counterCurrent), [CAL.msg("of"), CAL.counterNeeded])).dialog({
        dialogClass: CLASS_NAME_FEEDBACK,
        minHeight: 90,
        height: 90,
        width: 450,
        modal: true,
        closeOnEscape: false,
        draggable: false,
        resizable: false
      });
      this.$body.find(".".concat(CLASS_NAME_FEEDBACK, " .ui-dialog-titlebar")).hide();
      this.$body.find(".".concat(CLASS_NAME_FEEDBACK, " .ui-dialog-content")).height("auto");
      CAL.$counter = this.$body.find(".".concat(CLASS_NAME_CURRENT_COUNTER));
    }
    doSomething(targetCategory, mode) {
      const markedLabels = this.getMarkedLabels();
      if (!markedLabels.length) {
        void mw.notify(CAL.msg("none-selected"), {
          tag: "catALot"
        });
        return;
      }
      CAL.alreadyThere = [];
      CAL.connectionError = [];
      CAL.notFound = [];
      CAL.counterCurrent = 1;
      CAL.counterNeeded = markedLabels.length;
      this.showProgress();
      var _iterator3 = _createForOfIteratorHelper(markedLabels), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const markedLabel = _step3.value;
          this.getContent(markedLabel, targetCategory, mode);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    addHere(targetCategory) {
      this.doSomething(targetCategory, "add");
    }
    copyHere(targetCategory) {
      this.doSomething(targetCategory, "copy");
    }
    moveHere(targetCategory) {
      this.doSomething(targetCategory, "move");
    }
    createCatLinks(symbol, categories) {
      categories.sort();
      var _iterator4 = _createForOfIteratorHelper(categories), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          const category = _step4.value;
          const $tr = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("tr", {
            dataset: {
              category
            }
          }, /* @__PURE__ */ import_ext_gadget2.default.createElement("td", null, symbol), /* @__PURE__ */ import_ext_gadget2.default.createElement("td", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
            onClick: (event) => {
              const $element = $(event.currentTarget);
              this.updateCats($element.closest("tr").data("category"));
            }
          }, category))));
          if (category !== CAL.CURRENT_CATEGROY && CAL.isSearchMode) {
            $tr.append(/* @__PURE__ */ import_ext_gadget2.default.createElement("td", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
              className: CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION,
              onClick: (event) => {
                const $element = $(event.currentTarget);
                this.addHere($element.closest("tr").data("category"));
              }
            }, CAL.msg("add"))));
          } else if (category !== CAL.CURRENT_CATEGROY && !CAL.isSearchMode) {
            $tr.append(/* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("td", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
              className: CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION,
              onClick: (event) => {
                const $element = $(event.currentTarget);
                this.copyHere($element.closest("tr").data("category"));
              }
            }, CAL.msg("copy"))), /* @__PURE__ */ import_ext_gadget2.default.createElement("td", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
              className: CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION,
              onClick: (event) => {
                const $element = $(event.currentTarget);
                this.moveHere($element.closest("tr").data("category"));
              }
            }, CAL.msg("move")))));
          }
          this.$resultList.find("table").append($tr);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    showCategoryList() {
      var _this$$container$widt, _$$width;
      this.$body.css("cursor", "");
      const currentCategories = [CAL.currentCategory];
      this.$resultList.empty();
      this.$resultList.append(/* @__PURE__ */ import_ext_gadget2.default.createElement("table", null));
      this.createCatLinks("↑", CAL.parentCats);
      this.createCatLinks("→", currentCategories);
      this.createCatLinks("↓", CAL.subCats);
      this.$container.width("");
      this.$container.height("");
      this.$container.width(Math.min(((_this$$container$widt = this.$container.width()) !== null && _this$$container$widt !== void 0 ? _this$$container$widt : 0) * 1.1 + 15, ((_$$width = $(window).width()) !== null && _$$width !== void 0 ? _$$width : 0) - 10));
      this.$resultList.css({
        "max-height": "".concat(CAL.dialogHeight, "px"),
        height: ""
      });
    }
    getParentCats() {
      this.doAPICall({
        action: "query",
        titles: "Category:".concat(CAL.currentCategory),
        prop: "categories"
      }, (result) => {
        var _pages$;
        if (!result) {
          return;
        }
        CAL.parentCats = [];
        const {
          pages
        } = result.query;
        if ((_pages$ = pages[0]) !== null && _pages$ !== void 0 && _pages$.missing) {
          this.$body.css("cursor", "");
          this.$resultList.html(/* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
            className: CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_NO_FOUND
          }, CAL.msg("cat-not-found")));
          this.createCatLinks("→", [CAL.currentCategory]);
          return;
        }
        let categories = [];
        [{
          categories
        }] = pages;
        var _iterator5 = _createForOfIteratorHelper(categories), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            const cat = _step5.value;
            CAL.parentCats[CAL.parentCats.length] = cat.title.replace(/^[^:]+:/, "");
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        CAL.counterCat++;
        if (CAL.counterCat === 2) {
          this.showCategoryList();
        }
      });
    }
    getSubCats() {
      this.doAPICall({
        action: "query",
        list: "categorymembers",
        cmtype: "subcat",
        cmlimit: CAL.settings.subcatcount,
        cmtitle: "Category:".concat(CAL.currentCategory)
      }, (result) => {
        var _result$query;
        const cats = (result === null || result === void 0 || (_result$query = result.query) === null || _result$query === void 0 ? void 0 : _result$query.categorymembers) || [];
        CAL.subCats = [];
        var _iterator6 = _createForOfIteratorHelper(cats), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            const cat = _step6.value;
            CAL.subCats[CAL.subCats.length] = cat.title.replace(/^[^:]+:/, "");
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        CAL.counterCat++;
        if (CAL.counterCat === 2) {
          this.showCategoryList();
        }
      });
    }
    getCategoryList() {
      CAL.counterCat = 0;
      this.getParentCats();
      this.getSubCats();
    }
    updateCats(cat) {
      this.$body.css("cursor", "wait");
      CAL.currentCategory = cat;
      this.$resultList.html(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", null, CAL.msg("loading")));
      this.getCategoryList();
    }
    findAllLabels() {
      if (CAL.isSearchMode) {
        CAL.$labels = this.$body.find("table.searchResultImage").find("tr>td").eq(1);
        if (CAL.settings.editpages) {
          CAL.$labels = CAL.$labels.add("div.mw-search-result-heading");
        }
      } else {
        CAL.$labels = this.$body.find("div.gallerytext").add(this.$body.find("div#mw-category-media").find('li[class!="gallerybox"]'));
        if (CAL.settings.editpages) {
          const $pages = this.$body.find("div#mw-pages, div#mw-subcategories").find("li");
          CAL.$labels = CAL.$labels.add($pages);
        }
      }
    }
    makeClickable() {
      this.findAllLabels();
      CAL.$labels.addClass(CLASS_NAME_LABEL).onCatALotShiftClick(() => {
        this.updateSelectionCounter();
      });
    }
    run() {
      if (this.$link.hasClass(CLASS_NAME_CONTAINER_HEAD_LINK_ENABLED)) {
        this.makeClickable();
        this.$dataContainer.show();
        this.$container.resizable({
          alsoResize: this.$resultList,
          handles: "n",
          resize: (event) => {
            var _$currentTarget$heigh;
            const $currentTarget = $(event.currentTarget);
            $currentTarget.css({
              left: "",
              top: ""
            });
            CAL.dialogHeight = (_$currentTarget$heigh = $currentTarget.height()) !== null && _$currentTarget$heigh !== void 0 ? _$currentTarget$heigh : CAL.dialogHeight;
            this.$resultList.css({
              maxHeight: "",
              width: ""
            });
          }
        });
        this.$resultList.css("max-height", "450px");
        if (CAL.isSearchMode) {
          this.updateCats("Pictures and images");
        } else {
          this.updateCats(CAL.CURRENT_CATEGROY);
        }
      } else {
        this.$dataContainer.hide();
        this.$container.resizable("destroy");
        this.$container.css("width", "");
        CAL.$labels.off("click.catALot");
      }
    }
  }
  if (WG_NAMESPACE_NUMBER === -1 && WG_CANONICAL_SPECIAL_PAGE_NAME === "Search" || WG_NAMESPACE_NUMBER === targetNamespace) {
    if (WG_NAMESPACE_NUMBER === -1) {
      CAL.isSearchMode = true;
    }
    /*! Cat-a-lot messages | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
    setMessages();
    void (0, import_ext_gadget.getBody)().then(($body) => {
      new CAL($body).buildElements();
    });
  }
};
//! src/Cat-a-lot/modules/extendJQueryPrototype.ts
var extendJQueryPrototype = () => {
  /*! jQuery checkboxShiftClick | GPL-2.0 <https://qwbk.cc/H:GPL> */
  $.fn.onCatALotShiftClick = function(callback) {
    let prevCheckbox;
    this.on("click.catALot", (event) => {
      if (!event.ctrlKey) {
        event.preventDefault();
      }
      this.parents("body").find(".".concat(CLASS_NAME_LABEL_LAST_SELECTED)).removeClass(CLASS_NAME_LABEL_LAST_SELECTED);
      let $thisControl = $(event.target);
      if (!$thisControl.hasClass(CLASS_NAME_LABEL)) {
        $thisControl = $thisControl.parents(".".concat(CLASS_NAME_LABEL));
      }
      $thisControl.addClass(CLASS_NAME_LABEL_LAST_SELECTED).toggleClass(CLASS_NAME_LABEL_SELECTED);
      if (prevCheckbox && event.shiftKey) {
        const method = $thisControl.hasClass(CLASS_NAME_LABEL_SELECTED) ? "addClass" : "removeClass";
        this.slice(Math.min(this.index(prevCheckbox), this.index($thisControl)), Math.max(this.index(prevCheckbox), this.index($thisControl)) + 1)[method](CLASS_NAME_LABEL_SELECTED);
      }
      prevCheckbox = $thisControl;
      if (typeof callback === "function") {
        callback();
      }
    });
    return this;
  };
};
//! src/Cat-a-lot/Cat-a-lot.ts
/*! jQuery checkboxShiftClick | GPL-2.0 <https://qwbk.cc/H:GPL> */
extendJQueryPrototype();
/*! Cat-a-lot | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
catALot();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWhlbHBlcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLXNldC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdGUtc2ltcGxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWl0ZXJhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtY2xvbmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtYWNjZXNzb3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtc2l6ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtc2V0LXJlY29yZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1kaWZmZXJlbmNlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LW1ldGhvZC1hY2NlcHQtc2V0LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc2V0LmRpZmZlcmVuY2UudjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXNuZXh0LnNldC5kaWZmZXJlbmNlLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWludGVyc2VjdGlvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zZXQuaW50ZXJzZWN0aW9uLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5zZXQuaW50ZXJzZWN0aW9uLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtaXMtZGlzam9pbnQtZnJvbS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zZXQuaXMtZGlzam9pbnQtZnJvbS52Mi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lc25leHQuc2V0LmlzLWRpc2pvaW50LWZyb20udjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtaXMtc3Vic2V0LW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnNldC5pcy1zdWJzZXQtb2YudjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXNuZXh0LnNldC5pcy1zdWJzZXQtb2YudjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtaXMtc3VwZXJzZXQtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc2V0LmlzLXN1cGVyc2V0LW9mLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5zZXQuaXMtc3VwZXJzZXQtb2YudjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtc3ltbWV0cmljLWRpZmZlcmVuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc2V0LnN5bW1ldHJpYy1kaWZmZXJlbmNlLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5zZXQuc3ltbWV0cmljLWRpZmZlcmVuY2UudjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtdW5pb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc2V0LnVuaW9uLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5zZXQudW5pb24udjIuanMiLCAic3JjL0NhdC1hLWxvdC9vcHRpb25zLmpzb24iLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9DYXQtYS1sb3QvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvY29yZS50c3giLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2V4dGVuZEpRdWVyeVByb3RvdHlwZS50cyIsICJzcmMvQ2F0LWEtbG90L0NhdC1hLWxvdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgY2hlY2sodHlwZW9mIHRoaXMgPT0gJ29iamVjdCcgJiYgdGhpcykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG4gIHZhciB0ZXN0ID0gKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSkuYmluZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xudmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICEkT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT09ICdTdHJpbmcnID8gc3BsaXQoaXQsICcnKSA6ICRPYmplY3QoaXQpO1xufSA6ICRPYmplY3Q7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gd2UgY2FuJ3QgdXNlIGp1c3QgYGl0ID09IG51bGxgIHNpbmNlIG9mIGBkb2N1bWVudC5hbGxgIHNwZWNpYWwgY2FzZVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdC1hZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gbnVsbCB8fCBpdCA9PT0gdW5kZWZpbmVkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3RcbnZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cbi8vIGBJc0NhbGxhYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdHlwZW9mLXVuZGVmaW5lZCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgZG9jdW1lbnRBbGwgPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRBbGwgIT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbicgfHwgYXJndW1lbnQgPT09IGRvY3VtZW50QWxsO1xufSA6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbic7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxbbmFtZXNwYWNlXSkgOiBnbG9iYWxbbmFtZXNwYWNlXSAmJiBnbG9iYWxbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgbmF2aWdhdG9yICE9ICd1bmRlZmluZWQnICYmIFN0cmluZyhuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAnJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWwuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgJiYgIVN5bWJvbC5zaGFtXG4gICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbCwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXNbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxuKHN0b3JlLnZlcnNpb25zIHx8IChzdG9yZS52ZXJzaW9ucyA9IFtdKSkucHVzaCh7XG4gIHZlcnNpb246ICczLjM3LjAnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTQtMjAyNCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KScsXG4gIGxpY2Vuc2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9ibG9iL3YzLjM3LjAvTElDRU5TRScsXG4gIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzJ1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgfHwge30pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdICYmIGdsb2JhbFtUQVJHRVRdLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLmRvbnRDYWxsR2V0U2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1zZXQgLS0gc2FmZVxudmFyIFNldFByb3RvdHlwZSA9IFNldC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tc2V0IC0tIHNhZmVcbiAgU2V0OiBTZXQsXG4gIGFkZDogdW5jdXJyeVRoaXMoU2V0UHJvdG90eXBlLmFkZCksXG4gIGhhczogdW5jdXJyeVRoaXMoU2V0UHJvdG90eXBlLmhhcyksXG4gIHJlbW92ZTogdW5jdXJyeVRoaXMoU2V0UHJvdG90eXBlWydkZWxldGUnXSksXG4gIHByb3RvOiBTZXRQcm90b3R5cGVcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaGVscGVycycpLmhhcztcblxuLy8gUGVyZm9ybSA/IFJlcXVpcmVJbnRlcm5hbFNsb3QoTSwgW1tTZXREYXRhXV0pXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBoYXMoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocmVjb3JkLCBmbiwgSVRFUkFUT1JfSU5TVEVBRF9PRl9SRUNPUkQpIHtcbiAgdmFyIGl0ZXJhdG9yID0gSVRFUkFUT1JfSU5TVEVBRF9PRl9SRUNPUkQgPyByZWNvcmQgOiByZWNvcmQuaXRlcmF0b3I7XG4gIHZhciBuZXh0ID0gcmVjb3JkLm5leHQ7XG4gIHZhciBzdGVwLCByZXN1bHQ7XG4gIHdoaWxlICghKHN0ZXAgPSBjYWxsKG5leHQsIGl0ZXJhdG9yKSkuZG9uZSkge1xuICAgIHJlc3VsdCA9IGZuKHN0ZXAudmFsdWUpO1xuICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlLXNpbXBsZScpO1xudmFyIFNldEhlbHBlcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWhlbHBlcnMnKTtcblxudmFyIFNldCA9IFNldEhlbHBlcnMuU2V0O1xudmFyIFNldFByb3RvdHlwZSA9IFNldEhlbHBlcnMucHJvdG87XG52YXIgZm9yRWFjaCA9IHVuY3VycnlUaGlzKFNldFByb3RvdHlwZS5mb3JFYWNoKTtcbnZhciBrZXlzID0gdW5jdXJyeVRoaXMoU2V0UHJvdG90eXBlLmtleXMpO1xudmFyIG5leHQgPSBrZXlzKG5ldyBTZXQoKSkubmV4dDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2V0LCBmbiwgaW50ZXJydXB0aWJsZSkge1xuICByZXR1cm4gaW50ZXJydXB0aWJsZSA/IGl0ZXJhdGVTaW1wbGUoeyBpdGVyYXRvcjoga2V5cyhzZXQpLCBuZXh0OiBuZXh0IH0sIGZuKSA6IGZvckVhY2goc2V0LCBmbik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBTZXRIZWxwZXJzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1oZWxwZXJzJyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaXRlcmF0ZScpO1xuXG52YXIgU2V0ID0gU2V0SGVscGVycy5TZXQ7XG52YXIgYWRkID0gU2V0SGVscGVycy5hZGQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNldCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IFNldCgpO1xuICBpdGVyYXRlKHNldCwgZnVuY3Rpb24gKGl0KSB7XG4gICAgYWRkKHJlc3VsdCwgaXQpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCBtZXRob2QpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG4gICAgcmV0dXJuIHVuY3VycnlUaGlzKGFDYWxsYWJsZShPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwga2V5KVttZXRob2RdKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWFjY2Vzc29yJyk7XG52YXIgU2V0SGVscGVycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaGVscGVycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzQWNjZXNzb3IoU2V0SGVscGVycy5wcm90bywgJ3NpemUnLCAnZ2V0JykgfHwgZnVuY3Rpb24gKHNldCkge1xuICByZXR1cm4gc2V0LnNpemU7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGBHZXRJdGVyYXRvckRpcmVjdChvYmopYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9wcm9wb3NhbC1pdGVyYXRvci1oZWxwZXJzLyNzZWMtZ2V0aXRlcmF0b3JkaXJlY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4ge1xuICAgIGl0ZXJhdG9yOiBvYmosXG4gICAgbmV4dDogb2JqLm5leHQsXG4gICAgZG9uZTogZmFsc2VcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xuXG52YXIgSU5WQUxJRF9TSVpFID0gJ0ludmFsaWQgc2l6ZSc7XG52YXIgJFJhbmdlRXJyb3IgPSBSYW5nZUVycm9yO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG5cbnZhciBTZXRSZWNvcmQgPSBmdW5jdGlvbiAoc2V0LCBpbnRTaXplKSB7XG4gIHRoaXMuc2V0ID0gc2V0O1xuICB0aGlzLnNpemUgPSBtYXgoaW50U2l6ZSwgMCk7XG4gIHRoaXMuaGFzID0gYUNhbGxhYmxlKHNldC5oYXMpO1xuICB0aGlzLmtleXMgPSBhQ2FsbGFibGUoc2V0LmtleXMpO1xufTtcblxuU2V0UmVjb3JkLnByb3RvdHlwZSA9IHtcbiAgZ2V0SXRlcmF0b3I6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0SXRlcmF0b3JEaXJlY3QoYW5PYmplY3QoY2FsbCh0aGlzLmtleXMsIHRoaXMuc2V0KSkpO1xuICB9LFxuICBpbmNsdWRlczogZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGNhbGwodGhpcy5oYXMsIHRoaXMuc2V0LCBpdCk7XG4gIH1cbn07XG5cbi8vIGBHZXRTZXRSZWNvcmRgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL3Byb3Bvc2FsLXNldC1tZXRob2RzLyNzZWMtZ2V0c2V0cmVjb3JkXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgYW5PYmplY3Qob2JqKTtcbiAgdmFyIG51bVNpemUgPSArb2JqLnNpemU7XG4gIC8vIE5PVEU6IElmIHNpemUgaXMgdW5kZWZpbmVkLCB0aGVuIG51bVNpemUgd2lsbCBiZSBOYU5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgaWYgKG51bVNpemUgIT09IG51bVNpemUpIHRocm93IG5ldyAkVHlwZUVycm9yKElOVkFMSURfU0laRSk7XG4gIHZhciBpbnRTaXplID0gdG9JbnRlZ2VyT3JJbmZpbml0eShudW1TaXplKTtcbiAgaWYgKGludFNpemUgPCAwKSB0aHJvdyBuZXcgJFJhbmdlRXJyb3IoSU5WQUxJRF9TSVpFKTtcbiAgcmV0dXJuIG5ldyBTZXRSZWNvcmQob2JqLCBpbnRTaXplKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFTZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1zZXQnKTtcbnZhciBTZXRIZWxwZXJzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1oZWxwZXJzJyk7XG52YXIgY2xvbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWNsb25lJyk7XG52YXIgc2l6ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtc2l6ZScpO1xudmFyIGdldFNldFJlY29yZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtc2V0LXJlY29yZCcpO1xudmFyIGl0ZXJhdGVTZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWl0ZXJhdGUnKTtcbnZhciBpdGVyYXRlU2ltcGxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUtc2ltcGxlJyk7XG5cbnZhciBoYXMgPSBTZXRIZWxwZXJzLmhhcztcbnZhciByZW1vdmUgPSBTZXRIZWxwZXJzLnJlbW92ZTtcblxuLy8gYFNldC5wcm90b3R5cGUuZGlmZmVyZW5jZWAgbWV0aG9kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaWZmZXJlbmNlKG90aGVyKSB7XG4gIHZhciBPID0gYVNldCh0aGlzKTtcbiAgdmFyIG90aGVyUmVjID0gZ2V0U2V0UmVjb3JkKG90aGVyKTtcbiAgdmFyIHJlc3VsdCA9IGNsb25lKE8pO1xuICBpZiAoc2l6ZShPKSA8PSBvdGhlclJlYy5zaXplKSBpdGVyYXRlU2V0KE8sIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKG90aGVyUmVjLmluY2x1ZGVzKGUpKSByZW1vdmUocmVzdWx0LCBlKTtcbiAgfSk7XG4gIGVsc2UgaXRlcmF0ZVNpbXBsZShvdGhlclJlYy5nZXRJdGVyYXRvcigpLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChoYXMoTywgZSkpIHJlbW92ZShyZXN1bHQsIGUpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbnZhciBjcmVhdGVTZXRMaWtlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIHtcbiAgICBzaXplOiBzaXplLFxuICAgIGhhczogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAga2V5czogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBTZXQgPSBnZXRCdWlsdEluKCdTZXQnKTtcbiAgdHJ5IHtcbiAgICBuZXcgU2V0KClbbmFtZV0oY3JlYXRlU2V0TGlrZSgwKSk7XG4gICAgdHJ5IHtcbiAgICAgIC8vIGxhdGUgc3BlYyBjaGFuZ2UsIGVhcmx5IFdlYktpdCB+IFNhZmFyaSAxNy4wIGJldGEgaW1wbGVtZW50YXRpb24gZG9lcyBub3QgcGFzcyBpdFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHMvcHVsbC84OFxuICAgICAgbmV3IFNldCgpW25hbWVdKGNyZWF0ZVNldExpa2UoLTEpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlcnJvcjIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZGlmZmVyZW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZGlmZmVyZW5jZScpO1xudmFyIHNldE1ldGhvZEFjY2VwdFNldExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LW1ldGhvZC1hY2NlcHQtc2V0LWxpa2UnKTtcblxuLy8gYFNldC5wcm90b3R5cGUuZGlmZmVyZW5jZWAgbWV0aG9kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xuJCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6ICFzZXRNZXRob2RBY2NlcHRTZXRMaWtlKCdkaWZmZXJlbmNlJykgfSwge1xuICBkaWZmZXJlbmNlOiBkaWZmZXJlbmNlXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5zZXQuZGlmZmVyZW5jZS52MicpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhU2V0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Etc2V0Jyk7XG52YXIgU2V0SGVscGVycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaGVscGVycycpO1xudmFyIHNpemUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXNpemUnKTtcbnZhciBnZXRTZXRSZWNvcmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LXNldC1yZWNvcmQnKTtcbnZhciBpdGVyYXRlU2V0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1pdGVyYXRlJyk7XG52YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlLXNpbXBsZScpO1xuXG52YXIgU2V0ID0gU2V0SGVscGVycy5TZXQ7XG52YXIgYWRkID0gU2V0SGVscGVycy5hZGQ7XG52YXIgaGFzID0gU2V0SGVscGVycy5oYXM7XG5cbi8vIGBTZXQucHJvdG90eXBlLmludGVyc2VjdGlvbmAgbWV0aG9kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbnRlcnNlY3Rpb24ob3RoZXIpIHtcbiAgdmFyIE8gPSBhU2V0KHRoaXMpO1xuICB2YXIgb3RoZXJSZWMgPSBnZXRTZXRSZWNvcmQob3RoZXIpO1xuICB2YXIgcmVzdWx0ID0gbmV3IFNldCgpO1xuXG4gIGlmIChzaXplKE8pID4gb3RoZXJSZWMuc2l6ZSkge1xuICAgIGl0ZXJhdGVTaW1wbGUob3RoZXJSZWMuZ2V0SXRlcmF0b3IoKSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChoYXMoTywgZSkpIGFkZChyZXN1bHQsIGUpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGl0ZXJhdGVTZXQoTywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChvdGhlclJlYy5pbmNsdWRlcyhlKSkgYWRkKHJlc3VsdCwgZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGludGVyc2VjdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaW50ZXJzZWN0aW9uJyk7XG52YXIgc2V0TWV0aG9kQWNjZXB0U2V0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtbWV0aG9kLWFjY2VwdC1zZXQtbGlrZScpO1xuXG52YXIgSU5DT1JSRUNUID0gIXNldE1ldGhvZEFjY2VwdFNldExpa2UoJ2ludGVyc2VjdGlvbicpIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWZyb20sIGVzL25vLXNldCAtLSB0ZXN0aW5nXG4gIHJldHVybiBTdHJpbmcoQXJyYXkuZnJvbShuZXcgU2V0KFsxLCAyLCAzXSkuaW50ZXJzZWN0aW9uKG5ldyBTZXQoWzMsIDJdKSkpKSAhPT0gJzMsMic7XG59KTtcblxuLy8gYFNldC5wcm90b3R5cGUuaW50ZXJzZWN0aW9uYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG4kKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUIH0sIHtcbiAgaW50ZXJzZWN0aW9uOiBpbnRlcnNlY3Rpb25cbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnNldC5pbnRlcnNlY3Rpb24udjInKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGtpbmQsIHZhbHVlKSB7XG4gIHZhciBpbm5lclJlc3VsdCwgaW5uZXJFcnJvcjtcbiAgYW5PYmplY3QoaXRlcmF0b3IpO1xuICB0cnkge1xuICAgIGlubmVyUmVzdWx0ID0gZ2V0TWV0aG9kKGl0ZXJhdG9yLCAncmV0dXJuJyk7XG4gICAgaWYgKCFpbm5lclJlc3VsdCkge1xuICAgICAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpbm5lclJlc3VsdCA9IGNhbGwoaW5uZXJSZXN1bHQsIGl0ZXJhdG9yKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpbm5lckVycm9yID0gdHJ1ZTtcbiAgICBpbm5lclJlc3VsdCA9IGVycm9yO1xuICB9XG4gIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcbiAgaWYgKGlubmVyRXJyb3IpIHRocm93IGlubmVyUmVzdWx0O1xuICBhbk9iamVjdChpbm5lclJlc3VsdCk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFTZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1zZXQnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWhlbHBlcnMnKS5oYXM7XG52YXIgc2l6ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtc2l6ZScpO1xudmFyIGdldFNldFJlY29yZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtc2V0LXJlY29yZCcpO1xudmFyIGl0ZXJhdGVTZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWl0ZXJhdGUnKTtcbnZhciBpdGVyYXRlU2ltcGxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUtc2ltcGxlJyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG4vLyBgU2V0LnByb3RvdHlwZS5pc0Rpc2pvaW50RnJvbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldC1tZXRob2RzLyNTZXQucHJvdG90eXBlLmlzRGlzam9pbnRGcm9tXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzRGlzam9pbnRGcm9tKG90aGVyKSB7XG4gIHZhciBPID0gYVNldCh0aGlzKTtcbiAgdmFyIG90aGVyUmVjID0gZ2V0U2V0UmVjb3JkKG90aGVyKTtcbiAgaWYgKHNpemUoTykgPD0gb3RoZXJSZWMuc2l6ZSkgcmV0dXJuIGl0ZXJhdGVTZXQoTywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAob3RoZXJSZWMuaW5jbHVkZXMoZSkpIHJldHVybiBmYWxzZTtcbiAgfSwgdHJ1ZSkgIT09IGZhbHNlO1xuICB2YXIgaXRlcmF0b3IgPSBvdGhlclJlYy5nZXRJdGVyYXRvcigpO1xuICByZXR1cm4gaXRlcmF0ZVNpbXBsZShpdGVyYXRvciwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoaGFzKE8sIGUpKSByZXR1cm4gaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ25vcm1hbCcsIGZhbHNlKTtcbiAgfSkgIT09IGZhbHNlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBpc0Rpc2pvaW50RnJvbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaXMtZGlzam9pbnQtZnJvbScpO1xudmFyIHNldE1ldGhvZEFjY2VwdFNldExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LW1ldGhvZC1hY2NlcHQtc2V0LWxpa2UnKTtcblxuLy8gYFNldC5wcm90b3R5cGUuaXNEaXNqb2ludEZyb21gIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcbiQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiAhc2V0TWV0aG9kQWNjZXB0U2V0TGlrZSgnaXNEaXNqb2ludEZyb20nKSB9LCB7XG4gIGlzRGlzam9pbnRGcm9tOiBpc0Rpc2pvaW50RnJvbVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuc2V0LmlzLWRpc2pvaW50LWZyb20udjInKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYVNldCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLXNldCcpO1xudmFyIHNpemUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXNpemUnKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1pdGVyYXRlJyk7XG52YXIgZ2V0U2V0UmVjb3JkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1zZXQtcmVjb3JkJyk7XG5cbi8vIGBTZXQucHJvdG90eXBlLmlzU3Vic2V0T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXQtbWV0aG9kcy8jU2V0LnByb3RvdHlwZS5pc1N1YnNldE9mXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3Vic2V0T2Yob3RoZXIpIHtcbiAgdmFyIE8gPSBhU2V0KHRoaXMpO1xuICB2YXIgb3RoZXJSZWMgPSBnZXRTZXRSZWNvcmQob3RoZXIpO1xuICBpZiAoc2l6ZShPKSA+IG90aGVyUmVjLnNpemUpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGl0ZXJhdGUoTywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoIW90aGVyUmVjLmluY2x1ZGVzKGUpKSByZXR1cm4gZmFsc2U7XG4gIH0sIHRydWUpICE9PSBmYWxzZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNTdWJzZXRPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaXMtc3Vic2V0LW9mJyk7XG52YXIgc2V0TWV0aG9kQWNjZXB0U2V0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtbWV0aG9kLWFjY2VwdC1zZXQtbGlrZScpO1xuXG4vLyBgU2V0LnByb3RvdHlwZS5pc1N1YnNldE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG4kKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogIXNldE1ldGhvZEFjY2VwdFNldExpa2UoJ2lzU3Vic2V0T2YnKSB9LCB7XG4gIGlzU3Vic2V0T2Y6IGlzU3Vic2V0T2Zcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnNldC5pcy1zdWJzZXQtb2YudjInKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYVNldCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLXNldCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaGVscGVycycpLmhhcztcbnZhciBzaXplID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zaXplJyk7XG52YXIgZ2V0U2V0UmVjb3JkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1zZXQtcmVjb3JkJyk7XG52YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlLXNpbXBsZScpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcblxuLy8gYFNldC5wcm90b3R5cGUuaXNTdXBlcnNldE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0LW1ldGhvZHMvI1NldC5wcm90b3R5cGUuaXNTdXBlcnNldE9mXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3VwZXJzZXRPZihvdGhlcikge1xuICB2YXIgTyA9IGFTZXQodGhpcyk7XG4gIHZhciBvdGhlclJlYyA9IGdldFNldFJlY29yZChvdGhlcik7XG4gIGlmIChzaXplKE8pIDwgb3RoZXJSZWMuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgaXRlcmF0b3IgPSBvdGhlclJlYy5nZXRJdGVyYXRvcigpO1xuICByZXR1cm4gaXRlcmF0ZVNpbXBsZShpdGVyYXRvciwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoIWhhcyhPLCBlKSkgcmV0dXJuIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICdub3JtYWwnLCBmYWxzZSk7XG4gIH0pICE9PSBmYWxzZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNTdXBlcnNldE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1pcy1zdXBlcnNldC1vZicpO1xudmFyIHNldE1ldGhvZEFjY2VwdFNldExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LW1ldGhvZC1hY2NlcHQtc2V0LWxpa2UnKTtcblxuLy8gYFNldC5wcm90b3R5cGUuaXNTdXBlcnNldE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG4kKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogIXNldE1ldGhvZEFjY2VwdFNldExpa2UoJ2lzU3VwZXJzZXRPZicpIH0sIHtcbiAgaXNTdXBlcnNldE9mOiBpc1N1cGVyc2V0T2Zcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnNldC5pcy1zdXBlcnNldC1vZi52MicpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhU2V0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Etc2V0Jyk7XG52YXIgU2V0SGVscGVycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaGVscGVycycpO1xudmFyIGNsb25lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1jbG9uZScpO1xudmFyIGdldFNldFJlY29yZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtc2V0LXJlY29yZCcpO1xudmFyIGl0ZXJhdGVTaW1wbGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZS1zaW1wbGUnKTtcblxudmFyIGFkZCA9IFNldEhlbHBlcnMuYWRkO1xudmFyIGhhcyA9IFNldEhlbHBlcnMuaGFzO1xudmFyIHJlbW92ZSA9IFNldEhlbHBlcnMucmVtb3ZlO1xuXG4vLyBgU2V0LnByb3RvdHlwZS5zeW1tZXRyaWNEaWZmZXJlbmNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN5bW1ldHJpY0RpZmZlcmVuY2Uob3RoZXIpIHtcbiAgdmFyIE8gPSBhU2V0KHRoaXMpO1xuICB2YXIga2V5c0l0ZXIgPSBnZXRTZXRSZWNvcmQob3RoZXIpLmdldEl0ZXJhdG9yKCk7XG4gIHZhciByZXN1bHQgPSBjbG9uZShPKTtcbiAgaXRlcmF0ZVNpbXBsZShrZXlzSXRlciwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoaGFzKE8sIGUpKSByZW1vdmUocmVzdWx0LCBlKTtcbiAgICBlbHNlIGFkZChyZXN1bHQsIGUpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgc3ltbWV0cmljRGlmZmVyZW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtc3ltbWV0cmljLWRpZmZlcmVuY2UnKTtcbnZhciBzZXRNZXRob2RBY2NlcHRTZXRMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1tZXRob2QtYWNjZXB0LXNldC1saWtlJyk7XG5cbi8vIGBTZXQucHJvdG90eXBlLnN5bW1ldHJpY0RpZmZlcmVuY2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcbiQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiAhc2V0TWV0aG9kQWNjZXB0U2V0TGlrZSgnc3ltbWV0cmljRGlmZmVyZW5jZScpIH0sIHtcbiAgc3ltbWV0cmljRGlmZmVyZW5jZTogc3ltbWV0cmljRGlmZmVyZW5jZVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuc2V0LnN5bW1ldHJpYy1kaWZmZXJlbmNlLnYyJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFTZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1zZXQnKTtcbnZhciBhZGQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWhlbHBlcnMnKS5hZGQ7XG52YXIgY2xvbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWNsb25lJyk7XG52YXIgZ2V0U2V0UmVjb3JkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1zZXQtcmVjb3JkJyk7XG52YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlLXNpbXBsZScpO1xuXG4vLyBgU2V0LnByb3RvdHlwZS51bmlvbmAgbWV0aG9kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1bmlvbihvdGhlcikge1xuICB2YXIgTyA9IGFTZXQodGhpcyk7XG4gIHZhciBrZXlzSXRlciA9IGdldFNldFJlY29yZChvdGhlcikuZ2V0SXRlcmF0b3IoKTtcbiAgdmFyIHJlc3VsdCA9IGNsb25lKE8pO1xuICBpdGVyYXRlU2ltcGxlKGtleXNJdGVyLCBmdW5jdGlvbiAoaXQpIHtcbiAgICBhZGQocmVzdWx0LCBpdCk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB1bmlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdW5pb24nKTtcbnZhciBzZXRNZXRob2RBY2NlcHRTZXRMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1tZXRob2QtYWNjZXB0LXNldC1saWtlJyk7XG5cbi8vIGBTZXQucHJvdG90eXBlLnVuaW9uYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG4kKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogIXNldE1ldGhvZEFjY2VwdFNldExpa2UoJ3VuaW9uJykgfSwge1xuICB1bmlvbjogdW5pb25cbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnNldC51bmlvbi52MicpO1xuIiwgIntcblx0XCJhcGlUYWdcIjogXCJDYXQtYS1sb3RcIixcblx0XCJ0YXJnZXROYW1lc3BhY2VcIjogMTQsXG5cdFwidmVyc2lvblwiOiBcIjYuMFwiXG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgdHlwZSB7U2V0dGluZ30gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IENMQVNTX05BTUU6IHN0cmluZyA9ICdnYWRnZXQtY2F0X2FfbG90JztcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS1jb250YWluZXJgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJ9X19kYXRhYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX2NhdGVnb3J5LWxpc3RgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUfV9fYWN0aW9uYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUfS0tbm8tZm91bmRgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVI6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9X19tYXJrLWNvdW50ZXJgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfV9fc2VhcmNoLWlucHV0LWNvbnRhaW5lcl9faW5wdXRgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfV9fc2VsZWN0aW9uc2A7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlN9X19hbGxgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkU6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU31fX25vbmVgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJ9X19oZWFkYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOSzogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRH1fX2xpbmtgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS30tLWVuYWJsZWRgO1xuY29uc3QgQ0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVI6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWN1cnJlbnRfY291bnRlcmA7XG5jb25zdCBDTEFTU19OQU1FX0ZFRURCQUNLOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS1mZWVkYmFja2A7XG5jb25zdCBDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkU6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfRkVFREJBQ0t9LS1kb25lYDtcbmNvbnN0IENMQVNTX05BTUVfTEFCRUw6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWxhYmVsYDtcbmNvbnN0IENMQVNTX05BTUVfTEFCRUxfRE9ORTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9MQUJFTH0tLWRvbmVgO1xuY29uc3QgQ0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVEOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0xBQkVMfS0tbGFzdC1zZWxlY3RlZGA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0xBQkVMfS0tc2VsZWN0ZWRgO1xuXG5jb25zdCBERUZBVUxUX1NFVFRJTkc6IFNldHRpbmcgPSB7XG5cdGRvY2xlYW51cDoge1xuXHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdGxhYmVsX2kxOG46ICdkb2NsZWFudXBwcmVmJyxcblx0fSxcblx0ZWRpdHBhZ2VzOiB7XG5cdFx0ZGVmYXVsdDogdHJ1ZSxcblx0XHRsYWJlbF9pMThuOiAnZWRpdHBhZ2VzcHJlZicsXG5cdH0sXG5cdG1pbm9yOiB7XG5cdFx0ZGVmYXVsdDogZmFsc2UsXG5cdFx0bGFiZWxfaTE4bjogJ21pbm9ycHJlZicsXG5cdH0sXG5cdHN1YmNhdGNvdW50OiB7XG5cdFx0ZGVmYXVsdDogNTAsXG5cdFx0bGFiZWxfaTE4bjogJ3N1YmNhdGNvdW50cHJlZicsXG5cdH0sXG5cdHdhdGNobGlzdDoge1xuXHRcdGRlZmF1bHQ6ICdwcmVmZXJlbmNlcycsXG5cdFx0bGFiZWxfaTE4bjogJ3dhdGNobGlzdHByZWYnLFxuXHRcdHNlbGVjdF9pMThuOiB7XG5cdFx0XHR3YXRjaF9ub2NoYW5nZTogJ25vY2hhbmdlJyxcblx0XHRcdHdhdGNoX3ByZWY6ICdwcmVmZXJlbmNlcycsXG5cdFx0XHR3YXRjaF91bndhdGNoOiAndW53YXRjaCcsXG5cdFx0XHR3YXRjaF93YXRjaDogJ3dhdGNoJyxcblx0XHR9LFxuXHR9LFxufTtcblxuY29uc3QgVkFSSUFOVFM6IHN0cmluZ1tdID0gWyd6aC1oYW5zJywgJ3poLWhhbnQnLCAnemgtY24nLCAnemgtbXknLCAnemgtc2cnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXTtcblxuY29uc3QgV0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZScpLnRvU3RyaW5nKCk7XG5jb25zdCBXR19GT1JNQVRURURfTkFNRVNQQUNFUzogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpO1xuY29uc3QgV0dfTkFNRVNQQUNFX0lEUzogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlSWRzJyk7XG5jb25zdCBXR19OQU1FU1BBQ0VfTlVNQkVSOiBudW1iZXIgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpO1xuY29uc3QgV0dfU0NSSVBUOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpO1xuY29uc3QgV0dfVElUTEU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnVGl0bGUnKTtcbmNvbnN0IFdHX1VTRVJfTEFOR1VBR0U6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckxhbmd1YWdlJyk7XG5cbmV4cG9ydCB7XG5cdENMQVNTX05BTUUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT04sXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCxcblx0Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVIsXG5cdENMQVNTX05BTUVfRkVFREJBQ0ssXG5cdENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTCxcblx0Q0xBU1NfTkFNRV9MQUJFTF9ET05FLFxuXHRDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQsXG5cdENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQsXG5cdERFRkFVTFRfU0VUVElORyxcblx0VkFSSUFOVFMsXG5cdFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSxcblx0V0dfRk9STUFUVEVEX05BTUVTUEFDRVMsXG5cdFdHX05BTUVTUEFDRV9JRFMsXG5cdFdHX05BTUVTUEFDRV9OVU1CRVIsXG5cdFdHX1NDUklQVCxcblx0V0dfVElUTEUsXG5cdFdHX1VTRVJfTEFOR1VBR0UsXG59O1xuIiwgImltcG9ydCB0eXBlIHtNZXNzYWdlS2V5fSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7V0dfVVNFUl9MQU5HVUFHRX0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IERFRkFVTFRfTUVTU0FHRVMgPSB7XG5cdC8vIGFzIGluIDE3IGZpbGVzIHNlbGVjdGVkXG5cdCdjYXQtYS1sb3QtZmlsZXMtc2VsZWN0ZWQnOiAne3tQTFVSQUw6JDF8T25lIGZpbGV8JDEgZmlsZXN9fSBzZWxlY3RlZC4nLFxuXHQvLyBBY3Rpb25zXG5cdCdjYXQtYS1sb3QtY29weSc6ICdDb3B5Jyxcblx0J2NhdC1hLWxvdC1tb3ZlJzogJ01vdmUnLFxuXHQnY2F0LWEtbG90LWFkZCc6ICdBZGQnLFxuXHQnY2F0LWEtbG90LXJlbW92ZS1mcm9tLWNhdCc6ICdSZW1vdmUgZnJvbSB0aGlzIGNhdGVnb3J5Jyxcblx0J2NhdC1hLWxvdC1lbnRlci1uYW1lJzogJ0VudGVyIGNhdGVnb3J5IG5hbWUnLFxuXHQnY2F0LWEtbG90LXNlbGVjdCc6ICdTZWxlY3QnLFxuXHQnY2F0LWEtbG90LWFsbCc6ICdhbGwnLFxuXHQnY2F0LWEtbG90LW5vbmUnOiAnbm9uZScsXG5cdCdjYXQtYS1sb3Qtbm9uZS1zZWxlY3RlZCc6ICdObyBmaWxlcyBzZWxlY3RlZCEnLFxuXHQvLyBQcmVmZXJlbmNlc1xuXHQnY2F0LWEtbG90LXdhdGNobGlzdHByZWYnOiAnV2F0Y2hsaXN0IHByZWZlcmVuY2UgY29uY2VybmluZyBmaWxlcyBlZGl0ZWQgd2l0aCBDYXQtQS1Mb3QnLFxuXHQnY2F0LWEtbG90LXdhdGNoX3ByZWYnOiAnQWNjb3JkaW5nIHRvIHlvdXIgZ2VuZXJhbCBwcmVmZXJlbmNlcycsXG5cdCdjYXQtYS1sb3Qtd2F0Y2hfbm9jaGFuZ2UnOiAnRG8gbm90IGNoYW5nZSB3YXRjaHN0YXR1cycsXG5cdCdjYXQtYS1sb3Qtd2F0Y2hfd2F0Y2gnOiAnV2F0Y2ggcGFnZXMgZWRpdGVkIHdpdGggQ2F0LUEtTG90Jyxcblx0J2NhdC1hLWxvdC13YXRjaF91bndhdGNoJzogJ1JlbW92ZSBwYWdlcyB3aGlsZSBlZGl0aW5nIHdpdGggQ2F0LUEtTG90IGZyb20geW91ciB3YXRjaGxpc3QnLFxuXHQnY2F0LWEtbG90LW1pbm9ycHJlZic6XG5cdFx0XCJNYXJrIGVkaXRzIGFzIG1pbm9yIChpZiB5b3UgZ2VuZXJhbGx5IG1hcmsgeW91ciBlZGl0cyBhcyBtaW5vciwgdGhpcyB3b24ndCBjaGFuZ2UgYW55dGhpbmcpXCIsXG5cdCdjYXQtYS1sb3QtZWRpdHBhZ2VzcHJlZic6ICdBbGxvdyBjYXRlZ29yaXNpbmcgcGFnZXMgKGluY2x1ZGluZyBjYXRlZ29yaWVzKSB0aGF0IGFyZSBub3QgZmlsZXMnLFxuXHQnY2F0LWEtbG90LWRvY2xlYW51cHByZWYnOiAnUmVtb3ZlIHt7Q2hlY2sgY2F0ZWdvcmllc319IGFuZCBvdGhlciBtaW5vciBjbGVhbnVwJyxcblx0J2NhdC1hLWxvdC1zdWJjYXRjb3VudHByZWYnOiAnU3ViLWNhdGVnb3JpZXMgdG8gc2hvdyBhdCBtb3N0Jyxcblx0Ly8gUHJvZ3Jlc3Ncblx0J2NhdC1hLWxvdC1sb2FkaW5nJzogJ0xvYWRpbmcuLi4nLFxuXHQnY2F0LWEtbG90LWVkaXRpbmcnOiAnRWRpdGluZyBwYWdlJyxcblx0J2NhdC1hLWxvdC1vZic6ICdvZiAnLFxuXHQnY2F0LWEtbG90LXNraXBwZWQtYWxyZWFkeSc6XG5cdFx0J1RoZSBmb2xsb3dpbmcge3tQTFVSQUw6JDF8cGFnZSB3YXN8JDEgcGFnZXMgd2VyZX19IHNraXBwZWQsIGJlY2F1c2UgdGhlIHBhZ2Ugd2FzIGFscmVhZHkgaW4gdGhlIGNhdGVnb3J5OicsXG5cdCdjYXQtYS1sb3Qtc2tpcHBlZC1ub3QtZm91bmQnOlxuXHRcdCdUaGUgZm9sbG93aW5nIHt7UExVUkFMOiQxfHBhZ2Ugd2FzfCQxIHBhZ2VzIHdlcmV9fSBza2lwcGVkLCBiZWNhdXNlIHRoZSBvbGQgY2F0ZWdvcnkgY291bGQgbm90IGJlIGZvdW5kOicsXG5cdCdjYXQtYS1sb3Qtc2tpcHBlZC1zZXJ2ZXInOlxuXHRcdFwiVGhlIGZvbGxvd2luZyB7e1BMVVJBTDokMXxwYWdlfCQxIHBhZ2VzfX0gY291bGRuJ3QgYmUgY2hhbmdlZCwgc2luY2UgdGhlcmUgd2VyZSBwcm9ibGVtcyBjb25uZWN0aW5nIHRvIHRoZSBzZXJ2ZXI6XCIsXG5cdCdjYXQtYS1sb3QtYWxsLWRvbmUnOiAnQWxsIHBhZ2VzIGFyZSBwcm9jZXNzZWQuJyxcblx0J2NhdC1hLWxvdC1kb25lJzogJ0RvbmUhJyxcblx0J2NhdC1hLWxvdC1hZGRlZC1jYXQnOiAnQWRkZWQgY2F0ZWdvcnkgJDEnLFxuXHQnY2F0LWEtbG90LWNvcGllZC1jYXQnOiAnQ29waWVkIHRvIGNhdGVnb3J5ICQxJyxcblx0J2NhdC1hLWxvdC1tb3ZlZC1jYXQnOiAnTW92ZWQgdG8gY2F0ZWdvcnkgJDEnLFxuXHQnY2F0LWEtbG90LXJlbW92ZWQtY2F0JzogJ1JlbW92ZWQgZnJvbSBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtcmV0dXJuLXRvLXBhZ2UnOiAnUmV0dXJuIHRvIHBhZ2UnLFxuXHQnY2F0LWEtbG90LWNhdC1ub3QtZm91bmQnOiAnQ2F0ZWdvcnkgbm90IGZvdW5kLicsXG5cdC8vIFN1bW1hcmllczpcblx0J2NhdC1hLWxvdC1zdW1tYXJ5LWFkZCc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBBZGRpbmcgW1tDYXRlZ29yeTokMV1dJyxcblx0J2NhdC1hLWxvdC1zdW1tYXJ5LWNvcHknOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXTogQ29weWluZyBmcm9tIFtbQ2F0ZWdvcnk6JDFdXSB0byBbW0NhdGVnb3J5OiQyXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBNb3ZpbmcgZnJvbSBbW0NhdGVnb3J5OiQxXV0gdG8gW1tDYXRlZ29yeTokMl1dJyxcblx0J2NhdC1hLWxvdC1zdW1tYXJ5LXJlbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBSZW1vdmluZyBmcm9tIFtbQ2F0ZWdvcnk6JDFdXScsXG59IHNhdGlzZmllcyBSZWNvcmQ8TWVzc2FnZUtleSwgc3RyaW5nPjtcblxuY29uc3Qgc2V0TWVzc2FnZXMgPSAoKTogdm9pZCA9PiB7XG5cdC8qISBDYXQtYS1sb3QgbWVzc2FnZXMgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cblx0aWYgKFdHX1VTRVJfTEFOR1VBR0UgPT09ICdlbicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMoV0dfVVNFUl9MQU5HVUFHRSkpIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQ8dHlwZW9mIERFRkFVTFRfTUVTU0FHRVM+KHtcblx0XHRcdC8vIGFzIGluIDE3IGZpbGVzIHNlbGVjdGVkXG5cdFx0XHQnY2F0LWEtbG90LWZpbGVzLXNlbGVjdGVkJzogJyQx5YCL5paH5Lu25bey6YG45pOHJyxcblx0XHRcdC8vIEFjdGlvbnNcblx0XHRcdCdjYXQtYS1sb3QtY29weSc6ICfopIfoo70nLFxuXHRcdFx0J2NhdC1hLWxvdC1tb3ZlJzogJ+enu+WLlScsXG5cdFx0XHQnY2F0LWEtbG90LWFkZCc6ICflop7liqAnLFxuXHRcdFx0J2NhdC1hLWxvdC1yZW1vdmUtZnJvbS1jYXQnOiAn5b6e5q2k5YiG6aGe56e76ZmkJyxcblx0XHRcdCdjYXQtYS1sb3QtZW50ZXItbmFtZSc6ICfovLjlhaXliIbpoZ7lkI3nqLEnLFxuXHRcdFx0J2NhdC1hLWxvdC1zZWxlY3QnOiAn6YG45pOHJyxcblx0XHRcdCdjYXQtYS1sb3QtYWxsJzogJ+WFqOmDqCcsXG5cdFx0XHQnY2F0LWEtbG90LW5vbmUnOiAn54ShJyxcblx0XHRcdCdjYXQtYS1sb3Qtbm9uZS1zZWxlY3RlZCc6ICfmspLmnInpgbjmk4fmlofku7bvvIEnLFxuXHRcdFx0Ly8gUHJlZmVyZW5jZXNcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hsaXN0cHJlZic6ICfkvb/nlKhDYXQtQS1Mb3Tnt6jovK/mlofku7bmmYLnmoTnm6PoppbliJfooajpgbjpoIUnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF9wcmVmJzogJ+iIh+ezu+e1seWPg+aVuOioree9ruebuOWQjCcsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX25vY2hhbmdlJzogJ+S4jeimgeabtOaUueebo+imlueLgOaFiycsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX3dhdGNoJzogJ+ebo+imluS9v+eUqENhdC1BLUxvdOe3qOi8r+eahOmggemdoicsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX3Vud2F0Y2gnOiAn5bCH5L2/55SoQ2F0LUEtTG9057eo6Lyv55qE6aCB6Z2i5b6e55uj6KaW5YiX6KGo56e76ZmkJyxcblx0XHRcdCdjYXQtYS1sb3QtbWlub3JwcmVmJzpcblx0XHRcdFx0J+Wwh+e3qOi8r+aomeiomOeIsuWwj+S/ruaUue+8iOiLpeaCqOWcqOezu+e1seWPg+aVuOioree9ruS4reW3suioree9ruWwh+aJgOaciee3qOi8r+aomeiomOeIsuWwj+S/ruaUue+8jOatpOmBuOmgheS4jeacg+WwjeePvuacieihjOeIsumAsuihjOaUueWLle+8iScsXG5cdFx0XHQnY2F0LWEtbG90LWVkaXRwYWdlc3ByZWYnOiAn5YWB6Kix5bCN5LiN5piv5paH5Lu255qE6aCB6Z2i5ZKM5a2Q5YiG6aGe6YCy6KGM5YiG6aGe5pON5L2cJyxcblx0XHRcdCdjYXQtYS1sb3QtZG9jbGVhbnVwcHJlZic6ICfnp7vpmaR7e0NoZWNrIGNhdGVnb3JpZXN9feS4pumAsuihjOWFtuS7lue0sOevgOa4heeQhicsXG5cdFx0XHQnY2F0LWEtbG90LXN1YmNhdGNvdW50cHJlZic6ICfmnIDlpJrpoa/npLrnmoTlrZDliIbpoZ7mlbjph48nLFxuXHRcdFx0Ly8gUHJvZ3Jlc3Ncblx0XHRcdCdjYXQtYS1sb3QtbG9hZGluZyc6ICfmraPlnKjliqDovInigKbigKYnLFxuXHRcdFx0J2NhdC1hLWxvdC1lZGl0aW5nJzogJ+ato+WcqOe3qOi8r+mggemdoicsXG5cdFx0XHQnY2F0LWEtbG90LW9mJzogJ++8jOWFseaciScsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtYWxyZWFkeSc6ICfku6XkuIvpoIHpnaLlt7Lot7PpgY7vvIzlm6DniLLpoIHpnaLlt7LntpPlnKjliIbpoZ7kuK3vvJonLFxuXHRcdFx0J2NhdC1hLWxvdC1za2lwcGVkLW5vdC1mb3VuZCc6ICfku6XkuIvpoIHpnaLlt7Lot7PpgY7vvIzlm6DniLLmib7kuI3liLDnj77mnInliIbpoZ7vvJonLFxuXHRcdFx0J2NhdC1hLWxvdC1za2lwcGVkLXNlcnZlcic6ICfku6XkuIvpoIHpnaLnhKHms5Xnt6jovK/vvIzlm6DniLLpgKPmjqXmnI3li5nlmajlh7rpjK/vvJonLFxuXHRcdFx0J2NhdC1hLWxvdC1hbGwtZG9uZSc6ICflhajpg6jpoIHpnaLlt7LomZXnkIbjgIInLFxuXHRcdFx0J2NhdC1hLWxvdC1kb25lJzogJ+W3suWujOaIkO+8gScsXG5cdFx0XHQnY2F0LWEtbG90LWFkZGVkLWNhdCc6ICflt7LliqDlhaXliIbpoZ4nLFxuXHRcdFx0J2NhdC1hLWxvdC1jb3BpZWQtY2F0JzogJ+W3suikh+ijveWIsOWIhumhnicsXG5cdFx0XHQnY2F0LWEtbG90LW1vdmVkLWNhdCc6ICflt7Lnp7vli5XliLDliIbpoZ4nLFxuXHRcdFx0J2NhdC1hLWxvdC1yZW1vdmVkLWNhdCc6ICflt7Llvp7liIbpoZ7np7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1yZXR1cm4tdG8tcGFnZSc6ICfov5Tlm57liLDpoIHpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC1jYXQtbm90LWZvdW5kJzogJ+aJvuS4jeWIsOWIhumhnuOAgicsXG5cdFx0XHQvLyBTdW1tYXJpZXNcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1hZGQnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWKoOWFpeWIhumhnltbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktY29weSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5YiG6aGe6ZaT6KSH6KO977ya5b6eW1tDYXRlZ29yeTokMV1d5YiwW1tDYXRlZ29yeTokMl1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1tb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliIbpoZ7plpPnp7vli5XvvJrlvp5bW0NhdGVnb3J5OiQxXV3liLBbW0NhdGVnb3J5OiQyXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LXJlbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5b6e5YiG6aGe56e76Zmk77yaW1tDYXRlZ29yeTokMV1dJyxcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQ8dHlwZW9mIERFRkFVTFRfTUVTU0FHRVM+KHtcblx0XHRcdC8vIGFzIGluIDE3IGZpbGVzIHNlbGVjdGVkXG5cdFx0XHQnY2F0LWEtbG90LWZpbGVzLXNlbGVjdGVkJzogJ+W3sumAieaLqSQx5Liq6aG16Z2i5oiW5paH5Lu2Jyxcblx0XHRcdC8vIEFjdGlvbnNcblx0XHRcdCdjYXQtYS1sb3QtY29weSc6ICflpI3liLYnLFxuXHRcdFx0J2NhdC1hLWxvdC1tb3ZlJzogJ+enu+WKqCcsXG5cdFx0XHQnY2F0LWEtbG90LWFkZCc6ICflop7liqAnLFxuXHRcdFx0J2NhdC1hLWxvdC1yZW1vdmUtZnJvbS1jYXQnOiAn5LuO5q2k5YiG57G756e76ZmkJyxcblx0XHRcdCdjYXQtYS1sb3QtZW50ZXItbmFtZSc6ICfovpPlhaXliIbnsbvlkI3np7AnLFxuXHRcdFx0J2NhdC1hLWxvdC1zZWxlY3QnOiAn6YCJ5oupJyxcblx0XHRcdCdjYXQtYS1sb3QtYWxsJzogJ+WFqOmDqCcsXG5cdFx0XHQnY2F0LWEtbG90LW5vbmUnOiAn5pegJyxcblx0XHRcdCdjYXQtYS1sb3Qtbm9uZS1zZWxlY3RlZCc6ICfmsqHmnInpgInmi6nku7vkvZXpobXpnaLmiJbmlofku7bvvIEnLFxuXHRcdFx0Ly8gUHJlZmVyZW5jZXNcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hsaXN0cHJlZic6ICfkvb/nlKhDYXQtYS1sb3TnvJbovpHmlofku7bml7bnmoTnm5Hop4bliJfooajpgInpobknLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF9wcmVmJzogJ+S4juezu+e7n+WPguaVsOiuvue9ruebuOWQjCcsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX25vY2hhbmdlJzogJ+S4jeimgeabtOaUueebkeinhueKtuaAgScsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX3dhdGNoJzogJ+ebkeinhuS9v+eUqENhdC1hLWxvdOe8lui+keeahOmhtemdoicsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX3Vud2F0Y2gnOiAn5bCG5L2/55SoQ2F0LWEtbG9057yW6L6R55qE6aG16Z2i5LuO55uR6KeG5YiX6KGo56e76ZmkJyxcblx0XHRcdCdjYXQtYS1sb3QtbWlub3JwcmVmJzpcblx0XHRcdFx0J+Wwhue8lui+keagh+iusOS4uuWwj+S/ruaUue+8iOiLpeaCqOWcqOezu+e7n+WPguaVsOiuvue9ruS4reW3suiuvue9ruWwhuaJgOaciee8lui+keagh+iusOS4uuWwj+S/ruaUue+8jOatpOmAiemhueS4jeS8muWvueeOsOacieihjOS4uui/m+ihjOaUueWKqO+8iScsXG5cdFx0XHQnY2F0LWEtbG90LWVkaXRwYWdlc3ByZWYnOiAn5YWB6K645a+55LiN5piv5paH5Lu255qE6aG16Z2i5ZKM5a2Q5YiG57G76L+b6KGM5YiG57G75pON5L2cJyxcblx0XHRcdCdjYXQtYS1sb3QtZG9jbGVhbnVwcHJlZic6ICfnp7vpmaR7e0NoZWNrIGNhdGVnb3JpZXN9feW5tui/m+ihjOWFtuS7lue7huiKgua4heeQhicsXG5cdFx0XHQnY2F0LWEtbG90LXN1YmNhdGNvdW50cHJlZic6ICfmnIDlpJrmmL7npLrnmoTlrZDliIbnsbvmlbDph48nLFxuXHRcdFx0Ly8gUHJvZ3Jlc3Ncblx0XHRcdCdjYXQtYS1sb3QtbG9hZGluZyc6ICfmraPlnKjliqDovb3igKbigKYnLFxuXHRcdFx0J2NhdC1hLWxvdC1lZGl0aW5nJzogJ+ato+WcqOe8lui+kemhtemdoicsXG5cdFx0XHQnY2F0LWEtbG90LW9mJzogJ++8jOWFseaciScsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtYWxyZWFkeSc6ICfku6XkuIvpobXpnaLlt7Lot7Pov4fvvIzlm6DkuLrpobXpnaLlt7Lnu4/lnKjliIbnsbvkuK3vvJonLFxuXHRcdFx0J2NhdC1hLWxvdC1za2lwcGVkLW5vdC1mb3VuZCc6ICfku6XkuIvpobXpnaLlt7Lot7Pov4fvvIzlm6DkuLrmib7kuI3liLDnjrDmnInliIbnsbvvvJonLFxuXHRcdFx0J2NhdC1hLWxvdC1za2lwcGVkLXNlcnZlcic6ICfku6XkuIvpobXpnaLml6Dms5XnvJbovpHvvIzlm6DkuLrov57mjqXmnI3liqHlmajlh7rplJnvvJonLFxuXHRcdFx0J2NhdC1hLWxvdC1hbGwtZG9uZSc6ICflhajpg6jpobXpnaLlt7LlpITnkIbjgIInLFxuXHRcdFx0J2NhdC1hLWxvdC1kb25lJzogJ+W3suWujOaIkO+8gScsXG5cdFx0XHQnY2F0LWEtbG90LWFkZGVkLWNhdCc6ICflt7LliqDlhaXliIbnsbsnLFxuXHRcdFx0J2NhdC1hLWxvdC1jb3BpZWQtY2F0JzogJ+W3suWkjeWItuWIsOWIhuexuycsXG5cdFx0XHQnY2F0LWEtbG90LW1vdmVkLWNhdCc6ICflt7Lnp7vliqjliLDliIbnsbsnLFxuXHRcdFx0J2NhdC1hLWxvdC1yZW1vdmVkLWNhdCc6ICflt7Lku47liIbnsbvnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1yZXR1cm4tdG8tcGFnZSc6ICfov5Tlm57liLDpobXpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC1jYXQtbm90LWZvdW5kJzogJ+aJvuS4jeWIsOWIhuexu+OAgicsXG5cdFx0XHQvLyBTdW1tYXJpZXNcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1hZGQnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWKoOWFpeWIhuexu1tbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktY29weSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5YiG57G76Ze05aSN5Yi277ya5LuOW1tDYXRlZ29yeTokMV1d5YiwW1tDYXRlZ29yeTokMl1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1tb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliIbnsbvpl7Tnp7vliqjvvJrku45bW0NhdGVnb3J5OiQxXV3liLBbW0NhdGVnb3J5OiQyXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LXJlbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5LuO5YiG57G756e76Zmk77yaW1tDYXRlZ29yeTokMV1dJyxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHtERUZBVUxUX01FU1NBR0VTLCBzZXRNZXNzYWdlc307XG4iLCAiLyogZXNsaW50LWRpc2FibGUgbWVkaWF3aWtpL2NsYXNzLWRvYyAqL1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtcblx0Q0xBU1NfTkFNRSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVIsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEEsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTixcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX05PX0ZPVU5ELFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUixcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVULFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlMsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19BTEwsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFELFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkssXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVELFxuXHRDTEFTU19OQU1FX0NVUlJFTlRfQ09VTlRFUixcblx0Q0xBU1NfTkFNRV9GRUVEQkFDSyxcblx0Q0xBU1NfTkFNRV9GRUVEQkFDS19ET05FLFxuXHRDTEFTU19OQU1FX0xBQkVMLFxuXHRDTEFTU19OQU1FX0xBQkVMX0RPTkUsXG5cdENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQsXG5cdERFRkFVTFRfU0VUVElORyxcblx0VkFSSUFOVFMsXG5cdFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSxcblx0V0dfRk9STUFUVEVEX05BTUVTUEFDRVMsXG5cdFdHX05BTUVTUEFDRV9JRFMsXG5cdFdHX05BTUVTUEFDRV9OVU1CRVIsXG5cdFdHX1RJVExFLFxufSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7REVGQVVMVF9NRVNTQUdFUywgc2V0TWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMnO1xuaW1wb3J0IHR5cGUge01lc3NhZ2VLZXksIFNldHRpbmd9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtnZXRCb2R5LCBpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbi8qKlxuICogQ2hhbmdlcyBjYXRlZ29yeSBvZiBtdWx0aXBsZSBmaWxlc1xuICovXG5jb25zdCBjYXRBTG90ID0gKCk6IHZvaWQgPT4ge1xuXHQvKiEgQ2F0LWEtbG90IHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG5cdGNsYXNzIENBTCB7XG5cdFx0cHVibGljIHN0YXRpYyBpc1NlYXJjaE1vZGUgPSBmYWxzZTtcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1FU1NBR0VTOiBSZWNvcmQ8TWVzc2FnZUtleSwgc3RyaW5nPiA9IERFRkFVTFRfTUVTU0FHRVM7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TRVRUSU5HOiBTZXR0aW5nID0gREVGQVVMVF9TRVRUSU5HO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFZFUlNJT046IHN0cmluZyA9IE9QVElPTlMudmVyc2lvbjtcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEFQSV9UQUc6IHN0cmluZyA9IE9QVElPTlMuYXBpVGFnO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRBUkdFVF9OQU1FU1BBQ0U6IG51bWJlciA9IE9QVElPTlMudGFyZ2V0TmFtZXNwYWNlO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ1VSUkVOVF9DQVRFR1JPWTogc3RyaW5nID0gV0dfVElUTEU7XG5cblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBXR19GT1JNQVRURURfTkFNRVNQQUNFUzogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IFdHX0ZPUk1BVFRFRF9OQU1FU1BBQ0VTO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFdHX05BTUVTUEFDRV9JRFM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSBXR19OQU1FU1BBQ0VfSURTO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgaXNBdXRvQ29tcGxldGVJbml0ID0gZmFsc2U7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhcGkgPSBpbml0TXdBcGkoYENhdC1hLWxvdC8ke0NBTC5WRVJTSU9OfWApO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgYWxyZWFkeVRoZXJlOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIGNvbm5lY3Rpb25FcnJvcjogc3RyaW5nW10gPSBbXTtcblx0XHRwcml2YXRlIHN0YXRpYyBub3RGb3VuZDogc3RyaW5nW10gPSBbXTtcblx0XHRwcml2YXRlIHN0YXRpYyBjb3VudGVyQ3VycmVudCA9IDA7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY291bnRlck5lZWRlZCA9IDA7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBjb3VudGVyQ2F0ID0gMDtcblx0XHRwcml2YXRlIHN0YXRpYyBjdXJyZW50Q2F0ZWdvcnkgPSAnJztcblxuXHRcdHByaXZhdGUgc3RhdGljIGRpYWxvZ0hlaWdodCA9IDQ1MDtcblx0XHRwcml2YXRlIHN0YXRpYyBlZGl0VG9rZW4gPSAnJztcblx0XHRwcml2YXRlIHN0YXRpYyBsb2NhbENhdE5hbWUgPSBXR19GT1JNQVRURURfTkFNRVNQQUNFU1tDQUwuVEFSR0VUX05BTUVTUEFDRV0gYXMgc3RyaW5nO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcGFyZW50Q2F0czogc3RyaW5nW10gPSBbXTtcblx0XHRwcml2YXRlIHN0YXRpYyBzdWJDYXRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgc2V0dGluZ3M6IE5vbk51bGxhYmxlPHR5cGVvZiB3aW5kb3cuQ2F0QUxvdFByZWZzPiA9IHt9O1xuXHRcdHByaXZhdGUgc3RhdGljIHZhcmlhbnRDYWNoZTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cblx0XHRwcml2YXRlIHN0YXRpYyAkY291bnRlcjogSlF1ZXJ5ID0gJCgpO1xuXHRcdHByaXZhdGUgc3RhdGljICRwcm9ncmVzc0RpYWxvZzogSlF1ZXJ5ID0gJCgpO1xuXHRcdHByaXZhdGUgc3RhdGljICRsYWJlbHM6IEpRdWVyeSA9ICQoKTtcblx0XHRwcml2YXRlIHN0YXRpYyAkc2VsZWN0ZWRMYWJlbHM6IEpRdWVyeSA9ICQoKTtcblxuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGNvbnRhaW5lcjogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGRhdGFDb250YWluZXI6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRtYXJrQ291bnRlcjogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJHJlc3VsdExpc3Q6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRzZWFyY2hJbnB1dDogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGhlYWQ6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRsaW5rOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+O1xuXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pikge1xuXHRcdFx0aWYgKCFtdy5tc2coJ2NhdC1hLWxvdC1sb2FkaW5nJykpIHtcblx0XHRcdFx0bXcubWVzc2FnZXMuc2V0KENBTC5NRVNTQUdFUyk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJGJvZHkgPSAkYm9keTtcblx0XHRcdENBTC5pbml0U2V0dGluZ3MoKTtcblxuXHRcdFx0Y29uc3QgY29udGFpbmVyID0gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17W0NMQVNTX05BTUUsIENMQVNTX05BTUVfQ09OVEFJTkVSLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVJ9IC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUfSAvPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVR9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e0NBTC5tc2coJ2VudGVyLW5hbWUnKX1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e0NBTC5pc1NlYXJjaE1vZGUgPyBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3NlYXJjaCcpID8/ICcnIDogJyd9XG5cdFx0XHRcdFx0XHRcdFx0b25LZXlEb3duPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSBhcyBKUXVlcnk8SFRNTElucHV0RWxlbWVudD47XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhdDogc3RyaW5nID0gJGVsZW1lbnQudmFsKCk/LnRyaW0oKSA/PyAnJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGNhdCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlQ2F0cyhjYXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU30+XG5cdFx0XHRcdFx0XHRcdHtbQ0FMLm1zZygnc2VsZWN0JyksICcgJ119XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlQWxsKHRydWUpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnYWxsJyl9XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0eycg4oCiICd9XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORX1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZUFsbChmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdub25lJyl9XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEfT5cblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LfT57J0NhdC1hLWxvdCd9PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuJGNvbnRhaW5lciA9ICQoY29udGFpbmVyKSBhcyBKUXVlcnk7XG5cdFx0XHR0aGlzLiRjb250YWluZXIuYXBwZW5kVG8odGhpcy4kYm9keSk7XG5cblx0XHRcdHRoaXMuJGRhdGFDb250YWluZXIgPSB0aGlzLiRjb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1gKTtcblx0XHRcdHRoaXMuJG1hcmtDb3VudGVyID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kKGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUn1gKTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QgPSB0aGlzLiRkYXRhQ29udGFpbmVyLmZpbmQoYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH1gKTtcblx0XHRcdHRoaXMuJHNlYXJjaElucHV0ID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KFxuXHRcdFx0XHRgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUfWBcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuJGhlYWQgPSB0aGlzLiRjb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRH1gKTtcblx0XHRcdHRoaXMuJGxpbmsgPSB0aGlzLiRoZWFkLmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9YCk7XG5cdFx0fVxuXG5cdFx0cHVibGljIGJ1aWxkRWxlbWVudHMoKTogdm9pZCB7XG5cdFx0XHRjb25zdCByZWdleENhdDogUmVnRXhwID0gbmV3IFJlZ0V4cChgXlxcXFxzKiR7Q0FMLmxvY2FsaXplZFJlZ2V4KENBTC5UQVJHRVRfTkFNRVNQQUNFLCAnQ2F0ZWdvcnknKX06YCwgJycpO1xuXG5cdFx0XHR0aGlzLiRzZWFyY2hJbnB1dC5vbignaW5wdXQga2V5dXAnLCAoZXZlbnQ6IEpRdWVyeS5UcmlnZ2VyZWRFdmVudCB8IEpRdWVyeS5LZXlVcEV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0XHRcdGNvbnN0IG9sZFZhbDogc3RyaW5nID0gY3VycmVudFRhcmdldC52YWx1ZTtcblx0XHRcdFx0Y29uc3QgbmV3VmFsOiBzdHJpbmcgPSBvbGRWYWwucmVwbGFjZShyZWdleENhdCwgJycpO1xuXHRcdFx0XHRpZiAobmV3VmFsICE9PSBvbGRWYWwpIHtcblx0XHRcdFx0XHRjdXJyZW50VGFyZ2V0LnZhbHVlID0gbmV3VmFsO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgaW5pdEF1dG9jb21wbGV0ZSA9ICgpOiB2b2lkID0+IHtcblx0XHRcdFx0aWYgKENBTC5pc0F1dG9Db21wbGV0ZUluaXQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Q0FMLmlzQXV0b0NvbXBsZXRlSW5pdCA9IHRydWU7XG5cblx0XHRcdFx0dGhpcy4kc2VhcmNoSW5wdXQuYXV0b2NvbXBsZXRlKHtcblx0XHRcdFx0XHRzb3VyY2U6IChyZXF1ZXN0OiB7dGVybTogdW5rbm93bn0sIHJlc3BvbnNlOiAoYXJnOiBKUXVlcnk8c3RyaW5nPikgPT4gdm9pZCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdvcGVuc2VhcmNoJyxcblx0XHRcdFx0XHRcdFx0XHRuYW1lc3BhY2U6IENBTC5UQVJHRVRfTkFNRVNQQUNFLFxuXHRcdFx0XHRcdFx0XHRcdHJlZGlyZWN0czogJ3Jlc29sdmUnLFxuXHRcdFx0XHRcdFx0XHRcdHNlYXJjaDogcmVxdWVzdC50ZXJtLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQocmVzdWx0KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdFsxXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2UoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQocmVzdWx0WzFdKS5tYXAoKF9pbmRleDogbnVtYmVyLCBpdGVtOiBzdHJpbmcpOiBzdHJpbmcgPT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtLnJlcGxhY2UocmVnZXhDYXQsICcnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRteTogJ3JpZ2h0IGJvdHRvbScsXG5cdFx0XHRcdFx0XHRhdDogJ3JpZ2h0IHRvcCcsXG5cdFx0XHRcdFx0XHRvZjogdGhpcy4kc2VhcmNoSW5wdXQsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRhcHBlbmRUbzogYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSfWAsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHRcdHRoaXMuJGxpbmsub24oJ2NsaWNrJywgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHQkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEKTtcblx0XHRcdFx0aW5pdEF1dG9jb21wbGV0ZSgpO1xuXHRcdFx0XHR0aGlzLnJ1bigpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgaW5pdFNldHRpbmdzKCk6IHZvaWQge1xuXHRcdFx0bGV0IGNhdEFMb3RQcmVmczogdHlwZW9mIENBTC5zZXR0aW5ncyA9IHdpbmRvdy5DYXRBTG90UHJlZnMgPz8ge307XG5cdFx0XHRjb25zdCB0eXBlT2ZDYXRBTG90UHJlZnMgPSB0eXBlb2YgY2F0QUxvdFByZWZzO1xuXHRcdFx0aWYgKCh0eXBlT2ZDYXRBTG90UHJlZnMgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGNhdEFMb3RQcmVmcykpIHx8IHR5cGVPZkNhdEFMb3RQcmVmcyAhPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Y2F0QUxvdFByZWZzID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3Qgc2V0dGluZ0tleSBvZiBPYmplY3Qua2V5cyhDQUwuREVGQVVMVF9TRVRUSU5HKSBhcyAoa2V5b2YgU2V0dGluZylbXSkge1xuXHRcdFx0XHRjb25zdCBzZXR0aW5nID0gQ0FMLkRFRkFVTFRfU0VUVElOR1tzZXR0aW5nS2V5XTtcblxuXHRcdFx0XHRDQUwuc2V0dGluZ3Nbc2V0dGluZ0tleV0gPSBjYXRBTG90UHJlZnNbc2V0dGluZ0tleV0gPz8gc2V0dGluZy5kZWZhdWx0O1xuXG5cdFx0XHRcdGlmICghc2V0dGluZy5zZWxlY3RfaTE4bikge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2V0dGluZy5zZWxlY3QgPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCBtZXNzYWdlS2V5IG9mIE9iamVjdC5rZXlzKHNldHRpbmcuc2VsZWN0X2kxOG4pKSB7XG5cdFx0XHRcdFx0Y29uc3QgbWVzc2FnZTogc3RyaW5nID0gc2V0dGluZy5zZWxlY3RfaTE4blttZXNzYWdlS2V5XSBhcyBrZXlvZiB0eXBlb2Ygc2V0dGluZy5zZWxlY3RfaTE4bjtcblx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0c2V0dGluZy5zZWxlY3RbQ0FMLm1zZyhtZXNzYWdlS2V5IGFzIG5ldmVyKV0gPSBtZXNzYWdlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgbXNnKGtleTogTWVzc2FnZUtleSBleHRlbmRzIGBjYXQtYS1sb3QtJHtpbmZlciBQfWAgPyBQIDogbmV2ZXIsIC4uLmFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nIHtcblx0XHRcdGNvbnN0IGZ1bGxLZXk6IHN0cmluZyA9IGBjYXQtYS1sb3QtJHtrZXl9YDtcblx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRyZXR1cm4gYXJncy5sZW5ndGggPyBtdy5tZXNzYWdlKGZ1bGxLZXksIC4uLmFyZ3MpLnBhcnNlKCkgOiBtdy5tZXNzYWdlKGZ1bGxLZXkpLnBsYWluKCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgc3RhdGljIGxvY2FsaXplZFJlZ2V4KG5hbWVzcGFjZU51bWJlcjogbnVtYmVyLCBmYWxsYmFjazogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRcdC8vIENvcGllZCBmcm9tIEhvdENhdCwgdGhhbmtzIEx1cG8uXG5cdFx0XHRjb25zdCB3aWtpVGV4dEJsYW5rOiBzdHJpbmcgPVxuXHRcdFx0XHQnW1xcXFx0IF9cXFxceEEwXFxcXHUxNjgwXFxcXHUxODBFXFxcXHUyMDAwLVxcXFx1MjAwQVxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MjAyRlxcXFx1MjA1RlxcXFx1MzAwMF0rJztcblx0XHRcdGNvbnN0IHdpa2lUZXh0QmxhbmtSRTogUmVnRXhwID0gbmV3IFJlZ0V4cCh3aWtpVGV4dEJsYW5rLCAnZycpO1xuXHRcdFx0Y29uc3QgY3JlYXRlUmVnZXhTdHIgPSAobmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nID0+IHtcblx0XHRcdFx0aWYgKCFuYW1lPy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHJlZ2V4TmFtZTogc3RyaW5nID0gJyc7XG5cdFx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgaW5pdGlhbDogc3RyaW5nID0gbmFtZS5zbGljZShpLCBpICsgMSk7XG5cdFx0XHRcdFx0Y29uc3QgbGw6IHN0cmluZyA9IGluaXRpYWwudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRjb25zdCB1bDogc3RyaW5nID0gaW5pdGlhbC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRcdHJlZ2V4TmFtZSArPSBsbCA9PT0gdWwgPyBpbml0aWFsIDogYFske2xsfSR7dWx9XWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlZ2V4TmFtZS5yZXBsYWNlKC8oWyQoKSorLj9cXFxcXl0pL2csICdcXFxcJDEnKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgd2lraVRleHRCbGFuayk7XG5cdFx0XHR9O1xuXHRcdFx0ZmFsbGJhY2sgPSBmYWxsYmFjay50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0Y29uc3QgY2Fub25pY2FsOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBDQUwuV0dfRk9STUFUVEVEX05BTUVTUEFDRVNbbmFtZXNwYWNlTnVtYmVyXT8udG9Mb3dlckNhc2UoKTtcblx0XHRcdGxldCByZWdleFN0cmluZzogc3RyaW5nID0gY3JlYXRlUmVnZXhTdHIoY2Fub25pY2FsKTtcblx0XHRcdGlmIChmYWxsYmFjayAmJiBjYW5vbmljYWwgIT09IGZhbGxiYWNrKSB7XG5cdFx0XHRcdHJlZ2V4U3RyaW5nICs9IGB8JHtjcmVhdGVSZWdleFN0cihmYWxsYmFjayl9YDtcblx0XHRcdH1cblx0XHRcdGZvciAoY29uc3QgY2F0TmFtZSBvZiBPYmplY3Qua2V5cyhDQUwuV0dfTkFNRVNQQUNFX0lEUykpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGNhdE5hbWUudG9Mb3dlckNhc2UoKSAhPT0gY2Fub25pY2FsICYmXG5cdFx0XHRcdFx0Y2F0TmFtZS50b0xvd2VyQ2FzZSgpICE9PSBmYWxsYmFjayAmJlxuXHRcdFx0XHRcdENBTC5XR19OQU1FU1BBQ0VfSURTW2NhdE5hbWVdID09PSBuYW1lc3BhY2VOdW1iZXJcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmVnZXhTdHJpbmcgKz0gYHwke2NyZWF0ZVJlZ2V4U3RyKGNhdE5hbWUpfWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBgKD86JHtyZWdleFN0cmluZ30pYDtcblx0XHR9XG5cdFx0cHJpdmF0ZSB1cGRhdGVTZWxlY3Rpb25Db3VudGVyKCk6IHZvaWQge1xuXHRcdFx0Q0FMLiRzZWxlY3RlZExhYmVscyA9IENBTC4kbGFiZWxzLmZpbHRlcihgLiR7Q0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRH1gKTtcblx0XHRcdHRoaXMuJG1hcmtDb3VudGVyLnNob3coKS5odG1sKENBTC5tc2coJ2ZpbGVzLXNlbGVjdGVkJywgQ0FMLiRzZWxlY3RlZExhYmVscy5sZW5ndGgudG9TdHJpbmcoKSkpO1xuXHRcdH1cblx0XHRwcml2YXRlIHRvZ2dsZUFsbChzZWxlY3Q6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdENBTC4kbGFiZWxzLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQsIHNlbGVjdCk7XG5cdFx0XHR0aGlzLnVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhc3luYyBmaW5kQWxsVmFyaWFudHMoY2F0ZWdvcnk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+IHtcblx0XHRcdGlmIChDQUwudmFyaWFudENhY2hlW2NhdGVnb3J5XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJldHVybiBDQUwudmFyaWFudENhY2hlW2NhdGVnb3J5XSBhcyBzdHJpbmdbXTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW107XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRleHQ6IGNhdGVnb3J5LFxuXHRcdFx0XHR0aXRsZTogJ3RlbXAnLFxuXHRcdFx0fTtcblx0XHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiBWQVJJQU5UUykge1xuXHRcdFx0XHRjb25zdCB7cGFyc2V9ID0gYXdhaXQgQ0FMLmFwaS5wb3N0KHtcblx0XHRcdFx0XHQuLi5wYXJhbXMsXG5cdFx0XHRcdFx0dmFyaWFudCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnN0IHt0ZXh0fSA9IHBhcnNlO1xuXHRcdFx0XHRyZXN1bHRzW3Jlc3VsdHMubGVuZ3RoXSA9ICQodGV4dCkuZXEoMCkudGV4dCgpLnRyaW0oKTtcblx0XHRcdH1cblx0XHRcdC8vIERlLWR1cGxpY2F0ZVxuXHRcdFx0Q0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0gPSBbLi4ubmV3IFNldChyZXN1bHRzKV07XG5cdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhc3luYyByZWdleEJ1aWxkZXIoY2F0ZWdvcnk6IHN0cmluZyk6IFByb21pc2U8UmVnRXhwPiB7XG5cdFx0XHQvLyBCdWlsZCBhIHJlZ2V4cCBzdHJpbmcgZm9yIG1hdGNoaW5nIHRoZSBnaXZlbiBjYXRlZ29yeTpcblx0XHRcdGNvbnN0IGNhdE5hbWU6IHN0cmluZyA9IENBTC5sb2NhbGl6ZWRSZWdleChDQUwuVEFSR0VUX05BTUVTUEFDRSwgJ0NhdGVnb3J5Jyk7XG5cdFx0XHQvLyB0cmltIGxlYWRpbmcvdHJhaWxpbmcgd2hpdGVzcGFjZSBhbmQgdW5kZXJzY29yZXNcblx0XHRcdGNhdGVnb3J5ID0gY2F0ZWdvcnkucmVwbGFjZSgvXltcXHNfXSsvLCAnJykucmVwbGFjZSgvW1xcc19dKyQvLCAnJyk7XG5cdFx0XHQvLyBGaW5kIGFsbCB2YXJpYW50c1xuXHRcdFx0Y29uc3QgdmFyaWFudHM6IHN0cmluZ1tdID0gYXdhaXQgQ0FMLmZpbmRBbGxWYXJpYW50cyhjYXRlZ29yeSk7XG5cdFx0XHQvLyBlc2NhcGUgcmVnZXhwIG1ldGFjaGFyYWN0ZXJzICg9IGFueSBBU0NJSSBwdW5jdHVhdGlvbiBleGNlcHQgXylcblx0XHRcdGNvbnN0IHZhcmlhbnRSZWdFeHBzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0Zm9yIChsZXQgdmFyaWFudCBvZiB2YXJpYW50cykge1xuXHRcdFx0XHR2YXJpYW50ID0gbXcudXRpbC5lc2NhcGVSZWdFeHAodmFyaWFudCk7XG5cdFx0XHRcdC8vIGFueSBzZXF1ZW5jZSBvZiBzcGFjZXMgYW5kIHVuZGVyc2NvcmVzIHNob3VsZCBtYXRjaCBhbnkgb3RoZXJcblx0XHRcdFx0dmFyaWFudCA9IHZhcmlhbnQucmVwbGFjZSgvW1xcc19dKy9nLCAnW1xcXFxzX10rJyk7XG5cdFx0XHRcdC8vIE1ha2UgdGhlIGZpcnN0IGNoYXJhY3RlciBjYXNlLWluc2Vuc2l0aXZlOlxuXHRcdFx0XHRjb25zdCBmaXJzdDogc3RyaW5nID0gdmFyaWFudC5zbGljZSgwLCAxKTtcblx0XHRcdFx0aWYgKGZpcnN0LnRvVXBwZXJDYXNlKCkgIT09IGZpcnN0LnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdFx0XHR2YXJpYW50ID0gYFske2ZpcnN0LnRvVXBwZXJDYXNlKCl9JHtmaXJzdC50b0xvd2VyQ2FzZSgpfV0ke3ZhcmlhbnQuc2xpY2UoMSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXJpYW50UmVnRXhwc1t2YXJpYW50UmVnRXhwcy5sZW5ndGhdID0gdmFyaWFudDtcblx0XHRcdH1cblx0XHRcdC8vIENvbXBpbGUgaXQgaW50byBhIFJlZ0V4cCB0aGF0IG1hdGNoZXMgTWVkaWFXaWtpIGNhdGVnb3J5IHN5bnRheCAoeWVhaCwgaXQgbG9va3MgdWdseSk6XG5cdFx0XHQvLyBYWFg6IHRoZSBmaXJzdCBjYXB0dXJpbmcgcGFyZW5zIGFyZSBhc3N1bWVkIHRvIG1hdGNoIHRoZSBzb3J0a2V5LCBpZiBwcmVzZW50LCBpbmNsdWRpbmcgdGhlIHwgYnV0IGV4Y2x1ZGluZyB0aGUgXV1cblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcW1tcXFxcc19dKiR7Y2F0TmFtZX1bXFxcXHNfXSo6W1xcXFxzX10qKD86JHt2YXJpYW50UmVnRXhwcy5qb2luKFxuXHRcdFx0XHRcdCd8J1xuXHRcdFx0XHQpfSlbXFxcXHNfXSooXFxcXHxbXlxcXFxdXSooPzpcXFxcXVteXFxcXF1dKykqKT9cXFxcXVxcXFxdYCxcblx0XHRcdFx0J2cnXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgZG9BUElDYWxsKFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdHBhcmFtczogUmVjb3JkPHN0cmluZywgYW55Pixcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHRjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZFxuXHRcdCkge1xuXHRcdFx0cGFyYW1zWydmb3JtYXQnXSA9ICdqc29uJztcblx0XHRcdHBhcmFtc1snZm9ybWF0dmVyc2lvbiddID0gJzInO1xuXHRcdFx0bGV0IGk6IG51bWJlciA9IDA7XG5cdFx0XHRjb25zdCBkb0NhbGwgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdGNvbnN0IGhhbmRsZUVycm9yID0gKGVycm9yOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRtdy5sb2cuZXJyb3IoJ1tDYXQtYS1sb3RdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0XHRcdGlmIChpIDwgNCkge1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dChkb0NhbGwsIDMwMCk7XG5cdFx0XHRcdFx0XHRpKys7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwYXJhbXNbJ3RpdGxlJ10pIHtcblx0XHRcdFx0XHRcdENBTC5jb25uZWN0aW9uRXJyb3JbQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGhdID0gcGFyYW1zWyd0aXRsZSddIGFzIHN0cmluZztcblx0XHRcdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0Q0FMLmFwaS5wb3N0KHBhcmFtcykudGhlbihjYWxsYmFjaykuY2F0Y2goaGFuZGxlRXJyb3IpO1xuXHRcdFx0fTtcblx0XHRcdGRvQ2FsbCgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIG1hcmtBc0RvbmUoXG5cdFx0XHQkbWFya2VkTGFiZWw6IEpRdWVyeSxcblx0XHRcdHRhcmdldENhdGVnb3J5OiBzdHJpbmcsXG5cdFx0XHRtb2RlOiAnYWRkJyB8ICdjb3B5JyB8ICdtb3ZlJyB8ICdyZW1vdmUnXG5cdFx0KTogdm9pZCB7XG5cdFx0XHQkbWFya2VkTGFiZWwuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9ET05FKTtcblxuXHRcdFx0c3dpdGNoIChtb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ2FkZCc6XG5cdFx0XHRcdFx0JG1hcmtlZExhYmVsLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnYWRkZWQtY2F0JywgdGFyZ2V0Q2F0ZWdvcnkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY29weSc6XG5cdFx0XHRcdFx0JG1hcmtlZExhYmVsLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnY29waWVkLWNhdCcsIHRhcmdldENhdGVnb3J5KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ21vdmUnOlxuXHRcdFx0XHRcdCRtYXJrZWRMYWJlbC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ21vdmVkLWNhdCcsIHRhcmdldENhdGVnb3J5KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JlbW92ZSc6XG5cdFx0XHRcdFx0JG1hcmtlZExhYmVsLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygncmVtb3ZlZC1jYXQnLCB0YXJnZXRDYXRlZ29yeSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIHN0YXRpYyBkb0NsZWFudXAodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRcdHJldHVybiBDQUwuc2V0dGluZ3MuZG9jbGVhbnVwID8gdGV4dC5yZXBsYWNlKC97e1xccypbQ2NdaGVjayBjYXRlZ29yaWVzXFxzKihcXHw/Lio/KX19LywgJycpIDogdGV4dDtcblx0XHR9IC8vIFJlbW92ZSB7e1VuY2F0ZWdvcml6ZWR9fSAoYWxzbyB3aXRoIGNvbW1lbnQpLiBObyBuZWVkIHRvIHJlcGxhY2UgaXQgd2l0aCBhbnl0aGluZ1xuXHRcdHByaXZhdGUgc3RhdGljIHJlbW92ZVVuY2F0KHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKC9cXHtcXHtcXHMqW1V1XW5jYXRlZ29yaXplZFxccyooXFx8Py4qPylcXH1cXH0vLCAnJyk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZGlzcGxheVJlc3VsdCgpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKHtcblx0XHRcdFx0Y3Vyc29yOiAnJyxcblx0XHRcdFx0b3ZlcmZsb3c6ICcnLFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLiRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUVfRkVFREJBQ0t9YCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FKTtcblxuXHRcdFx0Y29uc3QgJHBhcmVudDogSlF1ZXJ5ID0gQ0FMLiRjb3VudGVyLnBhcmVudCgpO1xuXHRcdFx0JHBhcmVudC5odG1sKDxoMz57Q0FMLm1zZygnZG9uZScpfTwvaDM+KTtcblx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdHtDQUwubXNnKCdhbGwtZG9uZScpfVxuXHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCk7XG5cblx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdENBTC4kcHJvZ3Jlc3NEaWFsb2cucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZUFsbChmYWxzZSk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHtDQUwubXNnKCdyZXR1cm4tdG8tcGFnZScpfVxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoQ0FMLmFscmVhZHlUaGVyZS5sZW5ndGgpIHtcblx0XHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdDxoNT57Q0FMLm1zZygnc2tpcHBlZC1hbHJlYWR5JywgQ0FMLmFscmVhZHlUaGVyZS5sZW5ndGgudG9TdHJpbmcoKSl9PC9oNT5cblx0XHRcdFx0XHRcdHtDQUwuYWxyZWFkeVRoZXJlLnJlZHVjZShcblx0XHRcdFx0XHRcdFx0KHByZSwgY3VyLCBpbmRleCkgPT5cblx0XHRcdFx0XHRcdFx0XHRpbmRleCA8IENBTC5hbHJlYWR5VGhlcmUubGVuZ3RoIC0gMSA/IFsuLi5wcmUsIGN1ciwgPGJyIGtleT17aW5kZXh9IC8+XSA6IFsuLi5wcmUsIGN1cl0sXG5cdFx0XHRcdFx0XHRcdFtdIGFzIChzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQpW11cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoQ0FMLm5vdEZvdW5kLmxlbmd0aCkge1xuXHRcdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGg1PntDQUwubXNnKCdza2lwcGVkLW5vdC1mb3VuZCcsIENBTC5ub3RGb3VuZC5sZW5ndGgudG9TdHJpbmcoKSl9PC9oNT5cblx0XHRcdFx0XHRcdHtDQUwubm90Rm91bmQucmVkdWNlKFxuXHRcdFx0XHRcdFx0XHQocHJlLCBjdXIsIGluZGV4KSA9PlxuXHRcdFx0XHRcdFx0XHRcdGluZGV4IDwgQ0FMLm5vdEZvdW5kLmxlbmd0aCAtIDEgPyBbLi4ucHJlLCBjdXIsIDxiciBrZXk9e2luZGV4fSAvPl0gOiBbLi4ucHJlLCBjdXJdLFxuXHRcdFx0XHRcdFx0XHRbXSBhcyAoc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50KVtdXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKENBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8aDU+e0NBTC5tc2coJ3NraXBwZWQtc2VydmVyJywgQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGgudG9TdHJpbmcoKSl9PC9oNT5cblx0XHRcdFx0XHRcdHtDQUwuY29ubmVjdGlvbkVycm9yLnJlZHVjZShcblx0XHRcdFx0XHRcdFx0KHByZSwgY3VyLCBpbmRleCkgPT5cblx0XHRcdFx0XHRcdFx0XHRpbmRleCA8IENBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoIC0gMVxuXHRcdFx0XHRcdFx0XHRcdFx0PyBbLi4ucHJlLCBjdXIsIDxiciBrZXk9e2luZGV4fSAvPl1cblx0XHRcdFx0XHRcdFx0XHRcdDogWy4uLnByZSwgY3VyXSxcblx0XHRcdFx0XHRcdFx0W10gYXMgKHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudClbXVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSB1cGRhdGVDb3VudGVyKCk6IHZvaWQge1xuXHRcdFx0Q0FMLmNvdW50ZXJDdXJyZW50Kys7XG5cdFx0XHRpZiAoQ0FMLmNvdW50ZXJDdXJyZW50ID4gQ0FMLmNvdW50ZXJOZWVkZWQpIHtcblx0XHRcdFx0dGhpcy5kaXNwbGF5UmVzdWx0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRDQUwuJGNvdW50ZXIudGV4dChDQUwuY291bnRlckN1cnJlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIGFzeW5jIGVkaXRDYXRlZ29yaWVzKFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdHJlc3VsdDogUmVjb3JkPHN0cmluZywgYW55Pixcblx0XHRcdG1hcmtlZExhYmVsOiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmdldE1hcmtlZExhYmVscz5bMF0sXG5cdFx0XHR0YXJnZXRDYXRlZ29yeTogc3RyaW5nLFxuXHRcdFx0bW9kZTogJ2FkZCcgfCAnY29weScgfCAnbW92ZScgfCAncmVtb3ZlJ1xuXHRcdCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdFx0Y29uc3QgW21hcmtlZExhYmVsVGl0bGUsICRtYXJrZWRMYWJlbF0gPSBtYXJrZWRMYWJlbDtcblxuXHRcdFx0aWYgKCFyZXN1bHQ/LlsncXVlcnknXSkge1xuXHRcdFx0XHRDQUwuY29ubmVjdGlvbkVycm9yW0NBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoXSA9IG1hcmtlZExhYmVsVGl0bGU7XG5cdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGxldCBvcmlnaW5UZXh0OiBzdHJpbmcgPSAnJztcblx0XHRcdGxldCBzdGFydHRpbWVzdGFtcDogbnVtYmVyID0gMDtcblx0XHRcdGxldCB0aW1lc3RhbXA6IG51bWJlciA9IDA7XG5cdFx0XHRDQUwuZWRpdFRva2VuID0gcmVzdWx0WydxdWVyeSddLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRjb25zdCB7cGFnZXN9ID0gcmVzdWx0WydxdWVyeSddO1xuXG5cdFx0XHRjb25zdCBbcGFnZV0gPSBwYWdlcztcblx0XHRcdG9yaWdpblRleHQgPSBwYWdlLnJldmlzaW9uc1swXS5jb250ZW50O1xuXHRcdFx0KHtzdGFydHRpbWVzdGFtcH0gPSBwYWdlKTtcblx0XHRcdFt7dGltZXN0YW1wfV0gPSBwYWdlLnJldmlzaW9ucztcblxuXHRcdFx0Y29uc3Qgc291cmNlY2F0OiBzdHJpbmcgPSBDQUwuQ1VSUkVOVF9DQVRFR1JPWTtcblx0XHRcdC8vIENoZWNrIGlmIHRoYXQgZmlsZSBpcyBhbHJlYWR5IGluIHRoYXQgY2F0ZWdvcnlcblx0XHRcdGNvbnN0IHRhcmdlUmVnRXhwID0gYXdhaXQgQ0FMLnJlZ2V4QnVpbGRlcih0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRpZiAobW9kZSAhPT0gJ3JlbW92ZScgJiYgdGFyZ2VSZWdFeHAudGVzdChvcmlnaW5UZXh0KSAmJiBtb2RlICE9PSAnbW92ZScpIHtcblx0XHRcdFx0Q0FMLmFscmVhZHlUaGVyZVtDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aF0gPSBtYXJrZWRMYWJlbFRpdGxlO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGaXggdGV4dFxuXHRcdFx0bGV0IHRleHQ6IHN0cmluZyA9IG9yaWdpblRleHQ7XG5cdFx0XHRsZXQgc3VtbWFyeTogc3RyaW5nO1xuXHRcdFx0Y29uc3Qgc291cmNlQ2F0UmVnRXhwID0gYXdhaXQgQ0FMLnJlZ2V4QnVpbGRlcihzb3VyY2VjYXQpO1xuXHRcdFx0c3dpdGNoIChtb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ2FkZCc6XG5cdFx0XHRcdFx0dGV4dCArPSBgXFxuW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9XV1cXG5gO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LWFkZCcpLnJlcGxhY2UoJyQxJywgdGFyZ2V0Q2F0ZWdvcnkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjb3B5Jzpcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0c291cmNlQ2F0UmVnRXhwLFxuXHRcdFx0XHRcdFx0YFtbJHtDQUwubG9jYWxDYXROYW1lfToke3NvdXJjZWNhdH0kMV1dXFxuW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9JDFdXWBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LWNvcHknKS5yZXBsYWNlKCckMScsIHNvdXJjZWNhdCkucmVwbGFjZSgnJDInLCB0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRcdFx0Ly8gSWYgY2F0ZWdvcnkgaXMgYWRkZWQgdGhyb3VnaCB0ZW1wbGF0ZTpcblx0XHRcdFx0XHRpZiAob3JpZ2luVGV4dCA9PT0gdGV4dCkge1xuXHRcdFx0XHRcdFx0dGV4dCArPSBgXFxuW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9XV1gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbW92ZSc6XG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShzb3VyY2VDYXRSZWdFeHAsIGBbWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX0kMV1dYCk7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IENBTC5tc2coJ3N1bW1hcnktbW92ZScpLnJlcGxhY2UoJyQxJywgc291cmNlY2F0KS5yZXBsYWNlKCckMicsIHRhcmdldENhdGVnb3J5KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmVtb3ZlJzpcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKHNvdXJjZUNhdFJlZ0V4cCwgJycpO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LXJlbW92ZScpLnJlcGxhY2UoJyQxJywgc291cmNlY2F0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRleHQgPT09IG9yaWdpblRleHQpIHtcblx0XHRcdFx0Q0FMLm5vdEZvdW5kW0NBTC5ub3RGb3VuZC5sZW5ndGhdID0gbWFya2VkTGFiZWxUaXRsZTtcblx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVtb3ZlIHVuY2F0IGFmdGVyIHdlIGNoZWNrZWQgd2hldGhlciB3ZSBjaGFuZ2VkIHRoZSB0ZXh0IHN1Y2Nlc3NmdWxseS5cblx0XHRcdC8vIE90aGVyd2lzZSB3ZSBtaWdodCBmYWlsIHRvIGRvIHRoZSBjaGFuZ2VzLCBidXQgc3RpbGwgcmVwbGFjZSB7e3VuY2F0fX1cblx0XHRcdGlmIChtb2RlICE9PSAncmVtb3ZlJykge1xuXHRcdFx0XHR0ZXh0ID0gQ0FMLmRvQ2xlYW51cChDQUwucmVtb3ZlVW5jYXQodGV4dCkpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRcdHRva2VuOiBDQUwuZWRpdFRva2VuLFxuXHRcdFx0XHRcdHRhZ3M6IENBTC5BUElfVEFHLFxuXHRcdFx0XHRcdHRpdGxlOiBtYXJrZWRMYWJlbFRpdGxlLFxuXHRcdFx0XHRcdGFzc2VydDogJ3VzZXInLFxuXHRcdFx0XHRcdGJvdDogdHJ1ZSxcblx0XHRcdFx0XHRiYXNldGltZXN0YW1wOiB0aW1lc3RhbXAsXG5cdFx0XHRcdFx0d2F0Y2hsaXN0OiBDQUwuc2V0dGluZ3Mud2F0Y2hsaXN0LFxuXHRcdFx0XHRcdHRleHQsXG5cdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRzdGFydHRpbWVzdGFtcCxcblx0XHRcdFx0fSxcblx0XHRcdFx0KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0XHRDQUwubWFya0FzRG9uZSgkbWFya2VkTGFiZWwsIHRhcmdldENhdGVnb3J5LCBtb2RlKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBnZXRDb250ZW50KFxuXHRcdFx0bWFya2VkTGFiZWw6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPlswXSxcblx0XHRcdHRhcmdldENhdGVnb3J5OiBzdHJpbmcsXG5cdFx0XHRtb2RlOiAnYWRkJyB8ICdjb3B5JyB8ICdtb3ZlJ1xuXHRcdCk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdFx0dGl0bGVzOiBtYXJrZWRMYWJlbFswXSxcblx0XHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0XHRydnByb3A6ICdjb250ZW50fHRpbWVzdGFtcCcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudFxuXHRcdFx0XHRcdHZvaWQgdGhpcy5lZGl0Q2F0ZWdvcmllcyhyZXN1bHQsIG1hcmtlZExhYmVsLCB0YXJnZXRDYXRlZ29yeSwgbW9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgc3RhdGljIGdldFRpdGxlRnJvbUxpbmsoaHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJldHVybiAoZGVjb2RlVVJJQ29tcG9uZW50KGhyZWYgPz8gJycpLm1hdGNoKC93aWtpXFwvKC4rPykoPzojLispPyQvKT8uWzFdID8/ICcnKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIGdldE1hcmtlZExhYmVscygpOiBbc3RyaW5nLCBKUXVlcnldW10ge1xuXHRcdFx0Y29uc3QgbWFya2VkTGFiZWxzOiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmdldE1hcmtlZExhYmVscz4gPSBbXTtcblx0XHRcdENBTC4kc2VsZWN0ZWRMYWJlbHMgPSBDQUwuJGxhYmVscy5maWx0ZXIoYC4ke0NMQVNTX05BTUVfTEFCRUxfU0VMRUNURUR9YCk7XG5cdFx0XHRDQUwuJHNlbGVjdGVkTGFiZWxzLmVhY2goKF9pbmRleDogbnVtYmVyLCBsYWJlbDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3QgJGxhYmVsOiBKUXVlcnkgPSAkKGxhYmVsKTtcblx0XHRcdFx0Y29uc3QgJGxhYmVsTGluazogSlF1ZXJ5ID0gJGxhYmVsLmZpbmQoJ2FbdGl0bGVdJyk7XG5cdFx0XHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgPVxuXHRcdFx0XHRcdCRsYWJlbExpbmsuYXR0cigndGl0bGUnKSB8fFxuXHRcdFx0XHRcdENBTC5nZXRUaXRsZUZyb21MaW5rKCRsYWJlbExpbmsuYXR0cignaHJlZicpKSB8fFxuXHRcdFx0XHRcdENBTC5nZXRUaXRsZUZyb21MaW5rKCRsYWJlbC5maW5kKCdhJykuYXR0cignaHJlZicpKTtcblx0XHRcdFx0bWFya2VkTGFiZWxzW21hcmtlZExhYmVscy5sZW5ndGhdID0gW3RpdGxlLCAkbGFiZWxdO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbWFya2VkTGFiZWxzO1xuXHRcdH1cblx0XHRwcml2YXRlIHNob3dQcm9ncmVzcygpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKHtcblx0XHRcdFx0Y3Vyc29yOiAnd2FpdCcsXG5cdFx0XHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblx0XHRcdH0pO1xuXHRcdFx0Q0FMLiRwcm9ncmVzc0RpYWxvZyA9ICQoXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0e0NBTC5tc2coJ2VkaXRpbmcnKX1cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSfT57Q0FMLmNvdW50ZXJDdXJyZW50fTwvc3Bhbj5cblx0XHRcdFx0XHR7W0NBTC5tc2coJ29mJyksIENBTC5jb3VudGVyTmVlZGVkXX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpLmRpYWxvZyh7XG5cdFx0XHRcdGRpYWxvZ0NsYXNzOiBDTEFTU19OQU1FX0ZFRURCQUNLLFxuXHRcdFx0XHRtaW5IZWlnaHQ6IDkwLFxuXHRcdFx0XHRoZWlnaHQ6IDkwLFxuXHRcdFx0XHR3aWR0aDogNDUwLFxuXHRcdFx0XHRtb2RhbDogdHJ1ZSxcblx0XHRcdFx0Y2xvc2VPbkVzY2FwZTogZmFsc2UsXG5cdFx0XHRcdGRyYWdnYWJsZTogZmFsc2UsXG5cdFx0XHRcdHJlc2l6YWJsZTogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9GRUVEQkFDS30gLnVpLWRpYWxvZy10aXRsZWJhcmApLmhpZGUoKTtcblx0XHRcdHRoaXMuJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9GRUVEQkFDS30gLnVpLWRpYWxvZy1jb250ZW50YCkuaGVpZ2h0KCdhdXRvJyk7XG5cdFx0XHRDQUwuJGNvdW50ZXIgPSB0aGlzLiRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSfWApO1xuXHRcdH1cblx0XHRwcml2YXRlIGRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5OiBzdHJpbmcsIG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnKTogdm9pZCB7XG5cdFx0XHRjb25zdCBtYXJrZWRMYWJlbHM6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPiA9IHRoaXMuZ2V0TWFya2VkTGFiZWxzKCk7XG5cdFx0XHRpZiAoIW1hcmtlZExhYmVscy5sZW5ndGgpIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoQ0FMLm1zZygnbm9uZS1zZWxlY3RlZCcpLCB7XG5cdFx0XHRcdFx0dGFnOiAnY2F0QUxvdCcsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRDQUwuYWxyZWFkeVRoZXJlID0gW107XG5cdFx0XHRDQUwuY29ubmVjdGlvbkVycm9yID0gW107XG5cdFx0XHRDQUwubm90Rm91bmQgPSBbXTtcblx0XHRcdENBTC5jb3VudGVyQ3VycmVudCA9IDE7XG5cdFx0XHRDQUwuY291bnRlck5lZWRlZCA9IG1hcmtlZExhYmVscy5sZW5ndGg7XG5cdFx0XHR0aGlzLnNob3dQcm9ncmVzcygpO1xuXHRcdFx0Zm9yIChjb25zdCBtYXJrZWRMYWJlbCBvZiBtYXJrZWRMYWJlbHMpIHtcblx0XHRcdFx0dGhpcy5nZXRDb250ZW50KG1hcmtlZExhYmVsLCB0YXJnZXRDYXRlZ29yeSwgbW9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgYWRkSGVyZSh0YXJnZXRDYXRlZ29yeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5LCAnYWRkJyk7XG5cdFx0fVxuXHRcdHByaXZhdGUgY29weUhlcmUodGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb1NvbWV0aGluZyh0YXJnZXRDYXRlZ29yeSwgJ2NvcHknKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBtb3ZlSGVyZSh0YXJnZXRDYXRlZ29yeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5LCAnbW92ZScpO1xuXHRcdH1cblx0XHRwcml2YXRlIGNyZWF0ZUNhdExpbmtzKHN5bWJvbDogc3RyaW5nLCBjYXRlZ29yaWVzOiBzdHJpbmdbXSk6IHZvaWQge1xuXHRcdFx0Y2F0ZWdvcmllcy5zb3J0KCk7XG5cdFx0XHRmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcblx0XHRcdFx0Y29uc3QgJHRyID0gJChcblx0XHRcdFx0XHQ8dHIgZGF0YXNldD17e2NhdGVnb3J5fX0+XG5cdFx0XHRcdFx0XHQ8dGQ+e3N5bWJvbH08L3RkPlxuXHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVDYXRzKCRlbGVtZW50LmNsb3Nlc3QoJ3RyJykuZGF0YSgnY2F0ZWdvcnknKSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7Y2F0ZWdvcnl9XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0KTtcblx0XHRcdFx0Ly8gQ2FuJ3QgbW92ZSB0byBzb3VyY2UgY2F0ZWdvcnlcblx0XHRcdFx0aWYgKGNhdGVnb3J5ICE9PSBDQUwuQ1VSUkVOVF9DQVRFR1JPWSAmJiBDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdFx0JHRyLmFwcGVuZChcblx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT059XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmFkZEhlcmUoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdhZGQnKX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNhdGVnb3J5ICE9PSBDQUwuQ1VSUkVOVF9DQVRFR1JPWSAmJiAhQ0FMLmlzU2VhcmNoTW9kZSkge1xuXHRcdFx0XHRcdCR0ci5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTn1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuY29weUhlcmUoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdjb3B5Jyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTn1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubW92ZUhlcmUoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdtb3ZlJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmZpbmQoJ3RhYmxlJykuYXBwZW5kKCR0cik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgc2hvd0NhdGVnb3J5TGlzdCgpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKCdjdXJzb3InLCAnJyk7XG5cdFx0XHRjb25zdCBjdXJyZW50Q2F0ZWdvcmllczogc3RyaW5nW10gPSBbQ0FMLmN1cnJlbnRDYXRlZ29yeV07XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmVtcHR5KCk7XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmFwcGVuZCg8dGFibGUgLz4pO1xuXHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaRJywgQ0FMLnBhcmVudENhdHMpO1xuXHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaSJywgY3VycmVudENhdGVnb3JpZXMpO1xuXHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaTJywgQ0FMLnN1YkNhdHMpO1xuXHRcdFx0Ly8gUmVzZXQgd2lkdGhcblx0XHRcdHRoaXMuJGNvbnRhaW5lci53aWR0aCgnJyk7XG5cdFx0XHR0aGlzLiRjb250YWluZXIuaGVpZ2h0KCcnKTtcblx0XHRcdHRoaXMuJGNvbnRhaW5lci53aWR0aChNYXRoLm1pbigodGhpcy4kY29udGFpbmVyLndpZHRoKCkgPz8gMCkgKiAxLjEgKyAxNSwgKCQod2luZG93KS53aWR0aCgpID8/IDApIC0gMTApKTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuY3NzKHtcblx0XHRcdFx0J21heC1oZWlnaHQnOiBgJHtDQUwuZGlhbG9nSGVpZ2h0fXB4YCxcblx0XHRcdFx0aGVpZ2h0OiAnJyxcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldFBhcmVudENhdHMoKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHR0aXRsZXM6IGBDYXRlZ29yeToke0NBTC5jdXJyZW50Q2F0ZWdvcnl9YCxcblx0XHRcdFx0XHRwcm9wOiAnY2F0ZWdvcmllcycsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRDQUwucGFyZW50Q2F0cyA9IFtdO1xuXHRcdFx0XHRcdGNvbnN0IHtwYWdlc30gPSByZXN1bHQucXVlcnk7XG5cdFx0XHRcdFx0aWYgKHBhZ2VzWzBdPy5taXNzaW5nKSB7XG5cdFx0XHRcdFx0XHR0aGlzLiRib2R5LmNzcygnY3Vyc29yJywgJycpO1xuXHRcdFx0XHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5odG1sKFxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORH0+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2NhdC1ub3QtZm91bmQnKX1cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHRoaXMuY3JlYXRlQ2F0TGlua3MoJ+KGkicsIFtDQUwuY3VycmVudENhdGVnb3J5XSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxldCBjYXRlZ29yaWVzOiB7dGl0bGU6IHN0cmluZ31bXSA9IFtdO1xuXHRcdFx0XHRcdFt7Y2F0ZWdvcmllc31dID0gcGFnZXM7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBjYXQgb2YgY2F0ZWdvcmllcykge1xuXHRcdFx0XHRcdFx0Q0FMLnBhcmVudENhdHNbQ0FMLnBhcmVudENhdHMubGVuZ3RoXSA9IGNhdC50aXRsZS5yZXBsYWNlKC9eW146XSs6LywgJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRDQUwuY291bnRlckNhdCsrO1xuXHRcdFx0XHRcdGlmIChDQUwuY291bnRlckNhdCA9PT0gMikge1xuXHRcdFx0XHRcdFx0dGhpcy5zaG93Q2F0ZWdvcnlMaXN0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldFN1YkNhdHMoKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRsaXN0OiAnY2F0ZWdvcnltZW1iZXJzJyxcblx0XHRcdFx0XHRjbXR5cGU6ICdzdWJjYXQnLFxuXHRcdFx0XHRcdGNtbGltaXQ6IENBTC5zZXR0aW5ncy5zdWJjYXRjb3VudCxcblx0XHRcdFx0XHRjbXRpdGxlOiBgQ2F0ZWdvcnk6JHtDQUwuY3VycmVudENhdGVnb3J5fWAsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRjb25zdCBjYXRzOiB7dGl0bGU6IHN0cmluZ31bXSA9IHJlc3VsdD8ucXVlcnk/LmNhdGVnb3J5bWVtYmVycyB8fCBbXTtcblx0XHRcdFx0XHRDQUwuc3ViQ2F0cyA9IFtdO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgY2F0IG9mIGNhdHMpIHtcblx0XHRcdFx0XHRcdENBTC5zdWJDYXRzW0NBTC5zdWJDYXRzLmxlbmd0aF0gPSBjYXQudGl0bGUucmVwbGFjZSgvXlteOl0rOi8sICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Q0FMLmNvdW50ZXJDYXQrKztcblx0XHRcdFx0XHRpZiAoQ0FMLmNvdW50ZXJDYXQgPT09IDIpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2hvd0NhdGVnb3J5TGlzdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBnZXRDYXRlZ29yeUxpc3QoKTogdm9pZCB7XG5cdFx0XHRDQUwuY291bnRlckNhdCA9IDA7XG5cdFx0XHR0aGlzLmdldFBhcmVudENhdHMoKTtcblx0XHRcdHRoaXMuZ2V0U3ViQ2F0cygpO1xuXHRcdH1cblx0XHRwcml2YXRlIHVwZGF0ZUNhdHMoY2F0OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKCdjdXJzb3InLCAnd2FpdCcpO1xuXHRcdFx0Q0FMLmN1cnJlbnRDYXRlZ29yeSA9IGNhdDtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuaHRtbCg8ZGl2PntDQUwubXNnKCdsb2FkaW5nJyl9PC9kaXY+KTtcblx0XHRcdHRoaXMuZ2V0Q2F0ZWdvcnlMaXN0KCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBmaW5kQWxsTGFiZWxzKCk6IHZvaWQge1xuXHRcdFx0Ly8gSXQncyBwb3NzaWJsZSB0byBhbGxvdyBhbnkga2luZCBvZiBwYWdlcyBhcyB3ZWxsIGJ1dCB3aGF0IGhhcHBlbnMgaWYgeW91IGNsaWNrIG9uIFwic2VsZWN0IGFsbFwiIGFuZCBkb24ndCBleHBlY3QgaXRcblx0XHRcdGlmIChDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdENBTC4kbGFiZWxzID0gdGhpcy4kYm9keS5maW5kKCd0YWJsZS5zZWFyY2hSZXN1bHRJbWFnZScpLmZpbmQoJ3RyPnRkJykuZXEoMSk7XG5cdFx0XHRcdGlmIChDQUwuc2V0dGluZ3MuZWRpdHBhZ2VzKSB7XG5cdFx0XHRcdFx0Q0FMLiRsYWJlbHMgPSBDQUwuJGxhYmVscy5hZGQoJ2Rpdi5tdy1zZWFyY2gtcmVzdWx0LWhlYWRpbmcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Q0FMLiRsYWJlbHMgPSB0aGlzLiRib2R5XG5cdFx0XHRcdFx0LmZpbmQoJ2Rpdi5nYWxsZXJ5dGV4dCcpXG5cdFx0XHRcdFx0LmFkZCh0aGlzLiRib2R5LmZpbmQoJ2RpdiNtdy1jYXRlZ29yeS1tZWRpYScpLmZpbmQoJ2xpW2NsYXNzIT1cImdhbGxlcnlib3hcIl0nKSk7XG5cdFx0XHRcdGlmIChDQUwuc2V0dGluZ3MuZWRpdHBhZ2VzKSB7XG5cdFx0XHRcdFx0Y29uc3QgJHBhZ2VzOiBKUXVlcnk8SFRNTExJRWxlbWVudD4gPSB0aGlzLiRib2R5XG5cdFx0XHRcdFx0XHQuZmluZCgnZGl2I213LXBhZ2VzLCBkaXYjbXctc3ViY2F0ZWdvcmllcycpXG5cdFx0XHRcdFx0XHQuZmluZCgnbGknKTtcblx0XHRcdFx0XHRDQUwuJGxhYmVscyA9IENBTC4kbGFiZWxzLmFkZCgkcGFnZXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgbWFrZUNsaWNrYWJsZSgpOiB2b2lkIHtcblx0XHRcdHRoaXMuZmluZEFsbExhYmVscygpO1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbFxuXHRcdFx0Q0FMLiRsYWJlbHNcblx0XHRcdFx0LmFkZENsYXNzKENMQVNTX05BTUVfTEFCRUwpXG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzM5XG5cdFx0XHRcdC5vbkNhdEFMb3RTaGlmdENsaWNrKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBydW4oKTogdm9pZCB7XG5cdFx0XHRpZiAodGhpcy4kbGluay5oYXNDbGFzcyhDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCkpIHtcblx0XHRcdFx0dGhpcy5tYWtlQ2xpY2thYmxlKCk7XG5cdFx0XHRcdHRoaXMuJGRhdGFDb250YWluZXIuc2hvdygpO1xuXHRcdFx0XHR0aGlzLiRjb250YWluZXIucmVzaXphYmxlKHtcblx0XHRcdFx0XHRhbHNvUmVzaXplOiB0aGlzLiRyZXN1bHRMaXN0LFxuXHRcdFx0XHRcdGhhbmRsZXM6ICduJyxcblx0XHRcdFx0XHRyZXNpemU6IChldmVudDogSlF1ZXJ5RXZlbnRPYmplY3QpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0ICRjdXJyZW50VGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSBhcyBKUXVlcnk7XG5cdFx0XHRcdFx0XHQkY3VycmVudFRhcmdldC5jc3Moe1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAnJyxcblx0XHRcdFx0XHRcdFx0dG9wOiAnJyxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0Q0FMLmRpYWxvZ0hlaWdodCA9ICRjdXJyZW50VGFyZ2V0LmhlaWdodCgpID8/IENBTC5kaWFsb2dIZWlnaHQ7XG5cdFx0XHRcdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmNzcyh7XG5cdFx0XHRcdFx0XHRcdG1heEhlaWdodDogJycsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAnJyxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmNzcygnbWF4LWhlaWdodCcsICc0NTBweCcpO1xuXHRcdFx0XHRpZiAoQ0FMLmlzU2VhcmNoTW9kZSkge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlQ2F0cygnUGljdHVyZXMgYW5kIGltYWdlcycpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlQ2F0cyhDQUwuQ1VSUkVOVF9DQVRFR1JPWSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuJGRhdGFDb250YWluZXIuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLiRjb250YWluZXIucmVzaXphYmxlKCdkZXN0cm95Jyk7XG5cdFx0XHRcdHRoaXMuJGNvbnRhaW5lci5jc3MoJ3dpZHRoJywgJycpO1xuXHRcdFx0XHRDQUwuJGxhYmVscy5vZmYoJ2NsaWNrLmNhdEFMb3QnKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoXG5cdFx0KFdHX05BTUVTUEFDRV9OVU1CRVIgPT09IC0xICYmIFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSA9PT0gJ1NlYXJjaCcpIHx8XG5cdFx0V0dfTkFNRVNQQUNFX05VTUJFUiA9PT0gT1BUSU9OUy50YXJnZXROYW1lc3BhY2Vcblx0KSB7XG5cdFx0aWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgPT09IC0xKSB7XG5cdFx0XHRDQUwuaXNTZWFyY2hNb2RlID0gdHJ1ZTtcblx0XHR9XG5cdFx0LyohIENhdC1hLWxvdCBtZXNzYWdlcyB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuXHRcdHNldE1lc3NhZ2VzKCk7XG5cdFx0dm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0XHRuZXcgQ0FMKCRib2R5KS5idWlsZEVsZW1lbnRzKCk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y2F0QUxvdH07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgbWVkaWF3aWtpL2NsYXNzLWRvYyAqL1xuaW1wb3J0IHtDTEFTU19OQU1FX0xBQkVMLCBDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQsIENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUR9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBleHRlbmRKUXVlcnlQcm90b3R5cGUgPSAoKTogdm9pZCA9PiB7XG5cdC8qISBqUXVlcnkgY2hlY2tib3hTaGlmdENsaWNrIHwgR1BMLTIuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6R1BMPiAqL1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMzOVxuXHQkLmZuLm9uQ2F0QUxvdFNoaWZ0Q2xpY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2s6ICguLi5hcmdzOiB1bmtub3duW10pID0+IHVua25vd24pOiBKUXVlcnkge1xuXHRcdGxldCBwcmV2Q2hlY2tib3g6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblxuXHRcdC8vIFdoZW4gb3VyIGJveGVzIGFyZSBjbGlja2VkLi5cblx0XHR0aGlzLm9uKCdjbGljay5jYXRBTG90JywgKGV2ZW50OiBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdC8vIFByZXZlbnQgZm9sbG93aW5nIHRoZSBsaW5rIGFuZCB0ZXh0IHNlbGVjdGlvblxuXHRcdFx0aWYgKCFldmVudC5jdHJsS2V5KSB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEhpZ2hsaWdodCBsYXN0IHNlbGVjdGVkXG5cdFx0XHR0aGlzLnBhcmVudHMoJ2JvZHknKS5maW5kKGAuJHtDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUR9YCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVEKTtcblxuXHRcdFx0bGV0ICR0aGlzQ29udHJvbCA9ICQoZXZlbnQudGFyZ2V0KSBhcyBKUXVlcnk7XG5cdFx0XHRpZiAoISR0aGlzQ29udHJvbC5oYXNDbGFzcyhDTEFTU19OQU1FX0xBQkVMKSkge1xuXHRcdFx0XHQkdGhpc0NvbnRyb2wgPSAkdGhpc0NvbnRyb2wucGFyZW50cyhgLiR7Q0xBU1NfTkFNRV9MQUJFTH1gKTtcblx0XHRcdH1cblxuXHRcdFx0JHRoaXNDb250cm9sLmFkZENsYXNzKENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCk7XG5cblx0XHRcdC8vIEFuZCBvbmUgaGFzIGJlZW4gY2xpY2tlZCBiZWZvcmUuLi5cblx0XHRcdGlmIChwcmV2Q2hlY2tib3ggJiYgZXZlbnQuc2hpZnRLZXkpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kOiAnYWRkQ2xhc3MnIHwgJ3JlbW92ZUNsYXNzJyA9ICR0aGlzQ29udHJvbC5oYXNDbGFzcyhDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEKVxuXHRcdFx0XHRcdD8gJ2FkZENsYXNzJ1xuXHRcdFx0XHRcdDogJ3JlbW92ZUNsYXNzJztcblx0XHRcdFx0Ly8gQ2hlY2sgb3IgdW5jaGVjayB0aGlzIG9uZSBhbmQgYWxsIGluLWJldHdlZW4gY2hlY2tib3hlc1xuXHRcdFx0XHR0aGlzLnNsaWNlKFxuXHRcdFx0XHRcdE1hdGgubWluKHRoaXMuaW5kZXgocHJldkNoZWNrYm94KSwgdGhpcy5pbmRleCgkdGhpc0NvbnRyb2wpKSxcblx0XHRcdFx0XHRNYXRoLm1heCh0aGlzLmluZGV4KHByZXZDaGVja2JveCksIHRoaXMuaW5kZXgoJHRoaXNDb250cm9sKSkgKyAxXG5cdFx0XHRcdClbbWV0aG9kXShDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEKTtcblx0XHRcdH1cblx0XHRcdC8vIEVpdGhlciB3YXksIHVwZGF0ZSB0aGUgcHJldkNoZWNrYm94IHZhcmlhYmxlIHRvIHRoZSBvbmUgY2xpY2tlZCBub3dcblx0XHRcdHByZXZDaGVja2JveCA9ICR0aGlzQ29udHJvbDtcblxuXHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG59O1xuXG5leHBvcnQge2V4dGVuZEpRdWVyeVByb3RvdHlwZX07XG4iLCAiaW1wb3J0IHtjYXRBTG90fSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2V4dGVuZEpRdWVyeVByb3RvdHlwZX0gZnJvbSAnLi9tb2R1bGVzL2V4dGVuZEpRdWVyeVByb3RvdHlwZSc7XG5cbi8qISBqUXVlcnkgY2hlY2tib3hTaGlmdENsaWNrIHwgR1BMLTIuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6R1BMPiAqL1xuZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlKCk7XG4vKiEgQ2F0LWEtbG90IHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG5jYXRBTG90KCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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eUJBQXlCLElBQ3ZGLGFBQ0E7QUFFSCxhQUFLbUssTUFDSm9KLEtBQUtDLElBQUksS0FBSzdFLE1BQU1pSCxZQUFZLEdBQUcsS0FBS2pILE1BQU1zSCxZQUFZLENBQUMsR0FDM0QxQyxLQUFLOEMsSUFBSSxLQUFLMUgsTUFBTWlILFlBQVksR0FBRyxLQUFLakgsTUFBTXNILFlBQVksQ0FBQyxJQUFJLENBQ2hFLEVBQUVHLE1BQU0sRUFBRXBXLHlCQUF5QjtNQUNwQztBQUVBNFYscUJBQWVLO0FBRWYsVUFBSSxPQUFPbEosYUFBYSxZQUFZO0FBQ25DQSxpQkFBUztNQUNWO0lBQ0QsQ0FBQztBQUVELFdBQU87RUFDUjtBQUNEOztBQzVDQTtBQUNBMkksc0JBQXNCO0FBQ3RCO0FBQ0F2VCxRQUFROyIsCiAgIm5hbWVzIjogWyJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgInZlcnNpb24iLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJTeW1ib2wiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImRvY3VtZW50IiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlR5cGVFcnJvciIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiU2V0IiwgIm1vZHVsZSIsICJTZXQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiU2V0IiwgIiQiLCAibW9kdWxlIiwgIlNldCIsICIkIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiJCIsICJtb2R1bGUiLCAiJCIsICJtb2R1bGUiLCAiJCIsICJtb2R1bGUiLCAiJCIsICJtb2R1bGUiLCAiJCIsICJhcGlUYWciLCAidGFyZ2V0TmFtZXNwYWNlIiwgInZlcnNpb24iLCAiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0NPTlRBSU5FUiIsICJjb25jYXQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQSIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTiIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUyIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEIiwgIkNMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSIiwgIkNMQVNTX05BTUVfRkVFREJBQ0siLCAiQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FIiwgIkNMQVNTX05BTUVfTEFCRUwiLCAiQ0xBU1NfTkFNRV9MQUJFTF9ET05FIiwgIkNMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCIsICJDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEIiwgIkRFRkFVTFRfU0VUVElORyIsICJkb2NsZWFudXAiLCAiZGVmYXVsdCIsICJsYWJlbF9pMThuIiwgImVkaXRwYWdlcyIsICJtaW5vciIsICJzdWJjYXRjb3VudCIsICJ3YXRjaGxpc3QiLCAic2VsZWN0X2kxOG4iLCAid2F0Y2hfbm9jaGFuZ2UiLCAid2F0Y2hfcHJlZiIsICJ3YXRjaF91bndhdGNoIiwgIndhdGNoX3dhdGNoIiwgIlZBUklBTlRTIiwgIldHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInRvU3RyaW5nIiwgIldHX0ZPUk1BVFRFRF9OQU1FU1BBQ0VTIiwgIldHX05BTUVTUEFDRV9JRFMiLCAiV0dfTkFNRVNQQUNFX05VTUJFUiIsICJXR19TQ1JJUFQiLCAiV0dfVElUTEUiLCAiV0dfVVNFUl9MQU5HVUFHRSIsICJERUZBVUxUX01FU1NBR0VTIiwgInNldE1lc3NhZ2VzIiwgImluY2x1ZGVzIiwgIm1lc3NhZ2VzIiwgInNldCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgImNhdEFMb3QiLCAiQ0FMIiwgImlzU2VhcmNoTW9kZSIsICJNRVNTQUdFUyIsICJWRVJTSU9OIiwgIkFQSV9UQUciLCAiVEFSR0VUX05BTUVTUEFDRSIsICJDVVJSRU5UX0NBVEVHUk9ZIiwgImlzQXV0b0NvbXBsZXRlSW5pdCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImFscmVhZHlUaGVyZSIsICJjb25uZWN0aW9uRXJyb3IiLCAibm90Rm91bmQiLCAiY291bnRlckN1cnJlbnQiLCAiY291bnRlck5lZWRlZCIsICJjb3VudGVyQ2F0IiwgImN1cnJlbnRDYXRlZ29yeSIsICJkaWFsb2dIZWlnaHQiLCAiZWRpdFRva2VuIiwgImxvY2FsQ2F0TmFtZSIsICJwYXJlbnRDYXRzIiwgInN1YkNhdHMiLCAic2V0dGluZ3MiLCAidmFyaWFudENhY2hlIiwgIiRjb3VudGVyIiwgIiQiLCAiJHByb2dyZXNzRGlhbG9nIiwgIiRsYWJlbHMiLCAiJHNlbGVjdGVkTGFiZWxzIiwgIiRib2R5IiwgIiRjb250YWluZXIiLCAiJGRhdGFDb250YWluZXIiLCAiJG1hcmtDb3VudGVyIiwgIiRyZXN1bHRMaXN0IiwgIiRzZWFyY2hJbnB1dCIsICIkaGVhZCIsICIkbGluayIsICJjb25zdHJ1Y3RvciIsICJfbXckdXRpbCRnZXRQYXJhbVZhbHUiLCAibXNnIiwgImluaXRTZXR0aW5ncyIsICJjb250YWluZXIiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAicGxhY2Vob2xkZXIiLCAidHlwZSIsICJ2YWx1ZSIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAib25LZXlEb3duIiwgImV2ZW50IiwgIiRlbGVtZW50IiwgImN1cnJlbnRUYXJnZXQiLCAia2V5IiwgIl8kZWxlbWVudCR2YWwkdHJpbSIsICJfJGVsZW1lbnQkdmFsIiwgImNhdCIsICJ2YWwiLCAidHJpbSIsICJ1cGRhdGVDYXRzIiwgIm9uQ2xpY2siLCAidG9nZ2xlQWxsIiwgImFwcGVuZFRvIiwgImZpbmQiLCAiYnVpbGRFbGVtZW50cyIsICJyZWdleENhdCIsICJSZWdFeHAiLCAibG9jYWxpemVkUmVnZXgiLCAib24iLCAib2xkVmFsIiwgIm5ld1ZhbCIsICJyZXBsYWNlIiwgImluaXRBdXRvY29tcGxldGUiLCAiYXV0b2NvbXBsZXRlIiwgInNvdXJjZSIsICJyZXF1ZXN0IiwgInJlc3BvbnNlIiwgImRvQVBJQ2FsbCIsICJhY3Rpb24iLCAibmFtZXNwYWNlIiwgInJlZGlyZWN0cyIsICJzZWFyY2giLCAidGVybSIsICJyZXN1bHQiLCAibWFwIiwgIl9pbmRleCIsICJpdGVtIiwgInBvc2l0aW9uIiwgIm15IiwgImF0IiwgIm9mIiwgInRvZ2dsZUNsYXNzIiwgInJ1biIsICJfd2luZG93JENhdEFMb3RQcmVmcyIsICJjYXRBTG90UHJlZnMiLCAid2luZG93IiwgIkNhdEFMb3RQcmVmcyIsICJ0eXBlT2ZDYXRBTG90UHJlZnMiLCAiQXJyYXkiLCAiaXNBcnJheSIsICJfaSIsICJfT2JqZWN0JGtleXMiLCAiT2JqZWN0IiwgImtleXMiLCAibGVuZ3RoIiwgIl9jYXRBTG90UHJlZnMkc2V0dGluZyIsICJzZXR0aW5nS2V5IiwgInNldHRpbmciLCAic2VsZWN0IiwgIl9pMiIsICJfT2JqZWN0JGtleXMyIiwgIm1lc3NhZ2VLZXkiLCAibWVzc2FnZSIsICJhcmdzIiwgImZ1bGxLZXkiLCAicGFyc2UiLCAicGxhaW4iLCAibmFtZXNwYWNlTnVtYmVyIiwgImZhbGxiYWNrIiwgIl9DQUwkV0dfRk9STUFUVEVEX05BTSIsICJ3aWtpVGV4dEJsYW5rIiwgIndpa2lUZXh0QmxhbmtSRSIsICJjcmVhdGVSZWdleFN0ciIsICJuYW1lIiwgInJlZ2V4TmFtZSIsICJpIiwgImluaXRpYWwiLCAic2xpY2UiLCAibGwiLCAidG9Mb3dlckNhc2UiLCAidWwiLCAidG9VcHBlckNhc2UiLCAiY2Fub25pY2FsIiwgInJlZ2V4U3RyaW5nIiwgIl9pMyIsICJfT2JqZWN0JGtleXMzIiwgImNhdE5hbWUiLCAidXBkYXRlU2VsZWN0aW9uQ291bnRlciIsICJmaWx0ZXIiLCAic2hvdyIsICJodG1sIiwgImZpbmRBbGxWYXJpYW50cyIsICJjYXRlZ29yeSIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJyZXN1bHRzIiwgInBhcmFtcyIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0ZXh0IiwgInRpdGxlIiwgIl9pNCIsICJfVkFSSUFOVFMiLCAidmFyaWFudCIsICJwb3N0IiwgImVxIiwgIlNldCIsICJyZWdleEJ1aWxkZXIiLCAidmFyaWFudHMiLCAidmFyaWFudFJlZ0V4cHMiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZXNjYXBlUmVnRXhwIiwgImZpcnN0IiwgImVyciIsICJlIiwgImYiLCAiam9pbiIsICJjYWxsYmFjayIsICJkb0NhbGwiLCAiaGFuZGxlRXJyb3IiLCAiZXJyb3IiLCAibG9nIiwgInNldFRpbWVvdXQiLCAidXBkYXRlQ291bnRlciIsICJ0aGVuIiwgImNhdGNoIiwgIm1hcmtBc0RvbmUiLCAiJG1hcmtlZExhYmVsIiwgInRhcmdldENhdGVnb3J5IiwgIm1vZGUiLCAiYWRkQ2xhc3MiLCAiYXBwZW5kIiwgIkZyYWdtZW50IiwgImRvQ2xlYW51cCIsICJyZW1vdmVVbmNhdCIsICJkaXNwbGF5UmVzdWx0IiwgImNzcyIsICJjdXJzb3IiLCAib3ZlcmZsb3ciLCAiJHBhcmVudCIsICJwYXJlbnQiLCAicmVtb3ZlIiwgInJlZHVjZSIsICJwcmUiLCAiY3VyIiwgImluZGV4IiwgImVkaXRDYXRlZ29yaWVzIiwgIm1hcmtlZExhYmVsIiwgIl90aGlzIiwgIm1hcmtlZExhYmVsVGl0bGUiLCAib3JpZ2luVGV4dCIsICJzdGFydHRpbWVzdGFtcCIsICJ0aW1lc3RhbXAiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJwYWdlcyIsICJwYWdlIiwgInJldmlzaW9ucyIsICJjb250ZW50IiwgInNvdXJjZWNhdCIsICJ0YXJnZVJlZ0V4cCIsICJ0ZXN0IiwgInN1bW1hcnkiLCAic291cmNlQ2F0UmVnRXhwIiwgInRva2VuIiwgInRhZ3MiLCAiYXNzZXJ0IiwgImJvdCIsICJiYXNldGltZXN0YW1wIiwgImdldENvbnRlbnQiLCAibWV0YSIsICJ0aXRsZXMiLCAicHJvcCIsICJydnByb3AiLCAiZ2V0VGl0bGVGcm9tTGluayIsICJocmVmIiwgIl9kZWNvZGVVUklDb21wb25lbnQkbSIsICJfZGVjb2RlVVJJQ29tcG9uZW50JG0yIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJtYXRjaCIsICJnZXRNYXJrZWRMYWJlbHMiLCAibWFya2VkTGFiZWxzIiwgImVhY2giLCAibGFiZWwiLCAiJGxhYmVsIiwgIiRsYWJlbExpbmsiLCAiYXR0ciIsICJzaG93UHJvZ3Jlc3MiLCAiZGlhbG9nIiwgImRpYWxvZ0NsYXNzIiwgIm1pbkhlaWdodCIsICJoZWlnaHQiLCAid2lkdGgiLCAibW9kYWwiLCAiY2xvc2VPbkVzY2FwZSIsICJkcmFnZ2FibGUiLCAicmVzaXphYmxlIiwgImhpZGUiLCAiZG9Tb21ldGhpbmciLCAibm90aWZ5IiwgInRhZyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJhZGRIZXJlIiwgImNvcHlIZXJlIiwgIm1vdmVIZXJlIiwgImNyZWF0ZUNhdExpbmtzIiwgInN5bWJvbCIsICJjYXRlZ29yaWVzIiwgInNvcnQiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiJHRyIiwgImRhdGFzZXQiLCAiY2xvc2VzdCIsICJkYXRhIiwgInNob3dDYXRlZ29yeUxpc3QiLCAiX3RoaXMkJGNvbnRhaW5lciR3aWR0IiwgIl8kJHdpZHRoIiwgImN1cnJlbnRDYXRlZ29yaWVzIiwgImVtcHR5IiwgIk1hdGgiLCAibWluIiwgImdldFBhcmVudENhdHMiLCAiX3BhZ2VzJCIsICJxdWVyeSIsICJtaXNzaW5nIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImdldFN1YkNhdHMiLCAibGlzdCIsICJjbXR5cGUiLCAiY21saW1pdCIsICJjbXRpdGxlIiwgIl9yZXN1bHQkcXVlcnkiLCAiY2F0cyIsICJjYXRlZ29yeW1lbWJlcnMiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiZ2V0Q2F0ZWdvcnlMaXN0IiwgImZpbmRBbGxMYWJlbHMiLCAiYWRkIiwgIiRwYWdlcyIsICJtYWtlQ2xpY2thYmxlIiwgIm9uQ2F0QUxvdFNoaWZ0Q2xpY2siLCAiaGFzQ2xhc3MiLCAiYWxzb1Jlc2l6ZSIsICJoYW5kbGVzIiwgInJlc2l6ZSIsICJfJGN1cnJlbnRUYXJnZXQkaGVpZ2giLCAiJGN1cnJlbnRUYXJnZXQiLCAibGVmdCIsICJ0b3AiLCAibWF4SGVpZ2h0IiwgIm9mZiIsICJnZXRCb2R5IiwgImV4dGVuZEpRdWVyeVByb3RvdHlwZSIsICJmbiIsICJwcmV2Q2hlY2tib3giLCAiY3RybEtleSIsICJwcmV2ZW50RGVmYXVsdCIsICJwYXJlbnRzIiwgInJlbW92ZUNsYXNzIiwgIiR0aGlzQ29udHJvbCIsICJ0YXJnZXQiLCAic2hpZnRLZXkiLCAibWV0aG9kIiwgIm1heCJdCn0K
