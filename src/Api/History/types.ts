export interface IApiGetEduItem {
	id: number;
	university: string;
	position: string;
	description: string;
	['start_date']: string;
	['end_date']: string;
	['created_at']: string;
	['updated_at']: string;
}

export interface IApiGetWorkItem {
	id: number;
	company: string;
	position: string;
	description: string;
	['start_date']: string;
	['end_date']: string;
	['created_at']: string;
	['updated_at']: string;
}

export interface IApiGetHistory {
	edu: IApiGetEduItem[];
	work: IApiGetWorkItem[];
}
