<script>
	export let data;
</script>

<main>
	<h1>Weekly Woof</h1>

	<div class="hor-divider" />
	{#each data.woofs as woof}
		<div class="woof">
			<h2>{woof.title}</h2>
			<img src={woof.image} alt="woof.title" />
		</div>
	{/each}
</main>

<style lang="scss">
	main {
		max-width: 60rem;
		margin: 0 auto 4rem auto;
	}

	img {
		width: 100%;
	}

	.woof {
		margin: 1.5rem 0;
		padding: 0 1.5rem 1.5rem 0;
		@include border;
	}
</style>
