import {REXEX_GADGET_NAME} from '../constant';

const matchGadgetName = (innerHTML: string): string => {
	const regExpExecArray: RegExpExecArray | null = REXEX_GADGET_NAME.exec(innerHTML);

	return (regExpExecArray ? regExpExecArray[2] : null) ?? '';
};

export {matchGadgetName};
