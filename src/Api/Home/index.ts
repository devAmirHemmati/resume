import Http from '../Http';
import { IApiGetHome } from './types';

export const APIGetHome =
	async (): Promise<IApiGetHome> => {
		const { data } = await Http.get('/home');

		return data;
	};
