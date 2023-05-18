<script>
	import { user } from '$lib/store';
</script>

<div class="main">
	<ul>
		<li><a href="/admin">Tableau de bord</a></li>
		<li><a href="/admin/ressources">Ressources</a></li>
		<li><a href="/admin/users">Comptes</a></li>
		<li><a href="/admin/categories">Catégories</a></li>
		<li><a href="/admin/stats">Statistiques</a></li>
		<li style="float:right"><a class="active" href="/account">{$user.firstName}</a></li>
	</ul>
</div>

<style>
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-color: var(--primary-color);
	}

	li {
		float: left;
		cursor: pointer;
	}

	li a {
		display: block;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}

	li a:hover:not(.active) {
		background-color: var(--secondary-color);
	}

	.active {
		background-color: var(--accent-color);
	}
</style>
