<script>
	import Bio from '/src/bio/bio.json';

	const editors = Bio.editors;
	const contributors = Bio.contributors;
</script>

<h1>Editors</h1>
<div class="editors">
	{#each editors as editor}
		<div class="editor">
			<img src={editor.img} alt={editor.name} />

			<div class="bio">
				<h2>{editor.name}</h2>
				<h3>{editor.position}</h3>
				<p>{editor.bio}</p>
			</div>
		</div>
	{/each}
</div>

<h1>Contributors</h1>
<div class="contributors">
	{#each contributors as contributor}
		<div class="contributor">
			<img src={contributor.img} alt={contributor.name} />

			<div class="bio">
				<h2>{contributor.name}</h2>
				<h3>{contributor.position}</h3>
				<p>{contributor.bio}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	h1 {
		text-align: center;
	}

	img {
		width: 200px;
	}

	.editors,
	.contributors {
		display: flex;
		flex-direction: column;
	}

	.editor,
	.contributor {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin: 20px 0;
	}

	.bio {
		display: block;
		width: 50vh;
	}
</style>
