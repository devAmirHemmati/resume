import { IAPIUserInformation } from '../../../Api/User/types';

export interface IUserInformationState
	extends IAPIUserInformation {
	loading: boolean;
	isGetData: boolean;
}

export interface ISetUserInformation {
	type: string;
	payload: { data: IAPIUserInformation };
}

export interface ISetLoadingUserInformation {
	type: string;
	payload: { status: boolean };
}
