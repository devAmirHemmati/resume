export interface IApiGetCommentStatus {
	status: boolean;
	description: string;
	name: string;
	lastname: string;
}

export interface IApiPostEmployerCommentData {
	message: string;
	rate: number;
	status: 'closed' | 'open';
	avatar?: File;
}

export interface IApiPostEmployerComment {}
