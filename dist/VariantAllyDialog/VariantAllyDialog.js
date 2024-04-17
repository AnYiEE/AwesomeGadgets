/**
 * SPDX-License-Identifier: GPL-2.0
 * _addText: '{{Gadget Header|license=GPL-2.0}}'
 *
 * @base {@link https://github.com/wikimedia-gadgets/VariantAlly}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/VariantAllyDialog}
 * @license GPL-2.0 {@link https://www.qiuwenbaike.cn/wiki/H:GPLV2}
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
      type: String,
      required: false
    },
    indicator: {
      type: String,
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL1ZhcmlhbnRBbGx5RGlhbG9nLnRzIiwgImRpc3QvVmFyaWFudEFsbHlEaWFsb2cvc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL0FwcC52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHQudnVlIiwgImRpc3QvVmFyaWFudEFsbHlEaWFsb2cvc2ZjLXRlbXBsYXRlOkU6L2doUmVwby9Zc0FyY2hpdmVzLUdhZGdldHMvc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFJY29uLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBSWNvbi52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zZmMtdGVtcGxhdGU6RTovZ2hSZXBvL1lzQXJjaGl2ZXMtR2FkZ2V0cy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQUJ1dHRvbi52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQUJ1dHRvbi52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zZmMtdGVtcGxhdGU6RTovZ2hSZXBvL1lzQXJjaGl2ZXMtR2FkZ2V0cy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQUZhZGVUcmFuc2l0aW9uLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBRmFkZVRyYW5zaXRpb24udnVlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VJMThuLnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9tZXNzYWdlcy5qc29uIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9tb2R1bGVzL3V0aWxzLnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VVbmlxdWVJZC50cyIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9zYWJsZXMvdXNlU2h1ZmZsZWRWYXJpYW50LnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VNb2RlbFdyYXBwZXIudHMiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvc2FibGVzL3VzZURlZmF1bHQudHMiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zZmMtdGVtcGxhdGU6RTovZ2hSZXBvL1lzQXJjaGl2ZXMtR2FkZ2V0cy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHQudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0LnZ1ZSIsICJkaXN0L1ZhcmlhbnRBbGx5RGlhbG9nL3NyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBVmFyaWFudFByb21wdE1vYmlsZS52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVNlbGVjdC52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zZmMtdGVtcGxhdGU6RTovZ2hSZXBvL1lzQXJjaGl2ZXMtR2FkZ2V0cy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVNlbGVjdC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVNlbGVjdC52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zZmMtdGVtcGxhdGU6RTovZ2hSZXBvL1lzQXJjaGl2ZXMtR2FkZ2V0cy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZSIsICJkaXN0L1ZhcmlhbnRBbGx5RGlhbG9nL3NmYy10ZW1wbGF0ZTpFOi9naFJlcG8vWXNBcmNoaXZlcy1HYWRnZXRzL3NyYy9WYXJpYW50QWxseURpYWxvZy9BcHAudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL0FwcC52dWUiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Y3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcbmNyZWF0ZUFwcChBcHApLm1vdW50KHJvb3QpO1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge3JlZn0gZnJvbSAndnVlJztcbmltcG9ydCB7c2V0TG9jYWxWYXJpYW50LCByZWRpcmVjdCwgVmFsaWRWYXJpYW50LCBzZXRPcHRPdXR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuaW1wb3J0IFZBVmFyaWFudFByb21wdCBmcm9tICcuL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0LnZ1ZSc7XG5pbXBvcnQgVkFWYXJpYW50UHJvbXB0TW9iaWxlIGZyb20gJy4vY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlJztcbmltcG9ydCB7Z2V0TW91bnRQb2ludCwgaXNNb2JpbGVEZXZpY2V9IGZyb20gJy4vbW9kdWxlcy91dGlscyc7XG5cbmNvbnN0IGlzT3BlbiA9IHJlZih0cnVlKTtcbmNvbnN0IGlzRGlzYWJsZWQgPSByZWYoZmFsc2UpO1xuY29uc3QgaXNNb2JpbGUgPSBpc01vYmlsZURldmljZSgpO1xuY29uc3QgZGVza3RvcE1vdW50UG9pbnQgPSBnZXRNb3VudFBvaW50KCk7XG5cbmZ1bmN0aW9uIHNldFZhcmlhbnQodmFyaWFudDogVmFsaWRWYXJpYW50KSB7XG5cdHNldExvY2FsVmFyaWFudCh2YXJpYW50KTtcblx0cmVkaXJlY3QodmFyaWFudCwge2ZvcmNlZDogdHJ1ZX0pO1xufVxuXG4vLyBCcm93c2VyIHN1cHBvcnQ6IGlPUyBTYWZhcmkgPCAxNVxuLy8gV29yayBhcm91bmQgU2FmYXJpIGZpcmluZyBzY3JvbGwgZXZlbnQgYXQgdW5leHBlY3RlZCBjb25kaXRpb25zIChlLmcuIHBvcHBpbmcgdXAgU2VsZWN0KVxuYWRkRXZlbnRMaXN0ZW5lcihpc01vYmlsZSA/ICd0b3VjaG1vdmUnIDogJ3Njcm9sbCcsICgpID0+IHtcblx0aWYgKCFpc0Rpc2FibGVkLnZhbHVlKSB7XG5cdFx0aXNPcGVuLnZhbHVlID0gZmFsc2U7XG5cdH1cbn0pO1xuXG5mdW5jdGlvbiBvbk9wdE91dCgpIHtcblx0c2V0T3B0T3V0KCk7XG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8VGVsZXBvcnQgOnRvPVwiZGVza3RvcE1vdW50UG9pbnRcIj5cblx0XHQ8VkFWYXJpYW50UHJvbXB0XG5cdFx0XHR2LWlmPVwiIWlzTW9iaWxlXCJcblx0XHRcdHYtbW9kZWw6b3Blbj1cImlzT3BlblwiXG5cdFx0XHR2LW1vZGVsOmRpc2FibGVkPVwiaXNEaXNhYmxlZFwiXG5cdFx0XHQ6YXV0by1jbG9zZT1cImZhbHNlXCJcblx0XHRcdEBvcHRvdXQ9XCJvbk9wdE91dFwiXG5cdFx0XHRAc2VsZWN0PVwic2V0VmFyaWFudFwiXG5cdFx0Lz5cblx0PC9UZWxlcG9ydD5cblxuXHQ8IS0tIFRlbGVwb3J0IHRvIGJvZHkgYmVjYXVzZSB0aGV5IGFyZSBhbHdheXMgZmxvYXRlZCBhdCBib3R0b20gLS0+XG5cdDxUZWxlcG9ydCB0bz1cImJvZHlcIj5cblx0XHQ8VkFWYXJpYW50UHJvbXB0TW9iaWxlXG5cdFx0XHR2LWlmPVwiaXNNb2JpbGVcIlxuXHRcdFx0di1tb2RlbDpvcGVuPVwiaXNPcGVuXCJcblx0XHRcdHYtbW9kZWw6ZGlzYWJsZWQ9XCJpc0Rpc2FibGVkXCJcblx0XHRcdEBvcHRvdXQ9XCJvbk9wdE91dFwiXG5cdFx0XHRAc2VsZWN0PVwic2V0VmFyaWFudFwiXG5cdFx0Lz5cblx0PC9UZWxlcG9ydD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiPlxuQGltcG9ydCAocmVmZXJlbmNlKSAnLi9zdHlsZXMvdG9rZW5zLmxlc3MnO1xuXG4udmEtdmFyaWFudC1wcm9tcHQge1xuXHQvLyBWZWN0b3IgMjAyMiBzcGVjaWZpYyBhZGp1c3RtZW50c1xuXHQuc2tpbi12ZWN0b3ItMjAyMiAmIHtcblx0XHQvLyBDYWxjdWxhdGVkIGZyb20gVmVjdG9yIDIwMjIgc291cmNlIGNvZGVcblx0XHRAdmVjdG9yLTIwMjItaGVhZGVyLWhlaWdodDogNTBweCArIDIgKiA4cHg7XG5cdFx0bWF4LWhlaWdodDogY2FsYygxMDAlIC0gQHNwYWNpbmctdmVydGljYWwtZGlhbG9nIC0gQHZlY3Rvci0yMDIyLWhlYWRlci1oZWlnaHQpO1xuXG5cdFx0LnZlY3Rvci10b2MtYXZhaWxhYmxlLnZlY3Rvci1mZWF0dXJlLXRvYy1waW5uZWQtY2xpZW50cHJlZi0xICYsXG5cdFx0LnZlY3Rvci1mZWF0dXJlLW1haW4tbWVudS1waW5uZWQtZW5hYmxlZCAmIHtcblx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuXHRcdFx0XHRsZWZ0OiB1bnNldDtcblxuXHRcdFx0XHQvLyBDYWxjdWxhdGVkIGZyb20gVmVjdG9yIDIwMjIgc291cmNlIGNvZGVcblx0XHRcdFx0Ly8gSW4gdGhpcyB3aWR0aCB0aGlzIHByb21wdCB3aWxsIG5vdCBvYnNjdXJlIGFydGljbGUgY29udGVudFxuXHRcdFx0XHRAdmVjdG9yLTIwMjItbGVmdC1wYWRkaW5nOiAyLjc1ZW07XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAtKEB2ZWN0b3ItMjAyMi1sZWZ0LXBhZGRpbmcgLyAzICogMik7XG5cdFx0XHRcdG1heC13aWR0aDogY2FsYygxMi4yNWVtICsgMzZweCk7XG5cdFx0XHRcdHBhZGRpbmc6IEBzcGFjaW5nLTEwMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcblx0XHRcdEB2ZWN0b3ItMjAyMi1sZWZ0LXBhZGRpbmc6IDMuMjVlbTtcblx0XHRcdGxlZnQ6IHVuc2V0O1xuXHRcdFx0bWFyZ2luLWxlZnQ6IC0oQHZlY3Rvci0yMDIyLWxlZnQtcGFkZGluZyAvIDMgKiAyKTtcblx0XHRcdG1heC13aWR0aDogY2FsYygxNS43NWVtICsgMzZweCk7XG5cdFx0fVxuXHR9XG59XG48L3N0eWxlPlxuLi9tb2R1bGVzL3V0aWxzXG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7cmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7dHlwZSBWYWxpZFZhcmlhbnR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuaW1wb3J0IFZBQnV0dG9uIGZyb20gJy4vVkFCdXR0b24udnVlJztcbmltcG9ydCBWQUZhZGVUcmFuc2l0aW9uIGZyb20gJy4vVkFGYWRlVHJhbnNpdGlvbi52dWUnO1xuaW1wb3J0IHVzZUkxOG4sIHtpMThuVmFyaWFudH0gZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlSTE4bic7XG5pbXBvcnQgdXNlVW5pcXVlSWQgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlVW5pcXVlSWQnO1xuaW1wb3J0IHVzZVNodWZmbGVkVmFyaWFudCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VTaHVmZmxlZFZhcmlhbnQnO1xuaW1wb3J0IHtWQUxJRF9WQVJJQU5UUywgaW5mZXJyZWRWYXJpYW50fSBmcm9tICcuLi9tb2R1bGVzL3V0aWxzJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi9tZXNzYWdlcy5qc29uJztcbmltcG9ydCB1c2VNb2RlbFdyYXBwZXIgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlTW9kZWxXcmFwcGVyJztcbmltcG9ydCB1c2VEZWZhdWx0IGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZURlZmF1bHQnO1xuXG5jb25zdCBwcm9wcyA9IHdpdGhEZWZhdWx0cyhcblx0ZGVmaW5lUHJvcHM8e1xuXHRcdG9wZW46IGJvb2xlYW47XG5cdFx0ZGlzYWJsZWQ/OiBib29sZWFuO1xuXHRcdGF1dG9DbG9zZT86IGJvb2xlYW47XG5cdH0+KCksXG5cdHtcblx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0YXV0b0Nsb3NlOiBmYWxzZSxcblx0fVxuKTtcbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czx7XG5cdChlOiAndXBkYXRlOm9wZW4nLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XG5cdChlOiAndXBkYXRlOmRpc2FibGVkJywgdmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xuXHQoZTogJ3NlbGVjdCcsIHZhcmlhbnQ6IFZhbGlkVmFyaWFudCk6IHZvaWQ7XG5cdChlOiAnb3B0b3V0Jyk6IHZvaWQ7XG59PigpO1xuXG5jb25zdCBwcm9tcHQgPSByZWY8SFRNTEVsZW1lbnQgfCBudWxsPihudWxsKTtcbmNvbnN0IHRpdGxlSWQgPSB1c2VVbmlxdWVJZCgpO1xuY29uc3QgZGVzY0lkID0gdXNlVW5pcXVlSWQoKTtcbmNvbnN0IGlzT3BlbiA9IHVzZU1vZGVsV3JhcHBlcihwcm9wcywgZW1pdCwgJ29wZW4nKTtcbmNvbnN0IGlzRGlzYWJsZWQgPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQsICdkaXNhYmxlZCcpO1xuY29uc3QgaXNWYXJpYW50TmFycm93ZWQgPSB1c2VEZWZhdWx0KCgpID0+IGluZmVycmVkVmFyaWFudC52YWx1ZSAhPT0gbnVsbCk7XG5jb25zdCBzaHVmZmxlZFZhcmlhbnQgPSB1c2VTaHVmZmxlZFZhcmlhbnQoaXNWYXJpYW50TmFycm93ZWQpO1xuXG5mdW5jdGlvbiBvcHRPdXRBbmRDbG9zZSgpIHtcblx0ZW1pdCgnb3B0b3V0Jyk7XG5cdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZWxlY3QodmFyaWFudDogVmFsaWRWYXJpYW50KSB7XG5cdGlzRGlzYWJsZWQudmFsdWUgPSB0cnVlO1xuXHRlbWl0KCdzZWxlY3QnLCB2YXJpYW50KTtcbn1cblxud2F0Y2gocHJvbXB0LCAoKSA9PiB7XG5cdGNvbnN0IGVsZW1lbnQgPSBwcm9tcHQudmFsdWU7XG5cdGlmIChlbGVtZW50ICE9PSBudWxsKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGV2KSA9PiB7XG5cdFx0XHQvLyBEbyBub3QgZGlzbWlzcyBpZiBhbnkgYnV0dG9uIGlzIHByZXNzZWQgb3IgdGhlIHByb21wdCBpcyBkaXNhYmxlZFxuXHRcdFx0aWYgKGV2LmJ1dHRvbnMgPT09IDAgJiYgcHJvcHMuYXV0b0Nsb3NlICYmICFwcm9wcy5kaXNhYmxlZCkge1xuXHRcdFx0XHRpc09wZW4udmFsdWUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSk7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8VHJhbnNpdGlvbiBuYW1lPVwidmEtdmFyaWFudC1wcm9tcHRcIiBhcHBlYXI+XG5cdFx0PGRpdlxuXHRcdFx0di1pZj1cIm9wZW5cIlxuXHRcdFx0cmVmPVwicHJvbXB0XCJcblx0XHRcdDpsYW5nPVwiYHpoLSR7aTE4blZhcmlhbnR9YFwiXG5cdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0XCJcblx0XHRcdHJvbGU9XCJkaWFsb2dcIlxuXHRcdFx0YXJpYS1tb2RhbD1cImZhbHNlXCJcblx0XHRcdDphcmlhLWxhYmVsbGVkYnk9XCJ0aXRsZUlkXCJcblx0XHRcdDphcmlhLWRlc2NyaWJlZGJ5PVwiZGVzY0lkXCJcblx0XHQ+XG5cdFx0XHQ8VkFCdXR0b25cblx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fY2xvc2VcIlxuXHRcdFx0XHR3ZWlnaHQ9XCJxdWlldFwiXG5cdFx0XHRcdGljb249XCJjbG9zZVwiXG5cdFx0XHRcdDp0aXRsZT1cInVzZUkxOG4oJ2Nsb3NlJylcIlxuXHRcdFx0XHQ6YXJpYS1sYWJlbD1cInVzZUkxOG4oJ2Nsb3NlJylcIlxuXHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdEBjbGljaz1cIm9wdE91dEFuZENsb3NlXCJcblx0XHRcdC8+XG5cdFx0XHQ8aDIgOmlkPVwidGl0bGVJZFwiIGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX3RpdGxlIHZhLXRpdGxlXCI+XG5cdFx0XHRcdHt7IHVzZUkxOG4oaXNWYXJpYW50TmFycm93ZWQgPyAndnAuaGVhZGVyLmFsdCcgOiAndnAuaGVhZGVyJykgfX08YnIgLz5cblx0XHRcdFx0PFZBRmFkZVRyYW5zaXRpb24+XG5cdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdHYtaWY9XCIhaXNWYXJpYW50TmFycm93ZWRcIlxuXHRcdFx0XHRcdFx0OmtleT1cInNodWZmbGVkVmFyaWFudFwiXG5cdFx0XHRcdFx0XHQ6bGFuZz1cImB6aC0ke3NodWZmbGVkVmFyaWFudH1gXCJcblx0XHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX3RpdGxlX192YXJpYW50XCJcblx0XHRcdFx0XHRcdD57eyBtZXNzYWdlcy52YXJpYW50c1tzaHVmZmxlZFZhcmlhbnRdIH19PC9zcGFuXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHQ8L1ZBRmFkZVRyYW5zaXRpb24+XG5cdFx0XHQ8L2gyPlxuXHRcdFx0PHAgOmlkPVwiZGVzY0lkXCIgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fZGVzYyB2YS1wYXJhXCI+XG5cdFx0XHRcdHt7IHVzZUkxOG4oaXNWYXJpYW50TmFycm93ZWQgPyAndnAubWFpbi5hbHQnIDogJ3ZwLm1haW4nKSB9fVxuXHRcdFx0PC9wPlxuXHRcdFx0PGRpdiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zXCI+XG5cdFx0XHRcdDwhLS0gaW5mZXJyZWRWYXJpYW50IGlzIG5vbi1udWxsLCBndWFyZGVkIGJ5IGlzVmFyaWFudE5hcnJvd2VkIC0tPlxuXHRcdFx0XHQ8VkFCdXR0b25cblx0XHRcdFx0XHR2LWZvcj1cInZhcmlhbnQgaW4gaXNWYXJpYW50TmFycm93ZWQgJiYgaW5mZXJyZWRWYXJpYW50ICE9PSBudWxsXG5cdFx0XHRcdFx0XHQ/IFtpbmZlcnJlZFZhcmlhbnRdXG5cdFx0XHRcdFx0XHQ6IFZBTElEX1ZBUklBTlRTXCJcblx0XHRcdFx0XHQ6a2V5PVwidmFyaWFudFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uXCJcblx0XHRcdFx0XHQ6Y2xhc3M9XCJ7J3ZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zX19idXR0b24tLXByaW1hcnknOiBpc1ZhcmlhbnROYXJyb3dlZH1cIlxuXHRcdFx0XHRcdGluZGljYXRvcj1cImFycm93TmV4dFwiXG5cdFx0XHRcdFx0d2VpZ2h0PVwicXVpZXRcIlxuXHRcdFx0XHRcdGFjdGlvbj1cInByb2dyZXNzaXZlXCJcblx0XHRcdFx0XHQ6bGFuZz1cInZhcmlhbnRcIlxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJzZWxlY3QodmFyaWFudClcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3sgbWVzc2FnZXMudmFyaWFudHNbdmFyaWFudF0gfX1cblx0XHRcdFx0PC9WQUJ1dHRvbj5cblx0XHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdFx0di1pZj1cImlzVmFyaWFudE5hcnJvd2VkXCJcblx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zX19idXR0b25cIlxuXHRcdFx0XHRcdGluZGljYXRvcj1cImFycm93TmV4dFwiXG5cdFx0XHRcdFx0d2VpZ2h0PVwicXVpZXRcIlxuXHRcdFx0XHRcdGFjdGlvbj1cInByb2dyZXNzaXZlXCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0QGNsaWNrPVwiaXNWYXJpYW50TmFycm93ZWQgPSBmYWxzZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7eyB1c2VJMThuKCd2cC5idXR0b24ub3RoZXInKSB9fVxuXHRcdFx0XHQ8L1ZBQnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8Zm9vdGVyIGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX2Zvb3RlclwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInZhLXBhcmEgdmEtcGFyYS0tc3VidGxlXCI+XG5cdFx0XHRcdFx0e3sgdXNlSTE4bigndnAubWFpbi5leHQnKSB9fVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L2Zvb3Rlcj5cblx0XHQ8L2Rpdj5cblx0PC9UcmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL21peGlucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy90b2tlbnMubGVzcyc7XG5cbi52YS10aXRsZSB7XG5cdGJvcmRlcjogMDsgLy8gUmVzZXRcblx0cGFkZGluZzogMDsgLy8gUmVzZXRcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblxuXHRmb250LXNpemU6IEBmb250LXNpemUteHgtbGFyZ2U7XG5cdGZvbnQtd2VpZ2h0OiBAZm9udC13ZWlnaHQtYm9sZDtcblx0bWFyZ2luOiBAc3BhY2luZy01MCBAc3BhY2luZy0wO1xuXHRjb2xvcjogQGNvbG9yLWJhc2U7XG59XG5cbi52YS1wYXJhIHtcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblx0bWFyZ2luLXRvcDogQHNwYWNpbmctNTA7XG5cdG1hcmdpbi1ib3R0b206IEBzcGFjaW5nLTUwO1xuXHRjb2xvcjogQGNvbG9yLWJhc2U7XG5cblx0Ji0tc3VidGxlIHtcblx0XHRjb2xvcjogQGNvbG9yLXN1YnRsZTtcblx0XHRmb250LXNpemU6IEBmb250LXNpemUteC1zbWFsbDtcblx0XHRtYXJnaW4tYm90dG9tOiBAc3BhY2luZy0zNTtcblx0fVxufVxuXG4udmEtdmFyaWFudC1wcm9tcHQge1xuXHRib3gtc2l6aW5nOiBAYm94LXNpemluZy1iYXNlO1xuXHR6LWluZGV4OiBAei1pbmRleC1vdmVybGF5O1xuXHRwYWRkaW5nOiBAc3BhY2luZy0xMDAgQHNwYWNpbmctMTUwO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGxlZnQ6IEBzcGFjaW5nLWhvcml6b250YWwtZGlhbG9nO1xuXHRib3R0b206IEBzcGFjaW5nLXZlcnRpY2FsLWRpYWxvZztcblx0d2lkdGg6IGNhbGMoMTAwJSAtIEBzcGFjaW5nLWhvcml6b250YWwtZGlhbG9nICogMik7XG5cdG1heC13aWR0aDogMThlbTtcblx0bWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDJlbSk7XG5cblx0b3ZlcmZsb3c6IGF1dG87XG5cdG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XG5cdGJhY2tncm91bmQtY29sb3I6IEBiYWNrZ3JvdW5kLWNvbG9yLWJhc2U7XG5cdGJvcmRlcjogQGJvcmRlci1iYXNlO1xuXHRib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuXHRib3gtc2hhZG93OiBAYm94LXNoYWRvdy1kcm9wLW1lZGl1bTtcblx0Zm9udC1mYW1pbHk6IEBmb250LWZhbWlseS1zeXN0ZW0tc2Fucztcblx0Zm9udC1zaXplOiAxcmVtOyAvLyBSZXNldFxuXHRsaW5lLWhlaWdodDogbm9ybWFsOyAvLyBSZXNldFxuXG5cdCZfX2Nsb3NlIHtcblx0XHRwYWRkaW5nOiBAc3BhY2luZy1zaG9ydGhhbmQtYnV0dG9uLWljb24tb25seTtcblx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0bWFyZ2luLXRvcDogQHNwYWNpbmctNTA7XG5cdFx0bWFyZ2luLXJpZ2h0OiAtKEBzcGFjaW5nLWhvcml6b250YWwtYnV0dG9uLWljb24tb25seSArIDFweCk7XG5cdH1cblxuXHQmX190aXRsZSB7XG5cdFx0Jl9fdmFyaWFudCB7XG5cdFx0XHRjb2xvcjogQGNvbG9yLXByb2dyZXNzaXZlO1xuXHRcdH1cblx0fVxuXG5cdCZfX29wdGlvbnMge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdG1hcmdpbjogQHNwYWNpbmctNzUgQHNwYWNpbmctMDtcblxuXHRcdGJvcmRlcjogMXB4IHNvbGlkIEBib3JkZXItY29sb3ItYmFzZTtcblx0XHRib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuXG5cdFx0Jl9fYnV0dG9uIHtcblx0XHRcdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1zbWFsbDtcblx0XHRcdGNvbG9yOiBAY29sb3ItYmFzZTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IEBiYWNrZ3JvdW5kLWNvbG9yLWludGVyYWN0aXZlLXN1YnRsZTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDA7XG5cblx0XHRcdCYtLXByaW1hcnkge1xuXHRcdFx0XHRjb2xvcjogQGNvbG9yLXByb2dyZXNzaXZlO1xuXHRcdFx0fVxuXG5cdFx0XHQmOmhvdmVyLFxuXHRcdFx0JjphY3RpdmUge1xuXHRcdFx0XHRib3JkZXItY29sb3I6IEBib3JkZXItY29sb3ItdHJhbnNwYXJlbnQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8qIFByb21wdCB0cmFuc2l0aW9uIGVmZmVjdCAqL1xuLnZhLXZhcmlhbnQtcHJvbXB0LWVudGVyLWFjdGl2ZSxcbi52YS12YXJpYW50LXByb21wdC1sZWF2ZS1hY3RpdmUge1xuXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBAdHJhbnNpdGlvbi1wcm9wZXJ0eS1mYWRlO1xuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiBAdHJhbnNpdGlvbi1kdXJhdGlvbi1tZWRpdW07XG5cdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24tc3lzdGVtO1xufVxuXG4udmEtdmFyaWFudC1wcm9tcHQtZW50ZXItZnJvbSxcbi52YS12YXJpYW50LXByb21wdC1sZWF2ZS10byB7XG5cdG9wYWNpdHk6IDA7XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSBbXCJ3aWR0aFwiLCBcImhlaWdodFwiXVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsga2V5OiAwIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIk0yMCAxOGgtMS40NGEuNjEuNjEgMCAwMS0uNC0uMTIuODEuODEgMCAwMS0uMjMtLjMxTDE3IDE1aC01bC0xIDIuNTRhLjc3Ljc3IDAgMDEtLjIyLjMuNTkuNTkgMCAwMS0uNC4xNEg5bDQuNTUtMTEuNDdoMS44OXptLTMuNTMtNC4zMUwxNC44OSA5LjVhMTEuNjIgMTEuNjIgMCAwMS0uMzktMS4yNHEtLjA5LjM3LS4xOS42OWwtLjE5LjU2LTEuNTggNC4xOXptLTYuMy0xLjU4YTEzLjQzIDEzLjQzIDAgMDEtMi45MS0xLjQxIDExLjQ2IDExLjQ2IDAgMDAyLjgxLTUuMzdIMTJWNEg3LjMxYTQgNCAwIDAwLS4yLS41NkM2Ljg3IDIuNzkgNi42IDIgNi42IDJsLTEuNDcuNXMuNC44OS42IDEuNUgwdjEuMzNoMi4xNUExMS4yMyAxMS4yMyAwIDAwNSAxMC43YTE3LjE5IDE3LjE5IDAgMDEtNSAyLjFxLjU2LjgyLjg3IDEuMzhhMjMuMjggMjMuMjggMCAwMDUuMjItMi41MSAxNS42NCAxNS42NCAwIDAwMy41NiAxLjc3ek0zLjYzIDUuMzNoNC45MWE4LjExIDguMTEgMCAwMS0yLjQ1IDQuNDUgOS4xMSA5LjExIDAgMDEtMi40Ni00LjQ1elwiIH0sIG51bGwsIC0xIC8qIEhPSVNURUQgKi8pXG5jb25zdCBfaG9pc3RlZF80ID0geyBrZXk6IDEgfVxuY29uc3QgX2hvaXN0ZWRfNSA9IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwicGF0aFwiLCB7IGQ6IFwibTQuMzQgMi45MyAxMi43MyAxMi43My0xLjQxIDEuNDFMMi45MyA0LjM1elwiIH0sIG51bGwsIC0xIC8qIEhPSVNURUQgKi8pXG5jb25zdCBfaG9pc3RlZF82ID0gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJwYXRoXCIsIHsgZDogXCJNMTcuMDcgNC4zNCA0LjM0IDE3LjA3bC0xLjQxLTEuNDFMMTUuNjYgMi45M3pcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKVxuY29uc3QgX2hvaXN0ZWRfNyA9IFtcbiAgX2hvaXN0ZWRfNSxcbiAgX2hvaXN0ZWRfNlxuXVxuY29uc3QgX2hvaXN0ZWRfOCA9IHsga2V5OiAyIH1cbmNvbnN0IF9ob2lzdGVkXzkgPSAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIk04LjU5IDMuNDIgMTQuMTcgOUgydjJoMTIuMTdsLTUuNTggNS41OUwxMCAxOGw4LTgtOC04elwiIH0sIG51bGwsIC0xIC8qIEhPSVNURUQgKi8pXG5jb25zdCBfaG9pc3RlZF8xMCA9IFtcbiAgX2hvaXN0ZWRfOVxuXVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInN2Z1wiLCB7XG4gICAgY2xhc3M6IFwidmEtaWNvbi1idXR0b25fX2ljb25cIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIFwieG1sbnM6eGxpbmtcIjogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXG4gICAgd2lkdGg6ICRwcm9wcy5zaXplLFxuICAgIGhlaWdodDogJHByb3BzLnNpemUsXG4gICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gIH0sIFtcbiAgICAoJHByb3BzLmljb24gPT09ICdsYW5nJylcbiAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImdcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgZXNsaW50LWRpc2FibGUgXCIpLFxuICAgICAgICAgIF9ob2lzdGVkXzMsXG4gICAgICAgICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBlc2xpbnQtZW5hYmxlIFwiKVxuICAgICAgICBdKSlcbiAgICAgIDogKCRwcm9wcy5pY29uID09PSAnY2xvc2UnKVxuICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJnXCIsIF9ob2lzdGVkXzQsIFsuLi5faG9pc3RlZF83XSkpXG4gICAgICAgIDogKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImdcIiwgX2hvaXN0ZWRfOCwgWy4uLl9ob2lzdGVkXzEwXSkpXG4gIF0sIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzEpKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBSWNvbi52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUljb24udnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUljb24udnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgeyBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgcmVuZGVyU2xvdCBhcyBfcmVuZGVyU2xvdCwgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIG5vcm1hbGl6ZUNsYXNzIGFzIF9ub3JtYWxpemVDbGFzcywgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi1iYjc3MzRiMVwiKSxuPW4oKSxfcG9wU2NvcGVJZCgpLG4pXG5jb25zdCBfaG9pc3RlZF8xID0ge1xuICBrZXk6IDEsXG4gIGNsYXNzOiBcInZhLWJ1dHRvbl9fdGV4dFwiXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiYnV0dG9uXCIsIHtcbiAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcInZhLWJ1dHRvblwiLCB7XG5cdFx0XHQndmEtYnV0dG9uLS1hY3Rpb24tcHJvZ3Jlc3NpdmUnOiAkcHJvcHMuYWN0aW9uID09PSAncHJvZ3Jlc3NpdmUnLFxuXHRcdFx0J3ZhLWJ1dHRvbi0td2VpZ2h0LXF1aWV0JzogJHByb3BzLndlaWdodCA9PT0gJ3F1aWV0Jyxcblx0XHR9XSksXG4gICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKF9jdHguJGVtaXQoJ2NsaWNrJykpKVxuICB9LCBbXG4gICAgKCRwcm9wcy5pY29uICE9PSB1bmRlZmluZWQpXG4gICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQUljb25cIl0sIHtcbiAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgY2xhc3M6IFwidmEtYnV0dG9uX19pY29uXCIsXG4gICAgICAgICAgaWNvbjogJHByb3BzLmljb25cbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiaWNvblwiXSkpXG4gICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgIChfY3R4LiRzbG90c1snZGVmYXVsdCddKVxuICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgICAgX3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiZGVmYXVsdFwiLCB7fSwgdW5kZWZpbmVkLCB0cnVlKVxuICAgICAgICBdKSlcbiAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgKCRwcm9wcy5pbmRpY2F0b3IgIT09IHVuZGVmaW5lZClcbiAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBSWNvblwiXSwge1xuICAgICAgICAgIGtleTogMixcbiAgICAgICAgICBjbGFzczogXCJ2YS1idXR0b25fX2luZGljYXRvclwiLFxuICAgICAgICAgIGljb246ICRwcm9wcy5pbmRpY2F0b3IsXG4gICAgICAgICAgc2l6ZTogMTZcbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiaWNvblwiXSkpXG4gICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gIF0sIDIgLyogQ0xBU1MgKi8pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBQnV0dG9uLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFCdXR0b24udnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBQnV0dG9uLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFCdXR0b24udnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWJiNzczNGIxXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgeyByZW5kZXJTbG90IGFzIF9yZW5kZXJTbG90LCBUcmFuc2l0aW9uIGFzIF9UcmFuc2l0aW9uLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RyYW5zaXRpb24sIHtcbiAgICBuYW1lOiBcInZhLWZhZGVcIixcbiAgICBtb2RlOiBcIm91dC1pblwiXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJkZWZhdWx0XCIsIHt9LCB1bmRlZmluZWQsIHRydWUpXG4gICAgXSksXG4gICAgXzogMyAvKiBGT1JXQVJERUQgKi9cbiAgfSkpXG59IiwgImNvbnN0IHNjcmlwdCA9IHt9O2ltcG9ydCBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFGYWRlVHJhbnNpdGlvbi52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFGYWRlVHJhbnNpdGlvbi52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBRmFkZVRyYW5zaXRpb24udnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWJiOWM1NzUxXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQge2NvbXB1dGVkfSBmcm9tICd2dWUnO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uL21lc3NhZ2VzLmpzb24nO1xuaW1wb3J0IHt3Z1VzZXJWYXJpYW50fSBmcm9tICcuLi9tb2R1bGVzL3V0aWxzJztcblxuLy8gSW50ZXJmYWNlIHZhcmlhbnQgb2YgdmFyaWFudCBwcm9tcHRcbmNvbnN0IGkxOG5WYXJpYW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuXHRpZiAod2dVc2VyVmFyaWFudC52YWx1ZSA9PT0gJ3poJykge1xuXHRcdC8vIE5vIGNvbnZlcnNpb246IHVzZSByYW5kb21seSBzZWxlY3RlZCB2YXJpYW50XG5cdFx0cmV0dXJuIE1hdGgucmFuZG9tKCkgPiAwLjUgPyAnaGFucycgOiAnaGFudCc7XG5cdH1cblx0aWYgKFsnemgtaGFudCcsICd6aC10dycsICd6aC1oaycsICd6aC1tbyddLmluY2x1ZGVzKHdnVXNlclZhcmlhbnQudmFsdWUpKSB7XG5cdFx0cmV0dXJuICdoYW50Jztcblx0fVxuXG5cdHJldHVybiAnaGFucyc7XG59KTtcblxuZnVuY3Rpb24gdXNlSTE4bihrZXk6IHN0cmluZyk6IHN0cmluZyB7XG5cdGNvbnN0IGN1cnJlbnRNc2dzR3JvdXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSBtZXNzYWdlc1tpMThuVmFyaWFudC52YWx1ZV07XG5cdHJldHVybiBjdXJyZW50TXNnc0dyb3VwW2tleV0gPz8ga2V5O1xufVxuXG5leHBvcnQge3VzZUkxOG4gYXMgZGVmYXVsdCwgaTE4blZhcmlhbnR9O1xuIiwgIntcblx0XCJ2YXJpYW50c1wiOiB7XG5cdFx0XCJ6aC1jblwiOiBcIuS4reWbveWkp+mZhueugOS9k1wiLFxuXHRcdFwiemgtc2dcIjogXCLmlrDliqDlnaHnroDkvZNcIixcblx0XHRcInpoLW15XCI6IFwi6ams5p2l6KW/5Lqa566A5L2TXCIsXG5cdFx0XCJ6aC1oa1wiOiBcIuS4reWci+mmmea4r+e5gemrlFwiLFxuXHRcdFwiemgtbW9cIjogXCLkuK3lnIvmvrPploDnuYHpq5RcIixcblx0XHRcInpoLXR3XCI6IFwi5Lit5ZyL6Ie654Gj57mB6auUXCJcblx0fSxcblx0XCJoYW5zXCI6IHtcblx0XHRcInNwYWNlXCI6IFwiXCIsXG5cdFx0XCJjbG9zZVwiOiBcIuWFs+mXrVwiLFxuXHRcdFwidnAuaGVhZGVyXCI6IFwi5oiR5Lus5pSv5oyBXCIsXG5cdFx0XCJ2cC5oZWFkZXIuYWx0XCI6IFwi6K6w5L2P5q2k5Y+Y5L2T77yfXCIsXG5cdFx0XCJ2cC5tYWluXCI6IFwi6YCJ5Y+W5YaF5a6555qE6K+t6KiA5Y+Y5L2TXCIsXG5cdFx0XCJ2cC5tYWluLmFsdFwiOiBcIuS7peWQjumDveS9v+eUqOatpOWPmOS9k+WRiOeOsOWGheWuuVwiLFxuXHRcdFwidnAubWFpbi5leHRcIjogXCLkv53lrZjmgqjlgY/lpb3nmoTkuK3mlofor63oqIDlj5jkvZPvvIzku6Xpgb/lhY3mmL7npLrnroDnuYHmt7fmnYLnmoTlhoXlrrnvvIzmj5DkvpvmnIDkvbPnmoTpmIXor7vkvZPpqozjgIJcIixcblx0XHRcInZwLmJ1dHRvbi5va1wiOiBcIuehruWumlwiLFxuXHRcdFwidnAuYnV0dG9uLm90aGVyXCI6IFwi5YW25LuWXCJcblx0fSxcblx0XCJoYW50XCI6IHtcblx0XHRcInNwYWNlXCI6IFwiXCIsXG5cdFx0XCJjbG9zZVwiOiBcIumXnOmWiVwiLFxuXHRcdFwidnAuaGVhZGVyXCI6IFwi5oiR5YCR5pSv5o+0XCIsXG5cdFx0XCJ2cC5oZWFkZXIuYWx0XCI6IFwi6KiY5L2P5q2k6K6K6auU77yfXCIsXG5cdFx0XCJ2cC5tYWluXCI6IFwi6YG45Y+W5YWn5a6555qE6Kqe6KiA6K6K6auUXCIsXG5cdFx0XCJ2cC5tYWluLmFsdFwiOiBcIuS7peW+jOmDveS9v+eUqOatpOiuiumrlOWRiOePvuWFp+WuuVwiLFxuXHRcdFwidnAubWFpbi5leHRcIjogXCLlhLLlrZjmgqjlgY/lpb3nmoTkuK3mlofoqp7oqIDororpq5TvvIzku6Xpgb/lhY3poa/npLrnsKHnuYHmt7fpm5znmoTlhaflrrnvvIzmj5DkvpvmnIDkvbPnmoTplrHoroDpq5TpqZfjgIJcIixcblx0XHRcInZwLmJ1dHRvbi5va1wiOiBcIueiuuWumlwiLFxuXHRcdFwidnAuYnV0dG9uLm90aGVyXCI6IFwi5YW25LuWXCJcblx0fVxufVxuIiwgImltcG9ydCB7dHlwZSBWYWxpZFZhcmlhbnR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuaW1wb3J0IHtjb21wdXRlZCwgcmVmfSBmcm9tICd2dWUnO1xuXG5jb25zdCBWQUxJRF9WQVJJQU5UUyA9IFsnemgtY24nLCAnemgtc2cnLCAnemgtbXknLCAnemgtdHcnLCAnemgtaGsnLCAnemgtbW8nXSBhcyBjb25zdDtcblxuLy8gV3JhcCB3Z1VzZXJWYXJpYW50IGluIGEgcmVmIGZvciBkZWJ1Z2dpbmcgcHVycG9zZXMuXG4vLyBJdCBoYXMgbm8gcmVhY3Rpdml0eSBpbiBwcm9kdWN0aW9uLiAoY2hhbmdlcyB0byB3Z1VzZXJWYXJpYW50IHdpbGwgbm90IGJlIHJlZmxlY3RlZClcbi8vIHdnVXNlclZhcmlhbnQgY2FuIGJlIG51bGwsIHNvIGZhbGxzIGJhY2sgdG8gYW4gZW1wdHkgc3RyaW5nLlxuY29uc3Qgd2dVc2VyVmFyaWFudCA9IHJlZihtdy5jb25maWcuZ2V0KCd3Z1VzZXJWYXJpYW50JykgPz8gJycpO1xuXG5mdW5jdGlvbiBpc01vYmlsZURldmljZSgpOiBib29sZWFuIHtcblx0Ly8gQnJvd3NlciBzdXBwb3J0OlxuXHQvLyBDaHJvbWl1bSBvbiBzb21lIEFuZHJvaWQgZGV2aWNlIChlLmcuIFNhbXN1bmcpIGhhcyBcIihob3ZlcjogaG92ZXIpXCIgc2V0XG5cdC8vIFNvIGNoZWNrIHBvaW50ZXIgdG9nZXRoZXJcblx0cmV0dXJuIG1hdGNoTWVkaWEoJyhob3Zlcjogbm9uZSksIChwb2ludGVyOiBjb2Fyc2UpJykubWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gZ2V0TW91bnRQb2ludCgpOiBFbGVtZW50IHtcblx0c3dpdGNoIChtdy5jb25maWcuZ2V0KCdza2luJykpIHtcblx0XHRjYXNlICd2ZWN0b3ItMjAyMic6XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm13LXBhZ2UtY29udGFpbmVyJylbMF0gPz8gZG9jdW1lbnQuYm9keTtcblx0XHRjYXNlICdnb25nYmknOlxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1jb250ZW50LWJsb2NrJykgPz8gZG9jdW1lbnQuYm9keTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmJvZHk7XG5cdH1cbn1cblxuY29uc3QgaW5mZXJyZWRWYXJpYW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuXHRpZiAoKFZBTElEX1ZBUklBTlRTIGFzIFJlYWRvbmx5QXJyYXk8c3RyaW5nPikuaW5jbHVkZXMod2dVc2VyVmFyaWFudC52YWx1ZSkpIHtcblx0XHRyZXR1cm4gd2dVc2VyVmFyaWFudC52YWx1ZSBhcyBWYWxpZFZhcmlhbnQ7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59KTtcblxuLyoqXG4gKiBTaHVmZmxlIGJldHdlZW4gYWxsIHZhbGlkIHZhcmlhbnRzLlxuICpcbiAqIEBwYXJhbSBsYXN0IGxhc3Qgc2h1ZmZsZWQgdmFyaWFudCwgdXNlZCB0byBwcmV2ZW50IGR1cGxpY2F0aW9uc1xuICogQHJldHVybnMgc2h1ZmZsZWQgdmFyaWFudFxuICovXG5mdW5jdGlvbiBzaHVmZmxlVmFyaWFudChsYXN0PzogVmFsaWRWYXJpYW50KTogVmFsaWRWYXJpYW50IHtcblx0Y29uc3QgdGFyZ2V0QXJyYXkgPSBbLi4uVkFMSURfVkFSSUFOVFNdLmZpbHRlcigoaSkgPT4ge1xuXHRcdHJldHVybiBpICE9PSBsYXN0O1xuXHR9KTtcblx0Y29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0YXJnZXRBcnJheS5sZW5ndGgpO1xuXHRyZXR1cm4gdGFyZ2V0QXJyYXlbcmFuZG9tSW5kZXhdITtcbn1cblxuZXhwb3J0IHtWQUxJRF9WQVJJQU5UUywgd2dVc2VyVmFyaWFudCwgaXNNb2JpbGVEZXZpY2UsIGdldE1vdW50UG9pbnQsIGluZmVycmVkVmFyaWFudCwgc2h1ZmZsZVZhcmlhbnR9O1xuIiwgImxldCBjb3VudGVyID0gMDtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bmlxdWUgZWxlbWVudCBJRCBvbiBlYWNoIGNhbGwuXG4gKlxuICogQHJldHVybnMgaWRcbiAqL1xuZnVuY3Rpb24gdXNlVW5pcXVlSWQoKTogc3RyaW5nIHtcblx0cmV0dXJuIGB2YS0ke2NvdW50ZXIrK31gO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VVbmlxdWVJZDtcbiIsICJpbXBvcnQge1JlZiwgcmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7dHlwZSBWYWxpZFZhcmlhbnR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuaW1wb3J0IHtpbmZlcnJlZFZhcmlhbnQsIHNodWZmbGVWYXJpYW50fSBmcm9tICcuLi9tb2R1bGVzL3V0aWxzJztcblxuY29uc3QgSU5URVJWQUwgPSAzICogMTAwMDtcblxuLyoqXG4gKiBSZXR1cm4gYSByZWYgd2hpY2ggc2h1ZmZsZSBiZXR3ZWVuIGFsbCBwb3NzaWJsZSB2YXJpYW50cy5cbiAqXG4gKiBAcGFyYW0gaXNGcmVlemVkIHNob3VsZCBzaHVmZmxpbmcgcGF1c2Ugb3Igbm90XG4gKi9cbmZ1bmN0aW9uIHVzZVNodWZmbGVkVmFyaWFudChpc0ZyZWV6ZWQ6IFJlZjxib29sZWFuPik6IFJlZjxWYWxpZFZhcmlhbnQ+IHtcblx0Y29uc3QgcmVzdWx0ID0gcmVmPFZhbGlkVmFyaWFudD4oc2h1ZmZsZVZhcmlhbnQoKSk7XG5cdGxldCBpZDogbnVtYmVyO1xuXG5cdHdhdGNoKFxuXHRcdGlzRnJlZXplZCxcblx0XHQobmV3VmFsdWUpID0+IHtcblx0XHRcdGlmIChuZXdWYWx1ZSkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKGlkKTtcblx0XHRcdFx0Ly8gQXR0ZW1wdCB0byBmcmVlemUgYXQgaW5mZXJyZWQgdmFyaWFudCBhdCBhIGJlc3QgZWZmb3J0XG5cdFx0XHRcdC8vIFRoaXMgc2hvdWxkIGJlIG1vc3QgY2FzZXNcblx0XHRcdFx0cmVzdWx0LnZhbHVlID0gaW5mZXJyZWRWYXJpYW50LnZhbHVlID8/IHNodWZmbGVWYXJpYW50KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdFx0cmVzdWx0LnZhbHVlID0gc2h1ZmZsZVZhcmlhbnQocmVzdWx0LnZhbHVlKTtcblx0XHRcdFx0fSwgSU5URVJWQUwpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e2ltbWVkaWF0ZTogdHJ1ZX1cblx0KTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VTaHVmZmxlZFZhcmlhbnQ7XG4iLCAiaW1wb3J0IHtXcml0YWJsZUNvbXB1dGVkUmVmLCBjb21wdXRlZH0gZnJvbSAndnVlJztcblxuLyoqXG4gKiBSZXR1cm4gYSBjb21wdXRlZCBwcm9wZXJ0eSB0aGF0IHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcHJvcCB2YWx1ZSB3aGVuIGlzIGFjY2Vzc2VkXG4gKiBhbmQgZmlyZXMgYW4gZXZlbnQgd2hlbiBpcyBzZXQuIFVzZWQgd2l0aCB2LW1vZGVsLlxuICpcbiAqIEBwYXJhbSBwcm9wcyBwcm9wcyBmaWVsZCBvZiBhIGNvbXBvbmVudFxuICogQHBhcmFtIGVtaXQgZW1pdCBmdW5jdGlvbiBvZiBhIGNvbXBvbmVudFxuICogQHBhcmFtIG5hbWUgbmFtZSBvZiB0aGUgcHJvcFxuICogQHJldHVybiB3cmFwcGVkIGNvbXB1dGVyIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIHVzZU1vZGVsV3JhcHBlcjxUIGV4dGVuZHMgc3RyaW5nLCBQIGV4dGVuZHMgUmVjb3JkPFQsIHVua25vd24+Pihcblx0cHJvcHM6IFAsXG5cdGVtaXQ6IChldmVudDogYHVwZGF0ZToke1R9YCwgdmFsdWU6IFBbVF0pID0+IHZvaWQsXG5cdG5hbWU6IFQgPSAnbW9kZWxWYWx1ZScgYXMgVFxuKTogV3JpdGFibGVDb21wdXRlZFJlZjxQW1RdPiB7XG5cdHJldHVybiBjb21wdXRlZCh7XG5cdFx0Z2V0KCkge1xuXHRcdFx0cmV0dXJuIHByb3BzW25hbWVdO1xuXHRcdH0sXG5cdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHRlbWl0KGB1cGRhdGU6JHtuYW1lfWAsIHZhbHVlKTtcblx0XHR9LFxuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTW9kZWxXcmFwcGVyO1xuIiwgImltcG9ydCB7UmVmLCBXYXRjaFNvdXJjZSwgY29tcHV0ZWQsIHNoYWxsb3dSZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuXG4vKipcbiAqIENyZWF0ZSBhIHJlZiB0aGF0LCBjYW4gYmUgaW5kZXBlbmRlbnRseSB1cGRhdGVkLCBidXQgd2hlbiBpdHMgZGVmYXVsdFxuICogdmFsdWUgY2hhbmdlcywgaXQgaXMgcmVzdG9yZWQgdG8gaXRzIChuZXcpIGRlZmF1bHQgdmFsdWUuXG4gKlxuICogVXNlZCBmb3IgZGVidWdnaW5nLlxuICovXG5mdW5jdGlvbiB1c2VEZWZhdWx0PFQ+KGRlZmF1bHRWYWx1ZTogV2F0Y2hTb3VyY2U8VD4pOiBSZWY8VD4ge1xuXHRjb25zdCByZWFsUmVmID0gc2hhbGxvd1JlZjxUPih0eXBlb2YgZGVmYXVsdFZhbHVlID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdFZhbHVlKCkgOiBkZWZhdWx0VmFsdWUudmFsdWUpO1xuXG5cdHdhdGNoKFxuXHRcdGRlZmF1bHRWYWx1ZSxcblx0XHQobmV3VmFsdWUpID0+IHtcblx0XHRcdHJlYWxSZWYudmFsdWUgPSBuZXdWYWx1ZTtcblx0XHR9LFxuXHRcdHtkZWVwOiB0cnVlfVxuXHQpO1xuXG5cdHJldHVybiBjb21wdXRlZCh7XG5cdFx0Z2V0KCkge1xuXHRcdFx0cmV0dXJuIHJlYWxSZWYudmFsdWUgYXMgVDtcblx0XHR9LFxuXHRcdHNldChuZXdWYWx1ZSkge1xuXHRcdFx0cmVhbFJlZi52YWx1ZSA9IG5ld1ZhbHVlO1xuXHRcdH0sXG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VEZWZhdWx0O1xuIiwgImltcG9ydCB7IGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBub3JtYWxpemVDbGFzcyBhcyBfbm9ybWFsaXplQ2xhc3MsIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgVHJhbnNpdGlvbiBhcyBfVHJhbnNpdGlvbiwgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi01YTQ0Y2M3NVwiKSxuPW4oKSxfcG9wU2NvcGVJZCgpLG4pXG5jb25zdCBfaG9pc3RlZF8xID0gW1wibGFuZ1wiLCBcImFyaWEtbGFiZWxsZWRieVwiLCBcImFyaWEtZGVzY3JpYmVkYnlcIl1cbmNvbnN0IF9ob2lzdGVkXzIgPSBbXCJpZFwiXVxuY29uc3QgX2hvaXN0ZWRfMyA9IC8qI19fUFVSRV9fKi8gX3dpdGhTY29wZUlkKCgpID0+IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwiYnJcIiwgbnVsbCwgbnVsbCwgLTEgLyogSE9JU1RFRCAqLykpXG5jb25zdCBfaG9pc3RlZF80ID0gW1wibGFuZ1wiXVxuY29uc3QgX2hvaXN0ZWRfNSA9IFtcImlkXCJdXG5jb25zdCBfaG9pc3RlZF82ID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc1wiIH1cbmNvbnN0IF9ob2lzdGVkXzcgPSB7IGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X19mb290ZXJcIiB9XG5jb25zdCBfaG9pc3RlZF84ID0geyBjbGFzczogXCJ2YS1wYXJhIHZhLXBhcmEtLXN1YnRsZVwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfVHJhbnNpdGlvbiwge1xuICAgIG5hbWU6IFwidmEtdmFyaWFudC1wcm9tcHRcIixcbiAgICBhcHBlYXI6IFwiXCJcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICgkcHJvcHMub3BlbilcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIHJlZjogXCJwcm9tcHRcIixcbiAgICAgICAgICAgIGxhbmc6IGB6aC0keyRzZXR1cC5pMThuVmFyaWFudH1gLFxuICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRcIixcbiAgICAgICAgICAgIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgICAgICAgICBcImFyaWEtbW9kYWxcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogJHNldHVwLnRpdGxlSWQsXG4gICAgICAgICAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogJHNldHVwLmRlc2NJZFxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJWQUJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fY2xvc2VcIixcbiAgICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICAgIGljb246IFwiY2xvc2VcIixcbiAgICAgICAgICAgICAgdGl0bGU6ICRzZXR1cC51c2VJMThuKCdjbG9zZScpLFxuICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogJHNldHVwLnVzZUkxOG4oJ2Nsb3NlJyksXG4gICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICRzZXR1cC5vcHRPdXRBbmRDbG9zZVxuICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1widGl0bGVcIiwgXCJhcmlhLWxhYmVsXCIsIFwiZGlzYWJsZWRcIl0pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImgyXCIsIHtcbiAgICAgICAgICAgICAgaWQ6ICRzZXR1cC50aXRsZUlkLFxuICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fdGl0bGUgdmEtdGl0bGVcIlxuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLmhlYWRlci5hbHQnIDogJ3ZwLmhlYWRlcicpKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgICAgX2hvaXN0ZWRfMyxcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIlZBRmFkZVRyYW5zaXRpb25cIl0sIG51bGwsIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICAoISRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZClcbiAgICAgICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICRzZXR1cC5zaHVmZmxlZFZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5nOiBgemgtJHskc2V0dXAuc2h1ZmZsZWRWYXJpYW50fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fdGl0bGVfX3ZhcmlhbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLm1lc3NhZ2VzLnZhcmlhbnRzWyRzZXR1cC5zaHVmZmxlZFZhcmlhbnRdKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfNCkpXG4gICAgICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMiksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCB7XG4gICAgICAgICAgICAgIGlkOiAkc2V0dXAuZGVzY0lkLFxuICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fZGVzYyB2YS1wYXJhXCJcbiAgICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLm1haW4uYWx0JyA6ICd2cC5tYWluJykpLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF81KSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNiwgW1xuICAgICAgICAgICAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIGluZmVycmVkVmFyaWFudCBpcyBub24tbnVsbCwgZ3VhcmRlZCBieSBpc1ZhcmlhbnROYXJyb3dlZCBcIiksXG4gICAgICAgICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkICYmICRzZXR1cC5pbmZlcnJlZFZhcmlhbnQgIT09IG51bGxcblx0XHRcdFx0XHRcdD8gWyRzZXR1cC5pbmZlcnJlZFZhcmlhbnRdXG5cdFx0XHRcdFx0XHQ6ICRzZXR1cC5WQUxJRF9WQVJJQU5UUywgKHZhcmlhbnQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBQnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgICAgICBrZXk6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcInZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zX19idXR0b25cIiwgeyd2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uLS1wcmltYXJ5JzogJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkfV0pLFxuICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yOiBcImFycm93TmV4dFwiLFxuICAgICAgICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICAgICAgICBhY3Rpb246IFwicHJvZ3Jlc3NpdmVcIixcbiAgICAgICAgICAgICAgICAgIGxhbmc6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgb25DbGljazogJGV2ZW50ID0+ICgkc2V0dXAuc2VsZWN0KHZhcmlhbnQpKVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5tZXNzYWdlcy52YXJpYW50c1t2YXJpYW50XSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXzogMiAvKiBEWU5BTUlDICovXG4gICAgICAgICAgICAgICAgfSwgMTAzMiAvKiBQUk9QUywgRFlOQU1JQ19TTE9UUyAqLywgW1wiY2xhc3NcIiwgXCJsYW5nXCIsIFwiZGlzYWJsZWRcIiwgXCJvbkNsaWNrXCJdKSlcbiAgICAgICAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpLFxuICAgICAgICAgICAgICAoJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkKVxuICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBQnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3I6IFwiYXJyb3dOZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogXCJxdWlldFwiLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwicHJvZ3Jlc3NpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZCA9IGZhbHNlKSlcbiAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigndnAuYnV0dG9uLm90aGVyJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wiZGlzYWJsZWRcIl0pKVxuICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImZvb3RlclwiLCBfaG9pc3RlZF83LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIF9ob2lzdGVkXzgsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJ3ZwLm1haW4uZXh0JykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzEpKVxuICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0LnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0LnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHQudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHQudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LTVhNDRjYzc1XCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtyZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3R5cGUgVmFsaWRWYXJpYW50fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCBWQUJ1dHRvbiBmcm9tICcuL1ZBQnV0dG9uLnZ1ZSc7XG5pbXBvcnQgVkFTZWxlY3QgZnJvbSAnLi9WQVNlbGVjdC52dWUnO1xuaW1wb3J0IHVzZUkxOG4sIHtpMThuVmFyaWFudH0gZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlSTE4bic7XG5pbXBvcnQgdXNlVW5pcXVlSWQgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlVW5pcXVlSWQnO1xuaW1wb3J0IHtWQUxJRF9WQVJJQU5UUywgaW5mZXJyZWRWYXJpYW50LCBzaHVmZmxlVmFyaWFudH0gZnJvbSAnLi4vbW9kdWxlcy91dGlscyc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vbWVzc2FnZXMuanNvbic7XG5pbXBvcnQgdXNlTW9kZWxXcmFwcGVyIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZU1vZGVsV3JhcHBlcic7XG5pbXBvcnQgdXNlRGVmYXVsdCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VEZWZhdWx0JztcblxuY29uc3QgcHJvcHMgPSB3aXRoRGVmYXVsdHMoXG5cdGRlZmluZVByb3BzPHtcblx0XHRvcGVuOiBib29sZWFuO1xuXHRcdGRpc2FibGVkPzogYm9vbGVhbjtcblx0fT4oKSxcblx0e1xuXHRcdGRpc2FibGVkOiBmYWxzZSxcblx0fVxuKTtcbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czx7XG5cdChlOiAndXBkYXRlOm9wZW4nLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XG5cdChlOiAndXBkYXRlOmRpc2FibGVkJywgdmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xuXHQoZTogJ3NlbGVjdCcsIHZhcmlhbnQ6IFZhbGlkVmFyaWFudCk6IHZvaWQ7XG5cdChlOiAnb3B0b3V0Jyk6IHZvaWQ7XG59PigpO1xuXG5jb25zdCBwcm9tcHQgPSByZWY8SFRNTEVsZW1lbnQgfCBudWxsPihudWxsKTtcbmNvbnN0IHRpdGxlSWQgPSB1c2VVbmlxdWVJZCgpO1xuY29uc3Qgc2VsZWN0ZWRWYXJpYW50ID0gdXNlRGVmYXVsdCgoKSA9PiBpbmZlcnJlZFZhcmlhbnQudmFsdWUgPz8gc2h1ZmZsZVZhcmlhbnQoKSk7XG5jb25zdCBpc09wZW4gPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQsICdvcGVuJyk7XG5jb25zdCBpc0Rpc2FibGVkID0gdXNlTW9kZWxXcmFwcGVyKHByb3BzLCBlbWl0LCAnZGlzYWJsZWQnKTtcblxuZnVuY3Rpb24gb3B0T3V0QW5kQ2xvc2UoKSB7XG5cdGVtaXQoJ29wdG91dCcpO1xuXHRpc09wZW4udmFsdWUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KHZhcmlhbnQ6IFZhbGlkVmFyaWFudCkge1xuXHRpc0Rpc2FibGVkLnZhbHVlID0gdHJ1ZTtcblx0ZW1pdCgnc2VsZWN0JywgdmFyaWFudCk7XG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8VHJhbnNpdGlvbiBuYW1lPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlXCIgYXBwZWFyPlxuXHRcdDxkaXZcblx0XHRcdHYtaWY9XCJvcGVuXCJcblx0XHRcdHJlZj1cInByb21wdFwiXG5cdFx0XHQ6bGFuZz1cImB6aC0ke2kxOG5WYXJpYW50fWBcIlxuXHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVcIlxuXHRcdFx0cm9sZT1cImRpYWxvZ1wiXG5cdFx0XHRhcmlhLW1vZGFsPVwiZmFsc2VcIlxuXHRcdFx0OmFyaWEtbGFiZWxsZWRieT1cInRpdGxlSWRcIlxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlclwiPlxuXHRcdFx0XHQ8aDIgOmlkPVwidGl0bGVJZFwiIGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJfX3RpdGxlIHZhLXRpdGxlXCI+XG5cdFx0XHRcdFx0e3sgdXNlSTE4bigndnAubWFpbicpIH19XG5cdFx0XHRcdDwvaDI+XG5cdFx0XHRcdDxWQUJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJfX2Nsb3NlXCJcblx0XHRcdFx0XHR3ZWlnaHQ9XCJxdWlldFwiXG5cdFx0XHRcdFx0aWNvbj1cImNsb3NlXCJcblx0XHRcdFx0XHQ6dGl0bGU9XCJ1c2VJMThuKCdjbG9zZScpXCJcblx0XHRcdFx0XHQ6YXJpYS1sYWJlbD1cInVzZUkxOG4oJ2Nsb3NlJylcIlxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJvcHRPdXRBbmRDbG9zZVwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5cIj5cblx0XHRcdFx0PFZBU2VsZWN0XG5cdFx0XHRcdFx0di1tb2RlbD1cInNlbGVjdGVkVmFyaWFudFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5fX3NlbGVjdFwiXG5cdFx0XHRcdFx0Omxhbmc9XCJzZWxlY3RlZFZhcmlhbnRcIlxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0XHQ6YXJpYS1sYWJlbGxlZGJ5PVwidGl0bGVJZFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8b3B0aW9uIHYtZm9yPVwidmFyaWFudCBpbiBWQUxJRF9WQVJJQU5UU1wiIDprZXk9XCJ2YXJpYW50XCIgOnZhbHVlPVwidmFyaWFudFwiIDpsYW5nPVwidmFyaWFudFwiPlxuXHRcdFx0XHRcdFx0e3sgbWVzc2FnZXMudmFyaWFudHNbdmFyaWFudF0gfX1cblx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0PC9WQVNlbGVjdD5cblx0XHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5fX2FjdGlvblwiXG5cdFx0XHRcdFx0YWN0aW9uPVwicHJvZ3Jlc3NpdmVcIlxuXHRcdFx0XHRcdGljb249XCJhcnJvd05leHRcIlxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJzZWxlY3Qoc2VsZWN0ZWRWYXJpYW50KVwiXG5cdFx0XHRcdFx0Pnt7IHVzZUkxOG4oJ3ZwLmJ1dHRvbi5vaycpIH19PC9WQUJ1dHRvblxuXHRcdFx0XHQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxmb290ZXIgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2Zvb3RlclwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInZhLXBhcmEgdmEtcGFyYS0tc3VidGxlXCI+XG5cdFx0XHRcdFx0e3sgdXNlSTE4bigndnAubWFpbi5leHQnKSB9fVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L2Zvb3Rlcj5cblx0XHQ8L2Rpdj5cblx0PC9UcmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL21peGlucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy90b2tlbnMubGVzcyc7XG5cbi52YS10aXRsZSB7XG5cdGJvcmRlcjogMDsgLy8gUmVzZXRcblx0cGFkZGluZzogMDsgLy8gUmVzZXRcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblxuXHRmb250LXNpemU6IEBmb250LXNpemUteHgtbGFyZ2U7XG5cdGZvbnQtd2VpZ2h0OiBAZm9udC13ZWlnaHQtYm9sZDtcblx0bWFyZ2luOiBAc3BhY2luZy01MCBAc3BhY2luZy0wO1xuXHRjb2xvcjogQGNvbG9yLWJhc2U7XG59XG5cbi52YS1wYXJhIHtcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblx0bWFyZ2luLXRvcDogQHNwYWNpbmctNTA7XG5cdGNvbG9yOiBAY29sb3ItYmFzZTtcblxuXHQmLS1zdWJ0bGUge1xuXHRcdGNvbG9yOiBAY29sb3Itc3VidGxlO1xuXHRcdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS14LXNtYWxsO1xuXHRcdG1hcmdpbi1ib3R0b206IEBzcGFjaW5nLTM1O1xuXHR9XG59XG5cbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUge1xuXHRib3gtc2l6aW5nOiBAYm94LXNpemluZy1iYXNlO1xuXHR6LWluZGV4OiBAei1pbmRleC1vdmVybGF5O1xuXHRwYWRkaW5nOiBAc3BhY2luZy01MCBAc3BhY2luZy0xMDA7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0bGVmdDogQHNwYWNpbmctMDtcblx0cmlnaHQ6IEBzcGFjaW5nLTA7XG5cdGJvdHRvbTogQHNwYWNpbmctMDtcblx0bWFyZ2luOiBAc3BhY2luZy0wIGF1dG87XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXgtd2lkdGg6IDYwMHB4O1xuXHRtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMmVtKTtcblxuXHRvdmVyZmxvdzogYXV0bztcblx0b3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogQGJhY2tncm91bmQtY29sb3ItYmFzZTtcblx0Ym9yZGVyOiBAYm9yZGVyLWJhc2U7XG5cdGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWJhc2U7XG5cdGJveC1zaGFkb3c6IEBib3gtc2hhZG93LWRyb3AtbWVkaXVtO1xuXHRmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LXN5c3RlbS1zYW5zO1xuXHRmb250LXNpemU6IDFyZW07IC8vIFJlc2V0XG5cdGxpbmUtaGVpZ2h0OiBub3JtYWw7IC8vIFJlc2V0XG5cblx0Jl9faGVhZGVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHQmX190aXRsZSB7XG5cdFx0XHRmbGV4OiAxO1xuXHRcdFx0Zm9udC1zaXplOiBAZm9udC1zaXplLW1lZGl1bTtcblx0XHR9XG5cblx0XHQmX19jbG9zZSB7XG5cdFx0XHRwYWRkaW5nOiBAc3BhY2luZy1zaG9ydGhhbmQtYnV0dG9uLWljb24tb25seTtcblx0XHRcdG1hcmdpbi1yaWdodDogLShAc3BhY2luZy1ob3Jpem9udGFsLWJ1dHRvbi1pY29uLW9ubHkgKyAxcHgpO1xuXHRcdH1cblx0fVxuXG5cdCZfX21haW4ge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0bWFyZ2luLXRvcDogQHNwYWNpbmctMjU7XG5cblx0XHQmX19zZWxlY3Qge1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiBAc3BhY2luZy03NTtcblx0XHRcdGZsZXg6IDE7XG5cdFx0fVxuXG5cdFx0Jl9fYWN0aW9uIHtcblx0XHRcdGZsZXgtc2hyaW5rOiAwO1xuXHRcdH1cblx0fVxuXG5cdCZfX2Nsb3NlIHtcblx0XHRwYWRkaW5nOiBAc3BhY2luZy1zaG9ydGhhbmQtYnV0dG9uLWljb24tb25seTtcblx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0bWFyZ2luLXJpZ2h0OiAtKEBzcGFjaW5nLWhvcml6b250YWwtYnV0dG9uLWljb24tb25seSArIDFweCk7XG5cdH1cbn1cblxuLyogUHJvbXB0IHRyYW5zaXRpb24gZWZmZWN0ICovXG4udmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlLWVudGVyLWFjdGl2ZSxcbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUtbGVhdmUtYWN0aXZlIHtcblx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogQHRyYW5zaXRpb24tcHJvcGVydHktbGF5b3V0O1xuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiBAdHJhbnNpdGlvbi1kdXJhdGlvbi1tZWRpdW07XG5cdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24tc3lzdGVtO1xufVxuXG4udmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlLWVudGVyLWZyb20sXG4udmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlLWxlYXZlLXRvIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xufVxuPC9zdHlsZT5cbi4uL21vZHVsZXMvdXRpbHNcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHVzZU1vZGVsV3JhcHBlciBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VNb2RlbFdyYXBwZXInO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0bW9kZWxWYWx1ZTogc3RyaW5nO1xufT4oKTtcbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czx7XG5cdChlOiAndXBkYXRlOm1vZGVsVmFsdWUnLCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcbn0+KCk7XG5cbmNvbnN0IG1vZGVsVmFsdWUgPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQpO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PHNlbGVjdCB2LW1vZGVsPVwibW9kZWxWYWx1ZVwiIGNsYXNzPVwidmEtc2VsZWN0XCI+XG5cdFx0PHNsb3QgLz5cblx0PC9zZWxlY3Q+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvbWl4aW5zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL3Rva2Vucy5sZXNzJztcblxuLnZhLXNlbGVjdCB7XG5cdC5zZWxlY3RfX2hhbmRsZSgpO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQgQHNwYWNpbmctNzU7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtaW1hZ2U6IEBpY29uLWV4cGFuZDtcblx0YmFja2dyb3VuZC1zaXplOiBAc2l6ZS1pY29uLXgtc21hbGw7XG5cblx0JjpkaXNhYmxlZCB7XG5cdFx0LnNlbGVjdF9faGFuZGxlLS1kaXNhYmxlZCgpO1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IEBpY29uLWV4cGFuZC1kaXNhYmxlZDtcblx0XHQvLyBTdXBwb3J0OiBDaHJvbWUsIHdoaWNoIHNldHMgYW4gb3BhY2l0eSBsZXNzIHRoYW4gMSBmb3IgZGlzYWJsZWQgc2VsZWN0IGVsZW1lbnRzLlxuXHRcdG9wYWNpdHk6IEBvcGFjaXR5LWJhc2U7XG5cdFx0Y3Vyc29yOiBAY3Vyc29yLW5vdC1hbGxvd2VkO1xuXHR9XG5cblx0JjplbmFibGVkIHtcblx0XHQuc2VsZWN0X19oYW5kbGUtLWVuYWJsZWQoKTtcblx0fVxufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgeyByZW5kZXJTbG90IGFzIF9yZW5kZXJTbG90LCB2TW9kZWxTZWxlY3QgYXMgX3ZNb2RlbFNlbGVjdCwgd2l0aERpcmVjdGl2ZXMgYXMgX3dpdGhEaXJlY3RpdmVzLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIF93aXRoRGlyZWN0aXZlcygoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic2VsZWN0XCIsIHtcbiAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAubW9kZWxWYWx1ZSkgPSAkZXZlbnQpKSxcbiAgICBjbGFzczogXCJ2YS1zZWxlY3RcIlxuICB9LCBbXG4gICAgX3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiZGVmYXVsdFwiLCB7fSwgdW5kZWZpbmVkLCB0cnVlKVxuICBdLCA1MTIgLyogTkVFRF9QQVRDSCAqLykpLCBbXG4gICAgW192TW9kZWxTZWxlY3QsICRzZXR1cC5tb2RlbFZhbHVlXVxuICBdKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBU2VsZWN0LnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFTZWxlY3QudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBU2VsZWN0LnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFTZWxlY3QudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWM5YjQ2NDYwXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgVHJhbnNpdGlvbiBhcyBfVHJhbnNpdGlvbiwgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBwdXNoU2NvcGVJZCBhcyBfcHVzaFNjb3BlSWQsIHBvcFNjb3BlSWQgYXMgX3BvcFNjb3BlSWQgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX3dpdGhTY29wZUlkID0gbiA9PiAoX3B1c2hTY29wZUlkKFwiZGF0YS12LTVjYzc4NjViXCIpLG49bigpLF9wb3BTY29wZUlkKCksbilcbmNvbnN0IF9ob2lzdGVkXzEgPSBbXCJsYW5nXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCJdXG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlclwiIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSBbXCJpZFwiXVxuY29uc3QgX2hvaXN0ZWRfNCA9IHsgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluXCIgfVxuY29uc3QgX2hvaXN0ZWRfNSA9IFtcInZhbHVlXCIsIFwibGFuZ1wiXVxuY29uc3QgX2hvaXN0ZWRfNiA9IHsgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19mb290ZXJcIiB9XG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJ2YS1wYXJhIHZhLXBhcmEtLXN1YnRsZVwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfVHJhbnNpdGlvbiwge1xuICAgIG5hbWU6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlXCIsXG4gICAgYXBwZWFyOiBcIlwiXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAoJHByb3BzLm9wZW4pXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICByZWY6IFwicHJvbXB0XCIsXG4gICAgICAgICAgICBsYW5nOiBgemgtJHskc2V0dXAuaTE4blZhcmlhbnR9YCxcbiAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZVwiLFxuICAgICAgICAgICAgcm9sZTogXCJkaWFsb2dcIixcbiAgICAgICAgICAgIFwiYXJpYS1tb2RhbFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiAkc2V0dXAudGl0bGVJZFxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaDJcIiwge1xuICAgICAgICAgICAgICAgIGlkOiAkc2V0dXAudGl0bGVJZCxcbiAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlcl9fdGl0bGUgdmEtdGl0bGVcIlxuICAgICAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCd2cC5tYWluJykpLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF8zKSxcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIlZBQnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJfX2Nsb3NlXCIsXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJjbG9zZVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAkc2V0dXAudXNlSTE4bignY2xvc2UnKSxcbiAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogJHNldHVwLnVzZUkxOG4oJ2Nsb3NlJyksXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAkc2V0dXAub3B0T3V0QW5kQ2xvc2VcbiAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1widGl0bGVcIiwgXCJhcmlhLWxhYmVsXCIsIFwiZGlzYWJsZWRcIl0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNCwgW1xuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFTZWxlY3RcIl0sIHtcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiAkc2V0dXAuc2VsZWN0ZWRWYXJpYW50LFxuICAgICAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5zZWxlY3RlZFZhcmlhbnQpID0gJGV2ZW50KSksXG4gICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluX19zZWxlY3RcIixcbiAgICAgICAgICAgICAgICBsYW5nOiAkc2V0dXAuc2VsZWN0ZWRWYXJpYW50LFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogJHNldHVwLnRpdGxlSWRcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHNldHVwLlZBTElEX1ZBUklBTlRTLCAodmFyaWFudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcIm9wdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiB2YXJpYW50LFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YXJpYW50LFxuICAgICAgICAgICAgICAgICAgICAgIGxhbmc6IHZhcmlhbnRcbiAgICAgICAgICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAubWVzc2FnZXMudmFyaWFudHNbdmFyaWFudF0pLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF81KSlcbiAgICAgICAgICAgICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIiwgXCJsYW5nXCIsIFwiZGlzYWJsZWRcIiwgXCJhcmlhLWxhYmVsbGVkYnlcIl0pLFxuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5fX2FjdGlvblwiLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJwcm9ncmVzc2l2ZVwiLFxuICAgICAgICAgICAgICAgIGljb246IFwiYXJyb3dOZXh0XCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICRldmVudCA9PiAoJHNldHVwLnNlbGVjdCgkc2V0dXAuc2VsZWN0ZWRWYXJpYW50KSkpXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJ3ZwLmJ1dHRvbi5vaycpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcImRpc2FibGVkXCJdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZm9vdGVyXCIsIF9ob2lzdGVkXzYsIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfNywgX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigndnAubWFpbi5leHQnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMSkpXG4gICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9KSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdE1vYmlsZS52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdE1vYmlsZS52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtNWNjNzg2NWJcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7IG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBUZWxlcG9ydCBhcyBfVGVsZXBvcnQsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBbXG4gICAgKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9UZWxlcG9ydCwgeyB0bzogJHNldHVwLmRlc2t0b3BNb3VudFBvaW50IH0sIFtcbiAgICAgICghJHNldHVwLmlzTW9iaWxlKVxuICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQVZhcmlhbnRQcm9tcHRcIl0sIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIG9wZW46ICRzZXR1cC5pc09wZW4sXG4gICAgICAgICAgICBcIm9uVXBkYXRlOm9wZW5cIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNPcGVuKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgZGlzYWJsZWQ6ICRzZXR1cC5pc0Rpc2FibGVkLFxuICAgICAgICAgICAgXCJvblVwZGF0ZTpkaXNhYmxlZFwiOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc0Rpc2FibGVkKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgXCJhdXRvLWNsb3NlXCI6IGZhbHNlLFxuICAgICAgICAgICAgb25PcHRvdXQ6ICRzZXR1cC5vbk9wdE91dCxcbiAgICAgICAgICAgIG9uU2VsZWN0OiAkc2V0dXAuc2V0VmFyaWFudFxuICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJkaXNhYmxlZFwiXSkpXG4gICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICBdLCA4IC8qIFBST1BTICovLCBbXCJ0b1wiXSkpLFxuICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgVGVsZXBvcnQgdG8gYm9keSBiZWNhdXNlIHRoZXkgYXJlIGFsd2F5cyBmbG9hdGVkIGF0IGJvdHRvbSBcIiksXG4gICAgKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9UZWxlcG9ydCwgeyB0bzogXCJib2R5XCIgfSwgW1xuICAgICAgKCRzZXR1cC5pc01vYmlsZSlcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFWYXJpYW50UHJvbXB0TW9iaWxlXCJdLCB7XG4gICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICBvcGVuOiAkc2V0dXAuaXNPcGVuLFxuICAgICAgICAgICAgXCJvblVwZGF0ZTpvcGVuXCI6IF9jYWNoZVsyXSB8fCAoX2NhY2hlWzJdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzT3BlbikgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgIGRpc2FibGVkOiAkc2V0dXAuaXNEaXNhYmxlZCxcbiAgICAgICAgICAgIFwib25VcGRhdGU6ZGlzYWJsZWRcIjogX2NhY2hlWzNdIHx8IChfY2FjaGVbM10gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNEaXNhYmxlZCkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgIG9uT3B0b3V0OiAkc2V0dXAub25PcHRPdXQsXG4gICAgICAgICAgICBvblNlbGVjdDogJHNldHVwLnNldFZhcmlhbnRcbiAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwiZGlzYWJsZWRcIl0pKVxuICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgXSkpXG4gIF0sIDY0IC8qIFNUQUJMRV9GUkFHTUVOVCAqLykpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcQXBwLnZ1ZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZUFBd0JDLFFBQUEsS0FBQTs7QUNDeEIsSUFBQUMsZUFBa0JELFFBQUEsS0FBQTtBQUNsQixJQUFBRSxvQkFBaUVGLFFBQUEsd0JBQUE7O0FDRGpFLElBQUFHLGVBQXlCSCxRQUFBLEtBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEekIsSUFBQUksY0FBeUtKLFFBQUEsS0FBQTtBQUV6SyxJQUFNSyxhQUFhLENBQUMsU0FBUyxRQUFRO0FBQ3JDLElBQU1DLGFBQWE7RUFBRUMsS0FBSztBQUFFO0FBQzVCLElBQU1DLGFBQTBCLG9CQUFBSixZQUFBSztFQUFvQjtFQUFRO0lBQUVDLEdBQUc7RUFBZ2hCO0VBQUc7RUFBTTs7QUFBZ0I7QUFDMW1CLElBQU1DLGFBQWE7RUFB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TyxDQUFDLElBQUl5QixZQUFZdkIsT0FBTzBILGFBQWNuRztNQUNoRjJLLFVBQVVsTSxPQUFPNEw7TUFDakJPLFVBQVVuTSxPQUFPd0w7SUFDbkIsR0FBRyxNQUFNLEdBQWUsQ0FBQyxRQUFRLFVBQVUsQ0FBQyxNQUFBLEdBQzVDTSxhQUFBbEwsb0JBQW9CLFFBQVEsSUFBSSxDQUFBLENBQ3JDLEVBQUE7SUFDQTs7RUFBd0I7QUFDN0I7O0FDakNxU3dMLFlBQU94TSxTQUFTbU07QUFBT0ssWUFBT3RMLFNBQVM7QUFBa0MsSUFBT3VMLGVBQVFEOztBekJHN1gsSUFBTUUsT0FBT3ZJLFNBQVN3SSxjQUFjLEtBQUs7QUFDekN4SSxTQUFTRSxLQUFLdUksT0FBT0YsSUFBSTtDQUFBLEdBQ3pCN04sYUFBQWdPLFdBQVVKLFlBQUcsRUFBRUssTUFBTUosSUFBSTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X3Z1ZTIyIiwgInJlcXVpcmUiLCAiaW1wb3J0X3Z1ZTIwIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImltcG9ydF92dWUxMiIsICJpbXBvcnRfdnVlMiIsICJfaG9pc3RlZF8xIiwgIl9ob2lzdGVkXzIiLCAia2V5IiwgIl9ob2lzdGVkXzMiLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgImQiLCAiX2hvaXN0ZWRfNCIsICJfaG9pc3RlZF81IiwgIl9ob2lzdGVkXzYiLCAiX2hvaXN0ZWRfNyIsICJfaG9pc3RlZF84IiwgIl9ob2lzdGVkXzkiLCAiX2hvaXN0ZWRfMTAiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJjbGFzcyIsICJ4bWxucyIsICJ3aWR0aCIsICJzaXplIiwgImhlaWdodCIsICJ2aWV3Qm94IiwgImljb24iLCAiY3JlYXRlQ29tbWVudFZOb2RlIiwgIlZBSWNvbl9kZWZhdWx0IiwgIl9fZmlsZSIsICJWQUljb25fZGVmYXVsdDIiLCAiaW1wb3J0X3Z1ZTQiLCAiX2hvaXN0ZWRfMTIiLCAicmVuZGVyMiIsICJub3JtYWxpemVDbGFzcyIsICJhY3Rpb24iLCAid2VpZ2h0IiwgIm9uQ2xpY2siLCAiJGV2ZW50IiwgIiRlbWl0IiwgImNyZWF0ZUJsb2NrIiwgIiRzbG90cyIsICJyZW5kZXJTbG90IiwgImluZGljYXRvciIsICJWQUJ1dHRvbl9kZWZhdWx0IiwgIl9fc2NvcGVJZCIsICJWQUJ1dHRvbl9kZWZhdWx0MiIsICJpbXBvcnRfdnVlNSIsICJyZW5kZXIzIiwgIlRyYW5zaXRpb24iLCAibmFtZSIsICJtb2RlIiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJfIiwgInNjcmlwdCIsICJWQUZhZGVUcmFuc2l0aW9uX2RlZmF1bHQiLCAiaW1wb3J0X3Z1ZTciLCAibWVzc2FnZXNfZGVmYXVsdCIsICJ2YXJpYW50cyIsICJoYW5zIiwgInNwYWNlIiwgImNsb3NlIiwgImhhbnQiLCAiaW1wb3J0X3Z1ZTYiLCAiVkFMSURfVkFSSUFOVFMiLCAid2dVc2VyVmFyaWFudCIsICJyZWYiLCAiX213JGNvbmZpZyRnZXQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpc01vYmlsZURldmljZSIsICJtYXRjaE1lZGlhIiwgIm1hdGNoZXMiLCAiZ2V0TW91bnRQb2ludCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImJvZHkiLCAicXVlcnlTZWxlY3RvciIsICJpbmZlcnJlZFZhcmlhbnQiLCAiY29tcHV0ZWQiLCAiaW5jbHVkZXMiLCAidmFsdWUiLCAic2h1ZmZsZVZhcmlhbnQiLCAibGFzdCIsICJ0YXJnZXRBcnJheSIsICJmaWx0ZXIiLCAiaSIsICJyYW5kb21JbmRleCIsICJNYXRoIiwgImZsb29yIiwgInJhbmRvbSIsICJsZW5ndGgiLCAiaTE4blZhcmlhbnQiLCAidXNlSTE4biIsICJfY3VycmVudE1zZ3NHcm91cCRrZXkiLCAiY3VycmVudE1zZ3NHcm91cCIsICJjb3VudGVyIiwgInVzZVVuaXF1ZUlkIiwgImNvbmNhdCIsICJ1c2VVbmlxdWVJZF9kZWZhdWx0IiwgImltcG9ydF92dWU4IiwgIklOVEVSVkFMIiwgInVzZVNodWZmbGVkVmFyaWFudCIsICJpc0ZyZWV6ZWQiLCAicmVzdWx0IiwgImlkIiwgIndhdGNoIiwgIm5ld1ZhbHVlIiwgIl9pbmZlcnJlZFZhcmlhbnQkdmFsdSIsICJjbGVhckludGVydmFsIiwgIndpbmRvdyIsICJzZXRJbnRlcnZhbCIsICJpbW1lZGlhdGUiLCAidXNlU2h1ZmZsZWRWYXJpYW50X2RlZmF1bHQiLCAiaW1wb3J0X3Z1ZTkiLCAidXNlTW9kZWxXcmFwcGVyIiwgInByb3BzIiwgImVtaXQiLCAic2V0IiwgInVzZU1vZGVsV3JhcHBlcl9kZWZhdWx0IiwgImltcG9ydF92dWUxMCIsICJ1c2VEZWZhdWx0IiwgImRlZmF1bHRWYWx1ZSIsICJyZWFsUmVmIiwgInNoYWxsb3dSZWYiLCAiZGVlcCIsICJ1c2VEZWZhdWx0X2RlZmF1bHQiLCAiX19wcm9wcyIsICJfX2VtaXQiLCAicHJvbXB0IiwgInRpdGxlSWQiLCAiZGVzY0lkIiwgImlzT3BlbiIsICJpc0Rpc2FibGVkIiwgImlzVmFyaWFudE5hcnJvd2VkIiwgInNodWZmbGVkVmFyaWFudCIsICJvcHRPdXRBbmRDbG9zZSIsICJzZWxlY3QiLCAidmFyaWFudCIsICJlbGVtZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXYiLCAiYnV0dG9ucyIsICJhdXRvQ2xvc2UiLCAiZGlzYWJsZWQiLCAiaW1wb3J0X3Z1ZTEzIiwgIl93aXRoU2NvcGVJZCIsICJuIiwgInB1c2hTY29wZUlkIiwgInBvcFNjb3BlSWQiLCAiX2hvaXN0ZWRfMTMiLCAiX2hvaXN0ZWRfMjIiLCAiX2hvaXN0ZWRfMzIiLCAiX2hvaXN0ZWRfNDIiLCAiX2hvaXN0ZWRfNTIiLCAiX2hvaXN0ZWRfNjIiLCAiX2hvaXN0ZWRfNzIiLCAiX2hvaXN0ZWRfODIiLCAicmVuZGVyNCIsICJhcHBlYXIiLCAib3BlbiIsICJsYW5nIiwgInJvbGUiLCAiY3JlYXRlVk5vZGUiLCAidGl0bGUiLCAiY3JlYXRlVGV4dFZOb2RlIiwgInRvRGlzcGxheVN0cmluZyIsICJtZXNzYWdlcyIsICJGcmFnbWVudCIsICJyZW5kZXJMaXN0IiwgIlZBVmFyaWFudFByb21wdF9kZWZhdWx0IiwgIlZBVmFyaWFudFByb21wdF9kZWZhdWx0MiIsICJpbXBvcnRfdnVlMTciLCAibW9kZWxWYWx1ZSIsICJpbXBvcnRfdnVlMTUiLCAicmVuZGVyNSIsICJ3aXRoRGlyZWN0aXZlcyIsICJ2TW9kZWxTZWxlY3QiLCAiVkFTZWxlY3RfZGVmYXVsdCIsICJWQVNlbGVjdF9kZWZhdWx0MiIsICJzZWxlY3RlZFZhcmlhbnQiLCAiX2luZmVycmVkVmFyaWFudCR2YWx1MiIsICJpbXBvcnRfdnVlMTgiLCAiX2hvaXN0ZWRfMTQiLCAiX2hvaXN0ZWRfMjMiLCAiX2hvaXN0ZWRfMzMiLCAiX2hvaXN0ZWRfNDMiLCAiX2hvaXN0ZWRfNTMiLCAiX2hvaXN0ZWRfNjMiLCAiX2hvaXN0ZWRfNzMiLCAicmVuZGVyNiIsICJWQVZhcmlhbnRQcm9tcHRNb2JpbGVfZGVmYXVsdCIsICJWQVZhcmlhbnRQcm9tcHRNb2JpbGVfZGVmYXVsdDIiLCAiaXNNb2JpbGUiLCAiZGVza3RvcE1vdW50UG9pbnQiLCAic2V0VmFyaWFudCIsICJzZXRMb2NhbFZhcmlhbnQiLCAicmVkaXJlY3QiLCAiZm9yY2VkIiwgIm9uT3B0T3V0IiwgInNldE9wdE91dCIsICJpbXBvcnRfdnVlMjEiLCAicmVuZGVyNyIsICJUZWxlcG9ydCIsICJ0byIsICJvbk9wdG91dCIsICJvblNlbGVjdCIsICJBcHBfZGVmYXVsdCIsICJBcHBfZGVmYXVsdDIiLCAicm9vdCIsICJjcmVhdGVFbGVtZW50IiwgImFwcGVuZCIsICJjcmVhdGVBcHAiLCAibW91bnQiXQp9Cg==
