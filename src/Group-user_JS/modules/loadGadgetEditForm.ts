const loadGadgetEditForm = (): void => {
	const EDIT_GADGETS = ['ext.gadget.EditForm', 'ext.gadget.EditForm_JS'];
	const usingEditFormJS = (gadgets: string | string[]): void => {
		void mw.loader.using(gadgets);
	};
	const {wgAction} = mw.config.get();
	if (['edit', 'submit'].includes(wgAction)) {
		usingEditFormJS(EDIT_GADGETS);
	}
};

export {loadGadgetEditForm};
