/*!
 * This gadget adds a clock in the personal toolbar that shows the current time
 * in UTC (or a different timezone of your choosing), and also provides a link
 * to purge the current page.
 *
 * Revision: July 2020
 * Source: https://www.mediawiki.org/wiki/MediaWiki:Gadget-UTCLiveClock.js
 *
 * To set the timezone used to one other than UTC, set window.LiveClockTimeZone to
 * the desired timezone. For example, adding the following to your common.js
 *      window.LiveClockTimeZone = 'America/Los_Angeles';
 * would result in the local time in Los Angeles being shown. See
 * TZ database for valid options.
 */
import './UTCLiveClock.less';
import {getBody} from 'ext.gadget.Util';
import {purge} from 'ext.gadget.PurgePageCache';
import {showTime} from './modules/showTime';

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	// Reset whitespace that was set in the peer CSS gadget; this prevents the
	// effect of the p-personal menu jumping to the left when the JavaScript
	// loads.
	$body.find('.client-js > body.skin-vector #p-personal ul').css('margin-right', 'initial');

	// Add the portlet link.
	const element: HTMLLIElement | null = mw.util.addPortletLink('p-personal', '#', '', 'utcdate');
	if (!element) {
		return;
	}
	const $element: JQuery = $(element);

	// Purge the page when the clock is clicked. We have to do this through the
	// API, as purge URLs now make people click through a confirmation screen.
	const {wgPageName} = mw.config.get();
	$element.on('click', (event: JQuery.ClickEvent): void => {
		event.preventDefault();
		void purge(wgPageName);
	});

	// Show the clock.
	showTime($element.find('a:first'));
});
