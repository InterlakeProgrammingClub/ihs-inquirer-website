<script>
	import { page } from '$app/stores';
	import Panel from '$lib/components/panel.svelte';
	export let data;
	const { year, quarter } = $page.params;
</script>

<div class="panels">
	{#each data.posts[year].quarters[quarter].articles as post}
		<a href={`/search/${post.slug}`}><Panel {post} /></a>
	{/each}
</div>

<style>
	.panels {
		display: flex;
		flex-wrap: wrap;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
</style>
