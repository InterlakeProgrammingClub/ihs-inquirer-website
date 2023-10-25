<script>
	export let data;

	const years = Object.keys(data.posts);
</script>

<h1>Past Issues</h1>

{#each years as year}
	<a class="pretty-link" href={'/issues/' + year}>{year}</a>
{/each}
