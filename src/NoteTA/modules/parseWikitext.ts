import {ApiRetryFailError} from './util/ApiRetryFailError';
import {api} from './api';

type ApiParse = mw.Api['parse'];
type ApiParseParameters = Parameters<ApiParse>;
type ApiParseResponse = Awaited<ReturnType<ApiParse>>;
type ApiResponse = ApiParseResponse | ApiRetryFailError;

const parseWithRetry = (
	args: ApiParseParameters,
	count: number = 3,
	previousErrors: string[] = []
): JQuery.Deferred<ApiResponse> => {
	if (!count) {
		return $.Deferred<ApiRetryFailError>().reject(new ApiRetryFailError(previousErrors));
	}

	const deferred = $.Deferred<ApiResponse>();

	void api
		.parse(...args)
		.then((response: ApiParseResponse): void => {
			void deferred.resolve(response);
		})
		.catch((error?: Error | string): void => {
			console.error(error);

			if (error && typeof error === 'object' && 'stack' in error) {
				previousErrors[previousErrors.length] = error.stack;
			} else {
				previousErrors[previousErrors.length] = String(error);
			}

			parseWithRetry(args, --count, previousErrors)
				.then((newResponse: ApiResponse): void => {
					void deferred.resolve(newResponse);
				})
				.catch((newError?: Error | string): void => {
					void deferred.reject(newError);
				});
		});

	return deferred;
};

const parseWikitext = (...args: ApiParseParameters): JQuery.Deferred<ApiResponse> => {
	return parseWithRetry(args);
};

export {type ApiParseResponse, type ApiResponse, parseWikitext};
