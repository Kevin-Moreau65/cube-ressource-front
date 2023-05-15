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
	isDeleted: boolean;
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
export const getSelfFavorite = async (fetch: Fetch, token: string) => {
	const res = await fetchApi<RessourcesResponse>(`/api/resources/favoris`, 'GET', fetch, token);
	return res;
};
export const getSelfHistory = async (fetch: Fetch, token: string) => {
	const res = await fetchApi<RessourcesResponse>(`/api/resources/history`, 'GET', fetch, token);
	return res;
};
export const deleteRessource = async (idRessource: string, fetch: Fetch, token: string) => {
	const res = await fetchApi(`/api/resources/${idRessource}`, 'DELETE', fetch, token);
	return res;
};
export const modifyRessource = async (
	idRessource: string,
	{ title, description }: Pick<Ressource, 'title' | 'description'>,
	fetch: Fetch,
	token: string
) => {
	const res = fetchApi<ResponseAPI>(`/api/resources/${idRessource}`, 'PUT', fetch, token, {
		title,
		description
	});
	return res;
};
