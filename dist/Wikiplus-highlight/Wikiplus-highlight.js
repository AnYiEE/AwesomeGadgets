/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Wikiplus-highlight}
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

// dist/Wikiplus-highlight/Wikiplus-highlight.js
//! src/Wikiplus-highlight/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("Wikiplus-highlight/2.0");
//! src/Wikiplus-highlight/Wikiplus-highlight.ts
if (!mw.user.options.get("gadget-Wikiplus")) {
  void api.postWithEditToken({
    action: "options",
    change: "gadget-Wikiplus=1"
  });
  void mw.loader.using("ext.gadget.Wikiplus");
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2lwbHVzLWhpZ2hsaWdodC9tb2R1bGVzL2FwaS50cyIsICJzcmMvV2lraXBsdXMtaGlnaGxpZ2h0L1dpa2lwbHVzLWhpZ2hsaWdodC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdXaWtpcGx1cy1oaWdobGlnaHQvMi4wJyk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5cbmlmICghbXcudXNlci5vcHRpb25zLmdldCgnZ2FkZ2V0LVdpa2lwbHVzJykpIHtcblx0dm9pZCBhcGkucG9zdFdpdGhFZGl0VG9rZW4oe1xuXHRcdGFjdGlvbjogJ29wdGlvbnMnLFxuXHRcdGNoYW5nZTogJ2dhZGdldC1XaWtpcGx1cz0xJyxcblx0fSBhcyBBcGlPcHRpb25zUGFyYW1zKTtcblxuXHR2b2lkIG13LmxvYWRlci51c2luZygnZXh0LmdhZGdldC5XaWtpcGx1cycpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBVSx3QkFBd0I7O0FDQXRELElBQUksQ0FBQ0MsR0FBR0MsS0FBS0MsUUFBUUMsSUFBSSxpQkFBaUIsR0FBRztBQUM1QyxPQUFLTCxJQUFJTSxrQkFBa0I7SUFDMUJDLFFBQVE7SUFDUkMsUUFBUTtFQUNULENBQXFCO0FBRXJCLE9BQUtOLEdBQUdPLE9BQU9DLE1BQU0scUJBQXFCO0FBQzNDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAibXciLCAidXNlciIsICJvcHRpb25zIiwgImdldCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJhY3Rpb24iLCAiY2hhbmdlIiwgImxvYWRlciIsICJ1c2luZyJdCn0K
