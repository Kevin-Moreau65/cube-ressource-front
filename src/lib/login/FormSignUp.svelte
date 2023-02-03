<script lang="ts">
	import Button from '$lib/Button.svelte';
	let isPasswordGood = false;
	let isPasswordConfirm = true;
	let formData = {
		email: '',
		firstName: '',
		lastName: '',
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
		console.log(isPasswordGood);
	}
</script>

<form action="/" method="post">
	<label for="email">Email</label>
	<input type="text" name="email" bind:value={formData.email} />
	<label for="firstName">Prénom</label>
	<input type="text" name="firstName" bind:value={formData.firstName} />
	<label for="lastName">Nom</label>
	<input type="text" name="lastName" bind:value={formData.lastName} />
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

<style>
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
