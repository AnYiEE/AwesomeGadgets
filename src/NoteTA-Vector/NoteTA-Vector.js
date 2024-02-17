/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <zh.wikipedia.org/wiki/MediaWiki:Gadget-noteTAvector.js>
 */
"use strict";

mw.hook("wikipage.content").add(function () {
  // Will blink duing load preview,
  // but this will avoid the icon won't removed
  // if the TA template is removed, and
  // avoid repeated click event listener from noteTAViewer.
  $("#p-variants").next().remove();
  setTimeout(function () {
    $(function () {
      $("body.skin-vector .mw-indicator[id^=mw-indicator-noteTA-]").addClass("vector-menu").addClass("vector-menu-tabs").addClass("vectorTabs").removeAttr("style").css("float", "left").empty().each(function () {
        $("<a>").attr("href", "#").append($("<span>").text("汉").style({
          padding: "1px 3px",
          background: "#d3e3f4",
          color: "#000",
          height: "85%"
        })).append($("<span>").text("漢").style({
          padding: "1px 3px",
          background: "#e9e9e9",
          color: "#434343",
          height: "85%"
        })).on("click", function (e) {
          e.preventDefault();
        }).wrap("<ul><li><span></span></li></ul>").parent().parent().parent().appendTo(this);
      }).insertAfter("#p-variants");
    });
  }, 1);
});