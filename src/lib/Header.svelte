<div class="main">
	<img src="/Re.svg" alt="" srcset="" />

	<div class="search">
		<input type="text" placeholder="Rechercher une ressource" />
	</div>
</div>

<style>
	.main {
		background-color: var(--primary-color);
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: start;
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
		color: white;
	}
	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: var(--accent-color);
		opacity: 1; /* Firefox */
	}

	img {
		height: 75px;
		width: 75px;
		position: relative;
		left: 0;
	}
</style>
