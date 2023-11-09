<script>
	import { page } from '$app/stores';
	import Panel from '$lib/components/panel.svelte';
	import struct from '/src/bio/struct.json';
	export let data;
	const { year, quarter } = $page.params;
</script>

<main>
	<h1>{struct.issues[year].meta.name} {struct.issues[year].quarters[quarter].meta.name}</h1>
	<div class="panels">
		{#each data.posts[year].quarters[quarter].articles as post}
			<a href={`/articles/${post.slug}`}><Panel {post} /></a>
		{/each}
	</div>
</main>

<style lang="scss">
	.panels {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
