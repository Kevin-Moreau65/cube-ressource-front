<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/Button.svelte';
	import { suspendUser } from '$lib/models/account';
	import { user } from '$lib/store';
	import { storeToast } from 'sveltle-component-notification';
	import type { PageData } from './$types';
	import { invalidateAll } from '$app/navigation';

	export let data: PageData;
	const deleteuser = async () => {
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

<h1>{data.firstName}</h1>
<div class="actions">
	<Button title={data.isDeleted ? 'Restaurer' : 'Suspendre'} action={deleteuser} />
</div>
