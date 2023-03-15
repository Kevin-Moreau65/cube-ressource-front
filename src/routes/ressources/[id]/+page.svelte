<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/Button.svelte';
	import { user } from '$lib/store';
	import convertDate from '$lib/utils/convert-date';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import type { Comment } from '$lib/models/comment';

	export let data: PageData;
	const { ressource } = data;
</script>

<div class="main">
	<div class="top-button">
		<a href="/ressources">
			<Button
				title="Retour Menu"
				action={() => history.back()}
				buttonType="button"
				style="height: 1.3rem;"
			/>
		</a>
	</div>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div class="content" tabindex="0">
		<h1 class="title">{ressource.title}</h1>
		<div class="bloc">
			<div class="user-date">
				<p>Nom user</p>
				<p>{convertDate(ressource.creationDate)}</p>
			</div>
			<div class="description">
				<p>
					{ressource.description}
				</p>
			</div>
			<div class="fichier">
				<p>Fichier Joint :</p>
				<img src="/paperclip.svg" alt="logo paperclip" />
			</div>
		</div>
		<h1>Commentaires</h1>
		<div class="comment">
			{#if $user.id !== 0}
				<textarea placeholder="Ajouter un commentaire..." />
				<Button title="Commenter" />
			{:else}
				<textarea
					placeholder="Veuillez vous connecter pour commenter !"
					disabled
					aria-hidden="true"
				/>
			{/if}
		</div>
		{#if data.ressource.comments.length > 0}
			{#each data.ressource.comments as comment}
				<div class="bloc">
					<div class="title-commentaire">
						<p>{comment.user.username}</p>
						<p>{convertDate(comment.datePost)}</p>
					</div>
					<div class="description-commentaire">
						<p>
							{comment.content}
						</p>
					</div>
				</div>
			{/each}
		{:else}
			<p>Pas de commentaires !</p>
		{/if}
	</div>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		width: 100%;
		min-height: 100%;
		gap: 15px;
		padding: 5px 10px 0px 10px;
	}
	.top-button {
		position: fixed;
	}

	h1 {
		font-size: 1.7em;
		text-align: center;
	}
	.title {
		margin-top: 2.5rem;
	}

	.bloc {
		background: white;
		color: black;
		border: 1px solid;
		border-radius: 1px;
		padding: 1rem;
		width: 100%;
		height: auto;
	}
	.comment {
		display: flex;
		gap: 10px;
	}
	.comment textarea {
		width: 100%;
		background-color: rgb(233, 233, 233);
		border-radius: 5px;
		color: rgb(0, 0, 0);
	}
	.user-date {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}

	.title-commentaire {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
		height: 100%;
		overflow: auto;
	}

	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: var(--accent-color);
		opacity: 1; /* Firefox */
	}

	.fichier img {
		width: 40px;
		height: 40px;
	}
</style>
