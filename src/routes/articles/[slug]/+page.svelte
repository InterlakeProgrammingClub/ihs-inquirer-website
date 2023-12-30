<script>
	import AuthorLink from '$lib/components/AuthorLink.svelte';
	import { formatDate } from '$lib/js/utils.js';
	export let data;
</script>

<main>
	<div class="featured">
		<img src={data.meta.featured_img} alt={data.meta.description} />
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
		max-width: 40rem;
		margin: 0 auto 4rem auto;
	}

	h3 {
		font-weight: 500;
	}

	.description {
		margin: 1rem 0 2rem 0;
		font-style: italic;
	}

	.featured {
		margin: 2rem auto;
	}

	img {
		width: 100%;
		border-radius: 0.6rem;
	}
</style>
