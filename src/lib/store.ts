import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';
import type { User } from './models/account';

export enum Role {
	User = 1,
	Moderator = 2,
	Administrator = 3,
	SuperAdministrator = 4
}
export type PartialUser = Pick<
	User,
	'id' | 'email' | 'firstName' | 'lastName' | 'username' | 'role'
>;
interface StoreUser extends PartialUser {
	token: string;
}
const setAccount = () => {
	const json = localStorage.getItem('user');
	if (json) {
		return JSON.parse(json) as StoreUser;
	}
	return {
		id: 0,
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		token: '',
		role: Role.User
	};
};

export const user: Writable<StoreUser> = writable(
	browser
		? setAccount()
		: {
				id: 0,
				firstName: '',
				lastName: '',
				username: '',
				email: '',
				token: '',
				role: Role.User
		  }
);
if (browser) {
	user.subscribe((user) => {
		localStorage.setItem('user', JSON.stringify(user));
	});
}
export const storeTitle = writable<string>('');
