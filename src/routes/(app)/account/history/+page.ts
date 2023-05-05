import { browser } from '$app/environment';
import { getSelfHistory } from '$lib/models/ressources';
import { user } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	if (browser) {
		const res = await getSelfHistory(fetch, get(user).token);
		return {
			result: res
		};
	}
}) satisfies PageLoad;
