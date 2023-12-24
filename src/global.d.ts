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

/**
 * @see ../docs/how-to-use-require-in-mediawiki.md
 * @param {string} name - The dependency name
 * @return {T} - The dependency methods
 */
declare function _require_<T>(name: string): T;
