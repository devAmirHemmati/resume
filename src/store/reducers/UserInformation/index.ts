import { IUserInformationState } from './@types';
import {
	SET_USER_INFORMATION,
	SET_LOADING_USER_INFORMATION,
} from './types';

const initialState: IUserInformationState = {
	loading: true,
	isGetData: false,
	profile: {
		id: 0,
		firstname: '',
		lastname: '',
		email: '',
		age: '',
		country: '',
		state: '',
		city: '',
		small_avatar: '',
		normal_avatar: '',
		created_at: '',
		updated_at: '',
		resume_file: '',
		description: '',
	},
	language: [],
	skill: [],
	knowledge: [],
	social: [],
	menus: [],
};

const UserInformationReducer = (
	state = initialState,
	action,
): IUserInformationState => {
	switch (action.type) {
		case SET_USER_INFORMATION:
			return {
				...state,
				...action.payload.data,
				isGetData: true,
			};

		case SET_LOADING_USER_INFORMATION:
			return {
				...state,
				loading: action.payload.status,
			};

		default:
			return state;
	}
};

export default UserInformationReducer;
