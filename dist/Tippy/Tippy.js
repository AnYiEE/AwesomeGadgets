/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT}}'
 *
 * @base {@link https://github.com/atomiks/tippyjs}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Tippy}
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/global.js"(exports2, module2) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module2.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports2 == "object" && exports2) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/fails.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/descriptors.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-bind-native.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-call.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-property-is-enumerable.js"(exports2) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports2.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/create-property-descriptor.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-uncurry-this.js"(exports2, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var call = FunctionPrototype.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module2.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn2) {
      return function() {
        return call.apply(fn2, arguments);
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/classof-raw.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/indexed-object.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-null-or-undefined.js"(exports2, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/require-object-coercible.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-indexed-object.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-callable.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-object.js"(exports2, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/get-built-in.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-is-prototype-of.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/engine-user-agent.js"(exports2, module2) {
    "use strict";
    module2.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/engine-v8-version.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/symbol-constructor-detection.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/use-symbol-as-uid.js"(exports2, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-symbol.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/try-to-string.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/a-callable.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/get-method.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/ordinary-to-primitive.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn2, val;
      if (pref === "string" && isCallable(fn2 = input.toString) && !isObject(val = call(fn2, input))) return val;
      if (isCallable(fn2 = input.valueOf) && !isObject(val = call(fn2, input))) return val;
      if (pref !== "string" && isCallable(fn2 = input.toString) && !isObject(val = call(fn2, input))) return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-pure.js"(exports2, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/define-global-property.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared-store.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared.js"(exports2, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-object.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/has-own-property.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/uid.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/well-known-symbol.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-primitive.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-property-key.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/document-create-element.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/ie8-dom-define.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports2) {
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
    exports2.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/an-object.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-define-property.js"(exports2) {
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
    exports2.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/create-non-enumerable-property.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-name.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/inspect-source.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/weak-map-basic-detection.js"(exports2, module2) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var WeakMap = global2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared-key.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/hidden-keys.js"(exports2, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/internal-state.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/make-built-in.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/define-built-in.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/math-trunc.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-integer-or-infinity.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-absolute-index.js"(exports2, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var max2 = Math.max;
    var min2 = Math.min;
    module2.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max2(integer + length, 0) : min2(integer, length);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-length.js"(exports2, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min2 = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min2(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/length-of-array-like.js"(exports2, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/array-includes.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-keys-internal.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/enum-bug-keys.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-names.js"(exports2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports2) {
    "use strict";
    exports2.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/own-keys.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/copy-constructor-properties.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-forced.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/export.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-array.js"(exports2, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/array-set-length.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports2, module2) {
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

// dist/Tippy/Tippy.js
require_es_array_push();
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames2(from)), _step;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/Tippy/Tippy.ts
var Tippy_exports = {};
__export(Tippy_exports, {
  tippy: () => tippy_esm_default
});
module.exports = __toCommonJS(Tippy_exports);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect5 = _ref.effect;
        if (typeof effect5 === "function") {
          var cleanupFn = effect5({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO2() {
  return document.body;
};
function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }
  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === "function" ? value.apply(void 0, args) : value;
}
function debounce2(fn2, ms) {
  if (ms === 0) {
    return fn2;
  }
  var timeout;
  return function(arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn2(arg);
    }, ms);
  };
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
}
function getBasePlacement2(placement) {
  return placement.split("-")[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (obj[key] !== void 0) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
function div() {
  return document.createElement("div");
}
function isElement2(value) {
  return ["Element", "Fragment"].some(function(type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, "NodeList");
}
function isMouseEvent(value) {
  return isType(value, "MouseEvent");
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement2(value)) {
    return [value];
  }
  if (isNodeList(value)) {
    return arrayFrom(value);
  }
  if (Array.isArray(value)) {
    return value;
  }
  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function(el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function(el) {
    if (el) {
      el.setAttribute("data-state", state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;
  var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
  return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX, clientY = event.clientY;
  return popperTreeData.every(function(_ref) {
    var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement2(popperState.placement);
    var offsetData = popperState.modifiersData.offset;
    if (!offsetData) {
      return true;
    }
    var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
    var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
    box[method](event, listener);
  });
}
function actualContains(parent, child) {
  var target = child;
  while (target) {
    var _target$getRootNode;
    if (parent.contains(target)) {
      return true;
    }
    target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
  }
  return false;
}
var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }
  currentInput.isTouch = true;
  if (window.performance) {
    document.addEventListener("mousemove", onDocumentMouseMove);
  }
}
function onDocumentMouseMove() {
  var now = performance.now();
  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener("mousemove", onDocumentMouseMove);
  }
  lastMouseMoveTime = now;
}
function onWindowBlur() {
  var activeElement = document.activeElement;
  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;
    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener("blur", onWindowBlur);
}
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
var isIE11 = isBrowser ? (
  // @ts-ignore
  !!window.msCrypto
) : false;
if (false) {
  resetVisitedMessages();
}
var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: "fade",
  arrow: true,
  content: "",
  inertia: false,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {
  },
  onBeforeUpdate: function onBeforeUpdate() {
  },
  onCreate: function onCreate() {
  },
  onDestroy: function onDestroy() {
  },
  onHidden: function onHidden() {
  },
  onHide: function onHide() {
  },
  onMount: function onMount() {
  },
  onShow: function onShow() {
  },
  onShown: function onShown() {
  },
  onTrigger: function onTrigger() {
  },
  onUntrigger: function onUntrigger() {
  },
  onClickOutside: function onClickOutside() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: "mouseenter focus",
  triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps2(partialProps) {
  if (false) {
    validateProps(partialProps, []);
  }
  var keys = Object.keys(partialProps);
  keys.forEach(function(key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps2 = plugins.reduce(function(acc, plugin) {
    var name = plugin.name, defaultValue = plugin.defaultValue;
    if (name) {
      var _name;
      acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }
    return acc;
  }, {});
  return Object.assign({}, passedProps, pluginProps2);
}
function getDataAttributeProps(reference2, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function(acc, key) {
    var valueAsString = (reference2.getAttribute("data-tippy-" + key) || "").trim();
    if (!valueAsString) {
      return acc;
    }
    if (key === "content") {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }
    return acc;
  }, {});
  return props;
}
function evaluateProps(reference2, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference2])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference2, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, out.aria);
  out.aria = {
    expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
    content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
  };
  return out;
}
var innerHTML = function innerHTML2() {
  return "innerHTML";
};
function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}
function createArrowElement(value) {
  var arrow2 = div();
  if (value === true) {
    arrow2.className = ARROW_CLASS;
  } else {
    arrow2.className = SVG_ARROW_CLASS;
    if (isElement2(value)) {
      arrow2.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow2, value);
    }
  }
  return arrow2;
}
function setContent(content, props) {
  if (isElement2(props.content)) {
    dangerouslySetInnerHTML(content, "");
    content.appendChild(props.content);
  } else if (typeof props.content !== "function") {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper2) {
  var box = popper2.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box,
    content: boxChildren.find(function(node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function(node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function(node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper2 = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute("data-state", "hidden");
  box.setAttribute("tabindex", "-1");
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute("data-state", "hidden");
  setContent(content, instance.props);
  popper2.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);
  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper2), box2 = _getChildren.box, content2 = _getChildren.content, arrow2 = _getChildren.arrow;
    if (nextProps.theme) {
      box2.setAttribute("data-theme", nextProps.theme);
    } else {
      box2.removeAttribute("data-theme");
    }
    if (typeof nextProps.animation === "string") {
      box2.setAttribute("data-animation", nextProps.animation);
    } else {
      box2.removeAttribute("data-animation");
    }
    if (nextProps.inertia) {
      box2.setAttribute("data-inertia", "");
    } else {
      box2.removeAttribute("data-inertia");
    }
    box2.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
    if (nextProps.role) {
      box2.setAttribute("role", nextProps.role);
    } else {
      box2.removeAttribute("role");
    }
    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content2, instance.props);
    }
    if (nextProps.arrow) {
      if (!arrow2) {
        box2.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box2.removeChild(arrow2);
        box2.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow2) {
      box2.removeChild(arrow2);
    }
  }
  return {
    popper: popper2,
    onUpdate
  };
}
render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = [];
var mountedInstances = [];
function createTippy(reference2, passedProps) {
  var props = evaluateProps(reference2, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce2(onMouseMove, props.interactiveDebounce);
  var currentTarget;
  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id,
    reference: reference2,
    popper: div(),
    popperInstance,
    props,
    state,
    plugins,
    // methods
    clearDelayTimeouts,
    setProps,
    setContent: setContent2,
    show,
    hide: hide2,
    hideWithInteractivity,
    enable,
    disable,
    unmount,
    destroy
  };
  if (!props.render) {
    if (false) {
      errorWhen(true, "render() function has not been supplied.");
    }
    return instance;
  }
  var _props$render = props.render(instance), popper2 = _props$render.popper, onUpdate = _props$render.onUpdate;
  popper2.setAttribute("data-tippy-root", "");
  popper2.id = "tippy-" + instance.id;
  instance.popper = popper2;
  reference2._tippy = instance;
  popper2._tippy = instance;
  var pluginsHooks = plugins.map(function(plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference2.hasAttribute("aria-expanded");
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook("onCreate", [instance]);
  if (props.showOnCreate) {
    scheduleShow();
  }
  popper2.addEventListener("mouseenter", function() {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper2.addEventListener("mouseleave", function() {
    if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) {
      getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    }
  });
  return instance;
  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }
  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === "hold";
  }
  function getIsDefaultRenderFn() {
    var _instance$props$rende;
    return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
  }
  function getCurrentTarget() {
    return currentTarget || reference2;
  }
  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }
  function getDefaultTemplateChildren() {
    return getChildren(popper2);
  }
  function getDelay(isShow) {
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") {
      return 0;
    }
    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }
  function handleStyles(fromHide) {
    if (fromHide === void 0) {
      fromHide = false;
    }
    popper2.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
    popper2.style.zIndex = "" + instance.props.zIndex;
  }
  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }
    pluginsHooks.forEach(function(pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });
    if (shouldInvokePropsHook) {
      var _instance$props;
      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }
  function handleAriaContentAttribute() {
    var aria = instance.props.aria;
    if (!aria.content) {
      return;
    }
    var attr = "aria-" + aria.content;
    var id2 = popper2.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      var currentValue = node.getAttribute(attr);
      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id2 : id2);
      } else {
        var nextValue = currentValue && currentValue.replace(id2, "").trim();
        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }
  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      if (instance.props.interactive) {
        node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false");
      } else {
        node.removeAttribute("aria-expanded");
      }
    });
  }
  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
      return listener !== debouncedOnMouseMove;
    });
  }
  function onDocumentPress(event) {
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === "mousedown") {
        return;
      }
    }
    var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
    if (instance.props.interactive && actualContains(popper2, actualTarget)) {
      return;
    }
    if (normalizeToArray(instance.props.triggerTarget || reference2).some(function(el) {
      return actualContains(el, actualTarget);
    })) {
      if (currentInput.isTouch) {
        return;
      }
      if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) {
        return;
      }
    } else {
      invokeHook("onClickOutside", [instance, event]);
    }
    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide();
      didHideDueToDocumentMouseDown = true;
      setTimeout(function() {
        didHideDueToDocumentMouseDown = false;
      });
      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }
  function onTouchMove() {
    didTouchMove = true;
  }
  function onTouchStart() {
    didTouchMove = false;
  }
  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener("mousedown", onDocumentPress, true);
    doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener("mousedown", onDocumentPress, true);
    doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function() {
      if (!instance.state.isVisible && popper2.parentNode && popper2.parentNode.contains(popper2)) {
        callback();
      }
    });
  }
  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }
  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;
    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, "remove", listener);
        callback();
      }
    }
    if (duration === 0) {
      return callback();
    }
    updateTransitionEndListener(box, "remove", currentTransitionEndListener);
    updateTransitionEndListener(box, "add", listener);
    currentTransitionEndListener = listener;
  }
  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node,
        eventType,
        handler,
        options
      });
    });
  }
  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on("touchstart", onTrigger2, {
        passive: true
      });
      on("touchend", onMouseLeave, {
        passive: true
      });
    }
    splitBySpaces(instance.props.trigger).forEach(function(eventType) {
      if (eventType === "manual") {
        return;
      }
      on(eventType, onTrigger2);
      switch (eventType) {
        case "mouseenter":
          on("mouseleave", onMouseLeave);
          break;
        case "focus":
          on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
          break;
        case "focusin":
          on("focusout", onBlurOrFocusOut);
          break;
      }
    });
  }
  function removeListeners() {
    listeners.forEach(function(_ref) {
      var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  function onTrigger2(event) {
    var _lastTriggerEvent;
    var shouldScheduleClickHide = false;
    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }
    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();
    if (!instance.state.isVisible && isMouseEvent(event)) {
      mouseMoveListeners.forEach(function(listener) {
        return listener(event);
      });
    }
    if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }
    if (event.type === "click") {
      isVisibleFromClick = !shouldScheduleClickHide;
    }
    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }
  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper2.contains(target);
    if (event.type === "mousemove" && isCursorOverReferenceOrPopper) {
      return;
    }
    var popperTreeData = getNestedPopperTree().concat(popper2).map(function(popper3) {
      var _instance$popperInsta;
      var instance2 = popper3._tippy;
      var state2 = (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.state;
      if (state2) {
        return {
          popperRect: popper3.getBoundingClientRect(),
          popperState: state2,
          props
        };
      }
      return null;
    }).filter(Boolean);
    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }
  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
    if (shouldBail) {
      return;
    }
    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }
    scheduleHide(event);
  }
  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) {
      return;
    }
    if (instance.props.interactive && event.relatedTarget && popper2.contains(event.relatedTarget)) {
      return;
    }
    scheduleHide(event);
  }
  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
  }
  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset2 = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
    var arrow2 = getIsDefaultRenderFn() ? getChildren(popper2).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference2;
    var tippyModifier = {
      name: "$$tippy",
      enabled: true,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function fn2(_ref2) {
        var state2 = _ref2.state;
        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(attr) {
            if (attr === "placement") {
              box.setAttribute("data-placement", state2.placement);
            } else {
              if (state2.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, "");
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state2.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: "offset",
      options: {
        offset: offset2
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];
    if (getIsDefaultRenderFn() && arrow2) {
      modifiers.push({
        name: "arrow",
        options: {
          element: arrow2,
          padding: 3
        }
      });
    }
    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = createPopper(computedReference, popper2, Object.assign({}, popperOptions, {
      placement,
      onFirstUpdate,
      modifiers
    }));
  }
  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }
  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode;
    var node = getCurrentTarget();
    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    }
    if (!parentNode.contains(popper2)) {
      parentNode.appendChild(popper2);
    }
    instance.state.isMounted = true;
    createPopperInstance();
    if (false) {
      warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper2, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", "\n\n", "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", "\n\n", "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", "\n\n", "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
    }
  }
  function getNestedPopperTree() {
    return arrayFrom(popper2.querySelectorAll("[data-tippy-root]"));
  }
  function scheduleShow(event) {
    instance.clearDelayTimeouts();
    if (event) {
      invokeHook("onTrigger", [instance, event]);
    }
    addDocumentPress();
    var delay = getDelay(true);
    var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
    if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
      delay = touchDelay;
    }
    if (delay) {
      showTimeout = setTimeout(function() {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }
  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook("onUntrigger", [instance, event]);
    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    }
    if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }
    var delay = getDelay(false);
    if (delay) {
      hideTimeout = setTimeout(function() {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      scheduleHideAnimationFrame = requestAnimationFrame(function() {
        instance.hide();
      });
    }
  }
  function enable() {
    instance.state.isEnabled = true;
  }
  function disable() {
    instance.hide();
    instance.state.isEnabled = false;
  }
  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }
  function setProps(partialProps) {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("setProps"));
    }
    if (instance.state.isDestroyed) {
      return;
    }
    invokeHook("onBeforeUpdate", [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference2, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();
    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce2(onMouseMove, nextProps.interactiveDebounce);
    }
    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
        node.removeAttribute("aria-expanded");
      });
    } else if (nextProps.triggerTarget) {
      reference2.removeAttribute("aria-expanded");
    }
    handleAriaExpandedAttribute();
    handleStyles();
    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }
    if (instance.popperInstance) {
      createPopperInstance();
      getNestedPopperTree().forEach(function(nestedPopper) {
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }
    invokeHook("onAfterUpdate", [instance, partialProps]);
  }
  function setContent2(content) {
    instance.setProps({
      content
    });
  }
  function show() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("show"));
    }
    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    }
    if (getCurrentTarget().hasAttribute("disabled")) {
      return;
    }
    invokeHook("onShow", [instance], false);
    if (instance.props.onShow(instance) === false) {
      return;
    }
    instance.state.isVisible = true;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "visible";
    }
    handleStyles();
    addDocumentPress();
    if (!instance.state.isMounted) {
      popper2.style.transition = "none";
    }
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
      setTransitionDuration([box, content], 0);
    }
    onFirstUpdate = function onFirstUpdate2() {
      var _instance$popperInsta2;
      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }
      ignoreOnFirstUpdate = true;
      void popper2.offsetHeight;
      popper2.style.transition = instance.props.moveTransition;
      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], "visible");
      }
      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance);
      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      invokeHook("onMount", [instance]);
      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function() {
          instance.state.isShown = true;
          invokeHook("onShown", [instance]);
        });
      }
    };
    mount();
  }
  function hide2() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hide"));
    }
    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }
    invokeHook("onHide", [instance], false);
    if (instance.props.onHide(instance) === false) {
      return;
    }
    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "hidden";
    }
    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles(true);
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], "hidden");
      }
    }
    handleAriaContentAttribute();
    handleAriaExpandedAttribute();
    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }
  function hideWithInteractivity(event) {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hideWithInteractivity"));
    }
    getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }
  function unmount() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("unmount"));
    }
    if (instance.state.isVisible) {
      instance.hide();
    }
    if (!instance.state.isMounted) {
      return;
    }
    destroyPopperInstance();
    getNestedPopperTree().forEach(function(nestedPopper) {
      nestedPopper._tippy.unmount();
    });
    if (popper2.parentNode) {
      popper2.parentNode.removeChild(popper2);
    }
    mountedInstances = mountedInstances.filter(function(i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook("onHidden", [instance]);
  }
  function destroy() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("destroy"));
    }
    if (instance.state.isDestroyed) {
      return;
    }
    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference2._tippy;
    instance.state.isDestroyed = true;
    invokeHook("onDestroy", [instance]);
  }
}
function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }
  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  if (false) {
    validateTargets(targets);
    validateProps(optionalProps, plugins);
  }
  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins
  });
  var elements = getArrayOfElements(targets);
  if (false) {
    var isSingleContentElement = isElement2(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", "\n\n", "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", "\n\n", "1) content: element.innerHTML\n", "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var instances = elements.reduce(function(acc, reference2) {
    var instance = reference2 && createTippy(reference2, passedProps);
    if (instance) {
      acc.push(instance);
    }
    return acc;
  }, []);
  return isElement2(targets) ? instances[0] : instances;
}
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
var applyStylesModifier = Object.assign({}, applyStyles_default, {
  effect: function effect4(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
  }
});
tippy.setDefaultProps({
  render
});
var tippy_esm_default = tippy;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgInNyYy9UaXBweS9UaXBweS50cyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZW51bXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXROb2RlTmFtZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvdy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2luc3RhbmNlT2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcHBseVN0eWxlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWF0aC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvdXNlckFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNMYXlvdXRWaWV3cG9ydC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldExheW91dFJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9jb250YWlucy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1RhYmxlRWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFBhcmVudE5vZGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvd2l0aGluLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXJyb3cuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsQmFyWC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFZpZXdwb3J0UmVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50UmVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzU2Nyb2xsUGFyZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0U2Nyb2xsUGFyZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDbGlwcGluZ1JlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9mbGlwLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaGlkZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL29mZnNldC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRIVE1MRWxlbWVudFNjcm9sbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVTY3JvbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9vcmRlck1vZGlmaWVycy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGVib3VuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlQnlOYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9jcmVhdGVQb3BwZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3BvcHBlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9jb25zdGFudHMudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvdXRpbHMudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvZG9tLXV0aWxzLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2JpbmRHbG9iYWxFdmVudExpc3RlbmVycy50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9icm93c2VyLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3ZhbGlkYXRpb24udHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvcHJvcHMudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvdGVtcGxhdGUudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvY3JlYXRlVGlwcHkudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvaW5kZXgudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvYWRkb25zL2NyZWF0ZVNpbmdsZXRvbi50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9hZGRvbnMvZGVsZWdhdGUudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvcGx1Z2lucy9hbmltYXRlRmlsbC50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9wbHVnaW5zL2ZvbGxvd0N1cnNvci50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9wbHVnaW5zL2lubGluZVBvc2l0aW9uaW5nLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3BsdWdpbnMvc3RpY2t5LnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvYnVpbGQvYmFzZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgY2hlY2sodHlwZW9mIHRoaXMgPT0gJ29iamVjdCcgJiYgdGhpcykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG4gIHZhciB0ZXN0ID0gKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSkuYmluZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xudmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICEkT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT09ICdTdHJpbmcnID8gc3BsaXQoaXQsICcnKSA6ICRPYmplY3QoaXQpO1xufSA6ICRPYmplY3Q7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gd2UgY2FuJ3QgdXNlIGp1c3QgYGl0ID09IG51bGxgIHNpbmNlIG9mIGBkb2N1bWVudC5hbGxgIHNwZWNpYWwgY2FzZVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdC1hZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gbnVsbCB8fCBpdCA9PT0gdW5kZWZpbmVkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3RcbnZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cbi8vIGBJc0NhbGxhYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdHlwZW9mLXVuZGVmaW5lZCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgZG9jdW1lbnRBbGwgPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRBbGwgIT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbicgfHwgYXJndW1lbnQgPT09IGRvY3VtZW50QWxsO1xufSA6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbic7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxbbmFtZXNwYWNlXSkgOiBnbG9iYWxbbmFtZXNwYWNlXSAmJiBnbG9iYWxbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgbmF2aWdhdG9yICE9ICd1bmRlZmluZWQnICYmIFN0cmluZyhuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAnJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWwuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgJiYgIVN5bWJvbC5zaGFtXG4gICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbCwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXNbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxuKHN0b3JlLnZlcnNpb25zIHx8IChzdG9yZS52ZXJzaW9ucyA9IFtdKSkucHVzaCh7XG4gIHZlcnNpb246ICczLjM3LjEnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTQtMjAyNCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KScsXG4gIGxpY2Vuc2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9ibG9iL3YzLjM3LjEvTElDRU5TRScsXG4gIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzJ1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgfHwge30pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdICYmIGdsb2JhbFtUQVJHRVRdLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLmRvbnRDYWxsR2V0U2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1pc2FycmF5IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XG4gIHJldHVybiBjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ0FycmF5Jztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBTYWZhcmkgPCAxMyBkb2VzIG5vdCB0aHJvdyBhbiBlcnJvciBpbiB0aGlzIGNhc2VcbnZhciBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPSBERVNDUklQVE9SUyAmJiAhZnVuY3Rpb24gKCkge1xuICAvLyBtYWtlcyBubyBzZW5zZSB3aXRob3V0IHByb3BlciBzdHJpY3QgbW9kZSBzdXBwb3J0XG4gIGlmICh0aGlzICE9PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLmxlbmd0aCA9IDE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID8gZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICBpZiAoaXNBcnJheShPKSAmJiAhZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sICdsZW5ndGgnKS53cml0YWJsZSkge1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKCdDYW5ub3Qgc2V0IHJlYWQgb25seSAubGVuZ3RoJyk7XG4gIH0gcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufSA6IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyAkVHlwZUVycm9yKCdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIHNldEFycmF5TGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNldC1sZW5ndGgnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBJTkNPUlJFQ1RfVE9fTEVOR1RIID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gW10ucHVzaC5jYWxsKHsgbGVuZ3RoOiAweDEwMDAwMDAwMCB9LCAxKSAhPT0gNDI5NDk2NzI5Nztcbn0pO1xuXG4vLyBWOCA8PSAxMjEgYW5kIFNhZmFyaSA8PSAxNS40OyBGRiA8IDIzIHRocm93cyBJbnRlcm5hbEVycm9yXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0xMjY4MVxudmFyIHByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5wdXNoKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59O1xuXG52YXIgRk9SQ0VEID0gSU5DT1JSRUNUX1RPX0xFTkdUSCB8fCAhcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoKCk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUucHVzaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5wdXNoXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgcHVzaDogZnVuY3Rpb24gcHVzaChpdGVtKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGFyZ0NvdW50ID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobGVuICsgYXJnQ291bnQpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJnQ291bnQ7IGkrKykge1xuICAgICAgT1tsZW5dID0gYXJndW1lbnRzW2ldO1xuICAgICAgbGVuKys7XG4gICAgfVxuICAgIHNldEFycmF5TGVuZ3RoKE8sIGxlbik7XG4gICAgcmV0dXJuIGxlbjtcbiAgfVxufSk7XG4iLCAiaW1wb3J0ICd0aXBweS5qcy9kaXN0L3RpcHB5LmNzcyc7XG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyB0aXBweX0gZnJvbSAndGlwcHkuanMnO1xuIiwgImV4cG9ydCB2YXIgdG9wID0gJ3RvcCc7XG5leHBvcnQgdmFyIGJvdHRvbSA9ICdib3R0b20nO1xuZXhwb3J0IHZhciByaWdodCA9ICdyaWdodCc7XG5leHBvcnQgdmFyIGxlZnQgPSAnbGVmdCc7XG5leHBvcnQgdmFyIGF1dG8gPSAnYXV0byc7XG5leHBvcnQgdmFyIGJhc2VQbGFjZW1lbnRzID0gW3RvcCwgYm90dG9tLCByaWdodCwgbGVmdF07XG5leHBvcnQgdmFyIHN0YXJ0ID0gJ3N0YXJ0JztcbmV4cG9ydCB2YXIgZW5kID0gJ2VuZCc7XG5leHBvcnQgdmFyIGNsaXBwaW5nUGFyZW50cyA9ICdjbGlwcGluZ1BhcmVudHMnO1xuZXhwb3J0IHZhciB2aWV3cG9ydCA9ICd2aWV3cG9ydCc7XG5leHBvcnQgdmFyIHBvcHBlciA9ICdwb3BwZXInO1xuZXhwb3J0IHZhciByZWZlcmVuY2UgPSAncmVmZXJlbmNlJztcbmV4cG9ydCB2YXIgdmFyaWF0aW9uUGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9iYXNlUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pO1xuZXhwb3J0IHZhciBwbGFjZW1lbnRzID0gLyojX19QVVJFX18qL1tdLmNvbmNhdChiYXNlUGxhY2VtZW50cywgW2F1dG9dKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQsIHBsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7IC8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXG5cbmV4cG9ydCB2YXIgYmVmb3JlUmVhZCA9ICdiZWZvcmVSZWFkJztcbmV4cG9ydCB2YXIgcmVhZCA9ICdyZWFkJztcbmV4cG9ydCB2YXIgYWZ0ZXJSZWFkID0gJ2FmdGVyUmVhZCc7IC8vIHB1cmUtbG9naWMgbW9kaWZpZXJzXG5cbmV4cG9ydCB2YXIgYmVmb3JlTWFpbiA9ICdiZWZvcmVNYWluJztcbmV4cG9ydCB2YXIgbWFpbiA9ICdtYWluJztcbmV4cG9ydCB2YXIgYWZ0ZXJNYWluID0gJ2FmdGVyTWFpbic7IC8vIG1vZGlmaWVyIHdpdGggdGhlIHB1cnBvc2UgdG8gd3JpdGUgdG8gdGhlIERPTSAob3Igd3JpdGUgaW50byBhIGZyYW1ld29yayBzdGF0ZSlcblxuZXhwb3J0IHZhciBiZWZvcmVXcml0ZSA9ICdiZWZvcmVXcml0ZSc7XG5leHBvcnQgdmFyIHdyaXRlID0gJ3dyaXRlJztcbmV4cG9ydCB2YXIgYWZ0ZXJXcml0ZSA9ICdhZnRlcldyaXRlJztcbmV4cG9ydCB2YXIgbW9kaWZpZXJQaGFzZXMgPSBbYmVmb3JlUmVhZCwgcmVhZCwgYWZ0ZXJSZWFkLCBiZWZvcmVNYWluLCBtYWluLCBhZnRlck1haW4sIGJlZm9yZVdyaXRlLCB3cml0ZSwgYWZ0ZXJXcml0ZV07IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSA6IG51bGw7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIGlmIChub2RlID09IG51bGwpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKG5vZGUudG9TdHJpbmcoKSAhPT0gJ1tvYmplY3QgV2luZG93XScpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59IiwgImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5cbmZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3Qobm9kZSkge1xuICAvLyBJRSAxMSBoYXMgbm8gU2hhZG93Um9vdFxuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuU2hhZG93Um9vdDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xufVxuXG5leHBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQsIGlzU2hhZG93Um9vdCB9OyIsICJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiOyAvLyBUaGlzIG1vZGlmaWVyIHRha2VzIHRoZSBzdHlsZXMgcHJlcGFyZWQgYnkgdGhlIGBjb21wdXRlU3R5bGVzYCBtb2RpZmllclxuLy8gYW5kIGFwcGxpZXMgdGhlbSB0byB0aGUgSFRNTEVsZW1lbnRzIHN1Y2ggYXMgcG9wcGVyIGFuZCBhcnJvd1xuXG5mdW5jdGlvbiBhcHBseVN0eWxlcyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHN0eWxlID0gc3RhdGUuc3R5bGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZsb3cgZG9lc24ndCBzdXBwb3J0IHRvIGV4dGVuZCB0aGlzIHByb3BlcnR5LCBidXQgaXQncyB0aGUgbW9zdFxuICAgIC8vIGVmZmVjdGl2ZSB3YXkgdG8gYXBwbHkgc3R5bGVzIHRvIGFuIEhUTUxFbGVtZW50XG4gICAgLy8gJEZsb3dGaXhNZVtjYW5ub3Qtd3JpdGVdXG5cblxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICBwb3BwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICByZWZlcmVuY2U6IHt9XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gJyc7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogYXBwbHlTdHlsZXMsXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ11cbn07IiwgImltcG9ydCB7IGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbn0iLCAiZXhwb3J0IHZhciBtYXggPSBNYXRoLm1heDtcbmV4cG9ydCB2YXIgbWluID0gTWF0aC5taW47XG5leHBvcnQgdmFyIHJvdW5kID0gTWF0aC5yb3VuZDsiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VUFTdHJpbmcoKSB7XG4gIHZhciB1YURhdGEgPSBuYXZpZ2F0b3IudXNlckFnZW50RGF0YTtcblxuICBpZiAodWFEYXRhICE9IG51bGwgJiYgdWFEYXRhLmJyYW5kcyAmJiBBcnJheS5pc0FycmF5KHVhRGF0YS5icmFuZHMpKSB7XG4gICAgcmV0dXJuIHVhRGF0YS5icmFuZHMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5icmFuZCArIFwiL1wiICsgaXRlbS52ZXJzaW9uO1xuICAgIH0pLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50O1xufSIsICJpbXBvcnQgZ2V0VUFTdHJpbmcgZnJvbSBcIi4uL3V0aWxzL3VzZXJBZ2VudC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNMYXlvdXRWaWV3cG9ydCgpIHtcbiAgcmV0dXJuICEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xufSIsICJpbXBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGlzTGF5b3V0Vmlld3BvcnQgZnJvbSBcIi4vaXNMYXlvdXRWaWV3cG9ydC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGluY2x1ZGVTY2FsZSwgaXNGaXhlZFN0cmF0ZWd5KSB7XG4gIGlmIChpbmNsdWRlU2NhbGUgPT09IHZvaWQgMCkge1xuICAgIGluY2x1ZGVTY2FsZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzRml4ZWRTdHJhdGVneSA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZFN0cmF0ZWd5ID0gZmFsc2U7XG4gIH1cblxuICB2YXIgY2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzY2FsZVggPSAxO1xuICB2YXIgc2NhbGVZID0gMTtcblxuICBpZiAoaW5jbHVkZVNjYWxlICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICBzY2FsZVggPSBlbGVtZW50Lm9mZnNldFdpZHRoID4gMCA/IHJvdW5kKGNsaWVudFJlY3Qud2lkdGgpIC8gZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAxIDogMTtcbiAgICBzY2FsZVkgPSBlbGVtZW50Lm9mZnNldEhlaWdodCA+IDAgPyByb3VuZChjbGllbnRSZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxIDogMTtcbiAgfVxuXG4gIHZhciBfcmVmID0gaXNFbGVtZW50KGVsZW1lbnQpID8gZ2V0V2luZG93KGVsZW1lbnQpIDogd2luZG93LFxuICAgICAgdmlzdWFsVmlld3BvcnQgPSBfcmVmLnZpc3VhbFZpZXdwb3J0O1xuXG4gIHZhciBhZGRWaXN1YWxPZmZzZXRzID0gIWlzTGF5b3V0Vmlld3BvcnQoKSAmJiBpc0ZpeGVkU3RyYXRlZ3k7XG4gIHZhciB4ID0gKGNsaWVudFJlY3QubGVmdCArIChhZGRWaXN1YWxPZmZzZXRzICYmIHZpc3VhbFZpZXdwb3J0ID8gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdCA6IDApKSAvIHNjYWxlWDtcbiAgdmFyIHkgPSAoY2xpZW50UmVjdC50b3AgKyAoYWRkVmlzdWFsT2Zmc2V0cyAmJiB2aXN1YWxWaWV3cG9ydCA/IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcCA6IDApKSAvIHNjYWxlWTtcbiAgdmFyIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aCAvIHNjYWxlWDtcbiAgdmFyIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0IC8gc2NhbGVZO1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB0b3A6IHksXG4gICAgcmlnaHQ6IHggKyB3aWR0aCxcbiAgICBib3R0b206IHkgKyBoZWlnaHQsXG4gICAgbGVmdDogeCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn0iLCAiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjsgLy8gUmV0dXJucyB0aGUgbGF5b3V0IHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LiBMYXlvdXRcbi8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gIHZhciBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpOyAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cbiAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufSIsICJpbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWlucyhwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciByb290Tm9kZSA9IGNoaWxkLmdldFJvb3ROb2RlICYmIGNoaWxkLmdldFJvb3ROb2RlKCk7IC8vIEZpcnN0LCBhdHRlbXB0IHdpdGggZmFzdGVyIG5hdGl2ZSBtZXRob2RcblxuICBpZiAocGFyZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIHRoZW4gZmFsbGJhY2sgdG8gY3VzdG9tIGltcGxlbWVudGF0aW9uIHdpdGggU2hhZG93IERPTSBzdXBwb3J0XG4gIGVsc2UgaWYgKHJvb3ROb2RlICYmIGlzU2hhZG93Um9vdChyb290Tm9kZSkpIHtcbiAgICAgIHZhciBuZXh0ID0gY2hpbGQ7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKG5leHQgJiYgcGFyZW50LmlzU2FtZU5vZGUobmV4dCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ106IG5lZWQgYSBiZXR0ZXIgd2F5IHRvIGhhbmRsZSB0aGlzLi4uXG5cblxuICAgICAgICBuZXh0ID0gbmV4dC5wYXJlbnROb2RlIHx8IG5leHQuaG9zdDtcbiAgICAgIH0gd2hpbGUgKG5leHQpO1xuICAgIH0gLy8gR2l2ZSB1cCwgdGhlIHJlc3VsdCBpcyBmYWxzZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufSIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSB7XG4gIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn0iLCAiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5kZXhPZihnZXROb2RlTmFtZShlbGVtZW50KSkgPj0gMDtcbn0iLCAiaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICByZXR1cm4gKChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgZWxlbWVudC5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnQ7XG59IiwgImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZ2V0Tm9kZU5hbWUoZWxlbWVudCkgPT09ICdodG1sJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuICgvLyB0aGlzIGlzIGEgcXVpY2tlciAoYnV0IGxlc3MgdHlwZSBzYWZlKSB3YXkgdG8gc2F2ZSBxdWl0ZSBzb21lIGJ5dGVzIGZyb20gdGhlIGJ1bmRsZVxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl1cbiAgICAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICBlbGVtZW50LmFzc2lnbmVkU2xvdCB8fCAvLyBzdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZVxuICAgIGVsZW1lbnQucGFyZW50Tm9kZSB8fCAoIC8vIERPTSBFbGVtZW50IGRldGVjdGVkXG4gICAgaXNTaGFkb3dSb290KGVsZW1lbnQpID8gZWxlbWVudC5ob3N0IDogbnVsbCkgfHwgLy8gU2hhZG93Um9vdCBkZXRlY3RlZFxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBIVE1MRWxlbWVudCBpcyBhIE5vZGVcbiAgICBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkgLy8gZmFsbGJhY2tcblxuICApO1xufSIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50LCBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgaXNUYWJsZUVsZW1lbnQgZnJvbSBcIi4vaXNUYWJsZUVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBnZXRVQVN0cmluZyBmcm9tIFwiLi4vdXRpbHMvdXNlckFnZW50LmpzXCI7XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuLy8gcmV0dXJuIHRoZSBjb250YWluaW5nIGJsb2NrXG5cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgdmFyIGlzRmlyZWZveCA9IC9maXJlZm94L2kudGVzdChnZXRVQVN0cmluZygpKTtcbiAgdmFyIGlzSUUgPSAvVHJpZGVudC9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XG5cbiAgaWYgKGlzSUUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIC8vIEluIElFIDksIDEwIGFuZCAxMSBmaXhlZCBlbGVtZW50cyBjb250YWluaW5nIGJsb2NrIGlzIGFsd2F5cyBlc3RhYmxpc2hlZCBieSB0aGUgdmlld3BvcnRcbiAgICB2YXIgZWxlbWVudENzcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cbiAgICBpZiAoZWxlbWVudENzcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgdmFyIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcblxuICBpZiAoaXNTaGFkb3dSb290KGN1cnJlbnROb2RlKSkge1xuICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUuaG9zdDtcbiAgfVxuXG4gIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbJ2h0bWwnLCAnYm9keSddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoY3VycmVudE5vZGUpKSA8IDApIHtcbiAgICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSk7IC8vIFRoaXMgaXMgbm9uLWV4aGF1c3RpdmUgYnV0IGNvdmVycyB0aGUgbW9zdCBjb21tb24gQ1NTIHByb3BlcnRpZXMgdGhhdFxuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcblxuICAgIGlmIChjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgY3NzLmNvbnRhaW4gPT09ICdwYWludCcgfHwgWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnXS5pbmRleE9mKGNzcy53aWxsQ2hhbmdlKSAhPT0gLTEgfHwgaXNGaXJlZm94ICYmIGNzcy53aWxsQ2hhbmdlID09PSAnZmlsdGVyJyB8fCBpc0ZpcmVmb3ggJiYgY3NzLmZpbHRlciAmJiBjc3MuZmlsdGVyICE9PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSAvLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xufSIsICJpbXBvcnQgeyBtYXggYXMgbWF0aE1heCwgbWluIGFzIG1hdGhNaW4gfSBmcm9tIFwiLi9tYXRoLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gd2l0aGluKG1pbiwgdmFsdWUsIG1heCkge1xuICByZXR1cm4gbWF0aE1heChtaW4sIG1hdGhNaW4odmFsdWUsIG1heCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhpbk1heENsYW1wKG1pbiwgdmFsdWUsIG1heCkge1xuICB2YXIgdiA9IHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpO1xuICByZXR1cm4gdiA+IG1heCA/IG1heCA6IHY7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZyZXNoU2lkZU9iamVjdCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDBcbiAgfTtcbn0iLCAiaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlUGFkZGluZ09iamVjdChwYWRkaW5nT2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBnZXRGcmVzaFNpZGVPYmplY3QoKSwgcGFkZGluZ09iamVjdCk7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGFuZFRvSGFzaE1hcCh2YWx1ZSwga2V5cykge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGhhc2hNYXAsIGtleSkge1xuICAgIGhhc2hNYXBba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBoYXNoTWFwO1xuICB9LCB7fSk7XG59IiwgImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwiLi4vZG9tLXV0aWxzL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHdpdGhpbiB9IGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4uL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qc1wiO1xuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi4vdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzXCI7XG5pbXBvcnQgeyBsZWZ0LCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHRvcCwgYm90dG9tIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHRvUGFkZGluZ09iamVjdCA9IGZ1bmN0aW9uIHRvUGFkZGluZ09iamVjdChwYWRkaW5nLCBzdGF0ZSkge1xuICBwYWRkaW5nID0gdHlwZW9mIHBhZGRpbmcgPT09ICdmdW5jdGlvbicgPyBwYWRkaW5nKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogcGFkZGluZztcbiAgcmV0dXJuIG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG59O1xuXG5mdW5jdGlvbiBhcnJvdyhfcmVmKSB7XG4gIHZhciBfc3RhdGUkbW9kaWZpZXJzRGF0YSQ7XG5cbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBpc1ZlcnRpY2FsID0gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDA7XG4gIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIGlmICghYXJyb3dFbGVtZW50IHx8ICFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdPYmplY3QgPSB0b1BhZGRpbmdPYmplY3Qob3B0aW9ucy5wYWRkaW5nLCBzdGF0ZSk7XG4gIHZhciBhcnJvd1JlY3QgPSBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCk7XG4gIHZhciBtaW5Qcm9wID0gYXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgdmFyIG1heFByb3AgPSBheGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgdmFyIGVuZERpZmYgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbbGVuXSArIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXSAtIHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5wb3BwZXJbbGVuXTtcbiAgdmFyIHN0YXJ0RGlmZiA9IHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc107XG4gIHZhciBhcnJvd09mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChhcnJvd0VsZW1lbnQpO1xuICB2YXIgY2xpZW50U2l6ZSA9IGFycm93T2Zmc2V0UGFyZW50ID8gYXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0IHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRXaWR0aCB8fCAwIDogMDtcbiAgdmFyIGNlbnRlclRvUmVmZXJlbmNlID0gZW5kRGlmZiAvIDIgLSBzdGFydERpZmYgLyAyOyAvLyBNYWtlIHN1cmUgdGhlIGFycm93IGRvZXNuJ3Qgb3ZlcmZsb3cgdGhlIHBvcHBlciBpZiB0aGUgY2VudGVyIHBvaW50IGlzXG4gIC8vIG91dHNpZGUgb2YgdGhlIHBvcHBlciBib3VuZHNcblxuICB2YXIgbWluID0gcGFkZGluZ09iamVjdFttaW5Qcm9wXTtcbiAgdmFyIG1heCA9IGNsaWVudFNpemUgLSBhcnJvd1JlY3RbbGVuXSAtIHBhZGRpbmdPYmplY3RbbWF4UHJvcF07XG4gIHZhciBjZW50ZXIgPSBjbGllbnRTaXplIC8gMiAtIGFycm93UmVjdFtsZW5dIC8gMiArIGNlbnRlclRvUmVmZXJlbmNlO1xuICB2YXIgb2Zmc2V0ID0gd2l0aGluKG1pbiwgY2VudGVyLCBtYXgpOyAvLyBQcmV2ZW50cyBicmVha2luZyBzeW50YXggaGlnaGxpZ2h0aW5nLi4uXG5cbiAgdmFyIGF4aXNQcm9wID0gYXhpcztcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IChfc3RhdGUkbW9kaWZpZXJzRGF0YSQgPSB7fSwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkW2F4aXNQcm9wXSA9IG9mZnNldCwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkLmNlbnRlck9mZnNldCA9IG9mZnNldCAtIGNlbnRlciwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkKTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50LFxuICAgICAgYXJyb3dFbGVtZW50ID0gX29wdGlvbnMkZWxlbWVudCA9PT0gdm9pZCAwID8gJ1tkYXRhLXBvcHBlci1hcnJvd10nIDogX29wdGlvbnMkZWxlbWVudDtcblxuICBpZiAoYXJyb3dFbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gQ1NTIHNlbGVjdG9yXG5cblxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbnRhaW5zKHN0YXRlLmVsZW1lbnRzLnBvcHBlciwgYXJyb3dFbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRlLmVsZW1lbnRzLmFycm93ID0gYXJyb3dFbGVtZW50O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXJyb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogYXJyb3csXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J11cbn07IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xufSIsICJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIGVuZCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHVuc2V0U2lkZXMgPSB7XG4gIHRvcDogJ2F1dG8nLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgbGVmdDogJ2F1dG8nXG59OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcbi8vIGNsZWFubHkgZGl2aWRlIHRoZSB2YWx1ZXMgaW50byB0aGUgYXBwcm9wcmlhdGUgc3VicGl4ZWxzLlxuXG5mdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmLCB3aW4pIHtcbiAgdmFyIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55O1xuICB2YXIgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgcmV0dXJuIHtcbiAgICB4OiByb3VuZCh4ICogZHByKSAvIGRwciB8fCAwLFxuICAgIHk6IHJvdW5kKHkgKiBkcHIpIC8gZHByIHx8IDBcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcFRvU3R5bGVzKF9yZWYyKSB7XG4gIHZhciBfT2JqZWN0JGFzc2lnbjI7XG5cbiAgdmFyIHBvcHBlciA9IF9yZWYyLnBvcHBlcixcbiAgICAgIHBvcHBlclJlY3QgPSBfcmVmMi5wb3BwZXJSZWN0LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuICAgICAgdmFyaWF0aW9uID0gX3JlZjIudmFyaWF0aW9uLFxuICAgICAgb2Zmc2V0cyA9IF9yZWYyLm9mZnNldHMsXG4gICAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgYWRhcHRpdmUgPSBfcmVmMi5hZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9yZWYyLnJvdW5kT2Zmc2V0cyxcbiAgICAgIGlzRml4ZWQgPSBfcmVmMi5pc0ZpeGVkO1xuICB2YXIgX29mZnNldHMkeCA9IG9mZnNldHMueCxcbiAgICAgIHggPSBfb2Zmc2V0cyR4ID09PSB2b2lkIDAgPyAwIDogX29mZnNldHMkeCxcbiAgICAgIF9vZmZzZXRzJHkgPSBvZmZzZXRzLnksXG4gICAgICB5ID0gX29mZnNldHMkeSA9PT0gdm9pZCAwID8gMCA6IF9vZmZzZXRzJHk7XG5cbiAgdmFyIF9yZWYzID0gdHlwZW9mIHJvdW5kT2Zmc2V0cyA9PT0gJ2Z1bmN0aW9uJyA/IHJvdW5kT2Zmc2V0cyh7XG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH0pIDoge1xuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xuXG4gIHggPSBfcmVmMy54O1xuICB5ID0gX3JlZjMueTtcbiAgdmFyIGhhc1ggPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd4Jyk7XG4gIHZhciBoYXNZID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneScpO1xuICB2YXIgc2lkZVggPSBsZWZ0O1xuICB2YXIgc2lkZVkgPSB0b3A7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgaWYgKGFkYXB0aXZlKSB7XG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChwb3BwZXIpO1xuICAgIHZhciBoZWlnaHRQcm9wID0gJ2NsaWVudEhlaWdodCc7XG4gICAgdmFyIHdpZHRoUHJvcCA9ICdjbGllbnRXaWR0aCc7XG5cbiAgICBpZiAob2Zmc2V0UGFyZW50ID09PSBnZXRXaW5kb3cocG9wcGVyKSkge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KHBvcHBlcik7XG5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gIT09ICdzdGF0aWMnICYmIHBvc2l0aW9uID09PSAnYWJzb2x1dGUnKSB7XG4gICAgICAgIGhlaWdodFByb3AgPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICAgICAgd2lkdGhQcm9wID0gJ3Njcm9sbFdpZHRoJztcbiAgICAgIH1cbiAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhc3RdOiBmb3JjZSB0eXBlIHJlZmluZW1lbnQsIHdlIGNvbXBhcmUgb2Zmc2V0UGFyZW50IHdpdGggd2luZG93IGFib3ZlLCBidXQgRmxvdyBkb2Vzbid0IGRldGVjdCBpdFxuXG5cbiAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQ7XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSB0b3AgfHwgKHBsYWNlbWVudCA9PT0gbGVmdCB8fCBwbGFjZW1lbnQgPT09IHJpZ2h0KSAmJiB2YXJpYXRpb24gPT09IGVuZCkge1xuICAgICAgc2lkZVkgPSBib3R0b207XG4gICAgICB2YXIgb2Zmc2V0WSA9IGlzRml4ZWQgJiYgb2Zmc2V0UGFyZW50ID09PSB3aW4gJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LmhlaWdodCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgb2Zmc2V0UGFyZW50W2hlaWdodFByb3BdO1xuICAgICAgeSAtPSBvZmZzZXRZIC0gcG9wcGVyUmVjdC5oZWlnaHQ7XG4gICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0IHx8IChwbGFjZW1lbnQgPT09IHRvcCB8fCBwbGFjZW1lbnQgPT09IGJvdHRvbSkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgIHNpZGVYID0gcmlnaHQ7XG4gICAgICB2YXIgb2Zmc2V0WCA9IGlzRml4ZWQgJiYgb2Zmc2V0UGFyZW50ID09PSB3aW4gJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LndpZHRoIDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICBvZmZzZXRQYXJlbnRbd2lkdGhQcm9wXTtcbiAgICAgIHggLT0gb2Zmc2V0WCAtIHBvcHBlclJlY3Qud2lkdGg7XG4gICAgICB4ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcG9zaXRpb246IHBvc2l0aW9uXG4gIH0sIGFkYXB0aXZlICYmIHVuc2V0U2lkZXMpO1xuXG4gIHZhciBfcmVmNCA9IHJvdW5kT2Zmc2V0cyA9PT0gdHJ1ZSA/IHJvdW5kT2Zmc2V0c0J5RFBSKHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfSwgZ2V0V2luZG93KHBvcHBlcikpIDoge1xuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xuXG4gIHggPSBfcmVmNC54O1xuICB5ID0gX3JlZjQueTtcblxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uKSB7XG4gICAgdmFyIF9PYmplY3QkYXNzaWduO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduID0ge30sIF9PYmplY3QkYXNzaWduW3NpZGVZXSA9IGhhc1kgPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ25bc2lkZVhdID0gaGFzWCA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbi50cmFuc2Zvcm0gPSAod2luLmRldmljZVBpeGVsUmF0aW8gfHwgMSkgPD0gMSA/IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCIgOiBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIDApXCIsIF9PYmplY3QkYXNzaWduKSk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24yID0ge30sIF9PYmplY3QkYXNzaWduMltzaWRlWV0gPSBoYXNZID8geSArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjJbc2lkZVhdID0gaGFzWCA/IHggKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yLnRyYW5zZm9ybSA9ICcnLCBfT2JqZWN0JGFzc2lnbjIpKTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVN0eWxlcyhfcmVmNSkge1xuICB2YXIgc3RhdGUgPSBfcmVmNS5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmNS5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID0gb3B0aW9ucy5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRncHVBY2NlbGVyYXQsXG4gICAgICBfb3B0aW9ucyRhZGFwdGl2ZSA9IG9wdGlvbnMuYWRhcHRpdmUsXG4gICAgICBhZGFwdGl2ZSA9IF9vcHRpb25zJGFkYXB0aXZlID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWRhcHRpdmUsXG4gICAgICBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPSBvcHRpb25zLnJvdW5kT2Zmc2V0cyxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJvdW5kT2Zmc2V0cztcbiAgdmFyIGNvbW1vblN0eWxlcyA9IHtcbiAgICBwbGFjZW1lbnQ6IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KSxcbiAgICB2YXJpYXRpb246IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHBvcHBlcjogc3RhdGUuZWxlbWVudHMucG9wcGVyLFxuICAgIHBvcHBlclJlY3Q6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBncHVBY2NlbGVyYXRpb246IGdwdUFjY2VsZXJhdGlvbixcbiAgICBpc0ZpeGVkOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnXG4gIH07XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5wb3BwZXIsIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLFxuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBhZGFwdGl2ZTogYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLmFycm93ID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLmFycm93LCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGFkYXB0aXZlOiBmYWxzZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcGxhY2VtZW50Jzogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICBmbjogY29tcHV0ZVN0eWxlcyxcbiAgZGF0YToge31cbn07IiwgImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgcGFzc2l2ZSA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRzY3JvbGwgPSBvcHRpb25zLnNjcm9sbCxcbiAgICAgIHNjcm9sbCA9IF9vcHRpb25zJHNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHNjcm9sbCxcbiAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxuICAgICAgcmVzaXplID0gX29wdGlvbnMkcmVzaXplID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVzaXplO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG4gIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XG5cbiAgaWYgKHNjcm9sbCkge1xuICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyZXNpemUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzaXplKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdldmVudExpc3RlbmVycycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogZnVuY3Rpb24gZm4oKSB7fSxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIGRhdGE6IHt9XG59OyIsICJ2YXIgaGFzaCA9IHtcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0JyxcbiAgYm90dG9tOiAndG9wJyxcbiAgdG9wOiAnYm90dG9tJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCAidmFyIGhhc2ggPSB7XG4gIHN0YXJ0OiAnZW5kJyxcbiAgZW5kOiAnc3RhcnQnXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsKG5vZGUpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XG4gIHZhciBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQ7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcFxuICB9O1xufSIsICJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcbiAgLy8gSWYgPGh0bWw+IGhhcyBhIENTUyB3aWR0aCBncmVhdGVyIHRoYW4gdGhlIHZpZXdwb3J0LCB0aGVuIHRoaXMgd2lsbCBiZVxuICAvLyBpbmNvcnJlY3QgZm9yIFJUTC5cbiAgLy8gUG9wcGVyIDEgaXMgYnJva2VuIGluIHRoaXMgY2FzZSBhbmQgbmV2ZXIgaGFkIGEgYnVnIHJlcG9ydCBzbyBsZXQncyBhc3N1bWVcbiAgLy8gaXQncyBub3QgYW4gaXNzdWUuIEkgZG9uJ3QgdGhpbmsgYW55b25lIGV2ZXIgc3BlY2lmaWVzIHdpZHRoIG9uIDxodG1sPlxuICAvLyBhbnl3YXkuXG4gIC8vIEJyb3dzZXJzIHdoZXJlIHRoZSBsZWZ0IHNjcm9sbGJhciBkb2Vzbid0IGNhdXNlIGFuIGlzc3VlIHJlcG9ydCBgMGAgZm9yXG4gIC8vIHRoaXMgKGUuZy4gRWRnZSAyMDE5LCBJRTExLCBTYWZhcmkpXG4gIHJldHVybiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKS5sZWZ0ICsgZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG59IiwgImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGlzTGF5b3V0Vmlld3BvcnQgZnJvbSBcIi4vaXNMYXlvdXRWaWV3cG9ydC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIHZhciB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7XG5cbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7XG4gICAgdmFyIGxheW91dFZpZXdwb3J0ID0gaXNMYXlvdXRWaWV3cG9ydCgpO1xuXG4gICAgaWYgKGxheW91dFZpZXdwb3J0IHx8ICFsYXlvdXRWaWV3cG9ydCAmJiBzdHJhdGVneSA9PT0gJ2ZpeGVkJykge1xuICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHggKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpLFxuICAgIHk6IHlcbiAgfTtcbn0iLCAiaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5pbXBvcnQgeyBtYXggfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBHZXRzIHRoZSBlbnRpcmUgc2l6ZSBvZiB0aGUgc2Nyb2xsYWJsZSBkb2N1bWVudCBhcmVhLCBldmVuIGV4dGVuZGluZyBvdXRzaWRlXG4vLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW5TY3JvbGwgPSBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xuICB2YXIgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApO1xuICB2YXIgaGVpZ2h0ID0gbWF4KGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgYm9keSA/IGJvZHkuc2Nyb2xsSGVpZ2h0IDogMCwgYm9keSA/IGJvZHkuY2xpZW50SGVpZ2h0IDogMCk7XG4gIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgdmFyIHkgPSAtd2luU2Nyb2xsLnNjcm9sbFRvcDtcblxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn0iLCAiaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBGaXJlZm94IHdhbnRzIHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG4gIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCksXG4gICAgICBvdmVyZmxvdyA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93LFxuICAgICAgb3ZlcmZsb3dYID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYLFxuICAgICAgb3ZlcmZsb3dZID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dZO1xuXG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpO1xufSIsICJpbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChub2RlKSB7XG4gIGlmIChbJ2h0bWwnLCAnYm9keScsICcjZG9jdW1lbnQnXS5pbmRleE9mKGdldE5vZGVOYW1lKG5vZGUpKSA+PSAwKSB7XG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgfVxuXG4gIGlmIChpc0hUTUxFbGVtZW50KG5vZGUpICYmIGlzU2Nyb2xsUGFyZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUobm9kZSkpO1xufSIsICJpbXBvcnQgZ2V0U2Nyb2xsUGFyZW50IGZyb20gXCIuL2dldFNjcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuLypcbmdpdmVuIGEgRE9NIGVsZW1lbnQsIHJldHVybiB0aGUgbGlzdCBvZiBhbGwgc2Nyb2xsIHBhcmVudHMsIHVwIHRoZSBsaXN0IG9mIGFuY2Vzb3JzXG51bnRpbCB3ZSBnZXQgdG8gdGhlIHRvcCB3aW5kb3cgb2JqZWN0LiBUaGlzIGxpc3QgaXMgd2hhdCB3ZSBhdHRhY2ggc2Nyb2xsIGxpc3RlbmVyc1xudG8sIGJlY2F1c2UgaWYgYW55IG9mIHRoZXNlIHBhcmVudCBlbGVtZW50cyBzY3JvbGwsIHdlJ2xsIG5lZWQgdG8gcmUtY2FsY3VsYXRlIHRoZVxucmVmZXJlbmNlIGVsZW1lbnQncyBwb3NpdGlvbi5cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RTY3JvbGxQYXJlbnRzKGVsZW1lbnQsIGxpc3QpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG5cbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChlbGVtZW50KTtcbiAgdmFyIGlzQm9keSA9IHNjcm9sbFBhcmVudCA9PT0gKChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keSk7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsUGFyZW50KTtcbiAgdmFyIHRhcmdldCA9IGlzQm9keSA/IFt3aW5dLmNvbmNhdCh3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzU2Nyb2xsUGFyZW50KHNjcm9sbFBhcmVudCkgPyBzY3JvbGxQYXJlbnQgOiBbXSkgOiBzY3JvbGxQYXJlbnQ7XG4gIHZhciB1cGRhdGVkTGlzdCA9IGxpc3QuY29uY2F0KHRhcmdldCk7XG4gIHJldHVybiBpc0JvZHkgPyB1cGRhdGVkTGlzdCA6IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBpc0JvZHkgdGVsbHMgdXMgdGFyZ2V0IHdpbGwgYmUgYW4gSFRNTEVsZW1lbnQgaGVyZVxuICB1cGRhdGVkTGlzdC5jb25jYXQobGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZSh0YXJnZXQpKSk7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjdCwge1xuICAgIGxlZnQ6IHJlY3QueCxcbiAgICB0b3A6IHJlY3QueSxcbiAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gIH0pO1xufSIsICJpbXBvcnQgeyB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZpZXdwb3J0UmVjdCBmcm9tIFwiLi9nZXRWaWV3cG9ydFJlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudFJlY3QgZnJvbSBcIi4vZ2V0RG9jdW1lbnRSZWN0LmpzXCI7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwiLi9jb250YWlucy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgcmVjdFRvQ2xpZW50UmVjdCBmcm9tIFwiLi4vdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IHsgbWF4LCBtaW4gfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuXG5mdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBmYWxzZSwgc3RyYXRlZ3kgPT09ICdmaXhlZCcpO1xuICByZWN0LnRvcCA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRUb3A7XG4gIHJlY3QubGVmdCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgcmVjdC5ib3R0b20gPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnJpZ2h0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC53aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3QuaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QueCA9IHJlY3QubGVmdDtcbiAgcmVjdC55ID0gcmVjdC50b3A7XG4gIHJldHVybiByZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpIHtcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSkgOiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpID8gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xufSAvLyBBIFwiY2xpcHBpbmcgcGFyZW50XCIgaXMgYW4gb3ZlcmZsb3dhYmxlIGNvbnRhaW5lciB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxuLy8gY2xpcHBpbmcgKG9yIGhpZGluZykgb3ZlcmZsb3dpbmcgZWxlbWVudHMgd2l0aCBhIHBvc2l0aW9uIGRpZmZlcmVudCBmcm9tXG4vLyBgaW5pdGlhbGBcblxuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkge1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gbGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG4gIHZhciBjYW5Fc2NhcGVDbGlwcGluZyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG4gIHZhciBjbGlwcGVyRWxlbWVudCA9IGNhbkVzY2FwZUNsaXBwaW5nICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIGlmICghaXNFbGVtZW50KGNsaXBwZXJFbGVtZW50KSkge1xuICAgIHJldHVybiBbXTtcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMTQxNFxuXG5cbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNsaXBwaW5nUGFyZW50KSB7XG4gICAgcmV0dXJuIGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09ICdib2R5JztcbiAgfSk7XG59IC8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2Zcbi8vIGNsaXBwaW5nIHBhcmVudHNcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoZWxlbWVudCwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSwgc3RyYXRlZ3kpIHtcbiAgdmFyIG1haW5DbGlwcGluZ1BhcmVudHMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nUGFyZW50cycgPyBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gW10uY29uY2F0KG1haW5DbGlwcGluZ1BhcmVudHMsIFtyb290Qm91bmRhcnldKTtcbiAgdmFyIGZpcnN0Q2xpcHBpbmdQYXJlbnQgPSBjbGlwcGluZ1BhcmVudHNbMF07XG4gIHZhciBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ1BhcmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2NSZWN0LCBjbGlwcGluZ1BhcmVudCkge1xuICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KTtcbiAgICBhY2NSZWN0LnRvcCA9IG1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICBhY2NSZWN0LmxlZnQgPSBtYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuICAgIHJldHVybiBhY2NSZWN0O1xuICB9LCBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBmaXJzdENsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkpO1xuICBjbGlwcGluZ1JlY3Qud2lkdGggPSBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LmhlaWdodCA9IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wO1xuICBjbGlwcGluZ1JlY3QueCA9IGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QueSA9IGNsaXBwaW5nUmVjdC50b3A7XG4gIHJldHVybiBjbGlwcGluZ1JlY3Q7XG59IiwgImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LCBzdGFydCwgZW5kIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50ID8gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gIHZhciBvZmZzZXRzO1xuXG4gIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgdG9wOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBib3R0b206XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcmlnaHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBsZWZ0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICB9O1xuICB9XG5cbiAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgaWYgKG1haW5BeGlzICE9IG51bGwpIHtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBlbmQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gKyAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufSIsICJpbXBvcnQgZ2V0Q2xpcHBpbmdSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4vY29tcHV0ZU9mZnNldHMuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IGNsaXBwaW5nUGFyZW50cywgcmVmZXJlbmNlLCBwb3BwZXIsIGJvdHRvbSwgdG9wLCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4vbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuL2V4cGFuZFRvSGFzaE1hcC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBzdGF0ZS5wbGFjZW1lbnQgOiBfb3B0aW9ucyRwbGFjZW1lbnQsXG4gICAgICBfb3B0aW9ucyRzdHJhdGVneSA9IF9vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgc3RyYXRlZ3kgPSBfb3B0aW9ucyRzdHJhdGVneSA9PT0gdm9pZCAwID8gc3RhdGUuc3RyYXRlZ3kgOiBfb3B0aW9ucyRzdHJhdGVneSxcbiAgICAgIF9vcHRpb25zJGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zJGJvdW5kYXJ5ID09PSB2b2lkIDAgPyBjbGlwcGluZ1BhcmVudHMgOiBfb3B0aW9ucyRib3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9PT0gdm9pZCAwID8gdmlld3BvcnQgOiBfb3B0aW9ucyRyb290Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRlbGVtZW50Q29udGUgPSBfb3B0aW9ucy5lbGVtZW50Q29udGV4dCxcbiAgICAgIGVsZW1lbnRDb250ZXh0ID0gX29wdGlvbnMkZWxlbWVudENvbnRlID09PSB2b2lkIDAgPyBwb3BwZXIgOiBfb3B0aW9ucyRlbGVtZW50Q29udGUsXG4gICAgICBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9IF9vcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zJHBhZGRpbmcgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRwYWRkaW5nO1xuICB2YXIgcGFkZGluZ09iamVjdCA9IG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG4gIHZhciBhbHRDb250ZXh0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHJlZmVyZW5jZSA6IHBvcHBlcjtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5LCBzdHJhdGVneSk7XG4gIHZhciByZWZlcmVuY2VDbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZSk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICBlbGVtZW50OiBwb3BwZXJSZWN0LFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pO1xuICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyUmVjdCwgcG9wcGVyT2Zmc2V0cykpO1xuICB2YXIgZWxlbWVudENsaWVudFJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcG9wcGVyQ2xpZW50UmVjdCA6IHJlZmVyZW5jZUNsaWVudFJlY3Q7IC8vIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIHJlY3RcbiAgLy8gMCBvciBuZWdhdGl2ZSA9IHdpdGhpbiB0aGUgY2xpcHBpbmcgcmVjdFxuXG4gIHZhciBvdmVyZmxvd09mZnNldHMgPSB7XG4gICAgdG9wOiBjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3AsXG4gICAgYm90dG9tOiBlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20sXG4gICAgbGVmdDogY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0LFxuICAgIHJpZ2h0OiBlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHRcbiAgfTtcbiAgdmFyIG9mZnNldERhdGEgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDsgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuXG4gIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcbiAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0RGF0YVtwbGFjZW1lbnRdO1xuICAgIE9iamVjdC5rZXlzKG92ZXJmbG93T2Zmc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XG4gICAgICB2YXIgYXhpcyA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAneScgOiAneCc7XG4gICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG59IiwgImltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgeyB2YXJpYXRpb25QbGFjZW1lbnRzLCBiYXNlUGxhY2VtZW50cywgcGxhY2VtZW50cyBhcyBhbGxQbGFjZW1lbnRzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9IF9vcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9PT0gdm9pZCAwID8gYWxsUGxhY2VtZW50cyA6IF9vcHRpb25zJGFsbG93ZWRBdXRvUDtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpO1xuICB2YXIgcGxhY2VtZW50cyA9IHZhcmlhdGlvbiA/IGZsaXBWYXJpYXRpb25zID8gdmFyaWF0aW9uUGxhY2VtZW50cyA6IHZhcmlhdGlvblBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHZhcmlhdGlvbjtcbiAgfSkgOiBiYXNlUGxhY2VtZW50cztcbiAgdmFyIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhbGxvd2VkQXV0b1BsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpID49IDA7XG4gIH0pO1xuXG4gIGlmIChhbGxvd2VkUGxhY2VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV06IEZsb3cgc2VlbXMgdG8gaGF2ZSBwcm9ibGVtcyB3aXRoIHR3byBhcnJheSB1bmlvbnMuLi5cblxuXG4gIHZhciBvdmVyZmxvd3MgPSBhbGxvd2VkUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KVtnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCldO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG92ZXJmbG93cykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBvdmVyZmxvd3NbYV0gLSBvdmVyZmxvd3NbYl07XG4gIH0pO1xufSIsICJpbXBvcnQgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVBdXRvUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgYm90dG9tLCB0b3AsIHN0YXJ0LCByaWdodCwgbGVmdCwgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xufVxuXG5mdW5jdGlvbiBmbGlwKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzID0gb3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRmbGlwVmFyaWF0aW8sXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICB2YXIgcGxhY2VtZW50cyA9IFtwcmVmZXJyZWRQbGFjZW1lbnRdLmNvbmNhdChmYWxsYmFja1BsYWNlbWVudHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9uczogZmxpcFZhcmlhdGlvbnMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgIH0pIDogcGxhY2VtZW50KTtcbiAgfSwgW10pO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBjaGVja3NNYXAgPSBuZXcgTWFwKCk7XG4gIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgIHZhciBfYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBpc1N0YXJ0VmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHN0YXJ0O1xuICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pO1xuICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblxuICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcbiAgICAgIG1haW5WYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIH1cblxuICAgIHZhciBhbHRWYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIHZhciBjaGVja3MgPSBbXTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja3MuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICByZXR1cm4gY2hlY2s7XG4gICAgfSkpIHtcbiAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgIG1ha2VGYWxsYmFja0NoZWNrcyA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XG4gIH1cblxuICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMg4oCTIHJlc2VhcmNoIGxhdGVyXG4gICAgdmFyIG51bWJlck9mQ2hlY2tzID0gZmxpcFZhcmlhdGlvbnMgPyAzIDogMTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMuZmluZChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICAgIHZhciBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XG5cbiAgICAgICAgaWYgKGNoZWNrcykge1xuICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIgX2kgPSBudW1iZXJPZkNoZWNrczsgX2kgPiAwOyBfaS0tKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKF9pKTtcblxuICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCA9IHRydWU7XG4gICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgfVxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZmxpcCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBmbGlwLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddLFxuICBkYXRhOiB7XG4gICAgX3NraXA6IGZhbHNlXG4gIH1cbn07IiwgImltcG9ydCB7IHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuXG5mdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xuICBpZiAocHJldmVudGVkT2Zmc2V0cyA9PT0gdm9pZCAwKSB7XG4gICAgcHJldmVudGVkT2Zmc2V0cyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCAtIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGggLSBwcmV2ZW50ZWRPZmZzZXRzLnhcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG92ZXJmbG93KSB7XG4gIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoaWRlKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBlbGVtZW50Q29udGV4dDogJ3JlZmVyZW5jZSdcbiAgfSk7XG4gIHZhciBwb3BwZXJBbHRPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgfSk7XG4gIHZhciByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhyZWZlcmVuY2VPdmVyZmxvdywgcmVmZXJlbmNlUmVjdCk7XG4gIHZhciBwb3BwZXJFc2NhcGVPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocG9wcGVyQWx0T3ZlcmZsb3csIHBvcHBlclJlY3QsIHByZXZlbnRlZE9mZnNldHMpO1xuICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcbiAgdmFyIGhhc1BvcHBlckVzY2FwZWQgPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocG9wcGVyRXNjYXBlT2Zmc2V0cyk7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSB7XG4gICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgcG9wcGVyRXNjYXBlT2Zmc2V0czogcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICBpc1JlZmVyZW5jZUhpZGRlbjogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuICB9O1xuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoaWRlJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXSxcbiAgZm46IGhpZGVcbn07IiwgImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBwbGFjZW1lbnRzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgcmVjdHMsIG9mZnNldCkge1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgdmFyIGludmVydERpc3RhbmNlID0gW2xlZnQsIHRvcF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8gLTEgOiAxO1xuXG4gIHZhciBfcmVmID0gdHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IG9mZnNldChPYmplY3QuYXNzaWduKHt9LCByZWN0cywge1xuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pKSA6IG9mZnNldCxcbiAgICAgIHNraWRkaW5nID0gX3JlZlswXSxcbiAgICAgIGRpc3RhbmNlID0gX3JlZlsxXTtcblxuICBza2lkZGluZyA9IHNraWRkaW5nIHx8IDA7XG4gIGRpc3RhbmNlID0gKGRpc3RhbmNlIHx8IDApICogaW52ZXJ0RGlzdGFuY2U7XG4gIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IHtcbiAgICB4OiBkaXN0YW5jZSxcbiAgICB5OiBza2lkZGluZ1xuICB9IDoge1xuICAgIHg6IHNraWRkaW5nLFxuICAgIHk6IGRpc3RhbmNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIG9mZnNldChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYyLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRvZmZzZXQgPSBvcHRpb25zLm9mZnNldCxcbiAgICAgIG9mZnNldCA9IF9vcHRpb25zJG9mZnNldCA9PT0gdm9pZCAwID8gWzAsIDBdIDogX29wdGlvbnMkb2Zmc2V0O1xuICB2YXIgZGF0YSA9IHBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCBzdGF0ZS5yZWN0cywgb2Zmc2V0KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQgPSBkYXRhW3N0YXRlLnBsYWNlbWVudF0sXG4gICAgICB4ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50LngsXG4gICAgICB5ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50Lnk7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnggKz0geDtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueSArPSB5O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdvZmZzZXQnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIGZuOiBvZmZzZXRcbn07IiwgImltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZU9mZnNldHMuanNcIjtcblxuZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuICAvLyBwcm9wZXJseSBwb3NpdGlvbmVkIG5lYXIgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxuICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcbiAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdyZWFkJyxcbiAgZm46IHBvcHBlck9mZnNldHMsXG4gIGRhdGE6IHt9XG59OyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBbHRBeGlzKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd4JyA/ICd5JyA6ICd4Jztcbn0iLCAiaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tLCBzdGFydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEFsdEF4aXMgZnJvbSBcIi4uL3V0aWxzL2dldEFsdEF4aXMuanNcIjtcbmltcG9ydCB7IHdpdGhpbiwgd2l0aGluTWF4Q2xhbXAgfSBmcm9tIFwiLi4vdXRpbHMvd2l0aGluLmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi4vdXRpbHMvZ2V0RnJlc2hTaWRlT2JqZWN0LmpzXCI7XG5pbXBvcnQgeyBtaW4gYXMgbWF0aE1pbiwgbWF4IGFzIG1hdGhNYXggfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuXG5mdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXIgPSBvcHRpb25zLnRldGhlcixcbiAgICAgIHRldGhlciA9IF9vcHRpb25zJHRldGhlciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHRldGhlcixcbiAgICAgIF9vcHRpb25zJHRldGhlck9mZnNldCA9IG9wdGlvbnMudGV0aGVyT2Zmc2V0LFxuICAgICAgdGV0aGVyT2Zmc2V0ID0gX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkdGV0aGVyT2Zmc2V0O1xuICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeVxuICB9KTtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9ICF2YXJpYXRpb247XG4gIHZhciBtYWluQXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGFsdEF4aXMgPSBnZXRBbHRBeGlzKG1haW5BeGlzKTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IHRldGhlck9mZnNldChPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHRldGhlck9mZnNldDtcbiAgdmFyIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXRWYWx1ZSA9PT0gJ251bWJlcicgPyB7XG4gICAgbWFpbkF4aXM6IHRldGhlck9mZnNldFZhbHVlLFxuICAgIGFsdEF4aXM6IHRldGhlck9mZnNldFZhbHVlXG4gIH0gOiBPYmplY3QuYXNzaWduKHtcbiAgICBtYWluQXhpczogMCxcbiAgICBhbHRBeGlzOiAwXG4gIH0sIHRldGhlck9mZnNldFZhbHVlKTtcbiAgdmFyIG9mZnNldE1vZGlmaWVyU3RhdGUgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldCA/IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0W3N0YXRlLnBsYWNlbWVudF0gOiBudWxsO1xuICB2YXIgZGF0YSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQ7XG5cbiAgICB2YXIgbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc107XG4gICAgdmFyIG1pbiA9IG9mZnNldCArIG92ZXJmbG93W21haW5TaWRlXTtcbiAgICB2YXIgbWF4ID0gb2Zmc2V0IC0gb3ZlcmZsb3dbYWx0U2lkZV07XG4gICAgdmFyIGFkZGl0aXZlID0gdGV0aGVyID8gLXBvcHBlclJlY3RbbGVuXSAvIDIgOiAwO1xuICAgIHZhciBtaW5MZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gcmVmZXJlbmNlUmVjdFtsZW5dIDogcG9wcGVyUmVjdFtsZW5dO1xuICAgIHZhciBtYXhMZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gLXBvcHBlclJlY3RbbGVuXSA6IC1yZWZlcmVuY2VSZWN0W2xlbl07IC8vIFdlIG5lZWQgdG8gaW5jbHVkZSB0aGUgYXJyb3cgaW4gdGhlIGNhbGN1bGF0aW9uIHNvIHRoZSBhcnJvdyBkb2Vzbid0IGdvXG4gICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xuXG4gICAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICAgIHZhciBhcnJvd1JlY3QgPSB0ZXRoZXIgJiYgYXJyb3dFbGVtZW50ID8gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpIDoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuICAgIHZhciBhcnJvd1BhZGRpbmdPYmplY3QgPSBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10gPyBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10ucGFkZGluZyA6IGdldEZyZXNoU2lkZU9iamVjdCgpO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNaW4gPSBhcnJvd1BhZGRpbmdPYmplY3RbbWFpblNpZGVdO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNYXggPSBhcnJvd1BhZGRpbmdPYmplY3RbYWx0U2lkZV07IC8vIElmIHRoZSByZWZlcmVuY2UgbGVuZ3RoIGlzIHNtYWxsZXIgdGhhbiB0aGUgYXJyb3cgbGVuZ3RoLCB3ZSBkb24ndCB3YW50XG4gICAgLy8gdG8gaW5jbHVkZSBpdHMgZnVsbCBzaXplIGluIHRoZSBjYWxjdWxhdGlvbi4gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbFxuICAgIC8vIGFuZCBuZWFyIHRoZSBlZGdlIG9mIGEgYm91bmRhcnksIHRoZSBwb3BwZXIgY2FuIG92ZXJmbG93IGV2ZW4gaWYgdGhlXG4gICAgLy8gcmVmZXJlbmNlIGlzIG5vdCBvdmVyZmxvd2luZyBhcyB3ZWxsIChlLmcuIHZpcnR1YWwgZWxlbWVudHMgd2l0aCBub1xuICAgIC8vIHdpZHRoIG9yIGhlaWdodClcblxuICAgIHZhciBhcnJvd0xlbiA9IHdpdGhpbigwLCByZWZlcmVuY2VSZWN0W2xlbl0sIGFycm93UmVjdFtsZW5dKTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiAtIGFkZGl0aXZlIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXMgOiBtaW5MZW4gLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcztcbiAgICB2YXIgbWF4T2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gLXJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgKyBhZGRpdGl2ZSArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWF4TGVuICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3cgJiYgZ2V0T2Zmc2V0UGFyZW50KHN0YXRlLmVsZW1lbnRzLmFycm93KTtcbiAgICB2YXIgY2xpZW50T2Zmc2V0ID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBtYWluQXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJCA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbbWFpbkF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkIDogMDtcbiAgICB2YXIgdGV0aGVyTWluID0gb2Zmc2V0ICsgbWluT2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIGNsaWVudE9mZnNldDtcbiAgICB2YXIgdGV0aGVyTWF4ID0gb2Zmc2V0ICsgbWF4T2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZTtcbiAgICB2YXIgcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1hdGhNaW4obWluLCB0ZXRoZXJNaW4pIDogbWluLCBvZmZzZXQsIHRldGhlciA/IG1hdGhNYXgobWF4LCB0ZXRoZXJNYXgpIDogbWF4KTtcbiAgICBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldDtcbiAgICBkYXRhW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldCAtIG9mZnNldDtcbiAgfVxuXG4gIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICB2YXIgX29mZnNldE1vZGlmaWVyU3RhdGUkMjtcblxuICAgIHZhciBfbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gdG9wIDogbGVmdDtcblxuICAgIHZhciBfYWx0U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBib3R0b20gOiByaWdodDtcblxuICAgIHZhciBfb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1thbHRBeGlzXTtcblxuICAgIHZhciBfbGVuID0gYWx0QXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgdmFyIF9taW4gPSBfb2Zmc2V0ICsgb3ZlcmZsb3dbX21haW5TaWRlXTtcblxuICAgIHZhciBfbWF4ID0gX29mZnNldCAtIG92ZXJmbG93W19hbHRTaWRlXTtcblxuICAgIHZhciBpc09yaWdpblNpZGUgPSBbdG9wLCBsZWZ0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IChfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyID0gb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogb2Zmc2V0TW9kaWZpZXJTdGF0ZVthbHRBeGlzXSkgIT0gbnVsbCA/IF9vZmZzZXRNb2RpZmllclN0YXRlJDIgOiAwO1xuXG4gICAgdmFyIF90ZXRoZXJNaW4gPSBpc09yaWdpblNpZGUgPyBfbWluIDogX29mZnNldCAtIHJlZmVyZW5jZVJlY3RbX2xlbl0gLSBwb3BwZXJSZWN0W19sZW5dIC0gX29mZnNldE1vZGlmaWVyVmFsdWUgKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpcztcblxuICAgIHZhciBfdGV0aGVyTWF4ID0gaXNPcmlnaW5TaWRlID8gX29mZnNldCArIHJlZmVyZW5jZVJlY3RbX2xlbl0gKyBwb3BwZXJSZWN0W19sZW5dIC0gX29mZnNldE1vZGlmaWVyVmFsdWUgLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpcyA6IF9tYXg7XG5cbiAgICB2YXIgX3ByZXZlbnRlZE9mZnNldCA9IHRldGhlciAmJiBpc09yaWdpblNpZGUgPyB3aXRoaW5NYXhDbGFtcChfdGV0aGVyTWluLCBfb2Zmc2V0LCBfdGV0aGVyTWF4KSA6IHdpdGhpbih0ZXRoZXIgPyBfdGV0aGVyTWluIDogX21pbiwgX29mZnNldCwgdGV0aGVyID8gX3RldGhlck1heCA6IF9tYXgpO1xuXG4gICAgcG9wcGVyT2Zmc2V0c1thbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQ7XG4gICAgZGF0YVthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQgLSBfb2Zmc2V0O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogcHJldmVudE92ZXJmbG93LFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddXG59OyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIVE1MRWxlbWVudFNjcm9sbChlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3BcbiAgfTtcbn0iLCAiaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEhUTUxFbGVtZW50U2Nyb2xsIGZyb20gXCIuL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgIHJldHVybiBnZXRXaW5kb3dTY3JvbGwobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICB9XG59IiwgImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZVNjcm9sbCBmcm9tIFwiLi9nZXROb2RlU2Nyb2xsLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIGlzRWxlbWVudFNjYWxlZChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHNjYWxlWCA9IHJvdW5kKHJlY3Qud2lkdGgpIC8gZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAxO1xuICB2YXIgc2NhbGVZID0gcm91bmQocmVjdC5oZWlnaHQpIC8gZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMTtcbiAgcmV0dXJuIHNjYWxlWCAhPT0gMSB8fCBzY2FsZVkgIT09IDE7XG59IC8vIFJldHVybnMgdGhlIGNvbXBvc2l0ZSByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC5cbi8vIENvbXBvc2l0ZSBtZWFucyBpdCB0YWtlcyBpbnRvIGFjY291bnQgdHJhbnNmb3JtcyBhcyB3ZWxsIGFzIGxheW91dC5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wb3NpdGVSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnQsIGlzRml4ZWQpIHtcbiAgaWYgKGlzRml4ZWQgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudElzU2NhbGVkID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGlzRWxlbWVudFNjYWxlZChvZmZzZXRQYXJlbnQpO1xuICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnRJc1NjYWxlZCwgaXNGaXhlZCk7XG4gIHZhciBzY3JvbGwgPSB7XG4gICAgc2Nyb2xsTGVmdDogMCxcbiAgICBzY3JvbGxUb3A6IDBcbiAgfTtcbiAgdmFyIG9mZnNldHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCkge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMDc4XG4gICAgaXNTY3JvbGxQYXJlbnQoZG9jdW1lbnRFbGVtZW50KSkge1xuICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgIG9mZnNldHMgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50LCB0cnVlKTtcbiAgICAgIG9mZnNldHMueCArPSBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSArPSBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBvZmZzZXRzLnggPSBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICB9O1xufSIsICJpbXBvcnQgeyBtb2RpZmllclBoYXNlcyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiOyAvLyBzb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5ODc1MjU1XG5cbmZ1bmN0aW9uIG9yZGVyKG1vZGlmaWVycykge1xuICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICB2YXIgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBtYXAuc2V0KG1vZGlmaWVyLm5hbWUsIG1vZGlmaWVyKTtcbiAgfSk7IC8vIE9uIHZpc2l0aW5nIG9iamVjdCwgY2hlY2sgZm9yIGl0cyBkZXBlbmRlbmNpZXMgYW5kIHZpc2l0IHRoZW0gcmVjdXJzaXZlbHlcblxuICBmdW5jdGlvbiBzb3J0KG1vZGlmaWVyKSB7XG4gICAgdmlzaXRlZC5hZGQobW9kaWZpZXIubmFtZSk7XG4gICAgdmFyIHJlcXVpcmVzID0gW10uY29uY2F0KG1vZGlmaWVyLnJlcXVpcmVzIHx8IFtdLCBtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzIHx8IFtdKTtcbiAgICByZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMoZGVwKSkge1xuICAgICAgICB2YXIgZGVwTW9kaWZpZXIgPSBtYXAuZ2V0KGRlcCk7XG5cbiAgICAgICAgaWYgKGRlcE1vZGlmaWVyKSB7XG4gICAgICAgICAgc29ydChkZXBNb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXN1bHQucHVzaChtb2RpZmllcik7XG4gIH1cblxuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBpZiAoIXZpc2l0ZWQuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAvLyBjaGVjayBmb3IgdmlzaXRlZCBvYmplY3RcbiAgICAgIHNvcnQobW9kaWZpZXIpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9yZGVyTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICAvLyBvcmRlciBiYXNlZCBvbiBkZXBlbmRlbmNpZXNcbiAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcihtb2RpZmllcnMpOyAvLyBvcmRlciBiYXNlZCBvbiBwaGFzZVxuXG4gIHJldHVybiBtb2RpZmllclBoYXNlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGhhc2UpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIHJldHVybiBtb2RpZmllci5waGFzZSA9PT0gcGhhc2U7XG4gICAgfSkpO1xuICB9LCBbXSk7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciBwZW5kaW5nO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghcGVuZGluZykge1xuICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVuZGluZztcbiAgfTtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VCeU5hbWUobW9kaWZpZXJzKSB7XG4gIHZhciBtZXJnZWQgPSBtb2RpZmllcnMucmVkdWNlKGZ1bmN0aW9uIChtZXJnZWQsIGN1cnJlbnQpIHtcbiAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWRbY3VycmVudC5uYW1lXTtcbiAgICBtZXJnZWRbY3VycmVudC5uYW1lXSA9IGV4aXN0aW5nID8gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcsIGN1cnJlbnQsIHtcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLm9wdGlvbnMsIGN1cnJlbnQub3B0aW9ucyksXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5kYXRhLCBjdXJyZW50LmRhdGEpXG4gICAgfSkgOiBjdXJyZW50O1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcblxuICByZXR1cm4gT2JqZWN0LmtleXMobWVyZ2VkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBtZXJnZWRba2V5XTtcbiAgfSk7XG59IiwgImltcG9ydCBnZXRDb21wb3NpdGVSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgb3JkZXJNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvb3JkZXJNb2RpZmllcnMuanNcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwiLi91dGlscy9kZWJvdW5jZS5qc1wiO1xuaW1wb3J0IG1lcmdlQnlOYW1lIGZyb20gXCIuL3V0aWxzL21lcmdlQnlOYW1lLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtb2RpZmllcnM6IFtdLFxuICBzdHJhdGVneTogJ2Fic29sdXRlJ1xufTtcblxuZnVuY3Rpb24gYXJlVmFsaWRFbGVtZW50cygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAhYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuICEoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHBlckdlbmVyYXRvcihnZW5lcmF0b3JPcHRpb25zKSB7XG4gIGlmIChnZW5lcmF0b3JPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBnZW5lcmF0b3JPcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX2dlbmVyYXRvck9wdGlvbnMgPSBnZW5lcmF0b3JPcHRpb25zLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcbiAgICAgIGRlZmF1bHRNb2RpZmllcnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPT09IHZvaWQgMCA/IFtdIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLFxuICAgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICBvcmRlcmVkTW9kaWZpZXJzOiBbXSxcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAgbW9kaWZpZXJzRGF0YToge30sXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyOiBwb3BwZXJcbiAgICAgIH0sXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9O1xuICAgIHZhciBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgdmFyIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdmFyIGluc3RhbmNlID0ge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgc2V0T3B0aW9uczogZnVuY3Rpb24gc2V0T3B0aW9ucyhzZXRPcHRpb25zQWN0aW9uKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIHNldE9wdGlvbnNBY3Rpb24gPT09ICdmdW5jdGlvbicgPyBzZXRPcHRpb25zQWN0aW9uKHN0YXRlLm9wdGlvbnMpIDogc2V0T3B0aW9uc0FjdGlvbjtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBzdGF0ZS5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIHN0YXRlLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogaXNFbGVtZW50KHJlZmVyZW5jZSkgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UpIDogcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50ID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlLmNvbnRleHRFbGVtZW50KSA6IFtdLFxuICAgICAgICAgIHBvcHBlcjogbGlzdFNjcm9sbFBhcmVudHMocG9wcGVyKVxuICAgICAgICB9OyAvLyBPcmRlcnMgdGhlIG1vZGlmaWVycyBiYXNlZCBvbiB0aGVpciBkZXBlbmRlbmNpZXMgYW5kIGBwaGFzZWBcbiAgICAgICAgLy8gcHJvcGVydGllc1xuXG4gICAgICAgIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJNb2RpZmllcnMobWVyZ2VCeU5hbWUoW10uY29uY2F0KGRlZmF1bHRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSkpOyAvLyBTdHJpcCBvdXQgZGlzYWJsZWQgbW9kaWZpZXJzXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0uZW5hYmxlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJ1bk1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgLy8gU3luYyB1cGRhdGUg4oCTIGl0IHdpbGwgYWx3YXlzIGJlIGV4ZWN1dGVkLCBldmVuIGlmIG5vdCBuZWNlc3NhcnkuIFRoaXNcbiAgICAgIC8vIGlzIHVzZWZ1bCBmb3IgbG93IGZyZXF1ZW5jeSB1cGRhdGVzIHdoZXJlIHN5bmMgYmVoYXZpb3Igc2ltcGxpZmllcyB0aGVcbiAgICAgIC8vIGxvZ2ljLlxuICAgICAgLy8gRm9yIGhpZ2ggZnJlcXVlbmN5IHVwZGF0ZXMgKGUuZy4gYHJlc2l6ZWAgYW5kIGBzY3JvbGxgIGV2ZW50cyksIGFsd2F5c1xuICAgICAgLy8gcHJlZmVyIHRoZSBhc3luYyBQb3BwZXIjdXBkYXRlIG1ldGhvZFxuICAgICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuICAgICAgICBpZiAoaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3N0YXRlJGVsZW1lbnRzID0gc3RhdGUuZWxlbWVudHMsXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxuICAgICAgICAgICAgcG9wcGVyID0gX3N0YXRlJGVsZW1lbnRzLnBvcHBlcjsgLy8gRG9uJ3QgcHJvY2VlZCBpZiBgcmVmZXJlbmNlYCBvciBgcG9wcGVyYCBhcmUgbm90IHZhbGlkIGVsZW1lbnRzXG4gICAgICAgIC8vIGFueW1vcmVcblxuICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFN0b3JlIHRoZSByZWZlcmVuY2UgYW5kIHBvcHBlciByZWN0cyB0byBiZSByZWFkIGJ5IG1vZGlmaWVyc1xuXG5cbiAgICAgICAgc3RhdGUucmVjdHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBnZXRDb21wb3NpdGVSZWN0KHJlZmVyZW5jZSwgZ2V0T2Zmc2V0UGFyZW50KHBvcHBlciksIHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCcpLFxuICAgICAgICAgIHBvcHBlcjogZ2V0TGF5b3V0UmVjdChwb3BwZXIpXG4gICAgICAgIH07IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlc2V0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZS4gVGhlXG4gICAgICAgIC8vIG1vc3QgY29tbW9uIHVzZSBjYXNlIGZvciB0aGlzIGlzIHRoZSBgZmxpcGAgbW9kaWZpZXIgY2hhbmdpbmcgdGhlXG4gICAgICAgIC8vIHBsYWNlbWVudCwgd2hpY2ggdGhlbiBuZWVkcyB0byByZS1ydW4gYWxsIHRoZSBtb2RpZmllcnMsIGJlY2F1c2UgdGhlXG4gICAgICAgIC8vIGxvZ2ljIHdhcyBwcmV2aW91c2x5IHJhbiBmb3IgdGhlIHByZXZpb3VzIHBsYWNlbWVudCBhbmQgaXMgdGhlcmVmb3JlXG4gICAgICAgIC8vIHN0YWxlL2luY29ycmVjdFxuXG4gICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50OyAvLyBPbiBlYWNoIHVwZGF0ZSBjeWNsZSwgdGhlIGBtb2RpZmllcnNEYXRhYCBwcm9wZXJ0eSBmb3IgZWFjaCBtb2RpZmllclxuICAgICAgICAvLyBpcyBmaWxsZWQgd2l0aCB0aGUgaW5pdGlhbCBkYXRhIHNwZWNpZmllZCBieSB0aGUgbW9kaWZpZXIuIFRoaXMgbWVhbnNcbiAgICAgICAgLy8gaXQgZG9lc24ndCBwZXJzaXN0IGFuZCBpcyBmcmVzaCBvbiBlYWNoIHVwZGF0ZS5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHBlcnNpc3RlbnQgZGF0YSwgdXNlIGAke25hbWV9I3BlcnNpc3RlbnRgXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5tb2RpZmllcnNEYXRhW21vZGlmaWVyLm5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIuZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGlmIChzdGF0ZS5yZXNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3N0YXRlJG9yZGVyZWRNb2RpZmllID0gc3RhdGUub3JkZXJlZE1vZGlmaWVyc1tpbmRleF0sXG4gICAgICAgICAgICAgIGZuID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLmZuLFxuICAgICAgICAgICAgICBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm9wdGlvbnMsXG4gICAgICAgICAgICAgIF9vcHRpb25zID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9PT0gdm9pZCAwID8ge30gOiBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyLFxuICAgICAgICAgICAgICBuYW1lID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm5hbWU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGZuKHtcbiAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBfb3B0aW9ucyxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgICAgICAgICB9KSB8fCBzdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBBc3luYyBhbmQgb3B0aW1pc3RpY2FsbHkgb3B0aW1pemVkIHVwZGF0ZSDigJMgaXQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgaWZcbiAgICAgIC8vIG5vdCBuZWNlc3NhcnkgKGRlYm91bmNlZCB0byBydW4gYXQgbW9zdCBvbmNlLXBlci10aWNrKVxuICAgICAgdXBkYXRlOiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIGluc3RhbmNlLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIGlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgIG9wdGlvbnMub25GaXJzdFVwZGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgYmVmb3JlIHRoZSBmaXJzdFxuICAgIC8vIHVwZGF0ZSBjeWNsZSBydW5zLiBUaGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIHVwZGF0ZVxuICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XG4gICAgLy8gb3RoZXIgbW9kaWZpZXJzIG5lZWQgdG8gdXNlLCBidXQgdGhlIG1vZGlmaWVyIGlzIHJ1biBhZnRlciB0aGUgZGVwZW5kZW50XG4gICAgLy8gb25lLlxuXG4gICAgZnVuY3Rpb24gcnVuTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgICAgICAgX3JlZiRvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9ucyA9IF9yZWYkb3B0aW9ucyA9PT0gdm9pZCAwID8ge30gOiBfcmVmJG9wdGlvbnMsXG4gICAgICAgICAgICBlZmZlY3QgPSBfcmVmLmVmZmVjdDtcblxuICAgICAgICBpZiAodHlwZW9mIGVmZmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBjbGVhbnVwRm4gPSBlZmZlY3Qoe1xuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBub29wRm4gPSBmdW5jdGlvbiBub29wRm4oKSB7fTtcblxuICAgICAgICAgIGVmZmVjdENsZWFudXBGbnMucHVzaChjbGVhbnVwRm4gfHwgbm9vcEZuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9KTtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG59XG5leHBvcnQgdmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3IoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBkZXRlY3RPdmVyZmxvdyB9OyIsICJpbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5pbXBvcnQgcG9wcGVyT2Zmc2V0cyBmcm9tIFwiLi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanNcIjtcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanNcIjtcbmltcG9ydCBvZmZzZXQgZnJvbSBcIi4vbW9kaWZpZXJzL29mZnNldC5qc1wiO1xuaW1wb3J0IGZsaXAgZnJvbSBcIi4vbW9kaWZpZXJzL2ZsaXAuanNcIjtcbmltcG9ydCBwcmV2ZW50T3ZlcmZsb3cgZnJvbSBcIi4vbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGFycm93IGZyb20gXCIuL21vZGlmaWVycy9hcnJvdy5qc1wiO1xuaW1wb3J0IGhpZGUgZnJvbSBcIi4vbW9kaWZpZXJzL2hpZGUuanNcIjtcbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzLCBjb21wdXRlU3R5bGVzLCBhcHBseVN0eWxlcywgb2Zmc2V0LCBmbGlwLCBwcmV2ZW50T3ZlcmZsb3csIGFycm93LCBoaWRlXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyLCBwb3BwZXJHZW5lcmF0b3IsIGRlZmF1bHRNb2RpZmllcnMsIGRldGVjdE92ZXJmbG93IH07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckxpdGUgfSBmcm9tIFwiLi9wb3BwZXItbGl0ZS5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCAqIGZyb20gXCIuL21vZGlmaWVycy9pbmRleC5qc1wiOyIsICJleHBvcnQgY29uc3QgUk9VTkRfQVJST1cgPVxuICAnPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTAgNnMxLjc5Ni0uMDEzIDQuNjctMy42MTVDNS44NTEuOSA2LjkzLjAwNiA4IDBjMS4wNy0uMDA2IDIuMTQ4Ljg4NyAzLjM0MyAyLjM4NUMxNC4yMzMgNi4wMDUgMTYgNiAxNiA2SDB6XCI+PC9zdmc+JztcblxuZXhwb3J0IGNvbnN0IEJPWF9DTEFTUyA9IGBfX05BTUVTUEFDRV9QUkVGSVhfXy1ib3hgO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfQ0xBU1MgPSBgX19OQU1FU1BBQ0VfUFJFRklYX18tY29udGVudGA7XG5leHBvcnQgY29uc3QgQkFDS0RST1BfQ0xBU1MgPSBgX19OQU1FU1BBQ0VfUFJFRklYX18tYmFja2Ryb3BgO1xuZXhwb3J0IGNvbnN0IEFSUk9XX0NMQVNTID0gYF9fTkFNRVNQQUNFX1BSRUZJWF9fLWFycm93YDtcbmV4cG9ydCBjb25zdCBTVkdfQVJST1dfQ0xBU1MgPSBgX19OQU1FU1BBQ0VfUFJFRklYX18tc3ZnLWFycm93YDtcblxuZXhwb3J0IGNvbnN0IFRPVUNIX09QVElPTlMgPSB7cGFzc2l2ZTogdHJ1ZSwgY2FwdHVyZTogdHJ1ZX07XG5cbmV4cG9ydCBjb25zdCBUSVBQWV9ERUZBVUxUX0FQUEVORF9UTyA9ICgpID0+IGRvY3VtZW50LmJvZHk7XG4iLCAiaW1wb3J0IHtCYXNlUGxhY2VtZW50LCBQbGFjZW1lbnR9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzT3duUHJvcGVydHkoXG4gIG9iajogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gIGtleTogc3RyaW5nXG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIHt9Lmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm48VD4oXG4gIHZhbHVlOiBUIHwgW1QgfCBudWxsLCBUIHwgbnVsbF0sXG4gIGluZGV4OiBudW1iZXIsXG4gIGRlZmF1bHRWYWx1ZTogVCB8IFtULCBUXVxuKTogVCB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGNvbnN0IHYgPSB2YWx1ZVtpbmRleF07XG4gICAgcmV0dXJuIHYgPT0gbnVsbFxuICAgICAgPyBBcnJheS5pc0FycmF5KGRlZmF1bHRWYWx1ZSlcbiAgICAgICAgPyBkZWZhdWx0VmFsdWVbaW5kZXhdXG4gICAgICAgIDogZGVmYXVsdFZhbHVlXG4gICAgICA6IHY7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1R5cGUodmFsdWU6IGFueSwgdHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHN0ciA9IHt9LnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICByZXR1cm4gc3RyLmluZGV4T2YoJ1tvYmplY3QnKSA9PT0gMCAmJiBzdHIuaW5kZXhPZihgJHt0eXBlfV1gKSA+IC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlV2l0aEFyZ3NPclJldHVybih2YWx1ZTogYW55LCBhcmdzOiBhbnlbXSk6IGFueSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZSguLi5hcmdzKSA6IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2U8VD4oXG4gIGZuOiAoYXJnOiBUKSA9PiB2b2lkLFxuICBtczogbnVtYmVyXG4pOiAoYXJnOiBUKSA9PiB2b2lkIHtcbiAgLy8gQXZvaWQgd3JhcHBpbmcgaW4gYHNldFRpbWVvdXRgIGlmIG1zIGlzIDAgYW55d2F5XG4gIGlmIChtcyA9PT0gMCkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGxldCB0aW1lb3V0OiBhbnk7XG5cbiAgcmV0dXJuIChhcmcpOiB2b2lkID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm4oYXJnKTtcbiAgICB9LCBtcyk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wZXJ0aWVzPFQ+KG9iajogVCwga2V5czogc3RyaW5nW10pOiBQYXJ0aWFsPFQ+IHtcbiAgY29uc3QgY2xvbmUgPSB7Li4ub2JqfTtcbiAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBkZWxldGUgKGNsb25lIGFzIGFueSlba2V5XTtcbiAgfSk7XG4gIHJldHVybiBjbG9uZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0QnlTcGFjZXModmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIHZhbHVlLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVG9BcnJheTxUPih2YWx1ZTogVCB8IFRbXSk6IFRbXSB7XG4gIHJldHVybiAoW10gYXMgVFtdKS5jb25jYXQodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaElmVW5pcXVlPFQ+KGFycjogVFtdLCB2YWx1ZTogVCk6IHZvaWQge1xuICBpZiAoYXJyLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgIGFyci5wdXNoKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kUHhJZk51bWJlcih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyBgJHt2YWx1ZX1weGAgOiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZTxUPihhcnI6IFRbXSk6IFRbXSB7XG4gIHJldHVybiBhcnIuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gYXJyLmluZGV4T2YoaXRlbSkgPT09IGluZGV4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE51bWJlcih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyB2YWx1ZSA6IHBhcnNlRmxvYXQodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQ6IFBsYWNlbWVudCk6IEJhc2VQbGFjZW1lbnQge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF0gYXMgQmFzZVBsYWNlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5RnJvbSh2YWx1ZTogQXJyYXlMaWtlPGFueT4pOiBhbnlbXSB7XG4gIHJldHVybiBbXS5zbGljZS5jYWxsKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVVuZGVmaW5lZFByb3BzKFxuICBvYmo6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4pOiBQYXJ0aWFsPFJlY29yZDxzdHJpbmcsIHVua25vd24+PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBpZiAob2JqW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgKGFjYyBhcyBhbnkpW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG4iLCAiaW1wb3J0IHtSZWZlcmVuY2VFbGVtZW50LCBUYXJnZXRzfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7UG9wcGVyVHJlZURhdGF9IGZyb20gJy4vdHlwZXMtaW50ZXJuYWwnO1xuaW1wb3J0IHthcnJheUZyb20sIGlzVHlwZSwgbm9ybWFsaXplVG9BcnJheSwgZ2V0QmFzZVBsYWNlbWVudH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXYoKTogSFRNTERpdkVsZW1lbnQge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnQodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBFbGVtZW50IHwgRG9jdW1lbnRGcmFnbWVudCB7XG4gIHJldHVybiBbJ0VsZW1lbnQnLCAnRnJhZ21lbnQnXS5zb21lKCh0eXBlKSA9PiBpc1R5cGUodmFsdWUsIHR5cGUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZUxpc3QodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBOb2RlTGlzdCB7XG4gIHJldHVybiBpc1R5cGUodmFsdWUsICdOb2RlTGlzdCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb3VzZUV2ZW50KHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgTW91c2VFdmVudCB7XG4gIHJldHVybiBpc1R5cGUodmFsdWUsICdNb3VzZUV2ZW50Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlZmVyZW5jZUVsZW1lbnQodmFsdWU6IGFueSk6IHZhbHVlIGlzIFJlZmVyZW5jZUVsZW1lbnQge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX3RpcHB5ICYmIHZhbHVlLl90aXBweS5yZWZlcmVuY2UgPT09IHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFycmF5T2ZFbGVtZW50cyh2YWx1ZTogVGFyZ2V0cyk6IEVsZW1lbnRbXSB7XG4gIGlmIChpc0VsZW1lbnQodmFsdWUpKSB7XG4gICAgcmV0dXJuIFt2YWx1ZV07XG4gIH1cblxuICBpZiAoaXNOb2RlTGlzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gYXJyYXlGcm9tKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBhcnJheUZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh2YWx1ZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VHJhbnNpdGlvbkR1cmF0aW9uKFxuICBlbHM6IChIVE1MRGl2RWxlbWVudCB8IG51bGwpW10sXG4gIHZhbHVlOiBudW1iZXJcbik6IHZvaWQge1xuICBlbHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke3ZhbHVlfW1zYDtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VmlzaWJpbGl0eVN0YXRlKFxuICBlbHM6IChIVE1MRGl2RWxlbWVudCB8IG51bGwpW10sXG4gIHN0YXRlOiAndmlzaWJsZScgfCAnaGlkZGVuJ1xuKTogdm9pZCB7XG4gIGVscy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGlmIChlbCkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgc3RhdGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPd25lckRvY3VtZW50KFxuICBlbGVtZW50T3JFbGVtZW50czogRWxlbWVudCB8IEVsZW1lbnRbXVxuKTogRG9jdW1lbnQge1xuICBjb25zdCBbZWxlbWVudF0gPSBub3JtYWxpemVUb0FycmF5KGVsZW1lbnRPckVsZW1lbnRzKTtcblxuICAvLyBFbGVtZW50cyBjcmVhdGVkIHZpYSBhIDx0ZW1wbGF0ZT4gaGF2ZSBhbiBvd25lckRvY3VtZW50IHdpdGggbm8gcmVmZXJlbmNlIHRvIHRoZSBib2R5XG4gIHJldHVybiBlbGVtZW50Py5vd25lckRvY3VtZW50Py5ib2R5ID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogZG9jdW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0N1cnNvck91dHNpZGVJbnRlcmFjdGl2ZUJvcmRlcihcbiAgcG9wcGVyVHJlZURhdGE6IFBvcHBlclRyZWVEYXRhW10sXG4gIGV2ZW50OiBNb3VzZUV2ZW50XG4pOiBib29sZWFuIHtcbiAgY29uc3Qge2NsaWVudFgsIGNsaWVudFl9ID0gZXZlbnQ7XG5cbiAgcmV0dXJuIHBvcHBlclRyZWVEYXRhLmV2ZXJ5KCh7cG9wcGVyUmVjdCwgcG9wcGVyU3RhdGUsIHByb3BzfSkgPT4ge1xuICAgIGNvbnN0IHtpbnRlcmFjdGl2ZUJvcmRlcn0gPSBwcm9wcztcbiAgICBjb25zdCBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwb3BwZXJTdGF0ZS5wbGFjZW1lbnQpO1xuICAgIGNvbnN0IG9mZnNldERhdGEgPSBwb3BwZXJTdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDtcblxuICAgIGlmICghb2Zmc2V0RGF0YSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgdG9wRGlzdGFuY2UgPSBiYXNlUGxhY2VtZW50ID09PSAnYm90dG9tJyA/IG9mZnNldERhdGEudG9wIS55IDogMDtcbiAgICBjb25zdCBib3R0b21EaXN0YW5jZSA9IGJhc2VQbGFjZW1lbnQgPT09ICd0b3AnID8gb2Zmc2V0RGF0YS5ib3R0b20hLnkgOiAwO1xuICAgIGNvbnN0IGxlZnREaXN0YW5jZSA9IGJhc2VQbGFjZW1lbnQgPT09ICdyaWdodCcgPyBvZmZzZXREYXRhLmxlZnQhLnggOiAwO1xuICAgIGNvbnN0IHJpZ2h0RGlzdGFuY2UgPSBiYXNlUGxhY2VtZW50ID09PSAnbGVmdCcgPyBvZmZzZXREYXRhLnJpZ2h0IS54IDogMDtcblxuICAgIGNvbnN0IGV4Y2VlZHNUb3AgPVxuICAgICAgcG9wcGVyUmVjdC50b3AgLSBjbGllbnRZICsgdG9wRGlzdGFuY2UgPiBpbnRlcmFjdGl2ZUJvcmRlcjtcbiAgICBjb25zdCBleGNlZWRzQm90dG9tID1cbiAgICAgIGNsaWVudFkgLSBwb3BwZXJSZWN0LmJvdHRvbSAtIGJvdHRvbURpc3RhbmNlID4gaW50ZXJhY3RpdmVCb3JkZXI7XG4gICAgY29uc3QgZXhjZWVkc0xlZnQgPVxuICAgICAgcG9wcGVyUmVjdC5sZWZ0IC0gY2xpZW50WCArIGxlZnREaXN0YW5jZSA+IGludGVyYWN0aXZlQm9yZGVyO1xuICAgIGNvbnN0IGV4Y2VlZHNSaWdodCA9XG4gICAgICBjbGllbnRYIC0gcG9wcGVyUmVjdC5yaWdodCAtIHJpZ2h0RGlzdGFuY2UgPiBpbnRlcmFjdGl2ZUJvcmRlcjtcblxuICAgIHJldHVybiBleGNlZWRzVG9wIHx8IGV4Y2VlZHNCb3R0b20gfHwgZXhjZWVkc0xlZnQgfHwgZXhjZWVkc1JpZ2h0O1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lcihcbiAgYm94OiBIVE1MRGl2RWxlbWVudCxcbiAgYWN0aW9uOiAnYWRkJyB8ICdyZW1vdmUnLFxuICBsaXN0ZW5lcjogKGV2ZW50OiBUcmFuc2l0aW9uRXZlbnQpID0+IHZvaWRcbik6IHZvaWQge1xuICBjb25zdCBtZXRob2QgPSBgJHthY3Rpb259RXZlbnRMaXN0ZW5lcmAgYXNcbiAgICB8ICdhZGRFdmVudExpc3RlbmVyJ1xuICAgIHwgJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuXG4gIC8vIHNvbWUgYnJvd3NlcnMgYXBwYXJlbnRseSBzdXBwb3J0IGB0cmFuc2l0aW9uYCAodW5wcmVmaXhlZCkgYnV0IG9ubHkgZmlyZVxuICAvLyBgd2Via2l0VHJhbnNpdGlvbkVuZGAuLi5cbiAgWyd0cmFuc2l0aW9uZW5kJywgJ3dlYmtpdFRyYW5zaXRpb25FbmQnXS5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgIGJveFttZXRob2RdKGV2ZW50LCBsaXN0ZW5lciBhcyBFdmVudExpc3RlbmVyKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ29tcGFyZWQgdG8geHh4LmNvbnRhaW5zLCB0aGlzIGZ1bmN0aW9uIHdvcmtzIGZvciBkb20gc3RydWN0dXJlcyB3aXRoIHNoYWRvd1xuICogZG9tXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhY3R1YWxDb250YWlucyhwYXJlbnQ6IEVsZW1lbnQsIGNoaWxkOiBFbGVtZW50KTogYm9vbGVhbiB7XG4gIGxldCB0YXJnZXQgPSBjaGlsZDtcbiAgd2hpbGUgKHRhcmdldCkge1xuICAgIGlmIChwYXJlbnQuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRhcmdldCA9ICh0YXJnZXQuZ2V0Um9vdE5vZGU/LigpIGFzIGFueSk/Lmhvc3Q7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwgImltcG9ydCB7VE9VQ0hfT1BUSU9OU30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtpc1JlZmVyZW5jZUVsZW1lbnR9IGZyb20gJy4vZG9tLXV0aWxzJztcblxuZXhwb3J0IGNvbnN0IGN1cnJlbnRJbnB1dCA9IHtpc1RvdWNoOiBmYWxzZX07XG5sZXQgbGFzdE1vdXNlTW92ZVRpbWUgPSAwO1xuXG4vKipcbiAqIFdoZW4gYSBgdG91Y2hzdGFydGAgZXZlbnQgaXMgZmlyZWQsIGl0J3MgYXNzdW1lZCB0aGUgdXNlciBpcyB1c2luZyB0b3VjaFxuICogaW5wdXQuIFdlJ2xsIGJpbmQgYSBgbW91c2Vtb3ZlYCBldmVudCBsaXN0ZW5lciB0byBsaXN0ZW4gZm9yIG1vdXNlIGlucHV0IGluXG4gKiB0aGUgZnV0dXJlLiBUaGlzIHdheSwgdGhlIGBpc1RvdWNoYCBwcm9wZXJ0eSBpcyBmdWxseSBkeW5hbWljIGFuZCB3aWxsIGhhbmRsZVxuICogaHlicmlkIGRldmljZXMgdGhhdCB1c2UgYSBtaXggb2YgdG91Y2ggKyBtb3VzZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uRG9jdW1lbnRUb3VjaFN0YXJ0KCk6IHZvaWQge1xuICBpZiAoY3VycmVudElucHV0LmlzVG91Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjdXJyZW50SW5wdXQuaXNUb3VjaCA9IHRydWU7XG5cbiAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uRG9jdW1lbnRNb3VzZU1vdmUpO1xuICB9XG59XG5cbi8qKlxuICogV2hlbiB0d28gYG1vdXNlbW92ZWAgZXZlbnQgYXJlIGZpcmVkIGNvbnNlY3V0aXZlbHkgd2l0aGluIDIwbXMsIGl0J3MgYXNzdW1lZFxuICogdGhlIHVzZXIgaXMgdXNpbmcgbW91c2UgaW5wdXQgYWdhaW4uIGBtb3VzZW1vdmVgIGNhbiBmaXJlIG9uIHRvdWNoIGRldmljZXMgYXNcbiAqIHdlbGwsIGJ1dCB2ZXJ5IHJhcmVseSB0aGF0IHF1aWNrbHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbkRvY3VtZW50TW91c2VNb3ZlKCk6IHZvaWQge1xuICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICBpZiAobm93IC0gbGFzdE1vdXNlTW92ZVRpbWUgPCAyMCkge1xuICAgIGN1cnJlbnRJbnB1dC5pc1RvdWNoID0gZmFsc2U7XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkRvY3VtZW50TW91c2VNb3ZlKTtcbiAgfVxuXG4gIGxhc3RNb3VzZU1vdmVUaW1lID0gbm93O1xufVxuXG4vKipcbiAqIFdoZW4gYW4gZWxlbWVudCBpcyBpbiBmb2N1cyBhbmQgaGFzIGEgdGlwcHksIGxlYXZpbmcgdGhlIHRhYi93aW5kb3cgYW5kXG4gKiByZXR1cm5pbmcgY2F1c2VzIGl0IHRvIHNob3cgYWdhaW4uIEZvciBtb3VzZSB1c2VycyB0aGlzIGlzIHVuZXhwZWN0ZWQsIGJ1dFxuICogZm9yIGtleWJvYXJkIHVzZSBpdCBtYWtlcyBzZW5zZS5cbiAqIFRPRE86IGZpbmQgYSBiZXR0ZXIgdGVjaG5pcXVlIHRvIHNvbHZlIHRoaXMgcHJvYmxlbVxuICovXG5leHBvcnQgZnVuY3Rpb24gb25XaW5kb3dCbHVyKCk6IHZvaWQge1xuICBjb25zdCBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG5cbiAgaWYgKGlzUmVmZXJlbmNlRWxlbWVudChhY3RpdmVFbGVtZW50KSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gYWN0aXZlRWxlbWVudC5fdGlwcHkhO1xuXG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQuYmx1ciAmJiAhaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Eb2N1bWVudFRvdWNoU3RhcnQsIFRPVUNIX09QVElPTlMpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uV2luZG93Qmx1cik7XG59XG4iLCAiZXhwb3J0IGNvbnN0IGlzQnJvd3NlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbmV4cG9ydCBjb25zdCBpc0lFMTEgPSBpc0Jyb3dzZXJcbiAgPyAvLyBAdHMtaWdub3JlXG4gICAgISF3aW5kb3cubXNDcnlwdG9cbiAgOiBmYWxzZTtcbiIsICJpbXBvcnQge1RhcmdldHN9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcobWV0aG9kOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB0eHQgPSBtZXRob2QgPT09ICdkZXN0cm95JyA/ICduIGFscmVhZHktJyA6ICcgJztcblxuICByZXR1cm4gW1xuICAgIGAke21ldGhvZH0oKSB3YXMgY2FsbGVkIG9uIGEke3R4dH1kZXN0cm95ZWQgaW5zdGFuY2UuIFRoaXMgaXMgYSBuby1vcCBidXRgLFxuICAgICdpbmRpY2F0ZXMgYSBwb3RlbnRpYWwgbWVtb3J5IGxlYWsuJyxcbiAgXS5qb2luKCcgJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhbih2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgc3BhY2VzQW5kVGFicyA9IC9bIFxcdF17Mix9L2c7XG4gIGNvbnN0IGxpbmVTdGFydFdpdGhTcGFjZXMgPSAvXlsgXFx0XSovZ207XG5cbiAgcmV0dXJuIHZhbHVlXG4gICAgLnJlcGxhY2Uoc3BhY2VzQW5kVGFicywgJyAnKVxuICAgIC5yZXBsYWNlKGxpbmVTdGFydFdpdGhTcGFjZXMsICcnKVxuICAgIC50cmltKCk7XG59XG5cbmZ1bmN0aW9uIGdldERldk1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGNsZWFuKGBcbiAgJWN0aXBweS5qc1xuXG4gICVjJHtjbGVhbihtZXNzYWdlKX1cblxuICAlY/CfkbfigI0gVGhpcyBpcyBhIGRldmVsb3BtZW50LW9ubHkgbWVzc2FnZS4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHByb2R1Y3Rpb24uXG4gIGApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIHJldHVybiBbXG4gICAgZ2V0RGV2TWVzc2FnZShtZXNzYWdlKSxcbiAgICAvLyB0aXRsZVxuICAgICdjb2xvcjogIzAwQzU4NDsgZm9udC1zaXplOiAxLjNlbTsgZm9udC13ZWlnaHQ6IGJvbGQ7JyxcbiAgICAvLyBtZXNzYWdlXG4gICAgJ2xpbmUtaGVpZ2h0OiAxLjUnLFxuICAgIC8vIGZvb3RlclxuICAgICdjb2xvcjogI2E2YTA5NTsnLFxuICBdO1xufVxuXG4vLyBBc3N1bWUgd2FybmluZ3MgYW5kIGVycm9ycyBuZXZlciBoYXZlIHRoZSBzYW1lIG1lc3NhZ2VcbmxldCB2aXNpdGVkTWVzc2FnZXM6IFNldDxzdHJpbmc+O1xuaWYgKF9fREVWX18pIHtcbiAgcmVzZXRWaXNpdGVkTWVzc2FnZXMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0VmlzaXRlZE1lc3NhZ2VzKCk6IHZvaWQge1xuICB2aXNpdGVkTWVzc2FnZXMgPSBuZXcgU2V0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuV2hlbihjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoY29uZGl0aW9uICYmICF2aXNpdGVkTWVzc2FnZXMuaGFzKG1lc3NhZ2UpKSB7XG4gICAgdmlzaXRlZE1lc3NhZ2VzLmFkZChtZXNzYWdlKTtcbiAgICBjb25zb2xlLndhcm4oLi4uZ2V0Rm9ybWF0dGVkTWVzc2FnZShtZXNzYWdlKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yV2hlbihjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoY29uZGl0aW9uICYmICF2aXNpdGVkTWVzc2FnZXMuaGFzKG1lc3NhZ2UpKSB7XG4gICAgdmlzaXRlZE1lc3NhZ2VzLmFkZChtZXNzYWdlKTtcbiAgICBjb25zb2xlLmVycm9yKC4uLmdldEZvcm1hdHRlZE1lc3NhZ2UobWVzc2FnZSkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVRhcmdldHModGFyZ2V0czogVGFyZ2V0cyk6IHZvaWQge1xuICBjb25zdCBkaWRQYXNzRmFsc3lWYWx1ZSA9ICF0YXJnZXRzO1xuICBjb25zdCBkaWRQYXNzUGxhaW5PYmplY3QgPVxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0YXJnZXRzKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgJiZcbiAgICAhKHRhcmdldHMgYXMgYW55KS5hZGRFdmVudExpc3RlbmVyO1xuXG4gIGVycm9yV2hlbihcbiAgICBkaWRQYXNzRmFsc3lWYWx1ZSxcbiAgICBbXG4gICAgICAndGlwcHkoKSB3YXMgcGFzc2VkJyxcbiAgICAgICdgJyArIFN0cmluZyh0YXJnZXRzKSArICdgJyxcbiAgICAgICdhcyBpdHMgdGFyZ2V0cyAoZmlyc3QpIGFyZ3VtZW50LiBWYWxpZCB0eXBlcyBhcmU6IFN0cmluZywgRWxlbWVudCwnLFxuICAgICAgJ0VsZW1lbnRbXSwgb3IgTm9kZUxpc3QuJyxcbiAgICBdLmpvaW4oJyAnKVxuICApO1xuXG4gIGVycm9yV2hlbihcbiAgICBkaWRQYXNzUGxhaW5PYmplY3QsXG4gICAgW1xuICAgICAgJ3RpcHB5KCkgd2FzIHBhc3NlZCBhIHBsYWluIG9iamVjdCB3aGljaCBpcyBub3Qgc3VwcG9ydGVkIGFzIGFuIGFyZ3VtZW50JyxcbiAgICAgICdmb3IgdmlydHVhbCBwb3NpdGlvbmluZy4gVXNlIHByb3BzLmdldFJlZmVyZW5jZUNsaWVudFJlY3QgaW5zdGVhZC4nLFxuICAgIF0uam9pbignICcpXG4gICk7XG59XG4iLCAiaW1wb3J0IHtEZWZhdWx0UHJvcHMsIFBsdWdpbiwgUHJvcHMsIFJlZmVyZW5jZUVsZW1lbnQsIFRpcHB5fSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7XG4gIGhhc093blByb3BlcnR5LFxuICByZW1vdmVQcm9wZXJ0aWVzLFxuICBpbnZva2VXaXRoQXJnc09yUmV0dXJuLFxufSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7d2FybldoZW59IGZyb20gJy4vdmFsaWRhdGlvbic7XG5pbXBvcnQge1RJUFBZX0RFRkFVTFRfQVBQRU5EX1RPfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IHBsdWdpblByb3BzID0ge1xuICBhbmltYXRlRmlsbDogZmFsc2UsXG4gIGZvbGxvd0N1cnNvcjogZmFsc2UsXG4gIGlubGluZVBvc2l0aW9uaW5nOiBmYWxzZSxcbiAgc3RpY2t5OiBmYWxzZSxcbn07XG5cbmNvbnN0IHJlbmRlclByb3BzID0ge1xuICBhbGxvd0hUTUw6IGZhbHNlLFxuICBhbmltYXRpb246ICdmYWRlJyxcbiAgYXJyb3c6IHRydWUsXG4gIGNvbnRlbnQ6ICcnLFxuICBpbmVydGlhOiBmYWxzZSxcbiAgbWF4V2lkdGg6IDM1MCxcbiAgcm9sZTogJ3Rvb2x0aXAnLFxuICB0aGVtZTogJycsXG4gIHpJbmRleDogOTk5OSxcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0UHJvcHM6IERlZmF1bHRQcm9wcyA9IHtcbiAgYXBwZW5kVG86IFRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPLFxuICBhcmlhOiB7XG4gICAgY29udGVudDogJ2F1dG8nLFxuICAgIGV4cGFuZGVkOiAnYXV0bycsXG4gIH0sXG4gIGRlbGF5OiAwLFxuICBkdXJhdGlvbjogWzMwMCwgMjUwXSxcbiAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdDogbnVsbCxcbiAgaGlkZU9uQ2xpY2s6IHRydWUsXG4gIGlnbm9yZUF0dHJpYnV0ZXM6IGZhbHNlLFxuICBpbnRlcmFjdGl2ZTogZmFsc2UsXG4gIGludGVyYWN0aXZlQm9yZGVyOiAyLFxuICBpbnRlcmFjdGl2ZURlYm91bmNlOiAwLFxuICBtb3ZlVHJhbnNpdGlvbjogJycsXG4gIG9mZnNldDogWzAsIDEwXSxcbiAgb25BZnRlclVwZGF0ZSgpIHt9LFxuICBvbkJlZm9yZVVwZGF0ZSgpIHt9LFxuICBvbkNyZWF0ZSgpIHt9LFxuICBvbkRlc3Ryb3koKSB7fSxcbiAgb25IaWRkZW4oKSB7fSxcbiAgb25IaWRlKCkge30sXG4gIG9uTW91bnQoKSB7fSxcbiAgb25TaG93KCkge30sXG4gIG9uU2hvd24oKSB7fSxcbiAgb25UcmlnZ2VyKCkge30sXG4gIG9uVW50cmlnZ2VyKCkge30sXG4gIG9uQ2xpY2tPdXRzaWRlKCkge30sXG4gIHBsYWNlbWVudDogJ3RvcCcsXG4gIHBsdWdpbnM6IFtdLFxuICBwb3BwZXJPcHRpb25zOiB7fSxcbiAgcmVuZGVyOiBudWxsLFxuICBzaG93T25DcmVhdGU6IGZhbHNlLFxuICB0b3VjaDogdHJ1ZSxcbiAgdHJpZ2dlcjogJ21vdXNlZW50ZXIgZm9jdXMnLFxuICB0cmlnZ2VyVGFyZ2V0OiBudWxsLFxuICAuLi5wbHVnaW5Qcm9wcyxcbiAgLi4ucmVuZGVyUHJvcHMsXG59O1xuXG5jb25zdCBkZWZhdWx0S2V5cyA9IE9iamVjdC5rZXlzKGRlZmF1bHRQcm9wcyk7XG5cbmV4cG9ydCBjb25zdCBzZXREZWZhdWx0UHJvcHM6IFRpcHB5WydzZXREZWZhdWx0UHJvcHMnXSA9IChwYXJ0aWFsUHJvcHMpID0+IHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKF9fREVWX18pIHtcbiAgICB2YWxpZGF0ZVByb3BzKHBhcnRpYWxQcm9wcywgW10pO1xuICB9XG5cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHBhcnRpYWxQcm9wcykgYXMgQXJyYXk8a2V5b2YgRGVmYXVsdFByb3BzPjtcbiAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAoZGVmYXVsdFByb3BzIGFzIGFueSlba2V5XSA9IHBhcnRpYWxQcm9wc1trZXldO1xuICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHRlbmRlZFBhc3NlZFByb3BzKFxuICBwYXNzZWRQcm9wczogUGFydGlhbDxQcm9wcz4gJiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuKTogUGFydGlhbDxQcm9wcz4ge1xuICBjb25zdCBwbHVnaW5zID0gcGFzc2VkUHJvcHMucGx1Z2lucyB8fCBbXTtcbiAgY29uc3QgcGx1Z2luUHJvcHMgPSBwbHVnaW5zLnJlZHVjZTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4oKGFjYywgcGx1Z2luKSA9PiB7XG4gICAgY29uc3Qge25hbWUsIGRlZmF1bHRWYWx1ZX0gPSBwbHVnaW47XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgYWNjW25hbWVdID1cbiAgICAgICAgcGFzc2VkUHJvcHNbbmFtZV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gcGFzc2VkUHJvcHNbbmFtZV1cbiAgICAgICAgICA6IChkZWZhdWx0UHJvcHMgYXMgYW55KVtuYW1lXSA/PyBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucGFzc2VkUHJvcHMsXG4gICAgLi4ucGx1Z2luUHJvcHMsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhQXR0cmlidXRlUHJvcHMoXG4gIHJlZmVyZW5jZTogUmVmZXJlbmNlRWxlbWVudCxcbiAgcGx1Z2luczogUGx1Z2luW11cbik6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgY29uc3QgcHJvcEtleXMgPSBwbHVnaW5zXG4gICAgPyBPYmplY3Qua2V5cyhnZXRFeHRlbmRlZFBhc3NlZFByb3BzKHsuLi5kZWZhdWx0UHJvcHMsIHBsdWdpbnN9KSlcbiAgICA6IGRlZmF1bHRLZXlzO1xuXG4gIGNvbnN0IHByb3BzID0gcHJvcEtleXMucmVkdWNlKFxuICAgIChhY2M6IFBhcnRpYWw8UHJvcHM+ICYgUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWVBc1N0cmluZyA9IChcbiAgICAgICAgcmVmZXJlbmNlLmdldEF0dHJpYnV0ZShgZGF0YS10aXBweS0ke2tleX1gKSB8fCAnJ1xuICAgICAgKS50cmltKCk7XG5cbiAgICAgIGlmICghdmFsdWVBc1N0cmluZykge1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuXG4gICAgICBpZiAoa2V5ID09PSAnY29udGVudCcpIHtcbiAgICAgICAgYWNjW2tleV0gPSB2YWx1ZUFzU3RyaW5nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhY2Nba2V5XSA9IEpTT04ucGFyc2UodmFsdWVBc1N0cmluZyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBhY2Nba2V5XSA9IHZhbHVlQXNTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LFxuICAgIHt9XG4gICk7XG5cbiAgcmV0dXJuIHByb3BzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbHVhdGVQcm9wcyhcbiAgcmVmZXJlbmNlOiBSZWZlcmVuY2VFbGVtZW50LFxuICBwcm9wczogUHJvcHNcbik6IFByb3BzIHtcbiAgY29uc3Qgb3V0ID0ge1xuICAgIC4uLnByb3BzLFxuICAgIGNvbnRlbnQ6IGludm9rZVdpdGhBcmdzT3JSZXR1cm4ocHJvcHMuY29udGVudCwgW3JlZmVyZW5jZV0pLFxuICAgIC4uLihwcm9wcy5pZ25vcmVBdHRyaWJ1dGVzXG4gICAgICA/IHt9XG4gICAgICA6IGdldERhdGFBdHRyaWJ1dGVQcm9wcyhyZWZlcmVuY2UsIHByb3BzLnBsdWdpbnMpKSxcbiAgfTtcblxuICBvdXQuYXJpYSA9IHtcbiAgICAuLi5kZWZhdWx0UHJvcHMuYXJpYSxcbiAgICAuLi5vdXQuYXJpYSxcbiAgfTtcblxuICBvdXQuYXJpYSA9IHtcbiAgICBleHBhbmRlZDpcbiAgICAgIG91dC5hcmlhLmV4cGFuZGVkID09PSAnYXV0bycgPyBwcm9wcy5pbnRlcmFjdGl2ZSA6IG91dC5hcmlhLmV4cGFuZGVkLFxuICAgIGNvbnRlbnQ6XG4gICAgICBvdXQuYXJpYS5jb250ZW50ID09PSAnYXV0bydcbiAgICAgICAgPyBwcm9wcy5pbnRlcmFjdGl2ZVxuICAgICAgICAgID8gbnVsbFxuICAgICAgICAgIDogJ2Rlc2NyaWJlZGJ5J1xuICAgICAgICA6IG91dC5hcmlhLmNvbnRlbnQsXG4gIH07XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUHJvcHMoXG4gIHBhcnRpYWxQcm9wczogUGFydGlhbDxQcm9wcz4gPSB7fSxcbiAgcGx1Z2luczogUGx1Z2luW10gPSBbXVxuKTogdm9pZCB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwYXJ0aWFsUHJvcHMpIGFzIEFycmF5PGtleW9mIFByb3BzPjtcbiAga2V5cy5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgY29uc3Qgbm9uUGx1Z2luUHJvcHMgPSByZW1vdmVQcm9wZXJ0aWVzKFxuICAgICAgZGVmYXVsdFByb3BzLFxuICAgICAgT2JqZWN0LmtleXMocGx1Z2luUHJvcHMpXG4gICAgKTtcblxuICAgIGxldCBkaWRQYXNzVW5rbm93blByb3AgPSAhaGFzT3duUHJvcGVydHkobm9uUGx1Z2luUHJvcHMsIHByb3ApO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHByb3AgZXhpc3RzIGluIGBwbHVnaW5zYFxuICAgIGlmIChkaWRQYXNzVW5rbm93blByb3ApIHtcbiAgICAgIGRpZFBhc3NVbmtub3duUHJvcCA9XG4gICAgICAgIHBsdWdpbnMuZmlsdGVyKChwbHVnaW4pID0+IHBsdWdpbi5uYW1lID09PSBwcm9wKS5sZW5ndGggPT09IDA7XG4gICAgfVxuXG4gICAgd2FybldoZW4oXG4gICAgICBkaWRQYXNzVW5rbm93blByb3AsXG4gICAgICBbXG4gICAgICAgIGBcXGAke3Byb3B9XFxgYCxcbiAgICAgICAgXCJpcyBub3QgYSB2YWxpZCBwcm9wLiBZb3UgbWF5IGhhdmUgc3BlbGxlZCBpdCBpbmNvcnJlY3RseSwgb3IgaWYgaXQnc1wiLFxuICAgICAgICAnYSBwbHVnaW4sIGZvcmdvdCB0byBwYXNzIGl0IGluIGFuIGFycmF5IGFzIHByb3BzLnBsdWdpbnMuJyxcbiAgICAgICAgJ1xcblxcbicsXG4gICAgICAgICdBbGwgcHJvcHM6IGh0dHBzOi8vYXRvbWlrcy5naXRodWIuaW8vdGlwcHlqcy92Ni9hbGwtcHJvcHMvXFxuJyxcbiAgICAgICAgJ1BsdWdpbnM6IGh0dHBzOi8vYXRvbWlrcy5naXRodWIuaW8vdGlwcHlqcy92Ni9wbHVnaW5zLycsXG4gICAgICBdLmpvaW4oJyAnKVxuICAgICk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIEFSUk9XX0NMQVNTLFxuICBCQUNLRFJPUF9DTEFTUyxcbiAgQk9YX0NMQVNTLFxuICBDT05URU5UX0NMQVNTLFxuICBTVkdfQVJST1dfQ0xBU1MsXG59IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7ZGl2LCBpc0VsZW1lbnR9IGZyb20gJy4vZG9tLXV0aWxzJztcbmltcG9ydCB7SW5zdGFuY2UsIFBvcHBlckVsZW1lbnQsIFByb3BzfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7UG9wcGVyQ2hpbGRyZW59IGZyb20gJy4vdHlwZXMtaW50ZXJuYWwnO1xuaW1wb3J0IHthcnJheUZyb219IGZyb20gJy4vdXRpbHMnO1xuXG4vLyBGaXJlZm94IGV4dGVuc2lvbnMgZG9uJ3QgYWxsb3cgLmlubmVySFRNTCA9IFwiLi4uXCIgcHJvcGVydHkuIFRoaXMgdHJpY2tzIGl0LlxuY29uc3QgaW5uZXJIVE1MID0gKCk6ICdpbm5lckhUTUwnID0+ICdpbm5lckhUTUwnO1xuXG5mdW5jdGlvbiBkYW5nZXJvdXNseVNldElubmVySFRNTChlbGVtZW50OiBFbGVtZW50LCBodG1sOiBzdHJpbmcpOiB2b2lkIHtcbiAgZWxlbWVudFtpbm5lckhUTUwoKV0gPSBodG1sO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBcnJvd0VsZW1lbnQodmFsdWU6IFByb3BzWydhcnJvdyddKTogSFRNTERpdkVsZW1lbnQge1xuICBjb25zdCBhcnJvdyA9IGRpdigpO1xuXG4gIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgIGFycm93LmNsYXNzTmFtZSA9IEFSUk9XX0NMQVNTO1xuICB9IGVsc2Uge1xuICAgIGFycm93LmNsYXNzTmFtZSA9IFNWR19BUlJPV19DTEFTUztcblxuICAgIGlmIChpc0VsZW1lbnQodmFsdWUpKSB7XG4gICAgICBhcnJvdy5hcHBlbmRDaGlsZCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKGFycm93LCB2YWx1ZSBhcyBzdHJpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcnJvdztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbnRlbnQoY29udGVudDogSFRNTERpdkVsZW1lbnQsIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuICBpZiAoaXNFbGVtZW50KHByb3BzLmNvbnRlbnQpKSB7XG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwoY29udGVudCwgJycpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvcHMuY29udGVudCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3BzLmNvbnRlbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAocHJvcHMuYWxsb3dIVE1MKSB7XG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTChjb250ZW50LCBwcm9wcy5jb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IHByb3BzLmNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZHJlbihwb3BwZXI6IFBvcHBlckVsZW1lbnQpOiBQb3BwZXJDaGlsZHJlbiB7XG4gIGNvbnN0IGJveCA9IHBvcHBlci5maXJzdEVsZW1lbnRDaGlsZCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgY29uc3QgYm94Q2hpbGRyZW4gPSBhcnJheUZyb20oYm94LmNoaWxkcmVuKTtcblxuICByZXR1cm4ge1xuICAgIGJveCxcbiAgICBjb250ZW50OiBib3hDaGlsZHJlbi5maW5kKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhDT05URU5UX0NMQVNTKSksXG4gICAgYXJyb3c6IGJveENoaWxkcmVuLmZpbmQoXG4gICAgICAobm9kZSkgPT5cbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQVJST1dfQ0xBU1MpIHx8XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFNWR19BUlJPV19DTEFTUylcbiAgICApLFxuICAgIGJhY2tkcm9wOiBib3hDaGlsZHJlbi5maW5kKChub2RlKSA9PlxuICAgICAgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQkFDS0RST1BfQ0xBU1MpXG4gICAgKSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihcbiAgaW5zdGFuY2U6IEluc3RhbmNlXG4pOiB7XG4gIHBvcHBlcjogUG9wcGVyRWxlbWVudDtcbiAgb25VcGRhdGU/OiAocHJldlByb3BzOiBQcm9wcywgbmV4dFByb3BzOiBQcm9wcykgPT4gdm9pZDtcbn0ge1xuICBjb25zdCBwb3BwZXIgPSBkaXYoKTtcblxuICBjb25zdCBib3ggPSBkaXYoKTtcbiAgYm94LmNsYXNzTmFtZSA9IEJPWF9DTEFTUztcbiAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsICdoaWRkZW4nKTtcbiAgYm94LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcblxuICBjb25zdCBjb250ZW50ID0gZGl2KCk7XG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gQ09OVEVOVF9DTEFTUztcbiAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCAnaGlkZGVuJyk7XG5cbiAgc2V0Q29udGVudChjb250ZW50LCBpbnN0YW5jZS5wcm9wcyk7XG5cbiAgcG9wcGVyLmFwcGVuZENoaWxkKGJveCk7XG4gIGJveC5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICBvblVwZGF0ZShpbnN0YW5jZS5wcm9wcywgaW5zdGFuY2UucHJvcHMpO1xuXG4gIGZ1bmN0aW9uIG9uVXBkYXRlKHByZXZQcm9wczogUHJvcHMsIG5leHRQcm9wczogUHJvcHMpOiB2b2lkIHtcbiAgICBjb25zdCB7Ym94LCBjb250ZW50LCBhcnJvd30gPSBnZXRDaGlsZHJlbihwb3BwZXIpO1xuXG4gICAgaWYgKG5leHRQcm9wcy50aGVtZSkge1xuICAgICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIG5leHRQcm9wcy50aGVtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJveC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5leHRQcm9wcy5hbmltYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGlvbicsIG5leHRQcm9wcy5hbmltYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3gucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWFuaW1hdGlvbicpO1xuICAgIH1cblxuICAgIGlmIChuZXh0UHJvcHMuaW5lcnRpYSkge1xuICAgICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1pbmVydGlhJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3gucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWluZXJ0aWEnKTtcbiAgICB9XG5cbiAgICBib3guc3R5bGUubWF4V2lkdGggPVxuICAgICAgdHlwZW9mIG5leHRQcm9wcy5tYXhXaWR0aCA9PT0gJ251bWJlcidcbiAgICAgICAgPyBgJHtuZXh0UHJvcHMubWF4V2lkdGh9cHhgXG4gICAgICAgIDogbmV4dFByb3BzLm1heFdpZHRoO1xuXG4gICAgaWYgKG5leHRQcm9wcy5yb2xlKSB7XG4gICAgICBib3guc2V0QXR0cmlidXRlKCdyb2xlJywgbmV4dFByb3BzLnJvbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3gucmVtb3ZlQXR0cmlidXRlKCdyb2xlJyk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcHJldlByb3BzLmNvbnRlbnQgIT09IG5leHRQcm9wcy5jb250ZW50IHx8XG4gICAgICBwcmV2UHJvcHMuYWxsb3dIVE1MICE9PSBuZXh0UHJvcHMuYWxsb3dIVE1MXG4gICAgKSB7XG4gICAgICBzZXRDb250ZW50KGNvbnRlbnQsIGluc3RhbmNlLnByb3BzKTtcbiAgICB9XG5cbiAgICBpZiAobmV4dFByb3BzLmFycm93KSB7XG4gICAgICBpZiAoIWFycm93KSB7XG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChjcmVhdGVBcnJvd0VsZW1lbnQobmV4dFByb3BzLmFycm93KSk7XG4gICAgICB9IGVsc2UgaWYgKHByZXZQcm9wcy5hcnJvdyAhPT0gbmV4dFByb3BzLmFycm93KSB7XG4gICAgICAgIGJveC5yZW1vdmVDaGlsZChhcnJvdyk7XG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChjcmVhdGVBcnJvd0VsZW1lbnQobmV4dFByb3BzLmFycm93KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhcnJvdykge1xuICAgICAgYm94LnJlbW92ZUNoaWxkKGFycm93ISk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwb3BwZXIsXG4gICAgb25VcGRhdGUsXG4gIH07XG59XG5cbi8vIFJ1bnRpbWUgY2hlY2sgdG8gaWRlbnRpZnkgaWYgdGhlIHJlbmRlciBmdW5jdGlvbiBpcyB0aGUgZGVmYXVsdCBvbmU7IHRoaXNcbi8vIHdheSB3ZSBjYW4gYXBwbHkgZGVmYXVsdCBDU1MgdHJhbnNpdGlvbnMgbG9naWMgYW5kIGl0IGNhbiBiZSB0cmVlLXNoYWtlbiBhd2F5XG5yZW5kZXIuJCR0aXBweSA9IHRydWU7XG4iLCAiaW1wb3J0IHtjcmVhdGVQb3BwZXIsIFN0cmljdE1vZGlmaWVycywgTW9kaWZpZXJ9IGZyb20gJ0Bwb3BwZXJqcy9jb3JlJztcbmltcG9ydCB7Y3VycmVudElucHV0fSBmcm9tICcuL2JpbmRHbG9iYWxFdmVudExpc3RlbmVycyc7XG5pbXBvcnQge2lzSUUxMX0gZnJvbSAnLi9icm93c2VyJztcbmltcG9ydCB7VElQUFlfREVGQVVMVF9BUFBFTkRfVE8sIFRPVUNIX09QVElPTlN9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIGFjdHVhbENvbnRhaW5zLFxuICBkaXYsXG4gIGdldE93bmVyRG9jdW1lbnQsXG4gIGlzQ3Vyc29yT3V0c2lkZUludGVyYWN0aXZlQm9yZGVyLFxuICBpc01vdXNlRXZlbnQsXG4gIHNldFRyYW5zaXRpb25EdXJhdGlvbixcbiAgc2V0VmlzaWJpbGl0eVN0YXRlLFxuICB1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIsXG59IGZyb20gJy4vZG9tLXV0aWxzJztcbmltcG9ydCB7ZGVmYXVsdFByb3BzLCBldmFsdWF0ZVByb3BzLCBnZXRFeHRlbmRlZFBhc3NlZFByb3BzfSBmcm9tICcuL3Byb3BzJztcbmltcG9ydCB7Z2V0Q2hpbGRyZW59IGZyb20gJy4vdGVtcGxhdGUnO1xuaW1wb3J0IHtcbiAgQ29udGVudCxcbiAgSW5zdGFuY2UsXG4gIExpZmVjeWNsZUhvb2tzLFxuICBQb3BwZXJFbGVtZW50LFxuICBQcm9wcyxcbiAgUmVmZXJlbmNlRWxlbWVudCxcbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge0xpc3RlbmVyT2JqZWN0LCBQb3BwZXJUcmVlRGF0YSwgUG9wcGVyQ2hpbGRyZW59IGZyb20gJy4vdHlwZXMtaW50ZXJuYWwnO1xuaW1wb3J0IHtcbiAgYXJyYXlGcm9tLFxuICBkZWJvdW5jZSxcbiAgZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm4sXG4gIGludm9rZVdpdGhBcmdzT3JSZXR1cm4sXG4gIG5vcm1hbGl6ZVRvQXJyYXksXG4gIHB1c2hJZlVuaXF1ZSxcbiAgc3BsaXRCeVNwYWNlcyxcbiAgdW5pcXVlLFxuICByZW1vdmVVbmRlZmluZWRQcm9wcyxcbn0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge2NyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nLCBlcnJvcldoZW4sIHdhcm5XaGVufSBmcm9tICcuL3ZhbGlkYXRpb24nO1xuXG5sZXQgaWRDb3VudGVyID0gMTtcbmxldCBtb3VzZU1vdmVMaXN0ZW5lcnM6ICgoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQpW10gPSBbXTtcblxuLy8gVXNlZCBieSBgaGlkZUFsbCgpYFxuZXhwb3J0IGxldCBtb3VudGVkSW5zdGFuY2VzOiBJbnN0YW5jZVtdID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRpcHB5KFxuICByZWZlcmVuY2U6IFJlZmVyZW5jZUVsZW1lbnQsXG4gIHBhc3NlZFByb3BzOiBQYXJ0aWFsPFByb3BzPlxuKTogSW5zdGFuY2Uge1xuICBjb25zdCBwcm9wcyA9IGV2YWx1YXRlUHJvcHMocmVmZXJlbmNlLCB7XG4gICAgLi4uZGVmYXVsdFByb3BzLFxuICAgIC4uLmdldEV4dGVuZGVkUGFzc2VkUHJvcHMocmVtb3ZlVW5kZWZpbmVkUHJvcHMocGFzc2VkUHJvcHMpKSxcbiAgfSk7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIPCflJIgUHJpdmF0ZSBtZW1iZXJzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBsZXQgc2hvd1RpbWVvdXQ6IGFueTtcbiAgbGV0IGhpZGVUaW1lb3V0OiBhbnk7XG4gIGxldCBzY2hlZHVsZUhpZGVBbmltYXRpb25GcmFtZTogbnVtYmVyO1xuICBsZXQgaXNWaXNpYmxlRnJvbUNsaWNrID0gZmFsc2U7XG4gIGxldCBkaWRIaWRlRHVlVG9Eb2N1bWVudE1vdXNlRG93biA9IGZhbHNlO1xuICBsZXQgZGlkVG91Y2hNb3ZlID0gZmFsc2U7XG4gIGxldCBpZ25vcmVPbkZpcnN0VXBkYXRlID0gZmFsc2U7XG4gIGxldCBsYXN0VHJpZ2dlckV2ZW50OiBFdmVudCB8IHVuZGVmaW5lZDtcbiAgbGV0IGN1cnJlbnRUcmFuc2l0aW9uRW5kTGlzdGVuZXI6IChldmVudDogVHJhbnNpdGlvbkV2ZW50KSA9PiB2b2lkO1xuICBsZXQgb25GaXJzdFVwZGF0ZTogKCkgPT4gdm9pZDtcbiAgbGV0IGxpc3RlbmVyczogTGlzdGVuZXJPYmplY3RbXSA9IFtdO1xuICBsZXQgZGVib3VuY2VkT25Nb3VzZU1vdmUgPSBkZWJvdW5jZShvbk1vdXNlTW92ZSwgcHJvcHMuaW50ZXJhY3RpdmVEZWJvdW5jZSk7XG4gIGxldCBjdXJyZW50VGFyZ2V0OiBFbGVtZW50O1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyDwn5SRIFB1YmxpYyBtZW1iZXJzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjb25zdCBpZCA9IGlkQ291bnRlcisrO1xuICBjb25zdCBwb3BwZXJJbnN0YW5jZSA9IG51bGw7XG4gIGNvbnN0IHBsdWdpbnMgPSB1bmlxdWUocHJvcHMucGx1Z2lucyk7XG5cbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgLy8gSXMgdGhlIGluc3RhbmNlIGN1cnJlbnRseSBlbmFibGVkP1xuICAgIGlzRW5hYmxlZDogdHJ1ZSxcbiAgICAvLyBJcyB0aGUgdGlwcHkgY3VycmVudGx5IHNob3dpbmcgYW5kIG5vdCB0cmFuc2l0aW9uaW5nIG91dD9cbiAgICBpc1Zpc2libGU6IGZhbHNlLFxuICAgIC8vIEhhcyB0aGUgaW5zdGFuY2UgYmVlbiBkZXN0cm95ZWQ/XG4gICAgaXNEZXN0cm95ZWQ6IGZhbHNlLFxuICAgIC8vIElzIHRoZSB0aXBweSBjdXJyZW50bHkgbW91bnRlZCB0byB0aGUgRE9NP1xuICAgIGlzTW91bnRlZDogZmFsc2UsXG4gICAgLy8gSGFzIHRoZSB0aXBweSBmaW5pc2hlZCB0cmFuc2l0aW9uaW5nIGluP1xuICAgIGlzU2hvd246IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IHtcbiAgICAvLyBwcm9wZXJ0aWVzXG4gICAgaWQsXG4gICAgcmVmZXJlbmNlLFxuICAgIHBvcHBlcjogZGl2KCksXG4gICAgcG9wcGVySW5zdGFuY2UsXG4gICAgcHJvcHMsXG4gICAgc3RhdGUsXG4gICAgcGx1Z2lucyxcbiAgICAvLyBtZXRob2RzXG4gICAgY2xlYXJEZWxheVRpbWVvdXRzLFxuICAgIHNldFByb3BzLFxuICAgIHNldENvbnRlbnQsXG4gICAgc2hvdyxcbiAgICBoaWRlLFxuICAgIGhpZGVXaXRoSW50ZXJhY3Rpdml0eSxcbiAgICBlbmFibGUsXG4gICAgZGlzYWJsZSxcbiAgICB1bm1vdW50LFxuICAgIGRlc3Ryb3ksXG4gIH07XG5cbiAgLy8gVE9ETzogSW52ZXN0aWdhdGUgd2h5IHRoaXMgZWFybHkgcmV0dXJuIGNhdXNlcyBhIFREWiBlcnJvciBpbiB0aGUgdGVzdHMg4oCUXG4gIC8vIGl0IGRvZXNuJ3Qgc2VlbSB0byBoYXBwZW4gaW4gdGhlIGJyb3dzZXJcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghcHJvcHMucmVuZGVyKSB7XG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIGVycm9yV2hlbih0cnVlLCAncmVuZGVyKCkgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIHN1cHBsaWVkLicpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBJbml0aWFsIG11dGF0aW9uc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY29uc3Qge3BvcHBlciwgb25VcGRhdGV9ID0gcHJvcHMucmVuZGVyKGluc3RhbmNlKTtcblxuICBwb3BwZXIuc2V0QXR0cmlidXRlKCdkYXRhLV9fTkFNRVNQQUNFX1BSRUZJWF9fLXJvb3QnLCAnJyk7XG4gIHBvcHBlci5pZCA9IGBfX05BTUVTUEFDRV9QUkVGSVhfXy0ke2luc3RhbmNlLmlkfWA7XG5cbiAgaW5zdGFuY2UucG9wcGVyID0gcG9wcGVyO1xuICByZWZlcmVuY2UuX3RpcHB5ID0gaW5zdGFuY2U7XG4gIHBvcHBlci5fdGlwcHkgPSBpbnN0YW5jZTtcblxuICBjb25zdCBwbHVnaW5zSG9va3MgPSBwbHVnaW5zLm1hcCgocGx1Z2luKSA9PiBwbHVnaW4uZm4oaW5zdGFuY2UpKTtcbiAgY29uc3QgaGFzQXJpYUV4cGFuZGVkID0gcmVmZXJlbmNlLmhhc0F0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuXG4gIGFkZExpc3RlbmVycygpO1xuICBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTtcbiAgaGFuZGxlU3R5bGVzKCk7XG5cbiAgaW52b2tlSG9vaygnb25DcmVhdGUnLCBbaW5zdGFuY2VdKTtcblxuICBpZiAocHJvcHMuc2hvd09uQ3JlYXRlKSB7XG4gICAgc2NoZWR1bGVTaG93KCk7XG4gIH1cblxuICAvLyBQcmV2ZW50IGEgdGlwcHkgd2l0aCBhIGRlbGF5IGZyb20gaGlkaW5nIGlmIHRoZSBjdXJzb3IgbGVmdCB0aGVuIHJldHVybmVkXG4gIC8vIGJlZm9yZSBpdCBzdGFydGVkIGhpZGluZ1xuICBwb3BwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICBpbnN0YW5jZS5jbGVhckRlbGF5VGltZW91dHMoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHBvcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmXG4gICAgICBpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ21vdXNlZW50ZXInKSA+PSAwXG4gICAgKSB7XG4gICAgICBnZXREb2N1bWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRlYm91bmNlZE9uTW91c2VNb3ZlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8g8J+UkiBQcml2YXRlIG1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRUb3VjaFNldHRpbmdzKCk6IFtzdHJpbmcgfCBib29sZWFuLCBudW1iZXJdIHtcbiAgICBjb25zdCB7dG91Y2h9ID0gaW5zdGFuY2UucHJvcHM7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodG91Y2gpID8gdG91Y2ggOiBbdG91Y2gsIDBdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SXNDdXN0b21Ub3VjaEJlaGF2aW9yKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBnZXROb3JtYWxpemVkVG91Y2hTZXR0aW5ncygpWzBdID09PSAnaG9sZCc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJc0RlZmF1bHRSZW5kZXJGbigpOiBib29sZWFuIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuICEhaW5zdGFuY2UucHJvcHMucmVuZGVyPy4kJHRpcHB5O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFRhcmdldCgpOiBFbGVtZW50IHtcbiAgICByZXR1cm4gY3VycmVudFRhcmdldCB8fCByZWZlcmVuY2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREb2N1bWVudCgpOiBEb2N1bWVudCB7XG4gICAgY29uc3QgcGFyZW50ID0gZ2V0Q3VycmVudFRhcmdldCgpLnBhcmVudE5vZGUgYXMgRWxlbWVudDtcbiAgICByZXR1cm4gcGFyZW50ID8gZ2V0T3duZXJEb2N1bWVudChwYXJlbnQpIDogZG9jdW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpOiBQb3BwZXJDaGlsZHJlbiB7XG4gICAgcmV0dXJuIGdldENoaWxkcmVuKHBvcHBlcik7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWxheShpc1Nob3c6IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIC8vIEZvciB0b3VjaCBvciBrZXlib2FyZCBpbnB1dCwgZm9yY2UgYDBgIGRlbGF5IGZvciBVWCByZWFzb25zXG4gICAgLy8gQWxzbyBpZiB0aGUgaW5zdGFuY2UgaXMgbW91bnRlZCBidXQgbm90IHZpc2libGUgKHRyYW5zaXRpb25pbmcgb3V0KSxcbiAgICAvLyBpZ25vcmUgZGVsYXlcbiAgICBpZiAoXG4gICAgICAoaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkICYmICFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHx8XG4gICAgICBjdXJyZW50SW5wdXQuaXNUb3VjaCB8fFxuICAgICAgKGxhc3RUcmlnZ2VyRXZlbnQgJiYgbGFzdFRyaWdnZXJFdmVudC50eXBlID09PSAnZm9jdXMnKVxuICAgICkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldFZhbHVlQXRJbmRleE9yUmV0dXJuKFxuICAgICAgaW5zdGFuY2UucHJvcHMuZGVsYXksXG4gICAgICBpc1Nob3cgPyAwIDogMSxcbiAgICAgIGRlZmF1bHRQcm9wcy5kZWxheVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTdHlsZXMoZnJvbUhpZGUgPSBmYWxzZSk6IHZvaWQge1xuICAgIHBvcHBlci5zdHlsZS5wb2ludGVyRXZlbnRzID1cbiAgICAgIGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmICFmcm9tSGlkZSA/ICcnIDogJ25vbmUnO1xuICAgIHBvcHBlci5zdHlsZS56SW5kZXggPSBgJHtpbnN0YW5jZS5wcm9wcy56SW5kZXh9YDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUhvb2soXG4gICAgaG9vazoga2V5b2YgTGlmZWN5Y2xlSG9va3MsXG4gICAgYXJnczogW0luc3RhbmNlLCBhbnk/XSxcbiAgICBzaG91bGRJbnZva2VQcm9wc0hvb2sgPSB0cnVlXG4gICk6IHZvaWQge1xuICAgIHBsdWdpbnNIb29rcy5mb3JFYWNoKChwbHVnaW5Ib29rcykgPT4ge1xuICAgICAgaWYgKHBsdWdpbkhvb2tzW2hvb2tdKSB7XG4gICAgICAgIHBsdWdpbkhvb2tzW2hvb2tdISguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzaG91bGRJbnZva2VQcm9wc0hvb2spIHtcbiAgICAgIGluc3RhbmNlLnByb3BzW2hvb2tdKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUFyaWFDb250ZW50QXR0cmlidXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IHthcmlhfSA9IGluc3RhbmNlLnByb3BzO1xuXG4gICAgaWYgKCFhcmlhLmNvbnRlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhdHRyID0gYGFyaWEtJHthcmlhLmNvbnRlbnR9YDtcbiAgICBjb25zdCBpZCA9IHBvcHBlci5pZDtcbiAgICBjb25zdCBub2RlcyA9IG5vcm1hbGl6ZVRvQXJyYXkoaW5zdGFuY2UucHJvcHMudHJpZ2dlclRhcmdldCB8fCByZWZlcmVuY2UpO1xuXG4gICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gbm9kZS5nZXRBdHRyaWJ1dGUoYXR0cik7XG5cbiAgICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0ciwgY3VycmVudFZhbHVlID8gYCR7Y3VycmVudFZhbHVlfSAke2lkfWAgOiBpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSBjdXJyZW50VmFsdWUgJiYgY3VycmVudFZhbHVlLnJlcGxhY2UoaWQsICcnKS50cmltKCk7XG5cbiAgICAgICAgaWYgKG5leHRWYWx1ZSkge1xuICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHIsIG5leHRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpOiB2b2lkIHtcbiAgICBpZiAoaGFzQXJpYUV4cGFuZGVkIHx8ICFpbnN0YW5jZS5wcm9wcy5hcmlhLmV4cGFuZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBub3JtYWxpemVUb0FycmF5KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlKTtcblxuICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSkge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnYXJpYS1leHBhbmRlZCcsXG4gICAgICAgICAgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlICYmIG5vZGUgPT09IGdldEN1cnJlbnRUYXJnZXQoKVxuICAgICAgICAgICAgPyAndHJ1ZSdcbiAgICAgICAgICAgIDogJ2ZhbHNlJ1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFudXBJbnRlcmFjdGl2ZU1vdXNlTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGdldERvY3VtZW50KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZGVib3VuY2VkT25Nb3VzZU1vdmUpO1xuICAgIG1vdXNlTW92ZUxpc3RlbmVycyA9IG1vdXNlTW92ZUxpc3RlbmVycy5maWx0ZXIoXG4gICAgICAobGlzdGVuZXIpID0+IGxpc3RlbmVyICE9PSBkZWJvdW5jZWRPbk1vdXNlTW92ZVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkRvY3VtZW50UHJlc3MoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XG4gICAgLy8gTW92ZWQgZmluZ2VyIHRvIHNjcm9sbCBpbnN0ZWFkIG9mIGFuIGludGVudGlvbmFsIHRhcCBvdXRzaWRlXG4gICAgaWYgKGN1cnJlbnRJbnB1dC5pc1RvdWNoKSB7XG4gICAgICBpZiAoZGlkVG91Y2hNb3ZlIHx8IGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3R1YWxUYXJnZXQgPVxuICAgICAgKGV2ZW50LmNvbXBvc2VkUGF0aCAmJiBldmVudC5jb21wb3NlZFBhdGgoKVswXSkgfHwgZXZlbnQudGFyZ2V0O1xuXG4gICAgLy8gQ2xpY2tlZCBvbiBpbnRlcmFjdGl2ZSBwb3BwZXJcbiAgICBpZiAoXG4gICAgICBpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJlxuICAgICAgYWN0dWFsQ29udGFpbnMocG9wcGVyLCBhY3R1YWxUYXJnZXQgYXMgRWxlbWVudClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDbGlja2VkIG9uIHRoZSBldmVudCBsaXN0ZW5lcnMgdGFyZ2V0XG4gICAgaWYgKFxuICAgICAgbm9ybWFsaXplVG9BcnJheShpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IHJlZmVyZW5jZSkuc29tZSgoZWwpID0+XG4gICAgICAgIGFjdHVhbENvbnRhaW5zKGVsLCBhY3R1YWxUYXJnZXQgYXMgRWxlbWVudClcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGlmIChjdXJyZW50SW5wdXQuaXNUb3VjaCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlICYmXG4gICAgICAgIGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignY2xpY2snKSA+PSAwXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbnZva2VIb29rKCdvbkNsaWNrT3V0c2lkZScsIFtpbnN0YW5jZSwgZXZlbnRdKTtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuaGlkZU9uQ2xpY2sgPT09IHRydWUpIHtcbiAgICAgIGluc3RhbmNlLmNsZWFyRGVsYXlUaW1lb3V0cygpO1xuICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuXG4gICAgICAvLyBgbW91c2Vkb3duYCBldmVudCBpcyBmaXJlZCByaWdodCBiZWZvcmUgYGZvY3VzYCBpZiBwcmVzc2luZyB0aGVcbiAgICAgIC8vIGN1cnJlbnRUYXJnZXQuIFRoaXMgbGV0cyBhIHRpcHB5IHdpdGggYGZvY3VzYCB0cmlnZ2VyIGtub3cgdGhhdCBpdFxuICAgICAgLy8gc2hvdWxkIG5vdCBzaG93XG4gICAgICBkaWRIaWRlRHVlVG9Eb2N1bWVudE1vdXNlRG93biA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd24gPSBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUaGUgbGlzdGVuZXIgZ2V0cyBhZGRlZCBpbiBgc2NoZWR1bGVTaG93KClgLCBidXQgdGhpcyBtYXkgYmUgaGlkaW5nIGl0XG4gICAgICAvLyBiZWZvcmUgaXQgc2hvd3MsIGFuZCBoaWRlKCkncyBlYXJseSBiYWlsLW91dCBiZWhhdmlvciBjYW4gcHJldmVudCBpdFxuICAgICAgLy8gZnJvbSBiZWluZyBjbGVhbmVkIHVwXG4gICAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCkge1xuICAgICAgICByZW1vdmVEb2N1bWVudFByZXNzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Ub3VjaE1vdmUoKTogdm9pZCB7XG4gICAgZGlkVG91Y2hNb3ZlID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVG91Y2hTdGFydCgpOiB2b2lkIHtcbiAgICBkaWRUb3VjaE1vdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZERvY3VtZW50UHJlc3MoKTogdm9pZCB7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Eb2N1bWVudFByZXNzLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkRvY3VtZW50UHJlc3MsIFRPVUNIX09QVElPTlMpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBUT1VDSF9PUFRJT05TKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIFRPVUNIX09QVElPTlMpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRG9jdW1lbnRQcmVzcygpOiB2b2lkIHtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkRvY3VtZW50UHJlc3MsIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uRG9jdW1lbnRQcmVzcywgVE9VQ0hfT1BUSU9OUyk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIFRPVUNIX09QVElPTlMpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgVE9VQ0hfT1BUSU9OUyk7XG4gIH1cblxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25lZE91dChkdXJhdGlvbjogbnVtYmVyLCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIG9uVHJhbnNpdGlvbkVuZChkdXJhdGlvbiwgKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICAhaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlICYmXG4gICAgICAgIHBvcHBlci5wYXJlbnROb2RlICYmXG4gICAgICAgIHBvcHBlci5wYXJlbnROb2RlLmNvbnRhaW5zKHBvcHBlcilcbiAgICAgICkge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uZWRJbihkdXJhdGlvbjogbnVtYmVyLCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIG9uVHJhbnNpdGlvbkVuZChkdXJhdGlvbiwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKGR1cmF0aW9uOiBudW1iZXIsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgY29uc3QgYm94ID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKS5ib3g7XG5cbiAgICBmdW5jdGlvbiBsaXN0ZW5lcihldmVudDogVHJhbnNpdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBib3gpIHtcbiAgICAgICAgdXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyKGJveCwgJ3JlbW92ZScsIGxpc3RlbmVyKTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYWtlIGNhbGxiYWNrIHN5bmNocm9ub3VzIGlmIGR1cmF0aW9uIGlzIDBcbiAgICAvLyBgdHJhbnNpdGlvbmVuZGAgd29uJ3QgZmlyZSBvdGhlcndpc2VcbiAgICBpZiAoZHVyYXRpb24gPT09IDApIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lcihib3gsICdyZW1vdmUnLCBjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyKTtcbiAgICB1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIoYm94LCAnYWRkJywgbGlzdGVuZXIpO1xuXG4gICAgY3VycmVudFRyYW5zaXRpb25FbmRMaXN0ZW5lciA9IGxpc3RlbmVyO1xuICB9XG5cbiAgZnVuY3Rpb24gb24oXG4gICAgZXZlbnRUeXBlOiBzdHJpbmcsXG4gICAgaGFuZGxlcjogRXZlbnRMaXN0ZW5lcixcbiAgICBvcHRpb25zOiBib29sZWFuIHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSBmYWxzZVxuICApOiB2b2lkIHtcbiAgICBjb25zdCBub2RlcyA9IG5vcm1hbGl6ZVRvQXJyYXkoaW5zdGFuY2UucHJvcHMudHJpZ2dlclRhcmdldCB8fCByZWZlcmVuY2UpO1xuICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgbGlzdGVuZXJzLnB1c2goe25vZGUsIGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9uc30pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGlmIChnZXRJc0N1c3RvbVRvdWNoQmVoYXZpb3IoKSkge1xuICAgICAgb24oJ3RvdWNoc3RhcnQnLCBvblRyaWdnZXIsIHtwYXNzaXZlOiB0cnVlfSk7XG4gICAgICBvbigndG91Y2hlbmQnLCBvbk1vdXNlTGVhdmUgYXMgRXZlbnRMaXN0ZW5lciwge3Bhc3NpdmU6IHRydWV9KTtcbiAgICB9XG5cbiAgICBzcGxpdEJ5U3BhY2VzKGluc3RhbmNlLnByb3BzLnRyaWdnZXIpLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gJ21hbnVhbCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBvbihldmVudFR5cGUsIG9uVHJpZ2dlcik7XG5cbiAgICAgIHN3aXRjaCAoZXZlbnRUeXBlKSB7XG4gICAgICAgIGNhc2UgJ21vdXNlZW50ZXInOlxuICAgICAgICAgIG9uKCdtb3VzZWxlYXZlJywgb25Nb3VzZUxlYXZlIGFzIEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmb2N1cyc6XG4gICAgICAgICAgb24oaXNJRTExID8gJ2ZvY3Vzb3V0JyA6ICdibHVyJywgb25CbHVyT3JGb2N1c091dCBhcyBFdmVudExpc3RlbmVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZm9jdXNpbic6XG4gICAgICAgICAgb24oJ2ZvY3Vzb3V0Jywgb25CbHVyT3JGb2N1c091dCBhcyBFdmVudExpc3RlbmVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpOiB2b2lkIHtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgoe25vZGUsIGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9uc306IExpc3RlbmVyT2JqZWN0KSA9PiB7XG4gICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgICBsaXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHJpZ2dlcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgc2hvdWxkU2NoZWR1bGVDbGlja0hpZGUgPSBmYWxzZTtcblxuICAgIGlmIChcbiAgICAgICFpbnN0YW5jZS5zdGF0ZS5pc0VuYWJsZWQgfHxcbiAgICAgIGlzRXZlbnRMaXN0ZW5lclN0b3BwZWQoZXZlbnQpIHx8XG4gICAgICBkaWRIaWRlRHVlVG9Eb2N1bWVudE1vdXNlRG93blxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHdhc0ZvY3VzZWQgPSBsYXN0VHJpZ2dlckV2ZW50Py50eXBlID09PSAnZm9jdXMnO1xuXG4gICAgbGFzdFRyaWdnZXJFdmVudCA9IGV2ZW50O1xuICAgIGN1cnJlbnRUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEVsZW1lbnQ7XG5cbiAgICBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTtcblxuICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlICYmIGlzTW91c2VFdmVudChldmVudCkpIHtcbiAgICAgIC8vIElmIHNjcm9sbGluZywgYG1vdXNlZW50ZXJgIGV2ZW50cyBjYW4gYmUgZmlyZWQgaWYgdGhlIGN1cnNvciBsYW5kc1xuICAgICAgLy8gb3ZlciBhIG5ldyB0YXJnZXQsIGJ1dCBgbW91c2Vtb3ZlYCBldmVudHMgZG9uJ3QgZ2V0IGZpcmVkLiBUaGlzXG4gICAgICAvLyBjYXVzZXMgaW50ZXJhY3RpdmUgdG9vbHRpcHMgdG8gZ2V0IHN0dWNrIG9wZW4gdW50aWwgdGhlIGN1cnNvciBpc1xuICAgICAgLy8gbW92ZWRcbiAgICAgIG1vdXNlTW92ZUxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvLyBUb2dnbGUgc2hvdy9oaWRlIHdoZW4gY2xpY2tpbmcgY2xpY2stdHJpZ2dlcmVkIHRvb2x0aXBzXG4gICAgaWYgKFxuICAgICAgZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJlxuICAgICAgKGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignbW91c2VlbnRlcicpIDwgMCB8fFxuICAgICAgICBpc1Zpc2libGVGcm9tQ2xpY2spICYmXG4gICAgICBpbnN0YW5jZS5wcm9wcy5oaWRlT25DbGljayAhPT0gZmFsc2UgJiZcbiAgICAgIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZVxuICAgICkge1xuICAgICAgc2hvdWxkU2NoZWR1bGVDbGlja0hpZGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY2hlZHVsZVNob3coZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICBpc1Zpc2libGVGcm9tQ2xpY2sgPSAhc2hvdWxkU2NoZWR1bGVDbGlja0hpZGU7XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFNjaGVkdWxlQ2xpY2tIaWRlICYmICF3YXNGb2N1c2VkKSB7XG4gICAgICBzY2hlZHVsZUhpZGUoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIE5vZGU7XG4gICAgY29uc3QgaXNDdXJzb3JPdmVyUmVmZXJlbmNlT3JQb3BwZXIgPVxuICAgICAgZ2V0Q3VycmVudFRhcmdldCgpLmNvbnRhaW5zKHRhcmdldCkgfHwgcG9wcGVyLmNvbnRhaW5zKHRhcmdldCk7XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlbW92ZScgJiYgaXNDdXJzb3JPdmVyUmVmZXJlbmNlT3JQb3BwZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwb3BwZXJUcmVlRGF0YSA9IGdldE5lc3RlZFBvcHBlclRyZWUoKVxuICAgICAgLmNvbmNhdChwb3BwZXIpXG4gICAgICAubWFwKChwb3BwZXIpID0+IHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBwb3BwZXIuX3RpcHB5ITtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZT8uc3RhdGU7XG5cbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvcHBlclJlY3Q6IHBvcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgIHBvcHBlclN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pIGFzIFBvcHBlclRyZWVEYXRhW107XG5cbiAgICBpZiAoaXNDdXJzb3JPdXRzaWRlSW50ZXJhY3RpdmVCb3JkZXIocG9wcGVyVHJlZURhdGEsIGV2ZW50KSkge1xuICAgICAgY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgIHNjaGVkdWxlSGlkZShldmVudCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3VzZUxlYXZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3Qgc2hvdWxkQmFpbCA9XG4gICAgICBpc0V2ZW50TGlzdGVuZXJTdG9wcGVkKGV2ZW50KSB8fFxuICAgICAgKGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignY2xpY2snKSA+PSAwICYmIGlzVmlzaWJsZUZyb21DbGljayk7XG5cbiAgICBpZiAoc2hvdWxkQmFpbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSkge1xuICAgICAgaW5zdGFuY2UuaGlkZVdpdGhJbnRlcmFjdGl2aXR5KGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzY2hlZHVsZUhpZGUoZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25CbHVyT3JGb2N1c091dChldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignZm9jdXNpbicpIDwgMCAmJlxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSBnZXRDdXJyZW50VGFyZ2V0KClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiBmb2N1cyB3YXMgbW92ZWQgdG8gd2l0aGluIHRoZSBwb3BwZXJcbiAgICBpZiAoXG4gICAgICBpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJlxuICAgICAgZXZlbnQucmVsYXRlZFRhcmdldCAmJlxuICAgICAgcG9wcGVyLmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQgYXMgRWxlbWVudClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzY2hlZHVsZUhpZGUoZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNFdmVudExpc3RlbmVyU3RvcHBlZChldmVudDogRXZlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VycmVudElucHV0LmlzVG91Y2hcbiAgICAgID8gZ2V0SXNDdXN0b21Ub3VjaEJlaGF2aW9yKCkgIT09IGV2ZW50LnR5cGUuaW5kZXhPZigndG91Y2gnKSA+PSAwXG4gICAgICA6IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUG9wcGVySW5zdGFuY2UoKTogdm9pZCB7XG4gICAgZGVzdHJveVBvcHBlckluc3RhbmNlKCk7XG5cbiAgICBjb25zdCB7XG4gICAgICBwb3BwZXJPcHRpb25zLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgb2Zmc2V0LFxuICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICAgIG1vdmVUcmFuc2l0aW9uLFxuICAgIH0gPSBpbnN0YW5jZS5wcm9wcztcblxuICAgIGNvbnN0IGFycm93ID0gZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSA/IGdldENoaWxkcmVuKHBvcHBlcikuYXJyb3cgOiBudWxsO1xuXG4gICAgY29uc3QgY29tcHV0ZWRSZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2VDbGllbnRSZWN0XG4gICAgICA/IHtcbiAgICAgICAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6IGdldFJlZmVyZW5jZUNsaWVudFJlY3QsXG4gICAgICAgICAgY29udGV4dEVsZW1lbnQ6XG4gICAgICAgICAgICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0LmNvbnRleHRFbGVtZW50IHx8IGdldEN1cnJlbnRUYXJnZXQoKSxcbiAgICAgICAgfVxuICAgICAgOiByZWZlcmVuY2U7XG5cbiAgICBjb25zdCB0aXBweU1vZGlmaWVyOiBNb2RpZmllcjwnJCR0aXBweScsIFJlY29yZDxzdHJpbmcsIHVua25vd24+PiA9IHtcbiAgICAgIG5hbWU6ICckJHRpcHB5JyxcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgICAgIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXSxcbiAgICAgIGZuKHtzdGF0ZX0pIHtcbiAgICAgICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgICAgICBjb25zdCB7Ym94fSA9IGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCk7XG5cbiAgICAgICAgICBbJ3BsYWNlbWVudCcsICdyZWZlcmVuY2UtaGlkZGVuJywgJ2VzY2FwZWQnXS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXR0ciA9PT0gJ3BsYWNlbWVudCcpIHtcbiAgICAgICAgICAgICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1wbGFjZW1lbnQnLCBzdGF0ZS5wbGFjZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyW2BkYXRhLXBvcHBlci0ke2F0dHJ9YF0pIHtcbiAgICAgICAgICAgICAgICBib3guc2V0QXR0cmlidXRlKGBkYXRhLSR7YXR0cn1gLCAnJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm94LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS0ke2F0dHJ9YCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0ge307XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHR5cGUgVGlwcHlNb2RpZmllciA9IE1vZGlmaWVyPCckJHRpcHB5JywgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+O1xuICAgIHR5cGUgRXh0ZW5kZWRNb2RpZmllcnMgPSBTdHJpY3RNb2RpZmllcnMgfCBQYXJ0aWFsPFRpcHB5TW9kaWZpZXI+O1xuXG4gICAgY29uc3QgbW9kaWZpZXJzOiBBcnJheTxFeHRlbmRlZE1vZGlmaWVycz4gPSBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgb2Zmc2V0LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICB0b3A6IDIsXG4gICAgICAgICAgICBib3R0b206IDIsXG4gICAgICAgICAgICBsZWZ0OiA1LFxuICAgICAgICAgICAgcmlnaHQ6IDUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIHBhZGRpbmc6IDUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBhZGFwdGl2ZTogIW1vdmVUcmFuc2l0aW9uLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRpcHB5TW9kaWZpZXIsXG4gICAgXTtcblxuICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpICYmIGFycm93KSB7XG4gICAgICBtb2RpZmllcnMucHVzaCh7XG4gICAgICAgIG5hbWU6ICdhcnJvdycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBlbGVtZW50OiBhcnJvdyxcbiAgICAgICAgICBwYWRkaW5nOiAzLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbW9kaWZpZXJzLnB1c2goLi4uKHBvcHBlck9wdGlvbnM/Lm1vZGlmaWVycyB8fCBbXSkpO1xuXG4gICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UgPSBjcmVhdGVQb3BwZXI8RXh0ZW5kZWRNb2RpZmllcnM+KFxuICAgICAgY29tcHV0ZWRSZWZlcmVuY2UsXG4gICAgICBwb3BwZXIsXG4gICAgICB7XG4gICAgICAgIC4uLnBvcHBlck9wdGlvbnMsXG4gICAgICAgIHBsYWNlbWVudCxcbiAgICAgICAgb25GaXJzdFVwZGF0ZSxcbiAgICAgICAgbW9kaWZpZXJzLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95UG9wcGVySW5zdGFuY2UoKTogdm9pZCB7XG4gICAgaWYgKGluc3RhbmNlLnBvcHBlckluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbW91bnQoKTogdm9pZCB7XG4gICAgY29uc3Qge2FwcGVuZFRvfSA9IGluc3RhbmNlLnByb3BzO1xuXG4gICAgbGV0IHBhcmVudE5vZGU6IGFueTtcblxuICAgIC8vIEJ5IGRlZmF1bHQsIHdlJ2xsIGFwcGVuZCB0aGUgcG9wcGVyIHRvIHRoZSB0cmlnZ2VyVGFyZ2V0cydzIHBhcmVudE5vZGUgc29cbiAgICAvLyBpdCdzIGRpcmVjdGx5IGFmdGVyIHRoZSByZWZlcmVuY2UgZWxlbWVudCBzbyB0aGUgZWxlbWVudHMgaW5zaWRlIHRoZVxuICAgIC8vIHRpcHB5IGNhbiBiZSB0YWJiZWQgdG9cbiAgICAvLyBJZiB0aGVyZSBhcmUgY2xpcHBpbmcgaXNzdWVzLCB0aGUgdXNlciBjYW4gc3BlY2lmeSBhIGRpZmZlcmVudCBhcHBlbmRUb1xuICAgIC8vIGFuZCBlbnN1cmUgZm9jdXMgbWFuYWdlbWVudCBpcyBoYW5kbGVkIGNvcnJlY3RseSBtYW51YWxseVxuICAgIGNvbnN0IG5vZGUgPSBnZXRDdXJyZW50VGFyZ2V0KCk7XG5cbiAgICBpZiAoXG4gICAgICAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgYXBwZW5kVG8gPT09IFRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPKSB8fFxuICAgICAgYXBwZW5kVG8gPT09ICdwYXJlbnQnXG4gICAgKSB7XG4gICAgICBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnROb2RlID0gaW52b2tlV2l0aEFyZ3NPclJldHVybihhcHBlbmRUbywgW25vZGVdKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgcG9wcGVyIGVsZW1lbnQgbmVlZHMgdG8gZXhpc3Qgb24gdGhlIERPTSBiZWZvcmUgaXRzIHBvc2l0aW9uIGNhbiBiZVxuICAgIC8vIHVwZGF0ZWQgYXMgUG9wcGVyIG5lZWRzIHRvIHJlYWQgaXRzIGRpbWVuc2lvbnNcbiAgICBpZiAoIXBhcmVudE5vZGUuY29udGFpbnMocG9wcGVyKSkge1xuICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChwb3BwZXIpO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCA9IHRydWU7XG5cbiAgICBjcmVhdGVQb3BwZXJJbnN0YW5jZSgpO1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgLy8gQWNjZXNzaWJpbGl0eSBjaGVja1xuICAgICAgd2FybldoZW4oXG4gICAgICAgIGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmXG4gICAgICAgICAgYXBwZW5kVG8gPT09IGRlZmF1bHRQcm9wcy5hcHBlbmRUbyAmJlxuICAgICAgICAgIG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nICE9PSBwb3BwZXIsXG4gICAgICAgIFtcbiAgICAgICAgICAnSW50ZXJhY3RpdmUgdGlwcHkgZWxlbWVudCBtYXkgbm90IGJlIGFjY2Vzc2libGUgdmlhIGtleWJvYXJkJyxcbiAgICAgICAgICAnbmF2aWdhdGlvbiBiZWNhdXNlIGl0IGlzIG5vdCBkaXJlY3RseSBhZnRlciB0aGUgcmVmZXJlbmNlIGVsZW1lbnQnLFxuICAgICAgICAgICdpbiB0aGUgRE9NIHNvdXJjZSBvcmRlci4nLFxuICAgICAgICAgICdcXG5cXG4nLFxuICAgICAgICAgICdVc2luZyBhIHdyYXBwZXIgPGRpdj4gb3IgPHNwYW4+IHRhZyBhcm91bmQgdGhlIHJlZmVyZW5jZSBlbGVtZW50JyxcbiAgICAgICAgICAnc29sdmVzIHRoaXMgYnkgY3JlYXRpbmcgYSBuZXcgcGFyZW50Tm9kZSBjb250ZXh0LicsXG4gICAgICAgICAgJ1xcblxcbicsXG4gICAgICAgICAgJ1NwZWNpZnlpbmcgYGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5YCBzaWxlbmNlcyB0aGlzIHdhcm5pbmcsIGJ1dCBpdCcsXG4gICAgICAgICAgJ2Fzc3VtZXMgeW91IGFyZSB1c2luZyBhIGZvY3VzIG1hbmFnZW1lbnQgc29sdXRpb24gdG8gaGFuZGxlJyxcbiAgICAgICAgICAna2V5Ym9hcmQgbmF2aWdhdGlvbi4nLFxuICAgICAgICAgICdcXG5cXG4nLFxuICAgICAgICAgICdTZWU6IGh0dHBzOi8vYXRvbWlrcy5naXRodWIuaW8vdGlwcHlqcy92Ni9hY2Nlc3NpYmlsaXR5LyNpbnRlcmFjdGl2aXR5JyxcbiAgICAgICAgXS5qb2luKCcgJylcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TmVzdGVkUG9wcGVyVHJlZSgpOiBQb3BwZXJFbGVtZW50W10ge1xuICAgIHJldHVybiBhcnJheUZyb20oXG4gICAgICBwb3BwZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtX19OQU1FU1BBQ0VfUFJFRklYX18tcm9vdF0nKVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBzY2hlZHVsZVNob3coZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgIGluc3RhbmNlLmNsZWFyRGVsYXlUaW1lb3V0cygpO1xuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBpbnZva2VIb29rKCdvblRyaWdnZXInLCBbaW5zdGFuY2UsIGV2ZW50XSk7XG4gICAgfVxuXG4gICAgYWRkRG9jdW1lbnRQcmVzcygpO1xuXG4gICAgbGV0IGRlbGF5ID0gZ2V0RGVsYXkodHJ1ZSk7XG4gICAgY29uc3QgW3RvdWNoVmFsdWUsIHRvdWNoRGVsYXldID0gZ2V0Tm9ybWFsaXplZFRvdWNoU2V0dGluZ3MoKTtcblxuICAgIGlmIChjdXJyZW50SW5wdXQuaXNUb3VjaCAmJiB0b3VjaFZhbHVlID09PSAnaG9sZCcgJiYgdG91Y2hEZWxheSkge1xuICAgICAgZGVsYXkgPSB0b3VjaERlbGF5O1xuICAgIH1cblxuICAgIGlmIChkZWxheSkge1xuICAgICAgc2hvd1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaW5zdGFuY2Uuc2hvdygpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2NoZWR1bGVIaWRlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGluc3RhbmNlLmNsZWFyRGVsYXlUaW1lb3V0cygpO1xuXG4gICAgaW52b2tlSG9vaygnb25VbnRyaWdnZXInLCBbaW5zdGFuY2UsIGV2ZW50XSk7XG5cbiAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgcmVtb3ZlRG9jdW1lbnRQcmVzcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRm9yIGludGVyYWN0aXZlIHRpcHBpZXMsIHNjaGVkdWxlSGlkZSBpcyBhZGRlZCB0byBhIGRvY3VtZW50LmJvZHkgaGFuZGxlclxuICAgIC8vIGZyb20gb25Nb3VzZUxlYXZlIHNvIG11c3QgaW50ZXJjZXB0IHNjaGVkdWxlZCBoaWRlcyBmcm9tIG1vdXNlbW92ZS9sZWF2ZVxuICAgIC8vIGV2ZW50cyB3aGVuIHRyaWdnZXIgY29udGFpbnMgbW91c2VlbnRlciBhbmQgY2xpY2ssIGFuZCB0aGUgdGlwIGlzXG4gICAgLy8gY3VycmVudGx5IHNob3duIGFzIGEgcmVzdWx0IG9mIGEgY2xpY2suXG4gICAgaWYgKFxuICAgICAgaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdtb3VzZWVudGVyJykgPj0gMCAmJlxuICAgICAgaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdjbGljaycpID49IDAgJiZcbiAgICAgIFsnbW91c2VsZWF2ZScsICdtb3VzZW1vdmUnXS5pbmRleE9mKGV2ZW50LnR5cGUpID49IDAgJiZcbiAgICAgIGlzVmlzaWJsZUZyb21DbGlja1xuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGF5ID0gZ2V0RGVsYXkoZmFsc2UpO1xuXG4gICAgaWYgKGRlbGF5KSB7XG4gICAgICBoaWRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZpeGVzIGEgYHRyYW5zaXRpb25lbmRgIHByb2JsZW0gd2hlbiBpdCBmaXJlcyAxIGZyYW1lIHRvb1xuICAgICAgLy8gbGF0ZSBzb21ldGltZXMsIHdlIGRvbid0IHdhbnQgaGlkZSgpIHRvIGJlIGNhbGxlZC5cbiAgICAgIHNjaGVkdWxlSGlkZUFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIPCflJEgUHVibGljIG1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGZ1bmN0aW9uIGVuYWJsZSgpOiB2b2lkIHtcbiAgICBpbnN0YW5jZS5zdGF0ZS5pc0VuYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzYWJsZSgpOiB2b2lkIHtcbiAgICAvLyBEaXNhYmxpbmcgdGhlIGluc3RhbmNlIHNob3VsZCBhbHNvIGhpZGUgaXRcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYXRvbWlrcy90aXBweS5qcy1yZWFjdC9pc3N1ZXMvMTA2XG4gICAgaW5zdGFuY2UuaGlkZSgpO1xuICAgIGluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJEZWxheVRpbWVvdXRzKCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dChzaG93VGltZW91dCk7XG4gICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShzY2hlZHVsZUhpZGVBbmltYXRpb25GcmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRQcm9wcyhwYXJ0aWFsUHJvcHM6IFBhcnRpYWw8UHJvcHM+KTogdm9pZCB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdzZXRQcm9wcycpKTtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnZva2VIb29rKCdvbkJlZm9yZVVwZGF0ZScsIFtpbnN0YW5jZSwgcGFydGlhbFByb3BzXSk7XG5cbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcblxuICAgIGNvbnN0IHByZXZQcm9wcyA9IGluc3RhbmNlLnByb3BzO1xuICAgIGNvbnN0IG5leHRQcm9wcyA9IGV2YWx1YXRlUHJvcHMocmVmZXJlbmNlLCB7XG4gICAgICAuLi5wcmV2UHJvcHMsXG4gICAgICAuLi5yZW1vdmVVbmRlZmluZWRQcm9wcyhwYXJ0aWFsUHJvcHMpLFxuICAgICAgaWdub3JlQXR0cmlidXRlczogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGluc3RhbmNlLnByb3BzID0gbmV4dFByb3BzO1xuXG4gICAgYWRkTGlzdGVuZXJzKCk7XG5cbiAgICBpZiAocHJldlByb3BzLmludGVyYWN0aXZlRGVib3VuY2UgIT09IG5leHRQcm9wcy5pbnRlcmFjdGl2ZURlYm91bmNlKSB7XG4gICAgICBjbGVhbnVwSW50ZXJhY3RpdmVNb3VzZUxpc3RlbmVycygpO1xuICAgICAgZGVib3VuY2VkT25Nb3VzZU1vdmUgPSBkZWJvdW5jZShcbiAgICAgICAgb25Nb3VzZU1vdmUsXG4gICAgICAgIG5leHRQcm9wcy5pbnRlcmFjdGl2ZURlYm91bmNlXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIEVuc3VyZSBzdGFsZSBhcmlhLWV4cGFuZGVkIGF0dHJpYnV0ZXMgYXJlIHJlbW92ZWRcbiAgICBpZiAocHJldlByb3BzLnRyaWdnZXJUYXJnZXQgJiYgIW5leHRQcm9wcy50cmlnZ2VyVGFyZ2V0KSB7XG4gICAgICBub3JtYWxpemVUb0FycmF5KHByZXZQcm9wcy50cmlnZ2VyVGFyZ2V0KS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG5leHRQcm9wcy50cmlnZ2VyVGFyZ2V0KSB7XG4gICAgICByZWZlcmVuY2UucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk7XG4gICAgaGFuZGxlU3R5bGVzKCk7XG5cbiAgICBpZiAob25VcGRhdGUpIHtcbiAgICAgIG9uVXBkYXRlKHByZXZQcm9wcywgbmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2UucG9wcGVySW5zdGFuY2UpIHtcbiAgICAgIGNyZWF0ZVBvcHBlckluc3RhbmNlKCk7XG5cbiAgICAgIC8vIEZpeGVzIGFuIGlzc3VlIHdpdGggbmVzdGVkIHRpcHBpZXMgaWYgdGhleSBhcmUgYWxsIGdldHRpbmcgcmUtcmVuZGVyZWQsXG4gICAgICAvLyBhbmQgdGhlIG5lc3RlZCBvbmVzIGdldCByZS1yZW5kZXJlZCBmaXJzdC5cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hdG9taWtzL3RpcHB5anMtcmVhY3QvaXNzdWVzLzE3N1xuICAgICAgLy8gVE9ETzogZmluZCBhIGNsZWFuZXIgLyBtb3JlIGVmZmljaWVudCBzb2x1dGlvbighKVxuICAgICAgZ2V0TmVzdGVkUG9wcGVyVHJlZSgpLmZvckVhY2goKG5lc3RlZFBvcHBlcikgPT4ge1xuICAgICAgICAvLyBSZWFjdCAoYW5kIG90aGVyIFVJIGxpYnMgbGlrZWx5KSByZXF1aXJlcyBhIHJBRiB3cmFwcGVyIGFzIGl0IGZsdXNoZXNcbiAgICAgICAgLy8gaXRzIHdvcmsgaW4gb25lXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShuZXN0ZWRQb3BwZXIuX3RpcHB5IS5wb3BwZXJJbnN0YW5jZSEuZm9yY2VVcGRhdGUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW52b2tlSG9vaygnb25BZnRlclVwZGF0ZScsIFtpbnN0YW5jZSwgcGFydGlhbFByb3BzXSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRDb250ZW50KGNvbnRlbnQ6IENvbnRlbnQpOiB2b2lkIHtcbiAgICBpbnN0YW5jZS5zZXRQcm9wcyh7Y29udGVudH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdygpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICB3YXJuV2hlbihpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCwgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ3Nob3cnKSk7XG4gICAgfVxuXG4gICAgLy8gRWFybHkgYmFpbC1vdXRcbiAgICBjb25zdCBpc0FscmVhZHlWaXNpYmxlID0gaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlO1xuICAgIGNvbnN0IGlzRGVzdHJveWVkID0gaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQ7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9ICFpbnN0YW5jZS5zdGF0ZS5pc0VuYWJsZWQ7XG4gICAgY29uc3QgaXNUb3VjaEFuZFRvdWNoRGlzYWJsZWQgPVxuICAgICAgY3VycmVudElucHV0LmlzVG91Y2ggJiYgIWluc3RhbmNlLnByb3BzLnRvdWNoO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm4oXG4gICAgICBpbnN0YW5jZS5wcm9wcy5kdXJhdGlvbixcbiAgICAgIDAsXG4gICAgICBkZWZhdWx0UHJvcHMuZHVyYXRpb25cbiAgICApO1xuXG4gICAgaWYgKFxuICAgICAgaXNBbHJlYWR5VmlzaWJsZSB8fFxuICAgICAgaXNEZXN0cm95ZWQgfHxcbiAgICAgIGlzRGlzYWJsZWQgfHxcbiAgICAgIGlzVG91Y2hBbmRUb3VjaERpc2FibGVkXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gTm9ybWFsaXplIGBkaXNhYmxlZGAgYmVoYXZpb3IgYWNyb3NzIGJyb3dzZXJzLlxuICAgIC8vIEZpcmVmb3ggYWxsb3dzIGV2ZW50cyBvbiBkaXNhYmxlZCBlbGVtZW50cywgYnV0IENocm9tZSBkb2Vzbid0LlxuICAgIC8vIFVzaW5nIGEgd3JhcHBlciBlbGVtZW50IChpLmUuIDxzcGFuPikgaXMgcmVjb21tZW5kZWQuXG4gICAgaWYgKGdldEN1cnJlbnRUYXJnZXQoKS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnZva2VIb29rKCdvblNob3cnLCBbaW5zdGFuY2VdLCBmYWxzZSk7XG4gICAgaWYgKGluc3RhbmNlLnByb3BzLm9uU2hvdyhpbnN0YW5jZSkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlID0gdHJ1ZTtcblxuICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICBwb3BwZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9XG5cbiAgICBoYW5kbGVTdHlsZXMoKTtcbiAgICBhZGREb2N1bWVudFByZXNzKCk7XG5cbiAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCkge1xuICAgICAgcG9wcGVyLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgLy8gSWYgZmxpcHBpbmcgdG8gdGhlIG9wcG9zaXRlIHNpZGUgYWZ0ZXIgaGlkaW5nIGF0IGxlYXN0IG9uY2UsIHRoZVxuICAgIC8vIGFuaW1hdGlvbiB3aWxsIHVzZSB0aGUgd3JvbmcgcGxhY2VtZW50IHdpdGhvdXQgcmVzZXR0aW5nIHRoZSBkdXJhdGlvblxuICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICBjb25zdCB7Ym94LCBjb250ZW50fSA9IGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCk7XG4gICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24oW2JveCwgY29udGVudF0sIDApO1xuICAgIH1cblxuICAgIG9uRmlyc3RVcGRhdGUgPSAoKTogdm9pZCA9PiB7XG4gICAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSB8fCBpZ25vcmVPbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWdub3JlT25GaXJzdFVwZGF0ZSA9IHRydWU7XG5cbiAgICAgIC8vIHJlZmxvd1xuICAgICAgdm9pZCBwb3BwZXIub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICBwb3BwZXIuc3R5bGUudHJhbnNpdGlvbiA9IGluc3RhbmNlLnByb3BzLm1vdmVUcmFuc2l0aW9uO1xuXG4gICAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSAmJiBpbnN0YW5jZS5wcm9wcy5hbmltYXRpb24pIHtcbiAgICAgICAgY29uc3Qge2JveCwgY29udGVudH0gPSBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpO1xuICAgICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24oW2JveCwgY29udGVudF0sIGR1cmF0aW9uKTtcbiAgICAgICAgc2V0VmlzaWJpbGl0eVN0YXRlKFtib3gsIGNvbnRlbnRdLCAndmlzaWJsZScpO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVBcmlhQ29udGVudEF0dHJpYnV0ZSgpO1xuICAgICAgaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk7XG5cbiAgICAgIHB1c2hJZlVuaXF1ZShtb3VudGVkSW5zdGFuY2VzLCBpbnN0YW5jZSk7XG5cbiAgICAgIC8vIGNlcnRhaW4gbW9kaWZpZXJzIChlLmcuIGBtYXhTaXplYCkgcmVxdWlyZSBhIHNlY29uZCB1cGRhdGUgYWZ0ZXIgdGhlXG4gICAgICAvLyBwb3BwZXIgaGFzIGJlZW4gcG9zaXRpb25lZCBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlPy5mb3JjZVVwZGF0ZSgpO1xuXG4gICAgICBpbnZva2VIb29rKCdvbk1vdW50JywgW2luc3RhbmNlXSk7XG5cbiAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5hbmltYXRpb24gJiYgZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgICBvblRyYW5zaXRpb25lZEluKGR1cmF0aW9uLCAoKSA9PiB7XG4gICAgICAgICAgaW5zdGFuY2Uuc3RhdGUuaXNTaG93biA9IHRydWU7XG4gICAgICAgICAgaW52b2tlSG9vaygnb25TaG93bicsIFtpbnN0YW5jZV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbW91bnQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGUoKTogdm9pZCB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdoaWRlJykpO1xuICAgIH1cblxuICAgIC8vIEVhcmx5IGJhaWwtb3V0XG4gICAgY29uc3QgaXNBbHJlYWR5SGlkZGVuID0gIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZTtcbiAgICBjb25zdCBpc0Rlc3Ryb3llZCA9IGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkO1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSAhaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm4oXG4gICAgICBpbnN0YW5jZS5wcm9wcy5kdXJhdGlvbixcbiAgICAgIDEsXG4gICAgICBkZWZhdWx0UHJvcHMuZHVyYXRpb25cbiAgICApO1xuXG4gICAgaWYgKGlzQWxyZWFkeUhpZGRlbiB8fCBpc0Rlc3Ryb3llZCB8fCBpc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW52b2tlSG9vaygnb25IaWRlJywgW2luc3RhbmNlXSwgZmFsc2UpO1xuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkhpZGUoaW5zdGFuY2UpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgIGluc3RhbmNlLnN0YXRlLmlzU2hvd24gPSBmYWxzZTtcbiAgICBpZ25vcmVPbkZpcnN0VXBkYXRlID0gZmFsc2U7XG4gICAgaXNWaXNpYmxlRnJvbUNsaWNrID0gZmFsc2U7XG5cbiAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgcG9wcGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9XG5cbiAgICBjbGVhbnVwSW50ZXJhY3RpdmVNb3VzZUxpc3RlbmVycygpO1xuICAgIHJlbW92ZURvY3VtZW50UHJlc3MoKTtcbiAgICBoYW5kbGVTdHlsZXModHJ1ZSk7XG5cbiAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgY29uc3Qge2JveCwgY29udGVudH0gPSBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpO1xuXG4gICAgICBpZiAoaW5zdGFuY2UucHJvcHMuYW5pbWF0aW9uKSB7XG4gICAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbihbYm94LCBjb250ZW50XSwgZHVyYXRpb24pO1xuICAgICAgICBzZXRWaXNpYmlsaXR5U3RhdGUoW2JveCwgY29udGVudF0sICdoaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVBcmlhQ29udGVudEF0dHJpYnV0ZSgpO1xuICAgIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuXG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmFuaW1hdGlvbikge1xuICAgICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgICAgb25UcmFuc2l0aW9uZWRPdXQoZHVyYXRpb24sIGluc3RhbmNlLnVubW91bnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS51bm1vdW50KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVdpdGhJbnRlcmFjdGl2aXR5KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgd2FybldoZW4oXG4gICAgICAgIGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLFxuICAgICAgICBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygnaGlkZVdpdGhJbnRlcmFjdGl2aXR5JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0RG9jdW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgcHVzaElmVW5pcXVlKG1vdXNlTW92ZUxpc3RlbmVycywgZGVib3VuY2VkT25Nb3VzZU1vdmUpO1xuICAgIGRlYm91bmNlZE9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVubW91bnQoKTogdm9pZCB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCd1bm1vdW50JykpO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgIGluc3RhbmNlLmhpZGUoKTtcbiAgICB9XG5cbiAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRlc3Ryb3lQb3BwZXJJbnN0YW5jZSgpO1xuXG4gICAgLy8gSWYgYSBwb3BwZXIgaXMgbm90IGludGVyYWN0aXZlLCBpdCB3aWxsIGJlIGFwcGVuZGVkIG91dHNpZGUgdGhlIHBvcHBlclxuICAgIC8vIHRyZWUgYnkgZGVmYXVsdC4gVGhpcyBzZWVtcyBtYWlubHkgZm9yIGludGVyYWN0aXZlIHRpcHBpZXMsIGJ1dCB3ZSBzaG91bGRcbiAgICAvLyBmaW5kIGEgd29ya2Fyb3VuZCBpZiBwb3NzaWJsZVxuICAgIGdldE5lc3RlZFBvcHBlclRyZWUoKS5mb3JFYWNoKChuZXN0ZWRQb3BwZXIpID0+IHtcbiAgICAgIG5lc3RlZFBvcHBlci5fdGlwcHkhLnVubW91bnQoKTtcbiAgICB9KTtcblxuICAgIGlmIChwb3BwZXIucGFyZW50Tm9kZSkge1xuICAgICAgcG9wcGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocG9wcGVyKTtcbiAgICB9XG5cbiAgICBtb3VudGVkSW5zdGFuY2VzID0gbW91bnRlZEluc3RhbmNlcy5maWx0ZXIoKGkpID0+IGkgIT09IGluc3RhbmNlKTtcblxuICAgIGluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCA9IGZhbHNlO1xuICAgIGludm9rZUhvb2soJ29uSGlkZGVuJywgW2luc3RhbmNlXSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCk6IHZvaWQge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLCBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygnZGVzdHJveScpKTtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5jbGVhckRlbGF5VGltZW91dHMoKTtcbiAgICBpbnN0YW5jZS51bm1vdW50KCk7XG5cbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcblxuICAgIGRlbGV0ZSByZWZlcmVuY2UuX3RpcHB5O1xuXG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQgPSB0cnVlO1xuXG4gICAgaW52b2tlSG9vaygnb25EZXN0cm95JywgW2luc3RhbmNlXSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzLCB7XG4gIGN1cnJlbnRJbnB1dCxcbn0gZnJvbSAnLi9iaW5kR2xvYmFsRXZlbnRMaXN0ZW5lcnMnO1xuaW1wb3J0IGNyZWF0ZVRpcHB5LCB7bW91bnRlZEluc3RhbmNlc30gZnJvbSAnLi9jcmVhdGVUaXBweSc7XG5pbXBvcnQge2dldEFycmF5T2ZFbGVtZW50cywgaXNFbGVtZW50LCBpc1JlZmVyZW5jZUVsZW1lbnR9IGZyb20gJy4vZG9tLXV0aWxzJztcbmltcG9ydCB7ZGVmYXVsdFByb3BzLCBzZXREZWZhdWx0UHJvcHMsIHZhbGlkYXRlUHJvcHN9IGZyb20gJy4vcHJvcHMnO1xuaW1wb3J0IHtIaWRlQWxsLCBIaWRlQWxsT3B0aW9ucywgSW5zdGFuY2UsIFByb3BzLCBUYXJnZXRzfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7dmFsaWRhdGVUYXJnZXRzLCB3YXJuV2hlbn0gZnJvbSAnLi92YWxpZGF0aW9uJztcblxuZnVuY3Rpb24gdGlwcHkoXG4gIHRhcmdldHM6IFRhcmdldHMsXG4gIG9wdGlvbmFsUHJvcHM6IFBhcnRpYWw8UHJvcHM+ID0ge31cbik6IEluc3RhbmNlIHwgSW5zdGFuY2VbXSB7XG4gIGNvbnN0IHBsdWdpbnMgPSBkZWZhdWx0UHJvcHMucGx1Z2lucy5jb25jYXQob3B0aW9uYWxQcm9wcy5wbHVnaW5zIHx8IFtdKTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoX19ERVZfXykge1xuICAgIHZhbGlkYXRlVGFyZ2V0cyh0YXJnZXRzKTtcbiAgICB2YWxpZGF0ZVByb3BzKG9wdGlvbmFsUHJvcHMsIHBsdWdpbnMpO1xuICB9XG5cbiAgYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgY29uc3QgcGFzc2VkUHJvcHM6IFBhcnRpYWw8UHJvcHM+ID0gey4uLm9wdGlvbmFsUHJvcHMsIHBsdWdpbnN9O1xuXG4gIGNvbnN0IGVsZW1lbnRzID0gZ2V0QXJyYXlPZkVsZW1lbnRzKHRhcmdldHMpO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChfX0RFVl9fKSB7XG4gICAgY29uc3QgaXNTaW5nbGVDb250ZW50RWxlbWVudCA9IGlzRWxlbWVudChwYXNzZWRQcm9wcy5jb250ZW50KTtcbiAgICBjb25zdCBpc01vcmVUaGFuT25lUmVmZXJlbmNlRWxlbWVudCA9IGVsZW1lbnRzLmxlbmd0aCA+IDE7XG4gICAgd2FybldoZW4oXG4gICAgICBpc1NpbmdsZUNvbnRlbnRFbGVtZW50ICYmIGlzTW9yZVRoYW5PbmVSZWZlcmVuY2VFbGVtZW50LFxuICAgICAgW1xuICAgICAgICAndGlwcHkoKSB3YXMgcGFzc2VkIGFuIEVsZW1lbnQgYXMgdGhlIGBjb250ZW50YCBwcm9wLCBidXQgbW9yZSB0aGFuJyxcbiAgICAgICAgJ29uZSB0aXBweSBpbnN0YW5jZSB3YXMgY3JlYXRlZCBieSB0aGlzIGludm9jYXRpb24uIFRoaXMgbWVhbnMgdGhlJyxcbiAgICAgICAgJ2NvbnRlbnQgZWxlbWVudCB3aWxsIG9ubHkgYmUgYXBwZW5kZWQgdG8gdGhlIGxhc3QgdGlwcHkgaW5zdGFuY2UuJyxcbiAgICAgICAgJ1xcblxcbicsXG4gICAgICAgICdJbnN0ZWFkLCBwYXNzIHRoZSAuaW5uZXJIVE1MIG9mIHRoZSBlbGVtZW50LCBvciB1c2UgYSBmdW5jdGlvbiB0aGF0JyxcbiAgICAgICAgJ3JldHVybnMgYSBjbG9uZWQgdmVyc2lvbiBvZiB0aGUgZWxlbWVudCBpbnN0ZWFkLicsXG4gICAgICAgICdcXG5cXG4nLFxuICAgICAgICAnMSkgY29udGVudDogZWxlbWVudC5pbm5lckhUTUxcXG4nLFxuICAgICAgICAnMikgY29udGVudDogKCkgPT4gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSknLFxuICAgICAgXS5qb2luKCcgJylcbiAgICApO1xuICB9XG5cbiAgY29uc3QgaW5zdGFuY2VzID0gZWxlbWVudHMucmVkdWNlPEluc3RhbmNlW10+KFxuICAgIChhY2MsIHJlZmVyZW5jZSk6IEluc3RhbmNlW10gPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSByZWZlcmVuY2UgJiYgY3JlYXRlVGlwcHkocmVmZXJlbmNlLCBwYXNzZWRQcm9wcyk7XG5cbiAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICBhY2MucHVzaChpbnN0YW5jZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIHJldHVybiBpc0VsZW1lbnQodGFyZ2V0cykgPyBpbnN0YW5jZXNbMF0gOiBpbnN0YW5jZXM7XG59XG5cbnRpcHB5LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbnRpcHB5LnNldERlZmF1bHRQcm9wcyA9IHNldERlZmF1bHRQcm9wcztcbnRpcHB5LmN1cnJlbnRJbnB1dCA9IGN1cnJlbnRJbnB1dDtcblxuZXhwb3J0IGRlZmF1bHQgdGlwcHk7XG5cbmV4cG9ydCBjb25zdCBoaWRlQWxsOiBIaWRlQWxsID0gKHtcbiAgZXhjbHVkZTogZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlLFxuICBkdXJhdGlvbixcbn06IEhpZGVBbGxPcHRpb25zID0ge30pID0+IHtcbiAgbW91bnRlZEluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgIGxldCBpc0V4Y2x1ZGVkID0gZmFsc2U7XG5cbiAgICBpZiAoZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlKSB7XG4gICAgICBpc0V4Y2x1ZGVkID0gaXNSZWZlcmVuY2VFbGVtZW50KGV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZSlcbiAgICAgICAgPyBpbnN0YW5jZS5yZWZlcmVuY2UgPT09IGV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZVxuICAgICAgICA6IGluc3RhbmNlLnBvcHBlciA9PT0gKGV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZSBhcyBJbnN0YW5jZSkucG9wcGVyO1xuICAgIH1cblxuICAgIGlmICghaXNFeGNsdWRlZCkge1xuICAgICAgY29uc3Qgb3JpZ2luYWxEdXJhdGlvbiA9IGluc3RhbmNlLnByb3BzLmR1cmF0aW9uO1xuXG4gICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7ZHVyYXRpb259KTtcbiAgICAgIGluc3RhbmNlLmhpZGUoKTtcblxuICAgICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCkge1xuICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7ZHVyYXRpb246IG9yaWdpbmFsRHVyYXRpb259KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcbiIsICJpbXBvcnQgdGlwcHkgZnJvbSAnLi4nO1xuaW1wb3J0IHtkaXZ9IGZyb20gJy4uL2RvbS11dGlscyc7XG5pbXBvcnQge1xuICBDcmVhdGVTaW5nbGV0b24sXG4gIFBsdWdpbixcbiAgQ3JlYXRlU2luZ2xldG9uUHJvcHMsXG4gIFJlZmVyZW5jZUVsZW1lbnQsXG4gIENyZWF0ZVNpbmdsZXRvbkluc3RhbmNlLFxuICBJbnN0YW5jZSxcbiAgUHJvcHMsXG59IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7bm9ybWFsaXplVG9BcnJheSwgcmVtb3ZlUHJvcGVydGllc30gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtlcnJvcldoZW59IGZyb20gJy4uL3ZhbGlkYXRpb24nO1xuaW1wb3J0IHthcHBseVN0eWxlcywgTW9kaWZpZXJ9IGZyb20gJ0Bwb3BwZXJqcy9jb3JlJztcblxuLy8gVGhlIGRlZmF1bHQgYGFwcGx5U3R5bGVzYCBtb2RpZmllciBoYXMgYSBjbGVhbnVwIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWRcbi8vIGV2ZXJ5IHRpbWUgdGhlIHBvcHBlciBpcyBkZXN0cm95ZWQgKGkuZS4gYSBuZXcgdGFyZ2V0KSwgcmVtb3ZpbmcgdGhlIHN0eWxlc1xuLy8gYW5kIGNhdXNpbmcgdHJhbnNpdGlvbnMgdG8gYnJlYWsgZm9yIHNpbmdsZXRvbnMgd2hlbiB0aGUgY29uc29sZSBpcyBvcGVuLCBidXRcbi8vIG1vc3Qgbm90YWJseSBmb3Igbm9uLXRyYW5zZm9ybSBzdHlsZXMgYmVpbmcgdXNlZCwgYGdwdUFjY2VsZXJhdGlvbjogZmFsc2VgLlxuY29uc3QgYXBwbHlTdHlsZXNNb2RpZmllcjogTW9kaWZpZXI8J2FwcGx5U3R5bGVzJywgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+ID0ge1xuICAuLi5hcHBseVN0eWxlcyxcbiAgZWZmZWN0KHtzdGF0ZX0pIHtcbiAgICBjb25zdCBpbml0aWFsU3R5bGVzID0ge1xuICAgICAgcG9wcGVyOiB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgICBsZWZ0OiAnMCcsXG4gICAgICAgIHRvcDogJzAnLFxuICAgICAgICBtYXJnaW46ICcwJyxcbiAgICAgIH0sXG4gICAgICBhcnJvdzoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIH0sXG4gICAgICByZWZlcmVuY2U6IHt9LFxuICAgIH07XG5cbiAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuICAgIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgICBpZiAoc3RhdGUuZWxlbWVudHMuYXJyb3cpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsIGluaXRpYWxTdHlsZXMuYXJyb3cpO1xuICAgIH1cblxuICAgIC8vIGludGVudGlvbmFsbHkgcmV0dXJuIG5vIGNsZWFudXAgZnVuY3Rpb25cbiAgICAvLyByZXR1cm4gKCkgPT4geyAuLi4gfVxuICB9LFxufTtcblxuY29uc3QgY3JlYXRlU2luZ2xldG9uOiBDcmVhdGVTaW5nbGV0b24gPSAoXG4gIHRpcHB5SW5zdGFuY2VzLFxuICBvcHRpb25hbFByb3BzID0ge31cbikgPT4ge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoX19ERVZfXykge1xuICAgIGVycm9yV2hlbihcbiAgICAgICFBcnJheS5pc0FycmF5KHRpcHB5SW5zdGFuY2VzKSxcbiAgICAgIFtcbiAgICAgICAgJ1RoZSBmaXJzdCBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU2luZ2xldG9uKCkgbXVzdCBiZSBhbiBhcnJheSBvZicsXG4gICAgICAgICd0aXBweSBpbnN0YW5jZXMuIFRoZSBwYXNzZWQgdmFsdWUgd2FzJyxcbiAgICAgICAgU3RyaW5nKHRpcHB5SW5zdGFuY2VzKSxcbiAgICAgIF0uam9pbignICcpXG4gICAgKTtcbiAgfVxuXG4gIGxldCBpbmRpdmlkdWFsSW5zdGFuY2VzID0gdGlwcHlJbnN0YW5jZXM7XG4gIGxldCByZWZlcmVuY2VzOiBBcnJheTxSZWZlcmVuY2VFbGVtZW50PiA9IFtdO1xuICBsZXQgdHJpZ2dlclRhcmdldHM6IEFycmF5PEVsZW1lbnQ+ID0gW107XG4gIGxldCBjdXJyZW50VGFyZ2V0OiBFbGVtZW50IHwgbnVsbDtcbiAgbGV0IG92ZXJyaWRlcyA9IG9wdGlvbmFsUHJvcHMub3ZlcnJpZGVzO1xuICBsZXQgaW50ZXJjZXB0U2V0UHJvcHNDbGVhbnVwczogQXJyYXk8KCkgPT4gdm9pZD4gPSBbXTtcbiAgbGV0IHNob3duT25DcmVhdGUgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBzZXRUcmlnZ2VyVGFyZ2V0cygpOiB2b2lkIHtcbiAgICB0cmlnZ2VyVGFyZ2V0cyA9IGluZGl2aWR1YWxJbnN0YW5jZXNcbiAgICAgIC5tYXAoKGluc3RhbmNlKSA9PlxuICAgICAgICBub3JtYWxpemVUb0FycmF5KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgaW5zdGFuY2UucmVmZXJlbmNlKVxuICAgICAgKVxuICAgICAgLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBhY2MuY29uY2F0KGl0ZW0pLCBbXSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRSZWZlcmVuY2VzKCk6IHZvaWQge1xuICAgIHJlZmVyZW5jZXMgPSBpbmRpdmlkdWFsSW5zdGFuY2VzLm1hcCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLnJlZmVyZW5jZSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVJbnN0YW5jZXMoaXNFbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaW5kaXZpZHVhbEluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaWYgKGlzRW5hYmxlZCkge1xuICAgICAgICBpbnN0YW5jZS5lbmFibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RhbmNlLmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludGVyY2VwdFNldFByb3BzKHNpbmdsZXRvbjogSW5zdGFuY2UpOiBBcnJheTwoKSA9PiB2b2lkPiB7XG4gICAgcmV0dXJuIGluZGl2aWR1YWxJbnN0YW5jZXMubWFwKChpbnN0YW5jZSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxTZXRQcm9wcyA9IGluc3RhbmNlLnNldFByb3BzO1xuXG4gICAgICBpbnN0YW5jZS5zZXRQcm9wcyA9IChwcm9wcyk6IHZvaWQgPT4ge1xuICAgICAgICBvcmlnaW5hbFNldFByb3BzKHByb3BzKTtcblxuICAgICAgICBpZiAoaW5zdGFuY2UucmVmZXJlbmNlID09PSBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgc2luZ2xldG9uLnNldFByb3BzKHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuICgpOiB2b2lkID0+IHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMgPSBvcmlnaW5hbFNldFByb3BzO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGhhdmUgdG8gcGFzcyBzaW5nbGV0b24sIGFzIGl0IG1heWJlIHVuZGVmaW5lZCBvbiBmaXJzdCBjYWxsXG4gIGZ1bmN0aW9uIHByZXBhcmVJbnN0YW5jZShcbiAgICBzaW5nbGV0b246IEluc3RhbmNlLFxuICAgIHRhcmdldDogUmVmZXJlbmNlRWxlbWVudFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRyaWdnZXJUYXJnZXRzLmluZGV4T2YodGFyZ2V0KTtcblxuICAgIC8vIGJhaWwtb3V0XG4gICAgaWYgKHRhcmdldCA9PT0gY3VycmVudFRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGN1cnJlbnRUYXJnZXQgPSB0YXJnZXQ7XG5cbiAgICBjb25zdCBvdmVycmlkZVByb3BzOiBQYXJ0aWFsPFByb3BzPiA9IChvdmVycmlkZXMgfHwgW10pXG4gICAgICAuY29uY2F0KCdjb250ZW50JylcbiAgICAgIC5yZWR1Y2UoKGFjYywgcHJvcCkgPT4ge1xuICAgICAgICAoYWNjIGFzIGFueSlbcHJvcF0gPSBpbmRpdmlkdWFsSW5zdGFuY2VzW2luZGV4XS5wcm9wc1twcm9wXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcblxuICAgIHNpbmdsZXRvbi5zZXRQcm9wcyh7XG4gICAgICAuLi5vdmVycmlkZVByb3BzLFxuICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdDpcbiAgICAgICAgdHlwZW9mIG92ZXJyaWRlUHJvcHMuZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgID8gb3ZlcnJpZGVQcm9wcy5nZXRSZWZlcmVuY2VDbGllbnRSZWN0XG4gICAgICAgICAgOiAoKTogQ2xpZW50UmVjdCA9PiByZWZlcmVuY2VzW2luZGV4XT8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgfSk7XG4gIH1cblxuICBlbmFibGVJbnN0YW5jZXMoZmFsc2UpO1xuICBzZXRSZWZlcmVuY2VzKCk7XG4gIHNldFRyaWdnZXJUYXJnZXRzKCk7XG5cbiAgY29uc3QgcGx1Z2luOiBQbHVnaW4gPSB7XG4gICAgZm4oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgICAgZW5hYmxlSW5zdGFuY2VzKHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkhpZGRlbigpOiB2b2lkIHtcbiAgICAgICAgICBjdXJyZW50VGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGlja091dHNpZGUoaW5zdGFuY2UpOiB2b2lkIHtcbiAgICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMuc2hvd09uQ3JlYXRlICYmICFzaG93bk9uQ3JlYXRlKSB7XG4gICAgICAgICAgICBzaG93bk9uQ3JlYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25TaG93KGluc3RhbmNlKTogdm9pZCB7XG4gICAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLnNob3dPbkNyZWF0ZSAmJiAhc2hvd25PbkNyZWF0ZSkge1xuICAgICAgICAgICAgc2hvd25PbkNyZWF0ZSA9IHRydWU7XG4gICAgICAgICAgICBwcmVwYXJlSW5zdGFuY2UoaW5zdGFuY2UsIHJlZmVyZW5jZXNbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25UcmlnZ2VyKGluc3RhbmNlLCBldmVudCk6IHZvaWQge1xuICAgICAgICAgIHByZXBhcmVJbnN0YW5jZShpbnN0YW5jZSwgZXZlbnQuY3VycmVudFRhcmdldCBhcyBFbGVtZW50KTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBzaW5nbGV0b24gPSB0aXBweShkaXYoKSwge1xuICAgIC4uLnJlbW92ZVByb3BlcnRpZXMob3B0aW9uYWxQcm9wcywgWydvdmVycmlkZXMnXSksXG4gICAgcGx1Z2luczogW3BsdWdpbiwgLi4uKG9wdGlvbmFsUHJvcHMucGx1Z2lucyB8fCBbXSldLFxuICAgIHRyaWdnZXJUYXJnZXQ6IHRyaWdnZXJUYXJnZXRzLFxuICAgIHBvcHBlck9wdGlvbnM6IHtcbiAgICAgIC4uLm9wdGlvbmFsUHJvcHMucG9wcGVyT3B0aW9ucyxcbiAgICAgIG1vZGlmaWVyczogW1xuICAgICAgICAuLi4ob3B0aW9uYWxQcm9wcy5wb3BwZXJPcHRpb25zPy5tb2RpZmllcnMgfHwgW10pLFxuICAgICAgICBhcHBseVN0eWxlc01vZGlmaWVyLFxuICAgICAgXSxcbiAgICB9LFxuICB9KSBhcyBDcmVhdGVTaW5nbGV0b25JbnN0YW5jZTxDcmVhdGVTaW5nbGV0b25Qcm9wcz47XG5cbiAgY29uc3Qgb3JpZ2luYWxTaG93ID0gc2luZ2xldG9uLnNob3c7XG5cbiAgc2luZ2xldG9uLnNob3cgPSAodGFyZ2V0PzogUmVmZXJlbmNlRWxlbWVudCB8IEluc3RhbmNlIHwgbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgb3JpZ2luYWxTaG93KCk7XG5cbiAgICAvLyBmaXJzdCB0aW1lLCBzaG93T25DcmVhdGUgb3IgcHJvZ3JhbW1hdGljIGNhbGwgd2l0aCBubyBwYXJhbXNcbiAgICAvLyBkZWZhdWx0IHRvIHNob3dpbmcgZmlyc3QgaW5zdGFuY2VcbiAgICBpZiAoIWN1cnJlbnRUYXJnZXQgJiYgdGFyZ2V0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBwcmVwYXJlSW5zdGFuY2Uoc2luZ2xldG9uLCByZWZlcmVuY2VzWzBdKTtcbiAgICB9XG5cbiAgICAvLyB0cmlnZ2VyZWQgZnJvbSBldmVudCAoZG8gbm90aGluZyBhcyBwcmVwYXJlSW5zdGFuY2UgYWxyZWFkeSBjYWxsZWQgYnkgb25UcmlnZ2VyKVxuICAgIC8vIHByb2dyYW1tYXRpYyBjYWxsIHdpdGggbm8gcGFyYW1zIHdoZW4gYWxyZWFkeSB2aXNpYmxlIChkbyBub3RoaW5nIGFnYWluKVxuICAgIGlmIChjdXJyZW50VGFyZ2V0ICYmIHRhcmdldCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdGFyZ2V0IGlzIGluZGV4IG9mIGluc3RhbmNlXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByZWZlcmVuY2VzW3RhcmdldF0gJiYgcHJlcGFyZUluc3RhbmNlKHNpbmdsZXRvbiwgcmVmZXJlbmNlc1t0YXJnZXRdKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyB0YXJnZXQgaXMgYSBjaGlsZCB0aXBweSBpbnN0YW5jZVxuICAgIGlmIChpbmRpdmlkdWFsSW5zdGFuY2VzLmluZGV4T2YodGFyZ2V0IGFzIEluc3RhbmNlKSA+PSAwKSB7XG4gICAgICBjb25zdCByZWYgPSAodGFyZ2V0IGFzIEluc3RhbmNlKS5yZWZlcmVuY2U7XG4gICAgICByZXR1cm4gcHJlcGFyZUluc3RhbmNlKHNpbmdsZXRvbiwgcmVmKTtcbiAgICB9XG5cbiAgICAvLyB0YXJnZXQgaXMgYSBSZWZlcmVuY2VFbGVtZW50XG4gICAgaWYgKHJlZmVyZW5jZXMuaW5kZXhPZih0YXJnZXQgYXMgUmVmZXJlbmNlRWxlbWVudCkgPj0gMCkge1xuICAgICAgcmV0dXJuIHByZXBhcmVJbnN0YW5jZShzaW5nbGV0b24sIHRhcmdldCBhcyBSZWZlcmVuY2VFbGVtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgc2luZ2xldG9uLnNob3dOZXh0ID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGZpcnN0ID0gcmVmZXJlbmNlc1swXTtcbiAgICBpZiAoIWN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybiBzaW5nbGV0b24uc2hvdygwKTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSByZWZlcmVuY2VzLmluZGV4T2YoY3VycmVudFRhcmdldCk7XG4gICAgc2luZ2xldG9uLnNob3cocmVmZXJlbmNlc1tpbmRleCArIDFdIHx8IGZpcnN0KTtcbiAgfTtcblxuICBzaW5nbGV0b24uc2hvd1ByZXZpb3VzID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGxhc3QgPSByZWZlcmVuY2VzW3JlZmVyZW5jZXMubGVuZ3RoIC0gMV07XG4gICAgaWYgKCFjdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm4gc2luZ2xldG9uLnNob3cobGFzdCk7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gcmVmZXJlbmNlcy5pbmRleE9mKGN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0IHRhcmdldCA9IHJlZmVyZW5jZXNbaW5kZXggLSAxXSB8fCBsYXN0O1xuICAgIHNpbmdsZXRvbi5zaG93KHRhcmdldCk7XG4gIH07XG5cbiAgY29uc3Qgb3JpZ2luYWxTZXRQcm9wcyA9IHNpbmdsZXRvbi5zZXRQcm9wcztcblxuICBzaW5nbGV0b24uc2V0UHJvcHMgPSAocHJvcHMpOiB2b2lkID0+IHtcbiAgICBvdmVycmlkZXMgPSBwcm9wcy5vdmVycmlkZXMgfHwgb3ZlcnJpZGVzO1xuICAgIG9yaWdpbmFsU2V0UHJvcHMocHJvcHMpO1xuICB9O1xuXG4gIHNpbmdsZXRvbi5zZXRJbnN0YW5jZXMgPSAobmV4dEluc3RhbmNlcyk6IHZvaWQgPT4ge1xuICAgIGVuYWJsZUluc3RhbmNlcyh0cnVlKTtcbiAgICBpbnRlcmNlcHRTZXRQcm9wc0NsZWFudXBzLmZvckVhY2goKGZuKSA9PiBmbigpKTtcblxuICAgIGluZGl2aWR1YWxJbnN0YW5jZXMgPSBuZXh0SW5zdGFuY2VzO1xuXG4gICAgZW5hYmxlSW5zdGFuY2VzKGZhbHNlKTtcbiAgICBzZXRSZWZlcmVuY2VzKCk7XG4gICAgc2V0VHJpZ2dlclRhcmdldHMoKTtcbiAgICBpbnRlcmNlcHRTZXRQcm9wc0NsZWFudXBzID0gaW50ZXJjZXB0U2V0UHJvcHMoc2luZ2xldG9uKTtcblxuICAgIHNpbmdsZXRvbi5zZXRQcm9wcyh7dHJpZ2dlclRhcmdldDogdHJpZ2dlclRhcmdldHN9KTtcbiAgfTtcblxuICBpbnRlcmNlcHRTZXRQcm9wc0NsZWFudXBzID0gaW50ZXJjZXB0U2V0UHJvcHMoc2luZ2xldG9uKTtcblxuICByZXR1cm4gc2luZ2xldG9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2luZ2xldG9uO1xuIiwgImltcG9ydCB0aXBweSBmcm9tICcuLic7XG5pbXBvcnQge1RPVUNIX09QVElPTlN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge2RlZmF1bHRQcm9wc30gZnJvbSAnLi4vcHJvcHMnO1xuaW1wb3J0IHtJbnN0YW5jZSwgUHJvcHMsIFRhcmdldHN9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7TGlzdGVuZXJPYmplY3R9IGZyb20gJy4uL3R5cGVzLWludGVybmFsJztcbmltcG9ydCB7bm9ybWFsaXplVG9BcnJheSwgcmVtb3ZlUHJvcGVydGllc30gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtlcnJvcldoZW59IGZyb20gJy4uL3ZhbGlkYXRpb24nO1xuXG5jb25zdCBCVUJCTElOR19FVkVOVFNfTUFQID0ge1xuICBtb3VzZW92ZXI6ICdtb3VzZWVudGVyJyxcbiAgZm9jdXNpbjogJ2ZvY3VzJyxcbiAgY2xpY2s6ICdjbGljaycsXG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWxlZ2F0ZSBpbnN0YW5jZSB0aGF0IGNvbnRyb2xzIHRoZSBjcmVhdGlvbiBvZiB0aXBweSBpbnN0YW5jZXNcbiAqIGZvciBjaGlsZCBlbGVtZW50cyAoYHRhcmdldGAgQ1NTIHNlbGVjdG9yKS5cbiAqL1xuZnVuY3Rpb24gZGVsZWdhdGUoXG4gIHRhcmdldHM6IFRhcmdldHMsXG4gIHByb3BzOiBQYXJ0aWFsPFByb3BzPiAmIHt0YXJnZXQ6IHN0cmluZ31cbik6IEluc3RhbmNlIHwgSW5zdGFuY2VbXSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChfX0RFVl9fKSB7XG4gICAgZXJyb3JXaGVuKFxuICAgICAgIShwcm9wcyAmJiBwcm9wcy50YXJnZXQpLFxuICAgICAgW1xuICAgICAgICAnWW91IG11c3Qgc3BlY2l0eSBhIGB0YXJnZXRgIHByb3AgaW5kaWNhdGluZyBhIENTUyBzZWxlY3RvciBzdHJpbmcgbWF0Y2hpbmcnLFxuICAgICAgICAndGhlIHRhcmdldCBlbGVtZW50cyB0aGF0IHNob3VsZCByZWNlaXZlIGEgdGlwcHkuJyxcbiAgICAgIF0uam9pbignICcpXG4gICAgKTtcbiAgfVxuXG4gIGxldCBsaXN0ZW5lcnM6IExpc3RlbmVyT2JqZWN0W10gPSBbXTtcbiAgbGV0IGNoaWxkVGlwcHlJbnN0YW5jZXM6IEluc3RhbmNlW10gPSBbXTtcbiAgbGV0IGRpc2FibGVkID0gZmFsc2U7XG5cbiAgY29uc3Qge3RhcmdldH0gPSBwcm9wcztcblxuICBjb25zdCBuYXRpdmVQcm9wcyA9IHJlbW92ZVByb3BlcnRpZXMocHJvcHMsIFsndGFyZ2V0J10pO1xuICBjb25zdCBwYXJlbnRQcm9wcyA9IHsuLi5uYXRpdmVQcm9wcywgdHJpZ2dlcjogJ21hbnVhbCcsIHRvdWNoOiBmYWxzZX07XG4gIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgdG91Y2g6IGRlZmF1bHRQcm9wcy50b3VjaCxcbiAgICAuLi5uYXRpdmVQcm9wcyxcbiAgICBzaG93T25DcmVhdGU6IHRydWUsXG4gIH07XG5cbiAgY29uc3QgcmV0dXJuVmFsdWUgPSB0aXBweSh0YXJnZXRzLCBwYXJlbnRQcm9wcyk7XG4gIGNvbnN0IG5vcm1hbGl6ZWRSZXR1cm5WYWx1ZSA9IG5vcm1hbGl6ZVRvQXJyYXkocmV0dXJuVmFsdWUpO1xuXG4gIGZ1bmN0aW9uIG9uVHJpZ2dlcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldCB8fCBkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldE5vZGUgPSAoZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQpLmNsb3Nlc3QodGFyZ2V0KTtcblxuICAgIGlmICghdGFyZ2V0Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEdldCByZWxldmFudCB0cmlnZ2VyIHdpdGggZmFsbGJhY2tzOlxuICAgIC8vIDEuIENoZWNrIGBkYXRhLXRpcHB5LXRyaWdnZXJgIGF0dHJpYnV0ZSBvbiB0YXJnZXQgbm9kZVxuICAgIC8vIDIuIEZhbGxiYWNrIHRvIGB0cmlnZ2VyYCBwYXNzZWQgdG8gYGRlbGVnYXRlKClgXG4gICAgLy8gMy4gRmFsbGJhY2sgdG8gYGRlZmF1bHRQcm9wcy50cmlnZ2VyYFxuICAgIGNvbnN0IHRyaWdnZXIgPVxuICAgICAgdGFyZ2V0Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGlwcHktdHJpZ2dlcicpIHx8XG4gICAgICBwcm9wcy50cmlnZ2VyIHx8XG4gICAgICBkZWZhdWx0UHJvcHMudHJpZ2dlcjtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAodGFyZ2V0Tm9kZS5fdGlwcHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnICYmIHR5cGVvZiBjaGlsZFByb3BzLnRvdWNoID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBldmVudC50eXBlICE9PSAndG91Y2hzdGFydCcgJiZcbiAgICAgIHRyaWdnZXIuaW5kZXhPZigoQlVCQkxJTkdfRVZFTlRTX01BUCBhcyBhbnkpW2V2ZW50LnR5cGVdKSA8IDBcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHRpcHB5KHRhcmdldE5vZGUsIGNoaWxkUHJvcHMpO1xuXG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICBjaGlsZFRpcHB5SW5zdGFuY2VzID0gY2hpbGRUaXBweUluc3RhbmNlcy5jb25jYXQoaW5zdGFuY2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uKFxuICAgIG5vZGU6IEVsZW1lbnQsXG4gICAgZXZlbnRUeXBlOiBzdHJpbmcsXG4gICAgaGFuZGxlcjogRXZlbnRMaXN0ZW5lcixcbiAgICBvcHRpb25zOiBib29sZWFuIHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSBmYWxzZVxuICApOiB2b2lkIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICBsaXN0ZW5lcnMucHVzaCh7bm9kZSwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycyhpbnN0YW5jZTogSW5zdGFuY2UpOiB2b2lkIHtcbiAgICBjb25zdCB7cmVmZXJlbmNlfSA9IGluc3RhbmNlO1xuXG4gICAgb24ocmVmZXJlbmNlLCAndG91Y2hzdGFydCcsIG9uVHJpZ2dlciwgVE9VQ0hfT1BUSU9OUyk7XG4gICAgb24ocmVmZXJlbmNlLCAnbW91c2VvdmVyJywgb25UcmlnZ2VyKTtcbiAgICBvbihyZWZlcmVuY2UsICdmb2N1c2luJywgb25UcmlnZ2VyKTtcbiAgICBvbihyZWZlcmVuY2UsICdjbGljaycsIG9uVHJpZ2dlcik7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycygpOiB2b2lkIHtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgoe25vZGUsIGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9uc306IExpc3RlbmVyT2JqZWN0KSA9PiB7XG4gICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgICBsaXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5TXV0YXRpb25zKGluc3RhbmNlOiBJbnN0YW5jZSk6IHZvaWQge1xuICAgIGNvbnN0IG9yaWdpbmFsRGVzdHJveSA9IGluc3RhbmNlLmRlc3Ryb3k7XG4gICAgY29uc3Qgb3JpZ2luYWxFbmFibGUgPSBpbnN0YW5jZS5lbmFibGU7XG4gICAgY29uc3Qgb3JpZ2luYWxEaXNhYmxlID0gaW5zdGFuY2UuZGlzYWJsZTtcblxuICAgIGluc3RhbmNlLmRlc3Ryb3kgPSAoc2hvdWxkRGVzdHJveUNoaWxkSW5zdGFuY2VzID0gdHJ1ZSk6IHZvaWQgPT4ge1xuICAgICAgaWYgKHNob3VsZERlc3Ryb3lDaGlsZEluc3RhbmNlcykge1xuICAgICAgICBjaGlsZFRpcHB5SW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY2hpbGRUaXBweUluc3RhbmNlcyA9IFtdO1xuXG4gICAgICByZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgb3JpZ2luYWxEZXN0cm95KCk7XG4gICAgfTtcblxuICAgIGluc3RhbmNlLmVuYWJsZSA9ICgpOiB2b2lkID0+IHtcbiAgICAgIG9yaWdpbmFsRW5hYmxlKCk7XG4gICAgICBjaGlsZFRpcHB5SW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiBpbnN0YW5jZS5lbmFibGUoKSk7XG4gICAgICBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBpbnN0YW5jZS5kaXNhYmxlID0gKCk6IHZvaWQgPT4ge1xuICAgICAgb3JpZ2luYWxEaXNhYmxlKCk7XG4gICAgICBjaGlsZFRpcHB5SW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiBpbnN0YW5jZS5kaXNhYmxlKCkpO1xuICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBhZGRFdmVudExpc3RlbmVycyhpbnN0YW5jZSk7XG4gIH1cblxuICBub3JtYWxpemVkUmV0dXJuVmFsdWUuZm9yRWFjaChhcHBseU11dGF0aW9ucyk7XG5cbiAgcmV0dXJuIHJldHVyblZhbHVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxlZ2F0ZTtcbiIsICJpbXBvcnQge0JBQ0tEUk9QX0NMQVNTfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtkaXYsIHNldFZpc2liaWxpdHlTdGF0ZX0gZnJvbSAnLi4vZG9tLXV0aWxzJztcbmltcG9ydCB7Z2V0Q2hpbGRyZW59IGZyb20gJy4uL3RlbXBsYXRlJztcbmltcG9ydCB7QW5pbWF0ZUZpbGx9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7ZXJyb3JXaGVufSBmcm9tICcuLi92YWxpZGF0aW9uJztcblxuY29uc3QgYW5pbWF0ZUZpbGw6IEFuaW1hdGVGaWxsID0ge1xuICBuYW1lOiAnYW5pbWF0ZUZpbGwnLFxuICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICBmbihpbnN0YW5jZSkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAoIWluc3RhbmNlLnByb3BzLnJlbmRlcj8uJCR0aXBweSkge1xuICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgZXJyb3JXaGVuKFxuICAgICAgICAgIGluc3RhbmNlLnByb3BzLmFuaW1hdGVGaWxsLFxuICAgICAgICAgICdUaGUgYGFuaW1hdGVGaWxsYCBwbHVnaW4gcmVxdWlyZXMgdGhlIGRlZmF1bHQgcmVuZGVyIGZ1bmN0aW9uLidcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGNvbnN0IHtib3gsIGNvbnRlbnR9ID0gZ2V0Q2hpbGRyZW4oaW5zdGFuY2UucG9wcGVyKTtcblxuICAgIGNvbnN0IGJhY2tkcm9wID0gaW5zdGFuY2UucHJvcHMuYW5pbWF0ZUZpbGxcbiAgICAgID8gY3JlYXRlQmFja2Ryb3BFbGVtZW50KClcbiAgICAgIDogbnVsbDtcblxuICAgIHJldHVybiB7XG4gICAgICBvbkNyZWF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICAgICAgYm94Lmluc2VydEJlZm9yZShiYWNrZHJvcCwgYm94LmZpcnN0RWxlbWVudENoaWxkISk7XG4gICAgICAgICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1hbmltYXRlZmlsbCcsICcnKTtcbiAgICAgICAgICBib3guc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICAgICAgICAgIGluc3RhbmNlLnNldFByb3BzKHthcnJvdzogZmFsc2UsIGFuaW1hdGlvbjogJ3NoaWZ0LWF3YXknfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdW50KCk6IHZvaWQge1xuICAgICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgICBjb25zdCB7dHJhbnNpdGlvbkR1cmF0aW9ufSA9IGJveC5zdHlsZTtcbiAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IE51bWJlcih0cmFuc2l0aW9uRHVyYXRpb24ucmVwbGFjZSgnbXMnLCAnJykpO1xuXG4gICAgICAgICAgLy8gVGhlIGNvbnRlbnQgc2hvdWxkIGZhZGUgaW4gYWZ0ZXIgdGhlIGJhY2tkcm9wIGhhcyBtb3N0bHkgZmlsbGVkIHRoZVxuICAgICAgICAgIC8vIHRvb2x0aXAgZWxlbWVudC4gYGNsaXAtcGF0aGAgaXMgdGhlIG90aGVyIGFsdGVybmF0aXZlIGJ1dCBpcyBub3RcbiAgICAgICAgICAvLyB3ZWxsLXN1cHBvcnRlZCBhbmQgaXMgYnVnZ3kgb24gc29tZSBkZXZpY2VzLlxuICAgICAgICAgIGNvbnRlbnQuc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gYCR7TWF0aC5yb3VuZChkdXJhdGlvbiAvIDEwKX1tc2A7XG5cbiAgICAgICAgICBiYWNrZHJvcC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb247XG4gICAgICAgICAgc2V0VmlzaWJpbGl0eVN0YXRlKFtiYWNrZHJvcF0sICd2aXNpYmxlJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvblNob3coKTogdm9pZCB7XG4gICAgICAgIGlmIChiYWNrZHJvcCkge1xuICAgICAgICAgIGJhY2tkcm9wLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwbXMnO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25IaWRlKCk6IHZvaWQge1xuICAgICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgICBzZXRWaXNpYmlsaXR5U3RhdGUoW2JhY2tkcm9wXSwgJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhbmltYXRlRmlsbDtcblxuZnVuY3Rpb24gY3JlYXRlQmFja2Ryb3BFbGVtZW50KCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgY29uc3QgYmFja2Ryb3AgPSBkaXYoKTtcbiAgYmFja2Ryb3AuY2xhc3NOYW1lID0gQkFDS0RST1BfQ0xBU1M7XG4gIHNldFZpc2liaWxpdHlTdGF0ZShbYmFja2Ryb3BdLCAnaGlkZGVuJyk7XG4gIHJldHVybiBiYWNrZHJvcDtcbn1cbiIsICJpbXBvcnQge2dldE93bmVyRG9jdW1lbnQsIGlzTW91c2VFdmVudH0gZnJvbSAnLi4vZG9tLXV0aWxzJztcbmltcG9ydCB7Rm9sbG93Q3Vyc29yLCBJbnN0YW5jZX0gZnJvbSAnLi4vdHlwZXMnO1xuXG5sZXQgbW91c2VDb29yZHMgPSB7Y2xpZW50WDogMCwgY2xpZW50WTogMH07XG5sZXQgYWN0aXZlSW5zdGFuY2VzOiBBcnJheTx7aW5zdGFuY2U6IEluc3RhbmNlOyBkb2M6IERvY3VtZW50fT4gPSBbXTtcblxuZnVuY3Rpb24gc3RvcmVNb3VzZUNvb3Jkcyh7Y2xpZW50WCwgY2xpZW50WX06IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgbW91c2VDb29yZHMgPSB7Y2xpZW50WCwgY2xpZW50WX07XG59XG5cbmZ1bmN0aW9uIGFkZE1vdXNlQ29vcmRzTGlzdGVuZXIoZG9jOiBEb2N1bWVudCk6IHZvaWQge1xuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3RvcmVNb3VzZUNvb3Jkcyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1vdXNlQ29vcmRzTGlzdGVuZXIoZG9jOiBEb2N1bWVudCk6IHZvaWQge1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3RvcmVNb3VzZUNvb3Jkcyk7XG59XG5cbmNvbnN0IGZvbGxvd0N1cnNvcjogRm9sbG93Q3Vyc29yID0ge1xuICBuYW1lOiAnZm9sbG93Q3Vyc29yJyxcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgZm4oaW5zdGFuY2UpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSBpbnN0YW5jZS5yZWZlcmVuY2U7XG4gICAgY29uc3QgZG9jID0gZ2V0T3duZXJEb2N1bWVudChpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IHJlZmVyZW5jZSk7XG5cbiAgICBsZXQgaXNJbnRlcm5hbFVwZGF0ZSA9IGZhbHNlO1xuICAgIGxldCB3YXNGb2N1c0V2ZW50ID0gZmFsc2U7XG4gICAgbGV0IGlzVW5tb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgcHJldlByb3BzID0gaW5zdGFuY2UucHJvcHM7XG5cbiAgICBmdW5jdGlvbiBnZXRJc0luaXRpYWxCZWhhdmlvcigpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGluc3RhbmNlLnByb3BzLmZvbGxvd0N1cnNvciA9PT0gJ2luaXRpYWwnICYmIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuc2V0R2V0UmVmZXJlbmNlQ2xpZW50UmVjdCgpOiB2b2lkIHtcbiAgICAgIGlzSW50ZXJuYWxVcGRhdGUgPSB0cnVlO1xuICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe2dldFJlZmVyZW5jZUNsaWVudFJlY3Q6IG51bGx9KTtcbiAgICAgIGlzSW50ZXJuYWxVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgLy8gSWYgdGhlIGluc3RhbmNlIGlzIGludGVyYWN0aXZlLCBhdm9pZCB1cGRhdGluZyB0aGUgcG9zaXRpb24gdW5sZXNzIGl0J3NcbiAgICAgIC8vIG92ZXIgdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gICAgICBjb25zdCBpc0N1cnNvck92ZXJSZWZlcmVuY2UgPSBldmVudC50YXJnZXRcbiAgICAgICAgPyByZWZlcmVuY2UuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIE5vZGUpXG4gICAgICAgIDogdHJ1ZTtcbiAgICAgIGNvbnN0IHtmb2xsb3dDdXJzb3J9ID0gaW5zdGFuY2UucHJvcHM7XG4gICAgICBjb25zdCB7Y2xpZW50WCwgY2xpZW50WX0gPSBldmVudDtcblxuICAgICAgY29uc3QgcmVjdCA9IHJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHJlbGF0aXZlWCA9IGNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICBjb25zdCByZWxhdGl2ZVkgPSBjbGllbnRZIC0gcmVjdC50b3A7XG5cbiAgICAgIGlmIChpc0N1cnNvck92ZXJSZWZlcmVuY2UgfHwgIWluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFByb3BzKHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIC0gdW5uZWVkZWQgRE9NUmVjdCBwcm9wZXJ0aWVzXG4gICAgICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSByZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgIGxldCB4ID0gY2xpZW50WDtcbiAgICAgICAgICAgIGxldCB5ID0gY2xpZW50WTtcblxuICAgICAgICAgICAgaWYgKGZvbGxvd0N1cnNvciA9PT0gJ2luaXRpYWwnKSB7XG4gICAgICAgICAgICAgIHggPSByZWN0LmxlZnQgKyByZWxhdGl2ZVg7XG4gICAgICAgICAgICAgIHkgPSByZWN0LnRvcCArIHJlbGF0aXZlWTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdG9wID0gZm9sbG93Q3Vyc29yID09PSAnaG9yaXpvbnRhbCcgPyByZWN0LnRvcCA6IHk7XG4gICAgICAgICAgICBjb25zdCByaWdodCA9IGZvbGxvd0N1cnNvciA9PT0gJ3ZlcnRpY2FsJyA/IHJlY3QucmlnaHQgOiB4O1xuICAgICAgICAgICAgY29uc3QgYm90dG9tID0gZm9sbG93Q3Vyc29yID09PSAnaG9yaXpvbnRhbCcgPyByZWN0LmJvdHRvbSA6IHk7XG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gZm9sbG93Q3Vyc29yID09PSAndmVydGljYWwnID8gcmVjdC5sZWZ0IDogeDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgd2lkdGg6IHJpZ2h0IC0gbGVmdCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBib3R0b20gLSB0b3AsXG4gICAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgICAgcmlnaHQsXG4gICAgICAgICAgICAgIGJvdHRvbSxcbiAgICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlKCk6IHZvaWQge1xuICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmZvbGxvd0N1cnNvcikge1xuICAgICAgICBhY3RpdmVJbnN0YW5jZXMucHVzaCh7aW5zdGFuY2UsIGRvY30pO1xuICAgICAgICBhZGRNb3VzZUNvb3Jkc0xpc3RlbmVyKGRvYyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIGFjdGl2ZUluc3RhbmNlcyA9IGFjdGl2ZUluc3RhbmNlcy5maWx0ZXIoXG4gICAgICAgIChkYXRhKSA9PiBkYXRhLmluc3RhbmNlICE9PSBpbnN0YW5jZVxuICAgICAgKTtcblxuICAgICAgaWYgKGFjdGl2ZUluc3RhbmNlcy5maWx0ZXIoKGRhdGEpID0+IGRhdGEuZG9jID09PSBkb2MpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZW1vdmVNb3VzZUNvb3Jkc0xpc3RlbmVyKGRvYyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9uQ3JlYXRlOiBjcmVhdGUsXG4gICAgICBvbkRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICBvbkJlZm9yZVVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgcHJldlByb3BzID0gaW5zdGFuY2UucHJvcHM7XG4gICAgICB9LFxuICAgICAgb25BZnRlclVwZGF0ZShfLCB7Zm9sbG93Q3Vyc29yfSk6IHZvaWQge1xuICAgICAgICBpZiAoaXNJbnRlcm5hbFVwZGF0ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBmb2xsb3dDdXJzb3IgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgIHByZXZQcm9wcy5mb2xsb3dDdXJzb3IgIT09IGZvbGxvd0N1cnNvclxuICAgICAgICApIHtcbiAgICAgICAgICBkZXN0cm95KCk7XG5cbiAgICAgICAgICBpZiAoZm9sbG93Q3Vyc29yKSB7XG4gICAgICAgICAgICBjcmVhdGUoKTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQgJiZcbiAgICAgICAgICAgICAgIXdhc0ZvY3VzRXZlbnQgJiZcbiAgICAgICAgICAgICAgIWdldElzSW5pdGlhbEJlaGF2aW9yKClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBhZGRMaXN0ZW5lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICAgICAgdW5zZXRHZXRSZWZlcmVuY2VDbGllbnRSZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VudCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmZvbGxvd0N1cnNvciAmJiAhd2FzRm9jdXNFdmVudCkge1xuICAgICAgICAgIGlmIChpc1VubW91bnRlZCkge1xuICAgICAgICAgICAgb25Nb3VzZU1vdmUobW91c2VDb29yZHMgYXMgTW91c2VFdmVudCk7XG4gICAgICAgICAgICBpc1VubW91bnRlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZ2V0SXNJbml0aWFsQmVoYXZpb3IoKSkge1xuICAgICAgICAgICAgYWRkTGlzdGVuZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvblRyaWdnZXIoXywgZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzTW91c2VFdmVudChldmVudCkpIHtcbiAgICAgICAgICBtb3VzZUNvb3JkcyA9IHtjbGllbnRYOiBldmVudC5jbGllbnRYLCBjbGllbnRZOiBldmVudC5jbGllbnRZfTtcbiAgICAgICAgfVxuICAgICAgICB3YXNGb2N1c0V2ZW50ID0gZXZlbnQudHlwZSA9PT0gJ2ZvY3VzJztcbiAgICAgIH0sXG4gICAgICBvbkhpZGRlbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmZvbGxvd0N1cnNvcikge1xuICAgICAgICAgIHVuc2V0R2V0UmVmZXJlbmNlQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgaXNVbm1vdW50ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb2xsb3dDdXJzb3I7XG4iLCAiaW1wb3J0IHtNb2RpZmllciwgUGxhY2VtZW50fSBmcm9tICdAcG9wcGVyanMvY29yZSc7XG5pbXBvcnQge2lzTW91c2VFdmVudH0gZnJvbSAnLi4vZG9tLXV0aWxzJztcbmltcG9ydCB7QmFzZVBsYWNlbWVudCwgSW5saW5lUG9zaXRpb25pbmcsIFByb3BzfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2FycmF5RnJvbSwgZ2V0QmFzZVBsYWNlbWVudH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5mdW5jdGlvbiBnZXRQcm9wcyhwcm9wczogUHJvcHMsIG1vZGlmaWVyOiBNb2RpZmllcjxhbnksIGFueT4pOiBQYXJ0aWFsPFByb3BzPiB7XG4gIHJldHVybiB7XG4gICAgcG9wcGVyT3B0aW9uczoge1xuICAgICAgLi4ucHJvcHMucG9wcGVyT3B0aW9ucyxcbiAgICAgIG1vZGlmaWVyczogW1xuICAgICAgICAuLi4ocHJvcHMucG9wcGVyT3B0aW9ucz8ubW9kaWZpZXJzIHx8IFtdKS5maWx0ZXIoXG4gICAgICAgICAgKHtuYW1lfSkgPT4gbmFtZSAhPT0gbW9kaWZpZXIubmFtZVxuICAgICAgICApLFxuICAgICAgICBtb2RpZmllcixcbiAgICAgIF0sXG4gICAgfSxcbiAgfTtcbn1cblxuY29uc3QgaW5saW5lUG9zaXRpb25pbmc6IElubGluZVBvc2l0aW9uaW5nID0ge1xuICBuYW1lOiAnaW5saW5lUG9zaXRpb25pbmcnLFxuICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICBmbihpbnN0YW5jZSkge1xuICAgIGNvbnN0IHtyZWZlcmVuY2V9ID0gaW5zdGFuY2U7XG5cbiAgICBmdW5jdGlvbiBpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gISFpbnN0YW5jZS5wcm9wcy5pbmxpbmVQb3NpdGlvbmluZztcbiAgICB9XG5cbiAgICBsZXQgcGxhY2VtZW50OiBQbGFjZW1lbnQ7XG4gICAgbGV0IGN1cnNvclJlY3RJbmRleCA9IC0xO1xuICAgIGxldCBpc0ludGVybmFsVXBkYXRlID0gZmFsc2U7XG4gICAgbGV0IHRyaWVkUGxhY2VtZW50czogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gICAgY29uc3QgbW9kaWZpZXI6IE1vZGlmaWVyPFxuICAgICAgJ3RpcHB5SW5saW5lUG9zaXRpb25pbmcnLFxuICAgICAgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICA+ID0ge1xuICAgICAgbmFtZTogJ3RpcHB5SW5saW5lUG9zaXRpb25pbmcnLFxuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIHBoYXNlOiAnYWZ0ZXJXcml0ZScsXG4gICAgICBmbih7c3RhdGV9KSB7XG4gICAgICAgIGlmIChpc0VuYWJsZWQoKSkge1xuICAgICAgICAgIGlmICh0cmllZFBsYWNlbWVudHMuaW5kZXhPZihzdGF0ZS5wbGFjZW1lbnQpICE9PSAtMSkge1xuICAgICAgICAgICAgdHJpZWRQbGFjZW1lbnRzID0gW107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcGxhY2VtZW50ICE9PSBzdGF0ZS5wbGFjZW1lbnQgJiZcbiAgICAgICAgICAgIHRyaWVkUGxhY2VtZW50cy5pbmRleE9mKHN0YXRlLnBsYWNlbWVudCkgPT09IC0xXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0cmllZFBsYWNlbWVudHMucHVzaChzdGF0ZS5wbGFjZW1lbnQpO1xuICAgICAgICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe1xuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIC0gdW5uZWVkZWQgRE9NUmVjdCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3Q6ICgpID0+XG4gICAgICAgICAgICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdChzdGF0ZS5wbGFjZW1lbnQpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGxhY2VtZW50ID0gc3RhdGUucGxhY2VtZW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRSZWZlcmVuY2VDbGllbnRSZWN0KHBsYWNlbWVudDogUGxhY2VtZW50KTogUGFydGlhbDxET01SZWN0PiB7XG4gICAgICByZXR1cm4gZ2V0SW5saW5lQm91bmRpbmdDbGllbnRSZWN0KFxuICAgICAgICBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCksXG4gICAgICAgIHJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgYXJyYXlGcm9tKHJlZmVyZW5jZS5nZXRDbGllbnRSZWN0cygpKSxcbiAgICAgICAgY3Vyc29yUmVjdEluZGV4XG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEludGVybmFsUHJvcHMocGFydGlhbFByb3BzOiBQYXJ0aWFsPFByb3BzPik6IHZvaWQge1xuICAgICAgaXNJbnRlcm5hbFVwZGF0ZSA9IHRydWU7XG4gICAgICBpbnN0YW5jZS5zZXRQcm9wcyhwYXJ0aWFsUHJvcHMpO1xuICAgICAgaXNJbnRlcm5hbFVwZGF0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZE1vZGlmaWVyKCk6IHZvaWQge1xuICAgICAgaWYgKCFpc0ludGVybmFsVXBkYXRlKSB7XG4gICAgICAgIHNldEludGVybmFsUHJvcHMoZ2V0UHJvcHMoaW5zdGFuY2UucHJvcHMsIG1vZGlmaWVyKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9uQ3JlYXRlOiBhZGRNb2RpZmllcixcbiAgICAgIG9uQWZ0ZXJVcGRhdGU6IGFkZE1vZGlmaWVyLFxuICAgICAgb25UcmlnZ2VyKF8sIGV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChpc01vdXNlRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgICAgY29uc3QgcmVjdHMgPSBhcnJheUZyb20oaW5zdGFuY2UucmVmZXJlbmNlLmdldENsaWVudFJlY3RzKCkpO1xuICAgICAgICAgIGNvbnN0IGN1cnNvclJlY3QgPSByZWN0cy5maW5kKFxuICAgICAgICAgICAgKHJlY3QpID0+XG4gICAgICAgICAgICAgIHJlY3QubGVmdCAtIDIgPD0gZXZlbnQuY2xpZW50WCAmJlxuICAgICAgICAgICAgICByZWN0LnJpZ2h0ICsgMiA+PSBldmVudC5jbGllbnRYICYmXG4gICAgICAgICAgICAgIHJlY3QudG9wIC0gMiA8PSBldmVudC5jbGllbnRZICYmXG4gICAgICAgICAgICAgIHJlY3QuYm90dG9tICsgMiA+PSBldmVudC5jbGllbnRZXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHJlY3RzLmluZGV4T2YoY3Vyc29yUmVjdCk7XG4gICAgICAgICAgY3Vyc29yUmVjdEluZGV4ID0gaW5kZXggPiAtMSA/IGluZGV4IDogY3Vyc29yUmVjdEluZGV4O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25IaWRkZW4oKTogdm9pZCB7XG4gICAgICAgIGN1cnNvclJlY3RJbmRleCA9IC0xO1xuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5saW5lUG9zaXRpb25pbmc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmxpbmVCb3VuZGluZ0NsaWVudFJlY3QoXG4gIGN1cnJlbnRCYXNlUGxhY2VtZW50OiBCYXNlUGxhY2VtZW50IHwgbnVsbCxcbiAgYm91bmRpbmdSZWN0OiBET01SZWN0LFxuICBjbGllbnRSZWN0czogRE9NUmVjdFtdLFxuICBjdXJzb3JSZWN0SW5kZXg6IG51bWJlclxuKToge1xuICB0b3A6IG51bWJlcjtcbiAgYm90dG9tOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbiAgcmlnaHQ6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59IHtcbiAgLy8gTm90IGFuIGlubGluZSBlbGVtZW50LCBvciBwbGFjZW1lbnQgaXMgbm90IHlldCBrbm93blxuICBpZiAoY2xpZW50UmVjdHMubGVuZ3RoIDwgMiB8fCBjdXJyZW50QmFzZVBsYWNlbWVudCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBib3VuZGluZ1JlY3Q7XG4gIH1cblxuICAvLyBUaGVyZSBhcmUgdHdvIHJlY3RzIGFuZCB0aGV5IGFyZSBkaXNqb2luZWRcbiAgaWYgKFxuICAgIGNsaWVudFJlY3RzLmxlbmd0aCA9PT0gMiAmJlxuICAgIGN1cnNvclJlY3RJbmRleCA+PSAwICYmXG4gICAgY2xpZW50UmVjdHNbMF0ubGVmdCA+IGNsaWVudFJlY3RzWzFdLnJpZ2h0XG4gICkge1xuICAgIHJldHVybiBjbGllbnRSZWN0c1tjdXJzb3JSZWN0SW5kZXhdIHx8IGJvdW5kaW5nUmVjdDtcbiAgfVxuXG4gIHN3aXRjaCAoY3VycmVudEJhc2VQbGFjZW1lbnQpIHtcbiAgICBjYXNlICd0b3AnOlxuICAgIGNhc2UgJ2JvdHRvbSc6IHtcbiAgICAgIGNvbnN0IGZpcnN0UmVjdCA9IGNsaWVudFJlY3RzWzBdO1xuICAgICAgY29uc3QgbGFzdFJlY3QgPSBjbGllbnRSZWN0c1tjbGllbnRSZWN0cy5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnN0IGlzVG9wID0gY3VycmVudEJhc2VQbGFjZW1lbnQgPT09ICd0b3AnO1xuXG4gICAgICBjb25zdCB0b3AgPSBmaXJzdFJlY3QudG9wO1xuICAgICAgY29uc3QgYm90dG9tID0gbGFzdFJlY3QuYm90dG9tO1xuICAgICAgY29uc3QgbGVmdCA9IGlzVG9wID8gZmlyc3RSZWN0LmxlZnQgOiBsYXN0UmVjdC5sZWZ0O1xuICAgICAgY29uc3QgcmlnaHQgPSBpc1RvcCA/IGZpcnN0UmVjdC5yaWdodCA6IGxhc3RSZWN0LnJpZ2h0O1xuICAgICAgY29uc3Qgd2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgICBjb25zdCBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG5cbiAgICAgIHJldHVybiB7dG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0LCB3aWR0aCwgaGVpZ2h0fTtcbiAgICB9XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgY2FzZSAncmlnaHQnOiB7XG4gICAgICBjb25zdCBtaW5MZWZ0ID0gTWF0aC5taW4oLi4uY2xpZW50UmVjdHMubWFwKChyZWN0cykgPT4gcmVjdHMubGVmdCkpO1xuICAgICAgY29uc3QgbWF4UmlnaHQgPSBNYXRoLm1heCguLi5jbGllbnRSZWN0cy5tYXAoKHJlY3RzKSA9PiByZWN0cy5yaWdodCkpO1xuICAgICAgY29uc3QgbWVhc3VyZVJlY3RzID0gY2xpZW50UmVjdHMuZmlsdGVyKChyZWN0KSA9PlxuICAgICAgICBjdXJyZW50QmFzZVBsYWNlbWVudCA9PT0gJ2xlZnQnXG4gICAgICAgICAgPyByZWN0LmxlZnQgPT09IG1pbkxlZnRcbiAgICAgICAgICA6IHJlY3QucmlnaHQgPT09IG1heFJpZ2h0XG4gICAgICApO1xuXG4gICAgICBjb25zdCB0b3AgPSBtZWFzdXJlUmVjdHNbMF0udG9wO1xuICAgICAgY29uc3QgYm90dG9tID0gbWVhc3VyZVJlY3RzW21lYXN1cmVSZWN0cy5sZW5ndGggLSAxXS5ib3R0b207XG4gICAgICBjb25zdCBsZWZ0ID0gbWluTGVmdDtcbiAgICAgIGNvbnN0IHJpZ2h0ID0gbWF4UmlnaHQ7XG4gICAgICBjb25zdCB3aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGJvdHRvbSAtIHRvcDtcblxuICAgICAgcmV0dXJuIHt0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQsIHdpZHRoLCBoZWlnaHR9O1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gYm91bmRpbmdSZWN0O1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7VmlydHVhbEVsZW1lbnR9IGZyb20gJ0Bwb3BwZXJqcy9jb3JlJztcbmltcG9ydCB7UmVmZXJlbmNlRWxlbWVudCwgU3RpY2t5fSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IHN0aWNreTogU3RpY2t5ID0ge1xuICBuYW1lOiAnc3RpY2t5JyxcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgZm4oaW5zdGFuY2UpIHtcbiAgICBjb25zdCB7cmVmZXJlbmNlLCBwb3BwZXJ9ID0gaW5zdGFuY2U7XG5cbiAgICBmdW5jdGlvbiBnZXRSZWZlcmVuY2UoKTogUmVmZXJlbmNlRWxlbWVudCB8IFZpcnR1YWxFbGVtZW50IHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZVxuICAgICAgICA/IGluc3RhbmNlLnBvcHBlckluc3RhbmNlLnN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZVxuICAgICAgICA6IHJlZmVyZW5jZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG91bGRDaGVjayh2YWx1ZTogJ3JlZmVyZW5jZScgfCAncG9wcGVyJyk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLnByb3BzLnN0aWNreSA9PT0gdHJ1ZSB8fCBpbnN0YW5jZS5wcm9wcy5zdGlja3kgPT09IHZhbHVlO1xuICAgIH1cblxuICAgIGxldCBwcmV2UmVmUmVjdDogQ2xpZW50UmVjdCB8IG51bGwgPSBudWxsO1xuICAgIGxldCBwcmV2UG9wUmVjdDogQ2xpZW50UmVjdCB8IG51bGwgPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgICBjb25zdCBjdXJyZW50UmVmUmVjdCA9IHNob3VsZENoZWNrKCdyZWZlcmVuY2UnKVxuICAgICAgICA/IGdldFJlZmVyZW5jZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIDogbnVsbDtcbiAgICAgIGNvbnN0IGN1cnJlbnRQb3BSZWN0ID0gc2hvdWxkQ2hlY2soJ3BvcHBlcicpXG4gICAgICAgID8gcG9wcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIDogbnVsbDtcblxuICAgICAgaWYgKFxuICAgICAgICAoY3VycmVudFJlZlJlY3QgJiYgYXJlUmVjdHNEaWZmZXJlbnQocHJldlJlZlJlY3QsIGN1cnJlbnRSZWZSZWN0KSkgfHxcbiAgICAgICAgKGN1cnJlbnRQb3BSZWN0ICYmIGFyZVJlY3RzRGlmZmVyZW50KHByZXZQb3BSZWN0LCBjdXJyZW50UG9wUmVjdCkpXG4gICAgICApIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnBvcHBlckluc3RhbmNlKSB7XG4gICAgICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJldlJlZlJlY3QgPSBjdXJyZW50UmVmUmVjdDtcbiAgICAgIHByZXZQb3BSZWN0ID0gY3VycmVudFBvcFJlY3Q7XG5cbiAgICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgb25Nb3VudCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLnN0aWNreSkge1xuICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0aWNreTtcblxuZnVuY3Rpb24gYXJlUmVjdHNEaWZmZXJlbnQoXG4gIHJlY3RBOiBDbGllbnRSZWN0IHwgbnVsbCxcbiAgcmVjdEI6IENsaWVudFJlY3QgfCBudWxsXG4pOiBib29sZWFuIHtcbiAgaWYgKHJlY3RBICYmIHJlY3RCKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHJlY3RBLnRvcCAhPT0gcmVjdEIudG9wIHx8XG4gICAgICByZWN0QS5yaWdodCAhPT0gcmVjdEIucmlnaHQgfHxcbiAgICAgIHJlY3RBLmJvdHRvbSAhPT0gcmVjdEIuYm90dG9tIHx8XG4gICAgICByZWN0QS5sZWZ0ICE9PSByZWN0Qi5sZWZ0XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuIiwgImltcG9ydCB0aXBweSBmcm9tICcuLi9zcmMnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJy4uL3NyYy90ZW1wbGF0ZSc7XG5cbnRpcHB5LnNldERlZmF1bHRQcm9wcyh7cmVuZGVyfSk7XG5cbmV4cG9ydCB7ZGVmYXVsdCwgaGlkZUFsbH0gZnJvbSAnLi4vc3JjJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjcmVhdGVTaW5nbGV0b259IGZyb20gJy4uL3NyYy9hZGRvbnMvY3JlYXRlU2luZ2xldG9uJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBkZWxlZ2F0ZX0gZnJvbSAnLi4vc3JjL2FkZG9ucy9kZWxlZ2F0ZSc7XG5leHBvcnQge2RlZmF1bHQgYXMgYW5pbWF0ZUZpbGx9IGZyb20gJy4uL3NyYy9wbHVnaW5zL2FuaW1hdGVGaWxsJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBmb2xsb3dDdXJzb3J9IGZyb20gJy4uL3NyYy9wbHVnaW5zL2ZvbGxvd0N1cnNvcic7XG5leHBvcnQge2RlZmF1bHQgYXMgaW5saW5lUG9zaXRpb25pbmd9IGZyb20gJy4uL3NyYy9wbHVnaW5zL2lubGluZVBvc2l0aW9uaW5nJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGlja3l9IGZyb20gJy4uL3NyYy9wbHVnaW5zL3N0aWNreSc7XG5leHBvcnQge1JPVU5EX0FSUk9XIGFzIHJvdW5kQXJyb3d9IGZyb20gJy4uL3NyYy9jb25zdGFudHMnO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLCtFQUFBQSxVQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ25DO0FBR0EsSUFBQUEsUUFBTztBQUFBLElBRUwsTUFBTSxPQUFPLGNBQWMsWUFBWSxVQUFVLEtBQ2pELE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTTtBQUFBLElBRXpDLE1BQU0sT0FBTyxRQUFRLFlBQVksSUFBSSxLQUNyQyxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sS0FDekMsTUFBTSxPQUFPRCxZQUFRLFlBQVlBLFFBQUk7QUFBQSxJQUVwQywyQkFBWTtBQUFFLGFBQU87QUFBQSxJQUFNLEVBQUcsS0FBSyxTQUFTLGFBQWEsRUFBRTtBQUFBO0FBQUE7OztBQ2Y5RDtBQUFBLDhFQUFBRSxVQUFBQyxTQUFBO0FBQUE7QUFDQSxJQUFBQSxRQUFPLFVBQVUsU0FBVSxNQUFNO0FBQy9CLFVBQUk7QUFDRixlQUFPLENBQUMsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsU0FBUyxPQUFPO0FBQ2QsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDUEE7QUFBQSxvRkFBQUMsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRO0FBR1osSUFBQUEsUUFBTyxVQUFVLENBQUMsTUFBTSxXQUFZO0FBRWxDLGFBQU8sT0FBTyxlQUFlLENBQUMsR0FBRyxHQUFHLEVBQUUsS0FBSyxXQUFZO0FBQUUsZUFBTztBQUFBLE1BQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNO0FB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T0FBT1QsTUFBTUcsU0FBU3hDLE9BQU8yQyxPQUFPVSxjQUFjckQsTUFBekQ7QUFDQXFDLFVBQU1PLFNBQVNTO0FBRWYsUUFBSWhCLE1BQU1HLFNBQVNrQixPQUFPO0FBQ3hCcEIsYUFBT1EsT0FBT1QsTUFBTUcsU0FBU2tCLE1BQU1mLE9BQU9VLGNBQWNLLEtBQXhEO0lBQ0Q7RUFJRjtBQXpCd0UsQ0FBQTtBTWhCM0V6RSxNQUFNbW9CLGdCQUFnQjtFQUFDTjtBQUFELENBQXRCOzsiLAogICJuYW1lcyI6IFsiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJmbiIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJmbiIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiU3ltYm9sIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJkb2N1bWVudCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJUeXBlRXJyb3IiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAibWF4IiwgIm1pbiIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJtaW4iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJUaXBweV9leHBvcnRzIiwgIl9fZXhwb3J0IiwgInRpcHB5IiwgInRpcHB5X2VzbV9kZWZhdWx0IiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJ0b3AiLCAiYm90dG9tIiwgInJpZ2h0IiwgImxlZnQiLCAiYXV0byIsICJiYXNlUGxhY2VtZW50cyIsICJzdGFydCIsICJlbmQiLCAiY2xpcHBpbmdQYXJlbnRzIiwgInZpZXdwb3J0IiwgInBvcHBlciIsICJyZWZlcmVuY2UiLCAidmFyaWF0aW9uUGxhY2VtZW50cyIsICJyZWR1Y2UiLCAiYWNjIiwgInBsYWNlbWVudCIsICJjb25jYXQiLCAicGxhY2VtZW50cyIsICJiZWZvcmVSZWFkIiwgInJlYWQiLCAiYWZ0ZXJSZWFkIiwgImJlZm9yZU1haW4iLCAibWFpbiIsICJhZnRlck1haW4iLCAiYmVmb3JlV3JpdGUiLCAid3JpdGUiLCAiYWZ0ZXJXcml0ZSIsICJtb2RpZmllclBoYXNlcyIsICJnZXROb2RlTmFtZSIsICJlbGVtZW50IiwgIm5vZGVOYW1lIiwgInRvTG93ZXJDYXNlIiwgImdldFdpbmRvdyIsICJub2RlIiwgIndpbmRvdyIsICJ0b1N0cmluZyIsICJvd25lckRvY3VtZW50IiwgImRlZmF1bHRWaWV3IiwgImlzRWxlbWVudCIsICJPd25FbGVtZW50IiwgIkVsZW1lbnQiLCAiaXNIVE1MRWxlbWVudCIsICJIVE1MRWxlbWVudCIsICJpc1NoYWRvd1Jvb3QiLCAiU2hhZG93Um9vdCIsICJhcHBseVN0eWxlcyIsICJfcmVmIiwgInN0YXRlIiwgIk9iamVjdCIsICJrZXlzIiwgImVsZW1lbnRzIiwgImZvckVhY2giLCAibmFtZSIsICJzdHlsZSIsICJzdHlsZXMiLCAiYXR0cmlidXRlcyIsICJhc3NpZ24iLCAibmFtZTIiLCAidmFsdWUiLCAicmVtb3ZlQXR0cmlidXRlIiwgInNldEF0dHJpYnV0ZSIsICJlZmZlY3QiLCAiX3JlZjIiLCAiaW5pdGlhbFN0eWxlcyIsICJwb3NpdGlvbiIsICJvcHRpb25zIiwgInN0cmF0ZWd5IiwgIm1hcmdpbiIsICJhcnJvdyIsICJzdHlsZVByb3BlcnRpZXMiLCAiaGFzT3duUHJvcGVydHkiLCAic3R5bGUyIiwgInByb3BlcnR5IiwgImF0dHJpYnV0ZSIsICJhcHBseVN0eWxlc19kZWZhdWx0IiwgImVuYWJsZWQiLCAicGhhc2UiLCAiZm4iLCAicmVxdWlyZXMiLCAiZ2V0QmFzZVBsYWNlbWVudCIsICJzcGxpdCIsICJtYXgiLCAiTWF0aCIsICJtaW4iLCAicm91bmQiLCAiZ2V0VUFTdHJpbmciLCAidWFEYXRhIiwgIm5hdmlnYXRvciIsICJ1c2VyQWdlbnREYXRhIiwgImJyYW5kcyIsICJBcnJheSIsICJpc0FycmF5IiwgIm1hcCIsICJpdGVtIiwgImJyYW5kIiwgInZlcnNpb24iLCAiam9pbiIsICJ1c2VyQWdlbnQiLCAiaXNMYXlvdXRWaWV3cG9ydCIsICJ0ZXN0IiwgImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsICJpbmNsdWRlU2NhbGUiLCAiaXNGaXhlZFN0cmF0ZWd5IiwgImNsaWVudFJlY3QiLCAic2NhbGVYIiwgInNjYWxlWSIsICJvZmZzZXRXaWR0aCIsICJ3aWR0aCIsICJvZmZzZXRIZWlnaHQiLCAiaGVpZ2h0IiwgInZpc3VhbFZpZXdwb3J0IiwgImFkZFZpc3VhbE9mZnNldHMiLCAieCIsICJvZmZzZXRMZWZ0IiwgInkiLCAib2Zmc2V0VG9wIiwgImdldExheW91dFJlY3QiLCAiYWJzIiwgImNvbnRhaW5zIiwgInBhcmVudCIsICJjaGlsZCIsICJyb290Tm9kZSIsICJnZXRSb290Tm9kZSIsICJuZXh0IiwgImlzU2FtZU5vZGUiLCAicGFyZW50Tm9kZSIsICJob3N0IiwgImdldENvbXB1dGVkU3R5bGUiLCAiaXNUYWJsZUVsZW1lbnQiLCAiaW5kZXhPZiIsICJnZXREb2N1bWVudEVsZW1lbnQiLCAiZG9jdW1lbnQiLCAiZG9jdW1lbnRFbGVtZW50IiwgImdldFBhcmVudE5vZGUiLCAiYXNzaWduZWRTbG90IiwgImdldFRydWVPZmZzZXRQYXJlbnQiLCAib2Zmc2V0UGFyZW50IiwgImdldENvbnRhaW5pbmdCbG9jayIsICJpc0ZpcmVmb3giLCAiaXNJRSIsICJlbGVtZW50Q3NzIiwgImN1cnJlbnROb2RlIiwgImNzcyIsICJ0cmFuc2Zvcm0iLCAicGVyc3BlY3RpdmUiLCAiY29udGFpbiIsICJ3aWxsQ2hhbmdlIiwgImZpbHRlciIsICJnZXRPZmZzZXRQYXJlbnQiLCAid2luZG93MiIsICJnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQiLCAid2l0aGluIiwgIm1pbjIiLCAibWF4MiIsICJ3aXRoaW5NYXhDbGFtcCIsICJ2IiwgImdldEZyZXNoU2lkZU9iamVjdCIsICJtZXJnZVBhZGRpbmdPYmplY3QiLCAicGFkZGluZ09iamVjdCIsICJleHBhbmRUb0hhc2hNYXAiLCAiaGFzaE1hcCIsICJrZXkiLCAidG9QYWRkaW5nT2JqZWN0IiwgInRvUGFkZGluZ09iamVjdDIiLCAicGFkZGluZyIsICJyZWN0cyIsICJfc3RhdGUkbW9kaWZpZXJzRGF0YSQiLCAiYXJyb3dFbGVtZW50IiwgInBvcHBlck9mZnNldHMyIiwgIm1vZGlmaWVyc0RhdGEiLCAicG9wcGVyT2Zmc2V0cyIsICJiYXNlUGxhY2VtZW50IiwgImF4aXMiLCAiaXNWZXJ0aWNhbCIsICJsZW4iLCAiYXJyb3dSZWN0IiwgIm1pblByb3AiLCAibWF4UHJvcCIsICJlbmREaWZmIiwgInN0YXJ0RGlmZiIsICJhcnJvd09mZnNldFBhcmVudCIsICJjbGllbnRTaXplIiwgImNsaWVudEhlaWdodCIsICJjbGllbnRXaWR0aCIsICJjZW50ZXJUb1JlZmVyZW5jZSIsICJjZW50ZXIiLCAib2Zmc2V0MiIsICJheGlzUHJvcCIsICJjZW50ZXJPZmZzZXQiLCAiZWZmZWN0MiIsICJfb3B0aW9ucyRlbGVtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiYXJyb3dfZGVmYXVsdCIsICJyZXF1aXJlc0lmRXhpc3RzIiwgImdldFZhcmlhdGlvbiIsICJ1bnNldFNpZGVzIiwgInJvdW5kT2Zmc2V0c0J5RFBSIiwgIndpbiIsICJkcHIiLCAiZGV2aWNlUGl4ZWxSYXRpbyIsICJtYXBUb1N0eWxlcyIsICJfT2JqZWN0JGFzc2lnbjIiLCAicG9wcGVyMiIsICJwb3BwZXJSZWN0IiwgInZhcmlhdGlvbiIsICJvZmZzZXRzIiwgImdwdUFjY2VsZXJhdGlvbiIsICJhZGFwdGl2ZSIsICJyb3VuZE9mZnNldHMiLCAiaXNGaXhlZCIsICJfb2Zmc2V0cyR4IiwgIl9vZmZzZXRzJHkiLCAiX3JlZjMiLCAiaGFzWCIsICJoYXNZIiwgInNpZGVYIiwgInNpZGVZIiwgImhlaWdodFByb3AiLCAid2lkdGhQcm9wIiwgIm9mZnNldFkiLCAib2Zmc2V0WCIsICJjb21tb25TdHlsZXMiLCAiX3JlZjQiLCAiX09iamVjdCRhc3NpZ24iLCAiY29tcHV0ZVN0eWxlcyIsICJfcmVmNSIsICJfb3B0aW9ucyRncHVBY2NlbGVyYXQiLCAiX29wdGlvbnMkYWRhcHRpdmUiLCAiX29wdGlvbnMkcm91bmRPZmZzZXRzIiwgImNvbXB1dGVTdHlsZXNfZGVmYXVsdCIsICJkYXRhIiwgInBhc3NpdmUiLCAiZWZmZWN0MyIsICJpbnN0YW5jZSIsICJfb3B0aW9ucyRzY3JvbGwiLCAic2Nyb2xsIiwgIl9vcHRpb25zJHJlc2l6ZSIsICJyZXNpemUiLCAic2Nyb2xsUGFyZW50cyIsICJzY3JvbGxQYXJlbnQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJ1cGRhdGUiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJldmVudExpc3RlbmVyc19kZWZhdWx0IiwgImhhc2giLCAiZ2V0T3Bwb3NpdGVQbGFjZW1lbnQiLCAicmVwbGFjZSIsICJtYXRjaGVkIiwgImhhc2gyIiwgImdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IiwgImdldFdpbmRvd1Njcm9sbCIsICJzY3JvbGxMZWZ0IiwgInBhZ2VYT2Zmc2V0IiwgInNjcm9sbFRvcCIsICJwYWdlWU9mZnNldCIsICJnZXRXaW5kb3dTY3JvbGxCYXJYIiwgImdldFZpZXdwb3J0UmVjdCIsICJodG1sIiwgImxheW91dFZpZXdwb3J0IiwgImdldERvY3VtZW50UmVjdCIsICJfZWxlbWVudCRvd25lckRvY3VtZW4iLCAid2luU2Nyb2xsIiwgImJvZHkiLCAic2Nyb2xsV2lkdGgiLCAic2Nyb2xsSGVpZ2h0IiwgImRpcmVjdGlvbiIsICJpc1Njcm9sbFBhcmVudCIsICJfZ2V0Q29tcHV0ZWRTdHlsZSIsICJvdmVyZmxvdyIsICJvdmVyZmxvd1giLCAib3ZlcmZsb3dZIiwgImdldFNjcm9sbFBhcmVudCIsICJsaXN0U2Nyb2xsUGFyZW50cyIsICJsaXN0IiwgImlzQm9keSIsICJ0YXJnZXQiLCAidXBkYXRlZExpc3QiLCAicmVjdFRvQ2xpZW50UmVjdCIsICJyZWN0IiwgImdldElubmVyQm91bmRpbmdDbGllbnRSZWN0IiwgImNsaWVudFRvcCIsICJjbGllbnRMZWZ0IiwgImdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlIiwgImNsaXBwaW5nUGFyZW50IiwgImdldENsaXBwaW5nUGFyZW50cyIsICJjbGlwcGluZ1BhcmVudHMyIiwgImNhbkVzY2FwZUNsaXBwaW5nIiwgImNsaXBwZXJFbGVtZW50IiwgImdldENsaXBwaW5nUmVjdCIsICJib3VuZGFyeSIsICJyb290Qm91bmRhcnkiLCAibWFpbkNsaXBwaW5nUGFyZW50cyIsICJmaXJzdENsaXBwaW5nUGFyZW50IiwgImNsaXBwaW5nUmVjdCIsICJhY2NSZWN0IiwgImNvbXB1dGVPZmZzZXRzIiwgInJlZmVyZW5jZTIiLCAiY29tbW9uWCIsICJjb21tb25ZIiwgIm1haW5BeGlzIiwgImRldGVjdE92ZXJmbG93IiwgIl9vcHRpb25zIiwgIl9vcHRpb25zJHBsYWNlbWVudCIsICJfb3B0aW9ucyRzdHJhdGVneSIsICJfb3B0aW9ucyRib3VuZGFyeSIsICJfb3B0aW9ucyRyb290Qm91bmRhcnkiLCAiX29wdGlvbnMkZWxlbWVudENvbnRlIiwgImVsZW1lbnRDb250ZXh0IiwgIl9vcHRpb25zJGFsdEJvdW5kYXJ5IiwgImFsdEJvdW5kYXJ5IiwgIl9vcHRpb25zJHBhZGRpbmciLCAiYWx0Q29udGV4dCIsICJjbGlwcGluZ0NsaWVudFJlY3QiLCAiY29udGV4dEVsZW1lbnQiLCAicmVmZXJlbmNlQ2xpZW50UmVjdCIsICJwb3BwZXJDbGllbnRSZWN0IiwgImVsZW1lbnRDbGllbnRSZWN0IiwgIm92ZXJmbG93T2Zmc2V0cyIsICJvZmZzZXREYXRhIiwgIm9mZnNldCIsICJtdWx0aXBseSIsICJjb21wdXRlQXV0b1BsYWNlbWVudCIsICJmbGlwVmFyaWF0aW9ucyIsICJfb3B0aW9ucyRhbGxvd2VkQXV0b1AiLCAiYWxsb3dlZEF1dG9QbGFjZW1lbnRzIiwgInBsYWNlbWVudHMyIiwgInBsYWNlbWVudDIiLCAiYWxsb3dlZFBsYWNlbWVudHMiLCAibGVuZ3RoIiwgIm92ZXJmbG93cyIsICJzb3J0IiwgImEiLCAiYiIsICJnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyIsICJvcHBvc2l0ZVBsYWNlbWVudCIsICJmbGlwIiwgIl9za2lwIiwgIl9vcHRpb25zJG1haW5BeGlzIiwgImNoZWNrTWFpbkF4aXMiLCAiX29wdGlvbnMkYWx0QXhpcyIsICJhbHRBeGlzIiwgImNoZWNrQWx0QXhpcyIsICJzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMiLCAiZmFsbGJhY2tQbGFjZW1lbnRzIiwgIl9vcHRpb25zJGZsaXBWYXJpYXRpbyIsICJwcmVmZXJyZWRQbGFjZW1lbnQiLCAiaXNCYXNlUGxhY2VtZW50IiwgInJlZmVyZW5jZVJlY3QiLCAiY2hlY2tzTWFwIiwgIk1hcCIsICJtYWtlRmFsbGJhY2tDaGVja3MiLCAiZmlyc3RGaXR0aW5nUGxhY2VtZW50IiwgImkiLCAiX2Jhc2VQbGFjZW1lbnQiLCAiaXNTdGFydFZhcmlhdGlvbiIsICJtYWluVmFyaWF0aW9uU2lkZSIsICJhbHRWYXJpYXRpb25TaWRlIiwgImNoZWNrcyIsICJwdXNoIiwgImV2ZXJ5IiwgImNoZWNrIiwgInNldCIsICJudW1iZXJPZkNoZWNrcyIsICJfbG9vcCIsICJfbG9vcDIiLCAiX2kyIiwgImZpdHRpbmdQbGFjZW1lbnQiLCAiZmluZCIsICJjaGVja3MyIiwgImdldCIsICJzbGljZSIsICJfaSIsICJfcmV0IiwgInJlc2V0IiwgImZsaXBfZGVmYXVsdCIsICJnZXRTaWRlT2Zmc2V0cyIsICJwcmV2ZW50ZWRPZmZzZXRzIiwgImlzQW55U2lkZUZ1bGx5Q2xpcHBlZCIsICJzb21lIiwgInNpZGUiLCAiaGlkZSIsICJwcmV2ZW50T3ZlcmZsb3ciLCAicmVmZXJlbmNlT3ZlcmZsb3ciLCAicG9wcGVyQWx0T3ZlcmZsb3ciLCAicmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzIiwgInBvcHBlckVzY2FwZU9mZnNldHMiLCAiaXNSZWZlcmVuY2VIaWRkZW4iLCAiaGFzUG9wcGVyRXNjYXBlZCIsICJoaWRlX2RlZmF1bHQiLCAiZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkiLCAiaW52ZXJ0RGlzdGFuY2UiLCAic2tpZGRpbmciLCAiZGlzdGFuY2UiLCAiX29wdGlvbnMkb2Zmc2V0IiwgIl9kYXRhJHN0YXRlJHBsYWNlbWVudCIsICJvZmZzZXRfZGVmYXVsdCIsICJwb3BwZXJPZmZzZXRzX2RlZmF1bHQiLCAiZ2V0QWx0QXhpcyIsICJfb3B0aW9ucyR0ZXRoZXIiLCAidGV0aGVyIiwgIl9vcHRpb25zJHRldGhlck9mZnNldCIsICJ0ZXRoZXJPZmZzZXQiLCAidGV0aGVyT2Zmc2V0VmFsdWUiLCAibm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlIiwgIm9mZnNldE1vZGlmaWVyU3RhdGUiLCAiX29mZnNldE1vZGlmaWVyU3RhdGUkIiwgIm1haW5TaWRlIiwgImFsdFNpZGUiLCAiYWRkaXRpdmUiLCAibWluTGVuIiwgIm1heExlbiIsICJhcnJvd1BhZGRpbmdPYmplY3QiLCAiYXJyb3dQYWRkaW5nTWluIiwgImFycm93UGFkZGluZ01heCIsICJhcnJvd0xlbiIsICJtaW5PZmZzZXQiLCAibWF4T2Zmc2V0IiwgImNsaWVudE9mZnNldCIsICJvZmZzZXRNb2RpZmllclZhbHVlIiwgInRldGhlck1pbiIsICJ0ZXRoZXJNYXgiLCAicHJldmVudGVkT2Zmc2V0IiwgIl9vZmZzZXRNb2RpZmllclN0YXRlJDIiLCAiX21haW5TaWRlIiwgIl9hbHRTaWRlIiwgIl9vZmZzZXQiLCAiX2xlbiIsICJfbWluIiwgIl9tYXgiLCAiaXNPcmlnaW5TaWRlIiwgIl9vZmZzZXRNb2RpZmllclZhbHVlIiwgIl90ZXRoZXJNaW4iLCAiX3RldGhlck1heCIsICJfcHJldmVudGVkT2Zmc2V0IiwgInByZXZlbnRPdmVyZmxvd19kZWZhdWx0IiwgImdldEhUTUxFbGVtZW50U2Nyb2xsIiwgImdldE5vZGVTY3JvbGwiLCAiaXNFbGVtZW50U2NhbGVkIiwgImdldENvbXBvc2l0ZVJlY3QiLCAiZWxlbWVudE9yVmlydHVhbEVsZW1lbnQiLCAiaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQiLCAib2Zmc2V0UGFyZW50SXNTY2FsZWQiLCAib3JkZXIiLCAibW9kaWZpZXJzIiwgInZpc2l0ZWQiLCAiU2V0IiwgInJlc3VsdCIsICJtb2RpZmllciIsICJhZGQiLCAiZGVwIiwgImhhcyIsICJkZXBNb2RpZmllciIsICJvcmRlck1vZGlmaWVycyIsICJvcmRlcmVkTW9kaWZpZXJzIiwgImRlYm91bmNlIiwgImZuMiIsICJwZW5kaW5nIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJ0aGVuIiwgIm1lcmdlQnlOYW1lIiwgIm1lcmdlZCIsICJtZXJnZWQyIiwgImN1cnJlbnQiLCAiZXhpc3RpbmciLCAiREVGQVVMVF9PUFRJT05TIiwgImFyZVZhbGlkRWxlbWVudHMiLCAiYXJndW1lbnRzIiwgImFyZ3MiLCAiX2tleSIsICJwb3BwZXJHZW5lcmF0b3IiLCAiZ2VuZXJhdG9yT3B0aW9ucyIsICJfZ2VuZXJhdG9yT3B0aW9ucyIsICJfZ2VuZXJhdG9yT3B0aW9ucyRkZWYiLCAiZGVmYXVsdE1vZGlmaWVycyIsICJkZWZhdWx0TW9kaWZpZXJzMiIsICJfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyIiwgImRlZmF1bHRPcHRpb25zIiwgImNyZWF0ZVBvcHBlcjIiLCAiZWZmZWN0Q2xlYW51cEZucyIsICJpc0Rlc3Ryb3llZCIsICJzZXRPcHRpb25zIiwgInNldE9wdGlvbnNBY3Rpb24iLCAib3B0aW9uczIiLCAiY2xlYW51cE1vZGlmaWVyRWZmZWN0cyIsICJtIiwgInJ1bk1vZGlmaWVyRWZmZWN0cyIsICJmb3JjZVVwZGF0ZSIsICJfc3RhdGUkZWxlbWVudHMiLCAicmVmZXJlbmNlMyIsICJwb3BwZXIzIiwgImluZGV4IiwgIl9zdGF0ZSRvcmRlcmVkTW9kaWZpZSIsICJfc3RhdGUkb3JkZXJlZE1vZGlmaWUyIiwgImRlc3Ryb3kiLCAic3RhdGUyIiwgIm9uRmlyc3RVcGRhdGUiLCAiX3JlZiRvcHRpb25zIiwgImVmZmVjdDUiLCAiY2xlYW51cEZuIiwgIm5vb3BGbiIsICJub29wRm4yIiwgImNyZWF0ZVBvcHBlciIsICJCT1hfQ0xBU1MiLCAiQ09OVEVOVF9DTEFTUyIsICJCQUNLRFJPUF9DTEFTUyIsICJBUlJPV19DTEFTUyIsICJTVkdfQVJST1dfQ0xBU1MiLCAiVE9VQ0hfT1BUSU9OUyIsICJjYXB0dXJlIiwgIlRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPIiwgIlRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPMiIsICJnZXRWYWx1ZUF0SW5kZXhPclJldHVybiIsICJkZWZhdWx0VmFsdWUiLCAiaXNUeXBlIiwgInR5cGUiLCAic3RyIiwgImNhbGwiLCAiaW52b2tlV2l0aEFyZ3NPclJldHVybiIsICJhcHBseSIsICJkZWJvdW5jZTIiLCAibXMiLCAidGltZW91dCIsICJhcmciLCAiY2xlYXJUaW1lb3V0IiwgInNldFRpbWVvdXQiLCAic3BsaXRCeVNwYWNlcyIsICJCb29sZWFuIiwgIm5vcm1hbGl6ZVRvQXJyYXkiLCAicHVzaElmVW5pcXVlIiwgImFyciIsICJ1bmlxdWUiLCAiZ2V0QmFzZVBsYWNlbWVudDIiLCAiYXJyYXlGcm9tIiwgInJlbW92ZVVuZGVmaW5lZFByb3BzIiwgIm9iaiIsICJkaXYiLCAiY3JlYXRlRWxlbWVudCIsICJpc0VsZW1lbnQyIiwgImlzTm9kZUxpc3QiLCAiaXNNb3VzZUV2ZW50IiwgImlzUmVmZXJlbmNlRWxlbWVudCIsICJfdGlwcHkiLCAiZ2V0QXJyYXlPZkVsZW1lbnRzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAic2V0VHJhbnNpdGlvbkR1cmF0aW9uIiwgImVscyIsICJlbCIsICJ0cmFuc2l0aW9uRHVyYXRpb24iLCAic2V0VmlzaWJpbGl0eVN0YXRlIiwgImdldE93bmVyRG9jdW1lbnQiLCAiZWxlbWVudE9yRWxlbWVudHMiLCAiX25vcm1hbGl6ZVRvQXJyYXkiLCAiaXNDdXJzb3JPdXRzaWRlSW50ZXJhY3RpdmVCb3JkZXIiLCAicG9wcGVyVHJlZURhdGEiLCAiZXZlbnQiLCAiY2xpZW50WCIsICJjbGllbnRZIiwgInBvcHBlclN0YXRlIiwgInByb3BzIiwgImludGVyYWN0aXZlQm9yZGVyIiwgInRvcERpc3RhbmNlIiwgImJvdHRvbURpc3RhbmNlIiwgImxlZnREaXN0YW5jZSIsICJyaWdodERpc3RhbmNlIiwgImV4Y2VlZHNUb3AiLCAiZXhjZWVkc0JvdHRvbSIsICJleGNlZWRzTGVmdCIsICJleGNlZWRzUmlnaHQiLCAidXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyIiwgImJveCIsICJhY3Rpb24iLCAibGlzdGVuZXIiLCAibWV0aG9kIiwgImFjdHVhbENvbnRhaW5zIiwgIl90YXJnZXQkZ2V0Um9vdE5vZGUiLCAiY3VycmVudElucHV0IiwgImlzVG91Y2giLCAibGFzdE1vdXNlTW92ZVRpbWUiLCAib25Eb2N1bWVudFRvdWNoU3RhcnQiLCAicGVyZm9ybWFuY2UiLCAib25Eb2N1bWVudE1vdXNlTW92ZSIsICJub3ciLCAib25XaW5kb3dCbHVyIiwgImFjdGl2ZUVsZW1lbnQiLCAiYmx1ciIsICJpc1Zpc2libGUiLCAiYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzIiwgImlzQnJvd3NlciIsICJpc0lFMTEiLCAibXNDcnlwdG8iLCAicmVzZXRWaXNpdGVkTWVzc2FnZXMiLCAicGx1Z2luUHJvcHMiLCAiYW5pbWF0ZUZpbGwiLCAiZm9sbG93Q3Vyc29yIiwgImlubGluZVBvc2l0aW9uaW5nIiwgInN0aWNreSIsICJyZW5kZXJQcm9wcyIsICJhbGxvd0hUTUwiLCAiYW5pbWF0aW9uIiwgImNvbnRlbnQiLCAiaW5lcnRpYSIsICJtYXhXaWR0aCIsICJyb2xlIiwgInRoZW1lIiwgInpJbmRleCIsICJkZWZhdWx0UHJvcHMiLCAiYXBwZW5kVG8iLCAiYXJpYSIsICJleHBhbmRlZCIsICJkZWxheSIsICJkdXJhdGlvbiIsICJnZXRSZWZlcmVuY2VDbGllbnRSZWN0IiwgImhpZGVPbkNsaWNrIiwgImlnbm9yZUF0dHJpYnV0ZXMiLCAiaW50ZXJhY3RpdmUiLCAiaW50ZXJhY3RpdmVEZWJvdW5jZSIsICJtb3ZlVHJhbnNpdGlvbiIsICJvbkFmdGVyVXBkYXRlIiwgIm9uQmVmb3JlVXBkYXRlIiwgIm9uQ3JlYXRlIiwgIm9uRGVzdHJveSIsICJvbkhpZGRlbiIsICJvbkhpZGUiLCAib25Nb3VudCIsICJvblNob3ciLCAib25TaG93biIsICJvblRyaWdnZXIiLCAib25VbnRyaWdnZXIiLCAib25DbGlja091dHNpZGUiLCAicGx1Z2lucyIsICJwb3BwZXJPcHRpb25zIiwgInJlbmRlciIsICJzaG93T25DcmVhdGUiLCAidG91Y2giLCAidHJpZ2dlciIsICJ0cmlnZ2VyVGFyZ2V0IiwgImRlZmF1bHRLZXlzIiwgInNldERlZmF1bHRQcm9wcyIsICJzZXREZWZhdWx0UHJvcHMyIiwgInBhcnRpYWxQcm9wcyIsICJ2YWxpZGF0ZVByb3BzIiwgImdldEV4dGVuZGVkUGFzc2VkUHJvcHMiLCAicGFzc2VkUHJvcHMiLCAicGx1Z2luUHJvcHMyIiwgInBsdWdpbiIsICJfbmFtZSIsICJnZXREYXRhQXR0cmlidXRlUHJvcHMiLCAicHJvcEtleXMiLCAidmFsdWVBc1N0cmluZyIsICJnZXRBdHRyaWJ1dGUiLCAidHJpbSIsICJKU09OIiwgInBhcnNlIiwgImUiLCAiZXZhbHVhdGVQcm9wcyIsICJvdXQiLCAiaW5uZXJIVE1MIiwgImlubmVySFRNTDIiLCAiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCAiY3JlYXRlQXJyb3dFbGVtZW50IiwgImFycm93MiIsICJjbGFzc05hbWUiLCAiYXBwZW5kQ2hpbGQiLCAic2V0Q29udGVudCIsICJ0ZXh0Q29udGVudCIsICJnZXRDaGlsZHJlbiIsICJmaXJzdEVsZW1lbnRDaGlsZCIsICJib3hDaGlsZHJlbiIsICJjaGlsZHJlbiIsICJjbGFzc0xpc3QiLCAiYmFja2Ryb3AiLCAib25VcGRhdGUiLCAicHJldlByb3BzIiwgIm5leHRQcm9wcyIsICJfZ2V0Q2hpbGRyZW4iLCAiYm94MiIsICJjb250ZW50MiIsICJyZW1vdmVDaGlsZCIsICIkJHRpcHB5IiwgImlkQ291bnRlciIsICJtb3VzZU1vdmVMaXN0ZW5lcnMiLCAibW91bnRlZEluc3RhbmNlcyIsICJjcmVhdGVUaXBweSIsICJzaG93VGltZW91dCIsICJoaWRlVGltZW91dCIsICJzY2hlZHVsZUhpZGVBbmltYXRpb25GcmFtZSIsICJpc1Zpc2libGVGcm9tQ2xpY2siLCAiZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd24iLCAiZGlkVG91Y2hNb3ZlIiwgImlnbm9yZU9uRmlyc3RVcGRhdGUiLCAibGFzdFRyaWdnZXJFdmVudCIsICJjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyIiwgImxpc3RlbmVycyIsICJkZWJvdW5jZWRPbk1vdXNlTW92ZSIsICJvbk1vdXNlTW92ZSIsICJjdXJyZW50VGFyZ2V0IiwgImlkIiwgInBvcHBlckluc3RhbmNlIiwgImlzRW5hYmxlZCIsICJpc01vdW50ZWQiLCAiaXNTaG93biIsICJjbGVhckRlbGF5VGltZW91dHMiLCAic2V0UHJvcHMiLCAic2V0Q29udGVudDIiLCAic2hvdyIsICJoaWRlMiIsICJoaWRlV2l0aEludGVyYWN0aXZpdHkiLCAiZW5hYmxlIiwgImRpc2FibGUiLCAidW5tb3VudCIsICJlcnJvcldoZW4iLCAiX3Byb3BzJHJlbmRlciIsICJwbHVnaW5zSG9va3MiLCAiaGFzQXJpYUV4cGFuZGVkIiwgImhhc0F0dHJpYnV0ZSIsICJhZGRMaXN0ZW5lcnMiLCAiaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlIiwgImhhbmRsZVN0eWxlcyIsICJpbnZva2VIb29rIiwgInNjaGVkdWxlU2hvdyIsICJnZXREb2N1bWVudCIsICJnZXROb3JtYWxpemVkVG91Y2hTZXR0aW5ncyIsICJnZXRJc0N1c3RvbVRvdWNoQmVoYXZpb3IiLCAiZ2V0SXNEZWZhdWx0UmVuZGVyRm4iLCAiX2luc3RhbmNlJHByb3BzJHJlbmRlIiwgImdldEN1cnJlbnRUYXJnZXQiLCAiZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4iLCAiZ2V0RGVsYXkiLCAiaXNTaG93IiwgImZyb21IaWRlIiwgInBvaW50ZXJFdmVudHMiLCAiaG9vayIsICJzaG91bGRJbnZva2VQcm9wc0hvb2siLCAicGx1Z2luSG9va3MiLCAiX2luc3RhbmNlJHByb3BzIiwgImhhbmRsZUFyaWFDb250ZW50QXR0cmlidXRlIiwgImF0dHIiLCAiaWQyIiwgIm5vZGVzIiwgImN1cnJlbnRWYWx1ZSIsICJuZXh0VmFsdWUiLCAiY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMiLCAib25Eb2N1bWVudFByZXNzIiwgImFjdHVhbFRhcmdldCIsICJjb21wb3NlZFBhdGgiLCAicmVtb3ZlRG9jdW1lbnRQcmVzcyIsICJvblRvdWNoTW92ZSIsICJvblRvdWNoU3RhcnQiLCAiYWRkRG9jdW1lbnRQcmVzcyIsICJkb2MiLCAib25UcmFuc2l0aW9uZWRPdXQiLCAiY2FsbGJhY2siLCAib25UcmFuc2l0aW9uRW5kIiwgIm9uVHJhbnNpdGlvbmVkSW4iLCAib24iLCAiZXZlbnRUeXBlIiwgImhhbmRsZXIiLCAib25UcmlnZ2VyMiIsICJvbk1vdXNlTGVhdmUiLCAib25CbHVyT3JGb2N1c091dCIsICJyZW1vdmVMaXN0ZW5lcnMiLCAiX2xhc3RUcmlnZ2VyRXZlbnQiLCAic2hvdWxkU2NoZWR1bGVDbGlja0hpZGUiLCAiaXNFdmVudExpc3RlbmVyU3RvcHBlZCIsICJ3YXNGb2N1c2VkIiwgInNjaGVkdWxlSGlkZSIsICJpc0N1cnNvck92ZXJSZWZlcmVuY2VPclBvcHBlciIsICJnZXROZXN0ZWRQb3BwZXJUcmVlIiwgIl9pbnN0YW5jZSRwb3BwZXJJbnN0YSIsICJpbnN0YW5jZTIiLCAic2hvdWxkQmFpbCIsICJyZWxhdGVkVGFyZ2V0IiwgImNyZWF0ZVBvcHBlckluc3RhbmNlIiwgImRlc3Ryb3lQb3BwZXJJbnN0YW5jZSIsICJfaW5zdGFuY2UkcHJvcHMyIiwgImNvbXB1dGVkUmVmZXJlbmNlIiwgInRpcHB5TW9kaWZpZXIiLCAiX2dldERlZmF1bHRUZW1wbGF0ZUNoIiwgIm1vdW50IiwgIndhcm5XaGVuIiwgIm5leHRFbGVtZW50U2libGluZyIsICJfZ2V0Tm9ybWFsaXplZFRvdWNoU2UiLCAidG91Y2hWYWx1ZSIsICJ0b3VjaERlbGF5IiwgInJlcXVlc3RBbmltYXRpb25GcmFtZSIsICJjYW5jZWxBbmltYXRpb25GcmFtZSIsICJjcmVhdGVNZW1vcnlMZWFrV2FybmluZyIsICJuZXN0ZWRQb3BwZXIiLCAiaXNBbHJlYWR5VmlzaWJsZSIsICJpc0Rpc2FibGVkIiwgImlzVG91Y2hBbmRUb3VjaERpc2FibGVkIiwgInZpc2liaWxpdHkiLCAidHJhbnNpdGlvbiIsICJfZ2V0RGVmYXVsdFRlbXBsYXRlQ2gyIiwgIm9uRmlyc3RVcGRhdGUyIiwgIl9pbnN0YW5jZSRwb3BwZXJJbnN0YTIiLCAiX2dldERlZmF1bHRUZW1wbGF0ZUNoMyIsICJfYm94IiwgIl9jb250ZW50IiwgImlzQWxyZWFkeUhpZGRlbiIsICJfZ2V0RGVmYXVsdFRlbXBsYXRlQ2g0IiwgInRhcmdldHMiLCAib3B0aW9uYWxQcm9wcyIsICJ2YWxpZGF0ZVRhcmdldHMiLCAiaXNTaW5nbGVDb250ZW50RWxlbWVudCIsICJpc01vcmVUaGFuT25lUmVmZXJlbmNlRWxlbWVudCIsICJpbnN0YW5jZXMiLCAiYXBwbHlTdHlsZXNNb2RpZmllciIsICJlZmZlY3Q0Il0KfQo=
