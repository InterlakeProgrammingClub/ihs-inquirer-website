<script>
	export let data;
</script>

<h1>Past Issues</h1>

{#each data.posts as post}
	<li>
		<a href={'/issues/' + post.slug}>{post.title}</a>
	</li>
{/each}
