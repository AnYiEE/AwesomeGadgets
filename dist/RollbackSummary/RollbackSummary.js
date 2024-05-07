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
//! src/RollbackSummary/modules/core.ts
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
//! src/RollbackSummary/modules/core.ts
var updateLinks = ($content) => {
  const $body = $content.parents("body");
  const $mwRollbackLinkA = $body.find(".mw-rollback-link a");
  $mwRollbackLinkA.off("click");
  $mwRollbackLinkA.on("click", (0, import_ext_gadget2.filterAlteredClicks)(function(event) {
    event.preventDefault();
    let {
      href
    } = this;
    let summary = prompt(getMessage("Prompt"));
    if (summary === null) {
    } else if (summary === "") {
      location.assign(href);
    } else {
      const username = mw.util.getParamValue("from", href);
      if (username) {
        summary = getMessage("Rollback edits by").replace("$1", username) + summary;
      } else {
        summary = getMessage("Rollback edits by a hidden user") + summary;
      }
      href += "&summary=".concat(encodeURIComponent(summary));
      location.assign(href);
    }
  }));
  $mwRollbackLinkA.css("color", "#099");
};
var rollbackSummary = () => {
  mw.hook("wikipage.content").add(($content) => {
    updateLinks($content);
  });
};
//! src/RollbackSummary/RollbackSummary.ts
$(rollbackSummary);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JvbGxiYWNrU3VtbWFyeS9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1JvbGxiYWNrU3VtbWFyeS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1JvbGxiYWNrU3VtbWFyeS9Sb2xsYmFja1N1bW1hcnkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZmlsdGVyQWx0ZXJlZENsaWNrc30gZnJvbSAnZXh0LmdhZGdldC5GaWx0ZXJBbHRlcmVkQ2xpY2tzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgdXBkYXRlTGlua3MgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkY29udGVudC5wYXJlbnRzKCdib2R5Jyk7XG5cdGNvbnN0ICRtd1JvbGxiYWNrTGlua0E6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PignLm13LXJvbGxiYWNrLWxpbmsgYScpO1xuXHQkbXdSb2xsYmFja0xpbmtBLm9mZignY2xpY2snKTtcblx0JG13Um9sbGJhY2tMaW5rQS5vbihcblx0XHQnY2xpY2snLFxuXHRcdGZpbHRlckFsdGVyZWRDbGlja3MoZnVuY3Rpb24gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGxldCB7aHJlZn0gPSB0aGlzO1xuXHRcdFx0bGV0IHN1bW1hcnk6IHN0cmluZyB8IG51bGwgPSBwcm9tcHQoZ2V0TWVzc2FnZSgnUHJvbXB0JykpO1xuXHRcdFx0aWYgKHN1bW1hcnkgPT09IG51bGwpIHtcblx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdH0gZWxzZSBpZiAoc3VtbWFyeSA9PT0gJycpIHtcblx0XHRcdFx0bG9jYXRpb24uYXNzaWduKGhyZWYpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgdXNlcm5hbWU6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2Zyb20nLCBocmVmKTtcblx0XHRcdFx0aWYgKHVzZXJuYW1lKSB7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IGdldE1lc3NhZ2UoJ1JvbGxiYWNrIGVkaXRzIGJ5JykucmVwbGFjZSgnJDEnLCB1c2VybmFtZSkgKyBzdW1tYXJ5O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBnZXRNZXNzYWdlKCdSb2xsYmFjayBlZGl0cyBieSBhIGhpZGRlbiB1c2VyJykgKyBzdW1tYXJ5O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGhyZWYgKz0gYCZzdW1tYXJ5PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHN1bW1hcnkpfWA7XG5cdFx0XHRcdGxvY2F0aW9uLmFzc2lnbihocmVmKTtcblx0XHRcdH1cblx0XHR9KVxuXHQpO1xuXHQkbXdSb2xsYmFja0xpbmtBLmNzcygnY29sb3InLCAnIzA5OScpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJvbGxiYWNrU3VtbWFyeSA9ICgpOiB2b2lkID0+IHtcblx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZCgoJGNvbnRlbnQpOiB2b2lkID0+IHtcblx0XHR1cGRhdGVMaW5rcygkY29udGVudCk7XG5cdH0pO1xufTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0UHJvbXB0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BsZWFzZSBlbnRlciBhIGN1c3RvbSByb2xsYmFjayBzdW1tYXJ5IChsZWF2ZSBibGFuayB0byB1c2UgdGhlIHN5c3RlbSBkZWZhdWx0IHN1bW1hcnkpJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+i+k+WFpeiHquWumuS5ieWbnumAgOaRmOimge+8iOeVmeepuuWImeS9v+eUqOezu+e7n+m7mOiupOaRmOimge+8iScsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vovLjlhaXoh6rlrprnvqnlm57pgIDmkZjopoHvvIjnlZnnqbrliYfkvb/nlKjns7vntbHpoJDoqK3mkZjopoHvvIknLFxuXHRcdH0pLFxuXHRcdCdSb2xsYmFjayBlZGl0cyBieSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmV2ZXJ0IGVkaXQocykgYnkgW1tTcGVjaWFsOkNvbnRyaWJzLyQxfCQxXV0gKFtbVXNlciB0YWxrOiQxfHRhbGtdXSk6ICcsXG5cdFx0XHQnemgtaGFucyc6ICflm57pgIBbW1NwZWNpYWw6Q29udHJpYnMvJDF8JDFdXe+8iFtbVXNlciB0YWxrOiQxfOWvueivnV1d77yJ55qE57yW6L6R77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+WbnumAgFtbU3BlY2lhbDpDb250cmlicy8kMXwkMV1d77yIW1tVc2VyIHRhbGs6JDF85bCN6KmxXV3vvInnmoTnt6jovK/vvJonLFxuXHRcdH0pLFxuXHRcdCdSb2xsYmFjayBlZGl0cyBieSBhIGhpZGRlbiB1c2VyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXZlcnQgZWRpdChzKSBieSBhIGhpZGRlbiB1c2VyOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Zue6YCA5bey6ZqQ6JeP55So5oi355qE57yW6L6R77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+WbnumAgOW3sumaseiXj+eUqOaItueahOe3qOi8r++8micsXG5cdFx0XHQnemgtdHcnOiAn5Zue6YCA5bey6Zqx6JeP5L2/55So6ICF55qE57eo6Lyv77yaJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtyb2xsYmFja1N1bW1hcnl9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuJChyb2xsYmFja1N1bW1hcnkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQWtDQyxRQUFBLGdDQUFBOztBQ0FsQyxJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHNCQUFBLEdBQXFCSixrQkFBQUcsVUFBUztNQUM3QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELG9DQUFBLEdBQW1DSixrQkFBQUcsVUFBUztNQUMzQ0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO01BQ1gsU0FBUztJQUNWLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUMsZUFBZUosZ0JBQWdCO0FBRXJDLElBQU1LLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEeEJBLElBQU1DLGNBQWVDLGNBQTJCO0FBQy9DLFFBQU1DLFFBQWlDRCxTQUFTRSxRQUFRLE1BQU07QUFDOUQsUUFBTUMsbUJBQThDRixNQUFNRyxLQUF3QixxQkFBcUI7QUFDdkdELG1CQUFpQkUsSUFBSSxPQUFPO0FBQzVCRixtQkFBaUJHLEdBQ2hCLFVBQUEsR0FDQWpCLG1CQUFBa0IscUJBQW9CLFNBQVVDLE9BQWdDO0FBQzdEQSxVQUFNQyxlQUFlO0FBQ3JCLFFBQUk7TUFBQ0M7SUFBSSxJQUFJO0FBQ2IsUUFBSUMsVUFBeUJDLE9BQU9mLFdBQVcsUUFBUSxDQUFDO0FBQ3hELFFBQUljLFlBQVksTUFBTTtJQUV0QixXQUFXQSxZQUFZLElBQUk7QUFDMUJFLGVBQVNDLE9BQU9KLElBQUk7SUFDckIsT0FBTztBQUNOLFlBQU1LLFdBQTBCQyxHQUFHQyxLQUFLQyxjQUFjLFFBQVFSLElBQUk7QUFDbEUsVUFBSUssVUFBVTtBQUNiSixrQkFBVWQsV0FBVyxtQkFBbUIsRUFBRXNCLFFBQVEsTUFBTUosUUFBUSxJQUFJSjtNQUNyRSxPQUFPO0FBQ05BLGtCQUFVZCxXQUFXLGlDQUFpQyxJQUFJYztNQUMzRDtBQUNBRCxjQUFBLFlBQUFVLE9BQW9CQyxtQkFBbUJWLE9BQU8sQ0FBQztBQUMvQ0UsZUFBU0MsT0FBT0osSUFBSTtJQUNyQjtFQUNELENBQUMsQ0FDRjtBQUNBUCxtQkFBaUJtQixJQUFJLFNBQVMsTUFBTTtBQUNyQztBQUVPLElBQU1DLGtCQUFrQkEsTUFBWTtBQUMxQ1AsS0FBR1EsS0FBSyxrQkFBa0IsRUFBRUMsSUFBS3pCLGNBQW1CO0FBQ25ERCxnQkFBWUMsUUFBUTtFQUNyQixDQUFDO0FBQ0Y7O0FFbENBMEIsRUFBRUgsZUFBZTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlByb21wdCIsICJsb2NhbGl6ZSIsICJlbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAidXBkYXRlTGlua3MiLCAiJGNvbnRlbnQiLCAiJGJvZHkiLCAicGFyZW50cyIsICIkbXdSb2xsYmFja0xpbmtBIiwgImZpbmQiLCAib2ZmIiwgIm9uIiwgImZpbHRlckFsdGVyZWRDbGlja3MiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiaHJlZiIsICJzdW1tYXJ5IiwgInByb21wdCIsICJsb2NhdGlvbiIsICJhc3NpZ24iLCAidXNlcm5hbWUiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgInJlcGxhY2UiLCAiY29uY2F0IiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJjc3MiLCAicm9sbGJhY2tTdW1tYXJ5IiwgImhvb2siLCAiYWRkIiwgIiQiXQp9Cg==
