<script>
	import struct from '/src/bio/struct.json';
</script>

<main>
	<h1>Past Issues</h1>

	<div class="hor-divider" />
	{#each Object.entries(struct.issues) as [yearId, year], i}
		<h2 class="year">
			{year.name} - {year.description}
		</h2>
		{#each Object.entries(year.quarters) as [quarterId, quarter], j}
			<a href={`/issues/${yearId}-${quarterId}`} class="quarter">
				{quarter.name}
			</a>
		{/each}
		<div class="hor-divider" />
	{/each}
</main>

<style lang="scss">
	main {
		max-width: 50rem;
		width: 50rem;
		margin: 0 auto;
	}

	.year {
		margin: 1.5rem 0;
		font-size: 1.2rem;
		font-weight: normal;
	}

	.quarter {
		margin: 1.5rem;
		display: block;
		font-size: 1.1rem;
		font-weight: bold;

		@include underline;
	}
</style>
