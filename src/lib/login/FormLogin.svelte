<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/Button.svelte';
	import Loading from '$lib/Loading.svelte';
	import { login } from '$lib/models/account';
	import { Role, user } from '$lib/store';
	import { storeToast } from 'sveltle-component-notification';
	let email = '';
	let password = '';
	let isLoading = false;
	const handleSubmit = async () => {
		try {
			isLoading = true;
			const res = await login(email, password);
			isLoading = false;
			if (res.statusCode !== 200) {
				console.log(res);
				storeToast.push({
					message: 'Une erreur est survenue, veuillez réessayer',
					type: 'error',
					timeout: 5000
				});
			} else {
				storeToast.push({
					message: `Bienvenue ${res.firstName} ${res.lastName} !`,
					type: 'confirmation',
					timeout: 5000
				});
				user.set({
					...res
				});
				if (res.role === Role.Administrator || res.role === Role.SuperAdministrator) goto('/admin');
				else goto('/');
			}
		} catch (e: any) {
			isLoading = false;
			storeToast.push({
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
