type MessageKey =
	// as in 17 files selected
	| 'cat-a-lot-files-selected'
	// Actions
	| 'cat-a-lot-copy'
	| 'cat-a-lot-move'
	| 'cat-a-lot-add'
	| 'cat-a-lot-remove-from-cat'
	| 'cat-a-lot-enter-name'
	| 'cat-a-lot-select'
	| 'cat-a-lot-all'
	| 'cat-a-lot-none'
	| 'cat-a-lot-none-selected'
	// Preferences
	| 'cat-a-lot-watchlistpref'
	| 'cat-a-lot-watch_pref'
	| 'cat-a-lot-watch_nochange'
	| 'cat-a-lot-watch_watch'
	| 'cat-a-lot-watch_unwatch'
	| 'cat-a-lot-minorpref'
	| 'cat-a-lot-editpagespref'
	| 'cat-a-lot-docleanuppref'
	| 'cat-a-lot-subcatcountpref'
	// Progress
	| 'cat-a-lot-loading'
	| 'cat-a-lot-editing'
	| 'cat-a-lot-of'
	| 'cat-a-lot-skipped-already'
	| 'cat-a-lot-skipped-not-found'
	| 'cat-a-lot-skipped-server'
	| 'cat-a-lot-all-done'
	| 'cat-a-lot-done'
	| 'cat-a-lot-added-cat'
	| 'cat-a-lot-copied-cat'
	| 'cat-a-lot-moved-cat'
	| 'cat-a-lot-removed-cat'
	| 'cat-a-lot-return-to-page'
	| 'cat-a-lot-cat-not-found'
	// Summaries:
	| 'cat-a-lot-summary-add'
	| 'cat-a-lot-summary-copy'
	| 'cat-a-lot-summary-move'
	| 'cat-a-lot-summary-remove';

type Override<P, S> = Omit<P, keyof S> & S;

interface SettingCommon {
	default: boolean;
	label?: SettingCommon['label_i18n'];
	label_i18n: string;
	select?: SettingCommon['select_i18n'];
	select_i18n?: Record<string, string>;
}

type SettingSubCatCount = Override<SettingCommon, {default: number}>;

type SettingWatchlist = Override<SettingCommon, {default: string; select?: SettingWatchlist['select_i18n']}> & {
	select_i18n: {
		watch_nochange: string;
		watch_pref: string;
		watch_unwatch: string;
		watch_watch: string;
	};
};

interface Setting {
	docleanup: SettingCommon;
	editpages: SettingCommon;
	minor: SettingCommon;
	subcatcount: SettingSubCatCount;
	watchlist: SettingWatchlist;
}

declare global {
	interface Window {
		readonly CatALotPrefs?: Partial<Record<keyof Setting, unknown>>;
	}
}

export default global;
export type {MessageKey, Setting};
