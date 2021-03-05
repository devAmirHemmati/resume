import {
	IAsideState,
	tAsideActionTypes,
} from './@types';
import {
	ACTIVE_ASIDE,
	DE_ACTIVE_ASIDE,
	SWITCH_ACTIVE_ASIDE,
} from './types';

const initialState: IAsideState = {
	active: false,
};

const AsideReducer = (
	state = initialState,
	action: tAsideActionTypes,
): IAsideState => {
	switch (action.type) {
		case ACTIVE_ASIDE:
			return {
				...state,
				active: true,
			};

		case DE_ACTIVE_ASIDE:
			return {
				...state,
				active: false,
			};

		case SWITCH_ACTIVE_ASIDE:
			return {
				...state,
				active: !state.active,
			};

		default:
			return state;
	}
};

export default AsideReducer;
