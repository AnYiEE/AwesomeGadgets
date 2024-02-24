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
      en: "To meet needs of readers, Youshou Arxiv utilizes a conversion mechanism for Chinese language variants.",
      "zh-hans": "为满足各地中文用户需求，有兽档案馆采用自动转换技术，提供不同中文变体。",
      "zh-hant": "為滿足各地中文使用者需求，有獸檔案館採用自動轉換技術，提供不同中文變體。"
    }),
    dialogDescExtend2: (0, import_ext_gadget.localize)({
      en: "For your better experience, we would appreciate it if you select your preferred Chinese language variant. We apologize for any inconvenience.",
      "zh-hans": "为了确保您的阅读体验，我们建议您可以选择所偏好的中文语言变体。给您带来不便，敬请谅解！",
      "zh-hant": "為了確保您的閱讀體驗，我們建議您可以選擇所偏好的中文語言變體。給您帶來不便，敬請諒解！"
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
  return ["sysop", "bureaucrat"].some((element) => {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGlmeUNvbnZlcnNpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvTm90aWZ5Q29udmVyc2lvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL05vdGlmeUNvbnZlcnNpb24vbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9Ob3RpZnlDb252ZXJzaW9uL21vZHVsZXMvcHJlc2VydmVWYXJpYW50LnRzIiwgInNyYy9Ob3RpZnlDb252ZXJzaW9uL05vdGlmeUNvbnZlcnNpb24udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IEdBREdFVF9OQU1FOiBzdHJpbmcgPSAnZXh0LmdhZGdldC5Ob3RpZnlDb252ZXJzaW9uJztcblxuY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmnInlhb3moaPmoYjppobnvJbogIUnLFxuXHQn5pyJ5YW95qGj5qGI6aaG56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5cbmNvbnN0IFdFQk1BU1RFUl9MSVNUOiBzdHJpbmdbXSA9IFsnUWl1V2VuJywgJ1FpdVdlbiBmb3IgQWNjb3VudHMnLCAnUWl1d2VuU29jaWFsTWVkaWEnXTtcblxuY29uc3Qgd2dVc2VyTmFtZTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpIHx8ICcnO1xuY29uc3Qgd2dVc2VyR3JvdXBzOiBzdHJpbmdbXSA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpIHx8IFtdO1xuY29uc3Qgd2dVc2VyVmFyaWFudDogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKTtcblxuY29uc3QgR09PRF9WQVJJQU5UUzogc3RyaW5nW10gPSBbJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J107XG5cbmV4cG9ydCB7R0FER0VUX05BTUUsIFNZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1QsIHdnVXNlck5hbWUsIHdnVXNlckdyb3Vwcywgd2dVc2VyVmFyaWFudCwgR09PRF9WQVJJQU5UU307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGRpYWxvZ1RpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZvciB5b3VyIGJldHRlciB1c2VyIGV4cGVyaWVuY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5oiR5Lus5biM5pyb5o+Q5L6b5pu05aW955qE6ZiF6K+75L2T6aqMJyxcblx0XHRcdCd6aC1oYW50JzogJ+aIkeWAkeW4jOacm+aPkOS+m+abtOWlveeahOmWseiugOmrlOmplycsXG5cdFx0fSksXG5cdFx0ZGlhbG9nRGVzYzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXaGljaCBDaGluZXNlIHZhcmlhbnRzIGRvIHlvdSBwcmVmZXI/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4uumBv+WFjeWGheWuueaYvuekuueugOe5gea3t+adgu+8jOivt+mAieaLqeaCqOWBj+WlveeahOS4reaWh+WPmOS9k+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfngrrpgb/lhY3lhaflrrnpoa/npLrnsKHnuYHmt7fpm5zvvIzoq4vpgbjmk4fmgqjlgY/lpb3nmoTkuK3mlofororpq5TjgIInLFxuXHRcdH0pLFxuXHRcdGRpYWxvZ0Rlc2NFeHRlbmQxOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RvIG1lZXQgbmVlZHMgb2YgcmVhZGVycywgWW91c2hvdSBBcnhpdiB1dGlsaXplcyBhIGNvbnZlcnNpb24gbWVjaGFuaXNtIGZvciBDaGluZXNlIGxhbmd1YWdlIHZhcmlhbnRzLicsXG5cdFx0XHQnemgtaGFucyc6ICfkuLrmu6HotrPlkITlnLDkuK3mlofnlKjmiLfpnIDmsYLvvIzmnInlhb3moaPmoYjppobph4fnlKjoh6rliqjovazmjaLmioDmnK/vvIzmj5DkvpvkuI3lkIzkuK3mloflj5jkvZPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn54K65ru/6Laz5ZCE5Zyw5Lit5paH5L2/55So6ICF6ZyA5rGC77yM5pyJ54245qqU5qGI6aSo5o6h55So6Ieq5YuV6L2J5o+b5oqA6KGT77yM5o+Q5L6b5LiN5ZCM5Lit5paH6K6K6auU44CCJyxcblx0XHR9KSxcblx0XHRkaWFsb2dEZXNjRXh0ZW5kMjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGb3IgeW91ciBiZXR0ZXIgZXhwZXJpZW5jZSwgd2Ugd291bGQgYXBwcmVjaWF0ZSBpdCBpZiB5b3Ugc2VsZWN0IHlvdXIgcHJlZmVycmVkIENoaW5lc2UgbGFuZ3VhZ2UgdmFyaWFudC4gV2UgYXBvbG9naXplIGZvciBhbnkgaW5jb252ZW5pZW5jZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Li65LqG56Gu5L+d5oKo55qE6ZiF6K+75L2T6aqM77yM5oiR5Lus5bu66K6u5oKo5Y+v5Lul6YCJ5oup5omA5YGP5aW955qE5Lit5paH6K+t6KiA5Y+Y5L2T44CC57uZ5oKo5bim5p2l5LiN5L6/77yM5pWs6K+36LCF6Kej77yBJyxcblx0XHRcdCd6aC1oYW50JzogJ+eCuuS6hueiuuS/neaCqOeahOmWseiugOmrlOmpl++8jOaIkeWAkeW7uuitsOaCqOWPr+S7pemBuOaTh+aJgOWBj+WlveeahOS4reaWh+iqnuiogOiuiumrlOOAgue1puaCqOW4tuS+huS4jeS+v++8jOaVrOiri+irkuino++8gScsXG5cdFx0fSksXG5cdFx0J3ZhcmlhbnQtemgtY24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NoaW5lc2UgTWFpbmxhbmQgKFNpbXBsaWZpZWQpICjkuK3lm73lpKfpmYbnroDkvZMpJyxcblx0XHRcdHpoOiAn5Lit5Zu95aSn6ZmG566A5L2TJyxcblx0XHR9KSxcblx0XHQndmFyaWFudC16aC1oayc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSG9uZyBLb25nLCBDaGluYSAoVHJhZGl0aW9uYWwpICjkuK3lnIvpppnmuK/nuYHpq5QpJyxcblx0XHRcdHpoOiAn5Lit5ZyL6aaZ5riv57mB6auUJyxcblx0XHR9KSxcblx0XHQndmFyaWFudC16aC1tbyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTWFjYXUsIENoaW5hIChUcmFkaXRpb25hbCkgKOS4reWci+a+s+mWgOe5gemrlCknLFxuXHRcdFx0emg6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHRcdH0pLFxuXHRcdCd2YXJpYW50LXpoLW15JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYWxheXNpYSAoU2ltcGxpZmllZCkgKOmprOadpeilv+S6mueugOS9kyknLFxuXHRcdFx0emg6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHRcdH0pLFxuXHRcdCd2YXJpYW50LXpoLXNnJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTaW5nYXBvcmUgKFNpbXBsaWZpZWQpICjpqazmnaXopb/kuprnroDkvZMpJyxcblx0XHRcdHpoOiAn5paw5Yqg5Z2h566A5L2TJyxcblx0XHR9KSxcblx0XHQndmFyaWFudC16aC10dyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYSAoVHJhZGl0aW9uYWwpICjkuK3lnIvoh7rngaPnuYHpq5QpJyxcblx0XHRcdHpoOiAn5Lit5ZyL6Ie654Gj57mB6auUJyxcblx0XHR9KSxcblx0XHRwcml2YWN5Tm90aWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdXIgY2hvaWNlcyB3aWxsIGJlIG9ubHkgc3RvcmVkIGluIHlvdXIgYnJvd3NlciBvbmx5LiBXZSB3aWxsIG5vdCB0cmFjayB5b3VyIGNob2ljZXMuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOeahOmAieaLqeWwhuS7heWtmOWCqOWcqOaCqOeahOa1j+iniOWZqOS4re+8jOaIkeS7rOS4jeS8mui/vei4quaCqOeahOmAieaLqeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjnmoTpgbjmk4flsIflg4XlrZjlhLLlnKjmgqjnmoTngI/opr3lmajkuK3vvIzmiJHlgJHkuI3mnIPov73ouaTmgqjnmoTpgbjmk4fjgIInLFxuXHRcdH0pLFxuXHRcdGNvbmZpcm06IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybScsXG5cdFx0XHQnemgtaGFucyc6ICfnoa7orqQnLFxuXHRcdFx0J3poLWhhbnQnOiAn56K66KqNJyxcblx0XHR9KSxcblx0XHRjYW5jZWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnY2FuY2VsJyxcblx0XHRcdHpoOiAn5Y+W5raIJyxcblx0XHR9KSxcblx0XHQnQXJlIHlvdSBzdXJlPyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJlIHlvdSBzdXJlIHRvIGNhbmNlbD8gSWYgeW91IGNob29zZSBcImNhbmNlbFwiLCB5b3UgbWF5IGZpbmQgbWl4ZWQgdHJhZGl0aW9uYWwgYW5kIHNpbXBsaWZpZWQgQ2hpbmVzZSBjaGFyYWN0ZXJzLCB3aGljaCB3aWxsIGFmZmVjdCB5b3VyIHVzZXIgZXhwZXJpZW5jZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oKo56Gu5a6a6KaB5Y+W5raI5ZCX77yf5Y+W5raI5ZCO77yM55WM6Z2i5Y+v6IO95Ye6546w57mB566A5re35p2C546w6LGh77yM5b2x5ZON55So5oi35L2T6aqM44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+aCqOeiuuWumuimgeWPlua2iOWXju+8n+WPlua2iOW+jO+8jOS7i+mdouWPr+iDveWHuuePvue5geewoea3t+mbnOePvuixoe+8jOW9semfv+S9v+eUqOiAhemrlOmpl+OAgicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7R0FER0VUX05BTUUsIFNZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1QsIHdnVXNlckdyb3Vwcywgd2dVc2VyTmFtZSwgd2dVc2VyVmFyaWFudH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgbG9jYXRpb25IcmVmOiBzdHJpbmcgPSBsb2NhdGlvbi5ocmVmO1xuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ05vdGlmeUNvbnZlcnNpb24vMi4wJyk7XG5cbmNvbnN0IGlzRXhwZXJpZW5jZWRVc2VyID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRpZiAoIXdnVXNlck5hbWUgfHwgIXdnVXNlckdyb3Vwcykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gKFxuXHRcdFsnc3lzb3AnLCAnYnVyZWF1Y3JhdCddLnNvbWUoKGVsZW1lbnQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0cmV0dXJuIHdnVXNlckdyb3Vwcy5pbmNsdWRlcyhlbGVtZW50KTtcblx0XHR9KSB8fFxuXHRcdFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh3Z1VzZXJOYW1lKSB8fFxuXHRcdFdFQk1BU1RFUl9MSVNULmluY2x1ZGVzKHdnVXNlck5hbWUpXG5cdCk7XG59O1xuXG5jb25zdCBpc0xhbmd1YWdlU2V0ID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRpZiAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCd2YXJpYW50JykgfHwgbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd1c2VsYW5nJykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBpc1dyb25nVVJMID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRpZiAobG9jYXRpb25IcmVmLmluY2x1ZGVzKCcvemgvJykgfHwgbG9jYXRpb25IcmVmLmluY2x1ZGVzKCcvemgtaGFucy8nKSB8fCBsb2NhdGlvbkhyZWYuaW5jbHVkZXMoJy96aC1oYW50LycpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3Qgc2hvd0RpYWxvZyA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3QgZGlhbG9nVGl0bGVJY29uOiBPTy51aS5JY29uV2lkZ2V0ID0gbmV3IE9PLnVpLkljb25XaWRnZXQoe1xuXHRcdGljb246ICdsYW5ndWFnZScsXG5cdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ2RpYWxvZ1RpdGxlJyksXG5cdH0pO1xuXHRjb25zdCBkaWFsb2dUaXRsZTogT08udWkuTGFiZWxXaWRnZXQgPSBuZXcgT08udWkuTGFiZWxXaWRnZXQoe1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdkaWFsb2dUaXRsZScpLFxuXHR9KTtcblxuXHRjb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IChcblx0XHR2YXJpYW50OiAnemgtY24nIHwgJ3poLWhrJyB8ICd6aC10dycgfCAnemgtc2cnIHwgJ3poLW15JyB8ICd6aC1tbydcblx0KTogT08udWkuQnV0dG9uT3B0aW9uV2lkZ2V0ID0+IHtcblx0XHRyZXR1cm4gbmV3IE9PLnVpLkJ1dHRvbk9wdGlvbldpZGdldCh7XG5cdFx0XHRkYXRhOiB2YXJpYW50LFxuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoYHZhcmlhbnQtJHt2YXJpYW50fWApLFxuXHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoYHZhcmlhbnQtJHt2YXJpYW50fWApLFxuXHRcdH0pO1xuXHR9O1xuXHQvLyBDcmVhdGUgYSBuZXcgQnV0dG9uU2VsZWN0V2lkZ2V0IGFuZCBhZGQgdGhlIGJ1dHRvbiBvcHRpb25zIHRvIGl0XG5cdC8vIHZpYSB0aGUgQnV0dG9uU2VsZWN0V2lkZ2V0J3MgJ2l0ZW1zJyBjb25maWcgb3B0aW9uLlxuXHRjb25zdCBidXR0b25TZWxlY3Q6IE9PLnVpLkJ1dHRvblNlbGVjdFdpZGdldCA9IG5ldyBPTy51aS5CdXR0b25TZWxlY3RXaWRnZXQoe1xuXHRcdGl0ZW1zOiBbXG5cdFx0XHRnZW5lcmF0ZUJ1dHRvbignemgtY24nKSxcblx0XHRcdGdlbmVyYXRlQnV0dG9uKCd6aC1oaycpLFxuXHRcdFx0Z2VuZXJhdGVCdXR0b24oJ3poLXR3JyksXG5cdFx0XHRnZW5lcmF0ZUJ1dHRvbignemgtc2cnKSxcblx0XHRcdGdlbmVyYXRlQnV0dG9uKCd6aC1teScpLFxuXHRcdFx0Z2VuZXJhdGVCdXR0b24oJ3poLW1vJyksXG5cdFx0XSxcblx0fSk7XG5cblx0aWYgKHByZWZlcnJlZFZhcmlhbnQgPT09IG51bGwpIHtcblx0XHRidXR0b25TZWxlY3Quc2VsZWN0SXRlbUJ5RGF0YSgnemgtY24nKTtcblx0fSBlbHNlIHtcblx0XHRidXR0b25TZWxlY3Quc2VsZWN0SXRlbUJ5RGF0YShwcmVmZXJyZWRWYXJpYW50KTtcblx0fVxuXG5cdGNvbnN0ICRkaWFsb2dUaXRsZTogSlF1ZXJ5ID0gJCgnPHNwYW4+Jylcblx0XHQuYWRkQ2xhc3MoJ2dhZGdldC1ub3RpZnlfY29udmVyc2lvbl9fdGl0bGUnKVxuXHRcdC5hcHBlbmQoZGlhbG9nVGl0bGVJY29uLiRlbGVtZW50LCBkaWFsb2dUaXRsZS4kZWxlbWVudCk7XG5cdGNvbnN0ICRkaWFsb2dNZXNzYWdlOiBKUXVlcnkgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKCdnYWRnZXQtbm90aWZ5X2NvbnZlcnNpb25fX21lc3NhZ2UnKVxuXHRcdC5hcHBlbmQoXG5cdFx0XHQkKCc8cD4nKS50ZXh0KGdldE1lc3NhZ2UoJ2RpYWxvZ0Rlc2MnKSksXG5cdFx0XHQkKCc8cD4nKS5hZGRDbGFzcygnZ2FkZ2V0LW5vdGlmeV9jb252ZXJzaW9uX19tZXNzYWdlX2V4dGVuZCcpLnRleHQoZ2V0TWVzc2FnZSgnZGlhbG9nRGVzY0V4dGVuZDEnKSksXG5cdFx0XHQkKCc8cD4nKS5hZGRDbGFzcygnZ2FkZ2V0LW5vdGlmeV9jb252ZXJzaW9uX19tZXNzYWdlX2V4dGVuZCcpLnRleHQoZ2V0TWVzc2FnZSgnZGlhbG9nRGVzY0V4dGVuZDInKSksXG5cdFx0XHRidXR0b25TZWxlY3QuJGVsZW1lbnQuYWRkQ2xhc3MoJ2dhZGdldC1ub3RpZnlfY29udmVyc2lvbl9fc2VsZWN0aW9uJyksXG5cdFx0XHQkKCc8cD4nKS5hZGRDbGFzcygnZ2FkZ2V0LW5vdGlmeV9jb252ZXJzaW9uX19tZXNzYWdlX3ByaXZhY3ktbm90aWNlJykudGV4dChnZXRNZXNzYWdlKCdwcml2YWN5Tm90aWNlJykpXG5cdFx0KTtcblxuXHRjb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkKCdib2R5JykpO1xuXG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHRjb25zdCBtZXNzYWdlRGlhbG9nUHJvcGVydHk6IE9PLnVpLldpbmRvd01hbmFnZXIuV2luZG93T3BlbmluZ0RhdGEgPSB7XG5cdFx0dGl0bGU6ICRkaWFsb2dUaXRsZSxcblx0XHRtZXNzYWdlOiAkZGlhbG9nTWVzc2FnZSxcblx0XHRhY3Rpb25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2NvbmZpcm0nLFxuXHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHRcdGxhYmVsOiAkKCc8Yj4nKS50ZXh0KGdldE1lc3NhZ2UoJ2NvbmZpcm0nKSksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdjYW5jZWwnLFxuXHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHRcdGxhYmVsOiAkKCc8Yj4nKS50ZXh0KGdldE1lc3NhZ2UoJ2NhbmNlbCcpKSxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRzaXplOiAnbWVkaXVtJyxcblx0fTtcblxuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW21lc3NhZ2VEaWFsb2ddKTtcblx0dm9pZCB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3cobWVzc2FnZURpYWxvZywgbWVzc2FnZURpYWxvZ1Byb3BlcnR5KTtcblxuXHRtZXNzYWdlRGlhbG9nLmdldEFjdGlvblByb2Nlc3MgPSAoYWN0aW9uKTogT08udWkuUHJvY2VzcyA9PiB7XG5cdFx0Y29uc3QgY2xlYXJXaW5kb3dzID0gKHZhcmlhbnQ/OiBzdHJpbmcpID0+IHtcblx0XHRcdG13LnN0b3JhZ2Uuc2V0KEdBREdFVF9OQU1FLCB2YXJpYW50IHx8ICdoaWRlJyk7XG5cdFx0XHR2b2lkIHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdFx0fTtcblxuXHRcdHJldHVybiBuZXcgT08udWkuUHJvY2VzcygoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoYWN0aW9uID09PSAnY29uZmlybScpIHtcblx0XHRcdFx0Y29uc3QgVVJMX1JFR0VYOiBSZWdFeHAgPSAvKFxcL1xcL1teL10rXFwvKShbXi9dKykoXFwvKS87XG5cdFx0XHRcdGNvbnN0IHNlbGVjdGVkSXRlbTogT08udWkuT3B0aW9uV2lkZ2V0ID0gYnV0dG9uU2VsZWN0LmZpbmRTZWxlY3RlZEl0ZW0oKSBhcyBPTy51aS5PcHRpb25XaWRnZXQ7XG5cdFx0XHRcdGNvbnN0IHZhcmlhbnQ6IHN0cmluZyA9IHNlbGVjdGVkSXRlbS5nZXREYXRhKCkgYXMgc3RyaW5nO1xuXHRcdFx0XHRjbGVhcldpbmRvd3ModmFyaWFudCk7XG5cdFx0XHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykpIHtcblx0XHRcdFx0XHR2b2lkIGFwaS5zYXZlT3B0aW9uKCd2YXJpYW50JywgdmFyaWFudCkudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb25IcmVmLnJlcGxhY2UoVVJMX1JFR0VYLCAnJDF3aWtpJDMnKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb25IcmVmLnJlcGxhY2UoVVJMX1JFR0VYLCBgJDEke3ZhcmlhbnR9JDNgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dm9pZCBPTy51aS5jb25maXJtKGdldE1lc3NhZ2UoJ0FyZSB5b3Ugc3VyZT8nKSkudGhlbigoY29uZmlybWVkOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0aWYgKGNvbmZpcm1lZCkge1xuXHRcdFx0XHRcdFx0Y2xlYXJXaW5kb3dzKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcbn07XG5cbmNvbnN0IHByZWZlcnJlZFZhcmlhbnQ6IHN0cmluZyB8IG51bGwgPVxuXHQoKG13LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKSA/IG13LnVzZXIub3B0aW9ucy5nZXQoJ3ZhcmlhbnQnKSA6IG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKSkgYXMgc3RyaW5nKSA/PyBudWxsO1xuXG5leHBvcnQgY29uc3Qgbm90aWZ5Q29udmVyc2lvbiA9ICgpOiB2b2lkID0+IHtcblx0aWYgKCF3Z1VzZXJWYXJpYW50KSB7XG5cdFx0cmV0dXJuOyAvLyBvbiBTcGVjaWFsIHBhZ2VzXG5cdH1cblx0aWYgKGlzTGFuZ3VhZ2VTZXQoKSkge1xuXHRcdHJldHVybjsgLy8gc2V0IGB1c2VsYW5nYCBvciBgdmFyaWFudGAgZ2V0IHBhcmFtZXRlcnNcblx0fVxuXHRpZiAoaXNFeHBlcmllbmNlZFVzZXIoKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAocHJlZmVycmVkVmFyaWFudCA9PT0gbnVsbCB8fCBbJ3poJywgJ3poLWhhbnMnLCAnemgtaGFudCddLmluY2x1ZGVzKHByZWZlcnJlZFZhcmlhbnQpIHx8IGlzV3JvbmdVUkwoKSkge1xuXHRcdHNob3dEaWFsb2coKTtcblx0fVxufTtcbiIsICJpbXBvcnQge3dnVXNlclZhcmlhbnR9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5leHBvcnQgY29uc3QgcHJlc2VydmVWYXJpYW50ID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoXG5cdFx0IXdnVXNlclZhcmlhbnQgfHxcblx0XHQhd2dVc2VyVmFyaWFudC5pbmNsdWRlcygnemgtJykgfHxcblx0XHQhKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhgLyR7d2dVc2VyVmFyaWFudH0vYCkgJiYgbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd2YXJpYW50JykgIT09IHdnVXNlclZhcmlhbnQpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXHQkKGRvY3VtZW50KS5vbigna2V5ZG93biBtb3VzZWRvd24gdG91Y2hzdGFydCcsICdhJywgZnVuY3Rpb24gKCk6IHZvaWQge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuXHRcdGNvbnN0IG9yaWdpbmFsSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJChzZWxmKS5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKCFvcmlnaW5hbEhyZWYpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IHVyaTtcblx0XHR0cnkge1xuXHRcdFx0dXJpID0gbmV3IG13LlVyaShvcmlnaW5hbEhyZWYpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoISgndmFyaWFudCcgaW4gdXJpLnF1ZXJ5KSkge1xuXHRcdFx0aWYgKG9yaWdpbmFsSHJlZi5pbmNsdWRlcygnL3dpa2kvJykpIHtcblx0XHRcdFx0c2VsZi5ocmVmID0gYC8ke3dnVXNlclZhcmlhbnR9JHtvcmlnaW5hbEhyZWYuc2xpY2UoNSl9YDtcblx0XHRcdH0gZWxzZSBpZiAob3JpZ2luYWxIcmVmLmluY2x1ZGVzKCcvaW5kZXgucGhwPycpKSB7XG5cdFx0XHRcdHNlbGYuaHJlZiA9IHVyaVxuXHRcdFx0XHRcdC5leHRlbmQoe1xuXHRcdFx0XHRcdFx0dmFyaWFudDogd2dVc2VyVmFyaWFudCxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5nZXRSZWxhdGl2ZVBhdGgoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufTtcbiIsICJpbXBvcnQge0dBREdFVF9OQU1FLCBHT09EX1ZBUklBTlRTLCB3Z1VzZXJOYW1lfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtub3RpZnlDb252ZXJzaW9ufSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge3ByZXNlcnZlVmFyaWFudH0gZnJvbSAnLi9tb2R1bGVzL3ByZXNlcnZlVmFyaWFudCc7XG5cbigoKTogdm9pZCA9PiB7XG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpICE9PSAndmlldycpIHtcblx0XHRyZXR1cm47IC8vIOWPquWcqOa1j+iniOmhtemdouaXtuaYvuekulxuXHR9XG5cdGNvbnN0IHByZWZlcnJlZFZhcmlhbnQgPSAobXcuc3RvcmFnZS5nZXQoR0FER0VUX05BTUUpIHx8ICcnKS50b1N0cmluZygpO1xuXHRpZiAoIVsnaGlkZScsIC4uLkdPT0RfVkFSSUFOVFNdLmluY2x1ZGVzKHByZWZlcnJlZFZhcmlhbnQpKSB7XG5cdFx0Ly8g5piv5ZCm54K56L+H4oCc5LiN5YaN5o+Q56S64oCd5oiW5a6M5oiQ6L+H6K6+572uXG5cdFx0JChub3RpZnlDb252ZXJzaW9uKTtcblx0fSBlbHNlIGlmICghd2dVc2VyTmFtZSkge1xuXHRcdCQocHJlc2VydmVWYXJpYW50KTtcblx0fVxufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsY0FBc0I7QUFFNUIsSUFBTUMscUJBQStCLENBQ3BDLFNBQ0EsV0FDQSxXQUNBLFdBQ0EseUJBQ0Esc0JBQ0EscUJBQ0Es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Z0I7RUFDbkIsV0FBVyxDQUFDNUYsWUFBWTtBQUN2QnlELE1BQUVvQyxlQUFlO0VBQ2xCO0FBQ0QsR0FBRzsiLAogICJuYW1lcyI6IFsiR0FER0VUX05BTUUiLCAiU1lTVEVNX1NDUklQVF9MSVNUIiwgIldFQk1BU1RFUl9MSVNUIiwgIndnVXNlck5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJ3Z1VzZXJHcm91cHMiLCAid2dVc2VyVmFyaWFudCIsICJHT09EX1ZBUklBTlRTIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImRpYWxvZ1RpdGxlIiwgImxvY2FsaXplIiwgImVuIiwgImRpYWxvZ0Rlc2MiLCAiZGlhbG9nRGVzY0V4dGVuZDEiLCAiZGlhbG9nRGVzY0V4dGVuZDIiLCAiemgiLCAicHJpdmFjeU5vdGljZSIsICJjb25maXJtIiwgImNhbmNlbCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImxvY2F0aW9uSHJlZiIsICJsb2NhdGlvbiIsICJocmVmIiwgImFwaSIsICJpbml0TXdBcGkiLCAiaXNFeHBlcmllbmNlZFVzZXIiLCAic29tZSIsICJlbGVtZW50IiwgImluY2x1ZGVzIiwgImlzTGFuZ3VhZ2VTZXQiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgImlzV3JvbmdVUkwiLCAic2hvd0RpYWxvZyIsICJkaWFsb2dUaXRsZUljb24iLCAiT08iLCAidWkiLCAiSWNvbldpZGdldCIsICJpY29uIiwgInRpdGxlIiwgIkxhYmVsV2lkZ2V0IiwgImxhYmVsIiwgImdlbmVyYXRlQnV0dG9uIiwgInZhcmlhbnQiLCAiQnV0dG9uT3B0aW9uV2lkZ2V0IiwgImRhdGEiLCAiY29uY2F0IiwgImJ1dHRvblNlbGVjdCIsICJCdXR0b25TZWxlY3RXaWRnZXQiLCAiaXRlbXMiLCAicHJlZmVycmVkVmFyaWFudCIsICJzZWxlY3RJdGVtQnlEYXRhIiwgIiRkaWFsb2dUaXRsZSIsICIkIiwgImFkZENsYXNzIiwgImFwcGVuZCIsICIkZWxlbWVudCIsICIkZGlhbG9nTWVzc2FnZSIsICJ0ZXh0IiwgIndpbmRvd01hbmFnZXIiLCAiV2luZG93TWFuYWdlciIsICJhcHBlbmRUbyIsICJtZXNzYWdlRGlhbG9nIiwgIk1lc3NhZ2VEaWFsb2ciLCAibWVzc2FnZURpYWxvZ1Byb3BlcnR5IiwgIm1lc3NhZ2UiLCAiYWN0aW9ucyIsICJhY3Rpb24iLCAiZmxhZ3MiLCAic2l6ZSIsICJhZGRXaW5kb3dzIiwgIm9wZW5XaW5kb3ciLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJjbGVhcldpbmRvd3MiLCAic3RvcmFnZSIsICJzZXQiLCAiUHJvY2VzcyIsICJVUkxfUkVHRVgiLCAic2VsZWN0ZWRJdGVtIiwgImZpbmRTZWxlY3RlZEl0ZW0iLCAiZ2V0RGF0YSIsICJzYXZlT3B0aW9uIiwgInRoZW4iLCAicmVwbGFjZSIsICJjb25maXJtZWQiLCAiX3JlZiIsICJ1c2VyIiwgIm9wdGlvbnMiLCAibm90aWZ5Q29udmVyc2lvbiIsICJwcmVzZXJ2ZVZhcmlhbnQiLCAid2luZG93IiwgInBhdGhuYW1lIiwgImRvY3VtZW50IiwgIm9uIiwgInNlbGYiLCAib3JpZ2luYWxIcmVmIiwgImF0dHIiLCAidXJpIiwgIlVyaSIsICJxdWVyeSIsICJzbGljZSIsICJleHRlbmQiLCAiZ2V0UmVsYXRpdmVQYXRoIiwgInByZWZlcnJlZFZhcmlhbnQyIiwgInRvU3RyaW5nIl0KfQo=
