<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/Button.svelte';
	import { deleteRessource, modifyRessource } from '$lib/models/ressources';
	import { storeTitle, user } from '$lib/store';
	import convertDate from '$lib/utils/convert-date';
	import { storeToast } from 'sveltle-component-notification';
	import type { PageData } from './$types';
	import { invalidateAll } from '$app/navigation';
	storeTitle.set('Ressource');
	export let data: PageData;
	const { ressource } = data;
	const deleteRes = async () => {
		const res = await deleteRessource($page.params.id, fetch, $user.token);
		if ((res as any).statusCode === 204) {
			storeToast.push({
				message: 'Ressource suspendu avec succès',
				type: 'confirmation',
				timeout: 5000
			});
			await invalidateAll();
		} else {
			storeToast.push({
				message: (res as any).error || 'Une erreur est survenue',
				type: 'error',
				timeout: 5000
			});
		}
	};
	let title: string = data.ressource.title;
	let description: string = data.ressource.description;
	let modifyMode = false;
	const modifyRes = async () => {
		const res = await modifyRessource($page.params.id, { title, description }, fetch, $user.token);
		if (res.statusCode === 200) {
			storeToast.push({
				message: 'Ressource modifié avec succès',
				type: 'confirmation',
				timeout: 5000
			});
			await invalidateAll();
		} else {
			storeToast.push({
				message: res.error || 'Une erreur est survenue',
				type: 'error',
				timeout: 5000
			});
		}
	};
</script>

<div class="main">
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div class="content" tabindex="0">
		{#if modifyMode}
			<input class="title" bind:value={title} />
		{:else}
			<h1 class="title">{ressource.title}</h1>
		{/if}
		<div class="bloc">
			<div class="user-date">
				<p>{ressource.user.username}</p>
				<p>{convertDate(ressource.creationDate)}</p>
			</div>
			<div class="description">
				{#if modifyMode}
					<textarea bind:value={description} />
				{:else}
					<p>
						{ressource.description}
					</p>
				{/if}
			</div>
		</div>
		<div class="actions">
			{#if modifyMode}
				<Button title="Annuler" action={() => (modifyMode = false)} />
			{/if}
			<Button title="Editer" action={() => (modifyMode ? modifyRes() : (modifyMode = true))} />
			{#if data.ressource.isDeleted}
				<Button title="Restaurer" action={deleteRes} />
			{:else}
				<Button title="Suspendre" action={deleteRes} />
			{/if}
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
	.user-date {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
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
