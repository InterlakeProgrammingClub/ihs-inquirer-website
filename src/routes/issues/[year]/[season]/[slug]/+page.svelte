<script>
	export let data;
</script>

<div class="content">
	<h1>{data.meta.title}</h1>
	<h3>By {data.meta.author}</h3>
	<div class="text">
		<svelte:component this={data.content} />
	</div>
</div>

<style>
	.content {
		max-width: 60em;
		margin: auto;
	}
	.text > :global(*) {
		font-size: 20px;
		line-height: 1.5;
	}
</style>
