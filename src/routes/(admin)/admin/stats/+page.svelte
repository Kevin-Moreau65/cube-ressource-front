<script lang="ts">
	import { CategoryScale, Chart, LinearScale, BarElement } from 'chart.js';
	import type { PageData } from './$types';
	import { Bar } from 'svelte-chartjs';
	import convertDate from '$lib/utils/convert-date';
	Chart.register(CategoryScale, LinearScale, BarElement);
	export let data: PageData;
	const dataChart = {
		labels: data.data.map((d) => convertDate(d.date)),
		label: 'Consultation par jour les derniers 30 jours',
		datasets: [
			{
				label: '% of Votes',
				data: data.data.map((d) => d.number),
				backgroundColor: ['rgba(255, 134,159,0.4)'],
				borderWidth: 2,
				borderColor: ['rgba(255, 134, 159, 1)']
			}
		],
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	};
</script>

<h1>Nombre de consultations par jours ce dernier mois</h1>
<Bar data={dataChart} height="300" />
