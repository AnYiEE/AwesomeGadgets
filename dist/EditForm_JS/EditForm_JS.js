/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Common.js/edit.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/EditForm_JS}
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

// dist/EditForm_JS/EditForm_JS.js
//! src/EditForm_JS/modules/clearUndoSummary.ts
var clearUndoSummary = ($body) => {
  const $wpAutoSummary = $body.find('input[name="wpAutoSummary"]');
  if (!$wpAutoSummary.length) {
    return;
  }
  if (mw.util.getParamValue("undo")) {
    $wpAutoSummary.val("");
  }
};
//! src/EditForm_JS/modules/disableTitle.ts
var disableTitle = ($body) => {
  if ($body.find("#no-new-title").length && $body.find('#editform input[name="wpSection"]').val() === "new") {
    const $wpSummary = $body.find("input[name=wpSummary]");
    $wpSummary.prop("disabled", true);
    $wpSummary.val("");
  }
  const noSectionTitlePages = ["有兽档案馆_talk:侵权提报", "有兽档案馆_talk:存废讨论/关注度提报"];
  const noSectionTitlePagesRegex = /^有兽档案馆_talk:存废讨论/;
  const {
    wgPageName
  } = mw.config.get();
  if ((noSectionTitlePages.includes(wgPageName) || noSectionTitlePagesRegex.test(wgPageName)) && mw.util.getParamValue("section") === "new") {
    mw.util.addCSS("h2.ve-ui-init-desktopArticleTarget-sectionTitle{display:none}");
  }
};
//! src/EditForm_JS/EditForm_JS.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/EditForm_JS/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("EditForm_JS/2.0");
//! src/EditForm_JS/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Preview: (0, import_ext_gadget2.localize)({
      en: "Please preview the edited text",
      ja: "プレビューしてください",
      "zh-hans": "请先预览",
      "zh-hant": "請先預覽"
    }),
    RevisionPreloaded: (0, import_ext_gadget2.localize)({
      en: "Content of revision $1 preloaded.",
      "zh-hans": "已加载版本$1的内容。",
      "zh-hant": "已載入版本$1的內容。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/EditForm_JS/modules/preloadRevid.ts
var preloadRevid = ($body) => {
  const revid = mw.util.getParamValue("preloadrevid");
  if (!revid) {
    return;
  }
  const {
    wgAction
  } = mw.config.get();
  if (!["edit", "submit"].includes(wgAction)) {
    return;
  }
  const params = {
    action: "query",
    format: "json",
    prop: "revisions",
    revids: Number.parseInt(revid, 10),
    formatversion: "2",
    rvprop: "content",
    rvslots: "main"
  };
  void api.get(params).then(({
    query
  }) => {
    const {
      content
    } = query.pages[0].revisions[0].slots.main;
    if ($body.find(".oo-ui-icon-highlight").length && $body.find(".oo-ui-icon-highlight").hasClass("oo-ui-image-progressive")) {
      $body.find(".oo-ui-icon-highlight").trigger("click");
    }
    if (document.querySelector("textarea[name=wpTextbox1]")) {
      document.querySelector("textarea[name=wpTextbox1]").value = content;
      $body.find("input[name=wpDiff]").trigger("click");
      void mw.notify(getMessage("RevisionPreloaded").replace("$1", revid), {
        type: "success"
      });
    }
  });
};
//! src/EditForm_JS/EditForm_JS.ts
void (0, import_ext_gadget3.getBody)().then(function editForm($body) {
  clearUndoSummary($body);
  disableTitle($body);
  preloadRevid($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY2xlYXJVbmRvU3VtbWFyeS50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9kaXNhYmxlVGl0bGUudHMiLCAic3JjL0VkaXRGb3JtX0pTL0VkaXRGb3JtX0pTLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvcHJlbG9hZFJldmlkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjbGVhclVuZG9TdW1tYXJ5ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCAkd3BBdXRvU3VtbWFyeTogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1cIndwQXV0b1N1bW1hcnlcIl0nKTtcblx0aWYgKCEkd3BBdXRvU3VtbWFyeS5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCd1bmRvJykpIHtcblx0XHQkd3BBdXRvU3VtbWFyeS52YWwoJycpO1xuXHR9XG59O1xuXG5leHBvcnQge2NsZWFyVW5kb1N1bW1hcnl9O1xuIiwgImNvbnN0IGRpc2FibGVUaXRsZSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKCRib2R5LmZpbmQoJyNuby1uZXctdGl0bGUnKS5sZW5ndGggJiYgJGJvZHkuZmluZCgnI2VkaXRmb3JtIGlucHV0W25hbWU9XCJ3cFNlY3Rpb25cIl0nKS52YWwoKSA9PT0gJ25ldycpIHtcblx0XHQvLyDkvKDnu5/mlofmnKznvJbovpHlmahcblx0XHRjb25zdCAkd3BTdW1tYXJ5OiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKTtcblx0XHQkd3BTdW1tYXJ5LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0JHdwU3VtbWFyeS52YWwoJycpO1xuXHR9XG5cblx0Y29uc3Qgbm9TZWN0aW9uVGl0bGVQYWdlczogc3RyaW5nW10gPSBbJ+acieWFveaho+ahiOmmhl90YWxrOuS+teadg+aPkOaKpScsICfmnInlhb3moaPmoYjppoZfdGFsazrlrZjlup/orqjorrov5YWz5rOo5bqm5o+Q5oqlJ107XG5cdGNvbnN0IG5vU2VjdGlvblRpdGxlUGFnZXNSZWdleDogUmVnRXhwID0gL17mnInlhb3moaPmoYjppoZfdGFsazrlrZjlup/orqjorrovO1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQobm9TZWN0aW9uVGl0bGVQYWdlcy5pbmNsdWRlcyh3Z1BhZ2VOYW1lKSB8fCBub1NlY3Rpb25UaXRsZVBhZ2VzUmVnZXgudGVzdCh3Z1BhZ2VOYW1lKSkgJiZcblx0XHRtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3NlY3Rpb24nKSA9PT0gJ25ldydcblx0KSB7XG5cdFx0Ly8g5Y+v6KeG5YyW57yW6L6R5ZmoIC8g5pawd2lraXRleHTmqKHlvI9cblx0XHRtdy51dGlsLmFkZENTUygnaDIudmUtdWktaW5pdC1kZXNrdG9wQXJ0aWNsZVRhcmdldC1zZWN0aW9uVGl0bGV7ZGlzcGxheTpub25lfScpO1xuXHR9XG59O1xuXG5leHBvcnQge2Rpc2FibGVUaXRsZX07XG4iLCAiaW1wb3J0IHtjbGVhclVuZG9TdW1tYXJ5fSBmcm9tICcuL21vZHVsZXMvY2xlYXJVbmRvU3VtbWFyeSc7XG5pbXBvcnQge2Rpc2FibGVUaXRsZX0gZnJvbSAnLi9tb2R1bGVzL2Rpc2FibGVUaXRsZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG4vLyBpbXBvcnQge2ludHJvQUNIfSBmcm9tICcuL21vZHVsZXMvaW50cm9BQ0gnO1xuaW1wb3J0IHtwcmVsb2FkUmV2aWR9IGZyb20gJy4vbW9kdWxlcy9wcmVsb2FkUmV2aWQnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHQvLyDliKDpmaTlm57pgIDml7boh6rliqjnlJ/miJDnmoTnvJbovpHmkZjopoFcblx0Y2xlYXJVbmRvU3VtbWFyeSgkYm9keSk7XG5cblx0Ly8g5Zyo5o+Q5Lqk5paw5q616JC95pe277yM6K6p5Li76aKY5qCP5Zyo54m55a6a5oOF5Ya15LiL5aSx5pWIXG5cdGRpc2FibGVUaXRsZSgkYm9keSk7XG5cblx0Ly8g5rqQ5Luj56CB57yW6L6R5Zmo5Yqg6L294oCc57yW6L6R6K+35rGC4oCd6KGl5LiBXG5cdHByZWxvYWRSZXZpZCgkYm9keSk7XG5cblx0Ly8g5paw55So5oi35byV5a+86Iez5p2h55uu5Yib5bu65ZCR5a+877yIW1tIZWxwOuW/q+mAn+S4iuaJi11d77yJXG5cdC8vIGludHJvQUNIKCk7XG59KTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ0VkaXRGb3JtX0pTLzIuMCcpO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFByZXZpZXc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGxlYXNlIHByZXZpZXcgdGhlIGVkaXRlZCB0ZXh0Jyxcblx0XHRcdGphOiAn44OX44Os44OT44Ol44O844GX44Gm44GP44Gg44GV44GEJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+WFiOmihOiniCcsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vlhYjpoJDopr0nLFxuXHRcdH0pLFxuXHRcdFJldmlzaW9uUHJlbG9hZGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbnRlbnQgb2YgcmV2aXNpb24gJDEgcHJlbG9hZGVkLicsXG5cdFx0XHQnemgtaGFucyc6ICflt7LliqDovb3niYjmnKwkMeeahOWGheWuueOAgicsXG5cdFx0XHQnemgtaGFudCc6ICflt7LovInlhaXniYjmnKwkMeeahOWFp+WuueOAgicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudCAqL1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBQcmVsb2FkIGNvbnRlbnRzIGZyb20gUmV2aXNpb24gSUQgKG9sZGlkKVxuICovXG5pbXBvcnQge2FwaX0gZnJvbSAnLi91dGlsL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByZWxvYWRSZXZpZCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgcmV2aWQgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3ByZWxvYWRyZXZpZCcpO1xuXG5cdGlmICghcmV2aWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7d2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKHdnQWN0aW9uKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHJldmlkczogTnVtYmVyLnBhcnNlSW50KHJldmlkLCAxMCksXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0fTtcblxuXHR2b2lkIGFwaS5nZXQocGFyYW1zKS50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0Y29uc3Qge2NvbnRlbnR9ID0gcXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLnNsb3RzLm1haW47XG5cdFx0aWYgKFxuXHRcdFx0JGJvZHkuZmluZCgnLm9vLXVpLWljb24taGlnaGxpZ2h0JykubGVuZ3RoICYmXG5cdFx0XHQkYm9keS5maW5kKCcub28tdWktaWNvbi1oaWdobGlnaHQnKS5oYXNDbGFzcygnb28tdWktaW1hZ2UtcHJvZ3Jlc3NpdmUnKVxuXHRcdCkge1xuXHRcdFx0JGJvZHkuZmluZCgnLm9vLXVpLWljb24taGlnaGxpZ2h0JykudHJpZ2dlcignY2xpY2snKTtcblx0XHR9XG5cdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKSkge1xuXHRcdFx0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSA9IGNvbnRlbnQ7XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwRGlmZl0nKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnUmV2aXNpb25QcmVsb2FkZWQnKS5yZXBsYWNlKCckMScsIHJldmlkKSwge3R5cGU6ICdzdWNjZXNzJ30pO1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnQge3ByZWxvYWRSZXZpZH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RUFBRTJCLFFBQVEsTUFBTXhCLEtBQUssR0FBRztRQUFDeUIsTUFBTTtNQUFTLENBQUM7SUFDdkY7RUFDRCxDQUFDO0FBQ0Y7O0FIdkNBLE1BQUEsR0FBS3pDLG1CQUFBMEMsU0FBUSxFQUFFZixLQUFLLFNBQVNnQixTQUFTOUQsT0FBc0M7QUFFM0VELG1CQUFpQkMsS0FBSztBQUd0QlEsZUFBYVIsS0FBSztBQUdsQmtDLGVBQWFsQyxLQUFLO0FBSW5CLENBQUM7IiwKICAibmFtZXMiOiBbImNsZWFyVW5kb1N1bW1hcnkiLCAiJGJvZHkiLCAiJHdwQXV0b1N1bW1hcnkiLCAiZmluZCIsICJsZW5ndGgiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgInZhbCIsICJkaXNhYmxlVGl0bGUiLCAiJHdwU3VtbWFyeSIsICJwcm9wIiwgIm5vU2VjdGlvblRpdGxlUGFnZXMiLCAibm9TZWN0aW9uVGl0bGVQYWdlc1JlZ2V4IiwgIndnUGFnZU5hbWUiLCAiY29uZmlnIiwgImdldCIsICJpbmNsdWRlcyIsICJ0ZXN0IiwgImFkZENTUyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiUHJldmlldyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJSZXZpc2lvblByZWxvYWRlZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicHJlbG9hZFJldmlkIiwgInJldmlkIiwgIndnQWN0aW9uIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgInJldmlkcyIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiZm9ybWF0dmVyc2lvbiIsICJydnByb3AiLCAicnZzbG90cyIsICJ0aGVuIiwgInF1ZXJ5IiwgImNvbnRlbnQiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm1haW4iLCAiaGFzQ2xhc3MiLCAidHJpZ2dlciIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInZhbHVlIiwgIm5vdGlmeSIsICJyZXBsYWNlIiwgInR5cGUiLCAiZ2V0Qm9keSIsICJlZGl0Rm9ybSJdCn0K
