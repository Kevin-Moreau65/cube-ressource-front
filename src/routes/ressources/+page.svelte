<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/Button.svelte';
	import { TriType } from '$lib/models/ressources';
	import convertDate from '$lib/utils/convert-date';
	import type { PageData } from './$types';

	export let data: PageData;
	let isOpen = false;
	let pageSize: string;
	let tri: string;
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
						goto(`/ressources?PageSize=${pageSize}&triType=${tri}`);
					}}
				/>
			</div>
		</div>
	</div>
	<div class="top-button">
		<input type="text" placeholder="Rechercher une ressource" />
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
			<a href="#">&laquo;</a>
			{#each Array(data.result.totalPages) as ressource, i}
				<a href={`/ressources?PageNumber=${i + 1}`}>{i + 1}</a>
			{/each}
			<a href="#">&raquo;</a>
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
		width: 63%;
		height: 100%;
		color: white;
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
