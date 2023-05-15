import { getUser } from '$lib/models/account';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';
import { user } from '$lib/store';

export const load = (async ({ params }) => {
	const res = await getUser(get(user).token, params.id);
	return {
		...res
	};
}) satisfies PageLoad;
