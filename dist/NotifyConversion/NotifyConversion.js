/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/NotifyConversion}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license2=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-preserve-variant.js}
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/NotifyConversion/modules/preserveVariant.ts}
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
  return ["sysop", "senioreditor", "bureaucrat"].some((element) => {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGlmeUNvbnZlcnNpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvTm90aWZ5Q29udmVyc2lvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL05vdGlmeUNvbnZlcnNpb24vbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9Ob3RpZnlDb252ZXJzaW9uL21vZHVsZXMvcHJlc2VydmVWYXJpYW50LnRzIiwgInNyYy9Ob3RpZnlDb252ZXJzaW9uL05vdGlmeUNvbnZlcnNpb24udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IEdBREdFVF9OQU1FOiBzdHJpbmcgPSAnZXh0LmdhZGdldC5Ob3RpZnlDb252ZXJzaW9uJztcblxuY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmnInlhb3moaPmoYjppobnvJbogIUnLFxuXHQn5pyJ5YW95qGj5qGI6aaG56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5cbmNvbnN0IFdFQk1BU1RFUl9MSVNUOiBzdHJpbmdbXSA9IFsnUWl1V2VuJywgJ1FpdVdlbiBmb3IgQWNjb3VudHMnLCAnUWl1d2VuU29jaWFsTWVkaWEnXTtcblxuY29uc3Qgd2dVc2VyTmFtZTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpIHx8ICcnO1xuY29uc3Qgd2dVc2VyR3JvdXBzOiBzdHJpbmdbXSA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpIHx8IFtdO1xuY29uc3Qgd2dVc2VyVmFyaWFudDogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKTtcblxuY29uc3QgR09PRF9WQVJJQU5UUzogc3RyaW5nW10gPSBbJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J107XG5cbmV4cG9ydCB7R0FER0VUX05BTUUsIFNZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1QsIHdnVXNlck5hbWUsIHdnVXNlckdyb3Vwcywgd2dVc2VyVmFyaWFudCwgR09PRF9WQVJJQU5UU307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGRpYWxvZ1RpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZvciB5b3VyIGJldHRlciB1c2VyIGV4cGVyaWVuY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5oiR5Lus5biM5pyb5o+Q5L6b5pu05aW955qE6ZiF6K+75L2T6aqMJyxcblx0XHRcdCd6aC1oYW50JzogJ+aIkeWAkeW4jOacm+aPkOS+m+abtOWlveeahOmWseiugOmrlOmplycsXG5cdFx0fSksXG5cdFx0ZGlhbG9nRGVzYzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXaGljaCBDaGluZXNlIHZhcmlhbnRzIGRvIHlvdSBwcmVmZXI/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4uumBv+WFjeWGheWuueaYvuekuueugOe5gea3t+adgu+8jOivt+mAieaLqeaCqOWBj+WlveeahOS4reaWh+WPmOS9k+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfngrrpgb/lhY3lhaflrrnpoa/npLrnsKHnuYHmt7fpm5zvvIzoq4vpgbjmk4fmgqjlgY/lpb3nmoTkuK3mlofororpq5TjgIInLFxuXHRcdH0pLFxuXHRcdGRpYWxvZ0Rlc2NFeHRlbmQxOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RvIG1lZXQgbmVlZHMgb2YgcmVhZGVycywgUWl1d2VuIEJhaWtlIHV0aWxpemVzIGEgY29udmVyc2lvbiBtZWNoYW5pc20gZm9yIENoaW5lc2UgbGFuZ3VhZ2UgdmFyaWFudHMuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4uua7oei2s+WQhOWcsOS4reaWh+eUqOaIt+mcgOaxgu+8jOacieWFveaho+ahiOmmhumHh+eUqOiHquWKqOi9rOaNouaKgOacr++8jOaPkOS+m+S4jeWQjOS4reaWh+WPmOS9k+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfngrrmu7/otrPlkITlnLDkuK3mlofkvb/nlKjogIXpnIDmsYLvvIzmnInnjbjmqpTmoYjppKjmjqHnlKjoh6rli5XovYnmj5vmioDooZPvvIzmj5DkvpvkuI3lkIzkuK3mlofororpq5TjgIInLFxuXHRcdH0pLFxuXHRcdGRpYWxvZ0Rlc2NFeHRlbmQyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZvciB5b3VyIGJldHRlciBleHBlcmllbmNlLCB3ZSB3b3VsZCBhcHByZWNpYXRlIGl0IGlmIHlvdSBzZWxlY3QgeW91ciBwcmVmZXJyZWQgQ2hpbmVzZSBsYW5ndWFnZSB2YXJpYW50LiBXZSBhcG9sb2dpemUgZm9yIGFueSBpbmNvbnZlbmllbmNlLicsXG5cdFx0XHQnemgtaGFucyc6ICflh7rkuo7pmIXor7vkvZPpqozkuYvogIPph4/vvIzmiJHku6zlu7rorq7mgqjlj6/ku6XpgInmi6nmiYDlgY/lpb3nmoTkuK3mlofor63oqIDlj5jkvZPjgILnu5nmgqjluKbmnaXkuI3kvr/vvIzmlazor7fosIXop6PvvIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Ye65pa86Zax6K6A6auU6amX5LmL6ICD6YeP77yM5oiR5YCR5bu66K2w5oKo5Y+v5Lul6YG45pOH5omA5YGP5aW955qE5Lit5paH6Kqe6KiA6K6K6auU44CC57Wm5oKo5bi25L6G5LiN5L6/77yM5pWs6KuL6KuS6Kej77yBJyxcblx0XHR9KSxcblx0XHQndmFyaWFudC16aC1jbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2hpbmVzZSBNYWlubGFuZCAoU2ltcGxpZmllZCkgKOS4reWbveWkp+mZhueugOS9kyknLFxuXHRcdFx0emg6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHRcdH0pLFxuXHRcdCd2YXJpYW50LXpoLWhrJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdIb25nIEtvbmcsIENoaW5hIChUcmFkaXRpb25hbCkgKOS4reWci+mmmea4r+e5gemrlCknLFxuXHRcdFx0emg6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHRcdH0pLFxuXHRcdCd2YXJpYW50LXpoLW1vJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYWNhdSwgQ2hpbmEgKFRyYWRpdGlvbmFsKSAo5Lit5ZyL5r6z6ZaA57mB6auUKScsXG5cdFx0XHR6aDogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdFx0fSksXG5cdFx0J3ZhcmlhbnQtemgtbXknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ01hbGF5c2lhIChTaW1wbGlmaWVkKSAo6ams5p2l6KW/5Lqa566A5L2TKScsXG5cdFx0XHR6aDogJ+mprOadpeilv+S6mueugOS9kycsXG5cdFx0fSksXG5cdFx0J3ZhcmlhbnQtemgtc2cnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NpbmdhcG9yZSAoU2ltcGxpZmllZCkgKOmprOadpeilv+S6mueugOS9kyknLFxuXHRcdFx0emg6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdH0pLFxuXHRcdCd2YXJpYW50LXpoLXR3JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUYWl3YW4sIFByb3ZpbmNlIG9mIENoaW5hIChUcmFkaXRpb25hbCkgKOS4reWci+iHuueBo+e5gemrlCknLFxuXHRcdFx0emg6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHRcdH0pLFxuXHRcdHByaXZhY3lOb3RpY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91ciBjaG9pY2VzIHdpbGwgYmUgb25seSBzdG9yZWQgaW4geW91ciBicm93c2VyIG9ubHkuIFdlIHdpbGwgbm90IHRyYWNrIHlvdXIgY2hvaWNlcy4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oKo55qE6YCJ5oup5bCG5LuF5a2Y5YKo5Zyo5oKo55qE5rWP6KeI5Zmo5Lit77yM5oiR5Lus5LiN5Lya6L+96Liq5oKo55qE6YCJ5oup44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+aCqOeahOmBuOaTh+Wwh+WDheWtmOWEsuWcqOaCqOeahOeAj+imveWZqOS4re+8jOaIkeWAkeS4jeacg+i/vei5pOaCqOeahOmBuOaTh+OAgicsXG5cdFx0fSksXG5cdFx0Y29uZmlybTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb25maXJtJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruiupCcsXG5cdFx0XHQnemgtaGFudCc6ICfnorroqo0nLFxuXHRcdH0pLFxuXHRcdGNhbmNlbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdjYW5jZWwnLFxuXHRcdFx0emg6ICflj5bmtognLFxuXHRcdH0pLFxuXHRcdCdBcmUgeW91IHN1cmU/JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmUgeW91IHN1cmUgdG8gY2FuY2VsPyBJZiB5b3UgY2hvb3NlIFwiY2FuY2VsXCIsIHlvdSBtYXkgZmluZCBtaXhlZCB0cmFkaXRpb25hbCBhbmQgc2ltcGxpZmllZCBDaGluZXNlIGNoYXJhY3RlcnMsIHdoaWNoIHdpbGwgYWZmZWN0IHlvdXIgdXNlciBleHBlcmllbmNlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjnoa7lrpropoHlj5bmtojlkJfvvJ/lj5bmtojlkI7vvIznlYzpnaLlj6/og73lh7rnjrDnuYHnroDmt7fmnYLnjrDosaHvvIzlvbHlk43nlKjmiLfkvZPpqozjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo56K65a6a6KaB5Y+W5raI5ZeO77yf5Y+W5raI5b6M77yM5LuL6Z2i5Y+v6IO95Ye654++57mB57Ch5re36Zuc54++6LGh77yM5b2x6Z+/5L2/55So6ICF6auU6amX44CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtHQURHRVRfTkFNRSwgU1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVCwgd2dVc2VyR3JvdXBzLCB3Z1VzZXJOYW1lLCB3Z1VzZXJWYXJpYW50fSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBsb2NhdGlvbkhyZWY6IHN0cmluZyA9IGxvY2F0aW9uLmhyZWY7XG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnTm90aWZ5Q29udmVyc2lvbi8yLjAnKTtcblxuY29uc3QgaXNFeHBlcmllbmNlZFVzZXIgPSAoKTogYm9vbGVhbiA9PiB7XG5cdGlmICghd2dVc2VyTmFtZSB8fCAhd2dVc2VyR3JvdXBzKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0WydzeXNvcCcsICdzZW5pb3JlZGl0b3InLCAnYnVyZWF1Y3JhdCddLnNvbWUoKGVsZW1lbnQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0cmV0dXJuIHdnVXNlckdyb3Vwcy5pbmNsdWRlcyhlbGVtZW50KTtcblx0XHR9KSB8fFxuXHRcdFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh3Z1VzZXJOYW1lKSB8fFxuXHRcdFdFQk1BU1RFUl9MSVNULmluY2x1ZGVzKHdnVXNlck5hbWUpXG5cdCk7XG59O1xuXG5jb25zdCBpc0xhbmd1YWdlU2V0ID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRpZiAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCd2YXJpYW50JykgfHwgbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd1c2VsYW5nJykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBpc1dyb25nVVJMID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRpZiAobG9jYXRpb25IcmVmLmluY2x1ZGVzKCcvemgvJykgfHwgbG9jYXRpb25IcmVmLmluY2x1ZGVzKCcvemgtaGFucy8nKSB8fCBsb2NhdGlvbkhyZWYuaW5jbHVkZXMoJy96aC1oYW50LycpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3Qgc2hvd0RpYWxvZyA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3QgZGlhbG9nVGl0bGVJY29uOiBPTy51aS5JY29uV2lkZ2V0ID0gbmV3IE9PLnVpLkljb25XaWRnZXQoe1xuXHRcdGljb246ICdsYW5ndWFnZScsXG5cdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ2RpYWxvZ1RpdGxlJyksXG5cdH0pO1xuXHRjb25zdCBkaWFsb2dUaXRsZTogT08udWkuTGFiZWxXaWRnZXQgPSBuZXcgT08udWkuTGFiZWxXaWRnZXQoe1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdkaWFsb2dUaXRsZScpLFxuXHR9KTtcblxuXHRjb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IChcblx0XHR2YXJpYW50OiAnemgtY24nIHwgJ3poLWhrJyB8ICd6aC10dycgfCAnemgtc2cnIHwgJ3poLW15JyB8ICd6aC1tbydcblx0KTogT08udWkuQnV0dG9uT3B0aW9uV2lkZ2V0ID0+IHtcblx0XHRyZXR1cm4gbmV3IE9PLnVpLkJ1dHRvbk9wdGlvbldpZGdldCh7XG5cdFx0XHRkYXRhOiB2YXJpYW50LFxuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoYHZhcmlhbnQtJHt2YXJpYW50fWApLFxuXHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoYHZhcmlhbnQtJHt2YXJpYW50fWApLFxuXHRcdH0pO1xuXHR9O1xuXHQvLyBDcmVhdGUgYSBuZXcgQnV0dG9uU2VsZWN0V2lkZ2V0IGFuZCBhZGQgdGhlIGJ1dHRvbiBvcHRpb25zIHRvIGl0XG5cdC8vIHZpYSB0aGUgQnV0dG9uU2VsZWN0V2lkZ2V0J3MgJ2l0ZW1zJyBjb25maWcgb3B0aW9uLlxuXHRjb25zdCBidXR0b25TZWxlY3Q6IE9PLnVpLkJ1dHRvblNlbGVjdFdpZGdldCA9IG5ldyBPTy51aS5CdXR0b25TZWxlY3RXaWRnZXQoe1xuXHRcdGl0ZW1zOiBbXG5cdFx0XHRnZW5lcmF0ZUJ1dHRvbignemgtY24nKSxcblx0XHRcdGdlbmVyYXRlQnV0dG9uKCd6aC1oaycpLFxuXHRcdFx0Z2VuZXJhdGVCdXR0b24oJ3poLXR3JyksXG5cdFx0XHRnZW5lcmF0ZUJ1dHRvbignemgtc2cnKSxcblx0XHRcdGdlbmVyYXRlQnV0dG9uKCd6aC1teScpLFxuXHRcdFx0Z2VuZXJhdGVCdXR0b24oJ3poLW1vJyksXG5cdFx0XSxcblx0fSk7XG5cblx0aWYgKHByZWZlcnJlZFZhcmlhbnQgPT09IG51bGwpIHtcblx0XHRidXR0b25TZWxlY3Quc2VsZWN0SXRlbUJ5RGF0YSgnemgtY24nKTtcblx0fSBlbHNlIHtcblx0XHRidXR0b25TZWxlY3Quc2VsZWN0SXRlbUJ5RGF0YShwcmVmZXJyZWRWYXJpYW50KTtcblx0fVxuXG5cdGNvbnN0ICRkaWFsb2dUaXRsZTogSlF1ZXJ5ID0gJCgnPHNwYW4+Jylcblx0XHQuYWRkQ2xhc3MoJ2dhZGdldC1ub3RpZnlfY29udmVyc2lvbl9fdGl0bGUnKVxuXHRcdC5hcHBlbmQoZGlhbG9nVGl0bGVJY29uLiRlbGVtZW50LCBkaWFsb2dUaXRsZS4kZWxlbWVudCk7XG5cdGNvbnN0ICRkaWFsb2dNZXNzYWdlOiBKUXVlcnkgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKCdnYWRnZXQtbm90aWZ5X2NvbnZlcnNpb25fX21lc3NhZ2UnKVxuXHRcdC5hcHBlbmQoXG5cdFx0XHQkKCc8cD4nKS50ZXh0KGdldE1lc3NhZ2UoJ2RpYWxvZ0Rlc2MnKSksXG5cdFx0XHQkKCc8cD4nKS5hZGRDbGFzcygnZ2FkZ2V0LW5vdGlmeV9jb252ZXJzaW9uX19tZXNzYWdlX2V4dGVuZCcpLnRleHQoZ2V0TWVzc2FnZSgnZGlhbG9nRGVzY0V4dGVuZDEnKSksXG5cdFx0XHQkKCc8cD4nKS5hZGRDbGFzcygnZ2FkZ2V0LW5vdGlmeV9jb252ZXJzaW9uX19tZXNzYWdlX2V4dGVuZCcpLnRleHQoZ2V0TWVzc2FnZSgnZGlhbG9nRGVzY0V4dGVuZDInKSksXG5cdFx0XHRidXR0b25TZWxlY3QuJGVsZW1lbnQuYWRkQ2xhc3MoJ2dhZGdldC1ub3RpZnlfY29udmVyc2lvbl9fc2VsZWN0aW9uJyksXG5cdFx0XHQkKCc8cD4nKS5hZGRDbGFzcygnZ2FkZ2V0LW5vdGlmeV9jb252ZXJzaW9uX19tZXNzYWdlX3ByaXZhY3ktbm90aWNlJykudGV4dChnZXRNZXNzYWdlKCdwcml2YWN5Tm90aWNlJykpXG5cdFx0KTtcblxuXHRjb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkKCdib2R5JykpO1xuXG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHRjb25zdCBtZXNzYWdlRGlhbG9nUHJvcGVydHk6IE9PLnVpLldpbmRvd01hbmFnZXIuV2luZG93T3BlbmluZ0RhdGEgPSB7XG5cdFx0dGl0bGU6ICRkaWFsb2dUaXRsZSxcblx0XHRtZXNzYWdlOiAkZGlhbG9nTWVzc2FnZSxcblx0XHRhY3Rpb25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2NvbmZpcm0nLFxuXHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHRcdGxhYmVsOiAkKCc8Yj4nKS50ZXh0KGdldE1lc3NhZ2UoJ2NvbmZpcm0nKSksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdjYW5jZWwnLFxuXHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHRcdGxhYmVsOiAkKCc8Yj4nKS50ZXh0KGdldE1lc3NhZ2UoJ2NhbmNlbCcpKSxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRzaXplOiAnbWVkaXVtJyxcblx0fTtcblxuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW21lc3NhZ2VEaWFsb2ddKTtcblx0dm9pZCB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3cobWVzc2FnZURpYWxvZywgbWVzc2FnZURpYWxvZ1Byb3BlcnR5KTtcblxuXHRtZXNzYWdlRGlhbG9nLmdldEFjdGlvblByb2Nlc3MgPSAoYWN0aW9uKTogT08udWkuUHJvY2VzcyA9PiB7XG5cdFx0Y29uc3QgY2xlYXJXaW5kb3dzID0gKHZhcmlhbnQ/OiBzdHJpbmcpID0+IHtcblx0XHRcdG13LnN0b3JhZ2Uuc2V0KEdBREdFVF9OQU1FLCB2YXJpYW50IHx8ICdoaWRlJyk7XG5cdFx0XHR2b2lkIHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdFx0fTtcblxuXHRcdHJldHVybiBuZXcgT08udWkuUHJvY2VzcygoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoYWN0aW9uID09PSAnY29uZmlybScpIHtcblx0XHRcdFx0Y29uc3QgVVJMX1JFR0VYOiBSZWdFeHAgPSAvKFxcL1xcL1teL10rXFwvKShbXi9dKykoXFwvKS87XG5cdFx0XHRcdGNvbnN0IHNlbGVjdGVkSXRlbTogT08udWkuT3B0aW9uV2lkZ2V0ID0gYnV0dG9uU2VsZWN0LmZpbmRTZWxlY3RlZEl0ZW0oKSBhcyBPTy51aS5PcHRpb25XaWRnZXQ7XG5cdFx0XHRcdGNvbnN0IHZhcmlhbnQ6IHN0cmluZyA9IHNlbGVjdGVkSXRlbS5nZXREYXRhKCkgYXMgc3RyaW5nO1xuXHRcdFx0XHRjbGVhcldpbmRvd3ModmFyaWFudCk7XG5cdFx0XHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykpIHtcblx0XHRcdFx0XHR2b2lkIGFwaS5zYXZlT3B0aW9uKCd2YXJpYW50JywgdmFyaWFudCkudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb25IcmVmLnJlcGxhY2UoVVJMX1JFR0VYLCAnJDF3aWtpJDMnKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb25IcmVmLnJlcGxhY2UoVVJMX1JFR0VYLCBgJDEke3ZhcmlhbnR9JDNgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dm9pZCBPTy51aS5jb25maXJtKGdldE1lc3NhZ2UoJ0FyZSB5b3Ugc3VyZT8nKSkudGhlbigoY29uZmlybWVkOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0aWYgKGNvbmZpcm1lZCkge1xuXHRcdFx0XHRcdFx0Y2xlYXJXaW5kb3dzKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcbn07XG5cbmNvbnN0IHByZWZlcnJlZFZhcmlhbnQ6IHN0cmluZyB8IG51bGwgPVxuXHQoKG13LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKSA/IG13LnVzZXIub3B0aW9ucy5nZXQoJ3ZhcmlhbnQnKSA6IG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKSkgYXMgc3RyaW5nKSA/PyBudWxsO1xuXG5leHBvcnQgY29uc3Qgbm90aWZ5Q29udmVyc2lvbiA9ICgpOiB2b2lkID0+IHtcblx0aWYgKCF3Z1VzZXJWYXJpYW50KSB7XG5cdFx0cmV0dXJuOyAvLyBvbiBTcGVjaWFsIHBhZ2VzXG5cdH1cblx0aWYgKGlzTGFuZ3VhZ2VTZXQoKSkge1xuXHRcdHJldHVybjsgLy8gc2V0IGB1c2VsYW5nYCBvciBgdmFyaWFudGAgZ2V0IHBhcmFtZXRlcnNcblx0fVxuXHRpZiAoaXNFeHBlcmllbmNlZFVzZXIoKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAocHJlZmVycmVkVmFyaWFudCA9PT0gbnVsbCB8fCBbJ3poJywgJ3poLWhhbnMnLCAnemgtaGFudCddLmluY2x1ZGVzKHByZWZlcnJlZFZhcmlhbnQpIHx8IGlzV3JvbmdVUkwoKSkge1xuXHRcdHNob3dEaWFsb2coKTtcblx0fVxufTtcbiIsICJpbXBvcnQge3dnVXNlclZhcmlhbnR9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5leHBvcnQgY29uc3QgcHJlc2VydmVWYXJpYW50ID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoXG5cdFx0IXdnVXNlclZhcmlhbnQgfHxcblx0XHQhd2dVc2VyVmFyaWFudC5pbmNsdWRlcygnemgtJykgfHxcblx0XHQhKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhgLyR7d2dVc2VyVmFyaWFudH0vYCkgJiYgbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd2YXJpYW50JykgIT09IHdnVXNlclZhcmlhbnQpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXHQkKGRvY3VtZW50KS5vbigna2V5ZG93biBtb3VzZWRvd24gdG91Y2hzdGFydCcsICdhJywgZnVuY3Rpb24gKCk6IHZvaWQge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuXHRcdGNvbnN0IG9yaWdpbmFsSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJChzZWxmKS5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKCFvcmlnaW5hbEhyZWYpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IHVyaTtcblx0XHR0cnkge1xuXHRcdFx0dXJpID0gbmV3IG13LlVyaShvcmlnaW5hbEhyZWYpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoISgndmFyaWFudCcgaW4gdXJpLnF1ZXJ5KSkge1xuXHRcdFx0aWYgKG9yaWdpbmFsSHJlZi5pbmNsdWRlcygnL3dpa2kvJykpIHtcblx0XHRcdFx0c2VsZi5ocmVmID0gYC8ke3dnVXNlclZhcmlhbnR9JHtvcmlnaW5hbEhyZWYuc2xpY2UoNSl9YDtcblx0XHRcdH0gZWxzZSBpZiAob3JpZ2luYWxIcmVmLmluY2x1ZGVzKCcvaW5kZXgucGhwPycpKSB7XG5cdFx0XHRcdHNlbGYuaHJlZiA9IHVyaVxuXHRcdFx0XHRcdC5leHRlbmQoe1xuXHRcdFx0XHRcdFx0dmFyaWFudDogd2dVc2VyVmFyaWFudCxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5nZXRSZWxhdGl2ZVBhdGgoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufTtcbiIsICJpbXBvcnQge0dBREdFVF9OQU1FLCBHT09EX1ZBUklBTlRTLCB3Z1VzZXJOYW1lfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtub3RpZnlDb252ZXJzaW9ufSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge3ByZXNlcnZlVmFyaWFudH0gZnJvbSAnLi9tb2R1bGVzL3ByZXNlcnZlVmFyaWFudCc7XG5cbigoKTogdm9pZCA9PiB7XG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpICE9PSAndmlldycpIHtcblx0XHRyZXR1cm47IC8vIOWPquWcqOa1j+iniOmhtemdouaXtuaYvuekulxuXHR9XG5cdGNvbnN0IHByZWZlcnJlZFZhcmlhbnQgPSAobXcuc3RvcmFnZS5nZXQoR0FER0VUX05BTUUpIHx8ICcnKS50b1N0cmluZygpO1xuXHRpZiAoIVsnaGlkZScsIC4uLkdPT0RfVkFSSUFOVFNdLmluY2x1ZGVzKHByZWZlcnJlZFZhcmlhbnQpKSB7XG5cdFx0Ly8g5piv5ZCm54K56L+H4oCc5LiN5YaN5o+Q56S64oCd5oiW5a6M5oiQ6L+H6K6+572uXG5cdFx0JChub3RpZnlDb252ZXJzaW9uKTtcblx0fSBlbHNlIGlmICghd2dVc2VyTmFtZSkge1xuXHRcdCQocHJlc2VydmVWYXJpYW50KTtcblx0fVxufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsY0FBc0I7QUFFNUIsSUFBTUMscUJBQStCLENBQ3BDLFNBQ0EsV0FDQSxXQUNBLFdBQ0EseUJBQ0Esc0JB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M0RsRCxNQUFFbUMsZ0JBQWdCO0VBQ25CLFdBQVcsQ0FBQzVGLFlBQVk7QUFDdkJ5RCxNQUFFb0MsZUFBZTtFQUNsQjtBQUNELEdBQUc7IiwKICAibmFtZXMiOiBbIkdBREdFVF9OQU1FIiwgIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJXRUJNQVNURVJfTElTVCIsICJ3Z1VzZXJOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAid2dVc2VyR3JvdXBzIiwgIndnVXNlclZhcmlhbnQiLCAiR09PRF9WQVJJQU5UUyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJkaWFsb2dUaXRsZSIsICJsb2NhbGl6ZSIsICJlbiIsICJkaWFsb2dEZXNjIiwgImRpYWxvZ0Rlc2NFeHRlbmQxIiwgImRpYWxvZ0Rlc2NFeHRlbmQyIiwgInpoIiwgInByaXZhY3lOb3RpY2UiLCAiY29uZmlybSIsICJjYW5jZWwiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJsb2NhdGlvbkhyZWYiLCAibG9jYXRpb24iLCAiaHJlZiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImlzRXhwZXJpZW5jZWRVc2VyIiwgInNvbWUiLCAiZWxlbWVudCIsICJpbmNsdWRlcyIsICJpc0xhbmd1YWdlU2V0IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJpc1dyb25nVVJMIiwgInNob3dEaWFsb2ciLCAiZGlhbG9nVGl0bGVJY29uIiwgIk9PIiwgInVpIiwgIkljb25XaWRnZXQiLCAiaWNvbiIsICJ0aXRsZSIsICJMYWJlbFdpZGdldCIsICJsYWJlbCIsICJnZW5lcmF0ZUJ1dHRvbiIsICJ2YXJpYW50IiwgIkJ1dHRvbk9wdGlvbldpZGdldCIsICJkYXRhIiwgImNvbmNhdCIsICJidXR0b25TZWxlY3QiLCAiQnV0dG9uU2VsZWN0V2lkZ2V0IiwgIml0ZW1zIiwgInByZWZlcnJlZFZhcmlhbnQiLCAic2VsZWN0SXRlbUJ5RGF0YSIsICIkZGlhbG9nVGl0bGUiLCAiJCIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiJGVsZW1lbnQiLCAiJGRpYWxvZ01lc3NhZ2UiLCAidGV4dCIsICJ3aW5kb3dNYW5hZ2VyIiwgIldpbmRvd01hbmFnZXIiLCAiYXBwZW5kVG8iLCAibWVzc2FnZURpYWxvZyIsICJNZXNzYWdlRGlhbG9nIiwgIm1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSIsICJtZXNzYWdlIiwgImFjdGlvbnMiLCAiYWN0aW9uIiwgImZsYWdzIiwgInNpemUiLCAiYWRkV2luZG93cyIsICJvcGVuV2luZG93IiwgImdldEFjdGlvblByb2Nlc3MiLCAiY2xlYXJXaW5kb3dzIiwgInN0b3JhZ2UiLCAic2V0IiwgIlByb2Nlc3MiLCAiVVJMX1JFR0VYIiwgInNlbGVjdGVkSXRlbSIsICJmaW5kU2VsZWN0ZWRJdGVtIiwgImdldERhdGEiLCAic2F2ZU9wdGlvbiIsICJ0aGVuIiwgInJlcGxhY2UiLCAiY29uZmlybWVkIiwgIl9yZWYiLCAidXNlciIsICJvcHRpb25zIiwgIm5vdGlmeUNvbnZlcnNpb24iLCAicHJlc2VydmVWYXJpYW50IiwgIndpbmRvdyIsICJwYXRobmFtZSIsICJkb2N1bWVudCIsICJvbiIsICJzZWxmIiwgIm9yaWdpbmFsSHJlZiIsICJhdHRyIiwgInVyaSIsICJVcmkiLCAicXVlcnkiLCAic2xpY2UiLCAiZXh0ZW5kIiwgImdldFJlbGF0aXZlUGF0aCIsICJwcmVmZXJyZWRWYXJpYW50MiIsICJ0b1N0cmluZyJdCn0K
