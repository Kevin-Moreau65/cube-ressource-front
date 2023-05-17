import { PUBLIC_API_URL } from '$env/static/public';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
type Options = {
	method: HttpMethod;
	headers: Headers;
	body?: string;
};
export interface ResponseError {
	errors?: Array<string[]>;
	message: string;
}
export type Fetch = (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>;
export const fetchApi = async <T>(
	url: string,
	method: HttpMethod,
	fetch: Fetch,
	token?: string,
	body?: object
): Promise<T> => {
	const headers = new Headers();
	headers.append('Authorization', `Bearer ${token}`);
	headers.append('Accept', 'application/json');
	headers.append('Content-Type', 'application/json');
	const options: Options = {
		headers,
		method
	};
	if (method !== 'GET') options.body = JSON.stringify(body);
	const response = await fetch(PUBLIC_API_URL + url, options);
	if (response.ok) {
		if (response.status === 204) {
			return {} as T;
		}
		try {
			if (response.body) {
				const json: T = await response.json();
				return { ...json };
			} else {
				return {} as T;
			}
		} catch (e: any) {
			throw {
				message: e.message || response.statusText,
				statusCode: response.status
			};
		}
	} else {
		try {
			const json: ResponseError = await response.json();
			if (!json.errors || json.errors === null) {
				throw { message: json.message, statusCode: response.status };
			}
			throw {
				message: json.errors[0][0],
				statusCode: response.status
			};
		} catch (e: any) {
			throw {
				message: e.message || response.statusText,
				statusCode: response.status
			};
		}
	}
};
