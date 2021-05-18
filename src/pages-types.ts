import {
	IMyWorksItem,
	IMyWorkItem,
} from './Api/Work/types';

export interface IMyWorksPageProps {
	works: IMyWorksItem[];
}

export interface IMyWorkPageProps {
	work: IMyWorkItem;
}
