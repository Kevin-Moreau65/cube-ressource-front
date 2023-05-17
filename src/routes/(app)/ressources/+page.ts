import { getRessources } from '$lib/models/ressources';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ url, fetch }) => {
	const searchParam: any = {};
	if (url.searchParams.get('PageNumber'))
		searchParam.pageNumber = url.searchParams.get('PageNumber');
	if (url.searchParams.get('PageSize')) searchParam.pageSize = url.searchParams.get('PageSize');
	if (url.searchParams.get('triType')) searchParam.triType = url.searchParams.get('triType');
	if (url.searchParams.get('search')) searchParam.search = url.searchParams.get('search');
	try {
		const result = await getRessources(searchParam, fetch);
		return {
			result
		};
	} catch (e: any) {
		throw error(e.statusCode || 500, e.message || 'Une erreur est survenue');
	}
}) satisfies PageLoad;
