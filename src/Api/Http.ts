import axios, {
	AxiosInstance,
	AxiosRequestConfig,
} from 'axios';
import { IHttp } from './types';

const INITIAL_AXIOS_CONFIG: AxiosRequestConfig = {
	timeout: 15000,
	baseURL: 'https://api.mohamadmasoudi.ir/api/',
};

class Http implements IHttp {
	protected request: AxiosInstance;

	constructor(
		initialConfig: AxiosRequestConfig = INITIAL_AXIOS_CONFIG,
	) {
		this.request = axios.create(initialConfig);
	}

	public get(url) {
		return this.request.get(url);
	}

	public put(url, data) {
		return this.request.put(url, data);
	}

	public post(url, data) {
		return this.request.post(url, data);
	}

	public delete(url) {
		return this.request.delete(url);
	}
}

export default new Http();
