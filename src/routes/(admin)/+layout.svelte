<script>
	import { navigating } from '$app/stores';
	import Loading from '$lib/Loading.svelte';
	import Header from '$lib/admin/Header.svelte';
	import { Toast } from 'sveltle-component-notification';
	import '../styles.css';
</script>

<div class="main">
	{#if $navigating}
		<Loading />
	{/if}
	<Header />
	<main>
		<slot />
	</main>
</div>
<Toast round verticalPosition="top" horizontalPosition="middle" width="clamp(300px, 75%, 500px)" />

<style>
	.main {
		margin: 0;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 50px 1fr;
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
