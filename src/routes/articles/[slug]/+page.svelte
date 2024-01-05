<script>
	import PageHead from '$lib/components/PageHead.svelte';
	import AuthorLink from '$lib/components/AuthorLink.svelte';
	import { formatDate } from '$lib/js/utils.js';
	export let data;
</script>

<PageHead title={data.meta.title} description={data.meta.description} />

<main>
	<div class="featured">
		{#if !data.meta.featured_img}
			<img src="/images/placeholder.jpg" alt={data.meta.description} />
		{:else}
			<img src={data.meta.featured_img} alt={data.meta.description} />
		{/if}
	</div>
	<div class="header">
		<h1>{data.meta.title}</h1>
		<h3>
			By <AuthorLink names={data.meta.authors} /> &nbsp;•&nbsp {formatDate(data.meta.date)}
			{#if data.meta.readtime}
				&nbsp;•&nbsp {data.meta.readtime} minute read
			{/if}
		</h3>
		<div class="description">
			{data.meta.description}
		</div>
	</div>
	<div class="text article">
		<svelte:component this={data.content} />
	</div>
</main>

<style lang="scss">
	main {
		margin: 1rem auto 4rem auto;
		width: 100%;
		max-width: 40rem;
	}

	h1 {
		font-size: 2rem;
		margin: 1.5rem 0 0 0;
		text-align: left;
	}

	h3 {
		font-weight: 500;
		margin: 1rem 0;
	}

	.featured {
		img {
			aspect-ratio: 3/2;
			object-fit: cover;
		}
	}

	.header {
		.description {
			margin: 1.5rem 0;
			font-style: italic;
		}
	}

	img {
		width: 100%;
	}

	.article {
		max-width: 40rem;
		margin: 0 auto;
	}
</style>
