<script>
	import struct from '/src/bio/struct.json';
	import PageHead from '$lib/components/PageHead.svelte';
	import BigPanel from '$lib/components/BigPanel.svelte';
	import LongPanel from '$lib/components/LongPanel.svelte';

	export let data;
	const posts = data.posts;

	let featured = posts[struct.home.big];
	let longPanel = [];
	for (let slug of struct.home.small) {
		longPanel.push(posts[slug]);
	}
	let leftPanel = longPanel.slice(0, 2);
	let rightPanel = longPanel.slice(2, 4);

	function formatDate(date) {
		let d = new Date(date);
		return d.toLocaleDateString('en-us', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			timeZone: 'UTC'
		});
	}
</script>

<PageHead title="" description="" />

<main>
	<div class="articles">
		<div class="column">
			{#each leftPanel as post, i}
				<a href={`/articles/${post.slug}`} class="article">
					<img src={post.featured_img} alt="" />
					<div class="info">
						<h2 class="title">{post.title}</h2>
						<div class="author">{post.author} | {formatDate(post.date)}</div>
					</div>
				</a>
				{#if i != rightPanel.length - 1}
					<div class="hor-divider" />
				{/if}
			{/each}
		</div>
		<div class="ver-divider" />
		<div class="main">
			<a href={`/articles/${featured.slug}`} class="featured">
				<img src={featured.featured_img} alt="" />
				<div class="info">
					<h2 class="title">{featured.title}</h2>
					<div class="author">{featured.author} | {formatDate(featured.date)}</div>
				</div>
			</a>
		</div>
		<div class="ver-divider" />
		<div class="column">
			{#each rightPanel as post, i}
				<a href={`/articles/${post.slug}`} class="article">
					<img src={post.featured_img} alt="" />
					<div class="info">
						<h3 class="title">{post.title}</h3>
						<div class="author">
							{post.author} | {formatDate(post.date)}
						</div>
					</div>
				</a>
				{#if i != rightPanel.length - 1}
					<div class="hor-divider" />
				{/if}
			{/each}
		</div>
	</div>
</main>

<style lang="scss">
	main {
		margin: 1rem auto;
		flex-grow: 1;
	}

	.articles {
		display: flex;
		margin: auto;
		max-width: 80rem;
	}

	.main {
		flex-grow: 1;
		padding: 0 2rem;
	}

	.column {
		display: flex;
		flex-direction: column;
		max-width: 20%;
		padding: 0 2rem;
	}

	.hor-divider {
		margin: 2rem 0;
	}

	a {
		text-decoration: none;
	}

	.featured {
		display: block;

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
	}
</style>
