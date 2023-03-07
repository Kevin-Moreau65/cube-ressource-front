import { getRessource } from '$lib/models/ressources';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const result = await getRessource(1);
	return {
		ressource: [...result.data]
	};
}) satisfies PageLoad;
