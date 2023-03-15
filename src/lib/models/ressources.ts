import { fetchApi, type Fetch, type ResponseAPI } from '$lib/utils/fetch-api';
import type { Comment } from './comment';

export interface Ressource {
	id: number;
	title: string;
	description: string;
	creationDate: string;
	path: string;
	upVote: number;
	downVote: number;
	type: number;
	userId: number;
	comments: Comment[];
}

interface RessourcesResponse extends ResponseAPI {
	data: Ressource[];
}
interface RessourceResponse extends ResponseAPI {
	data: Ressource;
}

export const getRessources = async (fetch: Fetch) => {
	const res = await fetchApi<RessourcesResponse>('/api/resources', 'GET', fetch);
	return res;
};

export const getRessource = async (id: string, fetch: Fetch) => {
	const res = await fetchApi<RessourceResponse>(`/api/resources/${id}`, 'GET', fetch);
	return res;
};
