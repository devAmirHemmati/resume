/* eslint-disable camelcase */

export interface IUserProfile {
	id: number;
	firstname: string;
	lastname: string;
	email: string;
	age: string;
	country: string;
	state: string;
	city: string;
	small_avatar: string;
	normal_avatar: string;
	created_at: string;
	updated_at: string;
}

export interface IUserLanguage {
	id: number;
	title: string;
	percent: string;
	created_at: string;
	updated_at: string;
}

export interface IUserSkill {
	id: number;
	title: string;
	percent: string;
	created_at: string;
	updated_at: string;
}

export interface IUserKnowledge {
	id: number;
	value: string;
	created_at: string;
	updated_at: string;
}

export interface IUserSocial {
	id: number;
	title: string;
	link: string;
	created_at: string;
	updated_at: string;
}

export interface IAPIUserInformation {
	profile: IUserProfile;
	language: IUserLanguage[];
	skill: IUserSkill[];
	knowledge: IUserKnowledge[];
	social: IUserSocial[];
}
