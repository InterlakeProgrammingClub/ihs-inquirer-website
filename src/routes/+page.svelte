<script>
	import PageHead from '$lib/components/PageHead.svelte';
	import AuthorLink from '$lib/components/AuthorLink.svelte';
	import { formatDate } from '$lib/js/utils.js';

	export let data;
	const articles = data.articles;
	const featured = articles[0];
	const leftPanel = articles.slice(1, 3);
	const rightPanel = articles.slice(3, 5);
</script>

<PageHead title="Home" description="The Official Student Newspaper of Interlake High School." />

<main>
	<div class="articles">
		{#each leftPanel as article, i}
			<a href={`/articles/${article.slug}`} class="article">
				{#if !article.featured_img}
					<img src="/images/placeholder.jpg" alt="" />
				{:else}
					<img src={article.featured_img} alt="" />
				{/if}
				<div class="info">
					<h2 class="title">{article.title}</h2>
					<div class="author">
						<AuthorLink names={article.authors} /> <span class="divider">|</span>
						{formatDate(article.date)}
					</div>
				</div>
			</a>
		{/each}
		<a href={`/articles/${featured.slug}`} class="featured">
			{#if !featured.featured_img}
				<img src="/images/placeholder.jpg" alt="" />
			{:else}
				<img src={featured.featured_img} alt="" />
			{/if}
			<div class="info">
				<h2 class="title">{featured.title}</h2>
				<div class="description">
					{featured.description}
				</div>
				<div class="author">
					<AuthorLink names={featured.authors} /> <span class="divider">|</span>
					{formatDate(featured.date)}
				</div>
			</div>
		</a>
		{#each rightPanel as article, i}
			<a href={`/articles/${article.slug}`} class="article">
				{#if !article.featured_img}
					<img src="/images/placeholder.jpg" alt="" />
				{:else}
					<img src={article.featured_img} alt="" />
				{/if}
				<div class="info">
					<h2 class="title">{article.title}</h2>
					<div class="author">
						<AuthorLink names={article.authors} /> <span class="divider">|</span>
						{formatDate(article.date)}
					</div>
				</div>
			</a>
		{/each}
	</div>
	<br />
	<br />
	<br />
	<h2>More Articles</h2>
	<div class="more-articles">
		{#each [0, 1] as col}
			<div class="column">
				{#each articles.slice(5 + col * 3, 8 + col * 3) as article, i}
					<a href={`/articles/${article.slug}`} class="more-article">
						<div class="info">
							<h3 class="title">{article.title}</h3>
							<div class="author">
								<AuthorLink names={article.authors} /> <span class="divider">|</span>
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
		{/each}
	</div>
	<br />
	<br />
	<br />
	<h2><a class="header" href="/weekly-woof"> Latest Weekly Woof </a></h2>
	<div class="woof">
		<img src={data.woof.image} alt="woof.title" />
	</div>
</main>

<style lang="scss">
	main {
		margin: 1rem auto 4rem auto;
		flex-grow: 1;
		width: 100%;
		max-width: 72rem;
	}

	.articles {
		display: grid;
		margin: auto;
		gap: 2rem;
		grid-template-columns: 1fr minmax(auto, 40rem) 1fr;
		grid-template-rows: auto auto;
		grid-auto-flow: column;
	}

	.article,
	.featured {
		display: flex;
		flex-direction: column;
		text-decoration: none;
	}

	.article {
		h2 {
			font-size: 1.2rem;
			margin: 1rem 0 0.6rem 0;

			@include line-clamp(2);
		}

		img {
			aspect-ratio: 4/3;
		}
	}

	.featured {
		grid-column: 2 / 3;
		grid-row: 1 / 3;
		text-align: center;
		max-width: 40rem;
		width: 100%;

		h2 {
			font-size: 1.8rem;
			margin: 1.2rem 0 0.8rem 0;
		}

		img {
			aspect-ratio: 3/2;
		}
	}

	img {
		width: 100%;
		object-fit: cover;
	}

	h2,
	h3 {
		@include underline;
	}

	.author {
		// font-size: 0.9rem;
		color: var(--text-2);

		@include line-clamp(2);
	}

	.description {
		margin-bottom: 0.8rem;
	}

	a.header {
		text-decoration: none;
	}

	h2 {
		margin: 0 0 1.5rem 0;
	}

	.more-articles {
		display: flex;
		gap: 1rem;

		.column {
			display: flex;
			gap: 1rem;
			flex-direction: column;
			width: 100%;
		}

		.more-article {
			background: var(--bg-2);
			display: flex;
			gap: 1rem;
			justify-content: space-between;
			text-decoration: none;

			img {
				max-width: 25%;
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
	}

	.woof {
		margin: 0 auto;

		img {
			width: 100%;
			height: auto;
		}
	}
</style>
