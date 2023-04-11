import { fetchApi, type Fetch, type ResponseAPI } from '$lib/utils/fetch-api';
import type { Pagination } from './pagination';
import type { Comment } from './comment';
import type { User } from './account';

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
	user: User;
	voted?: {
		id: number;
		type: 'upvote' | 'downvote';
	};
	favoris?: {
		id: number;
		ressource: number;
		resourceId: number;
		userId: number;
	};
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
	{
		pageNumber,
		pageSize,
		triType,
		search
	}: { pageNumber?: string; pageSize?: string; triType?: string; search?: string },
	fetch: Fetch
) => {
	const res = await fetchApi<RessourcesResponse>(
		`/api/resources?${pageNumber ? `PageNumber=${pageNumber}&` : ''}${
			pageSize ? `PageSize=${pageSize}&` : ''
		}${triType ? `triType=${triType}&` : ''}${search ? `search=${search}` : ''}`,
		'GET',
		fetch
	);
	return res;
};

export const getRessource = async (id: string, fetch: Fetch, token?: string) => {
	const res = await fetchApi<RessourceResponse>(`/api/resources/${id}`, 'GET', fetch, token);
	return res;
};
export const upVoteRessource = async (idRessource: string, fetch: Fetch, token: string) => {
	const res = await fetchApi(`/api/resources/${idRessource}/upvote`, 'PUT', fetch, token);
	return res;
};
export const downVoteRessource = async (idRessource: string, fetch: Fetch, token: string) => {
	const res = await fetchApi(`/api/resources/${idRessource}/downvote`, 'PUT', fetch, token);
	return res;
};
export const favRessource = async (idRessource: string, fetch: Fetch, token: string) => {
	const res = await fetchApi(`/api/Favoris/${idRessource}`, 'POST', fetch, token);
	return res;
};

export const createRessource = async (
	fetch: Fetch,
	token: string,
	title: string,
	description: string
) => {
	const res = await fetchApi(`/api/Resources`, 'POST', fetch, token, {
		title,
		description
	});
	return res;
};
