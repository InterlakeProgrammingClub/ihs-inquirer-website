<script>
	export let post;
</script>

<div class="panel">
	<img src={post.featured_img} alt="" />
	<h2>{post.title}</h2>
	<p>By {post.author}</p>
	<p>{post.date}</p>
	<p>{post.description}</p>
</div>

<style>
	.panel {
		width: 280px;
		min-height: 400px;
		border: 2px solid black;
		border-radius: 4px;
		margin: 20px;
		padding: 5px;
		background-color: var(--link-color-1);
	}

	img {
		display: relative;
		width: 100%;
	}

	h2 {
		margin: 2px;
	}
</style>
