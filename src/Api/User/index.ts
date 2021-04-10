import Http from '../Http';
import { IAPIUserInformation } from './types';

export const APIGetUserInformation = async (): Promise<IAPIUserInformation> => {
	const { data } = await Http.get('/user');

	return data;
};
