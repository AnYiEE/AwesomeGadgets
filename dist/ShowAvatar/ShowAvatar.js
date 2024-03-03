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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3dBdmF0YXIvU2hvd0F2YXRhci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICcuL1Nob3dBdmF0YXIubGVzcyc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1qcXVlcnkvbm8tcGFyc2UtaHRtbC1saXRlcmFsICovXG5cbmNvbnN0IGF2YXRhclVybCA9IG5ldyBtdy5VcmkoJ2h0dHBzOi8veW91c2hvdS53aWtpLycpO1xuYXZhdGFyVXJsLnF1ZXJ5Wyd1c2VyJ10gPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvXnVzZXI6L2ksICcnKTtcbmF2YXRhclVybC5wYXRoID0gJy9leHRlbnNpb25zL0F2YXRhci9hdmF0YXIucGhwJztcbmNvbnN0IGltZ1VybCA9IG5ldyBtdy5VcmkoYXZhdGFyVXJsKTtcbmltZ1VybC5xdWVyeVsndXNlciddID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpO1xuY29uc3QgaW1nID0gJCgnPGltZz4nKS5hdHRyKHtcblx0c3JjOiBpbWdVcmwsXG5cdHRpdGxlOiAn5LiK5Lyg5aS05YOPJyxcbn0pO1xuY29uc3QgbGluayA9ICQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnaHR0cHM6Ly95b3VzaG91Lndpa2kvd2lraS9TcGVjaWFsOlVwbG9hZEF2YXRhcicpLmFwcGVuZChpbWcpO1xuJCgnI3B0LXVzZXJwYWdlJykuYmVmb3JlKCQoJzxsaSBpZD1cInB0LWF2YXRhclwiPjwvbGk+JykuYXBwZW5kKGxpbmspKTtcbmlmIChtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID09PSAyICYmICFtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykuaW5jbHVkZXMoJy8nKSkge1xuXHRjb25zdCBocmVmVXJsID0gbmV3IG13LlVyaShhdmF0YXJVcmwpO1xuXHRocmVmVXJsLnBhdGggPSAnL1NwZWNpYWw6Vmlld2F2YXRhcic7XG5cdGNvbnN0IHNyY1VybCA9IG5ldyBtdy5VcmkoYXZhdGFyVXJsKTtcblx0JCgnLm5zLTIgI2ZpcnN0SGVhZGluZycpLnByZXBlbmQoXG5cdFx0JCgnPGEvPicpXG5cdFx0XHQuYXR0cih7XG5cdFx0XHRcdGhyZWY6IGhyZWZVcmwsXG5cdFx0XHRcdHRpdGxlOiAn5p+l55yL5aS05YOPJyxcblx0XHRcdH0pXG5cdFx0XHQucHJlcGVuZChcblx0XHRcdFx0JCgnPGltZy8+Jylcblx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRzcmM6IHNyY1VybCxcblx0XHRcdFx0XHRcdGlkOiAndXNlci1yb290cGFnZS1hdmF0YXInLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHR3aWR0aDogJzEuMmVtJyxcblx0XHRcdFx0XHRcdGhlaWdodDogJzEuMmVtJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0KVxuXHQpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFNQSxZQUFZLElBQUlDLEdBQUdDLElBQUksdUJBQXVCO0FBQ3BERixVQUFVRyxNQUFNLE1BQU0sSUFBSUYsR0FBR0csT0FBT0MsSUFBSSxZQUFZLEVBQUVDLFFBQVEsV0FBVyxFQUFFO0FBQzNFTixVQUFVTyxPQUFPO0FBQ2pCLElBQU1DLFNBQVMsSUFBSVAsR0FBR0MsSUFBSUYsU0FBUztBQUNuQ1EsT0FBT0wsTUFBTSxNQUFNLElBQUlGLEdBQUdHLE9BQU9DLElBQUksWUFBWTtBQUNqRCxJQUFNSSxNQUFNQyxFQUFFLE9BQU8sRUFBRUMsS0FBSztFQUMzQkMsS0FBS0o7RUFDTEssT0FBTztBQUNSLENBQUM7QUFDRCxJQUFNQyxPQUFPSixFQUFFLEtBQUssRUFBRUMsS0FBSyxRQUFRLGdEQUFnRCxFQUFFSSxPQUFPTixHQUFHO0FBQy9GQyxFQUFFLGNBQWMsRUFBRU0sT0FBT04sRUFBRSwwQkFBMEIsRUFBRUssT0FBT0QsSUFBSSxDQUFDO0FBQ25FLElBQUliLEdBQUdHLE9BQU9DLElBQUksbUJBQW1CLE1BQU0sS0FBSyxDQUFDSixHQUFHRyxPQUFPQyxJQUFJLFlBQVksRUFBRVksU0FBUyxHQUFHLEdBQUc7QUFDM0YsUUFBTUMsVUFBVSxJQUFJakIsR0FBR0MsSUFBSUYsU0FBUztBQUNwQ2tCLFVBQVFYLE9BQU87QUFDZixRQUFNWSxTQUFTLElBQUlsQixHQUFHQyxJQUFJRixTQUFTO0FBQ25DVSxJQUFFLHFCQUFxQixFQUFFVSxRQUN4QlYsRUFBRSxNQUFNLEVBQ05DLEtBQUs7SUFDTFUsTUFBTUg7SUFDTkwsT0FBTztFQUNSLENBQUMsRUFDQU8sUUFDQVYsRUFBRSxRQUFRLEVBQ1JDLEtBQUs7SUFDTEMsS0FBS087SUFDTEcsSUFBSTtFQUNMLENBQUMsRUFDQUMsSUFBSTtJQUNKQyxPQUFPO0lBQ1BDLFFBQVE7RUFDVCxDQUFDLENBQ0gsQ0FDRjtBQUNEOyIsCiAgIm5hbWVzIjogWyJhdmF0YXJVcmwiLCAibXciLCAiVXJpIiwgInF1ZXJ5IiwgImNvbmZpZyIsICJnZXQiLCAicmVwbGFjZSIsICJwYXRoIiwgImltZ1VybCIsICJpbWciLCAiJCIsICJhdHRyIiwgInNyYyIsICJ0aXRsZSIsICJsaW5rIiwgImFwcGVuZCIsICJiZWZvcmUiLCAiaW5jbHVkZXMiLCAiaHJlZlVybCIsICJzcmNVcmwiLCAicHJlcGVuZCIsICJocmVmIiwgImlkIiwgImNzcyIsICJ3aWR0aCIsICJoZWlnaHQiXQp9Cg==
