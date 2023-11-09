<script>
	export let data;
</script>

<main>
	<h1>{data.meta.year} {data.meta.issue_name}</h1>
	<div class="text">
		<svelte:component this={data.content} />
	</div>
</main>

<style lang="scss">
	main {
		max-width: 40rem;
		width: 100%;
		margin: 0 auto;
	}
</style>
