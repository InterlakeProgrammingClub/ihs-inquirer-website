<script>
	export let post;
</script>

<div class="panel">
	<picture>
		<img src={post.featured_img} alt="" />
	</picture>
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
		background-color: var(--link-color-1);
	}

	img {
		width: 280px;
		height: 200px;
		object-fit: cover;
	}

	h2 {
		margin: 2px;
	}
</style>
