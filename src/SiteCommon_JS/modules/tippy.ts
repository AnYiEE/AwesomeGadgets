import {WG_SKIN} from './constant';
import {tippy} from 'ext.gadget.Tippy';

const getContent = (reference: Element): string => {
	const label: string | null = reference.getAttribute('aria-label');
	const title: string | null = reference.getAttribute('alt') ?? reference.getAttribute('title');

	return (label === title ? label : title || label) || (reference.textContent as string);
};

const onCreateCallback = (instance: ReturnType<typeof tippy>[0]): void => {
	const {reference} = instance;
	reference.setAttribute('aria-label', getContent(reference));
	reference.removeAttribute('title');
};

const onShowCallback = (instance: ReturnType<typeof tippy>[0]): void => {
	onCreateCallback(instance);
	instance.setContent(getContent(instance.reference));
};

const tippyForCitizenHeader = ($body: JQuery<HTMLBodyElement>): void => {
	if (WG_SKIN !== 'citizen') {
		return;
	}

	for (const element of $body.find(
		'.citizen-header label[title],.citizen-header .mw-echo-notifications-badge,.citizen-header__logo a,.page-actions>nav>ul>li a,.page-actions__button'
	)) {
		const $element: JQuery = $(element);
		let title: string | undefined = $element.attr('title');
		if (!title) {
			continue;
		}

		title = title.replace(/\s*?\[.+?]$/, '');

		$element.attr({
			'aria-label': title,
			title: '',
		});
		tippy($element.get(0) as HTMLElement, {
			arrow: true,
			content: title,
			placement: 'bottom',
			onCreate: onCreateCallback,
			onHidden: onCreateCallback,
			onShow: onShowCallback,
		});
	}
};

const tippyForExtension = async (): Promise<void> => {
	await mw.loader.using('ext.CollapsibleSidebar.js');
	tippy('#sidebarButton', {
		arrow: true,
		content: getContent,
		placement: 'left',
		onCreate: onCreateCallback,
		onHidden: onCreateCallback,
		onShow: onShowCallback,
	});

	if (WG_SKIN === 'vector') {
		await mw.loader.using('ext.CollapsibleSidebar.vector');
		tippy('#sidebarCollapse', {
			arrow: true,
			content: getContent,
			placement: 'right',
			onCreate: onCreateCallback,
			onHidden: onCreateCallback,
			onShow: onShowCallback,
		});
	}

	await mw.loader.using('ext.DarkMode');
	tippy('#darkmode-button', {
		arrow: true,
		content: getContent,
		placement: 'left',
		onCreate: onCreateCallback,
		onHidden: onCreateCallback,
		onShow: onShowCallback,
	});
};

export {tippyForCitizenHeader, tippyForExtension};
