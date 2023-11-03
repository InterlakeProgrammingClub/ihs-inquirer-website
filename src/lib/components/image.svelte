<script>
	export let paths;
</script>

<div class="gallery">
	{#each paths as path}
		<img src={path} alt="" />
	{/each}
</div>

<style lang="scss">
	img {
		max-width: 100%;
		min-width: 0%;
		height: auto;
		flex-grow: 1;
	}

	.gallery {
		display: flex;
		gap: 1rem;
		margin: 1rem 0;
	}
</style>
