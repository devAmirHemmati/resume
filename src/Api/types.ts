/* eslint-disable no-unused-vars */

export interface IHttp {
	get(url: string): Promise<any>;
	put(url: string, data: any): Promise<any>;
	post(url: string, data: any): Promise<any>;
	delete(url: string): Promise<any>;
}
