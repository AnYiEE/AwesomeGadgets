import {IS_DIFF_ACTION, IS_TARGET_SPECIAL_PAGE, IS_WG_EDIT_OR_SUBMIT_ACTION, IS_WG_HISTORY_ACTION} from '../constant';

interface TargetElements {
	color: string;
	targetElements: HTMLElement[];
}

const getTargetElements = ($body: JQuery<HTMLBodyElement>): TargetElements => {
	let color: string = ''; // links color (coloured links)
	let targetElements: HTMLElement[] = [];

	if (IS_DIFF_ACTION) {
		// in diff pages
		color = 'inherit'; // not coloured links
		targetElements = [...$body.find('.diff,.firstrevisionheader')];
	} else if (IS_WG_EDIT_OR_SUBMIT_ACTION || IS_WG_HISTORY_ACTION || IS_TARGET_SPECIAL_PAGE) {
		// in comments
		targetElements = [...$body.find('.comment')];
	} else {
		// in code sections
		targetElements = [...$body.find('source,.css,.source-css,.javascript,.source-javascript')];
	}

	return {
		color,
		targetElements,
	};
};

export {type TargetElements, getTargetElements};
