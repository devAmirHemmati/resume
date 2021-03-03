import {
	IActiveNavbar,
	IDeActiveNavbar,
	ISwitchActiveNavbar,
} from './@types';
import {
	ACTIVE_NAVBAR,
	DE_ACTIVE_NAVBAR,
	SWITCH_ACTIVE_NAVBAR,
} from './types';

export const activeNavbar = (): IActiveNavbar => ({
	type: ACTIVE_NAVBAR,
});

export const deActiveNavbar = (): IDeActiveNavbar => ({
	type: DE_ACTIVE_NAVBAR,
});

export const switchActiveNavbar = (): ISwitchActiveNavbar => ({
	type: SWITCH_ACTIVE_NAVBAR,
});
