<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import toast from './store/toast';

	import type { notification, theme } from './type';
	let paused = false;
	export let notif: notification;
	let progressValue = 0;
	let interval = setInterval(() => !paused && progressValue++, 10);
	$: if (progressValue >= notif.timeout / 10) {
		toast.pop(notif);
		clearInterval(interval);
	}
	let theme: { [x in theme]: string } = {
		error: 'rgb(231, 76, 60)',
		confirmation: '#2ecc71',
		info: 'rgb(0, 188, 205)',
		alert: '#f9690e'
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="main"
	on:mouseenter={() => (paused = true)}
	on:mouseleave={() => (paused = false)}
	in:fly
	out:fade
	on:click={() => toast.pop(notif)}
	style={`background-color: ${theme[notif.type]}`}
>
	<div class="text">
		<p>{notif.message}</p>
	</div>
	<progress value={progressValue} max={notif.timeout / 10} />
</div>

<style lang="scss">
	.main {
		cursor: pointer;
		z-index: 999;
		display: flex;
		flex-direction: column;
		border-radius: 8px;
		overflow: hidden;
		margin-bottom: 15px;
		transform: scale(1);
		transition: all 0.2s;
		user-select: none;
		&:hover {
			transform: scale(1.05);
		}
		&:active {
			transform: scale(0.95);
		}
	}
	p {
		font-size: larger;
		text-align: center;
		overflow-wrap: break-word;
		padding: 0 10px;
	}
	.text {
		width: 100%;
	}
	progress {
		-webkit-appearance: none;
		appearance: none;
		width: 100%;
		height: 8px;
	}
	progress::-webkit-progress-bar {
		background-color: transparent;
	}
	::-webkit-progress-value {
		background-color: #2766a2;
	}
</style>
