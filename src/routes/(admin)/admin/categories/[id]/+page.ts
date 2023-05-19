import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getCategorie } from '$lib/models/ressources';

export const load = (async ({ params }) => {
	try {
		const res = await getCategorie(params.id);
		return {
			...res
		};
	} catch (e: any) {
		throw error(e.statusCode || 500, e.message || 'Une erreur est survenue');
	}
}) satisfies PageLoad;
