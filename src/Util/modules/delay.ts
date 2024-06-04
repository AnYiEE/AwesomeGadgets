type Delay = (ms: number) => Promise<void>;

const delay: Delay = (ms) => {
	return new Promise((resolve: () => void): void => {
		setTimeout(resolve, ms);
	});
};

export {type Delay, delay};
