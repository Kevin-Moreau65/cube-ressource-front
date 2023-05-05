import type { Role } from '$lib/store';
import { fetchApi, type ResponseAPI } from '$lib/utils/fetch-api';
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
	telephone: string;
	username: string;
	dateCreation: Date;
	// isDeleted: boolean;
	isConfirm: boolean;
	idZoneGeo: number;
	zone_GEO: ZoneGEO;
	role: Role;
}
interface LoginResponse extends ResponseAPI {
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
	const res = await fetchApi<ResponseAPI>('/api/users', 'POST', fetch, '', {
		email,
		password,
		firstName,
		lastName,
		phoneNumber,
		username
	});
	return res;
};
interface UsersResponse extends ResponseAPI {
	users: Pick<User, 'firstName' | 'lastName' | 'id' | 'username'>[];
}
export const getAllUsers = async (token: string) => {
	const res = await fetchApi<UsersResponse>('/api/users', 'GET', fetch, token);
	return res;
};
