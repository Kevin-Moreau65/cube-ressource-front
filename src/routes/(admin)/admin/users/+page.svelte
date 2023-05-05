<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.users as user}
	<a href={`/admin/users/${user.id}`} data-sveltekit-preload-data="tap">
		<div class="bloc">
			{user.firstName}
			{user.lastName}
			{user.username}
		</div>
	</a>
{/each}

<style>
	.bloc {
		background: white;
		color: black;
		border: 1px solid;
		border-radius: 1px;
		padding: 1rem;
		width: 100%;
		height: 100%;
	}
</style>
