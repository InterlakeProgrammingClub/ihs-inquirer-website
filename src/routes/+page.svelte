<script>
	import struct from '/src/bio/struct.json';
	import BigPanel from '$lib/components/BigPanel.svelte';
	import LongPanel from '$lib/components/LongPanel.svelte';
	export let data;
	const posts = data.posts;

	let longPanel = [];
	for (let slug of struct.home.small) {
		longPanel.push(posts[slug]);
	}
</script>

<main>
	<div class="content">
		<BigPanel post={posts[struct.home.big]} />
		<LongPanel post={longPanel} />
	</div>
</main>

<style>
	main {
		max-width: 1100px;
		margin: auto;
	}

	.content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		margin: 40px 0;
	}
</style>
