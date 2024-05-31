import {addEventListenerWithRemover} from 'ext.gadget.Util';
import {getMessage} from './i18n';

/*!
 * 若想自定义复制结果中的文本可通过向自己的common.js中加入以下内容：
 *   window.DiffLink = ['版本差异', '固定版本'];
 * 若想使用默认值1，但自定值2，请将值1留空，如下例：
 *   window.DiffLink = ['', '固定版本'];
 */
const defaultTextArray: [string, string] = [getMessage('DiffVersion'), getMessage('PermanentVersion')];
if (window.DiffLink && Object.prototype.toString.call(window.DiffLink) === '[object Array]') {
	const textArray = window.DiffLink as unknown[];
	if (textArray[0] && Object.prototype.toString.call(textArray[0]) === '[object String]') {
		[defaultTextArray[0]] = textArray as [string];
	}
	if (textArray[1] && Object.prototype.toString.call(textArray[1]) === '[object String]') {
		[defaultTextArray[1]] = textArray as [string, string];
	}
}

let eventListener: ReturnType<typeof addEventListenerWithRemover> = {
	remove: (): void => {},
};

const addPortletLink = ({
	text,
	tooltip,
	link,
	defaultTextArrayIndex,
	isPermaLink,
}: {
	text: string;
	tooltip: string;
	link: string;
	defaultTextArrayIndex: number;
	isPermaLink?: boolean;
}): void => {
	let element: HTMLLIElement | null = document.querySelector('#t-difflink');
	if (!element) {
		const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
		element = mw.util.addPortletLink(portletId, '#', text, 't-difflink', tooltip);
	}
	if (!element) {
		return;
	}

	const clickListener = (event: MouseEvent): void => {
		event.preventDefault();
		const $element: JQuery = $('<div>');
		const hash: string = isPermaLink ? decodeURIComponent(location.hash) : '';
		for (const value of [
			link,
			`[[${link}${hash}]]`,
			`[[${link}${hash}|${defaultTextArray[defaultTextArrayIndex]}]]`,
		]) {
			$element.append(
				// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
				new (mw as any).widgets.CopyTextLayout({
					align: 'top',
					copyText: value,
				}).$element as JQuery
			);
		}
		void OO.ui.alert($element, {
			size: 'medium',
		});
	};

	eventListener.remove();
	eventListener = addEventListenerWithRemover({
		target: (element.firstElementChild ?? element) as HTMLElement,
		type: 'click',
		listener: clickListener,
	});
};

export {addPortletLink};
