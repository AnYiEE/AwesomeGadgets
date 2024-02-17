"use strict";

/* <nowiki> */
/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <zh.wikipedia.org/wiki/MediaWiki:Gadget-scrollUpButton.js>
 */
/* scrollUpButton
 * Add a button to scroll up to the top of the current page.
 * @rev 3 (2019-28-07)
 * @author Kwj2772
 * @contributor Perhelion
 * No internationalisation required
 * [kowiki] Fixed an issue with help-panel-button (ykhwong)
 * [zhwiki] Add a timer to autohide button, check more gadgets. Add scrollDownButton
 *   @from <ko.wikipedia.org/?oldid=25440719>, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 *   @maintainer 安忆 <zh.wikipedia.org/wiki/User:安忆>
 * [qiuwen] subsititute the icon
 *  scrollButtonIcon from https://www.qiuwenbaike.cn/wiki/File:Up_Arrow_(Blue,_White_BG).svg
 */
$(function () {
  var scrollButtonIcon = "data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 13.229 13.229' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6.614' cy='6.614' r='5.957' fill='%23fff' stroke='%2336c' stroke-width='1.315'/%3E%3Cpath d='M5.866 10.264h1.497V5.17l1.941 2.177 1.015-.89-3.674-3.81h-.061L2.91 6.456l1.027.89 1.93-2.177Z' fill='%2336c' stroke-width='.309192'/%3E%3C/svg%3E";
  var $scrollDownButton = $("<img>").attr({
    src: scrollButtonIcon,
    id: "scrollDownButton",
    alt: "滚动至页底"
  }).css({
    cursor: "pointer",
    opacity: 0.7,
    position: "fixed",
    display: "none",
    right: "8px",
    width: "32px",
    height: "32px",
    "-ms-user-select": "none",
    "-moz-user-select": "none",
    "-webkit-user-select": "none",
    "user-select": "none",
    transform: "rotate(180deg)"
  }).on("click", function () {
    $("html, body").animate({
      scrollTop: $(document).height() - $(window).height()
    }, 660);
  }).on("mouseenter mouseleave", function (e) {
    this.style.opacity = e.type === "mouseenter" ? 1 : 0.7;
  }).attr("draggable", "false").appendTo("body");
  var $scrollUpButton = $("<img>").attr({
    src: scrollButtonIcon,
    id: "scrollUpButton",
    alt: "滚动至页顶"
  }).css({
    cursor: "pointer",
    opacity: 0.7,
    position: "fixed",
    display: "none",
    right: "8px",
    width: "32px",
    height: "32px",
    "-ms-user-select": "none",
    "-moz-user-select": "none",
    "-webkit-user-select": "none",
    "user-select": "none"
  }).on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, 660);
  }).on("mouseenter mouseleave", function (e) {
    this.style.opacity = e.type === "mouseenter" ? 1 : 0.7;
  }).attr("draggable", "false").appendTo("body");
  var scrollButtonTimer;
  $(window).on("scroll", function () {
    if ($("#cat_a_lot").length > 0 || $("#proveit").length > 0 || $(".wordcount").length > 0) {
      $scrollDownButton.css("bottom", "78px");
      $scrollUpButton.css("bottom", "120px");
    } else {
      $scrollDownButton.css("bottom", "36px");
      $scrollUpButton.css("bottom", "78px");
    }
    if ($(this).scrollTop() > 60) {
      $scrollDownButton.fadeIn("slow");
      $scrollUpButton.fadeIn("slow");
    } else {
      $scrollDownButton.fadeOut("slow");
      $scrollUpButton.fadeOut("slow");
    }
    this.clearTimeout(scrollButtonTimer);
    scrollButtonTimer = this.setTimeout(function () {
      $scrollDownButton.fadeOut("slow");
      $scrollUpButton.fadeOut("slow");
    }, 2000);
  });
  $scrollDownButton.on("mouseenter", function () {
    window.clearTimeout(scrollButtonTimer);
  });
  $scrollUpButton.on("mouseenter", function () {
    window.clearTimeout(scrollButtonTimer);
  });
}());

/* </nowiki> */