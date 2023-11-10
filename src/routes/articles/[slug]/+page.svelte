<script>
	import { formatDate } from '$lib/js/date.js';
	export let data;
</script>

<div class="content">
	<h1>{data.meta.title}</h1>
	<h3>
		By {data.meta.author} &nbsp;•&nbsp {formatDate(data.meta.date)} &nbsp;•&nbsp {data.meta
			.readtime} minute read
	</h3>
	<div class="description">
		{data.meta.description}
	</div>
	<div class="text article">
		<svelte:component this={data.content} />
	</div>
</div>

<style lang="scss">
	.content {
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
