<script>
	import { urlify } from '$lib/utils.js';
	export let data;
</script>

<main>
	<h1>Past Issues</h1>

	<div class="hor-divider" />
	{#each Object.entries(data.years) as [yearId, year], i}
		<h2 class="year">
			{yearId} - {year.year_name}
		</h2>
		{#each year.issues as issue, j}
			<a href={`/issues/${yearId}/${urlify(issue.title)}`} class="issue">
				{issue.title}
			</a>
		{/each}
		<div class="hor-divider" />
	{/each}
</main>

<style lang="scss">
	main {
		max-width: 50rem;
		width: 100%;
		margin: 0 auto;
	}

	.year {
		margin: 1.5rem 0;
	}

	.issue {
		margin: 1.5rem 1.5rem 1.5rem 2rem;
		display: block;
		font-size: 1.1rem;
	}
</style>
