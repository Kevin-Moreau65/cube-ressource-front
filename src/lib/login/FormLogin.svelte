<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/Button.svelte';
	import Loading from '$lib/Loading.svelte';
	import { login } from '$lib/models/account';
	import { account } from '$lib/store';
	import toast from '$lib/toast/store/toast';
	let email = '';
	let password = '';
	let isLoading = false;
	const handleSubmit = async () => {
		try {
			isLoading = true;
			const res = await login(email, password);
			console.log(res);
			isLoading = false;
			if (res.statusCode !== 200) {
				toast.push({
					message: res.message || 'Une erreur est survenue, veuillez réessayer',
					type: 'error',
					timeout: 5000
				});
			} else {
				toast.push({
					message: `Bienvenue ${res.firstName} ${res.lastName} !`,
					type: 'confirmation',
					timeout: 5000
				});
				account.set({
					email: res.email,
					firstName: res.firstName,
					id: res.id,
					lastName: res.lastName,
					username: res.username
				});
				goto('/');
			}
		} catch (e: any) {
			isLoading = false;
			toast.push({
				message: e.message || 'Une erreur est survenue, veuillez réessayer',
				type: 'error',
				timeout: 5000
			});
		}
	};
</script>

{#if isLoading}
	<Loading />
{/if}
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
