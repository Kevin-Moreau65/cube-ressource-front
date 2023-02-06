import { writable, type Writable } from 'svelte/store';

type Account = {
	id: number | null;
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
