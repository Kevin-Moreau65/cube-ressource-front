<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Loading from '$lib/Loading.svelte';
	import { account } from '$lib/store';

	let isLoading = false;
	let formData = {
		firstName: $account.firstname,
		lastName: $account.lastname,
		nickname: $account.nickname
	};
	const handleSubmit = () => {};
</script>

{#if isLoading}
	<Loading />
{/if}
<form on:submit|preventDefault={handleSubmit}>
	<label for="firstName">Prénom</label>
	<input type="text" name="firstName" bind:value={formData.firstName} />
	<label for="lastName">Nom</label>
	<input type="text" name="lastName" bind:value={formData.lastName} />
	<label for="nickname">Pseudo</label>
	<input type="text" name="nickname" bind:value={formData.nickname} />
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
