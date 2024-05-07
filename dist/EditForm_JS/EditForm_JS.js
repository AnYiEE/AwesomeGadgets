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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY2xlYXJVbmRvU3VtbWFyeS50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9kaXNhYmxlVGl0bGUudHMiLCAic3JjL0VkaXRGb3JtX0pTL0VkaXRGb3JtX0pTLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvcHJlbG9hZFJldmlkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjbGVhclVuZG9TdW1tYXJ5ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCAkd3BBdXRvU3VtbWFyeTogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1cIndwQXV0b1N1bW1hcnlcIl0nKTtcblx0aWYgKCEkd3BBdXRvU3VtbWFyeS5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCd1bmRvJykpIHtcblx0XHQkd3BBdXRvU3VtbWFyeS52YWwoJycpO1xuXHR9XG59O1xuXG5leHBvcnQge2NsZWFyVW5kb1N1bW1hcnl9O1xuIiwgImNvbnN0IGRpc2FibGVUaXRsZSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKCRib2R5LmZpbmQoJyNuby1uZXctdGl0bGUnKS5sZW5ndGggJiYgJGJvZHkuZmluZCgnI2VkaXRmb3JtIGlucHV0W25hbWU9XCJ3cFNlY3Rpb25cIl0nKS52YWwoKSA9PT0gJ25ldycpIHtcblx0XHQvLyDkvKDnu5/mlofmnKznvJbovpHlmahcblx0XHRjb25zdCAkd3BTdW1tYXJ5OiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKTtcblx0XHQkd3BTdW1tYXJ5LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0JHdwU3VtbWFyeS52YWwoJycpO1xuXHR9XG5cblx0Y29uc3Qgbm9TZWN0aW9uVGl0bGVQYWdlczogc3RyaW5nW10gPSBbJ+acieWFveaho+ahiOmmhl90YWxrOuS+teadg+aPkOaKpScsICfmnInlhb3moaPmoYjppoZfdGFsazrlrZjlup/orqjorrov5YWz5rOo5bqm5o+Q5oqlJ107XG5cdGNvbnN0IG5vU2VjdGlvblRpdGxlUGFnZXNSZWdleDogUmVnRXhwID0gL17mnInlhb3moaPmoYjppoZfdGFsazrlrZjlup/orqjorrovO1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQobm9TZWN0aW9uVGl0bGVQYWdlcy5pbmNsdWRlcyh3Z1BhZ2VOYW1lKSB8fCBub1NlY3Rpb25UaXRsZVBhZ2VzUmVnZXgudGVzdCh3Z1BhZ2VOYW1lKSkgJiZcblx0XHRtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3NlY3Rpb24nKSA9PT0gJ25ldydcblx0KSB7XG5cdFx0Ly8g5Y+v6KeG5YyW57yW6L6R5ZmoIC8g5pawd2lraXRleHTmqKHlvI9cblx0XHRtdy51dGlsLmFkZENTUygnaDIudmUtdWktaW5pdC1kZXNrdG9wQXJ0aWNsZVRhcmdldC1zZWN0aW9uVGl0bGV7ZGlzcGxheTpub25lfScpO1xuXHR9XG59O1xuXG5leHBvcnQge2Rpc2FibGVUaXRsZX07XG4iLCAiaW1wb3J0IHtjbGVhclVuZG9TdW1tYXJ5fSBmcm9tICcuL21vZHVsZXMvY2xlYXJVbmRvU3VtbWFyeSc7XG5pbXBvcnQge2Rpc2FibGVUaXRsZX0gZnJvbSAnLi9tb2R1bGVzL2Rpc2FibGVUaXRsZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG4vLyBpbXBvcnQge2ludHJvQUNIfSBmcm9tICcuL21vZHVsZXMvaW50cm9BQ0gnO1xuaW1wb3J0IHtwcmVsb2FkUmV2aWR9IGZyb20gJy4vbW9kdWxlcy9wcmVsb2FkUmV2aWQnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHQvLyDliKDpmaTlm57pgIDml7boh6rliqjnlJ/miJDnmoTnvJbovpHmkZjopoFcblx0Y2xlYXJVbmRvU3VtbWFyeSgkYm9keSk7XG5cblx0Ly8g5Zyo5o+Q5Lqk5paw5q616JC95pe277yM6K6p5Li76aKY5qCP5Zyo54m55a6a5oOF5Ya15LiL5aSx5pWIXG5cdGRpc2FibGVUaXRsZSgkYm9keSk7XG5cblx0Ly8g5rqQ5Luj56CB57yW6L6R5Zmo5Yqg6L294oCc57yW6L6R6K+35rGC4oCd6KGl5LiBXG5cdHByZWxvYWRSZXZpZCgkYm9keSk7XG5cblx0Ly8g5paw55So5oi35byV5a+86Iez5p2h55uu5Yib5bu65ZCR5a+877yIW1tRVzpBRkNdXe+8iVxuXHQvLyBpbnRyb0FDSCgpO1xufSk7XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdFZGl0Rm9ybV9KUy8yLjAnKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRQcmV2aWV3OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BsZWFzZSBwcmV2aWV3IHRoZSBlZGl0ZWQgdGV4dCcsXG5cdFx0XHRqYTogJ+ODl+ODrOODk+ODpeODvOOBl+OBpuOBj+OBoOOBleOBhCcsXG5cdFx0XHQnemgtaGFucyc6ICfor7flhYjpooTop4gnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL5YWI6aCQ6Ka9Jyxcblx0XHR9KSxcblx0XHRSZXZpc2lvblByZWxvYWRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb250ZW50IG9mIHJldmlzaW9uICQxIHByZWxvYWRlZC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5Yqg6L2954mI5pysJDHnmoTlhoXlrrnjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey6LyJ5YWl54mI5pysJDHnmoTlhaflrrnjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQgKi9cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gUHJlbG9hZCBjb250ZW50cyBmcm9tIFJldmlzaW9uIElEIChvbGRpZClcbiAqL1xuaW1wb3J0IHthcGl9IGZyb20gJy4vdXRpbC9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcmVsb2FkUmV2aWQgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHJldmlkID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdwcmVsb2FkcmV2aWQnKTtcblxuXHRpZiAoIXJldmlkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge3dnQWN0aW9ufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIVsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyh3Z0FjdGlvbikpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRyZXZpZHM6IE51bWJlci5wYXJzZUludChyZXZpZCwgMTApLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRydnNsb3RzOiAnbWFpbicsXG5cdH07XG5cblx0dm9pZCBhcGkuZ2V0KHBhcmFtcykudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdGNvbnN0IHtjb250ZW50fSA9IHF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5zbG90cy5tYWluO1xuXHRcdGlmIChcblx0XHRcdCRib2R5LmZpbmQoJy5vby11aS1pY29uLWhpZ2hsaWdodCcpLmxlbmd0aCAmJlxuXHRcdFx0JGJvZHkuZmluZCgnLm9vLXVpLWljb24taGlnaGxpZ2h0JykuaGFzQ2xhc3MoJ29vLXVpLWltYWdlLXByb2dyZXNzaXZlJylcblx0XHQpIHtcblx0XHRcdCRib2R5LmZpbmQoJy5vby11aS1pY29uLWhpZ2hsaWdodCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0fVxuXHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykpIHtcblx0XHRcdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUgPSBjb250ZW50O1xuXHRcdFx0JGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cERpZmZdJykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ1JldmlzaW9uUHJlbG9hZGVkJykucmVwbGFjZSgnJDEnLCByZXZpZCksIHt0eXBlOiAnc3VjY2Vzcyd9KTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcmVsb2FkUmV2aWR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEs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LE1BQU14QixLQUFLLEdBQUc7UUFBQ3lCLE1BQU07TUFBUyxDQUFDO0lBQ3ZGO0VBQ0QsQ0FBQztBQUNGOztBSHZDQSxNQUFBLEdBQUt6QyxtQkFBQTBDLFNBQVEsRUFBRWYsS0FBSyxTQUFTZ0IsU0FBUzlELE9BQXNDO0FBRTNFRCxtQkFBaUJDLEtBQUs7QUFHdEJRLGVBQWFSLEtBQUs7QUFHbEJrQyxlQUFhbEMsS0FBSztBQUluQixDQUFDOyIsCiAgIm5hbWVzIjogWyJjbGVhclVuZG9TdW1tYXJ5IiwgIiRib2R5IiwgIiR3cEF1dG9TdW1tYXJ5IiwgImZpbmQiLCAibGVuZ3RoIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJ2YWwiLCAiZGlzYWJsZVRpdGxlIiwgIiR3cFN1bW1hcnkiLCAicHJvcCIsICJub1NlY3Rpb25UaXRsZVBhZ2VzIiwgIm5vU2VjdGlvblRpdGxlUGFnZXNSZWdleCIsICJ3Z1BhZ2VOYW1lIiwgImNvbmZpZyIsICJnZXQiLCAiaW5jbHVkZXMiLCAidGVzdCIsICJhZGRDU1MiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlByZXZpZXciLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiUmV2aXNpb25QcmVsb2FkZWQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInByZWxvYWRSZXZpZCIsICJyZXZpZCIsICJ3Z0FjdGlvbiIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJyZXZpZHMiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgImZvcm1hdHZlcnNpb24iLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAidGhlbiIsICJxdWVyeSIsICJjb250ZW50IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgImhhc0NsYXNzIiwgInRyaWdnZXIiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJ2YWx1ZSIsICJub3RpZnkiLCAicmVwbGFjZSIsICJ0eXBlIiwgImdldEJvZHkiLCAiZWRpdEZvcm0iXQp9Cg==
