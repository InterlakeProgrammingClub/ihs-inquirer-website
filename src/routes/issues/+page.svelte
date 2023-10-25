<script>
	export let data;

	const years = Object.keys(data.posts);
</script>

<h1>Past Issues</h1>

{#each years as year}
	<a href={'/issues/' + year}>{year}</a>
{/each}

<!-- {#each data.posts as post}
	<li>
		<a href={'/issues/' + post.slug}>{post.title}</a>
	</li>
{/each} -->
