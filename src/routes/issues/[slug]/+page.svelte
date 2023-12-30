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
		<a href="/articles/{article.slug}">
			<article>
				<h3>{article.title}</h3>
			</article>
		</a>
	{/each}
</main>

<style lang="scss">
	main {
		max-width: 50rem;
		width: 100%;
		margin: 0 auto;
	}

	h1 {
		text-align: center;
	}

	h3 {
		font-weight: 600;
	}
</style>
