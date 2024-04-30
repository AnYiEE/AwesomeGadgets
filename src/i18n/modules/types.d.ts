type I18nCandidatesKey =
	| 'en'
	| 'ja'
	| 'ru'
	| 'zh'
	| 'zh-hans'
	| 'zh-hant'
	| 'zh-cn'
	| 'zh-sg'
	| 'zh-my'
	| 'zh-tw'
	| 'zh-hk'
	| 'zh-mo';

type I18nCandidates = Partial<Record<I18nCandidatesKey, string>>;

type WgUXS = (
	hans?: unknown,
	hant?: unknown,
	cn?: unknown,
	tw?: unknown,
	hk?: unknown,
	sg?: unknown,
	zh?: unknown,
	mo?: unknown,
	my?: unknown,
	en?: unknown
) => string;

declare global {
	interface GetMessages<T> {
		<K extends keyof T>(key: K): K | NonNullable<T[K]>;
	}

	interface Window {
		wgUCS: WgUXS;
		wgULS: WgUXS;
		wgUVS: WgUXS;
	}
}

export default global;
export type {I18nCandidates};
