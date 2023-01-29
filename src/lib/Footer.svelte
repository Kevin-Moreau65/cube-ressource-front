<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="main">
	<a href="/">
		<div class="button" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<svg
				id="Layer_1"
				style="enable-background:new 0 0 16 16;"
				version="1.1"
				viewBox="0 0 16 16"
				xml:space="preserve"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				><path
					d="M15.45,7L14,5.551V2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v0.553L9,0.555C8.727,0.297,8.477,0,8,0S7.273,0.297,7,0.555  L0.55,7C0.238,7.325,0,7.562,0,8c0,0.563,0.432,1,1,1h1v6c0,0.55,0.45,1,1,1h3v-5c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v5h3  c0.55,0,1-0.45,1-1V9h1c0.568,0,1-0.437,1-1C16,7.562,15.762,7.325,15.45,7z"
				/></svg
			>
			<p>Accueil</p>
		</div>
	</a>
	<a href="/ressources">
		<div class="button" aria-current={$page.url.pathname === '/ressources' ? 'page' : undefined}>
			<svg
				id="Layer_1"
				style="enable-background:new 0 0 16 16;"
				version="1.1"
				viewBox="0 0 16 16"
				xml:space="preserve"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				><path
					d="M15.45,7L14,5.551V2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v0.553L9,0.555C8.727,0.297,8.477,0,8,0S7.273,0.297,7,0.555  L0.55,7C0.238,7.325,0,7.562,0,8c0,0.563,0.432,1,1,1h1v6c0,0.55,0.45,1,1,1h3v-5c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v5h3  c0.55,0,1-0.45,1-1V9h1c0.568,0,1-0.437,1-1C16,7.562,15.762,7.325,15.45,7z"
				/></svg
			>
			<p>Ressources</p>
		</div>
	</a>
	<a href="/account">
		<div class="button" aria-current={$page.url.pathname === '/account' ? 'page' : undefined}>
			<svg
				id="Layer_1"
				style="enable-background:new 0 0 16 16;"
				version="1.1"
				viewBox="0 0 16 16"
				xml:space="preserve"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				><path
					d="M15.45,7L14,5.551V2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v0.553L9,0.555C8.727,0.297,8.477,0,8,0S7.273,0.297,7,0.555  L0.55,7C0.238,7.325,0,7.562,0,8c0,0.563,0.432,1,1,1h1v6c0,0.55,0.45,1,1,1h3v-5c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v5h3  c0.55,0,1-0.45,1-1V9h1c0.568,0,1-0.437,1-1C16,7.562,15.762,7.325,15.45,7z"
				/></svg
			>
			<p>Compte</p>
		</div>
	</a>
</div>

<style>
	p {
		margin: 0;
	}
	.main {
		background-color: var(--primary-color);
		height: 75px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		position: fixed;
		bottom: 0;
		left: 0;
	}

	.button {
		padding: 10px;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.button svg {
		width: 27px;
		margin-bottom: 10px;
	}
	.button[aria-current='page'] svg {
		fill: white;
	}
	.button[aria-current='page'] p {
		color: white;
	}
</style>
