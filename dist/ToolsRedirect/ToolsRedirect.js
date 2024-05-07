/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=ToolsRedirect|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect.css}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/ToolsRedirect}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title2=ToolsRedirect Messages|license2=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-msg-zh-hans.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-msg-zh-hant.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/ToolsRedirect/messages.js}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title3=ToolsRedirect-bio-latin-names|license3=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/Special:Permalink/61193369}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/ToolsRedirect/bio-latin-names.js}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title3=ToolsRedirect-courtesy-and-art-names|license3=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-courtesy-and-art-names.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/ToolsRedirect/courtesy-and-art-names.js}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title3=ToolsRedirect-opt-bolds|license3=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-opt-bolds.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/ToolsRedirect/opt-bolds.js}
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

// dist/ToolsRedirect/ToolsRedirect.js
require_es_array_push();
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
//! src/ToolsRedirect/modules/constant.ts
var WG_NAMESPACE_IDS = mw.config.get("wgNamespaceIds");
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_USER_LANGUAGE = mw.config.get("wgUserLanguage");
var IS_CATEGORY = WG_NAMESPACE_NUMBER === 14;
var SUFFIX_APPEND = 0;
var SUFFIX_REPLACE = 1;
var SUFFIX_SETDEFAULT = 2;
var EDIT_TAG = "ToolsRedirect";
var VARIANTS = ["zh-hans", "zh-hant", "zh-cn", "zh-hk", "zh-mo", "zh-sg", "zh-my", "zh-tw"];
//! src/ToolsRedirect/modules/util/getMessages.ts
var getMessage = (key, ...args) => {
  key = "toolsredirect-".concat(key);
  return args.length ? mw.message(key, ...args).parse() : mw.message(key).plain();
};
//! src/ToolsRedirect/modules/core.js
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("ToolsRedirect/2.0");
var findRedirectCallbacks = [];
var pageWithRedirectTextSuffix = {};
var redirectExcludes = {};
var nsPrefixes = [];
var nsCanonPrefix;
var nsPrefixPattern;
for (_i = 0, _Object$entries = Object.entries(WG_NAMESPACE_IDS); _i < _Object$entries.length; _i++) {
  const [text, nsid] = _Object$entries[_i];
  if (nsid === WG_NAMESPACE_NUMBER && !!text) {
    nsPrefixes.push(text);
  }
}
var _i;
var _Object$entries;
if (WG_NAMESPACE_NUMBER === 0) {
  nsCanonPrefix = "";
  nsPrefixPattern = /^/;
} else {
  nsCanonPrefix = "".concat(WG_PAGE_NAME.split(":")[0], ":");
  nsPrefixPattern = new RegExp("^(".concat(nsPrefixes.join("|"), "):"), "i");
}
var fixNamespace = (title) => {
  if (WG_NAMESPACE_NUMBER === 0) {
    return title;
  } else if (nsPrefixPattern.test(title)) {
    return title.replace(nsPrefixPattern, nsCanonPrefix);
  }
  return nsCanonPrefix + title;
};
var findRedirectCallback = function(callback, ...args) {
  if (callback) {
    findRedirectCallbacks.push(callback);
  } else {
    findRedirectCallbacks.push(callback, ...args);
  }
  return this;
};
var findRedirectBySelector = function(selector) {
  findRedirectCallbacks.push(() => {
    return $(selector).map((_index, element) => {
      return $(element).eq(0).text().trim() || null;
    });
  });
  return this;
};
var setRedirectTextSuffix = (title, suffix, flag) => {
  let flag_set = false;
  let flag_append = false;
  flag || (flag = SUFFIX_APPEND);
  flag_set = flag === SUFFIX_REPLACE;
  title = fixNamespace(title);
  if (title in pageWithRedirectTextSuffix) {
    flag_append = flag === SUFFIX_APPEND;
  } else {
    flag_set = true;
  }
  pageWithRedirectTextSuffix[title] = [];
  if (flag_set) {
    pageWithRedirectTextSuffix[title] = [suffix];
  } else if (flag_append) {
    pageWithRedirectTextSuffix[title].push(suffix);
    pageWithRedirectTextSuffix[title] = [...new Set(pageWithRedirectTextSuffix[title])];
  }
};
window.toolsRedirect = {
  findRedirectCallback,
  findRedirectBySelector,
  setRedirectTextSuffix
};
var ToolsRedirect = {
  tabselem: null,
  tagselem: null,
  variants: VARIANTS,
  init() {
    const self2 = this;
    const $body = $("body");
    const button = $("<li>").addClass("mw-list-item collapsible vector-tab-noicon").attr("id", "ca-redirect").css("cursor", "pointer").append($("<a>").attr("title", getMessage("btndesc")).text(getMessage("btntitle")));
    button.on("click", (event) => {
      event.preventDefault();
      self2.dialog();
    });
    $body.find("li#ca-history").after(button);
  },
  dialog() {
    const dialog = $("<div>").attr("title", getMessage("dlgtitle")).addClass("dialog-redirect").dialog({
      bgiframe: true,
      resizable: false,
      modal: true,
      width: Math.round($(window).width() * 0.8),
      position: "center"
    });
    dialog.css("max-height", "".concat(Math.round($(window).height() * 0.8), "px"));
    this.tabselem = $("<div>").addClass("tab-redirect").appendTo(dialog);
    this.tagselem = $("<ul>").appendTo(this.tabselem);
    this.addTabs();
    this.tabselem.tabs();
  },
  addTabs() {
    for (const kname in this.tabs) {
      if (Object.hasOwn(this.tabs, kname)) {
        if (this.tabs[kname] === null) {
          this.tabs[kname] = this["_initTab".concat(kname[0].charAt(0).toUpperCase()).concat(kname.slice(1))]();
        }
        const tab = this.tabs[kname];
        this.tagselem.append(tab.tag);
        this.tabselem.append(tab.cont);
      }
    }
    this.loadView();
  },
  createTab(tabname, tabtitle, onClick) {
    const self2 = this;
    const tag = $("<li>").append($("<a>").attr("href", "#tab-".concat(tabname)).text(tabtitle));
    const cont = $("<div>").attr("id", "tab-".concat(tabname));
    $("a", tag).on("click", () => {
      onClick.call(self2);
    });
    return {
      tag,
      cont,
      loaded: false
    };
  },
  _initTabView() {
    return this.createTab("view", getMessage("tabviewtitle"), this.loadView);
  },
  _initTabCreate() {
    return this.createTab("create", getMessage("tabcreatetitle"), this.loadCreate);
  },
  tabs: {
    view: null,
    create: null
  },
  fix(pagenames) {
    const self2 = this;
    $("p.desc", self2.tabs.view.cont).text(getMessage("fixloading"));
    $("p[class!=desc]", self2.tabs.view.cont).remove();
    self2.loading(self2.tabs.view.cont);
    void self2.bulkEditByRegex(pagenames, /\s*\[\[.*?\]\]/, " [[".concat(WG_PAGE_NAME, "]]"), getMessage("fixsummary")).then(() => {
      setTimeout(() => {
        self2.loaded(self2.tabs.view.cont);
        self2.loadView(true);
      }, 3e3);
    });
  },
  create(pagenames) {
    const self2 = this;
    $("p.desc", self2.tabs.create.cont).text(getMessage("createloading"));
    $("p[class!=desc]", self2.tabs.create.cont).remove();
    self2.loading(self2.tabs.create.cont);
    void self2.bulkEdit(pagenames, getMessage("createtext").replace("$1", WG_PAGE_NAME), getMessage("createsummary").replace("$1", WG_PAGE_NAME)).then(() => {
      setTimeout(() => {
        self2.loaded(self2.tabs.create.cont);
        self2.tabs.view.loaded = false;
        self2.loadCreate(true);
      }, 500);
    });
  },
  addRedirectTextSuffix(title, text) {
    if (title in pageWithRedirectTextSuffix) {
      text += pageWithRedirectTextSuffix[title].join("");
    }
    return text;
  },
  bulkEdit(titles, text, summary) {
    const self2 = this;
    titles = titles.filter((v, i, arr) => {
      return arr.indexOf(v) === i;
    });
    titles = titles.join("|");
    return api.post({
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "info",
      titles
    }).then(({
      query
    }) => {
      const deferreds = [];
      var _iterator = _createForOfIteratorHelper(query.pages), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const {
            title
          } = _step.value;
          deferreds.push(api.postWithToken("csrf", {
            action: "edit",
            format: "json",
            formatversion: "2",
            title,
            text: self2.addRedirectTextSuffix(title, text),
            summary,
            tags: EDIT_TAG
          }));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return $.when(...deferreds);
    });
  },
  bulkEditByRegex(titles, regex, text, summary) {
    titles = titles.filter((v, i, arr) => {
      return arr.indexOf(v) === i;
    });
    titles = titles.join("|");
    return api.post({
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "revisions",
      rvprop: "content",
      rvslots: "main",
      titles
    }).then(({
      query
    }) => {
      const deferreds = [];
      var _iterator2 = _createForOfIteratorHelper(query.pages), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const page = _step2.value;
          const {
            content
          } = page.revisions[0].slots["main"];
          const newContent = content.replace(regex, text);
          deferreds.push(api.postWithToken("csrf", {
            action: "edit",
            format: "json",
            formatversion: "2",
            title: page.title,
            text: newContent,
            tags: EDIT_TAG,
            basetimestamp: page.revisions[0].timestamp,
            summary
          }));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return $.when(...deferreds);
    });
  },
  loadTabCont(tabname, callback, reload) {
    const self2 = this;
    const tab = self2.tabs[tabname];
    if (reload) {
      tab.loaded = false;
    }
    if (!tab.loaded) {
      tab.cont.html("");
      const $desc = $("<p>").addClass("desc").append($("<span>").addClass("desc-text").text(getMessage("rediloading"))).appendTo(tab.cont);
      const $text = $desc.find("> .desc-text");
      callback.apply(self2).done(() => {
        $text.text(getMessage("tab".concat(tabname, "desc")));
      }).fail(() => {
        $text.text(getMessage("tab".concat(tabname, "notfound")));
      }).always(() => {
        self2.addMethods($desc, [{
          href: "#refresh",
          title: getMessage("refresh"),
          click(event) {
            event.preventDefault();
            self2.loadTabCont(tabname, callback, true);
          }
        }]);
      });
      tab.loaded = true;
    }
  },
  loading(container) {
    if (container.prop("tagName").toLowerCase() === "span") {
      container.addClass("mw-ajax-loader");
    } else if ($("span.mw-ajax-loader", container).length === 0) {
      $("<span>").addClass("mw-ajax-loader").appendTo(container);
    }
  },
  loaded(container) {
    if (container.prop("tagName").toLowerCase() === "span") {
      container.removeClass("mw-ajax-loader");
    } else {
      $("span.mw-ajax-loader", container).remove();
    }
  },
  selectAll(cont) {
    $("input[type=checkbox]:not(:disabled)", cont).prop("checked", true);
  },
  selectInverse(cont) {
    $("input[type=checkbox]:not(:disabled)", cont).each((_index, element) => {
      const $element = $(element);
      $element.prop("checked", !$element.prop("checked"));
    });
  },
  selectAction(cont, cb) {
    const pagenames = [];
    $("input[type=checkbox]:checked", cont).each((_index, pagename) => {
      pagenames.push($(pagename).data("page-title"));
    });
    if (pagenames.length > 0) {
      cb.call(this, pagenames);
    }
  },
  clickAction(cont, cb) {
    const pagename = $('input[type="checkbox"]', cont).data("page-title");
    cb.call(this, [pagename]);
  },
  buildLink({
    title,
    href,
    click,
    classname
  }) {
    const a = $("<a>").attr({
      title,
      href,
      target: "_blank",
      rel: "noopener noreferrer"
    }).text(title);
    if (click) {
      a.on("click", click);
    }
    if (classname) {
      a.addClass(classname);
    }
    return $("<span>").addClass("tools-redirect_link").append(a);
  },
  addMethods($parent, methods) {
    const self2 = this;
    let $container = $parent.find("> .tools-redirect_methods");
    const methodExist = ({
      href
    }) => {
      return $container.find("a[href=".concat(JSON.stringify(href), "]")).length > 0;
    };
    if ($container.length === 0) {
      $container = $("<span>").addClass("tools-redirect_methods").appendTo($parent);
    }
    var _iterator3 = _createForOfIteratorHelper(methods), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const method = _step3.value;
        if (!methodExist(method)) {
          self2.buildLink(method).appendTo($container);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  },
  buildSelection(main, metd, mt, dsab) {
    const cont = $("<span>");
    const sele = $("<input>").attr("type", "checkbox").appendTo(cont);
    this.buildLink(main).appendTo(cont);
    this.addMethods(cont, metd);
    sele.data("page-title", mt);
    if (dsab) {
      sele.prop("disabled", "disabled");
    }
    return cont;
  },
  loadView(reload) {
    const $container = this.tabs.view.cont;
    this.loadTabCont("view", function() {
      return this.loadRedirect(WG_PAGE_NAME, $container, 0);
    }, reload);
  },
  loadCreate(reload) {
    this.loadTabCont("create", function() {
      return this.findRedirect(WG_PAGE_NAME);
    }, reload);
  },
  loadRedirect(pagename, container, deep, loaded) {
    this.loading(container);
    const self2 = this;
    const deferred = $.Deferred();
    const top = deep ? $("<dl>").appendTo(container) : container;
    if (!loaded) {
      loaded = {};
      loaded[pagename] = true;
    }
    const onClickFix = (event) => {
      const entry = $(this).parents("dd, p").first();
      event.preventDefault();
      self2.clickAction(entry, this.fix);
    };
    void api.post({
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "redirects",
      titles: pagename,
      rdlimit: "max"
    }).then(({
      query
    }) => {
      self2.loaded(container);
      let has_redirect = false;
      const desc = $("p.desc", self2.tabs.view.cont);
      const maximumRedirectDepth = 10;
      var _iterator4 = _createForOfIteratorHelper(query.pages), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          const page = _step4.value;
          if (page.redirects) {
            const {
              redirects
            } = page;
            var _iterator5 = _createForOfIteratorHelper(redirects), _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                const {
                  title
                } = _step5.value;
                const rdtitle = title;
                const ultitle = rdtitle.replace(/ /g, "_");
                const entry = (deep ? $("<dd>") : $("<p>")).appendTo(top);
                const methods = [{
                  href: mw.util.getUrl(ultitle, {
                    action: "edit"
                  }),
                  title: getMessage("rediedit")
                }];
                const isCycleRedirect = rdtitle in loaded;
                loaded[rdtitle] = true;
                if (!isCycleRedirect && deep) {
                  methods.push({
                    href: "#fix-redirect",
                    title: getMessage("tabviewfix"),
                    click: onClickFix
                  });
                }
                const $container = self2.buildSelection({
                  href: mw.util.getUrl(ultitle, {
                    redirect: "no"
                  }),
                  title: rdtitle
                }, methods, ultitle, !deep).appendTo(entry);
                if (isCycleRedirect) {
                  $container.append('<span class="error">'.concat(getMessage("errcycleredirect"), "</span>"));
                } else if (deep < maximumRedirectDepth) {
                  void deferred.then(() => {
                    return self2.loadRedirect(rdtitle, entry, deep + 1, loaded);
                  });
                }
                has_redirect = true;
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          } else {
            has_redirect = false;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      if (has_redirect && deep === 1) {
        self2.addMethods(desc, [{
          href: "#select-all",
          title: getMessage("selectall"),
          click(event) {
            event.preventDefault();
            self2.selectAll(self2.tabs.view.cont);
          }
        }, {
          href: "#select-inverse",
          title: getMessage("selectinverse"),
          click(event) {
            event.preventDefault();
            self2.selectInverse(self2.tabs.view.cont);
          }
        }, {
          href: "#fix-selected",
          title: getMessage("tabviewfix"),
          click(event) {
            event.preventDefault();
            self2.selectAction(self2.tabs.view.cont, self2.fix);
          }
        }]);
      }
      if (has_redirect) {
        void deferred.resolveWith(self2);
      } else {
        void deferred.rejectWith(self2);
      }
    });
    return deferred.promise();
  },
  findVariants(pagename, titles) {
    const self2 = this;
    const suffixReg = /^.+?((（|[ _]\().+?([)）]))$/;
    let retTitles = [];
    const deferreds = [];
    for (var _i2 = 0, _VARIANTS = VARIANTS; _i2 < _VARIANTS.length; _i2++) {
      const variant = _VARIANTS[_i2];
      const xhr = api.post({
        action: "parse",
        format: "json",
        formatversion: "2",
        page: pagename,
        prop: "displaytitle",
        uselang: variant,
        variant
      }).then(({
        parse
      }) => {
        const {
          displaytitle
        } = parse;
        let title = $("<span>").append(displaytitle).eq(0).text().trim();
        title = fixNamespace(title);
        setRedirectTextSuffix(title, "\n{{简繁重定向}}", SUFFIX_APPEND);
        return title;
      });
      deferreds.push(xhr);
    }
    return $.when(...deferreds).then((...args) => {
      const suffixes = [];
      for (var _i3 = 0, _args = args; _i3 < _args.length; _i3++) {
        const title = _args[_i3];
        let suffix;
        const suffixArr = suffixReg.exec(title);
        if (suffixArr && suffixArr.length === 2) {
          [, suffix] = suffixArr;
        } else {
          suffix = "";
        }
        retTitles.push(title);
        suffixes.push(suffix);
      }
      var _iterator6 = _createForOfIteratorHelper(new Set(suffixes)), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          const suffix = _step6.value;
          retTitles = [...retTitles, ...titles.map((title) => {
            const modifiedTitle = fixNamespace(title);
            return suffixReg.test(modifiedTitle) ? modifiedTitle : modifiedTitle + suffix;
          })];
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return self2.findNotExists([...new Set(retTitles)]);
    });
  },
  findNotExists(titles) {
    const deferreds = [];
    const excludes = /* @__PURE__ */ new Set(["用字模式"]);
    let alltitles = [];
    titles = titles.join("|");
    for (var _i4 = 0, _VARIANTS2 = VARIANTS; _i4 < _VARIANTS2.length; _i4++) {
      const variant = _VARIANTS2[_i4];
      deferreds.push(api.post({
        action: "parse",
        format: "json",
        formatversion: "2",
        text: titles,
        prop: "text",
        title: "MediaWiki:Gadget-ToolsRedirect.js/-",
        contentmodel: "wikitext",
        uselang: variant,
        variant
      }));
    }
    return $.when(...deferreds).then((...args) => {
      for (var _i5 = 0, _args2 = args; _i5 < _args2.length; _i5++) {
        const [{
          parse
        }] = _args2[_i5];
        alltitles = [...alltitles, ...$(parse.text).text().trim().split("|")];
      }
      alltitles = alltitles.filter((v, i, arr) => {
        return arr.indexOf(v) === i;
      });
      alltitles = alltitles.join("|");
      return api.post({
        action: "query",
        format: "json",
        formatversion: "2",
        prop: "info",
        titles: alltitles
      }).then(({
        query
      }) => {
        titles = [];
        var _iterator7 = _createForOfIteratorHelper(query.pages), _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            const page = _step7.value;
            const {
              title
            } = page;
            if (page.missing && !excludes.has(title)) {
              if (title in redirectExcludes) {
                return;
              }
              titles.push(title);
              if (IS_CATEGORY) {
                const target = WG_PAGE_NAME.replace(/^Category:/, "");
                setRedirectTextSuffix(title, "\n{{分类重定向|$1}}".replace("$1", target));
              }
              setRedirectTextSuffix(title, "\n{{别名重定向}}", SUFFIX_SETDEFAULT);
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        return titles;
      });
    });
  },
  findRedirect(pagename) {
    const self2 = this;
    const frcDeferreds = [];
    const container = self2.tabs.create.cont;
    const $body = $("body");
    const $content = $body.find("#mw-content-text > div.mw-parser-output");
    const deferred = $.Deferred();
    let titles = [];
    self2.loading(container);
    for (var _i6 = 0, _findRedirectCallback = findRedirectCallbacks; _i6 < _findRedirectCallback.length; _i6++) {
      const callback = _findRedirectCallback[_i6];
      const ret = callback(pagename, $content, titles);
      if (typeof ret === "string") {
        titles.push(ret);
      } else if ("done" in ret) {
        frcDeferreds.push(ret);
      } else {
        titles = [.../* @__PURE__ */ new Set([...titles, ...ret])];
      }
    }
    titles = titles.map((title) => {
      return title || null;
    });
    const onClickCreate = function(event) {
      const entry = $(this).parents("p:first");
      event.preventDefault();
      self2.clickAction(entry, self2.create);
    };
    void $.when(...frcDeferreds).then((...args) => {
      for (var _i7 = 0, _args3 = args; _i7 < _args3.length; _i7++) {
        const ret = _args3[_i7];
        if (typeof ret === "string") {
          titles.push(ret);
        } else {
          titles = [.../* @__PURE__ */ new Set([...titles, ...ret])];
        }
      }
      return self2.findVariants(pagename, titles);
    }).then((fvtitles) => {
      self2.loaded(container);
      var _iterator8 = _createForOfIteratorHelper(fvtitles), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          const title = _step8.value;
          const ultitle = title.replace(" ", "_");
          const entry = $("<p>").appendTo(container);
          self2.buildSelection({
            href: mw.util.getUrl(ultitle, {
              action: "edit",
              redlink: "1"
            }),
            title,
            classname: "new"
          }, [{
            href: "#create-redirect",
            title: getMessage("tabcreatetitle"),
            click: onClickCreate
          }], ultitle, false).appendTo(entry);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      const desc = $("p.desc", container);
      if (fvtitles.length > 0) {
        self2.addMethods(desc, [{
          href: "#select-all",
          title: getMessage("selectall"),
          click(event) {
            event.preventDefault();
            self2.selectAll(container);
          }
        }, {
          href: "#select-inverse",
          title: getMessage("selectinverse"),
          click(event) {
            event.preventDefault();
            self2.selectInverse(container);
          }
        }, {
          href: "#create-selected",
          title: getMessage("tabcreatetitle"),
          click(event) {
            event.preventDefault();
            self2.selectAction(container, self2.create);
          }
        }]);
        void deferred.resolveWith(self2, [fvtitles]);
      } else {
        void deferred.rejectWith(self2, [fvtitles]);
      }
    });
    return deferred.promise();
  }
};
//! src/ToolsRedirect/modules/messages.ts
var toolsRedirectMessages = () => {
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(WG_USER_LANGUAGE)) {
    mw.messages.set({
      "toolsredirect-btntitle": "重新導向",
      "toolsredirect-btndesc": "創建和管理此頁面的重新導向",
      "toolsredirect-dlgtitle": "創建和管理重新導向",
      "toolsredirect-rediloading": "數據加載中，請稍候……",
      "toolsredirect-rediedit": "編輯",
      "toolsredirect-selectall": "全選",
      "toolsredirect-selectinverse": "反選",
      "toolsredirect-tabviewtitle": "查看",
      "toolsredirect-tabviewdesc": "以下是指向此頁面的重新導向頁：",
      "toolsredirect-tabviewnotfound": "沒有找到任何指向此頁面的重新導向頁。",
      "toolsredirect-tabviewmulti": "多重",
      "toolsredirect-tabviewfix": "修復",
      "toolsredirect-fixloading": "請稍候，正在自動修復重新導向……",
      "toolsredirect-fixtext": "#REDIRECT [[$1]]",
      "toolsredirect-fixsummary": "編輯工具：修復多重重新導向",
      "toolsredirect-tabcreatetitle": "創建",
      "toolsredirect-tabcreatedesc": "以下是尚未創建的重新導向頁：",
      "toolsredirect-tabcreatenotfound": "沒有找到可以創建的重新導向頁。",
      "toolsredirect-tabcreateall": "全部創建",
      "toolsredirect-createloading": "請稍候，正在自動創建重新導向……",
      "toolsredirect-createtext": "#REDIRECT [[$1]]",
      "toolsredirect-createsummary": "編輯工具：自動創建重新導向到[[$1]]",
      "toolsredirect-errcycleredirect": "無法自動修復：發現循環重新導向",
      "toolsredirect-refresh": "刷新"
    });
  } else {
    mw.messages.set({
      "toolsredirect-btntitle": "重定向",
      "toolsredirect-btndesc": "创建和管理此页面的重定向",
      "toolsredirect-dlgtitle": "创建和管理重定向",
      "toolsredirect-rediloading": "数据加载中，请稍候……",
      "toolsredirect-rediedit": "编辑",
      "toolsredirect-selectall": "全选",
      "toolsredirect-selectinverse": "反选",
      "toolsredirect-tabviewtitle": "查看",
      "toolsredirect-tabviewdesc": "以下是指向此页面的重定向页：",
      "toolsredirect-tabviewnotfound": "没有找到任何指向此页面的重定向页。",
      "toolsredirect-tabviewmulti": "多重",
      "toolsredirect-tabviewfix": "修复",
      "toolsredirect-fixloading": "请稍候，正在自动修复重定向……",
      "toolsredirect-fixtext": "#REDIRECT [[$1]]",
      "toolsredirect-fixsummary": "编辑工具：修复多重重定向",
      "toolsredirect-tabcreatetitle": "创建",
      "toolsredirect-tabcreatedesc": "以下是尚未创建的重定向页：",
      "toolsredirect-tabcreatenotfound": "没有找到可以创建的重定向页。",
      "toolsredirect-tabcreateall": "全部创建",
      "toolsredirect-createloading": "请稍候，正在自动创建重定向……",
      "toolsredirect-createtext": "#REDIRECT [[$1]]",
      "toolsredirect-createsummary": "编辑工具：自动创建重定向到[[$1]]",
      "toolsredirect-errcycleredirect": "无法自动修复：发现循环重定向",
      "toolsredirect-refresh": "刷新"
    });
  }
};
//! src/ToolsRedirect/modules/bio-latin-names.ts
var toolsRedirect_bio_latin_names = () => {
  const prefixRegex = /[学學]名\s*[:：]?\s*$/;
  const colonRegex = /^\s*[:：]?\s*$/;
  window.toolsRedirect.findRedirectCallback((_pagename, $content) => {
    const titles = [];
    $content.find('> p > [lang="la"], > p > i').each((_index, element) => {
      let title;
      let previousNode = element.previousSibling;
      if (previousNode && colonRegex.test(previousNode.textContent)) {
        previousNode = previousNode.previousSibling;
      }
      if (previousNode && prefixRegex.test(previousNode.textContent)) {
        title = $(element).text().trim();
        titles.push(title);
        window.toolsRedirect.setRedirectTextSuffix(title, "\n{{学名重定向}}");
      }
    });
    return [...new Set(titles)];
  });
};
//! src/ToolsRedirect/modules/courtesy-and-art-names.ts
var toolsRedirect_courtesy_and_art_names = () => {
  const prefixRegex = /[号字號]\s*$/;
  const compSurnames = ["欧阳", "歐陽", "令狐", "皇甫", "上官", "司徒", "诸葛", "諸葛", "司马", "司馬", "宇文", "呼延", "端木", "申屠", "尉迟", "尉遲", "轩辕", "軒轅", "夏侯", "南宫", "南宮", "司空", "鲜于", "鮮于", "西门", "西門", "独孤", "獨孤", "东方", "東方", "司寇", "羊舌", "第五", "梁丘", "锺离", "鍾離", "东郭", "東郭", "公孙", "公孫", "孟孙", "孟孫", "仲孙", "仲孫", "叔孙", "叔孫", "季孙", "季孫", "长孙", "長孫", "慕容", "闾丘", "閭丘", "东门", "東門", "公羊", "万俟", "百里", "公冶", "呼延", "浮屠", "即墨", "单于", "單于", "田丘"];
  const compSurnameRegex = new RegExp("^(".concat(compSurnames.join("|"), ")."));
  const findSurname = (pagename) => {
    if (compSurnameRegex.test(pagename)) {
      return compSurnameRegex.exec(pagename)[1];
    }
    return pagename[0];
  };
  window.toolsRedirect.findRedirectCallback((pagename, $content) => {
    let surname;
    const titles = [];
    $content.find("> p > b").each((_index, element) => {
      const previousNode = element.previousSibling;
      if (previousNode && prefixRegex.test(previousNode.textContent)) {
        const name = $(element).text().trim();
        if (!surname) {
          surname = findSurname(pagename);
        }
        titles.push(surname + name);
      }
    });
    return [...new Set(titles)];
  });
};
//! src/ToolsRedirect/modules/opt-bolds.ts
var toolsRedirect_opt_bolds = () => {
  window.toolsRedirect.findRedirectBySelector("div#mw-content-text p > b");
};
//! src/ToolsRedirect/ToolsRedirect.js
toolsRedirectMessages();
ToolsRedirect.init();
if (mw.user.options.get("gadget-ToolsRedirect-bio-latin-names")) {
  $(toolsRedirect_bio_latin_names);
}
if (mw.user.options.get("gadget-ToolsRedirect-courtesy-and-art-names")) {
  $(toolsRedirect_courtesy_and_art_names);
}
if (mw.user.options.get("gadget-ToolsRedirect-opt-bolds")) {
  $(toolsRedirect_opt_bolds);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgInNyYy9Ub29sc1JlZGlyZWN0L21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy91dGlsL2dldE1lc3NhZ2VzLnRzIiwgInNyYy9Ub29sc1JlZGlyZWN0L21vZHVsZXMvY29yZS5qcyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Ub29sc1JlZGlyZWN0L21vZHVsZXMvYmlvLWxhdGluLW5hbWVzLnRzIiwgInNyYy9Ub29sc1JlZGlyZWN0L21vZHVsZXMvY291cnRlc3ktYW5kLWFydC1uYW1lcy50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL29wdC1ib2xkcy50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9Ub29sc1JlZGlyZWN0LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzcuMCcsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI0IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzcuMC9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4wLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFua3MgdG8gSUU4IGZvciBpdHMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVjggfiBDaHJvbWUgMzYtXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMzM0XG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ3Byb3RvdHlwZScsIHtcbiAgICB2YWx1ZTogNDIsXG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pLnByb3RvdHlwZSAhPT0gNDI7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IFR5cGUoYXJndW1lbnQpIGlzIE9iamVjdGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc09iamVjdChhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJFN0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXREZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIEVYSVNUUyA9IGhhc093bihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKTtcbi8vIGFkZGl0aW9uYWwgcHJvdGVjdGlvbiBmcm9tIG1pbmlmaWVkIC8gbWFuZ2xlZCAvIGRyb3BwZWQgZnVuY3Rpb24gbmFtZXNcbnZhciBQUk9QRVIgPSBFWElTVFMgJiYgKGZ1bmN0aW9uIHNvbWV0aGluZygpIHsgLyogZW1wdHkgKi8gfSkubmFtZSA9PT0gJ3NvbWV0aGluZyc7XG52YXIgQ09ORklHVVJBQkxFID0gRVhJU1RTICYmICghREVTQ1JJUFRPUlMgfHwgKERFU0NSSVBUT1JTICYmIGdldERlc2NyaXB0b3IoRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJykuY29uZmlndXJhYmxlKSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFWElTVFM6IEVYSVNUUyxcbiAgUFJPUEVSOiBQUk9QRVIsXG4gIENPTkZJR1VSQUJMRTogQ09ORklHVVJBQkxFXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc3RvcmUuZ2V0ID0gc3RvcmUuZ2V0O1xuICBzdG9yZS5oYXMgPSBzdG9yZS5oYXM7XG4gIHN0b3JlLnNldCA9IHN0b3JlLnNldDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoc3RvcmUuaGFzKGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgc3RvcmUuc2V0KGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0KGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmhhcyhpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChoYXNPd24oaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkNPTkZJR1VSQUJMRTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG52YXIgQ09ORklHVVJBQkxFX0xFTkdUSCA9IERFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdsZW5ndGgnLCB7IHZhbHVlOiA4IH0pLmxlbmd0aCAhPT0gODtcbn0pO1xuXG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbnZhciBtYWtlQnVpbHRJbiA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBuYW1lLCBvcHRpb25zKSB7XG4gIGlmIChzdHJpbmdTbGljZSgkU3RyaW5nKG5hbWUpLCAwLCA3KSA9PT0gJ1N5bWJvbCgnKSB7XG4gICAgbmFtZSA9ICdbJyArIHJlcGxhY2UoJFN0cmluZyhuYW1lKSwgL15TeW1ib2xcXCgoW14pXSopXFwpLiokLywgJyQxJykgKyAnXSc7XG4gIH1cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZXR0ZXIpIG5hbWUgPSAnZ2V0ICcgKyBuYW1lO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNldHRlcikgbmFtZSA9ICdzZXQgJyArIG5hbWU7XG4gIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICduYW1lJywgeyB2YWx1ZTogbmFtZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIGVsc2UgdmFsdWUubmFtZSA9IG5hbWU7XG4gIH1cbiAgaWYgKENPTkZJR1VSQUJMRV9MRU5HVEggJiYgb3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2FyaXR5JykgJiYgdmFsdWUubGVuZ3RoICE9PSBvcHRpb25zLmFyaXR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkodmFsdWUsICdsZW5ndGgnLCB7IHZhbHVlOiBvcHRpb25zLmFyaXR5IH0pO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdjb25zdHJ1Y3RvcicpICYmIG9wdGlvbnMuY29uc3RydWN0b3IpIHtcbiAgICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICdwcm90b3R5cGUnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTtcbiAgICAvLyBpbiBWOCB+IENocm9tZSA1MywgcHJvdG90eXBlcyBvZiBzb21lIG1ldGhvZHMsIGxpa2UgYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgLCBhcmUgbm9uLXdyaXRhYmxlXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5wcm90b3R5cGUpIHZhbHVlLnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gIGlmICghaGFzT3duKHN0YXRlLCAnc291cmNlJykpIHtcbiAgICBzdGF0ZS5zb3VyY2UgPSBqb2luKFRFTVBMQVRFLCB0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZSAtLSByZXF1aXJlZFxuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbWFrZUJ1aWx0SW4oZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHRoaXMpICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59LCAndG9TdHJpbmcnKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucy5lbnVtZXJhYmxlO1xuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuICBpZiAoaXNDYWxsYWJsZSh2YWx1ZSkpIG1ha2VCdWlsdEluKHZhbHVlLCBuYW1lLCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVHbG9iYWxQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFvcHRpb25zLnVuc2FmZSkgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGVsc2UgaWYgKE9ba2V5XSkgc2ltcGxlID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6ICFvcHRpb25zLm5vbkNvbmZpZ3VyYWJsZSxcbiAgICAgIHdyaXRhYmxlOiAhb3B0aW9ucy5ub25Xcml0YWJsZVxuICAgIH0pO1xuICB9IHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBNYXRoLnRydW5jYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC50cnVuY1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtdHJ1bmMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uIHRydW5jKHgpIHtcbiAgdmFyIG4gPSAreDtcbiAgcmV0dXJuIChuID4gMCA/IGZsb29yIDogY2VpbCkobik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0cnVuYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXRoLXRydW5jJyk7XG5cbi8vIGBUb0ludGVnZXJPckluZmluaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2Vyb3JpbmZpbml0eVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIG51bWJlciA9ICthcmd1bWVudDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiB0cnVuYyhudW1iZXIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbGVuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCk7XG4gIHJldHVybiBsZW4gPiAwID8gbWluKGxlbiwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGV4Y2VwdGlvbnMpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpICYmICEoZXhjZXB0aW9ucyAmJiBoYXNPd24oZXhjZXB0aW9ucywga2V5KSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogaXNDYWxsYWJsZShkZXRlY3Rpb24pID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAgICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMuZG9udENhbGxHZXRTZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4gIG9wdGlvbnMubmFtZSAgICAgICAgICAgLSB0aGUgLm5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBrZXlcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gJiYgZ2xvYmFsW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09PSAnQXJyYXknO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIFNhZmFyaSA8IDEzIGRvZXMgbm90IHRocm93IGFuIGVycm9yIGluIHRoaXMgY2FzZVxudmFyIFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA9IERFU0NSSVBUT1JTICYmICFmdW5jdGlvbiAoKSB7XG4gIC8vIG1ha2VzIG5vIHNlbnNlIHdpdGhvdXQgcHJvcGVyIHN0cmljdCBtb2RlIHN1cHBvcnRcbiAgaWYgKHRoaXMgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkubGVuZ3RoID0gMTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPyBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIGlmIChpc0FycmF5KE8pICYmICFnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgJ2xlbmd0aCcpLndyaXRhYmxlKSB7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBzZXQgcmVhZCBvbmx5IC5sZW5ndGgnKTtcbiAgfSByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59IDogZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgc2V0QXJyYXlMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aCcpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIElOQ09SUkVDVF9UT19MRU5HVEggPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbXS5wdXNoLmNhbGwoeyBsZW5ndGg6IDB4MTAwMDAwMDAwIH0sIDEpICE9PSA0Mjk0OTY3Mjk3O1xufSk7XG5cbi8vIFY4IDw9IDEyMSBhbmQgU2FmYXJpIDw9IDE1LjQ7IEZGIDwgMjMgdGhyb3dzIEludGVybmFsRXJyb3Jcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTEyNjgxXG52YXIgcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLnB1c2goKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn07XG5cbnZhciBGT1JDRUQgPSBJTkNPUlJFQ1RfVE9fTEVOR1RIIHx8ICFwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGgoKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5wdXNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnB1c2hcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKGl0ZW0pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgYXJnQ291bnQgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihsZW4gKyBhcmdDb3VudCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdDb3VudDsgaSsrKSB7XG4gICAgICBPW2xlbl0gPSBhcmd1bWVudHNbaV07XG4gICAgICBsZW4rKztcbiAgICB9XG4gICAgc2V0QXJyYXlMZW5ndGgoTywgbGVuKTtcbiAgICByZXR1cm4gbGVuO1xuICB9XG59KTtcbiIsICJjb25zdCBXR19OQU1FU1BBQ0VfSURTID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VJZHMnKTtcbmNvbnN0IFdHX05BTUVTUEFDRV9OVU1CRVI6IG51bWJlciA9IG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJyk7XG5jb25zdCBXR19QQUdFX05BTUU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcbmNvbnN0IFdHX1VTRVJfTEFOR1VBR0U6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckxhbmd1YWdlJyk7XG5cbmNvbnN0IElTX0NBVEVHT1JZID0gV0dfTkFNRVNQQUNFX05VTUJFUiA9PT0gMTQ7XG5cbmNvbnN0IFNVRkZJWF9BUFBFTkQgPSAwO1xuY29uc3QgU1VGRklYX1JFUExBQ0UgPSAxO1xuY29uc3QgU1VGRklYX1NFVERFRkFVTFQgPSAyO1xuXG5jb25zdCBFRElUX1RBRyA9ICdUb29sc1JlZGlyZWN0JztcblxuY29uc3QgVkFSSUFOVFMgPSBbJ3poLWhhbnMnLCAnemgtaGFudCcsICd6aC1jbicsICd6aC1oaycsICd6aC1tbycsICd6aC1zZycsICd6aC1teScsICd6aC10dyddO1xuXG5leHBvcnQge1xuXHRFRElUX1RBRyxcblx0SVNfQ0FURUdPUlksXG5cdFNVRkZJWF9BUFBFTkQsXG5cdFNVRkZJWF9SRVBMQUNFLFxuXHRTVUZGSVhfU0VUREVGQVVMVCxcblx0VkFSSUFOVFMsXG5cdFdHX05BTUVTUEFDRV9JRFMsXG5cdFdHX05BTUVTUEFDRV9OVU1CRVIsXG5cdFdHX1BBR0VfTkFNRSxcblx0V0dfVVNFUl9MQU5HVUFHRSxcbn07XG4iLCAiZXhwb3J0IGNvbnN0IGdldE1lc3NhZ2UgPSAoa2V5OiBzdHJpbmcsIC4uLmFyZ3M6IHN0cmluZ1tdKSA9PiB7XG5cdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRrZXkgPSBgdG9vbHNyZWRpcmVjdC0ke2tleX1gO1xuXHRyZXR1cm4gYXJncy5sZW5ndGggPyBtdy5tZXNzYWdlKGtleSwgLi4uYXJncykucGFyc2UoKSA6IG13Lm1lc3NhZ2Uoa2V5KS5wbGFpbigpO1xufTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHtcblx0RURJVF9UQUcsXG5cdElTX0NBVEVHT1JZLFxuXHRTVUZGSVhfQVBQRU5ELFxuXHRTVUZGSVhfUkVQTEFDRSxcblx0U1VGRklYX1NFVERFRkFVTFQsXG5cdFZBUklBTlRTLFxuXHRXR19OQU1FU1BBQ0VfSURTLFxuXHRXR19OQU1FU1BBQ0VfTlVNQkVSLFxuXHRXR19QQUdFX05BTUUsXG59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL3V0aWwvZ2V0TWVzc2FnZXMnO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaSA9IGluaXRNd0FwaSgnVG9vbHNSZWRpcmVjdC8yLjAnKTtcblxuY29uc3QgZmluZFJlZGlyZWN0Q2FsbGJhY2tzID0gW107XG5jb25zdCBwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeCA9IHt9O1xuY29uc3QgcmVkaXJlY3RFeGNsdWRlcyA9IHt9O1xuY29uc3QgbnNQcmVmaXhlcyA9IFtdO1xubGV0IG5zQ2Fub25QcmVmaXgsIG5zUHJlZml4UGF0dGVybjtcblxuZm9yIChjb25zdCBbdGV4dCwgbnNpZF0gb2YgT2JqZWN0LmVudHJpZXMoV0dfTkFNRVNQQUNFX0lEUykpIHtcblx0aWYgKG5zaWQgPT09IFdHX05BTUVTUEFDRV9OVU1CRVIgJiYgISF0ZXh0KSB7XG5cdFx0bnNQcmVmaXhlcy5wdXNoKHRleHQpO1xuXHR9XG59XG5cbmlmIChXR19OQU1FU1BBQ0VfTlVNQkVSID09PSAwKSB7XG5cdC8vIGFydGljbGVzXG5cdG5zQ2Fub25QcmVmaXggPSAnJztcblx0bnNQcmVmaXhQYXR0ZXJuID0gL14vO1xufSBlbHNlIHtcblx0bnNDYW5vblByZWZpeCA9IGAke1dHX1BBR0VfTkFNRS5zcGxpdCgnOicpWzBdfTpgO1xuXHRuc1ByZWZpeFBhdHRlcm4gPSBuZXcgUmVnRXhwKGBeKCR7bnNQcmVmaXhlcy5qb2luKCd8Jyl9KTpgLCAnaScpO1xufVxuXG5jb25zdCBmaXhOYW1lc3BhY2UgPSAodGl0bGUpID0+IHtcblx0aWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgPT09IDApIHtcblx0XHQvLyBkbyBub3RoaW5nIGlmIGl0J3MgYXJ0aWNsZXNcblx0XHRyZXR1cm4gdGl0bGU7XG5cdH0gZWxzZSBpZiAobnNQcmVmaXhQYXR0ZXJuLnRlc3QodGl0bGUpKSB7XG5cdFx0Ly8gY2Fub25pemUgdGhlIG5hbWVzcGFjZVxuXHRcdHJldHVybiB0aXRsZS5yZXBsYWNlKG5zUHJlZml4UGF0dGVybiwgbnNDYW5vblByZWZpeCk7XG5cdH1cblx0Ly8gZG9uJ3QgaGF2ZSBhIG5hbWVzcGFjZVxuXHRyZXR1cm4gbnNDYW5vblByZWZpeCArIHRpdGxlO1xufTtcblxuLyoqXG4gKiBBZGQgbmV3IGN1c3RvbSBjYWxsYmFjayBmb3IgZmluZGluZyBuZXcgcG90ZW50aWFsIHJlZGlyZWN0IHRpdGxlcy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAocGFnZW5hbWUsICRjb250ZW50LCB0aXRsZXMpID0+IHRpdGxlIGxpc3RcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGFyZ3NcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuY29uc3QgZmluZFJlZGlyZWN0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIC4uLmFyZ3MpIHtcblx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0ZmluZFJlZGlyZWN0Q2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXHR9IGVsc2Uge1xuXHRcdGZpbmRSZWRpcmVjdENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrLCAuLi5hcmdzKTtcblx0fVxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRmluZCBuZXcgcG90ZW50aWFsIHJlZGlyZWN0IHRpdGxlcyB0aHJvdWdoIHNlbGVjdG9yKHMpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmNvbnN0IGZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcblx0LyogQSBzaG9ydGN1dCB0byBhZGQgQ1NTIHNlbGVjdG9ycyBhcyBydWxlIHRvIGZpbmQgbmV3IHBvdGVudGlhbCByZWRpcmVjdCB0aXRsZXMuICovXG5cdGZpbmRSZWRpcmVjdENhbGxiYWNrcy5wdXNoKCgpID0+IHtcblx0XHRyZXR1cm4gJChzZWxlY3RvcikubWFwKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiAkKGVsZW1lbnQpLmVxKDApLnRleHQoKS50cmltKCkgfHwgbnVsbDtcblx0XHR9KTtcblx0fSk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuY29uc3Qgc2V0UmVkaXJlY3RUZXh0U3VmZml4ID0gKHRpdGxlLCBzdWZmaXgsIGZsYWcpID0+IHtcblx0bGV0IGZsYWdfc2V0ID0gZmFsc2U7XG5cdGxldCBmbGFnX2FwcGVuZCA9IGZhbHNlO1xuXHRmbGFnIHx8PSBTVUZGSVhfQVBQRU5EOyAvLyBkZWZhdWx0IGFwcGVuZFxuXHRmbGFnX3NldCA9IGZsYWcgPT09IFNVRkZJWF9SRVBMQUNFO1xuXHR0aXRsZSA9IGZpeE5hbWVzcGFjZSh0aXRsZSk7XG5cdGlmICh0aXRsZSBpbiBwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeCkge1xuXHRcdGZsYWdfYXBwZW5kID0gZmxhZyA9PT0gU1VGRklYX0FQUEVORDtcblx0fSBlbHNlIHtcblx0XHQvLyBpZiBub3QgZXhpc3QsIGV2ZXJ5IGZsYWcgY2FuIHNldFxuXHRcdGZsYWdfc2V0ID0gdHJ1ZTtcblx0fVxuXHRwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeFt0aXRsZV0gPSBbXTtcblx0aWYgKGZsYWdfc2V0KSB7XG5cdFx0cGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXhbdGl0bGVdID0gW3N1ZmZpeF07XG5cdH0gZWxzZSBpZiAoZmxhZ19hcHBlbmQpIHtcblx0XHRwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeFt0aXRsZV0ucHVzaChzdWZmaXgpO1xuXHRcdC8vIERlLWR1cGxpY2F0ZVxuXHRcdHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSA9IFsuLi5uZXcgU2V0KHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSldO1xuXHR9XG59O1xuXG4vKiBleHBvcnQgZ2xvYmFsIG9iamVjdCAqL1xud2luZG93LnRvb2xzUmVkaXJlY3QgPSB7XG5cdGZpbmRSZWRpcmVjdENhbGxiYWNrLFxuXHRmaW5kUmVkaXJlY3RCeVNlbGVjdG9yLFxuXHRzZXRSZWRpcmVjdFRleHRTdWZmaXgsXG59O1xuXG5leHBvcnQgY29uc3QgVG9vbHNSZWRpcmVjdCA9IHtcblx0dGFic2VsZW06IG51bGwsXG5cdHRhZ3NlbGVtOiBudWxsLFxuXHR2YXJpYW50czogVkFSSUFOVFMsXG5cdGluaXQoKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0Y29uc3QgYnV0dG9uID0gJCgnPGxpPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ213LWxpc3QtaXRlbSBjb2xsYXBzaWJsZSB2ZWN0b3ItdGFiLW5vaWNvbicpXG5cdFx0XHQuYXR0cignaWQnLCAnY2EtcmVkaXJlY3QnKVxuXHRcdFx0LmNzcygnY3Vyc29yJywgJ3BvaW50ZXInKVxuXHRcdFx0LmFwcGVuZCgkKCc8YT4nKS5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ2J0bmRlc2MnKSkudGV4dChnZXRNZXNzYWdlKCdidG50aXRsZScpKSk7XG5cdFx0YnV0dG9uLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHNlbGYuZGlhbG9nKCk7XG5cdFx0fSk7XG5cdFx0JGJvZHkuZmluZCgnbGkjY2EtaGlzdG9yeScpLmFmdGVyKGJ1dHRvbik7XG5cdH0sXG5cdGRpYWxvZygpIHtcblx0XHRjb25zdCBkaWFsb2cgPSAkKCc8ZGl2PicpXG5cdFx0XHQuYXR0cigndGl0bGUnLCBnZXRNZXNzYWdlKCdkbGd0aXRsZScpKVxuXHRcdFx0LmFkZENsYXNzKCdkaWFsb2ctcmVkaXJlY3QnKVxuXHRcdFx0LmRpYWxvZyh7XG5cdFx0XHRcdGJnaWZyYW1lOiB0cnVlLFxuXHRcdFx0XHRyZXNpemFibGU6IGZhbHNlLFxuXHRcdFx0XHRtb2RhbDogdHJ1ZSxcblx0XHRcdFx0d2lkdGg6IE1hdGgucm91bmQoJCh3aW5kb3cpLndpZHRoKCkgKiAwLjgpLFxuXHRcdFx0XHRwb3NpdGlvbjogJ2NlbnRlcicsXG5cdFx0XHR9KTtcblx0XHRkaWFsb2cuY3NzKCdtYXgtaGVpZ2h0JywgYCR7TWF0aC5yb3VuZCgkKHdpbmRvdykuaGVpZ2h0KCkgKiAwLjgpfXB4YCk7XG5cdFx0dGhpcy50YWJzZWxlbSA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ3RhYi1yZWRpcmVjdCcpLmFwcGVuZFRvKGRpYWxvZyk7XG5cdFx0dGhpcy50YWdzZWxlbSA9ICQoJzx1bD4nKS5hcHBlbmRUbyh0aGlzLnRhYnNlbGVtKTtcblx0XHR0aGlzLmFkZFRhYnMoKTtcblx0XHR0aGlzLnRhYnNlbGVtLnRhYnMoKTtcblx0fSxcblx0YWRkVGFicygpIHtcblx0XHRmb3IgKGNvbnN0IGtuYW1lIGluIHRoaXMudGFicykge1xuXHRcdFx0aWYgKE9iamVjdC5oYXNPd24odGhpcy50YWJzLCBrbmFtZSkpIHtcblx0XHRcdFx0aWYgKHRoaXMudGFic1trbmFtZV0gPT09IG51bGwpIHtcblx0XHRcdFx0XHR0aGlzLnRhYnNba25hbWVdID0gdGhpc1tgX2luaXRUYWIke2tuYW1lWzBdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7a25hbWUuc2xpY2UoMSl9YF0oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB0YWIgPSB0aGlzLnRhYnNba25hbWVdO1xuXHRcdFx0XHR0aGlzLnRhZ3NlbGVtLmFwcGVuZCh0YWIudGFnKTtcblx0XHRcdFx0dGhpcy50YWJzZWxlbS5hcHBlbmQodGFiLmNvbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBkZWZhdWx0IHRhYiwgYXV0b2xvYWQgd2hlbiBkaWFsb2cgaW5pdGlhdGVcblx0XHR0aGlzLmxvYWRWaWV3KCk7XG5cdH0sXG5cdGNyZWF0ZVRhYih0YWJuYW1lLCB0YWJ0aXRsZSwgb25DbGljaykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IHRhZyA9ICQoJzxsaT4nKS5hcHBlbmQoJCgnPGE+JykuYXR0cignaHJlZicsIGAjdGFiLSR7dGFibmFtZX1gKS50ZXh0KHRhYnRpdGxlKSk7XG5cdFx0Y29uc3QgY29udCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCBgdGFiLSR7dGFibmFtZX1gKTtcblx0XHQkKCdhJywgdGFnKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRvbkNsaWNrLmNhbGwoc2VsZik7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRhZyxcblx0XHRcdGNvbnQsXG5cdFx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdH07XG5cdH0sXG5cdF9pbml0VGFiVmlldygpIHtcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVUYWIoJ3ZpZXcnLCBnZXRNZXNzYWdlKCd0YWJ2aWV3dGl0bGUnKSwgdGhpcy5sb2FkVmlldyk7XG5cdH0sXG5cdF9pbml0VGFiQ3JlYXRlKCkge1xuXHRcdHJldHVybiB0aGlzLmNyZWF0ZVRhYignY3JlYXRlJywgZ2V0TWVzc2FnZSgndGFiY3JlYXRldGl0bGUnKSwgdGhpcy5sb2FkQ3JlYXRlKTtcblx0fSxcblx0dGFiczoge1xuXHRcdHZpZXc6IG51bGwsXG5cdFx0Y3JlYXRlOiBudWxsLFxuXHR9LFxuXHRmaXgocGFnZW5hbWVzKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0JCgncC5kZXNjJywgc2VsZi50YWJzLnZpZXcuY29udCkudGV4dChnZXRNZXNzYWdlKCdmaXhsb2FkaW5nJykpO1xuXHRcdCQoJ3BbY2xhc3MhPWRlc2NdJywgc2VsZi50YWJzLnZpZXcuY29udCkucmVtb3ZlKCk7XG5cdFx0c2VsZi5sb2FkaW5nKHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdHZvaWQgc2VsZlxuXHRcdFx0LmJ1bGtFZGl0QnlSZWdleChwYWdlbmFtZXMsIC9cXHMqXFxbXFxbLio/XFxdXFxdLywgYCBbWyR7V0dfUEFHRV9OQU1FfV1dYCwgZ2V0TWVzc2FnZSgnZml4c3VtbWFyeScpKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHQvLyBkZWxheSBsb2FkIGJlZm9yZSB0aGUgYXN5bmNocm9ub3VzIHRhc2tzIG9uIHNlcnZlciBmaW5pc2hlZFxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRzZWxmLmxvYWRlZChzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHRcdFx0XHRzZWxmLmxvYWRWaWV3KHRydWUpO1xuXHRcdFx0XHR9LCAzMDAwKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRjcmVhdGUocGFnZW5hbWVzKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0JCgncC5kZXNjJywgc2VsZi50YWJzLmNyZWF0ZS5jb250KS50ZXh0KGdldE1lc3NhZ2UoJ2NyZWF0ZWxvYWRpbmcnKSk7XG5cdFx0JCgncFtjbGFzcyE9ZGVzY10nLCBzZWxmLnRhYnMuY3JlYXRlLmNvbnQpLnJlbW92ZSgpO1xuXHRcdHNlbGYubG9hZGluZyhzZWxmLnRhYnMuY3JlYXRlLmNvbnQpO1xuXHRcdHZvaWQgc2VsZlxuXHRcdFx0LmJ1bGtFZGl0KFxuXHRcdFx0XHRwYWdlbmFtZXMsXG5cdFx0XHRcdGdldE1lc3NhZ2UoJ2NyZWF0ZXRleHQnKS5yZXBsYWNlKCckMScsIFdHX1BBR0VfTkFNRSksXG5cdFx0XHRcdGdldE1lc3NhZ2UoJ2NyZWF0ZXN1bW1hcnknKS5yZXBsYWNlKCckMScsIFdHX1BBR0VfTkFNRSlcblx0XHRcdClcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0Ly8gZGVsYXkgbG9hZCBiZWZvcmUgdGhlIGFzeW5jaHJvbm91cyB0YXNrcyBvbiBzZXJ2ZXIgZmluaXNoZWRcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5sb2FkZWQoc2VsZi50YWJzLmNyZWF0ZS5jb250KTtcblx0XHRcdFx0XHRzZWxmLnRhYnMudmlldy5sb2FkZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRzZWxmLmxvYWRDcmVhdGUodHJ1ZSk7XG5cdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHR9KTtcblx0fSxcblx0YWRkUmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCB0ZXh0KSB7XG5cdFx0aWYgKHRpdGxlIGluIHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4KSB7XG5cdFx0XHR0ZXh0ICs9IHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXS5qb2luKCcnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRleHQ7XG5cdH0sXG5cdGJ1bGtFZGl0KHRpdGxlcywgdGV4dCwgc3VtbWFyeSkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5maWx0ZXIoKHYsIGksIGFycikgPT4ge1xuXHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKHYpID09PSBpO1xuXHRcdH0pO1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5qb2luKCd8Jyk7XG5cdFx0cmV0dXJuIGFwaVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0dGl0bGVzLFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGRlZmVycmVkcyA9IFtdO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHt0aXRsZX0gb2YgcXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRkZWZlcnJlZHMucHVzaChcblx0XHRcdFx0XHRcdGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywge1xuXHRcdFx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdHRleHQ6IHNlbGYuYWRkUmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCB0ZXh0KSxcblx0XHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdFx0dGFnczogRURJVF9UQUcsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGJ1bGtFZGl0QnlSZWdleCh0aXRsZXMsIHJlZ2V4LCB0ZXh0LCBzdW1tYXJ5KSB7XG5cdFx0dGl0bGVzID0gdGl0bGVzLmZpbHRlcigodiwgaSwgYXJyKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YodikgPT09IGk7XG5cdFx0fSk7XG5cdFx0dGl0bGVzID0gdGl0bGVzLmpvaW4oJ3wnKTtcblx0XHRyZXR1cm4gYXBpXG5cdFx0XHQucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRcdHRpdGxlcyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRjb25zdCBkZWZlcnJlZHMgPSBbXTtcblx0XHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIHF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0Y29uc3Qge2NvbnRlbnR9ID0gcGFnZS5yZXZpc2lvbnNbMF0uc2xvdHNbJ21haW4nXTtcblx0XHRcdFx0XHRjb25zdCBuZXdDb250ZW50ID0gY29udGVudC5yZXBsYWNlKHJlZ2V4LCB0ZXh0KTtcblx0XHRcdFx0XHRkZWZlcnJlZHMucHVzaChcblx0XHRcdFx0XHRcdGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywge1xuXHRcdFx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IHBhZ2UudGl0bGUsXG5cdFx0XHRcdFx0XHRcdHRleHQ6IG5ld0NvbnRlbnQsXG5cdFx0XHRcdFx0XHRcdHRhZ3M6IEVESVRfVEFHLFxuXHRcdFx0XHRcdFx0XHRiYXNldGltZXN0YW1wOiBwYWdlLnJldmlzaW9uc1swXS50aW1lc3RhbXAsXG5cdFx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGxvYWRUYWJDb250KHRhYm5hbWUsIGNhbGxiYWNrLCByZWxvYWQpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCB0YWIgPSBzZWxmLnRhYnNbdGFibmFtZV07XG5cdFx0aWYgKHJlbG9hZCkge1xuXHRcdFx0dGFiLmxvYWRlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoIXRhYi5sb2FkZWQpIHtcblx0XHRcdHRhYi5jb250Lmh0bWwoJycpO1xuXHRcdFx0Ly9cblx0XHRcdGNvbnN0ICRkZXNjID0gJCgnPHA+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdkZXNjJylcblx0XHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZGVzYy10ZXh0JykudGV4dChnZXRNZXNzYWdlKCdyZWRpbG9hZGluZycpKSlcblx0XHRcdFx0LmFwcGVuZFRvKHRhYi5jb250KTtcblx0XHRcdGNvbnN0ICR0ZXh0ID0gJGRlc2MuZmluZCgnPiAuZGVzYy10ZXh0Jyk7XG5cdFx0XHRjYWxsYmFja1xuXHRcdFx0XHQuYXBwbHkoc2VsZilcblx0XHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSBtZXNzYWdlcy5qc1xuXHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHQkdGV4dC50ZXh0KGdldE1lc3NhZ2UoYHRhYiR7dGFibmFtZX1kZXNjYCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuZmFpbCgoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdC8vICogc2VlIG1lc3NhZ2VzLmpzXG5cdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdCR0ZXh0LnRleHQoZ2V0TWVzc2FnZShgdGFiJHt0YWJuYW1lfW5vdGZvdW5kYCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHRzZWxmLmFkZE1ldGhvZHMoJGRlc2MsIFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNyZWZyZXNoJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3JlZnJlc2gnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYubG9hZFRhYkNvbnQodGFibmFtZSwgY2FsbGJhY2ssIHRydWUpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR0YWIubG9hZGVkID0gdHJ1ZTtcblx0XHR9XG5cdH0sXG5cdGxvYWRpbmcoY29udGFpbmVyKSB7XG5cdFx0aWYgKGNvbnRhaW5lci5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKSA9PT0gJ3NwYW4nKSB7XG5cdFx0XHRjb250YWluZXIuYWRkQ2xhc3MoJ213LWFqYXgtbG9hZGVyJyk7XG5cdFx0fSBlbHNlIGlmICgkKCdzcGFuLm13LWFqYXgtbG9hZGVyJywgY29udGFpbmVyKS5sZW5ndGggPT09IDApIHtcblx0XHRcdCQoJzxzcGFuPicpLmFkZENsYXNzKCdtdy1hamF4LWxvYWRlcicpLmFwcGVuZFRvKGNvbnRhaW5lcik7XG5cdFx0fVxuXHR9LFxuXHRsb2FkZWQoY29udGFpbmVyKSB7XG5cdFx0aWYgKGNvbnRhaW5lci5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKSA9PT0gJ3NwYW4nKSB7XG5cdFx0XHRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ213LWFqYXgtbG9hZGVyJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoJ3NwYW4ubXctYWpheC1sb2FkZXInLCBjb250YWluZXIpLnJlbW92ZSgpO1xuXHRcdH1cblx0fSxcblx0c2VsZWN0QWxsKGNvbnQpIHtcblx0XHQkKCdpbnB1dFt0eXBlPWNoZWNrYm94XTpub3QoOmRpc2FibGVkKScsIGNvbnQpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcblx0fSxcblx0c2VsZWN0SW52ZXJzZShjb250KSB7XG5cdFx0JCgnaW5wdXRbdHlwZT1jaGVja2JveF06bm90KDpkaXNhYmxlZCknLCBjb250KS5lYWNoKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcblx0XHRcdCRlbGVtZW50LnByb3AoJ2NoZWNrZWQnLCAhJGVsZW1lbnQucHJvcCgnY2hlY2tlZCcpKTtcblx0XHR9KTtcblx0fSxcblx0c2VsZWN0QWN0aW9uKGNvbnQsIGNiKSB7XG5cdFx0Y29uc3QgcGFnZW5hbWVzID0gW107XG5cdFx0JCgnaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCcsIGNvbnQpLmVhY2goKF9pbmRleCwgcGFnZW5hbWUpID0+IHtcblx0XHRcdHBhZ2VuYW1lcy5wdXNoKCQocGFnZW5hbWUpLmRhdGEoJ3BhZ2UtdGl0bGUnKSk7XG5cdFx0fSk7XG5cdFx0aWYgKHBhZ2VuYW1lcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjYi5jYWxsKHRoaXMsIHBhZ2VuYW1lcyk7XG5cdFx0fVxuXHR9LFxuXHRjbGlja0FjdGlvbihjb250LCBjYikge1xuXHRcdGNvbnN0IHBhZ2VuYW1lID0gJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgY29udCkuZGF0YSgncGFnZS10aXRsZScpO1xuXHRcdGNiLmNhbGwodGhpcywgW3BhZ2VuYW1lXSk7XG5cdH0sXG5cdGJ1aWxkTGluayh7dGl0bGUsIGhyZWYsIGNsaWNrLCBjbGFzc25hbWV9KSB7XG5cdFx0Y29uc3QgYSA9ICQoJzxhPicpXG5cdFx0XHQuYXR0cih7XG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRocmVmLFxuXHRcdFx0XHR0YXJnZXQ6ICdfYmxhbmsnLFxuXHRcdFx0XHRyZWw6ICdub29wZW5lciBub3JlZmVycmVyJyxcblx0XHRcdH0pXG5cdFx0XHQudGV4dCh0aXRsZSk7XG5cdFx0aWYgKGNsaWNrKSB7XG5cdFx0XHRhLm9uKCdjbGljaycsIGNsaWNrKTtcblx0XHR9XG5cdFx0aWYgKGNsYXNzbmFtZSkge1xuXHRcdFx0YS5hZGRDbGFzcyhjbGFzc25hbWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3Rvb2xzLXJlZGlyZWN0X2xpbmsnKS5hcHBlbmQoYSk7XG5cdH0sXG5cdGFkZE1ldGhvZHMoJHBhcmVudCwgbWV0aG9kcykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGxldCAkY29udGFpbmVyID0gJHBhcmVudC5maW5kKCc+IC50b29scy1yZWRpcmVjdF9tZXRob2RzJyk7XG5cdFx0Y29uc3QgbWV0aG9kRXhpc3QgPSAoe2hyZWZ9KSA9PiB7XG5cdFx0XHRyZXR1cm4gJGNvbnRhaW5lci5maW5kKGBhW2hyZWY9JHtKU09OLnN0cmluZ2lmeShocmVmKX1dYCkubGVuZ3RoID4gMDtcblx0XHR9O1xuXHRcdGlmICgkY29udGFpbmVyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0JGNvbnRhaW5lciA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCd0b29scy1yZWRpcmVjdF9tZXRob2RzJykuYXBwZW5kVG8oJHBhcmVudCk7XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgbWV0aG9kIG9mIG1ldGhvZHMpIHtcblx0XHRcdGlmICghbWV0aG9kRXhpc3QobWV0aG9kKSkge1xuXHRcdFx0XHRzZWxmLmJ1aWxkTGluayhtZXRob2QpLmFwcGVuZFRvKCRjb250YWluZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0YnVpbGRTZWxlY3Rpb24obWFpbiwgbWV0ZCwgbXQsIGRzYWIpIHtcblx0XHRjb25zdCBjb250ID0gJCgnPHNwYW4+Jyk7XG5cdFx0Y29uc3Qgc2VsZSA9ICQoJzxpbnB1dD4nKS5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JykuYXBwZW5kVG8oY29udCk7XG5cdFx0dGhpcy5idWlsZExpbmsobWFpbikuYXBwZW5kVG8oY29udCk7XG5cdFx0dGhpcy5hZGRNZXRob2RzKGNvbnQsIG1ldGQpO1xuXHRcdHNlbGUuZGF0YSgncGFnZS10aXRsZScsIG10KTtcblx0XHRpZiAoZHNhYikge1xuXHRcdFx0c2VsZS5wcm9wKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gY29udDtcblx0fSxcblx0bG9hZFZpZXcocmVsb2FkKSB7XG5cdFx0Y29uc3QgJGNvbnRhaW5lciA9IHRoaXMudGFicy52aWV3LmNvbnQ7XG5cdFx0dGhpcy5sb2FkVGFiQ29udChcblx0XHRcdCd2aWV3Jyxcblx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubG9hZFJlZGlyZWN0KFdHX1BBR0VfTkFNRSwgJGNvbnRhaW5lciwgMCk7XG5cdFx0XHR9LFxuXHRcdFx0cmVsb2FkXG5cdFx0KTtcblx0fSxcblx0bG9hZENyZWF0ZShyZWxvYWQpIHtcblx0XHR0aGlzLmxvYWRUYWJDb250KFxuXHRcdFx0J2NyZWF0ZScsXG5cdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZpbmRSZWRpcmVjdChXR19QQUdFX05BTUUpO1xuXHRcdFx0fSxcblx0XHRcdHJlbG9hZFxuXHRcdCk7XG5cdH0sXG5cdGxvYWRSZWRpcmVjdChwYWdlbmFtZSwgY29udGFpbmVyLCBkZWVwLCBsb2FkZWQpIHtcblx0XHR0aGlzLmxvYWRpbmcoY29udGFpbmVyKTtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRjb25zdCB0b3AgPSBkZWVwID8gJCgnPGRsPicpLmFwcGVuZFRvKGNvbnRhaW5lcikgOiBjb250YWluZXI7XG5cdFx0aWYgKCFsb2FkZWQpIHtcblx0XHRcdGxvYWRlZCA9IHt9O1xuXHRcdFx0bG9hZGVkW3BhZ2VuYW1lXSA9IHRydWU7XG5cdFx0fVxuXHRcdGNvbnN0IG9uQ2xpY2tGaXggPSAoZXZlbnQpID0+IHtcblx0XHRcdGNvbnN0IGVudHJ5ID0gJCh0aGlzKS5wYXJlbnRzKCdkZCwgcCcpLmZpcnN0KCk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c2VsZi5jbGlja0FjdGlvbihlbnRyeSwgdGhpcy5maXgpO1xuXHRcdH07XG5cdFx0dm9pZCBhcGlcblx0XHRcdC5wb3N0KHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRwcm9wOiAncmVkaXJlY3RzJyxcblx0XHRcdFx0dGl0bGVzOiBwYWdlbmFtZSxcblx0XHRcdFx0cmRsaW1pdDogJ21heCcsXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRcdFx0c2VsZi5sb2FkZWQoY29udGFpbmVyKTtcblx0XHRcdFx0bGV0IGhhc19yZWRpcmVjdCA9IGZhbHNlO1xuXHRcdFx0XHRjb25zdCBkZXNjID0gJCgncC5kZXNjJywgc2VsZi50YWJzLnZpZXcuY29udCk7XG5cdFx0XHRcdGNvbnN0IG1heGltdW1SZWRpcmVjdERlcHRoID0gMTA7XG5cdFx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdGlmIChwYWdlLnJlZGlyZWN0cykge1xuXHRcdFx0XHRcdFx0Y29uc3Qge3JlZGlyZWN0c30gPSBwYWdlO1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCB7dGl0bGV9IG9mIHJlZGlyZWN0cykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCByZHRpdGxlID0gdGl0bGU7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHVsdGl0bGUgPSByZHRpdGxlLnJlcGxhY2UoLyAvZywgJ18nKTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZW50cnkgPSAoZGVlcCA/ICQoJzxkZD4nKSA6ICQoJzxwPicpKS5hcHBlbmRUbyh0b3ApO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBtZXRob2RzID0gW1xuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY6IG13LnV0aWwuZ2V0VXJsKHVsdGl0bGUsIHthY3Rpb246ICdlZGl0J30pLFxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3JlZGllZGl0JyksXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgaXNDeWNsZVJlZGlyZWN0ID0gcmR0aXRsZSBpbiBsb2FkZWQ7XG5cdFx0XHRcdFx0XHRcdGxvYWRlZFtyZHRpdGxlXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdGlmICghaXNDeWNsZVJlZGlyZWN0ICYmIGRlZXApIHtcblx0XHRcdFx0XHRcdFx0XHRtZXRob2RzLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZjogJyNmaXgtcmVkaXJlY3QnLFxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3RhYnZpZXdmaXgnKSxcblx0XHRcdFx0XHRcdFx0XHRcdGNsaWNrOiBvbkNsaWNrRml4LFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnN0ICRjb250YWluZXIgPSBzZWxmXG5cdFx0XHRcdFx0XHRcdFx0LmJ1aWxkU2VsZWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmOiBtdy51dGlsLmdldFVybCh1bHRpdGxlLCB7cmVkaXJlY3Q6ICdubyd9KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJkdGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0bWV0aG9kcyxcblx0XHRcdFx0XHRcdFx0XHRcdHVsdGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHQhZGVlcFxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kVG8oZW50cnkpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaXNDeWNsZVJlZGlyZWN0KSB7XG5cdFx0XHRcdFx0XHRcdFx0JGNvbnRhaW5lci5hcHBlbmQoYDxzcGFuIGNsYXNzPVwiZXJyb3JcIj4ke2dldE1lc3NhZ2UoJ2VycmN5Y2xlcmVkaXJlY3QnKX08L3NwYW4+YCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoZGVlcCA8IG1heGltdW1SZWRpcmVjdERlcHRoKSB7XG5cdFx0XHRcdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZWxmLmxvYWRSZWRpcmVjdChyZHRpdGxlLCBlbnRyeSwgZGVlcCArIDEsIGxvYWRlZCk7XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aGFzX3JlZGlyZWN0ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aGFzX3JlZGlyZWN0ID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChoYXNfcmVkaXJlY3QgJiYgZGVlcCA9PT0gMSkge1xuXHRcdFx0XHRcdHNlbGYuYWRkTWV0aG9kcyhkZXNjLCBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWFsbCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdzZWxlY3RhbGwnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0QWxsKHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNzZWxlY3QtaW52ZXJzZScsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdzZWxlY3RpbnZlcnNlJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEludmVyc2Uoc2VsZi50YWJzLnZpZXcuY29udCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI2ZpeC1zZWxlY3RlZCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCd0YWJ2aWV3Zml4JyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEFjdGlvbihzZWxmLnRhYnMudmlldy5jb250LCBzZWxmLmZpeCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChoYXNfcmVkaXJlY3QpIHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmVXaXRoKHNlbGYpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0V2l0aChzZWxmKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcblx0fSxcblx0ZmluZFZhcmlhbnRzKHBhZ2VuYW1lLCB0aXRsZXMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBzdWZmaXhSZWcgPSAvXi4rPygo77yIfFsgX11cXCgpLis/KFsp77yJXSkpJC87XG5cdFx0bGV0IHJldFRpdGxlcyA9IFtdO1xuXHRcdGNvbnN0IGRlZmVycmVkcyA9IFtdO1xuXHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiBWQVJJQU5UUykge1xuXHRcdFx0Y29uc3QgeGhyID0gYXBpXG5cdFx0XHRcdC5wb3N0KHtcblx0XHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdHBhZ2U6IHBhZ2VuYW1lLFxuXHRcdFx0XHRcdHByb3A6ICdkaXNwbGF5dGl0bGUnLFxuXHRcdFx0XHRcdHVzZWxhbmc6IHZhcmlhbnQsXG5cdFx0XHRcdFx0dmFyaWFudCxcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRoZW4oKHtwYXJzZX0pID0+IHtcblx0XHRcdFx0XHRjb25zdCB7ZGlzcGxheXRpdGxlfSA9IHBhcnNlO1xuXHRcdFx0XHRcdC8vIEV4YW1wbGU6XG5cdFx0XHRcdFx0Ly8gLSBCZWZvcmU6IDxzcGFuIGNsYXNzPVwibXctcGFnZS10aXRsZS1uYW1lc3BhY2VcIj7mnInlhb3moaPmoYjppoY8L3NwYW4+PHNwYW4gY2xhc3M9XCJtdy1wYWdlLXRpdGxlLXNlcGFyYXRvclwiPjo8L3NwYW4+PHNwYW4gY2xhc3M9XCJtdy1wYWdlLXRpdGxlLW1haW5cIj7mspnnm5I8L3NwYW4+XG5cdFx0XHRcdFx0Ly8gLSBBZnRlcjog5pyJ5YW95qGj5qGI6aaGOuaymeebklxuXHRcdFx0XHRcdGxldCB0aXRsZSA9ICQoJzxzcGFuPicpLmFwcGVuZChkaXNwbGF5dGl0bGUpLmVxKDApLnRleHQoKS50cmltKCk7XG5cdFx0XHRcdFx0dGl0bGUgPSBmaXhOYW1lc3BhY2UodGl0bGUpO1xuXHRcdFx0XHRcdHNldFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgJ1xcbnt7566A57mB6YeN5a6a5ZCRfX0nLCBTVUZGSVhfQVBQRU5EKTtcblx0XHRcdFx0XHRyZXR1cm4gdGl0bGU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0ZGVmZXJyZWRzLnB1c2goeGhyKTtcblx0XHR9XG5cdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpLnRoZW4oKC4uLmFyZ3MpID0+IHtcblx0XHRcdGNvbnN0IHN1ZmZpeGVzID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IHRpdGxlIG9mIGFyZ3MpIHtcblx0XHRcdFx0bGV0IHN1ZmZpeDtcblx0XHRcdFx0Ly8gZmluZCB0aXRsZSBzdWZmaXgsXG5cdFx0XHRcdC8vIGZvciBleGFtcGxlIFwiICjmtY7ljZfluIIpXCIgdG8gXCLluILkuK3ljLogKOa1juWNl+W4gilcIlxuXHRcdFx0XHRjb25zdCBzdWZmaXhBcnIgPSBzdWZmaXhSZWcuZXhlYyh0aXRsZSk7XG5cdFx0XHRcdGlmIChzdWZmaXhBcnIgJiYgc3VmZml4QXJyLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0XHRcdFssIHN1ZmZpeF0gPSBzdWZmaXhBcnI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3VmZml4ID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0VGl0bGVzLnB1c2godGl0bGUpO1xuXHRcdFx0XHRzdWZmaXhlcy5wdXNoKHN1ZmZpeCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBhcHBlbmQgc3VmZml4ZXNcblx0XHRcdGZvciAoY29uc3Qgc3VmZml4IG9mIG5ldyBTZXQoc3VmZml4ZXMpKSB7XG5cdFx0XHRcdHJldFRpdGxlcyA9IFtcblx0XHRcdFx0XHQuLi5yZXRUaXRsZXMsXG5cdFx0XHRcdFx0Li4udGl0bGVzLm1hcCgodGl0bGUpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IG1vZGlmaWVkVGl0bGUgPSBmaXhOYW1lc3BhY2UodGl0bGUpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHN1ZmZpeFJlZy50ZXN0KG1vZGlmaWVkVGl0bGUpID8gbW9kaWZpZWRUaXRsZSA6IG1vZGlmaWVkVGl0bGUgKyBzdWZmaXg7XG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc2VsZi5maW5kTm90RXhpc3RzKFsuLi5uZXcgU2V0KHJldFRpdGxlcyldKTtcblx0XHR9KTtcblx0fSxcblx0ZmluZE5vdEV4aXN0cyh0aXRsZXMpIHtcblx0XHRjb25zdCBkZWZlcnJlZHMgPSBbXTtcblx0XHRjb25zdCBleGNsdWRlcyA9IG5ldyBTZXQoWyfnlKjlrZfmqKHlvI8nXSk7XG5cdFx0bGV0IGFsbHRpdGxlcyA9IFtdO1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5qb2luKCd8Jyk7XG5cdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0XHRkZWZlcnJlZHMucHVzaChcblx0XHRcdFx0YXBpLnBvc3Qoe1xuXHRcdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0dGV4dDogdGl0bGVzLFxuXHRcdFx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdFx0XHR0aXRsZTogJ01lZGlhV2lraTpHYWRnZXQtVG9vbHNSZWRpcmVjdC5qcy8tJyxcblx0XHRcdFx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0XHRcdFx0dXNlbGFuZzogdmFyaWFudCxcblx0XHRcdFx0XHR2YXJpYW50LFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpLnRoZW4oKC4uLmFyZ3MpID0+IHtcblx0XHRcdGZvciAoY29uc3QgW3twYXJzZX1dIG9mIGFyZ3MpIHtcblx0XHRcdFx0YWxsdGl0bGVzID0gWy4uLmFsbHRpdGxlcywgLi4uJChwYXJzZS50ZXh0KS50ZXh0KCkudHJpbSgpLnNwbGl0KCd8JyldO1xuXHRcdFx0fVxuXHRcdFx0YWxsdGl0bGVzID0gYWxsdGl0bGVzLmZpbHRlcigodiwgaSwgYXJyKSA9PiB7XG5cdFx0XHRcdHJldHVybiBhcnIuaW5kZXhPZih2KSA9PT0gaTtcblx0XHRcdH0pO1xuXHRcdFx0YWxsdGl0bGVzID0gYWxsdGl0bGVzLmpvaW4oJ3wnKTtcblx0XHRcdHJldHVybiBhcGlcblx0XHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHRcdHRpdGxlczogYWxsdGl0bGVzLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRcdHRpdGxlcyA9IFtdO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdFx0Y29uc3Qge3RpdGxlfSA9IHBhZ2U7XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5taXNzaW5nICYmICFleGNsdWRlcy5oYXModGl0bGUpKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0aXRsZSBpbiByZWRpcmVjdEV4Y2x1ZGVzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gZXhjbHVkZSBzcGVjaWFsIHRpdGxlc1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR0aXRsZXMucHVzaCh0aXRsZSk7XG5cdFx0XHRcdFx0XHRcdGlmIChJU19DQVRFR09SWSkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRhcmdldCA9IFdHX1BBR0VfTkFNRS5yZXBsYWNlKC9eQ2F0ZWdvcnk6LywgJycpO1xuXHRcdFx0XHRcdFx0XHRcdHNldFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgJ1xcbnt75YiG57G76YeN5a6a5ZCRfCQxfX0nLnJlcGxhY2UoJyQxJywgdGFyZ2V0KSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Ly8gb25seSBzZXQgZGVmYXVsdCBzdWZmaXhcblx0XHRcdFx0XHRcdFx0c2V0UmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCAnXFxue3vliKvlkI3ph43lrprlkJF9fScsIFNVRkZJWF9TRVRERUZBVUxUKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG5cdGZpbmRSZWRpcmVjdChwYWdlbmFtZSkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IGZyY0RlZmVycmVkcyA9IFtdO1xuXHRcdGNvbnN0IGNvbnRhaW5lciA9IHNlbGYudGFicy5jcmVhdGUuY29udDtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRjb25zdCAkY29udGVudCA9ICRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQgPiBkaXYubXctcGFyc2VyLW91dHB1dCcpO1xuXHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGxldCB0aXRsZXMgPSBbXTtcblx0XHRzZWxmLmxvYWRpbmcoY29udGFpbmVyKTtcblx0XHRmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIGZpbmRSZWRpcmVjdENhbGxiYWNrcykge1xuXHRcdFx0Y29uc3QgcmV0ID0gY2FsbGJhY2socGFnZW5hbWUsICRjb250ZW50LCB0aXRsZXMpO1xuXHRcdFx0aWYgKHR5cGVvZiByZXQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHRpdGxlcy5wdXNoKHJldCk7XG5cdFx0XHR9IGVsc2UgaWYgKCdkb25lJyBpbiByZXQpIHtcblx0XHRcdFx0Ly8gaXMgRGVmZXJyZWRcblx0XHRcdFx0ZnJjRGVmZXJyZWRzLnB1c2gocmV0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRpdGxlcyA9IFsuLi5uZXcgU2V0KFsuLi50aXRsZXMsIC4uLnJldF0pXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gcmVtb3ZlIGFsbCBlbXB0eSB0aXRsZXNcblx0XHR0aXRsZXMgPSB0aXRsZXMubWFwKCh0aXRsZSkgPT4ge1xuXHRcdFx0cmV0dXJuIHRpdGxlIHx8IG51bGw7XG5cdFx0fSk7XG5cdFx0Y29uc3Qgb25DbGlja0NyZWF0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0Y29uc3QgZW50cnkgPSAkKHRoaXMpLnBhcmVudHMoJ3A6Zmlyc3QnKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRzZWxmLmNsaWNrQWN0aW9uKGVudHJ5LCBzZWxmLmNyZWF0ZSk7XG5cdFx0fTtcblx0XHQvLyBoYW5kbGVzIHRoZSBkZWZlcnJlZCBjYWxsYmFja3Ncblx0XHR2b2lkICQud2hlbiguLi5mcmNEZWZlcnJlZHMpXG5cdFx0XHQudGhlbigoLi4uYXJncykgPT4ge1xuXHRcdFx0XHRmb3IgKGNvbnN0IHJldCBvZiBhcmdzKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiByZXQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHR0aXRsZXMucHVzaChyZXQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aXRsZXMgPSBbLi4ubmV3IFNldChbLi4udGl0bGVzLCAuLi5yZXRdKV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBzZWxmLmZpbmRWYXJpYW50cyhwYWdlbmFtZSwgdGl0bGVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoZnZ0aXRsZXMpID0+IHtcblx0XHRcdFx0Ly8gYnVpbGQgSFRNTFxuXHRcdFx0XHRzZWxmLmxvYWRlZChjb250YWluZXIpO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHRpdGxlIG9mIGZ2dGl0bGVzKSB7XG5cdFx0XHRcdFx0Y29uc3QgdWx0aXRsZSA9IHRpdGxlLnJlcGxhY2UoJyAnLCAnXycpO1xuXHRcdFx0XHRcdGNvbnN0IGVudHJ5ID0gJCgnPHA+JykuYXBwZW5kVG8oY29udGFpbmVyKTtcblx0XHRcdFx0XHRzZWxmLmJ1aWxkU2VsZWN0aW9uKFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiBtdy51dGlsLmdldFVybCh1bHRpdGxlLCB7YWN0aW9uOiAnZWRpdCcsIHJlZGxpbms6ICcxJ30pLFxuXHRcdFx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRcdFx0Y2xhc3NuYW1lOiAnbmV3Jyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRocmVmOiAnI2NyZWF0ZS1yZWRpcmVjdCcsXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3RhYmNyZWF0ZXRpdGxlJyksXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6IG9uQ2xpY2tDcmVhdGUsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0dWx0aXRsZSxcblx0XHRcdFx0XHRcdGZhbHNlXG5cdFx0XHRcdFx0KS5hcHBlbmRUbyhlbnRyeSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZGVzYyA9ICQoJ3AuZGVzYycsIGNvbnRhaW5lcik7XG5cdFx0XHRcdGlmIChmdnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2VsZi5hZGRNZXRob2RzKGRlc2MsIFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNzZWxlY3QtYWxsJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3NlbGVjdGFsbCcpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBbGwoY29udGFpbmVyKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWludmVyc2UnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0aW52ZXJzZScpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RJbnZlcnNlKGNvbnRhaW5lcik7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI2NyZWF0ZS1zZWxlY3RlZCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCd0YWJjcmVhdGV0aXRsZScpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBY3Rpb24oY29udGFpbmVyLCBzZWxmLmNyZWF0ZSk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZVdpdGgoc2VsZiwgW2Z2dGl0bGVzXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3RXaXRoKHNlbGYsIFtmdnRpdGxlc10pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xuXHR9LFxufTtcbiIsICJpbXBvcnQge1dHX1VTRVJfTEFOR1VBR0V9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5leHBvcnQgY29uc3QgdG9vbHNSZWRpcmVjdE1lc3NhZ2VzID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMoV0dfVVNFUl9MQU5HVUFHRSkpIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtYnRudGl0bGUnOiAn6YeN5paw5bCO5ZCRJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWJ0bmRlc2MnOiAn5Ym15bu65ZKM566h55CG5q2k6aCB6Z2i55qE6YeN5paw5bCO5ZCRJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWRsZ3RpdGxlJzogJ+WJteW7uuWSjOeuoeeQhumHjeaWsOWwjuWQkScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1yZWRpbG9hZGluZyc6ICfmlbjmk5rliqDovInkuK3vvIzoq4vnqI3lgJnigKbigKYnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtcmVkaWVkaXQnOiAn57eo6LyvJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXNlbGVjdGFsbCc6ICflhajpgbgnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0aW52ZXJzZSc6ICflj43pgbgnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld3RpdGxlJzogJ+afpeeciycsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3ZGVzYyc6ICfku6XkuIvmmK/mjIflkJHmraTpoIHpnaLnmoTph43mlrDlsI7lkJHpoIHvvJonLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld25vdGZvdW5kJzogJ+aykuacieaJvuWIsOS7u+S9leaMh+WQkeatpOmggemdoueahOmHjeaWsOWwjuWQkemggeOAgicsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3bXVsdGknOiAn5aSa6YeNJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdmaXgnOiAn5L+u5b6pJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWZpeGxvYWRpbmcnOiAn6KuL56iN5YCZ77yM5q2j5Zyo6Ieq5YuV5L+u5b6p6YeN5paw5bCO5ZCR4oCm4oCmJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWZpeHRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1maXhzdW1tYXJ5JzogJ+e3qOi8r+W3peWFt++8muS/ruW+qeWkmumHjemHjeaWsOWwjuWQkScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGV0aXRsZSc6ICflibXlu7onLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlZGVzYyc6ICfku6XkuIvmmK/lsJrmnKrlibXlu7rnmoTph43mlrDlsI7lkJHpoIHvvJonLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlbm90Zm91bmQnOiAn5rKS5pyJ5om+5Yiw5Y+v5Lul5Ym15bu655qE6YeN5paw5bCO5ZCR6aCB44CCJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWFsbCc6ICflhajpg6jlibXlu7onLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlbG9hZGluZyc6ICfoq4vnqI3lgJnvvIzmraPlnKjoh6rli5XlibXlu7rph43mlrDlsI7lkJHigKbigKYnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRldGV4dCc6ICcjUkVESVJFQ1QgW1skMV1dJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXN1bW1hcnknOiAn57eo6Lyv5bel5YW377ya6Ieq5YuV5Ym15bu66YeN5paw5bCO5ZCR5YiwW1skMV1dJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWVycmN5Y2xlcmVkaXJlY3QnOiAn54Sh5rOV6Ieq5YuV5L+u5b6p77ya55m854++5b6q55Kw6YeN5paw5bCO5ZCRJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXJlZnJlc2gnOiAn5Yi35pawJyxcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtYnRudGl0bGUnOiAn6YeN5a6a5ZCRJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWJ0bmRlc2MnOiAn5Yib5bu65ZKM566h55CG5q2k6aG16Z2i55qE6YeN5a6a5ZCRJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWRsZ3RpdGxlJzogJ+WIm+W7uuWSjOeuoeeQhumHjeWumuWQkScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1yZWRpbG9hZGluZyc6ICfmlbDmja7liqDovb3kuK3vvIzor7fnqI3lgJnigKbigKYnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtcmVkaWVkaXQnOiAn57yW6L6RJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXNlbGVjdGFsbCc6ICflhajpgIknLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0aW52ZXJzZSc6ICflj43pgIknLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld3RpdGxlJzogJ+afpeeciycsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3ZGVzYyc6ICfku6XkuIvmmK/mjIflkJHmraTpobXpnaLnmoTph43lrprlkJHpobXvvJonLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld25vdGZvdW5kJzogJ+ayoeacieaJvuWIsOS7u+S9leaMh+WQkeatpOmhtemdoueahOmHjeWumuWQkemhteOAgicsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3bXVsdGknOiAn5aSa6YeNJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdmaXgnOiAn5L+u5aSNJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWZpeGxvYWRpbmcnOiAn6K+356iN5YCZ77yM5q2j5Zyo6Ieq5Yqo5L+u5aSN6YeN5a6a5ZCR4oCm4oCmJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWZpeHRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1maXhzdW1tYXJ5JzogJ+e8lui+keW3peWFt++8muS/ruWkjeWkmumHjemHjeWumuWQkScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGV0aXRsZSc6ICfliJvlu7onLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlZGVzYyc6ICfku6XkuIvmmK/lsJrmnKrliJvlu7rnmoTph43lrprlkJHpobXvvJonLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlbm90Zm91bmQnOiAn5rKh5pyJ5om+5Yiw5Y+v5Lul5Yib5bu655qE6YeN5a6a5ZCR6aG144CCJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWFsbCc6ICflhajpg6jliJvlu7onLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlbG9hZGluZyc6ICfor7fnqI3lgJnvvIzmraPlnKjoh6rliqjliJvlu7rph43lrprlkJHigKbigKYnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRldGV4dCc6ICcjUkVESVJFQ1QgW1skMV1dJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXN1bW1hcnknOiAn57yW6L6R5bel5YW377ya6Ieq5Yqo5Yib5bu66YeN5a6a5ZCR5YiwW1skMV1dJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWVycmN5Y2xlcmVkaXJlY3QnOiAn5peg5rOV6Ieq5Yqo5L+u5aSN77ya5Y+R546w5b6q546v6YeN5a6a5ZCRJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXJlZnJlc2gnOiAn5Yi35pawJyxcblx0XHR9KTtcblx0fVxufTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuZXhwb3J0IGNvbnN0IHRvb2xzUmVkaXJlY3RfYmlvX2xhdGluX25hbWVzID0gKCkgPT4ge1xuXHRjb25zdCBwcmVmaXhSZWdleCA9IC9b5a2m5a24XeWQjVxccypbOu+8ml0/XFxzKiQvO1xuXHRjb25zdCBjb2xvblJlZ2V4ID0gL15cXHMqWzrvvJpdP1xccyokLztcblx0d2luZG93LnRvb2xzUmVkaXJlY3QuZmluZFJlZGlyZWN0Q2FsbGJhY2soKF9wYWdlbmFtZSwgJGNvbnRlbnQpID0+IHtcblx0XHRjb25zdCB0aXRsZXM6IHN0cmluZ1tdID0gW107XG5cdFx0JGNvbnRlbnQuZmluZCgnPiBwID4gW2xhbmc9XCJsYVwiXSwgPiBwID4gaScpLmVhY2goKF9pbmRleCwgZWxlbWVudCkgPT4ge1xuXHRcdFx0bGV0IHRpdGxlO1xuXHRcdFx0bGV0IHByZXZpb3VzTm9kZSA9IGVsZW1lbnQucHJldmlvdXNTaWJsaW5nO1xuXHRcdFx0aWYgKHByZXZpb3VzTm9kZSAmJiBjb2xvblJlZ2V4LnRlc3QocHJldmlvdXNOb2RlLnRleHRDb250ZW50KSkge1xuXHRcdFx0XHRwcmV2aW91c05vZGUgPSBwcmV2aW91c05vZGUucHJldmlvdXNTaWJsaW5nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHByZXZpb3VzTm9kZSAmJiBwcmVmaXhSZWdleC50ZXN0KHByZXZpb3VzTm9kZS50ZXh0Q29udGVudCkpIHtcblx0XHRcdFx0dGl0bGUgPSAkKGVsZW1lbnQpLnRleHQoKS50cmltKCk7XG5cdFx0XHRcdHRpdGxlcy5wdXNoKHRpdGxlKTtcblx0XHRcdFx0d2luZG93LnRvb2xzUmVkaXJlY3Quc2V0UmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCAnXFxue3vlrablkI3ph43lrprlkJF9fScpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHJldHVybiBbLi4ubmV3IFNldCh0aXRsZXMpXTtcblx0fSk7XG59O1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5leHBvcnQgY29uc3QgdG9vbHNSZWRpcmVjdF9jb3VydGVzeV9hbmRfYXJ0X25hbWVzID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBwcmVmaXhSZWdleCA9IC9b5Y+35a2X6JmfXVxccyokLztcblx0Y29uc3QgY29tcFN1cm5hbWVzID0gW1xuXHRcdCfmrKfpmLMnLFxuXHRcdCfmrZDpmb0nLFxuXHRcdCfku6Tni5AnLFxuXHRcdCfnmofnlKsnLFxuXHRcdCfkuIrlrpgnLFxuXHRcdCflj7jlvpInLFxuXHRcdCfor7jokZsnLFxuXHRcdCfoq7jokZsnLFxuXHRcdCflj7jpqawnLFxuXHRcdCflj7jppqwnLFxuXHRcdCflrofmlocnLFxuXHRcdCflkbzlu7YnLFxuXHRcdCfnq6/mnKgnLFxuXHRcdCfnlLPlsaAnLFxuXHRcdCflsInov58nLFxuXHRcdCflsInpgbInLFxuXHRcdCfovanovpUnLFxuXHRcdCfou5LovYUnLFxuXHRcdCflpI/kvq8nLFxuXHRcdCfljZflrqsnLFxuXHRcdCfljZflrq4nLFxuXHRcdCflj7jnqbonLFxuXHRcdCfpspzkuo4nLFxuXHRcdCfprq7kuo4nLFxuXHRcdCfopb/pl6gnLFxuXHRcdCfopb/ploAnLFxuXHRcdCfni6zlraQnLFxuXHRcdCfnjajlraQnLFxuXHRcdCfkuJzmlrknLFxuXHRcdCfmnbHmlrknLFxuXHRcdCflj7jlr4cnLFxuXHRcdCfnvoroiIwnLFxuXHRcdCfnrKzkupQnLFxuXHRcdCfmooHkuJgnLFxuXHRcdCfplLrnprsnLFxuXHRcdCfpjb7pm6InLFxuXHRcdCfkuJzpg60nLFxuXHRcdCfmnbHpg60nLFxuXHRcdCflhazlrZknLFxuXHRcdCflhazlrasnLFxuXHRcdCflrZ/lrZknLFxuXHRcdCflrZ/lrasnLFxuXHRcdCfku7LlrZknLFxuXHRcdCfku7LlrasnLFxuXHRcdCflj5TlrZknLFxuXHRcdCflj5TlrasnLFxuXHRcdCflraPlrZknLFxuXHRcdCflraPlrasnLFxuXHRcdCfplb/lrZknLFxuXHRcdCfplbflrasnLFxuXHRcdCfmhZXlrrknLFxuXHRcdCfpl77kuJgnLFxuXHRcdCfplq3kuJgnLFxuXHRcdCfkuJzpl6gnLFxuXHRcdCfmnbHploAnLFxuXHRcdCflhaznvoonLFxuXHRcdCfkuIfkv58nLFxuXHRcdCfnmb7ph4wnLFxuXHRcdCflhazlhrYnLFxuXHRcdCflkbzlu7YnLFxuXHRcdCfmta7lsaAnLFxuXHRcdCfljbPloqgnLFxuXHRcdCfljZXkuo4nLFxuXHRcdCfllq7kuo4nLFxuXHRcdCfnlLDkuJgnLFxuXHRdO1xuXHRjb25zdCBjb21wU3VybmFtZVJlZ2V4ID0gbmV3IFJlZ0V4cChgXigke2NvbXBTdXJuYW1lcy5qb2luKCd8Jyl9KS5gKTtcblx0Y29uc3QgZmluZFN1cm5hbWUgPSAocGFnZW5hbWU6IHN0cmluZykgPT4ge1xuXHRcdGlmIChjb21wU3VybmFtZVJlZ2V4LnRlc3QocGFnZW5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gY29tcFN1cm5hbWVSZWdleC5leGVjKHBhZ2VuYW1lKVsxXTtcblx0XHR9XG5cdFx0cmV0dXJuIHBhZ2VuYW1lWzBdO1xuXHR9O1xuXHR3aW5kb3cudG9vbHNSZWRpcmVjdC5maW5kUmVkaXJlY3RDYWxsYmFjaygocGFnZW5hbWUsICRjb250ZW50KSA9PiB7XG5cdFx0bGV0IHN1cm5hbWU7XG5cdFx0Y29uc3QgdGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdCRjb250ZW50LmZpbmQoJz4gcCA+IGInKS5lYWNoKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0IHByZXZpb3VzTm9kZSA9IGVsZW1lbnQucHJldmlvdXNTaWJsaW5nO1xuXHRcdFx0aWYgKHByZXZpb3VzTm9kZSAmJiBwcmVmaXhSZWdleC50ZXN0KHByZXZpb3VzTm9kZS50ZXh0Q29udGVudCkpIHtcblx0XHRcdFx0Y29uc3QgbmFtZSA9ICQoZWxlbWVudCkudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0aWYgKCFzdXJuYW1lKSB7XG5cdFx0XHRcdFx0c3VybmFtZSA9IGZpbmRTdXJuYW1lKHBhZ2VuYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aXRsZXMucHVzaChzdXJuYW1lICsgbmFtZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIFsuLi5uZXcgU2V0KHRpdGxlcyldO1xuXHR9KTtcbn07XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmV4cG9ydCBjb25zdCB0b29sc1JlZGlyZWN0X29wdF9ib2xkcyA9ICgpID0+IHtcblx0d2luZG93LnRvb2xzUmVkaXJlY3QuZmluZFJlZGlyZWN0QnlTZWxlY3RvcignZGl2I213LWNvbnRlbnQtdGV4dCBwID4gYicpO1xufTtcbiIsICJpbXBvcnQgJy4vVG9vbHNSZWRpcmVjdC5sZXNzJztcbmltcG9ydCB7VG9vbHNSZWRpcmVjdH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHt0b29sc1JlZGlyZWN0TWVzc2FnZXN9IGZyb20gJy4vbW9kdWxlcy9tZXNzYWdlcyc7XG5cbmltcG9ydCB7dG9vbHNSZWRpcmVjdF9iaW9fbGF0aW5fbmFtZXN9IGZyb20gJy4vbW9kdWxlcy9iaW8tbGF0aW4tbmFtZXMnO1xuaW1wb3J0IHt0b29sc1JlZGlyZWN0X2NvdXJ0ZXN5X2FuZF9hcnRfbmFtZXN9IGZyb20gJy4vbW9kdWxlcy9jb3VydGVzeS1hbmQtYXJ0LW5hbWVzJztcbmltcG9ydCB7dG9vbHNSZWRpcmVjdF9vcHRfYm9sZHN9IGZyb20gJy4vbW9kdWxlcy9vcHQtYm9sZHMnO1xuXG50b29sc1JlZGlyZWN0TWVzc2FnZXMoKTtcblRvb2xzUmVkaXJlY3QuaW5pdCgpO1xuXG5pZiAobXcudXNlci5vcHRpb25zLmdldCgnZ2FkZ2V0LVRvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzJykpIHtcblx0JCh0b29sc1JlZGlyZWN0X2Jpb19sYXRpbl9uYW1lcyk7XG59XG5cbmlmIChtdy51c2VyLm9wdGlvbnMuZ2V0KCdnYWRnZXQtVG9vbHNSZWRpcmVjdC1jb3VydGVzeS1hbmQtYXJ0LW5hbWVzJykpIHtcblx0JCh0b29sc1JlZGlyZWN0X2NvdXJ0ZXN5X2FuZF9hcnRfbmFtZXMpO1xufVxuXG5pZiAobXcudXNlci5vcHRpb25zLmdldCgnZ2FkZ2V0LVRvb2xzUmVkaXJlY3Qtb3B0LWJvbGRzJykpIHtcblx0JCh0b29sc1JlZGlyZWN0X29wdF9ib2xkcyk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLHdGQUFBQSxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ25DO0FBR0EsSUFBQUEsUUFBTztBQUFBLElBRUwsTUFBTSxPQUFPLGNBQWMsWUFBWSxVQUFVLEtBQ2pELE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTTtBQUFBLElBRXpDLE1BQU0sT0FBTyxRQUFRLFlBQVksSUFBSSxLQUNyQyxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sS0FDekMsTUFBTSxPQUFPLFdBQVEsWUFBWSxPQUFJO0FBQUEsSUFFcEMsMkJBQVk7QUFBRSxhQUFPO0FBQUEsSUFBTSxFQUFHLEtBQUssU0FBUyxhQUFhLEVBQUU7QUFBQTtBQUFBOzs7QUNmOUQ7QUFBQSx1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LENBQUM7SUFDekM7QUFDQSxXQUFPQSxTQUFTLENBQUM7RUFDbEI7QUFDQXhILFNBQU9DLGNBQWNqQixxQkFBcUIsQ0FBQ3dJLFVBQVVpRixhQUFhO0FBQ2pFLFFBQUkwQjtBQUNKLFVBQU12SyxTQUFtQixDQUFBO0FBQ3pCNkksYUFBU3ZMLEtBQUssU0FBUyxFQUFFa0csS0FBSyxDQUFDOUgsUUFBUUMsWUFBWTtBQUNsRCxZQUFNcU8sZUFBZXJPLFFBQVFzTztBQUM3QixVQUFJRCxnQkFBZ0JILFlBQVkzTyxLQUFLOE8sYUFBYUUsV0FBVyxHQUFHO0FBQy9ELGNBQU1NLE9BQU9oUCxFQUFFRyxPQUFPLEVBQUVqQixLQUFLLEVBQUVtQixLQUFLO0FBQ3BDLFlBQUksQ0FBQzBPLFNBQVM7QUFDYkEsb0JBQVVELFlBQVkxRyxRQUFRO1FBQy9CO0FBQ0E1RCxlQUFPcEYsS0FBSzJQLFVBQVVDLElBQUk7TUFDM0I7SUFDRCxDQUFDO0FBQ0QsV0FBTyxDQUFDLEdBQUcsSUFBSXJPLElBQUk2RCxNQUFNLENBQUM7RUFDM0IsQ0FBQztBQUNGOztBQzNGTyxJQUFNeUssMEJBQTBCQSxNQUFNO0FBQzVDck8sU0FBT0MsY0FBY2YsdUJBQXVCLDJCQUEyQjtBQUN4RTs7QUNJQWtPLHNCQUFzQjtBQUN0QmxOLGNBQWNJLEtBQUs7QUFFbkIsSUFBSWxFLEdBQUdrUyxLQUFLQyxRQUFRalMsSUFBSSxzQ0FBc0MsR0FBRztBQUNoRThDLElBQUVvTyw2QkFBNkI7QUFDaEM7QUFFQSxJQUFJcFIsR0FBR2tTLEtBQUtDLFFBQVFqUyxJQUFJLDZDQUE2QyxHQUFHO0FBQ3ZFOEMsSUFBRTJPLG9DQUFvQztBQUN2QztBQUVBLElBQUkzUixHQUFHa1MsS0FBS0MsUUFBUWpTLElBQUksZ0NBQWdDLEdBQUc7QUFDMUQ4QyxJQUFFaVAsdUJBQXVCO0FBQzFCOyIsCiAgIm5hbWVzIjogWyJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiU3ltYm9sIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJkb2N1bWVudCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJUeXBlRXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiJCIsICJXR19OQU1FU1BBQ0VfSURTIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfTkFNRVNQQUNFX05VTUJFUiIsICJXR19QQUdFX05BTUUiLCAiV0dfVVNFUl9MQU5HVUFHRSIsICJJU19DQVRFR09SWSIsICJTVUZGSVhfQVBQRU5EIiwgIlNVRkZJWF9SRVBMQUNFIiwgIlNVRkZJWF9TRVRERUZBVUxUIiwgIkVESVRfVEFHIiwgIlZBUklBTlRTIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFyZ3MiLCAiY29uY2F0IiwgImxlbmd0aCIsICJtZXNzYWdlIiwgInBhcnNlIiwgInBsYWluIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJmaW5kUmVkaXJlY3RDYWxsYmFja3MiLCAicGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXgiLCAicmVkaXJlY3RFeGNsdWRlcyIsICJuc1ByZWZpeGVzIiwgIm5zQ2Fub25QcmVmaXgiLCAibnNQcmVmaXhQYXR0ZXJuIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJ0ZXh0IiwgIm5zaWQiLCAicHVzaCIsICJzcGxpdCIsICJSZWdFeHAiLCAiam9pbiIsICJmaXhOYW1lc3BhY2UiLCAidGl0bGUiLCAidGVzdCIsICJyZXBsYWNlIiwgImZpbmRSZWRpcmVjdENhbGxiYWNrIiwgImNhbGxiYWNrIiwgImZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IiLCAic2VsZWN0b3IiLCAiJCIsICJtYXAiLCAiX2luZGV4IiwgImVsZW1lbnQiLCAiZXEiLCAidHJpbSIsICJzZXRSZWRpcmVjdFRleHRTdWZmaXgiLCAic3VmZml4IiwgImZsYWciLCAiZmxhZ19zZXQiLCAiZmxhZ19hcHBlbmQiLCAiU2V0IiwgIndpbmRvdyIsICJ0b29sc1JlZGlyZWN0IiwgIlRvb2xzUmVkaXJlY3QiLCAidGFic2VsZW0iLCAidGFnc2VsZW0iLCAidmFyaWFudHMiLCAiaW5pdCIsICJzZWxmIiwgIiRib2R5IiwgImJ1dHRvbiIsICJhZGRDbGFzcyIsICJhdHRyIiwgImNzcyIsICJhcHBlbmQiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiZGlhbG9nIiwgImZpbmQiLCAiYWZ0ZXIiLCAiYmdpZnJhbWUiLCAicmVzaXphYmxlIiwgIm1vZGFsIiwgIndpZHRoIiwgIk1hdGgiLCAicm91bmQiLCAicG9zaXRpb24iLCAiaGVpZ2h0IiwgImFwcGVuZFRvIiwgImFkZFRhYnMiLCAidGFicyIsICJrbmFtZSIsICJoYXNPd24iLCAiY2hhckF0IiwgInRvVXBwZXJDYXNlIiwgInNsaWNlIiwgInRhYiIsICJ0YWciLCAiY29udCIsICJsb2FkVmlldyIsICJjcmVhdGVUYWIiLCAidGFibmFtZSIsICJ0YWJ0aXRsZSIsICJvbkNsaWNrIiwgImNhbGwiLCAibG9hZGVkIiwgIl9pbml0VGFiVmlldyIsICJfaW5pdFRhYkNyZWF0ZSIsICJsb2FkQ3JlYXRlIiwgInZpZXciLCAiY3JlYXRlIiwgImZpeCIsICJwYWdlbmFtZXMiLCAicmVtb3ZlIiwgImxvYWRpbmciLCAiYnVsa0VkaXRCeVJlZ2V4IiwgInRoZW4iLCAic2V0VGltZW91dCIsICJidWxrRWRpdCIsICJhZGRSZWRpcmVjdFRleHRTdWZmaXgiLCAidGl0bGVzIiwgInN1bW1hcnkiLCAiZmlsdGVyIiwgInYiLCAiaSIsICJhcnIiLCAiaW5kZXhPZiIsICJwb3N0IiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInF1ZXJ5IiwgImRlZmVycmVkcyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAicGFnZXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAicG9zdFdpdGhUb2tlbiIsICJ0YWdzIiwgImVyciIsICJlIiwgImYiLCAid2hlbiIsICJyZWdleCIsICJydnByb3AiLCAicnZzbG90cyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJwYWdlIiwgImNvbnRlbnQiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm5ld0NvbnRlbnQiLCAiYmFzZXRpbWVzdGFtcCIsICJ0aW1lc3RhbXAiLCAibG9hZFRhYkNvbnQiLCAicmVsb2FkIiwgImh0bWwiLCAiJGRlc2MiLCAiJHRleHQiLCAiYXBwbHkiLCAiZmFpbCIsICJhbHdheXMiLCAiYWRkTWV0aG9kcyIsICJocmVmIiwgImNsaWNrIiwgImNvbnRhaW5lciIsICJ0b0xvd2VyQ2FzZSIsICJyZW1vdmVDbGFzcyIsICJzZWxlY3RBbGwiLCAic2VsZWN0SW52ZXJzZSIsICJlYWNoIiwgIiRlbGVtZW50IiwgInNlbGVjdEFjdGlvbiIsICJjYiIsICJwYWdlbmFtZSIsICJkYXRhIiwgImNsaWNrQWN0aW9uIiwgImJ1aWxkTGluayIsICJjbGFzc25hbWUiLCAiYSIsICJ0YXJnZXQiLCAicmVsIiwgIiRwYXJlbnQiLCAibWV0aG9kcyIsICIkY29udGFpbmVyIiwgIm1ldGhvZEV4aXN0IiwgIkpTT04iLCAic3RyaW5naWZ5IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIm1ldGhvZCIsICJidWlsZFNlbGVjdGlvbiIsICJtYWluIiwgIm1ldGQiLCAibXQiLCAiZHNhYiIsICJzZWxlIiwgImxvYWRSZWRpcmVjdCIsICJmaW5kUmVkaXJlY3QiLCAiZGVlcCIsICJkZWZlcnJlZCIsICJEZWZlcnJlZCIsICJ0b3AiLCAib25DbGlja0ZpeCIsICJlbnRyeSIsICJwYXJlbnRzIiwgImZpcnN0IiwgInJkbGltaXQiLCAiaGFzX3JlZGlyZWN0IiwgImRlc2MiLCAibWF4aW11bVJlZGlyZWN0RGVwdGgiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAicmVkaXJlY3RzIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgInJkdGl0bGUiLCAidWx0aXRsZSIsICJ1dGlsIiwgImdldFVybCIsICJpc0N5Y2xlUmVkaXJlY3QiLCAicmVkaXJlY3QiLCAicmVzb2x2ZVdpdGgiLCAicmVqZWN0V2l0aCIsICJwcm9taXNlIiwgImZpbmRWYXJpYW50cyIsICJzdWZmaXhSZWciLCAicmV0VGl0bGVzIiwgIl9pMiIsICJfVkFSSUFOVFMiLCAidmFyaWFudCIsICJ4aHIiLCAidXNlbGFuZyIsICJkaXNwbGF5dGl0bGUiLCAic3VmZml4ZXMiLCAiX2kzIiwgIl9hcmdzIiwgInN1ZmZpeEFyciIsICJleGVjIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgIm1vZGlmaWVkVGl0bGUiLCAiZmluZE5vdEV4aXN0cyIsICJleGNsdWRlcyIsICJhbGx0aXRsZXMiLCAiX2k0IiwgIl9WQVJJQU5UUzIiLCAiY29udGVudG1vZGVsIiwgIl9pNSIsICJfYXJnczIiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAibWlzc2luZyIsICJoYXMiLCAiZnJjRGVmZXJyZWRzIiwgIiRjb250ZW50IiwgIl9pNiIsICJfZmluZFJlZGlyZWN0Q2FsbGJhY2siLCAicmV0IiwgIm9uQ2xpY2tDcmVhdGUiLCAiX2k3IiwgIl9hcmdzMyIsICJmdnRpdGxlcyIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJyZWRsaW5rIiwgInRvb2xzUmVkaXJlY3RNZXNzYWdlcyIsICJpbmNsdWRlcyIsICJtZXNzYWdlcyIsICJzZXQiLCAidG9vbHNSZWRpcmVjdF9iaW9fbGF0aW5fbmFtZXMiLCAicHJlZml4UmVnZXgiLCAiY29sb25SZWdleCIsICJfcGFnZW5hbWUiLCAicHJldmlvdXNOb2RlIiwgInByZXZpb3VzU2libGluZyIsICJ0ZXh0Q29udGVudCIsICJ0b29sc1JlZGlyZWN0X2NvdXJ0ZXN5X2FuZF9hcnRfbmFtZXMiLCAiY29tcFN1cm5hbWVzIiwgImNvbXBTdXJuYW1lUmVnZXgiLCAiZmluZFN1cm5hbWUiLCAic3VybmFtZSIsICJuYW1lIiwgInRvb2xzUmVkaXJlY3Rfb3B0X2JvbGRzIiwgInVzZXIiLCAib3B0aW9ucyJdCn0K
