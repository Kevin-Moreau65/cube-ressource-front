<script lang="ts">
	import Button from '$lib/Button.svelte';
	import { account } from '$lib/store';
	account.update((acc) => {
		acc.id = null;
		return acc;
	});
</script>

<div class="main">
	<h1>Vous vous etes déconnecter avec succès !</h1>
	<Button title="Retourner a l'accueil" link="/" buttonType="link" />
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
</style>
