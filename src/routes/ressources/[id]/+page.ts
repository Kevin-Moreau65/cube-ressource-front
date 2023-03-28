import { getRessource } from '$lib/models/ressources';
import { user } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	const result = await getRessource(params.id, fetch, get(user).token);
	return {
		ressource: { ...result.data }
	};
}) satisfies PageLoad;
