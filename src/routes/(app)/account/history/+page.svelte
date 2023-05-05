<script lang="ts">
	import { storeTitle } from '$lib/store';
	import convertDate from '$lib/utils/convert-date';
	import type { PageData } from './$types';

	export let data: PageData;
	storeTitle.set('Historique');
</script>

<div class="main">
	<div class="content">
		{#if !data.result || data.result.length === 0}
			<p>Aucune ressource mise en favoris</p>
		{:else}
			{#each data.result as ressource}
				<a href={`/ressources/${ressource.id}`} data-sveltekit-preload-data="tap">
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
		{/if}
	</div>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		width: 100%;
		min-height: 100%;
		padding: 0px 10px 0px 10px;
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
	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: var(--accent-color);
		opacity: 1; /* Firefox */
	}

	.bloc:hover {
		background-color: rgb(231, 228, 228);
	}

	.bloc {
		margin-bottom: 15px;
	}
</style>
