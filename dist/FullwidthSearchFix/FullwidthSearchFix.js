/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-fullwidth-search-fix.js}
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/FullwidthSearchFix}
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

// dist/FullwidthSearchFix/FullwidthSearchFix.js
//! src/FullwidthSearchFix/modules/constant.ts
var URL_FULLTEXT = mw.util.getParamValue("fulltext");
var URL_SEARCH = mw.util.getParamValue("search");
var WG_NAMESPACE_IDS = mw.config.get("wgNamespaceIds");
var WG_SCRIPT = mw.config.get("wgScript");
//! src/FullwidthSearchFix/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Redirecting to": (0, import_ext_gadget.localize)({
      en: "Redirecting to $1",
      ja: "「$1」にリダイレクト中",
      "zh-hans": "正在重定向至“$1”",
      "zh-hant": "正在重新導向至“$1”"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/FullwidthSearchFix/modules/redirect.ts
var import_ext_gadget2 = require("ext.gadget.Toastify");
var redirect = (nameSpace, pageName) => {
  (0, import_ext_gadget2.toastify)({
    text: getMessage("Redirecting to").replace("$1", "".concat(nameSpace, ":").concat(pageName)),
    duration: -1
  }, "info");
  const href = new mw.Uri(WG_SCRIPT).extend({
    search: "".concat(nameSpace, ":").concat(pageName)
  }).toString();
  location.href = href;
};
//! src/FullwidthSearchFix/FullwidthSearchFix.ts
(function fullwidthSearchFix() {
  if (URL_FULLTEXT || !URL_SEARCH) {
    return;
  }
  const colonIndex = URL_SEARCH.indexOf("：");
  if (colonIndex === -1) {
    return;
  }
  const nameSpace = URL_SEARCH.slice(0, Math.max(0, colonIndex));
  const pageName = URL_SEARCH.slice(Math.max(0, colonIndex + 1));
  if (!WG_NAMESPACE_IDS[nameSpace.toLowerCase()]) {
    return;
  }
  redirect(nameSpace, pageName);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Z1bGx3aWR0aFNlYXJjaEZpeC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9GdWxsd2lkdGhTZWFyY2hGaXgvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9GdWxsd2lkdGhTZWFyY2hGaXgvbW9kdWxlcy9yZWRpcmVjdC50cyIsICJzcmMvRnVsbHdpZHRoU2VhcmNoRml4L0Z1bGx3aWR0aFNlYXJjaEZpeC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgVVJMX0ZVTExURVhUOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdmdWxsdGV4dCcpO1xuY29uc3QgVVJMX1NFQVJDSDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VhcmNoJyk7XG5cbmNvbnN0IFdHX05BTUVTUEFDRV9JRFM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZUlkcycpO1xuY29uc3QgV0dfU0NSSVBUOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpO1xuXG5leHBvcnQge1VSTF9GVUxMVEVYVCwgVVJMX1NFQVJDSCwgV0dfTkFNRVNQQUNFX0lEUywgV0dfU0NSSVBUfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J1JlZGlyZWN0aW5nIHRvJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZWRpcmVjdGluZyB0byAkMScsXG5cdFx0XHRqYTogJ+OAjCQx44CN44Gr44Oq44OA44Kk44Os44Kv44OI5LitJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOmHjeWumuWQkeiHs+KAnCQx4oCdJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOmHjeaWsOWwjuWQkeiHs+KAnCQx4oCdJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtXR19TQ1JJUFR9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHJlZGlyZWN0ID0gKG5hbWVTcGFjZTogc3RyaW5nLCBwYWdlTmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1JlZGlyZWN0aW5nIHRvJykucmVwbGFjZSgnJDEnLCBgJHtuYW1lU3BhY2V9OiR7cGFnZU5hbWV9YCksXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCBocmVmOiBzdHJpbmcgPSBuZXcgbXcuVXJpKFdHX1NDUklQVClcblx0XHQuZXh0ZW5kKHtcblx0XHRcdHNlYXJjaDogYCR7bmFtZVNwYWNlfToke3BhZ2VOYW1lfWAsXG5cdFx0fSlcblx0XHQudG9TdHJpbmcoKTtcblx0bG9jYXRpb24uaHJlZiA9IGhyZWY7XG59O1xuXG5leHBvcnQge3JlZGlyZWN0fTtcbiIsICJpbXBvcnQge1VSTF9GVUxMVEVYVCwgVVJMX1NFQVJDSCwgV0dfTkFNRVNQQUNFX0lEU30gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7cmVkaXJlY3R9IGZyb20gJy4vbW9kdWxlcy9yZWRpcmVjdCc7XG5cbihmdW5jdGlvbiBmdWxsd2lkdGhTZWFyY2hGaXgoKTogdm9pZCB7XG5cdC8vIGRvbid0IGJlIHRvbyBhZ2dyZXNpdmUuIGp1c3QgZml4IHNvbWUgb2J2aW91cyB0eXBvc1xuXHRpZiAoVVJMX0ZVTExURVhUIHx8ICFVUkxfU0VBUkNIKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gbmFtZXNwYWNlIG5hbWVzXG5cdGNvbnN0IGNvbG9uSW5kZXg6IG51bWJlciA9IFVSTF9TRUFSQ0guaW5kZXhPZign77yaJyk7XG5cdGlmIChjb2xvbkluZGV4ID09PSAtMSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIGlmIG5hbWVzcGFjZSBpcyB2YWxpZFxuXHRjb25zdCBuYW1lU3BhY2U6IHN0cmluZyA9IFVSTF9TRUFSQ0guc2xpY2UoMCwgTWF0aC5tYXgoMCwgY29sb25JbmRleCkpO1xuXHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gVVJMX1NFQVJDSC5zbGljZShNYXRoLm1heCgwLCBjb2xvbkluZGV4ICsgMSkpO1xuXHRpZiAoIVdHX05BTUVTUEFDRV9JRFNbbmFtZVNwYWNlLnRvTG93ZXJDYXNlKCldKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cmVkaXJlY3QobmFtZVNwYWNlLCBwYWdlTmFtZSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZUFBOEJDLEdBQUdDLEtBQUtDLGNBQWMsVUFBVTtBQUNwRSxJQUFNQyxhQUE0QkgsR0FBR0MsS0FBS0MsY0FBYyxRQUFRO0FBRWhFLElBQU1FLG1CQUEyQ0osR0FBR0ssT0FBT0MsSUFBSSxnQkFBZ0I7QUFDL0UsSUFBTUMsWUFBb0JQLEdBQUdLLE9BQU9DLElBQUksVUFBVTs7QUNKbEQsSUFBQUUsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sbUJBQUEsR0FBa0JGLGtCQUFBRyxVQUFTO01BQzFCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUMsZUFBZUosZ0JBQWdCO0FBRXJDLElBQU1LLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDZkEsSUFBQUMscUJBQXVCUixRQUFBLHFCQUFBO0FBRXZCLElBQU1TLFdBQVdBLENBQUNDLFdBQW1CQyxhQUEyQjtBQUMvRCxHQUFBLEdBQUFILG1CQUFBSSxVQUNDO0lBQ0NDLE1BQU1QLFdBQVcsZ0JBQWdCLEVBQUVRLFFBQVEsTUFBQSxHQUFBQyxPQUFTTCxXQUFTLEdBQUEsRUFBQUssT0FBSUosUUFBUSxDQUFFO0lBQzNFSyxVQUFVO0VBQ1gsR0FDQSxNQUNEO0FBRUEsUUFBTUMsT0FBZSxJQUFJMUIsR0FBRzJCLElBQUlwQixTQUFTLEVBQ3ZDcUIsT0FBTztJQUNQQyxRQUFBLEdBQUFMLE9BQVdMLFdBQVMsR0FBQSxFQUFBSyxPQUFJSixRQUFRO0VBQ2pDLENBQUMsRUFDQVUsU0FBUztBQUNYQyxXQUFTTCxPQUFPQTtBQUNqQjs7Q0NoQkMsU0FBU00scUJBQTJCO0FBRXBDLE1BQUlqQyxnQkFBZ0IsQ0FBQ0ksWUFBWTtBQUNoQztFQUNEO0FBR0EsUUFBTThCLGFBQXFCOUIsV0FBVytCLFFBQVEsR0FBRztBQUNqRCxNQUFJRCxlQUFlLElBQUk7QUFDdEI7RUFDRDtBQUdBLFFBQU1kLFlBQW9CaEIsV0FBV2dDLE1BQU0sR0FBR0MsS0FBS0MsSUFBSSxHQUFHSixVQUFVLENBQUM7QUFDckUsUUFBTWIsV0FBbUJqQixXQUFXZ0MsTUFBTUMsS0FBS0MsSUFBSSxHQUFHSixhQUFhLENBQUMsQ0FBQztBQUNyRSxNQUFJLENBQUM3QixpQkFBaUJlLFVBQVVtQixZQUFZLENBQUMsR0FBRztBQUMvQztFQUNEO0FBRUFwQixXQUFTQyxXQUFXQyxRQUFRO0FBQzdCLEdBQUc7IiwKICAibmFtZXMiOiBbIlVSTF9GVUxMVEVYVCIsICJtdyIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiVVJMX1NFQVJDSCIsICJXR19OQU1FU1BBQ0VfSURTIiwgImNvbmZpZyIsICJnZXQiLCAiV0dfU0NSSVBUIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVkaXJlY3QiLCAibmFtZVNwYWNlIiwgInBhZ2VOYW1lIiwgInRvYXN0aWZ5IiwgInRleHQiLCAicmVwbGFjZSIsICJjb25jYXQiLCAiZHVyYXRpb24iLCAiaHJlZiIsICJVcmkiLCAiZXh0ZW5kIiwgInNlYXJjaCIsICJ0b1N0cmluZyIsICJsb2NhdGlvbiIsICJmdWxsd2lkdGhTZWFyY2hGaXgiLCAiY29sb25JbmRleCIsICJpbmRleE9mIiwgInNsaWNlIiwgIk1hdGgiLCAibWF4IiwgInRvTG93ZXJDYXNlIl0KfQo=
