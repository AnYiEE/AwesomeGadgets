/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/NotifyConversion}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license2=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-preserve-variant.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/NotifyConversion/modules/preserveVariant.ts}
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

// dist/NotifyConversion/NotifyConversion.js
var _ref;
//! src/NotifyConversion/modules/constant.ts
var GADGET_NAME = "ext.gadget.NotifyConversion";
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "有兽档案馆编者", "有兽档案馆社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
var wgUserName = mw.config.get("wgUserName") || "";
var wgUserGroups = mw.config.get("wgUserGroups") || [];
var wgUserVariant = mw.config.get("wgUserVariant");
var GOOD_VARIANTS = ["zh-cn", "zh-my", "zh-sg", "zh-hk", "zh-mo", "zh-tw"];
//! src/NotifyConversion/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    dialogTitle: (0, import_ext_gadget.localize)({
      en: "For your better user experience",
      "zh-hans": "我们希望提供更好的阅读体验",
      "zh-hant": "我們希望提供更好的閱讀體驗"
    }),
    dialogDesc: (0, import_ext_gadget.localize)({
      en: "Which Chinese variants do you prefer?",
      "zh-hans": "为避免内容显示简繁混杂，请选择您偏好的中文变体。",
      "zh-hant": "為避免內容顯示簡繁混雜，請選擇您偏好的中文變體。"
    }),
    dialogDescExtend1: (0, import_ext_gadget.localize)({
      en: "To meet needs of readers, Qiuwen Baike utilizes a conversion mechanism for Chinese language variants.",
      "zh-hans": "为满足各地中文用户需求，有兽档案馆采用自动转换技术，提供不同中文变体。",
      "zh-hant": "為滿足各地中文使用者需求，有獸檔案館採用自動轉換技術，提供不同中文變體。"
    }),
    dialogDescExtend2: (0, import_ext_gadget.localize)({
      en: "For your better experience, we would appreciate it if you select your preferred Chinese language variant. We apologize for any inconvenience.",
      "zh-hans": "出于阅读体验之考量，我们建议您可以选择所偏好的中文语言变体。给您带来不便，敬请谅解！",
      "zh-hant": "出於閱讀體驗之考量，我們建議您可以選擇所偏好的中文語言變體。給您帶來不便，敬請諒解！"
    }),
    "variant-zh-cn": (0, import_ext_gadget.localize)({
      en: "Chinese Mainland (Simplified) (中国大陆简体)",
      zh: "中国大陆简体"
    }),
    "variant-zh-hk": (0, import_ext_gadget.localize)({
      en: "Hong Kong, China (Traditional) (中國香港繁體)",
      zh: "中國香港繁體"
    }),
    "variant-zh-mo": (0, import_ext_gadget.localize)({
      en: "Macau, China (Traditional) (中國澳門繁體)",
      zh: "中國澳門繁體"
    }),
    "variant-zh-my": (0, import_ext_gadget.localize)({
      en: "Malaysia (Simplified) (马来西亚简体)",
      zh: "马来西亚简体"
    }),
    "variant-zh-sg": (0, import_ext_gadget.localize)({
      en: "Singapore (Simplified) (马来西亚简体)",
      zh: "新加坡简体"
    }),
    "variant-zh-tw": (0, import_ext_gadget.localize)({
      en: "Taiwan, Province of China (Traditional) (中國臺灣繁體)",
      zh: "中國臺灣繁體"
    }),
    privacyNotice: (0, import_ext_gadget.localize)({
      en: "Your choices will be only stored in your browser only. We will not track your choices.",
      "zh-hans": "您的选择将仅存储在您的浏览器中，我们不会追踪您的选择。",
      "zh-hant": "您的選擇將僅存儲在您的瀏覽器中，我們不會追蹤您的選擇。"
    }),
    confirm: (0, import_ext_gadget.localize)({
      en: "Confirm",
      "zh-hans": "确认",
      "zh-hant": "確認"
    }),
    cancel: (0, import_ext_gadget.localize)({
      en: "cancel",
      zh: "取消"
    }),
    "Are you sure?": (0, import_ext_gadget.localize)({
      en: 'Are you sure to cancel? If you choose "cancel", you may find mixed traditional and simplified Chinese characters, which will affect your user experience.',
      "zh-hans": "您确定要取消吗？取消后，界面可能出现繁简混杂现象，影响用户体验。",
      "zh-hant": "您確定要取消嗎？取消後，介面可能出現繁簡混雜現象，影響使用者體驗。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/NotifyConversion/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var locationHref = location.href;
var api = (0, import_ext_gadget2.initMwApi)("NotifyConversion/2.0");
var isExperiencedUser = () => {
  if (!wgUserName || !wgUserGroups) {
    return false;
  }
  return ["sysop", "senioreditor", "steward", "qiuwen"].some((element) => {
    return wgUserGroups.includes(element);
  }) || SYSTEM_SCRIPT_LIST.includes(wgUserName) || WEBMASTER_LIST.includes(wgUserName);
};
var isLanguageSet = () => {
  if (mw.util.getParamValue("variant") || mw.util.getParamValue("uselang")) {
    return true;
  }
  return false;
};
var isWrongURL = () => {
  if (locationHref.includes("/zh/") || locationHref.includes("/zh-hans/") || locationHref.includes("/zh-hant/")) {
    return true;
  }
  return false;
};
var showDialog = () => {
  const dialogTitleIcon = new OO.ui.IconWidget({
    icon: "language",
    title: getMessage("dialogTitle")
  });
  const dialogTitle = new OO.ui.LabelWidget({
    label: getMessage("dialogTitle")
  });
  const generateButton = (variant) => {
    return new OO.ui.ButtonOptionWidget({
      data: variant,
      label: getMessage("variant-".concat(variant)),
      title: getMessage("variant-".concat(variant))
    });
  };
  const buttonSelect = new OO.ui.ButtonSelectWidget({
    items: [generateButton("zh-cn"), generateButton("zh-hk"), generateButton("zh-tw"), generateButton("zh-sg"), generateButton("zh-my"), generateButton("zh-mo")]
  });
  if (preferredVariant === null) {
    buttonSelect.selectItemByData("zh-cn");
  } else {
    buttonSelect.selectItemByData(preferredVariant);
  }
  const $dialogTitle = $("<span>").addClass("gadget-notify_conversion__title").append(dialogTitleIcon.$element, dialogTitle.$element);
  const $dialogMessage = $("<div>").addClass("gadget-notify_conversion__message").append($("<p>").text(getMessage("dialogDesc")), $("<p>").addClass("gadget-notify_conversion__message_extend").text(getMessage("dialogDescExtend1")), $("<p>").addClass("gadget-notify_conversion__message_extend").text(getMessage("dialogDescExtend2")), buttonSelect.$element.addClass("gadget-notify_conversion__selection"), $("<p>").addClass("gadget-notify_conversion__message_privacy-notice").text(getMessage("privacyNotice")));
  const windowManager = new OO.ui.WindowManager();
  windowManager.$element.appendTo($("body"));
  const messageDialog = new OO.ui.MessageDialog();
  const messageDialogProperty = {
    title: $dialogTitle,
    message: $dialogMessage,
    actions: [{
      action: "confirm",
      flags: ["primary", "progressive"],
      label: $("<b>").text(getMessage("confirm"))
    }, {
      action: "cancel",
      flags: ["safe", "close"],
      label: $("<b>").text(getMessage("cancel"))
    }],
    size: "medium"
  };
  windowManager.addWindows([messageDialog]);
  void windowManager.openWindow(messageDialog, messageDialogProperty);
  messageDialog.getActionProcess = (action) => {
    const clearWindows = (variant) => {
      mw.storage.set(GADGET_NAME, variant || "hide");
      void windowManager.clearWindows();
    };
    return new OO.ui.Process(() => {
      if (action === "confirm") {
        const URL_REGEX = /(\/\/[^/]+\/)([^/]+)(\/)/;
        const selectedItem = buttonSelect.findSelectedItem();
        const variant = selectedItem.getData();
        clearWindows(variant);
        if (mw.config.get("wgUserName")) {
          void api.saveOption("variant", variant).then(() => {
            location.href = locationHref.replace(URL_REGEX, "$1wiki$3");
          });
        } else {
          location.href = locationHref.replace(URL_REGEX, "$1".concat(variant, "$3"));
        }
      } else {
        void OO.ui.confirm(getMessage("Are you sure?")).then((confirmed) => {
          if (confirmed) {
            clearWindows();
          }
        });
      }
    });
  };
};
var preferredVariant = (_ref = mw.config.get("wgUserName") ? mw.user.options.get("variant") : mw.config.get("wgUserVariant")) !== null && _ref !== void 0 ? _ref : null;
var notifyConversion = () => {
  if (!wgUserVariant) {
    return;
  }
  if (isLanguageSet()) {
    return;
  }
  if (isExperiencedUser()) {
    return;
  }
  if (preferredVariant === null || ["zh", "zh-hans", "zh-hant"].includes(preferredVariant) || isWrongURL()) {
    showDialog();
  }
};
//! src/NotifyConversion/modules/preserveVariant.ts
var preserveVariant = () => {
  if (!wgUserVariant || !wgUserVariant.includes("zh-") || !(window.location.pathname.includes("/".concat(wgUserVariant, "/")) && mw.util.getParamValue("variant") !== wgUserVariant)) {
    return;
  }
  $(document).on("keydown mousedown touchstart", "a", function() {
    const self = this;
    const originalHref = $(self).attr("href");
    if (!originalHref) {
      return;
    }
    let uri;
    try {
      uri = new mw.Uri(originalHref);
    } catch {
      return;
    }
    if (!("variant" in uri.query)) {
      if (originalHref.includes("/wiki/")) {
        self.href = "/".concat(wgUserVariant).concat(originalHref.slice(5));
      } else if (originalHref.includes("/index.php?")) {
        self.href = uri.extend({
          variant: wgUserVariant
        }).getRelativePath();
      }
    }
  });
};
//! src/NotifyConversion/NotifyConversion.ts
(() => {
  if (mw.config.get("wgAction") !== "view") {
    return;
  }
  const preferredVariant2 = (mw.storage.get(GADGET_NAME) || "").toString();
  if (!["hide", ...GOOD_VARIANTS].includes(preferredVariant2)) {
    $(notifyConversion);
  } else if (!wgUserName) {
    $(preserveVariant);
  }
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGlmeUNvbnZlcnNpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvTm90aWZ5Q29udmVyc2lvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL05vdGlmeUNvbnZlcnNpb24vbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9Ob3RpZnlDb252ZXJzaW9uL21vZHVsZXMvcHJlc2VydmVWYXJpYW50LnRzIiwgInNyYy9Ob3RpZnlDb252ZXJzaW9uL05vdGlmeUNvbnZlcnNpb24udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IEdBREdFVF9OQU1FOiBzdHJpbmcgPSAnZXh0LmdhZGdldC5Ob3RpZnlDb252ZXJzaW9uJztcblxuY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmnInlhb3moaPmoYjppobnvJbogIUnLFxuXHQn5pyJ5YW95qGj5qGI6aaG56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5cbmNvbnN0IFdFQk1BU1RFUl9MSVNUOiBzdHJpbmdbXSA9IFsnUWl1V2VuJywgJ1FpdVdlbiBmb3IgQWNjb3VudHMnLCAnUWl1d2VuU29jaWFsTWVkaWEnXTtcblxuY29uc3Qgd2dVc2VyTmFtZTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpIHx8ICcnO1xuY29uc3Qgd2dVc2VyR3JvdXBzOiBzdHJpbmdbXSA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpIHx8IFtdO1xuY29uc3Qgd2dVc2VyVmFyaWFudDogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKTtcblxuY29uc3QgR09PRF9WQVJJQU5UUzogc3RyaW5nW10gPSBbJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J107XG5cbmV4cG9ydCB7R0FER0VUX05BTUUsIFNZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1QsIHdnVXNlck5hbWUsIHdnVXNlckdyb3Vwcywgd2dVc2VyVmFyaWFudCwgR09PRF9WQVJJQU5UU307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGRpYWxvZ1RpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZvciB5b3VyIGJldHRlciB1c2VyIGV4cGVyaWVuY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5oiR5Lus5biM5pyb5o+Q5L6b5pu05aW955qE6ZiF6K+75L2T6aqMJyxcblx0XHRcdCd6aC1oYW50JzogJ+aIkeWAkeW4jOacm+aPkOS+m+abtOWlveeahOmWseiugOmrlOmplycsXG5cdFx0fSksXG5cdFx0ZGlhbG9nRGVzYzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXaGljaCBDaGluZXNlIHZhcmlhbnRzIGRvIHlvdSBwcmVmZXI/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4uumBv+WFjeWGheWuueaYvuekuueugOe5gea3t+adgu+8jOivt+mAieaLqeaCqOWBj+WlveeahOS4reaWh+WPmOS9k+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfngrrpgb/lhY3lhaflrrnpoa/npLrnsKHnuYHmt7fpm5zvvIzoq4vpgbjmk4fmgqjlgY/lpb3nmoTkuK3mlofororpq5TjgIInLFxuXHRcdH0pLFxuXHRcdGRpYWxvZ0Rlc2NFeHRlbmQxOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RvIG1lZXQgbmVlZHMgb2YgcmVhZGVycywgUWl1d2VuIEJhaWtlIHV0aWxpemVzIGEgY29udmVyc2lvbiBtZWNoYW5pc20gZm9yIENoaW5lc2UgbGFuZ3VhZ2UgdmFyaWFudHMuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4uua7oei2s+WQhOWcsOS4reaWh+eUqOaIt+mcgOaxgu+8jOacieWFveaho+ahiOmmhumHh+eUqOiHquWKqOi9rOaNouaKgOacr++8jOaPkOS+m+S4jeWQjOS4reaWh+WPmOS9k+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfngrrmu7/otrPlkITlnLDkuK3mlofkvb/nlKjogIXpnIDmsYLvvIzmnInnjbjmqpTmoYjppKjmjqHnlKjoh6rli5XovYnmj5vmioDooZPvvIzmj5DkvpvkuI3lkIzkuK3mlofororpq5TjgIInLFxuXHRcdH0pLFxuXHRcdGRpYWxvZ0Rlc2NFeHRlbmQyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZvciB5b3VyIGJldHRlciBleHBlcmllbmNlLCB3ZSB3b3VsZCBhcHByZWNpYXRlIGl0IGlmIHlvdSBzZWxlY3QgeW91ciBwcmVmZXJyZWQgQ2hpbmVzZSBsYW5ndWFnZSB2YXJpYW50LiBXZSBhcG9sb2dpemUgZm9yIGFueSBpbmNvbnZlbmllbmNlLicsXG5cdFx0XHQnemgtaGFucyc6ICflh7rkuo7pmIXor7vkvZPpqozkuYvogIPph4/vvIzmiJHku6zlu7rorq7mgqjlj6/ku6XpgInmi6nmiYDlgY/lpb3nmoTkuK3mlofor63oqIDlj5jkvZPjgILnu5nmgqjluKbmnaXkuI3kvr/vvIzmlazor7fosIXop6PvvIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Ye65pa86Zax6K6A6auU6amX5LmL6ICD6YeP77yM5oiR5YCR5bu66K2w5oKo5Y+v5Lul6YG45pOH5omA5YGP5aW955qE5Lit5paH6Kqe6KiA6K6K6auU44CC57Wm5oKo5bi25L6G5LiN5L6/77yM5pWs6KuL6KuS6Kej77yBJyxcblx0XHR9KSxcblx0XHQndmFyaWFudC16aC1jbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2hpbmVzZSBNYWlubGFuZCAoU2ltcGxpZmllZCkgKOS4reWbveWkp+mZhueugOS9kyknLFxuXHRcdFx0emg6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHRcdH0pLFxuXHRcdCd2YXJpYW50LXpoLWhrJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdIb25nIEtvbmcsIENoaW5hIChUcmFkaXRpb25hbCkgKOS4reWci+mmmea4r+e5gemrlCknLFxuXHRcdFx0emg6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHRcdH0pLFxuXHRcdCd2YXJpYW50LXpoLW1vJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYWNhdSwgQ2hpbmEgKFRyYWRpdGlvbmFsKSAo5Lit5ZyL5r6z6ZaA57mB6auUKScsXG5cdFx0XHR6aDogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdFx0fSksXG5cdFx0J3ZhcmlhbnQtemgtbXknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ01hbGF5c2lhIChTaW1wbGlmaWVkKSAo6ams5p2l6KW/5Lqa566A5L2TKScsXG5cdFx0XHR6aDogJ+mprOadpeilv+S6mueugOS9kycsXG5cdFx0fSksXG5cdFx0J3ZhcmlhbnQtemgtc2cnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NpbmdhcG9yZSAoU2ltcGxpZmllZCkgKOmprOadpeilv+S6mueugOS9kyknLFxuXHRcdFx0emg6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdH0pLFxuXHRcdCd2YXJpYW50LXpoLXR3JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUYWl3YW4sIFByb3ZpbmNlIG9mIENoaW5hIChUcmFkaXRpb25hbCkgKOS4reWci+iHuueBo+e5gemrlCknLFxuXHRcdFx0emg6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHRcdH0pLFxuXHRcdHByaXZhY3lOb3RpY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91ciBjaG9pY2VzIHdpbGwgYmUgb25seSBzdG9yZWQgaW4geW91ciBicm93c2VyIG9ubHkuIFdlIHdpbGwgbm90IHRyYWNrIHlvdXIgY2hvaWNlcy4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oKo55qE6YCJ5oup5bCG5LuF5a2Y5YKo5Zyo5oKo55qE5rWP6KeI5Zmo5Lit77yM5oiR5Lus5LiN5Lya6L+96Liq5oKo55qE6YCJ5oup44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+aCqOeahOmBuOaTh+Wwh+WDheWtmOWEsuWcqOaCqOeahOeAj+imveWZqOS4re+8jOaIkeWAkeS4jeacg+i/vei5pOaCqOeahOmBuOaTh+OAgicsXG5cdFx0fSksXG5cdFx0Y29uZmlybTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb25maXJtJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruiupCcsXG5cdFx0XHQnemgtaGFudCc6ICfnorroqo0nLFxuXHRcdH0pLFxuXHRcdGNhbmNlbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdjYW5jZWwnLFxuXHRcdFx0emg6ICflj5bmtognLFxuXHRcdH0pLFxuXHRcdCdBcmUgeW91IHN1cmU/JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmUgeW91IHN1cmUgdG8gY2FuY2VsPyBJZiB5b3UgY2hvb3NlIFwiY2FuY2VsXCIsIHlvdSBtYXkgZmluZCBtaXhlZCB0cmFkaXRpb25hbCBhbmQgc2ltcGxpZmllZCBDaGluZXNlIGNoYXJhY3RlcnMsIHdoaWNoIHdpbGwgYWZmZWN0IHlvdXIgdXNlciBleHBlcmllbmNlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjnoa7lrpropoHlj5bmtojlkJfvvJ/lj5bmtojlkI7vvIznlYzpnaLlj6/og73lh7rnjrDnuYHnroDmt7fmnYLnjrDosaHvvIzlvbHlk43nlKjmiLfkvZPpqozjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo56K65a6a6KaB5Y+W5raI5ZeO77yf5Y+W5raI5b6M77yM5LuL6Z2i5Y+v6IO95Ye654++57mB57Ch5re36Zuc54++6LGh77yM5b2x6Z+/5L2/55So6ICF6auU6amX44CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtHQURHRVRfTkFNRSwgU1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVCwgd2dVc2VyR3JvdXBzLCB3Z1VzZXJOYW1lLCB3Z1VzZXJWYXJpYW50fSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBsb2NhdGlvbkhyZWY6IHN0cmluZyA9IGxvY2F0aW9uLmhyZWY7XG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnTm90aWZ5Q29udmVyc2lvbi8yLjAnKTtcblxuY29uc3QgaXNFeHBlcmllbmNlZFVzZXIgPSAoKTogYm9vbGVhbiA9PiB7XG5cdGlmICghd2dVc2VyTmFtZSB8fCAhd2dVc2VyR3JvdXBzKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0WydzeXNvcCcsICdzZW5pb3JlZGl0b3InLCAnc3Rld2FyZCcsICdxaXV3ZW4nXS5zb21lKChlbGVtZW50OiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRcdHJldHVybiB3Z1VzZXJHcm91cHMuaW5jbHVkZXMoZWxlbWVudCk7XG5cdFx0fSkgfHxcblx0XHRTWVNURU1fU0NSSVBUX0xJU1QuaW5jbHVkZXMod2dVc2VyTmFtZSkgfHxcblx0XHRXRUJNQVNURVJfTElTVC5pbmNsdWRlcyh3Z1VzZXJOYW1lKVxuXHQpO1xufTtcblxuY29uc3QgaXNMYW5ndWFnZVNldCA9ICgpOiBib29sZWFuID0+IHtcblx0aWYgKG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndmFyaWFudCcpIHx8IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlbGFuZycpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNXcm9uZ1VSTCA9ICgpOiBib29sZWFuID0+IHtcblx0aWYgKGxvY2F0aW9uSHJlZi5pbmNsdWRlcygnL3poLycpIHx8IGxvY2F0aW9uSHJlZi5pbmNsdWRlcygnL3poLWhhbnMvJykgfHwgbG9jYXRpb25IcmVmLmluY2x1ZGVzKCcvemgtaGFudC8nKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHNob3dEaWFsb2cgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IGRpYWxvZ1RpdGxlSWNvbjogT08udWkuSWNvbldpZGdldCA9IG5ldyBPTy51aS5JY29uV2lkZ2V0KHtcblx0XHRpY29uOiAnbGFuZ3VhZ2UnLFxuXHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdkaWFsb2dUaXRsZScpLFxuXHR9KTtcblx0Y29uc3QgZGlhbG9nVGl0bGU6IE9PLnVpLkxhYmVsV2lkZ2V0ID0gbmV3IE9PLnVpLkxhYmVsV2lkZ2V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnZGlhbG9nVGl0bGUnKSxcblx0fSk7XG5cblx0Y29uc3QgZ2VuZXJhdGVCdXR0b24gPSAoXG5cdFx0dmFyaWFudDogJ3poLWNuJyB8ICd6aC1oaycgfCAnemgtdHcnIHwgJ3poLXNnJyB8ICd6aC1teScgfCAnemgtbW8nXG5cdCk6IE9PLnVpLkJ1dHRvbk9wdGlvbldpZGdldCA9PiB7XG5cdFx0cmV0dXJuIG5ldyBPTy51aS5CdXR0b25PcHRpb25XaWRnZXQoe1xuXHRcdFx0ZGF0YTogdmFyaWFudCxcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKGB2YXJpYW50LSR7dmFyaWFudH1gKSxcblx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKGB2YXJpYW50LSR7dmFyaWFudH1gKSxcblx0XHR9KTtcblx0fTtcblx0Ly8gQ3JlYXRlIGEgbmV3IEJ1dHRvblNlbGVjdFdpZGdldCBhbmQgYWRkIHRoZSBidXR0b24gb3B0aW9ucyB0byBpdFxuXHQvLyB2aWEgdGhlIEJ1dHRvblNlbGVjdFdpZGdldCdzICdpdGVtcycgY29uZmlnIG9wdGlvbi5cblx0Y29uc3QgYnV0dG9uU2VsZWN0OiBPTy51aS5CdXR0b25TZWxlY3RXaWRnZXQgPSBuZXcgT08udWkuQnV0dG9uU2VsZWN0V2lkZ2V0KHtcblx0XHRpdGVtczogW1xuXHRcdFx0Z2VuZXJhdGVCdXR0b24oJ3poLWNuJyksXG5cdFx0XHRnZW5lcmF0ZUJ1dHRvbignemgtaGsnKSxcblx0XHRcdGdlbmVyYXRlQnV0dG9uKCd6aC10dycpLFxuXHRcdFx0Z2VuZXJhdGVCdXR0b24oJ3poLXNnJyksXG5cdFx0XHRnZW5lcmF0ZUJ1dHRvbignemgtbXknKSxcblx0XHRcdGdlbmVyYXRlQnV0dG9uKCd6aC1tbycpLFxuXHRcdF0sXG5cdH0pO1xuXG5cdGlmIChwcmVmZXJyZWRWYXJpYW50ID09PSBudWxsKSB7XG5cdFx0YnV0dG9uU2VsZWN0LnNlbGVjdEl0ZW1CeURhdGEoJ3poLWNuJyk7XG5cdH0gZWxzZSB7XG5cdFx0YnV0dG9uU2VsZWN0LnNlbGVjdEl0ZW1CeURhdGEocHJlZmVycmVkVmFyaWFudCk7XG5cdH1cblxuXHRjb25zdCAkZGlhbG9nVGl0bGU6IEpRdWVyeSA9ICQoJzxzcGFuPicpXG5cdFx0LmFkZENsYXNzKCdnYWRnZXQtbm90aWZ5X2NvbnZlcnNpb25fX3RpdGxlJylcblx0XHQuYXBwZW5kKGRpYWxvZ1RpdGxlSWNvbi4kZWxlbWVudCwgZGlhbG9nVGl0bGUuJGVsZW1lbnQpO1xuXHRjb25zdCAkZGlhbG9nTWVzc2FnZTogSlF1ZXJ5ID0gJCgnPGRpdj4nKVxuXHRcdC5hZGRDbGFzcygnZ2FkZ2V0LW5vdGlmeV9jb252ZXJzaW9uX19tZXNzYWdlJylcblx0XHQuYXBwZW5kKFxuXHRcdFx0JCgnPHA+JykudGV4dChnZXRNZXNzYWdlKCdkaWFsb2dEZXNjJykpLFxuXHRcdFx0JCgnPHA+JykuYWRkQ2xhc3MoJ2dhZGdldC1ub3RpZnlfY29udmVyc2lvbl9fbWVzc2FnZV9leHRlbmQnKS50ZXh0KGdldE1lc3NhZ2UoJ2RpYWxvZ0Rlc2NFeHRlbmQxJykpLFxuXHRcdFx0JCgnPHA+JykuYWRkQ2xhc3MoJ2dhZGdldC1ub3RpZnlfY29udmVyc2lvbl9fbWVzc2FnZV9leHRlbmQnKS50ZXh0KGdldE1lc3NhZ2UoJ2RpYWxvZ0Rlc2NFeHRlbmQyJykpLFxuXHRcdFx0YnV0dG9uU2VsZWN0LiRlbGVtZW50LmFkZENsYXNzKCdnYWRnZXQtbm90aWZ5X2NvbnZlcnNpb25fX3NlbGVjdGlvbicpLFxuXHRcdFx0JCgnPHA+JykuYWRkQ2xhc3MoJ2dhZGdldC1ub3RpZnlfY29udmVyc2lvbl9fbWVzc2FnZV9wcml2YWN5LW5vdGljZScpLnRleHQoZ2V0TWVzc2FnZSgncHJpdmFjeU5vdGljZScpKVxuXHRcdCk7XG5cblx0Y29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG5cdHdpbmRvd01hbmFnZXIuJGVsZW1lbnQuYXBwZW5kVG8oJCgnYm9keScpKTtcblxuXHRjb25zdCBtZXNzYWdlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0Y29uc3QgbWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0ge1xuXHRcdHRpdGxlOiAkZGlhbG9nVGl0bGUsXG5cdFx0bWVzc2FnZTogJGRpYWxvZ01lc3NhZ2UsXG5cdFx0YWN0aW9uczogW1xuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdjb25maXJtJyxcblx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHRsYWJlbDogJCgnPGI+JykudGV4dChnZXRNZXNzYWdlKCdjb25maXJtJykpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnY2FuY2VsJyxcblx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHRsYWJlbDogJCgnPGI+JykudGV4dChnZXRNZXNzYWdlKCdjYW5jZWwnKSksXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0c2l6ZTogJ21lZGl1bScsXG5cdH07XG5cblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFttZXNzYWdlRGlhbG9nXSk7XG5cdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSk7XG5cblx0bWVzc2FnZURpYWxvZy5nZXRBY3Rpb25Qcm9jZXNzID0gKGFjdGlvbik6IE9PLnVpLlByb2Nlc3MgPT4ge1xuXHRcdGNvbnN0IGNsZWFyV2luZG93cyA9ICh2YXJpYW50Pzogc3RyaW5nKSA9PiB7XG5cdFx0XHRtdy5zdG9yYWdlLnNldChHQURHRVRfTkFNRSwgdmFyaWFudCB8fCAnaGlkZScpO1xuXHRcdFx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gbmV3IE9PLnVpLlByb2Nlc3MoKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ2NvbmZpcm0nKSB7XG5cdFx0XHRcdGNvbnN0IFVSTF9SRUdFWDogUmVnRXhwID0gLyhcXC9cXC9bXi9dK1xcLykoW14vXSspKFxcLykvO1xuXHRcdFx0XHRjb25zdCBzZWxlY3RlZEl0ZW06IE9PLnVpLk9wdGlvbldpZGdldCA9IGJ1dHRvblNlbGVjdC5maW5kU2VsZWN0ZWRJdGVtKCkgYXMgT08udWkuT3B0aW9uV2lkZ2V0O1xuXHRcdFx0XHRjb25zdCB2YXJpYW50OiBzdHJpbmcgPSBzZWxlY3RlZEl0ZW0uZ2V0RGF0YSgpIGFzIHN0cmluZztcblx0XHRcdFx0Y2xlYXJXaW5kb3dzKHZhcmlhbnQpO1xuXHRcdFx0XHRpZiAobXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpKSB7XG5cdFx0XHRcdFx0dm9pZCBhcGkuc2F2ZU9wdGlvbigndmFyaWFudCcsIHZhcmlhbnQpLnRoZW4oKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uSHJlZi5yZXBsYWNlKFVSTF9SRUdFWCwgJyQxd2lraSQzJyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uSHJlZi5yZXBsYWNlKFVSTF9SRUdFWCwgYCQxJHt2YXJpYW50fSQzYCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZvaWQgT08udWkuY29uZmlybShnZXRNZXNzYWdlKCdBcmUgeW91IHN1cmU/JykpLnRoZW4oKGNvbmZpcm1lZDogYm9vbGVhbik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmIChjb25maXJtZWQpIHtcblx0XHRcdFx0XHRcdGNsZWFyV2luZG93cygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG59O1xuXG5jb25zdCBwcmVmZXJyZWRWYXJpYW50OiBzdHJpbmcgfCBudWxsID1cblx0KChtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykgPyBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykgOiBtdy5jb25maWcuZ2V0KCd3Z1VzZXJWYXJpYW50JykpIGFzIHN0cmluZykgPz8gbnVsbDtcblxuZXhwb3J0IGNvbnN0IG5vdGlmeUNvbnZlcnNpb24gPSAoKTogdm9pZCA9PiB7XG5cdGlmICghd2dVc2VyVmFyaWFudCkge1xuXHRcdHJldHVybjsgLy8gb24gU3BlY2lhbCBwYWdlc1xuXHR9XG5cdGlmIChpc0xhbmd1YWdlU2V0KCkpIHtcblx0XHRyZXR1cm47IC8vIHNldCBgdXNlbGFuZ2Agb3IgYHZhcmlhbnRgIGdldCBwYXJhbWV0ZXJzXG5cdH1cblx0aWYgKGlzRXhwZXJpZW5jZWRVc2VyKCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKHByZWZlcnJlZFZhcmlhbnQgPT09IG51bGwgfHwgWyd6aCcsICd6aC1oYW5zJywgJ3poLWhhbnQnXS5pbmNsdWRlcyhwcmVmZXJyZWRWYXJpYW50KSB8fCBpc1dyb25nVVJMKCkpIHtcblx0XHRzaG93RGlhbG9nKCk7XG5cdH1cbn07XG4iLCAiaW1wb3J0IHt3Z1VzZXJWYXJpYW50fSBmcm9tICcuL2NvbnN0YW50JztcblxuZXhwb3J0IGNvbnN0IHByZXNlcnZlVmFyaWFudCA9ICgpOiB2b2lkID0+IHtcblx0aWYgKFxuXHRcdCF3Z1VzZXJWYXJpYW50IHx8XG5cdFx0IXdnVXNlclZhcmlhbnQuaW5jbHVkZXMoJ3poLScpIHx8XG5cdFx0ISh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoYC8ke3dnVXNlclZhcmlhbnR9L2ApICYmIG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndmFyaWFudCcpICE9PSB3Z1VzZXJWYXJpYW50KVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0JChkb2N1bWVudCkub24oJ2tleWRvd24gbW91c2Vkb3duIHRvdWNoc3RhcnQnLCAnYScsIGZ1bmN0aW9uICgpOiB2b2lkIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcyBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblx0XHRjb25zdCBvcmlnaW5hbEhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICQoc2VsZikuYXR0cignaHJlZicpO1xuXHRcdGlmICghb3JpZ2luYWxIcmVmKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCB1cmk7XG5cdFx0dHJ5IHtcblx0XHRcdHVyaSA9IG5ldyBtdy5Vcmkob3JpZ2luYWxIcmVmKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCEoJ3ZhcmlhbnQnIGluIHVyaS5xdWVyeSkpIHtcblx0XHRcdGlmIChvcmlnaW5hbEhyZWYuaW5jbHVkZXMoJy93aWtpLycpKSB7XG5cdFx0XHRcdHNlbGYuaHJlZiA9IGAvJHt3Z1VzZXJWYXJpYW50fSR7b3JpZ2luYWxIcmVmLnNsaWNlKDUpfWA7XG5cdFx0XHR9IGVsc2UgaWYgKG9yaWdpbmFsSHJlZi5pbmNsdWRlcygnL2luZGV4LnBocD8nKSkge1xuXHRcdFx0XHRzZWxmLmhyZWYgPSB1cmlcblx0XHRcdFx0XHQuZXh0ZW5kKHtcblx0XHRcdFx0XHRcdHZhcmlhbnQ6IHdnVXNlclZhcmlhbnQsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZ2V0UmVsYXRpdmVQYXRoKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHtHQURHRVRfTkFNRSwgR09PRF9WQVJJQU5UUywgd2dVc2VyTmFtZX0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7bm90aWZ5Q29udmVyc2lvbn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtwcmVzZXJ2ZVZhcmlhbnR9IGZyb20gJy4vbW9kdWxlcy9wcmVzZXJ2ZVZhcmlhbnQnO1xuXG4oKCk6IHZvaWQgPT4ge1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSAhPT0gJ3ZpZXcnKSB7XG5cdFx0cmV0dXJuOyAvLyDlj6rlnKjmtY/op4jpobXpnaLml7bmmL7npLpcblx0fVxuXHRjb25zdCBwcmVmZXJyZWRWYXJpYW50ID0gKG13LnN0b3JhZ2UuZ2V0KEdBREdFVF9OQU1FKSB8fCAnJykudG9TdHJpbmcoKTtcblx0aWYgKCFbJ2hpZGUnLCAuLi5HT09EX1ZBUklBTlRTXS5pbmNsdWRlcyhwcmVmZXJyZWRWYXJpYW50KSkge1xuXHRcdC8vIOaYr+WQpueCuei/h+KAnOS4jeWGjeaPkOekuuKAneaIluWujOaIkOi/h+iuvue9rlxuXHRcdCQobm90aWZ5Q29udmVyc2lvbik7XG5cdH0gZWxzZSBpZiAoIXdnVXNlck5hbWUpIHtcblx0XHQkKHByZXNlcnZlVmFyaWFudCk7XG5cdH1cbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGNBQXNCO0FBRTVCLElBQU1DLHFCQUErQixDQUNwQyxTQUNBLFdBQ0EsV0FDQSxXQUNBLHlC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QWdCLEdBQUc7QUFFM0RsRCxNQUFFbUMsZ0JBQWdCO0VBQ25CLFdBQVcsQ0FBQzVGLFlBQVk7QUFDdkJ5RCxNQUFFb0MsZUFBZTtFQUNsQjtBQUNELEdBQUc7IiwKICAibmFtZXMiOiBbIkdBREdFVF9OQU1FIiwgIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJXRUJNQVNURVJfTElTVCIsICJ3Z1VzZXJOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAid2dVc2VyR3JvdXBzIiwgIndnVXNlclZhcmlhbnQiLCAiR09PRF9WQVJJQU5UUyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJkaWFsb2dUaXRsZSIsICJsb2NhbGl6ZSIsICJlbiIsICJkaWFsb2dEZXNjIiwgImRpYWxvZ0Rlc2NFeHRlbmQxIiwgImRpYWxvZ0Rlc2NFeHRlbmQyIiwgInpoIiwgInByaXZhY3lOb3RpY2UiLCAiY29uZmlybSIsICJjYW5jZWwiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJsb2NhdGlvbkhyZWYiLCAibG9jYXRpb24iLCAiaHJlZiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImlzRXhwZXJpZW5jZWRVc2VyIiwgInNvbWUiLCAiZWxlbWVudCIsICJpbmNsdWRlcyIsICJpc0xhbmd1YWdlU2V0IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJpc1dyb25nVVJMIiwgInNob3dEaWFsb2ciLCAiZGlhbG9nVGl0bGVJY29uIiwgIk9PIiwgInVpIiwgIkljb25XaWRnZXQiLCAiaWNvbiIsICJ0aXRsZSIsICJMYWJlbFdpZGdldCIsICJsYWJlbCIsICJnZW5lcmF0ZUJ1dHRvbiIsICJ2YXJpYW50IiwgIkJ1dHRvbk9wdGlvbldpZGdldCIsICJkYXRhIiwgImNvbmNhdCIsICJidXR0b25TZWxlY3QiLCAiQnV0dG9uU2VsZWN0V2lkZ2V0IiwgIml0ZW1zIiwgInByZWZlcnJlZFZhcmlhbnQiLCAic2VsZWN0SXRlbUJ5RGF0YSIsICIkZGlhbG9nVGl0bGUiLCAiJCIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiJGVsZW1lbnQiLCAiJGRpYWxvZ01lc3NhZ2UiLCAidGV4dCIsICJ3aW5kb3dNYW5hZ2VyIiwgIldpbmRvd01hbmFnZXIiLCAiYXBwZW5kVG8iLCAibWVzc2FnZURpYWxvZyIsICJNZXNzYWdlRGlhbG9nIiwgIm1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSIsICJtZXNzYWdlIiwgImFjdGlvbnMiLCAiYWN0aW9uIiwgImZsYWdzIiwgInNpemUiLCAiYWRkV2luZG93cyIsICJvcGVuV2luZG93IiwgImdldEFjdGlvblByb2Nlc3MiLCAiY2xlYXJXaW5kb3dzIiwgInN0b3JhZ2UiLCAic2V0IiwgIlByb2Nlc3MiLCAiVVJMX1JFR0VYIiwgInNlbGVjdGVkSXRlbSIsICJmaW5kU2VsZWN0ZWRJdGVtIiwgImdldERhdGEiLCAic2F2ZU9wdGlvbiIsICJ0aGVuIiwgInJlcGxhY2UiLCAiY29uZmlybWVkIiwgIl9yZWYiLCAidXNlciIsICJvcHRpb25zIiwgIm5vdGlmeUNvbnZlcnNpb24iLCAicHJlc2VydmVWYXJpYW50IiwgIndpbmRvdyIsICJwYXRobmFtZSIsICJkb2N1bWVudCIsICJvbiIsICJzZWxmIiwgIm9yaWdpbmFsSHJlZiIsICJhdHRyIiwgInVyaSIsICJVcmkiLCAicXVlcnkiLCAic2xpY2UiLCAiZXh0ZW5kIiwgImdldFJlbGF0aXZlUGF0aCIsICJwcmVmZXJyZWRWYXJpYW50MiIsICJ0b1N0cmluZyJdCn0K
