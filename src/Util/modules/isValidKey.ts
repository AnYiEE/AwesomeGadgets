type IsValidKey = typeof isValidKey;

const isValidKey = (object: object, key: string | number | symbol): key is keyof typeof object => {
	return key in object;
};

export {type IsValidKey, isValidKey};
