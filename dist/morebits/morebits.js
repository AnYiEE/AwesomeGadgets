/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://github.com/wikimedia-gadgets/twinkle-core/tree/master/morebits}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/morebits}
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
    var $ = require_export();
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
    $({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
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

// dist/morebits/morebits.js
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
//! src/morebits/morebits.js
/*! Twinkle.js - morebits.js */
(function morebits($) {
  const Morebits = {};
  window.Morebits = Morebits;
  Morebits.l10n = {
    /**
     * Local aliases for "redirect" magic word.
     * Check using api.php?action=query&format=json&meta=siteinfo&formatversion=2&siprop=magicwords
     */
    redirectTagAliases: ["#REDIRECT", "#重定向"],
    /**
     * Takes a string as argument and checks if it is a timestamp or not
     * If not, it returns null. If yes, it returns an array of integers
     * in the format [year, month, date, hour, minute, second]
     * which can be passed to Date.UTC()
     *
     * @param {string} str
     * @returns {number[] | null}
     */
    signatureTimestampFormat: (str) => {
      const rgxUTC = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(UTC\)/;
      const rgxCST = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(CST\)/;
      const match = rgxUTC.exec(str) || rgxCST.exec(str);
      const matchCST = rgxCST.exec(str);
      if (!match) {
        return null;
      }
      const month = Morebits.date.localeData.months.indexOf(match[4]);
      if (month === -1) {
        return null;
      }
      return matchCST ? [match[1], match[2] - 1, match[3], match[4] - 8, match[5]] : [match[1], match[2] - 1, match[3], match[4], match[5]];
    }
  };
  Morebits.userIsInGroup = (group) => {
    return mw.config.get("wgUserGroups").includes(group);
  };
  Morebits.userIsSysop = Morebits.userIsInGroup("sysop") || Morebits.userIsInGroup("steward");
  Morebits.sanitizeIPv6 = (address) => {
    console.warn("NOTE: Morebits.sanitizeIPv6 was renamed to Morebits.ip.sanitizeIPv6 in February 2021, please use that instead");
    return Morebits.ip.sanitizeIPv6(address);
  };
  Morebits.isPageRedirect = () => {
    const $body = $("body");
    return !!(mw.config.get("wgIsRedirect") || document.querySelector("#softredirect") || $body.find(".box-RfD").length || $body.find(".box-Redirect_category_shell").length);
  };
  Morebits.pageNameNorm = mw.config.get("wgPageName").replace(/_/g, " ");
  Morebits.pageNameRegex = (pageName) => {
    if (pageName === "") {
      return "";
    }
    const [firstChar] = pageName;
    const remainder = Morebits.string.escapeRegExp(pageName.slice(1));
    if (mw.Title.phpCharToUpper(firstChar) !== firstChar.toLowerCase()) {
      return "[".concat(mw.Title.phpCharToUpper(firstChar)).concat(firstChar.toLowerCase(), "]").concat(remainder);
    }
    return Morebits.string.escapeRegExp(firstChar) + remainder;
  };
  Morebits.createHtml = (input) => {
    const fragment = document.createDocumentFragment();
    if (!input) {
      return fragment;
    }
    if (!Array.isArray(input)) {
      input = [input];
    }
    var _iterator = _createForOfIteratorHelper(input), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const element = _step.value;
        if (element instanceof Node) {
          fragment.appendChild(element);
        } else {
          var _iterator2 = _createForOfIteratorHelper($.parseHTML(Morebits.createHtml.renderWikilinks(element))), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const node = _step2.value;
              fragment.appendChild(node);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return fragment;
  };
  Morebits.createHtml.renderWikilinks = (text) => {
    const ub = new Morebits.unbinder(text);
    ub.unbind("<code>", "</code>");
    ub.content = ub.content.replace(/\[\[:?(?:([^|\]]+?)\|)?([^\]|]+?)\]\]/g, (_, target, text_) => {
      if (!target) {
        target = text_;
      }
      return '<a rel="noopener" target="_blank" href="'.concat(mw.util.getUrl(target), '" title="').concat(target.replace(/"/g, "&#34;"), '">').concat(text_, "</a>");
    });
    return ub.rebind();
  };
  Morebits.namespaceRegex = (namespaces) => {
    if (!Array.isArray(namespaces)) {
      namespaces = [namespaces];
    }
    const aliases = [];
    let regex;
    for (var _i = 0, _Object$entries = Object.entries(mw.config.get("wgNamespaceIds")); _i < _Object$entries.length; _i++) {
      const [name, number] = _Object$entries[_i];
      if (namespaces.includes(number)) {
        aliases.push([...name].map((char) => {
          return Morebits.pageNameRegex(char);
        }).join(""));
      }
    }
    switch (aliases.length) {
      case 0:
        regex = "";
        break;
      case 1:
        [regex] = aliases;
        break;
      default:
        regex = "(?:".concat(aliases.join("|"), ")");
        break;
    }
    return regex;
  };
  Morebits.quickForm = function(event, eventType) {
    this.root = new Morebits.quickForm.element({
      type: "form",
      event,
      eventType
    });
  };
  Morebits.quickForm.prototype.render = function() {
    const ret = this.root.render();
    ret.names = {};
    return ret;
  };
  Morebits.quickForm.prototype.append = function(data) {
    return this.root.append(data);
  };
  Morebits.quickForm.element = function(data) {
    this.data = data;
    this.childs = [];
  };
  Morebits.quickForm.element.id = 0;
  Morebits.quickForm.element.prototype.append = function(data) {
    let child;
    if (data instanceof Morebits.quickForm.element) {
      child = data;
    } else {
      child = new Morebits.quickForm.element(data);
    }
    this.childs.push(child);
    return child;
  };
  Morebits.quickForm.element.prototype.render = function(internalSubgroupId) {
    const currentNode = this.compute(this.data, internalSubgroupId);
    for (let i = 0; i < this.childs.length; ++i) {
      currentNode[1].appendChild(this.childs[i].render());
    }
    return currentNode[0];
  };
  Morebits.quickForm.element.prototype.compute = function(data, inId) {
    let node;
    let childContainer = null;
    let label;
    const id = "".concat(inId ? "".concat(inId, "_") : "", "node_").concat(Morebits.quickForm.element.id++);
    if (data.adminonly && !Morebits.userIsSysop) {
      data.type = "hidden";
    }
    let i;
    let current;
    let subnode;
    switch (data.type) {
      case "form":
        node = document.createElement("form");
        node.className = "quickform";
        node.setAttribute("action", "javascript:void(0);");
        if (data.event) {
          node.addEventListener(data.eventType || "submit", data.event, false);
        }
        break;
      case "fragment":
        node = document.createDocumentFragment();
        return [node, node];
      case "select": {
        node = document.createElement("div");
        node.setAttribute("id", "div_".concat(id));
        if (data.label) {
          label = node.appendChild(document.createElement("label"));
          label.setAttribute("for", id);
          label.appendChild(Morebits.createHtml(data.label));
        }
        const select = node.appendChild(document.createElement("select"));
        if (data.event) {
          select.addEventListener("change", data.event, false);
        }
        if (data.multiple) {
          select.setAttribute("multiple", "multiple");
        }
        if (data.size) {
          select.setAttribute("size", data.size);
        }
        if (data.disabled) {
          select.disabled = true;
        }
        select.setAttribute("name", data.name);
        if (data.list) {
          for (i = 0; i < data.list.length; ++i) {
            current = data.list[i];
            if (current.list) {
              current.type = "optgroup";
            } else {
              current.type = "option";
            }
            subnode = this.compute(current);
            select.appendChild(subnode[0]);
          }
        }
        childContainer = select;
        break;
      }
      case "option":
        node = document.createElement("option");
        node.values = data.value;
        node.setAttribute("value", data.value);
        if (data.selected) {
          node.setAttribute("selected", "selected");
        }
        if (data.disabled) {
          node.disabled = true;
        }
        if (data.hidden) {
          node.setAttribute("hidden", "");
        }
        node.setAttribute("label", data.label);
        node.appendChild(document.createTextNode(data.label));
        break;
      case "optgroup":
        node = document.createElement("optgroup");
        node.setAttribute("label", data.label);
        if (data.list) {
          for (i = 0; i < data.list.length; ++i) {
            current = data.list[i];
            current.type = "option";
            subnode = this.compute(current);
            node.appendChild(subnode[0]);
          }
        }
        break;
      case "field":
        node = document.createElement("fieldset");
        label = node.appendChild(document.createElement("legend"));
        label.appendChild(Morebits.createHtml(data.label));
        if (data.name) {
          node.setAttribute("name", data.name);
        }
        if (data.disabled) {
          node.disabled = true;
        }
        break;
      case "checkbox":
      case "radio":
        node = document.createElement("div");
        if (data.list) {
          for (i = 0; i < data.list.length; ++i) {
            const curId = "".concat(id, "_").concat(i);
            current = data.list[i];
            let curDiv;
            if (current.type === "header") {
              curDiv = node.appendChild(document.createElement("h6"));
              curDiv.appendChild(document.createTextNode(current.label));
              if (current.tooltip) {
                Morebits.quickForm.element.generateTooltip(curDiv, current);
              }
              continue;
            }
            curDiv = node.appendChild(document.createElement("div"));
            if (current.hidden) {
              curDiv.setAttribute("hidden", "");
            }
            subnode = curDiv.appendChild(document.createElement("input"));
            subnode.values = current.value;
            subnode.setAttribute("value", current.value);
            subnode.setAttribute("type", data.type);
            subnode.setAttribute("id", curId);
            subnode.setAttribute("name", current.name || data.name);
            if (current.name) {
              subnode.setAttribute("data-single", "data-single");
            }
            if (current.checked) {
              subnode.checked = true;
            }
            if (current.disabled) {
              subnode.disabled = true;
            }
            label = curDiv.appendChild(document.createElement("label"));
            label.appendChild(Morebits.createHtml(current.label));
            label.setAttribute("for", curId);
            if (current.tooltip) {
              Morebits.quickForm.element.generateTooltip(label, current);
            }
            if (current.style) {
              label.setAttribute("style", current.style);
            }
            let event;
            if (current.subgroup) {
              let tmpgroup = current.subgroup;
              if (!Array.isArray(tmpgroup)) {
                tmpgroup = [tmpgroup];
              }
              const subgroupRaw = new Morebits.quickForm.element({
                type: "div",
                id: "".concat(id, "_").concat(i, "_subgroup")
              });
              var _iterator3 = _createForOfIteratorHelper(tmpgroup), _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  const el = _step3.value;
                  const newEl = {
                    ...el
                  };
                  if (!newEl.type) {
                    newEl.type = data.type;
                  }
                  newEl.name = "".concat(current.name || data.name, ".").concat(newEl.name);
                  subgroupRaw.append(newEl);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              const subgroup = subgroupRaw.render(curId);
              subgroup.className = "quickformSubgroup";
              subnode.subgroup = subgroup;
              subnode.shown = false;
              event = (e) => {
                if (e.target.checked) {
                  e.target.parentNode.appendChild(e.target.subgroup);
                  if (e.target.type === "radio") {
                    const {
                      name
                    } = e.target;
                    if (e.target.form.names[name] !== void 0) {
                      e.target.form.names[name].parentNode.removeChild(e.target.form.names[name].subgroup);
                    }
                    e.target.form.names[name] = e.target;
                  }
                } else {
                  e.target.parentNode.removeChild(e.target.subgroup);
                }
              };
              subnode.addEventListener("change", event, true);
              if (current.checked) {
                subnode.parentNode.appendChild(subgroup);
              }
            } else if (data.type === "radio") {
              event = (e) => {
                if (e.target.checked) {
                  const {
                    name
                  } = e.target;
                  if (e.target.form.names[name] !== void 0) {
                    e.target.form.names[name].parentNode.removeChild(e.target.form.names[name].subgroup);
                  }
                  delete e.target.form.names[name];
                }
              };
              subnode.addEventListener("change", event, true);
            }
            if (data.event) {
              subnode.addEventListener("change", data.event, false);
            } else if (current.event) {
              subnode.addEventListener("change", current.event, true);
            }
          }
        }
        if (data.shiftClickSupport && data.type === "checkbox") {
          Morebits.checkboxShiftClickSupport(Morebits.quickForm.getElements(node, data.name));
        }
        break;
      case "number":
      case "input":
        node = document.createElement("div");
        node.setAttribute("id", "div_".concat(id));
        if (data.hidden) {
          node.setAttribute("hidden", "");
        }
        if (data.label) {
          label = node.appendChild(document.createElement("label"));
          label.appendChild(Morebits.createHtml(data.label));
          label.setAttribute("for", data.id || id);
        }
        subnode = node.appendChild(document.createElement("input"));
        if (data.value) {
          subnode.setAttribute("value", data.value);
        }
        if (data.placeholder) {
          subnode.setAttribute("placeholder", data.placeholder);
        }
        subnode.setAttribute("name", data.name);
        if (data.type === "input") {
          subnode.setAttribute("type", "text");
        } else {
          subnode.setAttribute("type", "number");
          for (var _i2 = 0, _arr = ["min", "max", "step", "list"]; _i2 < _arr.length; _i2++) {
            const att = _arr[_i2];
            if (data[att]) {
              subnode.setAttribute(att, data[att]);
            }
          }
        }
        for (var _i3 = 0, _arr2 = ["value", "size", "placeholder", "maxlength"]; _i3 < _arr2.length; _i3++) {
          const att = _arr2[_i3];
          if (data[att]) {
            subnode.setAttribute(att, data[att]);
          }
        }
        for (var _i4 = 0, _arr3 = ["disabled", "required", "readonly"]; _i4 < _arr3.length; _i4++) {
          const att = _arr3[_i4];
          if (data[att]) {
            subnode.setAttribute(att, att);
          }
        }
        if (data.event) {
          subnode.addEventListener("keyup", data.event, false);
        }
        childContainer = subnode;
        break;
      case "dyninput": {
        const min = data.min || 1;
        const max = data.max || Number.POSITIVE_INFINITY;
        node = document.createElement("div");
        label = node.appendChild(document.createElement("h5"));
        label.appendChild(Morebits.createHtml(data.label));
        const listNode = node.appendChild(document.createElement("div"));
        const more = this.compute({
          type: "button",
          label: "更多",
          disabled: min >= max,
          event: (e) => {
            const newNode = new Morebits.quickForm.element(e.target.sublist);
            e.target.area.appendChild(newNode.render());
            if (++e.target.counter >= e.target.max) {
              e.target.disabled = true;
            }
            e.stopPropagation();
          }
        });
        node.appendChild(more[0]);
        const [, moreButton] = more;
        const sublist = {
          type: "_dyninput_element",
          label: data.sublabel || data.label,
          name: data.name,
          value: data.value,
          size: data.size,
          remove: false,
          maxlength: data.maxlength,
          event: data.event
        };
        for (i = 0; i < min; ++i) {
          const elem = new Morebits.quickForm.element(sublist);
          listNode.appendChild(elem.render());
        }
        sublist.remove = true;
        sublist.morebutton = moreButton;
        sublist.listnode = listNode;
        moreButton.sublist = sublist;
        moreButton.area = listNode;
        moreButton.max = max - min;
        moreButton.counter = 0;
        break;
      }
      case "_dyninput_element":
        node = document.createElement("div");
        if (data.label) {
          label = node.appendChild(document.createElement("label"));
          label.appendChild(document.createTextNode(data.label));
          label.setAttribute("for", id);
        }
        subnode = node.appendChild(document.createElement("input"));
        if (data.value) {
          subnode.setAttribute("value", data.value);
        }
        subnode.setAttribute("name", data.name);
        subnode.setAttribute("type", "text");
        if (data.size) {
          subnode.setAttribute("size", data.size);
        }
        if (data.maxlength) {
          subnode.setAttribute("maxlength", data.maxlength);
        }
        if (data.event) {
          subnode.addEventListener("keyup", data.event, false);
        }
        if (data.remove) {
          const remove = this.compute({
            type: "button",
            label: "移除",
            event: (e) => {
              const list = e.target.listnode;
              const node_ = e.target.inputnode;
              const more = e.target.morebutton;
              list.removeChild(node_);
              --more.counter;
              more.removeAttribute("disabled");
              e.stopPropagation();
            }
          });
          node.appendChild(remove[0]);
          const [, removeButton] = remove;
          removeButton.inputnode = node;
          removeButton.listnode = data.listnode;
          removeButton.morebutton = data.morebutton;
        }
        break;
      case "hidden":
        node = document.createElement("input");
        node.setAttribute("type", "hidden");
        node.values = data.value;
        node.setAttribute("value", data.value);
        node.setAttribute("name", data.name);
        break;
      case "header":
        node = document.createElement("h5");
        node.appendChild(Morebits.createHtml(data.label));
        break;
      case "div":
        node = document.createElement("div");
        if (data.name) {
          node.setAttribute("name", data.name);
        }
        if (data.label) {
          const result = document.createElement("span");
          result.className = "quickformDescription";
          result.appendChild(Morebits.createHtml(data.label));
          node.appendChild(result);
        }
        break;
      case "submit":
        node = document.createElement("span");
        childContainer = node.appendChild(document.createElement("input"));
        childContainer.setAttribute("type", "submit");
        if (data.label) {
          childContainer.setAttribute("value", data.label);
        }
        childContainer.setAttribute("name", data.name || "submit");
        if (data.disabled) {
          childContainer.disabled = true;
        }
        break;
      case "button":
        node = document.createElement("span");
        childContainer = node.appendChild(document.createElement("input"));
        childContainer.setAttribute("type", "button");
        if (data.label) {
          childContainer.setAttribute("value", data.label);
        }
        childContainer.setAttribute("name", data.name);
        if (data.disabled) {
          childContainer.disabled = true;
        }
        if (data.event) {
          childContainer.addEventListener("click", data.event, false);
        }
        break;
      case "textarea":
        node = document.createElement("div");
        node.setAttribute("id", "div_".concat(id));
        if (data.hidden) {
          node.setAttribute("hidden", "");
        }
        if (data.label) {
          label = node.appendChild(document.createElement("h5"));
          const labelElement = document.createElement("label");
          labelElement.appendChild(Morebits.createHtml(data.label));
          labelElement.setAttribute("for", data.id || id);
          label.appendChild(labelElement);
        }
        subnode = node.appendChild(document.createElement("textarea"));
        subnode.setAttribute("name", data.name);
        if (data.cols) {
          subnode.setAttribute("cols", data.cols);
        }
        if (data.rows) {
          subnode.setAttribute("rows", data.rows);
        }
        if (data.disabled) {
          subnode.disabled = true;
        }
        if (data.required) {
          subnode.setAttribute("required", "required");
        }
        if (data.readonly) {
          subnode.setAttribute("readonly", "readonly");
        }
        if (data.value) {
          subnode.value = data.value;
        }
        if (data.placeholder) {
          subnode.placeholder = data.placeholder;
        }
        childContainer = subnode;
        break;
      default:
        throw new Error("Morebits.quickForm: unknown element type ".concat(data.type.toString()));
    }
    if (!childContainer) {
      childContainer = node;
    }
    if (data.tooltip) {
      Morebits.quickForm.element.generateTooltip(label || node, data);
    }
    if (data.extra) {
      childContainer.extra = data.extra;
    }
    if (data.$data) {
      $(childContainer).data(data.$data);
    }
    if (data.style) {
      childContainer.setAttribute("style", data.style);
    }
    if (data.className) {
      childContainer.className = childContainer.className ? "".concat(childContainer.className, " ").concat(data.className) : data.className;
    }
    childContainer.setAttribute("id", data.id || id);
    return [node, childContainer];
  };
  Morebits.quickForm.element.generateTooltip = (node, data) => {
    const tooltipButton = node.appendChild(document.createElement("span"));
    tooltipButton.className = "morebits-tooltipButton";
    tooltipButton.title = data.tooltip;
    tooltipButton.appendChild(document.createTextNode("?"));
    $(tooltipButton).tooltip({
      position: {
        my: "left top",
        at: "center bottom",
        collision: "flipfit"
      },
      // Deprecated in UI 1.12, but MW stuck on 1.9.2 indefinitely; see #398 and T71386
      tooltipClass: "morebits-ui-tooltip"
    });
  };
  Morebits.quickForm.getInputData = (form) => {
    const result = {};
    var _iterator4 = _createForOfIteratorHelper(form.elements), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const field = _step4.value;
        if (field.disabled || !field.name || !field.type || field.type === "submit" || field.type === "button") {
          continue;
        }
        const fieldNameNorm = field.name.slice(field.name.indexOf(".") + 1);
        switch (field.type) {
          case "radio":
            if (field.checked) {
              result[fieldNameNorm] = field.value;
            }
            break;
          case "checkbox":
            if (field.dataset.single) {
              result[fieldNameNorm] = field.checked;
            } else {
              result[fieldNameNorm] || (result[fieldNameNorm] = []);
              if (field.checked) {
                result[fieldNameNorm].push(field.value);
              }
            }
            break;
          case "select-multiple":
            result[fieldNameNorm] = $(field).val();
            break;
          case "text":
          case "textarea":
            result[fieldNameNorm] = field.value.trim();
            break;
          default:
            if (field.value) {
              result[fieldNameNorm] = field.value;
            }
            break;
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return result;
  };
  Morebits.quickForm.getElements = (form, fieldName) => {
    const $form = $(form);
    fieldName = $.escapeSelector(fieldName);
    let $elements = $form.find('[name="'.concat(fieldName, '"]'));
    if ($elements.length > 0) {
      return $elements.toArray();
    }
    $elements = $form.find("#".concat(fieldName));
    return $elements.toArray();
  };
  Morebits.quickForm.getCheckboxOrRadio = (elementArray, value) => {
    const found = elementArray.filter((element) => {
      return element.value === value;
    });
    if (found.length > 0) {
      return found[0];
    }
    return null;
  };
  Morebits.quickForm.getElementContainer = (element) => {
    if (element instanceof HTMLFieldSetElement || element instanceof HTMLDivElement || element instanceof HTMLHeadingElement) {
      return element;
    }
    return element.parentNode;
  };
  Morebits.quickForm.getElementLabelObject = (element) => {
    if (element.type === "button" || element.type === "submit" || element instanceof HTMLDivElement || element instanceof HTMLHeadingElement) {
      return element;
    } else if (element instanceof HTMLFieldSetElement) {
      return element.querySelector("legend");
    } else if (element instanceof HTMLTextAreaElement) {
      return element.parentNode.querySelector("h5");
    }
    return element.parentNode.querySelector("label");
  };
  Morebits.quickForm.getElementLabel = (element) => {
    const labelElement = Morebits.quickForm.getElementLabelObject(element);
    if (!labelElement) {
      return null;
    }
    return labelElement.firstChild.textContent;
  };
  Morebits.quickForm.setElementLabel = (element, labelText) => {
    const labelElement = Morebits.quickForm.getElementLabelObject(element);
    if (!labelElement) {
      return false;
    }
    labelElement.firstChild.textContent = labelText;
    return true;
  };
  Morebits.quickForm.overrideElementLabel = (element, temporaryLabelText) => {
    if (!element.hasAttribute("data-oldlabel")) {
      element.setAttribute("data-oldlabel", Morebits.quickForm.getElementLabel(element));
    }
    return Morebits.quickForm.setElementLabel(element, temporaryLabelText);
  };
  Morebits.quickForm.resetElementLabel = (element) => {
    if (element.hasAttribute("data-oldlabel")) {
      return Morebits.quickForm.setElementLabel(element, element.getAttribute("data-oldlabel"));
    }
    return null;
  };
  Morebits.quickForm.setElementVisibility = (element, visibility) => {
    $(element).toggle(visibility);
  };
  Morebits.quickForm.setElementTooltipVisibility = (element, visibility) => {
    $(Morebits.quickForm.getElementContainer(element)).find(".morebits-tooltipButton").toggle(visibility);
  };
  HTMLFormElement.prototype.getChecked = function(name, type) {
    const elements = this.elements[name];
    if (!elements) {
      return [];
    }
    const returnArray = [];
    let i;
    if (elements instanceof HTMLSelectElement) {
      const {
        options
      } = elements;
      for (i = 0; i < options.length; ++i) {
        if (options[i].selected) {
          if (options[i].values) {
            returnArray.push(options[i].values);
          } else {
            returnArray.push(options[i].value);
          }
        }
      }
    } else if (elements instanceof HTMLInputElement) {
      if (type && elements.type !== type) {
        return [];
      } else if (elements.checked) {
        return [elements.value];
      }
    } else {
      for (i = 0; i < elements.length; ++i) {
        if (elements[i].checked) {
          if (type && elements[i].type !== type) {
            continue;
          }
          if (elements[i].values) {
            returnArray.push(elements[i].values);
          } else {
            returnArray.push(elements[i].value);
          }
        }
      }
    }
    return returnArray;
  };
  HTMLFormElement.prototype.getUnchecked = function(name, type) {
    const elements = this.elements[name];
    if (!elements) {
      return [];
    }
    const returnArray = [];
    let i;
    if (elements instanceof HTMLSelectElement) {
      const {
        options
      } = elements;
      for (i = 0; i < options.length; ++i) {
        if (!options[i].selected) {
          if (options[i].values) {
            returnArray.push(options[i].values);
          } else {
            returnArray.push(options[i].value);
          }
        }
      }
    } else if (elements instanceof HTMLInputElement) {
      if (type && elements.type !== type) {
        return [];
      } else if (!elements.checked) {
        return [elements.value];
      }
    } else {
      for (i = 0; i < elements.length; ++i) {
        if (!elements[i].checked) {
          if (type && elements[i].type !== type) {
            continue;
          }
          if (elements[i].values) {
            returnArray.push(elements[i].values);
          } else {
            returnArray.push(elements[i].value);
          }
        }
      }
    }
    return returnArray;
  };
  Morebits.ip = {
    /**
     * Converts an IPv6 address to the canonical form stored and used by MediaWiki.
     * JavaScript translation of the {@link https://gerrit.wikimedia.org/r/plugins/gitiles/mediawiki/core/+/8eb6ac3e84ea3312d391ca96c12c49e3ad0753bb/includes/utils/IP.php#131|`IP::sanitizeIP()`}
     * function from the IPUtils library.  Addresses are verbose, uppercase,
     * normalized, and expanded to 8 words.
     *
     * @param {string} address - The IPv6 address, with or without CIDR.
     * @returns {string}
     */
    sanitizeIPv6: (address) => {
      address = address.trim();
      if (address === "") {
        return null;
      }
      if (!mw.util.isIPv6Address(address, true)) {
        return address;
      }
      address = address.toUpperCase();
      const abbrevPos = address.indexOf("::");
      if (abbrevPos > -1) {
        const CIDRStart = address.indexOf("/");
        const addressEnd = CIDRStart === -1 ? address.length - 1 : CIDRStart - 1;
        let repeat;
        let extra;
        let pad;
        if (abbrevPos === 0) {
          repeat = "0:";
          extra = address === "::" ? "0" : "";
          pad = 9;
        } else if (abbrevPos === addressEnd - 1) {
          repeat = ":0";
          extra = "";
          pad = 9;
        } else {
          repeat = ":0";
          extra = ":";
          pad = 8;
        }
        let replacement = repeat;
        pad -= address.split(":").length - 1;
        for (let i = 1; i < pad; i++) {
          replacement += repeat;
        }
        replacement += extra;
        address = address.replace("::", replacement);
      }
      return address.replace(/(^|:)0+([0-9A-Fa-f]{1,4})/g, "$1$2");
    },
    /**
     * Determine if the given IP address is a range.  Just conjoins
     * `mw.util.isIPAddress` with and without the `allowBlock` option.
     *
     * @param {string} ip
     * @returns {boolean} - True if given a valid IP address range, false otherwise.
     */
    isRange: (ip) => {
      return mw.util.isIPAddress(ip, true) && !mw.util.isIPAddress(ip);
    },
    /**
     * Check that an IP range is within the CIDR limits.  Most likely to be useful
     * in conjunction with `wgRelevantUserName`.  CIDR limits are hardcoded as /16
     * for IPv4 and /32 for IPv6.
     *
     * @param {string} ip
     * @returns {boolean} - True for valid ranges within the CIDR limits,
     * otherwise false (ranges outside the limit, single IPs, non-IPs).
     */
    validCIDR: (ip) => {
      if (Morebits.ip.isRange(ip)) {
        const subnet = Number.parseInt(ip.match(/\/(\d{1,3})$/)[1], 10);
        if (subnet) {
          if (mw.util.isIPv6Address(ip, true)) {
            if (subnet >= 32) {
              return true;
            }
          } else if (subnet >= 16) {
            return true;
          }
        }
      }
      return false;
    },
    /**
     * Get the /64 subnet for an IPv6 address.
     *
     * @param {string} ipv6 - The IPv6 address, with or without a subnet.
     * @returns {boolean|string} - False if not IPv6 or bigger than a 64,
     * otherwise the (sanitized) /64 address.
     */
    get64: (ipv6) => {
      if (!ipv6 || !mw.util.isIPv6Address(ipv6, true)) {
        return false;
      }
      const subnetMatch = ipv6.match(/\/(\d{1,3})$/);
      if (subnetMatch && Number.parseInt(subnetMatch[1], 10) < 64) {
        return false;
      }
      ipv6 = Morebits.ip.sanitizeIPv6(ipv6);
      const ipRegex = /^((?:[0-9A-F]{1,4}:){4})(?:[0-9A-F]{1,4}:){3}[0-9A-F]{1,4}(?:\/\d{1,3})?$/;
      return ipv6.replace(ipRegex, "$1".concat("0:0:0:0/64"));
    }
  };
  Morebits.string = {
    /**
     * @param {string} str
     * @returns {string}
     */
    toUpperCaseFirstChar: (str) => {
      str = str.toString();
      return str.slice(0, 1).toUpperCase() + str.slice(1);
    },
    /**
     * @param {string} str
     * @returns {string}
     */
    toLowerCaseFirstChar: (str) => {
      str = str.toString();
      return str.slice(0, 1).toLowerCase() + str.slice(1);
    },
    /**
     * Gives an array of substrings of `str` - starting with `start` and
     * ending with `end` - which is not in `skiplist`.  Intended for use
     * on wikitext with templates or links.
     *
     * @param {string} str
     * @param {string} start
     * @param {string} end
     * @param {(string[]|string)} [skiplist]
     * @returns {string[]}
     * @throws If the `start` and `end` strings aren't of the same length.
     * @throws If `skiplist` isn't an array or string
     */
    splitWeightedByKeys: (str, start, end, skiplist) => {
      if (start.length !== end.length) {
        throw new Error("start marker and end marker must be of the same length");
      }
      let level = 0;
      let initial = null;
      const result = [];
      if (!Array.isArray(skiplist)) {
        if (skiplist === void 0) {
          skiplist = [];
        } else if (typeof skiplist === "string") {
          skiplist = [skiplist];
        } else {
          throw new TypeError("non-applicable skiplist parameter");
        }
      }
      for (let i = 0; i < str.length; ++i) {
        var _iterator5 = _createForOfIteratorHelper(skiplist), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            const element = _step5.value;
            if (str.slice(i, i + element.length) === element) {
              i += element.length - 1;
              continue;
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        if (str.slice(i, i + start.length) === start) {
          if (initial === null) {
            initial = i;
          }
          ++level;
          i += start.length - 1;
        } else if (str.slice(i, i + end.length) === end) {
          --level;
          i += end.length - 1;
        }
        if (!level && initial !== null) {
          result.push(str.slice(initial, i + 1));
          initial = null;
        }
      }
      return result;
    },
    /**
     * Formats freeform "reason" (from a textarea) for deletion/other
     * templates that are going to be substituted, (e.g. PROD, XFD, RPP).
     * Handles `|` outside a nowiki tag.
     * Optionally, also adds a signature if not present already.
     *
     * @param {string} str
     * @param {boolean} [addSig]
     * @returns {string}
     */
    formatReasonText: (str, addSig) => {
      let reason = (str || "").toString().trim();
      const unbinder = new Morebits.unbinder(reason);
      unbinder.unbind("<no".concat("wiki", ">"), "</no".concat("wiki", ">"));
      unbinder.content = unbinder.content.replace(/\|/g, "{{".concat("subst:", "!}}"));
      reason = unbinder.rebind();
      if (addSig) {
        const sig = "~~".concat("~~");
        const sigIndex = reason.lastIndexOf(sig);
        if (sigIndex === -1 || sigIndex !== reason.length - sig.length) {
          reason += " ".concat(sig);
        }
      }
      return reason.trim();
    },
    /**
     * Formats a "reason" (from a textarea) for inclusion in a userspace
     * log.  Replaces newlines with {{Pb}}, and adds an extra `#` before
     * list items for proper formatting.
     *
     * @param {string} str
     * @returns {string}
     */
    formatReasonForLog: (str) => {
      return str.replace(/\n+/g, "{{pb}}").replace(/^(#+)/gm, "#$1").replace(/^(\*+)/gm, "#$1");
    },
    /**
     * Like `String.prototype.replace()`, but escapes any dollar signs in
     * the replacement string.  Useful when the the replacement string is
     * arbitrary, such as a username or freeform user input, and could
     * contain dollar signs.
     *
     * @param {string} string - Text in which to replace.
     * @param {(string|RegExp)} pattern
     * @param {string} replacement
     * @returns {string}
     */
    safeReplace: (string, pattern, replacement) => {
      return string.replace(pattern, replacement.replace(/\$/g, "$$$$"));
    },
    /**
     * Determine if the user-provided expiration will be considered an
     * infinite-length by MW.
     *
     * @see {@link https://phabricator.wikimedia.org/T68646}
     *
     * @param {string} expiry
     * @returns {boolean}
     */
    isInfinity: (expiry) => {
      return ["indefinite", "infinity", "infinite", "never"].includes(expiry);
    },
    /**
     * Escapes a string to be used in a RegExp, replacing spaces and
     * underscores with `[_ ]` as they are often equivalent.
     *
     * @param {string} text - String to be escaped.
     * @returns {string} - The escaped text.
     */
    escapeRegExp: (text) => {
      return mw.util.escapeRegExp(text).replace(/ |_/g, "[_ ]");
    },
    /**
     * formatTime
     *
     * @param {*} time The string to foramt
     * @returns {string}
     */
    formatTime: (time) => {
      let m;
      if ((m = time.match(/^\s*(\d+)\s*sec(ond)?s?\s*$/)) !== null) {
        return "".concat(m[1], "秒");
      }
      if ((m = time.match(/^\s*(\d+)\s*min(ute)?s?\s*$/)) !== null) {
        return "".concat(m[1], "分");
      }
      if ((m = time.match(/^\s*(\d+)\s*hours?\s*$/)) !== null) {
        return m[1] + window.wgULS("小时", "小時");
      }
      if ((m = time.match(/^\s*(\d+)\s*days?\s*$/)) !== null) {
        return "".concat(m[1], "天");
      }
      if ((m = time.match(/^\s*(\d+)\s*weeks?\s*$/)) !== null) {
        return m[1] + window.wgULS("周", "週");
      }
      if ((m = time.match(/^\s*(\d+)\s*months?\s*$/)) !== null) {
        return m[1] + window.wgULS("个月", "個月");
      }
      if ((m = time.match(/^\s*(\d+)\s*years?\s*$/)) !== null) {
        return "".concat(m[1], "年");
      }
      if (Morebits.string.isInfinity(time.trim())) {
        return window.wgULS("无限期", "無限期");
      }
      return time;
    },
    /**
     * Append punctuation to a string when it's missing
     *
     * @param {string} str
     * @param {string} punctuation
     * @returns {string}
     */
    appendPunctuation: (str, punctuation) => {
      if (punctuation === void 0) {
        punctuation = "。";
      }
      if (str.search(/[.?!;。？！；]$/) === -1) {
        str += punctuation;
      }
      return str;
    }
  };
  Morebits.array = {
    /**
     * Remove duplicated items from an array.
     *
     * @param {Array} arr
     * @returns {Array} A copy of the array with duplicates removed.
     * @throws When provided a non-array.
     */
    uniq: (arr) => {
      if (!Array.isArray(arr)) {
        throw new TypeError("A non-array object passed to Morebits.array.uniq");
      }
      return arr.filter((item, idx) => {
        return arr.indexOf(item) === idx;
      });
    },
    /**
     * Remove non-duplicated items from an array.
     *
     * @param {Array} arr
     * @returns {Array} A copy of the array with the first instance of each value
     * removed; subsequent instances of those values (duplicates) remain.
     * @throws When provided a non-array.
     */
    dups: (arr) => {
      if (!Array.isArray(arr)) {
        throw new TypeError("A non-array object passed to Morebits.array.dups");
      }
      return arr.filter((item, idx) => {
        return arr.indexOf(item) !== idx;
      });
    },
    /**
     * Break up an array into smaller arrays.
     *
     * @param {Array} arr
     * @param {number} size - Size of each chunk (except the last, which could be different).
     * @returns {Array[]} An array containing the smaller, chunked arrays.
     * @throws When provided a non-array.
     */
    chunk: (arr, size) => {
      if (!Array.isArray(arr)) {
        throw new TypeError("A non-array object passed to Morebits.array.chunk");
      }
      if (typeof size !== "number" || size <= 0) {
        return [arr];
      }
      const numChunks = Math.ceil(arr.length / size);
      const result = Array.from({
        length: numChunks
      });
      for (let i = 0; i < numChunks; i++) {
        result[i] = arr.slice(i * size, (i + 1) * size);
      }
      return result;
    }
  };
  Morebits.select2 = {
    matchers: {
      /**
       * Custom matcher in which if the optgroup name matches, all options in that
       * group are shown, like in jquery.chosen.
       *
       * @param {*} params
       * @param {*} data
       */
      optgroupFull: (params, data) => {
        const originalMatcher = $.fn.select2.defaults.defaults.matcher;
        const result = originalMatcher(params, data);
        if (result && params.term && data.text.toUpperCase().includes(params.term.toUpperCase())) {
          result.children = data.children;
        }
        return result;
      },
      /**
       * Custom matcher that matches from the beginning of words only.
       *
       * @param {*} params
       * @param {*} data
       */
      wordBeginning: (params, data) => {
        const originalMatcher = $.fn.select2.defaults.defaults.matcher;
        const result = originalMatcher(params, data);
        if (!params.term || result && new RegExp("\\b".concat(mw.util.escapeRegExp(params.term)), "i").test(result.text)) {
          return result;
        }
        return null;
      }
    },
    /**
     * Underline matched part of options.
     *
     * @param {*} data
     */
    highlightSearchMatches: (data) => {
      const searchTerm = Morebits.select2SearchQuery;
      if (!searchTerm || data.loading) {
        return data.text;
      }
      const idx = data.text.toUpperCase().indexOf(searchTerm.toUpperCase());
      if (idx < 0) {
        return data.text;
      }
      return $("<span>").append(data.text.slice(0, idx), $("<span>").css("text-decoration", "underline").text(data.text.slice(idx, idx + searchTerm.length)), data.text.slice(idx + searchTerm.length));
    },
    /**
     * Intercept query as it is happening, for use in highlightSearchMatches.
     *
     * @param {*} params
     */
    queryInterceptor: (params) => {
      Morebits.select2SearchQuery = params && params.term;
    },
    /**
     * Open dropdown and begin search when the `.select2-selection` has
     * focus and a key is pressed.
     *
     * @param {KeyboardEvent} ev
     * @see {@link https://github.com/select2/select2/issues/3279#issuecomment-442524147}
     */
    autoStart: (ev) => {
      if (ev.which < 48) {
        return;
      }
      let target = $(ev.target).closest(".select2-container");
      if (!target.length) {
        return;
      }
      target = target.prev();
      target.select2("open");
      const search = target.data("select2").dropdown.$search || target.data("select2").selection.$search;
      search[0].focus();
    }
  };
  Morebits.unbinder = function(string) {
    if (typeof string !== "string") {
      throw new TypeError("not a string");
    }
    this.content = string;
    this.counter = 0;
    this.history = {};
    this.prefix = "%UNIQ::".concat(Math.random(), "::");
    this.postfix = "::UNIQ%";
  };
  Morebits.unbinder.prototype = {
    /**
     * Hide the region encapsulated by the `prefix` and `postfix` from
     * string processing.  `prefix` and `postfix` will be used in a
     * RegExp, so items that need escaping should be use `\\`.
     *
     * @param {string} prefix
     * @param {string} postfix
     * @throws If either `prefix` or `postfix` is missing.
     */
    unbind(prefix, postfix) {
      if (!prefix || !postfix) {
        throw new Error("Both prefix and postfix must be provided");
      }
      const re = new RegExp("".concat(prefix, "([\\s\\S]*?)").concat(postfix), "g");
      this.content = this.content.replace(re, Morebits.unbinder.getCallback(this));
    },
    /**
     * Restore the hidden portion of the `content` string.
     *
     * @returns {string} The processed output.
     */
    rebind() {
      let {
        content
      } = this;
      for (const current in this.history) {
        if (!Object.hasOwn(this.history, current)) {
          continue;
        }
        content = content.replace(current, this.history[current]);
      }
      return content;
    },
    prefix: null,
    // %UNIQ::0.5955981644938324::
    postfix: null,
    // ::UNIQ%
    content: null,
    // string
    counter: null,
    // 0++
    history: null
    // {}
  };
  Morebits.unbinder.getCallback = (self2) => {
    return (match) => {
      const current = self2.prefix + self2.counter + self2.postfix;
      self2.history[current] = match;
      ++self2.counter;
      return current;
    };
  };
  Morebits.date = function(...args) {
    if (args.length === 1) {
      const [param] = args;
      if (/^\d{14}$/.test(param)) {
        const digitMatch = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/.exec(param);
        if (digitMatch) {
          this._d = new Date(Reflect.apply(Date.UTC, null, [digitMatch[1], digitMatch[2] - 1, digitMatch[3], digitMatch[4], digitMatch[5], digitMatch[6]]));
        }
      } else if (typeof param === "string") {
        const dateParts = Morebits.l10n.signatureTimestampFormat(param);
        if (dateParts) {
          this._d = new Date(Date.UTC.apply(null, dateParts));
        }
      }
    }
    if (!this._d) {
      this._d = new (Function.prototype.bind.apply(Date, [Date, ...Array.isArray(args) ? args : [args]]))();
    }
    if (!this.isValid()) {
      mw.log.warn("Invalid Morebits.date initialisation:", args);
    }
  };
  Morebits.date.localeData = {
    // message names here correspond to MediaWiki message names
    // No i18n at this time
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    daysShort: ["日", "一", "二", "三", "四", "五", "六"],
    relativeTimes: {
      thisDay: "[今天]A hh:mm",
      prevDay: "[昨天]A hh:mm",
      nextDay: "[明天]A hh:mm",
      thisWeek: "ddddA hh:mm",
      pastWeek: "[上]ddddA hh:mm",
      other: "YYYY-MM-DD"
    }
  };
  Morebits.date.unitMap = {
    seconds: "Seconds",
    minutes: "Minutes",
    hours: "Hours",
    days: "Date",
    weeks: "Week",
    // Not a function but handled in `add` through cunning use of multiplication
    months: "Month",
    years: "FullYear"
  };
  Morebits.date.prototype = {
    /** @returns {boolean} */
    isValid() {
      return !Number.isNaN(this.getTime());
    },
    /**
     * @param {(Date|Morebits.date)} date
     * @returns {boolean}
     */
    isBefore(date) {
      return this.getTime() < date.getTime();
    },
    /**
     * @param {(Date|Morebits.date)} date
     * @returns {boolean}
     */
    isAfter(date) {
      return this.getTime() > date.getTime();
    },
    /** @returns {string} */
    getUTCMonthName() {
      return Morebits.date.localeData.months[this.getUTCMonth()];
    },
    /** @returns {string} */
    getUTCMonthNameAbbrev() {
      return Morebits.date.localeData.monthsShort[this.getUTCMonth()];
    },
    /** @returns {string} */
    getMonthName() {
      return Morebits.date.localeData.months[this.getMonth()];
    },
    /** @returns {string} */
    getMonthNameAbbrev() {
      return Morebits.date.localeData.monthsShort[this.getMonth()];
    },
    /** @returns {string} */
    getUTCDayName() {
      return Morebits.date.localeData.days[this.getUTCDay()];
    },
    /** @returns {string} */
    getUTCDayNameAbbrev() {
      return Morebits.date.localeData.daysShort[this.getUTCDay()];
    },
    /** @returns {string} */
    getDayName() {
      return Morebits.date.localeData.days[this.getDay()];
    },
    /** @returns {string} */
    getDayNameAbbrev() {
      return Morebits.date.localeData.daysShort[this.getDay()];
    },
    /**
     * Add a given number of minutes, hours, days, weeks, months, or years to the date.
     * This is done in-place. The modified date object is also returned, allowing chaining.
     *
     * @param {number} number - Should be an integer.
     * @param {string} unit
     * @throws If invalid or unsupported unit is given.
     * @returns {Morebits.date}
     */
    add(number, unit) {
      let num = Number.parseInt(number, 10);
      if (Number.isNaN(num)) {
        throw new TypeError('Invalid number "'.concat(number, '" provided.'));
      }
      unit = unit.toLowerCase();
      const {
        unitMap
      } = Morebits.date;
      let unitNorm = unitMap[unit] || unitMap["".concat(unit, "s")];
      if (unitNorm) {
        if (unitNorm === "Week") {
          unitNorm = "Date";
          num *= 7;
        }
        this["set".concat(unitNorm)](this["get".concat(unitNorm)]() + num);
        return this;
      }
      throw new Error('Invalid unit "'.concat(unit, '": Only ').concat(Object.keys(unitMap).join(", "), " are allowed."));
    },
    /**
     * Subtracts a given number of minutes, hours, days, weeks, months, or years to the date.
     * This is done in-place. The modified date object is also returned, allowing chaining.
     *
     * @param {number} number - Should be an integer.
     * @param {string} unit
     * @throws If invalid or unsupported unit is given.
     * @returns {Morebits.date}
     */
    subtract(number, unit) {
      return this.add(-number, unit);
    },
    /**
     * Format the date into a string per the given format string.
     * Replacement syntax is a subset of that in moment.js:
     *
     * | Syntax | Output |
     * |--------|--------|
     * | H | Hours (24-hour) |
     * | HH | Hours (24-hour, padded to 2 digits) |
     * | h | Hours (12-hour) |
     * | hh | Hours (12-hour, padded to 2 digits) |
     * | A | AM or PM |
     * | m | Minutes |
     * | mm | Minutes (padded to 2 digits) |
     * | s | Seconds |
     * | ss | Seconds (padded to 2 digits) |
     * | SSS | Milliseconds fragment, 3 digits |
     * | d | Day number of the week (Sun=0) |
     * | ddd | Abbreviated day name |
     * | dddd | Full day name |
     * | D | Date |
     * | DD | Date (padded to 2 digits) |
     * | M | Month number (1-indexed) |
     * | MM | Month number (1-indexed, padded to 2 digits) |
     * | MMM | Abbreviated month name |
     * | MMMM | Full month name |
     * | Y | Year |
     * | YY | Final two digits of year (20 for 2020, 42 for 1942) |
     * | YYYY | Year (same as `Y`) |
     *
     * @param {string} formatstr - Format the date into a string, using
     * the replacement syntax.  Use `[` and `]` to escape items.  If not
     * provided, will return the ISO-8601-formatted string.
     * @param {(string|number)} [zone=system] - `system` (for browser-default time zone),
     * `utc`, or specify a time zone as number of minutes relative to UTC.
     * @returns {string}
     */
    format(formatstr, zone) {
      if (!this.isValid()) {
        return "Invalid date";
      }
      let udate = this;
      if (zone === "utc") {
        udate = new Morebits.date(this.getTime()).add(this.getTimezoneOffset(), "minutes");
      } else if (typeof zone === "number") {
        udate = new Morebits.date(this.getTime()).add(this.getTimezoneOffset() + zone, "minutes");
      }
      if (!formatstr) {
        return udate.toISOString();
      }
      const pad = (num, len) => {
        len || (len = 2);
        return "00".concat(num).toString().slice(0 - len);
      };
      const h24 = udate.getHours();
      const m = udate.getMinutes();
      const s = udate.getSeconds();
      const ms = udate.getMilliseconds();
      const D = udate.getDate();
      const M = udate.getMonth() + 1;
      const Y = udate.getFullYear();
      const h12 = h24 % 12 || 12;
      const amOrPm = h24 >= 12 ? "下午" : "上午";
      const replacementMap = {
        HH: pad(h24),
        H: h24,
        hh: pad(h12),
        h: h12,
        A: amOrPm,
        mm: pad(m),
        m,
        ss: pad(s),
        s,
        SSS: pad(ms, 3),
        dddd: udate.getDayName(),
        ddd: udate.getDayNameAbbrev(),
        d: udate.getDay(),
        DD: pad(D),
        D,
        MMMM: udate.getMonthName(),
        MMM: udate.getMonthNameAbbrev(),
        MM: pad(M),
        M,
        YYYY: Y,
        YY: pad(Y % 100),
        Y
      };
      const unbinder = new Morebits.unbinder(formatstr);
      unbinder.unbind("\\[", "\\]");
      unbinder.content = unbinder.content.replace(
        /* Regex notes:
         * d(d{2,3})? matches exactly 1, 3 or 4 occurrences of 'd' ('dd' is treated as a double match of 'd')
         * Y{1,2}(Y{2})? matches exactly 1, 2 or 4 occurrences of 'Y'
         */
        /H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|d(d{2,3})?|D{1,2}|M{1,4}|Y{1,2}(Y{2})?|A/g,
        (match) => {
          return replacementMap[match];
        }
      );
      return unbinder.rebind().replace(/\[(.*?)\]/g, "$1");
    },
    /**
     * Gives a readable relative time string such as "Yesterday at 6:43 PM" or "Last Thursday at 11:45 AM".
     * Similar to `calendar` in moment.js, but with time zone support.
     *
     * @param {(string|number)} [zone=system] - 'system' (for browser-default time zone),
     * 'utc' (for UTC), or specify a time zone as number of minutes past UTC.
     * @returns {string}
     */
    calendar(zone) {
      const dateDiff = ((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0) - new Date(this).setHours(0, 0, 0, 0)) / 864e5;
      switch (true) {
        case dateDiff === 0:
          return this.format(Morebits.date.localeData.relativeTimes.thisDay, zone);
        case dateDiff === 1:
          return this.format(Morebits.date.localeData.relativeTimes.prevDay, zone);
        case (dateDiff > 0 && dateDiff < 7):
          return this.format(Morebits.date.localeData.relativeTimes.pastWeek, zone);
        case dateDiff === -1:
          return this.format(Morebits.date.localeData.relativeTimes.nextDay, zone);
        case (dateDiff < 0 && dateDiff > -7):
          return this.format(Morebits.date.localeData.relativeTimes.thisWeek, zone);
        default:
          return this.format(Morebits.date.localeData.relativeTimes.other, zone);
      }
    },
    /**
     * Get a regular expression that matches wikitext section titles, such
     * as `==December 2019==` or `=== Jan 2018 ===`.
     *
     * @returns {RegExp}
     */
    monthHeaderRegex() {
      return new RegExp("^(==+)\\s*".concat(this.getUTCFullYear(), "年(?:").concat(this.getUTCMonthName(), "|").concat(this.getUTCMonthNameAbbrev(), ")\\s*\\1"), "mg");
    },
    /**
     * Creates a wikitext section header with the month and year.
     *
     * @param {number} [level=2] - Header level.  Pass 0 for just the text
     * with no wikitext markers (==).
     * @returns {string}
     */
    monthHeader(level) {
      level = Number.parseInt(level, 10);
      level = Number.isNaN(level) ? 2 : level;
      const header = "=".repeat(level);
      const text = "".concat(this.getUTCFullYear(), "年").concat(this.getUTCMonthName());
      if (header.length) {
        return "".concat(header, " ").concat(text, " ").concat(header);
      }
      return text;
    }
  };
  var _iterator6 = _createForOfIteratorHelper(Object.getOwnPropertyNames(Date.prototype)), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      const func = _step6.value;
      if (!["add", "getDayName", "getMonthName"].includes(func)) {
        Morebits.date.prototype[func] = function(...args) {
          return this._d[func](...args);
        };
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  Morebits.wiki = {};
  Morebits.wiki.isPageRedirect = () => {
    console.warn("NOTE: Morebits.wiki.isPageRedirect has been deprecated, use Morebits.isPageRedirect instead.");
    return Morebits.isPageRedirect();
  };
  Morebits.wiki.numberOfActionsLeft = 0;
  Morebits.wiki.nbrOfCheckpointsLeft = 0;
  Morebits.wiki.actionCompleted = (self2) => {
    if (--Morebits.wiki.numberOfActionsLeft <= 0 && Morebits.wiki.nbrOfCheckpointsLeft <= 0) {
      Morebits.wiki.actionCompleted.event(self2);
    }
  };
  Morebits.wiki.actionCompleted.event = () => {
    if (Morebits.wiki.actionCompleted.notice) {
      Morebits.status.actionCompleted(Morebits.wiki.actionCompleted.notice);
    }
    if (Morebits.wiki.actionCompleted.redirect) {
      if (!/^\w+:\/\//.test(Morebits.wiki.actionCompleted.redirect)) {
        Morebits.wiki.actionCompleted.redirect = mw.util.getUrl(Morebits.wiki.actionCompleted.redirect);
        if (Morebits.wiki.actionCompleted.followRedirect === false) {
          Morebits.wiki.actionCompleted.redirect += "?redirect=no";
        }
      }
      setTimeout(() => {
        location = Morebits.wiki.actionCompleted.redirect;
      }, Morebits.wiki.actionCompleted.timeOut);
    }
  };
  Morebits.wiki.actionCompleted.timeOut = window.wpActionCompletedTimeOut === void 0 ? 5e3 : window.wpActionCompletedTimeOut;
  Morebits.wiki.actionCompleted.redirect = null;
  Morebits.wiki.actionCompleted.notice = null;
  Morebits.wiki.addCheckpoint = () => {
    ++Morebits.wiki.nbrOfCheckpointsLeft;
  };
  Morebits.wiki.removeCheckpoint = () => {
    if (--Morebits.wiki.nbrOfCheckpointsLeft <= 0 && Morebits.wiki.numberOfActionsLeft <= 0) {
      Morebits.wiki.actionCompleted.event();
    }
  };
  Morebits.wiki.api = function(currentAction, query, onSuccess, statusElement, onError) {
    var _this$query;
    this.currentAction = currentAction;
    this.query = query;
    this.query.assert = "user";
    if (!query.errorformat || !["wikitext", "plaintext"].includes(query.errorformat)) {
      this.query.errorformat = "html";
    }
    (_this$query = this.query).uselang || (_this$query.uselang = "content");
    this.query.errorlang = "uselang";
    this.query.errorsuselocal = 1;
    this.onSuccess = onSuccess;
    this.onError = onError;
    if (statusElement) {
      this.setStatusElement(statusElement);
    } else {
      this.statelem = new Morebits.status(currentAction);
    }
    if (!query.format) {
      this.query.format = "xml";
    } else if (query.format === "json" && !query.formatversion) {
      this.query.formatversion = "2";
    } else if (!["xml", "json"].includes(query.format)) {
      this.statelem.error("Invalid API format: only xml and json are supported.");
    }
    if (query.action && ["query", "watch"].includes(query.action)) {
      delete query.tags;
    } else if (!query.tags && morebitsWikiChangeTag) {
      query.tags = morebitsWikiChangeTag;
    }
  };
  Morebits.wiki.api.prototype = {
    currentAction: "",
    onSuccess: null,
    onError: null,
    parent: window,
    // use global context if there is no parent object
    query: null,
    response: null,
    responseXML: null,
    // use `response` instead; retained for backwards compatibility
    statelem: null,
    // this non-standard name kept for backwards compatibility
    statusText: null,
    // result received from the API, normally "success" or "error"
    errorCode: null,
    // short text error code, if any, as documented in the MediaWiki API
    errorText: null,
    // full error description, if any
    badtokenRetry: false,
    // set to true if this on a retry attempted after a badtoken error
    /**
     * Keep track of parent object for callbacks.
     *
     * @param {*} parent
     */
    setParent(parent) {
      this.parent = parent;
    },
    /** @param {Morebits.status} statusElement */
    setStatusElement(statusElement) {
      this.statelem = statusElement;
      this.statelem.status(this.currentAction);
    },
    /**
     * Carry out the request.
     *
     * @param {Object} callerAjaxParameters - Do not specify a parameter unless you really
     * really want to give jQuery some extra parameters.
     * @returns {promise} - A jQuery promise object that is resolved or rejected with the api object.
     */
    post(callerAjaxParameters) {
      ++Morebits.wiki.numberOfActionsLeft;
      const _queryString = [];
      for (var _i5 = 0, _Object$entries2 = Object.entries(this.query); _i5 < _Object$entries2.length; _i5++) {
        const [i, val] = _Object$entries2[_i5];
        if (Array.isArray(val)) {
          _queryString.push("".concat(encodeURIComponent(i), "=").concat(val.map(encodeURIComponent).join("|")));
        } else if (val !== void 0) {
          _queryString.push("".concat(encodeURIComponent(i), "=").concat(encodeURIComponent(val)));
        }
      }
      const queryString = _queryString.join("&").replace(/^(.*?)(\btoken=[^&]*)&(.*)/, "$1$3&$2");
      const ajaxparams = {
        context: this,
        type: this.query.action === "query" ? "GET" : "POST",
        url: mw.util.wikiScript("api"),
        data: queryString,
        dataType: this.query.format,
        headers: {
          "Api-User-Agent": morebitsWikiApiUserAgent
        },
        ...callerAjaxParameters
      };
      return $.ajax(ajaxparams).then(
        function onAPIsuccess(response, statusText) {
          this.statusText = statusText;
          this.response = response;
          this.responseXML = response;
          if (this.query.format === "json") {
            this.errorCode = response.errors && response.errors[0].code;
            if (this.query.errorformat === "html") {
              this.errorText = response.errors && response.errors[0].html;
            } else if (this.query.errorformat === "wikitext" || this.query.errorformat === "plaintext") {
              this.errorText = response.errors && response.errors[0].text;
            }
          } else {
            this.errorCode = $(response).find("errors error").eq(0).attr("code");
            this.errorText = $(response).find("errors error").eq(0).text();
          }
          if (typeof this.errorCode === "string") {
            return this.returnError(callerAjaxParameters);
          }
          if (this.onSuccess) {
            this.onSuccess.call(this.parent, this);
          } else {
            this.statelem.info("完成");
          }
          Morebits.wiki.actionCompleted();
          return $.Deferred().resolveWith(this.parent, [this]);
        },
        // only network and server errors reach here - complaints from the API itself are caught in success()
        function onAPIfailure(error, statusText, errorThrown) {
          this.statusText = statusText;
          this.errorThrown = errorThrown;
          this.errorText = statusText + window.wgULS("在调用API时发生了错误“", "在呼叫API時發生了錯誤「") + error.statusText + window.wgULS("”。", "」。");
          return this.returnError();
        }
      );
    },
    returnError(callerAjaxParameters) {
      if (this.errorCode === "badtoken" && !this.badtokenRetry) {
        this.statelem.warn(window.wgULS("无效令牌，获取新的令牌并重试……", "無效權杖，取得新的權杖並重試……"));
        this.badtokenRetry = true;
        return Morebits.wiki.api.getToken().then((token) => {
          this.query.token = token;
          return this.post(callerAjaxParameters);
        });
      }
      this.statelem.error("".concat(this.errorText, "（").concat(this.errorCode, "）"));
      if (this.onError) {
        this.onError.call(this.parent, this);
      }
      return $.Deferred().rejectWith(this.parent, [this]);
    },
    getStatusElement() {
      return this.statelem;
    },
    getErrorCode() {
      return this.errorCode;
    },
    getErrorText() {
      return this.errorText;
    },
    getXML() {
      return this.responseXML;
    },
    getResponse() {
      return this.response;
    }
  };
  Morebits.wiki.getCachedJson = (title) => {
    const query = {
      action: "query",
      prop: "revisions",
      titles: title,
      rvslots: "main",
      rvprop: "content",
      format: "json",
      smaxage: "3600",
      maxage: "3600"
    };
    return new Morebits.wiki.api("", query).post().then((apiobj) => {
      apiobj.getStatusElement().unlink();
      const response = apiobj.getResponse();
      const wikitext = response.query.pages[0].revisions[0].slots.main.content;
      return JSON.parse(wikitext);
    });
  };
  let morebitsWikiApiUserAgent = "YsArchives/1.1 (morebits.js)";
  Morebits.wiki.api.setApiUserAgent = (ua) => {
    morebitsWikiApiUserAgent = "YsArchives/1.1 (morebits.js".concat(ua ? "; ".concat(ua) : "", ")");
  };
  const morebitsWikiChangeTag = "";
  Morebits.wiki.api.getToken = () => {
    const tokenApi = new Morebits.wiki.api(window.wgULS("获取令牌", "取得權杖"), {
      action: "query",
      meta: "tokens",
      type: "csrf",
      format: "json"
    });
    return tokenApi.post().then((apiobj) => {
      return apiobj.response.query.tokens.csrftoken;
    });
  };
  Morebits.wiki.page = function(pageName, status) {
    if (!status) {
      status = window.wgULS("打开页面“", "打開頁面「") + pageName + window.wgULS("”", "」");
    }
    const ctx = {
      // backing fields for public properties
      pageName,
      pageExists: false,
      editSummary: null,
      changeTags: null,
      testActions: null,
      // array if any valid actions
      callbackParameters: null,
      statusElement: status instanceof Morebits.status ? status : new Morebits.status(status),
      // - edit
      pageText: null,
      editMode: "all",
      // save() replaces entire contents of the page by default
      appendText: null,
      // can't reuse pageText for this because pageText is needed to follow a redirect
      prependText: null,
      // can't reuse pageText for this because pageText is needed to follow a redirect
      newSectionText: null,
      newSectionTitle: null,
      createOption: null,
      minorEdit: false,
      botEdit: false,
      pageSection: null,
      maxConflictRetries: 2,
      maxRetries: 2,
      followRedirect: false,
      followCrossNsRedirect: true,
      watchlistOption: "nochange",
      watchlistExpiry: null,
      creator: null,
      timestamp: null,
      // - revert
      revertOldID: null,
      // - move
      moveDestination: null,
      moveTalkPage: false,
      moveSubpages: false,
      moveSuppressRedirect: false,
      // - protect
      protectEdit: null,
      protectMove: null,
      protectCreate: null,
      protectCascade: null,
      // - creation lookup
      lookupNonRedirectCreator: false,
      // internal status
      pageLoaded: false,
      csrfToken: null,
      loadTime: null,
      lastEditTime: null,
      pageID: null,
      contentModel: null,
      revertCurID: null,
      revertUser: null,
      watched: false,
      fullyProtected: false,
      suppressProtectWarning: false,
      conflictRetries: 0,
      retries: 0,
      // callbacks
      onLoadSuccess: null,
      onLoadFailure: null,
      onSaveSuccess: null,
      onSaveFailure: null,
      onLookupCreationSuccess: null,
      onLookupCreationFailure: null,
      onMoveSuccess: null,
      onMoveFailure: null,
      onDeleteSuccess: null,
      onDeleteFailure: null,
      onUndeleteSuccess: null,
      onUndeleteFailure: null,
      onProtectSuccess: null,
      onProtectFailure: null,
      // internal objects
      loadQuery: null,
      loadApi: null,
      saveApi: null,
      lookupCreationApi: null,
      moveApi: null,
      moveProcessApi: null,
      patrolApi: null,
      patrolProcessApi: null,
      deleteApi: null,
      deleteProcessApi: null,
      undeleteApi: null,
      undeleteProcessApi: null,
      protectApi: null,
      protectProcessApi: null
    };
    const emptyFunction = () => {
    };
    this.load = function(onSuccess, onFailure) {
      ctx.onLoadSuccess = onSuccess;
      ctx.onLoadFailure = onFailure || emptyFunction;
      if (!onSuccess) {
        ctx.statusElement.error("Internal error: no onSuccess callback provided to load()!");
        ctx.onLoadFailure(this);
        return;
      }
      ctx.loadQuery = {
        action: "query",
        prop: "info|revisions",
        inprop: "watched",
        intestactions: "edit",
        // can be expanded
        curtimestamp: "",
        meta: "tokens",
        type: "csrf",
        titles: ctx.pageName,
        format: "json"
        // don't need rvlimit=1 because we don't need rvstartid here and only one actual rev is returned by default
      };
      if (ctx.editMode === "all") {
        ctx.loadQuery.rvprop = "content|timestamp";
      } else if (ctx.editMode === "revert") {
        ctx.loadQuery.rvprop = "timestamp";
        ctx.loadQuery.rvlimit = 1;
        ctx.loadQuery.rvstartid = ctx.revertOldID;
      }
      if (ctx.followRedirect) {
        ctx.loadQuery.redirects = "";
      }
      if (typeof ctx.pageSection === "number") {
        ctx.loadQuery.rvsection = ctx.pageSection;
      }
      if (Morebits.userIsSysop) {
        ctx.loadQuery.inprop += "|protection";
      }
      ctx.loadApi = new Morebits.wiki.api(window.wgULS("抓取页面……", "抓取頁面……"), ctx.loadQuery, fnLoadSuccess, ctx.statusElement, ctx.onLoadFailure);
      ctx.loadApi.setParent(this);
      ctx.loadApi.post();
    };
    this.save = function(onSuccess, onFailure) {
      ctx.onSaveSuccess = onSuccess;
      ctx.onSaveFailure = onFailure || emptyFunction;
      const canUseMwUserToken = fnCanUseMwUserToken("edit");
      if (!ctx.pageLoaded && !canUseMwUserToken) {
        ctx.statusElement.error("Internal error: attempt to save a page that has not been loaded!");
        ctx.onSaveFailure(this);
        return;
      }
      if (!ctx.editSummary) {
        if (ctx.editMode === "new" && ctx.newSectionTitle) {
          ctx.editSummary = "";
        } else {
          ctx.statusElement.error("Internal error: edit summary not set before save!");
          ctx.onSaveFailure(this);
          return;
        }
      }
      if (ctx.fullyProtected && !ctx.suppressProtectWarning && !confirm(ctx.fullyProtected === "infinity" ? window.wgULS("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + ctx.pageName + window.wgULS("”（无限期）。\n\n单击确定以确定，或单击取消以取消操作。", "」（無限期）。\n\n點擊確定以確定，或點擊取消以取消操作。") : "".concat(window.wgULS("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + ctx.pageName + window.wgULS("”（到期：", "」（到期：") + new Morebits.date(ctx.fullyProtected).calendar("utc"), " (UTC)）。\n\n").concat(window.wgULS("单击确定以确定，或单击取消以取消操作。", "點擊確定以確定，或點擊取消以取消操作。")))) {
        ctx.statusElement.error(window.wgULS("已取消对全保护页面的编辑。", "已取消對全保護頁面的編輯。"));
        ctx.onSaveFailure(this);
        return;
      }
      ctx.retries = 0;
      const query = {
        action: "edit",
        title: ctx.pageName,
        summary: ctx.editSummary,
        token: canUseMwUserToken ? mw.user.tokens.get("csrfToken") : ctx.csrfToken,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      if (typeof ctx.pageSection === "number") {
        query.section = ctx.pageSection;
      }
      if (ctx.minorEdit) {
        query.minor = true;
      } else {
        query.notminor = true;
      }
      if (ctx.botEdit) {
        query.bot = true;
      }
      switch (ctx.editMode) {
        case "append":
          if (ctx.appendText === null) {
            ctx.statusElement.error("Internal error: append text not set before save!");
            ctx.onSaveFailure(this);
            return;
          }
          query.appendtext = ctx.appendText;
          break;
        case "prepend":
          if (ctx.prependText === null) {
            ctx.statusElement.error("Internal error: prepend text not set before save!");
            ctx.onSaveFailure(this);
            return;
          }
          query.prependtext = ctx.prependText;
          break;
        case "new":
          if (!ctx.newSectionText) {
            ctx.statusElement.error("Internal error: new section text not set before save!");
            ctx.onSaveFailure(this);
            return;
          }
          query.section = "new";
          query.text = ctx.newSectionText;
          query.sectiontitle = ctx.newSectionTitle || ctx.editSummary;
          break;
        case "revert":
          query.undo = ctx.revertCurID;
          query.undoafter = ctx.revertOldID;
          if (ctx.lastEditTime) {
            query.basetimestamp = ctx.lastEditTime;
          }
          query.starttimestamp = ctx.loadTime;
          break;
        default:
          query.text = ctx.pageText;
          if (ctx.lastEditTime) {
            query.basetimestamp = ctx.lastEditTime;
          }
          query.starttimestamp = ctx.loadTime;
          break;
      }
      if (["recreate", "createonly", "nocreate"].includes(ctx.createOption)) {
        query[ctx.createOption] = "";
      }
      if (canUseMwUserToken && ctx.followRedirect) {
        query.redirect = true;
      }
      ctx.saveApi = new Morebits.wiki.api(window.wgULS("保存页面……", "儲存頁面……"), query, fnSaveSuccess, ctx.statusElement, fnSaveError);
      ctx.saveApi.setParent(this);
      ctx.saveApi.post();
    };
    this.append = function(onSuccess, onFailure) {
      ctx.editMode = "append";
      if (fnCanUseMwUserToken("edit")) {
        this.save(onSuccess, onFailure);
      } else {
        ctx.onSaveSuccess = onSuccess;
        ctx.onSaveFailure = onFailure || emptyFunction;
        this.load(fnAutoSave, ctx.onSaveFailure);
      }
    };
    this.prepend = function(onSuccess, onFailure) {
      ctx.editMode = "prepend";
      if (fnCanUseMwUserToken("edit")) {
        this.save(onSuccess, onFailure);
      } else {
        ctx.onSaveSuccess = onSuccess;
        ctx.onSaveFailure = onFailure || emptyFunction;
        this.load(fnAutoSave, ctx.onSaveFailure);
      }
    };
    this.newSection = function(onSuccess, onFailure) {
      ctx.editMode = "new";
      if (fnCanUseMwUserToken("edit")) {
        this.save(onSuccess, onFailure);
      } else {
        ctx.onSaveSuccess = onSuccess;
        ctx.onSaveFailure = onFailure || emptyFunction;
        this.load(fnAutoSave, ctx.onSaveFailure);
      }
    };
    this.getPageName = () => {
      return ctx.pageName;
    };
    this.getPageText = () => {
      return ctx.pageText;
    };
    this.setPageText = (pageText) => {
      ctx.editMode = "all";
      ctx.pageText = pageText;
    };
    this.setAppendText = (appendText) => {
      ctx.editMode = "append";
      ctx.appendText = appendText;
    };
    this.setPrependText = (prependText) => {
      ctx.editMode = "prepend";
      ctx.prependText = prependText;
    };
    this.setNewSectionText = (newSectionText) => {
      ctx.editMode = "new";
      ctx.newSectionText = newSectionText;
    };
    this.setNewSectionTitle = (newSectionTitle) => {
      ctx.editMode = "new";
      ctx.newSectionTitle = newSectionTitle;
    };
    this.setEditSummary = (summary) => {
      ctx.editSummary = summary;
    };
    this.setChangeTags = (tags) => {
      ctx.changeTags = tags;
    };
    this.setCreateOption = (createOption) => {
      ctx.createOption = createOption;
    };
    this.setMinorEdit = (minorEdit) => {
      ctx.minorEdit = minorEdit;
    };
    this.setBotEdit = (botEdit) => {
      ctx.botEdit = botEdit;
    };
    this.setPageSection = (pageSection) => {
      ctx.pageSection = pageSection;
    };
    this.setMaxConflictRetries = (maxConflictRetries) => {
      ctx.maxConflictRetries = maxConflictRetries;
    };
    this.setMaxRetries = (maxRetries) => {
      ctx.maxRetries = maxRetries;
    };
    this.setWatchlist = (watchlistOption, watchlistExpiry) => {
      if (watchlistOption instanceof Morebits.date || watchlistOption instanceof Date) {
        watchlistOption = watchlistOption.toISOString();
      }
      if (watchlistExpiry === void 0) {
        watchlistExpiry = "infinity";
      } else if (watchlistExpiry instanceof Morebits.date || watchlistExpiry instanceof Date) {
        watchlistExpiry = watchlistExpiry.toISOString();
      }
      switch (watchlistOption) {
        case "nochange":
        case "no":
        case false:
        case void 0:
          ctx.watchlistOption = "nochange";
          ctx.watchlistExpiry = null;
          break;
        case "unwatch":
          ctx.watchlistOption = "unwatch";
          break;
        case "preferences":
        case "default":
          ctx.watchlistOption = "preferences";
          ctx.watchlistExpiry = watchlistExpiry;
          break;
        case "watch":
        case "yes":
        case true:
          ctx.watchlistOption = "watch";
          ctx.watchlistExpiry = watchlistExpiry;
          break;
        default:
          ctx.watchlistOption = "watch";
          ctx.watchlistExpiry = watchlistOption;
          break;
      }
    };
    this.setWatchlistExpiry = (watchlistExpiry) => {
      if (watchlistExpiry === void 0) {
        watchlistExpiry = "infinity";
      } else if (watchlistExpiry instanceof Morebits.date || watchlistExpiry instanceof Date) {
        watchlistExpiry = watchlistExpiry.toISOString();
      }
      ctx.watchlistExpiry = watchlistExpiry;
    };
    this.setWatchlistFromPreferences = (watchlistOption) => {
      console.warn("NOTE: Morebits.wiki.page.setWatchlistFromPreferences was deprecated December 2020, please use setWatchlist");
      if (watchlistOption) {
        ctx.watchlistOption = "preferences";
      } else {
        ctx.watchlistOption = "nochange";
      }
    };
    this.setFollowRedirect = (followRedirect, followCrossNsRedirect) => {
      if (ctx.pageLoaded) {
        ctx.statusElement.error("Internal error: cannot change redirect setting after the page has been loaded!");
        return;
      }
      ctx.followRedirect = followRedirect;
      ctx.followCrossNsRedirect = followCrossNsRedirect === void 0 ? ctx.followCrossNsRedirect : followCrossNsRedirect;
    };
    this.setLookupNonRedirectCreator = (flag) => {
      ctx.lookupNonRedirectCreator = flag;
    };
    this.setMoveDestination = (destination) => {
      ctx.moveDestination = destination;
    };
    this.setMoveTalkPage = (flag) => {
      ctx.moveTalkPage = !!flag;
    };
    this.setMoveSubpages = (flag) => {
      ctx.moveSubpages = !!flag;
    };
    this.setMoveSuppressRedirect = (flag) => {
      ctx.moveSuppressRedirect = !!flag;
    };
    this.setEditProtection = (level, expiry) => {
      ctx.protectEdit = {
        level,
        expiry: expiry || "infinity"
      };
    };
    this.setMoveProtection = (level, expiry) => {
      ctx.protectMove = {
        level,
        expiry: expiry || "infinity"
      };
    };
    this.setCreateProtection = (level, expiry) => {
      ctx.protectCreate = {
        level,
        expiry: expiry || "infinity"
      };
    };
    this.setCascadingProtection = (flag) => {
      ctx.protectCascade = !!flag;
    };
    this.suppressProtectWarning = () => {
      ctx.suppressProtectWarning = true;
    };
    this.setOldID = (oldID) => {
      ctx.revertOldID = oldID;
    };
    this.getCurrentID = () => {
      return ctx.revertCurID;
    };
    this.getRevisionUser = () => {
      return ctx.revertUser;
    };
    this.getLastEditTime = () => {
      return ctx.lastEditTime;
    };
    this.setCallbackParameters = (callbackParameters) => {
      ctx.callbackParameters = callbackParameters;
    };
    this.getCallbackParameters = () => {
      return ctx.callbackParameters;
    };
    this.setStatusElement = (statusElement) => {
      ctx.statusElement = statusElement;
    };
    this.getStatusElement = () => {
      return ctx.statusElement;
    };
    this.exists = () => {
      return ctx.pageExists;
    };
    this.getPageID = () => {
      return ctx.pageID;
    };
    this.getContentModel = () => {
      return ctx.contentModel;
    };
    this.getWatched = () => {
      return ctx.watched;
    };
    this.getLoadTime = () => {
      return ctx.loadTime;
    };
    this.getCreator = () => {
      return ctx.creator;
    };
    this.getCreationTimestamp = () => {
      return ctx.timestamp;
    };
    this.canEdit = () => {
      return !!ctx.testActions && ctx.testActions.includes("edit");
    };
    this.lookupCreation = function(onSuccess, onFailure) {
      ctx.onLookupCreationSuccess = onSuccess;
      ctx.onLookupCreationFailure = onFailure || emptyFunction;
      if (!onSuccess) {
        ctx.statusElement.error("Internal error: no onSuccess callback provided to lookupCreation()!");
        ctx.onLookupCreationFailure(this);
        return;
      }
      const query = {
        action: "query",
        prop: "revisions",
        titles: ctx.pageName,
        rvlimit: 1,
        rvprop: "user|timestamp",
        rvdir: "newer",
        format: "json"
      };
      if (ctx.lookupNonRedirectCreator) {
        query.rvsection = 0;
        query.rvprop += "|content";
      }
      if (ctx.followRedirect) {
        query.redirects = "";
      }
      ctx.lookupCreationApi = new Morebits.wiki.api(window.wgULS("抓取页面创建者信息", "抓取頁面建立者資訊"), query, fnLookupCreationSuccess, ctx.statusElement, ctx.onLookupCreationFailure);
      ctx.lookupCreationApi.setParent(this);
      ctx.lookupCreationApi.post();
    };
    this.revert = function(onSuccess, onFailure) {
      ctx.onSaveSuccess = onSuccess;
      ctx.onSaveFailure = onFailure || emptyFunction;
      if (!ctx.revertOldID) {
        ctx.statusElement.error("Internal error: revision ID to revert to was not set before revert!");
        ctx.onSaveFailure(this);
        return;
      }
      ctx.editMode = "revert";
      this.load(fnAutoSave, ctx.onSaveFailure);
    };
    this.move = function(onSuccess, onFailure) {
      ctx.onMoveSuccess = onSuccess;
      ctx.onMoveFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "move", ctx.onMoveFailure)) {
        return;
      }
      if (!ctx.moveDestination) {
        ctx.statusElement.error("Internal error: destination page name was not set before move!");
        ctx.onMoveFailure(this);
        return;
      }
      if (fnCanUseMwUserToken("move")) {
        fnProcessMove.call(this, this);
      } else {
        const query = fnNeedTokenInfoQuery("move");
        ctx.moveApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessMove, ctx.statusElement, ctx.onMoveFailure);
        ctx.moveApi.setParent(this);
        ctx.moveApi.post();
      }
    };
    this.patrol = function() {
      if (!Morebits.userIsSysop && !Morebits.userIsInGroup("patroller")) {
        return;
      }
      const $body = $("body");
      if ($body.find(".patrollink").length) {
        const patrolhref = $body.find(".patrollink a").attr("href");
        ctx.rcid = mw.util.getParamValue("rcid", patrolhref);
        fnProcessPatrol(this, this);
      } else {
        const patrolQuery = {
          action: "query",
          prop: "info",
          meta: "tokens",
          type: "patrol",
          // as long as we're querying, might as well get a token
          list: "recentchanges",
          // check if the page is unpatrolled
          titles: ctx.pageName,
          rcprop: "patrolled",
          rctitle: ctx.pageName,
          rclimit: 1,
          format: "json"
        };
        ctx.patrolApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), patrolQuery, fnProcessPatrol);
        ctx.patrolApi.setParent(this);
        ctx.patrolApi.post();
      }
    };
    this.deletePage = function(onSuccess, onFailure) {
      ctx.onDeleteSuccess = onSuccess;
      ctx.onDeleteFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "delete", ctx.onDeleteFailure)) {
        return;
      }
      if (fnCanUseMwUserToken("delete")) {
        fnProcessDelete.call(this, this);
      } else {
        const query = fnNeedTokenInfoQuery("delete");
        ctx.deleteApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessDelete, ctx.statusElement, ctx.onDeleteFailure);
        ctx.deleteApi.setParent(this);
        ctx.deleteApi.post();
      }
    };
    this.undeletePage = function(onSuccess, onFailure) {
      ctx.onUndeleteSuccess = onSuccess;
      ctx.onUndeleteFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "undelete", ctx.onUndeleteFailure)) {
        return;
      }
      if (fnCanUseMwUserToken("undelete")) {
        fnProcessUndelete.call(this, this);
      } else {
        const query = fnNeedTokenInfoQuery("undelete");
        ctx.undeleteApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessUndelete, ctx.statusElement, ctx.onUndeleteFailure);
        ctx.undeleteApi.setParent(this);
        ctx.undeleteApi.post();
      }
    };
    this.protect = function(onSuccess, onFailure) {
      ctx.onProtectSuccess = onSuccess;
      ctx.onProtectFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "protect", ctx.onProtectFailure)) {
        return;
      }
      if (!ctx.protectEdit && !ctx.protectMove && !ctx.protectCreate) {
        ctx.statusElement.error("Internal error: you must set edit and/or move and/or create protection before calling protect()!");
        ctx.onProtectFailure(this);
        return;
      }
      const query = fnNeedTokenInfoQuery("protect");
      ctx.protectApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessProtect, ctx.statusElement, ctx.onProtectFailure);
      ctx.protectApi.setParent(this);
      ctx.protectApi.post();
    };
    const fnCanUseMwUserToken = (action) => {
      action || (action = "edit");
      if (ctx.watchlistExpiry && !Morebits.string.isInfinity(ctx.watchlistExpiry)) {
        return false;
      }
      if (ctx.followRedirect) {
        if (!ctx.followCrossNsRedirect) {
          return false;
        }
        if (action !== "edit" || ctx.editMode === "all" || ctx.editMode === "revert") {
          return false;
        }
      }
      if (Morebits.userIsSysop && !ctx.suppressProtectWarning) {
        if (new mw.Title(Morebits.pageNameNorm).getPrefixedText() !== new mw.Title(ctx.pageName).getPrefixedText()) {
          return false;
        }
        const editRestriction = mw.config.get("wgRestrictionEdit");
        if (!editRestriction || editRestriction.includes("sysop")) {
          return false;
        }
      }
      return !!mw.user.tokens.get("csrfToken");
    };
    const fnNeedTokenInfoQuery = (action) => {
      const query = {
        action: "query",
        meta: "tokens",
        type: "csrf",
        titles: ctx.pageName,
        prop: "info",
        inprop: "watched",
        format: "json"
      };
      if (action !== "move" || Morebits.userIsSysop) {
        query.inprop += "|protection";
      }
      if (ctx.followRedirect && action !== "undelete") {
        query.redirects = "";
      }
      return query;
    };
    const fnAutoSave = (pageobj) => {
      pageobj.save(ctx.onSaveSuccess, ctx.onSaveFailure);
    };
    const fnLoadSuccess = function() {
      const response = ctx.loadApi.getResponse().query;
      if (!fnCheckPageName(response, ctx.onLoadFailure)) {
        return;
      }
      const [page] = response.pages;
      let rev;
      ctx.pageExists = !page.missing;
      if (ctx.pageExists) {
        [rev] = page.revisions;
        ctx.lastEditTime = rev.timestamp;
        ctx.pageText = rev.content;
        ctx.pageID = page.pageid;
      } else {
        ctx.pageText = "";
        ctx.pageID = 0;
      }
      ctx.csrfToken = response.tokens.csrftoken;
      if (!ctx.csrfToken) {
        ctx.statusElement.error(window.wgULS("未能获取编辑令牌。", "未能取得編輯權杖。"));
        ctx.onLoadFailure(this);
        return;
      }
      ctx.loadTime = ctx.loadApi.getResponse().curtimestamp;
      if (!ctx.loadTime) {
        ctx.statusElement.error(window.wgULS("未能获取当前时间戳。", "未能取得當前時間戳。"));
        ctx.onLoadFailure(this);
        return;
      }
      ctx.contentModel = page.contentmodel;
      ctx.watched = page.watchlistexpiry || page.watched;
      if (Morebits.userIsSysop) {
        const editProt = page.protection.filter((pr) => {
          return pr.type === "edit" && pr.level === "sysop";
        }).pop();
        if (editProt) {
          ctx.fullyProtected = editProt.expiry;
        } else {
          ctx.fullyProtected = false;
        }
      }
      ctx.revertCurID = page.lastrevid;
      const testactions = page.actions;
      ctx.testActions = [];
      for (var _i6 = 0, _Object$keys = Object.keys(testactions); _i6 < _Object$keys.length; _i6++) {
        const action = _Object$keys[_i6];
        if (testactions[action]) {
          ctx.testActions.push(action);
        }
      }
      if (ctx.editMode === "revert") {
        ctx.revertCurID = rev && rev.revid;
        if (!ctx.revertCurID) {
          ctx.statusElement.error(window.wgULS("未能获取当前修订版本ID。", "未能取得目前修訂版本ID。"));
          ctx.onLoadFailure(this);
          return;
        }
        ctx.revertUser = rev && rev.user;
        if (!ctx.revertUser) {
          if (rev && rev.userhidden) {
            ctx.revertUser = window.wgULS("<用户名已隐藏>", "<使用者名稱已隱藏>");
          } else {
            ctx.statusElement.error(window.wgULS("未能获取此修订版本的编辑者。", "未能取得此修訂版本的編輯者。"));
            ctx.onLoadFailure(this);
            return;
          }
        }
        ctx.editSummary = "[[LIB:UNDO|撤销]]由 ".concat(ctx.revertUser, " 所做出的").concat(window.wgULS("修订 ", "修訂 ")).concat(ctx.revertOldID, "：").concat(ctx.editSummary);
      }
      ctx.pageLoaded = true;
      ctx.onLoadSuccess(this);
    };
    const fnCheckPageName = function(response, onFailure) {
      if (!onFailure) {
        onFailure = emptyFunction;
      }
      const page = response.pages && response.pages[0];
      if (page) {
        if (page.invalid) {
          ctx.statusElement.error(window.wgULS("标题不合法：", "標題不合法：".concat(ctx.pageName)));
          onFailure(this);
          return false;
        }
        const resolvedName = page.title;
        if (response.redirects) {
          const origNs = new mw.Title(ctx.pageName).namespace;
          const newNs = new mw.Title(resolvedName).namespace;
          if (origNs !== newNs && !ctx.followCrossNsRedirect) {
            ctx.statusElement.error(ctx.pageName + window.wgULS("是跨命名空间重定向到", "是跨命名空間重新導向到") + resolvedName + window.wgULS("，略过", "，略過"));
            onFailure(this);
            return false;
          }
          new Morebits.status(window.wgULS("信息", "資訊"), window.wgULS("从 ", "從 ") + ctx.pageName + window.wgULS(" 重定向到 ", " 重新導向到 ") + resolvedName);
        }
        ctx.pageName = resolvedName;
      } else {
        ctx.statusElement.error(window.wgULS("不能解析页面的重定向：", "不能解析頁面的重新導向：") + ctx.pageName);
        onFailure(this);
        ++Morebits.wiki.numberOfActionsLeft;
        return false;
      }
      return true;
    };
    const fnApplyWatchlistExpiry = () => {
      if (ctx.watchlistExpiry) {
        if (!ctx.watched || Morebits.string.isInfinity(ctx.watchlistExpiry)) {
          return true;
        } else if (typeof ctx.watched === "string") {
          let newExpiry;
          const rel = ctx.watchlistExpiry.split(" ");
          try {
            newExpiry = new Morebits.date().add(rel[0], rel[1]);
          } catch {
            newExpiry = new Morebits.date(ctx.watchlistExpiry);
          }
          if (newExpiry.isValid()) {
            if (newExpiry.isAfter(new Morebits.date(ctx.watched))) {
              return true;
            }
          } else {
            return true;
          }
        }
      }
      return false;
    };
    const fnSaveSuccess = function() {
      ctx.editMode = "all";
      const response = ctx.saveApi.getResponse();
      if (response.edit.result === "Success") {
        const link = document.createElement("a");
        link.setAttribute("href", mw.util.getUrl(ctx.pageName));
        link.appendChild(document.createTextNode(ctx.pageName));
        ctx.statusElement.info(["完成（", link, "）"]);
        if (ctx.onSaveSuccess) {
          ctx.onSaveSuccess(this);
        }
        return;
      }
      if (response.edit.captcha) {
        ctx.statusElement.error(window.wgULS("不能保存页面，因服务器要求您输入验证码。", "不能儲存頁面，因伺服器要求您輸入驗證碼。"));
      } else {
        ctx.statusElement.error(window.wgULS("保存页面时由API得到未知错误", "儲存頁面時由API得到未知錯誤"));
      }
      ++Morebits.wiki.numberOfActionsLeft;
      ctx.onSaveFailure(this);
    };
    const fnSaveError = function() {
      const errorCode = ctx.saveApi.getErrorCode();
      if (errorCode === "editconflict" && ctx.conflictRetries++ < ctx.maxConflictRetries) {
        const purgeQuery = {
          action: "purge",
          titles: ctx.pageName
          // redirects are already resolved
        };
        const purgeApi = new Morebits.wiki.api(window.wgULS("检测到编辑冲突，正在更新服务器缓存", "檢測到編輯衝突，正在更新伺服器快取"), purgeQuery, () => {
          --Morebits.wiki.numberOfActionsLeft;
          ctx.statusElement.info(window.wgULS("检测到编辑冲突，重试修改", "檢測到編輯衝突，重試修改"));
          if (fnCanUseMwUserToken("edit")) {
            ctx.saveApi.post();
          } else {
            ctx.loadApi.post();
          }
        }, ctx.statusElement);
        purgeApi.post();
      } else if ((errorCode === null || errorCode === void 0) && ctx.retries++ < ctx.maxRetries) {
        ctx.statusElement.info(window.wgULS("保存失败，在2秒后重试……", "儲存失敗，在2秒後重試……"));
        --Morebits.wiki.numberOfActionsLeft;
        sleep(2e3).then(() => {
          ctx.saveApi.post();
        });
      } else {
        const response = ctx.saveApi.getResponse();
        const errorData = response.error || // bc error format
        response.errors[0].data;
        switch (errorCode) {
          case "protectedpage":
            ctx.statusElement.error(window.wgULS("不能保存修改：页面被保护", "不能儲存修改：頁面被保護"));
            break;
          case "abusefilter-disallowed":
            ctx.statusElement.error(window.wgULS("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「") + errorData.abusefilter.description + window.wgULS("”阻止。若您认为您的该次编辑是有意义的，请至 Wikipedia:防滥用过滤器/错误报告 提报。", "」阻止。若您認為您的該次編輯是有意義的，請至 Wikipedia:防濫用過濾器/錯誤報告 提報。"));
            break;
          case "abusefilter-warning":
            ctx.statusElement.error([window.wgULS("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「"), errorData.abusefilter.description, window.wgULS("”警告，若您仍希望做出该编辑，请尝试重新提交，根据过滤器的设置您可能可以作出此编辑。", "」警告，若您仍希望做出該編輯，請嘗試重新提交，根據過濾器的設定您可能可以作出此編輯。")]);
            break;
          case "spamblacklist": {
            const [spam] = errorData.spamblacklist.matches;
            ctx.statusElement.error(window.wgULS("不能保存页面，因URL ", "不能儲存頁面，因URL ") + spam + window.wgULS(" 在垃圾链接黑名单中。", " 在垃圾連結黑名單中。"));
            break;
          }
          default:
            ctx.statusElement.error(window.wgULS("不能保存修改：", "不能儲存修改：") + ctx.saveApi.getErrorText());
        }
        ctx.editMode = "all";
        if (ctx.onSaveFailure) {
          ctx.onSaveFailure(this);
        }
      }
    };
    const isTextRedirect = (text) => {
      if (!text) {
        return false;
      }
      return Morebits.l10n.redirectTagAliases.some((tag) => {
        return new RegExp("^\\s*".concat(tag, "\\W"), "i").test(text);
      });
    };
    const fnLookupCreationSuccess = function() {
      const response = ctx.lookupCreationApi.getResponse().query;
      if (!fnCheckPageName(response, ctx.onLookupCreationFailure)) {
        return;
      }
      const rev = response.pages[0].revisions && response.pages[0].revisions[0];
      if (!rev) {
        ctx.statusElement.error(window.wgULS("无法找到", "無法找到") + ctx.pageName + window.wgULS("的任何修订版本", "的任何修訂版本"));
        ctx.onLookupCreationFailure(this);
        return;
      }
      if (!ctx.lookupNonRedirectCreator || !isTextRedirect(rev.content)) {
        ctx.creator = rev.user;
        if (!ctx.creator) {
          ctx.statusElement.error(window.wgULS("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
          ctx.onLookupCreationFailure(this);
          return;
        }
        ctx.timestamp = rev.timestamp;
        if (!ctx.timestamp) {
          ctx.statusElement.error(window.wgULS("无法获取页面创建时间", "無法取得頁面建立時間"));
          ctx.onLookupCreationFailure(this);
          return;
        }
        ctx.statusElement.info(window.wgULS("已获取页面创建信息", "已取得頁面建立資訊"));
        ctx.onLookupCreationSuccess(this);
      } else {
        ctx.lookupCreationApi.query.rvlimit = 50;
        ctx.lookupCreationApi.query.titles = ctx.pageName;
        ctx.lookupCreationApi = new Morebits.wiki.api(window.wgULS("获取页面创建信息", "取得頁面建立資訊"), ctx.lookupCreationApi.query, fnLookupNonRedirectCreator, ctx.statusElement, ctx.onLookupCreationFailure);
        ctx.lookupCreationApi.setParent(this);
        ctx.lookupCreationApi.post();
      }
    };
    const fnLookupNonRedirectCreator = function() {
      const response = ctx.lookupCreationApi.getResponse().query;
      const revs = response.pages[0].revisions;
      var _iterator7 = _createForOfIteratorHelper(revs), _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
          const rev = _step7.value;
          if (!isTextRedirect(rev.content)) {
            ctx.creator = rev.user;
            ctx.timestamp = rev.timestamp;
            break;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      if (!ctx.creator) {
        ctx.creator = revs[0].user;
        ctx.timestamp = revs[0].timestamp;
        if (!ctx.creator) {
          ctx.statusElement.error(window.wgULS("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
          ctx.onLookupCreationFailure(this);
          return;
        }
      }
      if (!ctx.timestamp) {
        ctx.statusElement.error(window.wgULS("无法获取页面创建时间", "無法取得頁面建立時間"));
        ctx.onLookupCreationFailure(this);
        return;
      }
      ctx.statusElement.info(window.wgULS("已获取页面创建信息", "已取得頁面建立資訊"));
      ctx.onLookupCreationSuccess(this);
    };
    const fnPreflightChecks = function(action, onFailure) {
      if (!Morebits.userIsSysop && action !== "move") {
        ctx.statusElement.error(window.wgULS("无法对页面进行“", "無法對頁面進行「") + action + window.wgULS("”操作：只有管理员可以进行此操作", "」操作：只有管理員可以進行此操作"));
        onFailure(this);
        return false;
      }
      if (!ctx.editSummary) {
        ctx.statusElement.error("Internal error: ".concat(action, " reason not set (use setEditSummary function)!"));
        onFailure(this);
        return false;
      }
      return true;
    };
    const fnProcessChecks = function(action, onFailure, response) {
      const [{
        missing
      }] = response.pages;
      const actionMissing = missing && ["delete", "move"].includes(action);
      const protectMissing = action === "protect" && missing && (ctx.protectEdit || ctx.protectMove);
      const saltMissing = action === "protect" && !missing && ctx.protectCreate;
      if (actionMissing || protectMissing || saltMissing) {
        ctx.statusElement.error("".concat(window.wgULS("无法对页面进行“", "無法對頁面進行「") + action + window.wgULS("”操作，因为页面", "」操作，因為頁面") + (missing ? "已不" : window.wgULS("已经", "已經")), "存在"));
        onFailure(this);
        return false;
      }
      let editprot;
      if (action === "undelete") {
        editprot = response.pages[0].protection.filter((pr) => {
          return pr.type === "create" && pr.level === "sysop";
        }).pop();
      } else if (action === "delete" || action === "move") {
        editprot = response.pages[0].protection.filter((pr) => {
          return pr.type === "edit" && pr.level === "sysop";
        }).pop();
      }
      if (editprot && !ctx.suppressProtectWarning && !confirm(window.wgULS("您即将对全保护页面“", "您即將對全保護頁面「") + ctx.pageName + (editprot.expiry === "infinity" ? window.wgULS("”（永久）", "」（永久）") : "".concat(window.wgULS("”（到期：", "」（到期：") + new Morebits.date(editprot.expiry).calendar("utc"), " (UTC)）")) + window.wgULS("”进行“", "」進行「") + action + window.wgULS("”操作", "」操作") + window.wgULS("。\n\n单击确定以继续操作，或单击取消以取消操作。", "。\n\n點擊確定以繼續操作，或點擊取消以取消操作。"))) {
        ctx.statusElement.error(window.wgULS("已取消对全保护页面的操作。", "已取消對全保護頁面的操作。"));
        onFailure(this);
        return false;
      }
      if (!response.tokens.csrftoken) {
        ctx.statusElement.error(window.wgULS("无法获取令牌。", "無法取得權杖。"));
        onFailure(this);
        return false;
      }
      return true;
    };
    const fnProcessMove = function() {
      let pageTitle;
      let token;
      if (fnCanUseMwUserToken("move")) {
        token = mw.user.tokens.get("csrfToken");
        pageTitle = ctx.pageName;
      } else {
        const response = ctx.moveApi.getResponse().query;
        if (!fnProcessChecks("move", ctx.onMoveFailure, response)) {
          return;
        }
        token = response.tokens.csrftoken;
        const [page] = response.pages;
        pageTitle = page.title;
        ctx.watched = page.watchlistexpiry || page.watched;
      }
      const query = {
        action: "move",
        from: pageTitle,
        to: ctx.moveDestination,
        token,
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      if (ctx.moveTalkPage) {
        query.movetalk = "true";
      }
      if (ctx.moveSubpages) {
        query.movesubpages = "true";
      }
      if (ctx.moveSuppressRedirect) {
        query.noredirect = "true";
      }
      ctx.moveProcessApi = new Morebits.wiki.api(window.wgULS("移动页面……", "移動頁面……"), query, ctx.onMoveSuccess, ctx.statusElement, ctx.onMoveFailure);
      ctx.moveProcessApi.setParent(this);
      ctx.moveProcessApi.post();
    };
    const fnProcessPatrol = function() {
      const query = {
        action: "patrol",
        format: "json"
      };
      if (ctx.rcid) {
        query.rcid = ctx.rcid;
        query.token = mw.user.tokens.get("patrolToken");
      } else {
        const response = ctx.patrolApi.getResponse().query;
        if (!response.recentchanges[0].unpatrolled) {
          return;
        }
        const [{
          lastrevid
        }] = response.pages;
        if (!lastrevid) {
          return;
        }
        query.revid = lastrevid;
        const token = response.tokens.csrftoken;
        if (!token) {
          return;
        }
        query.token = token;
      }
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      const patrolStat = new Morebits.status(window.wgULS("标记页面为已巡查", "標記頁面為已巡查"));
      ctx.patrolProcessApi = new Morebits.wiki.api(window.wgULS("巡查页面……", "巡查頁面……"), query, null, patrolStat);
      ctx.patrolProcessApi.setParent(this);
      ctx.patrolProcessApi.post();
    };
    const fnProcessDelete = function() {
      let pageTitle;
      let token;
      if (fnCanUseMwUserToken("delete")) {
        token = mw.user.tokens.get("csrfToken");
        pageTitle = ctx.pageName;
      } else {
        const response = ctx.deleteApi.getResponse().query;
        if (!fnProcessChecks("delete", ctx.onDeleteFailure, response)) {
          return;
        }
        token = response.tokens.csrftoken;
        const [page] = response.pages;
        pageTitle = page.title;
        ctx.watched = page.watchlistexpiry || page.watched;
      }
      const query = {
        action: "delete",
        title: pageTitle,
        token,
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      ctx.deleteProcessApi = new Morebits.wiki.api(window.wgULS("删除页面……", "刪除頁面……"), query, ctx.onDeleteSuccess, ctx.statusElement, fnProcessDeleteError);
      ctx.deleteProcessApi.setParent(this);
      ctx.deleteProcessApi.post();
    };
    const fnProcessDeleteError = function() {
      const errorCode = ctx.deleteProcessApi.getErrorCode();
      if (errorCode === "internal_api_error_DBQueryError" && ctx.retries++ < ctx.maxRetries) {
        ctx.statusElement.info(window.wgULS("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
        --Morebits.wiki.numberOfActionsLeft;
        ctx.deleteProcessApi.post();
      } else if (errorCode === "missingtitle") {
        ctx.statusElement.error(window.wgULS("不能删除页面，因其已不存在", "不能刪除頁面，因其已不存在"));
        if (ctx.onDeleteFailure) {
          ctx.onDeleteFailure.call(this, ctx.deleteProcessApi);
        }
      } else {
        ctx.statusElement.error(window.wgULS("无法删除页面：", "無法刪除頁面：") + ctx.deleteProcessApi.getErrorText());
        if (ctx.onDeleteFailure) {
          ctx.onDeleteFailure.call(this, ctx.deleteProcessApi);
        }
      }
    };
    const fnProcessUndelete = function() {
      let pageTitle;
      let token;
      if (fnCanUseMwUserToken("undelete")) {
        token = mw.user.tokens.get("csrfToken");
        pageTitle = ctx.pageName;
      } else {
        const response = ctx.undeleteApi.getResponse().query;
        if (!fnProcessChecks("undelete", ctx.onUndeleteFailure, response)) {
          return;
        }
        token = response.tokens.csrftoken;
        const [page] = response.pages;
        pageTitle = page.title;
        ctx.watched = page.watchlistexpiry || page.watched;
      }
      const query = {
        action: "undelete",
        title: pageTitle,
        token,
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      ctx.undeleteProcessApi = new Morebits.wiki.api(window.wgULS("还原页面……", "還原頁面……"), query, ctx.onUndeleteSuccess, ctx.statusElement, fnProcessUndeleteError);
      ctx.undeleteProcessApi.setParent(this);
      ctx.undeleteProcessApi.post();
    };
    const fnProcessUndeleteError = function() {
      const errorCode = ctx.undeleteProcessApi.getErrorCode();
      if (errorCode === "internal_api_error_DBQueryError") {
        if (ctx.retries++ < ctx.maxRetries) {
          ctx.statusElement.info(window.wgULS("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
          --Morebits.wiki.numberOfActionsLeft;
          ctx.undeleteProcessApi.post();
        } else {
          ctx.statusElement.error(window.wgULS("持续的数据库查询错误，重新加载页面并重试", "持續的資料庫查詢錯誤，重新載入頁面並重試"));
          if (ctx.onUndeleteFailure) {
            ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
          }
        }
      } else if (errorCode === "cantundelete") {
        ctx.statusElement.error(window.wgULS("无法还原删除页面，因没有版本供还原或已被还原", "無法還原刪除頁面，因沒有版本供還原或已被還原"));
        if (ctx.onUndeleteFailure) {
          ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
        }
      } else {
        ctx.statusElement.error(window.wgULS("无法还原页面：", "無法還原頁面：") + ctx.undeleteProcessApi.getErrorText());
        if (ctx.onUndeleteFailure) {
          ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
        }
      }
    };
    const fnProcessProtect = function() {
      const response = ctx.protectApi.getResponse().query;
      if (!fnProcessChecks("protect", ctx.onProtectFailure, response)) {
        return;
      }
      const token = response.tokens.csrftoken;
      const [page] = response.pages;
      const pageTitle = page.title;
      ctx.watched = page.watchlistexpiry || page.watched;
      const prs = response.pages[0].protection;
      let editprot;
      let moveprot;
      let createprot;
      var _iterator8 = _createForOfIteratorHelper(prs), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          const pr = _step8.value;
          if (pr.type === "edit" && !pr.source) {
            editprot = pr;
          } else if (pr.type === "move") {
            moveprot = pr;
          } else if (pr.type === "create") {
            createprot = pr;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      if (!ctx.protectEdit && editprot) {
        ctx.protectEdit = {
          level: editprot.level,
          expiry: editprot.expiry
        };
      }
      if (!ctx.protectMove && moveprot) {
        ctx.protectMove = {
          level: moveprot.level,
          expiry: moveprot.expiry
        };
      }
      if (!ctx.protectCreate && createprot) {
        ctx.protectCreate = {
          level: createprot.level,
          expiry: createprot.expiry
        };
      }
      if (ctx.protectCascade === null) {
        ctx.protectCascade = !!prs.filter((pr) => {
          return pr.cascade;
        }).length;
      }
      if (ctx.protectCascade) {
        if ((!ctx.protectEdit || ctx.protectEdit.level !== "sysop" || !ctx.protectMove || ctx.protectMove.level !== "sysop") && !confirm(window.wgULS("您已对“", "您已對「") + ctx.pageName + window.wgULS("”启用了连锁保护", "」啟用了連鎖保護") + window.wgULS("，但没有设置仅管理员的保护级别。\n\n", "，但沒有設定僅管理員的保護級別。\n\n") + window.wgULS("单击确认以自动调整并继续连锁全保护，单击取消以跳过此操作", "點擊確認以自動調整並繼續連鎖全保護，點擊取消以跳過此操作"))) {
          ctx.statusElement.error(window.wgULS("连锁保护已取消。", "連鎖保護已取消。"));
          ctx.onProtectFailure(this);
          return;
        }
        ctx.protectEdit.level = "sysop";
        ctx.protectMove.level = "sysop";
      }
      const protections = [];
      const expirys = [];
      if (ctx.protectEdit) {
        protections.push("edit=".concat(ctx.protectEdit.level));
        expirys.push(ctx.protectEdit.expiry);
      }
      if (ctx.protectMove) {
        protections.push("move=".concat(ctx.protectMove.level));
        expirys.push(ctx.protectMove.expiry);
      }
      if (ctx.protectCreate) {
        protections.push("create=".concat(ctx.protectCreate.level));
        expirys.push(ctx.protectCreate.expiry);
      }
      const query = {
        action: "protect",
        title: pageTitle,
        token,
        protections: protections.join("|"),
        expiry: expirys.join("|"),
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      if (ctx.protectCascade) {
        query.cascade = "true";
      }
      ctx.protectProcessApi = new Morebits.wiki.api(window.wgULS("保护页面……", "保護頁面……"), query, ctx.onProtectSuccess, ctx.statusElement, ctx.onProtectFailure);
      ctx.protectProcessApi.setParent(this);
      ctx.protectProcessApi.post();
    };
    const sleep = (milliseconds) => {
      const deferred = $.Deferred();
      setTimeout(deferred.resolve, milliseconds);
      return deferred;
    };
  };
  Morebits.wiki.preview = function(previewbox) {
    this.previewbox = previewbox;
    $(previewbox).addClass("morebits-previewbox").hide();
    this.beginRender = (wikitext, pageTitle, sectionTitle) => {
      $(previewbox).show();
      const statusspan = document.createElement("span");
      previewbox.appendChild(statusspan);
      Morebits.status.init(statusspan);
      let pageName = mw.config.get("wgPageName");
      if (mw.config.get("wgPageContentModel") !== "wikitext") {
        pageName = "Draft:".concat(pageName);
      }
      const query = {
        action: "parse",
        prop: ["text", "modules"],
        pst: true,
        // PST = pre-save transform; this makes substitution work properly
        preview: true,
        text: wikitext,
        title: pageTitle || pageName,
        disablelimitreport: true,
        disableeditsection: true,
        uselang: mw.config.get("wgUserLanguage"),
        // Use wgUserLanguage for preview
        format: "json"
      };
      if (sectionTitle) {
        query.section = "new";
        query.sectiontitle = sectionTitle;
      }
      const renderApi = new Morebits.wiki.api(window.wgULS("加载中……", "載入中……"), query, fnRenderSuccess, new Morebits.status(window.wgULS("预览", "預覽")));
      renderApi.post();
    };
    const fnRenderSuccess = (apiobj) => {
      const response = apiobj.getResponse();
      const html = response.parse.text;
      if (!html) {
        apiobj.statelem.error(window.wgULS("加载预览失败，或模板为空", "載入預覽失敗，或模板為空"));
        return;
      }
      previewbox.innerHTML = html;
      mw.loader.load(response.parse.modulestyles);
      mw.loader.load(response.parse.modules);
      $(previewbox).find("a").attr("target", "_blank").attr("rel", "noopener noreferrer");
    };
    this.closePreview = () => {
      $(previewbox).empty().hide();
    };
  };
  Morebits.wikitext = {};
  Morebits.wikitext.parseTemplate = (text, start) => {
    start || (start = 0);
    const level = [];
    let count = -1;
    let unnamed = 0;
    let equals = -1;
    let current = "";
    const result = {
      name: "",
      parameters: {}
    };
    let key;
    let value;
    const findParam = (final) => {
      if (count === -1) {
        result.name = current.slice(2).trim();
        ++count;
      } else if (equals === -1) {
        const param = final ? current.slice(equals + 1, -2) : current;
        if (param) {
          result.parameters[++unnamed] = param;
          ++count;
        }
      } else {
        key = current.slice(0, Math.max(0, equals)).trim();
        value = final ? current.slice(equals + 1, -2).trim() : current.slice(Math.max(0, equals + 1)).trim();
        result.parameters[key] = value;
        equals = -1;
      }
    };
    for (let i = start; i < text.length; ++i) {
      const test3 = text.slice(i, i + 3);
      if (test3 === "{{{" || test3 === "}}}" && level.at(-1) === 3) {
        current += test3;
        i += 2;
        if (test3 === "{{{") {
          level.push(3);
        } else {
          level.pop();
        }
        continue;
      }
      const test2 = text.slice(i, i + 2);
      if (test2 === "{{" || test2 === "[[") {
        current += test2;
        ++i;
        if (test2 === "{{") {
          level.push(2);
        } else {
          level.push("wl");
        }
        continue;
      }
      if (test2 === "}}" && level.at(-1) === 2 || test2 === "]]" && level.at(-1) === "wl") {
        current += test2;
        ++i;
        level.pop();
        if (test2 === "}}" && level.length === 0) {
          findParam(true);
          break;
        }
        continue;
      }
      if (text.charAt(i) === "|" && level.length === 1) {
        findParam();
        current = "";
      } else if (equals === -1 && text.charAt(i) === "=" && level.length === 1) {
        equals = current.length;
        current += text.charAt(i);
      } else {
        current += text.charAt(i);
      }
    }
    return result;
  };
  Morebits.wikitext.page = function(text) {
    this.text = text;
  };
  Morebits.wikitext.page.prototype = {
    text: "",
    /**
     * Removes links to `link_target` from the page text.
     *
     * @param {string} linkTarget
     * @returns {Morebits.wikitext.page}
     */
    removeLink(linkTarget) {
      const mwTitle = mw.Title.newFromText(linkTarget);
      const namespaceID = mwTitle.getNamespaceId();
      const title = mwTitle.getMainText();
      let linkRegexString = "";
      if (namespaceID !== 0) {
        linkRegexString = "".concat(Morebits.namespaceRegex(namespaceID), ":");
      }
      linkRegexString += Morebits.pageNameRegex(title);
      const isFileOrCategory = [6, 14].includes(namespaceID);
      const colon = isFileOrCategory ? ":" : ":?";
      const simpleLinkRegex = new RegExp("\\[\\[".concat(colon, "(").concat(linkRegexString, ")\\]\\]"), "g");
      const pipedLinkRegex = new RegExp("\\[\\[".concat(colon).concat(linkRegexString, "\\|(.+?)\\]\\]"), "g");
      this.text = this.text.replace(simpleLinkRegex, "$1").replace(pipedLinkRegex, "$1");
      return this;
    },
    /**
     * Comments out images from page text; if used in a gallery, deletes the whole line.
     * If used as a template argument (not necessarily with `File:` prefix), the template parameter is commented out.
     *
     * @param {string} image - Image name without `File:` prefix.
     * @param {string} [reason] - Reason to be included in comment, alongside the commented-out image.
     * @returns {Morebits.wikitext.page}
     */
    commentOutImage(image, reason) {
      const unbinder = new Morebits.unbinder(this.text);
      unbinder.unbind("<!--", "-->");
      reason = reason ? "".concat(reason, ": ") : "";
      const imageRegexString = Morebits.pageNameRegex(image);
      const linksRegex = new RegExp("\\[\\[".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*[\\|(?:\\]\\])]"));
      const allLinks = Morebits.string.splitWeightedByKeys(unbinder.content, "[[", "]]");
      var _iterator9 = _createForOfIteratorHelper(allLinks), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          const allLink = _step9.value;
          if (linksRegex.test(allLink)) {
            const replacement = "<!-- ".concat(reason).concat(allLink, " -->");
            unbinder.content = unbinder.content.replace(allLink, replacement);
            unbinder.unbind("<!--", "-->");
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      const galleryImageRegex = new RegExp("(^\\s*".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*(?:\\|.*?$|$))"), "mg");
      unbinder.content = unbinder.content.replace(galleryImageRegex, "<!-- ".concat(reason, "$1 -->"));
      unbinder.unbind("<!--", "-->");
      const freeImageRegex = new RegExp("(\\|\\s*(?:[\\w\\s]+\\=)?\\s*(?:".concat(Morebits.namespaceRegex(6), ":\\s*)?").concat(imageRegexString, ")"), "mg");
      unbinder.content = unbinder.content.replace(freeImageRegex, "<!-- ".concat(reason, "$1 -->"));
      this.text = unbinder.rebind();
      return this;
    },
    /**
     * Converts uses of [[File:`image`]] to [[File:`image`|`data`]].
     *
     * @param {string} image - Image name without File: prefix.
     * @param {string} data - The display options.
     * @returns {Morebits.wikitext.page}
     */
    addToImageComment(image, data) {
      const imageRegexString = Morebits.pageNameRegex(image);
      const linksRegex = new RegExp("\\[\\[".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*[\\|(?:\\]\\])]"));
      const allLinks = Morebits.string.splitWeightedByKeys(this.text, "[[", "]]");
      var _iterator10 = _createForOfIteratorHelper(allLinks), _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
          let replacement = _step10.value;
          if (linksRegex.test(replacement)) {
            replacement = replacement.replace(/\]\]$/, "|".concat(data, "]]"));
            this.text = this.text.replace(replacement, replacement);
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      const galleryRegex = new RegExp("^(\\s*".concat(imageRegexString, ".*?)\\|?(.*?)$"), "mg");
      const newtext = "$1|$2 ".concat(data);
      this.text = this.text.replace(galleryRegex, newtext);
      return this;
    },
    /**
     * Remove all transclusions of a template from page text.
     *
     * @param {string} template - Page name whose transclusions are to be removed,
     * include namespace prefix only if not in template namespace.
     * @returns {Morebits.wikitext.page}
     */
    removeTemplate(template) {
      const templateRegexString = Morebits.pageNameRegex(template);
      const linksRegex = new RegExp("\\{\\{(?:".concat(Morebits.namespaceRegex(10), ":)?\\s*").concat(templateRegexString, "\\s*[\\|(?:\\}\\})]"));
      const allTemplates = Morebits.string.splitWeightedByKeys(this.text, "{{", "}}", ["{{{", "}}}"]);
      var _iterator11 = _createForOfIteratorHelper(allTemplates), _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
          const allTemplate = _step11.value;
          if (linksRegex.test(allTemplate)) {
            this.text = this.text.replace(allTemplate, "");
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      return this;
    },
    /**
     * Smartly insert a tag atop page text but after specified templates,
     * such as hatnotes, short description, or deletion and protection templates.
     * Notably, does *not* insert a newline after the tag.
     *
     * @param {string} tag - The tag to be inserted.
     * @param {string|string[]} regex - Templates after which to insert tag,
     * given as either as a (regex-valid) string or an array to be joined by pipes.
     * @param {string} [flags=i] - Regex flags to apply.  `''` to provide no flags;
     * other falsey values will default to `i`.
     * @param {string|string[]} [preRegex] - Optional regex string or array to match
     * before any template matches (i.e. before `{{`), such as html comments.
     * @returns {Morebits.wikitext.page}
     */
    insertAfterTemplates(tag, regex, flags, preRegex) {
      if (tag === void 0) {
        throw new TypeError("No tag provided");
      }
      if (regex === void 0 || !regex.length) {
        throw new Error("No regex provided");
      } else if (Array.isArray(regex)) {
        regex = regex.join("|");
      }
      if (typeof flags !== "string") {
        flags = "i";
      }
      if (!preRegex || !preRegex.length) {
        preRegex = "";
      } else if (Array.isArray(preRegex)) {
        preRegex = preRegex.join("|");
      }
      this.text = this.text.replace(new RegExp(
        // leading whitespace
        // capture template(s)
        // Pre-template regex, such as leading html comments
        // begin template format
        // Template regex
        // end main template name, optionally with a number
        // Probably remove the (?:) though
        // template parameters
        // end template format
        // end capture
        // trailing whitespace
        "^\\s*(?:((?:\\s*".concat(
          // Pre-template regex, such as leading html comments
          preRegex,
          "|\\{\\{\\s*(?:"
        ).concat(
          // Template regex
          regex,
          ")\\d*\\s*(\\|(?:\\{\\{[^{}]*\\}\\}|[^{}])*)?\\}\\})+(?:\\s*\\n)?)\\s*)?"
        ),
        flags
      ), "$1".concat(tag));
      return this;
    },
    /**
     * Get the manipulated wikitext.
     *
     * @returns {string}
     */
    getText() {
      return this.text;
    }
  };
  Morebits.userspaceLogger = function(logPageName) {
    if (!logPageName) {
      throw new Error("no log page name specified");
    }
    this.initialText = "";
    this.headerLevel = 3;
    this.changeTags = "";
    this.log = function(logText, summaryText) {
      const def = $.Deferred();
      if (!logText) {
        return def.reject();
      }
      const page = new Morebits.wiki.page("User:".concat(mw.config.get("wgUserName"), "/").concat(logPageName), window.wgULS("将项目加入到用户空间日志", "將項目加入到使用者空間日誌"));
      page.load((pageobj) => {
        let text = pageobj.getPageText() || this.initialText;
        const date = new Morebits.date(pageobj.getLoadTime());
        if (!date.monthHeaderRegex().exec(text)) {
          text += "\n\n".concat(date.monthHeader(this.headerLevel));
        }
        pageobj.setPageText("".concat(text, "\n").concat(logText));
        pageobj.setEditSummary(summaryText);
        pageobj.setChangeTags(this.changeTags);
        pageobj.setCreateOption("recreate");
        pageobj.save(def.resolve, def.reject);
      });
      return def;
    };
  };
  Morebits.status = function(text, stat, type) {
    this.textRaw = text;
    this.text = Morebits.createHtml(text);
    this.type = type || "status";
    this.generate();
    if (stat) {
      this.update(stat, type);
    }
  };
  Morebits.status.init = (root) => {
    if (!(root instanceof Element)) {
      throw new TypeError("object not an instance of Element");
    }
    while (root.hasChildNodes()) {
      root.removeChild(root.firstChild);
    }
    Morebits.status.root = root;
    Morebits.status.errorEvent = null;
  };
  Morebits.status.root = null;
  Morebits.status.onError = (handler) => {
    if (typeof handler === "function") {
      Morebits.status.errorEvent = handler;
    } else {
      throw new TypeError("Morebits.status.onError: handler is not a function");
    }
  };
  Morebits.status.prototype = {
    stat: null,
    statRaw: null,
    text: null,
    textRaw: null,
    type: "status",
    target: null,
    node: null,
    linked: false,
    /** Add the status element node to the DOM. */
    link() {
      if (!this.linked && Morebits.status.root) {
        Morebits.status.root.appendChild(this.node);
        this.linked = true;
      }
    },
    /** Remove the status element node from the DOM. */
    unlink() {
      if (this.linked) {
        Morebits.status.root.removeChild(this.node);
        this.linked = false;
      }
    },
    /**
     * Update the status.
     *
     * @param {string} status - Part of status message after colon.
     * @param {string} type - 'status' (blue), 'info' (green), 'warn'
     * (red), or 'error' (bold red).
     */
    update(status, type) {
      this.statRaw = status;
      this.stat = Morebits.createHtml(status);
      if (type) {
        this.type = type;
        if (type === "error") {
          Morebits.wiki.numberOfActionsLeft = 1e3;
          if (Morebits.status.errorEvent) {
            Morebits.status.errorEvent();
          }
          console.error("[Morebits] ".concat(this.textRaw, ": ").concat(this.statRaw));
        }
      }
      this.render();
    },
    /** Produce the html for first part of the status message. */
    generate() {
      this.node = document.createElement("div");
      this.node.appendChild(document.createElement("span")).appendChild(this.text);
      this.node.appendChild(document.createElement("span")).appendChild(document.createTextNode(": "));
      this.target = this.node.appendChild(document.createElement("span"));
      this.target.appendChild(document.createTextNode(""));
    },
    /** Complete the html, for the second part of the status message. */
    render() {
      this.node.className = "morebits_status_".concat(this.type);
      while (this.target.hasChildNodes()) {
        this.target.removeChild(this.target.firstChild);
      }
      this.target.appendChild(this.stat);
      this.link();
    },
    status(status) {
      this.update(status, "status");
    },
    info(status) {
      this.update(status, "info");
    },
    warn(status) {
      this.update(status, "warn");
    },
    error(status) {
      this.update(status, "error");
    }
  };
  Morebits.status.status = (text, status) => {
    return new Morebits.status(text, status);
  };
  Morebits.status.info = (text, status) => {
    return new Morebits.status(text, status, "info");
  };
  Morebits.status.warn = (text, status) => {
    return new Morebits.status(text, status, "warn");
  };
  Morebits.status.error = (text, status) => {
    return new Morebits.status(text, status, "error");
  };
  Morebits.status.actionCompleted = (text) => {
    const node = document.createElement("div");
    node.appendChild(document.createElement("b")).appendChild(document.createTextNode(text));
    node.className = "morebits_status_info morebits_action_complete";
    if (Morebits.status.root) {
      Morebits.status.root.appendChild(node);
    }
  };
  Morebits.status.printUserText = (comments, message) => {
    const p = document.createElement("p");
    p.innerHTML = message;
    const div = document.createElement("div");
    div.className = "morebits-usertext";
    div.style.marginTop = "0";
    div.style.whiteSpace = "pre-wrap";
    div.textContent = comments;
    p.appendChild(div);
    Morebits.status.root.appendChild(p);
  };
  Morebits.htmlNode = (type, content, color) => {
    const node = document.createElement(type);
    if (color) {
      node.style.color = color;
    }
    node.appendChild(document.createTextNode(content));
    return node;
  };
  Morebits.checkboxShiftClickSupport = (jQuerySelector, jQueryContext) => {
    let lastCheckbox = null;
    const clickHandler = function clickHandler2(event) {
      const thisCb = this;
      if (event.shiftKey && lastCheckbox !== null) {
        const cbs = $(jQuerySelector, jQueryContext);
        let index = -1;
        let lastIndex = -1;
        let i;
        for (i = 0; i < cbs.length; i++) {
          if (cbs[i] === thisCb) {
            index = i;
            if (lastIndex > -1) {
              break;
            }
          }
          if (cbs[i] === lastCheckbox) {
            lastIndex = i;
            if (index > -1) {
              break;
            }
          }
        }
        if (index > -1 && lastIndex > -1) {
          const endState = thisCb.checked;
          let start;
          let finish;
          if (index < lastIndex) {
            start = index + 1;
            finish = lastIndex;
          } else {
            start = lastIndex;
            finish = index - 1;
          }
          for (i = start; i <= finish; i++) {
            if (cbs[i].checked !== endState) {
              cbs[i].click();
            }
          }
        }
      }
      lastCheckbox = thisCb;
      return true;
    };
    $(jQuerySelector, jQueryContext).on("click", clickHandler);
  };
  Morebits.batchOperation = function(currentAction) {
    const ctx = {
      // backing fields for public properties
      pageList: null,
      options: {
        chunkSize: 50,
        preserveIndividualStatusLines: false
      },
      // internal counters, etc.
      statusElement: new Morebits.status(currentAction || window.wgULS("执行批量操作", "執行批次操作")),
      worker: null,
      // function that executes for each item in pageList
      postFinish: null,
      // function that executes when the whole batch has been processed
      countStarted: 0,
      countFinished: 0,
      countFinishedSuccess: 0,
      currentChunkIndex: -1,
      pageChunks: [],
      running: false
    };
    this.getStatusElement = () => {
      return ctx.statusElement;
    };
    this.setPageList = (pageList) => {
      ctx.pageList = pageList;
    };
    this.setOption = (optionName, optionValue) => {
      ctx.options[optionName] = optionValue;
    };
    this.run = (worker, postFinish) => {
      if (ctx.running) {
        ctx.statusElement.error(window.wgULS("批量操作已在运行", "批次操作已在執行"));
        return;
      }
      ctx.running = true;
      ctx.worker = worker;
      ctx.postFinish = postFinish;
      ctx.countStarted = 0;
      ctx.countFinished = 0;
      ctx.countFinishedSuccess = 0;
      ctx.currentChunkIndex = -1;
      ctx.pageChunks = [];
      const total = ctx.pageList.length;
      if (!total) {
        ctx.statusElement.info(window.wgULS("没有指定页面", "沒有指定頁面"));
        ctx.running = false;
        if (ctx.postFinish) {
          ctx.postFinish();
        }
        return;
      }
      ctx.pageChunks = Morebits.array.chunk(ctx.pageList, ctx.options.chunkSize);
      Morebits.wiki.addCheckpoint();
      ctx.statusElement.status("0%");
      fnStartNewChunk();
    };
    this.workerSuccess = (arg) => {
      if (arg instanceof Morebits.wiki.api || arg instanceof Morebits.wiki.page) {
        const statelem = arg.getStatusElement();
        if (ctx.options.preserveIndividualStatusLines) {
          if (arg.getPageName || arg.pageName || arg.query && arg.query.title) {
            const pageName = arg.getPageName ? arg.getPageName() : arg.pageName || arg.query.title;
            statelem.info("完成（[[".concat(pageName, "]]）"));
          } else {
            statelem.info("完成");
          }
        } else {
          statelem.unlink();
        }
      } else if (typeof arg === "string" && ctx.options.preserveIndividualStatusLines) {
        new Morebits.status(arg, "完成（[[".concat(arg, "]]）"));
      }
      ctx.countFinishedSuccess++;
      fnDoneOne();
    };
    this.workerFailure = () => {
      fnDoneOne();
    };
    const thisProxy = this;
    const fnStartNewChunk = () => {
      const chunk = ctx.pageChunks[++ctx.currentChunkIndex];
      if (!chunk) {
        return;
      }
      ctx.countStarted += chunk.length;
      var _iterator12 = _createForOfIteratorHelper(chunk), _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
          const page = _step12.value;
          ctx.worker(page, thisProxy);
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    };
    const fnDoneOne = () => {
      ctx.countFinished++;
      const total = ctx.pageList.length;
      if (ctx.countFinished < total) {
        const progress = Math.round(100 * ctx.countFinished / total);
        ctx.statusElement.status("".concat(progress, "%"));
        if (ctx.countFinished >= ctx.countStarted - Math.max(ctx.options.chunkSize / 10, 2) && Math.floor(ctx.countFinished / ctx.options.chunkSize) > ctx.currentChunkIndex) {
          fnStartNewChunk();
        }
      } else if (ctx.countFinished === total) {
        const statusString = "完成（".concat(ctx.countFinishedSuccess, "/").concat(ctx.countFinished, "操作成功完成）");
        if (ctx.countFinishedSuccess < ctx.countFinished) {
          ctx.statusElement.warn(statusString);
        } else {
          ctx.statusElement.info(statusString);
        }
        if (ctx.postFinish) {
          ctx.postFinish();
        }
        Morebits.wiki.removeCheckpoint();
        ctx.running = false;
      } else {
        ctx.statusElement.warn("".concat(window.wgULS("完成（多执行了", "完成（多執行了") + (ctx.countFinished - total), "次）"));
        Morebits.wiki.removeCheckpoint();
        ctx.running = false;
      }
    };
  };
  Morebits.simpleWindow = function(width, height) {
    const content = document.createElement("div");
    this.content = content;
    content.className = "morebits-dialog-content";
    content.id = "morebits-dialog-content-".concat(Math.round(Math.random() * 1e15));
    this.height = height;
    $(this.content).dialog({
      autoOpen: false,
      buttons: {
        "Placeholder button": () => {
        }
      },
      dialogClass: "morebits-dialog",
      width: Math.min(Number.parseInt(window.innerWidth, 10), Number.parseInt(width || 800, 10)),
      // give jQuery the given height value (which represents the anticipated height of the dialog) here, so
      // it can position the dialog appropriately
      // the 20 pixels represents adjustment for the extra height of the jQuery dialog "chrome", compared
      // to that of the old SimpleWindow
      height: height + 20,
      close: (event) => {
        $(event.target).dialog("destroy").remove();
      },
      resizeStart() {
        [this.scrollbox] = $(this).find(".morebits-scrollbox");
        if (this.scrollbox) {
          this.scrollbox.style.maxHeight = "none";
        }
      },
      resizeStop() {
        this.scrollbox = null;
      },
      resize() {
        this.style.maxHeight = "";
        if (this.scrollbox) {
          this.scrollbox.style.width = "";
        }
      }
    });
    const $widget = $(this.content).dialog("widget");
    $widget.find("button").each((key, value) => {
      value.parentNode.removeChild(value);
    });
    const buttonspan = document.createElement("span");
    buttonspan.className = "morebits-dialog-buttons";
    const linksspan = document.createElement("span");
    linksspan.className = "morebits-dialog-footerlinks";
    $widget.find(".ui-dialog-buttonpane").append(buttonspan, linksspan);
    $widget.resizable("option", "alsoResize", "#".concat(this.content.id, " .morebits-scrollbox, #").concat(this.content.id));
  };
  Morebits.simpleWindow.prototype = {
    buttons: [],
    height: 600,
    hasFooterLinks: false,
    scriptName: null,
    /**
     * Focuses the dialog. This might work, or on the contrary, it might not.
     *
     * @returns {Morebits.simpleWindow}
     */
    focus() {
      $(this.content).dialog("moveToTop");
      return this;
    },
    /**
     * Closes the dialog. If this is set as an event handler, it will stop the event
     * from doing anything more.
     *
     * @param {event} [event]
     * @returns {Morebits.simpleWindow}
     */
    close(event) {
      if (event) {
        event.preventDefault();
      }
      $(this.content).dialog("close");
      return this;
    },
    /**
     * Shows the dialog. Calling display() on a dialog that has previously been closed
     * might work, but it is not guaranteed.
     *
     * @returns {Morebits.simpleWindow}
     */
    display() {
      if (this.scriptName) {
        const $widget = $(this.content).dialog("widget");
        $widget.find(".morebits-dialog-scriptname").remove();
        const scriptnamespan = document.createElement("span");
        scriptnamespan.className = "morebits-dialog-scriptname";
        scriptnamespan.textContent = "".concat(this.scriptName, " · ");
        $widget.find(".ui-dialog-title").prepend(scriptnamespan);
      }
      const dialog = $(this.content).dialog("open");
      if (window.setupTooltips && window.pg && window.pg.re && window.pg.re.diff) {
        dialog.parent()[0].ranSetupTooltipsAlready = false;
        window.setupTooltips(dialog.parent()[0]);
      }
      this.setHeight(this.height);
      return this;
    },
    /**
     * Sets the dialog title.
     *
     * @param {string} title
     * @returns {Morebits.simpleWindow}
     */
    setTitle(title) {
      $(this.content).dialog("option", "title", title);
      return this;
    },
    /**
     * Sets the script name, appearing as a prefix to the title to help users determine which
     * user script is producing which dialog. For instance, Twinkle modules set this to "Twinkle".
     *
     * @param {string} name
     * @returns {Morebits.simpleWindow}
     */
    setScriptName(name) {
      this.scriptName = name;
      return this;
    },
    /**
     * Sets the dialog width.
     *
     * @param {number} width
     * @returns {Morebits.simpleWindow}
     */
    setWidth(width) {
      $(this.content).dialog("option", "width", width);
      return this;
    },
    /**
     * Sets the dialog's maximum height. The dialog will auto-size to fit its contents,
     * but the content area will grow no larger than the height given here.
     *
     * @param {number} height
     * @returns {Morebits.simpleWindow}
     */
    setHeight(height) {
      this.height = height;
      if (Number.parseInt(getComputedStyle($(this.content).dialog("widget")[0], null).height, 10) > window.innerHeight) {
        $(this.content).dialog("option", "height", window.innerHeight - 2).dialog("option", "position", "top");
      } else {
        $(this.content).dialog("option", "height", "auto");
      }
      $(this.content).dialog("widget").find(".morebits-dialog-content")[0].style.maxHeight = "".concat(Number.parseInt(this.height - 30, 10), "px");
      return this;
    },
    /**
     * Sets the content of the dialog to the given element node, usually from rendering
     * a {@link Morebits.quickForm}.
     * Re-enumerates the footer buttons, but leaves the footer links as they are.
     * Be sure to call this at least once before the dialog is displayed...
     *
     * @param {HTMLElement} content
     * @returns {Morebits.simpleWindow}
     */
    setContent(content) {
      this.purgeContent();
      this.addContent(content);
      return this;
    },
    /**
     * Adds the given element node to the dialog content.
     *
     * @param {HTMLElement} content
     * @returns {Morebits.simpleWindow}
     */
    addContent(content) {
      this.content.appendChild(content);
      const self2 = this;
      $(this.content).find('input[type="submit"], button[type="submit"]').each((key, value) => {
        value.style.display = "none";
        const button = document.createElement("button");
        if (value.hasAttribute("value")) {
          button.textContent = value.getAttribute("value");
        } else if (value.textContent) {
          button.textContent = value.textContent;
        } else {
          button.textContent = "提交";
        }
        button.className = value.className || "submitButtonProxy";
        button.addEventListener("click", () => {
          value.click();
        }, false);
        self2.buttons.push(button);
      });
      if (this.buttons.length > 0) {
        $(this.content).dialog("widget").find(".morebits-dialog-buttons").empty().append(this.buttons)[0].removeAttribute("data-empty");
      } else {
        $(this.content).dialog("widget").find(".morebits-dialog-buttons")[0].setAttribute("data-empty", "data-empty");
      }
      return this;
    },
    /**
     * Removes all contents from the dialog, barring any footer links.
     *
     * @returns {Morebits.simpleWindow}
     */
    purgeContent() {
      this.buttons = [];
      $(this.content).dialog("widget").find(".morebits-dialog-buttons").empty();
      while (this.content.hasChildNodes()) {
        this.content.removeChild(this.content.firstChild);
      }
      return this;
    },
    /**
     * Adds a link in the bottom-right corner of the dialog.
     * This can be used to provide help or policy links.
     * For example, Twinkle's CSD module adds a link to the CSD policy page,
     * as well as a link to Twinkle's documentation.
     *
     * @param {string} text - Display text.
     * @param {string} wikiPage - Link target.
     * @param {boolean} [prep=false] - Set true to prepend rather than append.
     * @returns {Morebits.simpleWindow}
     */
    addFooterLink(text, wikiPage, prep) {
      const $footerlinks = $(this.content).dialog("widget").find(".morebits-dialog-footerlinks");
      if (this.hasFooterLinks) {
        const bullet = document.createElement("span");
        bullet.textContent = " • ";
        if (prep) {
          $footerlinks.prepend(bullet);
        } else {
          $footerlinks.append(bullet);
        }
      }
      const link = document.createElement("a");
      link.setAttribute("href", mw.util.getUrl(wikiPage));
      link.setAttribute("title", wikiPage);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      link.textContent = text;
      if (prep) {
        $footerlinks.prepend(link);
      } else {
        $footerlinks.append(link);
      }
      this.hasFooterLinks = true;
      return this;
    },
    /**
     * Sets whether the window should be modal or not. Modal dialogs create
     * an overlay below the dialog but above other page elements. This
     * must be used (if necessary) before calling display().
     *
     * @param {boolean} [modal=false] - If set to true, other items on the
     * page will be disabled, i.e., cannot be interacted with.
     * @returns {Morebits.simpleWindow}
     */
    setModality(modal) {
      $(this.content).dialog("option", "modal", modal);
      return this;
    }
  };
  Morebits.simpleWindow.setButtonsEnabled = (enabled) => {
    const $body = $("body");
    $body.find(".morebits-dialog-buttons button").prop("disabled", !enabled);
  };
})(jQuery);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgInNyYy9tb3JlYml0cy9tb3JlYml0cy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgY2hlY2sodHlwZW9mIHRoaXMgPT0gJ29iamVjdCcgJiYgdGhpcykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG4gIHZhciB0ZXN0ID0gKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSkuYmluZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xudmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICEkT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT09ICdTdHJpbmcnID8gc3BsaXQoaXQsICcnKSA6ICRPYmplY3QoaXQpO1xufSA6ICRPYmplY3Q7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gd2UgY2FuJ3QgdXNlIGp1c3QgYGl0ID09IG51bGxgIHNpbmNlIG9mIGBkb2N1bWVudC5hbGxgIHNwZWNpYWwgY2FzZVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdC1hZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gbnVsbCB8fCBpdCA9PT0gdW5kZWZpbmVkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3RcbnZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cbi8vIGBJc0NhbGxhYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdHlwZW9mLXVuZGVmaW5lZCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgZG9jdW1lbnRBbGwgPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRBbGwgIT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbicgfHwgYXJndW1lbnQgPT09IGRvY3VtZW50QWxsO1xufSA6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbic7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxbbmFtZXNwYWNlXSkgOiBnbG9iYWxbbmFtZXNwYWNlXSAmJiBnbG9iYWxbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgbmF2aWdhdG9yICE9ICd1bmRlZmluZWQnICYmIFN0cmluZyhuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAnJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWwuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgJiYgIVN5bWJvbC5zaGFtXG4gICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbCwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXNbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxuKHN0b3JlLnZlcnNpb25zIHx8IChzdG9yZS52ZXJzaW9ucyA9IFtdKSkucHVzaCh7XG4gIHZlcnNpb246ICczLjM3LjEnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTQtMjAyNCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KScsXG4gIGxpY2Vuc2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9ibG9iL3YzLjM3LjEvTElDRU5TRScsXG4gIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzJ1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgfHwge30pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdICYmIGdsb2JhbFtUQVJHRVRdLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLmRvbnRDYWxsR2V0U2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1pc2FycmF5IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XG4gIHJldHVybiBjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ0FycmF5Jztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBTYWZhcmkgPCAxMyBkb2VzIG5vdCB0aHJvdyBhbiBlcnJvciBpbiB0aGlzIGNhc2VcbnZhciBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPSBERVNDUklQVE9SUyAmJiAhZnVuY3Rpb24gKCkge1xuICAvLyBtYWtlcyBubyBzZW5zZSB3aXRob3V0IHByb3BlciBzdHJpY3QgbW9kZSBzdXBwb3J0XG4gIGlmICh0aGlzICE9PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLmxlbmd0aCA9IDE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID8gZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICBpZiAoaXNBcnJheShPKSAmJiAhZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sICdsZW5ndGgnKS53cml0YWJsZSkge1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKCdDYW5ub3Qgc2V0IHJlYWQgb25seSAubGVuZ3RoJyk7XG4gIH0gcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufSA6IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyAkVHlwZUVycm9yKCdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIHNldEFycmF5TGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNldC1sZW5ndGgnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBJTkNPUlJFQ1RfVE9fTEVOR1RIID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gW10ucHVzaC5jYWxsKHsgbGVuZ3RoOiAweDEwMDAwMDAwMCB9LCAxKSAhPT0gNDI5NDk2NzI5Nztcbn0pO1xuXG4vLyBWOCA8PSAxMjEgYW5kIFNhZmFyaSA8PSAxNS40OyBGRiA8IDIzIHRocm93cyBJbnRlcm5hbEVycm9yXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0xMjY4MVxudmFyIHByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5wdXNoKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59O1xuXG52YXIgRk9SQ0VEID0gSU5DT1JSRUNUX1RPX0xFTkdUSCB8fCAhcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoKCk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUucHVzaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5wdXNoXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgcHVzaDogZnVuY3Rpb24gcHVzaChpdGVtKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGFyZ0NvdW50ID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobGVuICsgYXJnQ291bnQpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJnQ291bnQ7IGkrKykge1xuICAgICAgT1tsZW5dID0gYXJndW1lbnRzW2ldO1xuICAgICAgbGVuKys7XG4gICAgfVxuICAgIHNldEFycmF5TGVuZ3RoKE8sIGxlbik7XG4gICAgcmV0dXJuIGxlbjtcbiAgfVxufSk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbi8qISBUd2lua2xlLmpzIC0gbW9yZWJpdHMuanMgKi9cblxuLyoqXG4gKiBBIGxpYnJhcnkgZnVsbCBvZiBsb3RzIG9mIGdvb2RuZXNzIGZvciB1c2VyIHNjcmlwdHMgb24gTWVkaWFXaWtpIHdpa2lzLlxuICpcbiAqIFRoZSBoaWdobGlnaHRzIGluY2x1ZGU6XG4gKiAtIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gLSBtYWtlIGNhbGxzIHRvIHRoZSBNZWRpYVdpa2kgQVBJXG4gKiAtIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V9IC0gbW9kaWZ5IHBhZ2VzIG9uIHRoZSB3aWtpIChlZGl0LCByZXZlcnQsIGRlbGV0ZSwgZXRjLilcbiAqIC0ge0BsaW5rIE1vcmViaXRzLmRhdGV9IC0gZW5oYW5jZWQgZGF0ZSBvYmplY3QgcHJvY2Vzc2luZywgc29ydCBvZiBhIGxpZ2h0IG1vbWVudC5qc1xuICogLSB7QGxpbmsgTW9yZWJpdHMucXVpY2tGb3JtfSAtIGdlbmVyYXRlIHF1aWNrIEhUTUwgZm9ybXMgb24gdGhlIGZseVxuICogLSB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSAtIGEgd3JhcHBlciBmb3IgalF1ZXJ5IFVJIERpYWxvZyB3aXRoIGEgY3VzdG9tIGxvb2sgYW5kIGV4dHJhIGZlYXR1cmVzXG4gKiAtIHtAbGluayBNb3JlYml0cy5zdGF0dXN9IC0gYSByb3VnaC1hbmQtcmVhZHkgc3RhdHVzIG1lc3NhZ2UgZGlzcGxheWVyLCB1c2VkIGJ5IHRoZSBNb3JlYml0cy53aWtpIGNsYXNzZXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLndpa2l0ZXh0fSAtIHV0aWxpdGllcyBmb3IgZGVhbGluZyB3aXRoIHdpa2l0ZXh0XG4gKiAtIHtAbGluayBNb3JlYml0cy5zdHJpbmd9IC0gdXRpbGl0aWVzIGZvciBtYW5pcHVsYXRpbmcgc3RyaW5nc1xuICogLSB7QGxpbmsgTW9yZWJpdHMuYXJyYXl9IC0gdXRpbGl0aWVzIGZvciBtYW5pcHVsYXRpbmcgYXJyYXlzXG4gKiAtIHtAbGluayBNb3JlYml0cy5pcH0gLSB1dGlsaXRpZXMgdG8gaGVscCBwcm9jZXNzIElQIGFkZHJlc3Nlc1xuICpcbiAqIERlcGVuZGVuY2llczpcbiAqIC0gVGhlIHdob2xlIHRoaW5nIHJlbGllcyBvbiBqUXVlcnkuICBCdXQgbW9zdCB3aWtpcyBzaG91bGQgcHJvdmlkZSB0aGlzIGJ5IGRlZmF1bHQuXG4gKiAtIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19LCB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSwgYW5kIHtAbGluayBNb3JlYml0cy5zdGF0dXN9IHJlbHkgb24gdGhlIFwibW9yZWJpdHMuY3NzXCIgZmlsZSBmb3IgdGhlaXIgc3R5bGluZy5cbiAqIC0ge0BsaW5rIE1vcmViaXRzLnNpbXBsZVdpbmRvd30gYW5kIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19IHRvb2x0aXBzIHJlbHkgb24galF1ZXJ5IFVJIERpYWxvZyAoZnJvbSBSZXNvdXJjZUxvYWRlciBtb2R1bGUgbmFtZSAnanF1ZXJ5LnVpJykuXG4gKiAtIFRvIGNyZWF0ZSBhIGdhZGdldCBiYXNlZCBvbiBtb3JlYml0cy5qcywgdXNlIHRoaXMgc3ludGF4IGluIE1lZGlhV2lraTpHYWRnZXRzLWRlZmluaXRpb246XG4gKiAgICAgLSBgKkdhZGdldE5hbWVbUmVzb3VyY2VMb2FkZXJ8ZGVwZW5kZW5jaWVzPW1lZGlhd2lraS51c2VyLG1lZGlhd2lraS51dGlsLG1lZGlhd2lraS5UaXRsZSxqcXVlcnkudWldfG1vcmViaXRzLmpzfG1vcmViaXRzLmNzc3xHYWRnZXROYW1lLmpzYFxuICogLSBBbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIGNvbmZpZ3VyZSBtb3JlYml0cy5qcyBhcyBhIGhpZGRlbiBnYWRnZXQgaW4gTWVkaWFXaWtpOkdhZGdldHMtZGVmaW5pdGlvbjpcbiAqICAgICAtIGAqbW9yZWJpdHNbUmVzb3VyY2VMb2FkZXJ8ZGVwZW5kZW5jaWVzPW1lZGlhd2lraS51c2VyLG1lZGlhd2lraS51dGlsLG1lZGlhd2lraS5UaXRsZSxqcXVlcnkudWl8aGlkZGVuXXxtb3JlYml0cy5qc3xtb3JlYml0cy5jc3NgXG4gKiAgICAgYW5kIHRoZW4gbG9hZCBleHQuZ2FkZ2V0Lm1vcmViaXRzIGFzIG9uZSBvZiB0aGUgZGVwZW5kZW5jaWVzIGZvciB0aGUgbmV3IGdhZGdldC5cbiAqXG4gKiBBbGwgdGhlIHN0dWZmIGhlcmUgd29ya3Mgb24gYWxsIGJyb3dzZXJzIGZvciB3aGljaCBNZWRpYVdpa2kgcHJvdmlkZXMgSmF2YVNjcmlwdCBzdXBwb3J0LlxuICpcbiAqIFRoaXMgbGlicmFyeSBpcyBtYWludGFpbmVkIGJ5IHRoZSBtYWludGFpbmVycyBvZiBUd2lua2xlLlxuICogRm9yIHF1ZXJpZXMsIHN1Z2dlc3Rpb25zLCBoZWxwLCBldGMuLCBoZWFkIHRvIFtIZWxwOlR3aW5rbGVdKGh0dHBzOi8veW91c2hvdS53aWtpL3dpa2kvSDpUVykuXG4gKiBUaGUgbGF0ZXN0IGRldmVsb3BtZW50IHNvdXJjZSBpcyBhdmFpbGFibGUgYXQge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS93aWtpbWVkaWEtZ2FkZ2V0cy90d2lua2xlL2Jsb2IvbWFzdGVyL21vcmViaXRzLmpzfEdpdEh1Yn0uXG4gKlxuICogQHBhcmFtIHtKUXVlcnl9ICRcbiAqIEBuYW1lc3BhY2UgTW9yZWJpdHNcbiAqL1xuaW1wb3J0ICcuL21vcmViaXRzLmxlc3MnO1xuXG4oZnVuY3Rpb24gbW9yZWJpdHMoJCkge1xuXHQvLyBXcmFwIGVudGlyZSBmaWxlIHdpdGggYW5vbnltb3VzIGZ1bmN0aW9uXG5cdC8qKiBAbGVuZHMgTW9yZWJpdHMgKi9cblx0Y29uc3QgTW9yZWJpdHMgPSB7fTtcblx0d2luZG93Lk1vcmViaXRzID0gTW9yZWJpdHM7IC8vIGFsbG93IGdsb2JhbCBhY2Nlc3Ncblx0Ly8gTm8gTW9yZWJpdHMuaTE4biBhdCB0aGlzIHRpbWVcblx0LyoqXG5cdCAqIFdpa2ktc3BlY2lmaWMgY29uZmlndXJhdGlvbnMgZm9yIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy5sMTBuID0ge1xuXHRcdC8qKlxuXHRcdCAqIExvY2FsIGFsaWFzZXMgZm9yIFwicmVkaXJlY3RcIiBtYWdpYyB3b3JkLlxuXHRcdCAqIENoZWNrIHVzaW5nIGFwaS5waHA/YWN0aW9uPXF1ZXJ5JmZvcm1hdD1qc29uJm1ldGE9c2l0ZWluZm8mZm9ybWF0dmVyc2lvbj0yJnNpcHJvcD1tYWdpY3dvcmRzXG5cdFx0ICovXG5cdFx0cmVkaXJlY3RUYWdBbGlhc2VzOiBbJyNSRURJUkVDVCcsICcj6YeN5a6a5ZCRJ10sXG5cdFx0LyoqXG5cdFx0ICogVGFrZXMgYSBzdHJpbmcgYXMgYXJndW1lbnQgYW5kIGNoZWNrcyBpZiBpdCBpcyBhIHRpbWVzdGFtcCBvciBub3Rcblx0XHQgKiBJZiBub3QsIGl0IHJldHVybnMgbnVsbC4gSWYgeWVzLCBpdCByZXR1cm5zIGFuIGFycmF5IG9mIGludGVnZXJzXG5cdFx0ICogaW4gdGhlIGZvcm1hdCBbeWVhciwgbW9udGgsIGRhdGUsIGhvdXIsIG1pbnV0ZSwgc2Vjb25kXVxuXHRcdCAqIHdoaWNoIGNhbiBiZSBwYXNzZWQgdG8gRGF0ZS5VVEMoKVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJbXSB8IG51bGx9XG5cdFx0ICovXG5cdFx0c2lnbmF0dXJlVGltZXN0YW1wRm9ybWF0OiAoc3RyKSA9PiB7XG5cdFx0XHRjb25zdCByZ3hVVEMgPSAvKFxcZHs0fSnlubQoXFxkezEsMn0p5pyIKFxcZHsxLDJ9KeaXpSBcXCguXFwpIChcXGR7Mn0pOihcXGR7Mn0pIFxcKFVUQ1xcKS87IC8vIFlZWVnlubRNb250aOaciERE5pelICh3KSBISDptbSAoVVRDKVxuXHRcdFx0Y29uc3Qgcmd4Q1NUID0gLyhcXGR7NH0p5bm0KFxcZHsxLDJ9KeaciChcXGR7MSwyfSnml6UgXFwoLlxcKSAoXFxkezJ9KTooXFxkezJ9KSBcXChDU1RcXCkvOyAvLyBZWVlZ5bm0TW9udGjmnIhEROaXpSAodykgSEg6bW0gKENTVClcblx0XHRcdGNvbnN0IG1hdGNoID0gcmd4VVRDLmV4ZWMoc3RyKSB8fCByZ3hDU1QuZXhlYyhzdHIpO1xuXHRcdFx0Y29uc3QgbWF0Y2hDU1QgPSByZ3hDU1QuZXhlYyhzdHIpO1xuXHRcdFx0aWYgKCFtYXRjaCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG1vbnRoID0gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRocy5pbmRleE9mKG1hdGNoWzRdKTtcblx0XHRcdGlmIChtb250aCA9PT0gLTEpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHQvLyAuLi4uLiB5ZWFyIC4uLi4gbW9udGggLi4uIGRhdGUgLi4uLiBob3VyIC4uLiBtaW51dGVcblx0XHRcdHJldHVybiBtYXRjaENTVFxuXHRcdFx0XHQ/IFttYXRjaFsxXSwgbWF0Y2hbMl0gLSAxLCBtYXRjaFszXSwgbWF0Y2hbNF0gLSA4LCBtYXRjaFs1XV1cblx0XHRcdFx0OiBbbWF0Y2hbMV0sIG1hdGNoWzJdIC0gMSwgbWF0Y2hbM10sIG1hdGNoWzRdLCBtYXRjaFs1XV07XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIFNpbXBsZSBoZWxwZXIgZnVuY3Rpb24gdG8gc2VlIHdoYXQgZ3JvdXBzIGEgdXNlciBtaWdodCBiZWxvbmcuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBncm91cCAtIGUuZy4gYHN5c29wYCwgYGF1dG9jb25maXJtZWRgLCBldGMuXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0TW9yZWJpdHMudXNlcklzSW5Hcm91cCA9IChncm91cCkgPT4ge1xuXHRcdHJldHVybiBtdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKS5pbmNsdWRlcyhncm91cCk7XG5cdH07XG5cdC8qKlxuXHQgKiBIYXJkY29kZXMgd2hldGhlciB0aGUgdXNlciBpcyBhIHN5c29wLCB1c2VkIGEgbG90LlxuXHQgKlxuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdE1vcmViaXRzLnVzZXJJc1N5c29wID0gTW9yZWJpdHMudXNlcklzSW5Hcm91cCgnc3lzb3AnKSB8fCBNb3JlYml0cy51c2VySXNJbkdyb3VwKCdzdGV3YXJkJyk7XG5cdC8qKlxuXHQgKiBEZXByZWNhdGVkIGFzIG9mIEZlYnJ1YXJ5IDIwMjEsIHVzZSB7QGxpbmsgTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2fS5cblx0ICpcblx0ICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjZ9LlxuXHQgKiBDb252ZXJ0cyBhbiBJUHY2IGFkZHJlc3MgdG8gdGhlIGNhbm9uaWNhbCBmb3JtIHN0b3JlZCBhbmQgdXNlZCBieSBNZWRpYVdpa2kuXG5cdCAqIEphdmFTY3JpcHQgdHJhbnNsYXRpb24gb2YgdGhlIHtAbGluayBodHRwczovL2dlcnJpdC53aWtpbWVkaWEub3JnL3IvcGx1Z2lucy9naXRpbGVzL21lZGlhd2lraS9jb3JlLysvOGViNmFjM2U4NGVhMzMxMmQzOTFjYTk2YzEyYzQ5ZTNhZDA3NTNiYi9pbmNsdWRlcy91dGlscy9JUC5waHAjMTMxfGBJUDo6c2FuaXRpemVJUCgpYH1cblx0ICogZnVuY3Rpb24gZnJvbSB0aGUgSVBVdGlscyBsaWJyYXJ5LiAgQWRkcmVzc2VzIGFyZSB2ZXJib3NlLCB1cHBlcmNhc2UsXG5cdCAqIG5vcm1hbGl6ZWQsIGFuZCBleHBhbmRlZCB0byA4IHdvcmRzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYWRkcmVzcyAtIFRoZSBJUHY2IGFkZHJlc3MsIHdpdGggb3Igd2l0aG91dCBDSURSLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0TW9yZWJpdHMuc2FuaXRpemVJUHY2ID0gKGFkZHJlc3MpID0+IHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHQnTk9URTogTW9yZWJpdHMuc2FuaXRpemVJUHY2IHdhcyByZW5hbWVkIHRvIE1vcmViaXRzLmlwLnNhbml0aXplSVB2NiBpbiBGZWJydWFyeSAyMDIxLCBwbGVhc2UgdXNlIHRoYXQgaW5zdGVhZCdcblx0XHQpO1xuXHRcdHJldHVybiBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjYoYWRkcmVzcyk7XG5cdH07XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgcGFnZSBpcyBhIHJlZGlyZWN0IG9yIHNvZnQgcmVkaXJlY3QuIEZhaWxzXG5cdCAqIHRvIGRldGVjdCBzb2Z0IHJlZGlyZWN0cyBvbiBlZGl0LCBoaXN0b3J5LCBldGMuIHBhZ2VzLiAgV2lsbCBhdHRlbXB0IHRvXG5cdCAqIGRldGVjdCBNb2R1bGU6UmZELCB3aXRoIHRoZSBzYW1lIGZhaWx1cmUgcG9pbnRzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0ID0gKCkgPT4ge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdHJldHVybiAhIShcblx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnSXNSZWRpcmVjdCcpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29mdHJlZGlyZWN0JykgfHxcblx0XHRcdCRib2R5LmZpbmQoJy5ib3gtUmZEJykubGVuZ3RoIHx8XG5cdFx0XHQkYm9keS5maW5kKCcuYm94LVJlZGlyZWN0X2NhdGVnb3J5X3NoZWxsJykubGVuZ3RoXG5cdFx0KTtcblx0fTtcblx0LyoqXG5cdCAqIFN0b3JlcyBhIG5vcm1hbGl6ZWQgKHVuZGVyc2NvcmVzIGNvbnZlcnRlZCB0byBzcGFjZXMpIHZlcnNpb24gb2YgdGhlXG5cdCAqIGB3Z1BhZ2VOYW1lYCB2YXJpYWJsZS5cblx0ICpcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdE1vcmViaXRzLnBhZ2VOYW1lTm9ybSA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBzdHJpbmcgZm9yIHVzZSBpbiByZWdleCBtYXRjaGluZyBhIHBhZ2UgbmFtZS4gIEFjY291bnRzIGZvclxuXHQgKiBsZWFkaW5nIGNoYXJhY3RlcidzIGNhcGl0YWxpemF0aW9uLCB1bmRlcnNjb3JlcyBhcyBzcGFjZXMsIGFuZCBzcGVjaWFsXG5cdCAqIGNoYXJhY3RlcnMgYmVpbmcgZXNjYXBlZC4gIFNlZSBhbHNvIHtAbGluayBNb3JlYml0cy5uYW1lc3BhY2VSZWdleH0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlTmFtZSAtIFBhZ2UgbmFtZSB3aXRob3V0IG5hbWVzcGFjZS5cblx0ICogQHJldHVybnMge3N0cmluZ30gLSBGb3IgYSBwYWdlIG5hbWUgYEZvbyBiYXJgLCByZXR1cm5zIHRoZSBzdHJpbmcgYFtGZl1vb1tfIF1iYXJgLlxuXHQgKi9cblx0TW9yZWJpdHMucGFnZU5hbWVSZWdleCA9IChwYWdlTmFtZSkgPT4ge1xuXHRcdGlmIChwYWdlTmFtZSA9PT0gJycpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0Y29uc3QgW2ZpcnN0Q2hhcl0gPSBwYWdlTmFtZTtcblx0XHRjb25zdCByZW1haW5kZXIgPSBNb3JlYml0cy5zdHJpbmcuZXNjYXBlUmVnRXhwKHBhZ2VOYW1lLnNsaWNlKDEpKTtcblx0XHRpZiAobXcuVGl0bGUucGhwQ2hhclRvVXBwZXIoZmlyc3RDaGFyKSAhPT0gZmlyc3RDaGFyLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdHJldHVybiBgWyR7bXcuVGl0bGUucGhwQ2hhclRvVXBwZXIoZmlyc3RDaGFyKX0ke2ZpcnN0Q2hhci50b0xvd2VyQ2FzZSgpfV0ke3JlbWFpbmRlcn1gO1xuXHRcdH1cblx0XHRyZXR1cm4gTW9yZWJpdHMuc3RyaW5nLmVzY2FwZVJlZ0V4cChmaXJzdENoYXIpICsgcmVtYWluZGVyO1xuXHR9O1xuXHQvKipcblx0ICogQ29udmVydHMgc3RyaW5nIG9yIGFycmF5IG9mIERPTSBub2RlcyBpbnRvIGFuIEhUTUwgZnJhZ21lbnQuXG5cdCAqIFdpa2lsaW5rIHN5bnRheCAoYFtbLi4uXV1gKSBpcyB0cmFuc2Zvcm1lZCBpbnRvIEhUTUwgYW5jaG9yLlxuXHQgKiBVc2VkIGluIE1vcmViaXRzLnF1aWNrRm9ybSBhbmQgTW9yZWJpdHMuc3RhdHVzXG5cdCAqXG5cdCAqIEBpbnRlcm5hbFxuXHQgKiBAcGFyYW0ge3N0cmluZ3xOb2RlfChzdHJpbmd8Tm9kZSlbXX0gaW5wdXRcblx0ICogQHJldHVybnMge0RvY3VtZW50RnJhZ21lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5jcmVhdGVIdG1sID0gKGlucHV0KSA9PiB7XG5cdFx0Y29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0aWYgKCFpbnB1dCkge1xuXHRcdFx0cmV0dXJuIGZyYWdtZW50O1xuXHRcdH1cblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG5cdFx0XHRpbnB1dCA9IFtpbnB1dF07XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBpbnB1dCkge1xuXHRcdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG5cdFx0XHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChjb25zdCBub2RlIG9mICQucGFyc2VIVE1MKE1vcmViaXRzLmNyZWF0ZUh0bWwucmVuZGVyV2lraWxpbmtzKGVsZW1lbnQpKSkge1xuXHRcdFx0XHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmcmFnbWVudDtcblx0fTtcblx0LyoqXG5cdCAqIENvbnZlcnRzIHdpa2lsaW5rcyB0byBIVE1MIGFuY2hvciB0YWdzLlxuXHQgKlxuXHQgKiBAcGFyYW0gdGV4dFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdE1vcmViaXRzLmNyZWF0ZUh0bWwucmVuZGVyV2lraWxpbmtzID0gKHRleHQpID0+IHtcblx0XHRjb25zdCB1YiA9IG5ldyBNb3JlYml0cy51bmJpbmRlcih0ZXh0KTtcblx0XHQvLyBEb24ndCBjb252ZXJ0IHdpa2lsaW5rcyB3aXRoaW4gY29kZSB0YWdzIGFzIHRoZXkncmUgdXNlZCBmb3IgZGlzcGxheWluZyB3aWtpLWNvZGVcblx0XHR1Yi51bmJpbmQoJzxjb2RlPicsICc8L2NvZGU+Jyk7XG5cdFx0dWIuY29udGVudCA9IHViLmNvbnRlbnQucmVwbGFjZSgvXFxbXFxbOj8oPzooW158XFxdXSs/KVxcfCk/KFteXFxdfF0rPylcXF1cXF0vZywgKF8sIHRhcmdldCwgdGV4dF8pID0+IHtcblx0XHRcdGlmICghdGFyZ2V0KSB7XG5cdFx0XHRcdHRhcmdldCA9IHRleHRfO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke213LnV0aWwuZ2V0VXJsKHRhcmdldCl9XCIgdGl0bGU9XCIke3RhcmdldC5yZXBsYWNlKFxuXHRcdFx0XHQvXCIvZyxcblx0XHRcdFx0JyYjMzQ7J1xuXHRcdFx0KX1cIj4ke3RleHRffTwvYT5gO1xuXHRcdH0pO1xuXHRcdHJldHVybiB1Yi5yZWJpbmQoKTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIHN0cmluZyBmb3IgdXNlIGluIHJlZ2V4IG1hdGNoaW5nIGFsbCBuYW1lc3BhY2UgYWxpYXNlcywgcmVnYXJkbGVzc1xuXHQgKiBvZiB0aGUgY2FwaXRhbGl6YXRpb24gYW5kIHVuZGVyc2NvcmVzL3NwYWNlcy4gIERvZXNuJ3QgaW5jbHVkZSB0aGUgb3B0aW9uYWxcblx0ICogbGVhZGluZyBgOmAsIGJ1dCBpZiB0aGVyZSdzIG1vcmUgdGhhbiBvbmUgaXRlbSwgd3JhcHMgdGhlIGxpc3QgaW4gYVxuXHQgKiBub24tY2FwdHVyaW5nIGdyb3VwLiAgVGhpcyBtZWFucyB5b3UgY2FuIGRvIGBNb3JlYml0cy5uYW1lc3BhY2VSZWdleChbNF0pICtcblx0ICogJzonICsgTW9yZWJpdHMucGFnZU5hbWVSZWdleCgnVHdpbmtsZScpYCB0byBtYXRjaCBhIGZ1bGwgcGFnZS4gIFVzZXNcblx0ICoge0BsaW5rIE1vcmViaXRzLnBhZ2VOYW1lUmVnZXh9LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcltdfSBuYW1lc3BhY2VzIC0gQXJyYXkgb2YgbmFtZXNwYWNlIG51bWJlcnMuICBVbnVzZWQvaW52YWxpZFxuXHQgKiBuYW1lc3BhY2UgbnVtYmVycyBhcmUgc2lsZW50bHkgZGlzY2FyZGVkLlxuXHQgKiBAZXhhbXBsZVxuXHQgKiAvLyByZXR1cm5zICcoPzpbRmZdW0lpXVtMbF1bRWVdfFtJaV1bTW1dW0FhXVtHZ11bRWVdKSdcblx0ICogTW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoWzZdKVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSAtIFJlZ2V4LXN1aXRhYmxlIHN0cmluZyBvZiBhbGwgbmFtZXNwYWNlIGFsaWFzZXMuXG5cdCAqL1xuXHRNb3JlYml0cy5uYW1lc3BhY2VSZWdleCA9IChuYW1lc3BhY2VzKSA9PiB7XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KG5hbWVzcGFjZXMpKSB7XG5cdFx0XHRuYW1lc3BhY2VzID0gW25hbWVzcGFjZXNdO1xuXHRcdH1cblx0XHRjb25zdCBhbGlhc2VzID0gW107XG5cdFx0bGV0IHJlZ2V4O1xuXHRcdGZvciAoY29uc3QgW25hbWUsIG51bWJlcl0gb2YgT2JqZWN0LmVudHJpZXMobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VJZHMnKSkpIHtcblx0XHRcdGlmIChuYW1lc3BhY2VzLmluY2x1ZGVzKG51bWJlcikpIHtcblx0XHRcdFx0Ly8gTmFtZXNwYWNlcyBhcmUgY29tcGxldGVseSBhZ25vc3RpYyBhcyB0byBjYXNlLFxuXHRcdFx0XHQvLyBhbmQgYSByZWdleCBzdHJpbmcgaXMgbW9yZSB1c2VmdWwvY29tcGF0aWJsZSB0aGFuIGEgUmVnRXhwIG9iamVjdCxcblx0XHRcdFx0Ly8gc28gd2UgYWNjZXB0IGFueSBjYXNpbmcgZm9yIGFueSBsZXR0ZXIuXG5cdFx0XHRcdGFsaWFzZXMucHVzaChcblx0XHRcdFx0XHRbLi4ubmFtZV1cblx0XHRcdFx0XHRcdC5tYXAoKGNoYXIpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgoY2hhcik7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmpvaW4oJycpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHN3aXRjaCAoYWxpYXNlcy5sZW5ndGgpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0cmVnZXggPSAnJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFtyZWdleF0gPSBhbGlhc2VzO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJlZ2V4ID0gYCg/OiR7YWxpYXNlcy5qb2luKCd8Jyl9KWA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVnZXg7XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMucXVpY2tGb3JtICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIENyZWF0aW9uIG9mIHNpbXBsZSBhbmQgc3RhbmRhcmQgZm9ybXMgd2l0aG91dCBtdWNoIHNwZWNpZmljIGNvZGluZy5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge2V2ZW50fSBldmVudCAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBmb3JtIGlzIHN1Ym1pdHRlZC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtldmVudFR5cGU9c3VibWl0XSAtIFR5cGUgb2YgdGhlIGV2ZW50LlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtID0gZnVuY3Rpb24gKGV2ZW50LCBldmVudFR5cGUpIHtcblx0XHR0aGlzLnJvb3QgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoe1xuXHRcdFx0dHlwZTogJ2Zvcm0nLFxuXHRcdFx0ZXZlbnQsXG5cdFx0XHRldmVudFR5cGUsXG5cdFx0fSk7XG5cdH07XG5cdC8qKlxuXHQgKiBSZW5kZXJzIHRoZSBIVE1MIG91dHB1dCBvZiB0aGUgcXVpY2tGb3JtLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHJldCA9IHRoaXMucm9vdC5yZW5kZXIoKTtcblx0XHRyZXQubmFtZXMgPSB7fTtcblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHQvKipcblx0ICogQXBwZW5kIGVsZW1lbnQgdG8gdGhlIGZvcm0uXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsob2JqZWN0fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZGF0YSAtIEEgcXVpY2tmb3JtIGVsZW1lbnQsIG9yIHRoZSBvYmplY3Qgd2l0aCB3aGljaFxuXHQgKiBhIHF1aWNrZm9ybSBlbGVtZW50IGlzIGNvbnN0cnVjdGVkLlxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnR9IC0gU2FtZSBhcyB3aGF0IGlzIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0ucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0cmV0dXJuIHRoaXMucm9vdC5hcHBlbmQoZGF0YSk7XG5cdH07XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBuZXcgZWxlbWVudCBmb3IgdGhlIHRoZSBmb3JtLlxuXHQgKlxuXHQgKiBJbmRleCB0byBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCB0eXBlczpcblx0ICogLSBHbG9iYWwgYXR0cmlidXRlczogaWQsIGNsYXNzTmFtZSwgc3R5bGUsIHRvb2x0aXAsIGV4dHJhLCAkZGF0YSwgYWRtaW5vbmx5XG5cdCAqIC0gYHNlbGVjdGA6IEEgY29tYm8gYm94IChha2EgZHJvcC1kb3duKS5cblx0ICogICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIG11bHRpcGxlLCBzaXplLCBsaXN0LCBldmVudCwgZGlzYWJsZWRcblx0ICogIC0gYG9wdGlvbmA6IEFuIGVsZW1lbnQgZm9yIGEgY29tYm8gYm94LlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogdmFsdWUsIGxhYmVsLCBzZWxlY3RlZCwgZGlzYWJsZWRcblx0ICogIC0gYG9wdGdyb3VwYDogQSBncm91cCBvZiBcIm9wdGlvblwicy5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IGxhYmVsLCBsaXN0XG5cdCAqICAtIGBmaWVsZGA6IEEgZmllbGRzZXQgKGFrYSBncm91cCBib3gpLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIGRpc2FibGVkXG5cdCAqICAtIGBjaGVja2JveGA6IEEgY2hlY2tib3guIE11c3QgdXNlIFwibGlzdFwiIHBhcmFtZXRlci5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxpc3QsIGV2ZW50XG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzICh3aXRoaW4gbGlzdCk6IG5hbWUsIGxhYmVsLCB2YWx1ZSwgY2hlY2tlZCwgZGlzYWJsZWQsIGV2ZW50LCBzdWJncm91cFxuXHQgKiAgLSBgcmFkaW9gOiBBIHJhZGlvIGJ1dHRvbi4gTXVzdCB1c2UgXCJsaXN0XCIgcGFyYW1ldGVyLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGlzdCwgZXZlbnRcblx0ICogICAgICAtIEF0dHJpYnV0ZXMgKHdpdGhpbiBsaXN0KTogbmFtZSwgbGFiZWwsIHZhbHVlLCBjaGVja2VkLCBkaXNhYmxlZCwgZXZlbnQsIHN1Ymdyb3VwXG5cdCAqICAtIGBpbnB1dGA6IEEgdGV4dCBpbnB1dCBib3guXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgdmFsdWUsIHNpemUsIHBsYWNlaG9sZGVyLCBtYXhsZW5ndGgsIGRpc2FibGVkLCByZXF1aXJlZCwgcmVhZG9ubHksIGV2ZW50XG5cdCAqICAtIGBudW1iZXJgOiBBIG51bWJlciBpbnB1dCBib3guXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBFdmVyeXRoaW5nIHRoZSB0ZXh0IGBpbnB1dGAgaGFzLCBhcyB3ZWxsIGFzOiBtaW4sIG1heCwgc3RlcCwgbGlzdFxuXHQgKiAgLSBgZHluaW5wdXRgOiBBIHNldCBvZiB0ZXh0IGJveGVzIHdpdGggXCJSZW1vdmVcIiBidXR0b25zIGFuZCBhbiBcIkFkZFwiIGJ1dHRvbi5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBtaW4sIG1heCwgc3VibGFiZWwsIHZhbHVlLCBzaXplLCBtYXhsZW5ndGgsIGV2ZW50XG5cdCAqICAtIGBoaWRkZW5gOiBBbiBpbnZpc2libGUgZm9ybSBmaWVsZC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIHZhbHVlXG5cdCAqICAtIGBoZWFkZXJgOiBBIGxldmVsIDUgaGVhZGVyLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbGFiZWxcblx0ICogIC0gYGRpdmA6IEEgZ2VuZXJpYyBwbGFjZWhvbGRlciBlbGVtZW50IG9yIGxhYmVsLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWxcblx0ICogIC0gYHN1Ym1pdGA6IEEgc3VibWl0IGJ1dHRvbi4gTW9yZWJpdHMuc2ltcGxlV2luZG93IG1vdmVzIHRoZXNlIHRvIHRoZSBmb290ZXIgb2YgdGhlIGRpYWxvZy5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBkaXNhYmxlZFxuXHQgKiAgLSBgYnV0dG9uYDogQSBnZW5lcmljIGJ1dHRvbi5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBkaXNhYmxlZCwgZXZlbnRcblx0ICogIC0gYHRleHRhcmVhYDogQSBiaWcsIG11bHRpLWxpbmUgdGV4dCBib3guXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgdmFsdWUsIGNvbHMsIHJvd3MsIGRpc2FibGVkLCByZXF1aXJlZCwgcmVhZG9ubHlcblx0ICogIC0gYGZyYWdtZW50YDogQSBEb2N1bWVudEZyYWdtZW50IG9iamVjdC5cblx0ICogICAgICAtIE5vIGF0dHJpYnV0ZXMsIGFuZCBubyBnbG9iYWwgYXR0cmlidXRlcyBleGNlcHQgYWRtaW5vbmx5LlxuXHQgKiBUaGVyZSBpcyBzb21lIGRpZmZlcmVuY2Ugb24gaG93IHR5cGVzIGhhbmRsZSB0aGUgYGxhYmVsYCBhdHRyaWJ1dGU6XG5cdCAqIC0gYGRpdmAsIGBzZWxlY3RgLCBgZmllbGRgLCBgY2hlY2tib3hgL2ByYWRpb2AsIGBpbnB1dGAsIGB0ZXh0YXJlYWAsIGBoZWFkZXJgLCBhbmQgYGR5bmlucHV0YCBjYW4gYWNjZXB0IGFuIGFycmF5IG9mIGl0ZW1zLFxuXHQgKiBhbmQgdGhlIGxhYmVsIGl0ZW0ocykgY2FuIGJlIGBFbGVtZW50YHMuXG5cdCAqIC0gYG9wdGlvbmAsIGBvcHRncm91cGAsIGBfZHluaW5wdXRfZWxlbWVudGAsIGBzdWJtaXRgLCBhbmQgYGJ1dHRvbmAgYWNjZXB0IG9ubHkgYSBzaW5nbGUgc3RyaW5nLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIE9iamVjdCByZXByZXNlbnRpbmcgdGhlIHF1aWNrZm9ybSBlbGVtZW50LiBTaG91bGRcblx0ICogc3BlY2lmeSBvbmUgb2YgdGhlIGF2YWlsYWJsZSB0eXBlcyBmcm9tIHRoZSBpbmRleCBhYm92ZSwgYXMgd2VsbCBhcyBhbnlcblx0ICogcmVsZXZhbnQgYW5kIGF2YWlsYWJsZSBhdHRyaWJ1dGVzLlxuXHQgKiBAZXhhbXBsZSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoe1xuXHQgKiAgICAgbmFtZTogJ3RhcmdldCcsXG5cdCAqICAgICB0eXBlOiAnaW5wdXQnLFxuXHQgKiAgICAgbGFiZWw6ICdZb3VyIHRhcmdldDonLFxuXHQgKiAgICAgdG9vbHRpcDogJ0VudGVyIHlvdXIgdGFyZ2V0LiBSZXF1aXJlZC4nLFxuXHQgKiAgICAgcmVxdWlyZWQ6IHRydWVcblx0ICogfSk7XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLmNoaWxkcyA9IFtdO1xuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqIEB0eXBlIHtudW1iZXJ9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5pZCA9IDA7XG5cdC8qKlxuXHQgKiBBcHBlbmRzIGFuIGVsZW1lbnQgdG8gY3VycmVudCBlbGVtZW50LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHBhcmFtIHtNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudH0gZGF0YSAtIEEgcXVpY2tGb3JtIGVsZW1lbnQgb3IgdGhlIG9iamVjdCByZXF1aXJlZCB0b1xuXHQgKiBjcmVhdGUgdGhlIHF1aWNrRm9ybSBlbGVtZW50LlxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnR9IFRoZSBzYW1lIGVsZW1lbnQgcGFzc2VkIGluLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0bGV0IGNoaWxkO1xuXHRcdGlmIChkYXRhIGluc3RhbmNlb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpIHtcblx0XHRcdGNoaWxkID0gZGF0YTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2hpbGQgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoZGF0YSk7XG5cdFx0fVxuXHRcdHRoaXMuY2hpbGRzLnB1c2goY2hpbGQpO1xuXHRcdHJldHVybiBjaGlsZDtcblx0fTtcblx0LyoqXG5cdCAqIFJlbmRlcnMgdGhlIEhUTUwgb3V0cHV0IGZvciB0aGUgcXVpY2tGb3JtIGVsZW1lbnQuICBUaGlzIHNob3VsZCBiZSBjYWxsZWRcblx0ICogd2l0aG91dCBwYXJhbWV0ZXJzOiBgZm9ybS5yZW5kZXIoKWAuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcm5hbFN1Ymdyb3VwSWRcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoaW50ZXJuYWxTdWJncm91cElkKSB7XG5cdFx0Y29uc3QgY3VycmVudE5vZGUgPSB0aGlzLmNvbXB1dGUodGhpcy5kYXRhLCBpbnRlcm5hbFN1Ymdyb3VwSWQpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHMubGVuZ3RoOyArK2kpIHtcblx0XHRcdC8vIGRvIG5vdCBwYXNzIGludGVybmFsX3N1Ymdyb3VwX2lkIHRvIHJlY3Vyc2l2ZSBjYWxsc1xuXHRcdFx0Y3VycmVudE5vZGVbMV0uYXBwZW5kQ2hpbGQodGhpcy5jaGlsZHNbaV0ucmVuZGVyKCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gY3VycmVudE5vZGVbMF07XG5cdH07XG5cdC8qKlxuXHQgKiBAcGFyYW0geyp9IGRhdGFcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluSWRcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChkYXRhLCBpbklkKSB7XG5cdFx0bGV0IG5vZGU7XG5cdFx0bGV0IGNoaWxkQ29udGFpbmVyID0gbnVsbDtcblx0XHRsZXQgbGFiZWw7XG5cdFx0Y29uc3QgaWQgPSBgJHtpbklkID8gYCR7aW5JZH1fYCA6ICcnfW5vZGVfJHtNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5pZCsrfWA7XG5cdFx0aWYgKGRhdGEuYWRtaW5vbmx5ICYmICFNb3JlYml0cy51c2VySXNTeXNvcCkge1xuXHRcdFx0Ly8gaGVsbCBoYWNrIGFscGhhXG5cdFx0XHRkYXRhLnR5cGUgPSAnaGlkZGVuJztcblx0XHR9XG5cdFx0bGV0IGk7XG5cdFx0bGV0IGN1cnJlbnQ7XG5cdFx0bGV0IHN1Ym5vZGU7XG5cdFx0c3dpdGNoIChkYXRhLnR5cGUpIHtcblx0XHRcdGNhc2UgJ2Zvcm0nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXHRcdFx0XHRub2RlLmNsYXNzTmFtZSA9ICdxdWlja2Zvcm0nO1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2NyaXB0LXVybFxuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKTtcblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoZGF0YS5ldmVudFR5cGUgfHwgJ3N1Ym1pdCcsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2ZyYWdtZW50Jzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRcdFx0Ly8gZnJhZ21lbnRzIGNhbid0IGhhdmUgYW55IGF0dHJpYnV0ZXMsIHNvIGp1c3QgcmV0dXJuIGl0IHN0cmFpZ2h0IGF3YXlcblx0XHRcdFx0cmV0dXJuIFtub2RlLCBub2RlXTtcblx0XHRcdGNhc2UgJ3NlbGVjdCc6IHtcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaWQnLCBgZGl2XyR7aWR9YCk7XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpO1xuXHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xuXHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdC8vIE5vIG1hcmdpblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3Qgc2VsZWN0ID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSk7XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0c2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5tdWx0aXBsZSkge1xuXHRcdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ211bHRpcGxlJywgJ211bHRpcGxlJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuc2l6ZSkge1xuXHRcdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBkYXRhLnNpemUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0c2VsZWN0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0aWYgKGRhdGEubGlzdCkge1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhLmxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnQgPSBkYXRhLmxpc3RbaV07XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5saXN0KSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQudHlwZSA9ICdvcHRncm91cCc7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50LnR5cGUgPSAnb3B0aW9uJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHN1Ym5vZGUgPSB0aGlzLmNvbXB1dGUoY3VycmVudCk7XG5cdFx0XHRcdFx0XHRzZWxlY3QuYXBwZW5kQ2hpbGQoc3Vibm9kZVswXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gc2VsZWN0O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgJ29wdGlvbic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRcdFx0bm9kZS52YWx1ZXMgPSBkYXRhLnZhbHVlO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0aWYgKGRhdGEuc2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdG5vZGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEFkZCBoaWRkZW4gYXR0clxuXHRcdFx0XHRpZiAoZGF0YS5oaWRkZW4pIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdsYWJlbCcsIGRhdGEubGFiZWwpO1xuXHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdvcHRncm91cCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRncm91cCcpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbGFiZWwnLCBkYXRhLmxhYmVsKTtcblx0XHRcdFx0aWYgKGRhdGEubGlzdCkge1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhLmxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnQgPSBkYXRhLmxpc3RbaV07XG5cdFx0XHRcdFx0XHRjdXJyZW50LnR5cGUgPSAnb3B0aW9uJzsgLy8gbXVzdCBiZSBvcHRpb25zIGhlcmVcblx0XHRcdFx0XHRcdHN1Ym5vZGUgPSB0aGlzLmNvbXB1dGUoY3VycmVudCk7XG5cdFx0XHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKHN1Ym5vZGVbMF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2ZpZWxkJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG5cdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKSk7XG5cdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRpZiAoZGF0YS5uYW1lKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0bm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRjYXNlICdyYWRpbyc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0aWYgKGRhdGEubGlzdCkge1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhLmxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGN1cklkID0gYCR7aWR9XyR7aX1gO1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IGRhdGEubGlzdFtpXTtcblx0XHRcdFx0XHRcdGxldCBjdXJEaXY7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC50eXBlID09PSAnaGVhZGVyJykge1xuXHRcdFx0XHRcdFx0XHQvLyBpbmxpbmUgaGFja1xuXHRcdFx0XHRcdFx0XHRjdXJEaXYgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2JykpO1xuXHRcdFx0XHRcdFx0XHRjdXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3VycmVudC5sYWJlbCkpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY3VycmVudC50b29sdGlwKSB7XG5cdFx0XHRcdFx0XHRcdFx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuZ2VuZXJhdGVUb29sdGlwKGN1ckRpdiwgY3VycmVudCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjdXJEaXYgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcblx0XHRcdFx0XHRcdC8vIEFkZCBoaWRkZW4gYXR0clxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuaGlkZGVuKSB7XG5cdFx0XHRcdFx0XHRcdGN1ckRpdi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHN1Ym5vZGUgPSBjdXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnZhbHVlcyA9IGN1cnJlbnQudmFsdWU7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXJyZW50LnZhbHVlKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgZGF0YS50eXBlKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGN1cklkKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgY3VycmVudC5uYW1lIHx8IGRhdGEubmFtZSk7XG5cdFx0XHRcdFx0XHQvLyBJZiBuYW1lIGlzIHByb3ZpZGVkIG9uIHRoZSBpbmRpdmlkdWFsIGNoZWNrYm94LCBhZGQgYSBkYXRhLXNpbmdsZVxuXHRcdFx0XHRcdFx0Ly8gYXR0cmlidXRlIHdoaWNoIGluZGljYXRlcyBpdCBpc24ndCBwYXJ0IG9mIGEgbGlzdCBvZiBjaGVja2JveGVzIHdpdGhcblx0XHRcdFx0XHRcdC8vIHNhbWUgbmFtZS4gVXNlZCBpbiBnZXRJbnB1dERhdGEoKVxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQubmFtZSkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1zaW5nbGUnLCAnZGF0YS1zaW5nbGUnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGFiZWwgPSBjdXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG5cdFx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGN1cnJlbnQubGFiZWwpKTtcblx0XHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY3VySWQpO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQudG9vbHRpcCkge1xuXHRcdFx0XHRcdFx0XHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAobGFiZWwsIGN1cnJlbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gc3R5bGVzIGdvIG9uIHRoZSBsYWJlbCwgZG9lc24ndCBtYWtlIHNlbnNlIHRvIHN0eWxlIGEgY2hlY2tib3gvcmFkaW9cblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnN0eWxlKSB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBjdXJyZW50LnN0eWxlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGxldCBldmVudDtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnN1Ymdyb3VwKSB7XG5cdFx0XHRcdFx0XHRcdGxldCB0bXBncm91cCA9IGN1cnJlbnQuc3ViZ3JvdXA7XG5cdFx0XHRcdFx0XHRcdGlmICghQXJyYXkuaXNBcnJheSh0bXBncm91cCkpIHtcblx0XHRcdFx0XHRcdFx0XHR0bXBncm91cCA9IFt0bXBncm91cF07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ViZ3JvdXBSYXcgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdkaXYnLFxuXHRcdFx0XHRcdFx0XHRcdGlkOiBgJHtpZH1fJHtpfV9zdWJncm91cGAsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsIG9mIHRtcGdyb3VwKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgbmV3RWwgPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQuLi5lbCxcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdGlmICghbmV3RWwudHlwZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bmV3RWwudHlwZSA9IGRhdGEudHlwZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0bmV3RWwubmFtZSA9IGAke2N1cnJlbnQubmFtZSB8fCBkYXRhLm5hbWV9LiR7bmV3RWwubmFtZX1gO1xuXHRcdFx0XHRcdFx0XHRcdHN1Ymdyb3VwUmF3LmFwcGVuZChuZXdFbCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ViZ3JvdXAgPSBzdWJncm91cFJhdy5yZW5kZXIoY3VySWQpO1xuXHRcdFx0XHRcdFx0XHRzdWJncm91cC5jbGFzc05hbWUgPSAncXVpY2tmb3JtU3ViZ3JvdXAnO1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnN1Ymdyb3VwID0gc3ViZ3JvdXA7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc2hvd24gPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0ZXZlbnQgPSAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGUudGFyZ2V0LnN1Ymdyb3VwKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC50eXBlID09PSAncmFkaW8nKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHtuYW1lfSA9IGUudGFyZ2V0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5zdWJncm91cFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXSA9IGUudGFyZ2V0O1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUudGFyZ2V0LnN1Ymdyb3VwKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQsIHRydWUpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY3VycmVudC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3Vibm9kZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHN1Ymdyb3VwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICdyYWRpbycpIHtcblx0XHRcdFx0XHRcdFx0ZXZlbnQgPSAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB7bmFtZX0gPSBlLnRhcmdldDtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0uc3ViZ3JvdXBcblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZSBlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBhZGQgdXNlcnMnIGV2ZW50IGxhc3QsIHNvIGl0IGNhbiBpbnRlcmFjdCB3aXRoIHRoZSBzdWJncm91cFxuXHRcdFx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGN1cnJlbnQuZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjdXJyZW50LmV2ZW50LCB0cnVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuc2hpZnRDbGlja1N1cHBvcnQgJiYgZGF0YS50eXBlID09PSAnY2hlY2tib3gnKSB7XG5cdFx0XHRcdFx0TW9yZWJpdHMuY2hlY2tib3hTaGlmdENsaWNrU3VwcG9ydChNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudHMobm9kZSwgZGF0YS5uYW1lKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHQvLyBpbnB1dCBpcyBhY3R1YWxseSBhIHRleHQtdHlwZSwgc28gbnVtYmVyIGhlcmUgaW5oZXJpdHMgdGhlIHNhbWUgc3R1ZmZcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRjYXNlICdpbnB1dCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRpdl8ke2lkfWApO1xuXHRcdFx0XHQvLyBBZGQgaGlkZGVuIGF0dHJcblx0XHRcdFx0aWYgKGRhdGEuaGlkZGVuKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGRhdGEuaWQgfHwgaWQpO1xuXHRcdFx0XHRcdC8vIE5vIG1hcmdpblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3Vibm9kZSA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdC8vIEFkZCB2YWx1ZSBhbmQgcGxhY2Vob2xkZXIgYXR0cnNcblx0XHRcdFx0aWYgKGRhdGEudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5wbGFjZWhvbGRlcikge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGRhdGEucGxhY2Vob2xkZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0aWYgKGRhdGEudHlwZSA9PT0gJ2lucHV0Jykge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGF0dCBvZiBbJ21pbicsICdtYXgnLCAnc3RlcCcsICdsaXN0J10pIHtcblx0XHRcdFx0XHRcdGlmIChkYXRhW2F0dF0pIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoYXR0LCBkYXRhW2F0dF0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGNvbnN0IGF0dCBvZiBbJ3ZhbHVlJywgJ3NpemUnLCAncGxhY2Vob2xkZXInLCAnbWF4bGVuZ3RoJ10pIHtcblx0XHRcdFx0XHRpZiAoZGF0YVthdHRdKSB7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZShhdHQsIGRhdGFbYXR0XSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoY29uc3QgYXR0IG9mIFsnZGlzYWJsZWQnLCAncmVxdWlyZWQnLCAncmVhZG9ubHknXSkge1xuXHRcdFx0XHRcdGlmIChkYXRhW2F0dF0pIHtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKGF0dCwgYXR0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gc3Vibm9kZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkeW5pbnB1dCc6IHtcblx0XHRcdFx0Y29uc3QgbWluID0gZGF0YS5taW4gfHwgMTtcblx0XHRcdFx0Y29uc3QgbWF4ID0gZGF0YS5tYXggfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpKTtcblx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdGNvbnN0IGxpc3ROb2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG5cdFx0XHRcdGNvbnN0IG1vcmUgPSB0aGlzLmNvbXB1dGUoe1xuXHRcdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRcdGxhYmVsOiAn5pu05aSaJyxcblx0XHRcdFx0XHRkaXNhYmxlZDogbWluID49IG1heCxcblx0XHRcdFx0XHRldmVudDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IG5ld05vZGUgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoZS50YXJnZXQuc3VibGlzdCk7XG5cdFx0XHRcdFx0XHRlLnRhcmdldC5hcmVhLmFwcGVuZENoaWxkKG5ld05vZGUucmVuZGVyKCkpO1xuXHRcdFx0XHRcdFx0aWYgKCsrZS50YXJnZXQuY291bnRlciA+PSBlLnRhcmdldC5tYXgpIHtcblx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChtb3JlWzBdKTtcblx0XHRcdFx0Y29uc3QgWywgbW9yZUJ1dHRvbl0gPSBtb3JlO1xuXHRcdFx0XHRjb25zdCBzdWJsaXN0ID0ge1xuXHRcdFx0XHRcdHR5cGU6ICdfZHluaW5wdXRfZWxlbWVudCcsXG5cdFx0XHRcdFx0bGFiZWw6IGRhdGEuc3VibGFiZWwgfHwgZGF0YS5sYWJlbCxcblx0XHRcdFx0XHRuYW1lOiBkYXRhLm5hbWUsXG5cdFx0XHRcdFx0dmFsdWU6IGRhdGEudmFsdWUsXG5cdFx0XHRcdFx0c2l6ZTogZGF0YS5zaXplLFxuXHRcdFx0XHRcdHJlbW92ZTogZmFsc2UsXG5cdFx0XHRcdFx0bWF4bGVuZ3RoOiBkYXRhLm1heGxlbmd0aCxcblx0XHRcdFx0XHRldmVudDogZGF0YS5ldmVudCxcblx0XHRcdFx0fTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1pbjsgKytpKSB7XG5cdFx0XHRcdFx0Y29uc3QgZWxlbSA9IG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudChzdWJsaXN0KTtcblx0XHRcdFx0XHRsaXN0Tm9kZS5hcHBlbmRDaGlsZChlbGVtLnJlbmRlcigpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJsaXN0LnJlbW92ZSA9IHRydWU7XG5cdFx0XHRcdHN1Ymxpc3QubW9yZWJ1dHRvbiA9IG1vcmVCdXR0b247XG5cdFx0XHRcdHN1Ymxpc3QubGlzdG5vZGUgPSBsaXN0Tm9kZTtcblx0XHRcdFx0bW9yZUJ1dHRvbi5zdWJsaXN0ID0gc3VibGlzdDtcblx0XHRcdFx0bW9yZUJ1dHRvbi5hcmVhID0gbGlzdE5vZGU7XG5cdFx0XHRcdG1vcmVCdXR0b24ubWF4ID0gbWF4IC0gbWluO1xuXHRcdFx0XHRtb3JlQnV0dG9uLmNvdW50ZXIgPSAwO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgJ19keW5pbnB1dF9lbGVtZW50Jzpcblx0XHRcdFx0Ly8gUHJpdmF0ZSwgc2ltaWxhciB0byBub3JtYWwgaW5wdXRcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG5cdFx0XHRcdFx0Ly8gTm8gbWFyZ2luXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdWJub2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0aWYgKGRhdGEudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblx0XHRcdFx0aWYgKGRhdGEuc2l6ZSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdzaXplJywgZGF0YS5zaXplKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5tYXhsZW5ndGgpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgZGF0YS5tYXhsZW5ndGgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yZW1vdmUpIHtcblx0XHRcdFx0XHRjb25zdCByZW1vdmUgPSB0aGlzLmNvbXB1dGUoe1xuXHRcdFx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdFx0XHRsYWJlbDogJ+enu+mZpCcsXG5cdFx0XHRcdFx0XHRldmVudDogKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbGlzdCA9IGUudGFyZ2V0Lmxpc3Rub2RlO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBub2RlXyA9IGUudGFyZ2V0LmlucHV0bm9kZTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbW9yZSA9IGUudGFyZ2V0Lm1vcmVidXR0b247XG5cdFx0XHRcdFx0XHRcdGxpc3QucmVtb3ZlQ2hpbGQobm9kZV8pO1xuXHRcdFx0XHRcdFx0XHQtLW1vcmUuY291bnRlcjtcblx0XHRcdFx0XHRcdFx0bW9yZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQocmVtb3ZlWzBdKTtcblx0XHRcdFx0XHRjb25zdCBbLCByZW1vdmVCdXR0b25dID0gcmVtb3ZlO1xuXHRcdFx0XHRcdHJlbW92ZUJ1dHRvbi5pbnB1dG5vZGUgPSBub2RlO1xuXHRcdFx0XHRcdHJlbW92ZUJ1dHRvbi5saXN0bm9kZSA9IGRhdGEubGlzdG5vZGU7XG5cdFx0XHRcdFx0cmVtb3ZlQnV0dG9uLm1vcmVidXR0b24gPSBkYXRhLm1vcmVidXR0b247XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdoaWRkZW4nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaGlkZGVuJyk7XG5cdFx0XHRcdG5vZGUudmFsdWVzID0gZGF0YS52YWx1ZTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS52YWx1ZSk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdoZWFkZXInOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcblx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkaXYnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGlmIChkYXRhLm5hbWUpIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdFx0cmVzdWx0LmNsYXNzTmFtZSA9ICdxdWlja2Zvcm1EZXNjcmlwdGlvbic7XG5cdFx0XHRcdFx0cmVzdWx0LmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQocmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3N1Ym1pdCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLmxhYmVsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUgfHwgJ3N1Ym1pdCcpO1xuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2J1dHRvbic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLmxhYmVsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBkaXZfJHtpZH1gKTtcblx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLmhpZGRlbikge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKSk7XG5cdFx0XHRcdFx0Y29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblx0XHRcdFx0XHRsYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgZGF0YS5pZCB8fCBpZCk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJub2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpKTtcblx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5jb2xzKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCBkYXRhLmNvbHMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJvd3MpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgncm93cycsIGRhdGEucm93cyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRzdWJub2RlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yZXF1aXJlZCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJlYWRvbmx5KSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnZhbHVlID0gZGF0YS52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBBZGQgcGxhY2Vob2xkZXIgYXR0clxuXHRcdFx0XHRpZiAoZGF0YS5wbGFjZWhvbGRlcikge1xuXHRcdFx0XHRcdHN1Ym5vZGUucGxhY2Vob2xkZXIgPSBkYXRhLnBsYWNlaG9sZGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gc3Vibm9kZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1vcmViaXRzLnF1aWNrRm9ybTogdW5rbm93biBlbGVtZW50IHR5cGUgJHtkYXRhLnR5cGUudG9TdHJpbmcoKX1gKTtcblx0XHR9XG5cdFx0aWYgKCFjaGlsZENvbnRhaW5lcikge1xuXHRcdFx0Y2hpbGRDb250YWluZXIgPSBub2RlO1xuXHRcdH1cblx0XHRpZiAoZGF0YS50b29sdGlwKSB7XG5cdFx0XHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAobGFiZWwgfHwgbm9kZSwgZGF0YSk7XG5cdFx0fVxuXHRcdGlmIChkYXRhLmV4dHJhKSB7XG5cdFx0XHRjaGlsZENvbnRhaW5lci5leHRyYSA9IGRhdGEuZXh0cmE7XG5cdFx0fVxuXHRcdGlmIChkYXRhLiRkYXRhKSB7XG5cdFx0XHQkKGNoaWxkQ29udGFpbmVyKS5kYXRhKGRhdGEuJGRhdGEpO1xuXHRcdH1cblx0XHRpZiAoZGF0YS5zdHlsZSkge1xuXHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGRhdGEuc3R5bGUpO1xuXHRcdH1cblx0XHRpZiAoZGF0YS5jbGFzc05hbWUpIHtcblx0XHRcdGNoaWxkQ29udGFpbmVyLmNsYXNzTmFtZSA9IGNoaWxkQ29udGFpbmVyLmNsYXNzTmFtZVxuXHRcdFx0XHQ/IGAke2NoaWxkQ29udGFpbmVyLmNsYXNzTmFtZX0gJHtkYXRhLmNsYXNzTmFtZX1gXG5cdFx0XHRcdDogZGF0YS5jbGFzc05hbWU7XG5cdFx0fVxuXHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBkYXRhLmlkIHx8IGlkKTtcblx0XHRyZXR1cm4gW25vZGUsIGNoaWxkQ29udGFpbmVyXTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIGpRdWVyeSBVSS1iYXNlZCB0b29sdGlwLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHJlcXVpcmVzIGpxdWVyeS51aVxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gVGhlIEhUTUwgZWxlbWVudCBiZXNpZGUgd2hpY2ggYSB0b29sdGlwIGlzIHRvIGJlIGdlbmVyYXRlZC5cblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUb29sdGlwLXJlbGF0ZWQgY29uZmlndXJhdGlvbiBkYXRhLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuZ2VuZXJhdGVUb29sdGlwID0gKG5vZGUsIGRhdGEpID0+IHtcblx0XHRjb25zdCB0b29sdGlwQnV0dG9uID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xuXHRcdHRvb2x0aXBCdXR0b24uY2xhc3NOYW1lID0gJ21vcmViaXRzLXRvb2x0aXBCdXR0b24nO1xuXHRcdHRvb2x0aXBCdXR0b24udGl0bGUgPSBkYXRhLnRvb2x0aXA7IC8vIFByb3ZpZGVzIHRoZSBjb250ZW50IGZvciBqUXVlcnkgVUlcblx0XHR0b29sdGlwQnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCc/JykpO1xuXHRcdCQodG9vbHRpcEJ1dHRvbikudG9vbHRpcCh7XG5cdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRteTogJ2xlZnQgdG9wJyxcblx0XHRcdFx0YXQ6ICdjZW50ZXIgYm90dG9tJyxcblx0XHRcdFx0Y29sbGlzaW9uOiAnZmxpcGZpdCcsXG5cdFx0XHR9LFxuXHRcdFx0Ly8gRGVwcmVjYXRlZCBpbiBVSSAxLjEyLCBidXQgTVcgc3R1Y2sgb24gMS45LjIgaW5kZWZpbml0ZWx5OyBzZWUgIzM5OCBhbmQgVDcxMzg2XG5cdFx0XHR0b29sdGlwQ2xhc3M6ICdtb3JlYml0cy11aS10b29sdGlwJyxcblx0XHR9KTtcblx0fTtcblx0Ly8gU29tZSB1dGlsaXR5IG1ldGhvZHMgZm9yIG1hbmlwdWxhdGluZyBxdWlja0Zvcm1zIGFmdGVyIHRoZWlyIGNyZWF0aW9uOlxuXHQvLyAoTm9uZSBvZiB0aGVzZSB3b3JrIGZvciBcImR5bmlucHV0XCIgdHlwZSBmaWVsZHMgYXQgcHJlc2VudClcblx0LyoqXG5cdCAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGZpbGxlZCBmb3JtIGRhdGEgZW50ZXJlZCBieSB0aGUgdXNlciwgd2l0aCB0aGUgb2JqZWN0XG5cdCAqIGtleXMgYmVpbmcgdGhlIGZvcm0gZWxlbWVudCBuYW1lcy4gRGlzYWJsZWQgZmllbGRzIHdpbGwgYmUgaWdub3JlZCwgYnV0IG5vdCBoaWRkZW4gZmllbGRzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IFdpdGggZmllbGQgbmFtZXMgYXMga2V5cywgaW5wdXQgZGF0YSBhcyB2YWx1ZXMuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0SW5wdXREYXRhID0gKGZvcm0pID0+IHtcblx0XHRjb25zdCByZXN1bHQgPSB7fTtcblx0XHRmb3IgKGNvbnN0IGZpZWxkIG9mIGZvcm0uZWxlbWVudHMpIHtcblx0XHRcdGlmIChmaWVsZC5kaXNhYmxlZCB8fCAhZmllbGQubmFtZSB8fCAhZmllbGQudHlwZSB8fCBmaWVsZC50eXBlID09PSAnc3VibWl0JyB8fCBmaWVsZC50eXBlID09PSAnYnV0dG9uJykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIEZvciBlbGVtZW50cyBpbiBzdWJncm91cHMsIHF1aWNrZm9ybSBwcmVwZW5kcyBlbGVtZW50IG5hbWVzIHdpdGhcblx0XHRcdC8vIG5hbWUgb2YgdGhlIHBhcmVudCBncm91cCBmb2xsb3dlZCBieSBhIHBlcmlvZCwgZ2V0IHJpZCBvZiB0aGF0LlxuXHRcdFx0Y29uc3QgZmllbGROYW1lTm9ybSA9IGZpZWxkLm5hbWUuc2xpY2UoZmllbGQubmFtZS5pbmRleE9mKCcuJykgKyAxKTtcblx0XHRcdHN3aXRjaCAoZmllbGQudHlwZSkge1xuXHRcdFx0XHRjYXNlICdyYWRpbyc6XG5cdFx0XHRcdFx0aWYgKGZpZWxkLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY2hlY2tib3gnOlxuXHRcdFx0XHRcdGlmIChmaWVsZC5kYXRhc2V0LnNpbmdsZSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dID0gZmllbGQuY2hlY2tlZDsgLy8gYm9vbGVhblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gfHw9IFtdO1xuXHRcdFx0XHRcdFx0aWYgKGZpZWxkLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dLnB1c2goZmllbGQudmFsdWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnc2VsZWN0LW11bHRpcGxlJzpcblx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSAkKGZpZWxkKS52YWwoKTsgLy8gZmllbGQudmFsdWUgZG9lc24ndCB3b3JrXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3RleHQnOiAvLyBmYWxscyB0aHJvdWdoXG5cdFx0XHRcdGNhc2UgJ3RleHRhcmVhJzpcblx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSBmaWVsZC52YWx1ZS50cmltKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gY291bGQgYmUgc2VsZWN0LW9uZSwgZGF0ZSwgbnVtYmVyLCBlbWFpbCwgZXRjXG5cdFx0XHRcdFx0aWYgKGZpZWxkLnZhbHVlKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSBmaWVsZC52YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFsbCBmb3JtIGVsZW1lbnRzIHdpdGggYSBnaXZlbiBmaWVsZCBuYW1lIG9yIElELlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZE5hbWUgLSBUaGUgbmFtZSBvciBpZCBvZiB0aGUgZmllbGRzLlxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnRbXX0gLSBBcnJheSBvZiBtYXRjaGluZyBmb3JtIGVsZW1lbnRzLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRzID0gKGZvcm0sIGZpZWxkTmFtZSkgPT4ge1xuXHRcdGNvbnN0ICRmb3JtID0gJChmb3JtKTtcblx0XHRmaWVsZE5hbWUgPSAkLmVzY2FwZVNlbGVjdG9yKGZpZWxkTmFtZSk7IC8vIHNhbml0aXplIGlucHV0XG5cdFx0bGV0ICRlbGVtZW50cyA9ICRmb3JtLmZpbmQoYFtuYW1lPVwiJHtmaWVsZE5hbWV9XCJdYCk7XG5cdFx0aWYgKCRlbGVtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gJGVsZW1lbnRzLnRvQXJyYXkoKTtcblx0XHR9XG5cdFx0JGVsZW1lbnRzID0gJGZvcm0uZmluZChgIyR7ZmllbGROYW1lfWApO1xuXHRcdHJldHVybiAkZWxlbWVudHMudG9BcnJheSgpO1xuXHR9O1xuXHQvKipcblx0ICogU2VhcmNoZXMgdGhlIGFycmF5IG9mIGVsZW1lbnRzIGZvciBhIGNoZWNrYm94IG9yIHJhZGlvIGJ1dHRvbiB3aXRoIGEgY2VydGFpblxuXHQgKiBgdmFsdWVgIGF0dHJpYnV0ZSwgYW5kIHJldHVybnMgdGhlIGZpcnN0IHN1Y2ggZWxlbWVudC4gUmV0dXJucyBudWxsIGlmIG5vdCBmb3VuZC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnRbXX0gZWxlbWVudEFycmF5IC0gQXJyYXkgb2YgY2hlY2tib3ggb3IgcmFkaW8gZWxlbWVudHMuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFZhbHVlIHRvIHNlYXJjaCBmb3IuXG5cdCAqIEByZXR1cm5zIHtIVE1MSW5wdXRFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldENoZWNrYm94T3JSYWRpbyA9IChlbGVtZW50QXJyYXksIHZhbHVlKSA9PiB7XG5cdFx0Y29uc3QgZm91bmQgPSBlbGVtZW50QXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudC52YWx1ZSA9PT0gdmFsdWU7XG5cdFx0fSk7XG5cdFx0aWYgKGZvdW5kLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiBmb3VuZFswXTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSAmbHQ7ZGl2PiBjb250YWluaW5nIHRoZSBmb3JtIGVsZW1lbnQsIG9yIHRoZSBmb3JtIGVsZW1lbnQgaXRzZWxmXG5cdCAqIE1heSBub3Qgd29yayBhcyBleHBlY3RlZCBvbiBjaGVja2JveGVzIG9yIHJhZGlvcy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50Q29udGFpbmVyID0gKGVsZW1lbnQpID0+IHtcblx0XHQvLyBmb3IgZGl2cywgaGVhZGluZ3MgYW5kIGZpZWxkc2V0cywgdGhlIGNvbnRhaW5lciBpcyB0aGUgZWxlbWVudCBpdHNlbGZcblx0XHRpZiAoXG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZpZWxkU2V0RWxlbWVudCB8fFxuXHRcdFx0ZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxEaXZFbGVtZW50IHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTEhlYWRpbmdFbGVtZW50XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHR9XG5cdFx0Ly8gZm9yIG90aGVycywganVzdCByZXR1cm4gdGhlIHBhcmVudCBub2RlXG5cdFx0cmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZTtcblx0fTtcblx0LyoqXG5cdCAqIEdldHMgdGhlIEhUTUwgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBsYWJlbCBvZiB0aGUgZ2l2ZW4gZm9ybSBlbGVtZW50XG5cdCAqIChtYWlubHkgZm9yIGludGVybmFsIHVzZSkuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWxPYmplY3QgPSAoZWxlbWVudCkgPT4ge1xuXHRcdC8vIGZvciBidXR0b25zLCBkaXZzIGFuZCBoZWFkZXJzLCB0aGUgbGFiZWwgaXMgb24gdGhlIGVsZW1lbnQgaXRzZWxmXG5cdFx0aWYgKFxuXHRcdFx0ZWxlbWVudC50eXBlID09PSAnYnV0dG9uJyB8fFxuXHRcdFx0ZWxlbWVudC50eXBlID09PSAnc3VibWl0JyB8fFxuXHRcdFx0ZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxEaXZFbGVtZW50IHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTEhlYWRpbmdFbGVtZW50XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHRcdC8vIGZvciBmaWVsZHNldHMsIHRoZSBsYWJlbCBpcyB0aGUgY2hpbGQgPGxlZ2VuZD4gZWxlbWVudFxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxGaWVsZFNldEVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xlZ2VuZCcpO1xuXHRcdFx0Ly8gZm9yIHRleHRhcmVhcywgdGhlIGxhYmVsIGlzIHRoZSBzaWJsaW5nIDxoNT4gZWxlbWVudFxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignaDUnKTtcblx0XHR9XG5cdFx0Ly8gZm9yIG90aGVycywgdGhlIGxhYmVsIGlzIHRoZSBzaWJsaW5nIDxsYWJlbD4gZWxlbWVudFxuXHRcdHJldHVybiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcblx0fTtcblx0LyoqXG5cdCAqIEdldHMgdGhlIGxhYmVsIHRleHQgb2YgdGhlIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsID0gKGVsZW1lbnQpID0+IHtcblx0XHRjb25zdCBsYWJlbEVsZW1lbnQgPSBNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsT2JqZWN0KGVsZW1lbnQpO1xuXHRcdGlmICghbGFiZWxFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIGxhYmVsRWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50O1xuXHR9O1xuXHQvKipcblx0ICogU2V0cyB0aGUgbGFiZWwgb2YgdGhlIGVsZW1lbnQgdG8gdGhlIGdpdmVuIHRleHQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFRleHRcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgc3VjY2VlZGVkLCBmYWxzZSBpZiB0aGUgbGFiZWwgZWxlbWVudCBpcyB1bmF2YWlsYWJsZS5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50TGFiZWwgPSAoZWxlbWVudCwgbGFiZWxUZXh0KSA9PiB7XG5cdFx0Y29uc3QgbGFiZWxFbGVtZW50ID0gTW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbE9iamVjdChlbGVtZW50KTtcblx0XHRpZiAoIWxhYmVsRWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRsYWJlbEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblx0LyoqXG5cdCAqIFN0b3JlcyB0aGUgZWxlbWVudCdzIGN1cnJlbnQgbGFiZWwsIGFuZCB0ZW1wb3JhcmlseSBzZXRzIHRoZSBsYWJlbCB0byB0aGUgZ2l2ZW4gdGV4dC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRlbXBvcmFyeUxhYmVsVGV4dFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHN1Y2NlZWRlZCwgYGZhbHNlYCBpZiB0aGUgbGFiZWwgZWxlbWVudCBpcyB1bmF2YWlsYWJsZS5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5vdmVycmlkZUVsZW1lbnRMYWJlbCA9IChlbGVtZW50LCB0ZW1wb3JhcnlMYWJlbFRleHQpID0+IHtcblx0XHRpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLW9sZGxhYmVsJykpIHtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW9sZGxhYmVsJywgTW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbChlbGVtZW50KSk7XG5cdFx0fVxuXHRcdHJldHVybiBNb3JlYml0cy5xdWlja0Zvcm0uc2V0RWxlbWVudExhYmVsKGVsZW1lbnQsIHRlbXBvcmFyeUxhYmVsVGV4dCk7XG5cdH07XG5cdC8qKlxuXHQgKiBSZXN0b3JlcyB0aGUgbGFiZWwgc3RvcmVkIGJ5IG92ZXJyaWRlRWxlbWVudExhYmVsLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBzdWNjZWVkZWQsIGZhbHNlIGlmIHRoZSBsYWJlbCBlbGVtZW50IGlzIHVuYXZhaWxhYmxlLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnJlc2V0RWxlbWVudExhYmVsID0gKGVsZW1lbnQpID0+IHtcblx0XHRpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnKSkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50TGFiZWwoZWxlbWVudCwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnKSk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHQvKipcblx0ICogU2hvd3Mgb3IgaGlkZXMgYSBmb3JtIGVsZW1lbnQgcGx1cyBpdHMgbGFiZWwgYW5kIHRvb2x0aXAuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8alF1ZXJ5fHN0cmluZyl9IGVsZW1lbnQgLSBIVE1ML2pRdWVyeSBlbGVtZW50LCBvciBqUXVlcnkgc2VsZWN0b3Igc3RyaW5nLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFt2aXNpYmlsaXR5XSAtIFNraXAgdGhpcyB0byB0b2dnbGUgdmlzaWJpbGl0eS5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50VmlzaWJpbGl0eSA9IChlbGVtZW50LCB2aXNpYmlsaXR5KSA9PiB7XG5cdFx0JChlbGVtZW50KS50b2dnbGUodmlzaWJpbGl0eSk7XG5cdH07XG5cdC8qKlxuXHQgKiBTaG93cyBvciBoaWRlcyB0aGUgcXVlc3Rpb24gbWFyayBpY29uICh3aGljaCBkaXNwbGF5cyB0aGUgdG9vbHRpcCkgbmV4dCB0byBhIGZvcm0gZWxlbWVudC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxqUXVlcnkpfSBlbGVtZW50XG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Zpc2liaWxpdHldIC0gU2tpcCB0aGlzIHRvIHRvZ2dsZSB2aXNpYmlsaXR5LlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRUb29sdGlwVmlzaWJpbGl0eSA9IChlbGVtZW50LCB2aXNpYmlsaXR5KSA9PiB7XG5cdFx0JChNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudENvbnRhaW5lcihlbGVtZW50KSkuZmluZCgnLm1vcmViaXRzLXRvb2x0aXBCdXR0b24nKS50b2dnbGUodmlzaWJpbGl0eSk7XG5cdH07XG5cdC8qKlxuXHQgKiBAZXh0ZXJuYWwgSFRNTEZvcm1FbGVtZW50XG5cdCAqL1xuXHQvKipcblx0ICogR2V0IGNoZWNrZWQgaXRlbXMgaW4gdGhlIGZvcm0uXG5cdCAqXG5cdCAqIEBmdW5jdGlvbiBleHRlcm5hbDpIVE1MRm9ybUVsZW1lbnQuZ2V0Q2hlY2tlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEZpbmQgY2hlY2tlZCBwcm9wZXJ0eSBvZiBlbGVtZW50cyAoaS5lLiBhIGNoZWNrYm94XG5cdCAqIG9yIGEgcmFkaW9idXR0b24pIHdpdGggdGhlIGdpdmVuIG5hbWUsIG9yIHNlbGVjdCBvcHRpb25zIHRoYXQgaGF2ZSBzZWxlY3RlZFxuXHQgKiBzZXQgdG8gdHJ1ZSAoZG9uJ3QgdHJ5IHRvIG1peCBzZWxlY3RzIHdpdGggcmFkaW8vY2hlY2tib3hlcykuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gLSBPcHRpb25hbGx5IHNwZWNpZnkgZWl0aGVyIHJhZGlvIG9yIGNoZWNrYm94IChmb3Jcblx0ICogdGhlIGV2ZW50IHRoYXQgYm90aCBjaGVja2JveGVzIGFuZCByYWRpb2J1dHRvbnMgaGF2ZSB0aGUgc2FtZSBuYW1lKS5cblx0ICogQHJldHVybnMge3N0cmluZ1tdfSAtIENvbnRhaW5zIHRoZSB2YWx1ZXMgb2YgZWxlbWVudHMgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuXHQgKiBjaGVja2VkIHByb3BlcnR5IHNldCB0byB0cnVlLlxuXHQgKi9cblx0SFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5nZXRDaGVja2VkID0gZnVuY3Rpb24gKG5hbWUsIHR5cGUpIHtcblx0XHRjb25zdCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHNbbmFtZV07XG5cdFx0aWYgKCFlbGVtZW50cykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0XHRjb25zdCByZXR1cm5BcnJheSA9IFtdO1xuXHRcdGxldCBpO1xuXHRcdGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG5cdFx0XHRjb25zdCB7b3B0aW9uc30gPSBlbGVtZW50cztcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmIChvcHRpb25zW2ldLnNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnNbaV0udmFsdWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKG9wdGlvbnNbaV0udmFsdWVzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaChvcHRpb25zW2ldLnZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuXHRcdFx0aWYgKHR5cGUgJiYgZWxlbWVudHMudHlwZSAhPT0gdHlwZSkge1xuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnRzLmNoZWNrZWQpIHtcblx0XHRcdFx0cmV0dXJuIFtlbGVtZW50cy52YWx1ZV07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoZWxlbWVudHNbaV0uY2hlY2tlZCkge1xuXHRcdFx0XHRcdGlmICh0eXBlICYmIGVsZW1lbnRzW2ldLnR5cGUgIT09IHR5cGUpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZWxlbWVudHNbaV0udmFsdWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKGVsZW1lbnRzW2ldLnZhbHVlcyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2goZWxlbWVudHNbaV0udmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cdH07XG5cdC8qKlxuXHQgKiBEb2VzIHRoZSBzYW1lIGFzIHtAbGluayBIVE1MRm9ybUVsZW1lbnQuZ2V0Q2hlY2tlZHxnZXRDaGVja2VkfSwgYnV0IHdpdGggdW5jaGVja2VkIGVsZW1lbnRzLlxuXHQgKlxuXHQgKiBAZnVuY3Rpb24gZXh0ZXJuYWw6SFRNTEZvcm1FbGVtZW50LmdldFVuY2hlY2tlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEZpbmQgY2hlY2tlZCBwcm9wZXJ0eSBvZiBlbGVtZW50cyAoaS5lLiBhIGNoZWNrYm94XG5cdCAqIG9yIGEgcmFkaW9idXR0b24pIHdpdGggdGhlIGdpdmVuIG5hbWUsIG9yIHNlbGVjdCBvcHRpb25zIHRoYXQgaGF2ZSBzZWxlY3RlZFxuXHQgKiBzZXQgdG8gdHJ1ZSAoZG9uJ3QgdHJ5IHRvIG1peCBzZWxlY3RzIHdpdGggcmFkaW8vY2hlY2tib3hlcykuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gLSBPcHRpb25hbGx5IHNwZWNpZnkgZWl0aGVyIHJhZGlvIG9yIGNoZWNrYm94IChmb3Jcblx0ICogdGhlIGV2ZW50IHRoYXQgYm90aCBjaGVja2JveGVzIGFuZCByYWRpb2J1dHRvbnMgaGF2ZSB0aGUgc2FtZSBuYW1lKS5cblx0ICogQHJldHVybnMge3N0cmluZ1tdfSAtIENvbnRhaW5zIHRoZSB2YWx1ZXMgb2YgZWxlbWVudHMgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuXHQgKiBjaGVja2VkIHByb3BlcnR5IHNldCB0byB0cnVlLlxuXHQgKi9cblx0SFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5nZXRVbmNoZWNrZWQgPSBmdW5jdGlvbiAobmFtZSwgdHlwZSkge1xuXHRcdGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50c1tuYW1lXTtcblx0XHRpZiAoIWVsZW1lbnRzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdGNvbnN0IHJldHVybkFycmF5ID0gW107XG5cdFx0bGV0IGk7XG5cdFx0aWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcblx0XHRcdGNvbnN0IHtvcHRpb25zfSA9IGVsZW1lbnRzO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKCFvcHRpb25zW2ldLnNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnNbaV0udmFsdWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKG9wdGlvbnNbaV0udmFsdWVzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaChvcHRpb25zW2ldLnZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuXHRcdFx0aWYgKHR5cGUgJiYgZWxlbWVudHMudHlwZSAhPT0gdHlwZSkge1xuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9IGVsc2UgaWYgKCFlbGVtZW50cy5jaGVja2VkKSB7XG5cdFx0XHRcdHJldHVybiBbZWxlbWVudHMudmFsdWVdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKCFlbGVtZW50c1tpXS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGUgJiYgZWxlbWVudHNbaV0udHlwZSAhPT0gdHlwZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChlbGVtZW50c1tpXS52YWx1ZXMpIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2goZWxlbWVudHNbaV0udmFsdWVzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaChlbGVtZW50c1tpXS52YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXR1cm5BcnJheTtcblx0fTtcblx0LyoqXG5cdCAqIFV0aWxpdGllcyB0byBoZWxwIHByb2Nlc3MgSVAgYWRkcmVzc2VzLlxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLmlwXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMuaXAgPSB7XG5cdFx0LyoqXG5cdFx0ICogQ29udmVydHMgYW4gSVB2NiBhZGRyZXNzIHRvIHRoZSBjYW5vbmljYWwgZm9ybSBzdG9yZWQgYW5kIHVzZWQgYnkgTWVkaWFXaWtpLlxuXHRcdCAqIEphdmFTY3JpcHQgdHJhbnNsYXRpb24gb2YgdGhlIHtAbGluayBodHRwczovL2dlcnJpdC53aWtpbWVkaWEub3JnL3IvcGx1Z2lucy9naXRpbGVzL21lZGlhd2lraS9jb3JlLysvOGViNmFjM2U4NGVhMzMxMmQzOTFjYTk2YzEyYzQ5ZTNhZDA3NTNiYi9pbmNsdWRlcy91dGlscy9JUC5waHAjMTMxfGBJUDo6c2FuaXRpemVJUCgpYH1cblx0XHQgKiBmdW5jdGlvbiBmcm9tIHRoZSBJUFV0aWxzIGxpYnJhcnkuICBBZGRyZXNzZXMgYXJlIHZlcmJvc2UsIHVwcGVyY2FzZSxcblx0XHQgKiBub3JtYWxpemVkLCBhbmQgZXhwYW5kZWQgdG8gOCB3b3Jkcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBhZGRyZXNzIC0gVGhlIElQdjYgYWRkcmVzcywgd2l0aCBvciB3aXRob3V0IENJRFIuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRzYW5pdGl6ZUlQdjY6IChhZGRyZXNzKSA9PiB7XG5cdFx0XHRhZGRyZXNzID0gYWRkcmVzcy50cmltKCk7XG5cdFx0XHRpZiAoYWRkcmVzcyA9PT0gJycpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIW13LnV0aWwuaXNJUHY2QWRkcmVzcyhhZGRyZXNzLCB0cnVlKSkge1xuXHRcdFx0XHRyZXR1cm4gYWRkcmVzczsgLy8gbm90aGluZyBlbHNlIHRvIGRvIGZvciBJUHY0IGFkZHJlc3NlcyBvciBpbnZhbGlkIG9uZXNcblx0XHRcdH1cblx0XHRcdC8vIFJlbW92ZSBhbnkgd2hpdGVzcGFjZXMsIGNvbnZlcnQgdG8gdXBwZXIgY2FzZVxuXHRcdFx0YWRkcmVzcyA9IGFkZHJlc3MudG9VcHBlckNhc2UoKTtcblx0XHRcdC8vIEV4cGFuZCB6ZXJvIGFiYnJldmlhdGlvbnNcblx0XHRcdGNvbnN0IGFiYnJldlBvcyA9IGFkZHJlc3MuaW5kZXhPZignOjonKTtcblx0XHRcdGlmIChhYmJyZXZQb3MgPiAtMSkge1xuXHRcdFx0XHQvLyBXZSBrbm93IHRoaXMgaXMgdmFsaWQgSVB2Ni4gRmluZCB0aGUgbGFzdCBpbmRleCBvZiB0aGVcblx0XHRcdFx0Ly8gYWRkcmVzcyBiZWZvcmUgYW55IENJRFIgbnVtYmVyIChlLmcuIFwiYTpiOmM6Oi8yNFwiKS5cblx0XHRcdFx0Y29uc3QgQ0lEUlN0YXJ0ID0gYWRkcmVzcy5pbmRleE9mKCcvJyk7XG5cdFx0XHRcdGNvbnN0IGFkZHJlc3NFbmQgPSBDSURSU3RhcnQgPT09IC0xID8gYWRkcmVzcy5sZW5ndGggLSAxIDogQ0lEUlN0YXJ0IC0gMTtcblx0XHRcdFx0Ly8gSWYgdGhlICc6OicgaXMgYXQgdGhlIGJlZ2lubmluZy4uLlxuXHRcdFx0XHRsZXQgcmVwZWF0O1xuXHRcdFx0XHRsZXQgZXh0cmE7XG5cdFx0XHRcdGxldCBwYWQ7XG5cdFx0XHRcdGlmIChhYmJyZXZQb3MgPT09IDApIHtcblx0XHRcdFx0XHRyZXBlYXQgPSAnMDonO1xuXHRcdFx0XHRcdGV4dHJhID0gYWRkcmVzcyA9PT0gJzo6JyA/ICcwJyA6ICcnOyAvLyBmb3IgdGhlIGFkZHJlc3MgJzo6J1xuXHRcdFx0XHRcdHBhZCA9IDk7IC8vIDcrMiAoZHVlIHRvICc6OicpXG5cdFx0XHRcdFx0Ly8gSWYgdGhlICc6OicgaXMgYXQgdGhlIGVuZC4uLlxuXHRcdFx0XHR9IGVsc2UgaWYgKGFiYnJldlBvcyA9PT0gYWRkcmVzc0VuZCAtIDEpIHtcblx0XHRcdFx0XHRyZXBlYXQgPSAnOjAnO1xuXHRcdFx0XHRcdGV4dHJhID0gJyc7XG5cdFx0XHRcdFx0cGFkID0gOTsgLy8gNysyIChkdWUgdG8gJzo6Jylcblx0XHRcdFx0XHQvLyBJZiB0aGUgJzo6JyBpcyBpbiB0aGUgbWlkZGxlLi4uXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVwZWF0ID0gJzowJztcblx0XHRcdFx0XHRleHRyYSA9ICc6Jztcblx0XHRcdFx0XHRwYWQgPSA4OyAvLyA2KzIgKGR1ZSB0byAnOjonKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IHJlcGxhY2VtZW50ID0gcmVwZWF0O1xuXHRcdFx0XHRwYWQgLT0gYWRkcmVzcy5zcGxpdCgnOicpLmxlbmd0aCAtIDE7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgcGFkOyBpKyspIHtcblx0XHRcdFx0XHRyZXBsYWNlbWVudCArPSByZXBlYXQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmVwbGFjZW1lbnQgKz0gZXh0cmE7XG5cdFx0XHRcdGFkZHJlc3MgPSBhZGRyZXNzLnJlcGxhY2UoJzo6JywgcmVwbGFjZW1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gUmVtb3ZlIGxlYWRpbmcgemVyb3MgZnJvbSBlYWNoIGJsb2MgYXMgbmVlZGVkXG5cdFx0XHRyZXR1cm4gYWRkcmVzcy5yZXBsYWNlKC8oXnw6KTArKFswLTlBLUZhLWZdezEsNH0pL2csICckMSQyJyk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBEZXRlcm1pbmUgaWYgdGhlIGdpdmVuIElQIGFkZHJlc3MgaXMgYSByYW5nZS4gIEp1c3QgY29uam9pbnNcblx0XHQgKiBgbXcudXRpbC5pc0lQQWRkcmVzc2Agd2l0aCBhbmQgd2l0aG91dCB0aGUgYGFsbG93QmxvY2tgIG9wdGlvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpcFxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufSAtIFRydWUgaWYgZ2l2ZW4gYSB2YWxpZCBJUCBhZGRyZXNzIHJhbmdlLCBmYWxzZSBvdGhlcndpc2UuXG5cdFx0ICovXG5cdFx0aXNSYW5nZTogKGlwKSA9PiB7XG5cdFx0XHRyZXR1cm4gbXcudXRpbC5pc0lQQWRkcmVzcyhpcCwgdHJ1ZSkgJiYgIW13LnV0aWwuaXNJUEFkZHJlc3MoaXApO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ2hlY2sgdGhhdCBhbiBJUCByYW5nZSBpcyB3aXRoaW4gdGhlIENJRFIgbGltaXRzLiAgTW9zdCBsaWtlbHkgdG8gYmUgdXNlZnVsXG5cdFx0ICogaW4gY29uanVuY3Rpb24gd2l0aCBgd2dSZWxldmFudFVzZXJOYW1lYC4gIENJRFIgbGltaXRzIGFyZSBoYXJkY29kZWQgYXMgLzE2XG5cdFx0ICogZm9yIElQdjQgYW5kIC8zMiBmb3IgSVB2Ni5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpcFxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufSAtIFRydWUgZm9yIHZhbGlkIHJhbmdlcyB3aXRoaW4gdGhlIENJRFIgbGltaXRzLFxuXHRcdCAqIG90aGVyd2lzZSBmYWxzZSAocmFuZ2VzIG91dHNpZGUgdGhlIGxpbWl0LCBzaW5nbGUgSVBzLCBub24tSVBzKS5cblx0XHQgKi9cblx0XHR2YWxpZENJRFI6IChpcCkgPT4ge1xuXHRcdFx0aWYgKE1vcmViaXRzLmlwLmlzUmFuZ2UoaXApKSB7XG5cdFx0XHRcdGNvbnN0IHN1Ym5ldCA9IE51bWJlci5wYXJzZUludChpcC5tYXRjaCgvXFwvKFxcZHsxLDN9KSQvKVsxXSwgMTApO1xuXHRcdFx0XHRpZiAoc3VibmV0KSB7XG5cdFx0XHRcdFx0Ly8gU2hvdWxkIGJlIHJlZHVuZGFudFxuXHRcdFx0XHRcdGlmIChtdy51dGlsLmlzSVB2NkFkZHJlc3MoaXAsIHRydWUpKSB7XG5cdFx0XHRcdFx0XHRpZiAoc3VibmV0ID49IDMyKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc3VibmV0ID49IDE2KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEdldCB0aGUgLzY0IHN1Ym5ldCBmb3IgYW4gSVB2NiBhZGRyZXNzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGlwdjYgLSBUaGUgSVB2NiBhZGRyZXNzLCB3aXRoIG9yIHdpdGhvdXQgYSBzdWJuZXQuXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW58c3RyaW5nfSAtIEZhbHNlIGlmIG5vdCBJUHY2IG9yIGJpZ2dlciB0aGFuIGEgNjQsXG5cdFx0ICogb3RoZXJ3aXNlIHRoZSAoc2FuaXRpemVkKSAvNjQgYWRkcmVzcy5cblx0XHQgKi9cblx0XHRnZXQ2NDogKGlwdjYpID0+IHtcblx0XHRcdGlmICghaXB2NiB8fCAhbXcudXRpbC5pc0lQdjZBZGRyZXNzKGlwdjYsIHRydWUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHN1Ym5ldE1hdGNoID0gaXB2Ni5tYXRjaCgvXFwvKFxcZHsxLDN9KSQvKTtcblx0XHRcdGlmIChzdWJuZXRNYXRjaCAmJiBOdW1iZXIucGFyc2VJbnQoc3VibmV0TWF0Y2hbMV0sIDEwKSA8IDY0KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlwdjYgPSBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjYoaXB2Nik7XG5cdFx0XHRjb25zdCBpcFJlZ2V4ID0gL14oKD86WzAtOUEtRl17MSw0fTopezR9KSg/OlswLTlBLUZdezEsNH06KXszfVswLTlBLUZdezEsNH0oPzpcXC9cXGR7MSwzfSk/JC87XG5cdFx0XHRyZXR1cm4gaXB2Ni5yZXBsYWNlKGlwUmVnZXgsICckMScuY29uY2F0KCcwOjA6MDowLzY0JykpO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBIZWxwZXIgZnVuY3Rpb25zIHRvIG1hbmlwdWxhdGUgc3RyaW5ncy5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5zdHJpbmdcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy5zdHJpbmcgPSB7XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dG9VcHBlckNhc2VGaXJzdENoYXI6IChzdHIpID0+IHtcblx0XHRcdHN0ciA9IHN0ci50b1N0cmluZygpO1xuXHRcdFx0cmV0dXJuIHN0ci5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dG9Mb3dlckNhc2VGaXJzdENoYXI6IChzdHIpID0+IHtcblx0XHRcdHN0ciA9IHN0ci50b1N0cmluZygpO1xuXHRcdFx0cmV0dXJuIHN0ci5zbGljZSgwLCAxKS50b0xvd2VyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2l2ZXMgYW4gYXJyYXkgb2Ygc3Vic3RyaW5ncyBvZiBgc3RyYCAtIHN0YXJ0aW5nIHdpdGggYHN0YXJ0YCBhbmRcblx0XHQgKiBlbmRpbmcgd2l0aCBgZW5kYCAtIHdoaWNoIGlzIG5vdCBpbiBgc2tpcGxpc3RgLiAgSW50ZW5kZWQgZm9yIHVzZVxuXHRcdCAqIG9uIHdpa2l0ZXh0IHdpdGggdGVtcGxhdGVzIG9yIGxpbmtzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGFydFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBlbmRcblx0XHQgKiBAcGFyYW0geyhzdHJpbmdbXXxzdHJpbmcpfSBbc2tpcGxpc3RdXG5cdFx0ICogQHJldHVybnMge3N0cmluZ1tdfVxuXHRcdCAqIEB0aHJvd3MgSWYgdGhlIGBzdGFydGAgYW5kIGBlbmRgIHN0cmluZ3MgYXJlbid0IG9mIHRoZSBzYW1lIGxlbmd0aC5cblx0XHQgKiBAdGhyb3dzIElmIGBza2lwbGlzdGAgaXNuJ3QgYW4gYXJyYXkgb3Igc3RyaW5nXG5cdFx0ICovXG5cdFx0c3BsaXRXZWlnaHRlZEJ5S2V5czogKHN0ciwgc3RhcnQsIGVuZCwgc2tpcGxpc3QpID0+IHtcblx0XHRcdGlmIChzdGFydC5sZW5ndGggIT09IGVuZC5sZW5ndGgpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdzdGFydCBtYXJrZXIgYW5kIGVuZCBtYXJrZXIgbXVzdCBiZSBvZiB0aGUgc2FtZSBsZW5ndGgnKTtcblx0XHRcdH1cblx0XHRcdGxldCBsZXZlbCA9IDA7XG5cdFx0XHRsZXQgaW5pdGlhbCA9IG51bGw7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBbXTtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShza2lwbGlzdCkpIHtcblx0XHRcdFx0aWYgKHNraXBsaXN0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRza2lwbGlzdCA9IFtdO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBza2lwbGlzdCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRza2lwbGlzdCA9IFtza2lwbGlzdF07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbm9uLWFwcGxpY2FibGUgc2tpcGxpc3QgcGFyYW1ldGVyJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBza2lwbGlzdCkge1xuXHRcdFx0XHRcdGlmIChzdHIuc2xpY2UoaSwgaSArIGVsZW1lbnQubGVuZ3RoKSA9PT0gZWxlbWVudCkge1xuXHRcdFx0XHRcdFx0aSArPSBlbGVtZW50Lmxlbmd0aCAtIDE7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0ci5zbGljZShpLCBpICsgc3RhcnQubGVuZ3RoKSA9PT0gc3RhcnQpIHtcblx0XHRcdFx0XHRpZiAoaW5pdGlhbCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0aW5pdGlhbCA9IGk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCsrbGV2ZWw7XG5cdFx0XHRcdFx0aSArPSBzdGFydC5sZW5ndGggLSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHN0ci5zbGljZShpLCBpICsgZW5kLmxlbmd0aCkgPT09IGVuZCkge1xuXHRcdFx0XHRcdC0tbGV2ZWw7XG5cdFx0XHRcdFx0aSArPSBlbmQubGVuZ3RoIC0gMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWxldmVsICYmIGluaXRpYWwgIT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXN1bHQucHVzaChzdHIuc2xpY2UoaW5pdGlhbCwgaSArIDEpKTtcblx0XHRcdFx0XHRpbml0aWFsID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEZvcm1hdHMgZnJlZWZvcm0gXCJyZWFzb25cIiAoZnJvbSBhIHRleHRhcmVhKSBmb3IgZGVsZXRpb24vb3RoZXJcblx0XHQgKiB0ZW1wbGF0ZXMgdGhhdCBhcmUgZ29pbmcgdG8gYmUgc3Vic3RpdHV0ZWQsIChlLmcuIFBST0QsIFhGRCwgUlBQKS5cblx0XHQgKiBIYW5kbGVzIGB8YCBvdXRzaWRlIGEgbm93aWtpIHRhZy5cblx0XHQgKiBPcHRpb25hbGx5LCBhbHNvIGFkZHMgYSBzaWduYXR1cmUgaWYgbm90IHByZXNlbnQgYWxyZWFkeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthZGRTaWddXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRmb3JtYXRSZWFzb25UZXh0OiAoc3RyLCBhZGRTaWcpID0+IHtcblx0XHRcdGxldCByZWFzb24gPSAoc3RyIHx8ICcnKS50b1N0cmluZygpLnRyaW0oKTtcblx0XHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKHJlYXNvbik7XG5cdFx0XHR1bmJpbmRlci51bmJpbmQoJzxubycuY29uY2F0KCd3aWtpJywgJz4nKSwgJzwvbm8nLmNvbmNhdCgnd2lraScsICc+JykpO1xuXHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZSgvXFx8L2csICd7eycuY29uY2F0KCdzdWJzdDonLCAnIX19JykpO1xuXHRcdFx0cmVhc29uID0gdW5iaW5kZXIucmViaW5kKCk7XG5cdFx0XHRpZiAoYWRkU2lnKSB7XG5cdFx0XHRcdGNvbnN0IHNpZyA9ICd+ficuY29uY2F0KCd+ficpO1xuXHRcdFx0XHRjb25zdCBzaWdJbmRleCA9IHJlYXNvbi5sYXN0SW5kZXhPZihzaWcpO1xuXHRcdFx0XHRpZiAoc2lnSW5kZXggPT09IC0xIHx8IHNpZ0luZGV4ICE9PSByZWFzb24ubGVuZ3RoIC0gc2lnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJlYXNvbiArPSBgICR7c2lnfWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZWFzb24udHJpbSgpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRm9ybWF0cyBhIFwicmVhc29uXCIgKGZyb20gYSB0ZXh0YXJlYSkgZm9yIGluY2x1c2lvbiBpbiBhIHVzZXJzcGFjZVxuXHRcdCAqIGxvZy4gIFJlcGxhY2VzIG5ld2xpbmVzIHdpdGgge3tQYn19LCBhbmQgYWRkcyBhbiBleHRyYSBgI2AgYmVmb3JlXG5cdFx0ICogbGlzdCBpdGVtcyBmb3IgcHJvcGVyIGZvcm1hdHRpbmcuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRmb3JtYXRSZWFzb25Gb3JMb2c6IChzdHIpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHN0clxuXHRcdFx0XHRcdC8vIGhhbmRsZSBsaW5lIGJyZWFrcywgd2hpY2ggb3RoZXJ3aXNlIGJyZWFrIG51bWJlcmluZ1xuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXG4rL2csICd7e3BifX0nKVxuXHRcdFx0XHRcdC8vIHB1dCBhbiBleHRyYSAjIGluIGZyb250IGJlZm9yZSBidWxsZXRlZCBvciBudW1iZXJlZCBsaXN0IGl0ZW1zXG5cdFx0XHRcdFx0LnJlcGxhY2UoL14oIyspL2dtLCAnIyQxJylcblx0XHRcdFx0XHQucmVwbGFjZSgvXihcXCorKS9nbSwgJyMkMScpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogTGlrZSBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKClgLCBidXQgZXNjYXBlcyBhbnkgZG9sbGFyIHNpZ25zIGluXG5cdFx0ICogdGhlIHJlcGxhY2VtZW50IHN0cmluZy4gIFVzZWZ1bCB3aGVuIHRoZSB0aGUgcmVwbGFjZW1lbnQgc3RyaW5nIGlzXG5cdFx0ICogYXJiaXRyYXJ5LCBzdWNoIGFzIGEgdXNlcm5hbWUgb3IgZnJlZWZvcm0gdXNlciBpbnB1dCwgYW5kIGNvdWxkXG5cdFx0ICogY29udGFpbiBkb2xsYXIgc2lnbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gVGV4dCBpbiB3aGljaCB0byByZXBsYWNlLlxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSBwYXR0ZXJuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VtZW50XG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRzYWZlUmVwbGFjZTogKHN0cmluZywgcGF0dGVybiwgcmVwbGFjZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiBzdHJpbmcucmVwbGFjZShwYXR0ZXJuLCByZXBsYWNlbWVudC5yZXBsYWNlKC9cXCQvZywgJyQkJCQnKSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBEZXRlcm1pbmUgaWYgdGhlIHVzZXItcHJvdmlkZWQgZXhwaXJhdGlvbiB3aWxsIGJlIGNvbnNpZGVyZWQgYW5cblx0XHQgKiBpbmZpbml0ZS1sZW5ndGggYnkgTVcuXG5cdFx0ICpcblx0XHQgKiBAc2VlIHtAbGluayBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvVDY4NjQ2fVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGV4cGlyeVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGlzSW5maW5pdHk6IChleHBpcnkpID0+IHtcblx0XHRcdHJldHVybiBbJ2luZGVmaW5pdGUnLCAnaW5maW5pdHknLCAnaW5maW5pdGUnLCAnbmV2ZXInXS5pbmNsdWRlcyhleHBpcnkpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRXNjYXBlcyBhIHN0cmluZyB0byBiZSB1c2VkIGluIGEgUmVnRXhwLCByZXBsYWNpbmcgc3BhY2VzIGFuZFxuXHRcdCAqIHVuZGVyc2NvcmVzIHdpdGggYFtfIF1gIGFzIHRoZXkgYXJlIG9mdGVuIGVxdWl2YWxlbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFN0cmluZyB0byBiZSBlc2NhcGVkLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IC0gVGhlIGVzY2FwZWQgdGV4dC5cblx0XHQgKi9cblx0XHRlc2NhcGVSZWdFeHA6ICh0ZXh0KSA9PiB7XG5cdFx0XHRyZXR1cm4gbXcudXRpbC5lc2NhcGVSZWdFeHAodGV4dCkucmVwbGFjZSgvIHxfL2csICdbXyBdJyk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBmb3JtYXRUaW1lXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IHRpbWUgVGhlIHN0cmluZyB0byBmb3JhbXRcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGZvcm1hdFRpbWU6ICh0aW1lKSA9PiB7XG5cdFx0XHRsZXQgbTtcblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKnNlYyhvbmQpP3M/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGAke21bMV1956eSYDtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKm1pbih1dGUpP3M/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGAke21bMV195YiGYDtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKmhvdXJzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBtWzFdICsgd2luZG93LndnVUxTKCflsI/ml7YnLCAn5bCP5pmCJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccypkYXlzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBgJHttWzFdfeWkqWA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyp3ZWVrcz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gbVsxXSArIHdpbmRvdy53Z1VMUygn5ZGoJywgJ+mAsScpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqbW9udGhzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBtWzFdICsgd2luZG93LndnVUxTKCfkuKrmnIgnLCAn5YCL5pyIJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyp5ZWFycz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7bVsxXX3lubRgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKE1vcmViaXRzLnN0cmluZy5pc0luZmluaXR5KHRpbWUudHJpbSgpKSkge1xuXHRcdFx0XHRyZXR1cm4gd2luZG93LndnVUxTKCfml6DpmZDmnJ8nLCAn54Sh6ZmQ5pyfJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGltZTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEFwcGVuZCBwdW5jdHVhdGlvbiB0byBhIHN0cmluZyB3aGVuIGl0J3MgbWlzc2luZ1xuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBwdW5jdHVhdGlvblxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0YXBwZW5kUHVuY3R1YXRpb246IChzdHIsIHB1bmN0dWF0aW9uKSA9PiB7XG5cdFx0XHRpZiAocHVuY3R1YXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRwdW5jdHVhdGlvbiA9ICfjgIInO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHN0ci5zZWFyY2goL1suPyE744CC77yf77yB77ybXSQvKSA9PT0gLTEpIHtcblx0XHRcdFx0c3RyICs9IHB1bmN0dWF0aW9uO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0cjtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogSGVscGVyIGZ1bmN0aW9ucyB0byBtYW5pcHVsYXRlIGFycmF5cy5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5hcnJheVxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLmFycmF5ID0ge1xuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBkdXBsaWNhdGVkIGl0ZW1zIGZyb20gYW4gYXJyYXkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0XHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgY29weSBvZiB0aGUgYXJyYXkgd2l0aCBkdXBsaWNhdGVzIHJlbW92ZWQuXG5cdFx0ICogQHRocm93cyBXaGVuIHByb3ZpZGVkIGEgbm9uLWFycmF5LlxuXHRcdCAqL1xuXHRcdHVuaXE6IChhcnIpID0+IHtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Egbm9uLWFycmF5IG9iamVjdCBwYXNzZWQgdG8gTW9yZWJpdHMuYXJyYXkudW5pcScpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGFyci5maWx0ZXIoKGl0ZW0sIGlkeCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YoaXRlbSkgPT09IGlkeDtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIG5vbi1kdXBsaWNhdGVkIGl0ZW1zIGZyb20gYW4gYXJyYXkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0XHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgY29weSBvZiB0aGUgYXJyYXkgd2l0aCB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgZWFjaCB2YWx1ZVxuXHRcdCAqIHJlbW92ZWQ7IHN1YnNlcXVlbnQgaW5zdGFuY2VzIG9mIHRob3NlIHZhbHVlcyAoZHVwbGljYXRlcykgcmVtYWluLlxuXHRcdCAqIEB0aHJvd3MgV2hlbiBwcm92aWRlZCBhIG5vbi1hcnJheS5cblx0XHQgKi9cblx0XHRkdXBzOiAoYXJyKSA9PiB7XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBIG5vbi1hcnJheSBvYmplY3QgcGFzc2VkIHRvIE1vcmViaXRzLmFycmF5LmR1cHMnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBhcnIuZmlsdGVyKChpdGVtLCBpZHgpID0+IHtcblx0XHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKGl0ZW0pICE9PSBpZHg7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEJyZWFrIHVwIGFuIGFycmF5IGludG8gc21hbGxlciBhcnJheXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSAtIFNpemUgb2YgZWFjaCBjaHVuayAoZXhjZXB0IHRoZSBsYXN0LCB3aGljaCBjb3VsZCBiZSBkaWZmZXJlbnQpLlxuXHRcdCAqIEByZXR1cm5zIHtBcnJheVtdfSBBbiBhcnJheSBjb250YWluaW5nIHRoZSBzbWFsbGVyLCBjaHVua2VkIGFycmF5cy5cblx0XHQgKiBAdGhyb3dzIFdoZW4gcHJvdmlkZWQgYSBub24tYXJyYXkuXG5cdFx0ICovXG5cdFx0Y2h1bms6IChhcnIsIHNpemUpID0+IHtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Egbm9uLWFycmF5IG9iamVjdCBwYXNzZWQgdG8gTW9yZWJpdHMuYXJyYXkuY2h1bmsnKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicgfHwgc2l6ZSA8PSAwKSB7XG5cdFx0XHRcdC8vIHByZXR0eSBpbXBvc3NpYmxlIHRvIGRvIGFueXRoaW5nIDopXG5cdFx0XHRcdHJldHVybiBbYXJyXTsgLy8gd2UgcmV0dXJuIGFuIGFycmF5IGNvbnNpc3Rpbmcgb2YgdGhpcyBhcnJheS5cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbnVtQ2h1bmtzID0gTWF0aC5jZWlsKGFyci5sZW5ndGggLyBzaXplKTtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb20oe1xuXHRcdFx0XHRsZW5ndGg6IG51bUNodW5rcyxcblx0XHRcdH0pO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBudW1DaHVua3M7IGkrKykge1xuXHRcdFx0XHRyZXN1bHRbaV0gPSBhcnIuc2xpY2UoaSAqIHNpemUsIChpICsgMSkgKiBzaXplKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIFV0aWxpdGllcyB0byBlbmhhbmNlIHNlbGVjdDIgbWVudXMuIFNlZSB0d2lua2xld2FybiwgdHdpbmtsZWJsb2NrXG5cdCAqIGZvciBzYW1wbGUgdXNhZ2VzLlxuXHQgKlxuXHQgKiBAc2VlIHtAbGluayBodHRwczovL3NlbGVjdDIub3JnL31cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5zZWxlY3QyXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAcmVxdWlyZXMganF1ZXJ5LnNlbGVjdDJcblx0ICovXG5cdE1vcmViaXRzLnNlbGVjdDIgPSB7XG5cdFx0bWF0Y2hlcnM6IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQ3VzdG9tIG1hdGNoZXIgaW4gd2hpY2ggaWYgdGhlIG9wdGdyb3VwIG5hbWUgbWF0Y2hlcywgYWxsIG9wdGlvbnMgaW4gdGhhdFxuXHRcdFx0ICogZ3JvdXAgYXJlIHNob3duLCBsaWtlIGluIGpxdWVyeS5jaG9zZW4uXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHsqfSBwYXJhbXNcblx0XHRcdCAqIEBwYXJhbSB7Kn0gZGF0YVxuXHRcdFx0ICovXG5cdFx0XHRvcHRncm91cEZ1bGw6IChwYXJhbXMsIGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxNYXRjaGVyID0gJC5mbi5zZWxlY3QyLmRlZmF1bHRzLmRlZmF1bHRzLm1hdGNoZXI7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsTWF0Y2hlcihwYXJhbXMsIGRhdGEpO1xuXHRcdFx0XHRpZiAocmVzdWx0ICYmIHBhcmFtcy50ZXJtICYmIGRhdGEudGV4dC50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHBhcmFtcy50ZXJtLnRvVXBwZXJDYXNlKCkpKSB7XG5cdFx0XHRcdFx0cmVzdWx0LmNoaWxkcmVuID0gZGF0YS5jaGlsZHJlbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogQ3VzdG9tIG1hdGNoZXIgdGhhdCBtYXRjaGVzIGZyb20gdGhlIGJlZ2lubmluZyBvZiB3b3JkcyBvbmx5LlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7Kn0gcGFyYW1zXG5cdFx0XHQgKiBAcGFyYW0geyp9IGRhdGFcblx0XHRcdCAqL1xuXHRcdFx0d29yZEJlZ2lubmluZzogKHBhcmFtcywgZGF0YSkgPT4ge1xuXHRcdFx0XHRjb25zdCBvcmlnaW5hbE1hdGNoZXIgPSAkLmZuLnNlbGVjdDIuZGVmYXVsdHMuZGVmYXVsdHMubWF0Y2hlcjtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gb3JpZ2luYWxNYXRjaGVyKHBhcmFtcywgZGF0YSk7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQhcGFyYW1zLnRlcm0gfHxcblx0XHRcdFx0XHQocmVzdWx0ICYmIG5ldyBSZWdFeHAoYFxcXFxiJHttdy51dGlsLmVzY2FwZVJlZ0V4cChwYXJhbXMudGVybSl9YCwgJ2knKS50ZXN0KHJlc3VsdC50ZXh0KSlcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBVbmRlcmxpbmUgbWF0Y2hlZCBwYXJ0IG9mIG9wdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IGRhdGFcblx0XHQgKi9cblx0XHRoaWdobGlnaHRTZWFyY2hNYXRjaGVzOiAoZGF0YSkgPT4ge1xuXHRcdFx0Y29uc3Qgc2VhcmNoVGVybSA9IE1vcmViaXRzLnNlbGVjdDJTZWFyY2hRdWVyeTtcblx0XHRcdGlmICghc2VhcmNoVGVybSB8fCBkYXRhLmxvYWRpbmcpIHtcblx0XHRcdFx0cmV0dXJuIGRhdGEudGV4dDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGlkeCA9IGRhdGEudGV4dC50b1VwcGVyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpKTtcblx0XHRcdGlmIChpZHggPCAwKSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLnRleHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJCgnPHNwYW4+JykuYXBwZW5kKFxuXHRcdFx0XHRkYXRhLnRleHQuc2xpY2UoMCwgaWR4KSxcblx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHQuY3NzKCd0ZXh0LWRlY29yYXRpb24nLCAndW5kZXJsaW5lJylcblx0XHRcdFx0XHQudGV4dChkYXRhLnRleHQuc2xpY2UoaWR4LCBpZHggKyBzZWFyY2hUZXJtLmxlbmd0aCkpLFxuXHRcdFx0XHRkYXRhLnRleHQuc2xpY2UoaWR4ICsgc2VhcmNoVGVybS5sZW5ndGgpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogSW50ZXJjZXB0IHF1ZXJ5IGFzIGl0IGlzIGhhcHBlbmluZywgZm9yIHVzZSBpbiBoaWdobGlnaHRTZWFyY2hNYXRjaGVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsqfSBwYXJhbXNcblx0XHQgKi9cblx0XHRxdWVyeUludGVyY2VwdG9yOiAocGFyYW1zKSA9PiB7XG5cdFx0XHRNb3JlYml0cy5zZWxlY3QyU2VhcmNoUXVlcnkgPSBwYXJhbXMgJiYgcGFyYW1zLnRlcm07XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBPcGVuIGRyb3Bkb3duIGFuZCBiZWdpbiBzZWFyY2ggd2hlbiB0aGUgYC5zZWxlY3QyLXNlbGVjdGlvbmAgaGFzXG5cdFx0ICogZm9jdXMgYW5kIGEga2V5IGlzIHByZXNzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2XG5cdFx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3NlbGVjdDIvc2VsZWN0Mi9pc3N1ZXMvMzI3OSNpc3N1ZWNvbW1lbnQtNDQyNTI0MTQ3fVxuXHRcdCAqL1xuXHRcdGF1dG9TdGFydDogKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYud2hpY2ggPCA0OCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgdGFyZ2V0ID0gJChldi50YXJnZXQpLmNsb3Nlc3QoJy5zZWxlY3QyLWNvbnRhaW5lcicpO1xuXHRcdFx0aWYgKCF0YXJnZXQubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRhcmdldCA9IHRhcmdldC5wcmV2KCk7XG5cdFx0XHR0YXJnZXQuc2VsZWN0Mignb3BlbicpO1xuXHRcdFx0Y29uc3Qgc2VhcmNoID0gdGFyZ2V0LmRhdGEoJ3NlbGVjdDInKS5kcm9wZG93bi4kc2VhcmNoIHx8IHRhcmdldC5kYXRhKCdzZWxlY3QyJykuc2VsZWN0aW9uLiRzZWFyY2g7XG5cdFx0XHQvLyBVc2UgRE9NIC5mb2N1cygpIHRvIHdvcmsgYXJvdW5kIGEgalF1ZXJ5IDMuNi4wIHJlZ3Jlc3Npb24gKGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvaXNzdWVzLzU5OTMpXG5cdFx0XHRzZWFyY2hbMF0uZm9jdXMoKTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogVGVtcG9yYXJpbHkgaGlkZSBhIHBhcnQgb2YgYSBzdHJpbmcgd2hpbGUgcHJvY2Vzc2luZyB0aGUgcmVzdCBvZiBpdC5cblx0ICogVXNlZCBieSB7QGxpbmsgTW9yZWJpdHMud2lraXRleHQucGFnZSNjb21tZW50T3V0SW1hZ2V8TW9yZWJpdHMud2lraXRleHQucGFnZS5jb21tZW50T3V0SW1hZ2V9LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgaW5pdGlhbCB0ZXh0IHRvIHByb2Nlc3MuXG5cdCAqIEBleGFtcGxlIGNvbnN0IHUgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIoJ0hlbGxvIHdvcmxkIDwhLS0gd29ybGQgLS0+IHdvcmxkJyk7XG5cdCAqIHUudW5iaW5kKCc8IS0tJywgJy0tPicpOyAvLyB0ZXh0IGluc2lkZSBjb21tZW50IHJlbWFpbnMgaW50YWN0XG5cdCAqIHUuY29udGVudCA9IHUuY29udGVudC5yZXBsYWNlKC93b3JsZC9nLCAnZWFydGgnKTtcblx0ICogdS5yZWJpbmQoKTsgLy8gZ2l2ZXMgJ0hlbGxvIGVhcnRoIDwhLS0gd29ybGQgLS0+IGVhcnRoJ1xuXHQgKi9cblx0TW9yZWJpdHMudW5iaW5kZXIgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdFx0aWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBzdHJpbmcnKTtcblx0XHR9XG5cdFx0LyoqIFRoZSB0ZXh0IGJlaW5nIHByb2Nlc3NlZC4gKi9cblx0XHR0aGlzLmNvbnRlbnQgPSBzdHJpbmc7XG5cdFx0dGhpcy5jb3VudGVyID0gMDtcblx0XHR0aGlzLmhpc3RvcnkgPSB7fTtcblx0XHR0aGlzLnByZWZpeCA9IGAlVU5JUTo6JHtNYXRoLnJhbmRvbSgpfTo6YDtcblx0XHR0aGlzLnBvc3RmaXggPSAnOjpVTklRJSc7XG5cdH07XG5cdE1vcmViaXRzLnVuYmluZGVyLnByb3RvdHlwZSA9IHtcblx0XHQvKipcblx0XHQgKiBIaWRlIHRoZSByZWdpb24gZW5jYXBzdWxhdGVkIGJ5IHRoZSBgcHJlZml4YCBhbmQgYHBvc3RmaXhgIGZyb21cblx0XHQgKiBzdHJpbmcgcHJvY2Vzc2luZy4gIGBwcmVmaXhgIGFuZCBgcG9zdGZpeGAgd2lsbCBiZSB1c2VkIGluIGFcblx0XHQgKiBSZWdFeHAsIHNvIGl0ZW1zIHRoYXQgbmVlZCBlc2NhcGluZyBzaG91bGQgYmUgdXNlIGBcXFxcYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcG9zdGZpeFxuXHRcdCAqIEB0aHJvd3MgSWYgZWl0aGVyIGBwcmVmaXhgIG9yIGBwb3N0Zml4YCBpcyBtaXNzaW5nLlxuXHRcdCAqL1xuXHRcdHVuYmluZChwcmVmaXgsIHBvc3RmaXgpIHtcblx0XHRcdGlmICghcHJlZml4IHx8ICFwb3N0Zml4KSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQm90aCBwcmVmaXggYW5kIHBvc3RmaXggbXVzdCBiZSBwcm92aWRlZCcpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKGAke3ByZWZpeH0oW1xcXFxzXFxcXFNdKj8pJHtwb3N0Zml4fWAsICdnJyk7XG5cdFx0XHR0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQucmVwbGFjZShyZSwgTW9yZWJpdHMudW5iaW5kZXIuZ2V0Q2FsbGJhY2sodGhpcykpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVzdG9yZSB0aGUgaGlkZGVuIHBvcnRpb24gb2YgdGhlIGBjb250ZW50YCBzdHJpbmcuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcHJvY2Vzc2VkIG91dHB1dC5cblx0XHQgKi9cblx0XHRyZWJpbmQoKSB7XG5cdFx0XHRsZXQge2NvbnRlbnR9ID0gdGhpcztcblx0XHRcdGZvciAoY29uc3QgY3VycmVudCBpbiB0aGlzLmhpc3RvcnkpIHtcblx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHRoaXMuaGlzdG9yeSwgY3VycmVudCkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250ZW50ID0gY29udGVudC5yZXBsYWNlKGN1cnJlbnQsIHRoaXMuaGlzdG9yeVtjdXJyZW50XSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHR9LFxuXHRcdHByZWZpeDogbnVsbCxcblx0XHQvLyAlVU5JUTo6MC41OTU1OTgxNjQ0OTM4MzI0Ojpcblx0XHRwb3N0Zml4OiBudWxsLFxuXHRcdC8vIDo6VU5JUSVcblx0XHRjb250ZW50OiBudWxsLFxuXHRcdC8vIHN0cmluZ1xuXHRcdGNvdW50ZXI6IG51bGwsXG5cdFx0Ly8gMCsrXG5cdFx0aGlzdG9yeTogbnVsbCwgLy8ge31cblx0fTtcblx0LyoqXG5cdCAqIEBwYXJhbSB7dHlwZW9mIE1vcmViaXRzfSBzZWxmXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy51bmJpbmRlclxuXHQgKi9cblx0TW9yZWJpdHMudW5iaW5kZXIuZ2V0Q2FsbGJhY2sgPSAoc2VsZikgPT4ge1xuXHRcdHJldHVybiAobWF0Y2gpID0+IHtcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBzZWxmLnByZWZpeCArIHNlbGYuY291bnRlciArIHNlbGYucG9zdGZpeDtcblx0XHRcdHNlbGYuaGlzdG9yeVtjdXJyZW50XSA9IG1hdGNoO1xuXHRcdFx0KytzZWxmLmNvdW50ZXI7XG5cdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHR9O1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLmRhdGUgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQ3JlYXRlIGEgZGF0ZSBvYmplY3Qgd2l0aCBlbmhhbmNlZCBwcm9jZXNzaW5nIGNhcGFiaWxpdGllcywgYSBsYVxuXHQgKiB7QGxpbmsgaHR0cHM6Ly9tb21lbnRqcy5jb20vfG1vbWVudC5qc30uIE1lZGlhV2lraSB0aW1lc3RhbXAgZm9ybWF0IGlzIGFsc29cblx0ICogYWNjZXB0YWJsZSwgaW4gYWRkaXRpb24gdG8gZXZlcnl0aGluZyB0aGF0IEpTIERhdGUoKSBhY2NlcHRzLlxuXHQgKlxuXHQgKiBAcGFyYW0gey4uLmFueX0gYXJnc1xuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqL1xuXHRNb3JlYml0cy5kYXRlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHQvLyBDaGVjayBNZWRpYVdpa2kgZm9ybWF0c1xuXHRcdC8vIE11c3QgYmUgZmlyc3Qgc2luY2UgZmlyZWZveCBlcnJvbmVvdXNseSBhY2NlcHRzIHRoZSB0aW1lc3RhbXBcblx0XHQvLyBmb3JtYXQsIHNhbnMgdGltZXpvbmUgKFNlZSBhbHNvOiAjOTIxLCAjOTM2LCAjMTE3NCwgIzExODcpLCBhbmQgdGhlXG5cdFx0Ly8gMTQtZGlnaXQgc3RyaW5nIHdpbGwgYmUgaW50ZXJwcmV0ZWQgZGlmZmVyZW50bHkuXG5cdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRjb25zdCBbcGFyYW1dID0gYXJncztcblx0XHRcdGlmICgvXlxcZHsxNH0kLy50ZXN0KHBhcmFtKSkge1xuXHRcdFx0XHQvLyBZWVlZTU1EREhIbW1zc1xuXHRcdFx0XHRjb25zdCBkaWdpdE1hdGNoID0gLyhcXGR7NH0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8uZXhlYyhwYXJhbSk7XG5cdFx0XHRcdGlmIChkaWdpdE1hdGNoKSB7XG5cdFx0XHRcdFx0Ly8gLi4uLi4geWVhciAuLi4gbW9udGggLi4gZGF0ZSAuLi4gaG91ciAuLi4uIG1pbnV0ZSAuLi4uLiBzZWNvbmRcblx0XHRcdFx0XHR0aGlzLl9kID0gbmV3IERhdGUoXG5cdFx0XHRcdFx0XHRSZWZsZWN0LmFwcGx5KERhdGUuVVRDLCBudWxsLCBbXG5cdFx0XHRcdFx0XHRcdGRpZ2l0TWF0Y2hbMV0sXG5cdFx0XHRcdFx0XHRcdGRpZ2l0TWF0Y2hbMl0gLSAxLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzNdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzRdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzVdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzZdLFxuXHRcdFx0XHRcdFx0XSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gV2lraXRleHQgc2lnbmF0dXJlIHRpbWVzdGFtcFxuXHRcdFx0XHRjb25zdCBkYXRlUGFydHMgPSBNb3JlYml0cy5sMTBuLnNpZ25hdHVyZVRpbWVzdGFtcEZvcm1hdChwYXJhbSk7XG5cdFx0XHRcdGlmIChkYXRlUGFydHMpIHtcblx0XHRcdFx0XHR0aGlzLl9kID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgZGF0ZVBhcnRzKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCF0aGlzLl9kKSB7XG5cdFx0XHQvLyBUcnkgc3RhbmRhcmQgZGF0ZVxuXHRcdFx0dGhpcy5fZCA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoRGF0ZSwgW0RhdGUsIC4uLihBcnJheS5pc0FycmF5KGFyZ3MpID8gYXJncyA6IFthcmdzXSldKSkoKTtcblx0XHR9XG5cdFx0Ly8gU3RpbGwgbm8/XG5cdFx0aWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuXHRcdFx0bXcubG9nLndhcm4oJ0ludmFsaWQgTW9yZWJpdHMuZGF0ZSBpbml0aWFsaXNhdGlvbjonLCBhcmdzKTtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBMb2NhbGl6ZWQgc3RyaW5ncyBmb3IgZGF0ZSBwcm9jZXNzaW5nLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuZGF0ZVxuXHQgKiBAdHlwZSB7b2JqZWN0LjxzdHJpbmcsIHN0cmluZz59XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IG1vbnRoc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBtb250aHNTaG9ydFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBkYXlzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGRheXNTaG9ydFxuXHQgKiBAcHJvcGVydHkge29iamVjdC48c3RyaW5nLCBzdHJpbmc+fSByZWxhdGl2ZVRpbWVzXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEgPSB7XG5cdFx0Ly8gbWVzc2FnZSBuYW1lcyBoZXJlIGNvcnJlc3BvbmQgdG8gTWVkaWFXaWtpIG1lc3NhZ2UgbmFtZXNcblx0XHQvLyBObyBpMThuIGF0IHRoaXMgdGltZVxuXHRcdG1vbnRoczogWycx5pyIJywgJzLmnIgnLCAnM+aciCcsICc05pyIJywgJzXmnIgnLCAnNuaciCcsICc35pyIJywgJzjmnIgnLCAnOeaciCcsICcxMOaciCcsICcxMeaciCcsICcxMuaciCddLFxuXHRcdG1vbnRoc1Nob3J0OiBbJzHmnIgnLCAnMuaciCcsICcz5pyIJywgJzTmnIgnLCAnNeaciCcsICc25pyIJywgJzfmnIgnLCAnOOaciCcsICc55pyIJywgJzEw5pyIJywgJzEx5pyIJywgJzEy5pyIJ10sXG5cdFx0ZGF5czogWyfmmJ/mnJ/ml6UnLCAn5pif5pyf5LiAJywgJ+aYn+acn+S6jCcsICfmmJ/mnJ/kuIknLCAn5pif5pyf5ZubJywgJ+aYn+acn+S6lCcsICfmmJ/mnJ/lha0nXSxcblx0XHRkYXlzU2hvcnQ6IFsn5pelJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJ10sXG5cdFx0cmVsYXRpdmVUaW1lczoge1xuXHRcdFx0dGhpc0RheTogJ1vku4rlpKldQSBoaDptbScsXG5cdFx0XHRwcmV2RGF5OiAnW+aYqOWkqV1BIGhoOm1tJyxcblx0XHRcdG5leHREYXk6ICdb5piO5aSpXUEgaGg6bW0nLFxuXHRcdFx0dGhpc1dlZWs6ICdkZGRkQSBoaDptbScsXG5cdFx0XHRwYXN0V2VlazogJ1vkuIpdZGRkZEEgaGg6bW0nLFxuXHRcdFx0b3RoZXI6ICdZWVlZLU1NLUREJyxcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogTWFwIHVuaXRzIHdpdGggZ2V0dGVyL3NldHRlciBmdW5jdGlvbiBuYW1lcywgZm9yIGBhZGRgIGFuZCBgc3VidHJhY3RgXG5cdCAqIG1ldGhvZHMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5kYXRlXG5cdCAqIEB0eXBlIHtvYmplY3QuPHN0cmluZywgc3RyaW5nPn1cblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IHNlY29uZHNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IG1pbnV0ZXNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGhvdXJzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkYXlzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB3ZWVrc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gbW9udGhzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB5ZWFyc1xuXHQgKi9cblx0TW9yZWJpdHMuZGF0ZS51bml0TWFwID0ge1xuXHRcdHNlY29uZHM6ICdTZWNvbmRzJyxcblx0XHRtaW51dGVzOiAnTWludXRlcycsXG5cdFx0aG91cnM6ICdIb3VycycsXG5cdFx0ZGF5czogJ0RhdGUnLFxuXHRcdHdlZWtzOiAnV2VlaycsXG5cdFx0Ly8gTm90IGEgZnVuY3Rpb24gYnV0IGhhbmRsZWQgaW4gYGFkZGAgdGhyb3VnaCBjdW5uaW5nIHVzZSBvZiBtdWx0aXBsaWNhdGlvblxuXHRcdG1vbnRoczogJ01vbnRoJyxcblx0XHR5ZWFyczogJ0Z1bGxZZWFyJyxcblx0fTtcblx0TW9yZWJpdHMuZGF0ZS5wcm90b3R5cGUgPSB7XG5cdFx0LyoqIEByZXR1cm5zIHtib29sZWFufSAqL1xuXHRcdGlzVmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gIU51bWJlci5pc05hTih0aGlzLmdldFRpbWUoKSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAcGFyYW0geyhEYXRlfE1vcmViaXRzLmRhdGUpfSBkYXRlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0aXNCZWZvcmUoZGF0ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VGltZSgpIDwgZGF0ZS5nZXRUaW1lKCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAcGFyYW0geyhEYXRlfE1vcmViaXRzLmRhdGUpfSBkYXRlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0aXNBZnRlcihkYXRlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUaW1lKCkgPiBkYXRlLmdldFRpbWUoKTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldFVUQ01vbnRoTmFtZSgpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzW3RoaXMuZ2V0VVRDTW9udGgoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRVVENNb250aE5hbWVBYmJyZXYoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1Nob3J0W3RoaXMuZ2V0VVRDTW9udGgoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRNb250aE5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1t0aGlzLmdldE1vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0TW9udGhOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHNTaG9ydFt0aGlzLmdldE1vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0VVRDRGF5TmFtZSgpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEuZGF5c1t0aGlzLmdldFVUQ0RheSgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldFVUQ0RheU5hbWVBYmJyZXYoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNTaG9ydFt0aGlzLmdldFVUQ0RheSgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldERheU5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNbdGhpcy5nZXREYXkoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXREYXlOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5kYXlzU2hvcnRbdGhpcy5nZXREYXkoKV07XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBZGQgYSBnaXZlbiBudW1iZXIgb2YgbWludXRlcywgaG91cnMsIGRheXMsIHdlZWtzLCBtb250aHMsIG9yIHllYXJzIHRvIHRoZSBkYXRlLlxuXHRcdCAqIFRoaXMgaXMgZG9uZSBpbi1wbGFjZS4gVGhlIG1vZGlmaWVkIGRhdGUgb2JqZWN0IGlzIGFsc28gcmV0dXJuZWQsIGFsbG93aW5nIGNoYWluaW5nLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFNob3VsZCBiZSBhbiBpbnRlZ2VyLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB1bml0XG5cdFx0ICogQHRocm93cyBJZiBpbnZhbGlkIG9yIHVuc3VwcG9ydGVkIHVuaXQgaXMgZ2l2ZW4uXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLmRhdGV9XG5cdFx0ICovXG5cdFx0YWRkKG51bWJlciwgdW5pdCkge1xuXHRcdFx0bGV0IG51bSA9IE51bWJlci5wYXJzZUludChudW1iZXIsIDEwKTsgLy8gbm9ybWFsaXplXG5cdFx0XHRpZiAoTnVtYmVyLmlzTmFOKG51bSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBudW1iZXIgXCIke251bWJlcn1cIiBwcm92aWRlZC5gKTtcblx0XHRcdH1cblx0XHRcdHVuaXQgPSB1bml0LnRvTG93ZXJDYXNlKCk7IC8vIG5vcm1hbGl6ZVxuXHRcdFx0Y29uc3Qge3VuaXRNYXB9ID0gTW9yZWJpdHMuZGF0ZTtcblx0XHRcdGxldCB1bml0Tm9ybSA9IHVuaXRNYXBbdW5pdF0gfHwgdW5pdE1hcFtgJHt1bml0fXNgXTsgLy8gc28gdGhhdCBib3RoIHNpbmd1bGFyIGFuZCAgcGx1cmFsIGZvcm1zIHdvcmtcblx0XHRcdGlmICh1bml0Tm9ybSkge1xuXHRcdFx0XHQvLyBObyBidWlsdC1pbiB3ZWVrIGZ1bmN0aW9ucywgc28gcmF0aGVyIHRoYW4gYnVpbGQgb3V0IElTTydzIGdldFdlZWsvc2V0V2VlaywganVzdCBtdWx0aXBseVxuXHRcdFx0XHQvLyBQcm9iYWJseSBjYW4ndCBiZSB1c2VkIGZvciBKdWxpYW4tPkdyZWdvcmlhbiBjaGFuZ2VvdmVycywgZXRjLlxuXHRcdFx0XHRpZiAodW5pdE5vcm0gPT09ICdXZWVrJykge1xuXHRcdFx0XHRcdHVuaXROb3JtID0gJ0RhdGUnO1xuXHRcdFx0XHRcdG51bSAqPSA3O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXNbYHNldCR7dW5pdE5vcm19YF0odGhpc1tgZ2V0JHt1bml0Tm9ybX1gXSgpICsgbnVtKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdW5pdCBcIiR7dW5pdH1cIjogT25seSAke09iamVjdC5rZXlzKHVuaXRNYXApLmpvaW4oJywgJyl9IGFyZSBhbGxvd2VkLmApO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU3VidHJhY3RzIGEgZ2l2ZW4gbnVtYmVyIG9mIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCB3ZWVrcywgbW9udGhzLCBvciB5ZWFycyB0byB0aGUgZGF0ZS5cblx0XHQgKiBUaGlzIGlzIGRvbmUgaW4tcGxhY2UuIFRoZSBtb2RpZmllZCBkYXRlIG9iamVjdCBpcyBhbHNvIHJldHVybmVkLCBhbGxvd2luZyBjaGFpbmluZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBTaG91bGQgYmUgYW4gaW50ZWdlci5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pdFxuXHRcdCAqIEB0aHJvd3MgSWYgaW52YWxpZCBvciB1bnN1cHBvcnRlZCB1bml0IGlzIGdpdmVuLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5kYXRlfVxuXHRcdCAqL1xuXHRcdHN1YnRyYWN0KG51bWJlciwgdW5pdCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYWRkKC1udW1iZXIsIHVuaXQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRm9ybWF0IHRoZSBkYXRlIGludG8gYSBzdHJpbmcgcGVyIHRoZSBnaXZlbiBmb3JtYXQgc3RyaW5nLlxuXHRcdCAqIFJlcGxhY2VtZW50IHN5bnRheCBpcyBhIHN1YnNldCBvZiB0aGF0IGluIG1vbWVudC5qczpcblx0XHQgKlxuXHRcdCAqIHwgU3ludGF4IHwgT3V0cHV0IHxcblx0XHQgKiB8LS0tLS0tLS18LS0tLS0tLS18XG5cdFx0ICogfCBIIHwgSG91cnMgKDI0LWhvdXIpIHxcblx0XHQgKiB8IEhIIHwgSG91cnMgKDI0LWhvdXIsIHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgaCB8IEhvdXJzICgxMi1ob3VyKSB8XG5cdFx0ICogfCBoaCB8IEhvdXJzICgxMi1ob3VyLCBwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IEEgfCBBTSBvciBQTSB8XG5cdFx0ICogfCBtIHwgTWludXRlcyB8XG5cdFx0ICogfCBtbSB8IE1pbnV0ZXMgKHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgcyB8IFNlY29uZHMgfFxuXHRcdCAqIHwgc3MgfCBTZWNvbmRzIChwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IFNTUyB8IE1pbGxpc2Vjb25kcyBmcmFnbWVudCwgMyBkaWdpdHMgfFxuXHRcdCAqIHwgZCB8IERheSBudW1iZXIgb2YgdGhlIHdlZWsgKFN1bj0wKSB8XG5cdFx0ICogfCBkZGQgfCBBYmJyZXZpYXRlZCBkYXkgbmFtZSB8XG5cdFx0ICogfCBkZGRkIHwgRnVsbCBkYXkgbmFtZSB8XG5cdFx0ICogfCBEIHwgRGF0ZSB8XG5cdFx0ICogfCBERCB8IERhdGUgKHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgTSB8IE1vbnRoIG51bWJlciAoMS1pbmRleGVkKSB8XG5cdFx0ICogfCBNTSB8IE1vbnRoIG51bWJlciAoMS1pbmRleGVkLCBwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IE1NTSB8IEFiYnJldmlhdGVkIG1vbnRoIG5hbWUgfFxuXHRcdCAqIHwgTU1NTSB8IEZ1bGwgbW9udGggbmFtZSB8XG5cdFx0ICogfCBZIHwgWWVhciB8XG5cdFx0ICogfCBZWSB8IEZpbmFsIHR3byBkaWdpdHMgb2YgeWVhciAoMjAgZm9yIDIwMjAsIDQyIGZvciAxOTQyKSB8XG5cdFx0ICogfCBZWVlZIHwgWWVhciAoc2FtZSBhcyBgWWApIHxcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXRzdHIgLSBGb3JtYXQgdGhlIGRhdGUgaW50byBhIHN0cmluZywgdXNpbmdcblx0XHQgKiB0aGUgcmVwbGFjZW1lbnQgc3ludGF4LiAgVXNlIGBbYCBhbmQgYF1gIHRvIGVzY2FwZSBpdGVtcy4gIElmIG5vdFxuXHRcdCAqIHByb3ZpZGVkLCB3aWxsIHJldHVybiB0aGUgSVNPLTg2MDEtZm9ybWF0dGVkIHN0cmluZy5cblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKX0gW3pvbmU9c3lzdGVtXSAtIGBzeXN0ZW1gIChmb3IgYnJvd3Nlci1kZWZhdWx0IHRpbWUgem9uZSksXG5cdFx0ICogYHV0Y2AsIG9yIHNwZWNpZnkgYSB0aW1lIHpvbmUgYXMgbnVtYmVyIG9mIG1pbnV0ZXMgcmVsYXRpdmUgdG8gVVRDLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Zm9ybWF0KGZvcm1hdHN0ciwgem9uZSkge1xuXHRcdFx0aWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuXHRcdFx0XHRyZXR1cm4gJ0ludmFsaWQgZGF0ZSc7IC8vIFB1dCB0aGUgdHJ1dGggb3V0LCBwcmVmZXJhYmxlIHRvIFwiTmFOTmFOTmFuIE5hTjpOYU5cIiBvciB3aGF0ZXZlclxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdWRhdGUgPSB0aGlzO1xuXHRcdFx0Ly8gY3JlYXRlIGEgbmV3IGRhdGUgb2JqZWN0IHRoYXQgd2lsbCBjb250YWluIHRoZSBkYXRlIHRvIGRpc3BsYXkgYXMgc3lzdGVtIHRpbWVcblx0XHRcdGlmICh6b25lID09PSAndXRjJykge1xuXHRcdFx0XHR1ZGF0ZSA9IG5ldyBNb3JlYml0cy5kYXRlKHRoaXMuZ2V0VGltZSgpKS5hZGQodGhpcy5nZXRUaW1lem9uZU9mZnNldCgpLCAnbWludXRlcycpO1xuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygem9uZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Ly8gY29udmVydCB0byB1dGMsIHRoZW4gYWRkIHRoZSB1dGMgb2Zmc2V0IGdpdmVuXG5cdFx0XHRcdHVkYXRlID0gbmV3IE1vcmViaXRzLmRhdGUodGhpcy5nZXRUaW1lKCkpLmFkZCh0aGlzLmdldFRpbWV6b25lT2Zmc2V0KCkgKyB6b25lLCAnbWludXRlcycpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZGVmYXVsdCB0byBJU09TdHJpbmdcblx0XHRcdGlmICghZm9ybWF0c3RyKSB7XG5cdFx0XHRcdHJldHVybiB1ZGF0ZS50b0lTT1N0cmluZygpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFkID0gKG51bSwgbGVuKSA9PiB7XG5cdFx0XHRcdGxlbiB8fD0gMjsgLy8gVXAgdG8gbGVuZ3RoIG9mIDAwICsgMVxuXHRcdFx0XHRyZXR1cm4gYDAwJHtudW19YC50b1N0cmluZygpLnNsaWNlKDAgLSBsZW4pO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGgyNCA9IHVkYXRlLmdldEhvdXJzKCk7XG5cdFx0XHRjb25zdCBtID0gdWRhdGUuZ2V0TWludXRlcygpO1xuXHRcdFx0Y29uc3QgcyA9IHVkYXRlLmdldFNlY29uZHMoKTtcblx0XHRcdGNvbnN0IG1zID0gdWRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cdFx0XHRjb25zdCBEID0gdWRhdGUuZ2V0RGF0ZSgpO1xuXHRcdFx0Y29uc3QgTSA9IHVkYXRlLmdldE1vbnRoKCkgKyAxO1xuXHRcdFx0Y29uc3QgWSA9IHVkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRjb25zdCBoMTIgPSBoMjQgJSAxMiB8fCAxMjtcblx0XHRcdGNvbnN0IGFtT3JQbSA9IGgyNCA+PSAxMiA/ICfkuIvljYgnIDogJ+S4iuWNiCc7XG5cdFx0XHRjb25zdCByZXBsYWNlbWVudE1hcCA9IHtcblx0XHRcdFx0SEg6IHBhZChoMjQpLFxuXHRcdFx0XHRIOiBoMjQsXG5cdFx0XHRcdGhoOiBwYWQoaDEyKSxcblx0XHRcdFx0aDogaDEyLFxuXHRcdFx0XHRBOiBhbU9yUG0sXG5cdFx0XHRcdG1tOiBwYWQobSksXG5cdFx0XHRcdG0sXG5cdFx0XHRcdHNzOiBwYWQocyksXG5cdFx0XHRcdHMsXG5cdFx0XHRcdFNTUzogcGFkKG1zLCAzKSxcblx0XHRcdFx0ZGRkZDogdWRhdGUuZ2V0RGF5TmFtZSgpLFxuXHRcdFx0XHRkZGQ6IHVkYXRlLmdldERheU5hbWVBYmJyZXYoKSxcblx0XHRcdFx0ZDogdWRhdGUuZ2V0RGF5KCksXG5cdFx0XHRcdEREOiBwYWQoRCksXG5cdFx0XHRcdEQsXG5cdFx0XHRcdE1NTU06IHVkYXRlLmdldE1vbnRoTmFtZSgpLFxuXHRcdFx0XHRNTU06IHVkYXRlLmdldE1vbnRoTmFtZUFiYnJldigpLFxuXHRcdFx0XHRNTTogcGFkKE0pLFxuXHRcdFx0XHRNLFxuXHRcdFx0XHRZWVlZOiBZLFxuXHRcdFx0XHRZWTogcGFkKFkgJSAxMDApLFxuXHRcdFx0XHRZLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKGZvcm1hdHN0cik7IC8vIGVzY2FwZSBzdHVmZiBiZXR3ZWVuIFsuLi5dXG5cdFx0XHR1bmJpbmRlci51bmJpbmQoJ1xcXFxbJywgJ1xcXFxdJyk7XG5cdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKFxuXHRcdFx0XHQvKiBSZWdleCBub3Rlczpcblx0XHRcdFx0ICogZChkezIsM30pPyBtYXRjaGVzIGV4YWN0bHkgMSwgMyBvciA0IG9jY3VycmVuY2VzIG9mICdkJyAoJ2RkJyBpcyB0cmVhdGVkIGFzIGEgZG91YmxlIG1hdGNoIG9mICdkJylcblx0XHRcdFx0ICogWXsxLDJ9KFl7Mn0pPyBtYXRjaGVzIGV4YWN0bHkgMSwgMiBvciA0IG9jY3VycmVuY2VzIG9mICdZJ1xuXHRcdFx0XHQgKi9cblx0XHRcdFx0L0h7MSwyfXxoezEsMn18bXsxLDJ9fHN7MSwyfXxTU1N8ZChkezIsM30pP3xEezEsMn18TXsxLDR9fFl7MSwyfShZezJ9KT98QS9nLFxuXHRcdFx0XHQobWF0Y2gpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gcmVwbGFjZW1lbnRNYXBbbWF0Y2hdO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHVuYmluZGVyLnJlYmluZCgpLnJlcGxhY2UoL1xcWyguKj8pXFxdL2csICckMScpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2l2ZXMgYSByZWFkYWJsZSByZWxhdGl2ZSB0aW1lIHN0cmluZyBzdWNoIGFzIFwiWWVzdGVyZGF5IGF0IDY6NDMgUE1cIiBvciBcIkxhc3QgVGh1cnNkYXkgYXQgMTE6NDUgQU1cIi5cblx0XHQgKiBTaW1pbGFyIHRvIGBjYWxlbmRhcmAgaW4gbW9tZW50LmpzLCBidXQgd2l0aCB0aW1lIHpvbmUgc3VwcG9ydC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpfSBbem9uZT1zeXN0ZW1dIC0gJ3N5c3RlbScgKGZvciBicm93c2VyLWRlZmF1bHQgdGltZSB6b25lKSxcblx0XHQgKiAndXRjJyAoZm9yIFVUQyksIG9yIHNwZWNpZnkgYSB0aW1lIHpvbmUgYXMgbnVtYmVyIG9mIG1pbnV0ZXMgcGFzdCBVVEMuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRjYWxlbmRhcih6b25lKSB7XG5cdFx0XHQvLyBaZXJvIG91dCB0aGUgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgYW5kIG1pbGxpc2Vjb25kcyAtIGtlZXBpbmcgb25seSB0aGUgZGF0ZTtcblx0XHRcdC8vIGZpbmQgdGhlIGRpZmZlcmVuY2UuIE5vdGUgdGhhdCBzZXRIb3VycygpIHJldHVybnMgdGhlIHNhbWUgdGhpbmcgYXMgZ2V0VGltZSgpLlxuXHRcdFx0Y29uc3QgZGF0ZURpZmYgPSAobmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKSAtIG5ldyBEYXRlKHRoaXMpLnNldEhvdXJzKDAsIDAsIDAsIDApKSAvIDguNjRlNztcblx0XHRcdHN3aXRjaCAodHJ1ZSkge1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmID09PSAwOlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy50aGlzRGF5LCB6b25lKTtcblx0XHRcdFx0Y2FzZSBkYXRlRGlmZiA9PT0gMTpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMucHJldkRheSwgem9uZSk7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPiAwICYmIGRhdGVEaWZmIDwgNzpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMucGFzdFdlZWssIHpvbmUpO1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmID09PSAtMTpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMubmV4dERheSwgem9uZSk7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPCAwICYmIGRhdGVEaWZmID4gLTc6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLnRoaXNXZWVrLCB6b25lKTtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMub3RoZXIsIHpvbmUpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2V0IGEgcmVndWxhciBleHByZXNzaW9uIHRoYXQgbWF0Y2hlcyB3aWtpdGV4dCBzZWN0aW9uIHRpdGxlcywgc3VjaFxuXHRcdCAqIGFzIGA9PURlY2VtYmVyIDIwMTk9PWAgb3IgYD09PSBKYW4gMjAxOCA9PT1gLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge1JlZ0V4cH1cblx0XHQgKi9cblx0XHRtb250aEhlYWRlclJlZ2V4KCkge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBeKD09KylcXFxccyoke3RoaXMuZ2V0VVRDRnVsbFllYXIoKX3lubQoPzoke3RoaXMuZ2V0VVRDTW9udGhOYW1lKCl9fCR7dGhpcy5nZXRVVENNb250aE5hbWVBYmJyZXYoKX0pXFxcXHMqXFxcXDFgLFxuXHRcdFx0XHQnbWcnXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlcyBhIHdpa2l0ZXh0IHNlY3Rpb24gaGVhZGVyIHdpdGggdGhlIG1vbnRoIGFuZCB5ZWFyLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtsZXZlbD0yXSAtIEhlYWRlciBsZXZlbC4gIFBhc3MgMCBmb3IganVzdCB0aGUgdGV4dFxuXHRcdCAqIHdpdGggbm8gd2lraXRleHQgbWFya2VycyAoPT0pLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0bW9udGhIZWFkZXIobGV2ZWwpIHtcblx0XHRcdC8vIERlZmF1bHQgdG8gMiwgYnV0IGFsbG93IGZvciAwIG9yIHN0cmluZ3kgbnVtYmVyc1xuXHRcdFx0bGV2ZWwgPSBOdW1iZXIucGFyc2VJbnQobGV2ZWwsIDEwKTtcblx0XHRcdGxldmVsID0gTnVtYmVyLmlzTmFOKGxldmVsKSA/IDIgOiBsZXZlbDtcblx0XHRcdGNvbnN0IGhlYWRlciA9ICc9Jy5yZXBlYXQobGV2ZWwpO1xuXHRcdFx0Y29uc3QgdGV4dCA9IGAke3RoaXMuZ2V0VVRDRnVsbFllYXIoKX3lubQke3RoaXMuZ2V0VVRDTW9udGhOYW1lKCl9YDtcblx0XHRcdGlmIChoZWFkZXIubGVuZ3RoKSB7XG5cdFx0XHRcdC8vIHdpa2l0ZXh0LWZvcm1hdHRlZCBoZWFkZXJcblx0XHRcdFx0cmV0dXJuIGAke2hlYWRlcn0gJHt0ZXh0fSAke2hlYWRlcn1gO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRleHQ7IC8vIEp1c3QgdGhlIHN0cmluZ1xuXHRcdH0sXG5cdH07XG5cdC8vIEFsbG93IG5hdGl2ZSBEYXRlLnByb3RvdHlwZSBtZXRob2RzIHRvIGJlIHVzZWQgb24gTW9yZWJpdHMuZGF0ZSBvYmplY3RzXG5cdGZvciAoY29uc3QgZnVuYyBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhEYXRlLnByb3RvdHlwZSkpIHtcblx0XHQvLyBFeGNsdWRlIG1ldGhvZHMgdGhhdCBjb2xsaWRlIHdpdGggUGFnZVRyaWFnZSdzIERhdGUuanMgZXh0ZXJuYWwsIHdoaWNoIGNsb2JiZXJzIG5hdGl2ZSBEYXRlXG5cdFx0aWYgKCFbJ2FkZCcsICdnZXREYXlOYW1lJywgJ2dldE1vbnRoTmFtZSddLmluY2x1ZGVzKGZ1bmMpKSB7XG5cdFx0XHRNb3JlYml0cy5kYXRlLnByb3RvdHlwZVtmdW5jXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9kW2Z1bmNdKC4uLmFyZ3MpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIFZhcmlvdXMgb2JqZWN0cyBmb3Igd2lraSBlZGl0aW5nIGFuZCBBUEkgYWNjZXNzLCBpbmNsdWRpbmdcblx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSBhbmQge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0uXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMud2lraVxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLndpa2kgPSB7fTtcblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkIGluIGZhdm9yIG9mIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0IGFzIG9mIE5vdmVtYmVyIDIwMjBcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmlzUGFnZVJlZGlyZWN0ID0gKCkgPT4ge1xuXHRcdGNvbnNvbGUud2FybignTk9URTogTW9yZWJpdHMud2lraS5pc1BhZ2VSZWRpcmVjdCBoYXMgYmVlbiBkZXByZWNhdGVkLCB1c2UgTW9yZWJpdHMuaXNQYWdlUmVkaXJlY3QgaW5zdGVhZC4nKTtcblx0XHRyZXR1cm4gTW9yZWJpdHMuaXNQYWdlUmVkaXJlY3QoKTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZCAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0ID0gMDtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEB0eXBlIHtudW1iZXJ9XG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0ID0gMDtcblx0LyoqXG5cdCAqIERpc3BsYXkgbWVzc2FnZSBhbmQvb3IgcmVkaXJlY3QgdG8gcGFnZSB1cG9uIGNvbXBsZXRpb24gb2YgdGFza3MuXG5cdCAqXG5cdCAqIEV2ZXJ5IGNhbGwgdG8gTW9yZWJpdHMud2lraS5hcGkucG9zdCgpIHJlc3VsdHMgaW4gdGhlIGRpc3BhdGNoIG9mIGFuXG5cdCAqIGFzeW5jaHJvbm91cyBjYWxsYmFjay4gRWFjaCBjYWxsYmFjayBjYW4gaW4gdHVybiBtYWtlIGFuIGFkZGl0aW9uYWwgY2FsbCB0b1xuXHQgKiBNb3JlYml0cy53aWtpLmFwaS5wb3N0KCkgdG8gY29udGludWUgYSBwcm9jZXNzaW5nIHNlcXVlbmNlLiBBdCB0aGVcblx0ICogY29uY2x1c2lvbiBvZiB0aGUgZmluYWwgY2FsbGJhY2sgb2YgYSBwcm9jZXNzaW5nIHNlcXVlbmNlLCBpdCBpcyBub3Rcblx0ICogcG9zc2libGUgdG8gc2ltcGx5IHJldHVybiB0byB0aGUgb3JpZ2luYWwgY2FsbGVyIGJlY2F1c2UgdGhlcmUgaXMgbm8gY2FsbFxuXHQgKiBzdGFjayBsZWFkaW5nIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQuIEluc3RlYWQsXG5cdCAqIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KCkgaXMgY2FsbGVkIHRvIGRpc3BsYXkgdGhlIHJlc3VsdCB0b1xuXHQgKiB0aGUgdXNlciBhbmQgdG8gcGVyZm9ybSBhbiBvcHRpb25hbCBwYWdlIHJlZGlyZWN0LlxuXHQgKlxuXHQgKiBUaGUgZGV0ZXJtaW5hdGlvbiBvZiB3aGVuIHRvIGNhbGwgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoKSBpc1xuXHQgKiBtYW5hZ2VkIHRocm91Z2ggdGhlIGdsb2JhbHMgTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0IGFuZFxuXHQgKiBNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0LiBNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgaXNcblx0ICogaW5jcmVtZW50ZWQgYXQgdGhlIHN0YXJ0IG9mIGV2ZXJ5IE1vcmViaXRzLndpa2kuYXBpIGNhbGwgYW5kIGRlY3JlbWVudGVkXG5cdCAqIGFmdGVyIHRoZSBjb21wbGV0aW9uIG9mIGEgY2FsbGJhY2sgZnVuY3Rpb24uIElmIGEgY2FsbGJhY2sgZnVuY3Rpb24gZG9lc1xuXHQgKiBub3QgY3JlYXRlIGEgbmV3IE1vcmViaXRzLndpa2kuYXBpIG9iamVjdCBiZWZvcmUgZXhpdGluZywgaXQgaXMgdGhlIGZpbmFsXG5cdCAqIHN0ZXAgaW4gdGhlIHByb2Nlc3NpbmcgY2hhaW4gYW5kIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KCkgd2lsbFxuXHQgKiB0aGVuIGJlIGNhbGxlZC5cblx0ICpcblx0ICogT3B0aW9uYWxseSwgY2FsbGVycyBtYXkgdXNlIE1vcmViaXRzLndpa2kuYWRkQ2hlY2twb2ludCgpIHRvIGluZGljYXRlIHRoYXRcblx0ICogcHJvY2Vzc2luZyBpcyBub3QgY29tcGxldGUgdXBvbiB0aGUgY29uY2x1c2lvbiBvZiB0aGUgZmluYWwgY2FsbGJhY2tcblx0ICogZnVuY3Rpb24uICBUaGlzIGlzIHVzZWQgZm9yIGJhdGNoIG9wZXJhdGlvbnMuIFRoZSBlbmQgb2YgYSBiYXRjaCBpc1xuXHQgKiBzaWduYWxlZCBieSBjYWxsaW5nIE1vcmViaXRzLndpa2kucmVtb3ZlQ2hlY2twb2ludCgpLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3R5cGVvZiBNb3JlYml0c30gc2VsZlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQgPSAoc2VsZikgPT4ge1xuXHRcdGlmICgtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCA8PSAwICYmIE1vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQgPD0gMCkge1xuXHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoc2VsZik7XG5cdFx0fVxuXHR9O1xuXHQvLyBDaGFuZ2UgcGVyIGFjdGlvbiB3YW50ZWRcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50ID0gKCkgPT4ge1xuXHRcdGlmIChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ub3RpY2UpIHtcblx0XHRcdE1vcmViaXRzLnN0YXR1cy5hY3Rpb25Db21wbGV0ZWQoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlKTtcblx0XHR9XG5cdFx0aWYgKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0KSB7XG5cdFx0XHQvLyBpZiBpdCBpc24ndCBhIFVSTCwgbWFrZSBpdCBvbmUuIFRPRE86IFRoaXMgYnJlYWtzIG9uIHRoZSBhcnRpY2xlcyAnaHR0cDovLycsICdmdHA6Ly8nLCBhbmQgc2ltaWxhciBvbmVzLlxuXHRcdFx0aWYgKCEvXlxcdys6XFwvXFwvLy50ZXN0KE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0KSkge1xuXHRcdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCA9IG13LnV0aWwuZ2V0VXJsKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0KTtcblx0XHRcdFx0aWYgKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmZvbGxvd1JlZGlyZWN0ID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0ICs9ICc/cmVkaXJlY3Q9bm8nO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0bG9jYXRpb24gPSBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdDtcblx0XHRcdH0sIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnRpbWVPdXQpO1xuXHRcdH1cblx0fTtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnRpbWVPdXQgPVxuXHRcdHdpbmRvdy53cEFjdGlvbkNvbXBsZXRlZFRpbWVPdXQgPT09IHVuZGVmaW5lZCA/IDUwMDAgOiB3aW5kb3cud3BBY3Rpb25Db21wbGV0ZWRUaW1lT3V0O1xuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QgPSBudWxsO1xuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlID0gbnVsbDtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWRkQ2hlY2twb2ludCA9ICgpID0+IHtcblx0XHQrK01vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQ7XG5cdH07XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQgPSAoKSA9PiB7XG5cdFx0aWYgKC0tTW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdCA8PSAwICYmIE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCA8PSAwKSB7XG5cdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpO1xuXHRcdH1cblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpLmFwaSAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBBbiBlYXN5IHdheSB0byB0YWxrIHRvIHRoZSBNZWRpYVdpa2kgQVBJLiAgQWNjZXB0cyBlaXRoZXIganNvbiBvciB4bWxcblx0ICogKGRlZmF1bHQpIGZvcm1hdHM7IGlmIGpzb24gaXMgc2VsZWN0ZWQsIHdpbGwgZGVmYXVsdCB0byBgZm9ybWF0dmVyc2lvbj0yYFxuXHQgKiB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC4gIFNpbWlsYXJseSwgZW5mb3JjZXMgbmV3ZXIgYGVycm9yZm9ybWF0YHMsXG5cdCAqIGRlZmF1bHRpbmcgdG8gYGh0bWxgIGlmIHVuc3BlY2lmaWVkLiAgYHVzZWxhbmdgIGVuZm9yY2VkIHRvIHRoZSB3aWtpJ3Ncblx0ICogY29udGVudCBsYW5ndWFnZS5cblx0ICpcblx0ICogSW4gbmV3IGNvZGUsIHRoZSB1c2Ugb2YgdGhlIGxhc3QgMyBwYXJhbWV0ZXJzIHNob3VsZCBiZSBhdm9pZGVkLCBpbnN0ZWFkXG5cdCAqIHVzZSB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGkjc2V0U3RhdHVzRWxlbWVudHxzZXRTdGF0dXNFbGVtZW50KCl9IHRvIGJpbmRcblx0ICogdGhlIHN0YXR1cyBlbGVtZW50IChpZiBuZWVkZWQpIGFuZCB1c2UgYC50aGVuKClgIG9yIGAuY2F0Y2goKWAgb24gdGhlXG5cdCAqIHByb21pc2UgcmV0dXJuZWQgYnkgYHBvc3QoKWAsIHJhdGhlciB0aGFuIHNwZWNpZnkgdGhlIGBvblN1Y2Nlc3NgIG9yXG5cdCAqIGBvbkZhaWx1cmVgIGNhbGxiYWNrcy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW50QWN0aW9uIC0gVGhlIGN1cnJlbnQgYWN0aW9uIChyZXF1aXJlZCkuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBxdWVyeSAtIFRoZSBxdWVyeSAocmVxdWlyZWQpLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gcmVxdWVzdCBpcyBzdWNjZXNzZnVsLlxuXHQgKiBAcGFyYW0ge01vcmViaXRzLnN0YXR1c30gW3N0YXR1c0VsZW1lbnRdIC0gQSBNb3JlYml0cy5zdGF0dXMgb2JqZWN0IHRvIHVzZSBmb3Igc3RhdHVzIG1lc3NhZ2VzLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25FcnJvcl0gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCBpZiBhbiBlcnJvciBvY2N1cnMuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmFwaSA9IGZ1bmN0aW9uIChjdXJyZW50QWN0aW9uLCBxdWVyeSwgb25TdWNjZXNzLCBzdGF0dXNFbGVtZW50LCBvbkVycm9yKSB7XG5cdFx0dGhpcy5jdXJyZW50QWN0aW9uID0gY3VycmVudEFjdGlvbjtcblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XG5cdFx0dGhpcy5xdWVyeS5hc3NlcnQgPSAndXNlcic7XG5cdFx0Ly8gRW5mb3JjZSBuZXdlciBlcnJvciBmb3JtYXRzLCBwcmVmZXJyaW5nIGh0bWxcblx0XHRpZiAoIXF1ZXJ5LmVycm9yZm9ybWF0IHx8ICFbJ3dpa2l0ZXh0JywgJ3BsYWludGV4dCddLmluY2x1ZGVzKHF1ZXJ5LmVycm9yZm9ybWF0KSkge1xuXHRcdFx0dGhpcy5xdWVyeS5lcnJvcmZvcm1hdCA9ICdodG1sJztcblx0XHR9XG5cdFx0Ly8gRXhwbGljaXRseSB1c2UgdGhlIHdpa2kncyBjb250ZW50IGxhbmd1YWdlIHRvIG1pbmltaXplIGNvbmZ1c2lvbixcblx0XHQvLyBzZWUgIzExNzkgZm9yIGRpc2N1c3Npb25cblx0XHR0aGlzLnF1ZXJ5LnVzZWxhbmcgfHw9ICdjb250ZW50JzsgLy8gVXNlIHdnVXNlckxhbmd1YWdlIGZvciBwcmV2aWV3XG5cdFx0dGhpcy5xdWVyeS5lcnJvcmxhbmcgPSAndXNlbGFuZyc7XG5cdFx0dGhpcy5xdWVyeS5lcnJvcnN1c2Vsb2NhbCA9IDE7XG5cdFx0dGhpcy5vblN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0dGhpcy5vbkVycm9yID0gb25FcnJvcjtcblx0XHRpZiAoc3RhdHVzRWxlbWVudCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0dXNFbGVtZW50KHN0YXR1c0VsZW1lbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnN0YXRlbGVtID0gbmV3IE1vcmViaXRzLnN0YXR1cyhjdXJyZW50QWN0aW9uKTtcblx0XHR9XG5cdFx0Ly8gSlNPTiBpcyB1c2VkIHRocm91Z2hvdXQgTW9yZWJpdHMvVHdpbmtsZSwgYnV0IHhtbCByZW1haW5zIHRoZSBkZWZhdWx0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXHRcdGlmICghcXVlcnkuZm9ybWF0KSB7XG5cdFx0XHR0aGlzLnF1ZXJ5LmZvcm1hdCA9ICd4bWwnO1xuXHRcdH0gZWxzZSBpZiAocXVlcnkuZm9ybWF0ID09PSAnanNvbicgJiYgIXF1ZXJ5LmZvcm1hdHZlcnNpb24pIHtcblx0XHRcdHRoaXMucXVlcnkuZm9ybWF0dmVyc2lvbiA9ICcyJztcblx0XHR9IGVsc2UgaWYgKCFbJ3htbCcsICdqc29uJ10uaW5jbHVkZXMocXVlcnkuZm9ybWF0KSkge1xuXHRcdFx0dGhpcy5zdGF0ZWxlbS5lcnJvcignSW52YWxpZCBBUEkgZm9ybWF0OiBvbmx5IHhtbCBhbmQganNvbiBhcmUgc3VwcG9ydGVkLicpO1xuXHRcdH1cblx0XHQvLyBJZ25vcmUgdGFncyBmb3IgcXVlcmllcyBhbmQgbW9zdCBjb21tb24gdW5zdXBwb3J0ZWQgYWN0aW9ucywgcHJvZHVjZXMgd2FybmluZ3Ncblx0XHRpZiAocXVlcnkuYWN0aW9uICYmIFsncXVlcnknLCAnd2F0Y2gnXS5pbmNsdWRlcyhxdWVyeS5hY3Rpb24pKSB7XG5cdFx0XHRkZWxldGUgcXVlcnkudGFncztcblx0XHR9IGVsc2UgaWYgKCFxdWVyeS50YWdzICYmIG1vcmViaXRzV2lraUNoYW5nZVRhZykge1xuXHRcdFx0cXVlcnkudGFncyA9IG1vcmViaXRzV2lraUNoYW5nZVRhZztcblx0XHR9XG5cdH07XG5cdE1vcmViaXRzLndpa2kuYXBpLnByb3RvdHlwZSA9IHtcblx0XHRjdXJyZW50QWN0aW9uOiAnJyxcblx0XHRvblN1Y2Nlc3M6IG51bGwsXG5cdFx0b25FcnJvcjogbnVsbCxcblx0XHRwYXJlbnQ6IHdpbmRvdyxcblx0XHQvLyB1c2UgZ2xvYmFsIGNvbnRleHQgaWYgdGhlcmUgaXMgbm8gcGFyZW50IG9iamVjdFxuXHRcdHF1ZXJ5OiBudWxsLFxuXHRcdHJlc3BvbnNlOiBudWxsLFxuXHRcdHJlc3BvbnNlWE1MOiBudWxsLFxuXHRcdC8vIHVzZSBgcmVzcG9uc2VgIGluc3RlYWQ7IHJldGFpbmVkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXHRcdHN0YXRlbGVtOiBudWxsLFxuXHRcdC8vIHRoaXMgbm9uLXN0YW5kYXJkIG5hbWUga2VwdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0XHRzdGF0dXNUZXh0OiBudWxsLFxuXHRcdC8vIHJlc3VsdCByZWNlaXZlZCBmcm9tIHRoZSBBUEksIG5vcm1hbGx5IFwic3VjY2Vzc1wiIG9yIFwiZXJyb3JcIlxuXHRcdGVycm9yQ29kZTogbnVsbCxcblx0XHQvLyBzaG9ydCB0ZXh0IGVycm9yIGNvZGUsIGlmIGFueSwgYXMgZG9jdW1lbnRlZCBpbiB0aGUgTWVkaWFXaWtpIEFQSVxuXHRcdGVycm9yVGV4dDogbnVsbCxcblx0XHQvLyBmdWxsIGVycm9yIGRlc2NyaXB0aW9uLCBpZiBhbnlcblx0XHRiYWR0b2tlblJldHJ5OiBmYWxzZSxcblx0XHQvLyBzZXQgdG8gdHJ1ZSBpZiB0aGlzIG9uIGEgcmV0cnkgYXR0ZW1wdGVkIGFmdGVyIGEgYmFkdG9rZW4gZXJyb3Jcblx0XHQvKipcblx0XHQgKiBLZWVwIHRyYWNrIG9mIHBhcmVudCBvYmplY3QgZm9yIGNhbGxiYWNrcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Kn0gcGFyZW50XG5cdFx0ICovXG5cdFx0c2V0UGFyZW50KHBhcmVudCkge1xuXHRcdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0fSxcblx0XHQvKiogQHBhcmFtIHtNb3JlYml0cy5zdGF0dXN9IHN0YXR1c0VsZW1lbnQgKi9cblx0XHRzZXRTdGF0dXNFbGVtZW50KHN0YXR1c0VsZW1lbnQpIHtcblx0XHRcdHRoaXMuc3RhdGVsZW0gPSBzdGF0dXNFbGVtZW50O1xuXHRcdFx0dGhpcy5zdGF0ZWxlbS5zdGF0dXModGhpcy5jdXJyZW50QWN0aW9uKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENhcnJ5IG91dCB0aGUgcmVxdWVzdC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsZXJBamF4UGFyYW1ldGVycyAtIERvIG5vdCBzcGVjaWZ5IGEgcGFyYW1ldGVyIHVubGVzcyB5b3UgcmVhbGx5XG5cdFx0ICogcmVhbGx5IHdhbnQgdG8gZ2l2ZSBqUXVlcnkgc29tZSBleHRyYSBwYXJhbWV0ZXJzLlxuXHRcdCAqIEByZXR1cm5zIHtwcm9taXNlfSAtIEEgalF1ZXJ5IHByb21pc2Ugb2JqZWN0IHRoYXQgaXMgcmVzb2x2ZWQgb3IgcmVqZWN0ZWQgd2l0aCB0aGUgYXBpIG9iamVjdC5cblx0XHQgKi9cblx0XHRwb3N0KGNhbGxlckFqYXhQYXJhbWV0ZXJzKSB7XG5cdFx0XHQrK01vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDtcblx0XHRcdGNvbnN0IF9xdWVyeVN0cmluZyA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCBbaSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnF1ZXJ5KSkge1xuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG5cdFx0XHRcdFx0X3F1ZXJ5U3RyaW5nLnB1c2goYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGkpfT0ke3ZhbC5tYXAoZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKCd8Jyl9YCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRfcXVlcnlTdHJpbmcucHVzaChgJHtlbmNvZGVVUklDb21wb25lbnQoaSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbCl9YCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID0gX3F1ZXJ5U3RyaW5nLmpvaW4oJyYnKS5yZXBsYWNlKC9eKC4qPykoXFxidG9rZW49W14mXSopJiguKikvLCAnJDEkMyYkMicpO1xuXHRcdFx0Ly8gdG9rZW4gc2hvdWxkIGFsd2F5cyBiZSB0aGUgbGFzdCBpdGVtIGluIHRoZSBxdWVyeSBzdHJpbmcgKGJ1ZyBUVy1CLTAwMTMpXG5cdFx0XHRjb25zdCBhamF4cGFyYW1zID0ge1xuXHRcdFx0XHRjb250ZXh0OiB0aGlzLFxuXHRcdFx0XHR0eXBlOiB0aGlzLnF1ZXJ5LmFjdGlvbiA9PT0gJ3F1ZXJ5JyA/ICdHRVQnIDogJ1BPU1QnLFxuXHRcdFx0XHR1cmw6IG13LnV0aWwud2lraVNjcmlwdCgnYXBpJyksXG5cdFx0XHRcdGRhdGE6IHF1ZXJ5U3RyaW5nLFxuXHRcdFx0XHRkYXRhVHlwZTogdGhpcy5xdWVyeS5mb3JtYXQsXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHQnQXBpLVVzZXItQWdlbnQnOiBtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdC4uLmNhbGxlckFqYXhQYXJhbWV0ZXJzLFxuXHRcdFx0fTtcblx0XHRcdHJldHVybiAkLmFqYXgoYWpheHBhcmFtcykudGhlbihcblx0XHRcdFx0ZnVuY3Rpb24gb25BUElzdWNjZXNzKHJlc3BvbnNlLCBzdGF0dXNUZXh0KSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcblx0XHRcdFx0XHR0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG5cdFx0XHRcdFx0dGhpcy5yZXNwb25zZVhNTCA9IHJlc3BvbnNlO1xuXHRcdFx0XHRcdC8vIExpbWl0IHRvIGZpcnN0IGVycm9yXG5cdFx0XHRcdFx0aWYgKHRoaXMucXVlcnkuZm9ybWF0ID09PSAnanNvbicpIHtcblx0XHRcdFx0XHRcdHRoaXMuZXJyb3JDb2RlID0gcmVzcG9uc2UuZXJyb3JzICYmIHJlc3BvbnNlLmVycm9yc1swXS5jb2RlO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPT09ICdodG1sJykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmVycm9yVGV4dCA9IHJlc3BvbnNlLmVycm9ycyAmJiByZXNwb25zZS5lcnJvcnNbMF0uaHRtbDtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5xdWVyeS5lcnJvcmZvcm1hdCA9PT0gJ3dpa2l0ZXh0JyB8fCB0aGlzLnF1ZXJ5LmVycm9yZm9ybWF0ID09PSAncGxhaW50ZXh0Jykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmVycm9yVGV4dCA9IHJlc3BvbnNlLmVycm9ycyAmJiByZXNwb25zZS5lcnJvcnNbMF0udGV4dDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5lcnJvckNvZGUgPSAkKHJlc3BvbnNlKS5maW5kKCdlcnJvcnMgZXJyb3InKS5lcSgwKS5hdHRyKCdjb2RlJyk7XG5cdFx0XHRcdFx0XHQvLyBTdWZmaWNpZW50IGZvciBodG1sLCB3aWtpdGV4dCwgb3IgcGxhaW50ZXh0IGVycm9yZm9ybWF0c1xuXHRcdFx0XHRcdFx0dGhpcy5lcnJvclRleHQgPSAkKHJlc3BvbnNlKS5maW5kKCdlcnJvcnMgZXJyb3InKS5lcSgwKS50ZXh0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0eXBlb2YgdGhpcy5lcnJvckNvZGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHQvLyB0aGUgQVBJIGRpZG4ndCBsaWtlIHdoYXQgd2UgdG9sZCBpdCwgZS5nLiwgYmFkIGVkaXQgdG9rZW4gb3IgYW4gZXJyb3IgY3JlYXRpbmcgYSBwYWdlXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yZXR1cm5FcnJvcihjYWxsZXJBamF4UGFyYW1ldGVycyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGludm9rZSBzdWNjZXNzIGNhbGxiYWNrIGlmIG9uZSB3YXMgc3VwcGxpZWRcblx0XHRcdFx0XHRpZiAodGhpcy5vblN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdC8vIHNldCB0aGUgY2FsbGJhY2sgY29udGV4dCB0byB0aGlzLnBhcmVudCBmb3IgbmV3IGNvZGUgYW5kIHN1cHBseSB0aGUgQVBJIG9iamVjdFxuXHRcdFx0XHRcdFx0Ly8gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBjYWxsYmFjayAoZm9yIGxlZ2FjeSBjb2RlKVxuXHRcdFx0XHRcdFx0dGhpcy5vblN1Y2Nlc3MuY2FsbCh0aGlzLnBhcmVudCwgdGhpcyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGVsZW0uaW5mbygn5a6M5oiQJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkKCk7XG5cdFx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZXNvbHZlV2l0aCh0aGlzLnBhcmVudCwgW3RoaXNdKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Ly8gb25seSBuZXR3b3JrIGFuZCBzZXJ2ZXIgZXJyb3JzIHJlYWNoIGhlcmUgLSBjb21wbGFpbnRzIGZyb20gdGhlIEFQSSBpdHNlbGYgYXJlIGNhdWdodCBpbiBzdWNjZXNzKClcblx0XHRcdFx0ZnVuY3Rpb24gb25BUElmYWlsdXJlKGVycm9yLCBzdGF0dXNUZXh0LCBlcnJvclRocm93bikge1xuXHRcdFx0XHRcdHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQ7XG5cdFx0XHRcdFx0dGhpcy5lcnJvclRocm93biA9IGVycm9yVGhyb3duOyAvLyBmcmVxdWVudGx5IHVuZGVmaW5lZFxuXHRcdFx0XHRcdHRoaXMuZXJyb3JUZXh0ID1cblx0XHRcdFx0XHRcdHN0YXR1c1RleHQgK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCflnKjosIPnlKhBUEnml7blj5HnlJ/kuobplJnor6/igJwnLCAn5Zyo5ZG85Y+rQVBJ5pmC55m855Sf5LqG6Yyv6Kqk44CMJykgK1xuXHRcdFx0XHRcdFx0ZXJyb3Iuc3RhdHVzVGV4dCArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAneOAgicsICfjgI3jgIInKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yZXR1cm5FcnJvcigpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0cmV0dXJuRXJyb3IoY2FsbGVyQWpheFBhcmFtZXRlcnMpIHtcblx0XHRcdGlmICh0aGlzLmVycm9yQ29kZSA9PT0gJ2JhZHRva2VuJyAmJiAhdGhpcy5iYWR0b2tlblJldHJ5KSB7XG5cdFx0XHRcdHRoaXMuc3RhdGVsZW0ud2Fybih3aW5kb3cud2dVTFMoJ+aXoOaViOS7pOeJjO+8jOiOt+WPluaWsOeahOS7pOeJjOW5tumHjeivleKApuKApicsICfnhKHmlYjmrIrmnZbvvIzlj5blvpfmlrDnmoTmrIrmnZbkuKbph43oqabigKbigKYnKSk7XG5cdFx0XHRcdHRoaXMuYmFkdG9rZW5SZXRyeSA9IHRydWU7XG5cdFx0XHRcdC8vIEdldCBhIG5ldyBDU1JGIHRva2VuIGFuZCByZXRyeS4gSWYgdGhlIG9yaWdpbmFsIGFjdGlvbiBuZWVkcyBhIGRpZmZlcmVudFxuXHRcdFx0XHQvLyB0eXBlIG9mIGFjdGlvbiB0aGFuIENTUkYsIHdlIGRvIG9uZSBwb2ludGxlc3MgcmV0cnkgYmVmb3JlIGJhaWxpbmcgb3V0XG5cdFx0XHRcdHJldHVybiBNb3JlYml0cy53aWtpLmFwaS5nZXRUb2tlbigpLnRoZW4oKHRva2VuKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5xdWVyeS50b2tlbiA9IHRva2VuO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnBvc3QoY2FsbGVyQWpheFBhcmFtZXRlcnMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGVsZW0uZXJyb3IoYCR7dGhpcy5lcnJvclRleHR977yIJHt0aGlzLmVycm9yQ29kZX3vvIlgKTtcblx0XHRcdC8vIGludm9rZSBmYWlsdXJlIGNhbGxiYWNrIGlmIG9uZSB3YXMgc3VwcGxpZWRcblx0XHRcdGlmICh0aGlzLm9uRXJyb3IpIHtcblx0XHRcdFx0Ly8gc2V0IHRoZSBjYWxsYmFjayBjb250ZXh0IHRvIHRoaXMucGFyZW50IGZvciBuZXcgY29kZSBhbmQgc3VwcGx5IHRoZSBBUEkgb2JqZWN0XG5cdFx0XHRcdC8vIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgY2FsbGJhY2sgZm9yIGxlZ2FjeSBjb2RlXG5cdFx0XHRcdHRoaXMub25FcnJvci5jYWxsKHRoaXMucGFyZW50LCB0aGlzKTtcblx0XHRcdH1cblx0XHRcdC8vIGRvbid0IGNvbXBsZXRlIHRoZSBhY3Rpb24gc28gdGhhdCB0aGUgZXJyb3IgcmVtYWlucyBkaXNwbGF5ZWRcblx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0V2l0aCh0aGlzLnBhcmVudCwgW3RoaXNdKTtcblx0XHR9LFxuXHRcdGdldFN0YXR1c0VsZW1lbnQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZWxlbTtcblx0XHR9LFxuXHRcdGdldEVycm9yQ29kZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLmVycm9yQ29kZTtcblx0XHR9LFxuXHRcdGdldEVycm9yVGV4dCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmVycm9yVGV4dDtcblx0XHR9LFxuXHRcdGdldFhNTCgpIHtcblx0XHRcdC8vIHJldGFpbmVkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgdXNlIGdldFJlc3BvbnNlKCkgaW5zdGVhZFxuXHRcdFx0cmV0dXJuIHRoaXMucmVzcG9uc2VYTUw7XG5cdFx0fSxcblx0XHRnZXRSZXNwb25zZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJlc3BvbnNlO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgd2lraXRleHQgZnJvbSBhIHBhZ2UuIENhY2hpbmcgZW5hYmxlZCwgZHVyYXRpb24gMSBkYXkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5nZXRDYWNoZWRKc29uID0gKHRpdGxlKSA9PiB7XG5cdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdHRpdGxlczogdGl0bGUsXG5cdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0fTtcblxuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMud2lraS5hcGkoJycsIHF1ZXJ5KS5wb3N0KCkudGhlbigoYXBpb2JqKSA9PiB7XG5cdFx0XHRhcGlvYmouZ2V0U3RhdHVzRWxlbWVudCgpLnVubGluaygpO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhcGlvYmouZ2V0UmVzcG9uc2UoKTtcblx0XHRcdGNvbnN0IHdpa2l0ZXh0ID0gcmVzcG9uc2UucXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLnNsb3RzLm1haW4uY29udGVudDtcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKHdpa2l0ZXh0KTtcblx0XHR9KTtcblx0fTtcblx0bGV0IG1vcmViaXRzV2lraUFwaVVzZXJBZ2VudCA9ICdZc0FyY2hpdmVzLzEuMSAobW9yZWJpdHMuanMpJztcblx0LyoqXG5cdCAqIFNldCB0aGUgY3VzdG9tIHVzZXIgYWdlbnQgaGVhZGVyLCB3aGljaCBpcyB1c2VkIGZvciBzZXJ2ZXItc2lkZSBsb2dnaW5nLlxuXHQgKiBOb3RlIHRoYXQgZG9pbmcgc28gd2lsbCBzZXQgdGhlIHVzZXJhZ2VudCBmb3IgZXZlcnkgYE1vcmViaXRzLndpa2kuYXBpYFxuXHQgKiBwcm9jZXNzIHBlcmZvcm1lZCB0aGVyZWFmdGVyLlxuXHQgKlxuXHQgKiBAc2VlIHtAbGluayBodHRwczovL2xpc3RzLndpa2ltZWRpYS5vcmcvcGlwZXJtYWlsL21lZGlhd2lraS1hcGktYW5ub3VuY2UvMjAxNC1Ob3ZlbWJlci8wMDAwNzUuaHRtbH1cblx0ICogZm9yIG9yaWdpbmFsIGFubm91bmNlbWVudC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kuYXBpXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdWE9WXNBcmNoaXZlcy8xLjEgKG1vcmViaXRzLmpzKV0gLSBVc2VyIGFnZW50LiAgVGhlIGRlZmF1bHRcblx0ICogdmFsdWUgb2YgYG1vcmViaXRzLmpzYCB3aWxsIGJlIGFwcGVuZGVkIHRvIGFueSBwcm92aWRlZFxuXHQgKiB2YWx1ZS5cblx0ICovXG5cdE1vcmViaXRzLndpa2kuYXBpLnNldEFwaVVzZXJBZ2VudCA9ICh1YSkgPT4ge1xuXHRcdG1vcmViaXRzV2lraUFwaVVzZXJBZ2VudCA9IGBZc0FyY2hpdmVzLzEuMSAobW9yZWJpdHMuanMke3VhID8gYDsgJHt1YX1gIDogJyd9KWA7XG5cdH07XG5cdC8qKlxuXHQgKiBDaGFuZ2UvcmV2aXNpb24gdGFnIGFwcGxpZWQgdG8gTW9yZWJpdHMgYWN0aW9ucyB3aGVuIG5vIG90aGVyIHRhZ3MgYXJlIHNwZWNpZmllZC5cblx0ICogVW51c2VkIGJ5IGRlZmF1bHQuXG5cdCAqXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraS5hcGlcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdGNvbnN0IG1vcmViaXRzV2lraUNoYW5nZVRhZyA9ICcnO1xuXHQvKipcblx0ICogR2V0IGEgbmV3IENTUkYgdG9rZW4gb24gZW5jb3VudGVyaW5nIHRva2VuIGVycm9ycy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kuYXBpXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IE1lZGlhV2lraSBDU1JGIHRva2VuLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5hcGkuZ2V0VG9rZW4gPSAoKSA9PiB7XG5cdFx0Y29uc3QgdG9rZW5BcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkod2luZG93LndnVUxTKCfojrflj5bku6TniYwnLCAn5Y+W5b6X5qyK5p2WJyksIHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRva2VuQXBpLnBvc3QoKS50aGVuKChhcGlvYmopID0+IHtcblx0XHRcdHJldHVybiBhcGlvYmoucmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHR9KTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpLnBhZ2UgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogVXNlIHRoZSBNZWRpYVdpa2kgQVBJIHRvIGxvYWQgYSBwYWdlIGFuZCBvcHRpb25hbGx5IGVkaXQgaXQsIG1vdmUgaXQsIGV0Yy5cblx0ICpcblx0ICogQ2FsbGVycyBhcmUgbm90IHBlcm1pdHRlZCB0byBkaXJlY3RseSBhY2Nlc3MgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBjbGFzcyFcblx0ICogQWxsIHByb3BlcnR5IGFjY2VzcyBpcyB0aHJvdWdoIHRoZSBhcHByb3ByaWF0ZSBnZXRfX18oKSBvciBzZXRfX18oKSBtZXRob2QuXG5cdCAqXG5cdCAqIENhbGxlcnMgc2hvdWxkIHNldCB7QGxpbmsgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlfSBhbmQge0BsaW5rIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0fVxuXHQgKiBiZWZvcmUgdGhlIGZpcnN0IGNhbGwgdG8ge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZS5sb2FkKCl9LlxuXHQgKlxuXHQgKiBFYWNoIG9mIHRoZSBjYWxsYmFjayBmdW5jdGlvbnMgdGFrZXMgb25lIHBhcmFtZXRlciwgd2hpY2ggaXMgYVxuXHQgKiByZWZlcmVuY2UgdG8gdGhlIE1vcmViaXRzLndpa2kucGFnZSBvYmplY3QgdGhhdCByZWdpc3RlcmVkIHRoZSBjYWxsYmFjay5cblx0ICogQ2FsbGJhY2sgZnVuY3Rpb25zIG1heSBpbnZva2UgYW55IE1vcmViaXRzLndpa2kucGFnZSBwcm90b3R5cGUgbWV0aG9kIHVzaW5nIHRoaXMgcmVmZXJlbmNlLlxuXHQgKlxuXHQgKlxuXHQgKiBDYWxsIHNlcXVlbmNlIGZvciBjb21tb24gb3BlcmF0aW9ucyAob3B0aW9uYWwgZmluYWwgdXNlciBjYWxsYmFja3Mgbm90IHNob3duKTpcblx0ICpcblx0ICogLSBFZGl0IGN1cnJlbnQgY29udGVudHMgb2YgYSBwYWdlIChubyBlZGl0IGNvbmZsaWN0KTpcblx0ICogYC5sb2FkKHVzZXJUZXh0RWRpdENhbGxiYWNrKSAtPiBjdHgubG9hZEFwaS5wb3N0KCkgLT5cblx0ICogY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuTG9hZFN1Y2Nlc3MoKSAtPiB1c2VyVGV4dEVkaXRDYWxsYmFjaygpIC0+XG5cdCAqIC5zYXZlKCkgLT4gY3R4LnNhdmVBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mblNhdmVTdWNjZXNzKClgXG5cdCAqXG5cdCAqIC0gRWRpdCBjdXJyZW50IGNvbnRlbnRzIG9mIGEgcGFnZSAod2l0aCBlZGl0IGNvbmZsaWN0KTpcblx0ICogYC5sb2FkKHVzZXJUZXh0RWRpdENhbGxiYWNrKSAtPiBjdHgubG9hZEFwaS5wb3N0KCkgLT5cblx0ICogY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuTG9hZFN1Y2Nlc3MoKSAtPiB1c2VyVGV4dEVkaXRDYWxsYmFjaygpIC0+XG5cdCAqIC5zYXZlKCkgLT4gY3R4LnNhdmVBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+XG5cdCAqIGN0eC5mblNhdmVFcnJvcigpIC0+IGN0eC5sb2FkQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPlxuXHQgKiBjdHguZm5Mb2FkU3VjY2VzcygpIC0+IHVzZXJUZXh0RWRpdENhbGxiYWNrKCkgLT4gLnNhdmUoKSAtPlxuXHQgKiBjdHguc2F2ZUFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuU2F2ZVN1Y2Nlc3MoKWBcblx0ICpcblx0ICogLSBBcHBlbmQgdG8gYSBwYWdlIChzaW1pbGFyIGZvciBwcmVwZW5kIGFuZCBuZXdTZWN0aW9uKTpcblx0ICogYC5hcHBlbmQoKSAtPiBjdHgubG9hZEFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT5cblx0ICogY3R4LmZuTG9hZFN1Y2Nlc3MoKSAtPiBjdHguZm5BdXRvU2F2ZSgpIC0+IC5zYXZlKCkgLT4gY3R4LnNhdmVBcGkucG9zdCgpIC0+XG5cdCAqIGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mblNhdmVTdWNjZXNzKClgXG5cdCAqXG5cdCAqIE5vdGVzOlxuXHQgKiAxLiBBbGwgZnVuY3Rpb25zIGZvbGxvd2luZyBNb3JlYml0cy53aWtpLmFwaS5wb3N0KCkgYXJlIGludm9rZWQgYXN5bmNocm9ub3VzbHkgZnJvbSB0aGUgalF1ZXJ5IEFKQVggbGlicmFyeS5cblx0ICogMi4gVGhlIHNlcXVlbmNlIGZvciBhcHBlbmQvcHJlcGVuZC9uZXdTZWN0aW9uIGNvdWxkIGJlIHNsaWdodGx5IHNob3J0ZW5lZCxcblx0ICogYnV0IGl0IHdvdWxkIHJlcXVpcmUgc2lnbmlmaWNhbnQgZHVwbGljYXRpb24gb2YgY29kZSBmb3IgbGl0dGxlIGJlbmVmaXQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFnZU5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcGFnZSwgcHJlZml4ZWQgYnkgdGhlIG5hbWVzcGFjZSAoaWYgYW55KS5cblx0ICogRm9yIHRoZSBjdXJyZW50IHBhZ2UsIHVzZSBgbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpYC5cblx0ICogQHBhcmFtIHtzdHJpbmd8TW9yZWJpdHMuc3RhdHVzfSBbc3RhdHVzXSAtIEEgc3RyaW5nIGRlc2NyaWJpbmcgdGhlIGFjdGlvbiBhYm91dCB0byBiZSB1bmRlcnRha2VuLFxuXHQgKiBvciBhIE1vcmViaXRzLnN0YXR1cyBvYmplY3Rcblx0ICovXG5cdE1vcmViaXRzLndpa2kucGFnZSA9IGZ1bmN0aW9uIChwYWdlTmFtZSwgc3RhdHVzKSB7XG5cdFx0aWYgKCFzdGF0dXMpIHtcblx0XHRcdHN0YXR1cyA9IHdpbmRvdy53Z1VMUygn5omT5byA6aG16Z2i4oCcJywgJ+aJk+mWi+mggemdouOAjCcpICsgcGFnZU5hbWUgKyB3aW5kb3cud2dVTFMoJ+KAnScsICfjgI0nKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUHJpdmF0ZSBjb250ZXh0IHZhcmlhYmxlcy5cblx0XHQgKlxuXHRcdCAqIFRoaXMgY29udGV4dCBpcyBub3QgdmlzaWJsZSB0byB0aGUgb3V0c2lkZSwgdGh1cyBhbGwgdGhlIGRhdGEgaGVyZVxuXHRcdCAqIG11c3QgYmUgYWNjZXNzZWQgdmlhIGdldHRlciBhbmQgc2V0dGVyIGZ1bmN0aW9ucy5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0Y29uc3QgY3R4ID0ge1xuXHRcdFx0Ly8gYmFja2luZyBmaWVsZHMgZm9yIHB1YmxpYyBwcm9wZXJ0aWVzXG5cdFx0XHRwYWdlTmFtZSxcblx0XHRcdHBhZ2VFeGlzdHM6IGZhbHNlLFxuXHRcdFx0ZWRpdFN1bW1hcnk6IG51bGwsXG5cdFx0XHRjaGFuZ2VUYWdzOiBudWxsLFxuXHRcdFx0dGVzdEFjdGlvbnM6IG51bGwsXG5cdFx0XHQvLyBhcnJheSBpZiBhbnkgdmFsaWQgYWN0aW9uc1xuXHRcdFx0Y2FsbGJhY2tQYXJhbWV0ZXJzOiBudWxsLFxuXHRcdFx0c3RhdHVzRWxlbWVudDogc3RhdHVzIGluc3RhbmNlb2YgTW9yZWJpdHMuc3RhdHVzID8gc3RhdHVzIDogbmV3IE1vcmViaXRzLnN0YXR1cyhzdGF0dXMpLFxuXHRcdFx0Ly8gLSBlZGl0XG5cdFx0XHRwYWdlVGV4dDogbnVsbCxcblx0XHRcdGVkaXRNb2RlOiAnYWxsJyxcblx0XHRcdC8vIHNhdmUoKSByZXBsYWNlcyBlbnRpcmUgY29udGVudHMgb2YgdGhlIHBhZ2UgYnkgZGVmYXVsdFxuXHRcdFx0YXBwZW5kVGV4dDogbnVsbCxcblx0XHRcdC8vIGNhbid0IHJldXNlIHBhZ2VUZXh0IGZvciB0aGlzIGJlY2F1c2UgcGFnZVRleHQgaXMgbmVlZGVkIHRvIGZvbGxvdyBhIHJlZGlyZWN0XG5cdFx0XHRwcmVwZW5kVGV4dDogbnVsbCxcblx0XHRcdC8vIGNhbid0IHJldXNlIHBhZ2VUZXh0IGZvciB0aGlzIGJlY2F1c2UgcGFnZVRleHQgaXMgbmVlZGVkIHRvIGZvbGxvdyBhIHJlZGlyZWN0XG5cdFx0XHRuZXdTZWN0aW9uVGV4dDogbnVsbCxcblx0XHRcdG5ld1NlY3Rpb25UaXRsZTogbnVsbCxcblx0XHRcdGNyZWF0ZU9wdGlvbjogbnVsbCxcblx0XHRcdG1pbm9yRWRpdDogZmFsc2UsXG5cdFx0XHRib3RFZGl0OiBmYWxzZSxcblx0XHRcdHBhZ2VTZWN0aW9uOiBudWxsLFxuXHRcdFx0bWF4Q29uZmxpY3RSZXRyaWVzOiAyLFxuXHRcdFx0bWF4UmV0cmllczogMixcblx0XHRcdGZvbGxvd1JlZGlyZWN0OiBmYWxzZSxcblx0XHRcdGZvbGxvd0Nyb3NzTnNSZWRpcmVjdDogdHJ1ZSxcblx0XHRcdHdhdGNobGlzdE9wdGlvbjogJ25vY2hhbmdlJyxcblx0XHRcdHdhdGNobGlzdEV4cGlyeTogbnVsbCxcblx0XHRcdGNyZWF0b3I6IG51bGwsXG5cdFx0XHR0aW1lc3RhbXA6IG51bGwsXG5cdFx0XHQvLyAtIHJldmVydFxuXHRcdFx0cmV2ZXJ0T2xkSUQ6IG51bGwsXG5cdFx0XHQvLyAtIG1vdmVcblx0XHRcdG1vdmVEZXN0aW5hdGlvbjogbnVsbCxcblx0XHRcdG1vdmVUYWxrUGFnZTogZmFsc2UsXG5cdFx0XHRtb3ZlU3VicGFnZXM6IGZhbHNlLFxuXHRcdFx0bW92ZVN1cHByZXNzUmVkaXJlY3Q6IGZhbHNlLFxuXHRcdFx0Ly8gLSBwcm90ZWN0XG5cdFx0XHRwcm90ZWN0RWRpdDogbnVsbCxcblx0XHRcdHByb3RlY3RNb3ZlOiBudWxsLFxuXHRcdFx0cHJvdGVjdENyZWF0ZTogbnVsbCxcblx0XHRcdHByb3RlY3RDYXNjYWRlOiBudWxsLFxuXHRcdFx0Ly8gLSBjcmVhdGlvbiBsb29rdXBcblx0XHRcdGxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvcjogZmFsc2UsXG5cdFx0XHQvLyBpbnRlcm5hbCBzdGF0dXNcblx0XHRcdHBhZ2VMb2FkZWQ6IGZhbHNlLFxuXHRcdFx0Y3NyZlRva2VuOiBudWxsLFxuXHRcdFx0bG9hZFRpbWU6IG51bGwsXG5cdFx0XHRsYXN0RWRpdFRpbWU6IG51bGwsXG5cdFx0XHRwYWdlSUQ6IG51bGwsXG5cdFx0XHRjb250ZW50TW9kZWw6IG51bGwsXG5cdFx0XHRyZXZlcnRDdXJJRDogbnVsbCxcblx0XHRcdHJldmVydFVzZXI6IG51bGwsXG5cdFx0XHR3YXRjaGVkOiBmYWxzZSxcblx0XHRcdGZ1bGx5UHJvdGVjdGVkOiBmYWxzZSxcblx0XHRcdHN1cHByZXNzUHJvdGVjdFdhcm5pbmc6IGZhbHNlLFxuXHRcdFx0Y29uZmxpY3RSZXRyaWVzOiAwLFxuXHRcdFx0cmV0cmllczogMCxcblx0XHRcdC8vIGNhbGxiYWNrc1xuXHRcdFx0b25Mb2FkU3VjY2VzczogbnVsbCxcblx0XHRcdG9uTG9hZEZhaWx1cmU6IG51bGwsXG5cdFx0XHRvblNhdmVTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25TYXZlRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uTG9va3VwQ3JlYXRpb25TdWNjZXNzOiBudWxsLFxuXHRcdFx0b25Mb29rdXBDcmVhdGlvbkZhaWx1cmU6IG51bGwsXG5cdFx0XHRvbk1vdmVTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25Nb3ZlRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uRGVsZXRlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uRGVsZXRlRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uVW5kZWxldGVTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25VbmRlbGV0ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvblByb3RlY3RTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25Qcm90ZWN0RmFpbHVyZTogbnVsbCxcblx0XHRcdC8vIGludGVybmFsIG9iamVjdHNcblx0XHRcdGxvYWRRdWVyeTogbnVsbCxcblx0XHRcdGxvYWRBcGk6IG51bGwsXG5cdFx0XHRzYXZlQXBpOiBudWxsLFxuXHRcdFx0bG9va3VwQ3JlYXRpb25BcGk6IG51bGwsXG5cdFx0XHRtb3ZlQXBpOiBudWxsLFxuXHRcdFx0bW92ZVByb2Nlc3NBcGk6IG51bGwsXG5cdFx0XHRwYXRyb2xBcGk6IG51bGwsXG5cdFx0XHRwYXRyb2xQcm9jZXNzQXBpOiBudWxsLFxuXHRcdFx0ZGVsZXRlQXBpOiBudWxsLFxuXHRcdFx0ZGVsZXRlUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdHVuZGVsZXRlQXBpOiBudWxsLFxuXHRcdFx0dW5kZWxldGVQcm9jZXNzQXBpOiBudWxsLFxuXHRcdFx0cHJvdGVjdEFwaTogbnVsbCxcblx0XHRcdHByb3RlY3RQcm9jZXNzQXBpOiBudWxsLFxuXHRcdH07XG5cdFx0Y29uc3QgZW1wdHlGdW5jdGlvbiA9ICgpID0+IHt9O1xuXHRcdC8qKlxuXHRcdCAqIExvYWRzIHRoZSB0ZXh0IGZvciB0aGUgcGFnZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IG9uU3VjY2VzcyAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBsb2FkIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbG9hZCBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLmxvYWQgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vbkxvYWRTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdC8vIE5lZWQgdG8gYmUgYWJsZSB0byBkbyBzb21ldGhpbmcgYWZ0ZXIgdGhlIHBhZ2UgbG9hZHNcblx0XHRcdGlmICghb25TdWNjZXNzKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogbm8gb25TdWNjZXNzIGNhbGxiYWNrIHByb3ZpZGVkIHRvIGxvYWQoKSEnKTtcblx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5sb2FkUXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ2luZm98cmV2aXNpb25zJyxcblx0XHRcdFx0aW5wcm9wOiAnd2F0Y2hlZCcsXG5cdFx0XHRcdGludGVzdGFjdGlvbnM6ICdlZGl0Jyxcblx0XHRcdFx0Ly8gY2FuIGJlIGV4cGFuZGVkXG5cdFx0XHRcdGN1cnRpbWVzdGFtcDogJycsXG5cdFx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0XHR0eXBlOiAnY3NyZicsXG5cdFx0XHRcdHRpdGxlczogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Ly8gZG9uJ3QgbmVlZCBydmxpbWl0PTEgYmVjYXVzZSB3ZSBkb24ndCBuZWVkIHJ2c3RhcnRpZCBoZXJlIGFuZCBvbmx5IG9uZSBhY3R1YWwgcmV2IGlzIHJldHVybmVkIGJ5IGRlZmF1bHRcblx0XHRcdH07XG5cblx0XHRcdGlmIChjdHguZWRpdE1vZGUgPT09ICdhbGwnKSB7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZwcm9wID0gJ2NvbnRlbnR8dGltZXN0YW1wJzsgLy8gZ2V0IHRoZSBwYWdlIGNvbnRlbnQgYXQgdGhlIHNhbWUgdGltZSwgaWYgbmVlZGVkXG5cdFx0XHR9IGVsc2UgaWYgKGN0eC5lZGl0TW9kZSA9PT0gJ3JldmVydCcpIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydnByb3AgPSAndGltZXN0YW1wJztcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydmxpbWl0ID0gMTtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydnN0YXJ0aWQgPSBjdHgucmV2ZXJ0T2xkSUQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucmVkaXJlY3RzID0gJyc7IC8vIGZvbGxvdyBhbGwgcmVkaXJlY3RzXG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgY3R4LnBhZ2VTZWN0aW9uID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJ2c2VjdGlvbiA9IGN0eC5wYWdlU2VjdGlvbjtcblx0XHRcdH1cblx0XHRcdGlmIChNb3JlYml0cy51c2VySXNTeXNvcCkge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LmlucHJvcCArPSAnfHByb3RlY3Rpb24nO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmxvYWRBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5oqT5Y+W6aG16Z2i4oCm4oCmJywgJ+aKk+WPlumggemdouKApuKApicpLFxuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LFxuXHRcdFx0XHRmbkxvYWRTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgubG9hZEFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgubG9hZEFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTYXZlcyB0aGUgdGV4dCBmb3IgdGhlIHBhZ2UgdG8gV2lraXBlZGlhLlxuXHRcdCAqIE11c3QgYmUgcHJlY2VkZWQgYnkgc3VjY2Vzc2Z1bGx5IGNhbGxpbmcgYGxvYWQoKWAuXG5cdFx0ICpcblx0XHQgKiBXYXJuaW5nOiBDYWxsaW5nIGBzYXZlKClgIGNhbiByZXN1bHQgaW4gYWRkaXRpb25hbCBjYWxscyB0byB0aGVcblx0XHQgKiBwcmV2aW91cyBgbG9hZCgpYCBjYWxsYmFja3MgdG8gcmVjb3ZlciBmcm9tIGVkaXQgY29uZmxpY3RzISBJbiB0aGlzXG5cdFx0ICogY2FzZSwgY2FsbGVycyBtdXN0IG1ha2UgdGhlIHNhbWUgZWRpdCB0byB0aGUgbmV3IHBhZ2VUZXh0IGFuZFxuXHRcdCAqIHJlLWludm9rZSBgc2F2ZSgpYC4gIFRoaXMgYmVoYXZpb3IgY2FuIGJlIGRpc2FibGVkIHdpdGhcblx0XHQgKiBgc2V0TWF4Q29uZmxpY3RSZXRyaWVzKDApYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIHNhdmUgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBzYXZlIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2F2ZSA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0Ly8gYXJlIHdlIGdldHRpbmcgb3VyIGVkaXRpbmcgdG9rZW4gZnJvbSBtdy51c2VyLnRva2Vucz9cblx0XHRcdGNvbnN0IGNhblVzZU13VXNlclRva2VuID0gZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpO1xuXHRcdFx0aWYgKCFjdHgucGFnZUxvYWRlZCAmJiAhY2FuVXNlTXdVc2VyVG9rZW4pIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBhdHRlbXB0IHRvIHNhdmUgYSBwYWdlIHRoYXQgaGFzIG5vdCBiZWVuIGxvYWRlZCEnKTtcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4LmVkaXRTdW1tYXJ5KSB7XG5cdFx0XHRcdC8vIG5ldyBzZWN0aW9uIG1vZGUgYWxsb3dzIChuYXksIGVuY291cmFnZXMpIHVzaW5nIHRoZVxuXHRcdFx0XHQvLyB0aXRsZSBhcyB0aGUgZWRpdCBzdW1tYXJ5LCBidXQgdGhlIHF1ZXJ5IG5lZWRzXG5cdFx0XHRcdC8vIGVkaXRTdW1tYXJ5IHRvIGJlIHVuZGVmaW5lZCBvciAnJywgbm90IG51bGxcblx0XHRcdFx0aWYgKGN0eC5lZGl0TW9kZSA9PT0gJ25ldycgJiYgY3R4Lm5ld1NlY3Rpb25UaXRsZSkge1xuXHRcdFx0XHRcdGN0eC5lZGl0U3VtbWFyeSA9ICcnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogZWRpdCBzdW1tYXJ5IG5vdCBzZXQgYmVmb3JlIHNhdmUhJyk7XG5cdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBzaG91bGRuJ3QgaGFwcGVuIGlmIGNhblVzZU13VXNlclRva2VuID09PSB0cnVlXG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN0eC5mdWxseVByb3RlY3RlZCAmJlxuXHRcdFx0XHQhY3R4LnN1cHByZXNzUHJvdGVjdFdhcm5pbmcgJiZcblx0XHRcdFx0IWNvbmZpcm0oXG5cdFx0XHRcdFx0Y3R4LmZ1bGx5UHJvdGVjdGVkID09PSAnaW5maW5pdHknXG5cdFx0XHRcdFx0XHQ/IHdpbmRvdy53Z1VMUygn5oKo5Y2z5bCG57yW6L6R5YWo5L+d5oqk6aG16Z2i4oCcJywgJ+aCqOWNs+Wwh+e3qOi8r+WFqOS/neitt+mggemdouOAjCcpICtcblx0XHRcdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHRcdCfigJ3vvIjml6DpmZDmnJ/vvInjgIJcXG5cXG7ljZXlh7vnoa7lrprku6Xnoa7lrprvvIzmiJbljZXlh7vlj5bmtojku6Xlj5bmtojmk43kvZzjgIInLFxuXHRcdFx0XHRcdFx0XHRcdFx0J+OAje+8iOeEoemZkOacn++8ieOAglxcblxcbum7nuaTiueiuuWumuS7peeiuuWumu+8jOaIlum7nuaTiuWPlua2iOS7peWPlua2iOaTjeS9nOOAgidcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQ6IGAke1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5oKo5Y2z5bCG57yW6L6R5YWo5L+d5oqk6aG16Z2i4oCcJywgJ+aCqOWNs+Wwh+e3qOi8r+WFqOS/neitt+mggemdouOAjCcpICtcblx0XHRcdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd77yI5Yiw5pyf77yaJywgJ+OAje+8iOWIsOacn++8micpICtcblx0XHRcdFx0XHRcdFx0XHRuZXcgTW9yZWJpdHMuZGF0ZShjdHguZnVsbHlQcm90ZWN0ZWQpLmNhbGVuZGFyKCd1dGMnKVxuXHRcdFx0XHRcdFx0XHR9IChVVEMp77yJ44CCXFxuXFxuJHt3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0J+WNleWHu+ehruWumuS7peehruWumu+8jOaIluWNleWHu+WPlua2iOS7peWPlua2iOaTjeS9nOOAgicsXG5cdFx0XHRcdFx0XHRcdFx0J+m7nuaTiueiuuWumuS7peeiuuWumu+8jOaIlum7nuaTiuWPlua2iOS7peWPlua2iOaTjeS9nOOAgidcblx0XHRcdFx0XHRcdFx0KX1gXG5cdFx0XHRcdClcblx0XHRcdCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+W3suWPlua2iOWvueWFqOS/neaKpOmhtemdoueahOe8lui+keOAgicsICflt7Llj5bmtojlsI3lhajkv53orbfpoIHpnaLnmoTnt6jovK/jgIInKSk7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHgucmV0cmllcyA9IDA7XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdHRpdGxlOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdHN1bW1hcnk6IGN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdFx0dG9rZW46IGNhblVzZU13VXNlclRva2VuID8gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKSA6IGN0eC5jc3JmVG9rZW4sXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgY3R4LnBhZ2VTZWN0aW9uID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRxdWVyeS5zZWN0aW9uID0gY3R4LnBhZ2VTZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0Ly8gU2V0IG1pbm9yIGVkaXQgYXR0cmlidXRlLiBJZiB0aGVzZSBwYXJhbWV0ZXJzIGFyZSBwcmVzZW50IHdpdGggYW55IHZhbHVlLCBpdCBpcyBpbnRlcnByZXRlZCBhcyB0cnVlXG5cdFx0XHRpZiAoY3R4Lm1pbm9yRWRpdCkge1xuXHRcdFx0XHRxdWVyeS5taW5vciA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRxdWVyeS5ub3RtaW5vciA9IHRydWU7IC8vIGZvcmNlIFR3aW5rbGUgY29uZmlnIHRvIG92ZXJyaWRlIHVzZXIgcHJlZmVyZW5jZSBzZXR0aW5nIGZvciBcImFsbCBlZGl0cyBhcmUgbWlub3JcIlxuXHRcdFx0fVxuXHRcdFx0Ly8gU2V0IGJvdCBlZGl0IGF0dHJpYnV0ZS4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgcHJlc2VudCB3aXRoIGFueSB2YWx1ZSwgaXQgaXMgaW50ZXJwcmV0ZWQgYXMgdHJ1ZVxuXHRcdFx0aWYgKGN0eC5ib3RFZGl0KSB7XG5cdFx0XHRcdHF1ZXJ5LmJvdCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKGN0eC5lZGl0TW9kZSkge1xuXHRcdFx0XHRjYXNlICdhcHBlbmQnOlxuXHRcdFx0XHRcdGlmIChjdHguYXBwZW5kVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBhcHBlbmQgdGV4dCBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHF1ZXJ5LmFwcGVuZHRleHQgPSBjdHguYXBwZW5kVGV4dDsgLy8gdXNlIG1vZGUgdG8gYXBwZW5kIHRvIGN1cnJlbnQgcGFnZSBjb250ZW50c1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdwcmVwZW5kJzpcblx0XHRcdFx0XHRpZiAoY3R4LnByZXBlbmRUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IHByZXBlbmQgdGV4dCBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHF1ZXJ5LnByZXBlbmR0ZXh0ID0gY3R4LnByZXBlbmRUZXh0OyAvLyB1c2UgbW9kZSB0byBwcmVwZW5kIHRvIGN1cnJlbnQgcGFnZSBjb250ZW50c1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICduZXcnOlxuXHRcdFx0XHRcdGlmICghY3R4Lm5ld1NlY3Rpb25UZXh0KSB7XG5cdFx0XHRcdFx0XHQvLyBBUEkgZG9lc24ndCBhbGxvdyBlbXB0eSBuZXcgc2VjdGlvbiB0ZXh0XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IG5ldyBzZWN0aW9uIHRleHQgbm90IHNldCBiZWZvcmUgc2F2ZSEnKTtcblx0XHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRxdWVyeS5zZWN0aW9uID0gJ25ldyc7XG5cdFx0XHRcdFx0cXVlcnkudGV4dCA9IGN0eC5uZXdTZWN0aW9uVGV4dDsgLy8gYWRkIGEgbmV3IHNlY3Rpb24gdG8gY3VycmVudCBwYWdlXG5cdFx0XHRcdFx0cXVlcnkuc2VjdGlvbnRpdGxlID0gY3R4Lm5ld1NlY3Rpb25UaXRsZSB8fCBjdHguZWRpdFN1bW1hcnk7IC8vIGRvbmUgYnkgdGhlIEFQSSwgYnV0IG5vbi0nJyB2YWx1ZXMgd291bGQgZ2V0IHRyZWF0ZWQgYXMgdGV4dFxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyZXZlcnQnOlxuXHRcdFx0XHRcdHF1ZXJ5LnVuZG8gPSBjdHgucmV2ZXJ0Q3VySUQ7XG5cdFx0XHRcdFx0cXVlcnkudW5kb2FmdGVyID0gY3R4LnJldmVydE9sZElEO1xuXHRcdFx0XHRcdGlmIChjdHgubGFzdEVkaXRUaW1lKSB7XG5cdFx0XHRcdFx0XHRxdWVyeS5iYXNldGltZXN0YW1wID0gY3R4Lmxhc3RFZGl0VGltZTsgLy8gY2hlY2sgdGhhdCBwYWdlIGhhc24ndCBiZWVuIGVkaXRlZCBzaW5jZSBpdCB3YXMgbG9hZGVkXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cXVlcnkuc3RhcnR0aW1lc3RhbXAgPSBjdHgubG9hZFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBkZWxldGVkIHNpbmNlIGl0IHdhcyBsb2FkZWQgKGRvbid0IHJlY3JlYXRlIGJhZCBzdHVmZilcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyAnYWxsJ1xuXHRcdFx0XHRcdHF1ZXJ5LnRleHQgPSBjdHgucGFnZVRleHQ7IC8vIHJlcGxhY2UgZW50aXJlIGNvbnRlbnRzIG9mIHRoZSBwYWdlXG5cdFx0XHRcdFx0aWYgKGN0eC5sYXN0RWRpdFRpbWUpIHtcblx0XHRcdFx0XHRcdHF1ZXJ5LmJhc2V0aW1lc3RhbXAgPSBjdHgubGFzdEVkaXRUaW1lOyAvLyBjaGVjayB0aGF0IHBhZ2UgaGFzbid0IGJlZW4gZWRpdGVkIHNpbmNlIGl0IHdhcyBsb2FkZWRcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRxdWVyeS5zdGFydHRpbWVzdGFtcCA9IGN0eC5sb2FkVGltZTsgLy8gY2hlY2sgdGhhdCBwYWdlIGhhc24ndCBiZWVuIGRlbGV0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZCAoZG9uJ3QgcmVjcmVhdGUgYmFkIHN0dWZmKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFsncmVjcmVhdGUnLCAnY3JlYXRlb25seScsICdub2NyZWF0ZSddLmluY2x1ZGVzKGN0eC5jcmVhdGVPcHRpb24pKSB7XG5cdFx0XHRcdHF1ZXJ5W2N0eC5jcmVhdGVPcHRpb25dID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2FuVXNlTXdVc2VyVG9rZW4gJiYgY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRcdHF1ZXJ5LnJlZGlyZWN0ID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGN0eC5zYXZlQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S/neWtmOmhtemdouKApuKApicsICflhLLlrZjpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGZuU2F2ZVN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRmblNhdmVFcnJvclxuXHRcdFx0KTtcblx0XHRcdGN0eC5zYXZlQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5zYXZlQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEFkZHMgdGhlIHRleHQgcHJvdmlkZWQgdmlhIGBzZXRBcHBlbmRUZXh0KClgIHRvIHRoZSBlbmQgb2YgdGhlXG5cdFx0ICogcGFnZS4gIERvZXMgbm90IHJlcXVpcmUgY2FsbGluZyBgbG9hZCgpYCBmaXJzdCwgdW5sZXNzIGEgd2F0Y2hsaXN0XG5cdFx0ICogZXhwaXJ5IGlzIHVzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgZmFpbHMuXG5cdFx0ICovXG5cdFx0dGhpcy5hcHBlbmQgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhcHBlbmQnO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKSkge1xuXHRcdFx0XHR0aGlzLnNhdmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRcdHRoaXMubG9hZChmbkF1dG9TYXZlLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBBZGRzIHRoZSB0ZXh0IHByb3ZpZGVkIHZpYSBgc2V0UHJlcGVuZFRleHQoKWAgdG8gdGhlIHN0YXJ0IG9mIHRoZVxuXHRcdCAqIHBhZ2UuICBEb2VzIG5vdCByZXF1aXJlIGNhbGxpbmcgYGxvYWQoKWAgZmlyc3QsIHVubGVzcyBhIHdhdGNobGlzdFxuXHRcdCAqIGV4cGlyeSBpcyB1c2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gIFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBoYXMgc3VjY2VlZGVkLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259ICBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgZmFpbHMuXG5cdFx0ICovXG5cdFx0dGhpcy5wcmVwZW5kID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAncHJlcGVuZCc7XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpKSB7XG5cdFx0XHRcdHRoaXMuc2F2ZShvblN1Y2Nlc3MsIG9uRmFpbHVyZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdFx0dGhpcy5sb2FkKGZuQXV0b1NhdmUsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIENyZWF0ZXMgYSBuZXcgc2VjdGlvbiB3aXRoIHRoZSB0ZXh0IHByb3ZpZGVkIGJ5IGBzZXROZXdTZWN0aW9uVGV4dCgpYFxuXHRcdCAqIGFuZCBzZWN0aW9uIHRpdGxlIGZyb20gYHNldE5ld1NlY3Rpb25UaXRsZSgpYC5cblx0XHQgKiBJZiBgZWRpdFN1bW1hcnlgIGlzIHByb3ZpZGVkLCB0aGF0IHdpbGwgYmUgdXNlZCBpbnN0ZWFkIG9mIHRoZVxuXHRcdCAqIGF1dG9nZW5lcmF0ZWQgXCItPlRpdGxlIChuZXcgc2VjdGlvblwiIGVkaXQgc3VtbWFyeS5cblx0XHQgKiBEb2VzIG5vdCByZXF1aXJlIGNhbGxpbmcgYGxvYWQoKWAgZmlyc3QsIHVubGVzcyBhIHdhdGNobGlzdCBleHBpcnlcblx0XHQgKiBpcyB1c2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gIFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBoYXMgc3VjY2VlZGVkLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259ICBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgZmFpbHMuXG5cdFx0ICovXG5cdFx0dGhpcy5uZXdTZWN0aW9uID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnbmV3Jztcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdlZGl0JykpIHtcblx0XHRcdFx0dGhpcy5zYXZlKG9uU3VjY2Vzcywgb25GYWlsdXJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0XHR0aGlzLmxvYWQoZm5BdXRvU2F2ZSwgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBsb2FkZWQgcGFnZSwgaW5jbHVkaW5nIHRoZSBuYW1lc3BhY2UgKi9cblx0XHR0aGlzLmdldFBhZ2VOYW1lID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5wYWdlTmFtZTtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgdGV4dCBvZiB0aGUgcGFnZSBhZnRlciBhIHN1Y2Nlc3NmdWwgbG9hZCgpICovXG5cdFx0dGhpcy5nZXRQYWdlVGV4dCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucGFnZVRleHQ7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtzdHJpbmd9IHBhZ2VUZXh0IC0gVXBkYXRlZCBwYWdlIHRleHQgdGhhdCB3aWxsIGJlIHNhdmVkIHdoZW4gYHNhdmUoKWAgaXMgY2FsbGVkICovXG5cdFx0dGhpcy5zZXRQYWdlVGV4dCA9IChwYWdlVGV4dCkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ2FsbCc7XG5cdFx0XHRjdHgucGFnZVRleHQgPSBwYWdlVGV4dDtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gYXBwZW5kVGV4dCAtIFRleHQgdGhhdCB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBwYWdlIHdoZW4gYGFwcGVuZCgpYCBpcyBjYWxsZWQgKi9cblx0XHR0aGlzLnNldEFwcGVuZFRleHQgPSAoYXBwZW5kVGV4dCkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ2FwcGVuZCc7XG5cdFx0XHRjdHguYXBwZW5kVGV4dCA9IGFwcGVuZFRleHQ7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtzdHJpbmd9IHByZXBlbmRUZXh0IC0gVGV4dCB0aGF0IHdpbGwgYmUgcHJlcGVuZGVkIHRvIHRoZSBwYWdlIHdoZW4gYHByZXBlbmQoKWAgaXMgY2FsbGVkICovXG5cdFx0dGhpcy5zZXRQcmVwZW5kVGV4dCA9IChwcmVwZW5kVGV4dCkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ3ByZXBlbmQnO1xuXHRcdFx0Y3R4LnByZXBlbmRUZXh0ID0gcHJlcGVuZFRleHQ7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtzdHJpbmd9IG5ld1NlY3Rpb25UZXh0IC0gVGV4dCB0aGF0IHdpbGwgYmUgYWRkZWQgaW4gYSBuZXcgc2VjdGlvbiBvbiB0aGUgcGFnZSB3aGVuIGBuZXdTZWN0aW9uKClgIGlzIGNhbGxlZCAqL1xuXHRcdHRoaXMuc2V0TmV3U2VjdGlvblRleHQgPSAobmV3U2VjdGlvblRleHQpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICduZXcnO1xuXHRcdFx0Y3R4Lm5ld1NlY3Rpb25UZXh0ID0gbmV3U2VjdGlvblRleHQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmV3U2VjdGlvblRpdGxlIC0gVGl0bGUgZm9yIHRoZSBuZXcgc2VjdGlvbiBjcmVhdGVkIHdoZW4gYG5ld1NlY3Rpb24oKWAgaXMgY2FsbGVkXG5cdFx0ICogSWYgbWlzc2luZywgYGN0eC5lZGl0U3VtbWFyeWAgd2lsbCBiZSB1c2VkLiBJc3N1ZXMgbWF5IG9jY3VyIGlmIGEgc3Vic3RpdHV0ZWQgdGVtcGxhdGUgaXMgdXNlZC5cblx0XHQgKi9cblx0XHR0aGlzLnNldE5ld1NlY3Rpb25UaXRsZSA9IChuZXdTZWN0aW9uVGl0bGUpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICduZXcnO1xuXHRcdFx0Y3R4Lm5ld1NlY3Rpb25UaXRsZSA9IG5ld1NlY3Rpb25UaXRsZTtcblx0XHR9O1xuXHRcdC8vIEVkaXQtcmVsYXRlZCBzZXR0ZXIgbWV0aG9kczpcblx0XHQvKipcblx0XHQgKiBTZXQgdGhlIGVkaXQgc3VtbWFyeSB0aGF0IHdpbGwgYmUgdXNlZCB3aGVuIGBzYXZlKClgIGlzIGNhbGxlZC5cblx0XHQgKiBVbm5lY2Vzc2FyeSBpZiBlZGl0TW9kZSBpcyAnbmV3JyBhbmQgbmV3U2VjdGlvblRpdGxlIGlzIHByb3ZpZGVkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN1bW1hcnlcblx0XHQgKi9cblx0XHR0aGlzLnNldEVkaXRTdW1tYXJ5ID0gKHN1bW1hcnkpID0+IHtcblx0XHRcdGN0eC5lZGl0U3VtbWFyeSA9IHN1bW1hcnk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXQgYW55IGN1c3RvbSB0YWcocykgdG8gYmUgYXBwbGllZCB0byB0aGUgQVBJIGFjdGlvbi5cblx0XHQgKiBBIG51bWJlciBvZiBhY3Rpb25zIGRvbid0IHN1cHBvcnQgaXQsIG1vc3Qgbm90YWJseSB3YXRjaC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSB0YWdzIC0gU3RyaW5nIG9yIGFycmF5IG9mIHRhZyhzKS5cblx0XHQgKi9cblx0XHR0aGlzLnNldENoYW5nZVRhZ3MgPSAodGFncykgPT4ge1xuXHRcdFx0Y3R4LmNoYW5nZVRhZ3MgPSB0YWdzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtjcmVhdGVPcHRpb249bnVsbF0gLSBDYW4gdGFrZSB0aGUgZm9sbG93aW5nIGZvdXIgdmFsdWVzOlxuXHRcdCAqIC0gcmVjcmVhdGU6IGNyZWF0ZSB0aGUgcGFnZSBpZiBpdCBkb2VzIG5vdCBleGlzdCwgb3IgZWRpdCBpdCBpZiBpdCBleGlzdHMuXG5cdFx0ICogLSBjcmVhdGVvbmx5OiBjcmVhdGUgdGhlIHBhZ2UgaWYgaXQgZG9lcyBub3QgZXhpc3QsIGJ1dCByZXR1cm4gYW5cblx0XHQgKiBlcnJvciBpZiBpdCBhbHJlYWR5IGV4aXN0cy5cblx0XHQgKiAtIG5vY3JlYXRlOiBkb24ndCBjcmVhdGUgdGhlIHBhZ2UsIG9ubHkgZWRpdCBpdCBpZiBpdCBhbHJlYWR5IGV4aXN0cy5cblx0XHQgKiAtIGBudWxsYDogY3JlYXRlIHRoZSBwYWdlIGlmIGl0IGRvZXMgbm90IGV4aXN0LCB1bmxlc3MgaXQgd2FzIGRlbGV0ZWRcblx0XHQgKiBpbiB0aGUgbW9tZW50IGJldHdlZW4gbG9hZGluZyB0aGUgcGFnZSBhbmQgc2F2aW5nIHRoZSBlZGl0IChkZWZhdWx0KS5cblx0XHQgKi9cblx0XHR0aGlzLnNldENyZWF0ZU9wdGlvbiA9IChjcmVhdGVPcHRpb24pID0+IHtcblx0XHRcdGN0eC5jcmVhdGVPcHRpb24gPSBjcmVhdGVPcHRpb247XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtib29sZWFufSBtaW5vckVkaXQgLSBTZXQgdHJ1ZSB0byBtYXJrIHRoZSBlZGl0IGFzIGEgbWlub3IgZWRpdC4gKi9cblx0XHR0aGlzLnNldE1pbm9yRWRpdCA9IChtaW5vckVkaXQpID0+IHtcblx0XHRcdGN0eC5taW5vckVkaXQgPSBtaW5vckVkaXQ7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtib29sZWFufSBib3RFZGl0IC0gU2V0IHRydWUgdG8gbWFyayB0aGUgZWRpdCBhcyBhIGJvdCBlZGl0ICovXG5cdFx0dGhpcy5zZXRCb3RFZGl0ID0gKGJvdEVkaXQpID0+IHtcblx0XHRcdGN0eC5ib3RFZGl0ID0gYm90RWRpdDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlU2VjdGlvbiAtIEludGVnZXIgc3BlY2lmeWluZyB0aGUgc2VjdGlvbiBudW1iZXIgdG8gbG9hZCBvciBzYXZlLlxuXHRcdCAqIElmIHNwZWNpZmllZCBhcyBgbnVsbGAsIHRoZSBlbnRpcmUgcGFnZSB3aWxsIGJlIHJldHJpZXZlZC5cblx0XHQgKi9cblx0XHR0aGlzLnNldFBhZ2VTZWN0aW9uID0gKHBhZ2VTZWN0aW9uKSA9PiB7XG5cdFx0XHRjdHgucGFnZVNlY3Rpb24gPSBwYWdlU2VjdGlvbjtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBtYXhDb25mbGljdFJldHJpZXMgLSBOdW1iZXIgb2YgcmV0cmllcyBmb3Igc2F2ZSBlcnJvcnMgaW52b2x2aW5nIGFuIGVkaXQgY29uZmxpY3Qgb3Jcblx0XHQgKiBsb3NzIG9mIHRva2VuLiBEZWZhdWx0OiAyLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0TWF4Q29uZmxpY3RSZXRyaWVzID0gKG1heENvbmZsaWN0UmV0cmllcykgPT4ge1xuXHRcdFx0Y3R4Lm1heENvbmZsaWN0UmV0cmllcyA9IG1heENvbmZsaWN0UmV0cmllcztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBtYXhSZXRyaWVzIC0gTnVtYmVyIG9mIHJldHJpZXMgZm9yIHNhdmUgZXJyb3JzIG5vdCBpbnZvbHZpbmcgYW4gZWRpdCBjb25mbGljdCBvclxuXHRcdCAqIGxvc3Mgb2YgdG9rZW4uIERlZmF1bHQ6IDIuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRNYXhSZXRyaWVzID0gKG1heFJldHJpZXMpID0+IHtcblx0XHRcdGN0eC5tYXhSZXRyaWVzID0gbWF4UmV0cmllcztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNldCB3aGV0aGVyIGFuZCBob3cgdG8gd2F0Y2ggdGhlIHBhZ2UsIGluY2x1ZGluZyBzZXR0aW5nIGFuIGV4cGlyeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbnxzdHJpbmd8TW9yZWJpdHMuZGF0ZXxEYXRlfSBbd2F0Y2hsaXN0T3B0aW9uPWZhbHNlXSAtXG5cdFx0ICogQmFzaWNhbGx5IGEgbWl4IG9mIE1XIEFQSSBhbmQgVHdpbmtsZXkgb3B0aW9ucyBhdmFpbGFibGUgcHJlLWV4cGlyeTpcblx0XHQgKiAtIGB0cnVlYHxgJ3llcydgfGAnd2F0Y2gnYDogcGFnZSB3aWxsIGJlIGFkZGVkIHRvIHRoZSB1c2VyJ3Ncblx0XHQgKiB3YXRjaGxpc3Qgd2hlbiB0aGUgYWN0aW9uIGlzIGNhbGxlZC4gRGVmYXVsdHMgdG8gYW4gaW5kZWZpbml0ZVxuXHRcdCAqIHdhdGNoIHVubGVzcyBgd2F0Y2hsaXN0RXhwaXJ5YCBpcyBwcm92aWRlZC5cblx0XHQgKiAtIGBmYWxzZWB8YCdubydgfGAnbm9jaGFuZ2UnYDogd2F0Y2hsaXN0IHN0YXR1cyBvZiB0aGUgcGFnZSAoaW5jbHVkaW5nIGV4cGlyeSkgd2lsbCBub3QgYmUgY2hhbmdlZC5cblx0XHQgKiAtIGAnZGVmYXVsdCdgfGAncHJlZmVyZW5jZXMnYDogd2F0Y2hsaXN0IHN0YXR1cyBvZiB0aGUgcGFnZSB3aWxsIGJlXG5cdFx0ICogc2V0IGJhc2VkIG9uIHRoZSB1c2VyJ3MgcHJlZmVyZW5jZSBzZXR0aW5ncyB3aGVuIHRoZSBhY3Rpb24gaXNcblx0XHQgKiBjYWxsZWQuIERlZmF1bHRzIHRvIGFuIGluZGVmaW5pdGUgd2F0Y2ggdW5sZXNzIGB3YXRjaGxpc3RFeHBpcnlgIGlzXG5cdFx0ICogcHJvdmlkZWQuXG5cdFx0ICogLSBgJ3Vud2F0Y2gnYDogZXhwbGljaXRseSB1bndhdGNoIHRoZSBwYWdlLlxuXHRcdCAqIC0gQW55IG90aGVyIGBzdHJpbmdgIG9yIGBudW1iZXJgLCBvciBhIGBNb3JlYml0cy5kYXRlYCBvciBgRGF0ZWBcblx0XHQgKiBvYmplY3Q6IHdhdGNoIHBhZ2UgdW50aWwgdGhlIHNwZWNpZmllZCB0aW1lLCBkZWZlcnJpbmcgdG9cblx0XHQgKiBgd2F0Y2hsaXN0RXhwaXJ5YCBpZiBwcm92aWRlZC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8TW9yZWJpdHMuZGF0ZXxEYXRlfSBbd2F0Y2hsaXN0RXhwaXJ5PWluZmluaXR5XSAtXG5cdFx0ICogQSBkYXRlLWxpa2Ugc3RyaW5nIG9yIG51bWJlciwgb3IgYSBkYXRlIG9iamVjdC4gIElmIGEgc3RyaW5nIG9yIG51bWJlcixcblx0XHQgKiBjYW4gYmUgcmVsYXRpdmUgKDIgd2Vla3MpIG9yIG90aGVyIHNpbWlsYXJseSBkYXRlLWxpa2UgKGkuZS4gTk9UIFwicG90YXRvXCIpOlxuXHRcdCAqIElTTyA4NjAxOiAyMDM4LTAxLTA5VDAzOjE0OjA3WlxuXHRcdCAqIE1lZGlhV2lraTogMjAzODAxMDkwMzE0MDdcblx0XHQgKiBVTklYOiAyMTQ3NDgzNjQ3XG5cdFx0ICogU1FMOiAyMDM4LTAxLTA5IDAzOjE0OjA3XG5cdFx0ICogQ2FuIGFsc28gYmUgYGluZmluaXR5YCBvciBpbmZpbml0eS1saWtlIChgaW5maW5pdGVgLCBgaW5kZWZpbml0ZWAsIGFuZCBgbmV2ZXJgKS5cblx0XHQgKiBTZWUge0BsaW5rIGh0dHBzOi8vcGhhYnJpY2F0b3Iud2lraW1lZGlhLm9yZy9zb3VyY2UvbWVkaWF3aWtpLWxpYnMtVGltZXN0YW1wL2Jyb3dzZS9tYXN0ZXIvc3JjL0NvbnZlcnRpYmxlVGltZXN0YW1wLnBocDs0ZTUzYjg1OWE5NTgwYzU1OTU4MDc4ZjQ2ZGQ0ZjNhNDRkMGZjYWEwJDU3LTEwOT9hcz1zb3VyY2UmYmxhbWU9b2ZmfVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0V2F0Y2hsaXN0ID0gKHdhdGNobGlzdE9wdGlvbiwgd2F0Y2hsaXN0RXhwaXJ5KSA9PiB7XG5cdFx0XHRpZiAod2F0Y2hsaXN0T3B0aW9uIGluc3RhbmNlb2YgTW9yZWJpdHMuZGF0ZSB8fCB3YXRjaGxpc3RPcHRpb24gaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0XHRcdHdhdGNobGlzdE9wdGlvbiA9IHdhdGNobGlzdE9wdGlvbi50b0lTT1N0cmluZygpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdhdGNobGlzdEV4cGlyeSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHdhdGNobGlzdEV4cGlyeSA9ICdpbmZpbml0eSc7XG5cdFx0XHR9IGVsc2UgaWYgKHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIE1vcmViaXRzLmRhdGUgfHwgd2F0Y2hsaXN0RXhwaXJ5IGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0XHR3YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnkudG9JU09TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAod2F0Y2hsaXN0T3B0aW9uKSB7XG5cdFx0XHRcdGNhc2UgJ25vY2hhbmdlJzpcblx0XHRcdFx0Y2FzZSAnbm8nOlxuXHRcdFx0XHRjYXNlIGZhbHNlOlxuXHRcdFx0XHRjYXNlIHVuZGVmaW5lZDpcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ25vY2hhbmdlJztcblx0XHRcdFx0XHQvLyBUaGUgTVcgQVBJIGFsbG93cyBmb3IgY2hhbmdpbmcgZXhwaXJ5IHdpdGggbm9jaGFuZ2UgKGFzIFwibm9jaGFuZ2VcIiByZWZlcnMgdG8gdGhlIGJpbmFyeSBzdGF0dXMpLFxuXHRcdFx0XHRcdC8vIGJ1dCBieSBrZWVwaW5nIHRoaXMgbnVsbCBpdCB3aWxsIGRlZmF1bHQgdG8gYW55IGV4aXN0aW5nIGV4cGlyeSwgZW5zdXJlIHRoZXJlIGlzIGFjdHVhbGx5IFwibm8gY2hhbmdlLlwiXG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdEV4cGlyeSA9IG51bGw7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3Vud2F0Y2gnOlxuXHRcdFx0XHRcdC8vIGV4cGlyeSB1bmltcG9ydGFudFxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAndW53YXRjaCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3ByZWZlcmVuY2VzJzpcblx0XHRcdFx0Y2FzZSAnZGVmYXVsdCc6XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICdwcmVmZXJlbmNlcyc7XG5cdFx0XHRcdFx0Ly8gVGhlIEFQSSBhbGxvd3MgYW4gZXhwaXJ5IGhlcmUsIGJ1dCB0aGVyZSBpcyBhcyBvZiB5ZXQgKFQyNjU3MTYpXG5cdFx0XHRcdFx0Ly8gbm8gZXhwaXJ5IHByZWZlcmVuY2Ugb3B0aW9uLCBzbyBpdCdzIGEgYml0IGRldm9pZCBvZiBjb250ZXh0LlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3dhdGNoJzpcblx0XHRcdFx0Y2FzZSAneWVzJzpcblx0XHRcdFx0Y2FzZSB0cnVlOlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAnd2F0Y2gnO1xuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gTm90IHJlYWxseSBhIFwiZGVmYXVsdFwiIHBlciBzZSBidXQgY2F0Y2hlcyBcImFueSBvdGhlciBzdHJpbmdcIlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAnd2F0Y2gnO1xuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RPcHRpb247XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXQgYSB3YXRjaGxpc3QgZXhwaXJ5LiBzZXRXYXRjaGxpc3QgY2FuIG1vc3RseSBoYW5kbGUgdGhpcyBieVxuXHRcdCAqIGl0c2VsZiwgc28gdGhpcyBpcyBoZXJlIGxhcmdlbHkgZm9yIGNvbXBsZXRlbmVzcyBhbmQgY29tcGF0aWJpbGl0eVxuXHRcdCAqIHdpdGggdGhlIGZ1bGwgc3VpdGUgb2Ygb3B0aW9ucy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxNb3JlYml0cy5kYXRlfERhdGV9IFt3YXRjaGxpc3RFeHBpcnk9aW5maW5pdHldIC1cblx0XHQgKiBBIGRhdGUtbGlrZSBzdHJpbmcgb3IgbnVtYmVyLCBvciBhIGRhdGUgb2JqZWN0LiAgSWYgYSBzdHJpbmcgb3IgbnVtYmVyLFxuXHRcdCAqIGNhbiBiZSByZWxhdGl2ZSAoMiB3ZWVrcykgb3Igb3RoZXIgc2ltaWxhcmx5IGRhdGUtbGlrZSAoaS5lLiBOT1QgXCJwb3RhdG9cIik6XG5cdFx0ICogSVNPIDg2MDE6IDIwMzgtMDEtMDlUMDM6MTQ6MDdaXG5cdFx0ICogTWVkaWFXaWtpOiAyMDM4MDEwOTAzMTQwN1xuXHRcdCAqIFVOSVg6IDIxNDc0ODM2NDdcblx0XHQgKiBTUUw6IDIwMzgtMDEtMDkgMDM6MTQ6MDdcblx0XHQgKiBDYW4gYWxzbyBiZSBgaW5maW5pdHlgIG9yIGluZmluaXR5LWxpa2UgKGBpbmZpbml0ZWAsIGBpbmRlZmluaXRlYCwgYW5kIGBuZXZlcmApLlxuXHRcdCAqIFNlZSB7QGxpbmsgaHR0cHM6Ly9waGFicmljYXRvci53aWtpbWVkaWEub3JnL3NvdXJjZS9tZWRpYXdpa2ktbGlicy1UaW1lc3RhbXAvYnJvd3NlL21hc3Rlci9zcmMvQ29udmVydGlibGVUaW1lc3RhbXAucGhwOzRlNTNiODU5YTk1ODBjNTU5NTgwNzhmNDZkZDRmM2E0NGQwZmNhYTAkNTctMTA5P2FzPXNvdXJjZSZibGFtZT1vZmZ9XG5cdFx0ICovXG5cdFx0dGhpcy5zZXRXYXRjaGxpc3RFeHBpcnkgPSAod2F0Y2hsaXN0RXhwaXJ5KSA9PiB7XG5cdFx0XHRpZiAod2F0Y2hsaXN0RXhwaXJ5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0d2F0Y2hsaXN0RXhwaXJ5ID0gJ2luZmluaXR5Jztcblx0XHRcdH0gZWxzZSBpZiAod2F0Y2hsaXN0RXhwaXJ5IGluc3RhbmNlb2YgTW9yZWJpdHMuZGF0ZSB8fCB3YXRjaGxpc3RFeHBpcnkgaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0XHRcdHdhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeS50b0lTT1N0cmluZygpO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LndhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBkZXByZWNhdGVkIEFzIG9mIERlY2VtYmVyIDIwMjAsIHVzZSBzZXRXYXRjaGxpc3QuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbd2F0Y2hsaXN0T3B0aW9uPWZhbHNlXSAtXG5cdFx0ICogLSBgVHJ1ZWA6IHBhZ2Ugd2F0Y2hsaXN0IHN0YXR1cyB3aWxsIGJlIHNldCBiYXNlZCBvbiB0aGUgdXNlcidzXG5cdFx0ICogcHJlZmVyZW5jZSBzZXR0aW5ncyB3aGVuIGBzYXZlKClgIGlzIGNhbGxlZC5cblx0XHQgKiAtIGBGYWxzZWA6IHdhdGNobGlzdCBzdGF0dXMgb2YgdGhlIHBhZ2Ugd2lsbCBub3QgYmUgY2hhbmdlZC5cblx0XHQgKlxuXHRcdCAqIFdhdGNobGlzdCBub3Rlczpcblx0XHQgKiAxLiBUaGUgTWVkaWFXaWtpIEFQSSB2YWx1ZSBvZiAndW53YXRjaCcsIHdoaWNoIGV4cGxpY2l0bHkgcmVtb3Zlc1xuXHRcdCAqIHRoZSBwYWdlIGZyb20gdGhlIHVzZXIncyB3YXRjaGxpc3QsIGlzIG5vdCB1c2VkLlxuXHRcdCAqIDIuIElmIGJvdGggYHNldFdhdGNobGlzdCgpYCBhbmQgYHNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcygpYCBhcmVcblx0XHQgKiBjYWxsZWQsIHRoZSBsYXN0IGNhbGwgdGFrZXMgcHJpb3JpdHkuXG5cdFx0ICogMy4gVHdpbmtsZSBtb2R1bGVzIHNob3VsZCB1c2UgdGhlIGFwcHJvcHJpYXRlIHByZWZlcmVuY2UgdG8gc2V0IHRoZSB3YXRjaGxpc3Qgb3B0aW9ucy5cblx0XHQgKiA0LiBNb3N0IFR3aW5rbGUgbW9kdWxlcyB1c2UgYHNldFdhdGNobGlzdCgpYC4gYHNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcygpYFxuXHRcdCAqIGlzIG9ubHkgbmVlZGVkIGZvciB0aGUgZmV3IFR3aW5rbGUgd2F0Y2hsaXN0IHByZWZlcmVuY2VzIHRoYXRcblx0XHQgKiBhY2NlcHQgYSBzdHJpbmcgdmFsdWUgb2YgYGRlZmF1bHRgLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzID0gKHdhdGNobGlzdE9wdGlvbikgPT4ge1xuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHQnTk9URTogTW9yZWJpdHMud2lraS5wYWdlLnNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcyB3YXMgZGVwcmVjYXRlZCBEZWNlbWJlciAyMDIwLCBwbGVhc2UgdXNlIHNldFdhdGNobGlzdCdcblx0XHRcdCk7XG5cdFx0XHRpZiAod2F0Y2hsaXN0T3B0aW9uKSB7XG5cdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAncHJlZmVyZW5jZXMnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICdub2NoYW5nZSc7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb2xsb3dSZWRpcmVjdD1mYWxzZV0gLVxuXHRcdCAqIC0gYHRydWVgOiBhIG1heGltdW0gb2Ygb25lIHJlZGlyZWN0IHdpbGwgYmUgZm9sbG93ZWQuIEluIHRoZSBldmVudFxuXHRcdCAqIG9mIGEgcmVkaXJlY3QsIGEgbWVzc2FnZSBpcyBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIgYW5kIHRoZSByZWRpcmVjdFxuXHRcdCAqIHRhcmdldCBjYW4gYmUgcmV0cmlldmVkIHdpdGggZ2V0UGFnZU5hbWUoKS5cblx0XHQgKiAtIGBmYWxzZWA6IChkZWZhdWx0KSB0aGUgcmVxdWVzdGVkIHBhZ2VOYW1lIHdpbGwgYmUgdXNlZCB3aXRob3V0IHJlZ2FyZCB0byBhbnkgcmVkaXJlY3QuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbZm9sbG93Q3Jvc3NOc1JlZGlyZWN0PXRydWVdIC0gTm90IGFwcGxpY2FibGUgaWYgYGZvbGxvd1JlZGlyZWN0YCBpcyBub3Qgc2V0IHRydWUuXG5cdFx0ICogLSBgdHJ1ZWA6IChkZWZhdWx0KSBmb2xsb3cgcmVkaXJlY3QgZXZlbiBpZiBpdCBpcyBhIGNyb3NzLW5hbWVzcGFjZSByZWRpcmVjdFxuXHRcdCAqIC0gYGZhbHNlYDogZG9uJ3QgZm9sbG93IHJlZGlyZWN0IGlmIGl0IGlzIGNyb3NzLW5hbWVzcGFjZSwgZWRpdCB0aGUgcmVkaXJlY3QgaXRzZWxmLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0Rm9sbG93UmVkaXJlY3QgPSAoZm9sbG93UmVkaXJlY3QsIGZvbGxvd0Nyb3NzTnNSZWRpcmVjdCkgPT4ge1xuXHRcdFx0aWYgKGN0eC5wYWdlTG9hZGVkKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdCdJbnRlcm5hbCBlcnJvcjogY2Fubm90IGNoYW5nZSByZWRpcmVjdCBzZXR0aW5nIGFmdGVyIHRoZSBwYWdlIGhhcyBiZWVuIGxvYWRlZCEnXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5mb2xsb3dSZWRpcmVjdCA9IGZvbGxvd1JlZGlyZWN0O1xuXHRcdFx0Y3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCA9XG5cdFx0XHRcdGZvbGxvd0Nyb3NzTnNSZWRpcmVjdCA9PT0gdW5kZWZpbmVkID8gY3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCA6IGZvbGxvd0Nyb3NzTnNSZWRpcmVjdDtcblx0XHR9O1xuXHRcdC8vIGxvb2t1cC1jcmVhdGlvbiBzZXR0ZXIgZnVuY3Rpb25cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgLSBJZiBzZXQgdHJ1ZSwgdGhlIGF1dGhvciBhbmQgdGltZXN0YW1wIG9mXG5cdFx0ICogdGhlIGZpcnN0IG5vbi1yZWRpcmVjdCB2ZXJzaW9uIG9mIHRoZSBwYWdlIGlzIHJldHJpZXZlZC5cblx0XHQgKlxuXHRcdCAqIFdhcm5pbmc6XG5cdFx0ICogMS4gSWYgdGhlcmUgYXJlIG5vIHJldmlzaW9ucyBhbW9uZyB0aGUgZmlyc3QgNTAgdGhhdCBhcmVcblx0XHQgKiBub24tcmVkaXJlY3RzLCBvciBpZiB0aGVyZSBhcmUgbGVzcyA1MCByZXZpc2lvbnMgYW5kIGFsbCBhcmVcblx0XHQgKiByZWRpcmVjdHMsIHRoZSBvcmlnaW5hbCBjcmVhdGlvbiBpcyByZXRyaWV2ZWQuXG5cdFx0ICogMi4gUmV2aXNpb25zIHRoYXQgdGhlIHVzZXIgaXMgbm90IHByaXZpbGVnZWQgdG8gYWNjZXNzXG5cdFx0ICogKHJldmRlbGVkL3N1cHByZXNzZWQpIHdpbGwgYmUgdHJlYXRlZCBhcyBub24tcmVkaXJlY3RzLlxuXHRcdCAqIDMuIE11c3Qgbm90IGJlIHVzZWQgd2hlbiB0aGUgcGFnZSBoYXMgYSBub24td2lraXRleHQgY29udGVudG1vZGVsXG5cdFx0ICogc3VjaCBhcyBNb2R1bGVzcGFjZSBMdWEgb3IgdXNlciBKYXZhU2NyaXB0L0NTUy5cblx0XHQgKi9cblx0XHR0aGlzLnNldExvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciA9IChmbGFnKSA9PiB7XG5cdFx0XHRjdHgubG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yID0gZmxhZztcblx0XHR9O1xuXHRcdC8vIE1vdmUtcmVsYXRlZCBzZXR0ZXIgZnVuY3Rpb25zXG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBkZXN0aW5hdGlvbiAqL1xuXHRcdHRoaXMuc2V0TW92ZURlc3RpbmF0aW9uID0gKGRlc3RpbmF0aW9uKSA9PiB7XG5cdFx0XHRjdHgubW92ZURlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtib29sZWFufSBmbGFnICovXG5cdFx0dGhpcy5zZXRNb3ZlVGFsa1BhZ2UgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVUYWxrUGFnZSA9ICEhZmxhZztcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgKi9cblx0XHR0aGlzLnNldE1vdmVTdWJwYWdlcyA9IChmbGFnKSA9PiB7XG5cdFx0XHRjdHgubW92ZVN1YnBhZ2VzID0gISFmbGFnO1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gZmxhZyAqL1xuXHRcdHRoaXMuc2V0TW92ZVN1cHByZXNzUmVkaXJlY3QgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVTdXBwcmVzc1JlZGlyZWN0ID0gISFmbGFnO1xuXHRcdH07XG5cdFx0Ly8gUHJvdGVjdC1yZWxhdGVkIHNldHRlciBmdW5jdGlvbnNcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGV2ZWwgLSBUaGUgcmlnaHQgcmVxdWlyZWQgZm9yIHRoZSBzcGVjaWZpYyBhY3Rpb25cblx0XHQgKiBlLmcuIHN5c29wLCB0ZW1wbGF0ZWVkaXRvciwgYXV0b2NvbmZpcm1lZFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwaXJ5PWluZmluaXR5XVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0RWRpdFByb3RlY3Rpb24gPSAobGV2ZWwsIGV4cGlyeSkgPT4ge1xuXHRcdFx0Y3R4LnByb3RlY3RFZGl0ID0ge1xuXHRcdFx0XHRsZXZlbCxcblx0XHRcdFx0ZXhwaXJ5OiBleHBpcnkgfHwgJ2luZmluaXR5Jyxcblx0XHRcdH07XG5cdFx0fTtcblx0XHR0aGlzLnNldE1vdmVQcm90ZWN0aW9uID0gKGxldmVsLCBleHBpcnkpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0TW92ZSA9IHtcblx0XHRcdFx0bGV2ZWwsXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5IHx8ICdpbmZpbml0eScsXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0dGhpcy5zZXRDcmVhdGVQcm90ZWN0aW9uID0gKGxldmVsLCBleHBpcnkpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0Q3JlYXRlID0ge1xuXHRcdFx0XHRsZXZlbCxcblx0XHRcdFx0ZXhwaXJ5OiBleHBpcnkgfHwgJ2luZmluaXR5Jyxcblx0XHRcdH07XG5cdFx0fTtcblx0XHR0aGlzLnNldENhc2NhZGluZ1Byb3RlY3Rpb24gPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4LnByb3RlY3RDYXNjYWRlID0gISFmbGFnO1xuXHRcdH07XG5cdFx0dGhpcy5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nID0gKCkgPT4ge1xuXHRcdFx0Y3R4LnN1cHByZXNzUHJvdGVjdFdhcm5pbmcgPSB0cnVlO1xuXHRcdH07XG5cdFx0Ly8gUmV2ZXJ0LXJlbGF0ZWQgZ2V0dGVycy9zZXR0ZXJzOlxuXHRcdHRoaXMuc2V0T2xkSUQgPSAob2xkSUQpID0+IHtcblx0XHRcdGN0eC5yZXZlcnRPbGRJRCA9IG9sZElEO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjdXJyZW50IHJldmlzaW9uIElEIG9mIHRoZSBwYWdlICovXG5cdFx0dGhpcy5nZXRDdXJyZW50SUQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnJldmVydEN1cklEO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IExhc3QgZWRpdG9yIG9mIHRoZSBwYWdlICovXG5cdFx0dGhpcy5nZXRSZXZpc2lvblVzZXIgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnJldmVydFVzZXI7XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gSVNPIDg2MDEgdGltZXN0YW1wIGF0IHdoaWNoIHRoZSBwYWdlIHdhcyBsYXN0IGVkaXRlZC4gKi9cblx0XHR0aGlzLmdldExhc3RFZGl0VGltZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgubGFzdEVkaXRUaW1lO1xuXHRcdH07XG5cdFx0Ly8gTWlzY2VsbGFuZW91cyBnZXR0ZXJzL3NldHRlcnM6XG5cdFx0LyoqXG5cdFx0ICogRGVmaW5lIGFuIG9iamVjdCBmb3IgdXNlIGluIGEgY2FsbGJhY2sgZnVuY3Rpb24uXG5cdFx0ICpcblx0XHQgKiBgY2FsbGJhY2tQYXJhbWV0ZXJzYCBpcyBmb3IgdXNlIGJ5IHRoZSBjYWxsZXIgb25seS4gVGhlIHBhcmFtZXRlcnNcblx0XHQgKiBhbGxvdyBhIGNhbGxlciB0byBwYXNzIHRoZSBwcm9wZXIgY29udGV4dCBpbnRvIGl0cyBjYWxsYmFja1xuXHRcdCAqIGZ1bmN0aW9uLiAgQ2FsbGVycyBtdXN0IGVuc3VyZSB0aGF0IGFueSBjaGFuZ2VzIHRvIHRoZVxuXHRcdCAqIGNhbGxiYWNrUGFyYW1ldGVycyBvYmplY3Qgd2l0aGluIGEgYGxvYWQoKWAgY2FsbGJhY2sgc3RpbGwgcGVybWl0IGFcblx0XHQgKiBwcm9wZXIgcmUtZW50cnkgaW50byB0aGUgYGxvYWQoKWAgY2FsbGJhY2sgaWYgYW4gZWRpdCBjb25mbGljdCBpc1xuXHRcdCAqIGRldGVjdGVkIHVwb24gY2FsbGluZyBgc2F2ZSgpYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFja1BhcmFtZXRlcnNcblx0XHQgKi9cblx0XHR0aGlzLnNldENhbGxiYWNrUGFyYW1ldGVycyA9IChjYWxsYmFja1BhcmFtZXRlcnMpID0+IHtcblx0XHRcdGN0eC5jYWxsYmFja1BhcmFtZXRlcnMgPSBjYWxsYmFja1BhcmFtZXRlcnM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7T2JqZWN0fSAtIFRoZSBvYmplY3QgcHJldmlvdXNseSBzZXQgYnkgYHNldENhbGxiYWNrUGFyYW1ldGVycygpYC5cblx0XHQgKi9cblx0XHR0aGlzLmdldENhbGxiYWNrUGFyYW1ldGVycyA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguY2FsbGJhY2tQYXJhbWV0ZXJzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtNb3JlYml0cy5zdGF0dXN9IHN0YXR1c0VsZW1lbnRcblx0XHQgKi9cblx0XHR0aGlzLnNldFN0YXR1c0VsZW1lbnQgPSAoc3RhdHVzRWxlbWVudCkgPT4ge1xuXHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQgPSBzdGF0dXNFbGVtZW50O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gU3RhdHVzIGVsZW1lbnQgY3JlYXRlZCBieSB0aGUgY29uc3RydWN0b3IuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRTdGF0dXNFbGVtZW50ID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5zdGF0dXNFbGVtZW50O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBhZ2UgZXhpc3RlZCBvbiB0aGUgd2lraSB3aGVuIGl0IHdhcyBsYXN0IGxvYWRlZC5cblx0XHQgKi9cblx0XHR0aGlzLmV4aXN0cyA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucGFnZUV4aXN0cztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFBhZ2UgSUQgb2YgdGhlIHBhZ2UgbG9hZGVkLiAwIGlmIHRoZSBwYWdlIGRvZXNuJ3Rcblx0XHQgKiBleGlzdC5cblx0XHQgKi9cblx0XHR0aGlzLmdldFBhZ2VJRCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucGFnZUlEO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gLSBDb250ZW50IG1vZGVsIG9mIHRoZSBwYWdlLiAgUG9zc2libGUgdmFsdWVzXG5cdFx0ICogaW5jbHVkZSAoYnV0IG1heSBub3QgYmUgbGltaXRlZCB0byk6IGB3aWtpdGV4dGAsIGBqYXZhc2NyaXB0YCxcblx0XHQgKiBgY3NzYCwgYGpzb25gLCBgU2NyaWJ1bnRvYCwgYHNhbml0aXplZC1jc3NgLCBgTWFzc01lc3NhZ2VMaXN0Q29udGVudGAuXG5cdFx0ICogQWxzbyBnZXR0YWJsZSB2aWEgYG13LmNvbmZpZy5nZXQoJ3dnUGFnZUNvbnRlbnRNb2RlbCcpYC5cblx0XHQgKi9cblx0XHR0aGlzLmdldENvbnRlbnRNb2RlbCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguY29udGVudE1vZGVsO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW58c3RyaW5nfSAtIFdhdGNoZWQgc3RhdHVzIG9mIHRoZSBwYWdlLiBCb29sZWFuXG5cdFx0ICogdW5sZXNzIGl0J3MgYmVpbmcgd2F0Y2hlZCB0ZW1wb3JhcmlseSwgaW4gd2hpY2ggY2FzZSByZXR1cm5zIHRoZVxuXHRcdCAqIGV4cGlyeSBzdHJpbmcuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRXYXRjaGVkID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC53YXRjaGVkO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gSVNPIDg2MDEgdGltZXN0YW1wIGF0IHdoaWNoIHRoZSBwYWdlIHdhcyBsYXN0IGxvYWRlZC5cblx0XHQgKi9cblx0XHR0aGlzLmdldExvYWRUaW1lID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5sb2FkVGltZTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSB1c2VyIHdobyBjcmVhdGVkIHRoZSBwYWdlIGZvbGxvd2luZyBgbG9va3VwQ3JlYXRpb24oKWAuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRDcmVhdG9yID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5jcmVhdG9yO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIElTT1N0cmluZyB0aW1lc3RhbXAgb2YgcGFnZSBjcmVhdGlvbiBmb2xsb3dpbmcgYGxvb2t1cENyZWF0aW9uKClgLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0Q3JlYXRpb25UaW1lc3RhbXAgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnRpbWVzdGFtcDtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciBvciBub3QgeW91IGNhbiBlZGl0IHRoZSBwYWdlICovXG5cdFx0dGhpcy5jYW5FZGl0ID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuICEhY3R4LnRlc3RBY3Rpb25zICYmIGN0eC50ZXN0QWN0aW9ucy5pbmNsdWRlcygnZWRpdCcpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogUmV0cmlldmVzIHRoZSB1c2VybmFtZSBvZiB0aGUgdXNlciB3aG8gY3JlYXRlZCB0aGUgcGFnZSBhcyB3ZWxsIGFzXG5cdFx0ICogdGhlIHRpbWVzdGFtcCBvZiBjcmVhdGlvbi4gIFRoZSB1c2VybmFtZSBjYW4gYmUgcmV0cmlldmVkIHVzaW5nIHRoZVxuXHRcdCAqIGBnZXRDcmVhdG9yKClgIGZ1bmN0aW9uOyB0aGUgdGltZXN0YW1wIGNhbiBiZSByZXRyaWV2ZWQgdXNpbmcgdGhlXG5cdFx0ICogYGdldENyZWF0aW9uVGltZXN0YW1wKClgIGZ1bmN0aW9uLlxuXHRcdCAqIFByaW9yIHRvIEp1bmUgMjAxOSBrbm93biBhcyBgbG9va3VwQ3JlYXRvcigpYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IG9uU3VjY2VzcyAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuXG5cdFx0ICogdGhlIHVzZXJuYW1lIGFuZCB0aW1lc3RhbXAgYXJlIGZvdW5kIHdpdGhpbiB0aGUgY2FsbGJhY2suXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlblxuXHRcdCAqIHRoZSBsb29rdXAgZmFpbHNcblx0XHQgKi9cblx0XHR0aGlzLmxvb2t1cENyZWF0aW9uID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvblN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghb25TdWNjZXNzKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogbm8gb25TdWNjZXNzIGNhbGxiYWNrIHByb3ZpZGVkIHRvIGxvb2t1cENyZWF0aW9uKCkhJyk7XG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHRpdGxlczogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRydmxpbWl0OiAxLFxuXHRcdFx0XHRydnByb3A6ICd1c2VyfHRpbWVzdGFtcCcsXG5cdFx0XHRcdHJ2ZGlyOiAnbmV3ZXInLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHQvLyBPbmx5IHRoZSB3aWtpdGV4dCBjb250ZW50IG1vZGVsIGNhbiByZWxpYWJseSBoYW5kbGVcblx0XHRcdC8vIHJ2c2VjdGlvbiwgb3RoZXJzIHJldHVybiBhbiBlcnJvciB3aGVuIHBhaXJlZCB3aXRoIHRoZVxuXHRcdFx0Ly8gY29udGVudCBydnByb3AuIFJlbGF0ZWRseSwgbm9uLXdpa2l0ZXh0IG1vZGVscyBkb24ndFxuXHRcdFx0Ly8gdW5kZXJzdGFuZCB0aGUgI1JFRElSRUNUIGNvbmNlcHQsIHNvIHdlIHNob3VsZG4ndCBhdHRlbXB0XG5cdFx0XHQvLyB0aGUgcmVkaXJlY3QgcmVzb2x1dGlvbiBpbiBmbkxvb2t1cENyZWF0aW9uU3VjY2Vzc1xuXHRcdFx0aWYgKGN0eC5sb29rdXBOb25SZWRpcmVjdENyZWF0b3IpIHtcblx0XHRcdFx0cXVlcnkucnZzZWN0aW9uID0gMDtcblx0XHRcdFx0cXVlcnkucnZwcm9wICs9ICd8Y29udGVudCc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRcdHF1ZXJ5LnJlZGlyZWN0cyA9ICcnOyAvLyBmb2xsb3cgYWxsIHJlZGlyZWN0c1xuXHRcdFx0fVxuXG5cdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5oqT5Y+W6aG16Z2i5Yib5bu66ICF5L+h5oGvJywgJ+aKk+WPlumggemdouW7uueri+iAheizh+ioiicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5Mb29rdXBDcmVhdGlvblN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFJldmVydHMgYSBwYWdlIHRvIGByZXZlcnRPbGRJRGAgc2V0IGJ5IGBzZXRPbGRJRGAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdFx0ICovXG5cdFx0dGhpcy5yZXZlcnQgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghY3R4LnJldmVydE9sZElEKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogcmV2aXNpb24gSUQgdG8gcmV2ZXJ0IHRvIHdhcyBub3Qgc2V0IGJlZm9yZSByZXZlcnQhJyk7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAncmV2ZXJ0Jztcblx0XHRcdHRoaXMubG9hZChmbkF1dG9TYXZlLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBNb3ZlcyBhIHBhZ2UgdG8gYW5vdGhlciB0aXRsZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLm1vdmUgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vbk1vdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uTW92ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghZm5QcmVmbGlnaHRDaGVja3MuY2FsbCh0aGlzLCAnbW92ZScsIGN0eC5vbk1vdmVGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGlmICghY3R4Lm1vdmVEZXN0aW5hdGlvbikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IGRlc3RpbmF0aW9uIHBhZ2UgbmFtZSB3YXMgbm90IHNldCBiZWZvcmUgbW92ZSEnKTtcblx0XHRcdFx0Y3R4Lm9uTW92ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdtb3ZlJykpIHtcblx0XHRcdFx0Zm5Qcm9jZXNzTW92ZS5jYWxsKHRoaXMsIHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSBmbk5lZWRUb2tlbkluZm9RdWVyeSgnbW92ZScpO1xuXHRcdFx0XHRjdHgubW92ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRmblByb2Nlc3NNb3ZlLFxuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRcdGN0eC5vbk1vdmVGYWlsdXJlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5tb3ZlQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4Lm1vdmVBcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogTWFya3MgdGhlIHBhZ2UgYXMgcGF0cm9sbGVkLCB1c2luZyBgcmNpZGAgKGlmIGF2YWlsYWJsZSkgb3IgYHJldmlkYC5cblx0XHQgKlxuXHRcdCAqIFBhdHJvbGxpbmcgYXMgc3VjaCBkb2Vzbid0IG5lZWQgdG8gcmVseSBvbiBsb2FkaW5nIHRoZSBwYWdlIGluXG5cdFx0ICogcXVlc3Rpb247IHNpbXBseSBwYXNzaW5nIGEgcmV2aWQgdG8gdGhlIEFQSSBpcyBzdWZmaWNpZW50LCBzbyBpblxuXHRcdCAqIHRob3NlIGNhc2VzIGp1c3QgdXNpbmcge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSBpcyBwcm9iYWJseSBwcmVmZXJhYmxlLlxuXHRcdCAqXG5cdFx0ICogTm8gZXJyb3IgaGFuZGxpbmcgc2luY2Ugd2UgZG9uJ3QgYWN0dWFsbHkgY2FyZSBhYm91dCB0aGUgZXJyb3JzLlxuXHRcdCAqL1xuXHRcdHRoaXMucGF0cm9sID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKCFNb3JlYml0cy51c2VySXNTeXNvcCAmJiAhTW9yZWJpdHMudXNlcklzSW5Hcm91cCgncGF0cm9sbGVyJykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHQvLyBJZiBhIGxpbmsgaXMgcHJlc2VudCwgZG9uJ3QgbmVlZCB0byBjaGVjayBpZiBpdCdzIHBhdHJvbGxlZFxuXHRcdFx0aWYgKCRib2R5LmZpbmQoJy5wYXRyb2xsaW5rJykubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnN0IHBhdHJvbGhyZWYgPSAkYm9keS5maW5kKCcucGF0cm9sbGluayBhJykuYXR0cignaHJlZicpO1xuXHRcdFx0XHRjdHgucmNpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncmNpZCcsIHBhdHJvbGhyZWYpO1xuXHRcdFx0XHRmblByb2Nlc3NQYXRyb2wodGhpcywgdGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBwYXRyb2xRdWVyeSA9IHtcblx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0XHRcdHR5cGU6ICdwYXRyb2wnLFxuXHRcdFx0XHRcdC8vIGFzIGxvbmcgYXMgd2UncmUgcXVlcnlpbmcsIG1pZ2h0IGFzIHdlbGwgZ2V0IGEgdG9rZW5cblx0XHRcdFx0XHRsaXN0OiAncmVjZW50Y2hhbmdlcycsXG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgdGhlIHBhZ2UgaXMgdW5wYXRyb2xsZWRcblx0XHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0XHRyY3Byb3A6ICdwYXRyb2xsZWQnLFxuXHRcdFx0XHRcdHJjdGl0bGU6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0XHRyY2xpbWl0OiAxLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRjdHgucGF0cm9sQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0XHRcdHBhdHJvbFF1ZXJ5LFxuXHRcdFx0XHRcdGZuUHJvY2Vzc1BhdHJvbFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgucGF0cm9sQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4LnBhdHJvbEFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvLyB8ZGVsZXRlfCBpcyBhIHJlc2VydmVkIHdvcmQgaW4gc29tZSBmbGF2b3VycyBvZiBKU1xuXHRcdC8qKlxuXHRcdCAqIERlbGV0ZXMgYSBwYWdlIChmb3IgYWRtaW5zIG9ubHkpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHRcdCAqL1xuXHRcdHRoaXMuZGVsZXRlUGFnZSA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uRGVsZXRlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vbkRlbGV0ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghZm5QcmVmbGlnaHRDaGVja3MuY2FsbCh0aGlzLCAnZGVsZXRlJywgY3R4Lm9uRGVsZXRlRmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZGVsZXRlJykpIHtcblx0XHRcdFx0Zm5Qcm9jZXNzRGVsZXRlLmNhbGwodGhpcywgdGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBxdWVyeSA9IGZuTmVlZFRva2VuSW5mb1F1ZXJ5KCdkZWxldGUnKTtcblx0XHRcdFx0Y3R4LmRlbGV0ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRmblByb2Nlc3NEZWxldGUsXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdFx0Y3R4Lm9uRGVsZXRlRmFpbHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHguZGVsZXRlQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4LmRlbGV0ZUFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBVbmRlbGV0ZXMgYSBwYWdlIChmb3IgYWRtaW5zIG9ubHkpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHRcdCAqL1xuXHRcdHRoaXMudW5kZWxldGVQYWdlID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25VbmRlbGV0ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghZm5QcmVmbGlnaHRDaGVja3MuY2FsbCh0aGlzLCAndW5kZWxldGUnLCBjdHgub25VbmRlbGV0ZUZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ3VuZGVsZXRlJykpIHtcblx0XHRcdFx0Zm5Qcm9jZXNzVW5kZWxldGUuY2FsbCh0aGlzLCB0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gZm5OZWVkVG9rZW5JbmZvUXVlcnkoJ3VuZGVsZXRlJyk7XG5cdFx0XHRcdGN0eC51bmRlbGV0ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRmblByb2Nlc3NVbmRlbGV0ZSxcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmVcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4LnVuZGVsZXRlQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4LnVuZGVsZXRlQXBpLnBvc3QoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFByb3RlY3RzIGEgcGFnZSAoZm9yIGFkbWlucyBvbmx5KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLnByb3RlY3QgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vblByb3RlY3RTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghZm5QcmVmbGlnaHRDaGVja3MuY2FsbCh0aGlzLCAncHJvdGVjdCcsIGN0eC5vblByb3RlY3RGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGlmICghY3R4LnByb3RlY3RFZGl0ICYmICFjdHgucHJvdGVjdE1vdmUgJiYgIWN0eC5wcm90ZWN0Q3JlYXRlKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdCdJbnRlcm5hbCBlcnJvcjogeW91IG11c3Qgc2V0IGVkaXQgYW5kL29yIG1vdmUgYW5kL29yIGNyZWF0ZSBwcm90ZWN0aW9uIGJlZm9yZSBjYWxsaW5nIHByb3RlY3QoKSEnXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBiZWNhdXNlIG9mIHRoZSB3YXkgTVcgQVBJIGludGVycHJldHMgcHJvdGVjdGlvbiBsZXZlbHNcblx0XHRcdC8vIChhYnNvbHV0ZSwgbm90IGRpZmZlcmVudGlhbCksIHdlIGFsd2F5cyBuZWVkIHRvIHJlcXVlc3Rcblx0XHRcdC8vIHByb3RlY3Rpb24gbGV2ZWxzIGZyb20gdGhlIHNlcnZlclxuXHRcdFx0Y29uc3QgcXVlcnkgPSBmbk5lZWRUb2tlbkluZm9RdWVyeSgncHJvdGVjdCcpO1xuXHRcdFx0Y3R4LnByb3RlY3RBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5Qcm9jZXNzUHJvdGVjdCxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnByb3RlY3RBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnByb3RlY3RBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Lypcblx0XHQgKiBQcml2YXRlIG1lbWJlciBmdW5jdGlvbnNcblx0XHQgKiBUaGVzZSBhcmUgbm90IGV4cG9zZWQgb3V0c2lkZVxuXHRcdCAqL1xuXHRcdC8qKlxuXHRcdCAqIERldGVybWluZXMgd2hldGhlciB3ZSBjYW4gc2F2ZSBhbiBBUEkgY2FsbCBieSB1c2luZyB0aGUgY3NyZiB0b2tlblxuXHRcdCAqIHNlbnQgd2l0aCB0aGUgcGFnZSBIVE1MLCBvciB3aGV0aGVyIHdlIG5lZWQgdG8gYXNrIHRoZSBzZXJ2ZXIgZm9yXG5cdFx0ICogbW9yZSBpbmZvIChlLmcuIHByb3RlY3Rpb24gb3Igd2F0Y2hsaXN0IGV4cGlyeSkuXG5cdFx0ICpcblx0XHQgKiBDdXJyZW50bHkgdXNlZCBmb3IgYGFwcGVuZGAsIGBwcmVwZW5kYCwgYG5ld1NlY3Rpb25gLCBgbW92ZWAsXG5cdFx0ICogYGRlbGV0ZVBhZ2VgLCBhbmQgYHVuZGVsZXRlUGFnZWAuIE5vdCB1c2VkIGZvciBgcHJvdGVjdGBcblx0XHQgKiBzaW5jZSBpdCBhbHdheXMgbmVlZHMgdG8gcmVxdWVzdCBwcm90ZWN0aW9uIHN0YXR1cy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbYWN0aW9uPWVkaXRdIC0gVGhlIGFjdGlvbiBiZWluZyB1bmRlcnRha2VuLCBlLmcuXG5cdFx0ICogXCJlZGl0XCIgb3IgXCJkZWxldGVcIi4gSW4gcHJhY3RpY2UsIG9ubHkgXCJlZGl0XCIgb3IgXCJub3RlZGl0XCIgbWF0dGVycy5cblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRjb25zdCBmbkNhblVzZU13VXNlclRva2VuID0gKGFjdGlvbikgPT4ge1xuXHRcdFx0YWN0aW9uIHx8PSAnZWRpdCc7XG5cdFx0XHQvLyBJZiBhIHdhdGNobGlzdCBleHBpcnkgaXMgc2V0LCB3ZSBtdXN0IGFsd2F5cyBsb2FkIHRoZSBwYWdlXG5cdFx0XHQvLyB0byBhdm9pZCBvdmVyd3JpdGluZyBpbmRlZmluaXRlIHByb3RlY3Rpb24uICBPZiBjb3Vyc2UsIG5vdFxuXHRcdFx0Ly8gbmVlZGVkIGlmIHNldHRpbmcgaW5kZWZpbml0ZSB3YXRjaGluZyFcblx0XHRcdGlmIChjdHgud2F0Y2hsaXN0RXhwaXJ5ICYmICFNb3JlYml0cy5zdHJpbmcuaXNJbmZpbml0eShjdHgud2F0Y2hsaXN0RXhwaXJ5KSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHQvLyBBUEktYmFzZWQgcmVkaXJlY3QgcmVzb2x1dGlvbiBvbmx5IHdvcmtzIGZvciBhY3Rpb249cXVlcnkgYW5kXG5cdFx0XHQvLyBhY3Rpb249ZWRpdCBpbiBhcHBlbmQvcHJlcGVuZC9uZXcgbW9kZXNcblx0XHRcdGlmIChjdHguZm9sbG93UmVkaXJlY3QpIHtcblx0XHRcdFx0aWYgKCFjdHguZm9sbG93Q3Jvc3NOc1JlZGlyZWN0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBtdXN0IGxvYWQgdGhlIHBhZ2UgdG8gY2hlY2sgZm9yIGNyb3NzIG5hbWVzcGFjZSByZWRpcmVjdHNcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChhY3Rpb24gIT09ICdlZGl0JyB8fCBjdHguZWRpdE1vZGUgPT09ICdhbGwnIHx8IGN0eC5lZGl0TW9kZSA9PT0gJ3JldmVydCcpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIGRvIHdlIG5lZWQgdG8gZmV0Y2ggdGhlIGVkaXQgcHJvdGVjdGlvbiBleHBpcnk/XG5cdFx0XHRpZiAoTW9yZWJpdHMudXNlcklzU3lzb3AgJiYgIWN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRuZXcgbXcuVGl0bGUoTW9yZWJpdHMucGFnZU5hbWVOb3JtKS5nZXRQcmVmaXhlZFRleHQoKSAhPT1cblx0XHRcdFx0XHRuZXcgbXcuVGl0bGUoY3R4LnBhZ2VOYW1lKS5nZXRQcmVmaXhlZFRleHQoKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gd2dSZXN0cmljdGlvbkVkaXQgaXMgbnVsbCBvbiBub24tZXhpc3RlbnQgcGFnZXMsXG5cdFx0XHRcdC8vIHNvIHRoaXMgbmVhdGx5IGhhbmRsZXMgbm9uZXhpc3RlbnQgcGFnZXNcblx0XHRcdFx0Y29uc3QgZWRpdFJlc3RyaWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dSZXN0cmljdGlvbkVkaXQnKTtcblx0XHRcdFx0aWYgKCFlZGl0UmVzdHJpY3Rpb24gfHwgZWRpdFJlc3RyaWN0aW9uLmluY2x1ZGVzKCdzeXNvcCcpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gISFtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogV2hlbiBmdW5jdGlvbnMgY2FuJ3QgdXNlXG5cdFx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX5mbkNhblVzZU13VXNlclRva2VufGZuQ2FuVXNlTXdVc2VyVG9rZW59XG5cdFx0ICogb3IgcmVxdWlyZSBjaGVja2luZyBwcm90ZWN0aW9uIG9yIHdhdGNoZWQgc3RhdHVzLCBtYWludGFpbiB0aGUgcXVlcnlcblx0XHQgKiBpbiBvbmUgcGxhY2UuIFVzZWQgZm9yIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UjZGVsZXRlUGFnZXxkZWxldGV9LFxuXHRcdCAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UjdW5kZWxldGVQYWdlfHVuZGVsZXRlfSxcblx0XHQgKiB7QGxpbmsqIE1vcmViaXRzLndpa2kucGFnZSNwcm90ZWN0fHByb3RlY3R9LFxuXHRcdCAqIGFuZCB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI21vdmV8bW92ZX1cblx0XHQgKiAoYmFzaWNhbGx5LCBqdXN0IG5vdCB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI2xvYWR8bG9hZH0pLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiAtIFRoZSBhY3Rpb24gYmVpbmcgdW5kZXJ0YWtlbiwgZS5nLiBcImVkaXRcIiBvclxuXHRcdCAqIFwiZGVsZXRlXCIuXG5cdFx0ICogQHJldHVybnMge09iamVjdH0gQXBwcm9wcmlhdGUgcXVlcnkuXG5cdFx0ICovXG5cdFx0Y29uc3QgZm5OZWVkVG9rZW5JbmZvUXVlcnkgPSAoYWN0aW9uKSA9PiB7XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHRpbnByb3A6ICd3YXRjaGVkJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0Ly8gUHJvdGVjdGlvbiBub3QgY2hlY2tlZCBmb3Igbm9uLXN5c29wIG1vdmVzXG5cdFx0XHRpZiAoYWN0aW9uICE9PSAnbW92ZScgfHwgTW9yZWJpdHMudXNlcklzU3lzb3ApIHtcblx0XHRcdFx0cXVlcnkuaW5wcm9wICs9ICd8cHJvdGVjdGlvbic7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmZvbGxvd1JlZGlyZWN0ICYmIGFjdGlvbiAhPT0gJ3VuZGVsZXRlJykge1xuXHRcdFx0XHRxdWVyeS5yZWRpcmVjdHMgPSAnJzsgLy8gZm9sbG93IGFsbCByZWRpcmVjdHNcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHF1ZXJ5O1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBsb2FkU3VjY2VzcygpIGZvciBhcHBlbmQoKSwgcHJlcGVuZCgpLCBhbmQgbmV3U2VjdGlvbigpIHRocmVhZHNcblx0XHRjb25zdCBmbkF1dG9TYXZlID0gKHBhZ2VvYmopID0+IHtcblx0XHRcdHBhZ2VvYmouc2F2ZShjdHgub25TYXZlU3VjY2VzcywgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBsb2FkQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuTG9hZFN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5sb2FkQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRpZiAoIWZuQ2hlY2tQYWdlTmFtZShyZXNwb25zZSwgY3R4Lm9uTG9hZEZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRsZXQgcmV2O1xuXHRcdFx0Y3R4LnBhZ2VFeGlzdHMgPSAhcGFnZS5taXNzaW5nO1xuXHRcdFx0aWYgKGN0eC5wYWdlRXhpc3RzKSB7XG5cdFx0XHRcdFtyZXZdID0gcGFnZS5yZXZpc2lvbnM7XG5cdFx0XHRcdGN0eC5sYXN0RWRpdFRpbWUgPSByZXYudGltZXN0YW1wO1xuXHRcdFx0XHRjdHgucGFnZVRleHQgPSByZXYuY29udGVudDtcblx0XHRcdFx0Y3R4LnBhZ2VJRCA9IHBhZ2UucGFnZWlkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LnBhZ2VUZXh0ID0gJyc7IC8vIGFsbG93IGZvciBjb25jYXRlbmF0aW9uLCBldGMuXG5cdFx0XHRcdGN0eC5wYWdlSUQgPSAwOyAvLyBub25leGlzdGVudCBpbiByZXNwb25zZSwgbWF0Y2hlcyB3Z0FydGljbGVJZFxuXHRcdFx0fVxuXG5cdFx0XHRjdHguY3NyZlRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdGlmICghY3R4LmNzcmZUb2tlbikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+acquiDveiOt+WPlue8lui+keS7pOeJjOOAgicsICfmnKrog73lj5blvpfnt6jovK/mrIrmnZbjgIInKSk7XG5cdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHgubG9hZFRpbWUgPSBjdHgubG9hZEFwaS5nZXRSZXNwb25zZSgpLmN1cnRpbWVzdGFtcDtcblx0XHRcdGlmICghY3R4LmxvYWRUaW1lKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5pyq6IO96I635Y+W5b2T5YmN5pe26Ze05oiz44CCJywgJ+acquiDveWPluW+l+eVtuWJjeaZgumWk+aIs+OAgicpKTtcblx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5jb250ZW50TW9kZWwgPSBwYWdlLmNvbnRlbnRtb2RlbDtcblx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0Ly8gZXh0cmFjdCBwcm90ZWN0aW9uIGluZm8sIHRvIGFsZXJ0IGFkbWlucyB3aGVuIHRoZXkgYXJlIGFib3V0IHRvIGVkaXQgYSBwcm90ZWN0ZWQgcGFnZVxuXHRcdFx0Ly8gSW5jbHVkZXMgY2FzY2FkaW5nIHByb3RlY3Rpb25cblx0XHRcdGlmIChNb3JlYml0cy51c2VySXNTeXNvcCkge1xuXHRcdFx0XHRjb25zdCBlZGl0UHJvdCA9IHBhZ2UucHJvdGVjdGlvblxuXHRcdFx0XHRcdC5maWx0ZXIoKHByKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHIudHlwZSA9PT0gJ2VkaXQnICYmIHByLmxldmVsID09PSAnc3lzb3AnO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnBvcCgpO1xuXHRcdFx0XHRpZiAoZWRpdFByb3QpIHtcblx0XHRcdFx0XHRjdHguZnVsbHlQcm90ZWN0ZWQgPSBlZGl0UHJvdC5leHBpcnk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3R4LmZ1bGx5UHJvdGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGN0eC5yZXZlcnRDdXJJRCA9IHBhZ2UubGFzdHJldmlkO1xuXHRcdFx0Y29uc3QgdGVzdGFjdGlvbnMgPSBwYWdlLmFjdGlvbnM7XG5cdFx0XHRjdHgudGVzdEFjdGlvbnMgPSBbXTsgLy8gd2FzIG51bGxcblx0XHRcdGZvciAoY29uc3QgYWN0aW9uIG9mIE9iamVjdC5rZXlzKHRlc3RhY3Rpb25zKSkge1xuXHRcdFx0XHRpZiAodGVzdGFjdGlvbnNbYWN0aW9uXSkge1xuXHRcdFx0XHRcdGN0eC50ZXN0QWN0aW9ucy5wdXNoKGFjdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjdHguZWRpdE1vZGUgPT09ICdyZXZlcnQnKSB7XG5cdFx0XHRcdGN0eC5yZXZlcnRDdXJJRCA9IHJldiAmJiByZXYucmV2aWQ7XG5cdFx0XHRcdGlmICghY3R4LnJldmVydEN1cklEKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfmnKrog73ojrflj5blvZPliY3kv67orqLniYjmnKxJROOAgicsICfmnKrog73lj5blvpfnm67liY3kv67oqILniYjmnKxJROOAgicpKTtcblx0XHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnJldmVydFVzZXIgPSByZXYgJiYgcmV2LnVzZXI7XG5cdFx0XHRcdGlmICghY3R4LnJldmVydFVzZXIpIHtcblx0XHRcdFx0XHRpZiAocmV2ICYmIHJldi51c2VyaGlkZGVuKSB7XG5cdFx0XHRcdFx0XHQvLyB1c2VybmFtZSB3YXMgUmV2RGVsJ2Qgb3Igb3ZlcnNpZ2h0ZWRcblx0XHRcdFx0XHRcdGN0eC5yZXZlcnRVc2VyID0gd2luZG93LndnVUxTKCc855So5oi35ZCN5bey6ZqQ6JePPicsICc85L2/55So6ICF5ZCN56ix5bey6Zqx6JePPicpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfmnKrog73ojrflj5bmraTkv67orqLniYjmnKznmoTnvJbovpHogIXjgIInLCAn5pyq6IO95Y+W5b6X5q2k5L+u6KiC54mI5pys55qE57eo6Lyv6ICF44CCJylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gc2V0IHJldmVydCBlZGl0IHN1bW1hcnlcblx0XHRcdFx0Y3R4LmVkaXRTdW1tYXJ5ID0gYFtbTElCOlVORE985pKk6ZSAXV3nlLEgJHtjdHgucmV2ZXJ0VXNlcn0g5omA5YGa5Ye655qEJHt3aW5kb3cud2dVTFMoJ+S/ruiuoiAnLCAn5L+u6KiCICcpfSR7XG5cdFx0XHRcdFx0Y3R4LnJldmVydE9sZElEXG5cdFx0XHRcdH3vvJoke2N0eC5lZGl0U3VtbWFyeX1gO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnBhZ2VMb2FkZWQgPSB0cnVlO1xuXHRcdFx0Ly8gbXcubm90aWZ5KFwiR2VuZXJhdGUgZWRpdCBjb25mbGljdCBub3dcIiwge3R5cGU6ICd3YXJuJywgdGFnOiAnbW9yZWJpdHMnfSk7ICAvLyBmb3IgdGVzdGluZyBlZGl0IGNvbmZsaWN0IHJlY292ZXJ5IGxvZ2ljXG5cdFx0XHRjdHgub25Mb2FkU3VjY2Vzcyh0aGlzKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0fTtcblx0XHQvLyBoZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgdGhlIHBhZ2UgbmFtZSByZXR1cm5lZCBmcm9tIHRoZSBBUElcblx0XHRjb25zdCBmbkNoZWNrUGFnZU5hbWUgPSBmdW5jdGlvbiAocmVzcG9uc2UsIG9uRmFpbHVyZSkge1xuXHRcdFx0aWYgKCFvbkZhaWx1cmUpIHtcblx0XHRcdFx0b25GYWlsdXJlID0gZW1wdHlGdW5jdGlvbjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhZ2UgPSByZXNwb25zZS5wYWdlcyAmJiByZXNwb25zZS5wYWdlc1swXTtcblx0XHRcdGlmIChwYWdlKSB7XG5cdFx0XHRcdC8vIGNoZWNrIGZvciBpbnZhbGlkIHRpdGxlc1xuXHRcdFx0XHRpZiAocGFnZS5pbnZhbGlkKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfmoIfpopjkuI3lkIjms5XvvJonLCBg5qiZ6aGM5LiN5ZCI5rOV77yaJHtjdHgucGFnZU5hbWV9YCkpO1xuXHRcdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIGFib3J0XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gcmV0cmlldmUgYWN0dWFsIHRpdGxlIG9mIHRoZSBwYWdlIGFmdGVyIG5vcm1hbGl6YXRpb24gYW5kIHJlZGlyZWN0c1xuXHRcdFx0XHRjb25zdCByZXNvbHZlZE5hbWUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0XHRpZiAocmVzcG9uc2UucmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0Ly8gY2hlY2sgZm9yIGNyb3NzLW5hbWVzcGFjZSByZWRpcmVjdDpcblx0XHRcdFx0XHRjb25zdCBvcmlnTnMgPSBuZXcgbXcuVGl0bGUoY3R4LnBhZ2VOYW1lKS5uYW1lc3BhY2U7XG5cdFx0XHRcdFx0Y29uc3QgbmV3TnMgPSBuZXcgbXcuVGl0bGUocmVzb2x2ZWROYW1lKS5uYW1lc3BhY2U7XG5cdFx0XHRcdFx0aWYgKG9yaWdOcyAhPT0gbmV3TnMgJiYgIWN0eC5mb2xsb3dDcm9zc05zUmVkaXJlY3QpIHtcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5piv6Leo5ZG95ZCN56m66Ze06YeN5a6a5ZCR5YiwJywgJ+aYr+i3qOWRveWQjeepuumWk+mHjeaWsOWwjuWQkeWIsCcpICtcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlZE5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn77yM55Wl6L+HJywgJ++8jOeVpemBjicpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBvbmx5IG5vdGlmeSB1c2VyIGZvciByZWRpcmVjdHMsIG5vdCBub3JtYWxpemF0aW9uXG5cdFx0XHRcdFx0bmV3IE1vcmViaXRzLnN0YXR1cyhcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5L+h5oGvJywgJ+izh+ioiicpLFxuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfku44gJywgJ+W+niAnKSArXG5cdFx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygnIOmHjeWumuWQkeWIsCAnLCAnIOmHjeaWsOWwjuWQkeWIsCAnKSArXG5cdFx0XHRcdFx0XHRcdHJlc29sdmVkTmFtZVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnBhZ2VOYW1lID0gcmVzb2x2ZWROYW1lOyAvLyB1cGRhdGUgdG8gcmVkaXJlY3QgdGFyZ2V0IG9yIG5vcm1hbGl6ZWQgbmFtZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gY291bGQgYmUgYSBjaXJjdWxhciByZWRpcmVjdCBvciBvdGhlciBwcm9ibGVtXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5LiN6IO96Kej5p6Q6aG16Z2i55qE6YeN5a6a5ZCR77yaJywgJ+S4jeiDveino+aekOmggemdoueahOmHjeaWsOWwjuWQke+8micpICsgY3R4LnBhZ2VOYW1lXG5cdFx0XHRcdCk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0Ly8gZm9yY2UgZXJyb3IgdG8gc3RheSBvbiB0aGUgc2NyZWVuXG5cdFx0XHRcdCsrTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0O1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlOyAvLyBhbGwgT0tcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIERldGVybWluZSB3aGV0aGVyIHdlIHNob3VsZCBwcm92aWRlIGEgd2F0Y2hsaXN0IGV4cGlyeS4gIFdpbGwgbm90XG5cdFx0ICogZG8gc28gaWYgdGhlIHBhZ2UgaXMgY3VycmVudGx5IHBlcm1hbmVudGx5IHdhdGNoZWQsIG9yIHRoZSBjdXJyZW50XG5cdFx0ICogZXhwaXJ5IGlzICphZnRlciogdGhlIG5ldywgcHJvdmlkZWQgZXhwaXJ5LiAgT25seSBoYW5kbGVzIHN0cmluZ3Ncblx0XHQgKiByZWNvZ25pemVkIGJ5IHtAbGluayBNb3JlYml0cy5kYXRlfSBvciByZWxhdGl2ZSB0aW1lZnJhbWVzIHdpdGhcblx0XHQgKiB1bml0IGl0IGNhbiBwcm9jZXNzLiAgUmVsaWVzIG9uIHRoZSBmYWN0IHRoYXQgZm5DYW5Vc2VNd1VzZXJUb2tlblxuXHRcdCAqIHJlcXVpcmVzIHBhZ2UgbG9hZGluZyBpZiBhIHdhdGNobGlzdGV4cGlyeSBpcyBwcm92aWRlZCwgc28gd2UgYXJlXG5cdFx0ICogZW5zdXJlZCBvZiBrbm93aW5nIHRoZSB3YXRjaCBzdGF0dXMgYnkgdGhlIHVzZSBvZiB0aGlzLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0Y29uc3QgZm5BcHBseVdhdGNobGlzdEV4cGlyeSA9ICgpID0+IHtcblx0XHRcdGlmIChjdHgud2F0Y2hsaXN0RXhwaXJ5KSB7XG5cdFx0XHRcdGlmICghY3R4LndhdGNoZWQgfHwgTW9yZWJpdHMuc3RyaW5nLmlzSW5maW5pdHkoY3R4LndhdGNobGlzdEV4cGlyeSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY3R4LndhdGNoZWQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0bGV0IG5ld0V4cGlyeTtcblx0XHRcdFx0XHQvLyBBdHRlbXB0IHRvIGRldGVybWluZSBpZiB0aGUgbmV3IGV4cGlyeSBpcyBhXG5cdFx0XHRcdFx0Ly8gcmVsYXRpdmUgKGUuZy4gYDEgbW9udGhgKSBvciBhYnNvbHV0ZSBkYXRldGltZVxuXHRcdFx0XHRcdGNvbnN0IHJlbCA9IGN0eC53YXRjaGxpc3RFeHBpcnkuc3BsaXQoJyAnKTtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0bmV3RXhwaXJ5ID0gbmV3IE1vcmViaXRzLmRhdGUoKS5hZGQocmVsWzBdLCByZWxbMV0pO1xuXHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0bmV3RXhwaXJ5ID0gbmV3IE1vcmViaXRzLmRhdGUoY3R4LndhdGNobGlzdEV4cGlyeSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIElmIHRoZSBkYXRlIGlzIHZhbGlkLCBvbmx5IHVzZSBpdCBpZiBpdCBleHRlbmRzIHRoZSBjdXJyZW50IGV4cGlyeVxuXHRcdFx0XHRcdGlmIChuZXdFeHBpcnkuaXNWYWxpZCgpKSB7XG5cdFx0XHRcdFx0XHRpZiAobmV3RXhwaXJ5LmlzQWZ0ZXIobmV3IE1vcmViaXRzLmRhdGUoY3R4LndhdGNoZWQpKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gSWYgaXQncyBzdGlsbCBub3QgdmFsaWQsIGhvcGUgaXQncyBhIHZhbGlkIE1XIGV4cGlyeSBmb3JtYXQgdGhhdFxuXHRcdFx0XHRcdFx0Ly8gTW9yZWJpdHMuZGF0ZSBkb2Vzbid0IHJlY29nbml6ZSwgc28ganVzdCBkZWZhdWx0IHRvIHVzaW5nIGl0LlxuXHRcdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIGFsc28gaW5jbHVkZSBtaW5vciB0eXBvcy5cblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBzYXZlQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuU2F2ZVN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnYWxsJzsgLy8gY2FuY2VsIGFwcGVuZC9wcmVwZW5kL25ld1NlY3Rpb24vcmV2ZXJ0IG1vZGVzXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5zYXZlQXBpLmdldFJlc3BvbnNlKCk7XG5cdFx0XHQvLyBzZWUgaWYgdGhlIEFQSSB0aGlua3Mgd2Ugd2VyZSBzdWNjZXNzZnVsXG5cdFx0XHRpZiAocmVzcG9uc2UuZWRpdC5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHQvLyByZWFsIHN1Y2Nlc3Ncblx0XHRcdFx0Ly8gZGVmYXVsdCBvbiBzdWNjZXNzIGFjdGlvbiAtIGRpc3BsYXkgbGluayBmb3IgZWRpdGVkIHBhZ2Vcblx0XHRcdFx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBtdy51dGlsLmdldFVybChjdHgucGFnZU5hbWUpKTtcblx0XHRcdFx0bGluay5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjdHgucGFnZU5hbWUpKTtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyhbJ+WujOaIkO+8iCcsIGxpbmssICfvvIknXSk7XG5cdFx0XHRcdGlmIChjdHgub25TYXZlU3VjY2Vzcykge1xuXHRcdFx0XHRcdGN0eC5vblNhdmVTdWNjZXNzKHRoaXMpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGVycm9ycyBoZXJlIGFyZSBvbmx5IGdlbmVyYXRlZCBieSBleHRlbnNpb25zIHdoaWNoIGhvb2sgQVBJRWRpdEJlZm9yZVNhdmUgd2l0aGluIE1lZGlhV2lraSxcblx0XHRcdC8vIHdoaWNoIGFzIG9mIDEuMzQuMC13bWYuMjMgKFNlcHQgMjAxOSkgc2hvdWxkIG9ubHkgZW5jb21wYXNzIGNhcHRjaGEgbWVzc2FnZXNcblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LmNhcHRjaGEpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfkuI3og73kv53lrZjpobXpnaLvvIzlm6DmnI3liqHlmajopoHmsYLmgqjovpPlhaXpqozor4HnoIHjgIInLCAn5LiN6IO95YSy5a2Y6aCB6Z2i77yM5Zug5Ly65pyN5Zmo6KaB5rGC5oKo6Ly45YWl6amX6K2J56K844CCJylcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5L+d5a2Y6aG16Z2i5pe255SxQVBJ5b6X5Yiw5pyq55+l6ZSZ6K+vJywgJ+WEsuWtmOmggemdouaZgueUsUFQSeW+l+WIsOacquefpemMr+iqpCcpKTtcblx0XHRcdH1cblx0XHRcdC8vIGZvcmNlIGVycm9yIHRvIHN0YXkgb24gdGhlIHNjcmVlblxuXHRcdFx0KytNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7XG5cdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gc2F2ZUFwaS5wb3N0KClcblx0XHRjb25zdCBmblNhdmVFcnJvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGVycm9yQ29kZSA9IGN0eC5zYXZlQXBpLmdldEVycm9yQ29kZSgpO1xuXHRcdFx0Ly8gY2hlY2sgZm9yIGVkaXQgY29uZmxpY3Rcblx0XHRcdGlmIChlcnJvckNvZGUgPT09ICdlZGl0Y29uZmxpY3QnICYmIGN0eC5jb25mbGljdFJldHJpZXMrKyA8IGN0eC5tYXhDb25mbGljdFJldHJpZXMpIHtcblx0XHRcdFx0Ly8gZWRpdCBjb25mbGljdHMgY2FuIG9jY3VyIHdoZW4gdGhlIHBhZ2UgbmVlZHMgdG8gYmUgcHVyZ2VkIGZyb20gdGhlIHNlcnZlciBjYWNoZVxuXHRcdFx0XHRjb25zdCBwdXJnZVF1ZXJ5ID0ge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3B1cmdlJyxcblx0XHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSwgLy8gcmVkaXJlY3RzIGFyZSBhbHJlYWR5IHJlc29sdmVkXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Y29uc3QgcHVyZ2VBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfmo4DmtYvliLDnvJbovpHlhrLnqoHvvIzmraPlnKjmm7TmlrDmnI3liqHlmajnvJPlrZgnLCAn5qqi5ris5Yiw57eo6Lyv6KGd56qB77yM5q2j5Zyo5pu05paw5Ly65pyN5Zmo5b+r5Y+WJyksXG5cdFx0XHRcdFx0cHVyZ2VRdWVyeSxcblx0XHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0XHQtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDsgLy8gYWxsb3cgZm9yIG5vcm1hbCBjb21wbGV0aW9uIGlmIHJldHJ5IHN1Y2NlZWRzXG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5qOA5rWL5Yiw57yW6L6R5Yay56qB77yM6YeN6K+V5L+u5pS5JywgJ+aqoua4rOWIsOe3qOi8r+ihneeqge+8jOmHjeippuS/ruaUuScpKTtcblx0XHRcdFx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdlZGl0JykpIHtcblx0XHRcdFx0XHRcdFx0Y3R4LnNhdmVBcGkucG9zdCgpOyAvLyBuZWNlc3NhcmlseSBhcHBlbmQsIHByZXBlbmQsIG9yIG5ld1NlY3Rpb24sIHNvIHRoaXMgc2hvdWxkIHdvcmsgYXMgZGVzaXJlZFxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y3R4LmxvYWRBcGkucG9zdCgpOyAvLyByZWxvYWQgdGhlIHBhZ2UgYW5kIHJlYXBwbHkgdGhlIGVkaXRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50XG5cdFx0XHRcdCk7XG5cdFx0XHRcdHB1cmdlQXBpLnBvc3QoKTtcblx0XHRcdFx0Ly8gY2hlY2sgZm9yIG5ldHdvcmsgb3Igc2VydmVyIGVycm9yXG5cdFx0XHR9IGVsc2UgaWYgKChlcnJvckNvZGUgPT09IG51bGwgfHwgZXJyb3JDb2RlID09PSB1bmRlZmluZWQpICYmIGN0eC5yZXRyaWVzKysgPCBjdHgubWF4UmV0cmllcykge1xuXHRcdFx0XHQvLyB0aGUgZXJyb3IgbWlnaHQgYmUgdHJhbnNpZW50LCBzbyB0cnkgYWdhaW5cblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+S/neWtmOWksei0pe+8jOWcqDLnp5LlkI7ph43or5XigKbigKYnLCAn5YSy5a2Y5aSx5pWX77yM5ZyoMuenkuW+jOmHjeippuKApuKApicpKTtcblx0XHRcdFx0LS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7IC8vIGFsbG93IGZvciBub3JtYWwgY29tcGxldGlvbiBpZiByZXRyeSBzdWNjZWVkc1xuXHRcdFx0XHQvLyB3YWl0IGZvciBzb21ldGltZSBmb3IgY2xpZW50IHRvIHJlZ2FpbiBjb25uZWN0aXZpdHlcblx0XHRcdFx0c2xlZXAoMjAwMCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0Y3R4LnNhdmVBcGkucG9zdCgpOyAvLyBnaXZlIGl0IGFub3RoZXIgZ28hXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBoYXJkIGVycm9yLCBnaXZlIHVwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5zYXZlQXBpLmdldFJlc3BvbnNlKCk7XG5cdFx0XHRcdGNvbnN0IGVycm9yRGF0YSA9XG5cdFx0XHRcdFx0cmVzcG9uc2UuZXJyb3IgfHxcblx0XHRcdFx0XHQvLyBiYyBlcnJvciBmb3JtYXRcblx0XHRcdFx0XHRyZXNwb25zZS5lcnJvcnNbMF0uZGF0YTsgLy8gaHRtbC93aWtpdGV4dC9wbGFpbnRleHQgZXJyb3IgZm9ybWF0XG5cdFx0XHRcdHN3aXRjaCAoZXJyb3JDb2RlKSB7XG5cdFx0XHRcdFx0Y2FzZSAncHJvdGVjdGVkcGFnZSc6XG5cdFx0XHRcdFx0XHQvLyBub24tYWRtaW4gYXR0ZW1wdGluZyB0byBlZGl0IGEgcHJvdGVjdGVkIHBhZ2UgLSB0aGlzIGdpdmVzIGEgZnJpZW5kbGllciBtZXNzYWdlIHRoYW4gdGhlIGRlZmF1bHRcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5LiN6IO95L+d5a2Y5L+u5pS577ya6aG16Z2i6KKr5L+d5oqkJywgJ+S4jeiDveWEsuWtmOS/ruaUue+8mumggemdouiiq+S/neittycpKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2FidXNlZmlsdGVyLWRpc2FsbG93ZWQnOlxuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn57yW6L6R6KKr6Ziy5rul55So6L+H5ruk5Zmo6KeE5YiZ4oCcJywgJ+e3qOi8r+iiq+mYsua/q+eUqOmBjua/vuWZqOimj+WJh+OAjCcpICtcblx0XHRcdFx0XHRcdFx0XHRlcnJvckRhdGEuYWJ1c2VmaWx0ZXIuZGVzY3JpcHRpb24gK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHRcdCfigJ3pmLvmraLjgILoi6XmgqjorqTkuLrmgqjnmoTor6XmrKHnvJbovpHmmK/mnInmhI/kuYnnmoTvvIzor7foh7MgV2lraXBlZGlhOumYsua7peeUqOi/h+a7pOWZqC/plJnor6/miqXlkYog5o+Q5oql44CCJyxcblx0XHRcdFx0XHRcdFx0XHRcdCfjgI3pmLvmraLjgILoi6Xmgqjoqo3ngrrmgqjnmoToqbLmrKHnt6jovK/mmK/mnInmhI/nvqnnmoTvvIzoq4voh7MgV2lraXBlZGlhOumYsua/q+eUqOmBjua/vuWZqC/pjK/oqqTloLHlkYog5o+Q5aCx44CCJ1xuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdhYnVzZWZpbHRlci13YXJuaW5nJzpcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFtcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfnvJbovpHooqvpmLLmu6XnlKjov4fmu6Tlmajop4TliJnigJwnLCAn57eo6Lyv6KKr6Ziy5r+r55So6YGO5r++5Zmo6KaP5YmH44CMJyksXG5cdFx0XHRcdFx0XHRcdGVycm9yRGF0YS5hYnVzZWZpbHRlci5kZXNjcmlwdGlvbixcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdCfigJ3orablkYrvvIzoi6Xmgqjku43luIzmnJvlgZrlh7ror6XnvJbovpHvvIzor7flsJ3or5Xph43mlrDmj5DkuqTvvIzmoLnmja7ov4fmu6TlmajnmoTorr7nva7mgqjlj6/og73lj6/ku6XkvZzlh7rmraTnvJbovpHjgIInLFxuXHRcdFx0XHRcdFx0XHRcdCfjgI3orablkYrvvIzoi6Xmgqjku43luIzmnJvlgZrlh7roqbLnt6jovK/vvIzoq4vlmJfoqabph43mlrDmj5DkuqTvvIzmoLnmk5rpgY7mv77lmajnmoToqK3lrprmgqjlj6/og73lj6/ku6XkvZzlh7rmraTnt6jovK/jgIInXG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHRcdC8vIFdlIHNob3VsZCBwcm92aWRlIHRoZSB1c2VyIHdpdGggYSB3YXkgdG8gYXV0b21hdGljYWxseSByZXRyeSB0aGUgYWN0aW9uIGlmIHRoZXkgc28gY2hvb3NlIC1cblx0XHRcdFx0XHRcdC8vIEkgY2FuJ3Qgc2VlIGhvdyB0byBkbyB0aGlzIHdpdGhvdXQgY3JlYXRpbmcgYSBVSSBkZXBlbmRlbmN5IG9uIE1vcmViaXRzLndpa2kucGFnZSB0aG91Z2ggLS0gVFRPXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdzcGFtYmxhY2tsaXN0Jzoge1xuXHRcdFx0XHRcdFx0Ly8gSWYgbXVsdGlwbGUgaXRlbXMgYXJlIGJsYWNrbGlzdGVkLCB3ZSBvbmx5IHJldHVybiB0aGUgZmlyc3Rcblx0XHRcdFx0XHRcdGNvbnN0IFtzcGFtXSA9IGVycm9yRGF0YS5zcGFtYmxhY2tsaXN0Lm1hdGNoZXM7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfkuI3og73kv53lrZjpobXpnaLvvIzlm6BVUkwgJywgJ+S4jeiDveWEsuWtmOmggemdou+8jOWboFVSTCAnKSArXG5cdFx0XHRcdFx0XHRcdFx0c3BhbSArXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCcg5Zyo5Z6D5Zy+6ZO+5o6l6buR5ZCN5Y2V5Lit44CCJywgJyDlnKjlnoPlnL7pgKPntZDpu5HlkI3llq7kuK3jgIInKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5LiN6IO95L+d5a2Y5L+u5pS577yaJywgJ+S4jeiDveWEsuWtmOS/ruaUue+8micpICsgY3R4LnNhdmVBcGkuZ2V0RXJyb3JUZXh0KClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LmVkaXRNb2RlID0gJ2FsbCc7IC8vIGNhbmNlbCBhcHBlbmQvcHJlcGVuZC9uZXdTZWN0aW9uL3JldmVydCBtb2Rlc1xuXHRcdFx0XHRpZiAoY3R4Lm9uU2F2ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgaXNUZXh0UmVkaXJlY3QgPSAodGV4dCkgPT4ge1xuXHRcdFx0aWYgKCF0ZXh0KSB7XG5cdFx0XHRcdC8vIG5vIHRleHQgLSBjb250ZW50IGVtcHR5IG9yIGluYWNjZXNzaWJsZSAocmV2ZGVsbGVkIG9yIHN1cHByZXNzZWQpXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBNb3JlYml0cy5sMTBuLnJlZGlyZWN0VGFnQWxpYXNlcy5zb21lKCh0YWcpID0+IHtcblx0XHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoYF5cXFxccyoke3RhZ31cXFxcV2AsICdpJykudGVzdCh0ZXh0KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdFx0Y29uc3QgZm5Mb29rdXBDcmVhdGlvblN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5sb29rdXBDcmVhdGlvbkFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0aWYgKCFmbkNoZWNrUGFnZU5hbWUocmVzcG9uc2UsIGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByZXYgPSByZXNwb25zZS5wYWdlc1swXS5yZXZpc2lvbnMgJiYgcmVzcG9uc2UucGFnZXNbMF0ucmV2aXNpb25zWzBdO1xuXHRcdFx0aWYgKCFyZXYpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5Xmib7liLAnLCAn54Sh5rOV5om+5YiwJykgK1xuXHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn55qE5Lu75L2V5L+u6K6i54mI5pysJywgJ+eahOS7u+S9leS/ruiogueJiOacrCcpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHgubG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yIHx8ICFpc1RleHRSZWRpcmVjdChyZXYuY29udGVudCkpIHtcblx0XHRcdFx0Y3R4LmNyZWF0b3IgPSByZXYudXNlcjtcblx0XHRcdFx0aWYgKCFjdHguY3JlYXRvcikge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5peg5rOV6I635Y+W6aG16Z2i5Yib5bu66ICF55qE5ZCN5a2XJywgJ+eEoeazleWPluW+l+mggemdouW7uueri+iAheeahOWQjeWtlycpKTtcblx0XHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC50aW1lc3RhbXAgPSByZXYudGltZXN0YW1wO1xuXHRcdFx0XHRpZiAoIWN0eC50aW1lc3RhbXApIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPlumhtemdouWIm+W7uuaXtumXtCcsICfnhKHms5Xlj5blvpfpoIHpnaLlu7rnq4vmmYLplpMnKSk7XG5cdFx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5bey6I635Y+W6aG16Z2i5Yib5bu65L+h5oGvJywgJ+W3suWPluW+l+mggemdouW7uueri+izh+ioiicpKTtcblx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzKHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnF1ZXJ5LnJ2bGltaXQgPSA1MDsgLy8gbW9kaWZ5IHByZXZpb3VzIHF1ZXJ5IHRvIGZldGNoIG1vcmUgcmV2aXNpb25zXG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5xdWVyeS50aXRsZXMgPSBjdHgucGFnZU5hbWU7IC8vIHVwZGF0ZSBwYWdlTmFtZSBpZiByZWRpcmVjdCByZXNvbHV0aW9uIHRvb2sgcGxhY2UgaW4gZWFybGllciBxdWVyeVxuXHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bpobXpnaLliJvlu7rkv6Hmga8nLCAn5Y+W5b6X6aCB6Z2i5bu656uL6LOH6KiKJyksXG5cdFx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnF1ZXJ5LFxuXHRcdFx0XHRcdGZuTG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yLFxuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgZm5Mb29rdXBOb25SZWRpcmVjdENyZWF0b3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5sb29rdXBDcmVhdGlvbkFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0Y29uc3QgcmV2cyA9IHJlc3BvbnNlLnBhZ2VzWzBdLnJldmlzaW9ucztcblx0XHRcdGZvciAoY29uc3QgcmV2IG9mIHJldnMpIHtcblx0XHRcdFx0aWYgKCFpc1RleHRSZWRpcmVjdChyZXYuY29udGVudCkpIHtcblx0XHRcdFx0XHRjdHguY3JlYXRvciA9IHJldi51c2VyO1xuXHRcdFx0XHRcdGN0eC50aW1lc3RhbXAgPSByZXYudGltZXN0YW1wO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5jcmVhdG9yKSB7XG5cdFx0XHRcdC8vIGZhbGxiYWNrIHRvIGdpdmUgZmlyc3QgcmV2aXNpb24gYXV0aG9yIGlmIG5vIG5vbi1yZWRpcmVjdCB2ZXJzaW9uIGluIHRoZSBmaXJzdCA1MFxuXHRcdFx0XHRjdHguY3JlYXRvciA9IHJldnNbMF0udXNlcjtcblx0XHRcdFx0Y3R4LnRpbWVzdGFtcCA9IHJldnNbMF0udGltZXN0YW1wO1xuXHRcdFx0XHRpZiAoIWN0eC5jcmVhdG9yKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rogIXnmoTlkI3lrZcnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL6ICF55qE5ZCN5a2XJykpO1xuXHRcdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghY3R4LnRpbWVzdGFtcCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPlumhtemdouWIm+W7uuaXtumXtCcsICfnhKHms5Xlj5blvpfpoIHpnaLlu7rnq4vmmYLplpMnKSk7XG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+W3suiOt+WPlumhtemdouWIm+W7uuS/oeaBrycsICflt7Llj5blvpfpoIHpnaLlu7rnq4vos4foqIonKSk7XG5cdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvblN1Y2Nlc3ModGhpcyk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBDb21tb24gY2hlY2tzIGZvciBhY3Rpb24gbWV0aG9kcy4gVXNlZCBmb3IgbW92ZSwgdW5kZWxldGUsIGRlbGV0ZSxcblx0XHQgKiBwcm90ZWN0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiAtIFRoZSBhY3Rpb24gYmVpbmcgY2hlY2tlZC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gb25GYWlsdXJlIC0gRmFpbHVyZSBjYWxsYmFjay5cblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRjb25zdCBmblByZWZsaWdodENoZWNrcyA9IGZ1bmN0aW9uIChhY3Rpb24sIG9uRmFpbHVyZSkge1xuXHRcdFx0Ly8gaWYgYSBub24tYWRtaW4gdHJpZXMgdG8gZG8gdGhpcywgZG9uJ3QgYm90aGVyXG5cdFx0XHRpZiAoIU1vcmViaXRzLnVzZXJJc1N5c29wICYmIGFjdGlvbiAhPT0gJ21vdmUnKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5peg5rOV5a+56aG16Z2i6L+b6KGM4oCcJywgJ+eEoeazleWwjemggemdoumAsuihjOOAjCcpICtcblx0XHRcdFx0XHRcdGFjdGlvbiArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAneaTjeS9nO+8muWPquacieeuoeeQhuWRmOWPr+S7pei/m+ihjOatpOaTjeS9nCcsICfjgI3mk43kvZzvvJrlj6rmnInnrqHnkIblk6Hlj6/ku6XpgLLooYzmraTmk43kvZwnKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4LmVkaXRTdW1tYXJ5KSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKGBJbnRlcm5hbCBlcnJvcjogJHthY3Rpb259IHJlYXNvbiBub3Qgc2V0ICh1c2Ugc2V0RWRpdFN1bW1hcnkgZnVuY3Rpb24pIWApO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlOyAvLyBhbGwgT0tcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIENvbW1vbiBjaGVja3MgZm9yIGZuUHJvY2VzcyBmdW5jdGlvbnMgKGBmblByb2Nlc3NEZWxldGVgLCBgZm5Qcm9jZXNzTW92ZWAsIGV0Yy5cblx0XHQgKiBVc2VkIGZvciBtb3ZlLCB1bmRlbGV0ZSwgZGVsZXRlLCBwcm90ZWN0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiAtIFRoZSBhY3Rpb24gYmVpbmcgY2hlY2tlZC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gb25GYWlsdXJlIC0gRmFpbHVyZSBjYWxsYmFjay5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcmVzcG9uc2UgLSBUaGUgcmVzcG9uc2UgZG9jdW1lbnQgZnJvbSB0aGUgQVBJIGNhbGwuXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0Y29uc3QgZm5Qcm9jZXNzQ2hlY2tzID0gZnVuY3Rpb24gKGFjdGlvbiwgb25GYWlsdXJlLCByZXNwb25zZSkge1xuXHRcdFx0Y29uc3QgW3ttaXNzaW5nfV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdC8vIE5vIHVuZGVsZXRlIGFzIGFuIGV4aXN0aW5nIHBhZ2UgY291bGQgaGF2ZSBkZWxldGVkIHJldmlzaW9uc1xuXHRcdFx0Y29uc3QgYWN0aW9uTWlzc2luZyA9IG1pc3NpbmcgJiYgWydkZWxldGUnLCAnbW92ZSddLmluY2x1ZGVzKGFjdGlvbik7XG5cdFx0XHRjb25zdCBwcm90ZWN0TWlzc2luZyA9IGFjdGlvbiA9PT0gJ3Byb3RlY3QnICYmIG1pc3NpbmcgJiYgKGN0eC5wcm90ZWN0RWRpdCB8fCBjdHgucHJvdGVjdE1vdmUpO1xuXHRcdFx0Y29uc3Qgc2FsdE1pc3NpbmcgPSBhY3Rpb24gPT09ICdwcm90ZWN0JyAmJiAhbWlzc2luZyAmJiBjdHgucHJvdGVjdENyZWF0ZTtcblx0XHRcdGlmIChhY3Rpb25NaXNzaW5nIHx8IHByb3RlY3RNaXNzaW5nIHx8IHNhbHRNaXNzaW5nKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdGAke1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5Xlr7npobXpnaLov5vooYzigJwnLCAn54Sh5rOV5bCN6aCB6Z2i6YCy6KGM44CMJykgK1xuXHRcdFx0XHRcdFx0YWN0aW9uICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd5pON5L2c77yM5Zug5Li66aG16Z2iJywgJ+OAjeaTjeS9nO+8jOWboOeCuumggemdoicpICtcblx0XHRcdFx0XHRcdChtaXNzaW5nID8gJ+W3suS4jScgOiB3aW5kb3cud2dVTFMoJ+W3sue7jycsICflt7LntpMnKSlcblx0XHRcdFx0XHR95a2Y5ZyoYFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdC8vIERlbGV0ZSwgdW5kZWxldGUsIG1vdmVcblx0XHRcdC8vIGV4dHJhY3QgcHJvdGVjdGlvbiBpbmZvXG5cdFx0XHRsZXQgZWRpdHByb3Q7XG5cdFx0XHRpZiAoYWN0aW9uID09PSAndW5kZWxldGUnKSB7XG5cdFx0XHRcdGVkaXRwcm90ID0gcmVzcG9uc2UucGFnZXNbMF0ucHJvdGVjdGlvblxuXHRcdFx0XHRcdC5maWx0ZXIoKHByKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHIudHlwZSA9PT0gJ2NyZWF0ZScgJiYgcHIubGV2ZWwgPT09ICdzeXNvcCc7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQucG9wKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ2RlbGV0ZScgfHwgYWN0aW9uID09PSAnbW92ZScpIHtcblx0XHRcdFx0ZWRpdHByb3QgPSByZXNwb25zZS5wYWdlc1swXS5wcm90ZWN0aW9uXG5cdFx0XHRcdFx0LmZpbHRlcigocHIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBwci50eXBlID09PSAnZWRpdCcgJiYgcHIubGV2ZWwgPT09ICdzeXNvcCc7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQucG9wKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGVkaXRwcm90ICYmXG5cdFx0XHRcdCFjdHguc3VwcHJlc3NQcm90ZWN0V2FybmluZyAmJlxuXHRcdFx0XHQhY29uZmlybShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aCqOWNs+WwhuWvueWFqOS/neaKpOmhtemdouKAnCcsICfmgqjljbPlsIflsI3lhajkv53orbfpoIHpnaLjgIwnKSArXG5cdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0KGVkaXRwcm90LmV4cGlyeSA9PT0gJ2luZmluaXR5J1xuXHRcdFx0XHRcdFx0XHQ/IHdpbmRvdy53Z1VMUygn4oCd77yI5rC45LmF77yJJywgJ+OAje+8iOawuOS5he+8iScpXG5cdFx0XHRcdFx0XHRcdDogYCR7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAne+8iOWIsOacn++8micsICfjgI3vvIjliLDmnJ/vvJonKSArXG5cdFx0XHRcdFx0XHRcdFx0XHRuZXcgTW9yZWJpdHMuZGF0ZShlZGl0cHJvdC5leHBpcnkpLmNhbGVuZGFyKCd1dGMnKVxuXHRcdFx0XHRcdFx0XHRcdH0gKFVUQynvvIlgKSArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAnei/m+ihjOKAnCcsICfjgI3pgLLooYzjgIwnKSArXG5cdFx0XHRcdFx0XHRhY3Rpb24gK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3mk43kvZwnLCAn44CN5pON5L2cJykgK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHQn44CCXFxuXFxu5Y2V5Ye756Gu5a6a5Lul57un57ut5pON5L2c77yM5oiW5Y2V5Ye75Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJyxcblx0XHRcdFx0XHRcdFx0J+OAglxcblxcbum7nuaTiueiuuWumuS7pee5vOe6jOaTjeS9nO+8jOaIlum7nuaTiuWPlua2iOS7peWPlua2iOaTjeS9nOOAgidcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0KSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5bey5Y+W5raI5a+55YWo5L+d5oqk6aG16Z2i55qE5pON5L2c44CCJywgJ+W3suWPlua2iOWwjeWFqOS/neitt+mggemdoueahOaTjeS9nOOAgicpKTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW4pIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfml6Dms5Xojrflj5bku6TniYzjgIInLCAn54Sh5rOV5Y+W5b6X5qyK5p2W44CCJykpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlOyAvLyBhbGwgT0tcblx0XHR9O1xuXG5cdFx0Y29uc3QgZm5Qcm9jZXNzTW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBwYWdlVGl0bGU7XG5cdFx0XHRsZXQgdG9rZW47XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignbW92ZScpKSB7XG5cdFx0XHRcdHRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHRcdFx0cGFnZVRpdGxlID0gY3R4LnBhZ2VOYW1lO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgubW92ZUFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0XHRpZiAoIWZuUHJvY2Vzc0NoZWNrcygnbW92ZScsIGN0eC5vbk1vdmVGYWlsdXJlLCByZXNwb25zZSkpIHtcblx0XHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0XHRjdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdtb3ZlJyxcblx0XHRcdFx0ZnJvbTogcGFnZVRpdGxlLFxuXHRcdFx0XHR0bzogY3R4Lm1vdmVEZXN0aW5hdGlvbixcblx0XHRcdFx0dG9rZW4sXG5cdFx0XHRcdHJlYXNvbjogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IGN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4Lm1vdmVUYWxrUGFnZSkge1xuXHRcdFx0XHRxdWVyeS5tb3ZldGFsayA9ICd0cnVlJztcblx0XHRcdH1cblx0XHRcdGlmIChjdHgubW92ZVN1YnBhZ2VzKSB7XG5cdFx0XHRcdHF1ZXJ5Lm1vdmVzdWJwYWdlcyA9ICd0cnVlJztcblx0XHRcdH1cblx0XHRcdGlmIChjdHgubW92ZVN1cHByZXNzUmVkaXJlY3QpIHtcblx0XHRcdFx0cXVlcnkubm9yZWRpcmVjdCA9ICd0cnVlJztcblx0XHRcdH1cblx0XHRcdGN0eC5tb3ZlUHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfnp7vliqjpobXpnaLigKbigKYnLCAn56e75YuV6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRjdHgub25Nb3ZlU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGN0eC5vbk1vdmVGYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4Lm1vdmVQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5tb3ZlUHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHRjb25zdCBmblByb2Nlc3NQYXRyb2wgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGF0cm9sJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0Ly8gRGlkbid0IG5lZWQgdG8gbG9hZCB0aGUgcGFnZVxuXHRcdFx0aWYgKGN0eC5yY2lkKSB7XG5cdFx0XHRcdHF1ZXJ5LnJjaWQgPSBjdHgucmNpZDtcblx0XHRcdFx0cXVlcnkudG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ3BhdHJvbFRva2VuJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5wYXRyb2xBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdFx0Ly8gRG9uJ3QgcGF0cm9sIGlmIG5vdCB1bnBhdHJvbGxlZFxuXHRcdFx0XHRpZiAoIXJlc3BvbnNlLnJlY2VudGNoYW5nZXNbMF0udW5wYXRyb2xsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgW3tsYXN0cmV2aWR9XSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0XHRpZiAoIWxhc3RyZXZpZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRxdWVyeS5yZXZpZCA9IGxhc3RyZXZpZDtcblx0XHRcdFx0Y29uc3QgdG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0XHRpZiAoIXRva2VuKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHF1ZXJ5LnRva2VuID0gdG9rZW47XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGF0cm9sU3RhdCA9IG5ldyBNb3JlYml0cy5zdGF0dXMod2luZG93LndnVUxTKCfmoIforrDpobXpnaLkuLrlt7Llt6Hmn6UnLCAn5qiZ6KiY6aCB6Z2i54K65bey5beh5p+lJykpO1xuXHRcdFx0Y3R4LnBhdHJvbFByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5beh5p+l6aG16Z2i4oCm4oCmJywgJ+W3oeafpemggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0cGF0cm9sU3RhdFxuXHRcdFx0KTtcblx0XHRcdGN0eC5wYXRyb2xQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5wYXRyb2xQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdGNvbnN0IGZuUHJvY2Vzc0RlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBwYWdlVGl0bGU7XG5cdFx0XHRsZXQgdG9rZW47XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZGVsZXRlJykpIHtcblx0XHRcdFx0dG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBjdHgucGFnZU5hbWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5kZWxldGVBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdFx0aWYgKCFmblByb2Nlc3NDaGVja3MoJ2RlbGV0ZScsIGN0eC5vbkRlbGV0ZUZhaWx1cmUsIHJlc3BvbnNlKSkge1xuXHRcdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ2RlbGV0ZScsXG5cdFx0XHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0XHRcdHRva2VuLFxuXHRcdFx0XHRyZWFzb246IGN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdFx0d2F0Y2hsaXN0OiBjdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmRlbGV0ZVByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5Yig6Zmk6aG16Z2i4oCm4oCmJywgJ+WIqumZpOmggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Y3R4Lm9uRGVsZXRlU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGZuUHJvY2Vzc0RlbGV0ZUVycm9yXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LmRlbGV0ZVByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBkZWxldGVQcm9jZXNzQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuUHJvY2Vzc0RlbGV0ZUVycm9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgZXJyb3JDb2RlID0gY3R4LmRlbGV0ZVByb2Nlc3NBcGkuZ2V0RXJyb3JDb2RlKCk7XG5cdFx0XHQvLyBjaGVjayBmb3IgXCJEYXRhYmFzZSBxdWVyeSBlcnJvclwiXG5cdFx0XHRpZiAoZXJyb3JDb2RlID09PSAnaW50ZXJuYWxfYXBpX2Vycm9yX0RCUXVlcnlFcnJvcicgJiYgY3R4LnJldHJpZXMrKyA8IGN0eC5tYXhSZXRyaWVzKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCfmlbDmja7lupPmn6Xor6LplJnor6/vvIzph43or5UnLCAn6LOH5paZ5bqr5p+l6Kmi6Yyv6Kqk77yM6YeN6KmmJykpO1xuXHRcdFx0XHQtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDsgLy8gYWxsb3cgZm9yIG5vcm1hbCBjb21wbGV0aW9uIGlmIHJldHJ5IHN1Y2NlZWRzXG5cdFx0XHRcdGN0eC5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKTsgLy8gZ2l2ZSBpdCBhbm90aGVyIGdvIVxuXHRcdFx0fSBlbHNlIGlmIChlcnJvckNvZGUgPT09ICdtaXNzaW5ndGl0bGUnKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5LiN6IO95Yig6Zmk6aG16Z2i77yM5Zug5YW25bey5LiN5a2Y5ZyoJywgJ+S4jeiDveWIqumZpOmggemdou+8jOWboOWFtuW3suS4jeWtmOWcqCcpKTtcblx0XHRcdFx0aWYgKGN0eC5vbkRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25EZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBoYXJkIGVycm9yLCBnaXZlIHVwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aXoOazleWIoOmZpOmhtemdou+8micsICfnhKHms5XliKrpmaTpoIHpnaLvvJonKSArIGN0eC5kZWxldGVQcm9jZXNzQXBpLmdldEVycm9yVGV4dCgpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChjdHgub25EZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uRGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgZm5Qcm9jZXNzVW5kZWxldGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgcGFnZVRpdGxlO1xuXHRcdFx0bGV0IHRva2VuO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ3VuZGVsZXRlJykpIHtcblx0XHRcdFx0dG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBjdHgucGFnZU5hbWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC51bmRlbGV0ZUFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0XHRpZiAoIWZuUHJvY2Vzc0NoZWNrcygndW5kZWxldGUnLCBjdHgub25VbmRlbGV0ZUZhaWx1cmUsIHJlc3BvbnNlKSkge1xuXHRcdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3VuZGVsZXRlJyxcblx0XHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHRcdFx0dG9rZW4sXG5cdFx0XHRcdHJlYXNvbjogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IGN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRjdHgudW5kZWxldGVQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+i/mOWOn+mhtemdouKApuKApicsICfpgoTljp/poIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGN0eC5vblVuZGVsZXRlU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGZuUHJvY2Vzc1VuZGVsZXRlRXJyb3Jcblx0XHRcdCk7XG5cdFx0XHRjdHgudW5kZWxldGVQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSB1bmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpXG5cdFx0Y29uc3QgZm5Qcm9jZXNzVW5kZWxldGVFcnJvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGVycm9yQ29kZSA9IGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkuZ2V0RXJyb3JDb2RlKCk7XG5cdFx0XHQvLyBjaGVjayBmb3IgXCJEYXRhYmFzZSBxdWVyeSBlcnJvclwiXG5cdFx0XHRpZiAoZXJyb3JDb2RlID09PSAnaW50ZXJuYWxfYXBpX2Vycm9yX0RCUXVlcnlFcnJvcicpIHtcblx0XHRcdFx0aWYgKGN0eC5yZXRyaWVzKysgPCBjdHgubWF4UmV0cmllcykge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCfmlbDmja7lupPmn6Xor6LplJnor6/vvIzph43or5UnLCAn6LOH5paZ5bqr5p+l6Kmi6Yyv6Kqk77yM6YeN6KmmJykpO1xuXHRcdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0XHRjdHgudW5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKTsgLy8gZ2l2ZSBpdCBhbm90aGVyIGdvIVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHQn5oyB57ut55qE5pWw5o2u5bqT5p+l6K+i6ZSZ6K+v77yM6YeN5paw5Yqg6L296aG16Z2i5bm26YeN6K+VJyxcblx0XHRcdFx0XHRcdFx0J+aMgee6jOeahOizh+aWmeW6q+afpeipoumMr+iqpO+8jOmHjeaWsOi8ieWFpemggemdouS4pumHjeippidcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGlmIChjdHgub25VbmRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRcdGN0eC5vblVuZGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZXJyb3JDb2RlID09PSAnY2FudHVuZGVsZXRlJykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHQn5peg5rOV6L+Y5Y6f5Yig6Zmk6aG16Z2i77yM5Zug5rKh5pyJ54mI5pys5L6b6L+Y5Y6f5oiW5bey6KKr6L+Y5Y6fJyxcblx0XHRcdFx0XHRcdCfnhKHms5XpgoTljp/liKrpmaTpoIHpnaLvvIzlm6DmspLmnInniYjmnKzkvpvpgoTljp/miJblt7LooqvpgoTljp8nXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGhhcmQgZXJyb3IsIGdpdmUgdXBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5peg5rOV6L+Y5Y6f6aG16Z2i77yaJywgJ+eEoeazlemChOWOn+mggemdou+8micpICsgY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5nZXRFcnJvclRleHQoKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IGZuUHJvY2Vzc1Byb3RlY3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5wcm90ZWN0QXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRpZiAoIWZuUHJvY2Vzc0NoZWNrcygncHJvdGVjdCcsIGN0eC5vblByb3RlY3RGYWlsdXJlLCByZXNwb25zZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdGNvbnN0IHBhZ2VUaXRsZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRjdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZDtcblx0XHRcdC8vIEZldGNoIGV4aXN0aW5nIHByb3RlY3Rpb24gbGV2ZWxzXG5cdFx0XHRjb25zdCBwcnMgPSByZXNwb25zZS5wYWdlc1swXS5wcm90ZWN0aW9uO1xuXHRcdFx0bGV0IGVkaXRwcm90O1xuXHRcdFx0bGV0IG1vdmVwcm90O1xuXHRcdFx0bGV0IGNyZWF0ZXByb3Q7XG5cdFx0XHRmb3IgKGNvbnN0IHByIG9mIHBycykge1xuXHRcdFx0XHQvLyBGaWx0ZXIgb3V0IHByb3RlY3Rpb24gZnJvbSBjYXNjYWRpbmdcblx0XHRcdFx0aWYgKHByLnR5cGUgPT09ICdlZGl0JyAmJiAhcHIuc291cmNlKSB7XG5cdFx0XHRcdFx0ZWRpdHByb3QgPSBwcjtcblx0XHRcdFx0fSBlbHNlIGlmIChwci50eXBlID09PSAnbW92ZScpIHtcblx0XHRcdFx0XHRtb3ZlcHJvdCA9IHByO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHByLnR5cGUgPT09ICdjcmVhdGUnKSB7XG5cdFx0XHRcdFx0Y3JlYXRlcHJvdCA9IHByO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBGYWxsIGJhY2sgdG8gY3VycmVudCBsZXZlbHMgaWYgbm90IGV4cGxpY2l0bHkgc2V0XG5cdFx0XHRpZiAoIWN0eC5wcm90ZWN0RWRpdCAmJiBlZGl0cHJvdCkge1xuXHRcdFx0XHRjdHgucHJvdGVjdEVkaXQgPSB7XG5cdFx0XHRcdFx0bGV2ZWw6IGVkaXRwcm90LmxldmVsLFxuXHRcdFx0XHRcdGV4cGlyeTogZWRpdHByb3QuZXhwaXJ5LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHgucHJvdGVjdE1vdmUgJiYgbW92ZXByb3QpIHtcblx0XHRcdFx0Y3R4LnByb3RlY3RNb3ZlID0ge1xuXHRcdFx0XHRcdGxldmVsOiBtb3ZlcHJvdC5sZXZlbCxcblx0XHRcdFx0XHRleHBpcnk6IG1vdmVwcm90LmV4cGlyeSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4LnByb3RlY3RDcmVhdGUgJiYgY3JlYXRlcHJvdCkge1xuXHRcdFx0XHRjdHgucHJvdGVjdENyZWF0ZSA9IHtcblx0XHRcdFx0XHRsZXZlbDogY3JlYXRlcHJvdC5sZXZlbCxcblx0XHRcdFx0XHRleHBpcnk6IGNyZWF0ZXByb3QuZXhwaXJ5LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Ly8gRGVmYXVsdCB0byBwcmUtZXhpc3RpbmcgY2FzY2FkaW5nIHByb3RlY3Rpb24gaWYgdW5jaGFuZ2VkIChzaW1pbGFyIHRvIGFib3ZlKVxuXHRcdFx0aWYgKGN0eC5wcm90ZWN0Q2FzY2FkZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRjdHgucHJvdGVjdENhc2NhZGUgPSAhIXBycy5maWx0ZXIoKHByKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHByLmNhc2NhZGU7XG5cdFx0XHRcdH0pLmxlbmd0aDtcblx0XHRcdH1cblx0XHRcdC8vIFdhcm4gaWYgY2FzY2FkaW5nIHByb3RlY3Rpb24gYmVpbmcgYXBwbGllZCB3aXRoIGFuIGludmFsaWQgcHJvdGVjdGlvbiBsZXZlbCxcblx0XHRcdC8vIHdoaWNoIGZvciBlZGl0IHByb3RlY3Rpb24gd2lsbCBjYXVzZSBjYXNjYWRpbmcgdG8gYmUgc2lsZW50bHkgc3RyaXBwZWRcblx0XHRcdGlmIChjdHgucHJvdGVjdENhc2NhZGUpIHtcblx0XHRcdFx0Ly8gT24gbW92ZSBwcm90ZWN0aW9uLCB0aGlzIGlzIHRlY2huaWNhbGx5IHN0cmljdGVyIHRoYW4gdGhlIE1XIEFQSSxcblx0XHRcdFx0Ly8gYnV0IHNlZW1zIHJlYXNvbmFibGUgdG8gYXZvaWQgZHVtYiB2YWx1ZXMgYW5kIG1pc2xlYWRpbmcgbG9nIGVudHJpZXMgKFQyNjU2MjYpXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQoIWN0eC5wcm90ZWN0RWRpdCB8fFxuXHRcdFx0XHRcdFx0Y3R4LnByb3RlY3RFZGl0LmxldmVsICE9PSAnc3lzb3AnIHx8XG5cdFx0XHRcdFx0XHQhY3R4LnByb3RlY3RNb3ZlIHx8XG5cdFx0XHRcdFx0XHRjdHgucHJvdGVjdE1vdmUubGV2ZWwgIT09ICdzeXNvcCcpICYmXG5cdFx0XHRcdFx0IWNvbmZpcm0oXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aCqOW3suWvueKAnCcsICfmgqjlt7LlsI3jgIwnKSArXG5cdFx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd5ZCv55So5LqG6L+e6ZSB5L+d5oqkJywgJ+OAjeWVn+eUqOS6humAo+mOluS/neittycpICtcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdCfvvIzkvYbmsqHmnInorr7nva7ku4XnrqHnkIblkZjnmoTkv53miqTnuqfliKvjgIJcXG5cXG4nLFxuXHRcdFx0XHRcdFx0XHRcdCfvvIzkvYbmspLmnInoqK3lrprlg4XnrqHnkIblk6HnmoTkv53orbfntJrliKXjgIJcXG5cXG4nXG5cdFx0XHRcdFx0XHRcdCkgK1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0J+WNleWHu+ehruiupOS7peiHquWKqOiwg+aVtOW5tue7p+e7rei/numUgeWFqOS/neaKpO+8jOWNleWHu+WPlua2iOS7pei3s+i/h+atpOaTjeS9nCcsXG5cdFx0XHRcdFx0XHRcdFx0J+m7nuaTiueiuuiqjeS7peiHquWLleiqv+aVtOS4pue5vOe6jOmAo+mOluWFqOS/neitt++8jOm7nuaTiuWPlua2iOS7pei3s+mBjuatpOaTjeS9nCdcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfov57plIHkv53miqTlt7Llj5bmtojjgIInLCAn6YCj6Y6W5L+d6K235bey5Y+W5raI44CCJykpO1xuXHRcdFx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHgucHJvdGVjdEVkaXQubGV2ZWwgPSAnc3lzb3AnO1xuXHRcdFx0XHRjdHgucHJvdGVjdE1vdmUubGV2ZWwgPSAnc3lzb3AnO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQnVpbGQgcHJvdGVjdGlvbiBsZXZlbHMgYW5kIGV4cGlyeXMgKGV4cGlyaWVzPykgZm9yIHF1ZXJ5XG5cdFx0XHRjb25zdCBwcm90ZWN0aW9ucyA9IFtdO1xuXHRcdFx0Y29uc3QgZXhwaXJ5cyA9IFtdO1xuXHRcdFx0aWYgKGN0eC5wcm90ZWN0RWRpdCkge1xuXHRcdFx0XHRwcm90ZWN0aW9ucy5wdXNoKGBlZGl0PSR7Y3R4LnByb3RlY3RFZGl0LmxldmVsfWApO1xuXHRcdFx0XHRleHBpcnlzLnB1c2goY3R4LnByb3RlY3RFZGl0LmV4cGlyeSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LnByb3RlY3RNb3ZlKSB7XG5cdFx0XHRcdHByb3RlY3Rpb25zLnB1c2goYG1vdmU9JHtjdHgucHJvdGVjdE1vdmUubGV2ZWx9YCk7XG5cdFx0XHRcdGV4cGlyeXMucHVzaChjdHgucHJvdGVjdE1vdmUuZXhwaXJ5KTtcblx0XHRcdH1cblx0XHRcdGlmIChjdHgucHJvdGVjdENyZWF0ZSkge1xuXHRcdFx0XHRwcm90ZWN0aW9ucy5wdXNoKGBjcmVhdGU9JHtjdHgucHJvdGVjdENyZWF0ZS5sZXZlbH1gKTtcblx0XHRcdFx0ZXhwaXJ5cy5wdXNoKGN0eC5wcm90ZWN0Q3JlYXRlLmV4cGlyeSk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncHJvdGVjdCcsXG5cdFx0XHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0XHRcdHRva2VuLFxuXHRcdFx0XHRwcm90ZWN0aW9uczogcHJvdGVjdGlvbnMuam9pbignfCcpLFxuXHRcdFx0XHRleHBpcnk6IGV4cGlyeXMuam9pbignfCcpLFxuXHRcdFx0XHRyZWFzb246IGN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdFx0d2F0Y2hsaXN0OiBjdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHQvLyBPbmx5IHNob3dzIHVwIGluIGxvZ3MsIG5vdCBwYWdlIGhpc3Rvcnlcblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IGN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LnByb3RlY3RDYXNjYWRlKSB7XG5cdFx0XHRcdHF1ZXJ5LmNhc2NhZGUgPSAndHJ1ZSc7XG5cdFx0XHR9XG5cdFx0XHRjdHgucHJvdGVjdFByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5L+d5oqk6aG16Z2i4oCm4oCmJywgJ+S/neitt+mggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Y3R4Lm9uUHJvdGVjdFN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZVxuXHRcdFx0KTtcblx0XHRcdGN0eC5wcm90ZWN0UHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgucHJvdGVjdFByb2Nlc3NBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Y29uc3Qgc2xlZXAgPSAobWlsbGlzZWNvbmRzKSA9PiB7XG5cdFx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRcdHNldFRpbWVvdXQoZGVmZXJyZWQucmVzb2x2ZSwgbWlsbGlzZWNvbmRzKTtcblx0XHRcdHJldHVybiBkZWZlcnJlZDtcblx0XHR9O1xuXHR9OyAvLyBlbmQgTW9yZWJpdHMud2lraS5wYWdlXG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5wcmV2aWV3ICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIFVzZSB0aGUgQVBJIHRvIHBhcnNlIGEgZnJhZ21lbnQgb2Ygd2lraXRleHQgYW5kIHJlbmRlciBpdCBhcyBIVE1MLlxuXHQgKlxuXHQgKiBUaGUgc3VnZ2VzdGVkIGltcGxlbWVudGF0aW9uIHBhdHRlcm4gKGluIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9IGFuZFxuXHQgKiB7QGxpbmsgTW9yZWJpdHMucXVpY2tGb3JtfSBzaXR1YXRpb25zKSBpcyB0byBjb25zdHJ1Y3QgYVxuXHQgKiBgTW9yZWJpdHMud2lraS5wcmV2aWV3YCBvYmplY3QgYWZ0ZXIgcmVuZGVyaW5nIGEgYE1vcmViaXRzLnF1aWNrRm9ybWAsIGFuZFxuXHQgKiBiaW5kIHRoZSBvYmplY3QgdG8gYW4gYXJiaXRyYXJ5IHByb3BlcnR5IG9mIHRoZSBmb3JtIChlLmcuIHxwcmV2aWV3ZXJ8KS5cblx0ICogRm9yIGFuIGV4YW1wbGUsIHNlZSB0d2lua2xld2Fybi5qcy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHByZXZpZXdib3ggLSBUaGUgZWxlbWVudCB0aGF0IHdpbGwgY29udGFpbiB0aGUgcmVuZGVyZWQgSFRNTCxcblx0ICogdXN1YWxseSBhIDxkaXY+IGVsZW1lbnQuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLnByZXZpZXcgPSBmdW5jdGlvbiAocHJldmlld2JveCkge1xuXHRcdHRoaXMucHJldmlld2JveCA9IHByZXZpZXdib3g7XG5cdFx0JChwcmV2aWV3Ym94KS5hZGRDbGFzcygnbW9yZWJpdHMtcHJldmlld2JveCcpLmhpZGUoKTtcblx0XHQvKipcblx0XHQgKiBEaXNwbGF5cyB0aGUgcHJldmlldyBib3gsIGFuZCBiZWdpbnMgYW4gYXN5bmNocm9ub3VzIGF0dGVtcHRcblx0XHQgKiB0byByZW5kZXIgdGhlIHNwZWNpZmllZCB3aWtpdGV4dC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpdGV4dCAtIFdpa2l0ZXh0IHRvIHJlbmRlcjsgbW9zdCB0aGluZ3Mgc2hvdWxkIHdvcmssIGluY2x1ZGluZyBgc3Vic3Q6YCBhbmQgYH5+fn5gLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbcGFnZVRpdGxlXSAtIE9wdGlvbmFsIHBhcmFtZXRlciBmb3IgdGhlIHBhZ2UgdGhpcyBzaG91bGQgYmUgcmVuZGVyZWQgYXMgYmVpbmcgb24sIGlmIG9taXR0ZWQgaXQgaXMgdGFrZW4gYXMgdGhlIGN1cnJlbnQgcGFnZS5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW3NlY3Rpb25UaXRsZV0gLSBJZiBwcm92aWRlZCwgcmVuZGVyIHRoZSB0ZXh0IGFzIGEgbmV3IHNlY3Rpb24gdXNpbmcgdGhpcyBhcyB0aGUgdGl0bGUuXG5cdFx0ICogQHJldHVybnMge2pRdWVyeS5wcm9taXNlfVxuXHRcdCAqL1xuXHRcdHRoaXMuYmVnaW5SZW5kZXIgPSAod2lraXRleHQsIHBhZ2VUaXRsZSwgc2VjdGlvblRpdGxlKSA9PiB7XG5cdFx0XHQkKHByZXZpZXdib3gpLnNob3coKTtcblx0XHRcdGNvbnN0IHN0YXR1c3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRwcmV2aWV3Ym94LmFwcGVuZENoaWxkKHN0YXR1c3NwYW4pO1xuXHRcdFx0TW9yZWJpdHMuc3RhdHVzLmluaXQoc3RhdHVzc3Bhbik7XG5cdFx0XHQvLyDoi6XpobXpnaLkuI3mmK93aWtpdGV4dO+8iOS+i+WmgkpT44CBQ1NT562J77yJ77yM6YKj5LmI5om+5LiA5Liqd2lraXRleHTpobXpnaLmnaXpooTop4jjgIJcblx0XHRcdGxldCBwYWdlTmFtZSA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcblx0XHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKSAhPT0gJ3dpa2l0ZXh0Jykge1xuXHRcdFx0XHRwYWdlTmFtZSA9IGBEcmFmdDoke3BhZ2VOYW1lfWA7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRwcm9wOiBbJ3RleHQnLCAnbW9kdWxlcyddLFxuXHRcdFx0XHRwc3Q6IHRydWUsXG5cdFx0XHRcdC8vIFBTVCA9IHByZS1zYXZlIHRyYW5zZm9ybTsgdGhpcyBtYWtlcyBzdWJzdGl0dXRpb24gd29yayBwcm9wZXJseVxuXHRcdFx0XHRwcmV2aWV3OiB0cnVlLFxuXHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSB8fCBwYWdlTmFtZSxcblx0XHRcdFx0ZGlzYWJsZWxpbWl0cmVwb3J0OiB0cnVlLFxuXHRcdFx0XHRkaXNhYmxlZWRpdHNlY3Rpb246IHRydWUsXG5cdFx0XHRcdHVzZWxhbmc6IG13LmNvbmZpZy5nZXQoJ3dnVXNlckxhbmd1YWdlJyksXG5cdFx0XHRcdC8vIFVzZSB3Z1VzZXJMYW5ndWFnZSBmb3IgcHJldmlld1xuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoc2VjdGlvblRpdGxlKSB7XG5cdFx0XHRcdHF1ZXJ5LnNlY3Rpb24gPSAnbmV3Jztcblx0XHRcdFx0cXVlcnkuc2VjdGlvbnRpdGxlID0gc2VjdGlvblRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVuZGVyQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+WKoOi9veS4reKApuKApicsICfovInlhaXkuK3igKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGZuUmVuZGVyU3VjY2Vzcyxcblx0XHRcdFx0bmV3IE1vcmViaXRzLnN0YXR1cyh3aW5kb3cud2dVTFMoJ+mihOiniCcsICfpoJDopr0nKSlcblx0XHRcdCk7XG5cdFx0XHRyZW5kZXJBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Y29uc3QgZm5SZW5kZXJTdWNjZXNzID0gKGFwaW9iaikgPT4ge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhcGlvYmouZ2V0UmVzcG9uc2UoKTtcblx0XHRcdGNvbnN0IGh0bWwgPSByZXNwb25zZS5wYXJzZS50ZXh0O1xuXHRcdFx0aWYgKCFodG1sKSB7XG5cdFx0XHRcdGFwaW9iai5zdGF0ZWxlbS5lcnJvcih3aW5kb3cud2dVTFMoJ+WKoOi9vemihOiniOWksei0pe+8jOaIluaooeadv+S4uuepuicsICfovInlhaXpoJDopr3lpLHmlZfvvIzmiJbmqKHmnb/ngrrnqbonKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHByZXZpZXdib3guaW5uZXJIVE1MID0gaHRtbDtcblx0XHRcdG13LmxvYWRlci5sb2FkKHJlc3BvbnNlLnBhcnNlLm1vZHVsZXN0eWxlcyk7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChyZXNwb25zZS5wYXJzZS5tb2R1bGVzKTtcblx0XHRcdC8vIHRoaXMgbWFrZXMgbGlua3Mgb3BlbiBpbiBuZXcgdGFiXG5cdFx0XHQkKHByZXZpZXdib3gpLmZpbmQoJ2EnKS5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJykuYXR0cigncmVsJywgJ25vb3BlbmVyIG5vcmVmZXJyZXInKTtcblx0XHR9O1xuXHRcdC8qKiBIaWRlcyB0aGUgcHJldmlldyBib3ggYW5kIGNsZWFycyBpdC4gKi9cblx0XHR0aGlzLmNsb3NlUHJldmlldyA9ICgpID0+IHtcblx0XHRcdCQocHJldmlld2JveCkuZW1wdHkoKS5oaWRlKCk7XG5cdFx0fTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpdGV4dCAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBXaWtpdGV4dCBtYW5pcHVsYXRpb24uXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMud2lraXRleHRcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpdGV4dCA9IHt9O1xuXHQvKipcblx0ICogR2V0IHRoZSB2YWx1ZSBvZiBldmVyeSBwYXJhbWV0ZXIgZm91bmQgaW4gdGhlIHdpa2l0ZXh0IG9mIGEgZ2l2ZW4gdGVtcGxhdGUuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFdpa2l0ZXh0IGNvbnRhaW5pbmcgYSB0ZW1wbGF0ZS5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSAtIEluZGV4IG5vdGluZyB3aGVyZSBpbiB0aGUgdGV4dCB0aGUgdGVtcGxhdGUgYmVnaW5zLlxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSBge25hbWU6IHRlbXBsYXRlTmFtZSwgcGFyYW1ldGVyczoge2tleTogdmFsdWV9fWAuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpdGV4dC5wYXJzZVRlbXBsYXRlID0gKHRleHQsIHN0YXJ0KSA9PiB7XG5cdFx0c3RhcnQgfHw9IDA7XG5cdFx0Y29uc3QgbGV2ZWwgPSBbXTsgLy8gVHJhY2sgb2YgaG93IGRlZXAgd2UgYXJlICh7eywge3t7LCBvciBbWylcblx0XHRsZXQgY291bnQgPSAtMTsgLy8gTnVtYmVyIG9mIHBhcmFtZXRlcnMgZm91bmRcblx0XHRsZXQgdW5uYW1lZCA9IDA7IC8vIEtlZXAgdHJhY2sgb2Ygd2hhdCBudW1iZXIgYW4gdW5uYW1lZCBwYXJhbWV0ZXIgc2hvdWxkIHJlY2VpdmVcblx0XHRsZXQgZXF1YWxzID0gLTE7IC8vIEFmdGVyIGZpbmRpbmcgXCI9XCIgYmVmb3JlIGEgcGFyYW1ldGVyLCB0aGUgaW5kZXg7IG90aGVyd2lzZSwgLTFcblx0XHRsZXQgY3VycmVudCA9ICcnO1xuXHRcdGNvbnN0IHJlc3VsdCA9IHtcblx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0cGFyYW1ldGVyczoge30sXG5cdFx0fTtcblx0XHRsZXQga2V5O1xuXHRcdGxldCB2YWx1ZTtcblx0XHQvKipcblx0XHQgKiBGdW5jdGlvbiB0byBoYW5kbGUgZmluZGluZyBwYXJhbWV0ZXIgdmFsdWVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbZmluYWw9ZmFsc2VdIC0gV2hldGhlciB0aGlzIGlzIHRoZSBmaW5hbFxuXHRcdCAqIHBhcmFtZXRlciBhbmQgd2UgbmVlZCB0byByZW1vdmUgdGhlIHRyYWlsaW5nIGB9fWAuXG5cdFx0ICovXG5cdFx0Y29uc3QgZmluZFBhcmFtID0gKGZpbmFsKSA9PiB7XG5cdFx0XHQvLyBOb3RoaW5nIGZvdW5kIHlldCwgdGhpcyBtdXN0IGJlIHRoZSB0ZW1wbGF0ZSBuYW1lXG5cdFx0XHRpZiAoY291bnQgPT09IC0xKSB7XG5cdFx0XHRcdHJlc3VsdC5uYW1lID0gY3VycmVudC5zbGljZSgyKS50cmltKCk7XG5cdFx0XHRcdCsrY291bnQ7XG5cdFx0XHR9IGVsc2UgaWYgKGVxdWFscyA9PT0gLTEpIHtcblx0XHRcdFx0Ly8gSW4gYSBwYXJhbWV0ZXJcblx0XHRcdFx0Ly8gTm8gZXF1YWxzLCBzbyBpdCBtdXN0IGJlIHVubmFtZWQ7IG5vIHRyaW0gc2luY2Ugd2hpdGVzcGFjZSBhbGxvd2VkXG5cdFx0XHRcdGNvbnN0IHBhcmFtID0gZmluYWwgPyBjdXJyZW50LnNsaWNlKGVxdWFscyArIDEsIC0yKSA6IGN1cnJlbnQ7XG5cdFx0XHRcdGlmIChwYXJhbSkge1xuXHRcdFx0XHRcdHJlc3VsdC5wYXJhbWV0ZXJzWysrdW5uYW1lZF0gPSBwYXJhbTtcblx0XHRcdFx0XHQrK2NvdW50O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBXZSBmb3VuZCBhbiBlcXVhbHMsIHNvIHNhdmUgdGhlIHBhcmFtZXRlciBhcyBrZXk6IHZhbHVlXG5cdFx0XHRcdGtleSA9IGN1cnJlbnQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgZXF1YWxzKSkudHJpbSgpO1xuXHRcdFx0XHR2YWx1ZSA9IGZpbmFsID8gY3VycmVudC5zbGljZShlcXVhbHMgKyAxLCAtMikudHJpbSgpIDogY3VycmVudC5zbGljZShNYXRoLm1heCgwLCBlcXVhbHMgKyAxKSkudHJpbSgpO1xuXHRcdFx0XHRyZXN1bHQucGFyYW1ldGVyc1trZXldID0gdmFsdWU7XG5cdFx0XHRcdGVxdWFscyA9IC0xO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgdGV4dC5sZW5ndGg7ICsraSkge1xuXHRcdFx0Y29uc3QgdGVzdDMgPSB0ZXh0LnNsaWNlKGksIGkgKyAzKTtcblx0XHRcdGlmICh0ZXN0MyA9PT0gJ3t7eycgfHwgKHRlc3QzID09PSAnfX19JyAmJiBsZXZlbC5hdCgtMSkgPT09IDMpKSB7XG5cdFx0XHRcdGN1cnJlbnQgKz0gdGVzdDM7XG5cdFx0XHRcdGkgKz0gMjtcblx0XHRcdFx0aWYgKHRlc3QzID09PSAne3t7Jykge1xuXHRcdFx0XHRcdGxldmVsLnB1c2goMyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGV2ZWwucG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB0ZXN0MiA9IHRleHQuc2xpY2UoaSwgaSArIDIpO1xuXHRcdFx0Ly8gRW50ZXJpbmcgYSB0ZW1wbGF0ZSAob3IgbGluaylcblx0XHRcdGlmICh0ZXN0MiA9PT0gJ3t7JyB8fCB0ZXN0MiA9PT0gJ1tbJykge1xuXHRcdFx0XHRjdXJyZW50ICs9IHRlc3QyO1xuXHRcdFx0XHQrK2k7XG5cdFx0XHRcdGlmICh0ZXN0MiA9PT0gJ3t7Jykge1xuXHRcdFx0XHRcdGxldmVsLnB1c2goMik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGV2ZWwucHVzaCgnd2wnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIEVpdGhlciBsZWF2aW5nIGEgbGluayBvciB0ZW1wbGF0ZS9wYXJzZXIgZnVuY3Rpb25cblx0XHRcdGlmICgodGVzdDIgPT09ICd9fScgJiYgbGV2ZWwuYXQoLTEpID09PSAyKSB8fCAodGVzdDIgPT09ICddXScgJiYgbGV2ZWwuYXQoLTEpID09PSAnd2wnKSkge1xuXHRcdFx0XHRjdXJyZW50ICs9IHRlc3QyO1xuXHRcdFx0XHQrK2k7XG5cdFx0XHRcdGxldmVsLnBvcCgpO1xuXHRcdFx0XHQvLyBGaW5kIHRoZSBmaW5hbCBwYXJhbWV0ZXIgaWYgdGhpcyByZWFsbHkgaXMgdGhlIGVuZFxuXHRcdFx0XHRpZiAodGVzdDIgPT09ICd9fScgJiYgbGV2ZWwubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0ZmluZFBhcmFtKHRydWUpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRleHQuY2hhckF0KGkpID09PSAnfCcgJiYgbGV2ZWwubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdC8vIEFub3RoZXIgcGlwZSBmb3VuZCwgdG9wbGV2ZWwsIHNvIHBhcmFtZXRlciBjb21pbmcgdXAhXG5cdFx0XHRcdGZpbmRQYXJhbSgpO1xuXHRcdFx0XHRjdXJyZW50ID0gJyc7XG5cdFx0XHR9IGVsc2UgaWYgKGVxdWFscyA9PT0gLTEgJiYgdGV4dC5jaGFyQXQoaSkgPT09ICc9JyAmJiBsZXZlbC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0Ly8gRXF1YWxzIGZvdW5kLCB0b3BsZXZlbFxuXHRcdFx0XHRlcXVhbHMgPSBjdXJyZW50Lmxlbmd0aDtcblx0XHRcdFx0Y3VycmVudCArPSB0ZXh0LmNoYXJBdChpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEp1c3QgYWR2YW5jZSB0aGUgcG9zaXRpb25cblx0XHRcdFx0Y3VycmVudCArPSB0ZXh0LmNoYXJBdChpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0LyoqXG5cdCAqIEFkanVzdCBhbmQgbWFuaXB1bGF0ZSB0aGUgd2lraXRleHQgb2YgYSBwYWdlLlxuXHQgKlxuXHQgKiBAY2xhc3Ncblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2l0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gV2lraXRleHQgdG8gYmUgbWFuaXB1bGF0ZWQuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpdGV4dC5wYWdlID0gZnVuY3Rpb24gKHRleHQpIHtcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHR9O1xuXHRNb3JlYml0cy53aWtpdGV4dC5wYWdlLnByb3RvdHlwZSA9IHtcblx0XHR0ZXh0OiAnJyxcblx0XHQvKipcblx0XHQgKiBSZW1vdmVzIGxpbmtzIHRvIGBsaW5rX3RhcmdldGAgZnJvbSB0aGUgcGFnZSB0ZXh0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxpbmtUYXJnZXRcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRyZW1vdmVMaW5rKGxpbmtUYXJnZXQpIHtcblx0XHRcdGNvbnN0IG13VGl0bGUgPSBtdy5UaXRsZS5uZXdGcm9tVGV4dChsaW5rVGFyZ2V0KTtcblx0XHRcdGNvbnN0IG5hbWVzcGFjZUlEID0gbXdUaXRsZS5nZXROYW1lc3BhY2VJZCgpO1xuXHRcdFx0Y29uc3QgdGl0bGUgPSBtd1RpdGxlLmdldE1haW5UZXh0KCk7XG5cdFx0XHRsZXQgbGlua1JlZ2V4U3RyaW5nID0gJyc7XG5cdFx0XHRpZiAobmFtZXNwYWNlSUQgIT09IDApIHtcblx0XHRcdFx0bGlua1JlZ2V4U3RyaW5nID0gYCR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgobmFtZXNwYWNlSUQpfTpgO1xuXHRcdFx0fVxuXHRcdFx0bGlua1JlZ2V4U3RyaW5nICs9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgodGl0bGUpO1xuXHRcdFx0Ly8gRm9yIG1vc3QgbmFtZXNwYWNlcywgdW5saW5rIGJvdGggW1tVc2VyOlRlc3RdXSBhbmQgW1s6VXNlcjpUZXN0XV1cblx0XHRcdC8vIEZvciBmaWxlcyBhbmQgY2F0ZWdvcmllcywgb25seSB1bmxpbmsgW1s6Q2F0ZWdvcnk6VGVzdF1dLiBEbyBub3QgdW5saW5rIFtbQ2F0ZWdvcnk6VGVzdF1dXG5cdFx0XHRjb25zdCBpc0ZpbGVPckNhdGVnb3J5ID0gWzYsIDE0XS5pbmNsdWRlcyhuYW1lc3BhY2VJRCk7XG5cdFx0XHRjb25zdCBjb2xvbiA9IGlzRmlsZU9yQ2F0ZWdvcnkgPyAnOicgOiAnOj8nO1xuXHRcdFx0Y29uc3Qgc2ltcGxlTGlua1JlZ2V4ID0gbmV3IFJlZ0V4cChgXFxcXFtcXFxcWyR7Y29sb259KCR7bGlua1JlZ2V4U3RyaW5nfSlcXFxcXVxcXFxdYCwgJ2cnKTtcblx0XHRcdGNvbnN0IHBpcGVkTGlua1JlZ2V4ID0gbmV3IFJlZ0V4cChgXFxcXFtcXFxcWyR7Y29sb259JHtsaW5rUmVnZXhTdHJpbmd9XFxcXHwoLis/KVxcXFxdXFxcXF1gLCAnZycpO1xuXHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2Uoc2ltcGxlTGlua1JlZ2V4LCAnJDEnKS5yZXBsYWNlKHBpcGVkTGlua1JlZ2V4LCAnJDEnKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ29tbWVudHMgb3V0IGltYWdlcyBmcm9tIHBhZ2UgdGV4dDsgaWYgdXNlZCBpbiBhIGdhbGxlcnksIGRlbGV0ZXMgdGhlIHdob2xlIGxpbmUuXG5cdFx0ICogSWYgdXNlZCBhcyBhIHRlbXBsYXRlIGFyZ3VtZW50IChub3QgbmVjZXNzYXJpbHkgd2l0aCBgRmlsZTpgIHByZWZpeCksIHRoZSB0ZW1wbGF0ZSBwYXJhbWV0ZXIgaXMgY29tbWVudGVkIG91dC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSAtIEltYWdlIG5hbWUgd2l0aG91dCBgRmlsZTpgIHByZWZpeC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW3JlYXNvbl0gLSBSZWFzb24gdG8gYmUgaW5jbHVkZWQgaW4gY29tbWVudCwgYWxvbmdzaWRlIHRoZSBjb21tZW50ZWQtb3V0IGltYWdlLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdGNvbW1lbnRPdXRJbWFnZShpbWFnZSwgcmVhc29uKSB7XG5cdFx0XHRjb25zdCB1bmJpbmRlciA9IG5ldyBNb3JlYml0cy51bmJpbmRlcih0aGlzLnRleHQpO1xuXHRcdFx0dW5iaW5kZXIudW5iaW5kKCc8IS0tJywgJy0tPicpO1xuXHRcdFx0cmVhc29uID0gcmVhc29uID8gYCR7cmVhc29ufTogYCA6ICcnO1xuXHRcdFx0Y29uc3QgaW1hZ2VSZWdleFN0cmluZyA9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgoaW1hZ2UpO1xuXHRcdFx0Ly8gQ2hlY2sgZm9yIG5vcm1hbCBpbWFnZSBsaW5rcywgaS5lLiBbW0ZpbGU6Rm9vYmFyLnBuZ3wuLi5dXVxuXHRcdFx0Ly8gV2lsbCBlYXQgdGhlIHdob2xlIGxpbmtcblx0XHRcdGNvbnN0IGxpbmtzUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcWyR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoNil9OlxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ31cXFxccypbXFxcXHwoPzpcXFxcXVxcXFxdKV1gXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgYWxsTGlua3MgPSBNb3JlYml0cy5zdHJpbmcuc3BsaXRXZWlnaHRlZEJ5S2V5cyh1bmJpbmRlci5jb250ZW50LCAnW1snLCAnXV0nKTtcblx0XHRcdGZvciAoY29uc3QgYWxsTGluayBvZiBhbGxMaW5rcykge1xuXHRcdFx0XHRpZiAobGlua3NSZWdleC50ZXN0KGFsbExpbmspKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVwbGFjZW1lbnQgPSBgPCEtLSAke3JlYXNvbn0ke2FsbExpbmt9IC0tPmA7XG5cdFx0XHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZShhbGxMaW5rLCByZXBsYWNlbWVudCk7XG5cdFx0XHRcdFx0Ly8gdW5iaW5kIHRoZSBuZXdseSBjcmVhdGVkIGNvbW1lbnRzXG5cdFx0XHRcdFx0dW5iaW5kZXIudW5iaW5kKCc8IS0tJywgJy0tPicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBDaGVjayBmb3IgZ2FsbGVyeSBpbWFnZXMsIGkuZS4gaW5zdGFuY2VzIHRoYXQgbXVzdCBzdGFydCBvbiBhIG5ldyBsaW5lLFxuXHRcdFx0Ly8gZXZlbnR1YWxseSBwcmVjZWRlZCB3aXRoIHNvbWUgc3BhY2UsIGFuZCBtdXN0IGluY2x1ZGUgRmlsZTogcHJlZml4XG5cdFx0XHQvLyBXaWxsIGVhdCB0aGUgd2hvbGUgbGluZS5cblx0XHRcdGNvbnN0IGdhbGxlcnlJbWFnZVJlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YCheXFxcXHMqJHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCg2KX06XFxcXHMqJHtpbWFnZVJlZ2V4U3RyaW5nfVxcXFxzKig/OlxcXFx8Lio/JHwkKSlgLFxuXHRcdFx0XHQnbWcnXG5cdFx0XHQpO1xuXHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZShnYWxsZXJ5SW1hZ2VSZWdleCwgYDwhLS0gJHtyZWFzb259JDEgLS0+YCk7XG5cdFx0XHQvLyB1bmJpbmQgdGhlIG5ld2x5IGNyZWF0ZWQgY29tbWVudHNcblx0XHRcdHVuYmluZGVyLnVuYmluZCgnPCEtLScsICctLT4nKTtcblx0XHRcdC8vIENoZWNrIGZyZWUgaW1hZ2UgdXNhZ2VzLCBmb3IgZXhhbXBsZSBhcyB0ZW1wbGF0ZSBhcmd1bWVudHMsIG1pZ2h0IGhhdmUgdGhlIEZpbGU6IHByZWZpeCBleGNsdWRlZCwgYnV0IG11c3QgYmUgcHJlY2VkZWQgYnkgYW4gfFxuXHRcdFx0Ly8gV2lsbCBvbmx5IGVhdCB0aGUgaW1hZ2UgbmFtZSBhbmQgdGhlIHByZWNlZGluZyBiYXIgYW5kIGFuIGV2ZW50dWFsIG5hbWVkIHBhcmFtZXRlclxuXHRcdFx0Y29uc3QgZnJlZUltYWdlUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgKFxcXFx8XFxcXHMqKD86W1xcXFx3XFxcXHNdK1xcXFw9KT9cXFxccyooPzoke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyopPyR7aW1hZ2VSZWdleFN0cmluZ30pYCxcblx0XHRcdFx0J21nJ1xuXHRcdFx0KTtcblx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoZnJlZUltYWdlUmVnZXgsIGA8IS0tICR7cmVhc29ufSQxIC0tPmApO1xuXHRcdFx0Ly8gUmViaW5kIHRoZSBjb250ZW50IG5vdywgd2UgYXJlIGRvbmUhXG5cdFx0XHR0aGlzLnRleHQgPSB1bmJpbmRlci5yZWJpbmQoKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydHMgdXNlcyBvZiBbW0ZpbGU6YGltYWdlYF1dIHRvIFtbRmlsZTpgaW1hZ2VgfGBkYXRhYF1dLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIC0gSW1hZ2UgbmFtZSB3aXRob3V0IEZpbGU6IHByZWZpeC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSAtIFRoZSBkaXNwbGF5IG9wdGlvbnMuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0YWRkVG9JbWFnZUNvbW1lbnQoaW1hZ2UsIGRhdGEpIHtcblx0XHRcdGNvbnN0IGltYWdlUmVnZXhTdHJpbmcgPSBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KGltYWdlKTtcblx0XHRcdGNvbnN0IGxpbmtzUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcWyR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoNil9OlxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ31cXFxccypbXFxcXHwoPzpcXFxcXVxcXFxdKV1gXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgYWxsTGlua3MgPSBNb3JlYml0cy5zdHJpbmcuc3BsaXRXZWlnaHRlZEJ5S2V5cyh0aGlzLnRleHQsICdbWycsICddXScpO1xuXHRcdFx0Zm9yIChsZXQgcmVwbGFjZW1lbnQgb2YgYWxsTGlua3MpIHtcblx0XHRcdFx0aWYgKGxpbmtzUmVnZXgudGVzdChyZXBsYWNlbWVudCkpIHtcblx0XHRcdFx0XHQvLyBqdXN0IHB1dCBpdCBhdCB0aGUgZW5kP1xuXHRcdFx0XHRcdHJlcGxhY2VtZW50ID0gcmVwbGFjZW1lbnQucmVwbGFjZSgvXFxdXFxdJC8sIGB8JHtkYXRhfV1dYCk7XG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2UocmVwbGFjZW1lbnQsIHJlcGxhY2VtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZ2FsbGVyeVJlZ2V4ID0gbmV3IFJlZ0V4cChgXihcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9Lio/KVxcXFx8PyguKj8pJGAsICdtZycpO1xuXHRcdFx0Y29uc3QgbmV3dGV4dCA9IGAkMXwkMiAke2RhdGF9YDtcblx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKGdhbGxlcnlSZWdleCwgbmV3dGV4dCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBhbGwgdHJhbnNjbHVzaW9ucyBvZiBhIHRlbXBsYXRlIGZyb20gcGFnZSB0ZXh0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIC0gUGFnZSBuYW1lIHdob3NlIHRyYW5zY2x1c2lvbnMgYXJlIHRvIGJlIHJlbW92ZWQsXG5cdFx0ICogaW5jbHVkZSBuYW1lc3BhY2UgcHJlZml4IG9ubHkgaWYgbm90IGluIHRlbXBsYXRlIG5hbWVzcGFjZS5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRyZW1vdmVUZW1wbGF0ZSh0ZW1wbGF0ZSkge1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVSZWdleFN0cmluZyA9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgodGVtcGxhdGUpO1xuXHRcdFx0Y29uc3QgbGlua3NSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxce1xcXFx7KD86JHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCgxMCl9Oik/XFxcXHMqJHt0ZW1wbGF0ZVJlZ2V4U3RyaW5nfVxcXFxzKltcXFxcfCg/OlxcXFx9XFxcXH0pXWBcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBhbGxUZW1wbGF0ZXMgPSBNb3JlYml0cy5zdHJpbmcuc3BsaXRXZWlnaHRlZEJ5S2V5cyh0aGlzLnRleHQsICd7eycsICd9fScsIFsne3t7JywgJ319fSddKTtcblx0XHRcdGZvciAoY29uc3QgYWxsVGVtcGxhdGUgb2YgYWxsVGVtcGxhdGVzKSB7XG5cdFx0XHRcdGlmIChsaW5rc1JlZ2V4LnRlc3QoYWxsVGVtcGxhdGUpKSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2UoYWxsVGVtcGxhdGUsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTbWFydGx5IGluc2VydCBhIHRhZyBhdG9wIHBhZ2UgdGV4dCBidXQgYWZ0ZXIgc3BlY2lmaWVkIHRlbXBsYXRlcyxcblx0XHQgKiBzdWNoIGFzIGhhdG5vdGVzLCBzaG9ydCBkZXNjcmlwdGlvbiwgb3IgZGVsZXRpb24gYW5kIHByb3RlY3Rpb24gdGVtcGxhdGVzLlxuXHRcdCAqIE5vdGFibHksIGRvZXMgKm5vdCogaW5zZXJ0IGEgbmV3bGluZSBhZnRlciB0aGUgdGFnLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRhZyAtIFRoZSB0YWcgdG8gYmUgaW5zZXJ0ZWQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHJlZ2V4IC0gVGVtcGxhdGVzIGFmdGVyIHdoaWNoIHRvIGluc2VydCB0YWcsXG5cdFx0ICogZ2l2ZW4gYXMgZWl0aGVyIGFzIGEgKHJlZ2V4LXZhbGlkKSBzdHJpbmcgb3IgYW4gYXJyYXkgdG8gYmUgam9pbmVkIGJ5IHBpcGVzLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbZmxhZ3M9aV0gLSBSZWdleCBmbGFncyB0byBhcHBseS4gIGAnJ2AgdG8gcHJvdmlkZSBubyBmbGFncztcblx0XHQgKiBvdGhlciBmYWxzZXkgdmFsdWVzIHdpbGwgZGVmYXVsdCB0byBgaWAuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFtwcmVSZWdleF0gLSBPcHRpb25hbCByZWdleCBzdHJpbmcgb3IgYXJyYXkgdG8gbWF0Y2hcblx0XHQgKiBiZWZvcmUgYW55IHRlbXBsYXRlIG1hdGNoZXMgKGkuZS4gYmVmb3JlIGB7e2ApLCBzdWNoIGFzIGh0bWwgY29tbWVudHMuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0aW5zZXJ0QWZ0ZXJUZW1wbGF0ZXModGFnLCByZWdleCwgZmxhZ3MsIHByZVJlZ2V4KSB7XG5cdFx0XHRpZiAodGFnID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm8gdGFnIHByb3ZpZGVkJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyAubGVuZ3RoIGlzIG9ubHkgYSBwcm9wZXJ0eSBvZiBzdHJpbmdzIGFuZCBhcnJheXMgc28gd2Vcblx0XHRcdC8vIHNob3VsZG4ndCBuZWVkIHRvIGNoZWNrIHR5cGVcblx0XHRcdGlmIChyZWdleCA9PT0gdW5kZWZpbmVkIHx8ICFyZWdleC5sZW5ndGgpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdObyByZWdleCBwcm92aWRlZCcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlZ2V4KSkge1xuXHRcdFx0XHRyZWdleCA9IHJlZ2V4LmpvaW4oJ3wnKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgZmxhZ3MgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGZsYWdzID0gJ2knO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFwcmVSZWdleCB8fCAhcHJlUmVnZXgubGVuZ3RoKSB7XG5cdFx0XHRcdHByZVJlZ2V4ID0gJyc7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocHJlUmVnZXgpKSB7XG5cdFx0XHRcdHByZVJlZ2V4ID0gcHJlUmVnZXguam9pbignfCcpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gUmVnZXggaXMgZXh0cmEgY29tcGxpY2F0ZWQgdG8gYWxsb3cgZm9yIHRlbXBsYXRlcyB3aXRoXG5cdFx0XHQvLyBwYXJhbWV0ZXJzIGFuZCB0byBoYW5kbGUgd2hpdGVzcGFjZSBwcm9wZXJseVxuXHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2UoXG5cdFx0XHRcdG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0Ly8gbGVhZGluZyB3aGl0ZXNwYWNlXG5cdFx0XHRcdFx0Ly8gY2FwdHVyZSB0ZW1wbGF0ZShzKVxuXHRcdFx0XHRcdC8vIFByZS10ZW1wbGF0ZSByZWdleCwgc3VjaCBhcyBsZWFkaW5nIGh0bWwgY29tbWVudHNcblx0XHRcdFx0XHQvLyBiZWdpbiB0ZW1wbGF0ZSBmb3JtYXRcblx0XHRcdFx0XHQvLyBUZW1wbGF0ZSByZWdleFxuXHRcdFx0XHRcdC8vIGVuZCBtYWluIHRlbXBsYXRlIG5hbWUsIG9wdGlvbmFsbHkgd2l0aCBhIG51bWJlclxuXHRcdFx0XHRcdC8vIFByb2JhYmx5IHJlbW92ZSB0aGUgKD86KSB0aG91Z2hcblx0XHRcdFx0XHQvLyB0ZW1wbGF0ZSBwYXJhbWV0ZXJzXG5cdFx0XHRcdFx0Ly8gZW5kIHRlbXBsYXRlIGZvcm1hdFxuXHRcdFx0XHRcdC8vIGVuZCBjYXB0dXJlXG5cdFx0XHRcdFx0Ly8gdHJhaWxpbmcgd2hpdGVzcGFjZVxuXHRcdFx0XHRcdGBeXFxcXHMqKD86KCg/OlxcXFxzKiR7XG5cdFx0XHRcdFx0XHQvLyBQcmUtdGVtcGxhdGUgcmVnZXgsIHN1Y2ggYXMgbGVhZGluZyBodG1sIGNvbW1lbnRzXG5cdFx0XHRcdFx0XHRwcmVSZWdleFxuXHRcdFx0XHRcdH18XFxcXHtcXFxce1xcXFxzKig/OiR7XG5cdFx0XHRcdFx0XHQvLyBUZW1wbGF0ZSByZWdleFxuXHRcdFx0XHRcdFx0cmVnZXhcblx0XHRcdFx0XHR9KVxcXFxkKlxcXFxzKihcXFxcfCg/OlxcXFx7XFxcXHtbXnt9XSpcXFxcfVxcXFx9fFtee31dKSopP1xcXFx9XFxcXH0pKyg/OlxcXFxzKlxcXFxuKT8pXFxcXHMqKT9gLFxuXHRcdFx0XHRcdGZsYWdzXG5cdFx0XHRcdCksXG5cdFx0XHRcdGAkMSR7dGFnfWBcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEdldCB0aGUgbWFuaXB1bGF0ZWQgd2lraXRleHQuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGdldFRleHQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50ZXh0O1xuXHRcdH0sXG5cdH07XG5cdC8qICoqKioqKioqKioqIE1vcmViaXRzLnVzZXJzcGFjZUxvZ2dlciAqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIEhhbmRsZXMgbG9nZ2luZyBhY3Rpb25zIHRvIGEgdXNlcnNwYWNlIGxvZy5cblx0ICogVXNlZCBpbiBDU0QsIFBST0QsIGFuZCBYRkQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IGxvZ1BhZ2VOYW1lIC0gVGl0bGUgb2YgdGhlIHN1YnBhZ2Ugb2YgdGhlIGN1cnJlbnQgdXNlcidzIGxvZy5cblx0ICovXG5cdE1vcmViaXRzLnVzZXJzcGFjZUxvZ2dlciA9IGZ1bmN0aW9uIChsb2dQYWdlTmFtZSkge1xuXHRcdGlmICghbG9nUGFnZU5hbWUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbm8gbG9nIHBhZ2UgbmFtZSBzcGVjaWZpZWQnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogVGhlIHRleHQgdG8gcHJlZml4IHRoZSBsb2cgd2l0aCB1cG9uIGNyZWF0aW9uLCBkZWZhdWx0cyB0byBlbXB0eS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5pbml0aWFsVGV4dCA9ICcnO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBoZWFkZXIgbGV2ZWwgdG8gdXNlIGZvciBtb250aHMsIGRlZmF1bHRzIHRvIDMgKGA9PT1gKS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtudW1iZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5oZWFkZXJMZXZlbCA9IDM7XG5cdFx0dGhpcy5jaGFuZ2VUYWdzID0gJyc7XG5cdFx0LyoqXG5cdFx0ICogTG9nIHRoZSBlbnRyeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2dUZXh0IC0gRG9lc24ndCBpbmNsdWRlIGxlYWRpbmcgYCNgIG9yIGAqYC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3VtbWFyeVRleHQgLSBFZGl0IHN1bW1hcnkuXG5cdFx0ICogQHJldHVybnMge0pRdWVyeS5Qcm9taXNlfVxuXHRcdCAqL1xuXHRcdHRoaXMubG9nID0gZnVuY3Rpb24gKGxvZ1RleHQsIHN1bW1hcnlUZXh0KSB7XG5cdFx0XHRjb25zdCBkZWYgPSAkLkRlZmVycmVkKCk7XG5cdFx0XHRpZiAoIWxvZ1RleHQpIHtcblx0XHRcdFx0cmV0dXJuIGRlZi5yZWplY3QoKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhZ2UgPSBuZXcgTW9yZWJpdHMud2lraS5wYWdlKFxuXHRcdFx0XHRgVXNlcjoke213LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKX0vJHtsb2dQYWdlTmFtZX1gLFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+WwhumhueebruWKoOWFpeWIsOeUqOaIt+epuumXtOaXpeW/lycsICflsIfpoIXnm67liqDlhaXliLDkvb/nlKjogIXnqbrplpPml6XoqownKVxuXHRcdFx0KTsgLy8gbWFrZSB0aGlzICcuLi4gdG8gJyArIGxvZ1BhZ2VOYW1lID9cblx0XHRcdHBhZ2UubG9hZCgocGFnZW9iaikgPT4ge1xuXHRcdFx0XHQvLyBhZGQgYmx1cmIgaWYgbG9nIHBhZ2UgZG9lc24ndCBleGlzdCBvciBpcyBibGFua1xuXHRcdFx0XHRsZXQgdGV4dCA9IHBhZ2VvYmouZ2V0UGFnZVRleHQoKSB8fCB0aGlzLmluaXRpYWxUZXh0O1xuXHRcdFx0XHQvLyBjcmVhdGUgbW9udGhseSBoZWFkZXIgaWYgaXQgZG9lc24ndCBleGlzdCBhbHJlYWR5XG5cdFx0XHRcdGNvbnN0IGRhdGUgPSBuZXcgTW9yZWJpdHMuZGF0ZShwYWdlb2JqLmdldExvYWRUaW1lKCkpO1xuXHRcdFx0XHRpZiAoIWRhdGUubW9udGhIZWFkZXJSZWdleCgpLmV4ZWModGV4dCkpIHtcblx0XHRcdFx0XHR0ZXh0ICs9IGBcXG5cXG4ke2RhdGUubW9udGhIZWFkZXIodGhpcy5oZWFkZXJMZXZlbCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRwYWdlb2JqLnNldFBhZ2VUZXh0KGAke3RleHR9XFxuJHtsb2dUZXh0fWApO1xuXHRcdFx0XHRwYWdlb2JqLnNldEVkaXRTdW1tYXJ5KHN1bW1hcnlUZXh0KTtcblx0XHRcdFx0cGFnZW9iai5zZXRDaGFuZ2VUYWdzKHRoaXMuY2hhbmdlVGFncyk7XG5cdFx0XHRcdHBhZ2VvYmouc2V0Q3JlYXRlT3B0aW9uKCdyZWNyZWF0ZScpO1xuXHRcdFx0XHRwYWdlb2JqLnNhdmUoZGVmLnJlc29sdmUsIGRlZi5yZWplY3QpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gZGVmO1xuXHRcdH07XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMuc3RhdHVzICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIENyZWF0ZSBhbmQgc2hvdyBzdGF0dXMgbWVzc2FnZXMgb2YgdmFyeWluZyB1cmdlbmN5LlxuXHQgKiB7QGxpbmsgTW9yZWJpdHMuc3RhdHVzLmluaXR8TW9yZWJpdHMuc3RhdHVzLmluaXQoKX0gbXVzdCBiZSBjYWxsZWQgYmVmb3JlXG5cdCAqIGFueSBzdGF0dXMgb2JqZWN0IGlzIGNyZWF0ZWQsIG90aGVyd2lzZSB0aG9zZSBzdGF0dXNlcyB3b24ndCBiZSB2aXNpYmxlLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBiZWZvcmUgdGhlIHRoZSBjb2xvbiBgOmAuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0IC0gVGV4dCBhZnRlciB0aGUgY29sb24gYDpgLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGU9c3RhdHVzXSAtIERldGVybWluZSB0aGUgZm9udCBjb2xvciBvZiB0aGUgc3RhdHVzXG5cdCAqIGxpbmUsIGFsbG93YWJsZSB2YWx1ZXMgYXJlOiBgc3RhdHVzYCAoYmx1ZSksIGBpbmZvYCAoZ3JlZW4pLCBgd2FybmAgKHJlZCksXG5cdCAqIG9yIGBlcnJvcmAgKGJvbGQgcmVkKS5cblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cyA9IGZ1bmN0aW9uICh0ZXh0LCBzdGF0LCB0eXBlKSB7XG5cdFx0dGhpcy50ZXh0UmF3ID0gdGV4dDtcblx0XHR0aGlzLnRleHQgPSBNb3JlYml0cy5jcmVhdGVIdG1sKHRleHQpO1xuXHRcdHRoaXMudHlwZSA9IHR5cGUgfHwgJ3N0YXR1cyc7XG5cdFx0dGhpcy5nZW5lcmF0ZSgpO1xuXHRcdGlmIChzdGF0KSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0LCB0eXBlKTtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBTcGVjaWZ5IGFuIGFyZWEgZm9yIHN0YXR1cyBtZXNzYWdlIGVsZW1lbnRzIHRvIGJlIGFkZGVkIHRvLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJvb3QgLSBVc3VhbGx5IGEgZGl2IGVsZW1lbnQuXG5cdCAqIEB0aHJvd3MgSWYgYHJvb3RgIGlzIG5vdCBhbiBgSFRNTEVsZW1lbnRgLlxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLmluaXQgPSAocm9vdCkgPT4ge1xuXHRcdGlmICghKHJvb3QgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignb2JqZWN0IG5vdCBhbiBpbnN0YW5jZSBvZiBFbGVtZW50Jyk7XG5cdFx0fVxuXHRcdHdoaWxlIChyb290Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdFx0cm9vdC5yZW1vdmVDaGlsZChyb290LmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRNb3JlYml0cy5zdGF0dXMucm9vdCA9IHJvb3Q7XG5cdFx0TW9yZWJpdHMuc3RhdHVzLmVycm9yRXZlbnQgPSBudWxsO1xuXHR9O1xuXHRNb3JlYml0cy5zdGF0dXMucm9vdCA9IG51bGw7XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgLSBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGVycm9yLlxuXHQgKiBAdGhyb3dzIFdoZW4gYGhhbmRsZXJgIGlzIG5vdCBhIGZ1bmN0aW9uLlxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLm9uRXJyb3IgPSAoaGFuZGxlcikgPT4ge1xuXHRcdGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0TW9yZWJpdHMuc3RhdHVzLmVycm9yRXZlbnQgPSBoYW5kbGVyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdNb3JlYml0cy5zdGF0dXMub25FcnJvcjogaGFuZGxlciBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblx0fTtcblx0TW9yZWJpdHMuc3RhdHVzLnByb3RvdHlwZSA9IHtcblx0XHRzdGF0OiBudWxsLFxuXHRcdHN0YXRSYXc6IG51bGwsXG5cdFx0dGV4dDogbnVsbCxcblx0XHR0ZXh0UmF3OiBudWxsLFxuXHRcdHR5cGU6ICdzdGF0dXMnLFxuXHRcdHRhcmdldDogbnVsbCxcblx0XHRub2RlOiBudWxsLFxuXHRcdGxpbmtlZDogZmFsc2UsXG5cdFx0LyoqIEFkZCB0aGUgc3RhdHVzIGVsZW1lbnQgbm9kZSB0byB0aGUgRE9NLiAqL1xuXHRcdGxpbmsoKSB7XG5cdFx0XHRpZiAoIXRoaXMubGlua2VkICYmIE1vcmViaXRzLnN0YXR1cy5yb290KSB7XG5cdFx0XHRcdE1vcmViaXRzLnN0YXR1cy5yb290LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG5cdFx0XHRcdHRoaXMubGlua2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKiBSZW1vdmUgdGhlIHN0YXR1cyBlbGVtZW50IG5vZGUgZnJvbSB0aGUgRE9NLiAqL1xuXHRcdHVubGluaygpIHtcblx0XHRcdGlmICh0aGlzLmxpbmtlZCkge1xuXHRcdFx0XHRNb3JlYml0cy5zdGF0dXMucm9vdC5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuXHRcdFx0XHR0aGlzLmxpbmtlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogVXBkYXRlIHRoZSBzdGF0dXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gUGFydCBvZiBzdGF0dXMgbWVzc2FnZSBhZnRlciBjb2xvbi5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtICdzdGF0dXMnIChibHVlKSwgJ2luZm8nIChncmVlbiksICd3YXJuJ1xuXHRcdCAqIChyZWQpLCBvciAnZXJyb3InIChib2xkIHJlZCkuXG5cdFx0ICovXG5cdFx0dXBkYXRlKHN0YXR1cywgdHlwZSkge1xuXHRcdFx0dGhpcy5zdGF0UmF3ID0gc3RhdHVzO1xuXHRcdFx0dGhpcy5zdGF0ID0gTW9yZWJpdHMuY3JlYXRlSHRtbChzdGF0dXMpO1xuXHRcdFx0aWYgKHR5cGUpIHtcblx0XHRcdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHRcdFx0aWYgKHR5cGUgPT09ICdlcnJvcicpIHtcblx0XHRcdFx0XHQvLyBoYWNrIHRvIGZvcmNlIHRoZSBwYWdlIG5vdCB0byByZWxvYWQgd2hlbiBhbiBlcnJvciBpcyBvdXRwdXQgLSBzZWUgYWxzbyBNb3JlYml0cy5zdGF0dXMoKSBhYm92ZVxuXHRcdFx0XHRcdE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCA9IDEwMDA7XG5cdFx0XHRcdFx0Ly8gY2FsbCBlcnJvciBjYWxsYmFja1xuXHRcdFx0XHRcdGlmIChNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCkge1xuXHRcdFx0XHRcdFx0TW9yZWJpdHMuc3RhdHVzLmVycm9yRXZlbnQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gYWxzbyBsb2cgZXJyb3IgbWVzc2FnZXMgaW4gdGhlIGJyb3dzZXIgY29uc29sZVxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYFtNb3JlYml0c10gJHt0aGlzLnRleHRSYXd9OiAke3RoaXMuc3RhdFJhd31gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5yZW5kZXIoKTtcblx0XHR9LFxuXHRcdC8qKiBQcm9kdWNlIHRoZSBodG1sIGZvciBmaXJzdCBwYXJ0IG9mIHRoZSBzdGF0dXMgbWVzc2FnZS4gKi9cblx0XHRnZW5lcmF0ZSgpIHtcblx0XHRcdHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0dGhpcy5ub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSkuYXBwZW5kQ2hpbGQodGhpcy50ZXh0KTtcblx0XHRcdHRoaXMubm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCc6ICcpKTtcblx0XHRcdHRoaXMudGFyZ2V0ID0gdGhpcy5ub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XG5cdFx0XHR0aGlzLnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpOyAvLyBkdW1teSBub2RlXG5cdFx0fSxcblxuXHRcdC8qKiBDb21wbGV0ZSB0aGUgaHRtbCwgZm9yIHRoZSBzZWNvbmQgcGFydCBvZiB0aGUgc3RhdHVzIG1lc3NhZ2UuICovXG5cdFx0cmVuZGVyKCkge1xuXHRcdFx0dGhpcy5ub2RlLmNsYXNzTmFtZSA9IGBtb3JlYml0c19zdGF0dXNfJHt0aGlzLnR5cGV9YDtcblx0XHRcdHdoaWxlICh0aGlzLnRhcmdldC5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRcdFx0dGhpcy50YXJnZXQucmVtb3ZlQ2hpbGQodGhpcy50YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLnN0YXQpO1xuXHRcdFx0dGhpcy5saW5rKCk7XG5cdFx0fSxcblx0XHRzdGF0dXMoc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0dXMsICdzdGF0dXMnKTtcblx0XHR9LFxuXHRcdGluZm8oc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0dXMsICdpbmZvJyk7XG5cdFx0fSxcblx0XHR3YXJuKHN0YXR1cykge1xuXHRcdFx0dGhpcy51cGRhdGUoc3RhdHVzLCAnd2FybicpO1xuXHRcdH0sXG5cdFx0ZXJyb3Ioc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0dXMsICdlcnJvcicpO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQmVmb3JlIGNvbG9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBBZnRlciBjb2xvblxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc3RhdHVzfSAtIGBzdGF0dXNgLXR5cGUgKGJsdWUpXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMuc3RhdHVzID0gKHRleHQsIHN0YXR1cykgPT4ge1xuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMuc3RhdHVzKHRleHQsIHN0YXR1cyk7XG5cdH07XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQmVmb3JlIGNvbG9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBBZnRlciBjb2xvblxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc3RhdHVzfSAtIGBpbmZvYC10eXBlIChncmVlbilcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5pbmZvID0gKHRleHQsIHN0YXR1cykgPT4ge1xuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMuc3RhdHVzKHRleHQsIHN0YXR1cywgJ2luZm8nKTtcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYHdhcm5gLXR5cGUgKHJlZClcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy53YXJuID0gKHRleHQsIHN0YXR1cykgPT4ge1xuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMuc3RhdHVzKHRleHQsIHN0YXR1cywgJ3dhcm4nKTtcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYGVycm9yYC10eXBlIChib2xkIHJlZClcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5lcnJvciA9ICh0ZXh0LCBzdGF0dXMpID0+IHtcblx0XHRyZXR1cm4gbmV3IE1vcmViaXRzLnN0YXR1cyh0ZXh0LCBzdGF0dXMsICdlcnJvcicpO1xuXHR9O1xuXHQvKipcblx0ICogRm9yIHRoZSBhY3Rpb24gY29tcGxldGUgbWVzc2FnZSBhdCB0aGUgZW5kLCBjcmVhdGUgYSBzdGF0dXMgbGluZSB3aXRob3V0XG5cdCAqIGEgY29sb24gc2VwYXJhdG9yLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMuYWN0aW9uQ29tcGxldGVkID0gKHRleHQpID0+IHtcblx0XHRjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0bm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiJykpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcblx0XHRub2RlLmNsYXNzTmFtZSA9ICdtb3JlYml0c19zdGF0dXNfaW5mbyBtb3JlYml0c19hY3Rpb25fY29tcGxldGUnO1xuXHRcdGlmIChNb3JlYml0cy5zdGF0dXMucm9vdCkge1xuXHRcdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QuYXBwZW5kQ2hpbGQobm9kZSk7XG5cdFx0fVxuXHR9O1xuXHQvKipcblx0ICogRGlzcGxheSB0aGUgdXNlcidzIHJhdGlvbmFsZSwgY29tbWVudHMsIGV0Yy4gQmFjayB0byB0aGVtIGFmdGVyIGEgZmFpbHVyZSxcblx0ICogc28gdGhhdCB0aGV5IG1heSByZS11c2UgaXQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbW1lbnRzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMucHJpbnRVc2VyVGV4dCA9IChjb21tZW50cywgbWVzc2FnZSkgPT4ge1xuXHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0cC5pbm5lckhUTUwgPSBtZXNzYWdlO1xuXHRcdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGRpdi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtdXNlcnRleHQnO1xuXHRcdGRpdi5zdHlsZS5tYXJnaW5Ub3AgPSAnMCc7XG5cdFx0ZGl2LnN0eWxlLndoaXRlU3BhY2UgPSAncHJlLXdyYXAnO1xuXHRcdGRpdi50ZXh0Q29udGVudCA9IGNvbW1lbnRzO1xuXHRcdHAuYXBwZW5kQ2hpbGQoZGl2KTtcblx0XHRNb3JlYml0cy5zdGF0dXMucm9vdC5hcHBlbmRDaGlsZChwKTtcblx0fTtcblx0LyoqXG5cdCAqIFNpbXBsZSBoZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGEgc2ltcGxlIG5vZGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVHlwZSBvZiBIVE1MIGVsZW1lbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IC0gVGV4dCBjb250ZW50LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2NvbG9yXSAtIEZvbnQgY29sb3IuXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLmh0bWxOb2RlID0gKHR5cGUsIGNvbnRlbnQsIGNvbG9yKSA9PiB7XG5cdFx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cdFx0aWYgKGNvbG9yKSB7XG5cdFx0XHRub2RlLnN0eWxlLmNvbG9yID0gY29sb3I7XG5cdFx0fVxuXHRcdG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCkpO1xuXHRcdHJldHVybiBub2RlO1xuXHR9O1xuXHQvKipcblx0ICogQWRkIHNoaWZ0LWNsaWNrIHN1cHBvcnQgZm9yIGNoZWNrYm94ZXMuIFRoZSB3aWtpYml0cyB2ZXJzaW9uXG5cdCAqIChgd2luZG93LmFkZENoZWNrYm94Q2xpY2tIYW5kbGVyc2ApIGhhcyBzb21lIHJlc3RyaWN0aW9ucywgYW5kIGRvZXNuJ3Qgd29ya1xuXHQgKiB3aXRoIGNoZWNrYm94ZXMgaW5zaWRlIGEgc29ydGFibGUgdGFibGUsIHNvIGxldCdzIGJ1aWxkIG91ciBvd24uXG5cdCAqXG5cdCAqIEBwYXJhbSBqUXVlcnlTZWxlY3RvclxuXHQgKiBAcGFyYW0galF1ZXJ5Q29udGV4dFxuXHQgKi9cblx0TW9yZWJpdHMuY2hlY2tib3hTaGlmdENsaWNrU3VwcG9ydCA9IChqUXVlcnlTZWxlY3RvciwgalF1ZXJ5Q29udGV4dCkgPT4ge1xuXHRcdGxldCBsYXN0Q2hlY2tib3ggPSBudWxsO1xuXHRcdGNvbnN0IGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihldmVudCkge1xuXHRcdFx0Y29uc3QgdGhpc0NiID0gdGhpcztcblx0XHRcdGlmIChldmVudC5zaGlmdEtleSAmJiBsYXN0Q2hlY2tib3ggIT09IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgY2JzID0gJChqUXVlcnlTZWxlY3RvciwgalF1ZXJ5Q29udGV4dCk7IC8vIGNhbid0IGNhY2hlIHRoZW0sIG9idmlvdXNseSwgaWYgd2Ugd2FudCB0byBzdXBwb3J0IHJlc29ydGluZ1xuXHRcdFx0XHRsZXQgaW5kZXggPSAtMTtcblx0XHRcdFx0bGV0IGxhc3RJbmRleCA9IC0xO1xuXHRcdFx0XHRsZXQgaTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNicy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChjYnNbaV0gPT09IHRoaXNDYikge1xuXHRcdFx0XHRcdFx0aW5kZXggPSBpO1xuXHRcdFx0XHRcdFx0aWYgKGxhc3RJbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2JzW2ldID09PSBsYXN0Q2hlY2tib3gpIHtcblx0XHRcdFx0XHRcdGxhc3RJbmRleCA9IGk7XG5cdFx0XHRcdFx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGluZGV4ID4gLTEgJiYgbGFzdEluZGV4ID4gLTEpIHtcblx0XHRcdFx0XHQvLyBpbnNwaXJlZCBieSB3aWtpYml0c1xuXHRcdFx0XHRcdGNvbnN0IGVuZFN0YXRlID0gdGhpc0NiLmNoZWNrZWQ7XG5cdFx0XHRcdFx0bGV0IHN0YXJ0O1xuXHRcdFx0XHRcdGxldCBmaW5pc2g7XG5cdFx0XHRcdFx0aWYgKGluZGV4IDwgbGFzdEluZGV4KSB7XG5cdFx0XHRcdFx0XHRzdGFydCA9IGluZGV4ICsgMTtcblx0XHRcdFx0XHRcdGZpbmlzaCA9IGxhc3RJbmRleDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3RhcnQgPSBsYXN0SW5kZXg7XG5cdFx0XHRcdFx0XHRmaW5pc2ggPSBpbmRleCAtIDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvciAoaSA9IHN0YXJ0OyBpIDw9IGZpbmlzaDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRpZiAoY2JzW2ldLmNoZWNrZWQgIT09IGVuZFN0YXRlKSB7XG5cdFx0XHRcdFx0XHRcdGNic1tpXS5jbGljaygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bGFzdENoZWNrYm94ID0gdGhpc0NiO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fTtcblx0XHQkKGpRdWVyeVNlbGVjdG9yLCBqUXVlcnlDb250ZXh0KS5vbignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLmJhdGNoT3BlcmF0aW9uICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIEl0ZXJhdGVzIG92ZXIgYSBncm91cCBvZiBwYWdlcyAob3IgYXJiaXRyYXJ5IG9iamVjdHMpIGFuZCBleGVjdXRlcyBhIHdvcmtlciBmdW5jdGlvblxuXHQgKiBmb3IgZWFjaC5cblx0ICpcblx0ICogYHNldFBhZ2VMaXN0KHBhZ2VMaXN0KWA6IFNldHMgdGhlIGxpc3Qgb2YgcGFnZXMgdG8gd29yayBvbi4gSXQgc2hvdWxkIGJlIGFuXG5cdCAqIGFycmF5IG9mIHBhZ2UgbmFtZXMgc3RyaW5ncy5cblx0ICpcblx0ICogYHNldE9wdGlvbihvcHRpb25OYW1lLCBvcHRpb25WYWx1ZSlgOiBTZXRzIGEga25vd24gb3B0aW9uOlxuXHQgKiAtIGBjaHVua1NpemVgIChpbnRlZ2VyKTogVGhlIHNpemUgb2YgY2h1bmtzIHRvIGJyZWFrIHRoZSBhcnJheSBpbnRvIChkZWZhdWx0XG5cdCAqIDUwKS4gU2V0dGluZyB0aGlzIHRvIGEgc21hbGwgdmFsdWUgKDw1KSBjYW4gY2F1c2UgcHJvYmxlbXMuXG5cdCAqIC0gYHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzYCAoYm9vbGVhbik6IEtlZXAgZWFjaCBwYWdlJ3Mgc3RhdHVzIGVsZW1lbnRcblx0ICogdmlzaWJsZSB3aGVuIHdvcmtlciBpcyBjb21wbGV0ZT8gU2VlIG5vdGUgYmVsb3cuXG5cdCAqXG5cdCAqIGBydW4od29ya2VyLCBwb3N0RmluaXNoKWA6IFJ1bnMgdGhlIGNhbGxiYWNrIGB3b3JrZXJgIGZvciBlYWNoIHBhZ2UgaW4gdGhlXG5cdCAqIGxpc3QuICBUaGUgY2FsbGJhY2sgbXVzdCBjYWxsIGB3b3JrZXJTdWNjZXNzYCB3aGVuIHN1Y2NlZWRpbmcsIG9yXG5cdCAqIGB3b3JrZXJGYWlsdXJlYCB3aGVuIGZhaWxpbmcuICBJZiB1c2luZyB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IG9yXG5cdCAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V9LCB0aGlzIGlzIGVhc2lseSBkb25lIGJ5IHBhc3NpbmcgdGhlc2UgdHdvXG5cdCAqIGZ1bmN0aW9ucyBhcyBwYXJhbWV0ZXJzIHRvIHRoZSBtZXRob2RzIG9uIHRob3NlIG9iamVjdHM6IGZvciBpbnN0YW5jZSxcblx0ICogYHBhZ2Uuc2F2ZShiYXRjaE9wLndvcmtlclN1Y2Nlc3MsIGJhdGNoT3Aud29ya2VyRmFpbHVyZSlgLiAgTWFrZSBzdXJlIHRoZVxuXHQgKiBtZXRob2RzIGFyZSBjYWxsZWQgZGlyZWN0bHkgaWYgc3BlY2lhbCBzdWNjZXNzL2ZhaWx1cmUgY2FzZXMgYXJpc2UuICBJZiB5b3Vcblx0ICogb21pdCB0byBjYWxsIHRoZXNlIG1ldGhvZHMsIHRoZSBiYXRjaCBvcGVyYXRpb24gd2lsbCBzdGFsbCBhZnRlciB0aGUgZmlyc3Rcblx0ICogY2h1bmshICBBbHNvIGVuc3VyZSB0aGF0IGVpdGhlciB3b3JrZXJTdWNjZXNzIG9yIHdvcmtlckZhaWx1cmUgaXMgY2FsbGVkIG5vXG5cdCAqIG1vcmUgdGhhbiBvbmNlLiAgVGhlIHNlY29uZCBjYWxsYmFjayBgcG9zdEZpbmlzaGAgaXMgZXhlY3V0ZWQgd2hlbiB0aGVcblx0ICogZW50aXJlIGJhdGNoIGhhcyBiZWVuIHByb2Nlc3NlZC5cblx0ICpcblx0ICogSWYgdXNpbmcgYHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzYCwgeW91IHNob3VsZCB0cnkgdG8gZW5zdXJlIHRoYXQgdGhlXG5cdCAqIGB3b3JrZXJTdWNjZXNzYCBjYWxsYmFjayBoYXMgYWNjZXNzIHRvIHRoZSBwYWdlIHRpdGxlLiAgVGhpcyBpcyBubyBwcm9ibGVtIGZvclxuXHQgKiB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfSBvYmplY3RzLiAgQnV0IHdoZW4gdXNpbmcgdGhlIEFQSSwgcGxlYXNlIHNldCB0aGVcblx0ICogfHBhZ2VOYW1lfCBwcm9wZXJ0eSBvbiB0aGUge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSBvYmplY3QuXG5cdCAqXG5cdCAqIFRoZXJlIGFyZSBzYW1wbGUgYmF0Y2hPcGVyYXRpb24gaW1wbGVtZW50YXRpb25zIHVzaW5nIE1vcmViaXRzLndpa2kucGFnZSBpblxuXHQgKiB0d2lua2xlYmF0Y2hkZWxldGUuanMsIHR3aW5rbGViYXRjaHVuZGVsZXRlLmpzLCBhbmQgdHdpbmtsZWJhdGNocHJvdGVjdC5qcy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2N1cnJlbnRBY3Rpb25dXG5cdCAqL1xuXHRNb3JlYml0cy5iYXRjaE9wZXJhdGlvbiA9IGZ1bmN0aW9uIChjdXJyZW50QWN0aW9uKSB7XG5cdFx0Y29uc3QgY3R4ID0ge1xuXHRcdFx0Ly8gYmFja2luZyBmaWVsZHMgZm9yIHB1YmxpYyBwcm9wZXJ0aWVzXG5cdFx0XHRwYWdlTGlzdDogbnVsbCxcblx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0Y2h1bmtTaXplOiA1MCxcblx0XHRcdFx0cHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXM6IGZhbHNlLFxuXHRcdFx0fSxcblx0XHRcdC8vIGludGVybmFsIGNvdW50ZXJzLCBldGMuXG5cdFx0XHRzdGF0dXNFbGVtZW50OiBuZXcgTW9yZWJpdHMuc3RhdHVzKGN1cnJlbnRBY3Rpb24gfHwgd2luZG93LndnVUxTKCfmiafooYzmibnph4/mk43kvZwnLCAn5Z+36KGM5om55qyh5pON5L2cJykpLFxuXHRcdFx0d29ya2VyOiBudWxsLFxuXHRcdFx0Ly8gZnVuY3Rpb24gdGhhdCBleGVjdXRlcyBmb3IgZWFjaCBpdGVtIGluIHBhZ2VMaXN0XG5cdFx0XHRwb3N0RmluaXNoOiBudWxsLFxuXHRcdFx0Ly8gZnVuY3Rpb24gdGhhdCBleGVjdXRlcyB3aGVuIHRoZSB3aG9sZSBiYXRjaCBoYXMgYmVlbiBwcm9jZXNzZWRcblx0XHRcdGNvdW50U3RhcnRlZDogMCxcblx0XHRcdGNvdW50RmluaXNoZWQ6IDAsXG5cdFx0XHRjb3VudEZpbmlzaGVkU3VjY2VzczogMCxcblx0XHRcdGN1cnJlbnRDaHVua0luZGV4OiAtMSxcblx0XHRcdHBhZ2VDaHVua3M6IFtdLFxuXHRcdFx0cnVubmluZzogZmFsc2UsXG5cdFx0fTtcblx0XHQvLyBzaG91bGRuJ3QgYmUgbmVlZGVkIGJ5IGV4dGVybmFsIHVzZXJzLCBidXQgcHJvdmlkZWQgYW55d2F5IGZvciBtYXhpbXVtIGZsZXhpYmlsaXR5XG5cdFx0dGhpcy5nZXRTdGF0dXNFbGVtZW50ID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5zdGF0dXNFbGVtZW50O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgbGlzdCBvZiBwYWdlcyB0byB3b3JrIG9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gcGFnZUxpc3QgLSBBcnJheSBvZiBvYmplY3RzIG92ZXIgd2hpY2ggeW91IHdpc2ggdG8gZXhlY3V0ZSB0aGUgd29ya2VyIGZ1bmN0aW9uXG5cdFx0ICogVGhpcyBpcyB1c3VhbGx5IHRoZSBsaXN0IG9mIHBhZ2UgbmFtZXMgKHN0cmluZ3MpLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0UGFnZUxpc3QgPSAocGFnZUxpc3QpID0+IHtcblx0XHRcdGN0eC5wYWdlTGlzdCA9IHBhZ2VMaXN0O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0cyBhIGtub3duIG9wdGlvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25OYW1lIC0gTmFtZSBvZiB0aGUgb3B0aW9uOlxuXHRcdCAqIC0gY2h1bmtTaXplIChpbnRlZ2VyKTogVGhlIHNpemUgb2YgY2h1bmtzIHRvIGJyZWFrIHRoZSBhcnJheSBpbnRvXG5cdFx0ICogKGRlZmF1bHQgNTApLiBTZXR0aW5nIHRoaXMgdG8gYSBzbWFsbCB2YWx1ZSAoPDUpIGNhbiBjYXVzZSBwcm9ibGVtcy5cblx0XHQgKiAtIHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzIChib29sZWFuKTogS2VlcCBlYWNoIHBhZ2UncyBzdGF0dXNcblx0XHQgKiBlbGVtZW50IHZpc2libGUgd2hlbiB3b3JrZXIgaXMgY29tcGxldGU/XG5cdFx0ICogQHBhcmFtIHtudW1iZXJ8Ym9vbGVhbn0gb3B0aW9uVmFsdWUgLSBWYWx1ZSB0byB3aGljaCB0aGUgb3B0aW9uIGlzXG5cdFx0ICogdG8gYmUgc2V0LiBTaG91bGQgYmUgYW4gaW50ZWdlciBmb3IgY2h1bmtTaXplIGFuZCBhIGJvb2xlYW4gZm9yXG5cdFx0ICogcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRPcHRpb24gPSAob3B0aW9uTmFtZSwgb3B0aW9uVmFsdWUpID0+IHtcblx0XHRcdGN0eC5vcHRpb25zW29wdGlvbk5hbWVdID0gb3B0aW9uVmFsdWU7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBSdW5zIHRoZSBmaXJzdCBjYWxsYmFjayBmb3IgZWFjaCBwYWdlIGluIHRoZSBsaXN0LlxuXHRcdCAqIFRoZSBjYWxsYmFjayBtdXN0IGNhbGwgd29ya2VyU3VjY2VzcyB3aGVuIHN1Y2NlZWRpbmcsIG9yIHdvcmtlckZhaWx1cmUgd2hlbiBmYWlsaW5nLlxuXHRcdCAqIFJ1bnMgdGhlIG9wdGlvbmFsIHNlY29uZCBjYWxsYmFjayB3aGVuIHRoZSB3aG9sZSBiYXRjaCBoYXMgYmVlbiBwcm9jZXNzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSB3b3JrZXJcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcG9zdEZpbmlzaF1cblx0XHQgKi9cblx0XHR0aGlzLnJ1biA9ICh3b3JrZXIsIHBvc3RGaW5pc2gpID0+IHtcblx0XHRcdGlmIChjdHgucnVubmluZykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aJuemHj+aTjeS9nOW3suWcqOi/kOihjCcsICfmibnmrKHmk43kvZzlt7LlnKjln7fooYwnKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdGN0eC53b3JrZXIgPSB3b3JrZXI7XG5cdFx0XHRjdHgucG9zdEZpbmlzaCA9IHBvc3RGaW5pc2g7XG5cdFx0XHRjdHguY291bnRTdGFydGVkID0gMDtcblx0XHRcdGN0eC5jb3VudEZpbmlzaGVkID0gMDtcblx0XHRcdGN0eC5jb3VudEZpbmlzaGVkU3VjY2VzcyA9IDA7XG5cdFx0XHRjdHguY3VycmVudENodW5rSW5kZXggPSAtMTtcblx0XHRcdGN0eC5wYWdlQ2h1bmtzID0gW107XG5cdFx0XHRjb25zdCB0b3RhbCA9IGN0eC5wYWdlTGlzdC5sZW5ndGg7XG5cdFx0XHRpZiAoIXRvdGFsKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCfmsqHmnInmjIflrprpobXpnaInLCAn5rKS5pyJ5oyH5a6a6aCB6Z2iJykpO1xuXHRcdFx0XHRjdHgucnVubmluZyA9IGZhbHNlO1xuXHRcdFx0XHRpZiAoY3R4LnBvc3RGaW5pc2gpIHtcblx0XHRcdFx0XHRjdHgucG9zdEZpbmlzaCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGNodW5rIHBhZ2UgbGlzdCBpbnRvIG1vcmUgbWFuYWdlYWJsZSB1bml0c1xuXHRcdFx0Y3R4LnBhZ2VDaHVua3MgPSBNb3JlYml0cy5hcnJheS5jaHVuayhjdHgucGFnZUxpc3QsIGN0eC5vcHRpb25zLmNodW5rU2l6ZSk7XG5cdFx0XHQvLyBzdGFydCB0aGUgcHJvY2Vzc1xuXHRcdFx0TW9yZWJpdHMud2lraS5hZGRDaGVja3BvaW50KCk7XG5cdFx0XHRjdHguc3RhdHVzRWxlbWVudC5zdGF0dXMoJzAlJyk7XG5cdFx0XHRmblN0YXJ0TmV3Q2h1bmsoKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFRvIGJlIGNhbGxlZCBieSB3b3JrZXIgYmVmb3JlIGl0IHRlcm1pbmF0ZXMgc3VjY2Vzc2Z1bGx5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsoTW9yZWJpdHMud2lraS5wYWdlfE1vcmViaXRzLndpa2kuYXBpfHN0cmluZyl9IGFyZyAtXG5cdFx0ICogVGhpcyBzaG91bGQgYmUgdGhlIGBNb3JlYml0cy53aWtpLnBhZ2VgIG9yIGBNb3JlYml0cy53aWtpLmFwaWAgb2JqZWN0IHVzZWQgYnkgd29ya2VyXG5cdFx0ICogKGZvciB0aGUgYWRqdXN0bWVudCBvZiBzdGF0dXMgbGluZXMgZW1pdHRlZCBieSB0aGVtKS5cblx0XHQgKiBJZiBubyBNb3JlYml0cy53aWtpLiogb2JqZWN0IGlzIHVzZWQgKGUuZy4geW91J3JlIHVzaW5nIGBtdy5BcGkoKWAgb3Igc29tZXRoaW5nIGVsc2UpLCBhbmRcblx0XHQgKiBgcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXNgIG9wdGlvbiBpcyBvbiwgZ2l2ZSB0aGUgcGFnZSBuYW1lIChzdHJpbmcpIGFzIGFyZ3VtZW50LlxuXHRcdCAqL1xuXHRcdHRoaXMud29ya2VyU3VjY2VzcyA9IChhcmcpID0+IHtcblx0XHRcdGlmIChhcmcgaW5zdGFuY2VvZiBNb3JlYml0cy53aWtpLmFwaSB8fCBhcmcgaW5zdGFuY2VvZiBNb3JlYml0cy53aWtpLnBhZ2UpIHtcblx0XHRcdFx0Ly8gdXBkYXRlIG9yIHJlbW92ZSBzdGF0dXMgbGluZVxuXHRcdFx0XHRjb25zdCBzdGF0ZWxlbSA9IGFyZy5nZXRTdGF0dXNFbGVtZW50KCk7XG5cdFx0XHRcdGlmIChjdHgub3B0aW9ucy5wcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcykge1xuXHRcdFx0XHRcdGlmIChhcmcuZ2V0UGFnZU5hbWUgfHwgYXJnLnBhZ2VOYW1lIHx8IChhcmcucXVlcnkgJiYgYXJnLnF1ZXJ5LnRpdGxlKSkge1xuXHRcdFx0XHRcdFx0Ly8gd2Uga25vdyB0aGUgcGFnZSB0aXRsZSAtIGRpc3BsYXkgYSByZWxldmFudCBtZXNzYWdlXG5cdFx0XHRcdFx0XHRjb25zdCBwYWdlTmFtZSA9IGFyZy5nZXRQYWdlTmFtZSA/IGFyZy5nZXRQYWdlTmFtZSgpIDogYXJnLnBhZ2VOYW1lIHx8IGFyZy5xdWVyeS50aXRsZTtcblx0XHRcdFx0XHRcdHN0YXRlbGVtLmluZm8oYOWujOaIkO+8iFtbJHtwYWdlTmFtZX1dXe+8iWApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyB3ZSBkb24ndCBrbm93IHRoZSBwYWdlIHRpdGxlIC0ganVzdCBkaXNwbGF5IGEgZ2VuZXJpYyBtZXNzYWdlXG5cdFx0XHRcdFx0XHRzdGF0ZWxlbS5pbmZvKCflrozmiJAnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIHRoZSBzdGF0dXMgbGluZSBhdXRvbWF0aWNhbGx5IHByb2R1Y2VkIGJ5IE1vcmViaXRzLndpa2kuKlxuXHRcdFx0XHRcdHN0YXRlbGVtLnVubGluaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnICYmIGN0eC5vcHRpb25zLnByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzKSB7XG5cdFx0XHRcdG5ldyBNb3JlYml0cy5zdGF0dXMoYXJnLCBg5a6M5oiQ77yIW1ske2FyZ31dXe+8iWApO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmNvdW50RmluaXNoZWRTdWNjZXNzKys7XG5cdFx0XHRmbkRvbmVPbmUoKTtcblx0XHR9O1xuXHRcdHRoaXMud29ya2VyRmFpbHVyZSA9ICgpID0+IHtcblx0XHRcdGZuRG9uZU9uZSgpO1xuXHRcdH07XG5cdFx0Ly8gcHJpdmF0ZSBmdW5jdGlvbnNcblx0XHRjb25zdCB0aGlzUHJveHkgPSB0aGlzO1xuXHRcdGNvbnN0IGZuU3RhcnROZXdDaHVuayA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGNodW5rID0gY3R4LnBhZ2VDaHVua3NbKytjdHguY3VycmVudENodW5rSW5kZXhdO1xuXHRcdFx0aWYgKCFjaHVuaykge1xuXHRcdFx0XHRyZXR1cm47IC8vIGRvbmUhIHlheVxuXHRcdFx0fVxuXHRcdFx0Ly8gc3RhcnQgd29ya2VycyBmb3IgdGhlIGN1cnJlbnQgY2h1bmtcblx0XHRcdGN0eC5jb3VudFN0YXJ0ZWQgKz0gY2h1bmsubGVuZ3RoO1xuXHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIGNodW5rKSB7XG5cdFx0XHRcdGN0eC53b3JrZXIocGFnZSwgdGhpc1Byb3h5KTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IGZuRG9uZU9uZSA9ICgpID0+IHtcblx0XHRcdGN0eC5jb3VudEZpbmlzaGVkKys7XG5cdFx0XHQvLyB1cGRhdGUgb3ZlcmFsbCBzdGF0dXMgbGluZVxuXHRcdFx0Y29uc3QgdG90YWwgPSBjdHgucGFnZUxpc3QubGVuZ3RoO1xuXHRcdFx0aWYgKGN0eC5jb3VudEZpbmlzaGVkIDwgdG90YWwpIHtcblx0XHRcdFx0Y29uc3QgcHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKCgxMDAgKiBjdHguY291bnRGaW5pc2hlZCkgLyB0b3RhbCk7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LnN0YXR1cyhgJHtwcm9ncmVzc30lYCk7XG5cdFx0XHRcdC8vIHN0YXJ0IGEgbmV3IGNodW5rIGlmIHdlJ3JlIGNsb3NlIGVub3VnaCB0byB0aGUgZW5kIG9mIHRoZSBwcmV2aW91cyBjaHVuaywgYW5kXG5cdFx0XHRcdC8vIHdlIGhhdmVuJ3QgYWxyZWFkeSBzdGFydGVkIHRoZSBuZXh0IG9uZVxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0Y3R4LmNvdW50RmluaXNoZWQgPj0gY3R4LmNvdW50U3RhcnRlZCAtIE1hdGgubWF4KGN0eC5vcHRpb25zLmNodW5rU2l6ZSAvIDEwLCAyKSAmJlxuXHRcdFx0XHRcdE1hdGguZmxvb3IoY3R4LmNvdW50RmluaXNoZWQgLyBjdHgub3B0aW9ucy5jaHVua1NpemUpID4gY3R4LmN1cnJlbnRDaHVua0luZGV4XG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGZuU3RhcnROZXdDaHVuaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGN0eC5jb3VudEZpbmlzaGVkID09PSB0b3RhbCkge1xuXHRcdFx0XHRjb25zdCBzdGF0dXNTdHJpbmcgPSBg5a6M5oiQ77yIJHtjdHguY291bnRGaW5pc2hlZFN1Y2Nlc3N9LyR7Y3R4LmNvdW50RmluaXNoZWR95pON5L2c5oiQ5Yqf5a6M5oiQ77yJYDtcblx0XHRcdFx0aWYgKGN0eC5jb3VudEZpbmlzaGVkU3VjY2VzcyA8IGN0eC5jb3VudEZpbmlzaGVkKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQud2FybihzdGF0dXNTdHJpbmcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8oc3RhdHVzU3RyaW5nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY3R4LnBvc3RGaW5pc2gpIHtcblx0XHRcdFx0XHRjdHgucG9zdEZpbmlzaCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdE1vcmViaXRzLndpa2kucmVtb3ZlQ2hlY2twb2ludCgpO1xuXHRcdFx0XHRjdHgucnVubmluZyA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gY3R4LmNvdW50RmluaXNoZWQgPiB0b3RhbFxuXHRcdFx0XHQvLyBqdXN0IGZvciBnaWdnbGVzISAod2VsbCwgc2VyaW91cyBkZWJ1Z2dpbmcsIGFjdHVhbGx5KVxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC53YXJuKFxuXHRcdFx0XHRcdGAke3dpbmRvdy53Z1VMUygn5a6M5oiQ77yI5aSa5omn6KGM5LqGJywgJ+WujOaIkO+8iOWkmuWft+ihjOS6hicpICsgKGN0eC5jb3VudEZpbmlzaGVkIC0gdG90YWwpfeasoe+8iWBcblx0XHRcdFx0KTtcblx0XHRcdFx0TW9yZWJpdHMud2lraS5yZW1vdmVDaGVja3BvaW50KCk7XG5cdFx0XHRcdGN0eC5ydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0LyoqXG5cdCAqIEEgc2ltcGxlIGRyYWdnYWJsZSB3aW5kb3csIG5vdyBhIHdyYXBwZXIgZm9yIGpRdWVyeSBVSSdzIGRpYWxvZyBmZWF0dXJlLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEByZXF1aXJlcyBqcXVlcnkudWkuZGlhbG9nXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuXHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0gVGhlIG1heGltdW0gYWxsb3dhYmxlIGhlaWdodCBmb3IgdGhlIGNvbnRlbnQgYXJlYS5cblx0ICovXG5cdE1vcmViaXRzLnNpbXBsZVdpbmRvdyA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7XG5cdFx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG5cdFx0Y29udGVudC5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLWNvbnRlbnQnO1xuXHRcdGNvbnRlbnQuaWQgPSBgbW9yZWJpdHMtZGlhbG9nLWNvbnRlbnQtJHtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxZTE1KX1gO1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coe1xuXHRcdFx0YXV0b09wZW46IGZhbHNlLFxuXHRcdFx0YnV0dG9uczoge1xuXHRcdFx0XHQnUGxhY2Vob2xkZXIgYnV0dG9uJzogKCkgPT4ge30sXG5cdFx0XHR9LFxuXHRcdFx0ZGlhbG9nQ2xhc3M6ICdtb3JlYml0cy1kaWFsb2cnLFxuXHRcdFx0d2lkdGg6IE1hdGgubWluKE51bWJlci5wYXJzZUludCh3aW5kb3cuaW5uZXJXaWR0aCwgMTApLCBOdW1iZXIucGFyc2VJbnQod2lkdGggfHwgODAwLCAxMCkpLFxuXHRcdFx0Ly8gZ2l2ZSBqUXVlcnkgdGhlIGdpdmVuIGhlaWdodCB2YWx1ZSAod2hpY2ggcmVwcmVzZW50cyB0aGUgYW50aWNpcGF0ZWQgaGVpZ2h0IG9mIHRoZSBkaWFsb2cpIGhlcmUsIHNvXG5cdFx0XHQvLyBpdCBjYW4gcG9zaXRpb24gdGhlIGRpYWxvZyBhcHByb3ByaWF0ZWx5XG5cdFx0XHQvLyB0aGUgMjAgcGl4ZWxzIHJlcHJlc2VudHMgYWRqdXN0bWVudCBmb3IgdGhlIGV4dHJhIGhlaWdodCBvZiB0aGUgalF1ZXJ5IGRpYWxvZyBcImNocm9tZVwiLCBjb21wYXJlZFxuXHRcdFx0Ly8gdG8gdGhhdCBvZiB0aGUgb2xkIFNpbXBsZVdpbmRvd1xuXHRcdFx0aGVpZ2h0OiBoZWlnaHQgKyAyMCxcblx0XHRcdGNsb3NlOiAoZXZlbnQpID0+IHtcblx0XHRcdFx0Ly8gZGlhbG9ncyBhbmQgdGhlaXIgY29udGVudCBjYW4gYmUgZGVzdHJveWVkIG9uY2UgY2xvc2VkXG5cdFx0XHRcdCQoZXZlbnQudGFyZ2V0KS5kaWFsb2coJ2Rlc3Ryb3knKS5yZW1vdmUoKTtcblx0XHRcdH0sXG5cdFx0XHRyZXNpemVTdGFydCgpIHtcblx0XHRcdFx0W3RoaXMuc2Nyb2xsYm94XSA9ICQodGhpcykuZmluZCgnLm1vcmViaXRzLXNjcm9sbGJveCcpO1xuXHRcdFx0XHRpZiAodGhpcy5zY3JvbGxib3gpIHtcblx0XHRcdFx0XHR0aGlzLnNjcm9sbGJveC5zdHlsZS5tYXhIZWlnaHQgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRyZXNpemVTdG9wKCkge1xuXHRcdFx0XHR0aGlzLnNjcm9sbGJveCA9IG51bGw7XG5cdFx0XHR9LFxuXHRcdFx0cmVzaXplKCkge1xuXHRcdFx0XHR0aGlzLnN0eWxlLm1heEhlaWdodCA9ICcnO1xuXHRcdFx0XHRpZiAodGhpcy5zY3JvbGxib3gpIHtcblx0XHRcdFx0XHR0aGlzLnNjcm9sbGJveC5zdHlsZS53aWR0aCA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdGNvbnN0ICR3aWRnZXQgPSAkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKTtcblx0XHQvLyBkZWxldGUgdGhlIHBsYWNlaG9sZGVyIGJ1dHRvbiAoaXQncyBvbmx5IHRoZXJlIHNvIHRoZSBidXR0b25wYW5lIGdldHMgY3JlYXRlZClcblx0XHQkd2lkZ2V0LmZpbmQoJ2J1dHRvbicpLmVhY2goKGtleSwgdmFsdWUpID0+IHtcblx0XHRcdHZhbHVlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodmFsdWUpO1xuXHRcdH0pO1xuXHRcdC8vIGFkZCBjb250YWluZXIgZm9yIHRoZSBidXR0b25zIHdlIGFkZCwgYW5kIHRoZSBmb290ZXIgbGlua3MgKGlmIGFueSlcblx0XHRjb25zdCBidXR0b25zcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGJ1dHRvbnNwYW4uY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZy1idXR0b25zJztcblx0XHRjb25zdCBsaW5rc3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0bGlua3NzcGFuLmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctZm9vdGVybGlua3MnO1xuXHRcdCR3aWRnZXQuZmluZCgnLnVpLWRpYWxvZy1idXR0b25wYW5lJykuYXBwZW5kKGJ1dHRvbnNwYW4sIGxpbmtzc3Bhbik7XG5cdFx0Ly8gcmVzaXplIHRoZSBzY3JvbGxib3ggd2l0aCB0aGUgZGlhbG9nLCBpZiBvbmUgaXMgcHJlc2VudFxuXHRcdCR3aWRnZXQucmVzaXphYmxlKCdvcHRpb24nLCAnYWxzb1Jlc2l6ZScsIGAjJHt0aGlzLmNvbnRlbnQuaWR9IC5tb3JlYml0cy1zY3JvbGxib3gsICMke3RoaXMuY29udGVudC5pZH1gKTtcblx0fTtcblx0TW9yZWJpdHMuc2ltcGxlV2luZG93LnByb3RvdHlwZSA9IHtcblx0XHRidXR0b25zOiBbXSxcblx0XHRoZWlnaHQ6IDYwMCxcblx0XHRoYXNGb290ZXJMaW5rczogZmFsc2UsXG5cdFx0c2NyaXB0TmFtZTogbnVsbCxcblx0XHQvKipcblx0XHQgKiBGb2N1c2VzIHRoZSBkaWFsb2cuIFRoaXMgbWlnaHQgd29yaywgb3Igb24gdGhlIGNvbnRyYXJ5LCBpdCBtaWdodCBub3QuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGZvY3VzKCkge1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnbW92ZVRvVG9wJyk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENsb3NlcyB0aGUgZGlhbG9nLiBJZiB0aGlzIGlzIHNldCBhcyBhbiBldmVudCBoYW5kbGVyLCBpdCB3aWxsIHN0b3AgdGhlIGV2ZW50XG5cdFx0ICogZnJvbSBkb2luZyBhbnl0aGluZyBtb3JlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtldmVudH0gW2V2ZW50XVxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0Y2xvc2UoZXZlbnQpIHtcblx0XHRcdGlmIChldmVudCkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnY2xvc2UnKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2hvd3MgdGhlIGRpYWxvZy4gQ2FsbGluZyBkaXNwbGF5KCkgb24gYSBkaWFsb2cgdGhhdCBoYXMgcHJldmlvdXNseSBiZWVuIGNsb3NlZFxuXHRcdCAqIG1pZ2h0IHdvcmssIGJ1dCBpdCBpcyBub3QgZ3VhcmFudGVlZC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0ZGlzcGxheSgpIHtcblx0XHRcdGlmICh0aGlzLnNjcmlwdE5hbWUpIHtcblx0XHRcdFx0Y29uc3QgJHdpZGdldCA9ICQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpO1xuXHRcdFx0XHQkd2lkZ2V0LmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctc2NyaXB0bmFtZScpLnJlbW92ZSgpO1xuXHRcdFx0XHRjb25zdCBzY3JpcHRuYW1lc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0c2NyaXB0bmFtZXNwYW4uY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZy1zY3JpcHRuYW1lJztcblx0XHRcdFx0c2NyaXB0bmFtZXNwYW4udGV4dENvbnRlbnQgPSBgJHt0aGlzLnNjcmlwdE5hbWV9IFxcdTAwQjcgYDsgLy8gVSswMEI3IE1JRERMRSBET1QgPSAmbWlkZG90O1xuXHRcdFx0XHQkd2lkZ2V0LmZpbmQoJy51aS1kaWFsb2ctdGl0bGUnKS5wcmVwZW5kKHNjcmlwdG5hbWVzcGFuKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGRpYWxvZyA9ICQodGhpcy5jb250ZW50KS5kaWFsb2coJ29wZW4nKTtcblx0XHRcdGlmICh3aW5kb3cuc2V0dXBUb29sdGlwcyAmJiB3aW5kb3cucGcgJiYgd2luZG93LnBnLnJlICYmIHdpbmRvdy5wZy5yZS5kaWZmKSB7XG5cdFx0XHRcdC8vIHRpZSBpbiB3aXRoIE5BVlBPUFxuXHRcdFx0XHRkaWFsb2cucGFyZW50KClbMF0ucmFuU2V0dXBUb29sdGlwc0FscmVhZHkgPSBmYWxzZTtcblx0XHRcdFx0d2luZG93LnNldHVwVG9vbHRpcHMoZGlhbG9nLnBhcmVudCgpWzBdKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0SGVpZ2h0KHRoaXMuaGVpZ2h0KTsgLy8gaW5pdCBoZWlnaHQgYWxnb3JpdGhtXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGRpYWxvZyB0aXRsZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0VGl0bGUodGl0bGUpIHtcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ29wdGlvbicsICd0aXRsZScsIHRpdGxlKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgc2NyaXB0IG5hbWUsIGFwcGVhcmluZyBhcyBhIHByZWZpeCB0byB0aGUgdGl0bGUgdG8gaGVscCB1c2VycyBkZXRlcm1pbmUgd2hpY2hcblx0XHQgKiB1c2VyIHNjcmlwdCBpcyBwcm9kdWNpbmcgd2hpY2ggZGlhbG9nLiBGb3IgaW5zdGFuY2UsIFR3aW5rbGUgbW9kdWxlcyBzZXQgdGhpcyB0byBcIlR3aW5rbGVcIi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRTY3JpcHROYW1lKG5hbWUpIHtcblx0XHRcdHRoaXMuc2NyaXB0TmFtZSA9IG5hbWU7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGRpYWxvZyB3aWR0aC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0V2lkdGgod2lkdGgpIHtcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ29wdGlvbicsICd3aWR0aCcsIHdpZHRoKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgZGlhbG9nJ3MgbWF4aW11bSBoZWlnaHQuIFRoZSBkaWFsb2cgd2lsbCBhdXRvLXNpemUgdG8gZml0IGl0cyBjb250ZW50cyxcblx0XHQgKiBidXQgdGhlIGNvbnRlbnQgYXJlYSB3aWxsIGdyb3cgbm8gbGFyZ2VyIHRoYW4gdGhlIGhlaWdodCBnaXZlbiBoZXJlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0SGVpZ2h0KGhlaWdodCkge1xuXHRcdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0XHQvLyBmcm9tIGRpc3BsYXkgdGltZSBvbndhcmRzLCBsZXQgdGhlIGJyb3dzZXIgZGV0ZXJtaW5lIHRoZSBvcHRpbXVtIGhlaWdodCxcblx0XHRcdC8vIGFuZCBpbnN0ZWFkIGxpbWl0IHRoZSBoZWlnaHQgYXQgdGhlIGdpdmVuIHZhbHVlXG5cdFx0XHQvLyBub3RlIHRoYXQgdGhlIGdpdmVuIGhlaWdodCB3aWxsIGV4Y2x1ZGUgdGhlIGFwcHJveC4gMjBweCB0aGF0IHRoZSBqUXVlcnkgVUlcblx0XHRcdC8vIGNocm9tZSBoYXMgaW4gaGVpZ2h0IGluIGFkZGl0aW9uIHRvIHRoZSBoZWlnaHQgb2YgYW4gZXF1aXZhbGVudCBcImNsYXNzaWNcIlxuXHRcdFx0Ly8gTW9yZWJpdHMuc2ltcGxlV2luZG93XG5cdFx0XHRpZiAoXG5cdFx0XHRcdE51bWJlci5wYXJzZUludChnZXRDb21wdXRlZFN0eWxlKCQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpWzBdLCBudWxsKS5oZWlnaHQsIDEwKSA+XG5cdFx0XHRcdHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdFx0KSB7XG5cdFx0XHRcdCQodGhpcy5jb250ZW50KVxuXHRcdFx0XHRcdC5kaWFsb2coJ29wdGlvbicsICdoZWlnaHQnLCB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyKVxuXHRcdFx0XHRcdC5kaWFsb2coJ29wdGlvbicsICdwb3NpdGlvbicsICd0b3AnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ29wdGlvbicsICdoZWlnaHQnLCAnYXV0bycpO1xuXHRcdFx0fVxuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0JykuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1jb250ZW50JylbMF0uc3R5bGUubWF4SGVpZ2h0ID0gYCR7TnVtYmVyLnBhcnNlSW50KFxuXHRcdFx0XHR0aGlzLmhlaWdodCAtIDMwLFxuXHRcdFx0XHQxMFxuXHRcdFx0KX1weGA7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGNvbnRlbnQgb2YgdGhlIGRpYWxvZyB0byB0aGUgZ2l2ZW4gZWxlbWVudCBub2RlLCB1c3VhbGx5IGZyb20gcmVuZGVyaW5nXG5cdFx0ICogYSB7QGxpbmsgTW9yZWJpdHMucXVpY2tGb3JtfS5cblx0XHQgKiBSZS1lbnVtZXJhdGVzIHRoZSBmb290ZXIgYnV0dG9ucywgYnV0IGxlYXZlcyB0aGUgZm9vdGVyIGxpbmtzIGFzIHRoZXkgYXJlLlxuXHRcdCAqIEJlIHN1cmUgdG8gY2FsbCB0aGlzIGF0IGxlYXN0IG9uY2UgYmVmb3JlIHRoZSBkaWFsb2cgaXMgZGlzcGxheWVkLi4uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZW50XG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRDb250ZW50KGNvbnRlbnQpIHtcblx0XHRcdHRoaXMucHVyZ2VDb250ZW50KCk7XG5cdFx0XHR0aGlzLmFkZENvbnRlbnQoY29udGVudCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEFkZHMgdGhlIGdpdmVuIGVsZW1lbnQgbm9kZSB0byB0aGUgZGlhbG9nIGNvbnRlbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZW50XG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRhZGRDb250ZW50KGNvbnRlbnQpIHtcblx0XHRcdHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcblx0XHRcdC8vIGxvb2sgZm9yIHN1Ym1pdCBidXR0b25zIGluIHRoZSBjb250ZW50LCBoaWRlIHRoZW0sIGFuZCBhZGQgYSBwcm94eSBidXR0b24gdG8gdGhlIGJ1dHRvbiBwYW5lXG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdCQodGhpcy5jb250ZW50KVxuXHRcdFx0XHQuZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKVxuXHRcdFx0XHQuZWFjaCgoa2V5LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0XHRcdFx0aWYgKHZhbHVlLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuXHRcdFx0XHRcdFx0YnV0dG9uLnRleHRDb250ZW50ID0gdmFsdWUuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUudGV4dENvbnRlbnQpIHtcblx0XHRcdFx0XHRcdGJ1dHRvbi50ZXh0Q29udGVudCA9IHZhbHVlLnRleHRDb250ZW50O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSAn5o+Q5LqkJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnV0dG9uLmNsYXNzTmFtZSA9IHZhbHVlLmNsYXNzTmFtZSB8fCAnc3VibWl0QnV0dG9uUHJveHknO1xuXHRcdFx0XHRcdC8vIGhlcmUgaXMgYW4gaW5zdGFuY2Ugb2YgY2hlYXAgY29kaW5nLCBwcm9iYWJseSBhIG1lbW9yeS11c2FnZSBoaXQgaW4gdXNpbmcgYSBjbG9zdXJlIGhlcmVcblx0XHRcdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHZhbHVlLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZmFsc2Vcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHNlbGYuYnV0dG9ucy5wdXNoKGJ1dHRvbik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0Ly8gcmVtb3ZlIGFsbCBidXR0b25zIGZyb20gdGhlIGJ1dHRvbiBwYW5lIGFuZCByZS1hZGQgdGhlbVxuXHRcdFx0aWYgKHRoaXMuYnV0dG9ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdCQodGhpcy5jb250ZW50KVxuXHRcdFx0XHRcdC5kaWFsb2coJ3dpZGdldCcpXG5cdFx0XHRcdFx0LmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucycpXG5cdFx0XHRcdFx0LmVtcHR5KClcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMuYnV0dG9ucylbMF1cblx0XHRcdFx0XHQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWVtcHR5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMuY29udGVudClcblx0XHRcdFx0XHQuZGlhbG9nKCd3aWRnZXQnKVxuXHRcdFx0XHRcdC5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMnKVswXVxuXHRcdFx0XHRcdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZW1wdHknLCAnZGF0YS1lbXB0eScpOyAvLyB1c2VkIGJ5IENTU1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZXMgYWxsIGNvbnRlbnRzIGZyb20gdGhlIGRpYWxvZywgYmFycmluZyBhbnkgZm9vdGVyIGxpbmtzLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRwdXJnZUNvbnRlbnQoKSB7XG5cdFx0XHR0aGlzLmJ1dHRvbnMgPSBbXTtcblx0XHRcdC8vIGRlbGV0ZSBhbGwgYnV0dG9ucyBpbiB0aGUgYnV0dG9ucGFuZVxuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0JykuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1idXR0b25zJykuZW1wdHkoKTtcblx0XHRcdHdoaWxlICh0aGlzLmNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0XHRcdHRoaXMuY29udGVudC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRlbnQuZmlyc3RDaGlsZCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEFkZHMgYSBsaW5rIGluIHRoZSBib3R0b20tcmlnaHQgY29ybmVyIG9mIHRoZSBkaWFsb2cuXG5cdFx0ICogVGhpcyBjYW4gYmUgdXNlZCB0byBwcm92aWRlIGhlbHAgb3IgcG9saWN5IGxpbmtzLlxuXHRcdCAqIEZvciBleGFtcGxlLCBUd2lua2xlJ3MgQ1NEIG1vZHVsZSBhZGRzIGEgbGluayB0byB0aGUgQ1NEIHBvbGljeSBwYWdlLFxuXHRcdCAqIGFzIHdlbGwgYXMgYSBsaW5rIHRvIFR3aW5rbGUncyBkb2N1bWVudGF0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBEaXNwbGF5IHRleHQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2lQYWdlIC0gTGluayB0YXJnZXQuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbcHJlcD1mYWxzZV0gLSBTZXQgdHJ1ZSB0byBwcmVwZW5kIHJhdGhlciB0aGFuIGFwcGVuZC5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGFkZEZvb3RlckxpbmsodGV4dCwgd2lraVBhZ2UsIHByZXApIHtcblx0XHRcdGNvbnN0ICRmb290ZXJsaW5rcyA9ICQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpLmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctZm9vdGVybGlua3MnKTtcblx0XHRcdGlmICh0aGlzLmhhc0Zvb3RlckxpbmtzKSB7XG5cdFx0XHRcdGNvbnN0IGJ1bGxldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0YnVsbGV0LnRleHRDb250ZW50ID0gJyBcXHUyMDIyICc7IC8vIFUrMjAyMiBCVUxMRVRcblx0XHRcdFx0aWYgKHByZXApIHtcblx0XHRcdFx0XHQkZm9vdGVybGlua3MucHJlcGVuZChidWxsZXQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRmb290ZXJsaW5rcy5hcHBlbmQoYnVsbGV0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgbXcudXRpbC5nZXRVcmwod2lraVBhZ2UpKTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCd0aXRsZScsIHdpa2lQYWdlKTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgncmVsJywgJ25vb3BlbmVyIG5vcmVmZXJyZXInKTtcblx0XHRcdGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdFx0aWYgKHByZXApIHtcblx0XHRcdFx0JGZvb3RlcmxpbmtzLnByZXBlbmQobGluayk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkZm9vdGVybGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5oYXNGb290ZXJMaW5rcyA9IHRydWU7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgd2hldGhlciB0aGUgd2luZG93IHNob3VsZCBiZSBtb2RhbCBvciBub3QuIE1vZGFsIGRpYWxvZ3MgY3JlYXRlXG5cdFx0ICogYW4gb3ZlcmxheSBiZWxvdyB0aGUgZGlhbG9nIGJ1dCBhYm92ZSBvdGhlciBwYWdlIGVsZW1lbnRzLiBUaGlzXG5cdFx0ICogbXVzdCBiZSB1c2VkIChpZiBuZWNlc3NhcnkpIGJlZm9yZSBjYWxsaW5nIGRpc3BsYXkoKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW21vZGFsPWZhbHNlXSAtIElmIHNldCB0byB0cnVlLCBvdGhlciBpdGVtcyBvbiB0aGVcblx0XHQgKiBwYWdlIHdpbGwgYmUgZGlzYWJsZWQsIGkuZS4sIGNhbm5vdCBiZSBpbnRlcmFjdGVkIHdpdGguXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRNb2RhbGl0eShtb2RhbCkge1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3B0aW9uJywgJ21vZGFsJywgbW9kYWwpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgYWxsIGZvb3RlciBidXR0b25zIG9uIGFsbCB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fXMgaW4gdGhlIGN1cnJlbnQgcGFnZS5cblx0ICogVGhpcyBzaG91bGQgYmUgY2FsbGVkIHdpdGggYGZhbHNlYCB3aGVuIHRoZSBidXR0b24ocykgYmVjb21lIGlycmVsZXZhbnQgKGUuZy4ganVzdCBiZWZvcmVcblx0ICoge0BsaW5rIE1vcmViaXRzLnN0YXR1cy5pbml0fSBpcyBjYWxsZWQpLlxuXHQgKiBUaGlzIGlzIG5vdCBhbiBpbnN0YW5jZSBtZXRob2Qgc28gdGhhdCBjb25zdW1lcnMgZG9uJ3QgaGF2ZSB0byBrZWVwIGEgcmVmZXJlbmNlIHRvIHRoZVxuXHQgKiBvcmlnaW5hbCBgTW9yZWJpdHMuc2ltcGxlV2luZG93YCBvYmplY3Qgc2l0dGluZyBhcm91bmQgc29tZXdoZXJlLiBBbnl3YXksIG1vc3Qgb2YgdGhlIHRpbWVcblx0ICogdGhlcmUgd2lsbCBvbmx5IGJlIG9uZSBgTW9yZWJpdHMuc2ltcGxlV2luZG93YCBvcGVuLCBzbyB0aGlzIHNob3VsZG4ndCBtYXR0ZXIuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zaW1wbGVXaW5kb3dcblx0ICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkXG5cdCAqL1xuXHRNb3JlYml0cy5zaW1wbGVXaW5kb3cuc2V0QnV0dG9uc0VuYWJsZWQgPSAoZW5hYmxlZCkgPT4ge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdCRib2R5LmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucyBidXR0b24nKS5wcm9wKCdkaXNhYmxlZCcsICFlbmFibGVkKTtcblx0fTtcbn0pKGpRdWVyeSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLHdGQUFBQSxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ25DO0FBR0EsSUFBQUEsUUFBTztBQUFBLElBRUwsTUFBTSxPQUFPLGNBQWMsWUFBWSxVQUFVLEtBQ2pELE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTTtBQUFBLElBRXpDLE1BQU0sT0FBTyxRQUFRLFlBQVksSUFBSSxLQUNyQyxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sS0FDekMsTUFBTSxPQUFPLFdBQVEsWUFBWSxPQUFJO0FBQUEsSUFFcEMsMkJBQVk7QUFBRSxhQUFPO0FBQUEsSUFBTSxFQUFHLEtBQUssU0FBUyxhQUFhLEVBQUU7QUFBQTtBQUFBOzs7QUNmOUQ7QUFBQSx1RkFBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVLFNBQVUsTUFBTTtBQUMvQixVQUFJO0FBQ0YsZUFBTyxDQUFDLENBQUMsS0FBSztBQUFBLE1BQ2hCLFNBQVMsT0FBTztBQUNkLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ1BBO0FBQUEsNkZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUTtBQUdaLElBQUFBLFFBQU8sVUFBVSxDQUFDLE1BQU0sV0FBWTtBQUVsQyxhQUFPLE9BQU8sZUFBZSxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssV0FBWTtBQUFFLGVBQU87QUFBQSxNQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTTtBQUFBLElBQ2pGLENBQUM7QUFBQTtBQUFBOzs7QUNQRDtBQUFBLHNHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVE7QUFFWixJQUFBQSxRQUFPLFVBQVUsQ0FBQyxNQUFNLFdBQVk7QUFFbEMsVUFBSSxPQUFRLFdBQVk7QUFBQSxNQUFjLEVBQUcsS0FBSztBQUU5QyxhQUFPLE9BQU8sUUFBUSxjQUFjLEtBQUssZUFBZSxXQUFXO0FBQUEsSUFDckUsQ0FBQztBQUFBO0FBQUE7OztBQ1JEO0FBQUEsK0ZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUVsQixRQUFJLE9BQU8sU0FBUyxVQUFVO0FBRTlCLElBQUFBLFFBQU8sVUFBVSxjQUFjLEtBQUssS0FBSyxJQUFJLElBQUksV0FBWTtBQUMzRCxhQUFPLEtBQUssTUFBTSxNQUFNLFNBQVM7QUFBQSxJQUNuQztBQUFBO0FBQUE7OztBQ1BBO0FBQUE7QUFBQTtBQUNBLFFBQUksd0JBQXdCLENBQUMsRUFBRTtBQUUvQixRQUFJLDJCQUEyQixPQUFPO0FBR3RDLFFBQUksY0FBYyw0QkFBNEIsQ0FBQyxzQkFBc0IsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFJckYsWUFBUSxJQUFJLGNBQWMsU0FBUyxxQkFBcUIsR0FBRztBQUN6RCxVQUFJLGFBQWEseUJBQXlCLE1BQU0sQ0FBQztBQUNqRCxhQUFPLENBQUMsQ0FBQyxjQUFjLFdBQVc7QUFBQSxJQUNwQyxJQUFJO0FBQUE7QUFBQTs7O0FDYko7QUFBQSw0R0FBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVLFNBQVUsUUFBUSxPQUFPO0FBQ3hDLGFBQU87QUFBQSxRQUNMLFlBQVksRUFBRSxTQUFTO0FBQUEsUUFDdkIsY0FBYyxFQUFFLFNBQVM7QUFBQSxRQUN6QixVQUFVLEVBQUUsU0FBUztBQUFBLFFBQ3JCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNSQTtBQUFBLHVHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFFbEIsUUFBSSxvQkFBb0IsU0FBUztBQUNqQyxRQUFJLE9BQU8sa0JBQWtCO0FBQzdCLFFBQUksc0JBQXNCLGVBQWUsa0JBQWtCLEtBQUssS0FBSyxNQUFNLElBQUk7QUFFL0UsSUFBQUEsUUFBTyxVQUFVLGNBQWMsc0JBQXNCLFNBQVUsSUFBSTtBQUNqRSxhQUFPLFdBQVk7QUFDakIsZUFBTyxLQUFLLE1BQU0sSUFBSSxTQUFTO0FBQUEsTUFDakM7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDWEE7QUFBQSw2RkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBRWxCLFFBQUksV0FBVyxZQUFZLENBQUMsRUFBRSxRQUFRO0FBQ3RDLFFBQUksY0FBYyxZQUFZLEdBQUcsS0FBSztBQUV0QyxJQUFBQSxRQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLGFBQU8sWUFBWSxTQUFTLEVBQUUsR0FBRyxHQUFHLEVBQUU7QUFBQSxJQUN4QztBQUFBO0FBQUE7OztBQ1JBO0FBQUEsZ0dBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLFFBQVE7QUFDWixRQUFJLFVBQVU7QUFFZCxRQUFJLFVBQVU7QUFDZCxRQUFJLFFBQVEsWUFBWSxHQUFHLEtBQUs7QUFHaEMsSUFBQUEsUUFBTyxVQUFVLE1BQU0sV0FBWTtBQUdqQyxhQUFPLENBQUMsUUFBUSxHQUFHLEVBQUUscUJBQXFCLENBQUM7QUFBQSxJQUM3QyxDQUFDLElBQUksU0FBVSxJQUFJO0FBQ2pCLGFBQU8sUUFBUSxFQUFFLE1BQU0sV0FBVyxNQUFNLElBQUksRUFBRSxJQUFJLFFBQVEsRUFBRTtBQUFBLElBQzlELElBQUk7QUFBQTtBQUFBOzs7QUNmSjtBQUFBLHNHQUFBQyxTQUFBO0FBQUE7QUFHQSxJQUFBQSxRQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLGFBQU8sT0FBTyxRQUFRLE9BQU87QUFBQSxJQUMvQjtBQUFBO0FBQUE7OztBQ0xBO0FBQUEsMEdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksb0JBQW9CO0FBRXhCLFFBQUksYUFBYTtBQUlqQixJQUFBQSxRQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLFVBQUksa0JBQWtCLEVBQUUsRUFBRyxPQUFNLElBQUksV0FBVywwQkFBMEIsRUFBRTtBQUM1RSxhQUFPO0FBQUEsSUFDVDtBQUFBO0FBQUE7OztBQ1ZBO0FBQUEsbUdBQUFDLFNBQUE7QUFBQTtBQUVBLFFBQUksZ0JBQWdCO0FBQ3BCLFFBQUkseUJBQXlCO0FBRTdCLElBQUFBLFFBQU8sVUFBVSxTQUFVLElBQUk7QUFDN0IsYUFBTyxjQUFjLHVCQUF1QixFQUFFLENBQUM7QUFBQSxJQUNqRDtBQUFBO0FBQUE7OztBQ1BBO0FBQUEsNkZBQUFDLFNBQUE7QUFBQTtBQUVBLFFBQUksY0FBYyxPQUFPLFlBQVksWUFBWSxTQUFTO0FBSzFELElBQUFBLFFBQU8sVUFBVSxPQUFPLGVBQWUsZUFBZSxnQkFBZ0IsU0FBWSxTQUFVLFVBQVU7QUFDcEcsYUFBTyxPQUFPLFlBQVksY0FBYyxhQUFhO0FBQUEsSUFDdkQsSUFBSSxTQUFVLFVBQVU7QUFDdEIsYUFBTyxPQUFPLFlBQVk7QUFBQSxJQUM1QjtBQUFBO0FBQUE7OztBQ1hBO0FBQUEsMkZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksYUFBYTtBQUVqQixJQUFBQSxRQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLGFBQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFdBQVcsRUFBRTtBQUFBLElBQzVEO0FBQUE7QUFBQTs7O0FDTEE7QUFBQSw4RkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSUMsVUFBUztBQUNiLFFBQUksYUFBYTtBQUVqQixRQUFJLFlBQVksU0FBVSxVQUFVO0FBQ2xDLGFBQU8sV0FBVyxRQUFRLElBQUksV0FBVztBQUFBLElBQzNDO0FBRUEsSUFBQUQsUUFBTyxVQUFVLFNBQVUsV0FBVyxRQUFRO0FBQzVDLGFBQU8sVUFBVSxTQUFTLElBQUksVUFBVUMsUUFBTyxTQUFTLENBQUMsSUFBSUEsUUFBTyxTQUFTLEtBQUtBLFFBQU8sU0FBUyxFQUFFLE1BQU07QUFBQSxJQUM1RztBQUFBO0FBQUE7OztBQ1ZBO0FBQUEsd0dBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUVsQixJQUFBQSxRQUFPLFVBQVUsWUFBWSxDQUFDLEVBQUUsYUFBYTtBQUFBO0FBQUE7OztBQ0g3QztBQUFBLG1HQUFBQyxTQUFBO0FBQUE7QUFDQSxJQUFBQSxRQUFPLFVBQVUsT0FBTyxhQUFhLGVBQWUsT0FBTyxVQUFVLFNBQVMsS0FBSztBQUFBO0FBQUE7OztBQ0RuRjtBQUFBLG1HQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJQyxVQUFTO0FBQ2IsUUFBSSxZQUFZO0FBRWhCLFFBQUksVUFBVUEsUUFBTztBQUNyQixRQUFJLE9BQU9BLFFBQU87QUFDbEIsUUFBSSxXQUFXLFdBQVcsUUFBUSxZQUFZLFFBQVEsS0FBSztBQUMzRCxRQUFJLEtBQUssWUFBWSxTQUFTO0FBQzlCLFFBQUk7QUFBSixRQUFXO0FBRVgsUUFBSSxJQUFJO0FBQ04sY0FBUSxHQUFHLE1BQU0sR0FBRztBQUdwQixnQkFBVSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQztBQUFBLElBQ25FO0FBSUEsUUFBSSxDQUFDLFdBQVcsV0FBVztBQUN6QixjQUFRLFVBQVUsTUFBTSxhQUFhO0FBQ3JDLFVBQUksQ0FBQyxTQUFTLE1BQU0sQ0FBQyxLQUFLLElBQUk7QUFDNUIsZ0JBQVEsVUFBVSxNQUFNLGVBQWU7QUFDdkMsWUFBSSxNQUFPLFdBQVUsQ0FBQyxNQUFNLENBQUM7QUFBQSxNQUMvQjtBQUFBLElBQ0Y7QUFFQSxJQUFBRCxRQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUMzQmpCO0FBQUEsOEdBQUFFLFNBQUE7QUFBQTtBQUVBLFFBQUksYUFBYTtBQUNqQixRQUFJLFFBQVE7QUFDWixRQUFJQyxVQUFTO0FBRWIsUUFBSSxVQUFVQSxRQUFPO0FBR3JCLElBQUFELFFBQU8sVUFBVSxDQUFDLENBQUMsT0FBTyx5QkFBeUIsQ0FBQyxNQUFNLFdBQVk7QUFDcEUsVUFBSSxTQUFTLE9BQU8sa0JBQWtCO0FBS3RDLGFBQU8sQ0FBQyxRQUFRLE1BQU0sS0FBSyxFQUFFLE9BQU8sTUFBTSxhQUFhO0FBQUEsTUFFckQsQ0FBQyxPQUFPLFFBQVEsY0FBYyxhQUFhO0FBQUEsSUFDL0MsQ0FBQztBQUFBO0FBQUE7OztBQ2xCRDtBQUFBLG1HQUFBRSxTQUFBO0FBQUE7QUFFQSxRQUFJLGdCQUFnQjtBQUVwQixJQUFBQSxRQUFPLFVBQVUsaUJBQ1osQ0FBQyxPQUFPLFFBQ1IsT0FBTyxPQUFPLFlBQVk7QUFBQTtBQUFBOzs7QUNOL0I7QUFBQSwyRkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxhQUFhO0FBQ2pCLFFBQUksYUFBYTtBQUNqQixRQUFJLGdCQUFnQjtBQUNwQixRQUFJLG9CQUFvQjtBQUV4QixRQUFJLFVBQVU7QUFFZCxJQUFBQSxRQUFPLFVBQVUsb0JBQW9CLFNBQVUsSUFBSTtBQUNqRCxhQUFPLE9BQU8sTUFBTTtBQUFBLElBQ3RCLElBQUksU0FBVSxJQUFJO0FBQ2hCLFVBQUksVUFBVSxXQUFXLFFBQVE7QUFDakMsYUFBTyxXQUFXLE9BQU8sS0FBSyxjQUFjLFFBQVEsV0FBVyxRQUFRLEVBQUUsQ0FBQztBQUFBLElBQzVFO0FBQUE7QUFBQTs7O0FDYkE7QUFBQSwrRkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxVQUFVO0FBRWQsSUFBQUEsUUFBTyxVQUFVLFNBQVUsVUFBVTtBQUNuQyxVQUFJO0FBQ0YsZUFBTyxRQUFRLFFBQVE7QUFBQSxNQUN6QixTQUFTLE9BQU87QUFDZCxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNUQTtBQUFBLDRGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGFBQWE7QUFDakIsUUFBSSxjQUFjO0FBRWxCLFFBQUksYUFBYTtBQUdqQixJQUFBQSxRQUFPLFVBQVUsU0FBVSxVQUFVO0FBQ25DLFVBQUksV0FBVyxRQUFRLEVBQUcsUUFBTztBQUNqQyxZQUFNLElBQUksV0FBVyxZQUFZLFFBQVEsSUFBSSxvQkFBb0I7QUFBQSxJQUNuRTtBQUFBO0FBQUE7OztBQ1ZBO0FBQUEsNEZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksWUFBWTtBQUNoQixRQUFJLG9CQUFvQjtBQUl4QixJQUFBQSxRQUFPLFVBQVUsU0FBVSxHQUFHLEdBQUc7QUFDL0IsVUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNkLGFBQU8sa0JBQWtCLElBQUksSUFBSSxTQUFZLFVBQVUsSUFBSTtBQUFBLElBQzdEO0FBQUE7QUFBQTs7O0FDVEE7QUFBQSx1R0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxPQUFPO0FBQ1gsUUFBSSxhQUFhO0FBQ2pCLFFBQUksV0FBVztBQUVmLFFBQUksYUFBYTtBQUlqQixJQUFBQSxRQUFPLFVBQVUsU0FBVSxPQUFPLE1BQU07QUFDdEMsVUFBSSxJQUFJO0FBQ1IsVUFBSSxTQUFTLFlBQVksV0FBVyxLQUFLLE1BQU0sUUFBUSxLQUFLLENBQUMsU0FBUyxNQUFNLEtBQUssSUFBSSxLQUFLLENBQUMsRUFBRyxRQUFPO0FBQ3JHLFVBQUksV0FBVyxLQUFLLE1BQU0sT0FBTyxLQUFLLENBQUMsU0FBUyxNQUFNLEtBQUssSUFBSSxLQUFLLENBQUMsRUFBRyxRQUFPO0FBQy9FLFVBQUksU0FBUyxZQUFZLFdBQVcsS0FBSyxNQUFNLFFBQVEsS0FBSyxDQUFDLFNBQVMsTUFBTSxLQUFLLElBQUksS0FBSyxDQUFDLEVBQUcsUUFBTztBQUNyRyxZQUFNLElBQUksV0FBVyx5Q0FBeUM7QUFBQSxJQUNoRTtBQUFBO0FBQUE7OztBQ2ZBO0FBQUEseUZBQUFDLFNBQUE7QUFBQTtBQUNBLElBQUFBLFFBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ0RqQjtBQUFBLHdHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJQyxVQUFTO0FBR2IsUUFBSSxpQkFBaUIsT0FBTztBQUU1QixJQUFBRCxRQUFPLFVBQVUsU0FBVSxLQUFLLE9BQU87QUFDckMsVUFBSTtBQUNGLHVCQUFlQyxTQUFRLEtBQUssRUFBRSxPQUFjLGNBQWMsTUFBTSxVQUFVLEtBQUssQ0FBQztBQUFBLE1BQ2xGLFNBQVMsT0FBTztBQUNkLFFBQUFBLFFBQU8sR0FBRyxJQUFJO0FBQUEsTUFDaEI7QUFBRSxhQUFPO0FBQUEsSUFDWDtBQUFBO0FBQUE7OztBQ1pBO0FBQUEsOEZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksVUFBVTtBQUNkLFFBQUlDLGNBQWE7QUFDakIsUUFBSSx1QkFBdUI7QUFFM0IsUUFBSSxTQUFTO0FBQ2IsUUFBSSxRQUFRRCxRQUFPLFVBQVVDLFlBQVcsTUFBTSxLQUFLLHFCQUFxQixRQUFRLENBQUMsQ0FBQztBQUVsRixLQUFDLE1BQU0sYUFBYSxNQUFNLFdBQVcsQ0FBQyxJQUFJLEtBQUs7QUFBQSxNQUM3QyxTQUFTO0FBQUEsTUFDVCxNQUFNLFVBQVUsU0FBUztBQUFBLE1BQ3pCLFdBQVc7QUFBQSxNQUNYLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxJQUNWLENBQUM7QUFBQTtBQUFBOzs7QUNkRDtBQUFBLHdGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVE7QUFFWixJQUFBQSxRQUFPLFVBQVUsU0FBVSxLQUFLLE9BQU87QUFDckMsYUFBTyxNQUFNLEdBQUcsTUFBTSxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUM7QUFBQSxJQUMvQztBQUFBO0FBQUE7OztBQ0xBO0FBQUEsMkZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUkseUJBQXlCO0FBRTdCLFFBQUksVUFBVTtBQUlkLElBQUFBLFFBQU8sVUFBVSxTQUFVLFVBQVU7QUFDbkMsYUFBTyxRQUFRLHVCQUF1QixRQUFRLENBQUM7QUFBQSxJQUNqRDtBQUFBO0FBQUE7OztBQ1RBO0FBQUEsa0dBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLFdBQVc7QUFFZixRQUFJLGlCQUFpQixZQUFZLENBQUMsRUFBRSxjQUFjO0FBS2xELElBQUFBLFFBQU8sVUFBVSxPQUFPLFVBQVUsU0FBUyxPQUFPLElBQUksS0FBSztBQUN6RCxhQUFPLGVBQWUsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUFBLElBQ3pDO0FBQUE7QUFBQTs7O0FDWEE7QUFBQSxxRkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBRWxCLFFBQUksS0FBSztBQUNULFFBQUksVUFBVSxLQUFLLE9BQU87QUFDMUIsUUFBSSxXQUFXLFlBQVksR0FBSSxRQUFRO0FBRXZDLElBQUFBLFFBQU8sVUFBVSxTQUFVLEtBQUs7QUFDOUIsYUFBTyxhQUFhLFFBQVEsU0FBWSxLQUFLLE9BQU8sT0FBTyxTQUFTLEVBQUUsS0FBSyxTQUFTLEVBQUU7QUFBQSxJQUN4RjtBQUFBO0FBQUE7OztBQ1RBO0FBQUEsbUdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUlDLFVBQVM7QUFDYixRQUFJLFNBQVM7QUFDYixRQUFJLFNBQVM7QUFDYixRQUFJLE1BQU07QUFDVixRQUFJLGdCQUFnQjtBQUNwQixRQUFJLG9CQUFvQjtBQUV4QixRQUFJQyxVQUFTRCxRQUFPO0FBQ3BCLFFBQUksd0JBQXdCLE9BQU8sS0FBSztBQUN4QyxRQUFJLHdCQUF3QixvQkFBb0JDLFFBQU8sS0FBSyxLQUFLQSxVQUFTQSxXQUFVQSxRQUFPLGlCQUFpQjtBQUU1RyxJQUFBRixRQUFPLFVBQVUsU0FBVSxNQUFNO0FBQy9CLFVBQUksQ0FBQyxPQUFPLHVCQUF1QixJQUFJLEdBQUc7QUFDeEMsOEJBQXNCLElBQUksSUFBSSxpQkFBaUIsT0FBT0UsU0FBUSxJQUFJLElBQzlEQSxRQUFPLElBQUksSUFDWCxzQkFBc0IsWUFBWSxJQUFJO0FBQUEsTUFDNUM7QUFBRSxhQUFPLHNCQUFzQixJQUFJO0FBQUEsSUFDckM7QUFBQTtBQUFBOzs7QUNsQkE7QUFBQSw4RkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxPQUFPO0FBQ1gsUUFBSSxXQUFXO0FBQ2YsUUFBSSxXQUFXO0FBQ2YsUUFBSSxZQUFZO0FBQ2hCLFFBQUksc0JBQXNCO0FBQzFCLFFBQUksa0JBQWtCO0FBRXRCLFFBQUksYUFBYTtBQUNqQixRQUFJLGVBQWUsZ0JBQWdCLGFBQWE7QUFJaEQsSUFBQUEsUUFBTyxVQUFVLFNBQVUsT0FBTyxNQUFNO0FBQ3RDLFVBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxTQUFTLEtBQUssRUFBRyxRQUFPO0FBQ2hELFVBQUksZUFBZSxVQUFVLE9BQU8sWUFBWTtBQUNoRCxVQUFJO0FBQ0osVUFBSSxjQUFjO0FBQ2hCLFlBQUksU0FBUyxPQUFXLFFBQU87QUFDL0IsaUJBQVMsS0FBSyxjQUFjLE9BQU8sSUFBSTtBQUN2QyxZQUFJLENBQUMsU0FBUyxNQUFNLEtBQUssU0FBUyxNQUFNLEVBQUcsUUFBTztBQUNsRCxjQUFNLElBQUksV0FBVyx5Q0FBeUM7QUFBQSxNQUNoRTtBQUNBLFVBQUksU0FBUyxPQUFXLFFBQU87QUFDL0IsYUFBTyxvQkFBb0IsT0FBTyxJQUFJO0FBQUEsSUFDeEM7QUFBQTtBQUFBOzs7QUN6QkE7QUFBQSxpR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksV0FBVztBQUlmLElBQUFBLFFBQU8sVUFBVSxTQUFVLFVBQVU7QUFDbkMsVUFBSSxNQUFNLFlBQVksVUFBVSxRQUFRO0FBQ3hDLGFBQU8sU0FBUyxHQUFHLElBQUksTUFBTSxNQUFNO0FBQUEsSUFDckM7QUFBQTtBQUFBOzs7QUNUQTtBQUFBLHlHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJQyxVQUFTO0FBQ2IsUUFBSSxXQUFXO0FBRWYsUUFBSUMsWUFBV0QsUUFBTztBQUV0QixRQUFJLFNBQVMsU0FBU0MsU0FBUSxLQUFLLFNBQVNBLFVBQVMsYUFBYTtBQUVsRSxJQUFBRixRQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLGFBQU8sU0FBU0UsVUFBUyxjQUFjLEVBQUUsSUFBSSxDQUFDO0FBQUEsSUFDaEQ7QUFBQTtBQUFBOzs7QUNWQTtBQUFBLGdHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFDbEIsUUFBSSxRQUFRO0FBQ1osUUFBSSxnQkFBZ0I7QUFHcEIsSUFBQUEsUUFBTyxVQUFVLENBQUMsZUFBZSxDQUFDLE1BQU0sV0FBWTtBQUVsRCxhQUFPLE9BQU8sZUFBZSxjQUFjLEtBQUssR0FBRyxLQUFLO0FBQUEsUUFDdEQsS0FBSyxXQUFZO0FBQUUsaUJBQU87QUFBQSxRQUFHO0FBQUEsTUFDL0IsQ0FBQyxFQUFFLE1BQU07QUFBQSxJQUNYLENBQUM7QUFBQTtBQUFBOzs7QUNYRDtBQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFDbEIsUUFBSSxPQUFPO0FBQ1gsUUFBSSw2QkFBNkI7QUFDakMsUUFBSSwyQkFBMkI7QUFDL0IsUUFBSSxrQkFBa0I7QUFDdEIsUUFBSSxnQkFBZ0I7QUFDcEIsUUFBSSxTQUFTO0FBQ2IsUUFBSSxpQkFBaUI7QUFHckIsUUFBSSw0QkFBNEIsT0FBTztBQUl2QyxZQUFRLElBQUksY0FBYyw0QkFBNEIsU0FBUyx5QkFBeUIsR0FBRyxHQUFHO0FBQzVGLFVBQUksZ0JBQWdCLENBQUM7QUFDckIsVUFBSSxjQUFjLENBQUM7QUFDbkIsVUFBSSxlQUFnQixLQUFJO0FBQ3RCLGVBQU8sMEJBQTBCLEdBQUcsQ0FBQztBQUFBLE1BQ3ZDLFNBQVMsT0FBTztBQUFBLE1BQWM7QUFDOUIsVUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFHLFFBQU8seUJBQXlCLENBQUMsS0FBSywyQkFBMkIsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUFBLElBQ25HO0FBQUE7QUFBQTs7O0FDdEJBO0FBQUEseUdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLFFBQVE7QUFJWixJQUFBQSxRQUFPLFVBQVUsZUFBZSxNQUFNLFdBQVk7QUFFaEQsYUFBTyxPQUFPLGVBQWUsV0FBWTtBQUFBLE1BQWMsR0FBRyxhQUFhO0FBQUEsUUFDckUsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLE1BQ1osQ0FBQyxFQUFFLGNBQWM7QUFBQSxJQUNuQixDQUFDO0FBQUE7QUFBQTs7O0FDWkQ7QUFBQSwyRkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxXQUFXO0FBRWYsUUFBSSxVQUFVO0FBQ2QsUUFBSSxhQUFhO0FBR2pCLElBQUFBLFFBQU8sVUFBVSxTQUFVLFVBQVU7QUFDbkMsVUFBSSxTQUFTLFFBQVEsRUFBRyxRQUFPO0FBQy9CLFlBQU0sSUFBSSxXQUFXLFFBQVEsUUFBUSxJQUFJLG1CQUFtQjtBQUFBLElBQzlEO0FBQUE7QUFBQTs7O0FDVkE7QUFBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksaUJBQWlCO0FBQ3JCLFFBQUksMEJBQTBCO0FBQzlCLFFBQUksV0FBVztBQUNmLFFBQUksZ0JBQWdCO0FBRXBCLFFBQUksYUFBYTtBQUVqQixRQUFJLGtCQUFrQixPQUFPO0FBRTdCLFFBQUksNEJBQTRCLE9BQU87QUFDdkMsUUFBSSxhQUFhO0FBQ2pCLFFBQUksZUFBZTtBQUNuQixRQUFJLFdBQVc7QUFJZixZQUFRLElBQUksY0FBYywwQkFBMEIsU0FBUyxlQUFlLEdBQUcsR0FBRyxZQUFZO0FBQzVGLGVBQVMsQ0FBQztBQUNWLFVBQUksY0FBYyxDQUFDO0FBQ25CLGVBQVMsVUFBVTtBQUNuQixVQUFJLE9BQU8sTUFBTSxjQUFjLE1BQU0sZUFBZSxXQUFXLGNBQWMsWUFBWSxjQUFjLENBQUMsV0FBVyxRQUFRLEdBQUc7QUFDNUgsWUFBSSxVQUFVLDBCQUEwQixHQUFHLENBQUM7QUFDNUMsWUFBSSxXQUFXLFFBQVEsUUFBUSxHQUFHO0FBQ2hDLFlBQUUsQ0FBQyxJQUFJLFdBQVc7QUFDbEIsdUJBQWE7QUFBQSxZQUNYLGNBQWMsZ0JBQWdCLGFBQWEsV0FBVyxZQUFZLElBQUksUUFBUSxZQUFZO0FBQUEsWUFDMUYsWUFBWSxjQUFjLGFBQWEsV0FBVyxVQUFVLElBQUksUUFBUSxVQUFVO0FBQUEsWUFDbEYsVUFBVTtBQUFBLFVBQ1o7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFFLGFBQU8sZ0JBQWdCLEdBQUcsR0FBRyxVQUFVO0FBQUEsSUFDM0MsSUFBSSxrQkFBa0IsU0FBUyxlQUFlLEdBQUcsR0FBRyxZQUFZO0FBQzlELGVBQVMsQ0FBQztBQUNWLFVBQUksY0FBYyxDQUFDO0FBQ25CLGVBQVMsVUFBVTtBQUNuQixVQUFJLGVBQWdCLEtBQUk7QUFDdEIsZUFBTyxnQkFBZ0IsR0FBRyxHQUFHLFVBQVU7QUFBQSxNQUN6QyxTQUFTLE9BQU87QUFBQSxNQUFjO0FBQzlCLFVBQUksU0FBUyxjQUFjLFNBQVMsV0FBWSxPQUFNLElBQUksV0FBVyx5QkFBeUI7QUFDOUYsVUFBSSxXQUFXLFdBQVksR0FBRSxDQUFDLElBQUksV0FBVztBQUM3QyxhQUFPO0FBQUEsSUFDVDtBQUFBO0FBQUE7OztBQzNDQTtBQUFBLGdIQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFDbEIsUUFBSSx1QkFBdUI7QUFDM0IsUUFBSSwyQkFBMkI7QUFFL0IsSUFBQUEsUUFBTyxVQUFVLGNBQWMsU0FBVSxRQUFRLEtBQUssT0FBTztBQUMzRCxhQUFPLHFCQUFxQixFQUFFLFFBQVEsS0FBSyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7QUFBQSxJQUMvRSxJQUFJLFNBQVUsUUFBUSxLQUFLLE9BQU87QUFDaEMsYUFBTyxHQUFHLElBQUk7QUFDZCxhQUFPO0FBQUEsSUFDVDtBQUFBO0FBQUE7OztBQ1ZBO0FBQUEsK0ZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLFNBQVM7QUFFYixRQUFJLG9CQUFvQixTQUFTO0FBRWpDLFFBQUksZ0JBQWdCLGVBQWUsT0FBTztBQUUxQyxRQUFJLFNBQVMsT0FBTyxtQkFBbUIsTUFBTTtBQUU3QyxRQUFJLFNBQVMsVUFBVyxTQUFTLFlBQVk7QUFBQSxJQUFjLEVBQUcsU0FBUztBQUN2RSxRQUFJLGVBQWUsV0FBVyxDQUFDLGVBQWdCLGVBQWUsY0FBYyxtQkFBbUIsTUFBTSxFQUFFO0FBRXZHLElBQUFBLFFBQU8sVUFBVTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNqQkE7QUFBQSxnR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksYUFBYTtBQUNqQixRQUFJLFFBQVE7QUFFWixRQUFJLG1CQUFtQixZQUFZLFNBQVMsUUFBUTtBQUdwRCxRQUFJLENBQUMsV0FBVyxNQUFNLGFBQWEsR0FBRztBQUNwQyxZQUFNLGdCQUFnQixTQUFVLElBQUk7QUFDbEMsZUFBTyxpQkFBaUIsRUFBRTtBQUFBLE1BQzVCO0FBQUEsSUFDRjtBQUVBLElBQUFBLFFBQU8sVUFBVSxNQUFNO0FBQUE7QUFBQTs7O0FDZHZCO0FBQUEsMEdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUlDLFVBQVM7QUFDYixRQUFJLGFBQWE7QUFFakIsUUFBSSxVQUFVQSxRQUFPO0FBRXJCLElBQUFELFFBQU8sVUFBVSxXQUFXLE9BQU8sS0FBSyxjQUFjLEtBQUssT0FBTyxPQUFPLENBQUM7QUFBQTtBQUFBOzs7QUNOMUU7QUFBQSw0RkFBQUUsU0FBQTtBQUFBO0FBQ0EsUUFBSSxTQUFTO0FBQ2IsUUFBSSxNQUFNO0FBRVYsUUFBSSxPQUFPLE9BQU8sTUFBTTtBQUV4QixJQUFBQSxRQUFPLFVBQVUsU0FBVSxLQUFLO0FBQzlCLGFBQU8sS0FBSyxHQUFHLE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxHQUFHO0FBQUEsSUFDMUM7QUFBQTtBQUFBOzs7QUNSQTtBQUFBLDZGQUFBQyxTQUFBO0FBQUE7QUFDQSxJQUFBQSxRQUFPLFVBQVUsQ0FBQztBQUFBO0FBQUE7OztBQ0RsQjtBQUFBLGdHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGtCQUFrQjtBQUN0QixRQUFJQyxVQUFTO0FBQ2IsUUFBSSxXQUFXO0FBQ2YsUUFBSSw4QkFBOEI7QUFDbEMsUUFBSSxTQUFTO0FBQ2IsUUFBSSxTQUFTO0FBQ2IsUUFBSSxZQUFZO0FBQ2hCLFFBQUksYUFBYTtBQUVqQixRQUFJLDZCQUE2QjtBQUNqQyxRQUFJQyxhQUFZRCxRQUFPO0FBQ3ZCLFFBQUksVUFBVUEsUUFBTztBQUNyQixRQUFJO0FBQUosUUFBUztBQUFULFFBQWM7QUFFZCxRQUFJLFVBQVUsU0FBVSxJQUFJO0FBQzFCLGFBQU8sSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQztBQUFBLElBQ3ZDO0FBRUEsUUFBSSxZQUFZLFNBQVUsTUFBTTtBQUM5QixhQUFPLFNBQVUsSUFBSTtBQUNuQixZQUFJO0FBQ0osWUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLFFBQVEsSUFBSSxFQUFFLEdBQUcsU0FBUyxNQUFNO0FBQ3BELGdCQUFNLElBQUlDLFdBQVUsNEJBQTRCLE9BQU8sV0FBVztBQUFBLFFBQ3BFO0FBQUUsZUFBTztBQUFBLE1BQ1g7QUFBQSxJQUNGO0FBRUEsUUFBSSxtQkFBbUIsT0FBTyxPQUFPO0FBQy9CLGNBQVEsT0FBTyxVQUFVLE9BQU8sUUFBUSxJQUFJLFFBQVE7QUFFeEQsWUFBTSxNQUFNLE1BQU07QUFDbEIsWUFBTSxNQUFNLE1BQU07QUFDbEIsWUFBTSxNQUFNLE1BQU07QUFFbEIsWUFBTSxTQUFVLElBQUksVUFBVTtBQUM1QixZQUFJLE1BQU0sSUFBSSxFQUFFLEVBQUcsT0FBTSxJQUFJQSxXQUFVLDBCQUEwQjtBQUNqRSxpQkFBUyxTQUFTO0FBQ2xCLGNBQU0sSUFBSSxJQUFJLFFBQVE7QUFDdEIsZUFBTztBQUFBLE1BQ1Q7QUFDQSxZQUFNLFNBQVUsSUFBSTtBQUNsQixlQUFPLE1BQU0sSUFBSSxFQUFFLEtBQUssQ0FBQztBQUFBLE1BQzNCO0FBQ0EsWUFBTSxTQUFVLElBQUk7QUFDbEIsZUFBTyxNQUFNLElBQUksRUFBRTtBQUFBLE1BQ3JCO0FBQUEsSUFDRixPQUFPO0FBQ0QsY0FBUSxVQUFVLE9BQU87QUFDN0IsaUJBQVcsS0FBSyxJQUFJO0FBQ3BCLFlBQU0sU0FBVSxJQUFJLFVBQVU7QUFDNUIsWUFBSSxPQUFPLElBQUksS0FBSyxFQUFHLE9BQU0sSUFBSUEsV0FBVSwwQkFBMEI7QUFDckUsaUJBQVMsU0FBUztBQUNsQixvQ0FBNEIsSUFBSSxPQUFPLFFBQVE7QUFDL0MsZUFBTztBQUFBLE1BQ1Q7QUFDQSxZQUFNLFNBQVUsSUFBSTtBQUNsQixlQUFPLE9BQU8sSUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQztBQUFBLE1BQzFDO0FBQ0EsWUFBTSxTQUFVLElBQUk7QUFDbEIsZUFBTyxPQUFPLElBQUksS0FBSztBQUFBLE1BQ3pCO0FBQUEsSUFDRjtBQWpDTTtBQW1CQTtBQWdCTixJQUFBRixRQUFPLFVBQVU7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUN0RUE7QUFBQSwrRkFBQUcsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksUUFBUTtBQUNaLFFBQUksYUFBYTtBQUNqQixRQUFJLFNBQVM7QUFDYixRQUFJLGNBQWM7QUFDbEIsUUFBSSw2QkFBNkIsd0JBQXNDO0FBQ3ZFLFFBQUksZ0JBQWdCO0FBQ3BCLFFBQUksc0JBQXNCO0FBRTFCLFFBQUksdUJBQXVCLG9CQUFvQjtBQUMvQyxRQUFJLG1CQUFtQixvQkFBb0I7QUFDM0MsUUFBSSxVQUFVO0FBRWQsUUFBSSxpQkFBaUIsT0FBTztBQUM1QixRQUFJLGNBQWMsWUFBWSxHQUFHLEtBQUs7QUFDdEMsUUFBSSxVQUFVLFlBQVksR0FBRyxPQUFPO0FBQ3BDLFFBQUksT0FBTyxZQUFZLENBQUMsRUFBRSxJQUFJO0FBRTlCLFFBQUksc0JBQXNCLGVBQWUsQ0FBQyxNQUFNLFdBQVk7QUFDMUQsYUFBTyxlQUFlLFdBQVk7QUFBQSxNQUFjLEdBQUcsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsV0FBVztBQUFBLElBQ3hGLENBQUM7QUFFRCxRQUFJLFdBQVcsT0FBTyxNQUFNLEVBQUUsTUFBTSxRQUFRO0FBRTVDLFFBQUksY0FBY0EsUUFBTyxVQUFVLFNBQVUsT0FBTyxNQUFNLFNBQVM7QUFDakUsVUFBSSxZQUFZLFFBQVEsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLFdBQVc7QUFDbEQsZUFBTyxNQUFNLFFBQVEsUUFBUSxJQUFJLEdBQUcseUJBQXlCLElBQUksSUFBSTtBQUFBLE1BQ3ZFO0FBQ0EsVUFBSSxXQUFXLFFBQVEsT0FBUSxRQUFPLFNBQVM7QUFDL0MsVUFBSSxXQUFXLFFBQVEsT0FBUSxRQUFPLFNBQVM7QUFDL0MsVUFBSSxDQUFDLE9BQU8sT0FBTyxNQUFNLEtBQU0sOEJBQThCLE1BQU0sU0FBUyxNQUFPO0FBQ2pGLFlBQUksWUFBYSxnQkFBZSxPQUFPLFFBQVEsRUFBRSxPQUFPLE1BQU0sY0FBYyxLQUFLLENBQUM7QUFBQSxZQUM3RSxPQUFNLE9BQU87QUFBQSxNQUNwQjtBQUNBLFVBQUksdUJBQXVCLFdBQVcsT0FBTyxTQUFTLE9BQU8sS0FBSyxNQUFNLFdBQVcsUUFBUSxPQUFPO0FBQ2hHLHVCQUFlLE9BQU8sVUFBVSxFQUFFLE9BQU8sUUFBUSxNQUFNLENBQUM7QUFBQSxNQUMxRDtBQUNBLFVBQUk7QUFDRixZQUFJLFdBQVcsT0FBTyxTQUFTLGFBQWEsS0FBSyxRQUFRLGFBQWE7QUFDcEUsY0FBSSxZQUFhLGdCQUFlLE9BQU8sYUFBYSxFQUFFLFVBQVUsTUFBTSxDQUFDO0FBQUEsUUFFekUsV0FBVyxNQUFNLFVBQVcsT0FBTSxZQUFZO0FBQUEsTUFDaEQsU0FBUyxPQUFPO0FBQUEsTUFBYztBQUM5QixVQUFJLFFBQVEscUJBQXFCLEtBQUs7QUFDdEMsVUFBSSxDQUFDLE9BQU8sT0FBTyxRQUFRLEdBQUc7QUFDNUIsY0FBTSxTQUFTLEtBQUssVUFBVSxPQUFPLFFBQVEsV0FBVyxPQUFPLEVBQUU7QUFBQSxNQUNuRTtBQUFFLGFBQU87QUFBQSxJQUNYO0FBSUEsYUFBUyxVQUFVLFdBQVcsWUFBWSxTQUFTLFdBQVc7QUFDNUQsYUFBTyxXQUFXLElBQUksS0FBSyxpQkFBaUIsSUFBSSxFQUFFLFVBQVUsY0FBYyxJQUFJO0FBQUEsSUFDaEYsR0FBRyxVQUFVO0FBQUE7QUFBQTs7O0FDdERiO0FBQUEsaUdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksYUFBYTtBQUNqQixRQUFJLHVCQUF1QjtBQUMzQixRQUFJLGNBQWM7QUFDbEIsUUFBSSx1QkFBdUI7QUFFM0IsSUFBQUEsUUFBTyxVQUFVLFNBQVUsR0FBRyxLQUFLLE9BQU8sU0FBUztBQUNqRCxVQUFJLENBQUMsUUFBUyxXQUFVLENBQUM7QUFDekIsVUFBSSxTQUFTLFFBQVE7QUFDckIsVUFBSSxPQUFPLFFBQVEsU0FBUyxTQUFZLFFBQVEsT0FBTztBQUN2RCxVQUFJLFdBQVcsS0FBSyxFQUFHLGFBQVksT0FBTyxNQUFNLE9BQU87QUFDdkQsVUFBSSxRQUFRLFFBQVE7QUFDbEIsWUFBSSxPQUFRLEdBQUUsR0FBRyxJQUFJO0FBQUEsWUFDaEIsc0JBQXFCLEtBQUssS0FBSztBQUFBLE1BQ3RDLE9BQU87QUFDTCxZQUFJO0FBQ0YsY0FBSSxDQUFDLFFBQVEsT0FBUSxRQUFPLEVBQUUsR0FBRztBQUFBLG1CQUN4QixFQUFFLEdBQUcsRUFBRyxVQUFTO0FBQUEsUUFDNUIsU0FBUyxPQUFPO0FBQUEsUUFBYztBQUM5QixZQUFJLE9BQVEsR0FBRSxHQUFHLElBQUk7QUFBQSxZQUNoQixzQkFBcUIsRUFBRSxHQUFHLEtBQUs7QUFBQSxVQUNsQztBQUFBLFVBQ0EsWUFBWTtBQUFBLFVBQ1osY0FBYyxDQUFDLFFBQVE7QUFBQSxVQUN2QixVQUFVLENBQUMsUUFBUTtBQUFBLFFBQ3JCLENBQUM7QUFBQSxNQUNIO0FBQUUsYUFBTztBQUFBLElBQ1g7QUFBQTtBQUFBOzs7QUMzQkE7QUFBQSw0RkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxPQUFPLEtBQUs7QUFDaEIsUUFBSSxRQUFRLEtBQUs7QUFLakIsSUFBQUEsUUFBTyxVQUFVLEtBQUssU0FBUyxTQUFTLE1BQU0sR0FBRztBQUMvQyxVQUFJLElBQUksQ0FBQztBQUNULGNBQVEsSUFBSSxJQUFJLFFBQVEsTUFBTSxDQUFDO0FBQUEsSUFDakM7QUFBQTtBQUFBOzs7QUNWQTtBQUFBLHdHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVE7QUFJWixJQUFBQSxRQUFPLFVBQVUsU0FBVSxVQUFVO0FBQ25DLFVBQUksU0FBUyxDQUFDO0FBRWQsYUFBTyxXQUFXLFVBQVUsV0FBVyxJQUFJLElBQUksTUFBTSxNQUFNO0FBQUEsSUFDN0Q7QUFBQTtBQUFBOzs7QUNUQTtBQUFBLG1HQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLHNCQUFzQjtBQUUxQixRQUFJLE1BQU0sS0FBSztBQUNmLFFBQUksTUFBTSxLQUFLO0FBS2YsSUFBQUEsUUFBTyxVQUFVLFNBQVUsT0FBTyxRQUFRO0FBQ3hDLFVBQUksVUFBVSxvQkFBb0IsS0FBSztBQUN2QyxhQUFPLFVBQVUsSUFBSSxJQUFJLFVBQVUsUUFBUSxDQUFDLElBQUksSUFBSSxTQUFTLE1BQU07QUFBQSxJQUNyRTtBQUFBO0FBQUE7OztBQ1pBO0FBQUEsMkZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksc0JBQXNCO0FBRTFCLFFBQUksTUFBTSxLQUFLO0FBSWYsSUFBQUEsUUFBTyxVQUFVLFNBQVUsVUFBVTtBQUNuQyxVQUFJLE1BQU0sb0JBQW9CLFFBQVE7QUFDdEMsYUFBTyxNQUFNLElBQUksSUFBSSxLQUFLLGdCQUFnQixJQUFJO0FBQUEsSUFDaEQ7QUFBQTtBQUFBOzs7QUNWQTtBQUFBLHNHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFdBQVc7QUFJZixJQUFBQSxRQUFPLFVBQVUsU0FBVSxLQUFLO0FBQzlCLGFBQU8sU0FBUyxJQUFJLE1BQU07QUFBQSxJQUM1QjtBQUFBO0FBQUE7OztBQ1BBO0FBQUEsZ0dBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksa0JBQWtCO0FBQ3RCLFFBQUksa0JBQWtCO0FBQ3RCLFFBQUksb0JBQW9CO0FBR3hCLFFBQUksZUFBZSxTQUFVLGFBQWE7QUFDeEMsYUFBTyxTQUFVLE9BQU8sSUFBSSxXQUFXO0FBQ3JDLFlBQUksSUFBSSxnQkFBZ0IsS0FBSztBQUM3QixZQUFJLFNBQVMsa0JBQWtCLENBQUM7QUFDaEMsWUFBSSxXQUFXLEVBQUcsUUFBTyxDQUFDLGVBQWU7QUFDekMsWUFBSSxRQUFRLGdCQUFnQixXQUFXLE1BQU07QUFDN0MsWUFBSTtBQUdKLFlBQUksZUFBZSxPQUFPLEdBQUksUUFBTyxTQUFTLE9BQU87QUFDbkQsa0JBQVEsRUFBRSxPQUFPO0FBRWpCLGNBQUksVUFBVSxNQUFPLFFBQU87QUFBQSxRQUU5QjtBQUFBLFlBQU8sUUFBTSxTQUFTLE9BQU8sU0FBUztBQUNwQyxlQUFLLGVBQWUsU0FBUyxNQUFNLEVBQUUsS0FBSyxNQUFNLEdBQUksUUFBTyxlQUFlLFNBQVM7QUFBQSxRQUNyRjtBQUFFLGVBQU8sQ0FBQyxlQUFlO0FBQUEsTUFDM0I7QUFBQSxJQUNGO0FBRUEsSUFBQUEsUUFBTyxVQUFVO0FBQUE7QUFBQTtBQUFBLE1BR2YsVUFBVSxhQUFhLElBQUk7QUFBQTtBQUFBO0FBQUEsTUFHM0IsU0FBUyxhQUFhLEtBQUs7QUFBQSxJQUM3QjtBQUFBO0FBQUE7OztBQ2pDQTtBQUFBLHNHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFDbEIsUUFBSSxTQUFTO0FBQ2IsUUFBSSxrQkFBa0I7QUFDdEIsUUFBSSxVQUFVLHlCQUF1QztBQUNyRCxRQUFJLGFBQWE7QUFFakIsUUFBSSxPQUFPLFlBQVksQ0FBQyxFQUFFLElBQUk7QUFFOUIsSUFBQUEsUUFBTyxVQUFVLFNBQVUsUUFBUSxPQUFPO0FBQ3hDLFVBQUksSUFBSSxnQkFBZ0IsTUFBTTtBQUM5QixVQUFJLElBQUk7QUFDUixVQUFJLFNBQVMsQ0FBQztBQUNkLFVBQUk7QUFDSixXQUFLLE9BQU8sRUFBRyxFQUFDLE9BQU8sWUFBWSxHQUFHLEtBQUssT0FBTyxHQUFHLEdBQUcsS0FBSyxLQUFLLFFBQVEsR0FBRztBQUU3RSxhQUFPLE1BQU0sU0FBUyxFQUFHLEtBQUksT0FBTyxHQUFHLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRztBQUN4RCxTQUFDLFFBQVEsUUFBUSxHQUFHLEtBQUssS0FBSyxRQUFRLEdBQUc7QUFBQSxNQUMzQztBQUNBLGFBQU87QUFBQSxJQUNUO0FBQUE7QUFBQTs7O0FDcEJBO0FBQUEsK0ZBQUFDLFNBQUE7QUFBQTtBQUVBLElBQUFBLFFBQU8sVUFBVTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDVkE7QUFBQTtBQUFBO0FBQ0EsUUFBSSxxQkFBcUI7QUFDekIsUUFBSSxjQUFjO0FBRWxCLFFBQUksYUFBYSxZQUFZLE9BQU8sVUFBVSxXQUFXO0FBS3pELFlBQVEsSUFBSSxPQUFPLHVCQUF1QixTQUFTLG9CQUFvQixHQUFHO0FBQ3hFLGFBQU8sbUJBQW1CLEdBQUcsVUFBVTtBQUFBLElBQ3pDO0FBQUE7QUFBQTs7O0FDWEE7QUFBQTtBQUFBO0FBRUEsWUFBUSxJQUFJLE9BQU87QUFBQTtBQUFBOzs7QUNGbkI7QUFBQSwwRkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxhQUFhO0FBQ2pCLFFBQUksY0FBYztBQUNsQixRQUFJLDRCQUE0QjtBQUNoQyxRQUFJLDhCQUE4QjtBQUNsQyxRQUFJLFdBQVc7QUFFZixRQUFJLFNBQVMsWUFBWSxDQUFDLEVBQUUsTUFBTTtBQUdsQyxJQUFBQSxRQUFPLFVBQVUsV0FBVyxXQUFXLFNBQVMsS0FBSyxTQUFTLFFBQVEsSUFBSTtBQUN4RSxVQUFJLE9BQU8sMEJBQTBCLEVBQUUsU0FBUyxFQUFFLENBQUM7QUFDbkQsVUFBSSx3QkFBd0IsNEJBQTRCO0FBQ3hELGFBQU8sd0JBQXdCLE9BQU8sTUFBTSxzQkFBc0IsRUFBRSxDQUFDLElBQUk7QUFBQSxJQUMzRTtBQUFBO0FBQUE7OztBQ2RBO0FBQUEsNkdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksU0FBUztBQUNiLFFBQUksVUFBVTtBQUNkLFFBQUksaUNBQWlDO0FBQ3JDLFFBQUksdUJBQXVCO0FBRTNCLElBQUFBLFFBQU8sVUFBVSxTQUFVLFFBQVEsUUFBUSxZQUFZO0FBQ3JELFVBQUksT0FBTyxRQUFRLE1BQU07QUFDekIsVUFBSSxpQkFBaUIscUJBQXFCO0FBQzFDLFVBQUksMkJBQTJCLCtCQUErQjtBQUM5RCxlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxLQUFLO0FBQ3BDLFlBQUksTUFBTSxLQUFLLENBQUM7QUFDaEIsWUFBSSxDQUFDLE9BQU8sUUFBUSxHQUFHLEtBQUssRUFBRSxjQUFjLE9BQU8sWUFBWSxHQUFHLElBQUk7QUFDcEUseUJBQWUsUUFBUSxLQUFLLHlCQUF5QixRQUFRLEdBQUcsQ0FBQztBQUFBLFFBQ25FO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNoQkE7QUFBQSwyRkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRO0FBQ1osUUFBSSxhQUFhO0FBRWpCLFFBQUksY0FBYztBQUVsQixRQUFJLFdBQVcsU0FBVSxTQUFTLFdBQVc7QUFDM0MsVUFBSSxRQUFRLEtBQUssVUFBVSxPQUFPLENBQUM7QUFDbkMsYUFBTyxVQUFVLFdBQVcsT0FDeEIsVUFBVSxTQUFTLFFBQ25CLFdBQVcsU0FBUyxJQUFJLE1BQU0sU0FBUyxJQUN2QyxDQUFDLENBQUM7QUFBQSxJQUNSO0FBRUEsUUFBSSxZQUFZLFNBQVMsWUFBWSxTQUFVLFFBQVE7QUFDckQsYUFBTyxPQUFPLE1BQU0sRUFBRSxRQUFRLGFBQWEsR0FBRyxFQUFFLFlBQVk7QUFBQSxJQUM5RDtBQUVBLFFBQUksT0FBTyxTQUFTLE9BQU8sQ0FBQztBQUM1QixRQUFJLFNBQVMsU0FBUyxTQUFTO0FBQy9CLFFBQUksV0FBVyxTQUFTLFdBQVc7QUFFbkMsSUFBQUEsUUFBTyxVQUFVO0FBQUE7QUFBQTs7O0FDdEJqQjtBQUFBLHdGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJQyxVQUFTO0FBQ2IsUUFBSSwyQkFBMkIsNkNBQTJEO0FBQzFGLFFBQUksOEJBQThCO0FBQ2xDLFFBQUksZ0JBQWdCO0FBQ3BCLFFBQUksdUJBQXVCO0FBQzNCLFFBQUksNEJBQTRCO0FBQ2hDLFFBQUksV0FBVztBQWlCZixJQUFBRCxRQUFPLFVBQVUsU0FBVSxTQUFTLFFBQVE7QUFDMUMsVUFBSSxTQUFTLFFBQVE7QUFDckIsVUFBSSxTQUFTLFFBQVE7QUFDckIsVUFBSSxTQUFTLFFBQVE7QUFDckIsVUFBSSxRQUFRLFFBQVEsS0FBSyxnQkFBZ0IsZ0JBQWdCO0FBQ3pELFVBQUksUUFBUTtBQUNWLGlCQUFTQztBQUFBLE1BQ1gsV0FBVyxRQUFRO0FBQ2pCLGlCQUFTQSxRQUFPLE1BQU0sS0FBSyxxQkFBcUIsUUFBUSxDQUFDLENBQUM7QUFBQSxNQUM1RCxPQUFPO0FBQ0wsaUJBQVNBLFFBQU8sTUFBTSxLQUFLQSxRQUFPLE1BQU0sRUFBRTtBQUFBLE1BQzVDO0FBQ0EsVUFBSSxPQUFRLE1BQUssT0FBTyxRQUFRO0FBQzlCLHlCQUFpQixPQUFPLEdBQUc7QUFDM0IsWUFBSSxRQUFRLGdCQUFnQjtBQUMxQix1QkFBYSx5QkFBeUIsUUFBUSxHQUFHO0FBQ2pELDJCQUFpQixjQUFjLFdBQVc7QUFBQSxRQUM1QyxNQUFPLGtCQUFpQixPQUFPLEdBQUc7QUFDbEMsaUJBQVMsU0FBUyxTQUFTLE1BQU0sVUFBVSxTQUFTLE1BQU0sT0FBTyxLQUFLLFFBQVEsTUFBTTtBQUVwRixZQUFJLENBQUMsVUFBVSxtQkFBbUIsUUFBVztBQUMzQyxjQUFJLE9BQU8sa0JBQWtCLE9BQU8sZUFBZ0I7QUFDcEQsb0NBQTBCLGdCQUFnQixjQUFjO0FBQUEsUUFDMUQ7QUFFQSxZQUFJLFFBQVEsUUFBUyxrQkFBa0IsZUFBZSxNQUFPO0FBQzNELHNDQUE0QixnQkFBZ0IsUUFBUSxJQUFJO0FBQUEsUUFDMUQ7QUFDQSxzQkFBYyxRQUFRLEtBQUssZ0JBQWdCLE9BQU87QUFBQSxNQUNwRDtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUN0REE7QUFBQSwwRkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxVQUFVO0FBS2QsSUFBQUEsUUFBTyxVQUFVLE1BQU0sV0FBVyxTQUFTLFFBQVEsVUFBVTtBQUMzRCxhQUFPLFFBQVEsUUFBUSxNQUFNO0FBQUEsSUFDL0I7QUFBQTtBQUFBOzs7QUNSQTtBQUFBLGtHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFDbEIsUUFBSSxVQUFVO0FBRWQsUUFBSSxhQUFhO0FBRWpCLFFBQUksMkJBQTJCLE9BQU87QUFHdEMsUUFBSSxvQ0FBb0MsZUFBZSxDQUFDLFdBQVk7QUFFbEUsVUFBSSxTQUFTLE9BQVcsUUFBTztBQUMvQixVQUFJO0FBRUYsZUFBTyxlQUFlLENBQUMsR0FBRyxVQUFVLEVBQUUsVUFBVSxNQUFNLENBQUMsRUFBRSxTQUFTO0FBQUEsTUFDcEUsU0FBUyxPQUFPO0FBQ2QsZUFBTyxpQkFBaUI7QUFBQSxNQUMxQjtBQUFBLElBQ0YsRUFBRTtBQUVGLElBQUFBLFFBQU8sVUFBVSxvQ0FBb0MsU0FBVSxHQUFHLFFBQVE7QUFDeEUsVUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLFFBQVEsRUFBRSxVQUFVO0FBQ2pFLGNBQU0sSUFBSSxXQUFXLDhCQUE4QjtBQUFBLE1BQ3JEO0FBQUUsYUFBTyxFQUFFLFNBQVM7QUFBQSxJQUN0QixJQUFJLFNBQVUsR0FBRyxRQUFRO0FBQ3ZCLGFBQU8sRUFBRSxTQUFTO0FBQUEsSUFDcEI7QUFBQTtBQUFBOzs7QUMxQkE7QUFBQSw4R0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxhQUFhO0FBQ2pCLFFBQUksbUJBQW1CO0FBRXZCLElBQUFBLFFBQU8sVUFBVSxTQUFVLElBQUk7QUFDN0IsVUFBSSxLQUFLLGlCQUFrQixPQUFNLFdBQVcsZ0NBQWdDO0FBQzVFLGFBQU87QUFBQSxJQUNUO0FBQUE7QUFBQTs7O0FDUEE7QUFBQTtBQUFBO0FBQ0EsUUFBSSxJQUFJO0FBQ1IsUUFBSSxXQUFXO0FBQ2YsUUFBSSxvQkFBb0I7QUFDeEIsUUFBSSxpQkFBaUI7QUFDckIsUUFBSSwyQkFBMkI7QUFDL0IsUUFBSSxRQUFRO0FBRVosUUFBSSxzQkFBc0IsTUFBTSxXQUFZO0FBQzFDLGFBQU8sQ0FBQyxFQUFFLEtBQUssS0FBSyxFQUFFLFFBQVEsV0FBWSxHQUFHLENBQUMsTUFBTTtBQUFBLElBQ3RELENBQUM7QUFJRCxRQUFJLGlDQUFpQyxXQUFZO0FBQy9DLFVBQUk7QUFFRixlQUFPLGVBQWUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxVQUFVLE1BQU0sQ0FBQyxFQUFFLEtBQUs7QUFBQSxNQUNoRSxTQUFTLE9BQU87QUFDZCxlQUFPLGlCQUFpQjtBQUFBLE1BQzFCO0FBQUEsSUFDRjtBQUVBLFFBQUksU0FBUyx1QkFBdUIsQ0FBQywrQkFBK0I7QUFJcEUsTUFBRSxFQUFFLFFBQVEsU0FBUyxPQUFPLE1BQU0sT0FBTyxHQUFHLFFBQVEsT0FBTyxHQUFHO0FBQUE7QUFBQSxNQUU1RCxNQUFNLFNBQVMsS0FBSyxNQUFNO0FBQ3hCLFlBQUksSUFBSSxTQUFTLElBQUk7QUFDckIsWUFBSSxNQUFNLGtCQUFrQixDQUFDO0FBQzdCLFlBQUksV0FBVyxVQUFVO0FBQ3pCLGlDQUF5QixNQUFNLFFBQVE7QUFDdkMsaUJBQVMsSUFBSSxHQUFHLElBQUksVUFBVSxLQUFLO0FBQ2pDLFlBQUUsR0FBRyxJQUFJLFVBQVUsQ0FBQztBQUNwQjtBQUFBLFFBQ0Y7QUFDQSx1QkFBZSxHQUFHLEdBQUc7QUFDckIsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDRDtDQXNDQyxTQUFTQyxTQUFTQyxHQUFHO0FBR3JCLFFBQU1DLFdBQVcsQ0FBQztBQUNsQkMsU0FBT0QsV0FBV0E7QUFLbEJBLFdBQVNFLE9BQU87Ozs7O0lBS2ZDLG9CQUFvQixDQUFDLGFBQWEsTUFBTTs7Ozs7Ozs7OztJQVV4Q0MsMEJBQTJCQyxTQUFRO0FBQ2xDLFlBQU1DLFNBQVM7QUFDZixZQUFNQyxTQUFTO0FBQ2YsWUFBTUMsUUFBUUYsT0FBT0csS0FBS0osR0FBRyxLQUFLRSxPQUFPRSxLQUFLSixHQUFHO0FBQ2pELFlBQU1LLFdBQVdILE9BQU9FLEtBQUtKLEdBQUc7QUFDaEMsVUFBSSxDQUFDRyxPQUFPO0FBQ1gsZUFBTztNQUNSO0FBQ0EsWUFBTUcsUUFBUVgsU0FBU1ksS0FBS0MsV0FBV0MsT0FBT0MsUUFBUVAsTUFBTSxDQUFDLENBQUM7QUFDOUQsVUFBSUcsVUFBVSxJQUFJO0FBQ2pCLGVBQU87TUFDUjtBQUVBLGFBQU9ELFdBQ0osQ0FBQ0YsTUFBTSxDQUFDLEdBQUdBLE1BQU0sQ0FBQyxJQUFJLEdBQUdBLE1BQU0sQ0FBQyxHQUFHQSxNQUFNLENBQUMsSUFBSSxHQUFHQSxNQUFNLENBQUMsQ0FBQyxJQUN6RCxDQUFDQSxNQUFNLENBQUMsR0FBR0EsTUFBTSxDQUFDLElBQUksR0FBR0EsTUFBTSxDQUFDLEdBQUdBLE1BQU0sQ0FBQyxHQUFHQSxNQUFNLENBQUMsQ0FBQztJQUN6RDtFQUNEO0FBT0FSLFdBQVNnQixnQkFBaUJDLFdBQVU7QUFDbkMsV0FBT0MsR0FBR0MsT0FBT0MsSUFBSSxjQUFjLEVBQUVDLFNBQVNKLEtBQUs7RUFDcEQ7QUFNQWpCLFdBQVNzQixjQUFjdEIsU0FBU2dCLGNBQWMsT0FBTyxLQUFLaEIsU0FBU2dCLGNBQWMsU0FBUztBQWExRmhCLFdBQVN1QixlQUFnQkMsYUFBWTtBQUNwQ0MsWUFBUUMsS0FDUCwrR0FDRDtBQUNBLFdBQU8xQixTQUFTMkIsR0FBR0osYUFBYUMsT0FBTztFQUN4QztBQVFBeEIsV0FBUzRCLGlCQUFpQixNQUFNO0FBQy9CLFVBQU1DLFFBQVE5QixFQUFFLE1BQU07QUFDdEIsV0FBTyxDQUFDLEVBQ1BtQixHQUFHQyxPQUFPQyxJQUFJLGNBQWMsS0FDNUJVLFNBQVNDLGNBQWMsZUFBZSxLQUN0Q0YsTUFBTUcsS0FBSyxVQUFVLEVBQUVDLFVBQ3ZCSixNQUFNRyxLQUFLLDhCQUE4QixFQUFFQztFQUU3QztBQU9BakMsV0FBU2tDLGVBQWVoQixHQUFHQyxPQUFPQyxJQUFJLFlBQVksRUFBRWUsUUFBUSxNQUFNLEdBQUc7QUFTckVuQyxXQUFTb0MsZ0JBQWlCQyxjQUFhO0FBQ3RDLFFBQUlBLGFBQWEsSUFBSTtBQUNwQixhQUFPO0lBQ1I7QUFDQSxVQUFNLENBQUNDLFNBQVMsSUFBSUQ7QUFDcEIsVUFBTUUsWUFBWXZDLFNBQVN3QyxPQUFPQyxhQUFhSixTQUFTSyxNQUFNLENBQUMsQ0FBQztBQUNoRSxRQUFJeEIsR0FBR3lCLE1BQU1DLGVBQWVOLFNBQVMsTUFBTUEsVUFBVU8sWUFBWSxHQUFHO0FBQ25FLGFBQUEsSUFBQUMsT0FBVzVCLEdBQUd5QixNQUFNQyxlQUFlTixTQUFTLENBQUMsRUFBQVEsT0FBR1IsVUFBVU8sWUFBWSxHQUFDLEdBQUEsRUFBQUMsT0FBSVAsU0FBUztJQUNyRjtBQUNBLFdBQU92QyxTQUFTd0MsT0FBT0MsYUFBYUgsU0FBUyxJQUFJQztFQUNsRDtBQVVBdkMsV0FBUytDLGFBQWNDLFdBQVU7QUFDaEMsVUFBTUMsV0FBV25CLFNBQVNvQix1QkFBdUI7QUFDakQsUUFBSSxDQUFDRixPQUFPO0FBQ1gsYUFBT0M7SUFDUjtBQUNBLFFBQUksQ0FBQ0UsTUFBTUMsUUFBUUosS0FBSyxHQUFHO0FBQzFCQSxjQUFRLENBQUNBLEtBQUs7SUFDZjtBQUFBLFFBQUFLLFlBQUFDLDJCQUNzQk4sS0FBQSxHQUFBTztBQUFBLFFBQUE7QUFBdEIsV0FBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQUMsUUFBNkI7QUFBQSxjQUFsQkMsVUFBQUosTUFBQUs7QUFDVixZQUFJRCxtQkFBbUJFLE1BQU07QUFDNUJaLG1CQUFTYSxZQUFZSCxPQUFPO1FBQzdCLE9BQU87QUFBQSxjQUFBSSxhQUFBVCwyQkFDYXZELEVBQUVpRSxVQUFVaEUsU0FBUytDLFdBQVdrQixnQkFBZ0JOLE9BQU8sQ0FBQyxDQUFBLEdBQUFPO0FBQUEsY0FBQTtBQUEzRSxpQkFBQUgsV0FBQVAsRUFBQSxHQUFBLEVBQUFVLFNBQUFILFdBQUFOLEVBQUEsR0FBQUMsUUFBOEU7QUFBQSxvQkFBbkVTLE9BQUFELE9BQUFOO0FBQ1ZYLHVCQUFTYSxZQUFZSyxJQUFJO1lBQzFCO1VBQUEsU0FBQUMsS0FBQTtBQUFBTCx1QkFBQU0sRUFBQUQsR0FBQTtVQUFBLFVBQUE7QUFBQUwsdUJBQUFPLEVBQUE7VUFBQTtRQUNEO01BQ0Q7SUFBQSxTQUFBRixLQUFBO0FBQUFmLGdCQUFBZ0IsRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQWYsZ0JBQUFpQixFQUFBO0lBQUE7QUFDQSxXQUFPckI7RUFDUjtBQU9BakQsV0FBUytDLFdBQVdrQixrQkFBbUJNLFVBQVM7QUFDL0MsVUFBTUMsS0FBSyxJQUFJeEUsU0FBU3lFLFNBQVNGLElBQUk7QUFFckNDLE9BQUdFLE9BQU8sVUFBVSxTQUFTO0FBQzdCRixPQUFHRyxVQUFVSCxHQUFHRyxRQUFReEMsUUFBUSwwQ0FBMEMsQ0FBQ3lDLEdBQUdDLFFBQVFDLFVBQVU7QUFDL0YsVUFBSSxDQUFDRCxRQUFRO0FBQ1pBLGlCQUFTQztNQUNWO0FBQ0EsYUFBQSwyQ0FBQWhDLE9BQWtENUIsR0FBRzZELEtBQUtDLE9BQU9ILE1BQU0sR0FBQyxXQUFBLEVBQUEvQixPQUFZK0IsT0FBTzFDLFFBQzFGLE1BQ0EsT0FDRCxHQUFDLElBQUEsRUFBQVcsT0FBS2dDLE9BQUssTUFBQTtJQUNaLENBQUM7QUFDRCxXQUFPTixHQUFHUyxPQUFPO0VBQ2xCO0FBZ0JBakYsV0FBU2tGLGlCQUFrQkMsZ0JBQWU7QUFDekMsUUFBSSxDQUFDaEMsTUFBTUMsUUFBUStCLFVBQVUsR0FBRztBQUMvQkEsbUJBQWEsQ0FBQ0EsVUFBVTtJQUN6QjtBQUNBLFVBQU1DLFVBQVUsQ0FBQTtBQUNoQixRQUFJQztBQUNKLGFBQUFDLEtBQUEsR0FBQUMsa0JBQTZCQyxPQUFPQyxRQUFRdkUsR0FBR0MsT0FBT0MsSUFBSSxnQkFBZ0IsQ0FBQyxHQUFBa0UsS0FBQUMsZ0JBQUF0RCxRQUFBcUQsTUFBRztBQUE5RSxZQUFXLENBQUNJLE1BQU1DLE1BQU0sSUFBQUosZ0JBQUFELEVBQUE7QUFDdkIsVUFBSUgsV0FBVzlELFNBQVNzRSxNQUFNLEdBQUc7QUFJaENQLGdCQUFRUSxLQUNQLENBQUMsR0FBR0YsSUFBSSxFQUNORyxJQUFLQyxVQUFTO0FBQ2QsaUJBQU85RixTQUFTb0MsY0FBYzBELElBQUk7UUFDbkMsQ0FBQyxFQUNBQyxLQUFLLEVBQUUsQ0FDVjtNQUNEO0lBQ0Q7QUFDQSxZQUFRWCxRQUFRbkQsUUFBQTtNQUNmLEtBQUs7QUFDSm9ELGdCQUFRO0FBQ1I7TUFDRCxLQUFLO0FBQ0osU0FBQ0EsS0FBSyxJQUFJRDtBQUNWO01BQ0Q7QUFDQ0MsZ0JBQUEsTUFBQXZDLE9BQWNzQyxRQUFRVyxLQUFLLEdBQUcsR0FBQyxHQUFBO0FBQy9CO0lBQ0Y7QUFDQSxXQUFPVjtFQUNSO0FBV0FyRixXQUFTZ0csWUFBWSxTQUFVQyxPQUFPQyxXQUFXO0FBQ2hELFNBQUtDLE9BQU8sSUFBSW5HLFNBQVNnRyxVQUFVckMsUUFBUTtNQUMxQ3lDLE1BQU07TUFDTkg7TUFDQUM7SUFDRCxDQUFDO0VBQ0Y7QUFPQWxHLFdBQVNnRyxVQUFVSyxVQUFVQyxTQUFTLFdBQVk7QUFDakQsVUFBTUMsTUFBTSxLQUFLSixLQUFLRyxPQUFPO0FBQzdCQyxRQUFJQyxRQUFRLENBQUM7QUFDYixXQUFPRDtFQUNSO0FBU0F2RyxXQUFTZ0csVUFBVUssVUFBVUksU0FBUyxTQUFVQyxNQUFNO0FBQ3JELFdBQU8sS0FBS1AsS0FBS00sT0FBT0MsSUFBSTtFQUM3QjtBQTBEQTFHLFdBQVNnRyxVQUFVckMsVUFBVSxTQUFVK0MsTUFBTTtBQUM1QyxTQUFLQSxPQUFPQTtBQUNaLFNBQUtDLFNBQVMsQ0FBQTtFQUNmO0FBS0EzRyxXQUFTZ0csVUFBVXJDLFFBQVFpRCxLQUFLO0FBU2hDNUcsV0FBU2dHLFVBQVVyQyxRQUFRMEMsVUFBVUksU0FBUyxTQUFVQyxNQUFNO0FBQzdELFFBQUlHO0FBQ0osUUFBSUgsZ0JBQWdCMUcsU0FBU2dHLFVBQVVyQyxTQUFTO0FBQy9Da0QsY0FBUUg7SUFDVCxPQUFPO0FBQ05HLGNBQVEsSUFBSTdHLFNBQVNnRyxVQUFVckMsUUFBUStDLElBQUk7SUFDNUM7QUFDQSxTQUFLQyxPQUFPZixLQUFLaUIsS0FBSztBQUN0QixXQUFPQTtFQUNSO0FBU0E3RyxXQUFTZ0csVUFBVXJDLFFBQVEwQyxVQUFVQyxTQUFTLFNBQVVRLG9CQUFvQjtBQUMzRSxVQUFNQyxjQUFjLEtBQUtDLFFBQVEsS0FBS04sTUFBTUksa0JBQWtCO0FBQzlELGFBQVNHLElBQUksR0FBR0EsSUFBSSxLQUFLTixPQUFPMUUsUUFBUSxFQUFFZ0YsR0FBRztBQUU1Q0Ysa0JBQVksQ0FBQyxFQUFFakQsWUFBWSxLQUFLNkMsT0FBT00sQ0FBQyxFQUFFWCxPQUFPLENBQUM7SUFDbkQ7QUFDQSxXQUFPUyxZQUFZLENBQUM7RUFDckI7QUFNQS9HLFdBQVNnRyxVQUFVckMsUUFBUTBDLFVBQVVXLFVBQVUsU0FBVU4sTUFBTVEsTUFBTTtBQUNwRSxRQUFJL0M7QUFDSixRQUFJZ0QsaUJBQWlCO0FBQ3JCLFFBQUlDO0FBQ0osVUFBTVIsS0FBQSxHQUFBOUQsT0FBUW9FLE9BQUEsR0FBQXBFLE9BQVVvRSxNQUFJLEdBQUEsSUFBTSxJQUFFLE9BQUEsRUFBQXBFLE9BQVE5QyxTQUFTZ0csVUFBVXJDLFFBQVFpRCxJQUFJO0FBQzNFLFFBQUlGLEtBQUtXLGFBQWEsQ0FBQ3JILFNBQVNzQixhQUFhO0FBRTVDb0YsV0FBS04sT0FBTztJQUNiO0FBQ0EsUUFBSWE7QUFDSixRQUFJSztBQUNKLFFBQUlDO0FBQ0osWUFBUWIsS0FBS04sTUFBQTtNQUNaLEtBQUs7QUFDSmpDLGVBQU9yQyxTQUFTMEYsY0FBYyxNQUFNO0FBQ3BDckQsYUFBS3NELFlBQVk7QUFFakJ0RCxhQUFLdUQsYUFBYSxVQUFVLHFCQUFxQjtBQUNqRCxZQUFJaEIsS0FBS1QsT0FBTztBQUNmOUIsZUFBS3dELGlCQUFpQmpCLEtBQUtSLGFBQWEsVUFBVVEsS0FBS1QsT0FBTyxLQUFLO1FBQ3BFO0FBQ0E7TUFDRCxLQUFLO0FBQ0o5QixlQUFPckMsU0FBU29CLHVCQUF1QjtBQUV2QyxlQUFPLENBQUNpQixNQUFNQSxJQUFJO01BQ25CLEtBQUssVUFBVTtBQUNkQSxlQUFPckMsU0FBUzBGLGNBQWMsS0FBSztBQUNuQ3JELGFBQUt1RCxhQUFhLE1BQUEsT0FBQTVFLE9BQWE4RCxFQUFFLENBQUU7QUFDbkMsWUFBSUYsS0FBS1UsT0FBTztBQUNmQSxrQkFBUWpELEtBQUtMLFlBQVloQyxTQUFTMEYsY0FBYyxPQUFPLENBQUM7QUFDeERKLGdCQUFNTSxhQUFhLE9BQU9kLEVBQUU7QUFDNUJRLGdCQUFNdEQsWUFBWTlELFNBQVMrQyxXQUFXMkQsS0FBS1UsS0FBSyxDQUFDO1FBRWxEO0FBRUEsY0FBTVEsU0FBU3pELEtBQUtMLFlBQVloQyxTQUFTMEYsY0FBYyxRQUFRLENBQUM7QUFDaEUsWUFBSWQsS0FBS1QsT0FBTztBQUNmMkIsaUJBQU9ELGlCQUFpQixVQUFVakIsS0FBS1QsT0FBTyxLQUFLO1FBQ3BEO0FBQ0EsWUFBSVMsS0FBS21CLFVBQVU7QUFDbEJELGlCQUFPRixhQUFhLFlBQVksVUFBVTtRQUMzQztBQUNBLFlBQUloQixLQUFLb0IsTUFBTTtBQUNkRixpQkFBT0YsYUFBYSxRQUFRaEIsS0FBS29CLElBQUk7UUFDdEM7QUFDQSxZQUFJcEIsS0FBS3FCLFVBQVU7QUFDbEJILGlCQUFPRyxXQUFXO1FBQ25CO0FBQ0FILGVBQU9GLGFBQWEsUUFBUWhCLEtBQUtoQixJQUFJO0FBQ3JDLFlBQUlnQixLQUFLc0IsTUFBTTtBQUNkLGVBQUtmLElBQUksR0FBR0EsSUFBSVAsS0FBS3NCLEtBQUsvRixRQUFRLEVBQUVnRixHQUFHO0FBQ3RDSyxzQkFBVVosS0FBS3NCLEtBQUtmLENBQUM7QUFDckIsZ0JBQUlLLFFBQVFVLE1BQU07QUFDakJWLHNCQUFRbEIsT0FBTztZQUNoQixPQUFPO0FBQ05rQixzQkFBUWxCLE9BQU87WUFDaEI7QUFDQW1CLHNCQUFVLEtBQUtQLFFBQVFNLE9BQU87QUFDOUJNLG1CQUFPOUQsWUFBWXlELFFBQVEsQ0FBQyxDQUFDO1VBQzlCO1FBQ0Q7QUFDQUoseUJBQWlCUztBQUNqQjtNQUNEO01BQ0EsS0FBSztBQUNKekQsZUFBT3JDLFNBQVMwRixjQUFjLFFBQVE7QUFDdENyRCxhQUFLOEQsU0FBU3ZCLEtBQUs5QztBQUNuQk8sYUFBS3VELGFBQWEsU0FBU2hCLEtBQUs5QyxLQUFLO0FBQ3JDLFlBQUk4QyxLQUFLd0IsVUFBVTtBQUNsQi9ELGVBQUt1RCxhQUFhLFlBQVksVUFBVTtRQUN6QztBQUNBLFlBQUloQixLQUFLcUIsVUFBVTtBQUNsQjVELGVBQUs0RCxXQUFXO1FBQ2pCO0FBRUEsWUFBSXJCLEtBQUt5QixRQUFRO0FBQ2hCaEUsZUFBS3VELGFBQWEsVUFBVSxFQUFFO1FBQy9CO0FBQ0F2RCxhQUFLdUQsYUFBYSxTQUFTaEIsS0FBS1UsS0FBSztBQUNyQ2pELGFBQUtMLFlBQVloQyxTQUFTc0csZUFBZTFCLEtBQUtVLEtBQUssQ0FBQztBQUNwRDtNQUNELEtBQUs7QUFDSmpELGVBQU9yQyxTQUFTMEYsY0FBYyxVQUFVO0FBQ3hDckQsYUFBS3VELGFBQWEsU0FBU2hCLEtBQUtVLEtBQUs7QUFDckMsWUFBSVYsS0FBS3NCLE1BQU07QUFDZCxlQUFLZixJQUFJLEdBQUdBLElBQUlQLEtBQUtzQixLQUFLL0YsUUFBUSxFQUFFZ0YsR0FBRztBQUN0Q0ssc0JBQVVaLEtBQUtzQixLQUFLZixDQUFDO0FBQ3JCSyxvQkFBUWxCLE9BQU87QUFDZm1CLHNCQUFVLEtBQUtQLFFBQVFNLE9BQU87QUFDOUJuRCxpQkFBS0wsWUFBWXlELFFBQVEsQ0FBQyxDQUFDO1VBQzVCO1FBQ0Q7QUFDQTtNQUNELEtBQUs7QUFDSnBELGVBQU9yQyxTQUFTMEYsY0FBYyxVQUFVO0FBQ3hDSixnQkFBUWpELEtBQUtMLFlBQVloQyxTQUFTMEYsY0FBYyxRQUFRLENBQUM7QUFDekRKLGNBQU10RCxZQUFZOUQsU0FBUytDLFdBQVcyRCxLQUFLVSxLQUFLLENBQUM7QUFDakQsWUFBSVYsS0FBS2hCLE1BQU07QUFDZHZCLGVBQUt1RCxhQUFhLFFBQVFoQixLQUFLaEIsSUFBSTtRQUNwQztBQUNBLFlBQUlnQixLQUFLcUIsVUFBVTtBQUNsQjVELGVBQUs0RCxXQUFXO1FBQ2pCO0FBQ0E7TUFDRCxLQUFLO01BQ0wsS0FBSztBQUNKNUQsZUFBT3JDLFNBQVMwRixjQUFjLEtBQUs7QUFDbkMsWUFBSWQsS0FBS3NCLE1BQU07QUFDZCxlQUFLZixJQUFJLEdBQUdBLElBQUlQLEtBQUtzQixLQUFLL0YsUUFBUSxFQUFFZ0YsR0FBRztBQUN0QyxrQkFBTW9CLFFBQUEsR0FBQXZGLE9BQVc4RCxJQUFFLEdBQUEsRUFBQTlELE9BQUltRSxDQUFDO0FBQ3hCSyxzQkFBVVosS0FBS3NCLEtBQUtmLENBQUM7QUFDckIsZ0JBQUlxQjtBQUNKLGdCQUFJaEIsUUFBUWxCLFNBQVMsVUFBVTtBQUU5QmtDLHVCQUFTbkUsS0FBS0wsWUFBWWhDLFNBQVMwRixjQUFjLElBQUksQ0FBQztBQUN0RGMscUJBQU94RSxZQUFZaEMsU0FBU3NHLGVBQWVkLFFBQVFGLEtBQUssQ0FBQztBQUN6RCxrQkFBSUUsUUFBUWlCLFNBQVM7QUFDcEJ2SSx5QkFBU2dHLFVBQVVyQyxRQUFRNkUsZ0JBQWdCRixRQUFRaEIsT0FBTztjQUMzRDtBQUNBO1lBQ0Q7QUFDQWdCLHFCQUFTbkUsS0FBS0wsWUFBWWhDLFNBQVMwRixjQUFjLEtBQUssQ0FBQztBQUV2RCxnQkFBSUYsUUFBUWEsUUFBUTtBQUNuQkcscUJBQU9aLGFBQWEsVUFBVSxFQUFFO1lBQ2pDO0FBQ0FILHNCQUFVZSxPQUFPeEUsWUFBWWhDLFNBQVMwRixjQUFjLE9BQU8sQ0FBQztBQUM1REQsb0JBQVFVLFNBQVNYLFFBQVExRDtBQUN6QjJELG9CQUFRRyxhQUFhLFNBQVNKLFFBQVExRCxLQUFLO0FBQzNDMkQsb0JBQVFHLGFBQWEsUUFBUWhCLEtBQUtOLElBQUk7QUFDdENtQixvQkFBUUcsYUFBYSxNQUFNVyxLQUFLO0FBQ2hDZCxvQkFBUUcsYUFBYSxRQUFRSixRQUFRNUIsUUFBUWdCLEtBQUtoQixJQUFJO0FBSXRELGdCQUFJNEIsUUFBUTVCLE1BQU07QUFDakI2QixzQkFBUUcsYUFBYSxlQUFlLGFBQWE7WUFDbEQ7QUFDQSxnQkFBSUosUUFBUW1CLFNBQVM7QUFDcEJsQixzQkFBUWtCLFVBQVU7WUFDbkI7QUFDQSxnQkFBSW5CLFFBQVFTLFVBQVU7QUFDckJSLHNCQUFRUSxXQUFXO1lBQ3BCO0FBQ0FYLG9CQUFRa0IsT0FBT3hFLFlBQVloQyxTQUFTMEYsY0FBYyxPQUFPLENBQUM7QUFDMURKLGtCQUFNdEQsWUFBWTlELFNBQVMrQyxXQUFXdUUsUUFBUUYsS0FBSyxDQUFDO0FBQ3BEQSxrQkFBTU0sYUFBYSxPQUFPVyxLQUFLO0FBQy9CLGdCQUFJZixRQUFRaUIsU0FBUztBQUNwQnZJLHVCQUFTZ0csVUFBVXJDLFFBQVE2RSxnQkFBZ0JwQixPQUFPRSxPQUFPO1lBQzFEO0FBRUEsZ0JBQUlBLFFBQVFvQixPQUFPO0FBQ2xCdEIsb0JBQU1NLGFBQWEsU0FBU0osUUFBUW9CLEtBQUs7WUFDMUM7QUFDQSxnQkFBSXpDO0FBQ0osZ0JBQUlxQixRQUFRcUIsVUFBVTtBQUNyQixrQkFBSUMsV0FBV3RCLFFBQVFxQjtBQUN2QixrQkFBSSxDQUFDeEYsTUFBTUMsUUFBUXdGLFFBQVEsR0FBRztBQUM3QkEsMkJBQVcsQ0FBQ0EsUUFBUTtjQUNyQjtBQUNBLG9CQUFNQyxjQUFjLElBQUk3SSxTQUFTZ0csVUFBVXJDLFFBQVE7Z0JBQ2xEeUMsTUFBTTtnQkFDTlEsSUFBQSxHQUFBOUQsT0FBTzhELElBQUUsR0FBQSxFQUFBOUQsT0FBSW1FLEdBQUMsV0FBQTtjQUNmLENBQUM7QUFBQSxrQkFBQTZCLGFBQUF4RiwyQkFDZ0JzRixRQUFBLEdBQUFHO0FBQUEsa0JBQUE7QUFBakIscUJBQUFELFdBQUF0RixFQUFBLEdBQUEsRUFBQXVGLFNBQUFELFdBQUFyRixFQUFBLEdBQUFDLFFBQTJCO0FBQUEsd0JBQWhCc0YsS0FBQUQsT0FBQW5GO0FBQ1Ysd0JBQU1xRixRQUFRO29CQUNiLEdBQUdEO2tCQUNKO0FBQ0Esc0JBQUksQ0FBQ0MsTUFBTTdDLE1BQU07QUFDaEI2QywwQkFBTTdDLE9BQU9NLEtBQUtOO2tCQUNuQjtBQUNBNkMsd0JBQU12RCxPQUFBLEdBQUE1QyxPQUFVd0UsUUFBUTVCLFFBQVFnQixLQUFLaEIsTUFBSSxHQUFBLEVBQUE1QyxPQUFJbUcsTUFBTXZELElBQUk7QUFDdkRtRCw4QkFBWXBDLE9BQU93QyxLQUFLO2dCQUN6QjtjQUFBLFNBQUE3RSxLQUFBO0FBQUEwRSwyQkFBQXpFLEVBQUFELEdBQUE7Y0FBQSxVQUFBO0FBQUEwRSwyQkFBQXhFLEVBQUE7Y0FBQTtBQUNBLG9CQUFNcUUsV0FBV0UsWUFBWXZDLE9BQU8rQixLQUFLO0FBQ3pDTSx1QkFBU2xCLFlBQVk7QUFDckJGLHNCQUFRb0IsV0FBV0E7QUFDbkJwQixzQkFBUTJCLFFBQVE7QUFDaEJqRCxzQkFBUzVCLE9BQU07QUFDZCxvQkFBSUEsRUFBRVEsT0FBTzRELFNBQVM7QUFDckJwRSxvQkFBRVEsT0FBT3NFLFdBQVdyRixZQUFZTyxFQUFFUSxPQUFPOEQsUUFBUTtBQUNqRCxzQkFBSXRFLEVBQUVRLE9BQU91QixTQUFTLFNBQVM7QUFDOUIsMEJBQU07c0JBQUNWO29CQUFJLElBQUlyQixFQUFFUTtBQUNqQix3QkFBSVIsRUFBRVEsT0FBT3VFLEtBQUs1QyxNQUFNZCxJQUFJLE1BQU0sUUFBVztBQUM1Q3JCLHdCQUFFUSxPQUFPdUUsS0FBSzVDLE1BQU1kLElBQUksRUFBRXlELFdBQVdFLFlBQ3BDaEYsRUFBRVEsT0FBT3VFLEtBQUs1QyxNQUFNZCxJQUFJLEVBQUVpRCxRQUMzQjtvQkFDRDtBQUNBdEUsc0JBQUVRLE9BQU91RSxLQUFLNUMsTUFBTWQsSUFBSSxJQUFJckIsRUFBRVE7a0JBQy9CO2dCQUNELE9BQU87QUFDTlIsb0JBQUVRLE9BQU9zRSxXQUFXRSxZQUFZaEYsRUFBRVEsT0FBTzhELFFBQVE7Z0JBQ2xEO2NBQ0Q7QUFDQXBCLHNCQUFRSSxpQkFBaUIsVUFBVTFCLE9BQU8sSUFBSTtBQUM5QyxrQkFBSXFCLFFBQVFtQixTQUFTO0FBQ3BCbEIsd0JBQVE0QixXQUFXckYsWUFBWTZFLFFBQVE7Y0FDeEM7WUFDRCxXQUFXakMsS0FBS04sU0FBUyxTQUFTO0FBQ2pDSCxzQkFBUzVCLE9BQU07QUFDZCxvQkFBSUEsRUFBRVEsT0FBTzRELFNBQVM7QUFDckIsd0JBQU07b0JBQUMvQztrQkFBSSxJQUFJckIsRUFBRVE7QUFDakIsc0JBQUlSLEVBQUVRLE9BQU91RSxLQUFLNUMsTUFBTWQsSUFBSSxNQUFNLFFBQVc7QUFDNUNyQixzQkFBRVEsT0FBT3VFLEtBQUs1QyxNQUFNZCxJQUFJLEVBQUV5RCxXQUFXRSxZQUNwQ2hGLEVBQUVRLE9BQU91RSxLQUFLNUMsTUFBTWQsSUFBSSxFQUFFaUQsUUFDM0I7a0JBQ0Q7QUFDQSx5QkFBT3RFLEVBQUVRLE9BQU91RSxLQUFLNUMsTUFBTWQsSUFBSTtnQkFDaEM7Y0FDRDtBQUNBNkIsc0JBQVFJLGlCQUFpQixVQUFVMUIsT0FBTyxJQUFJO1lBQy9DO0FBRUEsZ0JBQUlTLEtBQUtULE9BQU87QUFDZnNCLHNCQUFRSSxpQkFBaUIsVUFBVWpCLEtBQUtULE9BQU8sS0FBSztZQUNyRCxXQUFXcUIsUUFBUXJCLE9BQU87QUFDekJzQixzQkFBUUksaUJBQWlCLFVBQVVMLFFBQVFyQixPQUFPLElBQUk7WUFDdkQ7VUFDRDtRQUNEO0FBQ0EsWUFBSVMsS0FBSzRDLHFCQUFxQjVDLEtBQUtOLFNBQVMsWUFBWTtBQUN2RHBHLG1CQUFTdUosMEJBQTBCdkosU0FBU2dHLFVBQVV3RCxZQUFZckYsTUFBTXVDLEtBQUtoQixJQUFJLENBQUM7UUFDbkY7QUFDQTtNQUVELEtBQUs7TUFDTCxLQUFLO0FBQ0p2QixlQUFPckMsU0FBUzBGLGNBQWMsS0FBSztBQUNuQ3JELGFBQUt1RCxhQUFhLE1BQUEsT0FBQTVFLE9BQWE4RCxFQUFFLENBQUU7QUFFbkMsWUFBSUYsS0FBS3lCLFFBQVE7QUFDaEJoRSxlQUFLdUQsYUFBYSxVQUFVLEVBQUU7UUFDL0I7QUFDQSxZQUFJaEIsS0FBS1UsT0FBTztBQUNmQSxrQkFBUWpELEtBQUtMLFlBQVloQyxTQUFTMEYsY0FBYyxPQUFPLENBQUM7QUFDeERKLGdCQUFNdEQsWUFBWTlELFNBQVMrQyxXQUFXMkQsS0FBS1UsS0FBSyxDQUFDO0FBQ2pEQSxnQkFBTU0sYUFBYSxPQUFPaEIsS0FBS0UsTUFBTUEsRUFBRTtRQUV4QztBQUVBVyxrQkFBVXBELEtBQUtMLFlBQVloQyxTQUFTMEYsY0FBYyxPQUFPLENBQUM7QUFFMUQsWUFBSWQsS0FBSzlDLE9BQU87QUFDZjJELGtCQUFRRyxhQUFhLFNBQVNoQixLQUFLOUMsS0FBSztRQUN6QztBQUNBLFlBQUk4QyxLQUFLK0MsYUFBYTtBQUNyQmxDLGtCQUFRRyxhQUFhLGVBQWVoQixLQUFLK0MsV0FBVztRQUNyRDtBQUNBbEMsZ0JBQVFHLGFBQWEsUUFBUWhCLEtBQUtoQixJQUFJO0FBQ3RDLFlBQUlnQixLQUFLTixTQUFTLFNBQVM7QUFDMUJtQixrQkFBUUcsYUFBYSxRQUFRLE1BQU07UUFDcEMsT0FBTztBQUNOSCxrQkFBUUcsYUFBYSxRQUFRLFFBQVE7QUFDckMsbUJBQUFnQyxNQUFBLEdBQUFDLE9BQWtCLENBQUMsT0FBTyxPQUFPLFFBQVEsTUFBTSxHQUFBRCxNQUFBQyxLQUFBMUgsUUFBQXlILE9BQUc7QUFBbEQsa0JBQVdFLE1BQUFELEtBQUFELEdBQUE7QUFDVixnQkFBSWhELEtBQUtrRCxHQUFHLEdBQUc7QUFDZHJDLHNCQUFRRyxhQUFha0MsS0FBS2xELEtBQUtrRCxHQUFHLENBQUM7WUFDcEM7VUFDRDtRQUNEO0FBQ0EsaUJBQUFDLE1BQUEsR0FBQUMsUUFBa0IsQ0FBQyxTQUFTLFFBQVEsZUFBZSxXQUFXLEdBQUFELE1BQUFDLE1BQUE3SCxRQUFBNEgsT0FBRztBQUFqRSxnQkFBV0QsTUFBQUUsTUFBQUQsR0FBQTtBQUNWLGNBQUluRCxLQUFLa0QsR0FBRyxHQUFHO0FBQ2RyQyxvQkFBUUcsYUFBYWtDLEtBQUtsRCxLQUFLa0QsR0FBRyxDQUFDO1VBQ3BDO1FBQ0Q7QUFDQSxpQkFBQUcsTUFBQSxHQUFBQyxRQUFrQixDQUFDLFlBQVksWUFBWSxVQUFVLEdBQUFELE1BQUFDLE1BQUEvSCxRQUFBOEgsT0FBRztBQUF4RCxnQkFBV0gsTUFBQUksTUFBQUQsR0FBQTtBQUNWLGNBQUlyRCxLQUFLa0QsR0FBRyxHQUFHO0FBQ2RyQyxvQkFBUUcsYUFBYWtDLEtBQUtBLEdBQUc7VUFDOUI7UUFDRDtBQUNBLFlBQUlsRCxLQUFLVCxPQUFPO0FBQ2ZzQixrQkFBUUksaUJBQWlCLFNBQVNqQixLQUFLVCxPQUFPLEtBQUs7UUFDcEQ7QUFDQWtCLHlCQUFpQkk7QUFDakI7TUFDRCxLQUFLLFlBQVk7QUFDaEIsY0FBTTBDLE1BQU12RCxLQUFLdUQsT0FBTztBQUN4QixjQUFNQyxNQUFNeEQsS0FBS3dELE9BQU9DLE9BQU9DO0FBQy9CakcsZUFBT3JDLFNBQVMwRixjQUFjLEtBQUs7QUFDbkNKLGdCQUFRakQsS0FBS0wsWUFBWWhDLFNBQVMwRixjQUFjLElBQUksQ0FBQztBQUNyREosY0FBTXRELFlBQVk5RCxTQUFTK0MsV0FBVzJELEtBQUtVLEtBQUssQ0FBQztBQUNqRCxjQUFNaUQsV0FBV2xHLEtBQUtMLFlBQVloQyxTQUFTMEYsY0FBYyxLQUFLLENBQUM7QUFDL0QsY0FBTThDLE9BQU8sS0FBS3RELFFBQVE7VUFDekJaLE1BQU07VUFDTmdCLE9BQU87VUFDUFcsVUFBVWtDLE9BQU9DO1VBQ2pCakUsT0FBUTVCLE9BQU07QUFDYixrQkFBTWtHLFVBQVUsSUFBSXZLLFNBQVNnRyxVQUFVckMsUUFBUVUsRUFBRVEsT0FBTzJGLE9BQU87QUFDL0RuRyxjQUFFUSxPQUFPNEYsS0FBSzNHLFlBQVl5RyxRQUFRakUsT0FBTyxDQUFDO0FBQzFDLGdCQUFJLEVBQUVqQyxFQUFFUSxPQUFPNkYsV0FBV3JHLEVBQUVRLE9BQU9xRixLQUFLO0FBQ3ZDN0YsZ0JBQUVRLE9BQU9rRCxXQUFXO1lBQ3JCO0FBQ0ExRCxjQUFFc0csZ0JBQWdCO1VBQ25CO1FBQ0QsQ0FBQztBQUNEeEcsYUFBS0wsWUFBWXdHLEtBQUssQ0FBQyxDQUFDO0FBQ3hCLGNBQU0sQ0FBQSxFQUFHTSxVQUFVLElBQUlOO0FBQ3ZCLGNBQU1FLFVBQVU7VUFDZnBFLE1BQU07VUFDTmdCLE9BQU9WLEtBQUttRSxZQUFZbkUsS0FBS1U7VUFDN0IxQixNQUFNZ0IsS0FBS2hCO1VBQ1g5QixPQUFPOEMsS0FBSzlDO1VBQ1prRSxNQUFNcEIsS0FBS29CO1VBQ1hnRCxRQUFRO1VBQ1JDLFdBQVdyRSxLQUFLcUU7VUFDaEI5RSxPQUFPUyxLQUFLVDtRQUNiO0FBQ0EsYUFBS2dCLElBQUksR0FBR0EsSUFBSWdELEtBQUssRUFBRWhELEdBQUc7QUFDekIsZ0JBQU0rRCxPQUFPLElBQUloTCxTQUFTZ0csVUFBVXJDLFFBQVE2RyxPQUFPO0FBQ25ESCxtQkFBU3ZHLFlBQVlrSCxLQUFLMUUsT0FBTyxDQUFDO1FBQ25DO0FBQ0FrRSxnQkFBUU0sU0FBUztBQUNqQk4sZ0JBQVFTLGFBQWFMO0FBQ3JCSixnQkFBUVUsV0FBV2I7QUFDbkJPLG1CQUFXSixVQUFVQTtBQUNyQkksbUJBQVdILE9BQU9KO0FBQ2xCTyxtQkFBV1YsTUFBTUEsTUFBTUQ7QUFDdkJXLG1CQUFXRixVQUFVO0FBQ3JCO01BQ0Q7TUFDQSxLQUFLO0FBRUp2RyxlQUFPckMsU0FBUzBGLGNBQWMsS0FBSztBQUNuQyxZQUFJZCxLQUFLVSxPQUFPO0FBQ2ZBLGtCQUFRakQsS0FBS0wsWUFBWWhDLFNBQVMwRixjQUFjLE9BQU8sQ0FBQztBQUN4REosZ0JBQU10RCxZQUFZaEMsU0FBU3NHLGVBQWUxQixLQUFLVSxLQUFLLENBQUM7QUFDckRBLGdCQUFNTSxhQUFhLE9BQU9kLEVBQUU7UUFFN0I7QUFFQVcsa0JBQVVwRCxLQUFLTCxZQUFZaEMsU0FBUzBGLGNBQWMsT0FBTyxDQUFDO0FBQzFELFlBQUlkLEtBQUs5QyxPQUFPO0FBQ2YyRCxrQkFBUUcsYUFBYSxTQUFTaEIsS0FBSzlDLEtBQUs7UUFDekM7QUFDQTJELGdCQUFRRyxhQUFhLFFBQVFoQixLQUFLaEIsSUFBSTtBQUN0QzZCLGdCQUFRRyxhQUFhLFFBQVEsTUFBTTtBQUNuQyxZQUFJaEIsS0FBS29CLE1BQU07QUFDZFAsa0JBQVFHLGFBQWEsUUFBUWhCLEtBQUtvQixJQUFJO1FBQ3ZDO0FBQ0EsWUFBSXBCLEtBQUtxRSxXQUFXO0FBQ25CeEQsa0JBQVFHLGFBQWEsYUFBYWhCLEtBQUtxRSxTQUFTO1FBQ2pEO0FBQ0EsWUFBSXJFLEtBQUtULE9BQU87QUFDZnNCLGtCQUFRSSxpQkFBaUIsU0FBU2pCLEtBQUtULE9BQU8sS0FBSztRQUNwRDtBQUNBLFlBQUlTLEtBQUtvRSxRQUFRO0FBQ2hCLGdCQUFNQSxTQUFTLEtBQUs5RCxRQUFRO1lBQzNCWixNQUFNO1lBQ05nQixPQUFPO1lBQ1BuQixPQUFRNUIsT0FBTTtBQUNiLG9CQUFNMkQsT0FBTzNELEVBQUVRLE9BQU9xRztBQUN0QixvQkFBTUMsUUFBUTlHLEVBQUVRLE9BQU91RztBQUN2QixvQkFBTWQsT0FBT2pHLEVBQUVRLE9BQU9vRztBQUN0QmpELG1CQUFLcUIsWUFBWThCLEtBQUs7QUFDdEIsZ0JBQUViLEtBQUtJO0FBQ1BKLG1CQUFLZSxnQkFBZ0IsVUFBVTtBQUMvQmhILGdCQUFFc0csZ0JBQWdCO1lBQ25CO1VBQ0QsQ0FBQztBQUNEeEcsZUFBS0wsWUFBWWdILE9BQU8sQ0FBQyxDQUFDO0FBQzFCLGdCQUFNLENBQUEsRUFBR1EsWUFBWSxJQUFJUjtBQUN6QlEsdUJBQWFGLFlBQVlqSDtBQUN6Qm1ILHVCQUFhSixXQUFXeEUsS0FBS3dFO0FBQzdCSSx1QkFBYUwsYUFBYXZFLEtBQUt1RTtRQUNoQztBQUNBO01BQ0QsS0FBSztBQUNKOUcsZUFBT3JDLFNBQVMwRixjQUFjLE9BQU87QUFDckNyRCxhQUFLdUQsYUFBYSxRQUFRLFFBQVE7QUFDbEN2RCxhQUFLOEQsU0FBU3ZCLEtBQUs5QztBQUNuQk8sYUFBS3VELGFBQWEsU0FBU2hCLEtBQUs5QyxLQUFLO0FBQ3JDTyxhQUFLdUQsYUFBYSxRQUFRaEIsS0FBS2hCLElBQUk7QUFDbkM7TUFDRCxLQUFLO0FBQ0p2QixlQUFPckMsU0FBUzBGLGNBQWMsSUFBSTtBQUNsQ3JELGFBQUtMLFlBQVk5RCxTQUFTK0MsV0FBVzJELEtBQUtVLEtBQUssQ0FBQztBQUNoRDtNQUNELEtBQUs7QUFDSmpELGVBQU9yQyxTQUFTMEYsY0FBYyxLQUFLO0FBQ25DLFlBQUlkLEtBQUtoQixNQUFNO0FBQ2R2QixlQUFLdUQsYUFBYSxRQUFRaEIsS0FBS2hCLElBQUk7UUFDcEM7QUFDQSxZQUFJZ0IsS0FBS1UsT0FBTztBQUNmLGdCQUFNbUUsU0FBU3pKLFNBQVMwRixjQUFjLE1BQU07QUFDNUMrRCxpQkFBTzlELFlBQVk7QUFDbkI4RCxpQkFBT3pILFlBQVk5RCxTQUFTK0MsV0FBVzJELEtBQUtVLEtBQUssQ0FBQztBQUNsRGpELGVBQUtMLFlBQVl5SCxNQUFNO1FBQ3hCO0FBQ0E7TUFDRCxLQUFLO0FBQ0pwSCxlQUFPckMsU0FBUzBGLGNBQWMsTUFBTTtBQUNwQ0wseUJBQWlCaEQsS0FBS0wsWUFBWWhDLFNBQVMwRixjQUFjLE9BQU8sQ0FBQztBQUNqRUwsdUJBQWVPLGFBQWEsUUFBUSxRQUFRO0FBQzVDLFlBQUloQixLQUFLVSxPQUFPO0FBQ2ZELHlCQUFlTyxhQUFhLFNBQVNoQixLQUFLVSxLQUFLO1FBQ2hEO0FBQ0FELHVCQUFlTyxhQUFhLFFBQVFoQixLQUFLaEIsUUFBUSxRQUFRO0FBQ3pELFlBQUlnQixLQUFLcUIsVUFBVTtBQUNsQloseUJBQWVZLFdBQVc7UUFDM0I7QUFDQTtNQUNELEtBQUs7QUFDSjVELGVBQU9yQyxTQUFTMEYsY0FBYyxNQUFNO0FBQ3BDTCx5QkFBaUJoRCxLQUFLTCxZQUFZaEMsU0FBUzBGLGNBQWMsT0FBTyxDQUFDO0FBQ2pFTCx1QkFBZU8sYUFBYSxRQUFRLFFBQVE7QUFDNUMsWUFBSWhCLEtBQUtVLE9BQU87QUFDZkQseUJBQWVPLGFBQWEsU0FBU2hCLEtBQUtVLEtBQUs7UUFDaEQ7QUFDQUQsdUJBQWVPLGFBQWEsUUFBUWhCLEtBQUtoQixJQUFJO0FBQzdDLFlBQUlnQixLQUFLcUIsVUFBVTtBQUNsQloseUJBQWVZLFdBQVc7UUFDM0I7QUFDQSxZQUFJckIsS0FBS1QsT0FBTztBQUNma0IseUJBQWVRLGlCQUFpQixTQUFTakIsS0FBS1QsT0FBTyxLQUFLO1FBQzNEO0FBQ0E7TUFDRCxLQUFLO0FBQ0o5QixlQUFPckMsU0FBUzBGLGNBQWMsS0FBSztBQUNuQ3JELGFBQUt1RCxhQUFhLE1BQUEsT0FBQTVFLE9BQWE4RCxFQUFFLENBQUU7QUFFbkMsWUFBSUYsS0FBS3lCLFFBQVE7QUFDaEJoRSxlQUFLdUQsYUFBYSxVQUFVLEVBQUU7UUFDL0I7QUFDQSxZQUFJaEIsS0FBS1UsT0FBTztBQUNmQSxrQkFBUWpELEtBQUtMLFlBQVloQyxTQUFTMEYsY0FBYyxJQUFJLENBQUM7QUFDckQsZ0JBQU1nRSxlQUFlMUosU0FBUzBGLGNBQWMsT0FBTztBQUNuRGdFLHVCQUFhMUgsWUFBWTlELFNBQVMrQyxXQUFXMkQsS0FBS1UsS0FBSyxDQUFDO0FBQ3hEb0UsdUJBQWE5RCxhQUFhLE9BQU9oQixLQUFLRSxNQUFNQSxFQUFFO0FBQzlDUSxnQkFBTXRELFlBQVkwSCxZQUFZO1FBQy9CO0FBQ0FqRSxrQkFBVXBELEtBQUtMLFlBQVloQyxTQUFTMEYsY0FBYyxVQUFVLENBQUM7QUFDN0RELGdCQUFRRyxhQUFhLFFBQVFoQixLQUFLaEIsSUFBSTtBQUN0QyxZQUFJZ0IsS0FBSytFLE1BQU07QUFDZGxFLGtCQUFRRyxhQUFhLFFBQVFoQixLQUFLK0UsSUFBSTtRQUN2QztBQUNBLFlBQUkvRSxLQUFLZ0YsTUFBTTtBQUNkbkUsa0JBQVFHLGFBQWEsUUFBUWhCLEtBQUtnRixJQUFJO1FBQ3ZDO0FBQ0EsWUFBSWhGLEtBQUtxQixVQUFVO0FBQ2xCUixrQkFBUVEsV0FBVztRQUNwQjtBQUNBLFlBQUlyQixLQUFLaUYsVUFBVTtBQUNsQnBFLGtCQUFRRyxhQUFhLFlBQVksVUFBVTtRQUM1QztBQUNBLFlBQUloQixLQUFLa0YsVUFBVTtBQUNsQnJFLGtCQUFRRyxhQUFhLFlBQVksVUFBVTtRQUM1QztBQUNBLFlBQUloQixLQUFLOUMsT0FBTztBQUNmMkQsa0JBQVEzRCxRQUFROEMsS0FBSzlDO1FBQ3RCO0FBRUEsWUFBSThDLEtBQUsrQyxhQUFhO0FBQ3JCbEMsa0JBQVFrQyxjQUFjL0MsS0FBSytDO1FBQzVCO0FBQ0F0Qyx5QkFBaUJJO0FBQ2pCO01BQ0Q7QUFDQyxjQUFNLElBQUlzRSxNQUFBLDRDQUFBL0ksT0FBa0Q0RCxLQUFLTixLQUFLMEYsU0FBUyxDQUFDLENBQUU7SUFDcEY7QUFDQSxRQUFJLENBQUMzRSxnQkFBZ0I7QUFDcEJBLHVCQUFpQmhEO0lBQ2xCO0FBQ0EsUUFBSXVDLEtBQUs2QixTQUFTO0FBQ2pCdkksZUFBU2dHLFVBQVVyQyxRQUFRNkUsZ0JBQWdCcEIsU0FBU2pELE1BQU11QyxJQUFJO0lBQy9EO0FBQ0EsUUFBSUEsS0FBS3FGLE9BQU87QUFDZjVFLHFCQUFlNEUsUUFBUXJGLEtBQUtxRjtJQUM3QjtBQUNBLFFBQUlyRixLQUFLc0YsT0FBTztBQUNmak0sUUFBRW9ILGNBQWMsRUFBRVQsS0FBS0EsS0FBS3NGLEtBQUs7SUFDbEM7QUFDQSxRQUFJdEYsS0FBS2dDLE9BQU87QUFDZnZCLHFCQUFlTyxhQUFhLFNBQVNoQixLQUFLZ0MsS0FBSztJQUNoRDtBQUNBLFFBQUloQyxLQUFLZSxXQUFXO0FBQ25CTixxQkFBZU0sWUFBWU4sZUFBZU0sWUFBQSxHQUFBM0UsT0FDcENxRSxlQUFlTSxXQUFTLEdBQUEsRUFBQTNFLE9BQUk0RCxLQUFLZSxTQUFTLElBQzdDZixLQUFLZTtJQUNUO0FBQ0FOLG1CQUFlTyxhQUFhLE1BQU1oQixLQUFLRSxNQUFNQSxFQUFFO0FBQy9DLFdBQU8sQ0FBQ3pDLE1BQU1nRCxjQUFjO0VBQzdCO0FBU0FuSCxXQUFTZ0csVUFBVXJDLFFBQVE2RSxrQkFBa0IsQ0FBQ3JFLE1BQU11QyxTQUFTO0FBQzVELFVBQU11RixnQkFBZ0I5SCxLQUFLTCxZQUFZaEMsU0FBUzBGLGNBQWMsTUFBTSxDQUFDO0FBQ3JFeUUsa0JBQWN4RSxZQUFZO0FBQzFCd0Usa0JBQWNDLFFBQVF4RixLQUFLNkI7QUFDM0IwRCxrQkFBY25JLFlBQVloQyxTQUFTc0csZUFBZSxHQUFHLENBQUM7QUFDdERySSxNQUFFa00sYUFBYSxFQUFFMUQsUUFBUTtNQUN4QjRELFVBQVU7UUFDVEMsSUFBSTtRQUNKQyxJQUFJO1FBQ0pDLFdBQVc7TUFDWjs7TUFFQUMsY0FBYztJQUNmLENBQUM7RUFDRjtBQVdBdk0sV0FBU2dHLFVBQVV3RyxlQUFnQnBELFVBQVM7QUFDM0MsVUFBTW1DLFNBQVMsQ0FBQztBQUFBLFFBQUFrQixhQUFBbkosMkJBQ0k4RixLQUFLc0QsUUFBQSxHQUFBQztBQUFBLFFBQUE7QUFBekIsV0FBQUYsV0FBQWpKLEVBQUEsR0FBQSxFQUFBbUosU0FBQUYsV0FBQWhKLEVBQUEsR0FBQUMsUUFBbUM7QUFBQSxjQUF4QmtKLFFBQUFELE9BQUEvSTtBQUNWLFlBQUlnSixNQUFNN0UsWUFBWSxDQUFDNkUsTUFBTWxILFFBQVEsQ0FBQ2tILE1BQU14RyxRQUFRd0csTUFBTXhHLFNBQVMsWUFBWXdHLE1BQU14RyxTQUFTLFVBQVU7QUFDdkc7UUFDRDtBQUdBLGNBQU15RyxnQkFBZ0JELE1BQU1sSCxLQUFLaEQsTUFBTWtLLE1BQU1sSCxLQUFLM0UsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNsRSxnQkFBUTZMLE1BQU14RyxNQUFBO1VBQ2IsS0FBSztBQUNKLGdCQUFJd0csTUFBTW5FLFNBQVM7QUFDbEI4QyxxQkFBT3NCLGFBQWEsSUFBSUQsTUFBTWhKO1lBQy9CO0FBQ0E7VUFDRCxLQUFLO0FBQ0osZ0JBQUlnSixNQUFNRSxRQUFRQyxRQUFRO0FBQ3pCeEIscUJBQU9zQixhQUFhLElBQUlELE1BQU1uRTtZQUMvQixPQUFPO0FBQ044QyxxQkFBT3NCLGFBQWEsTUFBcEJ0QixPQUFPc0IsYUFBYSxJQUFNLENBQUE7QUFDMUIsa0JBQUlELE1BQU1uRSxTQUFTO0FBQ2xCOEMsdUJBQU9zQixhQUFhLEVBQUVqSCxLQUFLZ0gsTUFBTWhKLEtBQUs7Y0FDdkM7WUFDRDtBQUNBO1VBQ0QsS0FBSztBQUNKMkgsbUJBQU9zQixhQUFhLElBQUk5TSxFQUFFNk0sS0FBSyxFQUFFSSxJQUFJO0FBQ3JDO1VBQ0QsS0FBSztVQUNMLEtBQUs7QUFDSnpCLG1CQUFPc0IsYUFBYSxJQUFJRCxNQUFNaEosTUFBTXFKLEtBQUs7QUFDekM7VUFDRDtBQUVDLGdCQUFJTCxNQUFNaEosT0FBTztBQUNoQjJILHFCQUFPc0IsYUFBYSxJQUFJRCxNQUFNaEo7WUFDL0I7QUFDQTtRQUNGO01BQ0Q7SUFBQSxTQUFBUSxLQUFBO0FBQUFxSSxpQkFBQXBJLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUFxSSxpQkFBQW5JLEVBQUE7SUFBQTtBQUNBLFdBQU9pSDtFQUNSO0FBU0F2TCxXQUFTZ0csVUFBVXdELGNBQWMsQ0FBQ0osTUFBTThELGNBQWM7QUFDckQsVUFBTUMsUUFBUXBOLEVBQUVxSixJQUFJO0FBQ3BCOEQsZ0JBQVluTixFQUFFcU4sZUFBZUYsU0FBUztBQUN0QyxRQUFJRyxZQUFZRixNQUFNbkwsS0FBQSxVQUFBYyxPQUFlb0ssV0FBUyxJQUFBLENBQUk7QUFDbEQsUUFBSUcsVUFBVXBMLFNBQVMsR0FBRztBQUN6QixhQUFPb0wsVUFBVUMsUUFBUTtJQUMxQjtBQUNBRCxnQkFBWUYsTUFBTW5MLEtBQUEsSUFBQWMsT0FBU29LLFNBQVMsQ0FBRTtBQUN0QyxXQUFPRyxVQUFVQyxRQUFRO0VBQzFCO0FBVUF0TixXQUFTZ0csVUFBVXVILHFCQUFxQixDQUFDQyxjQUFjNUosVUFBVTtBQUNoRSxVQUFNNkosUUFBUUQsYUFBYUUsT0FBUS9KLGFBQVk7QUFDOUMsYUFBT0EsUUFBUUMsVUFBVUE7SUFDMUIsQ0FBQztBQUNELFFBQUk2SixNQUFNeEwsU0FBUyxHQUFHO0FBQ3JCLGFBQU93TCxNQUFNLENBQUM7SUFDZjtBQUNBLFdBQU87RUFDUjtBQVNBek4sV0FBU2dHLFVBQVUySCxzQkFBdUJoSyxhQUFZO0FBRXJELFFBQ0NBLG1CQUFtQmlLLHVCQUNuQmpLLG1CQUFtQmtLLGtCQUNuQmxLLG1CQUFtQm1LLG9CQUNsQjtBQUNELGFBQU9uSztJQUNSO0FBRUEsV0FBT0EsUUFBUXdGO0VBQ2hCO0FBU0FuSixXQUFTZ0csVUFBVStILHdCQUF5QnBLLGFBQVk7QUFFdkQsUUFDQ0EsUUFBUXlDLFNBQVMsWUFDakJ6QyxRQUFReUMsU0FBUyxZQUNqQnpDLG1CQUFtQmtLLGtCQUNuQmxLLG1CQUFtQm1LLG9CQUNsQjtBQUNELGFBQU9uSztJQUVSLFdBQVdBLG1CQUFtQmlLLHFCQUFxQjtBQUNsRCxhQUFPakssUUFBUTVCLGNBQWMsUUFBUTtJQUV0QyxXQUFXNEIsbUJBQW1CcUsscUJBQXFCO0FBQ2xELGFBQU9ySyxRQUFRd0YsV0FBV3BILGNBQWMsSUFBSTtJQUM3QztBQUVBLFdBQU80QixRQUFRd0YsV0FBV3BILGNBQWMsT0FBTztFQUNoRDtBQVFBL0IsV0FBU2dHLFVBQVVpSSxrQkFBbUJ0SyxhQUFZO0FBQ2pELFVBQU02SCxlQUFleEwsU0FBU2dHLFVBQVUrSCxzQkFBc0JwSyxPQUFPO0FBQ3JFLFFBQUksQ0FBQzZILGNBQWM7QUFDbEIsYUFBTztJQUNSO0FBQ0EsV0FBT0EsYUFBYTBDLFdBQVdDO0VBQ2hDO0FBU0FuTyxXQUFTZ0csVUFBVW9JLGtCQUFrQixDQUFDekssU0FBUzBLLGNBQWM7QUFDNUQsVUFBTTdDLGVBQWV4TCxTQUFTZ0csVUFBVStILHNCQUFzQnBLLE9BQU87QUFDckUsUUFBSSxDQUFDNkgsY0FBYztBQUNsQixhQUFPO0lBQ1I7QUFDQUEsaUJBQWEwQyxXQUFXQyxjQUFjRTtBQUN0QyxXQUFPO0VBQ1I7QUFTQXJPLFdBQVNnRyxVQUFVc0ksdUJBQXVCLENBQUMzSyxTQUFTNEssdUJBQXVCO0FBQzFFLFFBQUksQ0FBQzVLLFFBQVE2SyxhQUFhLGVBQWUsR0FBRztBQUMzQzdLLGNBQVErRCxhQUFhLGlCQUFpQjFILFNBQVNnRyxVQUFVaUksZ0JBQWdCdEssT0FBTyxDQUFDO0lBQ2xGO0FBQ0EsV0FBTzNELFNBQVNnRyxVQUFVb0ksZ0JBQWdCekssU0FBUzRLLGtCQUFrQjtFQUN0RTtBQVFBdk8sV0FBU2dHLFVBQVV5SSxvQkFBcUI5SyxhQUFZO0FBQ25ELFFBQUlBLFFBQVE2SyxhQUFhLGVBQWUsR0FBRztBQUMxQyxhQUFPeE8sU0FBU2dHLFVBQVVvSSxnQkFBZ0J6SyxTQUFTQSxRQUFRK0ssYUFBYSxlQUFlLENBQUM7SUFDekY7QUFDQSxXQUFPO0VBQ1I7QUFRQTFPLFdBQVNnRyxVQUFVMkksdUJBQXVCLENBQUNoTCxTQUFTaUwsZUFBZTtBQUNsRTdPLE1BQUU0RCxPQUFPLEVBQUVrTCxPQUFPRCxVQUFVO0VBQzdCO0FBUUE1TyxXQUFTZ0csVUFBVThJLDhCQUE4QixDQUFDbkwsU0FBU2lMLGVBQWU7QUFDekU3TyxNQUFFQyxTQUFTZ0csVUFBVTJILG9CQUFvQmhLLE9BQU8sQ0FBQyxFQUFFM0IsS0FBSyx5QkFBeUIsRUFBRTZNLE9BQU9ELFVBQVU7RUFDckc7QUFnQkFHLGtCQUFnQjFJLFVBQVUySSxhQUFhLFNBQVV0SixNQUFNVSxNQUFNO0FBQzVELFVBQU1zRyxXQUFXLEtBQUtBLFNBQVNoSCxJQUFJO0FBQ25DLFFBQUksQ0FBQ2dILFVBQVU7QUFDZCxhQUFPLENBQUE7SUFDUjtBQUNBLFVBQU11QyxjQUFjLENBQUE7QUFDcEIsUUFBSWhJO0FBQ0osUUFBSXlGLG9CQUFvQndDLG1CQUFtQjtBQUMxQyxZQUFNO1FBQUNDO01BQU8sSUFBSXpDO0FBQ2xCLFdBQUt6RixJQUFJLEdBQUdBLElBQUlrSSxRQUFRbE4sUUFBUSxFQUFFZ0YsR0FBRztBQUNwQyxZQUFJa0ksUUFBUWxJLENBQUMsRUFBRWlCLFVBQVU7QUFDeEIsY0FBSWlILFFBQVFsSSxDQUFDLEVBQUVnQixRQUFRO0FBQ3RCZ0gsd0JBQVlySixLQUFLdUosUUFBUWxJLENBQUMsRUFBRWdCLE1BQU07VUFDbkMsT0FBTztBQUNOZ0gsd0JBQVlySixLQUFLdUosUUFBUWxJLENBQUMsRUFBRXJELEtBQUs7VUFDbEM7UUFDRDtNQUNEO0lBQ0QsV0FBVzhJLG9CQUFvQjBDLGtCQUFrQjtBQUNoRCxVQUFJaEosUUFBUXNHLFNBQVN0RyxTQUFTQSxNQUFNO0FBQ25DLGVBQU8sQ0FBQTtNQUNSLFdBQVdzRyxTQUFTakUsU0FBUztBQUM1QixlQUFPLENBQUNpRSxTQUFTOUksS0FBSztNQUN2QjtJQUNELE9BQU87QUFDTixXQUFLcUQsSUFBSSxHQUFHQSxJQUFJeUYsU0FBU3pLLFFBQVEsRUFBRWdGLEdBQUc7QUFDckMsWUFBSXlGLFNBQVN6RixDQUFDLEVBQUV3QixTQUFTO0FBQ3hCLGNBQUlyQyxRQUFRc0csU0FBU3pGLENBQUMsRUFBRWIsU0FBU0EsTUFBTTtBQUN0QztVQUNEO0FBQ0EsY0FBSXNHLFNBQVN6RixDQUFDLEVBQUVnQixRQUFRO0FBQ3ZCZ0gsd0JBQVlySixLQUFLOEcsU0FBU3pGLENBQUMsRUFBRWdCLE1BQU07VUFDcEMsT0FBTztBQUNOZ0gsd0JBQVlySixLQUFLOEcsU0FBU3pGLENBQUMsRUFBRXJELEtBQUs7VUFDbkM7UUFDRDtNQUNEO0lBQ0Q7QUFDQSxXQUFPcUw7RUFDUjtBQWFBRixrQkFBZ0IxSSxVQUFVZ0osZUFBZSxTQUFVM0osTUFBTVUsTUFBTTtBQUM5RCxVQUFNc0csV0FBVyxLQUFLQSxTQUFTaEgsSUFBSTtBQUNuQyxRQUFJLENBQUNnSCxVQUFVO0FBQ2QsYUFBTyxDQUFBO0lBQ1I7QUFDQSxVQUFNdUMsY0FBYyxDQUFBO0FBQ3BCLFFBQUloSTtBQUNKLFFBQUl5RixvQkFBb0J3QyxtQkFBbUI7QUFDMUMsWUFBTTtRQUFDQztNQUFPLElBQUl6QztBQUNsQixXQUFLekYsSUFBSSxHQUFHQSxJQUFJa0ksUUFBUWxOLFFBQVEsRUFBRWdGLEdBQUc7QUFDcEMsWUFBSSxDQUFDa0ksUUFBUWxJLENBQUMsRUFBRWlCLFVBQVU7QUFDekIsY0FBSWlILFFBQVFsSSxDQUFDLEVBQUVnQixRQUFRO0FBQ3RCZ0gsd0JBQVlySixLQUFLdUosUUFBUWxJLENBQUMsRUFBRWdCLE1BQU07VUFDbkMsT0FBTztBQUNOZ0gsd0JBQVlySixLQUFLdUosUUFBUWxJLENBQUMsRUFBRXJELEtBQUs7VUFDbEM7UUFDRDtNQUNEO0lBQ0QsV0FBVzhJLG9CQUFvQjBDLGtCQUFrQjtBQUNoRCxVQUFJaEosUUFBUXNHLFNBQVN0RyxTQUFTQSxNQUFNO0FBQ25DLGVBQU8sQ0FBQTtNQUNSLFdBQVcsQ0FBQ3NHLFNBQVNqRSxTQUFTO0FBQzdCLGVBQU8sQ0FBQ2lFLFNBQVM5SSxLQUFLO01BQ3ZCO0lBQ0QsT0FBTztBQUNOLFdBQUtxRCxJQUFJLEdBQUdBLElBQUl5RixTQUFTekssUUFBUSxFQUFFZ0YsR0FBRztBQUNyQyxZQUFJLENBQUN5RixTQUFTekYsQ0FBQyxFQUFFd0IsU0FBUztBQUN6QixjQUFJckMsUUFBUXNHLFNBQVN6RixDQUFDLEVBQUViLFNBQVNBLE1BQU07QUFDdEM7VUFDRDtBQUNBLGNBQUlzRyxTQUFTekYsQ0FBQyxFQUFFZ0IsUUFBUTtBQUN2QmdILHdCQUFZckosS0FBSzhHLFNBQVN6RixDQUFDLEVBQUVnQixNQUFNO1VBQ3BDLE9BQU87QUFDTmdILHdCQUFZckosS0FBSzhHLFNBQVN6RixDQUFDLEVBQUVyRCxLQUFLO1VBQ25DO1FBQ0Q7TUFDRDtJQUNEO0FBQ0EsV0FBT3FMO0VBQ1I7QUFPQWpQLFdBQVMyQixLQUFLOzs7Ozs7Ozs7O0lBVWJKLGNBQWVDLGFBQVk7QUFDMUJBLGdCQUFVQSxRQUFReUwsS0FBSztBQUN2QixVQUFJekwsWUFBWSxJQUFJO0FBQ25CLGVBQU87TUFDUjtBQUNBLFVBQUksQ0FBQ04sR0FBRzZELEtBQUt1SyxjQUFjOU4sU0FBUyxJQUFJLEdBQUc7QUFDMUMsZUFBT0E7TUFDUjtBQUVBQSxnQkFBVUEsUUFBUStOLFlBQVk7QUFFOUIsWUFBTUMsWUFBWWhPLFFBQVFULFFBQVEsSUFBSTtBQUN0QyxVQUFJeU8sWUFBWSxJQUFJO0FBR25CLGNBQU1DLFlBQVlqTyxRQUFRVCxRQUFRLEdBQUc7QUFDckMsY0FBTTJPLGFBQWFELGNBQWMsS0FBS2pPLFFBQVFTLFNBQVMsSUFBSXdOLFlBQVk7QUFFdkUsWUFBSUU7QUFDSixZQUFJNUQ7QUFDSixZQUFJNkQ7QUFDSixZQUFJSixjQUFjLEdBQUc7QUFDcEJHLG1CQUFTO0FBQ1Q1RCxrQkFBUXZLLFlBQVksT0FBTyxNQUFNO0FBQ2pDb08sZ0JBQU07UUFFUCxXQUFXSixjQUFjRSxhQUFhLEdBQUc7QUFDeENDLG1CQUFTO0FBQ1Q1RCxrQkFBUTtBQUNSNkQsZ0JBQU07UUFFUCxPQUFPO0FBQ05ELG1CQUFTO0FBQ1Q1RCxrQkFBUTtBQUNSNkQsZ0JBQU07UUFDUDtBQUVBLFlBQUlDLGNBQWNGO0FBQ2xCQyxlQUFPcE8sUUFBUXNPLE1BQU0sR0FBRyxFQUFFN04sU0FBUztBQUNuQyxpQkFBU2dGLElBQUksR0FBR0EsSUFBSTJJLEtBQUszSSxLQUFLO0FBQzdCNEkseUJBQWVGO1FBQ2hCO0FBQ0FFLHVCQUFlOUQ7QUFDZnZLLGtCQUFVQSxRQUFRVyxRQUFRLE1BQU0wTixXQUFXO01BQzVDO0FBRUEsYUFBT3JPLFFBQVFXLFFBQVEsOEJBQThCLE1BQU07SUFDNUQ7Ozs7Ozs7O0lBUUE0TixTQUFVcE8sUUFBTztBQUNoQixhQUFPVCxHQUFHNkQsS0FBS2lMLFlBQVlyTyxJQUFJLElBQUksS0FBSyxDQUFDVCxHQUFHNkQsS0FBS2lMLFlBQVlyTyxFQUFFO0lBQ2hFOzs7Ozs7Ozs7O0lBVUFzTyxXQUFZdE8sUUFBTztBQUNsQixVQUFJM0IsU0FBUzJCLEdBQUdvTyxRQUFRcE8sRUFBRSxHQUFHO0FBQzVCLGNBQU11TyxTQUFTL0YsT0FBT2dHLFNBQVN4TyxHQUFHbkIsTUFBTSxjQUFjLEVBQUUsQ0FBQyxHQUFHLEVBQUU7QUFDOUQsWUFBSTBQLFFBQVE7QUFFWCxjQUFJaFAsR0FBRzZELEtBQUt1SyxjQUFjM04sSUFBSSxJQUFJLEdBQUc7QUFDcEMsZ0JBQUl1TyxVQUFVLElBQUk7QUFDakIscUJBQU87WUFDUjtVQUNELFdBQVdBLFVBQVUsSUFBSTtBQUN4QixtQkFBTztVQUNSO1FBQ0Q7TUFDRDtBQUNBLGFBQU87SUFDUjs7Ozs7Ozs7SUFRQUUsT0FBUUMsVUFBUztBQUNoQixVQUFJLENBQUNBLFFBQVEsQ0FBQ25QLEdBQUc2RCxLQUFLdUssY0FBY2UsTUFBTSxJQUFJLEdBQUc7QUFDaEQsZUFBTztNQUNSO0FBQ0EsWUFBTUMsY0FBY0QsS0FBSzdQLE1BQU0sY0FBYztBQUM3QyxVQUFJOFAsZUFBZW5HLE9BQU9nRyxTQUFTRyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSTtBQUM1RCxlQUFPO01BQ1I7QUFDQUQsYUFBT3JRLFNBQVMyQixHQUFHSixhQUFhOE8sSUFBSTtBQUNwQyxZQUFNRSxVQUFVO0FBQ2hCLGFBQU9GLEtBQUtsTyxRQUFRb08sU0FBUyxLQUFLek4sT0FBTyxZQUFZLENBQUM7SUFDdkQ7RUFDRDtBQU9BOUMsV0FBU3dDLFNBQVM7Ozs7O0lBS2pCZ08sc0JBQXVCblEsU0FBUTtBQUM5QkEsWUFBTUEsSUFBSXlMLFNBQVM7QUFDbkIsYUFBT3pMLElBQUlxQyxNQUFNLEdBQUcsQ0FBQyxFQUFFNk0sWUFBWSxJQUFJbFAsSUFBSXFDLE1BQU0sQ0FBQztJQUNuRDs7Ozs7SUFLQStOLHNCQUF1QnBRLFNBQVE7QUFDOUJBLFlBQU1BLElBQUl5TCxTQUFTO0FBQ25CLGFBQU96TCxJQUFJcUMsTUFBTSxHQUFHLENBQUMsRUFBRUcsWUFBWSxJQUFJeEMsSUFBSXFDLE1BQU0sQ0FBQztJQUNuRDs7Ozs7Ozs7Ozs7Ozs7SUFjQWdPLHFCQUFxQkEsQ0FBQ3JRLEtBQUtzUSxPQUFPQyxLQUFLQyxhQUFhO0FBQ25ELFVBQUlGLE1BQU0xTyxXQUFXMk8sSUFBSTNPLFFBQVE7QUFDaEMsY0FBTSxJQUFJNEosTUFBTSx3REFBd0Q7TUFDekU7QUFDQSxVQUFJaUYsUUFBUTtBQUNaLFVBQUlDLFVBQVU7QUFDZCxZQUFNeEYsU0FBUyxDQUFBO0FBQ2YsVUFBSSxDQUFDcEksTUFBTUMsUUFBUXlOLFFBQVEsR0FBRztBQUM3QixZQUFJQSxhQUFhLFFBQVc7QUFDM0JBLHFCQUFXLENBQUE7UUFDWixXQUFXLE9BQU9BLGFBQWEsVUFBVTtBQUN4Q0EscUJBQVcsQ0FBQ0EsUUFBUTtRQUNyQixPQUFPO0FBQ04sZ0JBQU0sSUFBSUcsVUFBVSxtQ0FBbUM7UUFDeEQ7TUFDRDtBQUNBLGVBQVMvSixJQUFJLEdBQUdBLElBQUk1RyxJQUFJNEIsUUFBUSxFQUFFZ0YsR0FBRztBQUFBLFlBQUFnSyxhQUFBM04sMkJBQ2R1TixRQUFBLEdBQUFLO0FBQUEsWUFBQTtBQUF0QixlQUFBRCxXQUFBek4sRUFBQSxHQUFBLEVBQUEwTixTQUFBRCxXQUFBeE4sRUFBQSxHQUFBQyxRQUFnQztBQUFBLGtCQUFyQkMsVUFBQXVOLE9BQUF0TjtBQUNWLGdCQUFJdkQsSUFBSXFDLE1BQU11RSxHQUFHQSxJQUFJdEQsUUFBUTFCLE1BQU0sTUFBTTBCLFNBQVM7QUFDakRzRCxtQkFBS3RELFFBQVExQixTQUFTO0FBQ3RCO1lBQ0Q7VUFDRDtRQUFBLFNBQUFtQyxLQUFBO0FBQUE2TSxxQkFBQTVNLEVBQUFELEdBQUE7UUFBQSxVQUFBO0FBQUE2TSxxQkFBQTNNLEVBQUE7UUFBQTtBQUNBLFlBQUlqRSxJQUFJcUMsTUFBTXVFLEdBQUdBLElBQUkwSixNQUFNMU8sTUFBTSxNQUFNME8sT0FBTztBQUM3QyxjQUFJSSxZQUFZLE1BQU07QUFDckJBLHNCQUFVOUo7VUFDWDtBQUNBLFlBQUU2SjtBQUNGN0osZUFBSzBKLE1BQU0xTyxTQUFTO1FBQ3JCLFdBQVc1QixJQUFJcUMsTUFBTXVFLEdBQUdBLElBQUkySixJQUFJM08sTUFBTSxNQUFNMk8sS0FBSztBQUNoRCxZQUFFRTtBQUNGN0osZUFBSzJKLElBQUkzTyxTQUFTO1FBQ25CO0FBQ0EsWUFBSSxDQUFDNk8sU0FBU0MsWUFBWSxNQUFNO0FBQy9CeEYsaUJBQU8zRixLQUFLdkYsSUFBSXFDLE1BQU1xTyxTQUFTOUosSUFBSSxDQUFDLENBQUM7QUFDckM4SixvQkFBVTtRQUNYO01BQ0Q7QUFDQSxhQUFPeEY7SUFDUjs7Ozs7Ozs7Ozs7SUFXQTRGLGtCQUFrQkEsQ0FBQzlRLEtBQUsrUSxXQUFXO0FBQ2xDLFVBQUlDLFVBQVVoUixPQUFPLElBQUl5TCxTQUFTLEVBQUVtQixLQUFLO0FBQ3pDLFlBQU14SSxXQUFXLElBQUl6RSxTQUFTeUUsU0FBUzRNLE1BQU07QUFDN0M1TSxlQUFTQyxPQUFPLE1BQU01QixPQUFPLFFBQVEsR0FBRyxHQUFHLE9BQU9BLE9BQU8sUUFBUSxHQUFHLENBQUM7QUFDckUyQixlQUFTRSxVQUFVRixTQUFTRSxRQUFReEMsUUFBUSxPQUFPLEtBQUtXLE9BQU8sVUFBVSxLQUFLLENBQUM7QUFDL0V1TyxlQUFTNU0sU0FBU1EsT0FBTztBQUN6QixVQUFJbU0sUUFBUTtBQUNYLGNBQU1FLE1BQU0sS0FBS3hPLE9BQU8sSUFBSTtBQUM1QixjQUFNeU8sV0FBV0YsT0FBT0csWUFBWUYsR0FBRztBQUN2QyxZQUFJQyxhQUFhLE1BQU1BLGFBQWFGLE9BQU9wUCxTQUFTcVAsSUFBSXJQLFFBQVE7QUFDL0RvUCxvQkFBQSxJQUFBdk8sT0FBY3dPLEdBQUc7UUFDbEI7TUFDRDtBQUNBLGFBQU9ELE9BQU9wRSxLQUFLO0lBQ3BCOzs7Ozs7Ozs7SUFTQXdFLG9CQUFxQnBSLFNBQVE7QUFDNUIsYUFDQ0EsSUFFRThCLFFBQVEsUUFBUSxRQUFRLEVBRXhCQSxRQUFRLFdBQVcsS0FBSyxFQUN4QkEsUUFBUSxZQUFZLEtBQUs7SUFFN0I7Ozs7Ozs7Ozs7OztJQVlBdVAsYUFBYUEsQ0FBQ2xQLFFBQVFtUCxTQUFTOUIsZ0JBQWdCO0FBQzlDLGFBQU9yTixPQUFPTCxRQUFRd1AsU0FBUzlCLFlBQVkxTixRQUFRLE9BQU8sTUFBTSxDQUFDO0lBQ2xFOzs7Ozs7Ozs7O0lBVUF5UCxZQUFhQyxZQUFXO0FBQ3ZCLGFBQU8sQ0FBQyxjQUFjLFlBQVksWUFBWSxPQUFPLEVBQUV4USxTQUFTd1EsTUFBTTtJQUN2RTs7Ozs7Ozs7SUFRQXBQLGNBQWU4QixVQUFTO0FBQ3ZCLGFBQU9yRCxHQUFHNkQsS0FBS3RDLGFBQWE4QixJQUFJLEVBQUVwQyxRQUFRLFFBQVEsTUFBTTtJQUN6RDs7Ozs7OztJQU9BMlAsWUFBYUMsVUFBUztBQUNyQixVQUFJQztBQUNKLFdBQUtBLElBQUlELEtBQUt2UixNQUFNLDZCQUE2QixPQUFPLE1BQU07QUFDN0QsZUFBQSxHQUFBc0MsT0FBVWtQLEVBQUUsQ0FBQyxHQUFDLEdBQUE7TUFDZjtBQUNBLFdBQUtBLElBQUlELEtBQUt2UixNQUFNLDZCQUE2QixPQUFPLE1BQU07QUFDN0QsZUFBQSxHQUFBc0MsT0FBVWtQLEVBQUUsQ0FBQyxHQUFDLEdBQUE7TUFDZjtBQUNBLFdBQUtBLElBQUlELEtBQUt2UixNQUFNLHdCQUF3QixPQUFPLE1BQU07QUFDeEQsZUFBT3dSLEVBQUUsQ0FBQyxJQUFJL1IsT0FBT2dTLE1BQU0sTUFBTSxJQUFJO01BQ3RDO0FBQ0EsV0FBS0QsSUFBSUQsS0FBS3ZSLE1BQU0sdUJBQXVCLE9BQU8sTUFBTTtBQUN2RCxlQUFBLEdBQUFzQyxPQUFVa1AsRUFBRSxDQUFDLEdBQUMsR0FBQTtNQUNmO0FBQ0EsV0FBS0EsSUFBSUQsS0FBS3ZSLE1BQU0sd0JBQXdCLE9BQU8sTUFBTTtBQUN4RCxlQUFPd1IsRUFBRSxDQUFDLElBQUkvUixPQUFPZ1MsTUFBTSxLQUFLLEdBQUc7TUFDcEM7QUFDQSxXQUFLRCxJQUFJRCxLQUFLdlIsTUFBTSx5QkFBeUIsT0FBTyxNQUFNO0FBQ3pELGVBQU93UixFQUFFLENBQUMsSUFBSS9SLE9BQU9nUyxNQUFNLE1BQU0sSUFBSTtNQUN0QztBQUNBLFdBQUtELElBQUlELEtBQUt2UixNQUFNLHdCQUF3QixPQUFPLE1BQU07QUFDeEQsZUFBQSxHQUFBc0MsT0FBVWtQLEVBQUUsQ0FBQyxHQUFDLEdBQUE7TUFDZjtBQUNBLFVBQUloUyxTQUFTd0MsT0FBT29QLFdBQVdHLEtBQUs5RSxLQUFLLENBQUMsR0FBRztBQUM1QyxlQUFPaE4sT0FBT2dTLE1BQU0sT0FBTyxLQUFLO01BQ2pDO0FBQ0EsYUFBT0Y7SUFDUjs7Ozs7Ozs7SUFRQUcsbUJBQW1CQSxDQUFDN1IsS0FBSzhSLGdCQUFnQjtBQUN4QyxVQUFJQSxnQkFBZ0IsUUFBVztBQUM5QkEsc0JBQWM7TUFDZjtBQUNBLFVBQUk5UixJQUFJK1IsT0FBTyxhQUFhLE1BQU0sSUFBSTtBQUNyQy9SLGVBQU84UjtNQUNSO0FBQ0EsYUFBTzlSO0lBQ1I7RUFDRDtBQU9BTCxXQUFTcVMsUUFBUTs7Ozs7Ozs7SUFRaEJDLE1BQU9DLFNBQVE7QUFDZCxVQUFJLENBQUNwUCxNQUFNQyxRQUFRbVAsR0FBRyxHQUFHO0FBQ3hCLGNBQU0sSUFBSXZCLFVBQVUsa0RBQWtEO01BQ3ZFO0FBQ0EsYUFBT3VCLElBQUk3RSxPQUFPLENBQUM4RSxNQUFNQyxRQUFRO0FBQ2hDLGVBQU9GLElBQUl4UixRQUFReVIsSUFBSSxNQUFNQztNQUM5QixDQUFDO0lBQ0Y7Ozs7Ozs7OztJQVNBQyxNQUFPSCxTQUFRO0FBQ2QsVUFBSSxDQUFDcFAsTUFBTUMsUUFBUW1QLEdBQUcsR0FBRztBQUN4QixjQUFNLElBQUl2QixVQUFVLGtEQUFrRDtNQUN2RTtBQUNBLGFBQU91QixJQUFJN0UsT0FBTyxDQUFDOEUsTUFBTUMsUUFBUTtBQUNoQyxlQUFPRixJQUFJeFIsUUFBUXlSLElBQUksTUFBTUM7TUFDOUIsQ0FBQztJQUNGOzs7Ozs7Ozs7SUFTQUUsT0FBT0EsQ0FBQ0osS0FBS3pLLFNBQVM7QUFDckIsVUFBSSxDQUFDM0UsTUFBTUMsUUFBUW1QLEdBQUcsR0FBRztBQUN4QixjQUFNLElBQUl2QixVQUFVLG1EQUFtRDtNQUN4RTtBQUNBLFVBQUksT0FBT2xKLFNBQVMsWUFBWUEsUUFBUSxHQUFHO0FBRTFDLGVBQU8sQ0FBQ3lLLEdBQUc7TUFDWjtBQUVBLFlBQU1LLFlBQVlDLEtBQUtDLEtBQUtQLElBQUl0USxTQUFTNkYsSUFBSTtBQUM3QyxZQUFNeUQsU0FBU3BJLE1BQU00UCxLQUFLO1FBQ3pCOVEsUUFBUTJRO01BQ1QsQ0FBQztBQUNELGVBQVMzTCxJQUFJLEdBQUdBLElBQUkyTCxXQUFXM0wsS0FBSztBQUNuQ3NFLGVBQU90RSxDQUFDLElBQUlzTCxJQUFJN1AsTUFBTXVFLElBQUlhLE9BQU9iLElBQUksS0FBS2EsSUFBSTtNQUMvQztBQUNBLGFBQU95RDtJQUNSO0VBQ0Q7QUFXQXZMLFdBQVNnVCxVQUFVO0lBQ2xCQyxVQUFVOzs7Ozs7OztNQVFUQyxjQUFjQSxDQUFDQyxRQUFRek0sU0FBUztBQUMvQixjQUFNME0sa0JBQWtCclQsRUFBRXNULEdBQUdMLFFBQVFNLFNBQVNBLFNBQVNDO0FBQ3ZELGNBQU1oSSxTQUFTNkgsZ0JBQWdCRCxRQUFRek0sSUFBSTtBQUMzQyxZQUFJNkUsVUFBVTRILE9BQU9LLFFBQVE5TSxLQUFLbkMsS0FBS2dMLFlBQVksRUFBRWxPLFNBQVM4UixPQUFPSyxLQUFLakUsWUFBWSxDQUFDLEdBQUc7QUFDekZoRSxpQkFBT2tJLFdBQVcvTSxLQUFLK007UUFDeEI7QUFDQSxlQUFPbEk7TUFDUjs7Ozs7OztNQU9BbUksZUFBZUEsQ0FBQ1AsUUFBUXpNLFNBQVM7QUFDaEMsY0FBTTBNLGtCQUFrQnJULEVBQUVzVCxHQUFHTCxRQUFRTSxTQUFTQSxTQUFTQztBQUN2RCxjQUFNaEksU0FBUzZILGdCQUFnQkQsUUFBUXpNLElBQUk7QUFDM0MsWUFDQyxDQUFDeU0sT0FBT0ssUUFDUGpJLFVBQVUsSUFBSW9JLE9BQUEsTUFBQTdRLE9BQWE1QixHQUFHNkQsS0FBS3RDLGFBQWEwUSxPQUFPSyxJQUFJLENBQUMsR0FBSSxHQUFHLEVBQUVJLEtBQUtySSxPQUFPaEgsSUFBSSxHQUNyRjtBQUNELGlCQUFPZ0g7UUFDUjtBQUNBLGVBQU87TUFDUjtJQUNEOzs7Ozs7SUFNQXNJLHdCQUF5Qm5OLFVBQVM7QUFDakMsWUFBTW9OLGFBQWE5VCxTQUFTK1Q7QUFDNUIsVUFBSSxDQUFDRCxjQUFjcE4sS0FBS3NOLFNBQVM7QUFDaEMsZUFBT3ROLEtBQUtuQztNQUNiO0FBQ0EsWUFBTWtPLE1BQU0vTCxLQUFLbkMsS0FBS2dMLFlBQVksRUFBRXhPLFFBQVErUyxXQUFXdkUsWUFBWSxDQUFDO0FBQ3BFLFVBQUlrRCxNQUFNLEdBQUc7QUFDWixlQUFPL0wsS0FBS25DO01BQ2I7QUFDQSxhQUFPeEUsRUFBRSxRQUFRLEVBQUUwRyxPQUNsQkMsS0FBS25DLEtBQUs3QixNQUFNLEdBQUcrUCxHQUFHLEdBQ3RCMVMsRUFBRSxRQUFRLEVBQ1JrVSxJQUFJLG1CQUFtQixXQUFXLEVBQ2xDMVAsS0FBS21DLEtBQUtuQyxLQUFLN0IsTUFBTStQLEtBQUtBLE1BQU1xQixXQUFXN1IsTUFBTSxDQUFDLEdBQ3BEeUUsS0FBS25DLEtBQUs3QixNQUFNK1AsTUFBTXFCLFdBQVc3UixNQUFNLENBQ3hDO0lBQ0Q7Ozs7OztJQU1BaVMsa0JBQW1CZixZQUFXO0FBQzdCblQsZUFBUytULHFCQUFxQlosVUFBVUEsT0FBT0s7SUFDaEQ7Ozs7Ozs7O0lBUUFXLFdBQVlDLFFBQU87QUFDbEIsVUFBSUEsR0FBR0MsUUFBUSxJQUFJO0FBQ2xCO01BQ0Q7QUFDQSxVQUFJeFAsU0FBUzlFLEVBQUVxVSxHQUFHdlAsTUFBTSxFQUFFeVAsUUFBUSxvQkFBb0I7QUFDdEQsVUFBSSxDQUFDelAsT0FBTzVDLFFBQVE7QUFDbkI7TUFDRDtBQUNBNEMsZUFBU0EsT0FBTzBQLEtBQUs7QUFDckIxUCxhQUFPbU8sUUFBUSxNQUFNO0FBQ3JCLFlBQU1aLFNBQVN2TixPQUFPNkIsS0FBSyxTQUFTLEVBQUU4TixTQUFTQyxXQUFXNVAsT0FBTzZCLEtBQUssU0FBUyxFQUFFZ08sVUFBVUQ7QUFFM0ZyQyxhQUFPLENBQUMsRUFBRXVDLE1BQU07SUFDakI7RUFDRDtBQWFBM1UsV0FBU3lFLFdBQVcsU0FBVWpDLFFBQVE7QUFDckMsUUFBSSxPQUFPQSxXQUFXLFVBQVU7QUFDL0IsWUFBTSxJQUFJd08sVUFBVSxjQUFjO0lBQ25DO0FBRUEsU0FBS3JNLFVBQVVuQztBQUNmLFNBQUtrSSxVQUFVO0FBQ2YsU0FBS2tLLFVBQVUsQ0FBQztBQUNoQixTQUFLQyxTQUFBLFVBQUEvUixPQUFtQitQLEtBQUtpQyxPQUFPLEdBQUMsSUFBQTtBQUNyQyxTQUFLQyxVQUFVO0VBQ2hCO0FBQ0EvVSxXQUFTeUUsU0FBUzRCLFlBQVk7Ozs7Ozs7Ozs7SUFVN0IzQixPQUFPbVEsUUFBUUUsU0FBUztBQUN2QixVQUFJLENBQUNGLFVBQVUsQ0FBQ0UsU0FBUztBQUN4QixjQUFNLElBQUlsSixNQUFNLDBDQUEwQztNQUMzRDtBQUNBLFlBQU1tSixLQUFLLElBQUlyQixPQUFBLEdBQUE3USxPQUFVK1IsUUFBTSxjQUFBLEVBQUEvUixPQUFlaVMsT0FBTyxHQUFJLEdBQUc7QUFDNUQsV0FBS3BRLFVBQVUsS0FBS0EsUUFBUXhDLFFBQVE2UyxJQUFJaFYsU0FBU3lFLFNBQVN3USxZQUFZLElBQUksQ0FBQztJQUM1RTs7Ozs7O0lBTUFoUSxTQUFTO0FBQ1IsVUFBSTtRQUFDTjtNQUFPLElBQUk7QUFDaEIsaUJBQVcyQyxXQUFXLEtBQUtzTixTQUFTO0FBQ25DLFlBQUksQ0FBQ3BQLE9BQU8wUCxPQUFPLEtBQUtOLFNBQVN0TixPQUFPLEdBQUc7QUFDMUM7UUFDRDtBQUNBM0Msa0JBQVVBLFFBQVF4QyxRQUFRbUYsU0FBUyxLQUFLc04sUUFBUXROLE9BQU8sQ0FBQztNQUN6RDtBQUNBLGFBQU8zQztJQUNSO0lBQ0FrUSxRQUFROztJQUVSRSxTQUFTOztJQUVUcFEsU0FBUzs7SUFFVCtGLFNBQVM7O0lBRVRrSyxTQUFTOztFQUNWO0FBS0E1VSxXQUFTeUUsU0FBU3dRLGNBQWVFLENBQUFBLFVBQVM7QUFDekMsV0FBUTNVLFdBQVU7QUFDakIsWUFBTThHLFVBQVU2TixNQUFLTixTQUFTTSxNQUFLekssVUFBVXlLLE1BQUtKO0FBQ2xESSxNQUFBQSxNQUFLUCxRQUFRdE4sT0FBTyxJQUFJOUc7QUFDeEIsUUFBRTJVLE1BQUt6SztBQUNQLGFBQU9wRDtJQUNSO0VBQ0Q7QUFXQXRILFdBQVNZLE9BQU8sWUFBYXdVLE1BQU07QUFLbEMsUUFBSUEsS0FBS25ULFdBQVcsR0FBRztBQUN0QixZQUFNLENBQUNvVCxLQUFLLElBQUlEO0FBQ2hCLFVBQUksV0FBV3hCLEtBQUt5QixLQUFLLEdBQUc7QUFFM0IsY0FBTUMsYUFBYSw2Q0FBNkM3VSxLQUFLNFUsS0FBSztBQUMxRSxZQUFJQyxZQUFZO0FBRWYsZUFBS0MsS0FBSyxJQUFJQyxLQUNiQyxRQUFRQyxNQUFNRixLQUFLRyxLQUFLLE1BQU0sQ0FDN0JMLFdBQVcsQ0FBQyxHQUNaQSxXQUFXLENBQUMsSUFBSSxHQUNoQkEsV0FBVyxDQUFDLEdBQ1pBLFdBQVcsQ0FBQyxHQUNaQSxXQUFXLENBQUMsR0FDWkEsV0FBVyxDQUFDLENBQUEsQ0FDWixDQUNGO1FBQ0Q7TUFDRCxXQUFXLE9BQU9ELFVBQVUsVUFBVTtBQUVyQyxjQUFNTyxZQUFZNVYsU0FBU0UsS0FBS0UseUJBQXlCaVYsS0FBSztBQUM5RCxZQUFJTyxXQUFXO0FBQ2QsZUFBS0wsS0FBSyxJQUFJQyxLQUFLQSxLQUFLRyxJQUFJRCxNQUFNLE1BQU1FLFNBQVMsQ0FBQztRQUNuRDtNQUNEO0lBQ0Q7QUFDQSxRQUFJLENBQUMsS0FBS0wsSUFBSTtBQUViLFdBQUtBLEtBQUssS0FBS00sU0FBU3hQLFVBQVV5UCxLQUFLSixNQUFNRixNQUFNLENBQUNBLE1BQU0sR0FBSXJTLE1BQU1DLFFBQVFnUyxJQUFJLElBQUlBLE9BQU8sQ0FBQ0EsSUFBSSxDQUFFLENBQUMsR0FBRztJQUN2RztBQUVBLFFBQUksQ0FBQyxLQUFLVyxRQUFRLEdBQUc7QUFDcEI3VSxTQUFHOFUsSUFBSXRVLEtBQUsseUNBQXlDMFQsSUFBSTtJQUMxRDtFQUNEO0FBYUFwVixXQUFTWSxLQUFLQyxhQUFhOzs7SUFHMUJDLFFBQVEsQ0FBQyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxPQUFPLE9BQU8sS0FBSztJQUNsRm1WLGFBQWEsQ0FBQyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxPQUFPLE9BQU8sS0FBSztJQUN2RkMsTUFBTSxDQUFDLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLEtBQUs7SUFDdERDLFdBQVcsQ0FBQyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHO0lBQzdDQyxlQUFlO01BQ2RDLFNBQVM7TUFDVEMsU0FBUztNQUNUQyxTQUFTO01BQ1RDLFVBQVU7TUFDVkMsVUFBVTtNQUNWQyxPQUFPO0lBQ1I7RUFDRDtBQWVBMVcsV0FBU1ksS0FBSytWLFVBQVU7SUFDdkJDLFNBQVM7SUFDVEMsU0FBUztJQUNUQyxPQUFPO0lBQ1BaLE1BQU07SUFDTmEsT0FBTzs7SUFFUGpXLFFBQVE7SUFDUmtXLE9BQU87RUFDUjtBQUNBaFgsV0FBU1ksS0FBS3lGLFlBQVk7O0lBRXpCMFAsVUFBVTtBQUNULGFBQU8sQ0FBQzVMLE9BQU84TSxNQUFNLEtBQUtDLFFBQVEsQ0FBQztJQUNwQzs7Ozs7SUFLQUMsU0FBU3ZXLE1BQU07QUFDZCxhQUFPLEtBQUtzVyxRQUFRLElBQUl0VyxLQUFLc1csUUFBUTtJQUN0Qzs7Ozs7SUFLQUUsUUFBUXhXLE1BQU07QUFDYixhQUFPLEtBQUtzVyxRQUFRLElBQUl0VyxLQUFLc1csUUFBUTtJQUN0Qzs7SUFFQUcsa0JBQWtCO0FBQ2pCLGFBQU9yWCxTQUFTWSxLQUFLQyxXQUFXQyxPQUFPLEtBQUt3VyxZQUFZLENBQUM7SUFDMUQ7O0lBRUFDLHdCQUF3QjtBQUN2QixhQUFPdlgsU0FBU1ksS0FBS0MsV0FBV29WLFlBQVksS0FBS3FCLFlBQVksQ0FBQztJQUMvRDs7SUFFQUUsZUFBZTtBQUNkLGFBQU94WCxTQUFTWSxLQUFLQyxXQUFXQyxPQUFPLEtBQUsyVyxTQUFTLENBQUM7SUFDdkQ7O0lBRUFDLHFCQUFxQjtBQUNwQixhQUFPMVgsU0FBU1ksS0FBS0MsV0FBV29WLFlBQVksS0FBS3dCLFNBQVMsQ0FBQztJQUM1RDs7SUFFQUUsZ0JBQWdCO0FBQ2YsYUFBTzNYLFNBQVNZLEtBQUtDLFdBQVdxVixLQUFLLEtBQUswQixVQUFVLENBQUM7SUFDdEQ7O0lBRUFDLHNCQUFzQjtBQUNyQixhQUFPN1gsU0FBU1ksS0FBS0MsV0FBV3NWLFVBQVUsS0FBS3lCLFVBQVUsQ0FBQztJQUMzRDs7SUFFQUUsYUFBYTtBQUNaLGFBQU85WCxTQUFTWSxLQUFLQyxXQUFXcVYsS0FBSyxLQUFLNkIsT0FBTyxDQUFDO0lBQ25EOztJQUVBQyxtQkFBbUI7QUFDbEIsYUFBT2hZLFNBQVNZLEtBQUtDLFdBQVdzVixVQUFVLEtBQUs0QixPQUFPLENBQUM7SUFDeEQ7Ozs7Ozs7Ozs7SUFVQUUsSUFBSXRTLFFBQVF1UyxNQUFNO0FBQ2pCLFVBQUlDLE1BQU1oTyxPQUFPZ0csU0FBU3hLLFFBQVEsRUFBRTtBQUNwQyxVQUFJd0UsT0FBTzhNLE1BQU1rQixHQUFHLEdBQUc7QUFDdEIsY0FBTSxJQUFJbkgsVUFBQSxtQkFBQWxPLE9BQTZCNkMsUUFBTSxhQUFBLENBQWE7TUFDM0Q7QUFDQXVTLGFBQU9BLEtBQUtyVixZQUFZO0FBQ3hCLFlBQU07UUFBQzhUO01BQU8sSUFBSTNXLFNBQVNZO0FBQzNCLFVBQUl3WCxXQUFXekIsUUFBUXVCLElBQUksS0FBS3ZCLFFBQUEsR0FBQTdULE9BQVdvVixNQUFJLEdBQUEsQ0FBQTtBQUMvQyxVQUFJRSxVQUFVO0FBR2IsWUFBSUEsYUFBYSxRQUFRO0FBQ3hCQSxxQkFBVztBQUNYRCxpQkFBTztRQUNSO0FBQ0EsYUFBQSxNQUFBclYsT0FBV3NWLFFBQVEsQ0FBQSxFQUFJLEtBQUEsTUFBQXRWLE9BQVdzVixRQUFRLENBQUEsRUFBSSxJQUFJRCxHQUFHO0FBQ3JELGVBQU87TUFDUjtBQUNBLFlBQU0sSUFBSXRNLE1BQUEsaUJBQUEvSSxPQUF1Qm9WLE1BQUksVUFBQSxFQUFBcFYsT0FBVzBDLE9BQU82UyxLQUFLMUIsT0FBTyxFQUFFNVEsS0FBSyxJQUFJLEdBQUMsZUFBQSxDQUFlO0lBQy9GOzs7Ozs7Ozs7O0lBVUF1UyxTQUFTM1MsUUFBUXVTLE1BQU07QUFDdEIsYUFBTyxLQUFLRCxJQUFJLENBQUN0UyxRQUFRdVMsSUFBSTtJQUM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXFDQUssT0FBT0MsV0FBV0MsTUFBTTtBQUN2QixVQUFJLENBQUMsS0FBSzFDLFFBQVEsR0FBRztBQUNwQixlQUFPO01BQ1I7QUFFQSxVQUFJMkMsUUFBUTtBQUVaLFVBQUlELFNBQVMsT0FBTztBQUNuQkMsZ0JBQVEsSUFBSTFZLFNBQVNZLEtBQUssS0FBS3NXLFFBQVEsQ0FBQyxFQUFFZSxJQUFJLEtBQUtVLGtCQUFrQixHQUFHLFNBQVM7TUFDbEYsV0FBVyxPQUFPRixTQUFTLFVBQVU7QUFFcENDLGdCQUFRLElBQUkxWSxTQUFTWSxLQUFLLEtBQUtzVyxRQUFRLENBQUMsRUFBRWUsSUFBSSxLQUFLVSxrQkFBa0IsSUFBSUYsTUFBTSxTQUFTO01BQ3pGO0FBRUEsVUFBSSxDQUFDRCxXQUFXO0FBQ2YsZUFBT0UsTUFBTUUsWUFBWTtNQUMxQjtBQUNBLFlBQU1oSixNQUFNQSxDQUFDdUksS0FBS1UsUUFBUTtBQUN6QkEsZ0JBQUFBLE1BQVE7QUFDUixlQUFPLEtBQUEvVixPQUFLcVYsR0FBRyxFQUFHck0sU0FBUyxFQUFFcEosTUFBTSxJQUFJbVcsR0FBRztNQUMzQztBQUNBLFlBQU1DLE1BQU1KLE1BQU1LLFNBQVM7QUFDM0IsWUFBTS9HLElBQUkwRyxNQUFNTSxXQUFXO0FBQzNCLFlBQU14VixJQUFJa1YsTUFBTU8sV0FBVztBQUMzQixZQUFNQyxLQUFLUixNQUFNUyxnQkFBZ0I7QUFDakMsWUFBTUMsSUFBSVYsTUFBTVcsUUFBUTtBQUN4QixZQUFNQyxJQUFJWixNQUFNakIsU0FBUyxJQUFJO0FBQzdCLFlBQU04QixJQUFJYixNQUFNYyxZQUFZO0FBQzVCLFlBQU1DLE1BQU1YLE1BQU0sTUFBTTtBQUN4QixZQUFNWSxTQUFTWixPQUFPLEtBQUssT0FBTztBQUNsQyxZQUFNYSxpQkFBaUI7UUFDdEJDLElBQUloSyxJQUFJa0osR0FBRztRQUNYZSxHQUFHZjtRQUNIZ0IsSUFBSWxLLElBQUk2SixHQUFHO1FBQ1hNLEdBQUdOO1FBQ0hPLEdBQUdOO1FBQ0hPLElBQUlySyxJQUFJb0MsQ0FBQztRQUNUQTtRQUNBa0ksSUFBSXRLLElBQUlwTSxDQUFDO1FBQ1RBO1FBQ0EyVyxLQUFLdkssSUFBSXNKLElBQUksQ0FBQztRQUNka0IsTUFBTTFCLE1BQU1aLFdBQVc7UUFDdkJ1QyxLQUFLM0IsTUFBTVYsaUJBQWlCO1FBQzVCc0MsR0FBRzVCLE1BQU1YLE9BQU87UUFDaEJ3QyxJQUFJM0ssSUFBSXdKLENBQUM7UUFDVEE7UUFDQW9CLE1BQU05QixNQUFNbEIsYUFBYTtRQUN6QmlELEtBQUsvQixNQUFNaEIsbUJBQW1CO1FBQzlCZ0QsSUFBSTlLLElBQUkwSixDQUFDO1FBQ1RBO1FBQ0FxQixNQUFNcEI7UUFDTnFCLElBQUloTCxJQUFJMkosSUFBSSxHQUFHO1FBQ2ZBO01BQ0Q7QUFDQSxZQUFNOVUsV0FBVyxJQUFJekUsU0FBU3lFLFNBQVMrVCxTQUFTO0FBQ2hEL1QsZUFBU0MsT0FBTyxPQUFPLEtBQUs7QUFDNUJELGVBQVNFLFVBQVVGLFNBQVNFLFFBQVF4Qzs7Ozs7UUFLbkM7UUFDQzNCLFdBQVU7QUFDVixpQkFBT21aLGVBQWVuWixLQUFLO1FBQzVCO01BQ0Q7QUFDQSxhQUFPaUUsU0FBU1EsT0FBTyxFQUFFOUMsUUFBUSxjQUFjLElBQUk7SUFDcEQ7Ozs7Ozs7OztJQVNBMFksU0FBU3BDLE1BQU07QUFHZCxZQUFNcUMsYUFBWSxvQkFBSXRGLEtBQUssR0FBRXVGLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUl2RixLQUFLLElBQUksRUFBRXVGLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLO0FBQzNGLGNBQVEsTUFBQTtRQUNQLEtBQUtELGFBQWE7QUFDakIsaUJBQU8sS0FBS3ZDLE9BQU92WSxTQUFTWSxLQUFLQyxXQUFXdVYsY0FBY0MsU0FBU29DLElBQUk7UUFDeEUsS0FBS3FDLGFBQWE7QUFDakIsaUJBQU8sS0FBS3ZDLE9BQU92WSxTQUFTWSxLQUFLQyxXQUFXdVYsY0FBY0UsU0FBU21DLElBQUk7UUFDeEUsTUFBS3FDLFdBQVcsS0FBS0EsV0FBVztBQUMvQixpQkFBTyxLQUFLdkMsT0FBT3ZZLFNBQVNZLEtBQUtDLFdBQVd1VixjQUFjSyxVQUFVZ0MsSUFBSTtRQUN6RSxLQUFLcUMsYUFBYTtBQUNqQixpQkFBTyxLQUFLdkMsT0FBT3ZZLFNBQVNZLEtBQUtDLFdBQVd1VixjQUFjRyxTQUFTa0MsSUFBSTtRQUN4RSxNQUFLcUMsV0FBVyxLQUFLQSxXQUFXO0FBQy9CLGlCQUFPLEtBQUt2QyxPQUFPdlksU0FBU1ksS0FBS0MsV0FBV3VWLGNBQWNJLFVBQVVpQyxJQUFJO1FBQ3pFO0FBQ0MsaUJBQU8sS0FBS0YsT0FBT3ZZLFNBQVNZLEtBQUtDLFdBQVd1VixjQUFjTSxPQUFPK0IsSUFBSTtNQUN2RTtJQUNEOzs7Ozs7O0lBT0F1QyxtQkFBbUI7QUFDbEIsYUFBTyxJQUFJckgsT0FBQSxhQUFBN1EsT0FDRyxLQUFLbVksZUFBZSxHQUFDLE1BQUEsRUFBQW5ZLE9BQU8sS0FBS3VVLGdCQUFnQixHQUFDLEdBQUEsRUFBQXZVLE9BQUksS0FBS3lVLHNCQUFzQixHQUFDLFVBQUEsR0FDL0YsSUFDRDtJQUNEOzs7Ozs7OztJQVFBMkQsWUFBWXBLLE9BQU87QUFFbEJBLGNBQVEzRyxPQUFPZ0csU0FBU1csT0FBTyxFQUFFO0FBQ2pDQSxjQUFRM0csT0FBTzhNLE1BQU1uRyxLQUFLLElBQUksSUFBSUE7QUFDbEMsWUFBTXFLLFNBQVMsSUFBSXhMLE9BQU9tQixLQUFLO0FBQy9CLFlBQU12TSxPQUFBLEdBQUF6QixPQUFVLEtBQUttWSxlQUFlLEdBQUMsR0FBQSxFQUFBblksT0FBSSxLQUFLdVUsZ0JBQWdCLENBQUM7QUFDL0QsVUFBSThELE9BQU9sWixRQUFRO0FBRWxCLGVBQUEsR0FBQWEsT0FBVXFZLFFBQU0sR0FBQSxFQUFBclksT0FBSXlCLE1BQUksR0FBQSxFQUFBekIsT0FBSXFZLE1BQU07TUFDbkM7QUFDQSxhQUFPNVc7SUFDUjtFQUNEO0FBQUEsTUFBQTZXLGFBQUE5WCwyQkFFbUJrQyxPQUFPNlYsb0JBQW9CN0YsS0FBS25QLFNBQVMsQ0FBQSxHQUFBaVY7QUFBQSxNQUFBO0FBQTVELFNBQUFGLFdBQUE1WCxFQUFBLEdBQUEsRUFBQThYLFNBQUFGLFdBQUEzWCxFQUFBLEdBQUFDLFFBQStEO0FBQUEsWUFBcEQ2WCxPQUFBRCxPQUFBMVg7QUFFVixVQUFJLENBQUMsQ0FBQyxPQUFPLGNBQWMsY0FBYyxFQUFFdkMsU0FBU2thLElBQUksR0FBRztBQUMxRHZiLGlCQUFTWSxLQUFLeUYsVUFBVWtWLElBQUksSUFBSSxZQUFhbkcsTUFBTTtBQUNsRCxpQkFBTyxLQUFLRyxHQUFHZ0csSUFBSSxFQUFFLEdBQUduRyxJQUFJO1FBQzdCO01BQ0Q7SUFDRDtFQUFBLFNBQUFoUixLQUFBO0FBQUFnWCxlQUFBL1csRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQWdYLGVBQUE5VyxFQUFBO0VBQUE7QUFTQXRFLFdBQVN3YixPQUFPLENBQUM7QUFNakJ4YixXQUFTd2IsS0FBSzVaLGlCQUFpQixNQUFNO0FBQ3BDSCxZQUFRQyxLQUFLLDhGQUE4RjtBQUMzRyxXQUFPMUIsU0FBUzRCLGVBQWU7RUFDaEM7QUFNQTVCLFdBQVN3YixLQUFLQyxzQkFBc0I7QUFLcEN6YixXQUFTd2IsS0FBS0UsdUJBQXVCO0FBOEJyQzFiLFdBQVN3YixLQUFLRyxrQkFBbUJ4RyxDQUFBQSxVQUFTO0FBQ3pDLFFBQUksRUFBRW5WLFNBQVN3YixLQUFLQyx1QkFBdUIsS0FBS3piLFNBQVN3YixLQUFLRSx3QkFBd0IsR0FBRztBQUN4RjFiLGVBQVN3YixLQUFLRyxnQkFBZ0IxVixNQUFNa1AsS0FBSTtJQUN6QztFQUNEO0FBR0FuVixXQUFTd2IsS0FBS0csZ0JBQWdCMVYsUUFBUSxNQUFNO0FBQzNDLFFBQUlqRyxTQUFTd2IsS0FBS0csZ0JBQWdCQyxRQUFRO0FBQ3pDNWIsZUFBUzZiLE9BQU9GLGdCQUFnQjNiLFNBQVN3YixLQUFLRyxnQkFBZ0JDLE1BQU07SUFDckU7QUFDQSxRQUFJNWIsU0FBU3diLEtBQUtHLGdCQUFnQkcsVUFBVTtBQUUzQyxVQUFJLENBQUMsWUFBWWxJLEtBQUs1VCxTQUFTd2IsS0FBS0csZ0JBQWdCRyxRQUFRLEdBQUc7QUFDOUQ5YixpQkFBU3diLEtBQUtHLGdCQUFnQkcsV0FBVzVhLEdBQUc2RCxLQUFLQyxPQUFPaEYsU0FBU3diLEtBQUtHLGdCQUFnQkcsUUFBUTtBQUM5RixZQUFJOWIsU0FBU3diLEtBQUtHLGdCQUFnQkksbUJBQW1CLE9BQU87QUFDM0QvYixtQkFBU3diLEtBQUtHLGdCQUFnQkcsWUFBWTtRQUMzQztNQUNEO0FBQ0FFLGlCQUFXLE1BQU07QUFDaEJDLG1CQUFXamMsU0FBU3diLEtBQUtHLGdCQUFnQkc7TUFDMUMsR0FBRzliLFNBQVN3YixLQUFLRyxnQkFBZ0JPLE9BQU87SUFDekM7RUFDRDtBQUVBbGMsV0FBU3diLEtBQUtHLGdCQUFnQk8sVUFDN0JqYyxPQUFPa2MsNkJBQTZCLFNBQVksTUFBT2xjLE9BQU9rYztBQUUvRG5jLFdBQVN3YixLQUFLRyxnQkFBZ0JHLFdBQVc7QUFFekM5YixXQUFTd2IsS0FBS0csZ0JBQWdCQyxTQUFTO0FBRXZDNWIsV0FBU3diLEtBQUtZLGdCQUFnQixNQUFNO0FBQ25DLE1BQUVwYyxTQUFTd2IsS0FBS0U7RUFDakI7QUFFQTFiLFdBQVN3YixLQUFLYSxtQkFBbUIsTUFBTTtBQUN0QyxRQUFJLEVBQUVyYyxTQUFTd2IsS0FBS0Usd0JBQXdCLEtBQUsxYixTQUFTd2IsS0FBS0MsdUJBQXVCLEdBQUc7QUFDeEZ6YixlQUFTd2IsS0FBS0csZ0JBQWdCMVYsTUFBTTtJQUNyQztFQUNEO0FBdUJBakcsV0FBU3diLEtBQUtjLE1BQU0sU0FBVUMsZUFBZUMsT0FBT0MsV0FBV0MsZUFBZUMsU0FBUztBQUFBLFFBQUFDO0FBQ3RGLFNBQUtMLGdCQUFnQkE7QUFDckIsU0FBS0MsUUFBUUE7QUFDYixTQUFLQSxNQUFNSyxTQUFTO0FBRXBCLFFBQUksQ0FBQ0wsTUFBTU0sZUFBZSxDQUFDLENBQUMsWUFBWSxXQUFXLEVBQUV6YixTQUFTbWIsTUFBTU0sV0FBVyxHQUFHO0FBQ2pGLFdBQUtOLE1BQU1NLGNBQWM7SUFDMUI7QUFHQSxLQUFBRixjQUFBLEtBQUtKLE9BQU1PLFlBQVhILFlBQVdHLFVBQVk7QUFDdkIsU0FBS1AsTUFBTVEsWUFBWTtBQUN2QixTQUFLUixNQUFNUyxpQkFBaUI7QUFDNUIsU0FBS1IsWUFBWUE7QUFDakIsU0FBS0UsVUFBVUE7QUFDZixRQUFJRCxlQUFlO0FBQ2xCLFdBQUtRLGlCQUFpQlIsYUFBYTtJQUNwQyxPQUFPO0FBQ04sV0FBS1MsV0FBVyxJQUFJbmQsU0FBUzZiLE9BQU9VLGFBQWE7SUFDbEQ7QUFFQSxRQUFJLENBQUNDLE1BQU1qRSxRQUFRO0FBQ2xCLFdBQUtpRSxNQUFNakUsU0FBUztJQUNyQixXQUFXaUUsTUFBTWpFLFdBQVcsVUFBVSxDQUFDaUUsTUFBTVksZUFBZTtBQUMzRCxXQUFLWixNQUFNWSxnQkFBZ0I7SUFDNUIsV0FBVyxDQUFDLENBQUMsT0FBTyxNQUFNLEVBQUUvYixTQUFTbWIsTUFBTWpFLE1BQU0sR0FBRztBQUNuRCxXQUFLNEUsU0FBU0UsTUFBTSxzREFBc0Q7SUFDM0U7QUFFQSxRQUFJYixNQUFNYyxVQUFVLENBQUMsU0FBUyxPQUFPLEVBQUVqYyxTQUFTbWIsTUFBTWMsTUFBTSxHQUFHO0FBQzlELGFBQU9kLE1BQU1lO0lBQ2QsV0FBVyxDQUFDZixNQUFNZSxRQUFRQyx1QkFBdUI7QUFDaERoQixZQUFNZSxPQUFPQztJQUNkO0VBQ0Q7QUFDQXhkLFdBQVN3YixLQUFLYyxJQUFJalcsWUFBWTtJQUM3QmtXLGVBQWU7SUFDZkUsV0FBVztJQUNYRSxTQUFTO0lBQ1RjLFFBQVF4ZDs7SUFFUnVjLE9BQU87SUFDUGtCLFVBQVU7SUFDVkMsYUFBYTs7SUFFYlIsVUFBVTs7SUFFVlMsWUFBWTs7SUFFWkMsV0FBVzs7SUFFWEMsV0FBVzs7SUFFWEMsZUFBZTs7Ozs7OztJQU9mQyxVQUFVUCxRQUFRO0FBQ2pCLFdBQUtBLFNBQVNBO0lBQ2Y7O0lBRUFQLGlCQUFpQlIsZUFBZTtBQUMvQixXQUFLUyxXQUFXVDtBQUNoQixXQUFLUyxTQUFTdEIsT0FBTyxLQUFLVSxhQUFhO0lBQ3hDOzs7Ozs7OztJQVFBMEIsS0FBS0Msc0JBQXNCO0FBQzFCLFFBQUVsZSxTQUFTd2IsS0FBS0M7QUFDaEIsWUFBTTBDLGVBQWUsQ0FBQTtBQUNyQixlQUFBQyxNQUFBLEdBQUFDLG1CQUF1QjdZLE9BQU9DLFFBQVEsS0FBSytXLEtBQUssR0FBQTRCLE1BQUFDLGlCQUFBcGMsUUFBQW1jLE9BQUc7QUFBbkQsY0FBVyxDQUFDblgsR0FBRytGLEdBQUcsSUFBQXFSLGlCQUFBRCxHQUFBO0FBQ2pCLFlBQUlqYixNQUFNQyxRQUFRNEosR0FBRyxHQUFHO0FBQ3ZCbVIsdUJBQWF2WSxLQUFBLEdBQUE5QyxPQUFRd2IsbUJBQW1CclgsQ0FBQyxHQUFDLEdBQUEsRUFBQW5FLE9BQUlrSyxJQUFJbkgsSUFBSXlZLGtCQUFrQixFQUFFdlksS0FBSyxHQUFHLENBQUMsQ0FBRTtRQUN0RixXQUFXaUgsUUFBUSxRQUFXO0FBQzdCbVIsdUJBQWF2WSxLQUFBLEdBQUE5QyxPQUFRd2IsbUJBQW1CclgsQ0FBQyxHQUFDLEdBQUEsRUFBQW5FLE9BQUl3YixtQkFBbUJ0UixHQUFHLENBQUMsQ0FBRTtRQUN4RTtNQUNEO0FBQ0EsWUFBTXVSLGNBQWNKLGFBQWFwWSxLQUFLLEdBQUcsRUFBRTVELFFBQVEsOEJBQThCLFNBQVM7QUFFMUYsWUFBTXFjLGFBQWE7UUFDbEJDLFNBQVM7UUFDVHJZLE1BQU0sS0FBS29XLE1BQU1jLFdBQVcsVUFBVSxRQUFRO1FBQzlDb0IsS0FBS3hkLEdBQUc2RCxLQUFLNFosV0FBVyxLQUFLO1FBQzdCalksTUFBTTZYO1FBQ05LLFVBQVUsS0FBS3BDLE1BQU1qRTtRQUNyQnNHLFNBQVM7VUFDUixrQkFBa0JDO1FBQ25CO1FBQ0EsR0FBR1o7TUFDSjtBQUNBLGFBQU9uZSxFQUFFZ2YsS0FBS1AsVUFBVSxFQUFFUTtRQUN6QixTQUFTQyxhQUFhdkIsVUFBVUUsWUFBWTtBQUMzQyxlQUFLQSxhQUFhQTtBQUNsQixlQUFLRixXQUFXQTtBQUNoQixlQUFLQyxjQUFjRDtBQUVuQixjQUFJLEtBQUtsQixNQUFNakUsV0FBVyxRQUFRO0FBQ2pDLGlCQUFLc0YsWUFBWUgsU0FBU3dCLFVBQVV4QixTQUFTd0IsT0FBTyxDQUFDLEVBQUVDO0FBQ3ZELGdCQUFJLEtBQUszQyxNQUFNTSxnQkFBZ0IsUUFBUTtBQUN0QyxtQkFBS2dCLFlBQVlKLFNBQVN3QixVQUFVeEIsU0FBU3dCLE9BQU8sQ0FBQyxFQUFFRTtZQUN4RCxXQUFXLEtBQUs1QyxNQUFNTSxnQkFBZ0IsY0FBYyxLQUFLTixNQUFNTSxnQkFBZ0IsYUFBYTtBQUMzRixtQkFBS2dCLFlBQVlKLFNBQVN3QixVQUFVeEIsU0FBU3dCLE9BQU8sQ0FBQyxFQUFFM2E7WUFDeEQ7VUFDRCxPQUFPO0FBQ04saUJBQUtzWixZQUFZOWQsRUFBRTJkLFFBQVEsRUFBRTFiLEtBQUssY0FBYyxFQUFFcWQsR0FBRyxDQUFDLEVBQUVDLEtBQUssTUFBTTtBQUVuRSxpQkFBS3hCLFlBQVkvZCxFQUFFMmQsUUFBUSxFQUFFMWIsS0FBSyxjQUFjLEVBQUVxZCxHQUFHLENBQUMsRUFBRTlhLEtBQUs7VUFDOUQ7QUFDQSxjQUFJLE9BQU8sS0FBS3NaLGNBQWMsVUFBVTtBQUV2QyxtQkFBTyxLQUFLMEIsWUFBWXJCLG9CQUFvQjtVQUM3QztBQUVBLGNBQUksS0FBS3pCLFdBQVc7QUFHbkIsaUJBQUtBLFVBQVUrQyxLQUFLLEtBQUsvQixRQUFRLElBQUk7VUFDdEMsT0FBTztBQUNOLGlCQUFLTixTQUFTc0MsS0FBSyxJQUFJO1VBQ3hCO0FBQ0F6ZixtQkFBU3diLEtBQUtHLGdCQUFnQjtBQUM5QixpQkFBTzViLEVBQUUyZixTQUFTLEVBQUVDLFlBQVksS0FBS2xDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDcEQ7O1FBRUEsU0FBU21DLGFBQWF2QyxPQUFPTyxZQUFZaUMsYUFBYTtBQUNyRCxlQUFLakMsYUFBYUE7QUFDbEIsZUFBS2lDLGNBQWNBO0FBQ25CLGVBQUsvQixZQUNKRixhQUNBM2QsT0FBT2dTLE1BQU0saUJBQWlCLGVBQWUsSUFDN0NvTCxNQUFNTyxhQUNOM2QsT0FBT2dTLE1BQU0sTUFBTSxJQUFJO0FBQ3hCLGlCQUFPLEtBQUtzTixZQUFZO1FBQ3pCO01BQ0Q7SUFDRDtJQUNBQSxZQUFZckIsc0JBQXNCO0FBQ2pDLFVBQUksS0FBS0wsY0FBYyxjQUFjLENBQUMsS0FBS0UsZUFBZTtBQUN6RCxhQUFLWixTQUFTemIsS0FBS3pCLE9BQU9nUyxNQUFNLG9CQUFvQixrQkFBa0IsQ0FBQztBQUN2RSxhQUFLOEwsZ0JBQWdCO0FBR3JCLGVBQU8vZCxTQUFTd2IsS0FBS2MsSUFBSXdELFNBQVMsRUFBRWQsS0FBTWUsV0FBVTtBQUNuRCxlQUFLdkQsTUFBTXVELFFBQVFBO0FBQ25CLGlCQUFPLEtBQUs5QixLQUFLQyxvQkFBb0I7UUFDdEMsQ0FBQztNQUNGO0FBQ0EsV0FBS2YsU0FBU0UsTUFBQSxHQUFBdmEsT0FBUyxLQUFLZ2IsV0FBUyxHQUFBLEVBQUFoYixPQUFJLEtBQUsrYSxXQUFTLEdBQUEsQ0FBRztBQUUxRCxVQUFJLEtBQUtsQixTQUFTO0FBR2pCLGFBQUtBLFFBQVE2QyxLQUFLLEtBQUsvQixRQUFRLElBQUk7TUFDcEM7QUFFQSxhQUFPMWQsRUFBRTJmLFNBQVMsRUFBRU0sV0FBVyxLQUFLdkMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNuRDtJQUNBd0MsbUJBQW1CO0FBQ2xCLGFBQU8sS0FBSzlDO0lBQ2I7SUFDQStDLGVBQWU7QUFDZCxhQUFPLEtBQUtyQztJQUNiO0lBQ0FzQyxlQUFlO0FBQ2QsYUFBTyxLQUFLckM7SUFDYjtJQUNBc0MsU0FBUztBQUVSLGFBQU8sS0FBS3pDO0lBQ2I7SUFDQTBDLGNBQWM7QUFDYixhQUFPLEtBQUszQztJQUNiO0VBQ0Q7QUFNQTFkLFdBQVN3YixLQUFLOEUsZ0JBQWlCcFUsV0FBVTtBQUN4QyxVQUFNc1EsUUFBUTtNQUNiYyxRQUFRO01BQ1JpRCxNQUFNO01BQ05DLFFBQVF0VTtNQUNSdVUsU0FBUztNQUNUQyxRQUFRO01BQ1JuSSxRQUFRO01BQ1JvSSxTQUFTO01BQ1RDLFFBQVE7SUFDVDtBQUVBLFdBQU8sSUFBSTVnQixTQUFTd2IsS0FBS2MsSUFBSSxJQUFJRSxLQUFLLEVBQUV5QixLQUFLLEVBQUVlLEtBQU02QixZQUFXO0FBQy9EQSxhQUFPWixpQkFBaUIsRUFBRWEsT0FBTztBQUNqQyxZQUFNcEQsV0FBV21ELE9BQU9SLFlBQVk7QUFDcEMsWUFBTVUsV0FBV3JELFNBQVNsQixNQUFNd0UsTUFBTSxDQUFDLEVBQUVDLFVBQVUsQ0FBQyxFQUFFQyxNQUFNQyxLQUFLeGM7QUFDakUsYUFBT3ljLEtBQUtDLE1BQU1OLFFBQVE7SUFDM0IsQ0FBQztFQUNGO0FBQ0EsTUFBSWpDLDJCQUEyQjtBQWMvQjllLFdBQVN3YixLQUFLYyxJQUFJZ0Ysa0JBQW1CQyxRQUFPO0FBQzNDekMsK0JBQUEsOEJBQUFoYyxPQUF5RHllLEtBQUEsS0FBQXplLE9BQVV5ZSxFQUFFLElBQUssSUFBRSxHQUFBO0VBQzdFO0FBU0EsUUFBTS9ELHdCQUF3QjtBQU85QnhkLFdBQVN3YixLQUFLYyxJQUFJd0QsV0FBVyxNQUFNO0FBQ2xDLFVBQU0wQixXQUFXLElBQUl4aEIsU0FBU3diLEtBQUtjLElBQUlyYyxPQUFPZ1MsTUFBTSxRQUFRLE1BQU0sR0FBRztNQUNwRXFMLFFBQVE7TUFDUm1FLE1BQU07TUFDTnJiLE1BQU07TUFDTm1TLFFBQVE7SUFDVCxDQUFDO0FBQ0QsV0FBT2lKLFNBQVN2RCxLQUFLLEVBQUVlLEtBQU02QixZQUFXO0FBQ3ZDLGFBQU9BLE9BQU9uRCxTQUFTbEIsTUFBTWtGLE9BQU9DO0lBQ3JDLENBQUM7RUFDRjtBQWdEQTNoQixXQUFTd2IsS0FBS29HLE9BQU8sU0FBVXZmLFVBQVV3WixRQUFRO0FBQ2hELFFBQUksQ0FBQ0EsUUFBUTtBQUNaQSxlQUFTNWIsT0FBT2dTLE1BQU0sU0FBUyxPQUFPLElBQUk1UCxXQUFXcEMsT0FBT2dTLE1BQU0sS0FBSyxHQUFHO0lBQzNFO0FBU0EsVUFBTTRQLE1BQU07O01BRVh4ZjtNQUNBeWYsWUFBWTtNQUNaQyxhQUFhO01BQ2JDLFlBQVk7TUFDWkMsYUFBYTs7TUFFYkMsb0JBQW9CO01BQ3BCeEYsZUFBZWIsa0JBQWtCN2IsU0FBUzZiLFNBQVNBLFNBQVMsSUFBSTdiLFNBQVM2YixPQUFPQSxNQUFNOztNQUV0RnNHLFVBQVU7TUFDVkMsVUFBVTs7TUFFVkMsWUFBWTs7TUFFWkMsYUFBYTs7TUFFYkMsZ0JBQWdCO01BQ2hCQyxpQkFBaUI7TUFDakJDLGNBQWM7TUFDZEMsV0FBVztNQUNYQyxTQUFTO01BQ1RDLGFBQWE7TUFDYkMsb0JBQW9CO01BQ3BCQyxZQUFZO01BQ1ovRyxnQkFBZ0I7TUFDaEJnSCx1QkFBdUI7TUFDdkJDLGlCQUFpQjtNQUNqQkMsaUJBQWlCO01BQ2pCQyxTQUFTO01BQ1RDLFdBQVc7O01BRVhDLGFBQWE7O01BRWJDLGlCQUFpQjtNQUNqQkMsY0FBYztNQUNkQyxjQUFjO01BQ2RDLHNCQUFzQjs7TUFFdEJDLGFBQWE7TUFDYkMsYUFBYTtNQUNiQyxlQUFlO01BQ2ZDLGdCQUFnQjs7TUFFaEJDLDBCQUEwQjs7TUFFMUJDLFlBQVk7TUFDWkMsV0FBVztNQUNYQyxVQUFVO01BQ1ZDLGNBQWM7TUFDZEMsUUFBUTtNQUNSQyxjQUFjO01BQ2RDLGFBQWE7TUFDYkMsWUFBWTtNQUNaQyxTQUFTO01BQ1RDLGdCQUFnQjtNQUNoQkMsd0JBQXdCO01BQ3hCQyxpQkFBaUI7TUFDakJDLFNBQVM7O01BRVRDLGVBQWU7TUFDZkMsZUFBZTtNQUNmQyxlQUFlO01BQ2ZDLGVBQWU7TUFDZkMseUJBQXlCO01BQ3pCQyx5QkFBeUI7TUFDekJDLGVBQWU7TUFDZkMsZUFBZTtNQUNmQyxpQkFBaUI7TUFDakJDLGlCQUFpQjtNQUNqQkMsbUJBQW1CO01BQ25CQyxtQkFBbUI7TUFDbkJDLGtCQUFrQjtNQUNsQkMsa0JBQWtCOztNQUVsQkMsV0FBVztNQUNYQyxTQUFTO01BQ1RDLFNBQVM7TUFDVEMsbUJBQW1CO01BQ25CQyxTQUFTO01BQ1RDLGdCQUFnQjtNQUNoQkMsV0FBVztNQUNYQyxrQkFBa0I7TUFDbEJDLFdBQVc7TUFDWEMsa0JBQWtCO01BQ2xCQyxhQUFhO01BQ2JDLG9CQUFvQjtNQUNwQkMsWUFBWTtNQUNaQyxtQkFBbUI7SUFDcEI7QUFDQSxVQUFNQyxnQkFBZ0JBLE1BQU07SUFBQztBQU83QixTQUFLQyxPQUFPLFNBQVUvSixXQUFXZ0ssV0FBVztBQUMzQzVFLFVBQUk4QyxnQkFBZ0JsSTtBQUNwQm9GLFVBQUkrQyxnQkFBZ0I2QixhQUFhRjtBQUVqQyxVQUFJLENBQUM5SixXQUFXO0FBQ2ZvRixZQUFJbkYsY0FBY1csTUFBTSwyREFBMkQ7QUFDbkZ3RSxZQUFJK0MsY0FBYyxJQUFJO0FBQ3RCO01BQ0Q7QUFDQS9DLFVBQUk0RCxZQUFZO1FBQ2ZuSSxRQUFRO1FBQ1JpRCxNQUFNO1FBQ05tRyxRQUFRO1FBQ1JDLGVBQWU7O1FBRWZDLGNBQWM7UUFDZG5GLE1BQU07UUFDTnJiLE1BQU07UUFDTm9hLFFBQVFxQixJQUFJeGY7UUFDWmtXLFFBQVE7O01BRVQ7QUFFQSxVQUFJc0osSUFBSU8sYUFBYSxPQUFPO0FBQzNCUCxZQUFJNEQsVUFBVS9FLFNBQVM7TUFDeEIsV0FBV21CLElBQUlPLGFBQWEsVUFBVTtBQUNyQ1AsWUFBSTRELFVBQVUvRSxTQUFTO0FBQ3ZCbUIsWUFBSTRELFVBQVVvQixVQUFVO0FBQ3hCaEYsWUFBSTRELFVBQVVxQixZQUFZakYsSUFBSXVCO01BQy9CO0FBQ0EsVUFBSXZCLElBQUk5RixnQkFBZ0I7QUFDdkI4RixZQUFJNEQsVUFBVXNCLFlBQVk7TUFDM0I7QUFFQSxVQUFJLE9BQU9sRixJQUFJZSxnQkFBZ0IsVUFBVTtBQUN4Q2YsWUFBSTRELFVBQVV1QixZQUFZbkYsSUFBSWU7TUFDL0I7QUFDQSxVQUFJNWlCLFNBQVNzQixhQUFhO0FBQ3pCdWdCLFlBQUk0RCxVQUFVaUIsVUFBVTtNQUN6QjtBQUNBN0UsVUFBSTZELFVBQVUsSUFBSTFsQixTQUFTd2IsS0FBS2MsSUFDL0JyYyxPQUFPZ1MsTUFBTSxVQUFVLFFBQVEsR0FDL0I0UCxJQUFJNEQsV0FDSndCLGVBQ0FwRixJQUFJbkYsZUFDSm1GLElBQUkrQyxhQUNMO0FBQ0EvQyxVQUFJNkQsUUFBUTFILFVBQVUsSUFBSTtBQUMxQjZELFVBQUk2RCxRQUFRekgsS0FBSztJQUNsQjtBQWNBLFNBQUtpSixPQUFPLFNBQVV6SyxXQUFXZ0ssV0FBVztBQUMzQzVFLFVBQUlnRCxnQkFBZ0JwSTtBQUNwQm9GLFVBQUlpRCxnQkFBZ0IyQixhQUFhRjtBQUVqQyxZQUFNWSxvQkFBb0JDLG9CQUFvQixNQUFNO0FBQ3BELFVBQUksQ0FBQ3ZGLElBQUlpQyxjQUFjLENBQUNxRCxtQkFBbUI7QUFDMUN0RixZQUFJbkYsY0FBY1csTUFBTSxrRUFBa0U7QUFDMUZ3RSxZQUFJaUQsY0FBYyxJQUFJO0FBQ3RCO01BQ0Q7QUFDQSxVQUFJLENBQUNqRCxJQUFJRSxhQUFhO0FBSXJCLFlBQUlGLElBQUlPLGFBQWEsU0FBU1AsSUFBSVcsaUJBQWlCO0FBQ2xEWCxjQUFJRSxjQUFjO1FBQ25CLE9BQU87QUFDTkYsY0FBSW5GLGNBQWNXLE1BQU0sbURBQW1EO0FBQzNFd0UsY0FBSWlELGNBQWMsSUFBSTtBQUN0QjtRQUNEO01BQ0Q7QUFFQSxVQUNDakQsSUFBSTBDLGtCQUNKLENBQUMxQyxJQUFJMkMsMEJBQ0wsQ0FBQzZDLFFBQ0F4RixJQUFJMEMsbUJBQW1CLGFBQ3BCdGtCLE9BQU9nUyxNQUFNLGVBQWUsYUFBYSxJQUN6QzRQLElBQUl4ZixXQUNKcEMsT0FBT2dTLE1BQ04sa0NBQ0EsZ0NBQ0QsSUFBQSxHQUFBblAsT0FFQTdDLE9BQU9nUyxNQUFNLGVBQWUsYUFBYSxJQUN6QzRQLElBQUl4ZixXQUNKcEMsT0FBT2dTLE1BQU0sU0FBUyxPQUFPLElBQzdCLElBQUlqUyxTQUFTWSxLQUFLaWhCLElBQUkwQyxjQUFjLEVBQUUxSixTQUFTLEtBQUssR0FDckQsY0FBQSxFQUFBL1gsT0FBZTdDLE9BQU9nUyxNQUNyQix1QkFDQSxxQkFDRCxDQUFDLENBQ0osR0FDQztBQUNENFAsWUFBSW5GLGNBQWNXLE1BQU1wZCxPQUFPZ1MsTUFBTSxpQkFBaUIsZUFBZSxDQUFDO0FBQ3RFNFAsWUFBSWlELGNBQWMsSUFBSTtBQUN0QjtNQUNEO0FBQ0FqRCxVQUFJNkMsVUFBVTtBQUNkLFlBQU1sSSxRQUFRO1FBQ2JjLFFBQVE7UUFDUnBSLE9BQU8yVixJQUFJeGY7UUFDWGlsQixTQUFTekYsSUFBSUU7UUFDYmhDLE9BQU9vSCxvQkFBb0JqbUIsR0FBR3FtQixLQUFLN0YsT0FBT3RnQixJQUFJLFdBQVcsSUFBSXlnQixJQUFJa0M7UUFDakV5RCxXQUFXM0YsSUFBSW1CO1FBQ2Z6SyxRQUFRO01BQ1Q7QUFDQSxVQUFJc0osSUFBSUcsWUFBWTtBQUNuQnhGLGNBQU1lLE9BQU9zRSxJQUFJRztNQUNsQjtBQUNBLFVBQUl5Rix1QkFBdUIsR0FBRztBQUM3QmpMLGNBQU1rTCxrQkFBa0I3RixJQUFJb0I7TUFDN0I7QUFDQSxVQUFJLE9BQU9wQixJQUFJZSxnQkFBZ0IsVUFBVTtBQUN4Q3BHLGNBQU1tTCxVQUFVOUYsSUFBSWU7TUFDckI7QUFFQSxVQUFJZixJQUFJYSxXQUFXO0FBQ2xCbEcsY0FBTW9MLFFBQVE7TUFDZixPQUFPO0FBQ05wTCxjQUFNcUwsV0FBVztNQUNsQjtBQUVBLFVBQUloRyxJQUFJYyxTQUFTO0FBQ2hCbkcsY0FBTXNMLE1BQU07TUFDYjtBQUNBLGNBQVFqRyxJQUFJTyxVQUFBO1FBQ1gsS0FBSztBQUNKLGNBQUlQLElBQUlRLGVBQWUsTUFBTTtBQUM1QlIsZ0JBQUluRixjQUFjVyxNQUFNLGtEQUFrRDtBQUMxRXdFLGdCQUFJaUQsY0FBYyxJQUFJO0FBQ3RCO1VBQ0Q7QUFDQXRJLGdCQUFNdUwsYUFBYWxHLElBQUlRO0FBQ3ZCO1FBQ0QsS0FBSztBQUNKLGNBQUlSLElBQUlTLGdCQUFnQixNQUFNO0FBQzdCVCxnQkFBSW5GLGNBQWNXLE1BQU0sbURBQW1EO0FBQzNFd0UsZ0JBQUlpRCxjQUFjLElBQUk7QUFDdEI7VUFDRDtBQUNBdEksZ0JBQU13TCxjQUFjbkcsSUFBSVM7QUFDeEI7UUFDRCxLQUFLO0FBQ0osY0FBSSxDQUFDVCxJQUFJVSxnQkFBZ0I7QUFFeEJWLGdCQUFJbkYsY0FBY1csTUFBTSx1REFBdUQ7QUFDL0V3RSxnQkFBSWlELGNBQWMsSUFBSTtBQUN0QjtVQUNEO0FBQ0F0SSxnQkFBTW1MLFVBQVU7QUFDaEJuTCxnQkFBTWpZLE9BQU9zZCxJQUFJVTtBQUNqQi9GLGdCQUFNeUwsZUFBZXBHLElBQUlXLG1CQUFtQlgsSUFBSUU7QUFDaEQ7UUFDRCxLQUFLO0FBQ0p2RixnQkFBTTBMLE9BQU9yRyxJQUFJdUM7QUFDakI1SCxnQkFBTTJMLFlBQVl0RyxJQUFJdUI7QUFDdEIsY0FBSXZCLElBQUlvQyxjQUFjO0FBQ3JCekgsa0JBQU00TCxnQkFBZ0J2RyxJQUFJb0M7VUFDM0I7QUFFQXpILGdCQUFNNkwsaUJBQWlCeEcsSUFBSW1DO0FBQzNCO1FBQ0Q7QUFFQ3hILGdCQUFNalksT0FBT3NkLElBQUlNO0FBQ2pCLGNBQUlOLElBQUlvQyxjQUFjO0FBQ3JCekgsa0JBQU00TCxnQkFBZ0J2RyxJQUFJb0M7VUFDM0I7QUFFQXpILGdCQUFNNkwsaUJBQWlCeEcsSUFBSW1DO0FBQzNCO01BQ0Y7QUFDQSxVQUFJLENBQUMsWUFBWSxjQUFjLFVBQVUsRUFBRTNpQixTQUFTd2dCLElBQUlZLFlBQVksR0FBRztBQUN0RWpHLGNBQU1xRixJQUFJWSxZQUFZLElBQUk7TUFDM0I7QUFDQSxVQUFJMEUscUJBQXFCdEYsSUFBSTlGLGdCQUFnQjtBQUM1Q1MsY0FBTVYsV0FBVztNQUNsQjtBQUNBK0YsVUFBSThELFVBQVUsSUFBSTNsQixTQUFTd2IsS0FBS2MsSUFDL0JyYyxPQUFPZ1MsTUFBTSxVQUFVLFFBQVEsR0FDL0J1SyxPQUNBOEwsZUFDQXpHLElBQUluRixlQUNKNkwsV0FDRDtBQUNBMUcsVUFBSThELFFBQVEzSCxVQUFVLElBQUk7QUFDMUI2RCxVQUFJOEQsUUFBUTFILEtBQUs7SUFDbEI7QUFTQSxTQUFLeFgsU0FBUyxTQUFVZ1csV0FBV2dLLFdBQVc7QUFDN0M1RSxVQUFJTyxXQUFXO0FBQ2YsVUFBSWdGLG9CQUFvQixNQUFNLEdBQUc7QUFDaEMsYUFBS0YsS0FBS3pLLFdBQVdnSyxTQUFTO01BQy9CLE9BQU87QUFDTjVFLFlBQUlnRCxnQkFBZ0JwSTtBQUNwQm9GLFlBQUlpRCxnQkFBZ0IyQixhQUFhRjtBQUNqQyxhQUFLQyxLQUFLZ0MsWUFBWTNHLElBQUlpRCxhQUFhO01BQ3hDO0lBQ0Q7QUFTQSxTQUFLMkQsVUFBVSxTQUFVaE0sV0FBV2dLLFdBQVc7QUFDOUM1RSxVQUFJTyxXQUFXO0FBQ2YsVUFBSWdGLG9CQUFvQixNQUFNLEdBQUc7QUFDaEMsYUFBS0YsS0FBS3pLLFdBQVdnSyxTQUFTO01BQy9CLE9BQU87QUFDTjVFLFlBQUlnRCxnQkFBZ0JwSTtBQUNwQm9GLFlBQUlpRCxnQkFBZ0IyQixhQUFhRjtBQUNqQyxhQUFLQyxLQUFLZ0MsWUFBWTNHLElBQUlpRCxhQUFhO01BQ3hDO0lBQ0Q7QUFZQSxTQUFLNEQsYUFBYSxTQUFVak0sV0FBV2dLLFdBQVc7QUFDakQ1RSxVQUFJTyxXQUFXO0FBQ2YsVUFBSWdGLG9CQUFvQixNQUFNLEdBQUc7QUFDaEMsYUFBS0YsS0FBS3pLLFdBQVdnSyxTQUFTO01BQy9CLE9BQU87QUFDTjVFLFlBQUlnRCxnQkFBZ0JwSTtBQUNwQm9GLFlBQUlpRCxnQkFBZ0IyQixhQUFhRjtBQUNqQyxhQUFLQyxLQUFLZ0MsWUFBWTNHLElBQUlpRCxhQUFhO01BQ3hDO0lBQ0Q7QUFFQSxTQUFLNkQsY0FBYyxNQUFNO0FBQ3hCLGFBQU85RyxJQUFJeGY7SUFDWjtBQUVBLFNBQUt1bUIsY0FBYyxNQUFNO0FBQ3hCLGFBQU8vRyxJQUFJTTtJQUNaO0FBRUEsU0FBSzBHLGNBQWUxRyxjQUFhO0FBQ2hDTixVQUFJTyxXQUFXO0FBQ2ZQLFVBQUlNLFdBQVdBO0lBQ2hCO0FBRUEsU0FBSzJHLGdCQUFpQnpHLGdCQUFlO0FBQ3BDUixVQUFJTyxXQUFXO0FBQ2ZQLFVBQUlRLGFBQWFBO0lBQ2xCO0FBRUEsU0FBSzBHLGlCQUFrQnpHLGlCQUFnQjtBQUN0Q1QsVUFBSU8sV0FBVztBQUNmUCxVQUFJUyxjQUFjQTtJQUNuQjtBQUVBLFNBQUswRyxvQkFBcUJ6RyxvQkFBbUI7QUFDNUNWLFVBQUlPLFdBQVc7QUFDZlAsVUFBSVUsaUJBQWlCQTtJQUN0QjtBQUtBLFNBQUswRyxxQkFBc0J6RyxxQkFBb0I7QUFDOUNYLFVBQUlPLFdBQVc7QUFDZlAsVUFBSVcsa0JBQWtCQTtJQUN2QjtBQVFBLFNBQUswRyxpQkFBa0I1QixhQUFZO0FBQ2xDekYsVUFBSUUsY0FBY3VGO0lBQ25CO0FBT0EsU0FBSzZCLGdCQUFpQjVMLFVBQVM7QUFDOUJzRSxVQUFJRyxhQUFhekU7SUFDbEI7QUFVQSxTQUFLNkwsa0JBQW1CM0csa0JBQWlCO0FBQ3hDWixVQUFJWSxlQUFlQTtJQUNwQjtBQUVBLFNBQUs0RyxlQUFnQjNHLGVBQWM7QUFDbENiLFVBQUlhLFlBQVlBO0lBQ2pCO0FBRUEsU0FBSzRHLGFBQWMzRyxhQUFZO0FBQzlCZCxVQUFJYyxVQUFVQTtJQUNmO0FBS0EsU0FBSzRHLGlCQUFrQjNHLGlCQUFnQjtBQUN0Q2YsVUFBSWUsY0FBY0E7SUFDbkI7QUFLQSxTQUFLNEcsd0JBQXlCM0csd0JBQXVCO0FBQ3BEaEIsVUFBSWdCLHFCQUFxQkE7SUFDMUI7QUFLQSxTQUFLNEcsZ0JBQWlCM0csZ0JBQWU7QUFDcENqQixVQUFJaUIsYUFBYUE7SUFDbEI7QUE0QkEsU0FBSzRHLGVBQWUsQ0FBQzFHLGlCQUFpQkMsb0JBQW9CO0FBQ3pELFVBQUlELDJCQUEyQmhqQixTQUFTWSxRQUFRb2lCLDJCQUEyQnhOLE1BQU07QUFDaEZ3TiwwQkFBa0JBLGdCQUFnQnBLLFlBQVk7TUFDL0M7QUFDQSxVQUFJcUssb0JBQW9CLFFBQVc7QUFDbENBLDBCQUFrQjtNQUNuQixXQUFXQSwyQkFBMkJqakIsU0FBU1ksUUFBUXFpQiwyQkFBMkJ6TixNQUFNO0FBQ3ZGeU4sMEJBQWtCQSxnQkFBZ0JySyxZQUFZO01BQy9DO0FBQ0EsY0FBUW9LLGlCQUFBO1FBQ1AsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztBQUNKbkIsY0FBSW1CLGtCQUFrQjtBQUd0Qm5CLGNBQUlvQixrQkFBa0I7QUFDdEI7UUFDRCxLQUFLO0FBRUpwQixjQUFJbUIsa0JBQWtCO0FBQ3RCO1FBQ0QsS0FBSztRQUNMLEtBQUs7QUFDSm5CLGNBQUltQixrQkFBa0I7QUFHdEJuQixjQUFJb0Isa0JBQWtCQTtBQUN0QjtRQUNELEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztBQUNKcEIsY0FBSW1CLGtCQUFrQjtBQUN0Qm5CLGNBQUlvQixrQkFBa0JBO0FBQ3RCO1FBQ0Q7QUFFQ3BCLGNBQUltQixrQkFBa0I7QUFDdEJuQixjQUFJb0Isa0JBQWtCRDtBQUN0QjtNQUNGO0lBQ0Q7QUFnQkEsU0FBSzJHLHFCQUFzQjFHLHFCQUFvQjtBQUM5QyxVQUFJQSxvQkFBb0IsUUFBVztBQUNsQ0EsMEJBQWtCO01BQ25CLFdBQVdBLDJCQUEyQmpqQixTQUFTWSxRQUFRcWlCLDJCQUEyQnpOLE1BQU07QUFDdkZ5TiwwQkFBa0JBLGdCQUFnQnJLLFlBQVk7TUFDL0M7QUFDQWlKLFVBQUlvQixrQkFBa0JBO0lBQ3ZCO0FBa0JBLFNBQUsyRyw4QkFBK0I1RyxxQkFBb0I7QUFDdkR2aEIsY0FBUUMsS0FDUCw0R0FDRDtBQUNBLFVBQUlzaEIsaUJBQWlCO0FBQ3BCbkIsWUFBSW1CLGtCQUFrQjtNQUN2QixPQUFPO0FBQ05uQixZQUFJbUIsa0JBQWtCO01BQ3ZCO0lBQ0Q7QUFXQSxTQUFLNkcsb0JBQW9CLENBQUM5TixnQkFBZ0JnSCwwQkFBMEI7QUFDbkUsVUFBSWxCLElBQUlpQyxZQUFZO0FBQ25CakMsWUFBSW5GLGNBQWNXLE1BQ2pCLGdGQUNEO0FBQ0E7TUFDRDtBQUNBd0UsVUFBSTlGLGlCQUFpQkE7QUFDckI4RixVQUFJa0Isd0JBQ0hBLDBCQUEwQixTQUFZbEIsSUFBSWtCLHdCQUF3QkE7SUFDcEU7QUFlQSxTQUFLK0csOEJBQStCQyxVQUFTO0FBQzVDbEksVUFBSWdDLDJCQUEyQmtHO0lBQ2hDO0FBR0EsU0FBS0MscUJBQXNCQyxpQkFBZ0I7QUFDMUNwSSxVQUFJd0Isa0JBQWtCNEc7SUFDdkI7QUFFQSxTQUFLQyxrQkFBbUJILFVBQVM7QUFDaENsSSxVQUFJeUIsZUFBZSxDQUFDLENBQUN5RztJQUN0QjtBQUVBLFNBQUtJLGtCQUFtQkosVUFBUztBQUNoQ2xJLFVBQUkwQixlQUFlLENBQUMsQ0FBQ3dHO0lBQ3RCO0FBRUEsU0FBS0ssMEJBQTJCTCxVQUFTO0FBQ3hDbEksVUFBSTJCLHVCQUF1QixDQUFDLENBQUN1RztJQUM5QjtBQU9BLFNBQUtNLG9CQUFvQixDQUFDdlosT0FBT2UsV0FBVztBQUMzQ2dRLFVBQUk0QixjQUFjO1FBQ2pCM1M7UUFDQWUsUUFBUUEsVUFBVTtNQUNuQjtJQUNEO0FBQ0EsU0FBS3lZLG9CQUFvQixDQUFDeFosT0FBT2UsV0FBVztBQUMzQ2dRLFVBQUk2QixjQUFjO1FBQ2pCNVM7UUFDQWUsUUFBUUEsVUFBVTtNQUNuQjtJQUNEO0FBQ0EsU0FBSzBZLHNCQUFzQixDQUFDelosT0FBT2UsV0FBVztBQUM3Q2dRLFVBQUk4QixnQkFBZ0I7UUFDbkI3UztRQUNBZSxRQUFRQSxVQUFVO01BQ25CO0lBQ0Q7QUFDQSxTQUFLMlkseUJBQTBCVCxVQUFTO0FBQ3ZDbEksVUFBSStCLGlCQUFpQixDQUFDLENBQUNtRztJQUN4QjtBQUNBLFNBQUt2Rix5QkFBeUIsTUFBTTtBQUNuQzNDLFVBQUkyQyx5QkFBeUI7SUFDOUI7QUFFQSxTQUFLaUcsV0FBWUMsV0FBVTtBQUMxQjdJLFVBQUl1QixjQUFjc0g7SUFDbkI7QUFFQSxTQUFLQyxlQUFlLE1BQU07QUFDekIsYUFBTzlJLElBQUl1QztJQUNaO0FBRUEsU0FBS3dHLGtCQUFrQixNQUFNO0FBQzVCLGFBQU8vSSxJQUFJd0M7SUFDWjtBQUVBLFNBQUt3RyxrQkFBa0IsTUFBTTtBQUM1QixhQUFPaEosSUFBSW9DO0lBQ1o7QUFjQSxTQUFLNkcsd0JBQXlCNUksd0JBQXVCO0FBQ3BETCxVQUFJSyxxQkFBcUJBO0lBQzFCO0FBSUEsU0FBSzZJLHdCQUF3QixNQUFNO0FBQ2xDLGFBQU9sSixJQUFJSztJQUNaO0FBSUEsU0FBS2hGLG1CQUFvQlIsbUJBQWtCO0FBQzFDbUYsVUFBSW5GLGdCQUFnQkE7SUFDckI7QUFJQSxTQUFLdUQsbUJBQW1CLE1BQU07QUFDN0IsYUFBTzRCLElBQUluRjtJQUNaO0FBSUEsU0FBS3NPLFNBQVMsTUFBTTtBQUNuQixhQUFPbkosSUFBSUM7SUFDWjtBQUtBLFNBQUttSixZQUFZLE1BQU07QUFDdEIsYUFBT3BKLElBQUlxQztJQUNaO0FBT0EsU0FBS2dILGtCQUFrQixNQUFNO0FBQzVCLGFBQU9ySixJQUFJc0M7SUFDWjtBQU1BLFNBQUtnSCxhQUFhLE1BQU07QUFDdkIsYUFBT3RKLElBQUl5QztJQUNaO0FBSUEsU0FBSzhHLGNBQWMsTUFBTTtBQUN4QixhQUFPdkosSUFBSW1DO0lBQ1o7QUFJQSxTQUFLcUgsYUFBYSxNQUFNO0FBQ3ZCLGFBQU94SixJQUFJcUI7SUFDWjtBQUlBLFNBQUtvSSx1QkFBdUIsTUFBTTtBQUNqQyxhQUFPekosSUFBSXNCO0lBQ1o7QUFFQSxTQUFLb0ksVUFBVSxNQUFNO0FBQ3BCLGFBQU8sQ0FBQyxDQUFDMUosSUFBSUksZUFBZUosSUFBSUksWUFBWTVnQixTQUFTLE1BQU07SUFDNUQ7QUFhQSxTQUFLbXFCLGlCQUFpQixTQUFVL08sV0FBV2dLLFdBQVc7QUFDckQ1RSxVQUFJa0QsMEJBQTBCdEk7QUFDOUJvRixVQUFJbUQsMEJBQTBCeUIsYUFBYUY7QUFDM0MsVUFBSSxDQUFDOUosV0FBVztBQUNmb0YsWUFBSW5GLGNBQWNXLE1BQU0scUVBQXFFO0FBQzdGd0UsWUFBSW1ELHdCQUF3QixJQUFJO0FBQ2hDO01BQ0Q7QUFDQSxZQUFNeEksUUFBUTtRQUNiYyxRQUFRO1FBQ1JpRCxNQUFNO1FBQ05DLFFBQVFxQixJQUFJeGY7UUFDWndrQixTQUFTO1FBQ1RuRyxRQUFRO1FBQ1IrSyxPQUFPO1FBQ1BsVCxRQUFRO01BQ1Q7QUFNQSxVQUFJc0osSUFBSWdDLDBCQUEwQjtBQUNqQ3JILGNBQU13SyxZQUFZO0FBQ2xCeEssY0FBTWtFLFVBQVU7TUFDakI7QUFDQSxVQUFJbUIsSUFBSTlGLGdCQUFnQjtBQUN2QlMsY0FBTXVLLFlBQVk7TUFDbkI7QUFFQWxGLFVBQUkrRCxvQkFBb0IsSUFBSTVsQixTQUFTd2IsS0FBS2MsSUFDekNyYyxPQUFPZ1MsTUFBTSxhQUFhLFdBQVcsR0FDckN1SyxPQUNBa1AseUJBQ0E3SixJQUFJbkYsZUFDSm1GLElBQUltRCx1QkFDTDtBQUNBbkQsVUFBSStELGtCQUFrQjVILFVBQVUsSUFBSTtBQUNwQzZELFVBQUkrRCxrQkFBa0IzSCxLQUFLO0lBQzVCO0FBT0EsU0FBSzBOLFNBQVMsU0FBVWxQLFdBQVdnSyxXQUFXO0FBQzdDNUUsVUFBSWdELGdCQUFnQnBJO0FBQ3BCb0YsVUFBSWlELGdCQUFnQjJCLGFBQWFGO0FBQ2pDLFVBQUksQ0FBQzFFLElBQUl1QixhQUFhO0FBQ3JCdkIsWUFBSW5GLGNBQWNXLE1BQU0scUVBQXFFO0FBQzdGd0UsWUFBSWlELGNBQWMsSUFBSTtBQUN0QjtNQUNEO0FBQ0FqRCxVQUFJTyxXQUFXO0FBQ2YsV0FBS29FLEtBQUtnQyxZQUFZM0csSUFBSWlELGFBQWE7SUFDeEM7QUFPQSxTQUFLOEcsT0FBTyxTQUFVblAsV0FBV2dLLFdBQVc7QUFDM0M1RSxVQUFJb0QsZ0JBQWdCeEk7QUFDcEJvRixVQUFJcUQsZ0JBQWdCdUIsYUFBYUY7QUFDakMsVUFBSSxDQUFDc0Ysa0JBQWtCck0sS0FBSyxNQUFNLFFBQVFxQyxJQUFJcUQsYUFBYSxHQUFHO0FBQzdEO01BQ0Q7QUFFQSxVQUFJLENBQUNyRCxJQUFJd0IsaUJBQWlCO0FBQ3pCeEIsWUFBSW5GLGNBQWNXLE1BQU0sZ0VBQWdFO0FBQ3hGd0UsWUFBSXFELGNBQWMsSUFBSTtBQUN0QjtNQUNEO0FBQ0EsVUFBSWtDLG9CQUFvQixNQUFNLEdBQUc7QUFDaEMwRSxzQkFBY3RNLEtBQUssTUFBTSxJQUFJO01BQzlCLE9BQU87QUFDTixjQUFNaEQsUUFBUXVQLHFCQUFxQixNQUFNO0FBQ3pDbEssWUFBSWdFLFVBQVUsSUFBSTdsQixTQUFTd2IsS0FBS2MsSUFDL0JyYyxPQUFPZ1MsTUFBTSxVQUFVLFFBQVEsR0FDL0J1SyxPQUNBc1AsZUFDQWpLLElBQUluRixlQUNKbUYsSUFBSXFELGFBQ0w7QUFDQXJELFlBQUlnRSxRQUFRN0gsVUFBVSxJQUFJO0FBQzFCNkQsWUFBSWdFLFFBQVE1SCxLQUFLO01BQ2xCO0lBQ0Q7QUFVQSxTQUFLK04sU0FBUyxXQUFZO0FBQ3pCLFVBQUksQ0FBQ2hzQixTQUFTc0IsZUFBZSxDQUFDdEIsU0FBU2dCLGNBQWMsV0FBVyxHQUFHO0FBQ2xFO01BQ0Q7QUFDQSxZQUFNYSxRQUFROUIsRUFBRSxNQUFNO0FBRXRCLFVBQUk4QixNQUFNRyxLQUFLLGFBQWEsRUFBRUMsUUFBUTtBQUNyQyxjQUFNZ3FCLGFBQWFwcUIsTUFBTUcsS0FBSyxlQUFlLEVBQUVzZCxLQUFLLE1BQU07QUFDMUR1QyxZQUFJcUssT0FBT2hyQixHQUFHNkQsS0FBS29uQixjQUFjLFFBQVFGLFVBQVU7QUFDbkRHLHdCQUFnQixNQUFNLElBQUk7TUFDM0IsT0FBTztBQUNOLGNBQU1DLGNBQWM7VUFDbkIvTyxRQUFRO1VBQ1JpRCxNQUFNO1VBQ05rQixNQUFNO1VBQ05yYixNQUFNOztVQUVONEIsTUFBTTs7VUFFTndZLFFBQVFxQixJQUFJeGY7VUFDWmlxQixRQUFRO1VBQ1JDLFNBQVMxSyxJQUFJeGY7VUFDYm1xQixTQUFTO1VBQ1RqVSxRQUFRO1FBQ1Q7QUFDQXNKLFlBQUlrRSxZQUFZLElBQUkvbEIsU0FBU3diLEtBQUtjLElBQ2pDcmMsT0FBT2dTLE1BQU0sVUFBVSxRQUFRLEdBQy9Cb2EsYUFDQUQsZUFDRDtBQUNBdkssWUFBSWtFLFVBQVUvSCxVQUFVLElBQUk7QUFDNUI2RCxZQUFJa0UsVUFBVTlILEtBQUs7TUFDcEI7SUFDRDtBQVFBLFNBQUt3TyxhQUFhLFNBQVVoUSxXQUFXZ0ssV0FBVztBQUNqRDVFLFVBQUlzRCxrQkFBa0IxSTtBQUN0Qm9GLFVBQUl1RCxrQkFBa0JxQixhQUFhRjtBQUNuQyxVQUFJLENBQUNzRixrQkFBa0JyTSxLQUFLLE1BQU0sVUFBVXFDLElBQUl1RCxlQUFlLEdBQUc7QUFDakU7TUFDRDtBQUVBLFVBQUlnQyxvQkFBb0IsUUFBUSxHQUFHO0FBQ2xDc0Ysd0JBQWdCbE4sS0FBSyxNQUFNLElBQUk7TUFDaEMsT0FBTztBQUNOLGNBQU1oRCxRQUFRdVAscUJBQXFCLFFBQVE7QUFDM0NsSyxZQUFJb0UsWUFBWSxJQUFJam1CLFNBQVN3YixLQUFLYyxJQUNqQ3JjLE9BQU9nUyxNQUFNLFVBQVUsUUFBUSxHQUMvQnVLLE9BQ0FrUSxpQkFDQTdLLElBQUluRixlQUNKbUYsSUFBSXVELGVBQ0w7QUFDQXZELFlBQUlvRSxVQUFVakksVUFBVSxJQUFJO0FBQzVCNkQsWUFBSW9FLFVBQVVoSSxLQUFLO01BQ3BCO0lBQ0Q7QUFPQSxTQUFLME8sZUFBZSxTQUFVbFEsV0FBV2dLLFdBQVc7QUFDbkQ1RSxVQUFJd0Qsb0JBQW9CNUk7QUFDeEJvRixVQUFJeUQsb0JBQW9CbUIsYUFBYUY7QUFDckMsVUFBSSxDQUFDc0Ysa0JBQWtCck0sS0FBSyxNQUFNLFlBQVlxQyxJQUFJeUQsaUJBQWlCLEdBQUc7QUFDckU7TUFDRDtBQUVBLFVBQUk4QixvQkFBb0IsVUFBVSxHQUFHO0FBQ3BDd0YsMEJBQWtCcE4sS0FBSyxNQUFNLElBQUk7TUFDbEMsT0FBTztBQUNOLGNBQU1oRCxRQUFRdVAscUJBQXFCLFVBQVU7QUFDN0NsSyxZQUFJc0UsY0FBYyxJQUFJbm1CLFNBQVN3YixLQUFLYyxJQUNuQ3JjLE9BQU9nUyxNQUFNLFVBQVUsUUFBUSxHQUMvQnVLLE9BQ0FvUSxtQkFDQS9LLElBQUluRixlQUNKbUYsSUFBSXlELGlCQUNMO0FBQ0F6RCxZQUFJc0UsWUFBWW5JLFVBQVUsSUFBSTtBQUM5QjZELFlBQUlzRSxZQUFZbEksS0FBSztNQUN0QjtJQUNEO0FBT0EsU0FBSzRPLFVBQVUsU0FBVXBRLFdBQVdnSyxXQUFXO0FBQzlDNUUsVUFBSTBELG1CQUFtQjlJO0FBQ3ZCb0YsVUFBSTJELG1CQUFtQmlCLGFBQWFGO0FBQ3BDLFVBQUksQ0FBQ3NGLGtCQUFrQnJNLEtBQUssTUFBTSxXQUFXcUMsSUFBSTJELGdCQUFnQixHQUFHO0FBQ25FO01BQ0Q7QUFFQSxVQUFJLENBQUMzRCxJQUFJNEIsZUFBZSxDQUFDNUIsSUFBSTZCLGVBQWUsQ0FBQzdCLElBQUk4QixlQUFlO0FBQy9EOUIsWUFBSW5GLGNBQWNXLE1BQ2pCLGtHQUNEO0FBQ0F3RSxZQUFJMkQsaUJBQWlCLElBQUk7QUFDekI7TUFDRDtBQUlBLFlBQU1oSixRQUFRdVAscUJBQXFCLFNBQVM7QUFDNUNsSyxVQUFJd0UsYUFBYSxJQUFJcm1CLFNBQVN3YixLQUFLYyxJQUNsQ3JjLE9BQU9nUyxNQUFNLFVBQVUsUUFBUSxHQUMvQnVLLE9BQ0FzUSxrQkFDQWpMLElBQUluRixlQUNKbUYsSUFBSTJELGdCQUNMO0FBQ0EzRCxVQUFJd0UsV0FBV3JJLFVBQVUsSUFBSTtBQUM3QjZELFVBQUl3RSxXQUFXcEksS0FBSztJQUNyQjtBQWtCQSxVQUFNbUosc0JBQXVCOUosWUFBVztBQUN2Q0EsaUJBQUFBLFNBQVc7QUFJWCxVQUFJdUUsSUFBSW9CLG1CQUFtQixDQUFDampCLFNBQVN3QyxPQUFPb1AsV0FBV2lRLElBQUlvQixlQUFlLEdBQUc7QUFDNUUsZUFBTztNQUNSO0FBR0EsVUFBSXBCLElBQUk5RixnQkFBZ0I7QUFDdkIsWUFBSSxDQUFDOEYsSUFBSWtCLHVCQUF1QjtBQUMvQixpQkFBTztRQUNSO0FBRUEsWUFBSXpGLFdBQVcsVUFBVXVFLElBQUlPLGFBQWEsU0FBU1AsSUFBSU8sYUFBYSxVQUFVO0FBQzdFLGlCQUFPO1FBQ1I7TUFDRDtBQUVBLFVBQUlwaUIsU0FBU3NCLGVBQWUsQ0FBQ3VnQixJQUFJMkMsd0JBQXdCO0FBQ3hELFlBQ0MsSUFBSXRqQixHQUFHeUIsTUFBTTNDLFNBQVNrQyxZQUFZLEVBQUU2cUIsZ0JBQWdCLE1BQ3BELElBQUk3ckIsR0FBR3lCLE1BQU1rZixJQUFJeGYsUUFBUSxFQUFFMHFCLGdCQUFnQixHQUMxQztBQUNELGlCQUFPO1FBQ1I7QUFHQSxjQUFNQyxrQkFBa0I5ckIsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUI7QUFDekQsWUFBSSxDQUFDNHJCLG1CQUFtQkEsZ0JBQWdCM3JCLFNBQVMsT0FBTyxHQUFHO0FBQzFELGlCQUFPO1FBQ1I7TUFDRDtBQUNBLGFBQU8sQ0FBQyxDQUFDSCxHQUFHcW1CLEtBQUs3RixPQUFPdGdCLElBQUksV0FBVztJQUN4QztBQWVBLFVBQU0ycUIsdUJBQXdCek8sWUFBVztBQUN4QyxZQUFNZCxRQUFRO1FBQ2JjLFFBQVE7UUFDUm1FLE1BQU07UUFDTnJiLE1BQU07UUFDTm9hLFFBQVFxQixJQUFJeGY7UUFDWmtlLE1BQU07UUFDTm1HLFFBQVE7UUFDUm5PLFFBQVE7TUFDVDtBQUVBLFVBQUkrRSxXQUFXLFVBQVV0ZCxTQUFTc0IsYUFBYTtBQUM5Q2tiLGNBQU1rSyxVQUFVO01BQ2pCO0FBQ0EsVUFBSTdFLElBQUk5RixrQkFBa0J1QixXQUFXLFlBQVk7QUFDaERkLGNBQU11SyxZQUFZO01BQ25CO0FBRUEsYUFBT3ZLO0lBQ1I7QUFFQSxVQUFNZ00sYUFBY3lFLGFBQVk7QUFDL0JBLGNBQVEvRixLQUFLckYsSUFBSWdELGVBQWVoRCxJQUFJaUQsYUFBYTtJQUNsRDtBQUVBLFVBQU1tQyxnQkFBZ0IsV0FBWTtBQUNqQyxZQUFNdkosV0FBV21FLElBQUk2RCxRQUFRckYsWUFBWSxFQUFFN0Q7QUFDM0MsVUFBSSxDQUFDMFEsZ0JBQWdCeFAsVUFBVW1FLElBQUkrQyxhQUFhLEdBQUc7QUFDbEQ7TUFDRDtBQUVBLFlBQU0sQ0FBQ2hELElBQUksSUFBSWxFLFNBQVNzRDtBQUN4QixVQUFJbU07QUFDSnRMLFVBQUlDLGFBQWEsQ0FBQ0YsS0FBS3dMO0FBQ3ZCLFVBQUl2TCxJQUFJQyxZQUFZO0FBQ25CLFNBQUNxTCxHQUFHLElBQUl2TCxLQUFLWDtBQUNiWSxZQUFJb0MsZUFBZWtKLElBQUloSztBQUN2QnRCLFlBQUlNLFdBQVdnTCxJQUFJeG9CO0FBQ25Ca2QsWUFBSXFDLFNBQVN0QyxLQUFLeUw7TUFDbkIsT0FBTztBQUNOeEwsWUFBSU0sV0FBVztBQUNmTixZQUFJcUMsU0FBUztNQUNkO0FBRUFyQyxVQUFJa0MsWUFBWXJHLFNBQVNnRSxPQUFPQztBQUNoQyxVQUFJLENBQUNFLElBQUlrQyxXQUFXO0FBQ25CbEMsWUFBSW5GLGNBQWNXLE1BQU1wZCxPQUFPZ1MsTUFBTSxhQUFhLFdBQVcsQ0FBQztBQUM5RDRQLFlBQUkrQyxjQUFjLElBQUk7QUFDdEI7TUFDRDtBQUNBL0MsVUFBSW1DLFdBQVduQyxJQUFJNkQsUUFBUXJGLFlBQVksRUFBRXVHO0FBQ3pDLFVBQUksQ0FBQy9FLElBQUltQyxVQUFVO0FBQ2xCbkMsWUFBSW5GLGNBQWNXLE1BQU1wZCxPQUFPZ1MsTUFBTSxjQUFjLFlBQVksQ0FBQztBQUNoRTRQLFlBQUkrQyxjQUFjLElBQUk7QUFDdEI7TUFDRDtBQUNBL0MsVUFBSXNDLGVBQWV2QyxLQUFLMEw7QUFDeEJ6TCxVQUFJeUMsVUFBVTFDLEtBQUs4RixtQkFBbUI5RixLQUFLMEM7QUFHM0MsVUFBSXRrQixTQUFTc0IsYUFBYTtBQUN6QixjQUFNaXNCLFdBQVczTCxLQUFLNEwsV0FDcEI5ZixPQUFRK2YsUUFBTztBQUNmLGlCQUFPQSxHQUFHcm5CLFNBQVMsVUFBVXFuQixHQUFHM2MsVUFBVTtRQUMzQyxDQUFDLEVBQ0E0YyxJQUFJO0FBQ04sWUFBSUgsVUFBVTtBQUNiMUwsY0FBSTBDLGlCQUFpQmdKLFNBQVMxYjtRQUMvQixPQUFPO0FBQ05nUSxjQUFJMEMsaUJBQWlCO1FBQ3RCO01BQ0Q7QUFDQTFDLFVBQUl1QyxjQUFjeEMsS0FBSytMO0FBQ3ZCLFlBQU1DLGNBQWNoTSxLQUFLaU07QUFDekJoTSxVQUFJSSxjQUFjLENBQUE7QUFDbEIsZUFBQTZMLE1BQUEsR0FBQUMsZUFBcUJ2b0IsT0FBTzZTLEtBQUt1VixXQUFXLEdBQUFFLE1BQUFDLGFBQUE5ckIsUUFBQTZyQixPQUFHO0FBQS9DLGNBQVd4USxTQUFBeVEsYUFBQUQsR0FBQTtBQUNWLFlBQUlGLFlBQVl0USxNQUFNLEdBQUc7QUFDeEJ1RSxjQUFJSSxZQUFZcmMsS0FBSzBYLE1BQU07UUFDNUI7TUFDRDtBQUNBLFVBQUl1RSxJQUFJTyxhQUFhLFVBQVU7QUFDOUJQLFlBQUl1QyxjQUFjK0ksT0FBT0EsSUFBSWE7QUFDN0IsWUFBSSxDQUFDbk0sSUFBSXVDLGFBQWE7QUFDckJ2QyxjQUFJbkYsY0FBY1csTUFBTXBkLE9BQU9nUyxNQUFNLGlCQUFpQixlQUFlLENBQUM7QUFDdEU0UCxjQUFJK0MsY0FBYyxJQUFJO0FBQ3RCO1FBQ0Q7QUFDQS9DLFlBQUl3QyxhQUFhOEksT0FBT0EsSUFBSTVGO0FBQzVCLFlBQUksQ0FBQzFGLElBQUl3QyxZQUFZO0FBQ3BCLGNBQUk4SSxPQUFPQSxJQUFJYyxZQUFZO0FBRTFCcE0sZ0JBQUl3QyxhQUFhcGtCLE9BQU9nUyxNQUFNLFlBQVksWUFBWTtVQUN2RCxPQUFPO0FBQ040UCxnQkFBSW5GLGNBQWNXLE1BQ2pCcGQsT0FBT2dTLE1BQU0sa0JBQWtCLGdCQUFnQixDQUNoRDtBQUNBNFAsZ0JBQUkrQyxjQUFjLElBQUk7QUFDdEI7VUFDRDtRQUNEO0FBRUEvQyxZQUFJRSxjQUFBLG9CQUFBamYsT0FBa0MrZSxJQUFJd0MsWUFBVSxPQUFBLEVBQUF2aEIsT0FBUTdDLE9BQU9nUyxNQUFNLE9BQU8sS0FBSyxDQUFDLEVBQUFuUCxPQUNyRitlLElBQUl1QixhQUNMLEdBQUEsRUFBQXRnQixPQUFJK2UsSUFBSUUsV0FBVztNQUNwQjtBQUNBRixVQUFJaUMsYUFBYTtBQUVqQmpDLFVBQUk4QyxjQUFjLElBQUk7SUFDdkI7QUFFQSxVQUFNdUksa0JBQWtCLFNBQVV4UCxVQUFVK0ksV0FBVztBQUN0RCxVQUFJLENBQUNBLFdBQVc7QUFDZkEsb0JBQVlGO01BQ2I7QUFDQSxZQUFNM0UsT0FBT2xFLFNBQVNzRCxTQUFTdEQsU0FBU3NELE1BQU0sQ0FBQztBQUMvQyxVQUFJWSxNQUFNO0FBRVQsWUFBSUEsS0FBS3NNLFNBQVM7QUFDakJyTSxjQUFJbkYsY0FBY1csTUFBTXBkLE9BQU9nUyxNQUFNLFVBQUEsU0FBQW5QLE9BQW1CK2UsSUFBSXhmLFFBQVEsQ0FBRSxDQUFDO0FBQ3ZFb2tCLG9CQUFVLElBQUk7QUFDZCxpQkFBTztRQUNSO0FBRUEsY0FBTTBILGVBQWV2TSxLQUFLMVY7QUFDMUIsWUFBSXdSLFNBQVNxSixXQUFXO0FBRXZCLGdCQUFNcUgsU0FBUyxJQUFJbHRCLEdBQUd5QixNQUFNa2YsSUFBSXhmLFFBQVEsRUFBRWdzQjtBQUMxQyxnQkFBTUMsUUFBUSxJQUFJcHRCLEdBQUd5QixNQUFNd3JCLFlBQVksRUFBRUU7QUFDekMsY0FBSUQsV0FBV0UsU0FBUyxDQUFDek0sSUFBSWtCLHVCQUF1QjtBQUNuRGxCLGdCQUFJbkYsY0FBY1csTUFDakJ3RSxJQUFJeGYsV0FDSHBDLE9BQU9nUyxNQUFNLGNBQWMsYUFBYSxJQUN4Q2tjLGVBQ0FsdUIsT0FBT2dTLE1BQU0sT0FBTyxLQUFLLENBQzNCO0FBQ0F3VSxzQkFBVSxJQUFJO0FBQ2QsbUJBQU87VUFDUjtBQUVBLGNBQUl6bUIsU0FBUzZiLE9BQ1o1YixPQUFPZ1MsTUFBTSxNQUFNLElBQUksR0FDdkJoUyxPQUFPZ1MsTUFBTSxNQUFNLElBQUksSUFDdEI0UCxJQUFJeGYsV0FDSnBDLE9BQU9nUyxNQUFNLFVBQVUsU0FBUyxJQUNoQ2tjLFlBQ0Y7UUFDRDtBQUNBdE0sWUFBSXhmLFdBQVc4ckI7TUFDaEIsT0FBTztBQUVOdE0sWUFBSW5GLGNBQWNXLE1BQ2pCcGQsT0FBT2dTLE1BQU0sZUFBZSxjQUFjLElBQUk0UCxJQUFJeGYsUUFDbkQ7QUFDQW9rQixrQkFBVSxJQUFJO0FBRWQsVUFBRXptQixTQUFTd2IsS0FBS0M7QUFDaEIsZUFBTztNQUNSO0FBRUEsYUFBTztJQUNSO0FBWUEsVUFBTWdNLHlCQUF5QkEsTUFBTTtBQUNwQyxVQUFJNUYsSUFBSW9CLGlCQUFpQjtBQUN4QixZQUFJLENBQUNwQixJQUFJeUMsV0FBV3RrQixTQUFTd0MsT0FBT29QLFdBQVdpUSxJQUFJb0IsZUFBZSxHQUFHO0FBQ3BFLGlCQUFPO1FBQ1IsV0FBVyxPQUFPcEIsSUFBSXlDLFlBQVksVUFBVTtBQUMzQyxjQUFJaUs7QUFHSixnQkFBTUMsTUFBTTNNLElBQUlvQixnQkFBZ0JuVCxNQUFNLEdBQUc7QUFDekMsY0FBSTtBQUNIeWUsd0JBQVksSUFBSXZ1QixTQUFTWSxLQUFLLEVBQUVxWCxJQUFJdVcsSUFBSSxDQUFDLEdBQUdBLElBQUksQ0FBQyxDQUFDO1VBQ25ELFFBQVE7QUFDUEQsd0JBQVksSUFBSXZ1QixTQUFTWSxLQUFLaWhCLElBQUlvQixlQUFlO1VBQ2xEO0FBRUEsY0FBSXNMLFVBQVV4WSxRQUFRLEdBQUc7QUFDeEIsZ0JBQUl3WSxVQUFVblgsUUFBUSxJQUFJcFgsU0FBU1ksS0FBS2loQixJQUFJeUMsT0FBTyxDQUFDLEdBQUc7QUFDdEQscUJBQU87WUFDUjtVQUNELE9BQU87QUFJTixtQkFBTztVQUNSO1FBQ0Q7TUFDRDtBQUNBLGFBQU87SUFDUjtBQUVBLFVBQU1nRSxnQkFBZ0IsV0FBWTtBQUNqQ3pHLFVBQUlPLFdBQVc7QUFDZixZQUFNMUUsV0FBV21FLElBQUk4RCxRQUFRdEYsWUFBWTtBQUV6QyxVQUFJM0MsU0FBUytRLEtBQUtsakIsV0FBVyxXQUFXO0FBR3ZDLGNBQU1takIsT0FBTzVzQixTQUFTMEYsY0FBYyxHQUFHO0FBQ3ZDa25CLGFBQUtobkIsYUFBYSxRQUFReEcsR0FBRzZELEtBQUtDLE9BQU82YyxJQUFJeGYsUUFBUSxDQUFDO0FBQ3REcXNCLGFBQUs1cUIsWUFBWWhDLFNBQVNzRyxlQUFleVosSUFBSXhmLFFBQVEsQ0FBQztBQUN0RHdmLFlBQUluRixjQUFjK0MsS0FBSyxDQUFDLE9BQU9pUCxNQUFNLEdBQUcsQ0FBQztBQUN6QyxZQUFJN00sSUFBSWdELGVBQWU7QUFDdEJoRCxjQUFJZ0QsY0FBYyxJQUFJO1FBQ3ZCO0FBRUE7TUFDRDtBQUdBLFVBQUluSCxTQUFTK1EsS0FBS0UsU0FBUztBQUMxQjlNLFlBQUluRixjQUFjVyxNQUNqQnBkLE9BQU9nUyxNQUFNLHdCQUF3QixzQkFBc0IsQ0FDNUQ7TUFDRCxPQUFPO0FBQ040UCxZQUFJbkYsY0FBY1csTUFBTXBkLE9BQU9nUyxNQUFNLG1CQUFtQixpQkFBaUIsQ0FBQztNQUMzRTtBQUVBLFFBQUVqUyxTQUFTd2IsS0FBS0M7QUFDaEJvRyxVQUFJaUQsY0FBYyxJQUFJO0lBQ3ZCO0FBRUEsVUFBTXlELGNBQWMsV0FBWTtBQUMvQixZQUFNMUssWUFBWWdFLElBQUk4RCxRQUFRekYsYUFBYTtBQUUzQyxVQUFJckMsY0FBYyxrQkFBa0JnRSxJQUFJNEMsb0JBQW9CNUMsSUFBSWdCLG9CQUFvQjtBQUVuRixjQUFNK0wsYUFBYTtVQUNsQnRSLFFBQVE7VUFDUmtELFFBQVFxQixJQUFJeGY7O1FBQ2I7QUFFQSxjQUFNd3NCLFdBQVcsSUFBSTd1QixTQUFTd2IsS0FBS2MsSUFDbENyYyxPQUFPZ1MsTUFBTSxxQkFBcUIsbUJBQW1CLEdBQ3JEMmMsWUFDQSxNQUFNO0FBQ0wsWUFBRTV1QixTQUFTd2IsS0FBS0M7QUFDaEJvRyxjQUFJbkYsY0FBYytDLEtBQUt4ZixPQUFPZ1MsTUFBTSxnQkFBZ0IsY0FBYyxDQUFDO0FBQ25FLGNBQUltVixvQkFBb0IsTUFBTSxHQUFHO0FBQ2hDdkYsZ0JBQUk4RCxRQUFRMUgsS0FBSztVQUNsQixPQUFPO0FBQ040RCxnQkFBSTZELFFBQVF6SCxLQUFLO1VBQ2xCO1FBQ0QsR0FDQTRELElBQUluRixhQUNMO0FBQ0FtUyxpQkFBUzVRLEtBQUs7TUFFZixZQUFZSixjQUFjLFFBQVFBLGNBQWMsV0FBY2dFLElBQUk2QyxZQUFZN0MsSUFBSWlCLFlBQVk7QUFFN0ZqQixZQUFJbkYsY0FBYytDLEtBQUt4ZixPQUFPZ1MsTUFBTSxpQkFBaUIsZUFBZSxDQUFDO0FBQ3JFLFVBQUVqUyxTQUFTd2IsS0FBS0M7QUFFaEJxVCxjQUFNLEdBQUksRUFBRTlQLEtBQUssTUFBTTtBQUN0QjZDLGNBQUk4RCxRQUFRMUgsS0FBSztRQUNsQixDQUFDO01BRUYsT0FBTztBQUNOLGNBQU1QLFdBQVdtRSxJQUFJOEQsUUFBUXRGLFlBQVk7QUFDekMsY0FBTTBPLFlBQ0xyUixTQUFTTDtRQUVUSyxTQUFTd0IsT0FBTyxDQUFDLEVBQUV4WTtBQUNwQixnQkFBUW1YLFdBQUE7VUFDUCxLQUFLO0FBRUpnRSxnQkFBSW5GLGNBQWNXLE1BQU1wZCxPQUFPZ1MsTUFBTSxnQkFBZ0IsY0FBYyxDQUFDO0FBQ3BFO1VBQ0QsS0FBSztBQUNKNFAsZ0JBQUluRixjQUFjVyxNQUNqQnBkLE9BQU9nUyxNQUFNLGdCQUFnQixjQUFjLElBQzFDOGMsVUFBVUMsWUFBWUMsY0FDdEJodkIsT0FBT2dTLE1BQ04sb0RBQ0Esa0RBQ0QsQ0FDRjtBQUNBO1VBQ0QsS0FBSztBQUNKNFAsZ0JBQUluRixjQUFjVyxNQUFNLENBQ3ZCcGQsT0FBT2dTLE1BQU0sZ0JBQWdCLGNBQWMsR0FDM0M4YyxVQUFVQyxZQUFZQyxhQUN0Qmh2QixPQUFPZ1MsTUFDTiw4Q0FDQSw0Q0FDRCxDQUFBLENBQ0E7QUFHRDtVQUNELEtBQUssaUJBQWlCO0FBRXJCLGtCQUFNLENBQUNpZCxJQUFJLElBQUlILFVBQVVJLGNBQWNDO0FBQ3ZDdk4sZ0JBQUluRixjQUFjVyxNQUNqQnBkLE9BQU9nUyxNQUFNLGdCQUFnQixjQUFjLElBQzFDaWQsT0FDQWp2QixPQUFPZ1MsTUFBTSxlQUFlLGFBQWEsQ0FDM0M7QUFDQTtVQUNEO1VBQ0E7QUFDQzRQLGdCQUFJbkYsY0FBY1csTUFDakJwZCxPQUFPZ1MsTUFBTSxXQUFXLFNBQVMsSUFBSTRQLElBQUk4RCxRQUFReEYsYUFBYSxDQUMvRDtRQUNGO0FBQ0EwQixZQUFJTyxXQUFXO0FBQ2YsWUFBSVAsSUFBSWlELGVBQWU7QUFDdEJqRCxjQUFJaUQsY0FBYyxJQUFJO1FBQ3ZCO01BQ0Q7SUFDRDtBQUVBLFVBQU11SyxpQkFBa0I5cUIsVUFBUztBQUNoQyxVQUFJLENBQUNBLE1BQU07QUFFVixlQUFPO01BQ1I7QUFDQSxhQUFPdkUsU0FBU0UsS0FBS0MsbUJBQW1CbXZCLEtBQU1DLFNBQVE7QUFDckQsZUFBTyxJQUFJNWIsT0FBQSxRQUFBN1EsT0FBZXlzQixLQUFHLEtBQUEsR0FBTyxHQUFHLEVBQUUzYixLQUFLclAsSUFBSTtNQUNuRCxDQUFDO0lBQ0Y7QUFDQSxVQUFNbW5CLDBCQUEwQixXQUFZO0FBQzNDLFlBQU1oTyxXQUFXbUUsSUFBSStELGtCQUFrQnZGLFlBQVksRUFBRTdEO0FBQ3JELFVBQUksQ0FBQzBRLGdCQUFnQnhQLFVBQVVtRSxJQUFJbUQsdUJBQXVCLEdBQUc7QUFDNUQ7TUFDRDtBQUVBLFlBQU1tSSxNQUFNelAsU0FBU3NELE1BQU0sQ0FBQyxFQUFFQyxhQUFhdkQsU0FBU3NELE1BQU0sQ0FBQyxFQUFFQyxVQUFVLENBQUM7QUFDeEUsVUFBSSxDQUFDa00sS0FBSztBQUNUdEwsWUFBSW5GLGNBQWNXLE1BQ2pCcGQsT0FBT2dTLE1BQU0sUUFBUSxNQUFNLElBQzFCNFAsSUFBSXhmLFdBQ0pwQyxPQUFPZ1MsTUFBTSxXQUFXLFNBQVMsQ0FDbkM7QUFDQTRQLFlBQUltRCx3QkFBd0IsSUFBSTtBQUNoQztNQUNEO0FBQ0EsVUFBSSxDQUFDbkQsSUFBSWdDLDRCQUE0QixDQUFDd0wsZUFBZWxDLElBQUl4b0IsT0FBTyxHQUFHO0FBQ2xFa2QsWUFBSXFCLFVBQVVpSyxJQUFJNUY7QUFDbEIsWUFBSSxDQUFDMUYsSUFBSXFCLFNBQVM7QUFDakJyQixjQUFJbkYsY0FBY1csTUFBTXBkLE9BQU9nUyxNQUFNLGdCQUFnQixjQUFjLENBQUM7QUFDcEU0UCxjQUFJbUQsd0JBQXdCLElBQUk7QUFDaEM7UUFDRDtBQUNBbkQsWUFBSXNCLFlBQVlnSyxJQUFJaEs7QUFDcEIsWUFBSSxDQUFDdEIsSUFBSXNCLFdBQVc7QUFDbkJ0QixjQUFJbkYsY0FBY1csTUFBTXBkLE9BQU9nUyxNQUFNLGNBQWMsWUFBWSxDQUFDO0FBQ2hFNFAsY0FBSW1ELHdCQUF3QixJQUFJO0FBQ2hDO1FBQ0Q7QUFDQW5ELFlBQUluRixjQUFjK0MsS0FBS3hmLE9BQU9nUyxNQUFNLGFBQWEsV0FBVyxDQUFDO0FBQzdENFAsWUFBSWtELHdCQUF3QixJQUFJO01BQ2pDLE9BQU87QUFDTmxELFlBQUkrRCxrQkFBa0JwSixNQUFNcUssVUFBVTtBQUN0Q2hGLFlBQUkrRCxrQkFBa0JwSixNQUFNZ0UsU0FBU3FCLElBQUl4ZjtBQUN6Q3dmLFlBQUkrRCxvQkFBb0IsSUFBSTVsQixTQUFTd2IsS0FBS2MsSUFDekNyYyxPQUFPZ1MsTUFBTSxZQUFZLFVBQVUsR0FDbkM0UCxJQUFJK0Qsa0JBQWtCcEosT0FDdEJnVCw0QkFDQTNOLElBQUluRixlQUNKbUYsSUFBSW1ELHVCQUNMO0FBQ0FuRCxZQUFJK0Qsa0JBQWtCNUgsVUFBVSxJQUFJO0FBQ3BDNkQsWUFBSStELGtCQUFrQjNILEtBQUs7TUFDNUI7SUFDRDtBQUNBLFVBQU11Uiw2QkFBNkIsV0FBWTtBQUM5QyxZQUFNOVIsV0FBV21FLElBQUkrRCxrQkFBa0J2RixZQUFZLEVBQUU3RDtBQUNyRCxZQUFNaVQsT0FBTy9SLFNBQVNzRCxNQUFNLENBQUMsRUFBRUM7QUFBQSxVQUFBeU8sYUFBQXBzQiwyQkFDYm1zQixJQUFBLEdBQUFFO0FBQUEsVUFBQTtBQUFsQixhQUFBRCxXQUFBbHNCLEVBQUEsR0FBQSxFQUFBbXNCLFNBQUFELFdBQUFqc0IsRUFBQSxHQUFBQyxRQUF3QjtBQUFBLGdCQUFieXBCLE1BQUF3QyxPQUFBL3JCO0FBQ1YsY0FBSSxDQUFDeXJCLGVBQWVsQyxJQUFJeG9CLE9BQU8sR0FBRztBQUNqQ2tkLGdCQUFJcUIsVUFBVWlLLElBQUk1RjtBQUNsQjFGLGdCQUFJc0IsWUFBWWdLLElBQUloSztBQUNwQjtVQUNEO1FBQ0Q7TUFBQSxTQUFBL2UsS0FBQTtBQUFBc3JCLG1CQUFBcnJCLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUFzckIsbUJBQUFwckIsRUFBQTtNQUFBO0FBQ0EsVUFBSSxDQUFDdWQsSUFBSXFCLFNBQVM7QUFFakJyQixZQUFJcUIsVUFBVXVNLEtBQUssQ0FBQyxFQUFFbEk7QUFDdEIxRixZQUFJc0IsWUFBWXNNLEtBQUssQ0FBQyxFQUFFdE07QUFDeEIsWUFBSSxDQUFDdEIsSUFBSXFCLFNBQVM7QUFDakJyQixjQUFJbkYsY0FBY1csTUFBTXBkLE9BQU9nUyxNQUFNLGdCQUFnQixjQUFjLENBQUM7QUFDcEU0UCxjQUFJbUQsd0JBQXdCLElBQUk7QUFDaEM7UUFDRDtNQUNEO0FBQ0EsVUFBSSxDQUFDbkQsSUFBSXNCLFdBQVc7QUFDbkJ0QixZQUFJbkYsY0FBY1csTUFBTXBkLE9BQU9nUyxNQUFNLGNBQWMsWUFBWSxDQUFDO0FBQ2hFNFAsWUFBSW1ELHdCQUF3QixJQUFJO0FBQ2hDO01BQ0Q7QUFDQW5ELFVBQUluRixjQUFjK0MsS0FBS3hmLE9BQU9nUyxNQUFNLGFBQWEsV0FBVyxDQUFDO0FBQzdENFAsVUFBSWtELHdCQUF3QixJQUFJO0lBQ2pDO0FBU0EsVUFBTThHLG9CQUFvQixTQUFVdk8sUUFBUW1KLFdBQVc7QUFFdEQsVUFBSSxDQUFDem1CLFNBQVNzQixlQUFlZ2MsV0FBVyxRQUFRO0FBQy9DdUUsWUFBSW5GLGNBQWNXLE1BQ2pCcGQsT0FBT2dTLE1BQU0sWUFBWSxVQUFVLElBQ2xDcUwsU0FDQXJkLE9BQU9nUyxNQUFNLG9CQUFvQixrQkFBa0IsQ0FDckQ7QUFDQXdVLGtCQUFVLElBQUk7QUFDZCxlQUFPO01BQ1I7QUFDQSxVQUFJLENBQUM1RSxJQUFJRSxhQUFhO0FBQ3JCRixZQUFJbkYsY0FBY1csTUFBQSxtQkFBQXZhLE9BQXlCd2EsUUFBTSxnREFBQSxDQUFnRDtBQUNqR21KLGtCQUFVLElBQUk7QUFDZCxlQUFPO01BQ1I7QUFDQSxhQUFPO0lBQ1I7QUFVQSxVQUFNbUosa0JBQWtCLFNBQVV0UyxRQUFRbUosV0FBVy9JLFVBQVU7QUFDOUQsWUFBTSxDQUFDO1FBQUMwUDtNQUFPLENBQUMsSUFBSTFQLFNBQVNzRDtBQUU3QixZQUFNNk8sZ0JBQWdCekMsV0FBVyxDQUFDLFVBQVUsTUFBTSxFQUFFL3JCLFNBQVNpYyxNQUFNO0FBQ25FLFlBQU13UyxpQkFBaUJ4UyxXQUFXLGFBQWE4UCxZQUFZdkwsSUFBSTRCLGVBQWU1QixJQUFJNkI7QUFDbEYsWUFBTXFNLGNBQWN6UyxXQUFXLGFBQWEsQ0FBQzhQLFdBQVd2TCxJQUFJOEI7QUFDNUQsVUFBSWtNLGlCQUFpQkMsa0JBQWtCQyxhQUFhO0FBQ25EbE8sWUFBSW5GLGNBQWNXLE1BQUEsR0FBQXZhLE9BRWhCN0MsT0FBT2dTLE1BQU0sWUFBWSxVQUFVLElBQ25DcUwsU0FDQXJkLE9BQU9nUyxNQUFNLFlBQVksVUFBVSxLQUNsQ21iLFVBQVUsT0FBT250QixPQUFPZ1MsTUFBTSxNQUFNLElBQUksSUFDMUMsSUFBQSxDQUNEO0FBQ0F3VSxrQkFBVSxJQUFJO0FBQ2QsZUFBTztNQUNSO0FBR0EsVUFBSXVKO0FBQ0osVUFBSTFTLFdBQVcsWUFBWTtBQUMxQjBTLG1CQUFXdFMsU0FBU3NELE1BQU0sQ0FBQyxFQUFFd00sV0FDM0I5ZixPQUFRK2YsUUFBTztBQUNmLGlCQUFPQSxHQUFHcm5CLFNBQVMsWUFBWXFuQixHQUFHM2MsVUFBVTtRQUM3QyxDQUFDLEVBQ0E0YyxJQUFJO01BQ1AsV0FBV3BRLFdBQVcsWUFBWUEsV0FBVyxRQUFRO0FBQ3BEMFMsbUJBQVd0UyxTQUFTc0QsTUFBTSxDQUFDLEVBQUV3TSxXQUMzQjlmLE9BQVErZixRQUFPO0FBQ2YsaUJBQU9BLEdBQUdybkIsU0FBUyxVQUFVcW5CLEdBQUczYyxVQUFVO1FBQzNDLENBQUMsRUFDQTRjLElBQUk7TUFDUDtBQUNBLFVBQ0NzQyxZQUNBLENBQUNuTyxJQUFJMkMsMEJBQ0wsQ0FBQzZDLFFBQ0FwbkIsT0FBT2dTLE1BQU0sY0FBYyxZQUFZLElBQ3RDNFAsSUFBSXhmLFlBQ0gydEIsU0FBU25lLFdBQVcsYUFDbEI1UixPQUFPZ1MsTUFBTSxTQUFTLE9BQU8sSUFBQSxHQUFBblAsT0FFN0I3QyxPQUFPZ1MsTUFBTSxTQUFTLE9BQU8sSUFDN0IsSUFBSWpTLFNBQVNZLEtBQUtvdkIsU0FBU25lLE1BQU0sRUFBRWdKLFNBQVMsS0FBSyxHQUNsRCxTQUFBLEtBQ0Y1YSxPQUFPZ1MsTUFBTSxRQUFRLE1BQU0sSUFDM0JxTCxTQUNBcmQsT0FBT2dTLE1BQU0sT0FBTyxLQUFLLElBQ3pCaFMsT0FBT2dTLE1BQ04sOEJBQ0EsNEJBQ0QsQ0FDRixHQUNDO0FBQ0Q0UCxZQUFJbkYsY0FBY1csTUFBTXBkLE9BQU9nUyxNQUFNLGlCQUFpQixlQUFlLENBQUM7QUFDdEV3VSxrQkFBVSxJQUFJO0FBQ2QsZUFBTztNQUNSO0FBQ0EsVUFBSSxDQUFDL0ksU0FBU2dFLE9BQU9DLFdBQVc7QUFDL0JFLFlBQUluRixjQUFjVyxNQUFNcGQsT0FBT2dTLE1BQU0sV0FBVyxTQUFTLENBQUM7QUFDMUR3VSxrQkFBVSxJQUFJO0FBQ2QsZUFBTztNQUNSO0FBQ0EsYUFBTztJQUNSO0FBRUEsVUFBTXFGLGdCQUFnQixXQUFZO0FBQ2pDLFVBQUltRTtBQUNKLFVBQUlsUTtBQUNKLFVBQUlxSCxvQkFBb0IsTUFBTSxHQUFHO0FBQ2hDckgsZ0JBQVE3ZSxHQUFHcW1CLEtBQUs3RixPQUFPdGdCLElBQUksV0FBVztBQUN0QzZ1QixvQkFBWXBPLElBQUl4ZjtNQUNqQixPQUFPO0FBQ04sY0FBTXFiLFdBQVdtRSxJQUFJZ0UsUUFBUXhGLFlBQVksRUFBRTdEO0FBQzNDLFlBQUksQ0FBQ29ULGdCQUFnQixRQUFRL04sSUFBSXFELGVBQWV4SCxRQUFRLEdBQUc7QUFDMUQ7UUFDRDtBQUVBcUMsZ0JBQVFyQyxTQUFTZ0UsT0FBT0M7QUFDeEIsY0FBTSxDQUFDQyxJQUFJLElBQUlsRSxTQUFTc0Q7QUFDeEJpUCxvQkFBWXJPLEtBQUsxVjtBQUNqQjJWLFlBQUl5QyxVQUFVMUMsS0FBSzhGLG1CQUFtQjlGLEtBQUswQztNQUM1QztBQUNBLFlBQU05SCxRQUFRO1FBQ2JjLFFBQVE7UUFDUnZLLE1BQU1rZDtRQUNOQyxJQUFJck8sSUFBSXdCO1FBQ1J0RDtRQUNBMU8sUUFBUXdRLElBQUlFO1FBQ1p5RixXQUFXM0YsSUFBSW1CO1FBQ2Z6SyxRQUFRO01BQ1Q7QUFDQSxVQUFJc0osSUFBSUcsWUFBWTtBQUNuQnhGLGNBQU1lLE9BQU9zRSxJQUFJRztNQUNsQjtBQUNBLFVBQUl5Rix1QkFBdUIsR0FBRztBQUM3QmpMLGNBQU1rTCxrQkFBa0I3RixJQUFJb0I7TUFDN0I7QUFDQSxVQUFJcEIsSUFBSXlCLGNBQWM7QUFDckI5RyxjQUFNMlQsV0FBVztNQUNsQjtBQUNBLFVBQUl0TyxJQUFJMEIsY0FBYztBQUNyQi9HLGNBQU00VCxlQUFlO01BQ3RCO0FBQ0EsVUFBSXZPLElBQUkyQixzQkFBc0I7QUFDN0JoSCxjQUFNNlQsYUFBYTtNQUNwQjtBQUNBeE8sVUFBSWlFLGlCQUFpQixJQUFJOWxCLFNBQVN3YixLQUFLYyxJQUN0Q3JjLE9BQU9nUyxNQUFNLFVBQVUsUUFBUSxHQUMvQnVLLE9BQ0FxRixJQUFJb0QsZUFDSnBELElBQUluRixlQUNKbUYsSUFBSXFELGFBQ0w7QUFDQXJELFVBQUlpRSxlQUFlOUgsVUFBVSxJQUFJO0FBQ2pDNkQsVUFBSWlFLGVBQWU3SCxLQUFLO0lBQ3pCO0FBQ0EsVUFBTW1PLGtCQUFrQixXQUFZO0FBQ25DLFlBQU01UCxRQUFRO1FBQ2JjLFFBQVE7UUFDUi9FLFFBQVE7TUFDVDtBQUVBLFVBQUlzSixJQUFJcUssTUFBTTtBQUNiMVAsY0FBTTBQLE9BQU9ySyxJQUFJcUs7QUFDakIxUCxjQUFNdUQsUUFBUTdlLEdBQUdxbUIsS0FBSzdGLE9BQU90Z0IsSUFBSSxhQUFhO01BQy9DLE9BQU87QUFDTixjQUFNc2MsV0FBV21FLElBQUlrRSxVQUFVMUYsWUFBWSxFQUFFN0Q7QUFFN0MsWUFBSSxDQUFDa0IsU0FBUzRTLGNBQWMsQ0FBQyxFQUFFQyxhQUFhO0FBQzNDO1FBQ0Q7QUFDQSxjQUFNLENBQUM7VUFBQzVDO1FBQVMsQ0FBQyxJQUFJalEsU0FBU3NEO0FBQy9CLFlBQUksQ0FBQzJNLFdBQVc7QUFDZjtRQUNEO0FBQ0FuUixjQUFNd1IsUUFBUUw7QUFDZCxjQUFNNU4sUUFBUXJDLFNBQVNnRSxPQUFPQztBQUM5QixZQUFJLENBQUM1QixPQUFPO0FBQ1g7UUFDRDtBQUNBdkQsY0FBTXVELFFBQVFBO01BQ2Y7QUFDQSxVQUFJOEIsSUFBSUcsWUFBWTtBQUNuQnhGLGNBQU1lLE9BQU9zRSxJQUFJRztNQUNsQjtBQUNBLFlBQU13TyxhQUFhLElBQUl4d0IsU0FBUzZiLE9BQU81YixPQUFPZ1MsTUFBTSxZQUFZLFVBQVUsQ0FBQztBQUMzRTRQLFVBQUltRSxtQkFBbUIsSUFBSWhtQixTQUFTd2IsS0FBS2MsSUFDeENyYyxPQUFPZ1MsTUFBTSxVQUFVLFFBQVEsR0FDL0J1SyxPQUNBLE1BQ0FnVSxVQUNEO0FBQ0EzTyxVQUFJbUUsaUJBQWlCaEksVUFBVSxJQUFJO0FBQ25DNkQsVUFBSW1FLGlCQUFpQi9ILEtBQUs7SUFDM0I7QUFDQSxVQUFNeU8sa0JBQWtCLFdBQVk7QUFDbkMsVUFBSXVEO0FBQ0osVUFBSWxRO0FBQ0osVUFBSXFILG9CQUFvQixRQUFRLEdBQUc7QUFDbENySCxnQkFBUTdlLEdBQUdxbUIsS0FBSzdGLE9BQU90Z0IsSUFBSSxXQUFXO0FBQ3RDNnVCLG9CQUFZcE8sSUFBSXhmO01BQ2pCLE9BQU87QUFDTixjQUFNcWIsV0FBV21FLElBQUlvRSxVQUFVNUYsWUFBWSxFQUFFN0Q7QUFDN0MsWUFBSSxDQUFDb1QsZ0JBQWdCLFVBQVUvTixJQUFJdUQsaUJBQWlCMUgsUUFBUSxHQUFHO0FBQzlEO1FBQ0Q7QUFFQXFDLGdCQUFRckMsU0FBU2dFLE9BQU9DO0FBQ3hCLGNBQU0sQ0FBQ0MsSUFBSSxJQUFJbEUsU0FBU3NEO0FBQ3hCaVAsb0JBQVlyTyxLQUFLMVY7QUFDakIyVixZQUFJeUMsVUFBVTFDLEtBQUs4RixtQkFBbUI5RixLQUFLMEM7TUFDNUM7QUFDQSxZQUFNOUgsUUFBUTtRQUNiYyxRQUFRO1FBQ1JwUixPQUFPK2pCO1FBQ1BsUTtRQUNBMU8sUUFBUXdRLElBQUlFO1FBQ1p5RixXQUFXM0YsSUFBSW1CO1FBQ2Z6SyxRQUFRO01BQ1Q7QUFDQSxVQUFJc0osSUFBSUcsWUFBWTtBQUNuQnhGLGNBQU1lLE9BQU9zRSxJQUFJRztNQUNsQjtBQUNBLFVBQUl5Rix1QkFBdUIsR0FBRztBQUM3QmpMLGNBQU1rTCxrQkFBa0I3RixJQUFJb0I7TUFDN0I7QUFDQXBCLFVBQUlxRSxtQkFBbUIsSUFBSWxtQixTQUFTd2IsS0FBS2MsSUFDeENyYyxPQUFPZ1MsTUFBTSxVQUFVLFFBQVEsR0FDL0J1SyxPQUNBcUYsSUFBSXNELGlCQUNKdEQsSUFBSW5GLGVBQ0orVCxvQkFDRDtBQUNBNU8sVUFBSXFFLGlCQUFpQmxJLFVBQVUsSUFBSTtBQUNuQzZELFVBQUlxRSxpQkFBaUJqSSxLQUFLO0lBQzNCO0FBRUEsVUFBTXdTLHVCQUF1QixXQUFZO0FBQ3hDLFlBQU01UyxZQUFZZ0UsSUFBSXFFLGlCQUFpQmhHLGFBQWE7QUFFcEQsVUFBSXJDLGNBQWMscUNBQXFDZ0UsSUFBSTZDLFlBQVk3QyxJQUFJaUIsWUFBWTtBQUN0RmpCLFlBQUluRixjQUFjK0MsS0FBS3hmLE9BQU9nUyxNQUFNLGNBQWMsWUFBWSxDQUFDO0FBQy9ELFVBQUVqUyxTQUFTd2IsS0FBS0M7QUFDaEJvRyxZQUFJcUUsaUJBQWlCakksS0FBSztNQUMzQixXQUFXSixjQUFjLGdCQUFnQjtBQUN4Q2dFLFlBQUluRixjQUFjVyxNQUFNcGQsT0FBT2dTLE1BQU0saUJBQWlCLGVBQWUsQ0FBQztBQUN0RSxZQUFJNFAsSUFBSXVELGlCQUFpQjtBQUN4QnZELGNBQUl1RCxnQkFBZ0I1RixLQUFLLE1BQU1xQyxJQUFJcUUsZ0JBQWdCO1FBQ3BEO01BRUQsT0FBTztBQUNOckUsWUFBSW5GLGNBQWNXLE1BQ2pCcGQsT0FBT2dTLE1BQU0sV0FBVyxTQUFTLElBQUk0UCxJQUFJcUUsaUJBQWlCL0YsYUFBYSxDQUN4RTtBQUNBLFlBQUkwQixJQUFJdUQsaUJBQWlCO0FBQ3hCdkQsY0FBSXVELGdCQUFnQjVGLEtBQUssTUFBTXFDLElBQUlxRSxnQkFBZ0I7UUFDcEQ7TUFDRDtJQUNEO0FBRUEsVUFBTTBHLG9CQUFvQixXQUFZO0FBQ3JDLFVBQUlxRDtBQUNKLFVBQUlsUTtBQUNKLFVBQUlxSCxvQkFBb0IsVUFBVSxHQUFHO0FBQ3BDckgsZ0JBQVE3ZSxHQUFHcW1CLEtBQUs3RixPQUFPdGdCLElBQUksV0FBVztBQUN0QzZ1QixvQkFBWXBPLElBQUl4ZjtNQUNqQixPQUFPO0FBQ04sY0FBTXFiLFdBQVdtRSxJQUFJc0UsWUFBWTlGLFlBQVksRUFBRTdEO0FBQy9DLFlBQUksQ0FBQ29ULGdCQUFnQixZQUFZL04sSUFBSXlELG1CQUFtQjVILFFBQVEsR0FBRztBQUNsRTtRQUNEO0FBRUFxQyxnQkFBUXJDLFNBQVNnRSxPQUFPQztBQUN4QixjQUFNLENBQUNDLElBQUksSUFBSWxFLFNBQVNzRDtBQUN4QmlQLG9CQUFZck8sS0FBSzFWO0FBQ2pCMlYsWUFBSXlDLFVBQVUxQyxLQUFLOEYsbUJBQW1COUYsS0FBSzBDO01BQzVDO0FBQ0EsWUFBTTlILFFBQVE7UUFDYmMsUUFBUTtRQUNScFIsT0FBTytqQjtRQUNQbFE7UUFDQTFPLFFBQVF3USxJQUFJRTtRQUNaeUYsV0FBVzNGLElBQUltQjtRQUNmekssUUFBUTtNQUNUO0FBQ0EsVUFBSXNKLElBQUlHLFlBQVk7QUFDbkJ4RixjQUFNZSxPQUFPc0UsSUFBSUc7TUFDbEI7QUFDQSxVQUFJeUYsdUJBQXVCLEdBQUc7QUFDN0JqTCxjQUFNa0wsa0JBQWtCN0YsSUFBSW9CO01BQzdCO0FBQ0FwQixVQUFJdUUscUJBQXFCLElBQUlwbUIsU0FBU3diLEtBQUtjLElBQzFDcmMsT0FBT2dTLE1BQU0sVUFBVSxRQUFRLEdBQy9CdUssT0FDQXFGLElBQUl3RCxtQkFDSnhELElBQUluRixlQUNKZ1Usc0JBQ0Q7QUFDQTdPLFVBQUl1RSxtQkFBbUJwSSxVQUFVLElBQUk7QUFDckM2RCxVQUFJdUUsbUJBQW1CbkksS0FBSztJQUM3QjtBQUVBLFVBQU15Uyx5QkFBeUIsV0FBWTtBQUMxQyxZQUFNN1MsWUFBWWdFLElBQUl1RSxtQkFBbUJsRyxhQUFhO0FBRXRELFVBQUlyQyxjQUFjLG1DQUFtQztBQUNwRCxZQUFJZ0UsSUFBSTZDLFlBQVk3QyxJQUFJaUIsWUFBWTtBQUNuQ2pCLGNBQUluRixjQUFjK0MsS0FBS3hmLE9BQU9nUyxNQUFNLGNBQWMsWUFBWSxDQUFDO0FBQy9ELFlBQUVqUyxTQUFTd2IsS0FBS0M7QUFDaEJvRyxjQUFJdUUsbUJBQW1CbkksS0FBSztRQUM3QixPQUFPO0FBQ040RCxjQUFJbkYsY0FBY1csTUFDakJwZCxPQUFPZ1MsTUFDTix3QkFDQSxzQkFDRCxDQUNEO0FBQ0EsY0FBSTRQLElBQUl5RCxtQkFBbUI7QUFDMUJ6RCxnQkFBSXlELGtCQUFrQjlGLEtBQUssTUFBTXFDLElBQUl1RSxrQkFBa0I7VUFDeEQ7UUFDRDtNQUNELFdBQVd2SSxjQUFjLGdCQUFnQjtBQUN4Q2dFLFlBQUluRixjQUFjVyxNQUNqQnBkLE9BQU9nUyxNQUNOLDBCQUNBLHdCQUNELENBQ0Q7QUFDQSxZQUFJNFAsSUFBSXlELG1CQUFtQjtBQUMxQnpELGNBQUl5RCxrQkFBa0I5RixLQUFLLE1BQU1xQyxJQUFJdUUsa0JBQWtCO1FBQ3hEO01BRUQsT0FBTztBQUNOdkUsWUFBSW5GLGNBQWNXLE1BQ2pCcGQsT0FBT2dTLE1BQU0sV0FBVyxTQUFTLElBQUk0UCxJQUFJdUUsbUJBQW1CakcsYUFBYSxDQUMxRTtBQUNBLFlBQUkwQixJQUFJeUQsbUJBQW1CO0FBQzFCekQsY0FBSXlELGtCQUFrQjlGLEtBQUssTUFBTXFDLElBQUl1RSxrQkFBa0I7UUFDeEQ7TUFDRDtJQUNEO0FBRUEsVUFBTTBHLG1CQUFtQixXQUFZO0FBQ3BDLFlBQU1wUCxXQUFXbUUsSUFBSXdFLFdBQVdoRyxZQUFZLEVBQUU3RDtBQUM5QyxVQUFJLENBQUNvVCxnQkFBZ0IsV0FBVy9OLElBQUkyRCxrQkFBa0I5SCxRQUFRLEdBQUc7QUFDaEU7TUFDRDtBQUVBLFlBQU1xQyxRQUFRckMsU0FBU2dFLE9BQU9DO0FBQzlCLFlBQU0sQ0FBQ0MsSUFBSSxJQUFJbEUsU0FBU3NEO0FBQ3hCLFlBQU1pUCxZQUFZck8sS0FBSzFWO0FBQ3ZCMlYsVUFBSXlDLFVBQVUxQyxLQUFLOEYsbUJBQW1COUYsS0FBSzBDO0FBRTNDLFlBQU1xTSxNQUFNalQsU0FBU3NELE1BQU0sQ0FBQyxFQUFFd007QUFDOUIsVUFBSXdDO0FBQ0osVUFBSVk7QUFDSixVQUFJQztBQUFBLFVBQUFDLGFBQUF4dEIsMkJBQ2FxdEIsR0FBQSxHQUFBSTtBQUFBLFVBQUE7QUFBakIsYUFBQUQsV0FBQXR0QixFQUFBLEdBQUEsRUFBQXV0QixTQUFBRCxXQUFBcnRCLEVBQUEsR0FBQUMsUUFBc0I7QUFBQSxnQkFBWCtwQixLQUFBc0QsT0FBQW50QjtBQUVWLGNBQUk2cEIsR0FBR3JuQixTQUFTLFVBQVUsQ0FBQ3FuQixHQUFHdUQsUUFBUTtBQUNyQ2hCLHVCQUFXdkM7VUFDWixXQUFXQSxHQUFHcm5CLFNBQVMsUUFBUTtBQUM5QndxQix1QkFBV25EO1VBQ1osV0FBV0EsR0FBR3JuQixTQUFTLFVBQVU7QUFDaEN5cUIseUJBQWFwRDtVQUNkO1FBQ0Q7TUFBQSxTQUFBcnBCLEtBQUE7QUFBQTBzQixtQkFBQXpzQixFQUFBRCxHQUFBO01BQUEsVUFBQTtBQUFBMHNCLG1CQUFBeHNCLEVBQUE7TUFBQTtBQUVBLFVBQUksQ0FBQ3VkLElBQUk0QixlQUFldU0sVUFBVTtBQUNqQ25PLFlBQUk0QixjQUFjO1VBQ2pCM1MsT0FBT2tmLFNBQVNsZjtVQUNoQmUsUUFBUW1lLFNBQVNuZTtRQUNsQjtNQUNEO0FBQ0EsVUFBSSxDQUFDZ1EsSUFBSTZCLGVBQWVrTixVQUFVO0FBQ2pDL08sWUFBSTZCLGNBQWM7VUFDakI1UyxPQUFPOGYsU0FBUzlmO1VBQ2hCZSxRQUFRK2UsU0FBUy9lO1FBQ2xCO01BQ0Q7QUFDQSxVQUFJLENBQUNnUSxJQUFJOEIsaUJBQWlCa04sWUFBWTtBQUNyQ2hQLFlBQUk4QixnQkFBZ0I7VUFDbkI3UyxPQUFPK2YsV0FBVy9mO1VBQ2xCZSxRQUFRZ2YsV0FBV2hmO1FBQ3BCO01BQ0Q7QUFFQSxVQUFJZ1EsSUFBSStCLG1CQUFtQixNQUFNO0FBQ2hDL0IsWUFBSStCLGlCQUFpQixDQUFDLENBQUMrTSxJQUFJampCLE9BQVErZixRQUFPO0FBQ3pDLGlCQUFPQSxHQUFHd0Q7UUFDWCxDQUFDLEVBQUVodkI7TUFDSjtBQUdBLFVBQUk0ZixJQUFJK0IsZ0JBQWdCO0FBR3ZCLGFBQ0UsQ0FBQy9CLElBQUk0QixlQUNMNUIsSUFBSTRCLFlBQVkzUyxVQUFVLFdBQzFCLENBQUMrUSxJQUFJNkIsZUFDTDdCLElBQUk2QixZQUFZNVMsVUFBVSxZQUMzQixDQUFDdVcsUUFDQXBuQixPQUFPZ1MsTUFBTSxRQUFRLE1BQU0sSUFDMUI0UCxJQUFJeGYsV0FDSnBDLE9BQU9nUyxNQUFNLFlBQVksVUFBVSxJQUNuQ2hTLE9BQU9nUyxNQUNOLHdCQUNBLHNCQUNELElBQ0FoUyxPQUFPZ1MsTUFDTixnQ0FDQSw4QkFDRCxDQUNGLEdBQ0M7QUFDRDRQLGNBQUluRixjQUFjVyxNQUFNcGQsT0FBT2dTLE1BQU0sWUFBWSxVQUFVLENBQUM7QUFDNUQ0UCxjQUFJMkQsaUJBQWlCLElBQUk7QUFDekI7UUFDRDtBQUNBM0QsWUFBSTRCLFlBQVkzUyxRQUFRO0FBQ3hCK1EsWUFBSTZCLFlBQVk1UyxRQUFRO01BQ3pCO0FBRUEsWUFBTW9nQixjQUFjLENBQUE7QUFDcEIsWUFBTUMsVUFBVSxDQUFBO0FBQ2hCLFVBQUl0UCxJQUFJNEIsYUFBYTtBQUNwQnlOLG9CQUFZdHJCLEtBQUEsUUFBQTlDLE9BQWErZSxJQUFJNEIsWUFBWTNTLEtBQUssQ0FBRTtBQUNoRHFnQixnQkFBUXZyQixLQUFLaWMsSUFBSTRCLFlBQVk1UixNQUFNO01BQ3BDO0FBQ0EsVUFBSWdRLElBQUk2QixhQUFhO0FBQ3BCd04sb0JBQVl0ckIsS0FBQSxRQUFBOUMsT0FBYStlLElBQUk2QixZQUFZNVMsS0FBSyxDQUFFO0FBQ2hEcWdCLGdCQUFRdnJCLEtBQUtpYyxJQUFJNkIsWUFBWTdSLE1BQU07TUFDcEM7QUFDQSxVQUFJZ1EsSUFBSThCLGVBQWU7QUFDdEJ1TixvQkFBWXRyQixLQUFBLFVBQUE5QyxPQUFlK2UsSUFBSThCLGNBQWM3UyxLQUFLLENBQUU7QUFDcERxZ0IsZ0JBQVF2ckIsS0FBS2ljLElBQUk4QixjQUFjOVIsTUFBTTtNQUN0QztBQUNBLFlBQU0ySyxRQUFRO1FBQ2JjLFFBQVE7UUFDUnBSLE9BQU8rakI7UUFDUGxRO1FBQ0FtUixhQUFhQSxZQUFZbnJCLEtBQUssR0FBRztRQUNqQzhMLFFBQVFzZixRQUFRcHJCLEtBQUssR0FBRztRQUN4QnNMLFFBQVF3USxJQUFJRTtRQUNaeUYsV0FBVzNGLElBQUltQjtRQUNmekssUUFBUTtNQUNUO0FBRUEsVUFBSXNKLElBQUlHLFlBQVk7QUFDbkJ4RixjQUFNZSxPQUFPc0UsSUFBSUc7TUFDbEI7QUFDQSxVQUFJeUYsdUJBQXVCLEdBQUc7QUFDN0JqTCxjQUFNa0wsa0JBQWtCN0YsSUFBSW9CO01BQzdCO0FBQ0EsVUFBSXBCLElBQUkrQixnQkFBZ0I7QUFDdkJwSCxjQUFNeVUsVUFBVTtNQUNqQjtBQUNBcFAsVUFBSXlFLG9CQUFvQixJQUFJdG1CLFNBQVN3YixLQUFLYyxJQUN6Q3JjLE9BQU9nUyxNQUFNLFVBQVUsUUFBUSxHQUMvQnVLLE9BQ0FxRixJQUFJMEQsa0JBQ0oxRCxJQUFJbkYsZUFDSm1GLElBQUkyRCxnQkFDTDtBQUNBM0QsVUFBSXlFLGtCQUFrQnRJLFVBQVUsSUFBSTtBQUNwQzZELFVBQUl5RSxrQkFBa0JySSxLQUFLO0lBQzVCO0FBQ0EsVUFBTTZRLFFBQVNzQyxrQkFBaUI7QUFDL0IsWUFBTUMsV0FBV3R4QixFQUFFMmYsU0FBUztBQUM1QjFELGlCQUFXcVYsU0FBU0MsU0FBU0YsWUFBWTtBQUN6QyxhQUFPQztJQUNSO0VBQ0Q7QUFnQkFyeEIsV0FBU3diLEtBQUsrVixVQUFVLFNBQVVDLFlBQVk7QUFDN0MsU0FBS0EsYUFBYUE7QUFDbEJ6eEIsTUFBRXl4QixVQUFVLEVBQUVDLFNBQVMscUJBQXFCLEVBQUVDLEtBQUs7QUFVbkQsU0FBS0MsY0FBYyxDQUFDNVEsVUFBVWtQLFdBQVcyQixpQkFBaUI7QUFDekQ3eEIsUUFBRXl4QixVQUFVLEVBQUVLLEtBQUs7QUFDbkIsWUFBTUMsYUFBYWh3QixTQUFTMEYsY0FBYyxNQUFNO0FBQ2hEZ3FCLGlCQUFXMXRCLFlBQVlndUIsVUFBVTtBQUNqQzl4QixlQUFTNmIsT0FBT2tXLEtBQUtELFVBQVU7QUFFL0IsVUFBSXp2QixXQUFXbkIsR0FBR0MsT0FBT0MsSUFBSSxZQUFZO0FBQ3pDLFVBQUlGLEdBQUdDLE9BQU9DLElBQUksb0JBQW9CLE1BQU0sWUFBWTtBQUN2RGlCLG1CQUFBLFNBQUFTLE9BQW9CVCxRQUFRO01BQzdCO0FBQ0EsWUFBTW1hLFFBQVE7UUFDYmMsUUFBUTtRQUNSaUQsTUFBTSxDQUFDLFFBQVEsU0FBUztRQUN4QnlSLEtBQUs7O1FBRUxULFNBQVM7UUFDVGh0QixNQUFNd2M7UUFDTjdVLE9BQU8rakIsYUFBYTV0QjtRQUNwQjR2QixvQkFBb0I7UUFDcEJDLG9CQUFvQjtRQUNwQm5WLFNBQVM3YixHQUFHQyxPQUFPQyxJQUFJLGdCQUFnQjs7UUFFdkNtWCxRQUFRO01BQ1Q7QUFDQSxVQUFJcVosY0FBYztBQUNqQnBWLGNBQU1tTCxVQUFVO0FBQ2hCbkwsY0FBTXlMLGVBQWUySjtNQUN0QjtBQUNBLFlBQU1PLFlBQVksSUFBSW55QixTQUFTd2IsS0FBS2MsSUFDbkNyYyxPQUFPZ1MsTUFBTSxTQUFTLE9BQU8sR0FDN0J1SyxPQUNBNFYsaUJBQ0EsSUFBSXB5QixTQUFTNmIsT0FBTzViLE9BQU9nUyxNQUFNLE1BQU0sSUFBSSxDQUFDLENBQzdDO0FBQ0FrZ0IsZ0JBQVVsVSxLQUFLO0lBQ2hCO0FBQ0EsVUFBTW1VLGtCQUFtQnZSLFlBQVc7QUFDbkMsWUFBTW5ELFdBQVdtRCxPQUFPUixZQUFZO0FBQ3BDLFlBQU1qQixPQUFPMUIsU0FBUzJELE1BQU05YztBQUM1QixVQUFJLENBQUM2YSxNQUFNO0FBQ1Z5QixlQUFPMUQsU0FBU0UsTUFBTXBkLE9BQU9nUyxNQUFNLGdCQUFnQixjQUFjLENBQUM7QUFDbEU7TUFDRDtBQUNBdWYsaUJBQVdhLFlBQVlqVDtBQUN2QmxlLFNBQUdveEIsT0FBTzlMLEtBQUs5SSxTQUFTMkQsTUFBTWtSLFlBQVk7QUFDMUNyeEIsU0FBR294QixPQUFPOUwsS0FBSzlJLFNBQVMyRCxNQUFNbVIsT0FBTztBQUVyQ3p5QixRQUFFeXhCLFVBQVUsRUFBRXh2QixLQUFLLEdBQUcsRUFBRXNkLEtBQUssVUFBVSxRQUFRLEVBQUVBLEtBQUssT0FBTyxxQkFBcUI7SUFDbkY7QUFFQSxTQUFLbVQsZUFBZSxNQUFNO0FBQ3pCMXlCLFFBQUV5eEIsVUFBVSxFQUFFa0IsTUFBTSxFQUFFaEIsS0FBSztJQUM1QjtFQUNEO0FBUUExeEIsV0FBUytnQixXQUFXLENBQUM7QUFTckIvZ0IsV0FBUytnQixTQUFTNFIsZ0JBQWdCLENBQUNwdUIsTUFBTW9NLFVBQVU7QUFDbERBLGNBQUFBLFFBQVU7QUFDVixVQUFNRyxRQUFRLENBQUE7QUFDZCxRQUFJOGhCLFFBQVE7QUFDWixRQUFJQyxVQUFVO0FBQ2QsUUFBSUMsU0FBUztBQUNiLFFBQUl4ckIsVUFBVTtBQUNkLFVBQU1pRSxTQUFTO01BQ2Q3RixNQUFNO01BQ05xdEIsWUFBWSxDQUFDO0lBQ2Q7QUFDQSxRQUFJQztBQUNKLFFBQUlwdkI7QUFPSixVQUFNcXZCLFlBQWFDLFdBQVU7QUFFNUIsVUFBSU4sVUFBVSxJQUFJO0FBQ2pCcm5CLGVBQU83RixPQUFPNEIsUUFBUTVFLE1BQU0sQ0FBQyxFQUFFdUssS0FBSztBQUNwQyxVQUFFMmxCO01BQ0gsV0FBV0UsV0FBVyxJQUFJO0FBR3pCLGNBQU16ZCxRQUFRNmQsUUFBUTVyQixRQUFRNUUsTUFBTW93QixTQUFTLEdBQUcsRUFBRSxJQUFJeHJCO0FBQ3RELFlBQUkrTixPQUFPO0FBQ1Y5SixpQkFBT3duQixXQUFXLEVBQUVGLE9BQU8sSUFBSXhkO0FBQy9CLFlBQUV1ZDtRQUNIO01BQ0QsT0FBTztBQUVOSSxjQUFNMXJCLFFBQVE1RSxNQUFNLEdBQUdtUSxLQUFLM0ksSUFBSSxHQUFHNG9CLE1BQU0sQ0FBQyxFQUFFN2xCLEtBQUs7QUFDakRySixnQkFBUXN2QixRQUFRNXJCLFFBQVE1RSxNQUFNb3dCLFNBQVMsR0FBRyxFQUFFLEVBQUU3bEIsS0FBSyxJQUFJM0YsUUFBUTVFLE1BQU1tUSxLQUFLM0ksSUFBSSxHQUFHNG9CLFNBQVMsQ0FBQyxDQUFDLEVBQUU3bEIsS0FBSztBQUNuRzFCLGVBQU93bkIsV0FBV0MsR0FBRyxJQUFJcHZCO0FBQ3pCa3ZCLGlCQUFTO01BQ1Y7SUFDRDtBQUNBLGFBQVM3ckIsSUFBSTBKLE9BQU8xSixJQUFJMUMsS0FBS3RDLFFBQVEsRUFBRWdGLEdBQUc7QUFDekMsWUFBTWtzQixRQUFRNXVCLEtBQUs3QixNQUFNdUUsR0FBR0EsSUFBSSxDQUFDO0FBQ2pDLFVBQUlrc0IsVUFBVSxTQUFVQSxVQUFVLFNBQVNyaUIsTUFBTXpFLEdBQUcsRUFBRSxNQUFNLEdBQUk7QUFDL0QvRSxtQkFBVzZyQjtBQUNYbHNCLGFBQUs7QUFDTCxZQUFJa3NCLFVBQVUsT0FBTztBQUNwQnJpQixnQkFBTWxMLEtBQUssQ0FBQztRQUNiLE9BQU87QUFDTmtMLGdCQUFNNGMsSUFBSTtRQUNYO0FBQ0E7TUFDRDtBQUNBLFlBQU0wRixRQUFRN3VCLEtBQUs3QixNQUFNdUUsR0FBR0EsSUFBSSxDQUFDO0FBRWpDLFVBQUltc0IsVUFBVSxRQUFRQSxVQUFVLE1BQU07QUFDckM5ckIsbUJBQVc4ckI7QUFDWCxVQUFFbnNCO0FBQ0YsWUFBSW1zQixVQUFVLE1BQU07QUFDbkJ0aUIsZ0JBQU1sTCxLQUFLLENBQUM7UUFDYixPQUFPO0FBQ05rTCxnQkFBTWxMLEtBQUssSUFBSTtRQUNoQjtBQUNBO01BQ0Q7QUFFQSxVQUFLd3RCLFVBQVUsUUFBUXRpQixNQUFNekUsR0FBRyxFQUFFLE1BQU0sS0FBTyttQixVQUFVLFFBQVF0aUIsTUFBTXpFLEdBQUcsRUFBRSxNQUFNLE1BQU87QUFDeEYvRSxtQkFBVzhyQjtBQUNYLFVBQUVuc0I7QUFDRjZKLGNBQU00YyxJQUFJO0FBRVYsWUFBSTBGLFVBQVUsUUFBUXRpQixNQUFNN08sV0FBVyxHQUFHO0FBQ3pDZ3hCLG9CQUFVLElBQUk7QUFDZDtRQUNEO0FBQ0E7TUFDRDtBQUNBLFVBQUkxdUIsS0FBSzh1QixPQUFPcHNCLENBQUMsTUFBTSxPQUFPNkosTUFBTTdPLFdBQVcsR0FBRztBQUVqRGd4QixrQkFBVTtBQUNWM3JCLGtCQUFVO01BQ1gsV0FBV3dyQixXQUFXLE1BQU12dUIsS0FBSzh1QixPQUFPcHNCLENBQUMsTUFBTSxPQUFPNkosTUFBTTdPLFdBQVcsR0FBRztBQUV6RTZ3QixpQkFBU3hyQixRQUFRckY7QUFDakJxRixtQkFBVy9DLEtBQUs4dUIsT0FBT3BzQixDQUFDO01BQ3pCLE9BQU87QUFFTkssbUJBQVcvQyxLQUFLOHVCLE9BQU9wc0IsQ0FBQztNQUN6QjtJQUNEO0FBQ0EsV0FBT3NFO0VBQ1I7QUFRQXZMLFdBQVMrZ0IsU0FBU2EsT0FBTyxTQUFVcmQsTUFBTTtBQUN4QyxTQUFLQSxPQUFPQTtFQUNiO0FBQ0F2RSxXQUFTK2dCLFNBQVNhLEtBQUt2YixZQUFZO0lBQ2xDOUIsTUFBTTs7Ozs7OztJQU9OK3VCLFdBQVdDLFlBQVk7QUFDdEIsWUFBTUMsVUFBVXR5QixHQUFHeUIsTUFBTTh3QixZQUFZRixVQUFVO0FBQy9DLFlBQU1HLGNBQWNGLFFBQVFHLGVBQWU7QUFDM0MsWUFBTXpuQixRQUFRc25CLFFBQVFJLFlBQVk7QUFDbEMsVUFBSUMsa0JBQWtCO0FBQ3RCLFVBQUlILGdCQUFnQixHQUFHO0FBQ3RCRywwQkFBQSxHQUFBL3dCLE9BQXFCOUMsU0FBU2tGLGVBQWV3dUIsV0FBVyxHQUFDLEdBQUE7TUFDMUQ7QUFDQUcseUJBQW1CN3pCLFNBQVNvQyxjQUFjOEosS0FBSztBQUcvQyxZQUFNNG5CLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxFQUFFenlCLFNBQVNxeUIsV0FBVztBQUNyRCxZQUFNSyxRQUFRRCxtQkFBbUIsTUFBTTtBQUN2QyxZQUFNRSxrQkFBa0IsSUFBSXJnQixPQUFBLFNBQUE3USxPQUFnQml4QixPQUFLLEdBQUEsRUFBQWp4QixPQUFJK3dCLGlCQUFlLFNBQUEsR0FBVyxHQUFHO0FBQ2xGLFlBQU1JLGlCQUFpQixJQUFJdGdCLE9BQUEsU0FBQTdRLE9BQWdCaXhCLEtBQUssRUFBQWp4QixPQUFHK3dCLGlCQUFlLGdCQUFBLEdBQWtCLEdBQUc7QUFDdkYsV0FBS3R2QixPQUFPLEtBQUtBLEtBQUtwQyxRQUFRNnhCLGlCQUFpQixJQUFJLEVBQUU3eEIsUUFBUTh4QixnQkFBZ0IsSUFBSTtBQUNqRixhQUFPO0lBQ1I7Ozs7Ozs7OztJQVNBQyxnQkFBZ0JDLE9BQU85aUIsUUFBUTtBQUM5QixZQUFNNU0sV0FBVyxJQUFJekUsU0FBU3lFLFNBQVMsS0FBS0YsSUFBSTtBQUNoREUsZUFBU0MsT0FBTyxRQUFRLEtBQUs7QUFDN0IyTSxlQUFTQSxTQUFBLEdBQUF2TyxPQUFZdU8sUUFBTSxJQUFBLElBQU87QUFDbEMsWUFBTStpQixtQkFBbUJwMEIsU0FBU29DLGNBQWMreEIsS0FBSztBQUdyRCxZQUFNRSxhQUFhLElBQUkxZ0IsT0FBQSxTQUFBN1EsT0FDYjlDLFNBQVNrRixlQUFlLENBQUMsR0FBQyxPQUFBLEVBQUFwQyxPQUFRc3hCLGtCQUFnQixxQkFBQSxDQUM1RDtBQUNBLFlBQU1FLFdBQVd0MEIsU0FBU3dDLE9BQU9rTyxvQkFBb0JqTSxTQUFTRSxTQUFTLE1BQU0sSUFBSTtBQUFBLFVBQUE0dkIsYUFBQWp4QiwyQkFDM0RneEIsUUFBQSxHQUFBRTtBQUFBLFVBQUE7QUFBdEIsYUFBQUQsV0FBQS93QixFQUFBLEdBQUEsRUFBQWd4QixTQUFBRCxXQUFBOXdCLEVBQUEsR0FBQUMsUUFBZ0M7QUFBQSxnQkFBckIrd0IsVUFBQUQsT0FBQTV3QjtBQUNWLGNBQUl5d0IsV0FBV3pnQixLQUFLNmdCLE9BQU8sR0FBRztBQUM3QixrQkFBTTVrQixjQUFBLFFBQUEvTSxPQUFzQnVPLE1BQU0sRUFBQXZPLE9BQUcyeEIsU0FBTyxNQUFBO0FBQzVDaHdCLHFCQUFTRSxVQUFVRixTQUFTRSxRQUFReEMsUUFBUXN5QixTQUFTNWtCLFdBQVc7QUFFaEVwTCxxQkFBU0MsT0FBTyxRQUFRLEtBQUs7VUFDOUI7UUFDRDtNQUFBLFNBQUFOLEtBQUE7QUFBQW13QixtQkFBQWx3QixFQUFBRCxHQUFBO01BQUEsVUFBQTtBQUFBbXdCLG1CQUFBandCLEVBQUE7TUFBQTtBQUlBLFlBQU1vd0Isb0JBQW9CLElBQUkvZ0IsT0FBQSxTQUFBN1EsT0FDcEI5QyxTQUFTa0YsZUFBZSxDQUFDLEdBQUMsT0FBQSxFQUFBcEMsT0FBUXN4QixrQkFBZ0Isb0JBQUEsR0FDM0QsSUFDRDtBQUNBM3ZCLGVBQVNFLFVBQVVGLFNBQVNFLFFBQVF4QyxRQUFRdXlCLG1CQUFBLFFBQUE1eEIsT0FBMkJ1TyxRQUFNLFFBQUEsQ0FBUTtBQUVyRjVNLGVBQVNDLE9BQU8sUUFBUSxLQUFLO0FBRzdCLFlBQU1pd0IsaUJBQWlCLElBQUloaEIsT0FBQSxtQ0FBQTdRLE9BQ1M5QyxTQUFTa0YsZUFBZSxDQUFDLEdBQUMsU0FBQSxFQUFBcEMsT0FBVXN4QixrQkFBZ0IsR0FBQSxHQUN2RixJQUNEO0FBQ0EzdkIsZUFBU0UsVUFBVUYsU0FBU0UsUUFBUXhDLFFBQVF3eUIsZ0JBQUEsUUFBQTd4QixPQUF3QnVPLFFBQU0sUUFBQSxDQUFRO0FBRWxGLFdBQUs5TSxPQUFPRSxTQUFTUSxPQUFPO0FBQzVCLGFBQU87SUFDUjs7Ozs7Ozs7SUFRQTJ2QixrQkFBa0JULE9BQU96dEIsTUFBTTtBQUM5QixZQUFNMHRCLG1CQUFtQnAwQixTQUFTb0MsY0FBYyt4QixLQUFLO0FBQ3JELFlBQU1FLGFBQWEsSUFBSTFnQixPQUFBLFNBQUE3USxPQUNiOUMsU0FBU2tGLGVBQWUsQ0FBQyxHQUFDLE9BQUEsRUFBQXBDLE9BQVFzeEIsa0JBQWdCLHFCQUFBLENBQzVEO0FBQ0EsWUFBTUUsV0FBV3QwQixTQUFTd0MsT0FBT2tPLG9CQUFvQixLQUFLbk0sTUFBTSxNQUFNLElBQUk7QUFBQSxVQUFBc3dCLGNBQUF2eEIsMkJBQ2xEZ3hCLFFBQUEsR0FBQVE7QUFBQSxVQUFBO0FBQXhCLGFBQUFELFlBQUFyeEIsRUFBQSxHQUFBLEVBQUFzeEIsVUFBQUQsWUFBQXB4QixFQUFBLEdBQUFDLFFBQWtDO0FBQUEsY0FBekJtTSxjQUFBaWxCLFFBQUFseEI7QUFDUixjQUFJeXdCLFdBQVd6Z0IsS0FBSy9ELFdBQVcsR0FBRztBQUVqQ0EsMEJBQWNBLFlBQVkxTixRQUFRLFNBQUEsSUFBQVcsT0FBYTRELE1BQUksSUFBQSxDQUFJO0FBQ3ZELGlCQUFLbkMsT0FBTyxLQUFLQSxLQUFLcEMsUUFBUTBOLGFBQWFBLFdBQVc7VUFDdkQ7UUFDRDtNQUFBLFNBQUF6TCxLQUFBO0FBQUF5d0Isb0JBQUF4d0IsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQXl3QixvQkFBQXZ3QixFQUFBO01BQUE7QUFDQSxZQUFNeXdCLGVBQWUsSUFBSXBoQixPQUFBLFNBQUE3USxPQUFnQnN4QixrQkFBZ0IsZ0JBQUEsR0FBa0IsSUFBSTtBQUMvRSxZQUFNWSxVQUFBLFNBQUFseUIsT0FBbUI0RCxJQUFJO0FBQzdCLFdBQUtuQyxPQUFPLEtBQUtBLEtBQUtwQyxRQUFRNHlCLGNBQWNDLE9BQU87QUFDbkQsYUFBTztJQUNSOzs7Ozs7OztJQVFBQyxlQUFlQyxVQUFVO0FBQ3hCLFlBQU1DLHNCQUFzQm4xQixTQUFTb0MsY0FBYzh5QixRQUFRO0FBQzNELFlBQU1iLGFBQWEsSUFBSTFnQixPQUFBLFlBQUE3USxPQUNWOUMsU0FBU2tGLGVBQWUsRUFBRSxHQUFDLFNBQUEsRUFBQXBDLE9BQVVxeUIscUJBQW1CLHFCQUFBLENBQ3JFO0FBQ0EsWUFBTUMsZUFBZXAxQixTQUFTd0MsT0FBT2tPLG9CQUFvQixLQUFLbk0sTUFBTSxNQUFNLE1BQU0sQ0FBQyxPQUFPLEtBQUssQ0FBQztBQUFBLFVBQUE4d0IsY0FBQS94QiwyQkFDcEU4eEIsWUFBQSxHQUFBRTtBQUFBLFVBQUE7QUFBMUIsYUFBQUQsWUFBQTd4QixFQUFBLEdBQUEsRUFBQTh4QixVQUFBRCxZQUFBNXhCLEVBQUEsR0FBQUMsUUFBd0M7QUFBQSxnQkFBN0I2eEIsY0FBQUQsUUFBQTF4QjtBQUNWLGNBQUl5d0IsV0FBV3pnQixLQUFLMmhCLFdBQVcsR0FBRztBQUNqQyxpQkFBS2h4QixPQUFPLEtBQUtBLEtBQUtwQyxRQUFRb3pCLGFBQWEsRUFBRTtVQUM5QztRQUNEO01BQUEsU0FBQW54QixLQUFBO0FBQUFpeEIsb0JBQUFoeEIsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQWl4QixvQkFBQS93QixFQUFBO01BQUE7QUFDQSxhQUFPO0lBQ1I7Ozs7Ozs7Ozs7Ozs7OztJQWVBa3hCLHFCQUFxQmpHLEtBQUtscUIsT0FBT293QixPQUFPQyxVQUFVO0FBQ2pELFVBQUluRyxRQUFRLFFBQVc7QUFDdEIsY0FBTSxJQUFJdmUsVUFBVSxpQkFBaUI7TUFDdEM7QUFHQSxVQUFJM0wsVUFBVSxVQUFhLENBQUNBLE1BQU1wRCxRQUFRO0FBQ3pDLGNBQU0sSUFBSTRKLE1BQU0sbUJBQW1CO01BQ3BDLFdBQVcxSSxNQUFNQyxRQUFRaUMsS0FBSyxHQUFHO0FBQ2hDQSxnQkFBUUEsTUFBTVUsS0FBSyxHQUFHO01BQ3ZCO0FBQ0EsVUFBSSxPQUFPMHZCLFVBQVUsVUFBVTtBQUM5QkEsZ0JBQVE7TUFDVDtBQUNBLFVBQUksQ0FBQ0MsWUFBWSxDQUFDQSxTQUFTenpCLFFBQVE7QUFDbEN5ekIsbUJBQVc7TUFDWixXQUFXdnlCLE1BQU1DLFFBQVFzeUIsUUFBUSxHQUFHO0FBQ25DQSxtQkFBV0EsU0FBUzN2QixLQUFLLEdBQUc7TUFDN0I7QUFHQSxXQUFLeEIsT0FBTyxLQUFLQSxLQUFLcEMsUUFDckIsSUFBSXdSOzs7Ozs7Ozs7Ozs7UUFBQSxtQkFBQTdROztVQWNGNHlCO1VBQ0Q7UUFBQSxFQUFBNXlCOztVQUVDdUM7VUFDRDtRQUFBO1FBQ0Fvd0I7TUFDRCxHQUFBLEtBQUEzeUIsT0FDS3lzQixHQUFHLENBQ1Q7QUFDQSxhQUFPO0lBQ1I7Ozs7OztJQU1Bb0csVUFBVTtBQUNULGFBQU8sS0FBS3B4QjtJQUNiO0VBQ0Q7QUFVQXZFLFdBQVM0MUIsa0JBQWtCLFNBQVVDLGFBQWE7QUFDakQsUUFBSSxDQUFDQSxhQUFhO0FBQ2pCLFlBQU0sSUFBSWhxQixNQUFNLDRCQUE0QjtJQUM3QztBQU1BLFNBQUtpcUIsY0FBYztBQU1uQixTQUFLQyxjQUFjO0FBQ25CLFNBQUsvVCxhQUFhO0FBUWxCLFNBQUtoTSxNQUFNLFNBQVVnZ0IsU0FBU0MsYUFBYTtBQUMxQyxZQUFNQyxNQUFNbjJCLEVBQUUyZixTQUFTO0FBQ3ZCLFVBQUksQ0FBQ3NXLFNBQVM7QUFDYixlQUFPRSxJQUFJQyxPQUFPO01BQ25CO0FBQ0EsWUFBTXZVLE9BQU8sSUFBSTVoQixTQUFTd2IsS0FBS29HLEtBQUEsUUFBQTllLE9BQ3RCNUIsR0FBR0MsT0FBT0MsSUFBSSxZQUFZLEdBQUMsR0FBQSxFQUFBMEIsT0FBSSt5QixXQUFXLEdBQ2xENTFCLE9BQU9nUyxNQUFNLGdCQUFnQixlQUFlLENBQzdDO0FBQ0EyUCxXQUFLNEUsS0FBTXlHLGFBQVk7QUFFdEIsWUFBSTFvQixPQUFPMG9CLFFBQVFyRSxZQUFZLEtBQUssS0FBS2tOO0FBRXpDLGNBQU1sMUIsT0FBTyxJQUFJWixTQUFTWSxLQUFLcXNCLFFBQVE3QixZQUFZLENBQUM7QUFDcEQsWUFBSSxDQUFDeHFCLEtBQUtvYSxpQkFBaUIsRUFBRXZhLEtBQUs4RCxJQUFJLEdBQUc7QUFDeENBLGtCQUFBLE9BQUF6QixPQUFlbEMsS0FBS3NhLFlBQVksS0FBSzZhLFdBQVcsQ0FBQztRQUNsRDtBQUNBOUksZ0JBQVFwRSxZQUFBLEdBQUEvbEIsT0FBZXlCLE1BQUksSUFBQSxFQUFBekIsT0FBS2t6QixPQUFPLENBQUU7QUFDekMvSSxnQkFBUS9ELGVBQWUrTSxXQUFXO0FBQ2xDaEosZ0JBQVE5RCxjQUFjLEtBQUtuSCxVQUFVO0FBQ3JDaUwsZ0JBQVE3RCxnQkFBZ0IsVUFBVTtBQUNsQzZELGdCQUFRL0YsS0FBS2dQLElBQUk1RSxTQUFTNEUsSUFBSUMsTUFBTTtNQUNyQyxDQUFDO0FBQ0QsYUFBT0Q7SUFDUjtFQUNEO0FBZUFsMkIsV0FBUzZiLFNBQVMsU0FBVXRYLE1BQU02eEIsTUFBTWh3QixNQUFNO0FBQzdDLFNBQUtpd0IsVUFBVTl4QjtBQUNmLFNBQUtBLE9BQU92RSxTQUFTK0MsV0FBV3dCLElBQUk7QUFDcEMsU0FBSzZCLE9BQU9BLFFBQVE7QUFDcEIsU0FBS2t3QixTQUFTO0FBQ2QsUUFBSUYsTUFBTTtBQUNULFdBQUtHLE9BQU9ILE1BQU1od0IsSUFBSTtJQUN2QjtFQUNEO0FBUUFwRyxXQUFTNmIsT0FBT2tXLE9BQVE1ckIsVUFBUztBQUNoQyxRQUFJLEVBQUVBLGdCQUFnQnF3QixVQUFVO0FBQy9CLFlBQU0sSUFBSXhsQixVQUFVLG1DQUFtQztJQUN4RDtBQUNBLFdBQU83SyxLQUFLc3dCLGNBQWMsR0FBRztBQUM1QnR3QixXQUFLa0QsWUFBWWxELEtBQUsrSCxVQUFVO0lBQ2pDO0FBQ0FsTyxhQUFTNmIsT0FBTzFWLE9BQU9BO0FBQ3ZCbkcsYUFBUzZiLE9BQU82YSxhQUFhO0VBQzlCO0FBQ0ExMkIsV0FBUzZiLE9BQU8xVixPQUFPO0FBTXZCbkcsV0FBUzZiLE9BQU9jLFVBQVdnYSxhQUFZO0FBQ3RDLFFBQUksT0FBT0EsWUFBWSxZQUFZO0FBQ2xDMzJCLGVBQVM2YixPQUFPNmEsYUFBYUM7SUFDOUIsT0FBTztBQUNOLFlBQU0sSUFBSTNsQixVQUFVLG9EQUFvRDtJQUN6RTtFQUNEO0FBQ0FoUixXQUFTNmIsT0FBT3hWLFlBQVk7SUFDM0IrdkIsTUFBTTtJQUNOUSxTQUFTO0lBQ1RyeUIsTUFBTTtJQUNOOHhCLFNBQVM7SUFDVGp3QixNQUFNO0lBQ052QixRQUFRO0lBQ1JWLE1BQU07SUFDTjB5QixRQUFROztJQUVSbkksT0FBTztBQUNOLFVBQUksQ0FBQyxLQUFLbUksVUFBVTcyQixTQUFTNmIsT0FBTzFWLE1BQU07QUFDekNuRyxpQkFBUzZiLE9BQU8xVixLQUFLckMsWUFBWSxLQUFLSyxJQUFJO0FBQzFDLGFBQUsweUIsU0FBUztNQUNmO0lBQ0Q7O0lBRUEvVixTQUFTO0FBQ1IsVUFBSSxLQUFLK1YsUUFBUTtBQUNoQjcyQixpQkFBUzZiLE9BQU8xVixLQUFLa0QsWUFBWSxLQUFLbEYsSUFBSTtBQUMxQyxhQUFLMHlCLFNBQVM7TUFDZjtJQUNEOzs7Ozs7OztJQVFBTixPQUFPMWEsUUFBUXpWLE1BQU07QUFDcEIsV0FBS3d3QixVQUFVL2E7QUFDZixXQUFLdWEsT0FBT3AyQixTQUFTK0MsV0FBVzhZLE1BQU07QUFDdEMsVUFBSXpWLE1BQU07QUFDVCxhQUFLQSxPQUFPQTtBQUNaLFlBQUlBLFNBQVMsU0FBUztBQUVyQnBHLG1CQUFTd2IsS0FBS0Msc0JBQXNCO0FBRXBDLGNBQUl6YixTQUFTNmIsT0FBTzZhLFlBQVk7QUFDL0IxMkIscUJBQVM2YixPQUFPNmEsV0FBVztVQUM1QjtBQUVBajFCLGtCQUFRNGIsTUFBQSxjQUFBdmEsT0FBb0IsS0FBS3V6QixTQUFPLElBQUEsRUFBQXZ6QixPQUFLLEtBQUs4ekIsT0FBTyxDQUFFO1FBQzVEO01BQ0Q7QUFDQSxXQUFLdHdCLE9BQU87SUFDYjs7SUFFQWd3QixXQUFXO0FBQ1YsV0FBS255QixPQUFPckMsU0FBUzBGLGNBQWMsS0FBSztBQUN4QyxXQUFLckQsS0FBS0wsWUFBWWhDLFNBQVMwRixjQUFjLE1BQU0sQ0FBQyxFQUFFMUQsWUFBWSxLQUFLUyxJQUFJO0FBQzNFLFdBQUtKLEtBQUtMLFlBQVloQyxTQUFTMEYsY0FBYyxNQUFNLENBQUMsRUFBRTFELFlBQVloQyxTQUFTc0csZUFBZSxJQUFJLENBQUM7QUFDL0YsV0FBS3ZELFNBQVMsS0FBS1YsS0FBS0wsWUFBWWhDLFNBQVMwRixjQUFjLE1BQU0sQ0FBQztBQUNsRSxXQUFLM0MsT0FBT2YsWUFBWWhDLFNBQVNzRyxlQUFlLEVBQUUsQ0FBQztJQUNwRDs7SUFHQTlCLFNBQVM7QUFDUixXQUFLbkMsS0FBS3NELFlBQUEsbUJBQUEzRSxPQUErQixLQUFLc0QsSUFBSTtBQUNsRCxhQUFPLEtBQUt2QixPQUFPNHhCLGNBQWMsR0FBRztBQUNuQyxhQUFLNXhCLE9BQU93RSxZQUFZLEtBQUt4RSxPQUFPcUosVUFBVTtNQUMvQztBQUNBLFdBQUtySixPQUFPZixZQUFZLEtBQUtzeUIsSUFBSTtBQUNqQyxXQUFLMUgsS0FBSztJQUNYO0lBQ0E3UyxPQUFPQSxRQUFRO0FBQ2QsV0FBSzBhLE9BQU8xYSxRQUFRLFFBQVE7SUFDN0I7SUFDQTRELEtBQUs1RCxRQUFRO0FBQ1osV0FBSzBhLE9BQU8xYSxRQUFRLE1BQU07SUFDM0I7SUFDQW5hLEtBQUttYSxRQUFRO0FBQ1osV0FBSzBhLE9BQU8xYSxRQUFRLE1BQU07SUFDM0I7SUFDQXdCLE1BQU14QixRQUFRO0FBQ2IsV0FBSzBhLE9BQU8xYSxRQUFRLE9BQU87SUFDNUI7RUFDRDtBQU9BN2IsV0FBUzZiLE9BQU9BLFNBQVMsQ0FBQ3RYLE1BQU1zWCxXQUFXO0FBQzFDLFdBQU8sSUFBSTdiLFNBQVM2YixPQUFPdFgsTUFBTXNYLE1BQU07RUFDeEM7QUFPQTdiLFdBQVM2YixPQUFPNEQsT0FBTyxDQUFDbGIsTUFBTXNYLFdBQVc7QUFDeEMsV0FBTyxJQUFJN2IsU0FBUzZiLE9BQU90WCxNQUFNc1gsUUFBUSxNQUFNO0VBQ2hEO0FBT0E3YixXQUFTNmIsT0FBT25hLE9BQU8sQ0FBQzZDLE1BQU1zWCxXQUFXO0FBQ3hDLFdBQU8sSUFBSTdiLFNBQVM2YixPQUFPdFgsTUFBTXNYLFFBQVEsTUFBTTtFQUNoRDtBQU9BN2IsV0FBUzZiLE9BQU93QixRQUFRLENBQUM5WSxNQUFNc1gsV0FBVztBQUN6QyxXQUFPLElBQUk3YixTQUFTNmIsT0FBT3RYLE1BQU1zWCxRQUFRLE9BQU87RUFDakQ7QUFRQTdiLFdBQVM2YixPQUFPRixrQkFBbUJwWCxVQUFTO0FBQzNDLFVBQU1KLE9BQU9yQyxTQUFTMEYsY0FBYyxLQUFLO0FBQ3pDckQsU0FBS0wsWUFBWWhDLFNBQVMwRixjQUFjLEdBQUcsQ0FBQyxFQUFFMUQsWUFBWWhDLFNBQVNzRyxlQUFlN0QsSUFBSSxDQUFDO0FBQ3ZGSixTQUFLc0QsWUFBWTtBQUNqQixRQUFJekgsU0FBUzZiLE9BQU8xVixNQUFNO0FBQ3pCbkcsZUFBUzZiLE9BQU8xVixLQUFLckMsWUFBWUssSUFBSTtJQUN0QztFQUNEO0FBU0FuRSxXQUFTNmIsT0FBT2liLGdCQUFnQixDQUFDQyxVQUFVQyxZQUFZO0FBQ3RELFVBQU1DLElBQUluMUIsU0FBUzBGLGNBQWMsR0FBRztBQUNwQ3l2QixNQUFFNUUsWUFBWTJFO0FBQ2QsVUFBTUUsTUFBTXAxQixTQUFTMEYsY0FBYyxLQUFLO0FBQ3hDMHZCLFFBQUl6dkIsWUFBWTtBQUNoQnl2QixRQUFJeHVCLE1BQU15dUIsWUFBWTtBQUN0QkQsUUFBSXh1QixNQUFNMHVCLGFBQWE7QUFDdkJGLFFBQUkvb0IsY0FBYzRvQjtBQUNsQkUsTUFBRW56QixZQUFZb3pCLEdBQUc7QUFDakJsM0IsYUFBUzZiLE9BQU8xVixLQUFLckMsWUFBWW16QixDQUFDO0VBQ25DO0FBU0FqM0IsV0FBU3EzQixXQUFXLENBQUNqeEIsTUFBTXpCLFNBQVMyeUIsVUFBVTtBQUM3QyxVQUFNbnpCLE9BQU9yQyxTQUFTMEYsY0FBY3BCLElBQUk7QUFDeEMsUUFBSWt4QixPQUFPO0FBQ1ZuekIsV0FBS3VFLE1BQU00dUIsUUFBUUE7SUFDcEI7QUFDQW56QixTQUFLTCxZQUFZaEMsU0FBU3NHLGVBQWV6RCxPQUFPLENBQUM7QUFDakQsV0FBT1I7RUFDUjtBQVNBbkUsV0FBU3VKLDRCQUE0QixDQUFDZ3VCLGdCQUFnQkMsa0JBQWtCO0FBQ3ZFLFFBQUlDLGVBQWU7QUFDbkIsVUFBTUMsZUFBZSxTQUFTQyxjQUFhMXhCLE9BQU87QUFDakQsWUFBTTJ4QixTQUFTO0FBQ2YsVUFBSTN4QixNQUFNNHhCLFlBQVlKLGlCQUFpQixNQUFNO0FBQzVDLGNBQU1LLE1BQU0vM0IsRUFBRXczQixnQkFBZ0JDLGFBQWE7QUFDM0MsWUFBSU8sUUFBUTtBQUNaLFlBQUlDLFlBQVk7QUFDaEIsWUFBSS93QjtBQUNKLGFBQUtBLElBQUksR0FBR0EsSUFBSTZ3QixJQUFJNzFCLFFBQVFnRixLQUFLO0FBQ2hDLGNBQUk2d0IsSUFBSTd3QixDQUFDLE1BQU0yd0IsUUFBUTtBQUN0Qkcsb0JBQVE5d0I7QUFDUixnQkFBSSt3QixZQUFZLElBQUk7QUFDbkI7WUFDRDtVQUNEO0FBQ0EsY0FBSUYsSUFBSTd3QixDQUFDLE1BQU13d0IsY0FBYztBQUM1Qk8sd0JBQVkvd0I7QUFDWixnQkFBSTh3QixRQUFRLElBQUk7QUFDZjtZQUNEO1VBQ0Q7UUFDRDtBQUNBLFlBQUlBLFFBQVEsTUFBTUMsWUFBWSxJQUFJO0FBRWpDLGdCQUFNQyxXQUFXTCxPQUFPbnZCO0FBQ3hCLGNBQUlrSTtBQUNKLGNBQUl1bkI7QUFDSixjQUFJSCxRQUFRQyxXQUFXO0FBQ3RCcm5CLG9CQUFRb25CLFFBQVE7QUFDaEJHLHFCQUFTRjtVQUNWLE9BQU87QUFDTnJuQixvQkFBUXFuQjtBQUNSRSxxQkFBU0gsUUFBUTtVQUNsQjtBQUNBLGVBQUs5d0IsSUFBSTBKLE9BQU8xSixLQUFLaXhCLFFBQVFqeEIsS0FBSztBQUNqQyxnQkFBSTZ3QixJQUFJN3dCLENBQUMsRUFBRXdCLFlBQVl3dkIsVUFBVTtBQUNoQ0gsa0JBQUk3d0IsQ0FBQyxFQUFFa3hCLE1BQU07WUFDZDtVQUNEO1FBQ0Q7TUFDRDtBQUNBVixxQkFBZUc7QUFDZixhQUFPO0lBQ1I7QUFDQTczQixNQUFFdzNCLGdCQUFnQkMsYUFBYSxFQUFFWSxHQUFHLFNBQVNWLFlBQVk7RUFDMUQ7QUF1Q0ExM0IsV0FBU3E0QixpQkFBaUIsU0FBVTliLGVBQWU7QUFDbEQsVUFBTXNGLE1BQU07O01BRVh5VyxVQUFVO01BQ1ZucEIsU0FBUztRQUNSb3BCLFdBQVc7UUFDWEMsK0JBQStCO01BQ2hDOztNQUVBOWIsZUFBZSxJQUFJMWMsU0FBUzZiLE9BQU9VLGlCQUFpQnRjLE9BQU9nUyxNQUFNLFVBQVUsUUFBUSxDQUFDO01BQ3BGd21CLFFBQVE7O01BRVJDLFlBQVk7O01BRVpDLGNBQWM7TUFDZEMsZUFBZTtNQUNmQyxzQkFBc0I7TUFDdEJDLG1CQUFtQjtNQUNuQkMsWUFBWSxDQUFBO01BQ1pDLFNBQVM7SUFDVjtBQUVBLFNBQUsvWSxtQkFBbUIsTUFBTTtBQUM3QixhQUFPNEIsSUFBSW5GO0lBQ1o7QUFPQSxTQUFLdWMsY0FBZVgsY0FBYTtBQUNoQ3pXLFVBQUl5VyxXQUFXQTtJQUNoQjtBQWFBLFNBQUtZLFlBQVksQ0FBQ0MsWUFBWUMsZ0JBQWdCO0FBQzdDdlgsVUFBSTFTLFFBQVFncUIsVUFBVSxJQUFJQztJQUMzQjtBQVNBLFNBQUtDLE1BQU0sQ0FBQ1osUUFBUUMsZUFBZTtBQUNsQyxVQUFJN1csSUFBSW1YLFNBQVM7QUFDaEJuWCxZQUFJbkYsY0FBY1csTUFBTXBkLE9BQU9nUyxNQUFNLFlBQVksVUFBVSxDQUFDO0FBQzVEO01BQ0Q7QUFDQTRQLFVBQUltWCxVQUFVO0FBQ2RuWCxVQUFJNFcsU0FBU0E7QUFDYjVXLFVBQUk2VyxhQUFhQTtBQUNqQjdXLFVBQUk4VyxlQUFlO0FBQ25COVcsVUFBSStXLGdCQUFnQjtBQUNwQi9XLFVBQUlnWCx1QkFBdUI7QUFDM0JoWCxVQUFJaVgsb0JBQW9CO0FBQ3hCalgsVUFBSWtYLGFBQWEsQ0FBQTtBQUNqQixZQUFNTyxRQUFRelgsSUFBSXlXLFNBQVNyMkI7QUFDM0IsVUFBSSxDQUFDcTNCLE9BQU87QUFDWHpYLFlBQUluRixjQUFjK0MsS0FBS3hmLE9BQU9nUyxNQUFNLFVBQVUsUUFBUSxDQUFDO0FBQ3ZENFAsWUFBSW1YLFVBQVU7QUFDZCxZQUFJblgsSUFBSTZXLFlBQVk7QUFDbkI3VyxjQUFJNlcsV0FBVztRQUNoQjtBQUNBO01BQ0Q7QUFFQTdXLFVBQUlrWCxhQUFhLzRCLFNBQVNxUyxNQUFNTSxNQUFNa1AsSUFBSXlXLFVBQVV6VyxJQUFJMVMsUUFBUW9wQixTQUFTO0FBRXpFdjRCLGVBQVN3YixLQUFLWSxjQUFjO0FBQzVCeUYsVUFBSW5GLGNBQWNiLE9BQU8sSUFBSTtBQUM3QjBkLHNCQUFnQjtJQUNqQjtBQVVBLFNBQUtDLGdCQUFpQkMsU0FBUTtBQUM3QixVQUFJQSxlQUFlejVCLFNBQVN3YixLQUFLYyxPQUFPbWQsZUFBZXo1QixTQUFTd2IsS0FBS29HLE1BQU07QUFFMUUsY0FBTXpFLFdBQVdzYyxJQUFJeFosaUJBQWlCO0FBQ3RDLFlBQUk0QixJQUFJMVMsUUFBUXFwQiwrQkFBK0I7QUFDOUMsY0FBSWlCLElBQUk5USxlQUFlOFEsSUFBSXAzQixZQUFhbzNCLElBQUlqZCxTQUFTaWQsSUFBSWpkLE1BQU10USxPQUFRO0FBRXRFLGtCQUFNN0osV0FBV28zQixJQUFJOVEsY0FBYzhRLElBQUk5USxZQUFZLElBQUk4USxJQUFJcDNCLFlBQVlvM0IsSUFBSWpkLE1BQU10UTtBQUNqRmlSLHFCQUFTc0MsS0FBQSxRQUFBM2MsT0FBYVQsVUFBUSxLQUFBLENBQUs7VUFDcEMsT0FBTztBQUVOOGEscUJBQVNzQyxLQUFLLElBQUk7VUFDbkI7UUFDRCxPQUFPO0FBRU50QyxtQkFBUzJELE9BQU87UUFDakI7TUFDRCxXQUFXLE9BQU8yWSxRQUFRLFlBQVk1WCxJQUFJMVMsUUFBUXFwQiwrQkFBK0I7QUFDaEYsWUFBSXg0QixTQUFTNmIsT0FBTzRkLEtBQUEsUUFBQTMyQixPQUFhMjJCLEtBQUcsS0FBQSxDQUFLO01BQzFDO0FBQ0E1WCxVQUFJZ1g7QUFDSmEsZ0JBQVU7SUFDWDtBQUNBLFNBQUtDLGdCQUFnQixNQUFNO0FBQzFCRCxnQkFBVTtJQUNYO0FBRUEsVUFBTUUsWUFBWTtBQUNsQixVQUFNTCxrQkFBa0JBLE1BQU07QUFDN0IsWUFBTTVtQixRQUFRa1AsSUFBSWtYLFdBQVcsRUFBRWxYLElBQUlpWCxpQkFBaUI7QUFDcEQsVUFBSSxDQUFDbm1CLE9BQU87QUFDWDtNQUNEO0FBRUFrUCxVQUFJOFcsZ0JBQWdCaG1CLE1BQU0xUTtBQUFBLFVBQUE0M0IsY0FBQXYyQiwyQkFDUHFQLEtBQUEsR0FBQW1uQjtBQUFBLFVBQUE7QUFBbkIsYUFBQUQsWUFBQXIyQixFQUFBLEdBQUEsRUFBQXMyQixVQUFBRCxZQUFBcDJCLEVBQUEsR0FBQUMsUUFBMEI7QUFBQSxnQkFBZmtlLE9BQUFrWSxRQUFBbDJCO0FBQ1ZpZSxjQUFJNFcsT0FBTzdXLE1BQU1nWSxTQUFTO1FBQzNCO01BQUEsU0FBQXgxQixLQUFBO0FBQUF5MUIsb0JBQUF4MUIsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQXkxQixvQkFBQXYxQixFQUFBO01BQUE7SUFDRDtBQUNBLFVBQU1vMUIsWUFBWUEsTUFBTTtBQUN2QjdYLFVBQUkrVztBQUVKLFlBQU1VLFFBQVF6WCxJQUFJeVcsU0FBU3IyQjtBQUMzQixVQUFJNGYsSUFBSStXLGdCQUFnQlUsT0FBTztBQUM5QixjQUFNUyxXQUFXbG5CLEtBQUttbkIsTUFBTyxNQUFNblksSUFBSStXLGdCQUFpQlUsS0FBSztBQUM3RHpYLFlBQUluRixjQUFjYixPQUFBLEdBQUEvWSxPQUFVaTNCLFVBQVEsR0FBQSxDQUFHO0FBR3ZDLFlBQ0NsWSxJQUFJK1csaUJBQWlCL1csSUFBSThXLGVBQWU5bEIsS0FBSzNJLElBQUkyWCxJQUFJMVMsUUFBUW9wQixZQUFZLElBQUksQ0FBQyxLQUM5RTFsQixLQUFLb25CLE1BQU1wWSxJQUFJK1csZ0JBQWdCL1csSUFBSTFTLFFBQVFvcEIsU0FBUyxJQUFJMVcsSUFBSWlYLG1CQUMzRDtBQUNEUywwQkFBZ0I7UUFDakI7TUFDRCxXQUFXMVgsSUFBSStXLGtCQUFrQlUsT0FBTztBQUN2QyxjQUFNWSxlQUFBLE1BQUFwM0IsT0FBcUIrZSxJQUFJZ1gsc0JBQW9CLEdBQUEsRUFBQS8xQixPQUFJK2UsSUFBSStXLGVBQWEsU0FBQTtBQUN4RSxZQUFJL1csSUFBSWdYLHVCQUF1QmhYLElBQUkrVyxlQUFlO0FBQ2pEL1csY0FBSW5GLGNBQWNoYixLQUFLdzRCLFlBQVk7UUFDcEMsT0FBTztBQUNOclksY0FBSW5GLGNBQWMrQyxLQUFLeWEsWUFBWTtRQUNwQztBQUNBLFlBQUlyWSxJQUFJNlcsWUFBWTtBQUNuQjdXLGNBQUk2VyxXQUFXO1FBQ2hCO0FBQ0ExNEIsaUJBQVN3YixLQUFLYSxpQkFBaUI7QUFDL0J3RixZQUFJbVgsVUFBVTtNQUNmLE9BQU87QUFHTm5YLFlBQUluRixjQUFjaGIsS0FBQSxHQUFBb0IsT0FDZDdDLE9BQU9nUyxNQUFNLFdBQVcsU0FBUyxLQUFLNFAsSUFBSStXLGdCQUFnQlUsUUFBTSxJQUFBLENBQ3BFO0FBQ0F0NUIsaUJBQVN3YixLQUFLYSxpQkFBaUI7QUFDL0J3RixZQUFJbVgsVUFBVTtNQUNmO0lBQ0Q7RUFDRDtBQVVBaDVCLFdBQVNtNkIsZUFBZSxTQUFVQyxPQUFPQyxRQUFRO0FBQ2hELFVBQU0xMUIsVUFBVTdDLFNBQVMwRixjQUFjLEtBQUs7QUFDNUMsU0FBSzdDLFVBQVVBO0FBQ2ZBLFlBQVE4QyxZQUFZO0FBQ3BCOUMsWUFBUWlDLEtBQUEsMkJBQUE5RCxPQUFnQytQLEtBQUttbkIsTUFBTW5uQixLQUFLaUMsT0FBTyxJQUFJLElBQUksQ0FBQztBQUN4RSxTQUFLdWxCLFNBQVNBO0FBQ2R0NkIsTUFBRSxLQUFLNEUsT0FBTyxFQUFFMjFCLE9BQU87TUFDdEJDLFVBQVU7TUFDVkMsU0FBUztRQUNSLHNCQUFzQkMsTUFBTTtRQUFDO01BQzlCO01BQ0FDLGFBQWE7TUFDYk4sT0FBT3ZuQixLQUFLNUksSUFBSUUsT0FBT2dHLFNBQVNsUSxPQUFPMDZCLFlBQVksRUFBRSxHQUFHeHdCLE9BQU9nRyxTQUFTaXFCLFNBQVMsS0FBSyxFQUFFLENBQUM7Ozs7O01BS3pGQyxRQUFRQSxTQUFTO01BQ2pCTyxPQUFRMzBCLFdBQVU7QUFFakJsRyxVQUFFa0csTUFBTXBCLE1BQU0sRUFBRXkxQixPQUFPLFNBQVMsRUFBRXh2QixPQUFPO01BQzFDO01BQ0ErdkIsY0FBYztBQUNiLFNBQUMsS0FBS0MsU0FBUyxJQUFJLzZCLEVBQUUsSUFBSSxFQUFFaUMsS0FBSyxxQkFBcUI7QUFDckQsWUFBSSxLQUFLODRCLFdBQVc7QUFDbkIsZUFBS0EsVUFBVXB5QixNQUFNcXlCLFlBQVk7UUFDbEM7TUFDRDtNQUNBQyxhQUFhO0FBQ1osYUFBS0YsWUFBWTtNQUNsQjtNQUNBRyxTQUFTO0FBQ1IsYUFBS3Z5QixNQUFNcXlCLFlBQVk7QUFDdkIsWUFBSSxLQUFLRCxXQUFXO0FBQ25CLGVBQUtBLFVBQVVweUIsTUFBTTB4QixRQUFRO1FBQzlCO01BQ0Q7SUFDRCxDQUFDO0FBQ0QsVUFBTWMsVUFBVW43QixFQUFFLEtBQUs0RSxPQUFPLEVBQUUyMUIsT0FBTyxRQUFRO0FBRS9DWSxZQUFRbDVCLEtBQUssUUFBUSxFQUFFbTVCLEtBQUssQ0FBQ25JLEtBQUtwdkIsVUFBVTtBQUMzQ0EsWUFBTXVGLFdBQVdFLFlBQVl6RixLQUFLO0lBQ25DLENBQUM7QUFFRCxVQUFNdzNCLGFBQWF0NUIsU0FBUzBGLGNBQWMsTUFBTTtBQUNoRDR6QixlQUFXM3pCLFlBQVk7QUFDdkIsVUFBTTR6QixZQUFZdjVCLFNBQVMwRixjQUFjLE1BQU07QUFDL0M2ekIsY0FBVTV6QixZQUFZO0FBQ3RCeXpCLFlBQVFsNUIsS0FBSyx1QkFBdUIsRUFBRXlFLE9BQU8yMEIsWUFBWUMsU0FBUztBQUVsRUgsWUFBUUksVUFBVSxVQUFVLGNBQUEsSUFBQXg0QixPQUFrQixLQUFLNkIsUUFBUWlDLElBQUUseUJBQUEsRUFBQTlELE9BQTBCLEtBQUs2QixRQUFRaUMsRUFBRSxDQUFFO0VBQ3pHO0FBQ0E1RyxXQUFTbTZCLGFBQWE5ekIsWUFBWTtJQUNqQ20wQixTQUFTLENBQUE7SUFDVEgsUUFBUTtJQUNSa0IsZ0JBQWdCO0lBQ2hCQyxZQUFZOzs7Ozs7SUFNWjdtQixRQUFRO0FBQ1A1VSxRQUFFLEtBQUs0RSxPQUFPLEVBQUUyMUIsT0FBTyxXQUFXO0FBQ2xDLGFBQU87SUFDUjs7Ozs7Ozs7SUFRQU0sTUFBTTMwQixPQUFPO0FBQ1osVUFBSUEsT0FBTztBQUNWQSxjQUFNdzFCLGVBQWU7TUFDdEI7QUFDQTE3QixRQUFFLEtBQUs0RSxPQUFPLEVBQUUyMUIsT0FBTyxPQUFPO0FBQzlCLGFBQU87SUFDUjs7Ozs7OztJQU9Bb0IsVUFBVTtBQUNULFVBQUksS0FBS0YsWUFBWTtBQUNwQixjQUFNTixVQUFVbjdCLEVBQUUsS0FBSzRFLE9BQU8sRUFBRTIxQixPQUFPLFFBQVE7QUFDL0NZLGdCQUFRbDVCLEtBQUssNkJBQTZCLEVBQUU4SSxPQUFPO0FBQ25ELGNBQU02d0IsaUJBQWlCNzVCLFNBQVMwRixjQUFjLE1BQU07QUFDcERtMEIsdUJBQWVsMEIsWUFBWTtBQUMzQmswQix1QkFBZXh0QixjQUFBLEdBQUFyTCxPQUFpQixLQUFLMDRCLFlBQVUsS0FBQTtBQUMvQ04sZ0JBQVFsNUIsS0FBSyxrQkFBa0IsRUFBRXltQixRQUFRa1QsY0FBYztNQUN4RDtBQUNBLFlBQU1yQixTQUFTdjZCLEVBQUUsS0FBSzRFLE9BQU8sRUFBRTIxQixPQUFPLE1BQU07QUFDNUMsVUFBSXI2QixPQUFPMjdCLGlCQUFpQjM3QixPQUFPNDdCLE1BQU01N0IsT0FBTzQ3QixHQUFHN21CLE1BQU0vVSxPQUFPNDdCLEdBQUc3bUIsR0FBRzhtQixNQUFNO0FBRTNFeEIsZUFBTzdjLE9BQU8sRUFBRSxDQUFDLEVBQUVzZSwwQkFBMEI7QUFDN0M5N0IsZUFBTzI3QixjQUFjdEIsT0FBTzdjLE9BQU8sRUFBRSxDQUFDLENBQUM7TUFDeEM7QUFDQSxXQUFLdWUsVUFBVSxLQUFLM0IsTUFBTTtBQUMxQixhQUFPO0lBQ1I7Ozs7Ozs7SUFPQTRCLFNBQVMvdkIsT0FBTztBQUNmbk0sUUFBRSxLQUFLNEUsT0FBTyxFQUFFMjFCLE9BQU8sVUFBVSxTQUFTcHVCLEtBQUs7QUFDL0MsYUFBTztJQUNSOzs7Ozs7OztJQVFBZ3dCLGNBQWN4MkIsTUFBTTtBQUNuQixXQUFLODFCLGFBQWE5MUI7QUFDbEIsYUFBTztJQUNSOzs7Ozs7O0lBT0F5MkIsU0FBUy9CLE9BQU87QUFDZnI2QixRQUFFLEtBQUs0RSxPQUFPLEVBQUUyMUIsT0FBTyxVQUFVLFNBQVNGLEtBQUs7QUFDL0MsYUFBTztJQUNSOzs7Ozs7OztJQVFBNEIsVUFBVTNCLFFBQVE7QUFDakIsV0FBS0EsU0FBU0E7QUFNZCxVQUNDbHdCLE9BQU9nRyxTQUFTaXNCLGlCQUFpQnI4QixFQUFFLEtBQUs0RSxPQUFPLEVBQUUyMUIsT0FBTyxRQUFRLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRUQsUUFBUSxFQUFFLElBQ3RGcDZCLE9BQU9vOEIsYUFDTjtBQUNEdDhCLFVBQUUsS0FBSzRFLE9BQU8sRUFDWjIxQixPQUFPLFVBQVUsVUFBVXI2QixPQUFPbzhCLGNBQWMsQ0FBQyxFQUNqRC9CLE9BQU8sVUFBVSxZQUFZLEtBQUs7TUFDckMsT0FBTztBQUNOdjZCLFVBQUUsS0FBSzRFLE9BQU8sRUFBRTIxQixPQUFPLFVBQVUsVUFBVSxNQUFNO01BQ2xEO0FBQ0F2NkIsUUFBRSxLQUFLNEUsT0FBTyxFQUFFMjFCLE9BQU8sUUFBUSxFQUFFdDRCLEtBQUssMEJBQTBCLEVBQUUsQ0FBQyxFQUFFMEcsTUFBTXF5QixZQUFBLEdBQUFqNEIsT0FBZXFILE9BQU9nRyxTQUNoRyxLQUFLa3FCLFNBQVMsSUFDZCxFQUNELEdBQUMsSUFBQTtBQUNELGFBQU87SUFDUjs7Ozs7Ozs7OztJQVVBaUMsV0FBVzMzQixTQUFTO0FBQ25CLFdBQUs0M0IsYUFBYTtBQUNsQixXQUFLQyxXQUFXNzNCLE9BQU87QUFDdkIsYUFBTztJQUNSOzs7Ozs7O0lBT0E2M0IsV0FBVzczQixTQUFTO0FBQ25CLFdBQUtBLFFBQVFiLFlBQVlhLE9BQU87QUFFaEMsWUFBTXdRLFFBQU87QUFDYnBWLFFBQUUsS0FBSzRFLE9BQU8sRUFDWjNDLEtBQUssNkNBQTZDLEVBQ2xEbTVCLEtBQUssQ0FBQ25JLEtBQUtwdkIsVUFBVTtBQUNyQkEsY0FBTThFLE1BQU1nekIsVUFBVTtBQUN0QixjQUFNZSxTQUFTMzZCLFNBQVMwRixjQUFjLFFBQVE7QUFDOUMsWUFBSTVELE1BQU00SyxhQUFhLE9BQU8sR0FBRztBQUNoQ2l1QixpQkFBT3R1QixjQUFjdkssTUFBTThLLGFBQWEsT0FBTztRQUNoRCxXQUFXOUssTUFBTXVLLGFBQWE7QUFDN0JzdUIsaUJBQU90dUIsY0FBY3ZLLE1BQU11SztRQUM1QixPQUFPO0FBQ05zdUIsaUJBQU90dUIsY0FBYztRQUN0QjtBQUNBc3VCLGVBQU9oMUIsWUFBWTdELE1BQU02RCxhQUFhO0FBRXRDZzFCLGVBQU85MEIsaUJBQ04sU0FDQSxNQUFNO0FBQ0wvRCxnQkFBTXUwQixNQUFNO1FBQ2IsR0FDQSxLQUNEO0FBQ0FoakIsUUFBQUEsTUFBS3FsQixRQUFRNTBCLEtBQUs2MkIsTUFBTTtNQUN6QixDQUFDO0FBRUYsVUFBSSxLQUFLakMsUUFBUXY0QixTQUFTLEdBQUc7QUFDNUJsQyxVQUFFLEtBQUs0RSxPQUFPLEVBQ1oyMUIsT0FBTyxRQUFRLEVBQ2Z0NEIsS0FBSywwQkFBMEIsRUFDL0Iwd0IsTUFBTSxFQUNOanNCLE9BQU8sS0FBSyt6QixPQUFPLEVBQUUsQ0FBQyxFQUN0Qm52QixnQkFBZ0IsWUFBWTtNQUMvQixPQUFPO0FBQ050TCxVQUFFLEtBQUs0RSxPQUFPLEVBQ1oyMUIsT0FBTyxRQUFRLEVBQ2Z0NEIsS0FBSywwQkFBMEIsRUFBRSxDQUFDLEVBQ2xDMEYsYUFBYSxjQUFjLFlBQVk7TUFDMUM7QUFFQSxhQUFPO0lBQ1I7Ozs7OztJQU1BNjBCLGVBQWU7QUFDZCxXQUFLL0IsVUFBVSxDQUFBO0FBRWZ6NkIsUUFBRSxLQUFLNEUsT0FBTyxFQUFFMjFCLE9BQU8sUUFBUSxFQUFFdDRCLEtBQUssMEJBQTBCLEVBQUUwd0IsTUFBTTtBQUN4RSxhQUFPLEtBQUsvdEIsUUFBUTh4QixjQUFjLEdBQUc7QUFDcEMsYUFBSzl4QixRQUFRMEUsWUFBWSxLQUFLMUUsUUFBUXVKLFVBQVU7TUFDakQ7QUFDQSxhQUFPO0lBQ1I7Ozs7Ozs7Ozs7OztJQVlBd3VCLGNBQWNuNEIsTUFBTW80QixVQUFVQyxNQUFNO0FBQ25DLFlBQU1DLGVBQWU5OEIsRUFBRSxLQUFLNEUsT0FBTyxFQUFFMjFCLE9BQU8sUUFBUSxFQUFFdDRCLEtBQUssOEJBQThCO0FBQ3pGLFVBQUksS0FBS3U1QixnQkFBZ0I7QUFDeEIsY0FBTXVCLFNBQVNoN0IsU0FBUzBGLGNBQWMsTUFBTTtBQUM1Q3MxQixlQUFPM3VCLGNBQWM7QUFDckIsWUFBSXl1QixNQUFNO0FBQ1RDLHVCQUFhcFUsUUFBUXFVLE1BQU07UUFDNUIsT0FBTztBQUNORCx1QkFBYXAyQixPQUFPcTJCLE1BQU07UUFDM0I7TUFDRDtBQUNBLFlBQU1wTyxPQUFPNXNCLFNBQVMwRixjQUFjLEdBQUc7QUFDdkNrbkIsV0FBS2huQixhQUFhLFFBQVF4RyxHQUFHNkQsS0FBS0MsT0FBTzIzQixRQUFRLENBQUM7QUFDbERqTyxXQUFLaG5CLGFBQWEsU0FBU2kxQixRQUFRO0FBQ25Dak8sV0FBS2huQixhQUFhLFVBQVUsUUFBUTtBQUNwQ2duQixXQUFLaG5CLGFBQWEsT0FBTyxxQkFBcUI7QUFDOUNnbkIsV0FBS3ZnQixjQUFjNUo7QUFDbkIsVUFBSXE0QixNQUFNO0FBQ1RDLHFCQUFhcFUsUUFBUWlHLElBQUk7TUFDMUIsT0FBTztBQUNObU8scUJBQWFwMkIsT0FBT2lvQixJQUFJO01BQ3pCO0FBQ0EsV0FBSzZNLGlCQUFpQjtBQUN0QixhQUFPO0lBQ1I7Ozs7Ozs7Ozs7SUFVQXdCLFlBQVlDLE9BQU87QUFDbEJqOUIsUUFBRSxLQUFLNEUsT0FBTyxFQUFFMjFCLE9BQU8sVUFBVSxTQUFTMEMsS0FBSztBQUMvQyxhQUFPO0lBQ1I7RUFDRDtBQVlBaDlCLFdBQVNtNkIsYUFBYThDLG9CQUFxQkMsYUFBWTtBQUN0RCxVQUFNcjdCLFFBQVE5QixFQUFFLE1BQU07QUFDdEI4QixVQUFNRyxLQUFLLGlDQUFpQyxFQUFFdWUsS0FBSyxZQUFZLENBQUMyYyxPQUFPO0VBQ3hFO0FBQ0QsR0FBR0MsTUFBTTsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlN5bWJvbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZG9jdW1lbnQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiVHlwZUVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vcmViaXRzIiwgIiQiLCAiTW9yZWJpdHMiLCAid2luZG93IiwgImwxMG4iLCAicmVkaXJlY3RUYWdBbGlhc2VzIiwgInNpZ25hdHVyZVRpbWVzdGFtcEZvcm1hdCIsICJzdHIiLCAicmd4VVRDIiwgInJneENTVCIsICJtYXRjaCIsICJleGVjIiwgIm1hdGNoQ1NUIiwgIm1vbnRoIiwgImRhdGUiLCAibG9jYWxlRGF0YSIsICJtb250aHMiLCAiaW5kZXhPZiIsICJ1c2VySXNJbkdyb3VwIiwgImdyb3VwIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaW5jbHVkZXMiLCAidXNlcklzU3lzb3AiLCAic2FuaXRpemVJUHY2IiwgImFkZHJlc3MiLCAiY29uc29sZSIsICJ3YXJuIiwgImlwIiwgImlzUGFnZVJlZGlyZWN0IiwgIiRib2R5IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZmluZCIsICJsZW5ndGgiLCAicGFnZU5hbWVOb3JtIiwgInJlcGxhY2UiLCAicGFnZU5hbWVSZWdleCIsICJwYWdlTmFtZSIsICJmaXJzdENoYXIiLCAicmVtYWluZGVyIiwgInN0cmluZyIsICJlc2NhcGVSZWdFeHAiLCAic2xpY2UiLCAiVGl0bGUiLCAicGhwQ2hhclRvVXBwZXIiLCAidG9Mb3dlckNhc2UiLCAiY29uY2F0IiwgImNyZWF0ZUh0bWwiLCAiaW5wdXQiLCAiZnJhZ21lbnQiLCAiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsICJBcnJheSIsICJpc0FycmF5IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgIk5vZGUiLCAiYXBwZW5kQ2hpbGQiLCAiX2l0ZXJhdG9yMiIsICJwYXJzZUhUTUwiLCAicmVuZGVyV2lraWxpbmtzIiwgIl9zdGVwMiIsICJub2RlIiwgImVyciIsICJlIiwgImYiLCAidGV4dCIsICJ1YiIsICJ1bmJpbmRlciIsICJ1bmJpbmQiLCAiY29udGVudCIsICJfIiwgInRhcmdldCIsICJ0ZXh0XyIsICJ1dGlsIiwgImdldFVybCIsICJyZWJpbmQiLCAibmFtZXNwYWNlUmVnZXgiLCAibmFtZXNwYWNlcyIsICJhbGlhc2VzIiwgInJlZ2V4IiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJuYW1lIiwgIm51bWJlciIsICJwdXNoIiwgIm1hcCIsICJjaGFyIiwgImpvaW4iLCAicXVpY2tGb3JtIiwgImV2ZW50IiwgImV2ZW50VHlwZSIsICJyb290IiwgInR5cGUiLCAicHJvdG90eXBlIiwgInJlbmRlciIsICJyZXQiLCAibmFtZXMiLCAiYXBwZW5kIiwgImRhdGEiLCAiY2hpbGRzIiwgImlkIiwgImNoaWxkIiwgImludGVybmFsU3ViZ3JvdXBJZCIsICJjdXJyZW50Tm9kZSIsICJjb21wdXRlIiwgImkiLCAiaW5JZCIsICJjaGlsZENvbnRhaW5lciIsICJsYWJlbCIsICJhZG1pbm9ubHkiLCAiY3VycmVudCIsICJzdWJub2RlIiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInNldEF0dHJpYnV0ZSIsICJhZGRFdmVudExpc3RlbmVyIiwgInNlbGVjdCIsICJtdWx0aXBsZSIsICJzaXplIiwgImRpc2FibGVkIiwgImxpc3QiLCAidmFsdWVzIiwgInNlbGVjdGVkIiwgImhpZGRlbiIsICJjcmVhdGVUZXh0Tm9kZSIsICJjdXJJZCIsICJjdXJEaXYiLCAidG9vbHRpcCIsICJnZW5lcmF0ZVRvb2x0aXAiLCAiY2hlY2tlZCIsICJzdHlsZSIsICJzdWJncm91cCIsICJ0bXBncm91cCIsICJzdWJncm91cFJhdyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJlbCIsICJuZXdFbCIsICJzaG93biIsICJwYXJlbnROb2RlIiwgImZvcm0iLCAicmVtb3ZlQ2hpbGQiLCAic2hpZnRDbGlja1N1cHBvcnQiLCAiY2hlY2tib3hTaGlmdENsaWNrU3VwcG9ydCIsICJnZXRFbGVtZW50cyIsICJwbGFjZWhvbGRlciIsICJfaTIiLCAiX2FyciIsICJhdHQiLCAiX2kzIiwgIl9hcnIyIiwgIl9pNCIsICJfYXJyMyIsICJtaW4iLCAibWF4IiwgIk51bWJlciIsICJQT1NJVElWRV9JTkZJTklUWSIsICJsaXN0Tm9kZSIsICJtb3JlIiwgIm5ld05vZGUiLCAic3VibGlzdCIsICJhcmVhIiwgImNvdW50ZXIiLCAic3RvcFByb3BhZ2F0aW9uIiwgIm1vcmVCdXR0b24iLCAic3VibGFiZWwiLCAicmVtb3ZlIiwgIm1heGxlbmd0aCIsICJlbGVtIiwgIm1vcmVidXR0b24iLCAibGlzdG5vZGUiLCAibm9kZV8iLCAiaW5wdXRub2RlIiwgInJlbW92ZUF0dHJpYnV0ZSIsICJyZW1vdmVCdXR0b24iLCAicmVzdWx0IiwgImxhYmVsRWxlbWVudCIsICJjb2xzIiwgInJvd3MiLCAicmVxdWlyZWQiLCAicmVhZG9ubHkiLCAiRXJyb3IiLCAidG9TdHJpbmciLCAiZXh0cmEiLCAiJGRhdGEiLCAidG9vbHRpcEJ1dHRvbiIsICJ0aXRsZSIsICJwb3NpdGlvbiIsICJteSIsICJhdCIsICJjb2xsaXNpb24iLCAidG9vbHRpcENsYXNzIiwgImdldElucHV0RGF0YSIsICJfaXRlcmF0b3I0IiwgImVsZW1lbnRzIiwgIl9zdGVwNCIsICJmaWVsZCIsICJmaWVsZE5hbWVOb3JtIiwgImRhdGFzZXQiLCAic2luZ2xlIiwgInZhbCIsICJ0cmltIiwgImZpZWxkTmFtZSIsICIkZm9ybSIsICJlc2NhcGVTZWxlY3RvciIsICIkZWxlbWVudHMiLCAidG9BcnJheSIsICJnZXRDaGVja2JveE9yUmFkaW8iLCAiZWxlbWVudEFycmF5IiwgImZvdW5kIiwgImZpbHRlciIsICJnZXRFbGVtZW50Q29udGFpbmVyIiwgIkhUTUxGaWVsZFNldEVsZW1lbnQiLCAiSFRNTERpdkVsZW1lbnQiLCAiSFRNTEhlYWRpbmdFbGVtZW50IiwgImdldEVsZW1lbnRMYWJlbE9iamVjdCIsICJIVE1MVGV4dEFyZWFFbGVtZW50IiwgImdldEVsZW1lbnRMYWJlbCIsICJmaXJzdENoaWxkIiwgInRleHRDb250ZW50IiwgInNldEVsZW1lbnRMYWJlbCIsICJsYWJlbFRleHQiLCAib3ZlcnJpZGVFbGVtZW50TGFiZWwiLCAidGVtcG9yYXJ5TGFiZWxUZXh0IiwgImhhc0F0dHJpYnV0ZSIsICJyZXNldEVsZW1lbnRMYWJlbCIsICJnZXRBdHRyaWJ1dGUiLCAic2V0RWxlbWVudFZpc2liaWxpdHkiLCAidmlzaWJpbGl0eSIsICJ0b2dnbGUiLCAic2V0RWxlbWVudFRvb2x0aXBWaXNpYmlsaXR5IiwgIkhUTUxGb3JtRWxlbWVudCIsICJnZXRDaGVja2VkIiwgInJldHVybkFycmF5IiwgIkhUTUxTZWxlY3RFbGVtZW50IiwgIm9wdGlvbnMiLCAiSFRNTElucHV0RWxlbWVudCIsICJnZXRVbmNoZWNrZWQiLCAiaXNJUHY2QWRkcmVzcyIsICJ0b1VwcGVyQ2FzZSIsICJhYmJyZXZQb3MiLCAiQ0lEUlN0YXJ0IiwgImFkZHJlc3NFbmQiLCAicmVwZWF0IiwgInBhZCIsICJyZXBsYWNlbWVudCIsICJzcGxpdCIsICJpc1JhbmdlIiwgImlzSVBBZGRyZXNzIiwgInZhbGlkQ0lEUiIsICJzdWJuZXQiLCAicGFyc2VJbnQiLCAiZ2V0NjQiLCAiaXB2NiIsICJzdWJuZXRNYXRjaCIsICJpcFJlZ2V4IiwgInRvVXBwZXJDYXNlRmlyc3RDaGFyIiwgInRvTG93ZXJDYXNlRmlyc3RDaGFyIiwgInNwbGl0V2VpZ2h0ZWRCeUtleXMiLCAic3RhcnQiLCAiZW5kIiwgInNraXBsaXN0IiwgImxldmVsIiwgImluaXRpYWwiLCAiVHlwZUVycm9yIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImZvcm1hdFJlYXNvblRleHQiLCAiYWRkU2lnIiwgInJlYXNvbiIsICJzaWciLCAic2lnSW5kZXgiLCAibGFzdEluZGV4T2YiLCAiZm9ybWF0UmVhc29uRm9yTG9nIiwgInNhZmVSZXBsYWNlIiwgInBhdHRlcm4iLCAiaXNJbmZpbml0eSIsICJleHBpcnkiLCAiZm9ybWF0VGltZSIsICJ0aW1lIiwgIm0iLCAid2dVTFMiLCAiYXBwZW5kUHVuY3R1YXRpb24iLCAicHVuY3R1YXRpb24iLCAic2VhcmNoIiwgImFycmF5IiwgInVuaXEiLCAiYXJyIiwgIml0ZW0iLCAiaWR4IiwgImR1cHMiLCAiY2h1bmsiLCAibnVtQ2h1bmtzIiwgIk1hdGgiLCAiY2VpbCIsICJmcm9tIiwgInNlbGVjdDIiLCAibWF0Y2hlcnMiLCAib3B0Z3JvdXBGdWxsIiwgInBhcmFtcyIsICJvcmlnaW5hbE1hdGNoZXIiLCAiZm4iLCAiZGVmYXVsdHMiLCAibWF0Y2hlciIsICJ0ZXJtIiwgImNoaWxkcmVuIiwgIndvcmRCZWdpbm5pbmciLCAiUmVnRXhwIiwgInRlc3QiLCAiaGlnaGxpZ2h0U2VhcmNoTWF0Y2hlcyIsICJzZWFyY2hUZXJtIiwgInNlbGVjdDJTZWFyY2hRdWVyeSIsICJsb2FkaW5nIiwgImNzcyIsICJxdWVyeUludGVyY2VwdG9yIiwgImF1dG9TdGFydCIsICJldiIsICJ3aGljaCIsICJjbG9zZXN0IiwgInByZXYiLCAiZHJvcGRvd24iLCAiJHNlYXJjaCIsICJzZWxlY3Rpb24iLCAiZm9jdXMiLCAiaGlzdG9yeSIsICJwcmVmaXgiLCAicmFuZG9tIiwgInBvc3RmaXgiLCAicmUiLCAiZ2V0Q2FsbGJhY2siLCAiaGFzT3duIiwgInNlbGYiLCAiYXJncyIsICJwYXJhbSIsICJkaWdpdE1hdGNoIiwgIl9kIiwgIkRhdGUiLCAiUmVmbGVjdCIsICJhcHBseSIsICJVVEMiLCAiZGF0ZVBhcnRzIiwgIkZ1bmN0aW9uIiwgImJpbmQiLCAiaXNWYWxpZCIsICJsb2ciLCAibW9udGhzU2hvcnQiLCAiZGF5cyIsICJkYXlzU2hvcnQiLCAicmVsYXRpdmVUaW1lcyIsICJ0aGlzRGF5IiwgInByZXZEYXkiLCAibmV4dERheSIsICJ0aGlzV2VlayIsICJwYXN0V2VlayIsICJvdGhlciIsICJ1bml0TWFwIiwgInNlY29uZHMiLCAibWludXRlcyIsICJob3VycyIsICJ3ZWVrcyIsICJ5ZWFycyIsICJpc05hTiIsICJnZXRUaW1lIiwgImlzQmVmb3JlIiwgImlzQWZ0ZXIiLCAiZ2V0VVRDTW9udGhOYW1lIiwgImdldFVUQ01vbnRoIiwgImdldFVUQ01vbnRoTmFtZUFiYnJldiIsICJnZXRNb250aE5hbWUiLCAiZ2V0TW9udGgiLCAiZ2V0TW9udGhOYW1lQWJicmV2IiwgImdldFVUQ0RheU5hbWUiLCAiZ2V0VVRDRGF5IiwgImdldFVUQ0RheU5hbWVBYmJyZXYiLCAiZ2V0RGF5TmFtZSIsICJnZXREYXkiLCAiZ2V0RGF5TmFtZUFiYnJldiIsICJhZGQiLCAidW5pdCIsICJudW0iLCAidW5pdE5vcm0iLCAia2V5cyIsICJzdWJ0cmFjdCIsICJmb3JtYXQiLCAiZm9ybWF0c3RyIiwgInpvbmUiLCAidWRhdGUiLCAiZ2V0VGltZXpvbmVPZmZzZXQiLCAidG9JU09TdHJpbmciLCAibGVuIiwgImgyNCIsICJnZXRIb3VycyIsICJnZXRNaW51dGVzIiwgImdldFNlY29uZHMiLCAibXMiLCAiZ2V0TWlsbGlzZWNvbmRzIiwgIkQiLCAiZ2V0RGF0ZSIsICJNIiwgIlkiLCAiZ2V0RnVsbFllYXIiLCAiaDEyIiwgImFtT3JQbSIsICJyZXBsYWNlbWVudE1hcCIsICJISCIsICJIIiwgImhoIiwgImgiLCAiQSIsICJtbSIsICJzcyIsICJTU1MiLCAiZGRkZCIsICJkZGQiLCAiZCIsICJERCIsICJNTU1NIiwgIk1NTSIsICJNTSIsICJZWVlZIiwgIllZIiwgImNhbGVuZGFyIiwgImRhdGVEaWZmIiwgInNldEhvdXJzIiwgIm1vbnRoSGVhZGVyUmVnZXgiLCAiZ2V0VVRDRnVsbFllYXIiLCAibW9udGhIZWFkZXIiLCAiaGVhZGVyIiwgIl9pdGVyYXRvcjYiLCAiZ2V0T3duUHJvcGVydHlOYW1lcyIsICJfc3RlcDYiLCAiZnVuYyIsICJ3aWtpIiwgIm51bWJlck9mQWN0aW9uc0xlZnQiLCAibmJyT2ZDaGVja3BvaW50c0xlZnQiLCAiYWN0aW9uQ29tcGxldGVkIiwgIm5vdGljZSIsICJzdGF0dXMiLCAicmVkaXJlY3QiLCAiZm9sbG93UmVkaXJlY3QiLCAic2V0VGltZW91dCIsICJsb2NhdGlvbiIsICJ0aW1lT3V0IiwgIndwQWN0aW9uQ29tcGxldGVkVGltZU91dCIsICJhZGRDaGVja3BvaW50IiwgInJlbW92ZUNoZWNrcG9pbnQiLCAiYXBpIiwgImN1cnJlbnRBY3Rpb24iLCAicXVlcnkiLCAib25TdWNjZXNzIiwgInN0YXR1c0VsZW1lbnQiLCAib25FcnJvciIsICJfdGhpcyRxdWVyeSIsICJhc3NlcnQiLCAiZXJyb3Jmb3JtYXQiLCAidXNlbGFuZyIsICJlcnJvcmxhbmciLCAiZXJyb3JzdXNlbG9jYWwiLCAic2V0U3RhdHVzRWxlbWVudCIsICJzdGF0ZWxlbSIsICJmb3JtYXR2ZXJzaW9uIiwgImVycm9yIiwgImFjdGlvbiIsICJ0YWdzIiwgIm1vcmViaXRzV2lraUNoYW5nZVRhZyIsICJwYXJlbnQiLCAicmVzcG9uc2UiLCAicmVzcG9uc2VYTUwiLCAic3RhdHVzVGV4dCIsICJlcnJvckNvZGUiLCAiZXJyb3JUZXh0IiwgImJhZHRva2VuUmV0cnkiLCAic2V0UGFyZW50IiwgInBvc3QiLCAiY2FsbGVyQWpheFBhcmFtZXRlcnMiLCAiX3F1ZXJ5U3RyaW5nIiwgIl9pNSIsICJfT2JqZWN0JGVudHJpZXMyIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJxdWVyeVN0cmluZyIsICJhamF4cGFyYW1zIiwgImNvbnRleHQiLCAidXJsIiwgIndpa2lTY3JpcHQiLCAiZGF0YVR5cGUiLCAiaGVhZGVycyIsICJtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQiLCAiYWpheCIsICJ0aGVuIiwgIm9uQVBJc3VjY2VzcyIsICJlcnJvcnMiLCAiY29kZSIsICJodG1sIiwgImVxIiwgImF0dHIiLCAicmV0dXJuRXJyb3IiLCAiY2FsbCIsICJpbmZvIiwgIkRlZmVycmVkIiwgInJlc29sdmVXaXRoIiwgIm9uQVBJZmFpbHVyZSIsICJlcnJvclRocm93biIsICJnZXRUb2tlbiIsICJ0b2tlbiIsICJyZWplY3RXaXRoIiwgImdldFN0YXR1c0VsZW1lbnQiLCAiZ2V0RXJyb3JDb2RlIiwgImdldEVycm9yVGV4dCIsICJnZXRYTUwiLCAiZ2V0UmVzcG9uc2UiLCAiZ2V0Q2FjaGVkSnNvbiIsICJwcm9wIiwgInRpdGxlcyIsICJydnNsb3RzIiwgInJ2cHJvcCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJhcGlvYmoiLCAidW5saW5rIiwgIndpa2l0ZXh0IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgIkpTT04iLCAicGFyc2UiLCAic2V0QXBpVXNlckFnZW50IiwgInVhIiwgInRva2VuQXBpIiwgIm1ldGEiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJwYWdlIiwgImN0eCIsICJwYWdlRXhpc3RzIiwgImVkaXRTdW1tYXJ5IiwgImNoYW5nZVRhZ3MiLCAidGVzdEFjdGlvbnMiLCAiY2FsbGJhY2tQYXJhbWV0ZXJzIiwgInBhZ2VUZXh0IiwgImVkaXRNb2RlIiwgImFwcGVuZFRleHQiLCAicHJlcGVuZFRleHQiLCAibmV3U2VjdGlvblRleHQiLCAibmV3U2VjdGlvblRpdGxlIiwgImNyZWF0ZU9wdGlvbiIsICJtaW5vckVkaXQiLCAiYm90RWRpdCIsICJwYWdlU2VjdGlvbiIsICJtYXhDb25mbGljdFJldHJpZXMiLCAibWF4UmV0cmllcyIsICJmb2xsb3dDcm9zc05zUmVkaXJlY3QiLCAid2F0Y2hsaXN0T3B0aW9uIiwgIndhdGNobGlzdEV4cGlyeSIsICJjcmVhdG9yIiwgInRpbWVzdGFtcCIsICJyZXZlcnRPbGRJRCIsICJtb3ZlRGVzdGluYXRpb24iLCAibW92ZVRhbGtQYWdlIiwgIm1vdmVTdWJwYWdlcyIsICJtb3ZlU3VwcHJlc3NSZWRpcmVjdCIsICJwcm90ZWN0RWRpdCIsICJwcm90ZWN0TW92ZSIsICJwcm90ZWN0Q3JlYXRlIiwgInByb3RlY3RDYXNjYWRlIiwgImxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciIsICJwYWdlTG9hZGVkIiwgImNzcmZUb2tlbiIsICJsb2FkVGltZSIsICJsYXN0RWRpdFRpbWUiLCAicGFnZUlEIiwgImNvbnRlbnRNb2RlbCIsICJyZXZlcnRDdXJJRCIsICJyZXZlcnRVc2VyIiwgIndhdGNoZWQiLCAiZnVsbHlQcm90ZWN0ZWQiLCAic3VwcHJlc3NQcm90ZWN0V2FybmluZyIsICJjb25mbGljdFJldHJpZXMiLCAicmV0cmllcyIsICJvbkxvYWRTdWNjZXNzIiwgIm9uTG9hZEZhaWx1cmUiLCAib25TYXZlU3VjY2VzcyIsICJvblNhdmVGYWlsdXJlIiwgIm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzIiwgIm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlIiwgIm9uTW92ZVN1Y2Nlc3MiLCAib25Nb3ZlRmFpbHVyZSIsICJvbkRlbGV0ZVN1Y2Nlc3MiLCAib25EZWxldGVGYWlsdXJlIiwgIm9uVW5kZWxldGVTdWNjZXNzIiwgIm9uVW5kZWxldGVGYWlsdXJlIiwgIm9uUHJvdGVjdFN1Y2Nlc3MiLCAib25Qcm90ZWN0RmFpbHVyZSIsICJsb2FkUXVlcnkiLCAibG9hZEFwaSIsICJzYXZlQXBpIiwgImxvb2t1cENyZWF0aW9uQXBpIiwgIm1vdmVBcGkiLCAibW92ZVByb2Nlc3NBcGkiLCAicGF0cm9sQXBpIiwgInBhdHJvbFByb2Nlc3NBcGkiLCAiZGVsZXRlQXBpIiwgImRlbGV0ZVByb2Nlc3NBcGkiLCAidW5kZWxldGVBcGkiLCAidW5kZWxldGVQcm9jZXNzQXBpIiwgInByb3RlY3RBcGkiLCAicHJvdGVjdFByb2Nlc3NBcGkiLCAiZW1wdHlGdW5jdGlvbiIsICJsb2FkIiwgIm9uRmFpbHVyZSIsICJpbnByb3AiLCAiaW50ZXN0YWN0aW9ucyIsICJjdXJ0aW1lc3RhbXAiLCAicnZsaW1pdCIsICJydnN0YXJ0aWQiLCAicmVkaXJlY3RzIiwgInJ2c2VjdGlvbiIsICJmbkxvYWRTdWNjZXNzIiwgInNhdmUiLCAiY2FuVXNlTXdVc2VyVG9rZW4iLCAiZm5DYW5Vc2VNd1VzZXJUb2tlbiIsICJjb25maXJtIiwgInN1bW1hcnkiLCAidXNlciIsICJ3YXRjaGxpc3QiLCAiZm5BcHBseVdhdGNobGlzdEV4cGlyeSIsICJ3YXRjaGxpc3RleHBpcnkiLCAic2VjdGlvbiIsICJtaW5vciIsICJub3RtaW5vciIsICJib3QiLCAiYXBwZW5kdGV4dCIsICJwcmVwZW5kdGV4dCIsICJzZWN0aW9udGl0bGUiLCAidW5kbyIsICJ1bmRvYWZ0ZXIiLCAiYmFzZXRpbWVzdGFtcCIsICJzdGFydHRpbWVzdGFtcCIsICJmblNhdmVTdWNjZXNzIiwgImZuU2F2ZUVycm9yIiwgImZuQXV0b1NhdmUiLCAicHJlcGVuZCIsICJuZXdTZWN0aW9uIiwgImdldFBhZ2VOYW1lIiwgImdldFBhZ2VUZXh0IiwgInNldFBhZ2VUZXh0IiwgInNldEFwcGVuZFRleHQiLCAic2V0UHJlcGVuZFRleHQiLCAic2V0TmV3U2VjdGlvblRleHQiLCAic2V0TmV3U2VjdGlvblRpdGxlIiwgInNldEVkaXRTdW1tYXJ5IiwgInNldENoYW5nZVRhZ3MiLCAic2V0Q3JlYXRlT3B0aW9uIiwgInNldE1pbm9yRWRpdCIsICJzZXRCb3RFZGl0IiwgInNldFBhZ2VTZWN0aW9uIiwgInNldE1heENvbmZsaWN0UmV0cmllcyIsICJzZXRNYXhSZXRyaWVzIiwgInNldFdhdGNobGlzdCIsICJzZXRXYXRjaGxpc3RFeHBpcnkiLCAic2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzIiwgInNldEZvbGxvd1JlZGlyZWN0IiwgInNldExvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciIsICJmbGFnIiwgInNldE1vdmVEZXN0aW5hdGlvbiIsICJkZXN0aW5hdGlvbiIsICJzZXRNb3ZlVGFsa1BhZ2UiLCAic2V0TW92ZVN1YnBhZ2VzIiwgInNldE1vdmVTdXBwcmVzc1JlZGlyZWN0IiwgInNldEVkaXRQcm90ZWN0aW9uIiwgInNldE1vdmVQcm90ZWN0aW9uIiwgInNldENyZWF0ZVByb3RlY3Rpb24iLCAic2V0Q2FzY2FkaW5nUHJvdGVjdGlvbiIsICJzZXRPbGRJRCIsICJvbGRJRCIsICJnZXRDdXJyZW50SUQiLCAiZ2V0UmV2aXNpb25Vc2VyIiwgImdldExhc3RFZGl0VGltZSIsICJzZXRDYWxsYmFja1BhcmFtZXRlcnMiLCAiZ2V0Q2FsbGJhY2tQYXJhbWV0ZXJzIiwgImV4aXN0cyIsICJnZXRQYWdlSUQiLCAiZ2V0Q29udGVudE1vZGVsIiwgImdldFdhdGNoZWQiLCAiZ2V0TG9hZFRpbWUiLCAiZ2V0Q3JlYXRvciIsICJnZXRDcmVhdGlvblRpbWVzdGFtcCIsICJjYW5FZGl0IiwgImxvb2t1cENyZWF0aW9uIiwgInJ2ZGlyIiwgImZuTG9va3VwQ3JlYXRpb25TdWNjZXNzIiwgInJldmVydCIsICJtb3ZlIiwgImZuUHJlZmxpZ2h0Q2hlY2tzIiwgImZuUHJvY2Vzc01vdmUiLCAiZm5OZWVkVG9rZW5JbmZvUXVlcnkiLCAicGF0cm9sIiwgInBhdHJvbGhyZWYiLCAicmNpZCIsICJnZXRQYXJhbVZhbHVlIiwgImZuUHJvY2Vzc1BhdHJvbCIsICJwYXRyb2xRdWVyeSIsICJyY3Byb3AiLCAicmN0aXRsZSIsICJyY2xpbWl0IiwgImRlbGV0ZVBhZ2UiLCAiZm5Qcm9jZXNzRGVsZXRlIiwgInVuZGVsZXRlUGFnZSIsICJmblByb2Nlc3NVbmRlbGV0ZSIsICJwcm90ZWN0IiwgImZuUHJvY2Vzc1Byb3RlY3QiLCAiZ2V0UHJlZml4ZWRUZXh0IiwgImVkaXRSZXN0cmljdGlvbiIsICJwYWdlb2JqIiwgImZuQ2hlY2tQYWdlTmFtZSIsICJyZXYiLCAibWlzc2luZyIsICJwYWdlaWQiLCAiY29udGVudG1vZGVsIiwgImVkaXRQcm90IiwgInByb3RlY3Rpb24iLCAicHIiLCAicG9wIiwgImxhc3RyZXZpZCIsICJ0ZXN0YWN0aW9ucyIsICJhY3Rpb25zIiwgIl9pNiIsICJfT2JqZWN0JGtleXMiLCAicmV2aWQiLCAidXNlcmhpZGRlbiIsICJpbnZhbGlkIiwgInJlc29sdmVkTmFtZSIsICJvcmlnTnMiLCAibmFtZXNwYWNlIiwgIm5ld05zIiwgIm5ld0V4cGlyeSIsICJyZWwiLCAiZWRpdCIsICJsaW5rIiwgImNhcHRjaGEiLCAicHVyZ2VRdWVyeSIsICJwdXJnZUFwaSIsICJzbGVlcCIsICJlcnJvckRhdGEiLCAiYWJ1c2VmaWx0ZXIiLCAiZGVzY3JpcHRpb24iLCAic3BhbSIsICJzcGFtYmxhY2tsaXN0IiwgIm1hdGNoZXMiLCAiaXNUZXh0UmVkaXJlY3QiLCAic29tZSIsICJ0YWciLCAiZm5Mb29rdXBOb25SZWRpcmVjdENyZWF0b3IiLCAicmV2cyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJmblByb2Nlc3NDaGVja3MiLCAiYWN0aW9uTWlzc2luZyIsICJwcm90ZWN0TWlzc2luZyIsICJzYWx0TWlzc2luZyIsICJlZGl0cHJvdCIsICJwYWdlVGl0bGUiLCAidG8iLCAibW92ZXRhbGsiLCAibW92ZXN1YnBhZ2VzIiwgIm5vcmVkaXJlY3QiLCAicmVjZW50Y2hhbmdlcyIsICJ1bnBhdHJvbGxlZCIsICJwYXRyb2xTdGF0IiwgImZuUHJvY2Vzc0RlbGV0ZUVycm9yIiwgImZuUHJvY2Vzc1VuZGVsZXRlRXJyb3IiLCAicHJzIiwgIm1vdmVwcm90IiwgImNyZWF0ZXByb3QiLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAic291cmNlIiwgImNhc2NhZGUiLCAicHJvdGVjdGlvbnMiLCAiZXhwaXJ5cyIsICJtaWxsaXNlY29uZHMiLCAiZGVmZXJyZWQiLCAicmVzb2x2ZSIsICJwcmV2aWV3IiwgInByZXZpZXdib3giLCAiYWRkQ2xhc3MiLCAiaGlkZSIsICJiZWdpblJlbmRlciIsICJzZWN0aW9uVGl0bGUiLCAic2hvdyIsICJzdGF0dXNzcGFuIiwgImluaXQiLCAicHN0IiwgImRpc2FibGVsaW1pdHJlcG9ydCIsICJkaXNhYmxlZWRpdHNlY3Rpb24iLCAicmVuZGVyQXBpIiwgImZuUmVuZGVyU3VjY2VzcyIsICJpbm5lckhUTUwiLCAibG9hZGVyIiwgIm1vZHVsZXN0eWxlcyIsICJtb2R1bGVzIiwgImNsb3NlUHJldmlldyIsICJlbXB0eSIsICJwYXJzZVRlbXBsYXRlIiwgImNvdW50IiwgInVubmFtZWQiLCAiZXF1YWxzIiwgInBhcmFtZXRlcnMiLCAia2V5IiwgImZpbmRQYXJhbSIsICJmaW5hbCIsICJ0ZXN0MyIsICJ0ZXN0MiIsICJjaGFyQXQiLCAicmVtb3ZlTGluayIsICJsaW5rVGFyZ2V0IiwgIm13VGl0bGUiLCAibmV3RnJvbVRleHQiLCAibmFtZXNwYWNlSUQiLCAiZ2V0TmFtZXNwYWNlSWQiLCAiZ2V0TWFpblRleHQiLCAibGlua1JlZ2V4U3RyaW5nIiwgImlzRmlsZU9yQ2F0ZWdvcnkiLCAiY29sb24iLCAic2ltcGxlTGlua1JlZ2V4IiwgInBpcGVkTGlua1JlZ2V4IiwgImNvbW1lbnRPdXRJbWFnZSIsICJpbWFnZSIsICJpbWFnZVJlZ2V4U3RyaW5nIiwgImxpbmtzUmVnZXgiLCAiYWxsTGlua3MiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAiYWxsTGluayIsICJnYWxsZXJ5SW1hZ2VSZWdleCIsICJmcmVlSW1hZ2VSZWdleCIsICJhZGRUb0ltYWdlQ29tbWVudCIsICJfaXRlcmF0b3IxMCIsICJfc3RlcDEwIiwgImdhbGxlcnlSZWdleCIsICJuZXd0ZXh0IiwgInJlbW92ZVRlbXBsYXRlIiwgInRlbXBsYXRlIiwgInRlbXBsYXRlUmVnZXhTdHJpbmciLCAiYWxsVGVtcGxhdGVzIiwgIl9pdGVyYXRvcjExIiwgIl9zdGVwMTEiLCAiYWxsVGVtcGxhdGUiLCAiaW5zZXJ0QWZ0ZXJUZW1wbGF0ZXMiLCAiZmxhZ3MiLCAicHJlUmVnZXgiLCAiZ2V0VGV4dCIsICJ1c2Vyc3BhY2VMb2dnZXIiLCAibG9nUGFnZU5hbWUiLCAiaW5pdGlhbFRleHQiLCAiaGVhZGVyTGV2ZWwiLCAibG9nVGV4dCIsICJzdW1tYXJ5VGV4dCIsICJkZWYiLCAicmVqZWN0IiwgInN0YXQiLCAidGV4dFJhdyIsICJnZW5lcmF0ZSIsICJ1cGRhdGUiLCAiRWxlbWVudCIsICJoYXNDaGlsZE5vZGVzIiwgImVycm9yRXZlbnQiLCAiaGFuZGxlciIsICJzdGF0UmF3IiwgImxpbmtlZCIsICJwcmludFVzZXJUZXh0IiwgImNvbW1lbnRzIiwgIm1lc3NhZ2UiLCAicCIsICJkaXYiLCAibWFyZ2luVG9wIiwgIndoaXRlU3BhY2UiLCAiaHRtbE5vZGUiLCAiY29sb3IiLCAialF1ZXJ5U2VsZWN0b3IiLCAialF1ZXJ5Q29udGV4dCIsICJsYXN0Q2hlY2tib3giLCAiY2xpY2tIYW5kbGVyIiwgImNsaWNrSGFuZGxlcjIiLCAidGhpc0NiIiwgInNoaWZ0S2V5IiwgImNicyIsICJpbmRleCIsICJsYXN0SW5kZXgiLCAiZW5kU3RhdGUiLCAiZmluaXNoIiwgImNsaWNrIiwgIm9uIiwgImJhdGNoT3BlcmF0aW9uIiwgInBhZ2VMaXN0IiwgImNodW5rU2l6ZSIsICJwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcyIsICJ3b3JrZXIiLCAicG9zdEZpbmlzaCIsICJjb3VudFN0YXJ0ZWQiLCAiY291bnRGaW5pc2hlZCIsICJjb3VudEZpbmlzaGVkU3VjY2VzcyIsICJjdXJyZW50Q2h1bmtJbmRleCIsICJwYWdlQ2h1bmtzIiwgInJ1bm5pbmciLCAic2V0UGFnZUxpc3QiLCAic2V0T3B0aW9uIiwgIm9wdGlvbk5hbWUiLCAib3B0aW9uVmFsdWUiLCAicnVuIiwgInRvdGFsIiwgImZuU3RhcnROZXdDaHVuayIsICJ3b3JrZXJTdWNjZXNzIiwgImFyZyIsICJmbkRvbmVPbmUiLCAid29ya2VyRmFpbHVyZSIsICJ0aGlzUHJveHkiLCAiX2l0ZXJhdG9yMTIiLCAiX3N0ZXAxMiIsICJwcm9ncmVzcyIsICJyb3VuZCIsICJmbG9vciIsICJzdGF0dXNTdHJpbmciLCAic2ltcGxlV2luZG93IiwgIndpZHRoIiwgImhlaWdodCIsICJkaWFsb2ciLCAiYXV0b09wZW4iLCAiYnV0dG9ucyIsICJQbGFjZWhvbGRlciBidXR0b24iLCAiZGlhbG9nQ2xhc3MiLCAiaW5uZXJXaWR0aCIsICJjbG9zZSIsICJyZXNpemVTdGFydCIsICJzY3JvbGxib3giLCAibWF4SGVpZ2h0IiwgInJlc2l6ZVN0b3AiLCAicmVzaXplIiwgIiR3aWRnZXQiLCAiZWFjaCIsICJidXR0b25zcGFuIiwgImxpbmtzc3BhbiIsICJyZXNpemFibGUiLCAiaGFzRm9vdGVyTGlua3MiLCAic2NyaXB0TmFtZSIsICJwcmV2ZW50RGVmYXVsdCIsICJkaXNwbGF5IiwgInNjcmlwdG5hbWVzcGFuIiwgInNldHVwVG9vbHRpcHMiLCAicGciLCAiZGlmZiIsICJyYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSIsICJzZXRIZWlnaHQiLCAic2V0VGl0bGUiLCAic2V0U2NyaXB0TmFtZSIsICJzZXRXaWR0aCIsICJnZXRDb21wdXRlZFN0eWxlIiwgImlubmVySGVpZ2h0IiwgInNldENvbnRlbnQiLCAicHVyZ2VDb250ZW50IiwgImFkZENvbnRlbnQiLCAiYnV0dG9uIiwgImFkZEZvb3RlckxpbmsiLCAid2lraVBhZ2UiLCAicHJlcCIsICIkZm9vdGVybGlua3MiLCAiYnVsbGV0IiwgInNldE1vZGFsaXR5IiwgIm1vZGFsIiwgInNldEJ1dHRvbnNFbmFibGVkIiwgImVuYWJsZWQiLCAialF1ZXJ5Il0KfQo=
