<script>
	export let data;
</script>

<h1>Staff</h1>
<div class="editors">
	{#each data.bios as staff}
		<div class="staff">
			<img src={staff.photo} alt={staff.title} />

			<div class="bio">
				<h2>{staff.title}</h2>
				<h3>{staff.role}</h3>
				<p>{staff.description}</p>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
</style>
