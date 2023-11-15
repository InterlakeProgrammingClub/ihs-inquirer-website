<script>
	export let names;

	console.log(names);
</script>

{#each names as author, i}
	{#if i > 0 && i < names.length - 1}
		{', '}
	{:else if i > 0 && i === names.length - 1}
		{' & '}
	{/if}
	<a href={`/about/${encodeURIComponent(author.name.replace(/\s+/g, ' ').toLowerCase())}`}>
		{author.name}
	</a>
{/each}

<style lang="scss">
	a {
		text-decoration: none;

		@include underline;
	}
</style>
