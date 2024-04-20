/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect-bio-latin-names}
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

// dist/ToolsRedirect-bio-latin-names/ToolsRedirect-bio-latin-names.js
//! src/ToolsRedirect-bio-latin-names/options.json
var version = "2.0";
//! src/ToolsRedirect-bio-latin-names/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("ToolsRedirect-bio-latin-names/".concat(version));
//! src/ToolsRedirect-bio-latin-names/ToolsRedirect-bio-latin-names.ts
if (!mw.user.options.get("gadget-ToolsRedirect")) {
  void api.postWithEditToken({
    action: "options",
    change: "gadget-ToolsRedirect=1"
  });
  void mw.loader.using("ext.gadget.ToolsRedirect");
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzL29wdGlvbnMuanNvbiIsICJzcmMvVG9vbHNSZWRpcmVjdC1iaW8tbGF0aW4tbmFtZXMvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBUb29sc1JlZGlyZWN0LWJpby1sYXRpbi1uYW1lcy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL21vZHVsZXMvYXBpJztcblxuaWYgKCFtdy51c2VyLm9wdGlvbnMuZ2V0KCdnYWRnZXQtVG9vbHNSZWRpcmVjdCcpKSB7XG5cdHZvaWQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHtcblx0XHRhY3Rpb246ICdvcHRpb25zJyxcblx0XHRjaGFuZ2U6ICdnYWRnZXQtVG9vbHNSZWRpcmVjdD0xJyxcblx0fSBhcyBBcGlPcHRpb25zUGFyYW1zKTtcblxuXHR2b2lkIG13LmxvYWRlci51c2luZygnZXh0LmdhZGdldC5Ub29sc1JlZGlyZWN0Jyk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFVBQVc7O0FDQVosSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQUEsaUNBQUFDLE9BQW1ETCxPQUFPLENBQUU7O0FDRGhGLElBQUksQ0FBQ00sR0FBR0MsS0FBS0MsUUFBUUMsSUFBSSxzQkFBc0IsR0FBRztBQUNqRCxPQUFLTixJQUFJTyxrQkFBa0I7SUFDMUJDLFFBQVE7SUFDUkMsUUFBUTtFQUNULENBQXFCO0FBRXJCLE9BQUtOLEdBQUdPLE9BQU9DLE1BQU0sMEJBQTBCO0FBQ2hEOyIsCiAgIm5hbWVzIjogWyJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAibXciLCAidXNlciIsICJvcHRpb25zIiwgImdldCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJhY3Rpb24iLCAiY2hhbmdlIiwgImxvYWRlciIsICJ1c2luZyJdCn0K
