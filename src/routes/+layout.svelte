<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Toast from '$lib/toast/toast.svelte';
	import './styles.css';
</script>

<Toast />
<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 50px 1fr 75px;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		height: 100%;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
