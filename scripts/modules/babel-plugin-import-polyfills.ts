/* eslint-disable camelcase */
/**
 * @file Automatically import any missing polyfills
 * @see {@link https://github.com/zloirock/core-js#missing-polyfills}
 */
import {type BrowserSupport, getSupport} from 'caniuse-api';
import {declare} from '@babel/helper-plugin-utils';
import {filterItems} from '@babel/helper-compilation-targets';

type PolyfillFeatures = 'AbortController' | 'fetch' | 'IntersectionObserver' | 'normalize' | 'Proxy' | 'ResizeObserver';

const getTargets = <T extends Exclude<PolyfillFeatures, 'normalize'>>(feature: T): Record<string, string> => {
	const browserSupport: BrowserSupport = getSupport(feature.toLowerCase());

	const result: Record<string, string> = {};
	for (const [browser, versions] of Object.entries(browserSupport)) {
		const version: string = versions.y?.toString() ?? '';
		if (!version) {
			continue;
		}

		result[browser] = versions.y?.toString() ?? '';
	}

	return result;
};

const compatData: Record<PolyfillFeatures, ReturnType<typeof getTargets>> = {
	AbortController: getTargets('AbortController'),
	fetch: getTargets('fetch'),
	IntersectionObserver: getTargets('IntersectionObserver'),
	normalize: {
		and_chr: '119',
		and_ff: '119',
		android: '119',
		chrome: '34',
		edge: '12',
		firefox: '31',
		ios_saf: '10',
		op_mob: '73',
		opera: '21',
		safari: '10',
		samsung: '10',
	},
	Proxy: getTargets('Proxy'),
	ResizeObserver: getTargets('ResizeObserver'),
};

const polyfills: Record<
	PolyfillFeatures,
	{
		entry?: string;
		package: string;
		type: 'CallExpression' | 'NewExpression';
	}
> = {
	AbortController: {
		package: 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only',
		type: 'NewExpression',
	},
	fetch: {
		package: 'whatwg-fetch',
		type: 'CallExpression',
	},
	IntersectionObserver: {
		package: 'intersection-observer',
		type: 'NewExpression',
	},
	normalize: {
		package: 'unorm',
		type: 'CallExpression',
	},
	Proxy: {
		package: 'proxy-polyfill/proxy.min',
		type: 'NewExpression',
	},
	ResizeObserver: {
		entry: 'ResizeObserver',
		package: '@juggle/resize-observer',
		type: 'NewExpression',
	},
} as const;

const addImport = (
	path,
	types,
	{
		entry,
		packageName,
	}: {
		entry?: string;
		packageName: string;
	}
): void => {
	const stringLiteral = types.stringLiteral(packageName);
	const importDeclaration = types.importDeclaration(
		entry ? [types.importSpecifier(types.identifier(entry), types.identifier(entry))] : [],
		stringLiteral
	);

	path.findParent((parent) => {
		return parent.isProgram();
	}).unshiftContainer('body', importDeclaration);
};

export default declare((api) => {
	const {types} = api;
	const needPolyfills: Set<string> = filterItems(compatData, new Set(), new Set(), api.targets());

	return {
		visitor: {
			CallExpression(path): void {
				const {
					node: {callee, arguments: args},
				} = path;

				for (const [name, {entry, package: packageName, type}] of Object.entries(polyfills)) {
					if (type !== 'CallExpression' || !needPolyfills.has(name) || !args.length) {
						continue;
					}

					switch (name) {
						// polyfill call expressions in prototypes
						case 'normalize':
							if (
								args.length !== 1 ||
								!types.isStringLiteral(args[0]) ||
								!types.isMemberExpression(callee) ||
								!types.isIdentifier(callee.property, {name})
							) {
								continue;
							}
							break;
						// polyfill other call expressions
						default:
							if (!types.isIdentifier(callee, {name})) {
								continue;
							}
					}

					addImport(path, types, {
						entry,
						packageName,
					});
				}
			},

			NewExpression(path) {
				const {callee} = path.node;

				for (const [name, {entry, package: packageName, type}] of Object.entries(polyfills)) {
					if (type !== 'NewExpression' || !needPolyfills.has(name) || !types.isIdentifier(callee, {name})) {
						continue;
					}

					addImport(path, types, {
						entry,
						packageName,
					});
				}
			},
		},
	};
});
