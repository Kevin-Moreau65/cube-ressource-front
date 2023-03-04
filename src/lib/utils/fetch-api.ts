import { PUBLIC_API_URL } from '$env/static/public';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
type Options = {
	method: HttpMethod;
	headers: Headers;
	body?: string;
};
export interface ResponseAPI {
	statusCode: number;
	error?: string;
	message: string;
}
export type Fetch = (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>;
export const fetchApi = async <T extends ResponseAPI>(
	url: string,
	method: HttpMethod,
	fetch: Fetch,
	body?: object
): Promise<T> => {
	const headers = new Headers();
	headers.append('Accept', 'application/json');
	headers.append('Content-Type', 'application/json');
	const options: Options = {
		headers,
		method
	};
	if (method !== 'GET') options.body = JSON.stringify(body);
	const response = await fetch(PUBLIC_API_URL + url, options);
	const json: T = await response.json();
	json.statusCode = response.status;
	return json;
};
