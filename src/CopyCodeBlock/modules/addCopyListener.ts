import {CLASS_NAME_COPY_BUTTON} from './constant';
import {Clipboard} from 'ext.gadget.Clipboard';
import {getMessage} from './i18n';
import {toastify} from 'ext.gadget.Toastify';

const addCopyListener = ($pres: JQuery<HTMLPreElement>): void => {
	for (const pre of $pres) {
		const clipboard = new Clipboard(pre.querySelector(`.${CLASS_NAME_COPY_BUTTON}`) as HTMLSpanElement, {
			text: (): string => {
				return pre.textContent ?? '';
			},
		});
		clipboard.on('success', (): void => {
			toastify(
				{
					text: getMessage('Copied'),
				},
				'success'
			);
		});
		clipboard.on('error', (): void => {
			toastify(
				{
					text: getMessage('Failed'),
				},
				'error'
			);
		});
	}
};

export {addCopyListener};
