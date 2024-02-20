import * as OPTIONS from '../options.json';
import {initMwApi} from 'ext.gadget.Util';

type ClientLoginParams = ApiClientLoginParams & {
	logincontinue?: boolean;
	logintoken: string;
	loginreturnurl?: string;
	username?: string;
	password?: string;
	rememberMe?: boolean;
	retype?: string;
	OATHToken?: string;
};

const api: mw.Api = initMwApi(`AjaxLogin/${OPTIONS.version}`);

export {type ClientLoginParams, api};
