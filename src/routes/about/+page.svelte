<script>
	import PageHead from '$lib/components/PageHead.svelte';
	import AuthorLink from '../../lib/components/AuthorLink.svelte';

	export let data;
</script>

<PageHead title="About" description="" />

<main>
	<h1>Staff</h1>
	{#each data.staff as staff}
		<a class="staff" href={`/about/${staff.slug}`}>
			<div class="bio">
				<div class="row">
					<h2>{staff.title}</h2>
					<h3>{staff.role}</h3>
				</div>
				<p>{staff.description}</p>
			</div>
			{#if !staff.photo}
				<div class="photo placeholder" />
			{:else}
				<img class="photo" src={staff.photo} alt={staff.title} />
			{/if}
		</a>
	{/each}
	<br />

	<h2>Contributors</h2>
	<div class="contributors">
		{#each data.contributors as contributor}
			<div class="contributor">
				<AuthorLink names={[contributor]} />
			</div>
		{/each}
	</div>
</main>

<style lang="scss">
	main {
		max-width: 50rem;
		margin: 0 auto 4rem auto;
	}

	.row {
		display: flex;
		gap: 1.5rem;
		align-items: center;
	}

	.staff {
		background: var(--bg-2);
		display: flex;
		gap: 0rem;
		margin: 1rem 0;
		text-decoration: none;
		justify-content: space-between;

		h2 {
			margin: 0;
		}

		h3 {
			margin: 0;
			color: var(--text-2);
		}

		p {
			margin: 0.8rem 0 0 0;
			line-height: 1.5;
		}

		.bio {
			padding: 1rem 1.2rem;
		}
	}

	.photo {
		max-width: 8.5rem;
		width: 100%;
		height: fit-content;
		aspect-ratio: 4/5;
		object-fit: cover;
	}

	.photo.placeholder {
		background: var(--bg-2);
		filter: brightness(0.9);
		height: 100%;
	}

	.contributors {
		display: grid;
		grid-template-columns: repeat(auto-fill, 11rem);
		justify-content: space-between;
		margin: 1.5rem 0;
	}

	.contributor {
		font-size: 1.2rem;
		padding: 0.5rem 0;
	}
</style>
