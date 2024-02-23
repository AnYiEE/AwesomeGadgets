import {countLength} from './countLength';

const countByte = (text: string): number => {
	return countLength(
		text
			.replace(/[\u0000-\u007F]/g, '.')
			.replace(/[\u0080-\u07FF\uD800-\uDFFF]/g, '..')
			.replace(/[\u0800-\uD7FF\uE000-\uFFFF]/g, '...')
	);
};

export {countByte};
