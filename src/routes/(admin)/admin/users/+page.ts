import { getAllUsers } from '$lib/models/account';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';
import { user } from '$lib/store';
import { error } from '@sveltejs/kit';

export const load = (async () => {
	const users = await getAllUsers(get(user).token);
	if (users.statusCode !== 200) {
		throw error(users.statusCode);
	}
	return {
		users
	};
}) satisfies PageLoad;
