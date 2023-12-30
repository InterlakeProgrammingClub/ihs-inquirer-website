<script>
	import AuthorLink from '$lib/components/AuthorLink.svelte';
	import { formatDate } from '$lib/js/utils.js';
	export let data;
</script>

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
		margin: 0 auto 4rem auto;
		max-width: 40rem;
	}

	h3 {
		font-weight: 500;
	}

	.featured {
		margin: 2rem auto;
	}

	.header {
		.description {
			margin: 1rem 0 2rem 0;
			font-style: italic;
		}
	}

	img {
		width: 100%;
	}
</style>
