/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/ToolsRedirect-bio-latin-names}
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

// dist/ToolsRedirect-bio-latin-names/ToolsRedirect-bio-latin-names.js
//! src/ToolsRedirect-bio-latin-names/ToolsRedirect-bio-latin-names.ts
var import_ext_gadget = require("ext.gadget.Util");
(() => {
  if (mw.user.options.get("gadget-ToolsRedirect")) {
    return;
  }
  const api = (0, import_ext_gadget.initMwApi)("ToolsRedirect-bio-latin-names/2.0");
  void api.postWithEditToken({
    action: "options",
    format: "json",
    change: "gadget-ToolsRedirect=1"
  });
  void mw.loader.using(["ext.gadget.ToolsRedirect"]);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuKCgpOiB2b2lkID0+IHtcblx0aWYgKG13LnVzZXIub3B0aW9ucy5nZXQoJ2dhZGdldC1Ub29sc1JlZGlyZWN0JykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBhcGkgPSBpbml0TXdBcGkoJ1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzLzIuMCcpO1xuXG5cdHZvaWQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHtcblx0XHRhY3Rpb246ICdvcHRpb25zJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRjaGFuZ2U6ICdnYWRnZXQtVG9vbHNSZWRpcmVjdD0xJyxcblx0fSk7XG5cblx0dm9pZCBtdy5sb2FkZXIudXNpbmcoWydleHQuZ2FkZ2V0LlRvb2xzUmVkaXJlY3QnXSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBd0JDLFFBQUEsaUJBQUE7Q0FFdkIsTUFBWTtBQUNaLE1BQUlDLEdBQUdDLEtBQUtDLFFBQVFDLElBQUksc0JBQXNCLEdBQUc7QUFDaEQ7RUFDRDtBQUVBLFFBQU1DLE9BQUEsR0FBTU4sa0JBQUFPLFdBQVUsbUNBQW1DO0FBRXpELE9BQUtELElBQUlFLGtCQUFrQjtJQUMxQkMsUUFBUTtJQUNSQyxRQUFRO0lBQ1JDLFFBQVE7RUFDVCxDQUFDO0FBRUQsT0FBS1QsR0FBR1UsT0FBT0MsTUFBTSxDQUFDLDBCQUEwQixDQUFDO0FBQ2xELEdBQUc7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAibXciLCAidXNlciIsICJvcHRpb25zIiwgImdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiY2hhbmdlIiwgImxvYWRlciIsICJ1c2luZyJdCn0K
