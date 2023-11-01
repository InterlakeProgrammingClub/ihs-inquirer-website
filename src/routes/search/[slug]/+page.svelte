<script>
	import { formatDate } from '$lib/date.js';
	export let data;
</script>

<div class="content">
	<h1>{data.meta.title}</h1>
	<h3>
		<div>By {data.meta.author}</div>
		<div>{formatDate(data.meta.date)} | {data.meta.readtime} minute read</div>
	</h3>

	<h5 id="description">
		{data.meta.description}
	</h5>
	<div class="text">
		<svelte:component this={data.content} />
	</div>
</div>

<style lang="scss">
	.content {
		max-width: 60em;
		margin: auto;
	}
	.text > :global(*) {
		font-size: 20px;
	}

	#description {
		font-style: italic;
	}
</style>
