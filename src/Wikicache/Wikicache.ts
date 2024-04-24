import {autoSetCache, getCache, setCacheBeforeSubmit} from './modules/cache';

mw.hook('wikipage.editform').add(async ($editForm): Promise<void> => {
	setCacheBeforeSubmit({$editForm}); // Add hook to #editform
	await getCache({$editForm});
	await autoSetCache({$editForm});
});
