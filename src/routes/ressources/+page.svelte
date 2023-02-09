<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/Button.svelte';
</script>

<div class="main">
	<div class="top-button">
		<input type="text" placeholder="Rechercher une ressource" />
		<a href="/">
			<Button title="Filtrer" link="/" buttonType="button" style="height: auto;" />
		</a>
	</div>
	<div class="content">
		<div class="bloc">
			<div class="title-ressources">
				<p>Titre Ressource n°1</p>
				<p>26/05/2002</p>
			</div>
			<div class="description">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec eleifend nisl, eu
					feugiat elit. In hac habitasse.
				</p>
			</div>
		</div>
		<div class="bloc">
			<div class="title-ressources">
				<p>Titre Ressource n°1</p>
				<p>26/05/2002</p>
			</div>
			<div class="description">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec eleifend nisl, eu
					feugiat elit. In hac habitasse.
				</p>
			</div>
		</div>
		<div class="bloc">
			<div class="title-ressources">
				<p>Titre Ressource n°1</p>
				<p>26/05/2002</p>
			</div>
			<div class="description">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec eleifend nisl, eu
					feugiat elit. In hac habitasse.
				</p>
			</div>
		</div>
		<div class="bloc">
			<div class="title-ressources">
				<p>Titre Ressource n°1</p>
				<p>26/05/2002</p>
			</div>
			<div class="description">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec eleifend nisl, eu
					feugiat elit. In hac habitasse.
				</p>
			</div>
		</div>
		<div class="pagination">
			<a href="#">&laquo;</a>
			<a href="#">1</a>
			<a href="#">2</a>
			<a href="#">3</a>
			<a href="#">4</a>
			<a href="#">5</a>
			<a href="#">6</a>
			<a href="#">&raquo;</a>
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

	.description {
	}
	.content {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
		height: 100%;
		overflow: auto;
	}
	.top-button {
		background: white;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: auto;
	}

	input {
		all: unset;
		border: solid 1px var(--accent-color);
		background-color: var(--secondary-color);
		border-radius: 5px;
		min-width: 203px;
		width: 50%;
		height: 100%;
		color: white;
	}

	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: var(--accent-color);
		opacity: 1; /* Firefox */
	}

	.pagination {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 7px;
		width: 100%;
		padding-bottom: 10px;
	}

	.pagination a {
		color: black;
		padding: 8px 16px;
		text-decoration: none;
		cursor: pointer;
		border: solid 1px black;
	}
	.pagination a:hover {
		background-color: var(--accent-color);
	}
	.pagination a:nth-child(1),
	.pagination a:nth-last-child(1) {
		background-color: var(--secondary-color);
	}
</style>
