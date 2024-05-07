/**
 * SPDX-License-Identifier: GPL-2.0
 * _addText: '{{Gadget Header|license=GPL-2.0}}'
 *
 * @base {@link https://github.com/wikimedia-gadgets/VariantAlly}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/VariantAllyDialog}
 * @license GPL-2.0 {@link https://youshou.wiki/wiki/H:GPLV2}
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

// dist/VariantAllyDialog/VariantAllyDialog.js
var _mw$config$get;
//! src/VariantAllyDialog/VariantAllyDialog.ts
var import_vue22 = require("vue");
var import_vue19 = require("vue");
var import_vue20 = require("vue");
var import_ext_gadget = require("ext.gadget.VariantAlly");
var import_vue11 = require("vue");
var import_vue12 = require("vue");
var import_vue3 = require("vue");
var import_vue = require("vue");
var VAIcon_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "VAIcon",
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true,
      default: 20
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue2 = require("vue");
var _hoisted_1 = ["width", "height"];
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = /* @__PURE__ */ (0, import_vue2.createElementVNode)(
  "path",
  {
    d: "M20 18h-1.44a.61.61 0 01-.4-.12.81.81 0 01-.23-.31L17 15h-5l-1 2.54a.77.77 0 01-.22.3.59.59 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.19 17.19 0 01-5 2.1q.56.82.87 1.38a23.28 23.28 0 005.22-2.51 15.64 15.64 0 003.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 01-2.45 4.45 9.11 9.11 0 01-2.46-4.45z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_4 = {
  key: 1
};
var _hoisted_5 = /* @__PURE__ */ (0, import_vue2.createElementVNode)(
  "path",
  {
    d: "m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_6 = /* @__PURE__ */ (0, import_vue2.createElementVNode)(
  "path",
  {
    d: "M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_7 = [_hoisted_5, _hoisted_6];
var _hoisted_8 = {
  key: 2
};
var _hoisted_9 = /* @__PURE__ */ (0, import_vue2.createElementVNode)(
  "path",
  {
    d: "M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_10 = [_hoisted_9];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("svg", {
    class: "va-icon-button__icon",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: $props.size,
    height: $props.size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true"
  }, [$props.icon === "lang" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_2, [(0, import_vue2.createCommentVNode)(" eslint-disable "), _hoisted_3, (0, import_vue2.createCommentVNode)(" eslint-enable ")])) : $props.icon === "close" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_4, [..._hoisted_7])) : ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_8, [..._hoisted_10]))], 8, _hoisted_1);
}
//! src/VariantAllyDialog/components/VAIcon.vue
VAIcon_default.render = render;
VAIcon_default.__file = "src\\VariantAllyDialog\\components\\VAIcon.vue";
var VAIcon_default2 = VAIcon_default;
var VAButton_default = /* @__PURE__ */ (0, import_vue3.defineComponent)({
  __name: "VAButton",
  props: {
    icon: {
      type: null,
      required: false
    },
    indicator: {
      type: null,
      required: false
    },
    action: {
      type: String,
      required: false
    },
    weight: {
      type: String,
      required: false
    }
  },
  emits: ["click"],
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const __returned__ = {
      VAIcon: VAIcon_default2
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue4 = require("vue");
var _hoisted_12 = {
  key: 1,
  class: "va-button__text"
};
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
    "button",
    {
      class: (0, import_vue4.normalizeClass)(["va-button", {
        "va-button--action-progressive": $props.action === "progressive",
        "va-button--weight-quiet": $props.weight === "quiet"
      }]),
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
    },
    [$props.icon !== void 0 ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)($setup["VAIcon"], {
      key: 0,
      class: "va-button__icon",
      icon: $props.icon
    }, null, 8, ["icon"])) : (0, import_vue4.createCommentVNode)("v-if", true), _ctx.$slots["default"] ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("span", _hoisted_12, [(0, import_vue4.renderSlot)(_ctx.$slots, "default", {}, void 0, true)])) : (0, import_vue4.createCommentVNode)("v-if", true), $props.indicator !== void 0 ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)($setup["VAIcon"], {
      key: 2,
      class: "va-button__indicator",
      icon: $props.indicator,
      size: 16
    }, null, 8, ["icon"])) : (0, import_vue4.createCommentVNode)("v-if", true)],
    2
    /* CLASS */
  );
}
//! src/VariantAllyDialog/components/VAButton.vue
VAButton_default.render = render2;
VAButton_default.__file = "src\\VariantAllyDialog\\components\\VAButton.vue";
VAButton_default.__scopeId = "data-v-bb7734b1";
var VAButton_default2 = VAButton_default;
var import_vue5 = require("vue");
function render3(_ctx, _cache) {
  return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(import_vue5.Transition, {
    name: "va-fade",
    mode: "out-in"
  }, {
    default: (0, import_vue5.withCtx)(() => [(0, import_vue5.renderSlot)(_ctx.$slots, "default", {}, void 0, true)]),
    _: 3
    /* FORWARDED */
  });
}
//! src/VariantAllyDialog/components/VAFadeTransition.vue
var script = {};
script.render = render3;
script.__file = "src\\VariantAllyDialog\\components\\VAFadeTransition.vue";
script.__scopeId = "data-v-bb9c5751";
var VAFadeTransition_default = script;
//! src/VariantAllyDialog/composables/useI18n.ts
var import_vue7 = require("vue");
//! src/VariantAllyDialog/messages.json
var messages_default = {
  variants: {
    "zh-cn": "中国大陆简体",
    "zh-sg": "新加坡简体",
    "zh-my": "马来西亚简体",
    "zh-hk": "中國香港繁體",
    "zh-mo": "中國澳門繁體",
    "zh-tw": "中國臺灣繁體"
  },
  hans: {
    space: "",
    close: "关闭",
    "vp.header": "我们支持",
    "vp.header.alt": "记住此变体？",
    "vp.main": "选取内容的语言变体",
    "vp.main.alt": "以后都使用此变体呈现内容",
    "vp.main.ext": "保存您偏好的中文语言变体，以避免显示简繁混杂的内容，提供最佳的阅读体验。",
    "vp.button.ok": "确定",
    "vp.button.other": "其他"
  },
  hant: {
    space: "",
    close: "關閉",
    "vp.header": "我們支援",
    "vp.header.alt": "記住此變體？",
    "vp.main": "選取內容的語言變體",
    "vp.main.alt": "以後都使用此變體呈現內容",
    "vp.main.ext": "儲存您偏好的中文語言變體，以避免顯示簡繁混雜的內容，提供最佳的閱讀體驗。",
    "vp.button.ok": "確定",
    "vp.button.other": "其他"
  }
};
//! src/VariantAllyDialog/modules/utils.ts
var import_vue6 = require("vue");
var VALID_VARIANTS = ["zh-cn", "zh-sg", "zh-my", "zh-tw", "zh-hk", "zh-mo"];
var wgUserVariant = (0, import_vue6.ref)((_mw$config$get = mw.config.get("wgUserVariant")) !== null && _mw$config$get !== void 0 ? _mw$config$get : "");
function isMobileDevice() {
  return matchMedia("(hover: none), (pointer: coarse)").matches;
}
function getMountPoint() {
  var _document$querySelect, _document$querySelect2;
  switch (mw.config.get("skin")) {
    case "vector-2022":
      return (_document$querySelect = document.querySelectorAll(".mw-page-container")[0]) !== null && _document$querySelect !== void 0 ? _document$querySelect : document.body;
    case "gongbi":
      return (_document$querySelect2 = document.querySelector("#mw-content-block")) !== null && _document$querySelect2 !== void 0 ? _document$querySelect2 : document.body;
    default:
      return document.body;
  }
}
var inferredVariant = (0, import_vue6.computed)(() => {
  if (VALID_VARIANTS.includes(wgUserVariant.value)) {
    return wgUserVariant.value;
  }
  return null;
});
function shuffleVariant(last) {
  const targetArray = [...VALID_VARIANTS].filter((i) => {
    return i !== last;
  });
  const randomIndex = Math.floor(Math.random() * targetArray.length);
  return targetArray[randomIndex];
}
//! src/VariantAllyDialog/composables/useI18n.ts
var i18nVariant = (0, import_vue7.computed)(() => {
  if (wgUserVariant.value === "zh") {
    return Math.random() > 0.5 ? "hans" : "hant";
  }
  if (["zh-hant", "zh-tw", "zh-hk", "zh-mo"].includes(wgUserVariant.value)) {
    return "hant";
  }
  return "hans";
});
function useI18n(key) {
  var _currentMsgsGroup$key;
  const currentMsgsGroup = messages_default[i18nVariant.value];
  return (_currentMsgsGroup$key = currentMsgsGroup[key]) !== null && _currentMsgsGroup$key !== void 0 ? _currentMsgsGroup$key : key;
}
//! src/VariantAllyDialog/composables/useUniqueId.ts
var counter = 0;
function useUniqueId() {
  return "va-".concat(counter++);
}
var useUniqueId_default = useUniqueId;
//! src/VariantAllyDialog/composables/useShuffledVariant.ts
var import_vue8 = require("vue");
var INTERVAL = 3 * 1e3;
function useShuffledVariant(isFreezed) {
  const result = (0, import_vue8.ref)(shuffleVariant());
  let id;
  (0, import_vue8.watch)(isFreezed, (newValue) => {
    if (newValue) {
      var _inferredVariant$valu;
      clearInterval(id);
      result.value = (_inferredVariant$valu = inferredVariant.value) !== null && _inferredVariant$valu !== void 0 ? _inferredVariant$valu : shuffleVariant();
    } else {
      id = window.setInterval(() => {
        result.value = shuffleVariant(result.value);
      }, INTERVAL);
    }
  }, {
    immediate: true
  });
  return result;
}
var useShuffledVariant_default = useShuffledVariant;
//! src/VariantAllyDialog/composables/useModelWrapper.ts
var import_vue9 = require("vue");
function useModelWrapper(props, emit, name = "modelValue") {
  return (0, import_vue9.computed)({
    get() {
      return props[name];
    },
    set(value) {
      emit("update:".concat(name), value);
    }
  });
}
var useModelWrapper_default = useModelWrapper;
//! src/VariantAllyDialog/composables/useDefault.ts
var import_vue10 = require("vue");
function useDefault(defaultValue) {
  const realRef = (0, import_vue10.shallowRef)(typeof defaultValue === "function" ? defaultValue() : defaultValue.value);
  (0, import_vue10.watch)(defaultValue, (newValue) => {
    realRef.value = newValue;
  }, {
    deep: true
  });
  return (0, import_vue10.computed)({
    get() {
      return realRef.value;
    },
    set(newValue) {
      realRef.value = newValue;
    }
  });
}
var useDefault_default = useDefault;
var VAVariantPrompt_default = /* @__PURE__ */ (0, import_vue11.defineComponent)({
  __name: "VAVariantPrompt",
  props: {
    open: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    autoClose: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:open", "update:disabled", "select", "optout"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const prompt = (0, import_vue12.ref)(null);
    const titleId = useUniqueId_default();
    const descId = useUniqueId_default();
    const isOpen = useModelWrapper_default(props, emit, "open");
    const isDisabled = useModelWrapper_default(props, emit, "disabled");
    const isVariantNarrowed = useDefault_default(() => inferredVariant.value !== null);
    const shuffledVariant = useShuffledVariant_default(isVariantNarrowed);
    function optOutAndClose() {
      emit("optout");
      isOpen.value = false;
    }
    function select(variant) {
      isDisabled.value = true;
      emit("select", variant);
    }
    (0, import_vue12.watch)(prompt, () => {
      const element = prompt.value;
      if (element !== null) {
        element.addEventListener("mouseleave", (ev) => {
          if (ev.buttons === 0 && props.autoClose && !props.disabled) {
            isOpen.value = false;
          }
        });
      }
    });
    const __returned__ = {
      props,
      emit,
      prompt,
      titleId,
      descId,
      isOpen,
      isDisabled,
      isVariantNarrowed,
      shuffledVariant,
      optOutAndClose,
      select,
      VAButton: VAButton_default2,
      VAFadeTransition: VAFadeTransition_default,
      get useI18n() {
        return useI18n;
      },
      get i18nVariant() {
        return i18nVariant;
      },
      get VALID_VARIANTS() {
        return VALID_VARIANTS;
      },
      get inferredVariant() {
        return inferredVariant;
      },
      get messages() {
        return messages_default;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue13 = require("vue");
var _withScopeId = (n) => ((0, import_vue13.pushScopeId)("data-v-5a44cc75"), n = n(), (0, import_vue13.popScopeId)(), n);
var _hoisted_13 = ["lang", "aria-labelledby", "aria-describedby"];
var _hoisted_22 = ["id"];
var _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ (0, import_vue13.createElementVNode)(
  "br",
  null,
  null,
  -1
  /* HOISTED */
));
var _hoisted_42 = ["lang"];
var _hoisted_52 = ["id"];
var _hoisted_62 = {
  class: "va-variant-prompt__options"
};
var _hoisted_72 = {
  class: "va-variant-prompt__footer"
};
var _hoisted_82 = {
  class: "va-para va-para--subtle"
};
function render4(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue13.openBlock)(), (0, import_vue13.createBlock)(import_vue13.Transition, {
    name: "va-variant-prompt",
    appear: ""
  }, {
    default: (0, import_vue13.withCtx)(() => [$props.open ? ((0, import_vue13.openBlock)(), (0, import_vue13.createElementBlock)("div", {
      key: 0,
      ref: "prompt",
      lang: "zh-".concat($setup.i18nVariant),
      class: "va-variant-prompt",
      role: "dialog",
      "aria-modal": "false",
      "aria-labelledby": $setup.titleId,
      "aria-describedby": $setup.descId
    }, [(0, import_vue13.createVNode)($setup["VAButton"], {
      class: "va-variant-prompt__close",
      weight: "quiet",
      icon: "close",
      title: $setup.useI18n("close"),
      "aria-label": $setup.useI18n("close"),
      disabled: $props.disabled,
      onClick: $setup.optOutAndClose
    }, null, 8, ["title", "aria-label", "disabled"]), (0, import_vue13.createElementVNode)("h2", {
      id: $setup.titleId,
      class: "va-variant-prompt__title va-title"
    }, [(0, import_vue13.createTextVNode)(
      (0, import_vue13.toDisplayString)($setup.useI18n($setup.isVariantNarrowed ? "vp.header.alt" : "vp.header")),
      1
      /* TEXT */
    ), _hoisted_32, (0, import_vue13.createVNode)($setup["VAFadeTransition"], null, {
      default: (0, import_vue13.withCtx)(() => [!$setup.isVariantNarrowed ? ((0, import_vue13.openBlock)(), (0, import_vue13.createElementBlock)("span", {
        key: $setup.shuffledVariant,
        lang: "zh-".concat($setup.shuffledVariant),
        class: "va-variant-prompt__title__variant"
      }, (0, import_vue13.toDisplayString)($setup.messages.variants[$setup.shuffledVariant]), 9, _hoisted_42)) : (0, import_vue13.createCommentVNode)("v-if", true)]),
      _: 1
      /* STABLE */
    })], 8, _hoisted_22), (0, import_vue13.createElementVNode)("p", {
      id: $setup.descId,
      class: "va-variant-prompt__desc va-para"
    }, (0, import_vue13.toDisplayString)($setup.useI18n($setup.isVariantNarrowed ? "vp.main.alt" : "vp.main")), 9, _hoisted_52), (0, import_vue13.createElementVNode)("div", _hoisted_62, [(0, import_vue13.createCommentVNode)(" inferredVariant is non-null, guarded by isVariantNarrowed "), ((0, import_vue13.openBlock)(true), (0, import_vue13.createElementBlock)(
      import_vue13.Fragment,
      null,
      (0, import_vue13.renderList)($setup.isVariantNarrowed && $setup.inferredVariant !== null ? [$setup.inferredVariant] : $setup.VALID_VARIANTS, (variant) => {
        return (0, import_vue13.openBlock)(), (0, import_vue13.createBlock)($setup["VAButton"], {
          key: variant,
          class: (0, import_vue13.normalizeClass)(["va-variant-prompt__options__button", {
            "va-variant-prompt__options__button--primary": $setup.isVariantNarrowed
          }]),
          indicator: "arrowNext",
          weight: "quiet",
          action: "progressive",
          lang: variant,
          disabled: $props.disabled,
          onClick: ($event) => $setup.select(variant)
        }, {
          default: (0, import_vue13.withCtx)(() => [(0, import_vue13.createTextVNode)(
            (0, import_vue13.toDisplayString)($setup.messages.variants[variant]),
            1
            /* TEXT */
          )]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["class", "lang", "disabled", "onClick"]);
      }),
      128
      /* KEYED_FRAGMENT */
    )), $setup.isVariantNarrowed ? ((0, import_vue13.openBlock)(), (0, import_vue13.createBlock)($setup["VAButton"], {
      key: 0,
      class: "va-variant-prompt__options__button",
      indicator: "arrowNext",
      weight: "quiet",
      action: "progressive",
      disabled: $props.disabled,
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.isVariantNarrowed = false)
    }, {
      default: (0, import_vue13.withCtx)(() => [(0, import_vue13.createTextVNode)(
        (0, import_vue13.toDisplayString)($setup.useI18n("vp.button.other")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])) : (0, import_vue13.createCommentVNode)("v-if", true)]), (0, import_vue13.createElementVNode)("footer", _hoisted_72, [(0, import_vue13.createElementVNode)(
      "p",
      _hoisted_82,
      (0, import_vue13.toDisplayString)($setup.useI18n("vp.main.ext")),
      1
      /* TEXT */
    )])], 8, _hoisted_13)) : (0, import_vue13.createCommentVNode)("v-if", true)]),
    _: 1
    /* STABLE */
  });
}
//! src/VariantAllyDialog/components/VAVariantPrompt.vue
VAVariantPrompt_default.render = render4;
VAVariantPrompt_default.__file = "src\\VariantAllyDialog\\components\\VAVariantPrompt.vue";
VAVariantPrompt_default.__scopeId = "data-v-5a44cc75";
var VAVariantPrompt_default2 = VAVariantPrompt_default;
var import_vue16 = require("vue");
var import_vue17 = require("vue");
var import_vue14 = require("vue");
var VASelect_default = /* @__PURE__ */ (0, import_vue14.defineComponent)({
  __name: "VASelect",
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const modelValue = useModelWrapper_default(props, emit);
    const __returned__ = {
      props,
      emit,
      modelValue
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue15 = require("vue");
function render5(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue15.withDirectives)(((0, import_vue15.openBlock)(), (0, import_vue15.createElementBlock)(
    "select",
    {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.modelValue = $event),
      class: "va-select"
    },
    [(0, import_vue15.renderSlot)(_ctx.$slots, "default", {}, void 0, true)],
    512
    /* NEED_PATCH */
  )), [[import_vue15.vModelSelect, $setup.modelValue]]);
}
//! src/VariantAllyDialog/components/VASelect.vue
VASelect_default.render = render5;
VASelect_default.__file = "src\\VariantAllyDialog\\components\\VASelect.vue";
VASelect_default.__scopeId = "data-v-c9b46460";
var VASelect_default2 = VASelect_default;
var VAVariantPromptMobile_default = /* @__PURE__ */ (0, import_vue16.defineComponent)({
  __name: "VAVariantPromptMobile",
  props: {
    open: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:open", "update:disabled", "select", "optout"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const prompt = (0, import_vue17.ref)(null);
    const titleId = useUniqueId_default();
    const selectedVariant = useDefault_default(() => {
      var _inferredVariant$valu2;
      return (_inferredVariant$valu2 = inferredVariant.value) !== null && _inferredVariant$valu2 !== void 0 ? _inferredVariant$valu2 : shuffleVariant();
    });
    const isOpen = useModelWrapper_default(props, emit, "open");
    const isDisabled = useModelWrapper_default(props, emit, "disabled");
    function optOutAndClose() {
      emit("optout");
      isOpen.value = false;
    }
    function select(variant) {
      isDisabled.value = true;
      emit("select", variant);
    }
    const __returned__ = {
      props,
      emit,
      prompt,
      titleId,
      selectedVariant,
      isOpen,
      isDisabled,
      optOutAndClose,
      select,
      VAButton: VAButton_default2,
      VASelect: VASelect_default2,
      get useI18n() {
        return useI18n;
      },
      get i18nVariant() {
        return i18nVariant;
      },
      get VALID_VARIANTS() {
        return VALID_VARIANTS;
      },
      get messages() {
        return messages_default;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue18 = require("vue");
var _hoisted_14 = ["lang", "aria-labelledby"];
var _hoisted_23 = {
  class: "va-variant-prompt-mobile__header"
};
var _hoisted_33 = ["id"];
var _hoisted_43 = {
  class: "va-variant-prompt-mobile__main"
};
var _hoisted_53 = ["value", "lang"];
var _hoisted_63 = {
  class: "va-variant-prompt-mobile__footer"
};
var _hoisted_73 = {
  class: "va-para va-para--subtle"
};
function render6(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue18.openBlock)(), (0, import_vue18.createBlock)(import_vue18.Transition, {
    name: "va-variant-prompt-mobile",
    appear: ""
  }, {
    default: (0, import_vue18.withCtx)(() => [$props.open ? ((0, import_vue18.openBlock)(), (0, import_vue18.createElementBlock)("div", {
      key: 0,
      ref: "prompt",
      lang: "zh-".concat($setup.i18nVariant),
      class: "va-variant-prompt-mobile",
      role: "dialog",
      "aria-modal": "false",
      "aria-labelledby": $setup.titleId
    }, [(0, import_vue18.createElementVNode)("div", _hoisted_23, [(0, import_vue18.createElementVNode)("h2", {
      id: $setup.titleId,
      class: "va-variant-prompt-mobile__header__title va-title"
    }, (0, import_vue18.toDisplayString)($setup.useI18n("vp.main")), 9, _hoisted_33), (0, import_vue18.createVNode)($setup["VAButton"], {
      class: "va-variant-prompt-mobile__header__close",
      weight: "quiet",
      icon: "close",
      title: $setup.useI18n("close"),
      "aria-label": $setup.useI18n("close"),
      disabled: $props.disabled,
      onClick: $setup.optOutAndClose
    }, null, 8, ["title", "aria-label", "disabled"])]), (0, import_vue18.createElementVNode)("div", _hoisted_43, [(0, import_vue18.createVNode)($setup["VASelect"], {
      modelValue: $setup.selectedVariant,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectedVariant = $event),
      class: "va-variant-prompt-mobile__main__select",
      lang: $setup.selectedVariant,
      disabled: $props.disabled,
      "aria-labelledby": $setup.titleId
    }, {
      default: (0, import_vue18.withCtx)(() => [((0, import_vue18.openBlock)(true), (0, import_vue18.createElementBlock)(
        import_vue18.Fragment,
        null,
        (0, import_vue18.renderList)($setup.VALID_VARIANTS, (variant) => {
          return (0, import_vue18.openBlock)(), (0, import_vue18.createElementBlock)("option", {
            key: variant,
            value: variant,
            lang: variant
          }, (0, import_vue18.toDisplayString)($setup.messages.variants[variant]), 9, _hoisted_53);
        }),
        128
        /* KEYED_FRAGMENT */
      ))]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "lang", "disabled", "aria-labelledby"]), (0, import_vue18.createVNode)($setup["VAButton"], {
      class: "va-variant-prompt-mobile__main__action",
      action: "progressive",
      icon: "arrowNext",
      disabled: $props.disabled,
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.select($setup.selectedVariant))
    }, {
      default: (0, import_vue18.withCtx)(() => [(0, import_vue18.createTextVNode)(
        (0, import_vue18.toDisplayString)($setup.useI18n("vp.button.ok")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])]), (0, import_vue18.createElementVNode)("footer", _hoisted_63, [(0, import_vue18.createElementVNode)(
      "p",
      _hoisted_73,
      (0, import_vue18.toDisplayString)($setup.useI18n("vp.main.ext")),
      1
      /* TEXT */
    )])], 8, _hoisted_14)) : (0, import_vue18.createCommentVNode)("v-if", true)]),
    _: 1
    /* STABLE */
  });
}
//! src/VariantAllyDialog/components/VAVariantPromptMobile.vue
VAVariantPromptMobile_default.render = render6;
VAVariantPromptMobile_default.__file = "src\\VariantAllyDialog\\components\\VAVariantPromptMobile.vue";
VAVariantPromptMobile_default.__scopeId = "data-v-5cc7865b";
var VAVariantPromptMobile_default2 = VAVariantPromptMobile_default;
var App_default = /* @__PURE__ */ (0, import_vue19.defineComponent)({
  __name: "App",
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const isOpen = (0, import_vue20.ref)(true);
    const isDisabled = (0, import_vue20.ref)(false);
    const isMobile = isMobileDevice();
    const desktopMountPoint = getMountPoint();
    function setVariant(variant) {
      (0, import_ext_gadget.setLocalVariant)(variant);
      (0, import_ext_gadget.redirect)(variant, {
        forced: true
      });
    }
    addEventListener(isMobile ? "touchmove" : "scroll", () => {
      if (!isDisabled.value) {
        isOpen.value = false;
      }
    });
    function onOptOut() {
      (0, import_ext_gadget.setOptOut)();
    }
    const __returned__ = {
      isOpen,
      isDisabled,
      isMobile,
      desktopMountPoint,
      setVariant,
      onOptOut,
      VAVariantPrompt: VAVariantPrompt_default2,
      VAVariantPromptMobile: VAVariantPromptMobile_default2
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue21 = require("vue");
function render7(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue21.openBlock)(), (0, import_vue21.createElementBlock)(
    import_vue21.Fragment,
    null,
    [((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)(import_vue21.Teleport, {
      to: $setup.desktopMountPoint
    }, [!$setup.isMobile ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["VAVariantPrompt"], {
      key: 0,
      open: $setup.isOpen,
      "onUpdate:open": _cache[0] || (_cache[0] = ($event) => $setup.isOpen = $event),
      disabled: $setup.isDisabled,
      "onUpdate:disabled": _cache[1] || (_cache[1] = ($event) => $setup.isDisabled = $event),
      "auto-close": false,
      onOptout: $setup.onOptOut,
      onSelect: $setup.setVariant
    }, null, 8, ["open", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true)], 8, ["to"])), (0, import_vue21.createCommentVNode)(" Teleport to body because they are always floated at bottom "), ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)(import_vue21.Teleport, {
      to: "body"
    }, [$setup.isMobile ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["VAVariantPromptMobile"], {
      key: 0,
      open: $setup.isOpen,
      "onUpdate:open": _cache[2] || (_cache[2] = ($event) => $setup.isOpen = $event),
      disabled: $setup.isDisabled,
      "onUpdate:disabled": _cache[3] || (_cache[3] = ($event) => $setup.isDisabled = $event),
      onOptout: $setup.onOptOut,
      onSelect: $setup.setVariant
    }, null, 8, ["open", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true)]))],
    64
    /* STABLE_FRAGMENT */
  );
}
//! src/VariantAllyDialog/App.vue
App_default.render = render7;
App_default.__file = "src\\VariantAllyDialog\\App.vue";
var App_default2 = App_default;
//! src/VariantAllyDialog/VariantAllyDialog.ts
var root = document.createElement("div");
document.body.append(root);
(0, import_vue22.createApp)(App_default2).mount(root);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL1ZhcmlhbnRBbGx5RGlhbG9nLnRzIiwgImRpc3QvVmFyaWFudEFsbHlEaWFsb2cvc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL0FwcC52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHQudnVlIiwgImRpc3QvVmFyaWFudEFsbHlEaWFsb2cvc2ZjLXRlbXBsYXRlOkU6L2doUmVwby9Zc0FyY2hpdmVzLUdhZGdldHMvc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFJY29uLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBSWNvbi52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zZmMtdGVtcGxhdGU6RTovZ2hSZXBvL1lzQXJjaGl2ZXMtR2FkZ2V0cy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQUJ1dHRvbi52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQUJ1dHRvbi52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zZmMtdGVtcGxhdGU6RTovZ2hSZXBvL1lzQXJjaGl2ZXMtR2FkZ2V0cy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQUZhZGVUcmFuc2l0aW9uLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBRmFkZVRyYW5zaXRpb24udnVlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VJMThuLnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9tZXNzYWdlcy5qc29uIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9tb2R1bGVzL3V0aWxzLnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VVbmlxdWVJZC50cyIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9zYWJsZXMvdXNlU2h1ZmZsZWRWYXJpYW50LnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VNb2RlbFdyYXBwZXIudHMiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvc2FibGVzL3VzZURlZmF1bHQudHMiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zZmMtdGVtcGxhdGU6RTovZ2hSZXBvL1lzQXJjaGl2ZXMtR2FkZ2V0cy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHQudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0LnZ1ZSIsICJkaXN0L1ZhcmlhbnRBbGx5RGlhbG9nL3NyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBVmFyaWFudFByb21wdE1vYmlsZS52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVNlbGVjdC52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zZmMtdGVtcGxhdGU6RTovZ2hSZXBvL1lzQXJjaGl2ZXMtR2FkZ2V0cy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVNlbGVjdC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVNlbGVjdC52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zZmMtdGVtcGxhdGU6RTovZ2hSZXBvL1lzQXJjaGl2ZXMtR2FkZ2V0cy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZSIsICJkaXN0L1ZhcmlhbnRBbGx5RGlhbG9nL3NmYy10ZW1wbGF0ZTpFOi9naFJlcG8vWXNBcmNoaXZlcy1HYWRnZXRzL3NyYy9WYXJpYW50QWxseURpYWxvZy9BcHAudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL0FwcC52dWUiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Y3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcbmNyZWF0ZUFwcChBcHApLm1vdW50KHJvb3QpO1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge3JlZn0gZnJvbSAndnVlJztcbmltcG9ydCB7c2V0TG9jYWxWYXJpYW50LCByZWRpcmVjdCwgVmFsaWRWYXJpYW50LCBzZXRPcHRPdXR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuaW1wb3J0IFZBVmFyaWFudFByb21wdCBmcm9tICcuL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0LnZ1ZSc7XG5pbXBvcnQgVkFWYXJpYW50UHJvbXB0TW9iaWxlIGZyb20gJy4vY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlJztcbmltcG9ydCB7Z2V0TW91bnRQb2ludCwgaXNNb2JpbGVEZXZpY2V9IGZyb20gJy4vbW9kdWxlcy91dGlscyc7XG5cbmNvbnN0IGlzT3BlbiA9IHJlZih0cnVlKTtcbmNvbnN0IGlzRGlzYWJsZWQgPSByZWYoZmFsc2UpO1xuY29uc3QgaXNNb2JpbGUgPSBpc01vYmlsZURldmljZSgpO1xuY29uc3QgZGVza3RvcE1vdW50UG9pbnQgPSBnZXRNb3VudFBvaW50KCk7XG5cbmZ1bmN0aW9uIHNldFZhcmlhbnQodmFyaWFudDogVmFsaWRWYXJpYW50KSB7XG5cdHNldExvY2FsVmFyaWFudCh2YXJpYW50KTtcblx0cmVkaXJlY3QodmFyaWFudCwge2ZvcmNlZDogdHJ1ZX0pO1xufVxuXG4vLyBCcm93c2VyIHN1cHBvcnQ6IGlPUyBTYWZhcmkgPCAxNVxuLy8gV29yayBhcm91bmQgU2FmYXJpIGZpcmluZyBzY3JvbGwgZXZlbnQgYXQgdW5leHBlY3RlZCBjb25kaXRpb25zIChlLmcuIHBvcHBpbmcgdXAgU2VsZWN0KVxuYWRkRXZlbnRMaXN0ZW5lcihpc01vYmlsZSA/ICd0b3VjaG1vdmUnIDogJ3Njcm9sbCcsICgpID0+IHtcblx0aWYgKCFpc0Rpc2FibGVkLnZhbHVlKSB7XG5cdFx0aXNPcGVuLnZhbHVlID0gZmFsc2U7XG5cdH1cbn0pO1xuXG5mdW5jdGlvbiBvbk9wdE91dCgpIHtcblx0c2V0T3B0T3V0KCk7XG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8VGVsZXBvcnQgOnRvPVwiZGVza3RvcE1vdW50UG9pbnRcIj5cblx0XHQ8VkFWYXJpYW50UHJvbXB0XG5cdFx0XHR2LWlmPVwiIWlzTW9iaWxlXCJcblx0XHRcdHYtbW9kZWw6b3Blbj1cImlzT3BlblwiXG5cdFx0XHR2LW1vZGVsOmRpc2FibGVkPVwiaXNEaXNhYmxlZFwiXG5cdFx0XHQ6YXV0by1jbG9zZT1cImZhbHNlXCJcblx0XHRcdEBvcHRvdXQ9XCJvbk9wdE91dFwiXG5cdFx0XHRAc2VsZWN0PVwic2V0VmFyaWFudFwiXG5cdFx0Lz5cblx0PC9UZWxlcG9ydD5cblxuXHQ8IS0tIFRlbGVwb3J0IHRvIGJvZHkgYmVjYXVzZSB0aGV5IGFyZSBhbHdheXMgZmxvYXRlZCBhdCBib3R0b20gLS0+XG5cdDxUZWxlcG9ydCB0bz1cImJvZHlcIj5cblx0XHQ8VkFWYXJpYW50UHJvbXB0TW9iaWxlXG5cdFx0XHR2LWlmPVwiaXNNb2JpbGVcIlxuXHRcdFx0di1tb2RlbDpvcGVuPVwiaXNPcGVuXCJcblx0XHRcdHYtbW9kZWw6ZGlzYWJsZWQ9XCJpc0Rpc2FibGVkXCJcblx0XHRcdEBvcHRvdXQ9XCJvbk9wdE91dFwiXG5cdFx0XHRAc2VsZWN0PVwic2V0VmFyaWFudFwiXG5cdFx0Lz5cblx0PC9UZWxlcG9ydD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiPlxuQGltcG9ydCAocmVmZXJlbmNlKSAnLi9zdHlsZXMvdG9rZW5zLmxlc3MnO1xuXG4udmEtdmFyaWFudC1wcm9tcHQge1xuXHQvLyBWZWN0b3IgMjAyMiBzcGVjaWZpYyBhZGp1c3RtZW50c1xuXHQuc2tpbi12ZWN0b3ItMjAyMiAmIHtcblx0XHQvLyBDYWxjdWxhdGVkIGZyb20gVmVjdG9yIDIwMjIgc291cmNlIGNvZGVcblx0XHRAdmVjdG9yLTIwMjItaGVhZGVyLWhlaWdodDogNTBweCArIDIgKiA4cHg7XG5cdFx0bWF4LWhlaWdodDogY2FsYygxMDAlIC0gQHNwYWNpbmctdmVydGljYWwtZGlhbG9nIC0gQHZlY3Rvci0yMDIyLWhlYWRlci1oZWlnaHQpO1xuXG5cdFx0LnZlY3Rvci10b2MtYXZhaWxhYmxlLnZlY3Rvci1mZWF0dXJlLXRvYy1waW5uZWQtY2xpZW50cHJlZi0xICYsXG5cdFx0LnZlY3Rvci1mZWF0dXJlLW1haW4tbWVudS1waW5uZWQtZW5hYmxlZCAmIHtcblx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuXHRcdFx0XHRsZWZ0OiB1bnNldDtcblxuXHRcdFx0XHQvLyBDYWxjdWxhdGVkIGZyb20gVmVjdG9yIDIwMjIgc291cmNlIGNvZGVcblx0XHRcdFx0Ly8gSW4gdGhpcyB3aWR0aCB0aGlzIHByb21wdCB3aWxsIG5vdCBvYnNjdXJlIGFydGljbGUgY29udGVudFxuXHRcdFx0XHRAdmVjdG9yLTIwMjItbGVmdC1wYWRkaW5nOiAyLjc1ZW07XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAtKEB2ZWN0b3ItMjAyMi1sZWZ0LXBhZGRpbmcgLyAzICogMik7XG5cdFx0XHRcdG1heC13aWR0aDogY2FsYygxMi4yNWVtICsgMzZweCk7XG5cdFx0XHRcdHBhZGRpbmc6IEBzcGFjaW5nLTEwMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcblx0XHRcdEB2ZWN0b3ItMjAyMi1sZWZ0LXBhZGRpbmc6IDMuMjVlbTtcblx0XHRcdGxlZnQ6IHVuc2V0O1xuXHRcdFx0bWFyZ2luLWxlZnQ6IC0oQHZlY3Rvci0yMDIyLWxlZnQtcGFkZGluZyAvIDMgKiAyKTtcblx0XHRcdG1heC13aWR0aDogY2FsYygxNS43NWVtICsgMzZweCk7XG5cdFx0fVxuXHR9XG59XG48L3N0eWxlPlxuLi9tb2R1bGVzL3V0aWxzXG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7cmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7dHlwZSBWYWxpZFZhcmlhbnR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuaW1wb3J0IFZBQnV0dG9uIGZyb20gJy4vVkFCdXR0b24udnVlJztcbmltcG9ydCBWQUZhZGVUcmFuc2l0aW9uIGZyb20gJy4vVkFGYWRlVHJhbnNpdGlvbi52dWUnO1xuaW1wb3J0IHVzZUkxOG4sIHtpMThuVmFyaWFudH0gZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlSTE4bic7XG5pbXBvcnQgdXNlVW5pcXVlSWQgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlVW5pcXVlSWQnO1xuaW1wb3J0IHVzZVNodWZmbGVkVmFyaWFudCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VTaHVmZmxlZFZhcmlhbnQnO1xuaW1wb3J0IHtWQUxJRF9WQVJJQU5UUywgaW5mZXJyZWRWYXJpYW50fSBmcm9tICcuLi9tb2R1bGVzL3V0aWxzJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi9tZXNzYWdlcy5qc29uJztcbmltcG9ydCB1c2VNb2RlbFdyYXBwZXIgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlTW9kZWxXcmFwcGVyJztcbmltcG9ydCB1c2VEZWZhdWx0IGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZURlZmF1bHQnO1xuXG5jb25zdCBwcm9wcyA9IHdpdGhEZWZhdWx0cyhcblx0ZGVmaW5lUHJvcHM8e1xuXHRcdG9wZW46IGJvb2xlYW47XG5cdFx0ZGlzYWJsZWQ/OiBib29sZWFuO1xuXHRcdGF1dG9DbG9zZT86IGJvb2xlYW47XG5cdH0+KCksXG5cdHtcblx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0YXV0b0Nsb3NlOiBmYWxzZSxcblx0fVxuKTtcbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czx7XG5cdChlOiAndXBkYXRlOm9wZW4nLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XG5cdChlOiAndXBkYXRlOmRpc2FibGVkJywgdmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xuXHQoZTogJ3NlbGVjdCcsIHZhcmlhbnQ6IFZhbGlkVmFyaWFudCk6IHZvaWQ7XG5cdChlOiAnb3B0b3V0Jyk6IHZvaWQ7XG59PigpO1xuXG5jb25zdCBwcm9tcHQgPSByZWY8SFRNTEVsZW1lbnQgfCBudWxsPihudWxsKTtcbmNvbnN0IHRpdGxlSWQgPSB1c2VVbmlxdWVJZCgpO1xuY29uc3QgZGVzY0lkID0gdXNlVW5pcXVlSWQoKTtcbmNvbnN0IGlzT3BlbiA9IHVzZU1vZGVsV3JhcHBlcihwcm9wcywgZW1pdCwgJ29wZW4nKTtcbmNvbnN0IGlzRGlzYWJsZWQgPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQsICdkaXNhYmxlZCcpO1xuY29uc3QgaXNWYXJpYW50TmFycm93ZWQgPSB1c2VEZWZhdWx0KCgpID0+IGluZmVycmVkVmFyaWFudC52YWx1ZSAhPT0gbnVsbCk7XG5jb25zdCBzaHVmZmxlZFZhcmlhbnQgPSB1c2VTaHVmZmxlZFZhcmlhbnQoaXNWYXJpYW50TmFycm93ZWQpO1xuXG5mdW5jdGlvbiBvcHRPdXRBbmRDbG9zZSgpIHtcblx0ZW1pdCgnb3B0b3V0Jyk7XG5cdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZWxlY3QodmFyaWFudDogVmFsaWRWYXJpYW50KSB7XG5cdGlzRGlzYWJsZWQudmFsdWUgPSB0cnVlO1xuXHRlbWl0KCdzZWxlY3QnLCB2YXJpYW50KTtcbn1cblxud2F0Y2gocHJvbXB0LCAoKSA9PiB7XG5cdGNvbnN0IGVsZW1lbnQgPSBwcm9tcHQudmFsdWU7XG5cdGlmIChlbGVtZW50ICE9PSBudWxsKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGV2KSA9PiB7XG5cdFx0XHQvLyBEbyBub3QgZGlzbWlzcyBpZiBhbnkgYnV0dG9uIGlzIHByZXNzZWQgb3IgdGhlIHByb21wdCBpcyBkaXNhYmxlZFxuXHRcdFx0aWYgKGV2LmJ1dHRvbnMgPT09IDAgJiYgcHJvcHMuYXV0b0Nsb3NlICYmICFwcm9wcy5kaXNhYmxlZCkge1xuXHRcdFx0XHRpc09wZW4udmFsdWUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSk7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8VHJhbnNpdGlvbiBuYW1lPVwidmEtdmFyaWFudC1wcm9tcHRcIiBhcHBlYXI+XG5cdFx0PGRpdlxuXHRcdFx0di1pZj1cIm9wZW5cIlxuXHRcdFx0cmVmPVwicHJvbXB0XCJcblx0XHRcdDpsYW5nPVwiYHpoLSR7aTE4blZhcmlhbnR9YFwiXG5cdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0XCJcblx0XHRcdHJvbGU9XCJkaWFsb2dcIlxuXHRcdFx0YXJpYS1tb2RhbD1cImZhbHNlXCJcblx0XHRcdDphcmlhLWxhYmVsbGVkYnk9XCJ0aXRsZUlkXCJcblx0XHRcdDphcmlhLWRlc2NyaWJlZGJ5PVwiZGVzY0lkXCJcblx0XHQ+XG5cdFx0XHQ8VkFCdXR0b25cblx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fY2xvc2VcIlxuXHRcdFx0XHR3ZWlnaHQ9XCJxdWlldFwiXG5cdFx0XHRcdGljb249XCJjbG9zZVwiXG5cdFx0XHRcdDp0aXRsZT1cInVzZUkxOG4oJ2Nsb3NlJylcIlxuXHRcdFx0XHQ6YXJpYS1sYWJlbD1cInVzZUkxOG4oJ2Nsb3NlJylcIlxuXHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdEBjbGljaz1cIm9wdE91dEFuZENsb3NlXCJcblx0XHRcdC8+XG5cdFx0XHQ8aDIgOmlkPVwidGl0bGVJZFwiIGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX3RpdGxlIHZhLXRpdGxlXCI+XG5cdFx0XHRcdHt7IHVzZUkxOG4oaXNWYXJpYW50TmFycm93ZWQgPyAndnAuaGVhZGVyLmFsdCcgOiAndnAuaGVhZGVyJykgfX08YnIgLz5cblx0XHRcdFx0PFZBRmFkZVRyYW5zaXRpb24+XG5cdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdHYtaWY9XCIhaXNWYXJpYW50TmFycm93ZWRcIlxuXHRcdFx0XHRcdFx0OmtleT1cInNodWZmbGVkVmFyaWFudFwiXG5cdFx0XHRcdFx0XHQ6bGFuZz1cImB6aC0ke3NodWZmbGVkVmFyaWFudH1gXCJcblx0XHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX3RpdGxlX192YXJpYW50XCJcblx0XHRcdFx0XHRcdD57eyBtZXNzYWdlcy52YXJpYW50c1tzaHVmZmxlZFZhcmlhbnRdIH19PC9zcGFuXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHQ8L1ZBRmFkZVRyYW5zaXRpb24+XG5cdFx0XHQ8L2gyPlxuXHRcdFx0PHAgOmlkPVwiZGVzY0lkXCIgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fZGVzYyB2YS1wYXJhXCI+XG5cdFx0XHRcdHt7IHVzZUkxOG4oaXNWYXJpYW50TmFycm93ZWQgPyAndnAubWFpbi5hbHQnIDogJ3ZwLm1haW4nKSB9fVxuXHRcdFx0PC9wPlxuXHRcdFx0PGRpdiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zXCI+XG5cdFx0XHRcdDwhLS0gaW5mZXJyZWRWYXJpYW50IGlzIG5vbi1udWxsLCBndWFyZGVkIGJ5IGlzVmFyaWFudE5hcnJvd2VkIC0tPlxuXHRcdFx0XHQ8VkFCdXR0b25cblx0XHRcdFx0XHR2LWZvcj1cInZhcmlhbnQgaW4gaXNWYXJpYW50TmFycm93ZWQgJiYgaW5mZXJyZWRWYXJpYW50ICE9PSBudWxsXG5cdFx0XHRcdFx0XHQ/IFtpbmZlcnJlZFZhcmlhbnRdXG5cdFx0XHRcdFx0XHQ6IFZBTElEX1ZBUklBTlRTXCJcblx0XHRcdFx0XHQ6a2V5PVwidmFyaWFudFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uXCJcblx0XHRcdFx0XHQ6Y2xhc3M9XCJ7J3ZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zX19idXR0b24tLXByaW1hcnknOiBpc1ZhcmlhbnROYXJyb3dlZH1cIlxuXHRcdFx0XHRcdGluZGljYXRvcj1cImFycm93TmV4dFwiXG5cdFx0XHRcdFx0d2VpZ2h0PVwicXVpZXRcIlxuXHRcdFx0XHRcdGFjdGlvbj1cInByb2dyZXNzaXZlXCJcblx0XHRcdFx0XHQ6bGFuZz1cInZhcmlhbnRcIlxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJzZWxlY3QodmFyaWFudClcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3sgbWVzc2FnZXMudmFyaWFudHNbdmFyaWFudF0gfX1cblx0XHRcdFx0PC9WQUJ1dHRvbj5cblx0XHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdFx0di1pZj1cImlzVmFyaWFudE5hcnJvd2VkXCJcblx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zX19idXR0b25cIlxuXHRcdFx0XHRcdGluZGljYXRvcj1cImFycm93TmV4dFwiXG5cdFx0XHRcdFx0d2VpZ2h0PVwicXVpZXRcIlxuXHRcdFx0XHRcdGFjdGlvbj1cInByb2dyZXNzaXZlXCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0QGNsaWNrPVwiaXNWYXJpYW50TmFycm93ZWQgPSBmYWxzZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7eyB1c2VJMThuKCd2cC5idXR0b24ub3RoZXInKSB9fVxuXHRcdFx0XHQ8L1ZBQnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8Zm9vdGVyIGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX2Zvb3RlclwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInZhLXBhcmEgdmEtcGFyYS0tc3VidGxlXCI+XG5cdFx0XHRcdFx0e3sgdXNlSTE4bigndnAubWFpbi5leHQnKSB9fVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L2Zvb3Rlcj5cblx0XHQ8L2Rpdj5cblx0PC9UcmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL21peGlucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy90b2tlbnMubGVzcyc7XG5cbi52YS10aXRsZSB7XG5cdGJvcmRlcjogMDsgLy8gUmVzZXRcblx0cGFkZGluZzogMDsgLy8gUmVzZXRcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblxuXHRmb250LXNpemU6IEBmb250LXNpemUteHgtbGFyZ2U7XG5cdGZvbnQtd2VpZ2h0OiBAZm9udC13ZWlnaHQtYm9sZDtcblx0bWFyZ2luOiBAc3BhY2luZy01MCBAc3BhY2luZy0wO1xuXHRjb2xvcjogQGNvbG9yLWJhc2U7XG59XG5cbi52YS1wYXJhIHtcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblx0bWFyZ2luLXRvcDogQHNwYWNpbmctNTA7XG5cdG1hcmdpbi1ib3R0b206IEBzcGFjaW5nLTUwO1xuXHRjb2xvcjogQGNvbG9yLWJhc2U7XG5cblx0Ji0tc3VidGxlIHtcblx0XHRjb2xvcjogQGNvbG9yLXN1YnRsZTtcblx0XHRmb250LXNpemU6IEBmb250LXNpemUteC1zbWFsbDtcblx0XHRtYXJnaW4tYm90dG9tOiBAc3BhY2luZy0zNTtcblx0fVxufVxuXG4udmEtdmFyaWFudC1wcm9tcHQge1xuXHRib3gtc2l6aW5nOiBAYm94LXNpemluZy1iYXNlO1xuXHR6LWluZGV4OiBAei1pbmRleC1vdmVybGF5O1xuXHRwYWRkaW5nOiBAc3BhY2luZy0xMDAgQHNwYWNpbmctMTUwO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGxlZnQ6IEBzcGFjaW5nLWhvcml6b250YWwtZGlhbG9nO1xuXHRib3R0b206IEBzcGFjaW5nLXZlcnRpY2FsLWRpYWxvZztcblx0d2lkdGg6IGNhbGMoMTAwJSAtIEBzcGFjaW5nLWhvcml6b250YWwtZGlhbG9nICogMik7XG5cdG1heC13aWR0aDogMThlbTtcblx0bWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDJlbSk7XG5cblx0b3ZlcmZsb3c6IGF1dG87XG5cdG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XG5cdGJhY2tncm91bmQtY29sb3I6IEBiYWNrZ3JvdW5kLWNvbG9yLWJhc2U7XG5cdGJvcmRlcjogQGJvcmRlci1iYXNlO1xuXHRib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuXHRib3gtc2hhZG93OiBAYm94LXNoYWRvdy1kcm9wLW1lZGl1bTtcblx0Zm9udC1mYW1pbHk6IEBmb250LWZhbWlseS1zeXN0ZW0tc2Fucztcblx0Zm9udC1zaXplOiAxcmVtOyAvLyBSZXNldFxuXHRsaW5lLWhlaWdodDogbm9ybWFsOyAvLyBSZXNldFxuXG5cdCZfX2Nsb3NlIHtcblx0XHRwYWRkaW5nOiBAc3BhY2luZy1zaG9ydGhhbmQtYnV0dG9uLWljb24tb25seTtcblx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0bWFyZ2luLXRvcDogQHNwYWNpbmctNTA7XG5cdFx0bWFyZ2luLXJpZ2h0OiAtKEBzcGFjaW5nLWhvcml6b250YWwtYnV0dG9uLWljb24tb25seSArIDFweCk7XG5cdH1cblxuXHQmX190aXRsZSB7XG5cdFx0Jl9fdmFyaWFudCB7XG5cdFx0XHRjb2xvcjogQGNvbG9yLXByb2dyZXNzaXZlO1xuXHRcdH1cblx0fVxuXG5cdCZfX29wdGlvbnMge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdG1hcmdpbjogQHNwYWNpbmctNzUgQHNwYWNpbmctMDtcblxuXHRcdGJvcmRlcjogMXB4IHNvbGlkIEBib3JkZXItY29sb3ItYmFzZTtcblx0XHRib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuXG5cdFx0Jl9fYnV0dG9uIHtcblx0XHRcdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1zbWFsbDtcblx0XHRcdGNvbG9yOiBAY29sb3ItYmFzZTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IEBiYWNrZ3JvdW5kLWNvbG9yLWludGVyYWN0aXZlLXN1YnRsZTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDA7XG5cblx0XHRcdCYtLXByaW1hcnkge1xuXHRcdFx0XHRjb2xvcjogQGNvbG9yLXByb2dyZXNzaXZlO1xuXHRcdFx0fVxuXG5cdFx0XHQmOmhvdmVyLFxuXHRcdFx0JjphY3RpdmUge1xuXHRcdFx0XHRib3JkZXItY29sb3I6IEBib3JkZXItY29sb3ItdHJhbnNwYXJlbnQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8qIFByb21wdCB0cmFuc2l0aW9uIGVmZmVjdCAqL1xuLnZhLXZhcmlhbnQtcHJvbXB0LWVudGVyLWFjdGl2ZSxcbi52YS12YXJpYW50LXByb21wdC1sZWF2ZS1hY3RpdmUge1xuXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBAdHJhbnNpdGlvbi1wcm9wZXJ0eS1mYWRlO1xuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiBAdHJhbnNpdGlvbi1kdXJhdGlvbi1tZWRpdW07XG5cdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24tc3lzdGVtO1xufVxuXG4udmEtdmFyaWFudC1wcm9tcHQtZW50ZXItZnJvbSxcbi52YS12YXJpYW50LXByb21wdC1sZWF2ZS10byB7XG5cdG9wYWNpdHk6IDA7XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSBbXCJ3aWR0aFwiLCBcImhlaWdodFwiXVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsga2V5OiAwIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIk0yMCAxOGgtMS40NGEuNjEuNjEgMCAwMS0uNC0uMTIuODEuODEgMCAwMS0uMjMtLjMxTDE3IDE1aC01bC0xIDIuNTRhLjc3Ljc3IDAgMDEtLjIyLjMuNTkuNTkgMCAwMS0uNC4xNEg5bDQuNTUtMTEuNDdoMS44OXptLTMuNTMtNC4zMUwxNC44OSA5LjVhMTEuNjIgMTEuNjIgMCAwMS0uMzktMS4yNHEtLjA5LjM3LS4xOS42OWwtLjE5LjU2LTEuNTggNC4xOXptLTYuMy0xLjU4YTEzLjQzIDEzLjQzIDAgMDEtMi45MS0xLjQxIDExLjQ2IDExLjQ2IDAgMDAyLjgxLTUuMzdIMTJWNEg3LjMxYTQgNCAwIDAwLS4yLS41NkM2Ljg3IDIuNzkgNi42IDIgNi42IDJsLTEuNDcuNXMuNC44OS42IDEuNUgwdjEuMzNoMi4xNUExMS4yMyAxMS4yMyAwIDAwNSAxMC43YTE3LjE5IDE3LjE5IDAgMDEtNSAyLjFxLjU2LjgyLjg3IDEuMzhhMjMuMjggMjMuMjggMCAwMDUuMjItMi41MSAxNS42NCAxNS42NCAwIDAwMy41NiAxLjc3ek0zLjYzIDUuMzNoNC45MWE4LjExIDguMTEgMCAwMS0yLjQ1IDQuNDUgOS4xMSA5LjExIDAgMDEtMi40Ni00LjQ1elwiIH0sIG51bGwsIC0xIC8qIEhPSVNURUQgKi8pXG5jb25zdCBfaG9pc3RlZF80ID0geyBrZXk6IDEgfVxuY29uc3QgX2hvaXN0ZWRfNSA9IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwicGF0aFwiLCB7IGQ6IFwibTQuMzQgMi45MyAxMi43MyAxMi43My0xLjQxIDEuNDFMMi45MyA0LjM1elwiIH0sIG51bGwsIC0xIC8qIEhPSVNURUQgKi8pXG5jb25zdCBfaG9pc3RlZF82ID0gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJwYXRoXCIsIHsgZDogXCJNMTcuMDcgNC4zNCA0LjM0IDE3LjA3bC0xLjQxLTEuNDFMMTUuNjYgMi45M3pcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKVxuY29uc3QgX2hvaXN0ZWRfNyA9IFtcbiAgX2hvaXN0ZWRfNSxcbiAgX2hvaXN0ZWRfNlxuXVxuY29uc3QgX2hvaXN0ZWRfOCA9IHsga2V5OiAyIH1cbmNvbnN0IF9ob2lzdGVkXzkgPSAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIk04LjU5IDMuNDIgMTQuMTcgOUgydjJoMTIuMTdsLTUuNTggNS41OUwxMCAxOGw4LTgtOC04elwiIH0sIG51bGwsIC0xIC8qIEhPSVNURUQgKi8pXG5jb25zdCBfaG9pc3RlZF8xMCA9IFtcbiAgX2hvaXN0ZWRfOVxuXVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInN2Z1wiLCB7XG4gICAgY2xhc3M6IFwidmEtaWNvbi1idXR0b25fX2ljb25cIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIFwieG1sbnM6eGxpbmtcIjogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXG4gICAgd2lkdGg6ICRwcm9wcy5zaXplLFxuICAgIGhlaWdodDogJHByb3BzLnNpemUsXG4gICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gIH0sIFtcbiAgICAoJHByb3BzLmljb24gPT09ICdsYW5nJylcbiAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImdcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgZXNsaW50LWRpc2FibGUgXCIpLFxuICAgICAgICAgIF9ob2lzdGVkXzMsXG4gICAgICAgICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBlc2xpbnQtZW5hYmxlIFwiKVxuICAgICAgICBdKSlcbiAgICAgIDogKCRwcm9wcy5pY29uID09PSAnY2xvc2UnKVxuICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJnXCIsIF9ob2lzdGVkXzQsIFsuLi5faG9pc3RlZF83XSkpXG4gICAgICAgIDogKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImdcIiwgX2hvaXN0ZWRfOCwgWy4uLl9ob2lzdGVkXzEwXSkpXG4gIF0sIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzEpKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBSWNvbi52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUljb24udnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUljb24udnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgeyBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgcmVuZGVyU2xvdCBhcyBfcmVuZGVyU2xvdCwgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIG5vcm1hbGl6ZUNsYXNzIGFzIF9ub3JtYWxpemVDbGFzcywgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi1iYjc3MzRiMVwiKSxuPW4oKSxfcG9wU2NvcGVJZCgpLG4pXG5jb25zdCBfaG9pc3RlZF8xID0ge1xuICBrZXk6IDEsXG4gIGNsYXNzOiBcInZhLWJ1dHRvbl9fdGV4dFwiXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiYnV0dG9uXCIsIHtcbiAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcInZhLWJ1dHRvblwiLCB7XG5cdFx0XHQndmEtYnV0dG9uLS1hY3Rpb24tcHJvZ3Jlc3NpdmUnOiAkcHJvcHMuYWN0aW9uID09PSAncHJvZ3Jlc3NpdmUnLFxuXHRcdFx0J3ZhLWJ1dHRvbi0td2VpZ2h0LXF1aWV0JzogJHByb3BzLndlaWdodCA9PT0gJ3F1aWV0Jyxcblx0XHR9XSksXG4gICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKF9jdHguJGVtaXQoJ2NsaWNrJykpKVxuICB9LCBbXG4gICAgKCRwcm9wcy5pY29uICE9PSB1bmRlZmluZWQpXG4gICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQUljb25cIl0sIHtcbiAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgY2xhc3M6IFwidmEtYnV0dG9uX19pY29uXCIsXG4gICAgICAgICAgaWNvbjogJHByb3BzLmljb25cbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiaWNvblwiXSkpXG4gICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgIChfY3R4LiRzbG90c1snZGVmYXVsdCddKVxuICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgICAgX3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiZGVmYXVsdFwiLCB7fSwgdW5kZWZpbmVkLCB0cnVlKVxuICAgICAgICBdKSlcbiAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgKCRwcm9wcy5pbmRpY2F0b3IgIT09IHVuZGVmaW5lZClcbiAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBSWNvblwiXSwge1xuICAgICAgICAgIGtleTogMixcbiAgICAgICAgICBjbGFzczogXCJ2YS1idXR0b25fX2luZGljYXRvclwiLFxuICAgICAgICAgIGljb246ICRwcm9wcy5pbmRpY2F0b3IsXG4gICAgICAgICAgc2l6ZTogMTZcbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiaWNvblwiXSkpXG4gICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gIF0sIDIgLyogQ0xBU1MgKi8pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBQnV0dG9uLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFCdXR0b24udnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBQnV0dG9uLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFCdXR0b24udnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWJiNzczNGIxXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgeyByZW5kZXJTbG90IGFzIF9yZW5kZXJTbG90LCBUcmFuc2l0aW9uIGFzIF9UcmFuc2l0aW9uLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RyYW5zaXRpb24sIHtcbiAgICBuYW1lOiBcInZhLWZhZGVcIixcbiAgICBtb2RlOiBcIm91dC1pblwiXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJkZWZhdWx0XCIsIHt9LCB1bmRlZmluZWQsIHRydWUpXG4gICAgXSksXG4gICAgXzogMyAvKiBGT1JXQVJERUQgKi9cbiAgfSkpXG59IiwgImNvbnN0IHNjcmlwdCA9IHt9O2ltcG9ydCBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFGYWRlVHJhbnNpdGlvbi52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFGYWRlVHJhbnNpdGlvbi52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBRmFkZVRyYW5zaXRpb24udnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWJiOWM1NzUxXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQge2NvbXB1dGVkfSBmcm9tICd2dWUnO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uL21lc3NhZ2VzLmpzb24nO1xuaW1wb3J0IHt3Z1VzZXJWYXJpYW50fSBmcm9tICcuLi9tb2R1bGVzL3V0aWxzJztcblxuLy8gSW50ZXJmYWNlIHZhcmlhbnQgb2YgdmFyaWFudCBwcm9tcHRcbmNvbnN0IGkxOG5WYXJpYW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuXHRpZiAod2dVc2VyVmFyaWFudC52YWx1ZSA9PT0gJ3poJykge1xuXHRcdC8vIE5vIGNvbnZlcnNpb246IHVzZSByYW5kb21seSBzZWxlY3RlZCB2YXJpYW50XG5cdFx0cmV0dXJuIE1hdGgucmFuZG9tKCkgPiAwLjUgPyAnaGFucycgOiAnaGFudCc7XG5cdH1cblx0aWYgKFsnemgtaGFudCcsICd6aC10dycsICd6aC1oaycsICd6aC1tbyddLmluY2x1ZGVzKHdnVXNlclZhcmlhbnQudmFsdWUpKSB7XG5cdFx0cmV0dXJuICdoYW50Jztcblx0fVxuXG5cdHJldHVybiAnaGFucyc7XG59KTtcblxuZnVuY3Rpb24gdXNlSTE4bihrZXk6IHN0cmluZyk6IHN0cmluZyB7XG5cdGNvbnN0IGN1cnJlbnRNc2dzR3JvdXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSBtZXNzYWdlc1tpMThuVmFyaWFudC52YWx1ZV07XG5cdHJldHVybiBjdXJyZW50TXNnc0dyb3VwW2tleV0gPz8ga2V5O1xufVxuXG5leHBvcnQge3VzZUkxOG4gYXMgZGVmYXVsdCwgaTE4blZhcmlhbnR9O1xuIiwgIntcblx0XCJ2YXJpYW50c1wiOiB7XG5cdFx0XCJ6aC1jblwiOiBcIuS4reWbveWkp+mZhueugOS9k1wiLFxuXHRcdFwiemgtc2dcIjogXCLmlrDliqDlnaHnroDkvZNcIixcblx0XHRcInpoLW15XCI6IFwi6ams5p2l6KW/5Lqa566A5L2TXCIsXG5cdFx0XCJ6aC1oa1wiOiBcIuS4reWci+mmmea4r+e5gemrlFwiLFxuXHRcdFwiemgtbW9cIjogXCLkuK3lnIvmvrPploDnuYHpq5RcIixcblx0XHRcInpoLXR3XCI6IFwi5Lit5ZyL6Ie654Gj57mB6auUXCJcblx0fSxcblx0XCJoYW5zXCI6IHtcblx0XHRcInNwYWNlXCI6IFwiXCIsXG5cdFx0XCJjbG9zZVwiOiBcIuWFs+mXrVwiLFxuXHRcdFwidnAuaGVhZGVyXCI6IFwi5oiR5Lus5pSv5oyBXCIsXG5cdFx0XCJ2cC5oZWFkZXIuYWx0XCI6IFwi6K6w5L2P5q2k5Y+Y5L2T77yfXCIsXG5cdFx0XCJ2cC5tYWluXCI6IFwi6YCJ5Y+W5YaF5a6555qE6K+t6KiA5Y+Y5L2TXCIsXG5cdFx0XCJ2cC5tYWluLmFsdFwiOiBcIuS7peWQjumDveS9v+eUqOatpOWPmOS9k+WRiOeOsOWGheWuuVwiLFxuXHRcdFwidnAubWFpbi5leHRcIjogXCLkv53lrZjmgqjlgY/lpb3nmoTkuK3mlofor63oqIDlj5jkvZPvvIzku6Xpgb/lhY3mmL7npLrnroDnuYHmt7fmnYLnmoTlhoXlrrnvvIzmj5DkvpvmnIDkvbPnmoTpmIXor7vkvZPpqozjgIJcIixcblx0XHRcInZwLmJ1dHRvbi5va1wiOiBcIuehruWumlwiLFxuXHRcdFwidnAuYnV0dG9uLm90aGVyXCI6IFwi5YW25LuWXCJcblx0fSxcblx0XCJoYW50XCI6IHtcblx0XHRcInNwYWNlXCI6IFwiXCIsXG5cdFx0XCJjbG9zZVwiOiBcIumXnOmWiVwiLFxuXHRcdFwidnAuaGVhZGVyXCI6IFwi5oiR5YCR5pSv5o+0XCIsXG5cdFx0XCJ2cC5oZWFkZXIuYWx0XCI6IFwi6KiY5L2P5q2k6K6K6auU77yfXCIsXG5cdFx0XCJ2cC5tYWluXCI6IFwi6YG45Y+W5YWn5a6555qE6Kqe6KiA6K6K6auUXCIsXG5cdFx0XCJ2cC5tYWluLmFsdFwiOiBcIuS7peW+jOmDveS9v+eUqOatpOiuiumrlOWRiOePvuWFp+WuuVwiLFxuXHRcdFwidnAubWFpbi5leHRcIjogXCLlhLLlrZjmgqjlgY/lpb3nmoTkuK3mlofoqp7oqIDororpq5TvvIzku6Xpgb/lhY3poa/npLrnsKHnuYHmt7fpm5znmoTlhaflrrnvvIzmj5DkvpvmnIDkvbPnmoTplrHoroDpq5TpqZfjgIJcIixcblx0XHRcInZwLmJ1dHRvbi5va1wiOiBcIueiuuWumlwiLFxuXHRcdFwidnAuYnV0dG9uLm90aGVyXCI6IFwi5YW25LuWXCJcblx0fVxufVxuIiwgImltcG9ydCB7dHlwZSBWYWxpZFZhcmlhbnR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuaW1wb3J0IHtjb21wdXRlZCwgcmVmfSBmcm9tICd2dWUnO1xuXG5jb25zdCBWQUxJRF9WQVJJQU5UUyA9IFsnemgtY24nLCAnemgtc2cnLCAnemgtbXknLCAnemgtdHcnLCAnemgtaGsnLCAnemgtbW8nXSBhcyBjb25zdDtcblxuLy8gV3JhcCB3Z1VzZXJWYXJpYW50IGluIGEgcmVmIGZvciBkZWJ1Z2dpbmcgcHVycG9zZXMuXG4vLyBJdCBoYXMgbm8gcmVhY3Rpdml0eSBpbiBwcm9kdWN0aW9uLiAoY2hhbmdlcyB0byB3Z1VzZXJWYXJpYW50IHdpbGwgbm90IGJlIHJlZmxlY3RlZClcbi8vIHdnVXNlclZhcmlhbnQgY2FuIGJlIG51bGwsIHNvIGZhbGxzIGJhY2sgdG8gYW4gZW1wdHkgc3RyaW5nLlxuY29uc3Qgd2dVc2VyVmFyaWFudCA9IHJlZihtdy5jb25maWcuZ2V0KCd3Z1VzZXJWYXJpYW50JykgPz8gJycpO1xuXG5mdW5jdGlvbiBpc01vYmlsZURldmljZSgpOiBib29sZWFuIHtcblx0Ly8gQnJvd3NlciBzdXBwb3J0OlxuXHQvLyBDaHJvbWl1bSBvbiBzb21lIEFuZHJvaWQgZGV2aWNlIChlLmcuIFNhbXN1bmcpIGhhcyBcIihob3ZlcjogaG92ZXIpXCIgc2V0XG5cdC8vIFNvIGNoZWNrIHBvaW50ZXIgdG9nZXRoZXJcblx0cmV0dXJuIG1hdGNoTWVkaWEoJyhob3Zlcjogbm9uZSksIChwb2ludGVyOiBjb2Fyc2UpJykubWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gZ2V0TW91bnRQb2ludCgpOiBFbGVtZW50IHtcblx0c3dpdGNoIChtdy5jb25maWcuZ2V0KCdza2luJykpIHtcblx0XHRjYXNlICd2ZWN0b3ItMjAyMic6XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm13LXBhZ2UtY29udGFpbmVyJylbMF0gPz8gZG9jdW1lbnQuYm9keTtcblx0XHRjYXNlICdnb25nYmknOlxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1jb250ZW50LWJsb2NrJykgPz8gZG9jdW1lbnQuYm9keTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmJvZHk7XG5cdH1cbn1cblxuY29uc3QgaW5mZXJyZWRWYXJpYW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuXHRpZiAoKFZBTElEX1ZBUklBTlRTIGFzIFJlYWRvbmx5QXJyYXk8c3RyaW5nPikuaW5jbHVkZXMod2dVc2VyVmFyaWFudC52YWx1ZSkpIHtcblx0XHRyZXR1cm4gd2dVc2VyVmFyaWFudC52YWx1ZSBhcyBWYWxpZFZhcmlhbnQ7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59KTtcblxuLyoqXG4gKiBTaHVmZmxlIGJldHdlZW4gYWxsIHZhbGlkIHZhcmlhbnRzLlxuICpcbiAqIEBwYXJhbSBsYXN0IGxhc3Qgc2h1ZmZsZWQgdmFyaWFudCwgdXNlZCB0byBwcmV2ZW50IGR1cGxpY2F0aW9uc1xuICogQHJldHVybnMgc2h1ZmZsZWQgdmFyaWFudFxuICovXG5mdW5jdGlvbiBzaHVmZmxlVmFyaWFudChsYXN0PzogVmFsaWRWYXJpYW50KTogVmFsaWRWYXJpYW50IHtcblx0Y29uc3QgdGFyZ2V0QXJyYXkgPSBbLi4uVkFMSURfVkFSSUFOVFNdLmZpbHRlcigoaSkgPT4ge1xuXHRcdHJldHVybiBpICE9PSBsYXN0O1xuXHR9KTtcblx0Y29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0YXJnZXRBcnJheS5sZW5ndGgpO1xuXHRyZXR1cm4gdGFyZ2V0QXJyYXlbcmFuZG9tSW5kZXhdITtcbn1cblxuZXhwb3J0IHtWQUxJRF9WQVJJQU5UUywgd2dVc2VyVmFyaWFudCwgaXNNb2JpbGVEZXZpY2UsIGdldE1vdW50UG9pbnQsIGluZmVycmVkVmFyaWFudCwgc2h1ZmZsZVZhcmlhbnR9O1xuIiwgImxldCBjb3VudGVyID0gMDtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bmlxdWUgZWxlbWVudCBJRCBvbiBlYWNoIGNhbGwuXG4gKlxuICogQHJldHVybnMgaWRcbiAqL1xuZnVuY3Rpb24gdXNlVW5pcXVlSWQoKTogc3RyaW5nIHtcblx0cmV0dXJuIGB2YS0ke2NvdW50ZXIrK31gO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VVbmlxdWVJZDtcbiIsICJpbXBvcnQge1JlZiwgcmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7dHlwZSBWYWxpZFZhcmlhbnR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuaW1wb3J0IHtpbmZlcnJlZFZhcmlhbnQsIHNodWZmbGVWYXJpYW50fSBmcm9tICcuLi9tb2R1bGVzL3V0aWxzJztcblxuY29uc3QgSU5URVJWQUwgPSAzICogMTAwMDtcblxuLyoqXG4gKiBSZXR1cm4gYSByZWYgd2hpY2ggc2h1ZmZsZSBiZXR3ZWVuIGFsbCBwb3NzaWJsZSB2YXJpYW50cy5cbiAqXG4gKiBAcGFyYW0gaXNGcmVlemVkIHNob3VsZCBzaHVmZmxpbmcgcGF1c2Ugb3Igbm90XG4gKi9cbmZ1bmN0aW9uIHVzZVNodWZmbGVkVmFyaWFudChpc0ZyZWV6ZWQ6IFJlZjxib29sZWFuPik6IFJlZjxWYWxpZFZhcmlhbnQ+IHtcblx0Y29uc3QgcmVzdWx0ID0gcmVmPFZhbGlkVmFyaWFudD4oc2h1ZmZsZVZhcmlhbnQoKSk7XG5cdGxldCBpZDogbnVtYmVyO1xuXG5cdHdhdGNoKFxuXHRcdGlzRnJlZXplZCxcblx0XHQobmV3VmFsdWUpID0+IHtcblx0XHRcdGlmIChuZXdWYWx1ZSkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKGlkKTtcblx0XHRcdFx0Ly8gQXR0ZW1wdCB0byBmcmVlemUgYXQgaW5mZXJyZWQgdmFyaWFudCBhdCBhIGJlc3QgZWZmb3J0XG5cdFx0XHRcdC8vIFRoaXMgc2hvdWxkIGJlIG1vc3QgY2FzZXNcblx0XHRcdFx0cmVzdWx0LnZhbHVlID0gaW5mZXJyZWRWYXJpYW50LnZhbHVlID8/IHNodWZmbGVWYXJpYW50KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdFx0cmVzdWx0LnZhbHVlID0gc2h1ZmZsZVZhcmlhbnQocmVzdWx0LnZhbHVlKTtcblx0XHRcdFx0fSwgSU5URVJWQUwpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e2ltbWVkaWF0ZTogdHJ1ZX1cblx0KTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VTaHVmZmxlZFZhcmlhbnQ7XG4iLCAiaW1wb3J0IHtXcml0YWJsZUNvbXB1dGVkUmVmLCBjb21wdXRlZH0gZnJvbSAndnVlJztcblxuLyoqXG4gKiBSZXR1cm4gYSBjb21wdXRlZCBwcm9wZXJ0eSB0aGF0IHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcHJvcCB2YWx1ZSB3aGVuIGlzIGFjY2Vzc2VkXG4gKiBhbmQgZmlyZXMgYW4gZXZlbnQgd2hlbiBpcyBzZXQuIFVzZWQgd2l0aCB2LW1vZGVsLlxuICpcbiAqIEBwYXJhbSBwcm9wcyBwcm9wcyBmaWVsZCBvZiBhIGNvbXBvbmVudFxuICogQHBhcmFtIGVtaXQgZW1pdCBmdW5jdGlvbiBvZiBhIGNvbXBvbmVudFxuICogQHBhcmFtIG5hbWUgbmFtZSBvZiB0aGUgcHJvcFxuICogQHJldHVybiB3cmFwcGVkIGNvbXB1dGVyIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIHVzZU1vZGVsV3JhcHBlcjxUIGV4dGVuZHMgc3RyaW5nLCBQIGV4dGVuZHMgUmVjb3JkPFQsIHVua25vd24+Pihcblx0cHJvcHM6IFAsXG5cdGVtaXQ6IChldmVudDogYHVwZGF0ZToke1R9YCwgdmFsdWU6IFBbVF0pID0+IHZvaWQsXG5cdG5hbWU6IFQgPSAnbW9kZWxWYWx1ZScgYXMgVFxuKTogV3JpdGFibGVDb21wdXRlZFJlZjxQW1RdPiB7XG5cdHJldHVybiBjb21wdXRlZCh7XG5cdFx0Z2V0KCkge1xuXHRcdFx0cmV0dXJuIHByb3BzW25hbWVdO1xuXHRcdH0sXG5cdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHRlbWl0KGB1cGRhdGU6JHtuYW1lfWAsIHZhbHVlKTtcblx0XHR9LFxuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTW9kZWxXcmFwcGVyO1xuIiwgImltcG9ydCB7UmVmLCBXYXRjaFNvdXJjZSwgY29tcHV0ZWQsIHNoYWxsb3dSZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuXG4vKipcbiAqIENyZWF0ZSBhIHJlZiB0aGF0LCBjYW4gYmUgaW5kZXBlbmRlbnRseSB1cGRhdGVkLCBidXQgd2hlbiBpdHMgZGVmYXVsdFxuICogdmFsdWUgY2hhbmdlcywgaXQgaXMgcmVzdG9yZWQgdG8gaXRzIChuZXcpIGRlZmF1bHQgdmFsdWUuXG4gKlxuICogVXNlZCBmb3IgZGVidWdnaW5nLlxuICovXG5mdW5jdGlvbiB1c2VEZWZhdWx0PFQ+KGRlZmF1bHRWYWx1ZTogV2F0Y2hTb3VyY2U8VD4pOiBSZWY8VD4ge1xuXHRjb25zdCByZWFsUmVmID0gc2hhbGxvd1JlZjxUPih0eXBlb2YgZGVmYXVsdFZhbHVlID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdFZhbHVlKCkgOiBkZWZhdWx0VmFsdWUudmFsdWUpO1xuXG5cdHdhdGNoKFxuXHRcdGRlZmF1bHRWYWx1ZSxcblx0XHQobmV3VmFsdWUpID0+IHtcblx0XHRcdHJlYWxSZWYudmFsdWUgPSBuZXdWYWx1ZTtcblx0XHR9LFxuXHRcdHtkZWVwOiB0cnVlfVxuXHQpO1xuXG5cdHJldHVybiBjb21wdXRlZCh7XG5cdFx0Z2V0KCkge1xuXHRcdFx0cmV0dXJuIHJlYWxSZWYudmFsdWU7XG5cdFx0fSxcblx0XHRzZXQobmV3VmFsdWUpIHtcblx0XHRcdHJlYWxSZWYudmFsdWUgPSBuZXdWYWx1ZTtcblx0XHR9LFxuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlRGVmYXVsdDtcbiIsICJpbXBvcnQgeyBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgbm9ybWFsaXplQ2xhc3MgYXMgX25vcm1hbGl6ZUNsYXNzLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2ssIFRyYW5zaXRpb24gYXMgX1RyYW5zaXRpb24sIHB1c2hTY29wZUlkIGFzIF9wdXNoU2NvcGVJZCwgcG9wU2NvcGVJZCBhcyBfcG9wU2NvcGVJZCB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfd2l0aFNjb3BlSWQgPSBuID0+IChfcHVzaFNjb3BlSWQoXCJkYXRhLXYtNWE0NGNjNzVcIiksbj1uKCksX3BvcFNjb3BlSWQoKSxuKVxuY29uc3QgX2hvaXN0ZWRfMSA9IFtcImxhbmdcIiwgXCJhcmlhLWxhYmVsbGVkYnlcIiwgXCJhcmlhLWRlc2NyaWJlZGJ5XCJdXG5jb25zdCBfaG9pc3RlZF8yID0gW1wiaWRcIl1cbmNvbnN0IF9ob2lzdGVkXzMgPSAvKiNfX1BVUkVfXyovIF93aXRoU2NvcGVJZCgoKSA9PiAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcImJyXCIsIG51bGwsIG51bGwsIC0xIC8qIEhPSVNURUQgKi8pKVxuY29uc3QgX2hvaXN0ZWRfNCA9IFtcImxhbmdcIl1cbmNvbnN0IF9ob2lzdGVkXzUgPSBbXCJpZFwiXVxuY29uc3QgX2hvaXN0ZWRfNiA9IHsgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNcIiB9XG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fZm9vdGVyXCIgfVxuY29uc3QgX2hvaXN0ZWRfOCA9IHsgY2xhc3M6IFwidmEtcGFyYSB2YS1wYXJhLS1zdWJ0bGVcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RyYW5zaXRpb24sIHtcbiAgICBuYW1lOiBcInZhLXZhcmlhbnQtcHJvbXB0XCIsXG4gICAgYXBwZWFyOiBcIlwiXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAoJHByb3BzLm9wZW4pXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICByZWY6IFwicHJvbXB0XCIsXG4gICAgICAgICAgICBsYW5nOiBgemgtJHskc2V0dXAuaTE4blZhcmlhbnR9YCxcbiAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0XCIsXG4gICAgICAgICAgICByb2xlOiBcImRpYWxvZ1wiLFxuICAgICAgICAgICAgXCJhcmlhLW1vZGFsXCI6IFwiZmFsc2VcIixcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6ICRzZXR1cC50aXRsZUlkLFxuICAgICAgICAgICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6ICRzZXR1cC5kZXNjSWRcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX2Nsb3NlXCIsXG4gICAgICAgICAgICAgIHdlaWdodDogXCJxdWlldFwiLFxuICAgICAgICAgICAgICBpY29uOiBcImNsb3NlXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiAkc2V0dXAudXNlSTE4bignY2xvc2UnKSxcbiAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6ICRzZXR1cC51c2VJMThuKCdjbG9zZScpLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAkc2V0dXAub3B0T3V0QW5kQ2xvc2VcbiAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcInRpdGxlXCIsIFwiYXJpYS1sYWJlbFwiLCBcImRpc2FibGVkXCJdKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJoMlwiLCB7XG4gICAgICAgICAgICAgIGlkOiAkc2V0dXAudGl0bGVJZCxcbiAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX3RpdGxlIHZhLXRpdGxlXCJcbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZCA/ICd2cC5oZWFkZXIuYWx0JyA6ICd2cC5oZWFkZXInKSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICAgIF9ob2lzdGVkXzMsXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJWQUZhZGVUcmFuc2l0aW9uXCJdLCBudWxsLCB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgKCEkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQpXG4gICAgICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAkc2V0dXAuc2h1ZmZsZWRWYXJpYW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZzogYHpoLSR7JHNldHVwLnNodWZmbGVkVmFyaWFudH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX3RpdGxlX192YXJpYW50XCJcbiAgICAgICAgICAgICAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5tZXNzYWdlcy52YXJpYW50c1skc2V0dXAuc2h1ZmZsZWRWYXJpYW50XSksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzQpKVxuICAgICAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzIpLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwge1xuICAgICAgICAgICAgICBpZDogJHNldHVwLmRlc2NJZCxcbiAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX2Rlc2MgdmEtcGFyYVwiXG4gICAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZCA/ICd2cC5tYWluLmFsdCcgOiAndnAubWFpbicpKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfNSksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzYsIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBpbmZlcnJlZFZhcmlhbnQgaXMgbm9uLW51bGwsIGd1YXJkZWQgYnkgaXNWYXJpYW50TmFycm93ZWQgXCIpLFxuICAgICAgICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZCAmJiAkc2V0dXAuaW5mZXJyZWRWYXJpYW50ICE9PSBudWxsXG5cdFx0XHRcdFx0XHQ/IFskc2V0dXAuaW5mZXJyZWRWYXJpYW50XVxuXHRcdFx0XHRcdFx0OiAkc2V0dXAuVkFMSURfVkFSSUFOVFMsICh2YXJpYW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQUJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICAgICAga2V5OiB2YXJpYW50LFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uXCIsIHsndmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvbi0tcHJpbWFyeSc6ICRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZH1dKSxcbiAgICAgICAgICAgICAgICAgIGluZGljYXRvcjogXCJhcnJvd05leHRcIixcbiAgICAgICAgICAgICAgICAgIHdlaWdodDogXCJxdWlldFwiLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcInByb2dyZXNzaXZlXCIsXG4gICAgICAgICAgICAgICAgICBsYW5nOiB2YXJpYW50LFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICRldmVudCA9PiAoJHNldHVwLnNlbGVjdCh2YXJpYW50KSlcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAubWVzc2FnZXMudmFyaWFudHNbdmFyaWFudF0pLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF86IDIgLyogRFlOQU1JQyAqL1xuICAgICAgICAgICAgICAgIH0sIDEwMzIgLyogUFJPUFMsIERZTkFNSUNfU0xPVFMgKi8sIFtcImNsYXNzXCIsIFwibGFuZ1wiLCBcImRpc2FibGVkXCIsIFwib25DbGlja1wiXSkpXG4gICAgICAgICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKSxcbiAgICAgICAgICAgICAgKCRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZClcbiAgICAgICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQUJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zX19idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yOiBcImFycm93TmV4dFwiLFxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6IFwicXVpZXRcIixcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcInByb2dyZXNzaXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQgPSBmYWxzZSkpXG4gICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJ3ZwLmJ1dHRvbi5vdGhlcicpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcImRpc2FibGVkXCJdKSlcbiAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJmb290ZXJcIiwgX2hvaXN0ZWRfNywgW1xuICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBfaG9pc3RlZF84LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCd2cC5tYWluLmV4dCcpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8xKSlcbiAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0LnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0LnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi01YTQ0Y2M3NVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7cmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IHt0eXBlIFZhbGlkVmFyaWFudH0gZnJvbSAnZXh0LmdhZGdldC5WYXJpYW50QWxseSc7XG5pbXBvcnQgVkFCdXR0b24gZnJvbSAnLi9WQUJ1dHRvbi52dWUnO1xuaW1wb3J0IFZBU2VsZWN0IGZyb20gJy4vVkFTZWxlY3QudnVlJztcbmltcG9ydCB1c2VJMThuLCB7aTE4blZhcmlhbnR9IGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZUkxOG4nO1xuaW1wb3J0IHVzZVVuaXF1ZUlkIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZVVuaXF1ZUlkJztcbmltcG9ydCB7VkFMSURfVkFSSUFOVFMsIGluZmVycmVkVmFyaWFudCwgc2h1ZmZsZVZhcmlhbnR9IGZyb20gJy4uL21vZHVsZXMvdXRpbHMnO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uL21lc3NhZ2VzLmpzb24nO1xuaW1wb3J0IHVzZU1vZGVsV3JhcHBlciBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VNb2RlbFdyYXBwZXInO1xuaW1wb3J0IHVzZURlZmF1bHQgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlRGVmYXVsdCc7XG5cbmNvbnN0IHByb3BzID0gd2l0aERlZmF1bHRzKFxuXHRkZWZpbmVQcm9wczx7XG5cdFx0b3BlbjogYm9vbGVhbjtcblx0XHRkaXNhYmxlZD86IGJvb2xlYW47XG5cdH0+KCksXG5cdHtcblx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdH1cbik7XG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQoZTogJ3VwZGF0ZTpvcGVuJywgdmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xuXHQoZTogJ3VwZGF0ZTpkaXNhYmxlZCcsIHZhbHVlOiBib29sZWFuKTogdm9pZDtcblx0KGU6ICdzZWxlY3QnLCB2YXJpYW50OiBWYWxpZFZhcmlhbnQpOiB2b2lkO1xuXHQoZTogJ29wdG91dCcpOiB2b2lkO1xufT4oKTtcblxuY29uc3QgcHJvbXB0ID0gcmVmPEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5jb25zdCB0aXRsZUlkID0gdXNlVW5pcXVlSWQoKTtcbmNvbnN0IHNlbGVjdGVkVmFyaWFudCA9IHVzZURlZmF1bHQoKCkgPT4gaW5mZXJyZWRWYXJpYW50LnZhbHVlID8/IHNodWZmbGVWYXJpYW50KCkpO1xuY29uc3QgaXNPcGVuID0gdXNlTW9kZWxXcmFwcGVyKHByb3BzLCBlbWl0LCAnb3BlbicpO1xuY29uc3QgaXNEaXNhYmxlZCA9IHVzZU1vZGVsV3JhcHBlcihwcm9wcywgZW1pdCwgJ2Rpc2FibGVkJyk7XG5cbmZ1bmN0aW9uIG9wdE91dEFuZENsb3NlKCkge1xuXHRlbWl0KCdvcHRvdXQnKTtcblx0aXNPcGVuLnZhbHVlID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdCh2YXJpYW50OiBWYWxpZFZhcmlhbnQpIHtcblx0aXNEaXNhYmxlZC52YWx1ZSA9IHRydWU7XG5cdGVtaXQoJ3NlbGVjdCcsIHZhcmlhbnQpO1xufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PFRyYW5zaXRpb24gbmFtZT1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZVwiIGFwcGVhcj5cblx0XHQ8ZGl2XG5cdFx0XHR2LWlmPVwib3BlblwiXG5cdFx0XHRyZWY9XCJwcm9tcHRcIlxuXHRcdFx0Omxhbmc9XCJgemgtJHtpMThuVmFyaWFudH1gXCJcblx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlXCJcblx0XHRcdHJvbGU9XCJkaWFsb2dcIlxuXHRcdFx0YXJpYS1tb2RhbD1cImZhbHNlXCJcblx0XHRcdDphcmlhLWxhYmVsbGVkYnk9XCJ0aXRsZUlkXCJcblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJcIj5cblx0XHRcdFx0PGgyIDppZD1cInRpdGxlSWRcIiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyX190aXRsZSB2YS10aXRsZVwiPlxuXHRcdFx0XHRcdHt7IHVzZUkxOG4oJ3ZwLm1haW4nKSB9fVxuXHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHQ8VkFCdXR0b25cblx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyX19jbG9zZVwiXG5cdFx0XHRcdFx0d2VpZ2h0PVwicXVpZXRcIlxuXHRcdFx0XHRcdGljb249XCJjbG9zZVwiXG5cdFx0XHRcdFx0OnRpdGxlPVwidXNlSTE4bignY2xvc2UnKVwiXG5cdFx0XHRcdFx0OmFyaWEtbGFiZWw9XCJ1c2VJMThuKCdjbG9zZScpXCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0QGNsaWNrPVwib3B0T3V0QW5kQ2xvc2VcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluXCI+XG5cdFx0XHRcdDxWQVNlbGVjdFxuXHRcdFx0XHRcdHYtbW9kZWw9XCJzZWxlY3RlZFZhcmlhbnRcIlxuXHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluX19zZWxlY3RcIlxuXHRcdFx0XHRcdDpsYW5nPVwic2VsZWN0ZWRWYXJpYW50XCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0OmFyaWEtbGFiZWxsZWRieT1cInRpdGxlSWRcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PG9wdGlvbiB2LWZvcj1cInZhcmlhbnQgaW4gVkFMSURfVkFSSUFOVFNcIiA6a2V5PVwidmFyaWFudFwiIDp2YWx1ZT1cInZhcmlhbnRcIiA6bGFuZz1cInZhcmlhbnRcIj5cblx0XHRcdFx0XHRcdHt7IG1lc3NhZ2VzLnZhcmlhbnRzW3ZhcmlhbnRdIH19XG5cdFx0XHRcdFx0PC9vcHRpb24+XG5cdFx0XHRcdDwvVkFTZWxlY3Q+XG5cdFx0XHRcdDxWQUJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluX19hY3Rpb25cIlxuXHRcdFx0XHRcdGFjdGlvbj1cInByb2dyZXNzaXZlXCJcblx0XHRcdFx0XHRpY29uPVwiYXJyb3dOZXh0XCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0QGNsaWNrPVwic2VsZWN0KHNlbGVjdGVkVmFyaWFudClcIlxuXHRcdFx0XHRcdD57eyB1c2VJMThuKCd2cC5idXR0b24ub2snKSB9fTwvVkFCdXR0b25cblx0XHRcdFx0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8Zm9vdGVyIGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19mb290ZXJcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJ2YS1wYXJhIHZhLXBhcmEtLXN1YnRsZVwiPlxuXHRcdFx0XHRcdHt7IHVzZUkxOG4oJ3ZwLm1haW4uZXh0JykgfX1cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9mb290ZXI+XG5cdFx0PC9kaXY+XG5cdDwvVHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy9taXhpbnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvdG9rZW5zLmxlc3MnO1xuXG4udmEtdGl0bGUge1xuXHRib3JkZXI6IDA7IC8vIFJlc2V0XG5cdHBhZGRpbmc6IDA7IC8vIFJlc2V0XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cblx0Zm9udC1zaXplOiBAZm9udC1zaXplLXh4LWxhcmdlO1xuXHRmb250LXdlaWdodDogQGZvbnQtd2VpZ2h0LWJvbGQ7XG5cdG1hcmdpbjogQHNwYWNpbmctNTAgQHNwYWNpbmctMDtcblx0Y29sb3I6IEBjb2xvci1iYXNlO1xufVxuXG4udmEtcGFyYSB7XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cdG1hcmdpbi10b3A6IEBzcGFjaW5nLTUwO1xuXHRjb2xvcjogQGNvbG9yLWJhc2U7XG5cblx0Ji0tc3VidGxlIHtcblx0XHRjb2xvcjogQGNvbG9yLXN1YnRsZTtcblx0XHRmb250LXNpemU6IEBmb250LXNpemUteC1zbWFsbDtcblx0XHRtYXJnaW4tYm90dG9tOiBAc3BhY2luZy0zNTtcblx0fVxufVxuXG4udmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlIHtcblx0Ym94LXNpemluZzogQGJveC1zaXppbmctYmFzZTtcblx0ei1pbmRleDogQHotaW5kZXgtb3ZlcmxheTtcblx0cGFkZGluZzogQHNwYWNpbmctNTAgQHNwYWNpbmctMTAwO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGxlZnQ6IEBzcGFjaW5nLTA7XG5cdHJpZ2h0OiBAc3BhY2luZy0wO1xuXHRib3R0b206IEBzcGFjaW5nLTA7XG5cdG1hcmdpbjogQHNwYWNpbmctMCBhdXRvO1xuXHR3aWR0aDogMTAwJTtcblx0bWF4LXdpZHRoOiA2MDBweDtcblx0bWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDJlbSk7XG5cblx0b3ZlcmZsb3c6IGF1dG87XG5cdG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XG5cdGJhY2tncm91bmQtY29sb3I6IEBiYWNrZ3JvdW5kLWNvbG9yLWJhc2U7XG5cdGJvcmRlcjogQGJvcmRlci1iYXNlO1xuXHRib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuXHRib3gtc2hhZG93OiBAYm94LXNoYWRvdy1kcm9wLW1lZGl1bTtcblx0Zm9udC1mYW1pbHk6IEBmb250LWZhbWlseS1zeXN0ZW0tc2Fucztcblx0Zm9udC1zaXplOiAxcmVtOyAvLyBSZXNldFxuXHRsaW5lLWhlaWdodDogbm9ybWFsOyAvLyBSZXNldFxuXG5cdCZfX2hlYWRlciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdFx0Jl9fdGl0bGUge1xuXHRcdFx0ZmxleDogMTtcblx0XHRcdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1tZWRpdW07XG5cdFx0fVxuXG5cdFx0Jl9fY2xvc2Uge1xuXHRcdFx0cGFkZGluZzogQHNwYWNpbmctc2hvcnRoYW5kLWJ1dHRvbi1pY29uLW9ubHk7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IC0oQHNwYWNpbmctaG9yaXpvbnRhbC1idXR0b24taWNvbi1vbmx5ICsgMXB4KTtcblx0XHR9XG5cdH1cblxuXHQmX19tYWluIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdG1hcmdpbi10b3A6IEBzcGFjaW5nLTI1O1xuXG5cdFx0Jl9fc2VsZWN0IHtcblx0XHRcdG1hcmdpbi1yaWdodDogQHNwYWNpbmctNzU7XG5cdFx0XHRmbGV4OiAxO1xuXHRcdH1cblxuXHRcdCZfX2FjdGlvbiB7XG5cdFx0XHRmbGV4LXNocmluazogMDtcblx0XHR9XG5cdH1cblxuXHQmX19jbG9zZSB7XG5cdFx0cGFkZGluZzogQHNwYWNpbmctc2hvcnRoYW5kLWJ1dHRvbi1pY29uLW9ubHk7XG5cdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdG1hcmdpbi1yaWdodDogLShAc3BhY2luZy1ob3Jpem9udGFsLWJ1dHRvbi1pY29uLW9ubHkgKyAxcHgpO1xuXHR9XG59XG5cbi8qIFByb21wdCB0cmFuc2l0aW9uIGVmZmVjdCAqL1xuLnZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZS1lbnRlci1hY3RpdmUsXG4udmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlLWxlYXZlLWFjdGl2ZSB7XG5cdHRyYW5zaXRpb24tcHJvcGVydHk6IEB0cmFuc2l0aW9uLXByb3BlcnR5LWxheW91dDtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogQHRyYW5zaXRpb24tZHVyYXRpb24tbWVkaXVtO1xuXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogQHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uLXN5c3RlbTtcbn1cblxuLnZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZS1lbnRlci1mcm9tLFxuLnZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZS1sZWF2ZS10byB7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbn1cbjwvc3R5bGU+XG4uLi9tb2R1bGVzL3V0aWxzXG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB1c2VNb2RlbFdyYXBwZXIgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlTW9kZWxXcmFwcGVyJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG5cdG1vZGVsVmFsdWU6IHN0cmluZztcbn0+KCk7XG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQoZTogJ3VwZGF0ZTptb2RlbFZhbHVlJywgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XG59PigpO1xuXG5jb25zdCBtb2RlbFZhbHVlID0gdXNlTW9kZWxXcmFwcGVyKHByb3BzLCBlbWl0KTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxzZWxlY3Qgdi1tb2RlbD1cIm1vZGVsVmFsdWVcIiBjbGFzcz1cInZhLXNlbGVjdFwiPlxuXHRcdDxzbG90IC8+XG5cdDwvc2VsZWN0PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL21peGlucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy90b2tlbnMubGVzcyc7XG5cbi52YS1zZWxlY3Qge1xuXHQuc2VsZWN0X19oYW5kbGUoKTtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHJpZ2h0IEBzcGFjaW5nLTc1O1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLWltYWdlOiBAaWNvbi1leHBhbmQ7XG5cdGJhY2tncm91bmQtc2l6ZTogQHNpemUtaWNvbi14LXNtYWxsO1xuXG5cdCY6ZGlzYWJsZWQge1xuXHRcdC5zZWxlY3RfX2hhbmRsZS0tZGlzYWJsZWQoKTtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBAaWNvbi1leHBhbmQtZGlzYWJsZWQ7XG5cdFx0Ly8gU3VwcG9ydDogQ2hyb21lLCB3aGljaCBzZXRzIGFuIG9wYWNpdHkgbGVzcyB0aGFuIDEgZm9yIGRpc2FibGVkIHNlbGVjdCBlbGVtZW50cy5cblx0XHRvcGFjaXR5OiBAb3BhY2l0eS1iYXNlO1xuXHRcdGN1cnNvcjogQGN1cnNvci1ub3QtYWxsb3dlZDtcblx0fVxuXG5cdCY6ZW5hYmxlZCB7XG5cdFx0LnNlbGVjdF9faGFuZGxlLS1lbmFibGVkKCk7XG5cdH1cbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHsgcmVuZGVyU2xvdCBhcyBfcmVuZGVyU2xvdCwgdk1vZGVsU2VsZWN0IGFzIF92TW9kZWxTZWxlY3QsIHdpdGhEaXJlY3RpdmVzIGFzIF93aXRoRGlyZWN0aXZlcywgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiBfd2l0aERpcmVjdGl2ZXMoKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInNlbGVjdFwiLCB7XG4gICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLm1vZGVsVmFsdWUpID0gJGV2ZW50KSksXG4gICAgY2xhc3M6IFwidmEtc2VsZWN0XCJcbiAgfSwgW1xuICAgIF9yZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImRlZmF1bHRcIiwge30sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgXSwgNTEyIC8qIE5FRURfUEFUQ0ggKi8pKSwgW1xuICAgIFtfdk1vZGVsU2VsZWN0LCAkc2V0dXAubW9kZWxWYWx1ZV1cbiAgXSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVNlbGVjdC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBU2VsZWN0LnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVNlbGVjdC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBU2VsZWN0LnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi1jOWI0NjQ2MFwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIFRyYW5zaXRpb24gYXMgX1RyYW5zaXRpb24sIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi01Y2M3ODY1YlwiKSxuPW4oKSxfcG9wU2NvcGVJZCgpLG4pXG5jb25zdCBfaG9pc3RlZF8xID0gW1wibGFuZ1wiLCBcImFyaWEtbGFiZWxsZWRieVwiXVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJcIiB9XG5jb25zdCBfaG9pc3RlZF8zID0gW1wiaWRcIl1cbmNvbnN0IF9ob2lzdGVkXzQgPSB7IGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpblwiIH1cbmNvbnN0IF9ob2lzdGVkXzUgPSBbXCJ2YWx1ZVwiLCBcImxhbmdcIl1cbmNvbnN0IF9ob2lzdGVkXzYgPSB7IGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fZm9vdGVyXCIgfVxuY29uc3QgX2hvaXN0ZWRfNyA9IHsgY2xhc3M6IFwidmEtcGFyYSB2YS1wYXJhLS1zdWJ0bGVcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RyYW5zaXRpb24sIHtcbiAgICBuYW1lOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZVwiLFxuICAgIGFwcGVhcjogXCJcIlxuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgKCRwcm9wcy5vcGVuKVxuICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwge1xuICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgcmVmOiBcInByb21wdFwiLFxuICAgICAgICAgICAgbGFuZzogYHpoLSR7JHNldHVwLmkxOG5WYXJpYW50fWAsXG4gICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVcIixcbiAgICAgICAgICAgIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgICAgICAgICBcImFyaWEtbW9kYWxcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogJHNldHVwLnRpdGxlSWRcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImgyXCIsIHtcbiAgICAgICAgICAgICAgICBpZDogJHNldHVwLnRpdGxlSWQsXG4gICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJfX3RpdGxlIHZhLXRpdGxlXCJcbiAgICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigndnAubWFpbicpKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfMyksXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJWQUJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyX19jbG9zZVwiLFxuICAgICAgICAgICAgICAgIHdlaWdodDogXCJxdWlldFwiLFxuICAgICAgICAgICAgICAgIGljb246IFwiY2xvc2VcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogJHNldHVwLnVzZUkxOG4oJ2Nsb3NlJyksXG4gICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6ICRzZXR1cC51c2VJMThuKCdjbG9zZScpLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgb25DbGljazogJHNldHVwLm9wdE91dEFuZENsb3NlXG4gICAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcInRpdGxlXCIsIFwiYXJpYS1sYWJlbFwiLCBcImRpc2FibGVkXCJdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzQsIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIlZBU2VsZWN0XCJdLCB7XG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogJHNldHVwLnNlbGVjdGVkVmFyaWFudCxcbiAgICAgICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuc2VsZWN0ZWRWYXJpYW50KSA9ICRldmVudCkpLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpbl9fc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgbGFuZzogJHNldHVwLnNlbGVjdGVkVmFyaWFudCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6ICRzZXR1cC50aXRsZUlkXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRzZXR1cC5WQUxJRF9WQVJJQU5UUywgKHZhcmlhbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJvcHRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogdmFyaWFudCxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFyaWFudCxcbiAgICAgICAgICAgICAgICAgICAgICBsYW5nOiB2YXJpYW50XG4gICAgICAgICAgICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLm1lc3NhZ2VzLnZhcmlhbnRzW3ZhcmlhbnRdKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfNSkpXG4gICAgICAgICAgICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJtb2RlbFZhbHVlXCIsIFwibGFuZ1wiLCBcImRpc2FibGVkXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCJdKSxcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIlZBQnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluX19hY3Rpb25cIixcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwicHJvZ3Jlc3NpdmVcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcImFycm93TmV4dFwiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgb25DbGljazogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAkZXZlbnQgPT4gKCRzZXR1cC5zZWxlY3QoJHNldHVwLnNlbGVjdGVkVmFyaWFudCkpKVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCd2cC5idXR0b24ub2snKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJkaXNhYmxlZFwiXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImZvb3RlclwiLCBfaG9pc3RlZF82LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIF9ob2lzdGVkXzcsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJ3ZwLm1haW4uZXh0JykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzEpKVxuICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LTVjYzc4NjViXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgeyBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgVGVsZXBvcnQgYXMgX1RlbGVwb3J0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgW1xuICAgIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfVGVsZXBvcnQsIHsgdG86ICRzZXR1cC5kZXNrdG9wTW91bnRQb2ludCB9LCBbXG4gICAgICAoISRzZXR1cC5pc01vYmlsZSlcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFWYXJpYW50UHJvbXB0XCJdLCB7XG4gICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICBvcGVuOiAkc2V0dXAuaXNPcGVuLFxuICAgICAgICAgICAgXCJvblVwZGF0ZTpvcGVuXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzT3BlbikgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgIGRpc2FibGVkOiAkc2V0dXAuaXNEaXNhYmxlZCxcbiAgICAgICAgICAgIFwib25VcGRhdGU6ZGlzYWJsZWRcIjogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNEaXNhYmxlZCkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgIFwiYXV0by1jbG9zZVwiOiBmYWxzZSxcbiAgICAgICAgICAgIG9uT3B0b3V0OiAkc2V0dXAub25PcHRPdXQsXG4gICAgICAgICAgICBvblNlbGVjdDogJHNldHVwLnNldFZhcmlhbnRcbiAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwiZGlzYWJsZWRcIl0pKVxuICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgXSwgOCAvKiBQUk9QUyAqLywgW1widG9cIl0pKSxcbiAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIFRlbGVwb3J0IHRvIGJvZHkgYmVjYXVzZSB0aGV5IGFyZSBhbHdheXMgZmxvYXRlZCBhdCBib3R0b20gXCIpLFxuICAgIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfVGVsZXBvcnQsIHsgdG86IFwiYm9keVwiIH0sIFtcbiAgICAgICgkc2V0dXAuaXNNb2JpbGUpXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBVmFyaWFudFByb21wdE1vYmlsZVwiXSwge1xuICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgb3BlbjogJHNldHVwLmlzT3BlbixcbiAgICAgICAgICAgIFwib25VcGRhdGU6b3BlblwiOiBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc09wZW4pID0gJGV2ZW50KSksXG4gICAgICAgICAgICBkaXNhYmxlZDogJHNldHVwLmlzRGlzYWJsZWQsXG4gICAgICAgICAgICBcIm9uVXBkYXRlOmRpc2FibGVkXCI6IF9jYWNoZVszXSB8fCAoX2NhY2hlWzNdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzRGlzYWJsZWQpID0gJGV2ZW50KSksXG4gICAgICAgICAgICBvbk9wdG91dDogJHNldHVwLm9uT3B0T3V0LFxuICAgICAgICAgICAgb25TZWxlY3Q6ICRzZXR1cC5zZXRWYXJpYW50XG4gICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wib3BlblwiLCBcImRpc2FibGVkXCJdKSlcbiAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgIF0pKVxuICBdLCA2NCAvKiBTVEFCTEVfRlJBR01FTlQgKi8pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcQXBwLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXEFwcC52dWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGVBQXdCQyxRQUFBLEtBQUE7O0FDQ3hCLElBQUFDLGVBQWtCRCxRQUFBLEtBQUE7QUFDbEIsSUFBQUUsb0JBQWlFRixRQUFBLHdCQUFBOztBQ0RqRSxJQUFBRyxlQUF5QkgsUUFBQSxLQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRHpCLElBQUFJLGNBQXlLSixRQUFBLEtBQUE7QUFFekssSUFBTUssYUFBYSxDQUFDLFNBQVMsUUFBUTtBQUNyQyxJQUFNQyxhQUFhO0VBQUVDLEtBQUs7QUFBRTtBQUM1QixJQUFNQyxhQUEwQixvQkFBQUosWUFBQUs7RUFBb0I7RUFBUTtJQUFFQyxHQUFHO0VBQWdoQjtFQUFHO0VBQU07O0FBQWdCO0FBQzFtQixJQUFNQyxhQUFhO0VBQUVKLEtB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QyxJQUFJeUIsWUFBWXZCLE9BQU8wSCxhQUFjbkc7TUFDaEYySyxVQUFVbE0sT0FBTzRMO01BQ2pCTyxVQUFVbk0sT0FBT3dMO0lBQ25CLEdBQUcsTUFBTSxHQUFlLENBQUMsUUFBUSxVQUFVLENBQUMsTUFBQSxHQUM1Q00sYUFBQWxMLG9CQUFvQixRQUFRLElBQUksQ0FBQSxDQUNyQyxFQUFBO0lBQ0E7O0VBQXdCO0FBQzdCOztBQ2pDcVN3TCxZQUFPeE0sU0FBU21NO0FBQU9LLFlBQU90TCxTQUFTO0FBQWtDLElBQU91TCxlQUFRRDs7QXpCRzdYLElBQU1FLE9BQU92SSxTQUFTd0ksY0FBYyxLQUFLO0FBQ3pDeEksU0FBU0UsS0FBS3VJLE9BQU9GLElBQUk7Q0FBQSxHQUN6QjdOLGFBQUFnTyxXQUFVSixZQUFHLEVBQUVLLE1BQU1KLElBQUk7IiwKICAibmFtZXMiOiBbImltcG9ydF92dWUyMiIsICJyZXF1aXJlIiwgImltcG9ydF92dWUyMCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJpbXBvcnRfdnVlMTIiLCAiaW1wb3J0X3Z1ZTIiLCAiX2hvaXN0ZWRfMSIsICJfaG9pc3RlZF8yIiwgImtleSIsICJfaG9pc3RlZF8zIiwgImNyZWF0ZUVsZW1lbnRWTm9kZSIsICJkIiwgIl9ob2lzdGVkXzQiLCAiX2hvaXN0ZWRfNSIsICJfaG9pc3RlZF82IiwgIl9ob2lzdGVkXzciLCAiX2hvaXN0ZWRfOCIsICJfaG9pc3RlZF85IiwgIl9ob2lzdGVkXzEwIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVFbGVtZW50QmxvY2siLCAiY2xhc3MiLCAieG1sbnMiLCAid2lkdGgiLCAic2l6ZSIsICJoZWlnaHQiLCAidmlld0JveCIsICJpY29uIiwgImNyZWF0ZUNvbW1lbnRWTm9kZSIsICJWQUljb25fZGVmYXVsdCIsICJfX2ZpbGUiLCAiVkFJY29uX2RlZmF1bHQyIiwgImltcG9ydF92dWU0IiwgIl9ob2lzdGVkXzEyIiwgInJlbmRlcjIiLCAibm9ybWFsaXplQ2xhc3MiLCAiYWN0aW9uIiwgIndlaWdodCIsICJvbkNsaWNrIiwgIiRldmVudCIsICIkZW1pdCIsICJjcmVhdGVCbG9jayIsICIkc2xvdHMiLCAicmVuZGVyU2xvdCIsICJpbmRpY2F0b3IiLCAiVkFCdXR0b25fZGVmYXVsdCIsICJfX3Njb3BlSWQiLCAiVkFCdXR0b25fZGVmYXVsdDIiLCAiaW1wb3J0X3Z1ZTUiLCAicmVuZGVyMyIsICJUcmFuc2l0aW9uIiwgIm5hbWUiLCAibW9kZSIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiXyIsICJzY3JpcHQiLCAiVkFGYWRlVHJhbnNpdGlvbl9kZWZhdWx0IiwgImltcG9ydF92dWU3IiwgIm1lc3NhZ2VzX2RlZmF1bHQiLCAidmFyaWFudHMiLCAiaGFucyIsICJzcGFjZSIsICJjbG9zZSIsICJoYW50IiwgImltcG9ydF92dWU2IiwgIlZBTElEX1ZBUklBTlRTIiwgIndnVXNlclZhcmlhbnQiLCAicmVmIiwgIl9tdyRjb25maWckZ2V0IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaXNNb2JpbGVEZXZpY2UiLCAibWF0Y2hNZWRpYSIsICJtYXRjaGVzIiwgImdldE1vdW50UG9pbnQiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDIiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJib2R5IiwgInF1ZXJ5U2VsZWN0b3IiLCAiaW5mZXJyZWRWYXJpYW50IiwgImNvbXB1dGVkIiwgImluY2x1ZGVzIiwgInZhbHVlIiwgInNodWZmbGVWYXJpYW50IiwgImxhc3QiLCAidGFyZ2V0QXJyYXkiLCAiZmlsdGVyIiwgImkiLCAicmFuZG9tSW5kZXgiLCAiTWF0aCIsICJmbG9vciIsICJyYW5kb20iLCAibGVuZ3RoIiwgImkxOG5WYXJpYW50IiwgInVzZUkxOG4iLCAiX2N1cnJlbnRNc2dzR3JvdXAka2V5IiwgImN1cnJlbnRNc2dzR3JvdXAiLCAiY291bnRlciIsICJ1c2VVbmlxdWVJZCIsICJjb25jYXQiLCAidXNlVW5pcXVlSWRfZGVmYXVsdCIsICJpbXBvcnRfdnVlOCIsICJJTlRFUlZBTCIsICJ1c2VTaHVmZmxlZFZhcmlhbnQiLCAiaXNGcmVlemVkIiwgInJlc3VsdCIsICJpZCIsICJ3YXRjaCIsICJuZXdWYWx1ZSIsICJfaW5mZXJyZWRWYXJpYW50JHZhbHUiLCAiY2xlYXJJbnRlcnZhbCIsICJ3aW5kb3ciLCAic2V0SW50ZXJ2YWwiLCAiaW1tZWRpYXRlIiwgInVzZVNodWZmbGVkVmFyaWFudF9kZWZhdWx0IiwgImltcG9ydF92dWU5IiwgInVzZU1vZGVsV3JhcHBlciIsICJwcm9wcyIsICJlbWl0IiwgInNldCIsICJ1c2VNb2RlbFdyYXBwZXJfZGVmYXVsdCIsICJpbXBvcnRfdnVlMTAiLCAidXNlRGVmYXVsdCIsICJkZWZhdWx0VmFsdWUiLCAicmVhbFJlZiIsICJzaGFsbG93UmVmIiwgImRlZXAiLCAidXNlRGVmYXVsdF9kZWZhdWx0IiwgIl9fcHJvcHMiLCAiX19lbWl0IiwgInByb21wdCIsICJ0aXRsZUlkIiwgImRlc2NJZCIsICJpc09wZW4iLCAiaXNEaXNhYmxlZCIsICJpc1ZhcmlhbnROYXJyb3dlZCIsICJzaHVmZmxlZFZhcmlhbnQiLCAib3B0T3V0QW5kQ2xvc2UiLCAic2VsZWN0IiwgInZhcmlhbnQiLCAiZWxlbWVudCIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2IiwgImJ1dHRvbnMiLCAiYXV0b0Nsb3NlIiwgImRpc2FibGVkIiwgImltcG9ydF92dWUxMyIsICJfd2l0aFNjb3BlSWQiLCAibiIsICJwdXNoU2NvcGVJZCIsICJwb3BTY29wZUlkIiwgIl9ob2lzdGVkXzEzIiwgIl9ob2lzdGVkXzIyIiwgIl9ob2lzdGVkXzMyIiwgIl9ob2lzdGVkXzQyIiwgIl9ob2lzdGVkXzUyIiwgIl9ob2lzdGVkXzYyIiwgIl9ob2lzdGVkXzcyIiwgIl9ob2lzdGVkXzgyIiwgInJlbmRlcjQiLCAiYXBwZWFyIiwgIm9wZW4iLCAibGFuZyIsICJyb2xlIiwgImNyZWF0ZVZOb2RlIiwgInRpdGxlIiwgImNyZWF0ZVRleHRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAibWVzc2FnZXMiLCAiRnJhZ21lbnQiLCAicmVuZGVyTGlzdCIsICJWQVZhcmlhbnRQcm9tcHRfZGVmYXVsdCIsICJWQVZhcmlhbnRQcm9tcHRfZGVmYXVsdDIiLCAiaW1wb3J0X3Z1ZTE3IiwgIm1vZGVsVmFsdWUiLCAiaW1wb3J0X3Z1ZTE1IiwgInJlbmRlcjUiLCAid2l0aERpcmVjdGl2ZXMiLCAidk1vZGVsU2VsZWN0IiwgIlZBU2VsZWN0X2RlZmF1bHQiLCAiVkFTZWxlY3RfZGVmYXVsdDIiLCAic2VsZWN0ZWRWYXJpYW50IiwgIl9pbmZlcnJlZFZhcmlhbnQkdmFsdTIiLCAiaW1wb3J0X3Z1ZTE4IiwgIl9ob2lzdGVkXzE0IiwgIl9ob2lzdGVkXzIzIiwgIl9ob2lzdGVkXzMzIiwgIl9ob2lzdGVkXzQzIiwgIl9ob2lzdGVkXzUzIiwgIl9ob2lzdGVkXzYzIiwgIl9ob2lzdGVkXzczIiwgInJlbmRlcjYiLCAiVkFWYXJpYW50UHJvbXB0TW9iaWxlX2RlZmF1bHQiLCAiVkFWYXJpYW50UHJvbXB0TW9iaWxlX2RlZmF1bHQyIiwgImlzTW9iaWxlIiwgImRlc2t0b3BNb3VudFBvaW50IiwgInNldFZhcmlhbnQiLCAic2V0TG9jYWxWYXJpYW50IiwgInJlZGlyZWN0IiwgImZvcmNlZCIsICJvbk9wdE91dCIsICJzZXRPcHRPdXQiLCAiaW1wb3J0X3Z1ZTIxIiwgInJlbmRlcjciLCAiVGVsZXBvcnQiLCAidG8iLCAib25PcHRvdXQiLCAib25TZWxlY3QiLCAiQXBwX2RlZmF1bHQiLCAiQXBwX2RlZmF1bHQyIiwgInJvb3QiLCAiY3JlYXRlRWxlbWVudCIsICJhcHBlbmQiLCAiY3JlYXRlQXBwIiwgIm1vdW50Il0KfQo=
