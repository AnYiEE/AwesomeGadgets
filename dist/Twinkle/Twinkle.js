/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://git.qiuwen.net.cn/Mirror/xiplus-twinkle}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Twinkle}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
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

// dist/Twinkle/Twinkle.js
require_es_array_push();
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
//! src/Twinkle/modules/twinkle.js
/*! Twinkle.js - twinkle.js */
(function twinkle($, _window) {
  const $body = $("body");
  const Twinkle2 = {};
  (_window = window).Twinkle || (_window.Twinkle = Twinkle2);
  if (!Morebits.userIsInGroup("autoconfirmed") && !Morebits.userIsInGroup("confirmed")) {
    console.warn("[Twinkle]非确认用户或自动确认用户，Twinkle不会运行。");
    return;
  }
  Twinkle2.changeTags = "Twinkle";
  Twinkle2.summaryAd = "（[[H:TW|Twinkle]]）";
  Twinkle2.hatnoteRegex = "(?:Short[ _]description)|(?:Rellink|Hatnote|HAT)|(?:Main|[细細][节節]|Main[ _]articles|主[条條]目|Hurricane[ _]main|[条條]目|主|[頁页]面|主[頁页]面|主[頁页]|主[題题]目|Main[ _]article|AP)|(?:Wrongtitle|Correct[ _]title)|(?:主条目消歧义|主條目消歧義|消歧义链接|消歧義鏈接|消歧義連結|消连|消連|消歧义连结|DisambLink|Noteref|Dablink)|(?:Distinguish|不是|Not|提示|混淆|分別|分别|區別|区别|本条目的主题不是|本條目的主題不是|本条目主题不是|本條目主題不是|条目主题不是|條目主題不是|主题不是|主題不是|Confused|区分|區分|Confusion|Confuse|RedirectNOT|Misspelling)|(?:Distinguish2|SelfDistinguish|Not2|不是2)|(?:For)|(?:Details|Further|See|另见|另見|More|相關條目|相关条目|Detail|见|見|更多资料|更多資料|Further[ _]information|更多资讯|更多資訊|More[ _]information|更多信息)|(?:Selfref)|(?:About|Otheruses4|关于|關於)|(?:Other[ _]uses|Otheruse|条目消歧义|條目消歧義|他用|Otheruses)|(?:Other[ _]uses list|Otheruselist|主條目消歧義列表|主条目消歧义列表|Otheruseslist|Aboutlist|About[ _]list|Otheruses[ _]list)|(?:Redirect|重定向至此|Redirects[ _]here|Redirect[ _]to)|(?:Redirect2|主條目消歧義2|主条目消歧义2|Redir|重定向至此2)|(?:Redirect3)|(?:Redirect4)|(?:Redirect-distinguish)|(?:Redirect-synonym)|(?:Redirect-multi)|(?:See[ _]Wiktionary|Seewikt)|(?:Seealso|参看|參看|See[ _]also|参见|參見|Also)|(?:See[ _]also2|Seealso2|不轉換參見|不转换参见)|(?:Other[ _]places)|(?:Contrast|對比|对比)";
  Twinkle2.initCallbacks = [];
  Twinkle2.addInitCallback = (func, name) => {
    Twinkle2.initCallbacks.push({
      func,
      name
    });
  };
  Twinkle2.defaultConfig = {};
  Twinkle2.defaultConfig = {
    // General
    userTalkPageMode: "tab",
    dialogLargeFont: false,
    disabledModules: Morebits.userIsSysop ? [] : ["block"],
    // default to disable block for non-sysop, if enable manually, they can only use it to tag userpage
    disabledSysopModules: [],
    // ARV
    spiWatchReport: "yes",
    // Block
    defaultToBlock64: false,
    defaultToPartialBlocks: false,
    blankTalkpageOnIndefBlock: false,
    watchBlockNotices: "yes",
    customBlockReasonList: [],
    // Fluff (revert and rollback)
    openTalkPage: [],
    openTalkPageOnAutoRevert: false,
    rollbackInPlace: false,
    markRevertedPagesAsMinor: ["vand"],
    watchRevertedPages: ["norm", "vand", "torev"],
    watchRevertedExpiry: "yes",
    offerReasonOnNormalRevert: true,
    confirmOnFluff: false,
    showRollbackLinks: ["diff", "others"],
    customRevertSummary: [],
    // DI (twinkleimage)
    notifyUserOnDeli: true,
    deliWatchPage: "default",
    deliWatchUser: "default",
    // Protect
    watchRequestedPages: "yes",
    watchPPTaggedPages: "default",
    watchProtectedPages: "default",
    // CSD
    speedySelectionStyle: "buttonClick",
    watchSpeedyPages: ["g1", "g3", "g4", "g7", "g8"],
    watchSpeedyExpiry: "yes",
    markSpeedyPagesAsPatrolled: false,
    watchSpeedyUser: "1 month",
    // these next two should probably be identical by default
    notifyUserOnSpeedyDeletionNomination: ["db", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "a1", "a2", "a3", "r1", "r2", "f1", "f2", "f3", "f4", "f5", "o1", "o2", "o3"],
    warnUserOnSpeedyDelete: ["db", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "a1", "a2", "a3", "r1", "r2", "f1", "f2", "f3", "f4", "f5", "o1", "o2", "o3"],
    promptForSpeedyDeletionSummary: [],
    openUserTalkPageOnSpeedyDelete: [],
    deleteTalkPageOnDelete: true,
    deleteRedirectsOnDelete: true,
    deleteSysopDefaultToDelete: false,
    speedyWindowHeight: 500,
    speedyWindowWidth: 800,
    logSpeedyNominations: true,
    speedyLogPageName: "CSD日志",
    noLogOnSpeedyNomination: ["o1"],
    enlargeG7Input: false,
    // Unlink
    unlinkNamespaces: ["0", "6", "10", "302"],
    // Warn
    defaultWarningGroup: "1",
    combinedSingletMenus: false,
    watchWarnings: "yes",
    oldSelect: false,
    customWarningList: [],
    autoMenuAfterRollback: false,
    // XfD
    logXfdNominations: true,
    xfdLogPageName: "XfD日志",
    noLogOnXfdNomination: [],
    xfdWatchDiscussion: "default",
    xfdWatchPage: "default",
    xfdWatchUser: "default",
    markXfdPagesAsPatrolled: true,
    FwdCsdToXfd: Morebits.userIsSysop,
    afdDefaultCategory: "delete",
    afdFameDefaultReason: "没有足够的可靠来源证明此条目符合[[LIB:收录标准|收录标准]]",
    afdSubstubDefaultReason: "过期小小作品",
    XfdClose: Morebits.userIsSysop ? "all" : "hide",
    // Copyvio
    copyvioWatchPage: "yes",
    copyvioWatchUser: "yes",
    markCopyvioPagesAsPatrolled: true,
    // Hidden preferences
    autolevelStaleDays: 3,
    revertMaxRevisions: 50,
    // intentionally limited
    batchMax: 5e3,
    batchChunks: 50,
    configPage: "Help:Twinkle/参数设置",
    projectNamespaceName: mw.config.get("wgFormattedNamespaces")[4],
    sandboxPage: "LIB:沙盒",
    // Deprecated options, as a fallback for add-on scripts/modules
    summaryAd: "（[[H:TW|Twinkle]]）",
    deletionSummaryAd: "（[[H:TW|Twinkle]]）",
    protectionSummaryAd: "（[[H:TW|Twinkle]]）",
    blockSummaryAd: "（[[H:TW|Twinkle]]）",
    // Tag
    groupByDefault: true,
    watchTaggedPages: "yes",
    watchMergeDiscussions: "yes",
    markTaggedPagesAsMinor: false,
    markTaggedPagesAsPatrolled: true,
    tagArticleSortOrder: "cat",
    customTagList: [],
    customFileTagList: [],
    customRedirectTagList: [],
    // Stub
    watchStubbedPages: false,
    markStubbedPagesAsMinor: false,
    markStubbedPagesAsPatrolled: true,
    stubArticleSortOrder: "cat",
    customStubList: [],
    // Talkback
    markTalkbackAsMinor: true,
    insertTalkbackSignature: true,
    // always sign talkback templates
    talkbackHeading: window.wgULS("回复通告", "回覆通告"),
    mailHeading: window.wgULS("您有新邮件！", "您有新郵件！")
  };
  switch (mw.config.get("skin")) {
    case "vector":
    case "vector-2022":
      Twinkle2.defaultConfig.portletArea = "right-navigation";
      Twinkle2.defaultConfig.portletId = "p-twinkle";
      Twinkle2.defaultConfig.portletName = "TW";
      Twinkle2.defaultConfig.portletType = "menu";
      Twinkle2.defaultConfig.portletNext = "p-search";
      break;
    case "gongbi":
      Twinkle2.defaultConfig.portletArea = $body.find("#page-tools .sidebar-inner").length > 0 ? "#page-tools .sidebar-inner" : "#page-more .sidebar-inner";
      Twinkle2.defaultConfig.portletId = "p-twinkle";
      Twinkle2.defaultConfig.portletName = "Twinkle";
      Twinkle2.defaultConfig.portletType = null;
      Twinkle2.defaultConfig.portletNext = $body.find("#page-tools .sidebar-inner").length > 0 ? "page-more" : null;
      break;
    case "citizen":
      Twinkle2.defaultConfig.portletArea = "#page-actions-more__card";
      Twinkle2.defaultConfig.portletId = "p-twinkle";
      Twinkle2.defaultConfig.portletName = "Twinkle";
      Twinkle2.defaultConfig.portletType = "nav";
      Twinkle2.defaultConfig.portletNext = "p-tb";
      break;
    default:
      Twinkle2.defaultConfig.portletArea = null;
      Twinkle2.defaultConfig.portletId = "p-cactions";
      Twinkle2.defaultConfig.portletName = null;
      Twinkle2.defaultConfig.portletType = null;
      Twinkle2.defaultConfig.portletNext = null;
  }
  Twinkle2.getPref = (name) => {
    if (typeof Twinkle2.prefs === "object" && Twinkle2.prefs[name] !== void 0) {
      return Twinkle2.prefs[name];
    }
    if (typeof window.TwinkleConfig === "object" && window.TwinkleConfig[name] !== void 0) {
      return window.TwinkleConfig[name];
    }
    return Twinkle2.defaultConfig[name];
  };
  Twinkle2.addPortlet = (navigation, id, text, type, nextnodeid) => {
    const root = document.querySelector(/^(?:#|\.)/.test(navigation) ? navigation : "#".concat(navigation));
    if (!root) {
      return null;
    }
    const item = document.querySelector("#".concat(id));
    if (item) {
      if (item.parentNode && item.parentNode === root) {
        return item;
      }
      return null;
    }
    let nextnode;
    if (nextnodeid) {
      nextnode = document.querySelector("#".concat(nextnodeid));
    }
    const skin = mw.config.get("skin");
    if (skin !== "vector" && skin !== "vector-2022" || navigation !== "left-navigation" && navigation !== "right-navigation") {
      type = null;
    }
    let outerNavClass;
    let innerDivClass;
    switch (skin) {
      case "vector":
      case "vector-2022":
        if (navigation !== "portal" && navigation !== "left-navigation" && navigation !== "right-navigation") {
          navigation = "mw-panel";
        }
        outerNavClass = "mw-portlet vector-menu";
        if (navigation === "mw-panel") {
          outerNavClass += " vector-menu-portal";
        } else if (type === "menu") {
          outerNavClass += " vector-menu-dropdown vector-dropdown vector-menu-dropdown-noicon";
        } else {
          outerNavClass += " vector-menu-tabs";
        }
        innerDivClass = "vector-menu-content vector-dropdown-content";
        break;
      case "gongbi":
        outerNavClass = "mw-portlet";
        innerDivClass = "mw-portlet-body";
        break;
      case "citizen":
        outerNavClass = "mw-portlet";
        innerDivClass = "mw-portlet-twinkle";
        break;
      default:
        navigation = "column-one";
        outerNavClass = "portlet";
        break;
    }
    let outerNav;
    let heading;
    if (skin === "vector-2022") {
      outerNav = document.createElement("div");
      heading = document.createElement("label");
    } else {
      outerNav = document.createElement("nav");
      heading = document.createElement("h3");
    }
    outerNav.setAttribute("aria-labelledby", "".concat(id, "-label"));
    outerNav.className = "".concat(outerNavClass, " emptyPortlet");
    outerNav.id = id;
    if (nextnode && nextnode.parentNode === root) {
      root.insertBefore(outerNav, nextnode);
    } else {
      root.appendChild(outerNav);
    }
    heading.id = "".concat(id, "-label");
    const ul = document.createElement("ul");
    if (skin === "vector" || skin === "vector-2022") {
      heading.setAttribute("for", "".concat(id, "-dropdown-checkbox"));
      ul.className = "vector-menu-content-list";
      heading.className = "vector-menu-heading vector-dropdown-label";
      if (outerNavClass.includes("vector-menu-dropdown")) {
        const chkbox = document.createElement("input");
        chkbox.id = "".concat(id, "-dropdown-checkbox");
        chkbox.className = "vector-menu-checkbox vector-dropdown-checkbox";
        chkbox.setAttribute("type", "checkbox");
        chkbox.setAttribute("aria-labelledby", "".concat(id, "-label"));
        outerNav.appendChild(chkbox);
        const span = document.createElement("span");
        span.appendChild(document.createTextNode(text));
        heading.appendChild(span);
        const a = document.createElement("a");
        a.href = "#";
        $(a).on("click", (e) => {
          e.preventDefault();
        });
        heading.appendChild(a);
      }
    } else {
      heading.appendChild(document.createTextNode(text));
    }
    outerNav.appendChild(heading);
    if (innerDivClass) {
      const innerDiv = document.createElement("div");
      innerDiv.className = innerDivClass;
      innerDiv.appendChild(ul);
      outerNav.appendChild(innerDiv);
    } else {
      outerNav.appendChild(ul);
    }
    return outerNav;
  };
  Twinkle2.addPortletLink = (task, text, id, tooltip) => {
    if (Twinkle2.getPref("portletArea") !== null) {
      Twinkle2.addPortlet(Twinkle2.getPref("portletArea"), Twinkle2.getPref("portletId"), Twinkle2.getPref("portletName"), Twinkle2.getPref("portletType"), Twinkle2.getPref("portletNext"));
    }
    const link = mw.util.addPortletLink(Twinkle2.getPref("portletId"), typeof task === "string" ? task : "#", text, id, tooltip);
    $body.find(".client-js .skin-vector #p-cactions").css("margin-right", "initial");
    if (typeof task === "function") {
      $(link).find("a").on("click", (ev) => {
        task();
        ev.preventDefault();
      });
    }
    if ($.collapsibleTabs) {
      $.collapsibleTabs.handleResize();
    }
    return link;
  };
  const scripturl = mw.util.getUrl("User:".concat(mw.config.get("wgUserName"), "/twinkleoptions.js"), {
    action: "raw",
    ctype: "text/javascript",
    happy: "yes"
  });
  Twinkle2.prefs || (Twinkle2.prefs = {});
  mw.loader.getScript(scripturl).fail(() => {
    mw.notify(window.wgULS("未能加载您的Twinkle参数设置", "未能載入您的Twinkle偏好設定"), {
      type: "error",
      tag: "twinkle"
    });
  }).always(() => {
    $(Twinkle2.load);
  });
  Twinkle2.load = () => {
    let activeSpecialPageList = ["Block", "Contributions", "AbuseLog", "Recentchanges", "Recentchangeslinked"];
    if (Morebits.userIsSysop) {
      activeSpecialPageList = [...activeSpecialPageList, "DeletedContributions", "Prefixindex", "BrokenRedirects"];
    }
    if (mw.config.get("wgNamespaceNumber") === -1 && !activeSpecialPageList.includes(mw.config.get("wgCanonicalSpecialPageName"))) {
      return;
    }
    if (window.top !== window.self) {
      return;
    }
    Twinkle2.userAgent = "Twinkle/1.1";
    Morebits.wiki.api.setApiUserAgent(Twinkle2.userAgent);
    Twinkle2.disabledModules = [...Twinkle2.getPref("disabledModules"), ...Twinkle2.getPref("disabledSysopModules")];
    Twinkle2.addInitCallback = (func, name) => {
      if (!name || !Twinkle2.disabledModules.includes(name)) {
        func();
      }
    };
    var _iterator = _createForOfIteratorHelper(Twinkle2.initCallbacks), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const module2 = _step.value;
        Twinkle2.addInitCallback(module2.func, module2.name);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (Twinkle2.getPref("dialogLargeFont")) {
      mw.util.addCSS(".morebits-dialog-content,.morebits-dialog-footerlinks{font-size:100%!important}.morebits-dialog input,.morebits-dialog select,.morebits-dialog-content button{font-size:inherit !important}");
    }
    const isVector = ["vector", "vector-2022"].includes(mw.config.get("skin"));
    if (isVector && Twinkle2.getPref("portletType") === "menu" && $body.find("#p-twinkle").length === 0) {
      $body.find("#p-cactions").css("margin-right", "initial");
    }
  };
  Twinkle2.sortByNamespace = (first, second) => {
    return first.ns - second.ns || (first.title > second.title ? 1 : -1);
  };
  Twinkle2.generateBatchPageLinks = (checkbox) => {
    const $checkbox = $(checkbox);
    const link = Morebits.htmlNode("a", $checkbox.val());
    link.setAttribute("class", "tw-batchpage-link");
    link.setAttribute("href", mw.util.getUrl($checkbox.val()));
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    $checkbox.next().prepend([link, " "]);
  };
})(jQuery);
//! src/Twinkle/modules/twinklearv.js
/*! Twinkle.js - twinklearv.js */
(function twinklearv($) {
  const $body = $("body");
  Twinkle.arv = () => {
    const username = mw.config.get("wgRelevantUserName");
    if (!username) {
      return;
    }
    const isIP = mw.util.isIPAddress(username);
    const title = isIP ? window.wgULS("报告IP给管理员", "報告IP給管理員") : window.wgULS("报告用户给管理人员", "報告使用者給管理人員");
    Twinkle.addPortletLink(() => {
      Twinkle.arv.callback(username, isIP);
    }, window.wgULS("告状", "告狀"), "tw-arv", title);
  };
  Twinkle.arv.callback = (uid, isIP) => {
    if (uid === mw.config.get("wgUserName")) {
      mw.notify(window.wgULS("你不想报告你自己，对吧？", "你不想報告你自己，對吧？"), {
        type: "warn",
        tag: "twinklearv"
      });
      return;
    }
    const Window = new Morebits.simpleWindow(600, 500);
    Window.setTitle(window.wgULS("报告用户给管理人员", "報告使用者給管理人員"));
    Window.setScriptName("Twinkle");
    Window.addFooterLink(window.wgULS("告状设置", "告狀設定"), "H:TW/PREF#arv");
    Window.addFooterLink(window.wgULS("Twinkle帮助", "Twinkle說明"), "H:TW#告狀");
    const form = new Morebits.quickForm(Twinkle.arv.callback.evaluate);
    const categories = form.append({
      type: "select",
      name: "category",
      label: window.wgULS("选择报告类型：", "選擇報告類別："),
      event: Twinkle.arv.callback.changeCategory
    });
    categories.append({
      type: "option",
      label: window.wgULS("破坏（LIB:VIP）", "破壞（LIB:VIP）"),
      value: "aiv"
    });
    categories.append({
      type: "option",
      label: window.wgULS("编辑争议（LIB:EWIP）", "編輯爭議（LIB:EWIP）"),
      value: "ewip"
    });
    categories.append({
      type: "option",
      label: window.wgULS("用户名（LIB:UAA）", "使用者名稱（LIB:UAA）"),
      value: "username",
      disabled: mw.util.isIPAddress(uid)
    });
    categories.append({
      type: "option",
      label: window.wgULS("傀儡调查（LIB:SPI）", "傀儡調查（LIB:SPI）"),
      value: "spi",
      disabled: mw.util.isIPAddress(uid)
    });
    form.append({
      type: "div",
      label: "",
      style: "color: #f00",
      id: "twinkle-arv-blockwarning"
    });
    form.append({
      type: "field",
      label: "Work area",
      name: "work_area"
    });
    form.append({
      type: "submit",
      label: "提交"
    });
    form.append({
      type: "hidden",
      name: "uid",
      value: uid
    });
    const result = form.render();
    Window.setContent(result);
    Window.display();
    const query = {
      action: "query",
      list: "blocks",
      bkprop: "range|flags",
      format: "json"
    };
    if (isIP) {
      query.bkip = uid;
    } else {
      query.bkusers = uid;
    }
    new Morebits.wiki.api(window.wgULS("检查用户的封禁状态", "檢查使用者的封鎖狀態"), query, (apiobj) => {
      const blocklist = apiobj.getResponse().query.blocks;
      if (blocklist.length) {
        const [block] = blocklist;
        let message = (isIP ? window.wgULS("此IP地址", "此IP位址") : window.wgULS("此账号", "此賬號")) + window.wgULS("已经被", "已經被") + (block.partial ? "部分" : "");
        message += block.rangestart === (block.rangeend ? "段" : "") + window.wgULS("封禁。", "封鎖。");
        if (block.partial) {
          $body.find("#twinkle-arv-blockwarning").css("color", "black");
        }
        $body.find("#twinkle-arv-blockwarning").text(message);
      }
    }).post();
    const evt = document.createEvent("Event");
    evt.initEvent("change", true, true);
    result.category.dispatchEvent(evt);
  };
  Twinkle.arv.lta_list = [{
    value: "",
    label: window.wgULS("请选择", "請選擇")
  }];
  Twinkle.arv.callback.sockmaster_changed = (e) => {
    Twinkle.arv.callback.set_sockmaster(e.target.value);
  };
  Twinkle.arv.callback.set_sockmaster = (sockmaster) => {
    $body.find("code.tw-arv-sockmaster").text("{{".concat("subst:", "Socksuspectnotice|1=".concat(sockmaster, "}}")));
  };
  Twinkle.arv.callback.changeCategory = (e) => {
    const value_ = e.target.value;
    const root_ = e.target.form;
    const [old_area] = Morebits.quickForm.getElements(root_, "work_area");
    let work_area = null;
    const previewlink = document.createElement("a");
    previewlink.style.cursor = "pointer";
    previewlink.textContent = window.wgULS("预览", "預覽");
    $(previewlink).on("click", () => {
      Twinkle.arv.callback.preview(root_);
    });
    switch (value_) {
      case "ewip":
        work_area = new Morebits.quickForm.element({
          type: "field",
          label: window.wgULS("报告编辑争议", "報告編輯爭議"),
          name: "work_area"
        });
        work_area.append({
          type: "dyninput",
          name: "page",
          label: window.wgULS("相关页面：", "相關頁面："),
          sublabel: window.wgULS("页面：", "頁面："),
          tooltip: window.wgULS("如不希望让报告链接到页面，请留空", "如不希望讓報告連結到頁面，請留空"),
          min: 1,
          max: 10
        });
        work_area.append({
          type: "textarea",
          name: "reason",
          label: window.wgULS("评论：", "評論：")
        });
        work_area.append({
          type: "div",
          id: "arvpreview",
          label: [previewlink]
        });
        work_area.append({
          type: "div",
          id: "twinklearv-previewbox",
          style: "display: none"
        });
        work_area = work_area.render();
        old_area.parentNode.replaceChild(work_area, old_area);
        break;
      case "username":
        work_area = new Morebits.quickForm.element({
          type: "field",
          label: window.wgULS("报告不当用户名", "報告不當使用者名稱"),
          name: "work_area"
        });
        work_area.append({
          type: "header",
          label: window.wgULS("不当用户名类型", "不當使用者名稱類別"),
          tooltip: window.wgULS("有兽档案馆不允许使用带有误导性、宣传性、侮辱性或破坏性的用户名。此外，使用域名及邮箱地址的用户名亦被禁止。这些准则俱应应用至用户名及签名。在其他语言中不当的用户名或通过错拼、替代、暗示、拆字或任何间接方法达成的非妥当用户名同样视为违规。", "有獸檔案館不允許使用帶有誤導性、宣傳性、侮辱性或破壞性的使用者名稱。此外，使用域名及電子信箱位址的使用者名稱亦被禁止。這些準則俱應應用至使用者名稱及簽名。在其他語言中不當的使用者名稱或通過錯拼、替代、暗示、拆字或任何間接方法達成的非妥當使用者名稱同樣視為違規。")
        });
        work_area.append({
          type: "checkbox",
          name: "arvtype",
          list: [{
            label: window.wgULS("误导性用户名", "誤導性使用者名稱"),
            value: window.wgULS("误导性", "誤導性"),
            tooltip: window.wgULS("误导性用户名隐含着与贡献者相关或误导他人的事情。例如︰不实观点、暗示账号拥有特定权限或暗示该账号并非由一人拥有而是由一个组群、一个项目或一个集体运作。", "誤導性使用者名稱隱含著與貢獻者相關或誤導他人的事情。例如︰不實觀點、暗示賬號擁有特定權限或暗示該賬號並非由一人擁有而是由一個群組、一個計畫或一個集體運作。")
          }, {
            label: window.wgULS("宣传性用户名", "宣傳性使用者名稱"),
            value: window.wgULS("宣传性", "宣傳性"),
            tooltip: window.wgULS("宣传性用户名会于有兽档案馆上起推销一个组群或一间公司的作用。", "宣傳性使用者名稱會於有獸檔案館上起推銷一個群組或一間公司的作用。")
          }, {
            label: window.wgULS("暗示并非由一人拥有", "暗示並非由一人擁有"),
            value: "shared",
            tooltip: window.wgULS("每个账号只可以代表个人（容许一些例外情况），所有与他人分享账号的行为（包括分享账号密码）均被禁止。", "每個賬號只可以代表個人（容許一些例外情況），所有與他人分享賬號的行為（包括分享賬號密碼）均被禁止。")
          }, {
            label: window.wgULS("侮辱性用户名", "侮辱性使用者名稱"),
            value: "侮辱性",
            tooltip: window.wgULS("侮辱性用户名令协调编辑变得困难，甚至无可能。", "侮辱性使用者名稱令協調編輯變得困難，甚至無可能。")
          }, {
            label: window.wgULS("破坏性用户名", "破壞性使用者名稱"),
            value: window.wgULS("破坏性", "破壞性"),
            tooltip: window.wgULS("破坏性用户名包括人身攻击、伪冒他人或其他一切有着清晰可见的破坏有兽档案馆意图的用户名。", "破壞性使用者名稱包括人身攻擊、偽冒他人或其他一切有著清晰可見的破壞有獸檔案館意圖的使用者名稱。")
          }]
        });
        work_area.append({
          type: "checkbox",
          list: [{
            label: window.wgULS("在页面上隐藏用户名（需监督的用户名请勿于站内报告，勾选此项并不构成能在站内报告的理由）", "在頁面上隱藏使用者名稱（需監督的使用者名稱請勿於站內報告，勾選此項並不構成能在站內報告的理由）"),
            tooltip: window.wgULS("若用户名不当请勾选此项，注意：请考虑私下联系管理员处理。", "若使用者名稱不當請勾選此項，注意：請考慮私下聯絡管理員處理。"),
            name: "hidename",
            value: "hidename"
          }],
          style: "font-weight: bold;"
        });
        work_area.append({
          type: "textarea",
          name: "reason",
          label: window.wgULS("评论：", "評論：")
        });
        work_area.append({
          type: "div",
          id: "arvpreview",
          label: [previewlink]
        });
        work_area.append({
          type: "div",
          id: "twinklearv-previewbox",
          style: "display: none"
        });
        work_area = work_area.render();
        old_area.parentNode.replaceChild(work_area, old_area);
        break;
      case "spi":
        work_area = new Morebits.quickForm.element({
          type: "field",
          label: window.wgULS("发起傀儡调查", "發起傀儡調查"),
          name: "work_area"
        });
        work_area.append({
          type: "input",
          name: "sockmaster",
          tooltip: window.wgULS("主账号的用户名（不含User:前缀）", "主賬號的使用者名稱（不含User:字首）"),
          value: root_.uid.value,
          event: Twinkle.arv.callback.sockmaster_changed
        });
        work_area.append({
          type: "div",
          id: "twinklearv-spinoticebox",
          style: "display: none"
        });
        work_area.append({
          type: "dyninput",
          name: "sockpuppet",
          label: "傀儡",
          sublabel: "傀儡：",
          tooltip: window.wgULS("傀儡的用户名（不含User:前缀）", "傀儡的使用者名稱（不含User:字首）"),
          min: 2,
          max: 9
        });
        work_area.append({
          type: "textarea",
          label: window.wgULS("证据：", "證據："),
          name: "reason",
          tooltip: window.wgULS("输入能够用来体现这些用户可能滥用多重账号的证据，这通常包括茶馆发言、页面历史或其他有关的信息。请避免在此处提供非与傀儡或滥用多重账号相关的其他讨论。", "輸入能夠用來體現這些使用者可能濫用多重賬號的證據，這通常包括茶館發言、頁面歷史或其他有關的資訊。請避免在此處提供非與傀儡或濫用多重賬號相關的其他討論。")
        });
        work_area.append({
          type: "checkbox",
          list: [{
            label: window.wgULS("请求用户查核", "請求使用者查核"),
            name: "checkuser",
            tooltip: window.wgULS("用户查核是一种用于获取傀儡指控相关技术证据的工具，若没有正当理由则不会使用，您必须在证据字段充分解释为什么需要使用该工具。用户查核不会用于公开连接用户账号使用的IP地址。", "使用者查核是一種用於獲取傀儡指控相關技術證據的工具，若沒有正當理由則不會使用，您必須在證據欄位充分解釋為什麼需要使用該工具。使用者查核不會用於公開連接使用者賬號使用的IP位址。")
          }]
        });
        work_area.append({
          type: "div",
          id: "arvpreview",
          label: [previewlink]
        });
        work_area.append({
          type: "div",
          id: "twinklearv-previewbox",
          style: "display: none"
        });
        work_area.append({
          type: "div",
          label: [window.wgULS("请使用常识决定是否以", "請使用常識決定是否以"), $("<code>").addClass("tw-arv-sockmaster").css("margin", "2px;")[0], window.wgULS("通知用户。这不是必须的，对于涉及新用户的报告而言，通知他们能让报告显得更公平，但是许多情况下（如长期破坏者）通知更可能适得其反。", "通知使用者。這不是必須的，對於涉及新使用者的報告而言，通知他們能讓報告顯得更公平，但是許多情況下（如長期破壞者）通知更可能適得其反。")]
        });
        work_area = work_area.render();
        $("input:text[name=sockpuppet]", work_area).first().val(root_.uid.value);
        old_area.parentNode.replaceChild(work_area, old_area);
        root_.spinoticepreviewer = new Morebits.wiki.preview($(work_area).find("#twinklearv-spinoticebox").last()[0]);
        Twinkle.arv.callback.set_sockmaster(root_.uid.value);
        break;
      default:
        work_area = new Morebits.quickForm.element({
          type: "field",
          label: window.wgULS("报告用户破坏", "報告使用者破壞"),
          name: "work_area"
        });
        work_area.append({
          type: "div",
          label: window.wgULS("提报傀儡应优先发送至傀儡调查，除非相关的账号有高频率、涉及多个页面等紧急严重的破坏行为。", "提報傀儡應優先發送至傀儡調查，除非相關的賬號有高頻率、涉及多個頁面等緊急嚴重的破壞行為。")
        });
        work_area.append({
          type: "input",
          name: "page",
          label: window.wgULS("相关页面：", "相關頁面："),
          tooltip: window.wgULS("如不希望让报告链接到页面，请留空", "如不希望讓報告連結到頁面，請留空"),
          value: mw.util.getParamValue("vanarticle") || "",
          event: (event) => {
            const {
              value
            } = event.target;
            const root = event.target.form;
            if (value === "") {
              root.badid.disabled = true;
              root.goodid.disabled = true;
            } else {
              root.badid.disabled = false;
              root.goodid.disabled = root.badid.value === "";
            }
          }
        });
        work_area.append({
          type: "input",
          name: "badid",
          label: window.wgULS("受到破坏的修订版本：", "受到破壞的修訂版本："),
          tooltip: window.wgULS("留空以略过差异", "留空以略過差異"),
          value: mw.util.getParamValue("vanarticlerevid") || "",
          disabled: !mw.util.getParamValue("vanarticle"),
          event: (event) => {
            const {
              value
            } = event.target;
            const root = event.target.form;
            root.goodid.disabled = value === "";
          }
        });
        work_area.append({
          type: "input",
          name: "goodid",
          label: window.wgULS("破坏前的修订版本：", "破壞前的修訂版本："),
          tooltip: window.wgULS("留空以略过差异的较早版本", "留空以略過差異的較早版本"),
          value: mw.util.getParamValue("vanarticlegoodrevid") || "",
          disabled: !mw.util.getParamValue("vanarticle") || mw.util.getParamValue("vanarticlerevid")
        });
        work_area.append({
          type: "checkbox",
          name: "arvtype",
          list: [{
            label: window.wgULS("已发出最后警告", "已發出最後警告"),
            value: "final"
          }, {
            label: window.wgULS("封禁过期后随即破坏", "封鎖過期後隨即破壞"),
            value: "postblock"
          }, {
            label: window.wgULS("显而易见的纯破坏用户", "顯而易見的純破壞使用者"),
            value: "vandalonly",
            disabled: mw.util.isIPAddress(root_.uid.value)
          }, {
            label: window.wgULS("显而易见的spambot或失窃账号", "顯而易見的spambot或失竊賬號"),
            value: "spambot"
          }, {
            label: window.wgULS("仅用来散发广告宣传的用户", "僅用來散發廣告宣傳的使用者"),
            value: "promoonly",
            disabled: mw.util.isIPAddress(root_.uid.value)
          }]
        });
        if (!mw.util.isIPAddress(mw.config.get("wgRelevantUserName"))) {
          work_area.append({
            type: "checkbox",
            list: [{
              label: window.wgULS("在页面上及编辑摘要隐藏用户名", "在頁面上及編輯摘要隱藏使用者名稱"),
              tooltip: window.wgULS("若用户名不当请勾选此项，注意：请考虑私下联系管理员处理。", "若使用者名稱不當請勾選此項，注意：請考慮私下聯絡管理員處理。"),
              name: "hidename",
              value: "hidename"
            }]
          });
        }
        work_area.append({
          type: "textarea",
          name: "reason",
          label: window.wgULS("评论：", "評論：")
        });
        work_area.append({
          type: "div",
          id: "arvpreview",
          label: [previewlink]
        });
        work_area.append({
          type: "div",
          id: "twinklearv-previewbox",
          style: "display: none"
        });
        work_area = work_area.render();
        old_area.parentNode.replaceChild(work_area, old_area);
        break;
    }
    root_.previewer = new Morebits.wiki.preview($(work_area).find("#twinklearv-previewbox").last()[0]);
  };
  Twinkle.arv.callback.preview = (form) => {
    const reason = Twinkle.arv.callback.getReportWikitext(form);
    if (reason === void 0) {
      return;
    }
    const input = Morebits.quickForm.getInputData(form);
    let title;
    switch (input.category) {
      case "vip":
        title = "LIB_talk:报告当前破坏";
        break;
      case "ewip":
        title = "LIB_talk:管理员告示板";
        break;
      case "username":
        title = "LIB_talk:管理员告示板";
        break;
      case "spi":
        title = "LIB_talk:管理员告示板";
        break;
      default:
        title = mw.config.get("wgPageName");
        break;
    }
    form.previewer.beginRender("__NOTOC__".concat(reason[0]), title);
  };
  Twinkle.arv.callback.getReportWikitext = (form) => {
    const input = Morebits.quickForm.getInputData(form);
    let reason = "";
    let comment = "";
    const {
      uid
    } = input;
    const checkTitle = (title, revid) => {
      if (/https?:\/\//.test(title)) {
        mw.notify(window.wgULS("页面名称不能使用网址。", "頁面名稱不能使用網址。"), {
          type: "warn",
          tag: "twinklearv"
        });
        return false;
      }
      let page_;
      try {
        page_ = new mw.Title(title);
      } catch {
        mw.notify("".concat(window.wgULS("“", "「") + title + window.wgULS("”不是一个有效的页面名称，如要使用差异链接请放在“评论”", "」不是一個有效的頁面名稱，如要使用差異連結請放在「評論」") + (revid ? window.wgULS("，或正确输入“修订版本”", "，或正確輸入「修訂版本」") : ""), "。"), {
          type: "warn",
          tag: "twinklearv"
        });
        return false;
      }
      if (page_.namespace === -1) {
        mw.notify("".concat(window.wgULS("“", "「") + title + window.wgULS("”属于特殊页面，如要使用差异链接请放在“评论”", "」屬於特殊頁面，如要使用差異連結請放在「評論」") + (revid ? window.wgULS("，或正确输入“修订版本”", "，或正確輸入「修訂版本」") : ""), "。"), {
          type: "warn",
          tag: "twinklearv"
        });
        return false;
      }
      return page_;
    };
    let page;
    switch (input.category) {
      case "ewip": {
        if (input.reason === "") {
          mw.notify(window.wgULS("您必须指定理由", "您必須指定理由"), {
            type: "warn",
            tag: "twinklearv"
          });
          return;
        }
        reason += "== 编辑战举报（".concat(uid, "） ==\n");
        reason += "* '''{{vandal|".concat(/[=]/.test(uid) ? "1=" : "").concat(uid, "}}'''\n");
        const pages = $("input:text[name=page]", form).map((o, e) => {
          return $(e).val() || null;
        });
        var _iterator2 = _createForOfIteratorHelper(pages), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            const page_ = _step2.value;
            page = checkTitle(page_, false);
            if (!page) {
              return;
            }
            comment += "* {{pagelinks|".concat(page.getPrefixedText().includes("=") ? "1=" : "").concat(page.getPrefixedText(), "}}\n");
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        input.reason = input.reason.replace(/\n\n+/g, "\n");
        input.reason = input.reason.replace(/\r?\n/g, "\n*:");
        comment += "* ".concat(input.reason, "\n");
        comment = comment.trim();
        comment = Morebits.string.appendPunctuation(comment);
        reason += "".concat(comment, "\n* 提报人：~~").concat("~~\n* 处理：");
        break;
      }
      case "username": {
        let types = input.arvtype.map(Morebits.string.toLowerCaseFirstChar);
        const hasShared = types.includes("shared");
        if (hasShared) {
          types.splice(types.indexOf("shared"), 1);
        }
        if (types.includes("侮辱性") && !confirm(window.wgULS("警告：严重的侮辱性用户名和针对特定个人的侮辱性用户名不应在公开页面报告，而是应当私下联系监督员处理。是否继续？", "警告：嚴重的侮辱性使用者名稱和針對特定個人的侮辱性使用者名稱不應在公開頁面報告，而是應當私下聯絡監督員處理。是否繼續？"))) {
          return;
        }
        if (types.length <= 2) {
          types = types.join("和");
        } else {
          types = [types.slice(0, -1).join("、"), types.slice(-1)].join("和");
        }
        comment += "*{{user-uaa|1=".concat(uid);
        if (input.hidename) {
          comment += "|hidename=1";
        }
        comment += "}} &ndash; ";
        if (types.length) {
          comment += types + window.wgULS("用户名", "使用者名稱");
        }
        if (types.length && hasShared) {
          comment += "，";
        }
        if (hasShared) {
          comment += window.wgULS("暗示该账号并非由一人拥有", "暗示該賬號並非由一人擁有");
        }
        if (types.length || hasShared) {
          comment += "。";
        }
        if (input.reason) {
          comment += Morebits.string.toUpperCaseFirstChar(input.reason);
        }
        comment = Morebits.string.appendPunctuation(comment);
        comment += "--~~".concat("~~");
        comment = comment.replace(/\r?\n/g, "\n*:");
        reason = "== 不当用户名报告（".concat(input.hidename ? window.wgULS("已隐藏用户名", "已隱藏使用者名稱") : uid, "） ==\n");
        reason += comment;
        break;
      }
      case "spi": {
        if (!input.reason) {
          mw.notify(window.wgULS("请输入证据。", "請輸入證據。"), {
            type: "warn",
            tag: "twinklearv"
          });
          return;
        }
        const sockpuppets = Morebits.array.uniq([...$("input:text[name=sockpuppet]", form)].map((o) => {
          return $(o).val().trim() || null;
        }));
        if (!sockpuppets[0]) {
          mw.notify(window.wgULS("您没有指定任何傀儡。", "您沒有指定任何傀儡。"), {
            type: "warn",
            tag: "twinklearv"
          });
          return;
        }
        comment += "{{".concat("subst:", "SPI report|");
        if (!sockpuppets.includes(input.sockmaster)) {
          comment += "1={{".concat("subst:", "#ifexist:{{", "subst:", "FULLPAGENAME}}||".concat(input.sockmaster, "}}|"));
        }
        comment += "".concat(sockpuppets.map((sock, index) => {
          return "".concat(index + 2, "=").concat(sock);
        }).join("|"), "\n|evidence=").concat(Morebits.string.appendPunctuation(input.reason), "\n");
        if (input.checkuser) {
          comment += "|checkuser=yes";
        }
        comment += "}}";
        reason = comment;
        break;
      }
      default: {
        if (!input.arvtype.length && input.reason === "") {
          mw.notify(window.wgULS("您必须指定理由", "您必須指定理由"), {
            type: "warn",
            tag: "twinklearv"
          });
          return;
        }
        reason += "== ".concat(input.hidename ? window.wgULS("已隐藏用户名", "已隱藏使用者名稱") : uid, " ==\n");
        reason += "* '''{{vandal|".concat(/[=]/.test(uid) ? "1=" : "").concat(uid);
        if (input.hidename) {
          reason += "|hidename=1";
        }
        reason += "}}'''\n";
        const types = input.arvtype.map((v) => {
          switch (v) {
            case "final":
              return "已发出最后警告";
            case "postblock":
              return "封禁过期后随即破坏";
            case "spambot":
              return "显而易见的spambot或失窃账号";
            case "vandalonly":
              return "显而易见的纯破坏用户";
            case "promoonly":
              return "仅用来散发广告宣传的用户";
            default:
              return "未知理由";
          }
        }).join("，");
        if (input.page !== "") {
          page = checkTitle(input.page, true);
          if (!page) {
            return;
          }
          comment += "* {{pagelinks|".concat(page.getPrefixedText().includes("=") ? "1=" : "").concat(page.getPrefixedText(), "}}");
          if (input.badid) {
            var _input$goodid;
            comment += "（{{diff|".concat(page.getPrefixedText(), "|").concat(input.badid, "|").concat((_input$goodid = input.goodid) !== null && _input$goodid !== void 0 ? _input$goodid : "", "|diff}}）");
          }
          comment += "\n";
        }
        if (types) {
          comment += "* ".concat(types);
        }
        if (input.reason !== "") {
          input.reason = input.reason.replace(/\n\n+/g, "\n");
          input.reason = input.reason.replace(/\r?\n/g, "\n*:");
          comment += (types ? "。" : "* ") + input.reason;
        }
        comment = comment.trim();
        comment = Morebits.string.appendPunctuation(comment);
        reason += "".concat(comment, "\n* 发现人：~~").concat("~~\n* 处理：");
        break;
      }
    }
    return [reason, comment];
  };
  Twinkle.arv.callback.evaluate = (e) => {
    const form = e.target;
    const input = Morebits.quickForm.getInputData(form);
    const {
      uid
    } = input;
    let reason;
    let summary;
    switch (input.category) {
      case "ewip": {
        reason = Twinkle.arv.callback.getReportWikitext(form);
        if (reason === void 0) {
          return;
        }
        summary = "".concat(window.wgULS("报告", "報告"), "[[Special:Contribs/").concat(uid, "|").concat(uid, "]]");
        Morebits.simpleWindow.setButtonsEnabled(false);
        Morebits.status.init(form);
        Morebits.wiki.actionCompleted.redirect = "LIB_talk:管理员告示板";
        Morebits.wiki.actionCompleted.notice = window.wgULS("报告完成", "報告完成");
        const ewipPage = new Morebits.wiki.page("LIB_talk:管理员告示板", window.wgULS("处理EWIP请求", "處理EWIP請求"));
        ewipPage.setFollowRedirect(true);
        ewipPage.load(() => {
          const text = ewipPage.getPageText();
          const $ewipLink = '<a rel="noopener" target="_blank" href="/wiki/LIB:EWIP">LIB:EWIP</a>';
          if (new RegExp("===\\s*\\{\\{\\s*(?:[Vv]andal)\\s*\\|\\s*(?:1=)?\\s*".concat(Morebits.string.escapeRegExp(uid), "\\s*\\}\\}\\s*===")).test(text)) {
            ewipPage.getStatusElement().error(window.wgULS("报告已存在，将不会加入新的", "報告已存在，將不會加入新的"));
            Morebits.status.printUserText(reason[1], window.wgULS("您输入的评论已在下方提供，您可以将其加入到", "您輸入的評論已在下方提供，您可以將其加入到") + $ewipLink + window.wgULS("已存在的小节中：", "已存在的小節中："));
            return;
          }
          ewipPage.setPageSection(0);
          ewipPage.getStatusElement().status(window.wgULS("加入新报告…", "加入新報告…"));
          ewipPage.setEditSummary(summary);
          ewipPage.setChangeTags(Twinkle.changeTags);
          ewipPage.setAppendText("\n".concat(reason[0]));
          ewipPage.append();
        });
        break;
      }
      case "username": {
        reason = Twinkle.arv.callback.getReportWikitext(form);
        Morebits.simpleWindow.setButtonsEnabled(false);
        Morebits.status.init(form);
        Morebits.wiki.actionCompleted.redirect = "LIB_talk:管理员告示板";
        Morebits.wiki.actionCompleted.notice = window.wgULS("报告完成", "報告完成");
        const uaaPage = new Morebits.wiki.page("LIB_talk:管理员告示板", window.wgULS("处理UAA请求", "處理UAA請求"));
        uaaPage.setFollowRedirect(true);
        uaaPage.load(() => {
          const text = uaaPage.getPageText();
          if (new RegExp("\\{\\{\\s*user-uaa\\s*\\|\\s*(1\\s*=\\s*)?".concat(Morebits.string.escapeRegExp(uid), "\\s*(\\||\\})")).test(text)) {
            uaaPage.getStatusElement().error(window.wgULS("用户已被列入。", "使用者已被列入。"));
            const $uaaLink = '<a rel="noopener" target="_blank" href="/wiki/LIB:UAA">LIB:UAA</a>';
            Morebits.status.printUserText(reason[1], window.wgULS("您输入的评论已在下方提供，您可以将其手工加入", "您輸入的評論已在下方提供，您可以將其手工加入") + $uaaLink + window.wgULS("上该用户的报告中：", "上該使用者的報告中："));
            return;
          }
          uaaPage.getStatusElement().status(window.wgULS("加入新报告…", "加入新報告…"));
          uaaPage.setEditSummary(window.wgULS("新提报", "新提報"));
          uaaPage.setChangeTags(Twinkle.changeTags);
          uaaPage.setAppendText("\n\n".concat(reason[0]));
          uaaPage.append();
        });
        break;
      }
      case "spi": {
        reason = Twinkle.arv.callback.getReportWikitext(form);
        Morebits.simpleWindow.setButtonsEnabled(false);
        Morebits.status.init(form);
        const reportpage = "LIB_talk:管理员告示板";
        Morebits.wiki.actionCompleted.redirect = reportpage;
        Morebits.wiki.actionCompleted.notice = window.wgULS("报告完成", "報告完成");
        const spiPage = new Morebits.wiki.page(reportpage, window.wgULS("抓取讨论页面", "抓取討論頁面"));
        spiPage.setFollowRedirect(true);
        spiPage.setEditSummary(window.wgULS("加入新提报", "加入新提報"));
        spiPage.setChangeTags(Twinkle.changeTags);
        spiPage.setAppendText(reason[0]);
        spiPage.setWatchlist(Twinkle.getPref("spiWatchReport"));
        spiPage.append();
        break;
      }
      default: {
        reason = Twinkle.arv.callback.getReportWikitext(form);
        if (reason === void 0) {
          return;
        }
        summary = "".concat(window.wgULS("报告", "報告"), "[[Special:Contribs/").concat(uid, "|").concat(uid, "]]");
        if (input.hidename) {
          summary = window.wgULS("报告一名用户", "報告一名使用者");
        }
        Morebits.simpleWindow.setButtonsEnabled(false);
        Morebits.status.init(form);
        Morebits.wiki.actionCompleted.redirect = "LIB_talk:报告当前破坏";
        Morebits.wiki.actionCompleted.notice = window.wgULS("报告完成", "報告完成");
        const aivPage = new Morebits.wiki.page("LIB_talk:报告当前破坏", window.wgULS("处理VIP请求", "處理VIP請求"));
        aivPage.setFollowRedirect(true);
        aivPage.load(() => {
          const text = aivPage.getPageText();
          const $aivLink = '<a rel="noopener" target="_blank" href="/wiki/LIB:VIP">LIB:VIP</a>';
          if (new RegExp("===\\s*\\{\\{\\s*(?:[Vv]andal)\\s*\\|\\s*(?:1=)?\\s*".concat(Morebits.string.escapeRegExp(uid), "\\s*\\}\\}\\s*===")).test(text)) {
            aivPage.getStatusElement().error(window.wgULS("报告已存在，将不会加入新的", "報告已存在，將不會加入新的"));
            Morebits.status.printUserText(reason[1], window.wgULS("您输入的评论已在下方提供，您可以将其加入到", "您輸入的評論已在下方提供，您可以將其加入到") + $aivLink + window.wgULS("已存在的小节中：", "已存在的小節中："));
            return;
          }
          aivPage.setPageSection(0);
          aivPage.getStatusElement().status(window.wgULS("加入新报告…", "加入新報告…"));
          aivPage.setEditSummary(summary);
          aivPage.setChangeTags(Twinkle.changeTags);
          aivPage.setAppendText("\n".concat(reason[0]));
          aivPage.append();
        });
        break;
      }
    }
  };
  Twinkle.addInitCallback(Twinkle.arv, "arv");
})(jQuery);
//! src/Twinkle/modules/twinklewarn.js
/*! Twinkle.js - twinklewarn.js */
(function twinklewarn($) {
  const $body = $("body");
  const relevantUserName = mw.config.get("wgRelevantUserName");
  Twinkle.warn = () => {
    if (relevantUserName) {
      Twinkle.addPortletLink(Twinkle.warn.callback, "警告", "tw-warn", window.wgULS("警告或提醒用户", "警告或提醒使用者"));
      if (Twinkle.getPref("autoMenuAfterRollback") && mw.config.get("wgNamespaceNumber") === 3 && mw.util.getParamValue("vanarticle") && !mw.util.getParamValue("noautowarn")) {
        Twinkle.warn.callback();
      }
    }
    if (mw.config.get("wgAction") === "rollback") {
      const $vandalTalkLink = $body.find("#mw-rollback-success").find(".mw-usertoollinks a").first();
      if ($vandalTalkLink.length) {
        Twinkle.warn.makeVandalTalkLink($vandalTalkLink, Morebits.pageNameNorm);
        $vandalTalkLink.css("font-weight", "bold");
      }
    }
    if (mw.config.get("wgCanonicalSpecialPageName") === "AbuseLog" && mw.config.get("wgAbuseFilterVariables") !== null) {
      const afTalkLink = $body.find(".mw-usertoollinks-talk").first();
      if (afTalkLink.length) {
        Twinkle.warn.makeVandalTalkLink(afTalkLink, mw.config.get("wgAbuseFilterVariables").page_prefixedtitle);
        afTalkLink.css("font-weight", "bold");
      }
    }
  };
  Twinkle.warn.makeVandalTalkLink = ($vandalTalkLink, pagename) => {
    $vandalTalkLink.wrapInner($("<span>").attr("title", window.wgULS("如果合适，您可以用Twinkle在该用户讨论页上做出警告。", "如果合適，您可以用Twinkle在該使用者討論頁上做出警告。")));
    const extraParam = "vanarticle=".concat(mw.util.rawurlencode(pagename));
    const href = $vandalTalkLink.attr("href");
    if (href.includes("?")) {
      $vandalTalkLink.attr("href", "".concat(href, "&").concat(extraParam));
    } else {
      $vandalTalkLink.attr("href", "".concat(href, "?").concat(extraParam));
    }
  };
  Twinkle.warn.dialog = null;
  Twinkle.warn.callback = () => {
    if (relevantUserName === mw.config.get("wgUserName") && !confirm(window.wgULS("您将要警告自己！您确定要继续吗？", "您將要警告自己！您確定要繼續嗎？"))) {
      return;
    }
    Twinkle.warn.dialog = new Morebits.simpleWindow(600, 440);
    const {
      dialog
    } = Twinkle.warn;
    dialog.setTitle(window.wgULS("警告、提醒用户", "警告、提醒使用者"));
    dialog.setScriptName("Twinkle");
    dialog.addFooterLink(window.wgULS("警告设置", "警告設定"), "H:TW/PREF#warn");
    dialog.addFooterLink(window.wgULS("Twinkle帮助", "Twinkle說明"), "H:TW/DOC#warn");
    const form = new Morebits.quickForm(Twinkle.warn.callback.evaluate);
    const main_select = form.append({
      type: "field",
      label: window.wgULS("选择要发送的警告或提醒类型", "選擇要傳送的警告或提醒類別"),
      tooltip: window.wgULS("首先选择一组，再选择具体的警告模板。", "首先選擇一組，再選擇具體的警告模板。")
    });
    const main_group = main_select.append({
      type: "select",
      name: "main_group",
      tooltip: window.wgULS("您可在Twinkle参数设置中设置默认选择的选项", "您可在Twinkle偏好設定中設定預設選擇的選項"),
      event: Twinkle.warn.callback.change_category
    });
    const defaultGroup = Number.parseInt(Twinkle.getPref("defaultWarningGroup"), 6);
    main_group.append({
      type: "option",
      label: window.wgULS("自动选择层级", "自動選擇層級"),
      value: "autolevel",
      selected: defaultGroup === 7
    });
    main_group.append({
      type: "option",
      label: "1：提醒",
      value: "level1",
      selected: defaultGroup === 1
    });
    main_group.append({
      type: "option",
      label: "2：警告",
      value: "level2",
      selected: defaultGroup === 2
    });
    if (Twinkle.getPref("combinedSingletMenus")) {
      main_group.append({
        type: "option",
        label: window.wgULS("单层级消息", "單層級訊息"),
        value: "singlecombined",
        selected: defaultGroup === 3 || defaultGroup === 4
      });
    } else {
      main_group.append({
        type: "option",
        label: window.wgULS("单层级提醒", "單層級提醒"),
        value: "singlenotice",
        selected: defaultGroup === 3
      });
      main_group.append({
        type: "option",
        label: window.wgULS("单层级警告", "單層級警告"),
        value: "singlewarn",
        selected: defaultGroup === 4
      });
    }
    if (Twinkle.getPref("customWarningList").length) {
      main_group.append({
        type: "option",
        label: window.wgULS("自定义警告", "自訂警告"),
        value: "custom",
        selected: defaultGroup === 5
      });
    }
    main_group.append({
      type: "option",
      label: "所有警告模板",
      value: "kitchensink",
      selected: defaultGroup === 6
    });
    main_select.append({
      type: "select",
      name: "sub_group",
      event: Twinkle.warn.callback.change_subcategory
    });
    form.append({
      type: "input",
      name: "article",
      label: window.wgULS("页面链接", "頁面連結"),
      value: mw.util.getParamValue("vanarticle") || "",
      size: 50,
      tooltip: window.wgULS("给模板中加入一页面链接，可留空。", "給模板中加入一頁面連結，可留空。"),
      placeholder: window.wgULS("仅限一个，勿使用网址、[[ ]]，可使用Special:Diff", "僅限一個，勿使用網址、[[ ]]，可使用Special:Diff")
    });
    form.append({
      type: "div",
      label: "",
      style: "color: #f00",
      id: "twinkle-warn-warning-messages"
    });
    const more = form.append({
      type: "field",
      name: "reasonGroup",
      label: window.wgULS("警告信息", "警告資訊")
    });
    more.append({
      type: "textarea",
      label: window.wgULS("可选信息：", "可選資訊："),
      name: "reason",
      tooltip: window.wgULS("理由或是附加信息", "理由或是附加資訊")
    });
    const previewlink = document.createElement("a");
    $(previewlink).on("click", () => {
      Twinkle.warn.callbacks.preview(result);
    });
    previewlink.style.cursor = "pointer";
    previewlink.textContent = window.wgULS("预览", "預覽");
    more.append({
      type: "div",
      id: "warningpreview",
      label: [previewlink]
    });
    more.append({
      type: "div",
      id: "twinklewarn-previewbox",
      style: "display: none"
    });
    more.append({
      type: "submit",
      label: "提交"
    });
    const result = form.render();
    dialog.setContent(result);
    dialog.display();
    result.main_group.root = result;
    result.previewer = new Morebits.wiki.preview($(result).find("div#twinklewarn-previewbox").last()[0]);
    let message = "";
    let query = {};
    const vanrevid = mw.util.getParamValue("vanarticlerevid");
    if (vanrevid) {
      if (!mw.util.getParamValue("noautowarn") && mw.util.getParamValue("vanarticle")) {
        query = {
          action: "query",
          titles: mw.util.getParamValue("vanarticle"),
          prop: "revisions",
          rvstartid: vanrevid,
          rvlimit: 2,
          rvdir: "newer",
          rvprop: "user"
        };
        new Morebits.wiki.api(window.wgULS("检查您是否成功回退该页面", "檢查您是否成功回退該頁面"), query, (apiobj) => {
          const revertUser = $(apiobj.getResponse()).find("revisions rev")[1].getAttribute("user");
          if (revertUser && revertUser !== mw.config.get("wgUserName")) {
            message += window.wgULS("其他人回退了该页面，并可能已经警告该用户。", "其他人回退了該頁面，並可能已經警告該使用者。");
            $body.find("#twinkle-warn-warning-messages").text("警告：".concat(message));
          }
        }).post();
      }
      const checkStale = (vantimestamp_) => {
        const revDate = new Morebits.date(vantimestamp_);
        if (vantimestamp_ && revDate.isValid() && revDate.add(24, "hours").isBefore(/* @__PURE__ */ new Date())) {
          message += window.wgULS("这笔编辑是在24小时前做出的，现在警告可能已过时。", "這筆編輯是在24小時前做出的，現在警告可能已過時。");
          $body.find("#twinkle-warn-warning-messages").text("警告：".concat(message));
        }
      };
      let vantimestamp = mw.util.getParamValue("vantimestamp");
      if (vantimestamp) {
        checkStale(vantimestamp);
      } else {
        query = {
          action: "query",
          prop: "revisions",
          rvprop: "timestamp",
          revids: vanrevid
        };
        new Morebits.wiki.api(window.wgULS("获取版本时间戳", "取得版本時間戳"), query, (apiobj) => {
          vantimestamp = $(apiobj.getResponse()).find("revisions rev").attr("timestamp");
          checkStale(vantimestamp);
        }).post();
      }
    }
    const init = () => {
      const evt = document.createEvent("Event");
      evt.initEvent("change", true, true);
      result.main_group.dispatchEvent(evt);
    };
    init();
  };
  Twinkle.warn.messages = {
    levels: [{
      category: window.wgULS("不同类型的非建设编辑", "不同類別的非建設編輯"),
      list: {
        "uw-copyright": {
          level1: {
            label: window.wgULS("侵犯著作权", "侵犯版權"),
            summary: window.wgULS("注意：侵犯著作权", "注意：侵犯版權")
          },
          level2: {
            label: window.wgULS("多次侵犯著作权", "多次侵犯版權"),
            summary: window.wgULS("警告：多次侵犯著作权", "警告：多次侵犯版權")
          }
        },
        "uw-crystal": {
          level1: {
            label: window.wgULS("加入臆测或未确认的消息", "加入臆測或未確認的訊息"),
            summary: window.wgULS("注意：加入臆测或未确认的消息", "注意：加入臆測或未確認的訊息")
          },
          level2: {
            label: window.wgULS("多次加入臆测或未确认的消息", "多次加入臆測或未確認的訊息"),
            summary: window.wgULS("警告：多次加入臆测或未确认的消息", "警告：多次加入臆測或未確認的訊息")
          }
        },
        "uw-delete": {
          level1: {
            label: window.wgULS("不恰当地移除页面内容、模板或资料", "不恰當地移除頁面內容、模板或資料"),
            summary: window.wgULS("注意：不恰当地移除页面内容、模板或资料", "注意：不恰當地移除頁面內容、模板或資料")
          },
          level2: {
            label: window.wgULS("不恰当地移除页面内容、模板或资料", "不恰當地移除頁面內容、模板或資料"),
            summary: window.wgULS("警告：不恰当地移除页面内容、模板或资料", "警告：不恰當地移除頁面內容、模板或資料")
          }
        },
        "uw-image": {
          level1: {
            label: window.wgULS("在页面中加入不当图片", "在頁面中加入不當圖片"),
            summary: window.wgULS("注意：在页面中加入不当图片", "注意：在頁面中加入不當圖片")
          },
          level2: {
            label: window.wgULS("在页面中加入不当图片", "在頁面中加入不當圖片"),
            summary: window.wgULS("警告：在页面中加入不当图片", "警告：在頁面中加入不當圖片")
          }
        },
        "uw-newpage": {
          level1: {
            label: window.wgULS("创建不当页面", "建立不當頁面"),
            summary: window.wgULS("注意：创建不当页面", "注意：建立不當頁面")
          },
          level2: {
            label: window.wgULS("创建不当页面", "建立不當頁面"),
            summary: window.wgULS("警告：创建不当页面", "警告：建立不當頁面")
          }
        },
        "uw-nor": {
          level1: {
            label: window.wgULS("在条目中加入原创研究", "在條目中加入原創研究"),
            summary: window.wgULS("注意：在条目中加入原创研究", "注意：在條目中加入原創研究")
          },
          level2: {
            label: window.wgULS("在条目中加入原创研究", "在條目中加入原創研究"),
            summary: window.wgULS("警告：在条目中加入原创研究", "警告：在條目中加入原創研究")
          }
        },
        "uw-opov": {
          level1: {
            label: window.wgULS("违反客观原则", "違反客觀原則"),
            summary: window.wgULS("注意：违反客观原则", "注意：違反客觀原則")
          },
          level2: {
            label: window.wgULS("违反客观原则", "違反客觀原則"),
            summary: window.wgULS("警告：违反客观原则", "警告：違反客觀原則")
          }
        },
        "uw-redirect": {
          level1: {
            label: window.wgULS("创建破坏性的重定向", "建立破壞性的重定向"),
            summary: window.wgULS("注意：创建破坏性的重定向", "注意：建立破壞性的重定向")
          },
          level2: {
            label: window.wgULS("创建恶意重定向", "建立惡意重定向"),
            summary: window.wgULS("警告：创建恶意重定向", "警告：建立惡意重定向")
          }
        },
        "uw-upload": {
          level1: {
            label: window.wgULS("上传不当图像", "上傳不當圖像"),
            summary: window.wgULS("注意：上传不当图像", "注意：上傳不當圖像")
          },
          level2: {
            label: window.wgULS("上传不当图像", "上傳不當圖像"),
            summary: window.wgULS("警告：上传不当图像", "警告：上傳不當圖像")
          }
        },
        "uw-vandalism": {
          level1: {
            label: window.wgULS("明显的破坏", "明顯的破壞"),
            summary: window.wgULS("注意：明显破坏", "注意：明顯破壞")
          },
          level2: {
            label: window.wgULS("明显的破坏", "明顯的破壞"),
            summary: window.wgULS("警告：明显破坏", "警告：明顯破壞")
          }
        },
        "uw-tdel": {
          level1: {
            label: window.wgULS("在问题仍未解决的情况下移除维护性模板", "在問題仍未解決的情況下移除維護性模板"),
            summary: window.wgULS("注意：移除维护性模板", "注意：移除維護性模板")
          },
          level2: {
            label: window.wgULS("在问题仍未解决的情况下移除维护性模板", "在問題仍未解決的情況下移除維護性模板"),
            summary: window.wgULS("警告：移除维护性模板", "警告：移除維護性模板")
          }
        }
      }
    }, {
      category: window.wgULS("增加广告", "增加廣告"),
      list: {
        "uw-spam": {
          level1: {
            label: window.wgULS("增加不合适的外部链接", "增加不合適的外部連結"),
            summary: window.wgULS("注意：增加不合适的外部链接", "注意：增加不合適的外部連結")
          },
          level2: {
            label: window.wgULS("增加垃圾链接", "增加垃圾連結"),
            summary: window.wgULS("警告：增加垃圾链接", "警告：增加垃圾連結")
          }
        },
        "uw-advert": {
          level1: {
            label: window.wgULS("利用有兽档案馆来发布广告或推广", "利用有獸檔案館來發布廣告或推廣"),
            summary: window.wgULS("注意：利用有兽档案馆来发布广告或推广", "注意：利用有獸檔案館來發布廣告或推廣")
          },
          level2: {
            label: window.wgULS("利用有兽档案馆来发布广告或推广", "利用有獸檔案館來發布廣告或推廣"),
            summary: window.wgULS("警告：利用有兽档案馆来发布广告或推广", "警告：利用有獸檔案館來發布廣告或推廣")
          }
        }
      }
    }, {
      category: window.wgULS("加插不实、诽谤文字", "加插不實、誹謗文字"),
      list: {
        "uw-biog": {
          level1: {
            label: window.wgULS("在人物传记中加入没有可靠来源佐证而且可能引发争议的内容", "在人物傳記中加入沒有可靠來源佐證而且可能引發爭議的內容"),
            summary: window.wgULS("注意：在人物传记中加入没有可靠来源佐证而且可能引发争议的内容", "注意：在人物傳記中加入沒有可靠來源佐證而且可能引發爭議的內容")
          },
          level2: {
            label: window.wgULS("在人物传记中加入没有可靠来源佐证而且可能引发争议的内容", "在人物傳記中加入沒有可靠來源佐證而且可能引發爭議的內容"),
            summary: window.wgULS("警告：在人物传记中加入没有可靠来源佐证而且可能引发争议的内容", "警告：在人物傳記中加入沒有可靠來源佐證而且可能引發爭議的內容")
          }
        },
        "uw-error": {
          level1: {
            label: window.wgULS("故意加入不实内容", "故意加入不實內容"),
            summary: window.wgULS("注意：故意加入不实内容", "注意：故意加入不實內容")
          },
          level2: {
            label: window.wgULS("故意加入不实内容", "故意加入不實內容"),
            summary: window.wgULS("警告：故意加入不实内容", "警告：故意加入不實內容")
          }
        },
        "uw-unsourced": {
          level1: {
            label: window.wgULS("加入没有可靠来源佐证的内容", "加入沒有可靠來源佐證的內容"),
            summary: window.wgULS("注意：加入没有可靠来源佐证的内容", "注意：加入沒有可靠來源佐證的內容")
          },
          level2: {
            label: window.wgULS("加入没有可靠来源佐证的内容", "加入沒有可靠來源佐證的內容"),
            summary: window.wgULS("警告：加入没有可靠来源佐证的内容", "警告：加入沒有可靠來源佐證的內容")
          }
        }
      }
    }, {
      category: window.wgULS("翻译品质", "翻譯品質"),
      list: {
        "uw-roughtranslation": {
          level1: {
            label: window.wgULS("您翻译的质量有待改善", "您翻譯的質量有待改善"),
            summary: window.wgULS("注意：您翻译的质量有待改善", "注意：您翻譯的質量有待改善")
          },
          level2: {
            label: window.wgULS("粗劣翻译", "粗劣翻譯"),
            summary: window.wgULS("警告：粗劣翻译", "警告：粗劣翻譯")
          }
        }
      }
    }, {
      category: window.wgULS("非能接受且违反条例的单方面行为或操作", "非能接受且違反條例的單方面行為或操作"),
      list: {
        "uw-afd": {
          level1: {
            label: window.wgULS("移除{{afd}}（页面存废讨论）模板", "移除{{afd}}（頁面存廢討論）模板"),
            summary: window.wgULS("注意：移除{{afd}}（页面存废讨论）模板", "注意：移除{{afd}}（頁面存廢討論）模板")
          },
          level2: {
            label: window.wgULS("移除{{afd}}（页面存废讨论）模板", "移除{{afd}}（頁面存廢討論）模板"),
            summary: window.wgULS("警告：移除{{afd}}（页面存废讨论）模板", "警告：移除{{afd}}（頁面存廢討論）模板")
          }
        },
        "uw-mos": {
          level1: {
            label: window.wgULS("不恰当的条目格式、日期、语言等", "不恰當的條目格式、日期、語言等"),
            summary: window.wgULS("注意：不恰当的条目格式、日期、语言等", "注意：不恰當的條目格式、日期、語言等")
          },
          level2: {
            label: window.wgULS("不恰当的条目格式、日期、语言等", "不恰當的條目格式、日期、語言等"),
            summary: window.wgULS("警告：不恰当的条目格式、日期、语言等", "警告：不恰當的條目格式、日期、語言等")
          }
        },
        "uw-move": {
          level1: {
            label: window.wgULS("无故移动条目/新名称不符合命名规范", "無故移動條目/新名稱不符合命名規範"),
            summary: window.wgULS("注意：不恰当地移动页面", "注意：不恰當地移動頁面")
          },
          level2: {
            label: window.wgULS("把页面移动到不恰当、违反命名常规或违反共识的标题", "把頁面移動到不恰當、違反命名常規或違反共識的標題"),
            summary: window.wgULS("警告：不恰当地移动页面", "警告：不恰當地移動頁面")
          }
        },
        "uw-speedy": {
          level1: {
            label: window.wgULS("移除{{delete}}（快速删除）模板", "移除{{delete}}（快速刪除）模板"),
            summary: window.wgULS("注意：移除{{delete}}（快速删除）模板", "注意：移除{{delete}}（快速刪除）模板")
          },
          level2: {
            label: window.wgULS("移除{{delete}}（快速删除）模板", "移除{{delete}}（快速刪除）模板"),
            summary: window.wgULS("警告：移除{{delete}}（快速删除）模板", "警告：移除{{delete}}（快速刪除）模板")
          }
        },
        "uw-talkpage": {
          level1: {
            label: window.wgULS("违反讨论页规范", "違反討論頁規範"),
            summary: window.wgULS("注意：违反讨论页规范", "注意：違反討論頁規範")
          },
          level2: {
            label: window.wgULS("违反讨论页规范", "違反討論頁規範"),
            summary: window.wgULS("警告：违反讨论页规范", "警告：違反討論頁規範")
          }
        },
        "uw-tpv": {
          level1: {
            label: "修改他人留言",
            summary: "注意：修改他人留言"
          },
          level2: {
            label: "修改他人留言",
            summary: "警告：修改他人留言"
          }
        }
      }
    }, {
      category: window.wgULS("对其他用户和条目的态度", "對其他用戶和條目的態度"),
      list: {
        "uw-illegal": {
          level1: {
            label: window.wgULS("加入不符合中国价值观的内容", "加入不符合中國價值觀的內容"),
            summary: window.wgULS("注意：加入不符合中国价值观的内容", "注意：加入不符合中國價值觀的內容")
          },
          level2: {
            label: window.wgULS("加入不符合中国价值观的内容", "加入不符合中國價值觀的內容"),
            summary: window.wgULS("警告：加入不符合中国价值观的内容", "警告：加入不符合中國價值觀的內容")
          }
        },
        "uw-own": {
          level1: {
            label: window.wgULS("主张条目所有权", "主張條目所有權"),
            summary: window.wgULS("注意：主张条目所有权", "注意：主張條目所有權")
          },
          level2: {
            label: window.wgULS("主张条目的所有权", "主張條目的所有權"),
            summary: window.wgULS("警告：主张条目的所有权", "警告：主張條目的所有權")
          }
        },
        "uw-socialmedia": {
          level1: {
            label: window.wgULS("将有兽档案馆当作社交媒体使用", "將有獸檔案館當作社交媒體使用"),
            summary: window.wgULS("注意：将有兽档案馆当作社交媒体使用", "注意：將有獸檔案館當作社交媒體使用")
          },
          level2: {
            label: window.wgULS("将有兽档案馆当作社交媒体使用", "將有獸檔案館當作社交媒體使用"),
            summary: window.wgULS("警告：将有兽档案馆当作社交媒体使用", "警告：將有獸檔案館當作社交媒體使用")
          }
        }
      }
    }],
    singlenotice: {
      "uw-2redirect": {
        label: window.wgULS("在移动页面后应该修复双重重定向", "在移動頁面後應該修復雙重重定向"),
        summary: window.wgULS("注意：在移动页面后应该修复双重重定向", "注意：在移動頁面後應該修復雙重重定向")
      },
      "uw-aiv": {
        label: window.wgULS("举报事项并不是破坏行为", "舉報事項並不是破壞行为"),
        summary: window.wgULS("注意：不恰当地举报破坏", "注意：不恰當地舉報破壞")
      },
      "uw-articlesig": {
        label: window.wgULS("在条目中签名", "在條目中簽名"),
        summary: window.wgULS("注意：在条目中签名", "注意：在條目中簽名")
      },
      "uw-autobiography": {
        label: window.wgULS("创建自传", "建立自傳"),
        summary: window.wgULS("注意：创建自传", "注意：建立自傳")
      },
      "uw-badcat": {
        label: window.wgULS("加入错误的页面分类", "加入錯誤的頁面分類"),
        summary: window.wgULS("注意：加入错误的页面分类", "注意：加入錯誤的頁面分類")
      },
      "uw-bite": {
        label: window.wgULS("伤害新手", "傷害新手"),
        summary: window.wgULS("注意：伤害新手", "注意：傷害新手")
      },
      "uw-chinese": {
        label: window.wgULS("请使用标准汉语沟通", "請使用標準漢語溝通"),
        summary: window.wgULS("注意：请使用标准汉语沟通", "注意：請使用標準漢語溝通")
      },
      "uw-cpmove": {
        label: window.wgULS("剪贴移动", "剪貼移動"),
        summary: window.wgULS("注意：剪贴移动", "注意：剪貼移動")
      },
      "uw-dab": {
        label: window.wgULS("消歧义页格式错误", "消歧義頁格式錯誤"),
        summary: window.wgULS("注意：消歧义页格式错误", "注意：消歧義頁格式錯誤")
      },
      "uw-newpage-draft": {
        label: window.wgULS("最近创建的页面被移动到草稿", "最近建立的頁面被移動到草稿"),
        summary: window.wgULS("注意：最近创建的页面被移动到草稿", "注意：最近建立的頁面被移動到草稿")
      },
      "uw-selfrevert": {
        label: window.wgULS("感谢您自行回退自己的测试，以后不要再这样做了", "感謝您自行回退自己的測試，以後不要再這樣做了"),
        summary: window.wgULS("注意：回退个人的测试", "注意：回退個人的測試")
      },
      "uw-substub": {
        label: window.wgULS("创建小小作品", "建立小小作品"),
        summary: window.wgULS("警告：创建小小作品", "警告：建立小小作品")
      },
      "uw-talkinarticle": {
        label: window.wgULS("在条目页中留下意见", "在條目頁中留下意見"),
        summary: window.wgULS("注意：在条目页中留下意见", "注意：在條目頁中留下意見")
      },
      "uw-unsigned": {
        label: window.wgULS("没有在讨论页上签名", "沒有在討論頁上簽名"),
        summary: window.wgULS("注意：没有在讨论页上签名", "注意：沒有在討論頁上簽名")
      },
      "uw-wrongcsd": {
        label: window.wgULS("快速删除理由不当", "快速刪除理由不當"),
        summary: window.wgULS("注意：快速删除理由不当", "注意：快速刪除理由不當")
      },
      "uw-wrongsummary": {
        label: window.wgULS("在编辑摘要制造不适当的内容", "在編輯摘要製造不適當的內容"),
        summary: window.wgULS("警告：在编辑摘要制造不适当的内容", "警告：在編輯摘要製造不適當的內容")
      }
    },
    singlewarn: {
      "uw-3rr": {
        label: window.wgULS("用户潜在违反回退不过三原则的可能性", "用戶潛在違反回退不過三原則的可能性"),
        summary: window.wgULS("警告：用户潜在违反回退不过三原则的可能性", "警告：用戶潛在違反回退不過三原則的可能性")
      },
      "uw-attack": {
        label: window.wgULS("人身攻击", "人身攻擊"),
        summary: window.wgULS("警告：人身攻击", "警告：人身攻擊"),
        suppressArticleInSummary: true
      },
      "uw-coi": {
        label: window.wgULS("利益冲突", "利益衝突"),
        summary: window.wgULS("注意：利益冲突", "注意：利益衝突")
      },
      "uw-fakesource": {
        label: window.wgULS("虚构数据源或引文", "虛構資料來源或引文"),
        summary: window.wgULS("警告：虚构数据源或引文", "警告：虛構資料來源或引文")
      },
      "uw-pinfo": {
        label: window.wgULS("张贴他人隐私", "張貼他人隱私"),
        summary: window.wgULS("警告：张贴他人隐私", "警告：張貼他人隱私")
      }
    }
  };
  Twinkle.warn.prev_article = null;
  Twinkle.warn.prev_reason = null;
  Twinkle.warn.talkpageObj = null;
  Twinkle.warn.callback.change_category = function change_category(e) {
    const {
      value
    } = e.target;
    const {
      sub_group
    } = e.target.root;
    sub_group.main_group = value;
    let old_subvalue = sub_group.value;
    let old_subvalue_re;
    if (old_subvalue) {
      if (value === "kitchensink") {
        old_subvalue_re = new RegExp(mw.util.escapeRegExp(old_subvalue));
      } else {
        old_subvalue = old_subvalue.replace(/\d*(im)?$/, "");
        old_subvalue_re = new RegExp("".concat(mw.util.escapeRegExp(old_subvalue), "(\\d*?)$"));
      }
    }
    while (sub_group.hasChildNodes()) {
      sub_group.removeChild(sub_group.firstChild);
    }
    let selected = false;
    const createEntries = (contents, container, wrapInOptgroup, val = value) => {
      const level = val.replace(/^\D+/g, "");
      if (wrapInOptgroup && $.client.profile().platform === "iphone") {
        let wrapperOptgroup = new Morebits.quickForm.element({
          type: "optgroup",
          label: "可用模板"
        });
        wrapperOptgroup = wrapperOptgroup.render();
        container.appendChild(wrapperOptgroup);
        container = wrapperOptgroup;
      }
      for (var _i2 = 0, _Object$entries = Object.entries(contents); _i2 < _Object$entries.length; _i2++) {
        const [itemKey, itemProperties] = _Object$entries[_i2];
        if (!!level && !itemProperties[val]) {
          return;
        }
        const key = typeof itemKey === "string" ? itemKey : itemProperties.value;
        const template = key + level;
        const elem = new Morebits.quickForm.element({
          type: "option",
          label: "{{".concat(template, "}}: ").concat(level ? itemProperties[val].label : itemProperties.label),
          value: template
        });
        if (!selected && old_subvalue && old_subvalue_re.test(template)) {
          elem.data.selected = true;
          selected = true;
        }
        const elemRendered = container.appendChild(elem.render());
        $(elemRendered).data("messageData", itemProperties);
      }
    };
    switch (value) {
      case "singlenotice":
      case "singlewarn":
        createEntries(Twinkle.warn.messages[value], sub_group, true);
        break;
      case "singlecombined": {
        const unSortedSinglets = {
          ...Twinkle.warn.messages.singlenotice,
          ...Twinkle.warn.messages.singlewarn
        };
        const sortedSingletMessages = {};
        var _iterator3 = _createForOfIteratorHelper(Object.keys(unSortedSinglets).sort()), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const key = _step3.value;
            sortedSingletMessages[key] = unSortedSinglets[key];
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        createEntries(sortedSingletMessages, sub_group, true);
        break;
      }
      case "custom":
        createEntries(Twinkle.getPref("customWarningList"), sub_group, true);
        break;
      case "kitchensink":
        for (var _i3 = 0, _arr = ["level1", "level2"]; _i3 < _arr.length; _i3++) {
          const lvl = _arr[_i3];
          var _iterator4 = _createForOfIteratorHelper(Twinkle.warn.messages.levels), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              const levelGroup = _step4.value;
              createEntries(levelGroup.list, sub_group, true, lvl);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
        createEntries(Twinkle.warn.messages.singlenotice, sub_group, true);
        createEntries(Twinkle.warn.messages.singlewarn, sub_group, true);
        createEntries(Twinkle.getPref("customWarningList"), sub_group, true);
        break;
      case "level1":
      case "level2":
        var _iterator5 = _createForOfIteratorHelper(Twinkle.warn.messages.levels), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            const levelGroup = _step5.value;
            let optgroup = new Morebits.quickForm.element({
              type: "optgroup",
              label: levelGroup.category
            });
            optgroup = optgroup.render();
            sub_group.appendChild(optgroup);
            createEntries(levelGroup.list, optgroup, false);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        break;
      case "autolevel": {
        const autolevelProc = () => {
          const wikitext = Twinkle.warn.talkpageObj.getPageText();
          const [latest] = Twinkle.warn.callbacks.dateProcessing(wikitext);
          const params = {
            sub_group: old_subvalue,
            article: e.target.root.article.value
          };
          const lvl = "level".concat(Twinkle.warn.callbacks.autolevelParseWikitext(wikitext, params, latest)[1]);
          var _iterator6 = _createForOfIteratorHelper(Twinkle.warn.messages.levels), _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
              const levelGroup = _step6.value;
              let optgroup = new Morebits.quickForm.element({
                type: "optgroup",
                label: levelGroup.category
              });
              optgroup = optgroup.render();
              sub_group.appendChild(optgroup);
              createEntries(levelGroup.list, optgroup, false, lvl);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
          Twinkle.warn.callback.postCategoryCleanup(e);
        };
        if (Twinkle.warn.talkpageObj) {
          autolevelProc();
        } else {
          const usertalk_page = new Morebits.wiki.page("User_talk:".concat(relevantUserName), window.wgULS("加载上次警告", "載入上次警告"));
          usertalk_page.setFollowRedirect(true, false);
          usertalk_page.load((pageobj) => {
            Twinkle.warn.talkpageObj = pageobj;
            autolevelProc();
          }, () => {
            const $noTalkPageNode = $("<strong>").attr("id", "twinkle-warn-autolevel-message").css("color", "#f00").text(window.wgULS("无法加载用户讨论页，这可能是因为它是跨命名空间重定向，自动选择警告级别将不会运作。", "無法載入使用者討論頁，這可能是因為它是跨命名空間重新導向，自動選擇警告級別將不會運作。"));
            $noTalkPageNode.insertBefore($body.find("#twinkle-warn-warning-messages"));
            e.target.root.previewer.closePreview();
          });
        }
        break;
      }
      default:
        mw.notify(window.wgULS("twinklewarn：未知的警告组", "twinklewarn：未知的警告組"), {
          type: "warn",
          tag: "twinklewarn"
        });
        break;
    }
    if (value !== "autolevel") {
      $body.find("#twinkle-warn-autolevel-message").remove();
      Twinkle.warn.callback.postCategoryCleanup(e);
    }
  };
  Twinkle.warn.callback.postCategoryCleanup = (e) => {
    Morebits.quickForm.setElementTooltipVisibility(e.target.root.article, true);
    Morebits.quickForm.resetElementLabel(e.target.root.article);
    Twinkle.warn.callback.change_subcategory(e);
    if (!Twinkle.getPref("oldSelect")) {
      $body.find("select[name=sub_group]").select2({
        width: "100%",
        matcher: Morebits.select2.matchers.optgroupFull,
        templateResult: Morebits.select2.highlightSearchMatches,
        language: {
          searching: Morebits.select2.queryInterceptor
        }
      }).change(Twinkle.warn.callback.change_subcategory);
      $body.find(".select2-selection").on("keydown", Morebits.select2.autoStart).trigger("focus");
      mw.util.addCSS(
        /* Increase height;
         * Reduce padding;
         * Adjust font size.
         * */
        ".select2-container .select2-dropdown .select2-results>.select2-results__options{max-height:350px}.select2-results .select2-results__group,.select2-results .select2-results__option{padding-top:1px;padding-bottom:1px}.select2-container .select2-dropdown .select2-results,.select2-container .selection .select2-selection__rendered{font-size:13px}"
      );
    }
  };
  Twinkle.warn.callback.change_subcategory = (e) => {
    const main_group = e.target.form.main_group.value;
    const {
      value
    } = e.target.form.sub_group;
    const notLinkedArticle = {
      "uw-bite": window.wgULS("被“咬到”的用户（不含User:） ", "被「咬到」的使用者（不含User:） "),
      "uw-aiv": window.wgULS("可选输入被警告的用户名（不含User:） ", "可選輸入被警告的使用者名稱（不含User:） ")
    };
    if (["singlenotice", "singlewarn", "singlecombined", "kitchensink"].includes(main_group)) {
      if (notLinkedArticle[value]) {
        if (Twinkle.warn.prev_article === null) {
          Twinkle.warn.prev_article = e.target.form.article.value;
        }
        e.target.form.article.notArticle = true;
        e.target.form.article.value = "";
        Morebits.quickForm.setElementTooltipVisibility(e.target.form.article, false);
        Morebits.quickForm.overrideElementLabel(e.target.form.article, notLinkedArticle[value]);
      } else if (e.target.form.article.notArticle) {
        if (Twinkle.warn.prev_article !== null) {
          e.target.form.article.value = Twinkle.warn.prev_article;
          Twinkle.warn.prev_article = null;
        }
        e.target.form.article.notArticle = false;
        Morebits.quickForm.setElementTooltipVisibility(e.target.form.article, true);
        Morebits.quickForm.resetElementLabel(e.target.form.article);
      }
    }
    $body.find("#tw-warn-red-notice").remove();
  };
  Twinkle.warn.callbacks = {
    getWarningWikitext: (templateName, article, reason, isCustom, noSign) => {
      let text = "{{".concat("subst:", templateName);
      if (article) {
        text += "|1=".concat(article);
      }
      if (reason) {
        text += "|2=".concat(reason);
      }
      text += "|subst=".concat("subst:");
      if (!noSign) {
        text += "|sig=~~".concat("~~");
      }
      text += "}}";
      return text;
    },
    showPreview: (form, templatename) => {
      const input = Morebits.quickForm.getInputData(form);
      templatename || (templatename = input.sub_group);
      const linkedarticle = input.article;
      const templatetext = Twinkle.warn.callbacks.getWarningWikitext(templatename, linkedarticle, input.reason, input.main_group === "custom");
      form.previewer.beginRender(templatetext, "User_talk:".concat(relevantUserName));
    },
    // Just a pass-through unless the autolevel option was selected
    preview: (form) => {
      if (form.main_group.value === "autolevel") {
        const usertalk_page = new Morebits.wiki.page("User_talk:".concat(relevantUserName), window.wgULS("加载上次警告", "載入上次警告"));
        usertalk_page.setFollowRedirect(true, false);
        usertalk_page.load((pageobj) => {
          Twinkle.warn.talkpageObj = pageobj;
          const wikitext = pageobj.getPageText();
          const [latest] = Twinkle.warn.callbacks.dateProcessing(wikitext);
          const params = {
            sub_group: form.sub_group.value,
            article: form.article.value,
            messageData: $(form.sub_group).find('option[value="'.concat($(form.sub_group).val(), '"]')).data("messageData")
          };
          const [template] = Twinkle.warn.callbacks.autolevelParseWikitext(wikitext, params, latest);
          Twinkle.warn.callbacks.showPreview(form, template);
          if (form.sub_group.value !== template) {
            const evt = document.createEvent("Event");
            evt.initEvent("change", true, true);
            form.main_group.dispatchEvent(evt);
          }
        });
      } else {
        Twinkle.warn.callbacks.showPreview(form);
      }
    },
    /**
     * Used in the main and autolevel loops to determine when to warn
     * about excessively recent, stale, or identical warnings.
     *
     * @param {string} wikitext  The text of a user's talk page, from getPageText()
     * @returns {Object[]} - Array of objects: latest contains most recent
     * warning and date; history lists all prior warnings
     */
    dateProcessing: (wikitext) => {
      const history_re = /<!--\s?Template:([uU]w-.*?)\s?-->.*?(\d{4})年(\d{1,2})月(\d{1,2})日 \([日一二三四五六]\) (\d{1,2}):(\d{1,2}) \(CST\)/g;
      const history = {};
      const latest = {
        date: new Morebits.date(0),
        type: ""
      };
      let current;
      while ((current = history_re.exec(wikitext)) !== null) {
        const [, template] = current;
        const current_date = new Morebits.date("".concat(current[2], "-").concat(current[3], "-").concat(current[4], " ").concat(current[5], ":").concat(current[6], " (CST)"));
        if (!(template in history) || history[template].isBefore(current_date)) {
          history[template] = current_date;
        }
        if (!latest.date.isAfter(current_date)) {
          latest.date = current_date;
          latest.type = template;
        }
      }
      return [latest, history];
    },
    /**
     * Main loop for deciding what the level should increment to. Most of
     * this is really just error catching and updating the subsequent data.
     * May produce up to two notices in a twinkle-warn-autolevel-messages div
     *
     * @param {string} wikitext  The text of a user's talk page, from getPageText() (required)
     * @param {Object} params  Params object: sub_group is the template (required);
     * article is the user-provided article (form.article) used to link ARV on recent level2 warnings;
     * messageData is only necessary if getting the full template, as it's
     * used to ensure a valid template of that level exists
     * @param {Object} latest  First element of the array returned from
     * dateProcessing. Provided here rather than processed within to avoid
     * repeated call to dateProcessing
     * @param {(Date|Morebits.date)} date  Date from which staleness is determined
     * @param {Morebits.status} statelem  Status element, only used for handling error in final execution
     *
     * @returns {Array} - Array that contains the full template and just the warning level
     */
    autolevelParseWikitext: (wikitext, params, latest, date, statelem) => {
      let level;
      if (/\d?$/.test(latest.type)) {
        level = Number.parseInt(latest.type.replace(/.*(\d)?$/, "$1"), 10);
      } else if (latest.type) {
        level = 1;
      }
      const $autolevelMessage = $("<div>").attr("id", "twinkle-warn-autolevel-message");
      if (Number.isNaN(level)) {
        level = 1;
      } else if (level > 2 || level < 1) {
        const message = window.wgULS("无法解析上次的警告层级，请手动选择一个警告层级。", "無法解析上次的警告層級，請手動選擇一個警告層級。");
        if (statelem) {
          statelem.error(message);
        } else {
          mw.notify(message, {
            type: "warn",
            tag: "twinklewarn"
          });
        }
        return;
      } else {
        date || (date = /* @__PURE__ */ new Date());
        const autoTimeout = new Morebits.date(latest.date.getTime()).add(Number.parseInt(Twinkle.getPref("autolevelStaleDays"), 10), "day");
        if (autoTimeout.isAfter(date)) {
          if (level === 2) {
            level = 2;
            if (!statelem) {
              const $link = $("<a>").attr("href", "#").text(window.wgULS("单击此处打开告状工具", "點擊此處打開告狀工具")).css("font-weight", "bold").on("click", () => {
                Morebits.wiki.actionCompleted.redirect = null;
                Twinkle.warn.dialog.close();
                Twinkle.arv.callback(relevantUserName);
                $body.find("input[name=page]").val(params.article);
                $body.find("input[value=final]").prop("checked", true);
              });
              const statusNode = $("<div>").css("color", "#f00").text(relevantUserName + window.wgULS("最后收到了一个层级2警告（", "最後收到了一個層級2警告（") + latest.type + window.wgULS("），所以将其报告给管理人员会比较好；", "），所以將其報告給管理人員會比較好；"));
              statusNode.append($link[0]);
              $autolevelMessage.append(statusNode);
            }
          } else {
            level += 1;
          }
        } else {
          level = 1;
        }
      }
      $autolevelMessage.prepend($("<div>".concat(window.wgULS("将发送", "將發送"), '<span style="font-weight: bold;">').concat(window.wgULS("层级", "層級")).concat(level, "</span>警告模板。</div>")));
      $body.find("#twinkle-warn-autolevel-message").remove();
      $autolevelMessage.insertAfter($body.find("#twinkle-warn-warning-messages"));
      let template = params.sub_group.replace(/(.*)\d$/, "$1");
      if (params.messageData && !params.messageData["level".concat(level)]) {
        template = "uw-generic";
      }
      template += level;
      return [template, level];
    },
    main: (pageobj) => {
      const text = pageobj.getPageText();
      const statelem = pageobj.getStatusElement();
      const params = pageobj.getCallbackParameters();
      let {
        messageData
      } = params;
      const warningHistory = Twinkle.warn.callbacks.dateProcessing(text);
      const [latest, history] = warningHistory;
      const now = new Morebits.date(pageobj.getLoadTime());
      Twinkle.warn.talkpageObj = pageobj;
      if (params.main_group === "autolevel") {
        const templateAndLevel = Twinkle.warn.callbacks.autolevelParseWikitext(text, params, latest, now, statelem);
        if (params.sub_group !== templateAndLevel[0] && !confirm(window.wgULS("将发送给用户{{", "將發送給使用者{{") + templateAndLevel[0] + window.wgULS("}}模板，好吗？", "}}模板，好嗎？"))) {
          statelem.error(window.wgULS("用户取消", "使用者取消"));
          return;
        }
        [params.sub_group] = templateAndLevel;
        messageData = params.messageData["level".concat(templateAndLevel[1])];
      } else if (params.sub_group in history && new Morebits.date(history[params.sub_group]).add(1, "day").isAfter(now) && !confirm(window.wgULS("近24小时内一个同样的 ", "近24小時內一個同樣的 ") + params.sub_group + window.wgULS(" 模板已被发出。\n是否继续？", " 模板已被發出。\n是否繼續？"))) {
        statelem.error(window.wgULS("用户取消", "使用者取消"));
        return;
      }
      latest.date.add(1, "minute");
      if (latest.date.isAfter(now) && !confirm(window.wgULS("近1分钟内 ", "近1分鐘內 ") + latest.type + window.wgULS(" 模板已被发出。\n是否继续？", " 模板已被發出。\n是否繼續？"))) {
        statelem.error(window.wgULS("用户取消", "使用者取消"));
        return;
      }
      const customProcess = (template) => {
        [template] = template.split("|");
        let prefix;
        switch (template.slice(-1)) {
          case "1":
            prefix = "注意";
            break;
          case "2":
            prefix = "警告";
            break;
          default:
            prefix = "提醒";
            break;
        }
        return "".concat(prefix, "：").concat(Morebits.string.toUpperCaseFirstChar(messageData.label));
      };
      let summary;
      if (params.main_group === "custom") {
        summary = customProcess(params.sub_group);
      } else {
        if (params.main_group === "kitchensink" && !/^D+$/.test(params.sub_group)) {
          let sub = params.sub_group.slice(-1);
          if (sub === "m") {
            sub = params.sub_group.slice(-3);
          }
          if (/\d/.test(sub)) {
            params.main_group = "level".concat(sub);
          }
        }
        summary = messageData.summary || messageData[params.main_group] && messageData[params.main_group].summary;
        if (!summary) {
          summary = customProcess(params.sub_group);
        }
        if (messageData.suppressArticleInSummary !== true && params.article) {
          if (params.sub_group === "uw-aiv") {
            summary += "（".concat(window.wgULS("对于", "對於"), "[[User:").concat(params.article, "]]）");
          } else if (params.sub_group === "uw-bite") {
            summary += "，".concat(window.wgULS("于", "於"), "[[User talk:").concat(params.article, "]]");
          } else {
            summary += "".concat(window.wgULS("，于[[", "，於[[") + params.article, "]]");
          }
        }
      }
      pageobj.setEditSummary(summary);
      pageobj.setChangeTags(Twinkle.changeTags);
      pageobj.setWatchlist(Twinkle.getPref("watchWarnings"));
      const warningText = Twinkle.warn.callbacks.getWarningWikitext(params.sub_group, params.article, params.reason, params.main_group === "custom");
      let sectionExists = false;
      let sectionNumber = 0;
      if (!messageData.heading && text.length) {
        const sections = text.match(/^(==*).+\1/gm);
        if (sections && sections.length !== 0) {
          const dateHeaderRegex = now.monthHeaderRegex();
          sectionNumber = 0;
          sectionExists = sections.reverse().some((sec, idx) => {
            return /^(==)[^=].+\1/m.test(sec) && dateHeaderRegex.test(sec) && typeof (sectionNumber = sections.length - 1 - idx) === "number";
          });
        }
      }
      if (sectionExists) {
        pageobj.setPageSection(sectionNumber + 1);
        pageobj.setAppendText("\n\n".concat(warningText));
        pageobj.append();
      } else {
        if (messageData.heading) {
          pageobj.setNewSectionTitle(messageData.heading);
        } else {
          Morebits.status.info(window.wgULS("信息", "資訊"), window.wgULS("未找到当月的二级标题，将创建新的", "未找到當月的二級標題，將建立新的"));
          pageobj.setNewSectionTitle(now.monthHeader(0));
        }
        pageobj.setNewSectionText(warningText);
        pageobj.newSection();
      }
    }
  };
  Twinkle.warn.callback.evaluate = (e) => {
    const userTalkPage = "User_talk:".concat(relevantUserName);
    const params = Morebits.quickForm.getInputData(e.target);
    if (params.article) {
      if (/https?:\/\//.test(params.article)) {
        mw.notify(window.wgULS("“页面链接”不能使用网址。", "「頁面連結」不能使用網址。"), {
          type: "warn",
          tag: "warn"
        });
        return;
      }
      try {
        const article = new mw.Title(params.article);
        params.article = article.getPrefixedText();
        if (article.getFragment()) {
          params.article += "#".concat(article.getFragment());
        }
      } catch {
        alert(window.wgULS("“页面链接”不合法，仅能输入一个页面名称，勿使用网址、[[ ]]，可使用Special:Diff。", "「頁面連結」不合法，僅能輸入一個頁面名稱，勿使用網址、[[ ]]，可使用Special:Diff。"));
        return;
      }
    }
    const $selectedEl = $(e.target.sub_group).find('option[value="'.concat($(e.target.sub_group).val(), '"]'));
    params.messageData = $selectedEl.data("messageData");
    if (params.messageData === void 0) {
      mw.notify(window.wgULS("请选择警告模板。", "請選擇警告模板。"), {
        type: "warn",
        tag: "warn"
      });
      return;
    }
    Morebits.simpleWindow.setButtonsEnabled(false);
    Morebits.status.init(e.target);
    Morebits.wiki.actionCompleted.redirect = userTalkPage;
    Morebits.wiki.actionCompleted.notice = window.wgULS("警告完成，将在几秒后刷新", "警告完成，將在幾秒後重新整理");
    const ysarchives_page = new Morebits.wiki.page(userTalkPage, window.wgULS("用户讨论页修改", "使用者討論頁修改"));
    ysarchives_page.setCallbackParameters(params);
    ysarchives_page.setFollowRedirect(true, false);
    ysarchives_page.load(Twinkle.warn.callbacks.main);
  };
  Twinkle.addInitCallback(Twinkle.warn, "warn");
})(jQuery);
//! src/Twinkle/modules/twinkleblock.js
var import_ext_gadget = require("ext.gadget.Util");
/*! Twinkle.js - twinkleblock.js */
(function twinkleblock($) {
  const $body = $("body");
  const api = (0, import_ext_gadget.initMwApi)("morebits.js; Twinkle/1.1");
  let relevantUserName;
  let blockedUserName;
  const menuFormattedNamespaces = {
    ...mw.config.get("wgFormattedNamespaces")
  };
  menuFormattedNamespaces[0] = window.wgULS("（条目）", "（條目）");
  const blockActionText = {
    block: window.wgULS("封禁", "封鎖"),
    reblock: window.wgULS("重新封禁", "重新封鎖"),
    unblock: window.wgULS("解除封禁", "解除封鎖")
  };
  Twinkle.block = () => {
    relevantUserName = mw.config.get("wgRelevantUserName");
    if ((Morebits.userIsSysop || !mw.util.isIPAddress(relevantUserName, true)) && relevantUserName && (!Morebits.ip.isRange(relevantUserName) || Morebits.ip.validCIDR(relevantUserName))) {
      Twinkle.addPortletLink(Twinkle.block.callback, window.wgULS("封禁", "封鎖"), "tw-block", window.wgULS("封禁相关用户", "封鎖相關使用者"));
    }
  };
  Twinkle.block.callback = () => {
    if (relevantUserName === mw.config.get("wgUserName") && !confirm(window.wgULS("您即将对自己执行封禁相关操作！确认要继续吗？", "您即將對自己執行封鎖相關操作！確認要繼續嗎？"))) {
      return;
    }
    Twinkle.block.currentBlockInfo = void 0;
    Twinkle.block.field_block_options = {};
    Twinkle.block.field_template_options = {};
    const Window = new Morebits.simpleWindow(650, 530);
    Window.setTitle(window.wgULS("封禁或向", "封鎖或向") + relevantUserName + window.wgULS("发出封禁模板", "發出封鎖模板"));
    Window.setScriptName("Twinkle");
    Window.addFooterLink(window.wgULS("封禁条例", "封鎖條例"), "LIB:BLOCK");
    Window.addFooterLink(window.wgULS("封禁设置", "封鎖設定"), "H:TW/PREF#block");
    Window.addFooterLink(window.wgULS("Twinkle帮助", "Twinkle說明"), "H:TW/DOC#block");
    const form = new Morebits.quickForm(Twinkle.block.callback.evaluate);
    const actionfield = form.append({
      type: "field",
      label: window.wgULS("操作类型", "操作類別")
    });
    actionfield.append({
      type: "checkbox",
      name: "actiontype",
      event: Twinkle.block.callback.change_action,
      list: [{
        label: window.wgULS("封禁用户", "封鎖使用者"),
        value: "block",
        tooltip: window.wgULS("用选择的选项全站封禁相关用户，若未勾选部分封禁则为全站封禁。", "用選擇的選項全站封鎖相關使用者，若未勾選部分封鎖則為全站封鎖。"),
        hidden: !Morebits.userIsSysop,
        checked: Morebits.userIsSysop
      }, {
        label: window.wgULS("部分封禁", "部分封鎖"),
        value: "partial",
        tooltip: window.wgULS("启用部分封禁及部分封禁模板。", "啟用部分封鎖及部分封鎖模板。"),
        hidden: !Morebits.userIsSysop,
        checked: Twinkle.getPref("defaultToPartialBlocks")
        // Overridden if already blocked
      }, {
        label: window.wgULS("加入封禁模板到用户讨论页", "加入封鎖模板到使用者討論頁"),
        value: "template",
        tooltip: window.wgULS("若执行封禁的管理员忘记发出封禁模板，或你封禁了用户而没有给其发出模板，则你可以用此来发出合适的模板。勾选部分封禁以使用部分封禁模板。", "若執行封鎖的管理員忘記發出封鎖模板，或你封鎖了使用者而沒有給其發出模板，則你可以用此來發出合適的模板。勾選部分封鎖以使用部分封鎖模板。"),
        // Disallow when viewing the block dialog on an IP range
        hidden: !Morebits.userIsSysop,
        checked: Morebits.userIsSysop && !Morebits.ip.isRange(relevantUserName),
        disabled: Morebits.ip.isRange(relevantUserName)
      }, {
        label: window.wgULS("标记用户页", "標記使用者頁面"),
        value: "tag",
        tooltip: window.wgULS("将用户页替换成相关的标记模板，仅限永久封禁使用。", "將使用者頁面替換成相關的標記模板，僅限永久封鎖使用。"),
        hidden: true,
        checked: !Morebits.userIsSysop
      }, {
        label: window.wgULS("保护用户页", "保護使用者頁面"),
        value: "protect",
        tooltip: window.wgULS("全保护用户页，仅限永久封禁使用。", "全保護使用者頁面，僅限永久封鎖使用。"),
        hidden: true
      }, {
        label: window.wgULS("解除封禁用户", "解除封鎖使用者"),
        value: "unblock",
        tooltip: window.wgULS("解除封禁相关用户。", "解除封鎖相關使用者。"),
        hidden: !Morebits.userIsSysop
      }]
    });
    const sixtyFour = Morebits.ip.get64(mw.config.get("wgRelevantUserName"));
    if (sixtyFour && sixtyFour !== mw.config.get("wgRelevantUserName")) {
      const block64field = form.append({
        type: "field",
        label: window.wgULS("转换为/64段封禁", "轉換為/64段封鎖"),
        name: "field_64"
      });
      block64field.append({
        type: "div",
        style: "margin-bottom: 0.5em",
        label: [wgULS("直接封禁/64段有益无害。", "直接封鎖/64段有益無害。")]
      });
      block64field.append({
        type: "checkbox",
        name: "block64",
        event: Twinkle.block.callback.change_block64,
        list: [{
          checked: Twinkle.getPref("defaultToBlock64"),
          label: window.wgULS("改成封禁/64", "改成封鎖/64"),
          value: "block64",
          tooltip: Morebits.ip.isRange(mw.config.get("wgRelevantUserName")) ? window.wgULS("将不会发送模板通知。", "將不會發送模板通知。") : window.wgULS("任何模板将会发送给原始IP：", "任何模板將會發送給原始IP：") + mw.config.get("wgRelevantUserName")
        }]
      });
    }
    form.append({
      type: "field",
      label: window.wgULS("默认", "預設"),
      name: "field_preset"
    });
    form.append({
      type: "field",
      label: window.wgULS("模板选项", "模板選項"),
      name: "field_template_options"
    });
    form.append({
      type: "field",
      label: window.wgULS("封禁选项", "封鎖選項"),
      name: "field_block_options"
    });
    form.append({
      type: "field",
      label: window.wgULS("标记用户页", "標記使用者頁面"),
      name: "field_tag_options"
    });
    form.append({
      type: "field",
      label: window.wgULS("解除封禁选项", "解除封鎖選項"),
      name: "field_unblock_options"
    });
    form.append({
      type: "submit",
      label: "提交"
    });
    const result = form.render();
    Window.setContent(result);
    Window.display();
    result.root = result;
    Twinkle.block.fetchUserInfo(() => {
      if (Twinkle.block.isRegistered) {
        const $form = $(result);
        Morebits.quickForm.setElementVisibility($form.find("[name=actiontype][value=tag]").parent(), true);
        if (Morebits.userIsSysop) {
          Morebits.quickForm.setElementVisibility($form.find("[name=actiontype][value=protect]").parent(), true);
        }
      }
      if (blockedUserName === relevantUserName) {
        $(result).find("[name=actiontype][value=partial]").prop("checked", Twinkle.block.currentBlockInfo.partial === "");
      }
      Twinkle.block.transformBlockPresets();
      const evt = document.createEvent("Event");
      evt.initEvent("change", true, true);
      if (result.block64 && result.block64.checked) {
        result.block64.dispatchEvent(evt);
      } else {
        result.actiontype[0].dispatchEvent(evt);
      }
    });
  };
  Twinkle.block.fetchedData = {};
  Twinkle.block.processUserInfo = (data, fn) => {
    let [blockinfo] = data.query.blocks;
    const [userinfo] = data.query.users;
    if (data.query.blocks.length > 1 && blockinfo.user !== relevantUserName) {
      [, blockinfo] = data.query.blocks;
    }
    Twinkle.block.fetchedData[userinfo.name] = data;
    Twinkle.block.isRegistered = !!userinfo.userid;
    if (Twinkle.block.isRegistered) {
      Twinkle.block.userIsBot = !!userinfo.groupmemberships && userinfo.groupmemberships.map((e) => {
        return e.group;
      }).includes("bot");
    } else {
      Twinkle.block.userIsBot = false;
    }
    if (blockinfo) {
      blockinfo.disabletalk = blockinfo.allowusertalk === void 0;
      blockinfo.hardblock = blockinfo.anononly === void 0;
    }
    Twinkle.block.currentBlockInfo = blockinfo;
    blockedUserName = Twinkle.block.currentBlockInfo && Twinkle.block.currentBlockInfo.user;
    Twinkle.block.hasBlockLog = !!data.query.logevents.length;
    Twinkle.block.blockLog = Twinkle.block.hasBlockLog && data.query.logevents;
    Twinkle.block.blockLogId = Twinkle.block.hasBlockLog ? data.query.logevents[0].logid : false;
    if (typeof fn === "function") {
      return fn();
    }
  };
  Twinkle.block.fetchUserInfo = (fn) => {
    const query = {
      format: "json",
      action: "query",
      list: "blocks|users|logevents",
      letype: "block",
      lelimit: 2,
      letitle: "User:".concat(relevantUserName),
      bkprop: "expiry|reason|flags|restrictions|range|user",
      ususers: relevantUserName
    };
    if (mw.util.isIPAddress(relevantUserName, true)) {
      query.bkip = relevantUserName;
    } else {
      query.bkusers = relevantUserName;
      query.usprop = "groupmemberships";
    }
    api.get(query).then((data) => {
      Twinkle.block.processUserInfo(data, fn);
    }, (error) => {
      Morebits.status.init($body.find('div[name="currentblock"] span').last()[0]);
      Morebits.status.warn(window.wgULS("抓取用户信息出错", "抓取使用者資訊出錯"), error);
    });
  };
  Twinkle.block.callback.saveFieldset = (fieldset) => {
    Twinkle.block[$(fieldset).prop("name")] = {};
    var _iterator7 = _createForOfIteratorHelper($(fieldset).serializeArray()), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        const el = _step7.value;
        Twinkle.block[$(fieldset).prop("name")][el.name] = el.value;
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  };
  Twinkle.block.callback.change_block64 = (e) => {
    const $form = $(e.target.form);
    const $block64 = $form.find("[name=block64]");
    const priorName = relevantUserName;
    if ($block64.is(":checked")) {
      relevantUserName = Morebits.ip.get64(mw.config.get("wgRelevantUserName"));
    } else {
      relevantUserName = mw.config.get("wgRelevantUserName");
    }
    const originalIsRange = Morebits.ip.isRange(mw.config.get("wgRelevantUserName"));
    $form.find("[name=actiontype][value=template]").prop("disabled", originalIsRange).prop("checked", !originalIsRange);
    const regenerateForm = () => {
      const titleBar = document.querySelector(".ui-dialog-title").firstChild.nextSibling;
      titleBar.nodeValue = titleBar.nodeValue.replace(priorName, relevantUserName);
      $form.find("[name=actiontype][value=partial]").prop("checked", Twinkle.getPref("defaultToPartialBlocks"));
      if (blockedUserName === relevantUserName) {
        $form.find("[name=actiontype][value=partial]").prop("checked", Twinkle.block.currentBlockInfo.partial === "");
      }
      Twinkle.block.callback.change_action(e);
    };
    if (Twinkle.block.fetchedData[relevantUserName]) {
      Twinkle.block.processUserInfo(Twinkle.block.fetchedData[relevantUserName], regenerateForm);
    } else {
      Twinkle.block.fetchUserInfo(regenerateForm);
    }
  };
  Twinkle.block.callback.change_action = (e) => {
    let field_preset;
    let field_template_options;
    let field_block_options;
    let field_tag_options;
    let field_unblock_options;
    const $form = $(e.target.form);
    const $block = $form.find("[name=actiontype][value=block]");
    let blockBox = $block.is(":checked");
    const $template = $form.find("[name=actiontype][value=template]");
    let templateBox = $template.is(":checked");
    const $tag = $form.find("[name=actiontype][value=tag]");
    const tagBox = $tag.is(":checked");
    const $protect = $form.find("[name=actiontype][value=protect]");
    const $partial = $form.find("[name=actiontype][value=partial]");
    const partialBox = $partial.is(":checked");
    const $unblock = $form.find("[name=actiontype][value=unblock]");
    const unblockBox = $unblock.is(":checked");
    let blockGroup = partialBox ? Twinkle.block.blockGroupsPartial : Twinkle.block.blockGroups;
    if (e.target.value === "unblock") {
      if (!Twinkle.block.currentBlockInfo) {
        $unblock.prop("checked", false);
        mw.notify(window.wgULS("用户没有被封禁", "使用者沒有被封鎖"), {
          type: "warn",
          tag: "twinkleblock"
        });
        return;
      }
      $block.prop("checked", false);
      blockBox = false;
      $template.prop("checked", false);
      templateBox = false;
      $tag.prop("checked", false);
      $protect.prop("checked", false);
      $partial.prop("checked", false);
    } else {
      $unblock.prop("checked", false);
    }
    $partial.prop("disabled", !blockBox && !templateBox);
    const prior = {
      label: window.wgULS("当前封禁", "目前封鎖")
    };
    if (blockedUserName === relevantUserName) {
      Twinkle.block.blockPresetsInfo.prior = Twinkle.block.currentBlockInfo;
      prior.list = [{
        label: window.wgULS("当前封禁设置", "目前封鎖設定"),
        value: "prior",
        selected: true
      }];
      if (!blockGroup.some((bg) => {
        return bg.label === prior.label;
      })) {
        blockGroup.push(prior);
      }
      if (partialBox) {
        Twinkle.block.blockPresetsInfo.prior.templateName = Morebits.string.isInfinity(Twinkle.block.currentBlockInfo.expiry) ? "uw-pblockindef" : "uw-pblock";
      } else if (Twinkle.block.isRegistered) {
        Twinkle.block.blockPresetsInfo.prior.templateName = Morebits.string.isInfinity(Twinkle.block.currentBlockInfo.expiry) ? "uw-blockindef" : "uw-block";
      } else {
        Twinkle.block.blockPresetsInfo.prior.templateName = "uw-ablock";
      }
    } else {
      blockGroup = blockGroup.filter((bg) => {
        return bg.label !== prior.label;
      });
    }
    Twinkle.block.callback.saveFieldset($body.find("[name=field_block_options]"));
    Twinkle.block.callback.saveFieldset($body.find("[name=field_template_options]"));
    Twinkle.block.callback.saveFieldset($body.find("[name=field_tag_options]"));
    Twinkle.block.callback.saveFieldset($body.find("[name=field_unblock_options]"));
    if (blockBox) {
      field_preset = new Morebits.quickForm.element({
        type: "field",
        label: window.wgULS("默认", "預設"),
        name: "field_preset"
      });
      field_preset.append({
        type: "select",
        name: "preset",
        label: window.wgULS("选择默认：", "選擇預設："),
        event: Twinkle.block.callback.change_preset,
        list: Twinkle.block.callback.filtered_block_groups(blockGroup)
      });
      field_block_options = new Morebits.quickForm.element({
        type: "field",
        label: window.wgULS("封禁选项", "封鎖選項"),
        name: "field_block_options"
      });
      field_block_options.append({
        type: "div",
        name: "currentblock",
        label: " "
      });
      field_block_options.append({
        type: "div",
        name: "hasblocklog",
        label: " "
      });
      field_block_options.append({
        type: "select",
        name: "expiry_preset",
        label: window.wgULS("过期时间：", "過期時間："),
        event: Twinkle.block.callback.change_expiry,
        list: [{
          label: window.wgULS("自定义", "自訂"),
          value: "custom",
          selected: true
        }, {
          label: window.wgULS("无限期", "無限期"),
          value: "infinity"
        }, {
          label: window.wgULS("3小时", "3小時"),
          value: "3 hours"
        }, {
          label: window.wgULS("12小时", "12小時"),
          value: "12 hours"
        }, {
          label: "1天",
          value: "1 day"
        }, {
          label: window.wgULS("31小时", "31小時"),
          value: "31 hours"
        }, {
          label: "2天",
          value: "2 days"
        }, {
          label: "3天",
          value: "3 days"
        }, {
          label: window.wgULS("1周", "1週"),
          value: "1 week"
        }, {
          label: window.wgULS("2周", "2週"),
          value: "2 weeks"
        }, {
          label: window.wgULS("1个月", "1個月"),
          value: "1 month"
        }, {
          label: window.wgULS("3个月", "3個月"),
          value: "3 months"
        }, {
          label: window.wgULS("6个月", "6個月"),
          value: "6 months"
        }, {
          label: "1年",
          value: "1 year"
        }, {
          label: "2年",
          value: "2 years"
        }, {
          label: "3年",
          value: "3 years"
        }]
      });
      field_block_options.append({
        type: "input",
        name: "expiry",
        label: window.wgULS("自定义过期时间", "自訂過期時間"),
        tooltip: window.wgULS("您可以使用相对时间，如“1 minute”或“19 days”；或绝对时间，“yyyymmddhhmm”（如“200602011405”是2006年2月1日14:05 UTC。）", "您可以使用相對時間，如「1 minute」或「19 days」；或絕對時間，「yyyymmddhhmm」（如「200602011405」是2006年2月1日14:05 UTC。）"),
        value: Twinkle.block.field_block_options.expiry || Twinkle.block.field_template_options.template_expiry
      });
      if (partialBox) {
        field_block_options.append({
          type: "select",
          multiple: true,
          name: "pagerestrictions",
          label: window.wgULS("页面封禁", "頁面封鎖"),
          value: "",
          tooltip: window.wgULS("最多10个页面。", "最多10個頁面。")
        });
        const ns = field_block_options.append({
          type: "select",
          multiple: true,
          name: "namespacerestrictions",
          label: window.wgULS("命名空间封禁", "命名空間封鎖"),
          value: "",
          tooltip: window.wgULS("指定封禁的命名空间。", "指定封鎖的命名空間。")
        });
        for (var _i4 = 0, _Object$entries2 = Object.entries(menuFormattedNamespaces); _i4 < _Object$entries2.length; _i4++) {
          const [number, name] = _Object$entries2[_i4];
          if (number >= 0 && number < 830) {
            ns.append({
              type: "option",
              label: name,
              value: number
            });
          }
        }
      }
      const blockoptions = [{
        checked: Twinkle.block.field_block_options.nocreate,
        label: window.wgULS("禁止创建账号", "禁止建立賬號"),
        name: "nocreate",
        value: "1"
      }, {
        checked: Twinkle.block.field_block_options.noemail,
        label: window.wgULS("电子邮件停用", "電子郵件停用"),
        name: "noemail",
        value: "1"
      }, {
        checked: Twinkle.block.field_block_options.disabletalk,
        label: window.wgULS("不能编辑自己的讨论页", "不能編輯自己的討論頁"),
        name: "disabletalk",
        value: "1",
        tooltip: partialBox ? window.wgULS("若使用部分封禁，不应选择此项，除非您也想要禁止编辑用户讨论页。", "若使用部分封鎖，不應選擇此項，除非您也想要禁止編輯使用者討論頁。") : ""
      }];
      if (Twinkle.block.isRegistered) {
        blockoptions.push({
          checked: Twinkle.block.field_block_options.autoblock,
          label: window.wgULS("自动封禁", "自動封鎖"),
          name: "autoblock",
          value: "1"
        });
      } else {
        blockoptions.push({
          checked: Twinkle.block.field_block_options.hardblock,
          label: window.wgULS("阻止登录用户使用该IP地址编辑", "阻止登入使用者使用該IP位址編輯"),
          name: "hardblock",
          value: "1"
        });
      }
      blockoptions.push({
        checked: Twinkle.block.field_block_options.watchuser,
        label: window.wgULS("监视该用户的用户页和讨论页", "監視該使用者的使用者頁面和討論頁"),
        name: "watchuser",
        value: "1"
      }, {
        checked: true,
        label: window.wgULS("标记当前的破坏中的请求", "標記當前的破壞中的請求"),
        name: "closevip",
        value: "1"
      });
      field_block_options.append({
        type: "checkbox",
        name: "blockoptions",
        list: blockoptions
      });
      field_block_options.append({
        type: "textarea",
        label: window.wgULS("理由（用于封禁日志）：", "理由（用於封鎖日誌）："),
        name: "reason",
        tooltip: window.wgULS("请考虑在默认的消息中加入有用的详细信息。", "請考慮在預設的訊息中加入有用的詳細資訊。"),
        value: Twinkle.block.field_block_options.reason
      });
      field_block_options.append({
        type: "div",
        name: "filerlog_label",
        label: window.wgULS("参见：", "參見："),
        style: "display:inline-block;font-style:normal !important",
        tooltip: window.wgULS("在封禁理由中标清特殊情况以供其他管理员参考", "在封鎖理由中標清特殊情況以供其他管理員參考")
      });
      field_block_options.append({
        type: "checkbox",
        name: "filter_see_also",
        event: Twinkle.block.callback.toggle_see_alsos,
        style: "display:inline-block; margin-right:5px",
        list: [{
          label: window.wgULS("过滤器日志", "過濾器日誌"),
          checked: false,
          value: window.wgULS("过滤器日志", "過濾器日誌")
        }]
      });
      field_block_options.append({
        type: "checkbox",
        name: "deleted_see_also",
        event: Twinkle.block.callback.toggle_see_alsos,
        style: "display:inline-block; margin-right:5px",
        list: [{
          label: window.wgULS("已删除的编辑", "已刪除的編輯"),
          checked: false,
          value: window.wgULS("已删除的编辑", "已刪除的編輯")
        }]
      });
      field_block_options.append({
        type: "checkbox",
        name: "filter_see_also",
        event: Twinkle.block.callback.toggle_see_alsos,
        style: "display:inline-block; margin-right:5px",
        list: [{
          label: window.wgULS("用户讨论页", "使用者討論頁"),
          checked: false,
          value: window.wgULS("用户讨论页", "使用者討論頁")
        }]
      });
      field_block_options.append({
        type: "checkbox",
        name: "filter_see_also",
        event: Twinkle.block.callback.toggle_see_alsos,
        style: "display:inline-block; margin-right:5px",
        list: [{
          label: window.wgULS("过去的封禁记录", "過去的封鎖記錄"),
          checked: false,
          value: window.wgULS("过去的封禁记录", "過去的封鎖記錄")
        }]
      });
      if (blockedUserName === relevantUserName) {
        field_block_options.append({
          type: "hidden",
          name: "reblock",
          value: "1"
        });
      }
    }
    if (templateBox) {
      field_template_options = new Morebits.quickForm.element({
        type: "field",
        label: window.wgULS("模板选项", "模板選項"),
        name: "field_template_options"
      });
      field_template_options.append({
        type: "select",
        name: "template",
        label: window.wgULS("选择讨论页模板：", "選擇討論頁模板："),
        event: Twinkle.block.callback.change_template,
        list: Twinkle.block.callback.filtered_block_groups(blockGroup, true),
        value: Twinkle.block.field_template_options.template
      });
      field_template_options.append({
        type: "input",
        name: "article",
        label: window.wgULS("链接页面", "連結頁面"),
        value: "",
        tooltip: window.wgULS("可以随通知链接页面，例如破坏的目标。没有条目需要链接则请留空。", "可以隨通知連結頁面，例如破壞的目標。沒有條目需要連結則請留空。")
      });
      field_template_options.append({
        type: "input",
        name: "area",
        label: window.wgULS("封禁范围", "封鎖範圍"),
        value: "",
        tooltip: window.wgULS("阻止用户编辑的页面或命名空间的可选说明。", "阻止使用者編輯的頁面或命名空間的可選說明。")
      });
      if (!blockBox) {
        field_template_options.append({
          type: "input",
          name: "template_expiry",
          label: "封禁期限：",
          value: "",
          tooltip: window.wgULS("封禁时长，如24小时、2周、无限期等。", "封鎖時長，如24小時、2週、無限期等。")
        });
      }
      field_template_options.append({
        type: "input",
        name: "block_reason",
        label: window.wgULS("“由于……您已被封禁”", "「由於……您已被封鎖」"),
        tooltip: window.wgULS("可选的理由，用于替换默认理由。只在常规封禁模板中有效。", "可選的理由，用於替換預設理由。只在常規封鎖模板中有效。"),
        value: Twinkle.block.field_template_options.block_reason,
        size: 60
      });
      if (blockBox) {
        field_template_options.append({
          type: "checkbox",
          name: "blank_duration",
          list: [{
            label: window.wgULS("不在模板中包含封禁期限", "不在模板中包含封鎖期限"),
            checked: Twinkle.block.field_template_options.blank_duration,
            tooltip: window.wgULS("模板将会显示“一段时间”而不是具体时长", "模板將會顯示「一段時間」而不是具體時長")
          }]
        });
      } else {
        field_template_options.append({
          type: "checkbox",
          list: [{
            label: window.wgULS("不能编辑自己的讨论页", "不能編輯自己的討論頁"),
            name: "notalk",
            checked: Twinkle.block.field_template_options.notalk,
            tooltip: window.wgULS("用此在封禁模板中指明该用户编辑讨论页的权限已被移除", "用此在封鎖模板中指明該使用者編輯討論頁的權限已被移除")
          }, {
            label: window.wgULS("不能发送电子邮件", "不能傳送電子郵件"),
            name: "noemail_template",
            checked: Twinkle.block.field_template_options.noemail_template,
            tooltip: window.wgULS("用此在封禁模板中指明该用户发送电子邮件的权限已被移除", "用此在封鎖模板中指明該使用者傳送電子郵件的權限已被移除")
          }, {
            label: window.wgULS("不能创建账号", "不能建立賬號"),
            name: "nocreate_template",
            checked: Twinkle.block.field_template_options.nocreate_template,
            tooltip: window.wgULS("用此在封禁模板中指明该用户创建账号的权限已被移除", "用此在封鎖模板中指明該使用者建立賬號的權限已被移除")
          }]
        });
      }
      const $previewlink = $('<a id="twinkleblock-preview-link">'.concat(window.wgULS("预览", "預覽"), "</a>"));
      $previewlink.off("click").on("click", () => {
        Twinkle.block.callback.preview($form[0]);
      });
      $previewlink.css({
        cursor: "pointer"
      });
      field_template_options.append({
        type: "div",
        id: "blockpreview",
        label: [$previewlink[0]]
      });
      field_template_options.append({
        type: "div",
        id: "twinkleblock-previewbox",
        style: "display: none"
      });
    }
    if (tagBox) {
      field_tag_options = new Morebits.quickForm.element({
        type: "field",
        label: window.wgULS("标记用户页", "標記使用者頁面"),
        name: "field_tag_options"
      });
      field_tag_options.append({
        type: "checkbox",
        name: "tag",
        label: window.wgULS("选择用户页模板：", "選擇使用者頁面模板："),
        list: [{
          label: "{{Blocked user}}：".concat(window.wgULS("一般永久封禁", "一般永久封鎖")),
          value: "Blocked user"
        }, {
          label: "{{Sockpuppet}}：".concat(window.wgULS("傀儡账号", "傀儡賬號")),
          value: "Sockpuppet",
          subgroup: [{
            name: "sppUsername",
            type: "input",
            label: window.wgULS("主账号用户名：", "主賬號使用者名稱：")
          }, {
            name: "sppType",
            type: "select",
            label: window.wgULS("状态：", "狀態："),
            list: [{
              type: "option",
              value: "blocked",
              label: "blocked - ".concat(window.wgULS("仅依行为证据认定", "僅依行為證據認定")),
              selected: true
            }, {
              type: "option",
              value: "proven",
              label: "proven - ".concat(window.wgULS("经傀儡调查确认", "經傀儡調查確認"))
            }, {
              type: "option",
              value: "confirmed",
              label: "confirmed - ".concat(window.wgULS("经查核确认", "經查核確認"))
            }]
          }, {
            name: "sppEvidence",
            type: "input",
            label: window.wgULS("根据……确定：", "根據……確定："),
            tooltip: window.wgULS("纯文字或是带[[]]的链接，例如：[[Special:固定链接/xxxxxxxx|用户查核]]", "純文字或是帶[[]]的連結，例如：[[Special:固定链接/xxxxxxxx|用戶查核]]")
          }]
        }, {
          label: "{{Sockpuppeteer|blocked}}：".concat(window.wgULS("傀儡主账号", "傀儡主賬號")),
          value: "Sockpuppeteer",
          subgroup: [{
            type: "checkbox",
            list: [{
              name: "spmChecked",
              value: "spmChecked",
              label: window.wgULS("经用户查核确认", "經使用者查核確認")
            }]
          }, {
            name: "spmEvidence",
            type: "input",
            label: window.wgULS("额外理由：", "額外理由：")
          }]
        }]
      });
    }
    if (unblockBox) {
      field_unblock_options = new Morebits.quickForm.element({
        type: "field",
        label: window.wgULS("解除封禁选项", "解除封鎖選項"),
        name: "field_unblock_options"
      });
      field_unblock_options.append({
        type: "textarea",
        label: window.wgULS("理由（用于封禁日志）：", "理由（用於封鎖日誌）："),
        name: "reason",
        value: Twinkle.block.field_unblock_options.reason
      });
    }
    let oldfield;
    if (field_preset) {
      [oldfield] = $form.find('fieldset[name="field_preset"]');
      oldfield.parentNode.replaceChild(field_preset.render(), oldfield);
    } else {
      $form.find('fieldset[name="field_preset"]').hide();
    }
    if (field_block_options) {
      [oldfield] = $form.find('fieldset[name="field_block_options"]');
      oldfield.parentNode.replaceChild(field_block_options.render(), oldfield);
      $form.find('fieldset[name="field_64"]').show();
      $form.find("[name=pagerestrictions]").select2({
        width: "100%",
        placeholder: window.wgULS("输入要阻止用户编辑的页面", "輸入要阻止使用者編輯的頁面"),
        language: {
          errorLoading: () => {
            return window.wgULS("搜索词汇不完整或无效", "搜尋詞彙不完整或無效");
          }
        },
        maximumSelectionLength: 10,
        minimumInputLength: 1,
        ajax: {
          url: mw.util.wikiScript("api"),
          dataType: "json",
          delay: 100,
          data: (params) => {
            const title = mw.Title.newFromText(params.term);
            if (!title) {
              return;
            }
            return {
              action: "query",
              format: "json",
              list: "allpages",
              apfrom: title.title,
              apnamespace: title.namespace,
              aplimit: "10"
            };
          },
          processResults: (data) => {
            return {
              results: data.query.allpages.map((page) => {
                const title = mw.Title.newFromText(page.title, page.ns).toText();
                return {
                  id: title,
                  text: title
                };
              })
            };
          }
        },
        templateSelection: (choice) => {
          return $("<a>").text(choice.text).attr({
            href: mw.util.getUrl(choice.text),
            target: "_blank",
            rel: "noopener noreferrer"
          });
        }
      });
      $form.find("[name=namespacerestrictions]").select2({
        width: "100%",
        matcher: Morebits.select2.matchers.wordBeginning,
        language: {
          searching: Morebits.select2.queryInterceptor
        },
        templateResult: Morebits.select2.highlightSearchMatches,
        placeholder: window.wgULS("选择要禁止用户编辑的命名空间", "選擇要禁止使用者編輯的命名空間")
      });
      mw.util.addCSS(
        /* Reduce padding;
         * Adjust font size;
         * Remove black border;
         * Make the tiny cross larger
         */
        ".select2-results .select2-results__option{padding-top:1px;padding-bottom:1px}.select2-container .select2-dropdown .select2-results,.select2-container .selection .select2-selection__rendered{font-size:13px}.select2-container--default.select2-container--focus .select2-selection--multiple{border:1px solid #aaa}.select2-selection__choice__remove{font-size:125%}"
      );
    } else {
      $form.find('fieldset[name="field_block_options"]').hide();
      $form.find('fieldset[name="field_64"]').hide();
      $form.find("[name=pagerestrictions]").val(null).trigger("change");
      $form.find("[name=namespacerestrictions]").val(null).trigger("change");
    }
    if (field_template_options) {
      [oldfield] = $form.find('fieldset[name="field_template_options"]');
      oldfield.parentNode.replaceChild(field_template_options.render(), oldfield);
      e.target.form.root.previewer = new Morebits.wiki.preview($(e.target.form.root).find("#twinkleblock-previewbox").last()[0]);
    } else {
      $form.find('fieldset[name="field_template_options"]').hide();
    }
    if (field_tag_options) {
      [oldfield] = $form.find('fieldset[name="field_tag_options"]');
      oldfield.parentNode.replaceChild(field_tag_options.render(), oldfield);
    } else {
      $form.find('fieldset[name="field_tag_options"]').hide();
    }
    if (field_unblock_options) {
      [oldfield] = $form.find('fieldset[name="field_unblock_options"]');
      oldfield.parentNode.replaceChild(field_unblock_options.render(), oldfield);
    } else {
      $form.find('fieldset[name="field_unblock_options"]').hide();
    }
    if (Twinkle.block.currentBlockInfo) {
      const sameUser = blockedUserName === relevantUserName;
      Morebits.status.init($body.find('div[name="currentblock"] span').last()[0]);
      let statusStr = "".concat(relevantUserName, "已被").concat(Twinkle.block.currentBlockInfo.partial === "" ? window.wgULS("部分封禁", "部分封鎖") : window.wgULS("全站封禁", "全站封鎖"));
      if (Twinkle.block.currentBlockInfo.rangestart !== Twinkle.block.currentBlockInfo.rangeend) {
        if (sameUser) {
          statusStr += window.wgULS("（段封禁）", "（段封鎖）");
        } else {
          const $rangeblockloglink = $("<span>").append($('<a rel="noopener" target="_blank" href="'.concat(mw.util.getUrl("Special:Log", {
            action: "view",
            page: blockedUserName,
            type: "block"
          }), '">').concat(Morebits.ip.get64(relevantUserName) === blockedUserName ? "/64" : blockedUserName, "</a>)")));
          statusStr += window.wgULS("（位于", "（位於") + $rangeblockloglink.html() + window.wgULS("段封禁内）", "段封鎖內）");
        }
      }
      if (Twinkle.block.currentBlockInfo.expiry === "infinity") {
        statusStr += window.wgULS("（无限期）", "（無限期）");
      } else if (new Morebits.date(Twinkle.block.currentBlockInfo.expiry).isValid()) {
        statusStr += "".concat(window.wgULS("（终止于", "（終止於") + new Morebits.date(Twinkle.block.currentBlockInfo.expiry).calendar("utc"), "）");
      }
      let infoStr = window.wgULS("此表单将", "此表單將");
      if (sameUser) {
        infoStr += window.wgULS("更改封禁", "變更封鎖");
        if (Twinkle.block.currentBlockInfo.partial === void 0 && partialBox) {
          infoStr += window.wgULS("为部分封禁", "為部分封鎖");
        } else if (Twinkle.block.currentBlockInfo.partial === "" && !partialBox) {
          infoStr += window.wgULS("为全站封禁", "為全站封鎖");
        }
        infoStr += "。";
      } else {
        infoStr += window.wgULS("加上额外的", "加上額外的") + (partialBox ? "部分" : "") + window.wgULS("封禁。", "封鎖。");
      }
      Morebits.status.warn(statusStr, infoStr);
      Twinkle.block.callback.update_form(e, Twinkle.block.currentBlockInfo);
    }
    if (Twinkle.block.hasBlockLog) {
      const blockloginfo = [];
      const $blockloglink = $("<span>").append($('<a rel="noopener" target="_blank" href="'.concat(mw.util.getUrl("Special:Log", {
        action: "view",
        page: relevantUserName,
        type: "block"
      }), '">').concat(window.wgULS("封禁日志", "封鎖日誌"), "</a>)")));
      if (Twinkle.block.currentBlockInfo) {
        blockloginfo.push(window.wgULS("封禁详情", "封鎖詳情"));
      } else {
        const [lastBlockAction] = Twinkle.block.blockLog;
        const blockAction = lastBlockAction.action === "unblock" ? Twinkle.block.blockLog[1] : lastBlockAction;
        blockloginfo.push("此".concat(Morebits.ip.isRange(relevantUserName) ? window.wgULS("IP范围", "IP範圍") : window.wgULS("用户", "使用者"), "曾在"), $("<b>".concat(new Morebits.date(blockAction.timestamp).calendar("utc"), "</b>"))[0], "被".concat(blockAction.user).concat(window.wgULS("封禁", "封鎖")), $("<b>".concat(Morebits.string.formatTime(blockAction.params.duration), "</b>"))[0]);
        if (lastBlockAction.action === "unblock") {
          blockloginfo.push("，".concat(new Morebits.date(lastBlockAction.timestamp).calendar("utc"), "解封"));
        } else {
          blockloginfo.push("，".concat(new Morebits.date(blockAction.params.expiry).calendar("utc")).concat(window.wgULS("过期", "過期")));
        }
      }
      Morebits.status.init($body.find('div[name="hasblocklog"] span').last()[0]);
      Morebits.status.warn(blockloginfo, $blockloglink[0]);
    }
    if (blockBox) {
      Twinkle.block.callback.change_preset(e);
    } else if (templateBox) {
      Twinkle.block.callback.change_template(e);
    }
  };
  Twinkle.block.blockPresetsInfo = {
    // uw-prefixed
    "uw-block": {
      autoblock: true,
      expiry: "1 day",
      forRegisteredOnly: true,
      nocreate: true,
      pageParam: true,
      reasonParam: true,
      summary: window.wgULS("封禁通知", "封鎖通知"),
      suppressArticleInSummary: true
    },
    "uw-blockindef": {
      autoblock: true,
      expiry: "infinity",
      forRegisteredOnly: true,
      nocreate: true,
      pageParam: true,
      reasonParam: true,
      summary: window.wgULS("封禁通知", "封鎖通知"),
      suppressArticleInSummary: true
    },
    "uw-blocknotalk": {
      disabletalk: true,
      pageParam: true,
      reasonParam: true,
      summary: window.wgULS("封禁通知：禁止编辑讨论页", "封鎖通知：禁止編輯討論頁"),
      suppressArticleInSummary: true
    },
    "uw-3block": {
      autoblock: true,
      expiry: "1 day",
      nocreate: true,
      pageParam: true,
      reason: window.wgULS("违反[[LIB:3RR|回退不过三原则]]", "違反[[LIB:3RR|回退不過三原則]]"),
      summary: window.wgULS("封禁通知：违反[[LIB:3RR|回退不过三原则]]", "封鎖通知：違反[[LIB:3RR|回退不過三原則]]")
    },
    "uw-adblock": {
      autoblock: true,
      nocreate: true,
      pageParam: true,
      reason: window.wgULS("散发[[LIB:SOAP|散发广告或宣传]]", "散發[[LIB:SOAP|散發廣告或宣傳]]"),
      summary: window.wgULS("封禁通知：散发[[LIB:SOAP|散发广告或宣传]]", "封鎖通知：散發[[LIB:SOAP|散發廣告或宣傳]]")
    },
    "uw-attackblock": {
      autoblock: true,
      expiry: "1 day",
      nocreate: true,
      reason: window.wgULS("[[LIB:CIV|行为无礼]]或[[LIB:NPA|人身攻击]]", "[[LIB:CIV|行為無禮]]或[[LIB:NPA|人身攻擊]]"),
      summary: window.wgULS("封禁通知：[[LIB:CIV|行为无礼]]或[[LIB:NPA|人身攻击]]", "封鎖通知：[[LIB:CIV|行為無禮]]或[[LIB:NPA|人身攻擊]]")
    },
    "uw-copyrightblock": {
      autoblock: true,
      expiry: "infinity",
      nocreate: true,
      pageParam: true,
      reason: window.wgULS("持续[[LIB:COPYVIO|侵犯著作权]]", "持續[[LIB:COPYVIO|侵犯著作權]]"),
      summary: window.wgULS("封禁通知：持续[[LIB:COPYVIO|侵犯著作权]]", "封鎖通知：持續[[LIB:COPYVIO|侵犯著作權]]"),
      templateName: "uw-blockindef"
    },
    "uw-dblock": {
      autoblock: true,
      nocreate: true,
      pageParam: true,
      reason: window.wgULS("持续[[LIB:VAN|删除内容]]", "持續[[LIB:VAN|刪除內容]]"),
      summary: window.wgULS("封禁通知：持续[[LIB:VAN|删除内容]]", "封鎖通知：持續[[LIB:VAN|刪除內容]]")
    },
    "uw-hblock": {
      autoblock: true,
      nocreate: true,
      pageParam: true,
      reason: window.wgULS("[[LIB:骚扰|骚扰]]其他用户", "[[LIB:騷擾|騷擾]]其他使用者"),
      summary: window.wgULS("封禁通知：[[LIB:骚扰|骚扰]]其他用户", "封鎖通知：[[LIB:騷擾|騷擾]]其他使用者")
    },
    "uw-vblock": {
      autoblock: true,
      expiry: "1 day",
      nocreate: true,
      pageParam: true,
      reason: window.wgULS("[[LIB:VAN|破坏]]", "[[LIB:VAN|破壞]]"),
      summary: window.wgULS("封禁通知：[[LIB:VAN|破坏]]", "封鎖通知：[[LIB:VAN|破壞]]")
    },
    "uw-illegalblock": {
      autoblock: true,
      expiry: "1 day",
      nocreate: true,
      pageParam: true,
      reason: window.wgULS("持续加入不符合中国价值观的非法内容", "持續加入不符合中國價值觀的非法內容"),
      summary: window.wgULS("封禁通知：持续加入不符合中国价值观的非法内容", "封鎖通知：持續加入不符合中國價值觀的非法內容")
    },
    "uw-sockblock": {
      autoblock: true,
      expiry: "1 week",
      forRegisteredOnly: true,
      nocreate: true,
      reason: window.wgULS("滥用[[LIB:SOCK|多个账号]]", "濫用[[LIB:SOCK|多個賬號]]"),
      summary: window.wgULS("封禁通知：滥用[[LIB:SOCK|多个账号]]", "封鎖通知：濫用[[LIB:SOCK|多個賬號]]"),
      templateName: "uw-block"
    },
    // uw-u-prefixed
    "uw-ublock": {
      expiry: "infinity",
      forRegisteredOnly: true,
      reason: "{{uw-ublock}}<!-- ".concat(window.wgULS("不当用户名、软封禁", "不當使用者名稱"), " -->"),
      summary: window.wgULS("封禁通知：您的用户名违反[[LIB:U|用户名条例]]", "封鎖通知：您的使用者名稱違反[[LIB:U|使用者名稱條例]]")
    },
    "uw-ublock-illegal": {
      autoblock: true,
      expiry: "infinity",
      forRegisteredOnly: true,
      nocreate: true,
      reason: "{{uw-ublock-illegal}}<!-- ".concat(window.wgULS("不合规的用户名", "不合規的使用者名稱"), " -->"),
      summary: window.wgULS("封禁通知：您的用户名违反[[LIB:U|用户名条例]]", "封鎖通知：您的使用者名稱違反[[LIB:U|使用者名稱條例]]")
    },
    "uw-ublock-suggestive": {
      autoblock: true,
      expiry: "infinity",
      forRegisteredOnly: true,
      nocreate: true,
      reason: "{{uw-ublock-suggestive}}<!-- ".concat(window.wgULS("误导、混淆性用户名", "誤導、混淆性使用者名稱"), " -->"),
      summary: window.wgULS("封禁通知：您的用户名违反[[LIB:U|用户名条例]]", "封鎖通知：您的使用者名稱違反[[LIB:U|使用者名稱條例]]")
    },
    "uw-ublock-spam": {
      autoblock: true,
      expiry: "infinity",
      forRegisteredOnly: true,
      nocreate: true,
      reason: "{{uw-ublock-spam}}<!-- ".concat(window.wgULS("宣传性用户名或宣传性编辑", "宣傳性使用者名稱或宣傳性編輯"), " -->"),
      summary: window.wgULS("封禁通知：您的用户名违反[[LIB:U|用户名条例]]", "封鎖通知：您的使用者名稱違反[[LIB:U|使用者名稱條例]]")
    },
    // other block templates
    "range block": {
      expiry: "1 week",
      reason: "{{range block}}",
      nocreate: true,
      nonstandard: true,
      forAnonOnly: true,
      sig: "~~".concat("~~")
    },
    "blocked proxy": {
      expiry: "2 years",
      forAnonOnly: true,
      nocreate: true,
      nonstandard: true,
      hardblock: true,
      reason: "{{blocked proxy}}",
      sig: null
    },
    checkuserblock: {
      expiry: "1 week",
      forAnonOnly: true,
      nocreate: true,
      nonstandard: true,
      reason: "{{checkuserblock}}",
      sig: "~~".concat("~~")
    },
    "checkuserblock-account": {
      autoblock: true,
      expiry: "infinity",
      forRegisteredOnly: true,
      nocreate: true,
      nonstandard: true,
      reason: "{{checkuserblock-account}}",
      sig: "~~".concat("~~")
    },
    "school block": {
      expiry: "1 week",
      forAnonOnly: true,
      nocreate: true,
      nonstandard: true,
      reason: "{{school block}}",
      sig: "~~".concat("~~")
    },
    "Bot block message": {
      expiry: "infinity",
      forRegisteredOnly: true,
      reason: window.wgULS("机器人故障", "機器人故障"),
      summary: window.wgULS("封禁通知：机器人故障", "封鎖通知：機器人故障"),
      sig: "~~".concat("~~")
    },
    // other block reasons
    bioblock: {
      autoblock: true,
      expiry: "1 day",
      nocreate: true,
      pageParam: true,
      reason: window.wgULS("违反生者传记条例", "違反生者傳記條例"),
      summary: window.wgULS("封禁通知：违反生者传记条例", "封鎖通知：違反生者傳記條例"),
      templateName: "uw-vblock"
    },
    ucblock: {
      autoblock: true,
      expiry: "1 day",
      nocreate: true,
      pageParam: true,
      reason: window.wgULS("屡次增加没有[[LIB:RS|可靠来源]]的资料", "屢次增加沒有[[LIB:RS|可靠來源]]的資料"),
      summary: window.wgULS("封禁通知：屡次增加没有[[LIB:RS|可靠来源]]的资料", "封鎖通知：屢次增加沒有[[LIB:RS|可靠來源]]的資料"),
      templateName: "uw-block"
    },
    npblock: {
      autoblock: true,
      expiry: "1 day",
      nocreate: true,
      pageParam: true,
      reason: window.wgULS("在条目中增加无意义文字", "在條目中增加無意義文字"),
      summary: window.wgULS("封禁通知：在条目中增加无意义文字", "封鎖通知：在條目中增加無意義文字"),
      templateName: "uw-vblock"
    },
    "point-block": {
      autoblock: true,
      expiry: "1 day",
      nocreate: true,
      pageParam: true,
      reasonParam: true,
      reason: window.wgULS("持续打制度擦边球", "持續打制度擦邊球"),
      summary: window.wgULS("封禁通知：持续打制度擦边球", "封鎖通知：持續打制度擦邊球"),
      templateName: "uw-block"
    },
    "sock-contribs": {
      autoblock: true,
      expiry: "infinity",
      forRegisteredOnly: true,
      nocreate: true,
      reasonParam: true,
      reason: window.wgULS("确认为[[LIB:SOCK|傀儡]]或真人傀儡 - 根据用户贡献确定", "確認為[[LIB:SOCK|傀儡]]或真人傀儡 - 根據使用者貢獻確定"),
      summary: window.wgULS("封禁通知：确认为[[LIB:SOCK|傀儡]]或真人傀儡", "封鎖通知：確認為[[LIB:SOCK|傀儡]]或真人傀儡"),
      templateName: "uw-blockindef"
    },
    "sock-cu": {
      autoblock: true,
      expiry: "infinity",
      forRegisteredOnly: true,
      nocreate: true,
      reasonParam: true,
      reason: window.wgULS("确认为[[LIB:SOCK|傀儡]]或真人傀儡 - 用户查核确认", "確認為[[LIB:SOCK|傀儡]]或真人傀儡 - 使用者查核確認"),
      summary: window.wgULS("封禁通知：确认为[[LIB:SOCK|傀儡]]或真人傀儡", "封鎖通知：確認為[[LIB:SOCK|傀儡]]或真人傀儡"),
      templateName: "uw-blockindef"
    },
    "uw-ublock-attack": {
      autoblock: true,
      expiry: "infinity",
      forRegisteredOnly: true,
      nocreate: true,
      reason: "{{uw-ublock-attack}}<!-- ".concat(window.wgULS("攻击性用户名", "攻擊性使用者名稱"), " -->"),
      summary: window.wgULS("封禁通知：攻击性用户名", "封鎖通知：攻擊性使用者名稱")
    },
    // Begin partial block templates, accessed in Twinkle.block.blockGroupsPartial
    "uw-pblock": {
      autoblock: true,
      expiry: "1 day",
      nocreate: false,
      pageParam: false,
      reasonParam: true,
      summary: window.wgULS("封禁通知：您已被禁止编辑有兽档案馆的部分区域", "封鎖通知：您已被禁止編輯有獸檔案館的部分區域")
    },
    "uw-pblockindef": {
      autoblock: true,
      expiry: "infinity",
      nocreate: false,
      pageParam: false,
      reasonParam: true,
      summary: window.wgULS("封禁通知：您已被永久禁止编辑有兽档案馆的部分区域", "封鎖通知：您已被永久禁止編輯有獸檔案館的部分區域")
    }
  };
  Twinkle.block.transformBlockPresets = () => {
    var _iterator8 = _createForOfIteratorHelper(Twinkle.getPref("customBlockReasonList")), _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
        const item = _step8.value;
        const newKey = "".concat(item.value, "|").concat(item.label);
        Twinkle.block.blockPresetsInfo[newKey] = {
          autoblock: true,
          nocreate: true,
          ...Twinkle.block.blockPresetsInfo[item.value],
          reason: item.label,
          templateName: item.value
        };
        if (Twinkle.block.blockPresetsInfo[item.value] === void 0) {
          Twinkle.block.blockPresetsInfo[item.value] = {
            pageParam: true,
            reasonParam: true,
            custom: true
          };
        }
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    for (var _i5 = 0, _Object$entries3 = Object.entries(Twinkle.block.blockPresetsInfo); _i5 < _Object$entries3.length; _i5++) {
      const [preset, settings] = _Object$entries3[_i5];
      settings.summary || (settings.summary = settings.reason);
      settings.sig = settings.sig === void 0 ? "yes" : settings.sig;
      settings.indefinite || (settings.indefinite = Morebits.string.isInfinity(settings.expiry));
      if (!Twinkle.block.isRegistered && settings.indefinite) {
        settings.expiry = "1 day";
      } else {
        settings.expiry || (settings.expiry = "1 day");
      }
      Twinkle.block.blockPresetsInfo[preset] = settings;
    }
  };
  Twinkle.block.blockGroups = [{
    label: window.wgULS("普通封禁", "普通封鎖"),
    list: [
      {
        label: window.wgULS("通用封禁（自定义理由）", "通用封鎖（自訂理由）"),
        value: "uw-block"
      },
      {
        label: window.wgULS("无限期封禁（自定义理由）", "無限期封鎖（自訂理由）"),
        value: "uw-blockindef"
      },
      {
        label: window.wgULS("禁止编辑讨论页", "禁止編輯討論頁"),
        value: "uw-blocknotalk",
        meta: true
      },
      {
        label: window.wgULS("违反回退不过三原则", "違反回退不過三原則"),
        value: "uw-3block"
      },
      {
        label: window.wgULS("散发广告或宣传", "散發廣告或宣傳"),
        value: "uw-adblock"
      },
      {
        label: window.wgULS("行为无礼或人身攻击", "行為無禮或人身攻擊"),
        value: "uw-attackblock"
      },
      {
        label: window.wgULS("多次加入侵犯著作权的内容", "多次加入侵犯著作權的內容"),
        value: "uw-copyrightblock"
      },
      {
        label: window.wgULS("无故删除内容", "無故刪除內容"),
        value: "uw-dblock"
      },
      {
        label: window.wgULS("骚扰用户", "騷擾使用者"),
        value: "uw-hblock"
      },
      {
        label: window.wgULS("破坏", "破壞"),
        value: "uw-vblock",
        selected: true
      },
      {
        label: window.wgULS("持续加入不符合中国价值观的非法内容", "持續加入不符合中國價值觀的非法內容"),
        value: "uw-illegalblock"
      },
      {
        label: window.wgULS("滥用多个账号", "濫用多個賬號"),
        value: "uw-sockblock"
      },
      // other block reasons
      {
        label: window.wgULS("违反生者传记条例", "違反生者傳記條例"),
        value: "bioblock"
      },
      {
        label: window.wgULS("屡次增加没有可靠来源的资料", "屢次增加沒有可靠來源的資料"),
        value: "ucblock"
      },
      {
        label: window.wgULS("在条目中增加无意义文字", "在條目中增加無意義文字"),
        value: "npblock"
      },
      {
        label: window.wgULS("持续打制度擦边球", "持續打制度擦邊球"),
        value: "point-block"
      },
      {
        label: window.wgULS("确认为傀儡或真人傀儡（根据用户贡献确定）", "確認為傀儡或真人傀儡（根據使用者貢獻確定）"),
        value: "sock-contribs"
      },
      {
        label: window.wgULS("确认为傀儡或真人傀儡（用户查核确认）", "確認為傀儡或真人傀儡（使用者查核確認）"),
        value: "sock-cu"
      },
      {
        label: window.wgULS("机器人发生故障并必须紧急停止", "機器人發生故障並必須緊急停止"),
        value: "Bot block message"
      }
    ]
  }, {
    custom: true,
    label: window.wgULS("自定义封禁理由", "自訂封鎖理由")
  }, {
    label: window.wgULS("用户名封禁", "使用者名稱封鎖"),
    list: [{
      label: window.wgULS("违反用户名条例", "違反使用者名稱條例"),
      value: "uw-ublock"
    }, {
      label: window.wgULS("不合规的用户名", "不合規的使用者名稱"),
      value: "uw-ublock-illegal"
    }, {
      label: window.wgULS("宣传性用户名", "宣傳性使用者名稱"),
      value: "uw-ublock-spam"
    }, {
      label: window.wgULS("攻击性用户名", "攻擊性使用者名稱"),
      value: "uw-ublock-attack"
    }, {
      label: window.wgULS("混淆性或误导性用户名", "混淆性或誤導性使用者名稱"),
      value: "uw-ublock-suggestive"
    }]
  }, {
    label: "其他模板",
    list: [{
      label: "range block",
      value: "range block",
      forAnonOnly: true
    }, {
      label: "school block",
      value: "school block",
      forAnonOnly: true
    }, {
      label: "blocked proxy",
      value: "blocked proxy",
      forAnonOnly: true
    }, {
      label: window.wgULS("用户查核封禁（主用户）", "使用者查核封鎖（主使用者）"),
      value: "checkuserblock",
      forAnonOnly: true
    }, {
      label: window.wgULS("用户查核封禁（子用户）", "使用者查核封鎖（子使用者）"),
      value: "checkuserblock-account",
      forRegisteredOnly: true
    }]
  }];
  Twinkle.block.blockGroupsPartial = [{
    label: window.wgULS("常见部分封禁理由", "常見部分封鎖理由"),
    list: [{
      label: window.wgULS("通用部分封禁（自定义理由）", "通用部分封鎖（自訂理由）"),
      value: "uw-pblock",
      selected: true
    }, {
      label: window.wgULS("无限期部分封禁（自定义理由）", "無限期部分封鎖（自訂理由）"),
      value: "uw-pblockindef"
    }]
  }];
  Twinkle.block.callback.filtered_block_groups = (group, show_template) => {
    return $.map(group, (blockGroup) => {
      if (blockGroup.custom) {
        if (show_template) {
          let templates = $.map(Twinkle.getPref("customBlockReasonList"), (item) => {
            if (Twinkle.block.blockPresetsInfo[item.value].custom) {
              return item.value;
            }
          });
          templates = Morebits.array.uniq(templates);
          blockGroup.list = $.map(templates, (template) => {
            return {
              label: window.wgULS("自定义模板", "自訂模板"),
              value: template
            };
          });
        } else {
          blockGroup.list = $.map(Twinkle.getPref("customBlockReasonList"), (item) => {
            return {
              label: item.label,
              value: "".concat(item.value, "|").concat(item.label)
            };
          });
        }
      }
      const list = $.map(blockGroup.list, (blockPreset) => {
        if (!show_template && blockPreset.meta) {
          return;
        }
        switch (blockPreset.value) {
          case "range block":
            if (!Morebits.ip.isRange(relevantUserName)) {
              return;
            }
            blockPreset.selected = !Morebits.ip.get64(relevantUserName);
            break;
          default:
            break;
        }
        const blockSettings = Twinkle.block.blockPresetsInfo[blockPreset.value];
        let registrationRestrict;
        if (blockSettings.forRegisteredOnly) {
          registrationRestrict = Twinkle.block.isRegistered;
        } else if (blockSettings.forAnonOnly) {
          registrationRestrict = !Twinkle.block.isRegistered;
        } else {
          registrationRestrict = true;
        }
        if (!(blockSettings.templateName && show_template) && registrationRestrict) {
          const templateName = blockSettings.templateName || blockPreset.value;
          return {
            label: (show_template ? "{{".concat(templateName, "}}: ") : "") + blockPreset.label,
            value: blockPreset.value,
            data: [{
              name: "template-name",
              value: templateName
            }],
            selected: !!blockPreset.selected,
            disabled: !!blockPreset.disabled
          };
        }
      });
      if (list.length) {
        return {
          label: blockGroup.label,
          list
        };
      }
    });
  };
  Twinkle.block.callback.change_preset = (e) => {
    const {
      form
    } = e.target;
    const key = form.preset.value;
    if (!key) {
      return;
    }
    Twinkle.block.callback.update_form(e, Twinkle.block.blockPresetsInfo[key]);
    if (form.template) {
      form.template.value = Twinkle.block.blockPresetsInfo[key].templateName || key;
      Twinkle.block.callback.change_template(e);
    }
  };
  Twinkle.block.callback.change_expiry = (e) => {
    const {
      expiry
    } = e.target.form;
    if (e.target.value === "custom") {
      Morebits.quickForm.setElementVisibility(expiry.parentNode, true);
    } else {
      Morebits.quickForm.setElementVisibility(expiry.parentNode, false);
      expiry.value = e.target.value;
    }
  };
  Twinkle.block.seeAlsos = [];
  Twinkle.block.callback.toggle_see_alsos = function() {
    const reason = this.form.reason.value.replace(new RegExp("(<!-- )(参见|參見)".concat(Twinkle.block.seeAlsos.join("、"), "( -->)")), "");
    Twinkle.block.seeAlsos = Twinkle.block.seeAlsos.filter((el) => {
      return el !== this.value;
    });
    if (this.checked) {
      Twinkle.block.seeAlsos.push(this.value);
    }
    const seeAlsoMessage = Twinkle.block.seeAlsos.join("、");
    if (Twinkle.block.seeAlsos.length) {
      this.form.reason.value = "".concat(reason, "<!-- ").concat(window.wgULS("参见", "參見")).concat(seeAlsoMessage, " -->");
    } else {
      this.form.reason.value = reason;
    }
  };
  Twinkle.block.callback.update_form = (e, data) => {
    const {
      form
    } = e.target;
    let {
      expiry
    } = data;
    if (!data.useInitialOptions) {
      if (Date.parse(expiry)) {
        expiry = new Date(expiry).toGMTString();
        form.expiry_preset.value = "custom";
      } else {
        form.expiry_preset.value = data.expiry || "custom";
      }
      form.expiry.value = expiry;
      if (form.expiry_preset.value === "custom") {
        Morebits.quickForm.setElementVisibility(form.expiry.parentNode, true);
      } else {
        Morebits.quickForm.setElementVisibility(form.expiry.parentNode, false);
      }
    }
    data.disabletalk = data.disabletalk === void 0 ? false : data.disabletalk;
    data.hardblock = data.hardblock === void 0 ? false : data.hardblock;
    if (Twinkle.block.userIsBot || /bot\b/i.test(relevantUserName)) {
      data.autoblock = false;
    }
    $(form).find("[name=field_block_options]").find(":checkbox").each((_i, el) => {
      if (data.useInitialOptions && data[el.name] === void 0) {
        return;
      }
      if (el.name === "closevip") {
        return;
      }
      const check = data[el.name] === "" || !!data[el.name];
      $(el).prop("checked", check);
    });
    if (data.prependReason && data.reason) {
      form.reason.value = "".concat(data.reason, "；").concat(form.reason.value);
    } else {
      form.reason.value = data.reason || "";
    }
    if (form.pagerestrictions) {
      const $pageSelect = $(form).find("[name=pagerestrictions]");
      const $namespaceSelect = $(form).find("[name=namespacerestrictions]");
      if (!data.useInitialOptions) {
        $pageSelect.val(null).trigger("change");
        $namespaceSelect.val(null).trigger("change");
      }
      if (data.restrictions) {
        if (data.restrictions.pages && !$pageSelect.val().length) {
          const pages = data.restrictions.pages.map((pr) => {
            return pr.title;
          });
          var _iterator9 = _createForOfIteratorHelper(pages), _step9;
          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
              const page = _step9.value;
              if (!$pageSelect.find("option[value='".concat($.escapeSelector(page), "']")).length) {
                const newOption = new Option(page, page, true, true);
                $pageSelect.append(newOption);
              }
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
          $pageSelect.val([...$pageSelect.val(), ...Array.isArray(pages) ? pages : [pages]]).trigger("change");
        }
        if (data.restrictions.namespaces) {
          $namespaceSelect.val([...$namespaceSelect.val(), ...Array.isArray(data.restrictions.namespaces) ? data.restrictions.namespaces : [data.restrictions.namespaces]]).trigger("change");
        }
      }
    }
  };
  Twinkle.block.callback.change_template = (e) => {
    const {
      form
    } = e.target;
    const {
      value
    } = form.template;
    const settings = Twinkle.block.blockPresetsInfo[value];
    const blockBox = $(form).find("[name=actiontype][value=block]").is(":checked");
    const partialBox = $(form).find("[name=actiontype][value=partial]").is(":checked");
    const templateBox = $(form).find("[name=actiontype][value=template]").is(":checked");
    if (!blockBox) {
      if (settings.indefinite || settings.nonstandard) {
        if (Twinkle.block.prev_template_expiry === null) {
          Twinkle.block.prev_template_expiry = form.template_expiry.value || "";
        }
        form.template_expiry.parentNode.style.display = "none";
        form.template_expiry.value = "infinity";
      } else if (form.template_expiry.parentNode.style.display === "none") {
        if (Twinkle.block.prev_template_expiry !== null) {
          form.template_expiry.value = Twinkle.block.prev_template_expiry;
          Twinkle.block.prev_template_expiry = null;
        }
        form.template_expiry.parentNode.style.display = "block";
      }
      if (Twinkle.block.prev_template_expiry) {
        form.expiry.value = Twinkle.block.prev_template_expiry;
      }
      Morebits.quickForm.setElementVisibility(form.notalk.parentNode, !settings.nonstandard);
      Morebits.quickForm.setElementVisibility(form.noemail_template.parentNode, partialBox);
      Morebits.quickForm.setElementVisibility(form.nocreate_template.parentNode, partialBox);
    } else if (templateBox) {
      Morebits.quickForm.setElementVisibility(form.blank_duration.parentNode, !settings.indefinite && !settings.nonstandard);
    }
    Morebits.quickForm.setElementVisibility(form.article.parentNode, settings && !!settings.pageParam);
    Morebits.quickForm.setElementVisibility(form.block_reason.parentNode, settings && !!settings.reasonParam);
    if (settings.reasonParam) {
      form.block_reason.value = Twinkle.block.blockPresetsInfo[form.preset.value].reason || "";
    } else {
      form.block_reason.value = "";
    }
    Morebits.quickForm.setElementVisibility(form.area.parentNode, partialBox && !blockBox);
    form.root.previewer.closePreview();
  };
  Twinkle.block.prev_template_expiry = null;
  Twinkle.block.callback.preview = (form) => {
    const params = {
      article: form.article.value,
      blank_duration: form.blank_duration ? form.blank_duration.checked : false,
      disabletalk: form.disabletalk.checked || (form.notalk ? form.notalk.checked : false),
      expiry: form.template_expiry ? form.template_expiry.value : form.expiry.value,
      hardblock: Twinkle.block.isRegistered ? form.autoblock.checked : form.hardblock.checked,
      indefinite: Morebits.string.isInfinity(form.template_expiry ? form.template_expiry.value : form.expiry.value),
      reason: form.block_reason.value,
      template: form.template.value,
      partial: $(form).find("[name=actiontype][value=partial]").is(":checked"),
      pagerestrictions: $(form.pagerestrictions).val() || [],
      namespacerestrictions: $(form.namespacerestrictions).val() || [],
      noemail: form.noemail.checked || (form.noemail_template ? form.noemail_template.checked : false),
      nocreate: form.nocreate.checked || (form.nocreate_template ? form.nocreate_template.checked : false),
      area: form.area.value
    };
    const templateText = Twinkle.block.callback.getBlockNoticeWikitext(params);
    form.previewer.beginRender(templateText, "User_talk:".concat(relevantUserName, "/Wikitext"));
  };
  Twinkle.block.callback.evaluate = (e) => {
    var _templateoptions;
    const params = Morebits.quickForm.getInputData(e.target);
    const $form = $(e.target);
    const toBlock = $form.find("[name=actiontype][value=block]").is(":checked");
    const toWarn = $form.find("[name=actiontype][value=template]").is(":checked");
    const toPartial = $form.find("[name=actiontype][value=partial]").is(":checked");
    const toTag = $form.find("[name=actiontype][value=tag]").is(":checked");
    const toProtect = $form.find("[name=actiontype][value=protect]").is(":checked");
    const toUnblock = $form.find("[name=actiontype][value=unblock]").is(":checked");
    let blockoptions = {};
    let templateoptions = {};
    let unblockoptions = {};
    Twinkle.block.callback.saveFieldset($form.find("[name=field_block_options]"));
    Twinkle.block.callback.saveFieldset($form.find("[name=field_template_options]"));
    Twinkle.block.callback.saveFieldset($form.find("[name=field_tag_options]"));
    Twinkle.block.callback.saveFieldset($form.find("[name=field_unblock_options]"));
    blockoptions = Twinkle.block.field_block_options;
    unblockoptions = Twinkle.block.field_unblock_options;
    const toClosevip = !!blockoptions.closevip;
    templateoptions = Twinkle.block.field_template_options;
    templateoptions.disabletalk = !!(templateoptions.disabletalk || blockoptions.disabletalk);
    templateoptions.hardblock = !!blockoptions.hardblock;
    delete blockoptions.expiry_preset;
    delete blockoptions.closevip;
    if (toPartial) {
      blockoptions.partial = true;
      templateoptions.partial = true;
    }
    templateoptions.pagerestrictions = $form.find("[name=pagerestrictions]").val() || [];
    templateoptions.namespacerestrictions = $form.find("[name=namespacerestrictions]").val() || [];
    blockoptions.pagerestrictions = templateoptions.pagerestrictions.join("|");
    blockoptions.namespacerestrictions = templateoptions.namespacerestrictions.join("|");
    (_templateoptions = templateoptions).summary || (_templateoptions.summary = blockoptions.reason);
    templateoptions.expiry = templateoptions.template_expiry || blockoptions.expiry;
    templateoptions.preset = toBlock ? params.preset : null;
    const checkIncompatible = (conflicts, extra) => {
      const count = conflicts.reduce((sum, tag) => {
        return sum += params.tag.includes(tag);
      }, 0);
      if (count > 1) {
        let message = "".concat(window.wgULS("请在以下标签中择一使用", "請在以下標籤中擇一使用"), "：{{").concat(conflicts.join("}}、{{"), "}}。");
        message += extra || "";
        mw.notify(message, {
          type: "warn",
          tag: "twinkleblock"
        });
        return true;
      }
    };
    if (toTag) {
      if (params.tag.length === 0) {
        mw.notify(window.wgULS("请至少选择一个用户页标记！", "請至少選擇一個使用者頁面標記！"), {
          type: "warn",
          tag: "twinkleblock"
        });
        return;
      }
      if (checkIncompatible(["Blocked user", "Sockpuppet"], window.wgULS("{{Sockpuppet}}已涵盖{{Blocked user}}的功能。", "{{Sockpuppet}}已涵蓋{{Blocked user}}的功能。"))) {
        return;
      }
      if (checkIncompatible(["Blocked user", "Sockpuppeteer"], window.wgULS("{{Sockpuppeteer}}已涵盖{{Blocked user}}的功能。", "{{Sockpuppeteer}}已涵蓋{{Blocked user}}的功能。"))) {
        return;
      }
      if (checkIncompatible(["Sockpuppet", "Sockpuppeteer"], window.wgULS("请从主账号和分身账号中选择一个。", "請從主賬號和分身賬號中選擇一個。"))) {
        return;
      }
      if (params.tag.includes("Sockpuppet") && params.sppUsername.trim() === "") {
        mw.notify(window.wgULS("请提供傀儡账号的主账号用户名！", "請提供傀儡賬號的主賬號使用者名稱！"), {
          type: "warn",
          tag: "twinkleblock"
        });
        return;
      }
    }
    if (toBlock) {
      if (blockoptions.partial) {
        if (blockoptions.disabletalk && !blockoptions.namespacerestrictions.includes("3")) {
          mw.notify(window.wgULS("部分封禁无法阻止编辑自己的讨论页，除非也封禁了User talk命名空间！", "部分封鎖無法阻止編輯自己的討論頁，除非也封鎖了User talk命名空間！"), {
            type: "warn",
            tag: "twinkleblock"
          });
          return;
        }
        if (!blockoptions.namespacerestrictions && !blockoptions.pagerestrictions) {
          if (!blockoptions.noemail && !blockoptions.nocreate) {
            mw.notify(window.wgULS("没有选择页面或命名空间，也没有停用电子邮件或禁止创建账号；请选择至少一个选项以应用部分封禁！", "沒有選擇頁面或命名空間，也沒有停用電子郵件或禁止建立賬號；請選擇至少一個選項以應用部分封鎖！"), {
              type: "warn",
              tag: "twinkleblock"
            });
            return;
          } else if (!confirm(window.wgULS("您将要进行封禁，但没有阻止任何页面或命名空间的编辑，确定要继续？", "您將要進行封鎖，但沒有阻止任何頁面或命名空間的編輯，確定要繼續？"))) {
            return;
          }
        }
      }
      if (!blockoptions.expiry) {
        mw.notify(window.wgULS("请提供过期时间！", "請提供過期時間！"), {
          type: "warn",
          tag: "twinkleblock"
        });
        return;
      } else if (Morebits.string.isInfinity(blockoptions.expiry) && !Twinkle.block.isRegistered) {
        mw.notify(window.wgULS("禁止无限期封禁IP地址！", "禁止無限期封鎖IP位址！"), {
          type: "warn",
          tag: "twinkleblock"
        });
        return;
      }
      if (!blockoptions.reason) {
        mw.notify(window.wgULS("请提供封禁理由！", "請提供封鎖理由！"), {
          type: "warn",
          tag: "twinkleblock"
        });
        return;
      }
      Morebits.simpleWindow.setButtonsEnabled(false);
      Morebits.status.init(e.target);
      const statusElement = new Morebits.status(window.wgULS("执行封禁", "執行封鎖"));
      blockoptions.action = "block";
      blockoptions.user = relevantUserName;
      blockoptions.anononly = blockoptions.hardblock ? void 0 : true;
      blockoptions.allowusertalk = blockoptions.disabletalk ? void 0 : true;
      const query = {
        format: "json",
        action: "query",
        list: "blocks|logevents",
        letype: "block",
        lelimit: 1,
        letitle: "User:".concat(blockoptions.user)
      };
      if (mw.util.isIPAddress(blockoptions.user, true)) {
        query.bkip = blockoptions.user;
      } else {
        query.bkusers = blockoptions.user;
        query.list += "|users";
        query.usprop = "groups";
        query.ususers = blockoptions.user;
        query.meta = "tokens";
        query.type = "userrights";
      }
      api.get(query).then((data) => {
        let [block] = data.query.blocks;
        if (data.query.blocks.length > 1 && block.user !== relevantUserName) {
          [, block] = data.query.blocks;
        }
        const [logevents] = data.query.logevents;
        const user = data.query.users ? data.query.users[0] : null;
        const logid = data.query.logevents.length ? logevents.logid : false;
        if (logid !== Twinkle.block.blockLogId || !!block !== !!Twinkle.block.currentBlockInfo) {
          let message = blockoptions.user + window.wgULS("的封禁状态已被修改。", "的封鎖狀態已被修改。");
          if (block) {
            message += window.wgULS("新状态：", "新狀態：");
          } else {
            message += window.wgULS("最新日志：", "最新日誌：");
          }
          let logExpiry = "";
          if (logevents.params.duration) {
            if (logevents.params.duration === "infinity") {
              logExpiry = window.wgULS("无限期", "無限期");
            } else {
              const expiryDate = new Morebits.date(logevents.params.expiry);
              logExpiry += (expiryDate.isBefore(/* @__PURE__ */ new Date()) ? window.wgULS("过期于", "過期於") : "直到") + expiryDate.calendar();
            }
          } else {
            logExpiry = "於".concat(new Morebits.date(logevents.timestamp).calendar());
          }
          message += "由".concat(logevents.user).concat(window.wgULS("以“", "以「")).concat(logevents.comment).concat(window.wgULS("”", "」")).concat(blockActionText[logevents.action]).concat(logExpiry).concat(window.wgULS("，你想要以你的设置更改封禁吗？", "，你想要以你的設定變更封鎖嗎？"));
          if (!confirm(message)) {
            Morebits.status.info(window.wgULS("执行封禁", "執行封鎖"), window.wgULS("用户取消操作", "使用者取消操作"));
            return;
          }
          blockoptions.reblock = 1;
        }
        const groupsCanBeRemoved = ["autopatrolled", "confirmed", "rnrsverify-exempt", "massmessage-sender", "patroller", "templateeditor", "importer"];
        let groupsToBeRemoved = [];
        if (user && Morebits.string.isInfinity(blockoptions.expiry)) {
          groupsToBeRemoved = user.groups.filter((group) => {
            return groupsCanBeRemoved.includes(group);
          });
        }
        blockoptions.tags = Twinkle.changeTags;
        blockoptions.token = mw.user.tokens.get("csrfToken");
        const mbApi = new Morebits.wiki.api(window.wgULS("执行封禁", "執行封鎖"), blockoptions, () => {
          statusElement.info("完成");
          if (toWarn) {
            Twinkle.block.callback.issue_template(templateoptions);
          }
          if (toClosevip) {
            const vipPage = new Morebits.wiki.page("LIB_talk:报告当前破坏", window.wgULS("关闭请求", "關閉請求"));
            vipPage.setFollowRedirect(true);
            vipPage.setCallbackParameters(blockoptions);
            vipPage.load(Twinkle.block.callback.closeRequest);
          }
          if (groupsToBeRemoved.length > 0) {
            const rightStatusElement = new Morebits.status(window.wgULS("移除权限", "移除權限"));
            if (confirm(window.wgULS("该用户有以下权限：", "該使用者有以下權限：") + groupsToBeRemoved.join("、") + window.wgULS("，您是否想要同时移除这些权限？", "，您是否想要同時移除這些權限？"))) {
              const revokeOptions = {
                action: "userrights",
                user: blockoptions.user,
                remove: groupsToBeRemoved.join("|"),
                reason: window.wgULS("用户已被无限期封禁", "使用者已被無限期封鎖"),
                token: data.query.tokens.userrightstoken,
                tags: Twinkle.changeTags
              };
              const mrApi = new Morebits.wiki.api(window.wgULS("移除权限", "移除權限"), revokeOptions, () => {
                rightStatusElement.info("已移除".concat(groupsToBeRemoved.join("、")));
              });
              mrApi.post();
            } else {
              rightStatusElement.error(window.wgULS("用户取消操作。", "使用者取消操作。"));
            }
          }
        });
        mbApi.post();
      });
    } else if (toWarn) {
      Morebits.simpleWindow.setButtonsEnabled(false);
      Morebits.status.init(e.target);
      Twinkle.block.callback.issue_template(templateoptions);
    }
    if (toTag || toProtect) {
      Morebits.simpleWindow.setButtonsEnabled(false);
      Morebits.status.init(e.target);
      const userPage = "User:".concat(mw.config.get("wgRelevantUserName"));
      const ysarchives_page = new Morebits.wiki.page(userPage, window.wgULS("标记或保护用户页", "標記或保護使用者頁面"));
      ysarchives_page.setCallbackParameters(params);
      ysarchives_page.load(Twinkle.block.callback.taguserpage);
    }
    if (toUnblock) {
      if (!unblockoptions.reason) {
        mw.notify(window.wgULS("请提供解除封禁理由！", "請提供解除封鎖理由！"), {
          type: "warn",
          tag: "twinkleblock"
        });
        return;
      }
      Morebits.simpleWindow.setButtonsEnabled(false);
      Morebits.status.init(e.target);
      const unblockStatusElement = new Morebits.status(window.wgULS("执行解除封禁", "執行解除封鎖"));
      unblockoptions.action = "unblock";
      unblockoptions.user = mw.config.get("wgRelevantUserName");
      unblockoptions.tags = Twinkle.changeTags;
      unblockoptions.token = mw.user.tokens.get("csrfToken");
      const unblockMbApi = new Morebits.wiki.api(window.wgULS("执行解除封禁", "執行解除封鎖"), unblockoptions, () => {
        unblockStatusElement.info("完成");
      });
      unblockMbApi.post();
    }
    if (!toBlock && !toWarn && !toTag && !toProtect && !toUnblock) {
      mw.notify(window.wgULS("请给Twinkle点事做！", "請給Twinkle點事做！"), {
        type: "warn",
        tag: "twinkleblock"
      });
    }
  };
  Twinkle.block.callback.taguserpage = (pageobj) => {
    const params = pageobj.getCallbackParameters();
    const statelem = pageobj.getStatusElement();
    if (params.actiontype.includes("tag")) {
      const tags = [];
      var _iterator10 = _createForOfIteratorHelper(params.tag), _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
          const tag = _step10.value;
          let tagtext = "{{".concat(tag);
          switch (tag) {
            case "Blocked user":
              break;
            case "Sockpuppet":
              tagtext += "\n| 1 = ".concat(params.sppUsername.trim());
              tagtext += "\n| 2 = ".concat(params.sppType.trim());
              if (params.sppEvidence.trim()) {
                tagtext += "\n| evidence = ".concat(params.sppEvidence.trim());
              }
              tagtext += "\n| locked = no";
              tagtext += "\n| notblocked = no";
              tagtext += "\n";
              break;
            case "Sockpuppeteer":
              tagtext += "\n| 1 = blocked";
              tagtext += "\n| checked = ".concat(params.spmChecked ? "yes" : "");
              if (params.spmEvidence.trim()) {
                tagtext += "\n| evidence = ".concat(params.spmEvidence.trim());
              }
              tagtext += "\n";
              break;
            default:
              mw.notify(window.wgULS("未知的用户页模板！", "未知的使用者頁面模板！"), {
                type: "warn",
                tag: "twinkleblock"
              });
              continue;
          }
          tagtext += "}}";
          tags.push(tagtext);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      const text = tags.join("\n");
      pageobj.setPageText(text);
      pageobj.setEditSummary(window.wgULS("标记被永久封禁的用户页", "標記被永久封鎖的使用者頁面"));
      pageobj.setChangeTags(Twinkle.changeTags);
      pageobj.save(() => {
        Morebits.status.info(window.wgULS("标记用户页", "標記使用者頁面"), "完成");
        statelem.status(window.wgULS("正在保护页面", "正在保護頁面"));
        pageobj.load(Twinkle.block.callback.protectuserpage);
      });
    } else {
      Twinkle.block.callback.protectuserpage(pageobj);
    }
  };
  Twinkle.block.callback.protectuserpage = (pageobj) => {
    const params = pageobj.getCallbackParameters();
    const statelem = pageobj.getStatusElement();
    if (params.actiontype.includes("protect")) {
      if (pageobj.exists()) {
        pageobj.setEditProtection("sysop", "indefinite");
        pageobj.setMoveProtection("sysop", "indefinite");
      } else {
        pageobj.setCreateProtection("sysop", "indefinite");
      }
      pageobj.setEditSummary(window.wgULS("被永久封禁的用户页", "被永久封鎖的使用者頁面"));
      pageobj.setChangeTags(Twinkle.changeTags);
      pageobj.protect(() => {
        Morebits.status.info(window.wgULS("保护用户页", "保護使用者頁面"), pageobj.exists() ? window.wgULS("已全保护", "已全保護") : window.wgULS("已白纸保护", "已白紙保護"));
        statelem.info("全部完成");
      });
    } else {
      statelem.info("全部完成");
    }
  };
  Twinkle.block.callback.issue_template = (formData) => {
    const userTalkPage = "User_talk:".concat(mw.config.get("wgRelevantUserName"));
    const params = {
      ...formData,
      messageData: Twinkle.block.blockPresetsInfo[formData.template],
      usertalk_summary: Twinkle.block.blockPresetsInfo[formData.preset || formData.template].summary,
      reason: Twinkle.block.field_template_options.block_reason,
      disabletalk: Twinkle.block.field_template_options.notalk,
      noemail: Twinkle.block.field_template_options.noemail_template,
      nocreate: Twinkle.block.field_template_options.nocreate_template
    };
    Morebits.wiki.actionCompleted.redirect = userTalkPage;
    Morebits.wiki.actionCompleted.notice = window.wgULS("完成，将在几秒后加载用户讨论页", "完成，將在幾秒後載入使用者討論頁");
    const ysarchives_page = new Morebits.wiki.page(userTalkPage, window.wgULS("用户讨论页修改", "使用者討論頁修改"));
    ysarchives_page.setCallbackParameters(params);
    ysarchives_page.load(Twinkle.block.callback.main);
  };
  Twinkle.block.callback.closeRequest = (vipPage) => {
    const params = vipPage.getCallbackParameters();
    let text = vipPage.getPageText();
    const statusElement = vipPage.getStatusElement();
    const userName = mw.config.get("wgRelevantUserName");
    const expiryText = Morebits.string.formatTime(params.expiry);
    const comment = "{{Blocked|".concat(Morebits.string.isInfinity(params.expiry) ? "indef" : expiryText, "}}。");
    const requestList = text.split(/(?=\n===.+===\s*\n)/);
    let found = false;
    let hidename = false;
    const vipRe = new RegExp("{{\\s*[Vv]andal\\s*\\|\\s*(1\\s*=\\s*)?".concat(Morebits.pageNameRegex(userName), "\\s*(\\|\\s*hidename\\s*=[^|]+)?}}"), "m");
    for (let i = 1; i < requestList.length; i++) {
      if (vipRe.exec(requestList[i])) {
        hidename = /\|\s*hidename\s*=[^|]+/.test(requestList[i]);
        requestList[i] = requestList[i].trimEnd();
        let newText = requestList[i].replace(/^(\*\s*处理：)[ \t]*(<!-- 非管理員僅可標記已執行的封禁，針對提報的意見請放在下一行 -->)?[ \t]*$/m, "$1".concat(comment, "--~~").concat("~~"));
        if (requestList[i] === newText) {
          newText = "".concat(requestList[i], "\n* 处理：").concat(comment, "--~~").concat("~~");
        }
        requestList[i] = "".concat(newText, "\n");
        found = true;
        break;
      }
    }
    if (!found) {
      statusElement.warn(window.wgULS("没有找到相关的请求", "沒有找到相關的請求"));
      return;
    }
    text = requestList.join("");
    let summary;
    if (hidename) {
      summary = window.wgULS("标记为已处理", "標記為已處理");
    } else {
      summary = "/* ".concat(userName, " */ ");
      if (Morebits.string.isInfinity(params.expiry)) {
        summary += window.wgULS("不限期封禁", "不限期封鎖");
      } else {
        summary += window.wgULS("封禁", "封鎖") + expiryText;
      }
    }
    vipPage.setEditSummary(summary);
    vipPage.setChangeTags(Twinkle.changeTags);
    vipPage.setPageText(text);
    vipPage.save();
  };
  Twinkle.block.callback.getBlockNoticeWikitext = (params) => {
    let text = "{{";
    const settings = Twinkle.block.blockPresetsInfo[params.template];
    if (settings.nonstandard) {
      text += params.template;
    } else {
      text += "subst:".concat(params.template);
      if (params.article && settings.pageParam) {
        text += "|page=".concat(params.article);
      }
      if (!/te?mp|^\s*$|min/.exec(params.expiry)) {
        if (params.indefinite) {
          text += "|indef=yes";
        } else if (!params.blank_duration) {
          text += "|time=".concat(Morebits.string.formatTime(params.expiry));
        }
      }
      if (!Twinkle.block.isRegistered && !params.hardblock) {
        text += "|anon=yes";
      }
      if (params.reason) {
        text += "|reason=".concat(params.reason);
      }
      if (params.disabletalk) {
        text += "|notalk=yes";
      }
      if (params.partial) {
        if (params.pagerestrictions.length || params.namespacerestrictions.length) {
          const makeSentence = (array) => {
            if (array.length < 3) {
              return array.join("和");
            }
            const last = array.pop();
            return "".concat(array.join("、"), "和").concat(last);
          };
          text += "|area=某些";
          if (params.pagerestrictions.length) {
            text += "頁面（".concat(makeSentence(params.pagerestrictions.map((p) => {
              return "[[:".concat(p, "]]");
            })));
            text += params.namespacerestrictions.length ? "）和某些" : "）";
          }
          if (params.namespacerestrictions.length) {
            const namespaceNames = params.namespacerestrictions.map((id) => {
              return menuFormattedNamespaces[id];
            });
            text += "".concat(window.wgULS("[[Help:命名空间|命名空间]]（", "[[Help:命名空間|命名空間]]（") + makeSentence(namespaceNames), "）");
          }
        } else if (params.area) {
          text += "|area=".concat(params.area);
        } else {
          if (params.noemail) {
            text += "|email=yes";
          }
          if (params.nocreate) {
            text += "|accountcreate=yes";
          }
        }
      }
    }
    if (settings.sig) {
      text += "|sig=".concat(settings.sig);
    }
    return "".concat(text, "}}");
  };
  Twinkle.block.callback.main = (pageobj) => {
    const params = pageobj.getCallbackParameters();
    const date = new Morebits.date(pageobj.getLoadTime());
    const {
      messageData
    } = params;
    let text;
    params.indefinite = Morebits.string.isInfinity(params.expiry);
    if (Twinkle.getPref("blankTalkpageOnIndefBlock") && params.template !== "uw-lblock" && params.indefinite) {
      Morebits.status.info(window.wgULS("信息", "資訊"), window.wgULS("根据参数设置清空讨论页并为日期创建新2级标题", "根據偏好設定清空討論頁並為日期建立新2級標題"));
      text = "".concat(date.monthHeader(), "\n");
    } else {
      text = pageobj.getPageText();
      const dateHeaderRegex = date.monthHeaderRegex();
      let dateHeaderRegexLast;
      let dateHeaderRegexResult;
      while ((dateHeaderRegexLast = dateHeaderRegex.exec(text)) !== null) {
        dateHeaderRegexResult = dateHeaderRegexLast;
      }
      const lastHeaderIndex = text.lastIndexOf("\n==") + 1;
      if (text.length > 0) {
        text += "\n\n";
      }
      if (!dateHeaderRegexResult || dateHeaderRegexResult.index !== lastHeaderIndex) {
        Morebits.status.info(window.wgULS("信息", "資訊"), window.wgULS("未找到当月的二级标题，将创建新的", "未找到當月的二級標題，將建立新的"));
        text += "".concat(date.monthHeader(), "\n");
      }
    }
    params.expiry = params.template_expiry === void 0 ? params.expiry : params.template_expiry;
    text += Twinkle.block.callback.getBlockNoticeWikitext(params);
    let summary = params.usertalk_summary;
    if (messageData.suppressArticleInSummary !== true && params.article) {
      summary += "".concat(window.wgULS("，于", "，於"), "[[:").concat(params.article, "]]");
    }
    pageobj.setPageText(text);
    pageobj.setEditSummary(summary);
    pageobj.setChangeTags(Twinkle.changeTags);
    pageobj.setWatchlist(Twinkle.getPref("watchBlockNotices"));
    pageobj.save();
  };
  Twinkle.addInitCallback(Twinkle.block, "block");
})(jQuery);
//! src/Twinkle/modules/friendlytalkback.js
/*! Twinkle.js - friendlytalkback.js */
(function friendlytalkback($) {
  const $body = $("body");
  Twinkle.talkback = () => {
    if (!mw.config.get("wgRelevantUserName")) {
      return;
    }
    Twinkle.addPortletLink(Twinkle.talkback.callback, "通告", "friendly-talkback", window.wgULS("回复通告", "回覆通告"));
  };
  Twinkle.talkback.callback = () => {
    if (mw.config.get("wgRelevantUserName") === mw.config.get("wgUserName") && !confirm(window.wgULS("您寂寞到了要自己回复自己的程度么？", "您寂寞到了要自己回覆自己的程度麼？"))) {
      return;
    }
    const Window = new Morebits.simpleWindow(600, 350);
    Window.setTitle(window.wgULS("回复通告", "回覆通告"));
    Window.setScriptName("Twinkle");
    Window.addFooterLink(window.wgULS("关于{{talkback}}", "關於{{talkback}}"), "Template:Talkback");
    Window.addFooterLink(window.wgULS("通告设置", "通告設定"), "H:TW/PREF#talkback");
    Window.addFooterLink(window.wgULS("Twinkle帮助", "Twinkle說明"), "H:TW/DOC#talkback");
    const form = new Morebits.quickForm(Twinkle.talkback.evaluate);
    form.append({
      type: "radio",
      name: "tbtarget",
      list: [{
        label: window.wgULS("回复：我的讨论页", "回覆：我的討論頁"),
        value: "mytalk",
        checked: "true"
      }, {
        label: window.wgULS("回复：其他用户的讨论页", "回覆：其他使用者的討論頁"),
        value: "usertalk"
      }, {
        label: window.wgULS("回复：其它页面", "回覆：其它頁面"),
        value: "other"
      }, {
        label: window.wgULS("邀请讨论", "邀請討論"),
        value: "see"
      }, {
        label: "通告板通知",
        value: "notice"
      }, {
        label: window.wgULS("“有新邮件”", "「有新郵件」"),
        value: "mail"
      }],
      event: Twinkle.talkback.changeTarget
    });
    form.append({
      type: "field",
      label: "工作区",
      name: "work_area"
    });
    const previewlink = document.createElement("a");
    $(previewlink).on("click", () => {
      Twinkle.talkback.preview(result);
    });
    previewlink.style.cursor = "pointer";
    previewlink.textContent = window.wgULS("预览", "預覽");
    form.append({
      type: "div",
      id: "talkbackpreview",
      label: [previewlink]
    });
    form.append({
      type: "div",
      id: "friendlytalkback-previewbox",
      style: "display: none"
    });
    form.append({
      type: "submit"
    });
    const result = form.render();
    Window.setContent(result);
    Window.display();
    result.previewer = new Morebits.wiki.preview($(result).find("div#friendlytalkback-previewbox").last()[0]);
    const evt = document.createEvent("Event");
    evt.initEvent("change", true, true);
    result.tbtarget[0].dispatchEvent(evt);
    const query = {
      action: "query",
      prop: "extlinks",
      titles: "User talk:".concat(mw.config.get("wgRelevantUserName")),
      elquery: "userjs.invalid/noTalkback",
      ellimit: "1"
    };
    const ysarchives_api = new Morebits.wiki.api(window.wgULS("抓取退出通告信息", "抓取退出通告資訊"), query, Twinkle.talkback.callback.optoutStatus);
    ysarchives_api.post();
  };
  Twinkle.talkback.optout = "";
  Twinkle.talkback.callback.optoutStatus = (apiobj) => {
    const $el = $(apiobj.getXML()).find("el");
    if ($el.length) {
      Twinkle.talkback.optout = mw.config.get("wgRelevantUserName") + window.wgULS("不希望收到回复通告", "不希望收到回覆通告");
      const url = $el.text();
      const reason = mw.util.getParamValue("reason", url);
      Twinkle.talkback.optout += reason ? "：".concat(Morebits.string.appendPunctuation(reason)) : "。";
    }
    $body.find("#twinkle-talkback-optout-message").text(Twinkle.talkback.optout);
  };
  let prev_page = "";
  let prev_section = "";
  let prev_message = "";
  Twinkle.talkback.changeTarget = (e) => {
    const value = e.target.values;
    const root = e.target.form;
    const [old_area] = Morebits.quickForm.getElements(root, "work_area");
    if (root.section) {
      prev_section = root.section.value;
    }
    if (root.message) {
      prev_message = root.message.value;
    }
    if (root.page) {
      prev_page = root.page.value;
    }
    let work_area = new Morebits.quickForm.element({
      type: "field",
      label: window.wgULS("回复通告信息", "回覆通告資訊"),
      name: "work_area"
    });
    root.previewer.closePreview();
    switch (value) {
      case "usertalk":
        work_area.append({
          type: "div",
          label: "",
          style: "color: #f00",
          id: "twinkle-talkback-optout-message"
        });
        work_area.append({
          type: "input",
          name: "page",
          label: window.wgULS("用户（必填）", "使用者（必填）"),
          tooltip: window.wgULS("您留言页面的用户名，必填。", "您留言頁面的使用者名稱，必填。"),
          value: prev_page,
          required: true
        });
        work_area.append({
          type: "input",
          name: "section",
          label: window.wgULS("章节（可选）", "章節（可選）"),
          tooltip: window.wgULS("您留言的章节标题，留空则不会产生章节链接。", "您留言的章節標題，留空則不會產生章節連結。"),
          value: prev_section
        });
        break;
      case "notice": {
        const noticeboard = work_area.append({
          type: "select",
          name: "noticeboard",
          label: "通告板："
        });
        for (var _i6 = 0, _Object$entries4 = Object.entries(Twinkle.talkback.noticeboards); _i6 < _Object$entries4.length; _i6++) {
          const [nbname, data] = _Object$entries4[_i6];
          noticeboard.append({
            type: "option",
            label: data.label,
            value: nbname,
            selected: !!data.defaultSelected
          });
        }
        work_area.append({
          type: "input",
          name: "section",
          label: window.wgULS("章节（可选）", "章節（可選）"),
          tooltip: window.wgULS("章节标题，留空则不会产生章节链接。", "章節標題，留空則不會產生章節連結。"),
          value: prev_section
        });
        break;
      }
      case "other":
        work_area.append({
          type: "div",
          label: "",
          style: "color: #f00",
          id: "twinkle-talkback-optout-message"
        });
        work_area.append({
          type: "input",
          name: "page",
          label: window.wgULS("完整页面名", "完整頁面名"),
          tooltip: window.wgULS("您留下消息的完整页面名，例如“LIB_talk:首页”。", "您留下訊息的完整頁面名，例如「LIB_talk:首頁」。"),
          value: prev_page,
          required: true
        });
        work_area.append({
          type: "input",
          name: "section",
          label: window.wgULS("章节（可选）", "章節（可選）"),
          tooltip: window.wgULS("您留言的章节标题，留空则不会产生章节链接。", "您留言的章節標題，留空則不會產生章節連結。"),
          value: prev_section
        });
        break;
      case "mail":
        work_area.append({
          type: "input",
          name: "section",
          label: window.wgULS("电子邮件主题（可选）", "電子郵件主題（可選）"),
          tooltip: window.wgULS("您发出的电子邮件的主题。", "您發出的電子郵件的主題。")
        });
        break;
      case "see":
        work_area.append({
          type: "input",
          name: "page",
          label: window.wgULS("完整页面名", "完整頁面名"),
          tooltip: window.wgULS("您留下消息的完整页面名，例如“LIB_talk:首页”。", "您留下訊息的完整頁面名，例如「LIB_talk:首頁」。"),
          value: prev_page,
          required: true
        });
        work_area.append({
          type: "input",
          name: "section",
          label: window.wgULS("章节（可选）", "章節（可選）"),
          tooltip: window.wgULS("您留言的章节标题，留空则不会产生章节链接。", "您留言的章節標題，留空則不會產生章節連結。"),
          value: prev_section
        });
        break;
      default:
        work_area.append({
          type: "div",
          label: "",
          style: "color: #f00",
          id: "twinkle-talkback-optout-message"
        });
        work_area.append({
          type: "input",
          name: "section",
          label: window.wgULS("章节（可选）", "章節（可選）"),
          tooltip: window.wgULS("您留言的章节标题，留空则不会产生章节链接。", "您留言的章節標題，留空則不會產生章節連結。"),
          value: prev_section
        });
        break;
    }
    if (value !== "notice") {
      work_area.append({
        type: "textarea",
        label: window.wgULS("附加信息（可选）：", "附加資訊（可選）："),
        name: "message",
        tooltip: window.wgULS("会在回复通告模板下出现的消息，您的签名会被加在最后。", "會在回覆通告模板下出現的訊息，您的簽名會被加在最後。")
      });
    }
    work_area = work_area.render();
    root.replaceChild(work_area, old_area);
    if (root.message) {
      root.message.value = prev_message;
    }
    $body.find("#twinkle-talkback-optout-message").text(Twinkle.talkback.optout);
  };
  Twinkle.talkback.noticeboards = {
    affp: {
      label: "LIB:AF/FP（".concat(window.wgULS("过滤器处理/报告", "過濾器處理/報告"), "）"),
      title: window.wgULS("过滤器错误报告有新回应", "過濾器錯誤報告有新回應"),
      content: "".concat(window.wgULS("您的[[LIB_talk:过滤器处理/报告|过滤器错误报告]]已有回应，请前往查看。", "您的[[LIB_talk:过滤器处理/报告|過濾器錯誤報告]]已有回應，請前往查看。"), "--~~").concat("~~"),
      editSummary: window.wgULS("有关[[LIB_talk:过滤器处理/报告|过滤器错误报告]]的通知", "有關[[LIB_talk:过滤器处理/报告|過濾器錯誤報告]]的通知"),
      defaultSelected: true
    },
    sbl: {
      label: "Spam-blacklist",
      title: window.wgULS("垃圾链接黑名单请求有新回应", "垃圾連結黑名單請求有新回應"),
      content: "".concat(window.wgULS("您的[[LIB_talk:管理员告示板|垃圾链接黑名单请求]]已有回应，请前往查看。", "您的[[LIB_talk:管理员告示板|垃圾連結黑名單請求]]已有回應，請前往查看。"), "--~~").concat("~~"),
      editSummary: window.wgULS("有关[[LIB_talk:管理员告示板|垃圾链接黑名单请求]]的通知", "有關[[LIB_talk:管理员告示板|垃圾連結黑名單請求]]的通知")
    },
    shl: {
      label: "Spam-whitelist",
      title: window.wgULS("垃圾链接白名单请求有新回应", "垃圾連結白名單請求有新回應"),
      content: "".concat(window.wgULS("您的[[LIB_talk:管理员告示板|垃圾链接白名单请求]]已有回应，请前往查看。", "您的[[LIB_talk:管理员告示板|垃圾連結白名單請求]]已有回應，請前往查看。"), "--~~").concat("~~"),
      editSummary: window.wgULS("有关[[LIB_talk:管理员告示板|垃圾链接白名单请求]]的通知", "有關[[LIB_talk:管理员告示板|垃圾連結白名單請求]]的通知")
    }
  };
  Twinkle.talkback.evaluate = (e) => {
    const form = e.target;
    const [tbtarget] = form.getChecked("tbtarget");
    let page;
    let message;
    const section = form.section.value;
    let editSummary;
    if (tbtarget === "notice") {
      page = form.noticeboard.value;
      ({
        editSummary
      } = Twinkle.talkback.noticeboards[page]);
    } else {
      page = form.page ? form.page.value : mw.config.get("wgUserName");
      if (form.message) {
        message = form.message.value.trim();
      }
      if (tbtarget === "mail") {
        editSummary = window.wgULS("通知：有新邮件", "通知：有新郵件");
      } else if (tbtarget === "see") {
        editSummary = "".concat(window.wgULS("请看看", "請看看"), "[[:").concat(page).concat(section ? "#".concat(section) : "", "]]").concat(window.wgULS("上的讨论", "上的討論"));
      } else {
        editSummary = "".concat(window.wgULS("回复通告", "回覆通告"), "（[[:");
        if (tbtarget !== "other" && !new RegExp("^\\s*".concat(Morebits.namespaceRegex(3), ":"), "i").test(page)) {
          editSummary += "User talk:";
        }
        editSummary += "".concat(page + (section ? "#".concat(section) : ""), "]])");
      }
    }
    Morebits.simpleWindow.setButtonsEnabled(false);
    Morebits.status.init(form);
    const fullUserTalkPageName = "".concat(mw.config.get("wgFormattedNamespaces")[mw.config.get("wgNamespaceIds").user_talk], ":").concat(mw.config.get("wgRelevantUserName"));
    Morebits.wiki.actionCompleted.redirect = fullUserTalkPageName;
    Morebits.wiki.actionCompleted.notice = window.wgULS("回复通告完成，将在几秒内刷新页面", "回覆通告完成，將在幾秒內重新整理頁面");
    const text = "\n\n".concat(Twinkle.talkback.getNoticeWikitext(tbtarget, page, section, message)[0]);
    const talkpage = new Morebits.wiki.page(fullUserTalkPageName, window.wgULS("加入回复通告", "加入回覆通告"));
    talkpage.setEditSummary(editSummary);
    talkpage.setChangeTags(Twinkle.changeTags);
    talkpage.setAppendText(text);
    talkpage.setCreateOption("recreate");
    talkpage.setMinorEdit(Twinkle.getPref("markTalkbackAsMinor"));
    talkpage.setFollowRedirect(true);
    talkpage.append();
  };
  Twinkle.talkback.preview = (form) => {
    const [tbtarget] = form.getChecked("tbtarget");
    const section = form.section.value;
    let page;
    let message;
    if (tbtarget === "notice") {
      page = form.noticeboard.value;
    } else {
      page = form.page ? form.page.value : mw.config.get("wgUserName");
      if (form.message) {
        message = form.message.value.trim();
      }
    }
    const [noticetext] = Twinkle.talkback.getNoticeWikitext(tbtarget, page, section, message);
    form.previewer.beginRender(noticetext, "User_talk:".concat(mw.config.get("wgRelevantUserName")));
  };
  Twinkle.talkback.getNoticeWikitext = (tbtarget, page, section, message) => {
    let text;
    let title;
    let content;
    if (tbtarget === "notice") {
      ({
        title
      } = Twinkle.talkback.noticeboards[page]);
      content = Morebits.string.safeReplace(Twinkle.talkback.noticeboards[page].content, "$SECTION", section);
      text = "== ".concat(title, " ==\n").concat(content);
    } else if (tbtarget === "see") {
      title = page + window.wgULS("的相关讨论", "的相關討論");
      content = "{{".concat("subst:", "Please see|location=".concat(page).concat(section ? "#".concat(section) : "", "|more=").concat(message.trim(), "}}"));
      text = "{{".concat("subst:", "Please see|location=".concat(page).concat(section ? "#".concat(section) : "", "|more=").concat(message.trim(), "}}"));
    } else {
      text = "==";
      if (tbtarget === "mail") {
        title = Twinkle.getPref("mailHeading");
        content = "{{You've got mail|subject=".concat(section, "|ts=~~").concat("~", "~~}}");
        text += "".concat(Twinkle.getPref("mailHeading"), "==\n{{You've got mail|subject=").concat(section);
      } else {
        title = Twinkle.getPref("talkbackHeading").replace(/^\s*=+\s*(.*?)\s*=+$\s*/, "$1");
        content = "{{talkback|".concat(page).concat(section ? "|".concat(section) : "");
        text += "".concat(Twinkle.getPref("talkbackHeading").replace(/^\s*=+\s*(.*?)\s*=+$\s*/, "$1"), "==\n{{talkback|").concat(page).concat(section ? "|".concat(section) : "");
      }
      content += "|ts=~~".concat("~", "~~}}");
      text += "|ts=~~".concat("~", "~~}}");
      if (message) {
        content += "\n".concat(message);
        text += "\n".concat(message, "  ~~").concat("~~");
      } else if (Twinkle.getPref("insertTalkbackSignature")) {
        text += "\n~~".concat("~~");
      }
    }
    return [text, title, content];
  };
  Twinkle.addInitCallback(Twinkle.talkback, "talkback");
})(jQuery);
//! src/Twinkle/modules/twinklespeedy.js
/*! Twinkle.js - twinklespeedy.js */
(function twinklespeedy($) {
  const $body = $("body");
  Twinkle.speedy = () => {
    if (mw.config.get("wgNamespaceNumber") < 0 || !mw.config.get("wgArticleId")) {
      return;
    }
    Twinkle.addPortletLink(Twinkle.speedy.callback, window.wgULS("速删", "速刪"), "tw-csd", Morebits.userIsSysop ? window.wgULS("快速删除", "快速刪除") : window.wgULS("请求快速删除", "請求快速刪除"));
  };
  Twinkle.speedy.callback = () => {
    Twinkle.speedy.initDialog(Morebits.userIsSysop ? Twinkle.speedy.callback.evaluateSysop : Twinkle.speedy.callback.evaluateUser, true);
  };
  Twinkle.speedy.dialog = null;
  Twinkle.speedy.hasCSD = !!document.querySelector("#delete-reason");
  Twinkle.speedy.mode = {
    sysopSingleSubmit: 1,
    // radio buttons, no subgroups, submit when "Submit" button is clicked
    sysopRadioClick: 2,
    // radio buttons, no subgroups, submit when a radio button is clicked
    sysopMultipleSubmit: 3,
    // check boxes, subgroups, "Submit" button already present
    sysopMultipleRadioClick: 4,
    // check boxes, subgroups, need to add a "Submit" button
    userMultipleSubmit: 5,
    // check boxes, subgroups, "Submit" button already pressent
    userMultipleRadioClick: 6,
    // check boxes, subgroups, need to add a "Submit" button
    userSingleSubmit: 7,
    // radio buttons, subgroups, submit when "Submit" button is clicked
    userSingleRadioClick: 8,
    // radio buttons, subgroups, submit when a radio button is clicked
    // are we in "delete page" mode?
    // (sysops can access both "delete page" [sysop] and "tag page only" [user] modes)
    isSysop: (mode) => {
      return mode === Twinkle.speedy.mode.sysopSingleSubmit || mode === Twinkle.speedy.mode.sysopMultipleSubmit || mode === Twinkle.speedy.mode.sysopRadioClick || mode === Twinkle.speedy.mode.sysopMultipleRadioClick;
    },
    // do we have a "Submit" button once the form is created?
    hasSubmitButton: (mode) => {
      return mode === Twinkle.speedy.mode.sysopSingleSubmit || mode === Twinkle.speedy.mode.sysopMultipleSubmit || mode === Twinkle.speedy.mode.sysopMultipleRadioClick || mode === Twinkle.speedy.mode.userMultipleSubmit || mode === Twinkle.speedy.mode.userMultipleRadioClick || mode === Twinkle.speedy.mode.userSingleSubmit;
    },
    // is db-multiple the outcome here?
    isMultiple: (mode) => {
      return mode === Twinkle.speedy.mode.userMultipleSubmit || mode === Twinkle.speedy.mode.sysopMultipleSubmit || mode === Twinkle.speedy.mode.userMultipleRadioClick || mode === Twinkle.speedy.mode.sysopMultipleRadioClick;
    }
  };
  Twinkle.speedy.initDialog = (callbackfunc) => {
    Twinkle.speedy.dialog = new Morebits.simpleWindow(Twinkle.getPref("speedyWindowWidth"), Twinkle.getPref("speedyWindowHeight"));
    const {
      dialog
    } = Twinkle.speedy;
    dialog.setTitle(window.wgULS("选择快速删除理由", "選擇快速刪除理由"));
    dialog.setScriptName("Twinkle");
    dialog.addFooterLink(window.wgULS("快速删除条例", "快速刪除條例"), "LIB:CSD");
    dialog.addFooterLink(window.wgULS("速删设置", "速刪設定"), "H:TW/PREF#speedy");
    dialog.addFooterLink(window.wgULS("Twinkle帮助", "Twinkle說明"), "H:TW/DOC#speedy");
    const form = new Morebits.quickForm(callbackfunc, Twinkle.getPref("speedySelectionStyle") === "radioClick" ? "change" : null);
    if (Morebits.userIsSysop) {
      form.append({
        type: "checkbox",
        list: [{
          label: window.wgULS("只标记，不删除", "只標記，不刪除"),
          value: "tag_only",
          name: "tag_only",
          tooltip: window.wgULS("若您只想标记此页面而不是将其删除", "若您只想標記此頁面而不是將其刪除"),
          checked: !(Twinkle.speedy.hasCSD || Twinkle.getPref("deleteSysopDefaultToDelete")),
          event: (event) => {
            const cForm = event.target.form;
            const cChecked = event.target.checked;
            if (cForm.talkpage) {
              cForm.talkpage.disabled = cChecked;
              cForm.talkpage.checked = !cChecked && Twinkle.getPref("deleteTalkPageOnDelete");
            }
            cForm.redirects.disabled = cChecked;
            cForm.redirects.checked = !cChecked;
            cForm.delmultiple.disabled = cChecked;
            cForm.delmultiple.checked = false;
            cForm.openusertalk.disabled = cChecked;
            cForm.openusertalk.checked = false;
            cForm.notify.disabled = !cChecked;
            cForm.notify.checked = cChecked;
            cForm.multiple.disabled = !cChecked;
            cForm.multiple.checked = false;
            cForm.salting.checked = false;
            Twinkle.speedy.callback.modeChanged(cForm);
            event.stopPropagation();
          }
        }]
      });
      const deleteOptions = form.append({
        type: "div",
        name: "delete_options"
      });
      deleteOptions.append({
        type: "header",
        label: window.wgULS("删除相关选项", "刪除相關選項")
      });
      if (mw.config.get("wgNamespaceNumber") % 2 === 0 && mw.config.get("wgNamespaceNumber") !== 2) {
        deleteOptions.append({
          type: "checkbox",
          list: [{
            label: window.wgULS("删除讨论页", "刪除討論頁"),
            value: "talkpage",
            name: "talkpage",
            tooltip: window.wgULS("删除时附带删除此页面的讨论页。", "刪除時附帶刪除此頁面的討論頁。"),
            checked: Twinkle.getPref("deleteTalkPageOnDelete"),
            event: (event) => {
              event.stopPropagation();
            }
          }]
        });
      }
      deleteOptions.append({
        type: "checkbox",
        list: [{
          label: window.wgULS("删除重定向", "刪除重新導向"),
          value: "redirects",
          name: "redirects",
          tooltip: window.wgULS("删除到此页的重定向。", "刪除到此頁的重新導向。"),
          checked: Twinkle.getPref("deleteRedirectsOnDelete"),
          event: (event) => {
            event.stopPropagation();
          }
        }]
      });
      deleteOptions.append({
        type: "checkbox",
        list: [{
          label: window.wgULS("应用多个理由删除", "應用多個理由刪除"),
          value: "delmultiple",
          name: "delmultiple",
          tooltip: window.wgULS("您可选择应用于该页的多个理由。", "您可選擇應用於該頁的多個理由。"),
          event: (event) => {
            Twinkle.speedy.callback.modeChanged(event.target.form);
            event.stopPropagation();
          }
        }]
      });
      deleteOptions.append({
        type: "checkbox",
        list: [{
          label: window.wgULS("开启用户讨论页", "開啟使用者討論頁"),
          value: "openusertalk",
          name: "openusertalk",
          tooltip: window.wgULS("此项的默认值为您的开启讨论页设置。在您选择应用多条理由删除时此项将保持不变。", "此項的預設值為您的開啟討論頁設定。在您選擇應用多條理由刪除時此項將保持不變。"),
          checked: false
        }]
      });
    }
    const tagOptions = form.append({
      type: "div",
      name: "tag_options"
    });
    if (Morebits.userIsSysop) {
      tagOptions.append({
        type: "header",
        label: window.wgULS("标记相关选项", "標記相關選項")
      });
    }
    tagOptions.append({
      type: "checkbox",
      list: [{
        label: window.wgULS("如可能，通知创建者", "如可能，通知建立者"),
        value: "notify",
        name: "notify",
        tooltip: window.wgULS("一个通知模板将会被加入创建者的讨论页，若您启用了该理据的通知。", "一個通知模板將會被加入建立者的討論頁，若您啟用了該理據的通知。"),
        checked: !Morebits.userIsSysop || !(Twinkle.speedy.hasCSD || Twinkle.getPref("deleteSysopDefaultToDelete")),
        event: (event) => {
          event.stopPropagation();
        }
      }, {
        label: window.wgULS("清空页面", "清空頁面"),
        value: "blank",
        name: "blank",
        tooltip: window.wgULS("在标记模板前，先清空页面，适用于严重破坏或负面生者传记等。", "在標記模板前，先清空頁面，適用於嚴重破壞或負面生者傳記等。")
      }, {
        label: window.wgULS("同时标记以请求白纸保护", "同時標記以請求白紙保護"),
        value: "salting",
        name: "salting",
        tooltip: window.wgULS("选取后，快速删除模板后将附带 {{salt}} 标签，以请求执行删除的管理员进行白纸保护，仅在页面创建3次以上才选择此项。", "選取後，快速刪除模板後將附帶 {{salt}} 標籤，以請求執行刪除的管理員進行白紙保護，僅在頁面建立3次以上才選擇此項。")
      }, {
        label: window.wgULS("应用多个理由", "應用多個理由"),
        value: "multiple",
        name: "multiple",
        tooltip: window.wgULS("您可选择应用于该页的多个理由。", "您可選擇應用於該頁的多個理由。"),
        event: (event) => {
          Twinkle.speedy.callback.modeChanged(event.target.form);
          event.stopPropagation();
        }
      }]
    });
    form.append({
      type: "div",
      id: "prior-deletion-count"
    });
    form.append({
      type: "div",
      name: "work_area",
      label: window.wgULS("初始化CSD模块失败，请重试，或将这报告给Twinkle开发者。", "初始化CSD模組失敗，請重試，或將這報告給Twinkle開發者。")
    });
    if (Twinkle.getPref("speedySelectionStyle") !== "radioClick") {
      form.append({
        type: "submit",
        className: "tw-speedy-submit"
      });
    }
    const result = form.render();
    dialog.setContent(result);
    dialog.display();
    Twinkle.speedy.callback.modeChanged(result);
    Twinkle.speedy.callback.priorDeletionCount();
  };
  Twinkle.speedy.callback.getMode = (form) => {
    let mode = Twinkle.speedy.mode.userSingleSubmit;
    if (form.tag_only && !form.tag_only.checked) {
      if (form.delmultiple.checked) {
        mode = Twinkle.speedy.mode.sysopMultipleSubmit;
      } else {
        mode = Twinkle.speedy.mode.sysopSingleSubmit;
      }
    } else if (form.multiple.checked) {
      mode = Twinkle.speedy.mode.userMultipleSubmit;
    } else {
      mode = Twinkle.speedy.mode.userSingleSubmit;
    }
    if (Twinkle.getPref("speedySelectionStyle") === "radioClick") {
      mode++;
    }
    return mode;
  };
  Twinkle.speedy.callback.modeChanged = (form) => {
    const namespace = mw.config.get("wgNamespaceNumber");
    const mode = Twinkle.speedy.callback.getMode(form);
    const isSysopMode = Twinkle.speedy.mode.isSysop(mode);
    if (isSysopMode) {
      $body.find("[name=delete_options]").show();
      $body.find("[name=tag_options]").hide();
      $body.find("button.tw-speedy-submit").text(window.wgULS("删除页面", "刪除頁面"));
    } else {
      $body.find("[name=delete_options]").hide();
      $body.find("[name=tag_options]").show();
      $body.find("button.tw-speedy-submit").text(window.wgULS("标记页面", "標記頁面"));
    }
    const work_area = new Morebits.quickForm.element({
      type: "div",
      name: "work_area"
    });
    if (mode === Twinkle.speedy.mode.userMultipleRadioClick || mode === Twinkle.speedy.mode.sysopMultipleRadioClick) {
      const evaluateType = Twinkle.speedy.mode.isSysop(mode) ? "evaluateSysop" : "evaluateUser";
      work_area.append({
        type: "div",
        label: window.wgULS("当选择完成后，单击：", "當選擇完成後，點擊：")
      });
      work_area.append({
        type: "button",
        name: "submit-multiple",
        label: isSysopMode ? window.wgULS("删除页面", "刪除頁面") : window.wgULS("标记页面", "標記頁面"),
        event: (event) => {
          Twinkle.speedy.callback[evaluateType](event);
          event.stopPropagation();
        }
      });
    }
    const radioOrCheckbox = Twinkle.speedy.mode.isMultiple(mode) ? "checkbox" : "radio";
    if (isSysopMode && !Twinkle.speedy.mode.isMultiple(mode)) {
      work_area.append({
        type: "header",
        label: window.wgULS("自定义理由", "自訂理由")
      });
      work_area.append({
        type: radioOrCheckbox,
        name: "csd",
        list: Twinkle.speedy.generateCsdList(Twinkle.speedy.customRationale, mode)
      });
    }
    switch (namespace) {
      case 0:
        work_area.append({
          type: "header",
          label: window.wgULS("条目", "條目")
        });
        work_area.append({
          type: radioOrCheckbox,
          name: "csd",
          list: Twinkle.speedy.generateCsdList(Twinkle.speedy.articleList, mode)
        });
        break;
      case 2:
        work_area.append({
          type: "header",
          label: window.wgULS("用户页", "使用者頁面")
        });
        work_area.append({
          type: radioOrCheckbox,
          name: "csd",
          list: Twinkle.speedy.generateCsdList(Twinkle.speedy.userList, mode)
        });
        break;
      case 3:
        if (mw.util.isIPAddress(mw.config.get("wgRelevantUserName"))) {
          work_area.append({
            type: "header",
            label: window.wgULS("用户讨论页", "使用者討論頁")
          });
          work_area.append({
            type: radioOrCheckbox,
            name: "csd",
            list: Twinkle.speedy.generateCsdList(Twinkle.speedy.usertalkList, mode)
          });
        }
        break;
      case 6:
        work_area.append({
          type: "header",
          label: window.wgULS("文件", "檔案")
        });
        work_area.append({
          type: radioOrCheckbox,
          name: "csd",
          list: Twinkle.speedy.generateCsdList(Twinkle.speedy.fileList, mode)
        });
        if (!Twinkle.speedy.mode.isSysop(mode)) {
          work_area.append({
            type: "div",
            label: window.wgULS("标记CSD F1、F3、F5，请使用Twinkle的“图权”功能。", "標記CSD F1、F3、F5，請使用Twinkle的「圖權」功能。")
          });
        }
        break;
      case 14:
        work_area.append({
          type: "header",
          label: window.wgULS("分类", "分類")
        });
        work_area.append({
          type: radioOrCheckbox,
          name: "csd",
          list: Twinkle.speedy.generateCsdList(Twinkle.speedy.categoryList, mode)
        });
        break;
      case 302:
        work_area.append({
          type: "header",
          label: "草稿"
        });
        work_area.append({
          type: radioOrCheckbox,
          name: "csd",
          list: Twinkle.speedy.generateCsdList(Twinkle.speedy.draftList, mode)
        });
        break;
      case (namespace % 2 === 1 && namespace !== 3):
        work_area.append({
          type: "header",
          label: window.wgULS("讨论页", "討論頁")
        });
        work_area.append({
          type: radioOrCheckbox,
          name: "csd",
          list: Twinkle.speedy.generateCsdList(Twinkle.speedy.talkList, mode)
        });
        break;
      default:
        break;
    }
    let generalCriteria = Twinkle.speedy.generalList;
    if (!Twinkle.speedy.mode.isSysop(mode)) {
      generalCriteria = [...Twinkle.speedy.customRationale, ...Array.isArray(generalCriteria) ? generalCriteria : [generalCriteria]];
    }
    work_area.append({
      type: "header",
      label: window.wgULS("常规", "常規")
    });
    work_area.append({
      type: radioOrCheckbox,
      name: "csd",
      list: Twinkle.speedy.generateCsdList(generalCriteria, mode)
    });
    if (!Twinkle.speedy.mode.isSysop(mode)) {
      work_area.append({
        type: "div",
        label: window.wgULS("提报侵权页面，请使用Twinkle的“侵权”功能。", "提報侵權頁面，請使用Twinkle的「侵權」功能。")
      });
    }
    if (mw.config.get("wgIsRedirect") || Morebits.userIsSysop) {
      work_area.append({
        type: "header",
        label: "重定向"
      });
      work_area.append({
        type: radioOrCheckbox,
        name: "csd",
        list: Twinkle.speedy.generateCsdList(Twinkle.speedy.redirectList, mode)
      });
    }
    const [old_area] = Morebits.quickForm.getElements(form, "work_area");
    form.replaceChild(work_area.render(), old_area);
    if (isSysopMode && Twinkle.speedy.hasCSD) {
      const [customOption] = $body.find("input[name=csd][value=reason]");
      if (customOption) {
        if (Twinkle.getPref("speedySelectionStyle") !== "radioClick") {
          customOption.click();
          customOption.parentNode.appendChild(customOption.subgroup);
        }
        customOption.subgroup.querySelector("input").value = decodeURIComponent($body.find("#delete-reason").text()).replace(/\+/g, " ");
      }
    }
    if (document.querySelector('input[value="g7"]') && Twinkle.getPref("enlargeG7Input")) {
      document.querySelector('input[value="g7"]').style = "height: 2em; width: 2em; height: -moz-initial; width: -moz-initial; -moz-transform: scale(2); -o-transform: scale(2);";
      document.querySelector('input[value="g7"]').labels[0].style = "font-size: 1.5em; line-height: 1.5em;";
    }
    if (!isSysopMode && mw.config.get("wgPageContentModel") !== "wikitext") {
      $body.find("[name=tag_options]").hide();
      $body.find("[name=work_area]").empty();
      const message = [window.wgULS("Twinkle不支持在页面内容模型为", "Twinkle不支援在頁面內容模型為"), mw.config.get("wgPageContentModel"), window.wgULS("的页面上挂上快速删除模板，请参见", "的頁面上掛上快速刪除模板，請參見"), $("<a>").attr({
        target: "_blank",
        rel: "noopener noreferrer",
        href: mw.util.getUrl("LIB:SPECIALSD")
      }).text(window.wgULS("手动放置模板时的注意事项", "手動放置模板時的注意事項"))[0], "。"];
      $body.find("[name=work_area]").append(message);
      Morebits.simpleWindow.setButtonsEnabled(false);
    } else {
      Morebits.simpleWindow.setButtonsEnabled(true);
    }
  };
  Twinkle.speedy.callback.priorDeletionCount = () => {
    const query = {
      action: "query",
      format: "json",
      list: "logevents",
      letype: "delete",
      leaction: "delete/delete",
      // Just pure page deletion, no redirect overwrites or revdel
      letitle: mw.config.get("wgPageName"),
      leprop: "",
      // We're just counting we don't actually care about the entries
      lelimit: 5
      // A little bit goes a long way
    };
    new Morebits.wiki.api(window.wgULS("检查之前的删除", "檢查之前的刪除"), query, (apiobj) => {
      const response = apiobj.getResponse();
      const delCount = response.query.logevents.length;
      if (delCount) {
        let message = window.wgULS("被删除", "被刪除");
        if (response.continue) {
          message += window.wgULS("超过", "超過");
        }
        message += "".concat(delCount, "次");
        if (delCount >= 3) {
          $body.find("#prior-deletion-count").css("color", "#ff0000");
        }
        const link = Morebits.htmlNode("a", window.wgULS("（日志）", "（日誌）"));
        link.setAttribute("href", mw.util.getUrl("Special:Log", {
          page: mw.config.get("wgPageName")
        }));
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
        $body.find("#prior-deletion-count").text(message);
        $body.find("#prior-deletion-count").append(link);
      }
    }).post();
  };
  Twinkle.speedy.generateCsdList = (list, mode) => {
    const isSysopMode = Twinkle.speedy.mode.isSysop(mode);
    const multiple = Twinkle.speedy.mode.isMultiple(mode);
    const hasSubmitButton = Twinkle.speedy.mode.hasSubmitButton(mode);
    const openSubgroupHandler = (e) => {
      $(e.target.form).find("input").prop("disabled", true);
      $(e.target.form).children().css("color", "gray");
      $(e.target).parent().css("color", "black").find("input").prop("disabled", false);
      $(e.target).parent().find("input:text")[0].focus();
      e.stopPropagation();
    };
    const submitSubgroupHandler = (e) => {
      const evaluateType = Twinkle.speedy.mode.isSysop(mode) ? "evaluateSysop" : "evaluateUser";
      Twinkle.speedy.callback[evaluateType](e);
      e.stopPropagation();
    };
    return Array.prototype.map.call(list, (critElement) => {
      const criterion = {
        ...critElement
      };
      if (multiple) {
        if (criterion.hideWhenMultiple) {
          return null;
        }
        if (criterion.hideSubgroupWhenMultiple) {
          criterion.subgroup = null;
        }
      } else {
        if (criterion.hideWhenSingle) {
          return null;
        }
        if (criterion.hideSubgroupWhenSingle) {
          criterion.subgroup = null;
        }
      }
      if (isSysopMode) {
        if (criterion.hideWhenSysop) {
          return null;
        }
        if (criterion.hideSubgroupWhenSysop) {
          criterion.subgroup = null;
        }
      } else {
        if (criterion.hideWhenUser) {
          return null;
        }
        if (criterion.hideSubgroupWhenUser) {
          criterion.subgroup = null;
        }
      }
      if (mw.config.get("wgIsRedirect") && criterion.hideWhenRedirect) {
        return null;
      }
      if (criterion.showInNamespaces && !criterion.showInNamespaces.includes(mw.config.get("wgNamespaceNumber"))) {
        return null;
      } else if (criterion.hideInNamespaces && criterion.hideInNamespaces.includes(mw.config.get("wgNamespaceNumber"))) {
        return null;
      }
      if (criterion.subgroup && !hasSubmitButton) {
        if (Array.isArray(criterion.subgroup)) {
          criterion.subgroup.push({
            type: "button",
            name: "submit",
            label: isSysopMode ? window.wgULS("删除页面", "刪除頁面") : window.wgULS("标记页面", "標記頁面"),
            event: submitSubgroupHandler
          });
        } else {
          criterion.subgroup = [criterion.subgroup, {
            type: "button",
            name: "submit",
            label: isSysopMode ? window.wgULS("删除页面", "刪除頁面") : window.wgULS("标记页面", "標記頁面"),
            event: submitSubgroupHandler
          }];
        }
        criterion.event = openSubgroupHandler;
      }
      if (isSysopMode) {
        const originalEvent = criterion.event;
        criterion.event = (e) => {
          if (multiple) {
            return originalEvent(e);
          }
          const normalizedCriterion = Twinkle.speedy.normalizeHash[e.target.value];
          $body.find("[name=openusertalk]").prop("checked", Twinkle.getPref("openUserTalkPageOnSpeedyDelete").includes(normalizedCriterion));
          if (originalEvent) {
            return originalEvent(e);
          }
        };
      }
      return criterion;
    });
  };
  Twinkle.speedy.customRationale = [{
    label: "自定义理由".concat(Morebits.userIsSysop ? "（自定义删除理由）" : ""),
    value: "reason",
    tooltip: "该页至少应该符合一条快速删除的标准，并且您必须在理由中提到。",
    subgroup: {
      name: "reason_1",
      type: "input",
      label: "理由：",
      size: 60
    }
  }];
  Twinkle.speedy.fileList = [{
    label: "F1：明显不符合本站著作权条例的文件",
    value: "f1",
    tooltip: "包括以下情况：1.上传后3天内仍然来源不明、著作权不明的文件。2.上传者宣称拥有，而在其他来源找到的文件。3.文件宣称由某作者依据某自由著作权协议发布，但找不到该自由协议的声明。4.其他明显侵权的文件，可附加侵权理由。"
  }, {
    label: "F2：重复且不再被使用的文件",
    value: "f2",
    tooltip: "包括以下情况：与现有文件完全相同（或与现有文件内容一致但尺寸较小），且没有客观需要（如某些场合需使用小尺寸图片）的文件。或是被更加清晰的文件、SVG格式文件所取代的文件。请提报者确定文件没有任何页面使用后再提报删除，并附注对应质量更好的文件名。",
    subgroup: {
      name: "f2_filename",
      type: "input",
      label: "新文件名：",
      tooltip: "可不含“File:”前缀。"
    }
  }];
  Twinkle.speedy.articleList = [{
    label: "A1：内容空泛或完全没有内容。",
    value: "a1",
    tooltip: "条目的内容笼统，或甚至根本没有提及条目主体，使条目不能用以区分其他事物；或条目只包括外部链接、参见、参考来源、分类、模板，而没有文字描述。消歧义页、重定向页不适用此条。请注意有些用户可能会多次保存，若此类页面的最后一次编辑时间超过24小时，则可提请快速删除。"
  }, {
    label: "A2：与其他条目或其历史版本重复，且不适合作为其重定向。",
    value: "a2",
    tooltip: "条目创建时的内容，与其他现有条目（或其历史版本）内容完全相同或非常相似，且名称不适合作为后者的重定向。不包括拆分、合并、重组后产生的条目。如有疑虑，可转交删除讨论。若后创建的条目名称可作为重定向，可直接改为重定向；若先创建的条目宜作为后创建条目的重定向，请提请移动请求。",
    subgroup: {
      name: "a2_pagename",
      type: "input",
      label: "现有条目名：",
      tooltip: "不自动加上链接，若需要请自行加上[[]]。",
      size: 60
    }
  }, {
    label: "A3：非现代汉语或翻译拙劣的条目",
    value: "a3",
    tooltip: "条目内容绝大部分非现代汉语，包括未翻译的外语、方言及文言文；或翻译质量低下，以至于难以理解或出现较多错误。"
  }];
  Twinkle.speedy.categoryList = [{
    label: "O2：空分类。",
    value: "o2",
    tooltip: "没有收录任何页面、文件、子分类的分类。Category:请勿删除的分类中的分类不适用。"
  }];
  Twinkle.speedy.draftList = [{
    label: "O3：废弃草稿。",
    value: "o3",
    tooltip: "草稿名字空间内六个月内无编辑的页面。"
  }];
  Twinkle.speedy.userList = [{
    label: "O1：用户请求删除自己的用户页。",
    value: "o1",
    tooltip: "管理员需查看编辑历史，确认该页面不是从其他名字空间移动而来。"
  }];
  Twinkle.speedy.generalList = [{
    label: "G1：明显违反法律法规或违背公序良俗的页面",
    value: "g1",
    tooltip: "明显违反服务器所在地的法律法规及有关规定，或突破社会公序良俗底线，按照中华人民共和国互联网管理规定应予删除的页面。"
  }, {
    label: "G2：没有实际内容的页面",
    value: "g2",
    tooltip: "仅包括无意义字符串而没有实际内容的页面。由用户本人创建的用户页、用户讨论页，及专为测试提供的沙盒，不适用此准则。"
  }, {
    label: "G3：纯粹破坏",
    value: "g3",
    tooltip: "包括但不限于明显的恶作剧、错误信息、人身攻击等，以及清理移动破坏时留下的重定向。若收到或发现严重的人身攻击与诋毁，管理员及其他用户应通知监督员进行监督隐藏。"
  }, {
    label: "G4：重新创建已被删除的页面",
    value: "g4",
    tooltip: "若现有页面与曾在删除讨论（含页面存废讨论、文件存废讨论和侵权审核，不含快速删除）中被删除内容相同或非常相似，且现有内容仍然适用删除讨论中的结论，无论标题是否相同，都适用本标准。若现有页面标题与已删版本不一致，则提请速删者应一并注明已删版本的页面名；若该页面之前被快速删除，请以相同理由重新提请速删。若现有内容不适用删除讨论中的结论，应重新提出删除讨论。",
    subgroup: [{
      name: "g4_pagename",
      type: "input",
      label: "已删版此页面名：",
      size: 60
    }],
    hideSubgroupWhenMultiple: true
  }, {
    label: "G5：因技术原因删除页面",
    value: "g5",
    tooltip: "包括以下情形：因移动请求而删除页面；以覆盖删除重定向；删除无用的MediaWiki页面，及其他技术团队或界面管理员认为有必要执行的快速删除情形。"
  }, {
    label: "G6：原作者提请删除或清空页面，且页面原作者仅有一人",
    value: "g6",
    tooltip: "页面原作者持合理理由提出的快速删除；或页面原作者（实际贡献者）清空页面，其他用户提交的快速删除。页面原作者（实际贡献者）仅一人时满足本准则。若页面实际贡献者多于一人，请持合理理由提交删除讨论。后一情形不包括用户页、用户讨论页，且应在页面最后一次编辑6小时后提出。被导入的页面，导入者视为原作者。",
    subgroup: {
      name: "g6_rationale",
      type: "input",
      label: "删除原因：",
      size: 60
    },
    hideSubgroupWhenSysop: true
  }, {
    label: "G7：明显的广告宣传",
    value: "g7",
    tooltip: "应用于明显的广告宣传，或只有相关人物、组织等事物联系方法（包括但不限于电话、地址、电子邮箱、即时通讯软件联系方式（如QQ号、微信号）、社交媒体链接）。若宣传语气不明显，建议转交删除讨论。"
  }, {
    label: "G8：未列明可靠来源且语调负面的生者传记",
    value: "g8",
    tooltip: "本情况下有的页面严重侵犯他人名誉权，有时可能侵犯隐私权，可能需要提请监督。"
  }, {
    label: "G9：孤立页面",
    value: "g9",
    tooltip: "包括以下几种类型：1.没有对应文件的文件页面；2.没有对应母页面的子页面（用户页子页面除外）；3.指向不存在页面的重定向；4.没有对应内容页面的讨论页（讨论页存档、用户讨论页，以及在主页面挂有{{CSD Placeholder}}模板的讨论页除外）；5.不存在注册用户的用户页及用户页子页面（随用户更名产生的用户页重定向除外）。请在删除时注意有无将内容移至他处的必要。"
  }];
  Twinkle.speedy.redirectList = [{
    label: "R1：不能发挥实际作用的重定向。",
    value: "r1",
    tooltip: "包括以下情况：1.指向本身或循环的重定向，如A→B→C→……→A或A→A（繁简重定向不适用此项）；2.格式错误的重定向，包括标题仅为繁体、繁简混用、消歧义使用的括弧或空格错误、间隔号使用错误（因类推简化字未收录至《通用规范汉字表》导致的繁简混杂情形，或系统无法自动进行繁简处理的情形，则不适用）。若重定向页面标题，与合乎命名常规的目标页面标题之间，仅存在繁简字体的区别，而不存在词语用法区别，则不保留该重定向。因系统无法自动繁简转换而必须保留的重定向页面除外。对于其他未列出的情况，若用户认为该重定向无法发挥实际作用，且依据常识没有任何争议，可凭合理理由提请速删，由管理员判断。指向不存在页面的重定向，适用G5准则。",
    subgroup: {
      name: "r1_type",
      type: "select",
      label: "适用类型：",
      list: [{
        label: "请选择",
        value: ""
      }, {
        label: "指向本身或循环的重定向",
        value: "指向本身或循环的重定向。"
      }, {
        label: "标题繁简混用",
        value: "标题繁简混用。"
      }, {
        label: "消歧义使用的括号或空格错误",
        value: "消歧义使用的括号或空格错误。"
      }, {
        label: "间隔号使用错误",
        value: "间隔号使用错误。"
      }, {
        label: "其他理由（请勾选上方“应用多个理由”，并填写自定义理由）",
        value: ""
      }]
    }
  }, {
    label: "R2：名称与导向目标代表事物不一致或不完全一致的重定向。",
    value: "r2",
    tooltip: "包括但不限于以下情况：1.由任何非条目页面（除用户页）导向条目页的重定向，以及由条目页导向任何非条目页面的重定向。2.明显笔误的重定向，如出现不常见的错别字等。（别称重定向不适用此项。若含错别字或有笔误的重定向使用频率高，此类重定向有助于帮助用户寻找到正确的页面，不适用此标准。有争议的此类重定向宜提交删除讨论。）3.明显与导向目标所涵盖的主题无关，或比导向目标所涵盖的主题更广泛的重定向。（若不明显，可改为提交删除讨论。）",
    subgroup: {
      name: "r2_type",
      type: "select",
      label: "适用类型：",
      list: [{
        label: "请选择",
        value: ""
      }, {
        label: "由非条目页面（除用户页）导向条目页的重定向",
        value: "由非条目页面（除用户页）导向条目页的重定向。"
      }, {
        label: "由条目页导向非条目页面的重定向",
        value: "由条目页导向任何非条目页面的重定向。"
      }, {
        label: "明显笔误的重定向",
        value: "明显笔误的重定向。"
      }, {
        label: "与导向目标无关或比其范围更广泛的重定向",
        value: "与导向目标无关或比其范围更广泛的重定向。"
      }, {
        label: "其他理由（请勾选上方“应用多个理由”，并填写自定义理由）",
        value: ""
      }]
    }
  }];
  Twinkle.speedy.normalizeHash = {
    reason: "db",
    multiple: "multiple",
    "multiple-finish": "multiple-finish",
    g1: "g1",
    g2: "g2",
    g3: "g3",
    g4: "g4",
    g5: "g5",
    g6: "g6",
    g7: "g7",
    g8: "g8",
    g9: "g9",
    a1: "a1",
    a2: "a2",
    a3: "a3",
    r1: "r1",
    r2: "r2",
    f1: "f1",
    f2: "f2",
    f3: "f3",
    f4: "f4",
    f5: "f5",
    o1: "o1",
    o2: "o2",
    o3: "o3"
  };
  Twinkle.speedy.callbacks = {
    getTemplateCodeAndParams: (params) => {
      let code;
      let parameters;
      let i;
      if (params.normalizeds.length > 1) {
        code = "{{delete";
        params.utparams = {};
        var _iterator11 = _createForOfIteratorHelper(params.normalizeds.entries()), _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
            const [index, norm] = _step11.value;
            if (norm !== "db") {
              code += "|".concat(norm.toUpperCase());
            }
            parameters = params.templateParams[index] || [];
            for (const i_ in parameters) {
              if (typeof parameters[i_] === "string") {
                code += "|".concat(parameters[i_]);
              }
            }
            params.utparams = {
              ...params.utparams,
              ...Twinkle.speedy.getUserTalkParameters(norm, parameters)
            };
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
        code += "}}";
      } else {
        parameters = params.templateParams[0] || [];
        code = "{{delete";
        if (params.values[0] !== "reason") {
          code += "|".concat(params.values[0]);
        }
        for (i in parameters) {
          if (typeof parameters[i] === "string") {
            code += "|".concat(parameters[i]);
          }
        }
        code += "}}";
        params.utparams = Twinkle.speedy.getUserTalkParameters(params.normalizeds[0], parameters);
      }
      return [code, params.utparams];
    },
    parseWikitext: (title, wikitext, callback) => {
      const query = {
        action: "parse",
        prop: "text",
        pst: "true",
        text: wikitext,
        contentmodel: "wikitext",
        title
      };
      const statusIndicator = new Morebits.status(window.wgULS("构造删除理由", "構造刪除理由"));
      const api = new Morebits.wiki.api(window.wgULS("解析删除模板", "解析刪除模板"), query, (apiObj) => {
        const reason = decodeURIComponent($(apiObj.getXML().querySelector("text").childNodes[0].nodeValue).find("#delete-reason").text().replace(/\+/g, " "));
        if (reason) {
          statusIndicator.info("完成");
        } else {
          statusIndicator.warn(window.wgULS("未能从删除模板生成删除理由", "未能從刪除模板生成刪除理由"));
        }
        callback(reason);
      }, statusIndicator);
      api.post();
    },
    sysop: {
      main: (params) => {
        let reason;
        if (!params.normalizeds.length && params.normalizeds[0] === "db") {
          reason = prompt(window.wgULS("输入删除理由：", "輸入刪除理由："), "");
          Twinkle.speedy.callbacks.sysop.deletePage(reason, params);
        } else {
          const [code] = Twinkle.speedy.callbacks.getTemplateCodeAndParams(params);
          Twinkle.speedy.callbacks.parseWikitext(mw.config.get("wgPageName"), code, (deleteReason) => {
            if (params.promptForSummary) {
              deleteReason = prompt(window.wgULS("输入删除理由，或单击确定以接受自动生成的：", "輸入刪除理由，或點擊確定以接受自動生成的："), deleteReason);
            }
            Twinkle.speedy.callbacks.sysop.deletePage(deleteReason, params);
          });
        }
      },
      deletePage: (reason, params) => {
        const thispage = new Morebits.wiki.page(mw.config.get("wgPageName"), window.wgULS("删除页面", "刪除頁面"));
        if (reason === null) {
          return Morebits.status.error(window.wgULS("询问理由", "詢問理由"), window.wgULS("用户取消操作。", "使用者取消操作。"));
        } else if (!reason || !reason.trim()) {
          return Morebits.status.error(window.wgULS("询问理由", "詢問理由"), window.wgULS("你不给我理由…我就…不管了…", "你不給我理由…我就…不管了…"));
        }
        const deleteMain = () => {
          thispage.setEditSummary(reason);
          thispage.setChangeTags(Twinkle.changeTags);
          thispage.setWatchlist(params.watch);
          thispage.deletePage(() => {
            thispage.getStatusElement().info("完成");
            Twinkle.speedy.callbacks.sysop.deleteTalk(params);
          });
        };
        if (params.openUserTalk) {
          thispage.setCallbackParameters(params);
          thispage.lookupCreation(() => {
            Twinkle.speedy.callbacks.sysop.openUserTalkPage(thispage);
            deleteMain();
          });
        } else {
          deleteMain();
        }
      },
      deleteTalk: (params) => {
        if (params.deleteTalkPage && params.normalized !== "o1" && !document.querySelector("#ca-talk").classList.contains("new")) {
          const talkpage = new Morebits.wiki.page("".concat(mw.config.get("wgFormattedNamespaces")[mw.config.get("wgNamespaceNumber") + 1], ":").concat(mw.config.get("wgTitle")), window.wgULS("删除讨论页", "刪除討論頁"));
          talkpage.setEditSummary("[[LIB:CSD#G9|G9]]: 孤立页面：已删除页面“".concat(Morebits.pageNameNorm, "”的讨论页"));
          talkpage.setChangeTags(Twinkle.changeTags);
          talkpage.deletePage();
          setTimeout(() => {
            Twinkle.speedy.callbacks.sysop.deleteRedirects(params);
          }, 1800);
        } else {
          Twinkle.speedy.callbacks.sysop.deleteRedirects(params);
        }
      },
      deleteRedirects: (params) => {
        if (params.deleteRedirects) {
          const query = {
            action: "query",
            titles: mw.config.get("wgPageName"),
            prop: "redirects",
            rdlimit: 5e3
            // 500 is max for normal users, 5000 for bots and sysops
          };
          const ysarchives_api = new Morebits.wiki.api(window.wgULS("获取重定向列表…", "取得重新導向列表…"), query, Twinkle.speedy.callbacks.sysop.deleteRedirectsMain, new Morebits.status(window.wgULS("删除重定向", "刪除重新導向")));
          ysarchives_api.params = params;
          ysarchives_api.post();
        }
        let $link;
        let $bigtext;
        if (params.normalized === "g7") {
          $link = $("<a>").attr("href", "#").text(window.wgULS("单击这里施行保护", "點擊這裡施行保護")).css({
            "font-size": "125%",
            "font-weight": "bold"
          }).on("click", () => {
            Morebits.wiki.actionCompleted.redirect = null;
            Twinkle.speedy.dialog.close();
            mw.config.set("wgArticleId", 0);
            Twinkle.protect.callback();
          });
          $bigtext = $("<span>").css({
            "font-size": "125%",
            "font-weight": "bold"
          }).text(window.wgULS("白纸保护该页", "白紙保護該頁"));
          Morebits.status.info($bigtext[0], $link[0]);
        }
        if (mw.config.get("wgNamespaceNumber") === 6) {
          $link = $("<a>").attr("href", "#").text(window.wgULS("单击这里前往取消链入工具", "點擊這裡前往取消連入工具")).css({
            "font-weight": "bold"
          }).on("click", () => {
            Morebits.wiki.actionCompleted.redirect = null;
            Twinkle.speedy.dialog.close();
            Twinkle.unlink.callback("".concat(window.wgULS("取消对已删除文件 ", "取消對已刪除檔案 ") + Morebits.pageNameNorm, " 的使用"));
          });
          $bigtext = $("<span>").css({
            "font-weight": "bold"
          }).text(window.wgULS("取消对已删除文件的使用", "取消對已刪除檔案的使用"));
          Morebits.status.info($bigtext[0], $link[0]);
        } else {
          $link = $("<a>").attr("href", "#").text(window.wgULS("单击这里前往取消链入工具", "點擊這裡前往取消連入工具")).css({
            "font-weight": "bold"
          }).on("click", () => {
            Morebits.wiki.actionCompleted.redirect = null;
            Twinkle.speedy.dialog.close();
            Twinkle.unlink.callback(window.wgULS("取消对已删除页面 ", "取消對已刪除頁面 ") + Morebits.pageNameNorm + window.wgULS(" 的链接", " 的連結"));
          });
          $bigtext = $("<span>").text(window.wgULS("取消对已删除页面的链接", "取消對已刪除頁面的連結")).css({
            "font-weight": "bold"
          });
          Morebits.status.info($bigtext[0], $link[0]);
        }
        $link = $("<a>").attr("href", mw.util.getUrl("Special:RandomInCategory/快速删除候选")).text(window.wgULS("单击前往下一个快速删除候选", "點擊前往下一個快速刪除候選"));
        Morebits.status.info("工具", $link[0]);
      },
      openUserTalkPage: (pageobj) => {
        pageobj.getStatusElement().unlink();
        const user = pageobj.getCreator();
        const params = pageobj.getCallbackParameters();
        const query = {
          action: "edit",
          preview: "yes",
          vanarticle: Morebits.pageNameNorm
        };
        const title = "User talk:".concat(user);
        if (params.normalized === "db" || Twinkle.getPref("promptForSpeedyDeletionSummary").includes(params.normalized)) {
          const $link = $("<a>").attr({
            href: mw.util.getUrl(title, query),
            target: "_blank",
            rel: "noopener noreferrer"
          }).css({
            "font-size": "125%",
            "font-weight": "bold"
          }).text(window.wgULS("点此打开User talk:", "點此打開User talk:") + user);
          const $bigtext = $("<span>").css({
            "font-size": "125%",
            "font-weight": "bold"
          }).text(window.wgULS("通知页面创建者", "通知頁面建立者"));
          Morebits.status.info($bigtext[0], $link[0]);
        } else {
          const statusIndicator = new Morebits.status(window.wgULS("打开用户", "打開使用者") + user + window.wgULS("的讨论页编辑窗口", "的討論頁編輯視窗"), window.wgULS("打开中…", "打開中…"));
          switch (Twinkle.getPref("userTalkPageMode")) {
            case "tab":
              window.open(mw.util.getUrl(title, query), "_blank", "noopener,noreferrer");
              break;
            case "blank":
              window.open(mw.util.getUrl(title, query), "_blank", "noopener,noreferrer,location=no,toolbar=no,status=no,directories=no,scrollbars=yes,width=1200,height=800");
              break;
            default:
              window.open(mw.util.getUrl(title, query), window.name === "twinklewarnwindow" ? "_blank" : "twinklewarnwindow", window.name === "twinklewarnwindow" ? "noopener,noreferrer," : "location=no,toolbar=no,status=no,directories=no,scrollbars=yes,width=1200,height=800");
              break;
          }
          statusIndicator.info("完成");
        }
      },
      deleteRedirectsMain: (apiobj) => {
        const xmlDoc = apiobj.getXML();
        const $snapshot = $(xmlDoc).find("redirects rd");
        const total = $snapshot.length;
        const statusIndicator = apiobj.statelem;
        if (!total) {
          statusIndicator.info(window.wgULS("未发现重定向", "未發現重新導向"));
          return;
        }
        statusIndicator.status("0%");
        let current = 0;
        const onsuccess = (apiobjInner) => {
          const now = "".concat(Number.parseInt(100 * ++current / total, 10), "%");
          statusIndicator.update(now);
          apiobjInner.statelem.unlink();
          if (current >= total) {
            statusIndicator.info("".concat(now, "（完成）"));
            Morebits.wiki.removeCheckpoint();
          }
        };
        Morebits.wiki.addCheckpoint();
        $snapshot.each((_key, value) => {
          const title = $(value).attr("title");
          const page = new Morebits.wiki.page(title, "".concat(window.wgULS('删除重定向 "', '刪除重新導向 "') + title, '"'));
          page.setEditSummary("[[LIB:CSD#G9|G9]]: 孤立页面：重定向到已删除页面“".concat(Morebits.pageNameNorm, "”"));
          page.setChangeTags(Twinkle.changeTags);
          page.deletePage(onsuccess);
        });
      }
    },
    user: {
      main: (pageobj) => {
        const statelem = pageobj.getStatusElement();
        if (!pageobj.exists()) {
          statelem.error(window.wgULS("页面不存在，可能已被删除", "頁面不存在，可能已被刪除"));
          return;
        }
        let text = pageobj.getPageText();
        const params = pageobj.getCallbackParameters();
        statelem.status(window.wgULS("检查页面已有标记…", "檢查頁面已有標記…"));
        const textNoSd = text.replace(/\{\{\s*(db(-\w*)?|d|delete|deletebecause|speedy|csd|速刪|速删|快删|快刪)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi, "");
        if (text !== textNoSd && !confirm(window.wgULS("在页面上找到快速删除模板，要移除并加入新的吗？", "在頁面上找到快速刪除模板，要移除並加入新的嗎？"))) {
          statelem.error(window.wgULS("快速删除模板已被置于页面中。", "快速刪除模板已被置於頁面中。"));
          return;
        }
        text = textNoSd;
        const copyvio = /(?:\{\{\s*(copyvio|侵权|侵權)[^{}]*?\}\})/i.exec(text);
        if (copyvio && !confirm(window.wgULS("著作权验证模板已被置于页面中，您是否仍想加入一个快速删除模板？", "著作權驗證模板已被置於頁面中，您是否仍想加入一個快速刪除模板？"))) {
          statelem.error(window.wgULS("页面中已有著作权验证模板。", "頁面中已有著作權驗證模板。"));
          return;
        }
        const xfd = /(?:\{\{([rsaiftcmv]fd|md1|proposed deletion)[^{}]*?\}\})/i.exec(text);
        if (xfd && !confirm(window.wgULS("删除相关模板{{", "刪除相關模板{{") + xfd[1] + window.wgULS("}}已被置于页面中，您是否仍想加入一个快速删除模板？", "}}已被置於頁面中，您是否仍想加入一個快速刪除模板？"))) {
          statelem.error(window.wgULS("页面已被提交至存废讨论。", "頁面已被提交至存廢討論。"));
          return;
        }
        const buildData = Twinkle.speedy.callbacks.getTemplateCodeAndParams(params);
        let [code] = buildData;
        [, params.utparams] = buildData;
        const thispage = new Morebits.wiki.page(mw.config.get("wgPageName"));
        if (Twinkle.getPref("markSpeedyPagesAsPatrolled")) {
          thispage.patrol();
        }
        if (mw.config.get("wgNamespaceNumber") === 10) {
          code = "<noinclude>".concat(code, "</noinclude>");
        }
        text = text.replace(/\{\{\s*([Nn]ew unreviewed article|[Uu]nreviewed|[Uu]serspace draft)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/g, "");
        if (mw.config.get("wgNamespaceNumber") === 6) {
          text = text.replace(/\{\{(mtc|(copy |move )?to ?(share|commons)|move to (ysarchives share|wikimedia commons)|copy to (ysarchives share|wikimedia commons))[^}]*\}\}/gi, "");
        }
        if (params.requestsalt) {
          code = "{{salt}}\n".concat(code);
        }
        let editsummary;
        if (params.normalizeds.length > 1) {
          editsummary = window.wgULS("请求快速删除（", "請求快速刪除（");
          var _iterator12 = _createForOfIteratorHelper(params.normalizeds), _step12;
          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
              const norm = _step12.value;
              if (norm !== "db") {
                editsummary += "[[LIB:CSD#".concat(norm.toUpperCase(), "|CSD ").concat(norm.toUpperCase(), "]]、");
              }
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
          editsummary = editsummary.slice(0, Math.max(0, editsummary.length - 1));
          editsummary += "）";
        } else if (params.normalizeds[0] === "db") {
          editsummary = window.wgULS("请求[[LIB:CSD|快速删除]]：", "請求[[LIB:CSD|快速刪除]]：") + params.templateParams[0]["1"];
        } else {
          editsummary = "".concat(window.wgULS("请求快速删除", "請求快速刪除"), "（[[LIB:CSD#").concat(params.normalizeds[0].toUpperCase(), "|CSD ").concat(params.normalizeds[0].toUpperCase(), "]]）");
        }
        if (params.blank) {
          text = code;
        } else {
          const ysarchives_page = new Morebits.wikitext.page(text);
          text = ysarchives_page.insertAfterTemplates("".concat(code, "\n"), Twinkle.hatnoteRegex).getText();
        }
        pageobj.setPageText(text);
        pageobj.setEditSummary(editsummary);
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setWatchlist(params.watch);
        pageobj.save(Twinkle.speedy.callbacks.user.tagComplete);
      },
      tagComplete: (pageobj) => {
        const params = pageobj.getCallbackParameters();
        if (params.usertalk) {
          const callback = (pageObj) => {
            let initialContrib = pageObj.getCreator();
            if (initialContrib === mw.config.get("wgUserName")) {
              Morebits.status.warn("您（".concat(initialContrib).concat(window.wgULS("）创建了该页，跳过通知", "）建立了該頁，跳過通知")));
              initialContrib = null;
            } else if (initialContrib === mw.config.get("wgTitle") && mw.config.get("wgNamespaceNumber") === 3) {
              Morebits.status.warn(window.wgULS("通知页面创建者：用户创建了自己的讨论页", "通知頁面建立者：使用者建立了自己的討論頁"));
              initialContrib = null;
            } else if (initialContrib === "A2093064-bot" && params.normalizeds[0] === "g15") {
              Morebits.status.warn(window.wgULS("通知页面创建者：由机器人创建，跳过通知", "通知頁面建立者：由機器人建立，跳過通知"));
              initialContrib = null;
            } else {
              const talkPageName = "User talk:".concat(initialContrib);
              const usertalkpage = new Morebits.wiki.page(talkPageName, "".concat(window.wgULS("通知页面创建者（", "通知頁面建立者（") + initialContrib, "）"));
              let notifytext;
              notifytext = "\n{{".concat("subst:", "db-notice|target=".concat(Morebits.pageNameNorm));
              notifytext += "|nowelcome=yes'}}--~~".concat("~~");
              let editsummary = "通知：";
              if (params.normalizeds.includes("g3")) {
                editsummary += "一攻击性页面";
              } else {
                editsummary += "页面[[".concat(Morebits.pageNameNorm, "]]");
              }
              editsummary += "快速删除提名";
              usertalkpage.setAppendText(notifytext);
              usertalkpage.setEditSummary(editsummary);
              usertalkpage.setChangeTags(Twinkle.changeTags);
              usertalkpage.setCreateOption("recreate");
              usertalkpage.setFollowRedirect(true, false);
              usertalkpage.append();
            }
            if (params.lognomination) {
              Twinkle.speedy.callbacks.user.addToLog(params, initialContrib);
            }
          };
          const thispage = new Morebits.wiki.page(Morebits.pageNameNorm);
          thispage.lookupCreation(callback);
        } else if (params.lognomination) {
          Twinkle.speedy.callbacks.user.addToLog(params, null);
        }
      },
      // note: this code is also invoked from twinkleimage
      // the params used are:
      //   for CSD: params.values, params.normalizeds  (note: normalizeds is an array)
      //   for DI: params.fromDI = true, params.templatename, params.normalized  (note: normalized is a string)
      addToLog: (params, initialContrib) => {
        const usl = new Morebits.userspaceLogger(Twinkle.getPref("speedyLogPageName"));
        usl.initialText = "这是该用户使用[[H:TW|Twinkle]]的速删模块做出的[[LIB:CSD|快速删除]]提名列表。\n\n若您不再想保留此日志，请在[[".concat(Twinkle.getPref("configPage"), "|参数设置]]中关掉，并使用[[LIB:CSD#O1|CSD O1]]提交快速删除。").concat(Morebits.userIsSysop ? "\n\n此日志并不记录用Twinkle直接执行的删除。" : "");
        let appendText = "# [[:".concat(Morebits.pageNameNorm, "]]：");
        if (params.fromDI) {
          appendText += "图版[[LIB:CSD#".concat(params.normalized.toUpperCase(), "|CSD ").concat(params.normalized.toUpperCase(), "]]（{{tl|").concat(params.templatename, "}}）");
        } else if (params.normalizeds.length > 1) {
          appendText += "多个理由（";
          var _iterator13 = _createForOfIteratorHelper(params.normalizeds), _step13;
          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
              const norm = _step13.value;
              appendText += "[[LIB:CSD#".concat(norm.toUpperCase(), "|").concat(norm.toUpperCase(), "]]、");
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }
          appendText = appendText.slice(0, Math.max(0, appendText.length - 1));
          appendText += "）";
        } else if (params.normalizeds[0] === "db") {
          appendText += "自定义理由";
        } else {
          appendText += "[[LIB:CSD#".concat(params.normalizeds[0].toUpperCase(), "|CSD ").concat(params.normalizeds[0].toUpperCase(), "]]");
        }
        if (params.requestsalt) {
          appendText += window.wgULS("；请求白纸保护", "；請求白紙保護");
        }
        if (initialContrib) {
          appendText += "；通知{{user|".concat(initialContrib, "}}");
        }
        appendText += " ~~".concat("~", "~~\n");
        usl.changeTags = Twinkle.changeTags;
        usl.log(appendText, window.wgULS("记录对[[", "記錄對[[") + Morebits.pageNameNorm + window.wgULS("]]的快速删除提名", "]]的快速刪除提名"));
      }
    }
  };
  Twinkle.speedy.getParameters = (form, values) => {
    let parameters = [];
    var _iterator14 = _createForOfIteratorHelper(values), _step14;
    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
        const value = _step14.value;
        const currentParams = [];
        let redimage;
        switch (value) {
          case "reason":
            if (form["csd.reason_1"]) {
              const dbrationale = form["csd.reason_1"].value;
              if (!dbrationale || !dbrationale.trim()) {
                mw.notify(window.wgULS("自定义理由：请指定理由。", "自訂理由：請指定理由。"), {
                  type: "warn",
                  tag: "twinklespeedy"
                });
                parameters = null;
                false;
                continue;
              }
              currentParams["1"] = dbrationale;
            }
            break;
          case "a2":
            if (form["csd.a2_pagename"]) {
              const otherpage = form["csd.a2_pagename"].value;
              if (!otherpage || !otherpage.trim()) {
                mw.notify(window.wgULS("CSD A2：请提供现有条目的名称。", "CSD A2：請提供現有條目的名稱。"), {
                  type: "warn",
                  tag: "twinklespeedy"
                });
                parameters = null;
                false;
                continue;
              }
              currentParams.pagename = otherpage;
            }
            break;
          case "g4":
            if (form["csd.g4_pagename"]) {
              const pagename = form["csd.g4_pagename"].value;
              if (!pagename || !pagename.trim()) {
                mw.notify(window.wgULS("CSD G4：请提供页面名称。", "CSD G4：請提供頁面名稱。"), {
                  type: "warn",
                  tag: "twinklespeedy"
                });
                parameters = null;
                false;
                continue;
              }
              currentParams.pagename = pagename;
            }
            break;
          case "f2":
            if (form["csd.f2_filename"]) {
              redimage = form["csd.f2_filename"].value;
              if (!redimage || !redimage.trim()) {
                mw.notify(window.wgULS("CSD F2：请提供另一文件的名称。", "CSD F2：請提供另一檔案的名稱。"), {
                  type: "warn",
                  tag: "twinklespeedy"
                });
                parameters = null;
                false;
                continue;
              }
              currentParams.filename = redimage.replace(new RegExp("^\\s*".concat(Morebits.namespaceRegex(6), ":"), "i"), "");
            }
            break;
          case "r1":
            if (form["csd.r1_type"]) {
              const redirtype = form["csd.r1_type"].value;
              if (!redirtype) {
                mw.notify(window.wgULS("CSD R1：请选择适用类型。", "CSD R1：請選擇適用類別。"), {
                  type: "warn",
                  tag: "twinklespeedy"
                });
                parameters = null;
                false;
                continue;
              }
              currentParams["1"] = redirtype;
            }
            break;
          case "r2":
            if (form["csd.r2_type"]) {
              const redirtype = form["csd.r2_type"].value;
              if (!redirtype) {
                mw.notify(window.wgULS("CSD R2：请选择适用类型。", "CSD R2：請選擇適用類別。"), {
                  type: "warn",
                  tag: "twinklespeedy"
                });
                parameters = null;
                false;
                continue;
              }
              currentParams["1"] = redirtype;
            }
            break;
          default:
            break;
        }
        parameters.push(currentParams);
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
    return parameters;
  };
  Twinkle.speedy.getUserTalkParameters = (normalized) => {
    const utparams = [];
    switch (normalized) {
      default:
        break;
    }
    return utparams;
  };
  Twinkle.speedy.resolveCsdValues = (e) => {
    var _e$target$form;
    const values = ((_e$target$form = e.target.form) !== null && _e$target$form !== void 0 ? _e$target$form : e.target).getChecked("csd");
    if (values.length === 0) {
      mw.notify(window.wgULS("请选择一个理据！", "請選擇一個理據！"), {
        type: "warn",
        tag: "twinklespeedy"
      });
      return null;
    }
    return values;
  };
  Twinkle.speedy.callback.evaluateSysop = (e) => {
    var _e$target$form2;
    const form = (_e$target$form2 = e.target.form) !== null && _e$target$form2 !== void 0 ? _e$target$form2 : e.target;
    if (e.target.type === "checkbox" || e.target.type === "text" || e.target.type === "select") {
      return;
    }
    const {
      tag_only
    } = form;
    if (tag_only && tag_only.checked) {
      Twinkle.speedy.callback.evaluateUser(e);
      return;
    }
    const values = Twinkle.speedy.resolveCsdValues(e);
    if (!values) {
      return;
    }
    const normalizeds = values.map((value) => {
      return Twinkle.speedy.normalizeHash[value];
    });
    let watchPage;
    let promptForSummary;
    var _iterator15 = _createForOfIteratorHelper(normalizeds), _step15;
    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
        const norm = _step15.value;
        if (Twinkle.getPref("watchSpeedyPages").includes(norm)) {
          watchPage = Twinkle.getPref("watchSpeedyExpiry");
        }
        if (Twinkle.getPref("promptForSpeedyDeletionSummary").includes(norm)) {
          promptForSummary = true;
        }
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }
    const params = {
      values,
      normalizeds,
      watch: watchPage,
      deleteTalkPage: form.talkpage && form.talkpage.checked,
      deleteRedirects: form.redirects.checked,
      openUserTalk: form.openusertalk.checked,
      promptForSummary,
      templateParams: Twinkle.speedy.getParameters(form, values)
    };
    if (!params.templateParams) {
      return;
    }
    Morebits.simpleWindow.setButtonsEnabled(false);
    Morebits.status.init(form);
    Twinkle.speedy.callbacks.sysop.main(params);
  };
  Twinkle.speedy.callback.evaluateUser = (e) => {
    var _e$target$form3;
    const form = (_e$target$form3 = e.target.form) !== null && _e$target$form3 !== void 0 ? _e$target$form3 : e.target;
    if (e.target.type === "checkbox" || e.target.type === "text" || e.target.type === "select") {
      return;
    }
    const values = Twinkle.speedy.resolveCsdValues(e);
    if (!values) {
      return;
    }
    const normalizeds = [];
    var _iterator16 = _createForOfIteratorHelper(values), _step16;
    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
        const value = _step16.value;
        const norm = Twinkle.speedy.normalizeHash[value];
        normalizeds.push(norm);
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }
    let watchPage = false;
    for (var _i7 = 0, _normalizeds = normalizeds; _i7 < _normalizeds.length; _i7++) {
      const norm = _normalizeds[_i7];
      if (Twinkle.getPref("watchSpeedyPages").includes(norm)) {
        watchPage = Twinkle.getPref("watchSpeedyExpiry");
        false;
        continue;
      }
    }
    let notifyuser = false;
    if (form.notify.checked) {
      var _iterator17 = _createForOfIteratorHelper(normalizeds), _step17;
      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
          const norm = _step17.value;
          if (Twinkle.getPref("notifyUserOnSpeedyDeletionNomination").includes(norm)) {
            notifyuser = true;
            false;
            continue;
          }
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
    }
    let csdlog = false;
    if (Twinkle.getPref("logSpeedyNominations")) {
      var _iterator18 = _createForOfIteratorHelper(normalizeds), _step18;
      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
          const norm = _step18.value;
          if (!Twinkle.getPref("noLogOnSpeedyNomination").includes(norm)) {
            csdlog = true;
            false;
            continue;
          }
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
    }
    const params = {
      values,
      normalizeds,
      watch: watchPage,
      usertalk: notifyuser,
      lognomination: csdlog,
      blank: form.blank.checked,
      requestsalt: form.salting.checked,
      templateParams: Twinkle.speedy.getParameters(form, values)
    };
    if (!params.templateParams) {
      return;
    }
    Morebits.simpleWindow.setButtonsEnabled(false);
    Morebits.status.init(form);
    Morebits.wiki.actionCompleted.redirect = mw.config.get("wgPageName");
    Morebits.wiki.actionCompleted.notice = window.wgULS("标记完成", "標記完成");
    const ysarchives_page = new Morebits.wiki.page(mw.config.get("wgPageName"), window.wgULS("标记页面", "標記頁面"));
    ysarchives_page.setCallbackParameters(params);
    ysarchives_page.load(Twinkle.speedy.callbacks.user.main);
  };
  Twinkle.addInitCallback(Twinkle.speedy, "speedy");
})(jQuery);
//! src/Twinkle/modules/twinklecopyvio.js
/*! Twinkle.js - twinklecopyvio.js */
(function twinklecopyvio() {
  Twinkle.copyvio = () => {
    if (mw.config.get("wgNamespaceNumber") < 0 || !mw.config.get("wgArticleId") || mw.config.get("wgNamespaceNumber") === 6 && (document.querySelector("#mw-sharedupload") || !document.querySelector("#mw-imagepage-section-filehistory") && !Morebits.isPageRedirect())) {
      return;
    }
    Twinkle.addPortletLink(Twinkle.copyvio.callback, window.wgULS("侵权", "侵權"), "tw-copyvio", window.wgULS("提报侵权页面", "提報侵權頁面"), "");
  };
  Twinkle.copyvio.callback = () => {
    const Window = new Morebits.simpleWindow(600, 350);
    Window.setTitle(window.wgULS("提报侵权页面", "提報侵權頁面"));
    Window.setScriptName("Twinkle");
    Window.addFooterLink(window.wgULS("侵权设置", "侵權設定"), "H:TW/PREF#copyvio");
    Window.addFooterLink(window.wgULS("Twinkle帮助", "Twinkle說明"), "H:TW/DOC#copyvio");
    const form = new Morebits.quickForm(Twinkle.copyvio.callback.evaluate);
    form.append({
      type: "textarea",
      label: window.wgULS("侵权来源：", "侵權來源："),
      name: "source"
    });
    form.append({
      type: "checkbox",
      list: [{
        label: window.wgULS("CSD G4: 曾经根据侵权审核删除后又重新创建的内容", "CSD G4: 曾經根據侵權審核刪除後又重新建立的內容"),
        value: "g4",
        name: "g4",
        tooltip: window.wgULS("同时以G4准则提报快速删除", "同時以G4準則提報快速刪除"),
        subgroup: [{
          name: "g4_pagename",
          type: "input",
          label: window.wgULS("前次删除的页面名称", "前次刪除的頁面名稱"),
          tooltip: window.wgULS("选填，若前次删除的页面名称不同，请提供", "選填，若前次刪除的頁面名稱不同，請提供")
        }]
      }, {
        label: window.wgULS("通知页面创建者", "通知頁面建立者"),
        value: "notify",
        name: "notify",
        tooltip: window.wgULS("在页面创建者讨论页上放置一通知模板。", "在頁面建立者討論頁上放置一通知模板。"),
        checked: true
      }]
    });
    form.append({
      type: "submit"
    });
    const result = form.render();
    Window.setContent(result);
    Window.display();
  };
  Twinkle.copyvio.callbacks = {
    tryTagging: (pageobj) => {
      const text = pageobj.getPageText();
      if (text.includes("{{Copyvio|")) {
        Morebits.status.error(window.wgULS("错误", "錯誤"), window.wgULS("页面已经标记侵权，请人工确认是否已经提报。", "頁面已經標記侵權，請人工確認是否已經提報。"));
      } else {
        Twinkle.copyvio.callbacks.taggingArticle(pageobj);
        const ysarchives_page = new Morebits.wiki.page(mw.config.get("wgPageName"));
        ysarchives_page.setCallbackParameters(pageobj.getCallbackParameters());
        ysarchives_page.lookupCreation(Twinkle.copyvio.callbacks.main);
      }
    },
    main: (pageobj) => {
      const params = pageobj.getCallbackParameters();
      const initialContrib = pageobj.getCreator();
      const ysarchives_page = new Morebits.wiki.page(params.logpage, window.wgULS("加入侵权记录项", "加入侵權記錄項"));
      ysarchives_page.setFollowRedirect(true);
      ysarchives_page.setCallbackParameters(params);
      ysarchives_page.load(Twinkle.copyvio.callbacks.copyvioList);
      if (params.notify) {
        const usertalkpage = new Morebits.wiki.page("User talk:".concat(initialContrib), "".concat(window.wgULS("通知页面创建者（", "通知頁面建立者（") + initialContrib, "）"));
        const notifytext = "\n{{".concat("subst:", "CopyvioNotice|".concat(mw.config.get("wgPageName"), "}}"));
        usertalkpage.setAppendText(notifytext);
        usertalkpage.setEditSummary(window.wgULS("通知：页面[[", "通知：頁面[[") + mw.config.get("wgPageName") + window.wgULS("]]疑似侵犯著作权", "]]疑似侵犯版權"));
        usertalkpage.setChangeTags(Twinkle.changeTags);
        usertalkpage.setCreateOption("recreate");
        usertalkpage.setWatchlist(Twinkle.getPref("copyvioWatchUser"));
        usertalkpage.setFollowRedirect(true, false);
        usertalkpage.append();
      }
    },
    taggingArticle: (pageobj) => {
      const params = pageobj.getCallbackParameters();
      const revisionId = mw.config.get("wgRevisionId") || mw.config.get("wgDiffNewId") || mw.config.get("wgCurRevisionId");
      let tag = "{{".concat("subst:", "Copyvio/auto|url=".concat(params.source.replace(/http/g, "&#104;ttp").replace(/\n+/g, "\n").replace(/^\s*([^*])/gm, "* $1").replace(/^\* $/m, ""), "|OldRevision=").concat(revisionId, "}}"));
      const text = pageobj.getPageText();
      const oldcsd = text.match(/\{\{\s*(db(-\w*)?|d|delete)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}/i);
      if (oldcsd && confirm(window.wgULS("在页面上找到快速删除模板，要保留吗？\n\n当页面同时侵犯著作权又符合快速删除标准时，应该优先走快速删除程序。\n单击“确认”以保留快速删除模板，若您认为快速删除理由不合，单击“取消”以移除快速删除模板。", "在頁面上找到快速刪除模板，要保留嗎？\n\n當頁面同時侵犯版權又符合快速刪除標準時，應該優先走快速刪除程序。\n點擊「確認」以保留快速刪除模板，若您認為快速刪除理由不合，點擊「取消」以移除快速刪除模板。"))) {
        tag = "".concat(oldcsd[0], "\n").concat(tag);
      }
      if (params.g4) {
        let speedyTag = "{{delete";
        speedyTag += "|g4";
        if (params.g4_pagename) {
          speedyTag += "|".concat(params.g4_pagename, "|c1=[[Special:Undelete/").concat(params.g4_pagename, "]]");
        } else {
          speedyTag += "|c1=[[Special:Undelete/".concat(mw.config.get("wgPageName"), "]]");
        }
        speedyTag += "}}";
        tag = "".concat(speedyTag, "\n").concat(tag);
      }
      pageobj.setPageText(tag);
      pageobj.setEditSummary(window.wgULS("此页面疑似侵犯著作权", "此頁面疑似侵犯版權"));
      pageobj.setChangeTags(Twinkle.changeTags);
      pageobj.setWatchlist(Twinkle.getPref("copyvioWatchPage"));
      pageobj.save();
      if (Twinkle.getPref("markCopyvioPagesAsPatrolled")) {
        pageobj.patrol();
      }
    },
    copyvioList: (pageobj) => {
      const text = pageobj.getPageText();
      let output = "";
      const date = /* @__PURE__ */ new Date();
      const dateHeaderRegex = new RegExp("^==+\\s*".concat(date.getUTCMonth() + 1, "月").concat(date.getUTCDate(), "日\\s*==+"), "mg");
      if (!dateHeaderRegex.exec(text)) {
        output = "\n\n==".concat(date.getUTCMonth() + 1, "月").concat(date.getUTCDate(), "日==");
      }
      output += "\n{{".concat("subst:", "CopyvioVFDRecord|".concat(mw.config.get("wgPageName"), "}}"));
      pageobj.setAppendText(output);
      pageobj.setEditSummary("加入[[".concat(mw.config.get("wgPageName"), "]]"));
      pageobj.setChangeTags(Twinkle.changeTags);
      pageobj.setCreateOption("recreate");
      pageobj.append();
    }
  };
  Twinkle.copyvio.callback.evaluate = (e) => {
    const params = Morebits.quickForm.getInputData(e.target);
    if (!params.source.trim()) {
      mw.notify(window.wgULS("请指定侵权来源", "請指定侵權來源"), {
        type: "warn",
        tag: "twinklecopyvio"
      });
      return;
    }
    Morebits.simpleWindow.setButtonsEnabled(false);
    Morebits.status.init(e.target);
    params.logpage = "LIB_talk:侵权提报";
    Morebits.wiki.addCheckpoint();
    Morebits.wiki.actionCompleted.redirect = mw.config.get("wgPageName");
    Morebits.wiki.actionCompleted.notice = window.wgULS("提报完成，将在几秒内刷新页面", "提報完成，將在幾秒內重新整理頁面");
    const ysarchives_page = new Morebits.wiki.page(mw.config.get("wgPageName"), window.wgULS("加入侵权模板到页面", "加入侵權模板到頁面"));
    ysarchives_page.setCallbackParameters(params);
    ysarchives_page.load(Twinkle.copyvio.callbacks.tryTagging);
    Morebits.wiki.removeCheckpoint();
  };
  Twinkle.addInitCallback(Twinkle.copyvio, "copyvio");
})();
//! src/Twinkle/modules/twinklexfd.js
/*! Twinkle.js - twinklexfd.js */
(function twinklexfd() {
  Twinkle.xfd = () => {
    if (mw.config.get("wgNamespaceNumber") < 0 || !mw.config.get("wgArticleId") || mw.config.get("wgNamespaceNumber") === 6 && (document.querySelector("#mw-sharedupload") || !document.querySelector("#mw-imagepage-section-filehistory") && !Morebits.isPageRedirect())) {
      return;
    }
    Twinkle.addPortletLink(Twinkle.xfd.callback, window.wgULS("提删", "提刪"), "tw-xfd", window.wgULS("提交删除讨论", "提交刪除討論"));
  };
  Twinkle.xfd.currentRationale = null;
  Twinkle.xfd.printRationale = () => {
    if (Twinkle.xfd.currentRationale) {
      Morebits.status.printUserText(Twinkle.xfd.currentRationale, window.wgULS("您的理由已在下方提供，若您想重新提交，请将其复制到一新窗口中：", "您的理由已在下方提供，若您想重新提交，請將其複製到一新視窗中："));
      Twinkle.xfd.currentRationale = null;
    }
  };
  Twinkle.xfd.callback = () => {
    const Window = new Morebits.simpleWindow(600, 350);
    Window.setTitle(window.wgULS("提交存废讨论", "提交存廢討論"));
    Window.setScriptName("Twinkle");
    Window.addFooterLink(window.wgULS("提删设置", "提刪設定"), "H:TW/PREF#xfd");
    Window.addFooterLink(window.wgULS("Twinkle帮助", "Twinkle說明"), "H:TW/DOC#xfd");
    const form = new Morebits.quickForm(Twinkle.xfd.callback.evaluate);
    const categories = form.append({
      type: "select",
      name: "category",
      label: window.wgULS("提交类型：", "提交類別："),
      event: Twinkle.xfd.callback.change_category
    });
    categories.append({
      type: "option",
      label: window.wgULS("页面存废讨论", "頁面存廢討論"),
      selected: mw.config.get("wgNamespaceNumber") === 0,
      value: "afd"
    });
    categories.append({
      type: "option",
      label: window.wgULS("文件存废讨论", "檔案存廢討論"),
      selected: mw.config.get("wgNamespaceNumber") === 6,
      value: "ffd"
    });
    form.append({
      type: "checkbox",
      list: [{
        label: window.wgULS("如可能，通知页面创建者", "如可能，通知頁面建立者"),
        value: "notify",
        name: "notify",
        tooltip: window.wgULS("在页面创建者讨论页上放置一通知模板。", "在頁面建立者討論頁上放置一通知模板。"),
        checked: true
      }]
    });
    form.append({
      type: "field",
      label: "工作区",
      name: "work_area"
    });
    form.append({
      type: "submit"
    });
    const result = form.render();
    Window.setContent(result);
    Window.display();
    const evt = document.createEvent("Event");
    evt.initEvent("change", true, true);
    result.category.dispatchEvent(evt);
  };
  Twinkle.xfd.callback.change_category = (e) => {
    const {
      value
    } = e.target;
    const {
      form
    } = e.target;
    const [old_area] = Morebits.quickForm.getElements(e.target.form, "work_area");
    let work_area = null;
    const oldreasontextbox = form.querySelector("textarea");
    let oldreason = oldreasontextbox ? oldreasontextbox.value : "";
    const appendReasonBox = (xfd_cat) => {
      switch (xfd_cat) {
        case "fwdcsd":
          oldreason = decodeURIComponent(document.querySelector("#delete-reason").textContent).replace(/\+/g, " ");
          break;
        case "fame":
          oldreason = Twinkle.getPref("afdFameDefaultReason");
          break;
        case "substub":
          oldreason = Twinkle.getPref("afdSubstubDefaultReason");
          break;
        default:
          break;
      }
      work_area.append({
        type: "textarea",
        name: "xfdreason",
        label: window.wgULS("提删理由：", "提刪理由："),
        value: oldreason,
        tooltip: window.wgULS("您可以使用wikitext，Twinkle将自动为您加入签名。若您使用批量提删功能，存废讨论页只会使用第一次提交的理由，但之后您仍需提供以用于删除通告模板的参数。", "您可以使用wikitext，Twinkle將自動為您加入簽名。若您使用批次提刪功能，存廢討論頁只會使用第一次提交的理由，但之後您仍需提供以用於刪除通告模板的參數。"),
        placeholder: window.wgULS("此值亦显示于页面的删除通告模板内，故务必提供此值，避免使用“同上”等用语。", "此值亦顯示於頁面的刪除通告模板內，故務必提供此值，避免使用「同上」等用語。")
      });
    };
    switch (value) {
      case "afd": {
        work_area = new Morebits.quickForm.element({
          type: "field",
          label: window.wgULS("页面存废讨论", "頁面存廢討論"),
          name: "work_area"
        });
        work_area.append({
          type: "checkbox",
          list: [{
            label: "使用&lt;noinclude&gt;包裹模板",
            value: "noinclude",
            name: "noinclude",
            checked: mw.config.get("wgNamespaceNumber") === 10 && mw.config.get("wgPageContentModel") !== "Scribunto",
            // Template namespace
            tooltip: window.wgULS("使其不会在被包含时出现。", "使其不會在被包含時出現。"),
            disabled: mw.config.get("wgPageContentModel") === "Scribunto"
          }]
        });
        const afd_category = work_area.append({
          type: "select",
          name: "xfdcat",
          label: window.wgULS("选择提删类型：", "選擇提刪類別："),
          event: Twinkle.xfd.callback.change_afd_category
        });
        let afd_cat = "delete";
        if (Twinkle.getPref("afdDefaultCategory") === "same") {
          if (localStorage.Twinkle_afdCategory === void 0) {
            localStorage.Twinkle_afdCategory = "delete";
          } else {
            afd_cat = localStorage.Twinkle_afdCategory;
          }
        }
        afd_category.append({
          type: "option",
          label: window.wgULS("删除", "刪除"),
          value: "delete",
          selected: afd_cat === "delete"
        });
        afd_category.append({
          type: "option",
          label: window.wgULS("合并", "合併"),
          value: "merge",
          selected: afd_cat === "merge"
        });
        if (Twinkle.getPref("FwdCsdToXfd")) {
          afd_category.append({
            type: "option",
            label: window.wgULS("转交自快速删除候选", "轉交自快速刪除候選"),
            value: "fwdcsd",
            selected: afd_cat === "fwdcsd"
          });
        }
        afd_category.append({
          type: "option",
          label: window.wgULS("批量关注度提删", "批次關注度提刪"),
          value: "fame",
          selected: afd_cat === "fame"
        });
        afd_category.append({
          type: "option",
          label: window.wgULS("批量小小作品提删", "批次小小作品提刪"),
          value: "substub",
          selected: afd_cat === "substub"
        });
        afd_category.append({
          type: "option",
          label: window.wgULS("批量其他提删", "批次其他提刪"),
          value: "batch",
          selected: afd_cat === "batch"
        });
        work_area.append({
          type: "input",
          name: "mergeinto",
          label: window.wgULS("合并到：", "合併到："),
          hidden: true
        });
        appendReasonBox(afd_cat);
        work_area.append({
          type: "textarea",
          name: "fwdcsdreason",
          label: window.wgULS("转交理由：", "轉交理由："),
          tooltip: window.wgULS("您可以使用wikitext，Twinkle将自动为您加入签名。", "您可以使用wikitext，Twinkle將自動為您加入簽名。"),
          hidden: true
        });
        work_area = work_area.render();
        old_area.parentNode.replaceChild(work_area, old_area);
        const evt = document.createEvent("Event");
        evt.initEvent("change", true, true);
        form.xfdcat.dispatchEvent(evt);
        break;
      }
      case "ffd":
        work_area = new Morebits.quickForm.element({
          type: "field",
          label: window.wgULS("文件存废讨论", "檔案存廢討論"),
          name: "work_area"
        });
        appendReasonBox("ffd");
        work_area = work_area.render();
        old_area.parentNode.replaceChild(work_area, old_area);
        break;
      default:
        work_area = new Morebits.quickForm.element({
          type: "field",
          label: window.wgULS("未定义", "未定義"),
          name: "work_area"
        });
        work_area = work_area.render();
        old_area.parentNode.replaceChild(work_area, old_area);
        break;
    }
    form.notify.checked = true;
    form.notify.disabled = false;
  };
  Twinkle.xfd.callback.change_afd_category = (e) => {
    switch (e.target.value) {
      case "merge":
        e.target.form.mergeinto.parentElement.removeAttribute("hidden");
        e.target.form.fwdcsdreason.parentElement.setAttribute("hidden", "");
        e.target.form.mergeinto.previousElementSibling.innerHTML = window.wgULS("合并到：", "合併到：");
        break;
      case "fwdcsd":
        e.target.form.mergeinto.parentElement.removeAttribute("hidden");
        e.target.form.fwdcsdreason.parentElement.removeAttribute("hidden");
        e.target.form.mergeinto.previousElementSibling.innerHTML = "提交人：";
        e.target.form.xfdreason.value = decodeURIComponent(document.querySelector("#delete-reason").textContent).replace(/\+/g, " ");
        break;
      case "fame":
        e.target.form.mergeinto.parentElement.setAttribute("hidden", "");
        e.target.form.fwdcsdreason.parentElement.setAttribute("hidden", "");
        e.target.form.xfdreason.value = Twinkle.getPref("afdFameDefaultReason");
        break;
      case "substub":
        e.target.form.mergeinto.parentElement.setAttribute("hidden", "");
        e.target.form.fwdcsdreason.parentElement.setAttribute("hidden", "");
        e.target.form.xfdreason.value = Twinkle.getPref("afdSubstubDefaultReason");
        break;
      default:
        e.target.form.mergeinto.parentElement.setAttribute("hidden", "");
        e.target.form.fwdcsdreason.parentElement.setAttribute("hidden", "");
    }
    if (Twinkle.getPref("afdDefaultCategory") === "same") {
      localStorage.Twinkle_afdCategory = e.target.value;
    }
  };
  Twinkle.xfd.callbacks = {
    afd: {
      main: (tagging_page) => {
        const params = tagging_page.getCallbackParameters();
        Twinkle.xfd.callbacks.afd.taggingArticle(tagging_page);
        const discussion_page = new Morebits.wiki.page(params.logpage, window.wgULS("加入讨论到当日列表", "加入討論到當日列表"));
        discussion_page.setFollowRedirect(true);
        discussion_page.setCallbackParameters(params);
        discussion_page.load(Twinkle.xfd.callbacks.afd.todaysList);
        if (params.notify) {
          if (params.creator === mw.config.get("wgUserName")) {
            Morebits.status.warn("".concat(window.wgULS("通知页面创建者（", "通知頁面建立者（") + params.creator, "）"), window.wgULS("您创建了该页，跳过通知", "您建立了該頁，跳過通知"));
            params.creator = null;
          } else {
            const talkPageName = "User talk:".concat(params.creator);
            const usertalkpage = new Morebits.wiki.page(talkPageName, "".concat(window.wgULS("通知页面创建者（", "通知頁面建立者（") + params.creator, "）"));
            const notifytext = "\n{{".concat("subst:").concat("AFDNote|".concat(Morebits.pageNameNorm, "}}--~~"), "~~");
            usertalkpage.setAppendText(notifytext);
            usertalkpage.setEditSummary("通知：页面[[".concat(Morebits.pageNameNorm, "]]存废讨论提名"));
            usertalkpage.setChangeTags(Twinkle.changeTags);
            usertalkpage.setCreateOption("recreate");
            usertalkpage.setWatchlist(Twinkle.getPref("xfdWatchUser"));
            usertalkpage.setFollowRedirect(true, false);
            usertalkpage.append();
          }
          if (params.lognomination) {
            Twinkle.xfd.callbacks.addToLog(params, params.creator);
          }
        } else if (params.lognomination) {
          Twinkle.xfd.callbacks.addToLog(params, null);
        }
      },
      taggingArticle: (pageobj) => {
        let text = pageobj.getPageText();
        const params = pageobj.getCallbackParameters();
        let tag = "{{vfd|".concat(Morebits.string.formatReasonText(params.xfdreason));
        if (Morebits.isPageRedirect()) {
          tag += "|r";
        }
        tag += "|date={{".concat("subst:", "#time:Y/m/d}}}}");
        if (params.noinclude) {
          tag = "<noinclude>".concat(tag, "</noinclude>");
          if (text.indexOf("{|") === 0) {
            tag += "\n";
          }
        } else {
          tag += "\n";
        }
        const textNoSd = text.replace(/\{\{\s*(db(-\w*)?|d|delete|(?:hang|hold)[- ]?on)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi, "");
        if (text !== textNoSd && confirm(window.wgULS("在页面上找到快速删除模板，要移除吗？", "在頁面上找到快速刪除模板，要移除嗎？"))) {
          text = textNoSd;
        }
        const textNoNotMandarin = text.replace(/\{\{\s*(NotMandarin|Notchinese|非中文|非現代漢語|非现代汉语|非現代標準漢語|非现代标准汉语)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi, "");
        if (text !== textNoNotMandarin && confirm(window.wgULS("在页面上找到非现代标准汉语模板，要移除吗？", "在頁面上找到非現代標準漢語模板，要移除嗎？"))) {
          text = textNoNotMandarin;
        }
        const textNoAfc = text.replace(/{{\s*AFC submission\s*\|\s*\|[^}]*?}}\s*/gi, "");
        if (text !== textNoAfc && confirm(window.wgULS("在页面上找到AFC提交模板，要移除吗？", "在頁面上找到AFC提交模板，要移除嗎？"))) {
          text = textNoAfc;
        }
        if (Twinkle.getPref("markXfdPagesAsPatrolled")) {
          pageobj.patrol();
        }
        const ysarchives_page = new Morebits.wikitext.page(text);
        text = ysarchives_page.insertAfterTemplates(tag, Twinkle.hatnoteRegex).getText();
        pageobj.setPageText(text);
        pageobj.setEditSummary("".concat(window.wgULS("页面存废讨论：[[", "頁面存廢討論：[[") + params.logpage, "#").concat(Morebits.pageNameNorm, "]]"));
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setWatchlist(Twinkle.getPref("xfdWatchPage"));
        pageobj.save();
      },
      todaysList: (pageobj) => {
        let text = pageobj.getPageText();
        const params = pageobj.getCallbackParameters();
        let type = "";
        let to = "";
        switch (params.xfdcat) {
          case "fwdcsd":
          case "merge":
            to = params.mergeinto;
          default:
            type = params.xfdcat;
            break;
        }
        let append = true;
        switch (type) {
          case "fame":
          case "substub":
          case "batch": {
            const commentText = "<!-- Twinkle: User:".concat(mw.config.get("wgUserName"), " 的 ").concat(type, " 提删插入点，请勿更改或移除此行，除非不再于此页面提删 -->");
            let newText = "===[[:".concat(Morebits.pageNameNorm, "]]===");
            if (type === "fame") {
              newText += "\n{{Findsources|".concat(Morebits.pageNameNorm, "}}");
            }
            if (text.includes(commentText)) {
              text = text.replace(commentText, "".concat(newText, "\n\n").concat(commentText));
              pageobj.setPageText(text);
              append = false;
            } else {
              const safesubst = "safesubst";
              const appendText = "\n{{".concat(safesubst).concat(":SafeAfdHead}}\n".concat({
                fame: '== 30天后仍挂有{{tl|notability}}模板的条目 ==\n<span style="font-size: smaller;">（已挂[[Template:notability|不符收录标准模板]]30天）</span>',
                substub: '== 30天后仍挂有{{tl|substub}}模板的条目 ==\n<span style="font-size: smaller;">（已挂[[Template:substub|小小条目模板]]30天）</span>',
                batch: "== 批量提删 =="
              }[type], "\n").concat(newText, "\n\n").concat(commentText, "\n----\n:建议：删除前述页面；理由：").concat(Morebits.string.formatReasonText(params.xfdreason), "\n提报以上").concat({
                fame: "<u>不符合收录标准</u>条目",
                substub: "<u>长度过短</u>条目",
                batch: "页面"
              }[type], '的求闻编者及时间：<br id="no-new-title">~~').concat("~~"));
              pageobj.setAppendText(appendText);
            }
            break;
          }
          default:
            pageobj.setAppendText("\n{{".concat("subst:", "DRItem|Type=".concat(type, "|DRarticles=").concat(Morebits.pageNameNorm, "|Reason=").concat(Morebits.string.formatReasonText(params.xfdreason)).concat(params.fwdcsdreason.trim() === "" ? "" : "<br>\n转交理由：".concat(params.fwdcsdreason), "|To=").concat(to, "}}~~").concat("~~")));
            break;
        }
        pageobj.setEditSummary("加入[[".concat(Morebits.pageNameNorm, "]]"));
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setWatchlist(Twinkle.getPref("xfdWatchDiscussion"));
        pageobj.setCreateOption("recreate");
        if (append) {
          pageobj.append();
        } else {
          pageobj.save();
        }
        Twinkle.xfd.currentRationale = null;
      },
      lookupCreation: (target_page) => {
        target_page.getStatusElement().info("完成");
        const params = target_page.getCallbackParameters();
        params.creator = target_page.getCreator();
        const tagging_page = new Morebits.wiki.page(mw.config.get("wgPageName"), window.wgULS("加入存废讨论模板到页面", "加入存廢討論模板到頁面"));
        tagging_page.setFollowRedirect(false);
        tagging_page.setCallbackParameters(params);
        tagging_page.load(Twinkle.xfd.callbacks.afd.tryTagging);
      },
      tryTagging: (tagging_page) => {
        const statelem = tagging_page.getStatusElement();
        if (!tagging_page.exists()) {
          statelem.error(window.wgULS("页面不存在，可能已被删除", "頁面不存在，可能已被刪除"));
          return;
        }
        const text = tagging_page.getPageText();
        const xfd = /(?:\{\{([rsaiftcmv]fd|md1|proposed deletion)[^{}]*?\}\})/i.exec(text);
        if (xfd && !confirm(window.wgULS("删除相关模板{{", "刪除相關模板{{") + xfd[1] + window.wgULS("}}已被置于页面中，您是否仍想继续提报？", "}}已被置於頁面中，您是否仍想繼續提報？"))) {
          statelem.error(window.wgULS("页面已被提交至存废讨论。", "頁面已被提交至存廢討論。"));
          return;
        }
        const copyvio = /(?:\{\{\s*(copyvio)[^{}]*?\}\})/i.exec(text);
        if (copyvio) {
          statelem.error(window.wgULS("页面中已有著作权验证模板。", "頁面中已有著作權驗證模板。"));
          return;
        }
        Twinkle.xfd.callbacks.afd.main(tagging_page);
      }
    },
    ffd: {
      main: (tagging_page) => {
        const params = tagging_page.getCallbackParameters();
        Twinkle.xfd.callbacks.ffd.taggingImage(tagging_page);
        const ysarchives_page = new Morebits.wiki.page(params.logpage, window.wgULS("加入讨论到当日列表", "加入討論到當日列表"));
        ysarchives_page.setFollowRedirect(true);
        ysarchives_page.setCallbackParameters(params);
        ysarchives_page.load(Twinkle.xfd.callbacks.ffd.todaysList);
        if (params.notify) {
          if (params.creator === mw.config.get("wgUserName")) {
            Morebits.status.warn("".concat(window.wgULS("通知页面创建者（", "通知頁面建立者（") + params.creator, "）"), window.wgULS("您创建了该页，跳过通知", "您建立了該頁，跳過通知"));
            return;
          }
          const talkPageName = "User talk:".concat(params.creator);
          const usertalkpage = new Morebits.wiki.page(talkPageName, "".concat(window.wgULS("通知页面创建者（", "通知頁面建立者（") + params.creator, "）"));
          const notifytext = "\n{{".concat("subst:", "idw|File:".concat(mw.config.get("wgTitle"), "}}"), "--~~", "~~");
          usertalkpage.setAppendText(notifytext);
          usertalkpage.setEditSummary("通知：文件[[".concat(Morebits.pageNameNorm, "]]存废讨论提名"));
          usertalkpage.setChangeTags(Twinkle.changeTags);
          usertalkpage.setCreateOption("recreate");
          usertalkpage.setWatchlist(Twinkle.getPref("xfdWatchUser"));
          usertalkpage.setFollowRedirect(true, false);
          usertalkpage.append();
          if (params.lognomination) {
            Twinkle.xfd.callbacks.addToLog(params, params.creator);
          }
        } else if (params.lognomination) {
          Twinkle.xfd.callbacks.addToLog(params, null);
        }
      },
      taggingImage: (pageobj) => {
        const text = pageobj.getPageText();
        const params = pageobj.getCallbackParameters();
        pageobj.setPageText("{{ifd|".concat(Morebits.string.formatReasonText(params.xfdreason), "|date={{").concat("subst:", "#time:c}}}}\n".concat(text)));
        pageobj.setEditSummary("".concat(window.wgULS("文件存废讨论：[[", "檔案存廢討論：[[") + params.logpage, "#").concat(Morebits.pageNameNorm, "]]"));
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setWatchlist(Twinkle.getPref("xfdWatchPage"));
        pageobj.setCreateOption("recreate");
        pageobj.save();
      },
      todaysList: (pageobj) => {
        const params = pageobj.getCallbackParameters();
        pageobj.setAppendText("\n{{".concat("subst:", "IfdItem|Filename=".concat(mw.config.get("wgTitle"), "|Uploader=").concat(params.creator, "|Reason=").concat(Morebits.string.formatReasonText(params.xfdreason), "}}--~~").concat("~~")));
        pageobj.setEditSummary("加入[[".concat(Morebits.pageNameNorm, "]]"));
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setWatchlist(Twinkle.getPref("xfdWatchDiscussion"));
        pageobj.setCreateOption("recreate");
        pageobj.append(() => {
          Twinkle.xfd.currentRationale = null;
        });
      },
      lookupCreation: (target_page) => {
        target_page.getStatusElement().info("完成");
        const params = target_page.getCallbackParameters();
        params.creator = target_page.getCreator();
        const tagging_page = new Morebits.wiki.page(mw.config.get("wgPageName"), window.wgULS("加入存废讨论模板到文件描述页", "加入存廢討論模板到檔案描述頁"));
        tagging_page.setFollowRedirect(false);
        tagging_page.setCallbackParameters(params);
        tagging_page.load(Twinkle.xfd.callbacks.ffd.tryTagging);
      },
      tryTagging: (tagging_page) => {
        const statelem = tagging_page.getStatusElement();
        if (!tagging_page.exists()) {
          statelem.error(window.wgULS("页面不存在，可能已被删除", "頁面不存在，可能已被刪除"));
          return;
        }
        const text = tagging_page.getPageText();
        const xfd = /(?:\{\{([rsaiftcmv]fd|md1|proposed deletion)[^{}]*?\}\})/i.exec(text);
        if (xfd && !confirm(window.wgULS("删除相关模板{{", "刪除相關模板{{") + xfd[1] + window.wgULS("}}已被置于页面中，您是否仍想继续提报？", "}}已被置於頁面中，您是否仍想繼續提報？"))) {
          statelem.error(window.wgULS("页面已被提交至存废讨论。", "頁面已被提交至存廢討論。"));
          return;
        }
        Twinkle.xfd.callbacks.ffd.main(tagging_page);
      }
    },
    addToLog: (params, initialContrib) => {
      const editsummary = window.wgULS("记录对[[", "記錄對[[") + Morebits.pageNameNorm + window.wgULS("]]的存废讨论提名", "]]的存廢討論提名");
      const usl = new Morebits.userspaceLogger(Twinkle.getPref("xfdLogPageName"));
      usl.initialText = window.wgULS("这是该用户使用[[H:TW|Twinkle]]的提删模块做出的[[LIB:XFD|存废讨论]]提名列表。\n\n若您不再想保留此日志，请在[[".concat(Twinkle.getPref("configPage"), "|参数设置]]中关掉，并使用[[LIB:CSD#O1|CSD O1]]提交快速删除。"), "這是該使用者使用[[H:TW|Twinkle]]的提刪模塊做出的[[LIB:XFD|存廢討論]]提名列表。\n\n若您不再想保留此日誌，請在[[".concat(Twinkle.getPref("configPage"), "|偏好設定]]中關掉，並使用[[LIB:CSD#O1|CSD O1]]提交快速刪除。"));
      let xfdCatName;
      switch (params.xfdcat) {
        case "delete":
          xfdCatName = window.wgULS("删除", "刪除");
          break;
        case "merge":
          xfdCatName = window.wgULS("合并到", "合併到");
          break;
        case "fwdcsd":
          xfdCatName = window.wgULS("转交自快速删除候选", "轉交自快速刪除候選");
          break;
        case "fame":
          xfdCatName = window.wgULS("批量关注度提删", "批次關注度提刪");
          break;
        case "substub":
          xfdCatName = window.wgULS("批量小小作品提删", "批次小小作品提刪");
          break;
        case "batch":
          xfdCatName = window.wgULS("批量其他提删", "批次其他提刪");
          break;
        default:
          xfdCatName = window.wgULS("文件存废讨论", "檔案存廢討論");
          break;
      }
      let appendText = "# [[:".concat(Morebits.pageNameNorm, "]]");
      if (mw.config.get("wgNamespaceNumber") === 6) {
        appendText += "（[{{fullurl:Special:Log|page=".concat(mw.util.wikiUrlencode(mw.config.get("wgPageName")), "}} ").concat(window.wgULS("日志", "日誌"), "]）");
      }
      appendText += "：".concat(xfdCatName);
      if (params.xfdcat === "merge") {
        appendText += "[[:".concat(params.mergeinto, "]]");
      }
      appendText += "。";
      if (params.xfdreason) {
        appendText += "'''".concat(params.xfdcat === "fwdcsd" ? window.wgULS("原删除理据", "原刪除理據") : window.wgULS("理据", "理據"), "'''：").concat(Morebits.string.formatReasonForLog(params.xfdreason));
        appendText = Morebits.string.appendPunctuation(appendText);
      }
      if (params.fwdcsdreason) {
        appendText += "'''".concat(params.xfdcat === "fwdcsd" ? window.wgULS("转交理据", "轉交理據") : window.wgULS("理据", "理據"), "'''：").concat(Morebits.string.formatReasonForLog(params.fwdcsdreason));
        appendText = Morebits.string.appendPunctuation(appendText);
      }
      if (initialContrib) {
        appendText += "；通知{{user|".concat(initialContrib, "}}");
      }
      appendText += " ~~".concat("~~", "~\n");
      usl.changeTags = Twinkle.changeTags;
      usl.log(appendText, editsummary);
    }
  };
  Twinkle.xfd.callback.evaluate = (e) => {
    const params = Morebits.quickForm.getInputData(e.target);
    if (params.xfdcat === "merge" && params.mergeinto.trim() === "") {
      mw.notify(window.wgULS("请提供合并目标！", "請提供合併目標！"), {
        type: "warn",
        tag: "twinklexfd"
      });
      return;
    }
    Morebits.simpleWindow.setButtonsEnabled(false);
    Morebits.status.init(e.target);
    Twinkle.xfd.currentRationale = params.xfdreason;
    Morebits.status.onError(Twinkle.xfd.printRationale);
    if (!params.category) {
      Morebits.status.error("错误", "未定义的动作");
      return;
    }
    let target_page;
    const date = new Morebits.date();
    switch (params.category) {
      case "afd":
        params.logpage = "LIB_talk:存废讨论/记录/".concat(date.format("YYYY/MM/DD", "utc"));
        params.lognomination = Twinkle.getPref("logXfdNominations") && !Twinkle.getPref("noLogOnXfdNomination").includes(params.xfdcat);
        Morebits.wiki.addCheckpoint();
        Morebits.wiki.actionCompleted.redirect = params.logpage;
        Morebits.wiki.actionCompleted.notice = window.wgULS("提名完成，重定向到讨论页", "提名完成，重新導向到討論頁");
        target_page = new Morebits.wiki.page(mw.config.get("wgPageName"), window.wgULS("获取页面创建信息", "取得頁面建立資訊"));
        target_page.setCallbackParameters(params);
        if (mw.config.get("wgPageContentModel") === "wikitext") {
          target_page.setLookupNonRedirectCreator(true);
        }
        target_page.lookupCreation(Twinkle.xfd.callbacks.afd.lookupCreation);
        Morebits.wiki.removeCheckpoint();
        break;
      case "ffd": {
        params.logpage = "LIB_talk:存废讨论/记录/".concat(date.format("YYYY/MM/DD", "utc"));
        params.lognomination = Twinkle.getPref("logXfdNominations") && !Twinkle.getPref("noLogOnXfdNomination").includes("ffd");
        Morebits.wiki.addCheckpoint();
        Morebits.wiki.actionCompleted.redirect = params.logpage;
        Morebits.wiki.actionCompleted.notice = window.wgULS("提名完成，重定向到讨论页", "提名完成，重新導向到討論頁");
        const ysarchives_page = new Morebits.wiki.page(mw.config.get("wgPageName"), window.wgULS("获取页面创建信息", "取得頁面建立資訊"));
        ysarchives_page.setCallbackParameters(params);
        ysarchives_page.setLookupNonRedirectCreator(true);
        ysarchives_page.lookupCreation(Twinkle.xfd.callbacks.ffd.lookupCreation);
        Morebits.wiki.removeCheckpoint();
        break;
      }
      default:
        mw.notify("twinklexfd：未定义的类别", {
          type: "warn",
          tag: "twinklexfd"
        });
        break;
    }
  };
  Twinkle.addInitCallback(Twinkle.xfd, "xfd");
})();
//! src/Twinkle/modules/twinkleimage.js
/*! Twinkle.js - twinkleimage.js */
(function twinkleimage() {
  Twinkle.image = () => {
    if (mw.config.get("wgNamespaceNumber") === 6 && !document.querySelector("#mw-sharedupload") && document.querySelector("#mw-imagepage-section-filehistory")) {
      Twinkle.addPortletLink(Twinkle.image.callback, window.wgULS("图权", "圖權"), "tw-di", window.wgULS("提交文件快速删除", "提交檔案快速刪除"));
    }
  };
  Twinkle.image.callback = () => {
    const Window = new Morebits.simpleWindow(600, 330);
    Window.setTitle(window.wgULS("文件快速删除候选", "檔案快速刪除候選"));
    Window.setScriptName("Twinkle");
    Window.addFooterLink(window.wgULS("快速删除条例", "快速刪除條例"), "LIB:CSD");
    Window.addFooterLink(window.wgULS("图权设置", "圖權設定"), "H:TW/PREF#image");
    Window.addFooterLink(window.wgULS("Twinkle帮助", "Twinkle說明"), "H:TW/DOC#image");
    const form = new Morebits.quickForm(Twinkle.image.callback.evaluate);
    form.append({
      type: "checkbox",
      list: [{
        label: window.wgULS("通知上传者", "通知上傳者"),
        value: "notify",
        name: "notify",
        tooltip: window.wgULS("若您在标记同一用户的很多文件，请取消此复选框以避免发送过多消息。CSD F5永远不会通知。", "若您在標記同一使用者的很多檔案，請取消此核取方塊以避免發送過多訊息。CSD F5永遠不會通知。"),
        checked: Twinkle.getPref("notifyUserOnDeli")
      }]
    });
    const field = form.append({
      type: "field",
      label: window.wgULS("需要的动作", "需要的動作")
    });
    field.append({
      type: "radio",
      name: "type",
      list: [{
        label: window.wgULS("明显侵权之文件（CSD F1）", "明顯侵權之檔案（CSD F1）"),
        value: "no permission",
        tooltip: window.wgULS("上传者宣称拥有，而在其他来源找到的文件，或从侵权的来源获取的文件。", "上傳者宣稱擁有，而在其他來源找到的檔案，或從侵權的來源取得的檔案。"),
        subgroup: {
          name: "f1_source",
          type: "textarea",
          label: window.wgULS("侵权来源：", "侵權來源：")
        }
      }, {
        label: window.wgULS("来源不明（CSD F3）", "來源不明（CSD F3）"),
        value: "no source",
        checked: true,
        tooltip: window.wgULS("本文件并未注明原始出处", "本檔案並未註明原始出處")
      }, {
        label: window.wgULS("未知著作权或著作权无法被查证（CSD F3）", "未知著作權或著作權無法被查證（CSD F3）"),
        value: "no license",
        tooltip: window.wgULS("本文件缺少著作权信息，或声称的著作权信息无法被查证", "本檔案缺少著作權資訊，或聲稱的著作權資訊無法被查證")
      }, {
        label: window.wgULS("来源不明且未知著作权或著作权无法被查证（CSD F3）", "來源不明且未知著作權或著作權無法被查證（CSD F3）"),
        value: "no source no license",
        tooltip: window.wgULS("本文件并未注明原始出处，且本文件缺少著作权信息或声称的著作权信息无法被查证", "本檔案並未註明原始出處，且本檔案缺少著作權資訊或聲稱的著作權資訊無法被查證")
      }, {
        label: window.wgULS("可被替代的非自由著作权文件（CSD F4）", "可被替代的非自由著作權檔案（CSD F4）"),
        value: "replaceable fair use",
        tooltip: window.wgULS("文件仅用于描述、识别或评论文件中展示的事物，或仅用作插图，且满足以下四个条件之一。若给出了其他合理使用依据，不适用本条。如对文件的可替代性存在争议，应交文件存废讨论处理。本条也不适用于正在或曾经由文件存废讨论处理过的文件。", "檔案僅用於描述、辨識或評論檔案中展示的事物，或僅用作插圖，且滿足以下四個條件之一。若給出了其他合理使用依據，不適用本條。如對檔案的可替代性存在爭議，應交檔案存廢討論處理。本條也不適用於正在或曾經由檔案存廢討論處理過的檔案。"),
        subgroup: {
          name: "f4_type",
          type: "select",
          label: window.wgULS("适用类型：", "適用類別："),
          style: "width: 85%;",
          list: [{
            type: "option",
            label: window.wgULS("请选择", "請選擇"),
            value: ""
          }, {
            type: "option",
            label: window.wgULS("有其他自由著作权文件展示相同的事物", "有其他自由著作權檔案展示相同的事物"),
            value: "1"
          }, {
            type: "option",
            label: window.wgULS("文件描述的是在世或假定在世人物、仍然存在的建筑、室外雕塑或仍然在售的商品，且预计自行拍摄的照片不受他人著作权保护", "檔案描述的是在世或假定在世人物、仍然存在的建築、室外雕塑或仍然在售的商品，且預計自行拍攝的相片不受他人著作權保護"),
            value: "2"
          }, {
            type: "option",
            label: window.wgULS("文件为可自行绘制的地图或图表", "檔案為可自行繪製的地圖或圖表"),
            value: "3"
          }, {
            type: "option",
            label: window.wgULS("文件来自商业图片机构（如Getty）", "檔案來自商業圖片機構（如Getty）"),
            value: "4"
          }]
        }
      }, {
        label: window.wgULS("没有被条目使用的非自由著作权文件（CSD F5）", "沒有被條目使用的非自由著作權檔案（CSD F5）"),
        value: "orphaned fair use",
        tooltip: window.wgULS("本文件为非自由著作权且没有被条目使用", "本檔案為非自由著作權且沒有被條目使用")
      }, {
        label: window.wgULS("没有填写任何合理使用依据的非自由著作权文件（CSD F5）", "沒有填寫任何合理使用依據的非自由著作權檔案（CSD F5）"),
        value: "no fair use rationale",
        tooltip: window.wgULS("不适用于有争议但完整的合理使用依据。若非自由著作权文件只有部分条目的使用依据，但同时被使用于未提供合理使用依据的条目，则本条例也不适用。", "不適用於有爭議但完整的合理使用依據。若非自由著作權檔案只有部分條目的使用依據，但同時被使用於未提供合理使用依據的條目，則本條例也不適用。")
      }]
    });
    form.append({
      type: "submit"
    });
    const result = form.render();
    Window.setContent(result);
    Window.display();
    const evt = document.createEvent("Event");
    evt.initEvent("change", true, true);
    result.type[0].dispatchEvent(evt);
  };
  Twinkle.image.callback.evaluate = (event) => {
    let type;
    let notify = event.target.notify.checked;
    const types = event.target.type;
    var _iterator19 = _createForOfIteratorHelper(types), _step19;
    try {
      for (_iterator19.s(); !(_step19 = _iterator19.n()).done; ) {
        const type_ = _step19.value;
        if (type_.checked) {
          type = type_.values;
          break;
        }
      }
    } catch (err) {
      _iterator19.e(err);
    } finally {
      _iterator19.f();
    }
    let csdcrit;
    switch (type) {
      case "no source":
        csdcrit = "f3";
        break;
      case "no license":
        csdcrit = "f3";
        break;
      case "no source no license":
        csdcrit = "f3";
        break;
      case "orphaned fair use":
        csdcrit = "f5";
        notify = false;
        break;
      case "no permission":
        csdcrit = "f1";
        break;
      case "no fair use rationale":
        csdcrit = "f5";
        break;
      case "replaceable fair use":
        csdcrit = "f4";
        break;
      default:
        throw new Error("Twinkle.image.callback.evaluate：未知条款");
    }
    const lognomination = Twinkle.getPref("logSpeedyNominations") && !Twinkle.getPref("noLogOnSpeedyNomination").includes(csdcrit.toLowerCase());
    const templatename = type;
    const params = {
      type,
      templatename,
      normalized: csdcrit,
      lognomination
    };
    if (csdcrit === "f1") {
      params.f1_source = event.target["type.f1_source"].value;
    }
    if (csdcrit === "f4") {
      const f4_type = event.target["type.f4_type"].value;
      if (!f4_type) {
        mw.notify(window.wgULS("CSD F4：请选择适用类型。", "CSD F4：請選擇適用類別。"), {
          type: "warn",
          tag: "twinkleimage"
        });
        return false;
      }
      params.f4_type = f4_type;
    }
    Morebits.simpleWindow.setButtonsEnabled(false);
    Morebits.status.init(event.target);
    Morebits.wiki.actionCompleted.redirect = mw.config.get("wgPageName");
    Morebits.wiki.actionCompleted.notice = window.wgULS("标记完成", "標記完成");
    const ysarchives_page = new Morebits.wiki.page(mw.config.get("wgPageName"), window.wgULS("加入删除标记", "加入刪除標記"));
    ysarchives_page.setCallbackParameters(params);
    ysarchives_page.load(Twinkle.image.callbacks.taggingImage);
    if (notify) {
      ysarchives_page.lookupCreation(Twinkle.image.callbacks.userNotification);
    } else {
      if (lognomination) {
        params.fromDI = true;
        Twinkle.speedy.callbacks.user.addToLog(params, null);
      }
      if (type !== "orphaned fair use") {
        const noteData = document.createElement("pre");
        noteData.appendChild(document.createTextNode("{{".concat("subst:", "Uploadvionotice|".concat(Morebits.pageNameNorm, "}}--~~"), "~~")));
        Morebits.status.info("提示", window.wgULS(["这些内容应贴进上传者对话页：", document.createElement("br"), noteData], ["這些內容應貼進上傳者討論頁：", document.createElement("br"), noteData]));
      }
    }
  };
  Twinkle.image.callbacks = {
    taggingImage: (pageobj) => {
      let text = pageobj.getPageText();
      const params = pageobj.getCallbackParameters();
      text = text.replace(/\{\{(mtc|(copy |move )?to ?(share|commons)|move to (ysarchives share|wikimedia commons)|copy to (ysarchives share|wikimedia commons))[^}]*\}\}/gi, "");
      if (params.type !== "orphaned fair use") {
        const ysarchives_page = new Morebits.wiki.page("LIB_talk:存废讨论/文件快速删除提报", window.wgULS("加入快速删除记录项", "加入快速刪除記錄項"));
        ysarchives_page.setFollowRedirect(true);
        ysarchives_page.setCallbackParameters(params);
        ysarchives_page.load(Twinkle.image.callbacks.imageList);
      }
      let tag = "";
      switch (params.type) {
        case "orphaned fair use":
          tag = "{{".concat("subst:", "orphaned fair use}}\n");
          break;
        case "no permission":
          tag = "{{".concat("subst:", "".concat(params.templatename, "/auto|1=").concat(params.f1_source.replace(/http/g, "&#104;ttp").replace(/\n+/g, "\n").replace(/^\s*([^*])/gm, "* $1").replace(/^\* $/m, ""), "}}\n"));
          break;
        case "replaceable fair use":
          tag = "{{".concat("subst:", "".concat(params.templatename, "/auto|1=").concat(params.f4_type, "}}\n"));
          break;
        default:
          tag = "{{".concat("subst:", "".concat(params.templatename, "/auto}}\n"));
          break;
      }
      const textNoSd = text.replace(/\{\{\s*(db(-\w*)?|d|delete|(?:hang|hold)[- ]?on)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi, "");
      if (text !== textNoSd && confirm(window.wgULS("在页面上找到快速删除模板，要移除吗？", "在頁面上找到快速刪除模板，要移除嗎？"))) {
        text = textNoSd;
      }
      pageobj.setPageText(tag + text);
      let editSummary = window.wgULS("请求快速删除（", "請求快速刪除（");
      editSummary += "[[LIB:CSD#".concat(params.normalized.toUpperCase(), "|CSD ").concat(params.normalized.toUpperCase(), "]]");
      editSummary += "）";
      pageobj.setEditSummary(editSummary);
      pageobj.setChangeTags(Twinkle.changeTags);
      pageobj.setWatchlist(Twinkle.getPref("deliWatchPage"));
      pageobj.setCreateOption("nocreate");
      pageobj.save();
    },
    userNotification: (pageobj) => {
      const params = pageobj.getCallbackParameters();
      const initialContrib = pageobj.getCreator();
      if (initialContrib === mw.config.get("wgUserName")) {
        pageobj.getStatusElement().warn("您（".concat(initialContrib, "）").concat(window.wgULS("创建了该页，跳过通知", "建立了該頁，跳過通知")));
      } else {
        const talkPageName = "User talk:".concat(initialContrib);
        const usertalkpage = new Morebits.wiki.page(talkPageName, "".concat(window.wgULS("通知上传者", "通知上傳者"), "（").concat(initialContrib, "）"));
        const notifytext = "\n{{".concat("subst:", "Di-".concat(params.templatename, "-notice|1=").concat(Morebits.pageNameNorm, "}}--~~"), "~~");
        usertalkpage.setAppendText(notifytext);
        usertalkpage.setEditSummary(window.wgULS("通知：文件[[", "通知：檔案[[") + Morebits.pageNameNorm + window.wgULS("]]快速删除提名", "]]快速刪除提名"));
        usertalkpage.setChangeTags(Twinkle.changeTags);
        usertalkpage.setCreateOption("recreate");
        usertalkpage.setWatchlist(Twinkle.getPref("deliWatchUser"));
        usertalkpage.setFollowRedirect(true, false);
        usertalkpage.append();
      }
      if (params.lognomination) {
        params.fromDI = true;
        Twinkle.speedy.callbacks.user.addToLog(params, initialContrib);
      }
    },
    imageList: (pageobj) => {
      const text = pageobj.getPageText();
      pageobj.setPageText("".concat(text, "\n* [[:").concat(Morebits.pageNameNorm, "]]--~~").concat("~~"));
      pageobj.setEditSummary("加入[[".concat(Morebits.pageNameNorm, "]]"));
      pageobj.setChangeTags(Twinkle.changeTags);
      pageobj.setCreateOption("recreate");
      pageobj.save();
    }
  };
  Twinkle.addInitCallback(Twinkle.image, "image");
})();
//! src/Twinkle/modules/twinkleprotect.js
var import_ext_gadget2 = require("ext.gadget.Util");
/*! Twinkle.js - twinkleprotect.js */
(function twinkleprotect($) {
  const $body = $("body");
  Twinkle.protect = () => {
    if (mw.config.get("wgNamespaceNumber") < 0 || mw.config.get("wgNamespaceNumber") === 8) {
      return;
    }
    Twinkle.addPortletLink(Twinkle.protect.callback, window.wgULS("保护", "保護"), "tw-rpp", Morebits.userIsSysop ? window.wgULS("保护页面", "保護頁面") : window.wgULS("请求保护页面", "請求保護頁面"));
  };
  Twinkle.protect.callback = () => {
    const Window = new Morebits.simpleWindow(620, 530);
    Window.setTitle(Morebits.userIsSysop ? window.wgULS("施行或请求保护页面", "施行或請求保護頁面") : window.wgULS("请求保护页面", "請求保護頁面"));
    Window.setScriptName("Twinkle");
    Window.addFooterLink(window.wgULS("保护条例", "保護條例"), "LIB:PROT");
    Window.addFooterLink(window.wgULS("保护设置", "保護設定"), "H:TW/PREF#protect");
    Window.addFooterLink(window.wgULS("Twinkle帮助", "Twinkle說明"), "H:TW/DOC#protect");
    const form = new Morebits.quickForm(Twinkle.protect.callback.evaluate);
    const actionfield = form.append({
      type: "field",
      label: window.wgULS("操作类型", "操作類別")
    });
    if (Morebits.userIsSysop) {
      actionfield.append({
        type: "radio",
        name: "actiontype",
        event: Twinkle.protect.callback.changeAction,
        list: [{
          label: window.wgULS("保护页面", "保護頁面"),
          value: "protect",
          checked: true
        }]
      });
    }
    actionfield.append({
      type: "radio",
      name: "actiontype",
      event: Twinkle.protect.callback.changeAction,
      list: [{
        label: window.wgULS("请求保护页面", "請求保護頁面"),
        value: "request",
        tooltip: window.wgULS("若您想在LIB:RFPP请求保护此页", "若您想在LIB:RFPP請求保護此頁") + (Morebits.userIsSysop ? "而不是自行完成。" : "。"),
        checked: !Morebits.userIsSysop
      }, {
        label: window.wgULS("用保护模板标记此页", "用保護模板標記此頁"),
        value: "tag",
        tooltip: window.wgULS("可以用此为页面加上合适的保护模板。", "可以用此為頁面加上合適的保護模板。"),
        disabled: mw.config.get("wgArticleId") === 0 || mw.config.get("wgPageContentModel") === "Scribunto"
      }]
    });
    form.append({
      type: "field",
      label: window.wgULS("默认", "預設"),
      name: "field_preset"
    });
    form.append({
      type: "field",
      label: "1",
      name: "field1"
    });
    form.append({
      type: "field",
      label: "2",
      name: "field2"
    });
    form.append({
      type: "submit"
    });
    const result = form.render();
    Window.setContent(result);
    Window.display();
    const evt = document.createEvent("Event");
    evt.initEvent("change", true, true);
    result.actiontype[0].dispatchEvent(evt);
    Twinkle.protect.fetchProtectionLevel();
  };
  const isTemplate = mw.config.get("wgNamespaceNumber") === 10 || mw.config.get("wgNamespaceNumber") === 828;
  Twinkle.protect.currentProtectionLevels = {};
  Twinkle.protect.previousProtectionLevels = {};
  Twinkle.protect.fetchProtectionLevel = /* @__PURE__ */ _asyncToGenerator(function* () {
    const api = (0, import_ext_gadget2.initMwApi)("morebits.js; Twinkle/1.1");
    try {
      const params = {
        format: "json",
        indexpageids: true,
        action: "query",
        list: "logevents",
        letype: "protect",
        letitle: mw.config.get("wgPageName"),
        prop: "info",
        inprop: "protection|watched",
        titles: mw.config.get("wgPageName")
      };
      const protectData = yield api.get(params);
      const [pageid] = protectData.query.pageids;
      const page = protectData.query.pages[pageid];
      const current = {};
      const previous = {};
      Twinkle.protect.watched = page.watchlistexpiry || page.watched === "";
      var _iterator20 = _createForOfIteratorHelper(page.protection), _step20;
      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done; ) {
          const protection = _step20.value;
          if (protection.type !== "aft") {
            current[protection.type] = {
              level: protection.level,
              expiry: protection.expiry,
              cascade: protection.cascade === ""
            };
          }
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }
      if (protectData.query.logevents.length >= 1 && protectData.query.logevents[0].action !== "unprotect") {
        [Twinkle.protect.previousProtectionLog] = protectData.query.logevents;
      } else if (protectData.query.logevents.length >= 2) {
        [, Twinkle.protect.previousProtectionLog] = protectData.query.logevents;
      }
      if (Twinkle.protect.previousProtectionLog) {
        var _iterator21 = _createForOfIteratorHelper(Twinkle.protect.previousProtectionLog.params.details), _step21;
        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done; ) {
            const protection = _step21.value;
            if (protection.type !== "aft") {
              previous[protection.type] = {
                level: protection.level,
                expiry: protection.expiry,
                cascade: protection.cascade === ""
              };
            }
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }
      }
      Twinkle.protect.hasProtectLog = !!protectData.query.logevents.length;
      Twinkle.protect.currentProtectionLevels = current;
      Twinkle.protect.previousProtectionLevels = previous;
      Twinkle.protect.callback.showLogAndCurrentProtectInfo();
    } catch {
    }
  });
  Twinkle.protect.callback.showLogAndCurrentProtectInfo = () => {
    const currentlyProtected = Object.keys(Twinkle.protect.currentProtectionLevels).length !== 0;
    if (Twinkle.protect.hasProtectLog || Twinkle.protect.hasStableLog) {
      const $linkMarkup = $("<span>");
      if (Twinkle.protect.hasProtectLog) {
        $linkMarkup.append($('<a rel="noopener" target="_blank" href="'.concat(mw.util.getUrl("Special:Log", {
          action: "view",
          page: mw.config.get("wgPageName"),
          type: "protect"
        }), '">').concat(window.wgULS("保护日志", "保護日誌"), "</a>")), Twinkle.protect.hasStableLog ? $("<span>").html(" &bull; ") : null);
      }
      Morebits.status.init($body.find('div[name="hasprotectlog"] span')[0]);
      Morebits.status.warn(currentlyProtected ? window.wgULS("先前保护", "先前保護") : [window.wgULS("此页面曾在", "此頁面曾在"), $("<b>".concat(new Morebits.date(Twinkle.protect.previousProtectionLog.timestamp).calendar("utc"), "</b>"))[0], "被".concat(Twinkle.protect.previousProtectionLog.user).concat(window.wgULS("保护", "保護"), "："), ...Twinkle.protect.formatProtectionDescription(Twinkle.protect.previousProtectionLevels)], $linkMarkup[0]);
    }
    Morebits.status.init($body.find('div[name="currentprot"] span')[0]);
    let protectionNode = [];
    let statusLevel = "info";
    protectionNode = Twinkle.protect.formatProtectionDescription(Twinkle.protect.currentProtectionLevels);
    if (currentlyProtected) {
      statusLevel = "warn";
    }
    Morebits.status[statusLevel](window.wgULS("当前保护等级", "目前保護等級"), protectionNode);
  };
  Twinkle.protect.callback.changeAction = (e) => {
    let field_preset;
    let field1;
    let field2;
    switch (e.target.values) {
      case "protect":
        field_preset = new Morebits.quickForm.element({
          type: "field",
          label: window.wgULS("默认", "預設"),
          name: "field_preset"
        });
        field_preset.append({
          type: "select",
          name: "category",
          label: window.wgULS("选择默认：", "選擇預設："),
          event: Twinkle.protect.callback.changePreset,
          list: mw.config.get("wgArticleId") ? Twinkle.protect.protectionTypesAdmin : Twinkle.protect.protectionTypesCreate
        });
        field2 = new Morebits.quickForm.element({
          type: "field",
          label: window.wgULS("保护选项", "保護選項"),
          name: "field2"
        });
        field2.append({
          type: "div",
          name: "currentprot",
          label: " "
        });
        field2.append({
          type: "div",
          name: "hasprotectlog",
          label: " "
        });
        if (mw.config.get("wgArticleId")) {
          field2.append({
            type: "checkbox",
            event: Twinkle.protect.formevents.editmodify,
            list: [{
              label: window.wgULS("修改编辑权限", "修改編輯權限"),
              name: "editmodify",
              tooltip: window.wgULS("若此项关闭，编辑权限将不会修改。", "若此項關閉，編輯權限將不會修改。"),
              checked: true
            }]
          });
          field2.append({
            type: "select",
            name: "editlevel",
            label: window.wgULS("编辑权限：", "編輯權限："),
            event: Twinkle.protect.formevents.editlevel,
            list: Twinkle.protect.protectionLevels.filter(
              // Filter TE outside of templates and modules
              (level) => {
                return isTemplate || level.value !== "templateeditor";
              }
            )
          });
          field2.append({
            type: "select",
            name: "editexpiry",
            label: window.wgULS("终止时间：", "終止時間："),
            event: (event) => {
              if (event.target.value === "custom") {
                Twinkle.protect.doCustomExpiry(event.target);
              }
              $("input[name=small]", $(event.target).closest("form"))[0].checked = event.target.selectedIndex >= 4;
            },
            // default expiry selection (2 days) is conditionally set in Twinkle.protect.callback.changePreset
            list: Twinkle.protect.protectionLengths
          });
          field2.append({
            type: "checkbox",
            event: Twinkle.protect.formevents.movemodify,
            list: [{
              label: window.wgULS("修改移动权限", "修改移動權限"),
              name: "movemodify",
              tooltip: window.wgULS("若此项被关闭，移动权限将不被修改。", "若此項被關閉，移動權限將不被修改。"),
              checked: true
            }]
          });
          field2.append({
            type: "select",
            name: "movelevel",
            label: window.wgULS("移动权限：", "移動權限："),
            event: Twinkle.protect.formevents.movelevel,
            list: Twinkle.protect.protectionLevels.filter(
              // Autoconfirmed is required for a move, redundant
              (level) => {
                return level.value !== "autoconfirmed" && (isTemplate || level.value !== "templateeditor");
              }
            )
          });
          field2.append({
            type: "select",
            name: "moveexpiry",
            label: window.wgULS("终止时间：", "終止時間："),
            event: (event) => {
              if (event.target.value === "custom") {
                Twinkle.protect.doCustomExpiry(event.target);
              }
            },
            // default expiry selection (2 days) is conditionally set in Twinkle.protect.callback.changePreset
            list: Twinkle.protect.protectionLengths
          });
        } else {
          field2.append({
            type: "select",
            name: "createlevel",
            label: window.wgULS("创建权限：", "建立權限："),
            event: Twinkle.protect.formevents.createlevel,
            list: Twinkle.protect.protectionLevels.filter(
              // Filter TE always, and autoconfirmed in mainspace
              (level) => {
                return level.value !== "templateeditor";
              }
            )
          });
          field2.append({
            type: "select",
            name: "createexpiry",
            label: window.wgULS("终止时间：", "終止時間："),
            event: (event) => {
              if (event.target.value === "custom") {
                Twinkle.protect.doCustomExpiry(event.target);
              }
            },
            // default expiry selection (indefinite) is conditionally set in Twinkle.protect.callback.changePreset
            list: Twinkle.protect.protectionLengths
          });
        }
        field2.append({
          type: "checkbox",
          list: [{
            name: "close",
            label: window.wgULS("标记请求保护页面中的请求", "標記請求保護頁面中的請求"),
            checked: true
          }]
        });
        field2.append({
          type: "textarea",
          name: "protectReason",
          label: window.wgULS("理由（保护日志）：", "理由（保護日誌）：")
        });
        if (!mw.config.get("wgArticleId") || mw.config.get("wgPageContentModel") === "Scribunto") {
          break;
        }
      case "tag":
        field1 = new Morebits.quickForm.element({
          type: "field",
          label: window.wgULS("标记选项", "標記選項"),
          name: "field1"
        });
        field1.append({
          type: "div",
          name: "currentprot",
          label: " "
        });
        field1.append({
          type: "div",
          name: "hasprotectlog",
          label: " "
        });
        field1.append({
          type: "select",
          name: "tagtype",
          label: window.wgULS("选择保护模板：", "選擇保護模板："),
          list: Twinkle.protect.protectionTags,
          event: Twinkle.protect.formevents.tagtype
        });
        field1.append({
          type: "checkbox",
          list: [{
            name: "small",
            label: window.wgULS("使用图标（small=yes）", "使用圖示（small=yes）"),
            tooltip: window.wgULS("将给模板加上|small=yes参数，显示成右上角的一把挂锁。", "將給模板加上|small=yes參數，顯示成右上角的一把掛鎖。")
          }, {
            name: "noinclude",
            label: window.wgULS("用&lt;noinclude&gt;包裹保护模板", "用&lt;noinclude&gt;包裹保護模板"),
            tooltip: window.wgULS("将保护模板包裹在&lt;noinclude&gt;中", "將保護模板包裹在&lt;noinclude&gt;中"),
            checked: mw.config.get("wgNamespaceNumber") === 10
          }, {
            name: "showexpiry",
            label: window.wgULS("在模板显示到期时间", "在模板顯示到期時間"),
            tooltip: window.wgULS("将给模板加上|expiry参数", "將給模板加上|expiry參數"),
            checked: true,
            hidden: e.target.values === "tag"
          }]
        });
        break;
      case "request":
        field_preset = new Morebits.quickForm.element({
          type: "field",
          label: window.wgULS("保护类型", "保護類別"),
          name: "field_preset"
        });
        field_preset.append({
          type: "select",
          name: "category",
          label: window.wgULS("类型和理由：", "類別和理由："),
          event: Twinkle.protect.callback.changePreset,
          list: mw.config.get("wgArticleId") ? Twinkle.protect.protectionTypes : Twinkle.protect.protectionTypesCreate
        });
        field1 = new Morebits.quickForm.element({
          type: "field",
          label: window.wgULS("选项", "選項"),
          name: "field1"
        });
        field1.append({
          type: "div",
          name: "currentprot",
          label: " "
        });
        field1.append({
          type: "div",
          name: "hasprotectlog",
          label: " "
        });
        field1.append({
          type: "select",
          name: "expiry",
          label: window.wgULS("时长：", "時長："),
          list: [{
            label: "",
            selected: true,
            value: ""
          }, {
            label: window.wgULS("临时", "臨時"),
            value: "temporary"
          }, {
            label: "永久",
            value: "infinity"
          }]
        });
        field1.append({
          type: "textarea",
          name: "reason",
          label: "理由："
        });
        break;
      default:
        mw.notify(window.wgULS("这玩意儿被海豚吃掉了！", "這玩意兒被海豚吃掉了！"), {
          type: "warn",
          tag: "twinkleprotect"
        });
        break;
    }
    let oldfield;
    if (field_preset) {
      [oldfield] = $(e.target.form).find('fieldset[name="field_preset"]');
      oldfield.parentNode.replaceChild(field_preset.render(), oldfield);
    } else {
      $(e.target.form).find('fieldset[name="field_preset"]').css("display", "none");
    }
    if (field1) {
      [oldfield] = $(e.target.form).find('fieldset[name="field1"]');
      oldfield.parentNode.replaceChild(field1.render(), oldfield);
    } else {
      $(e.target.form).find('fieldset[name="field1"]').css("display", "none");
    }
    if (field2) {
      [oldfield] = $(e.target.form).find('fieldset[name="field2"]');
      oldfield.parentNode.replaceChild(field2.render(), oldfield);
    } else {
      $(e.target.form).find('fieldset[name="field2"]').css("display", "none");
    }
    if (e.target.values === "protect") {
      const evt = document.createEvent("Event");
      evt.initEvent("change", true, true);
      e.target.form.category.dispatchEvent(evt);
      $(e.target.form).find('fieldset[name="field2"] select').parent().css({
        display: "inline-block",
        marginRight: "0.5em"
      });
    }
    Twinkle.protect.callback.showLogAndCurrentProtectInfo();
  };
  Twinkle.protect.formevents = {
    editmodify: (e) => {
      e.target.form.editlevel.disabled = !e.target.checked;
      e.target.form.editexpiry.disabled = !e.target.checked || e.target.form.editlevel.value === "all";
      e.target.form.editlevel.style.color = e.target.checked ? "" : "transparent";
      e.target.form.editexpiry.style.color = e.target.checked ? "" : "transparent";
    },
    editlevel: (e) => {
      e.target.form.editexpiry.disabled = e.target.value === "all";
    },
    movemodify: (e) => {
      if (e.target.form.movelevel.disabled && !e.target.form.editlevel.disabled) {
        e.target.form.movelevel.value = e.target.form.editlevel.value;
        e.target.form.moveexpiry.value = e.target.form.editexpiry.value;
      } else if (e.target.form.editlevel.disabled) {
        e.target.form.movelevel.value = "sysop";
        e.target.form.moveexpiry.value = "infinity";
      }
      e.target.form.movelevel.disabled = !e.target.checked;
      e.target.form.moveexpiry.disabled = !e.target.checked || e.target.form.movelevel.value === "all";
      e.target.form.movelevel.style.color = e.target.checked ? "" : "transparent";
      e.target.form.moveexpiry.style.color = e.target.checked ? "" : "transparent";
    },
    movelevel: (e) => {
      e.target.form.moveexpiry.disabled = e.target.value === "all";
    },
    createlevel: (e) => {
      e.target.form.createexpiry.disabled = e.target.value === "all";
    },
    tagtype: (e) => {
      e.target.form.small.disabled = e.target.value === "none" || e.target.value === "noop";
      e.target.form.noinclude.disabled = e.target.value === "none" || e.target.value === "noop";
      e.target.form.showexpiry.disabled = e.target.value === "none" || e.target.value === "noop";
    }
  };
  Twinkle.protect.doCustomExpiry = (target) => {
    const custom = prompt(window.wgULS("输入自定义终止时间。\n您可以使用相对时间，如“1 minute”或“19 days”，或绝对时间“yyyymmddhhmm”（如“200602011405”是2006年02月01日14：05（UTC））", "輸入自訂終止時間。\n您可以使用相對時間，如「1 minute」或「19 days」，或絕對時間「yyyymmddhhmm」（如「200602011405」是2006年02月01日14：05（UTC））"), "");
    if (custom) {
      const option = document.createElement("option");
      option.setAttribute("value", custom);
      option.textContent = custom;
      target.appendChild(option);
      target.value = custom;
    } else {
      target.selectedIndex = 0;
    }
  };
  Twinkle.protect.protectionLevels = [{
    label: "全部",
    value: "all"
  }, {
    label: window.wgULS("仅允许自动确认用户", "僅允許自動確認使用者"),
    value: "autoconfirmed"
  }, {
    label: window.wgULS("仅模板编辑员和管理员", "僅模板編輯員和管理員"),
    value: "templateeditor"
  }, {
    label: window.wgULS("仅管理员", "僅管理員"),
    value: "sysop",
    selected: true
  }, {
    label: window.wgULS("仅允许档案理事员", "僅允許檔案理事員"),
    value: "officialprotected"
  }];
  Twinkle.protect.protectionLengths = [{
    label: "1天",
    value: "1 day"
  }, {
    label: "3天",
    value: "3 days"
  }, {
    label: window.wgULS("1周", "1週"),
    value: "1 week"
  }, {
    label: window.wgULS("2周", "2週"),
    value: "2 weeks"
  }, {
    label: window.wgULS("1个月", "1個月"),
    value: "1 month"
  }, {
    label: window.wgULS("3个月", "3個月"),
    value: "3 months"
  }, {
    label: window.wgULS("6个月", "6個月"),
    value: "6 months"
  }, {
    label: "1年",
    value: "1 year"
  }, {
    label: window.wgULS("无限期", "無限期"),
    value: "infinity"
  }, {
    label: window.wgULS("自定义……", "自訂……"),
    value: "custom"
  }];
  Twinkle.protect.protectionTypesAdmin = [{
    label: window.wgULS("解除保护", "解除保護"),
    value: "unprotect"
  }, {
    label: window.wgULS("全保护", "全保護"),
    list: [{
      label: window.wgULS("常规（全）", "常規（全）"),
      value: "pp-protected"
    }, {
      label: window.wgULS("争议、编辑战（全）", "爭議、編輯戰（全）"),
      value: "pp-dispute"
    }]
  }, {
    label: window.wgULS("模板保护", "模板保護"),
    list: [{
      label: window.wgULS("高风险模板（模板）", "高風險模板（模板）"),
      value: "pp-template"
    }]
  }, {
    label: window.wgULS("半保护", "半保護"),
    list: [{
      label: window.wgULS("常规（半）", "常規（半）"),
      value: "pp-semi-protected"
    }, {
      label: window.wgULS("持续破坏（半）", "持續破壞（半）"),
      value: "pp-semi-vandalism"
    }, {
      label: window.wgULS("违反生者传记条例（半）", "違反生者傳記條例（半）"),
      value: "pp-semi-blp"
    }, {
      label: window.wgULS("傀儡破坏（半）", "傀儡破壞（半）"),
      value: "pp-semi-sock"
    }, {
      label: window.wgULS("高风险模板（半）", "高風險模板（半）"),
      value: "pp-semi-template"
    }, {
      label: window.wgULS("被封禁用户滥用讨论页（半）", "被封禁使用者濫用討論頁（半）"),
      value: "pp-semi-usertalk"
    }]
  }, {
    label: window.wgULS("移动保护", "移動保護"),
    list: [{
      label: window.wgULS("常规（移动）", "常規（移動）"),
      value: "pp-move"
    }, {
      label: window.wgULS("争议、移动战（移动）", "爭議、移動戰（移動）"),
      value: "pp-move-dispute"
    }, {
      label: window.wgULS("移动破坏（移动）", "移動破壞（移動）"),
      value: "pp-move-vandalism"
    }, {
      label: window.wgULS("高风险页面（移动）", "高風險頁面（移動）"),
      value: "pp-move-indef"
    }]
  }].filter(({
    label
  }) => {
    return isTemplate || label !== "模板保护" && label !== "模板保護";
  });
  Twinkle.protect.protectionTypesCreateOnly = [{
    label: window.wgULS("白纸保护", "白紙保護"),
    list: [{
      label: window.wgULS("常规（白纸）", "常規（白紙）"),
      value: "pp-create"
    }, {
      label: window.wgULS("多次重复创建（白纸）", "多次重複建立（白紙）"),
      value: "pp-create-repeat"
    }, {
      label: window.wgULS("持续破坏（白纸）", "持續破壞（白紙）"),
      value: "pp-create-vandalism"
    }, {
      label: window.wgULS("已封禁用户的用户页（白纸）", "已封禁使用者的使用者頁（白紙）"),
      value: "pp-create-userpage"
    }]
  }];
  Twinkle.protect.protectionTypes = [...Twinkle.protect.protectionTypesAdmin, ...Twinkle.protect.protectionTypesCreateOnly];
  Twinkle.protect.protectionTypesCreate = [{
    label: "解除保护",
    value: "unprotect"
  }, ...Twinkle.protect.protectionTypesCreateOnly];
  Twinkle.protect.protectionPresetsInfo = {
    "pp-protected": {
      edit: "sysop",
      move: "sysop",
      reason: null
    },
    "pp-dispute": {
      edit: "sysop",
      move: "sysop",
      reason: window.wgULS("编辑战", "編輯戰")
    },
    "pp-template": {
      edit: "templateeditor",
      move: "templateeditor",
      expiry: "infinity",
      reason: window.wgULS("[[LIB:HRT|高风险模板]]", "[[LIB:HRT|高風險模板]]"),
      template: "noop"
    },
    "pp-vandalism": {
      edit: "sysop",
      move: "sysop",
      reason: window.wgULS("被自动确认用户破坏", "被自動確認使用者破壞")
    },
    "pp-sock": {
      edit: "sysop",
      move: "sysop",
      reason: window.wgULS("持续的傀儡破坏", "持續的傀儡破壞")
    },
    "pp-semi-vandalism": {
      edit: "autoconfirmed",
      reason: window.wgULS("被新用户破坏", "被新使用者破壞"),
      template: "pp-vandalism"
    },
    "pp-semi-blp": {
      edit: "autoconfirmed",
      reason: window.wgULS("新用户违反生者传记条例", "新使用者違反生者傳記條例")
    },
    "pp-semi-usertalk": {
      edit: "autoconfirmed",
      reason: window.wgULS("被封禁用户滥用其讨论页", "被封禁使用者濫用其討論頁")
    },
    "pp-semi-template": {
      // removed for now
      edit: "autoconfirmed",
      expiry: "infinity",
      reason: window.wgULS("[[LIB:HRT|高风险模板]]", "[[LIB:HRT|高風險模板]]"),
      template: "noop"
    },
    "pp-semi-sock": {
      edit: "autoconfirmed",
      reason: window.wgULS("持续的傀儡破坏", "持續的傀儡破壞"),
      template: "pp-sock"
    },
    "pp-semi-protected": {
      edit: "autoconfirmed",
      reason: null,
      template: "pp-protected"
    },
    "pp-move": {
      move: "sysop",
      reason: null
    },
    "pp-move-dispute": {
      move: "sysop",
      reason: window.wgULS("页面移动战", "頁面移動戰")
    },
    "pp-move-vandalism": {
      move: "sysop",
      reason: window.wgULS("移动破坏", "移動破壞")
    },
    "pp-move-indef": {
      move: "sysop",
      expiry: "infinity",
      reason: window.wgULS("高风险页面", "高風險頁面")
    },
    unprotect: {
      edit: "all",
      move: "all",
      create: "all",
      reason: null,
      template: "none"
    },
    "pp-create": {
      create: "autoconfirmed",
      reason: null
    },
    "pp-create-repeat": {
      create: "autoconfirmed",
      reason: window.wgULS("多次重复创建", "多次重複建立")
    },
    "pp-create-vandalism": {
      create: "autoconfirmed",
      reason: window.wgULS("被新用户破坏", "被新使用者破壞")
    },
    "pp-create-userpage": {
      create: "sysop",
      expiry: "infinity",
      reason: window.wgULS("被永久封禁的用户页", "被永久封禁的使用者頁面")
    }
  };
  Twinkle.protect.protectionTags = [{
    label: window.wgULS("无（移除现有模板）", "無（移除現有模板）"),
    value: "none"
  }, {
    label: window.wgULS("无（不移除现有模板）", "無（不移除現有模板）"),
    value: "noop"
  }, {
    label: "通用模板",
    list: [{
      label: "{{pp-dispute}}: ".concat(window.wgULS("争议", "爭議")),
      value: "pp-dispute"
    }, {
      label: "{{pp-vandalism}}: ".concat(window.wgULS("破坏", "破壞")),
      value: "pp-vandalism",
      selected: true
    }, {
      label: "{{pp-sock}}: 傀儡",
      value: "pp-sock"
    }, {
      label: "{{pp-template}}: ".concat(window.wgULS("高风险模板", "高風險模板")),
      value: "pp-template"
    }, {
      label: "{{pp-protected}}: ".concat(window.wgULS("常规", "常規")),
      value: "pp-protected"
    }]
  }, {
    label: window.wgULS("半保护模板", "半保護模板"),
    list: [{
      label: "{{pp-semi-usertalk}}: ".concat(window.wgULS("封禁的用户", "封禁的使用者")),
      value: "pp-semi-usertalk"
    }, {
      label: "{{pp-semi-blp}}: ".concat(window.wgULS("生者传记", "生者傳記")),
      value: "pp-semi-blp"
    }, {
      label: "{{pp-semi-indef}}: ".concat(window.wgULS("长期", "長期")),
      value: "pp-semi-indef"
    }]
  }, {
    label: window.wgULS("移动保护模板", "移動保護模板"),
    list: [{
      label: "{{pp-move-dispute}}: ".concat(window.wgULS("争议", "爭議")),
      value: "pp-move-dispute"
    }, {
      label: "{{pp-move-vandalism}}: ".concat(window.wgULS("破坏", "破壞")),
      value: "pp-move-vandalism"
    }, {
      label: "{{pp-move-indef}}: ".concat(window.wgULS("长期", "長期")),
      value: "pp-move-indef"
    }, {
      label: "{{pp-move}}: ".concat(window.wgULS("常规", "常規")),
      value: "pp-move"
    }]
  }];
  Twinkle.protect.callback.changePreset = (e) => {
    const {
      form
    } = e.target;
    const actiontypes = form.actiontype;
    let actiontype;
    var _iterator22 = _createForOfIteratorHelper(actiontypes), _step22;
    try {
      for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
        const action_type_value = _step22.value;
        if (!action_type_value.checked) {
          continue;
        }
        actiontype = action_type_value.values;
        break;
      }
    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
    }
    if (actiontype === "protect") {
      const item = Twinkle.protect.protectionPresetsInfo[form.category.value];
      if (mw.config.get("wgArticleId")) {
        if (item.edit) {
          form.editmodify.checked = true;
          Twinkle.protect.formevents.editmodify({
            target: form.editmodify
          });
          form.editlevel.value = item.edit;
          Twinkle.protect.formevents.editlevel({
            target: form.editlevel
          });
        } else {
          form.editmodify.checked = false;
          Twinkle.protect.formevents.editmodify({
            target: form.editmodify
          });
        }
        if (item.move) {
          form.movemodify.checked = true;
          Twinkle.protect.formevents.movemodify({
            target: form.movemodify
          });
          form.movelevel.value = item.move;
          Twinkle.protect.formevents.movelevel({
            target: form.movelevel
          });
        } else {
          form.movemodify.checked = false;
          Twinkle.protect.formevents.movemodify({
            target: form.movemodify
          });
        }
        form.editexpiry.value = item.expiry || "1 week";
        form.moveexpiry.value = item.expiry || "1 week";
      } else {
        if (item.create) {
          form.createlevel.value = item.create;
          Twinkle.protect.formevents.createlevel({
            target: form.createlevel
          });
          form.createexpiry.value = item.createexpiry || "1 week";
        }
        form.createexpiry.value = item.expiry || "1 week";
      }
      const reasonField = actiontype === "protect" ? form.protectReason : form.reason;
      if (item.reason) {
        reasonField.value = item.reason;
      } else {
        reasonField.value = "";
      }
      if (mw.config.get("wgArticleId") && mw.config.get("wgPageContentModel") !== "Scribunto") {
        if (form.category.value === "unprotect") {
          form.tagtype.value = "none";
        } else {
          var _item$template;
          form.tagtype.value = (_item$template = item.template) !== null && _item$template !== void 0 ? _item$template : form.category.value;
        }
        Twinkle.protect.formevents.tagtype({
          target: form.tagtype
        });
        if (/template/.test(form.category.value)) {
          form.noinclude.checked = true;
        } else if (mw.config.get("wgNamespaceNumber") !== 10) {
          form.noinclude.checked = false;
        }
      }
    } else if (form.category.value === "unprotect") {
      form.expiry.value = "";
      form.expiry.disabled = true;
    } else {
      form.expiry.value = "";
      form.expiry.disabled = false;
    }
  };
  Twinkle.protect.callback.evaluate = (e) => {
    const form = e.target;
    const input = Morebits.quickForm.getInputData(form);
    let tagparams;
    if (input.actiontype === "tag" || input.actiontype === "protect" && mw.config.get("wgArticleId") && mw.config.get("wgPageContentModel") !== "Scribunto") {
      tagparams = {
        tag: input.tagtype,
        reason: (input.tagtype === "pp-protected" || input.tagtype === "pp-semi-protected" || input.tagtype === "pp-move") && input.protectReason ? input.protectReason : null,
        showexpiry: input.actiontype === "protect" ? input.showexpiry : null,
        small: input.small,
        noinclude: input.noinclude
      };
      if (input.actiontype === "protect") {
        if (input.editmodify) {
          tagparams.expiry = input.editexpiry;
        } else if (input.movemodify) {
          tagparams.expiry = input.moveexpiry;
        }
      }
    }
    const closeparams = {};
    if (input.close) {
      if (input.category === "unprotect") {
        closeparams.type = "unprotect";
      } else if (mw.config.get("wgArticleId")) {
        if (input.editmodify) {
          switch (input.editlevel) {
            case "officialprotected":
              closeparams.type = "officialprotected";
              closeparams.expiry = input.editexpiry;
              break;
            case "revisionprotected":
              closeparams.type = "revisionprotected";
              closeparams.expiry = input.editexpiry;
              break;
            case "sysop":
              closeparams.type = "full";
              closeparams.expiry = input.editexpiry;
              break;
            case "templateeditor":
              closeparams.type = "temp";
              closeparams.expiry = input.editexpiry;
              break;
            case "autoconfirmed":
              closeparams.type = "semi";
              closeparams.expiry = input.editexpiry;
              break;
          }
        } else if (input.movemodify && ["officialprotected", "revisionprotected", "sysop", "templateeditor"].includes(input.movelevel)) {
          closeparams.type = "move";
          closeparams.expiry = input.moveexpiry;
        }
      } else if (input.createlevel !== "all") {
        closeparams.type = "salt";
        closeparams.expiry = input.createexpiry;
      }
    }
    switch (input.actiontype) {
      case "protect": {
        Morebits.wiki.actionCompleted.redirect = mw.config.get("wgPageName");
        Morebits.wiki.actionCompleted.notice = window.wgULS("保护完成", "保護完成");
        let statusInited = false;
        let thispage;
        const allDone = () => {
          if (thispage) {
            thispage.getStatusElement().info("完成");
          }
          if (tagparams) {
            Twinkle.protect.callbacks.taggingPageInitial(tagparams);
          }
          if (closeparams && closeparams.type) {
            const rppPage = new Morebits.wiki.page("LIB_talk:页面保护请求", window.wgULS("关闭请求", "關閉請求"));
            rppPage.setFollowRedirect(true);
            rppPage.setCallbackParameters(closeparams);
            rppPage.load(Twinkle.protect.callbacks.closeRequest);
          }
        };
        const protectIt = (next) => {
          thispage = new Morebits.wiki.page(mw.config.get("wgPageName"), window.wgULS("保护页面", "保護頁面"));
          if (mw.config.get("wgArticleId")) {
            if (input.editmodify) {
              thispage.setEditProtection(input.editlevel, input.editexpiry);
            }
            if (input.movemodify) {
              if (input.movelevel) {
                thispage.setMoveProtection(input.movelevel, input.moveexpiry);
              } else {
                mw.notify(window.wgULS("您需要选择保护层级！", "您需要選擇保護層級！"), {
                  type: "warn",
                  tag: "twinkleprotect"
                });
                return;
              }
            }
            thispage.setWatchlist(Twinkle.getPref("watchProtectedPages"));
          } else {
            thispage.setCreateProtection(input.createlevel, input.createexpiry);
            thispage.setWatchlist(false);
          }
          if (input.protectReason) {
            thispage.setEditSummary(input.protectReason);
            thispage.setChangeTags(Twinkle.changeTags);
          } else {
            mw.notify(window.wgULS("您必须输入保护理由，这将被记录在保护日志中。", "您必須輸入保護理由，這將被記錄在保護日誌中。"), {
              type: "warn",
              tag: "twinkleprotect"
            });
            return;
          }
          if (!statusInited) {
            Morebits.simpleWindow.setButtonsEnabled(false);
            Morebits.status.init(form);
            statusInited = true;
          }
          thispage.setChangeTags(Twinkle.changeTags);
          thispage.protect(next);
        };
        if (input.editmodify || input.movemodify || !mw.config.get("wgArticleId")) {
          protectIt(allDone);
        } else {
          mw.notify(window.wgULS("请告诉Twinkle要做什么！\n若您只是想标记该页，请选择上面的“用保护模板标记此页”选项。", "請告訴Twinkle要做什麼！\n若您只是想標記該頁，請選擇上面的「用保護模板標記此頁」選項。"), {
            type: "warn",
            tag: "twinkleprotect"
          });
        }
        break;
      }
      case "tag":
        Morebits.simpleWindow.setButtonsEnabled(false);
        Morebits.status.init(form);
        Morebits.wiki.actionCompleted.redirect = mw.config.get("wgPageName");
        Morebits.wiki.actionCompleted.followRedirect = false;
        Morebits.wiki.actionCompleted.notice = window.wgULS("标记完成", "標記完成");
        Twinkle.protect.callbacks.taggingPageInitial(tagparams);
        break;
      case "request": {
        let typename;
        let typereason;
        switch (input.category) {
          case "pp-dispute":
          case "pp-protected":
            typename = window.wgULS("全保护", "全保護");
            break;
          case "pp-template":
            typename = window.wgULS("模板保护", "模板保護");
            break;
          case "pp-vandalism":
          case "pp-semi-disruptive":
          case "pp-semi-unsourced":
          case "pp-semi-vandalism":
          case "pp-semi-usertalk":
          case "pp-semi-template":
          case "pp-semi-sock":
          case "pp-semi-blp":
          case "pp-semi-protected":
            typename = window.wgULS("半保护", "半保護");
            break;
          case "pp-move":
          case "pp-move-dispute":
          case "pp-move-indef":
          case "pp-move-vandalism":
            typename = window.wgULS("移动保护", "移動保護");
            break;
          case "pp-create":
          case "pp-create-offensive":
          case "pp-create-blp":
          case "pp-create-salt":
          case "pp-create-userpage":
          case "pp-create-repeat":
          case "pp-create-vandalism":
            typename = window.wgULS("白纸保护", "白紙保護");
            break;
          default:
            typename = window.wgULS("解除保护", "解除保護");
            break;
        }
        switch (input.category) {
          case "pp-dispute":
            typereason = window.wgULS("争议、编辑战", "爭議、編輯戰");
            break;
          case "pp-vandalism":
          case "pp-semi-vandalism":
          case "pp-create-vandalism":
            typereason = window.wgULS("持续破坏", "持續破壞");
            break;
          case "pp-template":
          case "pp-semi-template":
            typereason = window.wgULS("高风险模板", "高風險模板");
            break;
          case "pp-create-userpage":
            typereason = window.wgULS("被永久封禁的用户页", "被永久封鎖的使用者頁面");
            break;
          case "pp-semi-usertalk":
            typereason = window.wgULS("已封禁用户的讨论页", "已封鎖使用者的討論頁");
            break;
          case "pp-semi-sock":
            typereason = window.wgULS("傀儡破坏", "傀儡破壞");
            break;
          case "pp-semi-blp":
            typereason = window.wgULS("违反生者传记条例", "違反生者傳記條例");
            break;
          case "pp-move-dispute":
            typereason = window.wgULS("争议、移动战", "爭議、移動戰");
            break;
          case "pp-move-vandalism":
            typereason = window.wgULS("移动破坏", "移動破壞");
            break;
          case "pp-move-indef":
            typereason = window.wgULS("高风险页面", "高風險頁面");
            break;
          case "pp-create-repeat":
            typereason = window.wgULS("多次重复创建", "多次重複建立");
            break;
          default:
            typereason = "";
            break;
        }
        let reason = typereason;
        if (input.reason !== "") {
          if (typereason !== "") {
            reason += "：";
          }
          reason += input.reason;
        }
        if (reason !== "") {
          reason = Morebits.string.appendPunctuation(reason);
        }
        const rppparams = {
          reason,
          typename,
          category: input.category,
          expiry: input.expiry
        };
        Morebits.simpleWindow.setButtonsEnabled(false);
        Morebits.status.init(form);
        const rppName = "LIB_talk:页面保护请求";
        Morebits.wiki.actionCompleted.redirect = rppName;
        Morebits.wiki.actionCompleted.notice = window.wgULS("提名完成，重定向到讨论页", "提名完成，重新導向到討論頁");
        const rppPage = new Morebits.wiki.page(rppName, window.wgULS("请求保护页面", "請求保護頁面"));
        rppPage.setFollowRedirect(true);
        rppPage.setCallbackParameters(rppparams);
        rppPage.load(Twinkle.protect.callbacks.fileRequest);
        break;
      }
      default:
        mw.notify("twinkleprotect: 未知操作类型", {
          type: "warn",
          tag: "twinkleprotect"
        });
        break;
    }
  };
  Twinkle.protect.callbacks = {
    taggingPageInitial: (tagparams) => {
      if (tagparams.tag === "noop") {
        Morebits.status.info(window.wgULS("应用保护模板", "應用保護模板"), window.wgULS("没什么要做的", "沒什麼要做的"));
        return;
      }
      const pageName = mw.config.get("wgPageName");
      const protectedPage = new Morebits.wiki.page(pageName, window.wgULS("标记页面", "標記頁面"));
      protectedPage.setCallbackParameters(tagparams);
      protectedPage.load(Twinkle.protect.callbacks.taggingPage);
    },
    getTaggedPage: (params, text) => {
      let tag;
      let summary;
      const oldtag_re = /(?:<noinclude>)?[ \t]*\{\{\s*(pp-[^{}]*?|protected|(?:t|v|s|p-|usertalk-v|usertalk-s|sb|move)protected(?:2)?|protected template|privacy protection)\s*?\}\}\s*(?:<\/noinclude>)?\s*/gi;
      const re_result = oldtag_re.exec(text);
      if (re_result && (params.tag === "none" || confirm(window.wgULS("在页面上找到{{", "在頁面上找到{{") + re_result[1] + window.wgULS("}}\n单击确定以移除，或单击取消以取消操作。", "}}\n點擊確定以移除，或點擊取消以取消操作。")))) {
        text = text.replace(oldtag_re, "");
      }
      if (params.tag === "none") {
        summary = window.wgULS("移除保护模板", "移除保護模板");
      } else {
        ({
          tag
        } = params);
        if (params.reason) {
          tag += "|reason=".concat(params.reason);
        }
        if (params.showexpiry && params.expiry && !Morebits.string.isInfinity(params.expiry)) {
          tag += "|expiry={{".concat("subst:", "#time:c|".concat(params.expiry, "}}"));
        }
        if (params.small) {
          tag += "|small=yes";
        }
        if (/^\s*#(?:redirect|重定向|重新導向)/i.test(text)) {
          if (text.match(/{{(?:Redirect[ _]category shell|Rcat[ _]shell|This[ _]is a redirect|多种类型重定向|多種類型重定向|多種類型重新導向|多种类型重新导向|R0|其他重定向|RCS|Redirect[ _]shell)/i)) {
            Morebits.status.info("已存在Redirect category shell", window.wgULS("没什么可做的", "沒什麼可做的"));
            return;
          }
          text = text.replace(/#(?:redirect|重定向|重新導向) ?(\[\[.*?\]\])(.*)/i, "#REDIRECT $1$2\n\n{{".concat(tag, "}}"));
        } else {
          if (params.noinclude) {
            tag = "<noinclude>{{".concat(tag, "}}</noinclude>");
            if (text.indexOf("{|") === 0) {
              tag += "\n";
            }
          } else {
            tag = "{{".concat(tag, "}}\n");
          }
          const ysarchives_page = new Morebits.wikitext.page(text);
          text = ysarchives_page.insertAfterTemplates(tag, Twinkle.hatnoteRegex).getText();
        }
        summary = "加入{{".concat(params.tag, "}}");
      }
      return {
        text,
        summary
      };
    },
    taggingPage: (protectedPage) => {
      const params = protectedPage.getCallbackParameters();
      const text = protectedPage.getPageText();
      const newVersion = Twinkle.protect.callbacks.getTaggedPage(params, text);
      if (newVersion === void 0) {
        protectedPage.getStatusElement().info("完成");
        return;
      }
      protectedPage.setEditSummary(newVersion.summary);
      protectedPage.setChangeTags(Twinkle.changeTags);
      protectedPage.setWatchlist(Twinkle.getPref("watchPPTaggedPages"));
      protectedPage.setPageText(newVersion.text);
      protectedPage.setCreateOption("nocreate");
      protectedPage.suppressProtectWarning();
      protectedPage.save();
    },
    fileRequest: (rppPage) => {
      const params = rppPage.getCallbackParameters();
      let text = rppPage.getPageText();
      const statusElement = rppPage.getStatusElement();
      const rppRe = new RegExp("===\\s*(\\[\\[)?\\s*:?\\s*".concat(Morebits.string.escapeRegExp(Morebits.pageNameNorm), "\\s*(\\]\\])?\\s*==="), "m");
      const tag = rppRe.exec(text);
      const rppLink = document.createElement("a");
      rppLink.setAttribute("href", mw.util.getUrl(rppPage.getPageName()));
      rppLink.appendChild(document.createTextNode(rppPage.getPageName()));
      if (tag) {
        statusElement.error([rppLink, window.wgULS("已有对此页面的保护提名，取消操作。", "已有對此頁面的保護提名，取消操作。")]);
        return;
      }
      let newtag = "=== [[:".concat(Morebits.pageNameNorm, "]] ===\n");
      if (new RegExp("^".concat(mw.util.escapeRegExp(newtag).replace(/\s+/g, "\\s*")), "m").test(text)) {
        statusElement.error([rppLink, window.wgULS("已有对此页面的保护提名，取消操作。", "已有對此頁面的保護提名，取消操作。")]);
        return;
      }
      let words;
      switch (params.expiry) {
        case "temporary":
          words = window.wgULS("临时", "臨時");
          break;
        case "infinity":
          words = "永久";
          break;
        default:
          words = "";
          break;
      }
      words += params.typename;
      newtag += '* <span style="font-size: 90%">'.concat(window.wgULS("当前保护状态", "目前保護狀態"), "：{{protection status|").concat(/[=]/.test(Morebits.pageNameNorm) ? "1=" : "").concat(Morebits.pageNameNorm, "}}</span>\n");
      newtag += "".concat(window.wgULS("请求", "請求") + Morebits.string.toUpperCaseFirstChar(words) + (params.reason === "" ? "。" : "：".concat(Morebits.string.formatReasonText(params.reason))), "--~~").concat("~~");
      let reg;
      if (params.category === "unprotect") {
        reg = /(==\s*请求解除保护\s*==)/;
      } else {
        reg = /({{\s*\/header\s*}})/;
      }
      const originalTextLength = text.length;
      text = text.replace(reg, "$1\n".concat(newtag, "\n"));
      if (text.length === originalTextLength) {
        const linknode = document.createElement("a");
        linknode.setAttribute("href", mw.util.getUrl("Help:Twinkle/修复RFPP"));
        linknode.appendChild(document.createTextNode(window.wgULS("如何修复RFPP", "如何修復RFPP")));
        statusElement.error([window.wgULS("无法在LIB:RFPP上找到相关定位点标记，要修复此问题，请参见", "無法在LIB:RFPP上找到相關定位點標記，要修復此問題，請參見"), linknode, "。"]);
        return;
      }
      statusElement.status("加入新提名…");
      rppPage.setEditSummary("/* ".concat(Morebits.pageNameNorm, " */ ").concat(window.wgULS("请求对", "請求對"), "[[").concat(Morebits.pageNameNorm, "]]").concat(params.typename));
      rppPage.setChangeTags(Twinkle.changeTags);
      rppPage.setPageText(text);
      rppPage.setCreateOption("recreate");
      rppPage.save(() => {
        const watchPref = Twinkle.getPref("watchRequestedPages");
        const watch = watchPref !== "no" && (watchPref !== "default" || !!Number.parseInt(mw.user.options.get("watchdefault"), 10));
        if (watch) {
          const watch_query = {
            action: "watch",
            titles: mw.config.get("wgPageName"),
            token: mw.user.tokens.get("watchToken")
          };
          if (Twinkle.protect.watched !== true && watchPref !== "default" && watchPref !== "yes") {
            watch_query.expiry = watchPref;
          }
          new Morebits.wiki.api(window.wgULS("将请求保护的页面加入到监视列表", "將請求保護的頁面加入到監視清單"), watch_query).post();
        }
      });
    },
    closeRequest: (rppPage) => {
      const params = rppPage.getCallbackParameters();
      let text = rppPage.getPageText();
      const statusElement = rppPage.getStatusElement();
      const sections = text.split(/(?=\n==\s*请求解除保护\s*==)/);
      if (sections.length !== 2) {
        const linknode2 = document.createElement("a");
        linknode2.setAttribute("href", mw.util.getUrl("Help:Twinkle/修复RFPP"));
        linknode2.appendChild(document.createTextNode("如何修复RFPP"));
        statusElement.error([window.wgULS("无法在LIB:RFPP上找到相关定位点标记，要修复此问题，请参见", "無法在LIB:RFPP上找到相關定位點標記，要修復此問題，請參見"), linknode2, "。"]);
        return;
      }
      let sectionText;
      let expiryText = "";
      if (params.type === "unprotect") {
        [, sectionText] = sections;
      } else {
        [sectionText] = sections;
        expiryText = Morebits.string.formatTime(params.expiry);
      }
      const requestList = sectionText.split(/(?=\n===.+===\s*\n)/);
      let found = false;
      const rppRe = new RegExp("===\\s*(\\[\\[)?\\s*:?\\s*".concat(Morebits.pageNameRegex(Morebits.pageNameNorm), "\\s*(\\]\\])?\\s*==="), "m");
      for (let i = 1; i < requestList.length; i++) {
        if (rppRe.exec(requestList[i])) {
          requestList[i] = requestList[i].trimEnd();
          if (params.type === "unprotect") {
            requestList[i] += "\n: {{RFPP|isun}}。--~~".concat("~~\n");
          } else {
            requestList[i] += "\n: {{RFPP|".concat(params.type, "|").concat(Morebits.string.isInfinity(params.expiry) ? "infinity" : expiryText, "}}。--~~").concat("~~\n");
          }
          found = true;
          break;
        }
      }
      if (!found) {
        statusElement.warn(window.wgULS("没有找到相关的请求", "沒有找到相關的請求"));
        return;
      }
      if (params.type === "unprotect") {
        text = sections[0] + requestList.join("");
      } else {
        text = requestList.join("") + sections[1];
      }
      let summary = "";
      if (params.type === "unprotect") {
        [, sectionText] = sections;
      } else {
        [sectionText] = sections;
      }
      switch (params.type) {
        case "semi":
          summary = window.wgULS("半保护", "半保護");
          break;
        case "temp":
          summary = window.wgULS("模板保护", "模板保護");
          break;
        case "ecp":
          summary = window.wgULS("延伸确认保护", "延伸確認保護");
          break;
        case "full":
          summary = window.wgULS("全保护", "全保護");
          break;
        case "revisionprotected":
          summary = window.wgULS("版本保护", "版本保護");
          break;
        case "officialprotected":
          summary = window.wgULS("裁委会保护", "裁委會保護");
          break;
        case "move":
          summary = window.wgULS("移动保护", "移動保護");
          break;
        case "salt":
          summary = window.wgULS("白纸保护", "白紙保護");
          break;
        case "unprotect":
          summary = window.wgULS("解除保护", "解除保護");
          break;
        default:
          statusElement.warn(window.wgULS("未知保护类型", "未知保護類別"));
          return;
      }
      if (Morebits.string.isInfinity(params.expiry)) {
        summary = expiryText + summary;
      } else {
        summary += expiryText;
      }
      rppPage.setEditSummary("/* ".concat(Morebits.pageNameNorm, " */ ").concat(summary));
      rppPage.setChangeTags(Twinkle.changeTags);
      rppPage.setPageText(text);
      rppPage.save();
    }
  };
  Twinkle.protect.formatProtectionDescription = (protectionLevels) => {
    const protectionNode = [];
    if (Object.keys(protectionLevels).length === 0) {
      protectionNode.push($("<b>".concat(window.wgULS("无保护", "無保護"), "</b>"))[0]);
    } else {
      for (var _i8 = 0, _Object$entries5 = Object.entries(protectionLevels); _i8 < _Object$entries5.length; _i8++) {
        const [type, settings] = _Object$entries5[_i8];
        let label;
        switch (type) {
          case "edit":
            label = window.wgULS("编辑", "編輯");
            break;
          case "move":
            label = window.wgULS("移动", "移動");
            break;
          case "create":
            label = window.wgULS("创建", "建立");
            break;
          case "upload":
            label = window.wgULS("上传", "上傳");
            break;
          default:
            label = type;
            break;
        }
        let level;
        switch (settings.level) {
          case "officialprotected":
            level = window.wgULS("仅允许档案理事员", "僅允許檔案理事員");
            break;
          case "autoconfirmed":
            level = window.wgULS("仅允许自动确认用户", "僅允許自動確認使用者");
            break;
          case "templateeditor":
            level = window.wgULS("仅模板编辑员和管理员", "僅模板編輯員和管理員");
            break;
          case "sysop":
            level = window.wgULS("仅管理员", "僅管理員");
            break;
          default:
            ({
              level
            } = settings);
            break;
        }
        protectionNode.push($("<b>".concat(label, "：").concat(level, "</b>"))[0]);
        if (Morebits.string.isInfinity(settings.expiry)) {
          protectionNode.push(window.wgULS("（无限期）", "（無限期）"));
        } else {
          protectionNode.push("".concat(window.wgULS("（过期：", "（過期：") + new Morebits.date(settings.expiry).calendar("utc"), "）"));
        }
        if (settings.cascade) {
          protectionNode.push(window.wgULS("（连锁）", "（連鎖）"));
        }
      }
    }
    return protectionNode;
  };
  Twinkle.addInitCallback(Twinkle.protect, "protect");
})(jQuery);
//! src/Twinkle/modules/friendlytag.js
/*! Twinkle.js - friendlytag.js */
(function friendlytag($) {
  const $body = $("body");
  Twinkle.tag = () => {
    if (Morebits.isPageRedirect()) {
      Twinkle.tag.mode = window.wgULS("重定向", "重新導向");
      Twinkle.tag.modeEn = "redirect";
      Twinkle.addPortletLink(Twinkle.tag.callback, window.wgULS("标记", "標記"), "friendly-tag", window.wgULS("标记重定向", "標記重新導向"));
    } else if (mw.config.get("wgNamespaceNumber") === 6 && !document.querySelector("#mw-sharedupload") && document.querySelector("#mw-imagepage-section-filehistory")) {
      Twinkle.tag.mode = window.wgULS("文件", "檔案");
      Twinkle.tag.modeEn = "file";
      Twinkle.addPortletLink(Twinkle.tag.callback, window.wgULS("标记", "標記"), "friendly-tag", window.wgULS("标记文件", "標記檔案"));
    } else if ([0, 302].includes(mw.config.get("wgNamespaceNumber")) && mw.config.get("wgCurRevisionId") || Morebits.pageNameNorm === Twinkle.getPref("sandboxPage")) {
      Twinkle.tag.mode = window.wgULS("条目", "條目");
      Twinkle.tag.modeEn = "article";
      Twinkle.tag.canRemove = mw.config.get("wgCurRevisionId") === mw.config.get("wgRevisionId") && // Disabled on latest diff because the diff slider could be used to slide
      // away from the latest diff without causing the script to reload
      !mw.config.get("wgDiffNewId");
      Twinkle.addPortletLink(Twinkle.tag.callback, window.wgULS("标记", "標記"), "friendly-tag", window.wgULS("标记条目", "標記條目"));
    }
  };
  Twinkle.tag.checkedTags = [];
  Twinkle.tag.callback = () => {
    const Window = new Morebits.simpleWindow(630, Twinkle.tag.modeEn === "article" ? 500 : 400);
    Window.setScriptName("Twinkle");
    Window.addFooterLink(window.wgULS("标记设置", "標記設定"), "H:TW/PREF#tag");
    Window.addFooterLink(window.wgULS("Twinkle帮助", "Twinkle說明"), "H:TW/DOC#tag");
    const form = new Morebits.quickForm(Twinkle.tag.callback.evaluate);
    form.append({
      type: "input",
      label: window.wgULS("筛选标记列表：", "篩選標記列表："),
      name: "quickfilter",
      size: "30",
      event: function event() {
        $allCheckboxDivs.find(".search-hit").each((_i, e) => {
          const label_element = e.parentElement;
          label_element.innerHTML = label_element.textContent;
        });
        if (this.value) {
          $allCheckboxDivs.hide();
          $allHeaders.hide();
          const searchString = this.value;
          const searchRegex = new RegExp(mw.util.escapeRegExp(searchString), "i");
          $allCheckboxDivs.find("label").each((_index, element) => {
            const label_text = element.textContent;
            const searchHit = searchRegex.exec(label_text);
            if (searchHit) {
              const range = document.createRange();
              const [textnode] = element.childNodes;
              range.selectNodeContents(textnode);
              range.setStart(textnode, searchHit.index);
              range.setEnd(textnode, searchHit.index + searchString.length);
              const [underline_span] = $("<span>").addClass("search-hit").css("text-decoration", "underline");
              range.surroundContents(underline_span);
              element.parentElement.style.display = "block";
            }
          });
        } else {
          $allCheckboxDivs.show();
          $allHeaders.show();
        }
      }
    });
    switch (Twinkle.tag.modeEn) {
      case "article":
        Window.setTitle(window.wgULS("条目维护标记", "條目維護標記"));
        Twinkle.tag.article.flatObject = {};
        var _iterator23 = _createForOfIteratorHelper(Twinkle.tag.article.tagList), _step23;
        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done; ) {
            const group = _step23.value;
            var _iterator24 = _createForOfIteratorHelper(group.value), _step24;
            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done; ) {
                const subgroup = _step24.value;
                if (subgroup.value) {
                  var _iterator25 = _createForOfIteratorHelper(subgroup.value), _step25;
                  try {
                    for (_iterator25.s(); !(_step25 = _iterator25.n()).done; ) {
                      const item = _step25.value;
                      Twinkle.tag.article.flatObject[item.tag] = {
                        description: item.description,
                        excludeMI: !!item.excludeMI
                      };
                    }
                  } catch (err) {
                    _iterator25.e(err);
                  } finally {
                    _iterator25.f();
                  }
                } else {
                  Twinkle.tag.article.flatObject[subgroup.tag] = {
                    description: subgroup.description,
                    excludeMI: !!subgroup.excludeMI
                  };
                }
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }
        form.append({
          type: "select",
          name: "sortorder",
          label: window.wgULS("查看列表：", "檢視列表："),
          tooltip: window.wgULS("您可以在Twinkle参数设置（H:TW/PREF）中更改此项。", "您可以在Twinkle偏好設定（H:TW/PREF）中更改此項。"),
          event: Twinkle.tag.updateSortOrder,
          list: [{
            type: "option",
            value: "cat",
            label: window.wgULS("按类型", "按類別"),
            selected: Twinkle.getPref("tagArticleSortOrder") === "cat"
          }, {
            type: "option",
            value: "alpha",
            label: "按字母",
            selected: Twinkle.getPref("tagArticleSortOrder") === "alpha"
          }]
        });
        if (!Twinkle.tag.canRemove) {
          const divElement = document.createElement("div");
          divElement.innerHTML = window.wgULS("要移除现有维护标记，请从当前条目版本中打开“标记”菜单", "要移除現有維護標記，請從目前條目版本中打開「標記」選單");
          form.append({
            type: "div",
            name: "untagnotice",
            label: divElement
          });
        }
        form.append({
          type: "div",
          id: "tagWorkArea",
          className: "morebits-scrollbox",
          style: "max-height: 28em"
        });
        form.append({
          type: "checkbox",
          list: [{
            label: window.wgULS("如可能，合并入{{multiple issues}}", "如可能，合併入{{multiple issues}}"),
            value: "group",
            name: "group",
            tooltip: window.wgULS("若加入{{multiple issues}}支持的三个以上的模板，所有支持的模板都会被合并入{{multiple issues}}模板中。", "若加入{{multiple issues}}支援的三個以上的模板，所有支援的模板都會被合併入{{multiple issues}}模板中。"),
            checked: Twinkle.getPref("groupByDefault")
          }]
        });
        form.append({
          type: "input",
          label: "理由：",
          name: "reason",
          tooltip: window.wgULS("附加于编辑摘要的可选理由，例如指出条目内容的哪些部分有问题或移除模板的理由，但若理由很长则应该发表在讨论页。", "附加於編輯摘要的可選理由，例如指出條目內容的哪些部分有問題或移除模板的理由，但若理由很長則應該發表在討論頁。"),
          size: "80"
        });
        break;
      case "file":
        Window.setTitle(window.wgULS("文件维护标记", "檔案維護標記"));
        var _iterator26 = _createForOfIteratorHelper(Twinkle.tag.fileList), _step26;
        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done; ) {
            const group = _step26.value;
            if (group.buildFilename) {
              var _iterator27 = _createForOfIteratorHelper(group.value), _step27;
              try {
                for (_iterator27.s(); !(_step27 = _iterator27.n()).done; ) {
                  const el = _step27.value;
                  el.subgroup = {
                    type: "input",
                    label: window.wgULS("替换的文件：", "替換的檔案："),
                    tooltip: window.wgULS("输入替换此文件的文件名称（必填）", "輸入替換此檔案的檔案名稱（必填）"),
                    name: "".concat(el.value.replace(/ /g, "_"), "File")
                  };
                }
              } catch (err) {
                _iterator27.e(err);
              } finally {
                _iterator27.f();
              }
            }
            form.append({
              type: "header",
              label: group.key
            });
            form.append({
              type: "checkbox",
              name: "tags",
              list: group.value
            });
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }
        if (Twinkle.getPref("customFileTagList").length) {
          form.append({
            type: "header",
            label: window.wgULS("自定义模板", "自訂模板")
          });
          form.append({
            type: "checkbox",
            name: "tags",
            list: Twinkle.getPref("customFileTagList")
          });
        }
        break;
      case "redirect": {
        Window.setTitle(window.wgULS("重定向标记", "重新導向標記"));
        const i = 1;
        var _iterator28 = _createForOfIteratorHelper(Twinkle.tag.redirectList), _step28;
        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done; ) {
            const group = _step28.value;
            form.append({
              type: "header",
              id: "tagHeader".concat(i),
              label: group.key
            });
            form.append({
              type: "checkbox",
              name: "tags",
              list: group.value.map((item) => {
                return {
                  value: item.tag,
                  label: "{{".concat(item.tag, "}}：").concat(item.description),
                  subgroup: item.subgroup
                };
              })
            });
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
        if (Twinkle.getPref("customRedirectTagList").length) {
          form.append({
            type: "header",
            label: window.wgULS("自定义模板", "自訂模板")
          });
          form.append({
            type: "checkbox",
            name: "tags",
            list: Twinkle.getPref("customRedirectTagList")
          });
        }
        break;
      }
      default:
        mw.notify("Twinkle.tag：未知模式 ".concat(Twinkle.tag.mode), {
          type: "warn",
          tag: "friendlytag"
        });
        break;
    }
    if (document.querySelectorAll(".patrollink").length) {
      form.append({
        type: "checkbox",
        list: [{
          label: window.wgULS("标记页面为已巡查", "標記頁面為已巡查"),
          value: "patrol",
          name: "patrol",
          checked: Twinkle.getPref("markTaggedPagesAsPatrolled")
        }]
      });
    }
    form.append({
      type: "submit",
      className: "tw-tag-submit"
    });
    const result = form.render();
    Window.setContent(result);
    Window.display();
    $allCheckboxDivs = $(result).find("[name$=tags]").parent();
    $allHeaders = $(result).find("h5");
    result.quickfilter.focus();
    result.quickfilter.autocomplete = "off";
    result.quickfilter.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        return false;
      }
    });
    if (Twinkle.tag.modeEn === "article") {
      Twinkle.tag.alreadyPresentTags = [];
      if (Twinkle.tag.canRemove) {
        $body.find(".mw-parser-output").children().each((_i, e) => {
          if (e.tagName === "H2") {
            return false;
          }
          if (e.className.indexOf("box-") === 0) {
            if (e.classList[0] === "box-问题条目") {
              $(e).find(".ambox").each((_index, element) => {
                if (element.classList[0].indexOf("box-") === 0) {
                  const boxTag = element.classList[0].slice("box-".length).replace(/_/g, " ");
                  Twinkle.tag.alreadyPresentTags.push(boxTag);
                }
              });
              return true;
            }
            const tag = e.classList[0].slice("box-".length).replace(/_/g, " ");
            Twinkle.tag.alreadyPresentTags.push(tag);
          }
        });
        if ($body.find(".box-Uncategorized").length) {
          Twinkle.tag.alreadyPresentTags.push("Uncategorized");
        }
        if ($body.find(".box-Improve_categories").length) {
          Twinkle.tag.alreadyPresentTags.push("Improve categories");
        }
      }
      const statusNode = document.createElement("span");
      statusNode.style.fontSize = "90%";
      statusNode.id = "tw-tag-status";
      Twinkle.tag.status = {
        // initial state; defined like this because these need to be available for reference
        // in the click event handler
        numAdded: 0,
        numRemoved: 0
      };
      $body.find("button.tw-tag-submit").after(statusNode);
      const evt = document.createEvent("Event");
      evt.initEvent("change", true, true);
      result.sortorder.dispatchEvent(evt);
    } else {
      var _iterator29 = _createForOfIteratorHelper(Morebits.quickForm.getElements(result, "tags")), _step29;
      try {
        for (_iterator29.s(); !(_step29 = _iterator29.n()).done; ) {
          const checkbox = _step29.value;
          generateLinks(checkbox);
        }
      } catch (err) {
        _iterator29.e(err);
      } finally {
        _iterator29.f();
      }
    }
  };
  let $allCheckboxDivs;
  let $allHeaders;
  Twinkle.tag.updateSortOrder = (e) => {
    const {
      form
    } = e.target;
    const sortorder = e.target.value;
    Twinkle.tag.checkedTags = form.getChecked("tags");
    const container = new Morebits.quickForm.element({
      type: "fragment"
    });
    const makeCheckbox = (tag, description) => {
      const checkbox = {
        value: tag,
        label: "{{".concat(tag, "}}: ").concat(description)
      };
      if (Twinkle.tag.checkedTags.includes(tag)) {
        checkbox.checked = true;
      }
      switch (tag) {
        case "Expert needed":
          checkbox.subgroup = [{
            name: "expert",
            type: "input",
            label: window.wgULS("哪个领域的专家（必填）：", "哪個領域的專家（必填）："),
            tooltip: window.wgULS("必填，可参考 Category:需要专业人士关注的页面 使用现存的分类。", "必填，可參考 Category:需要專業人士關注的頁面 使用現存的分類。")
          }, {
            name: "expert2",
            type: "input",
            label: window.wgULS("哪个领域的专家：", "哪個領域的專家："),
            tooltip: window.wgULS("可选，可参考 Category:需要专业人士关注的页面 使用现存的分类。", "可選，可參考 Category:需要專業人士關注的頁面 使用現存的分類。")
          }, {
            name: "expert3",
            type: "input",
            label: window.wgULS("哪个领域的专家：", "哪個領域的專家："),
            tooltip: window.wgULS("可选，可参考 Category:需要专业人士关注的页面 使用现存的分类。", "可選，可參考 Category:需要專業人士關注的頁面 使用現存的分類。")
          }];
          break;
        case "Merge":
        case "Merge from":
        case "Merge to": {
          let otherTagName = "Merge";
          switch (tag) {
            case "Merge from":
              otherTagName = "Merge to";
              break;
            case "Merge to":
              otherTagName = "Merge from";
              break;
          }
          checkbox.subgroup = [{
            name: "mergeTarget",
            type: "input",
            label: window.wgULS("其他条目：", "其他條目："),
            tooltip: window.wgULS("如指定多个条目，请用管道符分隔：条目甲|条目乙", "如指定多個條目，請用管道符分隔：條目甲|條目乙")
          }, {
            type: "checkbox",
            list: [{
              name: "mergeTagOther",
              label: "用{{".concat(otherTagName).concat(window.wgULS("}}标记其他条目", "}}標記其他條目")),
              checked: true,
              tooltip: window.wgULS("仅在只输入了一个条目名时可用", "僅在只輸入了一個條目名時可用")
            }]
          }];
          if (mw.config.get("wgNamespaceNumber") === 0) {
            checkbox.subgroup.push({
              name: "mergeReason",
              type: "textarea",
              label: window.wgULS("合并理由（会被贴上".concat(tag === "Merge to" ? "其他" : "这", "条目的讨论页）："), "合併理由（會被貼上".concat(tag === "Merge to" ? "其他" : "這", "條目的討論頁）：")),
              tooltip: window.wgULS("可选，但强烈推荐。如不需要请留空。仅在只输入了一个条目名时可用。", "可選，但強烈推薦。如不需要請留空。僅在只輸入了一個條目名時可用。")
            });
          }
          break;
        }
        case "Missing information":
          checkbox.subgroup = {
            name: "missingInformation",
            type: "input",
            label: window.wgULS("缺少的内容（必填）：", "缺少的內容（必填）："),
            tooltip: window.wgULS("必填，显示为“缺少有关……的信息。”", "必填，顯示為「缺少有關……的資訊。」")
          };
          break;
        case "Notability":
          checkbox.subgroup = {
            name: "notability",
            type: "select",
            list: [{
              label: "{{Notability}}：".concat(window.wgULS("通用的关注度指引", "通用的關注度指引")),
              value: "none"
            }, {
              label: "{{Notability|Astro}}：".concat(window.wgULS("天体", "天體")),
              value: "Astro"
            }, {
              label: "{{Notability|Biographies}}：".concat(window.wgULS("人物传记", "人物傳記")),
              value: "Biographies"
            }, {
              label: "{{Notability|Book}}：".concat(window.wgULS("书籍", "書籍")),
              value: "Book"
            }, {
              label: "{{Notability|Cyclone}}：".concat(window.wgULS("气旋", "氣旋")),
              value: "Cyclone"
            }, {
              label: "{{Notability|Fiction}}：".concat(window.wgULS("虚构事物", "虛構事物")),
              value: "Fiction"
            }, {
              label: "{{Notability|Geographic}}：".concat(window.wgULS("地理特征", "地理特徵")),
              value: "Geographic"
            }, {
              label: "{{Notability|Geometry}}：".concat(window.wgULS("几何图形", "幾何圖形")),
              value: "Geometry"
            }, {
              label: "{{Notability|Invention}}：".concat(window.wgULS("发明、研究", "發明、研究")),
              value: "Invention"
            }, {
              label: "{{Notability|Music}}：".concat(window.wgULS("音乐", "音樂")),
              value: "Music"
            }, {
              label: "{{Notability|Numbers}}：".concat(window.wgULS("数字", "數字")),
              value: "Numbers"
            }, {
              label: "{{Notability|Organizations}}：".concat(window.wgULS("组织", "組織")),
              value: "Organizations"
            }, {
              label: "{{Notability|Property}}：".concat(window.wgULS("性质表", "性質表")),
              value: "Property"
            }, {
              label: "{{Notability|Traffic}}：交通",
              value: "Traffic"
            }, {
              label: "{{Notability|Web}}：".concat(window.wgULS("网站、网络内容", "網站、網路內容"), "（非正式指引）"),
              value: "Web"
            }]
          };
          break;
        case "Requested move":
          checkbox.subgroup = [{
            name: "moveTarget",
            type: "input",
            label: window.wgULS("新名称：", "新名稱：")
          }, {
            name: "moveReason",
            type: "textarea",
            label: window.wgULS("移动理由（会被粘贴该条目的讨论页）：", "移動理由（會被貼上該條目的討論頁）："),
            tooltip: window.wgULS("可选，但强烈推荐。如不需要请留空。", "可選，但強烈推薦。如不需要請留空。")
          }];
          break;
        case "Split":
          checkbox.subgroup = [{
            name: "target1",
            type: "input",
            label: window.wgULS("页面名1：", "頁面名1："),
            tooltip: window.wgULS("可选。", "可選。")
          }, {
            name: "target2",
            type: "input",
            label: window.wgULS("页面名2：", "頁面名2："),
            tooltip: window.wgULS("可选。", "可選。")
          }, {
            name: "target3",
            type: "input",
            label: window.wgULS("页面名3：", "頁面名3："),
            tooltip: window.wgULS("可选。", "可選。")
          }];
          break;
        case "Cleanup":
          checkbox.subgroup = [{
            name: "cleanupReason",
            type: "input",
            label: "需要清理的理由",
            tooltip: window.wgULS("可选，但强烈推荐。如不需要请留空。", "可選，但強烈推薦。如不需要請留空。")
          }];
          break;
        default:
          break;
      }
      return checkbox;
    };
    const makeCheckboxesForAlreadyPresentTags = () => {
      container.append({
        type: "header",
        id: "tagHeader0",
        label: window.wgULS("已放置的维护标记", "已放置的維護標記")
      });
      const subdiv = container.append({
        type: "div",
        id: "tagSubdiv0"
      });
      const checkboxes = [];
      const unCheckedTags = e.target.form.getUnchecked("existingTags");
      var _iterator30 = _createForOfIteratorHelper(Twinkle.tag.alreadyPresentTags), _step30;
      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done; ) {
          const tag = _step30.value;
          const checkbox = {
            value: tag,
            label: "{{".concat(tag, "}}").concat(Twinkle.tag.article.flatObject[tag] ? ": ".concat(Twinkle.tag.article.flatObject[tag].description) : ""),
            checked: !unCheckedTags.includes(tag)
          };
          checkboxes.push(checkbox);
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }
      subdiv.append({
        type: "checkbox",
        name: "existingTags",
        list: checkboxes
      });
    };
    if (sortorder === "cat") {
      const doCategoryCheckboxes = (subdiv, subgroup) => {
        const checkboxes = [];
        var _iterator31 = _createForOfIteratorHelper(subgroup), _step31;
        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done; ) {
            const item = _step31.value;
            if (!Twinkle.tag.alreadyPresentTags.includes(item.tag)) {
              checkboxes.push(makeCheckbox(item.tag, item.description));
            }
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }
        subdiv.append({
          type: "checkbox",
          name: "tags",
          list: checkboxes
        });
      };
      if (Twinkle.tag.alreadyPresentTags.length > 0) {
        makeCheckboxesForAlreadyPresentTags();
      }
      let i = 1;
      var _iterator32 = _createForOfIteratorHelper(Twinkle.tag.article.tagList), _step32;
      try {
        for (_iterator32.s(); !(_step32 = _iterator32.n()).done; ) {
          const group = _step32.value;
          container.append({
            type: "header",
            id: "tagHeader".concat(i),
            label: group.key
          });
          const subdiv = container.append({
            type: "div",
            id: "tagSubdiv".concat(i++)
          });
          if (group.value[0].tag) {
            doCategoryCheckboxes(subdiv, group.value);
          } else {
            var _iterator33 = _createForOfIteratorHelper(group.value), _step33;
            try {
              for (_iterator33.s(); !(_step33 = _iterator33.n()).done; ) {
                const subgroup = _step33.value;
                subdiv.append({
                  type: "div",
                  label: [Morebits.htmlNode("b", subgroup.key)]
                });
                doCategoryCheckboxes(subdiv, subgroup.value);
              }
            } catch (err) {
              _iterator33.e(err);
            } finally {
              _iterator33.f();
            }
          }
        }
      } catch (err) {
        _iterator32.e(err);
      } finally {
        _iterator32.f();
      }
    } else {
      var _Twinkle$tag$article;
      if (Twinkle.tag.alreadyPresentTags.length > 0) {
        makeCheckboxesForAlreadyPresentTags();
        container.append({
          type: "header",
          id: "tagHeader1",
          label: window.wgULS("可用的维护标记", "可用的維護標記")
        });
      }
      (_Twinkle$tag$article = Twinkle.tag.article).alphabeticalList || (_Twinkle$tag$article.alphabeticalList = Object.keys(Twinkle.tag.article.flatObject).sort());
      const checkboxes = [];
      var _iterator34 = _createForOfIteratorHelper(Twinkle.tag.article.alphabeticalList), _step34;
      try {
        for (_iterator34.s(); !(_step34 = _iterator34.n()).done; ) {
          const tag = _step34.value;
          if (!Twinkle.tag.alreadyPresentTags.includes(tag)) {
            checkboxes.push(makeCheckbox(tag, Twinkle.tag.article.flatObject[tag].description));
          }
        }
      } catch (err) {
        _iterator34.e(err);
      } finally {
        _iterator34.f();
      }
      container.append({
        type: "checkbox",
        name: "tags",
        list: checkboxes
      });
    }
    if (Twinkle.getPref("customTagList").length) {
      container.append({
        type: "header",
        label: window.wgULS("自定义模板", "自訂模板")
      });
      container.append({
        type: "checkbox",
        name: "tags",
        list: Twinkle.getPref("customTagList").map((el) => {
          el.checked = Twinkle.tag.checkedTags.includes(el.value);
          return el;
        })
      });
    }
    const $workarea = $(form).find("#tagWorkArea");
    const rendered = container.render();
    $workarea.empty().append(rendered);
    $allCheckboxDivs = $workarea.find("[name=tags], [name=existingTags]").parent();
    $allHeaders = $workarea.find("h5, .quickformDescription");
    form.quickfilter.value = "";
    form.quickfilter.focus();
    $workarea.find("h5").css({
      "font-size": "110%"
    });
    $workarea.find("h5:not(:first-child)").css({
      "margin-top": "1em"
    });
    $workarea.find("div").filter(":has(span.quickformDescription)").css({
      "margin-top": "0.4em"
    });
    var _iterator35 = _createForOfIteratorHelper(Morebits.quickForm.getElements(form, "existingTags")), _step35;
    try {
      for (_iterator35.s(); !(_step35 = _iterator35.n()).done; ) {
        const checkbox = _step35.value;
        generateLinks(checkbox);
      }
    } catch (err) {
      _iterator35.e(err);
    } finally {
      _iterator35.f();
    }
    var _iterator36 = _createForOfIteratorHelper(Morebits.quickForm.getElements(form, "tags")), _step36;
    try {
      for (_iterator36.s(); !(_step36 = _iterator36.n()).done; ) {
        const checkbox = _step36.value;
        generateLinks(checkbox);
      }
    } catch (err) {
      _iterator36.e(err);
    } finally {
      _iterator36.f();
    }
    const statusNode = document.querySelector("#tw-tag-status");
    $body.find("[name=tags], [name=existingTags]").on("click", function() {
      if (this.name === "tags") {
        Twinkle.tag.status.numAdded += this.checked ? 1 : -1;
      } else if (this.name === "existingTags") {
        Twinkle.tag.status.numRemoved += this.checked ? -1 : 1;
      }
      const firstPart = "加入".concat(Twinkle.tag.status.numAdded).concat(window.wgULS("个标记", "個標記"));
      const secondPart = "移除".concat(Twinkle.tag.status.numRemoved).concat(window.wgULS("个标记", "個標記"));
      statusNode.textContent = (Twinkle.tag.status.numAdded ? "  ".concat(firstPart) : "") + (Twinkle.tag.status.numRemoved ? (Twinkle.tag.status.numAdded ? "；" : "  ") + secondPart : "");
    });
  };
  const generateLinks = (checkbox) => {
    const link = Morebits.htmlNode("a", ">");
    link.setAttribute("class", "tag-template-link");
    const tagname = checkbox.values;
    link.setAttribute("href", mw.util.getUrl((tagname.includes(":") ? "" : "Template:") + (tagname.includes("|") ? tagname.slice(0, tagname.indexOf("|")) : tagname)));
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    $(checkbox).parent().append([" ", link]);
  };
  Twinkle.tag.article = {};
  Twinkle.tag.article.tagList = [{
    key: window.wgULS("清理和维护模板", "清理和維護模板"),
    value: [{
      key: window.wgULS("常规清理", "常規清理"),
      value: [{
        tag: "Cleanup",
        description: window.wgULS("可能需要进行清理，以符合有兽档案馆的质量标准", "可能需要進行清理，以符合有獸檔案館的質量標準")
      }, {
        tag: "Cleanup rewrite",
        description: window.wgULS("不符合有兽档案馆的质量标准，需要完全重写", "不符合有獸檔案館的質量標準，需要完全重寫")
      }, {
        tag: "Cleanup-jargon",
        description: window.wgULS("包含过多行话或专业术语，可能需要简化或提出进一步解释", "包含過多行話或專業術語，可能需要簡化或提出進一步解釋")
      }, {
        tag: "Copy edit",
        description: window.wgULS("需要编修，以确保文法、用词、语气、格式、标点等使用恰当", "需要編修，以確保文法、用詞、語氣、格式、標點等使用恰當")
      }]
    }, {
      key: window.wgULS("可能多余的内容", "可能多餘的內容"),
      value: [{
        tag: "Copypaste",
        description: window.wgULS("内容可能是从某个来源处拷贝后粘贴", "內容可能是從某個來源處拷貝後貼上")
      }, {
        tag: "External links",
        description: window.wgULS("使用外部链接的方式可能不符合有兽档案馆的条例", "使用外部連結的方式可能不符合有獸檔案館的條例")
      }, {
        tag: "Non-free",
        description: window.wgULS("可能过多或不当地使用了受著作权保护的文字、图像或多媒体文件", "可能過多或不當地使用了受版權保護的文字、圖像或多媒體檔案")
      }]
    }, {
      key: window.wgULS("结构和导言", "結構和導言"),
      value: [{
        tag: "Lead too long",
        description: window.wgULS("导言部分也许过于冗长", "導言部分也許過於冗長")
      }, {
        tag: "Lead too short",
        description: window.wgULS("导言部分也许不足以概括其内容", "導言部分也許不足以概括其內容")
      }, {
        tag: "Very long",
        description: window.wgULS("可能过于冗长", "可能過於冗長")
      }]
    }, {
      key: window.wgULS("虚构作品相关清理", "虛構作品相關清理"),
      value: [{
        tag: "In-universe",
        description: window.wgULS("使用小说故事内的观点描述一个虚构事物", "使用小說故事內的觀點描述一個虛構事物")
      }, {
        tag: "Long plot",
        description: window.wgULS("可能包含过于详细的剧情摘要", "可能包含過於詳細的劇情摘要")
      }]
    }]
  }, {
    key: window.wgULS("常规条目问题", "常規條目問題"),
    value: [{
      key: "重要性和知名度",
      value: [{
        tag: "Notability",
        description: window.wgULS("可能不符合通用关注度指引", "可能不符合通用關注度指引"),
        excludeMI: true
      }, {
        tag: "Notability Unreferenced",
        description: window.wgULS("可能具备关注度，但需要来源加以彰显", "可能具備關注度，但需要來源加以彰顯")
      }]
    }, {
      key: window.wgULS("写作风格", "寫作風格"),
      value: [{
        tag: "Advert",
        description: window.wgULS("类似广告或宣传性内容", "類似廣告或宣傳性內容")
      }, {
        tag: "Fanpov",
        description: window.wgULS("类似爱好者网页", "類似愛好者網頁")
      }, {
        tag: "How-to",
        description: window.wgULS("包含指南或教学内容", "包含指南或教學內容")
      }, {
        tag: "Inappropriate person",
        description: window.wgULS("使用不适当的第一人称和第二人称", "使用不適當的第一人稱和第二人稱")
      }, {
        tag: "Newsrelease",
        description: window.wgULS("阅读起来像是新闻稿及包含过度的宣传性语调", "閱讀起來像是新聞稿及包含過度的宣傳性語調")
      }, {
        tag: "Prose",
        description: window.wgULS("使用了日期或时间列表式记述，需要改写为连贯的叙述性文字", "使用了日期或時間列表式記述，需要改寫為連貫的敘述性文字")
      }, {
        tag: "Review",
        description: window.wgULS("阅读起来类似评论，需要清理", "閱讀起來類似評論，需要清理")
      }, {
        tag: "Tone",
        description: window.wgULS("语调或风格可能不适合百科全书的写作方式", "語調或風格可能不適合百科全書的寫作方式")
      }]
    }, {
      key: window.wgULS("内容", "內容"),
      value: [
        {
          tag: "Missing information",
          description: "缺少必要的信息"
        },
        // these three have a subgroup with several options
        {
          tag: "Substub",
          description: window.wgULS("过于短小", "過於短小"),
          excludeMI: true
        },
        {
          tag: "Unencyclopedic",
          description: window.wgULS("可能不适合写入百科全书", "可能不適合寫入百科全書")
        }
      ]
    }, {
      key: window.wgULS("信息和细节", "資訊和細節"),
      value: [{
        tag: "Expert needed",
        description: window.wgULS("需要精通或熟悉本主题的专业人士（专家）参与及协助编辑", "需要精通或熟悉本主題的專業人士（專家）參與及協助編輯")
      }, {
        tag: "Overly detailed",
        description: window.wgULS("包含太多过度细节内容", "包含太多過度細節內容")
      }, {
        tag: "Trivia",
        description: window.wgULS("应避免有陈列杂项、琐碎资料的部分", "應避免有陳列雜項、瑣碎資料的部分")
      }]
    }, {
      key: window.wgULS("时间性", "時間性"),
      value: [{
        tag: "Current",
        description: window.wgULS("记述新闻动态", "記述新聞動態"),
        excludeMI: true
      }, {
        tag: "Update",
        description: window.wgULS("当前条目或章节需要更新", "當前條目或章節需要更新")
      }]
    }, {
      key: window.wgULS("客观性和事实准确性", "客觀性和事實準確性"),
      value: [{
        tag: "Autobiography",
        description: window.wgULS("类似一篇自传，或内容主要由条目描述的当事人或组织撰写、编辑", "類似一篇自傳，或內容主要由條目描述的當事人或組織撰寫、編輯")
      }, {
        tag: "COI",
        description: window.wgULS("主要贡献者与本条目所宣扬的内容可能存在利益冲突", "主要貢獻者與本條目所宣揚的內容可能存在利益衝突")
      }, {
        tag: "Disputed",
        description: window.wgULS("内容疑欠准确，有待查证", "內容疑欠準確，有待查證")
      }, {
        tag: "Globalize",
        description: window.wgULS("仅具有一部分地区的信息或观点", "僅具有一部分地區的資訊或觀點")
      }, {
        tag: "Hoax",
        description: window.wgULS("真实性被质疑", "真實性被質疑")
      }, {
        tag: "POV",
        description: window.wgULS("客观性有争议。内容、语调可能带有明显的个人观点或地方色彩", "客觀性有爭議。內容、語調可能帶有明顯的個人觀點或地方色彩")
      }, {
        tag: "Self-contradictory",
        description: window.wgULS("内容自相矛盾", "內容自相矛盾")
      }, {
        tag: "Weasel",
        description: window.wgULS("语义模棱两可而损及其客观性或准确性", "語意模棱兩可而損及其客觀性或準確性")
      }]
    }, {
      key: window.wgULS("可供查证和来源", "可供查證和來源"),
      value: [{
        tag: "BLPdispute",
        description: window.wgULS("可能违反了有兽档案馆关于生者传记的条例", "可能違反了有獸檔案館關於生者傳記的條例")
      }, {
        tag: "BLPsources",
        description: window.wgULS("生者传记需要补充更多可供查证的来源", "生者傳記需要補充更多可供查證的來源")
      }, {
        tag: "BLP unsourced",
        description: window.wgULS("生者传记没有列出任何参考或来源", "生者傳記沒有列出任何參考或來源")
      }, {
        tag: "Citecheck",
        description: window.wgULS("可能包含不适用或被曲解的引用资料，部分内容的准确性无法被证实", "可能包含不適用或被曲解的引用資料，部分內容的準確性無法被證實")
      }, {
        tag: "More footnotes needed",
        description: window.wgULS("因为文内引用不足，部分字句的来源仍然不明", "因為文內引用不足，部分字句的來源仍然不明")
      }, {
        tag: "No footnotes",
        description: window.wgULS("因为没有内文引用而来源仍然不明", "因為沒有內文引用而來源仍然不明")
      }, {
        tag: "Onesource",
        description: window.wgULS("极大或完全地依赖于某个单一的来源", "極大或完全地依賴於某個單一的來源")
      }, {
        tag: "Original research",
        description: window.wgULS("可能包含原创研究或未查证内容", "可能包含原創研究或未查證內容")
      }, {
        tag: "Primarysources",
        description: window.wgULS("依赖第一手来源", "依賴第一手來源")
      }, {
        tag: "Refimprove",
        description: window.wgULS("需要补充更多来源", "需要補充更多來源")
      }, {
        tag: "Unreferenced",
        description: window.wgULS("没有列出任何参考或来源", "沒有列出任何參考或來源")
      }]
    }]
  }, {
    key: window.wgULS("具体内容问题", "具體內容問題"),
    value: [{
      key: window.wgULS("语言", "語言"),
      value: [{
        tag: "NotMandarin",
        description: window.wgULS("包含过多不是现代标准汉语的内容", "包含過多不是現代標準漢語的內容"),
        excludeMI: true
      }, {
        tag: "Rough translation",
        description: window.wgULS("翻译品质不佳", "翻譯品質不佳")
      }]
    }, {
      key: window.wgULS("链接", "連結"),
      value: [{
        tag: "Dead end",
        description: window.wgULS("需要加上内部链接以构筑百科全书的链接网络", "需要加上內部連結以構築百科全書的連結網絡")
      }, {
        tag: "Orphan",
        description: window.wgULS("没有或只有很少链入页面", "沒有或只有很少連入頁面")
      }, {
        tag: "Overlinked",
        description: window.wgULS("含有过多、重复、或不必要的内部链接", "含有過多、重複、或不必要的內部連結")
      }, {
        tag: "Underlinked",
        description: window.wgULS("需要更多内部链接以构筑百科全书的链接网络", "需要更多內部連結以構築百科全書的連結網絡")
      }]
    }, {
      key: window.wgULS("参考技术", "參考技術"),
      value: [{
        tag: "Citation style",
        description: window.wgULS("引用需要进行清理", "引用需要進行清理")
      }]
    }, {
      key: window.wgULS("分类", "分類"),
      value: [{
        tag: "Improve categories",
        description: window.wgULS("需要更多页面分类", "需要更多頁面分類"),
        excludeMI: true
      }, {
        tag: "Uncategorized",
        description: window.wgULS("缺少页面分类", "缺少頁面分類"),
        excludeMI: true
      }]
    }]
  }, {
    key: window.wgULS("合并、拆分、移动", "合併、拆分、移動"),
    value: [{
      tag: "Merge from",
      description: window.wgULS("建议将页面并入此页面", "建議將頁面併入此頁面"),
      excludeMI: true
    }, {
      tag: "Merge to",
      description: window.wgULS("建议将此页面并入页面", "建議將此頁面併入頁面"),
      excludeMI: true
    }, {
      tag: "Merge",
      description: window.wgULS("建议此页面与页面合并", "建議此頁面與頁面合併"),
      excludeMI: true
    }, {
      tag: "Requested move",
      description: window.wgULS("建议将此页面移动到新名称", "建議將此頁面移動到新名稱"),
      excludeMI: true
    }, {
      tag: "Split",
      description: window.wgULS("建议将此页面分割为多个页面", "建議將此頁面分割為多個頁面"),
      excludeMI: true
    }]
  }];
  Twinkle.tag.redirectList = [{
    key: "常用模板",
    value: [{
      tag: window.wgULS("合并重定向", "合併重定向"),
      description: window.wgULS("保持页面题名至相应主条目，令页面内容在合并后仍能保存其编辑历史", "保持頁面題名至相應主條目，令頁面內容在合併後仍能儲存其編輯歷史")
    }, {
      tag: window.wgULS("简繁重定向", "簡繁重定向"),
      description: window.wgULS("引导简体至繁体，或繁体至简体", "引導簡體至繁體，或繁體至簡體")
    }, {
      tag: window.wgULS("关注度重定向", "關注度重定向"),
      description: window.wgULS("缺乏关注度的子主题向有关注度的母主题的重定向", "缺乏關注度的子主題向有關注度的母主題的重定向")
    }, {
      tag: "模板重定向",
      description: window.wgULS("指向模板的重定向页面", "指向模板的重定向頁面")
    }, {
      tag: window.wgULS("别名重定向", "別名重定向"),
      description: window.wgULS("标题的其他名称、笔名、绰号、同义字等", "標題的其他名稱、筆名、綽號、同義字等")
    }, {
      tag: window.wgULS("译名重定向", "譯名重定向"),
      description: window.wgULS("人物、作品等各项事物的其他翻译名称", "人物、作品等各項事物的其他翻譯名稱")
    }, {
      tag: window.wgULS("缩写重定向", "縮寫重定向"),
      description: window.wgULS("标题缩写", "標題縮寫")
    }, {
      tag: window.wgULS("拼写重定向", "拼寫重定向"),
      description: window.wgULS("标题的其他不同拼写", "標題的其他不同拼寫")
    }, {
      tag: window.wgULS("错字重定向", "錯字重定向"),
      description: window.wgULS("纠正标题的常见错误拼写或误植", "糾正標題的常見錯誤拼寫或誤植")
    }, {
      tag: window.wgULS("旧名重定向", "舊名重定向"),
      description: window.wgULS("将事物早前的名称引导至更改后的主题", "將事物早前的名稱引導至更改後的主題")
    }, {
      tag: "全名重定向",
      description: window.wgULS("标题的完整或更完整名称", "標題的完整或更完整名稱")
    }, {
      tag: "短名重定向",
      description: window.wgULS("完整标题名称或人物全名的部分、不完整的名称或简称", "完整標題名稱或人物全名的部分、不完整的名稱或簡稱")
    }, {
      tag: "姓氏重定向",
      description: "人物姓氏"
    }, {
      tag: "名字重定向",
      description: "人物人名"
    }, {
      tag: "本名重定向",
      description: "人物本名"
    }, {
      tag: "非中文重定向",
      description: window.wgULS("非中文标题", "非中文標題"),
      subgroup: [{
        name: "altLangFrom",
        type: "input",
        label: "本重新導向的語言（可選）",
        tooltip: "輸入重新導向名稱所使用語言的ISO 639代碼，例如en代表英語，代碼可參見 Template:ISO_639_name"
      }]
    }, {
      tag: "日文重定向",
      description: window.wgULS("日语名称", "日語名稱")
    }]
  }, {
    key: "偶用模板",
    value: [{
      tag: "角色重定向",
      description: window.wgULS("电视剧、电影、书籍等作品的角色", "電視劇、電影、書籍等作品的角色")
    }, {
      tag: window.wgULS("章节重定向", "章節重定向"),
      description: window.wgULS("导向至较高密度组织的页面", "導向至較高密度組織的頁面")
    }, {
      tag: "列表重定向",
      description: window.wgULS("导向至低密度的列表", "導向至低密度的列表")
    }, {
      tag: "可能性重定向",
      description: window.wgULS("导向至当前提供内容更为详尽的目标页面", "導向至當前提供內容更為詳盡的目標頁面")
    }, {
      tag: window.wgULS("关联字重定向", "關聯字重定向"),
      description: window.wgULS("标题名称关联字", "標題名稱關聯字")
    }, {
      tag: window.wgULS("条目请求重定向", "條目請求重定向"),
      description: window.wgULS("需要独立条目的页面", "需要獨立條目的頁面"),
      subgroup: [{
        name: "reqArticleLang",
        type: "input",
        label: "外語語言代碼：",
        tooltip: "使用ISO 639代碼，可參見 Template:ISO_639_name"
      }, {
        name: "reqArticleTitle",
        type: "input",
        label: "外語頁面名稱：",
        size: 60
      }]
    }, {
      tag: window.wgULS("快捷方式重定向", "捷徑重定向"),
      description: window.wgULS("有兽档案馆快捷方式", "有獸檔案館快捷方式")
    }]
  }, {
    key: window.wgULS("鲜用模板", "鮮用模板"),
    value: [{
      tag: window.wgULS("词组重定向", "詞組重定向"),
      description: window.wgULS("将词组/词组/成语指向切题的条目及恰当章节", "將詞組/詞組/成語指向切題的條目及恰當章節")
    }, {
      tag: window.wgULS("消歧义页重定向", "消歧義頁重定向"),
      description: window.wgULS("指向消歧义页", "指向消歧義頁")
    }, {
      tag: "域名重定向",
      description: window.wgULS("域名", "網域名稱")
    }, {
      tag: "年代重定向",
      description: window.wgULS("于年份条目导向至年代条目", "於年份條目導向至年代條目")
    }, {
      tag: window.wgULS("用户框模板重定向", "用戶框模板重定向"),
      description: window.wgULS("用户框模板", "用戶框模板")
    }, {
      tag: "重定向模板用重定向",
      description: window.wgULS("导向至重定向模板", "導向至重定向模板")
    }, {
      tag: "EXIF重定向",
      description: window.wgULS("JPEG图像文件包含EXIF信息", "JPEG圖檔包含EXIF資訊")
    }]
  }];
  Twinkle.tag.fileList = [{
    key: window.wgULS("著作权和来源问题标签", "著作權和來源問題標籤"),
    value: [{
      label: "{{Non-free reduce}}：".concat(window.wgULS("非低分辨率的合理使用图像（或过长的音频剪辑等）", "非低解析度的合理使用圖像（或過長的音頻剪輯等）")),
      value: "Non-free reduce"
    }]
  }, {
    key: window.wgULS("清理标签", "清理標籤"),
    value: [{
      label: "{{Watermark}}：".concat(window.wgULS("图像包含了水印", "圖像包含了浮水印")),
      value: "Watermark"
    }, {
      label: "{{Rename media}}：".concat(window.wgULS("文件应该根据文件名称指引被重命名", "檔案應該根據檔案名稱指引被重新命名")),
      value: "Rename media",
      subgroup: [{
        type: "input",
        name: "renamemediaNewname",
        label: window.wgULS("新名称：", "新名稱："),
        tooltip: window.wgULS("输入图像的新名称（可选）", "輸入圖像的新名稱（可選）")
      }, {
        type: "input",
        name: "renamemediaReason",
        label: "原因：",
        tooltip: window.wgULS("输入重命名的原因（可选）", "輸入重新命名的原因（可選）")
      }]
    }, {
      label: "{{Should be SVG}}：".concat(window.wgULS("PNG、GIF、JPEG文件应该重制成矢量图形", "PNG、GIF、JPEG檔案應該重製成向量圖形")),
      value: "Should be SVG"
    }]
  }, {
    key: window.wgULS("文件取代标签", "檔案取代標籤"),
    value: [{
      label: "{{Obsolete}}：".concat(window.wgULS("有新版本可用的过时文件", "有新版本可用的過時檔案")),
      value: "Obsolete"
    }, {
      label: "{{Vector version available}}：".concat(window.wgULS("有矢量图形可用的非矢量图形文件", "有向量圖形可用的非向量圖形檔案")),
      value: "Vector version available"
    }],
    buildFilename: true
  }];
  Twinkle.tag.callbacks = {
    article: (pageobj) => {
      let pageText = pageobj.getPageText().replace(/\{\{\s*([Nn]ew unreviewed article|[Uu]nreviewed|[Uu]serspace draft)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/g, "");
      const params = pageobj.getCallbackParameters();
      const postRemoval = () => {
        if (params.tagsToRemove.length) {
          pageText = pageText.replace(/\{\{(multiple ?issues|article ?issues|mi|ai|issues|多個問題|多个问题|問題條目|问题条目|數個問題|数个问题)\s*\|\s*\}\}\n?/im, "");
          pageText = pageText.replace(/\{\{(?:multiple ?issues|article ?issues|mi|ai|issues|多個問題|多个问题|問題條目|问题条目|數個問題|数个问题)\s*\|\s*(\{\{(?:\{\{[^{}]*\}\}|[^{}])+\}\})\s*\}\}/im, "$1");
        }
        const makeSentence = (array) => {
          if (array.length < 3) {
            return array.join("和");
          }
          const last = array.pop();
          return "".concat(array.join("、"), "和").concat(last);
        };
        const makeTemplateLink = (tag) => {
          let text = "{{[[";
          if (tag.includes("|")) {
            tag = tag.slice(0, tag.indexOf("|"));
          }
          text += tag.includes(":") ? tag : "Template:".concat(tag, "|").concat(tag);
          return "".concat(text, "]]}}");
        };
        let summaryText;
        const addedTags = params.tags.map(makeTemplateLink);
        const removedTags = params.tagsToRemove.map(makeTemplateLink);
        if (addedTags.length) {
          summaryText = "加入".concat(makeSentence(addedTags));
          summaryText += removedTags.length ? "並移除".concat(makeSentence(removedTags)) : "";
        } else {
          summaryText = "移除".concat(makeSentence(removedTags));
        }
        summaryText += window.wgULS("标记", "標記");
        if (params.reason) {
          summaryText += "：".concat(params.reason);
        }
        if (summaryText.length > 499) {
          summaryText = summaryText.replace(/\[\[[^|]+\|([^\]]+)\]\]/g, "$1");
        }
        pageobj.setPageText(pageText);
        pageobj.setEditSummary(summaryText);
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setWatchlist(Twinkle.getPref("watchTaggedPages"));
        pageobj.setMinorEdit(Twinkle.getPref("markTaggedPagesAsMinor"));
        pageobj.setCreateOption("nocreate");
        pageobj.save(() => {
          if (params.mergeReason) {
            const talkpage = new Morebits.wiki.page("Talk:".concat(params.discussArticle), window.wgULS("将理由贴进讨论页", "將理由貼進討論頁"));
            talkpage.setNewSectionText("".concat(params.mergeReason.trim(), " ~~").concat("~~"));
            talkpage.setNewSectionTitle("请求与[[".concat(params.nonDiscussArticle, "]]合并"));
            talkpage.setChangeTags(Twinkle.changeTags);
            talkpage.setWatchlist(Twinkle.getPref("watchMergeDiscussions"));
            talkpage.setCreateOption("recreate");
            talkpage.newSection();
          }
          if (params.mergeTagOther) {
            let otherTagName = "Merge";
            if (params.mergeTag === "Merge from") {
              otherTagName = "Merge to";
            } else if (params.mergeTag === "Merge to") {
              otherTagName = "Merge from";
            }
            const newParams = {
              tags: [otherTagName],
              tagsToRemove: [],
              tagsToRemain: [],
              mergeTarget: Morebits.pageNameNorm,
              discussArticle: params.discussArticle,
              talkDiscussionTitle: params.talkDiscussionTitle,
              talkDiscussionTitleLinked: params.talkDiscussionTitleLinked
            };
            const otherpage = new Morebits.wiki.page(params.mergeTarget, "".concat(window.wgULS("标记其他页面（", "標記其他頁面（") + params.mergeTarget, "）"));
            otherpage.setCallbackParameters(newParams);
            otherpage.load(Twinkle.tag.callbacks.article);
          }
          if (params.moveReason) {
            let moveTalkpageText = "\n\n{{".concat("subst:", "RM|1=".concat(params.moveReason.trim()));
            if (params.moveTarget) {
              moveTalkpageText += "|2=".concat(params.moveTarget);
            }
            moveTalkpageText += "}}";
            const moveTalkpage = new Morebits.wiki.page("Talk:".concat(params.discussArticle), window.wgULS("将理由贴进讨论页", "將理由貼進討論頁"));
            moveTalkpage.setAppendText(moveTalkpageText);
            moveTalkpage.setEditSummary(window.wgULS("请求移动", "請求移動") + (params.moveTarget ? "至[[".concat(params.moveTarget, "]]") : ""));
            moveTalkpage.setChangeTags(Twinkle.changeTags);
            moveTalkpage.setCreateOption("recreate");
            moveTalkpage.append();
          }
        });
        if (params.patrol) {
          pageobj.patrol();
        }
      };
      const removeTags = () => {
        if (params.tagsToRemove.length === 0) {
          postRemoval();
          return;
        }
        Morebits.status.info(window.wgULS("信息", "資訊"), window.wgULS("移除取消选择的已存在标记", "移除取消選擇的已存在標記"));
        const getRedirectsFor = [];
        var _iterator37 = _createForOfIteratorHelper(params.tagsToRemove), _step37;
        try {
          for (_iterator37.s(); !(_step37 = _iterator37.n()).done; ) {
            const tag = _step37.value;
            const tag_re = new RegExp("\\{\\{".concat(Morebits.pageNameRegex(tag), "\\s*(\\|[^}]+)?\\}\\}\\n?"));
            if (tag_re.test(pageText)) {
              pageText = pageText.replace(tag_re, "");
            } else {
              getRedirectsFor.push("Template:".concat(tag));
            }
          }
        } catch (err) {
          _iterator37.e(err);
        } finally {
          _iterator37.f();
        }
        if (!getRedirectsFor.length) {
          postRemoval();
          return;
        }
        const api = new Morebits.wiki.api(window.wgULS("获取模板重定向", "取得模板重新導向"), {
          action: "query",
          prop: "linkshere",
          titles: getRedirectsFor.join("|"),
          redirects: 1,
          lhnamespace: "10",
          lhshow: "redirect",
          lhlimit: "max"
          // 500 is max for normal users, 5000 for bots and sysops
        }, (apiobj) => {
          $(apiobj.responseXML).find("page").each((_idx, page) => {
            let removed = false;
            $(page).find("lh").each((_index, element) => {
              const tag = $(element).attr("title").slice(9);
              const tag_re = new RegExp("\\{\\{".concat(Morebits.pageNameRegex(tag), "\\s*(\\|(?:\\{\\{[^{}]*\\}\\}|[^{}])*)?\\}\\}\\n?"));
              if (tag_re.test(pageText)) {
                pageText = pageText.replace(tag_re, "");
                removed = true;
                return false;
              }
            });
            if (!removed) {
              Morebits.status.warn(window.wgULS("信息", "資訊"), window.wgULS("无法在页面上找到{{", "無法在頁面上找到{{") + $(page).attr("title").slice(9) + window.wgULS("}}……跳过", "}}……跳過"));
            }
          });
          postRemoval();
        });
        api.post();
      };
      if (!params.tags.length) {
        removeTags();
        return;
      }
      let tagRe;
      let tagText = "";
      let tags = [];
      const groupableTags = [];
      const groupableExistingTags = [];
      const addTag = (tagName) => {
        let currentTag = "";
        if (tagName === "Uncategorized" || tagName === "Improve categories") {
          pageText += "\n\n{{".concat(tagName, "|time={{").concat("subst:", "#time:c}}}}");
        } else {
          currentTag += "{{".concat(tagName);
          switch (tagName) {
            case "Expert needed":
              currentTag += "|subject=".concat(params.expert);
              if (params.expert2) {
                currentTag += "|subject2=".concat(params.expert2);
              }
              if (params.expert3) {
                currentTag += "|subject3=".concat(params.expert3);
              }
              break;
            case "Merge":
            case "Merge to":
            case "Merge from":
              if (params.mergeTarget) {
                params.mergeTarget = Morebits.string.toUpperCaseFirstChar(params.mergeTarget.replace(/_/g, " "));
                currentTag += "|".concat(params.mergeTarget);
                if (mw.config.get("wgNamespaceNumber") === 0 && (params.mergeReason || params.discussArticle)) {
                  if (!params.discussArticle) {
                    params.discussArticle = tagName === "Merge to" ? params.mergeTarget : mw.config.get("wgTitle");
                    params.nonDiscussArticle = tagName === "Merge to" ? mw.config.get("wgTitle") : params.mergeTarget;
                    params.talkDiscussionTitle = window.wgULS("请求与", "請求與") + params.nonDiscussArticle + window.wgULS("合并", "合併");
                  }
                  currentTag += "|discuss=Talk:".concat(params.discussArticle, "#").concat(params.talkDiscussionTitle);
                }
              }
              break;
            case "Missing information":
              currentTag += "|1=".concat(params.missingInformation);
              break;
            case "Notability":
              if (params.notability !== "none") {
                currentTag += "|3=".concat(params.notability);
              }
              break;
            case "Requested move":
              if (params.moveTarget) {
                params.moveTarget = Morebits.string.toUpperCaseFirstChar(params.moveTarget.replace(/_/g, " "));
                params.discussArticle = mw.config.get("wgTitle");
                currentTag += "|".concat(params.moveTarget);
              }
              break;
            case "Split":
              if (params.target1) {
                currentTag += "|1=".concat(params.target1);
              }
              if (params.target2) {
                currentTag += "|2=".concat(params.target2);
              }
              if (params.target3) {
                currentTag += "|3=".concat(params.target3);
              }
              break;
            case "Cleanup":
              if (params.cleanupReason) {
                currentTag += "|reason=".concat(params.cleanupReason);
              }
              break;
            default:
              break;
          }
          currentTag += "|time={{".concat("subst:", "#time:c}}}}\n");
          tagText += currentTag;
        }
      };
      const addUngroupedTags = () => {
        for (var _i9 = 0, _tags = tags; _i9 < _tags.length; _i9++) {
          const tag = _tags[_i9];
          addTag(tag);
        }
        const ysarchives_page = new Morebits.wikitext.page(pageText);
        const templatesAfter = (
          // Protection templates
          // CSD
          // AfD
          "".concat(Twinkle.hatnoteRegex, "pp|pp-.*?|(?:Delete|Db-reason|D|Deletebecause|Db|速删|速刪|Speedy|SD|快删|快刪|CSD)|[rsaiftcmv]fd|vfd-(?:b|q|s|source|v|wikt)|(?:移动到维基|移動到維基)(?:教科书|教科書|语录|語錄|文库|文庫|导游|導遊|词典|詞典)")
        );
        pageText = ysarchives_page.insertAfterTemplates(tagText, templatesAfter).getText();
        removeTags();
      };
      var _iterator38 = _createForOfIteratorHelper(params.tags), _step38;
      try {
        for (_iterator38.s(); !(_step38 = _iterator38.n()).done; ) {
          const tag = _step38.value;
          tagRe = new RegExp("\\{\\{".concat(tag, "(\\||\\}\\})"), "im");
          if (Twinkle.tag.canRemove || !tagRe.exec(pageText)) {
            if (tag === "Notability" && (mw.config.get("wgNamespaceNumber") === 0 || confirm(window.wgULS("该页面不是条目，您仍要提报到关注度提报吗？", "該頁面不是條目，您仍要提報到關注度提報嗎？")))) {
              const ysarchives_page = new Morebits.wiki.page("LIB_talk:存废讨论/关注度提报", window.wgULS("加入关注度记录项", "加入關注度記錄項"));
              ysarchives_page.setFollowRedirect(true);
              ysarchives_page.setCallbackParameters(params);
              ysarchives_page.load(Twinkle.tag.callbacks.notabilityList);
            }
            if (Twinkle.tag.article.flatObject[tag] && !Twinkle.tag.article.flatObject[tag].excludeMI) {
              groupableTags.push(tag);
            } else {
              tags.push(tag);
            }
          } else if (tag === "Merge from") {
            tags.push(tag);
          } else {
            Morebits.status.warn(window.wgULS("信息", "資訊"), window.wgULS("在页面上找到{{", "在頁面上找到{{") + tag + window.wgULS("}}……跳过", "}}……跳過"));
            if (["Merge", "Merge to"].includes(tag)) {
              params.mergeTarget = null;
              params.mergeReason = null;
              params.mergeTagOther = null;
            }
          }
        }
      } catch (err) {
        _iterator38.e(err);
      } finally {
        _iterator38.f();
      }
      var _iterator39 = _createForOfIteratorHelper(params.tagsToRemain), _step39;
      try {
        for (_iterator39.s(); !(_step39 = _iterator39.n()).done; ) {
          const tag = _step39.value;
          if (Twinkle.tag.article.flatObject[tag] && !Twinkle.tag.article.flatObject[tag].excludeMI) {
            groupableExistingTags.push(tag);
          }
        }
      } catch (err) {
        _iterator39.e(err);
      } finally {
        _iterator39.f();
      }
      const miTest = /\{\{(multiple ?issues|article ?issues|mi|ai|issues|多個問題|多个问题|問題條目|问题条目|數個問題|数个问题)\s*\|[^}]+\{/im.exec(pageText);
      if (miTest && groupableTags.length > 0) {
        Morebits.status.info(window.wgULS("信息", "資訊"), window.wgULS("加入支持的标记入已存在的{{multiple issues}}", "加入支援的標記入已存在的{{multiple issues}}"));
        tagText = "";
        var _iterator40 = _createForOfIteratorHelper(groupableTags), _step40;
        try {
          for (_iterator40.s(); !(_step40 = _iterator40.n()).done; ) {
            const tag = _step40.value;
            addTag(tag);
          }
        } catch (err) {
          _iterator40.e(err);
        } finally {
          _iterator40.f();
        }
        const miRegex = new RegExp("(\\{\\{\\s*".concat(miTest[1], "\\s*(?:\\|(?:\\{\\{[^{}]*\\}\\}|[^{}])*)?)\\}\\}\\s*"), "im");
        pageText = pageText.replace(miRegex, "$1".concat(tagText, "}}\n"));
        tagText = "";
        addUngroupedTags();
      } else if (params.group && !miTest && groupableExistingTags.length + groupableTags.length >= 2) {
        Morebits.status.info(window.wgULS("信息", "資訊"), window.wgULS("加入支持的标记入{{multiple issues}}", "加入支援的標記入{{multiple issues}}"));
        tagText += "{{Multiple issues|\n";
        const addNewTagsToMI = () => {
          var _iterator41 = _createForOfIteratorHelper(groupableTags), _step41;
          try {
            for (_iterator41.s(); !(_step41 = _iterator41.n()).done; ) {
              const tag = _step41.value;
              addTag(tag);
            }
          } catch (err) {
            _iterator41.e(err);
          } finally {
            _iterator41.f();
          }
          tagText += "}}\n";
          addUngroupedTags();
        };
        const getRedirectsFor = [];
        var _iterator42 = _createForOfIteratorHelper(groupableExistingTags), _step42;
        try {
          for (_iterator42.s(); !(_step42 = _iterator42.n()).done; ) {
            const tag = _step42.value;
            const tag_re = new RegExp("(\\{\\{".concat(Morebits.pageNameRegex(tag), "\\s*(\\|[^}]+)?\\}\\}\\n?)"));
            if (tag_re.test(pageText)) {
              tagText += tag_re.exec(pageText)[1];
              pageText = pageText.replace(tag_re, "");
            } else {
              getRedirectsFor.push("Template:".concat(tag));
            }
          }
        } catch (err) {
          _iterator42.e(err);
        } finally {
          _iterator42.f();
        }
        if (!getRedirectsFor.length) {
          addNewTagsToMI();
          return;
        }
        const api = new Morebits.wiki.api(window.wgULS("获取模板重定向", "取得模板重新導向"), {
          action: "query",
          prop: "linkshere",
          titles: getRedirectsFor.join("|"),
          redirects: 1,
          lhnamespace: "10",
          lhshow: "redirect",
          lhlimit: "max"
          // 500 is max for normal users, 5000 for bots and sysops
        }, (apiobj) => {
          $(apiobj.responseXML).find("page").each((_idx, page) => {
            let found = false;
            $(page).find("lh").each((_index, element) => {
              const tag = $(element).attr("title").slice(9);
              const tag_re = new RegExp("(\\{\\{".concat(Morebits.pageNameRegex(tag), "\\s*(\\|[^}]*)?\\}\\}\\n?)"));
              if (tag_re.test(pageText)) {
                tagText += tag_re.exec(pageText)[1];
                pageText = pageText.replace(tag_re, "");
                found = true;
                return false;
              }
            });
            if (!found) {
              Morebits.status.warn(window.wgULS("信息", "資訊"), window.wgULS("无法在页面上找到{{", "無法在頁面上找到{{") + $(page).attr("title").slice(9) + window.wgULS("}}……跳过", "}}……跳過"));
            }
          });
          addNewTagsToMI();
        });
        api.post();
      } else {
        tags = [...tags, ...groupableTags];
        addUngroupedTags();
      }
    },
    notabilityList: (pageobj) => {
      pageobj.setAppendText("\n{{".concat("subst:", "Fameitem|title=".concat(Morebits.pageNameNorm, "}}")));
      pageobj.setEditSummary("加入[[".concat(Morebits.pageNameNorm, "]]"));
      pageobj.setChangeTags(Twinkle.changeTags);
      pageobj.setCreateOption("recreate");
      pageobj.append();
    },
    redirect: (pageobj) => {
      const params = pageobj.getCallbackParameters();
      let pageText = pageobj.getPageText();
      let tagRe;
      let tagText = "";
      let summaryText = "加入";
      const tags = [];
      let i;
      for (i = 0; i < params.tags.length; i++) {
        tagRe = new RegExp("(\\{\\{".concat(params.tags[i], "(\\||\\}\\}))"), "im");
        if (tagRe.exec(pageText)) {
          Morebits.status.warn(window.wgULS("信息", "資訊"), window.wgULS("在重定向上找到{{", "在重新導向上找到{{") + params.tags[i] + window.wgULS("}}……跳过", "}}……跳過"));
        } else {
          tags.push(params.tags[i]);
        }
      }
      const addTag = (tagName, tagIndex) => {
        tagText += "\n{{".concat(tagName);
        if (tagName === "非中文重定向") {
          if (params.altLangFrom) {
            tagText += "|1=".concat(params.altLangFrom);
          }
        } else if ((tagName === "条目请求重定向" || tagName === "條目請求重定向") && params.reqArticleLang && params.reqArticleTitle) {
          tagText += "|1=".concat(params.reqArticleLang);
          tagText += "|2=".concat(params.reqArticleTitle);
        }
        tagText += "}}";
        if (tagIndex > 0) {
          if (tagIndex === tags.length - 1) {
            summaryText += "和";
          } else if (tagIndex < tags.length - 1) {
            summaryText += "、";
          }
        }
        summaryText += "{{[[:".concat(tagName.includes(":") ? tagName : "Template:".concat(tagName, "|").concat(tagName), "]]}}");
      };
      if (!tags.length) {
        Morebits.status.warn(window.wgULS("信息", "資訊"), window.wgULS("没有标签可供标记", "沒有標籤可供標記"));
      }
      tags.sort();
      for (var _i10 = 0, _tags2 = tags; _i10 < _tags2.length; _i10++) {
        const tag = _tags2[_i10];
        addTag(tag);
      }
      if (pageText.match(/{{(?:redr|this is a redirect|r(?:edirect)?(?:.?cat.*)?[ _]?sh)/i)) {
        const oldTags = pageText.match(/(\s*{{[A-Za-z\s]+\|(?:\s*1=)?)((?:[^|{}]|{{[^}]+}})+)(}})\s*/i);
        pageText = pageText.replace(oldTags[0], oldTags[1] + tagText + oldTags[2] + oldTags[3]);
      } else {
        const pageTags = pageText.match(/\s*{{.+?重定向.*?}}/gim);
        let oldPageTags = "";
        if (pageTags) {
          var _iterator43 = _createForOfIteratorHelper(pageTags), _step43;
          try {
            for (_iterator43.s(); !(_step43 = _iterator43.n()).done; ) {
              let pageTag = _step43.value;
              const pageRe = new RegExp(Morebits.string.escapeRegExp(pageTag), "img");
              pageText = pageText.replace(pageRe, "");
              pageTag = pageTag.trim();
              oldPageTags += "\n".concat(pageTag);
            }
          } catch (err) {
            _iterator43.e(err);
          } finally {
            _iterator43.f();
          }
        }
        pageText += "\n{{Redirect category shell|".concat(tagText).concat(oldPageTags, "\n}}");
      }
      summaryText += (tags.length > 0 ? window.wgULS("标记", "標記") : "{{Redirect category shell}}") + window.wgULS("到重定向", "到重新導向");
      if (summaryText.length > 499) {
        summaryText = summaryText.replace(/\[\[[^|]+\|([^\]]+)\]\]/g, "$1");
      }
      pageobj.setPageText(pageText);
      pageobj.setEditSummary(summaryText);
      pageobj.setChangeTags(Twinkle.changeTags);
      pageobj.setWatchlist(Twinkle.getPref("watchTaggedPages"));
      pageobj.setMinorEdit(Twinkle.getPref("markTaggedPagesAsMinor"));
      pageobj.setCreateOption("nocreate");
      pageobj.save();
      if (params.patrol) {
        pageobj.patrol();
      }
    },
    file: (pageobj) => {
      let text = pageobj.getPageText();
      const params = pageobj.getCallbackParameters();
      let summary = "加入";
      if (params.tags.length) {
        let tagtext = "";
        let currentTag;
        var _iterator44 = _createForOfIteratorHelper(params.tags), _step44;
        try {
          for (_iterator44.s(); !(_step44 = _iterator44.n()).done; ) {
            const tag = _step44.value;
            if (["Keep local", "Now YsArchives Share", "Do not move to YsArchives Share"].includes(tag)) {
              text = text.replace(/{{(mtc|(copy |move )?to ?share|move to ysarchives share|copy to ysarchives share)[^}]*}}/gi, "");
            }
            if (tag === "Vector version available") {
              text = text.replace(/\{\{((convert to |convertto|should be |shouldbe|to)?svg|badpng|vectorize)[^}]*\}\}/gi, "");
            }
            currentTag = tag;
            switch (tag) {
              case "Now Commons":
                currentTag = "subst:".concat(currentTag);
                if (params.nowcommonsName !== "") {
                  currentTag += "|1=".concat(params.nowcommonsName);
                }
                break;
              case "Keep local":
                if (params.keeplocalName !== "") {
                  currentTag += "|1=".concat(params.keeplocalName);
                }
                if (params.keeplocalReason !== "") {
                  currentTag += "|reason=".concat(params.keeplocalReason);
                }
                break;
              case "Rename media":
                if (params.renamemediaNewname !== "") {
                  currentTag += "|1=".concat(params.renamemediaNewname);
                }
                if (params.renamemediaReason !== "") {
                  currentTag += "|2=".concat(params.renamemediaReason);
                }
                break;
              case "Vector version available":
              case "Obsolete":
                currentTag += "|1=".concat(params["".concat(tag.replace(/ /g, "_"), "File")]);
                break;
              case "Do not move to Commons":
                currentTag += "|reason=".concat(params.DoNotMoveToCommons_reason);
                break;
              case "Copy to Wikimedia Commons":
                currentTag += "|human=".concat(mw.config.get("wgUserName"));
                break;
              default:
                break;
            }
            currentTag = "{{".concat(currentTag, "}}\n");
            tagtext += currentTag;
            summary += "{{".concat(tag, "}}、");
          }
        } catch (err) {
          _iterator44.e(err);
        } finally {
          _iterator44.f();
        }
        if (!tagtext) {
          pageobj.getStatusElement().warn(window.wgULS("用户取消操作，没什么要做的", "使用者取消操作，沒什麼要做的"));
          return;
        }
        text = tagtext + text;
      }
      pageobj.setPageText(text);
      pageobj.setEditSummary(summary.slice(0, Math.max(0, summary.length - 1)));
      pageobj.setChangeTags(Twinkle.changeTags);
      pageobj.setWatchlist(Twinkle.getPref("watchTaggedPages"));
      pageobj.setMinorEdit(Twinkle.getPref("markTaggedPagesAsMinor"));
      pageobj.setCreateOption("nocreate");
      pageobj.save();
      if (params.patrol) {
        pageobj.patrol();
      }
    }
  };
  Twinkle.tag.callback.evaluate = (e) => {
    const form = e.target;
    const params = Morebits.quickForm.getInputData(form);
    const checkIncompatible = (conflicts, extra) => {
      const count = conflicts.reduce((sum, tag) => {
        return sum += params.tags.includes(tag);
      }, 0);
      if (count > 1) {
        let message = "".concat(window.wgULS("请在以下标签中择一使用", "請在以下標籤中擇一使用"), "：{{").concat(conflicts.join("}}、{{"), "}}。");
        message += extra || "";
        mw.notify(message, {
          type: "warn",
          tag: "friendlytag"
        });
        return true;
      }
    };
    const checkParameter = (tag, parameter, description = "理由") => {
      if (params.tags.includes(tag) && params[parameter].trim() === "") {
        mw.notify("".concat(window.wgULS("您必须指定", "您必須指定"), "{{").concat(tag, "}}的").concat(description, "。"), {
          type: "warn",
          tag: "friendlytag"
        });
        return true;
      }
    };
    switch (Twinkle.tag.modeEn) {
      case "article":
        params.tagsToRemove = form.getUnchecked("existingTags");
        params.tagsToRemain = params.existingTags || [];
        if (params.tags.includes("Merge") || params.tags.includes("Merge from") || params.tags.includes("Merge to")) {
          if (checkIncompatible(["Merge", "Merge from", "Merge to"], window.wgULS("若需要多次合并，请使用{{Merge}}并用管道符分隔条目名（但在这种情形中Twinkle不能自动标记其他条目）。", "若需要多次合併，請使用{{Merge}}並用管道符分隔條目名（但在這種情形中Twinkle不能自動標記其他條目）。"))) {
            return;
          }
          if (!params.mergeTarget) {
            mw.notify(window.wgULS("请指定使用于merge模板中的另一个页面标题。", "請指定使用於merge模板中的另一個頁面標題。"), {
              type: "warn",
              tag: "friendlytag"
            });
            return;
          }
          if ((params.mergeTagOther || params.mergeReason) && params.mergeTarget.includes("|")) {
            mw.notify(window.wgULS("当前还不支持在一次合并中标记多个条目，与开启关于多个条目的讨论。请不要勾选“标记其他条目”并清空“理由”框后再提交。", "目前還不支援在一次合併中標記多個條目，與開啟關於多個條目的討論。請不要勾選「標記其他條目」並清空「理由」框後再提交。"), {
              type: "warn",
              tag: "friendlytag"
            });
            return;
          }
        }
        if (checkParameter("Missing information", "missingInformation", window.wgULS("缺少的内容", "缺少的內容"))) {
          return;
        }
        if (checkParameter("Expert needed", "expert", window.wgULS("专家领域", "專家領域"))) {
          return;
        }
        break;
      case "file":
        if (checkParameter("Obsolete", "ObsoleteFile", window.wgULS("替换的文件名称", "替換的檔案名稱")) || checkParameter("Vector version available", "Vector_version_availableFile", window.wgULS("替换的文件名称", "替換的檔案名稱"))) {
          return;
        }
        if (checkParameter("Do not move to Commons", "DoNotMoveToCommons_reason")) {
          return;
        }
        break;
      case "redirect":
        break;
      default:
        mw.notify("Twinkle.tag：未知模式 ".concat(Twinkle.tag.mode), {
          type: "warn",
          tag: "friendlytag"
        });
        break;
    }
    if (params.tags.length === 0 && (Twinkle.tag.modeEn !== "article" || params.tagsToRemove.length === 0)) {
      mw.notify(window.wgULS("必须选择至少一个标记！", "必須選擇至少一個標記！"), {
        type: "warn",
        tag: "friendlytag"
      });
      return;
    }
    Morebits.simpleWindow.setButtonsEnabled(false);
    Morebits.status.init(form);
    Morebits.wiki.actionCompleted.redirect = Morebits.pageNameNorm;
    Morebits.wiki.actionCompleted.notice = window.wgULS("标记完成，将在几秒内刷新页面", "標記完成，將在幾秒內重新整理頁面");
    if (Twinkle.tag.modeEn === "redirect") {
      Morebits.wiki.actionCompleted.followRedirect = false;
    }
    const ysarchives_page = new Morebits.wiki.page(Morebits.pageNameNorm, window.wgULS("正在标记", "正在標記") + Twinkle.tag.mode);
    ysarchives_page.setCallbackParameters(params);
    ysarchives_page.load(Twinkle.tag.callbacks[Twinkle.tag.modeEn]);
  };
  Twinkle.addInitCallback(Twinkle.tag, "tag");
})(jQuery);
//! src/Twinkle/modules/twinklestub.js
/*! Twinkle.js - twinklestub.js */
(function twinklestub($) {
  Twinkle.stub = () => {
    if (Morebits.isPageRedirect()) {
    } else if ([0, 302].includes(mw.config.get("wgNamespaceNumber")) && mw.config.get("wgCurRevisionId") || Morebits.pageNameNorm === Twinkle.getPref("sandboxPage")) {
      Twinkle.stub.mode = "条目";
      Twinkle.addPortletLink(Twinkle.stub.callback, "小作品", "friendly-tag", "标记小作品");
    }
  };
  Twinkle.stub.callback = () => {
    if (Morebits.isPageRedirect()) {
    } else if ((mw.config.get("wgNamespaceNumber") === 0 || mw.config.get("wgNamespaceNumber") === 302) && mw.config.get("wgCurRevisionId") || Morebits.pageNameNorm === Twinkle.getPref("sandboxPage")) {
      Twinkle.stub.mode = window.wgULS("条目", "條目");
      Twinkle.addPortletLink(Twinkle.stub.callback, "小作品", "friendly-tag", window.wgULS("标记小作品", "標記小作品"));
    }
  };
  Twinkle.stub.callback = () => {
    const Window = new Morebits.simpleWindow(630, Twinkle.stub.mode === "article" ? 450 : 400);
    Window.setScriptName("Twinkle");
    Window.addFooterLink(window.wgULS("小作品說明", "小作品说明"), "LIB:小作品");
    Window.addFooterLink(window.wgULS("小作品设置", "小作品設定"), "H:TW/PREF#stub");
    Window.addFooterLink(window.wgULS("Twinkle帮助", "Twinkle說明"), "H:TW/DOC#stub");
    const form = new Morebits.quickForm(Twinkle.stub.callback.evaluate);
    if (document.querySelectorAll(".patrollink").length) {
      form.append({
        type: "checkbox",
        list: [{
          label: window.wgULS("标记页面为已巡查", "標記頁面為已巡查"),
          value: "patrolPage",
          name: "patrolPage",
          checked: Twinkle.getPref("markStubbedPagesAsPatrolled")
        }]
      });
    }
    switch (Twinkle.stub.mode) {
      case "條目":
      case "条目":
        Window.setTitle(window.wgULS("条目小作品标记", "條目小作品標記"));
        form.append({
          type: "select",
          name: "sortorder",
          label: window.wgULS("查看列表：", "檢視列表："),
          tooltip: window.wgULS("您可以在Twinkle参数设置（H:TW/PREF）中更改此项。", "您可以在Twinkle偏好設定（H:TW/PREF）中更改此項。"),
          event: Twinkle.stub.updateSortOrder,
          list: [{
            type: "option",
            value: "cat",
            label: window.wgULS("按类型", "按類別"),
            selected: Twinkle.getPref("stubArticleSortOrder") === "cat"
          }, {
            type: "option",
            value: "alpha",
            label: "按字母",
            selected: Twinkle.getPref("stubArticleSortOrder") === "alpha"
          }]
        });
        form.append({
          type: "div",
          id: "tagWorkArea"
        });
        break;
      default:
        mw.notify("Twinkle.stub：未知模式 ".concat(Twinkle.stub.mode), {
          type: "warn",
          tag: "twinklestub"
        });
        break;
    }
    form.append({
      type: "submit"
    });
    const result = form.render();
    Window.setContent(result);
    Window.display();
    if (["条目", "條目"].includes(Twinkle.stub.mode)) {
      const evt = document.createEvent("Event");
      evt.initEvent("change", true, true);
      result.sortorder.dispatchEvent(evt);
    }
  };
  Twinkle.stub.checkedTags = [];
  Twinkle.stub.updateSortOrder = (e) => {
    const sortorder = e.target.value;
    Twinkle.stub.checkedTags = e.target.form.getChecked("articleTags");
    if (!Twinkle.stub.checkedTags) {
      Twinkle.stub.checkedTags = [];
    }
    const container = new Morebits.quickForm.element({
      type: "fragment"
    });
    const makeCheckbox = (tag, description) => {
      const checkbox = {
        value: tag,
        label: "{{".concat(tag, "}}: ").concat(description)
      };
      if (Twinkle.stub.checkedTags.includes(tag)) {
        checkbox.checked = true;
      }
      return checkbox;
    };
    if (Twinkle.getPref("customStubList").length) {
      container.append({
        type: "header",
        label: window.wgULS("自定义模板", "自訂模板")
      });
      const customcheckboxes = [];
      var _iterator45 = _createForOfIteratorHelper(Twinkle.getPref("customStubList")), _step45;
      try {
        for (_iterator45.s(); !(_step45 = _iterator45.n()).done; ) {
          const item = _step45.value;
          customcheckboxes.push(makeCheckbox(item.value, item.label));
        }
      } catch (err) {
        _iterator45.e(err);
      } finally {
        _iterator45.f();
      }
      container.append({
        type: "checkbox",
        name: "articleTags",
        list: customcheckboxes
      });
    }
    if (sortorder === "cat") {
      const doCategoryCheckboxes = (subdiv, array) => {
        const checkboxes = [];
        var _iterator46 = _createForOfIteratorHelper(array), _step46;
        try {
          for (_iterator46.s(); !(_step46 = _iterator46.n()).done; ) {
            const tag = _step46.value;
            const description = Twinkle.stub.article.tags[tag];
            checkboxes.push(makeCheckbox(tag, description));
          }
        } catch (err) {
          _iterator46.e(err);
        } finally {
          _iterator46.f();
        }
        subdiv.append({
          type: "checkbox",
          name: "articleTags",
          list: checkboxes
        });
      };
      let i = 0;
      for (var _i11 = 0, _Object$entries6 = Object.entries(Twinkle.stub.article.tagCategories); _i11 < _Object$entries6.length; _i11++) {
        const [title, content] = _Object$entries6[_i11];
        const titleName = Twinkle.stub.article.tagCategoriesHeader[title];
        container.append({
          type: "header",
          id: "tagHeader".concat(i),
          label: titleName
        });
        const subdiv = container.append({
          type: "div",
          id: "tagSubdiv".concat(i++)
        });
        if (Array.isArray(content)) {
          doCategoryCheckboxes(subdiv, content);
        } else {
          for (var _i12 = 0, _Object$entries7 = Object.entries(content); _i12 < _Object$entries7.length; _i12++) {
            const [subtitle, subcontent] = _Object$entries7[_i12];
            subdiv.append({
              type: "div",
              label: [Morebits.htmlNode("b", subtitle)]
            });
            doCategoryCheckboxes(subdiv, subcontent);
          }
        }
      }
    } else {
      const checkboxes = [];
      for (var _i13 = 0, _Object$entries8 = Object.entries(Twinkle.stub.article.tags); _i13 < _Object$entries8.length; _i13++) {
        const [tag, description] = _Object$entries8[_i13];
        checkboxes.push(makeCheckbox(tag, description));
      }
      container.append({
        type: "checkbox",
        name: "articleTags",
        list: checkboxes
      });
    }
    const $workarea = $(e.target.form).find("div#tagWorkArea");
    const rendered = container.render();
    $workarea.empty().append(rendered);
    $workarea.find("h5").css({
      "font-size": "110%"
    });
    $workarea.find("h5:not(:first-child)").css({
      "margin-top": "1em"
    });
    $workarea.find("div").filter(":has(span.quickformDescription)").css({
      "margin-top": "0.4em"
    });
    var _iterator47 = _createForOfIteratorHelper(Morebits.quickForm.getElements(e.target.form, "articleTags")), _step47;
    try {
      for (_iterator47.s(); !(_step47 = _iterator47.n()).done; ) {
        const checkbox = _step47.value;
        const $checkbox = $(checkbox);
        const link = Morebits.htmlNode("a", ">");
        link.setAttribute("class", "tag-template-link");
        link.setAttribute("href", mw.util.getUrl("Template:".concat(Morebits.string.toUpperCaseFirstChar(checkbox.values))));
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
        $checkbox.parent().append([" ", link]);
      }
    } catch (err) {
      _iterator47.e(err);
    } finally {
      _iterator47.f();
    }
  };
  Twinkle.stub.article = {};
  Twinkle.stub.article.tags = {
    "actor-stub": "演员",
    "asia-stub": "亚洲",
    "bio-stub": "人物",
    "biology-stub": "生物学",
    "chem-stub": "化学",
    "europe-stub": "欧洲",
    "expand list": "未完成列表",
    "food-stub": "食物",
    "france-geo-stub": "法国地理",
    "geo-stub": "地理位置",
    "hist-stub": "历史或历史学",
    "JP-stub": "日本",
    "lit-stub": "文学",
    "math-stub": "数学",
    "med-stub": "医学",
    "mil-stub": "军事",
    "movie-stub": "电影",
    "music-stub": "音乐",
    "physics-stub": "物理学",
    "politic-stub": "政治",
    "religion-stub": "宗教",
    "science-stub": "科学",
    "sport-stub": "体育",
    stub: "通用小作品",
    "switzerland-stub": "瑞士",
    "tech-stub": "科技",
    "transp-stub": "交通",
    "TV-stub": "电视",
    "UK-stub": "英国",
    "US-bio-stub": "美国人物",
    "US-geo-stub": "美国地理",
    "US-stub": "美国",
    "weather-stub": "天气和特别的天气事件"
  };
  Twinkle.stub.article.tagCategoriesHeader = {
    general: "通用模板",
    geo: "国家和地理",
    others: "杂项",
    bio: "人物",
    science: "科学",
    sport: "体育",
    tech: "技术",
    art: "艺术"
  };
  Twinkle.stub.article.tagCategories = {
    general: ["stub", "expand list"],
    geo: ["asia-stub", "europe-stub", "france-geo-stub", "geo-stub", "JP-stub", "switzerland-stub", "UK-stub", "US-bio-stub", "US-geo-stub", "US-stub"],
    others: ["food-stub", "hist-stub", "mil-stub", "politic-stub", "religion-stub", "transp-stub"],
    bio: ["actor-stub", "bio-stub", "US-bio-stub"],
    science: ["biology-stub", "chem-stub", "math-stub", "med-stub", "physics-stub", "science-stub", "weather-stub"],
    sport: ["sport-stub"],
    tech: ["tech-stub"],
    art: ["actor-stub", "lit-stub", "movie-stub", "music-stub", "TV-stub"]
  };
  Twinkle.stub.callbacks = {
    main: (pageobj) => {
      const params = pageobj.getCallbackParameters();
      let tagRe;
      let summaryText = "加入";
      let tags = [];
      const groupableTags = [];
      let i;
      let pageText = pageobj.getPageText();
      for (i = 0; i < params.tags.length; i++) {
        tagRe = new RegExp("(\\{\\{".concat(params.tags[i], "(\\||\\}\\}))"), "im");
        if (tagRe.exec(pageText)) {
          Morebits.status.info(window.wgULS("信息", "資訊"), window.wgULS("在页面上找到{{".concat(params.tags[i], "}}……跳过"), "在頁面上找到{{".concat(params.tags[i], "}}……跳過")));
        } else {
          tags = [...tags, ...Array.isArray(params.tags[i]) ? params.tags[i] : [params.tags[i]]];
        }
      }
      tags = [...tags, ...groupableTags];
      tags.sort();
      const totalTags = tags.length;
      const addTag = (tagName, tagIndex) => {
        pageText += "\n{{".concat(tagName, "}}");
        if (tagIndex > 0) {
          if (tagIndex === totalTags - 1) {
            summaryText += "和";
          } else if (tagIndex < totalTags - 1) {
            summaryText += "、";
          }
        }
        summaryText += "{{[[";
        summaryText += tagName.includes(":") ? tagName : "Template:".concat(tagName, "|").concat(tagName);
        summaryText += "]]}}";
      };
      for (var _i14 = 0, _tags3 = tags; _i14 < _tags3.length; _i14++) {
        const tag = _tags3[_i14];
        addTag(tag);
      }
      summaryText += window.wgULS("标记到", "標記到") + Twinkle.stub.mode;
      pageobj.setPageText(pageText);
      pageobj.setEditSummary(summaryText);
      pageobj.setChangeTags(Twinkle.changeTags);
      pageobj.setWatchlist(Twinkle.getPref("watchStubbedPages"));
      pageobj.setMinorEdit(Twinkle.getPref("markStubbedPagesAsMinor"));
      pageobj.setCreateOption("nocreate");
      pageobj.save();
      if (params.patrol) {
        pageobj.patrol();
      }
    }
  };
  Twinkle.stub.callback.evaluate = (e) => {
    const form = e.target;
    const params = {};
    if (form.patrolPage) {
      params.patrol = form.patrolPage.checked;
    }
    switch (Twinkle.stub.mode) {
      case "條目":
      case "条目":
        params.tags = form.getChecked("articleTags");
        params.group = false;
        break;
      default:
        mw.notify("Twinkle.stub：未知模式 ".concat(Twinkle.stub.mode), {
          type: "warn",
          tag: "twinklestub"
        });
        break;
    }
    if (!params.tags.length) {
      mw.notify("必须选择至少一个标记！", {
        type: "warn",
        tag: "twinklestub"
      });
      return;
    }
    Morebits.simpleWindow.setButtonsEnabled(false);
    Morebits.status.init(form);
    Morebits.wiki.actionCompleted.redirect = mw.config.get("wgPageName");
    Morebits.wiki.actionCompleted.notice = window.wgULS("标记完成，将在几秒内刷新页面", "標記完成，將在幾秒內重新整理頁面");
    if (Twinkle.stub.mode === "重定向") {
      Morebits.wiki.actionCompleted.followRedirect = false;
    }
    const ysarchives_page = new Morebits.wiki.page(mw.config.get("wgPageName"), window.wgULS("正在标记", "正在標記") + Twinkle.stub.mode);
    ysarchives_page.setCallbackParameters(params);
    switch (Twinkle.stub.mode) {
      case "條目":
      case "条目":
      case "重定向":
        ysarchives_page.load(Twinkle.stub.callbacks.main);
        return;
      case "文件":
      case "檔案":
        ysarchives_page.load(Twinkle.stub.callbacks.file);
        break;
      default:
        mw.notify("Twinkle.stub：未知模式 ".concat(Twinkle.stub.mode), {
          type: "warn",
          tag: "twinklestub"
        });
        break;
    }
  };
  Twinkle.addInitCallback(Twinkle.stub, "stub");
})(jQuery);
//! src/Twinkle/modules/twinklediff.js
/*! Twinkle.js - twinklediff.js */
(function twinklediff($) {
  Twinkle.diff = () => {
    if (mw.config.get("wgNamespaceNumber") < 0 || !mw.config.get("wgArticleId")) {
      return;
    }
    Twinkle.addPortletLink(mw.util.getUrl(mw.config.get("wgPageName"), {
      diff: "cur",
      oldid: "prev"
    }), window.wgULS("最后", "最後"), "tw-lastdiff", window.wgULS("显示最后修改", "顯示最後修改"));
    if (mw.config.get("wgDiffNewId")) {
      Twinkle.addPortletLink(() => {
        Twinkle.diff.evaluate(false);
      }, "自上", "tw-since", window.wgULS("显示与上一修订版本间的差异", "顯示與上一修訂版本間的差異"));
      Twinkle.addPortletLink(() => {
        Twinkle.diff.evaluate(true);
      }, "自我", "tw-sincemine", window.wgULS("显示与我做出的修订版本的差异", "顯示與我做出的修訂版本的差異"));
      Twinkle.addPortletLink(mw.util.getUrl(mw.config.get("wgPageName"), {
        diff: "cur",
        oldid: mw.config.get("wgDiffNewId")
      }), window.wgULS("当前", "目前"), "tw-curdiff", window.wgULS("显示与当前版本间的差异", "顯示與目前版本間的差異"));
    }
  };
  Twinkle.diff.evaluate = (me) => {
    let user;
    if (me) {
      user = mw.config.get("wgUserName");
    } else {
      const node = document.querySelector("#mw-diff-ntitle2");
      if (!node) {
        return;
      }
      user = $(node).find("a").first().text();
    }
    const query = {
      prop: "revisions",
      action: "query",
      titles: mw.config.get("wgPageName"),
      rvlimit: 1,
      rvprop: ["ids", "user"],
      rvstartid: mw.config.get("wgCurRevisionId") - 1,
      rvuser: user
    };
    Morebits.status.init(document.querySelector("#mw-content-text"));
    const ysarchives_api = new Morebits.wiki.api(window.wgULS("抓取最初贡献者信息", "抓取最初貢獻者資訊"), query, Twinkle.diff.callbacks.main);
    ysarchives_api.params = {
      user
    };
    ysarchives_api.post();
  };
  Twinkle.diff.callbacks = {
    main: (self2) => {
      const xmlDoc = self2.responseXML;
      const revid = $(xmlDoc).find("rev").attr("revid");
      if (!revid) {
        self2.statelem.error(window.wgULS("未找到合适的早期版本，或 ", "未找到合適的早期版本，或 ") + self2.params.user + window.wgULS(" 是唯一贡献者。取消。", " 是唯一貢獻者。取消。"));
        return;
      }
      location = mw.util.getUrl(mw.config.get("wgPageName"), {
        diff: mw.config.get("wgCurRevisionId"),
        oldid: revid
      });
    }
  };
  Twinkle.addInitCallback(Twinkle.diff, "diff");
})(jQuery);
//! src/Twinkle/modules/twinkleunlink.js
/*! Twinkle.js - twinkleunlink.js */
(function twinkleunlink($) {
  Twinkle.unlink = () => {
    if (mw.config.get("wgNamespaceNumber") < 0 || mw.config.get("wgPageName") === Twinkle.getPref("sandboxPage") || !Morebits.userIsSysop) {
      return;
    }
    Twinkle.addPortletLink(Twinkle.unlink.callback, window.wgULS("消链", "消連"), "tw-unlink", window.wgULS("取消到本页的链接", "取消到本頁的連結"));
  };
  Twinkle.unlink.callback = (presetReason) => {
    const fileSpace = mw.config.get("wgNamespaceNumber") === 6;
    const Window = new Morebits.simpleWindow(600, 440);
    Window.setTitle(window.wgULS("取消链入", "取消連入") + (fileSpace ? window.wgULS("和模板、文件使用", "和模板、檔案使用") : ""));
    Window.setScriptName("Twinkle");
    Window.addFooterLink(window.wgULS("链入设置", "連入設定"), "H:TW/PREF#unlink");
    Window.addFooterLink(window.wgULS("Twinkle帮助", "Twinkle說明"), "H:TW/DOC#unlink");
    const form = new Morebits.quickForm(Twinkle.unlink.callback.evaluate);
    const linkTextBefore = Morebits.htmlNode("code", "[[".concat(fileSpace ? ":" : "").concat(Morebits.pageNameNorm).concat(window.wgULS("|链接文字]]", "|連結文字]]")));
    const linkTextAfter = Morebits.htmlNode("code", window.wgULS("链接文字", "連結文字"));
    const linkPlainBefore = Morebits.htmlNode("code", "[[".concat(Morebits.pageNameNorm, "]]"));
    const linkTemplateBefore = Morebits.htmlNode("code", "{{".concat(mw.config.get("wgTitle"), "}}"));
    let linkPlainAfter;
    if (fileSpace) {
      linkPlainAfter = Morebits.htmlNode("code", "<!-- [[".concat(Morebits.pageNameNorm, "]] -->"));
    } else {
      linkPlainAfter = Morebits.htmlNode("code", Morebits.pageNameNorm);
    }
    for (var _i15 = 0, _arr2 = [linkTextBefore, linkTextAfter, linkPlainBefore, linkPlainAfter, linkTemplateBefore]; _i15 < _arr2.length; _i15++) {
      const node = _arr2[_i15];
      node.style.fontFamily = "monospace";
      node.style.fontStyle = "normal";
    }
    form.append({
      type: "div",
      style: "margin-bottom: 0.5em; font-style: normal",
      label: ["".concat(window.wgULS("这个工具可以取消所有指向该页的链接（“链入”）", "這個工具可以取消所有指向該頁的連結（「連入」）") + (fileSpace ? window.wgULS("，或通过加入<!-- -->注释标记隐藏所有对此文件的使用", "，或透過加入<!-- -->注釋標記隱藏所有對此檔案的使用") : ""), "。例如："), linkTextBefore, window.wgULS("将会变成", "將會變成"), linkTextAfter, "，", linkPlainBefore, window.wgULS("将会变成", "將會變成"), linkPlainAfter, "，", linkTemplateBefore, window.wgULS("将会被移除", "將會被移除"), window.wgULS("。请小心使用。", "。請小心使用。")]
    });
    form.append({
      type: "input",
      name: "reason",
      label: "理由：",
      value: presetReason || "",
      size: 60
    });
    const query = {
      action: "query",
      list: "backlinks",
      bltitle: mw.config.get("wgPageName"),
      bllimit: "max",
      // 500 is max for normal users, 5000 for bots and sysops
      blnamespace: Twinkle.getPref("unlinkNamespaces"),
      rawcontinue: true,
      format: "json"
    };
    if (fileSpace) {
      query.list += "|imageusage";
      query.iutitle = query.bltitle;
      query.iulimit = query.bllimit;
      query.iunamespace = query.blnamespace;
    } else {
      query.blfilterredir = "nonredirects";
    }
    const ysarchives_api = new Morebits.wiki.api(window.wgULS("抓取链入", "抓取連入"), query, Twinkle.unlink.callbacks.display.backlinks);
    ysarchives_api.params = {
      form,
      Window,
      image: fileSpace
    };
    ysarchives_api.post();
    const root = document.createElement("div");
    root.style.padding = "15px";
    Morebits.status.init(root);
    ysarchives_api.statelem.status(window.wgULS("加载中……", "載入中……"));
    Window.setContent(root);
    Window.display();
  };
  Twinkle.unlink.callback.evaluate = (event) => {
    const form = event.target;
    const input = Morebits.quickForm.getInputData(form);
    if (!input.reason) {
      mw.notify(window.wgULS("您必须指定取消链入的理由。", "您必須指定取消連入的理由。"), {
        type: "warn",
        tag: "twinkleunlink"
      });
      return;
    }
    input.backlinks || (input.backlinks = []);
    input.imageusage || (input.imageusage = []);
    const pages = Morebits.array.uniq([...input.backlinks, ...input.imageusage]);
    if (!pages.length) {
      mw.notify(window.wgULS("您必须至少选择一个要取消链入的页面。", "您必須至少選擇一個要取消連入的頁面。"), {
        type: "warn",
        tag: "twinkleunlink"
      });
      return;
    }
    Morebits.simpleWindow.setButtonsEnabled(false);
    Morebits.status.init(form);
    const unlinker = new Morebits.batchOperation("取消".concat(input.backlinks.length ? window.wgULS("链入", "連入") + (input.imageusage.length ? window.wgULS("与文件使用", "與檔案使用") : "") : window.wgULS("文件使用", "檔案使用")));
    unlinker.setOption("preserveIndividualStatusLines", true);
    unlinker.setPageList(pages);
    const params = {
      reason: input.reason,
      unlinker
    };
    unlinker.run((pageName) => {
      const ysarchives_page = new Morebits.wiki.page(pageName, window.wgULS("在页面“", "在頁面「") + pageName + window.wgULS("”中取消链入", "」中取消連入"));
      ysarchives_page.setBotEdit(true);
      ysarchives_page.setCallbackParameters({
        doBacklinks: input.backlinks.includes(pageName),
        doImageusage: input.imageusage.includes(pageName),
        ...params
      });
      ysarchives_page.load(Twinkle.unlink.callbacks.unlinkBacklinks);
    });
  };
  Twinkle.unlink.callbacks = {
    display: {
      backlinks: (apiobj) => {
        const response = apiobj.getResponse();
        let havecontent = false;
        let list;
        let namespaces;
        let i;
        if (apiobj.params.image) {
          const imageusage = response.query.imageusage.sort(Twinkle.sortByNamespace);
          list = [];
          for (i = 0; i < imageusage.length; ++i) {
            list.push({
              label: "",
              value: imageusage[i].title,
              checked: true
            });
          }
          if (list.length) {
            apiobj.params.form.append({
              type: "header",
              label: window.wgULS("文件使用", "檔案使用")
            });
            namespaces = [];
            var _iterator48 = _createForOfIteratorHelper(Twinkle.getPref("unlinkNamespaces")), _step48;
            try {
              for (_iterator48.s(); !(_step48 = _iterator48.n()).done; ) {
                const v = _step48.value;
                namespaces.push(v === "0" ? window.wgULS("（条目）", "（條目）") : mw.config.get("wgFormattedNamespaces")[v]);
              }
            } catch (err) {
              _iterator48.e(err);
            } finally {
              _iterator48.f();
            }
            apiobj.params.form.append({
              type: "div",
              label: window.wgULS("已选择的命名空间：", "已選擇的命名空間：") + namespaces.join("、"),
              tooltip: window.wgULS("您可在Twinkle参数设置中更改相关选项，请参见[[H:TW/PREF]]", "您可在Twinkle偏好設定中更改相關選項，請參見[[H:TW/PREF]]")
            });
            if (response["query-continue"] && response["query-continue"].imageusage) {
              apiobj.params.form.append({
                type: "div",
                label: window.wgULS("显示前", "顯示前") + mw.language.convertNumber(list.length) + window.wgULS("个文件使用。", "個檔案使用。")
              });
            }
            apiobj.params.form.append({
              type: "button",
              label: window.wgULS("全选", "全選"),
              event: (e) => {
                $(Morebits.quickForm.getElements(e.target.form, "imageusage")).prop("checked", true);
              }
            });
            apiobj.params.form.append({
              type: "button",
              label: window.wgULS("全不选", "全不選"),
              event: (e) => {
                $(Morebits.quickForm.getElements(e.target.form, "imageusage")).prop("checked", false);
              }
            });
            apiobj.params.form.append({
              type: "checkbox",
              name: "imageusage",
              shiftClickSupport: true,
              list
            });
            havecontent = true;
          } else {
            apiobj.params.form.append({
              type: "div",
              label: window.wgULS("未找到文件使用。", "未找到檔案使用。")
            });
          }
        }
        const backlinks = response.query.backlinks.sort(Twinkle.sortByNamespace);
        if (backlinks.length > 0) {
          list = [];
          for (i = 0; i < backlinks.length; ++i) {
            list.push({
              label: "",
              value: backlinks[i].title,
              checked: true
            });
          }
          apiobj.params.form.append({
            type: "header",
            label: window.wgULS("链入", "連入")
          });
          namespaces = [];
          var _iterator49 = _createForOfIteratorHelper(Twinkle.getPref("unlinkNamespaces")), _step49;
          try {
            for (_iterator49.s(); !(_step49 = _iterator49.n()).done; ) {
              const v = _step49.value;
              namespaces.push(v === "0" ? window.wgULS("（条目）", "（條目）") : mw.config.get("wgFormattedNamespaces")[v]);
            }
          } catch (err) {
            _iterator49.e(err);
          } finally {
            _iterator49.f();
          }
          apiobj.params.form.append({
            type: "div",
            label: window.wgULS("已选择的命名空间：", "已選擇的命名空間：") + namespaces.join("、"),
            tooltip: window.wgULS("您可在Twinkle参数设置中更改相关选项，请参见[[H:TW/PREF]]", "您可在Twinkle偏好設定中更改相關選項，請參見[[H:TW/PREF]]")
          });
          if (response["query-continue"] && response["query-continue"].backlinks) {
            apiobj.params.form.append({
              type: "div",
              label: window.wgULS("显示前", "顯示前") + mw.language.convertNumber(list.length) + window.wgULS("个链入。", "個連入。")
            });
          }
          apiobj.params.form.append({
            type: "button",
            label: window.wgULS("全选", "全選"),
            event: (e) => {
              $(Morebits.quickForm.getElements(e.target.form, "backlinks")).prop("checked", true);
            }
          });
          apiobj.params.form.append({
            type: "button",
            label: window.wgULS("全不选", "全不選"),
            event: (e) => {
              $(Morebits.quickForm.getElements(e.target.form, "backlinks")).prop("checked", false);
            }
          });
          apiobj.params.form.append({
            type: "checkbox",
            name: "backlinks",
            shiftClickSupport: true,
            list
          });
          havecontent = true;
        } else {
          apiobj.params.form.append({
            type: "div",
            label: window.wgULS("未找到链入。", "未找到連入。")
          });
        }
        if (havecontent) {
          apiobj.params.form.append({
            type: "submit"
          });
        }
        const result = apiobj.params.form.render();
        apiobj.params.Window.setContent(result);
        var _iterator50 = _createForOfIteratorHelper(Morebits.quickForm.getElements(result, "backlinks")), _step50;
        try {
          for (_iterator50.s(); !(_step50 = _iterator50.n()).done; ) {
            const link = _step50.value;
            Twinkle.generateBatchPageLinks(link);
          }
        } catch (err) {
          _iterator50.e(err);
        } finally {
          _iterator50.f();
        }
        var _iterator51 = _createForOfIteratorHelper(Morebits.quickForm.getElements(result, "imageusage")), _step51;
        try {
          for (_iterator51.s(); !(_step51 = _iterator51.n()).done; ) {
            const link = _step51.value;
            Twinkle.generateBatchPageLinks(link);
          }
        } catch (err) {
          _iterator51.e(err);
        } finally {
          _iterator51.f();
        }
      }
    },
    unlinkBacklinks: (pageobj) => {
      let oldtext = pageobj.getPageText();
      const params = pageobj.getCallbackParameters();
      const ysarchives_page = new Morebits.wikitext.page(oldtext);
      let summaryText = "";
      let warningString = false;
      let text;
      if (params.doImageusage) {
        text = ysarchives_page.commentOutImage(mw.config.get("wgTitle"), window.wgULS("注释", "注釋")).getText();
        if (text === oldtext) {
          warningString = window.wgULS("文件使用", "檔案使用");
        } else {
          summaryText = window.wgULS("注释文件使用", "注釋檔案使用");
          oldtext = text;
        }
      }
      if (params.doBacklinks) {
        text = ysarchives_page.removeLink(Morebits.pageNameNorm).getText();
        text = ysarchives_page.removeTemplate(mw.config.get("wgTitle")).getText();
        if (text === oldtext) {
          warningString = warningString ? window.wgULS("取消链入或文件使用", "取消連入或檔案使用") : window.wgULS("取消链入", "取消連入");
        } else {
          summaryText = (summaryText ? "".concat(summaryText, " / ") : "") + window.wgULS("取消链结到", "取消連結到");
          oldtext = text;
        }
      }
      if (warningString) {
        pageobj.getStatusElement().error("".concat(window.wgULS("未能在页面上找到", "未能在頁面上找到") + warningString, "。"));
        params.unlinker.workerFailure(pageobj);
        return;
      }
      pageobj.setPageText(text);
      pageobj.setEditSummary(summaryText + window.wgULS("“", "「") + Morebits.pageNameNorm + window.wgULS("”：", "」：") + params.reason);
      pageobj.setChangeTags(Twinkle.changeTags);
      pageobj.setCreateOption("nocreate");
      pageobj.save(params.unlinker.workerSuccess, params.unlinker.workerFailure);
    }
  };
  Twinkle.addInitCallback(Twinkle.unlink, "unlink");
})(jQuery);
//! src/Twinkle/modules/twinklefluff.js
/*! Twinkle.js - twinklefluff.js */
(function twinklefluff($) {
  const $body = $("body");
  Twinkle.fluff = () => {
    if (mw.config.get("wgIsProbablyEditable")) {
      if (mw.config.get("wgDiffNewId") || mw.config.get("wgDiffOldId")) {
        mw.hook("wikipage.diff").add(() => {
          Twinkle.fluff.addLinks.diff();
        });
      } else if (mw.config.get("wgAction") === "view" && mw.config.get("wgRevisionId") && mw.config.get("wgCurRevisionId") !== mw.config.get("wgRevisionId")) {
        Twinkle.fluff.addLinks.oldid();
      } else if (mw.config.get("wgAction") === "history") {
        Twinkle.fluff.addLinks.history();
      }
    } else if (mw.config.get("wgNamespaceNumber") === -1) {
      Twinkle.fluff.skipTalk = !Twinkle.getPref("openTalkPageOnAutoRevert");
      Twinkle.fluff.rollbackInPlace = Twinkle.getPref("rollbackInPlace");
      if (mw.config.get("wgCanonicalSpecialPageName") === "Contributions") {
        Twinkle.fluff.addLinks.contributions();
      } else if (mw.config.get("wgCanonicalSpecialPageName") === "Recentchanges" || mw.config.get("wgCanonicalSpecialPageName") === "Recentchangeslinked") {
        mw.hook("wikipage.content").add((item) => {
          if (item.is("div")) {
            Twinkle.fluff.addLinks.recentchanges();
          }
        });
      }
    }
  };
  Twinkle.fluff.trustedBots = [];
  Twinkle.fluff.skipTalk = null;
  Twinkle.fluff.rollbackInPlace = null;
  Twinkle.fluff.hiddenName = window.wgULS("已隐藏的用户", "已隱藏的使用者");
  Twinkle.fluff.linkBuilder = {
    spanTag: (color, content) => {
      const span = document.createElement("span");
      span.style.color = color;
      span.appendChild(document.createTextNode(content));
      return span;
    },
    buildLink: (color, text) => {
      const link = document.createElement("a");
      link.appendChild(Twinkle.fluff.linkBuilder.spanTag("Black", "["));
      link.appendChild(Twinkle.fluff.linkBuilder.spanTag(color, text));
      link.appendChild(Twinkle.fluff.linkBuilder.spanTag("Black", "]"));
      link.href = "#";
      return link;
    },
    /**
     * @param {string} [vandal=null] - Username of the editor being reverted
     * Provide a falsey value if the username is hidden, defaults to null
     * @param {boolean} inline - True to create two links in a span, false
     * to create three links in a div (optional)
     * @param {number|string} [rev=wgCurRevisionId] - Revision ID being reverted (optional)
     * @param {string} [page=wgPageName] - Page being reverted (optional)
     * @return {HTMLElement} revNode
     */
    rollbackLinks: (vandal, inline, rev, page) => {
      vandal || (vandal = null);
      const elem = inline ? "span" : "div";
      const revNode = document.createElement(elem);
      rev = Number.parseInt(rev, 10);
      if (rev) {
        revNode.setAttribute("id", "tw-revert".concat(rev));
      } else {
        revNode.setAttribute("id", "tw-revert");
      }
      const normNode = document.createElement("strong");
      const vandNode = document.createElement("strong");
      const normLink = Twinkle.fluff.linkBuilder.buildLink("SteelBlue", "回退");
      const vandLink = Twinkle.fluff.linkBuilder.buildLink("Red", window.wgULS("破坏", "破壞"));
      $(normLink).on("click", (e) => {
        e.preventDefault();
        Twinkle.fluff.revert("norm", vandal, rev, page);
        Twinkle.fluff.disableLinks(revNode);
      });
      $(vandLink).on("click", (e) => {
        e.preventDefault();
        Twinkle.fluff.revert("vand", vandal, rev, page);
        Twinkle.fluff.disableLinks(revNode);
      });
      vandNode.appendChild(vandLink);
      normNode.appendChild(normLink);
      const separator = inline ? " " : " || ";
      revNode.appendChild(normNode);
      revNode.appendChild(document.createTextNode(separator));
      revNode.appendChild(vandNode);
      return revNode;
    },
    // Build [restore this revision] links
    restoreThisRevisionLink: (revisionRef, inline) => {
      revisionRef = typeof revisionRef === "number" ? revisionRef : mw.config.get(revisionRef);
      const elem = inline ? "span" : "div";
      const revertToRevisionNode = document.createElement(elem);
      revertToRevisionNode.setAttribute("id", "tw-revert-to-".concat(revisionRef));
      revertToRevisionNode.style.fontWeight = "bold";
      const revertToRevisionLink = Twinkle.fluff.linkBuilder.buildLink("SaddleBrown", window.wgULS("恢复此版本", "恢復此版本"));
      $(revertToRevisionLink).on("click", (e) => {
        e.preventDefault();
        Twinkle.fluff.revertToRevision(revisionRef);
      });
      if (inline) {
        revertToRevisionNode.appendChild(document.createTextNode(" "));
      }
      revertToRevisionNode.appendChild(revertToRevisionLink);
      return revertToRevisionNode;
    }
  };
  Twinkle.fluff.addLinks = {
    contributions: () => {
      const isRange = !!$body.find("#sp-contributions-footer-anon-range")[0];
      if (mw.config.exists("wgRelevantUserName") || isRange) {
        let username = mw.config.get("wgRelevantUserName");
        if (Twinkle.getPref("showRollbackLinks").includes("contribs") || mw.config.get("wgUserName") !== username && Twinkle.getPref("showRollbackLinks").includes("others") || mw.config.get("wgUserName") === username && Twinkle.getPref("showRollbackLinks").includes("mine")) {
          const $list = $body.find("#mw-content-text").find("ul li:has(span.mw-uctop):has(.mw-changeslist-diff)");
          $list.each((_key, current) => {
            const page = $(current).find(".mw-contributions-title").text();
            if (isRange) {
              username = $(current).find(".mw-userlink:not(.history-deleted)").text();
            }
            current.appendChild(Twinkle.fluff.linkBuilder.rollbackLinks(username, true, current.dataset.mwRevid, page));
          });
        }
      }
    },
    recentchanges: () => {
      if (mw.config.get("wgCanonicalSpecialPageName") === "Recentchanges" && Twinkle.getPref("showRollbackLinks").includes("recentchanges") || mw.config.get("wgCanonicalSpecialPageName") === "Recentchangeslinked" && Twinkle.getPref("showRollbackLinks").includes("recentchangeslinked")) {
        let $list = $body.find(".mw-changeslist .mw-changeslist-last.mw-changeslist-src-mw-edit");
        $list = $list.not(".mw-rcfilters-ui-highlights-enhanced-toplevel").find(".mw-changeslist-line-inner, td.mw-enhanced-rc-nested");
        $list.each((_key, current) => {
          const vandal = $(current).find(".mw-userlink:not(.history-deleted)").text();
          const href = $(current).find(".mw-changeslist-diff").attr("href");
          const rev = mw.util.getParamValue("diff", href);
          const page = current.dataset.targetPage;
          current.appendChild(Twinkle.fluff.linkBuilder.rollbackLinks(vandal, true, rev, page));
        });
      }
    },
    history: () => {
      if (Twinkle.getPref("showRollbackLinks").includes("history")) {
        const histList = $body.find("#pagehistory li").toArray();
        if (!$body.find("a.mw-firstlink").length) {
          const first = histList.shift();
          const vandal = $(first).find(".mw-userlink:not(.history-deleted)").text();
          var _iterator52 = _createForOfIteratorHelper(histList), _step52;
          try {
            for (_iterator52.s(); !(_step52 = _iterator52.n()).done; ) {
              const item = _step52.value;
              if ($(item).find(".mw-userlink").text() !== vandal) {
                first.appendChild(Twinkle.fluff.linkBuilder.rollbackLinks(vandal, true));
                break;
              }
            }
          } catch (err) {
            _iterator52.e(err);
          } finally {
            _iterator52.f();
          }
        }
        var _iterator53 = _createForOfIteratorHelper(histList), _step53;
        try {
          for (_iterator53.s(); !(_step53 = _iterator53.n()).done; ) {
            const rev = _step53.value;
            const {
              href
            } = rev.querySelector(".mw-changeslist-date");
            const oldid = Number.parseInt(mw.util.getParamValue("oldid", href), 10);
            if (!Number.isNaN(oldid)) {
              rev.appendChild(Twinkle.fluff.linkBuilder.restoreThisRevisionLink(oldid, true));
            }
          }
        } catch (err) {
          _iterator53.e(err);
        } finally {
          _iterator53.f();
        }
      }
    },
    diff: () => {
      const warnFromTalk = (xtitle) => {
        const talkLink = $("#mw-diff-".concat(xtitle, "2 .mw-usertoollinks a")).first();
        if (talkLink.length) {
          let extraParams = "vanarticle=".concat(mw.util.rawurlencode(Morebits.pageNameNorm), "&noautowarn=true");
          extraParams += "&vanarticlerevid=";
          extraParams += xtitle === "otitle" ? mw.config.get("wgDiffOldId") : mw.config.get("wgDiffNewId");
          const href = talkLink.attr("href");
          if (href.includes("?")) {
            talkLink.attr("href", "".concat(href, "&").concat(extraParams));
          } else {
            talkLink.attr("href", "".concat(href, "?").concat(extraParams));
          }
        }
      };
      warnFromTalk("otitle");
      if (mw.config.get("wgDiffOldId") && mw.config.get("wgDiffOldId") !== mw.config.get("wgDiffNewId")) {
        const oldTitle = document.querySelector("#mw-diff-otitle1").parentNode;
        const revertToRevision = Twinkle.fluff.linkBuilder.restoreThisRevisionLink("wgDiffOldId");
        oldTitle.insertBefore(revertToRevision, oldTitle.firstChild);
        if (Twinkle.getPref("customRevertSummary").length > 0) {
          revertToRevision.appendChild(document.createTextNode(" || "));
          const revertsummary = new Morebits.quickForm.element({
            type: "select",
            name: "revertsummary"
          });
          revertsummary.append({
            type: "option",
            label: window.wgULS("选择回退理由", "選擇回退理由"),
            value: ""
          });
          $(Twinkle.getPref("customRevertSummary")).each((_, e) => {
            revertsummary.append({
              type: "option",
              label: e.label,
              value: e.value
            });
          });
          revertToRevision.appendChild(revertsummary.render().childNodes[0]);
        }
      }
      warnFromTalk("ntitle");
      if (document.querySelector("#differences-nextlink")) {
        const newTitle = document.querySelector("#mw-diff-ntitle1").parentNode;
        newTitle.insertBefore(Twinkle.fluff.linkBuilder.restoreThisRevisionLink("wgDiffNewId"), newTitle.firstChild);
      } else if (Twinkle.getPref("showRollbackLinks").includes("diff") && mw.config.get("wgDiffOldId") && (mw.config.get("wgDiffOldId") !== mw.config.get("wgDiffNewId") || document.querySelector("#differences-prevlink"))) {
        const vandal = $body.find("#mw-diff-ntitle2").find(".mw-userlink")[0].text;
        const ntitle = document.querySelector("#mw-diff-ntitle1").parentNode;
        ntitle.insertBefore(Twinkle.fluff.linkBuilder.rollbackLinks(vandal), ntitle.firstChild);
      }
    },
    oldid: () => {
      const title = document.querySelector("#mw-revision-info").parentNode;
      title.insertBefore(Twinkle.fluff.linkBuilder.restoreThisRevisionLink("wgRevisionId"), title.firstChild);
    }
  };
  Twinkle.fluff.disableLinks = (parentNode) => {
    $(parentNode).children().each((_i, node) => {
      node.innerHTML = node.textContent;
      $(node).css("font-weight", "normal").css("color", "darkgray");
    });
  };
  Twinkle.fluff.revert = (type, vandal, rev, page) => {
    if (mw.util.isIPv6Address(vandal)) {
      vandal = Morebits.sanitizeIPv6(vandal);
    }
    const pagename = page || mw.config.get("wgPageName");
    const revid = rev || mw.config.get("wgCurRevisionId");
    let summary = "";
    if (document.getElementsByName("revertsummary")[0] !== void 0) {
      summary = document.getElementsByName("revertsummary")[0].value;
    }
    if (Twinkle.fluff.rollbackInPlace) {
      const notifyStatus = document.createElement("span");
      mw.notify(notifyStatus, {
        autoHide: false,
        title: "回退".concat(page),
        tag: "twinklefluff_".concat(rev)
        // Shouldn't be necessary given disableLink
      });
      Morebits.status.init(notifyStatus);
    } else {
      Morebits.status.init(document.querySelector("#mw-content-text"));
      $body.find("#catlinks").remove();
    }
    const params = {
      type,
      user: vandal,
      userHidden: !vandal,
      pagename,
      revid,
      summary
    };
    const query = {
      action: "query",
      prop: ["info", "revisions"],
      titles: pagename,
      intestactions: "edit",
      rvlimit: Twinkle.getPref("revertMaxRevisions"),
      rvprop: ["ids", "timestamp", "user"],
      curtimestamp: "",
      meta: "tokens",
      type: "csrf"
    };
    const ysarchives_api = new Morebits.wiki.api(window.wgULS("抓取较早修订版本信息", "抓取較早修訂版本資訊"), query, Twinkle.fluff.callbacks.main);
    ysarchives_api.params = params;
    ysarchives_api.post();
  };
  Twinkle.fluff.revertToRevision = (oldrev) => {
    let summary = "";
    if (document.getElementsByName("revertsummary")[0] !== void 0) {
      summary = document.getElementsByName("revertsummary")[0].value;
    }
    Morebits.status.init(document.querySelector("#mw-content-text"));
    const query = {
      action: "query",
      prop: ["info", "revisions"],
      titles: mw.config.get("wgPageName"),
      rvlimit: 1,
      rvstartid: oldrev,
      rvprop: ["ids", "user"],
      format: "xml",
      curtimestamp: "",
      meta: "tokens",
      type: "csrf"
    };
    const ysarchives_api = new Morebits.wiki.api(window.wgULS("抓取较早修订版本信息", "抓取較早修訂版本資訊"), query, Twinkle.fluff.callbacks.toRevision);
    ysarchives_api.params = {
      rev: oldrev,
      summary
    };
    ysarchives_api.post();
  };
  Twinkle.fluff.callbacks = {
    toRevision: (apiobj) => {
      const xmlDoc = apiobj.responseXML;
      const lastrevid = Number.parseInt($(xmlDoc).find("page").attr("lastrevid"), 10);
      const touched = $(xmlDoc).find("page").attr("touched");
      const loadtimestamp = $(xmlDoc).find("api").attr("curtimestamp");
      const csrftoken = $(xmlDoc).find("tokens").attr("csrftoken");
      const revertToRevID = Number.parseInt($(xmlDoc).find("rev").attr("revid"), 10);
      const revertToUser = $(xmlDoc).find("rev").attr("user");
      const revertToUserHidden = typeof $(xmlDoc).find("rev").attr("userhidden") === "string";
      if (revertToRevID !== apiobj.params.rev) {
        apiobj.statelem.error(window.wgULS("抓取到的修订版本与请求的修订版本不符，取消。", "抓取到的修訂版本與請求的修訂版本不符，取消。"));
        return;
      }
      const optional_summary = prompt("".concat(window.wgULS("请输入回退理由：", "請輸入回退理由："), "                                "), apiobj.params.summary);
      if (optional_summary === null) {
        apiobj.statelem.error(window.wgULS("由用户取消。", "由使用者取消。"));
        return;
      }
      const summary = Twinkle.fluff.formatSummary(window.wgULS("回退到由$USER做出的修订版本", "回退到由$USER做出的修訂版本") + revertToRevID, revertToUserHidden ? null : revertToUser, optional_summary);
      const query = {
        action: "edit",
        title: mw.config.get("wgPageName"),
        summary,
        tags: Twinkle.changeTags,
        token: csrftoken,
        undo: lastrevid,
        undoafter: revertToRevID,
        basetimestamp: touched,
        starttimestamp: loadtimestamp,
        minor: Twinkle.getPref("markRevertedPagesAsMinor").includes("torev") ? true : void 0,
        bot: true
      };
      if (Twinkle.getPref("watchRevertedPages").includes("torev")) {
        const watchOrExpiry = Twinkle.getPref("watchRevertedExpiry");
        if (!watchOrExpiry || watchOrExpiry === "no") {
          query.watchlist = "nochange";
        } else if (watchOrExpiry === "default" || watchOrExpiry === "preferences") {
          query.watchlist = "preferences";
        } else {
          query.watchlist = "watch";
          if (typeof watchOrExpiry === "string" && watchOrExpiry !== "yes") {
            query.watchlistexpiry = watchOrExpiry;
          }
        }
      }
      Morebits.wiki.actionCompleted.redirect = mw.config.get("wgPageName");
      Morebits.wiki.actionCompleted.notice = "回退完成";
      const ysarchives_api = new Morebits.wiki.api(window.wgULS("保存回退内容", "儲存回退內容"), query, Twinkle.fluff.callbacks.complete, apiobj.statelem);
      ysarchives_api.params = apiobj.params;
      ysarchives_api.post();
    },
    main: (apiobj) => {
      const xmlDoc = apiobj.responseXML;
      if ($(xmlDoc).find("actions").attr("edit") === void 0) {
        apiobj.statelem.error("Unable to edit the page, it's probably protected.");
        return;
      }
      const lastrevid = Number.parseInt($(xmlDoc).find("page").attr("lastrevid"), 10);
      const touched = $(xmlDoc).find("page").attr("touched");
      const loadtimestamp = $(xmlDoc).find("api").attr("curtimestamp");
      const csrftoken = $(xmlDoc).find("tokens").attr("csrftoken");
      const revs = $(xmlDoc).find("rev");
      const {
        statelem
      } = apiobj;
      const {
        params
      } = apiobj;
      if (revs.length < 1) {
        statelem.error(window.wgULS("没有其它修订版本，无法回退", "沒有其它修訂版本，無法回退"));
        return;
      }
      const [top] = revs;
      const lastuser = top.getAttribute("user");
      if (lastrevid < params.revid) {
        Morebits.status.error(window.wgULS("错误", "錯誤"), window.wgULS(["从服务器获取的最新修订版本ID ", Morebits.htmlNode("strong", lastrevid), " 小于目前所显示的修订版本ID。这可能意味着当前修订版本已被删除、服务器延迟、或抓取到了坏掉的信息。取消。"], ["從伺服器取得的最新修訂版本ID ", Morebits.htmlNode("strong", lastrevid), " 小於目前所顯示的修訂版本ID。這可能意味著當前修訂版本已被刪除、伺服器延遲、或擷取到了壞掉的資訊。取消。"]));
        return;
      }
      let userNorm = params.user || Twinkle.fluff.hiddenName;
      let index = 1;
      if (params.revid === lastrevid) {
        params.user = lastuser;
        userNorm = params.user || Twinkle.fluff.hiddenName;
      } else {
        Morebits.status.warn("警告", window.wgULS(["最新修订版本 ", Morebits.htmlNode("strong", lastrevid), " 与我们的修订版本 ", Morebits.htmlNode("strong", params.revid), "不同"], ["最新修訂版本 ", Morebits.htmlNode("strong", lastrevid), " 與我們的修訂版本 ", Morebits.htmlNode("strong", params.revid), " 不同"]));
        if (lastuser === params.user) {
          switch (params.type) {
            case "vand":
              Morebits.status.info(window.wgULS("信息", "資訊"), [window.wgULS("最新修订版本由 ", "最新修訂版本由 "), Morebits.htmlNode("strong", userNorm), window.wgULS(" 做出，因我们假定破坏，继续回退操作。", " 做出，因我們假定破壞，繼續回退操作。")]);
              break;
            default:
              Morebits.status.warn("提示", [window.wgULS("最新修订版本由 ", "最新修訂版本由 "), Morebits.htmlNode("strong", userNorm), window.wgULS(" 做出，但我们还是不回退了。", " 做出，但我們還是不回退了。")]);
              return;
          }
        } else if (params.type === "vand" && // Okay to test on user since it will either fail or sysop will correctly access it
        // Besides, none of the trusted bots are going to be revdel'd
        Twinkle.fluff.trustedBots.includes(top.getAttribute("user")) && revs.length > 1 && revs[1].getAttribute("revid") === params.revid) {
          Morebits.status.info(window.wgULS("信息", "資訊"), window.wgULS(["最新修订版本由 ", Morebits.htmlNode("strong", lastuser), "，一个可信的机器人做出，但之前的版本被认为是破坏，继续回退操作。"], ["最新修訂版本由 ", Morebits.htmlNode("strong", lastuser), "，一個可信的機器人做出，但之前的版本被認為是破壞，繼續回退操作。"]));
          index = 2;
        } else {
          Morebits.status.error(window.wgULS("错误", "錯誤"), window.wgULS(["最新修订版本由 ", Morebits.htmlNode("strong", lastuser), " 做出，所以这个修订版本可能已经被回退了，取消回退操作。"], ["最新修訂版本由 ", Morebits.htmlNode("strong", lastuser), " 做出，所以這個修訂版本可能已經被回退了，取消回退操作。"]));
          return;
        }
      }
      if (Twinkle.fluff.trustedBots.includes(params.user)) {
        switch (params.type) {
          case "vand":
            Morebits.status.info(window.wgULS("信息", "資訊"), [window.wgULS("将对 ", "將對 "), Morebits.htmlNode("strong", userNorm), window.wgULS(" 执行破坏回退，这是一个可信的机器人，我们假定您要回退前一个修订版本。", " 執行破壞回退，這是一個可信的機器人，我們假定您要回退前一個修訂版本。")]);
            index = 2;
            params.user = revs[1].getAttribute("user");
            params.userHidden = revs[1].getAttribute("userhidden") === "";
            break;
          default: {
            const cont = confirm(window.wgULS("选择了常规回退，但最新修改是由一个可信的机器人（", "選擇了常規回退，但最新修改是由一個可信的機器人（") + userNorm + window.wgULS("）做出的。确定以回退前一个修订版本，取消以回退机器人的修改", "）做出的。確定以回退前一個修訂版本，取消以回退機器人的修改"));
            if (cont) {
              Morebits.status.info(window.wgULS("信息", "資訊"), [window.wgULS("将对 ", "將對 "), Morebits.htmlNode("strong", userNorm), window.wgULS(" 执行常规回退，这是一个可信的机器人，基于确认，我们将回退前一个修订版本。", " 執行常規回退，這是一個可信的機器人，基於確認，我們將回退前一個修訂版本。")]);
              index = 2;
              params.user = revs[1].getAttribute("user");
              params.userHidden = revs[1].getAttribute("userhidden") === "";
              userNorm = params.user || Twinkle.fluff.hiddenName;
            } else {
              Morebits.status.warn("提示", [window.wgULS("将对 ", "將對 "), Morebits.htmlNode("strong", userNorm), window.wgULS(" 执行常规回退，这是一个可信的机器人，基于确认，我们仍将回退这个修订版本。", " 執行常規回退，這是一個可信的機器人，基於確認，我們仍將回退這個修訂版本。")]);
            }
            break;
          }
        }
      }
      let found = false;
      let count = 0;
      for (let i = index; i < revs.length; ++i) {
        ++count;
        if (revs[i].getAttribute("user") !== params.user) {
          found = i;
          break;
        }
      }
      if (!found) {
        statelem.error([window.wgULS("未找到之前的修订版本，可能 ", "未找到之前的修訂版本，可能 "), Morebits.htmlNode("strong", userNorm), window.wgULS(" 是唯一贡献者，或这个用户连续做出了超过 ", " 是唯一貢獻者，或這個用戶連續做出了超過 ") + mw.language.convertNumber(Twinkle.getPref("revertMaxRevisions")) + window.wgULS(" 次编辑。", " 次編輯。")]);
        return;
      }
      if (!count) {
        Morebits.status.error(window.wgULS("错误", "錯誤"), window.wgULS("我们将要回退0个修订版本，这没有意义，所以取消回退操作。可能是因为这个修订版本已经被回退，但修订版本ID仍是一样的。", "我們將要回退0個修訂版本，這沒有意義，所以取消回退操作。可能是因為這個修訂版本已經被回退，但修訂版本ID仍是一樣的。"));
        return;
      }
      const good_revision = revs[found];
      let userHasAlreadyConfirmedAction = false;
      if (params.type !== "vand" && count > 1) {
        if (!confirm(userNorm + window.wgULS(" 连续做出了 ", " 連續做出了 ") + mw.language.convertNumber(count) + window.wgULS(" 次编辑，是否要全部回退？", " 次編輯，是否要全部回退？"))) {
          Morebits.status.info("提示", window.wgULS("用户取消操作", "使用者取消操作"));
          return;
        }
        userHasAlreadyConfirmedAction = true;
      }
      params.count = count;
      params.goodid = good_revision.getAttribute("revid");
      params.gooduser = good_revision.getAttribute("user");
      params.gooduserHidden = good_revision.getAttribute("userhidden") === "";
      statelem.status([Morebits.htmlNode("strong", mw.language.convertNumber(count)), window.wgULS(" 个修订版本之前由 ", " 個修訂版本之前由 "), Morebits.htmlNode("strong", params.gooduserHidden ? Twinkle.fluff.hiddenName : params.gooduser), window.wgULS(" 做出的修订版本 ", " 做出的修訂版本 "), Morebits.htmlNode("strong", params.goodid)]);
      let summary;
      let extra_summary;
      switch (params.type) {
        case "vand":
          summary = Twinkle.fluff.formatSummary("回退$USER做出的".concat(params.count).concat(window.wgULS("次编辑，到由", "次編輯，到由")).concat(params.gooduserHidden ? Twinkle.fluff.hiddenName : params.gooduser).concat(window.wgULS("做出的最后修订版本 ", "做出的最後修訂版本 ")), params.userHidden ? null : params.user);
          break;
        default:
          if (Twinkle.getPref("offerReasonOnNormalRevert")) {
            extra_summary = prompt("".concat(window.wgULS("可选的编辑摘要：", "可選的編輯摘要："), "                              "), params.summary);
            if (extra_summary === null) {
              statelem.error(window.wgULS("用户取消操作。", "使用者取消操作。"));
              return;
            }
            userHasAlreadyConfirmedAction = true;
          }
          summary = Twinkle.fluff.formatSummary("回退$USER做出的".concat(params.count).concat(window.wgULS("次编辑", "次編輯")), params.userHidden ? null : params.user, extra_summary);
          break;
      }
      if (Twinkle.getPref("confirmOnFluff") && !userHasAlreadyConfirmedAction && !confirm(window.wgULS("回退页面：您确定吗？", "回退頁面：您確定嗎？"))) {
        statelem.error(window.wgULS("用户取消操作。", "使用者取消操作。"));
        return;
      }
      if (!Twinkle.fluff.skipTalk && Twinkle.getPref("openTalkPage").includes(params.type) && !params.userHidden && mw.config.get("wgUserName") !== params.user) {
        params.notifyUser = true;
        params.vantimestamp = top.getAttribute("timestamp");
      }
      const query = {
        action: "edit",
        title: params.pagename,
        summary,
        tags: Twinkle.changeTags,
        token: csrftoken,
        undo: lastrevid,
        undoafter: params.goodid,
        basetimestamp: touched,
        starttimestamp: loadtimestamp,
        minor: Twinkle.getPref("markRevertedPagesAsMinor").includes(params.type) ? true : void 0,
        bot: true
      };
      if (Twinkle.getPref("watchRevertedPages").includes(params.type)) {
        const watchOrExpiry = Twinkle.getPref("watchRevertedExpiry");
        if (!watchOrExpiry || watchOrExpiry === "no") {
          query.watchlist = "nochange";
        } else if (watchOrExpiry === "default" || watchOrExpiry === "preferences") {
          query.watchlist = "preferences";
        } else {
          query.watchlist = "watch";
          if (typeof watchOrExpiry === "string" && watchOrExpiry !== "yes") {
            query.watchlistexpiry = watchOrExpiry;
          }
        }
      }
      if (!Twinkle.fluff.rollbackInPlace) {
        Morebits.wiki.actionCompleted.redirect = params.pagename;
      }
      Morebits.wiki.actionCompleted.notice = "回退完成";
      const ysarchives_api = new Morebits.wiki.api(window.wgULS("保存回退内容", "儲存回退內容"), query, Twinkle.fluff.callbacks.complete, statelem);
      ysarchives_api.params = params;
      ysarchives_api.post();
    },
    complete: (apiobj) => {
      const xml = apiobj.getXML();
      const $edit = $(xml).find("edit");
      if ($(xml).find("captcha").length > 0) {
        apiobj.statelem.error(window.wgULS("不能回退，因服务器要求您输入验证码。", "不能回退，因伺服器要求您輸入驗證碼。"));
      } else if ($edit.attr("nochange") === "") {
        apiobj.statelem.error(window.wgULS("要回退到的版本与当前版本相同，没什么要做的", "要回退到的版本與目前版本相同，沒什麼要做的"));
      } else {
        apiobj.statelem.info("完成");
        const {
          params
        } = apiobj;
        if (params.notifyUser && !params.userHidden) {
          Morebits.status.info(window.wgULS("信息", "資訊"), [window.wgULS("开启用户 ", "開啟使用者 "), Morebits.htmlNode("strong", params.user), window.wgULS(" 的讨论页", " 的討論頁")]);
          const windowQuery = {
            title: "User talk:".concat(params.user),
            action: "edit",
            preview: "yes",
            vanarticle: params.pagename.replace(/_/g, " "),
            vanarticlerevid: params.revid,
            vantimestamp: params.vantimestamp,
            vanarticlegoodrevid: params.goodid,
            type: params.type,
            count: params.count
          };
          switch (Twinkle.getPref("userTalkPageMode")) {
            case "tab":
              window.open(mw.util.getUrl("", windowQuery), "_blank", "noopener,noreferrer");
              break;
            case "blank":
              window.open(mw.util.getUrl("", windowQuery), "_blank", "noopener,noreferrer,location=no,toolbar=no,status=no,directories=no,scrollbars=yes,width=1200,height=800");
              break;
            default:
              window.open(mw.util.getUrl("", windowQuery), window.name === "twinklewarnwindow" ? "_blank" : "twinklewarnwindow", window.name === "twinklewarnwindow" ? "noopener,noreferrer," : "location=no,toolbar=no,status=no,directories=no,scrollbars=yes,width=1200,height=800");
              break;
          }
        }
      }
    }
  };
  Twinkle.fluff.formatSummary = (builtInString, userName, customString) => {
    let result = builtInString;
    if (customString) {
      result += "：".concat(Morebits.string.toUpperCaseFirstChar(customString));
    }
    if (/\$USER/.test(builtInString)) {
      if (userName) {
        const resultLen = unescape(encodeURIComponent(result.replace("$USER", ""))).length;
        const contribsLink = "[[Special:Contributions/".concat(userName, "|").concat(userName, "]]");
        const contribsLen = unescape(encodeURIComponent(contribsLink)).length;
        if (resultLen + contribsLen <= 499) {
          const talkLink = "（[[User talk:".concat(userName).concat(window.wgULS("|讨论]]）", "|討論]]）"));
          if (resultLen + contribsLen + unescape(encodeURIComponent(talkLink)).length <= 499) {
            result = Morebits.string.safeReplace(result, "$USER", contribsLink + talkLink);
          } else {
            result = Morebits.string.safeReplace(result, "$USER", contribsLink);
          }
        } else {
          result = Morebits.string.safeReplace(result, "$USER", userName);
        }
      } else {
        result = Morebits.string.safeReplace(result, "$USER", Twinkle.fluff.hiddenName);
      }
    }
    return result;
  };
  Twinkle.addInitCallback(Twinkle.fluff, "fluff");
})(jQuery);
//! src/Twinkle/modules/twinklebatchdelete.js
/*! Twinkle.js - twinklebatchdelete.js */
(function twinklebatchdelete($) {
  const $body = $("body");
  Twinkle.batchdelete = () => {
    if (Morebits.userIsSysop && (mw.config.get("wgCurRevisionId") && mw.config.get("wgNamespaceNumber") > 0 || mw.config.get("wgCanonicalSpecialPageName") === "Prefixindex" || mw.config.get("wgCanonicalSpecialPageName") === "BrokenRedirects")) {
      Twinkle.addPortletLink(Twinkle.batchdelete.callback, window.wgULS("批删", "批刪"), "tw-batch", window.wgULS("删除此分类或页面中的所有链接", "刪除此分類或頁面中的所有連結"));
    }
  };
  Twinkle.batchdelete.unlinkCache = {};
  let subpagesLoaded;
  Twinkle.batchdelete.callback = () => {
    subpagesLoaded = false;
    const Window = new Morebits.simpleWindow(600, 400);
    Window.setTitle(window.wgULS("批量删除", "批次刪除"));
    Window.setScriptName("Twinkle");
    Window.addFooterLink(window.wgULS("Twinkle帮助", "Twinkle說明"), "H:TW/DOC#batchdelete");
    const form = new Morebits.quickForm(Twinkle.batchdelete.callback.evaluate);
    form.append({
      type: "checkbox",
      list: [{
        label: window.wgULS("删除页面", "刪除頁面"),
        name: "delete_page",
        value: "delete",
        checked: true,
        subgroup: {
          type: "checkbox",
          list: [{
            label: window.wgULS("删除关联的讨论页（用户讨论页除外）", "刪除關聯的討論頁（使用者討論頁除外）"),
            name: "delete_talk",
            value: "delete_talk",
            checked: true
          }, {
            label: window.wgULS("删除到已删页面的重定向页", "刪除到已刪頁面的重新導向頁面"),
            name: "delete_redirects",
            value: "delete_redirects",
            checked: true
          }, {
            label: window.wgULS("删除已删页面的子页面", "刪除已刪頁面的子頁面"),
            name: "delete_subpages",
            value: "delete_subpages",
            checked: false,
            event: Twinkle.batchdelete.callback.toggleSubpages,
            subgroup: {
              type: "checkbox",
              list: [{
                label: window.wgULS("删除已删子页面的讨论页", "刪除已刪子頁面的討論頁"),
                name: "delete_subpage_talks",
                value: "delete_subpage_talks"
              }, {
                label: window.wgULS("删除到已删子页面的重定向页", "刪除到已刪子頁面的重新導向頁面"),
                name: "delete_subpage_redirects",
                value: "delete_subpage_redirects"
              }, {
                label: window.wgULS("取消所有已删页面的链入（仅处理条目命名空间）", "取消所有已刪頁面的連入（僅處理條目命名空間）"),
                name: "unlink_subpages",
                value: "unlink_subpages"
              }]
            }
          }]
        }
      }, {
        label: window.wgULS("取消链入（仅处理条目命名空间）", "取消連入（僅處理條目命名空間）"),
        name: "unlink_page",
        value: "unlink",
        checked: false
      }, {
        label: window.wgULS("移除文件使用（所有命名空间）", "移除檔案使用（所有命名空間）"),
        name: "unlink_file",
        value: "unlink_file",
        checked: true
      }]
    });
    form.append({
      type: "select",
      name: "common_reason",
      label: "常用理由：",
      style: "width: 85%;",
      list: Twinkle.batchdelete.deletereasonlist,
      event: Twinkle.batchdelete.callback.change_common_reason
    });
    form.append({
      name: "reason",
      type: "input",
      label: "理由：",
      size: 75
    });
    const query = {
      action: "query",
      prop: "revisions|info|imageinfo",
      inprop: "protection",
      rvprop: "size|user"
    };
    if (mw.config.get("wgNamespaceNumber") === 14) {
      query.generator = "categorymembers";
      query.gcmtitle = mw.config.get("wgPageName");
      query.gcmlimit = Twinkle.getPref("batchMax");
    } else if (mw.config.get("wgCanonicalSpecialPageName") === "Prefixindex") {
      query.generator = "allpages";
      query.gaplimit = Twinkle.getPref("batchMax");
      if (mw.util.getParamValue("prefix")) {
        query.gapnamespace = mw.util.getParamValue("namespace");
        query.gapprefix = mw.util.getParamValue("prefix");
      } else {
        let pathSplit = decodeURIComponent(location.pathname).split("/");
        if (pathSplit.length < 3 || pathSplit[2] !== "Special:前缀索引") {
          return;
        }
        const titleSplit = pathSplit[3].split(":");
        query.gapnamespace = mw.config.get("wgNamespaceIds")[titleSplit[0].toLowerCase()];
        if (titleSplit.length < 2 || query.gapnamespace === void 0) {
          query.gapnamespace = 0;
          query.gapprefix = pathSplit.splice(3).join("/");
        } else {
          pathSplit = pathSplit.splice(4);
          pathSplit.splice(0, 0, titleSplit.splice(1).join(":"));
          query.gapprefix = pathSplit.join("/");
        }
      }
    } else if (mw.config.get("wgCanonicalSpecialPageName") === "BrokenRedirects") {
      query.generator = "querypage";
      query.gqppage = "BrokenRedirects";
      query.gqplimit = Twinkle.getPref("batchMax");
    } else {
      query.generator = "links";
      query.titles = mw.config.get("wgPageName");
      query.gpllimit = Twinkle.getPref("batchMax");
    }
    const statusdiv = document.createElement("div");
    statusdiv.style.padding = "15px";
    Window.setContent(statusdiv);
    Morebits.status.init(statusdiv);
    Window.display();
    Twinkle.batchdelete.pages = {};
    const statelem = new Morebits.status(window.wgULS("抓取页面列表", "抓取頁面列表"));
    const ysarchives_api = new Morebits.wiki.api(window.wgULS("加载中…", "載入中…"), query, (apiobj) => {
      const xml = apiobj.responseXML;
      const $pages = $(xml).find("page").filter(":not([missing])");
      $pages.each((_index, page) => {
        const $page = $(page);
        const ns = $page.attr("ns");
        const title = $page.attr("title");
        const isRedir = $page.attr("redirect") === "";
        const $editprot = $page.find('pr[type="edit"][level="sysop"]');
        const isProtected = $editprot.length > 0;
        const size = $page.find("rev").attr("size");
        const metadata = [];
        if (isRedir) {
          metadata.push(window.wgULS("重定向", "重新導向"));
        }
        if (isProtected) {
          metadata.push(window.wgULS("全保护，", "全保護，") + ($editprot.attr("expiry") === "infinity" ? window.wgULS("无限期", "無限期") : "".concat(new Morebits.date($editprot.attr("expiry")).calendar("utc"), " (UTC)")) + window.wgULS("过期", "過期"));
        }
        if (ns === "6") {
          metadata.push(window.wgULS("上传者：", "上傳者：") + $page.find("ii").attr("user"), window.wgULS("最后编辑：", "最後編輯：") + $page.find("rev").attr("user"));
        } else {
          metadata.push(mw.language.convertNumber(size) + window.wgULS("字节", "位元組"));
        }
        Twinkle.batchdelete.pages[title] = {
          label: title + (metadata.length ? "（".concat(metadata.join("，"), "）") : ""),
          value: title,
          checked: true,
          style: isProtected ? "color: #f00" : ""
        };
      });
      const form_ = apiobj.params.form;
      form_.append({
        type: "header",
        label: window.wgULS("待删除页面", "待刪除頁面")
      });
      form_.append({
        type: "button",
        label: window.wgULS("全选", "全選"),
        event: () => {
          $(result).find("input[name=pages]:not(:checked)").each((_, e) => {
            e.click();
          });
          $body.find('input[name="pages.subpages"]').prop("checked", true);
        }
      });
      form_.append({
        type: "button",
        label: window.wgULS("全不选", "全不選"),
        event: () => {
          $(result).find("input[name=pages]:checked").each((_, e) => {
            e.click();
          });
        }
      });
      form_.append({
        type: "checkbox",
        name: "pages",
        id: "tw-dbatch-pages",
        shiftClickSupport: true,
        list: Object.values(Twinkle.batchdelete.pages).map((e) => {
          return e;
        })
      });
      form_.append({
        type: "submit"
      });
      const result = form_.render();
      apiobj.params.Window.setContent(result);
      var _iterator54 = _createForOfIteratorHelper(Morebits.quickForm.getElements(result, "pages")), _step54;
      try {
        for (_iterator54.s(); !(_step54 = _iterator54.n()).done; ) {
          const checkbox = _step54.value;
          generateArrowLinks(checkbox);
        }
      } catch (err) {
        _iterator54.e(err);
      } finally {
        _iterator54.f();
      }
    }, statelem);
    ysarchives_api.params = {
      form,
      Window
    };
    ysarchives_api.post();
  };
  const generateArrowLinks = (checkbox) => {
    const link = Morebits.htmlNode("a", " >");
    link.setAttribute("class", "tw-dbatch-page-link");
    link.setAttribute("href", mw.util.getUrl(checkbox.value));
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    checkbox.nextElementSibling.append(link);
  };
  Twinkle.batchdelete.generateNewPageList = (form) => {
    const elements = form.elements.pages;
    if (elements instanceof NodeList) {
      var _iterator55 = _createForOfIteratorHelper(elements), _step55;
      try {
        for (_iterator55.s(); !(_step55 = _iterator55.n()).done; ) {
          const element = _step55.value;
          Twinkle.batchdelete.pages[element.value].checked = element.checked;
        }
      } catch (err) {
        _iterator55.e(err);
      } finally {
        _iterator55.f();
      }
    } else if (elements instanceof HTMLInputElement) {
      Twinkle.batchdelete.pages[elements.value].checked = elements.checked;
    }
    return new Morebits.quickForm.element({
      type: "checkbox",
      name: "pages",
      id: "tw-dbatch-pages",
      shiftClickSupport: true,
      list: Object.values(Twinkle.batchdelete.pages).map((e) => {
        return e;
      })
    }).render();
  };
  Twinkle.batchdelete.deletereasonlist = [{
    label: window.wgULS("请选择", "請選擇"),
    value: ""
  }, {
    label: window.wgULS("G6：原作者提请删除或清空页面，且页面原作者仅有一人", "G6：原作者提請刪除或清空頁面，且頁面原作者僅有一人"),
    value: window.wgULS("[[LIB:CSD#G6|G6]]：原作者提请删除或清空页面，且页面原作者仅有一人", "[[LIB:CSD#G6|G6]]：原作者提請刪除或清空頁面，且頁面原作者僅有一人")
  }, {
    label: window.wgULS("G9：孤立页面，比如没有主页面的讨论页、指向空页面的重定向等", "G9：孤立頁面，比如沒有主頁面的討論頁、指向空頁面的重新導向等"),
    value: window.wgULS("[[LIB:CSD#G9|G9]]：孤立页面", "[[LIB:CSD#G9|G9]]：孤立頁面")
  }, {
    label: window.wgULS("R1：不能发挥实际作用的重定向。", "R1：不能發揮實際作用的重定向。"),
    value: window.wgULS("[[LIB:CSD#R1|R1]]：不能发挥实际作用的重定向。", "[[LIB:CSD#R1|R1]]：不能發揮實際作用的重定向。")
  }, {
    label: window.wgULS("R2：名称与导向目标代表事物不一致或不完全一致的重定向。", "R2：名稱與導向目標代表事物不一致或不完全一致的重定向。"),
    value: window.wgULS("[[LIB:CSD#R2|R2]]：名称与导向目标代表事物不一致或不完全一致的重定向。", "[[LIB:CSD#R2|R2]]：名稱與導向目標代表事物不一致或不完全一致的重定向。")
  }, {
    label: window.wgULS("F4：可被替代的合理使用文件", "F4：可被替代的合理使用檔案"),
    value: window.wgULS("[[LIB:CSD#F4|F4]]：可被替代的合理使用文件", "[[LIB:CSD#F4|F4]]：可被替代的合理使用檔案")
  }, {
    label: window.wgULS("F5：没有被条目使用的非自由著作权文件、没有填写任何合理使用依据的非自由著作权文件", "F5：沒有被條目使用的非自由版權檔案、沒有填寫任何合理使用依據的非自由版權檔案"),
    value: window.wgULS("[[LIB:CSD#F5|F5]]：没有被条目使用的非自由著作权文件、没有填写任何合理使用依据的非自由著作权文件", "[[LIB:CSD#F5|F5]]：沒有被條目使用的非自由版權檔案、沒有填寫任何合理使用依據的非自由版權檔案")
  }, {
    label: window.wgULS("O1：用户请求删除自己的用户页或其子页面", "O1：使用者請求刪除自己的使用者頁面或其子頁面"),
    value: window.wgULS("[[LIB:CSD#O1|O1]]：用户请求删除自己的[[Help:用户页|用户页]]或其子页面。", "[[LIB:CSD#O1|O1]]：使用者請求刪除自己的[[Help:用户页|使用者頁面]]或其子頁面。")
  }, {
    label: window.wgULS("O2：空的分类（没有条目也没有子分类）", "O2：空的分類（沒有條目也沒有子分類）"),
    value: window.wgULS("[[LIB:CSD#O2|O2]]：空的分类（没有条目也没有子分类）。", "[[LIB:CSD#O2|O2]]：空的分類（沒有條目也沒有子分類）。")
  }, {
    label: window.wgULS("O3：废弃草稿", "O3：廢棄草稿"),
    value: window.wgULS("[[LIB:CSD#O3|O3]]：废弃草稿。", "[[LIB:CSD#O3|O3]]：廢棄草稿。")
  }];
  Twinkle.batchdelete.callback.change_common_reason = (e) => {
    if (e.target.form.reason.value !== "") {
      e.target.form.reason.value = Morebits.string.appendPunctuation(e.target.form.reason.value);
    }
    e.target.form.reason.value += e.target.value;
    e.target.value = "";
  };
  Twinkle.batchdelete.callback.toggleSubpages = (e) => {
    const {
      form
    } = e.target;
    let newPageList;
    if (e.target.checked) {
      form.delete_subpage_redirects.checked = form.delete_redirects.checked;
      form.delete_subpage_talks.checked = form.delete_talk.checked;
      form.unlink_subpages.checked = form.unlink_page.checked;
      if (subpagesLoaded) {
        var _iterator56 = _createForOfIteratorHelper(Twinkle.batchdelete.pages), _step56;
        try {
          for (_iterator56.s(); !(_step56 = _iterator56.n()).done; ) {
            const el = _step56.value;
            if (el.subgroup === null && el.subgroup_) {
              el.subgroup = el.subgroup_;
            }
          }
        } catch (err) {
          _iterator56.e(err);
        } finally {
          _iterator56.f();
        }
        newPageList = Twinkle.batchdelete.generateNewPageList(form);
        $body.find("#tw-dbatch-pages").replaceWith(newPageList);
        var _iterator57 = _createForOfIteratorHelper(Morebits.quickForm.getElements(newPageList, "pages")), _step57;
        try {
          for (_iterator57.s(); !(_step57 = _iterator57.n()).done; ) {
            const checkbox = _step57.value;
            generateArrowLinks(checkbox);
          }
        } catch (err) {
          _iterator57.e(err);
        } finally {
          _iterator57.f();
        }
        var _iterator58 = _createForOfIteratorHelper(Morebits.quickForm.getElements(newPageList, "pages.subpages")), _step58;
        try {
          for (_iterator58.s(); !(_step58 = _iterator58.n()).done; ) {
            const checkbox = _step58.value;
            generateArrowLinks(checkbox);
          }
        } catch (err) {
          _iterator58.e(err);
        } finally {
          _iterator58.f();
        }
        return;
      }
      const loadingText = '<strong id="dbatch-subpage-loading">'.concat(window.wgULS("加载中...", "載入中..."), "</strong>");
      $(e.target).after(loadingText);
      const pages = $(form.pages).map((_i, el) => {
        return el.value;
      }).get();
      const subpageLister = new Morebits.batchOperation();
      subpageLister.setOption("chunkSize", Twinkle.getPref("batchChunks"));
      subpageLister.setPageList(pages);
      subpageLister.run((pageName) => {
        const pageTitle = mw.Title.newFromText(pageName);
        if ([0, 6, 8].includes(pageTitle.namespace)) {
          subpageLister.workerSuccess();
          return;
        }
        const ysarchives_api = new Morebits.wiki.api(window.wgULS("正在获取 ", "正在取得 ") + pageName + window.wgULS(" 的子页面", " 的子頁面"), {
          action: "query",
          prop: "revisions|info|imageinfo",
          generator: "allpages",
          rvprop: "size",
          inprop: "protection",
          gapprefix: "".concat(pageTitle.title, "/"),
          gapnamespace: pageTitle.namespace,
          gaplimit: "max",
          pageNameFull: pageName
          // Not used by API, but added for access in onSuccess()
        }, (apiobj) => {
          const xml = apiobj.responseXML;
          const $pages = $(xml).find("page");
          const subpageList = [];
          $pages.each((_index, page) => {
            const $page = $(page);
            const ns = $page.attr("ns");
            const title = $page.attr("title");
            const isRedir = $page.attr("redirect") === "";
            const $editprot = $page.find('pr[type="edit"][level="sysop"]');
            const isProtected = $editprot.length > 0;
            const size = $page.find("rev").attr("size");
            const metadata = [];
            if (isRedir) {
              metadata.push("redirect");
            }
            if (isProtected) {
              metadata.push(window.wgULS("全保护，", "全保護，") + ($editprot.attr("expiry") === "infinity" ? window.wgULS("无限期", "無限期") : "".concat(new Morebits.date($editprot.attr("expiry")).calendar("utc"), " (UTC)")) + window.wgULS("过期", "過期"));
            }
            if (ns === "6") {
              metadata.push(window.wgULS("上传者：", "上傳者：") + $page.find("ii").attr("user"), window.wgULS("最后编辑：", "最後編輯：") + $page.find("rev").attr("user"));
            } else {
              metadata.push(mw.language.convertNumber(size) + window.wgULS("字节", "位元組"));
            }
            subpageList.push({
              label: title + (metadata.length ? " (".concat(metadata.join("; "), ")") : ""),
              value: title,
              checked: true,
              style: isProtected ? "color: #f00" : ""
            });
          });
          if (subpageList.length) {
            const pageName_ = apiobj.query.pageNameFull;
            Twinkle.batchdelete.pages[pageName_].subgroup = {
              type: "checkbox",
              name: "subpages",
              className: "dbatch-subpages",
              shiftClickSupport: true,
              list: subpageList
            };
          }
          subpageLister.workerSuccess();
        }, null, () => {
          subpageLister.workerFailure();
        });
        ysarchives_api.post();
      }, () => {
        newPageList = Twinkle.batchdelete.generateNewPageList(form);
        $body.find("#tw-dbatch-pages").replaceWith(newPageList);
        var _iterator59 = _createForOfIteratorHelper(Morebits.quickForm.getElements(newPageList, "pages")), _step59;
        try {
          for (_iterator59.s(); !(_step59 = _iterator59.n()).done; ) {
            const checkbox = _step59.value;
            generateArrowLinks(checkbox);
          }
        } catch (err) {
          _iterator59.e(err);
        } finally {
          _iterator59.f();
        }
        var _iterator60 = _createForOfIteratorHelper(Morebits.quickForm.getElements(newPageList, "pages.subpages")), _step60;
        try {
          for (_iterator60.s(); !(_step60 = _iterator60.n()).done; ) {
            const checkbox = _step60.value;
            generateArrowLinks(checkbox);
          }
        } catch (err) {
          _iterator60.e(err);
        } finally {
          _iterator60.f();
        }
        subpagesLoaded = true;
        $body.find("#dbatch-subpage-loading").remove();
      });
    } else if (!e.target.checked) {
      var _iterator61 = _createForOfIteratorHelper(Twinkle.batchdelete.pages), _step61;
      try {
        for (_iterator61.s(); !(_step61 = _iterator61.n()).done; ) {
          const el = _step61.value;
          if (el.subgroup) {
            el.subgroup_ = el.subgroup;
            el.subgroup = null;
          }
        }
      } catch (err) {
        _iterator61.e(err);
      } finally {
        _iterator61.f();
      }
      newPageList = Twinkle.batchdelete.generateNewPageList(form);
      $body.find("#tw-dbatch-pages").replaceWith(newPageList);
      var _iterator62 = _createForOfIteratorHelper(Morebits.quickForm.getElements(newPageList, "pages")), _step62;
      try {
        for (_iterator62.s(); !(_step62 = _iterator62.n()).done; ) {
          const checkbox = _step62.value;
          generateArrowLinks(checkbox);
        }
      } catch (err) {
        _iterator62.e(err);
      } finally {
        _iterator62.f();
      }
    }
  };
  Twinkle.batchdelete.callback.evaluate = (event) => {
    Morebits.wiki.actionCompleted.notice = window.wgULS("批量删除已完成", "批次刪除已完成");
    const form = event.target;
    const numProtected = $(Morebits.quickForm.getElements(form, "pages")).filter((_index, element) => {
      return element.checked && element.nextElementSibling.style.color === "red";
    }).length;
    if (numProtected > 0 && !confirm(window.wgULS("您正要删除 ", "您正要刪除 ") + mw.language.convertNumber(numProtected) + window.wgULS(" 个全保护页面，您确定吗？", " 個全保護頁面，您確定嗎？"))) {
      return;
    }
    const pages = form.getChecked("pages");
    const subpages = form.getChecked("pages.subpages");
    const reason = form.reason.value;
    const delete_page = form.delete_page.checked;
    let delete_talk;
    let delete_redirects;
    let delete_subpages;
    let delete_subpage_redirects;
    let delete_subpage_talks;
    let unlink_subpages;
    if (delete_page) {
      delete_talk = form.delete_talk.checked;
      delete_redirects = form.delete_redirects.checked;
      delete_subpages = form.delete_subpages.checked;
      if (delete_subpages) {
        delete_subpage_redirects = form.delete_subpage_redirects.checked;
        delete_subpage_talks = form.delete_subpage_talks.checked;
        unlink_subpages = form.unlink_subpages.checked;
      }
    }
    const unlink_page = form.unlink_page.checked;
    const unlink_file = form.unlink_file.checked;
    if (!reason) {
      mw.notify(window.wgULS("您需要给出一个理由", "您需要給出一個理由"), {
        type: "warn",
        tag: "twinklebatchdelete"
      });
      return;
    }
    Morebits.simpleWindow.setButtonsEnabled(false);
    Morebits.status.init(form);
    if (!pages) {
      Morebits.status.error(window.wgULS("错误", "錯誤"), window.wgULS("没有要删除的内容，中止", "沒有要刪除的內容，中止"));
      return;
    }
    const pageDeleter = new Morebits.batchOperation(delete_page ? window.wgULS("正在删除页面", "正在刪除頁面") : window.wgULS("正在启动要求的任务", "正在啟動要求的任務"));
    pageDeleter.setOption("chunkSize", Twinkle.getPref("batchChunks"));
    pageDeleter.setOption("preserveIndividualStatusLines", delete_page);
    pageDeleter.setPageList(pages);
    pageDeleter.run((pageName) => {
      const params = {
        page: pageName,
        delete_page,
        delete_talk,
        delete_redirects,
        unlink_page,
        unlink_file: unlink_file && new RegExp("^".concat(Morebits.namespaceRegex(6), ":"), "i").test(pageName),
        reason,
        pageDeleter
      };
      const ysarchives_page = new Morebits.wiki.page(pageName, window.wgULS("正在删除页面 ", "正在刪除頁面 ") + pageName);
      ysarchives_page.setCallbackParameters(params);
      if (delete_page) {
        ysarchives_page.setEditSummary("".concat(reason, "（批量）"));
        ysarchives_page.setChangeTags(Twinkle.changeTags);
        ysarchives_page.suppressProtectWarning();
        ysarchives_page.deletePage(Twinkle.batchdelete.callbacks.doExtras, pageDeleter.workerFailure);
      } else {
        Twinkle.batchdelete.callbacks.doExtras(ysarchives_page);
      }
    }, () => {
      if (delete_subpages) {
        const subpageDeleter = new Morebits.batchOperation(window.wgULS("正在删除子页面", "正在刪除子頁面"));
        subpageDeleter.setOption("chunkSize", Twinkle.getPref("batchChunks"));
        subpageDeleter.setOption("preserveIndividualStatusLines", true);
        subpageDeleter.setPageList(subpages);
        subpageDeleter.run((pageName) => {
          const params = {
            page: pageName,
            delete_page: true,
            delete_talk: delete_subpage_talks,
            delete_redirects: delete_subpage_redirects,
            unlink_page: unlink_subpages,
            unlink_file: false,
            reason,
            pageDeleter: subpageDeleter
          };
          const ysarchives_page = new Morebits.wiki.page(pageName, window.wgULS("正在删除子页面 ", "正在刪除子頁面 ") + pageName);
          ysarchives_page.setCallbackParameters(params);
          ysarchives_page.setEditSummary("".concat(reason, "（批量）"));
          ysarchives_page.setChangeTags(Twinkle.changeTags);
          ysarchives_page.suppressProtectWarning();
          ysarchives_page.deletePage(Twinkle.batchdelete.callbacks.doExtras, pageDeleter.workerFailure);
        });
      }
    });
  };
  Twinkle.batchdelete.callbacks = {
    // this stupid parameter name is a temporary thing until I implement an overhaul
    // of Morebits.wiki.* callback parameters
    doExtras: (thingWithParameters) => {
      const params = thingWithParameters.parent ? thingWithParameters.parent.getCallbackParameters() : thingWithParameters.getCallbackParameters();
      params.pageDeleter.workerSuccess(thingWithParameters);
      let query;
      let ysarchives_api;
      if (params.unlink_page) {
        Twinkle.batchdelete.unlinkCache = {};
        query = {
          action: "query",
          list: "backlinks",
          blfilterredir: "nonredirects",
          blnamespace: [0],
          bltitle: params.page,
          bllimit: "max"
          // 500 is max for normal users, 5000 for bots and sysops
        };
        ysarchives_api = new Morebits.wiki.api(window.wgULS("正在获取链入", "正在取得連入"), query, Twinkle.batchdelete.callbacks.unlinkBacklinksMain);
        ysarchives_api.params = params;
        ysarchives_api.post();
      }
      if (params.unlink_file) {
        query = {
          action: "query",
          list: "imageusage",
          iutitle: params.page,
          iulimit: "max"
          // 500 is max for normal users, 5000 for bots and sysops
        };
        ysarchives_api = new Morebits.wiki.api(window.wgULS("正在获取文件链入", "正在取得檔案連入"), query, Twinkle.batchdelete.callbacks.unlinkImageInstancesMain);
        ysarchives_api.params = params;
        ysarchives_api.post();
      }
      if (params.delete_page) {
        if (params.delete_redirects) {
          query = {
            action: "query",
            titles: params.page,
            prop: "redirects",
            rdlimit: "max"
            // 500 is max for normal users, 5000 for bots and sysops
          };
          ysarchives_api = new Morebits.wiki.api(window.wgULS("正在获取重定向", "正在取得重新導向"), query, Twinkle.batchdelete.callbacks.deleteRedirectsMain);
          ysarchives_api.params = params;
          ysarchives_api.post();
        }
        if (params.delete_talk) {
          const pageTitle = mw.Title.newFromText(params.page);
          if (pageTitle && pageTitle.namespace % 2 === 0 && pageTitle.namespace !== 2) {
            pageTitle.namespace++;
            query = {
              action: "query",
              titles: pageTitle.toText()
            };
            ysarchives_api = new Morebits.wiki.api(window.wgULS("正在检查讨论页面是否存在", "正在檢查討論頁面是否存在"), query, Twinkle.batchdelete.callbacks.deleteTalk);
            ysarchives_api.params = params;
            ysarchives_api.params.talkPage = pageTitle.toText();
            ysarchives_api.post();
          }
        }
      }
    },
    deleteRedirectsMain: (apiobj) => {
      const xml = apiobj.responseXML;
      const pages = $(xml).find("rd").map((_index, element) => {
        return $(element).attr("title");
      }).get();
      if (!pages.length) {
        return;
      }
      const redirectDeleter = new Morebits.batchOperation(window.wgULS("正在删除到 ", "正在刪除到 ") + apiobj.params.page + window.wgULS(" 的重定向", " 的重新導向"));
      redirectDeleter.setOption("chunkSize", Twinkle.getPref("batchChunks"));
      redirectDeleter.setPageList(pages);
      redirectDeleter.run((pageName) => {
        const ysarchives_page = new Morebits.wiki.page(pageName, window.wgULS("正在删除 ", "正在刪除 ") + pageName);
        ysarchives_page.setEditSummary("[[LIB:CSD#G9|G9]]: ".concat(window.wgULS("指向已删页面“", "指向已刪頁面「")).concat(apiobj.params.page).concat(window.wgULS("”的重定向", "」的重新導向")));
        ysarchives_page.setChangeTags(Twinkle.changeTags);
        ysarchives_page.deletePage(redirectDeleter.workerSuccess, redirectDeleter.workerFailure);
      });
    },
    deleteTalk: (apiobj) => {
      const xml = apiobj.responseXML;
      const exists = $(xml).find("page:not([missing])").length > 0;
      if (!exists) {
        return;
      }
      const page = new Morebits.wiki.page(apiobj.params.talkPage, window.wgULS("正在删除页面 ", "正在刪除頁面 ") + apiobj.params.page + window.wgULS(" 的讨论页", " 的討論頁"));
      page.setEditSummary("[[LIB:CSD#G9|G9]]: ".concat(window.wgULS("已删页面“", "已刪頁面「")).concat(apiobj.params.page).concat(window.wgULS("”的[[Help:讨论页|讨论页]]", "」的[[Help:討論頁|討論頁]]")));
      page.setChangeTags(Twinkle.changeTags);
      page.deletePage();
    },
    unlinkBacklinksMain: (apiobj) => {
      const xml = apiobj.responseXML;
      const pages = $(xml).find("bl").map((_index, element) => {
        return $(element).attr("title");
      }).get();
      if (!pages.length) {
        return;
      }
      const unlinker = new Morebits.batchOperation("正在取消到 ".concat(apiobj.params.page).concat(window.wgULS(" 的链入", " 的連入")));
      unlinker.setOption("chunkSize", Twinkle.getPref("batchChunks"));
      unlinker.setPageList(pages);
      unlinker.run((pageName) => {
        const ysarchives_page = new Morebits.wiki.page(pageName, "正在取消 ".concat(pageName).concat(window.wgULS(" 上的链入", " 上的連入")));
        const params = {
          ...apiobj.params
        };
        params.title = pageName;
        params.unlinker = unlinker;
        ysarchives_page.setCallbackParameters(params);
        ysarchives_page.load(Twinkle.batchdelete.callbacks.unlinkBacklinks);
      });
    },
    unlinkBacklinks: (pageobj) => {
      const params = pageobj.getCallbackParameters();
      if (!pageobj.exists()) {
        params.unlinker.workerSuccess(pageobj);
        return;
      }
      let text;
      if (params.title in Twinkle.batchdelete.unlinkCache) {
        text = Twinkle.batchdelete.unlinkCache[params.title];
      } else {
        text = pageobj.getPageText();
      }
      const old_text = text;
      const ysarchives_page = new Morebits.wikitext.page(text);
      text = ysarchives_page.removeLink(params.page).getText();
      Twinkle.batchdelete.unlinkCache[params.title] = text;
      if (text === old_text) {
        params.unlinker.workerSuccess(pageobj);
        return;
      }
      pageobj.setEditSummary(window.wgULS("取消到已删页面", "取消到已刪頁面") + params.page + window.wgULS("的链入", "的連入"));
      pageobj.setChangeTags(Twinkle.changeTags);
      pageobj.setPageText(text);
      pageobj.setCreateOption("nocreate");
      pageobj.setMaxConflictRetries(10);
      pageobj.save(params.unlinker.workerSuccess, params.unlinker.workerFailure);
    },
    unlinkImageInstancesMain: (apiobj) => {
      const xml = apiobj.responseXML;
      const pages = $(xml).find("iu").map((_index, element) => {
        return $(element).attr("title");
      }).get();
      if (!pages.length) {
        return;
      }
      const unlinker = new Morebits.batchOperation("正在取消到 ".concat(apiobj.params.page).concat(window.wgULS(" 的链入", " 的連入")));
      unlinker.setOption("chunkSize", Twinkle.getPref("batchChunks"));
      unlinker.setPageList(pages);
      unlinker.run((pageName) => {
        const ysarchives_page = new Morebits.wiki.page(pageName, "取消 ".concat(pageName).concat(window.wgULS(" 的文件使用", " 的檔案使用")));
        const params = {
          ...apiobj.params
        };
        params.title = pageName;
        params.unlinker = unlinker;
        ysarchives_page.setCallbackParameters(params);
        ysarchives_page.load(Twinkle.batchdelete.callbacks.unlinkImageInstances);
      });
    },
    unlinkImageInstances: (pageobj) => {
      const params = pageobj.getCallbackParameters();
      if (!pageobj.exists()) {
        params.unlinker.workerSuccess(pageobj);
        return;
      }
      const image = params.page.replace(new RegExp("^".concat(Morebits.namespaceRegex(6), ":")), "");
      let text;
      if (params.title in Twinkle.batchdelete.unlinkCache) {
        text = Twinkle.batchdelete.unlinkCache[params.title];
      } else {
        text = pageobj.getPageText();
      }
      const old_text = text;
      const ysarchives_page = new Morebits.wikitext.page(text);
      text = ysarchives_page.commentOutImage(image, window.wgULS("因文件已删，故注解", "因檔案已刪，故註解")).getText();
      Twinkle.batchdelete.unlinkCache[params.title] = text;
      if (text === old_text) {
        pageobj.getStatusElement().error("在 ".concat(pageobj.getPageName(), " 上取消 ").concat(image).concat(window.wgULS(" 的文件使用失败", " 的檔案使用失敗")));
        params.unlinker.workerFailure(pageobj);
        return;
      }
      pageobj.setEditSummary(window.wgULS("取消使用已被删除文件", "取消使用已被刪除檔案") + image + window.wgULS("，因为：", "，因為：") + params.reason);
      pageobj.setChangeTags(Twinkle.changeTags);
      pageobj.setPageText(text);
      pageobj.setCreateOption("nocreate");
      pageobj.setMaxConflictRetries(10);
      pageobj.save(params.unlinker.workerSuccess, params.unlinker.workerFailure);
    }
  };
  Twinkle.addInitCallback(Twinkle.batchdelete, "batchdelete");
})(jQuery);
//! src/Twinkle/modules/twinklebatchundelete.js
/*! Twinkle.js - twinklebatchundelete.js */
(function twinklebatchundelete($) {
  Twinkle.batchundelete = () => {
    if (!Morebits.userIsSysop || !mw.config.get("wgArticleId") || mw.config.get("wgNamespaceNumber") !== mw.config.get("wgNamespaceIds").user && mw.config.get("wgNamespaceNumber") !== mw.config.get("wgNamespaceIds").project) {
      return;
    }
    Twinkle.addPortletLink(Twinkle.batchundelete.callback, window.wgULS("批复", "批復"), "tw-batch-undel", window.wgULS("反删除页面", "反刪除頁面"));
  };
  Twinkle.batchundelete.callback = () => {
    const Window = new Morebits.simpleWindow(600, 400);
    Window.setScriptName("Twinkle");
    Window.setTitle(window.wgULS("批量反删除", "批次反刪除"));
    Window.addFooterLink(window.wgULS("Twinkle帮助", "Twinkle說明"), "H:TW/DOC#batchundelete");
    const form = new Morebits.quickForm(Twinkle.batchundelete.callback.evaluate);
    form.append({
      type: "checkbox",
      list: [{
        label: window.wgULS("若存在已删除的讨论页，也恢复", "若存在已刪除的討論頁，也恢復"),
        name: "undel_talk",
        value: "undel_talk",
        checked: true
      }]
    });
    form.append({
      type: "input",
      name: "reason",
      label: "理由：",
      size: 60
    });
    const statusdiv = document.createElement("div");
    statusdiv.style.padding = "15px";
    Window.setContent(statusdiv);
    Morebits.status.init(statusdiv);
    Window.display();
    const query = {
      action: "query",
      generator: "links",
      prop: "info",
      inprop: "protection",
      titles: mw.config.get("wgPageName"),
      gpllimit: Twinkle.getPref("batchMax")
    };
    const statelem = new Morebits.status(window.wgULS("抓取页面列表", "抓取頁面列表"));
    const ysarchives_api = new Morebits.wiki.api(window.wgULS("加载中…", "載入中…"), query, (apiobj) => {
      const xml = apiobj.responseXML;
      const $pages = $(xml).find("page[missing]");
      const list = [];
      $pages.each((_index, page) => {
        const $page = $(page);
        const title = $page.attr("title");
        const $editprot = $page.find('pr[type="create"][level="sysop"]');
        const isProtected = $editprot.length > 0;
        list.push({
          label: title + (isProtected ? "（".concat(window.wgULS("全保护，", "全保護，")).concat($editprot.attr("expiry") === "infinity" ? window.wgULS("无限期", "無限期") : "".concat(new Morebits.date($editprot.attr("expiry")).calendar("utc"), " (UTC)").concat(window.wgULS("过期", "過期")), "）") : ""),
          value: title,
          checked: true,
          style: isProtected ? "color: #f00" : ""
        });
      });
      apiobj.params.form.append({
        type: "header",
        label: window.wgULS("待恢复页面", "待恢復頁面")
      });
      apiobj.params.form.append({
        type: "button",
        label: window.wgULS("全选", "全選"),
        event: (e) => {
          $(Morebits.quickForm.getElements(e.target.form, "pages")).prop("checked", true);
        }
      });
      apiobj.params.form.append({
        type: "button",
        label: window.wgULS("全不选", "全不選"),
        event: (e) => {
          $(Morebits.quickForm.getElements(e.target.form, "pages")).prop("checked", false);
        }
      });
      apiobj.params.form.append({
        type: "checkbox",
        name: "pages",
        shiftClickSupport: true,
        list
      });
      apiobj.params.form.append({
        type: "submit"
      });
      const result = apiobj.params.form.render();
      apiobj.params.Window.setContent(result);
    }, statelem);
    ysarchives_api.params = {
      form,
      Window
    };
    ysarchives_api.post();
  };
  Twinkle.batchundelete.callback.evaluate = (event) => {
    Morebits.wiki.actionCompleted.notice = window.wgULS("反删除已完成", "反刪除已完成");
    const numProtected = $(Morebits.quickForm.getElements(event.target, "pages")).filter((_index, element) => {
      return element.checked && element.nextElementSibling.style.color === "red";
    }).length;
    if (numProtected > 0 && !confirm(window.wgULS("您正要反删除 ", "您正要反刪除 ") + numProtected + window.wgULS(" 个全保护页面，您确定吗？", " 個全保護頁面，您確定嗎？"))) {
      return;
    }
    const pages = event.target.getChecked("pages");
    const reason = event.target.reason.value;
    const undel_talk = event.target.reason.value;
    if (!reason) {
      mw.notify("您需要指定理由。", {
        type: "warn",
        tag: "twinklebatchundelete"
      });
      return;
    }
    Morebits.simpleWindow.setButtonsEnabled(false);
    Morebits.status.init(event.target);
    if (!pages) {
      Morebits.status.error(window.wgULS("错误", "錯誤"), window.wgULS("没什么要反删除的，取消操作", "沒什麼要反刪除的，取消操作"));
      return;
    }
    const pageUndeleter = new Morebits.batchOperation(window.wgULS("反删除页面", "反刪除頁面"));
    pageUndeleter.setOption("chunkSize", Twinkle.getPref("batchChunks"));
    pageUndeleter.setOption("preserveIndividualStatusLines", true);
    pageUndeleter.setPageList(pages);
    pageUndeleter.run((pageName) => {
      const params = {
        page: pageName,
        undel_talk,
        reason,
        pageUndeleter
      };
      const ysarchives_page = new Morebits.wiki.page(pageName, window.wgULS("反删除页面", "反刪除頁面") + pageName);
      ysarchives_page.setCallbackParameters(params);
      ysarchives_page.setEditSummary("".concat(reason, " (批量)"));
      ysarchives_page.setChangeTags(Twinkle.changeTags);
      ysarchives_page.suppressProtectWarning();
      ysarchives_page.setMaxRetries(3);
      ysarchives_page.undeletePage(Twinkle.batchundelete.callbacks.doExtras, pageUndeleter.workerFailure);
    });
  };
  Twinkle.batchundelete.callbacks = {
    // this stupid parameter name is a temporary thing until I implement an overhaul
    // of Morebits.wiki.* callback parameters
    doExtras: (thingWithParameters) => {
      const params = thingWithParameters.parent ? thingWithParameters.parent.getCallbackParameters() : thingWithParameters.getCallbackParameters();
      params.pageUndeleter.workerSuccess(thingWithParameters);
      let query;
      let ysarchives_api;
      if (params.undel_talk) {
        const talkpagename = new mw.Title(params.page).getTalkPage().getPrefixedText();
        if (talkpagename !== params.page) {
          query = {
            action: "query",
            prop: "deletedrevisions",
            drvprop: "ids",
            drvlimit: 1,
            titles: talkpagename
          };
          ysarchives_api = new Morebits.wiki.api(window.wgULS("检查讨论页的已删版本", "檢查討論頁的已刪版本"), query, Twinkle.batchundelete.callbacks.undeleteTalk);
          ysarchives_api.params = params;
          ysarchives_api.params.talkPage = talkpagename;
          ysarchives_api.post();
        }
      }
    },
    undeleteTalk: (apiobj) => {
      const xml = apiobj.responseXML;
      const exists = $(xml).find("page:not([missing])").length > 0;
      const delrevs = $(xml).find("rev").attr("revid");
      if (exists || !delrevs) {
        return;
      }
      const page = new Morebits.wiki.page(apiobj.params.talkPage, window.wgULS("正在反删除", "正在反刪除") + apiobj.params.page + window.wgULS("的讨论页", "的討論頁"));
      page.setEditSummary(window.wgULS("反删除“", "反刪除「") + apiobj.params.page + window.wgULS("”的[[Help:讨论页|讨论页]]", "」的[[Help:討論頁|討論頁]]"));
      page.setChangeTags(Twinkle.changeTags);
      page.undeletePage();
    }
  };
  Twinkle.addInitCallback(Twinkle.batchundelete, "batchundelete");
})(jQuery);
//! src/Twinkle/modules/twinklebatchprotect.js
/*! Twinkle.js - twinklebatchprotect.js */
(function twinklebatchprotect($) {
  Twinkle.batchprotect = () => {
    if (Morebits.userIsSysop && (mw.config.get("wgArticleId") > 0 && [2, 4].includes(mw.config.get("wgNamespaceNumber")) || mw.config.get("wgNamespaceNumber") === 14 || mw.config.get("wgCanonicalSpecialPageName") === "Prefixindex")) {
      Twinkle.addPortletLink(Twinkle.batchprotect.callback, "批保", "tw-pbatch", "批量保护链出页面");
    }
  };
  Twinkle.batchprotect.unlinkCache = {};
  Twinkle.batchprotect.callback = () => {
    const Window = new Morebits.simpleWindow(600, 400);
    Window.setTitle("批保");
    Window.setScriptName("Twinkle");
    Window.addFooterLink("保护条例", "LIB:PROT");
    Window.addFooterLink(window.wgULS("帮助文档", "幫助文檔"), "H:TW/DOC#保护");
    Window.addFooterLink(window.wgULS("问题反馈", "問題反饋"), "HT:TW");
    const form = new Morebits.quickForm(Twinkle.batchprotect.callback.evaluate);
    form.append({
      type: "checkbox",
      event: Twinkle.protect.formevents.editmodify,
      list: [{
        label: "修改编辑保护",
        value: "editmodify",
        name: "editmodify",
        tooltip: "仅限现有页面。",
        checked: true
      }]
    });
    form.append({
      type: "select",
      name: "editlevel",
      label: "编辑权限：",
      event: Twinkle.protect.formevents.editlevel,
      list: Twinkle.protect.protectionLevels
    });
    form.append({
      type: "select",
      name: "editexpiry",
      label: "终止时间：",
      event: (event) => {
        if (event.target.value === "custom") {
          Twinkle.protect.doCustomExpiry(event.target);
        }
      },
      list: Twinkle.protect.protectionLengths
      // Default (2 days) set after render
    });
    form.append({
      type: "checkbox",
      event: Twinkle.protect.formevents.movemodify,
      list: [{
        label: "修改移动保护",
        value: "movemodify",
        name: "movemodify",
        tooltip: "仅限现有页面。",
        checked: true
      }]
    });
    form.append({
      type: "select",
      name: "movelevel",
      label: "移动权限：",
      event: Twinkle.protect.formevents.movelevel,
      list: Twinkle.protect.protectionLevels.filter(
        // Autoconfirmed is required for a move, redundant
        (protLevel) => {
          return protLevel.value !== "autoconfirmed";
        }
      )
    });
    form.append({
      type: "select",
      name: "moveexpiry",
      label: "终止时间：",
      event: (event) => {
        if (event.target.value === "custom") {
          Twinkle.protect.doCustomExpiry(event.target);
        }
      },
      list: Twinkle.protect.protectionLengths
      // Default (2 days) set after render
    });
    form.append({
      type: "checkbox",
      event: (event) => {
        event.target.form.createlevel.disabled = !event.target.checked;
        event.target.form.createexpiry.disabled = !event.target.checked || event.target.form.createlevel.value === "all";
        event.target.form.createlevel.style.color = event.target.checked ? "" : "transparent";
        event.target.form.createexpiry.style.color = event.target.checked ? "" : "transparent";
      },
      list: [{
        label: "修改创建保护",
        value: "createmodify",
        name: "createmodify",
        tooltip: "仅限不存在的页面。",
        checked: true
      }]
    });
    form.append({
      type: "select",
      name: "createlevel",
      label: "创建权限：",
      event: Twinkle.protect.formevents.createlevel,
      list: Twinkle.protect.protectionLevels
    });
    form.append({
      type: "select",
      name: "createexpiry",
      label: "终止时间：",
      event: (event) => {
        if (event.target.value === "custom") {
          Twinkle.protect.doCustomExpiry(event.target);
        }
      },
      list: Twinkle.protect.protectionLengths
      // Default (indefinite) set after render
    });
    form.append({
      type: "header",
      label: ""
      // horizontal rule
    });
    form.append({
      type: "input",
      name: "reason",
      label: "理由（保护日志）",
      size: 60
    });
    const query = {
      action: "query",
      prop: "revisions|info|imageinfo",
      rvprop: "size|user",
      inprop: "protection",
      format: "json"
    };
    if (mw.config.get("wgNamespaceNumber") === 14) {
      query.generator = "categorymembers";
      query.gcmtitle = mw.config.get("wgPageName");
      query.gcmlimit = Twinkle.getPref("batchMax");
    } else if (mw.config.get("wgCanonicalSpecialPageName") === "Prefixindex") {
      query.generator = "allpages";
      query.gapnamespace = mw.util.getParamValue("namespace") || document.querySelectorAll("select[name=namespace]")[0].value;
      query.gapprefix = mw.util.getParamValue("prefix") || document.querySelectorAll("input[name=prefix]")[0].value;
      query.gaplimit = Twinkle.getPref("batchMax");
    } else {
      query.generator = "links";
      query.titles = mw.config.get("wgPageName");
      query.gpllimit = Twinkle.getPref("batchMax");
    }
    const statusdiv = document.createElement("div");
    statusdiv.style.padding = "15px";
    Window.setContent(statusdiv);
    Morebits.status.init(statusdiv);
    Window.display();
    const statelem = new Morebits.status("抓取页面列表");
    const ysarchives_api = new Morebits.wiki.api("加载中……", query, (apiobj) => {
      const response = apiobj.getResponse();
      const pages = response.query && response.query.pages || [];
      const list = [];
      pages.sort(Twinkle.sortByNamespace);
      var _iterator63 = _createForOfIteratorHelper(pages), _step63;
      try {
        for (_iterator63.s(); !(_step63 = _iterator63.n()).done; ) {
          const page = _step63.value;
          const metadata = [];
          const missing = !!page.missing;
          let editProt;
          if (missing) {
            metadata.push("页面不存在");
            editProt = page.protection.filter((protection) => {
              return protection.type === "create" && protection.level === "sysop";
            }).pop();
          } else {
            if (page.redirect) {
              metadata.push("重定向");
            }
            if (page.ns === 6) {
              metadata.push("上传者：".concat(page.imageinfo[0].user), "最后编辑者：".concat(page.revisions[0].user));
            } else {
              metadata.push("".concat(mw.language.convertNumber(page.revisions[0].size), "字节"));
            }
            editProt = page.protection.filter((protection) => {
              return protection.type === "edit" && protection.level === "sysop";
            }).pop();
          }
          if (editProt) {
            metadata.push("".concat(missing ? "白纸" : "", "全保护").concat(editProt.expiry === "infinity" ? "（永久）" : "（".concat(new Morebits.date(editProt.expiry).calendar("utc"), " (UTC)过期）")));
          }
          const {
            title
          } = page;
          list.push({
            label: title + (metadata.length > 0 ? " (".concat(metadata.join("; "), ")") : ""),
            value: title,
            checked: true,
            style: editProt ? "color: #f00" : ""
          });
        }
      } catch (err) {
        _iterator63.e(err);
      } finally {
        _iterator63.f();
      }
      form.append({
        type: "header",
        label: "待保护页面"
      });
      form.append({
        type: "button",
        label: "全选",
        event: (event) => {
          $(Morebits.quickForm.getElements(event.target.form, "pages")).prop("checked", true);
        }
      });
      form.append({
        type: "button",
        label: "全不选",
        event: (event) => {
          $(Morebits.quickForm.getElements(event.target.form, "pages")).prop("checked", false);
        }
      });
      form.append({
        type: "checkbox",
        name: "pages",
        shiftClickSupport: true,
        list
      });
      form.append({
        type: "submit"
      });
      const result = form.render();
      Window.setContent(result);
      result.editexpiry.value = "2 days";
      result.moveexpiry.value = "2 days";
      result.createexpiry.value = "infinity";
      var _iterator64 = _createForOfIteratorHelper(Morebits.quickForm.getElements(result, "个页面")), _step64;
      try {
        for (_iterator64.s(); !(_step64 = _iterator64.n()).done; ) {
          const links = _step64.value;
          Twinkle.generateArrowLinks(links);
        }
      } catch (err) {
        _iterator64.e(err);
      } finally {
        _iterator64.f();
      }
    }, statelem);
    ysarchives_api.post();
  };
  Twinkle.batchprotect.currentProtectCounter = 0;
  Twinkle.batchprotect.currentprotector = 0;
  Twinkle.batchprotect.callback.evaluate = (event) => {
    Morebits.wiki.actionCompleted.notice = "批量保护完成";
    const form = event.target;
    const numProtected = $(Morebits.quickForm.getElements(form, "个页面")).filter((_index, element) => {
      return element.checked && element.nextElementSibling.style.color === "#f00";
    }).length;
    if (numProtected > 0 && !confirm("您即将对".concat(mw.language.convertNumber(numProtected), "个全保护页面进行操作。您确定吗？"))) {
      return;
    }
    const input = Morebits.quickForm.getInputData(form);
    if (!input.reason) {
      mw.notify("您必须给出一个理由。", {
        type: "warn",
        tag: "twinklebatchprotect"
      });
      return;
    }
    Morebits.simpleWindow.setButtonsEnabled(false);
    Morebits.status.init(form);
    if (input.pages.length === 0) {
      Morebits.status.error("Error", "待保护页面不存在，程序终止");
      return;
    }
    const batchOperation = new Morebits.batchOperation("应用保护设置");
    batchOperation.setOption("chunkSize", Twinkle.getPref("batchChunks"));
    batchOperation.setOption("preserveIndividualStatusLines", true);
    batchOperation.setPageList(input.pages);
    batchOperation.run((pageName) => {
      const query = {
        action: "query",
        titles: pageName,
        format: "json"
      };
      const ysarchives_api = new Morebits.wiki.api("正在检查页面“".concat(pageName, "”是否存在"), query, Twinkle.batchprotect.callbacks.main, null, batchOperation.workerFailure);
      ysarchives_api.params = {
        page: pageName,
        batchOperation,
        ...input
      };
      ysarchives_api.post();
    });
  };
  Twinkle.batchprotect.callbacks = {
    main: (apiobj) => {
      const response = apiobj.getResponse();
      if (response.query.normalized) {
        apiobj.params.page = response.query.normalized[0].to;
      }
      const exists = !response.query.pages[0].missing;
      const page = new Morebits.wiki.page(apiobj.params.page, "正在保护".concat(apiobj.params.page));
      let takenAction = false;
      if (exists && apiobj.params.editmodify) {
        page.setEditProtection(apiobj.params.editlevel, apiobj.params.editexpiry);
        takenAction = true;
      }
      if (exists && apiobj.params.movemodify) {
        page.setMoveProtection(apiobj.params.movelevel, apiobj.params.moveexpiry);
        takenAction = true;
      }
      if (!exists && apiobj.params.createmodify) {
        page.setCreateProtection(apiobj.params.createlevel, apiobj.params.createexpiry);
        takenAction = true;
      }
      if (!takenAction) {
        Morebits.status.warn("正在保护“".concat(apiobj.params.page), "”页面".concat(exists ? "存在" : "不存在", "；无事可做，跳过"));
        apiobj.params.batchOperation.workerFailure(apiobj);
        return;
      }
      page.setEditSummary(apiobj.params.reason);
      page.setChangeTags(Twinkle.changeTags);
      page.protect(apiobj.params.batchOperation.workerSuccess, apiobj.params.batchOperation.workerFailure);
    }
  };
  Twinkle.addInitCallback(Twinkle.batchprotect, "batchprotect");
})(jQuery);
//! src/Twinkle/modules/twinkleclose.js
/*! Twinkle.js - twinkleclose.js */
(function twinkleclose($) {
  const $body = $("body");
  Twinkle.close = () => {
    if (Twinkle.getPref("XfdClose") === "hide" || !/^有兽档案馆([_ ]talk)?:存废讨论\/记录(?:\/\d+){3}$/.test(mw.config.get("wgPageName"))) {
      return;
    }
    mw.hook("wikipage.content").add((item) => {
      if (item.attr("id") === "mw-content-text") {
        Twinkle.close.addLinks();
      }
    });
  };
  Twinkle.close.addLinks = () => {
    const spanTag = (color, content) => {
      const span = document.createElement("span");
      span.style.color = color;
      span.appendChild(document.createTextNode(content));
      return span;
    };
    $body.find("h1:has(.mw-headline),h2:has(.mw-headline),h3:has(.mw-headline),h4:has(.mw-headline),h5:has(.mw-headline),h6:has(.mw-headline)", "#bodyContent").each((index, element) => {
      element.dataset.section = index + 1;
    });
    const selector = ":has(.mw-headline a:only-of-type):not(:has(+ div.NavFrame))";
    const titles = $body.find("#bodyContent").find("h2".concat(selector, ":not(:has(+ p + h3)), h3").concat(selector));
    const delNode = document.createElement("strong");
    const delLink = document.createElement("a");
    delLink.appendChild(spanTag("Black", "["));
    delLink.appendChild(spanTag("Red", window.wgULS("关闭讨论", "關閉討論")));
    delLink.appendChild(spanTag("Black", "]"));
    delNode.appendChild(delLink);
    var _iterator65 = _createForOfIteratorHelper(titles), _step65;
    try {
      for (_iterator65.s(); !(_step65 = _iterator65.n()).done; ) {
        const current = _step65.value;
        const headlinehref = $(current).find(".mw-headline a").attr("href");
        if (headlinehref !== void 0) {
          let title = null;
          if (headlinehref.includes("redlink=1")) {
            title = headlinehref.slice(19, -22);
          } else {
            const m = headlinehref.match(/\/wiki\/([^?]+)/, "$1");
            if (m !== null) {
              [, title] = m;
            }
          }
          if (title !== null) {
            title = decodeURIComponent(title);
            title = title.replace(/_/g, " ");
            const pagenotexist = $(current).find(".mw-headline a").hasClass("new");
            const {
              section
            } = current.dataset;
            const [node] = current.querySelectorAll(".mw-headline");
            node.appendChild(document.createTextNode(" "));
            const tmpNode = delNode.cloneNode(true);
            tmpNode.firstChild.href = "#".concat(section);
            $(tmpNode.firstChild).on("click", () => {
              Twinkle.close.callback(title, section, pagenotexist);
              return false;
            });
            node.appendChild(tmpNode);
          }
        }
      }
    } catch (err) {
      _iterator65.e(err);
    } finally {
      _iterator65.f();
    }
  };
  Twinkle.close.codes = [{
    key: window.wgULS("请求无效", "請求無效"),
    value: {
      ir: {
        label: window.wgULS("请求无效", "請求無效"),
        action: "keep"
      },
      rep: {
        label: window.wgULS("重复提出，无效", "重複提出，無效"),
        action: "keep"
      },
      ne: {
        label: window.wgULS("目标页面或文件不存在，无效", "目標頁面或檔案不存在，無效"),
        action: "keep"
      },
      nq: {
        label: window.wgULS("提删者未获取提删资格，无效", "提刪者未取得提刪資格，無效"),
        action: "keep"
      }
    }
  }, {
    key: "保留",
    value: {
      k: {
        label: "保留",
        action: "keep",
        adminonly: true
      },
      sk: {
        label: "快速保留",
        action: "keep"
      },
      tk: {
        label: window.wgULS("暂时保留，改挂维护模板（关注度等）", "暫時保留，改掛維護模板（關注度等）"),
        value: window.wgULS("暂时保留", "暫時保留"),
        action: "keep"
      },
      rr: {
        label: window.wgULS("请求理由消失", "請求理由消失"),
        action: "keep",
        selected: Twinkle.getPref("XfdClose") === "nonadminonly"
      },
      dan: {
        label: window.wgULS("删后重建", "刪後重建"),
        action: "keep",
        adminonly: true
      }
    }
  }, {
    key: window.wgULS("删除", "刪除"),
    value: {
      d: {
        label: window.wgULS("删除", "刪除"),
        action: "del",
        adminonly: true,
        selected: Twinkle.getPref("XfdClose") === "all"
      },
      ic: {
        label: window.wgULS("图像因侵权被删", "圖像因侵權被刪"),
        action: "del",
        adminonly: true
      }
    }
  }, {
    key: window.wgULS("快速删除", "快速刪除"),
    value: {
      sd: {
        label: window.wgULS("快速删除", "快速刪除"),
        action: "del"
      },
      lssd: {
        label: window.wgULS("无来源或著作权信息，快速删除", "無來源或版權資訊，快速刪除"),
        action: "del"
      },
      svg: {
        label: window.wgULS("已改用SVG图形，快速删除", "已改用SVG圖形，快速刪除"),
        action: "del"
      },
      drep: {
        label: window.wgULS("多次被删除，条目锁定", "多次被刪除，條目鎖定"),
        action: "del",
        adminonly: true
      }
    }
  }, {
    key: window.wgULS("其他处理方法", "其他處理方法"),
    value: {
      c: {
        label: window.wgULS("转交侵权", "轉交侵權"),
        action: "noop"
      },
      r: {
        label: "重定向",
        action: "keep",
        adminonly: true
      },
      cr: {
        label: window.wgULS("分类重定向", "分類重定向"),
        action: "keep",
        adminonly: true
      },
      m: {
        label: window.wgULS("移动", "移動"),
        action: "keep",
        adminonly: true
      },
      merge: {
        label: window.wgULS("并入", "併入"),
        action: "keep",
        adminonly: true
      },
      mergeapproved: {
        label: window.wgULS("允许并入", "允許併入"),
        action: "keep",
        adminonly: true
      },
      nc: {
        label: window.wgULS("无共识暂时保留", "無共識暫時保留"),
        value: window.wgULS("无共识", "無共識"),
        action: "keep"
      }
    }
  }];
  Twinkle.close.callback = (title, section, noop) => {
    const Window = new Morebits.simpleWindow(410, 200);
    Window.setTitle("关闭存废讨论 · ".concat(title));
    Window.setScriptName("Twinkle");
    Window.addFooterLink("存废讨论设置", "H:TW/PREF#关闭存废讨论");
    Window.addFooterLink("Twinkle帮助", "H:TW/DOC#关闭存废讨论");
    const form = new Morebits.quickForm(Twinkle.close.callback.evaluate);
    form.append({
      type: "select",
      label: "处理结果：",
      name: "sub_group",
      event: Twinkle.close.callback.change_code
    });
    form.append({
      type: "input",
      name: "sdreason",
      label: "速删理由：",
      tooltip: "用于删除日志，使用{{delete}}的参数格式，例如 A1 或 A1|G1",
      hidden: true
    });
    form.append({
      type: "input",
      name: "remark",
      label: "补充说明："
    });
    form.append({
      type: "checkbox",
      list: [{
        label: "只关闭讨论，不进行其他操作",
        value: "noop",
        name: "noop",
        event: Twinkle.close.callback.change_operation,
        checked: noop
      }]
    });
    if (new mw.Title(title).namespace % 2 === 0 && new mw.Title(title).namespace !== 2) {
      form.append({
        type: "checkbox",
        list: [{
          label: "删除关联的讨论页",
          value: "talkpage",
          name: "talkpage",
          tooltip: "删除时附带删除此页面的讨论页。",
          checked: true,
          event: (e) => {
            e.stopPropagation();
          }
        }]
      });
    }
    form.append({
      type: "checkbox",
      list: [{
        label: "删除重定向页",
        value: "redirects",
        name: "redirects",
        tooltip: "删除到此页的重定向。",
        checked: true,
        event: (e) => {
          e.stopPropagation();
        }
      }]
    });
    form.append({
      type: "submit"
    });
    const result = form.render();
    Window.setContent(result);
    Window.display();
    const [sub_group] = result.querySelectorAll("select");
    const resultData = {
      title,
      section: Number.parseInt(section, 10),
      noop
    };
    $(result).data("resultData", resultData);
    const createEntries = (contents, container) => {
      for (var _i16 = 0, _Object$entries9 = Object.entries(contents); _i16 < _Object$entries9.length; _i16++) {
        const [itemKey, itemProperties] = _Object$entries9[_i16];
        const key = typeof itemKey === "string" ? itemKey : itemProperties.value;
        const elem = new Morebits.quickForm.element({
          type: "option",
          label: "".concat(key, "：").concat(itemProperties.label),
          value: key,
          selected: itemProperties.selected,
          disabled: Twinkle.getPref("XfdClose") !== "all" && itemProperties.adminonly || itemProperties.disabled
        });
        const elemRendered = container.appendChild(elem.render());
        $(elemRendered).data("messageData", itemProperties);
      }
    };
    var _iterator66 = _createForOfIteratorHelper(Twinkle.close.codes), _step66;
    try {
      for (_iterator66.s(); !(_step66 = _iterator66.n()).done; ) {
        const group = _step66.value;
        let optgroup = new Morebits.quickForm.element({
          type: "optgroup",
          label: group.key
        });
        optgroup = optgroup.render();
        sub_group.appendChild(optgroup);
        createEntries(group.value, optgroup);
      }
    } catch (err) {
      _iterator66.e(err);
    } finally {
      _iterator66.f();
    }
    const event = document.createEvent("Event");
    event.initEvent("change", true, true);
    result.sub_group.dispatchEvent(event);
  };
  Twinkle.close.callback.change_operation = (e) => {
    const noop = e.target.checked;
    const code = e.target.form.sub_group.value;
    const messageData = $(e.target.form.sub_group).find('option[value="'.concat(code, '"]')).data("messageData");
    const {
      talkpage
    } = e.target.form;
    const {
      redirects
    } = e.target.form;
    if (noop || messageData.action === "keep") {
      if (talkpage) {
        talkpage.checked = false;
        talkpage.disabled = true;
      }
      redirects.checked = false;
      redirects.disabled = true;
    } else {
      if (talkpage) {
        talkpage.checked = true;
        talkpage.disabled = false;
      }
      redirects.checked = true;
      redirects.disabled = false;
    }
  };
  Twinkle.close.callback.change_code = (e) => {
    const resultData = $(e.target.form).data("resultData");
    const messageData = $(e.target).find('option[value="'.concat(e.target.value, '"]')).data("messageData");
    const {
      noop
    } = e.target.form;
    const {
      talkpage
    } = e.target.form;
    const {
      redirects
    } = e.target.form;
    if (resultData.noop || messageData.action === "noop") {
      noop.checked = true;
      noop.disabled = true;
      if (talkpage) {
        talkpage.checked = false;
        talkpage.disabled = true;
      }
      redirects.checked = false;
      redirects.disabled = true;
    } else {
      noop.checked = false;
      noop.disabled = false;
      if (messageData.action === "keep") {
        if (talkpage) {
          talkpage.checked = false;
          talkpage.disabled = true;
        }
        redirects.checked = false;
        redirects.disabled = true;
      } else {
        if (talkpage) {
          talkpage.checked = true;
          talkpage.disabled = false;
        }
        redirects.checked = true;
        redirects.disabled = false;
      }
      if (e.target.value === "sd") {
        e.target.form.sdreason.parentElement.removeAttribute("hidden");
      } else {
        e.target.form.sdreason.parentElement.setAttribute("hidden", "");
      }
    }
  };
  Twinkle.close.callback.evaluate = (e) => {
    const code = e.target.sub_group.value;
    const resultData = $(e.target).data("resultData");
    const messageData = $(e.target.sub_group).find('option[value="'.concat(code, '"]')).data("messageData");
    const noop = e.target.noop.checked;
    const talkpage = e.target.talkpage && e.target.talkpage.checked;
    const redirects = e.target.redirects.checked;
    const params = {
      title: resultData.title,
      code,
      remark: e.target.remark.value,
      sdreason: e.target.sdreason.value,
      section: resultData.section,
      parentSection: resultData.parentSection,
      messageData,
      talkpage,
      redirects
    };
    Morebits.simpleWindow.setButtonsEnabled(false);
    Morebits.status.init(e.target);
    Morebits.wiki.actionCompleted.notice = "操作完成";
    if (noop || messageData.action === "noop") {
      Twinkle.close.callbacks.talkend(params);
    } else {
      switch (messageData.action) {
        case "del":
          Twinkle.close.callbacks.del(params);
          break;
        case "keep": {
          const ysarchives_page = new Morebits.wiki.page(params.title, "移除存废讨论模板");
          ysarchives_page.setCallbackParameters(params);
          ysarchives_page.load(Twinkle.close.callbacks.keep);
          break;
        }
        default:
          mw.notify("关闭存废讨论：未定义 ".concat(code), {
            type: "warn",
            tag: "twinkleclose"
          });
      }
    }
  };
  Twinkle.close.callbacks = {
    del: (params) => {
      let query;
      let ysarchives_api;
      Morebits.wiki.addCheckpoint();
      const page = new Morebits.wiki.page(params.title, "删除页面");
      if (params.code === "sd") {
        Twinkle.speedy.callbacks.parseWikitext(params.title, "{{delete|".concat(params.sdreason, "}}"), (reason) => {
          reason = prompt("输入删除理由，或点击确定以接受自动生成的：", reason);
          if (reason === null) {
            page.getStatusElement().warn("没有执行删除");
            Twinkle.close.callbacks.talkend(params);
          } else {
            page.setEditSummary(reason);
            page.setChangeTags(Twinkle.changeTags);
            page.deletePage(() => {
              page.getStatusElement().info("完成");
              Twinkle.close.callbacks.talkend(params);
            });
          }
        });
      } else {
        page.setEditSummary("存废讨论通过：[[".concat(mw.config.get("wgPageName"), "#").concat(params.title, "]]"));
        page.setChangeTags(Twinkle.changeTags);
        page.deletePage(() => {
          page.getStatusElement().info("完成");
          Twinkle.close.callbacks.talkend(params);
        });
      }
      if (params.redirects) {
        query = {
          action: "query",
          titles: params.title,
          prop: "redirects",
          rdlimit: "max"
          // 500 is max for normal users, 5000 for bots and sysops
        };
        ysarchives_api = new Morebits.wiki.api("正在获取重定向", query, Twinkle.close.callbacks.deleteRedirectsMain);
        ysarchives_api.params = params;
        ysarchives_api.post();
      }
      if (params.talkPage) {
        const pageTitle = mw.Title.newFromText(params.title);
        if (pageTitle && pageTitle.namespace % 2 === 0 && pageTitle.namespace !== 2) {
          pageTitle.namespace++;
          query = {
            action: "query",
            titles: pageTitle.toText()
          };
          ysarchives_api = new Morebits.wiki.api("正在检查讨论页面是否存在", query, Twinkle.close.callbacks.deleteTalk);
          ysarchives_api.params = params;
          ysarchives_api.apiobj.params.talkPage = pageTitle.toText();
          ysarchives_api.post();
        }
      }
      Morebits.wiki.removeCheckpoint();
    },
    deleteRedirectsMain: (apiobj) => {
      const xml = apiobj.responseXML;
      const pages = $(xml).find("rd").map((_index, element) => {
        return $(element).attr("title");
      }).get();
      if (pages.length === 0) {
        return;
      }
      const redirectDeleter = new Morebits.batchOperation(window.wgULS("正在删除到 ", "正在刪除到 ") + apiobj.params.title + window.wgULS(" 的重定向", " 的重新導向"));
      redirectDeleter.setOption("chunkSize", Twinkle.getPref("batchdeleteChunks"));
      redirectDeleter.setPageList(pages);
      redirectDeleter.run((pageName) => {
        const ysarchives_page = new Morebits.wiki.page(pageName, window.wgULS("正在删除 ", "正在刪除 ") + pageName);
        ysarchives_page.setEditSummary("[[LIB:CSD#G5|G5]]：".concat(window.wgULS("指向已删页面“", "指向已刪頁面「")).concat(apiobj.params.title).concat(window.wgULS("”的重定向", "」的重新導向")));
        ysarchives_page.setChangeTags(Twinkle.changeTags);
        ysarchives_page.deletePage(redirectDeleter.workerSuccess, redirectDeleter.workerFailure);
      });
    },
    deleteTalk: (apiobj) => {
      const xml = apiobj.responseXML;
      const exists = $(xml).find("page:not([missing])").length > 0;
      if (!exists) {
        return;
      }
      const page = new Morebits.wiki.page(apiobj.params.talkPage, window.wgULS("正在删除页面 ", "正在刪除頁面 ") + apiobj.params.title + window.wgULS(" 的讨论页", " 的討論頁"));
      page.setEditSummary("[[LIB:CSD#G5|G5]]：".concat(window.wgULS("已删页面“", "已刪頁面「")).concat(apiobj.params.title).concat(window.wgULS("”的[[Help:讨论页|讨论页]]", "」的[[Help:討論頁|討論頁]]")));
      page.setChangeTags(Twinkle.changeTags);
      page.deletePage();
    },
    keep: (pageobj) => {
      const statelem = pageobj.getStatusElement();
      if (!pageobj.exists()) {
        statelem.error("页面不存在，可能已被删除");
        return;
      }
      const text = pageobj.getPageText();
      const params = pageobj.getCallbackParameters();
      const pagetitle = mw.Title.newFromText(params.title);
      if (pagetitle.getNamespaceId() % 2 === 0) {
        const talkpagetitle = new mw.Title(pagetitle.getMainText(), pagetitle.getNamespaceId() + 1);
        const talkpage = new Morebits.wiki.page(talkpagetitle.toString(), window.wgULS("标记讨论页", "標記討論頁"));
        const reason = params.messageData.value || params.messageData.label;
        const vfdkept = "{{Old vfd multi|".concat(mw.config.get("wgPageName").split("/").slice(2).join("/"), "|").concat(reason, "}}\n");
        talkpage.setPrependText(vfdkept);
        talkpage.setEditSummary("[[".concat(mw.config.get("wgPageName"), "#").concat(params.title, "]]：").concat(reason));
        talkpage.setChangeTags(Twinkle.changeTags);
        talkpage.setCreateOption("recreate");
        talkpage.prepend();
      }
      let newtext = text.replace(/<noinclude>\s*\{\{([rsaiftcmv]fd)(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*<\/noinclude>\s*/gi, "");
      newtext = newtext.replace(/\{\{([rsaiftcmv]fd)(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi, "");
      if (params.code !== "tk") {
        newtext = newtext.replace(/{{(notability|fame|mair|知名度|重要性|显著性|顯著性|知名度不足|人物重要性|重要性不足|notable|关注度|关注度不足|關注度|關注度不足|重要|重要度)(\|(?:{{[^{}]*}}|[^{}])*)?}}\n*/gi, "");
        newtext = newtext.replace(/{{(substub|小小作品|cod|小小條目|小小条目)(\|(?:{{[^{}]*}}|[^{}])*)?}}\n*/gi, "");
      }
      if (params.code === "mergeapproved") {
        const tag = "{{".concat("subst:").concat("Merge approved/auto|discuss=".concat(mw.config.get("wgPageName"), "#").concat(params.title, "}}\n"));
        const ysarchives_page = new Morebits.wikitext.page(newtext);
        newtext = ysarchives_page.insertAfterTemplates(tag, Twinkle.hatnoteRegex).getText();
      }
      if (newtext === text) {
        statelem.warn("未找到存废讨论模板，可能已被移除");
        Twinkle.close.callbacks.talkend(params);
        return;
      }
      const editsummary = "存废讨论关闭：[[".concat(mw.config.get("wgPageName"), "#").concat(params.title, "]]");
      pageobj.setPageText(newtext);
      pageobj.setEditSummary(editsummary);
      pageobj.setChangeTags(Twinkle.changeTags);
      pageobj.setCreateOption("nocreate");
      pageobj.save(Twinkle.close.callbacks.keepComplete);
    },
    keepComplete: (pageobj) => {
      const params = pageobj.getCallbackParameters();
      Twinkle.close.callbacks.talkend(params);
    },
    talkend: (params) => {
      const ysarchives_page = new Morebits.wiki.page(mw.config.get("wgPageName"), "关闭讨论");
      ysarchives_page.setCallbackParameters(params);
      ysarchives_page.setPageSection(params.section);
      ysarchives_page.load(Twinkle.close.callbacks.saveTalk);
    },
    saveTalk: (pageobj) => {
      const statelem = pageobj.getStatusElement();
      let text = pageobj.getPageText();
      const params = pageobj.getCallbackParameters();
      if (text.includes("{{delh")) {
        statelem.error("讨论已被关闭");
        return;
      }
      const sbegin = text.includes("<section begin=backlog />");
      const send = text.includes("<section end=backlog />");
      text = text.replace("\n<section begin=backlog />", "");
      text = text.replace("\n<section end=backlog />", "");
      const bar = text.split("\n----\n");
      const split = bar[0].split("\n");
      text = "".concat(split[0], "\n{{delh|").concat(params.code, "}}\n");
      text += split.slice(1).join("\n");
      const reason = params.messageData.value || params.messageData.label;
      text += "\n<hr>\n: ".concat(reason);
      if (params.remark) {
        text += "：".concat(Morebits.string.appendPunctuation(params.remark));
      } else {
        text += "。";
      }
      if (!Morebits.userIsSysop) {
        text += "{{".concat("subst:").concat("NAC}}");
      }
      text += "--~~".concat("~~", "\n{{delf}}");
      if (bar[1]) {
        text += "\n----\n".concat(bar.slice(1).join("\n----\n"));
      }
      if (send) {
        text += "\n<section end=backlog />";
      }
      if (sbegin) {
        text += "\n<section begin=backlog />";
      }
      pageobj.setPageText(text);
      pageobj.setEditSummary("/* ".concat(params.title, " */ ").concat(reason));
      pageobj.setChangeTags(Twinkle.changeTags);
      pageobj.setCreateOption("nocreate");
      pageobj.save(Twinkle.close.callbacks.disableLink);
    },
    disableLink: (pageobj) => {
      const params = pageobj.getCallbackParameters();
      $("strong a[href=#".concat(params.section, "] span")).css("color", "#808080");
    }
  };
  Twinkle.addInitCallback(Twinkle.close, "close");
})(jQuery);
//! src/Twinkle/modules/twinkleconfig.js
/*! Twinkle.js - twinkleconfig.js */
(function twinkleconfig($) {
  const $body = $("body");
  Twinkle.config = {};
  Twinkle.config.watchlistEnums = {
    yes: window.wgULS("永久加入到监视列表", "永久加入到監視清單"),
    no: window.wgULS("不加入到监视列表", "不加入到監視清單"),
    default: window.wgULS("遵守站点设置", "遵守站點設定"),
    "1 week": window.wgULS("加入到监视列表1周", "加入到監視清單1週"),
    "1 month": window.wgULS("加入到监视列表1个月", "加入到監視清單1個月"),
    "3 months": window.wgULS("加入到监视列表3个月", "加入到監視清單3個月"),
    "6 months": window.wgULS("加入到监视列表6个月", "加入到監視清單6個月")
  };
  Twinkle.config.commonSets = {
    csdCriteria: {
      db: window.wgULS("自定义理由", "自訂理由"),
      g1: "G1",
      g2: "G2",
      g3: "G3",
      g4: "G4",
      g5: "G5",
      g6: "G6",
      g7: "G7",
      g8: "G8",
      g9: "G9",
      a1: "A1",
      a2: "A2",
      a3: "A3",
      o1: "O1",
      o2: "O2",
      o3: "O3",
      f1: "F1",
      f2: "F2",
      f3: "F3",
      f4: "F4",
      f5: "F5",
      r1: "R1",
      r2: "R2"
    },
    csdCriteriaDisplayOrder: ["db", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "a1", "a2", "a3", "o1", "o2", "o3", "f1", "f2", "f3", "f4", "f5", "r1", "r2"],
    csdCriteriaNotification: {
      db: window.wgULS("自定义理由", "自訂理由"),
      g1: "G1",
      g2: "G2",
      g3: "G3",
      g4: "G4",
      g5: "G5",
      g6: "G6",
      g7: "G7",
      g8: "G8",
      g9: "G9",
      a1: "A1",
      a2: "A2",
      a3: "A3",
      o1: "O1",
      o2: "O2",
      o3: "O3",
      f1: "F1",
      f2: "F2",
      f3: "F3",
      f4: "F4",
      f5: "F5",
      r1: "R1",
      r2: "R2"
    },
    csdCriteriaNotificationDisplayOrder: ["db", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "a1", "a2", "a3", "o1", "o2", "o3", "f1", "f2", "f3", "f4", "f5", "r1", "r2"],
    csdAndDICriteria: {
      db: window.wgULS("自定义理由", "自訂理由"),
      g1: "G1",
      g2: "G2",
      g3: "G3",
      g4: "G4",
      g5: "G5",
      g6: "G6",
      g7: "G7",
      g8: "G8",
      g9: "G9",
      a1: "A1",
      a2: "A2",
      a3: "A3",
      o1: "O1",
      o2: "O2",
      o3: "O3",
      f1: "F1",
      f2: "F2",
      f3: "F3",
      f4: "F4",
      f5: "F5",
      r1: "R1",
      r2: "R2"
    },
    csdAndDICriteriaDisplayOrder: ["db", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "a1", "a2", "a3", "o1", "o2", "o3", "f1", "f2", "f3", "f4", "f5", "r1", "r2"],
    xfdCriteria: {
      delete: window.wgULS("删除", "刪除"),
      merge: window.wgULS("合并", "合併"),
      fwdcsd: window.wgULS("转交自快速删除候选", "轉交自快速刪除候選"),
      fame: window.wgULS("批量关注度提删", "批次關注度提刪"),
      substub: window.wgULS("批量小小作品提删", "批次小小作品提刪"),
      batch: window.wgULS("批量其他提删", "批次其他提刪")
    },
    xfdCriteriaDisplayOrder: ["delete", "merge", "fwdcsd", "fame", "substub", "batch"],
    namespacesNoSpecial: {
      0: window.wgULS("（条目）", "（條目）"),
      1: "Talk",
      2: "User",
      3: "User talk",
      4: "LIB",
      5: "LIB talk",
      6: "File",
      7: "File talk",
      8: "MediaWiki",
      9: "MediaWiki talk",
      10: "Template",
      11: "Template talk",
      12: "Help",
      13: "Help talk",
      14: "Category",
      15: "Category talk",
      274: "Widget",
      275: "Widget talk",
      300: "Fanmade",
      301: "Fanmade talk",
      302: "Draft",
      303: "Draft talk",
      304: "SMWData",
      305: "SMWData talk",
      829: "Module talk"
    }
  };
  Twinkle.config.sections = [{
    title: window.wgULS("常规", "常規"),
    module: "general",
    preferences: [
      // TwinkleConfig.userTalkPageMode may take arguments:
      // 'window': open a new window, remember the opened window
      // 'tab': opens in a new tab, if possible.
      // 'blank': force open in a new window, even if such a window exists
      {
        name: "userTalkPageMode",
        label: window.wgULS("当要打开用户讨论页时", "當要打開使用者討論頁時"),
        type: "enum",
        enumValues: {
          window: window.wgULS("在窗口中，替换成其它用户对话页", "在當前分頁，替換成其它用戶討論頁"),
          tab: window.wgULS("在新标签页中", "在新分頁中"),
          blank: window.wgULS("在全新的窗口中", "在新視窗中")
        }
      },
      // TwinkleConfig.dialogLargeFont (boolean)
      {
        name: "dialogLargeFont",
        label: window.wgULS("在Twinkle对话框中使用大号字体", "在Twinkle對話方塊中使用大號字型"),
        type: "boolean"
      },
      // Twinkle.config.disabledModules (array)
      {
        name: "disabledModules",
        label: window.wgULS("关闭指定的Twinkle模块", "關閉指定的Twinkle模組"),
        helptip: window.wgULS("您在此选择的功能将无法使用，取消选择以重新启用功能。", "您在此選擇的功能將無法使用，取消選擇以重新啟用功能。"),
        type: "set",
        setValues: {
          arv: window.wgULS("告状", "告狀"),
          warn: "警告",
          block: window.wgULS("封禁", "封鎖"),
          talkback: "通告",
          speedy: window.wgULS("速删", "速刪"),
          copyvio: window.wgULS("侵权", "侵權"),
          xfd: window.wgULS("提删", "提刪"),
          image: window.wgULS("图权", "圖權"),
          protect: window.wgULS("保护", "保護"),
          tag: window.wgULS("标记", "標記"),
          stub: "小作品",
          diff: window.wgULS("差异", "差異"),
          unlink: window.wgULS("链入", "連入"),
          fluff: "回退"
        }
      },
      // Twinkle.config.disabledSysopModules (array)
      {
        name: "disabledSysopModules",
        label: window.wgULS("关闭指定的Twinkle管理员模块", "關閉指定的Twinkle管理員模組"),
        helptip: window.wgULS("您在此选择的功能将无法使用，取消选择以重新启用功能。", "您在此選擇的功能將無法使用，取消選擇以重新啟用功能。"),
        adminOnly: true,
        type: "set",
        setValues: {
          batchdelete: window.wgULS("批删", "批刪"),
          batchundelete: window.wgULS("批复", "批復")
        }
      }
    ]
  }, {
    title: window.wgULS("告状", "告狀"),
    module: "arv",
    preferences: [{
      name: "spiWatchReport",
      label: window.wgULS("发起傀儡调查时加入到监视列表", "發起傀儡調查時加入到監視清單"),
      type: "enum",
      enumValues: Twinkle.config.watchlistEnums
    }]
  }, {
    title: window.wgULS("封禁用户", "封鎖使用者"),
    module: "block",
    adminOnly: true,
    preferences: [
      // TwinkleConfig.defaultToBlock64 (boolean)
      // Whether to default to just blocking the /64 on or off
      {
        name: "defaultToBlock64",
        label: window.wgULS("对于IPv6地址，默认选择封禁/64段", "對於IPv6地址，預設選擇封鎖/64段"),
        type: "boolean"
      },
      // TwinkleConfig.defaultToPartialBlocks (boolean)
      // Whether to default partial blocks on or off
      {
        name: "defaultToPartialBlocks",
        label: window.wgULS("打开封禁菜单时默认选择部分封禁", "打開封鎖選單時預設選擇部分封鎖"),
        type: "boolean"
      },
      // TwinkleConfig.watchBlockNotices (string)
      // Watchlist setting for the page which has been dispatched an warning or notice
      {
        name: "watchBlockNotices",
        label: window.wgULS("发送封禁模板时加入用户讨论页到监视列表", "發送封鎖模板時加入使用者討論頁到監視清單"),
        type: "enum",
        enumValues: Twinkle.config.watchlistEnums
      },
      {
        name: "customBlockReasonList",
        label: window.wgULS("自定义封禁理由", "自訂封鎖理由"),
        helptip: window.wgULS("您可以加入常用的封禁理由。自定义的封禁理由会出现在一般的封禁理由下方。", "您可以加入常用的封鎖理由。自訂的封鎖理由會出現在一般的封鎖理由下方。"),
        type: "customList",
        customListValueTitle: window.wgULS("使用封禁模板（默认为 uw-block1）", "使用封鎖模板（預設為 uw-block1）"),
        customListLabelTitle: window.wgULS("“由于…您已被封禁”及封禁日志理由", "「由於…您已被封鎖」及封鎖日誌理由")
      }
    ]
  }, {
    title: window.wgULS("图片删除", "圖片刪除"),
    module: "image",
    preferences: [
      // TwinkleConfig.notifyUserOnDeli (boolean)
      // If the user should be notified after placing a file deletion tag
      {
        name: "notifyUserOnDeli",
        label: window.wgULS("默认勾选“通知创建者”", "預設勾選「通知建立者」"),
        type: "boolean"
      },
      // TwinkleConfig.deliWatchPage (string)
      // The watchlist setting of the page tagged for deletion.
      {
        name: "deliWatchPage",
        label: window.wgULS("标记图片时加入到监视列表", "標記圖片時加入到監視清單"),
        type: "enum",
        enumValues: Twinkle.config.watchlistEnums
      },
      // TwinkleConfig.deliWatchUser (string)
      // The watchlist setting of the user talk page if a notification is placed.
      {
        name: "deliWatchUser",
        label: window.wgULS("标记图片时加入创建者讨论页到监视列表", "標記圖片時加入建立者討論頁到監視清單"),
        type: "enum",
        enumValues: Twinkle.config.watchlistEnums
      }
    ]
  }, {
    title: window.wgULS("保护", "保護"),
    module: "protect",
    preferences: [{
      name: "watchRequestedPages",
      label: window.wgULS("请求保护页面时加入到监视列表", "請求保護頁面時加入到監視清單"),
      type: "enum",
      enumValues: Twinkle.config.watchlistEnums
    }, {
      name: "watchPPTaggedPages",
      label: window.wgULS("标记保护模板时加入到监视列表", "標記保護模板時加入到監視清單"),
      type: "enum",
      enumValues: Twinkle.config.watchlistEnums
    }, {
      name: "watchProtectedPages",
      label: window.wgULS("保护时加入到监视列表", "保護時加入到監視清單"),
      helptip: window.wgULS("若在保护后也标记页面，则使用标记页面的参数设置。", "若在保護後也標記頁面，則使用標記頁面的偏好設定。"),
      adminOnly: true,
      type: "enum",
      enumValues: Twinkle.config.watchlistEnums
    }]
  }, {
    title: "回退",
    // twinklefluff module
    module: "fluff",
    preferences: [
      // TwinkleConfig.autoMenuAfterRollback (bool)
      // Option to automatically open the warning menu if the user talk page is opened post-reversion
      {
        name: "autoMenuAfterRollback",
        label: window.wgULS("在Twinkle回退后自动打开用户讨论页上的Twinkle警告菜单", "在Twinkle回退後自動打開使用者討論頁上的Twinkle警告選單"),
        helptip: window.wgULS("仅在选取下方对应框时才执行", "僅在選取下方對應框時才執行"),
        type: "boolean"
      },
      // TwinkleConfig.openTalkPage (array)
      // What types of actions that should result in opening of talk page
      {
        name: "openTalkPage",
        label: window.wgULS("在这些类型的回退后打开用户讨论页", "在這些類別的回退後打開使用者討論頁"),
        type: "set",
        setValues: {
          norm: window.wgULS("常规回退", "常規回退"),
          vand: window.wgULS("破坏回退", "破壞回退")
        }
      },
      // TwinkleConfig.openTalkPageOnAutoRevert (bool)
      // Defines if talk page should be opened when calling revert from contribs or recent changes pages. If set to true, openTalkPage defines then if talk page will be opened.
      {
        name: "openTalkPageOnAutoRevert",
        label: window.wgULS("在从用户贡献及最近更改中发起回退时打开用户讨论页", "在從使用者貢獻及近期變更中發起回退時打開使用者討論頁"),
        helptip: window.wgULS("当它打开时，依赖上一个设置。", "當它打開時，依賴上一個設定。"),
        type: "boolean"
      },
      // TwinkleConfig.rollbackInPlace (bool)
      //
      {
        name: "rollbackInPlace",
        label: window.wgULS("在从用户贡献及最近更改中发起回退时不刷新页面", "在從使用者貢獻及近期變更中發起回退時不重新整理頁面"),
        helptip: window.wgULS("当它打开时，Twinkle将不会在从用户贡献及最近更改中发起回退时刷新页面，允许您一次性回退多个编辑。", "當它打開時，Twinkle將不會在從使用者貢獻及近期變更中發起回退時重新整理頁面，允許您一次性回退多個編輯。"),
        type: "boolean"
      },
      // TwinkleConfig.markRevertedPagesAsMinor (array)
      // What types of actions that should result in marking edit as minor
      {
        name: "markRevertedPagesAsMinor",
        label: window.wgULS("将这些类型的回退标记为小修改", "將這些類別的回退標記為小修改"),
        type: "set",
        setValues: {
          norm: window.wgULS("常规回退", "常規回退"),
          vand: window.wgULS("破坏回退", "破壞回退"),
          torev: window.wgULS("“恢复此版本”", "「恢復此版本」")
        }
      },
      // TwinkleConfig.watchRevertedPages (array)
      // What types of actions that should result in forced addition to watchlist
      {
        name: "watchRevertedPages",
        label: window.wgULS("把这些类型的回退加入到监视列表", "把這些類別的回退加入到監視清單"),
        type: "set",
        setValues: {
          norm: window.wgULS("常规回退", "常規回退"),
          vand: window.wgULS("破坏回退", "破壞回退"),
          torev: window.wgULS("“恢复此版本”", "「恢復此版本」")
        }
      },
      // TwinkleConfig.watchRevertedExpiry
      // If any of the above items are selected, whether to expire the watch
      {
        name: "watchRevertedExpiry",
        label: window.wgULS("当回退页面时，加入到监视列表的期限", "當回退頁面時，加入到監視清單的期限"),
        type: "enum",
        enumValues: Twinkle.config.watchlistEnums
      },
      // TwinkleConfig.offerReasonOnNormalRevert (boolean)
      // If to offer a prompt for extra summary reason for normal reverts, default to true
      {
        name: "offerReasonOnNormalRevert",
        label: window.wgULS("常规回退时询问理由", "常規回退時詢問理由"),
        helptip: window.wgULS("“常规”回退是中间的那个[回退]链接。", "「常規」回退是中間的那個[回退]連結。"),
        type: "boolean"
      },
      {
        name: "confirmOnFluff",
        label: window.wgULS("回退前要求确认（所有设备）", "回退前要求確認（所有裝置）"),
        helptip: window.wgULS("对于使用移动设备的用户，或者意志不坚定的。", "對於使用行動裝置的使用者，或者意志不堅定的。"),
        type: "boolean"
      },
      // TwinkleConfig.showRollbackLinks (array)
      // Where Twinkle should show rollback links:
      // diff, others, mine, contribs, history, recent
      // Note from TTO: |contribs| seems to be equal to |others| + |mine|, i.e. redundant, so I left it out heres
      {
        name: "showRollbackLinks",
        label: window.wgULS("在这些页面上显示回退链接", "在這些頁面上顯示回退連結"),
        type: "set",
        setValues: {
          diff: window.wgULS("差异", "差異"),
          history: window.wgULS("历史记录", "歷史記錄"),
          others: window.wgULS("其它用户的贡献", "其它使用者的貢獻"),
          mine: window.wgULS("我的贡献", "我的貢獻"),
          recentchanges: window.wgULS("最近更改", "近期變更"),
          recentchangeslinked: window.wgULS("相关更改", "相關變更")
        }
      },
      {
        name: "customRevertSummary",
        label: "回退理由",
        helptip: window.wgULS("在查看差异时可选，仅善意回退、常规回退、恢复此版本", "在檢視差異時可選，僅善意回退、常規回退、恢復此版本"),
        type: "customList",
        customListValueTitle: "理由",
        customListLabelTitle: window.wgULS("显示的文字", "顯示的文字")
      }
    ]
  }, {
    title: window.wgULS("快速删除", "快速刪除"),
    module: "speedy",
    preferences: [
      {
        name: "speedySelectionStyle",
        label: window.wgULS("什么时候执行标记或删除", "什麼時候執行標記或刪除"),
        type: "enum",
        enumValues: {
          buttonClick: window.wgULS("当我点“提交”时", "當我點「提交」時"),
          radioClick: window.wgULS("当我点一个选项时", "當我點一個選項時")
        }
      },
      // TwinkleConfig.watchSpeedyPages (array)
      // Whether to add speedy tagged pages to watchlist
      {
        name: "watchSpeedyPages",
        label: window.wgULS("将以下理由加入到监视列表", "將以下理由加入到監視清單"),
        type: "set",
        setValues: Twinkle.config.commonSets.csdCriteria,
        setDisplayOrder: Twinkle.config.commonSets.csdCriteriaDisplayOrder
      },
      // TwinkleConfig.watchSpeedyExpiry
      // If any of the above items are selected, whether to expire the watch
      {
        name: "watchSpeedyExpiry",
        label: window.wgULS("当标记页面时，加入到监视列表的期限", "當標記頁面時，加入到監視清單的期限"),
        type: "enum",
        enumValues: Twinkle.config.watchlistEnums
      },
      // TwinkleConfig.markSpeedyPagesAsPatrolled (boolean)
      // If, when applying speedy template to page, to mark the page as patrolled (if the page was reached from NewPages)
      {
        name: "markSpeedyPagesAsPatrolled",
        label: window.wgULS("标记时标记页面为已巡查（如可能）", "標記時標記頁面為已巡查（如可能）"),
        type: "boolean"
      },
      // TwinkleConfig.notifyUserOnSpeedyDeletionNomination (array)
      // What types of actions should result that the author of the page being notified of nomination
      {
        name: "notifyUserOnSpeedyDeletionNomination",
        label: window.wgULS("仅在使用以下理由时通知页面创建者", "僅在使用以下理由時通知頁面建立者"),
        helptip: window.wgULS("尽管您在对话框中选择通知，通知仍只会在使用这些理由时发出。", "儘管您在對話方塊中選擇通知，通知仍只會在使用這些理由時發出。"),
        type: "set",
        setValues: Twinkle.config.commonSets.csdCriteriaNotification,
        setDisplayOrder: Twinkle.config.commonSets.csdCriteriaNotificationDisplayOrder
      },
      // TwinkleConfig.promptForSpeedyDeletionSummary (array of strings)
      {
        name: "promptForSpeedyDeletionSummary",
        label: window.wgULS("使用以下理由删除时允许编辑删除理由", "使用以下理由刪除時允許編輯刪除理由"),
        adminOnly: true,
        type: "set",
        setValues: Twinkle.config.commonSets.csdAndDICriteria,
        setDisplayOrder: Twinkle.config.commonSets.csdAndDICriteriaDisplayOrder
      },
      // TwinkleConfig.openUserTalkPageOnSpeedyDelete (array of strings)
      // What types of actions that should result user talk page to be opened when speedily deleting (admin only)
      {
        name: "openUserTalkPageOnSpeedyDelete",
        label: window.wgULS("使用以下理由时打开用户讨论页", "使用以下理由時打開使用者討論頁"),
        adminOnly: true,
        type: "set",
        setValues: Twinkle.config.commonSets.csdAndDICriteria,
        setDisplayOrder: Twinkle.config.commonSets.csdAndDICriteriaDisplayOrder
      },
      // TwinkleConfig.deleteTalkPageOnDelete (boolean)
      // If talk page if exists should also be deleted (CSD G8) when spedying a page (admin only)
      {
        name: "deleteTalkPageOnDelete",
        label: window.wgULS("默认勾选“删除讨论页”", "預設勾選「刪除討論頁」"),
        adminOnly: true,
        type: "boolean"
      },
      {
        name: "deleteRedirectsOnDelete",
        label: window.wgULS("默认勾选“删除重定向”", "預設勾選「刪除重新導向」"),
        adminOnly: true,
        type: "boolean"
      },
      // TwinkleConfig.deleteSysopDefaultToDelete (boolean)
      // Make the CSD screen default to "delete" instead of "tag" (admin only)
      {
        name: "deleteSysopDefaultToDelete",
        label: window.wgULS("默认为直接删除而不是标记", "預設為直接刪除而不是標記"),
        helptip: window.wgULS("若已放置快速删除标记，则永远默认为删除模式。", "若已放置快速刪除標記，則永遠預設為刪除模式。"),
        adminOnly: true,
        type: "boolean"
      },
      // TwinkleConfig.speedyWindowWidth (integer)
      // Defines the width of the Twinkle SD window in pixels
      {
        name: "speedyWindowWidth",
        label: window.wgULS("快速删除对话框宽度（像素）", "快速刪除對話方塊寬度（像素）"),
        type: "integer"
      },
      // TwinkleConfig.speedyWindowWidth (integer)
      // Defines the width of the Twinkle SD window in pixels
      {
        name: "speedyWindowHeight",
        label: window.wgULS("快速删除对话框高度（像素）", "快速刪除對話方塊高度（像素）"),
        helptip: window.wgULS("若您有一台很大的显示器，您可以将此调高。", "若您有一台很大的顯示器，您可以將此調高。"),
        type: "integer"
      },
      {
        name: "logSpeedyNominations",
        label: window.wgULS("在用户空间中记录所有快速删除提名", "在使用者空間中記錄所有快速刪除提名"),
        helptip: window.wgULS("非管理员无法访问到已删除的贡献，用户空间日志提供了一个很好的方法来记录这些历史。", "非管理員無法存取到已刪除的貢獻，使用者空間日誌提供了一個很好的方法來記錄這些歷史。"),
        type: "boolean"
      },
      {
        name: "speedyLogPageName",
        label: window.wgULS("在此页保留日志", "在此頁保留日誌"),
        helptip: window.wgULS("在此框中输入子页面名称，您将在User:<i>用户名</i>/<i>子页面</i>找到CSD日志。仅在启用日志时工作。", "在此框中輸入子頁面名稱，您將在User:<i>使用者名稱</i>/<i>子頁面</i>找到CSD日誌。僅在啟用日誌時工作。"),
        type: "string"
      },
      {
        name: "noLogOnSpeedyNomination",
        label: window.wgULS("在使用以下理由时不做记录", "在使用以下理由時不做記錄"),
        type: "set",
        setValues: Twinkle.config.commonSets.csdAndDICriteria,
        setDisplayOrder: Twinkle.config.commonSets.csdAndDICriteriaDisplayOrder
      },
      {
        name: "enlargeG7Input",
        label: window.wgULS("扩大CSD G7的按钮", "擴大CSD G7的按鈕"),
        helptip: window.wgULS("扩为默认的两倍大。", "擴為預設的兩倍大。"),
        type: "boolean"
      }
    ]
  }, {
    title: window.wgULS("标记", "標記"),
    module: "tag",
    preferences: [{
      name: "watchTaggedPages",
      label: window.wgULS("标记时加入到监视列表", "標記時加入到監視清單"),
      type: "enum",
      enumValues: Twinkle.config.watchlistEnums
    }, {
      name: "watchMergeDiscussions",
      label: window.wgULS("加入合并讨论时监视讨论页", "加入合併討論時監視討論頁"),
      type: "enum",
      enumValues: Twinkle.config.watchlistEnums
    }, {
      name: "markTaggedPagesAsMinor",
      label: window.wgULS("将标记标记为小修改", "將標記標記為小修改"),
      type: "boolean"
    }, {
      name: "markTaggedPagesAsPatrolled",
      label: window.wgULS("默认勾选“标记页面为已巡查”框", "預設勾選「標記頁面為已巡查」框"),
      type: "boolean"
    }, {
      name: "groupByDefault",
      label: window.wgULS("默认勾选“合并到{{multiple issues}}”复选框", "預設勾選「合併到{{multiple issues}}」核取方塊"),
      type: "boolean"
    }, {
      name: "tagArticleSortOrder",
      label: window.wgULS("条目标记的默认查看方式", "條目標記的預設檢視方式"),
      type: "enum",
      enumValues: {
        cat: window.wgULS("按类型", "按類別"),
        alpha: "按字母"
      }
    }, {
      name: "customTagList",
      label: window.wgULS("自定义条目维护标记", "自訂條目維護標記"),
      helptip: window.wgULS("这些会出现在列表的末尾。", "這些會出現在列表的末尾。"),
      type: "customList",
      customListValueTitle: window.wgULS("模板名（不含大括号）", "模板名（不含大括號）"),
      customListLabelTitle: window.wgULS("显示的文字", "顯示的文字")
    }, {
      name: "customFileTagList",
      label: window.wgULS("自定义文件维护标记", "自訂檔案維護標記"),
      helptip: window.wgULS("这些会出现在列表的末尾。", "這些會出現在列表的末尾。"),
      type: "customList",
      customListValueTitle: window.wgULS("模板名（不含大括号）", "模板名（不含大括號）"),
      customListLabelTitle: window.wgULS("显示的文字", "顯示的文字")
    }, {
      name: "customRedirectTagList",
      label: window.wgULS("自定义重定向维护标记", "自訂重新導向維護標記"),
      helptip: window.wgULS("这些会出现在列表的末尾。", "這些會出現在列表的末尾。"),
      type: "customList",
      customListValueTitle: window.wgULS("模板名（不含大括号）", "模板名（不含大括號）"),
      customListLabelTitle: window.wgULS("显示的文字", "顯示的文字")
    }]
  }, {
    title: "小作品",
    module: "stub",
    preferences: [{
      name: "watchStubbedPages",
      label: window.wgULS("标记时加入到监视列表", "標記時加入到監視清單"),
      type: "boolean"
    }, {
      name: "markStubbedPagesAsMinor",
      label: window.wgULS("将小作品标记为小修改", "將小作品標記為小修改"),
      type: "boolean"
    }, {
      name: "markStubbedPagesAsPatrolled",
      label: window.wgULS("默认勾选“标记页面为已巡查”框", "預設勾選「標記頁面為已巡查」框"),
      type: "boolean"
    }, {
      name: "stubArticleSortOrder",
      label: window.wgULS("条目小作品的默认查看方式", "條目小作品的預設檢視方式"),
      type: "enum",
      enumValues: {
        cat: window.wgULS("按类型", "按類別"),
        alpha: "按字母"
      }
    }, {
      name: "customStubList",
      label: window.wgULS("自定义条目小作品标记", "自訂條目小作品標記"),
      helptip: window.wgULS("这些会出现在列表的末尾。", "這些會出現在列表的末尾。"),
      type: "customList",
      customListValueTitle: window.wgULS("模板名（不含大括号）", "模板名（不含大括號）"),
      customListLabelTitle: window.wgULS("显示的文字", "顯示的文字")
    }]
  }, {
    title: "通告",
    module: "talkback",
    preferences: [{
      name: "markTalkbackAsMinor",
      label: window.wgULS("将通告标记为小修改", "將通告標記為小修改"),
      type: "boolean"
    }, {
      name: "insertTalkbackSignature",
      label: window.wgULS("通告时加入签名", "通告時加入簽名"),
      type: "boolean"
    }, {
      name: "talkbackHeading",
      label: window.wgULS("通告所用的小节标题", "通告所用的小節標題"),
      type: "string"
    }, {
      name: "mailHeading",
      label: window.wgULS("“有新邮件”所用的小节标题", "「有新郵件」所用的小節標題"),
      type: "string"
    }]
  }, {
    title: window.wgULS("取消链入", "取消連入"),
    module: "unlink",
    preferences: [
      // TwinkleConfig.unlinkNamespaces (array)
      // In what namespaces unlink should happen, default in 0 (article) and 100 (portal)
      {
        name: "unlinkNamespaces",
        label: window.wgULS("取消以下命名空间中的反向链接", "取消以下命名空間中的反向連結"),
        helptip: window.wgULS("请避免选择讨论页，因这样会导致Twinkle试图修改讨论存档。", "請避免選擇討論頁，因這樣會導致Twinkle試圖修改討論存檔。"),
        type: "set",
        setValues: Twinkle.config.commonSets.namespacesNoSpecial
      }
    ]
  }, {
    title: window.wgULS("警告用户", "警告使用者"),
    module: "warn",
    preferences: [
      // TwinkleConfig.defaultWarningGroup (int)
      // if true, watch the page which has been dispatched an warning or notice, if false, default applies
      {
        name: "defaultWarningGroup",
        label: window.wgULS("默认警告级别", "預設警告級別"),
        type: "enum",
        enumValues: {
          1: "1：注意",
          2: "2：警告",
          3: window.wgULS("单层级提醒", "單層級提醒"),
          4: window.wgULS("单层级警告", "單層級警告"),
          5: window.wgULS("自定义提醒或警告", "自訂提醒或警告"),
          6: "所有警告模板",
          7: window.wgULS("自动选择层级", "自動選擇層級")
          // 8 was used for block templates before #260
          // 9 was deprecated
          // 10 was deprecated
          // 11 was deprecated
        }
      },
      // TwinkleConfig.combinedSingletMenus (boolean)
      // if true, show one menu with both single-issue notices and warnings instead of two separately
      {
        name: "combinedSingletMenus",
        label: window.wgULS("将两个单层级菜单合并成一个", "將兩個單層級選單合併成一個"),
        helptip: window.wgULS("当启用此选项时，无论默认警告级别选择单层级通知或单层级警告皆属于此项。", "當啟用此選項時，無論預設警告級別選擇單層級通知或單層級警告皆屬於此項。"),
        type: "boolean"
      },
      // TwinkleConfig.watchWarnings (string)
      // Watchlist setting for the page which has been dispatched an warning or notice
      {
        name: "watchWarnings",
        label: window.wgULS("警告时加入用户讨论页到监视列表", "警告時加入使用者討論頁到監視清單"),
        type: "enum",
        enumValues: Twinkle.config.watchlistEnums
      },
      // TwinkleConfig.oldSelect (boolean)
      // if true, use the native select menu rather the jquery chosen-based one
      {
        name: "oldSelect",
        label: window.wgULS("使用不可搜索的经典菜单", "使用不可搜尋的經典選單"),
        type: "boolean"
      },
      {
        name: "customWarningList",
        label: window.wgULS("自定义警告模板", "自訂警告模板"),
        helptip: window.wgULS("您可以加入模板或用户子页面。自定义警告会出现在警告对话框中“自定义警告”一节。", "您可以加入模板或使用者子頁面。自訂警告會出現在警告對話方塊中「自訂警告」一節。"),
        type: "customList",
        customListValueTitle: window.wgULS("模板名（不含大括号）", "模板名（不含大括號）"),
        customListLabelTitle: window.wgULS("显示的文字（和编辑摘要）", "顯示的文字（和編輯摘要）")
      }
    ]
  }, {
    title: window.wgULS("存废讨论", "存廢討論"),
    module: "xfd",
    preferences: [
      {
        name: "logXfdNominations",
        label: window.wgULS("在用户空间中记录所有存废讨论提名", "在使用者空間中記錄所有存廢討論提名"),
        helptip: window.wgULS("该日志供您追踪所有通过Twinkle提交的存废讨论", "該日誌供您追蹤所有透過Twinkle提交的存廢討論"),
        type: "boolean"
      },
      {
        name: "xfdLogPageName",
        label: window.wgULS("在此页保留日志", "在此頁保留日誌"),
        helptip: window.wgULS("在此框中输入子页面名称，您将在User:<i>用户名</i>/<i>子页面</i>找到XFD日志。仅在启用日志时工作。", "在此框中輸入子頁面名稱，您將在User:<i>使用者名稱</i>/<i>子頁面</i>找到XFD日誌。僅在啟用日誌時工作。"),
        type: "string"
      },
      {
        name: "noLogOnXfdNomination",
        label: window.wgULS("在使用以下理由时不做记录", "在使用以下理由時不做記錄"),
        type: "set",
        setValues: Twinkle.config.commonSets.xfdCriteria,
        setDisplayOrder: Twinkle.config.commonSets.xfdCriteriaDisplayOrder
      },
      // TwinkleConfig.xfdWatchPage (string)
      // The watchlist setting of the page being nominated for XfD.
      {
        name: "xfdWatchPage",
        label: window.wgULS("加入提名的页面到监视列表", "加入提名的頁面到監視清單"),
        type: "enum",
        enumValues: Twinkle.config.watchlistEnums
      },
      // TwinkleConfig.xfdWatchDiscussion (string)
      // The watchlist setting of the newly created XfD page (for those processes that create discussion pages for each nomination),
      // or the list page for the other processes.
      {
        name: "xfdWatchDiscussion",
        label: window.wgULS("加入存废讨论页到监视列表", "加入存廢討論頁到監視清單"),
        helptip: window.wgULS("当日的页面。", "當日的頁面。"),
        type: "enum",
        enumValues: Twinkle.config.watchlistEnums
      },
      // TwinkleConfig.xfdWatchUser (string)
      // The watchlist setting of the user talk page if they receive a notification.
      {
        name: "xfdWatchUser",
        label: window.wgULS("加入创建者讨论页到监视列表（在通知时）", "加入建立者討論頁到監視清單（在通知時）"),
        type: "enum",
        enumValues: Twinkle.config.watchlistEnums
      },
      {
        name: "markXfdPagesAsPatrolled",
        label: window.wgULS("标记时标记页面为已巡查（如可能）", "標記時標記頁面為已巡查（如可能）"),
        helptip: window.wgULS("基于技术原因，页面仅会在由Special:NewPages到达时被标记为已巡查。", "基於技術原因，頁面僅會在由Special:NewPages到達時被標記為已巡查。"),
        type: "boolean"
      },
      {
        name: "FwdCsdToXfd",
        label: window.wgULS("提删类型增加转交自快速删除候选", "提刪類別增加轉交自快速刪除候選"),
        helptip: window.wgULS("请确保您充分了解[[LIB:快速删除条例]]才开启此功能。", "請確保您充分了解[[LIB:快速刪除條例]]才開啟此功能。"),
        type: "boolean"
      },
      {
        name: "afdDefaultCategory",
        label: window.wgULS("默认提删类型", "預設提刪類別"),
        helptip: window.wgULS("若选择“相同于上次选择”将使用localStorage来记忆。", "若選擇「相同於上次選擇」將使用localStorage來記憶。"),
        type: "enum",
        enumValues: {
          delete: window.wgULS("删除", "刪除"),
          same: window.wgULS("相同于上次选择", "相同於上次選擇")
        }
      },
      {
        name: "afdFameDefaultReason",
        label: window.wgULS("默认关注度提删理由", "預設關注度提刪理由"),
        helptip: window.wgULS("用于批量提删。", "用於批次提刪。"),
        type: "string"
      },
      {
        name: "afdSubstubDefaultReason",
        label: window.wgULS("默认小小作品提删理由", "預設小小作品提刪理由"),
        helptip: window.wgULS("用于批量提删。", "用於批次提刪。"),
        type: "string"
      }
    ]
  }, {
    title: window.wgULS("关闭存废讨论", "關閉存廢討論"),
    module: "close",
    preferences: [{
      name: "XfdClose",
      label: window.wgULS("在存废讨论显示关闭讨论按钮", "在存廢討論顯示關閉討論按鈕"),
      helptip: window.wgULS("请确保您充分了解[[LIB:删除条例]]才开启此功能。", "請確保您充分了解[[LIB:刪除條例]]才開啟此功能。"),
      type: "enum",
      enumValues: {
        hide: window.wgULS("不显示", "不顯示"),
        nonadminonly: window.wgULS("只包含非管理员可使用选项", "只包含非管理員可使用選項"),
        all: window.wgULS("显示所有选项", "顯示所有選項")
      }
    }]
  }, {
    title: window.wgULS("侵犯著作权", "侵犯著作權"),
    module: "copyvio",
    preferences: [
      // TwinkleConfig.copyvioWatchPage (string)
      // The watchlist setting of the page being nominated for XfD.
      {
        name: "copyvioWatchPage",
        label: window.wgULS("加入提报的页面到监视列表", "加入提報的頁面到監視清單"),
        type: "enum",
        enumValues: Twinkle.config.watchlistEnums
      },
      // TwinkleConfig.copyvioWatchUser (string)
      // The watchlist setting of the user if he receives a notification.
      {
        name: "copyvioWatchUser",
        label: window.wgULS("加入创建者讨论页到监视列表（在通知时）", "加入建立者討論頁到監視清單（在通知時）"),
        type: "enum",
        enumValues: Twinkle.config.watchlistEnums
      },
      // TwinkleConfig.markCopyvioPagesAsPatrolled (boolean)
      // If, when applying copyvio template to page, to mark the page as patrolled (if the page was reached from NewPages)
      {
        name: "markCopyvioPagesAsPatrolled",
        label: window.wgULS("标记时标记页面为已巡查（如可能）", "標記時標記頁面為已巡查（如可能）"),
        helptip: window.wgULS("基于技术原因，页面仅会在由Special:NewPages到达时被标记为已巡查。", "基於技術原因，頁面僅會在由Special:NewPages到達時被標記為已巡查。"),
        type: "boolean"
      }
    ]
  }, {
    title: window.wgULS("隐藏", "隱藏"),
    hidden: true,
    preferences: [
      // twinkle.js: portlet setup
      {
        name: "portletArea",
        type: "string"
      },
      {
        name: "portletId",
        type: "string"
      },
      {
        name: "portletName",
        type: "string"
      },
      {
        name: "portletType",
        type: "string"
      },
      {
        name: "portletNext",
        type: "string"
      },
      // twinklefluff.js: defines how many revision to query maximum, maximum possible is 50, default is 50
      {
        name: "revertMaxRevisions",
        type: "integer"
      },
      // twinklebatchdelete.js: How many pages should be processed maximum
      {
        name: "batchMax",
        type: "integer",
        adminOnly: true
      },
      // How many pages should be processed at a time by deprod and batchdelete/protect/undelete
      {
        name: "batchChunks",
        type: "integer",
        adminOnly: true
      }
    ]
  }];
  Twinkle.config.init = () => {
    if (mw.config.get("wgPageName") === Twinkle.getPref("configPage") && mw.config.get("wgAction") === "view") {
      if (!document.querySelector("#twinkle-config")) {
        return;
      }
      const contentdiv = document.querySelector("#twinkle-config-content");
      contentdiv.textContent = "";
      const toctable = document.createElement("div");
      toctable.className = "toc";
      toctable.style.marginLeft = "0.4em";
      const toctitle = document.createElement("div");
      toctitle.id = "toctitle";
      const toch2 = document.createElement("h2");
      toch2.textContent = window.wgULS("目录 ", "目錄 ");
      toctitle.appendChild(toch2);
      const toctoggle = document.createElement("span");
      toctoggle.className = "toctoggle";
      toctoggle.appendChild(document.createTextNode("["));
      const toctogglelink = document.createElement("a");
      toctogglelink.className = "internal";
      toctogglelink.setAttribute("href", "#tw-tocshowhide");
      toctogglelink.textContent = window.wgULS("隐藏", "隱藏");
      toctoggle.appendChild(toctogglelink);
      toctoggle.appendChild(document.createTextNode("]"));
      toctitle.appendChild(toctoggle);
      toctable.appendChild(toctitle);
      const tocul = document.createElement("ul");
      toctogglelink.addEventListener("click", () => {
        const $tocul = $(tocul);
        $tocul.toggle();
        if ($tocul.find(":visible").length) {
          toctogglelink.textContent = window.wgULS("隐藏", "隱藏");
        } else {
          toctogglelink.textContent = window.wgULS("显示", "顯示");
        }
      }, false);
      toctable.appendChild(tocul);
      contentdiv.appendChild(toctable);
      const contentform = document.createElement("form");
      contentform.setAttribute("action", "javascript:void(0)");
      contentform.addEventListener("submit", Twinkle.config.save, true);
      contentdiv.appendChild(contentform);
      const container = document.createElement("table");
      container.style.width = "100%";
      contentform.appendChild(container);
      $(Twinkle.config.sections).each((sectionkey, section) => {
        if (section.hidden || section.adminOnly && !Morebits.userIsSysop) {
          return true;
        }
        const tocli = document.createElement("li");
        tocli.className = "toclevel-1";
        const toca = document.createElement("a");
        toca.setAttribute("href", "#".concat(section.module));
        toca.appendChild(document.createTextNode(section.title));
        tocli.appendChild(toca);
        tocul.appendChild(tocli);
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        cell.setAttribute("colspan", "3");
        const heading = document.createElement("h4");
        heading.style.borderBottom = "1px solid #808080";
        heading.style.marginTop = "0.2em";
        heading.id = section.module;
        heading.appendChild(document.createTextNode(section.title));
        cell.appendChild(heading);
        row.appendChild(cell);
        container.appendChild(row);
        let rowcount = 1;
        $(section.preferences).each((prefkey, pref) => {
          if (pref.adminOnly && !Morebits.userIsSysop) {
            return true;
          }
          row = document.createElement("tr");
          row.style.marginBottom = "0.2em";
          if (rowcount++ % 2 === 0) {
            row.style.backgroundColor = "rgb(128 128 128/.1)";
          }
          cell = document.createElement("td");
          let label;
          let input;
          const gotPref = Twinkle.getPref(pref.name);
          switch (pref.type) {
            case "boolean":
              cell.setAttribute("colspan", "2");
              label = document.createElement("label");
              input = document.createElement("input");
              input.setAttribute("type", "checkbox");
              input.setAttribute("id", pref.name);
              input.setAttribute("name", pref.name);
              if (gotPref === true) {
                input.checked = true;
              }
              label.appendChild(input);
              label.appendChild(document.createTextNode(pref.label));
              cell.appendChild(label);
              break;
            case "string":
            case "integer":
              cell.style.textAlign = "right";
              cell.style.paddingRight = "0.5em";
              label = document.createElement("label");
              label.setAttribute("for", pref.name);
              label.appendChild(document.createTextNode("".concat(pref.label, "：")));
              cell.appendChild(label);
              row.appendChild(cell);
              cell = document.createElement("td");
              cell.style.paddingRight = "1em";
              input = document.createElement("input");
              input.setAttribute("type", "text");
              input.setAttribute("id", pref.name);
              input.setAttribute("name", pref.name);
              if (pref.type === "integer") {
                input.setAttribute("size", 6);
                input.setAttribute("type", "number");
                input.setAttribute("step", "1");
              }
              if (gotPref) {
                input.setAttribute("value", gotPref);
              }
              cell.appendChild(input);
              break;
            case "enum": {
              cell.style.textAlign = "right";
              cell.style.paddingRight = "0.5em";
              label = document.createElement("label");
              label.setAttribute("for", pref.name);
              label.appendChild(document.createTextNode("".concat(pref.label, "：")));
              cell.appendChild(label);
              row.appendChild(cell);
              cell = document.createElement("td");
              cell.style.paddingRight = "1em";
              input = document.createElement("select");
              input.setAttribute("id", pref.name);
              input.setAttribute("name", pref.name);
              let optionExists = false;
              for (var _i17 = 0, _Object$entries10 = Object.entries(pref.enumValues); _i17 < _Object$entries10.length; _i17++) {
                const [enumvalue, enumdisplay] = _Object$entries10[_i17];
                const option = document.createElement("option");
                option.setAttribute("value", enumvalue);
                if (gotPref === enumvalue || // Hack to convert old boolean watchlist prefs
                // to corresponding enums (added in v2.1)
                typeof gotPref === "boolean" && (gotPref && enumvalue === "yes" || !gotPref && enumvalue === "no")) {
                  option.setAttribute("selected", "selected");
                  optionExists = true;
                }
                option.appendChild(document.createTextNode(enumdisplay));
                input.appendChild(option);
              }
              if (!optionExists) {
                const option = document.createElement("option");
                option.setAttribute("value", gotPref);
                option.setAttribute("selected", "selected");
                option.appendChild(document.createTextNode(gotPref));
                input.appendChild(option);
              }
              cell.appendChild(input);
              break;
            }
            case "set": {
              cell.setAttribute("colspan", "2");
              label = document.createElement("label");
              label.appendChild(document.createTextNode("".concat(pref.label, "：")));
              cell.appendChild(label);
              const checkdiv = document.createElement("div");
              checkdiv.style.paddingLeft = "1em";
              const worker = (itemkey, itemvalue) => {
                const checklabel = document.createElement("label");
                checklabel.style.marginRight = "0.7em";
                checklabel.style.display = "inline-block";
                const check = document.createElement("input");
                check.setAttribute("type", "checkbox");
                check.setAttribute("id", "".concat(pref.name, "_").concat(itemkey));
                check.setAttribute("name", "".concat(pref.name, "_").concat(itemkey));
                if (gotPref && gotPref.includes(itemkey)) {
                  check.checked = true;
                }
                if (pref.name === "unlinkNamespaces" && gotPref && gotPref.includes(Number.parseInt(itemkey, 10))) {
                  check.checked = true;
                }
                checklabel.appendChild(check);
                checklabel.appendChild(document.createTextNode(itemvalue));
                checkdiv.appendChild(checklabel);
              };
              if (pref.setDisplayOrder) {
                var _iterator67 = _createForOfIteratorHelper(pref.setDisplayOrder), _step67;
                try {
                  for (_iterator67.s(); !(_step67 = _iterator67.n()).done; ) {
                    const item = _step67.value;
                    worker(item, pref.setValues[item]);
                  }
                } catch (err) {
                  _iterator67.e(err);
                } finally {
                  _iterator67.f();
                }
              } else {
                for (var _i18 = 0, _Object$entries11 = Object.entries(pref.setValues); _i18 < _Object$entries11.length; _i18++) {
                  const [itemkey, itemvalue] = _Object$entries11[_i18];
                  worker(itemkey, itemvalue);
                }
              }
              cell.appendChild(checkdiv);
              break;
            }
            case "customList": {
              cell.style.textAlign = "right";
              cell.style.paddingRight = "0.5em";
              label = document.createElement("label");
              label.setAttribute("for", pref.name);
              label.appendChild(document.createTextNode("".concat(pref.label, "：")));
              cell.appendChild(label);
              row.appendChild(cell);
              cell = document.createElement("td");
              cell.style.paddingRight = "1em";
              const customListButton = document.createElement("button");
              customListButton.setAttribute("id", pref.name);
              customListButton.setAttribute("name", pref.name);
              customListButton.setAttribute("type", "button");
              customListButton.addEventListener("click", Twinkle.config.listDialog.display, false);
              $(customListButton).data({
                value: gotPref,
                pref
              });
              customListButton.appendChild(document.createTextNode(window.wgULS("编辑项目", "編輯項目")));
              cell.appendChild(customListButton);
              break;
            }
            default:
              mw.notify("twinkleconfig: 未知类型的属性 ".concat(pref.name), {
                type: "warn",
                tag: "twinkleconfig"
              });
              break;
          }
          row.appendChild(cell);
          cell = document.createElement("td");
          cell.style.fontSize = "90%";
          cell.style.color = "gray";
          if (pref.helptip) {
            cell.innerHTML = pref.helptip.replace(/{{(.+?)}}/g, '{{<a href="'.concat(mw.util.getUrl("Template:"), '$1" rel="noopener" target="_blank">$1</a>}}')).replace(/\[\[(.+?)]]/g, '<a href="'.concat(mw.util.getUrl(""), '$1" rel="noopener" target="_blank">$1</a>'));
          }
          if (pref.type !== "customList") {
            const resetlink = document.createElement("a");
            resetlink.setAttribute("href", "#tw-reset");
            resetlink.setAttribute("id", "twinkle-config-reset-".concat(pref.name));
            resetlink.addEventListener("click", Twinkle.config.resetPrefLink, false);
            resetlink.style.cssFloat = "right";
            resetlink.style.margin = "0 0.6em";
            resetlink.appendChild(document.createTextNode(window.wgULS("复位", "復位")));
            cell.appendChild(resetlink);
          }
          row.appendChild(cell);
          container.appendChild(row);
          return true;
        });
        return true;
      });
      const footerbox = document.createElement("div");
      footerbox.setAttribute("id", "twinkle-config-buttonpane");
      footerbox.style.backgroundColor = "#BCCADF";
      footerbox.style.padding = "0.5em";
      const submitButton = document.createElement("button");
      submitButton.setAttribute("id", "twinkle-config-submit");
      submitButton.setAttribute("type", "submit");
      submitButton.appendChild(document.createTextNode(window.wgULS("保存修改", "儲存修改")));
      footerbox.appendChild(submitButton);
      const footerspan = document.createElement("span");
      footerspan.className = "plainlinks";
      footerspan.style.marginLeft = "2.4em";
      footerspan.style.fontSize = "90%";
      const footera = document.createElement("a");
      footera.setAttribute("href", "#tw-reset-all");
      footera.setAttribute("id", "twinkle-config-resetall");
      footera.addEventListener("click", Twinkle.config.resetAllPrefs, false);
      footera.appendChild(document.createTextNode(window.wgULS("恢复默认", "恢復預設")));
      footerspan.appendChild(footera);
      footerbox.appendChild(footerspan);
      contentform.appendChild(footerbox);
      if (window.location.hash) {
        const loc = window.location.hash;
        window.location.hash = "";
        window.location.hash = loc;
      }
    } else if (mw.config.get("wgNamespaceNumber") === mw.config.get("wgNamespaceIds").user && mw.config.get("wgTitle").indexOf(mw.config.get("wgUserName")) === 0 && mw.config.get("wgPageName").slice(-3) === ".js") {
      const box = document.createElement("div");
      box.setAttribute("id", "twinkle-config-headerbox");
      let link;
      const scriptPageName = mw.config.get("wgPageName").slice(mw.config.get("wgPageName").lastIndexOf("/") + 1, mw.config.get("wgPageName").lastIndexOf(".js"));
      if (scriptPageName === "twinkleoptions") {
        box.setAttribute("class", "config-twopt-box");
        if (mw.config.get("wgArticleId") > 0) {
          box.appendChild(document.createTextNode(window.wgULS("这页包含您的Twinkle参数设置，您可使用", "這頁包含您的Twinkle偏好設定，您可使用")));
        } else {
          box.appendChild(document.createTextNode(window.wgULS("您可配置您的Twinkle，通过使用", "您可配置您的Twinkle，通過使用")));
        }
        link = document.createElement("a");
        link.setAttribute("href", mw.util.getUrl(Twinkle.getPref("configPage")));
        link.appendChild(document.createTextNode(window.wgULS("Twinkle参数设置面板", "Twinkle偏好設定面板")));
        box.appendChild(link);
        box.appendChild(document.createTextNode(window.wgULS("，或直接编辑本页。", "，或直接編輯本頁。")));
        $(box).insertAfter($body.find("#contentSub"));
      } else if (["vector", "vector-2022", "gongbi", "citizen", "common"].includes(scriptPageName)) {
        box.setAttribute("class", "config-userskin-box");
        box.appendChild(document.createTextNode(window.wgULS("若您想配置您的Twinkle，请使用", "若您想配置您的Twinkle，請使用")));
        link = document.createElement("a");
        link.setAttribute("href", mw.util.getUrl(Twinkle.getPref("configPage")));
        link.appendChild(document.createTextNode(window.wgULS("Twinkle参数设置面板", "Twinkle偏好設定面板")));
        box.appendChild(link);
        box.appendChild(document.createTextNode("。"));
        $(box).insertAfter($body.find("#contentSub"));
      }
    }
  };
  Twinkle.config.listDialog = {};
  Twinkle.config.listDialog.addRow = (dlgtable, value, label) => {
    const contenttr = document.createElement("tr");
    let contenttd = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.setAttribute("type", "button");
    removeButton.addEventListener("click", () => {
      $(contenttr).remove();
    }, false);
    removeButton.textContent = "移除";
    contenttd.appendChild(removeButton);
    contenttr.appendChild(contenttd);
    contenttd = document.createElement("td");
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.className = "twinkle-config-customlist-value";
    input.style.width = "97%";
    if (value) {
      input.setAttribute("value", value);
    }
    contenttd.appendChild(input);
    contenttr.appendChild(contenttd);
    contenttd = document.createElement("td");
    input = document.createElement("input");
    input.setAttribute("type", "text");
    input.className = "twinkle-config-customlist-label";
    input.style.width = "98%";
    if (label) {
      input.setAttribute("value", label);
    }
    contenttd.appendChild(input);
    contenttr.appendChild(contenttd);
    dlgtable.appendChild(contenttr);
  };
  Twinkle.config.listDialog.display = (e) => {
    var _curpref$customListVa, _curpref$customListLa;
    const $prefbutton = $(e.target);
    const curvalue = $prefbutton.data("value");
    const curpref = $prefbutton.data("pref");
    const dialog = new Morebits.simpleWindow(720, 400);
    dialog.setTitle(curpref.label);
    dialog.setScriptName(window.wgULS("Twinkle参数设置", "Twinkle偏好設定"));
    const dialogcontent = document.createElement("div");
    const dlgtable = document.createElement("table");
    dlgtable.className = "wikitable";
    dlgtable.style.margin = "1.4em 1em";
    dlgtable.style.width = "97%";
    const dlgtbody = document.createElement("tbody");
    let dlgtr = document.createElement("tr");
    let dlgth = document.createElement("th");
    dlgth.style.width = "5%";
    dlgtr.appendChild(dlgth);
    dlgth = document.createElement("th");
    dlgth.style.width = "35%";
    dlgth.textContent = (_curpref$customListVa = curpref.customListValueTitle) !== null && _curpref$customListVa !== void 0 ? _curpref$customListVa : window.wgULS("数值", "數值");
    dlgtr.appendChild(dlgth);
    dlgth = document.createElement("th");
    dlgth.style.width = "60%";
    dlgth.textContent = (_curpref$customListLa = curpref.customListLabelTitle) !== null && _curpref$customListLa !== void 0 ? _curpref$customListLa : window.wgULS("标签", "標籤");
    dlgtr.appendChild(dlgth);
    dlgtbody.appendChild(dlgtr);
    let gotRow = false;
    var _iterator68 = _createForOfIteratorHelper(curvalue), _step68;
    try {
      for (_iterator68.s(); !(_step68 = _iterator68.n()).done; ) {
        const v = _step68.value;
        gotRow = true;
        Twinkle.config.listDialog.addRow(dlgtbody, v.value, v.label);
      }
    } catch (err) {
      _iterator68.e(err);
    } finally {
      _iterator68.f();
    }
    if (!gotRow) {
      Twinkle.config.listDialog.addRow(dlgtbody);
    }
    const dlgtfoot = document.createElement("tfoot");
    dlgtr = document.createElement("tr");
    const dlgtd = document.createElement("td");
    dlgtd.setAttribute("colspan", "3");
    const addButton = document.createElement("button");
    addButton.style.minWidth = "8em";
    addButton.setAttribute("type", "button");
    addButton.addEventListener("click", () => {
      Twinkle.config.listDialog.addRow(dlgtbody);
    }, false);
    addButton.textContent = "添加";
    dlgtd.appendChild(addButton);
    dlgtr.appendChild(dlgtd);
    dlgtfoot.appendChild(dlgtr);
    dlgtable.appendChild(dlgtbody);
    dlgtable.appendChild(dlgtfoot);
    dialogcontent.appendChild(dlgtable);
    let button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.addEventListener("click", () => {
      Twinkle.config.listDialog.save($prefbutton, dlgtbody);
      dialog.close();
    }, false);
    button.textContent = window.wgULS("保存修改", "儲存修改");
    dialogcontent.appendChild(button);
    button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.addEventListener("click", () => {
      Twinkle.config.listDialog.reset($prefbutton, dlgtbody);
    }, false);
    button.textContent = window.wgULS("复位", "復位");
    dialogcontent.appendChild(button);
    button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.addEventListener("click", () => {
      dialog.close();
    }, false);
    button.textContent = "取消";
    dialogcontent.appendChild(button);
    dialog.setContent(dialogcontent);
    dialog.display();
  };
  Twinkle.config.listDialog.reset = (button, tbody) => {
    const $button = $(button);
    const curpref = $button.data("pref");
    const oldvalue = $button.data("value");
    Twinkle.config.resetPref(curpref);
    const $tbody = $(tbody);
    $tbody.find("tr").slice(1).remove();
    const curvalue = $button.data("value");
    var _iterator69 = _createForOfIteratorHelper(curvalue), _step69;
    try {
      for (_iterator69.s(); !(_step69 = _iterator69.n()).done; ) {
        const v = _step69.value;
        Twinkle.config.listDialog.addRow(tbody, v.value, v.label);
      }
    } catch (err) {
      _iterator69.e(err);
    } finally {
      _iterator69.f();
    }
    $button.data("value", oldvalue);
  };
  Twinkle.config.listDialog.save = (button, tbody) => {
    const result = [];
    let current = {};
    $(tbody).find('input[type="text"]').each((inputkey, input) => {
      if ($(input).hasClass("twinkle-config-customlist-value")) {
        current = {
          value: input.value
        };
      } else {
        current.label = input.value;
        if (current.value || current.label) {
          result.push(current);
        }
      }
    });
    $(button).data("value", result);
  };
  Twinkle.config.resetPrefLink = (e) => {
    const wantedpref = e.target.id.slice(21);
    $(Twinkle.config.sections).each((sectionkey, section) => {
      if (section.hidden || section.adminOnly && !Morebits.userIsSysop) {
        return true;
      }
      let foundit = false;
      $(section.preferences).each((prefkey, pref) => {
        if (pref.name !== wantedpref) {
          return true;
        }
        Twinkle.config.resetPref(pref);
        foundit = true;
        return false;
      });
      if (foundit) {
        return false;
      }
    });
    return false;
  };
  Twinkle.config.resetPref = (pref) => {
    switch (pref.type) {
      case "boolean":
        document.querySelector("#".concat(pref.name)).checked = Twinkle.defaultConfig[pref.name];
        break;
      case "string":
      case "integer":
      case "enum":
        document.querySelector("#".concat(pref.name)).value = Twinkle.defaultConfig[pref.name];
        break;
      case "set":
        for (var _i19 = 0, _Object$entries12 = Object.entries(pref.setValues); _i19 < _Object$entries12.length; _i19++) {
          const [itemkey] = _Object$entries12[_i19];
          if (document.querySelector("#".concat(pref.name, "_").concat(itemkey))) {
            document.querySelector("#".concat(pref.name, "_").concat(itemkey)).checked = Twinkle.defaultConfig[pref.name].includes(itemkey);
          }
        }
        break;
      case "customList":
        $(document.querySelector("#".concat(pref.name))).data("value", Twinkle.defaultConfig[pref.name]);
        break;
      default:
        mw.notify("twinkleconfig: unknown data type for preference ".concat(pref.name), {
          type: "warn",
          tag: "twinkleconfig"
        });
        break;
    }
  };
  Twinkle.config.resetAllPrefs = () => {
    $(Twinkle.config.sections).each((sectionkey, section) => {
      if (section.hidden || section.adminOnly && !Morebits.userIsSysop) {
        return true;
      }
      $(section.preferences).each((prefkey, pref) => {
        if (!pref.adminOnly || Morebits.userIsSysop) {
          Twinkle.config.resetPref(pref);
        }
      });
      return true;
    });
    return false;
  };
  Twinkle.config.save = (e) => {
    Morebits.status.init(document.querySelector("#twinkle-config-content"));
    const userjs = "".concat(mw.config.get("wgFormattedNamespaces")[mw.config.get("wgNamespaceIds").user], ":").concat(mw.config.get("wgUserName"), "/twinkleoptions.js");
    const ysarchives_page = new Morebits.wiki.page(userjs, window.wgULS("保存参数设置到 ", "儲存偏好設定到 ") + userjs);
    ysarchives_page.setCallbackParameters(e.target);
    ysarchives_page.load(Twinkle.config.writePrefs);
    return false;
  };
  Twinkle.config.writePrefs = (pageobj) => {
    const form = pageobj.getCallbackParameters();
    const newConfig = {
      optionsVersion: 2.1
    };
    const compare = (a, b) => {
      if (Array.isArray(a)) {
        if (a.length !== b.length) {
          return false;
        }
        a.sort();
        b.sort();
        for (let i = 0; a[i]; ++i) {
          if (typeof a[i] === "object" && (a[i].label !== b[i].label || a[i].value !== b[i].value)) {
            return false;
          } else if (a[i].toString() !== b[i].toString()) {
            return false;
          }
        }
        return true;
      }
      return a === b;
    };
    $(Twinkle.config.sections).each((sectionkey, section) => {
      if (section.adminOnly && !Morebits.userIsSysop) {
        return;
      }
      $(section.preferences).each((prefkey, pref) => {
        let userValue;
        if (!pref.adminOnly || Morebits.userIsSysop) {
          if (!section.hidden) {
            switch (pref.type) {
              case "boolean":
                userValue = form[pref.name].checked;
                break;
              case "string":
              case "enum":
                userValue = form[pref.name].value;
                break;
              case "integer":
                userValue = Number.parseInt(form[pref.name].value, 10);
                if (Number.isNaN(userValue)) {
                  Morebits.status.warn(window.wgULS("保存", "儲存"), "".concat(window.wgULS("您为 ", "您為 ") + pref.name, " 指定的值（").concat(pref.value).concat(window.wgULS("）不合法，会继续保存操作，但此值将会跳过。", "）不合法，會繼續儲存操作，但此值將會跳過。")));
                  userValue = null;
                }
                break;
              case "set":
                userValue = [];
                if (pref.setDisplayOrder) {
                  var _iterator70 = _createForOfIteratorHelper(pref.setDisplayOrder), _step70;
                  try {
                    for (_iterator70.s(); !(_step70 = _iterator70.n()).done; ) {
                      const item = _step70.value;
                      if (form["".concat(pref.name, "_").concat(item)].checked) {
                        userValue.push(item);
                      }
                    }
                  } catch (err) {
                    _iterator70.e(err);
                  } finally {
                    _iterator70.f();
                  }
                } else {
                  for (var _i20 = 0, _Object$entries13 = Object.entries(pref.setValues); _i20 < _Object$entries13.length; _i20++) {
                    const [itemkey] = _Object$entries13[_i20];
                    if (form["".concat(pref.name, "_").concat(itemkey)].checked) {
                      userValue.push(itemkey);
                    }
                  }
                }
                break;
              case "customList":
                userValue = $(form[pref.name]).data("value");
                break;
              default:
                mw.notify("twinkleconfig: 未知数据类型，属性 ".concat(pref.name), {
                  type: "warn",
                  tag: "twinkleconfig"
                });
                break;
            }
          } else if (Twinkle.prefs) {
            userValue = Twinkle.prefs[pref.name];
          }
        }
        if (userValue !== void 0 && !compare(userValue, Twinkle.defaultConfig[pref.name])) {
          newConfig[pref.name] = userValue;
        }
      });
    });
    const nowiki = "nowiki";
    let text = "// <".concat(nowiki, ">\n").concat(window.wgULS("// twinkleoptions.js：用户Twinkle参数设置文件\n//\n// 注：修改您的参数设置最简单的办法是使用\n// Twinkle参数设置面板，在[[".concat(Morebits.pageNameNorm, "]]。\n//\n// 这个文件是自动生成的，您所做的任何修改（除了\n// 以一种合法的JavaScript的方式来修改这些属性值）会\n// 在下一次您点击“保存”时被覆盖。\n// 修改此文件时，请记得使用合法的JavaScript。\n"), "// twinkleoptions.js：使用者Twinkle參數設定檔案\n//\n// 註：修改您的參數設定最簡單的辦法是使用\n// Twinkle參數設定面板，在[[".concat(Morebits.pageNameNorm, "]]。\n//\n// 這個檔案是自動產生的，您所做的任何修改（除了\n// 以一種合法的JavaScript的方式來修改這些屬性值）會\n// 在下一次您點擊「儲存」時被覆蓋。\n// 修改此檔案時，請記得使用合法的JavaScript。\n")));
    text += "\nwindow.Twinkle = window.Twinkle || {};\nwindow.Twinkle.prefs = window.Twinkle.prefs || {};\nwindow.Twinkle.prefs = ";
    text += JSON.stringify(newConfig, null, 2);
    text += ";\n\n".concat(window.wgULS("// twinkleoptions.js到此为止\n", "// twinkleoptions.js到此為止\n"), "// </").concat(nowiki, ">");
    pageobj.setPageText(text);
    pageobj.setEditSummary(window.wgULS("保存Twinkle参数设置：来自[[", "儲存Twinkle偏好設定：來自[[") + Morebits.pageNameNorm + window.wgULS("]]的自动编辑", "]]的自動編輯"));
    pageobj.setChangeTags(Twinkle.changeTags);
    pageobj.setCreateOption("recreate");
    pageobj.save(Twinkle.config.saveSuccess);
  };
  Twinkle.config.saveSuccess = (pageobj) => {
    pageobj.getStatusElement().info("成功");
    const noticebox = document.createElement("div");
    noticebox.className = "mw-message-box mw-message-box-success";
    noticebox.style.fontSize = "100%";
    noticebox.style.marginTop = "2em";
    noticebox.innerHTML = "<p><b>".concat(window.wgULS("您的Twinkle参数设置已被保存。", "您的Twinkle偏好設定已被儲存。"), "</b></p><p>").concat(window.wgULS("要看到这些更改，您可能需要", "要看到這些更改，您可能需要"), '<a href="').concat(mw.util.getUrl("LIB:BYPASS"), '" title="LIB:BYPASS"><b>').concat(window.wgULS("绕过浏览器缓存", "繞過瀏覽器快取"), "</b></a>。</p>");
    Morebits.status.root.appendChild(noticebox);
    const noticeclear = document.createElement("br");
    noticeclear.style.clear = "both";
    Morebits.status.root.appendChild(noticeclear);
  };
  Twinkle.addInitCallback(Twinkle.config.init);
})(jQuery);

})();

/* </nowiki> */
