/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
 *
 * @base <https://github.com/MoegirlPediaInterfaceAdmins/MoegirlPediaInterfaceCodes/blob/f1341d831b3aab2501f7744581149ec201707bdb/src/gadgets/ShowAvatar/MediaWiki%3AGadget-ShowAvatar.css>
 * @source <https://github.com/TopRealm/InterfaceCodes/tree/master/src/Gadgets/Appearance/ShowAvatar.css>
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

// dist/ShowAvatar/ShowAvatar.js
//! src/ShowAvatar/ShowAvatar.ts
var avatarUrl = new mw.Uri("https://youshou.wiki/");
avatarUrl.query["user"] = mw.config.get("wgPageName").replace(/^user:/i, "");
avatarUrl.path = "/extensions/Avatar/avatar.php";
var imgUrl = new mw.Uri(avatarUrl);
imgUrl.query["user"] = mw.config.get("wgUserName");
var img = $("<img>").attr({
  src: imgUrl,
  title: "上传头像"
});
var link = $("<a>").attr("href", "https://youshou.wiki/wiki/Special:UploadAvatar").append(img);
$("#pt-userpage").before($('<li id="pt-avatar"></li>').append(link));
if (mw.config.get("wgNamespaceNumber") === 2 && !mw.config.get("wgPageName").includes("/")) {
  const hrefUrl = new mw.Uri(avatarUrl);
  hrefUrl.path = "/wiki/Special:Viewavatar";
  const srcUrl = new mw.Uri(avatarUrl);
  $(".ns-2 #firstHeading").prepend($("<a/>").attr({
    href: hrefUrl,
    title: "查看头像"
  }).prepend($("<img/>").attr({
    src: srcUrl,
    id: "user-rootpage-avatar"
  }).css({
    width: "1.2em",
    height: "1.2em"
  })));
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3dBdmF0YXIvU2hvd0F2YXRhci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICcuL1Nob3dBdmF0YXIubGVzcyc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1qcXVlcnkvbm8tcGFyc2UtaHRtbC1saXRlcmFsICovXG5cbmNvbnN0IGF2YXRhclVybCA9IG5ldyBtdy5VcmkoJ2h0dHBzOi8veW91c2hvdS53aWtpLycpO1xuYXZhdGFyVXJsLnF1ZXJ5Wyd1c2VyJ10gPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvXnVzZXI6L2ksICcnKTtcbmF2YXRhclVybC5wYXRoID0gJy9leHRlbnNpb25zL0F2YXRhci9hdmF0YXIucGhwJztcbmNvbnN0IGltZ1VybCA9IG5ldyBtdy5VcmkoYXZhdGFyVXJsKTtcbmltZ1VybC5xdWVyeVsndXNlciddID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpO1xuY29uc3QgaW1nID0gJCgnPGltZz4nKS5hdHRyKHtcblx0c3JjOiBpbWdVcmwsXG5cdHRpdGxlOiAn5LiK5Lyg5aS05YOPJyxcbn0pO1xuY29uc3QgbGluayA9ICQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnaHR0cHM6Ly95b3VzaG91Lndpa2kvd2lraS9TcGVjaWFsOlVwbG9hZEF2YXRhcicpLmFwcGVuZChpbWcpO1xuJCgnI3B0LXVzZXJwYWdlJykuYmVmb3JlKCQoJzxsaSBpZD1cInB0LWF2YXRhclwiPjwvbGk+JykuYXBwZW5kKGxpbmspKTtcbmlmIChtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID09PSAyICYmICFtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykuaW5jbHVkZXMoJy8nKSkge1xuXHRjb25zdCBocmVmVXJsID0gbmV3IG13LlVyaShhdmF0YXJVcmwpO1xuXHRocmVmVXJsLnBhdGggPSAnL3dpa2kvU3BlY2lhbDpWaWV3YXZhdGFyJztcblx0Y29uc3Qgc3JjVXJsID0gbmV3IG13LlVyaShhdmF0YXJVcmwpO1xuXHQkKCcubnMtMiAjZmlyc3RIZWFkaW5nJykucHJlcGVuZChcblx0XHQkKCc8YS8+Jylcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0aHJlZjogaHJlZlVybCxcblx0XHRcdFx0dGl0bGU6ICfmn6XnnIvlpLTlg48nLFxuXHRcdFx0fSlcblx0XHRcdC5wcmVwZW5kKFxuXHRcdFx0XHQkKCc8aW1nLz4nKVxuXHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdHNyYzogc3JjVXJsLFxuXHRcdFx0XHRcdFx0aWQ6ICd1c2VyLXJvb3RwYWdlLWF2YXRhcicsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdHdpZHRoOiAnMS4yZW0nLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnMS4yZW0nLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHQpXG5cdCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQU1BLFlBQVksSUFBSUMsR0FBR0MsSUFBSSx1QkFBdUI7QUFDcERGLFVBQVVHLE1BQU0sTUFBTSxJQUFJRixHQUFHRyxPQUFPQyxJQUFJLFlBQVksRUFBRUMsUUFBUSxXQUFXLEVBQUU7QUFDM0VOLFVBQVVPLE9BQU87QUFDakIsSUFBTUMsU0FBUyxJQUFJUCxHQUFHQyxJQUFJRixTQUFTO0FBQ25DUSxPQUFPTCxNQUFNLE1BQU0sSUFBSUYsR0FBR0csT0FBT0MsSUFBSSxZQUFZO0FBQ2pELElBQU1JLE1BQU1DLEVBQUUsT0FBTyxFQUFFQyxLQUFLO0VBQzNCQyxLQUFLSjtFQUNMSyxPQUFPO0FBQ1IsQ0FBQztBQUNELElBQU1DLE9BQU9KLEVBQUUsS0FBSyxFQUFFQyxLQUFLLFFBQVEsZ0RBQWdELEVBQUVJLE9BQU9OLEdBQUc7QUFDL0ZDLEVBQUUsY0FBYyxFQUFFTSxPQUFPTixFQUFFLDBCQUEwQixFQUFFSyxPQUFPRCxJQUFJLENBQUM7QUFDbkUsSUFBSWIsR0FBR0csT0FBT0MsSUFBSSxtQkFBbUIsTUFBTSxLQUFLLENBQUNKLEdBQUdHLE9BQU9DLElBQUksWUFBWSxFQUFFWSxTQUFTLEdBQUcsR0FBRztBQUMzRixRQUFNQyxVQUFVLElBQUlqQixHQUFHQyxJQUFJRixTQUFTO0FBQ3BDa0IsVUFBUVgsT0FBTztBQUNmLFFBQU1ZLFNBQVMsSUFBSWxCLEdBQUdDLElBQUlGLFNBQVM7QUFDbkNVLElBQUUscUJBQXFCLEVBQUVVLFFBQ3hCVixFQUFFLE1BQU0sRUFDTkMsS0FBSztJQUNMVSxNQUFNSDtJQUNOTCxPQUFPO0VBQ1IsQ0FBQyxFQUNBTyxRQUNBVixFQUFFLFFBQVEsRUFDUkMsS0FBSztJQUNMQyxLQUFLTztJQUNMRyxJQUFJO0VBQ0wsQ0FBQyxFQUNBQyxJQUFJO0lBQ0pDLE9BQU87SUFDUEMsUUFBUTtFQUNULENBQUMsQ0FDSCxDQUNGO0FBQ0Q7IiwKICAibmFtZXMiOiBbImF2YXRhclVybCIsICJtdyIsICJVcmkiLCAicXVlcnkiLCAiY29uZmlnIiwgImdldCIsICJyZXBsYWNlIiwgInBhdGgiLCAiaW1nVXJsIiwgImltZyIsICIkIiwgImF0dHIiLCAic3JjIiwgInRpdGxlIiwgImxpbmsiLCAiYXBwZW5kIiwgImJlZm9yZSIsICJpbmNsdWRlcyIsICJocmVmVXJsIiwgInNyY1VybCIsICJwcmVwZW5kIiwgImhyZWYiLCAiaWQiLCAiY3NzIiwgIndpZHRoIiwgImhlaWdodCJdCn0K
