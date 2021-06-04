import {
	IMyWorksItem,
	tMyWorkComment,
} from '../Work/types';

export interface IApiGetHomeSummary {
	id: string;
	title: string;
	skills: string[];
	avatar: string;
	['count_up']: {
		text: string;
		value: string;
	}[];
	['created_at']: string;
	['updated_at']: string;
}

export interface IApiGetHome {
	comments: tMyWorkComment[];
	works: IMyWorksItem[];
	summary: IApiGetHomeSummary;
}
