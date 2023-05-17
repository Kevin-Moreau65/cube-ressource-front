import { getUser } from '$lib/models/account';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';
import { user } from '$lib/store';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	try {
		const res = await getUser(get(user).token, params.id);
		return {
			...res
		};
	} catch (e: any) {
		throw error(e.statusCode || 500, e.message || 'Une erreur est survenue');
	}
}) satisfies PageLoad;
