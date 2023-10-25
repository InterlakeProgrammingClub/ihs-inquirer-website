<script>
	export let data;
</script>

<h1>{data.meta.title}</h1>
<h3>By {data.meta.author}</h3>
<svelte:component this={data.content} />
