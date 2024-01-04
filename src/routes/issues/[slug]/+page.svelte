<script>
	import AuthorLink from '$lib/components/AuthorLink.svelte';
	import { formatDate } from '$lib/js/utils.js';

	export let data;
	console.log(data);
</script>

<main>
	<h1>{data.issue.title}</h1>

	<div class="text">
		<svelte:component this={data.content} />
	</div>

	<div class="articles">
		{#each data.articles as article}
			<a href={`/articles/${article.slug}`} class="article">
				<div class="info">
					<h3 class="title">{article.title}</h3>
					<div class="author">
						<AuthorLink names={article.authors} /> <span>|</span>
						{formatDate(article.date)}
					</div>
				</div>
				{#if !article.featured_img}
					<img src="/images/placeholder.jpg" alt="" />
				{:else}
					<img src={article.featured_img} alt="" />
				{/if}
			</a>
		{/each}
	</div>
</main>

<style lang="scss">
	main {
		max-width: 40rem;
		width: 100%;
		margin: 0rem auto 4rem auto;
	}

	.text {
		margin-bottom: 3rem;
	}

	.articles {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.article {
			background: var(--bg-2);
			display: flex;
			gap: 1rem;
			justify-content: space-between;
			text-decoration: none;

			img {
				max-width: 22%;
				aspect-ratio: 4/3;
			}

			.info {
				padding: 1rem;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
		}

		h3 {
			margin: 0rem;

			@include line-clamp(2);
		}

		.author {
			color: var(--text-2);
		}
	}
</style>
