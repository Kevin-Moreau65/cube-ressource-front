<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Loading from '$lib/Loading.svelte';
	import { signUp } from '$lib/models/account';
	import { storeToast } from 'sveltle-component-notification';
	export let toLogin: boolean;
	let isLoading = false;
	let isPasswordGood = false;
	let isPasswordConfirm = true;
	let formData = {
		email: '',
		firstName: '',
		lastName: '',
		username: '',
		password: '',
		confirmPassword: ''
	};
	const checkPassword = (pass: string) => {
		const reg = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
		return reg.test(pass);
	};
	$: {
		isPasswordConfirm = formData.password === formData.confirmPassword;
	}
	$: {
		isPasswordGood = checkPassword(formData.password);
	}
	const handleSubmit = async () => {
		try {
			isLoading = true;
			const res = await signUp(
				formData.email,
				formData.password,
				formData.firstName,
				formData.lastName,
				formData.username
			);
			isLoading = false;
			if (res.statusCode === 200) {
				storeToast.push({
					message: 'Compte créé avec succès !',
					type: 'confirmation',
					timeout: 5000
				});
				toLogin = true;
			} else {
				storeToast.push({
					message: res.error || 'Une erreur est survenue, veuillez réessayer',
					type: 'error',
					timeout: 5000
				});
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
	<input type="text" name="email" bind:value={formData.email} />
	<label for="firstName">Prénom</label>
	<input type="text" name="firstName" bind:value={formData.firstName} />
	<label for="lastName">Nom</label>
	<input type="text" name="lastName" bind:value={formData.lastName} />
	<label for="username">Pseudo</label>
	<input type="text" name="username" bind:value={formData.username} />
	<label for="password">Mot de passe</label>
	<input
		type="password"
		name="password"
		bind:value={formData.password}
		class:alert={!isPasswordGood}
	/>
	{#if !isPasswordGood}
		<p class="text-alert">
			Le mot de passe doit contenir un caractère spécial, une minuscule, une majuscule, un chiffre
			et doit avoir 8 caractères
		</p>
	{/if}
	<label for="password">Confirmer le mot de passe</label>
	<input
		type="password"
		name="confirmPassword"
		bind:value={formData.confirmPassword}
		class:alert={!isPasswordConfirm}
	/>
	{#if !isPasswordConfirm}
		<p class="text-alert">Les deux mot de passe doivent correspondre !</p>
	{/if}
	<Button buttonType="submit" title="Créer un compte" />
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 5px;
	}
	.text-alert {
		color: red;
		text-align: center;
	}
	.alert {
		border: solid 1px red;
	}
</style>
