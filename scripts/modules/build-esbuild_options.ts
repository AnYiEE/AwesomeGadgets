/* eslint-disable @typescript-eslint/no-unsafe-call */
import {type BuildOptions, type Plugin} from 'esbuild';
import {type Targets, browserslistToTargets} from 'lightningcss';
import CssModulesPlugin from 'esbuild-css-modules-plugin';
// @ts-expect-error TS7016
import LessPluginNpmImport from 'less-plugin-npm-import';
// @ts-expect-error TS7016
import LessPluginPresetEnv from 'less-plugin-preset-env';
import {SOURCE_MAP} from '../constant';
import browserslist from 'browserslist';
import {lessLoader} from 'esbuild-plugin-less';
import postcss from 'esbuild-postcss';
import postcssLoadConfig from 'postcss-load-config';
import vuePlugin from 'esbuild-plugin-vue3';

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

const lessOptions: Less.Options = {
	plugins: [new LessPluginPresetEnv() as unknown as Less.Plugin, new LessPluginNpmImport() as unknown as Less.Plugin],
};
const postcssConfig = await postcssLoadConfig();
const targets: Targets = browserslistToTargets(browserslist());

/**
 * @see {@link https://esbuild.github.io/api/#general-options}
 */
const esbuildOptions = {
	loader,
	bundle: true,
	charset: 'utf8',
	define: {
		'process.env.NODE_ENV': '"production"',
	},
	format: 'cjs',
	legalComments: 'inline',
	plugins: [
		vuePlugin({
			enableDevTools: false,
			postcss: postcssConfig,
			preprocessorOptions: lessOptions,
		}) as unknown as Plugin,
		CssModulesPlugin({
			targets,
			filter: /\.module\.(?:css|less)$/i,
			namedExports: true,
		}),
		postcss(),
		lessLoader(lessOptions),
	],
	sourcemap: SOURCE_MAP ? 'inline' : false,
	treeShaking: true,
	write: false,
} as const satisfies BuildOptions;

export {esbuildOptions};
