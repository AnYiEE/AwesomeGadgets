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
var link = $("<a>").attr("href", "https://youshou.wiki/Special:UploadAvatar").append(img);
$("#pt-userpage").before($('<li id="pt-avatar"></li>').append(link));
if (mw.config.get("wgNamespaceNumber") === 2 && !mw.config.get("wgPageName").includes("/")) {
  const hrefUrl = new mw.Uri(avatarUrl);
  hrefUrl.path = "/Special:Viewavatar";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3dBdmF0YXIvU2hvd0F2YXRhci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICcuL1Nob3dBdmF0YXIubGVzcyc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1qcXVlcnkvbm8tcGFyc2UtaHRtbC1saXRlcmFsICovXG5cbmNvbnN0IGF2YXRhclVybCA9IG5ldyBtdy5VcmkoJ2h0dHBzOi8veW91c2hvdS53aWtpLycpO1xuYXZhdGFyVXJsLnF1ZXJ5Wyd1c2VyJ10gPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvXnVzZXI6L2ksICcnKTtcbmF2YXRhclVybC5wYXRoID0gJy9leHRlbnNpb25zL0F2YXRhci9hdmF0YXIucGhwJztcbmNvbnN0IGltZ1VybCA9IG5ldyBtdy5VcmkoYXZhdGFyVXJsKTtcbmltZ1VybC5xdWVyeVsndXNlciddID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpO1xuY29uc3QgaW1nID0gJCgnPGltZz4nKS5hdHRyKHtcblx0c3JjOiBpbWdVcmwsXG5cdHRpdGxlOiAn5LiK5Lyg5aS05YOPJyxcbn0pO1xuY29uc3QgbGluayA9ICQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnaHR0cHM6Ly95b3VzaG91Lndpa2kvU3BlY2lhbDpVcGxvYWRBdmF0YXInKS5hcHBlbmQoaW1nKTtcbiQoJyNwdC11c2VycGFnZScpLmJlZm9yZSgkKCc8bGkgaWQ9XCJwdC1hdmF0YXJcIj48L2xpPicpLmFwcGVuZChsaW5rKSk7XG5pZiAobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA9PT0gMiAmJiAhbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLmluY2x1ZGVzKCcvJykpIHtcblx0Y29uc3QgaHJlZlVybCA9IG5ldyBtdy5VcmkoYXZhdGFyVXJsKTtcblx0aHJlZlVybC5wYXRoID0gJy9TcGVjaWFsOlZpZXdhdmF0YXInO1xuXHRjb25zdCBzcmNVcmwgPSBuZXcgbXcuVXJpKGF2YXRhclVybCk7XG5cdCQoJy5ucy0yICNmaXJzdEhlYWRpbmcnKS5wcmVwZW5kKFxuXHRcdCQoJzxhLz4nKVxuXHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRocmVmOiBocmVmVXJsLFxuXHRcdFx0XHR0aXRsZTogJ+afpeeci+WktOWDjycsXG5cdFx0XHR9KVxuXHRcdFx0LnByZXBlbmQoXG5cdFx0XHRcdCQoJzxpbWcvPicpXG5cdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0c3JjOiBzcmNVcmwsXG5cdFx0XHRcdFx0XHRpZDogJ3VzZXItcm9vdHBhZ2UtYXZhdGFyJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0d2lkdGg6ICcxLjJlbScsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICcxLjJlbScsXG5cdFx0XHRcdFx0fSlcblx0XHRcdClcblx0KTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUEsWUFBWSxJQUFJQyxHQUFHQyxJQUFJLHVCQUF1QjtBQUNwREYsVUFBVUcsTUFBTSxNQUFNLElBQUlGLEdBQUdHLE9BQU9DLElBQUksWUFBWSxFQUFFQyxRQUFRLFdBQVcsRUFBRTtBQUMzRU4sVUFBVU8sT0FBTztBQUNqQixJQUFNQyxTQUFTLElBQUlQLEdBQUdDLElBQUlGLFNBQVM7QUFDbkNRLE9BQU9MLE1BQU0sTUFBTSxJQUFJRixHQUFHRyxPQUFPQyxJQUFJLFlBQVk7QUFDakQsSUFBTUksTUFBTUMsRUFBRSxPQUFPLEVBQUVDLEtBQUs7RUFDM0JDLEtBQUtKO0VBQ0xLLE9BQU87QUFDUixDQUFDO0FBQ0QsSUFBTUMsT0FBT0osRUFBRSxLQUFLLEVBQUVDLEtBQUssUUFBUSwyQ0FBMkMsRUFBRUksT0FBT04sR0FBRztBQUMxRkMsRUFBRSxjQUFjLEVBQUVNLE9BQU9OLEVBQUUsMEJBQTBCLEVBQUVLLE9BQU9ELElBQUksQ0FBQztBQUNuRSxJQUFJYixHQUFHRyxPQUFPQyxJQUFJLG1CQUFtQixNQUFNLEtBQUssQ0FBQ0osR0FBR0csT0FBT0MsSUFBSSxZQUFZLEVBQUVZLFNBQVMsR0FBRyxHQUFHO0FBQzNGLFFBQU1DLFVBQVUsSUFBSWpCLEdBQUdDLElBQUlGLFNBQVM7QUFDcENrQixVQUFRWCxPQUFPO0FBQ2YsUUFBTVksU0FBUyxJQUFJbEIsR0FBR0MsSUFBSUYsU0FBUztBQUNuQ1UsSUFBRSxxQkFBcUIsRUFBRVUsUUFDeEJWLEVBQUUsTUFBTSxFQUNOQyxLQUFLO0lBQ0xVLE1BQU1IO0lBQ05MLE9BQU87RUFDUixDQUFDLEVBQ0FPLFFBQ0FWLEVBQUUsUUFBUSxFQUNSQyxLQUFLO0lBQ0xDLEtBQUtPO0lBQ0xHLElBQUk7RUFDTCxDQUFDLEVBQ0FDLElBQUk7SUFDSkMsT0FBTztJQUNQQyxRQUFRO0VBQ1QsQ0FBQyxDQUNILENBQ0Y7QUFDRDsiLAogICJuYW1lcyI6IFsiYXZhdGFyVXJsIiwgIm13IiwgIlVyaSIsICJxdWVyeSIsICJjb25maWciLCAiZ2V0IiwgInJlcGxhY2UiLCAicGF0aCIsICJpbWdVcmwiLCAiaW1nIiwgIiQiLCAiYXR0ciIsICJzcmMiLCAidGl0bGUiLCAibGluayIsICJhcHBlbmQiLCAiYmVmb3JlIiwgImluY2x1ZGVzIiwgImhyZWZVcmwiLCAic3JjVXJsIiwgInByZXBlbmQiLCAiaHJlZiIsICJpZCIsICJjc3MiLCAid2lkdGgiLCAiaGVpZ2h0Il0KfQo=
