import type {Config} from './types';

const getConfig = (id: string): Config => {
	let config = mw.storage.getObject(id) as ReturnType<typeof getConfig>;
	if (!config) {
		config = {
			floatTOC: window.outerHeight < window.outerWidth ? 'open' : 'close',
			originTOC: 'open',
		};
	}

	return config;
};

export {getConfig};
