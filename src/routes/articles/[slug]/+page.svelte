<script>
	import AuthorLink from '$lib/components/AuthorLink.svelte';
	import { formatDate } from '$lib/js/utils.js';
	export let data;
</script>

<main>
	<h1>{data.meta.title}</h1>
	<h3>
		By <AuthorLink names={data.meta.authors} />&nbsp;•&nbsp {formatDate(data.meta.date)} &nbsp;•&nbsp
		{data.meta.readtime} minute read
	</h3>
	<div class="description">
		{data.meta.description}
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
		margin: 1rem 0;
		font-style: italic;
	}
</style>
