<script lang="ts">
	import { goto } from '$app/navigation';
	import { storeTitle } from './store';
	const gotoHome = async (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			await goto('/');
		}
	};
</script>

<header class="main">
	<img
		src="/back-arrow.svg"
		class="back"
		alt="Bouton de retour"
		on:click={() => history.back()}
		on:keydown={(e) => e.key === 'Enter' && history.back()}
	/>
	<h1>{$storeTitle}</h1>
	<img
		src="/Re.svg"
		class="icon"
		alt="Icône de l'application"
		on:click={async () => await goto('/')}
		on:keydown={(e) => gotoHome(e)}
	/>
</header>

<style>
	.main {
		background-color: var(--primary-color);
		height: 100%;
		width: 100%;
	}
	h1 {
		font-size: 2.2em;
		color: white;
		text-align: center;
		margin: 0;
		user-select: none;
	}
	.icon {
		top: -10px;
		right: -10px;
		position: fixed;
		height: 70px;
		width: 70px;
		cursor: pointer;
	}
	.back {
		transform: rotate(180deg);
		position: fixed;
		top: 0;
		left: 10px;
		height: 50px;
		width: 40px;
		cursor: pointer;
	}
</style>
