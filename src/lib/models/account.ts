import type { Role } from '$lib/store';
import { fetchApi } from '$lib/utils/fetch-api';
export interface ZoneGEO {
	id: number;
	code: number;
	alpha2: string;
	alpha3: string;
	nom_en_gb: string;
	nom_fr_fr: string;
	user?: User[];
}

export interface User {
	id: number;
	lastName: string;
	firstName: string;
	email: string;
	// password: string;
	phoneNumber: string;
	username: string;
	dateCreation: Date;
	isDeleted: boolean;
	isConfirm: boolean;
	idZoneGeo: number;
	zone_GEO: ZoneGEO;
	role: Role;
	password: string;
}
interface LoginResponse {
	email: string;
	firstName: string;
	lastName: string;
	role: Role;
	token: string;
	username: string;
	id: number;
}
export const login = async (email: string, password: string) => {
	const res = await fetchApi<LoginResponse>('/api/users/authenticate', 'POST', fetch, '', {
		email,
		password
	});
	return res;
};
export const signUp = async (
	email: string,
	password: string,
	firstName: string,
	lastName: string,
	username: string,
	phoneNumber: string
) => {
	const res = await fetchApi<User>('/api/users', 'POST', fetch, '', {
		email,
		password,
		firstName,
		lastName,
		username,
		phoneNumber
	});
	return res;
};
export const getAllUsers = async (token: string) => {
	const res = await fetchApi<{ [x in number]: User }>('/api/users', 'GET', fetch, token);
	return res;
};
export const createUser = async (
	token: string,
	user: Pick<
		User,
		'firstName' | 'lastName' | 'username' | 'email' | 'role' | 'password' | 'phoneNumber'
	>
) => {
	const res = await fetchApi<User>(`/api/users/admin/create`, 'POST', fetch, token, user);
	return res;
};
export const getUser = async (token: string, idUser: string) => {
	const res = await fetchApi<User>(`/api/users/${idUser}`, 'GET', fetch, token);
	return res;
};
export const suspendUser = async (token: string, idUser: string) => {
	const res = await fetchApi<User>(`/api/users/${idUser}`, 'DELETE', fetch, token);
	return res;
};
export const unbanUser = async (token: string, idUser: string) => {
	const res = await fetchApi<User>(`/api/users/unban/${idUser}`, 'PUT', fetch, token);
	return res;
};
