/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
 *
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
$(() => {
  const avatarUrl = new mw.Uri("https://youshou.wiki/");
  avatarUrl.query["user"] = mw.config.get("wgPageName").replace(/^user:/i, "");
  avatarUrl.path = "/extensions/Avatar/avatar.php";
  const imgUrl = new mw.Uri(avatarUrl);
  imgUrl.query["user"] = mw.config.get("wgUserName");
  if (mw.config.get("wgNamespaceNumber") === 2 && !mw.config.get("wgPageName").includes("/")) {
    const hrefUrl = new mw.Uri(avatarUrl);
    hrefUrl.path = "/wiki/Special:Viewavatar";
    const srcUrl = new mw.Uri(avatarUrl);
    $(".ns-2", "#firstHeading").prepend($("<a>").attr({
      href: hrefUrl,
      title: "查看头像"
    }).prepend($("<img>").attr({
      src: srcUrl,
      id: "user-rootpage-avatar"
    }).css({
      width: "1.2em",
      height: "1.2em"
    })));
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3dBdmF0YXIvU2hvd0F2YXRhci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICcuL1Nob3dBdmF0YXIubGVzcyc7XG4kKCgpID0+IHtcblx0Y29uc3QgYXZhdGFyVXJsID0gbmV3IG13LlVyaSgnaHR0cHM6Ly95b3VzaG91Lndpa2kvJyk7XG5cdGF2YXRhclVybC5xdWVyeVsndXNlciddID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLnJlcGxhY2UoL151c2VyOi9pLCAnJyk7XG5cdGF2YXRhclVybC5wYXRoID0gJy9leHRlbnNpb25zL0F2YXRhci9hdmF0YXIucGhwJztcblx0Y29uc3QgaW1nVXJsID0gbmV3IG13LlVyaShhdmF0YXJVcmwpO1xuXHRpbWdVcmwucXVlcnlbJ3VzZXInXSA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKTtcblxuXHRpZiAobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA9PT0gMiAmJiAhbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLmluY2x1ZGVzKCcvJykpIHtcblx0XHRjb25zdCBocmVmVXJsID0gbmV3IG13LlVyaShhdmF0YXJVcmwpO1xuXHRcdGhyZWZVcmwucGF0aCA9ICcvd2lraS9TcGVjaWFsOlZpZXdhdmF0YXInO1xuXHRcdGNvbnN0IHNyY1VybCA9IG5ldyBtdy5VcmkoYXZhdGFyVXJsKTtcblx0XHQkKCcubnMtMicsICcjZmlyc3RIZWFkaW5nJykucHJlcGVuZChcblx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRocmVmOiBocmVmVXJsLFxuXHRcdFx0XHRcdHRpdGxlOiAn5p+l55yL5aS05YOPJyxcblx0XHRcdFx0fSlcblx0XHRcdFx0LnByZXBlbmQoXG5cdFx0XHRcdFx0JCgnPGltZz4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0XHRzcmM6IHNyY1VybCxcblx0XHRcdFx0XHRcdFx0aWQ6ICd1c2VyLXJvb3RwYWdlLWF2YXRhcicsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAnMS4yZW0nLFxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6ICcxLjJlbScsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsTUFBTTtBQUNQLFFBQU1DLFlBQVksSUFBSUMsR0FBR0MsSUFBSSx1QkFBdUI7QUFDcERGLFlBQVVHLE1BQU0sTUFBTSxJQUFJRixHQUFHRyxPQUFPQyxJQUFJLFlBQVksRUFBRUMsUUFBUSxXQUFXLEVBQUU7QUFDM0VOLFlBQVVPLE9BQU87QUFDakIsUUFBTUMsU0FBUyxJQUFJUCxHQUFHQyxJQUFJRixTQUFTO0FBQ25DUSxTQUFPTCxNQUFNLE1BQU0sSUFBSUYsR0FBR0csT0FBT0MsSUFBSSxZQUFZO0FBRWpELE1BQUlKLEdBQUdHLE9BQU9DLElBQUksbUJBQW1CLE1BQU0sS0FBSyxDQUFDSixHQUFHRyxPQUFPQyxJQUFJLFlBQVksRUFBRUksU0FBUyxHQUFHLEdBQUc7QUFDM0YsVUFBTUMsVUFBVSxJQUFJVCxHQUFHQyxJQUFJRixTQUFTO0FBQ3BDVSxZQUFRSCxPQUFPO0FBQ2YsVUFBTUksU0FBUyxJQUFJVixHQUFHQyxJQUFJRixTQUFTO0FBQ25DRCxNQUFFLFNBQVMsZUFBZSxFQUFFYSxRQUMzQmIsRUFBRSxLQUFLLEVBQ0xjLEtBQUs7TUFDTEMsTUFBTUo7TUFDTkssT0FBTztJQUNSLENBQUMsRUFDQUgsUUFDQWIsRUFBRSxPQUFPLEVBQ1BjLEtBQUs7TUFDTEcsS0FBS0w7TUFDTE0sSUFBSTtJQUNMLENBQUMsRUFDQUMsSUFBSTtNQUNKQyxPQUFPO01BQ1BDLFFBQVE7SUFDVCxDQUFDLENBQ0gsQ0FDRjtFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsiJCIsICJhdmF0YXJVcmwiLCAibXciLCAiVXJpIiwgInF1ZXJ5IiwgImNvbmZpZyIsICJnZXQiLCAicmVwbGFjZSIsICJwYXRoIiwgImltZ1VybCIsICJpbmNsdWRlcyIsICJocmVmVXJsIiwgInNyY1VybCIsICJwcmVwZW5kIiwgImF0dHIiLCAiaHJlZiIsICJ0aXRsZSIsICJzcmMiLCAiaWQiLCAiY3NzIiwgIndpZHRoIiwgImhlaWdodCJdCn0K
