/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
 *
 * @source <https://github.com/TopRealm/InterfaceCodes/tree/master/src/Gadgets/Appearance/ShowAvatar.js>
 */
/**
 * +--------------------------------------------------------+
 * |         === WARNING: GLOBAL GADGET FILE ===            |
 * +--------------------------------------------------------+
 * |      All changes should be made in the repository,     |
 * |              otherwise they will be lost.              |
 * +--------------------------------------------------------+
 * |      Changes to this page may affect many users.       |
 * |  Please discuss changes at talk page before editing.   |
 * +--------------------------------------------------------+
 */
/* <nowiki> */
"use strict";
$(function () {
    var avatarUrl = new mw.Uri("https://youshou.wiki/");
    avatarUrl.query.user = mw.config.get("wgPageName").replace(/^user:/i, "");
    avatarUrl.path = "/extensions/Avatar/avatar.php";
    var imgUrl = new mw.Uri(avatarUrl);
    imgUrl.query.user = mw.config.get("wgUserName");
    var img = $("<img>").attr({
        src: imgUrl,
        title: "上传头像",
    });
    var link = $("<a>").attr("href", "https://youshou.wiki/wiki/Special:UploadAvatar").append(img);
    $("#pt-userpage").before($('<li id="pt-avatar"></li>').append(link));
    if (mw.config.get("wgNamespaceNumber") === 2 && !mw.config.get("wgPageName").includes("/")) {
        var hrefUrl = new mw.Uri(avatarUrl);
        hrefUrl.path = "/wiki/Special:Viewavatar";
        var srcUrl = new mw.Uri(avatarUrl);
        $(".ns-2 #firstHeading").prepend($("<a/>").attr({
            href: hrefUrl,
            title: "查看头像",
        }).prepend($("<img/>").attr({
            src: srcUrl,
            id: "user-rootpage-avatar",
        }).css({
            width: "1.2em",
            height: "1.2em",
        })));
    }
});
/* </nowiki> */