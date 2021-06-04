import Http from '../Http';
import { IAPIMyWorks, IAPIMyWork } from './types';

export const APIGetMyWorks =
	async (): Promise<IAPIMyWorks> => {
		const { data } = await Http.get('/my-works');

		return data;
	};

export const APIGetMyWork = async (
	id: string,
): Promise<IAPIMyWork> => {
	const { data } = await Http.get(
		`/my-work/${id}`,
	);

	return data;
};
