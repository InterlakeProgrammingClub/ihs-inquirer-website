<script>
	import { formatDate } from '$lib/js/utils.js';
	export let post;
</script>

<div class="scroll">
	{#each post as p}
		<a href={`/articles/${p.slug}`}>
			<div class="post">
				<div class="info">
					<div id="title">{p.title}</div>
					<div id="secondary">
						<div id="date">{formatDate(p.date)} | {p.readtime} min read</div>
						<div id="author"><a href="/">{p.author}</a></div>
					</div>
				</div>
				<img src={p.featured_img} alt="" />
			</div>
		</a>
	{/each}
</div>

<style lang="scss">
	img {
		width: 100px;
		height: 100px;
		object-fit: cover;
		border-radius: 10px;
		transition: transform 0.2s ease-in-out;
	}

	img:hover {
		transform: scale(1.1);
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
		max-height: 70px;
		overflow: hidden;
		font-weight: bold;
		display: inline-block;
	}

	#title:hover {
		text-decoration: underline;
	}

	#author {
		display: inline-block;
	}
	#author:hover {
		text-decoration: underline;
	}

	#date {
		text-decoration: none;
	}

	@media (max-width: 650px) {
		.scroll {
			margin-left: 0;
			height: auto;
		}
		.post {
			width: auto;
		}
	}
</style>
