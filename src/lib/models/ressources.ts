import { fetchApi, type Fetch, type ResponseAPI } from '$lib/utils/fetch-api';
import type { Pagination } from './pagination';
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

export enum TriType {
	DateDesc,
	DateAsc,
	Alphabetique,
	Popularite
}

interface RessourcesResponse extends ResponseAPI, Pagination {
	data: Ressource[];
}
interface RessourceResponse extends ResponseAPI {
	data: Ressource;
}

export const getRessources = async (
	{ pageNumber, pageSize }: { pageNumber?: string; pageSize?: string },
	fetch: Fetch
) => {
	const res = await fetchApi<RessourcesResponse>(
		`/api/resources?${pageNumber ? `PageNumber=${pageNumber}&` : ''}${
			pageSize ? `PageSize=${pageSize}&` : ''
		}`,
		'GET',
		fetch
	);
	return res;
};

export const getRessource = async (id: string, fetch: Fetch) => {
	const res = await fetchApi<RessourceResponse>(`/api/resources/${id}`, 'GET', fetch);
	return res;
};
