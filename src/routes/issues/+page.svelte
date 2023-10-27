<script>
	import struct from '/src/bio/struct.json';

	const years = Object.keys(struct.issues);
	years.sort((a, b) => b - a);
</script>

<h1>Past Issues</h1>

{#each years as year}
	<a class="pretty-link" href={`/issues/${year}`}>
		<div>{struct.issues[year].meta.name}</div>
		<div>{struct.issues[year].meta.description}</div>
	</a>
{/each}
