import * as OPTIONS from '../options.json';
import {getWpTextbox1Content, setWpTextbox1Content} from './wpTextbox1Content';
import {AutoSaveObject} from './types';
import {delay} from 'ext.gadget.Util';
import {getMessage} from './i18n';
import {toastify} from 'ext.gadget.Toastify';

const getCacheKey = () => {
	const {wgPageName} = mw.config.get();
	let cacheKey: string = `${OPTIONS.cacheKeyPrefix}${wgPageName}`;
	const section = document.querySelector<HTMLInputElement>('input[name=wpSection]')?.value;
	if (section) {
		cacheKey += `#${section}`;
	}

	return cacheKey;
};

const getCache = async ({$editForm}: {$editForm: JQuery<HTMLElement>}) => {
	if (mw.config.get(OPTIONS.configKey)) {
		return;
	}
	mw.config.set(OPTIONS.configKey, true);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const saveObject: Partial<AutoSaveObject> = mw.storage.getObject(getCacheKey());

	if (!saveObject) {
		return;
	}

	const wpSummary: HTMLInputElement | null = document.querySelector('input[name=wpSummary]');
	if (saveObject['input[name=wpSummary]'] && wpSummary) {
		wpSummary.value = saveObject['input[name=wpSummary]'];
	}

	if (
		saveObject['textarea[name=wpTextbox1]'] &&
		!(getWpTextbox1Content({$editForm}) === saveObject['textarea[name=wpTextbox1]'])
	) {
		const confirm = await OO.ui.confirm(getMessage('Restore changes?'), {
			actions: [
				{label: getMessage('Restore unsaved changes'), action: 'accept', flags: ['progressive']},
				{label: getMessage('Not to restore'), action: 'cancel', flags: ['destructive']},
			],
		});
		if (confirm) {
			setWpTextbox1Content({$editForm, content: saveObject['textarea[name=wpTextbox1]']});
		}
	}
};

const setCache = async ({$editForm}: {$editForm: JQuery<HTMLElement>}) => {
	while (true) {
		await delay(30 * 1000);
		const newSaveObject: AutoSaveObject = {
			date: new Date(),
			'input[name=wpSummary]': `${document.querySelector<HTMLInputElement>('input[name=wpSummary]')?.value}`,
			'textarea[name=wpTextbox1]': getWpTextbox1Content({$editForm}),
		};
		try {
			mw.storage.setObject(getCacheKey(), newSaveObject, 60 * 60 * 24 * 30 * 1000);
			toastify({
				text: getMessage('Change saved'),
				close: true,
				duration: 10 * 1000,
				gravity: 'top',
				position: 'right',
			});
		} catch (error) {
			console.error(error);
		}
	}
};

export {getCache, setCache};
