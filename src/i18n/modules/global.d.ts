type I18nCandidates = import('./types').I18nCandidates;

declare module 'ext.gadget.i18n' {
	export function content(candidates: I18nCandidates): string;
	export function localize(candidates: I18nCandidates): string;
	export function vary(candidates: I18nCandidates): string;
}
