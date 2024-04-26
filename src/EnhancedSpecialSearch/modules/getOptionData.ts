import * as OPTIONS from '../options.json';
import {getMessage} from './i18n';

type OptionData = {
	site: string;
	url?: string;
	origin?: boolean;
};

const getOptionData = (): OptionData[] => {
	return [
		{
			site: getMessage('YsArchives'),
			origin: true,
		},
		{
			site: getMessage('Baidu'),
			url: `https://www.baidu.com/s?wd=site%3A${OPTIONS.siteDomain}+$1`,
		},
		{
			site: getMessage('Bing'),
			url: `https://www.bing.com/search?q=site%3A${OPTIONS.siteDomain}+$1`,
		},
		{
			site: getMessage('Google'),
			url: `https://www.google.com/search?q=site%3A${OPTIONS.siteDomain}+$1`,
		},
		{
			site: getMessage('Sogou'),
			url: `https://www.sogou.com/web?query=site%3A${OPTIONS.siteDomain}+$1`,
		},
		{
			site: '360',
			url: `https://www.so.com/s?q=site%3A${OPTIONS.siteDomain}+$1`,
		},
	];
};

export {type OptionData, getOptionData};
