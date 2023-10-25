<script>
	export let data;
</script>

<h1>{data.meta.title}</h1>
<svelte:component this={data.content} />
