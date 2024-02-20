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
//! src/ShowAvatar/ShowAvatar.js
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3dBdmF0YXIvU2hvd0F2YXRhci5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJCgoKSA9PiB7XG5cdGNvbnN0IGF2YXRhclVybCA9IG5ldyBtdy5VcmkoJ2h0dHBzOi8veW91c2hvdS53aWtpLycpO1xuXHRhdmF0YXJVcmwucXVlcnlbJ3VzZXInXSA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC9edXNlcjovaSwgJycpO1xuXHRhdmF0YXJVcmwucGF0aCA9ICcvZXh0ZW5zaW9ucy9BdmF0YXIvYXZhdGFyLnBocCc7XG5cdGNvbnN0IGltZ1VybCA9IG5ldyBtdy5VcmkoYXZhdGFyVXJsKTtcblx0aW1nVXJsLnF1ZXJ5Wyd1c2VyJ10gPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyk7XG5cblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPT09IDIgJiYgIW13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5pbmNsdWRlcygnLycpKSB7XG5cdFx0Y29uc3QgaHJlZlVybCA9IG5ldyBtdy5VcmkoYXZhdGFyVXJsKTtcblx0XHRocmVmVXJsLnBhdGggPSAnL3dpa2kvU3BlY2lhbDpWaWV3YXZhdGFyJztcblx0XHRjb25zdCBzcmNVcmwgPSBuZXcgbXcuVXJpKGF2YXRhclVybCk7XG5cdFx0JCgnLm5zLTInLCAnI2ZpcnN0SGVhZGluZycpLnByZXBlbmQoXG5cdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0aHJlZjogaHJlZlVybCxcblx0XHRcdFx0XHR0aXRsZTogJ+afpeeci+WktOWDjycsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5wcmVwZW5kKFxuXHRcdFx0XHRcdCQoJzxpbWc+Jylcblx0XHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdFx0c3JjOiBzcmNVcmwsXG5cdFx0XHRcdFx0XHRcdGlkOiAndXNlci1yb290cGFnZS1hdmF0YXInLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogJzEuMmVtJyxcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAnMS4yZW0nLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLE1BQU07QUFDUCxRQUFNQyxZQUFZLElBQUlDLEdBQUdDLElBQUksdUJBQXVCO0FBQ3BERixZQUFVRyxNQUFNLE1BQU0sSUFBSUYsR0FBR0csT0FBT0MsSUFBSSxZQUFZLEVBQUVDLFFBQVEsV0FBVyxFQUFFO0FBQzNFTixZQUFVTyxPQUFPO0FBQ2pCLFFBQU1DLFNBQVMsSUFBSVAsR0FBR0MsSUFBSUYsU0FBUztBQUNuQ1EsU0FBT0wsTUFBTSxNQUFNLElBQUlGLEdBQUdHLE9BQU9DLElBQUksWUFBWTtBQUVqRCxNQUFJSixHQUFHRyxPQUFPQyxJQUFJLG1CQUFtQixNQUFNLEtBQUssQ0FBQ0osR0FBR0csT0FBT0MsSUFBSSxZQUFZLEVBQUVJLFNBQVMsR0FBRyxHQUFHO0FBQzNGLFVBQU1DLFVBQVUsSUFBSVQsR0FBR0MsSUFBSUYsU0FBUztBQUNwQ1UsWUFBUUgsT0FBTztBQUNmLFVBQU1JLFNBQVMsSUFBSVYsR0FBR0MsSUFBSUYsU0FBUztBQUNuQ0QsTUFBRSxTQUFTLGVBQWUsRUFBRWEsUUFDM0JiLEVBQUUsS0FBSyxFQUNMYyxLQUFLO01BQ0xDLE1BQU1KO01BQ05LLE9BQU87SUFDUixDQUFDLEVBQ0FILFFBQ0FiLEVBQUUsT0FBTyxFQUNQYyxLQUFLO01BQ0xHLEtBQUtMO01BQ0xNLElBQUk7SUFDTCxDQUFDLEVBQ0FDLElBQUk7TUFDSkMsT0FBTztNQUNQQyxRQUFRO0lBQ1QsQ0FBQyxDQUNILENBQ0Y7RUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbIiQiLCAiYXZhdGFyVXJsIiwgIm13IiwgIlVyaSIsICJxdWVyeSIsICJjb25maWciLCAiZ2V0IiwgInJlcGxhY2UiLCAicGF0aCIsICJpbWdVcmwiLCAiaW5jbHVkZXMiLCAiaHJlZlVybCIsICJzcmNVcmwiLCAicHJlcGVuZCIsICJhdHRyIiwgImhyZWYiLCAidGl0bGUiLCAic3JjIiwgImlkIiwgImNzcyIsICJ3aWR0aCIsICJoZWlnaHQiXQp9Cg==
