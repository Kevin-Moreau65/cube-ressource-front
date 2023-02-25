import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';
import type { User } from './models/account';

export enum Role {
	User = 0,
	Moderator = 1,
	Administrator = 2,
	SuperAdministrator = 3
}
export type StoreUser = Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'username'>;
const setAccount = () => {
	const json = localStorage.getItem('account');
	if (json) {
		return JSON.parse(json) as StoreUser;
	}
	return {
		id: 0,
		firstName: '',
		lastName: '',
		username: '',
		email: ''
	};
};

export const account: Writable<StoreUser> = writable(
	browser
		? setAccount()
		: {
				id: 0,
				firstName: '',
				lastName: '',
				username: '',
				email: ''
		  }
);
if (browser) {
	account.subscribe((acc) => {
		localStorage.setItem('account', JSON.stringify(acc));
	});
}
