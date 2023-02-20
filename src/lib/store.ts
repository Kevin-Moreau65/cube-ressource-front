import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';

export enum Role {
	User = 0,
	Moderator = 1,
	Administrator = 2,
	SuperAdministrator = 3
}
type Account = {
	id: number | null;
	firstname: string;
	lastname: string;
	nickname: string;
	role: Role;
};
const setAccount = () => {
	const json = localStorage.getItem('account');
	if (json) {
		return JSON.parse(json) as Account;
	}
	return {
		id: null,
		firstname: '',
		lastname: '',
		nickname: '',
		role: Role.User
	};
};

export const account: Writable<Account> = writable(
	browser
		? setAccount()
		: {
				id: null,
				firstname: '',
				lastname: '',
				nickname: '',
				role: Role.User
		  }
);
if (browser) {
	account.subscribe((acc) => {
		localStorage.setItem('account', JSON.stringify(acc));
	});
}
