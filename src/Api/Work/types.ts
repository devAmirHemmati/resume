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
	work: string;
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
	filter: string;
	url: string;
	customer: string;
	summary: string;
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
	summary: string;
	filter: string;
	url: string;
	customer: string;
	location: string;
	['start_date']: string;
	['done_date']: string;
	status: tMyWorkItem;
	['created_at']: Date;
	['updated_at']: Date;
	['video_link']: string | null;
	pictures: IMyWorksItemPictures[];
	comments: tMyWorkComment[];
	next?: number;
	perv?: number;
}

export interface IMyWorksFilter {
	id: number;
	label: string;
	text: string;
}

export interface IAPIMyWorks {
	cards: IMyWorksItem[];
	filter: IMyWorksFilter[];
}

export interface IAPIMyWork extends IMyWorkItem {}
