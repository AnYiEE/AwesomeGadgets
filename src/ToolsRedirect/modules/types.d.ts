type toolsRedirect = {
	findRedirectCallback(...args: ((pagename?: string, $content?: JQuery) => string[])[]): toolsRedirect;
	findRedirectBySelector(selector: string): toolsRedirect;
	setRedirectTextSuffix(title: string, suffix: string, flag: number | undefined): void;
};

declare global {
	interface Window {
		toolsRedirect: toolsRedirect;
	}
}

export default global;

export {type toolsRedirect};
