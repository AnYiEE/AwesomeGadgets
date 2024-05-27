import {wordCount} from './wordCount';

const addListener = ($body: JQuery<HTMLBodyElement>): void => {
	let events: string;
	if ('ontouchstart' in document) {
		events = 'touchstart touchend';
	} else {
		events = 'mouseup keyup';
	}

	$body.on(events, (): void => {
		wordCount($body);
	});
};

export {addListener};
