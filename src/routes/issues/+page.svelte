<script>
	export let data;

	function removeYear(title, year) {
		if (title.includes(year)) {
			return title.replace(year, '');
		}
		return title;
	}
</script>

<main>
	<h1>Past Issues</h1>

	<div class="hor-divider" />
	{#each Object.entries(data.years) as [yearSlug, year], i}
		<div class="year-group">
			<h2 class="year">
				{year.title} - {year.year_name}
			</h2>
			{#each Object.entries(year.issues) as [issueSlug, issue], j}
				<a href={`/issues/${issueSlug}`} class="issue">
					{removeYear(issue.title, year.title)}
				</a>
			{/each}
		</div>
	{/each}
</main>

<style lang="scss">
	main {
		max-width: 50rem;
		width: 100%;
		margin: 0 auto;
	}

	.year {
	}

	.issue {
		margin: 1.5rem 1.5rem 1.5rem 3rem;
		display: block;
		font-size: 1.1rem;
	}

	.year-group {
		@include border;
		margin: 2rem 0;
	}
</style>
