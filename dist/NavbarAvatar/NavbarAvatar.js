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
$(() => {
  let username = mw.user.getName();
  let imgsrc = "";
  if (username) {
    username = username.replace(" ", "_");
    imgsrc = "https://youshou.wiki/extensions/Avatar/avatar.php?user=".concat(username);
  } else {
    imgsrc = "https://youshou.wiki/images/avatars/default/default.gif";
  }
  const $body = $("body");
  $body.find("#citizen-userMenu__buttonCheckbox .mw-ui-icon-wikimedia-userAvatar").css({
    "background-image": "url(".concat(imgsrc, ")")
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05hdmJhckF2YXRhci9OYXZiYXJBdmF0YXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIiQoKCkgPT4ge1xuXHRsZXQgdXNlcm5hbWUgPSBtdy51c2VyLmdldE5hbWUoKTtcblx0bGV0IGltZ3NyYyA9ICcnO1xuXHRpZiAodXNlcm5hbWUpIHtcblx0XHR1c2VybmFtZSA9IHVzZXJuYW1lLnJlcGxhY2UoJyAnLCAnXycpOyAvL+mBv+WFjeWQjeensOW4puepuuagvOaXtuaXoOazleaYvuekuuWktOWDj1xuXHRcdGltZ3NyYyA9IGBodHRwczovL3lvdXNob3Uud2lraS9leHRlbnNpb25zL0F2YXRhci9hdmF0YXIucGhwP3VzZXI9JHt1c2VybmFtZX1gO1xuXHR9IGVsc2Uge1xuXHRcdGltZ3NyYyA9ICdodHRwczovL3lvdXNob3Uud2lraS9pbWFnZXMvYXZhdGFycy9kZWZhdWx0L2RlZmF1bHQuZ2lmJztcblx0fVxuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cdCRib2R5LmZpbmQoJyNjaXRpemVuLXVzZXJNZW51X19idXR0b25DaGVja2JveCAubXctdWktaWNvbi13aWtpbWVkaWEtdXNlckF2YXRhcicpLmNzcyh7XG5cdFx0J2JhY2tncm91bmQtaW1hZ2UnOiBgdXJsKCR7aW1nc3JjfSlgLFxuXHR9KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsTUFBTTtBQUNQLE1BQUlDLFdBQVdDLEdBQUdDLEtBQUtDLFFBQVE7QUFDL0IsTUFBSUMsU0FBUztBQUNiLE1BQUlKLFVBQVU7QUFDYkEsZUFBV0EsU0FBU0ssUUFBUSxLQUFLLEdBQUc7QUFDcENELGFBQUEsMERBQUFFLE9BQW1FTixRQUFRO0VBQzVFLE9BQU87QUFDTkksYUFBUztFQUNWO0FBQ0EsUUFBTUcsUUFBaUNSLEVBQUUsTUFBTTtBQUMvQ1EsUUFBTUMsS0FBSyxvRUFBb0UsRUFBRUMsSUFBSTtJQUNwRixvQkFBQSxPQUFBSCxPQUEyQkYsUUFBTSxHQUFBO0VBQ2xDLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyIkIiwgInVzZXJuYW1lIiwgIm13IiwgInVzZXIiLCAiZ2V0TmFtZSIsICJpbWdzcmMiLCAicmVwbGFjZSIsICJjb25jYXQiLCAiJGJvZHkiLCAiZmluZCIsICJjc3MiXQp9Cg==
