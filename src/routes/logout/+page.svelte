<script lang="ts">
	import Button from '$lib/Button.svelte';
	import { user } from '$lib/store';
	import { onMount } from 'svelte';
	onMount(() => {
		user.set({
			id: 0,
			firstName: '',
			lastName: '',
			username: '',
			email: '',
			token: ''
		});
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
