<script>
	import { page } from '$app/stores';
	import struct from '/src/bio/struct.json';

	const { year } = $page.params;
	const seasons = Object.keys(struct[year]);
</script>

{#each seasons as season}
	<a class="pretty-link" href={'/issues/' + year + '/' + season}>{season}</a>
{/each}
