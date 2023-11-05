import type {BuildOptions} from 'esbuild';
import LessPluginAutoPrefix from 'less-plugin-autoprefix';
import LessPluginNpmImport from 'less-plugin-npm-import';
import browserslist from 'browserslist-config-wikimedia/modern-es6-only';
import {lessLoader} from 'esbuild-plugin-less';

/**
 * @summary Do not forget to declare these file extensions in `src/global.d.ts`
 * @see https://esbuild.github.io/api/#loader
 */
const loader: BuildOptions['loader'] = {
	'.gif': 'dataurl',
	'.ico': 'dataurl',
	'.jpg': 'dataurl',
	'.jpeg': 'dataurl',
	'.png': 'dataurl',
	'.svg': 'text',
};

/** @see https://esbuild.github.io/api/#general-options */
const esbuildOptions: BuildOptions = {
	loader,
	bundle: true,
	charset: 'utf8',
	plugins: [
		lessLoader({
			plugins: [
				new LessPluginAutoPrefix({
					browsers: [
						...new Set(
							browserslist.map((value: string): string => {
								const regex = /(.*?)\s(?:and|or)\s/;
								return value.match(regex) ? (value.match(regex) as RegExpMatchArray)[1] : value;
							})
						),
					],
				}) as unknown as Less.Plugin,
				new LessPluginNpmImport({prefix: '~'}) as unknown as Less.Plugin,
			],
		}),
	],
};

export default esbuildOptions;
