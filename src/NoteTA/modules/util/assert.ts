// eslint-disable-next-line func-style
function assert<T>(value: T | undefined, valueName: string): asserts value {
	if (!value) {
		throw new Error(`Assert Fail, ${valueName} == false.`);
	}
}

export {assert};
