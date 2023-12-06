<script>
	export let data;
	console.log(data);
</script>

<main>
	<h1>{data.issue.title}</h1>
	<div class="text">
		<svelte:component this={data.content} />
	</div>

	{#each data.articles as article}
		<a href="/articles/{article.slug}"
			><article>
				<h2>{article.title}</h2>
			</article></a
		>
	{/each}
</main>

<style lang="scss">
	main {
		max-width: 40rem;
		width: 100%;
		margin: 0 auto;
	}
</style>
