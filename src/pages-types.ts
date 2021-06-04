import { IApiGetHome } from './Api/Home/types';
import {
	IMyWorksItem,
	IMyWorkItem,
} from './Api/Work/types';

export interface IMyWorksPageProps {
	works: {
		cards: IMyWorksItem[];
		filter: {
			text: string;
			label: string;
		}[];
	};
}

export interface IMyWorkPageProps {
	work: IMyWorkItem;
}

export interface IHomePageProps {
	information: IApiGetHome;
}
