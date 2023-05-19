import { fetchApi } from '$lib/utils/fetch-api';

interface ConsultationLastMonthPerDay {
	data: {
		date: string;
		number: number;
	}[];
}

export const getConsultationLastMonthPerDay = async () => {
	const res = await fetchApi<ConsultationLastMonthPerDay>(
		'/consultation/lastmonthperday',
		'GET',
		fetch
	);
	return res;
};
