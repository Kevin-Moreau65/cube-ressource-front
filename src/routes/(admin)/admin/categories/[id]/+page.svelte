<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/Button.svelte';
	import { suspendUser } from '$lib/models/account';
	import { user } from '$lib/store';
	import { storeToast } from 'sveltle-component-notification';
	import type { PageData } from './$types';
	import { goto, invalidateAll } from '$app/navigation';
	import { deleteCategorie, modifyCategorie } from '$lib/models/ressources';

	export let data: PageData;
	let categorie = { ...data };
	let editMode = false;
	const deleteCategorieRes = async () => {
		try {
			const res = await deleteCategorie($page.params.id, $user.token);
			storeToast.push({
				type: 'confirmation',
				message: 'Catégorie supprimé',
				timeout: 5000
			});
			await goto('/admin/categories');
		} catch (e: any) {
			storeToast.push({
				type: 'error',
				message: e.message || 'Une erreur est survenue',
				timeout: 5000
			});
		}
	};
	const editCategorie = async () => {
		try {
			const res = await modifyCategorie($page.params.id, $user.token, categorie);
			storeToast.push({
				type: 'confirmation',
				message: 'Catégorie modifié',
				timeout: 5000
			});
			editMode = false;
			await invalidateAll();
		} catch (e: any) {
			storeToast.push({
				type: 'error',
				message: e.message || 'Une erreur est survenue',
				timeout: 5000
			});
		}
	};
	const reset = () => {
		editMode = false;
		categorie = { ...data };
	};
</script>

<div class="main">
	<label>Nom : <input bind:value={categorie.name} disabled={!editMode} /></label>
	<div class="actions">
		{#if editMode}
			<Button title="Modifier" action={editCategorie} />
			<Button title="Annuler" action={reset} />
		{:else}
			<Button title="Editer" action={() => (editMode = true)} />
			<Button title="Supprimer" action={deleteCategorieRes} />
		{/if}
	</div>
</div>
