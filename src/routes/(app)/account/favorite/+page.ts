import { browser } from '$app/environment';
import { getSelfFavorite } from '$lib/models/ressources';
import { user } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	if (browser) {
		const res = await getSelfFavorite(fetch, get(user).token);
		return {
			result: res
		};
	}
}) satisfies PageLoad;
