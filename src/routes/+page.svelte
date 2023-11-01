<script>
	import struct from '/src/bio/struct.json';
	import BigPanel from '$lib/components/BigPanel.svelte';
	import LongPanel from '$lib/components/LongPanel.svelte';

	export let data;
	const posts = data.posts;

	console.log(posts);

	let featured = posts[struct.home.big];
	let longPanel = [];
	for (let slug of struct.home.small) {
		longPanel.push(posts[slug]);
	}
	let leftPanel = longPanel.slice(0, 2);
	let rightPanel = longPanel.slice(2, 4);
</script>

<main>
	<!-- <h1>The Interlake Inquirer</h1> -->

	<div class="articles">
		<div class="column">
			{#each leftPanel as post, i}
				<a href={`/search/${post.slug}`} class="article">
					<img src={post.featured_img} alt="" />
					<div class="info">
						<h2 class="title">{post.title}</h2>
						<div class="author">{post.author} | {post.date}</div>
					</div>
				</a>
				{#if i != rightPanel.length - 1}
					<div class="hor-divider" />
				{/if}
			{/each}
		</div>
		<div class="ver-divider" />
		<div class="main">
			<a href={`/search/${featured.slug}`} class="featured">
				<img src={featured.featured_img} alt="" />
				<div class="info">
					<h2 class="title">{featured.title}</h2>
					<div class="author">{featured.author} | {featured.date}</div>
				</div>
			</a>
		</div>
		<div class="ver-divider" />
		<div class="column">
			{#each rightPanel as post, i}
				<a href={`/search/${post.slug}`} class="article">
					<img src={post.featured_img} alt="" />
					<div class="info">
						<h3 class="title">{post.title}</h3>
						<div class="author">{post.author} | {post.date}</div>
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
		margin: 3rem auto;
		flex-grow: 1;
	}

	h1 {
		font-size: 3.5rem;
		text-align: center;
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
		max-width: 18%;
		padding: 0 2rem;
	}

	.ver-divider {
		border-right: 1px solid var(--divider);
	}

	.hor-divider {
		border-bottom: 1px solid var(--divider);
		margin: 2rem 0;
	}

	.featured {
		display: block;

		.info {
			text-align: center;
		}

		.title {
			font-size: 2rem;
			margin: 1rem 0 0.6rem 0;
		}
	}

	.article {
		display: block;

		.title {
			font-size: 1.3rem;
			margin: 0.8rem 0 0.6rem 0;
		}
	}

	img {
		width: 100%;
		border-radius: 0.6rem;
	}
</style>
