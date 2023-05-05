<script lang="ts">
	import Button from '$lib/Button.svelte';
	import { storeTitle, user } from '$lib/store';
	import { page } from '$app/stores';
	storeTitle.set('Compte');
</script>

<div class="main">
	<p>Prénom : {$user.firstName}</p>
	<p>Nom : {$user.lastName}</p>
	<p>Pseudo : {$user.username}</p>
	<h1>Actions :</h1>
	<div class="wrapper">
		<Button
			title="Modifier ces informations"
			link={$page.url.pathname + '/update'}
			buttonType="link"
		/>
		<Button
			title="Consulter ses favoris"
			link={$page.url.pathname + '/favorite'}
			buttonType="link"
		/>
		<Button
			title="Consulter son historique"
			link={$page.url.pathname + '/history'}
			buttonType="link"
		/>
		<Button title="Se déconnecter" link="/logout" buttonType="link" />
	</div>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		height: 100%;
		overflow: auto;
		padding-bottom: 10px;
	}
	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
	}
</style>
