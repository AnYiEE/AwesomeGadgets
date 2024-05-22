type ScrollTop = (
	targetHeight: number | string,
	effectsOptionsOrDuration?: JQuery.EffectsOptions<HTMLElement> | number | 'fast' | 'slow'
) => void;

const scrollTop: ScrollTop = (targetHeight, effectsOptionsOrDuration = {}) => {
	const options: JQuery.EffectsOptions<HTMLElement> =
		typeof effectsOptionsOrDuration === 'number' || typeof effectsOptionsOrDuration === 'string'
			? {
					duration: effectsOptionsOrDuration,
					easing: 'linear',
				}
			: {
					duration: 'slow',
					easing: 'linear',
					...effectsOptionsOrDuration,
				};
	$(document).find('html, body').animate(
		{
			scrollTop: targetHeight,
		},
		options
	);
};

export {type ScrollTop, scrollTop};
