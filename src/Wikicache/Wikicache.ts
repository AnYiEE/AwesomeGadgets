import {delay, getBody} from 'ext.gadget.Util';
import type {AutoSaveObject} from './modules/types';

void getBody().then(async function wikicache($body: JQuery<HTMLBodyElement>): Promise<void> {
	const wpSummary: HTMLInputElement | undefined = $body.find<HTMLInputElement>('input[name=wpSummary]').get(0);
	const wpTextbox1: HTMLTextAreaElement | undefined = $body
		.find<HTMLTextAreaElement>('textarea[name=wpTextbox1]')
		.get(0);
	if (!wpSummary || !wpTextbox1) {
		return;
	}

	const {wgPageName} = mw.config.get();

	let cacheKey: string = `wikicache-autosave-${wgPageName}`;
	const section = document.querySelector<HTMLInputElement>('input[name=wpSection]')?.value;
	if (section) {
		cacheKey += `#${section}`;
	}

	const saveObject: Partial<AutoSaveObject> = (mw.storage.getObject(cacheKey) as AutoSaveObject | null) ?? {};
	if (saveObject['input[name=wpSummary]']) {
		wpSummary.value = saveObject['input[name=wpSummary]'] ?? saveObject['#wpSummary'];
	} else if (saveObject['#wpSummary']) {
		wpSummary.value = saveObject['#wpSummary'];
	}
	if (saveObject['textarea[name=wpTextbox1]']) {
		wpTextbox1.value = saveObject['textarea[name=wpTextbox1]'];
	} else if (saveObject['#wpTextbox1']) {
		wpTextbox1.value = saveObject['#wpTextbox1'];
	}

	document.querySelector<HTMLFormElement>('#editform')?.addEventListener('submit', (): void => {
		mw.storage.remove(cacheKey);
	});

	while (true) {
		await delay(60 * 1000);
		const newSaveObject: AutoSaveObject = {
			_path: location.pathname + location.search,
			_date: new Date(),
			'input[name=wpSummary]': wpSummary.value,
			'textarea[name=wpTextbox1]': wpTextbox1.value,
		};
		mw.storage.setObject(cacheKey, newSaveObject, 60 * 60 * 24 * 30 * 1000);
	}
});
