import {lessLoader} from 'esbuild-plugin-less';

/**
 * @summary Do not forget to declare these file extensions in `src/global.d.ts`
 * @see https://esbuild.github.io/api/#loader
 */
const loader = {
	'.gif': 'dataurl',
	'.ico': 'dataurl',
	'.jpg': 'dataurl',
	'.jpeg': 'dataurl',
	'.png': 'dataurl',
	'.svg': 'text',
};

/** @see https://esbuild.github.io/api/#general-options */
const esbuildOptions = {
	bundle: true,
	charset: 'utf8',
	plugins: [lessLoader()],
	loader,
};

export default esbuildOptions;
