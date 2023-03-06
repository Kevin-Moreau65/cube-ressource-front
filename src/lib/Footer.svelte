<script lang="ts">
	import { page } from '$app/stores';
	import { user } from '$lib/store';
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
		<div
			class="button"
			aria-current={$page.url.pathname === '/ressources' ? 'page' : undefined}
			data-sveltekit-preload-data
		>
			<svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
				><path
					d="M848 232v672H288V232h560m0-56H288c-30.9 0-56 25.1-56 56v672c0 30.9 25.1 56 56 56h560c30.9 0 56-25.1 56-56V232c0-30.9-25.1-56-56-56z"
				/><path
					d="M736 120v56H288l-56 56v560h-56V120h560m0-56H176c-30.9 0-56 25.1-56 56v672c0 30.9 25.1 56 56 56h112V232h504V120c0-30.9-25.1-56-56-56z"
				/><path
					d="M708.9 428h-280c-15.5 0-28-12.5-28-28s12.5-28 28-28h280c15.5 0 28 12.5 28 28s-12.6 28-28 28zM708.9 596h-280c-15.5 0-28-12.5-28-28s12.5-28 28-28h280c15.5 0 28 12.5 28 28s-12.6 28-28 28zM708.9 764h-280c-15.5 0-28-12.5-28-28s12.5-28 28-28h280c15.5 0 28 12.5 28 28s-12.6 28-28 28z"
				/></svg
			>
			<p>Ressources</p>
		</div>
	</a>
	<a href={$user.id === 0 ? '/login' : `/account`}>
		<div class="button" aria-current={$page.url.pathname.includes('/account') ? 'page' : undefined}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
				><path
					d="M10 9a6 6 0 1 1 6 6 6 6 0 0 1-6-6Zm16 20H6a3 3 0 0 1-3-3 9 9 0 0 1 9-9h8a9 9 0 0 1 9 9 3 3 0 0 1-3 3Z"
				/></svg
			>
			<p>{$user.id === 0 ? 'Se connecter' : `${$user.firstName} ${$user.lastName}`}</p>
		</div>
	</a>
</div>

<style>
	a {
		flex: 1 1 0px;
	}
	p {
		margin: 0;
	}
	.main {
		background-color: var(--primary-color);
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
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
		aspect-ratio: 1/1;
		margin-bottom: 10px;
	}
	.button[aria-current='page'] svg {
		fill: white;
	}
	.button[aria-current='page'] p {
		color: white;
	}
</style>
