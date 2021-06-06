import { IApiGetContact } from './Api/Contact/types';
import { IApiGetCommentStatus } from './Api/EmployerComment/types';
import { IApiGetHistory } from './Api/History/types';
import { IApiGetHome } from './Api/Home/types';
import {
	IMyWorksItem,
	IMyWorkItem,
	IMyWorksFilter,
} from './Api/Work/types';

export interface IMyWorksPageProps {
	works: {
		cards: IMyWorksItem[];
		filter: IMyWorksFilter[];
	};
}

export interface IMyWorkPageProps {
	work?: IMyWorkItem;
}

export interface IHomePageProps {
	information: IApiGetHome;
}

export interface IHistoryPageProps {
	information: IApiGetHistory;
}

export interface IContactPageProps {
	information: IApiGetContact;
}

export interface ISendNewCommentProps {
	information: IApiGetCommentStatus;
}
