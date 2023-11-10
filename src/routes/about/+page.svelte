<script>
	export let data;
</script>

<div class="content">
	<h1>Staff</h1>
	<div class="hor-divider" />
	{#each data.bios as staff}
		<div class="staff">
			{#if !staff.photo}
				<div class="photo placeholder" />
			{:else}
				<img class="photo" src={staff.photo} alt={staff.title} />
			{/if}
			<div class="bio">
				<h2>{staff.title}</h2>
				<h3>{staff.role}</h3>
				<p>{staff.description}</p>
			</div>
		</div>
		<div class="hor-divider" />
	{/each}
</div>

<style lang="scss">
	.content {
		max-width: 50rem;
		margin: 0 auto;
	}

	.staff {
		display: flex;
		gap: 3rem;
		margin: 2rem 0;

		h2 {
			margin: 0;
		}

		p {
			margin: 0;
		}

		h3 {
			margin: 1rem 0;
		}
	}

	.photo {
		max-width: 10rem;
		width: 100%;
		height: fit-content;
		border-radius: 0.6rem;
		aspect-ratio: 4/5;
		object-fit: cover;
	}

	.photo.placeholder {
		background: var(--bg-1);
		filter: brightness(0.9);
		height: 100%;
	}
</style>
