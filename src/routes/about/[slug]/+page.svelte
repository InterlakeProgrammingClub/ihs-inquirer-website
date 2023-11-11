<script>
	export let data;
</script>

<div class="content">
	<div class="mainContainer">
		<div class="textContainer">
			<h1>{data.bio.title}</h1>
			<h2>{data.bio.role}</h2>
			<p>{data.bio.description}</p>
		</div>

		{#if data.bio.photo}
			<div class="imageContainer">
				<img src={data.bio.photo} alt={`${data.bio.title}'s Photo`} />
			</div>
		{/if}
	</div>
	{#if data.articles.length > 0}
		<div class="articlesContainer">
			<h1>Articles</h1>
			<div class="articles">
				{#each data.articles as item}
					<div class="article">
						<div class="articleImageContainer">
							<img src={item.featured_img} alt="Featured" />
						</div>

						<div class="articleText">
							<h1>{item.title}</h1>

							{#each item.categories as categories}
								<div>
									{categories}
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
	}

	.mainContainer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 1rem;
	}

	.textContainer {
		text-align: center;
		width: 40%;
	}

	.imageContainer {
		margin-left: 5rem;
		height: 30rem;
	}

	.imageContainer img {
		max-height: 100%;
		width: auto;
	}

	.textContainer h2 {
		font-size: large;
	}

	.articlesContainer {
		text-align: center;
	}

	.articles {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-bottom: 5rem;
	}

	.article {
		border: solid 1px black;
		width: 30rem;
		display: flex;
		flex-direction: column;
	}

	.articleImageContainer {
		margin-top: 1rem;
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.articleImageContainer img {
		max-height: 10rem;
		width: auto;
	}
</style>
