type AddEventListenerWithRemover = <
	Target extends Document | HTMLElement | Element | MediaQueryList | Window,
	Type extends Target extends Document
		? keyof DocumentEventMap
		: Target extends HTMLElement
			? keyof HTMLElementEventMap
			: Target extends MediaQueryList
				? keyof MediaQueryListEventMap
				: Target extends Window
					? keyof WindowEventMap
					: keyof GlobalEventHandlersEventMap,
	Listener extends Target extends Document
		? Type extends keyof DocumentEventMap
			? (this: Target, event: DocumentEventMap[Type]) => unknown
			: (this: Target, event: Event) => unknown
		: Target extends HTMLElement
			? Type extends keyof HTMLElementEventMap
				? (this: Target, event: HTMLElementEventMap[Type]) => unknown
				: (this: Target, event: Event) => unknown
			: Target extends Element
				? Type extends keyof ElementEventMap
					? (this: Target, event: ElementEventMap[Type]) => unknown
					: (this: Target, event: Event) => unknown
				: Target extends MediaQueryList
					? Type extends keyof MediaQueryListEventMap
						? (this: Target, event: MediaQueryListEventMap[Type]) => unknown
						: (this: Target, event: Event) => unknown
					: Target extends Window
						? Type extends keyof WindowEventMap
							? (this: Target, event: WindowEventMap[Type]) => unknown
							: (this: Target, event: Event) => unknown
						: (this: Target, event: Event) => unknown,
>({
	target,
	type,
	listener,
	options,
}: {
	target: Target;
	type: Type;
	listener: Listener;
	options?: AddEventListenerOptions;
}) => {
	remove: () => void;
};

const addEventListenerWithRemover: AddEventListenerWithRemover = ({target, type, listener, options = {}}) => {
	target.addEventListener(type, listener as EventListenerOrEventListenerObject, options);
	return {
		remove: (): void => {
			target.removeEventListener(type, listener as EventListenerOrEventListenerObject, options);
		},
	};
};

export {type AddEventListenerWithRemover, addEventListenerWithRemover};
