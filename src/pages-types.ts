import { IApiGetHome } from './Api/Home/types';
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

export interface IHomePageProps {
	information: IApiGetHome;
}
