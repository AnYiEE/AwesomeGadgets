/**
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
import './UTCLiveClock.less';
import {liveClock} from './modules/core';

$(liveClock);
