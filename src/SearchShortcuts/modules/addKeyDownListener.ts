import {keydownListener} from './util/keydownListener';

const addKeyDownListener = ($searchInput: JQuery<HTMLInputElement>): void => {
	$searchInput.on('keydown', (): void => {
		keydownListener($searchInput);
	});
};

export {addKeyDownListener};
