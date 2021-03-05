import {
	IActiveAside,
	IDeActiveAside,
	ISwitchActiveAside,
} from './@types';
import {
	ACTIVE_ASIDE,
	DE_ACTIVE_ASIDE,
	SWITCH_ACTIVE_ASIDE,
} from './types';

export const activeAside = (): IActiveAside => ({
	type: ACTIVE_ASIDE,
});

export const deActiveAside = (): IDeActiveAside => ({
	type: DE_ACTIVE_ASIDE,
});

export const switchActiveAside = (): ISwitchActiveAside => ({
	type: SWITCH_ACTIVE_ASIDE,
});
