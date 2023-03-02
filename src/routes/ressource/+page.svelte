<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/Button.svelte';
</script>

<div class="main">
	<div class="top-button">
		<a href="/ressources">
			<Button title="Retour Menu" link="/" buttonType="button" style="height: auto;" />
		</a>
	</div>
	<div class="content">
		<div class="bloc">
			<div class="title-ressources">
				<p>Titre Ressource</p>
				<p>26/05/2002</p>
			</div>
			<div class="description">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec eleifend nisl, eu
					feugiat elit. In hac habitasse. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras nec eleifend nisl, eu feugiat elit. In hac habitasse. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Cras nec eleifend nisl, eu feugiat elit. In hac habitasse.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec eleifend nisl, eu
					feugiat elit. In hac habitasse. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras nec eleifend nisl, eu feugiat elit. In hac habitasse.
				</p>
			</div>
			<div class="fichier">
				<p>Fichier Joint :</p>
			</div>
		</div>

		<h1>Commentaires</h1>
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

	h1 {
		font-size: 25px;
		text-align: center;
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

	.title-ressources {
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

	.top-button {
		background: white;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: auto;
	}
</style>
