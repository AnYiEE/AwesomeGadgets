type BuiltFiles = {
	path: string;
	text: string;
}[];

interface CredentialsOnlyOAuth {
	apiUrl: string;
	OAuthCredentials: {
		accessToken: string;
		accessSecret: string;
		consumerToken: string;
		consumerSecret: string;
	};
}

interface CredentialsOnlyOAuth2 {
	apiUrl: string;
	OAuth2AccessToken: string;
}

interface CredentialsOnlyPassword {
	apiUrl: string;
	username: string;
	password: string;
}

type Credentials = CredentialsOnlyOAuth | CredentialsOnlyOAuth2 | CredentialsOnlyPassword;

interface DefaultDefinition {
	enable: boolean;
	description: string;
	section: string;
	actions: string[];
	contentModels: string[];
	default: boolean;
	dependencies: string[];
	hidden: boolean;
	namespaces: number[];
	peers: string[];
	rights: string[];
	skins: string[];
	supportsUrlLoad: boolean;
}

interface DefaultSectionMap {
	[key: DefaultDefinition['section']]: string;
}

type Dependencies = DefaultDefinition['dependencies'];

interface DeploymentTargets {
	[key: string]: {
		description: string;
		files: string[];
	};
}

interface DeploymentGlobalTargets {
	[key: string]: {
		enable: boolean;
		sourceCode: string;
		contentType?: 'application/javascript' | 'text/css' | undefined;
		licenseText?: string | undefined;
	};
}

interface SourceFiles {
	[key: string]: {
		definition: DefaultDefinition & {
			requiresES6: boolean;
		};
		license?: string;
		script?: string;
		scripts: string[];
		style?: string;
		styles: string[];
	};
}

export type {
	BuiltFiles,
	Credentials,
	CredentialsOnlyPassword,
	DefaultDefinition,
	DefaultSectionMap,
	Dependencies,
	DeploymentTargets,
	DeploymentGlobalTargets,
	SourceFiles,
};
