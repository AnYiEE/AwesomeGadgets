interface AutoSaveObject {
	_path: string;
	_date: Date;
	'textarea[name=wpTextbox1]'?: string;
	'input[name=wpSummary]'?: string;
	'#wpTextbox1'?: string;
	'#wpSummary'?: string;
}

export type {AutoSaveObject};
