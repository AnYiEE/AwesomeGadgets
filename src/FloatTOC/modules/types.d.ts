type State = 'close' | 'open';

interface Config {
	floatTOC: State;
	originTOC: State;
}

export type {State, Config};
