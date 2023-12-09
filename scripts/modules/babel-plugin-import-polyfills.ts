/* eslint-disable camelcase */
/**
 * @file Automatically import any missing polyfills
 * @see {@link https://github.com/zloirock/core-js#missing-polyfills}
 */
import {type BrowserSupport, getSupport} from 'caniuse-api';
import {declare} from '@babel/helper-plugin-utils';
import {filterItems} from '@babel/helper-compilation-targets';
import nodePath from 'node:path';

type Features =
	| 'AudioContext'
	| 'BroadcastChannel'
	| 'Proxy'
	// String.prototype.normalize
	| 'normalize';

const getTargets = (feature: Exclude<Features, 'normalize'>): Record<string, string> => {
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
	AudioContext: {
		and_chr: '119',
		and_ff: '119',
		and_uc: '15.5',
		android: '119',
		chrome: '42',
		edge: '14',
		firefox: '40',
		ios_saf: '9',
		op_mob: '73',
		opera: '29',
		safari: '9',
		samsung: '4',
	},
	BroadcastChannel: getTargets('BroadcastChannel'),
	Proxy: getTargets('Proxy'),
	// String.prototype.normalize
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
};

const polyfills: Record<
	Features,
	{
		package: string;
		type: 'CallExpression' | 'NewExpression';
	}
> = {
	AudioContext: {
		package: `${nodePath.resolve()}/scripts/modules/polyfills/AudioContext`,
		type: 'NewExpression',
	},
	BroadcastChannel: {
		package: 'broadcastchannel-polyfill',
		type: 'NewExpression',
	},
	Proxy: {
		package: 'proxy-polyfill/proxy.min',
		type: 'NewExpression',
	},
	// String.prototype.normalize
	normalize: {
		package: 'unorm',
		type: 'CallExpression',
	},
} as const;

const addImport = (path, types, packageName: string): void => {
	const stringLiteral = types.stringLiteral(packageName);
	const importDeclaration = types.importDeclaration([], stringLiteral);

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

				for (const [name, {package: packageName, type}] of Object.entries(polyfills)) {
					if (type !== 'CallExpression' || !needPolyfills.has(name)) {
						continue;
					}

					switch (name) {
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

					addImport(path, types, packageName);
				}
			},

			NewExpression(path) {
				const {callee} = path.node;

				for (const [name, {package: packageName, type}] of Object.entries(polyfills)) {
					if (type !== 'NewExpression' || !needPolyfills.has(name) || !types.isIdentifier(callee, {name})) {
						continue;
					}

					addImport(path, types, packageName);
				}
			},
		},
	};
});
