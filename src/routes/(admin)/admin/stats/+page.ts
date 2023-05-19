import { getConsultationLastMonthPerDay } from '$lib/models/stats';
import type { PageLoad } from './$types';

export const load = (async () => {
	const res = await getConsultationLastMonthPerDay();
	console.log(res);
	return {
		...res
	};
}) satisfies PageLoad;
