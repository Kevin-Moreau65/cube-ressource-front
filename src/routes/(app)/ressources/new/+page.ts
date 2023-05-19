import { getCategories } from '$lib/models/ressources';
import type { PageLoad } from './$types';

export const load = (async () => {
	const categories = await getCategories();
	return {
		...categories
	};
}) satisfies PageLoad;
