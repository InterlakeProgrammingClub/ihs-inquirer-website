<script>
	import { goto } from '$app/navigation';
	import AuthorLink from '../../lib/components/AuthorLink.svelte';
	import { formatDate } from '$lib/js/utils.js';
	import { onMount } from 'svelte';

	export let data;
	let query = data.query;
	$: data, (query = data.query);

	const search = (event) => {
		event.preventDefault();
		if (query === '') return;
		goto(`/search?q=${encodeURIComponent(query)}`);
	};
</script>

<div class="content">
	<form on:submit={search}>
		<input placeholder="Search" bind:value={query} />
		<button>
			<img src="/search.png" alt="Search" />
		</button>
	</form>

	<div class="articlesContainer">
		<div class="hor-divider" />
		{#each data.results as article}
			<a href={`/articles/${article.slug}`} class="article">
				<img src={article.featured_img} alt="Featured" />

				<div class="articleText">
					<h2 class="title">{article.title}</h2>
					<div class="author">
						<AuthorLink names={article.authors} /> | {formatDate(article.date)}
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	.content {
		max-width: 50rem;
		width: 100%;
		margin: 0 auto;
	}

	form {
		position: relative;
		margin: 3rem auto;
		display: flex;
		justify-content: center;
		align-items: center;
		width: fit-content;

		input {
			font-family: inherit;
			border: solid 1px var(--divider);
			border-radius: 0.6rem;
			background-color: transparent;
			height: 2rem;
			width: 20rem;
			text-indent: 0.5rem;
		}

		:focus {
			outline: none;
		}

		button {
			background-color: transparent;
			width: 1.5rem;
			height: 1.5rem;
			position: absolute;
			right: 0.5rem;

			img {
				width: 1.5rem;
				height: auto;
			}
		}
	}

	.articlesContainer {
		margin: auto;
	}

	.article {
		display: flex;
		gap: 3rem;
		margin-top: 2rem;
		padding: 0 1.5rem 2rem 0;
		text-decoration: none;

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

	.title {
		@include underline;
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
