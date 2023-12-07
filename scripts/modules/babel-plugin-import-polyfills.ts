/**
 * @file Automatically import any missing polyfills
 * @see {@link https://github.com/zloirock/core-js#missing-polyfills}
 */
import {declare} from '@babel/helper-plugin-utils';
import {filterItems} from '@babel/helper-compilation-targets';

const compatData: Record<
	string,
	{
		chrome: string;
		edge: string;
		firefox: string;
		opera: string;
		safari: string;
	}
> = {
	AbortController: {
		chrome: '66',
		edge: '16',
		firefox: '57',
		opera: '53',
		safari: '12.1',
	},
	fetch: {
		chrome: '42',
		edge: '12',
		firefox: '39',
		opera: '29',
		safari: '10.1',
	},
	IntersectionObserver: {
		chrome: '58',
		edge: '16',
		firefox: '55',
		opera: '45',
		safari: '12.1',
	},
	normalize: {
		chrome: '34',
		edge: '12',
		firefox: '31',
		opera: '21',
		safari: '10',
	},
	Proxy: {
		chrome: '49',
		edge: '12',
		firefox: '18',
		opera: '36',
		safari: '10',
	},
	ResizeObserver: {
		chrome: '64',
		edge: '79',
		firefox: '69',
		opera: '52',
		safari: '13.1',
	},
} as const;

const polyfills: Record<
	keyof typeof compatData,
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
