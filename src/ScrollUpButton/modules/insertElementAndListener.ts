import {scrollDownButton, scrollUpButton} from '../components/scrollButton';
import {changeOpacityWhenMouseEnterOrLeave} from 'ext.gadget.Util';
import {tippy} from 'ext.gadget.Tippy';

const insertElementandListener = (): void => {
	const $body = $('body');
	const onMouseEnterMouseLeave = (event: JQuery.TriggeredEvent): void => {
		changeOpacityWhenMouseEnterOrLeave(event);
	};

	for (const element of [scrollDownButton, scrollUpButton]) {
		const $element = $(element);
		$element.on('mouseenter mouseleave', onMouseEnterMouseLeave);
		$body.append($element);

		tippy($element.get(0) as HTMLImageElement, {
			arrow: true,
			content: $element.attr('alt') as string,
			placement: 'left',
		});
	}

	const scrollListener = (): void => {
		const $scrollDownButton = $(scrollDownButton);
		const $scrollUpButton = $(scrollUpButton);
		let downButtonButtom, upButtonButtom;
		if (
			document.querySelector('#proveit') ||
			document.querySelector('.gadget-cat_a_lot-container') ||
			document.querySelector('.wordcount')
		) {
			downButtonButtom = '85px';
			upButtonButtom = '127px';
		} else {
			downButtonButtom = '45px';
			upButtonButtom = '85px';
		}
		$scrollDownButton.css('bottom', downButtonButtom);
		$scrollUpButton.css('bottom', upButtonButtom);
	};
	const scrollListenerWithThrottle: typeof scrollListener = mw.util.throttle(scrollListener, 200);
	$(window).on('scroll selectionchange', scrollListenerWithThrottle);
};

export {insertElementandListener};
