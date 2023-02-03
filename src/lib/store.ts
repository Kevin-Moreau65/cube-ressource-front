import { writable, type Writable } from 'svelte/store';

type Account = {
	id: string | null;
	firstname: string;
	lastname: string;
	nickname: string;
};

export const account: Writable<Account> = writable({
	id: null,
	firstname: '',
	lastname: '',
	nickname: ''
});
