<script>
	import AuthorLink from '$lib/components/AuthorLink.svelte';
	import { formatDate } from '$lib/js/utils.js';

	export let data;
</script>

<div class="content">
	<div class="bio">
		{#if data.bio.photo}
			<img class="photo" src={data.bio.photo} alt={data.bio.title} />
		{/if}
		<div class="textContainer">
			<h1>{data.bio.title}</h1>
			<h3>{data.bio.role}</h3>
			{#if data.bio.description}
				<p>{data.bio.description}</p>
			{/if}
		</div>
	</div>
	{#if data.articles.length > 0}
		<div class="articlesContainer">
			<h1>Articles</h1>
			<div class="hor-divider" />
			{#each data.articles as article}
				<div class="article">
					<img src={article.featured_img} alt="Featured" />

					<div class="articleText">
						<h2 class="title">{article.title}</h2>
						<div class="author">
							<AuthorLink names={article.authors} /> | {formatDate(article.date)}
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.content {
		max-width: 50rem;
		width: 100%;
		margin: 0 auto;
	}

	.bio {
		display: flex;
		margin-top: 2rem;
		gap: 3rem;
		padding: 0 1.5rem 2rem 0;

		@include border;

		h1 {
			margin-top: 0;
		}

		h3 {
			margin: 0.8rem 0;
		}

		.textContainer > :last-child {
			margin-bottom: 0;
		}
	}

	.photo {
		max-width: 11rem;
		width: 100%;
		height: fit-content;
		border-radius: 0.6rem;
		aspect-ratio: 4/5;
		object-fit: cover;
	}

	.articlesContainer {
		margin: auto;
	}

	.article {
		display: flex;
		gap: 3rem;
		margin-top: 2rem;
		padding: 0 1.5rem 2rem 0;

		@include border;

		img {
			max-width: 8rem;
			width: 100%;
			height: fit-content;
			border-radius: 0.6rem;
			aspect-ratio: 1/1;
			object-fit: cover;
		}
	}

	.author {
		font-size: 1.1rem;
		color: var(--text-2);
	}

	.articleText {
		h2 {
			margin: 0 0 1rem 0;
		}
	}
</style>
