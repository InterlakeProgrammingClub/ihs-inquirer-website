<script>
	import struct from '/src/bio/struct.json';
	import PageHead from '$lib/components/PageHead.svelte';
	import AuthorLink from '$lib/components/AuthorLink.svelte';
	import { formatDate } from '$lib/js/utils.js';

	export let data;
	const articles = data.articles;
	const featured = articles[0];
	const leftPanel = articles.slice(1, 3);
	const rightPanel = articles.slice(3, 5);

	// let featured = posts[struct.home.big];
	// let longPanel = [];
	// for (let slug of struct.home.small) {
	// 	longPanel.push(posts[slug]);
	// }
	// let leftPanel = longPanel.slice(0, 2);
	// let rightPanel = longPanel.slice(2, 4);
</script>

<PageHead title="" description="" />

<main>
	<div class="articles">
		<div class="column">
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
							<AuthorLink names={article.authors} /> <span>|</span>
							{formatDate(article.date)}
						</div>
					</div>
				</a>
			{/each}
		</div>
		<div class="main">
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
						<AuthorLink names={featured.authors} /> <span>|</span>
						{formatDate(featured.date)}
					</div>
				</div>
			</a>
		</div>
		<div class="column">
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
							<AuthorLink names={article.authors} /> <span>|</span>
							{formatDate(article.date)}
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
	<br />
	<br />
	<br />
	<br />
	<div class="woof">
		<h2>Latest Weekly Woof</h2>
		<img src={data.woof.image} alt="woof.title" />
	</div>
</main>

<style lang="scss">
	main {
		margin: 2rem auto 4rem auto;
		flex-grow: 1;
	}

	.articles {
		display: flex;
		margin: auto;
		max-width: 70rem;
		gap: 2rem;
	}

	.column {
		display: flex;
		flex-direction: column;
		max-width: 15rem;
		width: 100%;
		gap: 2rem;
	}

	.article,
	.featured {
		display: flex;
		flex-direction: column;
		text-decoration: none;

		img {
			width: 100%;
			aspect-ratio: 4/3;
			object-fit: cover;
		}
	}

	.article {
		h2 {
			font-size: 1.2rem;
			margin: 1rem 0 0.6rem 0;
		}
	}

	.featured {
		text-align: center;

		h2 {
			font-size: 1.8rem;
			margin: 1.2rem 0 0.8rem 0;
		}
	}

	h2,
	h3 {
		@include underline;
	}

	.author {
		// font-size: 0.9rem;
		color: var(--text-2);
	}

	.description {
		margin-bottom: 0.8rem;
		line-height: 1.25;
	}

	span {
		margin: 0 0.2rem;
	}

	.woof {
		max-width: 50rem;
		margin: 0 auto;

		h2 {
			margin: 1rem 0;
		}

		img {
			width: 100%;
			height: auto;
		}
	}
</style>
