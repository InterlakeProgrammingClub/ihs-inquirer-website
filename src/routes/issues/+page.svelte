<script>
	export let data;

	console.log(data);
</script>

<main>
	<h1>Past Issues</h1>

	<div class="hor-divider" />
	{#each Object.entries(data.years) as [yearId, year], i}
		<h2 class="year">
			{yearId} - {year.name}
		</h2>
		{#each Object.entries(year.issues) as [issuesId, issue], j}
			<a href={`/issues/${issuesId}`} class="issue">
				{issue.issue_name}
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
