export interface INavbarState {
	active: boolean;
}

export interface IActiveNavbar {
	type: string;
}

export interface IDeActiveNavbar {
	type: string;
}

export interface ISwitchActiveNavbar {
	type: string;
}

export type tNavbarActionTypes =
	| IActiveNavbar
	| IDeActiveNavbar;
