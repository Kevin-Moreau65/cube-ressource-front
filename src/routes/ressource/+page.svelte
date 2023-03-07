<script lang="ts">
	import Button from '$lib/Button.svelte';
	import { user } from '$lib/store';
	import convertDate from '$lib/utils/convert-date';
	import type { PageData } from './$types';

	export let result: PageData;
</script>

<div class="main">
	<div class="top-button">
		<a href="/ressources">
			<Button title="Retour Menu" link="/" buttonType="button" style="height: 1.3rem;" />
		</a>
	</div>
	<div class="content">
		<h1 class="title">{ressource.title}</h1>
		<div class="bloc">
			<div class="user-date">
				<p>{ressource.userId}</p>
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
				<textarea placeholder="Veuillez vous connecter pour commenter !" disabled />
			{/if}
		</div>
		<div class="bloc">
			<div class="title-commentaire">
				<p>Auteur</p>
				<p>26/05/2002</p>
			</div>
			<div class="description-commentaire">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec eleifend nisl, eu
					feugiat elit. In hac habitasse.
				</p>
			</div>
		</div>
		<div class="bloc">
			<div class="title-commentaire">
				<p>Auteur</p>
				<p>26/05/2002</p>
			</div>
			<div class="description-commentaire">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec eleifend nisl, eu
					feugiat elit. In hac habitasse.
				</p>
			</div>
		</div>
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
		background-color: var(--secondary-color);
		border-radius: 5px;
		color: white;
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
