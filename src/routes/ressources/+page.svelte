<script lang="ts">
	import Button from '$lib/Button.svelte';
	import convertDate from '$lib/utils/convert-date';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="main">
	<div class="top-button">
		<input type="text" placeholder="Rechercher une ressource" />
		<Button title="Filtrer" link="/" buttonType="button" style="height: auto;" />
		<a href="/trier">
			<Button title="Trier" link="/" buttonType="button" style="height: auto;" />
		</a>
	</div>
	<div class="content">
		{#each data.ressources as ressource}
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
			<a href="#">1</a>
			<a href="#">2</a>
			<a href="#">3</a>
			<a href="#">4</a>
			<a href="#">5</a>
			<a href="#">6</a>
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
		background-color: var(--secondary-color);
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
</style>
