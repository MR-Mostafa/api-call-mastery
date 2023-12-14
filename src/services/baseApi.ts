import axios from 'axios';
import { stringify } from 'qs';

export const API = axios.create({
	baseURL: import.meta.env.BASE_URL,
	timeout: parseInt(import.meta.env.API_TIMEOUT, 10), // 15s
	paramsSerializer: (params) => stringify(params, { arrayFormat: 'repeat' }),
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	},
	responseType: 'json',
	responseEncoding: 'utf8',
});

/**
 * Add a request interceptor
 */
API.interceptors.request.use(
	(config) => {
		// Do something before request is sent
		return config;
	},
	(error) => {
		// Do something with request error
		return Promise.reject(error);
	},
);

/**
 * Add a response interceptor
 */
API.interceptors.response.use(
	async (response) => {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	(error) => {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	},
);
