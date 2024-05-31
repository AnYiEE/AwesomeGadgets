interface rrdConfigCheckBoxes {
	rrdHideContent?: boolean;
	rrdHideUsername?: boolean;
	rrdHideSummary?: boolean;
}

interface rrdConfigOthers {
	rrdReason?: string | undefined;
	rrdOtherReasons?: string | undefined;
}

interface rrdConfig {
	checkboxes: rrdConfigCheckBoxes;
	others: rrdConfigOthers;
}

export type {rrdConfigCheckBoxes, rrdConfigOthers, rrdConfig};
