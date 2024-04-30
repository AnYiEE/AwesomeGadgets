/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:WhitePhosphorus/js/rrd.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/RRD}
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
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match)
          version = +match[1];
      }
    }
    module2.exports = version;
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/is-array.js"(exports, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/array-set-length.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var isArray = require_is_array();
    var $TypeError = TypeError;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function() {
      if (this !== void 0)
        return true;
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

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module2) {
    "use strict";
    var $TypeError = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module2.exports = function(it) {
      if (it > MAX_SAFE_INTEGER)
        throw $TypeError("Maximum allowed index exceeded");
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/es.array.push.js
var require_es_array_push = __commonJS({
  "node_modules/.pnpm/core-js@3.37.0/node_modules/core-js/modules/es.array.push.js"() {
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

// dist/RRD/RRD.js
require_es_array_push();
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
//! src/RRD/modules/constant.ts
var WG_ACTION = mw.config.get("wgAction");
var IS_WG_HISTORY_ACTION = WG_ACTION === "history";
var IS_LOG = mw.config.get("wgCanonicalSpecialPageName") === "Log";
var RRD_PAGE = "LIB_talk:版本删除提报";
//! src/RRD/components/DialogInner.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
//! src/RRD/modules/i18n.ts
var getI18nMessages = () => {
  const {
    wgULS
  } = window;
  return {
    editSummary: wgULS("[[MediaWiki:Gadget-RRD.js|半自动提报]]修订版本删除", "[[MediaWiki:Gadget-RRD.js|半自動提報]]修訂版本刪除"),
    errNoRevisionProvided: wgULS("您没有选择需隐藏的版本！", "您沒有選擇需隱藏的版本！"),
    errNoItemProvided: wgULS("您没有选择需隐藏的项目！", "您沒有選擇需隱藏的項目！"),
    warnNoReasonProvided: wgULS("您没有输入任何理由！确定要继续吗？", "您沒有輸入任何理由！確定要繼續嗎？"),
    hideItems: wgULS("需隐藏的项目：", "需隱藏的項目："),
    hideContent: wgULS("编辑内容", "編輯內容"),
    hideLog: wgULS("日志目标与参数", "日誌目標與參數"),
    hideUsername: wgULS("编辑者用户名/IP地址", "編輯者用戶名/IP位址"),
    hideSummary: wgULS("编辑摘要", "編輯摘要"),
    hideReason: wgULS("理据：", "理據："),
    hideReasonRD1: wgULS("RD1：条目中明显侵犯著作权的内容", "RD1：條目中明顯侵犯著作權的內容"),
    hideReasonRD2: wgULS("RD2：严重侮辱、贬低或攻击性文本", "RD2：嚴重侮辱、貶低或攻擊性文本"),
    hideReasonRD3: wgULS("RD3：纯粹扰乱性内容", "純粹擾亂性內容"),
    hideReasonRD4: wgULS("RD4：明显违反法律法规或违背公序良俗的内容", "RD4：明顯違反法律法規或違背公序良俗的內容"),
    hideReasonRD5: wgULS("RD5：其他不宜公开的版本内容", "RD5：其他不宜公開的版本內容"),
    hideReasonOther: wgULS("仅使用下方的附加理由", "僅使用下方的附加理由"),
    otherReasons: wgULS("附加理由（可选，不用签名）", "附加理由（可選，不用簽名）"),
    dialogTitle: wgULS("提报修订版本删除", "提報修訂版本刪除"),
    dialogButtonSubmit: wgULS("提报", "提報"),
    dialogButtonCancel: wgULS("取消", "取消"),
    reportButtonTitle: wgULS("将选中的版本提报到", "將選中的版本提報到"),
    reportButtonText: wgULS("请求删除被选版本", "請求刪除被選版本"),
    reportButtonLogText: wgULS("请求删除被选日志", "請求刪除被選日誌")
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/RRD/components/DialogInner.tsx
var DialogInner = () => /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
  id: "rrd__config"
}, /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null, getMessage("hideItems")), /* @__PURE__ */ import_ext_gadget.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
  className: "rrd__content-wrapper"
}, /* @__PURE__ */ import_ext_gadget.default.createElement("input", {
  name: "content",
  id: "rrd__hide-content",
  type: "checkbox",
  value: "content",
  checked: true
}), /* @__PURE__ */ import_ext_gadget.default.createElement("label", {
  htmlFor: "rrd__hide-content",
  id: "rrd-content"
}, IS_LOG ? getMessage("hideLog") : getMessage("hideContent"))), /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
  className: "rrd__content-wrapper"
}, /* @__PURE__ */ import_ext_gadget.default.createElement("input", {
  name: "username",
  id: "rrd__hide-username",
  type: "checkbox",
  value: "username"
}), /* @__PURE__ */ import_ext_gadget.default.createElement("label", {
  htmlFor: "rrd__hide-username",
  id: "rrd-username"
}, getMessage("hideUsername"))), /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
  className: "rrd__content-wrapper"
}, /* @__PURE__ */ import_ext_gadget.default.createElement("input", {
  name: "summary",
  id: "rrd__hide-summary",
  type: "checkbox",
  value: "summary"
}), /* @__PURE__ */ import_ext_gadget.default.createElement("label", {
  htmlFor: "rrd__hide-summary",
  id: "rrd-summary"
}, getMessage("hideSummary"))), /* @__PURE__ */ import_ext_gadget.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null, getMessage("hideReason")), /* @__PURE__ */ import_ext_gadget.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget.default.createElement("select", {
  name: "rrd__reason",
  id: "rrd__reason"
}, /* @__PURE__ */ import_ext_gadget.default.createElement("option", {
  value: getMessage("hideReasonRD1")
}, getMessage("hideReasonRD1")), /* @__PURE__ */ import_ext_gadget.default.createElement("option", {
  value: getMessage("hideReasonRD2")
}, getMessage("hideReasonRD2")), /* @__PURE__ */ import_ext_gadget.default.createElement("option", {
  value: getMessage("hideReasonRD3")
}, getMessage("hideReasonRD3")), /* @__PURE__ */ import_ext_gadget.default.createElement("option", {
  value: getMessage("hideReasonRD4")
}, getMessage("hideReasonRD4")), /* @__PURE__ */ import_ext_gadget.default.createElement("option", {
  value: getMessage("hideReasonRD5")
}, getMessage("hideReasonRD5")), /* @__PURE__ */ import_ext_gadget.default.createElement("option", {
  value: ""
}, getMessage("hideReasonOther"))), /* @__PURE__ */ import_ext_gadget.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null, getMessage("otherReasons")), /* @__PURE__ */ import_ext_gadget.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget.default.createElement("textarea", {
  name: "otherReasons",
  id: "rrd__other-reasons",
  rows: 4
}));
var DialogInner_default = DialogInner;
//! src/RRD/modules/core.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
//! src/RRD/components/ReportButton.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
var ReportButton = ({
  onClick
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("button", {
  className: ["historysubmit", "mw-".concat(IS_LOG ? "log" : "history", "-rrd"), "mw-ui-button", "cdx-button"],
  name: "reportRRD",
  type: "button",
  title: getMessage("reportButtonTitle") + RRD_PAGE,
  onClick
}, IS_LOG ? getMessage("reportButtonLogText") : getMessage("reportButtonText"));
var ReportButton_default = ReportButton;
//! src/RRD/modules/core.tsx
var import_ext_gadget4 = require("ext.gadget.Util");
var config = {
  checkboxes: {},
  others: {}
};
var ids = [];
var $dialog;
var loadIDs = () => {
  const boxes = document.querySelectorAll("input");
  var _iterator2 = _createForOfIteratorHelper(boxes), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const box = _step2.value;
      if (box.type === "checkbox" && box.checked) {
        const idRegex = /ids\[(\d+)]/;
        const idArray = idRegex.exec(box.name);
        if (idArray && idArray[1] !== void 0) {
          ids.push(idArray[1]);
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
var submit = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (toHide, reason, otherReasons) {
    ids = [...new Set(ids)];
    const rrdArr = ["{{Revdel", "|status = ", "|article = ".concat(mw.config.get("wgPageName")), "|set = ".concat(toHide), "|reason = ".concat(reason).concat(otherReasons)];
    var _iterator3 = _createForOfIteratorHelper(ids.entries()), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const [index, id] = _step3.value;
        rrdArr.push("|id".concat(index + 1, " = ").concat(id));
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    rrdArr.push("}}\n--~~".concat("~~"));
    const api = (0, import_ext_gadget4.initMwApi)("RRD/2.0");
    try {
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        prop: "revisions",
        titles: RRD_PAGE,
        rvprop: "content"
      };
      const {
        query
      } = yield api.get(params);
      let content;
      if (query.pages) {
        [{
          content
        }] = query.pages[0].revisions;
      }
      if (content === void 0) {
        void mw.notify("Error when loading page ".concat(RRD_PAGE, ": missing"), {
          tag: "RRD",
          type: "error"
        });
        return;
      }
      try {
        var _result$edit, _result$error;
        const _params = {
          action: "edit",
          format: "json",
          formatversion: "2",
          title: RRD_PAGE,
          text: "".concat(content, "\n\n").concat(rrdArr.join("\n")),
          summary: getMessage("editSummary")
        };
        const result = yield api.postWithEditToken(_params);
        if (((_result$edit = result["edit"]) === null || _result$edit === void 0 ? void 0 : _result$edit.result) === "Success") {
          location.replace(mw.util.getUrl(RRD_PAGE));
        } else if ((_result$error = result["error"]) !== null && _result$error !== void 0 && _result$error.code) {
          void mw.notify("Some errors occured while saving page: ".concat(result["error"].code), {
            tag: "RRD",
            type: "error"
          });
        } else {
          void mw.notify("Some errors occured while saving page: unknown", {
            tag: "RRD",
            type: "error"
          });
        }
      } catch {
        void mw.notify("Error when editing page ".concat(RRD_PAGE), {
          tag: "RRD",
          type: "error"
        });
      }
    } catch {
      void mw.notify("Error when loading page ".concat(RRD_PAGE), {
        tag: "RRD",
        type: "error"
      });
    }
  });
  return function submit2(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var updateConfig = () => {
  var _document$querySelect, _document$querySelect2, _document$querySelect3, _document$querySelect4, _document$querySelect5;
  const checkBoxes = {};
  if ((_document$querySelect = document.querySelector("#rrd__hide-content")) !== null && _document$querySelect !== void 0 && _document$querySelect.checked) {
    checkBoxes.rrdHideContent = true;
  }
  if ((_document$querySelect2 = document.querySelector("#rrd__hide-username")) !== null && _document$querySelect2 !== void 0 && _document$querySelect2.checked) {
    checkBoxes.rrdHideUsername = true;
  }
  if ((_document$querySelect3 = document.querySelector("#rrd__hide-summary")) !== null && _document$querySelect3 !== void 0 && _document$querySelect3.checked) {
    checkBoxes.rrdHideSummary = true;
  }
  config.checkboxes = checkBoxes;
  const others = {
    rrdReason: (_document$querySelect4 = document.querySelector("#rrd__reason")) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.value,
    rrdOtherReasons: (_document$querySelect5 = document.querySelector("#rrd__other-reasons")) === null || _document$querySelect5 === void 0 ? void 0 : _document$querySelect5.value
  };
  config.others = others;
};
var loadConfig = () => {
  for (var _i = 0, _Object$entries = Object.entries(config.others); _i < _Object$entries.length; _i++) {
    const [id, value] = _Object$entries[_i];
    if (document.querySelector("#".concat(id)) !== null) {
      document.querySelector("#".concat(id)).value = value;
    }
  }
  for (var _i2 = 0, _Object$entries2 = Object.entries(config.checkboxes); _i2 < _Object$entries2.length; _i2++) {
    const [id, value] = _Object$entries2[_i2];
    if (value === true && document.querySelector("#".concat(id)) !== null) {
      document.querySelector("#".concat(id)).checked = true;
    }
  }
};
var showDialog = () => {
  loadIDs();
  if (!ids.length) {
    void mw.notify(getMessage("errNoRevisionProvided"), {
      tag: "RRD",
      type: "error"
    });
    return;
  }
  const html = /* @__PURE__ */ import_ext_gadget3.default.createElement(DialogInner_default, null);
  if ($dialog) {
    $dialog.html(html).dialog("open");
    loadConfig();
    return;
  }
  $dialog = $(html).dialog({
    title: getMessage("dialogTitle"),
    minWidth: 515,
    minHeight: 150,
    close: updateConfig,
    buttons: [{
      text: getMessage("dialogButtonSubmit"),
      click() {
        $(this).dialog("close");
        const reason = config.others.rrdReason;
        let otherReasons = config.others.rrdOtherReasons;
        if (otherReasons && reason) {
          otherReasons = "，".concat(otherReasons);
        }
        const toHide = [];
        if (config.checkboxes.rrdHideContent) {
          toHide.push(IS_LOG ? getMessage("hideLog") : getMessage("hideContent"));
        }
        if (config.checkboxes.rrdHideUsername) {
          toHide.push(getMessage("hideUsername"));
        }
        if (config.checkboxes.rrdHideSummary) {
          toHide.push(getMessage("hideSummary"));
        }
        let cont = true;
        if (!toHide.length) {
          void mw.notify(getMessage("errNoItemProvided"), {
            tag: "RRD",
            type: "error"
          });
          return;
        }
        if (!reason && !otherReasons) {
          cont = confirm(getMessage("warnNoReasonProvided"));
        }
        if (cont) {
          var _otherReasons;
          void submit(toHide.join("、"), reason !== null && reason !== void 0 ? reason : "", (_otherReasons = otherReasons) !== null && _otherReasons !== void 0 ? _otherReasons : "");
        }
      }
    }, {
      text: getMessage("dialogButtonCancel"),
      click() {
        $(this).dialog("close");
      }
    }]
  });
};
var main = () => {
  var _iterator4 = _createForOfIteratorHelper(document.querySelectorAll(".historysubmit.mw-history-compareselectedversions-button, .editchangetags-log-submit.mw-log-editchangetags-button")), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      const element = _step4.value;
      const reportButton = /* @__PURE__ */ import_ext_gadget3.default.createElement(ReportButton_default, {
        onClick: showDialog
      });
      element.after(reportButton);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
};
//! src/RRD/RRD.ts
if (IS_WG_HISTORY_ACTION || IS_LOG) {
  $(main);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWhlbHBlcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLXNldC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdGUtc2ltcGxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWl0ZXJhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtY2xvbmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtYWNjZXNzb3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtc2l6ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtc2V0LXJlY29yZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1kaWZmZXJlbmNlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LW1ldGhvZC1hY2NlcHQtc2V0LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc2V0LmRpZmZlcmVuY2UudjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXNuZXh0LnNldC5kaWZmZXJlbmNlLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWludGVyc2VjdGlvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zZXQuaW50ZXJzZWN0aW9uLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5zZXQuaW50ZXJzZWN0aW9uLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtaXMtZGlzam9pbnQtZnJvbS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zZXQuaXMtZGlzam9pbnQtZnJvbS52Mi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lc25leHQuc2V0LmlzLWRpc2pvaW50LWZyb20udjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtaXMtc3Vic2V0LW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnNldC5pcy1zdWJzZXQtb2YudjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXNuZXh0LnNldC5pcy1zdWJzZXQtb2YudjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtaXMtc3VwZXJzZXQtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc2V0LmlzLXN1cGVyc2V0LW9mLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5zZXQuaXMtc3VwZXJzZXQtb2YudjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtc3ltbWV0cmljLWRpZmZlcmVuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc2V0LnN5bW1ldHJpYy1kaWZmZXJlbmNlLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5zZXQuc3ltbWV0cmljLWRpZmZlcmVuY2UudjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtdW5pb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc2V0LnVuaW9uLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5zZXQudW5pb24udjIuanMiLCAic3JjL1JSRC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9SUkQvY29tcG9uZW50cy9EaWFsb2dJbm5lci50c3giLCAic3JjL1JSRC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1JSRC9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9SUkQvY29tcG9uZW50cy9SZXBvcnRCdXR0b24udHN4IiwgInNyYy9SUkQvUlJELnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzcuMCcsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI0IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzcuMC9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4wLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFua3MgdG8gSUU4IGZvciBpdHMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVjggfiBDaHJvbWUgMzYtXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMzM0XG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ3Byb3RvdHlwZScsIHtcbiAgICB2YWx1ZTogNDIsXG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pLnByb3RvdHlwZSAhPT0gNDI7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IFR5cGUoYXJndW1lbnQpIGlzIE9iamVjdGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc09iamVjdChhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJFN0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXREZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIEVYSVNUUyA9IGhhc093bihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKTtcbi8vIGFkZGl0aW9uYWwgcHJvdGVjdGlvbiBmcm9tIG1pbmlmaWVkIC8gbWFuZ2xlZCAvIGRyb3BwZWQgZnVuY3Rpb24gbmFtZXNcbnZhciBQUk9QRVIgPSBFWElTVFMgJiYgKGZ1bmN0aW9uIHNvbWV0aGluZygpIHsgLyogZW1wdHkgKi8gfSkubmFtZSA9PT0gJ3NvbWV0aGluZyc7XG52YXIgQ09ORklHVVJBQkxFID0gRVhJU1RTICYmICghREVTQ1JJUFRPUlMgfHwgKERFU0NSSVBUT1JTICYmIGdldERlc2NyaXB0b3IoRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJykuY29uZmlndXJhYmxlKSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFWElTVFM6IEVYSVNUUyxcbiAgUFJPUEVSOiBQUk9QRVIsXG4gIENPTkZJR1VSQUJMRTogQ09ORklHVVJBQkxFXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc3RvcmUuZ2V0ID0gc3RvcmUuZ2V0O1xuICBzdG9yZS5oYXMgPSBzdG9yZS5oYXM7XG4gIHN0b3JlLnNldCA9IHN0b3JlLnNldDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoc3RvcmUuaGFzKGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgc3RvcmUuc2V0KGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0KGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmhhcyhpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChoYXNPd24oaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkNPTkZJR1VSQUJMRTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG52YXIgQ09ORklHVVJBQkxFX0xFTkdUSCA9IERFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdsZW5ndGgnLCB7IHZhbHVlOiA4IH0pLmxlbmd0aCAhPT0gODtcbn0pO1xuXG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbnZhciBtYWtlQnVpbHRJbiA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBuYW1lLCBvcHRpb25zKSB7XG4gIGlmIChzdHJpbmdTbGljZSgkU3RyaW5nKG5hbWUpLCAwLCA3KSA9PT0gJ1N5bWJvbCgnKSB7XG4gICAgbmFtZSA9ICdbJyArIHJlcGxhY2UoJFN0cmluZyhuYW1lKSwgL15TeW1ib2xcXCgoW14pXSopXFwpLiokLywgJyQxJykgKyAnXSc7XG4gIH1cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZXR0ZXIpIG5hbWUgPSAnZ2V0ICcgKyBuYW1lO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNldHRlcikgbmFtZSA9ICdzZXQgJyArIG5hbWU7XG4gIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICduYW1lJywgeyB2YWx1ZTogbmFtZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIGVsc2UgdmFsdWUubmFtZSA9IG5hbWU7XG4gIH1cbiAgaWYgKENPTkZJR1VSQUJMRV9MRU5HVEggJiYgb3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2FyaXR5JykgJiYgdmFsdWUubGVuZ3RoICE9PSBvcHRpb25zLmFyaXR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkodmFsdWUsICdsZW5ndGgnLCB7IHZhbHVlOiBvcHRpb25zLmFyaXR5IH0pO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdjb25zdHJ1Y3RvcicpICYmIG9wdGlvbnMuY29uc3RydWN0b3IpIHtcbiAgICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICdwcm90b3R5cGUnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTtcbiAgICAvLyBpbiBWOCB+IENocm9tZSA1MywgcHJvdG90eXBlcyBvZiBzb21lIG1ldGhvZHMsIGxpa2UgYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgLCBhcmUgbm9uLXdyaXRhYmxlXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5wcm90b3R5cGUpIHZhbHVlLnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gIGlmICghaGFzT3duKHN0YXRlLCAnc291cmNlJykpIHtcbiAgICBzdGF0ZS5zb3VyY2UgPSBqb2luKFRFTVBMQVRFLCB0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZSAtLSByZXF1aXJlZFxuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbWFrZUJ1aWx0SW4oZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHRoaXMpICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59LCAndG9TdHJpbmcnKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucy5lbnVtZXJhYmxlO1xuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuICBpZiAoaXNDYWxsYWJsZSh2YWx1ZSkpIG1ha2VCdWlsdEluKHZhbHVlLCBuYW1lLCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVHbG9iYWxQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFvcHRpb25zLnVuc2FmZSkgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGVsc2UgaWYgKE9ba2V5XSkgc2ltcGxlID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6ICFvcHRpb25zLm5vbkNvbmZpZ3VyYWJsZSxcbiAgICAgIHdyaXRhYmxlOiAhb3B0aW9ucy5ub25Xcml0YWJsZVxuICAgIH0pO1xuICB9IHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBNYXRoLnRydW5jYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC50cnVuY1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtdHJ1bmMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uIHRydW5jKHgpIHtcbiAgdmFyIG4gPSAreDtcbiAgcmV0dXJuIChuID4gMCA/IGZsb29yIDogY2VpbCkobik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0cnVuYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXRoLXRydW5jJyk7XG5cbi8vIGBUb0ludGVnZXJPckluZmluaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2Vyb3JpbmZpbml0eVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIG51bWJlciA9ICthcmd1bWVudDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiB0cnVuYyhudW1iZXIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbGVuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCk7XG4gIHJldHVybiBsZW4gPiAwID8gbWluKGxlbiwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGV4Y2VwdGlvbnMpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpICYmICEoZXhjZXB0aW9ucyAmJiBoYXNPd24oZXhjZXB0aW9ucywga2V5KSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogaXNDYWxsYWJsZShkZXRlY3Rpb24pID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAgICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMuZG9udENhbGxHZXRTZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4gIG9wdGlvbnMubmFtZSAgICAgICAgICAgLSB0aGUgLm5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBrZXlcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gJiYgZ2xvYmFsW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09PSAnQXJyYXknO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIFNhZmFyaSA8IDEzIGRvZXMgbm90IHRocm93IGFuIGVycm9yIGluIHRoaXMgY2FzZVxudmFyIFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA9IERFU0NSSVBUT1JTICYmICFmdW5jdGlvbiAoKSB7XG4gIC8vIG1ha2VzIG5vIHNlbnNlIHdpdGhvdXQgcHJvcGVyIHN0cmljdCBtb2RlIHN1cHBvcnRcbiAgaWYgKHRoaXMgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkubGVuZ3RoID0gMTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPyBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIGlmIChpc0FycmF5KE8pICYmICFnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgJ2xlbmd0aCcpLndyaXRhYmxlKSB7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBzZXQgcmVhZCBvbmx5IC5sZW5ndGgnKTtcbiAgfSByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59IDogZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgc2V0QXJyYXlMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aCcpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIElOQ09SUkVDVF9UT19MRU5HVEggPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbXS5wdXNoLmNhbGwoeyBsZW5ndGg6IDB4MTAwMDAwMDAwIH0sIDEpICE9PSA0Mjk0OTY3Mjk3O1xufSk7XG5cbi8vIFY4IDw9IDEyMSBhbmQgU2FmYXJpIDw9IDE1LjQ7IEZGIDwgMjMgdGhyb3dzIEludGVybmFsRXJyb3Jcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTEyNjgxXG52YXIgcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLnB1c2goKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn07XG5cbnZhciBGT1JDRUQgPSBJTkNPUlJFQ1RfVE9fTEVOR1RIIHx8ICFwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGgoKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5wdXNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnB1c2hcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKGl0ZW0pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgYXJnQ291bnQgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihsZW4gKyBhcmdDb3VudCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdDb3VudDsgaSsrKSB7XG4gICAgICBPW2xlbl0gPSBhcmd1bWVudHNbaV07XG4gICAgICBsZW4rKztcbiAgICB9XG4gICAgc2V0QXJyYXlMZW5ndGgoTywgbGVuKTtcbiAgICByZXR1cm4gbGVuO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1zZXQgLS0gc2FmZVxudmFyIFNldFByb3RvdHlwZSA9IFNldC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tc2V0IC0tIHNhZmVcbiAgU2V0OiBTZXQsXG4gIGFkZDogdW5jdXJyeVRoaXMoU2V0UHJvdG90eXBlLmFkZCksXG4gIGhhczogdW5jdXJyeVRoaXMoU2V0UHJvdG90eXBlLmhhcyksXG4gIHJlbW92ZTogdW5jdXJyeVRoaXMoU2V0UHJvdG90eXBlWydkZWxldGUnXSksXG4gIHByb3RvOiBTZXRQcm90b3R5cGVcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaGVscGVycycpLmhhcztcblxuLy8gUGVyZm9ybSA/IFJlcXVpcmVJbnRlcm5hbFNsb3QoTSwgW1tTZXREYXRhXV0pXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBoYXMoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocmVjb3JkLCBmbiwgSVRFUkFUT1JfSU5TVEVBRF9PRl9SRUNPUkQpIHtcbiAgdmFyIGl0ZXJhdG9yID0gSVRFUkFUT1JfSU5TVEVBRF9PRl9SRUNPUkQgPyByZWNvcmQgOiByZWNvcmQuaXRlcmF0b3I7XG4gIHZhciBuZXh0ID0gcmVjb3JkLm5leHQ7XG4gIHZhciBzdGVwLCByZXN1bHQ7XG4gIHdoaWxlICghKHN0ZXAgPSBjYWxsKG5leHQsIGl0ZXJhdG9yKSkuZG9uZSkge1xuICAgIHJlc3VsdCA9IGZuKHN0ZXAudmFsdWUpO1xuICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlLXNpbXBsZScpO1xudmFyIFNldEhlbHBlcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWhlbHBlcnMnKTtcblxudmFyIFNldCA9IFNldEhlbHBlcnMuU2V0O1xudmFyIFNldFByb3RvdHlwZSA9IFNldEhlbHBlcnMucHJvdG87XG52YXIgZm9yRWFjaCA9IHVuY3VycnlUaGlzKFNldFByb3RvdHlwZS5mb3JFYWNoKTtcbnZhciBrZXlzID0gdW5jdXJyeVRoaXMoU2V0UHJvdG90eXBlLmtleXMpO1xudmFyIG5leHQgPSBrZXlzKG5ldyBTZXQoKSkubmV4dDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2V0LCBmbiwgaW50ZXJydXB0aWJsZSkge1xuICByZXR1cm4gaW50ZXJydXB0aWJsZSA/IGl0ZXJhdGVTaW1wbGUoeyBpdGVyYXRvcjoga2V5cyhzZXQpLCBuZXh0OiBuZXh0IH0sIGZuKSA6IGZvckVhY2goc2V0LCBmbik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBTZXRIZWxwZXJzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1oZWxwZXJzJyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaXRlcmF0ZScpO1xuXG52YXIgU2V0ID0gU2V0SGVscGVycy5TZXQ7XG52YXIgYWRkID0gU2V0SGVscGVycy5hZGQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNldCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IFNldCgpO1xuICBpdGVyYXRlKHNldCwgZnVuY3Rpb24gKGl0KSB7XG4gICAgYWRkKHJlc3VsdCwgaXQpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCBtZXRob2QpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG4gICAgcmV0dXJuIHVuY3VycnlUaGlzKGFDYWxsYWJsZShPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwga2V5KVttZXRob2RdKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWFjY2Vzc29yJyk7XG52YXIgU2V0SGVscGVycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaGVscGVycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzQWNjZXNzb3IoU2V0SGVscGVycy5wcm90bywgJ3NpemUnLCAnZ2V0JykgfHwgZnVuY3Rpb24gKHNldCkge1xuICByZXR1cm4gc2V0LnNpemU7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGBHZXRJdGVyYXRvckRpcmVjdChvYmopYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9wcm9wb3NhbC1pdGVyYXRvci1oZWxwZXJzLyNzZWMtZ2V0aXRlcmF0b3JkaXJlY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4ge1xuICAgIGl0ZXJhdG9yOiBvYmosXG4gICAgbmV4dDogb2JqLm5leHQsXG4gICAgZG9uZTogZmFsc2VcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xuXG52YXIgSU5WQUxJRF9TSVpFID0gJ0ludmFsaWQgc2l6ZSc7XG52YXIgJFJhbmdlRXJyb3IgPSBSYW5nZUVycm9yO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG5cbnZhciBTZXRSZWNvcmQgPSBmdW5jdGlvbiAoc2V0LCBpbnRTaXplKSB7XG4gIHRoaXMuc2V0ID0gc2V0O1xuICB0aGlzLnNpemUgPSBtYXgoaW50U2l6ZSwgMCk7XG4gIHRoaXMuaGFzID0gYUNhbGxhYmxlKHNldC5oYXMpO1xuICB0aGlzLmtleXMgPSBhQ2FsbGFibGUoc2V0LmtleXMpO1xufTtcblxuU2V0UmVjb3JkLnByb3RvdHlwZSA9IHtcbiAgZ2V0SXRlcmF0b3I6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0SXRlcmF0b3JEaXJlY3QoYW5PYmplY3QoY2FsbCh0aGlzLmtleXMsIHRoaXMuc2V0KSkpO1xuICB9LFxuICBpbmNsdWRlczogZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGNhbGwodGhpcy5oYXMsIHRoaXMuc2V0LCBpdCk7XG4gIH1cbn07XG5cbi8vIGBHZXRTZXRSZWNvcmRgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL3Byb3Bvc2FsLXNldC1tZXRob2RzLyNzZWMtZ2V0c2V0cmVjb3JkXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgYW5PYmplY3Qob2JqKTtcbiAgdmFyIG51bVNpemUgPSArb2JqLnNpemU7XG4gIC8vIE5PVEU6IElmIHNpemUgaXMgdW5kZWZpbmVkLCB0aGVuIG51bVNpemUgd2lsbCBiZSBOYU5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgaWYgKG51bVNpemUgIT09IG51bVNpemUpIHRocm93IG5ldyAkVHlwZUVycm9yKElOVkFMSURfU0laRSk7XG4gIHZhciBpbnRTaXplID0gdG9JbnRlZ2VyT3JJbmZpbml0eShudW1TaXplKTtcbiAgaWYgKGludFNpemUgPCAwKSB0aHJvdyBuZXcgJFJhbmdlRXJyb3IoSU5WQUxJRF9TSVpFKTtcbiAgcmV0dXJuIG5ldyBTZXRSZWNvcmQob2JqLCBpbnRTaXplKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFTZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1zZXQnKTtcbnZhciBTZXRIZWxwZXJzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1oZWxwZXJzJyk7XG52YXIgY2xvbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWNsb25lJyk7XG52YXIgc2l6ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtc2l6ZScpO1xudmFyIGdldFNldFJlY29yZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtc2V0LXJlY29yZCcpO1xudmFyIGl0ZXJhdGVTZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWl0ZXJhdGUnKTtcbnZhciBpdGVyYXRlU2ltcGxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUtc2ltcGxlJyk7XG5cbnZhciBoYXMgPSBTZXRIZWxwZXJzLmhhcztcbnZhciByZW1vdmUgPSBTZXRIZWxwZXJzLnJlbW92ZTtcblxuLy8gYFNldC5wcm90b3R5cGUuZGlmZmVyZW5jZWAgbWV0aG9kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaWZmZXJlbmNlKG90aGVyKSB7XG4gIHZhciBPID0gYVNldCh0aGlzKTtcbiAgdmFyIG90aGVyUmVjID0gZ2V0U2V0UmVjb3JkKG90aGVyKTtcbiAgdmFyIHJlc3VsdCA9IGNsb25lKE8pO1xuICBpZiAoc2l6ZShPKSA8PSBvdGhlclJlYy5zaXplKSBpdGVyYXRlU2V0KE8sIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKG90aGVyUmVjLmluY2x1ZGVzKGUpKSByZW1vdmUocmVzdWx0LCBlKTtcbiAgfSk7XG4gIGVsc2UgaXRlcmF0ZVNpbXBsZShvdGhlclJlYy5nZXRJdGVyYXRvcigpLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChoYXMoTywgZSkpIHJlbW92ZShyZXN1bHQsIGUpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbnZhciBjcmVhdGVTZXRMaWtlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIHtcbiAgICBzaXplOiBzaXplLFxuICAgIGhhczogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAga2V5czogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBTZXQgPSBnZXRCdWlsdEluKCdTZXQnKTtcbiAgdHJ5IHtcbiAgICBuZXcgU2V0KClbbmFtZV0oY3JlYXRlU2V0TGlrZSgwKSk7XG4gICAgdHJ5IHtcbiAgICAgIC8vIGxhdGUgc3BlYyBjaGFuZ2UsIGVhcmx5IFdlYktpdCB+IFNhZmFyaSAxNy4wIGJldGEgaW1wbGVtZW50YXRpb24gZG9lcyBub3QgcGFzcyBpdFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHMvcHVsbC84OFxuICAgICAgbmV3IFNldCgpW25hbWVdKGNyZWF0ZVNldExpa2UoLTEpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlcnJvcjIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZGlmZmVyZW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZGlmZmVyZW5jZScpO1xudmFyIHNldE1ldGhvZEFjY2VwdFNldExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LW1ldGhvZC1hY2NlcHQtc2V0LWxpa2UnKTtcblxuLy8gYFNldC5wcm90b3R5cGUuZGlmZmVyZW5jZWAgbWV0aG9kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xuJCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6ICFzZXRNZXRob2RBY2NlcHRTZXRMaWtlKCdkaWZmZXJlbmNlJykgfSwge1xuICBkaWZmZXJlbmNlOiBkaWZmZXJlbmNlXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5zZXQuZGlmZmVyZW5jZS52MicpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhU2V0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Etc2V0Jyk7XG52YXIgU2V0SGVscGVycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaGVscGVycycpO1xudmFyIHNpemUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXNpemUnKTtcbnZhciBnZXRTZXRSZWNvcmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LXNldC1yZWNvcmQnKTtcbnZhciBpdGVyYXRlU2V0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1pdGVyYXRlJyk7XG52YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlLXNpbXBsZScpO1xuXG52YXIgU2V0ID0gU2V0SGVscGVycy5TZXQ7XG52YXIgYWRkID0gU2V0SGVscGVycy5hZGQ7XG52YXIgaGFzID0gU2V0SGVscGVycy5oYXM7XG5cbi8vIGBTZXQucHJvdG90eXBlLmludGVyc2VjdGlvbmAgbWV0aG9kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbnRlcnNlY3Rpb24ob3RoZXIpIHtcbiAgdmFyIE8gPSBhU2V0KHRoaXMpO1xuICB2YXIgb3RoZXJSZWMgPSBnZXRTZXRSZWNvcmQob3RoZXIpO1xuICB2YXIgcmVzdWx0ID0gbmV3IFNldCgpO1xuXG4gIGlmIChzaXplKE8pID4gb3RoZXJSZWMuc2l6ZSkge1xuICAgIGl0ZXJhdGVTaW1wbGUob3RoZXJSZWMuZ2V0SXRlcmF0b3IoKSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChoYXMoTywgZSkpIGFkZChyZXN1bHQsIGUpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGl0ZXJhdGVTZXQoTywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChvdGhlclJlYy5pbmNsdWRlcyhlKSkgYWRkKHJlc3VsdCwgZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGludGVyc2VjdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaW50ZXJzZWN0aW9uJyk7XG52YXIgc2V0TWV0aG9kQWNjZXB0U2V0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtbWV0aG9kLWFjY2VwdC1zZXQtbGlrZScpO1xuXG52YXIgSU5DT1JSRUNUID0gIXNldE1ldGhvZEFjY2VwdFNldExpa2UoJ2ludGVyc2VjdGlvbicpIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWZyb20sIGVzL25vLXNldCAtLSB0ZXN0aW5nXG4gIHJldHVybiBTdHJpbmcoQXJyYXkuZnJvbShuZXcgU2V0KFsxLCAyLCAzXSkuaW50ZXJzZWN0aW9uKG5ldyBTZXQoWzMsIDJdKSkpKSAhPT0gJzMsMic7XG59KTtcblxuLy8gYFNldC5wcm90b3R5cGUuaW50ZXJzZWN0aW9uYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG4kKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUIH0sIHtcbiAgaW50ZXJzZWN0aW9uOiBpbnRlcnNlY3Rpb25cbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnNldC5pbnRlcnNlY3Rpb24udjInKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGtpbmQsIHZhbHVlKSB7XG4gIHZhciBpbm5lclJlc3VsdCwgaW5uZXJFcnJvcjtcbiAgYW5PYmplY3QoaXRlcmF0b3IpO1xuICB0cnkge1xuICAgIGlubmVyUmVzdWx0ID0gZ2V0TWV0aG9kKGl0ZXJhdG9yLCAncmV0dXJuJyk7XG4gICAgaWYgKCFpbm5lclJlc3VsdCkge1xuICAgICAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpbm5lclJlc3VsdCA9IGNhbGwoaW5uZXJSZXN1bHQsIGl0ZXJhdG9yKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpbm5lckVycm9yID0gdHJ1ZTtcbiAgICBpbm5lclJlc3VsdCA9IGVycm9yO1xuICB9XG4gIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcbiAgaWYgKGlubmVyRXJyb3IpIHRocm93IGlubmVyUmVzdWx0O1xuICBhbk9iamVjdChpbm5lclJlc3VsdCk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFTZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1zZXQnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWhlbHBlcnMnKS5oYXM7XG52YXIgc2l6ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtc2l6ZScpO1xudmFyIGdldFNldFJlY29yZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtc2V0LXJlY29yZCcpO1xudmFyIGl0ZXJhdGVTZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWl0ZXJhdGUnKTtcbnZhciBpdGVyYXRlU2ltcGxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUtc2ltcGxlJyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG4vLyBgU2V0LnByb3RvdHlwZS5pc0Rpc2pvaW50RnJvbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldC1tZXRob2RzLyNTZXQucHJvdG90eXBlLmlzRGlzam9pbnRGcm9tXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzRGlzam9pbnRGcm9tKG90aGVyKSB7XG4gIHZhciBPID0gYVNldCh0aGlzKTtcbiAgdmFyIG90aGVyUmVjID0gZ2V0U2V0UmVjb3JkKG90aGVyKTtcbiAgaWYgKHNpemUoTykgPD0gb3RoZXJSZWMuc2l6ZSkgcmV0dXJuIGl0ZXJhdGVTZXQoTywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAob3RoZXJSZWMuaW5jbHVkZXMoZSkpIHJldHVybiBmYWxzZTtcbiAgfSwgdHJ1ZSkgIT09IGZhbHNlO1xuICB2YXIgaXRlcmF0b3IgPSBvdGhlclJlYy5nZXRJdGVyYXRvcigpO1xuICByZXR1cm4gaXRlcmF0ZVNpbXBsZShpdGVyYXRvciwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoaGFzKE8sIGUpKSByZXR1cm4gaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ25vcm1hbCcsIGZhbHNlKTtcbiAgfSkgIT09IGZhbHNlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBpc0Rpc2pvaW50RnJvbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaXMtZGlzam9pbnQtZnJvbScpO1xudmFyIHNldE1ldGhvZEFjY2VwdFNldExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LW1ldGhvZC1hY2NlcHQtc2V0LWxpa2UnKTtcblxuLy8gYFNldC5wcm90b3R5cGUuaXNEaXNqb2ludEZyb21gIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcbiQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiAhc2V0TWV0aG9kQWNjZXB0U2V0TGlrZSgnaXNEaXNqb2ludEZyb20nKSB9LCB7XG4gIGlzRGlzam9pbnRGcm9tOiBpc0Rpc2pvaW50RnJvbVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuc2V0LmlzLWRpc2pvaW50LWZyb20udjInKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYVNldCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLXNldCcpO1xudmFyIHNpemUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXNpemUnKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1pdGVyYXRlJyk7XG52YXIgZ2V0U2V0UmVjb3JkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1zZXQtcmVjb3JkJyk7XG5cbi8vIGBTZXQucHJvdG90eXBlLmlzU3Vic2V0T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXQtbWV0aG9kcy8jU2V0LnByb3RvdHlwZS5pc1N1YnNldE9mXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3Vic2V0T2Yob3RoZXIpIHtcbiAgdmFyIE8gPSBhU2V0KHRoaXMpO1xuICB2YXIgb3RoZXJSZWMgPSBnZXRTZXRSZWNvcmQob3RoZXIpO1xuICBpZiAoc2l6ZShPKSA+IG90aGVyUmVjLnNpemUpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGl0ZXJhdGUoTywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoIW90aGVyUmVjLmluY2x1ZGVzKGUpKSByZXR1cm4gZmFsc2U7XG4gIH0sIHRydWUpICE9PSBmYWxzZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNTdWJzZXRPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaXMtc3Vic2V0LW9mJyk7XG52YXIgc2V0TWV0aG9kQWNjZXB0U2V0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtbWV0aG9kLWFjY2VwdC1zZXQtbGlrZScpO1xuXG4vLyBgU2V0LnByb3RvdHlwZS5pc1N1YnNldE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG4kKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogIXNldE1ldGhvZEFjY2VwdFNldExpa2UoJ2lzU3Vic2V0T2YnKSB9LCB7XG4gIGlzU3Vic2V0T2Y6IGlzU3Vic2V0T2Zcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnNldC5pcy1zdWJzZXQtb2YudjInKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYVNldCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLXNldCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaGVscGVycycpLmhhcztcbnZhciBzaXplID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zaXplJyk7XG52YXIgZ2V0U2V0UmVjb3JkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1zZXQtcmVjb3JkJyk7XG52YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlLXNpbXBsZScpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcblxuLy8gYFNldC5wcm90b3R5cGUuaXNTdXBlcnNldE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0LW1ldGhvZHMvI1NldC5wcm90b3R5cGUuaXNTdXBlcnNldE9mXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3VwZXJzZXRPZihvdGhlcikge1xuICB2YXIgTyA9IGFTZXQodGhpcyk7XG4gIHZhciBvdGhlclJlYyA9IGdldFNldFJlY29yZChvdGhlcik7XG4gIGlmIChzaXplKE8pIDwgb3RoZXJSZWMuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgaXRlcmF0b3IgPSBvdGhlclJlYy5nZXRJdGVyYXRvcigpO1xuICByZXR1cm4gaXRlcmF0ZVNpbXBsZShpdGVyYXRvciwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoIWhhcyhPLCBlKSkgcmV0dXJuIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICdub3JtYWwnLCBmYWxzZSk7XG4gIH0pICE9PSBmYWxzZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNTdXBlcnNldE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1pcy1zdXBlcnNldC1vZicpO1xudmFyIHNldE1ldGhvZEFjY2VwdFNldExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LW1ldGhvZC1hY2NlcHQtc2V0LWxpa2UnKTtcblxuLy8gYFNldC5wcm90b3R5cGUuaXNTdXBlcnNldE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG4kKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogIXNldE1ldGhvZEFjY2VwdFNldExpa2UoJ2lzU3VwZXJzZXRPZicpIH0sIHtcbiAgaXNTdXBlcnNldE9mOiBpc1N1cGVyc2V0T2Zcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnNldC5pcy1zdXBlcnNldC1vZi52MicpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhU2V0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Etc2V0Jyk7XG52YXIgU2V0SGVscGVycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaGVscGVycycpO1xudmFyIGNsb25lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1jbG9uZScpO1xudmFyIGdldFNldFJlY29yZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtc2V0LXJlY29yZCcpO1xudmFyIGl0ZXJhdGVTaW1wbGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZS1zaW1wbGUnKTtcblxudmFyIGFkZCA9IFNldEhlbHBlcnMuYWRkO1xudmFyIGhhcyA9IFNldEhlbHBlcnMuaGFzO1xudmFyIHJlbW92ZSA9IFNldEhlbHBlcnMucmVtb3ZlO1xuXG4vLyBgU2V0LnByb3RvdHlwZS5zeW1tZXRyaWNEaWZmZXJlbmNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN5bW1ldHJpY0RpZmZlcmVuY2Uob3RoZXIpIHtcbiAgdmFyIE8gPSBhU2V0KHRoaXMpO1xuICB2YXIga2V5c0l0ZXIgPSBnZXRTZXRSZWNvcmQob3RoZXIpLmdldEl0ZXJhdG9yKCk7XG4gIHZhciByZXN1bHQgPSBjbG9uZShPKTtcbiAgaXRlcmF0ZVNpbXBsZShrZXlzSXRlciwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoaGFzKE8sIGUpKSByZW1vdmUocmVzdWx0LCBlKTtcbiAgICBlbHNlIGFkZChyZXN1bHQsIGUpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgc3ltbWV0cmljRGlmZmVyZW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtc3ltbWV0cmljLWRpZmZlcmVuY2UnKTtcbnZhciBzZXRNZXRob2RBY2NlcHRTZXRMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1tZXRob2QtYWNjZXB0LXNldC1saWtlJyk7XG5cbi8vIGBTZXQucHJvdG90eXBlLnN5bW1ldHJpY0RpZmZlcmVuY2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcbiQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiAhc2V0TWV0aG9kQWNjZXB0U2V0TGlrZSgnc3ltbWV0cmljRGlmZmVyZW5jZScpIH0sIHtcbiAgc3ltbWV0cmljRGlmZmVyZW5jZTogc3ltbWV0cmljRGlmZmVyZW5jZVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuc2V0LnN5bW1ldHJpYy1kaWZmZXJlbmNlLnYyJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFTZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1zZXQnKTtcbnZhciBhZGQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWhlbHBlcnMnKS5hZGQ7XG52YXIgY2xvbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWNsb25lJyk7XG52YXIgZ2V0U2V0UmVjb3JkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1zZXQtcmVjb3JkJyk7XG52YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlLXNpbXBsZScpO1xuXG4vLyBgU2V0LnByb3RvdHlwZS51bmlvbmAgbWV0aG9kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1bmlvbihvdGhlcikge1xuICB2YXIgTyA9IGFTZXQodGhpcyk7XG4gIHZhciBrZXlzSXRlciA9IGdldFNldFJlY29yZChvdGhlcikuZ2V0SXRlcmF0b3IoKTtcbiAgdmFyIHJlc3VsdCA9IGNsb25lKE8pO1xuICBpdGVyYXRlU2ltcGxlKGtleXNJdGVyLCBmdW5jdGlvbiAoaXQpIHtcbiAgICBhZGQocmVzdWx0LCBpdCk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB1bmlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdW5pb24nKTtcbnZhciBzZXRNZXRob2RBY2NlcHRTZXRMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1tZXRob2QtYWNjZXB0LXNldC1saWtlJyk7XG5cbi8vIGBTZXQucHJvdG90eXBlLnVuaW9uYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG4kKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogIXNldE1ldGhvZEFjY2VwdFNldExpa2UoJ3VuaW9uJykgfSwge1xuICB1bmlvbjogdW5pb25cbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnNldC51bmlvbi52MicpO1xuIiwgImNvbnN0IFdHX0FDVElPTjogTWVkaWFXaWtpQ29uZmlnTWFwV2dBY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuY29uc3QgSVNfV0dfSElTVE9SWV9BQ1RJT046IGJvb2xlYW4gPSBXR19BQ1RJT04gPT09ICdoaXN0b3J5JztcbmNvbnN0IElTX0xPRzogYm9vbGVhbiA9IG13LmNvbmZpZy5nZXQoJ3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lJykgPT09ICdMb2cnO1xuY29uc3QgUlJEX1BBR0U6IHN0cmluZyA9ICdMSUJfdGFsazrniYjmnKzliKDpmaTmj5DmiqUnO1xuXG5leHBvcnQge0lTX0xPRywgSVNfV0dfSElTVE9SWV9BQ1RJT04sIFJSRF9QQUdFfTtcbiIsICJpbXBvcnQge0lTX0xPR30gZnJvbSAnLi4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5cbmNvbnN0IERpYWxvZ0lubmVyID0gKCkgPT4gKFxuXHQ8ZGl2IGlkPVwicnJkX19jb25maWdcIj5cblx0XHQ8PntnZXRNZXNzYWdlKCdoaWRlSXRlbXMnKX08Lz5cblx0XHQ8YnIgLz5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17J3JyZF9fY29udGVudC13cmFwcGVyJ30+XG5cdFx0XHQ8aW5wdXQgbmFtZT1cImNvbnRlbnRcIiBpZD1cInJyZF9faGlkZS1jb250ZW50XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJjb250ZW50XCIgY2hlY2tlZCAvPlxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJycmRfX2hpZGUtY29udGVudFwiIGlkPVwicnJkLWNvbnRlbnRcIj5cblx0XHRcdFx0e0lTX0xPRyA/IGdldE1lc3NhZ2UoJ2hpZGVMb2cnKSA6IGdldE1lc3NhZ2UoJ2hpZGVDb250ZW50Jyl9XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3NOYW1lPXsncnJkX19jb250ZW50LXdyYXBwZXInfT5cblx0XHRcdDxpbnB1dCBuYW1lPVwidXNlcm5hbWVcIiBpZD1cInJyZF9faGlkZS11c2VybmFtZVwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwidXNlcm5hbWVcIiAvPlxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJycmRfX2hpZGUtdXNlcm5hbWVcIiBpZD1cInJyZC11c2VybmFtZVwiPlxuXHRcdFx0XHR7Z2V0TWVzc2FnZSgnaGlkZVVzZXJuYW1lJyl9XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3NOYW1lPXsncnJkX19jb250ZW50LXdyYXBwZXInfT5cblx0XHRcdDxpbnB1dCBuYW1lPVwic3VtbWFyeVwiIGlkPVwicnJkX19oaWRlLXN1bW1hcnlcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInN1bW1hcnlcIiAvPlxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJycmRfX2hpZGUtc3VtbWFyeVwiIGlkPVwicnJkLXN1bW1hcnlcIj5cblx0XHRcdFx0e2dldE1lc3NhZ2UoJ2hpZGVTdW1tYXJ5Jyl9XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHRcdDxiciAvPlxuXHRcdDxiciAvPlxuXHRcdDw+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb24nKX08Lz5cblx0XHQ8YnIgLz5cblx0XHQ8c2VsZWN0IG5hbWU9XCJycmRfX3JlYXNvblwiIGlkPVwicnJkX19yZWFzb25cIj5cblx0XHRcdDxvcHRpb24gdmFsdWU9e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDEnKX0+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDEnKX08L29wdGlvbj5cblx0XHRcdDxvcHRpb24gdmFsdWU9e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDInKX0+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDInKX08L29wdGlvbj5cblx0XHRcdDxvcHRpb24gdmFsdWU9e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDMnKX0+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDMnKX08L29wdGlvbj5cblx0XHRcdDxvcHRpb24gdmFsdWU9e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDQnKX0+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDQnKX08L29wdGlvbj5cblx0XHRcdDxvcHRpb24gdmFsdWU9e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDUnKX0+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDUnKX08L29wdGlvbj5cblx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj57Z2V0TWVzc2FnZSgnaGlkZVJlYXNvbk90aGVyJyl9PC9vcHRpb24+XG5cdFx0PC9zZWxlY3Q+XG5cdFx0PGJyIC8+XG5cdFx0PGJyIC8+XG5cdFx0PD57Z2V0TWVzc2FnZSgnb3RoZXJSZWFzb25zJyl9PC8+XG5cdFx0PGJyIC8+XG5cdFx0PHRleHRhcmVhIG5hbWU9XCJvdGhlclJlYXNvbnNcIiBpZD1cInJyZF9fb3RoZXItcmVhc29uc1wiIHJvd3M9ezR9PjwvdGV4dGFyZWE+XG5cdDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nSW5uZXI7XG4iLCAiY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRjb25zdCB7d2dVTFN9ID0gd2luZG93O1xuXHRyZXR1cm4ge1xuXHRcdGVkaXRTdW1tYXJ5OiB3Z1VMUyhcblx0XHRcdCdbW01lZGlhV2lraTpHYWRnZXQtUlJELmpzfOWNiuiHquWKqOaPkOaKpV1d5L+u6K6i54mI5pys5Yig6ZmkJyxcblx0XHRcdCdbW01lZGlhV2lraTpHYWRnZXQtUlJELmpzfOWNiuiHquWLleaPkOWgsV1d5L+u6KiC54mI5pys5Yiq6ZmkJ1xuXHRcdCksXG5cdFx0ZXJyTm9SZXZpc2lvblByb3ZpZGVkOiB3Z1VMUygn5oKo5rKh5pyJ6YCJ5oup6ZyA6ZqQ6JeP55qE54mI5pys77yBJywgJ+aCqOaykuaciemBuOaTh+mcgOmaseiXj+eahOeJiOacrO+8gScpLFxuXHRcdGVyck5vSXRlbVByb3ZpZGVkOiB3Z1VMUygn5oKo5rKh5pyJ6YCJ5oup6ZyA6ZqQ6JeP55qE6aG555uu77yBJywgJ+aCqOaykuaciemBuOaTh+mcgOmaseiXj+eahOmgheebru+8gScpLFxuXHRcdHdhcm5Ob1JlYXNvblByb3ZpZGVkOiB3Z1VMUygn5oKo5rKh5pyJ6L6T5YWl5Lu75L2V55CG55Sx77yB56Gu5a6a6KaB57un57ut5ZCX77yfJywgJ+aCqOaykuaciei8uOWFpeS7u+S9leeQhueUse+8geeiuuWumuimgee5vOe6jOWXju+8nycpLFxuXHRcdGhpZGVJdGVtczogd2dVTFMoJ+mcgOmakOiXj+eahOmhueebru+8micsICfpnIDpmrHol4/nmoTpoIXnm67vvJonKSxcblx0XHRoaWRlQ29udGVudDogd2dVTFMoJ+e8lui+keWGheWuuScsICfnt6jovK/lhaflrrknKSxcblx0XHRoaWRlTG9nOiB3Z1VMUygn5pel5b+X55uu5qCH5LiO5Y+C5pWwJywgJ+aXpeiqjOebruaomeiIh+WPg+aVuCcpLFxuXHRcdGhpZGVVc2VybmFtZTogd2dVTFMoJ+e8lui+keiAheeUqOaIt+WQjS9JUOWcsOWdgCcsICfnt6jovK/ogIXnlKjmiLblkI0vSVDkvY3lnYAnKSxcblx0XHRoaWRlU3VtbWFyeTogd2dVTFMoJ+e8lui+keaRmOimgScsICfnt6jovK/mkZjopoEnKSxcblx0XHRoaWRlUmVhc29uOiB3Z1VMUygn55CG5o2u77yaJywgJ+eQhuaTmu+8micpLFxuXHRcdGhpZGVSZWFzb25SRDE6IHdnVUxTKCdSRDHvvJrmnaHnm67kuK3mmI7mmL7kvrXniq/okZfkvZzmnYPnmoTlhoXlrrknLCAnUkQx77ya5qKd55uu5Lit5piO6aGv5L6154qv6JGX5L2c5qyK55qE5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvblJEMjogd2dVTFMoJ1JEMu+8muS4pemHjeS+rui+seOAgei0rOS9juaIluaUu+WHu+aAp+aWh+acrCcsICdSRDLvvJrlmrTph43kvq7ovrHjgIHosrbkvY7miJbmlLvmk4rmgKfmlofmnKwnKSxcblx0XHRoaWRlUmVhc29uUkQzOiB3Z1VMUygnUkQz77ya57qv57K55omw5Lmx5oCn5YaF5a65JywgJ+e0lOeyueaTvuS6guaAp+WFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDQ6IHdnVUxTKCdSRDTvvJrmmI7mmL7ov53lj43ms5Xlvovms5Xop4TmiJbov53og4zlhazluo/oia/kv5fnmoTlhoXlrrknLCAnUkQ077ya5piO6aGv6YGV5Y+N5rOV5b6L5rOV6KaP5oiW6YGV6IOM5YWs5bqP6Imv5L+X55qE5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvblJENTogd2dVTFMoJ1JENe+8muWFtuS7luS4jeWunOWFrOW8gOeahOeJiOacrOWGheWuuScsICdSRDXvvJrlhbbku5bkuI3lrpzlhazplovnmoTniYjmnKzlhaflrrknKSxcblx0XHRoaWRlUmVhc29uT3RoZXI6IHdnVUxTKCfku4Xkvb/nlKjkuIvmlrnnmoTpmYTliqDnkIbnlLEnLCAn5YOF5L2/55So5LiL5pa555qE6ZmE5Yqg55CG55SxJyksXG5cdFx0b3RoZXJSZWFzb25zOiB3Z1VMUygn6ZmE5Yqg55CG55Sx77yI5Y+v6YCJ77yM5LiN55So562+5ZCN77yJJywgJ+mZhOWKoOeQhueUse+8iOWPr+mBuO+8jOS4jeeUqOewveWQje+8iScpLFxuXHRcdGRpYWxvZ1RpdGxlOiB3Z1VMUygn5o+Q5oql5L+u6K6i54mI5pys5Yig6ZmkJywgJ+aPkOWgseS/ruiogueJiOacrOWIqumZpCcpLFxuXHRcdGRpYWxvZ0J1dHRvblN1Ym1pdDogd2dVTFMoJ+aPkOaKpScsICfmj5DloLEnKSxcblx0XHRkaWFsb2dCdXR0b25DYW5jZWw6IHdnVUxTKCflj5bmtognLCAn5Y+W5raIJyksXG5cdFx0cmVwb3J0QnV0dG9uVGl0bGU6IHdnVUxTKCflsIbpgInkuK3nmoTniYjmnKzmj5DmiqXliLAnLCAn5bCH6YG45Lit55qE54mI5pys5o+Q5aCx5YiwJyksXG5cdFx0cmVwb3J0QnV0dG9uVGV4dDogd2dVTFMoJ+ivt+axguWIoOmZpOiiq+mAieeJiOacrCcsICfoq4vmsYLliKrpmaTooqvpgbjniYjmnKwnKSxcblx0XHRyZXBvcnRCdXR0b25Mb2dUZXh0OiB3Z1VMUygn6K+35rGC5Yig6Zmk6KKr6YCJ5pel5b+XJywgJ+iri+axguWIqumZpOiiq+mBuOaXpeiqjCcpLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge0lTX0xPRywgUlJEX1BBR0V9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHt0eXBlIHJyZENvbmZpZywgdHlwZSBycmRDb25maWdDaGVja0JveGVzLCB0eXBlIHJyZENvbmZpZ090aGVyc30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgRGlhbG9nSW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9EaWFsb2dJbm5lcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQgUmVwb3J0QnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvUmVwb3J0QnV0dG9uJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBjb25maWc6IHJyZENvbmZpZyA9IHtcblx0Y2hlY2tib3hlczoge30sXG5cdG90aGVyczoge30sXG59O1xubGV0IGlkczogc3RyaW5nW10gPSBbXTtcbmxldCAkZGlhbG9nOiBKUXVlcnk7XG5cbmNvbnN0IGxvYWRJRHMgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IGJveGVzOiBOb2RlTGlzdE9mPEhUTUxJbnB1dEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblx0Zm9yIChjb25zdCBib3ggb2YgYm94ZXMpIHtcblx0XHRpZiAoYm94LnR5cGUgPT09ICdjaGVja2JveCcgJiYgYm94LmNoZWNrZWQpIHtcblx0XHRcdGNvbnN0IGlkUmVnZXg6IFJlZ0V4cCA9IC9pZHNcXFsoXFxkKyldLztcblx0XHRcdGNvbnN0IGlkQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSBpZFJlZ2V4LmV4ZWMoYm94Lm5hbWUpO1xuXHRcdFx0aWYgKGlkQXJyYXkgJiYgaWRBcnJheVsxXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGlkcy5wdXNoKGlkQXJyYXlbMV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuY29uc3Qgc3VibWl0ID0gYXN5bmMgKHRvSGlkZTogc3RyaW5nLCByZWFzb246IHN0cmluZywgb3RoZXJSZWFzb25zOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0aWRzID0gWy4uLm5ldyBTZXQoaWRzKV07XG5cdGNvbnN0IHJyZEFycjogc3RyaW5nW10gPSBbXG5cdFx0J3t7UmV2ZGVsJyxcblx0XHQnfHN0YXR1cyA9ICcsXG5cdFx0YHxhcnRpY2xlID0gJHttdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyl9YCxcblx0XHRgfHNldCA9ICR7dG9IaWRlfWAsXG5cdFx0YHxyZWFzb24gPSAke3JlYXNvbn0ke290aGVyUmVhc29uc31gLFxuXHRdO1xuXHRmb3IgKGNvbnN0IFtpbmRleCwgaWRdIG9mIGlkcy5lbnRyaWVzKCkpIHtcblx0XHRycmRBcnIucHVzaChgfGlkJHtpbmRleCArIDF9ID0gJHtpZH1gKTtcblx0fVxuXHRycmRBcnIucHVzaCgnfX1cXG4tLX5+Jy5jb25jYXQoJ35+JykpO1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnUlJELzIuMCcpO1xuXHR0cnkge1xuXHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0dGl0bGVzOiBSUkRfUEFHRSxcblx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdH07XG5cdFx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRsZXQgY29udGVudDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChxdWVyeS5wYWdlcykge1xuXHRcdFx0W3tjb250ZW50fV0gPSBxdWVyeS5wYWdlc1swXS5yZXZpc2lvbnM7XG5cdFx0fVxuXHRcdGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGBFcnJvciB3aGVuIGxvYWRpbmcgcGFnZSAke1JSRF9QQUdFfTogbWlzc2luZ2AsIHt0YWc6ICdSUkQnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBfcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlOiBSUkRfUEFHRSxcblx0XHRcdFx0dGV4dDogYCR7Y29udGVudH1cXG5cXG4ke3JyZEFyci5qb2luKCdcXG4nKX1gLFxuXHRcdFx0XHRzdW1tYXJ5OiBnZXRNZXNzYWdlKCdlZGl0U3VtbWFyeScpLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihfcGFyYW1zKTtcblx0XHRcdGlmIChyZXN1bHRbJ2VkaXQnXT8ucmVzdWx0ID09PSAnU3VjY2VzcycpIHtcblx0XHRcdFx0bG9jYXRpb24ucmVwbGFjZShtdy51dGlsLmdldFVybChSUkRfUEFHRSkpO1xuXHRcdFx0fSBlbHNlIGlmIChyZXN1bHRbJ2Vycm9yJ10/LmNvZGUpIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoYFNvbWUgZXJyb3JzIG9jY3VyZWQgd2hpbGUgc2F2aW5nIHBhZ2U6ICR7cmVzdWx0WydlcnJvciddLmNvZGV9YCwge1xuXHRcdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeSgnU29tZSBlcnJvcnMgb2NjdXJlZCB3aGlsZSBzYXZpbmcgcGFnZTogdW5rbm93bicsIHtcblx0XHRcdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoYEVycm9yIHdoZW4gZWRpdGluZyBwYWdlICR7UlJEX1BBR0V9YCwge3RhZzogJ1JSRCcsIHR5cGU6ICdlcnJvcid9KTtcblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdHZvaWQgbXcubm90aWZ5KGBFcnJvciB3aGVuIGxvYWRpbmcgcGFnZSAke1JSRF9QQUdFfWAsIHt0YWc6ICdSUkQnLCB0eXBlOiAnZXJyb3InfSk7XG5cdH1cbn07XG5cbmNvbnN0IHVwZGF0ZUNvbmZpZyA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3QgY2hlY2tCb3hlczogcnJkQ29uZmlnQ2hlY2tCb3hlcyA9IHt9O1xuXHRpZiAoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNycmRfX2hpZGUtY29udGVudCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpPy5jaGVja2VkKSB7XG5cdFx0Y2hlY2tCb3hlcy5ycmRIaWRlQ29udGVudCA9IHRydWU7XG5cdH1cblx0aWYgKChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcnJkX19oaWRlLXVzZXJuYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCk/LmNoZWNrZWQpIHtcblx0XHRjaGVja0JveGVzLnJyZEhpZGVVc2VybmFtZSA9IHRydWU7XG5cdH1cblx0aWYgKChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcnJkX19oaWRlLXN1bW1hcnknKSBhcyBIVE1MSW5wdXRFbGVtZW50KT8uY2hlY2tlZCkge1xuXHRcdGNoZWNrQm94ZXMucnJkSGlkZVN1bW1hcnkgPSB0cnVlO1xuXHR9XG5cdGNvbmZpZy5jaGVja2JveGVzID0gY2hlY2tCb3hlcztcblx0Y29uc3Qgb3RoZXJzOiBycmRDb25maWdPdGhlcnMgPSB7XG5cdFx0cnJkUmVhc29uOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JyZF9fcmVhc29uJykgYXMgSFRNTElucHV0RWxlbWVudCk/LnZhbHVlLFxuXHRcdHJyZE90aGVyUmVhc29uczogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNycmRfX290aGVyLXJlYXNvbnMnKSBhcyBIVE1MSW5wdXRFbGVtZW50KT8udmFsdWUsXG5cdH07XG5cdGNvbmZpZy5vdGhlcnMgPSBvdGhlcnM7XG59O1xuXG5jb25zdCBsb2FkQ29uZmlnID0gKCk6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IFtpZCwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZy5vdGhlcnMpKSB7XG5cdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApICE9PSBudWxsKSB7XG5cdFx0XHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSB2YWx1ZTtcblx0XHR9XG5cdH1cblx0Zm9yIChjb25zdCBbaWQsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjb25maWcuY2hlY2tib3hlcykpIHtcblx0XHRpZiAodmFsdWUgPT09IHRydWUgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkgIT09IG51bGwpIHtcblx0XHRcdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKSBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkID0gdHJ1ZTtcblx0XHR9XG5cdH1cbn07XG5cbmNvbnN0IHNob3dEaWFsb2cgPSAoKTogdm9pZCA9PiB7XG5cdGxvYWRJRHMoKTtcblx0aWYgKCFpZHMubGVuZ3RoKSB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnZXJyTm9SZXZpc2lvblByb3ZpZGVkJyksIHt0YWc6ICdSUkQnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IGh0bWwgPSA8RGlhbG9nSW5uZXIgLz47XG5cdGlmICgkZGlhbG9nKSB7XG5cdFx0JGRpYWxvZy5odG1sKGh0bWwpLmRpYWxvZygnb3BlbicpO1xuXHRcdGxvYWRDb25maWcoKTtcblx0XHRyZXR1cm47XG5cdH1cblx0JGRpYWxvZyA9ICQoaHRtbCkuZGlhbG9nKHtcblx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnZGlhbG9nVGl0bGUnKSxcblx0XHRtaW5XaWR0aDogNTE1LFxuXHRcdG1pbkhlaWdodDogMTUwLFxuXHRcdGNsb3NlOiB1cGRhdGVDb25maWcsXG5cdFx0YnV0dG9uczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdkaWFsb2dCdXR0b25TdWJtaXQnKSxcblx0XHRcdFx0Y2xpY2soKTogdm9pZCB7XG5cdFx0XHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0XHRcdFx0Y29uc3QgcmVhc29uOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBjb25maWcub3RoZXJzLnJyZFJlYXNvbjtcblx0XHRcdFx0XHRsZXQgb3RoZXJSZWFzb25zOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBjb25maWcub3RoZXJzLnJyZE90aGVyUmVhc29ucztcblx0XHRcdFx0XHRpZiAob3RoZXJSZWFzb25zICYmIHJlYXNvbikge1xuXHRcdFx0XHRcdFx0b3RoZXJSZWFzb25zID0gYO+8jCR7b3RoZXJSZWFzb25zfWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IHRvSGlkZTogc3RyaW5nW10gPSBbXTtcblx0XHRcdFx0XHRpZiAoY29uZmlnLmNoZWNrYm94ZXMucnJkSGlkZUNvbnRlbnQpIHtcblx0XHRcdFx0XHRcdHRvSGlkZS5wdXNoKElTX0xPRyA/IGdldE1lc3NhZ2UoJ2hpZGVMb2cnKSA6IGdldE1lc3NhZ2UoJ2hpZGVDb250ZW50JykpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY29uZmlnLmNoZWNrYm94ZXMucnJkSGlkZVVzZXJuYW1lKSB7XG5cdFx0XHRcdFx0XHR0b0hpZGUucHVzaChnZXRNZXNzYWdlKCdoaWRlVXNlcm5hbWUnKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjb25maWcuY2hlY2tib3hlcy5ycmRIaWRlU3VtbWFyeSkge1xuXHRcdFx0XHRcdFx0dG9IaWRlLnB1c2goZ2V0TWVzc2FnZSgnaGlkZVN1bW1hcnknKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxldCBjb250OiBib29sZWFuID0gdHJ1ZTtcblx0XHRcdFx0XHRpZiAoIXRvSGlkZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ2Vyck5vSXRlbVByb3ZpZGVkJyksIHt0YWc6ICdSUkQnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghcmVhc29uICYmICFvdGhlclJlYXNvbnMpIHtcblx0XHRcdFx0XHRcdGNvbnQgPSBjb25maXJtKGdldE1lc3NhZ2UoJ3dhcm5Ob1JlYXNvblByb3ZpZGVkJykpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY29udCkge1xuXHRcdFx0XHRcdFx0dm9pZCBzdWJtaXQodG9IaWRlLmpvaW4oJ+OAgScpLCByZWFzb24gPz8gJycsIG90aGVyUmVhc29ucyA/PyAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnZGlhbG9nQnV0dG9uQ2FuY2VsJyksXG5cdFx0XHRcdGNsaWNrKCk6IHZvaWQge1xuXHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYWluID0gKCk6IHZvaWQgPT4ge1xuXHQvLyBGb3IgYWN0aW9uPWhpc3RvcnkgYW5kIFNwZWNpYWw6TG9nXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdCcuaGlzdG9yeXN1Ym1pdC5tdy1oaXN0b3J5LWNvbXBhcmVzZWxlY3RlZHZlcnNpb25zLWJ1dHRvbiwgLmVkaXRjaGFuZ2V0YWdzLWxvZy1zdWJtaXQubXctbG9nLWVkaXRjaGFuZ2V0YWdzLWJ1dHRvbidcblx0KSkge1xuXHRcdGNvbnN0IHJlcG9ydEJ1dHRvbiA9IDxSZXBvcnRCdXR0b24gb25DbGljaz17c2hvd0RpYWxvZ30gLz47XG5cdFx0ZWxlbWVudC5hZnRlcihyZXBvcnRCdXR0b24pO1xuXHR9XG59O1xuIiwgImltcG9ydCB7SVNfTE9HLCBSUkRfUEFHRX0gZnJvbSAnLi4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdG9uQ2xpY2soKTogdm9pZDtcbn1cblxuY29uc3QgUmVwb3J0QnV0dG9uID0gKHtvbkNsaWNrfTogUHJvcHMpID0+IChcblx0PGJ1dHRvblxuXHRcdGNsYXNzTmFtZT17WydoaXN0b3J5c3VibWl0JywgYG13LSR7SVNfTE9HID8gJ2xvZycgOiAnaGlzdG9yeSd9LXJyZGAsICdtdy11aS1idXR0b24nLCAnY2R4LWJ1dHRvbiddfVxuXHRcdG5hbWU9eydyZXBvcnRSUkQnfVxuXHRcdHR5cGU9eydidXR0b24nfVxuXHRcdHRpdGxlPXtnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25UaXRsZScpICsgUlJEX1BBR0V9XG5cdFx0b25DbGljaz17b25DbGlja31cblx0PlxuXHRcdHtJU19MT0cgPyBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25Mb2dUZXh0JykgOiBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25UZXh0Jyl9XG5cdDwvYnV0dG9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0QnV0dG9uO1xuIiwgImltcG9ydCAnLi9SUkQubGVzcyc7XG5pbXBvcnQge0lTX0xPRywgSVNfV0dfSElTVE9SWV9BQ1RJT059IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge21haW59IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuaWYgKElTX1dHX0hJU1RPUllfQUNUSU9OIHx8IElTX0xPRykge1xuXHQkKG1haW4pO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSx3RkFBQUEsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRLFNBQVUsSUFBSTtBQUN4QixhQUFPLE1BQU0sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUNuQztBQUdBLElBQUFBLFFBQU87QUFBQSxJQUVMLE1BQU0sT0FBTyxjQUFjLFlBQVksVUFBVSxLQUNqRCxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU07QUFBQSxJQUV6QyxNQUFNLE9BQU8sUUFBUSxZQUFZLElBQUksS0FDckMsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNLEtBQ3pDLE1BQU0sT0FBTyxXQUFRLFlBQVksT0FBSTtBQUFBLElBRXBDLDJCQUFZO0FBQUUsYUFBTztBQUFBLElBQU0sRUFBRyxLQUFLLFNBQVMsYUFBYSxFQUFFO0FBQUE7QUFBQTs7O0FDZjlEO0FBQUEsdUZBQUFDLFNBQUE7QUFBQTtBQUNBLElBQUFBLFFBQU8sVUFBVSxTQUFVLE1BQU07QUFDL0IsVUFBSTtBQUNGLGVBQU8sQ0FBQyxDQUFDLEtBQUs7QUFBQSxNQUNoQixTQUFT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b2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJTeW1ib2wiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImRvY3VtZW50IiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlR5cGVFcnJvciIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICIkIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJTZXQiLCAibW9kdWxlIiwgIlNldCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJTZXQiLCAiJCIsICJtb2R1bGUiLCAiU2V0IiwgIiQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICIkIiwgIm1vZHVsZSIsICIkIiwgIm1vZHVsZSIsICIkIiwgIm1vZHVsZSIsICIkIiwgIm1vZHVsZSIsICIkIiwgIldHX0FDVElPTiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIklTX1dHX0hJU1RPUllfQUNUSU9OIiwgIklTX0xPRyIsICJSUkRfUEFHRSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIndnVUxTIiwgIndpbmRvdyIsICJlZGl0U3VtbWFyeSIsICJlcnJOb1JldmlzaW9uUHJvdmlkZWQiLCAiZXJyTm9JdGVtUHJvdmlkZWQiLCAid2Fybk5vUmVhc29uUHJvdmlkZWQiLCAiaGlkZUl0ZW1zIiwgImhpZGVDb250ZW50IiwgImhpZGVMb2ciLCAiaGlkZVVzZXJuYW1lIiwgImhpZGVTdW1tYXJ5IiwgImhpZGVSZWFzb24iLCAiaGlkZVJlYXNvblJEMSIsICJoaWRlUmVhc29uUkQyIiwgImhpZGVSZWFzb25SRDMiLCAiaGlkZVJlYXNvblJENCIsICJoaWRlUmVhc29uUkQ1IiwgImhpZGVSZWFzb25PdGhlciIsICJvdGhlclJlYXNvbnMiLCAiZGlhbG9nVGl0bGUiLCAiZGlhbG9nQnV0dG9uU3VibWl0IiwgImRpYWxvZ0J1dHRvbkNhbmNlbCIsICJyZXBvcnRCdXR0b25UaXRsZSIsICJyZXBvcnRCdXR0b25UZXh0IiwgInJlcG9ydEJ1dHRvbkxvZ1RleHQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkRpYWxvZ0lubmVyIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJGcmFnbWVudCIsICJjbGFzc05hbWUiLCAibmFtZSIsICJ0eXBlIiwgInZhbHVlIiwgImNoZWNrZWQiLCAiaHRtbEZvciIsICJyb3dzIiwgIkRpYWxvZ0lubmVyX2RlZmF1bHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJSZXBvcnRCdXR0b24iLCAib25DbGljayIsICJjb25jYXQiLCAidGl0bGUiLCAiUmVwb3J0QnV0dG9uX2RlZmF1bHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImNoZWNrYm94ZXMiLCAib3RoZXJzIiwgImlkcyIsICIkZGlhbG9nIiwgImxvYWRJRHMiLCAiYm94ZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJib3giLCAiaWRSZWdleCIsICJpZEFycmF5IiwgImV4ZWMiLCAicHVzaCIsICJlcnIiLCAiZSIsICJmIiwgInN1Ym1pdCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRvSGlkZSIsICJyZWFzb24iLCAiU2V0IiwgInJyZEFyciIsICJfaXRlcmF0b3IzIiwgImVudHJpZXMiLCAiX3N0ZXAzIiwgImluZGV4IiwgImFwaSIsICJpbml0TXdBcGkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRpdGxlcyIsICJydnByb3AiLCAicXVlcnkiLCAiY29udGVudCIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAibm90aWZ5IiwgInRhZyIsICJfcmVzdWx0JGVkaXQiLCAiX3Jlc3VsdCRlcnJvciIsICJfcGFyYW1zIiwgInRleHQiLCAiam9pbiIsICJzdW1tYXJ5IiwgInJlc3VsdCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJsb2NhdGlvbiIsICJyZXBsYWNlIiwgInV0aWwiLCAiZ2V0VXJsIiwgImNvZGUiLCAiX3giLCAiX3gyIiwgIl94MyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAidXBkYXRlQ29uZmlnIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QyIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDMiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0NCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3Q1IiwgImNoZWNrQm94ZXMiLCAicXVlcnlTZWxlY3RvciIsICJycmRIaWRlQ29udGVudCIsICJycmRIaWRlVXNlcm5hbWUiLCAicnJkSGlkZVN1bW1hcnkiLCAicnJkUmVhc29uIiwgInJyZE90aGVyUmVhc29ucyIsICJsb2FkQ29uZmlnIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAibGVuZ3RoIiwgIl9pMiIsICJfT2JqZWN0JGVudHJpZXMyIiwgInNob3dEaWFsb2ciLCAiaHRtbCIsICJkaWFsb2ciLCAiJCIsICJtaW5XaWR0aCIsICJtaW5IZWlnaHQiLCAiY2xvc2UiLCAiYnV0dG9ucyIsICJjbGljayIsICJjb250IiwgImNvbmZpcm0iLCAiX290aGVyUmVhc29ucyIsICJtYWluIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImVsZW1lbnQiLCAicmVwb3J0QnV0dG9uIiwgImFmdGVyIl0KfQo=
