<script>
	import PageHead from '$lib/components/PageHead.svelte';
	export let data;
</script>

<PageHead title="Weekly Woof" description="" />

<main>
	<h1>Weekly Woof</h1>

	{#each data.woofs as woof}
		<div class="woof">
			<h2>{woof.title}</h2>
			<img src={woof.image} alt="woof.title" />
		</div>
	{/each}
</main>

<style lang="scss">
	main {
		max-width: 60rem;
		margin: 0 auto 4rem auto;
	}

	img {
		width: 100%;
	}

	.woof {
		margin: 1.5rem 0;
	}
</style>
