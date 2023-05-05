import { Role } from '$lib/store';
import { protect } from '$lib/utils/protect';
import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { browser } from '$app/environment';

export const load = (async () => {
	if (browser) {
		if (!protect(Role.Administrator, Role.SuperAdministrator)) {
			throw error(401, 'Unauthorized');
		}
		return {};
	}
}) satisfies LayoutLoad;
