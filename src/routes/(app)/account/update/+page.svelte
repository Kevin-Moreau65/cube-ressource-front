<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Loading from '$lib/Loading.svelte';
	import { user } from '$lib/store';

	let isLoading = false;
	let formData = {
		firstName: $user.firstName,
		lastName: $user.lastName,
		username: $user.username
	};
	const handleSubmit = () => {
		isLoading = true;
	};
</script>

{#if isLoading}
	<Loading />
{/if}
<form on:submit|preventDefault={handleSubmit}>
	<label for="firstName">Prénom</label>
	<input type="text" name="firstName" bind:value={formData.firstName} />
	<label for="lastName">Nom</label>
	<input type="text" name="lastName" bind:value={formData.lastName} />
	<label for="username">Pseudo</label>
	<input type="text" name="username" bind:value={formData.username} />
	<Button buttonType="submit" title="Modifier son compte" />
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
