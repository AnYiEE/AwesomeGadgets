/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/LoginToEdit}
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

// dist/LoginToEdit/LoginToEdit.js
//! src/LoginToEdit/modules/constant.ts
var WG_ACTION = mw.config.get("wgAction");
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_SKIN = mw.config.get("skin");
var WG_USER_NAME = mw.config.get("wgUserName");
var IS_WG_EDIT_OR_SUBMIT_ACTION = ["edit", "submit"].includes(WG_ACTION);
//! src/LoginToEdit/LoginToEdit.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/AjaxLogin/options.json
var loginElementSelector = 'a:has(.ajaxlogin-mount-point),#pt-login>a,.vector-user-menu-login>a,#user-tools>a[href*="Special"],.mainpage-top-menu>li:nth-child(2) a';
//! src/LoginToEdit/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Cancel: (0, import_ext_gadget.localize)({
      en: "Cancel",
      ja: "キャンセル",
      "zh-hans": "暂不登录账号",
      "zh-hant": "暫不登入賬號"
    }),
    Edit: (0, import_ext_gadget.localize)({
      en: "Edit",
      ja: "編集",
      "zh-hans": "编辑",
      "zh-hant": "編輯"
    }),
    Login: (0, import_ext_gadget.localize)({
      en: "Login",
      ja: "ログイン",
      "zh-hans": "登录已有账号",
      "zh-hant": "登入已有賬號"
    }),
    Register: (0, import_ext_gadget.localize)({
      en: "Register",
      ja: "アカウントを作成",
      "zh-hans": "注册新的账号",
      "zh-hant": "註冊新的賬號"
    }),
    DialogTitle: (0, import_ext_gadget.localize)({
      en: "Welcome to Youshou Archives!",
      ja: "有獣アーカイブスへようこそ！",
      "zh-hans": "欢迎来到有兽档案馆！",
      "zh-hant": "歡迎來到有獸檔案館！"
    }),
    DialogMessage: (0, import_ext_gadget.localize)({
      en: "You have not yet logged in. Register and log in to your account to contribute.",
      ja: "あなたはまだ有獣アーカイブスにログインしていません。アカウントを作成し、ログインして有獣アーカイブスを改善することができます。",
      "zh-hans": "您尚未登录到有兽档案馆。您可以注册并登录账号，帮助完善有兽档案馆。",
      "zh-hant": "您尚未登錄到有獸檔案館。您可以注冊並登錄賬戶，幫助完善有獸檔案館。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/LoginToEdit/modules/util/generateMessageDialogProperty.ts
var generateMessageDialogProperty = () => {
  const $title = $("<b>").addClass("oo-ui-window-head").text(getMessage("DialogTitle"));
  const $message = $("<span>").addClass("oo-ui-window-foot").text(getMessage("DialogMessage"));
  const messageDialogProperty = {
    title: $title,
    message: $message,
    actions: [{
      action: "login",
      flags: ["primary", "progressive"],
      label: $("<b>").text(getMessage("Login"))
    }, {
      action: "register",
      flags: "progressive",
      label: $("<b>").text(getMessage("Register"))
    }, {
      action: "cancel",
      flags: ["safe", "close"],
      label: $("<b>").text(getMessage("Cancel"))
    }]
  };
  return messageDialogProperty;
};
//! src/LoginToEdit/modules/initWindowManager.ts
var initWindowManager = () => {
  const windowManager = new OO.ui.WindowManager();
  return windowManager;
};
//! src/LoginToEdit/modules/initDialog.ts
var isCitizen = WG_SKIN === "citizen";
var loginURL = mw.util.getUrl("Special:UserLogin", {
  returnto: WG_PAGE_NAME
});
var registerURL = mw.util.getUrl("Special:CreateAccount", {
  returnto: WG_PAGE_NAME
});
var messageDialog;
var initDialog = ($body) => {
  const windowManager = initWindowManager();
  windowManager.$element.appendTo($body);
  const messageDialogProperty = generateMessageDialogProperty();
  const openDialog = () => {
    if (messageDialog) {
      if (messageDialog.isOpened()) {
        messageDialog.close();
      } else {
        messageDialog.open(messageDialogProperty);
      }
      return;
    }
    messageDialog = new OO.ui.MessageDialog();
    messageDialog.getActionProcess = (action) => {
      if (action === "login") {
        const $element = $(loginElementSelector);
        if ($element.length) {
          $element.trigger("click");
        } else {
          location.href = loginURL;
        }
      } else if (action === "register") {
        location.href = registerURL;
      }
      return new OO.ui.Process(() => {
        void windowManager.closeWindow(messageDialog);
      });
    };
    windowManager.addWindows([messageDialog]);
    void windowManager.openWindow(messageDialog, messageDialogProperty);
  };
  const $caViewsource = $body.find("#ca-viewsource");
  if ($caViewsource.length) {
    const editIcon = isCitizen ? '<span class="citizen-ui-icon mw-ui-icon-wikimedia-edit"></span>' : "";
    $caViewsource.attr("id", "ca-edit").find("a").attr("aria-label", getMessage("DialogMessage")).html(editIcon + getMessage("Edit")).on("click", (event) => {
      event.preventDefault();
      openDialog();
    });
  }
  if (IS_WG_EDIT_OR_SUBMIT_ACTION) {
    openDialog();
  }
};
//! src/LoginToEdit/LoginToEdit.ts
void (0, import_ext_gadget2.getBody)().then(function loginToEdit($body) {
  if (WG_USER_NAME) {
    return;
  }
  initDialog($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ2luVG9FZGl0L21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0xvZ2luVG9FZGl0L0xvZ2luVG9FZGl0LnRzIiwgInNyYy9BamF4TG9naW4vb3B0aW9ucy5qc29uIiwgInNyYy9Mb2dpblRvRWRpdC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0xvZ2luVG9FZGl0L21vZHVsZXMvdXRpbC9nZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eS50cyIsICJzcmMvTG9naW5Ub0VkaXQvbW9kdWxlcy9pbml0V2luZG93TWFuYWdlci50cyIsICJzcmMvTG9naW5Ub0VkaXQvbW9kdWxlcy9pbml0RGlhbG9nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuY29uc3QgV0dfU0tJTjogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnc2tpbicpO1xuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpO1xuXG5jb25zdCBJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT046IGJvb2xlYW4gPSBbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMoV0dfQUNUSU9OKTtcblxuZXhwb3J0IHtXR19QQUdFX05BTUUsIFdHX1NLSU4sIFdHX1VTRVJfTkFNRSwgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OfTtcbiIsICJpbXBvcnQge1dHX1VTRVJfTkFNRX0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7aW5pdERpYWxvZ30gZnJvbSAnLi9tb2R1bGVzL2luaXREaWFsb2cnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGxvZ2luVG9FZGl0KCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRpZiAoV0dfVVNFUl9OQU1FKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aW5pdERpYWxvZygkYm9keSk7XG59KTtcbiIsICJ7XG5cdFwibG9naW5FbGVtZW50U2VsZWN0b3JcIjogXCJhOmhhcyguYWpheGxvZ2luLW1vdW50LXBvaW50KSwjcHQtbG9naW4+YSwudmVjdG9yLXVzZXItbWVudS1sb2dpbj5hLCN1c2VyLXRvb2xzPmFbaHJlZio9XFxcIlNwZWNpYWxcXFwiXSwubWFpbnBhZ2UtdG9wLW1lbnU+bGk6bnRoLWNoaWxkKDIpIGFcIixcblx0XCJ2ZXJzaW9uXCI6IFwiNC4wXCJcbn1cbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q2FuY2VsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NhbmNlbCcsXG5cdFx0XHRqYTogJ+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHQnemgtaGFucyc6ICfmmoLkuI3nmbvlvZXotKblj7cnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pqr5LiN55m75YWl6LOs6JmfJyxcblx0XHR9KSxcblx0XHRFZGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQnLFxuXHRcdFx0amE6ICfnt6jpm4YnLFxuXHRcdFx0J3poLWhhbnMnOiAn57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3qOi8rycsXG5cdFx0fSksXG5cdFx0TG9naW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7MnLFxuXHRcdFx0J3poLWhhbnMnOiAn55m75b2V5bey5pyJ6LSm5Y+3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WFpeW3suacieizrOiZnycsXG5cdFx0fSksXG5cdFx0UmVnaXN0ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVnaXN0ZXInLFxuXHRcdFx0amE6ICfjgqLjgqvjgqbjg7Pjg4jjgpLkvZzmiJAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rOo5YaM5paw55qE6LSm5Y+3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+iou+WGiuaWsOeahOizrOiZnycsXG5cdFx0fSksXG5cdFx0RGlhbG9nVGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2VsY29tZSB0byBZb3VzaG91IEFyY2hpdmVzIScsXG5cdFx0XHRqYTogJ+acieeNo+OCouODvOOCq+OCpOODluOCueOBuOOCiOOBhuOBk+OBne+8gScsXG5cdFx0XHQnemgtaGFucyc6ICfmrKLov47mnaXliLDmnInlhb3moaPmoYjppobvvIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2h6L+O5L6G5Yiw5pyJ54245qqU5qGI6aSo77yBJyxcblx0XHR9KSxcblx0XHREaWFsb2dNZXNzYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdSBoYXZlIG5vdCB5ZXQgbG9nZ2VkIGluLiBSZWdpc3RlciBhbmQgbG9nIGluIHRvIHlvdXIgYWNjb3VudCB0byBjb250cmlidXRlLicsXG5cdFx0XHRqYTogJ+OBguOBquOBn+OBr+OBvuOBoOacieeNo+OCouODvOOCq+OCpOODluOCueOBq+ODreOCsOOCpOODs+OBl+OBpuOBhOOBvuOBm+OCk+OAguOCouOCq+OCpuODs+ODiOOCkuS9nOaIkOOBl+OAgeODreOCsOOCpOODs+OBl+OBpuacieeNo+OCouODvOOCq+OCpOODluOCueOCkuaUueWWhOOBmeOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAgicsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjlsJrmnKrnmbvlvZXliLDmnInlhb3moaPmoYjppobjgILmgqjlj6/ku6Xms6jlhozlubbnmbvlvZXotKblj7fvvIzluK7liqnlrozlloTmnInlhb3moaPmoYjppobjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo5bCa5pyq55m76YyE5Yiw5pyJ54245qqU5qGI6aSo44CC5oKo5Y+v5Lul5rOo5YaK5Lim55m76YyE6LOs5oi277yM5bmr5Yqp5a6M5ZaE5pyJ54245qqU5qGI6aSo44CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHkgPSAoKTogT08udWkuV2luZG93TWFuYWdlci5XaW5kb3dPcGVuaW5nRGF0YSA9PiB7XG5cdGNvbnN0ICR0aXRsZTogSlF1ZXJ5ID0gJCgnPGI+JykuYWRkQ2xhc3MoJ29vLXVpLXdpbmRvdy1oZWFkJykudGV4dChnZXRNZXNzYWdlKCdEaWFsb2dUaXRsZScpKTtcblx0Y29uc3QgJG1lc3NhZ2U6IEpRdWVyeSA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCdvby11aS13aW5kb3ctZm9vdCcpLnRleHQoZ2V0TWVzc2FnZSgnRGlhbG9nTWVzc2FnZScpKTtcblxuXHRjb25zdCBtZXNzYWdlRGlhbG9nUHJvcGVydHk6IE9PLnVpLldpbmRvd01hbmFnZXIuV2luZG93T3BlbmluZ0RhdGEgPSB7XG5cdFx0dGl0bGU6ICR0aXRsZSxcblx0XHRtZXNzYWdlOiAkbWVzc2FnZSxcblx0XHRhY3Rpb25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2xvZ2luJyxcblx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHRsYWJlbDogJCgnPGI+JykudGV4dChnZXRNZXNzYWdlKCdMb2dpbicpKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ3JlZ2lzdGVyJyxcblx0XHRcdFx0ZmxhZ3M6ICdwcm9ncmVzc2l2ZScsXG5cdFx0XHRcdGxhYmVsOiAkKCc8Yj4nKS50ZXh0KGdldE1lc3NhZ2UoJ1JlZ2lzdGVyJykpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnY2FuY2VsJyxcblx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHRsYWJlbDogJCgnPGI+JykudGV4dChnZXRNZXNzYWdlKCdDYW5jZWwnKSksXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH07XG5cblx0cmV0dXJuIG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eTtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHl9O1xuIiwgImNvbnN0IGluaXRXaW5kb3dNYW5hZ2VyID0gKCk6IE9PLnVpLldpbmRvd01hbmFnZXIgPT4ge1xuXHRjb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblxuXHRyZXR1cm4gd2luZG93TWFuYWdlcjtcbn07XG5cbmV4cG9ydCB7aW5pdFdpbmRvd01hbmFnZXJ9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9BamF4TG9naW4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7SVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OLCBXR19QQUdFX05BTUUsIFdHX1NLSU59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eX0gZnJvbSAnLi91dGlsL2dlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdFdpbmRvd01hbmFnZXJ9IGZyb20gJy4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBpc0NpdGl6ZW46IGJvb2xlYW4gPSBXR19TS0lOID09PSAnY2l0aXplbic7XG5jb25zdCBsb2dpblVSTDogc3RyaW5nID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6VXNlckxvZ2luJywge1xuXHRyZXR1cm50bzogV0dfUEFHRV9OQU1FLFxufSk7XG5jb25zdCByZWdpc3RlclVSTDogc3RyaW5nID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6Q3JlYXRlQWNjb3VudCcsIHtcblx0cmV0dXJudG86IFdHX1BBR0VfTkFNRSxcbn0pO1xuXG5sZXQgbWVzc2FnZURpYWxvZzogT08udWkuTWVzc2FnZURpYWxvZztcblxuY29uc3QgaW5pdERpYWxvZyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IGluaXRXaW5kb3dNYW5hZ2VyKCk7XG5cdHdpbmRvd01hbmFnZXIuJGVsZW1lbnQuYXBwZW5kVG8oJGJvZHkpO1xuXG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eTogT08udWkuV2luZG93TWFuYWdlci5XaW5kb3dPcGVuaW5nRGF0YSA9IGdlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5KCk7XG5cblx0Y29uc3Qgb3BlbkRpYWxvZyA9ICgpOiB2b2lkID0+IHtcblx0XHRpZiAobWVzc2FnZURpYWxvZykge1xuXHRcdFx0aWYgKG1lc3NhZ2VEaWFsb2cuaXNPcGVuZWQoKSkge1xuXHRcdFx0XHRtZXNzYWdlRGlhbG9nLmNsb3NlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZXNzYWdlRGlhbG9nLm9wZW4obWVzc2FnZURpYWxvZ1Byb3BlcnR5KTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRtZXNzYWdlRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0XHRtZXNzYWdlRGlhbG9nLmdldEFjdGlvblByb2Nlc3MgPSAoYWN0aW9uOiBzdHJpbmcpOiBPTy51aS5Qcm9jZXNzID0+IHtcblx0XHRcdGlmIChhY3Rpb24gPT09ICdsb2dpbicpIHtcblx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkKE9QVElPTlMubG9naW5FbGVtZW50U2VsZWN0b3IpO1xuXHRcdFx0XHRpZiAoJGVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gbG9naW5VUkw7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYWN0aW9uID09PSAncmVnaXN0ZXInKSB7XG5cdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSByZWdpc3RlclVSTDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuZXcgT08udWkuUHJvY2VzcygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHZvaWQgd2luZG93TWFuYWdlci5jbG9zZVdpbmRvdyhtZXNzYWdlRGlhbG9nKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW21lc3NhZ2VEaWFsb2ddKTtcblx0XHR2b2lkIHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhtZXNzYWdlRGlhbG9nLCBtZXNzYWdlRGlhbG9nUHJvcGVydHkpO1xuXHR9O1xuXG5cdGNvbnN0ICRjYVZpZXdzb3VyY2U6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNjYS12aWV3c291cmNlJyk7XG5cdGlmICgkY2FWaWV3c291cmNlLmxlbmd0aCkge1xuXHRcdGNvbnN0IGVkaXRJY29uOiBzdHJpbmcgPSBpc0NpdGl6ZW4gPyAnPHNwYW4gY2xhc3M9XCJjaXRpemVuLXVpLWljb24gbXctdWktaWNvbi13aWtpbWVkaWEtZWRpdFwiPjwvc3Bhbj4nIDogJyc7XG5cdFx0JGNhVmlld3NvdXJjZVxuXHRcdFx0LmF0dHIoJ2lkJywgJ2NhLWVkaXQnKVxuXHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0LmF0dHIoJ2FyaWEtbGFiZWwnLCBnZXRNZXNzYWdlKCdEaWFsb2dNZXNzYWdlJykpXG5cdFx0XHQuaHRtbChlZGl0SWNvbiArIGdldE1lc3NhZ2UoJ0VkaXQnKSlcblx0XHRcdC5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdG9wZW5EaWFsb2coKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0aWYgKElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTikge1xuXHRcdG9wZW5EaWFsb2coKTtcblx0fVxufTtcblxuZXhwb3J0IHtpbml0RGlhbG9nfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBd0NDLEdBQUdDLE9BQU9DLElBQUksVUFBVTtBQUN0RSxJQUFNQyxlQUF1QkgsR0FBR0MsT0FBT0MsSUFBSSxZQUFZO0FBQ3ZELElBQU1FLFVBQWtCSixHQUFHQyxPQUFPQyxJQUFJLE1BQU07QUFDNUMsSUFBTUcsZUFBOEJMLEdBQUdDLE9BQU9DLElBQUksWUFBWTtBQUU5RCxJQUFNSSw4QkFBdUMsQ0FBQyxRQUFRLFFBQVEsRUFBRUMsU0FBU1IsU0FBUzs7QUNKbEYsSUFBQVMscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0FyQixJQUFBQyx1QkFBd0I7O0FDRHpCLElBQUFDLG9CQUF1QkYsUUFBQSxpQkFBQTtBQUV2QixJQUFNRyxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxTQUFBLEdBQVFGLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsT0FBQSxHQUFNTixrQkFBQUcsVUFBUztNQUNkQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsUUFBQSxHQUFPUCxrQkFBQUcsVUFBUztNQUNmQyxJQUFJO01B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LENBQUM7QUFDeEMsU0FBS1YsY0FBYzRCLFdBQVdsQixlQUFlbEIscUJBQXFCO0VBQ25FO0FBRUEsUUFBTXFDLGdCQUF3QmpCLE1BQU1rQixLQUFLLGdCQUFnQjtBQUN6RCxNQUFJRCxjQUFjUixRQUFRO0FBQ3pCLFVBQU1VLFdBQW1CM0IsWUFBWSxvRUFBb0U7QUFDekd5QixrQkFDRUcsS0FBSyxNQUFNLFNBQVMsRUFDcEJGLEtBQUssR0FBRyxFQUNSRSxLQUFLLGNBQWNoRCxXQUFXLGVBQWUsQ0FBQyxFQUM5Q2lELEtBQUtGLFdBQVcvQyxXQUFXLE1BQU0sQ0FBQyxFQUNsQ2tELEdBQUcsU0FBVUMsV0FBbUM7QUFDaERBLFlBQU1DLGVBQWU7QUFDckJyQixpQkFBVztJQUNaLENBQUM7RUFDSDtBQUVBLE1BQUloRCw2QkFBNkI7QUFDaENnRCxlQUFXO0VBQ1o7QUFDRDs7QUxsRUEsTUFBQSxHQUFLOUMsbUJBQUFvRSxTQUFRLEVBQUVDLEtBQUssU0FBU0MsWUFBWTNCLE9BQXNDO0FBQzlFLE1BQUk5QyxjQUFjO0FBQ2pCO0VBQ0Q7QUFFQTZDLGFBQVdDLEtBQUs7QUFDakIsQ0FBQzsiLAogICJuYW1lcyI6IFsiV0dfQUNUSU9OIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfUEFHRV9OQU1FIiwgIldHX1NLSU4iLCAiV0dfVVNFUl9OQU1FIiwgIklTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiIsICJpbmNsdWRlcyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJsb2dpbkVsZW1lbnRTZWxlY3RvciIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ2FuY2VsIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkVkaXQiLCAiTG9naW4iLCAiUmVnaXN0ZXIiLCAiRGlhbG9nVGl0bGUiLCAiRGlhbG9nTWVzc2FnZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHkiLCAiJHRpdGxlIiwgIiQiLCAiYWRkQ2xhc3MiLCAidGV4dCIsICIkbWVzc2FnZSIsICJtZXNzYWdlRGlhbG9nUHJvcGVydHkiLCAidGl0bGUiLCAibWVzc2FnZSIsICJhY3Rpb25zIiwgImFjdGlvbiIsICJmbGFncyIsICJsYWJlbCIsICJpbml0V2luZG93TWFuYWdlciIsICJ3aW5kb3dNYW5hZ2VyIiwgIk9PIiwgInVpIiwgIldpbmRvd01hbmFnZXIiLCAiaXNDaXRpemVuIiwgImxvZ2luVVJMIiwgInV0aWwiLCAiZ2V0VXJsIiwgInJldHVybnRvIiwgInJlZ2lzdGVyVVJMIiwgIm1lc3NhZ2VEaWFsb2ciLCAiaW5pdERpYWxvZyIsICIkYm9keSIsICIkZWxlbWVudCIsICJhcHBlbmRUbyIsICJvcGVuRGlhbG9nIiwgImlzT3BlbmVkIiwgImNsb3NlIiwgIm9wZW4iLCAiTWVzc2FnZURpYWxvZyIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgImxlbmd0aCIsICJ0cmlnZ2VyIiwgImxvY2F0aW9uIiwgImhyZWYiLCAiUHJvY2VzcyIsICJjbG9zZVdpbmRvdyIsICJhZGRXaW5kb3dzIiwgIm9wZW5XaW5kb3ciLCAiJGNhVmlld3NvdXJjZSIsICJmaW5kIiwgImVkaXRJY29uIiwgImF0dHIiLCAiaHRtbCIsICJvbiIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJnZXRCb2R5IiwgInRoZW4iLCAibG9naW5Ub0VkaXQiXQp9Cg==
