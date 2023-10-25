<script>
	import { page } from '$app/stores';
	export let data;
	const { year, season } = $page.params;

	console.log(data.posts[year][season]);
</script>

<h1>Past Issues</h1>

{#each data.posts[year][season] as post}
	<li>
		<a href={`/issues/${year}/${season}/${post.slug}`}>{post.title}</a>
	</li>
{/each}
