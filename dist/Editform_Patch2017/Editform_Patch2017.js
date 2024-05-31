/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Editform_Patch2017}
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

// dist/Editform_Patch2017/Editform_Patch2017.js
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
//! src/Editform_Patch2017/Editform_Patch2017.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Editform_Patch2017/options.json
var dialogLicenseId = "ve-ui-mwSaveDialog-license";
var targetClass = "ve-ui-mwSaveDialog-checkboxes";
//! src/Editform_Patch2017/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    minoredit: (0, import_ext_gadget.localize)({
      en: "This is a minor edit",
      "zh-hans": "这是一次小编辑",
      "zh-hant": "這是次要編輯"
    }),
    watchthis: (0, import_ext_gadget.localize)({
      en: "Watch this page",
      "zh-hans": "监视此页面",
      "zh-hant": "監視此頁面"
    }),
    copyrightwarning: (0, import_ext_gadget.localize)({
      en: '<p>By clicking the "Save page" or "Save changes" button, you agree to the <i><a href="/wiki/LIB:TOS" title="Terms of Use">Terms of Use</a></i>, <i><a href="/wiki/LIB:ZC" title="Common Program">Common Program</a></i>, and the <i><a href="/wiki/LIB:CP" title="Copyright Policy">Copyright Policy</a></i>. You agree to released all your contributions under the <i><a href="/wiki/LIB:CC-BY-SA-4.0" title="Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)">Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)</a></i>. You promise to us that the content you submit does not involve in copyright infringement or infringement on legitimate rights and interests of others.<br><b>If you do not agree to terms and policies mentioned above, please do not submit your work.</b></p>',
      "zh-hans": '<p>点击“<b>保存页面</b>”或“<b>保存更改</b>”按钮，即表示您<b>同意</b>《<b><a href="/wiki/LIB:TOS" title="有兽档案馆用户协议">有兽档案馆用户协议</a></b>》、《<b><a href="/wiki/LIB:ZC" title="有兽档案馆章程">有兽档案馆章程</a></b>》及本网站<b><a href="/wiki/LIB:CP" title="著作权条例">著作权条例</a></b>，<b>同意</b>依据<b><a href="/wiki/Help:CC-BY-SA-4.0" title="知识共享 署名—相同方式共享 4.0 协议国际版">CC-BY-SA 4.0</a></b>协议授权他人使用您所发布的内容，并<b>承诺</b>所提交的内容不侵犯他人的著作权及其他合法权益。<br>若您不同意《用户协议》、《档案馆章程》或本网站著作权条例，请勿点击按钮发布内容。</p>',
      "zh-hant": '<p>點擊“<b>儲存頁面</b>”或“<b>儲存變更</b>”按鈕，即表示您<b>同意</b>《<b><a href="/wiki/LIB:TOS" title="有兽档案馆用戶協議">有兽档案馆用戶協議</a></b>》、《<b><a href="/wiki/LIB:ZC" title="有兽档案馆章程">有兽档案馆章程</a></b>》及本網站<b><a href="/wiki/LIB:CP" title="著作權條例">著作權條例</a></b>，<b>同意</b>依據<b><a href="/wiki/Help:CC-BY-SA-4.0" title="知识共享 署名—相同方式共享 4.0 协议国际版">CC-BY-SA 4.0</a></b>協議授權他人使用您所發佈的內容，並<b>承諾</b>所提交的內容不侵犯他人的著作權及其他合法權益。<br>若您不同意《用戶協議》、《档案馆章程》或本網站著作權條例，請勿點擊按鈕發佈內容。</p>'
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
var setMessages = () => {
  mw.messages.set({
    minoredit: getMessage("minoredit"),
    watchthis: getMessage("watchthis")
  });
};
//! src/Editform_Patch2017/modules/processVisualEditor.ts
var processVisualEditor = ({
  $body
}) => {
  const $labels = $body.find(".".concat(targetClass)).find("label");
  var _iterator = _createForOfIteratorHelper($labels), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _label$textContent;
      const label = _step.value;
      if (!((_label$textContent = label.textContent) !== null && _label$textContent !== void 0 && _label$textContent.startsWith("⧼"))) {
        continue;
      }
      const labelName = label.textContent.replace("⧼", "").replace("⧽", "");
      if (["minoredit", "watchthis"].includes(labelName)) {
        label.textContent = getMessage(labelName);
        label.title = getMessage(labelName);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (!$body.find(".".concat(dialogLicenseId)).children().length) {
    $body.find(".".concat(dialogLicenseId)).append($("<div>").addClass("fmbox plainlinks fmbox-system").append($("<div>").addClass("mbox-text").html(getMessage("copyrightwarning"))));
  }
};
//! src/Editform_Patch2017/Editform_Patch2017.ts
void (0, import_ext_gadget2.getBody)().then(function editForm($body) {
  setMessages();
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor({
      $body
    });
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9FZGl0Zm9ybV9QYXRjaDIwMTcudHMiLCAic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtzZXRNZXNzYWdlc30gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDkv67mraMyMDE354mI5rqQ5Luj56CB57yW6L6R5Zmo55WM6Z2i6ZSZ6K+vXG4gKi9cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZWRpdEZvcm0oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdHNldE1lc3NhZ2VzKCk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3Ioe1xuXHRcdFx0JGJvZHksXG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iLCAie1xuXHRcImRpYWxvZ0xpY2Vuc2VJZFwiOiBcInZlLXVpLW13U2F2ZURpYWxvZy1saWNlbnNlXCIsXG5cdFwidGFyZ2V0Q2xhc3NcIjogXCJ2ZS11aS1td1NhdmVEaWFsb2ctY2hlY2tib3hlc1wiXG59XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdG1pbm9yZWRpdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIGlzIGEgbWlub3IgZWRpdCcsXG5cdFx0XHQnemgtaGFucyc6ICfov5nmmK/kuIDmrKHlsI/nvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6YCZ5piv5qyh6KaB57eo6LyvJyxcblx0XHR9KSxcblx0XHR3YXRjaHRoaXM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2F0Y2ggdGhpcyBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ebkeinhuatpOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICfnm6PoppbmraTpoIHpnaInLFxuXHRcdH0pLFxuXHRcdGNvcHlyaWdodHdhcm5pbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnPHA+QnkgY2xpY2tpbmcgdGhlIFwiU2F2ZSBwYWdlXCIgb3IgXCJTYXZlIGNoYW5nZXNcIiBidXR0b24sIHlvdSBhZ3JlZSB0byB0aGUgPGk+PGEgaHJlZj1cIi93aWtpL0xJQjpUT1NcIiB0aXRsZT1cIlRlcm1zIG9mIFVzZVwiPlRlcm1zIG9mIFVzZTwvYT48L2k+LCA8aT48YSBocmVmPVwiL3dpa2kvTElCOlpDXCIgdGl0bGU9XCJDb21tb24gUHJvZ3JhbVwiPkNvbW1vbiBQcm9ncmFtPC9hPjwvaT4sIGFuZCB0aGUgPGk+PGEgaHJlZj1cIi93aWtpL0xJQjpDUFwiIHRpdGxlPVwiQ29weXJpZ2h0IFBvbGljeVwiPkNvcHlyaWdodCBQb2xpY3k8L2E+PC9pPi4gWW91IGFncmVlIHRvIHJlbGVhc2VkIGFsbCB5b3VyIGNvbnRyaWJ1dGlvbnMgdW5kZXIgdGhlIDxpPjxhIGhyZWY9XCIvd2lraS9MSUI6Q0MtQlktU0EtNC4wXCIgdGl0bGU9XCJDcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uLVNoYXJlQWxpa2UgNC4wIEludGVybmF0aW9uYWwgKENDIEJZLVNBIDQuMClcIj5DcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uLVNoYXJlQWxpa2UgNC4wIEludGVybmF0aW9uYWwgKENDIEJZLVNBIDQuMCk8L2E+PC9pPi4gWW91IHByb21pc2UgdG8gdXMgdGhhdCB0aGUgY29udGVudCB5b3Ugc3VibWl0IGRvZXMgbm90IGludm9sdmUgaW4gY29weXJpZ2h0IGluZnJpbmdlbWVudCBvciBpbmZyaW5nZW1lbnQgb24gbGVnaXRpbWF0ZSByaWdodHMgYW5kIGludGVyZXN0cyBvZiBvdGhlcnMuPGJyPjxiPklmIHlvdSBkbyBub3QgYWdyZWUgdG8gdGVybXMgYW5kIHBvbGljaWVzIG1lbnRpb25lZCBhYm92ZSwgcGxlYXNlIGRvIG5vdCBzdWJtaXQgeW91ciB3b3JrLjwvYj48L3A+Jyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0JzxwPueCueWHu+KAnDxiPuS/neWtmOmhtemdojwvYj7igJ3miJbigJw8Yj7kv53lrZjmm7TmlLk8L2I+4oCd5oyJ6ZKu77yM5Y2z6KGo56S65oKoPGI+5ZCM5oSPPC9iPuOAijxiPjxhIGhyZWY9XCIvd2lraS9MSUI6VE9TXCIgdGl0bGU9XCLmnInlhb3moaPmoYjppobnlKjmiLfljY/orq5cIj7mnInlhb3moaPmoYjppobnlKjmiLfljY/orq48L2E+PC9iPuOAi+OAgeOAijxiPjxhIGhyZWY9XCIvd2lraS9MSUI6WkNcIiB0aXRsZT1cIuacieWFveaho+ahiOmmhueroOeoi1wiPuacieWFveaho+ahiOmmhueroOeoizwvYT48L2I+44CL5Y+K5pys572R56uZPGI+PGEgaHJlZj1cIi93aWtpL0xJQjpDUFwiIHRpdGxlPVwi6JGX5L2c5p2D5p2h5L6LXCI+6JGX5L2c5p2D5p2h5L6LPC9hPjwvYj7vvIw8Yj7lkIzmhI88L2I+5L6d5o2uPGI+PGEgaHJlZj1cIi93aWtpL0hlbHA6Q0MtQlktU0EtNC4wXCIgdGl0bGU9XCLnn6Xor4blhbHkuqsg572y5ZCN4oCU55u45ZCM5pa55byP5YWx5LqrIDQuMCDljY/orq7lm73pmYXniYhcIj5DQy1CWS1TQSA0LjA8L2E+PC9iPuWNj+iuruaOiOadg+S7luS6uuS9v+eUqOaCqOaJgOWPkeW4g+eahOWGheWuue+8jOW5tjxiPuaJv+ivujwvYj7miYDmj5DkuqTnmoTlhoXlrrnkuI3kvrXniq/ku5bkurrnmoTokZfkvZzmnYPlj4rlhbbku5blkIjms5XmnYPnm4rjgII8YnI+6Iul5oKo5LiN5ZCM5oSP44CK55So5oi35Y2P6K6u44CL44CB44CK5qGj5qGI6aaG56ug56iL44CL5oiW5pys572R56uZ6JGX5L2c5p2D5p2h5L6L77yM6K+35Yu/54K55Ye75oyJ6ZKu5Y+R5biD5YaF5a6544CCPC9wPicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCc8cD7pu57mk4rigJw8Yj7lhLLlrZjpoIHpnaI8L2I+4oCd5oiW4oCcPGI+5YSy5a2Y6K6K5pu0PC9iPuKAneaMiemIle+8jOWNs+ihqOekuuaCqDxiPuWQjOaEjzwvYj7jgIo8Yj48YSBocmVmPVwiL3dpa2kvTElCOlRPU1wiIHRpdGxlPVwi5pyJ5YW95qGj5qGI6aaG55So5oi25Y2U6K2wXCI+5pyJ5YW95qGj5qGI6aaG55So5oi25Y2U6K2wPC9hPjwvYj7jgIvjgIHjgIo8Yj48YSBocmVmPVwiL3dpa2kvTElCOlpDXCIgdGl0bGU9XCLmnInlhb3moaPmoYjppobnq6DnqItcIj7mnInlhb3moaPmoYjppobnq6DnqIs8L2E+PC9iPuOAi+WPiuacrOe2suermTxiPjxhIGhyZWY9XCIvd2lraS9MSUI6Q1BcIiB0aXRsZT1cIuiRl+S9nOasiuaineS+i1wiPuiRl+S9nOasiuaineS+izwvYT48L2I+77yMPGI+5ZCM5oSPPC9iPuS+neaTmjxiPjxhIGhyZWY9XCIvd2lraS9IZWxwOkNDLUJZLVNBLTQuMFwiIHRpdGxlPVwi55+l6K+G5YWx5LqrIOe9suWQjeKAlOebuOWQjOaWueW8j+WFseS6qyA0LjAg5Y2P6K6u5Zu96ZmF54mIXCI+Q0MtQlktU0EgNC4wPC9hPjwvYj7ljZTorbDmjojmrIrku5bkurrkvb/nlKjmgqjmiYDnmbzkvYjnmoTlhaflrrnvvIzkuKY8Yj7mib/oq748L2I+5omA5o+Q5Lqk55qE5YWn5a655LiN5L6154qv5LuW5Lq655qE6JGX5L2c5qyK5Y+K5YW25LuW5ZCI5rOV5qyK55uK44CCPGJyPuiLpeaCqOS4jeWQjOaEj+OAiueUqOaItuWNlOitsOOAi+OAgeOAiuaho+ahiOmmhueroOeoi+OAi+aIluacrOe2suermeiRl+S9nOasiuaineS+i++8jOiri+WLv+m7nuaTiuaMiemIleeZvOS9iOWFp+WuueOAgjwvcD4nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuY29uc3Qgc2V0TWVzc2FnZXMgPSAoKSA9PiB7XG5cdG13Lm1lc3NhZ2VzLnNldCh7bWlub3JlZGl0OiBnZXRNZXNzYWdlKCdtaW5vcmVkaXQnKSwgd2F0Y2h0aGlzOiBnZXRNZXNzYWdlKCd3YXRjaHRoaXMnKX0pO1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlLCBzZXRNZXNzYWdlc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX1BhdGNoMjAxNy9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKHskYm9keX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD59KSA9PiB7XG5cdC8vIE1pc3NpbmcgbGFiZWwgbWVzc2FnZXNcblx0Y29uc3QgJGxhYmVsczogSlF1ZXJ5ID0gJGJvZHkuZmluZChgLiR7T1BUSU9OUy50YXJnZXRDbGFzc31gKS5maW5kKCdsYWJlbCcpO1xuXHRmb3IgKGNvbnN0IGxhYmVsIG9mICRsYWJlbHMpIHtcblx0XHRpZiAoIWxhYmVsLnRleHRDb250ZW50Py5zdGFydHNXaXRoKCfip7wnKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbGFiZWxOYW1lID0gbGFiZWwudGV4dENvbnRlbnQucmVwbGFjZSgn4qe8JywgJycpLnJlcGxhY2UoJ+KnvScsICcnKTtcblxuXHRcdGlmIChbJ21pbm9yZWRpdCcsICd3YXRjaHRoaXMnXS5pbmNsdWRlcyhsYWJlbE5hbWUpKSB7XG5cdFx0XHRsYWJlbC50ZXh0Q29udGVudCA9IGdldE1lc3NhZ2UobGFiZWxOYW1lIGFzICdtaW5vcmVkaXQnIHwgJ3dhdGNodGhpcycpO1xuXHRcdFx0bGFiZWwudGl0bGUgPSBnZXRNZXNzYWdlKGxhYmVsTmFtZSBhcyAnbWlub3JlZGl0JyB8ICd3YXRjaHRoaXMnKTtcblx0XHR9XG5cdH1cblxuXHQvLyBNaXNzaW5nIGNvcHlyaWdodCB3YXJuaW5nXG5cdGlmICghJGJvZHkuZmluZChgLiR7T1BUSU9OUy5kaWFsb2dMaWNlbnNlSWR9YCkuY2hpbGRyZW4oKS5sZW5ndGgpIHtcblx0XHQkYm9keS5maW5kKGAuJHtPUFRJT05TLmRpYWxvZ0xpY2Vuc2VJZH1gKS5hcHBlbmQoXG5cdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnZm1ib3ggcGxhaW5saW5rcyBmbWJveC1zeXN0ZW0nKVxuXHRcdFx0XHQuYXBwZW5kKCQoJzxkaXY+JykuYWRkQ2xhc3MoJ21ib3gtdGV4dCcpLmh0bWwoZ2V0TWVzc2FnZSgnY29weXJpZ2h0d2FybmluZycpKSlcblx0XHQpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0NyQixJQUFBQyxrQkFBbUI7QUFDbkIsSUFBQUMsY0FBZTs7QUNGaEIsSUFBQUMsb0JBQXVCSCxRQUFBLGlCQUFBO0FBRXZCLElBQU1JLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFlBQUEsR0FBV0Ysa0JBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsWUFBQSxHQUFXTCxrQkFBQUcsVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxtQkFBQSxHQUFrQk4sa0JBQUFHLFVBQVM7TUFDMUJDLElBQUk7TUFDSixXQUNDO01BQ0QsV0FDQztJQUNGLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUcsZUFBZU4sZ0JBQWdCO0FBRXJDLElBQU1PLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7QUFFQSxJQUFNQyxjQUFjQSxNQUFNO0FBQ3pCQyxLQUFHQyxTQUFTQyxJQUFJO0lBQUNYLFdBQVdNLFdBQVcsV0FBVztJQUFHSCxXQUFXRyxXQUFXLFdBQVc7RUFBQyxDQUFDO0FBQ3pGOztBQzdCQSxJQUFNTSxzQkFBc0JBLENBQUM7RUFBQ0M7QUFBSyxNQUF3QztBQUUxRSxRQUFNQyxVQUFrQkQsTUFBTUUsS0FBQSxJQUFBQyxPQUFpQm5CLFdBQVcsQ0FBRSxFQUFFa0IsS0FBSyxPQUFPO0FBQUEsTUFBQUUsWUFBQUMsMkJBQ3RESixPQUFBLEdBQUFLO0FBQUEsTUFBQTtBQUFwQixTQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUE2QjtBQUFBLFVBQUFDO0FBQUEsWUFBbEJDLFFBQUFMLE1BQUFNO0FBQ1YsVUFBSSxHQUFBRixxQkFBQ0MsTUFBTUUsaUJBQUEsUUFBQUgsdUJBQUEsVUFBTkEsbUJBQW1CSSxXQUFXLEdBQUcsSUFBRztBQUN4QztNQUNEO0FBRUEsWUFBTUMsWUFBWUosTUFBTUUsWUFBWUcsUUFBUSxLQUFLLEVBQUUsRUFBRUEsUUFBUSxLQUFLLEVBQUU7QUFFcEUsVUFBSSxDQUFDLGFBQWEsV0FBVyxFQUFFQyxTQUFTRixTQUFTLEdBQUc7QUFDbkRKLGNBQU1FLGNBQWNwQixXQUFXc0IsU0FBc0M7QUFDckVKLGNBQU1PLFFBQVF6QixXQUFXc0IsU0FBc0M7TUFDaEU7SUFDRDtFQUFBLFNBQUFJLEtBQUE7QUFBQWYsY0FBQWdCLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFmLGNBQUFpQixFQUFBO0VBQUE7QUFHQSxNQUFJLENBQUNyQixNQUFNRSxLQUFBLElBQUFDLE9BQWlCcEIsZUFBZSxDQUFFLEVBQUV1QyxTQUFTLEVBQUVDLFFBQVE7QUFDakV2QixVQUFNRSxLQUFBLElBQUFDLE9BQWlCcEIsZUFBZSxDQUFFLEVBQUV5QyxPQUN6Q0MsRUFBRSxPQUFPLEVBQ1BDLFNBQVMsK0JBQStCLEVBQ3hDRixPQUFPQyxFQUFFLE9BQU8sRUFBRUMsU0FBUyxXQUFXLEVBQUVDLEtBQUtsQyxXQUFXLGtCQUFrQixDQUFDLENBQUMsQ0FDL0U7RUFDRDtBQUNEOztBSHBCQSxNQUFBLEdBQUtaLG1CQUFBK0MsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLFNBQVM5QixPQUFzQztBQUMzRUwsY0FBWTtBQUVaQyxLQUFHbUMsS0FBSyw0QkFBNEIsRUFBRUMsSUFBSSxNQUFZO0FBQ3JEakMsd0JBQW9CO01BQ25CQztJQUNELENBQUM7RUFDRixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiZGlhbG9nTGljZW5zZUlkIiwgInRhcmdldENsYXNzIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJtaW5vcmVkaXQiLCAibG9jYWxpemUiLCAiZW4iLCAid2F0Y2h0aGlzIiwgImNvcHlyaWdodHdhcm5pbmciLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInNldE1lc3NhZ2VzIiwgIm13IiwgIm1lc3NhZ2VzIiwgInNldCIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgIiRib2R5IiwgIiRsYWJlbHMiLCAiZmluZCIsICJjb25jYXQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgIl9sYWJlbCR0ZXh0Q29udGVudCIsICJsYWJlbCIsICJ2YWx1ZSIsICJ0ZXh0Q29udGVudCIsICJzdGFydHNXaXRoIiwgImxhYmVsTmFtZSIsICJyZXBsYWNlIiwgImluY2x1ZGVzIiwgInRpdGxlIiwgImVyciIsICJlIiwgImYiLCAiY2hpbGRyZW4iLCAibGVuZ3RoIiwgImFwcGVuZCIsICIkIiwgImFkZENsYXNzIiwgImh0bWwiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIiwgImhvb2siLCAiYWRkIl0KfQo=
