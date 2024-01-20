import type {ApiDeleteParams, ApiEditPageParams, ApiParseParams} from 'mwn/build/api_params';
import type {ApiDeleteResponse, ApiEditResponse} from 'mwn/build/api_response_types';
import {type Mwn, type MwnOptions} from 'mwn';
import {type loadConfig} from './deploy-util';

type Config = ReturnType<typeof loadConfig>;
type Credentials = Config[keyof Config];

/**
 * @private
 */
const fakeCredentials: Credentials = {
	apiUrl: 'https://your.wiki/api.php',
};

const fakeConfig = {
	testwiki1: fakeCredentials,
	testwiki2: fakeCredentials,
} as const satisfies Config;

class FakeApi implements Partial<Mwn> {
	options: MwnOptions;
	public constructor(credentials: Credentials) {
		this.options = credentials;
	}
	// eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
	public delete(title: string | number, summary: string, _options?: ApiDeleteParams): Promise<ApiDeleteResponse> {
		console.log('Delete:', {
			title,
			summary,
		});
		return Promise.resolve({});
	}
	// eslint-disable-next-line class-methods-use-this
	public getTokensAndSiteInfo(): Promise<void> {
		return Promise.resolve();
	}
	// eslint-disable-next-line class-methods-use-this, no-empty-function, @typescript-eslint/no-empty-function
	public initOAuth(): void {}
	// eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
	public parseWikitext(content: string, _additionalParams?: ApiParseParams): Promise<string> {
		return Promise.resolve(content);
	}
	// eslint-disable-next-line class-methods-use-this
	public save(
		title: string | number,
		content: string,
		summary?: string,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		_options?: ApiEditPageParams
	): Promise<ApiEditResponse> {
		console.log('Save:', {
			title,
			summary,
		});
		return Promise.resolve({
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
