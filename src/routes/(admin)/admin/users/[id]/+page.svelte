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
		const res = await suspendUser($user.token, $page.params.id);
		if (res.statusCode === 200) {
			storeToast.push({
				type: 'confirmation',
				message: 'Utilisateur ' + (data.isDeleted ? 'restauré' : 'suspendu'),
				timeout: 5000
			});
			await invalidateAll();
		} else {
			storeToast.push({
				type: 'error',
				message: res.error || 'Une erreur est survenue',
				timeout: 5000
			});
		}
	};
</script>

<h1>{data.firstName}</h1>
<div class="actions">
	<Button title={data.isDeleted ? 'Restaurer' : 'Suspendre'} action={deleteuser} />
</div>
