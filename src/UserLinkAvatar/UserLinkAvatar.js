/**
 * SPDX-License-Identifier: CC BY-SA 4.0
 * _addText: '{{Gadget Header|license=cc-by-sa-4.0|import=no}}'
 *
 * @base <https://zh.moegirl.org.cn/MediaWiki:Gadget-UserLinkAvatar.js>
 * @source <https://github.com/TopRealm/InterfaceCodes/blob/master/src/Gadgets/Appearance/UserLinkAvatar/UserLinkAvatar.css>
 * @author Moegirlpedia contributors, ColGem <https://youshou.wiki/wiki/User:ColGem>
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
(function () {
  var magnifierOn = +mw.user.options.get("gadget-UserLinkAvatarMagnifier", 0) === 1;
  var $window = $(window);
  var loadingImage = "https://youshou.wiki/images/b/b1/Loading_icon.gif";
  $window.on("load.UserLinkAvatar", function () {
    var images = [];
    $(".mw-userlink:not(.user-avatar-added)").each(function (_, ele) {
      var item = $(ele);
      var src = "https://youshou.wiki/extensions/Avatar/avatar.php?user=".concat(encodeURIComponent(item.text()));
      var img = $("<img/>").on("error", function () {
        window.setTimeout(function () {
          img.closest(".userlink-avatar").remove();
        }, 0);
      }).addClass("userlink-avatar-small").attr({
        "data-src": src,
        src: loadingImage
      });
      images.push(img[0]);
      var bigAvatar = $("<span/>").addClass("userlink-avatar");
      item.prepend(bigAvatar.append(img));
      item.addClass("user-avatar-added");
      if (magnifierOn) {
        var magnifierImg_1 = $("<img/>", {
          attr: {
            "data-src": src,
            src: loadingImage
          },
          on: {
            error: function () {
              window.setTimeout(function () {
                magnifierImg_1.closest(".userlink-avatar-large").remove();
              }, 0);
            }
          }
        });
        images.push(magnifierImg_1[0]);
        bigAvatar.on("click", function () {
          window.open("https://youshou.wiki/index.php?title=Special%3A\u67E5\u770B\u5934\u50CF&user=".concat(encodeURIComponent(item.text())), "_blank");
          return false;
        }).append($("<div/>", {
          attr: {
            "class": "userlink-avatar-large"
          }
        }).prepend(magnifierImg_1)).addClass("userlink-avatar-hover");
        item.before(bigAvatar);
        bigAvatar.add(bigAvatar.children()).attr("title", "\u67E5\u770B\u7528\u6237".concat(item.text(), "\u7684\u5934\u50CF"));
      }
    });
    if (typeof window.lazyload === "function") {
      window.lazyload(images);
    } else {
      images.forEach(function (ele) {
        ele.src = ele.dataset.src;
      });
    }
  });
  $(function () {
    $window.trigger("load.UserLinkAvatar");
  });
})();
/* </nowiki> */
