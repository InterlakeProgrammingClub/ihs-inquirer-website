<script>
	export let post;
</script>

<div class="panel">
	<h2>{post.title}</h2>
	<p>By {post.author}</p>
	<p>{post.description}</p>
</div>

<style>
	.panel {
		width: 280px;
		height: 380px;
		border: 2px solid black;
		border-radius: 4px;
		margin: 20px;
		padding: 5px;
	}
</style>
