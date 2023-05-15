<script lang="ts">
	import type { User } from '$lib/models/account';
	import type { PageData } from './$types';

	export let data: PageData;
	const temp = data as unknown as {
		users: User[];
	};
</script>

<div class="main">
	{#each temp.users as user}
		<a href={`/admin/users/${user.id}`} data-sveltekit-preload-data="tap">
			<div class="bloc" class:deleted={user.isDeleted}>
				{user.firstName}
				{user.lastName}
				{user.username}
			</div>
		</a>
	{/each}
</div>

<style>
	a {
		all: unset;
		cursor: pointer;
	}
	.bloc {
		background: white;
		color: black;
		border: 1px solid;
		border-radius: 1px;
		padding: 10px;
	}
	.bloc.deleted {
		border-color: red;
	}
	.bloc:hover {
		background-color: grey;
	}
	.main {
		overflow: auto;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 10px;
	}
</style>
