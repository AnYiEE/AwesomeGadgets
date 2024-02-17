/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <zh.wikipedia.org/wiki/MediaWiki:Gadget-CollapsibleSidebar.js>
 * @dependency mediawiki.storage
 */
/**
 * Gadget-CollapsibleSidebar.js From zh.wikipedia.org
 * © AnYiLin, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 *
 * File:Icons8_flat_next.svg and File:Icons8_flat_previous.svg from commons.wikimedia.org
 * From Icon8 <https://icons8.com/c/flat-color-icons>
 * Copyright © The author(s)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * The Software is provided "as is", without warranty of any kind, express or implied, including
 * but not limited to the warranties of merchantability, fitness for a particular purpose and
 * noninfringement. In no event shall the authors or copyright holders be liable for any claim,
 * damages or other liability, whether in an action of contract, tort or otherwise, arising
 * from, out of or in connection with the Software or the use or other dealings in the Software.
 */
"use strict";

(function ($, mw) {
  $(function () {
    var img = {
      logo: "/resources/assets/qiuwen/wordmark/wordmark-favicon.svg",
      /* For images in next and prev: See Notice above. */
      next: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAV0lEQVR4AWOgLvj/n1Fxxhd9svQqTP2UoDjt80/FqZ98Sde96j+z4rRPi0AGAGm/gTMA5gX6G6C96j8bUPNDIH6v0P9egGyb6aUREdpka6RbCkOkbVoDAJjnYiFSTTnhAAAAAElFTkSuQmCC",
      prev: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAY0lEQVR4AWOgOVCc8UWf4f9/RtI1Tv3kqzjt80+FqZ8SSNKoMPWLB1Djd8Wpn1c6NPxnoYPG6V/cydKoOPWLG3k29r8XAGp8D8QPtVf9Z4OJU2wz7f2MGdr0NwAzhdErbRMGAEAcYtljwYa8AAAAAElFTkSuQmCC"
    };
    var isMobile = /(?:Android|iPad|iPhone|Mobile)/i.test(navigator.userAgent);
    var gadgetName = "ext.gadget.CollapsibleSidebar";
    var sidebarHidden = false;
    var sidebarGadgetLoaded = false;
    var updatePosHelper = function updatePosHelper(arr) {
      var divList = ["#sidebarCollapse", "#sliderCollapseLogo"];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === null) {
          continue;
        }
        var bDiv = divList[i];
        var bLeft = $(bDiv).css("left");
        var bSize = arr[i];
        if (bLeft !== bSize) {
          $(bDiv).css("left", bSize);
        }
      }
    };
    var updatePos = function updatePos() {
      var bWidth = 0;
      if (isMobile) {
        bWidth = window.outerWidth > 0 ? window.outerWidth : $("body").width;
      } else {
        bWidth = window.innerWidth > 0 ? window.innerWidth : $("body").width;
      }
      if (bWidth >= 982) {
        updatePosHelper(sidebarHidden ? ["0.3em", "2.5em"] : ["10.3em", null]);
      } else {
        updatePosHelper(sidebarHidden ? ["0.3em", "2.5em"] : ["9.3em", null]);
      }
    };
    var hideSidebar = function hideSidebar() {
      sidebarHidden = true;
      $("#sidebarCollapse").attr("src", img.next);
      updatePos();
      $("#content").css("margin-left", "1em");
      $("#footer").css("margin-left", "1em");
      $("#left-navigation").css("margin-left", "10em");
      $("#mw-panel").hide();
      $("#sliderCollapseLogo").show();
      mw.storage.set(gadgetName, "hide");
    };
    var showSidebar = function showSidebar() {
      sidebarHidden = false;
      $("#sidebarCollapse").attr("src", img.prev);
      updatePos();
      $("#content").css("margin-left", "");
      $("#footer").css("margin-left", "");
      $("#left-navigation").css("margin-left", "");
      $("#mw-panel").show();
      $("#sliderCollapseLogo").hide();
      mw.storage.set(gadgetName, "show");
    };
    var sidebarHiddenProc = function sidebarHiddenProc() {
      sidebarGadgetLoaded = true;
      var $sidebarCollapse = $("<img>").attr({
        id: "sidebarCollapse",
        src: img.prev,
        draggable: "false"
      }).css({
        cursor: "pointer",
        position: "fixed",
        top: "5.625em",
        width: "0.8em",
        "-ms-user-select": "none",
        "-moz-user-select": "none",
        "-webkit-user-select": "none",
        "user-select": "none",
        padding: "0.3em",
        "border-radius": "50px",
        border: "1px solid #a7d7f9",
        background: "#fff"
      });
      var $mwLogo = $(".mw-wiki-logo");
      var $newLink = $mwLogo.clone(false).empty().removeAttr("class").attr({
        id: "sidebarCollapseLink",
        title: $mwLogo.attr("title")
      });
      var imgLogo = img.logo;
      $("<img>").attr({
        id: "sliderCollapseLogo",
        "class": "mw-no-invert",
        src: imgLogo
      }).css({
        cursor: "pointer",
        position: "absolute",
        top: "3em",
        width: "7em",
        display: "none"
      }).appendTo($newLink);
      $sidebarCollapse.appendTo("#mw-navigation");
      $newLink.appendTo("#mw-navigation");
      if (mw.storage.get(gadgetName) === "hide") {
        hideSidebar();
      }
      updatePos();
      $(window).on("resize", function () {
        updatePos();
      });
      $("#sidebarCollapse").on("mouseover", function () {
        $(this).css("background", "rgb(223, 245, 255)");
      }).on("mouseout", function () {
        $(this).css("background", "white");
      }).on("click", function () {
        if (sidebarHidden) {
          showSidebar();
        } else {
          hideSidebar();
        }
      });
    };
    var sidebarHiddenInit = function sidebarHiddenInit() {
      if ($("body.skin-vector-legacy").length === 0) {
        return;
      }
      if (["bo", "dz"].indexOf(mw.config.get("wgContentLanguage")) > -1 || !($("body.rtl").length === 0)) {
        return;
      }
      if ($("#mw-navigation").length === 0) {
        var obs = new MutationObserver(function (mutations) {
          if (sidebarGadgetLoaded) {
            return;
          }
          for (var i = 0; i < mutations.length; i++) {
            for (var j = 0; j < mutations[i].addedNodes.length; j++) {
              if (mutations[i].addedNodes[j].id === "mw-navigation") {
                sidebarHiddenProc();
                break;
              }
            }
          }
        });
        obs.observe(document.documentElement, {
          childList: true
        });
        return;
      }
      sidebarHiddenProc();
    };
    sidebarHiddenInit();
  });
})(jQuery, mediaWiki);