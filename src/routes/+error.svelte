<script>
	import { page } from '$app/stores';
	import Button from '$lib/Button.svelte';
</script>

{#if $page.status === 404}
	<div class="error">
		<img src="404.svg" alt="error" />
	</div>
	<br />
	<h2>Il n'y a rien ici...</h2>
	<br />
	<h3>...peut-être que la page que vous cherchez est introuvable ou n'a jamais existé.</h3>
{:else}
	<h1>Oups... Il y a eu un problème.</h1>
	<h2>Désolé pour la gêne occasionnée, nous y travaillons dessus.</h2>
{/if}

<section>
	<a href="/">
		<div class="button">
			<Button title="Revenir à l'accueil" link="/" buttonType="button" />
		</div>
	</a>
</section>

<style>
	.error {
		margin-bottom: 0%;
		width: 100%;
		height: 200px;
	}

	.error img {
		width: 100%;
		height: 100%;
		margin-bottom: 0%;
	}
	section {
		text-align: center;
	}
	h1 {
		text-align: center;
	}
	h2 {
		text-align: center;
		margin-bottom: 5%;
	}
	h3 {
		text-align: center;
		margin-top: 0%;
		margin-bottom: 10%;
	}
</style>
