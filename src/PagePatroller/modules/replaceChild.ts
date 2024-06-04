const replaceChild = (element: Element, newChild: Element): void => {
	while (element.hasChildNodes()) {
		element.firstChild?.remove();
	}
	element.append(newChild);
};

export {replaceChild};
