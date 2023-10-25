<script>
	import { page } from '$app/stores';

	export let data;

	const { year } = $page.params;
	const obj = data?.posts[year];
	const seasons = obj ? Object?.keys(obj) : [];
</script>

{#each seasons as season}
	<a class="pretty-link" href={'/issues/' + year + '/' + season}>{season}</a>
{/each}
