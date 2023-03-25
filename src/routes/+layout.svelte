<script>
	import { navigating } from '$app/stores';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Loading from '$lib/Loading.svelte';
	import { Toast } from 'sveltle-component-notification';
	import './styles.css';
</script>

<div class="app">
	{#if $navigating}
		<Loading />
	{/if}
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
<Toast round verticalPosition="top" horizontalPosition="middle" width="300px" />

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
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
	}
</style>
