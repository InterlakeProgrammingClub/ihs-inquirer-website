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
		max-height: 250px;
		margin-bottom: 20px;
	}

	.gallery {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>
