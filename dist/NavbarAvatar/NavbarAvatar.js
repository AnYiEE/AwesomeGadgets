/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0|import=no}}'
 * @author 顶呱呱的阿杰 
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

// dist/NavbarAvatar/NavbarAvatar.js
//! src/NavbarAvatar/NavbarAvatar.ts
var username = mw.user.getName();
var imgsrc = "";
if (username) {
  username = username.replace(" ", "_");
  imgsrc = "https://youshou.wiki/extensions/Avatar/avatar.php?user=".concat(username);
} else {
  imgsrc = "https://youshou.wiki/images/avatars/default/default.gif";
}
var $body = $("body");
$body.find("#citizen-userMenu__buttonCheckbox .mw-ui-icon-wikimedia-userAvatar").css({
  "background-image": "url(".concat(imgsrc, ")")
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05hdmJhckF2YXRhci9OYXZiYXJBdmF0YXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAnLi9OYXZiYXJBdmF0YXIubGVzcyc7XG5sZXQgdXNlcm5hbWUgPSBtdy51c2VyLmdldE5hbWUoKTtcbmxldCBpbWdzcmMgPSAnJztcbmlmICh1c2VybmFtZSkge1xuXHR1c2VybmFtZSA9IHVzZXJuYW1lLnJlcGxhY2UoJyAnLCAnXycpOyAvL+mBv+WFjeWQjeensOW4puepuuagvOaXtuaXoOazleaYvuekuuWktOWDj1xuXHRpbWdzcmMgPSBgaHR0cHM6Ly95b3VzaG91Lndpa2kvZXh0ZW5zaW9ucy9BdmF0YXIvYXZhdGFyLnBocD91c2VyPSR7dXNlcm5hbWV9YDtcbn0gZWxzZSB7XG5cdGltZ3NyYyA9ICdodHRwczovL3lvdXNob3Uud2lraS9pbWFnZXMvYXZhdGFycy9kZWZhdWx0L2RlZmF1bHQuZ2lmJztcbn1cbmNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcbiRib2R5LmZpbmQoJyNjaXRpemVuLXVzZXJNZW51X19idXR0b25DaGVja2JveCAubXctdWktaWNvbi13aWtpbWVkaWEtdXNlckF2YXRhcicpLmNzcyh7XG5cdCdiYWNrZ3JvdW5kLWltYWdlJzogYHVybCgke2ltZ3NyY30pYCxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsV0FBV0MsR0FBR0MsS0FBS0MsUUFBUTtBQUMvQixJQUFJQyxTQUFTO0FBQ2IsSUFBSUosVUFBVTtBQUNiQSxhQUFXQSxTQUFTSyxRQUFRLEtBQUssR0FBRztBQUNwQ0QsV0FBQSwwREFBQUUsT0FBbUVOLFFBQVE7QUFDNUUsT0FBTztBQUNOSSxXQUFTO0FBQ1Y7QUFDQSxJQUFNRyxRQUFpQ0MsRUFBRSxNQUFNO0FBQy9DRCxNQUFNRSxLQUFLLG9FQUFvRSxFQUFFQyxJQUFJO0VBQ3BGLG9CQUFBLE9BQUFKLE9BQTJCRixRQUFNLEdBQUE7QUFDbEMsQ0FBQzsiLAogICJuYW1lcyI6IFsidXNlcm5hbWUiLCAibXciLCAidXNlciIsICJnZXROYW1lIiwgImltZ3NyYyIsICJyZXBsYWNlIiwgImNvbmNhdCIsICIkYm9keSIsICIkIiwgImZpbmQiLCAiY3NzIl0KfQo=
