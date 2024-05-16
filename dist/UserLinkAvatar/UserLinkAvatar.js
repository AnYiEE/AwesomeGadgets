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
  img.alt = "Avatar of ".concat(item.textContent);
  item.prepend(img);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJMaW5rQXZhdGFyL1VzZXJMaW5rQXZhdGFyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJy4vVXNlckxpbmtBdmF0YXIubGVzcyc7XG5cbi8qIGVzbGludC1kaXNhYmxlIHVuaWNvcm4vbm8tYXJyYXktZm9yLWVhY2ggKi9cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdy11c2VybGluaycpLmZvckVhY2goKGl0ZW0pID0+IHtcblx0Y29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdGltZy5jbGFzc0xpc3QuYWRkKCd1c2VybGluay1hdmF0YXInKTtcblx0aW1nLnNyYyA9IGAke213LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpfS9leHRlbnNpb25zL0F2YXRhci9hdmF0YXIucGhwP3VzZXI9JHtpdGVtLnRleHRDb250ZW50fWA7XG5cdGltZy5hbHQgPSBgQXZhdGFyIG9mICR7aXRlbS50ZXh0Q29udGVudH1gOyAvLyBhbHRcblx0aXRlbS5wcmVwZW5kKGltZyk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBQSxTQUFTQyxpQkFBaUIsY0FBYyxFQUFFQyxRQUFTQyxVQUFTO0FBQzNELFFBQU1DLE1BQU1KLFNBQVNLLGNBQWMsS0FBSztBQUN4Q0QsTUFBSUUsVUFBVUMsSUFBSSxpQkFBaUI7QUFDbkNILE1BQUlJLE1BQUEsR0FBQUMsT0FBU0MsR0FBR0MsT0FBT0MsSUFBSSxjQUFjLEdBQUMscUNBQUEsRUFBQUgsT0FBc0NOLEtBQUtVLFdBQVc7QUFDaEdULE1BQUlVLE1BQUEsYUFBQUwsT0FBbUJOLEtBQUtVLFdBQVc7QUFDdkNWLE9BQUtZLFFBQVFYLEdBQUc7QUFDakIsQ0FBQzsiLAogICJuYW1lcyI6IFsiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJmb3JFYWNoIiwgIml0ZW0iLCAiaW1nIiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NMaXN0IiwgImFkZCIsICJzcmMiLCAiY29uY2F0IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAidGV4dENvbnRlbnQiLCAiYWx0IiwgInByZXBlbmQiXQp9Cg==
