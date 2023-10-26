<script>
	import struct from '/src/bio/struct.json';

	const years = Object.keys(struct);
</script>

<h1>Past Issues</h1>

{#each years as year}
	<a class="pretty-link" href={'/issues/' + year}>{year}</a>
{/each}
