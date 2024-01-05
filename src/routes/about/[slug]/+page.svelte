<script>
	import PageHead from '$lib/components/PageHead.svelte';
	import AuthorLink from '$lib/components/AuthorLink.svelte';
	import { formatDate } from '$lib/js/utils.js';

	export let data;
</script>

<PageHead
	title={data.bio.title}
	description={`Meet ${data.bio.title}, ${data.bio.role} at the Interlake Inquirer.`}
/>

<div class="content">
	<div class="bio">
		<div class="textContainer">
			<h1>{data.bio.title}</h1>
			<h3>{data.bio.role}</h3>
			{#if data.bio.description}
				<p>{data.bio.description}</p>
			{/if}
		</div>
		{#if data.bio.photo}
			<img class="photo" src={data.bio.photo} alt={data.bio.title} />
		{/if}
	</div>
	<br />
	{#if data.articles.length > 0}
		<h2>Articles</h2>
		<div class="articles">
			{#each data.articles as article}
				<a href={`/articles/${article.slug}`} class="article">
					<div class="info">
						<h3 class="title">{article.title}</h3>
						<div class="author">
							<AuthorLink names={article.authors} /> <span class="divider">|</span>
							{formatDate(article.date)}
						</div>
					</div>
					{#if !article.featured_img}
						<img src="/images/placeholder.jpg" alt="" />
					{:else}
						<img src={article.featured_img} alt="" />
					{/if}
				</a>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.content {
		max-width: 50rem;
		width: 100%;
		margin: 0 auto 4rem auto;
	}

	.bio {
		background: var(--bg-2);
		display: flex;
		margin-top: 2rem;
		justify-content: space-between;

		h1 {
			text-align: left;
			margin-bottom: 1rem;
		}

		h3 {
			margin: 0;
		}

		p {
			margin: 0.8rem 0 0 0;
		}

		.textContainer {
			padding: 1.2rem 1.5rem;
		}
	}

	.photo {
		max-width: 11rem;
		width: 100%;
		height: auto;
		aspect-ratio: 4/5;
		object-fit: cover;
	}

	.articles {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.article {
			background: var(--bg-2);
			display: flex;
			gap: 1rem;
			justify-content: space-between;
			text-decoration: none;

			img {
				max-width: 11rem;
				width: 100%;
				object-fit: cover;
				aspect-ratio: 4/3;
			}

			.info {
				padding: 1rem;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
		}

		h3 {
			margin: 0rem;

			@include line-clamp(2);
		}

		.author {
			color: var(--text-2);
		}
	}
</style>
