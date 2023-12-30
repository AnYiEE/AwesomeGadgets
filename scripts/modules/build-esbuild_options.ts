/* eslint-disable @typescript-eslint/no-unsafe-call */
import {type BuildOptions} from 'esbuild';
// @ts-expect-error TS7016
import LessPluginNpmImport from 'less-plugin-npm-import';
// @ts-expect-error TS7016
import LessPluginPresetEnv from 'less-plugin-preset-env';
import {lessLoader} from 'esbuild-plugin-less';
import postcss from 'esbuild-postcss';

/**
 * @summary Do not forget to declare these file extensions in `src/global.d.ts`
 * @see {@link https://esbuild.github.io/api/#loader}
 */
const loader = {
	'.gif': 'dataurl',
	'.ico': 'dataurl',
	'.jpg': 'dataurl',
	'.jpeg': 'dataurl',
	'.png': 'dataurl',
	'.svg': 'text',
} as const satisfies BuildOptions['loader'];

/**
 * @see {@link https://esbuild.github.io/api/#general-options}
 */
const esbuildOptions = {
	loader,
	bundle: true,
	charset: 'utf8',
	format: 'cjs',
	legalComments: 'inline',
	plugins: [
		postcss(),
		lessLoader({
			plugins: [
				new LessPluginPresetEnv() as unknown as Less.Plugin,
				new LessPluginNpmImport() as unknown as Less.Plugin,
			],
		}),
	],
	treeShaking: true,
	write: false,
} as const satisfies BuildOptions;

export {esbuildOptions};
