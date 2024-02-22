/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=HotCat|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-HotCat.js}
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-HotCat.js/zh-hans}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-HotCat.js/local_defaults}
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/HotCat}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=CheckCategories HotCat Extension|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Hotcatcheck.js}
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/HotCat/HotCat-check.js}
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

// dist/HotCat/HotCat.js
require_es_array_push();
var _mw$config$get;
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
//! src/HotCat/modules/check.ts
var import_ext_gadget = require("ext.gadget.Util");
(function hotCatCheck() {
  if (mw.config.get("wgNamespaceNumber") !== 6 || window.HotCatAutoRemoveCheckCatOptOut || !document.querySelectorAll(".checkcategories")[0]) {
    return;
  }
  const api = (0, import_ext_gadget.initMwApi)("hotCatCheck/2.0");
  const checkCategoriesRegExp = /{{[Cc]heck[ _]categories[^{}]*}}/g;
  const selfName = "([[MediaWiki:Gadget-HotCat-check.js|Script]]): ";
  const storageItemName = "checkCat";
  const storageItem = mw.storage.get(storageItemName);
  const createjIcon = (iconClass) => {
    return $("<span>").attr("class", "ui-icon ".concat(iconClass, " catcheck-inline-icon")).text(" ");
  };
  const createNotifyArea = (textNode, icon, state) => {
    return $("<div>").addClass("ui-widget").append($("<div>").attr("class", "".concat(state, " ui-corner-all")).css({
      "margin-top": "20px",
      padding: "0.7em"
    }).append($("<p>").append(createjIcon(icon).css("marginRight", "0.3em"), textNode)));
  };
  $("body").one("submit.checkCatListener", "#hotcatCommitForm", function(e) {
    var _self$wpTextbox1$valu;
    if (storageItem === "disabled") {
      return true;
    }
    const self2 = this;
    const newVal = (_self$wpTextbox1$valu = self2.wpTextbox1.value) === null || _self$wpTextbox1$valu === void 0 ? void 0 : _self$wpTextbox1$valu.replace(checkCategoriesRegExp, "");
    const dlgButtons = {};
    let $dialogCheckStorage;
    let $permaSaveHint;
    let $textHintNode;
    let $dialog;
    const doRemove = () => {
      self2.wpSummary.value = "Removing [[Template:Check categories|{".concat("{Check categories}}]] ".concat(self2.wpSummary.value));
      self2.wpTextbox1.value = newVal;
    };
    const writeStorage = (val) => {
      mw.storage.set(storageItemName, val, 604800);
    };
    dlgButtons["Yes, Remove"] = function() {
      var _$dialogCheckStorage$;
      doRemove();
      if ((_$dialogCheckStorage$ = $dialogCheckStorage[0]) !== null && _$dialogCheckStorage$ !== void 0 && _$dialogCheckStorage$.checked) {
        writeStorage("auto");
      }
      $(this).dialog("close");
    };
    dlgButtons["No, keep it"] = function() {
      var _$dialogCheckStorage$2;
      if ((_$dialogCheckStorage$2 = $dialogCheckStorage[0]) !== null && _$dialogCheckStorage$2 !== void 0 && _$dialogCheckStorage$2.checked) {
        writeStorage("disabled");
      }
      $(this).dialog("close");
    };
    const _addToJS = function(_e) {
      _e.preventDefault();
      if ($permaSaveHint.hasClass("ui-state-disabled")) {
        return;
      }
      const $el = $(this);
      $el.off("click").text("Please wait.");
      $permaSaveHint.addClass("ui-state-disabled");
      const params = {
        action: "edit",
        title: "User:".concat(mw.config.get("wgUserName"), "/common.js"),
        summary: "".concat(selfName, "Saving HotCat configuration."),
        appendtext: $el.data("addText")
      };
      const editDone = (editStat) => {
        if (!editStat) {
          return;
        }
        if (editStat.error) {
          void mw.notify("Unable to save to your common.js using the API\n".concat(editStat.error.code, "\n").concat(editStat.error.info), {
            tag: "hotCatCheck",
            type: "error"
          });
          $el.text("Edit-Error!");
        } else {
          $el.text("Done.");
          $permaSaveHint.fadeOut();
        }
      };
      void api.postWithToken("csrf", params).then(editDone);
    };
    const prompt = () => {
      $dialogCheckStorage = $("<input>").attr({
        type: "checkbox",
        id: "hotCatAutoRemoveCheckCatStorage"
      }).on("change", function() {
        if (this.checked) {
          $permaSaveHint.fadeIn();
        } else {
          $permaSaveHint.fadeOut();
        }
      });
      $textHintNode = $("<ul>");
      $("<li>").append($("<a>").attr("href", "#").text("Disable this feature.").data("addText", "\nwindow.HotCatAutoRemoveCheckCatOptOut = true;").on("click", _addToJS)).appendTo($textHintNode);
      $("<li>").append($("<a>").attr("href", "#").text("Remove {{check categories}} when editing using HotCat without prompting.").data("addText", "\nwindow.HotCatAutoRemoveCheckCat = true;").on("click", _addToJS)).appendTo($textHintNode);
      $permaSaveHint = createNotifyArea($("<span>").text("Save these setting in your common.js: ").append($textHintNode), "ui-icon-info", "ui-state-highlight");
      $dialog = $("<div>").append($("<span>").css({
        "font-size": "2em",
        "line-height": "1.8em"
      }).append($("<span>").text(" {{check categories}} ").css({
        "background-color": "#F8CCB0",
        "text-decoration": "line-through !important",
        display: "inline-block"
      }), $("<span>").text(" ?"))).append("<br>", $dialogCheckStorage, $("<label>").attr("for", "hotCatAutoRemoveCheckCatStorage").text("Don't ask again"), "<br>").append(mw.user.isAnon() ? "" : $permaSaveHint.hide());
      $dialog.dialog({
        modal: true,
        closeOnEscape: true,
        title: "{{check categories}} (−)?",
        width: 450,
        buttons: dlgButtons,
        close: () => {
          const $body = $("body");
          $body.find("#hotcatCommitForm").trigger("submit");
        },
        open() {
          const $buttons = $(this).parent().find(".ui-dialog-buttonpane button");
          $buttons.eq(0).button({
            icons: {
              primary: "ui-icon-circle-check"
            }
          });
          $buttons.eq(1).button({
            icons: {
              primary: "ui-icon-cancel"
            }
          });
        }
      });
    };
    if (newVal !== self2.wpTextbox1.value) {
      if (window.HotCatAutoRemoveCheckCat || storageItem === "auto") {
        doRemove();
        return true;
      }
      e.preventDefault();
      prompt();
    }
    return true;
  });
  const $okLink = $("<a>").attr({
    href: "#",
    title: "Categories are OK! Immediately remove the template."
  }).append("<s>").text("{{Check categories}}");
  $okLink.on("click", function(e) {
    e.preventDefault();
    const $el = $(this);
    $el.off("click");
    const doEdit = (result) => {
      if (!result) {
        return;
      }
      $el.text("Doing.");
      const text = result.replace(checkCategoriesRegExp, "");
      if (text === result) {
        $el.text("Template not found!");
        return;
      }
      const params = {
        action: "edit",
        title: mw.config.get("wgPageName"),
        summary: "".concat(selfName, "Categories are checked and OK. You can help [[Category:Media needing category review|reviewing]]!"),
        nocreate: true,
        text
      };
      const editDone = (editStat) => {
        if (!editStat) {
          return;
        }
        if (editStat.error) {
          void mw.notify('Unable to remove "Check categories" with the API\n'.concat(editStat.error.code, "\n").concat(editStat.error.info), {
            tag: "hotCatCheck",
            type: "error"
          });
          $el.text("Edit-Error!");
        } else {
          $el.text("Edit Done.");
        }
        const $body = $("body");
        $body.find(".checkcategories").fadeOut();
      };
      $el.text("Doing..");
      void api.postWithToken("csrf", params).then(editDone);
    };
    $el.text("Doing");
    void $.ajax({
      url: mw.config.get("wgScript"),
      data: {
        action: "raw",
        title: mw.config.get("wgPageName").replace(/ /g, "_")
      },
      dataType: "text",
      error: () => {
        $el.text("Error!");
      },
      success: doEdit,
      type: "GET",
      cache: false
    });
  });
  $(function loadHotCatCheck() {
    const $body = $("body");
    $body.find("#catlinks").find("ul:first").append($("<li>").append($okLink));
  });
})();
//! src/HotCat/modules/getMessage.ts
var getMessage = (key, ...args) => {
  key = "hotcat-".concat(key);
  return mw.message(key, ...args).plain();
};
//! src/HotCat/modules/constant.ts
var WG_USER_GROUPS = (_mw$config$get = mw.config.get("wgUserGroups")) !== null && _mw$config$get !== void 0 ? _mw$config$get : [];
var WG_USER_LANGUAGE = mw.config.get("wgUserLanguage");
//! src/HotCat/modules/messages.ts
var hotCatMessages = () => {
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(WG_USER_LANGUAGE)) {
    mw.messages.set({
      "hotcat-messages-cat_removed": "已移除[[Category:$1]]",
      "hotcat-messages-template_removed": "已移除{{[[Category:$1]]}}",
      "hotcat-messages-cat_added": "已添加[[Category:$1]]",
      // $2 is the new key
      "hotcat-messages-cat_keychange": '已設置[[Category:$1]]的新排序字："$2"',
      "hotcat-messages-cat_notFound": "分類“$1”沒有找到",
      "hotcat-messages-cat_exists": "分類“$1”已經存在，沒有添加。",
      "hotcat-messages-cat_resolved": "（重定向[[Category:$1]]已處理）",
      "hotcat-messages-uncat_removed": "已移除{{uncategorized}}",
      // Some text to prefix to the edit summary.
      "hotcat-messages-prefix": "使用[[H:HOTCAT|HotCat]]",
      // Some text to append to the edit summary. Named 'using' for historical reasons. If you prefer
      // to have a marker at the front, use prefix and set this to the empty string.
      "hotcat-messages-using": "",
      "hotcat-messages-multi_change": "$1個分類",
      // Any category in this category is deemed a disambiguation category; i.e., a category that should not contain
      // any items, but that contains links to other categories where stuff should be categorized. If you don't have
      // that concept on your wiki, set it to blank string. Use blanks, not underscores.
      "hotcat-disambig_category": "",
      // Any category in this category is deemed a (soft) redirect to some other category defined by a link
      // to another non-blacklisted category. If your wiki doesn't have soft category redirects, set this to null.
      // If a soft-redirected category contains more than one link to another non-blacklisted category, it's considered
      // a disambiguation category instead.
      "hotcat-redir_category": "已重定向的分类",
      "hotcat-messages-separator": "; ",
      // $1 is replaced by a number. If your language has several plural forms (c.f. [[:enwiki:Dual (grammatical form)]]),
      // you can set this to an array of strings suitable for passing to mw.language.configPlural().
      // If that function doesn't exist, HotCat will simply fall back to using the last
      // entry in the array.
      // Defaults to '[[' + category_canonical + ':$1]]'. Can be overridden if in the short edit summaries
      // not the standard category name should be used but, say, a shorter namespace alias. $1 is replaced
      // by a category name.
      "hotcat-messages-short_catchange": "$1",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-commit": "儲存",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-ok": "確定",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-cancel": "取消",
      // Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-multi_error": "無法從伺服器取得頁面文字。因此，您的分類變更無法儲存。我們為此不便表示抱歉。",
      // Plural of category_canonical.
      "hotcat-categories": "分類",
      // Names for the search engines
      "hotcat-engine_names-searchindex": "搜尋索引",
      "hotcat-engine_names-pagelist": "頁面列表",
      "hotcat-engine_names-combined": "合併搜尋",
      "hotcat-engine_names-subcat": "子分類",
      "hotcat-engine_names-parentcat": "上層分類",
      // The tooltips for the above links
      "hotcat-tooltips-change": "修改",
      "hotcat-tooltips-remove": "移除",
      "hotcat-tooltips-add": "增加一個新分類",
      "hotcat-tooltips-restore": "復原變更",
      "hotcat-tooltips-undo": "復原變更",
      "hotcat-tooltips-down": "打開以修改並顯示子分類",
      "hotcat-tooltips-up": "打開以修改並顯示上層分類",
      // Tooltip for the "enter multi-mode" link
      "hotcat-multi_tooltip": "修改多個分類"
    });
  } else {
    mw.messages.set({
      "hotcat-messages-cat_removed": "已移除[[Category:$1]]",
      "hotcat-messages-template_removed": "已移除{{[[Category:$1]]}}",
      "hotcat-messages-cat_added": "已添加[[Category:$1]]",
      // $2 is the new key
      "hotcat-messages-cat_keychange": '已设置[[Category:$1]]的新排序字："$2"',
      "hotcat-messages-cat_notFound": "分类“$1”没有找到",
      "hotcat-messages-cat_exists": "分类“$1”已经存在，没有添加。",
      "hotcat-messages-cat_resolved": "（重定向[[Category:$1]]已处理）",
      "hotcat-messages-uncat_removed": "已移除{{uncategorized}}",
      // Some text to prefix to the edit summary.
      "hotcat-messages-prefix": "使用[[H:HOTCAT|HotCat]]",
      // Some text to append to the edit summary. Named 'using' for historical reasons. If you prefer
      // to have a marker at the front, use prefix and set this to the empty string.
      "hotcat-messages-using": "",
      "hotcat-messages-multi_change": "$1个分类",
      // Any category in this category is deemed a disambiguation category; i.e., a category that should not contain
      // any items, but that contains links to other categories where stuff should be categorized. If you don't have
      // that concept on your wiki, set it to blank string. Use blanks, not underscores.
      "hotcat-disambig_category": "",
      // Any category in this category is deemed a (soft) redirect to some other category defined by a link
      // to another non-blacklisted category. If your wiki doesn't have soft category redirects, set this to null.
      // If a soft-redirected category contains more than one link to another non-blacklisted category, it's considered
      // a disambiguation category instead.			'hotcat-redir_category': '已重定向的分类',
      "hotcat-messages-separator": "; ",
      // $1 is replaced by a number. If your language has several plural forms (c.f. [[:enwiki:Dual (grammatical form)]]),
      // you can set this to an array of strings suitable for passing to mw.language.configPlural().
      // If that function doesn't exist, HotCat will simply fall back to using the last
      // entry in the array.
      // Defaults to '[[' + category_canonical + ':$1]]'. Can be overridden if in the short edit summaries
      // not the standard category name should be used but, say, a shorter namespace alias. $1 is replaced
      // by a category name.
      "hotcat-messages-short_catchange": "$1",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-commit": "保存",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-ok": "确定",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-cancel": "取消",
      // Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-multi_error": "无法从服务器取得页面文字。因此，您的分类更改无法保存。我们为此不便表示抱歉。",
      // Plural of category_canonical.
      "hotcat-categories": "分类",
      // Names for the search engines
      "hotcat-engine_names-searchindex": "搜索索引",
      "hotcat-engine_names-pagelist": "页面列表",
      "hotcat-engine_names-combined": "合并搜索",
      "hotcat-engine_names-subcat": "子分类",
      "hotcat-engine_names-parentcat": "上层分类",
      // The tooltips for the above links
      "hotcat-tooltips-change": "修改",
      "hotcat-tooltips-remove": "移除",
      "hotcat-tooltips-add": "增加一个新分类",
      "hotcat-tooltips-restore": "撤销更改",
      "hotcat-tooltips-undo": "撤销更改",
      "hotcat-tooltips-down": "打开以修改并显示子分类",
      "hotcat-tooltips-up": "打开以修改并显示上层分类",
      // Tooltip for the "enter multi-mode" link
      "hotcat-multi_tooltip": "修改多个分类"
    });
  }
};
//! src/HotCat/HotCat.js
var import_ext_gadget2 = require("ext.gadget.Util");
hotCatMessages();
(function hotCat() {
  const conf = mw.config.values;
  if (window.HotCat && !window.HotCat.nodeName || conf.wgAction === "edit") {
    return;
  }
  const api = (0, import_ext_gadget2.initMwApi)("HotCat/3.0");
  window.HotCat = {
    // The little modification links displayed after category names. U+2212 is a minus sign; U+2193 and U+2191 are
    // downward and upward pointing arrows. Do not use ↓ and ↑ in the code!
    links: {
      change: "(±)",
      remove: "(−)",
      add: "(+)",
      restore: "(×)",
      undo: "(×)",
      down: "(↓)",
      up: "(↑)"
    },
    changeTag: "HotCat",
    // The HTML content of the "enter multi-mode" link at the front.
    addmulti: "<span>+<sup>+</sup></span>",
    // Return true to disable HotCat.
    disable: () => {
      const ns = conf.wgNamespaceNumber;
      const nsIds = conf.wgNamespaceIds;
      return ns < 0 || // Special pages; Special:Upload is handled differently
      ns === 10 || // Templates
      ns === 828 || // Module (Lua)
      ns === 8 || // MediaWiki
      ns === 6 && !conf.wgArticleId || // Non-existing file pages
      ns === 2 && /\.(js|css)$/.test(conf.wgTitle) || // User scripts
      nsIds && (ns === nsIds.creator || ns === nsIds.timedtext || ns === nsIds.institution);
    },
    // A regexp matching a templates used to mark uncategorized pages, if your wiki does have that.
    // If not, set it to null.
    uncat_regexp: /{{\s*[Uu]ncategorized\s*[^}]*}}\s*(<!--.*?-->\s*)?/g,
    // The images used for the little indication icon. Should not need changing.
    existsYes: "https://youshou.wiki/images/b/be/P_yes.svg/24px-P_yes.svg.png",
    existsNo: "https://youshou.wiki/images/4/42/P_no.svg/24px-P_no.svg.png",
    // a list of categories which can be removed by removing a template
    // key: the category without namespace
    // value: A regexp matching the template name, again without namespace
    // If you don't have this at your wiki, or don't want this, set it to an empty object {}.
    template_categories: {},
    // Override the decision of whether HotCat should help users by automatically
    // capitalising the title in the user input text if the wiki has case-sensitive page names.
    // Basically, this will make an API query to check the MediaWiki configuration and HotCat then sets
    // this to true for most wikis, and to false on Wiktionary.
    //
    // You can set this directly if there is a problem with it. For example, Georgian Wikipedia (kawiki),
    // is known to have different capitalisation logic between MediaWiki PHP and JavaScript. As such, automatic
    // case changes in JavaScript by HotCat would be wrong.
    capitalizePageNames: null,
    // If upload_disabled is true, HotCat will not be used on the Upload form.
    upload_disabled: false,
    // Single regular expression matching blacklisted categories that cannot be changed or
    // added using HotCat. For instance /\bstubs?$/ (any category ending with the word "stub"
    // or "stubs"), or /(\bstubs?$)|\bmaintenance\b/ (stub categories and any category with the
    // word "maintenance" in its title.
    blacklist: null,
    // Stuff changeable by users:
    // Background for changed categories in multi-edit mode. Default is a very light salmon pink.
    bg_changed: "#FCA",
    // If true, HotCat will never automatically submit changes. HotCat will only open an edit page with
    // the changes; users must always save explicitly.
    no_autocommit: false,
    // If true, the "category deletion" link "(-)" will never save automatically but always show an
    // edit page where the user has to save the edit manually. Is false by default because that's the
    // traditional behavior. This setting overrides no_autocommit for "(-)" links.
    del_needs_diff: false,
    // Time, in milliseconds, that HotCat waits after a keystroke before making a request to the
    // server to get suggestions.
    suggest_delay: 1e3,
    // Default width, in characters, of the text input field.
    editbox_width: 40,
    // One of the engine_names above, to be used as the default suggestion engine.
    suggestions: "combined",
    // If true, always use the default engine, and never display a selector.
    fixed_search: false,
    // If false, do not display the "up" and "down" links
    use_up_down: true,
    // Default list size
    listSize: 10,
    // If true, single category changes are marked as minor edits. If false, they're not.
    single_minor: true,
    // If true, never add a page to the user's watchlist. If false, pages get added to the watchlist if
    // the user has the "Add pages I edit to my watchlist" or the "Add pages I create to my watchlist"
    // options in his or her preferences set.
    dont_add_to_watchlist: false,
    shortcuts: null,
    addShortcuts: (map) => {
      let _a;
      if (!map) {
        return;
      }
      (_a = window.HotCat).shortcuts || (_a.shortcuts = {});
      for (let k in map) {
        if (!Object.hasOwn(map, k) || typeof k !== "string") {
          continue;
        }
        let v = map[k];
        if (typeof v !== "string") {
          continue;
        }
        k = k.trim();
        v = v.trim();
        if (k.length === 0 || v.length === 0) {
          continue;
        }
        window.HotCat.shortcuts[k] = v;
      }
    }
  };
  const HC = window.HotCat;
  const ua = navigator.userAgent.toLowerCase();
  const is_webkit = /applewebkit\/\d+/.test(ua) && !ua.includes("spoofer");
  let cat_prefix = null;
  let noSuggestions = false;
  const wikiTextBlank = "[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+";
  const wikiTextBlankRE = new RegExp(wikiTextBlank, "g");
  const wikiTextBlankOrBidi = "[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200B\\u200E\\u200F\\u2028-\\u202F\\u205F\\u3000]*";
  const formattedNamespaces = conf.wgFormattedNamespaces;
  const namespaceIds = conf.wgNamespaceIds;
  const autoLocalize = (namespaceNumber, fallback) => {
    const createRegexpStr = (name) => {
      if (!name || name.length === 0) {
        return;
      }
      let regex_name = "";
      for (let i = 0; i < name.length; i++) {
        const initial = name.charAt(i);
        const ll = initial.toLowerCase();
        const ul = initial.toUpperCase();
        regex_name += ll === ul ? initial : "[".concat(ll).concat(ul, "]");
      }
      return regex_name.replace(/([$()*+.?\\^])/g, "\\$1").replace(wikiTextBlankRE, wikiTextBlank);
    };
    fallback = fallback.toLowerCase();
    const canonical = formattedNamespaces[String(namespaceNumber)].toLowerCase();
    let regexp = createRegexpStr(canonical);
    if (fallback && canonical !== fallback) {
      regexp += "|".concat(createRegexpStr(fallback));
    }
    if (namespaceIds) {
      for (const cat_name in namespaceIds) {
        if (typeof cat_name === "string" && cat_name.toLowerCase() !== canonical && cat_name.toLowerCase() !== fallback && namespaceIds[cat_name] === namespaceNumber) {
          regexp += "|".concat(createRegexpStr(cat_name));
        }
      }
    }
    return regexp;
  };
  HC.category_canonical = formattedNamespaces["14"];
  HC.category_regexp = autoLocalize(14, "category");
  if (formattedNamespaces["10"]) {
    HC.template_regexp = autoLocalize(10, "template");
  }
  const make = (arg, literal) => {
    if (!arg) {
      return null;
    }
    return literal ? document.createTextNode(arg) : document.createElement(arg);
  };
  const param = (name, uri) => {
    uri || (uri = document.location.href);
    const re = new RegExp("[&?]".concat(name, "=([^&#]*)"));
    const m = re.exec(uri);
    if (m && m.length > 1) {
      return decodeURIComponent(m[1]);
    }
    return null;
  };
  const title = (href) => {
    if (!href) {
      return null;
    }
    const script = "".concat(conf.wgScript, "?");
    if (href.indexOf(script) === 0 || href.indexOf(conf.wgServer + script) === 0 || conf.wgServer.slice(0, 2) === "//" && href.indexOf(document.location.protocol + conf.wgServer + script) === 0) {
      return param("title", href);
    }
    let prefix = conf.wgArticlePath.replace("$1", "");
    if (href.indexOf(prefix)) {
      prefix = conf.wgServer + prefix;
    }
    if (href.indexOf(prefix) && prefix.slice(0, 2) === "//") {
      prefix = document.location.protocol + prefix;
    }
    if (href.indexOf(prefix) === 0) {
      return decodeURIComponent(href.slice(prefix.length));
    }
    return null;
  };
  const hasClass = ({
    className
  }, name) => {
    return " ".concat(className, " ").includes(" ".concat(name, " "));
  };
  const capitalize = (str) => {
    if (!str || str.length === 0) {
      return str;
    }
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  };
  const wikiPagePath = (pageName) => {
    return conf.wgArticlePath.replace("$1", encodeURIComponent(pageName).replace(/%3A/g, ":").replace(/%2F/g, "/"));
  };
  const escapeRE = (str) => {
    return str.replace(/([$()*+.?[\\\]^])/g, "\\$1");
  };
  const substituteFactory = (options) => {
    options || (options = {});
    const lead = options.indicator || "$";
    const indicator = escapeRE(lead);
    const lbrace = escapeRE(options.lbrace || "{");
    const rbrace = escapeRE(options.rbrace || "}");
    const re = new RegExp(
      // $$
      "(?:".concat(indicator, "(").concat(indicator, "))|(?:").concat(indicator, "(\\d+))|(?:").concat(indicator, "(?:").concat(lbrace, "([^").concat(lbrace).concat(rbrace, "]+)").concat(rbrace, "))|(?:").concat(indicator, "(?!(?:[").concat(indicator).concat(lbrace, "]|\\d))(\\S+?)\\b)"),
      "g"
    );
    return (str, map) => {
      if (!map) {
        return str;
      }
      return str.replace(re, (match, prefix, idx, key, alpha) => {
        if (prefix === lead) {
          return lead;
        }
        const k = alpha || key || idx;
        const replacement = typeof map[k] === "function" ? map[k](match, k) : map[k];
        return typeof replacement === "string" ? replacement : replacement || match;
      });
    };
  };
  const replaceShortcuts = (() => {
    const replaceHash = substituteFactory({
      indicator: "#",
      lbrace: "[",
      rbrace: "]"
    });
    return (str, map) => {
      const s = replaceHash(str, map);
      return HC.capitalizePageNames ? capitalize(s) : s;
    };
  })();
  const findCatsRE = new RegExp("\\[\\[".concat(wikiTextBlankOrBidi, "(?:").concat(HC.category_regexp, ")").concat(wikiTextBlankOrBidi, ":[^\\]]+\\]\\]"), "g");
  const replaceByBlanks = (match) => {
    return match.replace(/(\s|\S)/g, " ");
  };
  const find_category = (wikitext, category, once) => {
    let cat_regex = null;
    if (HC.template_categories[category]) {
      cat_regex = new RegExp("\\{\\{".concat(wikiTextBlankOrBidi, "(").concat(HC.template_regexp, "(?=").concat(wikiTextBlankOrBidi, ":))?").concat(wikiTextBlankOrBidi, "(?:").concat(HC.template_categories[category], ")").concat(wikiTextBlankOrBidi, "(\\|.*?)?\\}\\}"), "g");
    } else {
      const cat_name = escapeRE(category);
      const initial = cat_name.slice(0, 1);
      cat_regex = new RegExp("\\[\\[".concat(wikiTextBlankOrBidi, "(").concat(HC.category_regexp, ")").concat(wikiTextBlankOrBidi, ":").concat(wikiTextBlankOrBidi).concat(initial === "\\" || !HC.capitalizePageNames ? initial : "[".concat(initial.toUpperCase()).concat(initial.toLowerCase(), "]")).concat(cat_name.slice(1).replace(wikiTextBlankRE, wikiTextBlank)).concat(wikiTextBlankOrBidi, "(\\|.*?)?\\]\\]"), "g");
    }
    if (once) {
      return cat_regex.exec(wikitext);
    }
    const nowikiRegex = new RegExp("<no".concat("wiki>", "(\\s|\\S)*?</no", "wiki", ">"), "g");
    const copiedtext = wikitext.replace(/<!--(\s|\S)*?-->/g, replaceByBlanks).replace(nowikiRegex, replaceByBlanks);
    const result = [];
    let curr_match = null;
    while ((curr_match = cat_regex.exec(copiedtext)) !== null) {
      result.push({
        match: curr_match
      });
    }
    result.re = cat_regex;
    return result;
  };
  let interlanguageRE = null;
  const change_category = (wikitext, toRemove, toAdd, key, is_hidden) => {
    const find_insertionpoint = (_wikitext) => {
      const nowikiRegex = new RegExp("<no".concat("wiki>", "(\\s|\\S)*?</no", "wiki", ">"), "g");
      const copiedtext = _wikitext.replace(/<!--(\s|\S)*?-->/g, replaceByBlanks).replace(nowikiRegex, replaceByBlanks);
      let index = -1;
      findCatsRE.lastIndex = 0;
      while (findCatsRE.exec(copiedtext) !== null) {
        index = findCatsRE.lastIndex;
      }
      if (index < 0) {
        let match = null;
        interlanguageRE ? match = interlanguageRE.exec(copiedtext) : (
          // Approximation without API: interlanguage links start with 2 to 3 lower case letters, optionally followed by
          // a sequence of groups consisting of a dash followed by one or more lower case letters. Exceptions are "simple"
          // and "tokipona".
          match = /((^|\n\r?)(\[\[\s*(([a-z]{2,3}(-[a-z]+)*)|simple|tokipona)\s*:[^\]]+]]\s*))+$/.exec(copiedtext)
        );
        if (match) {
          ({
            index
          } = match);
        }
        return {
          idx: index,
          onCat: false
        };
      }
      return {
        idx: index,
        onCat: index >= 0
      };
    };
    const summary = [];
    const nameSpace = HC.category_canonical;
    const keyChange = toRemove && toAdd && toRemove === toAdd && toAdd.length > 0;
    let matches;
    let cat_point = -1;
    if (key) {
      key = "|".concat(key);
    }
    if (toRemove && toRemove.length > 0) {
      matches = find_category(wikitext, toRemove);
      if (!matches || matches.length === 0) {
        return {
          text: wikitext,
          summary,
          error: getMessage("messages-cat_notFound", toRemove)
        };
      }
      let before = wikitext.slice(0, Math.max(0, matches[0].match.index));
      let after = wikitext.slice(Math.max(0, matches[0].match.index + matches[0].match[0].length));
      if (matches.length > 1) {
        matches.re.lastIndex = 0;
        after = after.replace(matches.re, "");
      }
      if (toAdd && // nameSpace = matches[ 0 ].match[ 1 ] || nameSpace; Canonical namespace should be always preferred
      key === null) {
        [, , key] = matches[0].match;
      }
      let i = before.length - 1;
      while (i >= 0 && before.charAt(i) !== "\n" && before.slice(i, i + 1).search(/\s/) >= 0) {
        i--;
      }
      let j = 0;
      while (j < after.length && after.charAt(j) !== "\n" && after.slice(j, j + 1).search(/\s/) >= 0) {
        j++;
      }
      if (i >= 0 && before.charAt(i) === "\n" && (after.length === 0 || j < after.length && after.charAt(j) === "\n")) {
        i--;
      }
      before = i >= 0 ? before.slice(0, Math.max(0, i + 1)) : "";
      after = j < after.length ? after.slice(Math.max(0, j)) : "";
      if (before.length > 0 && before.slice(Math.max(0, before.length - 1)).search(/\S/) >= 0 && after.length > 0 && after.slice(0, 1).search(/\S/) >= 0) {
        before += " ";
      }
      cat_point = before.length;
      if (cat_point === 0 && after.length > 0 && after.slice(0, 1) === "\n") {
        after = after.slice(1);
      }
      wikitext = before + after;
      if (!keyChange) {
        if (HC.template_categories[toRemove]) {
          summary.push(getMessage("messages-template_removed", toRemove));
        } else {
          summary.push(getMessage("messages-cat_removed", toRemove));
        }
      }
    }
    if (toAdd && toAdd.length > 0) {
      matches = find_category(wikitext, toAdd);
      if (matches && matches.length > 0) {
        return {
          text: wikitext,
          summary,
          error: getMessage("messages-cat_exists", toAdd)
        };
      }
      let onCat = false;
      if (cat_point < 0) {
        const point = find_insertionpoint(wikitext);
        cat_point = point.idx;
        ({
          onCat
        } = point);
      } else {
        onCat = true;
      }
      const newcatstring = "[[".concat(nameSpace, ":").concat(toAdd).concat(key || "", "]]");
      if (cat_point >= 0) {
        const suffix = wikitext.slice(Math.max(0, cat_point));
        wikitext = wikitext.slice(0, Math.max(0, cat_point)) + (cat_point > 0 ? "\n" : "") + newcatstring + (onCat ? "" : "\n");
        wikitext += suffix.length > 0 && suffix.slice(0, 1) !== "\n" ? "\n".concat(suffix) : suffix;
      } else {
        if (wikitext.length > 0 && wikitext.slice(-1, wikitext.length - 1 + 1) !== "\n") {
          wikitext += "\n";
        }
        wikitext += (wikitext.length > 0 ? "\n" : "") + newcatstring;
      }
      if (keyChange) {
        let k = key || "";
        if (k.length > 0) {
          k = k.slice(1);
        }
        summary.push(getMessage("messages-cat_keychange", toAdd, k));
      } else {
        summary.push(getMessage("messages-cat_added", toAdd));
      }
      if (HC.uncat_regexp && !is_hidden) {
        const txt = wikitext.replace(HC.uncat_regexp, "");
        if (txt.length !== wikitext.length) {
          wikitext = txt;
          summary.push(getMessage("messages-uncat_removed"));
        }
      }
    }
    return {
      text: wikitext,
      summary,
      error: null
    };
  };
  const evtKeys = ({
    ctrlKey,
    metaKey,
    shiftKey
  }) => {
    let code = 0;
    if (ctrlKey) {
      if (ctrlKey || metaKey) {
        code || (code = 1);
      }
      if (shiftKey) {
        code || (code = 2);
      }
    }
    return code;
  };
  const evtKill = (e) => {
    if (e.preventDefault) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.cancelBubble = true;
    }
    return false;
  };
  let catLine = null;
  let onUpload = false;
  let editors = [];
  let commitButton = null;
  let commitForm = null;
  let multiSpan = null;
  let pageText = null;
  let pageTime = null;
  let pageWatched = false;
  let watchCreate = false;
  let watchEdit = false;
  let minorEdits = false;
  let editToken = null;
  let is_rtl = false;
  let serverTime = null;
  let lastRevId = null;
  let pageTextRevId = null;
  let conflictingUser = null;
  let newDOM = false;
  const UNCHANGED = 0;
  const OPEN = 1;
  const CHANGE_PENDING = 2;
  const CHANGED = 3;
  const DELETED = 4;
  const setPage = (data) => {
    let startTime = null;
    if (data && data.query) {
      if (data.query.pages) {
        const [page] = data.query.pages;
        if (page) {
          if (page.revisions && page.revisions.length > 0) {
            pageText = page.revisions[0].slots["main"].content;
            if (page.revisions[0].timestamp) {
              pageTime = page.revisions[0].timestamp.replace(/\D/g, "");
            }
            if (page.revisions[0].revid) {
              pageTextRevId = page.revisions[0].revid;
            }
            if (page.revisions.length > 1) {
              conflictingUser = page.revisions[1].user;
            }
          }
          if (page.lastrevid) {
            lastRevId = page.lastrevid;
          }
          if (page.starttimestamp) {
            startTime = page.starttimestamp.replace(/\D/g, "");
          }
          pageWatched = typeof page.watched === "string";
          if (data.query.tokens) {
            editToken = data.query.tokens.csrftoken;
          }
          if (page.langlinks && (!data["query-continue"] || !data["query-continue"].langlinks)) {
            let re = "";
            for (let i = 0; i < page.langlinks.length; i++) {
              re += (i > 0 ? "|" : "") + page.langlinks[i].lang.replace(/([$()*+.?\\^])/g, "\\$1");
            }
            if (re.length > 0) {
              interlanguageRE = new RegExp("((^|\\n\\r?)(\\[\\[\\s*(".concat(re, ")\\s*:[^\\]]+\\]\\]\\s*))+$"));
            }
          }
        }
      }
      if (data.query.general) {
        if (data.query.general.time && !startTime) {
          startTime = data.query.general.time.replace(/\D/g, "");
        }
        if (HC.capitalizePageNames === null) {
          HC.capitalizePageNames = data.query.general.case === "first-letter";
        }
      }
      serverTime = startTime;
      if (data.query.userinfo && data.query.userinfo.options) {
        watchCreate = !HC.dont_add_to_watchlist && data.query.userinfo.options.watchcreations === "1";
        watchEdit = !HC.dont_add_to_watchlist && data.query.userinfo.options.watchdefault === "1";
        minorEdits = data.query.userinfo.options.minordefault === 1;
        if (minorEdits) {
          HC.single_minor = true;
        }
      }
    }
  };
  let saveInProgress = false;
  const initiateEdit = (doEdit, failure) => {
    if (saveInProgress) {
      return;
    }
    saveInProgress = true;
    let oldButtonState;
    if (commitButton) {
      oldButtonState = commitButton.disabled;
      commitButton.disabled = true;
    }
    const fail = function(...args) {
      saveInProgress = false;
      if (commitButton) {
        commitButton.disabled = oldButtonState;
      }
      failure.apply(this, args);
    };
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      rawcontinue: "",
      titles: conf.wgPageName,
      prop: ["info", "revisions", "langlinks"],
      inprop: "watched",
      rvprop: ["content", "timestamp", "ids", "user"],
      rvslots: "main",
      rvlimit: "2",
      rvdir: "newer",
      rvstartid: conf.wgCurRevisionId,
      lllimit: "500",
      meta: ["siteinfo", "userinfo", "tokens"],
      type: "csrf",
      uiprop: ["options"]
    };
    api.get(params).done((data) => {
      setPage(data);
      doEdit(fail);
    }).fail(({
      status,
      statusText
    }) => {
      fail("".concat(status, " ").concat(statusText));
    });
  };
  const multiChangeMsg = (count) => {
    return getMessage("messages-multi_change", String(count));
  };
  const currentTimestamp = () => {
    const now = /* @__PURE__ */ new Date();
    let ts = String(now.getUTCFullYear());
    const two = (s) => {
      return s.slice(-2);
    };
    ts += two("0".concat(now.getUTCMonth() + 1)) + two("0".concat(now.getUTCDate())) + two("00".concat(now.getUTCHours())) + two("00".concat(now.getUTCMinutes())) + two("00".concat(now.getUTCSeconds()));
    return ts;
  };
  const performChanges = (failure, singleEditor) => {
    if (pageText === null) {
      failure(getMessage("messages-multi_error"));
      return;
    }
    let action;
    const selfEditConflict = (lastRevId !== null && lastRevId !== conf.wgCurRevisionId || pageTextRevId !== null && pageTextRevId !== conf.wgCurRevisionId) && conflictingUser && conflictingUser === conf.wgUserName;
    if (singleEditor && !singleEditor.noCommit && !HC.no_autocommit && editToken && !selfEditConflict) {
      commitForm.wpEditToken.value = editToken;
      action = commitForm.wpDiff;
      if (action) {
        action.value = "wpSave";
        action.name = action.value;
      }
    } else {
      action = commitForm.wpSave;
      if (action) {
        action.value = "wpDiff";
        action.name = action.value;
      }
    }
    let result = {
      text: pageText
    };
    const changed = [];
    const added = [];
    const deleted = [];
    const toEdit = singleEditor ? [singleEditor] : editors;
    let edit;
    let i;
    let error = null;
    let changes = 0;
    for (i = 0; i < toEdit.length; i++) {
      edit = toEdit[i];
      if (edit.state === CHANGED) {
        result = change_category(result.text, edit.originalCategory, edit.currentCategory, edit.currentKey, edit.currentHidden);
        if (!result.error) {
          changes++;
          if (!edit.originalCategory || edit.originalCategory.length === 0) {
            added.push(edit.currentCategory);
          } else {
            changed.push({
              from: edit.originalCategory,
              to: edit.currentCategory
            });
          }
        } else if (error === null) {
          ({
            error
          } = result);
        }
      } else if (edit.state === DELETED && edit.originalCategory && edit.originalCategory.length > 0) {
        result = change_category(result.text, edit.originalCategory, null, null, false);
        if (!result.error) {
          changes++;
          deleted.push(edit.originalCategory);
        } else if (error === null) {
          ({
            error
          } = result);
        }
      }
    }
    if (error !== null) {
      action = commitForm.wpSave;
      if (action) {
        action.value = "wpDiff";
        action.name = action.value;
      }
    }
    commitForm.wpMinoredit.checked = minorEdits;
    commitForm.wpWatchthis.checked = !conf.wgArticleId && watchCreate || watchEdit || pageWatched;
    if (conf.wgArticleId || !!singleEditor) {
      if (action && action.value === "wpSave") {
        if (HC.changeTag) {
          commitForm.wpChangeTags.value = HC.changeTag;
        }
      } else {
        commitForm.wpAutoSummary.value = HC.changeTag;
      }
      if (changes === 1) {
        if (result.summary && result.summary.length > 0) {
          commitForm.wpSummary.value = (HC.changeTag ? "" : getMessage("messages-prefix")) + result.summary.join(getMessage("messages-separator")) + (HC.changeTag ? "" : getMessage("messages-using"));
        }
        commitForm.wpMinoredit.checked = HC.single_minor || minorEdits;
      } else if (changes) {
        let summary = [];
        const shortSummary = [];
        for (i = 0; i < deleted.length; i++) {
          summary.push("−".concat(getMessage("messages-short_catchange", deleted[i])));
        }
        if (deleted.length === 1) {
          shortSummary.push("−".concat(getMessage("messages-short_catchange", deleted[0])));
        } else if (deleted.length > 0) {
          shortSummary.push("− ".concat(multiChangeMsg(deleted.length)));
        }
        for (i = 0; i < added.length; i++) {
          summary.push("+".concat(getMessage("messages-short_catchange", added[i])));
        }
        if (added.length === 1) {
          shortSummary.push("+".concat(getMessage("messages-short_catchange", added[0])));
        } else if (added.length > 0) {
          shortSummary.push("+ ".concat(multiChangeMsg(added.length)));
        }
        const arrow = is_rtl ? "←" : "→";
        for (i = 0; i < changed.length; i++) {
          if (changed[i].from === changed[i].to) {
            summary.push("±".concat(getMessage("messages-short_catchange", changed[i].from)));
          } else {
            summary.push("±".concat(getMessage("messages-short_catchange", changed[i].from)).concat(arrow).concat(getMessage("messages-short_catchange", changed[i].to)));
          }
        }
        if (changed.length === 1) {
          if (changed[0].from === changed[0].to) {
            shortSummary.push("±".concat(getMessage("messages-short_catchange", changed[0].from)));
          } else {
            shortSummary.push("±".concat(getMessage("messages-short_catchange", changed[0].from)).concat(arrow).concat(getMessage("messages-short_catchange", changed[0].to)));
          }
        } else if (changed.length > 0) {
          shortSummary.push("± ".concat(multiChangeMsg(changed.length)));
        }
        if (summary.length > 0) {
          summary = summary.join(getMessage("messages-separator"));
          if (summary.length > 200 - (HC.changeTag ? "" : getMessage("messages-prefix")).length - (HC.changeTag ? "" : getMessage("messages-using")).length) {
            summary = shortSummary.join(getMessage("messages-separator"));
          }
          commitForm.wpSummary.value = (HC.changeTag ? "" : getMessage("messages-prefix")) + summary + (HC.changeTag ? "" : getMessage("messages-using"));
        }
      }
    }
    commitForm.wpTextbox1.value = result.text;
    commitForm.wpStarttime.value = serverTime || currentTimestamp();
    commitForm.wpEdittime.value = pageTime || commitForm.wpStarttime.value;
    if (selfEditConflict) {
      commitForm.oldid.value = String(pageTextRevId || conf.wgCurRevisionId);
    }
    commitForm.hcCommit.click();
  };
  const resolveOne = (page, toResolve) => {
    const cats = page.categories;
    const {
      links
    } = page;
    let is_dab = false;
    let is_redir = typeof page.redirect === "string";
    let i;
    const is_hidden = page.categoryinfo && typeof page.categoryinfo.hidden === "string";
    const is_missing = typeof page.missing === "string";
    for (i = 0; i < toResolve.length; i++) {
      if (i && toResolve[i].dabInputCleaned !== page.title.slice(Math.max(0, page.title.indexOf(":") + 1))) {
        continue;
      }
      toResolve[i].currentHidden = is_hidden;
      toResolve[i].inputExists = !is_missing;
      toResolve[i].icon.src = is_missing ? HC.existsNo : HC.existsYes;
    }
    if (is_missing) {
      return;
    }
    if (!is_redir && cats && (getMessage("disambig_category") || getMessage("redir_category"))) {
      var _iterator = _createForOfIteratorHelper(cats), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const cat_ = _step.value;
          let cat = cat_.title;
          if (cat) {
            cat = cat.slice(Math.max(0, cat.indexOf(":") + 1)).replace(/_/g, " ");
            if (cat === getMessage("disambig_category")) {
              is_dab = true;
              break;
            } else if (cat === getMessage("redir_category")) {
              is_redir = true;
              break;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (!is_redir && !is_dab) {
      return;
    }
    if (!links || links.length === 0) {
      return;
    }
    const titles = [];
    for (i = 0; i < links.length; i++) {
      if (
        // Category namespace -- always true since we ask only for the category links
        links[i].ns === 14 && // Name not empty
        links[i].title && links[i].title.length > 0
      ) {
        let match = links[i].title;
        match = match.slice(Math.max(0, match.indexOf(":") + 1));
        if (!HC.blacklist || !HC.blacklist.test(match)) {
          titles.push(match);
        }
      }
    }
    if (titles.length === 0) {
      return;
    }
    for (i = 0; i < toResolve.length; i++) {
      if (i && toResolve[i].dabInputCleaned !== page.title.slice(Math.max(0, page.title.indexOf(":") + 1))) {
        continue;
      }
      toResolve[i].inputExists = true;
      toResolve[i].icon.src = HC.existsYes;
      if (titles.length > 1) {
        toResolve[i].dab = titles;
      } else {
        toResolve[i].text.value = titles[0] + (toResolve[i].currentKey === null ? "" : "|".concat(toResolve[i].currentKey));
      }
    }
  };
  const resolveRedirects = (toResolve, params) => {
    if (!params || !params.query || !params.query.pages) {
      return;
    }
    for (const p in params.query.pages) {
      if (!Object.hasOwn(params.query.pages, p)) {
        continue;
      }
      resolveOne(params.query.pages[p], toResolve);
    }
  };
  const resolveMulti = (toResolve, callback) => {
    let i;
    for (i = 0; i < toResolve.length; i++) {
      toResolve[i].dab = null;
      toResolve[i].dabInput = toResolve[i].lastInput;
    }
    if (noSuggestions) {
      callback(toResolve);
      return;
    }
    const params = {
      action: "query",
      format: "json",
      prop: "info|links|categories|categoryinfo",
      plnamespace: "14",
      pllimit: toResolve.length * 10,
      cllimit: toResolve.length * 10
    };
    const titles = [];
    for (i = 0; i < toResolve.length; i++) {
      let v = toResolve[i].dabInput;
      v = replaceShortcuts(v, HC.shortcuts);
      toResolve[i].dabInputCleaned = v;
      titles.push("Category:".concat(v));
    }
    params.titles = titles.join("|");
    api.get(params).done((json) => {
      resolveRedirects(toResolve, json);
      callback(toResolve);
    }).fail((req) => {
      if (!req) {
        noSuggestions = true;
      }
      callback(toResolve);
    });
  };
  const makeActive = (which) => {
    if (which.is_active) {
      return;
    }
    for (var _i = 0, _editors = editors; _i < _editors.length; _i++) {
      const editor = _editors[_i];
      if (editor !== which) {
        editor.inactivate();
      }
    }
    which.is_active = true;
    if (which.dab) {
      showDab(which);
    } else {
      const expectedInput = which.lastRealInput || which.lastInput || "";
      const actualValue = which.text.value || "";
      if (expectedInput.length === 0 && actualValue.length > 0 || expectedInput.length > 0 && actualValue.indexOf(expectedInput)) {
        which.showsList = false;
        const v = actualValue.split("|");
        [which.lastInput] = v;
        which.lastRealInput = which.lastInput;
        if (v.length > 1) {
          [, which.currentKey] = v;
        }
        if (which.lastSelection) {
          which.lastSelection = {
            start: v[0].length,
            end: v[0].length
          };
        }
      }
      if (which.showsList) {
        which.displayList();
      }
      if (which.lastSelection) {
        setTimeout(() => {
          which.setSelection(which.lastSelection.start, which.lastSelection.end);
        }, 0);
      }
    }
  };
  const showDab = (which) => {
    if (which.is_active) {
      which.showSuggestions(which.dab, false, null, null);
      which.dab = null;
    } else {
      makeActive(which);
    }
  };
  const multiSubmit = () => {
    const toResolve = [];
    for (var _i2 = 0, _editors2 = editors; _i2 < _editors2.length; _i2++) {
      const editor = _editors2[_i2];
      if (editor.state === CHANGE_PENDING || editor.state === OPEN) {
        toResolve.push(editor);
      }
    }
    if (toResolve.length === 0) {
      initiateEdit((failure) => {
        performChanges(failure);
      }, (msg) => {
        mw.notify(msg, {
          tag: "hotCat"
        });
      });
      return;
    }
    resolveMulti(toResolve, (resolved) => {
      let firstDab = null;
      let dontChange = false;
      var _iterator2 = _createForOfIteratorHelper(resolved), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const element = _step2.value;
          if (element.lastInput === element.dabInput) {
            if (element.dab) {
              if (!firstDab) {
                firstDab = element;
              }
            } else if (element.acceptCheck(true)) {
              element.commit();
            }
          } else {
            dontChange = true;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (firstDab) {
        showDab(firstDab);
      } else if (!dontChange) {
        initiateEdit((failure) => {
          performChanges(failure);
        }, (msg) => {
          mw.notify(msg, {
            tag: "hotCat"
          });
        });
      }
    });
  };
  const setMultiInput = () => {
    if (commitButton || onUpload) {
      return;
    }
    commitButton = make("input");
    commitButton.type = "button";
    commitButton.value = getMessage("messages-commit");
    commitButton.addEventListener("click", multiSubmit);
    if (multiSpan) {
      multiSpan.parentNode.replaceChild(commitButton, multiSpan);
    } else {
      catLine.append(commitButton);
    }
  };
  const checkMultiInput = () => {
    if (!commitButton) {
      return;
    }
    let hasChanges = false;
    for (var _i3 = 0, _editors3 = editors; _i3 < _editors3.length; _i3++) {
      const editor = _editors3[_i3];
      if (editor.state !== UNCHANGED) {
        hasChanges = true;
        break;
      }
    }
    commitButton.disabled = !hasChanges;
  };
  const suggestionEngines = {
    opensearch: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=opensearch&namespace=14&limit=30&search=Category:$1"),
      // $1 = search term
      // Function to convert result of uri into an array of category names
      handler: (queryResult, queryKey) => {
        if (queryResult && queryResult.length >= 2) {
          const key = queryResult[0].slice(Math.max(0, queryResult[0].indexOf(":") + 1));
          const [, titles] = queryResult;
          let exists = false;
          if (!cat_prefix) {
            cat_prefix = new RegExp("^(".concat(HC.category_regexp, "):"));
          }
          for (let i = 0; i < titles.length; i++) {
            cat_prefix.lastIndex = 0;
            const m = cat_prefix.exec(titles[i]);
            if (m && m.length > 1) {
              titles[i] = titles[i].slice(Math.max(0, titles[i].indexOf(":") + 1));
              if (key === titles[i]) {
                exists = true;
              }
            } else {
              titles.splice(i, 1);
              i--;
            }
          }
          titles.exists = exists;
          if (queryKey !== key) {
            titles.normalized = key;
          }
          return titles;
        }
        return null;
      }
    },
    internalsearch: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&list=allpages&apnamespace=14&aplimit=30&apfrom=$1&apprefix=$1"),
      handler: (queryResult) => {
        if (queryResult && queryResult.query && queryResult.query.allpages) {
          const titles = queryResult.query.allpages;
          for (let i = 0; i < titles.length; i++) {
            titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(":") + 1));
          }
          return titles;
        }
        return null;
      }
    },
    exists: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&prop=info&titles=Category:$1"),
      handler: (queryResult, queryKey) => {
        if (queryResult && queryResult.query && queryResult.query.pages && !queryResult.query.pages[-1]) {
          for (const p in queryResult.query.pages) {
            if (!Object.hasOwn(queryResult.query.pages, p)) {
              continue;
            }
            let _title = queryResult.query.pages[p].title;
            _title = _title.slice(Math.max(0, _title.indexOf(":") + 1));
            const titles = [_title];
            titles.exists = true;
            if (queryKey !== _title) {
              titles.normalized = _title;
            }
            return titles;
          }
        }
        return null;
      }
    },
    subcategories: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&list=categorymembers&cmtype=subcat&cmlimit=max&cmtitle=Category:$1"),
      handler: (queryResult) => {
        if (queryResult && queryResult.query && queryResult.query.categorymembers) {
          const titles = queryResult.query.categorymembers;
          for (let i = 0; i < titles.length; i++) {
            titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(":") + 1));
          }
          return titles;
        }
        return null;
      }
    },
    parentcategories: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&prop=categories&titles=Category:$1&cllimit=max"),
      handler: (queryResult) => {
        if (queryResult && queryResult.query && queryResult.query.pages) {
          for (const p in queryResult.query.pages) {
            if (queryResult.query.pages[p].categories) {
              const titles = queryResult.query.pages[p].categories;
              for (let i = 0; i < titles.length; i++) {
                titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(":") + 1));
              }
              return titles;
            }
          }
        }
        return null;
      }
    }
  };
  const suggestionConfigs = {
    searchindex: {
      name: "Search index",
      engines: ["opensearch"],
      cache: {},
      show: true,
      temp: false,
      noCompletion: false
    },
    pagelist: {
      name: "Page list",
      engines: ["internalsearch", "exists"],
      cache: {},
      show: true,
      temp: false,
      noCompletion: false
    },
    combined: {
      name: "Combined search",
      engines: ["opensearch", "internalsearch"],
      cache: {},
      show: true,
      temp: false,
      noCompletion: false
    },
    subcat: {
      name: "Subcategories",
      engines: ["subcategories"],
      cache: {},
      show: true,
      temp: true,
      noCompletion: true
    },
    parentcat: {
      name: "Parent categories",
      engines: ["parentcategories"],
      cache: {},
      show: true,
      temp: true,
      noCompletion: true
    }
  };
  const BS = 8;
  const TAB = 9;
  const RET = 13;
  const ESC = 27;
  const SPACE = 32;
  const PGUP = 33;
  const PGDOWN = 34;
  const UP = 38;
  const DOWN = 40;
  const DEL = 46;
  const IME = 229;
  class CategoryEditor {
    constructor(...args) {
      this.initialize(...args);
    }
    initialize(line, span, after, key, is_hidden) {
      if (span) {
        if (is_rtl) {
          span.dir = "rtl";
        }
        this.isAddCategory = false;
        this.catLink = span.firstChild;
        this.originalCategory = after;
        this.originalKey = key && key.length > 1 ? key.slice(1) : null;
        this.originalExists = !hasClass(this.catLink, "new");
        this.makeLinkSpan();
        if (!this.originalExists && this.upDownLinks) {
          this.upDownLinks.style.display = "none";
        }
        span.append(this.linkSpan);
      } else {
        this.isAddCategory = true;
        this.originalCategory = "";
        this.originalKey = null;
        this.originalExists = false;
        if (!newDOM) {
          span = make("span");
          span.className = "noprint";
          if (key) {
            span.append(make(" | ", true));
            if (after) {
              after.parentNode.insertBefore(span, after.nextSibling);
              after = after.nextSibling;
            } else if (line) {
              line.append(span);
            }
          } else if (line && line.firstChild) {
            span.append(make(" ", true));
            line.append(span);
          }
        }
        this.linkSpan = make("span");
        this.linkSpan.className = "noprint nopopups hotcatlink";
        const link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.open.bind(this));
        link.append(make(HC.links.add, true));
        link.title = getMessage("tooltips-add");
        this.linkSpan.append(link);
        span = make(newDOM ? "li" : "span");
        span.className = "noprint";
        if (is_rtl) {
          span.dir = "rtl";
        }
        span.append(this.linkSpan);
        if (after) {
          after.parentNode.insertBefore(span, after.nextSibling);
        } else if (line) {
          line.append(span);
        }
        this.normalLinks = null;
        this.undelLink = null;
        this.catLink = null;
      }
      this.originalHidden = is_hidden;
      this.line = line;
      this.engine = HC.suggestions;
      this.span = span;
      this.currentCategory = this.originalCategory;
      this.currentExists = this.originalExists;
      this.currentHidden = this.originalHidden;
      this.currentKey = this.originalKey;
      this.state = UNCHANGED;
      this.lastSavedState = UNCHANGED;
      this.lastSavedCategory = this.originalCategory;
      this.lastSavedKey = this.originalKey;
      this.lastSavedExists = this.originalExists;
      this.lastSavedHidden = this.originalHidden;
      if (this.catLink && this.currentKey) {
        this.catLink.title = this.currentKey;
      }
      editors[editors.length] = this;
    }
    makeLinkSpan() {
      this.normalLinks = make("span");
      let link = null;
      if (this.originalCategory && this.originalCategory.length > 0) {
        link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.remove.bind(this));
        link.append(make(HC.links.remove, true));
        link.title = getMessage("tooltips-remove");
        this.normalLinks.append(make(" ", true));
        this.normalLinks.append(link);
      }
      if (!HC.template_categories[this.originalCategory]) {
        link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.open.bind(this));
        link.append(make(HC.links.change, true));
        link.title = getMessage("tooltips-change");
        this.normalLinks.append(make(" ", true));
        this.normalLinks.append(link);
        if (!noSuggestions && HC.use_up_down) {
          this.upDownLinks = make("span");
          link = make("a");
          link.href = "#catlinks";
          link.addEventListener("click", this.down.bind(this));
          link.append(make(HC.links.down, true));
          link.title = getMessage("tooltips-down");
          this.upDownLinks.append(make(" ", true));
          this.upDownLinks.append(link);
          link = make("a");
          link.href = "#catlinks";
          link.addEventListener("click", this.up.bind(this));
          link.append(make(HC.links.up, true));
          link.title = getMessage("tooltips-up");
          this.upDownLinks.append(make(" ", true));
          this.upDownLinks.append(link);
          this.normalLinks.append(this.upDownLinks);
        }
      }
      this.linkSpan = make("span");
      this.linkSpan.className = "noprint nopopups hotcatlink";
      this.linkSpan.append(this.normalLinks);
      this.undelLink = make("span");
      this.undelLink.className = "nopopups hotcatlink";
      this.undelLink.style.display = "none";
      link = make("a");
      link.href = "#catlinks";
      link.addEventListener("click", this.restore.bind(this));
      link.append(make(HC.links.restore, true));
      link.title = getMessage("tooltips-restore");
      this.undelLink.append(make(" ", true));
      this.undelLink.append(link);
      this.linkSpan.append(this.undelLink);
    }
    invokeSuggestions(dont_autocomplete) {
      if (this.engine && suggestionConfigs[this.engine] && suggestionConfigs[this.engine].temp && !dont_autocomplete) {
        this.engine = HC.suggestions;
      }
      this.state = CHANGE_PENDING;
      const self2 = this;
      setTimeout(() => {
        self2.textchange(dont_autocomplete);
      }, HC.suggest_delay);
    }
    makeForm() {
      const form = make("form");
      form.method = "POST";
      form.addEventListener("submit", this.accept.bind(this));
      this.form = form;
      const self2 = this;
      const text = make("input");
      text.type = "text";
      text.size = HC.editbox_width;
      if (!noSuggestions) {
        text.addEventListener("keyup", (event) => {
          const key = event.key || 0;
          if (self2.ime && self2.lastKey === IME && !self2.usesComposition && (key === TAB || key === RET || key === ESC || key === SPACE)) {
            self2.ime = false;
          }
          if (self2.ime) {
            return true;
          }
          if (key === UP || key === DOWN || key === PGUP || key === PGDOWN) {
            if (self2.keyCount === 0) {
              return self2.processKey(event);
            }
          } else {
            if (key === ESC && self2.lastKey !== IME && !self2.resetKeySelection()) {
              self2.cancel();
              return;
            }
            self2.invokeSuggestions(key === BS || key === DEL || key === ESC);
          }
          return true;
        });
        text.addEventListener("keydown", (event) => {
          const key = event.key || 0;
          self2.lastKey = key;
          self2.keyCount = 0;
          if (!self2.ime && key === IME && !self2.usesComposition) {
            self2.ime = true;
          } else if (self2.ime && key !== IME && !(key >= 16 && key <= 20 || key >= 91 && key <= 93 || key === 144)) {
            self2.ime = false;
          }
          if (self2.ime) {
            return true;
          }
          if (key === RET) {
            return self2.accept(event);
          }
          return key === ESC ? evtKill(event) : true;
        });
        text.addEventListener("keypress", (event) => {
          self2.keyCount++;
          return self2.processKey(event);
        });
        $(text).on("focus", () => {
          makeActive(self2);
        });
        $(text).on(text.onbeforedeactivate !== void 0 && text.createTextRange ? "beforedeactivate" : "blur", this.saveView.bind(this));
        try {
          $(text).on("compositionstart", () => {
            self2.lastKey = IME;
            self2.usesComposition = true;
            self2.ime = true;
          });
          $(text).on("compositionend", () => {
            self2.lastKey = IME;
            self2.usesComposition = true;
            self2.ime = false;
          });
          $(text).on("textInput", () => {
            self2.ime = false;
            self2.invokeSuggestions(false);
          });
        } catch {
        }
        $(text).on("blur", () => {
          self2.usesComposition = false;
          self2.ime = false;
        });
      }
      this.text = text;
      this.icon = make("img");
      let list = null;
      if (!noSuggestions) {
        list = make("select");
        list.addEventListener("click", () => {
          if (self2.highlightSuggestion(0)) {
            self2.textchange(false, true);
          }
        });
        list.addEventListener("dblclick", (e) => {
          if (self2.highlightSuggestion(0)) {
            self2.accept(e);
          }
        });
        list.addEventListener("change", () => {
          self2.highlightSuggestion(0);
          self2.text.focus();
        });
        list.addEventListener("keyup", (event) => {
          if (event.key === ESC) {
            self2.resetKeySelection();
            self2.text.focus();
            setTimeout(() => {
              self2.textchange(true);
            }, HC.suggest_delay);
          } else if (event.key === RET) {
            self2.accept(event);
          }
        });
        if (!HC.fixed_search) {
          const engineSelector = make("select");
          for (const key in suggestionConfigs) {
            if (suggestionConfigs[key].show) {
              const opt = make("option");
              opt.value = key;
              if (key === this.engine) {
                opt.selected = true;
              }
              opt.append(make(suggestionConfigs[key].name, true));
              engineSelector.append(opt);
            }
          }
          engineSelector.addEventListener("change", () => {
            self2.engine = self2.engineSelector.options[self2.engineSelector.selectedIndex].value;
            self2.text.focus();
            self2.textchange(true, true);
          });
          this.engineSelector = engineSelector;
        }
      }
      this.list = list;
      const button_label = (_id, defaultText) => {
        const label = null;
        if (!label || !label.data) {
          return defaultText;
        }
        return label.data;
      };
      const OK = make("input");
      OK.type = "button";
      OK.value = button_label("wpOkUploadLbl", getMessage("messages-ok"));
      OK.addEventListener("click", this.accept.bind(this));
      this.ok = OK;
      const cancel = make("input");
      cancel.type = "button";
      cancel.value = button_label("wpCancelUploadLbl", getMessage("messages-cancel"));
      cancel.addEventListener("click", this.cancel.bind(this));
      this.cancelButton = cancel;
      const span = make("span");
      span.className = "hotcatinput";
      span.style.position = "relative";
      span.append(text);
      span.append(make(" ", true));
      span.style.whiteSpace = "nowrap";
      if (list) {
        span.append(list);
      }
      if (this.engineSelector) {
        span.append(this.engineSelector);
      }
      if (!noSuggestions) {
        span.append(this.icon);
      }
      span.append(OK);
      span.append(cancel);
      form.append(span);
      form.style.display = "none";
      this.span.append(form);
    }
    display(event) {
      if (this.isAddCategory && !onUpload && this.line) {
        new CategoryEditor(this.line, null, this.span, true);
      }
      if (!commitButton && !onUpload) {
        for (var _i4 = 0, _editors4 = editors; _i4 < _editors4.length; _i4++) {
          const editor = _editors4[_i4];
          if (editor.state !== UNCHANGED) {
            setMultiInput();
            break;
          }
        }
      }
      if (!this.form) {
        this.makeForm();
      }
      if (this.list) {
        this.list.style.display = "none";
      }
      if (this.engineSelector) {
        this.engineSelector.style.display = "none";
      }
      this.currentCategory = this.lastSavedCategory;
      this.currentExists = this.lastSavedExists;
      this.currentHidden = this.lastSavedHidden;
      this.currentKey = this.lastSavedKey;
      this.icon.src = this.currentExists ? HC.existsYes : HC.existsNo;
      this.text.value = this.currentCategory + (this.currentKey === null ? "" : "|".concat(this.currentKey));
      this.originalState = this.state;
      this.lastInput = this.currentCategory;
      this.inputExists = this.currentExists;
      this.state = this.state === UNCHANGED ? OPEN : CHANGE_PENDING;
      this.lastSelection = {
        start: this.currentCategory.length,
        end: this.currentCategory.length
      };
      this.showsList = false;
      if (this.catLink) {
        this.catLink.style.display = "none";
      }
      this.linkSpan.style.display = "none";
      this.form.style.display = "inline";
      this.ok.disabled = false;
      const result = evtKill(event);
      this.text.focus();
      this.text.readOnly = false;
      checkMultiInput();
      return result;
    }
    show(event, engine, readOnly) {
      const result = this.display(event);
      const v = this.lastSavedCategory;
      if (v.length === 0) {
        return result;
      }
      this.text.readOnly = !!readOnly;
      this.engine = engine;
      this.textchange(false, true);
      return result;
    }
    open(event) {
      return this.show(event, this.engine && suggestionConfigs[this.engine].temp ? HC.suggestions : this.engine);
    }
    down(event) {
      return this.show(event, "subcat", true);
    }
    up(event) {
      return this.show(event, "parentcat");
    }
    cancel() {
      if (this.isAddCategory && !onUpload) {
        this.removeEditor();
        return;
      }
      this.inactivate();
      this.form.style.display = "none";
      if (this.catLink) {
        this.catLink.style.display = "";
      }
      this.linkSpan.style.display = "";
      this.state = this.originalState;
      this.currentCategory = this.lastSavedCategory;
      this.currentKey = this.lastSavedKey;
      this.currentExists = this.lastSavedExists;
      this.currentHidden = this.lastSavedHidden;
      if (this.catLink) {
        this.catLink.title = this.currentKey && this.currentKey.length > 0 ? this.currentKey : "";
      }
      if (this.state === UNCHANGED) {
        if (this.catLink) {
          this.catLink.style.backgroundColor = "transparent";
        }
      } else if (!onUpload) {
        try {
          this.catLink.style.backgroundColor = HC.bg_changed;
        } catch {
        }
      }
      checkMultiInput();
    }
    removeEditor() {
      if (!newDOM) {
        const next = this.span.nextSibling;
        if (next) {
          next.remove();
        }
      }
      if (this.span && this.span.parentNode) {
        this.span.remove();
      }
      for (let i = 0; i < editors.length; i++) {
        if (editors[i] === this) {
          editors.splice(i, 1);
          break;
        }
      }
      checkMultiInput();
    }
    rollback(event) {
      this.undoLink.remove();
      this.undoLink = null;
      this.currentCategory = this.originalCategory;
      this.currentKey = this.originalKey;
      this.currentExists = this.originalExists;
      this.currentHidden = this.originalHidden;
      this.lastSavedCategory = this.originalCategory;
      this.lastSavedKey = this.originalKey;
      this.lastSavedExists = this.originalExists;
      this.lastSavedHidden = this.originalHidden;
      this.state = UNCHANGED;
      if (!this.currentCategory || this.currentCategory.length === 0) {
        this.removeEditor();
      } else {
        this.catLink.firstChild.remove();
        this.catLink.append(make(this.currentCategory, true));
        this.catLink.href = wikiPagePath("".concat(HC.category_canonical, ":").concat(this.currentCategory));
        this.catLink.title = this.currentKey || "";
        this.catLink.className = this.currentExists ? "" : "new";
        this.catLink.style.backgroundColor = "transparent";
        if (this.upDownLinks) {
          this.upDownLinks.style.display = this.currentExists ? "" : "none";
        }
        checkMultiInput();
      }
      return evtKill(event);
    }
    inactivate() {
      if (this.list) {
        this.list.style.display = "none";
      }
      if (this.engineSelector) {
        this.engineSelector.style.display = "none";
      }
      this.is_active = false;
    }
    acceptCheck(dontCheck) {
      this.sanitizeInput();
      const value = this.text.value.split("|");
      let key = null;
      if (value.length > 1) {
        [, key] = value;
      }
      let v = value[0].replace(/_/g, " ").trim();
      if (HC.capitalizePageNames) {
        v = capitalize(v);
      }
      this.lastInput = v;
      v = replaceShortcuts(v, HC.shortcuts);
      if (v.length === 0) {
        this.cancel();
        return false;
      }
      if (!dontCheck && (conf.wgNamespaceNumber === 14 && v === conf.wgTitle || HC.blacklist && HC.blacklist.test(v))) {
        this.cancel();
        return false;
      }
      this.currentCategory = v;
      this.currentKey = key;
      this.currentExists = this.inputExists;
      return true;
    }
    accept(event) {
      this.noCommit = evtKeys(event) === 1;
      const result = evtKill(event);
      if (this.acceptCheck()) {
        const toResolve = [this];
        const original = this.currentCategory;
        resolveMulti(toResolve, (resolved) => {
          if (resolved[0].dab) {
            showDab(resolved[0]);
          } else if (resolved[0].acceptCheck(true)) {
            resolved[0].commit(resolved[0].currentCategory === original ? null : getMessage("messages-cat_resolved", original));
          }
        });
      }
      return result;
    }
    close() {
      if (!this.catLink) {
        this.catLink = make("a");
        this.catLink.append(make("foo", true));
        this.catLink.style.display = "none";
        this.span.insertBefore(this.catLink, this.span.firstChild.nextSibling);
      }
      this.catLink.firstChild.remove();
      this.catLink.append(make(this.currentCategory, true));
      this.catLink.href = wikiPagePath("".concat(HC.category_canonical, ":").concat(this.currentCategory));
      this.catLink.className = this.currentExists ? "" : "new";
      this.lastSavedCategory = this.currentCategory;
      this.lastSavedKey = this.currentKey;
      this.lastSavedExists = this.currentExists;
      this.lastSavedHidden = this.currentHidden;
      this.inactivate();
      this.form.style.display = "none";
      this.catLink.title = this.currentKey || "";
      this.catLink.style.display = "";
      if (this.isAddCategory) {
        if (onUpload && this.line) {
          new CategoryEditor(this.line, null, this.span, true);
        }
        this.isAddCategory = false;
        this.linkSpan.remove();
        this.makeLinkSpan();
        this.span.append(this.linkSpan);
      }
      if (!this.undoLink) {
        const span = make("span");
        const link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.rollback.bind(this));
        link.append(make(HC.links.undo, true));
        link.title = getMessage("tooltips-undo");
        span.append(make(" ", true));
        span.append(link);
        this.normalLinks.append(span);
        this.undoLink = span;
        if (!onUpload) {
          try {
            this.catLink.style.backgroundColor = HC.bg_changed;
          } catch {
          }
        }
      }
      if (this.upDownLinks) {
        this.upDownLinks.style.display = this.lastSavedExists ? "" : "none";
      }
      this.linkSpan.style.display = "";
      this.state = CHANGED;
      checkMultiInput();
    }
    commit() {
      if (this.currentCategory === this.originalCategory && (this.currentKey === this.originalKey || this.currentKey === null && this.originalKey.length === 0) || conf.wgNamespaceNumber === 14 && this.currentCategory === conf.wgTitle || HC.blacklist && HC.blacklist.test(this.currentCategory)) {
        this.cancel();
        return;
      }
      this.close();
      if (!commitButton && !onUpload) {
        const self2 = this;
        initiateEdit((failure) => {
          performChanges(failure, self2);
        }, (msg) => {
          mw.notify(msg, {
            tag: "hotCat"
          });
        });
      }
    }
    remove(event) {
      this.doRemove(evtKeys(event) === 1);
      return evtKill(event);
    }
    doRemove(noCommit) {
      if (this.isAddCategory) {
        this.cancel();
        return;
      }
      if (!commitButton && !onUpload) {
        for (var _i5 = 0, _editors5 = editors; _i5 < _editors5.length; _i5++) {
          const editor = _editors5[_i5];
          if (editor.state !== UNCHANGED) {
            setMultiInput();
            break;
          }
        }
      }
      if (commitButton) {
        this.catLink.title = "";
        this.catLink.style.cssText += "; text-decoration : line-through !important;";
        try {
          this.catLink.style.backgroundColor = HC.bg_changed;
        } catch {
        }
        this.originalState = this.state;
        this.state = DELETED;
        this.normalLinks.style.display = "none";
        this.undelLink.style.display = "";
        checkMultiInput();
      } else if (onUpload) {
        this.removeEditor();
      } else {
        this.originalState = this.state;
        this.state = DELETED;
        this.noCommit = noCommit || HC.del_needs_diff;
        const self2 = this;
        initiateEdit((failure) => {
          performChanges(failure, self2);
        }, (msg) => {
          self2.state = self2.originalState;
          mw.notify(msg, {
            tag: "hotCat"
          });
        });
      }
    }
    restore(event) {
      this.catLink.title = this.currentKey || "";
      this.catLink.style.textDecoration = "";
      this.state = this.originalState;
      if (this.state === UNCHANGED) {
        this.catLink.style.backgroundColor = "transparent";
      } else {
        try {
          this.catLink.style.backgroundColor = HC.bg_changed;
        } catch {
        }
      }
      this.normalLinks.style.display = "";
      this.undelLink.style.display = "none";
      checkMultiInput();
      return evtKill(event);
    }
    // Internal operations
    selectEngine(engineName) {
      if (!this.engineSelector) {
        return;
      }
      for (let i = 0; i < this.engineSelector.options.length; i++) {
        this.engineSelector.options[i].selected = this.engineSelector.options[i].value === engineName;
      }
    }
    sanitizeInput() {
      let v = this.text.value || "";
      v = v.replace(/^(\s|_)+/, "");
      const re = new RegExp("^(".concat(HC.category_regexp, "):"));
      if (re.test(v)) {
        v = v.slice(Math.max(0, v.indexOf(":") + 1)).replace(/^(\s|_)+/, "");
      }
      v = v.replace(/\u200E$/, "");
      if (HC.capitalizePageNames) {
        v = capitalize(v);
      }
      if (this.text.value !== null && this.text.value !== v) {
        this.text.value = v;
      }
    }
    makeCall(url, callbackObj, engine, queryKey, cleanKey) {
      let cb = callbackObj;
      const e = engine;
      const v = queryKey;
      const z = cleanKey;
      const self2 = this;
      const done = () => {
        cb.callsMade++;
        if (cb.callsMade === cb.nofCalls) {
          if (cb.exists) {
            cb.allTitles.exists = true;
          }
          if (cb.normalized) {
            cb.allTitles.normalized = cb.normalized;
          }
          if (!cb.dontCache && !suggestionConfigs[cb.engineName].cache[z]) {
            suggestionConfigs[cb.engineName].cache[z] = cb.allTitles;
          }
          self2.text.readOnly = false;
          if (!cb.cancelled) {
            self2.showSuggestions(cb.allTitles, cb.noCompletion, v, cb.engineName);
          }
          if (cb === self2.callbackObj) {
            self2.callbackObj = null;
          }
          cb = void 0;
        }
      };
      $.getJSON(url, (json) => {
        const titles = e.handler(json, z);
        if (titles && titles.length > 0) {
          cb.allTitles = cb.allTitles === null ? titles : [...cb.allTitles, ...Array.isArray(titles) ? titles : [titles]];
          if (titles.exists) {
            cb.exists = true;
          }
          if (titles.normalized) {
            cb.normalized = titles.normalized;
          }
        }
        done();
      }).fail((req) => {
        if (!req) {
          noSuggestions = true;
        }
        cb.dontCache = true;
        done();
      });
    }
    callbackObj = null;
    textchange(dont_autocomplete, force) {
      makeActive(this);
      this.sanitizeInput();
      let v = this.text.value;
      const pipe = v.indexOf("|");
      if (pipe >= 0) {
        this.currentKey = v.slice(Math.max(0, pipe + 1));
        v = v.slice(0, Math.max(0, pipe));
      } else {
        this.currentKey = null;
      }
      if (this.lastInput === v && !force) {
        return;
      }
      if (this.lastInput !== v) {
        checkMultiInput();
      }
      this.lastInput = v;
      this.lastRealInput = v;
      this.ok.disabled = v.length > 0 && HC.blacklist && HC.blacklist.test(v);
      if (noSuggestions) {
        if (this.list) {
          this.list.style.display = "none";
        }
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        if (this.icon) {
          this.icon.style.display = "none";
        }
        return;
      }
      if (v.length === 0) {
        this.showSuggestions([]);
        return;
      }
      let cleanKey = v.replace(/[\u200E\u200F\u202A-\u202E]/g, "").replace(wikiTextBlankRE, " ");
      cleanKey = replaceShortcuts(cleanKey, HC.shortcuts);
      cleanKey = cleanKey.trim();
      if (cleanKey.length === 0) {
        this.showSuggestions([]);
        return;
      }
      if (this.callbackObj) {
        this.callbackObj.cancelled = true;
      }
      const engineName = suggestionConfigs[this.engine] ? this.engine : "combined";
      dont_autocomplete || (dont_autocomplete = suggestionConfigs[engineName].noCompletion);
      if (suggestionConfigs[engineName].cache[cleanKey]) {
        this.showSuggestions(suggestionConfigs[engineName].cache[cleanKey], dont_autocomplete, v, engineName);
        return;
      }
      const {
        engines
      } = suggestionConfigs[engineName];
      this.callbackObj = {
        allTitles: null,
        callsMade: 0,
        nofCalls: engines.length,
        noCompletion: dont_autocomplete,
        engineName
      };
      this.makeCalls(engines, this.callbackObj, v, cleanKey);
    }
    makeCalls(engines, cb, v, cleanKey) {
      var _iterator3 = _createForOfIteratorHelper(engines), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const engine_ = _step3.value;
          const engine = suggestionEngines[engine_];
          const url = conf.wgScriptPath + engine.uri.replace(/\$1/g, encodeURIComponent(cleanKey));
          this.makeCall(url, cb, engine, v, cleanKey);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    showSuggestions(titles, dontAutocomplete, queryKey, engineName) {
      this.text.readOnly = false;
      this.dab = null;
      this.showsList = false;
      if (!this.list) {
        return;
      }
      if (noSuggestions) {
        if (this.list) {
          this.list.style.display = "none";
        }
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        if (this.icon) {
          this.icon.style.display = "none";
        }
        this.inputExists = true;
        return;
      }
      this.engineName = engineName;
      if (engineName) {
        if (!this.engineSelector) {
          this.engineName = null;
        }
      } else if (this.engineSelector) {
        this.engineSelector.style.display = "none";
      }
      if (queryKey) {
        if (this.lastInput.indexOf(queryKey)) {
          return;
        }
        if (this.lastQuery && this.lastInput.indexOf(this.lastQuery) === 0 && this.lastQuery.length > queryKey.length) {
          return;
        }
      }
      this.lastQuery = queryKey;
      let v = this.text.value.split("|");
      const key = v.length > 1 ? "|".concat(v[1]) : "";
      v = HC.capitalizePageNames ? capitalize(v[0]) : v[0];
      let vNormalized = v;
      const knownToExist = titles && titles.exists;
      let i;
      if (titles) {
        if (titles.normalized && v.indexOf(queryKey) === 0) {
          vNormalized = titles.normalized + v.slice(queryKey.length);
        }
        const vLow = vNormalized.toLowerCase();
        if (HC.blacklist) {
          for (i = 0; i < titles.length; i++) {
            if (HC.blacklist.test(titles[i])) {
              titles.splice(i, 1);
              i--;
            }
          }
        }
        titles.sort((a, b) => {
          if (a === b) {
            return 0;
          }
          if (a.indexOf(b) === 0) {
            return 1;
          }
          if (b.indexOf(a) === 0) {
            return -1;
          }
          let prefixMatchA = a.indexOf(vNormalized) === 0 ? 1 : 0;
          let prefixMatchB = b.indexOf(vNormalized) === 0 ? 1 : 0;
          if (prefixMatchA !== prefixMatchB) {
            return prefixMatchB - prefixMatchA;
          }
          const aLow = a.toLowerCase();
          const bLow = b.toLowerCase();
          prefixMatchA = aLow.indexOf(vLow) === 0 ? 1 : 0;
          prefixMatchB = bLow.indexOf(vLow) === 0 ? 1 : 0;
          if (prefixMatchA !== prefixMatchB) {
            return prefixMatchB - prefixMatchA;
          }
          if (a < b) {
            return -1;
          }
          if (b < a) {
            return 1;
          }
          return 0;
        });
        for (i = 0; i < titles.length; i++) {
          if (i + 1 < titles.length && titles[i] === titles[i + 1] || conf.wgNamespaceNumber === 14 && titles[i] === conf.wgTitle) {
            titles.splice(i, 1);
            i--;
          }
        }
      }
      if (!titles || titles.length === 0) {
        if (this.list) {
          this.list.style.display = "none";
        }
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        if (engineName && suggestionConfigs[engineName] && !suggestionConfigs[engineName].temp) {
          if (this.icon) {
            this.icon.src = HC.existsNo;
          }
          this.inputExists = false;
        }
        return;
      }
      const [firstTitle] = titles;
      const completed = this.autoComplete(firstTitle, v, vNormalized, key, dontAutocomplete);
      const existing = completed || knownToExist || firstTitle === replaceShortcuts(v, HC.shortcuts);
      if (engineName && suggestionConfigs[engineName] && !suggestionConfigs[engineName].temp) {
        this.icon.src = existing ? HC.existsYes : HC.existsNo;
        this.inputExists = existing;
      }
      if (completed) {
        this.lastInput = firstTitle;
        if (titles.length === 1) {
          this.list.style.display = "none";
          if (this.engineSelector) {
            this.engineSelector.style.display = "none";
          }
          return;
        }
      }
      while (this.list.firstChild) {
        this.list.firstChild.remove();
      }
      for (i = 0; i < titles.length; i++) {
        const opt = make("option");
        opt.append(make(titles[i], true));
        opt.selected = completed && i === 0;
        this.list.append(opt);
      }
      this.displayList();
    }
    displayList() {
      this.showsList = true;
      if (!this.is_active) {
        this.list.style.display = "none";
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        return;
      }
      let nofItems = this.list.options.length > HC.listSize ? HC.listSize : this.list.options.length;
      if (nofItems <= 1) {
        nofItems = 2;
      }
      this.list.size = nofItems;
      this.list.style.align = is_rtl ? "right" : "left";
      this.list.style.zIndex = 5;
      this.list.style.position = "absolute";
      const anchor = is_rtl ? "right" : "left";
      let listh = 0;
      if (this.list.style.display === "none") {
        this.list.style.top = "".concat(this.text.offsetTop, "px");
        this.list.style[anchor] = "-10000px";
        this.list.style.display = "";
        listh = this.list.offsetHeight;
        this.list.style.display = "none";
      } else {
        listh = this.list.offsetHeight;
      }
      let maxListHeight = listh;
      if (nofItems < HC.listSize) {
        maxListHeight = listh / nofItems * HC.listSize;
      }
      const viewport = (what) => {
        if (is_webkit && !document.evaluate) {
          return window["inner".concat(what)];
        }
        const s = "client".concat(what);
        if (window.opera) {
          return $("body")[0][s];
        }
        return (document.documentElement ? document.documentElement[s] : 0) || $("body")[0][s] || 0;
      };
      const scroll_offset = (what) => {
        const s = "scroll".concat(what);
        let result = (document.documentElement ? document.documentElement[s] : 0) || $("body")[0][s] || 0;
        if (is_rtl && what === "Left") {
          if (result < 0) {
            result = -result;
          }
          if (!is_webkit) {
            result = scroll_offset("Width") - viewport("Width") - result;
          }
        }
        return result;
      };
      const position = (node) => {
        if (node.getBoundingClientRect) {
          const box = node.getBoundingClientRect();
          return {
            x: Math.round(box.left + scroll_offset("Left")),
            y: Math.round(box.top + scroll_offset("Top"))
          };
        }
        let t = 0;
        let l = 0;
        do {
          t += node.offsetTop || 0;
          l += node.offsetLeft || 0;
          node = node.offsetParent;
        } while (node);
        return {
          x: l,
          y: t
        };
      };
      const textPos = position(this.text);
      const nl = 0;
      let nt = 0;
      let offset = 0;
      const textBoxWidth = this.text.offsetWidth || this.text.clientWidth;
      if (this.engineName) {
        this.engineSelector.style.zIndex = 5;
        this.engineSelector.style.position = "absolute";
        this.engineSelector.style.width = "".concat(textBoxWidth, "px");
        if (this.engineSelector.style.display === "none") {
          this.engineSelector.style[anchor] = "-10000px";
          this.engineSelector.style.top = "0";
          this.engineSelector.style.display = "";
          offset = this.engineSelector.offsetHeight;
          this.engineSelector.style.display = "none";
        } else {
          offset = this.engineSelector.offsetHeight;
        }
        this.engineSelector.style[anchor] = "".concat(nl, "px");
      }
      if (textPos.y < maxListHeight + offset + 1) {
        nt = this.text.offsetHeight + offset + 1;
        if (this.engineName) {
          this.engineSelector.style.top = "".concat(this.text.offsetHeight, "px");
        }
      } else {
        nt = -listh - offset - 1;
        if (this.engineName) {
          this.engineSelector.style.top = "".concat(-(offset + 1), "px");
        }
      }
      this.list.style.top = "".concat(nt, "px");
      this.list.style.width = "";
      this.list.style[anchor] = "".concat(nl, "px");
      if (this.engineName) {
        this.selectEngine(this.engineName);
        this.engineSelector.style.display = "";
      }
      this.list.style.display = "block";
      if (this.list.offsetWidth < textBoxWidth) {
        this.list.style.width = "".concat(textBoxWidth, "px");
        return;
      }
      const scroll = scroll_offset("Left");
      const view_w = viewport("Width");
      let w = this.list.offsetWidth;
      const l_pos = position(this.list);
      let left = l_pos.x;
      let right = left + w;
      if (left < scroll || right > scroll + view_w) {
        if (w > view_w) {
          w = view_w;
          this.list.style.width = "".concat(w, "px");
          if (is_rtl) {
            left = right - w;
          } else {
            right = left + w;
          }
        }
        let relative_offset = 0;
        if (left < scroll) {
          relative_offset = scroll - left;
        } else if (right > scroll + view_w) {
          relative_offset = -(right - scroll - view_w);
        }
        if (is_rtl) {
          relative_offset = -relative_offset;
        }
        if (relative_offset) {
          this.list.style[anchor] = "".concat(nl + relative_offset, "px");
        }
      }
    }
    autoComplete(newVal, actVal, normalizedActVal, key, dontModify) {
      if (newVal === actVal) {
        return true;
      }
      if (dontModify || this.ime || !this.canSelect()) {
        return false;
      }
      if (newVal.indexOf(actVal)) {
        if (normalizedActVal && newVal.indexOf(normalizedActVal) === 0) {
          if (this.lastRealInput === actVal) {
            this.lastRealInput = normalizedActVal;
          }
          actVal = normalizedActVal;
        } else {
          return false;
        }
      }
      this.text.focus();
      this.text.value = newVal + key;
      this.setSelection(actVal.length, newVal.length);
      return true;
    }
    canSelect() {
      return this.text.setSelectionRange || this.text.createTextRange || this.text.selectionStart !== void 0 && this.text.selectionEnd !== void 0;
    }
    setSelection(from, to) {
      if (!this.text.value) {
        return;
      }
      if (this.text.setSelectionRange) {
        this.text.setSelectionRange(from, to);
      } else if (this.text.selectionStart !== void 0) {
        if (from > this.text.selectionStart) {
          this.text.selectionEnd = to;
          this.text.selectionStart = from;
        } else {
          this.text.selectionStart = from;
          this.text.selectionEnd = to;
        }
      } else if (this.text.createTextRange) {
        const new_selection = this.text.createTextRange();
        new_selection.move("character", from);
        new_selection.moveEnd("character", to - from);
        new_selection.select();
      }
    }
    getSelection() {
      let from = 0;
      let to = 0;
      if (!this.text.value) {
      } else if (this.text.selectionStart !== void 0) {
        from = this.text.selectionStart;
        to = this.text.selectionEnd;
      } else if (document.selection && document.selection.createRange) {
        const rng = document.selection.createRange().duplicate();
        if (rng.parentNode() === this.text) {
          try {
            const textRng = this.text.createTextRange();
            textRng.move("character", 0);
            textRng.setEndPoint("EndToEnd", rng);
            to = textRng.text.length;
            textRng.setEndPoint("EndToStart", rng);
            from = textRng.text.length;
          } catch {
            from = this.text.value.length;
            to = from;
          }
        }
      }
      return {
        start: from,
        end: to
      };
    }
    saveView() {
      this.lastSelection = this.getSelection();
    }
    processKey(event) {
      let dir = 0;
      switch (this.lastKey) {
        case UP:
          dir = -1;
          break;
        case DOWN:
          dir = 1;
          break;
        case PGUP:
          dir = -HC.listSize;
          break;
        case PGDOWN:
          dir = HC.listSize;
          break;
        case ESC:
          return evtKill(event);
      }
      if (dir) {
        if (this.list.style.display !== "none") {
          this.highlightSuggestion(dir);
          return evtKill(event);
        } else if (this.keyCount <= 1 && (!this.callbackObj || this.callbackObj.callsMade === this.callbackObj.nofCalls)) {
          this.textchange();
        }
      }
      return true;
    }
    highlightSuggestion(dir) {
      if (noSuggestions || !this.list || this.list.style.display === "none") {
        return false;
      }
      const curr = this.list.selectedIndex;
      let tgt = -1;
      if (dir === 0) {
        if (curr < 0 || curr >= this.list.options.length) {
          return false;
        }
        tgt = curr;
      } else {
        tgt = curr < 0 ? 0 : curr + dir;
        tgt = tgt < 0 ? 0 : tgt;
        if (tgt >= this.list.options.length) {
          tgt = this.list.options.length - 1;
        }
      }
      if (tgt !== curr || dir === 0) {
        if (curr >= 0 && curr < this.list.options.length && dir !== 0) {
          this.list.options[curr].selected = false;
        }
        this.list.options[tgt].selected = true;
        const v = this.text.value.split("|");
        const key = v.length > 1 ? "|".concat(v[1]) : "";
        const completed = this.autoComplete(this.list.options[tgt].text, this.lastRealInput, null, key, false);
        if (!completed || this.list.options[tgt].text === this.lastRealInput) {
          this.text.value = this.list.options[tgt].text + key;
          if (this.canSelect()) {
            this.setSelection(this.list.options[tgt].text.length, this.list.options[tgt].text.length);
          }
        }
        this.lastInput = this.list.options[tgt].text;
        this.inputExists = true;
        if (this.icon) {
          this.icon.src = HC.existsYes;
        }
        this.state = CHANGE_PENDING;
      }
      return true;
    }
    resetKeySelection() {
      if (noSuggestions || !this.list || this.list.style.display === "none") {
        return false;
      }
      const curr = this.list.selectedIndex;
      if (curr >= 0 && curr < this.list.options.length) {
        this.list.options[curr].selected = false;
        const v = this.text.value.split("|");
        const key = v.length > 1 ? "|".concat(v[1]) : "";
        let result = v[0] !== this.lastInput;
        if (v[0] !== this.lastRealInput) {
          this.text.value = this.lastRealInput + key;
          result = true;
        }
        this.lastInput = this.lastRealInput;
        return result;
      }
      return false;
    }
  }
  const initialize = () => {
    const config = {};
    HC.dont_add_to_watchlist = window.hotcat_dont_add_to_watchlist === void 0 ? config.HotCatDontAddToWatchlist === void 0 ? HC.dont_add_to_watchlist : config.HotCatDontAddToWatchlist : !!window.hotcat_dont_add_to_watchlist;
    HC.no_autocommit = window.hotcat_no_autocommit === void 0 ? config.HotCatNoAutoCommit === void 0 ? conf.wgNamespaceNumber % 2 ? true : HC.no_autocommit : config.HotCatNoAutoCommit : !!window.hotcat_no_autocommit;
    HC.del_needs_diff = window.hotcat_del_needs_diff === void 0 ? config.HotCatDelNeedsDiff === void 0 ? HC.del_needs_diff : config.HotCatDelNeedsDiff : !!window.hotcat_del_needs_diff;
    HC.suggest_delay = window.hotcat_suggestion_delay || config.HotCatSuggestionDelay || HC.suggest_delay;
    HC.editbox_width = window.hotcat_editbox_width || config.HotCatEditBoxWidth || HC.editbox_width;
    HC.suggestions = window.hotcat_suggestions || config.HotCatSuggestions || HC.suggestions;
    if (typeof HC.suggestions !== "string" || !suggestionConfigs[HC.suggestions]) {
      HC.suggestions = "combined";
    }
    HC.fixed_search = window.hotcat_suggestions_fixed === void 0 ? config.HotCatFixedSuggestions === void 0 ? HC.fixed_search : config.HotCatFixedSuggestions : !!window.hotcat_suggestions_fixed;
    HC.single_minor = window.hotcat_single_changes_are_minor === void 0 ? config.HotCatMinorSingleChanges === void 0 ? HC.single_minor : config.HotCatMinorSingleChanges : !!window.hotcat_single_changes_are_minor;
    HC.bg_changed = window.hotcat_changed_background || config.HotCatChangedBackground || HC.bg_changed;
    HC.use_up_down = window.hotcat_use_category_links === void 0 ? config.HotCatUseCategoryLinks === void 0 ? HC.use_up_down : config.HotCatUseCategoryLinks : !!window.hotcat_use_category_links;
    HC.listSize = window.hotcat_list_size || config.HotCatListSize || HC.listSize;
    HC.changeTag = config.HotCatChangeTag || "";
    if (HC.changeTag) {
      const eForm = document.editform;
      const catRegExp = new RegExp("^\\[\\[(".concat(HC.category_regexp, "):"));
      let oldTxt;
      const isMinorChange = () => {
        let newTxt = eForm.wpTextbox1;
        if (!newTxt) {
          return;
        }
        newTxt = newTxt.value;
        const oldLines = oldTxt.match(/^.*$/gm);
        const newLines = newTxt.match(/^.*$/gm);
        let cArr;
        const except = (aArr, bArr) => {
          const result = [];
          let lArr;
          let sArr;
          if (aArr.length < bArr.length) {
            lArr = bArr;
            sArr = aArr;
          } else {
            lArr = aArr;
            sArr = bArr;
          }
          var _iterator4 = _createForOfIteratorHelper(lArr), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              const item = _step4.value;
              const ind = sArr.indexOf(item);
              if (ind === -1) {
                result.push(item);
              } else {
                sArr.splice(ind, 1);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          return [...result, ...sArr];
        };
        cArr = except(oldLines, newLines);
        if (cArr.length > 0) {
          cArr = cArr.filter((c) => {
            c = c.trim();
            return c && !catRegExp.test(c);
          });
        }
        if (cArr.length === 0) {
          oldTxt = newTxt;
          return true;
        }
      };
      if (conf.wgAction === "submit" && conf.wgArticleId && eForm && eForm.wpSummary && document.querySelector("#wikiDiff")) {
        const sum = eForm.wpSummary;
        const sumA = eForm.wpAutoSummary;
        if (sum.value && sumA.value === HC.changeTag) {
          sumA.value = sumA.value.replace(HC.changeTag, "d41d8cd98f00b204e9800998ecf8427e");
          const $ct = $("<input>").attr({
            type: "hidden",
            name: "wpChangeTags"
          }).val(HC.changeTag);
          $(eForm).append($ct);
          oldTxt = eForm.wpTextbox1.value;
          const $body = $("body");
          $body.find("input[name=wpSave]").one("click", () => {
            if ($ct.val()) {
              sum.value = sum.value.replace(getMessage("messages-using") || getMessage("messages-prefix"), "");
            }
          });
          const removeChangeTag = () => {
            $(eForm.wpTextbox1).add(sum).one("input", () => {
              setTimeout(() => {
                if (isMinorChange()) {
                  removeChangeTag();
                } else {
                  $ct.val("");
                }
              }, 500);
            });
          };
          removeChangeTag();
        }
      }
    }
    HC.listSize = Number.parseInt(HC.listSize, 10);
    if (Number.isNaN(HC.listSize) || HC.listSize < 5) {
      HC.listSize = 5;
    }
    HC.listSize = Math.min(HC.listSize, 30);
    for (var _i6 = 0, _Object$entries = Object.entries(suggestionConfigs); _i6 < _Object$entries.length; _i6++) {
      const [key, suggestionConfig] = _Object$entries[_i6];
      try {
        if (key && getMessage("engine_names-".concat(key))) {
          suggestionConfig.name = getMessage("engine_names-".concat(key));
        }
      } catch {
        continue;
      }
    }
    is_rtl = hasClass(document.querySelector("body"), "rtl");
    if (!is_rtl) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        is_rtl = document.defaultView.getComputedStyle(document.querySelector("body"), null).getPropertyValue("direction");
      } else if ($("body")[0].currentStyle) {
        is_rtl = $("body")[0].currentStyle.direction;
      } else {
        is_rtl = $("body")[0].style.direction;
      }
      is_rtl = is_rtl === "rtl";
    }
  };
  const can_edit = () => {
    return document.querySelector("#ca-edit") !== null;
  };
  const closeForm = function() {
    for (var _i7 = 0, _editors6 = editors; _i7 < _editors6.length; _i7++) {
      const edit = _editors6[_i7];
      if (edit.state === OPEN) {
        edit.cancel();
      } else if (edit.state === CHANGE_PENDING) {
        edit.sanitizeInput();
        const value = edit.text.value.split("|");
        let key = null;
        if (value.length > 1) {
          [, key] = value;
        }
        const v = value[0].replace(/_/g, " ").trim();
        if (v.length === 0) {
          edit.cancel();
        } else {
          edit.currentCategory = v;
          edit.currentKey = key;
          edit.currentExists = this.inputExists;
          edit.close();
        }
      }
    }
  };
  const setup_upload = () => {
    onUpload = true;
    let ip = document.querySelector("#mw-htmlform-description") || document.querySelector("input[name=wpDestFile]");
    if (!ip) {
      ip = document.querySelector("input[name=wpDestFile]");
      while (ip && ip.nodeName.toLowerCase() !== "table") {
        ip = ip.parentNode;
      }
    }
    if (!ip) {
      return;
    }
    const reupload = document.querySelector("input[name=wpForReUpload]");
    const destFile = document.querySelector("input[name=wpDestFile]");
    if (reupload && !!reupload.value || destFile && (destFile.disabled || destFile.readOnly)) {
      return;
    }
    const labelCell = make("td");
    const lineCell = make("td");
    catLine = make("div");
    catLine.className = "catlinks";
    catLine.id = "catlinks";
    catLine.style.textAlign = is_rtl ? "right" : "left";
    catLine.style.margin = "0";
    catLine.style.border = "none";
    lineCell.append(catLine);
    const label = null;
    if (label) {
      labelCell.id = "hotcatLabelTranslated";
      labelCell.append(label);
    } else {
      labelCell.id = "hotcatLabel";
      labelCell.append(make(getMessage("categories"), true));
    }
    labelCell.className = "mw-label";
    labelCell.style.textAlign = "right";
    labelCell.style.verticalAlign = "middle";
    const form = document.querySelector("#upload") || document.querySelector("#mw-upload-form");
    if (form) {
      const newRow = ip.insertRow(-1);
      newRow.append(labelCell);
      newRow.append(lineCell);
      form.addEventListener("submit", (oldSubmit, ...args) => {
        return (() => {
          let do_submit = true;
          if (oldSubmit) {
            if (typeof oldSubmit === "string") {
              do_submit = window.eval(oldSubmit);
            } else if (oldSubmit instanceof Function) {
              do_submit = oldSubmit.apply(form, [oldSubmit, ...args]);
            }
          }
          if (!do_submit) {
            return false;
          }
          closeForm();
          const eb = document.querySelector("input[name=wpUploadDescription]") || document.querySelector("#wpDesc");
          let addedOne = false;
          for (var _i8 = 0, _editors7 = editors; _i8 < _editors7.length; _i8++) {
            const editor = _editors7[_i8];
            const t = editor.currentCategory;
            if (!t) {
              continue;
            }
            const key = editor.currentKey;
            const new_cat = "[[".concat(HC.category_canonical, ":").concat(t).concat(key ? "|".concat(key) : "", "]]");
            const nowikiRegex = new RegExp("<no".concat("wiki>", "(\\s|\\S)*?</no", "wiki", ">"), "g");
            const _cleanedText = eb.value.replace(/<!--(\s|\S)*?-->/g, "").replace(nowikiRegex);
            if (!find_category(_cleanedText, t, true)) {
              eb.value += "\n".concat(new_cat);
              addedOne = true;
            }
          }
          if (addedOne) {
            const regex = new RegExp("{{$".concat("subst:").concat("unc}}"), "g");
            eb.value = eb.value.replace(regex, "");
          }
          return true;
        })(form.onsubmit);
      });
    }
  };
  let cleanedText = null;
  const isOnPage = ({
    firstChild
  }) => {
    if (firstChild.nodeType !== Node.ELEMENT_NODE) {
      return null;
    }
    let catTitle = title(firstChild.getAttribute("href"));
    if (!catTitle) {
      return null;
    }
    catTitle = catTitle.slice(catTitle.indexOf(":") + 1).replace(/_/g, " ");
    if (HC.blacklist && HC.blacklist.test(catTitle)) {
      return null;
    }
    const result = {
      title: catTitle,
      match: ["", "", ""]
    };
    if (pageText === null) {
      return result;
    }
    if (cleanedText === null) {
      const nowikiRegex = new RegExp("<no".concat("wiki>", "(\\s|\\S)*?</no", "wiki", ">"), "g");
      cleanedText = pageText.replace(/<!--(\s|\S)*?-->/g, "").replace(nowikiRegex, "");
    }
    result.match = find_category(cleanedText, catTitle, true);
    return result;
  };
  let initialized = false;
  let setupTimeout = null;
  const findByClass = (scope, tag, className) => {
    const result = $(scope).find("".concat(tag, ".").concat(className));
    return result && result.length > 0 ? result[0] : null;
  };
  const setup = (additionalWork) => {
    if (initialized) {
      return;
    }
    initialized = true;
    if (setupTimeout) {
      window.clearTimeout(setupTimeout);
      setupTimeout = null;
    }
    catLine || (catLine = document.querySelector("#mw-normal-catlinks"));
    const hiddenCats = document.querySelector("#mw-hidden-catlinks");
    if (!catLine) {
      let footer = null;
      if (!hiddenCats) {
        footer = findByClass(document, "div", "printfooter");
        if (!footer) {
          return;
        }
      }
      catLine = make("div");
      catLine.id = "mw-normal-catlinks";
      catLine.style.textAlign = is_rtl ? "right" : "left";
      const label = make("a");
      label.href = conf.wgArticlePath.replace("$1", "Special:Categories");
      label.title = getMessage("categories");
      label.append(make(getMessage("categories"), true));
      catLine.append(label);
      catLine.append(make(":", true));
      let container = hiddenCats ? hiddenCats.parentNode : document.querySelector("#catlinks");
      if (!container) {
        container = make("div");
        container.id = "catlinks";
        footer.parentNode.insertBefore(container, footer.nextSibling);
      }
      container.className = "catlinks noprint";
      container.style.display = "";
      if (hiddenCats) {
        hiddenCats.before(catLine);
      } else {
        container.append(catLine);
      }
    }
    if (is_rtl) {
      catLine.dir = "rtl";
    }
    const createEditors = (line, is_hidden) => {
      let i;
      let cats = line.querySelectorAll("li");
      if (cats.length > 0) {
        newDOM = true;
        line = cats[0].parentNode;
      } else {
        cats = line.querySelectorAll("span");
      }
      const copyCats = Array.from({
        length: cats.length
      });
      for (i = 0; i < cats.length; i++) {
        copyCats[i] = cats[i];
      }
      for (i = 0; i < copyCats.length; i++) {
        const test = isOnPage(copyCats[i]);
        if (test !== null && test.match !== null && line) {
          new CategoryEditor(line, copyCats[i], test.title, test.match[2], is_hidden);
        }
      }
      return copyCats.length > 0 ? copyCats.at(-1) : null;
    };
    const lastSpan = createEditors(catLine, false);
    new CategoryEditor(newDOM ? catLine.querySelectorAll("ul")[0] : catLine, null, null, lastSpan !== null, false);
    if (!onUpload) {
      if (pageText !== null && hiddenCats) {
        if (is_rtl) {
          hiddenCats.dir = "rtl";
        }
        createEditors(hiddenCats, true);
      }
      const enableMulti = make("span");
      enableMulti.className = "noprint";
      if (is_rtl) {
        enableMulti.dir = "rtl";
      }
      catLine.insertBefore(enableMulti, catLine.firstChild.nextSibling);
      enableMulti.append(make(" ", true));
      multiSpan = make("span");
      enableMulti.append(multiSpan);
      multiSpan.innerHTML = "(<a>".concat(HC.addmulti, "</a>)");
      const [link] = multiSpan.querySelectorAll("a");
      link.addEventListener("click", (event) => {
        setMultiInput();
        checkMultiInput();
        return evtKill(event);
      });
      link.title = getMessage("multi_tooltip");
      link.style.cursor = "pointer";
    }
    cleanedText = null;
    if (additionalWork instanceof Function) {
      additionalWork();
    }
    mw.hook("hotcat.ready").fire();
    $("body").trigger("hotcatSetupCompleted");
  };
  const createCommitForm = () => {
    if (commitForm) {
      return;
    }
    const formContainer = make("div");
    formContainer.style.display = "none";
    document.querySelector("body").append(formContainer);
    formContainer.innerHTML = '<form id="hotcatCommitForm" method="post" enctype="multipart/form-data" action="'.concat(conf.wgScript, "?title=").concat(encodeURIComponent(conf.wgPageName), '&action=submit"><input type="hidden" name="wpTextbox1">', '<input type="hidden" name="model" value="'.concat(conf.wgPageContentModel, '">'), '<input type="hidden" name="format" value="text/x-wiki"><input type="hidden" name="wpSummary" value=""><input type="checkbox" name="wpMinoredit" value="1"><input type="checkbox" name="wpWatchthis" value="1"><input type="hidden" name="wpAutoSummary" value="d41d8cd98f00b204e9800998ecf8427e"><input type="hidden" name="wpEdittime"><input type="hidden" name="wpStarttime"><input type="hidden" name="wpDiff" value="wpDiff"><input type="hidden" name="oldid" value="0"><input type="submit" name="hcCommit" value="hcCommit"><input type="hidden" name="wpEditToken"><input type="hidden" name="wpUltimateParam" value="1"><input type="hidden" name="wpChangeTags"><input type="hidden" value="ℳ𝒲♥𝓊𝓃𝒾𝒸ℴ𝒹ℯ" name="wpUnicodeCheck"></form>');
    commitForm = document.querySelector("#hotcatCommitForm");
  };
  const getPage = () => {
    if (conf.wgArticleId) {
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        rawcontinue: "",
        titles: conf.wgPageName,
        prop: ["info", "revisions"],
        rvprop: ["content", "timestamp", "ids"],
        rvlimit: "1",
        rvstartid: conf.wgCurRevisionId,
        rvslots: "main",
        meta: ["siteinfo"]
      };
      HC.start = (data) => {
        setPage(data);
        setup(createCommitForm);
      };
      api.get(params).then((data) => {
        HC.start(data);
      });
      setupTimeout = setTimeout(() => {
        setup(createCommitForm);
      }, 4e3);
    } else {
      if (conf.wgNamespaceNumber === 2) {
        return;
      }
      pageText = "";
      pageTime = null;
      setup(createCommitForm);
    }
  };
  const setState = (state) => {
    const cats = state.split("\n");
    if (cats.length === 0) {
      return null;
    }
    if (initialized && editors.length === 1 && editors[0].isAddCategory) {
      const newSpans = [];
      const before = editors.length === 1 ? editors[0].span : null;
      let i;
      for (i = 0; i < cats.length; i++) {
        if (cats[i].length === 0) {
          continue;
        }
        let cat = cats[i].split("|");
        const key = cat.length > 1 ? cat[1] : null;
        [cat] = cat;
        const link = make("a");
        link.href = wikiPagePath("".concat(HC.category_canonical, ":").concat(cat));
        link.append(make(cat, true));
        link.title = cat;
        const span = make("span");
        span.append(link);
        if (!i) {
          catLine.insertBefore(make(" ", true), before);
        }
        before.before(span);
        if (before && i + 1 < cats.length) {
          parent.insertBefore(make(" | ", true), before);
        }
        newSpans.push({
          element: span,
          title: cat,
          key
        });
      }
      if (before) {
        before.parentNode.insertBefore(make(" | ", true), before);
      }
      for (i = 0; i < newSpans.length; i++) {
        new CategoryEditor(catLine, newSpans[i].element, newSpans[i].title, newSpans[i].key);
      }
    }
    return null;
  };
  const getState = () => {
    let result = null;
    for (var _i9 = 0, _editors8 = editors; _i9 < _editors8.length; _i9++) {
      const editor = _editors8[_i9];
      let text = editor.currentCategory;
      const key = editor.currentKey;
      if (text && text.length > 0) {
        if (key !== null) {
          text += "|".concat(key);
        }
        if (result === null) {
          result = text;
        } else {
          result += "\n".concat(text);
        }
      }
    }
    return result;
  };
  const really_run = () => {
    initialize();
    if (!HC.upload_disabled && conf.wgNamespaceNumber === -1 && conf.wgCanonicalSpecialPageName === "Upload" && conf.wgUserName) {
      setup_upload();
      setup(() => {
        if (window.UploadForm && UploadForm.previous_hotcat_state) {
          UploadForm.previous_hotcat_state = setState(UploadForm.previous_hotcat_state);
        }
      });
    } else {
      if (!conf.wgIsArticle || conf.wgAction !== "view" || param("diff") !== null || param("oldid") !== null || !can_edit() || HC.disable()) {
        return;
      }
      getPage();
    }
  };
  const run = () => {
    if (HC.started) {
      return;
    }
    HC.started = true;
    really_run();
  };
  window.hotcat_get_state = () => {
    return getState();
  };
  window.hotcat_set_state = (state) => {
    return setState(state);
  };
  window.hotcat_close_form = () => {
    closeForm();
  };
  HC.runWhenReady = (callback) => {
    mw.hook("hotcat.ready").add(callback);
  };
  mw.config.set("disableAJAXCategories", true);
  if (conf.wgCanonicalSpecialPageName !== "Upload") {
    mw.hook("postEdit").add(() => {
      if (document.querySelector("#catlinks .hotcatlink")) {
        return;
      }
      catLine = null;
      editors = [];
      initialized = false;
      HC.started = false;
      run();
    });
  }
  $(run);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9jaGVjay50cyIsICJzcmMvSG90Q2F0L21vZHVsZXMvZ2V0TWVzc2FnZS50cyIsICJzcmMvSG90Q2F0L21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Ib3RDYXQvSG90Q2F0LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzYuMCcsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI0IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzYuMC9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4wLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFua3MgdG8gSUU4IGZvciBpdHMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVjggfiBDaHJvbWUgMzYtXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMzM0XG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ3Byb3RvdHlwZScsIHtcbiAgICB2YWx1ZTogNDIsXG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pLnByb3RvdHlwZSAhPT0gNDI7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IFR5cGUoYXJndW1lbnQpIGlzIE9iamVjdGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc09iamVjdChhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJFN0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXREZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIEVYSVNUUyA9IGhhc093bihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKTtcbi8vIGFkZGl0aW9uYWwgcHJvdGVjdGlvbiBmcm9tIG1pbmlmaWVkIC8gbWFuZ2xlZCAvIGRyb3BwZWQgZnVuY3Rpb24gbmFtZXNcbnZhciBQUk9QRVIgPSBFWElTVFMgJiYgKGZ1bmN0aW9uIHNvbWV0aGluZygpIHsgLyogZW1wdHkgKi8gfSkubmFtZSA9PT0gJ3NvbWV0aGluZyc7XG52YXIgQ09ORklHVVJBQkxFID0gRVhJU1RTICYmICghREVTQ1JJUFRPUlMgfHwgKERFU0NSSVBUT1JTICYmIGdldERlc2NyaXB0b3IoRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJykuY29uZmlndXJhYmxlKSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFWElTVFM6IEVYSVNUUyxcbiAgUFJPUEVSOiBQUk9QRVIsXG4gIENPTkZJR1VSQUJMRTogQ09ORklHVVJBQkxFXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc3RvcmUuZ2V0ID0gc3RvcmUuZ2V0O1xuICBzdG9yZS5oYXMgPSBzdG9yZS5oYXM7XG4gIHN0b3JlLnNldCA9IHN0b3JlLnNldDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoc3RvcmUuaGFzKGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgc3RvcmUuc2V0KGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0KGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmhhcyhpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChoYXNPd24oaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkNPTkZJR1VSQUJMRTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG52YXIgQ09ORklHVVJBQkxFX0xFTkdUSCA9IERFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdsZW5ndGgnLCB7IHZhbHVlOiA4IH0pLmxlbmd0aCAhPT0gODtcbn0pO1xuXG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbnZhciBtYWtlQnVpbHRJbiA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBuYW1lLCBvcHRpb25zKSB7XG4gIGlmIChzdHJpbmdTbGljZSgkU3RyaW5nKG5hbWUpLCAwLCA3KSA9PT0gJ1N5bWJvbCgnKSB7XG4gICAgbmFtZSA9ICdbJyArIHJlcGxhY2UoJFN0cmluZyhuYW1lKSwgL15TeW1ib2xcXCgoW14pXSopXFwpLiokLywgJyQxJykgKyAnXSc7XG4gIH1cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZXR0ZXIpIG5hbWUgPSAnZ2V0ICcgKyBuYW1lO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNldHRlcikgbmFtZSA9ICdzZXQgJyArIG5hbWU7XG4gIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICduYW1lJywgeyB2YWx1ZTogbmFtZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIGVsc2UgdmFsdWUubmFtZSA9IG5hbWU7XG4gIH1cbiAgaWYgKENPTkZJR1VSQUJMRV9MRU5HVEggJiYgb3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2FyaXR5JykgJiYgdmFsdWUubGVuZ3RoICE9PSBvcHRpb25zLmFyaXR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkodmFsdWUsICdsZW5ndGgnLCB7IHZhbHVlOiBvcHRpb25zLmFyaXR5IH0pO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdjb25zdHJ1Y3RvcicpICYmIG9wdGlvbnMuY29uc3RydWN0b3IpIHtcbiAgICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICdwcm90b3R5cGUnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTtcbiAgICAvLyBpbiBWOCB+IENocm9tZSA1MywgcHJvdG90eXBlcyBvZiBzb21lIG1ldGhvZHMsIGxpa2UgYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgLCBhcmUgbm9uLXdyaXRhYmxlXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5wcm90b3R5cGUpIHZhbHVlLnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gIGlmICghaGFzT3duKHN0YXRlLCAnc291cmNlJykpIHtcbiAgICBzdGF0ZS5zb3VyY2UgPSBqb2luKFRFTVBMQVRFLCB0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZSAtLSByZXF1aXJlZFxuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbWFrZUJ1aWx0SW4oZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHRoaXMpICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59LCAndG9TdHJpbmcnKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucy5lbnVtZXJhYmxlO1xuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuICBpZiAoaXNDYWxsYWJsZSh2YWx1ZSkpIG1ha2VCdWlsdEluKHZhbHVlLCBuYW1lLCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVHbG9iYWxQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFvcHRpb25zLnVuc2FmZSkgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGVsc2UgaWYgKE9ba2V5XSkgc2ltcGxlID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6ICFvcHRpb25zLm5vbkNvbmZpZ3VyYWJsZSxcbiAgICAgIHdyaXRhYmxlOiAhb3B0aW9ucy5ub25Xcml0YWJsZVxuICAgIH0pO1xuICB9IHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBNYXRoLnRydW5jYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC50cnVuY1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtdHJ1bmMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uIHRydW5jKHgpIHtcbiAgdmFyIG4gPSAreDtcbiAgcmV0dXJuIChuID4gMCA/IGZsb29yIDogY2VpbCkobik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0cnVuYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXRoLXRydW5jJyk7XG5cbi8vIGBUb0ludGVnZXJPckluZmluaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2Vyb3JpbmZpbml0eVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIG51bWJlciA9ICthcmd1bWVudDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiB0cnVuYyhudW1iZXIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbGVuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCk7XG4gIHJldHVybiBsZW4gPiAwID8gbWluKGxlbiwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGV4Y2VwdGlvbnMpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpICYmICEoZXhjZXB0aW9ucyAmJiBoYXNPd24oZXhjZXB0aW9ucywga2V5KSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogaXNDYWxsYWJsZShkZXRlY3Rpb24pID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAgICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMuZG9udENhbGxHZXRTZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4gIG9wdGlvbnMubmFtZSAgICAgICAgICAgLSB0aGUgLm5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBrZXlcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gJiYgZ2xvYmFsW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09PSAnQXJyYXknO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIFNhZmFyaSA8IDEzIGRvZXMgbm90IHRocm93IGFuIGVycm9yIGluIHRoaXMgY2FzZVxudmFyIFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA9IERFU0NSSVBUT1JTICYmICFmdW5jdGlvbiAoKSB7XG4gIC8vIG1ha2VzIG5vIHNlbnNlIHdpdGhvdXQgcHJvcGVyIHN0cmljdCBtb2RlIHN1cHBvcnRcbiAgaWYgKHRoaXMgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkubGVuZ3RoID0gMTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPyBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIGlmIChpc0FycmF5KE8pICYmICFnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgJ2xlbmd0aCcpLndyaXRhYmxlKSB7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBzZXQgcmVhZCBvbmx5IC5sZW5ndGgnKTtcbiAgfSByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59IDogZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgc2V0QXJyYXlMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aCcpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIElOQ09SUkVDVF9UT19MRU5HVEggPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbXS5wdXNoLmNhbGwoeyBsZW5ndGg6IDB4MTAwMDAwMDAwIH0sIDEpICE9PSA0Mjk0OTY3Mjk3O1xufSk7XG5cbi8vIFY4IDw9IDEyMSBhbmQgU2FmYXJpIDw9IDE1LjQ7IEZGIDwgMjMgdGhyb3dzIEludGVybmFsRXJyb3Jcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTEyNjgxXG52YXIgcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLnB1c2goKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn07XG5cbnZhciBGT1JDRUQgPSBJTkNPUlJFQ1RfVE9fTEVOR1RIIHx8ICFwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGgoKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5wdXNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnB1c2hcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKGl0ZW0pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgYXJnQ291bnQgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihsZW4gKyBhcmdDb3VudCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdDb3VudDsgaSsrKSB7XG4gICAgICBPW2xlbl0gPSBhcmd1bWVudHNbaV07XG4gICAgICBsZW4rKztcbiAgICB9XG4gICAgc2V0QXJyYXlMZW5ndGgoTywgbGVuKTtcbiAgICByZXR1cm4gbGVuO1xuICB9XG59KTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuLyoqXG4gKiBDaGVja0NhdGVnb3JpZXMgSG90Q2F0IEV4dGVuc2lvbiDigJNcbiAqIHJlbW92ZXMgdGhlIHRlbXBsYXRlIHdoZW4gY2F0ZWdvcml6aW5nIChwcm9tcHRzIGJlZm9yZSkgd2l0aCBIb3RDYXQgYW5kXG4gKiBhZGRzIGEgbGluayBcIkNhdGVnb3JpZXMgYXJlIE9LXCIgdG8gdGhlIGNhdGVnb3J5LXNlY3Rpb25cbiAqXG4gKiBAcmV2IDIgKDIwMTQtMDMtMjApXG4gKiBAYXV0aG9yIFJpbGxrZSwgMjAxMlxuICovXG4oZnVuY3Rpb24gaG90Q2F0Q2hlY2soKSB7XG5cdGlmIChcblx0XHRtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpICE9PSA2IHx8XG5cdFx0d2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCB8fFxuXHRcdCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tjYXRlZ29yaWVzJylbMF1cblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IGFwaSA9IGluaXRNd0FwaSgnaG90Q2F0Q2hlY2svMi4wJyk7XG5cdGNvbnN0IGNoZWNrQ2F0ZWdvcmllc1JlZ0V4cCA9IC97e1tDY11oZWNrWyBfXWNhdGVnb3JpZXNbXnt9XSp9fS9nO1xuXHRjb25zdCBzZWxmTmFtZSA9ICcoW1tNZWRpYVdpa2k6R2FkZ2V0LUhvdENhdC1jaGVjay5qc3xTY3JpcHRdXSk6ICc7XG5cdGNvbnN0IHN0b3JhZ2VJdGVtTmFtZSA9ICdjaGVja0NhdCc7XG5cdGNvbnN0IHN0b3JhZ2VJdGVtID0gbXcuc3RvcmFnZS5nZXQoc3RvcmFnZUl0ZW1OYW1lKTtcblx0LyoqXG5cdCAqIEEgZmV3IHN0eWxpbmcgaGVscGVyIGZ1bmN0aW9uc1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaWNvbkNsYXNzXG5cdCAqIEByZXR1cm4ge0pRdWVyeX1cblx0ICovXG5cdGNvbnN0IGNyZWF0ZWpJY29uID0gKGljb25DbGFzczogc3RyaW5nKTogSlF1ZXJ5ID0+IHtcblx0XHRyZXR1cm4gJCgnPHNwYW4+JykuYXR0cignY2xhc3MnLCBgdWktaWNvbiAke2ljb25DbGFzc30gY2F0Y2hlY2staW5saW5lLWljb25gKS50ZXh0KCcgJyk7XG5cdH07XG5cdGNvbnN0IGNyZWF0ZU5vdGlmeUFyZWEgPSAodGV4dE5vZGU6IEpRdWVyeTxKUXVlcnkuTm9kZT4sIGljb246IHN0cmluZywgc3RhdGU6IHN0cmluZyk6IEpRdWVyeTxIVE1MRWxlbWVudD4gPT4ge1xuXHRcdHJldHVybiAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ3VpLXdpZGdldCcpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdFx0LmF0dHIoJ2NsYXNzJywgYCR7c3RhdGV9IHVpLWNvcm5lci1hbGxgKVxuXHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0J21hcmdpbi10b3AnOiAnMjBweCcsXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAnMC43ZW0nLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8cD4nKS5hcHBlbmQoY3JlYXRlakljb24oaWNvbikuY3NzKCdtYXJnaW5SaWdodCcsICcwLjNlbScpLCB0ZXh0Tm9kZSkpXG5cdFx0XHQpO1xuXHR9O1xuXHQvLyBSZW1vdmUgXCJjaGVjayBjYXRlZ29yaWVzXCIgd2hlbiB1c2luZyBIb3RDYXRcblx0Ly8gT25seSBleGVjdXRlZCBvbiBmaXJzdCBzdWJtaXRcblx0JCgnYm9keScpLm9uZSgnc3VibWl0LmNoZWNrQ2F0TGlzdGVuZXInLCAnI2hvdGNhdENvbW1pdEZvcm0nLCBmdW5jdGlvbiAoZSkge1xuXHRcdGlmIChzdG9yYWdlSXRlbSA9PT0gJ2Rpc2FibGVkJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblxuXHRcdGNvbnN0IG5ld1ZhbCA9IChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWU/LnJlcGxhY2UoY2hlY2tDYXRlZ29yaWVzUmVnRXhwLCAnJyk7XG5cdFx0Y29uc3QgZGxnQnV0dG9uczoge1xuXHRcdFx0J1llcywgUmVtb3ZlJz86ICgpID0+IHZvaWQ7XG5cdFx0XHQnTm8sIGtlZXAgaXQnPzogKCkgPT4gdm9pZDtcblx0XHR9ID0ge307XG5cdFx0bGV0ICRkaWFsb2dDaGVja1N0b3JhZ2U6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdFx0bGV0ICRwZXJtYVNhdmVIaW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRcdGxldCAkdGV4dEhpbnROb2RlO1xuXHRcdGxldCAkZGlhbG9nO1xuXHRcdGNvbnN0IGRvUmVtb3ZlID0gKCkgPT4ge1xuXHRcdFx0KHNlbGYud3BTdW1tYXJ5IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID1cblx0XHRcdFx0YFJlbW92aW5nIFtbVGVtcGxhdGU6Q2hlY2sgY2F0ZWdvcmllc3x7JHtge0NoZWNrIGNhdGVnb3JpZXN9fV1dICR7KHNlbGYud3BTdW1tYXJ5IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlfWB9YDtcblxuXHRcdFx0KHNlbGYud3BUZXh0Ym94MSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSA9IG5ld1ZhbDtcblx0XHR9O1xuXHRcdGNvbnN0IHdyaXRlU3RvcmFnZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuXHRcdFx0bXcuc3RvcmFnZS5zZXQoc3RvcmFnZUl0ZW1OYW1lLCB2YWwsIDYwNDhlMik7IC8vIDcgZGF5c1xuXHRcdH07XG5cdFx0ZGxnQnV0dG9uc1snWWVzLCBSZW1vdmUnXSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGRvUmVtb3ZlKCk7XG5cdFx0XHRpZiAoKCRkaWFsb2dDaGVja1N0b3JhZ2VbMF0gYXMgSFRNTElucHV0RWxlbWVudCk/LmNoZWNrZWQpIHtcblx0XHRcdFx0d3JpdGVTdG9yYWdlKCdhdXRvJyk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHR9O1xuXHRcdGRsZ0J1dHRvbnNbJ05vLCBrZWVwIGl0J10gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoKCRkaWFsb2dDaGVja1N0b3JhZ2VbMF0gYXMgSFRNTElucHV0RWxlbWVudCk/LmNoZWNrZWQpIHtcblx0XHRcdFx0d3JpdGVTdG9yYWdlKCdkaXNhYmxlZCcpO1xuXHRcdFx0fVxuXHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0fTtcblx0XHRjb25zdCBfYWRkVG9KUyA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCwgX2U6IEpRdWVyeS5FdmVudCkge1xuXHRcdFx0X2UucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlmICgkcGVybWFTYXZlSGludC5oYXNDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCAkZWw6IEpRdWVyeTxIVE1MRWxlbWVudD4gPSAkKHRoaXMpO1xuXHRcdFx0JGVsLm9mZignY2xpY2snKS50ZXh0KCdQbGVhc2Ugd2FpdC4nKTtcblx0XHRcdCRwZXJtYVNhdmVIaW50LmFkZENsYXNzKCd1aS1zdGF0ZS1kaXNhYmxlZCcpO1xuXHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0dGl0bGU6IGBVc2VyOiR7bXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpfS9jb21tb24uanNgLFxuXHRcdFx0XHRzdW1tYXJ5OiBgJHtzZWxmTmFtZX1TYXZpbmcgSG90Q2F0IGNvbmZpZ3VyYXRpb24uYCxcblx0XHRcdFx0YXBwZW5kdGV4dDogJGVsLmRhdGEoJ2FkZFRleHQnKSBhcyBzdHJpbmcsXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZWRpdERvbmUgPSAoZWRpdFN0YXQ/OiB7ZXJyb3I/OiB7Y29kZT86IHN0cmluZzsgaW5mbz86IHN0cmluZ319KSA9PiB7XG5cdFx0XHRcdGlmICghZWRpdFN0YXQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVkaXRTdGF0LmVycm9yKSB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHRgVW5hYmxlIHRvIHNhdmUgdG8geW91ciBjb21tb24uanMgdXNpbmcgdGhlIEFQSVxcbiR7ZWRpdFN0YXQuZXJyb3IuY29kZX1cXG4ke2VkaXRTdGF0LmVycm9yLmluZm99YCxcblx0XHRcdFx0XHRcdHt0YWc6ICdob3RDYXRDaGVjaycsIHR5cGU6ICdlcnJvcid9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdC1FcnJvciEnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwudGV4dCgnRG9uZS4nKTtcblx0XHRcdFx0XHQkcGVybWFTYXZlSGludC5mYWRlT3V0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHR2b2lkIGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywgcGFyYW1zKS50aGVuKGVkaXREb25lKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIE9uIFdpa2ltZWRpYSBDb21tb25zIHRoZXJlIHdlcmUgcGVvcGxlIHdobyBzYWlkOlxuXHRcdCAqIFwiQ2F0ZWdvcml6aW5nIHdpdGggSG90Q2F0IGRvZXMgbGVnaXQgYXV0b21hdGVkIHJlbW92YWwgb2YgdGhlIGNoZWNrLWNhdC1tZXNzYWdlXCJcblx0XHQgKiBTbyB3ZSBpbnZlbnRlZCBhIGRpYWxvZyB0aGF0IHNob3VsZCBiZSByZWFkYWJsZSBieSB1c2VycyBldmVuIHdpdGggdmVyeSBmZXcgRW5nbGlzaCBza2lsbHMuXG5cdFx0ICovXG5cdFx0Y29uc3QgcHJvbXB0ID0gKCkgPT4ge1xuXHRcdFx0JGRpYWxvZ0NoZWNrU3RvcmFnZSA9ICQoJzxpbnB1dD4nKVxuXHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRpZDogJ2hvdENhdEF1dG9SZW1vdmVDaGVja0NhdFN0b3JhZ2UnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRpZiAoKHRoaXMgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0JHBlcm1hU2F2ZUhpbnQuZmFkZUluKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmZhZGVPdXQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0JHRleHRIaW50Tm9kZSA9ICQoJzx1bD4nKTtcblx0XHRcdCQoJzxsaT4nKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICcjJylcblx0XHRcdFx0XHRcdC50ZXh0KCdEaXNhYmxlIHRoaXMgZmVhdHVyZS4nKVxuXHRcdFx0XHRcdFx0LmRhdGEoJ2FkZFRleHQnLCAnXFxud2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCA9IHRydWU7Jylcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBfYWRkVG9KUylcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kVG8oJHRleHRIaW50Tm9kZSk7XG5cdFx0XHQkKCc8bGk+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHRcdFx0XHQudGV4dCgnUmVtb3ZlIHt7Y2hlY2sgY2F0ZWdvcmllc319IHdoZW4gZWRpdGluZyB1c2luZyBIb3RDYXQgd2l0aG91dCBwcm9tcHRpbmcuJylcblx0XHRcdFx0XHRcdC5kYXRhKCdhZGRUZXh0JywgJ1xcbndpbmRvdy5Ib3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXQgPSB0cnVlOycpXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgX2FkZFRvSlMpXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZFRvKCR0ZXh0SGludE5vZGUpO1xuXHRcdFx0JHBlcm1hU2F2ZUhpbnQgPSBjcmVhdGVOb3RpZnlBcmVhKFxuXHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCdTYXZlIHRoZXNlIHNldHRpbmcgaW4geW91ciBjb21tb24uanM6ICcpLmFwcGVuZCgkdGV4dEhpbnROb2RlKSxcblx0XHRcdFx0J3VpLWljb24taW5mbycsXG5cdFx0XHRcdCd1aS1zdGF0ZS1oaWdobGlnaHQnXG5cdFx0XHQpO1xuXHRcdFx0JGRpYWxvZyA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHRcdCdmb250LXNpemUnOiAnMmVtJyxcblx0XHRcdFx0XHRcdFx0J2xpbmUtaGVpZ2h0JzogJzEuOGVtJyxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCcge3tjaGVjayBjYXRlZ29yaWVzfX0gJykuY3NzKHtcblx0XHRcdFx0XHRcdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6ICcjRjhDQ0IwJyxcblx0XHRcdFx0XHRcdFx0XHQndGV4dC1kZWNvcmF0aW9uJzogJ2xpbmUtdGhyb3VnaCAhaW1wb3J0YW50Jyxcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpLnRleHQoJyA/Jylcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCc8YnI+Jyxcblx0XHRcdFx0XHQkZGlhbG9nQ2hlY2tTdG9yYWdlLFxuXHRcdFx0XHRcdCQoJzxsYWJlbD4nKS5hdHRyKCdmb3InLCAnaG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0U3RvcmFnZScpLnRleHQoXCJEb24ndCBhc2sgYWdhaW5cIiksXG5cdFx0XHRcdFx0Jzxicj4nXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZChtdy51c2VyLmlzQW5vbigpID8gJycgOiAkcGVybWFTYXZlSGludC5oaWRlKCkpO1xuXHRcdFx0JGRpYWxvZy5kaWFsb2coe1xuXHRcdFx0XHRtb2RhbDogdHJ1ZSxcblx0XHRcdFx0Y2xvc2VPbkVzY2FwZTogdHJ1ZSxcblx0XHRcdFx0dGl0bGU6ICd7e2NoZWNrIGNhdGVnb3JpZXN9fSAo4oiSKT8nLFxuXHRcdFx0XHR3aWR0aDogNDUwLFxuXHRcdFx0XHRidXR0b25zOiBkbGdCdXR0b25zLFxuXHRcdFx0XHRjbG9zZTogKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHRcdCRib2R5LmZpbmQoJyNob3RjYXRDb21taXRGb3JtJykudHJpZ2dlcignc3VibWl0Jyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdFx0Y29uc3QgJGJ1dHRvbnMgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy51aS1kaWFsb2ctYnV0dG9ucGFuZSBidXR0b24nKTtcblx0XHRcdFx0XHQkYnV0dG9ucy5lcSgwKS5idXR0b24oe1xuXHRcdFx0XHRcdFx0aWNvbnM6IHtcblx0XHRcdFx0XHRcdFx0cHJpbWFyeTogJ3VpLWljb24tY2lyY2xlLWNoZWNrJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JGJ1dHRvbnMuZXEoMSkuYnV0dG9uKHtcblx0XHRcdFx0XHRcdGljb25zOiB7XG5cdFx0XHRcdFx0XHRcdHByaW1hcnk6ICd1aS1pY29uLWNhbmNlbCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdGlmIChuZXdWYWwgIT09IChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUpIHtcblx0XHRcdGlmICh3aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0IHx8IHN0b3JhZ2VJdGVtID09PSAnYXV0bycpIHtcblx0XHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRwcm9tcHQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pO1xuXHQvLyBBZGQgT0stTGluayB0byB0aGUgY2F0cyBwYW5lbFxuXHRjb25zdCAkb2tMaW5rID0gJCgnPGE+Jylcblx0XHQuYXR0cih7XG5cdFx0XHRocmVmOiAnIycsXG5cdFx0XHR0aXRsZTogJ0NhdGVnb3JpZXMgYXJlIE9LISBJbW1lZGlhdGVseSByZW1vdmUgdGhlIHRlbXBsYXRlLicsXG5cdFx0fSlcblx0XHQuYXBwZW5kKCc8cz4nKVxuXHRcdC50ZXh0KCd7e0NoZWNrIGNhdGVnb3JpZXN9fScpO1xuXHQkb2tMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0ICRlbCA9ICQodGhpcyk7XG5cdFx0JGVsLm9mZignY2xpY2snKTtcblx0XHRjb25zdCBkb0VkaXQgPSAocmVzdWx0OiBzdHJpbmcpID0+IHtcblx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCRlbC50ZXh0KCdEb2luZy4nKTtcblx0XHRcdGNvbnN0IHRleHQgPSByZXN1bHQucmVwbGFjZShjaGVja0NhdGVnb3JpZXNSZWdFeHAsICcnKTtcblx0XHRcdGlmICh0ZXh0ID09PSByZXN1bHQpIHtcblx0XHRcdFx0JGVsLnRleHQoJ1RlbXBsYXRlIG5vdCBmb3VuZCEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0dGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdFx0c3VtbWFyeTogYCR7c2VsZk5hbWV9Q2F0ZWdvcmllcyBhcmUgY2hlY2tlZCBhbmQgT0suIFlvdSBjYW4gaGVscCBbW0NhdGVnb3J5Ok1lZGlhIG5lZWRpbmcgY2F0ZWdvcnkgcmV2aWV3fHJldmlld2luZ11dIWAsXG5cdFx0XHRcdG5vY3JlYXRlOiB0cnVlLFxuXHRcdFx0XHR0ZXh0LFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGVkaXREb25lID0gKGVkaXRTdGF0Pzoge2Vycm9yPzoge2NvZGU/OiBzdHJpbmc7IGluZm8/OiBzdHJpbmd9fSkgPT4ge1xuXHRcdFx0XHRpZiAoIWVkaXRTdGF0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlZGl0U3RhdC5lcnJvcikge1xuXHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0YFVuYWJsZSB0byByZW1vdmUgXCJDaGVjayBjYXRlZ29yaWVzXCIgd2l0aCB0aGUgQVBJXFxuJHtlZGl0U3RhdC5lcnJvci5jb2RlfVxcbiR7ZWRpdFN0YXQuZXJyb3IuaW5mb31gLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0YWc6ICdob3RDYXRDaGVjaycsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdC1FcnJvciEnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdCBEb25lLicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHQkYm9keS5maW5kKCcuY2hlY2tjYXRlZ29yaWVzJykuZmFkZU91dCgpO1xuXHRcdFx0fTtcblx0XHRcdCRlbC50ZXh0KCdEb2luZy4uJyk7XG5cdFx0XHR2b2lkIGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywgcGFyYW1zKS50aGVuKGVkaXREb25lKTtcblx0XHR9O1xuXHRcdCRlbC50ZXh0KCdEb2luZycpO1xuXHRcdHZvaWQgJC5hamF4KHtcblx0XHRcdHVybDogbXcuY29uZmlnLmdldCgnd2dTY3JpcHQnKSxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0dGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC8gL2csICdfJyksXG5cdFx0XHR9LFxuXHRcdFx0ZGF0YVR5cGU6ICd0ZXh0Jyxcblx0XHRcdGVycm9yOiAoKSA9PiB7XG5cdFx0XHRcdCRlbC50ZXh0KCdFcnJvciEnKTtcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBkb0VkaXQsXG5cdFx0XHR0eXBlOiAnR0VUJyxcblx0XHRcdGNhY2hlOiBmYWxzZSxcblx0XHR9KTtcblx0fSk7XG5cdCQoZnVuY3Rpb24gbG9hZEhvdENhdENoZWNrKCkge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdCRib2R5LmZpbmQoJyNjYXRsaW5rcycpLmZpbmQoJ3VsOmZpcnN0JykuYXBwZW5kKCQoJzxsaT4nKS5hcHBlbmQoJG9rTGluaykpO1xuXHR9KTtcbn0pKCk7XG4iLCAiY29uc3QgZ2V0TWVzc2FnZSA9IChrZXk6IHN0cmluZywgLi4uYXJnczogc3RyaW5nW10pOiBzdHJpbmcgPT4ge1xuXHRrZXkgPSBgaG90Y2F0LSR7a2V5fWA7XG5cdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRyZXR1cm4gbXcubWVzc2FnZShrZXksIC4uLmFyZ3MpLnBsYWluKCk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IFdHX1VTRVJfR1JPVVBTOiBzdHJpbmdbXSA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpID8/IFtdO1xuY29uc3QgV0dfVVNFUl9MQU5HVUFHRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKTtcblxuZXhwb3J0IHtXR19VU0VSX0dST1VQUywgV0dfVVNFUl9MQU5HVUFHRX07XG4iLCAiaW1wb3J0IHtXR19VU0VSX0xBTkdVQUdFfSBmcm9tICcuL2NvbnN0YW50JztcblxuZXhwb3J0IGNvbnN0IGhvdENhdE1lc3NhZ2VzID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMoV0dfVVNFUl9MQU5HVUFHRSkpIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaRbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJzogJ+W3suenu+mZpHt7W1tDYXRlZ29yeTokMV1dfX0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfYWRkZWQnOiAn5bey5re75YqgW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdC8vICQyIGlzIHRoZSBuZXcga2V5XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnOiAn5bey6Kit572uW1tDYXRlZ29yeTokMV1d55qE5paw5o6S5bqP5a2X77yaXCIkMlwiJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X25vdEZvdW5kJzogJ+WIhumhnuKAnCQx4oCd5rKS5pyJ5om+5YiwJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2V4aXN0cyc6ICfliIbpoZ7igJwkMeKAneW3sue2k+WtmOWcqO+8jOaykuaciea3u+WKoOOAgicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZXNvbHZlZCc6ICfvvIjph43lrprlkJFbW0NhdGVnb3J5OiQxXV3lt7LomZXnkIbvvIknLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11bmNhdF9yZW1vdmVkJzogJ+W3suenu+mZpHt7dW5jYXRlZ29yaXplZH19Jyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBwcmVmaXggdG8gdGhlIGVkaXQgc3VtbWFyeS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtcHJlZml4JzogJ+S9v+eUqFtbSDpIT1RDQVR8SG90Q2F0XV0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIGFwcGVuZCB0byB0aGUgZWRpdCBzdW1tYXJ5LiBOYW1lZCAndXNpbmcnIGZvciBoaXN0b3JpY2FsIHJlYXNvbnMuIElmIHlvdSBwcmVmZXJcblx0XHRcdC8vIHRvIGhhdmUgYSBtYXJrZXIgYXQgdGhlIGZyb250LCB1c2UgcHJlZml4IGFuZCBzZXQgdGhpcyB0byB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11c2luZyc6ICcnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9jaGFuZ2UnOiAnJDHlgIvliIbpoZ4nLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnk7IGkuZS4sIGEgY2F0ZWdvcnkgdGhhdCBzaG91bGQgbm90IGNvbnRhaW5cblx0XHRcdC8vIGFueSBpdGVtcywgYnV0IHRoYXQgY29udGFpbnMgbGlua3MgdG8gb3RoZXIgY2F0ZWdvcmllcyB3aGVyZSBzdHVmZiBzaG91bGQgYmUgY2F0ZWdvcml6ZWQuIElmIHlvdSBkb24ndCBoYXZlXG5cdFx0XHQvLyB0aGF0IGNvbmNlcHQgb24geW91ciB3aWtpLCBzZXQgaXQgdG8gYmxhbmsgc3RyaW5nLiBVc2UgYmxhbmtzLCBub3QgdW5kZXJzY29yZXMuXG5cdFx0XHQnaG90Y2F0LWRpc2FtYmlnX2NhdGVnb3J5JzogJycsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSAoc29mdCkgcmVkaXJlY3QgdG8gc29tZSBvdGhlciBjYXRlZ29yeSBkZWZpbmVkIGJ5IGEgbGlua1xuXHRcdFx0Ly8gdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnkuIElmIHlvdXIgd2lraSBkb2Vzbid0IGhhdmUgc29mdCBjYXRlZ29yeSByZWRpcmVjdHMsIHNldCB0aGlzIHRvIG51bGwuXG5cdFx0XHQvLyBJZiBhIHNvZnQtcmVkaXJlY3RlZCBjYXRlZ29yeSBjb250YWlucyBtb3JlIHRoYW4gb25lIGxpbmsgdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnksIGl0J3MgY29uc2lkZXJlZFxuXHRcdFx0Ly8gYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeSBpbnN0ZWFkLlxuXHRcdFx0J2hvdGNhdC1yZWRpcl9jYXRlZ29yeSc6ICflt7Lph43lrprlkJHnmoTliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zZXBhcmF0b3InOiAnOyAnLFxuXHRcdFx0Ly8gJDEgaXMgcmVwbGFjZWQgYnkgYSBudW1iZXIuIElmIHlvdXIgbGFuZ3VhZ2UgaGFzIHNldmVyYWwgcGx1cmFsIGZvcm1zIChjLmYuIFtbOmVud2lraTpEdWFsIChncmFtbWF0aWNhbCBmb3JtKV1dKSxcblx0XHRcdC8vIHlvdSBjYW4gc2V0IHRoaXMgdG8gYW4gYXJyYXkgb2Ygc3RyaW5ncyBzdWl0YWJsZSBmb3IgcGFzc2luZyB0byBtdy5sYW5ndWFnZS5jb25maWdQbHVyYWwoKS5cblx0XHRcdC8vIElmIHRoYXQgZnVuY3Rpb24gZG9lc24ndCBleGlzdCwgSG90Q2F0IHdpbGwgc2ltcGx5IGZhbGwgYmFjayB0byB1c2luZyB0aGUgbGFzdFxuXHRcdFx0Ly8gZW50cnkgaW4gdGhlIGFycmF5LlxuXHRcdFx0Ly8gRGVmYXVsdHMgdG8gJ1tbJyArIGNhdGVnb3J5X2Nhbm9uaWNhbCArICc6JDFdXScuIENhbiBiZSBvdmVycmlkZGVuIGlmIGluIHRoZSBzaG9ydCBlZGl0IHN1bW1hcmllc1xuXHRcdFx0Ly8gbm90IHRoZSBzdGFuZGFyZCBjYXRlZ29yeSBuYW1lIHNob3VsZCBiZSB1c2VkIGJ1dCwgc2F5LCBhIHNob3J0ZXIgbmFtZXNwYWNlIGFsaWFzLiAkMSBpcyByZXBsYWNlZFxuXHRcdFx0Ly8gYnkgYSBjYXRlZ29yeSBuYW1lLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnOiAnJDEnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY29tbWl0JzogJ+WEsuWtmCcsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1vayc6ICfnorrlrponLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2FuY2VsJzogJ+WPlua2iCcsXG5cdFx0XHQvLyBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW11bHRpX2Vycm9yJzpcblx0XHRcdFx0J+eEoeazleW+nuS8uuacjeWZqOWPluW+l+mggemdouaWh+Wtl+OAguWboOatpO+8jOaCqOeahOWIhumhnuiuiuabtOeEoeazleWEsuWtmOOAguaIkeWAkeeCuuatpOS4jeS+v+ihqOekuuaKseatieOAgicsXG5cdFx0XHQvLyBQbHVyYWwgb2YgY2F0ZWdvcnlfY2Fub25pY2FsLlxuXHRcdFx0J2hvdGNhdC1jYXRlZ29yaWVzJzogJ+WIhumhnicsXG5cdFx0XHQvLyBOYW1lcyBmb3IgdGhlIHNlYXJjaCBlbmdpbmVzXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zZWFyY2hpbmRleCc6ICfmkJzlsIvntKLlvJUnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFnZWxpc3QnOiAn6aCB6Z2i5YiX6KGoJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLWNvbWJpbmVkJzogJ+WQiOS9teaQnOWwiycsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zdWJjYXQnOiAn5a2Q5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhcmVudGNhdCc6ICfkuIrlsaTliIbpoZ4nLFxuXHRcdFx0Ly8gVGhlIHRvb2x0aXBzIGZvciB0aGUgYWJvdmUgbGlua3Ncblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtY2hhbmdlJzogJ+S/ruaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlbW92ZSc6ICfnp7vpmaQnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1hZGQnOiAn5aKe5Yqg5LiA5YCL5paw5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVzdG9yZSc6ICflvqnljp/orormm7QnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11bmRvJzogJ+W+qeWOn+iuiuabtCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWRvd24nOiAn5omT6ZaL5Lul5L+u5pS55Lim6aGv56S65a2Q5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdXAnOiAn5omT6ZaL5Lul5L+u5pS55Lim6aGv56S65LiK5bGk5YiG6aGeJyxcblx0XHRcdC8vIFRvb2x0aXAgZm9yIHRoZSBcImVudGVyIG11bHRpLW1vZGVcIiBsaW5rXG5cdFx0XHQnaG90Y2F0LW11bHRpX3Rvb2x0aXAnOiAn5L+u5pS55aSa5YCL5YiG6aGeJyxcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaRbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJzogJ+W3suenu+mZpHt7W1tDYXRlZ29yeTokMV1dfX0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfYWRkZWQnOiAn5bey5re75YqgW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdC8vICQyIGlzIHRoZSBuZXcga2V5XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnOiAn5bey6K6+572uW1tDYXRlZ29yeTokMV1d55qE5paw5o6S5bqP5a2X77yaXCIkMlwiJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X25vdEZvdW5kJzogJ+WIhuexu+KAnCQx4oCd5rKh5pyJ5om+5YiwJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2V4aXN0cyc6ICfliIbnsbvigJwkMeKAneW3sue7j+WtmOWcqO+8jOayoeaciea3u+WKoOOAgicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZXNvbHZlZCc6ICfvvIjph43lrprlkJFbW0NhdGVnb3J5OiQxXV3lt7LlpITnkIbvvIknLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11bmNhdF9yZW1vdmVkJzogJ+W3suenu+mZpHt7dW5jYXRlZ29yaXplZH19Jyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBwcmVmaXggdG8gdGhlIGVkaXQgc3VtbWFyeS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtcHJlZml4JzogJ+S9v+eUqFtbSDpIT1RDQVR8SG90Q2F0XV0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIGFwcGVuZCB0byB0aGUgZWRpdCBzdW1tYXJ5LiBOYW1lZCAndXNpbmcnIGZvciBoaXN0b3JpY2FsIHJlYXNvbnMuIElmIHlvdSBwcmVmZXJcblx0XHRcdC8vIHRvIGhhdmUgYSBtYXJrZXIgYXQgdGhlIGZyb250LCB1c2UgcHJlZml4IGFuZCBzZXQgdGhpcyB0byB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11c2luZyc6ICcnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9jaGFuZ2UnOiAnJDHkuKrliIbnsbsnLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnk7IGkuZS4sIGEgY2F0ZWdvcnkgdGhhdCBzaG91bGQgbm90IGNvbnRhaW5cblx0XHRcdC8vIGFueSBpdGVtcywgYnV0IHRoYXQgY29udGFpbnMgbGlua3MgdG8gb3RoZXIgY2F0ZWdvcmllcyB3aGVyZSBzdHVmZiBzaG91bGQgYmUgY2F0ZWdvcml6ZWQuIElmIHlvdSBkb24ndCBoYXZlXG5cdFx0XHQvLyB0aGF0IGNvbmNlcHQgb24geW91ciB3aWtpLCBzZXQgaXQgdG8gYmxhbmsgc3RyaW5nLiBVc2UgYmxhbmtzLCBub3QgdW5kZXJzY29yZXMuXG5cdFx0XHQnaG90Y2F0LWRpc2FtYmlnX2NhdGVnb3J5JzogJycsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSAoc29mdCkgcmVkaXJlY3QgdG8gc29tZSBvdGhlciBjYXRlZ29yeSBkZWZpbmVkIGJ5IGEgbGlua1xuXHRcdFx0Ly8gdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnkuIElmIHlvdXIgd2lraSBkb2Vzbid0IGhhdmUgc29mdCBjYXRlZ29yeSByZWRpcmVjdHMsIHNldCB0aGlzIHRvIG51bGwuXG5cdFx0XHQvLyBJZiBhIHNvZnQtcmVkaXJlY3RlZCBjYXRlZ29yeSBjb250YWlucyBtb3JlIHRoYW4gb25lIGxpbmsgdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnksIGl0J3MgY29uc2lkZXJlZFxuXHRcdFx0Ly8gYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeSBpbnN0ZWFkLlx0XHRcdCdob3RjYXQtcmVkaXJfY2F0ZWdvcnknOiAn5bey6YeN5a6a5ZCR55qE5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2VwYXJhdG9yJzogJzsgJyxcblx0XHRcdC8vICQxIGlzIHJlcGxhY2VkIGJ5IGEgbnVtYmVyLiBJZiB5b3VyIGxhbmd1YWdlIGhhcyBzZXZlcmFsIHBsdXJhbCBmb3JtcyAoYy5mLiBbWzplbndpa2k6RHVhbCAoZ3JhbW1hdGljYWwgZm9ybSldXSksXG5cdFx0XHQvLyB5b3UgY2FuIHNldCB0aGlzIHRvIGFuIGFycmF5IG9mIHN0cmluZ3Mgc3VpdGFibGUgZm9yIHBhc3NpbmcgdG8gbXcubGFuZ3VhZ2UuY29uZmlnUGx1cmFsKCkuXG5cdFx0XHQvLyBJZiB0aGF0IGZ1bmN0aW9uIGRvZXNuJ3QgZXhpc3QsIEhvdENhdCB3aWxsIHNpbXBseSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGxhc3Rcblx0XHRcdC8vIGVudHJ5IGluIHRoZSBhcnJheS5cblx0XHRcdC8vIERlZmF1bHRzIHRvICdbWycgKyBjYXRlZ29yeV9jYW5vbmljYWwgKyAnOiQxXV0nLiBDYW4gYmUgb3ZlcnJpZGRlbiBpZiBpbiB0aGUgc2hvcnQgZWRpdCBzdW1tYXJpZXNcblx0XHRcdC8vIG5vdCB0aGUgc3RhbmRhcmQgY2F0ZWdvcnkgbmFtZSBzaG91bGQgYmUgdXNlZCBidXQsIHNheSwgYSBzaG9ydGVyIG5hbWVzcGFjZSBhbGlhcy4gJDEgaXMgcmVwbGFjZWRcblx0XHRcdC8vIGJ5IGEgY2F0ZWdvcnkgbmFtZS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJzogJyQxJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNvbW1pdCc6ICfkv53lrZgnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtb2snOiAn56Gu5a6aJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhbmNlbCc6ICflj5bmtognLFxuXHRcdFx0Ly8gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9lcnJvcic6XG5cdFx0XHRcdCfml6Dms5Xku47mnI3liqHlmajlj5blvpfpobXpnaLmloflrZfjgILlm6DmraTvvIzmgqjnmoTliIbnsbvmm7TmlLnml6Dms5Xkv53lrZjjgILmiJHku6zkuLrmraTkuI3kvr/ooajnpLrmirHmrYnjgIInLFxuXHRcdFx0Ly8gUGx1cmFsIG9mIGNhdGVnb3J5X2Nhbm9uaWNhbC5cblx0XHRcdCdob3RjYXQtY2F0ZWdvcmllcyc6ICfliIbnsbsnLFxuXHRcdFx0Ly8gTmFtZXMgZm9yIHRoZSBzZWFyY2ggZW5naW5lc1xuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc2VhcmNoaW5kZXgnOiAn5pCc57Si57Si5byVJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhZ2VsaXN0JzogJ+mhtemdouWIl+ihqCcsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1jb21iaW5lZCc6ICflkIjlubbmkJzntKInLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc3ViY2F0JzogJ+WtkOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYXJlbnRjYXQnOiAn5LiK5bGC5YiG57G7Jyxcblx0XHRcdC8vIFRoZSB0b29sdGlwcyBmb3IgdGhlIGFib3ZlIGxpbmtzXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWNoYW5nZSc6ICfkv67mlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZW1vdmUnOiAn56e76ZmkJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtYWRkJzogJ+WinuWKoOS4gOS4quaWsOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlc3RvcmUnOiAn5pKk6ZSA5pu05pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdW5kbyc6ICfmkqTplIDmm7TmlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1kb3duJzogJ+aJk+W8gOS7peS/ruaUueW5tuaYvuekuuWtkOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVwJzogJ+aJk+W8gOS7peS/ruaUueW5tuaYvuekuuS4iuWxguWIhuexuycsXG5cdFx0XHQvLyBUb29sdGlwIGZvciB0aGUgXCJlbnRlciBtdWx0aS1tb2RlXCIgbGlua1xuXHRcdFx0J2hvdGNhdC1tdWx0aV90b29sdGlwJzogJ+S/ruaUueWkmuS4quWIhuexuycsXG5cdFx0fSk7XG5cdH1cbn07XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAnLi9tb2R1bGVzL2NoZWNrJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2dldE1lc3NhZ2UnO1xuaW1wb3J0IHtob3RDYXRNZXNzYWdlc30gZnJvbSAnLi9tb2R1bGVzL21lc3NhZ2VzJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBamF4LWJhc2VkIHNpbXBsZSBDYXRlZ29yeSBtYW5hZ2VyLiBBbGxvd3MgYWRkaW5nL3JlbW92aW5nL2NoYW5naW5nIGNhdGVnb3JpZXMgb24gYSBwYWdlIHZpZXcuXG4gKiBTdXBwb3J0cyBtdWx0aXBsZSBjYXRlZ29yeSBjaGFuZ2VzLCBhcyB3ZWxsIGFzIHJlZGlyZWN0IGFuZCBkaXNhbWJpZ3VhdGlvbiByZXNvbHV0aW9uLiBBbHNvXG4gKiBwbHVncyBpbnRvIHRoZSB1cGxvYWQgZm9ybS4gU2VhcmNoIGVuZ2luZXMgdG8gdXNlIGZvciB0aGUgc3VnZ2VzdGlvbiBsaXN0IGFyZSBjb25maWd1cmFibGUsIGFuZFxuICogY2FuIGJlIHNlbGVjdGVkIGludGVyYWN0aXZlbHkuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9IZWxwOkdhZGdldC1Ib3RDYXR9XG4gKiBAYXV0aG9yIGF1dGhvcnMgPGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvSGVscDpHYWRnZXQtSG90Q2F0L1ZlcnNpb25faGlzdG9yeT5cbiAqL1xuLy8gTG9hZCB0cmFuc2xhdGlvbnMgbG9jYWxseVxuaG90Q2F0TWVzc2FnZXMoKTtcblxuLy8gTWFpbiBib2R5XG4oZnVuY3Rpb24gaG90Q2F0KCkge1xuXHQvLyBEb24ndCB1c2UgbXcuY29uZmlnLmdldCgpIGFzIHRoYXQgdGFrZXMgYSBjb3B5IG9mIHRoZSBjb25maWcsIGFuZCBzbyBkb2Vzbid0XG5cdC8vIGFjY291bnQgZm9yIHZhbHVlcyBjaGFuZ2luZywgZS5nLiB3Z0N1clJldmlzaW9uSWQgYWZ0ZXIgYSBWRSBlZGl0XG5cdGNvbnN0IGNvbmYgPSBtdy5jb25maWcudmFsdWVzO1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zIChpbiBvbGQgSUUvT3BlcmEgZWxlbWVudCBpZHMgYmVjb21lIHdpbmRvdyBwcm9wZXJ0aWVzKVxuXHRpZiAoKHdpbmRvdy5Ib3RDYXQgJiYgIXdpbmRvdy5Ib3RDYXQubm9kZU5hbWUpIHx8IGNvbmYud2dBY3Rpb24gPT09ICdlZGl0Jykge1xuXHRcdHJldHVybjsgLy8gTm90IG9uIGVkaXQgbW9kZVxuXHR9XG5cdC8vIEluaXRpYWxpemUgTWVkaWFXaWtpIEFQSVxuXHRjb25zdCBhcGkgPSBpbml0TXdBcGkoJ0hvdENhdC8zLjAnKTtcblx0Ly8gQ29uZmlndXJhdGlvbiBzdHVmZi5cblx0d2luZG93LkhvdENhdCA9IHtcblx0XHQvLyBUaGUgbGl0dGxlIG1vZGlmaWNhdGlvbiBsaW5rcyBkaXNwbGF5ZWQgYWZ0ZXIgY2F0ZWdvcnkgbmFtZXMuIFUrMjIxMiBpcyBhIG1pbnVzIHNpZ247IFUrMjE5MyBhbmQgVSsyMTkxIGFyZVxuXHRcdC8vIGRvd253YXJkIGFuZCB1cHdhcmQgcG9pbnRpbmcgYXJyb3dzLiBEbyBub3QgdXNlIOKGkyBhbmQg4oaRIGluIHRoZSBjb2RlIVxuXHRcdGxpbmtzOiB7XG5cdFx0XHRjaGFuZ2U6ICcowrEpJyxcblx0XHRcdHJlbW92ZTogJyhcXHUyMjEyKScsXG5cdFx0XHRhZGQ6ICcoKyknLFxuXHRcdFx0cmVzdG9yZTogJyjDlyknLFxuXHRcdFx0dW5kbzogJyjDlyknLFxuXHRcdFx0ZG93bjogJyhcXHUyMTkzKScsXG5cdFx0XHR1cDogJyhcXHUyMTkxKScsXG5cdFx0fSxcblx0XHRjaGFuZ2VUYWc6ICdIb3RDYXQnLFxuXHRcdC8vIFRoZSBIVE1MIGNvbnRlbnQgb2YgdGhlIFwiZW50ZXIgbXVsdGktbW9kZVwiIGxpbmsgYXQgdGhlIGZyb250LlxuXHRcdGFkZG11bHRpOiAnPHNwYW4+KzxzdXA+Kzwvc3VwPjwvc3Bhbj4nLFxuXHRcdC8vIFJldHVybiB0cnVlIHRvIGRpc2FibGUgSG90Q2F0LlxuXHRcdGRpc2FibGU6ICgpID0+IHtcblx0XHRcdGNvbnN0IG5zID0gY29uZi53Z05hbWVzcGFjZU51bWJlcjtcblx0XHRcdGNvbnN0IG5zSWRzID0gY29uZi53Z05hbWVzcGFjZUlkcztcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdG5zIDwgMCB8fFxuXHRcdFx0XHQvLyBTcGVjaWFsIHBhZ2VzOyBTcGVjaWFsOlVwbG9hZCBpcyBoYW5kbGVkIGRpZmZlcmVudGx5XG5cdFx0XHRcdG5zID09PSAxMCB8fFxuXHRcdFx0XHQvLyBUZW1wbGF0ZXNcblx0XHRcdFx0bnMgPT09IDgyOCB8fFxuXHRcdFx0XHQvLyBNb2R1bGUgKEx1YSlcblx0XHRcdFx0bnMgPT09IDggfHxcblx0XHRcdFx0Ly8gTWVkaWFXaWtpXG5cdFx0XHRcdChucyA9PT0gNiAmJiAhY29uZi53Z0FydGljbGVJZCkgfHxcblx0XHRcdFx0Ly8gTm9uLWV4aXN0aW5nIGZpbGUgcGFnZXNcblx0XHRcdFx0KG5zID09PSAyICYmIC9cXC4oanN8Y3NzKSQvLnRlc3QoY29uZi53Z1RpdGxlKSkgfHxcblx0XHRcdFx0Ly8gVXNlciBzY3JpcHRzXG5cdFx0XHRcdChuc0lkcyAmJiAobnMgPT09IG5zSWRzLmNyZWF0b3IgfHwgbnMgPT09IG5zSWRzLnRpbWVkdGV4dCB8fCBucyA9PT0gbnNJZHMuaW5zdGl0dXRpb24pKVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdC8vIEEgcmVnZXhwIG1hdGNoaW5nIGEgdGVtcGxhdGVzIHVzZWQgdG8gbWFyayB1bmNhdGVnb3JpemVkIHBhZ2VzLCBpZiB5b3VyIHdpa2kgZG9lcyBoYXZlIHRoYXQuXG5cdFx0Ly8gSWYgbm90LCBzZXQgaXQgdG8gbnVsbC5cblx0XHR1bmNhdF9yZWdleHA6IC97e1xccypbVXVdbmNhdGVnb3JpemVkXFxzKltefV0qfX1cXHMqKDwhLS0uKj8tLT5cXHMqKT8vZyxcblx0XHQvLyBUaGUgaW1hZ2VzIHVzZWQgZm9yIHRoZSBsaXR0bGUgaW5kaWNhdGlvbiBpY29uLiBTaG91bGQgbm90IG5lZWQgY2hhbmdpbmcuXG5cdFx0ZXhpc3RzWWVzOiAnaHR0cHM6Ly95b3VzaG91Lndpa2kvaW1hZ2VzL2IvYmUvUF95ZXMuc3ZnLzI0cHgtUF95ZXMuc3ZnLnBuZycsXG5cdFx0ZXhpc3RzTm86ICdodHRwczovL3lvdXNob3Uud2lraS9pbWFnZXMvNC80Mi9QX25vLnN2Zy8yNHB4LVBfbm8uc3ZnLnBuZycsXG5cdFx0Ly8gYSBsaXN0IG9mIGNhdGVnb3JpZXMgd2hpY2ggY2FuIGJlIHJlbW92ZWQgYnkgcmVtb3ZpbmcgYSB0ZW1wbGF0ZVxuXHRcdC8vIGtleTogdGhlIGNhdGVnb3J5IHdpdGhvdXQgbmFtZXNwYWNlXG5cdFx0Ly8gdmFsdWU6IEEgcmVnZXhwIG1hdGNoaW5nIHRoZSB0ZW1wbGF0ZSBuYW1lLCBhZ2FpbiB3aXRob3V0IG5hbWVzcGFjZVxuXHRcdC8vIElmIHlvdSBkb24ndCBoYXZlIHRoaXMgYXQgeW91ciB3aWtpLCBvciBkb24ndCB3YW50IHRoaXMsIHNldCBpdCB0byBhbiBlbXB0eSBvYmplY3Qge30uXG5cdFx0dGVtcGxhdGVfY2F0ZWdvcmllczoge30sXG5cdFx0Ly8gT3ZlcnJpZGUgdGhlIGRlY2lzaW9uIG9mIHdoZXRoZXIgSG90Q2F0IHNob3VsZCBoZWxwIHVzZXJzIGJ5IGF1dG9tYXRpY2FsbHlcblx0XHQvLyBjYXBpdGFsaXNpbmcgdGhlIHRpdGxlIGluIHRoZSB1c2VyIGlucHV0IHRleHQgaWYgdGhlIHdpa2kgaGFzIGNhc2Utc2Vuc2l0aXZlIHBhZ2UgbmFtZXMuXG5cdFx0Ly8gQmFzaWNhbGx5LCB0aGlzIHdpbGwgbWFrZSBhbiBBUEkgcXVlcnkgdG8gY2hlY2sgdGhlIE1lZGlhV2lraSBjb25maWd1cmF0aW9uIGFuZCBIb3RDYXQgdGhlbiBzZXRzXG5cdFx0Ly8gdGhpcyB0byB0cnVlIGZvciBtb3N0IHdpa2lzLCBhbmQgdG8gZmFsc2Ugb24gV2lrdGlvbmFyeS5cblx0XHQvL1xuXHRcdC8vIFlvdSBjYW4gc2V0IHRoaXMgZGlyZWN0bHkgaWYgdGhlcmUgaXMgYSBwcm9ibGVtIHdpdGggaXQuIEZvciBleGFtcGxlLCBHZW9yZ2lhbiBXaWtpcGVkaWEgKGthd2lraSksXG5cdFx0Ly8gaXMga25vd24gdG8gaGF2ZSBkaWZmZXJlbnQgY2FwaXRhbGlzYXRpb24gbG9naWMgYmV0d2VlbiBNZWRpYVdpa2kgUEhQIGFuZCBKYXZhU2NyaXB0LiBBcyBzdWNoLCBhdXRvbWF0aWNcblx0XHQvLyBjYXNlIGNoYW5nZXMgaW4gSmF2YVNjcmlwdCBieSBIb3RDYXQgd291bGQgYmUgd3JvbmcuXG5cdFx0Y2FwaXRhbGl6ZVBhZ2VOYW1lczogbnVsbCxcblx0XHQvLyBJZiB1cGxvYWRfZGlzYWJsZWQgaXMgdHJ1ZSwgSG90Q2F0IHdpbGwgbm90IGJlIHVzZWQgb24gdGhlIFVwbG9hZCBmb3JtLlxuXHRcdHVwbG9hZF9kaXNhYmxlZDogZmFsc2UsXG5cdFx0Ly8gU2luZ2xlIHJlZ3VsYXIgZXhwcmVzc2lvbiBtYXRjaGluZyBibGFja2xpc3RlZCBjYXRlZ29yaWVzIHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgb3Jcblx0XHQvLyBhZGRlZCB1c2luZyBIb3RDYXQuIEZvciBpbnN0YW5jZSAvXFxic3R1YnM/JC8gKGFueSBjYXRlZ29yeSBlbmRpbmcgd2l0aCB0aGUgd29yZCBcInN0dWJcIlxuXHRcdC8vIG9yIFwic3R1YnNcIiksIG9yIC8oXFxic3R1YnM/JCl8XFxibWFpbnRlbmFuY2VcXGIvIChzdHViIGNhdGVnb3JpZXMgYW5kIGFueSBjYXRlZ29yeSB3aXRoIHRoZVxuXHRcdC8vIHdvcmQgXCJtYWludGVuYW5jZVwiIGluIGl0cyB0aXRsZS5cblx0XHRibGFja2xpc3Q6IG51bGwsXG5cdFx0Ly8gU3R1ZmYgY2hhbmdlYWJsZSBieSB1c2Vyczpcblx0XHQvLyBCYWNrZ3JvdW5kIGZvciBjaGFuZ2VkIGNhdGVnb3JpZXMgaW4gbXVsdGktZWRpdCBtb2RlLiBEZWZhdWx0IGlzIGEgdmVyeSBsaWdodCBzYWxtb24gcGluay5cblx0XHRiZ19jaGFuZ2VkOiAnI0ZDQScsXG5cdFx0Ly8gSWYgdHJ1ZSwgSG90Q2F0IHdpbGwgbmV2ZXIgYXV0b21hdGljYWxseSBzdWJtaXQgY2hhbmdlcy4gSG90Q2F0IHdpbGwgb25seSBvcGVuIGFuIGVkaXQgcGFnZSB3aXRoXG5cdFx0Ly8gdGhlIGNoYW5nZXM7IHVzZXJzIG11c3QgYWx3YXlzIHNhdmUgZXhwbGljaXRseS5cblx0XHRub19hdXRvY29tbWl0OiBmYWxzZSxcblx0XHQvLyBJZiB0cnVlLCB0aGUgXCJjYXRlZ29yeSBkZWxldGlvblwiIGxpbmsgXCIoLSlcIiB3aWxsIG5ldmVyIHNhdmUgYXV0b21hdGljYWxseSBidXQgYWx3YXlzIHNob3cgYW5cblx0XHQvLyBlZGl0IHBhZ2Ugd2hlcmUgdGhlIHVzZXIgaGFzIHRvIHNhdmUgdGhlIGVkaXQgbWFudWFsbHkuIElzIGZhbHNlIGJ5IGRlZmF1bHQgYmVjYXVzZSB0aGF0J3MgdGhlXG5cdFx0Ly8gdHJhZGl0aW9uYWwgYmVoYXZpb3IuIFRoaXMgc2V0dGluZyBvdmVycmlkZXMgbm9fYXV0b2NvbW1pdCBmb3IgXCIoLSlcIiBsaW5rcy5cblx0XHRkZWxfbmVlZHNfZGlmZjogZmFsc2UsXG5cdFx0Ly8gVGltZSwgaW4gbWlsbGlzZWNvbmRzLCB0aGF0IEhvdENhdCB3YWl0cyBhZnRlciBhIGtleXN0cm9rZSBiZWZvcmUgbWFraW5nIGEgcmVxdWVzdCB0byB0aGVcblx0XHQvLyBzZXJ2ZXIgdG8gZ2V0IHN1Z2dlc3Rpb25zLlxuXHRcdHN1Z2dlc3RfZGVsYXk6IDEwMDAsXG5cdFx0Ly8gRGVmYXVsdCB3aWR0aCwgaW4gY2hhcmFjdGVycywgb2YgdGhlIHRleHQgaW5wdXQgZmllbGQuXG5cdFx0ZWRpdGJveF93aWR0aDogNDAsXG5cdFx0Ly8gT25lIG9mIHRoZSBlbmdpbmVfbmFtZXMgYWJvdmUsIHRvIGJlIHVzZWQgYXMgdGhlIGRlZmF1bHQgc3VnZ2VzdGlvbiBlbmdpbmUuXG5cdFx0c3VnZ2VzdGlvbnM6ICdjb21iaW5lZCcsXG5cdFx0Ly8gSWYgdHJ1ZSwgYWx3YXlzIHVzZSB0aGUgZGVmYXVsdCBlbmdpbmUsIGFuZCBuZXZlciBkaXNwbGF5IGEgc2VsZWN0b3IuXG5cdFx0Zml4ZWRfc2VhcmNoOiBmYWxzZSxcblx0XHQvLyBJZiBmYWxzZSwgZG8gbm90IGRpc3BsYXkgdGhlIFwidXBcIiBhbmQgXCJkb3duXCIgbGlua3Ncblx0XHR1c2VfdXBfZG93bjogdHJ1ZSxcblx0XHQvLyBEZWZhdWx0IGxpc3Qgc2l6ZVxuXHRcdGxpc3RTaXplOiAxMCxcblx0XHQvLyBJZiB0cnVlLCBzaW5nbGUgY2F0ZWdvcnkgY2hhbmdlcyBhcmUgbWFya2VkIGFzIG1pbm9yIGVkaXRzLiBJZiBmYWxzZSwgdGhleSdyZSBub3QuXG5cdFx0c2luZ2xlX21pbm9yOiB0cnVlLFxuXHRcdC8vIElmIHRydWUsIG5ldmVyIGFkZCBhIHBhZ2UgdG8gdGhlIHVzZXIncyB3YXRjaGxpc3QuIElmIGZhbHNlLCBwYWdlcyBnZXQgYWRkZWQgdG8gdGhlIHdhdGNobGlzdCBpZlxuXHRcdC8vIHRoZSB1c2VyIGhhcyB0aGUgXCJBZGQgcGFnZXMgSSBlZGl0IHRvIG15IHdhdGNobGlzdFwiIG9yIHRoZSBcIkFkZCBwYWdlcyBJIGNyZWF0ZSB0byBteSB3YXRjaGxpc3RcIlxuXHRcdC8vIG9wdGlvbnMgaW4gaGlzIG9yIGhlciBwcmVmZXJlbmNlcyBzZXQuXG5cdFx0ZG9udF9hZGRfdG9fd2F0Y2hsaXN0OiBmYWxzZSxcblx0XHRzaG9ydGN1dHM6IG51bGwsXG5cdFx0YWRkU2hvcnRjdXRzOiAobWFwKSA9PiB7XG5cdFx0XHRsZXQgX2E7XG5cdFx0XHRpZiAoIW1hcCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQoX2EgPSB3aW5kb3cuSG90Q2F0KS5zaG9ydGN1dHMgfHwgKF9hLnNob3J0Y3V0cyA9IHt9KTtcblx0XHRcdGZvciAobGV0IGsgaW4gbWFwKSB7XG5cdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bihtYXAsIGspIHx8IHR5cGVvZiBrICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB2ID0gbWFwW2tdO1xuXHRcdFx0XHRpZiAodHlwZW9mIHYgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ayA9IGsudHJpbSgpO1xuXHRcdFx0XHR2ID0gdi50cmltKCk7XG5cdFx0XHRcdGlmIChrLmxlbmd0aCA9PT0gMCB8fCB2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHdpbmRvdy5Ib3RDYXQuc2hvcnRjdXRzW2tdID0gdjtcblx0XHRcdH1cblx0XHR9LFxuXHR9O1xuXHRjb25zdCBIQyA9IHdpbmRvdy5Ib3RDYXQ7XG5cdC8vIE1vcmUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIFdlIGhhdmUgYSBmZXcgcGxhY2VzIHdoZXJlIHdlIHRlc3QgZm9yIHRoZSBicm93c2VyOiBvbmNlIGZvclxuXHQvLyBTYWZhcmkgPCAzLjAsIGFuZCB0d2ljZSBmb3IgV2ViS2l0IChDaHJvbWUgb3IgU2FmYXJpLCBhbnkgdmVyc2lvbnMpXG5cdGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuXHRjb25zdCBpc193ZWJraXQgPSAvYXBwbGV3ZWJraXRcXC9cXGQrLy50ZXN0KHVhKSAmJiAhdWEuaW5jbHVkZXMoJ3Nwb29mZXInKTtcblx0bGV0IGNhdF9wcmVmaXggPSBudWxsO1xuXHRsZXQgbm9TdWdnZXN0aW9ucyA9IGZhbHNlO1xuXHQvLyBObyBmdXJ0aGVyIGNoYW5nZXMgc2hvdWxkIGJlIG5lY2Vzc2FyeSBoZXJlLlxuXHQvLyBUaGUgZm9sbG93aW5nIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmdzIGFyZSB1c2VkIHdoZW4gc2VhcmNoaW5nIGZvciBjYXRlZ29yaWVzIGluIHdpa2l0ZXh0LlxuXHRjb25zdCB3aWtpVGV4dEJsYW5rID0gJ1tcXFxcdCBfXFxcXHhBMFxcXFx1MTY4MFxcXFx1MTgwRVxcXFx1MjAwMC1cXFxcdTIwMEFcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTIwMkZcXFxcdTIwNUZcXFxcdTMwMDBdKyc7XG5cdGNvbnN0IHdpa2lUZXh0QmxhbmtSRSA9IG5ldyBSZWdFeHAod2lraVRleHRCbGFuaywgJ2cnKTtcblx0Ly8gUmVnZXhwIGZvciBoYW5kbGluZyBibGFua3MgaW5zaWRlIGEgY2F0ZWdvcnkgdGl0bGUgb3IgbmFtZXNwYWNlIG5hbWUuXG5cdC8vIFNlZSB7QGxpbmsgaHR0cDovL3N2bi53aWtpbWVkaWEub3JnL3ZpZXd2Yy9tZWRpYXdpa2kvdHJ1bmsvcGhhc2UzL2luY2x1ZGVzL1RpdGxlLnBocD9yZXZpc2lvbj0xMDQwNTEmdmlldz1tYXJrdXAjbDI3MjJ9XG5cdC8vIFNlZSBhbHNvIHtAbGluayBodHRwOi8vd3d3LmZpbGVmb3JtYXQuaW5mby9pbmZvL3VuaWNvZGUvY2F0ZWdvcnkvWnMvbGlzdC5odG19XG5cdC8vICAgTWVkaWFXaWtpIGNvbGxhcHNlcyBzZXZlcmFsIGNvbnRpZ3VvdXMgYmxhbmtzIGluc2lkZSBhIHBhZ2UgdGl0bGUgdG8gb25lIHNpbmdsZSBibGFuay4gSXQgYWxzbyByZXBsYWNlIGFcblx0Ly8gbnVtYmVyIG9mIHNwZWNpYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGJ5IHNpbXBsZSBibGFua3MuIEFuZCBmaW5hbGx5LCBibGFua3MgYXJlIHRyZWF0ZWQgYXMgdW5kZXJzY29yZXMuXG5cdC8vIFRoZXJlZm9yZSwgd2hlbiBsb29raW5nIGZvciBwYWdlIHRpdGxlcyBpbiB3aWtpdGV4dCwgd2UgbXVzdCBoYW5kbGUgYWxsIHRoZXNlIGNhc2VzLlxuXHQvLyAgIE5vdGU6IHdlIF9kb18gaW5jbHVkZSB0aGUgaG9yaXpvbnRhbCB0YWIgaW4gdGhlIGFib3ZlIGxpc3QsIGV2ZW4gdGhvdWdoIHRoZSBNZWRpYVdpa2kgc29mdHdhcmUgZm9yIHNvbWUgcmVhc29uXG5cdC8vIGFwcGVhcnMgdG8gbm90IGhhbmRsZSBpdC4gVGhlIHplcm8td2lkdGggc3BhY2UgXFx1MjAwQiBpcyBfbm90XyBoYW5kbGVkIGFzIGEgc3BhY2UgaW5zaWRlIHRpdGxlcyBieSBNVy5cblx0Y29uc3Qgd2lraVRleHRCbGFua09yQmlkaSA9ICdbXFxcXHQgX1xcXFx4QTBcXFxcdTE2ODBcXFxcdTE4MEVcXFxcdTIwMDAtXFxcXHUyMDBCXFxcXHUyMDBFXFxcXHUyMDBGXFxcXHUyMDI4LVxcXFx1MjAyRlxcXFx1MjA1RlxcXFx1MzAwMF0qJztcblx0Ly8gV2hpdGVzcGFjZSByZWdleHAgZm9yIGhhbmRsaW5nIHdoaXRlc3BhY2UgYmV0d2VlbiBsaW5rIGNvbXBvbmVudHMuIEluY2x1ZGluZyB0aGUgaG9yaXpvbnRhbCB0YWIsIGJ1dCBub3QgXFxuXFxyXFxmXFx2OlxuXHQvLyBhIGxpbmsgbXVzdCBiZSBvbiBvbmUgc2luZ2xlIGxpbmUuXG5cdC8vICAgTWVkaWFXaWtpIGFsc28gcmVtb3ZlcyBVbmljb2RlIGJpZGkgb3ZlcnJpZGUgY2hhcmFjdGVycyBpbiBwYWdlIHRpdGxlcyAoYW5kIG5hbWVzcGFjZSBuYW1lcykgY29tcGxldGVseS5cblx0Ly8gVGhpcyBpcyAqbm90KiBoYW5kbGVkLCBhcyBpdCB3b3VsZCByZXF1aXJlIHVzIHRvIGFsbG93IGFueSBvZiBbXFx1MjAwRVxcdTIwMEZcXHUyMDJBLVxcdTIwMkVdIGJldHdlZW4gYW55IHR3b1xuXHQvLyBjaGFyYWN0ZXJzIGluc2lkZSBhIGNhdGVnb3J5IGxpbmsuIEl0IF9jb3VsZF8gYmUgZG9uZSB0aG91Z2guLi4gV2UgX2RvXyBoYW5kbGUgc3RyYW5nZSBzcGFjZXMsIGluY2x1ZGluZyB0aGVcblx0Ly8gemVyby13aWR0aCBzcGFjZSBcXHUyMDBCLCBhbmQgYmlkaSBvdmVycmlkZXMgYmV0d2VlbiB0aGUgY29tcG9uZW50cyBvZiBhIGNhdGVnb3J5IGxpbmsgKGFkamFjZW50IHRvIHRoZSBjb2xvbixcblx0Ly8gb3IgYWRqYWNlbnQgdG8gYW5kIGluc2lkZSBvZiBcIltbXCIgYW5kIFwiXV1cIikuXG5cdC8vIEZpcnN0IGF1dG8tbG9jYWxpemUgdGhlIHJlZ2V4cHMgZm9yIHRoZSBjYXRlZ29yeSBhbmQgdGhlIHRlbXBsYXRlIG5hbWVzcGFjZXMuXG5cdGNvbnN0IGZvcm1hdHRlZE5hbWVzcGFjZXMgPSBjb25mLndnRm9ybWF0dGVkTmFtZXNwYWNlcztcblx0Y29uc3QgbmFtZXNwYWNlSWRzID0gY29uZi53Z05hbWVzcGFjZUlkcztcblx0Y29uc3QgYXV0b0xvY2FsaXplID0gKG5hbWVzcGFjZU51bWJlciwgZmFsbGJhY2spID0+IHtcblx0XHRjb25zdCBjcmVhdGVSZWdleHBTdHIgPSAobmFtZSkgPT4ge1xuXHRcdFx0aWYgKCFuYW1lIHx8IG5hbWUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCByZWdleF9uYW1lID0gJyc7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgaW5pdGlhbCA9IG5hbWUuY2hhckF0KGkpO1xuXHRcdFx0XHRjb25zdCBsbCA9IGluaXRpYWwudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0Y29uc3QgdWwgPSBpbml0aWFsLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdHJlZ2V4X25hbWUgKz0gbGwgPT09IHVsID8gaW5pdGlhbCA6IGBbJHtsbH0ke3VsfV1gO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlZ2V4X25hbWUucmVwbGFjZSgvKFskKCkqKy4/XFxcXF5dKS9nLCAnXFxcXCQxJykucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsIHdpa2lUZXh0QmxhbmspO1xuXHRcdH07XG5cdFx0ZmFsbGJhY2sgPSBmYWxsYmFjay50b0xvd2VyQ2FzZSgpO1xuXHRcdGNvbnN0IGNhbm9uaWNhbCA9IGZvcm1hdHRlZE5hbWVzcGFjZXNbU3RyaW5nKG5hbWVzcGFjZU51bWJlcildLnRvTG93ZXJDYXNlKCk7XG5cdFx0bGV0IHJlZ2V4cCA9IGNyZWF0ZVJlZ2V4cFN0cihjYW5vbmljYWwpO1xuXHRcdGlmIChmYWxsYmFjayAmJiBjYW5vbmljYWwgIT09IGZhbGxiYWNrKSB7XG5cdFx0XHRyZWdleHAgKz0gYHwke2NyZWF0ZVJlZ2V4cFN0cihmYWxsYmFjayl9YDtcblx0XHR9XG5cdFx0aWYgKG5hbWVzcGFjZUlkcykge1xuXHRcdFx0Zm9yIChjb25zdCBjYXRfbmFtZSBpbiBuYW1lc3BhY2VJZHMpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHR5cGVvZiBjYXRfbmFtZSA9PT0gJ3N0cmluZycgJiZcblx0XHRcdFx0XHRjYXRfbmFtZS50b0xvd2VyQ2FzZSgpICE9PSBjYW5vbmljYWwgJiZcblx0XHRcdFx0XHRjYXRfbmFtZS50b0xvd2VyQ2FzZSgpICE9PSBmYWxsYmFjayAmJlxuXHRcdFx0XHRcdG5hbWVzcGFjZUlkc1tjYXRfbmFtZV0gPT09IG5hbWVzcGFjZU51bWJlclxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZWdleHAgKz0gYHwke2NyZWF0ZVJlZ2V4cFN0cihjYXRfbmFtZSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVnZXhwO1xuXHR9O1xuXHRIQy5jYXRlZ29yeV9jYW5vbmljYWwgPSBmb3JtYXR0ZWROYW1lc3BhY2VzWycxNCddO1xuXHRIQy5jYXRlZ29yeV9yZWdleHAgPSBhdXRvTG9jYWxpemUoMTQsICdjYXRlZ29yeScpO1xuXHRpZiAoZm9ybWF0dGVkTmFtZXNwYWNlc1snMTAnXSkge1xuXHRcdEhDLnRlbXBsYXRlX3JlZ2V4cCA9IGF1dG9Mb2NhbGl6ZSgxMCwgJ3RlbXBsYXRlJyk7XG5cdH1cblx0Ly8gVXRpbGl0eSBmdW5jdGlvbnMuIFllcywgdGhpcyBkdXBsaWNhdGVzIHNvbWUgZnVuY3Rpb25hbGl0eSB0aGF0IGFsc28gZXhpc3RzIGluIG90aGVyIHBsYWNlcywgYnV0XG5cdC8vIHRvIGtlZXAgdGhpcyB3aG9sZSBzdHVmZiBpbiBhIHNpbmdsZSBmaWxlIG5vdCBkZXBlbmRpbmcgb24gYW55IG90aGVyIG9uLXdpa2kgSmF2YVNjcmlwdHMsIHdlIHJlLWRvXG5cdC8vIHRoZXNlIGZldyBvcGVyYXRpb25zIGhlcmUuXG5cdGNvbnN0IG1ha2UgPSAoYXJnLCBsaXRlcmFsKSA9PiB7XG5cdFx0aWYgKCFhcmcpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gbGl0ZXJhbCA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFyZykgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZyk7XG5cdH07XG5cdGNvbnN0IHBhcmFtID0gKG5hbWUsIHVyaSkgPT4ge1xuXHRcdHVyaSB8fD0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcblx0XHRjb25zdCByZSA9IG5ldyBSZWdFeHAoYFsmP10ke25hbWV9PShbXiYjXSopYCk7XG5cdFx0Y29uc3QgbSA9IHJlLmV4ZWModXJpKTtcblx0XHRpZiAobSAmJiBtLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQobVsxXSk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCB0aXRsZSA9IChocmVmKSA9PiB7XG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3Qgc2NyaXB0ID0gYCR7Y29uZi53Z1NjcmlwdH0/YDtcblx0XHRpZiAoXG5cdFx0XHRocmVmLmluZGV4T2Yoc2NyaXB0KSA9PT0gMCB8fFxuXHRcdFx0aHJlZi5pbmRleE9mKGNvbmYud2dTZXJ2ZXIgKyBzY3JpcHQpID09PSAwIHx8XG5cdFx0XHQoY29uZi53Z1NlcnZlci5zbGljZSgwLCAyKSA9PT0gJy8vJyAmJlxuXHRcdFx0XHRocmVmLmluZGV4T2YoZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgKyBjb25mLndnU2VydmVyICsgc2NyaXB0KSA9PT0gMClcblx0XHQpIHtcblx0XHRcdC8vIGhyZWY9XCIvaW5kZXgucGhwP3RpdGxlPS4uLlwiXG5cdFx0XHRyZXR1cm4gcGFyYW0oJ3RpdGxlJywgaHJlZik7XG5cdFx0fVxuXHRcdC8vIGhyZWY9XCIvd2lraS8uLi5cIlxuXHRcdGxldCBwcmVmaXggPSBjb25mLndnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyk7XG5cdFx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpKSB7XG5cdFx0XHRwcmVmaXggPSBjb25mLndnU2VydmVyICsgcHJlZml4O1xuXHRcdH0gLy8gRnVsbHkgZXhwYW5kZWQgVVJMP1xuXHRcdGlmIChocmVmLmluZGV4T2YocHJlZml4KSAmJiBwcmVmaXguc2xpY2UoMCwgMikgPT09ICcvLycpIHtcblx0XHRcdHByZWZpeCA9IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgcHJlZml4O1xuXHRcdH0gLy8gUHJvdG9jb2wtcmVsYXRpdmUgd2dTZXJ2ZXI/XG5cdFx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGhyZWYuc2xpY2UocHJlZml4Lmxlbmd0aCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3QgaGFzQ2xhc3MgPSAoe2NsYXNzTmFtZX0sIG5hbWUpID0+IHtcblx0XHRyZXR1cm4gYCAke2NsYXNzTmFtZX0gYC5pbmNsdWRlcyhgICR7bmFtZX0gYCk7XG5cdH07XG5cdGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyKSA9PiB7XG5cdFx0aWYgKCFzdHIgfHwgc3RyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHN0cjtcblx0XHR9XG5cdFx0cmV0dXJuIHN0ci5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuXHR9O1xuXHRjb25zdCB3aWtpUGFnZVBhdGggPSAocGFnZU5hbWUpID0+IHtcblx0XHRyZXR1cm4gY29uZi53Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgZW5jb2RlVVJJQ29tcG9uZW50KHBhZ2VOYW1lKS5yZXBsYWNlKC8lM0EvZywgJzonKS5yZXBsYWNlKC8lMkYvZywgJy8nKSk7XG5cdH07XG5cdGNvbnN0IGVzY2FwZVJFID0gKHN0cikgPT4ge1xuXHRcdHJldHVybiBzdHIucmVwbGFjZSgvKFskKCkqKy4/W1xcXFxcXF1eXSkvZywgJ1xcXFwkMScpO1xuXHR9O1xuXHRjb25zdCBzdWJzdGl0dXRlRmFjdG9yeSA9IChvcHRpb25zKSA9PiB7XG5cdFx0b3B0aW9ucyB8fD0ge307XG5cdFx0Y29uc3QgbGVhZCA9IG9wdGlvbnMuaW5kaWNhdG9yIHx8ICckJztcblx0XHRjb25zdCBpbmRpY2F0b3IgPSBlc2NhcGVSRShsZWFkKTtcblx0XHRjb25zdCBsYnJhY2UgPSBlc2NhcGVSRShvcHRpb25zLmxicmFjZSB8fCAneycpO1xuXHRcdGNvbnN0IHJicmFjZSA9IGVzY2FwZVJFKG9wdGlvbnMucmJyYWNlIHx8ICd9Jyk7XG5cdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKFxuXHRcdFx0Ly8gJCRcblx0XHRcdGAoPzoke2luZGljYXRvcn0oJHtpbmRpY2F0b3J9KSl8YCArXG5cdFx0XHRcdC8vICQwLCAkMVxuXHRcdFx0XHRgKD86JHtpbmRpY2F0b3J9KFxcXFxkKykpfGAgK1xuXHRcdFx0XHQvLyAke2tleX1cblx0XHRcdFx0YCg/OiR7aW5kaWNhdG9yfSg/OiR7bGJyYWNlfShbXiR7bGJyYWNlfSR7cmJyYWNlfV0rKSR7cmJyYWNlfSkpfGAgK1xuXHRcdFx0XHQvLyAka2V5IChvbmx5IGlmIGZpcnN0IGNoYXIgYWZ0ZXIgJCBpcyBub3QgJCwgZGlnaXQsIG9yIHsgKVxuXHRcdFx0XHRgKD86JHtpbmRpY2F0b3J9KD8hKD86WyR7aW5kaWNhdG9yfSR7bGJyYWNlfV18XFxcXGQpKShcXFxcUys/KVxcXFxiKWAsXG5cdFx0XHQnZydcblx0XHQpO1xuXHRcdC8vIFJlcGxhY2UgJDEsICQyLCBvciAke2tleTF9LCAke2tleTJ9LCBvciAka2V5MSwgJGtleTIgYnkgdmFsdWVzIGZyb20gbWFwLiAkJCBpcyByZXBsYWNlZCBieSBhIHNpbmdsZSAkLlxuXHRcdHJldHVybiAoc3RyLCBtYXApID0+IHtcblx0XHRcdGlmICghbWFwKSB7XG5cdFx0XHRcdHJldHVybiBzdHI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RyLnJlcGxhY2UocmUsIChtYXRjaCwgcHJlZml4LCBpZHgsIGtleSwgYWxwaGEpID0+IHtcblx0XHRcdFx0aWYgKHByZWZpeCA9PT0gbGVhZCkge1xuXHRcdFx0XHRcdHJldHVybiBsZWFkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGsgPSBhbHBoYSB8fCBrZXkgfHwgaWR4O1xuXHRcdFx0XHRjb25zdCByZXBsYWNlbWVudCA9IHR5cGVvZiBtYXBba10gPT09ICdmdW5jdGlvbicgPyBtYXBba10obWF0Y2gsIGspIDogbWFwW2tdO1xuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIHJlcGxhY2VtZW50ID09PSAnc3RyaW5nJyA/IHJlcGxhY2VtZW50IDogcmVwbGFjZW1lbnQgfHwgbWF0Y2g7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHR9O1xuXHRjb25zdCByZXBsYWNlU2hvcnRjdXRzID0gKCgpID0+IHtcblx0XHRjb25zdCByZXBsYWNlSGFzaCA9IHN1YnN0aXR1dGVGYWN0b3J5KHtcblx0XHRcdGluZGljYXRvcjogJyMnLFxuXHRcdFx0bGJyYWNlOiAnWycsXG5cdFx0XHRyYnJhY2U6ICddJyxcblx0XHR9KTtcblx0XHRyZXR1cm4gKHN0ciwgbWFwKSA9PiB7XG5cdFx0XHRjb25zdCBzID0gcmVwbGFjZUhhc2goc3RyLCBtYXApO1xuXHRcdFx0cmV0dXJuIEhDLmNhcGl0YWxpemVQYWdlTmFtZXMgPyBjYXBpdGFsaXplKHMpIDogcztcblx0XHR9O1xuXHR9KSgpO1xuXHQvLyBUZXh0IG1vZGlmaWNhdGlvblxuXHRjb25zdCBmaW5kQ2F0c1JFID0gbmV3IFJlZ0V4cChcblx0XHRgXFxcXFtcXFxcWyR7d2lraVRleHRCbGFua09yQmlkaX0oPzoke0hDLmNhdGVnb3J5X3JlZ2V4cH0pJHt3aWtpVGV4dEJsYW5rT3JCaWRpfTpbXlxcXFxdXStcXFxcXVxcXFxdYCxcblx0XHQnZydcblx0KTtcblx0Y29uc3QgcmVwbGFjZUJ5QmxhbmtzID0gKG1hdGNoKSA9PiB7XG5cdFx0cmV0dXJuIG1hdGNoLnJlcGxhY2UoLyhcXHN8XFxTKS9nLCAnICcpO1xuXHR9OyAvLyAvLi8gZG9lc24ndCBtYXRjaCBsaW5lYnJlYWtzLiAvKFxcc3xcXFMpLyBkb2VzLlxuXHRjb25zdCBmaW5kX2NhdGVnb3J5ID0gKHdpa2l0ZXh0LCBjYXRlZ29yeSwgb25jZSkgPT4ge1xuXHRcdGxldCBjYXRfcmVnZXggPSBudWxsO1xuXHRcdGlmIChIQy50ZW1wbGF0ZV9jYXRlZ29yaWVzW2NhdGVnb3J5XSkge1xuXHRcdFx0Y2F0X3JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFx7XFxcXHske3dpa2lUZXh0QmxhbmtPckJpZGl9KCR7SEMudGVtcGxhdGVfcmVnZXhwfSg/PSR7d2lraVRleHRCbGFua09yQmlkaX06KSk/JHt3aWtpVGV4dEJsYW5rT3JCaWRpfSg/OiR7SEMudGVtcGxhdGVfY2F0ZWdvcmllc1tjYXRlZ29yeV19KSR7d2lraVRleHRCbGFua09yQmlkaX0oXFxcXHwuKj8pP1xcXFx9XFxcXH1gLFxuXHRcdFx0XHQnZydcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGNhdF9uYW1lID0gZXNjYXBlUkUoY2F0ZWdvcnkpO1xuXHRcdFx0Y29uc3QgaW5pdGlhbCA9IGNhdF9uYW1lLnNsaWNlKDAsIDEpO1xuXHRcdFx0Y2F0X3JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFxbXFxcXFske3dpa2lUZXh0QmxhbmtPckJpZGl9KCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSkke3dpa2lUZXh0QmxhbmtPckJpZGl9OiR7d2lraVRleHRCbGFua09yQmlkaX0ke1xuXHRcdFx0XHRcdGluaXRpYWwgPT09ICdcXFxcJyB8fCAhSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lc1xuXHRcdFx0XHRcdFx0PyBpbml0aWFsXG5cdFx0XHRcdFx0XHQ6IGBbJHtpbml0aWFsLnRvVXBwZXJDYXNlKCl9JHtpbml0aWFsLnRvTG93ZXJDYXNlKCl9XWBcblx0XHRcdFx0fSR7Y2F0X25hbWUuc2xpY2UoMSkucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsIHdpa2lUZXh0QmxhbmspfSR7d2lraVRleHRCbGFua09yQmlkaX0oXFxcXHwuKj8pP1xcXFxdXFxcXF1gLFxuXHRcdFx0XHQnZydcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmIChvbmNlKSB7XG5cdFx0XHRyZXR1cm4gY2F0X3JlZ2V4LmV4ZWMod2lraXRleHQpO1xuXHRcdH1cblx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoJzxubycuY29uY2F0KCd3aWtpPicsICcoXFxcXHN8XFxcXFMpKj88L25vJywgJ3dpa2knLCAnPicpLCAnZycpO1xuXHRcdGNvbnN0IGNvcGllZHRleHQgPSB3aWtpdGV4dC5yZXBsYWNlKC88IS0tKFxcc3xcXFMpKj8tLT4vZywgcmVwbGFjZUJ5QmxhbmtzKS5yZXBsYWNlKG5vd2lraVJlZ2V4LCByZXBsYWNlQnlCbGFua3MpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdGxldCBjdXJyX21hdGNoID0gbnVsbDtcblx0XHR3aGlsZSAoKGN1cnJfbWF0Y2ggPSBjYXRfcmVnZXguZXhlYyhjb3BpZWR0ZXh0KSkgIT09IG51bGwpIHtcblx0XHRcdHJlc3VsdC5wdXNoKHtcblx0XHRcdFx0bWF0Y2g6IGN1cnJfbWF0Y2gsXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cmVzdWx0LnJlID0gY2F0X3JlZ2V4O1xuXHRcdHJldHVybiByZXN1bHQ7IC8vIEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG1hdGNoZXMsIHdpdGggcG9zaXRpb25zLCBpbiByZXN1bHRbIGkgXS5tYXRjaFxuXHR9O1xuXHRsZXQgaW50ZXJsYW5ndWFnZVJFID0gbnVsbDtcblx0Y29uc3QgY2hhbmdlX2NhdGVnb3J5ID0gKHdpa2l0ZXh0LCB0b1JlbW92ZSwgdG9BZGQsIGtleSwgaXNfaGlkZGVuKSA9PiB7XG5cdFx0Y29uc3QgZmluZF9pbnNlcnRpb25wb2ludCA9IChfd2lraXRleHQpID0+IHtcblx0XHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgJyhcXFxcc3xcXFxcUykqPzwvbm8nLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0XHRjb25zdCBjb3BpZWR0ZXh0ID0gX3dpa2l0ZXh0XG5cdFx0XHRcdC5yZXBsYWNlKC88IS0tKFxcc3xcXFMpKj8tLT4vZywgcmVwbGFjZUJ5QmxhbmtzKVxuXHRcdFx0XHQucmVwbGFjZShub3dpa2lSZWdleCwgcmVwbGFjZUJ5QmxhbmtzKTtcblx0XHRcdC8vIFNlYXJjaCBpbiBjb3BpZWR0ZXh0IHRvIGF2b2lkIHRoYXQgd2UgaW5zZXJ0IGluc2lkZSBhbiBIVE1MIGNvbW1lbnQgb3IgYSBub3dpa2kgXCJlbGVtZW50XCIuXG5cdFx0XHRsZXQgaW5kZXggPSAtMTtcblx0XHRcdGZpbmRDYXRzUkUubGFzdEluZGV4ID0gMDtcblx0XHRcdHdoaWxlIChmaW5kQ2F0c1JFLmV4ZWMoY29waWVkdGV4dCkgIT09IG51bGwpIHtcblx0XHRcdFx0aW5kZXggPSBmaW5kQ2F0c1JFLmxhc3RJbmRleDtcblx0XHRcdH1cblx0XHRcdGlmIChpbmRleCA8IDApIHtcblx0XHRcdFx0Ly8gRmluZCB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGludGVybGFuZ3VhZ2UgbGluay4uLlxuXHRcdFx0XHRsZXQgbWF0Y2ggPSBudWxsO1xuXHRcdFx0XHRpbnRlcmxhbmd1YWdlUkVcblx0XHRcdFx0XHQ/IChtYXRjaCA9IGludGVybGFuZ3VhZ2VSRS5leGVjKGNvcGllZHRleHQpKVxuXHRcdFx0XHRcdDogLy8gQXBwcm94aW1hdGlvbiB3aXRob3V0IEFQSTogaW50ZXJsYW5ndWFnZSBsaW5rcyBzdGFydCB3aXRoIDIgdG8gMyBsb3dlciBjYXNlIGxldHRlcnMsIG9wdGlvbmFsbHkgZm9sbG93ZWQgYnlcblx0XHRcdFx0XHRcdC8vIGEgc2VxdWVuY2Ugb2YgZ3JvdXBzIGNvbnNpc3Rpbmcgb2YgYSBkYXNoIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGxvd2VyIGNhc2UgbGV0dGVycy4gRXhjZXB0aW9ucyBhcmUgXCJzaW1wbGVcIlxuXHRcdFx0XHRcdFx0Ly8gYW5kIFwidG9raXBvbmFcIi5cblx0XHRcdFx0XHRcdChtYXRjaCA9IC8oKF58XFxuXFxyPykoXFxbXFxbXFxzKigoW2Etel17MiwzfSgtW2Etel0rKSopfHNpbXBsZXx0b2tpcG9uYSlcXHMqOlteXFxdXStdXVxccyopKSskLy5leGVjKFxuXHRcdFx0XHRcdFx0XHRjb3BpZWR0ZXh0XG5cdFx0XHRcdFx0XHQpKTtcblx0XHRcdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRcdFx0KHtpbmRleH0gPSBtYXRjaCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRpZHg6IGluZGV4LFxuXHRcdFx0XHRcdG9uQ2F0OiBmYWxzZSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGlkeDogaW5kZXgsXG5cdFx0XHRcdG9uQ2F0OiBpbmRleCA+PSAwLFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdGNvbnN0IHN1bW1hcnkgPSBbXTtcblx0XHRjb25zdCBuYW1lU3BhY2UgPSBIQy5jYXRlZ29yeV9jYW5vbmljYWw7XG5cdFx0Y29uc3QgLy8gUG9zaXRpb24gb2YgcmVtb3ZlZCBjYXRlZ29yeTtcblx0XHRcdGtleUNoYW5nZSA9IHRvUmVtb3ZlICYmIHRvQWRkICYmIHRvUmVtb3ZlID09PSB0b0FkZCAmJiB0b0FkZC5sZW5ndGggPiAwO1xuXHRcdGxldCBtYXRjaGVzO1xuXHRcdGxldCBjYXRfcG9pbnQgPSAtMTtcblx0XHRpZiAoa2V5KSB7XG5cdFx0XHRrZXkgPSBgfCR7a2V5fWA7XG5cdFx0fVxuXHRcdC8vIFJlbW92ZVxuXHRcdGlmICh0b1JlbW92ZSAmJiB0b1JlbW92ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRtYXRjaGVzID0gZmluZF9jYXRlZ29yeSh3aWtpdGV4dCwgdG9SZW1vdmUpO1xuXHRcdFx0aWYgKCFtYXRjaGVzIHx8IG1hdGNoZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRlcnJvcjogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X25vdEZvdW5kJywgdG9SZW1vdmUpLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0bGV0IGJlZm9yZSA9IHdpa2l0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIG1hdGNoZXNbMF0ubWF0Y2guaW5kZXgpKTtcblx0XHRcdGxldCBhZnRlciA9IHdpa2l0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIG1hdGNoZXNbMF0ubWF0Y2guaW5kZXggKyBtYXRjaGVzWzBdLm1hdGNoWzBdLmxlbmd0aCkpO1xuXHRcdFx0aWYgKG1hdGNoZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHQvLyBSZW1vdmUgYWxsIG9jY3VycmVuY2VzIGluIGFmdGVyXG5cdFx0XHRcdG1hdGNoZXMucmUubGFzdEluZGV4ID0gMDtcblx0XHRcdFx0YWZ0ZXIgPSBhZnRlci5yZXBsYWNlKG1hdGNoZXMucmUsICcnKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0dG9BZGQgJiYgLy8gbmFtZVNwYWNlID0gbWF0Y2hlc1sgMCBdLm1hdGNoWyAxIF0gfHwgbmFtZVNwYWNlOyBDYW5vbmljYWwgbmFtZXNwYWNlIHNob3VsZCBiZSBhbHdheXMgcHJlZmVycmVkXG5cdFx0XHRcdGtleSA9PT0gbnVsbFxuXHRcdFx0KSB7XG5cdFx0XHRcdFssICwga2V5XSA9IG1hdGNoZXNbMF0ubWF0Y2g7XG5cdFx0XHR9XG5cdFx0XHQvLyBSZW1lbWJlciB0aGUgY2F0ZWdvcnkga2V5LCBpZiBhbnkuXG5cdFx0XHQvLyBSZW1vdmUgd2hpdGVzcGFjZSAocHJvcGVybHkpOiBzdHJpcCB3aGl0ZXNwYWNlLCBidXQgb25seSB1cCB0byB0aGUgbmV4dCBsaW5lIGZlZWQuXG5cdFx0XHQvLyBJZiB3ZSB0aGVuIGhhdmUgdHdvIGxpbmVmZWVkcyBpbiBhIHJvdywgcmVtb3ZlIG9uZS4gT3RoZXJ3aXNlLCBpZiB3ZSBoYXZlIHR3byBub24tXG5cdFx0XHQvLyB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMsIGluc2VydCBhIGJsYW5rLlxuXHRcdFx0bGV0IGkgPSBiZWZvcmUubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID49IDAgJiYgYmVmb3JlLmNoYXJBdChpKSAhPT0gJ1xcbicgJiYgYmVmb3JlLnNsaWNlKGksIGkgKyAxKS5zZWFyY2goL1xccy8pID49IDApIHtcblx0XHRcdFx0aS0tO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGogPSAwO1xuXHRcdFx0d2hpbGUgKGogPCBhZnRlci5sZW5ndGggJiYgYWZ0ZXIuY2hhckF0KGopICE9PSAnXFxuJyAmJiBhZnRlci5zbGljZShqLCBqICsgMSkuc2VhcmNoKC9cXHMvKSA+PSAwKSB7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0aSA+PSAwICYmXG5cdFx0XHRcdGJlZm9yZS5jaGFyQXQoaSkgPT09ICdcXG4nICYmXG5cdFx0XHRcdChhZnRlci5sZW5ndGggPT09IDAgfHwgKGogPCBhZnRlci5sZW5ndGggJiYgYWZ0ZXIuY2hhckF0KGopID09PSAnXFxuJykpXG5cdFx0XHQpIHtcblx0XHRcdFx0aS0tO1xuXHRcdFx0fVxuXHRcdFx0YmVmb3JlID0gaSA+PSAwID8gYmVmb3JlLnNsaWNlKDAsIE1hdGgubWF4KDAsIGkgKyAxKSkgOiAnJztcblx0XHRcdGFmdGVyID0gaiA8IGFmdGVyLmxlbmd0aCA/IGFmdGVyLnNsaWNlKE1hdGgubWF4KDAsIGopKSA6ICcnO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRiZWZvcmUubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRiZWZvcmUuc2xpY2UoTWF0aC5tYXgoMCwgYmVmb3JlLmxlbmd0aCAtIDEpKS5zZWFyY2goL1xcUy8pID49IDAgJiZcblx0XHRcdFx0YWZ0ZXIubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRhZnRlci5zbGljZSgwLCAxKS5zZWFyY2goL1xcUy8pID49IDBcblx0XHRcdCkge1xuXHRcdFx0XHRiZWZvcmUgKz0gJyAnO1xuXHRcdFx0fVxuXHRcdFx0Y2F0X3BvaW50ID0gYmVmb3JlLmxlbmd0aDtcblx0XHRcdGlmIChjYXRfcG9pbnQgPT09IDAgJiYgYWZ0ZXIubGVuZ3RoID4gMCAmJiBhZnRlci5zbGljZSgwLCAxKSA9PT0gJ1xcbicpIHtcblx0XHRcdFx0YWZ0ZXIgPSBhZnRlci5zbGljZSgxKTtcblx0XHRcdH1cblx0XHRcdHdpa2l0ZXh0ID0gYmVmb3JlICsgYWZ0ZXI7XG5cdFx0XHRpZiAoIWtleUNoYW5nZSkge1xuXHRcdFx0XHRpZiAoSEMudGVtcGxhdGVfY2F0ZWdvcmllc1t0b1JlbW92ZV0pIHtcblx0XHRcdFx0XHRzdW1tYXJ5LnB1c2goZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdGVtcGxhdGVfcmVtb3ZlZCcsIHRvUmVtb3ZlKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3VtbWFyeS5wdXNoKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9yZW1vdmVkJywgdG9SZW1vdmUpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBBZGRcblx0XHRpZiAodG9BZGQgJiYgdG9BZGQubGVuZ3RoID4gMCkge1xuXHRcdFx0bWF0Y2hlcyA9IGZpbmRfY2F0ZWdvcnkod2lraXRleHQsIHRvQWRkKTtcblx0XHRcdGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHQvLyBBbHJlYWR5IGV4aXN0c1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0ZXJyb3I6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9leGlzdHMnLCB0b0FkZCksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRsZXQgb25DYXQgPSBmYWxzZTtcblx0XHRcdGlmIChjYXRfcG9pbnQgPCAwKSB7XG5cdFx0XHRcdGNvbnN0IHBvaW50ID0gZmluZF9pbnNlcnRpb25wb2ludCh3aWtpdGV4dCk7XG5cdFx0XHRcdGNhdF9wb2ludCA9IHBvaW50LmlkeDtcblx0XHRcdFx0KHtvbkNhdH0gPSBwb2ludCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbkNhdCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBuZXdjYXRzdHJpbmcgPSBgW1ske25hbWVTcGFjZX06JHt0b0FkZH0ke2tleSB8fCAnJ31dXWA7XG5cdFx0XHRpZiAoY2F0X3BvaW50ID49IDApIHtcblx0XHRcdFx0Y29uc3Qgc3VmZml4ID0gd2lraXRleHQuc2xpY2UoTWF0aC5tYXgoMCwgY2F0X3BvaW50KSk7XG5cdFx0XHRcdHdpa2l0ZXh0ID1cblx0XHRcdFx0XHR3aWtpdGV4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBjYXRfcG9pbnQpKSArXG5cdFx0XHRcdFx0KGNhdF9wb2ludCA+IDAgPyAnXFxuJyA6ICcnKSArXG5cdFx0XHRcdFx0bmV3Y2F0c3RyaW5nICtcblx0XHRcdFx0XHQob25DYXQgPyAnJyA6ICdcXG4nKTtcblx0XHRcdFx0d2lraXRleHQgKz0gc3VmZml4Lmxlbmd0aCA+IDAgJiYgc3VmZml4LnNsaWNlKDAsIDEpICE9PSAnXFxuJyA/IGBcXG4ke3N1ZmZpeH1gIDogc3VmZml4O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHdpa2l0ZXh0Lmxlbmd0aCA+IDAgJiYgd2lraXRleHQuc2xpY2UoLTEsIHdpa2l0ZXh0Lmxlbmd0aCAtIDEgKyAxKSAhPT0gJ1xcbicpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCArPSAnXFxuJztcblx0XHRcdFx0fVxuXHRcdFx0XHR3aWtpdGV4dCArPSAod2lraXRleHQubGVuZ3RoID4gMCA/ICdcXG4nIDogJycpICsgbmV3Y2F0c3RyaW5nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGtleUNoYW5nZSkge1xuXHRcdFx0XHRsZXQgayA9IGtleSB8fCAnJztcblx0XHRcdFx0aWYgKGsubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGsgPSBrLnNsaWNlKDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1bW1hcnkucHVzaChnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfa2V5Y2hhbmdlJywgdG9BZGQsIGspKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN1bW1hcnkucHVzaChnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfYWRkZWQnLCB0b0FkZCkpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKEhDLnVuY2F0X3JlZ2V4cCAmJiAhaXNfaGlkZGVuKSB7XG5cdFx0XHRcdGNvbnN0IHR4dCA9IHdpa2l0ZXh0LnJlcGxhY2UoSEMudW5jYXRfcmVnZXhwLCAnJyk7IC8vIFJlbW92ZSBcInVuY2F0XCIgdGVtcGxhdGVzXG5cdFx0XHRcdGlmICh0eHQubGVuZ3RoICE9PSB3aWtpdGV4dC5sZW5ndGgpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCA9IHR4dDtcblx0XHRcdFx0XHRzdW1tYXJ5LnB1c2goZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdW5jYXRfcmVtb3ZlZCcpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRzdW1tYXJ5LFxuXHRcdFx0ZXJyb3I6IG51bGwsXG5cdFx0fTtcblx0fTtcblx0Ly8gVGhlIHJlYWwgSG90Q2F0IFVJXG5cdGNvbnN0IGV2dEtleXMgPSAoe2N0cmxLZXksIG1ldGFLZXksIHNoaWZ0S2V5fSkgPT4ge1xuXHRcdGxldCBjb2RlID0gMDtcblx0XHRpZiAoY3RybEtleSkge1xuXHRcdFx0Ly8gQWxsIG1vZGVybiBicm93c2Vyc1xuXHRcdFx0Ly8gQ3RybC1jbGljayBzZWVtcyB0byBiZSBvdmVybG9hZGVkIGluIEZGL01hYyAoaXQgb3BlbnMgYSBwb3AtdXAgbWVudSksIHNvIHRyZWF0IGNtZC1jbGlja1xuXHRcdFx0Ly8gYXMgYSBjdHJsLWNsaWNrLCB0b28uXG5cdFx0XHRpZiAoY3RybEtleSB8fCBtZXRhS2V5KSB7XG5cdFx0XHRcdGNvZGUgfHw9IDE7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2hpZnRLZXkpIHtcblx0XHRcdFx0Y29kZSB8fD0gMjtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNvZGU7XG5cdH07XG5cdGNvbnN0IGV2dEtpbGwgPSAoZSkgPT4ge1xuXHRcdGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlLmNhbmNlbEJ1YmJsZSA9IHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblx0bGV0IGNhdExpbmUgPSBudWxsOyAvLyB0cnVlIGlmIE1lZGlhV2lraSBzZXJ2ZXMgdGhlIG5ldyBVTC1MSSBET00gZm9yIGNhdGVnb3JpZXNcblx0bGV0IG9uVXBsb2FkID0gZmFsc2U7XG5cdGxldCBlZGl0b3JzID0gW107XG5cdGxldCBjb21taXRCdXR0b24gPSBudWxsO1xuXHRsZXQgY29tbWl0Rm9ybSA9IG51bGw7XG5cdGxldCBtdWx0aVNwYW4gPSBudWxsO1xuXHRsZXQgcGFnZVRleHQgPSBudWxsO1xuXHRsZXQgcGFnZVRpbWUgPSBudWxsO1xuXHRsZXQgcGFnZVdhdGNoZWQgPSBmYWxzZTtcblx0bGV0IHdhdGNoQ3JlYXRlID0gZmFsc2U7XG5cdGxldCB3YXRjaEVkaXQgPSBmYWxzZTtcblx0bGV0IG1pbm9yRWRpdHMgPSBmYWxzZTtcblx0bGV0IGVkaXRUb2tlbiA9IG51bGw7XG5cdGxldCBpc19ydGwgPSBmYWxzZTtcblx0bGV0IHNlcnZlclRpbWUgPSBudWxsO1xuXHRsZXQgbGFzdFJldklkID0gbnVsbDtcblx0bGV0IHBhZ2VUZXh0UmV2SWQgPSBudWxsO1xuXHRsZXQgY29uZmxpY3RpbmdVc2VyID0gbnVsbDtcblx0bGV0IG5ld0RPTSA9IGZhbHNlO1xuXHRjb25zdCBVTkNIQU5HRUQgPSAwO1xuXHRjb25zdCBPUEVOID0gMTsgLy8gT3BlbiwgYnV0IG5vIGlucHV0IHlldFxuXHRjb25zdCBDSEFOR0VfUEVORElORyA9IDI7IC8vIE9wZW4sIHNvbWUgaW5wdXQgbWFkZVxuXHRjb25zdCBDSEFOR0VEID0gMztcblx0Y29uc3QgREVMRVRFRCA9IDQ7XG5cdGNvbnN0IHNldFBhZ2UgPSAoZGF0YSkgPT4ge1xuXHRcdGxldCBzdGFydFRpbWUgPSBudWxsO1xuXHRcdGlmIChkYXRhICYmIGRhdGEucXVlcnkpIHtcblx0XHRcdGlmIChkYXRhLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IGRhdGEucXVlcnkucGFnZXM7XG5cdFx0XHRcdGlmIChwYWdlKSB7XG5cdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zICYmIHBhZ2UucmV2aXNpb25zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdC8vIFJldmlzaW9ucyBhcmUgc29ydGVkIGJ5IHJldmlzaW9uIElELCBoZW5jZSBbMF0gaXMgdGhlIG9uZSB3ZSBhc2tlZCBmb3IsIGFuZCBwb3NzaWJseSB0aGVyZSdzIGEgWzFdIGlmIHdlJ3JlXG5cdFx0XHRcdFx0XHQvLyBub3Qgb24gdGhlIGxhdGVzdCByZXZpc2lvbiAoZWRpdCBjb25mbGljdHMgYW5kIHN1Y2gpLlxuXHRcdFx0XHRcdFx0cGFnZVRleHQgPSBwYWdlLnJldmlzaW9uc1swXS5zbG90c1snbWFpbiddLmNvbnRlbnQ7XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wKSB7XG5cdFx0XHRcdFx0XHRcdHBhZ2VUaW1lID0gcGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5yZXZpc2lvbnNbMF0ucmV2aWQpIHtcblx0XHRcdFx0XHRcdFx0cGFnZVRleHRSZXZJZCA9IHBhZ2UucmV2aXNpb25zWzBdLnJldmlkO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0Y29uZmxpY3RpbmdVc2VyID0gcGFnZS5yZXZpc2lvbnNbMV0udXNlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2UubGFzdHJldmlkKSB7XG5cdFx0XHRcdFx0XHRsYXN0UmV2SWQgPSBwYWdlLmxhc3RyZXZpZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2Uuc3RhcnR0aW1lc3RhbXApIHtcblx0XHRcdFx0XHRcdHN0YXJ0VGltZSA9IHBhZ2Uuc3RhcnR0aW1lc3RhbXAucmVwbGFjZSgvXFxEL2csICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cGFnZVdhdGNoZWQgPSB0eXBlb2YgcGFnZS53YXRjaGVkID09PSAnc3RyaW5nJztcblx0XHRcdFx0XHRpZiAoZGF0YS5xdWVyeS50b2tlbnMpIHtcblx0XHRcdFx0XHRcdGVkaXRUb2tlbiA9IGRhdGEucXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2UubGFuZ2xpbmtzICYmICghZGF0YVsncXVlcnktY29udGludWUnXSB8fCAhZGF0YVsncXVlcnktY29udGludWUnXS5sYW5nbGlua3MpKSB7XG5cdFx0XHRcdFx0XHQvLyBXZSBoYXZlIGludGVybGFuZ3VhZ2UgbGlua3MsIGFuZCB3ZSBnb3QgdGhlbSBhbGwuXG5cdFx0XHRcdFx0XHRsZXQgcmUgPSAnJztcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZS5sYW5nbGlua3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0cmUgKz0gKGkgPiAwID8gJ3wnIDogJycpICsgcGFnZS5sYW5nbGlua3NbaV0ubGFuZy5yZXBsYWNlKC8oWyQoKSorLj9cXFxcXl0pL2csICdcXFxcJDEnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChyZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdGludGVybGFuZ3VhZ2VSRSA9IG5ldyBSZWdFeHAoYCgoXnxcXFxcblxcXFxyPykoXFxcXFtcXFxcW1xcXFxzKigke3JlfSlcXFxccyo6W15cXFxcXV0rXFxcXF1cXFxcXVxcXFxzKikpKyRgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIFNpdGVpbmZvXG5cdFx0XHRpZiAoZGF0YS5xdWVyeS5nZW5lcmFsKSB7XG5cdFx0XHRcdGlmIChkYXRhLnF1ZXJ5LmdlbmVyYWwudGltZSAmJiAhc3RhcnRUaW1lKSB7XG5cdFx0XHRcdFx0c3RhcnRUaW1lID0gZGF0YS5xdWVyeS5nZW5lcmFsLnRpbWUucmVwbGFjZSgvXFxEL2csICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIFJlc291cmNlTG9hZGVyJ3MgSlNQYXJzZXIgZG9lc24ndCBsaWtlIC5jYXNlLCBzbyBvdmVycmlkZSBlc2xpbnQuXG5cdFx0XHRcdFx0SEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA9IGRhdGEucXVlcnkuZ2VuZXJhbC5jYXNlID09PSAnZmlyc3QtbGV0dGVyJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2VydmVyVGltZSA9IHN0YXJ0VGltZTtcblx0XHRcdC8vIFVzZXJpbmZvXG5cdFx0XHRpZiAoZGF0YS5xdWVyeS51c2VyaW5mbyAmJiBkYXRhLnF1ZXJ5LnVzZXJpbmZvLm9wdGlvbnMpIHtcblx0XHRcdFx0d2F0Y2hDcmVhdGUgPSAhSEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0ICYmIGRhdGEucXVlcnkudXNlcmluZm8ub3B0aW9ucy53YXRjaGNyZWF0aW9ucyA9PT0gJzEnO1xuXHRcdFx0XHR3YXRjaEVkaXQgPSAhSEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0ICYmIGRhdGEucXVlcnkudXNlcmluZm8ub3B0aW9ucy53YXRjaGRlZmF1bHQgPT09ICcxJztcblx0XHRcdFx0bWlub3JFZGl0cyA9IGRhdGEucXVlcnkudXNlcmluZm8ub3B0aW9ucy5taW5vcmRlZmF1bHQgPT09IDE7XG5cdFx0XHRcdC8vIElmIHRoZSB1c2VyIGhhcyB0aGUgXCJBbGwgZWRpdHMgYXJlIG1pbm9yXCIgcHJlZmVyZW5jZSBlbmFibGVkLCB3ZSBzaG91bGQgaG9ub3IgdGhhdFxuXHRcdFx0XHQvLyBmb3Igc2luZ2xlIGNhdGVnb3J5IGNoYW5nZXMsIG5vIG1hdHRlciB3aGF0IHRoZSBzaXRlIGNvbmZpZ3VyYXRpb24gaXMuXG5cdFx0XHRcdGlmIChtaW5vckVkaXRzKSB7XG5cdFx0XHRcdFx0SEMuc2luZ2xlX21pbm9yID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0bGV0IHNhdmVJblByb2dyZXNzID0gZmFsc2U7XG5cdGNvbnN0IGluaXRpYXRlRWRpdCA9IChkb0VkaXQsIGZhaWx1cmUpID0+IHtcblx0XHRpZiAoc2F2ZUluUHJvZ3Jlc3MpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c2F2ZUluUHJvZ3Jlc3MgPSB0cnVlO1xuXHRcdGxldCBvbGRCdXR0b25TdGF0ZTtcblx0XHRpZiAoY29tbWl0QnV0dG9uKSB7XG5cdFx0XHRvbGRCdXR0b25TdGF0ZSA9IGNvbW1pdEJ1dHRvbi5kaXNhYmxlZDtcblx0XHRcdGNvbW1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cdFx0fVxuXHRcdGNvbnN0IGZhaWwgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdFx0c2F2ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblx0XHRcdGlmIChjb21taXRCdXR0b24pIHtcblx0XHRcdFx0Y29tbWl0QnV0dG9uLmRpc2FibGVkID0gb2xkQnV0dG9uU3RhdGU7XG5cdFx0XHR9XG5cdFx0XHRmYWlsdXJlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXHRcdH07XG5cdFx0Ly8gTXVzdCB1c2UgQWpheCBoZXJlIHRvIGdldCB0aGUgdXNlciBvcHRpb25zIGFuZCB0aGUgZWRpdCB0b2tlbi5cblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdHJhd2NvbnRpbnVlOiAnJyxcblx0XHRcdHRpdGxlczogY29uZi53Z1BhZ2VOYW1lLFxuXHRcdFx0cHJvcDogWydpbmZvJywgJ3JldmlzaW9ucycsICdsYW5nbGlua3MnXSxcblx0XHRcdGlucHJvcDogJ3dhdGNoZWQnLFxuXHRcdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJywgJ2lkcycsICd1c2VyJ10sXG5cdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRydmxpbWl0OiAnMicsXG5cdFx0XHRydmRpcjogJ25ld2VyJyxcblx0XHRcdHJ2c3RhcnRpZDogY29uZi53Z0N1clJldmlzaW9uSWQsXG5cdFx0XHRsbGxpbWl0OiAnNTAwJyxcblx0XHRcdG1ldGE6IFsnc2l0ZWluZm8nLCAndXNlcmluZm8nLCAndG9rZW5zJ10sXG5cdFx0XHR0eXBlOiAnY3NyZicsXG5cdFx0XHR1aXByb3A6IFsnb3B0aW9ucyddLFxuXHRcdH07XG5cdFx0YXBpLmdldChwYXJhbXMpXG5cdFx0XHQuZG9uZSgoZGF0YSkgPT4ge1xuXHRcdFx0XHRzZXRQYWdlKGRhdGEpO1xuXHRcdFx0XHRkb0VkaXQoZmFpbCk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKHtzdGF0dXMsIHN0YXR1c1RleHR9KSA9PiB7XG5cdFx0XHRcdGZhaWwoYCR7c3RhdHVzfSAke3N0YXR1c1RleHR9YCk7XG5cdFx0XHR9KTtcblx0fTtcblx0Y29uc3QgbXVsdGlDaGFuZ2VNc2cgPSAoY291bnQpID0+IHtcblx0XHRyZXR1cm4gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtbXVsdGlfY2hhbmdlJywgU3RyaW5nKGNvdW50KSk7XG5cdH07XG5cdGNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblx0XHRsZXQgdHMgPSBTdHJpbmcobm93LmdldFVUQ0Z1bGxZZWFyKCkpO1xuXHRcdGNvbnN0IHR3byA9IChzKSA9PiB7XG5cdFx0XHRyZXR1cm4gcy5zbGljZSgtMik7XG5cdFx0fTtcblx0XHR0cyArPVxuXHRcdFx0dHdvKGAwJHtub3cuZ2V0VVRDTW9udGgoKSArIDF9YCkgK1xuXHRcdFx0dHdvKGAwJHtub3cuZ2V0VVRDRGF0ZSgpfWApICtcblx0XHRcdHR3byhgMDAke25vdy5nZXRVVENIb3VycygpfWApICtcblx0XHRcdHR3byhgMDAke25vdy5nZXRVVENNaW51dGVzKCl9YCkgK1xuXHRcdFx0dHdvKGAwMCR7bm93LmdldFVUQ1NlY29uZHMoKX1gKTtcblx0XHRyZXR1cm4gdHM7XG5cdH07XG5cdGNvbnN0IHBlcmZvcm1DaGFuZ2VzID0gKGZhaWx1cmUsIHNpbmdsZUVkaXRvcikgPT4ge1xuXHRcdGlmIChwYWdlVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0ZmFpbHVyZShnZXRNZXNzYWdlKCdtZXNzYWdlcy1tdWx0aV9lcnJvcicpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gQ3JlYXRlIGEgZm9ybSBhbmQgc3VibWl0IGl0LiBXZSBkb24ndCB1c2UgdGhlIGVkaXQgQVBJIChhcGkucGhwP2FjdGlvbj1lZGl0KSBiZWNhdXNlXG5cdFx0Ly8gKGEpIHNlbnNpYmx5IHJlcG9ydGluZyBiYWNrIGVycm9ycyBsaWtlIGVkaXQgY29uZmxpY3RzIGlzIGFsd2F5cyBhIGhhc3NsZSwgYW5kXG5cdFx0Ly8gKGIpIHdlIHdhbnQgdG8gc2hvdyBhIGRpZmYgZm9yIG11bHRpLWVkaXRzIGFueXdheSwgYW5kXG5cdFx0Ly8gKGMpIHdlIHdhbnQgdG8gdHJpZ2dlciBvbnN1Ym1pdCBldmVudHMsIGFsbG93aW5nIHVzZXIgY29kZSB0byBpbnRlcmNlcHQgdGhlIGVkaXQuXG5cdFx0Ly8gVXNpbmcgdGhlIGZvcm0sIHdlIGNhbiBkbyAoYikgYW5kIChjKSwgYW5kIHdlIGdldCAoYSkgZm9yIGZyZWUuIEFuZCwgb2YgY291cnNlLCB1c2luZyB0aGUgZm9ybVxuXHRcdC8vIGF1dG9tYXRpY2FsbHkgcmVsb2FkcyB0aGUgcGFnZSB3aXRoIHRoZSB1cGRhdGVkIGNhdGVnb3JpZXMgb24gYSBzdWNjZXNzZnVsIHN1Ym1pdCwgd2hpY2hcblx0XHQvLyB3ZSB3b3VsZCBoYXZlIHRvIGRvIGV4cGxpY2l0bHkgaWYgd2UgdXNlZCB0aGUgZWRpdCBBUEkuXG5cdFx0bGV0IGFjdGlvbjtcblx0XHQvLyBOb3JtYWxseSwgd2UgZG9uJ3QgaGF2ZSB0byBjYXJlIGFib3V0IGVkaXQgY29uZmxpY3RzLiBJZiBzb21lIG90aGVyIHVzZXIgZWRpdGVkIHRoZSBwYWdlIGluIHRoZSBtZWFudGltZSwgdGhlXG5cdFx0Ly8gc2VydmVyIHdpbGwgdGFrZSBjYXJlIG9mIGl0IGFuZCBtZXJnZSB0aGUgZWRpdCBhdXRvbWF0aWNhbGx5IG9yIHByZXNlbnQgYW4gZWRpdCBjb25mbGljdCBzY3JlZW4uIEhvd2V2ZXIsIHRoZVxuXHRcdC8vIHNlcnZlciBzdXBwcmVzc2VzIGVkaXQgY29uZmxpY3RzIHdpdGggb25lc2VsZi4gSGVuY2UsIGlmIHdlIGhhdmUgYSBjb25mbGljdCwgYW5kIHRoZSBjb25mbGljdGluZyB1c2VyIGlzIHRoZVxuXHRcdC8vIGN1cnJlbnQgdXNlciwgdGhlbiB3ZSBzZXQgdGhlIFwib2xkaWRcIiB2YWx1ZSBhbmQgc3dpdGNoIHRvIGRpZmYsIHdoaWNoIGdpdmVzIHRoZSBcInlvdSBhcmUgZWRpdGluZyBhbiBvbGQgdmVyc2lvbjtcblx0XHQvLyBpZiB5b3Ugc2F2ZSwgYW55IG1vcmUgcmVjZW50IGNoYW5nZXMgd2lsbCBiZSBsb3N0XCIgc2NyZWVuLlxuXHRcdGNvbnN0IHNlbGZFZGl0Q29uZmxpY3QgPVxuXHRcdFx0KChsYXN0UmV2SWQgIT09IG51bGwgJiYgbGFzdFJldklkICE9PSBjb25mLndnQ3VyUmV2aXNpb25JZCkgfHxcblx0XHRcdFx0KHBhZ2VUZXh0UmV2SWQgIT09IG51bGwgJiYgcGFnZVRleHRSZXZJZCAhPT0gY29uZi53Z0N1clJldmlzaW9uSWQpKSAmJlxuXHRcdFx0Y29uZmxpY3RpbmdVc2VyICYmXG5cdFx0XHRjb25mbGljdGluZ1VzZXIgPT09IGNvbmYud2dVc2VyTmFtZTtcblx0XHRpZiAoc2luZ2xlRWRpdG9yICYmICFzaW5nbGVFZGl0b3Iubm9Db21taXQgJiYgIUhDLm5vX2F1dG9jb21taXQgJiYgZWRpdFRva2VuICYmICFzZWxmRWRpdENvbmZsaWN0KSB7XG5cdFx0XHQvLyBJZiB3ZSBkbyBoYXZlIGFuIGVkaXQgY29uZmxpY3QsIGJ1dCBub3Qgd2l0aCBvdXJzZWxmLCB0aGF0J3Mgbm8gcmVhc29uIG5vdCB0byBhdHRlbXB0IHRvIHNhdmU6IHRoZSBzZXJ2ZXIgc2lkZSBtYXkgYWN0dWFsbHkgYmUgYWJsZSB0b1xuXHRcdFx0Ly8gbWVyZ2UgdGhlIGNoYW5nZXMuIFdlIGp1c3QgbmVlZCB0byBtYWtlIHN1cmUgdGhhdCB3ZSBkbyBwcmVzZW50IGEgZGlmZiB2aWV3IGlmIGl0J3MgYSBzZWxmIGVkaXQgY29uZmxpY3QuXG5cdFx0XHRjb21taXRGb3JtLndwRWRpdFRva2VuLnZhbHVlID0gZWRpdFRva2VuO1xuXHRcdFx0YWN0aW9uID0gY29tbWl0Rm9ybS53cERpZmY7XG5cdFx0XHRpZiAoYWN0aW9uKSB7XG5cdFx0XHRcdGFjdGlvbi52YWx1ZSA9ICd3cFNhdmUnO1xuXHRcdFx0XHRhY3Rpb24ubmFtZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0YWN0aW9uID0gY29tbWl0Rm9ybS53cFNhdmU7XG5cdFx0XHRpZiAoYWN0aW9uKSB7XG5cdFx0XHRcdGFjdGlvbi52YWx1ZSA9ICd3cERpZmYnO1xuXHRcdFx0XHRhY3Rpb24ubmFtZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0bGV0IHJlc3VsdCA9IHtcblx0XHRcdHRleHQ6IHBhZ2VUZXh0LFxuXHRcdH07XG5cdFx0Y29uc3QgY2hhbmdlZCA9IFtdO1xuXHRcdGNvbnN0IGFkZGVkID0gW107XG5cdFx0Y29uc3QgZGVsZXRlZCA9IFtdO1xuXHRcdGNvbnN0IHRvRWRpdCA9IHNpbmdsZUVkaXRvciA/IFtzaW5nbGVFZGl0b3JdIDogZWRpdG9ycztcblx0XHRsZXQgZWRpdDtcblx0XHRsZXQgaTtcblx0XHRsZXQgZXJyb3IgPSBudWxsO1xuXHRcdGxldCBjaGFuZ2VzID0gMDtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9FZGl0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRlZGl0ID0gdG9FZGl0W2ldO1xuXHRcdFx0aWYgKGVkaXQuc3RhdGUgPT09IENIQU5HRUQpIHtcblx0XHRcdFx0cmVzdWx0ID0gY2hhbmdlX2NhdGVnb3J5KFxuXHRcdFx0XHRcdHJlc3VsdC50ZXh0LFxuXHRcdFx0XHRcdGVkaXQub3JpZ2luYWxDYXRlZ29yeSxcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRDYXRlZ29yeSxcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRLZXksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50SGlkZGVuXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmICghcmVzdWx0LmVycm9yKSB7XG5cdFx0XHRcdFx0Y2hhbmdlcysrO1xuXHRcdFx0XHRcdGlmICghZWRpdC5vcmlnaW5hbENhdGVnb3J5IHx8IGVkaXQub3JpZ2luYWxDYXRlZ29yeS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRcdGFkZGVkLnB1c2goZWRpdC5jdXJyZW50Q2F0ZWdvcnkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjaGFuZ2VkLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRmcm9tOiBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksXG5cdFx0XHRcdFx0XHRcdHRvOiBlZGl0LmN1cnJlbnRDYXRlZ29yeSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChlcnJvciA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdCh7ZXJyb3J9ID0gcmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChlZGl0LnN0YXRlID09PSBERUxFVEVEICYmIGVkaXQub3JpZ2luYWxDYXRlZ29yeSAmJiBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRyZXN1bHQgPSBjaGFuZ2VfY2F0ZWdvcnkocmVzdWx0LnRleHQsIGVkaXQub3JpZ2luYWxDYXRlZ29yeSwgbnVsbCwgbnVsbCwgZmFsc2UpO1xuXHRcdFx0XHRpZiAoIXJlc3VsdC5lcnJvcikge1xuXHRcdFx0XHRcdGNoYW5nZXMrKztcblx0XHRcdFx0XHRkZWxldGVkLnB1c2goZWRpdC5vcmlnaW5hbENhdGVnb3J5KTtcblx0XHRcdFx0fSBlbHNlIGlmIChlcnJvciA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdCh7ZXJyb3J9ID0gcmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoZXJyb3IgIT09IG51bGwpIHtcblx0XHRcdC8vIERvIG5vdCBjb21taXQgaWYgdGhlcmUgd2VyZSBlcnJvcnNcblx0XHRcdGFjdGlvbiA9IGNvbW1pdEZvcm0ud3BTYXZlO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BEaWZmJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIEZpbGwgaW4gdGhlIGZvcm0gYW5kIHN1Ym1pdCBpdFxuXHRcdGNvbW1pdEZvcm0ud3BNaW5vcmVkaXQuY2hlY2tlZCA9IG1pbm9yRWRpdHM7XG5cdFx0Y29tbWl0Rm9ybS53cFdhdGNodGhpcy5jaGVja2VkID0gKCFjb25mLndnQXJ0aWNsZUlkICYmIHdhdGNoQ3JlYXRlKSB8fCB3YXRjaEVkaXQgfHwgcGFnZVdhdGNoZWQ7XG5cdFx0aWYgKGNvbmYud2dBcnRpY2xlSWQgfHwgISFzaW5nbGVFZGl0b3IpIHtcblx0XHRcdC8vIFByZXBhcmUgY2hhbmdlLXRhZyBzYXZlXG5cdFx0XHRpZiAoYWN0aW9uICYmIGFjdGlvbi52YWx1ZSA9PT0gJ3dwU2F2ZScpIHtcblx0XHRcdFx0aWYgKEhDLmNoYW5nZVRhZykge1xuXHRcdFx0XHRcdGNvbW1pdEZvcm0ud3BDaGFuZ2VUYWdzLnZhbHVlID0gSEMuY2hhbmdlVGFnO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb21taXRGb3JtLndwQXV0b1N1bW1hcnkudmFsdWUgPSBIQy5jaGFuZ2VUYWc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2hhbmdlcyA9PT0gMSkge1xuXHRcdFx0XHRpZiAocmVzdWx0LnN1bW1hcnkgJiYgcmVzdWx0LnN1bW1hcnkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNvbW1pdEZvcm0ud3BTdW1tYXJ5LnZhbHVlID1cblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpKSArXG5cdFx0XHRcdFx0XHRyZXN1bHQuc3VtbWFyeS5qb2luKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXNlcGFyYXRvcicpKSArXG5cdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy11c2luZycpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb21taXRGb3JtLndwTWlub3JlZGl0LmNoZWNrZWQgPSBIQy5zaW5nbGVfbWlub3IgfHwgbWlub3JFZGl0cztcblx0XHRcdH0gZWxzZSBpZiAoY2hhbmdlcykge1xuXHRcdFx0XHRsZXQgc3VtbWFyeSA9IFtdO1xuXHRcdFx0XHRjb25zdCBzaG9ydFN1bW1hcnkgPSBbXTtcblx0XHRcdFx0Ly8gRGVsZXRlZFxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgZGVsZXRlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHN1bW1hcnkucHVzaChg4oiSJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBkZWxldGVkW2ldKX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGVsZXRlZC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnkucHVzaChg4oiSJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBkZWxldGVkWzBdKX1gKTtcblx0XHRcdFx0fSBlbHNlIGlmIChkZWxldGVkLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnkucHVzaChg4oiSICR7bXVsdGlDaGFuZ2VNc2coZGVsZXRlZC5sZW5ndGgpfWApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEFkZGVkXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBhZGRlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHN1bW1hcnkucHVzaChgKyR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgYWRkZWRbaV0pfWApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChhZGRlZC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnkucHVzaChgKyR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgYWRkZWRbMF0pfWApO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGFkZGVkLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnkucHVzaChgKyAke211bHRpQ2hhbmdlTXNnKGFkZGVkLmxlbmd0aCl9YCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQ2hhbmdlZFxuXHRcdFx0XHRjb25zdCBhcnJvdyA9IGlzX3J0bCA/ICdcXHUyMTkwJyA6ICdcXHUyMTkyJzsgLy8gbGVmdCBhbmQgcmlnaHQgYXJyb3dzLiBEb24ndCB1c2Ug4oaQIGFuZCDihpIgaW4gdGhlIGNvZGUuXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjaGFuZ2VkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGNoYW5nZWRbaV0uZnJvbSA9PT0gY2hhbmdlZFtpXS50bykge1xuXHRcdFx0XHRcdFx0c3VtbWFyeS5wdXNoKGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlZFtpXS5mcm9tKX1gKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3VtbWFyeS5wdXNoKFxuXHRcdFx0XHRcdFx0XHRgwrEke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGNoYW5nZWRbaV0uZnJvbSl9JHthcnJvd30ke2dldE1lc3NhZ2UoXG5cdFx0XHRcdFx0XHRcdFx0J21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlZFtpXS50b1xuXHRcdFx0XHRcdFx0XHQpfWBcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjaGFuZ2VkLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdGlmIChjaGFuZ2VkWzBdLmZyb20gPT09IGNoYW5nZWRbMF0udG8pIHtcblx0XHRcdFx0XHRcdHNob3J0U3VtbWFyeS5wdXNoKGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlZFswXS5mcm9tKX1gKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2hvcnRTdW1tYXJ5LnB1c2goXG5cdFx0XHRcdFx0XHRcdGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlZFswXS5mcm9tKX0ke2Fycm93fSR7Z2V0TWVzc2FnZShcblx0XHRcdFx0XHRcdFx0XHQnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJyxcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VkWzBdLnRvXG5cdFx0XHRcdFx0XHRcdCl9YFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hhbmdlZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2hvcnRTdW1tYXJ5LnB1c2goYMKxICR7bXVsdGlDaGFuZ2VNc2coY2hhbmdlZC5sZW5ndGgpfWApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdW1tYXJ5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gc3VtbWFyeS5qb2luKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXNlcGFyYXRvcicpKTtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRzdW1tYXJ5Lmxlbmd0aCA+XG5cdFx0XHRcdFx0XHQyMDAgLVxuXHRcdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1wcmVmaXgnKSkubGVuZ3RoIC1cblx0XHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSkubGVuZ3RoXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5ID0gc2hvcnRTdW1tYXJ5LmpvaW4oZ2V0TWVzc2FnZSgnbWVzc2FnZXMtc2VwYXJhdG9yJykpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb21taXRGb3JtLndwU3VtbWFyeS52YWx1ZSA9XG5cdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1wcmVmaXgnKSkgK1xuXHRcdFx0XHRcdFx0c3VtbWFyeSArXG5cdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy11c2luZycpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjb21taXRGb3JtLndwVGV4dGJveDEudmFsdWUgPSByZXN1bHQudGV4dDtcblx0XHRjb21taXRGb3JtLndwU3RhcnR0aW1lLnZhbHVlID0gc2VydmVyVGltZSB8fCBjdXJyZW50VGltZXN0YW1wKCk7XG5cdFx0Y29tbWl0Rm9ybS53cEVkaXR0aW1lLnZhbHVlID0gcGFnZVRpbWUgfHwgY29tbWl0Rm9ybS53cFN0YXJ0dGltZS52YWx1ZTtcblx0XHRpZiAoc2VsZkVkaXRDb25mbGljdCkge1xuXHRcdFx0Y29tbWl0Rm9ybS5vbGRpZC52YWx1ZSA9IFN0cmluZyhwYWdlVGV4dFJldklkIHx8IGNvbmYud2dDdXJSZXZpc2lvbklkKTtcblx0XHR9XG5cdFx0Ly8gU3VibWl0IHRoZSBmb3JtIGluIGEgd2F5IHRoYXQgdHJpZ2dlcnMgb25zdWJtaXQgZXZlbnRzOiBjb21taXRGb3JtLnN1Ym1pdCgpIGRvZXNuJ3QuXG5cdFx0Y29tbWl0Rm9ybS5oY0NvbW1pdC5jbGljaygpO1xuXHR9O1xuXHRjb25zdCByZXNvbHZlT25lID0gKHBhZ2UsIHRvUmVzb2x2ZSkgPT4ge1xuXHRcdGNvbnN0IGNhdHMgPSBwYWdlLmNhdGVnb3JpZXM7XG5cdFx0Y29uc3Qge2xpbmtzfSA9IHBhZ2U7XG5cdFx0bGV0IGlzX2RhYiA9IGZhbHNlOyAvLyBIYXJkIHJlZGlyZWN0P1xuXHRcdGxldCBpc19yZWRpciA9IHR5cGVvZiBwYWdlLnJlZGlyZWN0ID09PSAnc3RyaW5nJztcblx0XHRsZXQgaTtcblx0XHRjb25zdCBpc19oaWRkZW4gPSBwYWdlLmNhdGVnb3J5aW5mbyAmJiB0eXBlb2YgcGFnZS5jYXRlZ29yeWluZm8uaGlkZGVuID09PSAnc3RyaW5nJztcblx0XHRjb25zdCBpc19taXNzaW5nID0gdHlwZW9mIHBhZ2UubWlzc2luZyA9PT0gJ3N0cmluZyc7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGkgJiYgdG9SZXNvbHZlW2ldLmRhYklucHV0Q2xlYW5lZCAhPT0gcGFnZS50aXRsZS5zbGljZShNYXRoLm1heCgwLCBwYWdlLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIE5vdGU6IHRoZSBzZXJ2ZXIgcmV0dXJucyBpbiBwYWdlIGFuIE5GQyBub3JtYWxpemVkIFVuaWNvZGUgdGl0bGUuIElmIG91ciBpbnB1dCB3YXMgbm90IE5GQyBub3JtYWxpemVkLCB3ZSBtYXkgbm90IGZpbmRcblx0XHRcdC8vIGFueSBlbnRyeSBoZXJlLiBJZiB3ZSBoYXZlIG9ubHkgb25lIGVkaXRvciB0byByZXNvbHZlICh0aGUgbW9zdCBjb21tb24gY2FzZSwgSSBwcmVzdW1lKSwgd2UgbWF5IHNpbXBseSBza2lwIHRoZSBjaGVjay5cblx0XHRcdHRvUmVzb2x2ZVtpXS5jdXJyZW50SGlkZGVuID0gaXNfaGlkZGVuO1xuXHRcdFx0dG9SZXNvbHZlW2ldLmlucHV0RXhpc3RzID0gIWlzX21pc3Npbmc7XG5cdFx0XHR0b1Jlc29sdmVbaV0uaWNvbi5zcmMgPSBpc19taXNzaW5nID8gSEMuZXhpc3RzTm8gOiBIQy5leGlzdHNZZXM7XG5cdFx0fVxuXHRcdGlmIChpc19taXNzaW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghaXNfcmVkaXIgJiYgY2F0cyAmJiAoZ2V0TWVzc2FnZSgnZGlzYW1iaWdfY2F0ZWdvcnknKSB8fCBnZXRNZXNzYWdlKCdyZWRpcl9jYXRlZ29yeScpKSkge1xuXHRcdFx0Zm9yIChjb25zdCBjYXRfIG9mIGNhdHMpIHtcblx0XHRcdFx0bGV0IGNhdCA9IGNhdF8udGl0bGU7XG5cdFx0XHRcdC8vIFN0cmlwIG5hbWVzcGFjZSBwcmVmaXhcblx0XHRcdFx0aWYgKGNhdCkge1xuXHRcdFx0XHRcdGNhdCA9IGNhdC5zbGljZShNYXRoLm1heCgwLCBjYXQuaW5kZXhPZignOicpICsgMSkpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdFx0XHRpZiAoY2F0ID09PSBnZXRNZXNzYWdlKCdkaXNhbWJpZ19jYXRlZ29yeScpKSB7XG5cdFx0XHRcdFx0XHRpc19kYWIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjYXQgPT09IGdldE1lc3NhZ2UoJ3JlZGlyX2NhdGVnb3J5JykpIHtcblx0XHRcdFx0XHRcdGlzX3JlZGlyID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWlzX3JlZGlyICYmICFpc19kYWIpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFsaW5rcyB8fCBsaW5rcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgdGl0bGVzID0gW107XG5cdFx0Zm9yIChpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdC8vIENhdGVnb3J5IG5hbWVzcGFjZSAtLSBhbHdheXMgdHJ1ZSBzaW5jZSB3ZSBhc2sgb25seSBmb3IgdGhlIGNhdGVnb3J5IGxpbmtzXG5cdFx0XHRcdGxpbmtzW2ldLm5zID09PSAxNCAmJlxuXHRcdFx0XHQvLyBOYW1lIG5vdCBlbXB0eVxuXHRcdFx0XHRsaW5rc1tpXS50aXRsZSAmJlxuXHRcdFx0XHRsaW5rc1tpXS50aXRsZS5sZW5ndGggPiAwXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gSW50ZXJuYWwgbGluayB0byBleGlzdGluZyB0aGluZ3kuIEV4dHJhY3QgdGhlIHBhZ2UgbmFtZSBhbmQgcmVtb3ZlIHRoZSBuYW1lc3BhY2UuXG5cdFx0XHRcdGxldCBtYXRjaCA9IGxpbmtzW2ldLnRpdGxlO1xuXHRcdFx0XHRtYXRjaCA9IG1hdGNoLnNsaWNlKE1hdGgubWF4KDAsIG1hdGNoLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0Ly8gRXhjbHVkZSBibGFja2xpc3RlZCBjYXRlZ29yaWVzLlxuXHRcdFx0XHRpZiAoIUhDLmJsYWNrbGlzdCB8fCAhSEMuYmxhY2tsaXN0LnRlc3QobWF0Y2gpKSB7XG5cdFx0XHRcdFx0dGl0bGVzLnB1c2gobWF0Y2gpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aXRsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChpICYmIHRvUmVzb2x2ZVtpXS5kYWJJbnB1dENsZWFuZWQgIT09IHBhZ2UudGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgcGFnZS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR0b1Jlc29sdmVbaV0uaW5wdXRFeGlzdHMgPSB0cnVlOyAvLyBNaWdodCBhY3R1YWxseSBiZSB3cm9uZyBpZiBpdCdzIGEgcmVkaXJlY3QgcG9pbnRpbmcgdG8gYSBub24tZXhpc3RpbmcgY2F0ZWdvcnlcblx0XHRcdHRvUmVzb2x2ZVtpXS5pY29uLnNyYyA9IEhDLmV4aXN0c1llcztcblx0XHRcdGlmICh0aXRsZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHR0b1Jlc29sdmVbaV0uZGFiID0gdGl0bGVzO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9SZXNvbHZlW2ldLnRleHQudmFsdWUgPVxuXHRcdFx0XHRcdHRpdGxlc1swXSArICh0b1Jlc29sdmVbaV0uY3VycmVudEtleSA9PT0gbnVsbCA/ICcnIDogYHwke3RvUmVzb2x2ZVtpXS5jdXJyZW50S2V5fWApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgcmVzb2x2ZVJlZGlyZWN0cyA9ICh0b1Jlc29sdmUsIHBhcmFtcykgPT4ge1xuXHRcdGlmICghcGFyYW1zIHx8ICFwYXJhbXMucXVlcnkgfHwgIXBhcmFtcy5xdWVyeS5wYWdlcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IHAgaW4gcGFyYW1zLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocGFyYW1zLnF1ZXJ5LnBhZ2VzLCBwKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJlc29sdmVPbmUocGFyYW1zLnF1ZXJ5LnBhZ2VzW3BdLCB0b1Jlc29sdmUpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgcmVzb2x2ZU11bHRpID0gKHRvUmVzb2x2ZSwgY2FsbGJhY2spID0+IHtcblx0XHRsZXQgaTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9SZXNvbHZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0b1Jlc29sdmVbaV0uZGFiID0gbnVsbDtcblx0XHRcdHRvUmVzb2x2ZVtpXS5kYWJJbnB1dCA9IHRvUmVzb2x2ZVtpXS5sYXN0SW5wdXQ7XG5cdFx0fVxuXHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdHByb3A6ICdpbmZvfGxpbmtzfGNhdGVnb3JpZXN8Y2F0ZWdvcnlpbmZvJyxcblx0XHRcdHBsbmFtZXNwYWNlOiAnMTQnLFxuXHRcdFx0cGxsaW1pdDogdG9SZXNvbHZlLmxlbmd0aCAqIDEwLFxuXHRcdFx0Y2xsaW1pdDogdG9SZXNvbHZlLmxlbmd0aCAqIDEwLFxuXHRcdH07XG5cdFx0Y29uc3QgdGl0bGVzID0gW107XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IHYgPSB0b1Jlc29sdmVbaV0uZGFiSW5wdXQ7XG5cdFx0XHR2ID0gcmVwbGFjZVNob3J0Y3V0cyh2LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0dG9SZXNvbHZlW2ldLmRhYklucHV0Q2xlYW5lZCA9IHY7XG5cdFx0XHR0aXRsZXMucHVzaChgQ2F0ZWdvcnk6JHt2fWApO1xuXHRcdH1cblx0XHRwYXJhbXMudGl0bGVzID0gdGl0bGVzLmpvaW4oJ3wnKTtcblx0XHRhcGkuZ2V0KHBhcmFtcylcblx0XHRcdC5kb25lKChqc29uKSA9PiB7XG5cdFx0XHRcdHJlc29sdmVSZWRpcmVjdHModG9SZXNvbHZlLCBqc29uKTtcblx0XHRcdFx0Y2FsbGJhY2sodG9SZXNvbHZlKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbCgocmVxKSA9PiB7XG5cdFx0XHRcdGlmICghcmVxKSB7XG5cdFx0XHRcdFx0bm9TdWdnZXN0aW9ucyA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FsbGJhY2sodG9SZXNvbHZlKTtcblx0XHRcdH0pO1xuXHR9O1xuXHRjb25zdCBtYWtlQWN0aXZlID0gKHdoaWNoKSA9PiB7XG5cdFx0aWYgKHdoaWNoLmlzX2FjdGl2ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRpZiAoZWRpdG9yICE9PSB3aGljaCkge1xuXHRcdFx0XHRlZGl0b3IuaW5hY3RpdmF0ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR3aGljaC5pc19hY3RpdmUgPSB0cnVlO1xuXHRcdGlmICh3aGljaC5kYWIpIHtcblx0XHRcdHNob3dEYWIod2hpY2gpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBDaGVjayBmb3IgcHJvZ3JhbW1hdGljIHZhbHVlIGNoYW5nZXMuXG5cdFx0XHRjb25zdCBleHBlY3RlZElucHV0ID0gd2hpY2gubGFzdFJlYWxJbnB1dCB8fCB3aGljaC5sYXN0SW5wdXQgfHwgJyc7XG5cdFx0XHRjb25zdCBhY3R1YWxWYWx1ZSA9IHdoaWNoLnRleHQudmFsdWUgfHwgJyc7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdChleHBlY3RlZElucHV0Lmxlbmd0aCA9PT0gMCAmJiBhY3R1YWxWYWx1ZS5sZW5ndGggPiAwKSB8fFxuXHRcdFx0XHQoZXhwZWN0ZWRJbnB1dC5sZW5ndGggPiAwICYmIGFjdHVhbFZhbHVlLmluZGV4T2YoZXhwZWN0ZWRJbnB1dCkpXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gU29tZWhvdyB0aGUgZmllbGQncyB2YWx1ZSBhcHBlYXJzIHRvIGhhdmUgY2hhbmdlZCwgYW5kIHdoaWNoLmxhc3RTZWxlY3Rpb24gdGhlcmVmb3JlIGlzIG5vIGxvbmdlciB2YWxpZC4gVHJ5IHRvIHNldCB0aGVcblx0XHRcdFx0Ly8gY3Vyc29yIGF0IHRoZSBlbmQgb2YgdGhlIGNhdGVnb3J5LCBhbmQgZG8gbm90IGRpc3BsYXkgdGhlIG9sZCBzdWdnZXN0aW9uIGxpc3QuXG5cdFx0XHRcdHdoaWNoLnNob3dzTGlzdCA9IGZhbHNlO1xuXHRcdFx0XHRjb25zdCB2ID0gYWN0dWFsVmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdFx0W3doaWNoLmxhc3RJbnB1dF0gPSB2O1xuXHRcdFx0XHR3aGljaC5sYXN0UmVhbElucHV0ID0gd2hpY2gubGFzdElucHV0O1xuXHRcdFx0XHRpZiAodi5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0Wywgd2hpY2guY3VycmVudEtleV0gPSB2O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh3aGljaC5sYXN0U2VsZWN0aW9uKSB7XG5cdFx0XHRcdFx0d2hpY2gubGFzdFNlbGVjdGlvbiA9IHtcblx0XHRcdFx0XHRcdHN0YXJ0OiB2WzBdLmxlbmd0aCxcblx0XHRcdFx0XHRcdGVuZDogdlswXS5sZW5ndGgsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHdoaWNoLnNob3dzTGlzdCkge1xuXHRcdFx0XHR3aGljaC5kaXNwbGF5TGlzdCgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdoaWNoLmxhc3RTZWxlY3Rpb24pIHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0d2hpY2guc2V0U2VsZWN0aW9uKHdoaWNoLmxhc3RTZWxlY3Rpb24uc3RhcnQsIHdoaWNoLmxhc3RTZWxlY3Rpb24uZW5kKTtcblx0XHRcdFx0fSwgMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBzaG93RGFiID0gKHdoaWNoKSA9PiB7XG5cdFx0aWYgKHdoaWNoLmlzX2FjdGl2ZSkge1xuXHRcdFx0d2hpY2guc2hvd1N1Z2dlc3Rpb25zKHdoaWNoLmRhYiwgZmFsc2UsIG51bGwsIG51bGwpOyAvLyBkbyBhdXRvY29tcGxldGlvbiwgbm8ga2V5LCBubyBlbmdpbmUgc2VsZWN0b3Jcblx0XHRcdHdoaWNoLmRhYiA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1ha2VBY3RpdmUod2hpY2gpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgbXVsdGlTdWJtaXQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdG9SZXNvbHZlID0gW107XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXRvci5zdGF0ZSA9PT0gQ0hBTkdFX1BFTkRJTkcgfHwgZWRpdG9yLnN0YXRlID09PSBPUEVOKSB7XG5cdFx0XHRcdHRvUmVzb2x2ZS5wdXNoKGVkaXRvcik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0b1Jlc29sdmUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRtdy5ub3RpZnkobXNnLCB7dGFnOiAnaG90Q2F0J30pO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZXNvbHZlTXVsdGkodG9SZXNvbHZlLCAocmVzb2x2ZWQpID0+IHtcblx0XHRcdGxldCBmaXJzdERhYiA9IG51bGw7XG5cdFx0XHRsZXQgZG9udENoYW5nZSA9IGZhbHNlO1xuXHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHJlc29sdmVkKSB7XG5cdFx0XHRcdGlmIChlbGVtZW50Lmxhc3RJbnB1dCA9PT0gZWxlbWVudC5kYWJJbnB1dCkge1xuXHRcdFx0XHRcdGlmIChlbGVtZW50LmRhYikge1xuXHRcdFx0XHRcdFx0aWYgKCFmaXJzdERhYikge1xuXHRcdFx0XHRcdFx0XHRmaXJzdERhYiA9IGVsZW1lbnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50LmFjY2VwdENoZWNrKHRydWUpKSB7XG5cdFx0XHRcdFx0XHRlbGVtZW50LmNvbW1pdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBXZSBkaWRuJ3QgZGlzYWJsZSBhbGwgdGhlIG9wZW4gZWRpdG9ycywgYnV0IHdlIGRpZCBhc3luY2hyb25vdXMgY2FsbHMuIEl0IGlzXG5cdFx0XHRcdFx0Ly8gdGhlb3JldGljYWxseSBwb3NzaWJsZSB0aGF0IHRoZSB1c2VyIGNoYW5nZWQgc29tZXRoaW5nLi4uXG5cdFx0XHRcdFx0ZG9udENoYW5nZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChmaXJzdERhYikge1xuXHRcdFx0XHRzaG93RGFiKGZpcnN0RGFiKTtcblx0XHRcdH0gZWxzZSBpZiAoIWRvbnRDaGFuZ2UpIHtcblx0XHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRcdG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBzZXRNdWx0aUlucHV0ID0gKCkgPT4ge1xuXHRcdGlmIChjb21taXRCdXR0b24gfHwgb25VcGxvYWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29tbWl0QnV0dG9uID0gbWFrZSgnaW5wdXQnKTtcblx0XHRjb21taXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuXHRcdGNvbW1pdEJ1dHRvbi52YWx1ZSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNvbW1pdCcpO1xuXHRcdGNvbW1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG11bHRpU3VibWl0KTtcblx0XHRpZiAobXVsdGlTcGFuKSB7XG5cdFx0XHRtdWx0aVNwYW4ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY29tbWl0QnV0dG9uLCBtdWx0aVNwYW4pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYXRMaW5lLmFwcGVuZChjb21taXRCdXR0b24pO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgY2hlY2tNdWx0aUlucHV0ID0gKCkgPT4ge1xuXHRcdGlmICghY29tbWl0QnV0dG9uKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCBoYXNDaGFuZ2VzID0gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXRvci5zdGF0ZSAhPT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdGhhc0NoYW5nZXMgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29tbWl0QnV0dG9uLmRpc2FibGVkID0gIWhhc0NoYW5nZXM7XG5cdH07XG5cdGNvbnN0IHN1Z2dlc3Rpb25FbmdpbmVzID0ge1xuXHRcdG9wZW5zZWFyY2g6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPW9wZW5zZWFyY2gmbmFtZXNwYWNlPTE0JmxpbWl0PTMwJnNlYXJjaD1DYXRlZ29yeTokMWAsXG5cdFx0XHQvLyAkMSA9IHNlYXJjaCB0ZXJtXG5cdFx0XHQvLyBGdW5jdGlvbiB0byBjb252ZXJ0IHJlc3VsdCBvZiB1cmkgaW50byBhbiBhcnJheSBvZiBjYXRlZ29yeSBuYW1lc1xuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0LCBxdWVyeUtleSkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBxdWVyeVJlc3VsdFswXS5zbGljZShNYXRoLm1heCgwLCBxdWVyeVJlc3VsdFswXS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0Y29uc3QgWywgdGl0bGVzXSA9IHF1ZXJ5UmVzdWx0O1xuXHRcdFx0XHRcdGxldCBleGlzdHMgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAoIWNhdF9wcmVmaXgpIHtcblx0XHRcdFx0XHRcdGNhdF9wcmVmaXggPSBuZXcgUmVnRXhwKGBeKCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSk6YCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRjYXRfcHJlZml4Lmxhc3RJbmRleCA9IDA7XG5cdFx0XHRcdFx0XHRjb25zdCBtID0gY2F0X3ByZWZpeC5leGVjKHRpdGxlc1tpXSk7XG5cdFx0XHRcdFx0XHRpZiAobSAmJiBtLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzW2ldID0gdGl0bGVzW2ldLnNsaWNlKE1hdGgubWF4KDAsIHRpdGxlc1tpXS5pbmRleE9mKCc6JykgKyAxKSk7IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdFx0XHRpZiAoa2V5ID09PSB0aXRsZXNbaV0pIHtcblx0XHRcdFx0XHRcdFx0XHRleGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMuc3BsaWNlKGksIDEpOyAvLyBOb3BlLCBpdCdzIG5vdCBhIGNhdGVnb3J5IGFmdGVyIGFsbC5cblx0XHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aXRsZXMuZXhpc3RzID0gZXhpc3RzO1xuXHRcdFx0XHRcdGlmIChxdWVyeUtleSAhPT0ga2V5KSB7XG5cdFx0XHRcdFx0XHR0aXRsZXMubm9ybWFsaXplZCA9IGtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gUmVtZW1iZXIgdGhlIE5GQyBub3JtYWxpemVkIGtleSB3ZSBnb3QgYmFjayBmcm9tIHRoZSBzZXJ2ZXJcblx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGludGVybmFsc2VhcmNoOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZsaXN0PWFsbHBhZ2VzJmFwbmFtZXNwYWNlPTE0JmFwbGltaXQ9MzAmYXBmcm9tPSQxJmFwcHJlZml4PSQxYCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQucXVlcnkgJiYgcXVlcnlSZXN1bHQucXVlcnkuYWxscGFnZXMpIHtcblx0XHRcdFx0XHRjb25zdCB0aXRsZXMgPSBxdWVyeVJlc3VsdC5xdWVyeS5hbGxwYWdlcztcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dGl0bGVzW2ldID0gdGl0bGVzW2ldLnRpdGxlLnNsaWNlKE1hdGgubWF4KDAsIHRpdGxlc1tpXS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0fSAvLyBybSBuYW1lc3BhY2Vcblx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGV4aXN0czoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KCd3Z1NjcmlwdFBhdGgnKX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmcHJvcD1pbmZvJnRpdGxlcz1DYXRlZ29yeTokMWAsXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQsIHF1ZXJ5S2V5KSA9PiB7XG5cdFx0XHRcdGlmIChxdWVyeVJlc3VsdCAmJiBxdWVyeVJlc3VsdC5xdWVyeSAmJiBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcyAmJiAhcXVlcnlSZXN1bHQucXVlcnkucGFnZXNbLTFdKSB7XG5cdFx0XHRcdFx0Ly8gU2hvdWxkIGhhdmUgZXhhY3RseSAxXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBwIGluIHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocXVlcnlSZXN1bHQucXVlcnkucGFnZXMsIHApKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGV0IF90aXRsZSA9IHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzW3BdLnRpdGxlO1xuXHRcdFx0XHRcdFx0X3RpdGxlID0gX3RpdGxlLnNsaWNlKE1hdGgubWF4KDAsIF90aXRsZS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0XHRjb25zdCB0aXRsZXMgPSBbX3RpdGxlXTtcblx0XHRcdFx0XHRcdHRpdGxlcy5leGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdFx0aWYgKHF1ZXJ5S2V5ICE9PSBfdGl0bGUpIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzLm5vcm1hbGl6ZWQgPSBfdGl0bGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBORkNcblx0XHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHN1YmNhdGVnb3JpZXM6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPXF1ZXJ5Jmxpc3Q9Y2F0ZWdvcnltZW1iZXJzJmNtdHlwZT1zdWJjYXQmY21saW1pdD1tYXgmY210aXRsZT1DYXRlZ29yeTokMWAsXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5LmNhdGVnb3J5bWVtYmVycykge1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlcyA9IHF1ZXJ5UmVzdWx0LnF1ZXJ5LmNhdGVnb3J5bWVtYmVycztcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dGl0bGVzW2ldID0gdGl0bGVzW2ldLnRpdGxlLnNsaWNlKE1hdGgubWF4KDAsIHRpdGxlc1tpXS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0fSAvLyBybSBuYW1lc3BhY2Vcblx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHBhcmVudGNhdGVnb3JpZXM6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPXF1ZXJ5JnByb3A9Y2F0ZWdvcmllcyZ0aXRsZXM9Q2F0ZWdvcnk6JDEmY2xsaW1pdD1tYXhgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChxdWVyeVJlc3VsdCAmJiBxdWVyeVJlc3VsdC5xdWVyeSAmJiBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdGZvciAoY29uc3QgcCBpbiBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzW3BdLmNhdGVnb3JpZXMpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGl0bGVzID0gcXVlcnlSZXN1bHQucXVlcnkucGFnZXNbcF0uY2F0ZWdvcmllcztcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZXNbaV0gPSB0aXRsZXNbaV0udGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHRcdFx0fSAvLyBybSBuYW1lc3BhY2Vcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cdGNvbnN0IHN1Z2dlc3Rpb25Db25maWdzID0ge1xuXHRcdHNlYXJjaGluZGV4OiB7XG5cdFx0XHRuYW1lOiAnU2VhcmNoIGluZGV4Jyxcblx0XHRcdGVuZ2luZXM6IFsnb3BlbnNlYXJjaCddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IGZhbHNlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiBmYWxzZSxcblx0XHR9LFxuXHRcdHBhZ2VsaXN0OiB7XG5cdFx0XHRuYW1lOiAnUGFnZSBsaXN0Jyxcblx0XHRcdGVuZ2luZXM6IFsnaW50ZXJuYWxzZWFyY2gnLCAnZXhpc3RzJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogZmFsc2UsXG5cdFx0XHRub0NvbXBsZXRpb246IGZhbHNlLFxuXHRcdH0sXG5cdFx0Y29tYmluZWQ6IHtcblx0XHRcdG5hbWU6ICdDb21iaW5lZCBzZWFyY2gnLFxuXHRcdFx0ZW5naW5lczogWydvcGVuc2VhcmNoJywgJ2ludGVybmFsc2VhcmNoJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogZmFsc2UsXG5cdFx0XHRub0NvbXBsZXRpb246IGZhbHNlLFxuXHRcdH0sXG5cdFx0c3ViY2F0OiB7XG5cdFx0XHRuYW1lOiAnU3ViY2F0ZWdvcmllcycsXG5cdFx0XHRlbmdpbmVzOiBbJ3N1YmNhdGVnb3JpZXMnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiB0cnVlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiB0cnVlLFxuXHRcdH0sXG5cdFx0cGFyZW50Y2F0OiB7XG5cdFx0XHRuYW1lOiAnUGFyZW50IGNhdGVnb3JpZXMnLFxuXHRcdFx0ZW5naW5lczogWydwYXJlbnRjYXRlZ29yaWVzJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogdHJ1ZSxcblx0XHRcdG5vQ29tcGxldGlvbjogdHJ1ZSxcblx0XHR9LFxuXHR9O1xuXHQvLyBFdmVudCBrZXlDb2RlcyB0aGF0IHdlIGhhbmRsZSBpbiB0aGUgdGV4dCBpbnB1dCBmaWVsZC9zdWdnZXN0aW9uIGxpc3QuXG5cdGNvbnN0IEJTID0gODtcblx0Y29uc3QgVEFCID0gOTtcblx0Y29uc3QgUkVUID0gMTM7XG5cdGNvbnN0IEVTQyA9IDI3O1xuXHRjb25zdCBTUEFDRSA9IDMyO1xuXHRjb25zdCBQR1VQID0gMzM7XG5cdGNvbnN0IFBHRE9XTiA9IDM0O1xuXHRjb25zdCBVUCA9IDM4O1xuXHRjb25zdCBET1dOID0gNDA7XG5cdGNvbnN0IERFTCA9IDQ2O1xuXHRjb25zdCBJTUUgPSAyMjk7XG5cdGNsYXNzIENhdGVnb3J5RWRpdG9yIHtcblx0XHRjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG5cdFx0XHR0aGlzLmluaXRpYWxpemUoLi4uYXJncyk7XG5cdFx0fVxuXHRcdGluaXRpYWxpemUobGluZSwgc3BhbiwgYWZ0ZXIsIGtleSwgaXNfaGlkZGVuKSB7XG5cdFx0XHQvLyBJZiBhIHNwYW4gaXMgZ2l2ZW4sICdhZnRlcicgaXMgdGhlIGNhdGVnb3J5IHRpdGxlLCBvdGhlcndpc2UgaXQgbWF5IGJlIGFuIGVsZW1lbnQgYWZ0ZXIgd2hpY2ggdG9cblx0XHRcdC8vIGluc2VydCB0aGUgbmV3IHNwYW4uICdrZXknIGlzIGxpa2V3aXNlIG92ZXJsb2FkZWQ7IGlmIGEgc3BhbiBpcyBnaXZlbiwgaXQgaXMgdGhlIGNhdGVnb3J5IGtleSAoaWZcblx0XHRcdC8vIGtub3duKSwgb3RoZXJ3aXNlIGl0IGlzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgYSBiYXIgc2hhbGwgYmUgcHJlcGVuZGVkLlxuXHRcdFx0aWYgKHNwYW4pIHtcblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdHNwYW4uZGlyID0gJ3J0bCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pc0FkZENhdGVnb3J5ID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuY2F0TGluayA9IHNwYW4uZmlyc3RDaGlsZDtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbENhdGVnb3J5ID0gYWZ0ZXI7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxLZXkgPSBrZXkgJiYga2V5Lmxlbmd0aCA+IDEgPyBrZXkuc2xpY2UoMSkgOiBudWxsOyAvLyA+IDEgYmVjYXVzZSBpdCBpbmNsdWRlcyB0aGUgbGVhZGluZyBiYXJcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEV4aXN0cyA9ICFoYXNDbGFzcyh0aGlzLmNhdExpbmssICduZXcnKTtcblx0XHRcdFx0Ly8gQ3JlYXRlIGNoYW5nZSBhbmQgZGVsIGxpbmtzXG5cdFx0XHRcdHRoaXMubWFrZUxpbmtTcGFuKCk7XG5cdFx0XHRcdGlmICghdGhpcy5vcmlnaW5hbEV4aXN0cyAmJiB0aGlzLnVwRG93bkxpbmtzKSB7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMubGlua1NwYW4pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pc0FkZENhdGVnb3J5ID0gdHJ1ZTtcblx0XHRcdFx0Ly8gQ3JlYXRlIGFkZCBzcGFuIGFuZCBhcHBlbmQgdG8gY2F0TGlua3Ncblx0XHRcdFx0dGhpcy5vcmlnaW5hbENhdGVnb3J5ID0gJyc7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxLZXkgPSBudWxsO1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsRXhpc3RzID0gZmFsc2U7XG5cdFx0XHRcdGlmICghbmV3RE9NKSB7XG5cdFx0XHRcdFx0c3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0XHRzcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50Jztcblx0XHRcdFx0XHRpZiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRzcGFuLmFwcGVuZChtYWtlKCcgfCAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0XHRpZiAoYWZ0ZXIpIHtcblx0XHRcdFx0XHRcdFx0YWZ0ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgYWZ0ZXIubmV4dFNpYmxpbmcpO1xuXHRcdFx0XHRcdFx0XHRhZnRlciA9IGFmdGVyLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChsaW5lKSB7XG5cdFx0XHRcdFx0XHRcdGxpbmUuYXBwZW5kKHNwYW4pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAobGluZSAmJiBsaW5lLmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0XHRcdHNwYW4uYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0XHRsaW5lLmFwcGVuZChzcGFuKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5saW5rU3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0dGhpcy5saW5rU3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCBub3BvcHVwcyBob3RjYXRsaW5rJztcblx0XHRcdFx0Y29uc3QgbGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4uYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MuYWRkLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1hZGQnKTtcblx0XHRcdFx0dGhpcy5saW5rU3Bhbi5hcHBlbmQobGluayk7XG5cdFx0XHRcdHNwYW4gPSBtYWtlKG5ld0RPTSA/ICdsaScgOiAnc3BhbicpO1xuXHRcdFx0XHRzcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50Jztcblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdHNwYW4uZGlyID0gJ3J0bCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5saW5rU3Bhbik7XG5cdFx0XHRcdGlmIChhZnRlcikge1xuXHRcdFx0XHRcdGFmdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIGFmdGVyLm5leHRTaWJsaW5nKTtcblx0XHRcdFx0fSBlbHNlIGlmIChsaW5lKSB7XG5cdFx0XHRcdFx0bGluZS5hcHBlbmQoc3Bhbik7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcyA9IG51bGw7XG5cdFx0XHRcdHRoaXMudW5kZWxMaW5rID0gbnVsbDtcblx0XHRcdFx0dGhpcy5jYXRMaW5rID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHRoaXMub3JpZ2luYWxIaWRkZW4gPSBpc19oaWRkZW47XG5cdFx0XHR0aGlzLmxpbmUgPSBsaW5lO1xuXHRcdFx0dGhpcy5lbmdpbmUgPSBIQy5zdWdnZXN0aW9ucztcblx0XHRcdHRoaXMuc3BhbiA9IHNwYW47XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMub3JpZ2luYWxFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHRcdHRoaXMuc3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZFN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdHRoaXMubGFzdFNhdmVkS2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHRcdHRoaXMubGFzdFNhdmVkRXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMubGFzdFNhdmVkSGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHRcdGlmICh0aGlzLmNhdExpbmsgJiYgdGhpcy5jdXJyZW50S2V5KSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleTtcblx0XHRcdH1cblx0XHRcdGVkaXRvcnNbZWRpdG9ycy5sZW5ndGhdID0gdGhpcztcblx0XHR9XG5cdFx0bWFrZUxpbmtTcGFuKCkge1xuXHRcdFx0dGhpcy5ub3JtYWxMaW5rcyA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdGxldCBsaW5rID0gbnVsbDtcblx0XHRcdGlmICh0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgJiYgdGhpcy5vcmlnaW5hbENhdGVnb3J5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5yZW1vdmUsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXJlbW92ZScpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdH1cblx0XHRcdGlmICghSEMudGVtcGxhdGVfY2F0ZWdvcmllc1t0aGlzLm9yaWdpbmFsQ2F0ZWdvcnldKSB7XG5cdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLmNoYW5nZSwgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtY2hhbmdlJyk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMgJiYgSEMudXNlX3VwX2Rvd24pIHtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZG93bi5iaW5kKHRoaXMpKTtcblx0XHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLmRvd24sIHRydWUpKTtcblx0XHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtZG93bicpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cC5iaW5kKHRoaXMpKTtcblx0XHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnVwLCB0cnVlKSk7XG5cdFx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXVwJyk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZCh0aGlzLnVwRG93bkxpbmtzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW5rU3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdHRoaXMubGlua1NwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQgbm9wb3B1cHMgaG90Y2F0bGluayc7XG5cdFx0XHR0aGlzLmxpbmtTcGFuLmFwcGVuZCh0aGlzLm5vcm1hbExpbmtzKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuY2xhc3NOYW1lID0gJ25vcG9wdXBzIGhvdGNhdGxpbmsnO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlc3RvcmUuYmluZCh0aGlzKSk7XG5cdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnJlc3RvcmUsIHRydWUpKTtcblx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1yZXN0b3JlJyk7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rLmFwcGVuZChsaW5rKTtcblx0XHRcdHRoaXMubGlua1NwYW4uYXBwZW5kKHRoaXMudW5kZWxMaW5rKTtcblx0XHR9XG5cdFx0aW52b2tlU3VnZ2VzdGlvbnMoZG9udF9hdXRvY29tcGxldGUpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0dGhpcy5lbmdpbmUgJiZcblx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdICYmXG5cdFx0XHRcdHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXS50ZW1wICYmXG5cdFx0XHRcdCFkb250X2F1dG9jb21wbGV0ZVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lID0gSEMuc3VnZ2VzdGlvbnM7XG5cdFx0XHR9IC8vIFJlc2V0IHRvIGEgc2VhcmNoIHVwb24gaW5wdXRcblx0XHRcdHRoaXMuc3RhdGUgPSBDSEFOR0VfUEVORElORztcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNlbGYudGV4dGNoYW5nZShkb250X2F1dG9jb21wbGV0ZSk7XG5cdFx0XHR9LCBIQy5zdWdnZXN0X2RlbGF5KTtcblx0XHR9XG5cdFx0bWFrZUZvcm0oKSB7XG5cdFx0XHRjb25zdCBmb3JtID0gbWFrZSgnZm9ybScpO1xuXHRcdFx0Zm9ybS5tZXRob2QgPSAnUE9TVCc7XG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuYWNjZXB0LmJpbmQodGhpcykpO1xuXHRcdFx0dGhpcy5mb3JtID0gZm9ybTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0Y29uc3QgdGV4dCA9IG1ha2UoJ2lucHV0Jyk7XG5cdFx0XHR0ZXh0LnR5cGUgPSAndGV4dCc7XG5cdFx0XHR0ZXh0LnNpemUgPSBIQy5lZGl0Ym94X3dpZHRoO1xuXHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdC8vIEJlIGNhcmVmdWwgaGVyZSB0byBoYW5kbGUgSU1FIGlucHV0LiBUaGlzIGlzIGJyb3dzZXIvT1MvSU1FIGRlcGVuZGVudCwgYnV0IGJhc2ljYWxseSB0aGVyZSBhcmUgdHdvIG1lY2hhbmlzbXM6XG5cdFx0XHRcdC8vIC0gTW9kZXJuIChET00gTGV2ZWwgMykgYnJvd3NlcnMgdXNlIGNvbXBvc2l0aW9uc3RhcnQvY29tcG9zaXRpb25lbmQgZXZlbnRzIHRvIHNpZ25hbCBjb21wb3NpdGlvbjsgaWYgdGhlXG5cdFx0XHRcdC8vICAgY29tcG9zaXRpb24gaXMgbm90IGNhbmNlbGVkLCB0aGVyZSdsbCBiZSBhIHRleHRJbnB1dCBldmVudCBmb2xsb3dpbmcuIER1cmluZyBhIGNvbXBvc2l0aW9uIGtleSBldmVudHMgYXJlXG5cdFx0XHRcdC8vICAgZWl0aGVyIGFsbCBzdXBwcmVzc2VkIChGRi9HZWNrbyksIG9yIG90aGVyd2lzZSBoYXZlIGtleURvd24gPT09IElNRSBmb3IgYWxsIGtleXMgKFdlYmtpdCkuXG5cdFx0XHRcdC8vICAgLSBXZWJraXQgc2VuZHMgYSB0ZXh0SW5wdXQgZm9sbG93ZWQgYnkga2V5RG93biA9PT0gSU1FIGFuZCBhIGtleVVwIHdpdGggdGhlIGtleSB0aGF0IGVuZGVkIGNvbXBvc2l0aW9uLlxuXHRcdFx0XHQvLyAgIC0gR2Vja28gZG9lc24ndCBzZW5kIHRleHRJbnB1dCBidXQganVzdCBhIGtleVVwIHdpdGggdGhlIGtleSB0aGF0IGVuZGVkIGNvbXBvc2l0aW9uLCB3aXRob3V0IHNlbmRpbmcga2V5RG93blxuXHRcdFx0XHQvL1x0IGZpcnN0LiBHZWNrbyBkb2Vzbid0IHNlbmQgYW55IGtleWRvd24gd2hpbGUgSU1FIGlzIGFjdGl2ZS5cblx0XHRcdFx0Ly8gLSBPbGRlciBicm93c2VycyBzaWduYWwgY29tcG9zaXRpb24gYnkga2V5RG93biA9PT0gSU1FIGZvciB0aGUgZmlyc3QgYW5kIHN1YnNlcXVlbnQga2V5cyBmb3IgYSBjb21wb3NpdGlvbi4gVGhlXG5cdFx0XHRcdC8vICAgZmlyc3Qga2V5RG93biAhPT0gSU1FIGlzIGNlcnRhaW5seSBhZnRlciB0aGUgZW5kIG9mIHRoZSBjb21wb3NpdGlvbi4gVHlwaWNhbGx5LCBjb21wb3NpdGlvbiBlbmQgY2FuIGFsc28gYmVcblx0XHRcdFx0Ly8gICBkZXRlY3RlZCBieSBhIGtleURvd24gSU1FIHdpdGggYSBrZXlVcCBvZiBzcGFjZSwgdGFiLCBlc2NhcGUsIG9yIHJldHVybi5cblx0XHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGtleSA9IGV2ZW50LmtleSB8fCAwO1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdHNlbGYuaW1lICYmXG5cdFx0XHRcdFx0XHRzZWxmLmxhc3RLZXkgPT09IElNRSAmJlxuXHRcdFx0XHRcdFx0IXNlbGYudXNlc0NvbXBvc2l0aW9uICYmXG5cdFx0XHRcdFx0XHQoa2V5ID09PSBUQUIgfHwga2V5ID09PSBSRVQgfHwga2V5ID09PSBFU0MgfHwga2V5ID09PSBTUEFDRSlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChzZWxmLmltZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChrZXkgPT09IFVQIHx8IGtleSA9PT0gRE9XTiB8fCBrZXkgPT09IFBHVVAgfHwga2V5ID09PSBQR0RPV04pIHtcblx0XHRcdFx0XHRcdC8vIEluIGNhc2UgYSBicm93c2VyIGRvZXNuJ3QgZ2VuZXJhdGUga2V5cHJlc3MgZXZlbnRzIGZvciBhcnJvdyBrZXlzLi4uXG5cdFx0XHRcdFx0XHRpZiAoc2VsZi5rZXlDb3VudCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5wcm9jZXNzS2V5KGV2ZW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKGtleSA9PT0gRVNDICYmIHNlbGYubGFzdEtleSAhPT0gSU1FICYmICFzZWxmLnJlc2V0S2V5U2VsZWN0aW9uKCkpIHtcblx0XHRcdFx0XHRcdFx0Ly8gTm8gdW5kbyBvZiBrZXkgc2VsZWN0aW9uOiB0cmVhdCBFU0MgYXMgXCJjYW5jZWxcIi5cblx0XHRcdFx0XHRcdFx0c2VsZi5jYW5jZWwoKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gQWxzbyBkbyB0aGlzIGZvciBFU0MgYXMgYSB3b3JrYXJvdW5kIGZvciBGaXJlZm94IGJ1ZyA1MjQzNjBcblx0XHRcdFx0XHRcdC8vIHtAbGluayBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01MjQzNjB9XG5cdFx0XHRcdFx0XHRzZWxmLmludm9rZVN1Z2dlc3Rpb25zKGtleSA9PT0gQlMgfHwga2V5ID09PSBERUwgfHwga2V5ID09PSBFU0MpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGtleSA9IGV2ZW50LmtleSB8fCAwO1xuXHRcdFx0XHRcdHNlbGYubGFzdEtleSA9IGtleTtcblx0XHRcdFx0XHRzZWxmLmtleUNvdW50ID0gMDtcblx0XHRcdFx0XHQvLyBET00gTGV2ZWwgPCAzIElNRSBpbnB1dFxuXHRcdFx0XHRcdGlmICghc2VsZi5pbWUgJiYga2V5ID09PSBJTUUgJiYgIXNlbGYudXNlc0NvbXBvc2l0aW9uKSB7XG5cdFx0XHRcdFx0XHQvLyBzZWxmLnVzZXNDb21wb3NpdGlvbiBjYXRjaGVzIGJyb3dzZXJzIHRoYXQgbWF5IGVtaXQgc3B1cmlvdXMga2V5ZG93biBJTUUgYWZ0ZXIgYSBjb21wb3NpdGlvbiBoYXMgZW5kZWRcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gdHJ1ZTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgJiZcblx0XHRcdFx0XHRcdGtleSAhPT0gSU1FICYmXG5cdFx0XHRcdFx0XHQhKChrZXkgPj0gMTYgJiYga2V5IDw9IDIwKSB8fCAoa2V5ID49IDkxICYmIGtleSA8PSA5MykgfHwga2V5ID09PSAxNDQpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHQvLyBJZ25vcmUgY29udHJvbCBrZXlzOiBjdHJsLCBzaGlmdCwgYWx0LCBhbHQgZ3IsIGNhcHMgbG9jaywgd2luZG93cy9hcHBsZSBjbWQga2V5cywgbnVtIGxvY2suIE9ubHkgdGhlIHdpbmRvd3Mga2V5c1xuXHRcdFx0XHRcdFx0Ly8gdGVybWluYXRlIElNRSAoYXBwbGUgY21kIGRvZXNuJ3QpLCBidXQgdGhleSBhbHNvIGNhdXNlIGEgYmx1ciwgc28gaXQncyBPSyB0byBpZ25vcmUgdGhlbSBoZXJlLlxuXHRcdFx0XHRcdFx0Ly8gTm90ZTogU2FmYXJpIDQgKDUzMC4xNykgcHJvcGFnYXRlcyBFU0Mgb3V0IG9mIGFuIElNRSBjb21wb3NpdGlvbiAob2JzZXJ2ZWQgYXQgbGVhc3Qgb24gV2luIFhQKS5cblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChzZWxmLmltZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIEhhbmRsZSByZXR1cm4gZXhwbGljaXRseSwgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIHRvIGJlIGFibGUgdG8gY2hlY2sgZm9yIGN0cmxcblx0XHRcdFx0XHRpZiAoa2V5ID09PSBSRVQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZWxmLmFjY2VwdChldmVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIEluaGliaXQgZGVmYXVsdCBiZWhhdmlvciBvZiBFU0MgKHJldmVydCB0byBsYXN0IHJlYWwgaW5wdXQgaW4gRkY6IHdlIGRvIHRoYXQgb3Vyc2VsdmVzKVxuXHRcdFx0XHRcdHJldHVybiBrZXkgPT09IEVTQyA/IGV2dEtpbGwoZXZlbnQpIDogdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIEFuZCBoYW5kbGUgY29udGludWVkIHByZXNzaW5nIG9mIGFycm93IGtleXNcblx0XHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYua2V5Q291bnQrKztcblx0XHRcdFx0XHRyZXR1cm4gc2VsZi5wcm9jZXNzS2V5KGV2ZW50KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQodGV4dCkub24oJ2ZvY3VzJywgKCkgPT4ge1xuXHRcdFx0XHRcdG1ha2VBY3RpdmUoc2VsZik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBPbiBJRSwgYmx1ciBldmVudHMgYXJlIGFzeW5jaHJvbm91cywgYW5kIG1heSB0aHVzIGFycml2ZSBhZnRlciB0aGUgZWxlbWVudCBoYXMgbG9zdCB0aGUgZm9jdXMuIFNpbmNlIElFXG5cdFx0XHRcdC8vIGNhbiBnZXQgdGhlIHNlbGVjdGlvbiBvbmx5IHdoaWxlIHRoZSBlbGVtZW50IGlzIGFjdGl2ZSAoaGFzIHRoZSBmb2N1cyksIHdlIG1heSBub3QgYWx3YXlzIGdldCB0aGUgc2VsZWN0aW9uLlxuXHRcdFx0XHQvLyBUaGVyZWZvcmUsIHVzZSBhbiBJRS1zcGVjaWZpYyBzeW5jaHJvbm91cyBldmVudCBvbiBJRS4uLlxuXHRcdFx0XHQvLyBEb24ndCB0ZXN0IGZvciB0ZXh0LnNlbGVjdGlvblN0YXJ0IGJlaW5nIGRlZmluZWQ7XG5cdFx0XHRcdCQodGV4dCkub24oXG5cdFx0XHRcdFx0dGV4dC5vbmJlZm9yZWRlYWN0aXZhdGUgIT09IHVuZGVmaW5lZCAmJiB0ZXh0LmNyZWF0ZVRleHRSYW5nZSA/ICdiZWZvcmVkZWFjdGl2YXRlJyA6ICdibHVyJyxcblx0XHRcdFx0XHR0aGlzLnNhdmVWaWV3LmJpbmQodGhpcylcblx0XHRcdFx0KTtcblx0XHRcdFx0Ly8gRE9NIExldmVsIDMgSU1FIGhhbmRsaW5nXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gU2V0dGluZyBsYXN0S2V5ID0gSU1FIHByb3ZpZGVzIGEgZmFrZSBrZXlEb3duIGZvciBHZWNrbydzIHNpbmdsZSBrZXlVcCBhZnRlciBhIGNtcG9zaXRpb24uIElmIHdlIGRpZG4ndCBkbyB0aGlzLFxuXHRcdFx0XHRcdC8vIGNhbmNlbGxpbmcgYSBjb21wb3NpdGlvbiB2aWEgRVNDIHdvdWxkIGFsc28gY2FuY2VsIGFuZCBjbG9zZSB0aGUgd2hvbGUgY2F0ZWdvcnkgaW5wdXQgZWRpdG9yLlxuXHRcdFx0XHRcdCQodGV4dCkub24oJ2NvbXBvc2l0aW9uc3RhcnQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLmxhc3RLZXkgPSBJTUU7XG5cdFx0XHRcdFx0XHRzZWxmLnVzZXNDb21wb3NpdGlvbiA9IHRydWU7XG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IHRydWU7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JCh0ZXh0KS5vbignY29tcG9zaXRpb25lbmQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLmxhc3RLZXkgPSBJTUU7XG5cdFx0XHRcdFx0XHRzZWxmLnVzZXNDb21wb3NpdGlvbiA9IHRydWU7XG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQodGV4dCkub24oJ3RleHRJbnB1dCcsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRzZWxmLmludm9rZVN1Z2dlc3Rpb25zKGZhbHNlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0Ly8gSnVzdCBpbiBjYXNlIHNvbWUgYnJvd3NlcnMgbWlnaHQgcHJvZHVjZSBleGNlcHRpb25zIHdpdGggdGhlc2UgRE9NIExldmVsIDMgZXZlbnRzXG5cdFx0XHRcdH1cblx0XHRcdFx0JCh0ZXh0KS5vbignYmx1cicsICgpID0+IHtcblx0XHRcdFx0XHRzZWxmLnVzZXNDb21wb3NpdGlvbiA9IGZhbHNlO1xuXHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50ZXh0ID0gdGV4dDtcblx0XHRcdHRoaXMuaWNvbiA9IG1ha2UoJ2ltZycpO1xuXHRcdFx0bGV0IGxpc3QgPSBudWxsO1xuXHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdGxpc3QgPSBtYWtlKCdzZWxlY3QnKTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRpZiAoc2VsZi5oaWdobGlnaHRTdWdnZXN0aW9uKDApKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UoZmFsc2UsIHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmIChzZWxmLmhpZ2hsaWdodFN1Z2dlc3Rpb24oMCkpIHtcblx0XHRcdFx0XHRcdHNlbGYuYWNjZXB0KGUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYuaGlnaGxpZ2h0U3VnZ2VzdGlvbigwKTtcblx0XHRcdFx0XHRzZWxmLnRleHQuZm9jdXMoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRpZiAoZXZlbnQua2V5ID09PSBFU0MpIHtcblx0XHRcdFx0XHRcdHNlbGYucmVzZXRLZXlTZWxlY3Rpb24oKTtcblx0XHRcdFx0XHRcdHNlbGYudGV4dC5mb2N1cygpO1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNlbGYudGV4dGNoYW5nZSh0cnVlKTtcblx0XHRcdFx0XHRcdH0sIEhDLnN1Z2dlc3RfZGVsYXkpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSBSRVQpIHtcblx0XHRcdFx0XHRcdHNlbGYuYWNjZXB0KGV2ZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAoIUhDLmZpeGVkX3NlYXJjaCkge1xuXHRcdFx0XHRcdGNvbnN0IGVuZ2luZVNlbGVjdG9yID0gbWFrZSgnc2VsZWN0Jyk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gc3VnZ2VzdGlvbkNvbmZpZ3MpIHtcblx0XHRcdFx0XHRcdGlmIChzdWdnZXN0aW9uQ29uZmlnc1trZXldLnNob3cpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgb3B0ID0gbWFrZSgnb3B0aW9uJyk7XG5cdFx0XHRcdFx0XHRcdG9wdC52YWx1ZSA9IGtleTtcblx0XHRcdFx0XHRcdFx0aWYgKGtleSA9PT0gdGhpcy5lbmdpbmUpIHtcblx0XHRcdFx0XHRcdFx0XHRvcHQuc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdG9wdC5hcHBlbmQobWFrZShzdWdnZXN0aW9uQ29uZmlnc1trZXldLm5hbWUsIHRydWUpKTtcblx0XHRcdFx0XHRcdFx0ZW5naW5lU2VsZWN0b3IuYXBwZW5kKG9wdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVuZ2luZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuZW5naW5lID0gc2VsZi5lbmdpbmVTZWxlY3Rvci5vcHRpb25zW3NlbGYuZW5naW5lU2VsZWN0b3Iuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHQuZm9jdXMoKTtcblx0XHRcdFx0XHRcdHNlbGYudGV4dGNoYW5nZSh0cnVlLCB0cnVlKTsgLy8gRG9uJ3QgYXV0b2NvbXBsZXRlLCBmb3JjZSByZS1kaXNwbGF5IG9mIGxpc3Rcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yID0gZW5naW5lU2VsZWN0b3I7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdCA9IGxpc3Q7XG5cdFx0XHRjb25zdCBidXR0b25fbGFiZWwgPSAoX2lkLCBkZWZhdWx0VGV4dCkgPT4ge1xuXHRcdFx0XHRjb25zdCBsYWJlbCA9IG51bGw7XG5cdFx0XHRcdGlmICghbGFiZWwgfHwgIWxhYmVsLmRhdGEpIHtcblx0XHRcdFx0XHRyZXR1cm4gZGVmYXVsdFRleHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGxhYmVsLmRhdGE7XG5cdFx0XHR9O1xuXHRcdFx0Ly8gRG8gbm90IHVzZSB0eXBlICdzdWJtaXQnOyB3ZSBjYW5ub3QgZGV0ZWN0IG1vZGlmaWVyIGtleXMgaWYgd2UgZG9cblx0XHRcdGNvbnN0IE9LID0gbWFrZSgnaW5wdXQnKTtcblx0XHRcdE9LLnR5cGUgPSAnYnV0dG9uJztcblx0XHRcdE9LLnZhbHVlID0gYnV0dG9uX2xhYmVsKCd3cE9rVXBsb2FkTGJsJywgZ2V0TWVzc2FnZSgnbWVzc2FnZXMtb2snKSk7XG5cdFx0XHRPSy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWNjZXB0LmJpbmQodGhpcykpO1xuXHRcdFx0dGhpcy5vayA9IE9LO1xuXHRcdFx0Y29uc3QgY2FuY2VsID0gbWFrZSgnaW5wdXQnKTtcblx0XHRcdGNhbmNlbC50eXBlID0gJ2J1dHRvbic7XG5cdFx0XHRjYW5jZWwudmFsdWUgPSBidXR0b25fbGFiZWwoJ3dwQ2FuY2VsVXBsb2FkTGJsJywgZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2FuY2VsJykpO1xuXHRcdFx0Y2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLmNhbmNlbEJ1dHRvbiA9IGNhbmNlbDtcblx0XHRcdGNvbnN0IHNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRzcGFuLmNsYXNzTmFtZSA9ICdob3RjYXRpbnB1dCc7XG5cdFx0XHRzcGFuLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcblx0XHRcdHNwYW4uYXBwZW5kKHRleHQpO1xuXHRcdFx0Ly8gUHV0IHNvbWUgdGV4dCBpbnRvIHRoaXMgc3BhbiAoYTAgaXMgbmJzcCkgYW5kIG1ha2Ugc3VyZSBpdCBhbHdheXMgc3RheXMgb24gdGhlIHNhbWVcblx0XHRcdC8vIGxpbmUgYXMgdGhlIGlucHV0IGZpZWxkLCBvdGhlcndpc2UsIElFOC85IG1pc2NhbGN1bGF0ZXMgdGhlIGhlaWdodCBvZiB0aGUgc3BhbiBhbmRcblx0XHRcdC8vIHRoZW4gdGhlIGVuZ2luZSBzZWxlY3RvciBtYXkgb3ZlcmxhcCB0aGUgaW5wdXQgZmllbGQuXG5cdFx0XHRzcGFuLmFwcGVuZChtYWtlKCdcXHUwMEEwJywgdHJ1ZSkpO1xuXHRcdFx0c3Bhbi5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG5cdFx0XHRpZiAobGlzdCkge1xuXHRcdFx0XHRzcGFuLmFwcGVuZChsaXN0KTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMuZW5naW5lU2VsZWN0b3IpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMuaWNvbik7XG5cdFx0XHR9XG5cdFx0XHRzcGFuLmFwcGVuZChPSyk7XG5cdFx0XHRzcGFuLmFwcGVuZChjYW5jZWwpO1xuXHRcdFx0Zm9ybS5hcHBlbmQoc3Bhbik7XG5cdFx0XHRmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR0aGlzLnNwYW4uYXBwZW5kKGZvcm0pO1xuXHRcdH1cblx0XHRkaXNwbGF5KGV2ZW50KSB7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5ICYmICFvblVwbG9hZCAmJiB0aGlzLmxpbmUpIHtcblx0XHRcdFx0bmV3IENhdGVnb3J5RWRpdG9yKHRoaXMubGluZSwgbnVsbCwgdGhpcy5zcGFuLCB0cnVlKTsgLy8gQ3JlYXRlIGEgbmV3IG9uZVxuXHRcdFx0fVxuXHRcdFx0aWYgKCFjb21taXRCdXR0b24gJiYgIW9uVXBsb2FkKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdFx0XHRpZiAoZWRpdG9yLnN0YXRlICE9PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0XHRcdHNldE11bHRpSW5wdXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCF0aGlzLmZvcm0pIHtcblx0XHRcdFx0dGhpcy5tYWtlRm9ybSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5sYXN0U2F2ZWRDYXRlZ29yeTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMubGFzdFNhdmVkRXhpc3RzO1xuXHRcdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5sYXN0U2F2ZWRIaWRkZW47XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLmxhc3RTYXZlZEtleTtcblx0XHRcdHRoaXMuaWNvbi5zcmMgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyBIQy5leGlzdHNZZXMgOiBIQy5leGlzdHNObztcblx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IHRoaXMuY3VycmVudENhdGVnb3J5ICsgKHRoaXMuY3VycmVudEtleSA9PT0gbnVsbCA/ICcnIDogYHwke3RoaXMuY3VycmVudEtleX1gKTtcblx0XHRcdHRoaXMub3JpZ2luYWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHRoaXMuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRoaXMuY3VycmVudEV4aXN0cztcblx0XHRcdHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlID09PSBVTkNIQU5HRUQgPyBPUEVOIDogQ0hBTkdFX1BFTkRJTkc7XG5cdFx0XHR0aGlzLmxhc3RTZWxlY3Rpb24gPSB7XG5cdFx0XHRcdHN0YXJ0OiB0aGlzLmN1cnJlbnRDYXRlZ29yeS5sZW5ndGgsXG5cdFx0XHRcdGVuZDogdGhpcy5jdXJyZW50Q2F0ZWdvcnkubGVuZ3RoLFxuXHRcdFx0fTtcblx0XHRcdHRoaXMuc2hvd3NMaXN0ID0gZmFsc2U7XG5cdFx0XHQvLyBEaXNwbGF5IHRoZSBmb3JtXG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW5rU3Bhbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0dGhpcy5mb3JtLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcblx0XHRcdHRoaXMub2suZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdC8vIEtpbGwgdGhlIGV2ZW50IGJlZm9yZSBmb2N1c3NpbmcsIG90aGVyd2lzZSBJRSB3aWxsIGtpbGwgdGhlIG9uZm9jdXMgZXZlbnQhXG5cdFx0XHRjb25zdCByZXN1bHQgPSBldnRLaWxsKGV2ZW50KTtcblx0XHRcdHRoaXMudGV4dC5mb2N1cygpO1xuXHRcdFx0dGhpcy50ZXh0LnJlYWRPbmx5ID0gZmFsc2U7XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdHNob3coZXZlbnQsIGVuZ2luZSwgcmVhZE9ubHkpIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMuZGlzcGxheShldmVudCk7XG5cdFx0XHRjb25zdCB2ID0gdGhpcy5sYXN0U2F2ZWRDYXRlZ29yeTtcblx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50ZXh0LnJlYWRPbmx5ID0gISFyZWFkT25seTtcblx0XHRcdHRoaXMuZW5naW5lID0gZW5naW5lO1xuXHRcdFx0dGhpcy50ZXh0Y2hhbmdlKGZhbHNlLCB0cnVlKTsgLy8gZG8gYXV0b2NvbXBsZXRpb24sIGZvcmNlIGRpc3BsYXkgb2Ygc3VnZ2VzdGlvbnNcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdG9wZW4oZXZlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLnNob3coZXZlbnQsIHRoaXMuZW5naW5lICYmIHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXS50ZW1wID8gSEMuc3VnZ2VzdGlvbnMgOiB0aGlzLmVuZ2luZSk7XG5cdFx0fVxuXHRcdGRvd24oZXZlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLnNob3coZXZlbnQsICdzdWJjYXQnLCB0cnVlKTtcblx0XHR9XG5cdFx0dXAoZXZlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLnNob3coZXZlbnQsICdwYXJlbnRjYXQnKTtcblx0XHR9XG5cdFx0Y2FuY2VsKCkge1xuXHRcdFx0aWYgKHRoaXMuaXNBZGRDYXRlZ29yeSAmJiAhb25VcGxvYWQpIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVFZGl0b3IoKTsgLy8gV2UgYWRkZWQgYSBuZXcgYWRkZXIgd2hlbiBvcGVuaW5nXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIENsb3NlLCByZS1kaXNwbGF5IGxpbmtcblx0XHRcdHRoaXMuaW5hY3RpdmF0ZSgpO1xuXHRcdFx0dGhpcy5mb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdHRoaXMuc3RhdGUgPSB0aGlzLm9yaWdpbmFsU3RhdGU7XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLmxhc3RTYXZlZEtleTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMubGFzdFNhdmVkRXhpc3RzO1xuXHRcdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5sYXN0U2F2ZWRIaWRkZW47XG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleSAmJiB0aGlzLmN1cnJlbnRLZXkubGVuZ3RoID4gMCA/IHRoaXMuY3VycmVudEtleSA6ICcnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuc3RhdGUgPT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoIW9uVXBsb2FkKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdH1cblx0XHRyZW1vdmVFZGl0b3IoKSB7XG5cdFx0XHRpZiAoIW5ld0RPTSkge1xuXHRcdFx0XHRjb25zdCBuZXh0ID0gdGhpcy5zcGFuLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRpZiAobmV4dCkge1xuXHRcdFx0XHRcdG5leHQucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnNwYW4gJiYgdGhpcy5zcGFuLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0dGhpcy5zcGFuLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlZGl0b3JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChlZGl0b3JzW2ldID09PSB0aGlzKSB7XG5cdFx0XHRcdFx0ZWRpdG9ycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdH1cblx0XHRyb2xsYmFjayhldmVudCkge1xuXHRcdFx0dGhpcy51bmRvTGluay5yZW1vdmUoKTtcblx0XHRcdHRoaXMudW5kb0xpbmsgPSBudWxsO1xuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHR0aGlzLmxhc3RTYXZlZENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IFVOQ0hBTkdFRDtcblx0XHRcdGlmICghdGhpcy5jdXJyZW50Q2F0ZWdvcnkgfHwgdGhpcy5jdXJyZW50Q2F0ZWdvcnkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdC8vIEl0IHdhcyBhIG5ld2x5IGFkZGVkIGNhdGVnb3J5LiBSZW1vdmUgdGhlIHdob2xlIGVkaXRvci5cblx0XHRcdFx0dGhpcy5yZW1vdmVFZGl0b3IoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFJlZGlzcGxheSB0aGUgbGluay4uLlxuXHRcdFx0XHR0aGlzLmNhdExpbmsuZmlyc3RDaGlsZC5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLmFwcGVuZChtYWtlKHRoaXMuY3VycmVudENhdGVnb3J5LCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5ocmVmID0gd2lraVBhZ2VQYXRoKGAke0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHt0aGlzLmN1cnJlbnRDYXRlZ29yeX1gKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuY2xhc3NOYW1lID0gdGhpcy5jdXJyZW50RXhpc3RzID8gJycgOiAnbmV3Jztcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cdFx0XHRcdGlmICh0aGlzLnVwRG93bkxpbmtzKSB7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5jdXJyZW50RXhpc3RzID8gJycgOiAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0fVxuXHRcdGluYWN0aXZhdGUoKSB7XG5cdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5pc19hY3RpdmUgPSBmYWxzZTtcblx0XHR9XG5cdFx0YWNjZXB0Q2hlY2soZG9udENoZWNrKSB7XG5cdFx0XHR0aGlzLnNhbml0aXplSW5wdXQoKTtcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy50ZXh0LnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRsZXQga2V5ID0gbnVsbDtcblx0XHRcdGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFssIGtleV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHRcdGxldCB2ID0gdmFsdWVbMF0ucmVwbGFjZSgvXy9nLCAnICcpLnRyaW0oKTtcblx0XHRcdGlmIChIQy5jYXBpdGFsaXplUGFnZU5hbWVzKSB7XG5cdFx0XHRcdHYgPSBjYXBpdGFsaXplKHYpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB2O1xuXHRcdFx0diA9IHJlcGxhY2VTaG9ydGN1dHModiwgSEMuc2hvcnRjdXRzKTtcblx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFkb250Q2hlY2sgJiZcblx0XHRcdFx0KChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAxNCAmJiB2ID09PSBjb25mLndnVGl0bGUpIHx8IChIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3QodikpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdjtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IGtleTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMuaW5wdXRFeGlzdHM7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0YWNjZXB0KGV2ZW50KSB7XG5cdFx0XHQvLyAoZXZ0S2V5cyhldmVudCkgJiAxKSAhPT0gMFxuXHRcdFx0Ly8g5b2T5LiU5LuF5b2TZXZ0S2V5cyhldmVudCnkuLox5pe277yM5pW05Liq5Yik5Yir5byP5omN5Li6dHJ1ZVxuXHRcdFx0dGhpcy5ub0NvbW1pdCA9IGV2dEtleXMoZXZlbnQpID09PSAxO1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gZXZ0S2lsbChldmVudCk7XG5cdFx0XHRpZiAodGhpcy5hY2NlcHRDaGVjaygpKSB7XG5cdFx0XHRcdGNvbnN0IHRvUmVzb2x2ZSA9IFt0aGlzXTtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWwgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdFx0cmVzb2x2ZU11bHRpKHRvUmVzb2x2ZSwgKHJlc29sdmVkKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlc29sdmVkWzBdLmRhYikge1xuXHRcdFx0XHRcdFx0c2hvd0RhYihyZXNvbHZlZFswXSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChyZXNvbHZlZFswXS5hY2NlcHRDaGVjayh0cnVlKSkge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZWRbMF0uY29tbWl0KFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlZFswXS5jdXJyZW50Q2F0ZWdvcnkgPT09IG9yaWdpbmFsXG5cdFx0XHRcdFx0XHRcdFx0PyBudWxsXG5cdFx0XHRcdFx0XHRcdFx0OiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfcmVzb2x2ZWQnLCBvcmlnaW5hbClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdGNsb3NlKCkge1xuXHRcdFx0aWYgKCF0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0Ly8gQ3JlYXRlIGEgY2F0TGlua1xuXHRcdFx0XHR0aGlzLmNhdExpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5hcHBlbmQobWFrZSgnZm9vJywgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0dGhpcy5zcGFuLmluc2VydEJlZm9yZSh0aGlzLmNhdExpbmssIHRoaXMuc3Bhbi5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2F0TGluay5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHRcdFx0dGhpcy5jYXRMaW5rLmFwcGVuZChtYWtlKHRoaXMuY3VycmVudENhdGVnb3J5LCB0cnVlKSk7XG5cdFx0XHR0aGlzLmNhdExpbmsuaHJlZiA9IHdpa2lQYWdlUGF0aChgJHtIQy5jYXRlZ29yeV9jYW5vbmljYWx9OiR7dGhpcy5jdXJyZW50Q2F0ZWdvcnl9YCk7XG5cdFx0XHR0aGlzLmNhdExpbmsuY2xhc3NOYW1lID0gdGhpcy5jdXJyZW50RXhpc3RzID8gJycgOiAnbmV3Jztcblx0XHRcdHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnkgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdHRoaXMubGFzdFNhdmVkS2V5ID0gdGhpcy5jdXJyZW50S2V5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRFeGlzdHMgPSB0aGlzLmN1cnJlbnRFeGlzdHM7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEhpZGRlbiA9IHRoaXMuY3VycmVudEhpZGRlbjtcblx0XHRcdC8vIENsb3NlIGZvcm0gYW5kIHJlZGlzcGxheSBjYXRlZ29yeVxuXHRcdFx0dGhpcy5pbmFjdGl2YXRlKCk7XG5cdFx0XHR0aGlzLmZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleSB8fCAnJztcblx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5KSB7XG5cdFx0XHRcdGlmIChvblVwbG9hZCAmJiB0aGlzLmxpbmUpIHtcblx0XHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IodGhpcy5saW5lLCBudWxsLCB0aGlzLnNwYW4sIHRydWUpOyAvLyBDcmVhdGUgYSBuZXcgb25lXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pc0FkZENhdGVnb3J5ID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMubGlua1NwYW4ucmVtb3ZlKCk7XG5cdFx0XHRcdHRoaXMubWFrZUxpbmtTcGFuKCk7XG5cdFx0XHRcdHRoaXMuc3Bhbi5hcHBlbmQodGhpcy5saW5rU3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRoaXMudW5kb0xpbmspIHtcblx0XHRcdFx0Ly8gQXBwZW5kIGFuIHVuZG8gbGluay5cblx0XHRcdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0Y29uc3QgbGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJvbGxiYWNrLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnVuZG8sIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXVuZG8nKTtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobGluayk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKHNwYW4pO1xuXHRcdFx0XHR0aGlzLnVuZG9MaW5rID0gc3Bhbjtcblx0XHRcdFx0aWYgKCFvblVwbG9hZCkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy51cERvd25MaW5rcykge1xuXHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmxhc3RTYXZlZEV4aXN0cyA/ICcnIDogJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW5rU3Bhbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR0aGlzLnN0YXRlID0gQ0hBTkdFRDtcblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdH1cblx0XHRjb21taXQoKSB7XG5cdFx0XHQvLyBDaGVjayBhZ2FpbiB0byBjYXRjaCBwcm9ibGVtIGNhc2VzIGFmdGVyIHJlZGlyZWN0IHJlc29sdXRpb25cblx0XHRcdGlmIChcblx0XHRcdFx0KHRoaXMuY3VycmVudENhdGVnb3J5ID09PSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgJiZcblx0XHRcdFx0XHQodGhpcy5jdXJyZW50S2V5ID09PSB0aGlzLm9yaWdpbmFsS2V5IHx8XG5cdFx0XHRcdFx0XHQodGhpcy5jdXJyZW50S2V5ID09PSBudWxsICYmIHRoaXMub3JpZ2luYWxLZXkubGVuZ3RoID09PSAwKSkpIHx8XG5cdFx0XHRcdChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAxNCAmJiB0aGlzLmN1cnJlbnRDYXRlZ29yeSA9PT0gY29uZi53Z1RpdGxlKSB8fFxuXHRcdFx0XHQoSEMuYmxhY2tsaXN0ICYmIEhDLmJsYWNrbGlzdC50ZXN0KHRoaXMuY3VycmVudENhdGVnb3J5KSlcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHRpZiAoIWNvbW1pdEJ1dHRvbiAmJiAhb25VcGxvYWQpIHtcblx0XHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSwgc2VsZik7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0XHRtdy5ub3RpZnkobXNnLCB7dGFnOiAnaG90Q2F0J30pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVtb3ZlKGV2ZW50KSB7XG5cdFx0XHQvLyAoZXZ0S2V5cyhldmVudCkgJiAxKVxuXHRcdFx0Ly8g5b2T5LiU5LuF5b2TZXZ0S2V5cyhldmVudCnkuLox5pe277yM5pW05Liq5Yik5Yir5byP5omN5Li6Me+8jOWQpuWImemDveaYrzBcblx0XHRcdHRoaXMuZG9SZW1vdmUoZXZ0S2V5cyhldmVudCkgPT09IDEpO1xuXHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdH1cblx0XHRkb1JlbW92ZShub0NvbW1pdCkge1xuXHRcdFx0aWYgKHRoaXMuaXNBZGRDYXRlZ29yeSkge1xuXHRcdFx0XHQvLyBFbXB0eSBpbnB1dCBvbiBhZGRpbmcgYSBuZXcgY2F0ZWdvcnlcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjb21taXRCdXR0b24gJiYgIW9uVXBsb2FkKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdFx0XHRpZiAoZWRpdG9yLnN0YXRlICE9PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0XHRcdHNldE11bHRpSW5wdXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGNvbW1pdEJ1dHRvbikge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSAnJztcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmNzc1RleHQgKz0gJzsgdGV4dC1kZWNvcmF0aW9uIDogbGluZS10aHJvdWdoICFpbXBvcnRhbnQ7Jztcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLm9yaWdpbmFsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gREVMRVRFRDtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR0aGlzLnVuZGVsTGluay5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0fSBlbHNlIGlmIChvblVwbG9hZCkge1xuXHRcdFx0XHQvLyBSZW1vdmUgdGhpcyBlZGl0b3IgY29tcGxldGVseVxuXHRcdFx0XHR0aGlzLnJlbW92ZUVkaXRvcigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IERFTEVURUQ7XG5cdFx0XHRcdHRoaXMubm9Db21taXQgPSBub0NvbW1pdCB8fCBIQy5kZWxfbmVlZHNfZGlmZjtcblx0XHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSwgc2VsZik7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLnN0YXRlID0gc2VsZi5vcmlnaW5hbFN0YXRlO1xuXHRcdFx0XHRcdFx0bXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlc3RvcmUoZXZlbnQpIHtcblx0XHRcdC8vIENhbiBvY2N1ciBvbmx5IGlmIHdlIGRvIGhhdmUgYSBjb21taXQgYnV0dG9uIGFuZCBhcmUgbm90IG9uIHRoZSB1cGxvYWQgZm9ybVxuXHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJyc7XG5cdFx0XHR0aGlzLnN0YXRlID0gdGhpcy5vcmlnaW5hbFN0YXRlO1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUgPT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubm9ybWFsTGlua3Muc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdH1cblx0XHQvLyBJbnRlcm5hbCBvcGVyYXRpb25zXG5cdFx0c2VsZWN0RW5naW5lKGVuZ2luZU5hbWUpIHtcblx0XHRcdGlmICghdGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5naW5lU2VsZWN0b3Iub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSB0aGlzLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbaV0udmFsdWUgPT09IGVuZ2luZU5hbWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNhbml0aXplSW5wdXQoKSB7XG5cdFx0XHRsZXQgdiA9IHRoaXMudGV4dC52YWx1ZSB8fCAnJztcblx0XHRcdHYgPSB2LnJlcGxhY2UoL14oXFxzfF8pKy8sICcnKTsgLy8gVHJpbSBsZWFkaW5nIGJsYW5rcyBhbmQgdW5kZXJzY29yZXNcblx0XHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgXigke0hDLmNhdGVnb3J5X3JlZ2V4cH0pOmApO1xuXHRcdFx0aWYgKHJlLnRlc3QodikpIHtcblx0XHRcdFx0diA9IHYuc2xpY2UoTWF0aC5tYXgoMCwgdi5pbmRleE9mKCc6JykgKyAxKSkucmVwbGFjZSgvXihcXHN8XykrLywgJycpO1xuXHRcdFx0fVxuXHRcdFx0diA9IHYucmVwbGFjZSgvXFx1MjAwRSQvLCAnJyk7IC8vIFRyaW0gZW5kaW5nIGxlZnQtdG8tcmlnaHQgbWFya1xuXHRcdFx0aWYgKEhDLmNhcGl0YWxpemVQYWdlTmFtZXMpIHtcblx0XHRcdFx0diA9IGNhcGl0YWxpemUodik7XG5cdFx0XHR9XG5cdFx0XHQvLyBPbmx5IHVwZGF0ZSB0aGUgaW5wdXQgZmllbGQgaWYgdGhlcmUgaXMgYSBkaWZmZXJlbmNlLiBWYXJpb3VzIGJyb3dzZXJzIG90aGVyd2lzZVxuXHRcdFx0Ly8gcmVzZXQgdGhlIHNlbGVjdGlvbiBhbmQgY3Vyc29yIHBvc2l0aW9uIGFmdGVyIGVhY2ggdmFsdWUgcmUtYXNzaWdubWVudC5cblx0XHRcdGlmICh0aGlzLnRleHQudmFsdWUgIT09IG51bGwgJiYgdGhpcy50ZXh0LnZhbHVlICE9PSB2KSB7XG5cdFx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IHY7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG1ha2VDYWxsKHVybCwgY2FsbGJhY2tPYmosIGVuZ2luZSwgcXVlcnlLZXksIGNsZWFuS2V5KSB7XG5cdFx0XHRsZXQgY2IgPSBjYWxsYmFja09iajtcblx0XHRcdGNvbnN0IGUgPSBlbmdpbmU7XG5cdFx0XHRjb25zdCB2ID0gcXVlcnlLZXk7XG5cdFx0XHRjb25zdCB6ID0gY2xlYW5LZXk7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdGNvbnN0IGRvbmUgPSAoKSA9PiB7XG5cdFx0XHRcdGNiLmNhbGxzTWFkZSsrO1xuXHRcdFx0XHRpZiAoY2IuY2FsbHNNYWRlID09PSBjYi5ub2ZDYWxscykge1xuXHRcdFx0XHRcdGlmIChjYi5leGlzdHMpIHtcblx0XHRcdFx0XHRcdGNiLmFsbFRpdGxlcy5leGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2Iubm9ybWFsaXplZCkge1xuXHRcdFx0XHRcdFx0Y2IuYWxsVGl0bGVzLm5vcm1hbGl6ZWQgPSBjYi5ub3JtYWxpemVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIWNiLmRvbnRDYWNoZSAmJiAhc3VnZ2VzdGlvbkNvbmZpZ3NbY2IuZW5naW5lTmFtZV0uY2FjaGVbel0pIHtcblx0XHRcdFx0XHRcdHN1Z2dlc3Rpb25Db25maWdzW2NiLmVuZ2luZU5hbWVdLmNhY2hlW3pdID0gY2IuYWxsVGl0bGVzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzZWxmLnRleHQucmVhZE9ubHkgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAoIWNiLmNhbmNlbGxlZCkge1xuXHRcdFx0XHRcdFx0c2VsZi5zaG93U3VnZ2VzdGlvbnMoY2IuYWxsVGl0bGVzLCBjYi5ub0NvbXBsZXRpb24sIHYsIGNiLmVuZ2luZU5hbWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2IgPT09IHNlbGYuY2FsbGJhY2tPYmopIHtcblx0XHRcdFx0XHRcdHNlbGYuY2FsbGJhY2tPYmogPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYiA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdCQuZ2V0SlNPTih1cmwsIChqc29uKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHRpdGxlcyA9IGUuaGFuZGxlcihqc29uLCB6KTtcblx0XHRcdFx0aWYgKHRpdGxlcyAmJiB0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNiLmFsbFRpdGxlcyA9XG5cdFx0XHRcdFx0XHRjYi5hbGxUaXRsZXMgPT09IG51bGxcblx0XHRcdFx0XHRcdFx0PyB0aXRsZXNcblx0XHRcdFx0XHRcdFx0OiBbLi4uY2IuYWxsVGl0bGVzLCAuLi4oQXJyYXkuaXNBcnJheSh0aXRsZXMpID8gdGl0bGVzIDogW3RpdGxlc10pXTtcblx0XHRcdFx0XHRpZiAodGl0bGVzLmV4aXN0cykge1xuXHRcdFx0XHRcdFx0Y2IuZXhpc3RzID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRpdGxlcy5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0XHRjYi5ub3JtYWxpemVkID0gdGl0bGVzLm5vcm1hbGl6ZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGRvbmUoKTtcblx0XHRcdH0pLmZhaWwoKHJlcSkgPT4ge1xuXHRcdFx0XHRpZiAoIXJlcSkge1xuXHRcdFx0XHRcdG5vU3VnZ2VzdGlvbnMgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNiLmRvbnRDYWNoZSA9IHRydWU7XG5cdFx0XHRcdGRvbmUoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRjYWxsYmFja09iaiA9IG51bGw7XG5cdFx0dGV4dGNoYW5nZShkb250X2F1dG9jb21wbGV0ZSwgZm9yY2UpIHtcblx0XHRcdC8vIEhpZGUgYWxsIG90aGVyIGxpc3RzXG5cdFx0XHRtYWtlQWN0aXZlKHRoaXMpO1xuXHRcdFx0Ly8gR2V0IGlucHV0IHZhbHVlLCBvbWl0IHNvcnQga2V5LCBpZiBhbnlcblx0XHRcdHRoaXMuc2FuaXRpemVJbnB1dCgpO1xuXHRcdFx0bGV0IHYgPSB0aGlzLnRleHQudmFsdWU7XG5cdFx0XHQvLyBEaXNyZWdhcmQgYW55dGhpbmcgYWZ0ZXIgYSBwaXBlLlxuXHRcdFx0Y29uc3QgcGlwZSA9IHYuaW5kZXhPZignfCcpO1xuXHRcdFx0aWYgKHBpcGUgPj0gMCkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB2LnNsaWNlKE1hdGgubWF4KDAsIHBpcGUgKyAxKSk7XG5cdFx0XHRcdHYgPSB2LnNsaWNlKDAsIE1hdGgubWF4KDAsIHBpcGUpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudEtleSA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5sYXN0SW5wdXQgPT09IHYgJiYgIWZvcmNlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gLy8gTm8gY2hhbmdlXG5cdFx0XHRpZiAodGhpcy5sYXN0SW5wdXQgIT09IHYpIHtcblx0XHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHY7XG5cdFx0XHR0aGlzLmxhc3RSZWFsSW5wdXQgPSB2O1xuXHRcdFx0Ly8gTWFyayBibGFja2xpc3RlZCBpbnB1dHMuXG5cdFx0XHR0aGlzLm9rLmRpc2FibGVkID0gdi5sZW5ndGggPiAwICYmIEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh2KTtcblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdC8vIE5vIEFqYXg6IGp1c3QgbWFrZSBzdXJlIHRoZSBsaXN0IGlzIGhpZGRlblxuXHRcdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdHRoaXMuaWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLnNob3dTdWdnZXN0aW9ucyhbXSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCBjbGVhbktleSA9IHYucmVwbGFjZSgvW1xcdTIwMEVcXHUyMDBGXFx1MjAyQS1cXHUyMDJFXS9nLCAnJykucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsICcgJyk7XG5cdFx0XHRjbGVhbktleSA9IHJlcGxhY2VTaG9ydGN1dHMoY2xlYW5LZXksIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHRjbGVhbktleSA9IGNsZWFuS2V5LnRyaW0oKTtcblx0XHRcdGlmIChjbGVhbktleS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5zaG93U3VnZ2VzdGlvbnMoW10pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5jYWxsYmFja09iaikge1xuXHRcdFx0XHR0aGlzLmNhbGxiYWNrT2JqLmNhbmNlbGxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBlbmdpbmVOYW1lID0gc3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdID8gdGhpcy5lbmdpbmUgOiAnY29tYmluZWQnO1xuXHRcdFx0ZG9udF9hdXRvY29tcGxldGUgfHw9IHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLm5vQ29tcGxldGlvbjtcblx0XHRcdGlmIChzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS5jYWNoZVtjbGVhbktleV0pIHtcblx0XHRcdFx0dGhpcy5zaG93U3VnZ2VzdGlvbnMoc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0uY2FjaGVbY2xlYW5LZXldLCBkb250X2F1dG9jb21wbGV0ZSwgdiwgZW5naW5lTmFtZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHtlbmdpbmVzfSA9IHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdO1xuXHRcdFx0dGhpcy5jYWxsYmFja09iaiA9IHtcblx0XHRcdFx0YWxsVGl0bGVzOiBudWxsLFxuXHRcdFx0XHRjYWxsc01hZGU6IDAsXG5cdFx0XHRcdG5vZkNhbGxzOiBlbmdpbmVzLmxlbmd0aCxcblx0XHRcdFx0bm9Db21wbGV0aW9uOiBkb250X2F1dG9jb21wbGV0ZSxcblx0XHRcdFx0ZW5naW5lTmFtZSxcblx0XHRcdH07XG5cdFx0XHR0aGlzLm1ha2VDYWxscyhlbmdpbmVzLCB0aGlzLmNhbGxiYWNrT2JqLCB2LCBjbGVhbktleSk7XG5cdFx0fVxuXHRcdG1ha2VDYWxscyhlbmdpbmVzLCBjYiwgdiwgY2xlYW5LZXkpIHtcblx0XHRcdGZvciAoY29uc3QgZW5naW5lXyBvZiBlbmdpbmVzKSB7XG5cdFx0XHRcdGNvbnN0IGVuZ2luZSA9IHN1Z2dlc3Rpb25FbmdpbmVzW2VuZ2luZV9dO1xuXHRcdFx0XHRjb25zdCB1cmwgPSBjb25mLndnU2NyaXB0UGF0aCArIGVuZ2luZS51cmkucmVwbGFjZSgvXFwkMS9nLCBlbmNvZGVVUklDb21wb25lbnQoY2xlYW5LZXkpKTtcblx0XHRcdFx0dGhpcy5tYWtlQ2FsbCh1cmwsIGNiLCBlbmdpbmUsIHYsIGNsZWFuS2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0c2hvd1N1Z2dlc3Rpb25zKHRpdGxlcywgZG9udEF1dG9jb21wbGV0ZSwgcXVlcnlLZXksIGVuZ2luZU5hbWUpIHtcblx0XHRcdHRoaXMudGV4dC5yZWFkT25seSA9IGZhbHNlO1xuXHRcdFx0dGhpcy5kYWIgPSBudWxsO1xuXHRcdFx0dGhpcy5zaG93c0xpc3QgPSBmYWxzZTtcblx0XHRcdGlmICghdGhpcy5saXN0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0dGhpcy5pY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRydWU7IC8vIERlZmF1bHQuLi5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5lbmdpbmVOYW1lID0gZW5naW5lTmFtZTtcblx0XHRcdGlmIChlbmdpbmVOYW1lKSB7XG5cdFx0XHRcdGlmICghdGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lTmFtZSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAocXVlcnlLZXkpIHtcblx0XHRcdFx0aWYgKHRoaXMubGFzdElucHV0LmluZGV4T2YocXVlcnlLZXkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR0aGlzLmxhc3RRdWVyeSAmJlxuXHRcdFx0XHRcdHRoaXMubGFzdElucHV0LmluZGV4T2YodGhpcy5sYXN0UXVlcnkpID09PSAwICYmXG5cdFx0XHRcdFx0dGhpcy5sYXN0UXVlcnkubGVuZ3RoID4gcXVlcnlLZXkubGVuZ3RoXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5sYXN0UXVlcnkgPSBxdWVyeUtleTtcblx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdGxldCB2ID0gdGhpcy50ZXh0LnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRjb25zdCBrZXkgPSB2Lmxlbmd0aCA+IDEgPyBgfCR7dlsxXX1gIDogJyc7XG5cdFx0XHR2ID0gSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA/IGNhcGl0YWxpemUodlswXSkgOiB2WzBdO1xuXHRcdFx0bGV0IHZOb3JtYWxpemVkID0gdjtcblx0XHRcdGNvbnN0IGtub3duVG9FeGlzdCA9IHRpdGxlcyAmJiB0aXRsZXMuZXhpc3RzO1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRpZiAodGl0bGVzKSB7XG5cdFx0XHRcdGlmICh0aXRsZXMubm9ybWFsaXplZCAmJiB2LmluZGV4T2YocXVlcnlLZXkpID09PSAwKSB7XG5cdFx0XHRcdFx0Ly8gV2UgZ290IGJhY2sgYSBkaWZmZXJlbnQgbm9ybWFsaXphdGlvbiB0aGFuIHdoYXQgaXMgaW4gdGhlIGlucHV0IGZpZWxkXG5cdFx0XHRcdFx0dk5vcm1hbGl6ZWQgPSB0aXRsZXMubm9ybWFsaXplZCArIHYuc2xpY2UocXVlcnlLZXkubGVuZ3RoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB2TG93ID0gdk5vcm1hbGl6ZWQudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0Ly8gU3RyaXAgYmxhY2tsaXN0ZWQgY2F0ZWdvcmllc1xuXHRcdFx0XHRpZiAoSEMuYmxhY2tsaXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKEhDLmJsYWNrbGlzdC50ZXN0KHRpdGxlc1tpXSkpIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aXRsZXMuc29ydCgoYSwgYikgPT4ge1xuXHRcdFx0XHRcdGlmIChhID09PSBiKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGEuaW5kZXhPZihiKSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGEgYmVnaW5zIHdpdGggYjogYSA+IGJcblx0XHRcdFx0XHRpZiAoYi5pbmRleE9mKGEpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGIgYmVnaW5zIHdpdGggYTogYSA8IGJcblx0XHRcdFx0XHQvLyBPcGVuc2VhcmNoIG1heSByZXR1cm4gc3R1ZmYgbm90IGJlZ2lubmluZyB3aXRoIHRoZSBzZWFyY2ggcHJlZml4IVxuXHRcdFx0XHRcdGxldCBwcmVmaXhNYXRjaEEgPSBhLmluZGV4T2Yodk5vcm1hbGl6ZWQpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0bGV0IHByZWZpeE1hdGNoQiA9IGIuaW5kZXhPZih2Tm9ybWFsaXplZCkgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRpZiAocHJlZml4TWF0Y2hBICE9PSBwcmVmaXhNYXRjaEIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBwcmVmaXhNYXRjaEIgLSBwcmVmaXhNYXRjaEE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIENhc2UtaW5zZW5zaXRpdmUgcHJlZml4IG1hdGNoIVxuXHRcdFx0XHRcdGNvbnN0IGFMb3cgPSBhLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0Y29uc3QgYkxvdyA9IGIudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRwcmVmaXhNYXRjaEEgPSBhTG93LmluZGV4T2YodkxvdykgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRwcmVmaXhNYXRjaEIgPSBiTG93LmluZGV4T2YodkxvdykgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRpZiAocHJlZml4TWF0Y2hBICE9PSBwcmVmaXhNYXRjaEIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBwcmVmaXhNYXRjaEIgLSBwcmVmaXhNYXRjaEE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChhIDwgYikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYiA8IGEpIHtcblx0XHRcdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIFJlbW92ZSBkdXBsaWNhdGVzIGFuZCBzZWxmLXJlZmVyZW5jZXNcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdChpICsgMSA8IHRpdGxlcy5sZW5ndGggJiYgdGl0bGVzW2ldID09PSB0aXRsZXNbaSArIDFdKSB8fFxuXHRcdFx0XHRcdFx0KGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHRpdGxlc1tpXSA9PT0gY29uZi53Z1RpdGxlKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0dGl0bGVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghdGl0bGVzIHx8IHRpdGxlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlbmdpbmVOYW1lICYmIHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdICYmICFzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS50ZW1wKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdFx0dGhpcy5pY29uLnNyYyA9IEhDLmV4aXN0c05vO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgW2ZpcnN0VGl0bGVdID0gdGl0bGVzO1xuXHRcdFx0Y29uc3QgY29tcGxldGVkID0gdGhpcy5hdXRvQ29tcGxldGUoZmlyc3RUaXRsZSwgdiwgdk5vcm1hbGl6ZWQsIGtleSwgZG9udEF1dG9jb21wbGV0ZSk7XG5cdFx0XHRjb25zdCBleGlzdGluZyA9IGNvbXBsZXRlZCB8fCBrbm93blRvRXhpc3QgfHwgZmlyc3RUaXRsZSA9PT0gcmVwbGFjZVNob3J0Y3V0cyh2LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0aWYgKGVuZ2luZU5hbWUgJiYgc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0gJiYgIXN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLnRlbXApIHtcblx0XHRcdFx0dGhpcy5pY29uLnNyYyA9IGV4aXN0aW5nID8gSEMuZXhpc3RzWWVzIDogSEMuZXhpc3RzTm87XG5cdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSBleGlzdGluZztcblx0XHRcdH1cblx0XHRcdGlmIChjb21wbGV0ZWQpIHtcblx0XHRcdFx0dGhpcy5sYXN0SW5wdXQgPSBmaXJzdFRpdGxlO1xuXHRcdFx0XHRpZiAodGl0bGVzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gKFJlLSlmaWxsIHRoZSBsaXN0XG5cdFx0XHR3aGlsZSAodGhpcy5saXN0LmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0dGhpcy5saXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IG9wdCA9IG1ha2UoJ29wdGlvbicpO1xuXHRcdFx0XHRvcHQuYXBwZW5kKG1ha2UodGl0bGVzW2ldLCB0cnVlKSk7XG5cdFx0XHRcdG9wdC5zZWxlY3RlZCA9IGNvbXBsZXRlZCAmJiBpID09PSAwO1xuXHRcdFx0XHR0aGlzLmxpc3QuYXBwZW5kKG9wdCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRpc3BsYXlMaXN0KCk7XG5cdFx0fVxuXHRcdGRpc3BsYXlMaXN0KCkge1xuXHRcdFx0dGhpcy5zaG93c0xpc3QgPSB0cnVlO1xuXHRcdFx0aWYgKCF0aGlzLmlzX2FjdGl2ZSkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IG5vZkl0ZW1zID0gdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoID4gSEMubGlzdFNpemUgPyBIQy5saXN0U2l6ZSA6IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aDtcblx0XHRcdGlmIChub2ZJdGVtcyA8PSAxKSB7XG5cdFx0XHRcdG5vZkl0ZW1zID0gMjtcblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdC5zaXplID0gbm9mSXRlbXM7XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUuYWxpZ24gPSBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdFx0dGhpcy5saXN0LnN0eWxlLnpJbmRleCA9IDU7XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdFx0Ly8gQ29tcHV0ZSBpbml0aWFsIGxpc3QgcG9zaXRpb24uIEZpcnN0IHRoZSBoZWlnaHQuXG5cdFx0XHRjb25zdCBhbmNob3IgPSBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdFx0bGV0IGxpc3RoID0gMDtcblx0XHRcdGlmICh0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdC8vIE9mZi1zY3JlZW4gZGlzcGxheSB0byBnZXQgdGhlIGhlaWdodFxuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUudG9wID0gYCR7dGhpcy50ZXh0Lm9mZnNldFRvcH1weGA7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZVthbmNob3JdID0gJy0xMDAwMHB4Jztcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdFx0bGlzdGggPSB0aGlzLmxpc3Qub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxpc3RoID0gdGhpcy5saXN0Lm9mZnNldEhlaWdodDtcblx0XHRcdH1cblx0XHRcdC8vIEFwcHJveGltYXRlIGNhbGN1bGF0aW9uIG9mIG1heGltdW0gbGlzdCBzaXplXG5cdFx0XHRsZXQgbWF4TGlzdEhlaWdodCA9IGxpc3RoO1xuXHRcdFx0aWYgKG5vZkl0ZW1zIDwgSEMubGlzdFNpemUpIHtcblx0XHRcdFx0bWF4TGlzdEhlaWdodCA9IChsaXN0aCAvIG5vZkl0ZW1zKSAqIEhDLmxpc3RTaXplO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgdmlld3BvcnQgPSAod2hhdCkgPT4ge1xuXHRcdFx0XHRpZiAoaXNfd2Via2l0ICYmICFkb2N1bWVudC5ldmFsdWF0ZSkge1xuXHRcdFx0XHRcdC8vIFNhZmFyaSA8IDMuMFxuXHRcdFx0XHRcdHJldHVybiB3aW5kb3dbYGlubmVyJHt3aGF0fWBdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHMgPSBgY2xpZW50JHt3aGF0fWA7XG5cdFx0XHRcdGlmICh3aW5kb3cub3BlcmEpIHtcblx0XHRcdFx0XHRyZXR1cm4gJCgnYm9keScpWzBdW3NdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W3NdIDogMCkgfHwgJCgnYm9keScpWzBdW3NdIHx8IDA7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3Qgc2Nyb2xsX29mZnNldCA9ICh3aGF0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHMgPSBgc2Nyb2xsJHt3aGF0fWA7XG5cdFx0XHRcdGxldCByZXN1bHQgPSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W3NdIDogMCkgfHwgJCgnYm9keScpWzBdW3NdIHx8IDA7XG5cdFx0XHRcdGlmIChpc19ydGwgJiYgd2hhdCA9PT0gJ0xlZnQnKSB7XG5cdFx0XHRcdFx0Ly8gUlRMIGluY29uc2lzdGVuY2llcy5cblx0XHRcdFx0XHQvLyBGRjogMCBhdCB0aGUgZmFyIHJpZ2h0LCB0aGVuIGluY3JlYXNpbmdseSBuZWdhdGl2ZSB2YWx1ZXMuXG5cdFx0XHRcdFx0Ly8gSUUgPj0gODogMCBhdCB0aGUgZmFyIHJpZ2h0LCB0aGVuIGluY3JlYXNpbmdseSBwb3NpdGl2ZSB2YWx1ZXMuXG5cdFx0XHRcdFx0Ly8gV2Via2l0OiBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoIGF0IHRoZSBmYXIgcmlnaHQsIHRoZW4gZG93biB0byB6ZXJvLlxuXHRcdFx0XHRcdC8vIE9wZXJhOiBkb24ndCBrbm93Li4uXG5cdFx0XHRcdFx0aWYgKHJlc3VsdCA8IDApIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IC1yZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghaXNfd2Via2l0KSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBzY3JvbGxfb2Zmc2V0KCdXaWR0aCcpIC0gdmlld3BvcnQoJ1dpZHRoJykgLSByZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIE5vdyBhbGwgaGF2ZSB3ZWJraXQgYmVoYXZpb3IsIGkuZS4gemVybyBpZiBhdCB0aGUgbGVmdG1vc3QgZWRnZS5cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0gKG5vZGUpID0+IHtcblx0XHRcdFx0Ly8gU3RyaXBwZWQtZG93biBzaW1wbGlmaWVkIHBvc2l0aW9uIGZ1bmN0aW9uLiBJdCdzIGdvb2QgZW5vdWdoIGZvciBvdXIgcHVycG9zZXMuXG5cdFx0XHRcdGlmIChub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuXHRcdFx0XHRcdGNvbnN0IGJveCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHg6IE1hdGgucm91bmQoYm94LmxlZnQgKyBzY3JvbGxfb2Zmc2V0KCdMZWZ0JykpLFxuXHRcdFx0XHRcdFx0eTogTWF0aC5yb3VuZChib3gudG9wICsgc2Nyb2xsX29mZnNldCgnVG9wJykpLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHQgPSAwO1xuXHRcdFx0XHRsZXQgbCA9IDA7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHR0ICs9IG5vZGUub2Zmc2V0VG9wIHx8IDA7XG5cdFx0XHRcdFx0bCArPSBub2RlLm9mZnNldExlZnQgfHwgMDtcblx0XHRcdFx0XHRub2RlID0gbm9kZS5vZmZzZXRQYXJlbnQ7XG5cdFx0XHRcdH0gd2hpbGUgKG5vZGUpO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHg6IGwsXG5cdFx0XHRcdFx0eTogdCxcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCB0ZXh0UG9zID0gcG9zaXRpb24odGhpcy50ZXh0KTtcblx0XHRcdGNvbnN0IG5sID0gMDtcblx0XHRcdGxldCBudCA9IDA7XG5cdFx0XHQvLyBPcGVyYSA5LjUgc29tZWhvdyBoYXMgb2Zmc2V0V2lkdGggPSAwIGhlcmU/PyBVc2UgdGhlIG5leHQgYmVzdCB2YWx1ZS4uLlxuXHRcdFx0bGV0IG9mZnNldCA9IDA7XG5cdFx0XHRjb25zdCB0ZXh0Qm94V2lkdGggPSB0aGlzLnRleHQub2Zmc2V0V2lkdGggfHwgdGhpcy50ZXh0LmNsaWVudFdpZHRoO1xuXHRcdFx0aWYgKHRoaXMuZW5naW5lTmFtZSkge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnpJbmRleCA9IDU7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLndpZHRoID0gYCR7dGV4dEJveFdpZHRofXB4YDtcblx0XHRcdFx0Ly8gRmlndXJlIG91dCB0aGUgaGVpZ2h0IG9mIHRoaXMgc2VsZWN0b3I6IGRpc3BsYXkgaXQgb2ZmLXNjcmVlbiwgdGhlbiBoaWRlIGl0IGFnYWluLlxuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlW2FuY2hvcl0gPSAnLTEwMDAwcHgnO1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUudG9wID0gJzAnO1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0XHRcdG9mZnNldCA9IHRoaXMuZW5naW5lU2VsZWN0b3Iub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRvZmZzZXQgPSB0aGlzLmVuZ2luZVNlbGVjdG9yLm9mZnNldEhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlW2FuY2hvcl0gPSBgJHtubH1weGA7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGV4dFBvcy55IDwgbWF4TGlzdEhlaWdodCArIG9mZnNldCArIDEpIHtcblx0XHRcdFx0Ly8gVGhlIGxpc3QgbWlnaHQgZXh0ZW5kIGJleW9uZCB0aGUgdXBwZXIgYm9yZGVyIG9mIHRoZSBwYWdlLiBMZXQncyBhdm9pZCB0aGF0IGJ5IHBsYWNpbmcgaXRcblx0XHRcdFx0Ly8gYmVsb3cgdGhlIGlucHV0IHRleHQgZmllbGQuXG5cdFx0XHRcdG50ID0gdGhpcy50ZXh0Lm9mZnNldEhlaWdodCArIG9mZnNldCArIDE7XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnRvcCA9IGAke3RoaXMudGV4dC5vZmZzZXRIZWlnaHR9cHhgO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRudCA9IC1saXN0aCAtIG9mZnNldCAtIDE7XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnRvcCA9IGAkey0ob2Zmc2V0ICsgMSl9cHhgO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUudG9wID0gYCR7bnR9cHhgO1xuXHRcdFx0dGhpcy5saXN0LnN0eWxlLndpZHRoID0gJyc7IC8vIE5vIGZpeGVkIHdpZHRoICh5ZXQpXG5cdFx0XHR0aGlzLmxpc3Quc3R5bGVbYW5jaG9yXSA9IGAke25sfXB4YDtcblx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RFbmdpbmUodGhpcy5lbmdpbmVOYW1lKTtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHQvLyBTZXQgdGhlIHdpZHRoIG9mIHRoZSBsaXN0XG5cdFx0XHRpZiAodGhpcy5saXN0Lm9mZnNldFdpZHRoIDwgdGV4dEJveFdpZHRoKSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS53aWR0aCA9IGAke3RleHRCb3hXaWR0aH1weGA7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIElmIHRoZSBsaXN0IGlzIHdpZGVyIHRoYW4gdGhlIHRleHRib3g6IG1ha2Ugc3VyZSBpdCBmaXRzIGhvcml6b250YWxseSBpbnRvIHRoZSBicm93c2VyIHdpbmRvd1xuXHRcdFx0Y29uc3Qgc2Nyb2xsID0gc2Nyb2xsX29mZnNldCgnTGVmdCcpO1xuXHRcdFx0Y29uc3Qgdmlld193ID0gdmlld3BvcnQoJ1dpZHRoJyk7XG5cdFx0XHRsZXQgdyA9IHRoaXMubGlzdC5vZmZzZXRXaWR0aDtcblx0XHRcdGNvbnN0IGxfcG9zID0gcG9zaXRpb24odGhpcy5saXN0KTtcblx0XHRcdGxldCBsZWZ0ID0gbF9wb3MueDtcblx0XHRcdGxldCByaWdodCA9IGxlZnQgKyB3O1xuXHRcdFx0aWYgKGxlZnQgPCBzY3JvbGwgfHwgcmlnaHQgPiBzY3JvbGwgKyB2aWV3X3cpIHtcblx0XHRcdFx0aWYgKHcgPiB2aWV3X3cpIHtcblx0XHRcdFx0XHR3ID0gdmlld193O1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS53aWR0aCA9IGAke3d9cHhgO1xuXHRcdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRcdGxlZnQgPSByaWdodCAtIHc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJpZ2h0ID0gbGVmdCArIHc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCByZWxhdGl2ZV9vZmZzZXQgPSAwO1xuXHRcdFx0XHRpZiAobGVmdCA8IHNjcm9sbCkge1xuXHRcdFx0XHRcdHJlbGF0aXZlX29mZnNldCA9IHNjcm9sbCAtIGxlZnQ7XG5cdFx0XHRcdH0gZWxzZSBpZiAocmlnaHQgPiBzY3JvbGwgKyB2aWV3X3cpIHtcblx0XHRcdFx0XHRyZWxhdGl2ZV9vZmZzZXQgPSAtKHJpZ2h0IC0gc2Nyb2xsIC0gdmlld193KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0cmVsYXRpdmVfb2Zmc2V0ID0gLXJlbGF0aXZlX29mZnNldDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmVsYXRpdmVfb2Zmc2V0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlW2FuY2hvcl0gPSBgJHtubCArIHJlbGF0aXZlX29mZnNldH1weGA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0YXV0b0NvbXBsZXRlKG5ld1ZhbCwgYWN0VmFsLCBub3JtYWxpemVkQWN0VmFsLCBrZXksIGRvbnRNb2RpZnkpIHtcblx0XHRcdGlmIChuZXdWYWwgPT09IGFjdFZhbCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChkb250TW9kaWZ5IHx8IHRoaXMuaW1lIHx8ICF0aGlzLmNhblNlbGVjdCgpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdC8vIElmIHdlIGNhbid0IHNlbGVjdCBwcm9wZXJseSBvciBhbiBJTUUgY29tcG9zaXRpb24gaXMgb25nb2luZywgYXV0b2NvbXBsZXRpb24gd291bGQgYmUgYSBtYWpvciBhbm5veWFuY2UgdG8gdGhlIHVzZXIuXG5cdFx0XHRpZiAobmV3VmFsLmluZGV4T2YoYWN0VmFsKSkge1xuXHRcdFx0XHQvLyBNYXliZSBpdCdsbCB3b3JrIHdpdGggdGhlIG5vcm1hbGl6ZWQgdmFsdWUgKE5GQyk/XG5cdFx0XHRcdGlmIChub3JtYWxpemVkQWN0VmFsICYmIG5ld1ZhbC5pbmRleE9mKG5vcm1hbGl6ZWRBY3RWYWwpID09PSAwKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMubGFzdFJlYWxJbnB1dCA9PT0gYWN0VmFsKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxhc3RSZWFsSW5wdXQgPSBub3JtYWxpemVkQWN0VmFsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhY3RWYWwgPSBub3JtYWxpemVkQWN0VmFsO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gQWN0dWFsIGlucHV0IGlzIGEgcHJlZml4IG9mIHRoZSBuZXcgdGV4dC4gRmlsbCBpbiBuZXcgdGV4dCwgc2VsZWN0aW5nIHRoZSBuZXdseSBhZGRlZCBzdWZmaXhcblx0XHRcdC8vIHN1Y2ggdGhhdCBpdCBjYW4gYmUgZWFzaWx5IHJlbW92ZWQgYnkgdHlwaW5nIGJhY2tzcGFjZSBpZiB0aGUgc3VnZ2VzdGlvbiBpcyB1bndhbnRlZC5cblx0XHRcdHRoaXMudGV4dC5mb2N1cygpO1xuXHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gbmV3VmFsICsga2V5O1xuXHRcdFx0dGhpcy5zZXRTZWxlY3Rpb24oYWN0VmFsLmxlbmd0aCwgbmV3VmFsLmxlbmd0aCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Y2FuU2VsZWN0KCkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dGhpcy50ZXh0LnNldFNlbGVjdGlvblJhbmdlIHx8XG5cdFx0XHRcdHRoaXMudGV4dC5jcmVhdGVUZXh0UmFuZ2UgfHxcblx0XHRcdFx0KHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCAhPT0gdW5kZWZpbmVkICYmIHRoaXMudGV4dC5zZWxlY3Rpb25FbmQgIT09IHVuZGVmaW5lZClcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHNldFNlbGVjdGlvbihmcm9tLCB0bykge1xuXHRcdFx0Ly8gdGhpcy50ZXh0IG11c3QgYmUgZm9jdXNlZCAoYXQgbGVhc3Qgb24gSUUpXG5cdFx0XHRpZiAoIXRoaXMudGV4dC52YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy50ZXh0LnNldFNlbGVjdGlvblJhbmdlKSB7XG5cdFx0XHRcdC8vIGUuZy4ga2h0bWxcblx0XHRcdFx0dGhpcy50ZXh0LnNldFNlbGVjdGlvblJhbmdlKGZyb20sIHRvKTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0aWYgKGZyb20gPiB0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQuc2VsZWN0aW9uRW5kID0gdG87XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ID0gZnJvbTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQgPSBmcm9tO1xuXHRcdFx0XHRcdHRoaXMudGV4dC5zZWxlY3Rpb25FbmQgPSB0bztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnRleHQuY3JlYXRlVGV4dFJhbmdlKSB7XG5cdFx0XHRcdC8vIElFXG5cdFx0XHRcdGNvbnN0IG5ld19zZWxlY3Rpb24gPSB0aGlzLnRleHQuY3JlYXRlVGV4dFJhbmdlKCk7XG5cdFx0XHRcdG5ld19zZWxlY3Rpb24ubW92ZSgnY2hhcmFjdGVyJywgZnJvbSk7XG5cdFx0XHRcdG5ld19zZWxlY3Rpb24ubW92ZUVuZCgnY2hhcmFjdGVyJywgdG8gLSBmcm9tKTtcblx0XHRcdFx0bmV3X3NlbGVjdGlvbi5zZWxlY3QoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Z2V0U2VsZWN0aW9uKCkge1xuXHRcdFx0bGV0IGZyb20gPSAwO1xuXHRcdFx0Ly8gdGhpcy50ZXh0IG11c3QgYmUgZm9jdXNlZCAoYXQgbGVhc3Qgb24gSUUpXG5cdFx0XHRsZXQgdG8gPSAwO1xuXHRcdFx0aWYgKCF0aGlzLnRleHQudmFsdWUpIHtcblx0XHRcdFx0Ly8gTm8gdGV4dC5cblx0XHRcdH0gZWxzZSBpZiAodGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZnJvbSA9IHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydDtcblx0XHRcdFx0dG8gPSB0aGlzLnRleHQuc2VsZWN0aW9uRW5kO1xuXHRcdFx0fSBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKSB7XG5cdFx0XHRcdC8vIElFXG5cdFx0XHRcdGNvbnN0IHJuZyA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLmR1cGxpY2F0ZSgpO1xuXHRcdFx0XHRpZiAocm5nLnBhcmVudE5vZGUoKSA9PT0gdGhpcy50ZXh0KSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGNvbnN0IHRleHRSbmcgPSB0aGlzLnRleHQuY3JlYXRlVGV4dFJhbmdlKCk7XG5cdFx0XHRcdFx0XHR0ZXh0Um5nLm1vdmUoJ2NoYXJhY3RlcicsIDApO1xuXHRcdFx0XHRcdFx0dGV4dFJuZy5zZXRFbmRQb2ludCgnRW5kVG9FbmQnLCBybmcpO1xuXHRcdFx0XHRcdFx0Ly8gV2UncmUgaW4gYSBzaW5nbGUtbGluZSBpbnB1dCBib3g6IG5vIG5lZWQgdG8gY2FyZSBhYm91dCBJRSdzIHN0cmFuZ2Vcblx0XHRcdFx0XHRcdC8vIGhhbmRsaW5nIG9mIGxpbmUgZW5kc1xuXHRcdFx0XHRcdFx0dG8gPSB0ZXh0Um5nLnRleHQubGVuZ3RoO1xuXHRcdFx0XHRcdFx0dGV4dFJuZy5zZXRFbmRQb2ludCgnRW5kVG9TdGFydCcsIHJuZyk7XG5cdFx0XHRcdFx0XHRmcm9tID0gdGV4dFJuZy50ZXh0Lmxlbmd0aDtcblx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdGZyb20gPSB0aGlzLnRleHQudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0dG8gPSBmcm9tOyAvLyBBdCBlbmQgb2YgdGV4dFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c3RhcnQ6IGZyb20sXG5cdFx0XHRcdGVuZDogdG8sXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRzYXZlVmlldygpIHtcblx0XHRcdHRoaXMubGFzdFNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCk7XG5cdFx0fVxuXHRcdHByb2Nlc3NLZXkoZXZlbnQpIHtcblx0XHRcdGxldCBkaXIgPSAwO1xuXHRcdFx0c3dpdGNoICh0aGlzLmxhc3RLZXkpIHtcblx0XHRcdFx0Y2FzZSBVUDpcblx0XHRcdFx0XHRkaXIgPSAtMTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBET1dOOlxuXHRcdFx0XHRcdGRpciA9IDE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgUEdVUDpcblx0XHRcdFx0XHRkaXIgPSAtSEMubGlzdFNpemU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgUEdET1dOOlxuXHRcdFx0XHRcdGRpciA9IEhDLmxpc3RTaXplO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIEVTQzpcblx0XHRcdFx0XHQvLyBJbmhpYml0IGRlZmF1bHQgYmVoYXZpb3IgKHJldmVydCB0byBsYXN0IHJlYWwgaW5wdXQgaW4gRkY6IHdlIGRvIHRoYXQgb3Vyc2VsdmVzKVxuXHRcdFx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHRcdH1cblx0XHRcdGlmIChkaXIpIHtcblx0XHRcdFx0aWYgKHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcblx0XHRcdFx0XHQvLyBMaXN0IGlzIHZpc2libGUsIHNvIHRoZXJlIGFyZSBzdWdnZXN0aW9uc1xuXHRcdFx0XHRcdHRoaXMuaGlnaGxpZ2h0U3VnZ2VzdGlvbihkaXIpO1xuXHRcdFx0XHRcdC8vIEtpbGwgdGhlIGV2ZW50LCBvdGhlcndpc2Ugc29tZSBicm93c2VycyAoZS5nLiwgRmlyZWZveCkgbWF5IGFkZGl0aW9uYWxseSB0cmVhdCBhbiB1cC1hcnJvd1xuXHRcdFx0XHRcdC8vIGFzIFwicGxhY2UgdGhlIHRleHQgY3Vyc29yIGF0IHRoZSBmcm9udFwiLCB3aGljaCB3ZSBkb24ndCB3YW50IGhlcmUuXG5cdFx0XHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdHRoaXMua2V5Q291bnQgPD0gMSAmJlxuXHRcdFx0XHRcdCghdGhpcy5jYWxsYmFja09iaiB8fCB0aGlzLmNhbGxiYWNrT2JqLmNhbGxzTWFkZSA9PT0gdGhpcy5jYWxsYmFja09iai5ub2ZDYWxscylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Ly8gSWYgbm8gc3VnZ2VzdGlvbnMgZGlzcGxheWVkLCBnZXQgdGhlbSwgdW5sZXNzIHdlJ3JlIGFscmVhZHkgZ2V0dGluZyB0aGVtLlxuXHRcdFx0XHRcdHRoaXMudGV4dGNoYW5nZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0aGlnaGxpZ2h0U3VnZ2VzdGlvbihkaXIpIHtcblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zIHx8ICF0aGlzLmxpc3QgfHwgdGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjdXJyID0gdGhpcy5saXN0LnNlbGVjdGVkSW5kZXg7XG5cdFx0XHRsZXQgdGd0ID0gLTE7XG5cdFx0XHRpZiAoZGlyID09PSAwKSB7XG5cdFx0XHRcdGlmIChjdXJyIDwgMCB8fCBjdXJyID49IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0Z3QgPSBjdXJyO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGd0ID0gY3VyciA8IDAgPyAwIDogY3VyciArIGRpcjtcblx0XHRcdFx0dGd0ID0gdGd0IDwgMCA/IDAgOiB0Z3Q7XG5cdFx0XHRcdGlmICh0Z3QgPj0gdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dGd0ID0gdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoIC0gMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRndCAhPT0gY3VyciB8fCBkaXIgPT09IDApIHtcblx0XHRcdFx0aWYgKGN1cnIgPj0gMCAmJiBjdXJyIDwgdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoICYmIGRpciAhPT0gMCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5vcHRpb25zW2N1cnJdLnNlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5saXN0Lm9wdGlvbnNbdGd0XS5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdFx0Y29uc3QgdiA9IHRoaXMudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRjb25zdCBrZXkgPSB2Lmxlbmd0aCA+IDEgPyBgfCR7dlsxXX1gIDogJyc7XG5cdFx0XHRcdGNvbnN0IGNvbXBsZXRlZCA9IHRoaXMuYXV0b0NvbXBsZXRlKHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dCwgdGhpcy5sYXN0UmVhbElucHV0LCBudWxsLCBrZXksIGZhbHNlKTtcblx0XHRcdFx0aWYgKCFjb21wbGV0ZWQgfHwgdGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0ID09PSB0aGlzLmxhc3RSZWFsSW5wdXQpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQudmFsdWUgPSB0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQgKyBrZXk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuY2FuU2VsZWN0KCkpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U2VsZWN0aW9uKHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dC5sZW5ndGgsIHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dC5sZW5ndGgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dDtcblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRydWU7IC8vIE1pZ2h0IGJlIHdyb25nIGlmIGZyb20gYSBkYWIgbGlzdC4uLlxuXHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0dGhpcy5pY29uLnNyYyA9IEhDLmV4aXN0c1llcztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gQ0hBTkdFX1BFTkRJTkc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmVzZXRLZXlTZWxlY3Rpb24oKSB7XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucyB8fCAhdGhpcy5saXN0IHx8IHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY3VyciA9IHRoaXMubGlzdC5zZWxlY3RlZEluZGV4O1xuXHRcdFx0aWYgKGN1cnIgPj0gMCAmJiBjdXJyIDwgdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMubGlzdC5vcHRpb25zW2N1cnJdLnNlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdFx0Y29uc3QgdiA9IHRoaXMudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRjb25zdCBrZXkgPSB2Lmxlbmd0aCA+IDEgPyBgfCR7dlsxXX1gIDogJyc7XG5cdFx0XHRcdC8vIEVTQyBpcyBoYW5kbGVkIHN0cmFuZ2VseSBieSBzb21lIGJyb3dzZXJzIChlLmcuLCBGRik7IHNvbWVob3cgaXQgcmVzZXRzIHRoZSBpbnB1dCB2YWx1ZSBiZWZvcmVcblx0XHRcdFx0Ly8gb3VyIGV2ZW50IGhhbmRsZXJzIGV2ZXIgZ2V0IGEgY2hhbmNlIHRvIHJ1bi5cblx0XHRcdFx0bGV0IHJlc3VsdCA9IHZbMF0gIT09IHRoaXMubGFzdElucHV0O1xuXHRcdFx0XHRpZiAodlswXSAhPT0gdGhpcy5sYXN0UmVhbElucHV0KSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gdGhpcy5sYXN0UmVhbElucHV0ICsga2V5O1xuXHRcdFx0XHRcdHJlc3VsdCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB0aGlzLmxhc3RSZWFsSW5wdXQ7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG5cdFx0Ly8gVXNlciBjb25maWd1cmF0aW9uczogRG8gdGhpcyBoZXJlLCBjYWxsZWQgZnJvbSB0aGUgb25sb2FkIGhhbmRsZXIsIHNvIHRoYXQgdXNlcnMgY2FuXG5cdFx0Ly8gb3ZlcnJpZGUgaXQgZWFzaWx5IGluIHRoZWlyIG93biB1c2VyIHNjcmlwdCBmaWxlcyBieSBqdXN0IGRlY2xhcmluZyB2YXJpYWJsZXMuXG5cdFx0Y29uc3QgY29uZmlnID0ge307XG5cdFx0SEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0ID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfZG9udF9hZGRfdG9fd2F0Y2hsaXN0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0RG9udEFkZFRvV2F0Y2hsaXN0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdFxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdERvbnRBZGRUb1dhdGNobGlzdFxuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9kb250X2FkZF90b193YXRjaGxpc3Q7XG5cdFx0SEMubm9fYXV0b2NvbW1pdCA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X25vX2F1dG9jb21taXQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXROb0F1dG9Db21taXQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gY29uZi53Z05hbWVzcGFjZU51bWJlciAlIDJcblx0XHRcdFx0XHRcdD8gdHJ1ZVxuXHRcdFx0XHRcdFx0OiBIQy5ub19hdXRvY29tbWl0IC8vIE9uIHRhbGsgbmFtZXNwYWNlIGRlZmF1bHQgYXV0b2NvbW1pdCBvZmZcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXROb0F1dG9Db21taXRcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfbm9fYXV0b2NvbW1pdDtcblx0XHRIQy5kZWxfbmVlZHNfZGlmZiA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X2RlbF9uZWVkc19kaWZmID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0RGVsTmVlZHNEaWZmID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLmRlbF9uZWVkc19kaWZmXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0RGVsTmVlZHNEaWZmXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X2RlbF9uZWVkc19kaWZmO1xuXHRcdEhDLnN1Z2dlc3RfZGVsYXkgPSB3aW5kb3cuaG90Y2F0X3N1Z2dlc3Rpb25fZGVsYXkgfHwgY29uZmlnLkhvdENhdFN1Z2dlc3Rpb25EZWxheSB8fCBIQy5zdWdnZXN0X2RlbGF5O1xuXHRcdEhDLmVkaXRib3hfd2lkdGggPSB3aW5kb3cuaG90Y2F0X2VkaXRib3hfd2lkdGggfHwgY29uZmlnLkhvdENhdEVkaXRCb3hXaWR0aCB8fCBIQy5lZGl0Ym94X3dpZHRoO1xuXHRcdEhDLnN1Z2dlc3Rpb25zID0gd2luZG93LmhvdGNhdF9zdWdnZXN0aW9ucyB8fCBjb25maWcuSG90Q2F0U3VnZ2VzdGlvbnMgfHwgSEMuc3VnZ2VzdGlvbnM7XG5cdFx0aWYgKHR5cGVvZiBIQy5zdWdnZXN0aW9ucyAhPT0gJ3N0cmluZycgfHwgIXN1Z2dlc3Rpb25Db25maWdzW0hDLnN1Z2dlc3Rpb25zXSkge1xuXHRcdFx0SEMuc3VnZ2VzdGlvbnMgPSAnY29tYmluZWQnO1xuXHRcdH1cblx0XHRIQy5maXhlZF9zZWFyY2ggPVxuXHRcdFx0d2luZG93LmhvdGNhdF9zdWdnZXN0aW9uc19maXhlZCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdEZpeGVkU3VnZ2VzdGlvbnMgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuZml4ZWRfc2VhcmNoXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0Rml4ZWRTdWdnZXN0aW9uc1xuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9zdWdnZXN0aW9uc19maXhlZDtcblx0XHRIQy5zaW5nbGVfbWlub3IgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9zaW5nbGVfY2hhbmdlc19hcmVfbWlub3IgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXRNaW5vclNpbmdsZUNoYW5nZXMgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuc2luZ2xlX21pbm9yXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0TWlub3JTaW5nbGVDaGFuZ2VzXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X3NpbmdsZV9jaGFuZ2VzX2FyZV9taW5vcjtcblx0XHRIQy5iZ19jaGFuZ2VkID0gd2luZG93LmhvdGNhdF9jaGFuZ2VkX2JhY2tncm91bmQgfHwgY29uZmlnLkhvdENhdENoYW5nZWRCYWNrZ3JvdW5kIHx8IEhDLmJnX2NoYW5nZWQ7XG5cdFx0SEMudXNlX3VwX2Rvd24gPVxuXHRcdFx0d2luZG93LmhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3MgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXRVc2VDYXRlZ29yeUxpbmtzID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLnVzZV91cF9kb3duXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0VXNlQ2F0ZWdvcnlMaW5rc1xuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3M7XG5cdFx0SEMubGlzdFNpemUgPSB3aW5kb3cuaG90Y2F0X2xpc3Rfc2l6ZSB8fCBjb25maWcuSG90Q2F0TGlzdFNpemUgfHwgSEMubGlzdFNpemU7XG5cdFx0SEMuY2hhbmdlVGFnID0gY29uZmlnLkhvdENhdENoYW5nZVRhZyB8fCAnJztcblx0XHQvLyBUaGUgbmV4dCB3aG9sZSBzaGViYW5nIGlzIG5lZWRlZCwgYmVjYXVzZSBtYW51YWwgdGFncyBnZXQgbm90IHN1Ym1pdHRlZCBleGNlcHQgb2Ygc2F2ZVxuXHRcdGlmIChIQy5jaGFuZ2VUYWcpIHtcblx0XHRcdGNvbnN0IGVGb3JtID0gZG9jdW1lbnQuZWRpdGZvcm07XG5cdFx0XHRjb25zdCBjYXRSZWdFeHAgPSBuZXcgUmVnRXhwKGBeXFxcXFtcXFxcWygke0hDLmNhdGVnb3J5X3JlZ2V4cH0pOmApO1xuXHRcdFx0bGV0IG9sZFR4dDtcblx0XHRcdC8vIFJldHVybnMgdHJ1ZSBpZiBtaW5vciBjaGFuZ2Vcblx0XHRcdGNvbnN0IGlzTWlub3JDaGFuZ2UgPSAoKSA9PiB7XG5cdFx0XHRcdGxldCBuZXdUeHQgPSBlRm9ybS53cFRleHRib3gxO1xuXHRcdFx0XHRpZiAoIW5ld1R4dCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRuZXdUeHQgPSBuZXdUeHQudmFsdWU7XG5cdFx0XHRcdGNvbnN0IG9sZExpbmVzID0gb2xkVHh0Lm1hdGNoKC9eLiokL2dtKTtcblx0XHRcdFx0Y29uc3QgbmV3TGluZXMgPSBuZXdUeHQubWF0Y2goL14uKiQvZ20pO1xuXHRcdFx0XHRsZXQgY0FycjsgLy8gY2hhbmdlc1xuXHRcdFx0XHRjb25zdCBleGNlcHQgPSAoYUFyciwgYkFycikgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdFx0XHRcdGxldCBsQXJyOyAvLyBzbWFsbGVyXG5cdFx0XHRcdFx0bGV0IC8vIGxhcmdlclxuXHRcdFx0XHRcdFx0c0Fycjtcblx0XHRcdFx0XHRpZiAoYUFyci5sZW5ndGggPCBiQXJyLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0bEFyciA9IGJBcnI7XG5cdFx0XHRcdFx0XHRzQXJyID0gYUFycjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bEFyciA9IGFBcnI7XG5cdFx0XHRcdFx0XHRzQXJyID0gYkFycjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBpdGVtIG9mIGxBcnIpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGluZCA9IHNBcnIuaW5kZXhPZihpdGVtKTtcblx0XHRcdFx0XHRcdGlmIChpbmQgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW0pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0c0Fyci5zcGxpY2UoaW5kLCAxKTsgLy8gZG9uJ3QgY2hlY2sgdGhpcyBpdGVtIGFnYWluXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCAuLi5zQXJyXTtcblx0XHRcdFx0fTtcblx0XHRcdFx0Y0FyciA9IGV4Y2VwdChvbGRMaW5lcywgbmV3TGluZXMpO1xuXHRcdFx0XHRpZiAoY0Fyci5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y0FyciA9IGNBcnIuZmlsdGVyKChjKSA9PiB7XG5cdFx0XHRcdFx0XHRjID0gYy50cmltKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYyAmJiAhY2F0UmVnRXhwLnRlc3QoYyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNBcnIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0b2xkVHh0ID0gbmV3VHh0O1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjb25mLndnQWN0aW9uID09PSAnc3VibWl0JyAmJlxuXHRcdFx0XHRjb25mLndnQXJ0aWNsZUlkICYmXG5cdFx0XHRcdGVGb3JtICYmXG5cdFx0XHRcdGVGb3JtLndwU3VtbWFyeSAmJlxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2lraURpZmYnKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGNvbnN0IHN1bSA9IGVGb3JtLndwU3VtbWFyeTtcblx0XHRcdFx0Y29uc3Qgc3VtQSA9IGVGb3JtLndwQXV0b1N1bW1hcnk7XG5cdFx0XHRcdGlmIChzdW0udmFsdWUgJiYgc3VtQS52YWx1ZSA9PT0gSEMuY2hhbmdlVGFnKSB7XG5cdFx0XHRcdFx0Ly8gSG90Q2F0IGRpZmZcblx0XHRcdFx0XHQvLyBNRDUgaGFzaCBvZiB0aGUgZW1wdHkgc3RyaW5nLCBhcyBIb3RDYXQgZWRpdCBpcyBiYXNlZCBvbiBlbXB0eSBzdW1cblx0XHRcdFx0XHRzdW1BLnZhbHVlID0gc3VtQS52YWx1ZS5yZXBsYWNlKEhDLmNoYW5nZVRhZywgJ2Q0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlJyk7XG5cdFx0XHRcdFx0Ly8gQXR0ciBjcmVhdGlvbiBhbmQgZXZlbnQgaGFuZGxpbmcgaXMgbm90IHNhbWUgaW4gYWxsIChvbGQpIGJyb3dzZXJzIHNvIHVzZSAkXG5cdFx0XHRcdFx0Y29uc3QgJGN0ID0gJCgnPGlucHV0PicpXG5cdFx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0XHRcdFx0XHRuYW1lOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQudmFsKEhDLmNoYW5nZVRhZyk7XG5cdFx0XHRcdFx0JChlRm9ybSkuYXBwZW5kKCRjdCk7XG5cdFx0XHRcdFx0b2xkVHh0ID0gZUZvcm0ud3BUZXh0Ym94MS52YWx1ZTtcblx0XHRcdFx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwU2F2ZV0nKS5vbmUoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCRjdC52YWwoKSkge1xuXHRcdFx0XHRcdFx0XHRzdW0udmFsdWUgPSBzdW0udmFsdWUucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0XHRnZXRNZXNzYWdlKCdtZXNzYWdlcy11c2luZycpIHx8IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpLFxuXHRcdFx0XHRcdFx0XHRcdCcnXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29uc3QgcmVtb3ZlQ2hhbmdlVGFnID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0JChlRm9ybS53cFRleHRib3gxKVxuXHRcdFx0XHRcdFx0XHQuYWRkKHN1bSlcblx0XHRcdFx0XHRcdFx0Lm9uZSgnaW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoaXNNaW5vckNoYW5nZSgpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlbW92ZUNoYW5nZVRhZygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGN0LnZhbCgnJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZW1vdmVDaGFuZ2VUYWcoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBOdW1lcmljIGlucHV0LCBtYWtlIHN1cmUgd2UgaGF2ZSBhIG51bWVyaWMgdmFsdWVcblx0XHRIQy5saXN0U2l6ZSA9IE51bWJlci5wYXJzZUludChIQy5saXN0U2l6ZSwgMTApO1xuXHRcdGlmIChOdW1iZXIuaXNOYU4oSEMubGlzdFNpemUpIHx8IEhDLmxpc3RTaXplIDwgNSkge1xuXHRcdFx0SEMubGlzdFNpemUgPSA1O1xuXHRcdH1cblx0XHRIQy5saXN0U2l6ZSA9IE1hdGgubWluKEhDLmxpc3RTaXplLCAzMCk7IC8vIE1heCBzaXplXG5cdFx0Ly8gTG9jYWxpemUgc2VhcmNoIGVuZ2luZSBuYW1lc1xuXHRcdGZvciAoY29uc3QgW2tleSwgc3VnZ2VzdGlvbkNvbmZpZ10gb2YgT2JqZWN0LmVudHJpZXMoc3VnZ2VzdGlvbkNvbmZpZ3MpKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoa2V5ICYmIGdldE1lc3NhZ2UoYGVuZ2luZV9uYW1lcy0ke2tleX1gKSkge1xuXHRcdFx0XHRcdHN1Z2dlc3Rpb25Db25maWcubmFtZSA9IGdldE1lc3NhZ2UoYGVuZ2luZV9uYW1lcy0ke2tleX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBDYXRjaCBib3RoIG5hdGl2ZSBSVEwgYW5kIFwiZmFrZWRcIiBSVEwgdGhyb3VnaCBbW01lZGlhV2lraTpSdGwuanNdXVxuXHRcdGlzX3J0bCA9IGhhc0NsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ3J0bCcpO1xuXHRcdGlmICghaXNfcnRsKSB7XG5cdFx0XHRpZiAoZG9jdW1lbnQuZGVmYXVsdFZpZXcgJiYgZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuXHRcdFx0XHQvLyBHZWNrbyBldGMuXG5cdFx0XHRcdGlzX3J0bCA9IGRvY3VtZW50LmRlZmF1bHRWaWV3XG5cdFx0XHRcdFx0LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCBudWxsKVxuXHRcdFx0XHRcdC5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKTtcblx0XHRcdH0gZWxzZSBpZiAoJCgnYm9keScpWzBdLmN1cnJlbnRTdHlsZSkge1xuXHRcdFx0XHQvLyBJRSwgaGFzIHN1YnRsZSBkaWZmZXJlbmNlcyB0byBnZXRDb21wdXRlZFN0eWxlXG5cdFx0XHRcdGlzX3J0bCA9ICQoJ2JvZHknKVswXS5jdXJyZW50U3R5bGUuZGlyZWN0aW9uO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gTm90IGV4YWN0bHkgcmlnaHQsIGJ1dCBiZXN0IGVmZm9ydFxuXHRcdFx0XHRpc19ydGwgPSAkKCdib2R5JylbMF0uc3R5bGUuZGlyZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0aXNfcnRsID0gaXNfcnRsID09PSAncnRsJztcblx0XHR9XG5cdH07XG5cdGNvbnN0IGNhbl9lZGl0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2EtZWRpdCcpICE9PSBudWxsO1xuXHR9O1xuXHQvLyBMZWdhY3kgc3R1ZmZcblx0Y29uc3QgY2xvc2VGb3JtID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIENsb3NlIGFsbCBvcGVuIGVkaXRvcnMgd2l0aG91dCByZWRpcmVjdCByZXNvbHV0aW9uIGFuZCBvdGhlciBhc3luY2hyb25vdXMgc3R1ZmYuXG5cdFx0Zm9yIChjb25zdCBlZGl0IG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0LnN0YXRlID09PSBPUEVOKSB7XG5cdFx0XHRcdGVkaXQuY2FuY2VsKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGVkaXQuc3RhdGUgPT09IENIQU5HRV9QRU5ESU5HKSB7XG5cdFx0XHRcdGVkaXQuc2FuaXRpemVJbnB1dCgpO1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGVkaXQudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRsZXQga2V5ID0gbnVsbDtcblx0XHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRbLCBrZXldID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdiA9IHZhbHVlWzBdLnJlcGxhY2UoL18vZywgJyAnKS50cmltKCk7XG5cdFx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGVkaXQuY2FuY2VsKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50Q2F0ZWdvcnkgPSB2O1xuXHRcdFx0XHRcdGVkaXQuY3VycmVudEtleSA9IGtleTtcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRFeGlzdHMgPSB0aGlzLmlucHV0RXhpc3RzO1xuXHRcdFx0XHRcdGVkaXQuY2xvc2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3Qgc2V0dXBfdXBsb2FkID0gKCkgPT4ge1xuXHRcdG9uVXBsb2FkID0gdHJ1ZTtcblx0XHQvLyBBZGQgYW4gZW1wdHkgY2F0ZWdvcnkgYmFyIGF0IHRoZSBlbmQgb2YgdGhlIHRhYmxlIGNvbnRhaW5pbmcgdGhlIGRlc2NyaXB0aW9uLCBhbmQgY2hhbmdlIHRoZSBvbnN1Ym1pdCBoYW5kbGVyLlxuXHRcdGxldCBpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1odG1sZm9ybS1kZXNjcmlwdGlvbicpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9d3BEZXN0RmlsZV0nKTtcblx0XHRpZiAoIWlwKSB7XG5cdFx0XHRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9d3BEZXN0RmlsZV0nKTtcblx0XHRcdHdoaWxlIChpcCAmJiBpcC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAndGFibGUnKSB7XG5cdFx0XHRcdGlwID0gaXAucGFyZW50Tm9kZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFpcCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCByZXVwbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9d3BGb3JSZVVwbG9hZF0nKTtcblx0XHRjb25zdCBkZXN0RmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9d3BEZXN0RmlsZV0nKTtcblx0XHRpZiAoKHJldXBsb2FkICYmICEhcmV1cGxvYWQudmFsdWUpIHx8IChkZXN0RmlsZSAmJiAoZGVzdEZpbGUuZGlzYWJsZWQgfHwgZGVzdEZpbGUucmVhZE9ubHkpKSkge1xuXHRcdFx0cmV0dXJuOyAvLyByZS11cGxvYWQgZm9ybS4uLlxuXHRcdH1cblx0XHQvLyBJbnNlcnQgYSB0YWJsZSByb3cgd2l0aCB0d28gZmllbGRzIChsYWJlbCBhbmQgZW1wdHkgY2F0ZWdvcnkgYmFyKVxuXHRcdGNvbnN0IGxhYmVsQ2VsbCA9IG1ha2UoJ3RkJyk7XG5cdFx0Y29uc3QgbGluZUNlbGwgPSBtYWtlKCd0ZCcpO1xuXHRcdC8vIENyZWF0ZSB0aGUgY2F0ZWdvcnkgbGluZVxuXHRcdGNhdExpbmUgPSBtYWtlKCdkaXYnKTtcblx0XHRjYXRMaW5lLmNsYXNzTmFtZSA9ICdjYXRsaW5rcyc7XG5cdFx0Y2F0TGluZS5pZCA9ICdjYXRsaW5rcyc7XG5cdFx0Y2F0TGluZS5zdHlsZS50ZXh0QWxpZ24gPSBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdC8vIFdlJ2xsIGJlIGluc2lkZSBhIHRhYmxlIHJvdy4gTWFrZSBzdXJlIHRoYXQgd2UgZG9uJ3QgaGF2ZSBtYXJnaW5zIG9yIHN0cmFuZ2UgYm9yZGVycy5cblx0XHRjYXRMaW5lLnN0eWxlLm1hcmdpbiA9ICcwJztcblx0XHRjYXRMaW5lLnN0eWxlLmJvcmRlciA9ICdub25lJztcblx0XHRsaW5lQ2VsbC5hcHBlbmQoY2F0TGluZSk7XG5cdFx0Ly8gQ3JlYXRlIHRoZSBsYWJlbFxuXHRcdGNvbnN0IGxhYmVsID0gbnVsbDtcblx0XHRpZiAobGFiZWwpIHtcblx0XHRcdGxhYmVsQ2VsbC5pZCA9ICdob3RjYXRMYWJlbFRyYW5zbGF0ZWQnO1xuXHRcdFx0bGFiZWxDZWxsLmFwcGVuZChsYWJlbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxhYmVsQ2VsbC5pZCA9ICdob3RjYXRMYWJlbCc7XG5cdFx0XHRsYWJlbENlbGwuYXBwZW5kKG1ha2UoZ2V0TWVzc2FnZSgnY2F0ZWdvcmllcycpLCB0cnVlKSk7XG5cdFx0fVxuXHRcdGxhYmVsQ2VsbC5jbGFzc05hbWUgPSAnbXctbGFiZWwnO1xuXHRcdGxhYmVsQ2VsbC5zdHlsZS50ZXh0QWxpZ24gPSAncmlnaHQnO1xuXHRcdGxhYmVsQ2VsbC5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ21pZGRsZSc7XG5cdFx0Ly8gQ2hhbmdlIHRoZSBvbnN1Ym1pdCBoYW5kbGVyXG5cdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGxvYWQnKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctdXBsb2FkLWZvcm0nKTtcblx0XHRpZiAoZm9ybSkge1xuXHRcdFx0Y29uc3QgbmV3Um93ID0gaXAuaW5zZXJ0Um93KC0xKTtcblx0XHRcdG5ld1Jvdy5hcHBlbmQobGFiZWxDZWxsKTtcblx0XHRcdG5ld1Jvdy5hcHBlbmQobGluZUNlbGwpO1xuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAob2xkU3VibWl0LCAuLi5hcmdzKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoKCkgPT4ge1xuXHRcdFx0XHRcdGxldCBkb19zdWJtaXQgPSB0cnVlO1xuXHRcdFx0XHRcdGlmIChvbGRTdWJtaXQpIHtcblx0XHRcdFx0XHRcdGlmICh0eXBlb2Ygb2xkU3VibWl0ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxuXHRcdFx0XHRcdFx0XHRkb19zdWJtaXQgPSB3aW5kb3cuZXZhbChvbGRTdWJtaXQpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChvbGRTdWJtaXQgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuXHRcdFx0XHRcdFx0XHRkb19zdWJtaXQgPSBvbGRTdWJtaXQuYXBwbHkoZm9ybSwgW29sZFN1Ym1pdCwgLi4uYXJnc10pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIWRvX3N1Ym1pdCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjbG9zZUZvcm0oKTtcblx0XHRcdFx0XHQvLyBDb3B5IHRoZSBjYXRlZ29yaWVzXG5cdFx0XHRcdFx0Y29uc3QgZWIgPVxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT13cFVwbG9hZERlc2NyaXB0aW9uXScpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cERlc2MnKTtcblx0XHRcdFx0XHRsZXQgYWRkZWRPbmUgPSBmYWxzZTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB0ID0gZWRpdG9yLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdFx0XHRcdGlmICghdCkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnN0IGtleSA9IGVkaXRvci5jdXJyZW50S2V5O1xuXHRcdFx0XHRcdFx0Y29uc3QgbmV3X2NhdCA9IGBbWyR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke3R9JHtrZXkgPyBgfCR7a2V5fWAgOiAnJ31dXWA7XG5cdFx0XHRcdFx0XHQvLyBPbmx5IGFkZCBpZiBub3QgYWxyZWFkeSBwcmVzZW50XG5cdFx0XHRcdFx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoJzxubycuY29uY2F0KCd3aWtpPicsICcoXFxcXHN8XFxcXFMpKj88L25vJywgJ3dpa2knLCAnPicpLCAnZycpO1xuXHRcdFx0XHRcdFx0Y29uc3QgX2NsZWFuZWRUZXh0ID0gZWIudmFsdWUucmVwbGFjZSgvPCEtLShcXHN8XFxTKSo/LS0+L2csICcnKS5yZXBsYWNlKG5vd2lraVJlZ2V4KTtcblx0XHRcdFx0XHRcdGlmICghZmluZF9jYXRlZ29yeShfY2xlYW5lZFRleHQsIHQsIHRydWUpKSB7XG5cdFx0XHRcdFx0XHRcdGViLnZhbHVlICs9IGBcXG4ke25ld19jYXR9YDtcblx0XHRcdFx0XHRcdFx0YWRkZWRPbmUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYWRkZWRPbmUpIHtcblx0XHRcdFx0XHRcdC8vIFJlbW92ZSBcInN1YnN0OnVuY1wiIGFkZGVkIGJ5IEZsaW5mbyBpZiBpdCBkaWRuJ3QgZmluZCBjYXRlZ29yaWVzXG5cdFx0XHRcdFx0XHRjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ3t7JCcuY29uY2F0KCdzdWJzdDonKS5jb25jYXQoJ3VuY319JyksICdnJyk7XG5cdFx0XHRcdFx0XHRlYi52YWx1ZSA9IGViLnZhbHVlLnJlcGxhY2UocmVnZXgsICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0pKGZvcm0ub25zdWJtaXQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHRsZXQgY2xlYW5lZFRleHQgPSBudWxsO1xuXHRjb25zdCBpc09uUGFnZSA9ICh7Zmlyc3RDaGlsZH0pID0+IHtcblx0XHRpZiAoZmlyc3RDaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgY2F0VGl0bGUgPSB0aXRsZShmaXJzdENoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcblx0XHRpZiAoIWNhdFRpdGxlKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2F0VGl0bGUgPSBjYXRUaXRsZS5zbGljZShjYXRUaXRsZS5pbmRleE9mKCc6JykgKyAxKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0aWYgKEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdChjYXRUaXRsZSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCByZXN1bHQgPSB7XG5cdFx0XHR0aXRsZTogY2F0VGl0bGUsXG5cdFx0XHRtYXRjaDogWycnLCAnJywgJyddLFxuXHRcdH07XG5cdFx0aWYgKHBhZ2VUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRpZiAoY2xlYW5lZFRleHQgPT09IG51bGwpIHtcblx0XHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgJyhcXFxcc3xcXFxcUykqPzwvbm8nLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0XHRjbGVhbmVkVGV4dCA9IHBhZ2VUZXh0LnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCAnJykucmVwbGFjZShub3dpa2lSZWdleCwgJycpO1xuXHRcdH1cblx0XHRyZXN1bHQubWF0Y2ggPSBmaW5kX2NhdGVnb3J5KGNsZWFuZWRUZXh0LCBjYXRUaXRsZSwgdHJ1ZSk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0bGV0IGluaXRpYWxpemVkID0gZmFsc2U7XG5cdGxldCBzZXR1cFRpbWVvdXQgPSBudWxsO1xuXHRjb25zdCBmaW5kQnlDbGFzcyA9IChzY29wZSwgdGFnLCBjbGFzc05hbWUpID0+IHtcblx0XHRjb25zdCByZXN1bHQgPSAkKHNjb3BlKS5maW5kKGAke3RhZ30uJHtjbGFzc05hbWV9YCk7XG5cdFx0cmV0dXJuIHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoID4gMCA/IHJlc3VsdFswXSA6IG51bGw7XG5cdH07XG5cdGNvbnN0IHNldHVwID0gKGFkZGl0aW9uYWxXb3JrKSA9PiB7XG5cdFx0aWYgKGluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHRpZiAoc2V0dXBUaW1lb3V0KSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHNldHVwVGltZW91dCk7XG5cdFx0XHRzZXR1cFRpbWVvdXQgPSBudWxsO1xuXHRcdH1cblx0XHQvLyBGaW5kIHRoZSBjYXRlZ29yeSBiYXIsIG9yIGNyZWF0ZSBhbiBlbXB0eSBvbmUgaWYgdGhlcmUgaXNuJ3Qgb25lLiBUaGVuIGFkZCAtLystIGxpbmtzIGFmdGVyXG5cdFx0Ly8gZWFjaCBjYXRlZ29yeSwgYW5kIGFkZCB0aGUgKyBsaW5rLlxuXHRcdGNhdExpbmUgfHw9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1ub3JtYWwtY2F0bGlua3MnKTsgLy8gU3BlY2lhbDpVcGxvYWRcblx0XHRjb25zdCBoaWRkZW5DYXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LWhpZGRlbi1jYXRsaW5rcycpO1xuXHRcdGlmICghY2F0TGluZSkge1xuXHRcdFx0bGV0IGZvb3RlciA9IG51bGw7XG5cdFx0XHRpZiAoIWhpZGRlbkNhdHMpIHtcblx0XHRcdFx0Zm9vdGVyID0gZmluZEJ5Q2xhc3MoZG9jdW1lbnQsICdkaXYnLCAncHJpbnRmb290ZXInKTtcblx0XHRcdFx0aWYgKCFmb290ZXIpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gLy8gRG9uJ3Qga25vdyB3aGVyZSB0byBpbnNlcnQgdGhlIGNhdGVnb3J5IGxpbmVcblx0XHRcdH1cblx0XHRcdGNhdExpbmUgPSBtYWtlKCdkaXYnKTtcblx0XHRcdGNhdExpbmUuaWQgPSAnbXctbm9ybWFsLWNhdGxpbmtzJztcblx0XHRcdGNhdExpbmUuc3R5bGUudGV4dEFsaWduID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHRcdC8vIEFkZCBhIGxhYmVsXG5cdFx0XHRjb25zdCBsYWJlbCA9IG1ha2UoJ2EnKTtcblx0XHRcdGxhYmVsLmhyZWYgPSBjb25mLndnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnU3BlY2lhbDpDYXRlZ29yaWVzJyk7XG5cdFx0XHRsYWJlbC50aXRsZSA9IGdldE1lc3NhZ2UoJ2NhdGVnb3JpZXMnKTtcblx0XHRcdGxhYmVsLmFwcGVuZChtYWtlKGdldE1lc3NhZ2UoJ2NhdGVnb3JpZXMnKSwgdHJ1ZSkpO1xuXHRcdFx0Y2F0TGluZS5hcHBlbmQobGFiZWwpO1xuXHRcdFx0Y2F0TGluZS5hcHBlbmQobWFrZSgnOicsIHRydWUpKTtcblx0XHRcdC8vIEluc2VydCB0aGUgbmV3IGNhdGVnb3J5IGxpbmVcblx0XHRcdGxldCBjb250YWluZXIgPSBoaWRkZW5DYXRzID8gaGlkZGVuQ2F0cy5wYXJlbnROb2RlIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGxpbmtzJyk7XG5cdFx0XHRpZiAoIWNvbnRhaW5lcikge1xuXHRcdFx0XHRjb250YWluZXIgPSBtYWtlKCdkaXYnKTtcblx0XHRcdFx0Y29udGFpbmVyLmlkID0gJ2NhdGxpbmtzJztcblx0XHRcdFx0Zm9vdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgZm9vdGVyLm5leHRTaWJsaW5nKTtcblx0XHRcdH1cblx0XHRcdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY2F0bGlua3Mgbm9wcmludCc7XG5cdFx0XHRjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0aWYgKGhpZGRlbkNhdHMpIHtcblx0XHRcdFx0aGlkZGVuQ2F0cy5iZWZvcmUoY2F0TGluZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb250YWluZXIuYXBwZW5kKGNhdExpbmUpO1xuXHRcdFx0fVxuXHRcdH0gLy8gZW5kIGlmIGNhdExpbmUgZXhpc3RzXG5cdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0Y2F0TGluZS5kaXIgPSAncnRsJztcblx0XHR9XG5cdFx0Ly8gQ3JlYXRlIGVkaXRvcnMgZm9yIGFsbCBleGlzdGluZyBjYXRlZ29yaWVzXG5cdFx0Y29uc3QgY3JlYXRlRWRpdG9ycyA9IChsaW5lLCBpc19oaWRkZW4pID0+IHtcblx0XHRcdGxldCBpO1xuXHRcdFx0bGV0IGNhdHMgPSBsaW5lLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG5cdFx0XHRpZiAoY2F0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdG5ld0RPTSA9IHRydWU7XG5cdFx0XHRcdGxpbmUgPSBjYXRzWzBdLnBhcmVudE5vZGU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjYXRzID0gbGluZS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBDb3B5IGNhdHMsIG90aGVyd2lzZSBpdCdsbCBhbHNvIG1hZ2ljYWxseSBjb250YWluIG91ciBhZGRlZCBzcGFucyBhcyBpdCBpcyBhIGxpdmUgY29sbGVjdGlvbiFcblx0XHRcdGNvbnN0IGNvcHlDYXRzID0gQXJyYXkuZnJvbSh7XG5cdFx0XHRcdGxlbmd0aDogY2F0cy5sZW5ndGgsXG5cdFx0XHR9KTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvcHlDYXRzW2ldID0gY2F0c1tpXTtcblx0XHRcdH1cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBjb3B5Q2F0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCB0ZXN0ID0gaXNPblBhZ2UoY29weUNhdHNbaV0pO1xuXHRcdFx0XHRpZiAodGVzdCAhPT0gbnVsbCAmJiB0ZXN0Lm1hdGNoICE9PSBudWxsICYmIGxpbmUpIHtcblx0XHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IobGluZSwgY29weUNhdHNbaV0sIHRlc3QudGl0bGUsIHRlc3QubWF0Y2hbMl0sIGlzX2hpZGRlbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjb3B5Q2F0cy5sZW5ndGggPiAwID8gY29weUNhdHMuYXQoLTEpIDogbnVsbDtcblx0XHR9O1xuXHRcdGNvbnN0IGxhc3RTcGFuID0gY3JlYXRlRWRpdG9ycyhjYXRMaW5lLCBmYWxzZSk7XG5cdFx0Ly8gQ3JlYXRlIG9uZSB0byBhZGQgYSBuZXcgY2F0ZWdvcnlcblx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IobmV3RE9NID8gY2F0TGluZS5xdWVyeVNlbGVjdG9yQWxsKCd1bCcpWzBdIDogY2F0TGluZSwgbnVsbCwgbnVsbCwgbGFzdFNwYW4gIT09IG51bGwsIGZhbHNlKTtcblx0XHRpZiAoIW9uVXBsb2FkKSB7XG5cdFx0XHRpZiAocGFnZVRleHQgIT09IG51bGwgJiYgaGlkZGVuQ2F0cykge1xuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0aGlkZGVuQ2F0cy5kaXIgPSAncnRsJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjcmVhdGVFZGl0b3JzKGhpZGRlbkNhdHMsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQW5kIGZpbmFsbHkgYWRkIHRoZSBcIm11bHRpLW1vZGVcIiBzcGFuLiAoRG8gdGhpcyBhdCB0aGUgZW5kLCBvdGhlcndpc2UgaXQgZW5kcyB1cCBpbiB0aGUgbGlzdCBhYm92ZS4pXG5cdFx0XHRjb25zdCBlbmFibGVNdWx0aSA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdGVuYWJsZU11bHRpLmNsYXNzTmFtZSA9ICdub3ByaW50Jztcblx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0ZW5hYmxlTXVsdGkuZGlyID0gJ3J0bCc7XG5cdFx0XHR9XG5cdFx0XHRjYXRMaW5lLmluc2VydEJlZm9yZShlbmFibGVNdWx0aSwgY2F0TGluZS5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcblx0XHRcdGVuYWJsZU11bHRpLmFwcGVuZChtYWtlKCdcXHUwMEEwJywgdHJ1ZSkpOyAvLyBuYnNwXG5cdFx0XHRtdWx0aVNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRlbmFibGVNdWx0aS5hcHBlbmQobXVsdGlTcGFuKTtcblx0XHRcdG11bHRpU3Bhbi5pbm5lckhUTUwgPSBgKDxhPiR7SEMuYWRkbXVsdGl9PC9hPilgO1xuXHRcdFx0Y29uc3QgW2xpbmtdID0gbXVsdGlTcGFuLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0c2V0TXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0fSk7XG5cdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgnbXVsdGlfdG9vbHRpcCcpO1xuXHRcdFx0bGluay5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG5cdFx0fVxuXHRcdGNsZWFuZWRUZXh0ID0gbnVsbDtcblx0XHRpZiAoYWRkaXRpb25hbFdvcmsgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuXHRcdFx0YWRkaXRpb25hbFdvcmsoKTtcblx0XHR9XG5cdFx0bXcuaG9vaygnaG90Y2F0LnJlYWR5JykuZmlyZSgpOyAvLyBFeGVjdXRlIHJlZ2lzdGVyZWQgY2FsbGJhY2sgZnVuY3Rpb25zXG5cdFx0JCgnYm9keScpLnRyaWdnZXIoJ2hvdGNhdFNldHVwQ29tcGxldGVkJyk7XG5cdH07XG5cdGNvbnN0IGNyZWF0ZUNvbW1pdEZvcm0gPSAoKSA9PiB7XG5cdFx0aWYgKGNvbW1pdEZvcm0pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgZm9ybUNvbnRhaW5lciA9IG1ha2UoJ2RpdicpO1xuXHRcdGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kKGZvcm1Db250YWluZXIpO1xuXHRcdGZvcm1Db250YWluZXIuaW5uZXJIVE1MID0gYDxmb3JtIGlkPVwiaG90Y2F0Q29tbWl0Rm9ybVwiIG1ldGhvZD1cInBvc3RcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIGFjdGlvbj1cIiR7XG5cdFx0XHRjb25mLndnU2NyaXB0XG5cdFx0fT90aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChcblx0XHRcdGNvbmYud2dQYWdlTmFtZVxuXHRcdCl9JmFjdGlvbj1zdWJtaXRcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFRleHRib3gxXCI+JHtgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwibW9kZWxcIiB2YWx1ZT1cIiR7Y29uZi53Z1BhZ2VDb250ZW50TW9kZWx9XCI+YH08aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmb3JtYXRcIiB2YWx1ZT1cInRleHQveC13aWtpXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BTdW1tYXJ5XCIgdmFsdWU9XCJcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIndwTWlub3JlZGl0XCIgdmFsdWU9XCIxXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ3cFdhdGNodGhpc1wiIHZhbHVlPVwiMVwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwQXV0b1N1bW1hcnlcIiB2YWx1ZT1cImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BFZGl0dGltZVwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwU3RhcnR0aW1lXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BEaWZmXCIgdmFsdWU9XCJ3cERpZmZcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvbGRpZFwiIHZhbHVlPVwiMFwiPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cImhjQ29tbWl0XCIgdmFsdWU9XCJoY0NvbW1pdFwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwRWRpdFRva2VuXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BVbHRpbWF0ZVBhcmFtXCIgdmFsdWU9XCIxXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BDaGFuZ2VUYWdzXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIuKEs/CdkrLimaXwnZOK8J2Tg/Cdkr7wnZK44oS08J2SueKEr1wiIG5hbWU9XCJ3cFVuaWNvZGVDaGVja1wiPjwvZm9ybT5gO1xuXHRcdGNvbW1pdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG90Y2F0Q29tbWl0Rm9ybScpO1xuXHR9O1xuXHRjb25zdCBnZXRQYWdlID0gKCkgPT4ge1xuXHRcdC8vIFdlIGtub3cgd2UgaGF2ZSBhbiBhcnRpY2xlIGhlcmUuXG5cdFx0aWYgKGNvbmYud2dBcnRpY2xlSWQpIHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRyYXdjb250aW51ZTogJycsXG5cdFx0XHRcdHRpdGxlczogY29uZi53Z1BhZ2VOYW1lLFxuXHRcdFx0XHRwcm9wOiBbJ2luZm8nLCAncmV2aXNpb25zJ10sXG5cdFx0XHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCcsICdpZHMnXSxcblx0XHRcdFx0cnZsaW1pdDogJzEnLFxuXHRcdFx0XHRydnN0YXJ0aWQ6IGNvbmYud2dDdXJSZXZpc2lvbklkLFxuXHRcdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRcdG1ldGE6IFsnc2l0ZWluZm8nXSxcblx0XHRcdH07XG5cdFx0XHRIQy5zdGFydCA9IChkYXRhKSA9PiB7XG5cdFx0XHRcdHNldFBhZ2UoZGF0YSk7XG5cdFx0XHRcdHNldHVwKGNyZWF0ZUNvbW1pdEZvcm0pO1xuXHRcdFx0fTtcblx0XHRcdGFwaS5nZXQocGFyYW1zKS50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdEhDLnN0YXJ0KGRhdGEpO1xuXHRcdFx0fSk7XG5cdFx0XHRzZXR1cFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2V0dXAoY3JlYXRlQ29tbWl0Rm9ybSk7XG5cdFx0XHR9LCA0MDAwKTsgLy8gNCBzZWMsIGp1c3QgaW4gY2FzZSBnZXR0aW5nIHRoZSB3aWtpdGV4dCB0YWtlcyBsb25nZXIuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIERvZXNuJ3QgZXhpc3QgeWV0LiBEaXNhYmxlIG9uIG5vbi1leGlzdGluZyBVc2VyIHBhZ2VzLlxuXHRcdFx0aWYgKGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cGFnZVRleHQgPSAnJztcblx0XHRcdHBhZ2VUaW1lID0gbnVsbDtcblx0XHRcdHNldHVwKGNyZWF0ZUNvbW1pdEZvcm0pO1xuXHRcdH1cblx0fTtcblx0Y29uc3Qgc2V0U3RhdGUgPSAoc3RhdGUpID0+IHtcblx0XHRjb25zdCBjYXRzID0gc3RhdGUuc3BsaXQoJ1xcbicpO1xuXHRcdGlmIChjYXRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmIChpbml0aWFsaXplZCAmJiBlZGl0b3JzLmxlbmd0aCA9PT0gMSAmJiBlZGl0b3JzWzBdLmlzQWRkQ2F0ZWdvcnkpIHtcblx0XHRcdC8vIEluc2VydCBuZXcgc3BhbnMgYW5kIGNyZWF0ZSBuZXcgZWRpdG9ycyBmb3IgdGhlbS5cblx0XHRcdGNvbnN0IG5ld1NwYW5zID0gW107XG5cdFx0XHRjb25zdCBiZWZvcmUgPSBlZGl0b3JzLmxlbmd0aCA9PT0gMSA/IGVkaXRvcnNbMF0uc3BhbiA6IG51bGw7XG5cdFx0XHRsZXQgaTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChjYXRzW2ldLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBjYXQgPSBjYXRzW2ldLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGNvbnN0IGtleSA9IGNhdC5sZW5ndGggPiAxID8gY2F0WzFdIDogbnVsbDtcblx0XHRcdFx0W2NhdF0gPSBjYXQ7XG5cdFx0XHRcdGNvbnN0IGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9IHdpa2lQYWdlUGF0aChgJHtIQy5jYXRlZ29yeV9jYW5vbmljYWx9OiR7Y2F0fWApO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKGNhdCwgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gY2F0O1xuXHRcdFx0XHRjb25zdCBzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRzcGFuLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0aWYgKCFpKSB7XG5cdFx0XHRcdFx0Y2F0TGluZS5pbnNlcnRCZWZvcmUobWFrZSgnICcsIHRydWUpLCBiZWZvcmUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJlZm9yZS5iZWZvcmUoc3Bhbik7XG5cdFx0XHRcdGlmIChiZWZvcmUgJiYgaSArIDEgPCBjYXRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUobWFrZSgnIHwgJywgdHJ1ZSksIGJlZm9yZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bmV3U3BhbnMucHVzaCh7XG5cdFx0XHRcdFx0ZWxlbWVudDogc3Bhbixcblx0XHRcdFx0XHR0aXRsZTogY2F0LFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBBbmQgY2hhbmdlIHRoZSBsYXN0IG9uZS4uLlxuXHRcdFx0aWYgKGJlZm9yZSkge1xuXHRcdFx0XHRiZWZvcmUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobWFrZSgnIHwgJywgdHJ1ZSksIGJlZm9yZSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbmV3U3BhbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bmV3IENhdGVnb3J5RWRpdG9yKGNhdExpbmUsIG5ld1NwYW5zW2ldLmVsZW1lbnQsIG5ld1NwYW5zW2ldLnRpdGxlLCBuZXdTcGFuc1tpXS5rZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7XG5cdFx0bGV0IHJlc3VsdCA9IG51bGw7XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0bGV0IHRleHQgPSBlZGl0b3IuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0Y29uc3Qga2V5ID0gZWRpdG9yLmN1cnJlbnRLZXk7XG5cdFx0XHRpZiAodGV4dCAmJiB0ZXh0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0aWYgKGtleSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHRleHQgKz0gYHwke2tleX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZXN1bHQgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSB0ZXh0O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc3VsdCArPSBgXFxuJHt0ZXh0fWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0Y29uc3QgcmVhbGx5X3J1biA9ICgpID0+IHtcblx0XHRpbml0aWFsaXplKCk7XG5cdFx0aWYgKFxuXHRcdFx0IUhDLnVwbG9hZF9kaXNhYmxlZCAmJlxuXHRcdFx0Y29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gLTEgJiZcblx0XHRcdGNvbmYud2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdVcGxvYWQnICYmXG5cdFx0XHRjb25mLndnVXNlck5hbWVcblx0XHQpIHtcblx0XHRcdHNldHVwX3VwbG9hZCgpO1xuXHRcdFx0c2V0dXAoKCkgPT4ge1xuXHRcdFx0XHQvLyBDaGVjayBmb3Igc3RhdGUgcmVzdG9yYXRpb24gb25jZSB0aGUgc2V0dXAgaXMgZG9uZSBvdGhlcndpc2UsIGJ1dCBiZWZvcmUgc2lnbmFsbGluZyBzZXR1cCBjb21wbGV0aW9uXG5cdFx0XHRcdGlmICh3aW5kb3cuVXBsb2FkRm9ybSAmJiBVcGxvYWRGb3JtLnByZXZpb3VzX2hvdGNhdF9zdGF0ZSkge1xuXHRcdFx0XHRcdFVwbG9hZEZvcm0ucHJldmlvdXNfaG90Y2F0X3N0YXRlID0gc2V0U3RhdGUoVXBsb2FkRm9ybS5wcmV2aW91c19ob3RjYXRfc3RhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhY29uZi53Z0lzQXJ0aWNsZSB8fFxuXHRcdFx0XHRjb25mLndnQWN0aW9uICE9PSAndmlldycgfHxcblx0XHRcdFx0cGFyYW0oJ2RpZmYnKSAhPT0gbnVsbCB8fFxuXHRcdFx0XHRwYXJhbSgnb2xkaWQnKSAhPT0gbnVsbCB8fFxuXHRcdFx0XHQhY2FuX2VkaXQoKSB8fFxuXHRcdFx0XHRIQy5kaXNhYmxlKClcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRnZXRQYWdlKCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBydW4gPSAoKSA9PiB7XG5cdFx0aWYgKEhDLnN0YXJ0ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0SEMuc3RhcnRlZCA9IHRydWU7XG5cdFx0cmVhbGx5X3J1bigpO1xuXHR9O1xuXHQvLyBFeHBvcnQgbGVnYWN5IGZ1bmN0aW9uc1xuXHR3aW5kb3cuaG90Y2F0X2dldF9zdGF0ZSA9ICgpID0+IHtcblx0XHRyZXR1cm4gZ2V0U3RhdGUoKTtcblx0fTtcblx0d2luZG93LmhvdGNhdF9zZXRfc3RhdGUgPSAoc3RhdGUpID0+IHtcblx0XHRyZXR1cm4gc2V0U3RhdGUoc3RhdGUpO1xuXHR9O1xuXHR3aW5kb3cuaG90Y2F0X2Nsb3NlX2Zvcm0gPSAoKSA9PiB7XG5cdFx0Y2xvc2VGb3JtKCk7XG5cdH07XG5cdEhDLnJ1bldoZW5SZWFkeSA9IChjYWxsYmFjaykgPT4ge1xuXHRcdC8vIHJ1biB1c2VyLXJlZ2lzdGVyZWQgY29kZSBvbmNlIEhvdENhdCBpcyBmdWxseSBzZXQgdXAgYW5kIHJlYWR5LlxuXHRcdG13Lmhvb2soJ2hvdGNhdC5yZWFkeScpLmFkZChjYWxsYmFjayk7XG5cdH07XG5cdC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCBnZXQgY29uZmxpY3RzIHdpdGggQWpheENhdGVnb3JpZXMgKGNvcmUgZGV2ZWxvcG1lbnQgdGhhdCBzaG91bGQgb25lIGRheVxuXHQvLyByZXBsYWNlIEhvdENhdCkuXG5cdG13LmNvbmZpZy5zZXQoJ2Rpc2FibGVBSkFYQ2F0ZWdvcmllcycsIHRydWUpO1xuXHQvLyBSdW4gYXMgc29vbiBhcyBwb3NzaWJsZS4gVGhpcyB2YXJpZXMgZGVwZW5kaW5nIG9uIE1lZGlhV2lraSB2ZXJzaW9uO1xuXHQvLyB3aW5kb3cncyAnbG9hZCcgZXZlbnQgaXMgYWx3YXlzIHNhZmUsIGJ1dCB1c3VhbGx5IHdlIGNhbiBkbyBiZXR0ZXIgdGhhbiB0aGF0LlxuXHRpZiAoY29uZi53Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSAhPT0gJ1VwbG9hZCcpIHtcblx0XHQvLyBSZWxvYWQgSG90Q2F0IGFmdGVyIChWRSkgZWRpdHMgKGJ1ZyBUMTAzMjg1KVxuXHRcdG13Lmhvb2soJ3Bvc3RFZGl0JykuYWRkKCgpID0+IHtcblx0XHRcdC8vIFJlc2V0IEhvdENhdCBpbiBjYXNlIHRoaXMgaXMgYSBzb2Z0IHJlbG9hZCAoZS5nLiBWaXN1YWxFZGl0b3IgZWRpdCksIHVubGVzcyB0aGUgY2F0ZWdvcmllc1xuXHRcdFx0Ly8gd2VyZSBub3QgcmUtcmVuZGVyZWQgYW5kIG91ciBpbnRlcmZhY2UgaXMgc3RpbGwgdGhlcmUgKGUuZy4gRGlzY3Vzc2lvblRvb2xzIGVkaXQpXG5cdFx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGxpbmtzIC5ob3RjYXRsaW5rJykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y2F0TGluZSA9IG51bGw7XG5cdFx0XHRlZGl0b3JzID0gW107XG5cdFx0XHRpbml0aWFsaXplZCA9IGZhbHNlO1xuXHRcdFx0SEMuc3RhcnRlZCA9IGZhbHNlO1xuXHRcdFx0cnVuKCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2UgY2FuIHNhZmVseSB0cmlnZ2VyIGp1c3QgYWZ0ZXIgdXNlciBjb25maWd1cmF0aW9uIGlzIGxvYWRlZC5cblx0Ly8gVXNlIGFsd2F5cygpIGluc3RlYWQgb2YgdGhlbigpIHRvIGFsc28gc3RhcnQgSG90Q2F0IGlmIHRoZSB1c2VyIG1vZHVsZSBoYXMgcHJvYmxlbXMuXG5cdCQocnVuKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLHdGQUFBQSxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ25DO0FBR0EsSUFBQUEsUUFBTztBQUFBLElBRUwsTUFBTSxPQUFPLGNBQWMsWUFBWSxVQUFVLEtBQ2pELE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTTtBQUFBLElBRXpDLE1BQU0sT0FBTyxRQUFRLFlBQVksSUFBSSxLQUNyQyxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sS0FDekMsTUFBTSxPQUFPLFdBQVEsWUFBWSxPQUFJO0FBQUEsSUFFcEMsMkJBQVk7QUFBRSxhQUFPO0FBQUEsSUFBTSxFQUFHLEtBQUssU0FBUyxhQUFhLEVBQUU7QUFBQTtBQUFBOzs7QUNmOUQ7QUFBQSx1RkFBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVLFNBQVUsTUFBTTtBQUMvQixVQUFJO0FBQ0YsZUFBTyxDQUFDLENBQUMsS0FBSztBQUFBLE1BQ2hCLFNBQVMsT0FBTztBQUNkLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ1BBO0FBQUEsNkZBQUFDLFNB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QVMrdEIsY0FBYyx1QkFBdUIsR0FBRztBQUNwRDtNQUNEO0FBQ0FoYyxnQkFBVTtBQUNWRSxnQkFBVSxDQUFBO0FBQ1ZtZixvQkFBYztBQUNkem1CLFNBQUcyb0IsVUFBVTtBQUNiRCxVQUFJO0lBQ0wsQ0FBQztFQUNGO0FBR0ExeUIsSUFBRTB5QixHQUFHO0FBQ04sR0FBRzsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlN5bWJvbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZG9jdW1lbnQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiVHlwZUVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIiQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJob3RDYXRDaGVjayIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIndpbmRvdyIsICJIb3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRPcHRPdXQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNoZWNrQ2F0ZWdvcmllc1JlZ0V4cCIsICJzZWxmTmFtZSIsICJzdG9yYWdlSXRlbU5hbWUiLCAic3RvcmFnZUl0ZW0iLCAic3RvcmFnZSIsICJjcmVhdGVqSWNvbiIsICJpY29uQ2xhc3MiLCAiJCIsICJhdHRyIiwgImNvbmNhdCIsICJ0ZXh0IiwgImNyZWF0ZU5vdGlmeUFyZWEiLCAidGV4dE5vZGUiLCAiaWNvbiIsICJzdGF0ZSIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiY3NzIiwgInBhZGRpbmciLCAib25lIiwgImUiLCAiX3NlbGYkd3BUZXh0Ym94MSR2YWx1IiwgInNlbGYiLCAibmV3VmFsIiwgIndwVGV4dGJveDEiLCAidmFsdWUiLCAicmVwbGFjZSIsICJkbGdCdXR0b25zIiwgIiRkaWFsb2dDaGVja1N0b3JhZ2UiLCAiJHBlcm1hU2F2ZUhpbnQiLCAiJHRleHRIaW50Tm9kZSIsICIkZGlhbG9nIiwgImRvUmVtb3ZlIiwgIndwU3VtbWFyeSIsICJ3cml0ZVN0b3JhZ2UiLCAidmFsIiwgInNldCIsICJfJGRpYWxvZ0NoZWNrU3RvcmFnZSQiLCAiY2hlY2tlZCIsICJkaWFsb2ciLCAiXyRkaWFsb2dDaGVja1N0b3JhZ2UkMiIsICJfYWRkVG9KUyIsICJfZSIsICJwcmV2ZW50RGVmYXVsdCIsICJoYXNDbGFzcyIsICIkZWwiLCAib2ZmIiwgInBhcmFtcyIsICJhY3Rpb24iLCAidGl0bGUiLCAic3VtbWFyeSIsICJhcHBlbmR0ZXh0IiwgImRhdGEiLCAiZWRpdERvbmUiLCAiZWRpdFN0YXQiLCAiZXJyb3IiLCAibm90aWZ5IiwgImNvZGUiLCAiaW5mbyIsICJ0YWciLCAidHlwZSIsICJmYWRlT3V0IiwgInBvc3RXaXRoVG9rZW4iLCAidGhlbiIsICJwcm9tcHQiLCAiaWQiLCAib24iLCAiZmFkZUluIiwgImFwcGVuZFRvIiwgImRpc3BsYXkiLCAidXNlciIsICJpc0Fub24iLCAiaGlkZSIsICJtb2RhbCIsICJjbG9zZU9uRXNjYXBlIiwgIndpZHRoIiwgImJ1dHRvbnMiLCAiY2xvc2UiLCAiJGJvZHkiLCAiZmluZCIsICJ0cmlnZ2VyIiwgIm9wZW4iLCAiJGJ1dHRvbnMiLCAicGFyZW50IiwgImVxIiwgImJ1dHRvbiIsICJpY29ucyIsICJwcmltYXJ5IiwgIkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdCIsICIkb2tMaW5rIiwgImhyZWYiLCAiZG9FZGl0IiwgInJlc3VsdCIsICJub2NyZWF0ZSIsICJhamF4IiwgInVybCIsICJkYXRhVHlwZSIsICJzdWNjZXNzIiwgImNhY2hlIiwgImxvYWRIb3RDYXRDaGVjayIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhcmdzIiwgIm1lc3NhZ2UiLCAicGxhaW4iLCAiV0dfVVNFUl9HUk9VUFMiLCAiX213JGNvbmZpZyRnZXQiLCAiV0dfVVNFUl9MQU5HVUFHRSIsICJob3RDYXRNZXNzYWdlcyIsICJpbmNsdWRlcyIsICJtZXNzYWdlcyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiaG90Q2F0IiwgImNvbmYiLCAidmFsdWVzIiwgIkhvdENhdCIsICJub2RlTmFtZSIsICJ3Z0FjdGlvbiIsICJsaW5rcyIsICJjaGFuZ2UiLCAicmVtb3ZlIiwgImFkZCIsICJyZXN0b3JlIiwgInVuZG8iLCAiZG93biIsICJ1cCIsICJjaGFuZ2VUYWciLCAiYWRkbXVsdGkiLCAiZGlzYWJsZSIsICJucyIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJuc0lkcyIsICJ3Z05hbWVzcGFjZUlkcyIsICJ3Z0FydGljbGVJZCIsICJ0ZXN0IiwgIndnVGl0bGUiLCAiY3JlYXRvciIsICJ0aW1lZHRleHQiLCAiaW5zdGl0dXRpb24iLCAidW5jYXRfcmVnZXhwIiwgImV4aXN0c1llcyIsICJleGlzdHNObyIsICJ0ZW1wbGF0ZV9jYXRlZ29yaWVzIiwgImNhcGl0YWxpemVQYWdlTmFtZXMiLCAidXBsb2FkX2Rpc2FibGVkIiwgImJsYWNrbGlzdCIsICJiZ19jaGFuZ2VkIiwgIm5vX2F1dG9jb21taXQiLCAiZGVsX25lZWRzX2RpZmYiLCAic3VnZ2VzdF9kZWxheSIsICJlZGl0Ym94X3dpZHRoIiwgInN1Z2dlc3Rpb25zIiwgImZpeGVkX3NlYXJjaCIsICJ1c2VfdXBfZG93biIsICJsaXN0U2l6ZSIsICJzaW5nbGVfbWlub3IiLCAiZG9udF9hZGRfdG9fd2F0Y2hsaXN0IiwgInNob3J0Y3V0cyIsICJhZGRTaG9ydGN1dHMiLCAibWFwIiwgIl9hIiwgImsiLCAiT2JqZWN0IiwgImhhc093biIsICJ2IiwgInRyaW0iLCAibGVuZ3RoIiwgIkhDIiwgInVhIiwgIm5hdmlnYXRvciIsICJ1c2VyQWdlbnQiLCAidG9Mb3dlckNhc2UiLCAiaXNfd2Via2l0IiwgImNhdF9wcmVmaXgiLCAibm9TdWdnZXN0aW9ucyIsICJ3aWtpVGV4dEJsYW5rIiwgIndpa2lUZXh0QmxhbmtSRSIsICJSZWdFeHAiLCAid2lraVRleHRCbGFua09yQmlkaSIsICJmb3JtYXR0ZWROYW1lc3BhY2VzIiwgIndnRm9ybWF0dGVkTmFtZXNwYWNlcyIsICJuYW1lc3BhY2VJZHMiLCAiYXV0b0xvY2FsaXplIiwgIm5hbWVzcGFjZU51bWJlciIsICJmYWxsYmFjayIsICJjcmVhdGVSZWdleHBTdHIiLCAibmFtZSIsICJyZWdleF9uYW1lIiwgImkiLCAiaW5pdGlhbCIsICJjaGFyQXQiLCAibGwiLCAidWwiLCAidG9VcHBlckNhc2UiLCAiY2Fub25pY2FsIiwgIlN0cmluZyIsICJyZWdleHAiLCAiY2F0X25hbWUiLCAiY2F0ZWdvcnlfY2Fub25pY2FsIiwgImNhdGVnb3J5X3JlZ2V4cCIsICJ0ZW1wbGF0ZV9yZWdleHAiLCAibWFrZSIsICJhcmciLCAibGl0ZXJhbCIsICJjcmVhdGVUZXh0Tm9kZSIsICJjcmVhdGVFbGVtZW50IiwgInBhcmFtIiwgInVyaSIsICJsb2NhdGlvbiIsICJyZSIsICJtIiwgImV4ZWMiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInNjcmlwdCIsICJ3Z1NjcmlwdCIsICJpbmRleE9mIiwgIndnU2VydmVyIiwgInNsaWNlIiwgInByb3RvY29sIiwgInByZWZpeCIsICJ3Z0FydGljbGVQYXRoIiwgImNsYXNzTmFtZSIsICJjYXBpdGFsaXplIiwgInN0ciIsICJ3aWtpUGFnZVBhdGgiLCAicGFnZU5hbWUiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImVzY2FwZVJFIiwgInN1YnN0aXR1dGVGYWN0b3J5IiwgIm9wdGlvbnMiLCAibGVhZCIsICJpbmRpY2F0b3IiLCAibGJyYWNlIiwgInJicmFjZSIsICJtYXRjaCIsICJpZHgiLCAiYWxwaGEiLCAicmVwbGFjZW1lbnQiLCAicmVwbGFjZVNob3J0Y3V0cyIsICJyZXBsYWNlSGFzaCIsICJzIiwgImZpbmRDYXRzUkUiLCAicmVwbGFjZUJ5QmxhbmtzIiwgImZpbmRfY2F0ZWdvcnkiLCAid2lraXRleHQiLCAiY2F0ZWdvcnkiLCAib25jZSIsICJjYXRfcmVnZXgiLCAibm93aWtpUmVnZXgiLCAiY29waWVkdGV4dCIsICJjdXJyX21hdGNoIiwgInB1c2giLCAiaW50ZXJsYW5ndWFnZVJFIiwgImNoYW5nZV9jYXRlZ29yeSIsICJ0b1JlbW92ZSIsICJ0b0FkZCIsICJpc19oaWRkZW4iLCAiZmluZF9pbnNlcnRpb25wb2ludCIsICJfd2lraXRleHQiLCAiaW5kZXgiLCAibGFzdEluZGV4IiwgIm9uQ2F0IiwgIm5hbWVTcGFjZSIsICJrZXlDaGFuZ2UiLCAibWF0Y2hlcyIsICJjYXRfcG9pbnQiLCAiYmVmb3JlIiwgIk1hdGgiLCAibWF4IiwgImFmdGVyIiwgInNlYXJjaCIsICJqIiwgInBvaW50IiwgIm5ld2NhdHN0cmluZyIsICJzdWZmaXgiLCAidHh0IiwgImV2dEtleXMiLCAiY3RybEtleSIsICJtZXRhS2V5IiwgInNoaWZ0S2V5IiwgImV2dEtpbGwiLCAic3RvcFByb3BhZ2F0aW9uIiwgImNhbmNlbEJ1YmJsZSIsICJjYXRMaW5lIiwgIm9uVXBsb2FkIiwgImVkaXRvcnMiLCAiY29tbWl0QnV0dG9uIiwgImNvbW1pdEZvcm0iLCAibXVsdGlTcGFuIiwgInBhZ2VUZXh0IiwgInBhZ2VUaW1lIiwgInBhZ2VXYXRjaGVkIiwgIndhdGNoQ3JlYXRlIiwgIndhdGNoRWRpdCIsICJtaW5vckVkaXRzIiwgImVkaXRUb2tlbiIsICJpc19ydGwiLCAic2VydmVyVGltZSIsICJsYXN0UmV2SWQiLCAicGFnZVRleHRSZXZJZCIsICJjb25mbGljdGluZ1VzZXIiLCAibmV3RE9NIiwgIlVOQ0hBTkdFRCIsICJPUEVOIiwgIkNIQU5HRV9QRU5ESU5HIiwgIkNIQU5HRUQiLCAiREVMRVRFRCIsICJzZXRQYWdlIiwgInN0YXJ0VGltZSIsICJxdWVyeSIsICJwYWdlcyIsICJwYWdlIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJjb250ZW50IiwgInRpbWVzdGFtcCIsICJyZXZpZCIsICJsYXN0cmV2aWQiLCAic3RhcnR0aW1lc3RhbXAiLCAid2F0Y2hlZCIsICJ0b2tlbnMiLCAiY3NyZnRva2VuIiwgImxhbmdsaW5rcyIsICJsYW5nIiwgImdlbmVyYWwiLCAidGltZSIsICJjYXNlIiwgInVzZXJpbmZvIiwgIndhdGNoY3JlYXRpb25zIiwgIndhdGNoZGVmYXVsdCIsICJtaW5vcmRlZmF1bHQiLCAic2F2ZUluUHJvZ3Jlc3MiLCAiaW5pdGlhdGVFZGl0IiwgImZhaWx1cmUiLCAib2xkQnV0dG9uU3RhdGUiLCAiZGlzYWJsZWQiLCAiZmFpbCIsICJhcHBseSIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJyYXdjb250aW51ZSIsICJ0aXRsZXMiLCAid2dQYWdlTmFtZSIsICJwcm9wIiwgImlucHJvcCIsICJydnByb3AiLCAicnZzbG90cyIsICJydmxpbWl0IiwgInJ2ZGlyIiwgInJ2c3RhcnRpZCIsICJ3Z0N1clJldmlzaW9uSWQiLCAibGxsaW1pdCIsICJtZXRhIiwgInVpcHJvcCIsICJkb25lIiwgInN0YXR1cyIsICJzdGF0dXNUZXh0IiwgIm11bHRpQ2hhbmdlTXNnIiwgImNvdW50IiwgImN1cnJlbnRUaW1lc3RhbXAiLCAibm93IiwgIkRhdGUiLCAidHMiLCAiZ2V0VVRDRnVsbFllYXIiLCAidHdvIiwgImdldFVUQ01vbnRoIiwgImdldFVUQ0RhdGUiLCAiZ2V0VVRDSG91cnMiLCAiZ2V0VVRDTWludXRlcyIsICJnZXRVVENTZWNvbmRzIiwgInBlcmZvcm1DaGFuZ2VzIiwgInNpbmdsZUVkaXRvciIsICJzZWxmRWRpdENvbmZsaWN0IiwgIndnVXNlck5hbWUiLCAibm9Db21taXQiLCAid3BFZGl0VG9rZW4iLCAid3BEaWZmIiwgIndwU2F2ZSIsICJjaGFuZ2VkIiwgImFkZGVkIiwgImRlbGV0ZWQiLCAidG9FZGl0IiwgImVkaXQiLCAiY2hhbmdlcyIsICJvcmlnaW5hbENhdGVnb3J5IiwgImN1cnJlbnRDYXRlZ29yeSIsICJjdXJyZW50S2V5IiwgImN1cnJlbnRIaWRkZW4iLCAiZnJvbSIsICJ0byIsICJ3cE1pbm9yZWRpdCIsICJ3cFdhdGNodGhpcyIsICJ3cENoYW5nZVRhZ3MiLCAid3BBdXRvU3VtbWFyeSIsICJqb2luIiwgInNob3J0U3VtbWFyeSIsICJhcnJvdyIsICJ3cFN0YXJ0dGltZSIsICJ3cEVkaXR0aW1lIiwgIm9sZGlkIiwgImhjQ29tbWl0IiwgImNsaWNrIiwgInJlc29sdmVPbmUiLCAidG9SZXNvbHZlIiwgImNhdHMiLCAiY2F0ZWdvcmllcyIsICJpc19kYWIiLCAiaXNfcmVkaXIiLCAicmVkaXJlY3QiLCAiY2F0ZWdvcnlpbmZvIiwgImhpZGRlbiIsICJpc19taXNzaW5nIiwgIm1pc3NpbmciLCAiZGFiSW5wdXRDbGVhbmVkIiwgImlucHV0RXhpc3RzIiwgInNyYyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAibiIsICJjYXRfIiwgImNhdCIsICJlcnIiLCAiZiIsICJkYWIiLCAicmVzb2x2ZVJlZGlyZWN0cyIsICJwIiwgInJlc29sdmVNdWx0aSIsICJjYWxsYmFjayIsICJkYWJJbnB1dCIsICJsYXN0SW5wdXQiLCAicGxuYW1lc3BhY2UiLCAicGxsaW1pdCIsICJjbGxpbWl0IiwgImpzb24iLCAicmVxIiwgIm1ha2VBY3RpdmUiLCAid2hpY2giLCAiaXNfYWN0aXZlIiwgIl9pIiwgIl9lZGl0b3JzIiwgImVkaXRvciIsICJpbmFjdGl2YXRlIiwgInNob3dEYWIiLCAiZXhwZWN0ZWRJbnB1dCIsICJsYXN0UmVhbElucHV0IiwgImFjdHVhbFZhbHVlIiwgInNob3dzTGlzdCIsICJzcGxpdCIsICJsYXN0U2VsZWN0aW9uIiwgInN0YXJ0IiwgImVuZCIsICJkaXNwbGF5TGlzdCIsICJzZXRUaW1lb3V0IiwgInNldFNlbGVjdGlvbiIsICJzaG93U3VnZ2VzdGlvbnMiLCAibXVsdGlTdWJtaXQiLCAiX2kyIiwgIl9lZGl0b3JzMiIsICJtc2ciLCAicmVzb2x2ZWQiLCAiZmlyc3REYWIiLCAiZG9udENoYW5nZSIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJlbGVtZW50IiwgImFjY2VwdENoZWNrIiwgImNvbW1pdCIsICJzZXRNdWx0aUlucHV0IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAicGFyZW50Tm9kZSIsICJyZXBsYWNlQ2hpbGQiLCAiY2hlY2tNdWx0aUlucHV0IiwgImhhc0NoYW5nZXMiLCAiX2kzIiwgIl9lZGl0b3JzMyIsICJzdWdnZXN0aW9uRW5naW5lcyIsICJvcGVuc2VhcmNoIiwgImhhbmRsZXIiLCAicXVlcnlSZXN1bHQiLCAicXVlcnlLZXkiLCAiZXhpc3RzIiwgInNwbGljZSIsICJub3JtYWxpemVkIiwgImludGVybmFsc2VhcmNoIiwgImFsbHBhZ2VzIiwgIl90aXRsZSIsICJzdWJjYXRlZ29yaWVzIiwgImNhdGVnb3J5bWVtYmVycyIsICJwYXJlbnRjYXRlZ29yaWVzIiwgInN1Z2dlc3Rpb25Db25maWdzIiwgInNlYXJjaGluZGV4IiwgImVuZ2luZXMiLCAic2hvdyIsICJ0ZW1wIiwgIm5vQ29tcGxldGlvbiIsICJwYWdlbGlzdCIsICJjb21iaW5lZCIsICJzdWJjYXQiLCAicGFyZW50Y2F0IiwgIkJTIiwgIlRBQiIsICJSRVQiLCAiRVNDIiwgIlNQQUNFIiwgIlBHVVAiLCAiUEdET1dOIiwgIlVQIiwgIkRPV04iLCAiREVMIiwgIklNRSIsICJDYXRlZ29yeUVkaXRvciIsICJjb25zdHJ1Y3RvciIsICJpbml0aWFsaXplIiwgImxpbmUiLCAic3BhbiIsICJkaXIiLCAiaXNBZGRDYXRlZ29yeSIsICJjYXRMaW5rIiwgImZpcnN0Q2hpbGQiLCAib3JpZ2luYWxLZXkiLCAib3JpZ2luYWxFeGlzdHMiLCAibWFrZUxpbmtTcGFuIiwgInVwRG93bkxpbmtzIiwgInN0eWxlIiwgImxpbmtTcGFuIiwgImluc2VydEJlZm9yZSIsICJuZXh0U2libGluZyIsICJsaW5rIiwgImJpbmQiLCAibm9ybWFsTGlua3MiLCAidW5kZWxMaW5rIiwgIm9yaWdpbmFsSGlkZGVuIiwgImVuZ2luZSIsICJjdXJyZW50RXhpc3RzIiwgImxhc3RTYXZlZFN0YXRlIiwgImxhc3RTYXZlZENhdGVnb3J5IiwgImxhc3RTYXZlZEtleSIsICJsYXN0U2F2ZWRFeGlzdHMiLCAibGFzdFNhdmVkSGlkZGVuIiwgImludm9rZVN1Z2dlc3Rpb25zIiwgImRvbnRfYXV0b2NvbXBsZXRlIiwgInRleHRjaGFuZ2UiLCAibWFrZUZvcm0iLCAiZm9ybSIsICJtZXRob2QiLCAiYWNjZXB0IiwgInNpemUiLCAiZXZlbnQiLCAiaW1lIiwgImxhc3RLZXkiLCAidXNlc0NvbXBvc2l0aW9uIiwgImtleUNvdW50IiwgInByb2Nlc3NLZXkiLCAicmVzZXRLZXlTZWxlY3Rpb24iLCAiY2FuY2VsIiwgIm9uYmVmb3JlZGVhY3RpdmF0ZSIsICJjcmVhdGVUZXh0UmFuZ2UiLCAic2F2ZVZpZXciLCAibGlzdCIsICJoaWdobGlnaHRTdWdnZXN0aW9uIiwgImZvY3VzIiwgImVuZ2luZVNlbGVjdG9yIiwgIm9wdCIsICJzZWxlY3RlZCIsICJzZWxlY3RlZEluZGV4IiwgImJ1dHRvbl9sYWJlbCIsICJfaWQiLCAiZGVmYXVsdFRleHQiLCAibGFiZWwiLCAiT0siLCAib2siLCAiY2FuY2VsQnV0dG9uIiwgInBvc2l0aW9uIiwgIndoaXRlU3BhY2UiLCAiX2k0IiwgIl9lZGl0b3JzNCIsICJvcmlnaW5hbFN0YXRlIiwgInJlYWRPbmx5IiwgInJlbW92ZUVkaXRvciIsICJiYWNrZ3JvdW5kQ29sb3IiLCAibmV4dCIsICJyb2xsYmFjayIsICJ1bmRvTGluayIsICJkb250Q2hlY2siLCAic2FuaXRpemVJbnB1dCIsICJvcmlnaW5hbCIsICJfaTUiLCAiX2VkaXRvcnM1IiwgImNzc1RleHQiLCAidGV4dERlY29yYXRpb24iLCAic2VsZWN0RW5naW5lIiwgImVuZ2luZU5hbWUiLCAibWFrZUNhbGwiLCAiY2FsbGJhY2tPYmoiLCAiY2xlYW5LZXkiLCAiY2IiLCAieiIsICJjYWxsc01hZGUiLCAibm9mQ2FsbHMiLCAiYWxsVGl0bGVzIiwgImRvbnRDYWNoZSIsICJjYW5jZWxsZWQiLCAiZ2V0SlNPTiIsICJBcnJheSIsICJpc0FycmF5IiwgImZvcmNlIiwgInBpcGUiLCAibWFrZUNhbGxzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImVuZ2luZV8iLCAid2dTY3JpcHRQYXRoIiwgImRvbnRBdXRvY29tcGxldGUiLCAibGFzdFF1ZXJ5IiwgInZOb3JtYWxpemVkIiwgImtub3duVG9FeGlzdCIsICJ2TG93IiwgInNvcnQiLCAiYSIsICJiIiwgInByZWZpeE1hdGNoQSIsICJwcmVmaXhNYXRjaEIiLCAiYUxvdyIsICJiTG93IiwgImZpcnN0VGl0bGUiLCAiY29tcGxldGVkIiwgImF1dG9Db21wbGV0ZSIsICJleGlzdGluZyIsICJub2ZJdGVtcyIsICJhbGlnbiIsICJ6SW5kZXgiLCAiYW5jaG9yIiwgImxpc3RoIiwgInRvcCIsICJvZmZzZXRUb3AiLCAib2Zmc2V0SGVpZ2h0IiwgIm1heExpc3RIZWlnaHQiLCAidmlld3BvcnQiLCAid2hhdCIsICJldmFsdWF0ZSIsICJvcGVyYSIsICJkb2N1bWVudEVsZW1lbnQiLCAic2Nyb2xsX29mZnNldCIsICJub2RlIiwgImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsICJib3giLCAieCIsICJyb3VuZCIsICJsZWZ0IiwgInkiLCAidCIsICJsIiwgIm9mZnNldExlZnQiLCAib2Zmc2V0UGFyZW50IiwgInRleHRQb3MiLCAibmwiLCAibnQiLCAib2Zmc2V0IiwgInRleHRCb3hXaWR0aCIsICJvZmZzZXRXaWR0aCIsICJjbGllbnRXaWR0aCIsICJzY3JvbGwiLCAidmlld193IiwgInciLCAibF9wb3MiLCAicmlnaHQiLCAicmVsYXRpdmVfb2Zmc2V0IiwgImFjdFZhbCIsICJub3JtYWxpemVkQWN0VmFsIiwgImRvbnRNb2RpZnkiLCAiY2FuU2VsZWN0IiwgInNldFNlbGVjdGlvblJhbmdlIiwgInNlbGVjdGlvblN0YXJ0IiwgInNlbGVjdGlvbkVuZCIsICJuZXdfc2VsZWN0aW9uIiwgIm1vdmUiLCAibW92ZUVuZCIsICJzZWxlY3QiLCAiZ2V0U2VsZWN0aW9uIiwgInNlbGVjdGlvbiIsICJjcmVhdGVSYW5nZSIsICJybmciLCAiZHVwbGljYXRlIiwgInRleHRSbmciLCAic2V0RW5kUG9pbnQiLCAiY3VyciIsICJ0Z3QiLCAiaG90Y2F0X2RvbnRfYWRkX3RvX3dhdGNobGlzdCIsICJIb3RDYXREb250QWRkVG9XYXRjaGxpc3QiLCAiaG90Y2F0X25vX2F1dG9jb21taXQiLCAiSG90Q2F0Tm9BdXRvQ29tbWl0IiwgImhvdGNhdF9kZWxfbmVlZHNfZGlmZiIsICJIb3RDYXREZWxOZWVkc0RpZmYiLCAiaG90Y2F0X3N1Z2dlc3Rpb25fZGVsYXkiLCAiSG90Q2F0U3VnZ2VzdGlvbkRlbGF5IiwgImhvdGNhdF9lZGl0Ym94X3dpZHRoIiwgIkhvdENhdEVkaXRCb3hXaWR0aCIsICJob3RjYXRfc3VnZ2VzdGlvbnMiLCAiSG90Q2F0U3VnZ2VzdGlvbnMiLCAiaG90Y2F0X3N1Z2dlc3Rpb25zX2ZpeGVkIiwgIkhvdENhdEZpeGVkU3VnZ2VzdGlvbnMiLCAiaG90Y2F0X3NpbmdsZV9jaGFuZ2VzX2FyZV9taW5vciIsICJIb3RDYXRNaW5vclNpbmdsZUNoYW5nZXMiLCAiaG90Y2F0X2NoYW5nZWRfYmFja2dyb3VuZCIsICJIb3RDYXRDaGFuZ2VkQmFja2dyb3VuZCIsICJob3RjYXRfdXNlX2NhdGVnb3J5X2xpbmtzIiwgIkhvdENhdFVzZUNhdGVnb3J5TGlua3MiLCAiaG90Y2F0X2xpc3Rfc2l6ZSIsICJIb3RDYXRMaXN0U2l6ZSIsICJIb3RDYXRDaGFuZ2VUYWciLCAiZUZvcm0iLCAiZWRpdGZvcm0iLCAiY2F0UmVnRXhwIiwgIm9sZFR4dCIsICJpc01pbm9yQ2hhbmdlIiwgIm5ld1R4dCIsICJvbGRMaW5lcyIsICJuZXdMaW5lcyIsICJjQXJyIiwgImV4Y2VwdCIsICJhQXJyIiwgImJBcnIiLCAibEFyciIsICJzQXJyIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgIml0ZW0iLCAiaW5kIiwgImZpbHRlciIsICJjIiwgInF1ZXJ5U2VsZWN0b3IiLCAic3VtIiwgInN1bUEiLCAiJGN0IiwgInJlbW92ZUNoYW5nZVRhZyIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiaXNOYU4iLCAibWluIiwgIl9pNiIsICJfT2JqZWN0JGVudHJpZXMiLCAiZW50cmllcyIsICJzdWdnZXN0aW9uQ29uZmlnIiwgImRlZmF1bHRWaWV3IiwgImdldENvbXB1dGVkU3R5bGUiLCAiZ2V0UHJvcGVydHlWYWx1ZSIsICJjdXJyZW50U3R5bGUiLCAiZGlyZWN0aW9uIiwgImNhbl9lZGl0IiwgImNsb3NlRm9ybSIsICJfaTciLCAiX2VkaXRvcnM2IiwgInNldHVwX3VwbG9hZCIsICJpcCIsICJyZXVwbG9hZCIsICJkZXN0RmlsZSIsICJsYWJlbENlbGwiLCAibGluZUNlbGwiLCAidGV4dEFsaWduIiwgIm1hcmdpbiIsICJib3JkZXIiLCAidmVydGljYWxBbGlnbiIsICJuZXdSb3ciLCAiaW5zZXJ0Um93IiwgIm9sZFN1Ym1pdCIsICJkb19zdWJtaXQiLCAiZXZhbCIsICJGdW5jdGlvbiIsICJlYiIsICJhZGRlZE9uZSIsICJfaTgiLCAiX2VkaXRvcnM3IiwgIm5ld19jYXQiLCAiX2NsZWFuZWRUZXh0IiwgInJlZ2V4IiwgIm9uc3VibWl0IiwgImNsZWFuZWRUZXh0IiwgImlzT25QYWdlIiwgIm5vZGVUeXBlIiwgIk5vZGUiLCAiRUxFTUVOVF9OT0RFIiwgImNhdFRpdGxlIiwgImdldEF0dHJpYnV0ZSIsICJpbml0aWFsaXplZCIsICJzZXR1cFRpbWVvdXQiLCAiZmluZEJ5Q2xhc3MiLCAic2NvcGUiLCAic2V0dXAiLCAiYWRkaXRpb25hbFdvcmsiLCAiY2xlYXJUaW1lb3V0IiwgImhpZGRlbkNhdHMiLCAiZm9vdGVyIiwgImNvbnRhaW5lciIsICJjcmVhdGVFZGl0b3JzIiwgImNvcHlDYXRzIiwgImF0IiwgImxhc3RTcGFuIiwgImVuYWJsZU11bHRpIiwgImlubmVySFRNTCIsICJjdXJzb3IiLCAiaG9vayIsICJmaXJlIiwgImNyZWF0ZUNvbW1pdEZvcm0iLCAiZm9ybUNvbnRhaW5lciIsICJ3Z1BhZ2VDb250ZW50TW9kZWwiLCAiZ2V0UGFnZSIsICJzZXRTdGF0ZSIsICJuZXdTcGFucyIsICJnZXRTdGF0ZSIsICJfaTkiLCAiX2VkaXRvcnM4IiwgInJlYWxseV9ydW4iLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAiVXBsb2FkRm9ybSIsICJwcmV2aW91c19ob3RjYXRfc3RhdGUiLCAid2dJc0FydGljbGUiLCAicnVuIiwgInN0YXJ0ZWQiLCAiaG90Y2F0X2dldF9zdGF0ZSIsICJob3RjYXRfc2V0X3N0YXRlIiwgImhvdGNhdF9jbG9zZV9mb3JtIiwgInJ1bldoZW5SZWFkeSJdCn0K
