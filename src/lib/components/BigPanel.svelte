<script>
	import { formatDate } from '$lib/js/utils.js';
	export let post;

	const date = formatDate(post.date);
</script>

<a href={`/articles/${post.slug}`}>
	<div class="container">
		<img src={post.featured_img} alt="" />
		<div class="info">
			<div id="title">{post.title}</div>
			<div id="author">{post.author} | {date}</div>
			<div id="readtime">{post.readtime} min read</div>
		</div>
		<!-- <div id="description">{post.description}</div> -->
	</div>
</a>

<style lang="scss">
	.container {
		position: relative;
		width: 720px;
		height: 520px;
		border-radius: 10px;
		color: white;
		text-shadow: 0 0 4px #000000;
		font-weight: bold;
		overflow: hidden;
	}

	@media (max-width: 1125px) {
		.container {
			width: 100%;
		}
	}

	@media (max-width: 650px) {
		.container {
			height: auto;
		}
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px;
		border: 1px solid black;
		transition: 0.2s ease-in-out;
	}

	img:hover {
		transform: scale(1.1);
	}

	.info {
		position: absolute;
		bottom: 20px;
		left: 20px;
	}

	#title {
		font-size: 31px;
		font-weight: bold;
	}

	#description {
		position: absolute;
		bottom: 20px;
		right: 20px;
	}

	a {
		text-decoration: none;
		color: black;
	}
</style>
