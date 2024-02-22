// Work in progress

interface CiteTemplate {
	templatename: string;
	shortform: string;
	basic: Record<string, string | boolean>[];
	extra: Record<string, string | boolean>[];
	incrementables: Record<string, never>;
}

declare global {
	interface Window {
		CiteTB: {
			Templates: Record<string, CiteTemplate>; // All templates
			Options: Record<string, string | string[] | boolean>; // Global options
			UserOptions: Record<string, never>; // User options
			DefaultOptions: Record<string, string | string[]>; // Script defaults
			ErrorChecks: Record<string, never>; // Error check functions
			getOption: (opt: string) => string | string[];
			fillNrefPreview: (parsed: string) => void;
			nrefParseClick: () => false | void;
			lastnamedrefchoice: string;
			namedRefSelectClick: () => void;
			fillTemplatePreview: (text: string) => void;
		};
		CiteTemplate: (
			templatename: string,
			shortform: string,
			basic: Record<string, string | boolean>[],
			extra: Record<string, string | boolean>[]
		) => void;
	}
}

export default global;
