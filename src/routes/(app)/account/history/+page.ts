import { getSelfHistory } from '$lib/models/ressources';
import { user } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ fetch }) => {
	try {
		const res = await getSelfHistory(fetch, get(user).token);
		return {
			...res
		};
	} catch (e: any) {
		throw error(e.statusCode || 500, e.message || 'Une erreur est survenue');
	}
}) satisfies PageLoad;
