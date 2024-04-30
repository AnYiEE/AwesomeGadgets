import * as OPTIONS from '../options.json';
import {LabelElement, SelectElement, WrapperElement} from '../components/SelectElement';
import {addListener} from './addListener';

const processElement = (searchElement: HTMLElement, targetElement: HTMLElement): void => {
	targetElement.setAttribute('style', `${OPTIONS.flexStyle}`);

	const wrapperElement = WrapperElement() as HTMLDivElement;
	const labelElement = LabelElement();
	const selectElement = SelectElement() as HTMLSelectElement;

	wrapperElement.append(labelElement, selectElement);
	targetElement.append(wrapperElement);

	addListener(searchElement, selectElement);
};

export {processElement};
