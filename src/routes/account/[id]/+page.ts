import { browser } from '$app/environment';
import { getAccount } from '$lib/models/account';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	if (browser) {
		const idNumber = parseInt(params.id) || false;
		if (!idNumber) {
			throw redirect(302, '/');
		}
		const res = await getAccount(idNumber);
		if (res)
			return {
				...res
			};
	}
}) satisfies PageLoad;
