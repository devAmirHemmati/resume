import { IMyWorksState } from './@types';
import { SET_MY_WORKS } from './types';

const initialState: IMyWorksState = {
	isGetData: false,
	works: [],
};

const MyWorksReducer = (
	state = initialState,
	action,
): IMyWorksState => {
	switch (action.type) {
		case SET_MY_WORKS:
			return {
				...state,
				works: action.payload.data,
				isGetData: true,
			};

		default:
			return state;
	}
};

export default MyWorksReducer;
