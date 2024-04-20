import {getCache, setCache} from './modules/cache';

mw.hook('wikipage.editform').add(async ($editForm): Promise<void> => {
	await getCache({$editForm});
	await setCache({$editForm});
});
