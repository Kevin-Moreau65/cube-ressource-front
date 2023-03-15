<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/Button.svelte';
	import { TriType } from '$lib/models/ressources';
	import convertDate from '$lib/utils/convert-date';
	import type { PageData } from './$types';
	export let data: PageData;
	let isOpen = false;
	let pageSize: string;
	let nextLink: string;
	let previousLink: string;
	let arrayNumberLinks: string[];
	let search: string;
	let tri: string;
	const nextPage = () => {
		const nextPage = parseInt($page.url.searchParams.get('PageNumber') || '1') + 1;
		const url = new URL($page.url);
		if (nextPage <= data.result.totalPages) {
			url.searchParams.set('PageNumber', nextPage.toString());
		}
		return url.href;
	};
	const previousPage = () => {
		const previousPage = parseInt($page.url.searchParams.get('PageNumber') || '1') - 1;
		const url = new URL($page.url);
		if (previousPage >= 1) {
			url.searchParams.set('PageNumber', previousPage.toString());
		}
		return url.href;
	};
	const handleSearch = () => {
		const url = new URL($page.url);
		url.searchParams.set('PageNumber', '1');
		url.searchParams.set('search', search);
		goto(url);
	};
	const filter = () => {
		const url = new URL($page.url);
		url.searchParams.set('PageNumber', '1');
		url.searchParams.set('PageSize', pageSize || '10');
		url.searchParams.set('triType', tri);
		goto(url);
	};
	const getNumberPage = (number: number) => {
		const url = new URL($page.url);
		url.searchParams.set('PageNumber', number.toString());
		return url.href;
	};
	$: {
		//Lorsque les données de la page change les lien de paginations sont automatiquement actualisé
		$page;
		nextLink = nextPage();
		previousLink = previousPage();
		arrayNumberLinks = [];
		for (let i = 0; i < data.result.totalPages; i++) {
			arrayNumberLinks.push(getNumberPage(i + 1));
		}
		if (browser) {
			document.querySelector('.content')?.scrollTo({
				top: 0
			});
		}
	}
</script>

<div class="main">
	<h1>Ressources</h1>
	<div class="popup-filter" class:open={isOpen}>
		<div class="filter-content">
			<h2>Filter / Trier</h2>
			<div>
				<p>Nombre de ressource :</p>
				<select bind:value={pageSize}>
					<option value="5"> 5 </option>
					<option value="10"> 10 </option>
					<option value="20"> 20 </option>
				</select>
			</div>
			<div>
				<p>Trier par :</p>
				<select bind:value={tri}>
					<option value={TriType.Alphabetique}> Alphabetique </option>
					<option value={TriType.DateAsc}> Plus vieux </option>
					<option value={TriType.DateDesc}> Plus récent </option>
					<option value={TriType.Popularite}> Popularité </option>
				</select>
			</div>
			<div>
				<Button
					title="Annuler"
					link="/"
					buttonType="button"
					style="height: auto;"
					action={() => (isOpen = !isOpen)}
				/>
				<Button
					title="Appliquer"
					link="/"
					buttonType="button"
					style="height: auto;"
					action={() => {
						isOpen = false;
						filter();
					}}
				/>
			</div>
		</div>
	</div>
	<div class="top-button">
		<input
			type="text"
			placeholder="Rechercher une ressource"
			bind:value={search}
			on:keypress={(e) => {
				if (e.key === 'Enter') {
					handleSearch();
				}
			}}
		/>
		<Button
			title="Filtrer / Trier"
			link="/"
			buttonType="button"
			style="height: auto;"
			action={() => (isOpen = !isOpen)}
		/>
	</div>
	<div class="content">
		{#each data.result.data as ressource}
			<a href={`/ressources/${ressource.id}`}>
				<div class="bloc">
					<div class="title-ressources">
						<p>{ressource.title}</p>
						<p>
							{convertDate(ressource.creationDate)}
						</p>
					</div>
					<div class="description">
						<p>
							{#if ressource.description.length > 203}
								{ressource.description.slice(0, 200)}...
							{:else}
								{ressource.description}
							{/if}
						</p>
					</div>
				</div>
			</a>
		{/each}
		<div class="pagination">
			<a href={previousLink} class:disabled={data.result.previousPage === null}>&laquo;</a>
			{#each Array(data.result.totalPages).fill(Date.now) as ressource, i}
				<a
					href={arrayNumberLinks[i]}
					class:selected={($page.url.searchParams.get('PageNumber') || '1') === (i + 1).toString()}
					>{i + 1}</a
				>
			{/each}
			<a href={nextLink} class:disabled={data.result.nextPage === null}>&raquo;</a>
		</div>
	</div>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		width: 100%;
		min-height: 100%;
		gap: 15px;
		padding: 5px 10px 0px 10px;
	}
	.content a {
		cursor: pointer;
		text-decoration: none;
		margin: 10px;
	}

	.bloc {
		background: white;
		color: black;
		border: 1px solid;
		border-radius: 1px;
		padding: 1rem;
		width: 100%;
		height: 100%;
	}

	.title-ressources {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}
	.title-ressources p:nth-child(1) {
		font-weight: bolder;
		font-size: large;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
		height: 100%;
		overflow: auto;
	}
	.description {
		color: rgb(75, 75, 75);
		font-weight: lighter;
	}
	.top-button {
		background: white;
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
		height: auto;
	}

	input {
		all: unset;
		border: solid 1px var(--accent-color);
		background-color: white;
		border-radius: 5px;
		min-width: 203px;
		padding: 5px 10px;
		width: 63%;
		height: 100%;
		color: black;
	}
	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: var(--accent-color);
		opacity: 1; /* Firefox */
	}

	.pagination {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 7px;
		width: 100%;
		padding-bottom: 10px;
	}

	.pagination a {
		color: black;
		padding: 8px 16px;
		text-decoration: none;
		cursor: pointer;
		border: solid 1px black;
	}
	.pagination a:hover {
		background-color: var(--accent-color);
	}
	.pagination a:nth-child(1),
	.pagination a:nth-last-child(1) {
		background-color: var(--secondary-color);
	}

	.bloc:hover {
		background-color: rgb(231, 228, 228);
	}

	.bloc {
		margin-bottom: 15px;
	}

	.popup-filter {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		margin: 0px;
		background-color: rgba(0, 0, 0, 0.47);
		backdrop-filter: blur(5px);
		display: flex;
		align-items: center;
		justify-content: center;
		visibility: collapse;
		opacity: 0;
		transition: all 0.3s;
	}
	.open {
		opacity: 1;
		visibility: visible;
	}
	.disabled {
		background-color: gray !important;
	}
	.selected {
		border: solid 3px var(--primary-color) !important;
	}

	.filter-content {
		width: auto;
		padding: 15px;
		height: auto;
		background-color: white;
		border-radius: 12px;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}
	.filter-content div {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
	}
</style>
