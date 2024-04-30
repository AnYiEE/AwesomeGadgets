import * as OPTIONS from '../options.json';
import {padWithZeroes} from './util/padWithZeroes';

const showTime = ($element: JQuery): void => {
	const {UTCLiveClockTimeZone: windowUTCLiveClockTimeZone} = window;
	let timezone: string =
		(windowUTCLiveClockTimeZone ? String(windowUTCLiveClockTimeZone) : '') || OPTIONS.defaultTimeZone;

	// Set the time.
	let hh: number = 0;
	let mm: number = 0;
	let ss: number = 0;

	const now: Date = new Date();
	try {
		const date = new Date(
			now.toLocaleString('en-US', {
				timeZone: timezone,
			})
		);
		hh = date.getHours();
		mm = date.getMinutes();
		ss = date.getSeconds();
	} catch {
		timezone = 'UTC';
		console.log(`[UTCLiveClock]: Error creating \`Date\` object with timezone '${timezone}'`);
	}

	if (timezone === 'UTC') {
		hh = now.getUTCHours();
		mm = now.getUTCMinutes();
		ss = now.getUTCSeconds();
	} else if (timezone === 'local') {
		hh = now.getHours();
		mm = now.getMinutes();
		ss = now.getSeconds();
	}

	$element.text(`${padWithZeroes(hh)}:${padWithZeroes(mm)}:${padWithZeroes(ss)}`);

	// Schedule the next time change.
	//
	// We schedule the change for 100 ms _after_ the next clock tick. The delay
	// from setTimeout is not precise, and if we aim exactly for the tick, there
	// is a chance that the function will run slightly before it. If this
	// happens, we will display the same time for two seconds in a row - not
	// good. By scheduling 100 ms after the tick, we will always be about 100 ms
	// late, but we are also very likely to display a new time every second.
	const ms: number = now.getUTCMilliseconds();
	setTimeout((): void => {
		showTime($element);
	}, 1100 - ms);
};

export {showTime};
