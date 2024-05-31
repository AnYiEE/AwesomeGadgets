import {countByte} from './util/countByte';
import {countCJK} from './util/countCJK';
import {countLength} from './util/countLength';
import {getMessage} from './i18n';

const getCountByTextLength = (text: string): string => {
	return `${countLength(text)}${getMessage('character(s)')}`;
};

const getCJKCountByTextLength = (text: string): string => {
	return `${getMessage('(')}${countCJK(text)}${getMessage('CJK')}${getMessage(')')}`;
};

const getUTF8CountByTextLength = (text: string): string => {
	return `${countByte(text)}${getMessage('byte(s) in UTF-8 encoding')}`;
};

export {getCountByTextLength, getCJKCountByTextLength, getUTF8CountByTextLength};
