import { getRessources } from '$lib/models/ressources';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const result = await getRessources();
	return {
		ressources: [...result.data]
	};
}) satisfies PageLoad;
