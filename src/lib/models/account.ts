import { account } from '$lib/store';
import { Role } from '$lib/store';
import { fetchApi, type ResponseAPI } from '$lib/utils/fetch-api';
import { get } from 'svelte/store';
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
	const res = await fetchApi<LoginResponse>('/api/users/authenticate', 'POST', fetch, {
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
	username: string
) => {
	const res = await fetchApi('/api/users', 'POST', fetch, {
		email,
		password,
		firstName,
		lastName,
		username
	});
	return res;
};

export const getAccount = async (id: number) => {
	const acc = get(account);
	// if (acc.id !== id && acc.role === Role.User) {
	// 	throw redirect(302, '/');
	// }
	// const res = await fetch(`https://api.com/account/${id}`);
	// const data: { statusCode: string; message?: string; account: User } = await res.json();
	const data = {
		account: {
			id: 1,
			prenom: 'Kévin',
			nom: 'Moreau',
			pseudo: 'Kéké',
			role: Role.User
		}
	};
	return data;
};
