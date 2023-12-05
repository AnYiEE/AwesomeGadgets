import {type BuildOptions} from 'esbuild';
import LessPluginNpmImport from 'less-plugin-npm-import';
import LessPluginPresetEnv from 'less-plugin-preset-env';
import {lessLoader} from 'esbuild-plugin-less';
import postcss from 'esbuild-postcss';

/**
 * @summary Do not forget to declare these file extensions in `src/global.d.ts`
 * @see {@link https://esbuild.github.io/api/#loader}
 */
const loader: BuildOptions['loader'] = {
	'.gif': 'dataurl',
	'.ico': 'dataurl',
	'.jpg': 'dataurl',
	'.jpeg': 'dataurl',
	'.png': 'dataurl',
	'.svg': 'text',
};

/**
 * @see {@link https://esbuild.github.io/api/#general-options}
 */
const esbuildOptions: BuildOptions = {
	loader,
	bundle: true,
	charset: 'utf8',
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
};

export {esbuildOptions};
