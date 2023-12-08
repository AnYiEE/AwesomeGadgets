/* eslint-disable camelcase */
/**
 * @file Automatically import any missing polyfills
 * @see {@link https://github.com/zloirock/core-js#missing-polyfills}
 */
import {type BrowserSupport, getSupport} from 'caniuse-api';
import {declare} from '@babel/helper-plugin-utils';
import {filterItems} from '@babel/helper-compilation-targets';

type Features =
	| 'AbortController'
	| 'BroadcastChannel'
	| 'fetch'
	| 'IntersectionObserver'
	| 'normalize'
	| 'Proxy'
	| 'ResizeObserver'
	| 'sendBeacon'
	| 'TextDecoder'
	| 'TextEncoder';

const getTargets = (feature: Exclude<Features, 'normalize' | 'sendBeacon'>): Record<string, string> => {
	const browserSupport: BrowserSupport = getSupport(feature.toLowerCase());

	const result: Record<string, string> = {};
	for (const [browser, versions] of Object.entries(browserSupport)) {
		const target: string = versions.y?.toString() ?? '';
		if (!target) {
			continue;
		}

		result[browser] = target;
	}

	return result;
};

const compatData: Record<Features, ReturnType<typeof getTargets>> = {
	AbortController: getTargets('AbortController'),
	BroadcastChannel: getTargets('BroadcastChannel'),
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
	sendBeacon: {
		and_chr: '119',
		and_ff: '119',
		and_qq: '13.1',
		and_uc: '15.5',
		android: '119',
		baidu: '13.18',
		chrome: '39',
		edge: '14',
		firefox: '31',
		ios_saf: '11.3',
		kaios: '2.5',
		op_mob: '73',
		opera: '26',
		safari: '4',
		samsung: '10',
	},
	TextDecoder: getTargets('TextEncoder'),
	TextEncoder: getTargets('TextEncoder'),
};

const polyfills: Record<
	Features,
	{
		defauls?: true;
		entry?: string;
		package: string;
		type: 'CallExpression' | 'NewExpression';
	}
> = {
	AbortController: {
		package: 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only',
		type: 'NewExpression',
	},
	BroadcastChannel: {
		package: 'broadcastchannel-polyfill',
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
	sendBeacon: {
		package: 'navigator.sendbeacon',
		type: 'CallExpression',
	},
	TextDecoder: {
		package: 'fast-text-encoding',
		type: 'NewExpression',
	},
	TextEncoder: {
		package: 'fast-text-encoding',
		type: 'NewExpression',
	},
} as const;

const addImport = (
	path,
	types,
	{
		defauls,
		entry,
		packageName,
	}: {
		defauls?: true;
		entry?: string;
		packageName: string;
	}
): void => {
	const stringLiteral = types.stringLiteral(packageName);
	const importDeclaration = types.importDeclaration(
		defauls
			? [types.importDefaultSpecifier(types.identifier(entry))]
			: entry
			  ? [types.importSpecifier(types.identifier(entry), types.identifier(entry))]
			  : [],
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

				for (const [name, {defauls, entry, package: packageName, type}] of Object.entries(polyfills)) {
					if (type !== 'CallExpression' || !needPolyfills.has(name)) {
						continue;
					}

					switch (name) {
						// polyfill call expressions in `navigator` object
						case 'sendBeacon':
							if (
								!types.isIdentifier(callee.object, {name: 'navigator'}) ||
								!types.isMemberExpression(callee) ||
								!types.isIdentifier(callee.property, {name})
							) {
								continue;
							}
							break;
						// polyfill call expressions in `String.prototype`
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
							if (!args.length || !types.isIdentifier(callee, {name})) {
								continue;
							}
					}

					addImport(path, types, {
						defauls,
						entry,
						packageName,
					});
				}
			},

			NewExpression(path) {
				const {callee} = path.node;

				for (const [name, {defauls, entry, package: packageName, type}] of Object.entries(polyfills)) {
					if (type !== 'NewExpression' || !needPolyfills.has(name) || !types.isIdentifier(callee, {name})) {
						continue;
					}

					addImport(path, types, {
						defauls,
						entry,
						packageName,
					});
				}
			},
		},
	};
});
