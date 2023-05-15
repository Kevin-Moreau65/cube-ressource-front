<script lang="ts">
	import { goto } from '$app/navigation';
	import { createUser } from '$lib/models/account';
	import { Role, user } from '$lib/store';
	import { storeToast } from 'sveltle-component-notification';
	let data = {
		firstName: '',
		lastName: '',
		email: '',
		username: '',
		password: '',
		role: Role.User
	};
	const handleSubmit = async () => {
		const res = await createUser($user.token, data);
		if (res.statusCode === 201) {
			storeToast.push({
				message: 'Utilisateur créé avec succès !',
				timeout: 5000,
				type: 'confirmation'
			});
			await goto('/admin/users');
		} else {
			storeToast.push({
				message: res.error || 'Une erreur est survenue',
				timeout: 5000,
				type: 'error'
			});
		}
	};
</script>

<h1>Ajouter un utilisateur</h1>

<form action="" method="post" on:submit|preventDefault={handleSubmit}>
	<label for="lastname">
		Nom
		<input type="text" name="lastname" bind:value={data.lastName} />
	</label>
	<label for="firstname">
		Prénom
		<input type="text" name="firstname" bind:value={data.firstName} />
	</label>
	<label for="email">
		email
		<input type="email" name="mail" bind:value={data.email} />
	</label>
	<label for="username">
		Pseudo
		<input type="text" name="username" bind:value={data.username} />
	</label>
	<label for="password">
		Mot de passe
		<input type="password" name="password" bind:value={data.password} />
	</label>
	<label for="role">
		Role
		<select name="role" bind:value={data.role}>
			<option value={Role.User}>Utilisateur</option>
			<option value={Role.Moderator}>Modérateur</option>
			<option value={Role.Administrator}>Administrateur</option>
			<option value={Role.SuperAdministrator}>Super Administrateur</option>
		</select></label
	>
	<button type="submit">Créer</button>
</form>
