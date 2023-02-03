<script>
	import Button from '$lib/Button.svelte';
</script>

<form action="/" method="post">
	<label for="email">Email</label>
	<input type="text" name="email" />
	<label for="password">Mot de passe</label>
	<input type="password" name="password" />
	<Button buttonType="submit" title="Se connecter" />
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
