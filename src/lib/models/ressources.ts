import { fetchApi, type Fetch } from '$lib/utils/fetch-api';
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
	categorie: Categorie;
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
export interface Categorie {
	id: number;
	name: string;
}
export enum TriType {
	DateDesc,
	DateAsc,
	Alphabetique,
	Popularite
}

interface RessourcesResponse extends Pagination {
	data: Ressource[];
}
interface RessourceResponse {
	data: Ressource;
}
interface History {
	id: number;
	date: Date;
	resource: Ressource;
}
interface Favorite {
	id: number;
	resource: Ressource;
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
export const getRessourcesAdmin = async (
	{
		pageNumber,
		pageSize,
		triType,
		search
	}: { pageNumber?: string; pageSize?: string; triType?: string; search?: string },
	fetch: Fetch,
	token: string
) => {
	const res = await fetchApi<RessourcesResponse>(
		`/admin?${pageNumber ? `PageNumber=${pageNumber}&` : ''}${
			pageSize ? `PageSize=${pageSize}&` : ''
		}${triType ? `triType=${triType}&` : ''}${search ? `search=${search}` : ''}`,
		'GET',
		fetch,
		token
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
export const cancelVoteRessource = async (idRessource: string, fetch: Fetch, token: string) => {
	const res = await fetchApi(`/api/resources/${idRessource}/cancelVote`, 'DELETE', fetch, token);
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
export const cancelFavRessource = async (idRessource: string, fetch: Fetch, token: string) => {
	const res = await fetchApi(`/api/Favoris/cancel/${idRessource}`, 'DELETE', fetch, token);
	return res;
};
export const getSelfFavorite = async (fetch: Fetch, token: string) => {
	const res = await fetchApi<{ [x in number]: Favorite }>(
		`/api/Favoris/getallfavorisbyiduser`,
		'GET',
		fetch,
		token
	);
	return res;
};
export const getSelfHistory = async (fetch: Fetch, token: string) => {
	const res = await fetchApi<{ [x in number]: History }>(
		`/api/consultations/getallconsultationsbyiduser`,
		'GET',
		fetch,
		token
	);
	return res;
};
export const deleteRessource = async (idRessource: string, fetch: Fetch, token: string) => {
	const res = await fetchApi<Ressource>(`/api/resources/${idRessource}`, 'DELETE', fetch, token);
	return res;
};
export const modifyRessource = async (
	idRessource: string,
	{ title, description }: Pick<Ressource, 'title' | 'description'>,
	fetch: Fetch,
	token: string
) => {
	const res = fetchApi<Ressource>(`/api/resources/${idRessource}`, 'PUT', fetch, token, {
		title,
		description
	});
	return res;
};
export const createRessource = async (
	fetch: Fetch,
	token: string,
	title: string,
	description: string,
	categorieId: number
) => {
	const res = await fetchApi(`/api/Resources`, 'POST', fetch, token, {
		title,
		description,
		categorieId
	});
	return res;
};
export const restoreRessource = async (token: string, id: string) => {
	const res = await fetchApi(`/api/resources/${id}/restore`, 'PUT', fetch, token);
	return res;
};
export const getCategories = async () => {
	const res = await fetchApi<{ [x in number]: Categorie }>(`/api/categories`, 'GET', fetch);
	return res;
};
export const getCategorie = async (id: string) => {
	const res = await fetchApi<Categorie>(`/api/categories/${id}`, 'GET', fetch);
	return res;
};
export const deleteCategorie = async (id: string, token: string) => {
	const res = await fetchApi<Categorie>(`/api/categories/${id}`, 'DELETE', fetch, token);
	return res;
};
export const modifyCategorie = async (id: string, token: string, categorie: Categorie) => {
	const res = await fetchApi<Categorie>(`/api/categories/${id}`, 'PUT', fetch, token, {
		...categorie
	});
	return res;
};
export const createCategorie = async (token: string, categorie: { name: string }) => {
	const res = await fetchApi<Categorie>(`/api/categories`, 'POST', fetch, token, {
		...categorie
	});
	return res;
};
