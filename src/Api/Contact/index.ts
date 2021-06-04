import Http from '../Http';
import { IApiGetContact } from './types';

export const APIGetContact = async (): Promise<
	IApiGetContact[]
> => {
	const { data } = await Http.get('/contact');

	return data;
};
