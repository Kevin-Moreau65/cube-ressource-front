<script lang="ts">
	import Button from '$lib/Button.svelte';
	import type { User } from '$lib/models/account';
	import { Role, user } from '$lib/store';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="actions">
	<a href="/admin/categories/add">
		<Button title="Ajouter une catégorie" />
	</a>
</div>
<div class="main">
	{#each data.categories as catégorie}
		<a href={`/admin/categories/${catégorie.id}`} data-sveltekit-preload-data="tap">
			<div class="bloc">
				{catégorie.name}
			</div>
		</a>
	{/each}
</div>

<style>
	.actions {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	a {
		all: unset;
		cursor: pointer;
	}
	.bloc {
		background: white;
		color: black;
		border: 1px solid;
		border-radius: 1px;
		padding: 10px;
	}
	.bloc.deleted {
		border-color: red;
	}
	.bloc:hover {
		background-color: grey;
	}
	.main {
		overflow: auto;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 10px;
	}
</style>
