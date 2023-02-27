import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';
import type { User } from './models/account';

export enum Role {
	User = 0,
	Moderator = 1,
	Administrator = 2,
	SuperAdministrator = 3
}
export type PartialUser = Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'username'>;
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
		token: ''
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
				token: ''
		  }
);
if (browser) {
	user.subscribe((user) => {
		localStorage.setItem('user', JSON.stringify(user));
	});
}
