<script lang="ts">
	type buttonType = 'button' | 'submit' | 'link';
	export let cssClass = '';
	export let style = '';
	export let title: string;
	export let color = 'var(--accent-color)';
	export let buttonType: buttonType = 'button';
	export let action: () => unknown = () => '';
	export let link = '/';
</script>

{#if buttonType === 'button'}
	<button on:click={action} style={`background-color: ${color}; ${style}`} class={cssClass}>
		{title}
	</button>
{:else if buttonType === 'link'}
	<a href={link}>
		<button style={`background-color: ${color}; ${style}`} class={cssClass}>
			{title}
		</button>
	</a>
{:else}
	<button type="submit" style={`background-color: ${color}; ${style}`} class={cssClass}>
		{title}
	</button>
{/if}

<style>
	a {
		all: unset;
	}
	button {
		all: unset;
		cursor: pointer;
		background-color: var(--accent-color);
		padding: 10px;
		border-radius: 5px;
		user-select: none;
		transition: all 0.2s;
	}
	button:active {
		transform: scale(0.9);
	}
</style>
