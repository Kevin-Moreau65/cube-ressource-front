import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getCategories } from '$lib/models/ressources';

export const load = (async () => {
	try {
		const res = await getCategories();
		const categories = Object.values(res);
		return {
			categories
		};
	} catch (e: any) {
		throw error(e.statusCode || 500, e.message || 'Une erreur est survenue');
	}
}) satisfies PageLoad;
