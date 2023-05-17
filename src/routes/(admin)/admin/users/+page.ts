import { getAllUsers } from '$lib/models/account';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';
import { user } from '$lib/store';
import { error } from '@sveltejs/kit';

export const load = (async () => {
	try {
		const res = await getAllUsers(get(user).token);
		const users = Object.values(res);
		return {
			users: users
		};
	} catch (e: any) {
		throw error(e.statusCode || 500, e.message || 'Une erreur est survenue');
	}
}) satisfies PageLoad;
