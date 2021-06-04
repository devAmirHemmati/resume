export interface IApiGetContact {
	['first_phone_number']: string;
	['second_phone_number']: string;
	github: string;
	instagram: string;
	linkedin: string;
	telegram: string;
	virgool: string;
	whatsapp: string;
}

export interface IApiPostNewMessageData {
	name: string;
	email: string;
	message: string;
}

export interface IApiPostNewMessage {
	name: string;
	email: string;
	message: string;
	['updated_at']: string;
	['created_at']: string;
	id: number;
}
