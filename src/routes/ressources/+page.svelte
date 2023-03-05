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
		<a href="/ressource">
			{#each data.ressources as ressource}
				<div class="bloc">
					<a href="/ressource">
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
					</a>
				</div>
			{/each}
			<div class="bloc">
				<a href="/ressource">
					<div class="title-ressources">
						<p>Titre Ressource n°1</p>
						<p>26/05/2002</p>
					</div>
					<div class="description">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec eleifend nisl, eu
							feugiat elit. In hac habitasse.
						</p>
					</div>
				</a>
			</div>
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
		</a>
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

	.bloc {
		background: white;
		color: black;
		border: 1px solid;
		border-radius: 1px;
		padding: 1rem;
		width: 100%;
		height: auto;
	}

	.title-ressources {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}

	.description {
	}
	.content {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
		height: 100%;
		overflow: auto;
	}
	.top-button {
		background: white;
		width: 100%;
		/*display: flex;*/
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

	.content a {
		cursor: pointer;
		text-decoration: none;
		padding: 8px 16px;
	}
</style>
