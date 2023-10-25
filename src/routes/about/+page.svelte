<script>
	import Bio from '/src/bio/bio.json';

	const editors = Bio.editors;
	const contributors = Bio.contributors;
</script>

<h1>About</h1>

<h1>Editors</h1>
{#each editors as editor}
	<h2>{editor.name}</h2>
	<h3>{editor.position}</h3>
	<p>{editor.bio}</p>
{/each}

<h1>Contributors</h1>
{#each contributors as contributor}
	<h2>{contributor.name}</h2>
	<h3>{contributor.position}</h3>
	<p>{contributor.bio}</p>
{/each}
