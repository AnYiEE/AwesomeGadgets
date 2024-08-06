import type {ApiDeleteParams, ApiEditPageParams, ApiParseParams} from 'mwn/build/api_params';
import {type Mwn, type MwnOptions} from 'mwn';
import type {ApiEditResponse} from 'mwn/build/api_response_types';
import {type loadConfig} from './deploy-util';

type Config = ReturnType<typeof loadConfig>;
type Credentials = Config[keyof Config];

/**
 * @private
 */
const fakeCredentials: Credentials = {
	apiUrl: 'https://your.wiki/api.php',
};

const fakeConfig = Array.from({
	length: Math.floor(Math.random() * 3),
})
	.map<Config>((_, index) => {
		return {
			[`test${index + 1}`]: fakeCredentials,
		};
	})
	.reduce<Config>((config, current) => {
		return {
			...config,
			...current,
		};
	}, {}) satisfies Config;

class FakeApi implements Partial<Mwn> {
	options: MwnOptions;
	public constructor(credentials: Credentials) {
		this.options = credentials;
	}
	// eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
	public delete(title: string | number, summary: string, _options?: ApiDeleteParams) {
		console.log('Delete:', {
			title,
			summary,
		});
		return Promise.resolve({});
	}
	// eslint-disable-next-line class-methods-use-this
	public getTokensAndSiteInfo() {
		return Promise.resolve();
	}
	// eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-empty-function
	public initOAuth() {}
	// eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
	public parseWikitext(content: string, _additionalParams?: ApiParseParams) {
		return Promise.resolve(content);
	}
	// eslint-disable-next-line class-methods-use-this
	public save(
		title: string | number,
		content: string,
		summary?: string,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		_options?: ApiEditPageParams
	) {
		console.log('Save:', {
			title,
			summary,
		});
		return Promise.resolve<ApiEditResponse>({
			result: content + summary,
			pageid: 0,
			title: title.toString(),
			contentmodel: '',
			nochange: true,
			oldrevid: 0,
			newrevid: 0,
			newtimestamp: '',
		});
	}
}

export {fakeConfig, FakeApi};
