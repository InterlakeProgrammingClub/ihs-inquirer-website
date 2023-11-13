<script>
	export let name;
	name = name.includes('&') ? name.split('&').map((name) => name.trim()) : [name];
</script>

{#each name as author, i}
	{#if i > 0}
		{' & '}
	{/if}
	<a href={`/about/${author.replace(' ', '-').toLowerCase()}`}>{author}</a>
{/each}

<style lang="scss">
	a {
		text-decoration: none;

		@include underline;
	}
</style>
