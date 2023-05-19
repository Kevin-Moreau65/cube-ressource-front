<script lang="ts">
	import { goto } from '$app/navigation';
	import { createUser } from '$lib/models/account';
	import { createCategorie } from '$lib/models/ressources';
	import { Role, user } from '$lib/store';
	import { storeToast } from 'sveltle-component-notification';
	let data = {
		name: ''
	};
	const handleSubmit = async () => {
		try {
			const res = await createCategorie($user.token, data);
			storeToast.push({
				message: 'Catégorie créé avec succès !',
				timeout: 5000,
				type: 'confirmation'
			});
			await goto('/admin/categories');
		} catch (e: any) {
			storeToast.push({
				message: e.message || 'Une erreur est survenue',
				timeout: 5000,
				type: 'error'
			});
		}
	};
</script>

<h1>Ajouter une catégorie</h1>

<form action="" method="post" on:submit|preventDefault={handleSubmit}>
	<label for="name">
		Nom
		<input type="text" name="name" bind:value={data.name} />
	</label>
	<button type="submit">Créer</button>
</form>
