<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/Button.svelte';
	import { suspendUser } from '$lib/models/account';
	import { user } from '$lib/store';
	import { storeToast } from 'sveltle-component-notification';
	import type { PageData } from './$types';
	import { invalidateAll } from '$app/navigation';

	export let data: PageData;
	const deleteUser = async () => {
		try {
			const res = await suspendUser($user.token, $page.params.id);
			storeToast.push({
				type: 'confirmation',
				message: 'Utilisateur ' + (data.isDeleted ? 'restauré' : 'suspendu'),
				timeout: 5000
			});
			await invalidateAll();
		} catch (e: any) {
			storeToast.push({
				type: 'error',
				message: e.message || 'Une erreur est survenue',
				timeout: 5000
			});
		}
	};
</script>

<div class="main">
	<p>Prénom : {data.firstName}</p>
	<p>Nom : {data.lastName}</p>
	<p>Pseudo : {data.username}</p>
	<p>Téléphone : {data.phoneNumber}</p>
	<div class="actions">
		{#if !data.isDeleted}
			<Button title="Suspendre" action={deleteUser} />
		{:else}
			<Button title="Restaurer" action={deleteUser} />
		{/if}
	</div>
</div>
