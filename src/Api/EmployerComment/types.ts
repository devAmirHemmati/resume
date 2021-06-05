export interface IApiGetCommentStatus {
	status: boolean;
	description: string;
}

export interface IApiPostEmployerCommentData {
	description: string;
	rate: number;
	status: 'closed' | 'open';
}

export interface IApiPostEmployerComment {}
