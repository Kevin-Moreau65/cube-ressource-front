import { fetchApi, type ResponseAPI } from '$lib/utils/fetch-api';

export interface Ressource {
	id: number;
	title: string;
	description: string;
	creationDate: Date;
	path: string;
	upVote: number;
	downVote: number;
	type: number;
	userId: number;
}

interface RessourcesResponse extends ResponseAPI {
	data: Ressource[];
	example: {
		foo: string;
	};
}

export const getRessources = async () => {
	const res = await fetchApi<RessourcesResponse>('/api/resources', 'GET', fetch);
	return res;
};
