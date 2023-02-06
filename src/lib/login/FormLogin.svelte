<script>
	import Button from '$lib/Button.svelte';
	import { login } from '$lib/models/account';
	let email = '';
	let password = '';
	const handleSubmit = async () => {
		await login(email, password);
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<label for="email">Email</label>
	<input type="text" name="email" bind:value={email} />
	<label for="password">Mot de passe</label>
	<input type="password" name="password" bind:value={password} />
	<Button buttonType="submit" title="Se connecter" />
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 5px;
	}
</style>
