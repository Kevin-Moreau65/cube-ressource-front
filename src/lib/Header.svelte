<div class="main">
	<img src="/Re.svg" alt="" srcset="" />

	<div class="search">
		<input type="text" placeholder="Rechercher une ressource" />
	</div>
</div>

<style>
	.main {
		background-color: var(--primary-color);
		height: 50px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: start;
		position: sticky;
		top: 0;
		left: 0;
	}

	.search {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	input {
		all: unset;
		border: solid 1px var(--accent-color);
		background-color: var(--secondary-color);
		border-radius: 5px;
		width: 85%;
		height: 37px;
	}

	img {
		height: 75px;
		width: 75px;
		position: relative;
		left: 0;
	}
</style>
