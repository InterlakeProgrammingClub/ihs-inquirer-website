<script>
	import struct from '/src/bio/struct.json';
	import PageHead from '$lib/components/PageHead.svelte';
	import AuthorLink from '$lib/components/AuthorLink.svelte';
	import { formatDate } from '$lib/js/utils.js';

	export let data;
	const posts = data.posts;

	let featured = posts[struct.home.big];
	let longPanel = [];
	for (let slug of struct.home.small) {
		longPanel.push(posts[slug]);
	}
	let leftPanel = longPanel.slice(0, 2);
	let rightPanel = longPanel.slice(2, 4);
</script>

<PageHead title="" description="" />

<main>
	<div class="articles">
		<div class="column">
			{#each leftPanel as article, i}
				<a href={`/articles/${article.slug}`} class="article">
					<img src={article.featured_img} alt="" />
					<div class="info">
						<h2 class="title">{article.title}</h2>
						<div class="author">
							<AuthorLink names={article.authors} /> | {formatDate(article.date)}
						</div>
					</div>
				</a>
			{/each}
		</div>
		<div class="main">
			<a href={`/articles/${featured.slug}`} class="featured">
				<img src={featured.featured_img} alt="" />
				<div class="info">
					<h2 class="title">{featured.title}</h2>
					<div class="author">
						<AuthorLink names={featured.authors} /> | {formatDate(featured.date)}
					</div>
				</div>
			</a>
		</div>
		<div class="column">
			{#each rightPanel as article, i}
				<a href={`/articles/${article.slug}`} class="article">
					<img src={article.featured_img} alt="" />
					<div class="info">
						<h3 class="title">{article.title}</h3>
						<div class="author">
							<AuthorLink names={article.authors} /> | {formatDate(article.date)}
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</main>

<style lang="scss">
	main {
		margin: 1.5rem auto;
		flex-grow: 1;
	}

	.articles {
		display: flex;
		margin: auto;
		max-width: 80rem;
	}

	.main {
		flex-grow: 1;
		padding: 0 1.5rem;
		display: flex;
		flex-direction: column;
	}

	.column {
		display: flex;
		flex-direction: column;
		max-width: 22%;
	}

	a {
		text-decoration: none;
	}

	.featured {
		display: block;
		padding: 0 1.5rem 2rem 0;
		margin-bottom: 2rem;
		flex-grow: 1;

		@include border;

		.info {
			text-align: center;
		}

		.title {
			font-size: 1.8rem;
			margin: 1rem 0 0.5rem 0;
		}
	}

	.article {
		display: block;
		padding: 0 1.5rem 2rem 0;
		margin-bottom: 2rem;
		height: 100%;

		@include border;

		.title {
			font-size: 1.2rem;
			margin: 0.8rem 0 0.5rem 0;
		}

		.author {
			font-size: 0.9rem;
		}
	}

	.title {
		font-size: 1.2rem;

		@include underline;
	}

	.author {
		color: var(--text-2);
	}

	img {
		width: 100%;
		border-radius: 0.6rem;
		transition: 0.1s ease-out;

		&:hover {
			transform: scale(1.01);
		}
	}
</style>
