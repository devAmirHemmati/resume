export type tMyWorkItem =
	| 'Done'
	| 'InDevelopment';

export interface tMyWorkComment {
	id: number;
	['my_works_id']: number;
	name: string;
	avatar: string;
	description: string;
	rating: string;
	['created_at']: string;
	['updated_at']: string;
}

export interface IMyWorksItemPictures {
	id: number;
	['my_works_id']: number;
	src: string;
	alt: string;
	['created_at']: Date;
	['updated_at']: Date;
}

export interface IMyWorksItem {
	id: number;
	title: string;
	src: string;
	description: string;
	filter: string;
	url: string;
	customer: string;
	location: string;
	['start_date']: string;
	['done_date']: string;
	status: tMyWorkItem;
	['created_at']: Date;
	['updated_at']: Date;
	pictures: IMyWorksItemPictures[];
	comments: [];
}

export interface IMyWorkItem {
	id: number;
	title: string;
	src: string;
	description: string;
	filter: string;
	url: string;
	customer: string;
	location: string;
	['start_date']: string;
	['done_date']: string;
	status: tMyWorkItem;
	['created_at']: Date;
	['updated_at']: Date;
	pictures: IMyWorksItemPictures[];
	comments: tMyWorkComment[];
}

export interface IAPIMyWorks
	extends IMyWorksItem {}

export interface IAPIMyWork extends IMyWorkItem {}
