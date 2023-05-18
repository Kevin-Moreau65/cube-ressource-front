import { getRessource } from '$lib/models/ressources';
import { user } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params, fetch }) => {
	try {
		const res = await getRessource(params.id, fetch, get(user).token);
		console.log(res);
		return {
			...res
		};
	} catch (e: any) {
		console.log(e);
		throw error(e.statusCode || 500, e.message || 'Une erreur est survenue');
	}
}) satisfies PageLoad;
