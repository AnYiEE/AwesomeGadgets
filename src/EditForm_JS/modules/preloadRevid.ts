/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/**
 * @description Preload contents from Revision ID (oldid)
 */
import {api} from './util/api';
import {getMessage} from './i18n';
import {setWpTextbox1Content} from 'ext.gadget.Util';

const preloadRevid = ($editForm: JQuery<HTMLElement>): void => {
	const revid = mw.util.getParamValue('preloadrevid');

	if (!revid) {
		return;
	}

	if (mw.config.get('gadget-EditForm_JS__RevisionPreloaded')) {
		return;
	}

	mw.config.set('gadget-EditForm_JS__RevisionPreloaded', true);

	const {wgAction} = mw.config.get();

	if (!['edit', 'submit'].includes(wgAction)) {
		return;
	}

	const params: ApiQueryRevisionsParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'revisions',
		revids: Number.parseInt(revid, 10),
		rvprop: 'content',
		rvslots: 'main',
	};

	void api.get(params).then(({query}) => {
		const {content} = query.pages[0].revisions[0].slots.main;
		setWpTextbox1Content({$editForm, content});
		void mw.notify(getMessage('RevisionPreloaded').replace('$1', revid), {type: 'success'});
	});
};

export {preloadRevid};
