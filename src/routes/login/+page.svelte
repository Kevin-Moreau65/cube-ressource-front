<script lang="ts">
	import FormLogin from '$lib/login/FormLogin.svelte';
	import FormSignUp from '$lib/login/FormSignUp.svelte';

	let toLogin = true;
	const switchForm = () => {
		toLogin = !toLogin;
	};
</script>

<div class="main">
	<h1>{toLogin ? 'Se connecter' : 'Créer un compte'}</h1>
	{#if toLogin}
		<FormLogin />
	{:else}
		<FormSignUp />
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
	}
	.switch {
		color: var(--secondary-color);
		text-decoration: underline;
	}
</style>
