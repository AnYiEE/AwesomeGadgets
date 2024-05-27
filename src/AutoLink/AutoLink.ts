import {type TargetElements, getTargetElements} from './modules/util/getTargetElements';
import {IS_IN_TARGET_SPECIAL_PAGE} from './modules/constant';
import {getBody} from 'ext.gadget.Util';
import {processElement} from './modules/processElement';

void getBody().then(function autoLink($body: JQuery<HTMLBodyElement>): void {
	if (!IS_IN_TARGET_SPECIAL_PAGE) {
		return; // Disabled in the other special pages
	}

	const targetElements: TargetElements = getTargetElements($body);

	processElement(targetElements);
});
