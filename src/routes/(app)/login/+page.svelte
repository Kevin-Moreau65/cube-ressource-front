<script lang="ts">
	import FormLogin from '$lib/login/FormLogin.svelte';
	import FormSignUp from '$lib/login/FormSignUp.svelte';
	import { storeTitle } from '$lib/store';

	let toLogin = true;
	const switchForm = () => {
		toLogin = !toLogin;
	};
	$: {
		storeTitle.set(toLogin ? 'Se connecter' : 'Créer un compte');
	}
</script>

<div class="main">
	{#if toLogin}
		<FormLogin />
	{:else}
		<FormSignUp bind:toLogin />
	{/if}
	<p class="switch" on:click={switchForm} on:keypress={switchForm}>
		{toLogin ? 'Pas de compte ? Cliquez ici !' : 'Vous avez déjà un compte ? Cliquez ici !'}
	</p>
</div>

<style>
	.main {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		flex-direction: column;
		overflow: auto;
	}
	.switch {
		color: var(--secondary-color);
		text-decoration: underline;
		cursor: pointer;
	}
</style>
