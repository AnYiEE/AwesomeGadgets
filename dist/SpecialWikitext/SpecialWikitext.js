/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-SpecialWikitext.js}
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/SpecialWikitext}
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/global.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/fails.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/descriptors.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-call.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/classof-raw.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/indexed-object.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-indexed-object.js"(exports, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-callable.js"(exports, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/engine-user-agent.js"(exports, module2) {
    "use strict";
    module2.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/engine-v8-version.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-symbol.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/try-to-string.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/a-callable.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-method.js"(exports, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/define-global-property.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared-store.js"(exports, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.36.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared.js"(exports, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-object.js"(exports, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/has-own-property.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/uid.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-primitive.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-property-key.js"(exports, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/document-create-element.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/an-object.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-define-property.js"(exports) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-name.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/inspect-source.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var WeakMap = global2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared-key.js"(exports, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/internal-state.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/make-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/define-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/math-trunc.js"(exports, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-absolute-index.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-length.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/length-of-array-like.js"(exports, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-includes.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-keys-internal.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/enum-bug-keys.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/own-keys.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-forced.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/export.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-array.js"(exports, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-set-length.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.array.push.js
var require_es_array_push = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.array.push.js"() {
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

// dist/SpecialWikitext/SpecialWikitext.js
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
//! src/SpecialWikitext/modules/generateElements.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/SpecialWikitext/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Loading preview": (0, import_ext_gadget.localize)({
      en: "Loading preview……",
      "zh-hans": "预览加载中……",
      "zh-hant": "預覽載入中……"
    }),
    "Failed to load preview": (0, import_ext_gadget.localize)({
      "zh-hans": "预览加载失败",
      "zh-hant": "預覽載入失败"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/SpecialWikitext/modules/generateElements.tsx
var LOADER_IMAGE = "https://youshou.wiki/images/d/de/Ajax-loader.gif";
var FAIL_IMAGE = "https://youshou.wiki/wiki/File:%E7%9A%AE%E7%9A%AE%E6%B3%A8%E6%84%8F%E7%89%8C%EF%BC%88%E6%A9%99%EF%BC%89.svg";
var noticeLoadingElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: "specialwikitext__preview-loading",
  id: "specialwikitext__preview-loading"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: "specialwikitext__preview-loading-inner",
  id: "specialwikitext__preview-loading-inner"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: "specialwikitext__preview-loading-content",
  id: "specialwikitext__preview-loading-content"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
  src: LOADER_IMAGE,
  decoding: "async",
  width: "32",
  height: "32"
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, " ", getMessage("Loading preview")))));
var noticeFailElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
  src: FAIL_IMAGE,
  decoding: "async",
  width: "32",
  height: "32"
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, " ", getMessage("Failed to load preview")));
//! src/SpecialWikitext/SpecialWikitext.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var wikiTextKey = "_addText";
var luaAddText = (inputStr, newStr, _escape) => {
  let inputString = inputStr;
  if (newStr) {
    if (inputString !== "") {
      inputString += "\n";
    }
    let text = newStr;
    if (_escape) {
      const [escapeStr] = JSON.parse("[".concat(JSON.stringify(
        // Lua不支持\u、\x的跳脱符号；排除相关转换
        newStr.toString().replace(/\\([ux])/gi, "$1")
      ).replace(/\\\\/g, "\\"), "]"));
      text = escapeStr;
    }
    inputString += text;
  }
  return inputString;
};
var luaGetString = (str) => {
  const testStrArray = /[^\n]*\*\//.exec(str);
  let testStr;
  if (testStrArray) {
    testStr = testStrArray[0] || "";
    testStr = testStr.slice(0, Math.max(0, testStr.length - 2));
  } else {
    testStr = str;
  }
  const trimCheck = testStr.trim();
  const firstChar = trimCheck.charAt(0);
  if (firstChar === trimCheck.at(-1) && (firstChar === "'" || firstChar === '"')) {
    return trimCheck.slice(1, 1 + trimCheck.length - 2);
  }
  return testStr;
};
var luaGetContentText = (str) => {
  let wikitext = "";
  try {
    str.replace(new RegExp("".concat(wikiTextKey, "\\s*\\{[^c\\}]*content\\s*:\\s*[^\n]*"), "g"), (text) => {
      const tempText = (/content\s*:\s*[^\n]*/.exec(text) || ["content:"])[0].replace(/^[\s;}]+|[\s;}]+$/g, "").replace(/\s*content\s*:\s*/, "");
      if (wikitext !== "") {
        wikitext += "\n";
      }
      wikitext += luaGetString(tempText);
      return text;
    });
  } catch {
    return "";
  }
  return wikitext;
};
var luaGetObjText = (str) => {
  let wikitext = "";
  try {
    str.replace(new RegExp("".concat(wikiTextKey, "\\s*[\\=:]\\s*[^\n]*"), "g"), (text) => {
      const tempText = text.replace(/^[\s;}]+|[\s;}]+$/g, "").replace(new RegExp("".concat(wikiTextKey, "\\s*[\\=:]\\s*")), "");
      if (wikitext !== "") {
        wikitext += "\n";
      }
      wikitext += luaGetString(tempText);
      return text;
    });
  } catch {
    return "";
  }
  return wikitext;
};
var luaGetCSSwikitext = (inputStr) => {
  var _document$querySelect;
  let wikitext = "";
  const cssText = inputStr || ((_document$querySelect = document.querySelector("input[name=wpTextbox1]")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value) || "";
  if (!cssText.trim()) {
    return "";
  }
  wikitext = luaAddText(wikitext, luaGetContentText(cssText), true);
  wikitext = luaAddText(wikitext, luaGetObjText(cssText), true);
  return wikitext;
};
var luaGetJSwikitext = (inputStr) => {
  var _document$querySelect2;
  let wikitext = "";
  const jsText = inputStr || ((_document$querySelect2 = document.querySelector("input[name=wpTextbox1]")) === null || _document$querySelect2 === void 0 || (_document$querySelect2 = _document$querySelect2.value) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.toString()) || "";
  if (!jsText.trim()) {
    return "";
  }
  wikitext = luaAddText(wikitext, luaGetObjText(jsText), true);
  return wikitext;
};
var luaGetJSONwikitext = (inputStr) => {
  var _document$querySelect3;
  let wikitext = "";
  const JSONText = inputStr || ((_document$querySelect3 = document.querySelector("input[name=wpTextbox1]")) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.value) || "";
  if (!JSONText.trim()) {
    return "";
  }
  try {
    const jsonData = JSON.parse(JSONText.toString());
    for (var _i = 0, _Object$keys = Object.keys(jsonData); _i < _Object$keys.length; _i++) {
      const key = _Object$keys[_i];
      const v = jsonData[key];
      if (new RegExp(wikiTextKey).test(key) && typeof v === "string") {
        wikitext = luaAddText(wikitext, v);
      }
      if (typeof v !== "string") {
        for (const prop in v) {
          if (!Object.hasOwn(v, prop)) {
            continue;
          }
          const testArrV = v[prop];
          if (new RegExp(wikiTextKey).test(prop) && typeof testArrV === "string") {
            wikitext = luaAddText(wikitext, testArrV);
          }
        }
      }
    }
  } catch {
    return "";
  }
  return wikitext;
};
var luaCheck = (inputStr, contentModel) => {
  contentModel || (contentModel = mw.config.get("wgPageContentModel"));
  const contentModelToLowerCase = contentModel.toString().toLowerCase();
  inputStr || (inputStr = "");
  switch (contentModelToLowerCase) {
    case "json":
      return luaGetJSONwikitext(inputStr);
    case "js":
    case "javascript":
    case "text":
      return luaGetJSwikitext(inputStr);
    case "css":
    case "sanitized-css":
      return luaGetCSSwikitext(inputStr);
    default:
      return "";
  }
};
var previewTool = () => {
  const api = (0, import_ext_gadget3.initMwApi)("SpecialWikitext/1.1");
  const $noticeAddText = "{{Special_wikitext/notice}}";
  const noticeLoading = noticeLoadingElement();
  const noticeFail = noticeFailElement();
  const $elementExist = (selectors) => {
    const selectorArray = Array.isArray(selectors) ? selectors : selectors ? [selectors] : [];
    let eleCount = 0;
    const $body = $("body");
    var _iterator2 = _createForOfIteratorHelper(selectorArray), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const selector = _step2.value;
        const $selector = $body.find(selector);
        eleCount += $selector.length;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return eleCount > 0;
  };
  const checkMwConfig = (checkTarget, mwConfigs) => {
    let mwConfigData = mw.config.get(checkTarget);
    if (!mwConfigData || String(mwConfigData).trim() === "") {
      return false;
    }
    mwConfigData = String(mwConfigData).toLowerCase();
    const mwConfigArray = Array.isArray(mwConfigs) ? mwConfigs : mwConfigs ? [mwConfigs] : [];
    return mwConfigArray.includes(mwConfigData);
  };
  const getLanguage = () => {
    const lang = mw.config.get("wgUserLanguage");
    if (lang.includes("zh")) {
      return mw.config.get("wgUserVariant");
    }
    return lang;
  };
  const addParsedWikitext = (parsedWikitext) => {
    const $htmlObj = $().html(parsedWikitext);
    const $body = $("body");
    if ($elementExist("#specialwikitext__preview-loading")) {
      const $element = $body.find("#specialwikitext__preview-loading");
      $element.html(parsedWikitext);
      mw.hook("wikipage.content").fire($element);
    } else if ($elementExist(".diff-currentversion-title")) {
      $body.find(".diff-currentversion-title").append($htmlObj);
    } else if ($elementExist(".previewnote")) {
      $body.find(".previewnote").append($htmlObj);
    } else if ($elementExist(".mw-undelete-revision")) {
      $body.find(".mw-undelete-revision").append($htmlObj);
    } else if ($elementExist("#mw-content-text")) {
      $body.find("#mw-content-text").append($htmlObj);
    }
    mw.hook("wikipage.content").fire($htmlObj);
  };
  const setHtml = (selector, htmlContent) => {
    if ($elementExist(selector)) {
      $(selector).html(htmlContent);
    }
  };
  const addLoadingNotice = () => {
    if ($noticeAddText && noticeLoading) {
      addParsedWikitext(noticeLoading);
    }
  };
  const loadingFailNotice = () => {
    setHtml("#specialwikitext__preview-loading-content", noticeFail);
  };
  const removeLoadingNotice = () => {
    setHtml("#specialwikitext__preview-loading", "");
  };
  const needPreview = () => {
    return document.documentElement.innerHTML.search("_addText") > -1;
  };
  const mwAddWikiText = /* @__PURE__ */ function() {
    var _ref = _asyncToGenerator(function* (wikiText, pagename, isPreview) {
      if (wikiText.toString().trim() === "") {
        removeLoadingNotice();
      } else {
        const params = {
          action: "parse",
          prop: "text",
          format: "json",
          formatversion: "2",
          // 避免内容重复
          title: pagename,
          contentmodel: "wikitext",
          text: wikiText,
          uselang: getLanguage(),
          useskin: mw.config.get("skin")
        };
        if (isPreview) {
          params.preview = true;
          params.disableeditsection = true;
        }
        try {
          const data = yield api.post(params);
          if (!data || !data["parse"] || !data["parse"].text) {
            return;
          }
          const parsedWiki = (data["parse"].text || "").toString().trim();
          if (parsedWiki === "") {
            removeLoadingNotice();
          } else {
            addParsedWikitext(parsedWiki);
          }
        } catch {
          loadingFailNotice();
        }
      }
    });
    return function mwAddWikiText2(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  const mwAddLuaText = /* @__PURE__ */ function() {
    var _ref2 = _asyncToGenerator(function* (wikiText, pagename, isPreview, callBack) {
      const tempModuleName = "AddText/Temp/Module/Data.lua";
      const moduleCall = {
        wikitext: "#invoke:",
        // 分开来，避免被分到[[:Category:有脚本错误的页面]]
        pagename: "Module:"
      };
      if (wikiText.toString().trim() === "") {
        removeLoadingNotice();
      } else {
        try {
          const params = {
            action: "parse",
            prop: "text",
            format: "json",
            formatversion: "2",
            title: pagename,
            contentmodel: "wikitext",
            templatesandboxtitle: moduleCall.pagename + tempModuleName,
            // 产生临时Lua Module
            templatesandboxtext: "return{\n	main=function()\n		xpcall(function()\n			".concat(wikiText, `
		end,function()end)
		local moduleWikitext=package.loaded["Module:Module wikitext"]
		if moduleWikitext then
			local wikitext=moduleWikitext.main()
			if mw.text.trim(wikitext)~=''then
				return mw.getCurrentFrame():preprocess(moduleWikitext.main())
			end
		end
		return''
	end
}`),
            templatesandboxcontentmodel: "Scribunto",
            templatesandboxcontentformat: "text/plain",
            text: "{{".concat(moduleCall.wikitext).concat(tempModuleName, "|main}}"),
            uselang: getLanguage(),
            useskin: mw.config.get("skin")
          };
          if (isPreview) {
            params.preview = true;
            params.disableeditsection = true;
          }
          const data = yield api.post(params);
          if (!data || !data["parse"] || !data["parse"].text) {
            return;
          }
          const parsedWiki = (data["parse"].text || "").toString().trim();
          if (parsedWiki === "") {
            removeLoadingNotice();
          } else if ($(parsedWiki).find(".scribunto-error").text().search(tempModuleName) < 0) {
            if (callBack && typeof callBack === "function") {
              callBack(parsedWiki);
            } else {
              addParsedWikitext(parsedWiki);
            }
          } else {
            removeLoadingNotice();
          }
        } catch {
          loadingFailNotice();
        }
      }
    });
    return function mwAddLuaText2(_x4, _x5, _x6, _x7) {
      return _ref2.apply(this, arguments);
    };
  }();
  const mwApplyRevision = /* @__PURE__ */ function() {
    var _ref3 = _asyncToGenerator(function* (_revisionId, currentPageName) {
      try {
        const params = {
          // 本请求URL不太可能有长度超长的风险
          action: "parse",
          prop: "wikitext",
          format: "json",
          formatversion: "2",
          // get the original wikitext content of a page
          oldid: mw.config.get("wgRevisionId")
        };
        const data = yield api.get(params);
        if (!data || !data["parse"] || !data["parse"].wikitext) {
          return;
        }
        let pageContent = luaCheck((data["parse"].wikitext || "").toString().trim()) || "";
        pageContent = ($elementExist("#mw-clearyourcache") ? "{{#invoke:Special wikitext/Template|int|clearyourcache}}" : "") + pageContent.toString();
        if (pageContent.toString().trim() === "") {
          removeLoadingNotice();
        } else {
          void mwAddWikiText(pageContent, currentPageName, true);
        }
      } catch {
        removeLoadingNotice();
      }
    });
    return function mwApplyRevision2(_x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
  const mwApplyNotice = /* @__PURE__ */ function() {
    var _ref4 = _asyncToGenerator(function* (currentPageName, pageSubName) {
      try {
        const params = {
          action: "parse",
          prop: "text",
          format: "json",
          formatversion: "2",
          // get the original wikitext content of a page
          title: currentPageName + pageSubName,
          text: "{{#invoke:Special wikitext/Template|getNotices|".concat(currentPageName, "|").concat(pageSubName, "}}"),
          uselang: getLanguage(),
          useskin: mw.config.get("skin")
        };
        const data = yield api.post(params);
        if (!data || !data["parse"] || !data["parse"].text) {
          return;
        }
        const html = data["parse"].text;
        if ($(html.toString()).text().trim() !== "") {
          addParsedWikitext(html);
        }
      } catch {
      }
    });
    return function mwApplyNotice2(_x10, _x11) {
      return _ref4.apply(this, arguments);
    };
  }();
  const wikitextPreviewTestcase = /* @__PURE__ */ function() {
    var _ref5 = _asyncToGenerator(function* (isPreview) {
      if (!needPreview()) {
        return;
      }
      const testcaseList = document.querySelectorAll(".special-wikitext-preview-testcase");
      if (testcaseList.length <= 0) {
        return;
      }
      const testcaseDataList = [];
      let i;
      for (i = 0; i < testcaseList.length; ++i) {
        const testcaseItem = testcaseList[i];
        if (!testcaseItem) {
          continue;
        }
        const codeIt = $(testcaseItem).find(".mw-highlight");
        if (!codeIt.length) {
          continue;
        }
        const [codeIt0] = codeIt;
        if (!codeIt0) {
          continue;
        }
        const codeItClass = $(codeIt0).attr("class");
        if (!codeItClass) {
          continue;
        }
        const [, codeId] = /mw-highlight-lang-(\S+)/.exec(codeItClass) || [];
        const loadIndex = testcaseDataList.length;
        $(testcaseItem).attr("preview-id", loadIndex);
        testcaseDataList.push({
          element: testcaseItem,
          lang: codeId || "",
          code: codeIt.text().toString()
        });
      }
      let packageWikitext = "";
      for (var _i2 = 0, _Object$entries = Object.entries(testcaseDataList); _i2 < _Object$entries.length; _i2++) {
        const [_key, testcaseItem] = _Object$entries[_i2];
        if (testcaseItem.code.trim() === "") {
          continue;
        }
        const itemElement = testcaseItem.element;
        if (["javascript", "js", "css", "json", "text"].includes(testcaseItem.lang.toLowerCase())) {
          const addWiki = luaCheck(testcaseItem.code, testcaseItem.lang);
          if (addWiki.toString().trim() !== "" && itemElement) {
            $(itemElement).prepend(noticeLoading);
            packageWikitext += '<div class="special-wikitext-preview-testcase-'.concat(i, '">\n').concat(addWiki, "\n</div>");
          }
        } else if (["lua", "scribunto"].includes(testcaseItem.lang.toLowerCase())) {
          void mwAddLuaText(testcaseItem.code, mw.config.get("wgPageName"), isPreview, /* @__PURE__ */ (() => {
            return (wikitext) => {
              if (itemElement) {
                $(itemElement).prepend(wikitext);
              }
            };
          })());
        }
      }
      if (packageWikitext.trim() !== "") {
        packageWikitext = '<div class="special-wikitext-preview-testcase-undefined">'.concat(packageWikitext, "</div>");
        try {
          const params = {
            action: "parse",
            prop: "text",
            contentmodel: "wikitext",
            text: packageWikitext,
            format: "json",
            formatversion: "2"
          };
          if (isPreview) {
            params.preview = true;
            params.disableeditsection = true;
          }
          const data = yield api.post(params);
          if (!data || !data["parse"] || !data["parse"].text) {
            return;
          }
          const parsedWiki = (data["parse"].text || "").toString().trim();
          if (parsedWiki !== "") {
            const $parsedElement = $(parsedWiki);
            for (var _i3 = 0, _Object$entries2 = Object.entries(testcaseDataList); _i3 < _Object$entries2.length; _i3++) {
              const [key, testcaseItem] = _Object$entries2[_i3];
              if (testcaseItem && ["javascript", "js", "text", "css", "json"].includes(testcaseItem.lang.toLowerCase())) {
                const checkParseElement = $parsedElement.find(".special-wikitext-preview-testcase-undefined > .special-wikitext-preview-testcase-".concat(key));
                if (checkParseElement.length) {
                  const $addTarget = $(testcaseItem.element).find("#specialwikitext__preview-loading");
                  $addTarget.html(checkParseElement.html());
                  mw.hook("wikipage.content").fire($addTarget);
                }
              }
            }
          }
        } catch {
        }
      }
    });
    return function wikitextPreviewTestcase2(_x12) {
      return _ref5.apply(this, arguments);
    };
  }();
  const mwAddPreview = () => {
    const currentPageName = mw.config.get("wgPageName");
    const $body = $("body");
    if (checkMwConfig("wgPageContentModel", ["javascript", "js", "json", "text", "css", "sanitized-css"])) {
      if ($elementExist(".previewnote")) {
        var _mw$util$getUrl$match, _mw$util$getUrl$match2;
        const pathPath = decodeURI(mw.util.getUrl(currentPageName)).replace(new RegExp("^\\/?".concat((_mw$util$getUrl$match = (_mw$util$getUrl$match2 = mw.util.getUrl("").match(/[a-z]+/)) === null || _mw$util$getUrl$match2 === void 0 ? void 0 : _mw$util$getUrl$match2[0]) !== null && _mw$util$getUrl$match !== void 0 ? _mw$util$getUrl$match : "", "\\/")), "");
        if (pathPath !== currentPageName) {
          return;
        }
        const addWiki = luaCheck();
        if (addWiki.trim()) {
          addLoadingNotice();
          void mwAddWikiText(addWiki, currentPageName, true);
        }
      } else if (!$elementExist(".mw-_addText-content") && checkMwConfig("wgAction", "view")) {
        if (!needPreview()) {
          return;
        }
        if ($elementExist("#mw-clearyourcache")) {
          $body.find("#mw-clearyourcache").html("");
        }
        if (!$elementExist("input[name=wpTextbox1]")) {
          addLoadingNotice();
          void mwApplyRevision(mw.config.get("wgRevisionId"), currentPageName);
        }
      } else if ($elementExist("#mw-revision-info") && checkMwConfig("wgAction", "view")) {
        if (!$elementExist("input[name=wpTextbox1]")) {
          $body.find("#mw-clearyourcache").html(noticeLoading);
          void mwApplyRevision(mw.config.get("wgRevisionId"), currentPageName);
        }
      } else {
        removeLoadingNotice();
      }
    } else if (checkMwConfig("wgPageContentModel", ["scribunto", "lua"])) {
      if (!needPreview()) {
        return;
      }
      if ($elementExist("input[name=wpTextbox1]") && $elementExist("table.diff") && !$elementExist(".previewnote") && !checkMwConfig("wgAction", "view")) {
        $(noticeLoading).insertAfter("#wikiDiff");
        void mwAddLuaText(($body.find("input[name=wpTextbox1]").val() || "").toString(), currentPageName, true);
      }
    } else if ($elementExist(".mw-undelete-revision")) {
      if (!needPreview()) {
        return;
      }
      if ($elementExist([".mw-highlight", "pre", ".mw-json"])) {
        const $tryGetWiki = ($body.find("textarea").val() || "").toString();
        let tryAddWiki = luaGetJSONwikitext($tryGetWiki);
        if (tryAddWiki.trim() === "") {
          tryAddWiki = luaGetCSSwikitext($tryGetWiki);
        }
        if (tryAddWiki.trim() !== "") {
          addLoadingNotice();
          void mwAddWikiText(tryAddWiki, mw.config.get("wgRelevantPageName"), true);
        } else if (/module[ _]wikitext.*_addtext/i.test($body.find(".mw-parser-output").text())) {
        }
      }
    } else if (!$elementExist(".mw-editnotice") && checkMwConfig("wgCanonicalNamespace", "special")) {
      const pagename = mw.config.get("wgCanonicalSpecialPageName");
      const pageSubName = mw.config.get("wgPageName").replace(/special:[^/]+/i, "");
      if (pagename !== false && pagename !== null && pagename.toString().trim() !== "") {
        const fullpagename = "".concat(mw.config.get("wgCanonicalNamespace"), ":").concat(pagename);
        void mwApplyNotice(fullpagename, pageSubName);
      }
    } else {
      removeLoadingNotice();
    }
  };
  if (mw.config.get("wgIsSpecialWikitextPreview") !== true) {
    mw.config.set("wgIsSpecialWikitextPreview", true);
    mwAddPreview();
    void wikitextPreviewTestcase(true);
  }
};
$(previewTool);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9nZW5lcmF0ZUVsZW1lbnRzLnRzeCIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvaTE4bi50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L1NwZWNpYWxXaWtpdGV4dC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgY2hlY2sodHlwZW9mIHRoaXMgPT0gJ29iamVjdCcgJiYgdGhpcykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG4gIHZhciB0ZXN0ID0gKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSkuYmluZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xudmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICEkT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT09ICdTdHJpbmcnID8gc3BsaXQoaXQsICcnKSA6ICRPYmplY3QoaXQpO1xufSA6ICRPYmplY3Q7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gd2UgY2FuJ3QgdXNlIGp1c3QgYGl0ID09IG51bGxgIHNpbmNlIG9mIGBkb2N1bWVudC5hbGxgIHNwZWNpYWwgY2FzZVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdC1hZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gbnVsbCB8fCBpdCA9PT0gdW5kZWZpbmVkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3RcbnZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cbi8vIGBJc0NhbGxhYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdHlwZW9mLXVuZGVmaW5lZCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgZG9jdW1lbnRBbGwgPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRBbGwgIT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbicgfHwgYXJndW1lbnQgPT09IGRvY3VtZW50QWxsO1xufSA6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbic7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxbbmFtZXNwYWNlXSkgOiBnbG9iYWxbbmFtZXNwYWNlXSAmJiBnbG9iYWxbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgbmF2aWdhdG9yICE9ICd1bmRlZmluZWQnICYmIFN0cmluZyhuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAnJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWwuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgJiYgIVN5bWJvbC5zaGFtXG4gICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbCwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXNbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxuKHN0b3JlLnZlcnNpb25zIHx8IChzdG9yZS52ZXJzaW9ucyA9IFtdKSkucHVzaCh7XG4gIHZlcnNpb246ICczLjM2LjAnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTQtMjAyNCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KScsXG4gIGxpY2Vuc2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9ibG9iL3YzLjM2LjAvTElDRU5TRScsXG4gIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzJ1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgfHwge30pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdICYmIGdsb2JhbFtUQVJHRVRdLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLmRvbnRDYWxsR2V0U2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1pc2FycmF5IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XG4gIHJldHVybiBjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ0FycmF5Jztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBTYWZhcmkgPCAxMyBkb2VzIG5vdCB0aHJvdyBhbiBlcnJvciBpbiB0aGlzIGNhc2VcbnZhciBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPSBERVNDUklQVE9SUyAmJiAhZnVuY3Rpb24gKCkge1xuICAvLyBtYWtlcyBubyBzZW5zZSB3aXRob3V0IHByb3BlciBzdHJpY3QgbW9kZSBzdXBwb3J0XG4gIGlmICh0aGlzICE9PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLmxlbmd0aCA9IDE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID8gZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICBpZiAoaXNBcnJheShPKSAmJiAhZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sICdsZW5ndGgnKS53cml0YWJsZSkge1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKCdDYW5ub3Qgc2V0IHJlYWQgb25seSAubGVuZ3RoJyk7XG4gIH0gcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufSA6IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyAkVHlwZUVycm9yKCdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIHNldEFycmF5TGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNldC1sZW5ndGgnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBJTkNPUlJFQ1RfVE9fTEVOR1RIID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gW10ucHVzaC5jYWxsKHsgbGVuZ3RoOiAweDEwMDAwMDAwMCB9LCAxKSAhPT0gNDI5NDk2NzI5Nztcbn0pO1xuXG4vLyBWOCA8PSAxMjEgYW5kIFNhZmFyaSA8PSAxNS40OyBGRiA8IDIzIHRocm93cyBJbnRlcm5hbEVycm9yXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0xMjY4MVxudmFyIHByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5wdXNoKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59O1xuXG52YXIgRk9SQ0VEID0gSU5DT1JSRUNUX1RPX0xFTkdUSCB8fCAhcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoKCk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUucHVzaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5wdXNoXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgcHVzaDogZnVuY3Rpb24gcHVzaChpdGVtKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGFyZ0NvdW50ID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobGVuICsgYXJnQ291bnQpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJnQ291bnQ7IGkrKykge1xuICAgICAgT1tsZW5dID0gYXJndW1lbnRzW2ldO1xuICAgICAgbGVuKys7XG4gICAgfVxuICAgIHNldEFycmF5TGVuZ3RoKE8sIGxlbik7XG4gICAgcmV0dXJuIGxlbjtcbiAgfVxufSk7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBMT0FERVJfSU1BR0U6IHN0cmluZyA9ICdodHRwczovL3lvdXNob3Uud2lraS9pbWFnZXMvZC9kZS9BamF4LWxvYWRlci5naWYnO1xuY29uc3QgRkFJTF9JTUFHRTogc3RyaW5nID1cblx0J2h0dHBzOi8veW91c2hvdS53aWtpL3dpa2kvRmlsZTolRTclOUElQUUlRTclOUElQUUlRTYlQjMlQTglRTYlODQlOEYlRTclODklOEMlRUYlQkMlODglRTYlQTklOTklRUYlQkMlODkuc3ZnJztcblxuY29uc3Qgbm90aWNlTG9hZGluZ0VsZW1lbnQgPSAoKSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPXsnc3BlY2lhbHdpa2l0ZXh0X19wcmV2aWV3LWxvYWRpbmcnfSBpZD17J3NwZWNpYWx3aWtpdGV4dF9fcHJldmlldy1sb2FkaW5nJ30+XG5cdFx0PGRpdiBjbGFzc05hbWU9eydzcGVjaWFsd2lraXRleHRfX3ByZXZpZXctbG9hZGluZy1pbm5lcid9IGlkPXsnc3BlY2lhbHdpa2l0ZXh0X19wcmV2aWV3LWxvYWRpbmctaW5uZXInfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXsnc3BlY2lhbHdpa2l0ZXh0X19wcmV2aWV3LWxvYWRpbmctY29udGVudCd9IGlkPXsnc3BlY2lhbHdpa2l0ZXh0X19wcmV2aWV3LWxvYWRpbmctY29udGVudCd9PlxuXHRcdFx0XHQ8aW1nIHNyYz17TE9BREVSX0lNQUdFfSBkZWNvZGluZz1cImFzeW5jXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgLz5cblx0XHRcdFx0PHNwYW4+Jm5ic3A7e2dldE1lc3NhZ2UoJ0xvYWRpbmcgcHJldmlldycpfTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbik7XG5cbmNvbnN0IG5vdGljZUZhaWxFbGVtZW50ID0gKCkgPT4gKFxuXHQ8PlxuXHRcdDxpbWcgc3JjPXtGQUlMX0lNQUdFfSBkZWNvZGluZz1cImFzeW5jXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgLz5cblx0XHQ8c3Bhbj4mbmJzcDt7Z2V0TWVzc2FnZSgnRmFpbGVkIHRvIGxvYWQgcHJldmlldycpfTwvc3Bhbj5cblx0PC8+XG4pO1xuXG5leHBvcnQge25vdGljZUxvYWRpbmdFbGVtZW50LCBub3RpY2VGYWlsRWxlbWVudH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdMb2FkaW5nIHByZXZpZXcnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcgcHJldmlld+KApuKApicsXG5cdFx0XHQnemgtaGFucyc6ICfpooTop4jliqDovb3kuK3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn6aCQ6Ka96LyJ5YWl5Lit4oCm4oCmJyxcblx0XHR9KSxcblx0XHQnRmFpbGVkIHRvIGxvYWQgcHJldmlldyc6IGxvY2FsaXplKHtcblx0XHRcdCd6aC1oYW5zJzogJ+mihOiniOWKoOi9veWksei0pScsXG5cdFx0XHQnemgtaGFudCc6ICfpoJDopr3ovInlhaXlpLHotKUnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQgKi9cbmltcG9ydCB7bm90aWNlRmFpbEVsZW1lbnQsIG5vdGljZUxvYWRpbmdFbGVtZW50fSBmcm9tICcuL21vZHVsZXMvZ2VuZXJhdGVFbGVtZW50cyc7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuLyog6LefW1tNb2R1bGU6U3BlY2lhbCB3aWtpdGV4dF1d5L+d5oyB5LiA6Ie055qE5q616JC944CCICovXG5jb25zdCB3aWtpVGV4dEtleTogc3RyaW5nID0gJ19hZGRUZXh0JztcblxuLy8g5ZCI5bm25aSa5Liqd2lraXRleHTlrZfnrKbkuLLvvIzlubbku6XmjaLooYzliIbpmpRcbmNvbnN0IGx1YUFkZFRleHQgPSAoaW5wdXRTdHI6IHN0cmluZywgbmV3U3RyOiBzdHJpbmcsIF9lc2NhcGU/OiBib29sZWFuKTogc3RyaW5nID0+IHtcblx0bGV0IGlucHV0U3RyaW5nOiBzdHJpbmcgPSBpbnB1dFN0cjtcblx0aWYgKG5ld1N0cikge1xuXHRcdGlmIChpbnB1dFN0cmluZyAhPT0gJycpIHtcblx0XHRcdGlucHV0U3RyaW5nICs9ICdcXG4nO1xuXHRcdH1cblx0XHRsZXQgdGV4dDogc3RyaW5nID0gbmV3U3RyO1xuXHRcdGlmIChfZXNjYXBlKSB7XG5cdFx0XHRjb25zdCBbZXNjYXBlU3RyXSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdGBbJHtKU09OLnN0cmluZ2lmeShcblx0XHRcdFx0XHQvLyBMdWHkuI3mlK/mjIFcXHXjgIFcXHjnmoTot7PohLHnrKblj7fvvJvmjpLpmaTnm7jlhbPovazmjaJcblx0XHRcdFx0XHRuZXdTdHIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXFxcKFt1eF0pL2dpLCAnJDEnKVxuXHRcdFx0XHQpLnJlcGxhY2UoL1xcXFxcXFxcL2csICdcXFxcJyl9XWBcblx0XHRcdCk7XG5cdFx0XHR0ZXh0ID0gZXNjYXBlU3RyO1xuXHRcdH1cblx0XHRpbnB1dFN0cmluZyArPSB0ZXh0O1xuXHR9XG5cdHJldHVybiBpbnB1dFN0cmluZztcbn07XG5cbi8vIOivu+WPlndpa2l0ZXh05a2X56ym5Liy77yM5bm25b+955Wl5rOo6YeK5bC+6YOoXG5jb25zdCBsdWFHZXRTdHJpbmcgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCB0ZXN0U3RyQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSAvW15cXG5dKlxcKlxcLy8uZXhlYyhzdHIpO1xuXHRsZXQgdGVzdFN0cjogc3RyaW5nO1xuXHRpZiAodGVzdFN0ckFycmF5KSB7XG5cdFx0dGVzdFN0ciA9IHRlc3RTdHJBcnJheVswXSB8fCAnJztcblx0XHR0ZXN0U3RyID0gdGVzdFN0ci5zbGljZSgwLCBNYXRoLm1heCgwLCB0ZXN0U3RyLmxlbmd0aCAtIDIpKTtcblx0fSBlbHNlIHtcblx0XHR0ZXN0U3RyID0gc3RyO1xuXHR9XG5cdGNvbnN0IHRyaW1DaGVjazogc3RyaW5nID0gdGVzdFN0ci50cmltKCk7XG5cdGNvbnN0IGZpcnN0Q2hhcjogc3RyaW5nID0gdHJpbUNoZWNrLmNoYXJBdCgwKTtcblx0aWYgKGZpcnN0Q2hhciA9PT0gdHJpbUNoZWNrLmF0KC0xKSAmJiAoZmlyc3RDaGFyID09PSBcIidcIiB8fCBmaXJzdENoYXIgPT09ICdcIicpKSB7XG5cdFx0cmV0dXJuIHRyaW1DaGVjay5zbGljZSgxLCAxICsgdHJpbUNoZWNrLmxlbmd0aCAtIDIpO1xuXHR9XG5cdHJldHVybiB0ZXN0U3RyO1xufTtcblxuLy8g6K+75Y+WQ1NT5LmLYO+8v2FkZFRleHQgIHsgY29udGVudO+8mlwiWFhYXCIgfWDmqKHlvI/nmoTlrZfnrKbkuLJcbmNvbnN0IGx1YUdldENvbnRlbnRUZXh0ID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblx0dHJ5IHtcblx0XHRzdHIucmVwbGFjZShuZXcgUmVnRXhwKGAke3dpa2lUZXh0S2V5fVxcXFxzKlxcXFx7W15jXFxcXH1dKmNvbnRlbnRcXFxccyo6XFxcXHMqW15cXG5dKmAsICdnJyksICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0Y29uc3QgdGVtcFRleHQgPSAoL2NvbnRlbnRcXHMqOlxccypbXlxcbl0qLy5leGVjKHRleHQpIHx8IFsnY29udGVudDonXSlbMF1cblx0XHRcdFx0LnJlcGxhY2UoL15bXFxzO31dK3xbXFxzO31dKyQvZywgJycpXG5cdFx0XHRcdC5yZXBsYWNlKC9cXHMqY29udGVudFxccyo6XFxzKi8sICcnKTtcblx0XHRcdGlmICh3aWtpdGV4dCAhPT0gJycpIHtcblx0XHRcdFx0d2lraXRleHQgKz0gJ1xcbic7XG5cdFx0XHR9XG5cdFx0XHR3aWtpdGV4dCArPSBsdWFHZXRTdHJpbmcodGVtcFRleHQpO1xuXHRcdFx0cmV0dXJuIHRleHQ7XG5cdFx0fSk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHRyZXR1cm4gd2lraXRleHQ7XG59O1xuXG4vLyDor7vlj5blr7nosaHlrprkuYnmqKHlvI/kuLpg77y/YWRkVGV4dO+8nVhYWGDmiJZg77y/YWRkVGV4dO+8mlhYWGDmqKHlvI/nmoTlrZfnrKbkuLIgKOazqOmHiuS7peWFqOinkuWtl+espuS7o+abv++8jOmBv+WFjeiiq+aKk+WPlilcbmNvbnN0IGx1YUdldE9ialRleHQgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXHR0cnkge1xuXHRcdHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYCR7d2lraVRleHRLZXl9XFxcXHMqW1xcXFw9Ol1cXFxccypbXlxcbl0qYCwgJ2cnKSwgKHRleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRjb25zdCB0ZW1wVGV4dDogc3RyaW5nID0gdGV4dFxuXHRcdFx0XHQucmVwbGFjZSgvXltcXHM7fV0rfFtcXHM7fV0rJC9nLCAnJylcblx0XHRcdFx0LnJlcGxhY2UobmV3IFJlZ0V4cChgJHt3aWtpVGV4dEtleX1cXFxccypbXFxcXD06XVxcXFxzKmApLCAnJyk7XG5cdFx0XHRpZiAod2lraXRleHQgIT09ICcnKSB7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9ICdcXG4nO1xuXHRcdFx0fVxuXHRcdFx0d2lraXRleHQgKz0gbHVhR2V0U3RyaW5nKHRlbXBUZXh0KTtcblx0XHRcdHJldHVybiB0ZXh0O1xuXHRcdH0pO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0cmV0dXJuIHdpa2l0ZXh0O1xufTtcblxuLy8g5YiG5p6QQ1NT5Lit56ym5ZCI5p2h5Lu255qEd2lraXRleHRcbmNvbnN0IGx1YUdldENTU3dpa2l0ZXh0ID0gKGlucHV0U3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXHRjb25zdCBjc3NUZXh0OiBzdHJpbmcgPVxuXHRcdGlucHV0U3RyIHx8IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXdwVGV4dGJveDFdJykgYXMgSFRNTFRleHRBcmVhRWxlbWVudCk/LnZhbHVlIHx8ICcnO1xuXHRpZiAoIWNzc1RleHQudHJpbSgpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdC8vIOWMuemFjSDvvL9hZGRUZXh0IHsgY29udGVudO+8mlwiWFhYXCIgfSDmqKHlvI9cblx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCBsdWFHZXRDb250ZW50VGV4dChjc3NUZXh0KSwgdHJ1ZSk7XG5cdC8vIOWQjOaXtuS6puWMuemFjSAvKiDvvL9hZGRUZXh077yaWFhYICovIOaooeW8j1xuXHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIGx1YUdldE9ialRleHQoY3NzVGV4dCksIHRydWUpO1xuXHRyZXR1cm4gd2lraXRleHQ7XG59O1xuXG4vLyDliIbmnpBKYXZhU2NyaXB05Lit56ym5ZCI5p2h5Lu255qEd2lraXRleHRcbmNvbnN0IGx1YUdldEpTd2lraXRleHQgPSAoaW5wdXRTdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cdGNvbnN0IGpzVGV4dDogc3RyaW5nID1cblx0XHRpbnB1dFN0ciB8fCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT13cFRleHRib3gxXScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpPy52YWx1ZT8udG9TdHJpbmcoKSB8fCAnJztcblx0aWYgKCFqc1RleHQudHJpbSgpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdHdpa2l0ZXh0ID0gbHVhQWRkVGV4dCh3aWtpdGV4dCwgbHVhR2V0T2JqVGV4dChqc1RleHQpLCB0cnVlKTtcblx0cmV0dXJuIHdpa2l0ZXh0O1xufTtcblxuLy8g5YiG5p6QSlNPTuS4reespuWQiOadoeS7tueahHdpa2l0ZXh0XG5jb25zdCBsdWFHZXRKU09Od2lraXRleHQgPSAoaW5wdXRTdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cdGNvbnN0IEpTT05UZXh0OiBzdHJpbmcgPVxuXHRcdGlucHV0U3RyIHx8IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXdwVGV4dGJveDFdJykgYXMgSFRNTFRleHRBcmVhRWxlbWVudCk/LnZhbHVlIHx8ICcnO1xuXHRpZiAoIUpTT05UZXh0LnRyaW0oKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHR0cnkge1xuXHRcdGNvbnN0IGpzb25EYXRhID0gSlNPTi5wYXJzZShKU09OVGV4dC50b1N0cmluZygpKTtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhqc29uRGF0YSBhcyBvYmplY3QpKSB7XG5cdFx0XHRjb25zdCB2ID0ganNvbkRhdGFba2V5XTtcblx0XHRcdGlmIChuZXcgUmVnRXhwKHdpa2lUZXh0S2V5KS50ZXN0KGtleSkgJiYgdHlwZW9mIHYgPT09IHR5cGVvZiAnJykge1xuXHRcdFx0XHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIHYgYXMgc3RyaW5nKTtcblx0XHRcdH1cblx0XHRcdC8vIOiLpeaYr+aVsOe7hOWvueixoeS8muWkmuWMheS4gOWxglxuXHRcdFx0aWYgKHR5cGVvZiB2ICE9PSB0eXBlb2YgJycpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBwcm9wIGluIHYpIHtcblx0XHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24odiBhcyBvYmplY3QsIHByb3ApKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3QgdGVzdEFyclYgPSB2W3Byb3BdO1xuXHRcdFx0XHRcdGlmIChuZXcgUmVnRXhwKHdpa2lUZXh0S2V5KS50ZXN0KHByb3ApICYmIHR5cGVvZiB0ZXN0QXJyViA9PT0gdHlwZW9mICcnKSB7XG5cdFx0XHRcdFx0XHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIHRlc3RBcnJWIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0cmV0dXJuIHdpa2l0ZXh0O1xufTtcblxuLy8g5Yik5pat5piv5ZCm5Li6THVhXG5jb25zdCBsdWFDaGVjayA9IChpbnB1dFN0cj86IHN0cmluZywgY29udGVudE1vZGVsPzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0Ly8g5L2/55So6aG16Z2i5YaF5a655qih5Z6L5p2l5Yik5pat5qC85byPXG5cdGNvbnRlbnRNb2RlbCB8fD0gbXcuY29uZmlnLmdldCgnd2dQYWdlQ29udGVudE1vZGVsJyk7XG5cdGNvbnN0IGNvbnRlbnRNb2RlbFRvTG93ZXJDYXNlID0gY29udGVudE1vZGVsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcblx0aW5wdXRTdHIgfHw9ICcnO1xuXHQvLyDmoLnmja7mlofmoaPmoLzlvI/pgInnlKjpgILlvZPnmoTop6PmnpDmqKHlvI9cblx0c3dpdGNoIChjb250ZW50TW9kZWxUb0xvd2VyQ2FzZSkge1xuXHRcdGNhc2UgJ2pzb24nOlxuXHRcdFx0cmV0dXJuIGx1YUdldEpTT053aWtpdGV4dChpbnB1dFN0cik7XG5cdFx0Y2FzZSAnanMnOlxuXHRcdGNhc2UgJ2phdmFzY3JpcHQnOlxuXHRcdGNhc2UgJ3RleHQnOlxuXHRcdFx0cmV0dXJuIGx1YUdldEpTd2lraXRleHQoaW5wdXRTdHIpO1xuXHRcdGNhc2UgJ2Nzcyc6XG5cdFx0Y2FzZSAnc2FuaXRpemVkLWNzcyc6XG5cdFx0XHRyZXR1cm4gbHVhR2V0Q1NTd2lraXRleHQoaW5wdXRTdHIpO1xuXHRcdC8vIOiLpeS4jeaYr2pzb27jgIFqc+OAgWNzc+WImei/lOWbnuepuuWtl+espuS4slxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gJyc7XG5cdH1cbn07XG4vLyDmnKzooYzku6XkuIrnmoTnrpfms5Xor7fot59bW01vZHVsZTpTcGVjaWFsIHdpa2l0ZXh0XV3kv53mjIHkuIDoh7TjgIJcblxuLyog56iL5bqP5Li76KaB6YOo5YiGICovXG5jb25zdCBwcmV2aWV3VG9vbCA9ICgpOiB2b2lkID0+IHtcblx0Ly8g5ZCE57G75o+Q56S65paH5a2XXG5cdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdTcGVjaWFsV2lraXRleHQvMS4xJyk7XG5cdGNvbnN0ICRub3RpY2VBZGRUZXh0OiBzdHJpbmcgPSAne3tTcGVjaWFsX3dpa2l0ZXh0L25vdGljZX19Jztcblx0Ly8ge3tRdW90ZSBib3ggfHF1b3RlICA9IC17emgtaGFuczrpooTop4jliqDovb3kuK07emgtaGFudDrpoJDopr3ovInlhaXkuK07fS3igKbigKYgfHdpZHRoICA9IDUwJSB8YWxpZ24gID0gY2VudGVyfX1cblx0Y29uc3Qgbm90aWNlTG9hZGluZyA9IG5vdGljZUxvYWRpbmdFbGVtZW50KCk7XG5cdC8vIFtbRmlsZTpHbm9tZS1kaWFsb2ctd2FybmluZzIuc3ZnfDMycHhdXVxuXHQvLyAte3poLWhhbnM66aKE6KeI5Yqg6L295aSx6LSlO3poLWhhbnQ66aCQ6Ka96LyJ5YWl5aSx6LSlO30tXG5cdGNvbnN0IG5vdGljZUZhaWwgPSBub3RpY2VGYWlsRWxlbWVudCgpO1xuXHQvLyDmo4Dmn6Xlr7nlupRzZWxlY3RvcueahOe9kemhteWvueixoeaYr+WQpuWtmOWcqFxuXHRjb25zdCAkZWxlbWVudEV4aXN0ID0gKHNlbGVjdG9yczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0XHRjb25zdCBzZWxlY3RvckFycmF5OiBzdHJpbmdbXSA9IEFycmF5LmlzQXJyYXkoc2VsZWN0b3JzKSA/IHNlbGVjdG9ycyA6IHNlbGVjdG9ycyA/IFtzZWxlY3RvcnNdIDogW107XG5cdFx0bGV0IGVsZUNvdW50OiBudW1iZXIgPSAwO1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdGZvciAoY29uc3Qgc2VsZWN0b3Igb2Ygc2VsZWN0b3JBcnJheSkge1xuXHRcdFx0Y29uc3QgJHNlbGVjdG9yOiBKUXVlcnkgPSAkYm9keS5maW5kKHNlbGVjdG9yKTtcblx0XHRcdGVsZUNvdW50ICs9ICRzZWxlY3Rvci5sZW5ndGg7XG5cdFx0fVxuXHRcdHJldHVybiBlbGVDb3VudCA+IDA7XG5cdH07XG5cblx0Ly8g5qOA5p+lTWVkaWFXaWtp55qE6K6+572uXG5cdGNvbnN0IGNoZWNrTXdDb25maWcgPSAoY2hlY2tUYXJnZXQ6IHN0cmluZywgbXdDb25maWdzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRcdGxldCBtd0NvbmZpZ0RhdGEgPSBtdy5jb25maWcuZ2V0KGNoZWNrVGFyZ2V0KTtcblx0XHRpZiAoIW13Q29uZmlnRGF0YSB8fCBTdHJpbmcobXdDb25maWdEYXRhKS50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdG13Q29uZmlnRGF0YSA9IFN0cmluZyhtd0NvbmZpZ0RhdGEpLnRvTG93ZXJDYXNlKCk7XG5cdFx0Y29uc3QgbXdDb25maWdBcnJheTogc3RyaW5nW10gPSBBcnJheS5pc0FycmF5KG13Q29uZmlncykgPyBtd0NvbmZpZ3MgOiBtd0NvbmZpZ3MgPyBbbXdDb25maWdzXSA6IFtdO1xuXHRcdHJldHVybiBtd0NvbmZpZ0FycmF5LmluY2x1ZGVzKG13Q29uZmlnRGF0YSBhcyBzdHJpbmcpO1xuXHR9O1xuXG5cdGNvbnN0IGdldExhbmd1YWdlID0gKCk6IHN0cmluZyA9PiB7XG5cdFx0Y29uc3QgbGFuZzogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKTtcblx0XHRpZiAobGFuZy5pbmNsdWRlcygnemgnKSkge1xuXHRcdFx0cmV0dXJuIG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKSBhcyBzdHJpbmc7XG5cdFx0fVxuXHRcdHJldHVybiBsYW5nO1xuXHR9O1xuXG5cdC8vIOWwhuino+aekOWQjueahHdpa2l0ZXh05Yqg5YWl6aG16Z2i5LitXG5cdGNvbnN0IGFkZFBhcnNlZFdpa2l0ZXh0ID0gKHBhcnNlZFdpa2l0ZXh0OiBzdHJpbmcgfCBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0ICRodG1sT2JqID0gJCgpLmh0bWwocGFyc2VkV2lraXRleHQpO1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdGlmICgkZWxlbWVudEV4aXN0KCcjc3BlY2lhbHdpa2l0ZXh0X19wcmV2aWV3LWxvYWRpbmcnKSkge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNzcGVjaWFsd2lraXRleHRfX3ByZXZpZXctbG9hZGluZycpO1xuXHRcdFx0JGVsZW1lbnQuaHRtbChwYXJzZWRXaWtpdGV4dCk7XG5cdFx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkZWxlbWVudCk7XG5cdFx0fSBlbHNlIGlmICgkZWxlbWVudEV4aXN0KCcuZGlmZi1jdXJyZW50dmVyc2lvbi10aXRsZScpKSB7XG5cdFx0XHQkYm9keS5maW5kKCcuZGlmZi1jdXJyZW50dmVyc2lvbi10aXRsZScpLmFwcGVuZCgkaHRtbE9iaik7XG5cdFx0fSBlbHNlIGlmICgkZWxlbWVudEV4aXN0KCcucHJldmlld25vdGUnKSkge1xuXHRcdFx0JGJvZHkuZmluZCgnLnByZXZpZXdub3RlJykuYXBwZW5kKCRodG1sT2JqKTtcblx0XHR9IGVsc2UgaWYgKCRlbGVtZW50RXhpc3QoJy5tdy11bmRlbGV0ZS1yZXZpc2lvbicpKSB7XG5cdFx0XHQkYm9keS5maW5kKCcubXctdW5kZWxldGUtcmV2aXNpb24nKS5hcHBlbmQoJGh0bWxPYmopO1xuXHRcdH0gZWxzZSBpZiAoJGVsZW1lbnRFeGlzdCgnI213LWNvbnRlbnQtdGV4dCcpKSB7XG5cdFx0XHQkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0JykuYXBwZW5kKCRodG1sT2JqKTtcblx0XHR9XG5cdFx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmZpcmUoJGh0bWxPYmopO1xuXHR9O1xuXG5cdC8vIOiLpee9kemhteWvueixoeWtmOWcqO+8jOWImeaUueWKqOWFtmh0bWzlhoXlrrlcblx0Y29uc3Qgc2V0SHRtbCA9IChzZWxlY3Rvcjogc3RyaW5nLCBodG1sQ29udGVudDogc3RyaW5nIHwgSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblx0XHRpZiAoJGVsZW1lbnRFeGlzdChzZWxlY3RvcikpIHtcblx0XHRcdCQoc2VsZWN0b3IpLmh0bWwoaHRtbENvbnRlbnQpO1xuXHRcdH1cblx0fTtcblxuXHQvLyDliqDlhaXigJxb6L295YWl5LitXeKAneeahOaPkOekulxuXHRjb25zdCBhZGRMb2FkaW5nTm90aWNlID0gKCk6IHZvaWQgPT4ge1xuXHRcdGlmICgkbm90aWNlQWRkVGV4dCAmJiBub3RpY2VMb2FkaW5nKSB7XG5cdFx0XHRhZGRQYXJzZWRXaWtpdGV4dChub3RpY2VMb2FkaW5nIGFzIEhUTUxFbGVtZW50KTtcblx0XHR9XG5cdH07XG5cblx0Ly8g6L295YWl6ZSZ6K+v55qE5o+Q56S6XG5cdGNvbnN0IGxvYWRpbmdGYWlsTm90aWNlID0gKCk6IHZvaWQgPT4ge1xuXHRcdHNldEh0bWwoJyNzcGVjaWFsd2lraXRleHRfX3ByZXZpZXctbG9hZGluZy1jb250ZW50Jywgbm90aWNlRmFpbCBhcyBIVE1MRWxlbWVudCk7XG5cdH07XG5cblx0Ly8g56e76Zmk4oCcW+i9veWFpeS4rV3igJ3nmoTmj5DnpLpcblx0Y29uc3QgcmVtb3ZlTG9hZGluZ05vdGljZSA9ICgpOiB2b2lkID0+IHtcblx0XHRzZXRIdG1sKCcjc3BlY2lhbHdpa2l0ZXh0X19wcmV2aWV3LWxvYWRpbmcnLCAnJyk7XG5cdH07XG5cblx0Ly8g5qOA5p+l5piv5ZCm5pyJ6aKE6KeI55qE5b+F6KaB5oCnXG5cdGNvbnN0IG5lZWRQcmV2aWV3ID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaW5uZXJIVE1MLnNlYXJjaCgnX2FkZFRleHQnKSA+IC0xO1xuXHR9O1xuXG5cdC8vIOWKoOWFpemihOiniOWGheWuuVxuXHRjb25zdCBtd0FkZFdpa2lUZXh0ID0gYXN5bmMgKHdpa2lUZXh0OiBzdHJpbmcsIHBhZ2VuYW1lOiBzdHJpbmcsIGlzUHJldmlldzogYm9vbGVhbikgPT4ge1xuXHRcdGlmICh3aWtpVGV4dC50b1N0cmluZygpLnRyaW0oKSA9PT0gJycpIHtcblx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdC8vIOmBv+WFjeWGheWuuemHjeWkjVxuXHRcdFx0XHR0aXRsZTogcGFnZW5hbWUsXG5cdFx0XHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRcdFx0dGV4dDogd2lraVRleHQsXG5cdFx0XHRcdHVzZWxhbmc6IGdldExhbmd1YWdlKCksXG5cdFx0XHRcdHVzZXNraW46IG13LmNvbmZpZy5nZXQoJ3NraW4nKSxcblx0XHRcdH07XG5cdFx0XHRpZiAoaXNQcmV2aWV3KSB7XG5cdFx0XHRcdHBhcmFtcy5wcmV2aWV3ID0gdHJ1ZTtcblx0XHRcdFx0cGFyYW1zLmRpc2FibGVlZGl0c2VjdGlvbiA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblx0XHRcdFx0aWYgKCFkYXRhIHx8ICFkYXRhWydwYXJzZSddIHx8ICFkYXRhWydwYXJzZSddLnRleHQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcGFyc2VkV2lraSA9ICgoZGF0YVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZyB8IG51bGwpIHx8ICcnKS50b1N0cmluZygpLnRyaW0oKTtcblx0XHRcdFx0aWYgKHBhcnNlZFdpa2kgPT09ICcnKSB7XG5cdFx0XHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFkZFBhcnNlZFdpa2l0ZXh0KHBhcnNlZFdpa2kpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0bG9hZGluZ0ZhaWxOb3RpY2UoKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Ly8g5Yqg5YWl6aKE6KeI55qETHVh5YaF5a65XG5cdGNvbnN0IG13QWRkTHVhVGV4dCA9IGFzeW5jIChcblx0XHR3aWtpVGV4dDogc3RyaW5nLFxuXHRcdHBhZ2VuYW1lOiBzdHJpbmcsXG5cdFx0aXNQcmV2aWV3OiBib29sZWFuLFxuXHRcdGNhbGxCYWNrPzogKGFyZzA6IHN0cmluZykgPT4gSlF1ZXJ5IHwgSFRNTEVsZW1lbnQgfCB2b2lkXG5cdCkgPT4ge1xuXHRcdGNvbnN0IHRlbXBNb2R1bGVOYW1lOiBzdHJpbmcgPSAnQWRkVGV4dC9UZW1wL01vZHVsZS9EYXRhLmx1YSc7XG5cdFx0Y29uc3QgbW9kdWxlQ2FsbDoge1xuXHRcdFx0d2lraXRleHQ6IHN0cmluZztcblx0XHRcdHBhZ2VuYW1lOiBzdHJpbmc7XG5cdFx0fSA9IHtcblx0XHRcdHdpa2l0ZXh0OiAnI2ludm9rZTonLFxuXHRcdFx0Ly8g5YiG5byA5p2l77yM6YG/5YWN6KKr5YiG5YiwW1s6Q2F0ZWdvcnk65pyJ6ISa5pys6ZSZ6K+v55qE6aG16Z2iXV1cblx0XHRcdHBhZ2VuYW1lOiAnTW9kdWxlOicsXG5cdFx0fTtcblx0XHRpZiAod2lraVRleHQudG9TdHJpbmcoKS50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0dGl0bGU6IHBhZ2VuYW1lLFxuXHRcdFx0XHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3h0aXRsZTogbW9kdWxlQ2FsbC5wYWdlbmFtZSArIHRlbXBNb2R1bGVOYW1lLFxuXHRcdFx0XHRcdC8vIOS6p+eUn+S4tOaXtkx1YSBNb2R1bGVcblx0XHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3h0ZXh0OiBgcmV0dXJue1xcblxcdG1haW49ZnVuY3Rpb24oKVxcblxcdFxcdHhwY2FsbChmdW5jdGlvbigpXFxuXFx0XFx0XFx0JHt3aWtpVGV4dH1cXG5cXHRcXHRlbmQsZnVuY3Rpb24oKWVuZClcXG5cXHRcXHRsb2NhbCBtb2R1bGVXaWtpdGV4dD1wYWNrYWdlLmxvYWRlZFtcIk1vZHVsZTpNb2R1bGUgd2lraXRleHRcIl1cXG5cXHRcXHRpZiBtb2R1bGVXaWtpdGV4dCB0aGVuXFxuXFx0XFx0XFx0bG9jYWwgd2lraXRleHQ9bW9kdWxlV2lraXRleHQubWFpbigpXFxuXFx0XFx0XFx0aWYgbXcudGV4dC50cmltKHdpa2l0ZXh0KX49Jyd0aGVuXFxuXFx0XFx0XFx0XFx0cmV0dXJuIG13LmdldEN1cnJlbnRGcmFtZSgpOnByZXByb2Nlc3MobW9kdWxlV2lraXRleHQubWFpbigpKVxcblxcdFxcdFxcdGVuZFxcblxcdFxcdGVuZFxcblxcdFxcdHJldHVybicnXFxuXFx0ZW5kXFxufWAsXG5cdFx0XHRcdFx0dGVtcGxhdGVzYW5kYm94Y29udGVudG1vZGVsOiAnU2NyaWJ1bnRvJyxcblx0XHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3hjb250ZW50Zm9ybWF0OiAndGV4dC9wbGFpbicsXG5cdFx0XHRcdFx0dGV4dDogYHt7JHttb2R1bGVDYWxsLndpa2l0ZXh0fSR7dGVtcE1vZHVsZU5hbWV9fG1haW59fWAsXG5cdFx0XHRcdFx0dXNlbGFuZzogZ2V0TGFuZ3VhZ2UoKSxcblx0XHRcdFx0XHR1c2Vza2luOiBtdy5jb25maWcuZ2V0KCdza2luJyksXG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmIChpc1ByZXZpZXcpIHtcblx0XHRcdFx0XHRwYXJhbXMucHJldmlldyA9IHRydWU7XG5cdFx0XHRcdFx0cGFyYW1zLmRpc2FibGVlZGl0c2VjdGlvbiA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cdFx0XHRcdGlmICghZGF0YSB8fCAhZGF0YVsncGFyc2UnXSB8fCAhZGF0YVsncGFyc2UnXS50ZXh0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHBhcnNlZFdpa2kgPSAoKGRhdGFbJ3BhcnNlJ10udGV4dCBhcyBzdHJpbmcgfCBudWxsKSB8fCAnJykudG9TdHJpbmcoKS50cmltKCk7XG5cdFx0XHRcdGlmIChwYXJzZWRXaWtpID09PSAnJykge1xuXHRcdFx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHRcdFx0XHQvLyDoi6Xlh7rplJnlnKjov5nkuKrkuLTml7bmqKHlnZfkuK3liJnlj5bmtohcblx0XHRcdFx0fSBlbHNlIGlmICgkKHBhcnNlZFdpa2kpLmZpbmQoJy5zY3JpYnVudG8tZXJyb3InKS50ZXh0KCkuc2VhcmNoKHRlbXBNb2R1bGVOYW1lKSA8IDApIHtcblx0XHRcdFx0XHRpZiAoY2FsbEJhY2sgJiYgdHlwZW9mIGNhbGxCYWNrID09PSB0eXBlb2YgKCgpOiB2b2lkID0+IHt9KSkge1xuXHRcdFx0XHRcdFx0Y2FsbEJhY2socGFyc2VkV2lraSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGFkZFBhcnNlZFdpa2l0ZXh0KHBhcnNlZFdpa2kpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRsb2FkaW5nRmFpbE5vdGljZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvLyDku47pobXpnaLlvZPliY3ljoblj7LniYjmnKzlj5blh7ogX2FkZFRleHRcblx0Y29uc3QgbXdBcHBseVJldmlzaW9uID0gYXN5bmMgKF9yZXZpc2lvbklkOiBudW1iZXIsIGN1cnJlbnRQYWdlTmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRcdC8vIOacrOivt+axglVSTOS4jeWkquWPr+iDveaciemVv+W6pui2hemVv+eahOmjjumZqVxuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdHByb3A6ICd3aWtpdGV4dCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdC8vIGdldCB0aGUgb3JpZ2luYWwgd2lraXRleHQgY29udGVudCBvZiBhIHBhZ2Vcblx0XHRcdFx0b2xkaWQ6IG13LmNvbmZpZy5nZXQoJ3dnUmV2aXNpb25JZCcpLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7IC8vIOiLpeWPluW+lyBfYWRkVGV4dCDliJnmmL7npLrpooTop4hcblx0XHRcdGlmICghZGF0YSB8fCAhZGF0YVsncGFyc2UnXSB8fCAhZGF0YVsncGFyc2UnXS53aWtpdGV4dCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgcGFnZUNvbnRlbnQ6IHN0cmluZyA9XG5cdFx0XHRcdGx1YUNoZWNrKCgoZGF0YVsncGFyc2UnXS53aWtpdGV4dCBhcyBzdHJpbmcgfCBudWxsKSB8fCAnJykudG9TdHJpbmcoKS50cmltKCkpIHx8ICcnO1xuXHRcdFx0cGFnZUNvbnRlbnQgPVxuXHRcdFx0XHQoJGVsZW1lbnRFeGlzdCgnI213LWNsZWFyeW91cmNhY2hlJylcblx0XHRcdFx0XHQ/ICd7eyNpbnZva2U6U3BlY2lhbCB3aWtpdGV4dC9UZW1wbGF0ZXxpbnR8Y2xlYXJ5b3VyY2FjaGV9fSdcblx0XHRcdFx0XHQ6ICcnKSArIHBhZ2VDb250ZW50LnRvU3RyaW5nKCk7XG5cdFx0XHRpZiAocGFnZUNvbnRlbnQudG9TdHJpbmcoKS50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZvaWQgbXdBZGRXaWtpVGV4dChwYWdlQ29udGVudCwgY3VycmVudFBhZ2VOYW1lLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHR9XG5cdH07XG5cblx0Ly8g5Yqg5YWl57yW6L6R5o+Q56S677yI6Iul5a2Y5Zyo77yJXG5cdGNvbnN0IG13QXBwbHlOb3RpY2UgPSBhc3luYyAoY3VycmVudFBhZ2VOYW1lOiBzdHJpbmcsIHBhZ2VTdWJOYW1lOiBzdHJpbmcpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdC8vIGdldCB0aGUgb3JpZ2luYWwgd2lraXRleHQgY29udGVudCBvZiBhIHBhZ2Vcblx0XHRcdFx0dGl0bGU6IGN1cnJlbnRQYWdlTmFtZSArIHBhZ2VTdWJOYW1lLFxuXHRcdFx0XHR0ZXh0OiBge3sjaW52b2tlOlNwZWNpYWwgd2lraXRleHQvVGVtcGxhdGV8Z2V0Tm90aWNlc3wke2N1cnJlbnRQYWdlTmFtZX18JHtwYWdlU3ViTmFtZX19fWAsXG5cdFx0XHRcdHVzZWxhbmc6IGdldExhbmd1YWdlKCksXG5cdFx0XHRcdHVzZXNraW46IG13LmNvbmZpZy5nZXQoJ3NraW4nKSxcblx0XHRcdH07XG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblx0XHRcdGlmICghZGF0YSB8fCAhZGF0YVsncGFyc2UnXSB8fCAhZGF0YVsncGFyc2UnXS50ZXh0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGh0bWw6IHN0cmluZyA9IGRhdGFbJ3BhcnNlJ10udGV4dDtcblx0XHRcdGlmICgkKGh0bWwudG9TdHJpbmcoKSkudGV4dCgpLnRyaW0oKSAhPT0gJycpIHtcblx0XHRcdFx0YWRkUGFyc2VkV2lraXRleHQoaHRtbCk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9O1xuXG5cdC8qIOa1i+ivleagt+S+iyAqL1xuXHQvLyDmnKzohJrmnKznmoRUZXN0Y2FzZeaooeW8j1xuXHRjb25zdCB3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSA9IGFzeW5jIChpc1ByZXZpZXc6IGJvb2xlYW4pID0+IHtcblx0XHQvLyDmsqHmnInlj6/pooTop4jlhYPntKDvvIzpgIDlh7rjgIJcblx0XHRpZiAoIW5lZWRQcmV2aWV3KCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgdGVzdGNhc2VMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZScpO1xuXHRcdC8vIOiLpemhtemdouS4reayoeaciVRlc3RjYXNl77yM6YCA5Ye644CCXG5cdFx0aWYgKHRlc3RjYXNlTGlzdC5sZW5ndGggPD0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyDmlLbpm4bkvY3kuo7pobXpnaLkuK3nmoRUZXN0Y2FzZemihOiniOWFg+e0oFxuXHRcdGNvbnN0IHRlc3RjYXNlRGF0YUxpc3Q6IHtcblx0XHRcdGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkO1xuXHRcdFx0bGFuZzogc3RyaW5nO1xuXHRcdFx0Y29kZTogc3RyaW5nO1xuXHRcdH1bXSA9IFtdO1xuXHRcdGxldCBpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB0ZXN0Y2FzZUxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdGNvbnN0IHRlc3RjYXNlSXRlbTogRWxlbWVudCB8IHVuZGVmaW5lZCA9IHRlc3RjYXNlTGlzdFtpXTtcblx0XHRcdGlmICghdGVzdGNhc2VJdGVtKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY29kZUl0OiBKUXVlcnkgPSAkKHRlc3RjYXNlSXRlbSBhcyBIVE1MRWxlbWVudCkuZmluZCgnLm13LWhpZ2hsaWdodCcpO1xuXHRcdFx0aWYgKCFjb2RlSXQubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgW2NvZGVJdDBdID0gY29kZUl0O1xuXHRcdFx0aWYgKCFjb2RlSXQwKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY29kZUl0Q2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICQoY29kZUl0MCkuYXR0cignY2xhc3MnKTtcblx0XHRcdGlmICghY29kZUl0Q2xhc3MpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IFssIGNvZGVJZF0gPSAvbXctaGlnaGxpZ2h0LWxhbmctKFxcUyspLy5leGVjKGNvZGVJdENsYXNzKSB8fCBbXTtcblx0XHRcdGNvbnN0IGxvYWRJbmRleDogbnVtYmVyID0gdGVzdGNhc2VEYXRhTGlzdC5sZW5ndGg7XG5cdFx0XHQkKHRlc3RjYXNlSXRlbSBhcyBIVE1MRWxlbWVudCkuYXR0cigncHJldmlldy1pZCcsIGxvYWRJbmRleCk7XG5cdFx0XHR0ZXN0Y2FzZURhdGFMaXN0LnB1c2goe1xuXHRcdFx0XHRlbGVtZW50OiB0ZXN0Y2FzZUl0ZW0gYXMgSFRNTEVsZW1lbnQsXG5cdFx0XHRcdGxhbmc6IGNvZGVJZCB8fCAnJyxcblx0XHRcdFx0Y29kZTogY29kZUl0LnRleHQoKS50b1N0cmluZygpLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8g5pW055CG6aG16Z2i5Lit55qEVGVzdGNhc2XpooTop4jlhYPntKDvvIzlubbmlL7nva7igJxb6L295YWl5LitXeKAnea2iOaBr1xuXHRcdGxldCBwYWNrYWdlV2lraXRleHQgPSAnJztcblx0XHRmb3IgKGNvbnN0IFtfa2V5LCB0ZXN0Y2FzZUl0ZW1dIG9mIE9iamVjdC5lbnRyaWVzKHRlc3RjYXNlRGF0YUxpc3QpKSB7XG5cdFx0XHRpZiAodGVzdGNhc2VJdGVtLmNvZGUudHJpbSgpID09PSAnJykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGl0ZW1FbGVtZW50OiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCA9IHRlc3RjYXNlSXRlbS5lbGVtZW50O1xuXHRcdFx0aWYgKFsnamF2YXNjcmlwdCcsICdqcycsICdjc3MnLCAnanNvbicsICd0ZXh0J10uaW5jbHVkZXModGVzdGNhc2VJdGVtLmxhbmcudG9Mb3dlckNhc2UoKSkpIHtcblx0XHRcdFx0Y29uc3QgYWRkV2lraTogc3RyaW5nID0gbHVhQ2hlY2sodGVzdGNhc2VJdGVtLmNvZGUsIHRlc3RjYXNlSXRlbS5sYW5nKTtcblx0XHRcdFx0aWYgKGFkZFdpa2kudG9TdHJpbmcoKS50cmltKCkgIT09ICcnICYmIGl0ZW1FbGVtZW50KSB7XG5cdFx0XHRcdFx0Ly8g6Iul6Kej5p6Q57uT5p6c6Z2e56m65omN5pS+572u6aKE6KeIXG5cdFx0XHRcdFx0JChpdGVtRWxlbWVudCkucHJlcGVuZChub3RpY2VMb2FkaW5nKTtcblx0XHRcdFx0XHRwYWNrYWdlV2lraXRleHQgKz0gYDxkaXYgY2xhc3M9XCJzcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UtJHtpfVwiPlxcbiR7YWRkV2lraX1cXG48L2Rpdj5gO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKFsnbHVhJywgJ3NjcmlidW50byddLmluY2x1ZGVzKHRlc3RjYXNlSXRlbS5sYW5nLnRvTG93ZXJDYXNlKCkpKSB7XG5cdFx0XHRcdHZvaWQgbXdBZGRMdWFUZXh0KFxuXHRcdFx0XHRcdHRlc3RjYXNlSXRlbS5jb2RlLFxuXHRcdFx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdFx0XHRpc1ByZXZpZXcsXG5cdFx0XHRcdFx0KCgpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAod2lraXRleHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbUVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdFx0XHQkKGl0ZW1FbGVtZW50KS5wcmVwZW5kKHdpa2l0ZXh0KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9KSgpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8g5bCG5pW055CG5a6M55qEVGVzdGNhc2XpooTop4jlhYPntKDnu5/kuIDlj5HpgIFBUEnor7fmsYLvvIzlubblsIbov5Tlm57nu5PmnpzliIblj5HliLDlkIRUZXN0Y2FzZVxuXHRcdGlmIChwYWNrYWdlV2lraXRleHQudHJpbSgpICE9PSAnJykge1xuXHRcdFx0cGFja2FnZVdpa2l0ZXh0ID0gYDxkaXYgY2xhc3M9XCJzcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UtdW5kZWZpbmVkXCI+JHtwYWNrYWdlV2lraXRleHR9PC9kaXY+YDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdFx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0XHRcdFx0dGV4dDogcGFja2FnZVdpa2l0ZXh0LFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKGlzUHJldmlldykge1xuXHRcdFx0XHRcdHBhcmFtcy5wcmV2aWV3ID0gdHJ1ZTtcblx0XHRcdFx0XHRwYXJhbXMuZGlzYWJsZWVkaXRzZWN0aW9uID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblx0XHRcdFx0aWYgKCFkYXRhIHx8ICFkYXRhWydwYXJzZSddIHx8ICFkYXRhWydwYXJzZSddLnRleHQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcGFyc2VkV2lraSA9ICgoZGF0YVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZyB8IG51bGwpIHx8ICcnKS50b1N0cmluZygpLnRyaW0oKTtcblx0XHRcdFx0aWYgKHBhcnNlZFdpa2kgIT09ICcnKSB7XG5cdFx0XHRcdFx0Y29uc3QgJHBhcnNlZEVsZW1lbnQ6IEpRdWVyeSA9ICQocGFyc2VkV2lraSk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBba2V5LCB0ZXN0Y2FzZUl0ZW1dIG9mIE9iamVjdC5lbnRyaWVzKHRlc3RjYXNlRGF0YUxpc3QpKSB7XG5cdFx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRcdHRlc3RjYXNlSXRlbSAmJlxuXHRcdFx0XHRcdFx0XHRbJ2phdmFzY3JpcHQnLCAnanMnLCAndGV4dCcsICdjc3MnLCAnanNvbiddLmluY2x1ZGVzKHRlc3RjYXNlSXRlbS5sYW5nLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgY2hlY2tQYXJzZUVsZW1lbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD4gPSAkcGFyc2VkRWxlbWVudC5maW5kKFxuXHRcdFx0XHRcdFx0XHRcdGAuc3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlLXVuZGVmaW5lZCA+IC5zcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UtJHtrZXl9YFxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY2hlY2tQYXJzZUVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGFkZFRhcmdldDogSlF1ZXJ5ID0gJChcblx0XHRcdFx0XHRcdFx0XHRcdHRlc3RjYXNlSXRlbS5lbGVtZW50IGFzIE5vbk51bGxhYmxlPHR5cGVvZiB0ZXN0Y2FzZUl0ZW0uZWxlbWVudD5cblx0XHRcdFx0XHRcdFx0XHQpLmZpbmQoJyNzcGVjaWFsd2lraXRleHRfX3ByZXZpZXctbG9hZGluZycpO1xuXHRcdFx0XHRcdFx0XHRcdCRhZGRUYXJnZXQuaHRtbChjaGVja1BhcnNlRWxlbWVudC5odG1sKCkpO1xuXHRcdFx0XHRcdFx0XHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5maXJlKCRhZGRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9O1xuXG5cdC8qIOeoi+W6j+i/m+WFpeeCuSAqL1xuXHQvLyDnu5npobXpnaLmt7vliqDpooTop4hcblx0Y29uc3QgbXdBZGRQcmV2aWV3ID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGN1cnJlbnRQYWdlTmFtZTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdC8vIOmihOiniOaooeW8j+WPqumAgueUqOS6juS7peS4i+mhtemdouWGheWuueaooeWei1xuXHRcdGlmIChjaGVja013Q29uZmlnKCd3Z1BhZ2VDb250ZW50TW9kZWwnLCBbJ2phdmFzY3JpcHQnLCAnanMnLCAnanNvbicsICd0ZXh0JywgJ2NzcycsICdzYW5pdGl6ZWQtY3NzJ10pKSB7XG5cdFx0XHQvLyDmqKHlvI8x77ya6aG16Z2i6aKE6KeIXG5cdFx0XHRpZiAoJGVsZW1lbnRFeGlzdCgnLnByZXZpZXdub3RlJykpIHtcblx0XHRcdFx0Ly8g5qOA5p+l5piv5ZCm5Li66aKE6KeI5qih5byPXG5cdFx0XHRcdC8vIOmihOiniOacieWPr+iDveaYr+WcqOmihOiniOWFtuS7luadoeebrlxuXHRcdFx0XHRjb25zdCBwYXRoUGF0aDogc3RyaW5nID0gZGVjb2RlVVJJKG13LnV0aWwuZ2V0VXJsKGN1cnJlbnRQYWdlTmFtZSkpLnJlcGxhY2UoXG5cdFx0XHRcdFx0bmV3IFJlZ0V4cChgXlxcXFwvPyR7bXcudXRpbC5nZXRVcmwoJycpLm1hdGNoKC9bYS16XSsvKT8uWzBdID8/ICcnfVxcXFwvYCksXG5cdFx0XHRcdFx0Jydcblx0XHRcdFx0KTtcblxuXHRcdFx0XHQvLyDoi6XpooTop4jnmoTpobXpnaLlubbpnZ7mnKzouqvvvIzliJnkuI3mmL7npLrpooTop4hcblx0XHRcdFx0aWYgKHBhdGhQYXRoICE9PSBjdXJyZW50UGFnZU5hbWUpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBhZGRXaWtpOiBzdHJpbmcgPSBsdWFDaGVjaygpO1xuXHRcdFx0XHRpZiAoYWRkV2lraS50cmltKCkpIHtcblx0XHRcdFx0XHQvLyDoi6Xop6PmnpDnu5PmnpzpnZ7nqbrmiY3mlL7nva7pooTop4hcblx0XHRcdFx0XHRhZGRMb2FkaW5nTm90aWNlKCk7IC8vIOaUvue9ruaPkOekuu+8jOaPkOekuuS9v+eUqOiAheetieW+hUFKQVhcblx0XHRcdFx0XHR2b2lkIG13QWRkV2lraVRleHQoYWRkV2lraSwgY3VycmVudFBhZ2VOYW1lLCB0cnVlKTsgLy8g6Iul5Y+W5b6XIF9hZGRUZXh0IOWImeaYvuekuumihOiniFxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCEkZWxlbWVudEV4aXN0KCcubXctX2FkZFRleHQtY29udGVudCcpICYmIGNoZWNrTXdDb25maWcoJ3dnQWN0aW9uJywgJ3ZpZXcnKSkge1xuXHRcdFx0XHQvLyDmqKHlvI8y77ya5LiN5pSv5oyB5pi+56S655qE54m55q6K6aG16Z2iXG5cdFx0XHRcdC8vIOe7j+afpe+8jOS4jeatouaYr+aooeadv+agt+W8j++8jOaJgOacieacquW1jOWFpScjbXctY2xlYXJ5b3VyY2FjaGUn55qE6aG16Z2i55qG5peg5rOV5q2j5bi45pi+56S6XG5cdFx0XHRcdGlmICghbmVlZFByZXZpZXcoKSkge1xuXHRcdFx0XHRcdHJldHVybjsgLy8g5rKh5pyJ6aKE6KeI5b+F6KaB5pe277yM55u05o6l5YGc5q2i56iL5bqP77yM5LiN57un57ut5Yik5pat77yM5Lul5o+Q6auY5pWI546HXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCRlbGVtZW50RXhpc3QoJyNtdy1jbGVhcnlvdXJjYWNoZScpKSB7XG5cdFx0XHRcdFx0Ly8g6Iul5bey5pyJI213LWNsZWFyeW91cmNhY2hl5YiZ5YWI5riF5o6J77yM5ZCm5YiZ5Lya5Ye6546w5Lik5LiqTWVkaWFXaWtpOkNsZWFyeW91cmNhY2hlXG5cdFx0XHRcdFx0JGJvZHkuZmluZCgnI213LWNsZWFyeW91cmNhY2hlJykuaHRtbCgnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCEkZWxlbWVudEV4aXN0KCdpbnB1dFtuYW1lPXdwVGV4dGJveDFdJykpIHtcblx0XHRcdFx0XHQvLyDpnZ7nvJbovpHmqKHlvI/miY3miafooYwgKOmihOiniOS9v+eUqOS4iuaWueeahGlm5Yy65Z2XKVxuXHRcdFx0XHRcdGFkZExvYWRpbmdOb3RpY2UoKTsgLy8g5pS+572u5o+Q56S677yM5o+Q56S65L2/55So6ICF562J5b6FQUpBWFxuXHRcdFx0XHRcdHZvaWQgbXdBcHBseVJldmlzaW9uKG13LmNvbmZpZy5nZXQoJ3dnUmV2aXNpb25JZCcpLCBjdXJyZW50UGFnZU5hbWUpOyAvLyDkuLrkuoborqnljoblj7LniYjmnKzmraPluLjmmL7npLrvvIzkvb/nlKh3Z1JldmlzaW9uSWTlj5blvpflhoXlrrlcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICgkZWxlbWVudEV4aXN0KCcjbXctcmV2aXNpb24taW5mbycpICYmIGNoZWNrTXdDb25maWcoJ3dnQWN0aW9uJywgJ3ZpZXcnKSkge1xuXHRcdFx0XHQvLyDmqKHlvI8z77ya6aG16Z2i5Y6G5Y+y54mI5pys5qOA6KeG77ya5aaC6ZyA5aSN5p+l55qE6aG555uu5Li66aG16Z2i5Y6G5Y+y54mI5pys77yM5pys5bel5YW35o+Q5L6b6aG16Z2i5Y6G5Y+y54mI5pys5YaF5a655pi+56S65pSv5oyBXG5cdFx0XHRcdC8vIOacieW1jOWFpScjbXctY2xlYXJ5b3VyY2FjaGUn55qE6aG16Z2i55qE5Y6G5Y+y54mI5pys5Lya5Y+q6IO95pi+56S65pyA5paw54mI55qEIF9hZGRUZXh0IOWboOatpOaJp+ihjOS/ruato1xuXHRcdFx0XHRpZiAoISRlbGVtZW50RXhpc3QoJ2lucHV0W25hbWU9d3BUZXh0Ym94MV0nKSkge1xuXHRcdFx0XHRcdC8vIOmdnue8lui+keaooeW8j+aJjeaJp+ihjCAo6aKE6KeI5L2/55So5LiK5pa555qEaWbljLrlnZcpXG5cdFx0XHRcdFx0JGJvZHkuZmluZCgnI213LWNsZWFyeW91cmNhY2hlJykuaHRtbChub3RpY2VMb2FkaW5nKTsgLy8g5beu5byC5qih5byP77yI5ZCr5qOA6ZiF5L+u6K6i54mI5pys5Yig6Zmk77yJ55qE5o+S5YWl54K55LiN5ZCMXG5cdFx0XHRcdFx0dm9pZCBtd0FwcGx5UmV2aXNpb24obXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyksIGN1cnJlbnRQYWdlTmFtZSk7IC8vIOS4uuS6huiuqeeJueWumueJiOacrOato+W4uOaYvuekuu+8jOS9v+eUqHdnUmV2aXNpb25JZOWPluW+l+WGheWuuVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChjaGVja013Q29uZmlnKCd3Z1BhZ2VDb250ZW50TW9kZWwnLCBbJ3NjcmlidW50bycsICdsdWEnXSkpIHtcblx0XHRcdC8vIOaooeWdl+mihOiniOWKn+iDvVxuXHRcdFx0aWYgKCFuZWVkUHJldmlldygpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8g5rKh5pyJ6aKE6KeI5b+F6KaB5pe277yM55u05o6l5YGc5q2i56iL5bqP77yM5LiN57un57ut5Yik5pat77yM5Lul5o+Q6auY5pWI546HXG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCRlbGVtZW50RXhpc3QoJ2lucHV0W25hbWU9d3BUZXh0Ym94MV0nKSAmJlxuXHRcdFx0XHQkZWxlbWVudEV4aXN0KCd0YWJsZS5kaWZmJykgJiZcblx0XHRcdFx0ISRlbGVtZW50RXhpc3QoJy5wcmV2aWV3bm90ZScpICYmXG5cdFx0XHRcdCFjaGVja013Q29uZmlnKCd3Z0FjdGlvbicsICd2aWV3Jylcblx0XHRcdCkge1xuXHRcdFx0XHQkKG5vdGljZUxvYWRpbmcpLmluc2VydEFmdGVyKCcjd2lraURpZmYnKTtcblx0XHRcdFx0dm9pZCBtd0FkZEx1YVRleHQoKCRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BUZXh0Ym94MV0nKS52YWwoKSB8fCAnJykudG9TdHJpbmcoKSwgY3VycmVudFBhZ2VOYW1lLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCRlbGVtZW50RXhpc3QoJy5tdy11bmRlbGV0ZS1yZXZpc2lvbicpKSB7XG5cdFx0XHQvLyDmqKHlvI8077ya5bey5Yig6aG16Z2i6aKE6KeIXG5cdFx0XHQvLyDlt7LliKDlhoXlrrnpobXpnaLmmK/nibnmrorpobXpnaLvvIzml6Dms5XnlKjluLjop4TmlrnlvI/liKTmlq3pobXpnaLlhoXlrrnmqKHlnotcblx0XHRcdGlmICghbmVlZFByZXZpZXcoKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIOayoeaciemihOiniOW/heimgeaXtu+8jOebtOaOpeWBnOatoueoi+W6j++8jOS4jee7p+e7reWIpOaWre+8jOS7peaPkOmrmOaViOeOh1xuXHRcdFx0fVxuXHRcdFx0aWYgKCRlbGVtZW50RXhpc3QoWycubXctaGlnaGxpZ2h0JywgJ3ByZScsICcubXctanNvbiddKSkge1xuXHRcdFx0XHQvLyDnoa7orqTmraPlnKjpooTop4jlt7LliKDlhoXlrrlcblx0XHRcdFx0Y29uc3QgJHRyeUdldFdpa2kgPSAoJGJvZHkuZmluZCgndGV4dGFyZWEnKS52YWwoKSB8fCAnJykudG9TdHJpbmcoKTsgLy8g5bCd6K+V5Y+W5b6X5bey5Yig5YaF5a655rqQ5Luj56CBXG5cdFx0XHRcdGxldCB0cnlBZGRXaWtpOiBzdHJpbmcgPSBsdWFHZXRKU09Od2lraXRleHQoJHRyeUdldFdpa2kpO1xuXHRcdFx0XHRpZiAodHJ5QWRkV2lraS50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRcdFx0dHJ5QWRkV2lraSA9IGx1YUdldENTU3dpa2l0ZXh0KCR0cnlHZXRXaWtpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodHJ5QWRkV2lraS50cmltKCkgIT09ICcnKSB7XG5cdFx0XHRcdFx0Ly8g6Iul5Y+W5b6XIF9hZGRUZXh0IOWImeaYvuekuumihOiniFxuXHRcdFx0XHRcdGFkZExvYWRpbmdOb3RpY2UoKTtcblx0XHRcdFx0XHR2b2lkIG13QWRkV2lraVRleHQodHJ5QWRkV2lraSwgbXcuY29uZmlnLmdldCgnd2dSZWxldmFudFBhZ2VOYW1lJyksIHRydWUpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKC9tb2R1bGVbIF9dd2lraXRleHQuKl9hZGR0ZXh0L2kudGVzdCgkYm9keS5maW5kKCcubXctcGFyc2VyLW91dHB1dCcpLnRleHQoKSkpIHtcblx0XHRcdFx0XHQvLyDlsJ3or5VMdWHop6PmnpBcblx0XHRcdFx0XHQvLyDmnKzlip/og73nm67liY3mtYvor5XmraPluLjov5DkvZxcblx0XHRcdFx0XHQvLyDoi6Xlk6rlpKnpooTop4jlj4jlpLHmlYjvvIzor7flj5bmtojms6jph4rkuIvmlrnpgqPooYxcblx0XHRcdFx0XHQvLyBtd0FkZEx1YVRleHQoJHRyeUdldFdpa2ksIG13LmNvbmZpZy5nZXQoXCJ3Z1JlbGV2YW50UGFnZU5hbWVcIiksIHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICghJGVsZW1lbnRFeGlzdCgnLm13LWVkaXRub3RpY2UnKSAmJiBjaGVja013Q29uZmlnKCd3Z0Nhbm9uaWNhbE5hbWVzcGFjZScsICdzcGVjaWFsJykpIHtcblx0XHRcdC8vIOiLpeeJueauiumhtemdoue8uuS5j+e8lui+keaPkOekuu+8jOWImeihpeS4iue8lui+keaPkOekuiAo6Iul5a2Y5ZyoKVxuXHRcdFx0Y29uc3QgcGFnZW5hbWU6IHN0cmluZyB8IGZhbHNlID0gbXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUnKTtcblx0XHRcdGNvbnN0IHBhZ2VTdWJOYW1lOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvc3BlY2lhbDpbXi9dKy9pLCAnJyk7XG5cdFx0XHRpZiAocGFnZW5hbWUgIT09IGZhbHNlICYmIHBhZ2VuYW1lICE9PSBudWxsICYmIHBhZ2VuYW1lLnRvU3RyaW5nKCkudHJpbSgpICE9PSAnJykge1xuXHRcdFx0XHRjb25zdCBmdWxscGFnZW5hbWU6IHN0cmluZyA9IGAke213LmNvbmZpZy5nZXQoJ3dnQ2Fub25pY2FsTmFtZXNwYWNlJyl9OiR7cGFnZW5hbWV9YDtcblx0XHRcdFx0dm9pZCBtd0FwcGx5Tm90aWNlKGZ1bGxwYWdlbmFtZSwgcGFnZVN1Yk5hbWUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7IC8vIOmDveS4jeaYr+eahOaDheWGteWImeS4jeaYvuekuumihOiniFxuXHRcdH1cblx0fTtcblxuXHRpZiAobXcuY29uZmlnLmdldCgnd2dJc1NwZWNpYWxXaWtpdGV4dFByZXZpZXcnKSAhPT0gdHJ1ZSkge1xuXHRcdC8vIOS4gOmhteWPqui3keS4gOasoemihOiniFxuXHRcdC8vIOmBv+WFjeWwj+W3peWFt+mHjeWkjeWuieijheWGkuWHuuS4gOWkp+WghumihOiniFxuXHRcdC8vIOagh+iusOmihOiniOW3sui3kei/h1xuXHRcdG13LmNvbmZpZy5zZXQoJ3dnSXNTcGVjaWFsV2lraXRleHRQcmV2aWV3JywgdHJ1ZSk7XG5cdFx0Ly8g5omn6KGM6aKE6KeIXG5cdFx0bXdBZGRQcmV2aWV3KCk7XG5cdFx0Ly8g5qOA5p+l5rWL6K+V5qC35L6LXG5cdFx0dm9pZCB3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSh0cnVlKTtcblx0fVxufTtcblxuJChwcmV2aWV3VG9vbCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLHdGQUFBQSxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ25DO0FBR0EsSUFBQUEsUUFBTztBQUFBLElBRUwsTUFBTSxPQUFPLGNBQWMsWUFBWSxVQUFVLEtBQ2pELE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTTtBQUFBLElBRXpDLE1BQU0sT0FBTyxRQUFRLFlBQVksSUFBSSxLQUNyQyxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sS0FDekMsTUFBTSxPQUFPLFdBQVEsWUFBWSxPQUFJO0FBQUEsSUFFcEMsMkJBQVk7QUFBRSxhQUFPO0FBQUEsSUFBTSxFQUFHLEtBQUssU0FBUyxhQUFhLEVBQUU7QUFBQTtBQUFBOzs7QUNmOUQ7QUFBQSx1RkFBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVLFNBQVUsTUFBTTtBQUMvQixVQUFJO0FBQ0YsZUFBTyxDQUFDLENBQUMsS0FBSztBQUFBLE1BQ2hCLFNBQVMs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SSw4QkFBOEIsSUFBSTtBQUVoRGIsaUJBQWE7QUFFYixTQUFLOUIsd0JBQXdCLElBQUk7RUFDbEM7QUFDRDtBQUVBekYsRUFBRWIsV0FBVzsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlN5bWJvbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZG9jdW1lbnQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiVHlwZUVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIiQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkxPQURFUl9JTUFHRSIsICJGQUlMX0lNQUdFIiwgIm5vdGljZUxvYWRpbmdFbGVtZW50IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiaWQiLCAic3JjIiwgImRlY29kaW5nIiwgIndpZHRoIiwgImhlaWdodCIsICJub3RpY2VGYWlsRWxlbWVudCIsICJGcmFnbWVudCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAid2lraVRleHRLZXkiLCAibHVhQWRkVGV4dCIsICJpbnB1dFN0ciIsICJuZXdTdHIiLCAiX2VzY2FwZSIsICJpbnB1dFN0cmluZyIsICJ0ZXh0IiwgImVzY2FwZVN0ciIsICJKU09OIiwgInBhcnNlIiwgImNvbmNhdCIsICJzdHJpbmdpZnkiLCAidG9TdHJpbmciLCAicmVwbGFjZSIsICJsdWFHZXRTdHJpbmciLCAic3RyIiwgInRlc3RTdHJBcnJheSIsICJleGVjIiwgInRlc3RTdHIiLCAic2xpY2UiLCAiTWF0aCIsICJtYXgiLCAibGVuZ3RoIiwgInRyaW1DaGVjayIsICJ0cmltIiwgImZpcnN0Q2hhciIsICJjaGFyQXQiLCAiYXQiLCAibHVhR2V0Q29udGVudFRleHQiLCAid2lraXRleHQiLCAiUmVnRXhwIiwgInRlbXBUZXh0IiwgImx1YUdldE9ialRleHQiLCAibHVhR2V0Q1NTd2lraXRleHQiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgImNzc1RleHQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJ2YWx1ZSIsICJsdWFHZXRKU3dpa2l0ZXh0IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDIiLCAianNUZXh0IiwgImx1YUdldEpTT053aWtpdGV4dCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QzIiwgIkpTT05UZXh0IiwgImpzb25EYXRhIiwgIl9pIiwgIl9PYmplY3Qka2V5cyIsICJPYmplY3QiLCAia2V5cyIsICJ2IiwgInRlc3QiLCAicHJvcCIsICJoYXNPd24iLCAidGVzdEFyclYiLCAibHVhQ2hlY2siLCAiY29udGVudE1vZGVsIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY29udGVudE1vZGVsVG9Mb3dlckNhc2UiLCAidG9Mb3dlckNhc2UiLCAicHJldmlld1Rvb2wiLCAiYXBpIiwgImluaXRNd0FwaSIsICIkbm90aWNlQWRkVGV4dCIsICJub3RpY2VMb2FkaW5nIiwgIm5vdGljZUZhaWwiLCAiJGVsZW1lbnRFeGlzdCIsICJzZWxlY3RvcnMiLCAic2VsZWN0b3JBcnJheSIsICJBcnJheSIsICJpc0FycmF5IiwgImVsZUNvdW50IiwgIiRib2R5IiwgIiQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAic2VsZWN0b3IiLCAiJHNlbGVjdG9yIiwgImZpbmQiLCAiZXJyIiwgImUiLCAiZiIsICJjaGVja013Q29uZmlnIiwgImNoZWNrVGFyZ2V0IiwgIm13Q29uZmlncyIsICJtd0NvbmZpZ0RhdGEiLCAiU3RyaW5nIiwgIm13Q29uZmlnQXJyYXkiLCAiaW5jbHVkZXMiLCAiZ2V0TGFuZ3VhZ2UiLCAibGFuZyIsICJhZGRQYXJzZWRXaWtpdGV4dCIsICJwYXJzZWRXaWtpdGV4dCIsICIkaHRtbE9iaiIsICJodG1sIiwgIiRlbGVtZW50IiwgImhvb2siLCAiZmlyZSIsICJhcHBlbmQiLCAic2V0SHRtbCIsICJodG1sQ29udGVudCIsICJhZGRMb2FkaW5nTm90aWNlIiwgImxvYWRpbmdGYWlsTm90aWNlIiwgInJlbW92ZUxvYWRpbmdOb3RpY2UiLCAibmVlZFByZXZpZXciLCAiZG9jdW1lbnRFbGVtZW50IiwgImlubmVySFRNTCIsICJzZWFyY2giLCAibXdBZGRXaWtpVGV4dCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIndpa2lUZXh0IiwgInBhZ2VuYW1lIiwgImlzUHJldmlldyIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInRpdGxlIiwgImNvbnRlbnRtb2RlbCIsICJ1c2VsYW5nIiwgInVzZXNraW4iLCAicHJldmlldyIsICJkaXNhYmxlZWRpdHNlY3Rpb24iLCAiZGF0YSIsICJwb3N0IiwgInBhcnNlZFdpa2kiLCAiX3giLCAiX3gyIiwgIl94MyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAibXdBZGRMdWFUZXh0IiwgIl9yZWYyIiwgImNhbGxCYWNrIiwgInRlbXBNb2R1bGVOYW1lIiwgIm1vZHVsZUNhbGwiLCAidGVtcGxhdGVzYW5kYm94dGl0bGUiLCAidGVtcGxhdGVzYW5kYm94dGV4dCIsICJ0ZW1wbGF0ZXNhbmRib3hjb250ZW50bW9kZWwiLCAidGVtcGxhdGVzYW5kYm94Y29udGVudGZvcm1hdCIsICJfeDQiLCAiX3g1IiwgIl94NiIsICJfeDciLCAibXdBcHBseVJldmlzaW9uIiwgIl9yZWYzIiwgIl9yZXZpc2lvbklkIiwgImN1cnJlbnRQYWdlTmFtZSIsICJvbGRpZCIsICJwYWdlQ29udGVudCIsICJfeDgiLCAiX3g5IiwgIm13QXBwbHlOb3RpY2UiLCAiX3JlZjQiLCAicGFnZVN1Yk5hbWUiLCAiX3gxMCIsICJfeDExIiwgIndpa2l0ZXh0UHJldmlld1Rlc3RjYXNlIiwgIl9yZWY1IiwgInRlc3RjYXNlTGlzdCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInRlc3RjYXNlRGF0YUxpc3QiLCAiaSIsICJ0ZXN0Y2FzZUl0ZW0iLCAiY29kZUl0IiwgImNvZGVJdDAiLCAiY29kZUl0Q2xhc3MiLCAiYXR0ciIsICJjb2RlSWQiLCAibG9hZEluZGV4IiwgInB1c2giLCAiZWxlbWVudCIsICJjb2RlIiwgInBhY2thZ2VXaWtpdGV4dCIsICJfaTIiLCAiX09iamVjdCRlbnRyaWVzIiwgImVudHJpZXMiLCAiX2tleSIsICJpdGVtRWxlbWVudCIsICJhZGRXaWtpIiwgInByZXBlbmQiLCAiJHBhcnNlZEVsZW1lbnQiLCAiX2kzIiwgIl9PYmplY3QkZW50cmllczIiLCAiY2hlY2tQYXJzZUVsZW1lbnQiLCAiJGFkZFRhcmdldCIsICJfeDEyIiwgIm13QWRkUHJldmlldyIsICJfbXckdXRpbCRnZXRVcmwkbWF0Y2giLCAiX213JHV0aWwkZ2V0VXJsJG1hdGNoMiIsICJwYXRoUGF0aCIsICJkZWNvZGVVUkkiLCAidXRpbCIsICJnZXRVcmwiLCAibWF0Y2giLCAiaW5zZXJ0QWZ0ZXIiLCAidmFsIiwgIiR0cnlHZXRXaWtpIiwgInRyeUFkZFdpa2kiLCAiZnVsbHBhZ2VuYW1lIiwgInNldCJdCn0K
