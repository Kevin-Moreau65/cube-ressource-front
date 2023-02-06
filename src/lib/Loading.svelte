<script>
	import { fade } from 'svelte/transition';
</script>

<div class="loading" transition:fade>
	<img src="/spinner.svg" alt="" srcset="" />
</div>

<style lang="scss">
	.loading {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(255, 255, 255, 0.41);
		z-index: 1000;
		backdrop-filter: blur(5px);
		& img {
			animation: spinner 1500ms linear 0s infinite;
		}
	}
	@keyframes spinner {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
