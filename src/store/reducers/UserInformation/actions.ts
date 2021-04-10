import { IAPIUserInformation } from '../../../Api/User/types';
import {
	ISetLoadingUserInformation,
	ISetUserInformation,
} from './@types';
import {
	SET_LOADING_USER_INFORMATION,
	SET_USER_INFORMATION,
} from './types';

export const setUserInformation = (
	data: IAPIUserInformation,
): ISetUserInformation => ({
	type: SET_USER_INFORMATION,
	payload: { data },
});

export const setLoadingUserInformation = (
	status: boolean,
): ISetLoadingUserInformation => ({
	type: SET_LOADING_USER_INFORMATION,
	payload: { status },
});
