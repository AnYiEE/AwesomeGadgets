"use strict";

/* <nowiki> */
/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <zh.wikivoyage.org/wiki/MediaWiki:Common.js>
 */
// BEGIN Carousel configuration code
$(function () {
  $(".jcarousel").on("jcarousel:create jcarousel:reload", function () {
    $(this).find(".jcarousel-list").css("width", "20000em");
    var width = $(this).innerWidth();
    // This shows 1 item at a time.
    // Divide `width` to the number of items you want to display,
    // eg. `width = width / 3` to display 3 items at a time.
    $(this).jcarousel("items").css("width", "".concat(width, "px"));
  }).jcarousel({
    // Configuration goes here
    wrap: "both",
    animation: 1200,
    center: true
  }).jcarouselAutoscroll({
    interval: 10000,
    target: "+=1",
    autostart: true
  });
  $(".jcarousel-control-prev").on("jcarouselcontrol:active", function () {
    $(this).removeClass("inactive");
  }).on("jcarouselcontrol:inactive", function () {
    $(this).addClass("inactive");
  }).jcarouselControl({
    target: "-=1"
  });
  $(".jcarousel-control-next").on("jcarouselcontrol:active", function () {
    $(this).removeClass("inactive");
  }).on("jcarouselcontrol:inactive", function () {
    $(this).addClass("inactive");
  }).jcarouselControl({
    target: "+=1"
  });
  $(".jcarousel-pagination").on("jcarouselpagination:active", "a", function () {
    $(this).addClass("active");
  }).on("jcarouselpagination:inactive", "a", function () {
    $(this).removeClass("active");
  }).jcarouselPagination();
  if ($(".jcarousel").hasClass("jcarousel-randomize")) {
    // initialize the carousel to start with a random item
    var carouselItemSize = $(".jcarousel").jcarousel("items").length;
    var startingItem = Math.floor(Math.random() * carouselItemSize);
    $(".jcarousel").jcarousel("scroll", startingItem);
  }
});
// END Carousel configuration code

/* </nowiki> */