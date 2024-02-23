/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://github.com/MoegirlPediaInterfaceAdmins/MoegirlPediaInterfaceCodes/blob/master/src/gadgets/ShowAvatar/MediaWiki%3AGadget-ShowAvatar.css}
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/UserLinkAvatar}
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

// dist/UserLinkAvatar/UserLinkAvatar.js
//! src/UserLinkAvatar/UserLinkAvatar.ts
document.querySelectorAll(".mw-userlink").forEach((item) => {
  const img = document.createElement("img");
  img.classList.add("userlink-avatar");
  img.src = "".concat(mw.config.get("wgScriptPath"), "/extensions/Avatar/avatar.php?user=").concat(item.textContent);
  item.prepend(img);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJMaW5rQXZhdGFyL1VzZXJMaW5rQXZhdGFyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJy4vVXNlckxpbmtBdmF0YXIubGVzcyc7XG4vKiBlc2xpbnQtZGlzYWJsZSB1bmljb3JuL25vLWFycmF5LWZvci1lYWNoICovXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXctdXNlcmxpbmsnKS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRpbWcuY2xhc3NMaXN0LmFkZCgndXNlcmxpbmstYXZhdGFyJyk7XG5cdGltZy5zcmMgPSBgJHttdy5jb25maWcuZ2V0KCd3Z1NjcmlwdFBhdGgnKX0vZXh0ZW5zaW9ucy9BdmF0YXIvYXZhdGFyLnBocD91c2VyPSR7aXRlbS50ZXh0Q29udGVudH1gO1xuXHRpdGVtLnByZXBlbmQoaW1nKTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUFBLFNBQVNDLGlCQUFpQixjQUFjLEVBQUVDLFFBQVNDLFVBQVM7QUFDM0QsUUFBTUMsTUFBTUosU0FBU0ssY0FBYyxLQUFLO0FBQ3hDRCxNQUFJRSxVQUFVQyxJQUFJLGlCQUFpQjtBQUNuQ0gsTUFBSUksTUFBQSxHQUFBQyxPQUFTQyxHQUFHQyxPQUFPQyxJQUFJLGNBQWMsR0FBQyxxQ0FBQSxFQUFBSCxPQUFzQ04sS0FBS1UsV0FBVztBQUNoR1YsT0FBS1csUUFBUVYsR0FBRztBQUNqQixDQUFDOyIsCiAgIm5hbWVzIjogWyJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImZvckVhY2giLCAiaXRlbSIsICJpbWciLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc0xpc3QiLCAiYWRkIiwgInNyYyIsICJjb25jYXQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJ0ZXh0Q29udGVudCIsICJwcmVwZW5kIl0KfQo=
