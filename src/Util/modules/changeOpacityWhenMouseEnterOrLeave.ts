type ChangeOpacityWhenMouseEnterOrLeave = (event: MouseEvent | JQuery.TriggeredEvent, opacity?: number) => void;

const changeOpacityWhenMouseEnterOrLeave: ChangeOpacityWhenMouseEnterOrLeave = (event, opacity = 0.7) => {
	(event.currentTarget as HTMLElement).style.opacity = event.type === 'mouseenter' ? '1' : opacity.toString();
};

export {type ChangeOpacityWhenMouseEnterOrLeave, changeOpacityWhenMouseEnterOrLeave};
