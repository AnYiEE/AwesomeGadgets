/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/**
 * @description Preload contents from Revision ID (oldid)
 */
import {getMessage} from './i18n';
import {initMwApi} from 'ext.gadget.Util';

const preloadRevid = ($body: JQuery<HTMLBodyElement>): void => {
	const revid = mw.util.getParamValue('preloadrevid');

	if (!revid) {
		return;
	}

	const api = initMwApi();
	const params: ApiQueryRevisionsParams = {
		action: 'query',
		format: 'json',
		prop: 'revisions',
		revids: Number.parseInt(revid, 10),
		formatversion: '2',
		rvprop: 'content',
		rvslots: 'main',
	};

	void api.get(params).then(({query}) => {
		const {content} = query.pages[0].revisions[0].slots.main;
		if (
			$body.find('.oo-ui-icon-highlight').length &&
			$body.find('.oo-ui-icon-highlight').hasClass('oo-ui-image-progressive')
		) {
			$body.find('.oo-ui-icon-highlight').trigger('click');
		}
		if (document.querySelector('input[name=wpTextbox1]')) {
			(document.querySelector('input[name=wpTextbox1]') as HTMLTextAreaElement).value = content;
			$body.find('input[name=wpDiff]').trigger('click');
			void mw.notify(getMessage('RevisionPreloaded').replace('$1', revid), {type: 'success'});
		}
	});
};

export {preloadRevid};
