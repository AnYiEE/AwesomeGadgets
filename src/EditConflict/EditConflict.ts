import {editConflict} from './modules/core';

const {wgAction, wgCurRevisionId} = mw.config.get();

if (['edit', 'submit'].includes(wgAction) && wgCurRevisionId) {
	void editConflict();
}
