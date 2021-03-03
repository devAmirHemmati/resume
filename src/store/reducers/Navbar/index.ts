import {
	INavbarState,
	tNavbarActionTypes,
} from './@types';
import {
	ACTIVE_NAVBAR,
	DE_ACTIVE_NAVBAR,
	SWITCH_ACTIVE_NAVBAR,
} from './types';

const initialState: INavbarState = {
	active: false,
};

const NavbarReducer = (
	state = initialState,
	action: tNavbarActionTypes,
): INavbarState => {
	switch (action.type) {
		case ACTIVE_NAVBAR:
			return {
				...state,
				active: true,
			};

		case DE_ACTIVE_NAVBAR:
			return {
				...state,
				active: false,
			};

		case SWITCH_ACTIVE_NAVBAR:
			return {
				...state,
				active: !state.active,
			};

		default:
			return state;
	}
};

export default NavbarReducer;
