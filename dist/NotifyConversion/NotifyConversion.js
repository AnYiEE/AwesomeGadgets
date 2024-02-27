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

// dist/NotifyConversion/NotifyConversion.js
var _ref;
//! src/NotifyConversion/modules/constant.ts
var GADGET_NAME = "ext.gadget.NotifyConversion";
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "有兽档案馆编者", "有兽档案馆社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
var WG_USER_NAME = mw.config.get("wgUserName") || "";
var WG_USER_GROUPS = mw.config.get("wgUserGroups") || [];
var WG_USER_VARIANT = mw.config.get("wgUserVariant");
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
      en: "To meet needs of readers, Youshou Arxiv utilizes a conversion mechanism for Chinese language variants.",
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
    privacyNoticeNotLoggedIn: (0, import_ext_gadget.localize)({
      en: "Your choices will be only stored in your browser only. We will not track your choices.",
      "zh-hans": "您的选择将仅存储在您的浏览器中，我们不会追踪您的选择。",
      "zh-hant": "您的選擇將僅存儲在您的瀏覽器中，我們不會追蹤您的選擇。"
    }),
    privacyNoticeLoggedIn: (0, import_ext_gadget.localize)({
      en: "Your choices will be stored in your browser and your user preferences. However, We will not track your choices.",
      "zh-hans": "您的选择将存储在您的浏览器及用户参数设置中；但是，我们不会追踪您的选择。",
      "zh-hant": "您的選擇將存儲在您的瀏覽器及使用者偏好設定中；但是，我們不會追蹤您的選擇。"
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
  if (!WG_USER_NAME || !WG_USER_GROUPS) {
    return false;
  }
  return ["sysop", "bureaucrat"].some((element) => {
    return WG_USER_GROUPS.includes(element);
  }) || SYSTEM_SCRIPT_LIST.includes(WG_USER_NAME) || WEBMASTER_LIST.includes(WG_USER_NAME);
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
  const $dialogMessage = $("<div>").addClass("gadget-notify_conversion__message").append($("<p>").text(getMessage("dialogDesc")), $("<p>").addClass("gadget-notify_conversion__message_extend").text(getMessage("dialogDescExtend1")), $("<p>").addClass("gadget-notify_conversion__message_extend").text(getMessage("dialogDescExtend2")), buttonSelect.$element.addClass("gadget-notify_conversion__selection"), $("<p>").addClass("gadget-notify_conversion__message_privacy-notice").text(WG_USER_NAME ? getMessage("privacyNoticeLoggedIn") : getMessage("privacyNoticeNotLoggedIn")));
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
        if (WG_USER_NAME) {
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
var preferredVariant = (_ref = WG_USER_NAME ? mw.user.options.get("variant") : WG_USER_VARIANT) !== null && _ref !== void 0 ? _ref : null;
var notifyConversion = () => {
  if (!WG_USER_VARIANT) {
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
  if (!WG_USER_VARIANT || !WG_USER_VARIANT.includes("zh-") || !(window.location.pathname.includes("/".concat(WG_USER_VARIANT, "/")) && mw.util.getParamValue("variant") !== WG_USER_VARIANT)) {
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
        self.href = "/".concat(WG_USER_VARIANT).concat(originalHref.slice(5));
      } else if (originalHref.includes("/index.php?")) {
        self.href = uri.extend({
          variant: WG_USER_VARIANT
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
  } else if (!WG_USER_NAME) {
    $(preserveVariant);
  }
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGlmeUNvbnZlcnNpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvTm90aWZ5Q29udmVyc2lvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL05vdGlmeUNvbnZlcnNpb24vbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9Ob3RpZnlDb252ZXJzaW9uL21vZHVsZXMvcHJlc2VydmVWYXJpYW50LnRzIiwgInNyYy9Ob3RpZnlDb252ZXJzaW9uL05vdGlmeUNvbnZlcnNpb24udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IEdBREdFVF9OQU1FOiBzdHJpbmcgPSAnZXh0LmdhZGdldC5Ob3RpZnlDb252ZXJzaW9uJztcblxuY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmnInlhb3moaPmoYjppobnvJbogIUnLFxuXHQn5pyJ5YW95qGj5qGI6aaG56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5cbmNvbnN0IFdFQk1BU1RFUl9MSVNUOiBzdHJpbmdbXSA9IFsnUWl1V2VuJywgJ1FpdVdlbiBmb3IgQWNjb3VudHMnLCAnUWl1d2VuU29jaWFsTWVkaWEnXTtcblxuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykgfHwgJyc7XG5jb25zdCBXR19VU0VSX0dST1VQUzogc3RyaW5nW10gPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKSB8fCBbXTtcbmNvbnN0IFdHX1VTRVJfVkFSSUFOVDogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKTtcblxuY29uc3QgR09PRF9WQVJJQU5UUzogc3RyaW5nW10gPSBbJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J107XG5cbmV4cG9ydCB7R0FER0VUX05BTUUsIFNZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1QsIFdHX1VTRVJfTkFNRSwgV0dfVVNFUl9HUk9VUFMsIFdHX1VTRVJfVkFSSUFOVCwgR09PRF9WQVJJQU5UU307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGRpYWxvZ1RpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZvciB5b3VyIGJldHRlciB1c2VyIGV4cGVyaWVuY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5oiR5Lus5biM5pyb5o+Q5L6b5pu05aW955qE6ZiF6K+75L2T6aqMJyxcblx0XHRcdCd6aC1oYW50JzogJ+aIkeWAkeW4jOacm+aPkOS+m+abtOWlveeahOmWseiugOmrlOmplycsXG5cdFx0fSksXG5cdFx0ZGlhbG9nRGVzYzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXaGljaCBDaGluZXNlIHZhcmlhbnRzIGRvIHlvdSBwcmVmZXI/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4uumBv+WFjeWGheWuueaYvuekuueugOe5gea3t+adgu+8jOivt+mAieaLqeaCqOWBj+WlveeahOS4reaWh+WPmOS9k+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfngrrpgb/lhY3lhaflrrnpoa/npLrnsKHnuYHmt7fpm5zvvIzoq4vpgbjmk4fmgqjlgY/lpb3nmoTkuK3mlofororpq5TjgIInLFxuXHRcdH0pLFxuXHRcdGRpYWxvZ0Rlc2NFeHRlbmQxOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RvIG1lZXQgbmVlZHMgb2YgcmVhZGVycywgWW91c2hvdSBBcnhpdiB1dGlsaXplcyBhIGNvbnZlcnNpb24gbWVjaGFuaXNtIGZvciBDaGluZXNlIGxhbmd1YWdlIHZhcmlhbnRzLicsXG5cdFx0XHQnemgtaGFucyc6ICfkuLrmu6HotrPlkITlnLDkuK3mlofnlKjmiLfpnIDmsYLvvIzmnInlhb3moaPmoYjppobph4fnlKjoh6rliqjovazmjaLmioDmnK/vvIzmj5DkvpvkuI3lkIzkuK3mloflj5jkvZPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn54K65ru/6Laz5ZCE5Zyw5Lit5paH5L2/55So6ICF6ZyA5rGC77yM5pyJ54245qqU5qGI6aSo5o6h55So6Ieq5YuV6L2J5o+b5oqA6KGT77yM5o+Q5L6b5LiN5ZCM5Lit5paH6K6K6auU44CCJyxcblx0XHR9KSxcblx0XHRkaWFsb2dEZXNjRXh0ZW5kMjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGb3IgeW91ciBiZXR0ZXIgZXhwZXJpZW5jZSwgd2Ugd291bGQgYXBwcmVjaWF0ZSBpdCBpZiB5b3Ugc2VsZWN0IHlvdXIgcHJlZmVycmVkIENoaW5lc2UgbGFuZ3VhZ2UgdmFyaWFudC4gV2UgYXBvbG9naXplIGZvciBhbnkgaW5jb252ZW5pZW5jZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Ye65LqO6ZiF6K+75L2T6aqM5LmL6ICD6YeP77yM5oiR5Lus5bu66K6u5oKo5Y+v5Lul6YCJ5oup5omA5YGP5aW955qE5Lit5paH6K+t6KiA5Y+Y5L2T44CC57uZ5oKo5bim5p2l5LiN5L6/77yM5pWs6K+36LCF6Kej77yBJyxcblx0XHRcdCd6aC1oYW50JzogJ+WHuuaWvOmWseiugOmrlOmpl+S5i+iAg+mHj++8jOaIkeWAkeW7uuitsOaCqOWPr+S7pemBuOaTh+aJgOWBj+WlveeahOS4reaWh+iqnuiogOiuiumrlOOAgue1puaCqOW4tuS+huS4jeS+v++8jOaVrOiri+irkuino++8gScsXG5cdFx0fSksXG5cdFx0J3ZhcmlhbnQtemgtY24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NoaW5lc2UgTWFpbmxhbmQgKFNpbXBsaWZpZWQpICjkuK3lm73lpKfpmYbnroDkvZMpJyxcblx0XHRcdHpoOiAn5Lit5Zu95aSn6ZmG566A5L2TJyxcblx0XHR9KSxcblx0XHQndmFyaWFudC16aC1oayc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSG9uZyBLb25nLCBDaGluYSAoVHJhZGl0aW9uYWwpICjkuK3lnIvpppnmuK/nuYHpq5QpJyxcblx0XHRcdHpoOiAn5Lit5ZyL6aaZ5riv57mB6auUJyxcblx0XHR9KSxcblx0XHQndmFyaWFudC16aC1tbyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTWFjYXUsIENoaW5hIChUcmFkaXRpb25hbCkgKOS4reWci+a+s+mWgOe5gemrlCknLFxuXHRcdFx0emg6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHRcdH0pLFxuXHRcdCd2YXJpYW50LXpoLW15JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYWxheXNpYSAoU2ltcGxpZmllZCkgKOmprOadpeilv+S6mueugOS9kyknLFxuXHRcdFx0emg6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHRcdH0pLFxuXHRcdCd2YXJpYW50LXpoLXNnJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTaW5nYXBvcmUgKFNpbXBsaWZpZWQpICjpqazmnaXopb/kuprnroDkvZMpJyxcblx0XHRcdHpoOiAn5paw5Yqg5Z2h566A5L2TJyxcblx0XHR9KSxcblx0XHQndmFyaWFudC16aC10dyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYSAoVHJhZGl0aW9uYWwpICjkuK3lnIvoh7rngaPnuYHpq5QpJyxcblx0XHRcdHpoOiAn5Lit5ZyL6Ie654Gj57mB6auUJyxcblx0XHR9KSxcblx0XHRwcml2YWN5Tm90aWNlTm90TG9nZ2VkSW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91ciBjaG9pY2VzIHdpbGwgYmUgb25seSBzdG9yZWQgaW4geW91ciBicm93c2VyIG9ubHkuIFdlIHdpbGwgbm90IHRyYWNrIHlvdXIgY2hvaWNlcy4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oKo55qE6YCJ5oup5bCG5LuF5a2Y5YKo5Zyo5oKo55qE5rWP6KeI5Zmo5Lit77yM5oiR5Lus5LiN5Lya6L+96Liq5oKo55qE6YCJ5oup44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+aCqOeahOmBuOaTh+Wwh+WDheWtmOWEsuWcqOaCqOeahOeAj+imveWZqOS4re+8jOaIkeWAkeS4jeacg+i/vei5pOaCqOeahOmBuOaTh+OAgicsXG5cdFx0fSksXG5cdFx0cHJpdmFjeU5vdGljZUxvZ2dlZEluOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdXIgY2hvaWNlcyB3aWxsIGJlIHN0b3JlZCBpbiB5b3VyIGJyb3dzZXIgYW5kIHlvdXIgdXNlciBwcmVmZXJlbmNlcy4gSG93ZXZlciwgV2Ugd2lsbCBub3QgdHJhY2sgeW91ciBjaG9pY2VzLicsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjnmoTpgInmi6nlsIblrZjlgqjlnKjmgqjnmoTmtY/op4jlmajlj4rnlKjmiLflj4LmlbDorr7nva7kuK3vvJvkvYbmmK/vvIzmiJHku6zkuI3kvJrov73ouKrmgqjnmoTpgInmi6njgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo55qE6YG45pOH5bCH5a2Y5YSy5Zyo5oKo55qE54CP6Ka95Zmo5Y+K5L2/55So6ICF5YGP5aW96Kit5a6a5Lit77yb5L2G5piv77yM5oiR5YCR5LiN5pyD6L+96Lmk5oKo55qE6YG45pOH44CCJyxcblx0XHR9KSxcblx0XHRjb25maXJtOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm0nLFxuXHRcdFx0J3poLWhhbnMnOiAn56Gu6K6kJyxcblx0XHRcdCd6aC1oYW50JzogJ+eiuuiqjScsXG5cdFx0fSksXG5cdFx0Y2FuY2VsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2NhbmNlbCcsXG5cdFx0XHR6aDogJ+WPlua2iCcsXG5cdFx0fSksXG5cdFx0J0FyZSB5b3Ugc3VyZT8nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyZSB5b3Ugc3VyZSB0byBjYW5jZWw/IElmIHlvdSBjaG9vc2UgXCJjYW5jZWxcIiwgeW91IG1heSBmaW5kIG1peGVkIHRyYWRpdGlvbmFsIGFuZCBzaW1wbGlmaWVkIENoaW5lc2UgY2hhcmFjdGVycywgd2hpY2ggd2lsbCBhZmZlY3QgeW91ciB1c2VyIGV4cGVyaWVuY2UuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOehruWumuimgeWPlua2iOWQl++8n+WPlua2iOWQju+8jOeVjOmdouWPr+iDveWHuueOsOe5geeugOa3t+adgueOsOixoe+8jOW9seWTjeeUqOaIt+S9k+mqjOOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjnorrlrpropoHlj5bmtojll47vvJ/lj5bmtojlvozvvIzku4vpnaLlj6/og73lh7rnj77nuYHnsKHmt7fpm5znj77osaHvvIzlvbHpn7/kvb/nlKjogIXpq5TpqZfjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge1xuXHRHQURHRVRfTkFNRSxcblx0U1lTVEVNX1NDUklQVF9MSVNULFxuXHRXRUJNQVNURVJfTElTVCxcblx0V0dfVVNFUl9HUk9VUFMsXG5cdFdHX1VTRVJfTkFNRSxcblx0V0dfVVNFUl9WQVJJQU5ULFxufSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBsb2NhdGlvbkhyZWY6IHN0cmluZyA9IGxvY2F0aW9uLmhyZWY7XG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnTm90aWZ5Q29udmVyc2lvbi8yLjAnKTtcblxuY29uc3QgaXNFeHBlcmllbmNlZFVzZXIgPSAoKTogYm9vbGVhbiA9PiB7XG5cdGlmICghV0dfVVNFUl9OQU1FIHx8ICFXR19VU0VSX0dST1VQUykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gKFxuXHRcdFsnc3lzb3AnLCAnYnVyZWF1Y3JhdCddLnNvbWUoKGVsZW1lbnQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0cmV0dXJuIFdHX1VTRVJfR1JPVVBTLmluY2x1ZGVzKGVsZW1lbnQpO1xuXHRcdH0pIHx8XG5cdFx0U1lTVEVNX1NDUklQVF9MSVNULmluY2x1ZGVzKFdHX1VTRVJfTkFNRSkgfHxcblx0XHRXRUJNQVNURVJfTElTVC5pbmNsdWRlcyhXR19VU0VSX05BTUUpXG5cdCk7XG59O1xuXG5jb25zdCBpc0xhbmd1YWdlU2V0ID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRpZiAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCd2YXJpYW50JykgfHwgbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd1c2VsYW5nJykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBpc1dyb25nVVJMID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRpZiAobG9jYXRpb25IcmVmLmluY2x1ZGVzKCcvemgvJykgfHwgbG9jYXRpb25IcmVmLmluY2x1ZGVzKCcvemgtaGFucy8nKSB8fCBsb2NhdGlvbkhyZWYuaW5jbHVkZXMoJy96aC1oYW50LycpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3Qgc2hvd0RpYWxvZyA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3QgZGlhbG9nVGl0bGVJY29uOiBPTy51aS5JY29uV2lkZ2V0ID0gbmV3IE9PLnVpLkljb25XaWRnZXQoe1xuXHRcdGljb246ICdsYW5ndWFnZScsXG5cdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ2RpYWxvZ1RpdGxlJyksXG5cdH0pO1xuXHRjb25zdCBkaWFsb2dUaXRsZTogT08udWkuTGFiZWxXaWRnZXQgPSBuZXcgT08udWkuTGFiZWxXaWRnZXQoe1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdkaWFsb2dUaXRsZScpLFxuXHR9KTtcblxuXHRjb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IChcblx0XHR2YXJpYW50OiAnemgtY24nIHwgJ3poLWhrJyB8ICd6aC10dycgfCAnemgtc2cnIHwgJ3poLW15JyB8ICd6aC1tbydcblx0KTogT08udWkuQnV0dG9uT3B0aW9uV2lkZ2V0ID0+IHtcblx0XHRyZXR1cm4gbmV3IE9PLnVpLkJ1dHRvbk9wdGlvbldpZGdldCh7XG5cdFx0XHRkYXRhOiB2YXJpYW50LFxuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoYHZhcmlhbnQtJHt2YXJpYW50fWApLFxuXHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoYHZhcmlhbnQtJHt2YXJpYW50fWApLFxuXHRcdH0pO1xuXHR9O1xuXHQvLyBDcmVhdGUgYSBuZXcgQnV0dG9uU2VsZWN0V2lkZ2V0IGFuZCBhZGQgdGhlIGJ1dHRvbiBvcHRpb25zIHRvIGl0XG5cdC8vIHZpYSB0aGUgQnV0dG9uU2VsZWN0V2lkZ2V0J3MgJ2l0ZW1zJyBjb25maWcgb3B0aW9uLlxuXHRjb25zdCBidXR0b25TZWxlY3Q6IE9PLnVpLkJ1dHRvblNlbGVjdFdpZGdldCA9IG5ldyBPTy51aS5CdXR0b25TZWxlY3RXaWRnZXQoe1xuXHRcdGl0ZW1zOiBbXG5cdFx0XHRnZW5lcmF0ZUJ1dHRvbignemgtY24nKSxcblx0XHRcdGdlbmVyYXRlQnV0dG9uKCd6aC1oaycpLFxuXHRcdFx0Z2VuZXJhdGVCdXR0b24oJ3poLXR3JyksXG5cdFx0XHRnZW5lcmF0ZUJ1dHRvbignemgtc2cnKSxcblx0XHRcdGdlbmVyYXRlQnV0dG9uKCd6aC1teScpLFxuXHRcdFx0Z2VuZXJhdGVCdXR0b24oJ3poLW1vJyksXG5cdFx0XSxcblx0fSk7XG5cblx0aWYgKHByZWZlcnJlZFZhcmlhbnQgPT09IG51bGwpIHtcblx0XHRidXR0b25TZWxlY3Quc2VsZWN0SXRlbUJ5RGF0YSgnemgtY24nKTtcblx0fSBlbHNlIHtcblx0XHRidXR0b25TZWxlY3Quc2VsZWN0SXRlbUJ5RGF0YShwcmVmZXJyZWRWYXJpYW50KTtcblx0fVxuXG5cdGNvbnN0ICRkaWFsb2dUaXRsZTogSlF1ZXJ5ID0gJCgnPHNwYW4+Jylcblx0XHQuYWRkQ2xhc3MoJ2dhZGdldC1ub3RpZnlfY29udmVyc2lvbl9fdGl0bGUnKVxuXHRcdC5hcHBlbmQoZGlhbG9nVGl0bGVJY29uLiRlbGVtZW50LCBkaWFsb2dUaXRsZS4kZWxlbWVudCk7XG5cdGNvbnN0ICRkaWFsb2dNZXNzYWdlOiBKUXVlcnkgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKCdnYWRnZXQtbm90aWZ5X2NvbnZlcnNpb25fX21lc3NhZ2UnKVxuXHRcdC5hcHBlbmQoXG5cdFx0XHQkKCc8cD4nKS50ZXh0KGdldE1lc3NhZ2UoJ2RpYWxvZ0Rlc2MnKSksXG5cdFx0XHQkKCc8cD4nKS5hZGRDbGFzcygnZ2FkZ2V0LW5vdGlmeV9jb252ZXJzaW9uX19tZXNzYWdlX2V4dGVuZCcpLnRleHQoZ2V0TWVzc2FnZSgnZGlhbG9nRGVzY0V4dGVuZDEnKSksXG5cdFx0XHQkKCc8cD4nKS5hZGRDbGFzcygnZ2FkZ2V0LW5vdGlmeV9jb252ZXJzaW9uX19tZXNzYWdlX2V4dGVuZCcpLnRleHQoZ2V0TWVzc2FnZSgnZGlhbG9nRGVzY0V4dGVuZDInKSksXG5cdFx0XHRidXR0b25TZWxlY3QuJGVsZW1lbnQuYWRkQ2xhc3MoJ2dhZGdldC1ub3RpZnlfY29udmVyc2lvbl9fc2VsZWN0aW9uJyksXG5cdFx0XHQkKCc8cD4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2dhZGdldC1ub3RpZnlfY29udmVyc2lvbl9fbWVzc2FnZV9wcml2YWN5LW5vdGljZScpXG5cdFx0XHRcdC50ZXh0KFdHX1VTRVJfTkFNRSA/IGdldE1lc3NhZ2UoJ3ByaXZhY3lOb3RpY2VMb2dnZWRJbicpIDogZ2V0TWVzc2FnZSgncHJpdmFjeU5vdGljZU5vdExvZ2dlZEluJykpXG5cdFx0KTtcblxuXHRjb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkKCdib2R5JykpO1xuXG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHRjb25zdCBtZXNzYWdlRGlhbG9nUHJvcGVydHk6IE9PLnVpLldpbmRvd01hbmFnZXIuV2luZG93T3BlbmluZ0RhdGEgPSB7XG5cdFx0dGl0bGU6ICRkaWFsb2dUaXRsZSxcblx0XHRtZXNzYWdlOiAkZGlhbG9nTWVzc2FnZSxcblx0XHRhY3Rpb25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2NvbmZpcm0nLFxuXHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHRcdGxhYmVsOiAkKCc8Yj4nKS50ZXh0KGdldE1lc3NhZ2UoJ2NvbmZpcm0nKSksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdjYW5jZWwnLFxuXHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHRcdGxhYmVsOiAkKCc8Yj4nKS50ZXh0KGdldE1lc3NhZ2UoJ2NhbmNlbCcpKSxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRzaXplOiAnbWVkaXVtJyxcblx0fTtcblxuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW21lc3NhZ2VEaWFsb2ddKTtcblx0dm9pZCB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3cobWVzc2FnZURpYWxvZywgbWVzc2FnZURpYWxvZ1Byb3BlcnR5KTtcblxuXHRtZXNzYWdlRGlhbG9nLmdldEFjdGlvblByb2Nlc3MgPSAoYWN0aW9uKTogT08udWkuUHJvY2VzcyA9PiB7XG5cdFx0Y29uc3QgY2xlYXJXaW5kb3dzID0gKHZhcmlhbnQ/OiBzdHJpbmcpID0+IHtcblx0XHRcdG13LnN0b3JhZ2Uuc2V0KEdBREdFVF9OQU1FLCB2YXJpYW50IHx8ICdoaWRlJyk7XG5cdFx0XHR2b2lkIHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdFx0fTtcblxuXHRcdHJldHVybiBuZXcgT08udWkuUHJvY2VzcygoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoYWN0aW9uID09PSAnY29uZmlybScpIHtcblx0XHRcdFx0Y29uc3QgVVJMX1JFR0VYOiBSZWdFeHAgPSAvKFxcL1xcL1teL10rXFwvKShbXi9dKykoXFwvKS87XG5cdFx0XHRcdGNvbnN0IHNlbGVjdGVkSXRlbTogT08udWkuT3B0aW9uV2lkZ2V0ID0gYnV0dG9uU2VsZWN0LmZpbmRTZWxlY3RlZEl0ZW0oKSBhcyBPTy51aS5PcHRpb25XaWRnZXQ7XG5cdFx0XHRcdGNvbnN0IHZhcmlhbnQ6IHN0cmluZyA9IHNlbGVjdGVkSXRlbS5nZXREYXRhKCkgYXMgc3RyaW5nO1xuXHRcdFx0XHRjbGVhcldpbmRvd3ModmFyaWFudCk7XG5cdFx0XHRcdGlmIChXR19VU0VSX05BTUUpIHtcblx0XHRcdFx0XHR2b2lkIGFwaS5zYXZlT3B0aW9uKCd2YXJpYW50JywgdmFyaWFudCkudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb25IcmVmLnJlcGxhY2UoVVJMX1JFR0VYLCAnJDF3aWtpJDMnKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb25IcmVmLnJlcGxhY2UoVVJMX1JFR0VYLCBgJDEke3ZhcmlhbnR9JDNgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dm9pZCBPTy51aS5jb25maXJtKGdldE1lc3NhZ2UoJ0FyZSB5b3Ugc3VyZT8nKSkudGhlbigoY29uZmlybWVkOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0aWYgKGNvbmZpcm1lZCkge1xuXHRcdFx0XHRcdFx0Y2xlYXJXaW5kb3dzKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcbn07XG5cbmNvbnN0IHByZWZlcnJlZFZhcmlhbnQ6IHN0cmluZyB8IG51bGwgPVxuXHQoKFdHX1VTRVJfTkFNRSA/IG13LnVzZXIub3B0aW9ucy5nZXQoJ3ZhcmlhbnQnKSA6IFdHX1VTRVJfVkFSSUFOVCkgYXMgc3RyaW5nKSA/PyBudWxsO1xuXG5leHBvcnQgY29uc3Qgbm90aWZ5Q29udmVyc2lvbiA9ICgpOiB2b2lkID0+IHtcblx0aWYgKCFXR19VU0VSX1ZBUklBTlQpIHtcblx0XHRyZXR1cm47IC8vIG9uIFNwZWNpYWwgcGFnZXNcblx0fVxuXHRpZiAoaXNMYW5ndWFnZVNldCgpKSB7XG5cdFx0cmV0dXJuOyAvLyBzZXQgYHVzZWxhbmdgIG9yIGB2YXJpYW50YCBnZXQgcGFyYW1ldGVyc1xuXHR9XG5cdGlmIChpc0V4cGVyaWVuY2VkVXNlcigpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChwcmVmZXJyZWRWYXJpYW50ID09PSBudWxsIHx8IFsnemgnLCAnemgtaGFucycsICd6aC1oYW50J10uaW5jbHVkZXMocHJlZmVycmVkVmFyaWFudCkgfHwgaXNXcm9uZ1VSTCgpKSB7XG5cdFx0c2hvd0RpYWxvZygpO1xuXHR9XG59O1xuIiwgImltcG9ydCB7V0dfVVNFUl9WQVJJQU5UfSBmcm9tICcuL2NvbnN0YW50JztcblxuZXhwb3J0IGNvbnN0IHByZXNlcnZlVmFyaWFudCA9ICgpOiB2b2lkID0+IHtcblx0aWYgKFxuXHRcdCFXR19VU0VSX1ZBUklBTlQgfHxcblx0XHQhV0dfVVNFUl9WQVJJQU5ULmluY2x1ZGVzKCd6aC0nKSB8fFxuXHRcdCEoXG5cdFx0XHR3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoYC8ke1dHX1VTRVJfVkFSSUFOVH0vYCkgJiZcblx0XHRcdG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndmFyaWFudCcpICE9PSBXR19VU0VSX1ZBUklBTlRcblx0XHQpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXHQkKGRvY3VtZW50KS5vbigna2V5ZG93biBtb3VzZWRvd24gdG91Y2hzdGFydCcsICdhJywgZnVuY3Rpb24gKCk6IHZvaWQge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuXHRcdGNvbnN0IG9yaWdpbmFsSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJChzZWxmKS5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKCFvcmlnaW5hbEhyZWYpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IHVyaTtcblx0XHR0cnkge1xuXHRcdFx0dXJpID0gbmV3IG13LlVyaShvcmlnaW5hbEhyZWYpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoISgndmFyaWFudCcgaW4gdXJpLnF1ZXJ5KSkge1xuXHRcdFx0aWYgKG9yaWdpbmFsSHJlZi5pbmNsdWRlcygnL3dpa2kvJykpIHtcblx0XHRcdFx0c2VsZi5ocmVmID0gYC8ke1dHX1VTRVJfVkFSSUFOVH0ke29yaWdpbmFsSHJlZi5zbGljZSg1KX1gO1xuXHRcdFx0fSBlbHNlIGlmIChvcmlnaW5hbEhyZWYuaW5jbHVkZXMoJy9pbmRleC5waHA/JykpIHtcblx0XHRcdFx0c2VsZi5ocmVmID0gdXJpXG5cdFx0XHRcdFx0LmV4dGVuZCh7XG5cdFx0XHRcdFx0XHR2YXJpYW50OiBXR19VU0VSX1ZBUklBTlQsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZ2V0UmVsYXRpdmVQYXRoKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn07XG4iLCAiaW1wb3J0ICcuL05vdGlmeUNvbnZlcnNpb24ubGVzcyc7XG5pbXBvcnQge0dBREdFVF9OQU1FLCBHT09EX1ZBUklBTlRTLCBXR19VU0VSX05BTUV9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge25vdGlmeUNvbnZlcnNpb259IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7cHJlc2VydmVWYXJpYW50fSBmcm9tICcuL21vZHVsZXMvcHJlc2VydmVWYXJpYW50JztcblxuKCgpOiB2b2lkID0+IHtcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJykgIT09ICd2aWV3Jykge1xuXHRcdHJldHVybjsgLy8g5Y+q5Zyo5rWP6KeI6aG16Z2i5pe25pi+56S6XG5cdH1cblx0Y29uc3QgcHJlZmVycmVkVmFyaWFudCA9IChtdy5zdG9yYWdlLmdldChHQURHRVRfTkFNRSkgfHwgJycpLnRvU3RyaW5nKCk7XG5cdGlmICghWydoaWRlJywgLi4uR09PRF9WQVJJQU5UU10uaW5jbHVkZXMocHJlZmVycmVkVmFyaWFudCkpIHtcblx0XHQvLyDmmK/lkKbngrnov4figJzkuI3lho3mj5DnpLrigJ3miJblrozmiJDov4forr7nva5cblx0XHQkKG5vdGlmeUNvbnZlcnNpb24pO1xuXHR9IGVsc2UgaWYgKCFXR19VU0VSX05BTUUpIHtcblx0XHQkKHByZXNlcnZlVmFyaWFudCk7XG5cdH1cbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGNBQXNCO0FBRTVCLElBQU1DLHFCQUErQixDQUNwQyxTQUNBLFdBQ0EsV0FDQSxXQUNBLHlCQUNBLHNCQUNBLHFCQUNBLDhCQUNBLGVBQUE7QUFHRCxJQUFNQyxpQkFBMkIsQ0FBQyxVQUFVLHVCQUF1QixtQkFBbUI7QUFFdEYsSUFBTUMsZUFBdUJDLEdBQUdDLE9BQU9DLElBQUksWUFBWSxLQUFLO0FBQzVELElBQU1DLGlCQUEyQkgsR0FBR0MsT0FBT0MsSUFBSSxjQUFjLEtBQUssQ0FBQTtBQUNsRSxJQUFNRSxrQkFBaUNKLEdBQUdDLE9BQU9DLElBQUksZUFBZTtBQUVwRSxJQUFNRyxnQkFBMEIsQ0FBQyxTQUFTLFNBQVMsU0FBUyxTQUFTLFNBQVMsT0FBTzs7QUNwQnJGLElBQUFDLG9CQUF1QkMsUUFBQSxpQkFBQTtBQUV2QixJQUFNQyxr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ckUsVUFBTUMsT0FBTztBQUNiLFVBQU1DLGVBQW1DMUMsRUFBRXlDLElBQUksRUFBRUUsS0FBSyxNQUFNO0FBQzVELFFBQUksQ0FBQ0QsY0FBYztBQUNsQjtJQUNEO0FBQ0EsUUFBSUU7QUFDSixRQUFJO0FBQ0hBLFlBQU0sSUFBSXJHLEdBQUdzRyxJQUFJSCxZQUFZO0lBQzlCLFFBQVE7QUFDUDtJQUNEO0FBQ0EsUUFBSSxFQUFFLGFBQWFFLElBQUlFLFFBQVE7QUFDOUIsVUFBSUosYUFBYW5FLFNBQVMsUUFBUSxHQUFHO0FBQ3BDa0UsYUFBS3hFLE9BQUEsSUFBQXdCLE9BQVc5QyxlQUFlLEVBQUE4QyxPQUFHaUQsYUFBYUssTUFBTSxDQUFDLENBQUM7TUFDeEQsV0FBV0wsYUFBYW5FLFNBQVMsYUFBYSxHQUFHO0FBQ2hEa0UsYUFBS3hFLE9BQU8yRSxJQUNWSSxPQUFPO1VBQ1AxRCxTQUFTM0M7UUFDVixDQUFDLEVBQ0FzRyxnQkFBZ0I7TUFDbkI7SUFDRDtFQUNELENBQUM7QUFDRjs7Q0NoQ0MsTUFBWTtBQUNaLE1BQUkxRyxHQUFHQyxPQUFPQyxJQUFJLFVBQVUsTUFBTSxRQUFRO0FBQ3pDO0VBQ0Q7QUFDQSxRQUFNeUcscUJBQW9CM0csR0FBRzhFLFFBQVE1RSxJQUFJTixXQUFXLEtBQUssSUFBSWdILFNBQVM7QUFDdEUsTUFBSSxDQUFDLENBQUMsUUFBUSxHQUFHdkcsYUFBYSxFQUFFMkIsU0FBUzJFLGlCQUFnQixHQUFHO0FBRTNEbEQsTUFBRW1DLGdCQUFnQjtFQUNuQixXQUFXLENBQUM3RixjQUFjO0FBQ3pCMEQsTUFBRW9DLGVBQWU7RUFDbEI7QUFDRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJHQURHRVRfTkFNRSIsICJTWVNURU1fU0NSSVBUX0xJU1QiLCAiV0VCTUFTVEVSX0xJU1QiLCAiV0dfVVNFUl9OQU1FIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfVVNFUl9HUk9VUFMiLCAiV0dfVVNFUl9WQVJJQU5UIiwgIkdPT0RfVkFSSUFOVFMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiZGlhbG9nVGl0bGUiLCAibG9jYWxpemUiLCAiZW4iLCAiZGlhbG9nRGVzYyIsICJkaWFsb2dEZXNjRXh0ZW5kMSIsICJkaWFsb2dEZXNjRXh0ZW5kMiIsICJ6aCIsICJwcml2YWN5Tm90aWNlTm90TG9nZ2VkSW4iLCAicHJpdmFjeU5vdGljZUxvZ2dlZEluIiwgImNvbmZpcm0iLCAiY2FuY2VsIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAibG9jYXRpb25IcmVmIiwgImxvY2F0aW9uIiwgImhyZWYiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpc0V4cGVyaWVuY2VkVXNlciIsICJzb21lIiwgImVsZW1lbnQiLCAiaW5jbHVkZXMiLCAiaXNMYW5ndWFnZVNldCIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiaXNXcm9uZ1VSTCIsICJzaG93RGlhbG9nIiwgImRpYWxvZ1RpdGxlSWNvbiIsICJPTyIsICJ1aSIsICJJY29uV2lkZ2V0IiwgImljb24iLCAidGl0bGUiLCAiTGFiZWxXaWRnZXQiLCAibGFiZWwiLCAiZ2VuZXJhdGVCdXR0b24iLCAidmFyaWFudCIsICJCdXR0b25PcHRpb25XaWRnZXQiLCAiZGF0YSIsICJjb25jYXQiLCAiYnV0dG9uU2VsZWN0IiwgIkJ1dHRvblNlbGVjdFdpZGdldCIsICJpdGVtcyIsICJwcmVmZXJyZWRWYXJpYW50IiwgInNlbGVjdEl0ZW1CeURhdGEiLCAiJGRpYWxvZ1RpdGxlIiwgIiQiLCAiYWRkQ2xhc3MiLCAiYXBwZW5kIiwgIiRlbGVtZW50IiwgIiRkaWFsb2dNZXNzYWdlIiwgInRleHQiLCAid2luZG93TWFuYWdlciIsICJXaW5kb3dNYW5hZ2VyIiwgImFwcGVuZFRvIiwgIm1lc3NhZ2VEaWFsb2ciLCAiTWVzc2FnZURpYWxvZyIsICJtZXNzYWdlRGlhbG9nUHJvcGVydHkiLCAibWVzc2FnZSIsICJhY3Rpb25zIiwgImFjdGlvbiIsICJmbGFncyIsICJzaXplIiwgImFkZFdpbmRvd3MiLCAib3BlbldpbmRvdyIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgImNsZWFyV2luZG93cyIsICJzdG9yYWdlIiwgInNldCIsICJQcm9jZXNzIiwgIlVSTF9SRUdFWCIsICJzZWxlY3RlZEl0ZW0iLCAiZmluZFNlbGVjdGVkSXRlbSIsICJnZXREYXRhIiwgInNhdmVPcHRpb24iLCAidGhlbiIsICJyZXBsYWNlIiwgImNvbmZpcm1lZCIsICJfcmVmIiwgInVzZXIiLCAib3B0aW9ucyIsICJub3RpZnlDb252ZXJzaW9uIiwgInByZXNlcnZlVmFyaWFudCIsICJ3aW5kb3ciLCAicGF0aG5hbWUiLCAiZG9jdW1lbnQiLCAib24iLCAic2VsZiIsICJvcmlnaW5hbEhyZWYiLCAiYXR0ciIsICJ1cmkiLCAiVXJpIiwgInF1ZXJ5IiwgInNsaWNlIiwgImV4dGVuZCIsICJnZXRSZWxhdGl2ZVBhdGgiLCAicHJlZmVycmVkVmFyaWFudDIiLCAidG9TdHJpbmciXQp9Cg==
