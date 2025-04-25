declare global {
	namespace NodeJS {
		interface ProcessEnv {
			CREDENTIALS_JSON?: string;
		}
	}
}

export {};
