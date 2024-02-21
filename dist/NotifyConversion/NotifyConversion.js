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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGlmeUNvbnZlcnNpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvTm90aWZ5Q29udmVyc2lvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL05vdGlmeUNvbnZlcnNpb24vbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9Ob3RpZnlDb252ZXJzaW9uL21vZHVsZXMvcHJlc2VydmVWYXJpYW50LnRzIiwgInNyYy9Ob3RpZnlDb252ZXJzaW9uL05vdGlmeUNvbnZlcnNpb24udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IEdBREdFVF9OQU1FOiBzdHJpbmcgPSAnZXh0LmdhZGdldC5Ob3RpZnlDb252ZXJzaW9uJztcblxuY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmnInlhb3moaPmoYjppobnvJbogIUnLFxuXHQn5pyJ5YW95qGj5qGI6aaG56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5cbmNvbnN0IFdFQk1BU1RFUl9MSVNUOiBzdHJpbmdbXSA9IFsnUWl1V2VuJywgJ1FpdVdlbiBmb3IgQWNjb3VudHMnLCAnUWl1d2VuU29jaWFsTWVkaWEnXTtcblxuY29uc3Qgd2dVc2VyTmFtZTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpIHx8ICcnO1xuY29uc3Qgd2dVc2VyR3JvdXBzOiBzdHJpbmdbXSA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpIHx8IFtdO1xuY29uc3Qgd2dVc2VyVmFyaWFudDogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKTtcblxuY29uc3QgR09PRF9WQVJJQU5UUzogc3RyaW5nW10gPSBbJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J107XG5cbmV4cG9ydCB7R0FER0VUX05BTUUsIFNZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1QsIHdnVXNlck5hbWUsIHdnVXNlckdyb3Vwcywgd2dVc2VyVmFyaWFudCwgR09PRF9WQVJJQU5UU307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGRpYWxvZ1RpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZvciB5b3VyIGJldHRlciB1c2VyIGV4cGVyaWVuY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5oiR5Lus5biM5pyb5o+Q5L6b5pu05aW955qE6ZiF6K+75L2T6aqMJyxcblx0XHRcdCd6aC1oYW50JzogJ+aIkeWAkeW4jOacm+aPkOS+m+abtOWlveeahOmWseiugOmrlOmplycsXG5cdFx0fSksXG5cdFx0ZGlhbG9nRGVzYzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXaGljaCBDaGluZXNlIHZhcmlhbnRzIGRvIHlvdSBwcmVmZXI/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4uumBv+WFjeWGheWuueaYvuekuueugOe5gea3t+adgu+8jOivt+mAieaLqeaCqOWBj+WlveeahOS4reaWh+WPmOS9k+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfngrrpgb/lhY3lhaflrrnpoa/npLrnsKHnuYHmt7fpm5zvvIzoq4vpgbjmk4fmgqjlgY/lpb3nmoTkuK3mlofororpq5TjgIInLFxuXHRcdH0pLFxuXHRcdGRpYWxvZ0Rlc2NFeHRlbmQxOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RvIG1lZXQgbmVlZHMgb2YgcmVhZGVycywgWW91c2hvdSBBcnhpdiB1dGlsaXplcyBhIGNvbnZlcnNpb24gbWVjaGFuaXNtIGZvciBDaGluZXNlIGxhbmd1YWdlIHZhcmlhbnRzLicsXG5cdFx0XHQnemgtaGFucyc6ICfkuLrmu6HotrPlkITlnLDkuK3mlofnlKjmiLfpnIDmsYLvvIzmnInlhb3moaPmoYjppobph4fnlKjoh6rliqjovazmjaLmioDmnK/vvIzmj5DkvpvkuI3lkIzkuK3mloflj5jkvZPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn54K65ru/6Laz5ZCE5Zyw5Lit5paH5L2/55So6ICF6ZyA5rGC77yM5pyJ54245qqU5qGI6aSo5o6h55So6Ieq5YuV6L2J5o+b5oqA6KGT77yM5o+Q5L6b5LiN5ZCM5Lit5paH6K6K6auU44CCJyxcblx0XHR9KSxcblx0XHRkaWFsb2dEZXNjRXh0ZW5kMjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGb3IgeW91ciBiZXR0ZXIgZXhwZXJpZW5jZSwgd2Ugd291bGQgYXBwcmVjaWF0ZSBpdCBpZiB5b3Ugc2VsZWN0IHlvdXIgcHJlZmVycmVkIENoaW5lc2UgbGFuZ3VhZ2UgdmFyaWFudC4gV2UgYXBvbG9naXplIGZvciBhbnkgaW5jb252ZW5pZW5jZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Li65LqG56Gu5L+d5oKo55qE6ZiF6K+75L2T6aqM77yM5oiR5Lus5bu66K6u5oKo5Y+v5Lul6YCJ5oup5omA5YGP5aW955qE5Lit5paH6K+t6KiA5Y+Y5L2T44CC57uZ5oKo5bim5p2l5LiN5L6/77yM5pWs6K+36LCF6Kej77yBJyxcblx0XHRcdCd6aC1oYW50JzogJ+eCuuS6hueiuuS/neaCqOeahOmWseiugOmrlOmpl++8jOaIkeWAkeW7uuitsOaCqOWPr+S7pemBuOaTh+aJgOWBj+WlveeahOS4reaWh+iqnuiogOiuiumrlOOAgue1puaCqOW4tuS+huS4jeS+v++8jOaVrOiri+irkuino++8gScsXG5cdFx0fSksXG5cdFx0J3ZhcmlhbnQtemgtY24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NoaW5lc2UgTWFpbmxhbmQgKFNpbXBsaWZpZWQpICjkuK3lm73lpKfpmYbnroDkvZMpJyxcblx0XHRcdHpoOiAn5Lit5Zu95aSn6ZmG566A5L2TJyxcblx0XHR9KSxcblx0XHQndmFyaWFudC16aC1oayc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSG9uZyBLb25nLCBDaGluYSAoVHJhZGl0aW9uYWwpICjkuK3lnIvpppnmuK/nuYHpq5QpJyxcblx0XHRcdHpoOiAn5Lit5ZyL6aaZ5riv57mB6auUJyxcblx0XHR9KSxcblx0XHQndmFyaWFudC16aC1tbyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTWFjYXUsIENoaW5hIChUcmFkaXRpb25hbCkgKOS4reWci+a+s+mWgOe5gemrlCknLFxuXHRcdFx0emg6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHRcdH0pLFxuXHRcdCd2YXJpYW50LXpoLW15JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYWxheXNpYSAoU2ltcGxpZmllZCkgKOmprOadpeilv+S6mueugOS9kyknLFxuXHRcdFx0emg6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHRcdH0pLFxuXHRcdCd2YXJpYW50LXpoLXNnJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTaW5nYXBvcmUgKFNpbXBsaWZpZWQpICjpqazmnaXopb/kuprnroDkvZMpJyxcblx0XHRcdHpoOiAn5paw5Yqg5Z2h566A5L2TJyxcblx0XHR9KSxcblx0XHQndmFyaWFudC16aC10dyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYSAoVHJhZGl0aW9uYWwpICjkuK3lnIvoh7rngaPnuYHpq5QpJyxcblx0XHRcdHpoOiAn5Lit5ZyL6Ie654Gj57mB6auUJyxcblx0XHR9KSxcblx0XHRwcml2YWN5Tm90aWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdXIgY2hvaWNlcyB3aWxsIGJlIG9ubHkgc3RvcmVkIGluIHlvdXIgYnJvd3NlciBvbmx5LiBXZSB3aWxsIG5vdCB0cmFjayB5b3VyIGNob2ljZXMuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOeahOmAieaLqeWwhuS7heWtmOWCqOWcqOaCqOeahOa1j+iniOWZqOS4re+8jOaIkeS7rOS4jeS8mui/vei4quaCqOeahOmAieaLqeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjnmoTpgbjmk4flsIflg4XlrZjlhLLlnKjmgqjnmoTngI/opr3lmajkuK3vvIzmiJHlgJHkuI3mnIPov73ouaTmgqjnmoTpgbjmk4fjgIInLFxuXHRcdH0pLFxuXHRcdGNvbmZpcm06IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybScsXG5cdFx0XHQnemgtaGFucyc6ICfnoa7orqQnLFxuXHRcdFx0J3poLWhhbnQnOiAn56K66KqNJyxcblx0XHR9KSxcblx0XHRjYW5jZWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnY2FuY2VsJyxcblx0XHRcdHpoOiAn5Y+W5raIJyxcblx0XHR9KSxcblx0XHQnQXJlIHlvdSBzdXJlPyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJlIHlvdSBzdXJlIHRvIGNhbmNlbD8gSWYgeW91IGNob29zZSBcImNhbmNlbFwiLCB5b3UgbWF5IGZpbmQgbWl4ZWQgdHJhZGl0aW9uYWwgYW5kIHNpbXBsaWZpZWQgQ2hpbmVzZSBjaGFyYWN0ZXJzLCB3aGljaCB3aWxsIGFmZmVjdCB5b3VyIHVzZXIgZXhwZXJpZW5jZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oKo56Gu5a6a6KaB5Y+W5raI5ZCX77yf5Y+W5raI5ZCO77yM55WM6Z2i5Y+v6IO95Ye6546w57mB566A5re35p2C546w6LGh77yM5b2x5ZON55So5oi35L2T6aqM44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+aCqOeiuuWumuimgeWPlua2iOWXju+8n+WPlua2iOW+jO+8jOS7i+mdouWPr+iDveWHuuePvue5geewoea3t+mbnOePvuixoe+8jOW9semfv+S9v+eUqOiAhemrlOmpl+OAgicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7R0FER0VUX05BTUUsIFNZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1QsIHdnVXNlckdyb3Vwcywgd2dVc2VyTmFtZSwgd2dVc2VyVmFyaWFudH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgbG9jYXRpb25IcmVmOiBzdHJpbmcgPSBsb2NhdGlvbi5ocmVmO1xuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ05vdGlmeUNvbnZlcnNpb24vMi4wJyk7XG5cbmNvbnN0IGlzRXhwZXJpZW5jZWRVc2VyID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRpZiAoIXdnVXNlck5hbWUgfHwgIXdnVXNlckdyb3Vwcykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gKFxuXHRcdFsnc3lzb3AnLCAnc2VuaW9yZWRpdG9yJywgJ2J1cmVhdWNyYXQnXS5zb21lKChlbGVtZW50OiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRcdHJldHVybiB3Z1VzZXJHcm91cHMuaW5jbHVkZXMoZWxlbWVudCk7XG5cdFx0fSkgfHxcblx0XHRTWVNURU1fU0NSSVBUX0xJU1QuaW5jbHVkZXMod2dVc2VyTmFtZSkgfHxcblx0XHRXRUJNQVNURVJfTElTVC5pbmNsdWRlcyh3Z1VzZXJOYW1lKVxuXHQpO1xufTtcblxuY29uc3QgaXNMYW5ndWFnZVNldCA9ICgpOiBib29sZWFuID0+IHtcblx0aWYgKG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndmFyaWFudCcpIHx8IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlbGFuZycpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNXcm9uZ1VSTCA9ICgpOiBib29sZWFuID0+IHtcblx0aWYgKGxvY2F0aW9uSHJlZi5pbmNsdWRlcygnL3poLycpIHx8IGxvY2F0aW9uSHJlZi5pbmNsdWRlcygnL3poLWhhbnMvJykgfHwgbG9jYXRpb25IcmVmLmluY2x1ZGVzKCcvemgtaGFudC8nKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHNob3dEaWFsb2cgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IGRpYWxvZ1RpdGxlSWNvbjogT08udWkuSWNvbldpZGdldCA9IG5ldyBPTy51aS5JY29uV2lkZ2V0KHtcblx0XHRpY29uOiAnbGFuZ3VhZ2UnLFxuXHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdkaWFsb2dUaXRsZScpLFxuXHR9KTtcblx0Y29uc3QgZGlhbG9nVGl0bGU6IE9PLnVpLkxhYmVsV2lkZ2V0ID0gbmV3IE9PLnVpLkxhYmVsV2lkZ2V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnZGlhbG9nVGl0bGUnKSxcblx0fSk7XG5cblx0Y29uc3QgZ2VuZXJhdGVCdXR0b24gPSAoXG5cdFx0dmFyaWFudDogJ3poLWNuJyB8ICd6aC1oaycgfCAnemgtdHcnIHwgJ3poLXNnJyB8ICd6aC1teScgfCAnemgtbW8nXG5cdCk6IE9PLnVpLkJ1dHRvbk9wdGlvbldpZGdldCA9PiB7XG5cdFx0cmV0dXJuIG5ldyBPTy51aS5CdXR0b25PcHRpb25XaWRnZXQoe1xuXHRcdFx0ZGF0YTogdmFyaWFudCxcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKGB2YXJpYW50LSR7dmFyaWFudH1gKSxcblx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKGB2YXJpYW50LSR7dmFyaWFudH1gKSxcblx0XHR9KTtcblx0fTtcblx0Ly8gQ3JlYXRlIGEgbmV3IEJ1dHRvblNlbGVjdFdpZGdldCBhbmQgYWRkIHRoZSBidXR0b24gb3B0aW9ucyB0byBpdFxuXHQvLyB2aWEgdGhlIEJ1dHRvblNlbGVjdFdpZGdldCdzICdpdGVtcycgY29uZmlnIG9wdGlvbi5cblx0Y29uc3QgYnV0dG9uU2VsZWN0OiBPTy51aS5CdXR0b25TZWxlY3RXaWRnZXQgPSBuZXcgT08udWkuQnV0dG9uU2VsZWN0V2lkZ2V0KHtcblx0XHRpdGVtczogW1xuXHRcdFx0Z2VuZXJhdGVCdXR0b24oJ3poLWNuJyksXG5cdFx0XHRnZW5lcmF0ZUJ1dHRvbignemgtaGsnKSxcblx0XHRcdGdlbmVyYXRlQnV0dG9uKCd6aC10dycpLFxuXHRcdFx0Z2VuZXJhdGVCdXR0b24oJ3poLXNnJyksXG5cdFx0XHRnZW5lcmF0ZUJ1dHRvbignemgtbXknKSxcblx0XHRcdGdlbmVyYXRlQnV0dG9uKCd6aC1tbycpLFxuXHRcdF0sXG5cdH0pO1xuXG5cdGlmIChwcmVmZXJyZWRWYXJpYW50ID09PSBudWxsKSB7XG5cdFx0YnV0dG9uU2VsZWN0LnNlbGVjdEl0ZW1CeURhdGEoJ3poLWNuJyk7XG5cdH0gZWxzZSB7XG5cdFx0YnV0dG9uU2VsZWN0LnNlbGVjdEl0ZW1CeURhdGEocHJlZmVycmVkVmFyaWFudCk7XG5cdH1cblxuXHRjb25zdCAkZGlhbG9nVGl0bGU6IEpRdWVyeSA9ICQoJzxzcGFuPicpXG5cdFx0LmFkZENsYXNzKCdnYWRnZXQtbm90aWZ5X2NvbnZlcnNpb25fX3RpdGxlJylcblx0XHQuYXBwZW5kKGRpYWxvZ1RpdGxlSWNvbi4kZWxlbWVudCwgZGlhbG9nVGl0bGUuJGVsZW1lbnQpO1xuXHRjb25zdCAkZGlhbG9nTWVzc2FnZTogSlF1ZXJ5ID0gJCgnPGRpdj4nKVxuXHRcdC5hZGRDbGFzcygnZ2FkZ2V0LW5vdGlmeV9jb252ZXJzaW9uX19tZXNzYWdlJylcblx0XHQuYXBwZW5kKFxuXHRcdFx0JCgnPHA+JykudGV4dChnZXRNZXNzYWdlKCdkaWFsb2dEZXNjJykpLFxuXHRcdFx0JCgnPHA+JykuYWRkQ2xhc3MoJ2dhZGdldC1ub3RpZnlfY29udmVyc2lvbl9fbWVzc2FnZV9leHRlbmQnKS50ZXh0KGdldE1lc3NhZ2UoJ2RpYWxvZ0Rlc2NFeHRlbmQxJykpLFxuXHRcdFx0JCgnPHA+JykuYWRkQ2xhc3MoJ2dhZGdldC1ub3RpZnlfY29udmVyc2lvbl9fbWVzc2FnZV9leHRlbmQnKS50ZXh0KGdldE1lc3NhZ2UoJ2RpYWxvZ0Rlc2NFeHRlbmQyJykpLFxuXHRcdFx0YnV0dG9uU2VsZWN0LiRlbGVtZW50LmFkZENsYXNzKCdnYWRnZXQtbm90aWZ5X2NvbnZlcnNpb25fX3NlbGVjdGlvbicpLFxuXHRcdFx0JCgnPHA+JykuYWRkQ2xhc3MoJ2dhZGdldC1ub3RpZnlfY29udmVyc2lvbl9fbWVzc2FnZV9wcml2YWN5LW5vdGljZScpLnRleHQoZ2V0TWVzc2FnZSgncHJpdmFjeU5vdGljZScpKVxuXHRcdCk7XG5cblx0Y29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG5cdHdpbmRvd01hbmFnZXIuJGVsZW1lbnQuYXBwZW5kVG8oJCgnYm9keScpKTtcblxuXHRjb25zdCBtZXNzYWdlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0Y29uc3QgbWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0ge1xuXHRcdHRpdGxlOiAkZGlhbG9nVGl0bGUsXG5cdFx0bWVzc2FnZTogJGRpYWxvZ01lc3NhZ2UsXG5cdFx0YWN0aW9uczogW1xuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdjb25maXJtJyxcblx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHRsYWJlbDogJCgnPGI+JykudGV4dChnZXRNZXNzYWdlKCdjb25maXJtJykpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnY2FuY2VsJyxcblx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHRsYWJlbDogJCgnPGI+JykudGV4dChnZXRNZXNzYWdlKCdjYW5jZWwnKSksXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0c2l6ZTogJ21lZGl1bScsXG5cdH07XG5cblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFttZXNzYWdlRGlhbG9nXSk7XG5cdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSk7XG5cblx0bWVzc2FnZURpYWxvZy5nZXRBY3Rpb25Qcm9jZXNzID0gKGFjdGlvbik6IE9PLnVpLlByb2Nlc3MgPT4ge1xuXHRcdGNvbnN0IGNsZWFyV2luZG93cyA9ICh2YXJpYW50Pzogc3RyaW5nKSA9PiB7XG5cdFx0XHRtdy5zdG9yYWdlLnNldChHQURHRVRfTkFNRSwgdmFyaWFudCB8fCAnaGlkZScpO1xuXHRcdFx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gbmV3IE9PLnVpLlByb2Nlc3MoKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ2NvbmZpcm0nKSB7XG5cdFx0XHRcdGNvbnN0IFVSTF9SRUdFWDogUmVnRXhwID0gLyhcXC9cXC9bXi9dK1xcLykoW14vXSspKFxcLykvO1xuXHRcdFx0XHRjb25zdCBzZWxlY3RlZEl0ZW06IE9PLnVpLk9wdGlvbldpZGdldCA9IGJ1dHRvblNlbGVjdC5maW5kU2VsZWN0ZWRJdGVtKCkgYXMgT08udWkuT3B0aW9uV2lkZ2V0O1xuXHRcdFx0XHRjb25zdCB2YXJpYW50OiBzdHJpbmcgPSBzZWxlY3RlZEl0ZW0uZ2V0RGF0YSgpIGFzIHN0cmluZztcblx0XHRcdFx0Y2xlYXJXaW5kb3dzKHZhcmlhbnQpO1xuXHRcdFx0XHRpZiAobXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpKSB7XG5cdFx0XHRcdFx0dm9pZCBhcGkuc2F2ZU9wdGlvbigndmFyaWFudCcsIHZhcmlhbnQpLnRoZW4oKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uSHJlZi5yZXBsYWNlKFVSTF9SRUdFWCwgJyQxd2lraSQzJyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uSHJlZi5yZXBsYWNlKFVSTF9SRUdFWCwgYCQxJHt2YXJpYW50fSQzYCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZvaWQgT08udWkuY29uZmlybShnZXRNZXNzYWdlKCdBcmUgeW91IHN1cmU/JykpLnRoZW4oKGNvbmZpcm1lZDogYm9vbGVhbik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmIChjb25maXJtZWQpIHtcblx0XHRcdFx0XHRcdGNsZWFyV2luZG93cygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG59O1xuXG5jb25zdCBwcmVmZXJyZWRWYXJpYW50OiBzdHJpbmcgfCBudWxsID1cblx0KChtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykgPyBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykgOiBtdy5jb25maWcuZ2V0KCd3Z1VzZXJWYXJpYW50JykpIGFzIHN0cmluZykgPz8gbnVsbDtcblxuZXhwb3J0IGNvbnN0IG5vdGlmeUNvbnZlcnNpb24gPSAoKTogdm9pZCA9PiB7XG5cdGlmICghd2dVc2VyVmFyaWFudCkge1xuXHRcdHJldHVybjsgLy8gb24gU3BlY2lhbCBwYWdlc1xuXHR9XG5cdGlmIChpc0xhbmd1YWdlU2V0KCkpIHtcblx0XHRyZXR1cm47IC8vIHNldCBgdXNlbGFuZ2Agb3IgYHZhcmlhbnRgIGdldCBwYXJhbWV0ZXJzXG5cdH1cblx0aWYgKGlzRXhwZXJpZW5jZWRVc2VyKCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKHByZWZlcnJlZFZhcmlhbnQgPT09IG51bGwgfHwgWyd6aCcsICd6aC1oYW5zJywgJ3poLWhhbnQnXS5pbmNsdWRlcyhwcmVmZXJyZWRWYXJpYW50KSB8fCBpc1dyb25nVVJMKCkpIHtcblx0XHRzaG93RGlhbG9nKCk7XG5cdH1cbn07XG4iLCAiaW1wb3J0IHt3Z1VzZXJWYXJpYW50fSBmcm9tICcuL2NvbnN0YW50JztcblxuZXhwb3J0IGNvbnN0IHByZXNlcnZlVmFyaWFudCA9ICgpOiB2b2lkID0+IHtcblx0aWYgKFxuXHRcdCF3Z1VzZXJWYXJpYW50IHx8XG5cdFx0IXdnVXNlclZhcmlhbnQuaW5jbHVkZXMoJ3poLScpIHx8XG5cdFx0ISh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoYC8ke3dnVXNlclZhcmlhbnR9L2ApICYmIG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndmFyaWFudCcpICE9PSB3Z1VzZXJWYXJpYW50KVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0JChkb2N1bWVudCkub24oJ2tleWRvd24gbW91c2Vkb3duIHRvdWNoc3RhcnQnLCAnYScsIGZ1bmN0aW9uICgpOiB2b2lkIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcyBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblx0XHRjb25zdCBvcmlnaW5hbEhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICQoc2VsZikuYXR0cignaHJlZicpO1xuXHRcdGlmICghb3JpZ2luYWxIcmVmKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCB1cmk7XG5cdFx0dHJ5IHtcblx0XHRcdHVyaSA9IG5ldyBtdy5Vcmkob3JpZ2luYWxIcmVmKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCEoJ3ZhcmlhbnQnIGluIHVyaS5xdWVyeSkpIHtcblx0XHRcdGlmIChvcmlnaW5hbEhyZWYuaW5jbHVkZXMoJy93aWtpLycpKSB7XG5cdFx0XHRcdHNlbGYuaHJlZiA9IGAvJHt3Z1VzZXJWYXJpYW50fSR7b3JpZ2luYWxIcmVmLnNsaWNlKDUpfWA7XG5cdFx0XHR9IGVsc2UgaWYgKG9yaWdpbmFsSHJlZi5pbmNsdWRlcygnL2luZGV4LnBocD8nKSkge1xuXHRcdFx0XHRzZWxmLmhyZWYgPSB1cmlcblx0XHRcdFx0XHQuZXh0ZW5kKHtcblx0XHRcdFx0XHRcdHZhcmlhbnQ6IHdnVXNlclZhcmlhbnQsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZ2V0UmVsYXRpdmVQYXRoKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHtHQURHRVRfTkFNRSwgR09PRF9WQVJJQU5UUywgd2dVc2VyTmFtZX0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7bm90aWZ5Q29udmVyc2lvbn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtwcmVzZXJ2ZVZhcmlhbnR9IGZyb20gJy4vbW9kdWxlcy9wcmVzZXJ2ZVZhcmlhbnQnO1xuXG4oKCk6IHZvaWQgPT4ge1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSAhPT0gJ3ZpZXcnKSB7XG5cdFx0cmV0dXJuOyAvLyDlj6rlnKjmtY/op4jpobXpnaLml7bmmL7npLpcblx0fVxuXHRjb25zdCBwcmVmZXJyZWRWYXJpYW50ID0gKG13LnN0b3JhZ2UuZ2V0KEdBREdFVF9OQU1FKSB8fCAnJykudG9TdHJpbmcoKTtcblx0aWYgKCFbJ2hpZGUnLCAuLi5HT09EX1ZBUklBTlRTXS5pbmNsdWRlcyhwcmVmZXJyZWRWYXJpYW50KSkge1xuXHRcdC8vIOaYr+WQpueCuei/h+KAnOS4jeWGjeaPkOekuuKAneaIluWujOaIkOi/h+iuvue9rlxuXHRcdCQobm90aWZ5Q29udmVyc2lvbik7XG5cdH0gZWxzZSBpZiAoIXdnVXNlck5hbWUpIHtcblx0XHQkKHByZXNlcnZlVmFyaWFudCk7XG5cdH1cbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGNBQXNCO0FBRTVCLElBQU1DLHFCQUErQixDQUNwQyxTQUNBLFdBQ0EsV0FDQSxXQUNBLHlC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QUFHO0FBRTNEbEQsTUFBRW1DLGdCQUFnQjtFQUNuQixXQUFXLENBQUM1RixZQUFZO0FBQ3ZCeUQsTUFBRW9DLGVBQWU7RUFDbEI7QUFDRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJHQURHRVRfTkFNRSIsICJTWVNURU1fU0NSSVBUX0xJU1QiLCAiV0VCTUFTVEVSX0xJU1QiLCAid2dVc2VyTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIndnVXNlckdyb3VwcyIsICJ3Z1VzZXJWYXJpYW50IiwgIkdPT0RfVkFSSUFOVFMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiZGlhbG9nVGl0bGUiLCAibG9jYWxpemUiLCAiZW4iLCAiZGlhbG9nRGVzYyIsICJkaWFsb2dEZXNjRXh0ZW5kMSIsICJkaWFsb2dEZXNjRXh0ZW5kMiIsICJ6aCIsICJwcml2YWN5Tm90aWNlIiwgImNvbmZpcm0iLCAiY2FuY2VsIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAibG9jYXRpb25IcmVmIiwgImxvY2F0aW9uIiwgImhyZWYiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpc0V4cGVyaWVuY2VkVXNlciIsICJzb21lIiwgImVsZW1lbnQiLCAiaW5jbHVkZXMiLCAiaXNMYW5ndWFnZVNldCIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiaXNXcm9uZ1VSTCIsICJzaG93RGlhbG9nIiwgImRpYWxvZ1RpdGxlSWNvbiIsICJPTyIsICJ1aSIsICJJY29uV2lkZ2V0IiwgImljb24iLCAidGl0bGUiLCAiTGFiZWxXaWRnZXQiLCAibGFiZWwiLCAiZ2VuZXJhdGVCdXR0b24iLCAidmFyaWFudCIsICJCdXR0b25PcHRpb25XaWRnZXQiLCAiZGF0YSIsICJjb25jYXQiLCAiYnV0dG9uU2VsZWN0IiwgIkJ1dHRvblNlbGVjdFdpZGdldCIsICJpdGVtcyIsICJwcmVmZXJyZWRWYXJpYW50IiwgInNlbGVjdEl0ZW1CeURhdGEiLCAiJGRpYWxvZ1RpdGxlIiwgIiQiLCAiYWRkQ2xhc3MiLCAiYXBwZW5kIiwgIiRlbGVtZW50IiwgIiRkaWFsb2dNZXNzYWdlIiwgInRleHQiLCAid2luZG93TWFuYWdlciIsICJXaW5kb3dNYW5hZ2VyIiwgImFwcGVuZFRvIiwgIm1lc3NhZ2VEaWFsb2ciLCAiTWVzc2FnZURpYWxvZyIsICJtZXNzYWdlRGlhbG9nUHJvcGVydHkiLCAibWVzc2FnZSIsICJhY3Rpb25zIiwgImFjdGlvbiIsICJmbGFncyIsICJzaXplIiwgImFkZFdpbmRvd3MiLCAib3BlbldpbmRvdyIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgImNsZWFyV2luZG93cyIsICJzdG9yYWdlIiwgInNldCIsICJQcm9jZXNzIiwgIlVSTF9SRUdFWCIsICJzZWxlY3RlZEl0ZW0iLCAiZmluZFNlbGVjdGVkSXRlbSIsICJnZXREYXRhIiwgInNhdmVPcHRpb24iLCAidGhlbiIsICJyZXBsYWNlIiwgImNvbmZpcm1lZCIsICJfcmVmIiwgInVzZXIiLCAib3B0aW9ucyIsICJub3RpZnlDb252ZXJzaW9uIiwgInByZXNlcnZlVmFyaWFudCIsICJ3aW5kb3ciLCAicGF0aG5hbWUiLCAiZG9jdW1lbnQiLCAib24iLCAic2VsZiIsICJvcmlnaW5hbEhyZWYiLCAiYXR0ciIsICJ1cmkiLCAiVXJpIiwgInF1ZXJ5IiwgInNsaWNlIiwgImV4dGVuZCIsICJnZXRSZWxhdGl2ZVBhdGgiLCAicHJlZmVycmVkVmFyaWFudDIiLCAidG9TdHJpbmciXQp9Cg==
