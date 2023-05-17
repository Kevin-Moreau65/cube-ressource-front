import { getRessource } from '$lib/models/ressources';
import { user } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params, fetch }) => {
	try {
		const result = await getRessource(params.id, fetch, get(user).token);
		return {
			ressource: { ...result.data }
		};
	} catch (e: any) {
		throw error(e.statusCode || 500, e.message || 'Une erreur est survenue');
	}
}) satisfies PageLoad;
