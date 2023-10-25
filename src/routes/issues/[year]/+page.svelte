<script>
	import { page } from '$app/stores';

	export let data;

	const { year } = $page.params;
	const seasons = Object.keys(data.posts[year]);
</script>

{#each seasons as season}
	<a href={'/issues/' + year + '/' + season}>{season}</a>
	<br />
{/each}
