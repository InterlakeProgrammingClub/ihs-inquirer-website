<script>
	import PageHead from '$lib/components/PageHead.svelte';
</script>

<PageHead title="Admin" description="" />

<svelte:head>
	<meta name="robots" content="noindex" />
	<script defer src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
	<script defer src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
</svelte:head>

<style lang="scss">
	:global(#svelte) {
		display: none !important;
	}
</style>
