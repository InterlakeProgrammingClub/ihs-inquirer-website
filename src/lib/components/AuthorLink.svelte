<script>
	export let names;
</script>

{#each names as author, i}
	{#if i > 1 && i < names.length - 1}
		{', '}
	{:else if i > 1 && i === names.length - 1}
		{' & '}
	{/if}
	<a href={`/about/${encodeURIComponent(author.title.replace(/\s+/g, ' ').toLowerCase())}`}
		>{author.title}</a
	>
{/each}

<style lang="scss">
	a {
		text-decoration: none;

		@include underline;
	}
</style>
