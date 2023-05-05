import { browser } from '$app/environment';
import { get } from 'svelte/store';
import type { LayoutLoad } from './$types';
import { user } from '$lib/store';
import { error } from '@sveltejs/kit';

export const load = (async () => {
	if (browser) {
		const userStore = get(user);
		if (userStore.id === 0 || userStore.token === '') {
			throw error(401);
		}
	}
	return {};
}) satisfies LayoutLoad;
