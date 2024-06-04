type GenerateArray = typeof generateArray;

function generateArray<T extends []>(...args: (T | T[])[]): T[];
function generateArray<T extends NodeList>(...args: (T | T[])[]): Node[];
function generateArray<T = unknown>(...args: (T | T[])[]): T[];
// eslint-disable-next-line func-style
function generateArray<T>(...args: (T | T[])[]): T[] {
	return args.flatMap((arg) => {
		if (Array.isArray(arg)) {
			return arg;
		}

		if (arg instanceof NodeList) {
			return [...arg] as T;
		}

		return [arg];
	});
}

export {type GenerateArray, generateArray};
