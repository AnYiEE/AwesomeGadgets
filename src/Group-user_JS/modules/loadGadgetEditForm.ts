import {IS_WG_EDIT_OR_SUBMIT_ACTION} from './constant';

const usingEditFormJS = (): void => {
	void mw.loader.using(['ext.gadget.EditForm', 'ext.gadget.EditForm_JS', 'ext.gadget.DefaultSummaries']);
};

const loadGadgetEditForm = async (): Promise<void> => {
	if (IS_WG_EDIT_OR_SUBMIT_ACTION) {
		usingEditFormJS();
	} else {
		await mw.loader.using('ext.visualEditor.desktopArticleTarget.init');
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		mw.libs['ve'].addPlugin((): void => {
			usingEditFormJS();
		});
	}
};

export {loadGadgetEditForm};
