<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/Button.svelte';
	import {
		cancelFavRessource,
		cancelVoteRessource,
		downVoteRessource,
		favRessource,
		upVoteRessource
	} from '$lib/models/ressources';
	import { Role, storeTitle, user } from '$lib/store';
	import convertDate from '$lib/utils/convert-date';
	import { storeToast } from 'sveltle-component-notification';
	import type { PageData } from './$types';
	import { postComment, type Comment, deleteComment } from '$lib/models/comment';
	import Loading from '$lib/Loading.svelte';
	storeTitle.set('Ressource');
	let commentValue = '';
	let isLoading = false;
	export let data: PageData;
	const vote = async (isUpVote: boolean) => {
		try {
			const res = isUpVote
				? await upVoteRessource($page.params.id, fetch, $user.token)
				: await downVoteRessource($page.params.id, fetch, $user.token);
			storeToast.push({
				message: 'Ressource voté avec succès !',
				type: 'confirmation',
				timeout: 5000
			});
			invalidateAll();
		} catch (e: any) {
			storeToast.push({
				message: e.message || 'Un erreur est survenue, veuillez réessayer plus tard.',
				type: 'error',
				timeout: 5000
			});
		}
	};
	const cancelVote = async () => {
		try {
			const res = await cancelVoteRessource($page.params.id, fetch, $user.token);
			storeToast.push({
				message: 'Vote annulé avec succès !',
				type: 'confirmation',
				timeout: 5000
			});
			invalidateAll();
		} catch (e: any) {
			storeToast.push({
				message: e.message || 'Un erreur est survenue, veuillez réessayer plus tard.',
				type: 'error',
				timeout: 5000
			});
		}
	};
	const favorite = async () => {
		try {
			await favRessource($page.params.id, fetch, $user.token);
			storeToast.push({
				message: 'Ressource ajoutée en favorie avec succès !',
				type: 'confirmation',
				timeout: 5000
			});
			invalidateAll();
		} catch (e: any) {
			storeToast.push({
				message: e.message || 'Un erreur est survenue, veuillez réessayer plus tard.',
				type: 'error',
				timeout: 5000
			});
		}
	};
	const cancelFavorite = async () => {
		try {
			await cancelFavRessource($page.params.id, fetch, $user.token);
			storeToast.push({
				message: 'Ressource supprimé de favorie avec succès !',
				type: 'confirmation',
				timeout: 5000
			});
			invalidateAll();
		} catch (e: any) {
			storeToast.push({
				message: e.message || 'Un erreur est survenue, veuillez réessayer plus tard.',
				type: 'error',
				timeout: 5000
			});
		}
	};
	const addComment = async () => {
		try {
			isLoading = true;
			await postComment($user.token, {
				content: commentValue,
				resourceId: parseInt($page.params.id)
			});
			isLoading = false;
			storeToast.push({
				type: 'confirmation',
				message: 'Commentaire poster avec succès',
				timeout: 5000
			});
			invalidateAll();
		} catch (e: any) {
			storeToast.push({
				message: e.message || 'Un erreur est survenue, veuillez réessayer plus tard.',
				type: 'error',
				timeout: 5000
			});
		}
	};
	const deleteCom = async (id: number) => {
		try {
			isLoading = true;
			await deleteComment($user.token, id.toString());
			isLoading = false;
			storeToast.push({
				type: 'confirmation',
				message: 'Commentaire supprimé avec succès',
				timeout: 5000
			});
			await invalidateAll();
		} catch (e: any) {
			isLoading = false;
			storeToast.push({
				message: e.message || 'Un erreur est survenue, veuillez réessayer plus tard.',
				type: 'error',
				timeout: 5000
			});
		}
	};
</script>

{#if isLoading}
	<Loading />
{/if}
<div class="main">
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div class="content" tabindex="0">
		<h1 class="title">{data.data.title}</h1>
		<div class="bloc">
			<div class="user-date">
				<p>{data.data.user.username}</p>
				<p>{convertDate(data.data.creationDate)}</p>
			</div>
			<div class="description">
				<p>
					{data.data.description}
				</p>
			</div>
			<div>
				{data.data.upVote - data.data.downVote}
			</div>
			<div class="actions" style={$user.id === 0 ? 'display: none' : ''}>
				<div class="vote">
					<div
						class="svg-wrapper"
						on:click={() => (data.data.voted?.type === 'upvote' ? cancelVote() : vote(true))}
						on:keypress={() => vote(true)}
						class:upvoted={data.data.voted?.type === 'upvote'}
					>
						<svg
							fill="#000000"
							width="800px"
							height="800px"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"
							/></svg
						>
					</div>
					<div
						class="svg-wrapper"
						on:click={() => (data.data.voted?.type === 'downvote' ? cancelVote() : vote(false))}
						on:keypress={() => vote(false)}
						class:downvoted={data.data.voted?.type === 'downvote'}
					>
						<svg
							fill="#000000"
							width="800px"
							height="800px"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"
							/></svg
						>
					</div>
				</div>
				<div class="favorite">
					<div
						class="svg-wrapper"
						on:click={data.data.favoris !== null ? cancelFavorite : favorite}
						on:keypress={() => favorite}
						class:isFav={data.data.favoris !== null}
					>
						<svg
							fill="#000000"
							height="800px"
							width="800px"
							version="1.1"
							id="Layer_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							viewBox="0 0 482.207 482.207"
							xml:space="preserve"
						>
							<polygon
								points="482.207,186.973 322.508,153.269 241.104,11.803 159.699,153.269 0,186.973 109.388,308.108 92.094,470.404 
	241.104,403.803 390.113,470.404 372.818,308.108 "
							/>
						</svg>
					</div>
				</div>
			</div>
			<!-- <div class="fichier">
				<p>Fichier Joint :</p>
				<img src="/paperclip.svg" alt="logo paperclip" />
			</div> -->
		</div>
		<h1>Commentaires</h1>
		<div class="comment">
			{#if $user.id !== 0}
				<textarea placeholder="Ajouter un commentaire..." bind:value={commentValue} />
				<Button title="Commenter" action={addComment} />
			{:else}
				<textarea
					placeholder="Veuillez vous connecter pour commenter !"
					disabled
					aria-hidden="true"
				/>
			{/if}
		</div>
		{#if data.data.comments.length > 0}
			{#each data.data.comments as comment}
				<div
					class="bloc"
					class:self={comment.userId === $user.id}
					class:moderator={comment.user.role === Role.Moderator}
				>
					<div class="title-commentaire">
						<p>{comment.user.username}</p>
						<p>{convertDate(comment.datePost)}</p>
					</div>
					<div class="description-commentaire">
						<p>
							{comment.content}
						</p>
					</div>
					{#if $user.role === Role.Moderator}
						<div class="actions">
							<Button title="Supprimer" action={() => deleteCom(comment.id)} />
						</div>
					{/if}
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
	.actions {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.vote {
		width: 200px;
		height: 35px;
		display: flex;
		flex-direction: row;
	}
	.bloc.moderator {
		border: 2px solid var(--primary-color);
	}
	.favorite {
		height: 35px;
	}
	.favorite:hover .svg-wrapper svg {
		cursor: pointer;
		fill: gold;
	}
	.svg-wrapper {
		height: 100%;
		aspect-ratio: 1/1;
	}
	.svg-wrapper svg {
		height: 100%;
		width: 100%;
		aspect-ratio: 1/1;
	}
	.vote .svg-wrapper:nth-child(1):hover svg {
		fill: green;
		cursor: pointer;
	}
	.vote .svg-wrapper:nth-child(2):hover svg {
		fill: red;
		cursor: pointer;
	}
	.vote .svg-wrapper:nth-child(2) svg {
		transform: rotate(180deg);
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
	.bloc.self {
		border: 4px solid var(--accent-color);
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
		padding-bottom: 10px;
	}

	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: var(--accent-color);
		opacity: 1; /* Firefox */
	}
	.upvoted svg {
		fill: green;
	}
	.downvoted svg {
		fill: red;
	}

	.isFav svg {
		fill: gold;
	}
</style>
