<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/Button.svelte';
	import { login } from '$lib/models/account';
	import toast from '$lib/toast/store/toast';
	let email = '';
	let password = '';
	const handleSubmit = async () => {
		const res = await login(email, password);
		if (res.statusCode === 200) {
			goto('/account');
		} else {
			toast.push({
				message: res.message || 'Une erreur est survenue, veuillez réessayer',
				type: 'error',
				timeout: 5000
			});
		}
	};
</script>

<form action="/" method="post">
	<label for="email">Email</label>
	<input type="text" name="email" />
	<label for="password">Mot de passe</label>
	<input type="password" name="password" />
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
