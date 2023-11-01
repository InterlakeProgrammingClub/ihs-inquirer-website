<script>
	import { page } from '$app/stores';
	import struct from '/src/bio/struct.json';

	const { year } = $page.params;
	const quarters = struct.issues[year].quarters;
</script>

{#each Object.keys(quarters) as quarter}
	<a class="pretty-link" href={`/issues/${year}/${quarter}`}>
		{quarters[quarter].meta.name}
	</a>
{/each}

<style lang="scss">
	a:first-child {
		margin-top: 30px;
	}
</style>
