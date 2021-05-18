import { IAPIMyWorks } from '../../../Api/Work/types';

export interface IMyWorksState {
	isGetData: boolean;
	works: IAPIMyWorks[];
}

export interface ISetUserInformation {
	type: string;
	payload: { data: IAPIMyWorks[] };
}
