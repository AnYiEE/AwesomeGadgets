type CheckA11yConfirmKey = (event: KeyboardEvent | MouseEvent | JQuery.ClickEvent | JQuery.KeyDownEvent) => boolean;

const checkA11yConfirmKey: CheckA11yConfirmKey = (event): boolean => {
	if (['click', 'keydown'].includes(event.type)) {
		if (event.type === 'keydown') {
			return ['Enter', ' '].includes((event as KeyboardEvent).key);
		}
		return true;
	}
	return false;
};

export {type CheckA11yConfirmKey, checkA11yConfirmKey};
