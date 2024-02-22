import React from 'ext.gadget.React';
import {SelectElement} from '../components/SelectElement';
import {addListener} from './addListener';

const processElement = (searchElement: HTMLElement, targetElement: HTMLElement): void => {
	targetElement.setAttribute('style', 'display:flex;flex-wrap:wrap;align-items:center');

	const selectElement = (<SelectElement />) as HTMLSelectElement;

	targetElement.append(selectElement);

	addListener(searchElement, selectElement);
};

export {processElement};
