<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import Button from '$lib/Button.svelte';
	import { createRessource, getCategories, type Categorie } from '$lib/models/ressources';
	import { storeTitle, user } from '$lib/store';
	import { storeToast } from 'sveltle-component-notification';
	import { goto } from '$app/navigation';
	import Loading from '$lib/Loading.svelte';
	import type { PageData } from './$types';
	storeTitle.set('Créer une Ressource');
	export let data: PageData;
	let isLoading = false;
	let title = '';
	let description = '';
	let categorieId: number;
	const addResource = async () => {
		try {
			isLoading = true;
			const res = await createRessource(fetch, $user.token, title, description, categorieId);
			isLoading = false;
			storeToast.push({
				type: 'confirmation',
				message: 'Ressource créée avec succès',
				timeout: 5000
			});
			goto('/ressources');
		} catch (e: any) {
			isLoading = false;
			storeToast.push({
				type: 'error',
				message: e.message || 'Une erreur est survenue',
				timeout: 5000
			});
		}
	};
</script>

{#if isLoading}
	<Loading />
{/if}
<div class="main">
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div class="content" tabindex="0">
		<h1 class="title">Création d'une ressource</h1>
		<div class="bloc">
			<div class="ressource-title">
				<p>Titre :</p>
				<textarea placeholder="Ajouter un titre..." bind:value={title} />
			</div>
			<div class="ressource-description">
				<p>Description :</p>
				<textarea placeholder="Ajouter une description..." bind:value={description} />
			</div>
			<div class="ressource-categorie">
				<p>Catégorie :</p>
				<select bind:value={categorieId}>
					{#each Object.values(data) as categorie}
						<option value={categorie.id}>{categorie.name}</option>
					{/each}
				</select>
			</div>
			<div class="ressource-files">
				<p>Joindre un fichier :</p>
			</div>
			<Button title="Créer la ressource" action={addResource} style="height: auto;" />
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
	h1 {
		font-size: 1.7em;
		text-align: center;
	}
	.title {
		margin-top: 2.5rem;
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

	.ressource-title textarea {
		width: 100%;
		background-color: rgb(233, 233, 233);
		border-radius: 5px;
		color: rgb(0, 0, 0);
	}

	.ressource-description textarea {
		width: 100%;
		background-color: rgb(233, 233, 233);
		border-radius: 5px;
		color: rgb(0, 0, 0);
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
		height: 100%;
		overflow: auto;
		padding-bottom: 10px;
	}

	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: var(--accent-color);
		opacity: 1; /* Firefox */
	}
</style>
