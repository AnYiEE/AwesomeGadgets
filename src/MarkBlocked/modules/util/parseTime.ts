import {getMessage} from '../i18n';

const zz = (v: number): string => {
	let _v: string = String(v);
	if (v <= 9) {
		_v = `0${v}`;
	}

	return _v;
};

const inHours = (ms: number): string => {
	let mm: number = Math.floor(ms / 6e4);
	if (!mm) {
		return `${Math.floor(ms / 1e3)}${getMessage('s')}`;
	}

	let hh: number = Math.floor(mm / 60);
	mm %= 60;

	const dd: number = Math.floor(hh / 24);
	hh %= 24;

	if (dd) {
		return `${dd + (dd < 10 ? `.${zz(hh)}` : '')}${getMessage('d')}`;
	}

	return `${hh}:${zz(mm)}`;
};

// 20081226220605 or 2008-01-26T06:34:19Z -> number
const parseTS = (string: string): number => {
	const m: RegExpMatchArray = string
		.replace(/\D/g, '')
		.match(/(\d\d\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)/) as RegExpMatchArray;

	return new Date(
		Date.UTC(
			+(m[1] as string),
			+(m[2] as string) - 1,
			+(m[3] as string),
			+(m[4] as string),
			+(m[5] as string),
			+(m[6] as string)
		)
	).getTime();
};

export {inHours, parseTS};
