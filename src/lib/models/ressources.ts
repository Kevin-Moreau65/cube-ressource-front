import { fetchApi, type ResponseAPI } from '$lib/utils/fetch-api';

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
}

interface RessourcesResponse extends ResponseAPI {
	data: Ressource[];
}
interface RessourceResponse extends ResponseAPI {
	data: Ressource;
}

export const getRessources = async () => {
	const res = await fetchApi<RessourcesResponse>('/api/resources', 'GET', fetch);
	return res;
};

export const getRessource = async (id: number) => {
	const res = await fetchApi<RessourceResponse>(`/api/resources/${id}`, 'GET', fetch);
	return res;
};
