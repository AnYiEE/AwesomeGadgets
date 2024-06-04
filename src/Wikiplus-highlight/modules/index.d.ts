import 'types-mediawiki-renovate';
import type {CodeMirror6} from '@bhsd/codemirror-mediawiki';

interface CodeMirror {
	fromTextArea(textarea: HTMLTextAreaElement, lang?: string, ns?: number): Promise<CodeMirror6>;
}

type CodeMirrorOrPromise = CodeMirror | Promise<CodeMirror>;

declare global {
	namespace mw {
		namespace libs {
			let wphl: {version?: string; cmVersion: string} | undefined;
		}
	}

	interface Window {
		CodeMirror6: CodeMirrorOrPromise | undefined;
	}

	// eslint-disable-next-line no-shadow
	const CodeMirror6: CodeMirrorOrPromise;

	const _WikiplusPages: Record<number, {title: string; sectionCache: Record<string, string>}> | undefined;
}

export {};
