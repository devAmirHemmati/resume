import { IAPIMyWorks } from '../../../Api/Work/types';
import { ISetUserInformation } from './@types';
import { SET_MY_WORKS } from './types';

export const setMyWorks = (
	data: IAPIMyWorks[],
): ISetUserInformation => ({
	type: SET_MY_WORKS,
	payload: { data },
});
