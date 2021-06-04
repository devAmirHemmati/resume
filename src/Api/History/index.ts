import Http from '../Http';
import { IApiGetHistory } from './types';

export const APIGetHistory =
	async (): Promise<IApiGetHistory> => {
		const { data } = await Http.get('/history');

		return data;
	};
