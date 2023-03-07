import { getRessource } from '$lib/models/ressources';
import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	const result = await getRessource(params.id, fetch);
	return {
		ressource: { ...result.data }
	};
}) satisfies PageLoad;