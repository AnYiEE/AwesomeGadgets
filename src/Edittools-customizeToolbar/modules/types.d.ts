type CustomizeToolbar = (customizer: () => void) => void;

declare global {
	interface Window {
		customizeToolbar: CustomizeToolbar;
	}
}

export type {CustomizeToolbar};
