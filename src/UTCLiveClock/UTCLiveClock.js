/**
 * SPDX-License-Identifier: CC BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <zh.wikipedia.org/wiki/MediaWiki:Gadget-UTCLiveClock.js>
 * @dependency ext.gadget.SiteCommonJS, ext.gadget.morebits, mediawiki.api, oojs-ui
 */
"use strict";

/**
 * Warning! Global gadget file!
 *
 * This gadget adds a clock in the personal toolbar that shows the current time
 * in UTC (or a different timezone of your choosing), and also provides a link
 * to purge the current page.
 *
 * Revision: July 2020
 * Source: https://www.mediawiki.org/wiki/MediaWiki:Gadget-UTCLiveClock.js
 *
 * Installation:
 *
 * 1. Copy the JS page at https://www.mediawiki.org/wiki/MediaWiki:Gadget-UTCLiveClock.js
 * to the page [[MediaWiki:Gadget-UTCLiveClock.js]] on your wiki.
 *
 * 2. Copy the CSS page at https://www.mediawiki.org/wiki/MediaWiki:Gadget-UTCLiveClock.css
 * to the page [[MediaWiki:Gadget-UTCLiveClock.css]] on your wiki.
 *
 * 3. Copy the CSS page at https://www.mediawiki.org/wiki/MediaWiki:Gadget-UTCLiveClock-pagestyles.css
 * to the page [[MediaWiki:Gadget-UTCLiveClock-pagestyles.css]] on your wiki.
 *
 * 4. Add a description of the gadget to the page [[MediaWiki:Gadget-UTCLiveClock]]
 * on your wiki. You can use https://www.mediawiki.org/wiki/MediaWiki:Gadget-UTCLiveClock
 * as a template.
 *
 * 5. Add the following code to your wiki's [[MediaWiki:Gadgets-definition]]:
 *
 * UTCLiveClock[ResourceLoader|type=general|dependencies=mediawiki.util,mediawiki.api|peers=UTCLiveClock-pagestyles]|UTCLiveClock.js|UTCLiveClock.css
 * UTCLiveClock-pagestyles[hidden|skins=vector]|UTCLiveClock-pagestyles.css
 *
 *
 * To set the timezone used to one other than UTC, set window.LiveClockTimeZone to
 * the desired timezone. For example, adding the following to your common.js
 *      window.LiveClockTimeZone = 'America/Los_Angeles';
 * would result in the local time in Los Angeles being shown. See
 * TZ database for valid options.
 */
mw.loader.using(["mediawiki.util", "mediawiki.api"]).then(function () {
  var padWithZeroes = function padWithZeroes(num) {
    // Pad a number with zeroes. The number must be an integer where
    // 0 <= num < 100.
    return num < 10 ? "0".concat(num.toString()) : num.toString();
  };
  var showTime = function showTime($target) {
    var now = new Date();
    var timezone = window.LiveClockTimeZone || "Asia/Shanghai";

    // Set the time.
    var hh, mm, ss;
    if (timezone === "UTC") {
      hh = now.getUTCHours();
      mm = now.getUTCMinutes();
      ss = now.getUTCSeconds();
    } else if (timezone === "local") {
      hh = now.getHours();
      mm = now.getMinutes();
      ss = now.getSeconds();
    } else {
      var newNow;
      try {
        newNow = new Date(now.toLocaleString("en-US", {
          timeZone: timezone
        }));
        hh = newNow.getHours();
        mm = newNow.getMinutes();
        ss = newNow.getSeconds();
      } catch (err) {
        console.log("LiveClock - error creating Date object with timezone '".concat(timezone, "': ").concat(err.name));
        timezone = "UTC";
        newNow = now;
        hh = now.getUTCHours();
        mm = now.getUTCMinutes();
        ss = now.getUTCSeconds();
      }
    }
    var time = "".concat(padWithZeroes(hh), ":").concat(padWithZeroes(mm), ":").concat(padWithZeroes(ss));
    $target.text(time);

    // Schedule the next time change.
    //
    // We schedule the change for 100 ms _after_ the next clock tick. The delay
    // from setTimeout is not precise, and if we aim exactly for the tick, there
    // is a chance that the function will run slightly before it. If this
    // happens, we will display the same time for two seconds in a row - not
    // good. By scheduling 100 ms after the tick, we will always be about 100 ms
    // late, but we are also very likely to display a new time every second.
    var ms = now.getUTCMilliseconds();
    setTimeout(function () {
      showTime($target);
    }, 1100 - ms);
  };
  var liveClock = function liveClock() {
    // Set CSS styles. We do this here instead of on the CSS page because some
    // wikis load this page directly, without loading the accompanying CSS.
    mw.util.addCSS("#utcdate a{font-weight:bolder;font-size:120%}");

    // Reset whitespace that was set in the peer CSS gadget; this prevents the
    // effect of the p-personal menu jumping to the left when the JavaScript
    // loads.
    $(".client-js > body.skin-vector #p-personal ul").css("margin-right", "initial");

    // Add the portlet link.
    var node = mw.util.addPortletLink("p-personal", mw.util.getUrl(null, {
      action: "purge"
    }), "", "utcdate");
    if (!node) {
      return;
    }

    // Purge the page when the clock is clicked. We have to do this through the
    // API, as purge URLs now make people click through a confirmation screen.
    $(node).on("click", function (e) {
      new mw.Api({
        ajax: {
          headers: {
            "Api-User-Agent": "Qiuwen/1.1 (UTCLiveClock/1.1; ".concat(mw.config.get("wgWikiID"), ")")
          }
        }
      }).post({
        action: "purge",
        titles: mw.config.get("wgPageName")
      }).then(function () {
        location.reload();
      }, function () {
        mw.notify("清除缓存失败", {
          type: "error"
        });
      });
      e.preventDefault();
    });

    // Show the clock.
    showTime($(node).find("a:first"));
  };
  $(liveClock);
});