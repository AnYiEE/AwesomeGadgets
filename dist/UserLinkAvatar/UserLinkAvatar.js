/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://github.com/MoegirlPediaInterfaceAdmins/MoegirlPediaInterfaceCodes/blob/master/src/gadgets/ShowAvatar/MediaWiki%3AGadget-ShowAvatar.css}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/UserLinkAvatar}
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

// dist/UserLinkAvatar/UserLinkAvatar.js
//! src/UserLinkAvatar/UserLinkAvatar.ts
document.querySelectorAll(".mw-userlink").forEach((item) => {
  const img = document.createElement("img");
  img.classList.add("userlink-avatar");
  img.src = "".concat(mw.config.get("wgScriptPath"), "/extensions/Avatar/avatar.php?user=").concat(item.textContent);
  img.alt = "";
  item.prepend(img);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJMaW5rQXZhdGFyL1VzZXJMaW5rQXZhdGFyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJy4vVXNlckxpbmtBdmF0YXIubGVzcyc7XG5cbi8qIGVzbGludC1kaXNhYmxlIHVuaWNvcm4vbm8tYXJyYXktZm9yLWVhY2ggKi9cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdy11c2VybGluaycpLmZvckVhY2goKGl0ZW0pID0+IHtcblx0Y29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdGltZy5jbGFzc0xpc3QuYWRkKCd1c2VybGluay1hdmF0YXInKTtcblx0aW1nLnNyYyA9IGAke213LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpfS9leHRlbnNpb25zL0F2YXRhci9hdmF0YXIucGhwP3VzZXI9JHtpdGVtLnRleHRDb250ZW50fWA7XG5cdGltZy5hbHQgPSAnJzsgLy8gYWx0PVwiXCIgZm9yIGRlY29yYXRpdmUgaW1hZ2VzXG5cdGl0ZW0ucHJlcGVuZChpbWcpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQUEsU0FBU0MsaUJBQWlCLGNBQWMsRUFBRUMsUUFBU0MsVUFBUztBQUMzRCxRQUFNQyxNQUFNSixTQUFTSyxjQUFjLEtBQUs7QUFDeENELE1BQUlFLFVBQVVDLElBQUksaUJBQWlCO0FBQ25DSCxNQUFJSSxNQUFBLEdBQUFDLE9BQVNDLEdBQUdDLE9BQU9DLElBQUksY0FBYyxHQUFDLHFDQUFBLEVBQUFILE9BQXNDTixLQUFLVSxXQUFXO0FBQ2hHVCxNQUFJVSxNQUFNO0FBQ1ZYLE9BQUtZLFFBQVFYLEdBQUc7QUFDakIsQ0FBQzsiLAogICJuYW1lcyI6IFsiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJmb3JFYWNoIiwgIml0ZW0iLCAiaW1nIiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NMaXN0IiwgImFkZCIsICJzcmMiLCAiY29uY2F0IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAidGV4dENvbnRlbnQiLCAiYWx0IiwgInByZXBlbmQiXQp9Cg==
