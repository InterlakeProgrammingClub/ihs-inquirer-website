<script>
	import PageHead from '$lib/components/PageHead.svelte';

	export let data;

	function removeYear(title, year) {
		if (title.includes(year)) {
			return title.replace(year, '');
		}
		return title;
	}
</script>

<PageHead title="Past Issues" description="Past issues of the Interlake Inquirer." />

<main>
	<h1>Past Issues</h1>

	{#each Object.entries(data.years) as [yearSlug, year], i}
		<div class="year-group">
			<h3 class="year">
				{year.title}{year.year_name ? ' - ' + year.year_name : ''}
			</h3>
			{#each Object.entries(year.issues) as [issueSlug, issue], j}
				<a href={`/issues/${issueSlug}`}>
					{removeYear(issue.title, year.title)}
				</a>
			{/each}
		</div>
	{/each}
</main>

<style lang="scss">
	main {
		max-width: 40rem;
		width: 100%;
		margin: 0 auto 4rem auto;
	}

	a {
		background: var(--bg-2);
		color: var(--text-2);
		padding: 1rem;
		margin: 0.6rem 0rem 0.6rem 0rem;
		display: block;
		font-size: 1.1rem;
		@include underline;
	}

	.year-group {
		margin: 2rem 0;
	}
</style>
