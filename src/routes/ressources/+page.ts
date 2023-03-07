import { getRessources } from '$lib/models/ressources';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const result = await getRessources(fetch);
	return {
		ressources: [...result.data]
	};
}) satisfies PageLoad;
