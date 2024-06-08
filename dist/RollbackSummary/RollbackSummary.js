/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-rollback-summary.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/RollbackSummary}
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

// dist/RollbackSummary/RollbackSummary.js
//! src/RollbackSummary/modules/updateLinks.ts
var import_ext_gadget2 = require("ext.gadget.FilterAlteredClicks");
//! src/RollbackSummary/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Prompt: (0, import_ext_gadget.localize)({
      en: "Please enter a custom rollback summary (leave blank to use the system default summary)",
      "zh-hans": "请输入自定义回退摘要（留空则使用系统默认摘要）",
      "zh-hant": "請輸入自定義回退摘要（留空則使用系統預設摘要）"
    }),
    "Rollback edits by": (0, import_ext_gadget.localize)({
      en: "Revert edit(s) by [[Special:Contribs/$1|$1]] ([[User talk:$1|talk]]): ",
      "zh-hans": "回退[[Special:Contribs/$1|$1]]（[[User talk:$1|对话]]）的编辑：",
      "zh-hant": "回退[[Special:Contribs/$1|$1]]（[[User talk:$1|對話]]）的編輯："
    }),
    "Rollback edits by a hidden user": (0, import_ext_gadget.localize)({
      en: "Revert edit(s) by a hidden user: ",
      "zh-hans": "回退已隐藏用户的编辑：",
      "zh-hant": "回退已隱藏用戶的編輯：",
      "zh-tw": "回退已隱藏使用者的編輯："
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/RollbackSummary/modules/updateLinks.ts
var updateLinks = ($content) => {
  const $body = $content.parents("body");
  const $mwRollbackLinkA = $body.find(".mw-rollback-link a");
  $mwRollbackLinkA.off("click");
  $mwRollbackLinkA.on("click", (0, import_ext_gadget2.filterAlteredClicks)((event) => {
    event.preventDefault();
    let {
      href
    } = event.currentTarget;
    let summary = prompt(getMessage("Prompt"));
    if (summary === null) {
    } else if (summary === "") {
      location.assign(href);
    } else {
      const username = mw.util.getParamValue("from", href);
      if (username) {
        summary = getMessage("Rollback edits by").replaceAll("$1", username) + summary;
      } else {
        summary = getMessage("Rollback edits by a hidden user") + summary;
      }
      href += "&summary=".concat(encodeURIComponent(summary));
      location.assign(href);
    }
  }));
  $mwRollbackLinkA.css("color", "#099");
};
//! src/RollbackSummary/RollbackSummary.ts
mw.hook("wikipage.content").add(function rollbackSummary($content) {
  updateLinks($content);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JvbGxiYWNrU3VtbWFyeS9tb2R1bGVzL3VwZGF0ZUxpbmtzLnRzIiwgInNyYy9Sb2xsYmFja1N1bW1hcnkvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Sb2xsYmFja1N1bW1hcnkvUm9sbGJhY2tTdW1tYXJ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2ZpbHRlckFsdGVyZWRDbGlja3N9IGZyb20gJ2V4dC5nYWRnZXQuRmlsdGVyQWx0ZXJlZENsaWNrcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHVwZGF0ZUxpbmtzID0gKCRjb250ZW50OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJGNvbnRlbnQucGFyZW50cygnYm9keScpO1xuXHRjb25zdCAkbXdSb2xsYmFja0xpbmtBOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJGJvZHkuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oJy5tdy1yb2xsYmFjay1saW5rIGEnKTtcblxuXHQkbXdSb2xsYmFja0xpbmtBLm9mZignY2xpY2snKTtcblxuXHQkbXdSb2xsYmFja0xpbmtBLm9uKFxuXHRcdCdjbGljaycsXG5cdFx0ZmlsdGVyQWx0ZXJlZENsaWNrcygoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRsZXQge2hyZWZ9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblxuXHRcdFx0bGV0IHN1bW1hcnk6IHN0cmluZyB8IG51bGwgPSBwcm9tcHQoZ2V0TWVzc2FnZSgnUHJvbXB0JykpO1xuXHRcdFx0aWYgKHN1bW1hcnkgPT09IG51bGwpIHtcblx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdH0gZWxzZSBpZiAoc3VtbWFyeSA9PT0gJycpIHtcblx0XHRcdFx0bG9jYXRpb24uYXNzaWduKGhyZWYpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgdXNlcm5hbWU6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2Zyb20nLCBocmVmKTtcblx0XHRcdFx0aWYgKHVzZXJuYW1lKSB7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IGdldE1lc3NhZ2UoJ1JvbGxiYWNrIGVkaXRzIGJ5JykucmVwbGFjZUFsbCgnJDEnLCB1c2VybmFtZSkgKyBzdW1tYXJ5O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBnZXRNZXNzYWdlKCdSb2xsYmFjayBlZGl0cyBieSBhIGhpZGRlbiB1c2VyJykgKyBzdW1tYXJ5O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aHJlZiArPSBgJnN1bW1hcnk9JHtlbmNvZGVVUklDb21wb25lbnQoc3VtbWFyeSl9YDtcblxuXHRcdFx0XHRsb2NhdGlvbi5hc3NpZ24oaHJlZik7XG5cdFx0XHR9XG5cdFx0fSlcblx0KTtcblxuXHQkbXdSb2xsYmFja0xpbmtBLmNzcygnY29sb3InLCAnIzA5OScpO1xufTtcblxuZXhwb3J0IHt1cGRhdGVMaW5rc307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFByb21wdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQbGVhc2UgZW50ZXIgYSBjdXN0b20gcm9sbGJhY2sgc3VtbWFyeSAobGVhdmUgYmxhbmsgdG8gdXNlIHRoZSBzeXN0ZW0gZGVmYXVsdCBzdW1tYXJ5KScsXG5cdFx0XHQnemgtaGFucyc6ICfor7fovpPlhaXoh6rlrprkuYnlm57pgIDmkZjopoHvvIjnlZnnqbrliJnkvb/nlKjns7vnu5/pu5jorqTmkZjopoHvvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL6Ly45YWl6Ieq5a6a576p5Zue6YCA5pGY6KaB77yI55WZ56m65YmH5L2/55So57O757Wx6aCQ6Kit5pGY6KaB77yJJyxcblx0XHR9KSxcblx0XHQnUm9sbGJhY2sgZWRpdHMgYnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JldmVydCBlZGl0KHMpIGJ5IFtbU3BlY2lhbDpDb250cmlicy8kMXwkMV1dIChbW1VzZXIgdGFsazokMXx0YWxrXV0pOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Zue6YCAW1tTcGVjaWFsOkNvbnRyaWJzLyQxfCQxXV3vvIhbW1VzZXIgdGFsazokMXzlr7nor51dXe+8ieeahOe8lui+ke+8micsXG5cdFx0XHQnemgtaGFudCc6ICflm57pgIBbW1NwZWNpYWw6Q29udHJpYnMvJDF8JDFdXe+8iFtbVXNlciB0YWxrOiQxfOWwjeipsV1d77yJ55qE57eo6Lyv77yaJyxcblx0XHR9KSxcblx0XHQnUm9sbGJhY2sgZWRpdHMgYnkgYSBoaWRkZW4gdXNlcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmV2ZXJ0IGVkaXQocykgYnkgYSBoaWRkZW4gdXNlcjogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WbnumAgOW3sumakOiXj+eUqOaIt+eahOe8lui+ke+8micsXG5cdFx0XHQnemgtaGFudCc6ICflm57pgIDlt7LpmrHol4/nlKjmiLbnmoTnt6jovK/vvJonLFxuXHRcdFx0J3poLXR3JzogJ+WbnumAgOW3sumaseiXj+S9v+eUqOiAheeahOe3qOi8r++8micsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7dXBkYXRlTGlua3N9IGZyb20gJy4vbW9kdWxlcy91cGRhdGVMaW5rcyc7XG5cbm13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gcm9sbGJhY2tTdW1tYXJ5KCRjb250ZW50KTogdm9pZCB7XG5cdHVwZGF0ZUxpbmtzKCRjb250ZW50KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQWtDQyxRQUFBLGdDQUFBOztBQ0FsQyxJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHNCQUFBLEdBQXFCSixrQkFBQUcsVUFBUztNQUM3QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELG9DQUFBLEdBQW1DSixrQkFBQUcsVUFBUztNQUMzQ0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO01BQ1gsU0FBUztJQUNWLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUMsZUFBZUosZ0JBQWdCO0FBRXJDLElBQU1LLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEeEJBLElBQU1DLGNBQWVDLGNBQTJCO0FBQy9DLFFBQU1DLFFBQWlDRCxTQUFTRSxRQUFRLE1BQU07QUFDOUQsUUFBTUMsbUJBQThDRixNQUFNRyxLQUF3QixxQkFBcUI7QUFFdkdELG1CQUFpQkUsSUFBSSxPQUFPO0FBRTVCRixtQkFBaUJHLEdBQ2hCLFVBQUEsR0FDQWpCLG1CQUFBa0IscUJBQXFCQyxXQUFtQztBQUN2REEsVUFBTUMsZUFBZTtBQUVyQixRQUFJO01BQUNDO0lBQUksSUFBSUYsTUFBTUc7QUFFbkIsUUFBSUMsVUFBeUJDLE9BQU9oQixXQUFXLFFBQVEsQ0FBQztBQUN4RCxRQUFJZSxZQUFZLE1BQU07SUFFdEIsV0FBV0EsWUFBWSxJQUFJO0FBQzFCRSxlQUFTQyxPQUFPTCxJQUFJO0lBQ3JCLE9BQU87QUFDTixZQUFNTSxXQUEwQkMsR0FBR0MsS0FBS0MsY0FBYyxRQUFRVCxJQUFJO0FBQ2xFLFVBQUlNLFVBQVU7QUFDYkosa0JBQVVmLFdBQVcsbUJBQW1CLEVBQUV1QixXQUFXLE1BQU1KLFFBQVEsSUFBSUo7TUFDeEUsT0FBTztBQUNOQSxrQkFBVWYsV0FBVyxpQ0FBaUMsSUFBSWU7TUFDM0Q7QUFFQUYsY0FBQSxZQUFBVyxPQUFvQkMsbUJBQW1CVixPQUFPLENBQUM7QUFFL0NFLGVBQVNDLE9BQU9MLElBQUk7SUFDckI7RUFDRCxDQUFDLENBQ0Y7QUFFQVAsbUJBQWlCb0IsSUFBSSxTQUFTLE1BQU07QUFDckM7O0FFbkNBTixHQUFHTyxLQUFLLGtCQUFrQixFQUFFQyxJQUFJLFNBQVNDLGdCQUFnQjFCLFVBQWdCO0FBQ3hFRCxjQUFZQyxRQUFRO0FBQ3JCLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJQcm9tcHQiLCAibG9jYWxpemUiLCAiZW4iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInVwZGF0ZUxpbmtzIiwgIiRjb250ZW50IiwgIiRib2R5IiwgInBhcmVudHMiLCAiJG13Um9sbGJhY2tMaW5rQSIsICJmaW5kIiwgIm9mZiIsICJvbiIsICJmaWx0ZXJBbHRlcmVkQ2xpY2tzIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImhyZWYiLCAiY3VycmVudFRhcmdldCIsICJzdW1tYXJ5IiwgInByb21wdCIsICJsb2NhdGlvbiIsICJhc3NpZ24iLCAidXNlcm5hbWUiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgInJlcGxhY2VBbGwiLCAiY29uY2F0IiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJjc3MiLCAiaG9vayIsICJhZGQiLCAicm9sbGJhY2tTdW1tYXJ5Il0KfQo=
