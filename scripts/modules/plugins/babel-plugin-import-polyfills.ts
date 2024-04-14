/* eslint-disable camelcase, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
/**
 * @file Automatically import any missing polyfills
 * @see {@link https://github.com/zloirock/core-js#missing-polyfills}
 * @see {@link https://github.com/mrhenry/core-web/tree/main/packages/core-web/modules}
 * @see ../../patches/@mrhenry__babel-plugin-core-web.patch
 */
import {type BabelAPI, declare} from '@babel/helper-plugin-utils';
import {type BrowserSupport, getSupport} from 'caniuse-api';
import type {CallExpression, ImportDeclaration, NewExpression, Program, StringLiteral} from '@babel/types';
import type {NodePath} from 'babel__traverse';
import {__rootDir} from '../utils/general-util';
/**
 * @see {@link https://babeljs.io/docs/babel-helper-compilation-targets#filteritems}
 */
// @ts-expect-error TS7016
import {filterItems} from '@babel/helper-compilation-targets';
import path from 'node:path';

/**
 * @private
 */
type Features =
	| 'AudioContext'
	| 'BroadcastChannel'
	| 'Proxy'
	// String.prototype.normalize
	| 'normalize';

/**
 * @private
 * @param {Exclude<Features, 'normalize'>} feature
 * @return {Record<string, string>}
 */
const getTargets = (feature: Exclude<Features, 'normalize'>): Record<string, string> => {
	const browserSupport: BrowserSupport = getSupport(feature.toLowerCase());

	const result: Record<string, string> = {};
	for (const [browser, versions] of Object.entries(browserSupport)) {
		const target: string | undefined = versions.y?.toString();
		if (!target) {
			continue;
		}

		result[browser] = target;
	}

	return result;
};

/**
 * @private
 */
const compatData = {
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
} as const satisfies Record<Features, ReturnType<typeof getTargets>>;

/**
 * @private
 */
const polyfills = {
	AudioContext: {
		package: path.join(__rootDir, 'scripts/modules/polyfills/AudioContext'),
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
} as const satisfies Record<
	Features,
	{
		package: string;
		type: 'CallExpression' | 'NewExpression';
	}
>;

/**
 * @private
 * @param {Object} nodePath
 * @param {Object} types
 * @param {string} packageName
 */
const addImport = (
	nodePath: NodePath<CallExpression | NewExpression>,
	types: BabelAPI['types'],
	packageName: (typeof polyfills)[Features]['package']
): void => {
	const stringLiteral: StringLiteral = types.stringLiteral(packageName);
	const importDeclaration: ImportDeclaration = types.importDeclaration([], stringLiteral);

	(
		nodePath.findParent((parent) => {
			return parent.isProgram();
		}) as NodePath<Program>
	)?.unshiftContainer('body', importDeclaration);
};

const plugin = declare((api) => {
	const {types} = api;
	const {isIdentifier, isMemberExpression, isStringLiteral} = types;

	const needPolyfills: Set<string> = filterItems(
		compatData,
		new Set(),
		new Set(),
		(
			api as unknown as {
				targets: () => Record<string, string>;
			}
		).targets()
	);

	return {
		visitor: {
			CallExpression(nodePath): void {
				const {
					node: {callee, arguments: args},
				} = nodePath;

				for (const [name, {package: packageName, type}] of Object.entries(polyfills)) {
					if (type !== 'CallExpression' || !needPolyfills.has(name)) {
						continue;
					}

					switch (name) {
						// polyfill call expressions in `String.prototype`
						case 'normalize':
							if (
								args.length !== 1 ||
								!isStringLiteral(args[0]) || // `''`
								!isMemberExpression(callee) || // `''.`
								!isIdentifier(callee.property, {
									name, // `''.normalize()`
								})
							) {
								continue;
							}
							break;
						// polyfill other call expressions
						default:
							if (
								!args.length ||
								!isIdentifier(callee, {
									name, // `name()`
								})
							) {
								continue;
							}
					}

					addImport(nodePath, types, packageName);
				}
			},

			NewExpression(nodePath) {
				const {callee} = nodePath.node;

				for (const [name, {package: packageName, type}] of Object.entries(polyfills)) {
					if (
						type !== 'NewExpression' ||
						!needPolyfills.has(name) ||
						!isIdentifier(callee, {
							name, // `new name()`
						})
					) {
						continue;
					}

					addImport(nodePath, types, packageName);
				}
			},
		},
	};
});

export default plugin;
