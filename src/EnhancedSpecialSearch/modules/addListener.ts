import {openPage} from './util/openPage';

const addListener = (targetElement: HTMLElement, selectElement: HTMLSelectElement): void => {
	targetElement.addEventListener('submit', (event: SubmitEvent): void => {
		const inputElement: HTMLInputElement | null = targetElement.querySelector('[type="search"]');
		if (!inputElement) {
			return;
		}

		const optionElement: HTMLOptionElement = selectElement.querySelector('option:checked') as HTMLOptionElement;
		if (optionElement.dataset['origin']) {
			return;
		}

		event.preventDefault();
		openPage(optionElement.value.replace('$1', encodeURIComponent(inputElement.value)));
	});
};

export {addListener};
