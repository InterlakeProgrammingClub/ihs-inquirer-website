<script>
	import { formatDate } from '$lib/date.js';
	export let post;
</script>

<div class="scroll">
	{#each post as p}
		<a href={`/search/${p.slug}`}>
			<div class="post">
				<div class="info">
					<div id="title">{p.title}</div>
					<div id="author">{p.author}</div>
					<div>{formatDate(p.date)} | {p.readtime} min read</div>
				</div>
				<img src={p.featured_img} alt="" />
			</div>
		</a>
	{/each}
</div>

<style>
	img {
		width: 100px;
		height: 100px;
		object-fit: cover;
		border-radius: 10px;
	}

	.scroll {
		display: flex;
		flex-direction: column;
		height: 500px;
		margin-left: 10px;
	}

	.post {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 350px;
		border-radius: 10px;
		border: 1px solid black;
		padding: 10px;
		margin-bottom: 10px;
	}

	#title {
		font-size: 20px;
		font-weight: bold;
	}

	a {
		text-decoration: none;
		color: black;
	}
</style>
