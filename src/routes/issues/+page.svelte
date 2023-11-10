<script>
	export let data;

	$: console.log(JSON.stringify(data));
</script>

<main>
	<h1>Past Issues</h1>

	<div class="hor-divider" />
	{#each Object.entries(data.years) as [yearId, year], i}
		<h2 class="year">
			{year.title} - {year.year_name}
		</h2>
		{#each Object.entries(year.issues) as [issueId, issue], j}
			<a href={`/issues/${yearId}/${issueId}`} class="issue">
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
