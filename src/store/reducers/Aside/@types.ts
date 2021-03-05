export interface IAsideState {
	active: boolean;
}

export interface IActiveAside {
	type: string;
}

export interface IDeActiveAside {
	type: string;
}

export interface ISwitchActiveAside {
	type: string;
}

export type tAsideActionTypes =
	| IActiveAside
	| IDeActiveAside;
