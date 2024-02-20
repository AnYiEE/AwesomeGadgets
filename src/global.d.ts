/**
 * @summary For import styles in TypeScript
 */
declare module '*.css';
declare module '*.less';
declare module '*.module.css' {
	const classes: {[key: string]: string};
	export default classes;
}

declare module '*.module.less' {
	const classes: {[key: string]: string};
	export default classes;
}

/**
 * @summary Do not forget to declare these file extensions in `scripts/build-esbuild_options.ts`
 * @see {@link https://esbuild.github.io/api/#loader}
 */
declare module '*.gif';
declare module '*.ico';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
