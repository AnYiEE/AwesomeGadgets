const Scroller = function (element: HTMLElement) {
	const wheelHandler = function (e: WheelEvent) {
		if (e.deltaY && !e.deltaX) {
			e.preventDefault();
			requestAnimationFrame(() => {
				element.scrollBy(e.deltaY, 0);
			});
		}
	};
	element.addEventListener('wheel', wheelHandler);
	element.style.scrollSnapType = 'none';
	return function () {
		element.removeEventListener('wheel', wheelHandler);
		element.style.scrollSnapType = '';
	};
};
const scrollerContainers = document.getElementsByClassName('scroller-container') as HTMLCollectionOf<HTMLElement>;
for (const element of scrollerContainers) {
	Scroller(element);
}
