<script lang="ts">
	import { notificationStore } from './store/toast';
	import ToastItem from './toastItem.svelte';
</script>

<div class="main">
	{#each $notificationStore as notif (notif.id)}
		<ToastItem {notif} />
	{/each}
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
	* {
		font-family: 'Roboto', sans-serif;
	}
	.main {
		position: fixed;
		top: 50px;
		width: 90%;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
