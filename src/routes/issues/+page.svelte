<script>
	import struct from '/src/bio/struct.json';
	const years = Object.keys(struct.issues);
	years.sort((a, b) => b - a);
</script>

<main>
	<h1>Past Issues</h1>

	<div class="hor-divider" />
	{#each years as year, i}
		<a href={`/issues/${year}`}>
			{struct.issues[year].meta.name} - {struct.issues[year].meta.description}
		</a>

		<div class="hor-divider" />
	{/each}
</main>

<style lang="scss">
	main {
		max-width: 40rem;
		width: 40rem;
		margin: 0 auto;
	}

	a {
		display: block;
		padding: 1.5rem 0;
		font-size: 1.2rem;

		@include underline;
	}
</style>
