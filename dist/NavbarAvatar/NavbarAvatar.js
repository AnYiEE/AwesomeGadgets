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
  imgsrc = "".concat(mw.config.get("wgServer"), "/extensions/Avatar/avatar.php?user=").concat(username);
} else {
  imgsrc = "".concat(mw.config.get("wgServer"), "/images/avatars/default/default.gif");
}
var $body = $("body");
$body.find("#citizen-userMenu__buttonCheckbox .mw-ui-icon-wikimedia-userAvatar").css({
  "background-image": "url(".concat(imgsrc, ")")
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05hdmJhckF2YXRhci9OYXZiYXJBdmF0YXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAnLi9OYXZiYXJBdmF0YXIubGVzcyc7XG5sZXQgdXNlcm5hbWUgPSBtdy51c2VyLmdldE5hbWUoKTtcbmxldCBpbWdzcmMgPSAnJztcbmlmICh1c2VybmFtZSkge1xuXHR1c2VybmFtZSA9IHVzZXJuYW1lLnJlcGxhY2UoJyAnLCAnXycpOyAvLyDpgb/lhY3lkI3np7DljIXlkKvnqbrmoLzml7bml6Dms5XmmL7npLrlpLTlg49cblx0aW1nc3JjID0gYCR7bXcuY29uZmlnLmdldCgnd2dTZXJ2ZXInKX0vZXh0ZW5zaW9ucy9BdmF0YXIvYXZhdGFyLnBocD91c2VyPSR7dXNlcm5hbWV9YDtcbn0gZWxzZSB7XG5cdGltZ3NyYyA9IGAke213LmNvbmZpZy5nZXQoJ3dnU2VydmVyJyl9L2ltYWdlcy9hdmF0YXJzL2RlZmF1bHQvZGVmYXVsdC5naWZgO1xufVxuY29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuJGJvZHkuZmluZCgnI2NpdGl6ZW4tdXNlck1lbnVfX2J1dHRvbkNoZWNrYm94IC5tdy11aS1pY29uLXdpa2ltZWRpYS11c2VyQXZhdGFyJykuY3NzKHtcblx0J2JhY2tncm91bmQtaW1hZ2UnOiBgdXJsKCR7aW1nc3JjfSlgLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxXQUFXQyxHQUFHQyxLQUFLQyxRQUFRO0FBQy9CLElBQUlDLFNBQVM7QUFDYixJQUFJSixVQUFVO0FBQ2JBLGFBQVdBLFNBQVNLLFFBQVEsS0FBSyxHQUFHO0FBQ3BDRCxXQUFBLEdBQUFFLE9BQVlMLEdBQUdNLE9BQU9DLElBQUksVUFBVSxHQUFDLHFDQUFBLEVBQUFGLE9BQXNDTixRQUFRO0FBQ3BGLE9BQU87QUFDTkksV0FBQSxHQUFBRSxPQUFZTCxHQUFHTSxPQUFPQyxJQUFJLFVBQVUsR0FBQyxxQ0FBQTtBQUN0QztBQUNBLElBQU1DLFFBQWlDQyxFQUFFLE1BQU07QUFDL0NELE1BQU1FLEtBQUssb0VBQW9FLEVBQUVDLElBQUk7RUFDcEYsb0JBQUEsT0FBQU4sT0FBMkJGLFFBQU0sR0FBQTtBQUNsQyxDQUFDOyIsCiAgIm5hbWVzIjogWyJ1c2VybmFtZSIsICJtdyIsICJ1c2VyIiwgImdldE5hbWUiLCAiaW1nc3JjIiwgInJlcGxhY2UiLCAiY29uY2F0IiwgImNvbmZpZyIsICJnZXQiLCAiJGJvZHkiLCAiJCIsICJmaW5kIiwgImNzcyJdCn0K
