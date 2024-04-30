declare global {
	declare interface Window {
		easy_archive: {
			lang: Record<string, string>;
			settings_string: string;
			user_custom_archive_summary?: string;
			user_custom_delete_summary?: string;
		};
	}
}

export default global;
